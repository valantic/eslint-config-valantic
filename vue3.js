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
  rules: {
    'import/extensions': ['warn', 'always'],
  }
};
