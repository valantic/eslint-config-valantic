const fix = require('./utils/fix-rules');

module.exports = {
  extends: [
    './fix.js',
  ],
  rules: {
    ...fix.vueRules,
  },
  overrides: [{
    files: ['*.vue'],
    rules: {
      'indent': ['off'], // Use 'vue/script-indent' instead.
      'import/extensions': ['off'],
      'max-len': ['off'], // Use 'vue/max-len' instead.
    },
  }],
}
