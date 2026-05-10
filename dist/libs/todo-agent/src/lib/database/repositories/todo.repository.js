"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRepository = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const todo_schema_1 = require("../schemas/todo.schema");
let TodoRepository = class TodoRepository {
    constructor(todoModel) {
        this.todoModel = todoModel;
        this.createTodo = async (data) => {
            const created = new this.todoModel(data);
            const saved = await created.save();
            return saved._id.toString();
        };
        this.findAllTodo = async () => {
            return this.todoModel.find().lean().exec();
        };
        this.deleteTodo = async (id) => {
            return this.todoModel.findByIdAndDelete(id).lean().exec();
        };
        this.searchTodo = async (query) => {
            return this.todoModel
                .find({ task: { $regex: query, $options: 'i' } })
                .lean()
                .exec();
        };
    }
};
exports.TodoRepository = TodoRepository;
exports.TodoRepository = TodoRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_2.InjectModel)(todo_schema_1.Todo.name)),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], TodoRepository);
//# sourceMappingURL=todo.repository.js.map