"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let StreamController = class StreamController {
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
exports.StreamController = StreamController;
tslib_1.__decorate([
    (0, common_1.Sse)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], StreamController.prototype, "stream", null);
exports.StreamController = StreamController = tslib_1.__decorate([
    (0, common_1.Controller)('stream')
], StreamController);
//# sourceMappingURL=stream.conroller.js.map