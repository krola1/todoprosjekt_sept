import { useTodos } from "../../context/TodosContext";
import Grid from "../../styleComponents/Grid";
import TodoItem from "../TodoItem";

function TodoList() {
  const { visibleTodos } = useTodos();

  console.log(visibleTodos);

  return (
    <Grid>
      {visibleTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </Grid>
  );
}

export default TodoList;
