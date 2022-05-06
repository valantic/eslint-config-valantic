module.exports = {
  rules: {
    // Enforce return statements in callbacks of array methods
    // - Allowed to use .map() instead forEach without a return value
    'array-callback-return': 0,

    // Enforce consistent brace style for all control statements
    'curly': [2, 'all'],

    // Putting default parameter at last allows function calls to omit optional tail arguments.
    // https://eslint.org/docs/rules/default-param-last
    'default-param-last': 2,

    // Enforce consistent newlines before and after dots
    'dot-location': [2, 'property'],

    // Disallows expressions where the operation doesn't affect the value.
    'no-constant-binary-expression': 2,

    // This rule is aimed at eliminating empty functions. A function will not be considered a problem if it contains a comment.
    'no-empty-function': [2, {
      allow: [
        'arrowFunctions',
      ],
    }],

    // Disallow reassignment of function parameters
    // Disallow parameter object manipulation
    // Rule: http://eslint.org/docs/rules/no-param-reassign.html
    // - Allowed to support default fallback: var foo = foo || 'baa';
    'no-param-reassign': 0,

    // Disallow unmodified conditions of loops
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 2,

    // Disallow unnecessary .call() and .apply()
    'no-useless-call': 2,

    // Disallow usage of configurable warning terms in comments.
    'no-warning-comments': [2, {
      terms: ['fixme', 'xxx', 'console', 'stupid', 'dumb', 'fuck']
    }],
  }
};
