/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useState } from "react";
import { FILTERS, filterTodos } from "../constants/filter";
import { DIRECTIONS, SORT_FIELDS, sortTodos } from "../constants/sort";

// 1. initialize context
const TodosContext = createContext(null);

//2. create custom hook for ease of use
export const useTodos = () => {
  const context = useContext(TodosContext);
  if (context === null) {
    console.error("useTodos must be used within a provider");
  }
  return context;
};
//----------------------------------------------------------------------
//3. create provider
export default function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage("todo_sept");
  const [filter, setFilter] = useLocalStorage("todo_Sept_filters", FILTERS.ALL);
  const [sortField, setSortField] = useLocalStorage(
    "todo_sept_sort_field",
    SORT_FIELDS.CREATED,
  );
  const [direction, setDirection] = useLocalStorage(
    "todo_sept_dir",
    DIRECTIONS.DESC,
  );

  const addItem = (text) => {
    const newItem = {
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      dueDate: null,
      complete: false,
      priority: 2,
      title: text,
      description: "N/A",
      categories: ["default"],
      tags: [],
      subTasks: [],
    };
    setTodos((prev) => [...prev, newItem]);
  };

  const removeItem = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleItem = (id, key) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, [key]: !todo.complete } : todo,
      ),
    );
  };

  const editItem = (id, key, text) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, [key]: text } : todo)),
    );
  };

  const visibleTodos = sortTodos(
    filterTodos(todos, filter),
    sortField,
    direction,
  );

  const value = {
    todos,
    visibleTodos,
    filter,
    setFilter,
    sortField,
    setSortField,
    direction,
    setDirection,
    addItem,
    removeItem,
    toggleItem,
    editItem,
  };
  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}
