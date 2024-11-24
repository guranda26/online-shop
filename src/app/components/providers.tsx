"use client";

const { ThemeProvider } = require("next-themes");

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
