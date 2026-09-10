import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    rules: {
      "max-lines": ["error", { max: 500, skipBlankLines: true, skipComments: false }],
      "max-lines-per-function": ["error", { max: 80, skipBlankLines: true, skipComments: false, IIFEs: true }],
      complexity: ["error", 12],
      "max-depth": ["error", 4],
      "max-params": ["error", 4],
    },
  },
  {
    files: ["tests/**/*.{js,mjs,cjs,ts,tsx}"],
    rules: {
      "max-lines": ["error", { max: 700, skipBlankLines: true, skipComments: false }],
    },
  },
]);

export default eslintConfig;
