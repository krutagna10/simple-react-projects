import TodoItem from "../TodoItem/TodoItem.jsx";
import { useContext } from "react";
import TodosContext from "../../context/TodosContext.jsx";

function TodoList() {
  const { todos } = useContext(TodosContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Is Completed</th>
          <th>Title</th>
          <th>Delete Button</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <TodoItem key={todo.id} index={index} todo={todo} />
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;
