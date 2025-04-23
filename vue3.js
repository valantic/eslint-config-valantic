import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import index from './index.js';
import vueRules from './rules/vue.js';
import typescriptRules from './rules/typescript.js';
import eslint from '@eslint/js';
import jsdocPlugin from 'eslint-plugin-jsdoc';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...index,
  ...vueRules,
  ...typescriptRules,
  {
    plugins: {
      jsdoc: jsdocPlugin,
    },
    rules: {
      'import/extensions': ['warn', 'always'],
    },
  },
];
