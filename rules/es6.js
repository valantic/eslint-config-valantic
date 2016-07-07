module.exports = {
  'rules': {
    // enforces no braces where they can be omitted
    // http://eslint.org/docs/rules/arrow-body-style
    // - Force a more consistent coding style
    'arrow-body-style': [2, 'always'],

    // require or disallow method and property shorthand syntax for object literals
    'object-shorthand': [1, 'always', {
      'avoidQuotes': true
    }],

    // enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': [2, 'never'],

    // require const declarations for variables that are never reassigned after declared
    'prefer-const': 1,

    // require rest parameters instead of arguments
    'prefer-rest-params': 1
  }
};
