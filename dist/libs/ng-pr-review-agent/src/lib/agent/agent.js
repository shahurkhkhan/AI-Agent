"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentRuntimeService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const graph_1 = require("./graph");
let AgentRuntimeService = class AgentRuntimeService {
    constructor(chatGraph) {
        this.chatGraph = chatGraph;
        this.graph = this.chatGraph.build();
    }
    async invoke() {
        const result = await this.graph.invoke({
            files: [],
            newComments: [],
            oldComments: []
        });
        return result;
    }
};
exports.AgentRuntimeService = AgentRuntimeService;
exports.AgentRuntimeService = AgentRuntimeService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [graph_1.ChatGraph])
], AgentRuntimeService);
//# sourceMappingURL=agent.js.map