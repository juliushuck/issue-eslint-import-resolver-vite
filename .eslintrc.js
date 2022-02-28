// import eslintViteImportResolver from "eslint-import-resolver-vite";

const eslintConfig = {
  env: { browser: true },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["html", "json-format", "ordered-imports", "react"],
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:ordered-imports/recommended",
  ],
  rules: {
    camelcase: 0,
    "eslintno-underscore-dangle": 0,
    "import/no-mutable-exports": 0,
    "import/order": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "new-cap": 0,
    "no-await-in-loop": 0,
    "no-console": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-continue": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-underscore-dangle": 0,
    "object-curly-newline": [
      2,
      {
        ObjectExpression: { minProperties: 2 },
        ObjectPattern: { minProperties: 2 },
        ImportDeclaration: "never",
        ExportDeclaration: { minProperties: 2 },
      },
    ],
    "ordered-imports/ordered-imports": [
      2,
      {
        "group-ordering": [
          {
            name: "root",
            match: "^@/",
            order: 20,
          },
          {
            name: "current dir",
            match: "^\\./",
            order: 30,
          },
          {
            name: "extermal",
            match: ".*",
            order: 10,
          },
        ],
      },
    ],
    "react/forbid-prop-types": 0,
    // Bug in airbnb config
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-sort-props": 2,
    "react/prop-types": 0,
  },
  settings: { "import/resolver": "vite" },
};

module.exports = eslintConfig;
