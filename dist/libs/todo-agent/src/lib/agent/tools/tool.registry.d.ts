import { CreateTodoTool } from './create-todo.tool';
import { ListTodoTool } from './list-todo.tool';
import { DeleteTodoTool } from './delete-todo.tool';
import { SearchTodoTool } from './search-todo.tool';
import { UpdateTodoTool } from './update-todo.tool';
export declare class ToolRegistry {
    private readonly createTodoTool;
    private readonly listTodoTool;
    private readonly deleteTodoTool;
    private readonly searchTodoTool;
    private readonly updateTodoTool;
    constructor(createTodoTool: CreateTodoTool, listTodoTool: ListTodoTool, deleteTodoTool: DeleteTodoTool, searchTodoTool: SearchTodoTool, updateTodoTool: UpdateTodoTool);
    getTools(): (import("@langchain/core/tools").DynamicStructuredTool<import("zod").ZodObject<{
        task: import("zod").ZodString;
        priority: import("zod").ZodEnum<{
            low: "low";
            medium: "medium";
            high: "high";
        }>;
        isCompleted: import("zod").ZodBoolean;
        createdAt: import("zod").ZodString;
        updatedAt: import("zod").ZodString;
    }, import("zod/v4/core").$strip>, import("../../database/schemas/todo.schema").ITodo, {
        task: string;
        priority: "low" | "medium" | "high";
        isCompleted: boolean;
        createdAt: string;
        updatedAt: string;
    }, string, unknown, string> | import("@langchain/core/tools").DynamicStructuredTool<import("zod").ZodObject<{}, import("zod/v4/core").$strip>, Record<string, never>, Record<string, never>, (import("../../database/schemas/todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], unknown, string> | import("@langchain/core/tools").DynamicStructuredTool<import("zod").ZodObject<{
        id: import("zod").ZodString;
    }, import("zod/v4/core").$strip>, {
        id: string;
    }, {
        id: string;
    }, (import("../../database/schemas/todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | "Todo Id is not valid" | null, unknown, string> | import("@langchain/core/tools").DynamicStructuredTool<import("zod").ZodObject<{
        query: import("zod").ZodString;
    }, import("zod/v4/core").$strip>, {
        query: string;
    }, {
        query: string;
    }, (import("../../database/schemas/todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], unknown, string> | import("@langchain/core/tools").DynamicStructuredTool<import("zod").ZodObject<{
        id: import("zod").ZodString;
        task: import("zod").ZodOptional<import("zod").ZodString>;
        priority: import("zod").ZodOptional<import("zod").ZodEnum<{
            low: "low";
            medium: "medium";
            high: "high";
        }>>;
        isCompleted: import("zod").ZodOptional<import("zod").ZodBoolean>;
        updatedAt: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod/v4/core").$strip>, {
        id: string;
        task?: string;
        priority?: any;
        isCompleted: boolean;
    }, {
        id: string;
        task?: string | undefined;
        priority?: "low" | "medium" | "high" | undefined;
        isCompleted?: boolean | undefined;
        updatedAt?: string | undefined;
    }, (import("mongoose").Document<unknown, {}, import("../../database/schemas/todo.schema").Todo, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/schemas/todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | "Todo Id is not valid" | "Todo is not found" | null, unknown, string>)[];
    getToolsMyName: () => {
        [k: string]: import("@langchain/core/tools").DynamicStructuredTool<import("zod").ZodObject<{
            task: import("zod").ZodString;
            priority: import("zod").ZodEnum<{
                low: "low";
                medium: "medium";
                high: "high";
            }>;
            isCompleted: import("zod").ZodBoolean;
            createdAt: import("zod").ZodString;
            updatedAt: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, import("../../database/schemas/todo.schema").ITodo, {
            task: string;
            priority: "low" | "medium" | "high";
            isCompleted: boolean;
            createdAt: string;
            updatedAt: string;
        }, string, unknown, string> | import("@langchain/core/tools").DynamicStructuredTool<import("zod").ZodObject<{}, import("zod/v4/core").$strip>, Record<string, never>, Record<string, never>, (import("../../database/schemas/todo.schema").Todo & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[], unknown, string> | import("@langchain/core/tools").DynamicStructuredTool<import("zod").ZodObject<{
            id: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, {
            id: string;
        }, {
            id: string;
        }, (import("../../database/schemas/todo.schema").Todo & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | "Todo Id is not valid" | null, unknown, string> | import("@langchain/core/tools").DynamicStructuredTool<import("zod").ZodObject<{
            query: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, {
            query: string;
        }, {
            query: string;
        }, (import("../../database/schemas/todo.schema").Todo & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[], unknown, string> | import("@langchain/core/tools").DynamicStructuredTool<import("zod").ZodObject<{
            id: import("zod").ZodString;
            task: import("zod").ZodOptional<import("zod").ZodString>;
            priority: import("zod").ZodOptional<import("zod").ZodEnum<{
                low: "low";
                medium: "medium";
                high: "high";
            }>>;
            isCompleted: import("zod").ZodOptional<import("zod").ZodBoolean>;
            updatedAt: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>, {
            id: string;
            task?: string;
            priority?: any;
            isCompleted: boolean;
        }, {
            id: string;
            task?: string | undefined;
            priority?: "low" | "medium" | "high" | undefined;
            isCompleted?: boolean | undefined;
            updatedAt?: string | undefined;
        }, (import("mongoose").Document<unknown, {}, import("../../database/schemas/todo.schema").Todo, {}, import("mongoose").DefaultSchemaOptions> & import("../../database/schemas/todo.schema").Todo & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | "Todo Id is not valid" | "Todo is not found" | null, unknown, string>;
    };
}
