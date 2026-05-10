import { LLMClient } from '../../common/llm.service';
import { State } from '../state';
import { ToolRegistry } from '../tools/tool.registry';
export declare class LLMNode {
    private llMClient;
    private toolRegistry;
    private client;
    constructor(llMClient: LLMClient, toolRegistry: ToolRegistry);
    private manageMemory;
    private systemPrompt;
    execute: (state: State) => Promise<{
        messages: import("@langchain/core/messages").BaseMessage<import("@langchain/core/messages").MessageStructure<import("@langchain/core/messages").MessageToolSet>, import("@langchain/core/messages").MessageType>[];
        memory: Record<string, never>[];
        sessionId: string;
    }>;
}
