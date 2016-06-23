module.exports = {
  'rules': {
    // enforces consistent naming when capturing the current execution context
    'consistent-this': [2, '_that'],

    // require or disallow named function expressions
    'func-names': 0,

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length': [1, {
      'min': 3,
      'properties': 'always',
      'exceptions': ['i', 'j', 'e', '$', '_', 'id']
    }],

    // enforces empty lines around comments
    // - Force cleaner comment style
    'lines-around-comment': [2, {
      'beforeBlockComment': true
    }],

    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    // - Weaken max line length rule
    'max-len': [1, 110, 2, {
      'ignoreTrailingComments': true,
      'ignoreUrls': true
    }],

    // enforce a maximum number of parameters in function definitions
    // - Force max number of function params
    'max-params': [2, 3],

    // allow/disallow an empty newline after var statement
    // - Force cleaner code style
    'newline-after-var': [1, 'always'],

    // http://eslint.org/docs/rules/newline-before-return
    // - Force cleaner code style
    'newline-before-return': 2,

    // disallow bitwise operators
    'no-bitwise': 1,

    // disallow use of the continue statement
    'no-continue': 1,

    // disallow if as the only statement in an else block
    'no-lonely-if': 1,

    // disallow mixes of different operators
    // - Force cleaner code style
    'no-mixed-operators': 2,

    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': [2, { 'max': 1, 'maxEOF': 1 }],

    // disallow negated conditions
    // http://eslint.org/docs/rules/no-negated-condition
    // - Encourage cleaner code style
    'no-negated-condition': 0,

    // disallow trailing whitespace at the end of lines
    // - Weaken for better IDE support
    'no-trailing-spaces': [1, {
      'skipBlankLines': true
    }],

    // enforce consistent line breaks inside braces
    'object-curly-newline': [2, {
      'multiline': true,
      'minProperties': 2
    }],

    // enforce placing object properties on separate lines
    // - Encourage cleaner code style
    // - Number of attributes is handled by object-curly-newline
    'object-property-newline': [1, {
      allowMultiplePropertiesPerLine: true
    }],

    // require assignment operator shorthand where possible or prohibit it entirely
    // - Encourage cleaner code style
    'operator-assignment': [1, 'always'],
    
    // enforce operators to be placed before or after line breaks
    // - Encourage cleaner code style
    'operator-linebreak': [1, 'before'],

    // require quotes around object literal property names
    // - Force cleaner code style
    'quote-props': [2, 'consistent-as-needed'],

    // do not require jsdoc
    // http://eslint.org/docs/rules/require-jsdoc
    // - Force code documentation
    'require-jsdoc': [1, {
      'require': {
        'FunctionDeclaration': true,
        'MethodDefinition': true,
        'ClassDeclaration': true
      }
    }],

    // enforce consistent spacing before function definition opening parenthesis
    'space-before-function-paren': [2, "never"],

    // Require or disallow spaces before/after unary operators
    // - Force cleaner code style
    'space-unary-ops': 2,
    
    // require regex literals to be wrapped in parentheses
    // - Force cleaner code style
    'wrap-regex': 2
  }
};
