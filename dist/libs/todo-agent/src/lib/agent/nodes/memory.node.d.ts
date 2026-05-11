import { BaseMessage } from '@langchain/core/messages';
import { MemoryType, State } from '../state';
import { RadisMemoryService } from '../memory/radis.service';
export declare class MemoryNode {
    private radisMemory;
    constructor(radisMemory: RadisMemoryService);
    get: (state: State) => Promise<{
        memory: MemoryType[];
        messages: BaseMessage<import("@langchain/core/messages").MessageStructure<import("@langchain/core/messages").MessageToolSet>, import("@langchain/core/messages").MessageType>[];
        sessionId: string;
        error: string;
    }>;
    update: (state: State) => Promise<import("@langchain/langgraph").InferStateSchemaValue<{
        messages: import("@langchain/langgraph").ReducedValue<BaseMessage<import("@langchain/core/messages").MessageStructure<import("@langchain/core/messages").MessageToolSet>, import("@langchain/core/messages").MessageType>[], import("@langchain/langgraph").Messages>;
        memory: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{}, import("zod/v4/core").$strip>>>;
        sessionId: import("zod").ZodString;
        error: import("zod").ZodString;
    }> | {
        memory: MemoryType[];
        messages: BaseMessage<import("@langchain/core/messages").MessageStructure<import("@langchain/core/messages").MessageToolSet>, import("@langchain/core/messages").MessageType>[];
        sessionId: string;
        error: string;
    }>;
    messageToMemory: (state: State) => {
        id: string | undefined;
        type: string;
        message: string | (import("@langchain/core/messages").ContentBlock | import("@langchain/core/messages").ContentBlock.Text)[];
    }[];
}
