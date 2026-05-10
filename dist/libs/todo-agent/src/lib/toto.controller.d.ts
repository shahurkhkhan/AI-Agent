import { AgentRuntimeService } from './agent/agent';
import { Observable } from 'rxjs';
type MessageEvent = {
    data: {
        status: string;
        message: string;
    };
};
export declare class TodoController {
    private runtime;
    constructor(runtime: AgentRuntimeService);
    todoAgent(sessionId: string, body: {
        query: string;
    }): Promise<{
        messages: Record<string, never>[];
        sessionId: string;
    }>;
    get(sessionId: string): Promise<import("./agent/state").MemoryType[]>;
    stream(): Observable<MessageEvent>;
}
export {};
