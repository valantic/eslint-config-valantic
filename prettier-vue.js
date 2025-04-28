import prettier from './prettier.js';

/**
 * This config should be used on top of any of the other configs, to disable Prettier handle rules.
 */
export default [
  ...prettier,
  {
    rules: {
      'vue/html-self-closing': 'off',
      'vue/object-curly-newline': 'off',
      'vue/singleline-html-element-content-newline': 'off',
    }
  }
];
