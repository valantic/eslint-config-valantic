import pluginVue from 'eslint-plugin-vue';
import index from './index.js';
import vueRules from './rules/vue.js';
import jsdocPlugin from 'eslint-plugin-jsdoc';

export default [
  ...pluginVue.configs['flat/recommended'],
  ...index,
  ...vueRules,
  {
    plugins: {
      jsdoc: jsdocPlugin,
    },
    rules: {
      'import/extensions': ['warn', 'always'],
    },
  },
];
