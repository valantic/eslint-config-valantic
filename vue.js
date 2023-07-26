module.exports = {
  plugins: [
    'vue',
  ],
  extends: [
    'plugin:vue/recommended',
    './index.js',
    './rules/vue.js',
  ],
  rules: {
    "vue/no-unsupported-features": ["error", {
      version: ">= 2.6 < 3",
    }],
  },
  overrides: [{
    files: ['*.vue'],
    extends: [
      'plugin:jsdoc/recommended',
    ],
    rules: {
      'indent': ['off'], // Use 'vue/script-indent' instead.
      'max-len': ['off'], // Use 'vue/max-len' instead.
    },
  }],
};
