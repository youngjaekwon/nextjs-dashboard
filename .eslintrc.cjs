module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "plugin:eslint-plugin-import/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@next/next/recommended",
  ],
  env: {
    browser: true,
    es2020: true,
  },
  rules: {
    "no-unused-vars": "off",
    "tailwindcss/no-custom-classname": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "consistent-return": "off",
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: [
              "@shared/*/*/*/*/**",
              "@entities/*/*/*/*/*/**",
              "@features/*/*/*/*/*/**",
              "@widgets/*/*/*/*/*/**",
              "@pages/*/*/*/*/*/**",
              "@app/*/*/*/*/*/**",
            ],
            message:
              "Direct access to the internal parts of the module is prohibited",
          },
          {
            group: [
              "../**/shared",
              "../**/entities",
              "../**/features",
              "../**/widgets",
              "../**/pages",
              "../**/app",
            ],
            message: "Prefer absolute imports instead of relatives",
          },
        ],
      },
    ],
    "import/prefer-default-export": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: [
          "node_modules",
          "src/",
          "src/features",
          "src/widgets",
          "src/pages",
          "src/entities",
          "src/shared",
        ],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
