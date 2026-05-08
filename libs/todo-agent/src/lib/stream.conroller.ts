import { Controller, Sse } from '@nestjs/common';
import { Observable } from 'rxjs';

type MessageEvent = {
  data: {
    status: string;
    message: string;
  };
};

@Controller('stream')
export class StreamController {

  @Sse()
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
