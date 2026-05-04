/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { tool } from '@langchain/core/tools';
import { z } from 'zod';
import { LLMClientService } from 'src/core/llm-client.service';
import { TodoDBService } from 'src/db/todo/todo.db';
import { ITodo } from 'src/db/todo/todo.schema';

@Injectable()
export class ToolService {
  constructor(
    private todoDBService: TodoDBService,
    public llmClientService: LLMClientService,
  ) {}

  createTodoTool = tool(
    async (data: ITodo) => {
      return this.todoDBService.createTodo(data);
    },
    {
      name: 'createTodo',
      description: 'Create a new todo in database',
      schema: z.object({
        task: z.string(),
        priority: z.enum(['low', 'medium', 'high']),
        isCompleted: z.boolean(),
        createdAt: z.string(),
        updatedAt: z.string(),
      }),
    },
  );

  findAllTodoTool = tool(
    async () => {
      return this.todoDBService.findAllTodo();
    },
    {
      name: 'findAllTodo',
      description: 'Fetch all todos',
      schema: z.object({}),
    },
  );

  deleteTodoTool = tool(
    async ({ id }: { id: string }) => {
      return this.todoDBService.deleteTodo(id);
    },
    {
      name: 'deleteTodo',
      description: 'Delete todo by id',
      schema: z.object({
        id: z.string(),
      }),
    },
  );

  searchTodoTool = tool(
    async ({ query }: { query: string }) => {
      return this.todoDBService.searchTodo(query);
    },
    {
      name: 'searchTodo',
      description: 'Search todos using query',
      schema: z.object({
        query: z.string(),
      }),
    },
  );

  tools = [
    this.createTodoTool,
    this.findAllTodoTool,
    this.deleteTodoTool,
    this.searchTodoTool,
  ];

  toolsByName = Object.fromEntries(this.tools.map((t) => [t.name, t]));

  getLLMClient() {
    return this.llmClientService.getClient(this.tools);
  }
}
