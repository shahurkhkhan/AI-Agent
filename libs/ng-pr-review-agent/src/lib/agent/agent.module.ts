import { Module } from "@nestjs/common";
import { LLMNode } from "./nodes/llm.node";
import { ChatGraph } from "./graph";
import { AgentRuntimeService } from "./agent";
import { LLMClient } from "../common/llm.service";
import { ToolRegistry } from "./tools/tool.registry";
import { GitHubNode } from "./nodes/github.node";
import { PostCommentNode } from "./nodes/post-comment.node";

@Module({
  imports: [
  ],
  providers: [
    // Common
    LLMClient,
    // Nodes
    LLMNode,
    GitHubNode,
    PostCommentNode,
    // Tools
    ToolRegistry,
    // Graph
    ChatGraph,
    // Agent
    AgentRuntimeService,
  ],
  exports: [AgentRuntimeService]
})
export class AgentModule {}
