import { Injectable } from '@nestjs/common';
import { DynamicStructuredTool } from '@langchain/core/tools';
import { z } from 'zod';
import { TodoRepository } from '../../database/repositories/todo.repository';

@Injectable()
export class DeleteTodoTool {
    constructor(
        private readonly todoRepository: TodoRepository,
    ) { }

    public name = 'deleteTodo';

    private description = `
        Delete a todo using its exact MongoDB ObjectId.

        Rules:
        - ID must be a valid MongoDB ObjectId
        - Never use todo title as ID
        - Never guess ID
        - Resolve todo before deletion
        `;

    private schema = z.object({
        id: z
            .string()
            .regex(/^[a-f\d]{24}$/i, 'Invalid Mongo ObjectId'),
    });

    private func = async ({ id }: { id: string }) => {
        const todo = this.todoRepository.isValidMongoId(id);
        console.log('todo', todo)

        if (!todo) {
            return `Todo Id is not valid`;
        }

        return this.todoRepository.deleteTodo(id);
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