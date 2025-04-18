import { useState, useEffect, createContext } from "react";

export const ChangeTheme = createContext();

export const ThemeProvider = ({ children }) => {
  const activeTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(activeTheme === "dark");

  const toggleTheme = () => {
    setTheme(!theme);
    console.log(theme);
  };

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ChangeTheme.Provider value={{ theme, toggleTheme }}>
      {children}
    </ChangeTheme.Provider>
  );
};
