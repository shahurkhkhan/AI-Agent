import {
  StateSchema,
  // MessagesValue,
} from '@langchain/langgraph';
import { z } from 'zod/v4';

export const ReviewCommentSchema = z.array(
  z.object({
    message: z.string(),
    line: z.number(),
    severity: z.enum(["Critical","Major","Minor"]),
    category: z.string(),
    suggestion: z.string(),
    confidence: z.number(),
    path: z.string(),
    body: z.unknown().default(''),
  })
);

export const AgentState = new StateSchema({
  // messages: MessagesValue, // Prebuilt messages value with built-in reducer
  owner: z.string().default(''),
  repo:  z.string().default(''),
  pullNumber: z.number(),
  files: z.array(
    z.unknown()
  ).default([]),
  commitId: z.string().default(''),
  oldComments: z.array(
    z.object({
      id: z.number(),
      path: z.string(),
      line: z.number(),
    })
  ).default([]),
  newComments: ReviewCommentSchema,
});

export type State = typeof AgentState.State; // Full state type
export type Update = typeof AgentState.Update; // Partial update type

export type OLDComment = {
    "id": number,
    "path": string,
    "line": number
}

export type FILE = {
    sha: string;
    filename: string;
    status: "added" | "removed" | "modified" | "renamed" | "copied" | "changed" | "unchanged";
    additions: number;
    deletions: number;
    changes: number;
    blob_url: string;
    raw_url: string;
    contents_url: string;
    patch?: string | undefined;
    previous_filename?: string | undefined;
}

export interface ReviewComment {
  severity: "Critical" | "Major" | "Minor";
  category: string;
  message: string;
  suggestion: string;
  confidence?: number;
  path: string;
  line: number,
  body: any
}