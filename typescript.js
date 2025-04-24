import globals from 'globals';
import index from './index.js';
import typescriptRules from './rules/typescript.js';
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  ...index,
  ...typescriptRules,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      parser: '@typescript-eslint/parser',
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    },
  },
];
