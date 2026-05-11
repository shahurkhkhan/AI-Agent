"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMNode = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const messages_1 = require("@langchain/core/messages");
const llm_service_1 = require("../../common/llm.service");
const tool_registry_1 = require("../tools/tool.registry");
let LLMNode = class LLMNode {
    constructor(llMClient, toolRegistry) {
        this.llMClient = llMClient;
        this.toolRegistry = toolRegistry;
        this.client = this.llMClient.getClient(this.toolRegistry.getTools());
        this.manageMemory = (memory) => {
            let memoryContext = 'No prior memory';
            if (!memory)
                return memoryContext;
            memoryContext = memory
                ?.slice(-5)
                .map((m) => `${m.type}: ${m.message}`)
                .join('\n');
            return memoryContext;
        };
        this.systemPrompt = (state) => {
            const memoryContext = this.manageMemory(state?.memory);
            const systemMessage = `
        You are an extremely intelligent, highly advanced autonomous AI todo management system...

        Recent Conversation:
        ${memoryContext}
    `;
            return systemMessage;
        };
        this.execute = async (state) => {
            const systemPrompt = this.systemPrompt(state);
            const response = await this.client.invoke([
                new messages_1.SystemMessage(systemPrompt),
                ...state.messages
            ]);
            return {
                ...state,
                messages: [...state.messages, response],
            };
        };
    }
};
exports.LLMNode = LLMNode;
exports.LLMNode = LLMNode = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [llm_service_1.LLMClient,
        tool_registry_1.ToolRegistry])
], LLMNode);
//# sourceMappingURL=llm.node.js.map