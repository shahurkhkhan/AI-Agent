import { Injectable } from '@nestjs/common';
import { DynamicStructuredTool } from '@langchain/core/tools';
import { z } from 'zod';
import { TodoRepository } from '../../database/repositories/todo.repository';

@Injectable()
export class ListTodoTool {
    constructor(
        private readonly todoRepository: TodoRepository,
    ) { }

    public name = 'findAllTodo';

    private description = `Fetch all todos.`;

    private schema = z.object({});

    private func = async () => {
        return this.todoRepository.findAllTodo();
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