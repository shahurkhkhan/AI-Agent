"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
exports.env = {
    openai_api_key: process.env['OPENAI_API_KEY'] ?? '',
    github_token: process.env['GITHUB_TOKEN'] ?? '',
    github_action_path: process.env['GITHUB_ACTION_PATH'] ?? ''
};
exports.default = () => ({
    ...exports.env
});
//# sourceMappingURL=env.config.js.map