# Base config (`index.js`)

The foundation config for plain JavaScript projects. `typescript.js` and `vue.js` both import and spread this
config internally, so a TypeScript or Vue project should use those instead — see [typescript.md](./typescript.md)
and [vue.md](./vue.md).

## What it extends

- [`@eslint/js`](https://www.npmjs.com/package/@eslint/js) `eslint.configs.recommended`
- [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn)'s `recommended` config

## What it overrides

A documented block of unicorn rules the team decided don't fit daily use, e.g. `unicorn/no-null`,
`unicorn/prefer-ternary`, `unicorn/prefer-global-this`, `unicorn/no-array-for-each`, `unicorn/no-array-reduce`,
`unicorn/switch-case-braces`, `unicorn/explicit-length-check`, `unicorn/no-anonymous-default-export`,
`unicorn/prefer-query-selector` and `unicorn/numeric-separators-style` are turned off; `unicorn/prevent-abbreviations`
keeps an allow-list of common abbreviations used across valantic code (`props`, `ref`, `el`, `args`, `arr`, `prev`,
`utils`, and others). See the top of `index.js` for the full, current list.

## What it adds

- Shared `languageOptions.globals`: browser, Node, AMD, Mocha and Jasmine globals (via the
  [`globals`](https://www.npmjs.com/package/globals) package), plus `ecmaVersion: 'latest'`.
- The `import` and `jsdoc` plugins.
- The six category rule files under `rules/`: `best-practices.js`, `errors.js`, `import.js`, `style.js`,
  `variables.js`, `es6.js`. See [rule-organization.md](./rule-organization.md) for how these are split and how to
  change a rule.

## Required peer packages

`eslint`, `eslint-plugin-import`, `eslint-plugin-jsdoc`, `eslint-plugin-unicorn` — see the
[Quickstart](../README.md#quickstart) install command.

## Usage

```js
// eslint.config.js
import eslintConfigValantic from 'eslint-config-valantic';

export default [
  ...eslintConfigValantic,
  {
    rules: {
      // project-specific overrides
    },
  },
];
```
