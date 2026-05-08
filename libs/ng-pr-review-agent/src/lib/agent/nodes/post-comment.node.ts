import { Injectable } from '@nestjs/common';
import { ReviewComment, State } from '../state';
import { githubClient } from '../../common/github-client';

@Injectable()
export class PostCommentNode {

    getSeverityMeta = (severity: string) => {
        switch (severity?.toLowerCase()) {
            case "high":
                return {
                    emoji: "🚨",
                    label: "High",
                };
            case "medium":
                return {
                    emoji: "⚠️",
                    label: "Medium",
                };
            default:
                return {
                    emoji: "ℹ️",
                    label: "Low",
                };
        }
    }

    capitalize = (value: string) => {
        if (!value) return "General";
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    formatConfidence = (confidence?: number) => {
        if (typeof confidence !== "number") {
            return "N/A";
        }
        return `${Math.round(confidence * 100)}%`;
    }

    sanitizeCodeBlock = (text: string) => {
        if (!text) return "No suggestion provided.";

        return text.replace(/```/g, "");
    }

    formatInlineComment = (comment: ReviewComment): string => {
        // This is a simple formatter that creates a markdown comment body based on the review comment details. You can customize this to include more information or format it differently based on the category or severity.
        const meta = this.getSeverityMeta(comment.severity);
        // For example, you might want to include the category, confidence score, and a formatted suggestion. The exact format can be adjusted based on your needs and the information provided by the AI.  
        const category = this.capitalize(comment.category);
        // Format confidence as a percentage if available
        const confidence = this.formatConfidence(comment.confidence);
        // Sanitize the suggestion to ensure it doesn't break the markdown formatting
        const suggestion = this.sanitizeCodeBlock(comment.suggestion);

        return `
    ## ${meta.emoji} ${category} Finding

**Severity:** ${meta.label}  
**Category:** ${category}  
**Confidence:** ${confidence}

### Why this matters
${comment.message}

### Recommended Fix
\`\`\`ts
${suggestion}
\`\`\``.trim();
    }

    postInlineComment = async (params: {
        owner: string;
        repo: string;
        pullNumber: number;
        commitId: string;
        path: string;
        line: number;
        body: string;
    }) => {
        //   if (config.dryRun) {
        //     console.log(params);
        //     return;
        //   }
        console.log('owner', {
            owner: params.owner,
            repo: params.repo,
            pull_number: params.pullNumber,
        })
        await githubClient.rest.pulls.createReviewComment({
            owner: params.owner,
            repo: params.repo,
            pull_number: params.pullNumber,
            commit_id: params.commitId,
            path: params.path,
            line: params.line,
            body: params.body,
        });
    }

    postSummaryComment = async (params: {
        owner: string;
        repo: string;
        pullNumber: number;
        body: string;
    }) => {

        await githubClient.rest.issues.createComment({
            owner: params.owner,
            repo: params.repo,
            issue_number: params.pullNumber,
            body: params.body,
        });
    }


    buildSummary = (comments: ReviewComment[]) => {
        const high = comments.filter((x) => x.severity === "Critical").length;
        const medium = comments.filter((x) => x.severity === "Major").length;
        const low = comments.filter((x) => x.severity === "Minor").length;

        return `
# 🤖 Review Summary

Reviewed changed files for:

- Bugs
- Security
- Performance
- Maintainability

## Findings

| Severity | Count      |
|----------|------------|
| Critical | ${high}    |
| Major    | ${medium}  |
| Minor    | ${low}     |

Please review inline comments before merge.
    `;
    }

    execute = async (state: State) => {
        const comments = state.newComments;

        if (!comments || !comments.length) {
            return state;
        }

        for (const comment of comments) {
            const body = this.formatInlineComment(comment);
            await this.postInlineComment({
                owner: state.owner,
                repo: state.repo,
                pullNumber: state.pullNumber,
                commitId: state.commitId,
                path: comment.path,
                line: comment.line,
                body,
            });
        }

        // After posting inline comments, post a summary comment with all findings
        // await this.postSummaryComment({
        //     owner: state.owner,
        //     repo: state.repo,
        //     pullNumber: state.pullNumber,
        //     body: this.buildSummary(comments),
        // });

        return {
            ...state
        };
    }
}