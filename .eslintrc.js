module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    env: {
        browser: true,
        node: true,
    },
    plugins: [
        "@typescript-eslint", 
        "prettier", 
    ],
    extends: [
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/interface-name-prefix": "off"
    },
    settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts"]
        },
        "import/resolver": {
          "node": {
            "paths": ["src"],
            "extensions": [".js", ".jsx", ".json", ".native.js", ".ts"]
          },
          "typescript": {
            "paths": ["src"],
            "extensions": [".js", ".jsx", ".json", ".native.js", ".ts"]
          }
        }
      }
};