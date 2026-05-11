"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentState = void 0;
const langgraph_1 = require("@langchain/langgraph");
const v4_1 = require("zod/v4");
exports.AgentState = new langgraph_1.StateSchema({
    messages: langgraph_1.MessagesValue, // Prebuilt messages value with built-in reducer
    memory: v4_1.z.array(v4_1.z.object()).default([]),
    sessionId: v4_1.z.string(),
    error: v4_1.z.string(),
});
//# sourceMappingURL=state.js.map