# valantic ESLint config

To ensure a high and consistent code quality for JavaScript we use ESLint.

[http://eslint.org](http://eslint.org)

## Code style

At valantic the JavaScript code style is based on the Airbnb JavaScript codes style for ES2015.

[https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)

(Current version: 12.*)

### Exceptions

We've made some internal adjustments to the code style, to meet our daily needs. See the files inside ```./rules/``` to learn more about this adjustments.
 
#### Some of the most important adjustments

* We NEVER use a whitespace before function parenthesis (space-before-function-paren).

## ESLint version

Our config is currently optimized for ESLint 4.18.2. To check for updates, see [http://eslint.org/blog/](http://eslint.org/blog/)

## Uninstall old version

### uninstall < 2.0.0, >= 4.0.0

```
npm uninstall --save-dev eslint eslint-plugin-import eslint-config-valantic
```

### uninstall >= 2.0.0

```
npm uninstall --save-dev eslint-config-valantic
```

## Install

Use npm to install the ESlint config to your project.

### Install current version

```
$ npm install --save-dev git+https://github.com/valantic/eslint-config-valantic.git#4.0.0 eslint eslint-plugin-import
```

## Setup

After installing the config package, you still need to create a `.eslintrc.js` inside your project, where you tell ESLint to use the valantic config.

```
// .eslintrc.js

module.exports ={
  extends: 'valantic', // Use valantic/legacy if you're working with ES5 code
  rules: {
    // Use for project specific settings
  }
};
```

## Use

Now your ready to enable ESLint in your editor or use it on the command line!

### PhpStorm

Go to `PhpStorm > Preferences` and search for ESLint or navigate to `Languages & Frameworks > JavaScript > Code Quality Tools > ESLint` and enable ESLint. Make sure you set the `ESLint package` to the one in your `node_modules` folder. Else the global ESLint will be used and won't be able to find the `valantic` config.

### Console

You can also lint your code from the console. To do this, add a script to your `package.json`.

```
"scripts": {
  "eslint": "eslint"
}
```

Now you can execute the linter with the following command.

```
$ npm run eslint <app|file.js>
```

NOTE: don't use the `$ eslint` command, since this will call the global ESLint package, which will not be able to find the valantic config inside your project!

### Ember.js

By default ember uses JSHint. To replace the JSHint test with ESLint execute the following commands when setting up a new Ember.js project:

```
$ npm uninstall --save-dev ember-cli-jshint
$ ember install ember-cli-eslint@4
$ npm install babel-eslint@^8.0.0
```

Make also sure, you removed all unneeded ```.jshintrc``` from the project.

For more information visit the ember-cli-eslint repository: https://github.com/ember-cli/ember-cli-eslint

#### Environment specific linting
When using Ember.js it's also possible to use different linters for different environments. This allows us to sharpen or release the error level for certain environments.

```
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const configuration = {
  "extends": "valantic",
  "rules": {
    // ...
  }
};

// To reduce the amount of errors for the client, we reduced the error level for all non development environments
if (EmberApp && EmberApp.env() !== 'development') {
  configuration.rules['no-warning-comments'] = 0;
  configuration.rules['no-console'] = 0;
}

module.exports = configuration;
```

#### Linter for tests

The test files of Ember.js are mostly created automatically and don't always follow our standards. Therefore you should loosen the rules inside the ```./tests``` folder a bit.

```
// ./tests/.eslintrc.js
module.exports = {
  extends: 'valantic',
  env: {
    'embertest': true
  },
  rules: {
    'require-jsdoc': 0,
    'valid-jsdoc': 0, // Disable jsdoc, because ember generated test doesn't include that
    'padding-line-between-statements': 0,
    'prefer-const': 0,
    'prefer-rest-params': 0
  }
};
```

## Rule hints

#### valid-jsdoc and PhpStorm

In case your PhpStorm is using `@return` instead of the required `@returns`: Write the return tag yourself for once and select the correct type from the suggestion list. PhpStorm will keep your last preference and use it from now on. See also https://youtrack.jetbrains.com/issue/WEB-7516#comment=27-611256
