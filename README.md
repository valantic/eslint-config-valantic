# valantic ESLint config

To ensure a high and consistent code quality for JavaScript and TypeScript we use ESLint.

[http://eslint.org](http://eslint.org)

At valantic the JavaScript and TypeScript linter is based on the [Airbnb JavaScript codes style](https://github.com/airbnb/javascript) for ES2015+. We also use recommended rule sets for Vue and TypeScript. See the config files for details.

## Exceptions

We've made some adjustments to the code style, to meet our daily needs. See the files inside `./rules/` to learn more about these adjustments.

## ESLint & dependency versions

Check the required package versions in the `package.json` file. To check for updates, see [http://eslint.org/blog/](http://eslint.org/blog/)

## Install

Use `npm` to install the ESLint config to your project.

### Install current version

```shell
npm install eslint-config-valantic eslint@8 eslint-plugin-import@2 eslint-config-airbnb-base@15 eslint-plugin-jsdoc@46 --save-dev
```

## Basic setup

After installing the config package, you still need to create a `.eslintrc.js` inside your project, where you tell ESLint to use the valantic config.

```js
// .eslintrc.js

module.exports ={
  extends: 'valantic',
  rules: {
    // Use for project specific settings
  }
};
```

## Vue support

<details>
<summary>Show details</summary>


If your project is based on vue, you also need to install the `eslint-plugin-vue` package.

```shell
npm i eslint-plugin-vue@9 --save-dev
```

### Vue 2 support

If your project is based on Vue 2 you should use the vue config.

```js
// .eslintrc.js

const vueRules = require('eslint-config-valantic/plugins/vue');

module.exports = {
  extends: [
    'valantic/vue',
  ],
}
```

### Vue 3 support

If your project is based on Vue 3 with TypeScript you should use the vue3 config.

```js
// .eslintrc.js

const vueRules = require('eslint-config-valantic/plugins/vue');

module.exports = {
  extends: [
    'valantic/vue3',
    '@vue/typescript',
  ],
}
```

__NOTE: `@vue/typescript` is important. Else, TypeScript will not be able to parse *.vue files.__

</details>

## TypeScript support

<details>
<summary>Show details</summary>

If your project uses TypeScript, some additional dependencies need to be installed:

```shell
npm i @typescript-eslint/eslint-plugin@4 @typescript-eslint/parser@4 --D
```

and set the correct config that should be extended.

```js
// .eslintrc.js
module.exports = {
  extends: [
    'valantic/typescript'
  ],
}

```
</details>


## Using `--fix`

<details>
<summary>Show details</summary>

There is a special config if you want to use auto code styling and the `--fix` command. It is recommended to use this extended definition if you plan to use `--fix`.

### `--fix` Configuration

Add a new `.eslintrc.fix.js` to your project that extends the "fix" configuration. It would also be possible to define or adjust additional rules here.

```js
// .eslint.fix.js
// https://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: [
    'valantic/fix',
  ],
};
```

### Hide fixable issues

To hide the fixable issues in the IDE, add the `valantic/exclude-fixable` rules to your `.eslintrc.js`.

```js
// .eslintrc.js
// https://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: [
    // ...,
    'valantic/exclude-fixable',
  ],
};
```

### Add NPM script in `package.json`.

**NOTE: The file loaded by `--config` in the `eslint:fix` script will EXTEND the basic configuration, NOT replace it!

```json
{
  "eslint": "eslint --cache --ext .js,.vue src tests/unit/specs",
  "eslint:fix": "npm run eslint -- --config .eslintrc.fix.js --cache=false --fix"
}
```

### Extend GIT hooks

Finally, update the `lint-staged` configuration to apply auto code styling on commit.

```js
// .lintstagedrc.js
module.exports = {
  '*.{js,ts,vue}': [
    () => 'vue-tsc --noEmit', // Only if using TS.
    'eslint --config .eslintrc.fix.js --fix',
  ],
  '*.{css,vue,scss}': [
    'stylelint --config .stylelintrc.fix.js --fix',
  ],
};
```
</details>
