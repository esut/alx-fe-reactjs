import React, { useState } from 'react';

const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build a Todo List', completed: false },
];

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    setTodos([
      ...todos,
      { id: Date.now(), text: newTodo, completed: false },
    ]);
    setNewTodo('');
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1 data-testid="todo-list-heading">Todo List</h1>
      <AddTodoForm newTodo={newTodo} setNewTodo={setNewTodo} handleAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.text}
            <button data-testid={`delete-${todo.id}`} onClick={(e) => { e.stopPropagation(); handleDeleteTodo(todo.id); }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AddTodoForm({ newTodo, setNewTodo, handleAddTodo }) {
  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoList;
