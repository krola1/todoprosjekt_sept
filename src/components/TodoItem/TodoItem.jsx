import styles from "./TodoItem.module.css";
import { useTodos } from "../../context/TodosContext";
import { useState } from "react";

function TodoItem({
  title,
  id,
  createdAt,
  description,
  complete,
  categories,
  priority,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [titleText, setTitleText] = useState(title);
  const [descriptionText, setDescriptionText] = useState(description);

  const { removeItem: onRemove, toggleItem: onToggle, editItem } = useTodos();

  const onEdit = () => {
    if (isEditing) {
      editItem(id, "title", titleText);
      editItem(id, "description", descriptionText);
    }
    setIsEditing(!isEditing);
  };

  const date = new Date(createdAt).toLocaleDateString();

  return (
    <div className={styles.wrapper}>
      <label>
        Completed
        <input
          onChange={() => onToggle(id, "complete")}
          type="checkbox"
          checked={complete}
        />
      </label>
      <p>Priority: {priority}</p>
      <p>{date}</p>
      {/* -------------------------------title----------------------- */}
      {isEditing ? (
        <input
          onChange={(e) => setTitleText(e.target.value)}
          type="text"
          value={titleText}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onEdit();
            }
          }}
        />
      ) : (
        <h2>{title}</h2>
      )}

      {/* -------------------------------description----------------------- */}
      {isEditing ? (
        <input
          onChange={(e) => setDescriptionText(e.target.value)}
          type="text"
          value={descriptionText}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onEdit();
            }
          }}
        />
      ) : (
        <section>Description: {description}</section>
      )}
      <ul>
        Categories
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>

      <button onClick={onEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button onClick={() => onRemove(id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
