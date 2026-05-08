import { Module } from '@nestjs/common';
import { PRReviewController } from './pr-review.controller';
import { ConfigModule } from '@nestjs/config';
import envConfig from './common/env.config';
import { envValidationSchema } from './common/env.validation';
import { AgentModule } from './agent/agent.module';


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
    AgentModule
  ],
  controllers: [
    PRReviewController
  ],
  providers: [],
  exports: [],
})
export class NgPrReviewAgentModule {}
