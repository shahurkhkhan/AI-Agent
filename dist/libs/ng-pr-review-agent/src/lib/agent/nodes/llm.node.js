"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMNode = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const messages_1 = require("@langchain/core/messages");
const fs_1 = require("fs");
const path_1 = require("path");
const llm_service_1 = require("../../common/llm.service");
const tool_registry_1 = require("../tools/tool.registry");
const state_1 = require("../state");
let LLMNode = class LLMNode {
    constructor(llMClient, toolRegistry) {
        this.llMClient = llMClient;
        this.toolRegistry = toolRegistry;
        this.systemPrompt = () => {
            const prompts = [
                'review.md',
                'output.md',
            ];
            return prompts
                .map((prompt) => this.loadPrompt(prompt))
                .join('\n');
        };
        this.execute = async (state) => {
            const systemPrompt = this.systemPrompt();
            let comments = [];
            if (!state.files?.length) {
                return state;
            }
            for await (const file of state.files) {
                if (!file.patch)
                    continue;
                const oldCommentOfTheFile = state.oldComments.filter((comment) => comment.path === file.filename);
                const existingComments = oldCommentOfTheFile.map((comment) => ({
                    path: comment.path,
                    line: comment.line
                })) ?? [];
                const existingLines = new Set(oldCommentOfTheFile.map((comment) => `${comment.path}:${comment.line}`));
                const prompt = `
        You are reviewing a GitHub pull request.

        File: ${file.filename}

        Changed code:
        ${file.patch}

        Existing comments already posted on this file and at line number:
        ${JSON.stringify(existingComments, null, 2)}

        STRICT RULES:
          1. Review ONLY changed lines
          2. Only skip findings if the SAME line already has a comment
          3. Ignore comments on other lines
          4. If a line has no existing comment, review it normally
          5. Return all valid new findings
          6. Return [] only if every issue is already commented
        `;
                const response = await this.client.invoke([
                    new messages_1.SystemMessage(systemPrompt),
                    new messages_1.HumanMessage(prompt),
                ]);
                const llmComments = state_1.ReviewCommentSchema.parse(JSON.parse(response.content));
                const filteredComments = llmComments.filter((comment) => !existingLines.has(`${comment.path}:${comment.line}`));
                comments = filteredComments.map((comment) => ({
                    ...comment, path: file.filename,
                })).concat(comments);
            }
            return {
                ...state,
                newComments: comments,
            };
        };
        this.client = this.llMClient
            .getClient(this.toolRegistry.getTools());
    }
    loadPrompt(file) {
        const fullPath = (0, path_1.join)(process.cwd(), 'libs/ng-pr-review-agent/src/lib/agent/prompts', file);
        return (0, fs_1.readFileSync)(fullPath, 'utf8');
    }
};
exports.LLMNode = LLMNode;
exports.LLMNode = LLMNode = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [llm_service_1.LLMClient,
        tool_registry_1.ToolRegistry])
], LLMNode);
//# sourceMappingURL=llm.node.js.map