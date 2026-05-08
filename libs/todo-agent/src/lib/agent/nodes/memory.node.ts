import { Injectable } from '@nestjs/common';
import { AIMessage, BaseMessage, HumanMessage, ToolMessage } from '@langchain/core/messages';
import { MemoryType, State } from '../state';
import { RadisMemoryService } from '../memory/radis.service';

@Injectable()
export class MemoryNode {

    constructor(
        private radisMemory: RadisMemoryService,
    ) { }

    get = async (state: State) => {
        const memory = await this.radisMemory.getSession(
            state.sessionId,
        );
        return { ...state, memory: memory };
    };

    update = async (state: State) => {
        const stateMemory = state.memory;
        const messageToMemory = this.messageToMemory(state);

        const memory = Array.from(
            new Map(
                [...stateMemory, ...messageToMemory].map((item) => [item.id, item]),
            ).values(),
        ) as unknown as MemoryType[];

        await this.radisMemory.setSession(state.sessionId, memory);

        return { ...state, memory: memory };
    };

    messageToMemory = (state: State) => {
        // Filter messages
        const messages = (
            state.messages as [AIMessage | ToolMessage | HumanMessage]
        ).filter((m) => m instanceof AIMessage || m instanceof HumanMessage);
        // Convert message to memory element
        const messageToMemory = messages
            .map((msg: BaseMessage) => ({
                id: msg.id,
                type: msg.type === 'human' ? 'user' : 'assistant',
                message: msg.content,
            }))
            .filter((item) => item.message);

        return messageToMemory;
    };
}
