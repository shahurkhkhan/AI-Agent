/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class MemoryService {
  constructor(
    @Inject('REDIS_CLIENT')
    private readonly redis: Redis,
  ) {}

  async setSession(sessionId: string, data: any) {
    await this.redis.set(
      `session:${sessionId}`,
      JSON.stringify(data),
      'EX',
      3600,
    );
  }

  async getSession(sessionId: string) {
    const data = await this.redis.get(`session:${sessionId}`);
    return data ? JSON.parse(data) : null;
  }

  async clearSession(sessionId: string) {
    await this.redis.del(`session:${sessionId}`);
  }
}
