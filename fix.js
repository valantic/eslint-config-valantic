const fix = require('./utils/fix-rules');

module.exports = {
  rules: {
    ...fix.rules,
    'array-element-newline': ['error', {
      ArrayExpression: 'consistent',
      ArrayPattern: { // Destructuring
        multiline: true,
        minItems: 3, // 2 was not used because of [key, value] cases
      }
    }],
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],

    // enforces empty lines around comments.
    // - Force cleaner comment style.
    'lines-around-comment': ['error', {
      beforeBlockComment: true,
      allowBlockStart: true,
      allowObjectStart: true
    }],
  }
};
