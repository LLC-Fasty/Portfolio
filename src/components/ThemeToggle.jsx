"use client";
import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(false);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className=" relative w-18 h-18 flex items-center dark:bg-[#f5f5f5] bg-[#212121] cursor-pointer p-2 rounded-full"
      >
        <div>
          <FaMoon className="text-[#f5f5f5] w-14 h-14 absolute dark:opacity-0 opacity-100" />
          <BsSunFill className="text-[#212121] w-14 h-14 dark:opacity-100 opacity-0" />
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
