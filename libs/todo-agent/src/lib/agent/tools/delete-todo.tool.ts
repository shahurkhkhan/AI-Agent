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

    private description = `Delete todo by id.`;

    private schema = z.object({
        id: z.string(),
    })

    private func = async ({ id }: { id: string }) => {
        return this.todoRepository.deleteTodo(id);
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