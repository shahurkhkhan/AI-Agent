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
    }>;
    update: (state: State) => Promise<{
        memory: MemoryType[];
        messages: BaseMessage<import("@langchain/core/messages").MessageStructure<import("@langchain/core/messages").MessageToolSet>, import("@langchain/core/messages").MessageType>[];
        sessionId: string;
    }>;
    messageToMemory: (state: State) => {
        id: string | undefined;
        type: string;
        message: string | (import("@langchain/core/messages").ContentBlock | import("@langchain/core/messages").ContentBlock.Text)[];
    }[];
}
