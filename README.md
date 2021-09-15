# valantic ESLint config

To ensure a high and consistent code quality for JavaScript and Typescript we use ESLint.

[http://eslint.org](http://eslint.org)

## Code style

At valantic the JavaScript and Typescript code style is based on the Airbnb JavaScript codes style for ES2015+.

[https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)

See package.json for currently used version.

### Exceptions

We've made some internal adjustments to the code style, to meet our daily needs. See the files inside ```./rules/``` to learn more about this adjustments.

## ESLint version

Check the required ESLint version in the `package.json` file. To check for updates, see [http://eslint.org/blog/](http://eslint.org/blog/)

## Uninstall old version

### uninstall

```
npm uninstall eslint eslint-plugin-import eslint-config-valantic eslint-config-airbnb-base --save-dev 
```

## Install

Use npm to install the ESLint config to your project.

### Install current version

```
npm install eslint-config-valantic eslint eslint-plugin-import eslint-config-airbnb-base --save-dev
```

## Setup

After installing the config package, you still need to create a `.eslintrc.js` inside your project, where you tell ESLint to use the valantic config.

```
// .eslintrc.js

module.exports ={
  extends: 'valantic',
  rules: {
    // Use for project specific settings
  }
};
```

### Legacy support

Use `extends: 'valantic/legacy` instead.

### Vue support

If your project uses the `eslint-plugin-vue` you can import the additional vue rules we already predefined to meet our requirements.

```
// .eslintrc.js

const vueRules = require('eslint-config-valantic/plugins/vue');

module.exports = {
  rules: {
    ...vueRules,
    // ...
  }
}

```

### Typescript Support

If your project uses Typescript, you need to use some additional settings to make eslint parse typescript correctly.

```
// .eslintrc.js
const tsRules = require('eslint-config-valantic/plugins/typescript');

module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser', // Don't use on upper scope as documented by ESLint. The Vue plugin already defines itself as parser.
    // ...
  },
  extends: [
    // ...
    'plugin:@typescript-eslint/recommended', // only needed if you DON'T use Vue
    '@vue/typescript', // only needed if you DO use Vue
  ],
  rules: {
    ...tsRules,
    // ...
  }
}

```

## Use

Now you are ready to enable ESLint in your editor or use it on the command line!

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
npm run eslint <app|file.js>
```

NOTE: don't use the `$ eslint` command, since this will call the global ESLint package, which will not be able to find the valantic config inside your project!

## Rule hints

#### valid-jsdoc and PhpStorm

In case your PhpStorm is using `@return` instead of the required `@returns`: Write the return tag yourself for once and select the correct type from the suggestion list. PhpStorm will keep your last preference and use it from now on. See also https://youtrack.jetbrains.com/issue/WEB-7516#comment=27-611256
