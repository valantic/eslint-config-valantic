# Vue config (`vue.js`)

For Vue 3 projects, with or without TypeScript. Use this single entry point rather than combining it with
[`typescript.js`](./typescript.md) — if the project uses TypeScript in `.vue` files (`<script lang="ts">`), make sure
the TypeScript parser setup for `.vue` files is in place so those files parse correctly (see the real-world example
linked from the [README](../README.md#vue-support)).

## What it extends

- [`eslint-plugin-vue`](https://eslint.vuejs.org/)'s `flat/recommended` config
- [`index.js`](./base-config.md) (spread in full)
- `rules/vue.js`

## What it adds/overrides

- The `jsdoc` and `vue` plugins.
- `rules/vue.js`, a large set of Vue-specific rules layered after `index.js`, including:
  - `indent` is turned off in favor of `vue/script-indent`, and `max-len` is turned off in favor of `vue/max-len`
    (both base rules don't work well with `.vue` file structure).
  - `jsdoc/require-jsdoc` is re-enabled with Vue-appropriate targets (method definitions and class declarations,
    not every function).
  - Vue naming/casing rules: `vue/component-definition-name-casing` and
    `vue/component-name-in-template-casing` (kebab-case), `vue/component-options-name-casing` (camelCase).
  - `vue/component-api-style` allows both `composition` and `options` style.
  - `vue/no-unsupported-features` is pinned to `^2.6.0`.
  - Many formatting rules mirroring the base `style.js` set, adapted for template/SFC syntax
    (`vue/max-attributes-per-line`, `vue/html-self-closing`, `vue/attributes-order`, `vue/object-curly-newline`, etc.).
  - `vue/no-restricted-html-elements` forbids a `<script>` element inside a template.
- A final override object re-enables `import/extensions` as a warning (`['warn', 'always']`) — `rules/vue.js` turns
  it off, but this last entry in the array wins. See
  [rule-organization.md](./rule-organization.md#how-the-configs-compose).

## Required peer packages

`eslint-plugin-vue`, plus everything [`index.js`](./base-config.md) needs (`eslint`, `eslint-plugin-import`,
`eslint-plugin-jsdoc`, `eslint-plugin-unicorn`). Add `typescript-eslint` too if using `<script lang="ts">`. See the
[Vue support](../README.md#vue-support) section of the README.

## Usage

```js
// eslint.config.js
import eslintConfigValantic from 'eslint-config-valantic/vue.js';

export default [
  ...eslintConfigValantic,
  {
    rules: {
      // project-specific overrides
    },
  },
];
```
