// src/server/repositories/taskRepository.ts
export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

let tasks: Task[] = [
  { id: 1, title: "最初のタスク", completed: false },
];

let nextId = 2;

export const taskRepository = {
  list() {
    return tasks;
  },

  get(id: number) {
    return tasks.find((task) => task.id === id) ?? null;
  },

  create(title: string) {
    const task: Task = {
      id: nextId++,
      title,
      completed: false,
    };

    tasks.push(task);
    return task;
  },

  delete(id: number) {
    const beforeLength = tasks.length;
    tasks = tasks.filter((task) => task.id !== id);

    return {
      success: tasks.length < beforeLength,
    };
  },
};