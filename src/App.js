import { useContext, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import { ThemeContext } from "./Contexts/ThemeContextProvider";
import Todo from "./Todo";

function App() {
  const [name, setName] = useState("");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([{ name: "Sample", todo: "Sample" }]);

  const handleClick = (event) => {
    event.preventDefault();
    todos.push({ name: name, todo: todo });
    setTodos((todos) => todos);
    setName("");
    setTodo("");
  };
  const themeState = useContext(ThemeContext);
  const theme = themeState.state.isLightTheme
    ? themeState.state.light
    : themeState.state.dark;
  return (
    <div
      style={{
        backgroundColor: theme.bg,
        color: theme.syntax,
        transition: "0.3s",
      }}
      className="app bor"
    >
      <Navbar />
      <h1>Context API Todo APP.</h1>
      <form onSubmit={handleClick} className="todo-form">
        <input
          value={name}
          required
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          value={todo}
          required
          type="text"
          onChange={(event) => setTodo(event.target.value)}
          placeholder="Todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <Todo todos={todos} />
    </div>
  );
}
export const todos = App.todos;
export default App;
