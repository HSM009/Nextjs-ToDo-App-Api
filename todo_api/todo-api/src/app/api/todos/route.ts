import { NextRequest, NextResponse } from "next/server";
import { Todo } from "@/app/type";
import { todos, updateTodo, deleteTodo, addTodo } from "@/app/list";

export async function GET() {
  return NextResponse.json(todos);
}

export async function PUT(request: NextRequest) {
  const updateTodoNew: Todo = await request.json();
  if (!updateTodoNew.id || typeof updateTodoNew.isDone !== "boolean")
    return NextResponse.json({ message: "Missing required data" });
  updateTodo(updateTodoNew.id, updateTodoNew.isDone);
  return NextResponse.json({
    message: "Put msg of id " + updateTodoNew.id + " " + updateTodoNew.isDone,
  });
}

export async function DELETE(request: NextRequest) {
  const deleteTodoID: Todo = await request.json();
  deleteTodo(deleteTodoID.id);
  return NextResponse.json({ message: "Delete msg of " + deleteTodoID.id });
}

export async function POST(request: NextRequest) {
  const newTodoName: Todo = await request.json();
  if (!newTodoName.name)
    return NextResponse.json({ message: "Missing required data name" });
  addTodo(newTodoName.name);
  return NextResponse.json({ message: "POST msg of " + newTodoName.name });
}
