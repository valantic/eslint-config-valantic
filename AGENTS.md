# AGENTS.md

This file provides guidance to AI coding agents (Claude Code, Codex, Cursor, Copilot, etc.) when working with code in
this repository.

## What this is

`eslint-config-valantic` is valantic's shared ESLint flat-config package for JavaScript, TypeScript and Vue projects.
It is published to the npm registry (see `repository.url` pointing at `github.com/valantic/eslint-config-valantic`,
and the README's plain `npm install eslint-config-valantic ...` instructions — no `github:` reference). Consumers
install it as a devDependency alongside its required peers (`eslint`, `eslint-plugin-import`, and, depending on which
config is used, `eslint-plugin-jsdoc`, `eslint-plugin-unicorn`, `eslint-plugin-vue`, `typescript-eslint`) and import
one of the exported config files directly into their own `eslint.config.js`, e.g.:

```js
import eslintConfigValantic from 'eslint-config-valantic';
// or: 'eslint-config-valantic/vue.js', '/typescript.js', '/fix.js'
```

There is no build step — `main` is `index.js` and the package ships its root JS files directly. `package.json`'s
`files` field is the allow-list (`index.js`, `fix.js`, `prettier.js`, `prettier-vue.js`, `typescript.js`, `vue.js`,
`rules/`) so only what consumers actually import is published — dev/test files (`tests/`, `snapshots/`,
`test-setup.ts`, docs, CI config) are excluded. Consumers import the config source as-is.

## Commands

- `npm test` — runs the full lint self-test for all three flavors (JS, TS, Vue) in snapshot mode:
  `node test-setup.ts js && node test-setup.ts ts && node test-setup.ts vue`.
- `npm run test:ci` — same three checks in `ci` mode (no snapshot read/write, just asserts expected error/warning
  counts). This is what CI (`.github/workflows/test.yml`) runs.
- `npm run test:raw` — same three checks in `raw` mode: runs ESLint with normal stylish output (no JSON, no
  count/snapshot verification) for eyeballing.
- `npm run snapshop:update` — regenerates the snapshots (`UPDATE_SNAPSHOTS=true npm run test`). Run this after
  intentionally changing rule output.
- To run a single flavor directly (e.g. only Vue): `node test-setup.ts vue` (or `ts`/`js`), optionally followed by
  `raw` or `ci` as a second argument.
- `npm run release` / `release:minor` / `release:major` — bumps the version and pushes tags. Do not run these unless
  explicitly asked.

There is no linter script for the repo's own source files and no separate unit test runner — the "tests" are ESLint
itself, run against fixture files under `tests/` and checked against expected error/warning counts and snapshots.

## Architecture

- `index.js` is the base config: ESLint recommended + `eslint-plugin-unicorn` recommended (with a documented block of
  project-specific unicorn overrides) + globals + the rule sets from `rules/` (`best-practices.js`, `errors.js`,
  `es6.js`, `import.js`, `style.js`, `variables.js`). Each file in `rules/` exports a flat-config array of rule
  overrides for one category.
- `typescript.js` extends `index.js` with `typescript-eslint` recommended plus `rules/typescript.js`, and sets the TS
  parser/globals.
- `vue.js` extends `index.js` with `eslint-plugin-vue`'s `flat/recommended` plus `rules/vue.js`.
- `fix.js` is a small standalone rule set meant to be layered on top of the other configs specifically for `--fix`
  runs (per the README, e.g. via a project's own `.eslintrc.fix.js`).
- `prettier.js` / `prettier-vue.js` turn off ESLint stylistic rules that conflict with Prettier; `prettier-vue.js`
  extends `prettier.js` with Vue-specific additions. Layer these on top of the other configs in projects using
  Prettier.
- All configs are plain flat-config arrays (ESM, `"type": "module"`) meant to be spread (`...eslintConfigValantic`)
  into a consumer's own `eslint.config.js`.
- Self-testing: `tests/test-javascript.js`, `test-typescript.ts`, `test-vue.vue` are fixture files with intentional
  violations. `test-setup.ts` lints each fixture with the matching config (`index.js`/`typescript.js`/`vue.js`),
  pipes JSON output through `test-result-verify.ts`, which checks the error/warning counts declared in
  `test-setup.ts`'s `TEST_CONFIG` and diffs against the stored snapshot in `snapshots/`. When adding or changing a
  rule, update the expected counts in `test-setup.ts` and refresh the snapshot with `npm run snapshop:update`.
- Peer dependencies that matter: `eslint` (`>= 9`) and `eslint-plugin-import` (`2.x`) are declared as peers — anything
  else a specific config needs (`eslint-plugin-vue`, `eslint-plugin-jsdoc`, `eslint-plugin-unicorn`,
  `typescript-eslint`) is only a devDependency here but must be installed by the consumer per the README's install
  instructions.

## Documentation

This repo keeps its own feature docs in a `docs/` folder (with an index at `docs/README.md`) — this is separate from
the workspace-level `docs/` at the root of `valantic/` and must not be skipped in favor of it.

- Every exported config flavor (`index.js`, `typescript.js`, `vue.js`, `fix.js`, `prettier.js`, `prettier-vue.js`)
  gets one Markdown file under `docs/` describing what it extends, what it adds/overrides, and how to layer it into a
  consumer's `eslint.config.js`.
- When adding, changing, or removing a config flavor or a notable rule override, update the matching doc in the same
  change — do not defer it to a follow-up task.
- `docs/README.md` is the index; add a one-line link to every new doc file there.
