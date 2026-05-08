import { Module } from "@nestjs/common";
import { redisProvider } from "./memory/redis.provider";
import { RadisMemoryService } from "./memory/radis.service";
import { LLMNode } from "./nodes/llm.node";
import { ToolNode } from "./nodes/tool.node";
import { MemoryNode } from "./nodes/memory.node";
import { CreateTodoTool } from "./tools/create-todo.tool";
import { ListTodoTool } from "./tools/list-todo.tool";
import { SearchTodoTool } from "./tools/search-todo.tool";
import { DeleteTodoTool } from "./tools/delete-todo.tool";
import { ChatGraph } from "./graph";
import { AgentRuntimeService } from "./agent";
import { LLMClient } from "../common/llm.service";
import { ToolRegistry } from "./tools/tool.registry";
import { TodoRepository } from "../database/repositories/todo.repository";
import { Todo, TodoSchema } from "../database/schemas/todo.schema";
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  providers: [
    // Common
    redisProvider,
    RadisMemoryService,
    LLMClient,
    // Nodes
    LLMNode,
    ToolNode,
    MemoryNode,
    // Tools
    CreateTodoTool,
    ListTodoTool,
    SearchTodoTool,
    DeleteTodoTool,
    ToolRegistry,
    // Graph
    ChatGraph,
    // Agent
    AgentRuntimeService,
    // Database
    TodoRepository
  ],
  exports: [AgentRuntimeService]
})
export class AgentModule {}
