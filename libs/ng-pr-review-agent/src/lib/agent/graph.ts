import { END, START, StateGraph } from '@langchain/langgraph';
import { Injectable } from '@nestjs/common';
import { AgentState } from './state';
import { LLMNode } from './nodes/llm.node';
import { GitHubNode } from './nodes/github.node';
import { PostCommentNode } from './nodes/post-comment.node';

@Injectable()
export class ChatGraph {
  constructor(
    private llmNode: LLMNode,
    private githubNode: GitHubNode,
    private postCommentNode: PostCommentNode,
  ) { }

  build() {
    return new StateGraph(AgentState)
      .addNode('PRDetail', this.githubNode.execute)
      .addNode('llmNode', this.llmNode.execute)
      .addNode('postComments', this.postCommentNode.execute)
      .addEdge(START, 'PRDetail')
      .addEdge('PRDetail', 'llmNode')
      .addEdge('llmNode', 'postComments')
      .addEdge('postComments', END)
      .compile();
  }
}
