import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  if (todos.length === 0) return <p className="text-center text-gray-400">No todos</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;