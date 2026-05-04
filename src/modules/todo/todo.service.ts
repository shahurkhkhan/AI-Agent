/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import dotenv from 'dotenv';
dotenv.config();

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { readFileSync } from 'fs';
import { join } from 'path';

import { ChatOpenAI } from '@langchain/openai';
import { tool } from '@langchain/core/tools';
import {
  AIMessage,
  HumanMessage,
  SystemMessage,
  ToolMessage,
} from '@langchain/core/messages';

import { z } from 'zod';
import { StateGraph, START, END, Annotation } from '@langchain/langgraph';

import { Todo } from './todo.schema';
import { LLMClientService } from 'src/core/llm.service';

@Injectable()
export class TodoService {
  private client = new ChatOpenAI({
    model: 'gpt-4o-mini',
    apiKey: process.env.OPENAI_API_KEY,
    temperature: 0,
  });

  constructor(
    @InjectModel(Todo.name) private todoModel: Model<Todo>,
    private LLMClient: LLMClientService,
  ) {}

  // =========================
  // DB FUNCTIONS
  // =========================

  public createTodo = async (task: string) => {
    const created = new this.todoModel({ task });
    const saved = await created.save();
    return saved._id.toString();
  };

  public findAllTodo = async () => {
    return this.todoModel.find().lean().exec();
  };

  public deleteTodo = async (id: string) => {
    return this.todoModel.findByIdAndDelete(id).lean().exec();
  };

  public searchTodo = async (query: string) => {
    return this.todoModel
      .find({ task: { $regex: query, $options: 'i' } })
      .lean()
      .exec();
  };


  // =========================
  // CUSTOM LOGIC OF TOOL 
  // =========================

  private tools = {
    createTodo: async (input: string) => this.createTodo(input),
    findAllTodo: async () => this.findAllTodo(),
    deleteTodo: async (input: string) => this.deleteTodo(input),
    searchTodo: async (input: string) => this.searchTodo(input),
  };

  async todoAgent(body: { query: string }) {
    const messages: any[] = [
      {
        role: 'system',
        content: readFileSync(
          join(process.cwd(), '/src/todo/prompt.md'),
          'utf-8',
        ),
      },
      { role: 'user', content: body.query },
    ];

    let steps = 0;
    const MAX_STEPS = 10;

    while (steps < MAX_STEPS) {
      steps++;

      const result = await this.LLMClient.chat(messages);

      let call;
      try {
        call = JSON.parse(result);
      } catch (e) {
        throw new Error('Invalid JSON from LLM: ' + result);
      }

      messages.push({ role: 'assistant', content: result });

      if (call.type === 'output') {
        return call;
      }

      if (call.type === 'action') {
        const tool = this.tools[call.function];

        if (!tool) {
          throw new Error(`Tool ${call.function} not found`);
        }

        // ✅ Await tool result
        const observation = await tool(call.input);

        messages.push({
          role: 'developer',
          content: JSON.stringify({
            type: 'observation',
            observation,
          }),
        });
      }
    }

    throw new Error('Max steps exceeded');
  }

  // =========================
  // LANGGRAPH AGENT
  // =========================

  todoWithLangChain = async (body: { query: string }) => {
    // =========================
    // 1. TOOLS
    // =========================

    const createTodoTool = tool(
      async ({ task }: { task: string }) => {
        return this.createTodo(task);
      },
      {
        name: 'createTodo',
        description: 'Create a new todo in database',
        schema: z.object({
          task: z.string(),
        }),
      },
    );

    const findAllTodoTool = tool(
      async () => {
        return this.findAllTodo();
      },
      {
        name: 'findAllTodo',
        description: 'Fetch all todos',
        schema: z.object({}),
      },
    );

    const deleteTodoTool = tool(
      async ({ id }: { id: string }) => {
        return this.deleteTodo(id);
      },
      {
        name: 'deleteTodo',
        description: 'Delete todo by id',
        schema: z.object({
          id: z.string(),
        }),
      },
    );

    const searchTodoTool = tool(
      async ({ query }: { query: string }) => {
        return this.searchTodo(query);
      },
      {
        name: 'searchTodo',
        description: 'Search todos using query',
        schema: z.object({
          query: z.string(),
        }),
      },
    );

    const tools = [
      createTodoTool,
      findAllTodoTool,
      deleteTodoTool,
      searchTodoTool,
    ];

    const toolsByName = Object.fromEntries(tools.map((t) => [t.name, t]));

    const llmWithTools = this.client.bindTools(tools);

    // =========================
    // 2. STATE
    // =========================

    const GraphState = Annotation.Root({
      messages: Annotation<any[]>(),
    });

    // =========================
    // 3. MODEL NODE
    // =========================

    const llmCall = async (state: typeof GraphState.State) => {
      const response = await llmWithTools.invoke([
        new SystemMessage(
          'You are an AI Todo Assistant. Use tools when needed.',
        ),
        ...state.messages,
      ]);

      console.log(`
        ------------------------ State ------------------------
        state: ${JSON.stringify(state)}
        ------------------------ State End ------------------------
        ------------------------ LLM response Start ------------------------
        LLM response: ${JSON.stringify(response)}
        ------------------------ LLM response End ------------------------
        `);

      return {
        messages: [...state.messages, response],
      };
    };

    // =========================
    // 4. TOOL NODE
    // =========================

    const toolNode = async (state: typeof GraphState.State) => {
      const lastMessage = state.messages[state.messages.length - 1];

      if (!(lastMessage instanceof AIMessage)) {
        return { messages: state.messages };
      }

      const toolCalls = lastMessage.tool_calls ?? [];

      const toolMessages: ToolMessage[] = [];

      for (const call of toolCalls) {
        const tool = toolsByName[call.name] as any;

        if (!tool) continue;

        const observation = await tool.invoke(call.args);

        toolMessages.push(
          new ToolMessage({
            content: JSON.stringify(observation),
            tool_call_id: call.id as any,
          }),
        );
      }

      console.log(`
        ------------------------ toolNode State ------------------------
        state: ${JSON.stringify(state)}
        ------------------------ toolNode State End ------------------------
        ------------------------ toolCalls Start ------------------------
        Tool Calls: ${JSON.stringify(toolCalls)}
        ------------------------ toolCalls End ------------------------
         ------------------------ toolMessages Start ------------------------
        toolMessages: ${JSON.stringify(toolMessages)}
        ------------------------ toolMessages End ------------------------
        `);

      return {
        messages: [...state.messages, ...toolMessages],
      };
    };

    // =========================
    // 5. ROUTING LOGIC
    // =========================

    const shouldContinue = (state: typeof GraphState.State) => {
      const lastMessage = state.messages[state.messages.length - 1];

      if (!(lastMessage instanceof AIMessage)) return END;

      if (lastMessage.tool_calls?.length) {
        return 'tool';
      }

      return END;
    };

    // =========================
    // 6. BUILD GRAPH
    // =========================

    const agent = new StateGraph(GraphState)
      .addNode('llm', llmCall)
      .addNode('tool', toolNode)
      .addEdge(START, 'llm')
      .addConditionalEdges('llm', shouldContinue, {
        tool: 'tool',
        [END]: END,
      })
      .addEdge('tool', 'llm')
      .compile();

    // =========================
    // 7. INVOKE AGENT
    // =========================

    const result = await agent.invoke({
      messages: [new HumanMessage(body.query)],
    });

    const last = result.messages[result.messages.length - 1];

    return {output: last?.content ?? result};
  };
}
