# Overview

`eslint-config-valantic` is valantic's shared
[flat-config](https://eslint.org/docs/latest/use/configure/configuration-files) package for ESLint. It does not lint
anything by itself — it is a set of plain flat-config arrays that a consuming project imports into its own
`eslint.config.js`, the same way you would depend on a shared Prettier or TypeScript config.

## Why a shared config

Centralizing the rules means every project gets the same JavaScript/TypeScript/Vue rule set on day one, a rule
change or fix benefits every consumer once released, and code review across projects uses the same baseline style.

The base style follows [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn)'s recommended
config, with a documented set of overrides where the team decided unicorn's defaults did not fit daily work — see
[base-config.md](./base-config.md) and [rule-organization.md](./rule-organization.md).

## Distribution

The package is published to the npm registry. There is no build step: `main` is `index.js`, and the package ships
its root `.js` files as-is — consumers `import` the flat-config source directly. `package.json`'s `files` field is
an allow-list (`index.js`, `fix.js`, `prettier.js`, `prettier-vue.js`, `typescript.js`, `vue.js`, `rules/`), so only
those are published; dev/test files (`tests/`, `snapshots/`, `test-setup.ts`, docs, CI config) are not part of the
installed package.

See the main [README](../README.md#quickstart) for install and setup instructions.

## Peer dependencies

`eslint` (`>= 9`) and `eslint-plugin-import` (`2.x`) are declared as `peerDependencies` in `package.json`. Every
other plugin a specific config needs (`eslint-plugin-jsdoc`, `eslint-plugin-unicorn`, `eslint-plugin-vue`,
`typescript-eslint`) is only a devDependency of this repo (needed to run its own self-tests) — a consuming project
must install whichever of those its chosen flavor needs. Each config's doc below lists what it needs.

## Which flavor to pick

| Entry point | Use when |
|---|---|
| [`base-config.md`](./base-config.md) (`index.js`) | Plain JavaScript project |
| [`typescript.md`](./typescript.md) (`typescript.js`) | TypeScript project (no Vue) |
| [`vue.md`](./vue.md) (`vue.js`) | Vue 3 project (with or without TypeScript) |
| [`fix.md`](./fix.md) (`fix.js`) | Layered on top, for a separate `--fix` run |
| [`prettier.md`](./prettier.md) (`prettier.js`) | Layered on top, for projects also running Prettier |
| [`prettier-vue.md`](./prettier-vue.md) (`prettier-vue.js`) | Layered on top, for Vue projects also running Prettier |

`typescript.js` and `vue.js` both build on `index.js` internally (they import and spread it), so you never combine
`index.js` with `typescript.js` or `vue.js` yourself — pick the single most specific entry point for your stack. See
each flavor's doc for exactly what it adds and how to layer it into `eslint.config.js`.
