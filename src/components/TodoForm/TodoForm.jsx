import { useState } from "react";
import styles from "./TodoForm.module.css";
import { useTodos } from "../../context/TodosContext";

function TodoForm() {
  const [text, setText] = useState("");
  const { addItem: onAdd } = useTodos();

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={(e) => onSubmit(e)} action="">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
