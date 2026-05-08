import { Injectable } from '@nestjs/common';
import { DynamicStructuredTool } from '@langchain/core/tools';
import { z } from 'zod';
import { TodoRepository } from '../../database/repositories/todo.repository';
import { ITodo } from '../../database/schemas/todo.schema';

@Injectable()
export class CreateTodoTool {
    constructor(
        private readonly todoRepository: TodoRepository,
    ) { }

    public name = 'createTodo';

    private description = `Create a new todo in database.`;

    private schema = z.object({
        task: z.string(),
        priority: z.enum(['low', 'medium', 'high']),
        isCompleted: z.boolean(),
        createdAt: z.string(),
        updatedAt: z.string(),
    })

    private func = async (data: ITodo) => {
        return this.todoRepository.createTodo(data);
    }

    getTool() {
        return new DynamicStructuredTool({
            name: this.name,
            description: this.description,
            schema: this.schema,
            func: this.func,
        });
    }
}