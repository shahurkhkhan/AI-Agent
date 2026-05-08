import { LLMNode } from './nodes/llm.node';
import { GitHubNode } from './nodes/github.node';
import { PostCommentNode } from './nodes/post-comment.node';
export declare class ChatGraph {
    private llmNode;
    private githubNode;
    private postCommentNode;
    constructor(llmNode: LLMNode, githubNode: GitHubNode, postCommentNode: PostCommentNode);
    build(): import("@langchain/langgraph").CompiledStateGraph<{
        owner: string;
        repo: string;
        pullNumber: number;
        files: unknown[];
        commitId: string;
        oldComments: {
            id: number;
            path: string;
            line: number;
        }[];
        newComments: {
            message: string;
            line: number;
            severity: "Critical" | "Major" | "Minor";
            category: string;
            suggestion: string;
            confidence: number;
            path: string;
            body: unknown;
        }[];
    }, {
        owner?: string | undefined;
        repo?: string | undefined;
        pullNumber?: number | undefined;
        files?: unknown[] | undefined;
        commitId?: string | undefined;
        oldComments?: {
            id: number;
            path: string;
            line: number;
        }[] | undefined;
        newComments?: {
            message: string;
            line: number;
            severity: "Critical" | "Major" | "Minor";
            category: string;
            suggestion: string;
            confidence: number;
            path: string;
            body?: unknown;
        }[] | undefined;
    }, "__start__" | "PRDetail" | "llmNode" | "postComments", import("@langchain/langgraph").StateSchema<{
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
    }>, import("@langchain/langgraph").StateSchema<{
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
    }>, import("@langchain/langgraph").StateDefinition, {
        PRDetail: {
            owner: string;
            repo: string;
            pullNumber: number;
            files: any[];
            commitId: string;
            oldComments: any[];
            newComments: {
                message: string;
                line: number;
                severity: "Critical" | "Major" | "Minor";
                category: string;
                suggestion: string;
                confidence: number;
                path: string;
                body: unknown;
            }[];
        };
        llmNode: import("@langchain/langgraph").UpdateType<import("@langchain/langgraph").StateSchemaFieldsToStateDefinition<{
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
        postComments: import("@langchain/langgraph").InferStateSchemaValue<{
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
        }>;
    }, unknown, unknown, []>;
}
