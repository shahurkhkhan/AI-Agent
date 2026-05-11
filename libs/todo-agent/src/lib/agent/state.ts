import {
  StateSchema,
  MessagesValue,
} from '@langchain/langgraph';
import { z } from 'zod/v4';

export const AgentState = new StateSchema({
  messages: MessagesValue, // Prebuilt messages value with built-in reducer
  memory: z.array(z.object()).default([]),
  sessionId: z.string(),
  error: z.string(),
});

export type State = typeof AgentState.State; // Full state type
export type Update = typeof AgentState.Update; // Partial update type


export type MemoryType = {
  id: string;
  type: 'user' | 'assistant';
  message: string;
};