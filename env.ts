import { EnvType, load } from 'ts-dotenv';

export type Env = EnvType<typeof schema>;

export const schema = {
    APP_PORT: {
        type: Number,
        default: 8080,
    },
    HTTP_ERRORCODE: {
        type: Number,
        default: 500,
    },
    NODE_ENV: {
        type: String,
        default: 'dev',
    }
};

export let env: Env;

export function loadEnv(): void {
    env = load(schema);
}