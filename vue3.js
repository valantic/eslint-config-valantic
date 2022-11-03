module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    './index.js',
    './rules/vue.js',
    './rules/typescript.js',
  ],
  plugins: [
    'vue',
    '@typescript-eslint/eslint-plugin',
  ],
  rules: {
    'import/extensions': ['warn', 'always'],
  }
};
