"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTodoTool = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const tools_1 = require("@langchain/core/tools");
const zod_1 = require("zod");
const todo_repository_1 = require("../../database/repositories/todo.repository");
let DeleteTodoTool = class DeleteTodoTool {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
        this.name = 'deleteTodo';
        this.description = `Delete todo by id.`;
        this.schema = zod_1.z.object({
            id: zod_1.z.string(),
        });
        this.func = async ({ id }) => {
            return this.todoRepository.deleteTodo(id);
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
exports.DeleteTodoTool = DeleteTodoTool;
exports.DeleteTodoTool = DeleteTodoTool = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [todo_repository_1.TodoRepository])
], DeleteTodoTool);
//# sourceMappingURL=delete-todo.tool.js.map