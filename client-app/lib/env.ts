import dotenv from "dotenv";
import path from "path";

let cache: NodeJS.ProcessEnv | null = null;

export function loadEnv(): NodeJS.ProcessEnv {
  if (cache) return cache;
  const env = process.env.APP_ENV ?? "dev";
  dotenv.config({ path: path.resolve(__dirname, `../../env/.env.${env}`) });
  cache = process.env;
  return cache;
}
