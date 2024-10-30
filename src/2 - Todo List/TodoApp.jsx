import data from "./data/data.js";
import { useReducer, useState } from "react";
import TodoList from "./components/TodoList/TodoList.jsx";
import TodoAdd from "./components/TodoAdd/TodoAdd.jsx";
import TodosProvider from "./context/TodosProvider.jsx";

function TodoApp() {
  return (
    <div>
      <TodosProvider>
        <h1>Todo List</h1>
        <TodoAdd />
        <TodoList />
      </TodosProvider>
    </div>
  );
}

export default TodoApp;
