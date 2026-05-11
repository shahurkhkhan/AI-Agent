import { State } from '../state';
import { ToolRegistry } from '../tools/tool.registry';
export declare class ToolNode {
    private toolRegistry;
    constructor(toolRegistry: ToolRegistry);
    execute: (state: State) => Promise<{
        error: any;
        messages: import("@langchain/core/messages").BaseMessage<import("@langchain/core/messages").MessageStructure<import("@langchain/core/messages").MessageToolSet>, import("@langchain/core/messages").MessageType>[];
        memory: Record<string, never>[];
        sessionId: string;
    }>;
}
