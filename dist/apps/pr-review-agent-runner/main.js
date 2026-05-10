/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const app_service_1 = __webpack_require__(5);
const ng_pr_review_agent_1 = __webpack_require__(6);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [ng_pr_review_agent_1.NgPrReviewAgentModule],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const ng_pr_review_agent_1 = __webpack_require__(6);
let AppService = class AppService {
    constructor(pRReviewService) {
        this.pRReviewService = pRReviewService;
    }
    run() {
        return this.pRReviewService.invoke();
    }
};
exports.AppService = AppService;
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ng_pr_review_agent_1.PRReviewService !== "undefined" && ng_pr_review_agent_1.PRReviewService) === "function" ? _a : Object])
], AppService);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(3);
tslib_1.__exportStar(__webpack_require__(7), exports);
tslib_1.__exportStar(__webpack_require__(30), exports);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NgPrReviewAgentModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const pr_review_controller_1 = __webpack_require__(8);
const config_1 = __webpack_require__(20);
const env_config_1 = tslib_1.__importDefault(__webpack_require__(25));
const env_validation_1 = __webpack_require__(27);
const agent_module_1 = __webpack_require__(29);
const pr_review_service_1 = __webpack_require__(30);
let NgPrReviewAgentModule = class NgPrReviewAgentModule {
};
exports.NgPrReviewAgentModule = NgPrReviewAgentModule;
exports.NgPrReviewAgentModule = NgPrReviewAgentModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
                load: [
                    env_config_1.default,
                ],
                validationSchema: env_validation_1.envValidationSchema,
            }),
            agent_module_1.AgentModule
        ],
        controllers: [
            pr_review_controller_1.PRReviewController
        ],
        providers: [
            pr_review_service_1.PRReviewService
        ],
        exports: [pr_review_service_1.PRReviewService],
    })
], NgPrReviewAgentModule);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PRReviewController = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const agent_1 = __webpack_require__(9);
let PRReviewController = class PRReviewController {
    constructor(runtime) {
        this.runtime = runtime;
    }
    todoAgent() {
        return this.runtime.invoke();
    }
};
exports.PRReviewController = PRReviewController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], PRReviewController.prototype, "todoAgent", null);
exports.PRReviewController = PRReviewController = tslib_1.__decorate([
    (0, common_1.Controller)('pr'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof agent_1.AgentRuntimeService !== "undefined" && agent_1.AgentRuntimeService) === "function" ? _a : Object])
], PRReviewController);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AgentRuntimeService = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const graph_1 = __webpack_require__(10);
let AgentRuntimeService = class AgentRuntimeService {
    constructor(chatGraph) {
        this.chatGraph = chatGraph;
        this.graph = this.chatGraph.build();
    }
    async invoke() {
        const result = await this.graph.invoke({
            files: [],
            newComments: [],
            oldComments: []
        });
        return result;
    }
};
exports.AgentRuntimeService = AgentRuntimeService;
exports.AgentRuntimeService = AgentRuntimeService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof graph_1.ChatGraph !== "undefined" && graph_1.ChatGraph) === "function" ? _a : Object])
], AgentRuntimeService);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatGraph = void 0;
const tslib_1 = __webpack_require__(3);
const langgraph_1 = __webpack_require__(11);
const common_1 = __webpack_require__(4);
const state_1 = __webpack_require__(12);
const llm_node_1 = __webpack_require__(14);
const github_node_1 = __webpack_require__(22);
const post_comment_node_1 = __webpack_require__(26);
let ChatGraph = class ChatGraph {
    constructor(llmNode, githubNode, postCommentNode) {
        this.llmNode = llmNode;
        this.githubNode = githubNode;
        this.postCommentNode = postCommentNode;
    }
    build() {
        return new langgraph_1.StateGraph(state_1.AgentState)
            .addNode('PRDetail', this.githubNode.execute)
            .addNode('llmNode', this.llmNode.execute)
            .addNode('postComments', this.postCommentNode.execute)
            .addEdge(langgraph_1.START, 'PRDetail')
            .addEdge('PRDetail', 'llmNode')
            .addEdge('llmNode', 'postComments')
            .addEdge('postComments', langgraph_1.END)
            .compile();
    }
};
exports.ChatGraph = ChatGraph;
exports.ChatGraph = ChatGraph = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof llm_node_1.LLMNode !== "undefined" && llm_node_1.LLMNode) === "function" ? _a : Object, typeof (_b = typeof github_node_1.GitHubNode !== "undefined" && github_node_1.GitHubNode) === "function" ? _b : Object, typeof (_c = typeof post_comment_node_1.PostCommentNode !== "undefined" && post_comment_node_1.PostCommentNode) === "function" ? _c : Object])
], ChatGraph);


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("@langchain/langgraph");

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AgentState = exports.ReviewCommentSchema = void 0;
const langgraph_1 = __webpack_require__(11);
const v4_1 = __webpack_require__(13);
exports.ReviewCommentSchema = v4_1.z.array(v4_1.z.object({
    message: v4_1.z.string(),
    line: v4_1.z.number(),
    severity: v4_1.z.enum(["Critical", "Major", "Minor"]),
    category: v4_1.z.string(),
    suggestion: v4_1.z.string(),
    confidence: v4_1.z.number(),
    path: v4_1.z.string(),
    body: v4_1.z.unknown().default(''),
}));
exports.AgentState = new langgraph_1.StateSchema({
    // messages: MessagesValue, // Prebuilt messages value with built-in reducer
    owner: v4_1.z.string().default(''),
    repo: v4_1.z.string().default(''),
    pullNumber: v4_1.z.number(),
    files: v4_1.z.array(v4_1.z.unknown()).default([]),
    commitId: v4_1.z.string().default(''),
    oldComments: v4_1.z.array(v4_1.z.object({
        id: v4_1.z.number(),
        path: v4_1.z.string(),
        line: v4_1.z.number(),
    })).default([]),
    newComments: exports.ReviewCommentSchema,
});


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("zod/v4");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LLMNode = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const messages_1 = __webpack_require__(15);
const fs_1 = __webpack_require__(16);
const path_1 = __webpack_require__(17);
const llm_service_1 = __webpack_require__(18);
const tool_registry_1 = __webpack_require__(21);
const state_1 = __webpack_require__(12);
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
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof llm_service_1.LLMClient !== "undefined" && llm_service_1.LLMClient) === "function" ? _a : Object, typeof (_b = typeof tool_registry_1.ToolRegistry !== "undefined" && tool_registry_1.ToolRegistry) === "function" ? _b : Object])
], LLMNode);


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("@langchain/core/messages");

/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LLMClient = void 0;
const tslib_1 = __webpack_require__(3);
const openai_1 = __webpack_require__(19);
const common_1 = __webpack_require__(4);
const config_1 = __webpack_require__(20);
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
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], LLMClient);


/***/ }),
/* 19 */
/***/ ((module) => {

module.exports = require("@langchain/openai");

/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ToolRegistry = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
let ToolRegistry = class ToolRegistry {
    getTools() {
        return [];
    }
};
exports.ToolRegistry = ToolRegistry;
exports.ToolRegistry = ToolRegistry = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ToolRegistry);


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GitHubNode = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const github = tslib_1.__importStar(__webpack_require__(23));
const github_client_1 = __webpack_require__(24);
let GitHubNode = class GitHubNode {
    constructor() {
        this.getPullRequestFiles = async (owner, repo, pullNumber) => {
            const { data } = await github_client_1.githubClient.rest.pulls.listFiles({
                owner,
                repo,
                pull_number: pullNumber,
            });
            return data;
        };
        this.getCommitSha = async (owner, repo, pullNumber) => {
            const pr = await github_client_1.githubClient.rest.pulls.get({
                owner,
                repo,
                pull_number: pullNumber,
            });
            return pr.data.head.sha;
        };
        this.listReviewComments = async (owner, repo, pullNumber) => {
            const { data } = await github_client_1.githubClient.rest.pulls.listReviewComments({
                owner,
                repo,
                pull_number: pullNumber,
            });
            return data;
        };
        this.execute = async (state) => {
            const context = github.context;
            const PR = context.payload.pull_request;
            const owner = context?.repo.owner ?? 'shahurkhkhan';
            const repo = context?.repo.repo ?? 's3bangles-manager';
            const pullNumber = PR?.number ?? 21;
            const files = await this.getPullRequestFiles(owner, repo, pullNumber);
            const commitId = await this.getCommitSha(owner, repo, pullNumber);
            const comments = await this.listReviewComments(owner, repo, pullNumber);
            return {
                ...state,
                owner,
                repo,
                pullNumber,
                files: files.filter(file => file.filename !== 'apps/s3-manager/src/styles.scss'),
                commitId,
                oldComments: comments,
            };
        };
    }
};
exports.GitHubNode = GitHubNode;
exports.GitHubNode = GitHubNode = tslib_1.__decorate([
    (0, common_1.Injectable)()
], GitHubNode);


/***/ }),
/* 23 */
/***/ ((module) => {

module.exports = require("@actions/github");

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.githubClient = void 0;
const tslib_1 = __webpack_require__(3);
const github = tslib_1.__importStar(__webpack_require__(23));
const env_config_1 = __webpack_require__(25);
exports.githubClient = github.getOctokit(env_config_1.env.github_token);


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.env = void 0;
exports.env = {
    openai_api_key: process.env['OPENAI_API_KEY'] || (() => {
        throw new Error("OPENAI_API_KEY is not defined");
    })(),
    github_token: process.env['GITHUB_TOKEN'] || (() => {
        throw new Error("GITHUB_TOKEN is not defined");
    })(),
    github_action_path: process.env['GITHUB_ACTION_PATH'] ?? ''
};
exports["default"] = () => ({
    ...exports.env
});


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostCommentNode = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const github_client_1 = __webpack_require__(24);
let PostCommentNode = class PostCommentNode {
    constructor() {
        this.getSeverityMeta = (severity) => {
            switch (severity?.toLowerCase()) {
                case "high":
                    return {
                        emoji: "🚨",
                        label: "High",
                    };
                case "medium":
                    return {
                        emoji: "⚠️",
                        label: "Medium",
                    };
                default:
                    return {
                        emoji: "ℹ️",
                        label: "Low",
                    };
            }
        };
        this.capitalize = (value) => {
            if (!value)
                return "General";
            return value.charAt(0).toUpperCase() + value.slice(1);
        };
        this.formatConfidence = (confidence) => {
            if (typeof confidence !== "number") {
                return "N/A";
            }
            return `${Math.round(confidence * 100)}%`;
        };
        this.sanitizeCodeBlock = (text) => {
            if (!text)
                return "No suggestion provided.";
            return text.replace(/```/g, "");
        };
        this.formatInlineComment = (comment) => {
            // This is a simple formatter that creates a markdown comment body based on the review comment details. You can customize this to include more information or format it differently based on the category or severity.
            const meta = this.getSeverityMeta(comment.severity);
            // For example, you might want to include the category, confidence score, and a formatted suggestion. The exact format can be adjusted based on your needs and the information provided by the AI.  
            const category = this.capitalize(comment.category);
            // Format confidence as a percentage if available
            const confidence = this.formatConfidence(comment.confidence);
            // Sanitize the suggestion to ensure it doesn't break the markdown formatting
            const suggestion = this.sanitizeCodeBlock(comment.suggestion);
            return `
    ## ${meta.emoji} ${category} Finding

**Severity:** ${meta.label}  
**Category:** ${category}  
**Confidence:** ${confidence}

### Why this matters
${comment.message}

### Recommended Fix
\`\`\`ts
${suggestion}
\`\`\``.trim();
        };
        this.postInlineComment = async (params) => {
            //   if (config.dryRun) {
            //     console.log(params);
            //     return;
            //   }
            console.log('owner', {
                owner: params.owner,
                repo: params.repo,
                pull_number: params.pullNumber,
            });
            await github_client_1.githubClient.rest.pulls.createReviewComment({
                owner: params.owner,
                repo: params.repo,
                pull_number: params.pullNumber,
                commit_id: params.commitId,
                path: params.path,
                line: params.line,
                body: params.body,
            });
        };
        this.postSummaryComment = async (params) => {
            await github_client_1.githubClient.rest.issues.createComment({
                owner: params.owner,
                repo: params.repo,
                issue_number: params.pullNumber,
                body: params.body,
            });
        };
        this.buildSummary = (comments) => {
            const high = comments.filter((x) => x.severity === "Critical").length;
            const medium = comments.filter((x) => x.severity === "Major").length;
            const low = comments.filter((x) => x.severity === "Minor").length;
            return `
# 🤖 Review Summary

Reviewed changed files for:

- Bugs
- Security
- Performance
- Maintainability

## Findings

| Severity | Count      |
|----------|------------|
| Critical | ${high}    |
| Major    | ${medium}  |
| Minor    | ${low}     |

Please review inline comments before merge.
    `;
        };
        this.execute = async (state) => {
            const comments = state.newComments;
            if (!comments || !comments.length) {
                return state;
            }
            for (const comment of comments) {
                const body = this.formatInlineComment(comment);
                await this.postInlineComment({
                    owner: state.owner,
                    repo: state.repo,
                    pullNumber: state.pullNumber,
                    commitId: state.commitId,
                    path: comment.path,
                    line: comment.line,
                    body,
                });
            }
            // After posting inline comments, post a summary comment with all findings
            // await this.postSummaryComment({
            //     owner: state.owner,
            //     repo: state.repo,
            //     pullNumber: state.pullNumber,
            //     body: this.buildSummary(comments),
            // });
            return {
                ...state
            };
        };
    }
};
exports.PostCommentNode = PostCommentNode;
exports.PostCommentNode = PostCommentNode = tslib_1.__decorate([
    (0, common_1.Injectable)()
], PostCommentNode);


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.envValidationSchema = void 0;
const tslib_1 = __webpack_require__(3);
const Joi = tslib_1.__importStar(__webpack_require__(28));
exports.envValidationSchema = Joi.object({
    OPENAI_API_KEY: Joi.string().required(),
});


/***/ }),
/* 28 */
/***/ ((module) => {

module.exports = require("joi");

/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AgentModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const llm_node_1 = __webpack_require__(14);
const graph_1 = __webpack_require__(10);
const agent_1 = __webpack_require__(9);
const llm_service_1 = __webpack_require__(18);
const tool_registry_1 = __webpack_require__(21);
const github_node_1 = __webpack_require__(22);
const post_comment_node_1 = __webpack_require__(26);
let AgentModule = class AgentModule {
};
exports.AgentModule = AgentModule;
exports.AgentModule = AgentModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            // Common
            llm_service_1.LLMClient,
            // Nodes
            llm_node_1.LLMNode,
            github_node_1.GitHubNode,
            post_comment_node_1.PostCommentNode,
            // Tools
            tool_registry_1.ToolRegistry,
            // Graph
            graph_1.ChatGraph,
            // Agent
            agent_1.AgentRuntimeService,
        ],
        exports: [agent_1.AgentRuntimeService]
    })
], AgentModule);


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PRReviewService = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const agent_1 = __webpack_require__(9);
let PRReviewService = class PRReviewService {
    constructor(runtime) {
        this.runtime = runtime;
    }
    invoke() {
        return this.runtime.invoke();
    }
};
exports.PRReviewService = PRReviewService;
exports.PRReviewService = PRReviewService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof agent_1.AgentRuntimeService !== "undefined" && agent_1.AgentRuntimeService) === "function" ? _a : Object])
], PRReviewService);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
const app_service_1 = __webpack_require__(5);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const appService = app.get(app_service_1.AppService);
    await appService.run();
    await app.close();
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map