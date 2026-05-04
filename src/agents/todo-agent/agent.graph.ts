/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { END, START, StateGraph } from '@langchain/langgraph';
import { AgentState } from './agent.state';
import { Injectable } from '@nestjs/common';
import { NodeService } from './agent.node';

@Injectable()
export class GraphService {
  constructor(private nodes: NodeService) {}

  init() {
    return new StateGraph(AgentState)
      .addNode('memoryNodeGet', this.nodes.memoryNodeGet)
      .addNode('llmNode', this.nodes.llmNode)
      .addNode('toolNode', this.nodes.toolNode)
      .addNode('memoryNodeUpdate', this.nodes.memoryNodeUpdate)
      .addEdge(START, 'memoryNodeGet')
      .addEdge('memoryNodeGet', 'llmNode')
      .addEdge('llmNode', 'memoryNodeUpdate')
      .addConditionalEdges('memoryNodeUpdate', this.nodes.shouldContinue, {
        toolNode: 'toolNode',
        [END]: END,
      })
      .addEdge('toolNode', 'llmNode')
      .compile();
  }
}
