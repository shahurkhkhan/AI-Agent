"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTodoTool = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const tools_1 = require("@langchain/core/tools");
const zod_1 = require("zod");
const todo_repository_1 = require("../../database/repositories/todo.repository");
let UpdateTodoTool = class UpdateTodoTool {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
        this.name = 'updateTodo';
        this.description = `
    Update an existing todo using its exact MongoDB ObjectId.

    Rules:
    - Use only valid MongoDB ObjectId
    - Never guess todo ID
    - Resolve todo before update
    - Update only provided fields
    - If todo is not found, fail
    `;
        this.schema = zod_1.z.object({
            id: zod_1.z.string().regex(/^[a-f\d]{24}$/i, 'Invalid Mongo ObjectId'),
            task: zod_1.z.string().optional(),
            priority: zod_1.z.enum(['low', 'medium', 'high']).optional(),
            isCompleted: zod_1.z.boolean().optional(),
            updatedAt: zod_1.z.string().optional(),
        });
        this.func = async ({ id, task, priority, isCompleted }) => {
            const todoId = this.todoRepository.isValidMongoId(id);
            if (!todoId) {
                return `Todo Id is not valid`;
            }
            const todo = await this.todoRepository.findById(id);
            if (!todo) {
                return `Todo is not found`;
            }
            const updatePayload = {};
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
exports.UpdateTodoTool = UpdateTodoTool;
exports.UpdateTodoTool = UpdateTodoTool = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [todo_repository_1.TodoRepository])
], UpdateTodoTool);
//# sourceMappingURL=update-todo.tool.js.map