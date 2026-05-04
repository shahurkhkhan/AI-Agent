/* eslint-disable prettier/prettier */
import {
  StateSchema,
  // ReducedValue,
  MessagesValue,
  // ReducedValue,
} from '@langchain/langgraph';
import { z } from 'zod/v4';

export const AgentState = new StateSchema({
  messages: MessagesValue, // Prebuilt messages value with built-in reducer
  memory: z.array(z.object()),
  sessionId: z.string(),
});

export type State = typeof AgentState.State; // Full state type
export type Update = typeof AgentState.Update; // Partial update type
