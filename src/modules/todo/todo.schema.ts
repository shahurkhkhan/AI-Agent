import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<
  Document & {
    task: string;
  }
>;

@Schema()
export class Todo {
  @Prop({
    type: String,
    required: true,
  })
  task: string | undefined;

  @Prop({ type: Date })
  createdAt!: Date;

  @Prop({ type: Date })
  updatedAt!: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
