import { Model } from 'mongoose';
import { Todo, TodoPriority } from '../schemas/todo.schema';
export declare class TodoRepository {
    private todoModel;
    constructor(todoModel: Model<Todo>);
    createTodo: (data: {
        task: string;
        priority: TodoPriority;
        isCompleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }) => Promise<string>;
    findAllTodo: () => Promise<(Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    deleteTodo: (id: string) => Promise<(Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    searchTodo: (query: string) => Promise<(Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
}
