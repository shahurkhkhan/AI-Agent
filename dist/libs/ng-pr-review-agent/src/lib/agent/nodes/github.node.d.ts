import { State } from '../state';
export declare class GitHubNode {
    getPullRequestFiles: (owner: string, repo: string, pullNumber: number) => Promise<any[]>;
    getCommitSha: (owner: string, repo: string, pullNumber: number) => Promise<string>;
    listReviewComments: (owner: string, repo: string, pullNumber: number) => Promise<any[]>;
    execute: (state: State) => Promise<{
        owner: string;
        repo: string;
        pullNumber: number;
        files: any[];
        commitId: string;
        oldComments: any[];
        newComments: {
            message: string;
            line: number;
            severity: "Critical" | "Major" | "Minor";
            category: string;
            suggestion: string;
            confidence: number;
            path: string;
            body: unknown;
        }[];
    }>;
}
