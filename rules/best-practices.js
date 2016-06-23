module.exports = {
  'rules': {
    // enforce return statements in callbacks of array methods
    'array-callback-return': 1,

    // enforce consistent brace style for all control statements
    'curly': 2,
    
    // enforce consistent newlines before and after dots
    'dot-location': [2, 'property'],
    
    // disallow reassignment of function parameters
    // disallow parameter object manipulation
    // rule: http://eslint.org/docs/rules/no-param-reassign.html
    // - Allowed to support default fallback: var foo = foo || 'baa';
    'no-param-reassign': 0,
    
    // disallow unmodified conditions of loops
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 2,
    
    // disallow unnecessary .call() and .apply()
    'no-useless-call': 2,
    
    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': 1
  }
};
