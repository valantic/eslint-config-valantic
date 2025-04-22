export default {
  extends: [
    'plugin:vue/recommended',
    './index.js',
    './rules/vue.js',
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
