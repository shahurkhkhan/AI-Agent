"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const agent_1 = require("./agent/agent");
const rxjs_1 = require("rxjs");
let TodoController = class TodoController {
    constructor(runtime) {
        this.runtime = runtime;
    }
    todoAgent(sessionId, body) {
        return this.runtime.invoke({
            message: body.query,
            sessionId: sessionId
        });
    }
    async get(sessionId) {
        return this.runtime.memory(sessionId);
    }
    stream() {
        return new rxjs_1.Observable((subscriber) => {
            const messages = [
                'Analyzing request...',
                'Checking memory...',
                'Planning response...',
                'Generating final answer...',
                'final response',
            ];
            for (let index = 0; index < messages.length; index++) {
                setTimeout(() => {
                    const isLast = index + 1 === messages.length;
                    subscriber.next({
                        data: {
                            status: isLast ? 'Completed' : 'InProgress',
                            message: messages[index],
                        },
                    });
                    if (isLast) {
                        subscriber.complete();
                    }
                }, 1000 * index);
            }
        });
    }
};
exports.TodoController = TodoController;
tslib_1.__decorate([
    (0, common_1.Post)(':sessionId'),
    tslib_1.__param(0, (0, common_1.Param)('sessionId')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], TodoController.prototype, "todoAgent", null);
tslib_1.__decorate([
    (0, common_1.Get)(':sessionId'),
    tslib_1.__param(0, (0, common_1.Param)('sessionId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoController.prototype, "get", null);
tslib_1.__decorate([
    (0, common_1.Sse)('stream'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], TodoController.prototype, "stream", null);
exports.TodoController = TodoController = tslib_1.__decorate([
    (0, common_1.Controller)('todo'),
    tslib_1.__metadata("design:paramtypes", [agent_1.AgentRuntimeService])
], TodoController);
//# sourceMappingURL=toto.controller.js.map