import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial demo todos", () => {
    render(<TodoList />);
    // initialTodos contains "Buy groceries", "Walk the dog", "Read a chapter"
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
    // Find the todo item "Buy groceries"
    const todoText = screen.getByText("Buy groceries");
    const li = todoText.closest("li");
    expect(li).toBeInTheDocument();

    // Initially not completed => no line-through on the li
    expect(li).toHaveStyle("text-decoration: none");

    // Click the list item to toggle
    fireEvent.click(li);

    // Now should be line-through on the li
    expect(li).toHaveStyle("text-decoration: line-through");

    // Click again to toggle back
    fireEvent.click(li);
    expect(li).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo item", () => {
    render(<TodoList />);
    // Find the "Read a chapter" item
    const todo = screen.getByText("Read a chapter");
    const li = todo.closest("li");
    expect(li).toBeInTheDocument();

    const idAttr = li.getAttribute("data-testid");
