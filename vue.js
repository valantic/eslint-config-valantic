module.exports = {
  extends: [
    './index.js',
    './rules/vue.js',
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    "vue/no-unsupported-features": ["error", {
      version: ">= 2.6 < 3",
    }],
  }
};
