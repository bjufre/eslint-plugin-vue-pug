// SKIP AUTOGENERATION
// AUTOGENERATED FROM https://github.com/vuejs/eslint-plugin-vue/blob/8f094200664a2b10bc597016f5486066a174e098/tests/lib/rules/no-restricted-syntax.js
/**
 * @author Yosuke Ota
 */
'use strict'

const RuleTester = require('eslint').RuleTester
const rule = require('../../../eslint-plugin-vue/lib/rules/no-restricted-syntax')

const tester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2015,
    templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug' }
  }
})

tester.run('no-restricted-syntax', rule, {
  valid: [
    {
      code: `
        <template lang="pug">input(:value="value")</template>`,
      options: [
        {
          selector: 'CallExpression',
          message: 'Call expressions are not allowed.'
        }
      ]
    },
    {
      code: `
        <template lang="pug">input(:[value]="value")</template>`,
      options: [
        {
          selector: 'CallExpression',
          message: 'Call expressions are not allowed.'
        }
      ]
    },

    {
      // https://github.com/vuejs/eslint-plugin-vue/issues/870
      code: `
        <template lang="pug">input(:value="interpolate(foo, bar, true)")</template>`,
      options: [
        {
          selector: 'CallExpression > :nth-child(3)[value!=true]',
          message: 'Third argument of interpolate must be true'
        }
      ]
    },
    // CSS vars injection
    {
      code: `
      <style>
      .text {
        color: v-bind('foo')
      }
      </style>`,
      options: [
        {
          selector: 'CallExpression',
          message: 'Call expressions are not allowed.'
        }
      ]
    }
  ],
  invalid: [
    {
      code: `
        <template lang="pug">input(:value="value()")</template>`,
      options: [
        {
          selector: 'CallExpression',
          message: 'Call expressions are not allowed.'
        }
      ],
      errors: [
        {
          message: 'Call expressions are not allowed.',
          line: 2,
          column: 44,
          endLine: 2,
          endColumn: 51
        }
      ]
    },

    // Forbids call expressions inside mustache interpolation.
    {
      code: `
        <template lang="pug">
div {{ foo() }}
div {{ foo.bar() }}
div {{ foo().bar }}
</template>`,
      options: [
        {
          selector: 'VElement > VExpressionContainer CallExpression',
          message:
            'Call expressions are not allowed inside mustache interpolation.'
        }
      ],
      errors: [
        {
          message:
            'Call expressions are not allowed inside mustache interpolation.',
          line: 3,
          column: 8,
          endLine: 3,
          endColumn: 13
        },
        {
          message:
            'Call expressions are not allowed inside mustache interpolation.',
          line: 4,
          column: 8,
          endLine: 4,
          endColumn: 17
        },
        {
          message:
            'Call expressions are not allowed inside mustache interpolation.',
          line: 5,
          column: 8,
          endLine: 5,
          endColumn: 13
        }
      ]
    },

    // Sample source code on issue 689
    {
      code: `<template lang="pug">div(:foo="\$gettext(\`bar\`)") {{\$gettext(\`bar\`)}}</template>`,
      options: [
        "CallExpression[callee.type='Identifier'][callee.name='$gettext'] TemplateLiteral"
      ],
      errors: [
        {
          message:
            "Using 'CallExpression[callee.type='Identifier'][callee.name='$gettext'] TemplateLiteral' is not allowed.",
          line: 1,
          column: 41,
          endLine: 1,
          endColumn: 46
        },
        {
          message:
            "Using 'CallExpression[callee.type='Identifier'][callee.name='$gettext'] TemplateLiteral' is not allowed.",
          line: 1,
          column: 61,
          endLine: 1,
          endColumn: 66
        }
      ]
    },

    {
      code: `
        <template lang="pug">input(:[fn()]="fn()")</template>`,
      options: [
        {
          selector: 'CallExpression',
          message: 'Call expressions are not allowed.'
        }
      ],
      errors: [
        'Call expressions are not allowed.',
        'Call expressions are not allowed.'
      ]
    },

    {
      // https://github.com/vuejs/eslint-plugin-vue/issues/870
      code: `<template lang="pug">input(:value="interpolate(foo, bar, false)")</template>`,
      options: [
        {
          selector: 'CallExpression > :nth-child(3)[value!=true]',
          message: 'Third argument of interpolate must be true'
        }
      ],
      errors: [
        {
          message: 'Third argument of interpolate must be true',
          line: 1,
          column: 58
        }
      ]
    },
    // CSS vars injection
    {
      code: `
      <style>
      .text {
        color: v-bind('foo()')
      }
      </style>`,
      options: [
        {
          selector: 'CallExpression',
          message: 'Call expressions are not allowed.'
        }
      ],
      errors: [
        {
          message: 'Call expressions are not allowed.',
          line: 4,
          column: 24
        }
      ]
    }
  ]
})
