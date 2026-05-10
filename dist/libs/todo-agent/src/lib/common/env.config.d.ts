export type configType = {
    mongo_db_url: string;
    openai_api_key: string;
    redis_host: string;
    redis_port: string;
};
export declare const env: configType;
declare const _default: () => {
    mongo_db_url: string;
    openai_api_key: string;
    redis_host: string;
    redis_port: string;
};
export default _default;
