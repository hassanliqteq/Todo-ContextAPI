import React, { createContext, useState } from "react";
export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [state, setState] = useState({
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  });

  function toggleTheme(e) {
    e.preventDefault();
    setState({
      isLightTheme: !state.isLightTheme,
      light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
      dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
    });
    console.log(state.isLightTheme);
  }
  return (
    <ThemeContext.Provider value={{ state, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
