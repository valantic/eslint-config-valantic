# Contributing to this repository

## Getting started

* Clone this repository
* Run `npm ci`
* Use these scripts to test: 
  * `npm run test`: Will run the tests for all files and also checks if the output is as expected.
  * `npm run test:ci`: Special CI job, so we do not have to store the snapshots somewhere but only check if the amout expected errors is correct.
  * `npm run test:raw`: Will run all tests but prints the output to the console.
  * `npm run snapshop:update`: Will run the tests and stores the output as a new snapshot. (run this if you have changed the tests)

## Developing

* Make your changes
* Enhance the tests to fail for added rules
* Check the [blog](https://eslint.org/blog/) to see if there are relevant new features for us to use
* Make sure you have described your changes in the file [CHANGELOG.md](CHANGELOG.md) below the `## unreleased` header,
  following the changelog convention in [AGENTS.md](AGENTS.md#changelog-required-for-every-task).
* Create a branch `feature/my-new-feature` and create a new merge request.

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
