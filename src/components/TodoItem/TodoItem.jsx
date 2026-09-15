import styles from "./TodoItem.module.css";

function TodoItem({ title }) {
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
    </div>
  );
}

export default TodoItem;
