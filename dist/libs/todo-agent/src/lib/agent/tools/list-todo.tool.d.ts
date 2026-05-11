import { DynamicStructuredTool } from '@langchain/core/tools';
import { z } from 'zod';
import { TodoRepository } from '../../database/repositories/todo.repository';
export declare class ListTodoTool {
    private readonly todoRepository;
    constructor(todoRepository: TodoRepository);
    name: string;
    private description;
    private schema;
    private func;
    getTool(): DynamicStructuredTool<z.ZodObject<{}, z.core.$strip>, Record<string, never>, Record<string, never>, (import("../../database/schemas/todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], unknown, string>;
}
