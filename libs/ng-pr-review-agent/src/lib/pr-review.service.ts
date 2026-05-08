import { Injectable } from "@nestjs/common";
import { AgentRuntimeService } from "./agent/agent";

@Injectable()
export class PRReviewService {
    constructor(
        private runtime: AgentRuntimeService,
      ) {}
    
      invoke() {
        return this.runtime.invoke();
      }
    
}