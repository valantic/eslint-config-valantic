module.exports = {
  'rules': {
    // require constructor function names to begin with a capital letter
    // - Adding improved support for ember
    'new-cap': [2, {
      'newIsCap': true,
      "capIsNewExceptions": ["A"]
    }],

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
