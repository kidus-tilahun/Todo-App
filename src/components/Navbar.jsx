function Navbar({ todos }) {
  const completed = todos.filter((t) => t.completed).length;

  return (
    <nav className="text-center mb-4 font-bold">
      Completed: {completed} / {todos.length}
    </nav>
  );
}

export default Navbar;
