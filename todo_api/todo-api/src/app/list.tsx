import { v4 as uuidv4 } from "uuid";
import { Todo, Todo as todoType } from "./type";
export let todos = [
  {
    id: uuidv4(),
    name: "Learn Next.js",
    isDone: false,
  },
  {
    id: uuidv4(),
    name: "Learn HTML",
    isDone: false,
  },
  {
    id: uuidv4(),
    name: "Start new sideproject",
    isDone: false,
  },
];

export async function addTodo(name: todoType["name"]) {
  let newTodos = {
    id: uuidv4(),
    name,
    isDone: false,
  };
  todos.push(newTodos);
}

export async function deleteTodo(id: todoType["id"]) {
  todos = todos.filter((obj) => {
    return obj.id !== id;
  });
}

export async function updateTodo(
  id: todoType["id"],
  isDone: todoType["isDone"]
) {
  // only isDone can be updated atm
  let newTodos: todoType[] = [];
  todos.map((obj) => {
    let newTodo = { ...obj };
    if (obj.id == id) {
      newTodo = {
        id,
        name: obj.name,
        isDone,
      };
    }
    newTodos.push(newTodo);
  });
  todos = newTodos;
}
