/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

const WARNING = Boolean(process.env.STRICT_LINT) === true ? "error" : "warn"

module.exports = {
  root: true,
  plugins: ["prefer-arrow-functions", "no-relative-import-paths"],
  extends: [
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
    // これ以降はFWに入っているので削除してOK
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  ignorePatterns: ["src/assets", "*.config.ts", "*.json"],
  rules: {
    eqeqeq: "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": WARNING,
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "prettier/prettier": WARNING,
    "prefer-arrow-functions/prefer-arrow-functions": ["error"],
    /** @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn} */
    "unicorn/prefer-top-level-await": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/switch-case-braces": "off",
    "unicorn/filename-case": [
      "error",
      {
        case: "kebabCase",
        ignore: [""],
      },
    ],
    "no-relative-import-paths/no-relative-import-paths": [
      "error",
      {
        allowSameFolder: true,
        rootDir: "src",
        prefix: "@",
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  },
  overrides: [
    {
      files: ["**/*.test.ts", " **/*.stories.ts"],
      rules: {
        "@typescript-eslint/no-non-null-assertion": "off",
      },
    },
    {
      files: [" **/*.stories.ts"],
      rules: {
        "prettier/prettier": "off",
      },
    },
  ],
}
