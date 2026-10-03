"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
  mounted: false,
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("sabilul_portfolio_theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", savedTheme);
      // Scheduled to avoid synchronous cascading renders during mount
      const frameId = requestAnimationFrame(() => {
        setTheme(savedTheme);
        setMounted(true);
      });
      return () => cancelAnimationFrame(frameId);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      const frameId = requestAnimationFrame(() => {
        setMounted(true);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("sabilul_portfolio_theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
