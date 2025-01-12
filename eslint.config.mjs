import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    settings: {
      react: {
        version: "detect",
      },
    },
    ignores: ["./build/"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.amd,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["*.ts"],
    rules: {
      "@typescript-eslint/no-empty-interface": "off",
    },
  },
];
