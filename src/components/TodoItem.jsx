function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="flex justify-between items-center p-2 border-b">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`cursor-pointer ${todo.completed ? "line-through text-gray-400" : ""}`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
