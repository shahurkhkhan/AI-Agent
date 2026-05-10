import { ConfigService } from '@nestjs/config';
export declare class LLMClient {
    private readonly configService;
    private client;
    constructor(configService: ConfigService);
    getClient(tools?: any[] | null): import("@langchain/core/runnables").Runnable<import("@langchain/core/language_models/base").BaseLanguageModelInput, import("@langchain/core/messages").AIMessageChunk<import("@langchain/core/messages").MessageStructure<import("@langchain/core/messages").MessageToolSet>>, import("@langchain/openai").ChatOpenAICallOptions>;
}
