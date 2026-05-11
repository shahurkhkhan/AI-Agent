import { Injectable } from '@nestjs/common';
import { AIMessage, ToolMessage } from '@langchain/core/messages';
import { State } from '../state';
import { ToolRegistry } from '../tools/tool.registry';

@Injectable()
export class ToolNode {

  constructor(
    private toolRegistry: ToolRegistry
  ) { }

  execute = async (state: State) => {
    try {
      const lastMessage = state.messages[state.messages.length - 1];

      if (!(lastMessage instanceof AIMessage)) {
        return state;
      }

      const toolCalls = lastMessage.tool_calls ?? [];

      const toolMessages: ToolMessage[] = [];

      for (const call of toolCalls) {

        const tool = this.toolRegistry.getToolsMyName()[call.name] as any;

        console.log(`Tool Calling... \n\n Tool Name : ${call.name}. \n\n Tool Params: ${JSON.stringify(call.args)}`)

        if (!tool) continue;

        const observation = await tool.invoke(call.args);

        toolMessages.push(
          new ToolMessage({
            content: JSON.stringify(observation),
            tool_call_id: call.id as any,
          }),
        );
      }

      return {
        ...state,
        messages: [...state.messages, ...toolMessages],
      };
    } catch (error: any) {
      return {
        ...state,
        error: error.message,
      };
    }
  }
}
