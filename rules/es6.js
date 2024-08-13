export default {
  rules: {
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: true
    }],

    // require constructor function names to begin with a capital letter
    // - Adding improved support for ember
    'new-cap': ['error', {
      newIsCap: true,
      capIsNewExceptions: ['A']
    }],

    // require or disallow method and property shorthand syntax for object literals
    'object-shorthand': ['warn', 'always', {
      avoidQuotes: true
    }],

    // enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': ['error', 'never'],

    // require const declarations for variables that are never reassigned after declared
    'prefer-const': ['warn'],

    // disallow use of optional chaining in contexts where the undefined value is not allowed
    'no-unsafe-optional-chaining': ['error', {
      disallowArithmeticOperators: true
    }],
  }
};
