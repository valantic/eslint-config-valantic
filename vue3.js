module.exports = {
  plugins: [
    'vue',
    '@typescript-eslint/eslint-plugin',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    './index.js',
    './rules/vue.js',
    './rules/typescript.js',
  ],
  overrides: [{
    files: ['*.vue'],
    rules: {
      'indent': ['off'], // Use 'vue/script-indent' instead.
      'max-len': ['off'], // Use 'vue/max-len' instead.
    },
  }],
};
