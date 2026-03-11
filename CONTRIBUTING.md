# Contributing to this repository

## Getting started

* Clone this repository
* Run `npm install`
* Run the tests: `npm run test`
    * Attention, they should fail as they test if the rules are working as expected.

## Developing

* Make your changes
* Enhance the tests to fail for added rules
* Check the [blog](https://eslint.org/blog/) to see if there are relevant new features for us to use
* Make sure you have described your changes in the file [CHANGES.md](CHANGES.md) below the `## Next` header.
* Create a branch `feature/my-new-feature` and create a new merge request.

## Releasing

### Prepare release

* Switch to the `master` branch
* Make sure the changes in the file [CHANGES.md](CHANGES.md) are up to date and complete.
* Create a release branch `release/x.x.x` according to SemVer
* Move all changes in the file [CHANGES.md](CHANGES.md) from below the `## Next` header to a new header with the
  to be released version eg: `## 1.2.3`
* Run `npm audit` and `npm audit fix` if needed to update the versions.
* Add and commit all open changes.
* Create a merge request.

### Release

* Switch to the `master` branch
* Decide what kind of release this is (patch, minor, major)
    * patch: `npm run release`
    * minor: `npm run release:minor`
    * major: `npm run release:major`
* Login to NPM `npm login` if you not already are logged in
* Push the Release `npm publish`
* [Create the Release](https://github.com/valantic/eslint-config-valantic/releases/new) on the GitHub repo with the
  changes from the [CHANGES.md](CHANGES.md)
