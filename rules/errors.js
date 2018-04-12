module.exports = {
  rules: {
    // require or disallow trailing commas
    'comma-dangle': [2, 'never'],

    // disallow use of constant expressions in conditions
    'no-constant-condition': 2,

    // disallow unnecessary parentheses
    // http://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': [2, 'all', {
      returnAssign: false, // Allows parenthesis in fat arrow returns
      nestedBinaryExpressions: false,
      enforceForArrowConditionals: false // Allows parenthesis for condition ins fat arrow returns
    }],

    // Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': 2,

    // ensure JSDoc comments are valid
    // http://eslint.org/docs/rules/valid-jsdoc
    // - force uniform jsdoc style
    'valid-jsdoc': [2, {
      requireReturnDescription: false,
      requireReturn: false,
      prefer: {
        return: 'returns',
        arg: 'param',
        argument: 'param'
      }
    }]
  }
};
