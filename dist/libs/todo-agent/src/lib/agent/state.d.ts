import { StateSchema } from '@langchain/langgraph';
import { z } from 'zod/v4';
export declare const AgentState: StateSchema<{
    messages: import("@langchain/langgraph").ReducedValue<import("@langchain/core/messages").BaseMessage<import("@langchain/core/messages").MessageStructure<import("@langchain/core/messages").MessageToolSet>, import("@langchain/core/messages").MessageType>[], import("@langchain/langgraph").Messages>;
    memory: z.ZodDefault<z.ZodArray<z.ZodObject<{}, z.core.$strip>>>;
    sessionId: z.ZodString;
    error: z.ZodString;
}>;
export type State = typeof AgentState.State;
export type Update = typeof AgentState.Update;
export type MemoryType = {
    id: string;
    type: 'user' | 'assistant';
    message: string;
};
