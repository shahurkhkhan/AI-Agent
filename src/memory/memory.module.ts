import { Module } from '@nestjs/common';
import { redisProvider } from './redis/redis.provider';
import { MemoryService } from './memory.service';

@Module({
  providers: [redisProvider, MemoryService],
  exports: [MemoryService],
})
export class MemoryModule {}
