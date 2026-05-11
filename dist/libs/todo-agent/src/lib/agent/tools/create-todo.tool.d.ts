import { DynamicStructuredTool } from '@langchain/core/tools';
import { z } from 'zod';
import { TodoRepository } from '../../database/repositories/todo.repository';
import { ITodo } from '../../database/schemas/todo.schema';
export declare class CreateTodoTool {
    private readonly todoRepository;
    constructor(todoRepository: TodoRepository);
    name: string;
    private description;
    private schema;
    private func;
    getTool(): DynamicStructuredTool<z.ZodObject<{
        task: z.ZodString;
        priority: z.ZodEnum<{
            low: "low";
            medium: "medium";
            high: "high";
        }>;
        isCompleted: z.ZodBoolean;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>, ITodo, {
        task: string;
        priority: "low" | "medium" | "high";
        isCompleted: boolean;
        createdAt: string;
        updatedAt: string;
    }, string, unknown, string>;
}
