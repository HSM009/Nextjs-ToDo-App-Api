import { TodoComponent } from "./todo";
import { Todo as todoType } from "./type";

async function getTodos() {
  const todos = await fetch(`http://localhost:3001/api/todos`, {
    cache: "no-cache",
  });
  //  if (!todos.ok) throw new Error("Failed to fetch data");
  return todos.json();
}

export default async function TodoList() {
  const todos = await getTodos();

  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((t: todoType) => {
          return (
            <li key={t.id} style={{ padding: "5px 0" }}>
              <TodoComponent {...t} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
