module.exports = {
  rules: {
    '@typescript-eslint/ban-ts-comment': ['error',
      {
        'ts-ignore': 'allow-with-description'
      },
    ],
    '@typescript-eslint/member-delimiter-style': 'warn', // fixable
    '@typescript-eslint/method-signature-style': ['error', 'method'],

    '@typescript-eslint/naming-convention': [
      'error',
      { // Enforces PascalCase and disallows prefixes.
        selector: ['typeLike'],
        format: ['StrictPascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
        custom: {
          regex: '^[IET][A-Z]',
          match: false
        }
      },
      { // Enforces singular for enum names.
        selector: ['enum'],
        format: ['StrictPascalCase'],
        custom: {
          regex: '(?<![u])s$',
          match: false,
        }
      },
      { // Enforces singular for enum names.
        selector: ['enumMember'],
        format: ['StrictPascalCase'],
      }
    ],

    // see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    'no-shadow': 'off',

    '@typescript-eslint/member-delimiter-style': 'error',

    '@typescript-eslint/no-shadow': 'error',

    '@typescript-eslint/no-var-requires': 'off', // We only use require in styleguide context, where it is most likely always used as variable.

    'no-undefined': 'off', // 'undefined' is required in TS context.

    // prevent any from being used as type
    '@typescript-eslint/no-explicit-any': ['error', {
      fixToUnknown: false,
      ignoreRestArgs: true,
    }],

    // require-jsdoc is deprecated, see https://eslint.org/blog/2018/11/jsdoc-end-of-life
    'valid-jsdoc': 'off',
  },
};
