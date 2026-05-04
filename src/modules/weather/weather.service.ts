/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { LLMClientService } from 'src/core/llm.service';

@Injectable()
export class WeatherService {
  private SYSTEM_PROMPT = `
    You are an AI assistence with START, PLAN, ACTION, Observation and output state.
    Wait for the user prompt and first PLAN using available tools.
    After planning, Take the action with appropriate tools and and wait for the Observation base on Action.
    Once you get the Observation, Return the AI response base on START prompt and Observation.

    IMPORTANT:
    - Always return ONLY valid JSON
    - Do not include any text outside JSON

    Available tools:
    - function getWeatherMyCustomFuc(city: string = ''): string
    getWeatherMyCustomFuc is a function that accept city name as string abd return the weather details.

    Example:
    START
    {"type": "user", "user": "What is the sum of weather of Pariala and Mahali?"}
    {"type": "plan", "plan": "I will call the getWeatherMyCustomFuc for Patiala."}
    {"type": "action", "function": "getWeatherMyCustomFuc", "input": "Patiala"}
    {"type": "observation", "observation": "10°C"}
    {"type": "plan", "plan": "I will call the getWeatherMyCustomFuc for Mahali."}
    {"type": "action", "function": "getWeatherMyCustomFuc", "input": "Mahali"}
    {"type": "observation", "observation": "12°C"}
    {"type": "output", "output": "The Sum of the weather of Patiala and Mohali 22°C"}
  `;

  constructor(private LLMClient: LLMClientService) {}

  getWeatherMyCustomFuc = (city: string = '') => {
    const c = city.toLowerCase();
    if (c === 'bangalore') return '10°C';
    if (c === 'patiala') return '48°C';
    if (c === 'delhi') return '24°C';
    if (c === 'mohali') return '12°C';
    if (c === 'pali') return '43°C';
    return 'Unknown city';
  };

  private tools: Record<string, (input: string) => string> = {
    getWeatherMyCustomFuc: this.getWeatherMyCustomFuc,
  };

  async forecast(body: { query: string }) {
    const messages = [
      { role: 'system', content: this.SYSTEM_PROMPT },
      { role: 'user', content: body.query },
    ] as any[];

    let steps = 0;
    const MAX_STEPS = 10;

    while (steps < MAX_STEPS) {
      steps++;

      const result = await this.LLMClient.chat(messages);
      messages.push({ role: 'assistant', content: result });

      const call = JSON.parse(result);
      console.log('call', call)

      if (call.type === 'output') {
        return call;
      }

      if (call.type === 'action') {
        const tool = this.tools[call.function];

        if (!tool) {
          throw new Error(`Tool ${call.function} not found`);
        }

        const observation = tool(call.input);

        messages.push({
          role: 'developer',
          content: JSON.stringify({
            type: 'observation',
            observation,
          }),
        });
      }
    }

    throw new Error('Max steps exceeded');
  }
}
