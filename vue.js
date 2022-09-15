module.exports = {
  plugins: [
    'vue',
  ],
  extends: [
    './index.js',
    './rules/vue.js',
    'plugin:vue/recommended',
  ],
  rules: {
    "vue/no-unsupported-features": ["error", {
      version: ">= 2.6 < 3",
    }],
  }
};
