import { LLMClient } from '../../common/llm.service';
import { ToolRegistry } from '../tools/tool.registry';
import { ReviewComment, State } from '../state';
export declare class LLMNode {
    private llMClient;
    private toolRegistry;
    private client;
    constructor(llMClient: LLMClient, toolRegistry: ToolRegistry);
    private loadPrompt;
    private systemPrompt;
    execute: (state: State) => Promise<{
        newComments: ReviewComment[];
        owner: string;
        repo: string;
        pullNumber: number;
        files: unknown[];
        commitId: string;
        oldComments: {
            id: number;
            path: string;
            line: number;
        }[];
    }>;
}
