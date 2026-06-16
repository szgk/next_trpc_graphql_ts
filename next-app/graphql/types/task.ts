// src/graphql/types/task.ts
import { CreateTaskInput, Task } from "@/types/task";
import { builder } from "@/graphql/builder";

export const TaskRef = builder.objectRef<Task>("Task").implement({
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    completed: t.exposeBoolean("completed"),
  }),
});

export const TaskInputRef = builder.inputRef<CreateTaskInput>("TaskInput").implement({
  fields: (t) => ({
    title: t.string({ required: true }),
  }),
});
