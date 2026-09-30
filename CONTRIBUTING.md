# Contributing to this repository

## Getting started

- Clone this repository.
- Use the Node.js version from `.nvmrc` (e.g. `nvm use`) and install the dependencies with `npm ci`.
- Test scripts:
  - `npm run test` — runs the tests for all files and checks that the output matches the snapshots.
  - `npm run test:ci` — CI variant: only checks the expected error/warning counts, no snapshots.
  - `npm run test:raw` — runs all tests and prints the ESLint output to the console.
  - `npm run snapshop:update` — runs the tests and stores the output as the new snapshots.

## Developing

- Create a branch from `main`: `feature/<name>` or `bugfix/<name>`.
- Extend the test fixtures in `tests/` so they fail for added or changed rules, update the expected counts in
  `test-setup.ts` and refresh the snapshots with `npm run snapshop:update`.
- Check the [ESLint blog](https://eslint.org/blog/) for relevant new features.
- Run `npm test` and fix all issues.
- Add or update the feature doc in `docs/` if a feature changed (index: `docs/README.md`).
- Add a changelog entry (see below).
- Open a pull request using the pull request template.

## Changelog

Every change gets an entry under `## unreleased` in [CHANGELOG.md](CHANGELOG.md), e.g. `- [fix] Description.`.
Breaking changes go under `### Breaking Changes` with a **Migration:** note. The full convention is described in
[AGENTS.md](AGENTS.md#changelog-required-for-every-task).

## Releasing

Releases are made directly from `main`. Tags are always `vX.Y.Z`.

1. Make sure all changes are merged into `main` and described under `## unreleased` in
   [CHANGELOG.md](CHANGELOG.md).
   Run `npm audit` beforehand and merge any needed `npm audit fix` updates like any other change.
2. On an up-to-date `main`, run one of these (see [SemVer](https://semver.org/)):
   - `npm run release` — patch
   - `npm run release:minor` — minor
   - `npm run release:major` — major

   `scripts/release.mjs` aborts without changing anything if the working tree is not clean, `main` is behind
   `origin/main`, or `## unreleased` is empty. Otherwise it bumps the version in `package.json` and
   `package-lock.json`, renames `## unreleased` to `## vX.Y.Z` (adding a fresh `## unreleased` above it), updates
   the version pin in `README.md` if there is one, commits `Release vX.Y.Z`, creates the annotated tag `vX.Y.Z` and
   pushes both.

3. Publish the package to npm: `npm publish` (log in with `npm login` first if needed). This stays a manual step
   because it needs your npm authentication.

4. The `Release` workflow (`.github/workflows/release.yml`) creates the GitHub release for the pushed tag, using that
   version's `CHANGELOG.md` section as release notes. Check it on
   [GitHub releases](https://github.com/valantic/eslint-config-valantic/releases).

`scripts/release.mjs` is shared by all valantic shared-frontend repos — keep the copies identical.
