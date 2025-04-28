export default [
  {
    rules: {
      // Require or disallow trailing commas
      // https://eslint.org/docs/rules/comma-dangle
      'comma-dangle': ['off'],

      // Disallow use of constant expressions in conditions
      'no-constant-condition': ['error'],

      // Disallow unnecessary parentheses
      // http://eslint.org/docs/rules/no-extra-parens
      'no-extra-parens': [
        'error', 'all', {
          returnAssign: false, // Allows parenthesis in fat arrow returns
          nestedBinaryExpressions: false,
          enforceForArrowConditionals: false, // Allows parenthesis for condition ins fat arrow returns
        },
      ],

      // This rule would disallow the use of number literals that immediately lose precision at runtime.
      // https://eslint.org/docs/rules/no-loss-of-precision
      'no-loss-of-precision': ['error'],

      // Avoid code that looks like two expressions but is actually one
      // https://eslint.org/docs/rules/no-unexpected-multiline
      'no-unexpected-multiline': ['error'],

      // This rule aims to detect and disallow loops that can have at most one iteration.
      // https://eslint.org/docs/rules/no-unreachable-loop
      'no-unreachable-loop': ['error'],

      // Ensure JSDoc comments are valid
      // http://eslint.org/docs/rules/valid-jsdoc
      'jsdoc/require-returns': 0,
      'jsdoc/require-returns-description': 0,
      'jsdoc/match-description': ['error', { matchDescription: '.+\\.($|\\n)' }],
    },
  },
];
