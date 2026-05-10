"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRReviewService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const agent_1 = require("./agent/agent");
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
    tslib_1.__metadata("design:paramtypes", [agent_1.AgentRuntimeService])
], PRReviewService);
//# sourceMappingURL=pr-review.service.js.map