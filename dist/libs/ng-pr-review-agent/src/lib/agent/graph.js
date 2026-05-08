"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGraph = void 0;
const tslib_1 = require("tslib");
const langgraph_1 = require("@langchain/langgraph");
const common_1 = require("@nestjs/common");
const state_1 = require("./state");
const llm_node_1 = require("./nodes/llm.node");
const github_node_1 = require("./nodes/github.node");
const post_comment_node_1 = require("./nodes/post-comment.node");
let ChatGraph = class ChatGraph {
    constructor(llmNode, githubNode, postCommentNode) {
        this.llmNode = llmNode;
        this.githubNode = githubNode;
        this.postCommentNode = postCommentNode;
    }
    build() {
        return new langgraph_1.StateGraph(state_1.AgentState)
            .addNode('PRDetail', this.githubNode.execute)
            .addNode('llmNode', this.llmNode.execute)
            .addNode('postComments', this.postCommentNode.execute)
            .addEdge(langgraph_1.START, 'PRDetail')
            .addEdge('PRDetail', 'llmNode')
            .addEdge('llmNode', 'postComments')
            .addEdge('postComments', langgraph_1.END)
            .compile();
    }
};
exports.ChatGraph = ChatGraph;
exports.ChatGraph = ChatGraph = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [llm_node_1.LLMNode,
        github_node_1.GitHubNode,
        post_comment_node_1.PostCommentNode])
], ChatGraph);
//# sourceMappingURL=graph.js.map