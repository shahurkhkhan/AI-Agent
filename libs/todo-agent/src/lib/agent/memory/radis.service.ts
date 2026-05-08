import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { MemoryType } from '../state';

@Injectable()
export class RadisMemoryService {
  
  constructor(
    @Inject('REDIS_CLIENT')
    private readonly redis: Redis,
  ) {}

  async setSession(sessionId: string, data: MemoryType[]) {
    await this.redis.set(
      `session:${sessionId}`,
      JSON.stringify(data),
      'EX',
      3600,
    );
  }

  async getSession(sessionId: string): Promise<MemoryType[]> {
    const data = await this.redis.get(`session:${sessionId}`);
    return data ? JSON.parse(data) : [];
  }

  async clearSession(sessionId: string) {
    await this.redis.del(`session:${sessionId}`);
  }
}
