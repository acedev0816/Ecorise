"use client";
import { useEffect, useState } from "react";

type DarkModeState = 'dark' | 'light';

function useTheme() {
  const storedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
  const [theme, setTheme] = useState<DarkModeState>(
    storedTheme !== null ? (storedTheme as DarkModeState) : "dark"
  );
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme, colorTheme]);

  return [colorTheme, setTheme] as const;
}

export default useTheme;