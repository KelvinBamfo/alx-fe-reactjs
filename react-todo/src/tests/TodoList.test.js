import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial demo todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Buy groceries")).toBeInTheDocument();
    expect(screen.getByText("Walk the dog")).toBeInTheDocument();
    expect(screen.getByText("Read a chapter")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByLabelText("new-todo-input");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New test todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New test todo")).toBeInTheDocument();
  });

  test("toggles a todo between completed and not completed", () => {
    render(<TodoList />);
    const todoText = screen.getByText("Buy groceries");
    const li = todoText.closest("li");
    expect(li).toBeInTheDocument();

    // Initially not completed => no line-through on the li
    expect(li).toHaveStyle("text-decoration: none");

    // Click the list item to toggle
    fireEvent.click(li);
    expect(li).toHaveStyle("text-decoration: line-through");

    // Click again to toggle back
    fireEvent.click(li);
    expect(li).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo item", () => {
    render(<TodoList />);
    const todo = screen.getByText("Read a chapter");
    const li = todo.closest("li");
    expect(li).toBeInTheDocument();

    const idAttr = li.getAttribute("data-testid"); // e.g., todo-item-3
    const id = idAttr ? idAttr.replace("todo-item-", "") : null;
    const deleteButton = screen.getByLabelText(`delete-${id}`);

    fireEvent.click(deleteButton);
    expect(screen.queryByText("Read a chapter")).not.toBeInTheDocument();
  });
});
