/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { GraphService } from './agent.graph';
import { HumanMessage } from '@langchain/core/messages';
import { MemoryService } from 'src/memory/memory.service';

@Injectable()
export class TodoAgentService {
  constructor(
    private memoryService: MemoryService,
    private graphService: GraphService,
  ) {}

  async run(sessionId: string, query: string) {
    const graph = this.graphService.init();

    const result = await graph.invoke(
      {
        messages: [new HumanMessage(query)],
        sessionId: sessionId,
      },
      { configurable: { thread_id: '1' } },
    );

    return {
      messages: result.memory,
      sessionId: result.sessionId,
    };
  }

  getMemory = (sessionId: string) => {
    return this.memoryService.getSession(sessionId);
  };
}
