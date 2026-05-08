import { StateSchema } from '@langchain/langgraph';
import { z } from 'zod/v4';
export declare const ReviewCommentSchema: z.ZodArray<z.ZodObject<{
    message: z.ZodString;
    line: z.ZodNumber;
    severity: z.ZodEnum<{
        Critical: "Critical";
        Major: "Major";
        Minor: "Minor";
    }>;
    category: z.ZodString;
    suggestion: z.ZodString;
    confidence: z.ZodNumber;
    path: z.ZodString;
    body: z.ZodDefault<z.ZodUnknown>;
}, z.core.$strip>>;
export declare const AgentState: StateSchema<{
    owner: z.ZodDefault<z.ZodString>;
    repo: z.ZodDefault<z.ZodString>;
    pullNumber: z.ZodNumber;
    files: z.ZodDefault<z.ZodArray<z.ZodUnknown>>;
    commitId: z.ZodDefault<z.ZodString>;
    oldComments: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        path: z.ZodString;
        line: z.ZodNumber;
    }, z.core.$strip>>>;
    newComments: z.ZodArray<z.ZodObject<{
        message: z.ZodString;
        line: z.ZodNumber;
        severity: z.ZodEnum<{
            Critical: "Critical";
            Major: "Major";
            Minor: "Minor";
        }>;
        category: z.ZodString;
        suggestion: z.ZodString;
        confidence: z.ZodNumber;
        path: z.ZodString;
        body: z.ZodDefault<z.ZodUnknown>;
    }, z.core.$strip>>;
}>;
export type State = typeof AgentState.State;
export type Update = typeof AgentState.Update;
export type OLDComment = {
    "id": number;
    "path": string;
    "line": number;
};
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
};
export interface ReviewComment {
    severity: "Critical" | "Major" | "Minor";
    category: string;
    message: string;
    suggestion: string;
    confidence?: number;
    path: string;
    line: number;
    body: any;
}
