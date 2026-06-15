// src/server/routers/task.ts
import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { taskRepository } from "@server//repositories/taskRepository";

export const taskRouter = router({
  list: publicProcedure.query(() => {
    return taskRepository.list();
  }),

  get: publicProcedure
    .input(
      z.object({
        id: z.number().int().positive(),
      })
    )
    .query(({ input }) => {
      return taskRepository.get(input.id);
    }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
      })
    )
    .mutation(({ input }) => {
      return taskRepository.create(input.title);
    }),

  delete: publicProcedure
    .input(
      z.object({
        id: z.number().int().positive(),
      })
    )
    .mutation(({ input }) => {
      return taskRepository.delete(input.id);
    }),
});