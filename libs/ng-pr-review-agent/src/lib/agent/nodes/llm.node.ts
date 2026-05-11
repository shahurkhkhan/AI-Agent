import { Injectable } from '@nestjs/common';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';
import { readFileSync } from 'fs';
import { join } from 'path';

import { LLMClient } from '../../common/llm.service';
import { ToolRegistry } from '../tools/tool.registry';
import { FILE, ReviewComment, ReviewCommentSchema, State } from '../state';

@Injectable()
export class LLMNode {
  private client;

  constructor(
    private llMClient: LLMClient,
    private toolRegistry: ToolRegistry
  ) {
    this.client = this.llMClient
      .getClient(this.toolRegistry.getTools())
  }

  private loadPrompt(file: string): string {
     const fullPath = join(
      __dirname,
      '../../libs/ng-pr-review-agent/src/lib/agent/prompts',
      file
    );

    console.log('fullPath:', fullPath);

    return readFileSync(fullPath, 'utf8');
  }

  private systemPrompt = (): string => {
    const prompts = [
      'review.md',
      'output.md',
    ];

    return prompts
      .map((prompt) => this.loadPrompt(prompt))
      .join('\n');
  }

  execute = async (state: State) => {
    const systemPrompt = this.systemPrompt();

    let comments: ReviewComment[] = [];

    if (!state.files?.length) {
      return state;
    }

    for await (const file of state.files as FILE[]) {
      if (!file.patch) continue;

      const oldCommentOfTheFile = state.oldComments.filter((comment) => comment.path === file.filename);

      const existingComments = oldCommentOfTheFile.map((comment) => ({
        path: comment.path,
        line: comment.line
      })) ?? [];

      const existingLines = new Set(
        oldCommentOfTheFile.map((comment) => `${comment.path}:${comment.line}`)
      );

      const prompt = `
        You are reviewing a GitHub pull request.

        File: ${file.filename}

        Changed code:
        ${file.patch}

        Existing comments already posted on this file and at line number:
        ${JSON.stringify(existingComments, null, 2)}

        STRICT RULES:
          1. Review ONLY changed lines
          2. Only skip findings if the SAME line already has a comment
          3. Ignore comments on other lines
          4. If a line has no existing comment, review it normally
          5. Return all valid new findings
          6. Return [] only if every issue is already commented
        `;

      const response = await this.client.invoke([
        new SystemMessage(systemPrompt),
        new HumanMessage(prompt),
      ]);

      const llmComments = ReviewCommentSchema.parse(JSON.parse(response.content as string)) as ReviewComment[];

      const filteredComments = llmComments.filter(
        (comment) => !existingLines.has(`${comment.path}:${comment.line}`)
      );

      comments = filteredComments.map((comment) => ({
        ...comment, path: file.filename,
      })).concat(comments);
    }

    return {
      ...state,
      newComments: comments,
    };
  }
}