import bestPractices from './rules/best-practices.js';
import errors from './rules/errors.js';
import es6 from './rules/es6.js';
import importRules from './rules/import.js';
import style from './rules/style.js';
import variables from './rules/variables.js';
import globals from 'globals';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.amd,
        ...globals.mocha,
        ...globals.jasmine,
      },
    },
  },
  eslintPluginUnicorn.configs.recommended,
  {
    rules: {
      'unicorn/better-regex': 'warn',
    },
  },
  ...bestPractices,
  ...errors,
  ...es6,
  ...importRules,
  ...style,
  ...variables,
]);
