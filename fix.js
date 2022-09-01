module.exports = {
  rules: {
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never"
    }],
    'array-element-newline': ['error', {
      ArrayExpression: 'consistent',
      ArrayPattern: { // Destructuring
        multiline: true,
        minItems: 2,
      }
    }],
    'array-bracket-newline': ['error', {
      multiline: true,
      minItems: 3, // 2 was not used because of [key, value] cases
    }],
    'array-bracket-spacing': ['error', 'never'],
  }
};
