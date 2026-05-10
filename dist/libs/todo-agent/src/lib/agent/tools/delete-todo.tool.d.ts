import { DynamicStructuredTool } from '@langchain/core/tools';
import { z } from 'zod';
import { TodoRepository } from '../../database/repositories/todo.repository';
export declare class DeleteTodoTool {
    private readonly todoRepository;
    constructor(todoRepository: TodoRepository);
    name: string;
    private description;
    private schema;
    private func;
    getTool(): DynamicStructuredTool<z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>, {
        id: string;
    }, {
        id: string;
    }, (import("../../database/schemas/todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, unknown, string>;
}
