module.exports = {
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    'jsdoc',
  ],
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
     'plugin:jsdoc/recommended',
 ],
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
};
