"use client";

import { useRouter } from "next/navigation";
import { Todo as todoType } from "./type";

async function update(
  id: todoType["id"],
  isDone: todoType["isDone"],
  refresh: any
) {
  await fetch(`/api/todos?id=${id}&isDone=${isDone}`, {
    method: "PUT",
    body: JSON.stringify({ id, isDone }),
  });

  refresh();
}

async function deleteTodo(id: todoType["id"], refresh: any) {
  await fetch(`/api/todos?id=${id}`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });

  refresh();
}

export const TodoComponent = (getTodoData: todoType) => {
  const router = useRouter();
  //  console.log(todo.name + "   " + todo.isDone);
  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) =>
          update(getTodoData.id, e.target.checked, router.refresh)
        }
        checked={getTodoData.isDone}
      />
      <span>{getTodoData.name}</span>
      <button onClick={() => deleteTodo(getTodoData.id, router.refresh)}>
        Delete
      </button>
    </div>
  );
};
