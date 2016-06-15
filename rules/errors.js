module.exports = {
  'rules': {
    // require or disallow trailing commas
    'comma-dangle': [2, 'never'],

    // disallow use of constant expressions in conditions
    'no-constant-condition': 2,

    // disallow unnecessary parentheses
    // http://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': 2,

    // Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': 2,

    // ensure JSDoc comments are valid
    // http://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': [2, {
      'requireReturn': false
    }]
  }
};
