import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";

function App() {
  // Load todos from localStorage or start empty
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all"); // all | active | completed

  // Save todos whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  function addTodo(text) {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  }

  // Delete a todo
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // Toggle completed
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  // Filtered todos based on filter state
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // all
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
      <Navbar todos={todos} />
      <TodoForm addTodo={addTodo} />
      
      {/* Filter Buttons */}
      <div className="flex justify-center gap-2 mb-4">
        {["all", "active", "completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded ${
              filter === f ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {f[0].toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;