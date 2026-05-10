import { LLMNode } from './nodes/llm.node';
import { MemoryNode } from './nodes/memory.node';
import { ToolNode } from './nodes/tool.node';
export declare class ChatGraph {
    private llmNode;
    private memoryNode;
    private tooNode;
    constructor(llmNode: LLMNode, memoryNode: MemoryNode, tooNode: ToolNode);
    build(): import("@langchain/langgraph").CompiledStateGraph<{
        messages: import("@langchain/core/messages").BaseMessage<import("@langchain/core/messages").MessageStructure<import("@langchain/core/messages").MessageToolSet>, import("@langchain/core/messages").MessageType>[];
        memory: Record<string, never>[];
        sessionId: string;
    }, {
        messages?: import("@langchain/langgraph").Messages | import("@langchain/langgraph").OverwriteValue<import("@langchain/core/messages").BaseMessage<import("@langchain/core/messages").MessageStructure<import("@langchain/core/messages").MessageToolSet>, import("@langchain/core/messages").MessageType>[]> | undefined;
        memory?: Record<string, never>[] | undefined;
        sessionId?: string | undefined;
    }, "__start__" | "memoryGet" | "llmNode" | "toolNode" | "memoryUpdate", import("@langchain/langgraph").StateSchema<{
        messages: import("@langchain/langgraph").ReducedValue<import("@langchain/core/messages").BaseMessage<import("@langchain/core/messages").MessageStructure<import("@langchain/core/messages").MessageToolSet>, import("@langchain/core/messages").MessageType>[], import("@langchain/langgraph").Messages>;
        memory: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{}, import("zod/v4/core").$strip>>>;
        sessionId: import("zod").ZodString;
    }>, import("@langchain/langgraph").StateSchema<{
        messages: import("@langchain/langgraph").ReducedValue<import("@langchain/core/messages").BaseMessage<import("@langchain/core/messages").MessageStructure<import("@langchain/core/messages").MessageToolSet>, import("@langchain/core/messages").MessageType>[], import("@langchain/langgraph").Messages>;
        memory: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{}, import("zod/v4/core").$strip>>>;
        sessionId: import("zod").ZodString;
    }>, import("@langchain/langgraph").StateDefinition, {
        memoryGet: import("@langchain/langgraph").UpdateType<import("@langchain/langgraph").StateSchemaFieldsToStateDefinition<{
            messages: import("@langchain/langgraph").ReducedValue<import("@langchain/core/messages").BaseMessage<import("@langchain/core/messages").MessageStructure<import("@langchain/core/messages").MessageToolSet>, import("@langchain/core/messages").MessageType>[], import("@langchain/langgraph").Messages>;
            memory: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{}, import("zod/v4/core").$strip>>>;
            sessionId: import("zod").ZodString;
        }>>;
        llmNode: {
            messages: import("@langchain/core/messages").BaseMessage<import("@langchain/core/messages").MessageStructure<import("@langchain/core/messages").MessageToolSet>, import("@langchain/core/messages").MessageType>[];
            memory: Record<string, never>[];
            sessionId: string;
        };
        toolNode: import("@langchain/langgraph").InferStateSchemaValue<{
            messages: import("@langchain/langgraph").ReducedValue<import("@langchain/core/messages").BaseMessage<import("@langchain/core/messages").MessageStructure<import("@langchain/core/messages").MessageToolSet>, import("@langchain/core/messages").MessageType>[], import("@langchain/langgraph").Messages>;
            memory: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{}, import("zod/v4/core").$strip>>>;
            sessionId: import("zod").ZodString;
        }>;
        memoryUpdate: import("@langchain/langgraph").UpdateType<import("@langchain/langgraph").StateSchemaFieldsToStateDefinition<{
            messages: import("@langchain/langgraph").ReducedValue<import("@langchain/core/messages").BaseMessage<import("@langchain/core/messages").MessageStructure<import("@langchain/core/messages").MessageToolSet>, import("@langchain/core/messages").MessageType>[], import("@langchain/langgraph").Messages>;
            memory: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{}, import("zod/v4/core").$strip>>>;
            sessionId: import("zod").ZodString;
        }>>;
    }, unknown, unknown, []>;
    private shouldContinue;
}
