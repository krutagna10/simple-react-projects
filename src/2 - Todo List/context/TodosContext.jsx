import { createContext } from "react";

const TodosContext = createContext({
  todos: [],
  onAddTodo: (title) => {},
  onDeleteTodo: (deleteId) => {},
  onEditTodo: (editedTodo) => {},
});

export default TodosContext;
