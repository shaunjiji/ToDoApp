import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import ToDoContainer from "../src/components/ToDoContainer";

describe("ToDoContainer", () => {
  test("renders ToDoContainer with initial state", () => {
    render(<ToDoContainer />);
    // Check if the header is rendered
    expect(screen.getByText("My To-Do List")).toBeInTheDocument();

    // Check if the form input and submit button are rendered
    expect(screen.getByPlaceholderText("What do you need to get done today?")).toBeInTheDocument();
    expect(screen.getByText("Add Task")).toBeInTheDocument();

    // Check if the message for empty tasks is rendered
    expect(screen.getByText("No tasks have been added yet!")).toBeInTheDocument();
  });

  test("adds a new task", () => {
    render(<ToDoContainer />);
    // Enter a new task in the input field
    const inputElement = screen.getByPlaceholderText("What do you need to get done today?");
    fireEvent.change(inputElement, { target: { value: "New task" } });

    // Click the "Add Task" button to add the task
    const addButtonElement = screen.getByText("Add Task");
    fireEvent.click(addButtonElement);

    // Check if the new task is rendered
    expect(screen.getByText("New task")).toBeInTheDocument();
  });

});
