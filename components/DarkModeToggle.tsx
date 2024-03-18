"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "./DarkModeToggle.module.css";

import { Button } from "@/components/ui/button";

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={`group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ${styles.darkToggle} p-0`}
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <Sun
          className="h-9 w-9 p-1 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 bg-white bg-gradient-to-br from-purple-600 to-blue-500 text-white rounded-full"
          strokeWidth={1}
        />
      ) : (
        <Moon
          className="absolute h-[1.6rem] w-[1.6rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          strokeWidth={1}
        />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
