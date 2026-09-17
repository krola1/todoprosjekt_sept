import "./App.css";
import TodoFilters from "./components/TodoFilters/TodoFilters";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import Layout from "./styleComponents/Layout";
export default function App() {
  return (
    <Layout>
      <TodoForm />
      <TodoFilters />
      <TodoList />
    </Layout>
  );
}
