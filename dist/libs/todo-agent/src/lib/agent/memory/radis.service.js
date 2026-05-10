"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadisMemoryService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const ioredis_1 = require("ioredis");
let RadisMemoryService = class RadisMemoryService {
    constructor(redis) {
        this.redis = redis;
    }
    async setSession(sessionId, data) {
        await this.redis.set(`session:${sessionId}`, JSON.stringify(data), 'EX', 3600);
    }
    async getSession(sessionId) {
        const data = await this.redis.get(`session:${sessionId}`);
        return data ? JSON.parse(data) : [];
    }
    async clearSession(sessionId) {
        await this.redis.del(`session:${sessionId}`);
    }
};
exports.RadisMemoryService = RadisMemoryService;
exports.RadisMemoryService = RadisMemoryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)('REDIS_CLIENT')),
    tslib_1.__metadata("design:paramtypes", [ioredis_1.default])
], RadisMemoryService);
//# sourceMappingURL=radis.service.js.map