import { Injectable } from '@nestjs/common';
import { DynamicStructuredTool } from '@langchain/core/tools';
import { z } from 'zod';
import { TodoRepository } from '../../database/repositories/todo.repository';

@Injectable()
export class UpdateTodoTool {
    constructor(
        private readonly todoRepository: TodoRepository,
    ) { }

    public name = 'updateTodo';

    private description = `
    Update an existing todo using its exact MongoDB ObjectId.

    Rules:
    - Use only valid MongoDB ObjectId
    - Never guess todo ID
    - Resolve todo before update
    - Update only provided fields
    - If todo is not found, fail
    `;

    private schema = z.object({
        id: z.string().regex(/^[a-f\d]{24}$/i, 'Invalid Mongo ObjectId'),
        task: z.string().optional(),
        priority: z.enum(['low', 'medium', 'high']).optional(),
        isCompleted: z.boolean().optional(),
        updatedAt: z.string().optional(),
    });

    private func = async ({
        id,
        task,
        priority,
        isCompleted
    }: {
        id: string;
        task?: string;
        priority?: any;
        isCompleted: boolean,
    }) => {
        const todoId = this.todoRepository.isValidMongoId(id);

        if (!todoId) {
            return `Todo Id is not valid`;
        }

        const todo = await this.todoRepository.findById(id);

        if (!todo) {
            return `Todo is not found`;
        }

        const updatePayload: any = {};

        if (task !== undefined) {
            updatePayload.task = task;
        }

        if (priority !== undefined) {
            updatePayload.priority = priority;
        }
        if (isCompleted !== undefined) {
            updatePayload.isCompleted = isCompleted;
        }

        if (Object.keys(updatePayload).length === 0) {
            throw new Error('No update fields provided');
        }

        return this.todoRepository.updateTodo(id, updatePayload);
    };

    getTool() {
        return new DynamicStructuredTool({
            name: this.name,
            description: this.description,
            schema: this.schema,
            func: this.func,
        });
    }
}