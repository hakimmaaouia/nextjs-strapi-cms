import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    API_SECRET: z.string().min(1),
  },
  client: {},
  shared: {
    API_URL: z.string().url(),
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
  },
  runtimeEnv: {
    API_URL: process.env.API_URL,
    API_SECRET: process.env.API_SECRET,
    NODE_ENV: process.env.NODE_ENV,
  },
});
