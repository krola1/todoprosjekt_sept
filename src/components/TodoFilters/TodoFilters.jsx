import styles from "./TodoFilters.module.css";
import { FILTER_OPTIONS } from "../../constants/filter";
import { useTodos } from "../../context/TodosContext";
import { DIRECTIONS, SORT_OPTIONS } from "../../constants/sort";

function TodoFilters() {
  const {
    filter,
    setFilter,
    sortField,
    setSortField,
    direction,
    setDirection,
  } = useTodos();
  return (
    <div>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={styles.wrapper}
      >
        {FILTER_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <select value={sortField} onChange={(e) => setSortField(e.target.value)}>
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <button
        onClick={() =>
          setDirection((prev) =>
            prev === DIRECTIONS.ASC ? DIRECTIONS.DESC : DIRECTIONS.ASC,
          )
        }
      >
        {direction === DIRECTIONS.DESC ? "↑" : "↓"}
      </button>
    </div>
  );
}

export default TodoFilters;
