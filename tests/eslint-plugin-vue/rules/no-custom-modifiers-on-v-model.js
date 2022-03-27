// SKIP AUTOGENERATION
// SKIP AUTOGENERATION
// AUTOGENERATED FROM https://github.com/vuejs/eslint-plugin-vue/blob/8f094200664a2b10bc597016f5486066a174e098/tests/lib/rules/no-custom-modifiers-on-v-model.js @2022-03-19T14:09:19.024Z
/**
 * @author Przemyslaw Falowski (@przemkow)
 * @fileoverview This rule checks whether v-model used on the component do not have custom modifiers
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../eslint-plugin-vue/lib/rules/no-custom-modifiers-on-v-model')
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

ruleTester.run('no-custom-modifiers-on-v-model', rule, {
  valid: [
    {
      filename: 'test.vue',
      code: `<template lang="pug">MyComponent(v-model:propName="foo")</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">MyComponent(v-model="foo")</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">MyComponent(v-model:propName.trim="foo")</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">MyComponent(v-model.trim="foo")</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">MyComponent(v-model:propName.lazy="foo")</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">MyComponent(v-model.lazy="foo")</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">MyComponent(v-model:propName.number="foo")</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">MyComponent(v-model.number="foo")</template>`
    }
  ],

  invalid: [
    {
      filename: 'test.vue',
      code: `<template lang="pug">MyComponent(v-model:propName.aaa="foo")</template>`,
      errors: ["'v-model' directives don't support the modifier 'aaa'."]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">MyComponent(v-model.aaa="foo")</template>`,
      errors: ["'v-model' directives don't support the modifier 'aaa'."]
    }
  ]
})
