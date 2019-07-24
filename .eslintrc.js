module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  plugins: ["@typescript-eslint", "react"],
  rules: {
    indent: "off",
    "@typescript-eslint/indent": ["error", 2]
  },
  env: {
    browser: true,
    jasmine: true,
    jest: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use,
    }
  }
};
