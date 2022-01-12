import React from "react";
import { useContext } from "react/cjs/react.development";
import { ThemeContext } from "./Contexts/ThemeContextProvider";

const Navbar = () => {
  const themeState = useContext(ThemeContext);
  const theme = themeState.state.isLightTheme
    ? themeState.state.light
    : themeState.state.dark;
  console.log(themeState);

  return (
    <div
      style={{
        backgroundColor: theme.bg,
        color: theme.syntax,
        transition: "0.3s",
        borderColor: theme.syntax,
      }}
      className="bor"
    >
      <h1>Navbar</h1>
      <button
        onClick={themeState.toggleTheme}
        className="button"
        style={{ backgroundColor: theme.syntax, color: theme.ui }}
      >
        Toggle Theme
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo saepe nam
        ad at necessitatibus, quidem inventore optio facere excepturi quas cum
        consequatur? Tempora quo nihil sunt deserunt velit doloremque voluptate
        ex? Dolor optio, atque beatae quibusdam id ex sequi exercitationem
        expedita at. Delectus nesciunt a commodi deserunt eveniet animi quis.
      </p>
    </div>
  );
};

export default Navbar;
