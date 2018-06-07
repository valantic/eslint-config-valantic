module.exports = {
  rules: {
    // Enforce return statements in callbacks of array methods
    // - Allowed to use .map() instead forEach without a return value
    'array-callback-return': 0,

    // Enforce consistent brace style for all control statements
    'curly': [2, 'all'],
    
    // Enforce consistent newlines before and after dots
    'dot-location': [2, 'property'],
    
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
    'no-warning-comments': [1, {
      terms: ['fixme', 'xxx', 'console', 'stupid', 'dumb', 'fuck']
    }]
  }
};
