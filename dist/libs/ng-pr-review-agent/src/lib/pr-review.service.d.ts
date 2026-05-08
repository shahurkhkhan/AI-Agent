import { AgentRuntimeService } from "./agent/agent";
export declare class PRReviewService {
    private runtime;
    constructor(runtime: AgentRuntimeService);
    invoke(): string;
}
