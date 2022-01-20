module.exports = {
  'indent': 0, // Indent is not working with html script tag. Use 'vue/script-indent' instead
  'vue/max-attributes-per-line': [2, {
    singleline: 3,
    multiline: 1
  }],
  'vue/first-attribute-linebreak' : [ 1, {
    'multiline': 'ignore'
  }],
  'vue/html-closing-bracket-newline': [0],
  'vue/multiline-html-element-content-newline': [1, {
    ignoreWhenEmpty: true,
    ignores: ['pre', 'textarea'],
    allowEmptyLines: true
  }],
  'vue/singleline-html-element-content-newline': [1, {
    ignoreWhenNoAttributes: true,
    ignoreWhenEmpty: true,
    ignores: [
      'code',
      'pre',
      'span',
      'textarea'
    ]
  }],
  'vue/script-indent': ['error', 2, {
    baseIndent: 1,
    switchCase: 1
  }],
  'vue/html-self-closing': [2, {
    html: {
      void: 'never',
      normal: 'never', // Don't close default elements
      component: 'always'
    },
    svg: 'always',
    math: 'always'
  }],
  'import/extensions': [0, 'always', {
    js: 'never',
    vue: 'never'
  }],
  'vue/attributes-order': [2, {
    order: [
      'CONDITIONALS',
      [
        'LIST_RENDERING',
        'RENDER_MODIFIERS',
        'OTHER_DIRECTIVES',
        'TWO_WAY_BINDING',
        'CONTENT'
      ],
      'DEFINITION',
      'GLOBAL',
      'UNIQUE',
      'OTHER_ATTR',
      'EVENTS',
    ]
  }],
  'vue/no-template-target-blank': ['error'],
  'vue/component-definition-name-casing': ['error', 'kebab-case'],
  'vue/html-comment-content-spacing': ['error', 'always'],
  'vue/no-duplicate-attr-inheritance': ['error'],
  'vue/no-unused-properties': ['error', {
    groups: [
      'props',
      'data',
      'computed',
      'methods',
      'setup'
    ],
    ignorePublicMembers: true,
  }],
  'vue/no-potential-component-option-typo': ['error', {
    presets: ['all'],
    threshold: 1
  }],
  'vue/custom-event-name-casing': ['error', 'camelCase', {
    ignores: ['/[ecl]{1}-.*?.[a-zA-Z]*$/'] // Allows Bus events of type <componentName>.<event>
  }],
  'vue/no-bare-strings-in-template': ['error', {
    allowlist: [
      "\"",
      "(",
      ")",
      ",",
      ".",
      "&",
      "+",
      "-",
      "=",
      "*",
      "/",
      "#",
      "%",
      "!",
      "?",
      ":",
      "[",
      "]",
      "{",
      "}",
      "<",
      ">",
      "\u00b7",
      "\u2022",
      "\u2010",
      "\u2013",
      "\u2014",
      "\u2212",
      "|",
    ],
  }],
  'vue/no-useless-v-bind': ['error'],
  'vue/no-useless-mustaches': ['error'],
  'vue/no-multiple-objects-in-class': ['error'],
  'vue/v-for-delimiter-style': ['error', 'in'],
  'vue/no-reserved-component-names': ['error'],
  // Core extending
  'vue/comma-spacing': ['error', { before: false, after: true }],
  'vue/prefer-template': ['error'],
  'vue/template-curly-spacing': ['error', 'never'],
  'vue/space-in-parens': ['error', 'never'],
  'vue/comma-style': ['error', 'last'],
  'vue/no-extra-parens': ['error', 'all', {
    returnAssign: false, // Allows parenthesis in fat arrow returns
    nestedBinaryExpressions: false,
    enforceForArrowConditionals: false // Allows parenthesis for condition ins fat arrow returns
  }],
  'vue/no-useless-concat': ['error'],
  'vue/dot-notation': ['error'],
  'vue/object-property-newline': ['error', {
    allowAllPropertiesOnSameLine: true
  }],
  'vue/object-curly-newline': ['error', 'never'],
  'vue/operator-linebreak': ['error', 'none'],
  'vue/func-call-spacing': ['error', 'never'],
  'vue/no-sparse-arrays': ['error'],
  'vue/block-tag-newline': ['error', {
    'singleline': 'always',
    'multiline': 'always',
    'maxEmptyLines': 1, // 0 conflicts with lines-around-comment
  }],
  'vue/component-api-style': ["error",
    [
      'composition',
      'options',
    ]
  ],
  'vue/component-name-in-template-casing': ['error', 'kebab-case'],
  'vue/component-options-name-casing': ['error', 'camelCase'],
  'vue/html-button-has-type': ['error', {
    button: true,
    submit: true,
    reset: true
  }],
  "vue/html-comment-content-newline": ["error",
    {
      singleline: 'never',
      multiline: 'never',
    }
  ],
  'vue/match-component-file-name': ['error', {
    extensions: ['vue'],
  }],
  'vue/no-child-content': ['error'],
  'vue/no-empty-component-block': ['error'],
  'vue/no-expose-after-await': ['error'],
  'vue/no-invalid-model-keys': ['error'],
  'vue/no-this-in-before-route-enter': ['error'],
  'vue/no-unsupported-features': ['error', {
    version: "^2.6.0",
  }],
  'vue/no-use-computed-property-like-method': ['error'],
  'vue/no-v-text': ['error'],
  'vue/padding-line-between-blocks': ['error', 'always'],
  'vue/prefer-separate-static-class': ['error'],
  'vue/require-direct-export': ['error'],
  'vue/require-emit-validator': ['error'],
  'vue/require-name-property': ['error'],
  'vue/v-on-function-call': ['error'],
  'vue/array-bracket-newline': ['error', 'never'],
  'vue/eqeqeq': ['error'],

  // The following lines overwrites default linters, which don't work good in combination with Vue.
  'require-jsdoc': [2, {
    require: {
      FunctionDeclaration: true,
      MethodDefinition: true,
      ClassDeclaration: true,
      ArrowFunctionExpression: true,
      FunctionExpression: false, // Allows to use lifecycles, get/set and so on without JSDoc.
    }
  }],
};
