import { Controller, Post, Body, Get, Param, Sse } from '@nestjs/common';
import { AgentRuntimeService } from './agent/agent';
import { Observable } from 'rxjs';

type MessageEvent = {
  data: {
    status: string;
    message: string;
  };
};

@Controller('todo')
export class TodoController {
  constructor(
    private runtime: AgentRuntimeService,
  ) {}

  @Post(':sessionId')
  todoAgent(
    @Param('sessionId') sessionId: string,
    @Body() body: { query: string },
  ) {
    return this.runtime.invoke({
        message: body.query,
        sessionId: sessionId
    });
  }

  @Get(':sessionId')
  async get(@Param('sessionId') sessionId: string) {
    return this.runtime.memory(sessionId);
  }

  @Sse('stream')
  stream(): Observable<MessageEvent> {
    return new Observable((subscriber) => {
      const messages = [
        'Analyzing request...',
        'Checking memory...',
        'Planning response...',
        'Generating final answer...',
        'final response',
      ];

      for (let index = 0; index < messages.length; index++) {
        setTimeout(() => {
          const isLast = index + 1 === messages.length;
          subscriber.next({
            data: {
              status: isLast ? 'Completed' : 'InProgress',
              message: messages[index],
            },
          });
          if (isLast) {
            subscriber.complete();
          }
        }, 1000 * index);
      }
    });
  }
}
