import TodoItem from "../TodoItem/TodoItem.jsx";

function TodoList({ todos, onDeleteTodo, onEditTodo }) {
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
          <TodoItem
            key={todo.id}
            index={index}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onEditTodo={onEditTodo}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;
