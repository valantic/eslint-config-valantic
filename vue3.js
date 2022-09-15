module.exports = {
  plugins: [
    'vue',
  ],
  extends: [
    './index.js',
    './rules/vue.js',
    'plugin:vue/vue3-recommended',
    '@vue/typescript',
  ],
  rules: {
    "vue/no-unsupported-features": ["error", {
      version: ">= 3 < 4",
    }],
  }
};
