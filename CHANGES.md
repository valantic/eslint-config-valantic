# Changelog

## Next
* (Change) Adds 'v$' as an 'id-length' exception.
* (Change) Requests specific member delimiter with `@typescript-eslint/member-delimiter-style`.
* (Breaking) Enables enforcement of singular case for enum names with `@typescript-eslint/naming-convention`.
* (Change) Disables 'import/extensions' again, because forcing extensions conflicts with TS.
* (Change) Disables 'global-require' because we only use it in styleguide context, where it is never used globally.
* (Change) Disables '@typescript-eslint/no-var-requires' because it is only used in styleguide context, where it almost always is used as variable.

## 16.0.1
* (Breaking) `@typescript-eslint/method-signature-style` enforces the method style in interfaces.
* (Breaking) Enforces `max-lines` by default.
* (Change) Disables `no-undefined` for TypeScript configuration.
* (Change) Updates config for `space-before-function-paren`.

## 16.0.0
* (Breaking) Adds `@typescript-eslint/naming-convention` rule to prevent type prefixing.
* (Breaking) NPM updates
  * .eslintignore files are no longer supported. Use `ignores` in the .eslintrc.js. @see https://eslint.org/docs/latest/use/configure/configuration-files-new#globally-ignoring-files-with-ignores
* (Breaking) `vue/require-prop-comment` now enforces prop comments.
* (Breaking) `vue/multiline-ternary` disallows the use of line breaks in template ternaries.

## 15.2.0
* (Change) Overwrites `no-plusplus` rule to allow `++` statements in `for`-loops.

## 15.1.0
* (Change) Defines 'vue/object-curly-spacing' as a --fix rule.

## 15.0.0
* (Breaking) Adds 'vue/object-curly-spacing' rule to force object spacing in vue templates.

## 14.3.1
* (Change) Fixes Vue 3 configuration to get rid of TS parsing error.

## 14.3.0
* (Change) Adds '@typescript-eslint/ban-ts-comment' to make sure `@ts-ignore` always have a reason comment.

## 14.2.1
* (Bugfix) Changes order of rule imports in vue(3).js to fix an issue, where 'indent' was enabled again by the vue-recommendations. 

## 14.2.0
* (Change) Improves Vue 3 configuration by loosening some rules and removing '@vue/typescript'.

## 14.1.3
* (Change) Updates 'array-bracket-newline' to prevent strange line breaks during `--fix` on arrays.

## 14.1.2
* (Change) Increases 'minItems' on array-element-newline.ArrayPattern to allow `[key, value]` combinations on same line.

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
