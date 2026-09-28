# Rule organization

## Rule files are categories, not flavors

The rule overrides live under `rules/`, one file per rule *category* rather than one file per config flavor:

- `best-practices.js`, `errors.js`, `es6.js`, `import.js`, `style.js`, `variables.js` — spread into every
  JS/TS/Vue project via `index.js`.
- `typescript.js` — TypeScript-only rules, spread by `typescript.js`.
- `vue.js` — Vue-only rules, spread by `vue.js`.

Each file exports a flat-config array (a single object) containing just a `rules` block for that category. This
mirrors the old eslintrc-era convention of splitting rules by ESLint's own doc categories (best practices, possible
errors, ES6, style, variables), kept here as an organizing principle even though flat config does not require it.
Splitting this way keeps a stylistic change (e.g. tweaking `key-spacing` in `style.js`) separate from a correctness
change (e.g. tweaking `no-undefined` in `variables.js`).

## How the configs compose

`index.js` layers ESLint's own recommended config, then `eslint-plugin-unicorn`'s recommended config, then a
documented set of unicorn overrides, then shared `languageOptions` (globals), then the six category rule files from
`rules/`.

`typescript.js` and `vue.js` do not duplicate any of this — they import `index.js` and spread it into their own
array, adding their own plugin-recommended config and category file on top:

```js
// typescript.js (simplified)
export default [
  ...tseslint.configs.recommended,
  ...index,
  ...typescriptRules,
  { languageOptions: { parser: tseslint.parser, /* ... */ } },
];
```

```js
// vue.js (simplified)
export default [
  ...pluginVue.configs['flat/recommended'],
  ...index,
  ...vueRules,
  { plugins: { jsdoc: jsdocPlugin, vue: vuePlugin }, rules: { 'import/extensions': ['warn', 'always'] } },
];
```

Because flat config is an ordered array where later entries override earlier ones on the same rule, this order means
plugin-recommended defaults first, then valantic's base rules, then valantic's category-specific rules, then any
final override object — so the most specific, most intentional rule choice wins. For example, `rules/vue.js` turns
`import/extensions` off for Vue files, but `vue.js` itself re-enables it as a warning in the object appended last,
so the effective value in a Vue project is `['warn', 'always']`.

`fix.js`, `prettier.js` and `prettier-vue.js` are standalone, small arrays not tied into this inheritance chain —
they are meant to be spread in addition to one of the base/typescript/vue configs by the consumer, not used alone.

## The self-test

There is no traditional unit test suite — the "tests" are ESLint itself, run against three intentionally-broken
fixture files:

- `tests/test-javascript.js` — linted with `index.js`
- `tests/test-typescript.ts` — linted with `typescript.js`
- `tests/test-vue.vue` — linted with `vue.js`

`test-setup.ts` drives this: for a given flavor (`js`/`ts`/`vue`) it runs ESLint against the fixture with the
matching config and pipes the JSON output into `test-result-verify.ts`, which checks the total error/warning count
against the numbers hardcoded in `test-setup.ts`'s `TEST_CONFIG`, then diffs the full JSON diagnostics against a
stored snapshot under `snapshots/`.

Three run modes exist for `node test-setup.ts <flavor> [mode]`:

- `snapshot` (default, what `npm test` runs) — count check and snapshot diff, writing the snapshot if missing.
- `ci` (what CI runs, `npm run test:ci`) — count check only, no snapshot read/write.
- `raw` (`npm run test:raw`) — plain ESLint stylish output, no assertions, for eyeballing.

## Changing a shared rule

Because every consumer picks up a new version transparently, changing a rule here can introduce new lint results
across every consuming project the next time it bumps this dependency. Before changing or adding a rule:

1. Pick the category file it belongs to (`rules/best-practices.js`, `rules/style.js`, etc., or `rules/typescript.js`
   / `rules/vue.js` if flavor-specific) — keep the existing category split.
2. Run `npm test` to see the current baseline pass, make the change, run it again to see what shifts.
3. If the new counts are intentional, update `expectedErrors`/`expectedWarnings` in `test-setup.ts`'s `TEST_CONFIG`
   for the affected flavor(s), then refresh the snapshot with `npm run snapshop:update`.
4. Commit the updated fixture expectations and snapshot together with the rule change.
5. Add a changelog entry (see `CONTRIBUTING.md`) so consumers know what changed when they bump the version.

To verify a rule without touching committed snapshots, use `npm run test:raw` or
`npx eslint <fixture> --config <flavor>.js` directly.
