import { useState } from "react";

function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo..."
        className="flex-1 border px-3 py-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
