module.exports = {
  rules: {
    // Require or disallow trailing commas
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': 0,

    // Disallow use of constant expressions in conditions
    'no-constant-condition': 2,

    // Disallow unnecessary parentheses
    // http://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': [2, 'all', {
      returnAssign: false, // Allows parenthesis in fat arrow returns
      nestedBinaryExpressions: false,
      enforceForArrowConditionals: false // Allows parenthesis for condition ins fat arrow returns
    }],

    // Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': 2,

    // Ensure JSDoc comments are valid
    // http://eslint.org/docs/rules/valid-jsdoc
    // - force uniform jsdoc style
    'valid-jsdoc': [2, {
      requireReturnDescription: false,
      requireReturn: false,
      prefer: {
        return: 'returns',
        arg: 'param',
        argument: 'param'
      },
      preferType: {
        boolean: 'Boolean',
        number: 'Number',
        object: 'Object',
        string: 'String',
        node: 'Node'
      },
      matchDescription: '.+\\.$'
    }]
  }
};
