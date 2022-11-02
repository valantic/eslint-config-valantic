module.exports = {
  extends: [
    './index.js',
    './rules/vue.js',
    './typescript.js',
    'plugin:vue/vue3-recommended',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'import/extensions': ['warn', 'always'],
  }
};
