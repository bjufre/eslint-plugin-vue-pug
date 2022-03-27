// SKIP AUTOGENERATION
// AUTOGENERATED FROM https://github.com/vuejs/eslint-plugin-vue/blob/8f094200664a2b10bc597016f5486066a174e098/tests/lib/rules/no-deprecated-html-element-is.js
/**
 * @author Yosuke Ota
 * See LICENSE file in root directory for full license.
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../eslint-plugin-vue/lib/rules/no-deprecated-html-element-is')
const RuleTester = require('eslint').RuleTester

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2019,
    templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug' }
  }
})

ruleTester.run('no-deprecated-html-element-is', rule, {
  valid: [
    {
      filename: 'test.vue',
      code: `<template lang="pug">component(is="foo")</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">div</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">Foo(is="foo")</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">component(:is="\'foo\'")</template>`
    },

    // is="vue:xxx"
    {
      filename: 'test.vue',
      code: `<template lang="pug">div(is="vue:foo")</template>`
    }
  ],

  invalid: [
    {
      filename: 'test.vue',
      code: `<template lang="pug">div(is="foo")</template>`,
      errors: [
        {
          line: 1,
          column: 26,
          messageId: 'unexpected',
          endLine: 1,
          endColumn: 34
        }
      ]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">div(:is="foo")</template>`,
      errors: [
        {
          line: 1,
          column: 26,
          messageId: 'unexpected'
        }
      ]
    }
  ]
})
