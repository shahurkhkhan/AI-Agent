"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryNode = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const messages_1 = require("@langchain/core/messages");
const radis_service_1 = require("../memory/radis.service");
let MemoryNode = class MemoryNode {
    constructor(radisMemory) {
        this.radisMemory = radisMemory;
        this.get = async (state) => {
            const memory = await this.radisMemory.getSession(state.sessionId);
            return { ...state, memory: memory };
        };
        this.update = async (state) => {
            const stateMemory = state.memory;
            const messageToMemory = this.messageToMemory(state);
            const memory = Array.from(new Map([...stateMemory, ...messageToMemory].map((item) => [item.id, item])).values());
            await this.radisMemory.setSession(state.sessionId, memory);
            return { ...state, memory: memory };
        };
        this.messageToMemory = (state) => {
            // Filter messages
            const messages = state.messages.filter((m) => m instanceof messages_1.AIMessage || m instanceof messages_1.HumanMessage);
            // Convert message to memory element
            const messageToMemory = messages
                .map((msg) => ({
                id: msg.id,
                type: msg.type === 'human' ? 'user' : 'assistant',
                message: msg.content,
            }))
                .filter((item) => item.message);
            return messageToMemory;
        };
    }
};
exports.MemoryNode = MemoryNode;
exports.MemoryNode = MemoryNode = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [radis_service_1.RadisMemoryService])
], MemoryNode);
//# sourceMappingURL=memory.node.js.map