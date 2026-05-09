"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const llm_node_1 = require("./nodes/llm.node");
const graph_1 = require("./graph");
const agent_1 = require("./agent");
const llm_service_1 = require("../common/llm.service");
const tool_registry_1 = require("./tools/tool.registry");
const github_node_1 = require("./nodes/github.node");
const post_comment_node_1 = require("./nodes/post-comment.node");
let AgentModule = class AgentModule {
};
exports.AgentModule = AgentModule;
exports.AgentModule = AgentModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            // Common
            llm_service_1.LLMClient,
            // Nodes
            llm_node_1.LLMNode,
            github_node_1.GitHubNode,
            post_comment_node_1.PostCommentNode,
            // Tools
            tool_registry_1.ToolRegistry,
            // Graph
            graph_1.ChatGraph,
            // Agent
            agent_1.AgentRuntimeService,
        ],
        exports: [agent_1.AgentRuntimeService]
    })
], AgentModule);
//# sourceMappingURL=agent.module.js.map