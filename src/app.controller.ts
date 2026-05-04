import { Controller, Get, Sse } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

type MessageEvent = {
  data: {
    status: string;
    message: string;
  };
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
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
