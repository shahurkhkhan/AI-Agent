"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubClient = void 0;
const github = require("@actions/github");
const env_config_1 = require("./env.config");
exports.githubClient = github.getOctokit(env_config_1.env.github_token);
//# sourceMappingURL=github-client.js.map