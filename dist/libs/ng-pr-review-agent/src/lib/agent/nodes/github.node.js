"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubNode = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const github = require("@actions/github");
const github_client_1 = require("../../common/github-client");
let GitHubNode = class GitHubNode {
    constructor() {
        this.getPullRequestFiles = async (owner, repo, pullNumber) => {
            const { data } = await github_client_1.githubClient.rest.pulls.listFiles({
                owner,
                repo,
                pull_number: pullNumber,
            });
            return data;
        };
        this.getCommitSha = async (owner, repo, pullNumber) => {
            const pr = await github_client_1.githubClient.rest.pulls.get({
                owner,
                repo,
                pull_number: pullNumber,
            });
            return pr.data.head.sha;
        };
        this.listReviewComments = async (owner, repo, pullNumber) => {
            const { data } = await github_client_1.githubClient.rest.pulls.listReviewComments({
                owner,
                repo,
                pull_number: pullNumber,
            });
            return data;
        };
        this.execute = async (state) => {
            const context = github.context;
            const PR = context.payload.pull_request;
            const owner = context?.repo.owner ?? 'shahurkhkhan';
            const repo = context?.repo.repo ?? 's3bangles-manager';
            const pullNumber = PR?.number ?? 21;
            const files = await this.getPullRequestFiles(owner, repo, pullNumber);
            const commitId = await this.getCommitSha(owner, repo, pullNumber);
            const comments = await this.listReviewComments(owner, repo, pullNumber);
            return {
                ...state,
                owner,
                repo,
                pullNumber,
                files: files.filter(file => file.filename !== 'apps/s3-manager/src/styles.scss'),
                commitId,
                oldComments: comments,
            };
        };
    }
};
exports.GitHubNode = GitHubNode;
exports.GitHubNode = GitHubNode = tslib_1.__decorate([
    (0, common_1.Injectable)()
], GitHubNode);
//# sourceMappingURL=github.node.js.map