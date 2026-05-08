"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMClient = void 0;
const tslib_1 = require("tslib");
const openai_1 = require("@langchain/openai");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let LLMClient = class LLMClient {
    constructor(configService) {
        this.configService = configService;
        this.client = new openai_1.ChatOpenAI({
            model: 'gpt-4o-mini',
            apiKey: this.configService.get('openai_api_key'),
            temperature: 0,
        });
    }
    getClient(tools = null) {
        if (!tools)
            return this.client;
        return this.client.bindTools(tools);
    }
};
exports.LLMClient = LLMClient;
exports.LLMClient = LLMClient = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [config_1.ConfigService])
], LLMClient);
//# sourceMappingURL=llm.service.js.map