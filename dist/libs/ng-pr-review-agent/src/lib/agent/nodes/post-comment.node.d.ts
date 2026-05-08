import { ReviewComment, State } from '../state';
export declare class PostCommentNode {
    getSeverityMeta: (severity: string) => {
        emoji: string;
        label: string;
    };
    capitalize: (value: string) => string;
    formatConfidence: (confidence?: number) => string;
    sanitizeCodeBlock: (text: string) => string;
    formatInlineComment: (comment: ReviewComment) => string;
    postInlineComment: (params: {
        owner: string;
        repo: string;
        pullNumber: number;
        commitId: string;
        path: string;
        line: number;
        body: string;
    }) => Promise<void>;
    postSummaryComment: (params: {
        owner: string;
        repo: string;
        pullNumber: number;
        body: string;
    }) => Promise<void>;
    buildSummary: (comments: ReviewComment[]) => string;
    execute: (state: State) => Promise<import("@langchain/langgraph").InferStateSchemaValue<{
        owner: import("zod/v4").ZodDefault<import("zod/v4").ZodString>;
        repo: import("zod/v4").ZodDefault<import("zod/v4").ZodString>;
        pullNumber: import("zod/v4").ZodNumber;
        files: import("zod/v4").ZodDefault<import("zod/v4").ZodArray<import("zod/v4").ZodUnknown>>;
        commitId: import("zod/v4").ZodDefault<import("zod/v4").ZodString>;
        oldComments: import("zod/v4").ZodDefault<import("zod/v4").ZodArray<import("zod/v4").ZodObject<{
            id: import("zod/v4").ZodNumber;
            path: import("zod/v4").ZodString;
            line: import("zod/v4").ZodNumber;
        }, import("zod/v4/core").$strip>>>;
        newComments: import("zod/v4").ZodArray<import("zod/v4").ZodObject<{
            message: import("zod/v4").ZodString;
            line: import("zod/v4").ZodNumber;
            severity: import("zod/v4").ZodEnum<{
                Critical: "Critical";
                Major: "Major";
                Minor: "Minor";
            }>;
            category: import("zod/v4").ZodString;
            suggestion: import("zod/v4").ZodString;
            confidence: import("zod/v4").ZodNumber;
            path: import("zod/v4").ZodString;
            body: import("zod/v4").ZodDefault<import("zod/v4").ZodUnknown>;
        }, import("zod/v4/core").$strip>>;
    }>>;
}
