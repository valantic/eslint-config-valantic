module.exports = {
  extends: [
    'eslint-config-airbnb-base/legacy',
    './rules/best-practices',
    './rules/errors',
    './rules/import',
    './rules/legacy',
    './rules/node',
    './rules/strict',
    './rules/style',
    './rules/variables'
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
  globals: {},
  rules: {}
};
