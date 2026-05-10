import { CreateTodoTool } from './create-todo.tool';
import { ListTodoTool } from './list-todo.tool';
import { DeleteTodoTool } from './delete-todo.tool';
import { SearchTodoTool } from './search-todo.tool';
export declare class ToolRegistry {
    private readonly createTodoTool;
    private readonly listTodoTool;
    private readonly deleteTodoTool;
    private readonly searchTodoTool;
    constructor(createTodoTool: CreateTodoTool, listTodoTool: ListTodoTool, deleteTodoTool: DeleteTodoTool, searchTodoTool: SearchTodoTool);
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
    }) | null, unknown, string> | import("@langchain/core/tools").DynamicStructuredTool<import("zod").ZodObject<{
        query: import("zod").ZodString;
    }, import("zod/v4/core").$strip>, {
        query: string;
    }, {
        query: string;
    }, (import("../../database/schemas/todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], unknown, string>)[];
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
        }) | null, unknown, string> | import("@langchain/core/tools").DynamicStructuredTool<import("zod").ZodObject<{
            query: import("zod").ZodString;
        }, import("zod/v4/core").$strip>, {
            query: string;
        }, {
            query: string;
        }, (import("../../database/schemas/todo.schema").Todo & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[], unknown, string>;
    };
}
