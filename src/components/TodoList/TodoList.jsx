import { useTodos } from "../../context/TodosContext";
import TodoItem from "../TodoItem";
import styles from "./TodoList.module.css";

function TodoList() {
  const { todos } = useTodos();

  console.log(todos);

  return (
    <div className={styles.wrapper}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default TodoList;
