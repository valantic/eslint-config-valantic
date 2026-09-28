# Prettier + Vue config (`prettier-vue.js`)

For Vue projects that also run [Prettier](https://prettier.io/). Extends [`prettier.js`](./prettier.md) with a few
Vue-specific rule disables. Layer it on top of [`vue.js`](./vue.md) — later entries in the flat-config array win, so
this must come after the Vue config.

## What it extends

- [`prettier.js`](./prettier.md) (spread in full)

## What it adds

Turns off three Vue-specific stylistic rules that would otherwise conflict with Prettier's formatting:
`vue/html-self-closing`, `vue/object-curly-newline`, `vue/singleline-html-element-content-newline`.

## Required peer packages

Same as [`vue.js`](./vue.md) (`eslint-plugin-vue`, plus everything `index.js` needs).

## Usage

```js
// eslint.config.js
import eslintConfigValantic from 'eslint-config-valantic/vue.js';
import prettierConfig from 'eslint-config-valantic/prettier-vue.js';

export default [
  ...eslintConfigValantic,
  ...prettierConfig,
];
```
