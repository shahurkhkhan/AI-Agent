"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoSchema = exports.Todo = exports.TodoPriority = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
var TodoPriority;
(function (TodoPriority) {
    TodoPriority["LOW"] = "low";
    TodoPriority["MEDIUM"] = "medium";
    TodoPriority["HIGH"] = "high";
})(TodoPriority || (exports.TodoPriority = TodoPriority = {}));
let Todo = class Todo {
};
exports.Todo = Todo;
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Todo.prototype, "task", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: TodoPriority,
        default: TodoPriority.MEDIUM,
    }),
    tslib_1.__metadata("design:type", String)
], Todo.prototype, "priority", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        type: Boolean,
        default: false,
    }),
    tslib_1.__metadata("design:type", Boolean)
], Todo.prototype, "isCompleted", void 0);
exports.Todo = Todo = tslib_1.__decorate([
    (0, mongoose_1.Schema)({
        timestamps: true, // automatically adds createdAt & updatedAt
    })
], Todo);
exports.TodoSchema = mongoose_1.SchemaFactory.createForClass(Todo);
//# sourceMappingURL=todo.schema.js.map