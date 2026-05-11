"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentRuntimeService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const graph_1 = require("./graph");
const messages_1 = require("@langchain/core/messages");
const radis_service_1 = require("./memory/radis.service");
let AgentRuntimeService = class AgentRuntimeService {
    constructor(chatGraph, mempory) {
        this.chatGraph = chatGraph;
        this.mempory = mempory;
        this.memory = (sessionId) => {
            return this.mempory.getSession(sessionId);
        };
        this.graph = this.chatGraph.build();
    }
    async invoke({ message, sessionId }) {
        const result = await this.graph.invoke({
            messages: [new messages_1.HumanMessage(message)],
            sessionId: sessionId,
        });
        return {
            messages: result.memory,
            sessionId: result.sessionId,
        };
    }
};
exports.AgentRuntimeService = AgentRuntimeService;
exports.AgentRuntimeService = AgentRuntimeService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [graph_1.ChatGraph,
        radis_service_1.RadisMemoryService])
], AgentRuntimeService);
//# sourceMappingURL=agent.js.map