module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
  },
  extends: [
    './index.js',
    './rules/typescript.js',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
};
