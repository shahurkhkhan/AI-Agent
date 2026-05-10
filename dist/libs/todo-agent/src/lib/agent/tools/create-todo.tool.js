"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTodoTool = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const tools_1 = require("@langchain/core/tools");
const zod_1 = require("zod");
const todo_repository_1 = require("../../database/repositories/todo.repository");
let CreateTodoTool = class CreateTodoTool {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
        this.name = 'createTodo';
        this.description = `Create a new todo in database.`;
        this.schema = zod_1.z.object({
            task: zod_1.z.string(),
            priority: zod_1.z.enum(['low', 'medium', 'high']),
            isCompleted: zod_1.z.boolean(),
            createdAt: zod_1.z.string(),
            updatedAt: zod_1.z.string(),
        });
        this.func = async (data) => {
            return this.todoRepository.createTodo(data);
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
exports.CreateTodoTool = CreateTodoTool;
exports.CreateTodoTool = CreateTodoTool = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [todo_repository_1.TodoRepository])
], CreateTodoTool);
//# sourceMappingURL=create-todo.tool.js.map