module.exports = {
  extends: [
    'eslint-config-airbnb-base/legacy',
    'eslint-config-movento/rules/best-practices',
    'eslint-config-movento/rules/errors',
    'eslint-config-movento/rules/import',
    'eslint-config-movento/rules/legacy',
    'eslint-config-movento/rules/node',
    'eslint-config-movento/rules/strict',
    'eslint-config-movento/rules/style',
    'eslint-config-movento/rules/variables'
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
