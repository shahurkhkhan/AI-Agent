import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class LLMClientService {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  async chat(
    messages: {
      role: 'user' | 'assistant' | 'system' | 'developer';
      content: string;
    }[],
  ) {
    const res = await this.client.chat.completions.create({
      model: 'gpt-4o-mini',
      max_tokens: 100,
      temperature: 0.2,
      messages,
      // response_format: { type: 'json_object' },
    });
    return res.choices[0].message.content || '';
  }
}
