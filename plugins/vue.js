module.exports = {
  'indent': 0, // Indent is not working with html script tag. Use 'vue/script-indent' instead
  'vue/max-attributes-per-line': [2, {
    singleline: 3,
    multiline: {
      max: 1,
      allowFirstLine: true
    }
  }],
  'vue/name-property-casing': [2, 'kebab-case'],
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
  'vue/no-potential-component-option-typo': ['error'],
  'vue/custom-event-name-casing': ['error', 'camelCase', {
    ignores: ['/[ecl]{1}-.*?.[a-zA-Z]*$/'] // Allows Bus events of type <componentName>.<event>
  }],
  'vue/no-bare-strings-in-template': ['error'],
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
  'vue/no-extra-parens': ['error'],
  'vue/no-useless-concat': ['error'],
  'vue/dot-notation': ['error'],
  'vue/object-property-newline': ['error', {
    allowAllPropertiesOnSameLine: true
  }],
  'vue/object-curly-newline': ['error', 'never'],
  'vue/operator-linebreak': ['error', 'none'],
  'vue/func-call-spacing': ['error', 'never'],
  'vue/no-sparse-arrays': ['error'],

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
