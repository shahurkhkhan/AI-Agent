import { Injectable } from '@nestjs/common';
import { State } from '../state';
import * as github from '@actions/github';
import { githubClient } from '../../common/github-client';

@Injectable()
export class GitHubNode {
    getPullRequestFiles = async (
        owner: string,
        repo: string,
        pullNumber: number
    ): Promise<any[]> => {
        const { data } = await githubClient.rest.pulls.listFiles({
            owner,
            repo,
            pull_number: pullNumber,
        });

        return data;
    };

    getCommitSha = async (
        owner: string,
        repo: string,
        pullNumber: number
    ): Promise<string> => {
        const pr = await githubClient.rest.pulls.get({
            owner,
            repo,
            pull_number: pullNumber,
        });

        return pr.data.head.sha;
    };

    listReviewComments = async (
        owner: string,
        repo: string,
        pullNumber: number
    ): Promise<any[]> => {
        const { data } = await githubClient.rest.pulls.listReviewComments({
            owner,
            repo,
            pull_number: pullNumber,
        });

        return data;
    };

    execute = async (state: State) => {
        const context = github.context;
        const PR = context.payload.pull_request;

        const owner = context?.repo.owner;
        const repo = context?.repo.repo;
        const pullNumber = PR?.number as number;

        const files = await this.getPullRequestFiles(
            owner,
            repo,
            pullNumber
        );

        const commitId = await this.getCommitSha(
            owner,
            repo,
            pullNumber
        );

        const comments = await this.listReviewComments(
            owner,
            repo,
            pullNumber
        );

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