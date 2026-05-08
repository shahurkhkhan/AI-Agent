import { Injectable } from '@nestjs/common';
import { DynamicStructuredTool } from '@langchain/core/tools';
import { z } from 'zod';
import { TodoRepository } from '../../database/repositories/todo.repository';

@Injectable()
export class SearchTodoTool {
    constructor(
        private readonly todoRepository: TodoRepository,
    ) { }

    public name = 'searchTodo';

    private description = `Search todos using query.`;

    private schema = z.object({
        query: z.string(),
    })

    private func = async ({ query }: { query: string }) => {
        return this.todoRepository.searchTodo(query);
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