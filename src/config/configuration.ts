/* eslint-disable prettier/prettier */
export type configType = {
    mongo_db_url: string;
    openai_api_key: string
}

export const config: configType = {
  mongo_db_url: process.env.MONGO_URI || (() => {
    throw new Error("MONGO_URI is not defined");
  })(),
  openai_api_key: process.env.OPENAI_API_KEY || (() => {
    throw new Error("REDIS_PORT is not defined");
  })(),
};

export default config;