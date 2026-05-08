import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AgentRuntimeService } from './agent/agent';

@Controller('pr')
export class PRReviewController {
  constructor(
    private runtime: AgentRuntimeService,
  ) {}

  @Get(':query')
  todoAgent(
    @Param('query') query: string,
    // @Body() body: { query: string },
  ) {
    return this.runtime.invoke({
        message: query,
    });
  }

}
