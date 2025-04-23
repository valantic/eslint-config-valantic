import index from './index.js';
import typescriptRules from './rules/typescript.js';
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  ...index,
  ...typescriptRules,
  {
    parserOptions: {
      ecmaVersion: 'latest',
      parser: '@typescript-eslint/parser',
    },
    env: {
      browser: true,
      node: true,
      amd: false,
      mocha: false,
      jasmine: false,
    },
  },
];
