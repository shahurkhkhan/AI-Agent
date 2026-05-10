"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolNode = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const messages_1 = require("@langchain/core/messages");
const tool_registry_1 = require("../tools/tool.registry");
let ToolNode = class ToolNode {
    constructor(toolRegistry) {
        this.toolRegistry = toolRegistry;
        this.execute = async (state) => {
            const lastMessage = state.messages[state.messages.length - 1];
            if (!(lastMessage instanceof messages_1.AIMessage)) {
                return state;
            }
            const toolCalls = lastMessage.tool_calls ?? [];
            const toolMessages = [];
            for (const call of toolCalls) {
                const tool = this.toolRegistry.getToolsMyName()[call.name];
                if (!tool)
                    continue;
                const observation = await tool.invoke(call.args);
                toolMessages.push(new messages_1.ToolMessage({
                    content: JSON.stringify(observation),
                    tool_call_id: call.id,
                }));
            }
            return {
                ...state,
                messages: [...state.messages, ...toolMessages],
            };
        };
    }
};
exports.ToolNode = ToolNode;
exports.ToolNode = ToolNode = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [tool_registry_1.ToolRegistry])
], ToolNode);
//# sourceMappingURL=tool.node.js.map