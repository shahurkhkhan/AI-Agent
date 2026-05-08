import { Injectable } from '@nestjs/common';
import { SystemMessage } from '@langchain/core/messages';
import { LLMClient } from '../../common/llm.service';
import { State } from '../state';
import { ToolRegistry } from '../tools/tool.registry';

@Injectable()
export class LLMNode {
  private client = this.llMClient.getClient(
    this.toolRegistry.getTools()
  );

  constructor(
    private llMClient: LLMClient,
    private toolRegistry: ToolRegistry
  ) { 
  }

  private manageMemory = (memory: State['memory']) => {
    let memoryContext = 'No prior memory';

    if (!memory) return memoryContext;

    memoryContext = memory
      ?.slice(-5)
      .map((m: any) => `${m.type}: ${m.message}`)
      .join('\n');

    return memoryContext;
  }
  
  private systemPrompt = (state: State) => {
    const memoryContext = this.manageMemory(state?.memory);
    const systemMessage = `
        You are an AI Todo Assistant.

        Recent Conversation:
        ${memoryContext}

        Use this when relevant.
    `;
    return systemMessage;
  }

  execute = async (state: State) => {
    const systemPrompt = this.systemPrompt(state);

    const response = await this.client.invoke([
      new SystemMessage(systemPrompt), 
      ...state.messages
    ]);

    return {
      ...state,
      messages: [...state.messages, response],
    };
  }
}
