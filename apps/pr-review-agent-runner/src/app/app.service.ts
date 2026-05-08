import { Injectable } from '@nestjs/common';
import {PRReviewService} from '@agents/ng-pr-review-agent';


@Injectable()
export class AppService {
  constructor(
    private pRReviewService: PRReviewService
  ) {}
  
  run () {
    return this.pRReviewService.invoke();
  }
}
