/** @type {import('tailwindcss').Config} */
export const env = {
  node: true,
};
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const darkMode = "class";
export const theme = {
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
      profileBackground: "var(--profile-bg)",
    },
    backgroundImage: {
      profile: "var(--profile-bg)",
    },
  },
};
export const plugins = [];
