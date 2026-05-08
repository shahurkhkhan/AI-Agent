"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRReviewController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const agent_1 = require("./agent/agent");
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
    tslib_1.__metadata("design:paramtypes", [agent_1.AgentRuntimeService])
], PRReviewController);
//# sourceMappingURL=pr-review.controller.js.map