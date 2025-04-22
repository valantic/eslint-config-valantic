import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import index from './index.js';
import vueRules from './rules/vue.js';
import typescriptRules from './rules/typescript.js';

export default tseslint.config(
  tseslint.configs.recommended,
  pluginVue.configs.recommended,
  index,
  vueRules,
  typescriptRules,
  {
    plugins: {
      vue: 'vue',
      eslint: '@typescript-eslint/eslint-plugin',
    },
    rules: {
      'import/extensions': ['warn', 'always'],
    },
  },
);
