import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import ToDoForm from '../src/components/ToDoForm';

test('renders ToDoForm component', () => {
  const mockAddTodo = jest.fn();
  const mockHandleAddTodoCharAlert = jest.fn();
  render(
    <ToDoForm addTodo={mockAddTodo} handleAddTodoCharAlert={mockHandleAddTodoCharAlert} />
  );

  const inputElement = screen.getByPlaceholderText(/What do you need to get done today?/i);
  const addButtonElement = screen.getByText(/Add Task/i);

  // Test initial state
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveValue("");
  expect(addButtonElement).toBeInTheDocument();
});

test('calls addTodo when form is submitted with a non-empty value', () => {
  const mockAddTodo = jest.fn();
  const mockHandleAddTodoCharAlert = jest.fn();
  render(
    <ToDoForm addTodo={mockAddTodo} handleAddTodoCharAlert={mockHandleAddTodoCharAlert} />
  );

  const inputElement = screen.getByPlaceholderText(/What do you need to get done today?/i);
  const addButtonElement = screen.getByText(/Add Task/i);

  // Type a value into the input field
  fireEvent.change(inputElement, { target: { value: 'New Task' } });

  // Submit the form
  fireEvent.click(addButtonElement);

  // Expect addTodo to be called with the correct value
  expect(mockAddTodo).toHaveBeenCalledWith('New Task');
});

test('calls handleAddTodoCharAlert when input value changes', () => {
  const mockAddTodo = jest.fn();
  const mockHandleAddTodoCharAlert = jest.fn();
  render(
    <ToDoForm addTodo={mockAddTodo} handleAddTodoCharAlert={mockHandleAddTodoCharAlert} />
  );

  const inputElement = screen.getByPlaceholderText(/What do you need to get done today?/i);

  // Type a value into the input field
  fireEvent.change(inputElement, { target: { value: 'New Task' } });

  // Expect handleAddTodoCharAlert to be called with the correct value
  expect(mockHandleAddTodoCharAlert).toHaveBeenCalledWith('New Task');
});
