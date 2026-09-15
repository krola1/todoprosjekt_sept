import styles from "./TodoItem.module.css";
import { useTodos } from "../../context/TodosContext";

function TodoItem({
  title,
  id,
  createdAt,
  description,
  complete,
  categories,
  priority,
}) {
  const { removeItem: onRemove, toggleComplete: onToggle } = useTodos();
  const date = new Date(createdAt).toLocaleDateString();

  return (
    <div className={styles.wrapper}>
      <label>
        Completed{" "}
        <input
          onChange={() => onToggle(id, "complete")}
          type="checkbox"
          checked={complete}
        />
      </label>
      <p>Priority: {priority}</p>
      <p>{date}</p>
      <h2>{title}</h2>
      <section>Description: {description}</section>
      <ul>
        Categories
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>

      <button>Edit</button>
      <button onClick={() => onRemove(id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
