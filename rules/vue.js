export default [
  {
    rules: {
      'indent': ['off'], // Indent is not working with html script tag. Use 'vue/script-indent' instead

      // The following lines overwrites default linters, which don't work good in combination with Vue.
      'jsdoc/require-jsdoc': [
        'error', {
          require: {
            FunctionDeclaration: false,
            MethodDefinition: true,
            ClassDeclaration: true,
            ArrowFunctionExpression: false,
            FunctionExpression: false,
          },
        },
      ],

      'import/extensions': ['off'],

      'max-len': ['off'], // max-len is tricky in Vue files.

      'vue/attributes-order': [
        'error', {
          order: [
            'CONDITIONALS',
            [
              'LIST_RENDERING',
              'RENDER_MODIFIERS',
              'OTHER_DIRECTIVES',
              'TWO_WAY_BINDING',
              'CONTENT',
            ],
            'DEFINITION',
            'GLOBAL',
            'UNIQUE',
            'OTHER_ATTR',
            'EVENTS',
          ],
        },
      ],
      'vue/block-tag-newline': [
        'error', {
          'singleline': 'always',
          'multiline': 'always',
          'maxEmptyLines': 1, // 0 conflicts with lines-around-comment
        },
      ],
      'vue/comma-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],
      'vue/comma-style': ['error', 'last'],
      'vue/component-api-style': [
        'error',
        [
          'composition',
          'options',
        ],
      ],
      'vue/component-definition-name-casing': ['error', 'kebab-case'],
      'vue/component-name-in-template-casing': ['error', 'kebab-case'],
      'vue/component-options-name-casing': ['error', 'camelCase'],
      'vue/custom-event-name-casing': [
        'error', 'camelCase', {
          ignores: ['/[ecl]{1}-.*?.[a-zA-Z]*$/'], // Allows Bus events of type <componentName>.<event>
        },
      ],
      'vue/array-bracket-newline': ['error', 'never'],
      'vue/define-macros-order': ['error'],
      'vue/dot-notation': ['error'],
      'vue/eqeqeq': ['error'],
      'vue/first-attribute-linebreak': [
        'warn', {
          'multiline': 'ignore',
        },
      ],
      'vue/func-call-spacing': ['error', 'never'],
      'vue/html-button-has-type': [
        'error', {
          button: true,
          submit: true,
          reset: true,
        },
      ],
      'vue/html-comment-content-newline': [
        'error',
        {
          singleline: 'never',
          multiline: 'never',
        },
      ],
      'vue/html-comment-content-spacing': ['error', 'always'],
      'vue/html-self-closing': [
        'error', {
          html: {
            void: 'never',
            normal: 'never', // Don't close default elements
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      'vue/match-component-file-name': [
        'error', {
          extensions: ['vue'],
        },
      ],
      'vue/max-attributes-per-line': [
        'error', {
          singleline: 3,
          multiline: 1,
        },
      ],
      'vue/max-len': [
        'error', {
          code: 130,
          ignoreComments: true,
          ignoreUrls: true,
          ignoreHTMLTextContents: true,
        },
      ],
      'vue/multiline-html-element-content-newline': [
        'warn', {
          ignoreWhenEmpty: true,
          allowEmptyLines: true,
          ignores: [ // Linebreaks can cause additional white space inline-elements, so they should be excluded
            'pre',
            'textarea',
            'a',
            'span',
          ],
        },
      ],
      'vue/multiline-ternary': ['error', 'never'],
      'vue/no-bare-strings-in-template': [
        'error', {
          allowlist: [
            '"',
            '(',
            ')',
            ',',
            '.',
            '&',
            '+',
            '-',
            '=',
            '*',
            '/',
            '#',
            '%',
            '!',
            '?',
            ':',
            '[',
            ']',
            '{',
            '}',
            '<',
            '>',
            '\u00b7',
            '\u2022',
            '\u2010',
            '\u2013',
            '\u2014',
            '\u2212',
            '|',
          ],
        },
      ],
      'vue/no-child-content': ['error'],
      'vue/no-console': ['error'],
      'vue/no-deprecated-model-definition': ['error'],
      'vue/no-duplicate-attr-inheritance': ['error'],
      'vue/no-empty-component-block': ['error'],
      'vue/no-expose-after-await': ['error'],
      'vue/no-extra-parens': [
        'error', 'all', {
          returnAssign: false, // Allows parenthesis in fat arrow returns
          nestedBinaryExpressions: false,
          enforceForArrowConditionals: false, // Allows parenthesis for condition ins fat arrow returns
        },
      ],
      'vue/no-multiple-objects-in-class': ['error'],
      'vue/no-potential-component-option-typo': [
        'error', {
          presets: ['all'],
          threshold: 1,
        },
      ],
      'vue/no-reserved-component-names': ['error'],
      'vue/no-restricted-html-elements': [
        'error', {
          element: 'script',
          message: 'Script is not supported inside of the template',
        },
      ],
      'vue/no-required-prop-with-default': ['error'],
      'vue/no-root-v-if': ['error'],
      'vue/no-sparse-arrays': ['error'],
      'vue/no-template-target-blank': ['error'],
      'vue/no-this-in-before-route-enter': ['error'],
      'vue/no-unused-properties': [
        'error', {
          groups: [
            'props',
            'data',
            'computed',
            'methods',
            'setup',
          ],
          ignorePublicMembers: true,
        },
      ],
      'vue/no-useless-concat': ['error'],
      'vue/no-useless-mustaches': ['error'],
      'vue/no-useless-v-bind': ['error'],
      'vue/no-unsupported-features': [
        'error', {
          version: '^2.6.0',
        },
      ],
      'vue/no-use-computed-property-like-method': ['error'],
      'vue/no-v-text': ['error'],
      'vue/no-use-v-else-with-v-for': ['error'],
      'vue/object-curly-newline': ['error', 'never'],
      'vue/object-property-newline': [
        'error', {
          allowAllPropertiesOnSameLine: true,
        },
      ],
      'vue/operator-linebreak': ['error', 'none'],
      'vue/padding-line-between-blocks': ['error', 'always'],
      'vue/prefer-separate-static-class': ['error'],
      'vue/prefer-template': ['error'],
      'vue/prefer-true-attribute-shorthand': ['error', 'always'],
      'vue/require-direct-export': ['error'],
      'vue/require-emit-validator': ['error'],
      'vue/require-name-property': ['error'],
      'vue/require-prop-comment': ['error'],
      'vue/require-typed-object-prop': ['error'],
      'vue/script-indent': [
        'error', 2, {
          baseIndent: 1,
          switchCase: 1,
        },
      ],
      'vue/space-in-parens': ['error', 'never'],
      'vue/template-curly-spacing': ['error', 'never'],
      'vue/v-for-delimiter-style': ['error', 'in'],
    },
  },
];
