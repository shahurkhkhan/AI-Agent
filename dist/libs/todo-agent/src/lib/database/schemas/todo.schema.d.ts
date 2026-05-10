import { HydratedDocument } from 'mongoose';
export type TodoDocument = HydratedDocument<Todo>;
export declare enum TodoPriority {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high"
}
export declare class Todo {
    task: string;
    priority: TodoPriority;
    isCompleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export interface ITodo {
    task: string;
    priority: TodoPriority;
    isCompleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const TodoSchema: import("mongoose").Schema<Todo, import("mongoose").Model<Todo, any, any, any, any, any, Todo>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Todo, import("mongoose").Document<unknown, {}, Todo, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Todo & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    task?: import("mongoose").SchemaDefinitionProperty<string, Todo, import("mongoose").Document<unknown, {}, Todo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    priority?: import("mongoose").SchemaDefinitionProperty<TodoPriority, Todo, import("mongoose").Document<unknown, {}, Todo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isCompleted?: import("mongoose").SchemaDefinitionProperty<boolean, Todo, import("mongoose").Document<unknown, {}, Todo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, Todo, import("mongoose").Document<unknown, {}, Todo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, Todo, import("mongoose").Document<unknown, {}, Todo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Todo>;
