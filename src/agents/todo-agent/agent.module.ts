/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { LLMClientService } from 'src/core/llm-client.service';
import { MemoryModule } from 'src/memory/memory.module';
import { TodoAgentService } from './agent';
import { GraphService } from './agent.graph';
import { NodeService } from './agent.node';
import { ToolService } from './agent.tool';
import { TodoDbModule } from 'src/db/todo/todo-db.module';

@Module({
  imports: [
    MemoryModule,
    TodoDbModule
  ],
  providers: [
    LLMClientService, 
    TodoAgentService,

    ToolService, // tool
    GraphService,  // graph
    NodeService, // nodes
  ],
  exports: [TodoAgentService]
})
export class TodoAgentModule {}
