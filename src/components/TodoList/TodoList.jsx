import { useTodos } from "../../context/TodosContext";
import Grid from "../../styleComponents/Grid";
import TodoItem from "../TodoItem";

function TodoList() {
  const { todos } = useTodos();

  console.log(todos);

  return (
    <Grid>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </Grid>
  );
}

export default TodoList;
