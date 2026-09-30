# TypeScript config (`typescript.js`)

For TypeScript projects that are not Vue projects. A Vue project using TypeScript should use
[`vue.js`](./vue.md) instead — it does not need to be combined with `typescript.js`.

## What it extends

- [`typescript-eslint`](https://typescript-eslint.io/)'s `configs.recommended`
- [`index.js`](./base-config.md) (spread in full)
- `rules/typescript.js`

## What it adds/overrides

- The TypeScript parser (`tseslint.parser`) and browser/Node globals via `languageOptions`.
- `rules/typescript.js`, applied after `index.js`, so it wins on any conflicting rule, notably:
  - `@typescript-eslint/naming-convention`: enforces `StrictPascalCase` for types (disallowing `I`/`E`/`T` prefixes)
    and enums, and singular enum/enum-member names.
  - `@typescript-eslint/no-explicit-any`: errors on explicit `any` (rest args are exempted).
  - `@typescript-eslint/no-shadow` replaces the base `no-shadow` (turned off) for correct TS-aware shadow detection.
  - `@typescript-eslint/ban-ts-comment`: allows `@ts-ignore` only with a description.
  - `@typescript-eslint/method-signature-style`: enforces `method` style.
  - `no-undefined` is turned off (the base config errors on it), since `undefined` is a legitimate type-context value
    in TypeScript.
  - `require-jsdoc` / `valid-jsdoc` are turned off (deprecated ESLint core rules).

## Required peer packages

`typescript-eslint`, plus everything [`index.js`](./base-config.md) needs (`eslint`, `eslint-plugin-import`,
`eslint-plugin-jsdoc`, `eslint-plugin-unicorn`) — see the [TypeScript support](../README.md#typescript-support)
section of the README.

## Usage

```js
// eslint.config.js
import eslintConfigValantic from 'eslint-config-valantic/typescript.js';

export default [
  ...eslintConfigValantic,
  {
    rules: {
      // project-specific overrides
    },
  },
];
```
