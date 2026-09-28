# Changelog

## unreleased

- [docs] Added `docs/` with one file per exported config flavor (`base-config`, `typescript`, `vue`, `fix`,
  `prettier`, `prettier-vue`) plus `overview` and `rule-organization`, indexed in `docs/README.md`, moved out of the
  workspace-level knowledge base into this repo.
- [ci] Aligned `.github/workflows/test.yml` with the other shared-frontend repos: job `test`, step "Run tests"
  (the old label claimed checks that don't run here), Node version read from `.nvmrc`, token limited to
  `contents: read`.
- [ci] Added the shared `Security Scan` workflow (`.github/workflows/security.yml`, Trivy): scans the dependencies
  daily and on pull requests, opens/updates a `security` issue on CRITICAL/HIGH findings, closes it when clean, and
  uploads the results to the GitHub Security tab.
- [ci] `security.yml` now posts (and keeps updated) a pull request comment with the vulnerability breakdown when the
  Trivy scan fails a PR check, instead of only failing the job with no feedback beyond the raw log.
- [fix] `security.yml`: steps gated on `steps.trivy-sarif.outcome` now also require `always()`. Without it,
  GitHub Actions implicitly ANDs a bare `if:` with `success()`, so those steps were skipped exactly when the
  Trivy step failed — the case they exist to handle.
- [chore] Harmonized the copyright line in `LICENSE` to `2017-present, valantic CEC Schweiz AG`, matching the README.
- [docs] Restructured `AGENTS.md` to the shared outline and added the shared `## Working rules` section (git rules, no
  release/publish or dependency changes without approval, engineering priorities, `npm test` before finishing).
- [docs] Completed `CONTRIBUTING.md` with the shared outline (Getting started / Developing / Changelog / Releasing).
- [docs] Added a `## Contributing` section to `README.md` linking `CONTRIBUTING.md` (contribution and release steps).
- [build] `npm run release[:minor|:major]` now runs the shared `scripts/release.mjs` instead of plain `npm version`. It
  releases from an up-to-date `main` only, aborts on uncommitted changes or an empty `## unreleased` section, renames
  that section to `## vX.Y.Z`, updates the README version pin, and commits, tags (`vX.Y.Z`, annotated) and pushes.
- [ci] Added the `Release` workflow (`.github/workflows/release.yml`): pushing a `vX.Y.Z` tag creates the GitHub
  release, using that version's `CHANGELOG.md` section as release notes. It fails if the section is empty.
- [docs] Rewrote the release steps in `CONTRIBUTING.md` for the new release script: releases are made directly from
  `main` (no release branch), `npm publish` stays a manual step and the GitHub release is created by the workflow.
- [docs] Renamed `CHANGES.md` to `CHANGELOG.md` and adopted the shared shared-frontend changelog convention
  (`unreleased` / `vX.Y.Z` headings, `[feat]`/`[fix]`/… prefixes, `### Breaking Changes` with migration notes),
  documented in `AGENTS.md` and `CONTRIBUTING.md`. Released version headings were normalized to `## vX.Y.Z`; their
  entries are unchanged.
- [ci] Renamed the CI workflow to "CI Test" and updated it to `actions/checkout@v7`, `actions/setup-node@v7`,
  and Node 25.
- [docs] Streamlined `PULL_REQUEST_TEMPLATE.md` by removing the obsolete checklist sections.
- [feat] Allows to use 'ok' as a property name on id-length (Fetch `Response#ok`).
- [build] Added a `files` allow-list to `package.json` (and removed the now-redundant `.npmignore`) so the published
  package only ships `index.js`, `fix.js`, `prettier.js`, `prettier-vue.js`, `typescript.js`, `vue.js`, `rules/`,
  `package.json`, `LICENSE` and `README.md` — dev/test files (`tests/`, `snapshots/`, `test-setup.ts`, docs, CI
  config) are no longer installed by consumers.

## v18.1.0

* (change) Changed branch name master to main.
* (feature) Added CI workflow.
* (feature) Added a better check for the tests, that they have not changed.
* (change) Updated all packages to the latest patch version.
* (change) Updated documentation.
* (change) Added release scripts for tags.
* (change) Updated `"@types/node": "^24.12.0"` and run `npm audit fix`

## v18.0.0

* (Breaking) Updates ESLint to Version 9. The project is now based on flat configs. We don't support the old config
  style.
* (Breaking) Removes support for Node.js versions prior to 18. The minimum version is now Node.js 18.
* (Breaking) Removes support for Vue 2. The minimum version is now Vue 3.
* (Breaking) We changed our base ruleset from airbnb to
  eslint-plugin-unicorn (https://github.com/sindresorhus/eslint-plugin-unicorn).

## v17.0.0

* (Change) Adds 'v$' as an 'id-length' exception.
* (Breaking) Enables enforcement of singular case for enum names with @typescript-eslint/naming-convention.

## v16.0.1

* (Breaking) `@typescript-eslint/method-signature-style` enforces the method style in interfaces.
* (Breaking) Enforces `max-lines` by default.
* (Change) Disables `no-undefined` for TypeScript configuration.
* (Change) Updates config for `space-before-function-paren`.

## v16.0.0

* (Breaking) Adds `@typescript-eslint/naming-convention` rule to prevent type prefixing.
* (Breaking) NPM updates
    * .eslintignore files are no longer supported. Use `ignores` in the .eslintrc.js.
      @see https://eslint.org/docs/latest/use/configure/configuration-files-new#globally-ignoring-files-with-ignores
* (Breaking) `vue/require-prop-comment` now enforces prop comments.
* (Breaking) `vue/multiline-ternary` disallows the use of line breaks in template ternaries.

## v15.2.0

* (Change) Overwrites `no-plusplus` rule to allow `++` statements in `for`-loops.

## v15.1.0

* (Change) Defines 'vue/object-curly-spacing' as a --fix rule.

## v15.0.0

* (Breaking) Adds 'vue/object-curly-spacing' rule to force object spacing in vue templates.

## v14.3.1

* (Change) Fixes Vue 3 configuration to get rid of TS parsing error.

## v14.3.0

* (Change) Adds '@typescript-eslint/ban-ts-comment' to make sure `@ts-ignore` always have a reason comment.

## v14.2.1

* (Bugfix) Changes order of rule imports in vue(3).js to fix an issue, where 'indent' was enabled again by the
  vue-recommendations.

## v14.2.0

* (Change) Improves Vue 3 configuration by loosening some rules and removing '@vue/typescript'.

## v14.1.3

* (Change) Updates 'array-bracket-newline' to prevent strange line breaks during `--fix` on arrays.

## v14.1.2

* (Change) Increases 'minItems' on array-element-newline.ArrayPattern to allow `[key, value]` combinations on same line.

## v14.1.1

* (Bugfix) Fixes invalid documentation.

## v14.1.0

* (Enhancement) Adds additional configuration for better auto code styling support.

## v14.0.0

* (Breaking) Replaces max-len with vue/max-len for Vue projects, since it is more reliable with *.vue files.
* (Enhancement) Changes error levels from numbers to keywords.
* (Enhancement) Enables 'vue/no-unsupported-features' to warn about unsupported features.
* (Enhancement) Updates dependencies.

## v13.0.0

* (Breaking) Changing config structure. See README.md.
* (Breaking) Removed legacy support.
* (Enhancement) Updated README.md with new installation instructions.

## v12.0.0

* (Enhancement) Updates peerDependencies to be compatible with new NPM versions (7+).
  @see https://docs.npmjs.com/cli/v8/configuring-npm/package-json#peerdependencies

## v11.1.0 (2022-05-06)

* (Enhancement) Weakens 'vue/singleline-html-element-content-newline' for inline elements be falling back to default

## v11.0.1 (2022-05-06)

* (Bugfix) Adds missing 'vue/prefer-true-attribute-shorthand' rule.

## v11.0.0 (2022-05-06)

* (Breaking) Adds new 'vue/prefer-true-attribute-shorthand' rule.
* (Enhancement) Cleanup of Vue rules.

## v10.2.0 (2022-05-06)

* (Enhancement) Weakens vue/multiline-html-element-content-newline to ignore span and a.
* (Enhancement) Weakens id-length to allow Vue 'is' attribute as object key.
* (Enhancement) Updates dev and peer dependencies.
* (Enhancement) Adds new ESLint rule no-constant-binary-expression.

## v10.1.0 (2022-01-20)

* (Enhancement) Weakens vue/no-bare-strings-in-template to allow the use of special chars in Vue templates.

## v10.0.0 (2022-01-11)

* (Breaking) Raises engine version of node to 12.x. Since dependencies already use this, this is no breaking change.
* (Breaking) Enables several new Vue related linting rules.

## v9.6.1 (2021-11-23)

* (Bugfix) Adjusts vue/first-attribute-linebreak rule options to ignore first attribute linebreaks

## v9.6.0 (2021-11-23)

* (Update) Updates dependencies

## v9.5.1 (2021-09-23)

* (Feature) Disables no-param-reassign again, because it prevents a lot of legit cases

## v9.5.0 (2021-09-22)

* (Breaking) Enables no-param-reassign again, because it can cause side effects, and the previous reason is no longer
  legit
* (Enhancement) Allows to use 'to' as a property name on id-length
* (Enhancement) Adds typescript plugin

## v9.4.0 (2021-07-15)

* (Enhancement) Adds common locale codes to id-length
* (Enhancement) Loosens max-len rule for strings

## v9.3.0 (2021-06-14)

* (Enhancement) Loosens no-empty-function to allow arrow functions, because they are sometimes used as fallback

## v9.2.0 (2021-06-14)

* (Enhancement) Loosens max-len rule for comments. Now allows all comment types
* (Update) Updates all dependencies to fix vulnerabilities

## v9.1.0 (2021-05-06)

* (Enhancement) Loosens vue/no-extra-parens rule for complex conditions

## v9.0.0 (2021-04-26)

* (Breaking) Extends Vue linter definitions.

## v8.1.0 (2021-03-26)

* (Enhancement) Adds changelog
* (Feature) Enables no-unsafe-optional-chaining rule
* (Update) Updates dependencies
