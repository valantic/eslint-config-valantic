# Prettier config (`prettier.js`)

Turns off ESLint stylistic rules that conflict with [Prettier](https://prettier.io/). Layer it on top of one of the
base/typescript/vue configs in any project that also runs Prettier — later entries in the flat-config array win, so
this must come after the config it applies to.

## What it contains

Sets a fixed list of stylistic rules to `'off'`: `arrow-body-style`, `arrow-parens`, `function-paren-newline`,
`implicit-arrow-linebreak`, `lines-around-comment`, `no-confusing-arrow`, `no-extra-parens`, `object-curly-newline`,
`operator-linebreak`, `quote-props`, `space-before-function-paren`, `wrap-iife`, `wrap-regex`.

For a Vue project, use [`prettier-vue.js`](./prettier-vue.md) instead, which extends this config with Vue-specific
additions.

## Required peer packages

None beyond whichever base/typescript config it is layered on top of. This config does not require Prettier itself
to be installed as a dependency of `eslint-config-valantic` — the project applies Prettier separately.

## Usage

```js
// eslint.config.js
import eslintConfigValantic from 'eslint-config-valantic';
import prettierConfig from 'eslint-config-valantic/prettier.js';

export default [
  ...eslintConfigValantic,
  ...prettierConfig,
];
```
