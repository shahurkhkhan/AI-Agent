import { Controller, Get } from '@nestjs/common';
import { AgentRuntimeService } from './agent/agent';

@Controller('pr')
export class PRReviewController {
  constructor(
    private runtime: AgentRuntimeService,
  ) {}

  @Get()
  todoAgent() {
    return this.runtime.invoke();
  }

}
