import { v4 as uuidv4 } from "uuid";

export type Todo = {
  id: string;
  name: string;
  isDone: boolean;
};
