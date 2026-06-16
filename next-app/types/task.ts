export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export type CreateTaskInput = {
  title: string;
};