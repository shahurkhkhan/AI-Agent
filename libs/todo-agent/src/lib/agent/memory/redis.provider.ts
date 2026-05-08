import Redis from 'ioredis';
import {env} from '../../common/env.config';

export const redisProvider = {
  provide: 'REDIS_CLIENT',
  useFactory: () => {
    return new Redis({
      host: env.redis_host,
      port: Number(env.redis_port),
    });
  },
};
