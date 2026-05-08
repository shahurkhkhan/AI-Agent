"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NgPrReviewAgentModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const pr_review_controller_1 = require("./pr-review.controller");
const config_1 = require("@nestjs/config");
const env_config_1 = require("./common/env.config");
const env_validation_1 = require("./common/env.validation");
const agent_module_1 = require("./agent/agent.module");
const pr_review_service_1 = require("./pr-review.service");
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
//# sourceMappingURL=ng-pr-review-agent.module.js.map