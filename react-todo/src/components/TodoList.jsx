import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

const initialTodos = [
  { id: 1, text: "Buy groceries", completed: false },
  { id: 2, text: "Walk the dog", completed: true },
  { id: 3, text: "Read a chapter", completed: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodo = { id: Date.now(), text: text.trim(), completed: false };
    setTodos((s) => [newTodo, ...s]);
  };

  const toggleTodo = (id) =>
    setTodos((s) => s.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  const deleteTodo = (id) => setTodos((s) => s.filter(t => t.id !== id));

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      <ul data-testid="todo-list">
        {todos.map(todo => (
          <li
            key={todo.id}
            data-testid={`todo-item-${todo.id}`}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
          >
            <span>{todo.text}</span>
            <button
              aria-label={`delete-${todo.id}`}
              onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
