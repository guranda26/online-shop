"use client";

import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa6";
import { MdLightMode } from "react-icons/md";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center cursor-pointer bg-gray-300 dark:bg-gray-700 ml-auto mr-10 h-10 rounded-full transition-colors duration-300 ease-in-out w-[80px]"
    >
      {resolvedTheme === "dark" ? (
        <MdLightMode className="text-white-300 font-bold" />
      ) : (
        <FaMoon className="text-gray-800" />
      )}
    </div>
  );
};

export default ThemeButton;
