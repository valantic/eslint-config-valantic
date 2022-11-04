module.exports = {
  rules: {
    '@typescript-eslint/ban-ts-comment': ['error',
      {
        'ts-ignore': 'allow-with-description'
      },
    ],

    // see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    '@typescript-eslint/no-var-requires': 'off', // We only use require in styleguide context, where it is most likely always used as variable.

    // prevent any from being used as type
    '@typescript-eslint/no-explicit-any': ['error', {
      fixToUnknown: false,
      ignoreRestArgs: true,
    }],

    // require-jsdoc is deprecated, see https://eslint.org/blog/2018/11/jsdoc-end-of-life
    'valid-jsdoc': 'off',
  },
};
