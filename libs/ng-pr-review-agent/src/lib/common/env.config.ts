export type configType = {
    openai_api_key: string;
    github_token: string,
    github_action_path: string
}

export const env: configType = {
  openai_api_key: process.env['OPENAI_API_KEY'] || (() => {
    throw new Error("OPENAI_API_KEY is not defined");
  })(),
  github_token: process.env['GITHUB_TOKEN'] || (() => {
    throw new Error("GITHUB_TOKEN is not defined");
  })(),
   github_action_path: process.env['GITHUB_ACTION_PATH'] ?? ''
  
};

export default () => ({
 ...env
});
