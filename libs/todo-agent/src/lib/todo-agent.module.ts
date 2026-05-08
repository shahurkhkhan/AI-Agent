import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentModule } from './agent/agent.module';
import { ConfigModule } from '@nestjs/config';
import envConfig from './common/env.config';
import { envValidationSchema } from './common/env.validation';
import { TodoController } from './toto.controller';
import { StreamController } from './stream.conroller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [
        envConfig,
      ],
      validationSchema: envValidationSchema,
    }),
    MongooseModule.forRoot(envConfig().mongo_db_url),
    AgentModule
  ],
  controllers: [
    TodoController,
    StreamController
  ],
  providers: [],
})
export class TodoAgentModule {}
