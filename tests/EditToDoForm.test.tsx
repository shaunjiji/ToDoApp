import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import EditToDoForm from '../src/components/EditToDoForm';

test('renders EditToDoForm component with initial value', () => {
  const mockUpdateTodo = jest.fn();
  const mockTodo = { id: '1', task: 'Task 1', completed: false, isEditing: false };
  render(<EditToDoForm updateTodo={mockUpdateTodo} todo={mockTodo} />);

  const inputElement = screen.getByPlaceholderText(/Update Task/i);
  const updateButtonElement = screen.getByText(/Update Task/i);

  // Test initial state
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveValue('Task 1');
  expect(updateButtonElement).toBeInTheDocument();
});

test('calls updateTodo when form is submitted with a non-empty value', () => {
  const mockUpdateTodo = jest.fn();
  const mockTodo = { id: '1', task: 'Task 1', completed: false, isEditing: false };
  render(<EditToDoForm updateTodo={mockUpdateTodo} todo={mockTodo} />);

  const inputElement = screen.getByPlaceholderText(/Update Task/i);
  const updateButtonElement = screen.getByText(/Update Task/i);

  // Type a value into the input field
  fireEvent.change(inputElement, { target: { value: 'Updated Task' } });

  // Submit the form
  fireEvent.click(updateButtonElement);

  // Expect updateTodo to be called with the correct value and ID
  expect(mockUpdateTodo).toHaveBeenCalledWith('Updated Task', '1');
});

test('input value changes when handleChange is called', () => {
  const mockUpdateTodo = jest.fn();
  const mockTodo = { id: '1', task: 'Task 1', completed: false, isEditing: false };
  render(<EditToDoForm updateTodo={mockUpdateTodo} todo={mockTodo} />);

  const inputElement = screen.getByPlaceholderText(/Update Task/i);

  // Type a value into the input field
  fireEvent.change(inputElement, { target: { value: 'Updated Task' } });

  // Expect input value to be updated
  expect(inputElement).toHaveValue('Updated Task');
});
