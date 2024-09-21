import data from "./data/data.js";
import { useReducer, useState } from "react";
import TodoList from "./components/TodoList/TodoList.jsx";
import TodoAdd from "./components/TodoAdd/TodoAdd.jsx";

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

function TodoApp() {
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

  return (
    <div>
      <h1>Todo List</h1>
      <TodoAdd onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onEditTodo={handleEditTodo}
      />
    </div>
  );
}

export default TodoApp;
