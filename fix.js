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
        minItems: 3, // 2 was not used because of [key, value] cases
      }
    }],
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'vue/object-curly-spacing': ['error', 'always'],
  }
};
