module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/typescript",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
    "prettier", 
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "jsx-a11y",
    "react-hooks",
    "prettier",
  ],
  rules: {
    "comma-dangle": ["error", "only-multiline"],
    "react/no-unknown-property": [2, { ignore: ["key"] }],
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts"] }],
    "import/no-unresolved": "error",
    "no-console": 2,
    "no-unused-vars": "error",
    "no-import-assign": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "import/export": 0
  },
};
