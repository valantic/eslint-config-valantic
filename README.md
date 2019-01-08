# valantic ESLint config

To ensure a high and consistent code quality for JavaScript we use ESLint.

[http://eslint.org](http://eslint.org)

## Code style

At valantic the JavaScript code style is based on the Airbnb JavaScript codes style for ES2015.

[https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)

(Current version: 13.*)

### Exceptions

We've made some internal adjustments to the code style, to meet our daily needs. See the files inside ```./rules/``` to learn more about this adjustments.
 
#### Some of the most important adjustments

* We NEVER use a whitespace before function parenthesis (space-before-function-paren).

## ESLint version

Our config is currently optimized for ESLint 5.12.0. To check for updates, see [http://eslint.org/blog/](http://eslint.org/blog/)

## Uninstall old version

### uninstall < 2.0.0, >= 4.1.0

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
$ npm install eslint-config-valantic eslint eslint-plugin-import eslint-config-airbnb-base --save-dev
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

## Rule hints

#### valid-jsdoc and PhpStorm

In case your PhpStorm is using `@return` instead of the required `@returns`: Write the return tag yourself for once and select the correct type from the suggestion list. PhpStorm will keep your last preference and use it from now on. See also https://youtrack.jetbrains.com/issue/WEB-7516#comment=27-611256
