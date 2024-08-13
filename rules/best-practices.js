export default {
  rules: {
    // Enforce return statements in callbacks of array methods
    // - Allowed to use .map() instead forEach without a return value
    'array-callback-return': ['off'],

    // Enforce consistent brace style for all control statements
    'curly': ['error', 'all'],

    // Putting default parameter at last allows function calls to omit optional tail arguments.
    // https://eslint.org/docs/rules/default-param-last
    'default-param-last': ['error'],

    // Enforce consistent newlines before and after dots
    'dot-location': ['error', 'property'],

    // Disallows expressions where the operation doesn't affect the value.
    'no-constant-binary-expression': ['error'],

    // This rule is aimed at eliminating empty functions. A function will not be considered a problem if it contains a comment.
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
      ],
    }],

    // Disallow reassignment of function parameters
    // Disallow parameter object manipulation
    // Rule: http://eslint.org/docs/rules/no-param-reassign.html
    // - Allowed to support default fallback: var foo = foo || 'baa';
    'no-param-reassign': ['off'],

    // Disallow unmodified conditions of loops
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': ['error'],

    // Disallow unnecessary .call() and .apply()
    'no-useless-call': ['error'],

    // Disallow usage of configurable warning terms in comments.
    'no-warning-comments': ['error', {
      terms: ['fixme', 'xxx', 'console', 'stupid', 'dumb', 'fuck']
    }],
  }
};
