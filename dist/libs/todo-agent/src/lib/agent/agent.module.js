"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const redis_provider_1 = require("./memory/redis.provider");
const radis_service_1 = require("./memory/radis.service");
const llm_node_1 = require("./nodes/llm.node");
const tool_node_1 = require("./nodes/tool.node");
const memory_node_1 = require("./nodes/memory.node");
const create_todo_tool_1 = require("./tools/create-todo.tool");
const list_todo_tool_1 = require("./tools/list-todo.tool");
const search_todo_tool_1 = require("./tools/search-todo.tool");
const delete_todo_tool_1 = require("./tools/delete-todo.tool");
const graph_1 = require("./graph");
const agent_1 = require("./agent");
const llm_service_1 = require("../common/llm.service");
const tool_registry_1 = require("./tools/tool.registry");
const todo_repository_1 = require("../database/repositories/todo.repository");
const todo_schema_1 = require("../database/schemas/todo.schema");
const mongoose_1 = require("@nestjs/mongoose");
const update_todo_tool_1 = require("./tools/update-todo.tool");
let AgentModule = class AgentModule {
};
exports.AgentModule = AgentModule;
exports.AgentModule = AgentModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: todo_schema_1.Todo.name, schema: todo_schema_1.TodoSchema }]),
        ],
        providers: [
            // Common
            redis_provider_1.redisProvider,
            radis_service_1.RadisMemoryService,
            llm_service_1.LLMClient,
            // Nodes
            llm_node_1.LLMNode,
            tool_node_1.ToolNode,
            memory_node_1.MemoryNode,
            // Tools
            create_todo_tool_1.CreateTodoTool,
            list_todo_tool_1.ListTodoTool,
            search_todo_tool_1.SearchTodoTool,
            delete_todo_tool_1.DeleteTodoTool,
            update_todo_tool_1.UpdateTodoTool,
            tool_registry_1.ToolRegistry,
            // Graph
            graph_1.ChatGraph,
            // Agent
            agent_1.AgentRuntimeService,
            // Database
            todo_repository_1.TodoRepository
        ],
        exports: [agent_1.AgentRuntimeService]
    })
], AgentModule);
//# sourceMappingURL=agent.module.js.map