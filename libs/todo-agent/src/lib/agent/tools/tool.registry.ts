import { Injectable } from '@nestjs/common';
import { CreateTodoTool } from './create-todo.tool';
import { ListTodoTool } from './list-todo.tool';
import { DeleteTodoTool } from './delete-todo.tool';
import { SearchTodoTool } from './search-todo.tool';

@Injectable()
export class ToolRegistry {
  constructor(
    private readonly createTodoTool: CreateTodoTool,
    private readonly listTodoTool: ListTodoTool,
    private readonly deleteTodoTool: DeleteTodoTool,
    private readonly searchTodoTool: SearchTodoTool,
  ) {}

  getTools() {
    return [
      this.createTodoTool.getTool(),
      this.listTodoTool.getTool(),
      this.deleteTodoTool.getTool(),
      this.searchTodoTool.getTool(),
    ];
  }

  getToolsMyName = () => {
    return Object.fromEntries(this.getTools().map((t) => [t.name, t]));
  }
}