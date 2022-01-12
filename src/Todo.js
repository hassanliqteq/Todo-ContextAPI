import React, { useContext } from "react";
import NestedTodo from "./NestedTodo";
import { ThemeContext } from "./Contexts/ThemeContextProvider";
import "./Todo.css";
const Todo = ({ todos }) => {
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
        borderColor: theme.syntax,
      }}
      className="todo bor"
    >
      <h1>Todos</h1>
      <div className="todos">
        {todos.map((todo, index) => (
          <div
            key={index}
            style={{
              backgroundColor: theme.bg,
              color: theme.syntax,
              transition: "0.3s",
              borderColor: theme.syntax,
            }}
            className="todos-list bor"
          >
            <h1>{todo.name}</h1>
            <h1>{todo.todo}</h1>
          </div>
        ))}
      </div>
      <NestedTodo />
    </div>
  );
};

export default Todo;
