import type { NextConfig } from "next";
import { loadEnv } from "./lib/env";

loadEnv();

const nextConfig: NextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
};

export default nextConfig;
