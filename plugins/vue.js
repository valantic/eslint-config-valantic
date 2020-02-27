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
  }]
};
