"use client";

const { ThemeProvider } = require("next-themes");

const Providers = ({ children }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
