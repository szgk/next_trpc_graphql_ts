import { tasks } from "@server/mock/task";
import { builder } from "@/graphql/builder";
import { TaskInputRef, TaskRef } from "@/graphql/types/task";

builder.mutationField("createTask", (t) =>
  t.field({
    type: TaskRef,

    args: {
      input: t.arg({
        type: TaskInputRef,
        required: true,
      }),
    },

    resolve: async (_, args) => {
      const newId = tasks.length + 1;
      const newTask = {
        id: newId,
        title: args.input.title,
        completed: false,
      };

      tasks.push(newTask);

      return newTask;
    },
  }),
);
