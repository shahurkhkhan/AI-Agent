import { ChatGraph } from "./graph";
export declare class AgentRuntimeService {
    private readonly chatGraph;
    private graph;
    constructor(chatGraph: ChatGraph);
    invoke(): Promise<import("@langchain/langgraph").StateType<import("@langchain/langgraph").StateSchemaFieldsToStateDefinition<{
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
    }>>>;
}
