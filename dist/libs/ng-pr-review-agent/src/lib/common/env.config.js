"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
exports.env = {
    openai_api_key: process.env['OPENAI_API_KEY'] || (() => {
        throw new Error("OPENAI_API_KEY is not defined");
    })(),
    github_token: process.env['GITHUB_TOKEN'] || (() => {
        throw new Error("GITHUB_TOKEN is not defined");
    })(),
    github_action_path: process.env['GITHUB_ACTION_PATH'] ?? ''
};
exports.default = () => ({
    ...exports.env
});
//# sourceMappingURL=env.config.js.map