export type configType = {
    mongo_db_url: string;
    openai_api_key: string;
    redis_host: string;
    redis_port: string
}

export const env: configType = {
  mongo_db_url: process.env['MONGO_URI'] || (() => {
    throw new Error("MONGO_URI is not defined");
  })(),
  openai_api_key: process.env['OPENAI_API_KEY'] || (() => {
    throw new Error("OPENAI_API_KEY is not defined");
  })(),
  redis_host: process.env['REDIS_HOST'] || (() => {
    throw new Error("REDIS_HOST is not defined");
  })(),
  redis_port: process.env['REDIS_PORT'] || (() => {
    throw new Error("REDIS_PORT is not defined");
  })(),
};

export default () => ({
 ...env
});
