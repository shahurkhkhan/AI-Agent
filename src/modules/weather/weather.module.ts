/* eslint-disable prettier/prettier */
import dotenv from 'dotenv';
dotenv.config();
import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { LLMClientService } from '../../core/llm.service';

@Module({
  imports: [],
  controllers: [WeatherController],
  providers: [WeatherService, LLMClientService],
})
export class WeatherModule {}
