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
  }
};
