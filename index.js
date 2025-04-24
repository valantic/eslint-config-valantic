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
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
  eslintPluginUnicorn.configs.recommended,
  {
    // Override unicorn rules for our template. These can be discussed to be removed.
    rules: {
      'unicorn/no-null': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/switch-case-braces': 'off',
      'unicorn/explicit-length-check': 'off',
      'unicorn/no-anonymous-default-export': 'off',
      'unicorn/prefer-query-selector': 'off',
      'unicorn/prefer-ternary': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/numeric-separators-style': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          'allowList': {
            'val': true,
            'req': true,
            'formRef': true,
            'newVal': true,
            'args': true,
            'e': true,
            'i': true,
            'elem': true,
            'el': true,
            'utils': true,
            'resultObj': true,
            'prev': true,
            'prop': true,
            'props': true,
            'scriptSrc': true,
            'PropConfig': true,
            'arr': true,
            'hasSrcSet': true,
            'ref': true,
            'excludeRefs': true,
            'isClickOnExcludedRefElement': true,
            'withProps': true,
          }
        }
      ]
    },
  },
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
