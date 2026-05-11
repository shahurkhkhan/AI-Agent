"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGraph = void 0;
const tslib_1 = require("tslib");
const langgraph_1 = require("@langchain/langgraph");
const common_1 = require("@nestjs/common");
const state_1 = require("./state");
const llm_node_1 = require("./nodes/llm.node");
const memory_node_1 = require("./nodes/memory.node");
const tool_node_1 = require("./nodes/tool.node");
let ChatGraph = class ChatGraph {
    constructor(llmNode, memoryNode, toolNode) {
        this.llmNode = llmNode;
        this.memoryNode = memoryNode;
        this.toolNode = toolNode;
        this.shouldContinue = (state) => {
            const lastMessage = state.messages[state.messages.length - 1];
            if (lastMessage.tool_calls?.length) {
                return 'toolNode';
            }
            return 'memoryUpdate';
        };
    }
    build() {
        // return new StateGraph(AgentState)
        //   .addNode('memoryGet', this.memoryNode.get)
        //   .addNode('llmNode', this.llmNode.execute)
        //   .addNode('toolNode', this.tooNode.execute)
        //   .addNode('memoryUpdate', this.memoryNode.update)
        //   .addEdge(START, 'memoryGet')
        //   .addEdge('memoryGet', 'llmNode')
        //   .addEdge('llmNode', 'memoryUpdate')
        //   .addConditionalEdges('memoryUpdate', this.shouldContinue, {
        //     toolNode: 'toolNode',
        //     [END]: END,
        //   })
        //   .addEdge('toolNode', 'llmNode')
        //   .addEdge('llmNode', END)
        //   .compile();
        // return new StateGraph(AgentState)
        //     .addNode('memoryGet', this.memoryNode.get)
        //     .addNode('llmNode', this.llmNode.execute)
        //     .addNode('memoryUpdate', this.memoryNode.update)
        //     .addNode('toolNode', this.toolNode.execute)
        //     .addEdge(START, 'memoryGet')
        //     // Inject memory into prompt
        //     .addEdge('memoryGet', 'llmNode')
        //     // Save LLM response
        //     .addEdge('llmNode', 'memoryUpdate')
        //     // Decide after memory update
        //     .addConditionalEdges('memoryUpdate', this.shouldContinue, {
        //       toolNode: 'toolNode',
        //       [END]: END,
        //     })
        //     // Tool result goes back to LLM
        //     .addEdge('toolNode', 'llmNode')
        //     .compile();
        return new langgraph_1.StateGraph(state_1.AgentState)
            .addNode('memoryGet', this.memoryNode.get)
            .addNode('llmNode', this.llmNode.execute)
            .addNode('toolNode', this.toolNode.execute)
            .addNode('memoryUpdate', this.memoryNode.update)
            .addEdge(langgraph_1.START, 'memoryGet')
            .addEdge('memoryGet', 'llmNode')
            .addConditionalEdges('llmNode', this.shouldContinue, {
            toolNode: 'toolNode',
            memoryUpdate: 'memoryUpdate',
        })
            .addEdge('toolNode', 'llmNode')
            .addEdge('memoryUpdate', langgraph_1.END)
            .compile();
    }
};
exports.ChatGraph = ChatGraph;
exports.ChatGraph = ChatGraph = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [llm_node_1.LLMNode,
        memory_node_1.MemoryNode,
        tool_node_1.ToolNode])
], ChatGraph);
//# sourceMappingURL=graph.js.map