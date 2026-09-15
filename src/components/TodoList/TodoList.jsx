import TodoItem from "../TodoItem";
import styles from "./TodoList.module.css";

function TodoList() {
  const todos = ["fisk"]; //placeholder
  return (
    <div className={styles.wrapper}>
      {todos.map((todo, i) => (
        <TodoItem key={i} {...todo} />
      ))}
    </div>
  );
}

export default TodoList;
