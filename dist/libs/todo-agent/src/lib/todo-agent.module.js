"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoAgentModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const agent_module_1 = require("./agent/agent.module");
const config_1 = require("@nestjs/config");
const env_config_1 = require("./common/env.config");
const env_validation_1 = require("./common/env.validation");
const toto_controller_1 = require("./toto.controller");
const stream_conroller_1 = require("./stream.conroller");
let TodoAgentModule = class TodoAgentModule {
};
exports.TodoAgentModule = TodoAgentModule;
exports.TodoAgentModule = TodoAgentModule = tslib_1.__decorate([
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
            mongoose_1.MongooseModule.forRoot((0, env_config_1.default)().mongo_db_url),
            agent_module_1.AgentModule
        ],
        controllers: [
            toto_controller_1.TodoController,
            stream_conroller_1.StreamController
        ],
        providers: [],
    })
], TodoAgentModule);
//# sourceMappingURL=todo-agent.module.js.map