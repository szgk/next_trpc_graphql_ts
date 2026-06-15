"use client";
import { useState } from "react";
import { trpc } from "@app/utils/trpc";

export default function Home() {
  const [title, setTitle] = useState("");
  const utils = trpc.useUtils();
  const tasksQuery = trpc.task.list.useQuery();
  const createTask = trpc.task.create.useMutation({
    onSuccess: () => {
      setTitle("");
      utils.task.list.invalidate();
    },
  });
  const deleteTask = trpc.task.delete.useMutation({
    onSuccess: () => {
      utils.task.list.invalidate();
    },
  });

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <ul>
        {tasksQuery.data?.map((task) => (
          <li key={task.id}>
            {task.title}

            <button
              onClick={() => {
                deleteTask.mutate({
                  id: task.id,
                });
              }}
            >
              削除
            </button>
          </li>
        ))}
      </ul>
      </main>
    </div>
  );
}
