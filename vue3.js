module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    './index.js',
    './rules/vue.js',
    './typescript.js',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    "vue/no-unsupported-features": ["error", {
      version: ">= 3 < 4",
    }],
  }
};
