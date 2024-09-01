// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

test('renders TodoList component correctly', () => {
  render(<TodoList />);
  
  // Check if the "Todo List" header is present and not duplicated
  const headers = screen.getAllByText(/Todo List/i);
  expect(headers).toHaveLength(1); // Should be exactly one
  
  // Ensure demo todos are present
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a Todo List/i)).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText(/Add Todo/i));
  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

test('toggles todo completion status', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Learn React/i);
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: none');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButtons = screen.getAllByText(/Delete/i);
  fireEvent.click(deleteButtons[0]);
  expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
});
