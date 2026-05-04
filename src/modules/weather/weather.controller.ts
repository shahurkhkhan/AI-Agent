import { Controller, Post, Body } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Post('forecast')
  forecast(@Body() body: { query: string }) {
    return this.weatherService.forecast(body);
  }
}
