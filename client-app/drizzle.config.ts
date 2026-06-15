// drizzle.config.ts
import { loadEnv } from "./lib/env";
import { defineConfig } from "drizzle-kit";

loadEnv();

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
