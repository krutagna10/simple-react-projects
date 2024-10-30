import { useContext, useState } from "react";
import TodosContext from "../../context/TodosContext.jsx";

function TodoItem({ index, todo }) {
  const { onDeleteTodo, onEditTodo } = useContext(TodosContext);

  function handleIsCompletedChange(event) {
    const updatedTodo = {
      ...todo,
      isCompleted: event.target.checked,
    };
    onEditTodo(updatedTodo);
  }

  return (
    <tr key={todo.id}>
      <td>{index + 1}</td>
      <td>
        <input
          type="checkbox"
          onChange={handleIsCompletedChange}
          checked={todo.isCompleted}
        />
      </td>
      <td>{todo.title}</td>
      <td>
        <button
          className="btn btn--red"
          onClick={() => {
            onDeleteTodo(todo.id);
          }}
        >
          Delete Todo
        </button>
      </td>
    </tr>
  );
}

export default TodoItem;
