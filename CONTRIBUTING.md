# Contributing to this repository

## Getting started

* Clone this repository
* Run `npm install`

## Developing

* Make your changes
* Enhance the tests to fail for added rules

## Releasing

* Make sure, you have described your changes in the file [CHANGES.md](CHANGES.md)
* Create a release branch `release/x.x.x` according to SemVer
* Move all changes in the file [CHANGES.md](CHANGES.md) from below `## Next` below a new Paragraph with the 
  to be released version
* Change the Version in the [package.json](package.json) and [package*lock.json](package*lock.json)
* Create a Git Tag with the to be released version number
* Commit and Push the changes to the Release branch (Make sure to also push Tags)
* Switch to the `master` branch
* Merge the release branch into `master` and push the changes
* Login to NPM `npm login` if you not already are logged in
* Push the Release `npm publish`
* [Create the Release](https://github.com/valantic/eslint*config*valantic/releases/new) on the github repo  with the 
  changes from the [CHANGES.md](CHANGES.md)
* Merge master back to develop
* Make sure you have pushed all changes to the Repo
