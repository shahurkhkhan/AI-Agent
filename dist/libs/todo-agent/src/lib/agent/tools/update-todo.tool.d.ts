import { DynamicStructuredTool } from '@langchain/core/tools';
import { z } from 'zod';
import { TodoRepository } from '../../database/repositories/todo.repository';
export declare class UpdateTodoTool {
    private readonly todoRepository;
    constructor(todoRepository: TodoRepository);
    name: string;
    private description;
    private schema;
    private func;
    getTool(): DynamicStructuredTool<z.ZodObject<{
        id: z.ZodString;
        task: z.ZodOptional<z.ZodString>;
        priority: z.ZodOptional<z.ZodEnum<{
            low: "low";
            medium: "medium";
            high: "high";
        }>>;
        isCompleted: z.ZodOptional<z.ZodBoolean>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, {
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
}
