import Redis from 'ioredis';
import { MemoryType } from '../state';
export declare class RadisMemoryService {
    private readonly redis;
    constructor(redis: Redis);
    setSession(sessionId: string, data: MemoryType[]): Promise<void>;
    getSession(sessionId: string): Promise<MemoryType[]>;
    clearSession(sessionId: string): Promise<void>;
}
