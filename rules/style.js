var capitalizedCommentsIgnore = [
  // Vue
  'activated\\(\\)',
  'components:',
  'computed:',
  'created\\(\\)',
  'deactivated\\(\\)',
  'destroyed\\(\\)',
  'vue',
  'watch:',

  // Ember
  'ember'
].join('|');

module.exports = {
  rules: {
    // Enforce or disallow capitalization of the first letter of a comment.
    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': [2, 'always', {
      ignorePattern: `[${capitalizedCommentsIgnore}]`,
      ignoreInlineComments: true // Allow commenting of function params and similar.
    }],

    // Enforces consistent naming when capturing the current execution context.
    'consistent-this': [2, '_that'],

    // Require or disallow named function expressions.
    'func-names': 0,

    // This option enforces minimum and maximum identifier lengths.
    // (variable names, property names etc.)
    'id-length': [1, {
      min: 3,
      properties: 'always',
      exceptions: [
        '$',
        'a',
        'b',
        'e',
        'i',
        'in', // ember-cp-validations
        'j',
        'to', // From/to
        'x',
        'y',
        '_', // _Lowdash
        'fs', // ember
        'gt', // ember-cp-validations
        'id',
        'DS', // ember-data
        'el', // Vue
        'on', // Vue
        'vm', // Vue
        'xs', // Bootstrap
        'sm', // Bootstrap
        'md', // Bootstrap
        'lg', // Bootstrap
        'xl', // Bootstrap
        'de', // Locale
        'en', // Locale
        'it', // Locale
        'fr', // Locale
      ]
    }],

    // Enforce the location of arrow function bodies with implicit returns.
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': [2, 'beside'],

    // Enforce consistent spacing between keys and values in object literal properties.
    // http://eslint.org/docs/rules/key-spacing
    // - Allow value alignment for multiline.
    'key-spacing': [2, {
      singleLine: {
        mode: 'strict'
      },
      multiLine: {
        mode: 'minimum'
      }
    }],

    // enforces empty lines around comments.
    // - Force cleaner comment style.
    'lines-around-comment': [2, {
      beforeBlockComment: true,
      allowBlockStart: true,
      allowObjectStart: true
    }],

    // Specify the maximum length of a line in your program.
    // http://eslint.org/docs/rules/max-len
    // - Weaken max line length rule.
    'max-len': [1, 130, 2, {
      ignoreComments: true,
      ignoreUrls: true,
      ignorePattern: "[\"'`][,;]?$", // Allows to use long strings. 'ignoreStrings' did not work, because it was also true if only part of line used strings.
    }],

    // enforce a maximum number of parameters in function definitions.
    // - Force max number of function params.
    'max-params': [2, 3],

    // Disallow bitwise operators.
    'no-bitwise': 1,

    // Disallow use of the continue statement.
    'no-continue': 1,

    // Disallow if as the only statement in an else block.
    'no-lonely-if': 1,

    // Disallow mixes of different operators
    // - Force cleaner code style
    'no-mixed-operators': 2,

    // Disallow multiple empty lines and only one newline at the end.
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 1 }],

    // Disallow negated conditions.
    // http://eslint.org/docs/rules/no-negated-condition
    // - Encourage cleaner code style.
    'no-negated-condition': 0,

    // Disallow trailing whitespace at the end of lines.
    // - Weaken for better IDE support.
    'no-trailing-spaces': [1, {
      ignoreComments: true,
      skipBlankLines: true
    }],

    // Disallow dangling underscores in identifiers (no-underscore-dangle).
    // http://eslint.org/docs/rules/no-underscore-dangle
    // - Allow to touch private values of this.
    'no-underscore-dangle': [2, {
      allowAfterThis: true,
      allow: ['_that']
    }],

    // Enforce consistent line breaks inside braces.
    // - Currently (2016-06-23) not working with single properties.
    // 'object-curly-newline': [2, {
    //   'multiline': true,
    //   'minProperties': 2
    // }],

    // Enforce placing object properties on separate lines.
    // - Encourage cleaner code style.
    // - Number of attributes is handled by object-curly-newline.
    'object-property-newline': [1, {
      allowAllPropertiesOnSameLine: true
    }],

    // Require assignment operator shorthand where possible or prohibit it entirely.
    // - Encourage cleaner code style
    'operator-assignment': [1, 'always'],

    // Enforce operators to be placed before or after line breaks.
    // - Encourage cleaner code style.
    'operator-linebreak': [1, 'before'],

    // Require or disallow padding lines between statements.
    // http://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'case'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'default'
      },
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*'
      },
      {
        blankLine: 'any',
        prev: 'directive',
        next: 'directive'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'if'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ],

    // Require quotes around object literal property names.
    // - Force cleaner code style
    'quote-props': [2, 'consistent-as-needed'],

    // Do not require jsDoc.
    // http://eslint.org/docs/rules/require-jsdoc
    // - Force code documentation
    'require-jsdoc': [2, {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
        ArrowFunctionExpression: true,
        FunctionExpression: true
      }
    }],

    // Enforce consistent spacing before function definition opening parenthesis.
    'space-before-function-paren': [2, 'never'],

    // Require or disallow spaces before/after unary operators.
    // - Force cleaner code style
    'space-unary-ops': 2,

    // Require regex literals to be wrapped in parentheses.
    // - Force cleaner code style
    'wrap-regex': 2
  }
};
