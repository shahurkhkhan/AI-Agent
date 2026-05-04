/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import dotenv from 'dotenv';
dotenv.config();
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './modules/todo/todo.module';
import { WeatherModule } from './modules/weather/weather.module';
import { MongooseModule } from '@nestjs/mongoose';
import { envValidationSchema } from './config/env.validation';
import { MemoryModule } from './memory/memory.module';
import config from './config/configuration';
// import { ServeStaticModule } from '@nestjs/serve-static'
// import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: envValidationSchema,
    }),
    MemoryModule,
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'client')
    // }),
    TodoModule,
    WeatherModule,
    MongooseModule.forRoot(config.mongo_db_url),
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
