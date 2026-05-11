"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
exports.env = {
    mongo_db_url: process.env['MONGO_URI'] || (() => {
        throw new Error("MONGO_URI is not defined");
    })(),
    openai_api_key: process.env['OPENAI_API_KEY'] || (() => {
        throw new Error("OPENAI_API_KEY is not defined");
    })(),
    redis_host: process.env['REDIS_HOST'] || (() => {
        throw new Error("REDIS_HOST is not defined");
    })(),
    redis_port: process.env['REDIS_PORT'] || (() => {
        throw new Error("REDIS_PORT is not defined");
    })(),
};
exports.default = () => ({
    ...exports.env
});
//# sourceMappingURL=env.config.js.map