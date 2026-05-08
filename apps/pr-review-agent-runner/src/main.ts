import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { AppService } from './app/app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const appService = app.get(AppService);

  await appService.run();

  await app.close();
}

bootstrap();
