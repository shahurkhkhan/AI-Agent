import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import {NgPrReviewAgentModule} from '@agents/ng-pr-review-agent';


@Module({
  imports: [NgPrReviewAgentModule],
  providers: [AppService],
})
export class AppModule {}
