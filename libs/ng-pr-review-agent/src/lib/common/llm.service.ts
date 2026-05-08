import { ChatOpenAI } from '@langchain/openai';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LLMClient {
  private client: ChatOpenAI;

  constructor(
    private readonly configService: ConfigService,
  ) {
    this.client = new ChatOpenAI({
      model: 'gpt-4o-mini',
      apiKey: this.configService.get<string>(
        'openai_api_key',
      ),
      temperature: 0,
    });
  }

  getClient(tools: any[] | null = null) {
    if (!tools) return this.client;
    return this.client.bindTools(tools);
  }
}
