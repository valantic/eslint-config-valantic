const airbnbStyle = require('eslint-config-airbnb-base/rules/style');
const airbnbImport = require('eslint-config-airbnb-base/rules/imports');
const vueStronglyRecommended = require('eslint-plugin-vue/lib/configs/strongly-recommended');
const jsdoc = require('eslint-plugin-jsdoc').configs.recommended;
const bestPractice = require('../rules/best-practices');
const vue = require('../rules/vue');

/**
 * Defines which rules do only apply for the `--fix` mode.
 * The `value` must be the `rules` root for the original definition, so it can be restored on fix.
 */
const baseRules = {
  'comma-dangle': airbnbStyle,
  'indent': airbnbStyle,
  'implicit-arrow-linebreak': airbnbStyle,
  'key-spacing': airbnbStyle,
  'no-multiple-empty-lines': airbnbStyle,
  'object-curly-spacing': airbnbStyle,
  'quotes': airbnbStyle,
  'space-infix-ops': airbnbStyle,
  'curly': bestPractice,
  'import/order': airbnbImport,
  'jsdoc/check-types': jsdoc,
}

const vueRules = {
  'vue/array-bracket-newline': vue,
  'vue/attributes-order': vue,
  'vue/block-tag-newline': vue,
  'vue/comma-spacing': vue,
  'vue/comma-style': vue,
  'vue/component-name-in-template-casing': vue,
  'vue/component-options-name-casing': vue,
  'vue/define-macros-order': vue,
  'vue/dot-notation': vue,
  'vue/func-call-spacing': vue,
  'vue/first-attribute-linebreak': vueStronglyRecommended,
  'vue/html-closing-bracket-newline': vueStronglyRecommended,
  'vue/html-comment-content-newline': vue,
  'vue/html-comment-content-spacing': vue,
  'vue/html-self-closing': vue,
  'vue/max-attributes-per-line': vueStronglyRecommended,
  'vue/multiline-html-element-content-newline': vue,
  'vue/no-extra-parens': vue,
  'vue/no-useless-mustaches': vue,
  'vue/no-useless-v-bind': vue,
  'vue/object-curly-newline': vue,
  'vue/object-curly-spacing': vue,
  'vue/object-property-newline': vue,
  'vue/operator-linebreak': vue,
  'vue/padding-line-between-blocks': vue,
  'vue/prefer-separate-static-class': vue,
  'vue/prefer-template': vue,
  'vue/prefer-true-attribute-shorthand': vue,
  'vue/script-indent': vue,
  'vue/space-in-parens': vue,
  'vue/template-curly-spacing': vue,
  'vue/v-for-delimiter-style': vue,
}

/**
 * Restores the original definitions for the given rules.
 *
 * @param {Object} rules - Definition of `rule: source`.
 *
 * @returns {Object}
 */
function restore(rules) {
  return Object.entries(rules).reduce((accumulator, [rule, source]) => {
    accumulator[rule] = source.rules[rule];

    return accumulator;
  }, {})
}

/**
 * Creates disabled rules for the given rules.
 *
 * @param {Object} rules - Definition of `rule: source`.
 *
 * @returns {Object}
 */
function disable(rules) {
  return Object.keys(rules).reduce((accumulator, rule) => {
    accumulator[rule] = 0;

    return accumulator;
  }, {})
}

module.exports = {
  disabled: disable({ ...baseRules, ...vueRules }),
  rules: restore(baseRules),
  vueRules: restore(vueRules),
};
