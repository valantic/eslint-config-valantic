import bestPractices from './rules/best-practices.js';
import errors from './rules/errors.js';
import es6 from './rules/es6.js';
import importRules from './rules/import.js';
import style from './rules/style.js';
import variables from './rules/variables.js';
import vue from './rules/vue.js';
import typescript from './rules/typescript.js';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import vuePlugin from 'eslint-plugin-vue';

export default {
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
  },
  rules: {
    ...bestPractices.rules,
    ...errors.rules,
    ...es6.rules,
    ...importRules.rules,
    ...style.rules,
    ...variables.rules,
    ...vue.rules,
    ...typescript.rules,

  },
};
