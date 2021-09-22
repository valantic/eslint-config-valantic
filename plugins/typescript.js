module.exports = {
	// see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
	'no-shadow': 'off',
	'@typescript-eslint/no-shadow': 'error',

	// prevent any from being used as type
	'@typescript-eslint/no-explicit-any': [2, {
		fixToUnknown: false,
		ignoreRestArgs: true,
	}],

	// require-jsdoc is deprecated, see https://eslint.org/blog/2018/11/jsdoc-end-of-life
	'require-jsdoc': 0,
	'valid-jsdoc': 0,
};
