/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

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
  const [todos, setTodos] = useState([]);

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

  const value = { todos, addItem };
  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}
