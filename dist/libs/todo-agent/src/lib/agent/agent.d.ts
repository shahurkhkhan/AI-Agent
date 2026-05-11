import { ChatGraph } from "./graph";
import { RadisMemoryService } from "./memory/radis.service";
export declare class AgentRuntimeService {
    private readonly chatGraph;
    private readonly mempory;
    private graph;
    constructor(chatGraph: ChatGraph, mempory: RadisMemoryService);
    invoke({ message, sessionId }: {
        message: string;
        sessionId: string;
    }): Promise<{
        messages: Record<string, never>[];
        sessionId: string;
    }>;
    memory: (sessionId: string) => Promise<import("./state").MemoryType[]>;
}
