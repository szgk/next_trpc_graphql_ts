import { tasks } from "@/server/mock/task";
import { builder } from "@/graphql/builder";
import { TaskRef } from "@/graphql/types/task";

builder.queryField("tasks", (t) =>
  t.field({
    type: [TaskRef],

    resolve: async () => {
      return tasks;
    },
  })
);