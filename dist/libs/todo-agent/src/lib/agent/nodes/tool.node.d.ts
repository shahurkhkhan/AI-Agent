import { State } from '../state';
import { ToolRegistry } from '../tools/tool.registry';
export declare class ToolNode {
    private toolRegistry;
    constructor(toolRegistry: ToolRegistry);
    execute: (state: State) => Promise<import("@langchain/langgraph").InferStateSchemaValue<{
        messages: import("@langchain/langgraph").ReducedValue<import("@langchain/core/messages").BaseMessage<import("@langchain/core/messages").MessageStructure<import("@langchain/core/messages").MessageToolSet>, import("@langchain/core/messages").MessageType>[], import("@langchain/langgraph").Messages>;
        memory: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{}, import("zod/v4/core").$strip>>>;
        sessionId: import("zod").ZodString;
    }>>;
}
