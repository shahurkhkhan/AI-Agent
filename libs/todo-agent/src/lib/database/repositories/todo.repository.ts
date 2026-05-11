import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Todo, TodoPriority } from '../schemas/todo.schema';

@Injectable()
export class TodoRepository {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  isValidMongoId = (id: string): boolean => {
  return ObjectId.isValid(id) &&
         String(new ObjectId(id)) === id;
};

  public createTodo = async (data: {
    task: string;
    priority: TodoPriority;
    isCompleted: boolean;
    createdAt: Date;
    updatedAt: Date;
  }) => {
    const created = new this.todoModel(data);
    const saved = await created.save();
    return saved._id.toString();
  };

  public findAllTodo = async () => {
    return this.todoModel.find().lean().exec();
  };

  public deleteTodo = async (id: string) => {
    return this.todoModel.findByIdAndDelete(id).lean().exec();
  };

  public findById = async (id: string) => {
    return this.todoModel.findById(id).lean().exec();
  };

  public searchTodo = async (query: string) => {
    return this.todoModel
      .find({ task: { $regex: query, $options: 'i' } })
      .lean()
      .exec();
  };

  updateTodo = async (id: string, payload: Partial<Todo>) => {
    return this.todoModel.findByIdAndUpdate(
      id,
      payload,
      { returnDocument: 'after' }
    );
  }
}
