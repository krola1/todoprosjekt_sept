import { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm() {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    //-- onAdd
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
