const tsRules = require('./plugins/typescript');

module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'eslint-config-airbnb-base',
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/es6.js',
    './rules/import.js',
    './rules/legacy.js',
    './rules/node.js',
    './rules/strict.js',
    './rules/style.js',
    './rules/variables.js',
    './settings/import_core-modules.js',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
  globals: {},
  rules: {
    ...tsRules,
  }
};
