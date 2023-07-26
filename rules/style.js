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
    'capitalized-comments': ['error', 'always', {
      ignorePattern: `[${capitalizedCommentsIgnore}]`,
      ignoreInlineComments: true // Allow commenting of function params and similar.
    }],

    // Enforces consistent naming when capturing the current execution context.
    'consistent-this': ['error', '_that'],

    // This option enforces minimum and maximum identifier lengths.
    // (variable names, property names etc.)
    'id-length': ['warn', {
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
        'is', // Vue
        'DS', // ember-data
        'el', // Vue
        'on', // Vue
        'vm', // Vue
        'v$', // Vuelidate
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

    // enforces empty lines around comments.
    // - Force cleaner comment style.
    'lines-around-comment': ['error', {
      beforeBlockComment: true,
      allowBlockStart: true,
      allowObjectStart: true
    }],

    // Specify the maximum length of a line in your program.
    // http://eslint.org/docs/rules/max-len
    // - Weaken max line length rule.
    'max-len': ['warn', 130, 2, {
      ignoreComments: true,
      ignoreUrls: true,
      ignorePattern: "[\''`][,;]?$", // Allows to use long strings. 'ignoreStrings' did not work, because it was also true if only part of line used strings.
    }],

    // This rule enforces a maximum number of lines per file.
    // https://eslint.org/docs/latest/rules/max-lines#rule-details
    'max-lines': ['error', {
      max: 1000,
      skipBlankLines: true,
      skipComments: true,
    }],

    // enforce a maximum number of parameters in function definitions.
    // - Force max number of function params.
    'max-params': ['error', 3],

    // Disallow bitwise operators.
    'no-bitwise': ['warn'],

    // Disallow use of the continue statement.
    'no-continue': ['warn'],

    // Disallow if as the only statement in an else block.
    'no-lonely-if': ['warn'],

    // Disallow mixes of different operators
    // - Force cleaner code style
    'no-mixed-operators': ['error'],

    // Disallow trailing whitespace at the end of lines.
    // - Weaken for better IDE support.
    'no-trailing-spaces': ['warn', {
      ignoreComments: true,
      skipBlankLines: true
    }],

    // Disallow dangling underscores in identifiers (no-underscore-dangle).
    // http://eslint.org/docs/rules/no-underscore-dangle
    // - Allow to touch private values of this.
    'no-underscore-dangle': ['error', {
      allowAfterThis: true,
      allow: ['_that']
    }],

    // Enforce consistent line breaks inside braces.
    // - Currently (2016-06-23) not working with single properties.
    // 'object-curly-newline': ['error', {
    //   'multiline': true,
    //   'minProperties': 2
    // }],

    // Enforce placing object properties on separate lines.
    // - Encourage cleaner code style.
    // - Number of attributes is handled by object-curly-newline.
    'object-property-newline': ['warn', {
      allowAllPropertiesOnSameLine: true
    }],

    // Require assignment operator shorthand where possible or prohibit it entirely.
    // - Encourage cleaner code style
    'operator-assignment': ['warn', 'always'],

    // Enforce operators to be placed before or after line breaks.
    // - Encourage cleaner code style.
    'operator-linebreak': ['warn', 'before'],

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
    'quote-props': ['error', 'consistent-as-needed'],

    // Do not require jsDoc.
    // http://eslint.org/docs/rules/require-jsdoc
    // - Force code documentation
    'require-jsdoc': ['off'], // Handled by jsdoc plugin.

    // Enforce consistent spacing before function definition opening parenthesis.
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],

    // Require or disallow spaces before/after unary operators.
    // - Force cleaner code style
    'space-unary-ops': ['error'],

    // Require regex literals to be wrapped in parentheses.
    // - Force cleaner code style
    'wrap-regex': 2,

    // overwrites rule from eslint-config-airbnb-base
    'no-plusplus': [
      'error', {
        allowForLoopAfterthoughts: true,
      }
    ]
  }
};
