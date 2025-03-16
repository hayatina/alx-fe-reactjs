import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

// Test Initial Render
test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

// Test Adding a Todo
test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(button);

    expect(screen.getByText("Write tests")).toBeInTheDocument();
});

// Test Toggling a Todo
test("toggles todo completion", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    fireEvent.click(todo);

    expect(todo).toHaveStyle("text-decoration: line-through");
});

// Test Deleting a Todo
test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0];

    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
