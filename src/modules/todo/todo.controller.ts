/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoAgentService } from 'src/agents/todo-agent/agent';

@Controller('todo')
export class TodoController {
  constructor(
    private todoService: TodoService,
    private todo: TodoAgentService,
  ) {}

  @Post(':sessionId')
  todoAgent(
    @Param('sessionId') sessionId: string,
    @Body() body: { query: string },
  ) {
    // return this.todoService.todoWithLangChain(body);
    return this.todo.run(sessionId, body.query);
  }

  @Get(':sessionId')
  async get(@Param('sessionId') sessionId: string) {
    return this.todo.getMemory(sessionId);
  }
}
