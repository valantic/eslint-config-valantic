# Changelog

## 14.1.1
* (Bugfix) Fixes invalid documentation.

## 14.1.0
* (Enhancement) Adds additional configuration for better auto code styling support.

## 14.0.0
* (Breaking) Replaces max-len with vue/max-len for Vue projects, since it is more reliable with *.vue files.
* (Enhancement) Changes error levels from numbers to keywords.
* (Enhancement) Enables 'vue/no-unsupported-features' to warn about unsupported features.
* (Enhancement) Updates dependencies.

## 13.0.0
* (Breaking) Changing config structure. See README.md.
* (Breaking) Removed legacy support.
* (Enhancement) Updated README.md with new installation instructions.

## 12.0.0
* (Enhancement) Updates peerDependencies to be compatible with new NPM versions (7+). @see https://docs.npmjs.com/cli/v8/configuring-npm/package-json#peerdependencies

## 11.1.0 (2022-05-06)
* (Enhancement) Weakens 'vue/singleline-html-element-content-newline' for inline elements be falling back to default

## 11.0.1 (2022-05-06)
* (Bugfix) Adds missing 'vue/prefer-true-attribute-shorthand' rule.

## 11.0.0 (2022-05-06)
* (Breaking) Adds new 'vue/prefer-true-attribute-shorthand' rule.
* (Enhancement) Cleanup of Vue rules.

## 10.2.0 (2022-05-06)
* (Enhancement) Weakens vue/multiline-html-element-content-newline to ignore span and a.
* (Enhancement) Weakens id-length to allow Vue 'is' attribute as object key.
* (Enhancement) Updates dev and peer dependencies.
* (Enhancement) Adds new ESLint rule no-constant-binary-expression.

## 10.1.0 (2022-01-20)
* (Enhancement) Weakens vue/no-bare-strings-in-template to allow the use of special chars in Vue templates.

## 10.0.0 (2022-01-11)
* (Breaking) Raises engine version of node to 12.x. Since dependencies already use this, this is no breaking change.
* (Breaking) Enables several new Vue related linting rules.

## 9.6.1 (2021-11-23)
* (Bugfix) Adjusts vue/first-attribute-linebreak rule options to ignore first attribute linebreaks

## 9.6.0 (2021-11-23)
* (Update) Updates dependencies

## 9.5.1 (2021-09-23)

* (Feature) Disables no-param-reassign again, because it prevents a lot of legit cases

## 9.5.0 (2021-09-22)
* (Breaking) Enables no-param-reassign again, because it can cause side effects, and the previous reason is no longer legit
* (Enhancement) Allows to use 'to' as a property name on id-length
* (Enhancement) Adds typescript plugin

## 9.4.0 (2021-07-15)
* (Enhancement) Adds common locale codes to id-length
* (Enhancement) Loosens max-len rule for strings

## 9.3.0 (2021-06-14)
* (Enhancement) Loosens no-empty-function to allow arrow functions, because they are sometimes used as fallback

## 9.2.0 (2021-06-14)
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
