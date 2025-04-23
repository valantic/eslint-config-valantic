import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import vuePlugin from 'eslint-plugin-vue';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import bestPracticesRules from './rules/best-practices.js';
import errorRules from './rules/errors.js';
import es6Rules from './rules/es6.js';
import importRules from './rules/import.js';
import styleRules from './rules/style.js';
import variablesRules from './rules/variables.js';

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.builtin,
        ...globals.browser,
        ...globals.node,
        ...globals.amd,
        ...globals.mocha,
        ...globals.jasmine,
      },
    },
    plugins: {
      import: importPlugin,
      vue: vuePlugin,
      jsdoc: jsdocPlugin,
    },
  },
  ...bestPracticesRules,
  ...errorRules,
  ...importRules,
  ...styleRules,
  ...variablesRules,
  ...es6Rules,
];
