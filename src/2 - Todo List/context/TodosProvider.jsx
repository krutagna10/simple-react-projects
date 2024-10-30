import TodosContext from "./TodosContext.jsx";
import data from "../data/data.js";
import { useReducer } from "react";

function reducer(todos, action) {
  switch (action.type) {
    case "add-todo": {
      return [...todos, action.newTodo];
    }
    case "delete-todo": {
      const updatedTodos = todos.filter((todo) => todo.id !== action.deleteId);
      return updatedTodos;
    }
    case "edit-todo": {
      const updatedTodos = todos.map((todo) => {
        return todo.id === action.editedTodo.id ? action.editedTodo : todo;
      });
      return updatedTodos;
    }
    default: {
      throw new Error("Invalid action");
    }
  }
}

function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, data);

  function handleAddTodo(title) {
    const newTodo = {
      id: crypto.randomUUID(),
      isCompleted: false,
      title: title,
    };
    dispatch({ type: "add-todo", newTodo: newTodo });
  }

  function handleDeleteTodo(deleteId) {
    dispatch({ type: "delete-todo", deleteId: deleteId });
  }

  function handleEditTodo(editedTodo) {
    dispatch({ type: "edit-todo", editedTodo: editedTodo });
  }

  const value = {
    todos: todos,
    onAddTodo: handleAddTodo,
    onDeleteTodo: handleDeleteTodo,
    onEditTodo: handleEditTodo,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}

export default TodosProvider;
