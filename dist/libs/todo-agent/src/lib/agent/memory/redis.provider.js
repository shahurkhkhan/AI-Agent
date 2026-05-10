"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisProvider = void 0;
const ioredis_1 = require("ioredis");
const env_config_1 = require("../../common/env.config");
exports.redisProvider = {
    provide: 'REDIS_CLIENT',
    useFactory: () => {
        return new ioredis_1.default({
            host: env_config_1.env.redis_host,
            port: Number(env_config_1.env.redis_port),
        });
    },
};
//# sourceMappingURL=redis.provider.js.map