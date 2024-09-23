
import React, { useState } from 'react';

const TodoList = () => {

  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn Jest', completed: false },

  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e) => {

    e.preventDefault();

    if (newTodo.trim() === '') return;
    const newTodoItem = {

      id: Date.now(),
      text: newTodo,
      completed: false,

    };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {

    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo

    ));
  };

  const deleteTodo = (id) => {

    setTodos(todos.filter(todo => todo.id !== id));

  };

  return (
    <div>
      <h1>Todo list</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add todo</button>
      </form>
      <ul>
        {todos.map(todo => (

          <li key={todo.id} onClick={() => toggleTodo(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
