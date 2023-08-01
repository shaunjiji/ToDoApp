import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import ToDo from '../src/components/ToDo';

test('renders ToDo component with incomplete task', () => {
  const mockToggleComplete = jest.fn();
  const mockDeleteTodo = jest.fn();
  const mockEditTodo = jest.fn();
  const mockTodo = { id: '1', task: 'Task 1', completed: false, isEditing: false };
  render(
    <ToDo
      todo={mockTodo}
      toggleComplete={mockToggleComplete}
      deleteTodo={mockDeleteTodo}
      editTodo={mockEditTodo}
    />
  );

  const taskElement = screen.getByText(/Task 1/i);
  const completeIconElement = screen.getByLabelText('Incomplete');
  const editIconElement = screen.getByLabelText('Edit');
  const deleteIconElement = screen.getByLabelText('Delete');

  // Test initial state
  expect(taskElement).toBeInTheDocument();
  expect(completeIconElement).toBeInTheDocument();
  expect(editIconElement).toBeInTheDocument();
  expect(deleteIconElement).toBeInTheDocument();
});

test('calls toggleComplete when complete icon is clicked', () => {
  const mockToggleComplete = jest.fn();
  const mockDeleteTodo = jest.fn();
  const mockEditTodo = jest.fn();
  const mockTodo = { id: '1', task: 'Task 1', completed: false, isEditing: false };
  render(
    <ToDo
      todo={mockTodo}
      toggleComplete={mockToggleComplete}
      deleteTodo={mockDeleteTodo}
      editTodo={mockEditTodo}
    />
  );

  const completeIconElement = screen.getByLabelText('Incomplete');

  // Click the complete icon
  fireEvent.click(completeIconElement);

  // Expect toggleComplete to be called with the correct ID
  expect(mockToggleComplete).toHaveBeenCalledWith('1');
});

test('calls editTodo when edit icon is clicked', () => {
  const mockToggleComplete = jest.fn();
  const mockDeleteTodo = jest.fn();
  const mockEditTodo = jest.fn();
  const mockTodo = { id: '1', task: 'Task 1', completed: false, isEditing: false };
  render(
    <ToDo
      todo={mockTodo}
      toggleComplete={mockToggleComplete}
      deleteTodo={mockDeleteTodo}
      editTodo={mockEditTodo}
    />
  );

  const editIconElement = screen.getByLabelText('Edit');

  // Click the edit icon
  fireEvent.click(editIconElement);

  // Expect editTodo to be called with the correct ID
  expect(mockEditTodo).toHaveBeenCalledWith('1');
});

test('calls deleteTodo when delete icon is clicked', () => {
  const mockToggleComplete = jest.fn();
  const mockDeleteTodo = jest.fn();
  const mockEditTodo = jest.fn();
  const mockTodo = { id: '1', task: 'Task 1', completed: false, isEditing: false };
  render(
    <ToDo
      todo={mockTodo}
      toggleComplete={mockToggleComplete}
      deleteTodo={mockDeleteTodo}
      editTodo={mockEditTodo}
    />
  );

  const deleteIconElement = screen.getByLabelText('Delete');

  // Click the delete icon
  fireEvent.click(deleteIconElement);

  // Expect deleteTodo to be called with the correct ID
  expect(mockDeleteTodo).toHaveBeenCalledWith('1');
});
