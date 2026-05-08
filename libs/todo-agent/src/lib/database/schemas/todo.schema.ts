import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todo>;

export enum TodoPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

@Schema({
  timestamps: true, // automatically adds createdAt & updatedAt
})
export class Todo {
  @Prop({
    type: String,
    required: true,
  })
  task!: string;

  @Prop({
    type: String,
    enum: TodoPriority,
    default: TodoPriority.MEDIUM,
  })
  priority!: TodoPriority;

  @Prop({
    type: Boolean,
    default: false,
  })
  isCompleted!: boolean;

  createdAt!: Date;
  updatedAt!: Date;
}

export interface ITodo {
  task: string;
  priority: TodoPriority;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
