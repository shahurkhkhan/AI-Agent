import { ChatOpenAI } from '@langchain/openai';
import { Injectable } from '@nestjs/common';
import config from 'src/config/configuration';

@Injectable()
export class LLMClientService {
  private client: ChatOpenAI;

  constructor() {
    this.client = new ChatOpenAI({
      model: 'gpt-4o-mini',
      apiKey: config.openai_api_key,
      temperature: 0,
    });
  }

  getClient(tools: any[] | null = null) {
    if (!tools) return this.client;
    return this.client.bindTools(tools);
  }
}
