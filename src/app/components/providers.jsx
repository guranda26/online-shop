"use client";

const { ThemeProvider } = require("next-themes");

const Providers = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
