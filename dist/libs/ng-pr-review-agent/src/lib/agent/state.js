"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentState = exports.ReviewCommentSchema = void 0;
const langgraph_1 = require("@langchain/langgraph");
const v4_1 = require("zod/v4");
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
//# sourceMappingURL=state.js.map