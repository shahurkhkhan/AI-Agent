/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { State } from './agent.state';
import {
  AIMessage,
  BaseMessage,
  HumanMessage,
  SystemMessage,
  ToolMessage,
} from '@langchain/core/messages';
import { MemoryService } from 'src/memory/memory.service';
import { ToolService } from './agent.tool';
import { END } from '@langchain/langgraph';

type MemoryType = {
  id: string;
  type: 'user' | 'assistant';
  message: string;
};

@Injectable()
export class NodeService {
  constructor(
    private memoryService: MemoryService,
    private toolService: ToolService,
  ) {}

  log(log: any) {
    console.log(`============= Start =============`);
    console.log(`${log}`);
    console.log(`============= END =============`);
  }

  llmNode = async (state: State) => {
    let memoryContext = 'No prior memory';

    if (state.memory && state.memory?.length !== 0) {
      console.log('state.memory', state.memory);
      memoryContext = state.memory
        ?.slice(-5)
        .map((m) => `${m.type}: ${m.message}`)
        .join('\n');
    }

    const systemMessage = `
        You are an AI Todo Assistant.

        Recent Conversation:
        ${memoryContext}

        Use this when relevant.
      `;

    const response = await this.toolService
      .getLLMClient()
      .invoke([new SystemMessage(systemMessage), ...state.messages]);

    this.log(`2. state => ${JSON.stringify(state)}`);
    this.log(`2. response => ${JSON.stringify(response)}`);
    return {
      ...state,
      messages: [...state.messages, response],
    };
  };

  memoryNodeGet = async (state: State) => {
    const memory: MemoryType[] = await this.memoryService.getSession(
      state.sessionId,
    );
    this.log(`1. memoryNodeGet => ${JSON.stringify(memory)}`);
    return { ...state, memory: memory };
  };

  messageToMemory = (state: State) => {
    const messages = (
      state.messages as [AIMessage | ToolMessage | HumanMessage]
    ).filter((m) => m instanceof AIMessage || m instanceof HumanMessage);
    const messageToMemory = messages
      .map((msg: BaseMessage) => ({
        id: msg.id,
        type: msg.type === 'human' ? 'user' : 'assistant',
        message: msg.content,
      }))
      .filter((item) => item.message);

    return messageToMemory;
  };

  memoryNodeUpdate = async (state: State) => {
    const stateMemory = state?.memory ?? [];
    const messageToMemory = this.messageToMemory(state);
    const memory = Array.from(
      new Map(
        [...stateMemory, ...messageToMemory].map((item) => [item.id, item]),
      ).values(),
    );
    await this.memoryService.setSession(state.sessionId, memory);

    this.log(`3. state => ${JSON.stringify(state)}`);
    this.log(`3. memory => ${JSON.stringify(memory)}`);

    return { ...state, memory: memory };
  };

  toolNode = async (state: State) => {
    // Last message, that is AIMessage
    const lastMessage = state.messages[state.messages.length - 1];

    if (!(lastMessage instanceof AIMessage)) {
      return state;
    }

    const toolCalls = lastMessage.tool_calls ?? [];

    const toolMessages: ToolMessage[] = [];

    this.log(`toolCalls : ${JSON.stringify(toolCalls)}`);

    for (const call of toolCalls) {
      const tool = this.toolService.toolsByName[call.name] as any;

      if (!tool) continue;

      const observation = await tool.invoke(call.args);

      toolMessages.push(
        new ToolMessage({
          content: JSON.stringify(observation),
          tool_call_id: call.id as any,
        }),
      );
    }

    return {
      ...state,
      messages: [...state.messages, ...toolMessages],
    };
  };

  shouldContinue(state) {
    const lastMessage = state.messages[state.messages.length - 1];

    if (lastMessage.tool_calls?.length) {
      return 'toolNode';
    }

    return END;
  }
}
