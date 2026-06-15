// src/server/root.ts
import { router } from "./trpc";
import { taskRouter } from "@server/routers/task";

export const appRouter = router({
  task: taskRouter,
});

export type AppRouter = typeof appRouter;