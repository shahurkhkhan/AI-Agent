"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchTodoTool = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const tools_1 = require("@langchain/core/tools");
const zod_1 = require("zod");
const todo_repository_1 = require("../../database/repositories/todo.repository");
let SearchTodoTool = class SearchTodoTool {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
        this.name = 'searchTodo';
        this.description = `Search todos using query.`;
        this.schema = zod_1.z.object({
            query: zod_1.z.string(),
        });
        this.func = async ({ query }) => {
            return this.todoRepository.searchTodo(query);
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
exports.SearchTodoTool = SearchTodoTool;
exports.SearchTodoTool = SearchTodoTool = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [todo_repository_1.TodoRepository])
], SearchTodoTool);
//# sourceMappingURL=search-todo.tool.js.map