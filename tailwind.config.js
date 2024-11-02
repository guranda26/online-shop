/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        contactBackground: "var(--contact-bg)",
        textColor: "var(--text)",
        formBackground: "var(--form-bg)",
        formText: "var(--form-text)",
        postBackground: "var(--post-bg)",
        postFormBg: "var(--post-form)",
        textBlack: "var(--text-black)",
        footerBg: "var(--footer-bg)",
        footerText: "var(--footer-text)",
      },
    },
  },
  plugins: [],
};
