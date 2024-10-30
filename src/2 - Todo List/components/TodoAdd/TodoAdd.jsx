import { useContext, useState } from "react";
import TodosContext from "../../context/TodosContext.jsx";

function TodoAdd() {
  const { onAddTodo } = useContext(TodosContext);
  const [title, setTitle] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddTodo(title);
    setTitle("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleTitleChange}
        placeholder="Title"
        value={title}
        required
      />
      <button className="btn btn--green">Add Todo</button>
    </form>
  );
}

export default TodoAdd;
