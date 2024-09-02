import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

test('renders TodoList component correctly', () => {
  render(<TodoList />);
  
  expect(screen.getByTestId('todo-list-heading')).toBeInTheDocument();
  
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a Todo List/i)).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);

  fireEvent.change(screen.getByTestId('todo-input'), { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByTestId('add-todo-button'));

  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

test('toggles todo completion status', () => {
  render(<TodoList />);

  fireEvent.click(screen.getByTestId('todo-item-1'));

  expect(screen.getByTestId('todo-item-1')).toHaveStyle('text-decoration: line-through');

  fireEvent.click(screen.getByTestId('todo-item-1'));
  
  expect(screen.getByTestId('todo-item-1')).toHaveStyle('text-decoration: none');
});

test('deletes a todo', () => {
  render(<TodoList />);

  const deleteButton = screen.getByTestId('delete-1');

  fireEvent.click(deleteButton);

  expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
});
