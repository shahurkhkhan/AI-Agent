"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolRegistry = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const create_todo_tool_1 = require("./create-todo.tool");
const list_todo_tool_1 = require("./list-todo.tool");
const delete_todo_tool_1 = require("./delete-todo.tool");
const search_todo_tool_1 = require("./search-todo.tool");
let ToolRegistry = class ToolRegistry {
    constructor(createTodoTool, listTodoTool, deleteTodoTool, searchTodoTool) {
        this.createTodoTool = createTodoTool;
        this.listTodoTool = listTodoTool;
        this.deleteTodoTool = deleteTodoTool;
        this.searchTodoTool = searchTodoTool;
        this.getToolsMyName = () => {
            return Object.fromEntries(this.getTools().map((t) => [t.name, t]));
        };
    }
    getTools() {
        return [
            this.createTodoTool.getTool(),
            this.listTodoTool.getTool(),
            this.deleteTodoTool.getTool(),
            this.searchTodoTool.getTool(),
        ];
    }
};
exports.ToolRegistry = ToolRegistry;
exports.ToolRegistry = ToolRegistry = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [create_todo_tool_1.CreateTodoTool,
        list_todo_tool_1.ListTodoTool,
        delete_todo_tool_1.DeleteTodoTool,
        search_todo_tool_1.SearchTodoTool])
], ToolRegistry);
//# sourceMappingURL=tool.registry.js.map