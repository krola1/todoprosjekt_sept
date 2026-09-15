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
  const [todos, setTodos] = useState(["LarsTest"]);

  const value = { todos };
  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}
