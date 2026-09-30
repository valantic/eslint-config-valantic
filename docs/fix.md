# Fix config (`fix.js`)

> [!WARNING]
> Per the [README](../README.md#--fix), this config has not been tested since the update to ESLint 9. Treat it as a
> legacy/optional feature rather than a primary supported path.

A small, standalone rule set meant to be layered on top of one of the other configs specifically for a separate
`--fix` run, so `--fix` can auto-apply certain stylistic changes without those same rules being enforced (and
failing CI) during normal linting.

## What it contains

A fixed set of formatting rules, independent of `index.js`/`typescript.js`/`vue.js`:

- `comma-dangle`: `always-multiline` for arrays/objects/imports/exports, `never` for function calls.
- `array-element-newline`, `array-bracket-newline`, `array-bracket-spacing`: consistent array formatting.
- `vue/object-curly-spacing`: `always`.

## Required peer packages

Same as whichever base/typescript/vue config it is layered on top of.

## Usage

Per the [README](../README.md#--fix), add a dedicated fix config file that extends this one and wire it into a
separate `--fix` npm script, rather than including `fix.js` in the main `eslint.config.js`:

```js
// e.g. eslint.config.fix.js
import eslintConfigValantic from 'eslint-config-valantic/fix.js';

export default [
  ...eslintConfigValantic,
  {
    rules: {
      // project-specific overrides
    },
  },
];
```
