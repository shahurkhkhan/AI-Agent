import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoAgentModule } from '@agents/todo-agent';
import {NgPrReviewAgentModule} from '@agents/ng-pr-review-agent';

@Module({
  imports: [
    TodoAgentModule, // Todo Agent
    NgPrReviewAgentModule // PR Review Agent
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
