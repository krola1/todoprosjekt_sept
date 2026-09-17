import styles from "./TodoFilters.module.css";
import { FILTER_OPTIONS } from "../../constants/filter";
import { useTodos } from "../../context/TodosContext";

function TodoFilters() {
  const { filter, setFilter } = useTodos();
  return (
    <div>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={styles.wrapper}
      >
        {FILTER_OPTIONS.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>

      <select name="" id="">
        <option value="">Date</option>
        <option value="">Priority</option>
        <option value="">Alphabetical</option>
      </select>

      <button>↑↓</button>
    </div>
  );
}

export default TodoFilters;
