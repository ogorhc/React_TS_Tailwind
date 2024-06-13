import { useEffect, useState } from 'react';
import { Todo } from '../types';
import { dummyData } from '../data';

export default function useTodos() {
  const [todos, setTodos] = useState(() => {
    const savedTodos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');
    return savedTodos.length > 0 ? savedTodos : dummyData;
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo)));
  }

  function setNewTodo(title: string) {
    setTodos([{ id: Date.now(), title, completed: false }, ...todos]);
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function deleteAllCompleted() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  return {
    todos,
    setTodoCompleted,
    setNewTodo,
    deleteTodo,
    deleteAllCompleted,
  };
}
