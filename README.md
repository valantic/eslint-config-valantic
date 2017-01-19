# JavaScript

**Changes to the frontend configs repositories or project specific settings are only allowed in agreement with the frontend or project team.**

To ensure a high and consistent code quality for JavaScript we use ESLint.

[http://eslint.org](http://eslint.org)

### Alternatives

If for any reason you're not able to use ESLint, please use one of the following fallbacks in your IDE.

* JSHint
  * [http://jshint.com](http://jshint.com)
* JSLint
  * [http://www.jslint.com](http://www.jslint.com)

The configs for this linters can be found in the `/other-linters` folder

## Code style

At movento the JavaScript code style is based on the Airbnb JavaScript codes style for ES2015.

[https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)

(Current version: 9.0.0)

### Exceptions

We've made some internal adjustments to the code style, to meet our daily needs or to follow ember.js conventions. See the files inside ```./rules/``` to learn more about this adjustments.
 
#### Some of the most important adjustments

* We NEVER use a whitespace before function parenthesis (space-before-function-paren).

## Version

Our config is currently optimized for ESLint v3.13.1. To check for updates, see [http://eslint.org/blog/](http://eslint.org/blog/)

## Install

Use npm to install the ESlint config to your project.

```
$ npm install --save-dev git+https://movento2.codebasehq.com/frontend-configs/javascript.git eslint-config-airbnb-base@11.x eslint-plugin-import eslint@3.x
```

NOTE: the package will only install the airbnb config, but not ESLint itself. So make sure you do it yourself as described above!

## Setup

After installing the config package, you still need to create a `.eslintrc.js` inside your project, where you tell ESLint to use the movento config.

```
// .eslintrc.js

module.exports ={
  extends: 'movento', // Use movento/legacy if you're working with ES5 code
  rules: {
    // Use for project specific settings
  }
};
```

## Use

Now your ready to enable ESLint in your editor or use it on the command line!

### PhpStorm

Go to `PhpStorm > Preferences` and search for ESLint or navigate to `Languages & Frameworks > JavaScript > Code Quality Tools > ESLint` and enable ESLint. Make sure you set the `ESLint package` to the one in your `node_modules` folder. Else the global ESLint will be used and won't be able to find the `movento` config.

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

NOTE: don't use the `$ eslint` command, since this will call the global ESLint package, which will not be able to find the movento config inside your project!

### Ember.js

By default ember uses JSHint. To replace the JSHint test with ESLint execute the following commands when setting up a new Ember.js project:

```
$ npm uninstall --save-dev ember-cli-jshint
$ ember install ember-cli-eslint@3
$ npm install babel-eslint@^7.1.1
```

Make also sure, you removed all unneeded ```.jshintrc``` from the project.

For more information visit the ember-cli-eslint repository: https://github.com/ember-cli/ember-cli-eslint

#### Environment specific linting
When using Ember.js it's also possible to use different linters for different environments. This allows us to sharpen or release the error level for certain environments.

```
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const configuration = {
  "extends": "movento",
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

The test files of Ember.js are mostly created automatically and don't always follow our standards. Therefore you should loosen the rules a bit inside the ```./tests``` folder a bit

```
// ./tests/.eslintrc.js
module.exports = {
  extends: 'movento',
  env: {
    'embertest': true
  },
  rules: {
    'require-jsdoc': 0,
    'valid-jsdoc': 0, // Disable jsdoc, because ember generated test doesn't include that
    'newline-after-var': 0,
    'prefer-const': 0,
    'prefer-rest-params': 0
  }
};
```

Now, you're able to test your Ember.js project files with one of the following options.

#### Test in console

Run ```$ ember test``` in the console, to see the ESLint test result in the console.

#### Test in browser

Run ```$ ember serve``` from the console and open http://localhost:4200/tests?filter=eslint in your browser to get a very detailed view of your ESLint test result.
