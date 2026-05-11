import { END, START, StateGraph } from '@langchain/langgraph';
import { Injectable } from '@nestjs/common';
import { AgentState } from './state';
import { LLMNode } from './nodes/llm.node';
import { MemoryNode } from './nodes/memory.node';
import { ToolNode } from './nodes/tool.node';

@Injectable()
export class ChatGraph {
  constructor(
    private llmNode: LLMNode,
    private memoryNode: MemoryNode,
    private toolNode: ToolNode
  ) { }

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

    return new StateGraph(AgentState)
      .addNode('memoryGet', this.memoryNode.get)
      .addNode('llmNode', this.llmNode.execute)
      .addNode('toolNode', this.toolNode.execute)
      .addNode('memoryUpdate', this.memoryNode.update)

      .addEdge(START, 'memoryGet')
      .addEdge('memoryGet', 'llmNode')

      .addConditionalEdges('llmNode', this.shouldContinue, {
        toolNode: 'toolNode',
        memoryUpdate: 'memoryUpdate',
      })

      .addEdge('toolNode', 'llmNode')

      .addEdge('memoryUpdate', END)

      .compile();
  }

  private shouldContinue = (state: any) => {
    const lastMessage = state.messages[state.messages.length - 1];

    if (lastMessage.tool_calls?.length) {
      return 'toolNode';
    }

    return 'memoryUpdate';
  }
}
