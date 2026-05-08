import * as github from '@actions/github';
import { env } from "./env.config";

export const githubClient: ReturnType<typeof github.getOctokit> =
  github.getOctokit(env.github_token);