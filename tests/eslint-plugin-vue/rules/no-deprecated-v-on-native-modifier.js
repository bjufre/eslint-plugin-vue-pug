// SKIP AUTOGENERATION
// AUTOGENERATED FROM https://github.com/vuejs/eslint-plugin-vue/blob/8f094200664a2b10bc597016f5486066a174e098/tests/lib/rules/no-deprecated-v-on-native-modifier.js
/**
 * @author Yosuke Ota
 * See LICENSE file in root directory for full license.
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../eslint-plugin-vue/lib/rules/no-deprecated-v-on-native-modifier')
const RuleTester = require('eslint').RuleTester

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2015,
    templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug' }
  }
})

ruleTester.run('no-deprecated-v-on-native-modifier', rule, {
  valid: [
    {
      filename: 'test.vue',
      code: `<template lang="pug">input(v-on:keyup.enter='fire')</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">input(@keyup.enter='fire')</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">input(v-native:foo.native.foo.bar='fire')</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">input(@native.enter='fire')</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">input(:keydown.native='fire')</template>`
    }
  ],

  invalid: [
    {
      filename: 'test.vue',
      code: `<template lang="pug">input(v-on:keyup.native='fore')</template>`,
      errors: [
        {
          line: 1,
          column: 39,
          messageId: 'deprecated',
          endLine: 1,
          endColumn: 45
        }
      ]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">input(v-on:keyup.foo.native.bar='fore')</template>`,
      errors: [
        {
          line: 1,
          column: 43,
          messageId: 'deprecated',
          endLine: 1,
          endColumn: 49
        }
      ]
    }
  ]
})
