"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTodoTool = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const tools_1 = require("@langchain/core/tools");
const zod_1 = require("zod");
const todo_repository_1 = require("../../database/repositories/todo.repository");
let ListTodoTool = class ListTodoTool {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
        this.name = 'findAllTodo';
        this.description = `Fetch all todos.`;
        this.schema = zod_1.z.object({});
        this.func = async () => {
            return this.todoRepository.findAllTodo();
        };
    }
    getTool() {
        return new tools_1.DynamicStructuredTool({
            name: this.name,
            description: this.description,
            schema: this.schema,
            func: this.func,
        });
    }
};
exports.ListTodoTool = ListTodoTool;
exports.ListTodoTool = ListTodoTool = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [todo_repository_1.TodoRepository])
], ListTodoTool);
//# sourceMappingURL=list-todo.tool.js.map