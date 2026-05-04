/* eslint-disable prettier/prettier */
import dotenv from 'dotenv';
dotenv.config();
import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { LLMClientService } from '../../core/llm.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './todo.schema';
import { TodoAgentModule } from 'src/agents/todo-agent/agent.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
    TodoAgentModule
  ],
  controllers: [TodoController],
  providers: [TodoService, LLMClientService],
})
export class TodoModule {}
