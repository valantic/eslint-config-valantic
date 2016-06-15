# JavaScript

**Changes to the frontend configs repositories or project specific settings are only allowed in agreement with the frontend  or project team.**

To ensure a high an consistent code quality for JavaScript we use ESLint.

[http://eslint.org](http://eslint.org)

If for any reason you're not able to use ESLint, please use one of the following fallbacks in your IDE.

* JSHint
  * [http://jshint.com](http://jshint.com)
* JSLint
  * [http://www.jslint.com](http://www.jslint.com)

The configs for this linters can be found in the `/other-linters` folder

## Install

Use npm to install the ESlint config to your project.

```
$ npm install --save-dev git+https://movento2.codebasehq.com/frontend-configs/javascript.git eslint-config-airbnb-base eslint-plugin-import eslint
```

NOTE: the package will only install the airbnb config, but not eslint itself. So make sure you do it yourself as discribed above!

## Setup

After installing the config package, you still need to create a `.eslintrc.js` inside your project, where you tell ESLint to use the movento config.

```
// .eslintrc.js

module.exports ={
  "extends": "movento", // Use movento/legacy if your working with ES5 code
  "rules": {
    // Use for project specific settings
  }
};
```

## Use

Now your ready to enable ESLint in your editor!

### PhpStorm

Go to `PhpStorm > Preferences` and search for ESLint or navigate to `Languages & Frameworks > JavaScript > Code Quality Tools > ESLint` and enable ESLint. Make sure you set the `ESLint package` to the one in your `node_modules` folder. Else the global ESLint will be used and won't be able to find the `movento` config.

### Console

You can also lint your code from the console. To do this, add a script to your `.eslintrc.js`.

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
