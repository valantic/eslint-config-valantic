# valantic ESLint config

To ensure a high and consistent code quality for JavaScript and TypeScript we use ESLint.

[http://eslint.org](http://eslint.org)

## Code style

At valantic the JavaScript and TypeScript code style is based on the eslint-plugin-unicorn.

[https://github.com/sindresorhus/eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

See package.json for currently used version.

### Exceptions

We've made some internal adjustments to the code style, to meet our daily needs. See the files inside `./rules/` to learn more about these adjustments.

## ESLint version

Check the required ESLint version in the `package.json` file. To check for updates, see [http://eslint.org/blog/](http://eslint.org/blog/)

## Install

Use npm to install the ESLint config to your project.

### Install current version

```
npm install eslint-config-valantic eslint eslint-plugin-import eslint-config-airbnb-base --save-dev
```

## Setup

After installing the config package, you still need to create a `eslint.config.js` inside your project, where you tell ESLint to use the valantic config.

```js
// eslint.config.js

import eslintConfigValantic from 'eslint-config-valantic';

export default [
  ...eslintConfigValantic,
  rules: {
    // Use for project specific settings
  },
];
```

### Vue support

If your project is based on Vue 3 with TypeScript you should use the vue config.

```js
// eslint.config.js

import eslintConfigValantic from 'eslint-config-valantic/vue.js';

export default [
  ...eslintConfigValantic,
  rules: {
    // Use for project specific settings
  },
];
```

__NOTE: `@vue/typescript` is important. Else, TypeScript will not be able to parse *.vue files.__

### TypeScript support

If your project uses TypeScript, you need to use some additional dependencies installed:

```json
{
  "devDependencies": {
    "typescript-eslint": "~8.31.0",
  }
}
```

and set the correct config that should be extended.

```js
// eslint.config.js
import eslintConfigValantic from 'eslint-config-valantic/typescript.js';

export default [
  ...eslintConfigValantic,
  rules: {
    // Use for project specific settings
  },
];

```

### `--fix`

> [!WARNING]
> This block has not been tested since the update of eslint 9.

There is a special config if you want to use auto code styling and the `--fix` command. It is recommended to use this extended definition if you plan to use `--fix`.

1. Add a new `.eslintrc.fix.js` to your project that extends the "fix" configuration. It would also be possible to define or adjust additonal rules here.

```js
// https://eslint.org/docs/user-guide/configuring
import eslintConfigValantic from 'eslint-config-valantic/fix.js';

export default [
  ...eslintConfigValantic,
  rules: {
    // Use for project specific settings
  },
];
```

2. Add a new NPM script in `package.json`.

**NOTE: The file loaded by `--config` in the `eslint:fix` script will EXTEND the basic configuration, NOT replace it!

```json
{
  "lint:eslint": "eslint ./",
  "fix:eslint": "npm run lint:eslint -- --config .eslintrc.fix.js --cache=false --fix"
}
```

3. Extend GIT hooks

Finally, update the `lint-staged` configuration to apply auto code styling on commit.

```json
{
  "lint-staged": "lint-staged",
}
```

## Use

Now you are ready to enable ESLint in your editor or use it on the command line!

### PhpStorm

Go to `PhpStorm > Preferences` and search for ESLint or navigate to `Languages & Frameworks > JavaScript > Code Quality Tools > ESLint` and enable ESLint. Make sure you set the `ESLint package` to the one in your `node_modules` folder. Else the global ESLint will be used and won't be able to find the `valantic` config.

### Console

You can also lint your code from the console. To do this, add a script to your `package.json`.

```json
{
  "scripts": {
    "eslint": "eslint"
  }
}
```

Now you can execute the linter with the following command.

```shell
npm run eslint <app|file.js>
```

NOTE: don't use the `$ eslint` command, since this will call the global ESLint package, which will not be able to find the valantic config inside your project!

## Rule hints

#### valid-jsdoc and PhpStorm

In case your PhpStorm is using `@return` instead of the required `@returns`: Write the return tag yourself for once and select the correct type from the suggestion list. PhpStorm will keep your last preference and use it from now on. See also https://youtrack.jetbrains.com/issue/WEB-7516#comment=27-611256
