import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function TopHead() {
  return (
    <div>
      <div className=" fixed top-6 right-6 flex justify-end">
        <ThemeToggle />
      </div>
    </div>
  );
}
