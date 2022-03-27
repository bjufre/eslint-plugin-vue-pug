// SKIP AUTOGENERATION
// AUTOGENERATED FROM https://github.com/vuejs/eslint-plugin-vue/blob/8f094200664a2b10bc597016f5486066a174e098/tests/lib/rules/no-extra-parens.js
/**
 * @author Yosuke Ota
 */
'use strict'

const { RuleTester } = require('eslint')
const rule = require('../../../eslint-plugin-vue/lib/rules/no-extra-parens')

const tester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2015,
    templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug' }
  }
})

tester.run('no-extra-parens', rule, {
  valid: [
    `<template lang="pug">
button(:class=\`{
    a: b || c,
    [d + e]: f
  }\`)
</template>`,
    `<template lang="pug">button(:class="a + b + c * d", :class="[a + b + c * d]")</template>`,
    `<template lang="pug">button(:[(a+b)+c]="foo")</template>`,
    `<template lang="pug">button(:[(a+b)]="foo")</template>`,

    `<template lang="pug">button(:class="(a+b | bitwise)")</template>`,
    `<template lang="pug">button {{ (foo + bar | bitwise) }}</template>`,
    `<template lang="pug">button {{ (foo | bitwise) | filter }}</template>`,
    `<template lang="pug">button {{ (function () {} ()) }}</template>`,
    // CSS vars injection
    `
    <style>
    .text {
      color: v-bind('a')
    }
    </style>`,
    `
    <style>
    .text {
      color: v-bind(a)
    }
    </style>`
  ],
  invalid: [
    {
      code: `<template lang="pug">button(:class="a + b + (c * d)", :class="[a + b + (c * d)]")</template>`,
      output: `<template lang="pug">button(:class="a + b + c * d", :class="[a + b + c * d]")</template>`,
      errors: [
        {
          messageId: 'unexpected',
          line: 1
        },
        {
          messageId: 'unexpected',
          line: 1
        }
      ]
    },
    {
      code: `<template lang="pug">
button(:class=\`{
    a: (b || c),
    // [(d + e)]: f // valid in eslint v6.0
  }\`)
</template>`,
      output: `<template lang="pug">
button(:class=\`{
    a: b || c,
    // [(d + e)]: f // valid in eslint v6.0
  }\`)
</template>`,
      errors: [
        {
          messageId: 'unexpected',
          line: 3
        }
        // valid in eslint v6.0
        // {
        //   messageId: 'unexpected',
        //   line: 6
        // }
      ]
    },
    {
      code: `<template lang="pug">button(:class="(a+b)+c")</template>`,
      output: `<template lang="pug">button(:class="a+b+c")</template>`,
      errors: [
        {
          messageId: 'unexpected',
          line: 1
        }
      ]
    },
    {
      code: `<template lang="pug">button(:class="(a+b)")</template>`,
      output: `<template lang="pug">button(:class="a+b")</template>`,
      errors: [
        {
          messageId: 'unexpected',
          column: 37
        }
      ]
    },
    {
      code: `<template lang="pug">button(:class="(a+b) | filter")</template>`,
      output: `<template lang="pug">button(:class="a+b | filter")</template>`,
      errors: [{ messageId: 'unexpected' }]
    },
    {
      code: `<template lang="pug">button(:class="((a+b | bitwise))")</template>`,
      output: `<template lang="pug">button(:class="(a+b | bitwise)")</template>`,
      errors: [{ messageId: 'unexpected' }]
    },
    {
      code: `<template lang="pug">button {{ (foo + bar) }}</template>`,
      output: `<template lang="pug">button {{ foo + bar }}</template>`,
      errors: [
        {
          messageId: 'unexpected',
          column: 32
        }
      ]
    },
    {
      code: `<template lang="pug">button {{ (foo + bar) | filter }}</template>`,
      output: `<template lang="pug">button {{ foo + bar | filter }}</template>`,
      errors: [{ messageId: 'unexpected' }]
    },
    {
      code: `<template lang="pug">button {{ ((foo + bar | bitwise)) }}</template>`,
      output: `<template lang="pug">button {{ (foo + bar | bitwise) }}</template>`,
      errors: [{ messageId: 'unexpected' }]
    },
    {
      code: `<template lang="pug">button {{ ((foo | bitwise)) | filter }}</template>`,
      output: `<template lang="pug">button {{ (foo | bitwise) | filter }}</template>`,
      errors: [{ messageId: 'unexpected' }]
    },
    {
      code: `<template lang="pug">button {{ (foo(bar|bitwise)) }}</template>`,
      output: `<template lang="pug">button {{ foo(bar|bitwise) }}</template>`,
      errors: [{ messageId: 'unexpected' }]
    },
    {
      code: `<template lang="pug">button {{ ([foo|bitwise]) }}</template>`,
      output: `<template lang="pug">button {{ [foo|bitwise] }}</template>`,
      errors: [{ messageId: 'unexpected' }]
    },
    {
      code: `<template lang="pug">button {{ ({foo:bar|bitwise}) }}</template>`,
      output: `<template lang="pug">button {{ {foo:bar|bitwise} }}</template>`,
      errors: [{ messageId: 'unexpected' }]
    },
    {
      code: `<template lang="pug">button {{ ((function () {} ())) }}</template>`,
      output: `<template lang="pug">button {{ (function () {} ()) }}</template>`,
      errors: [{ messageId: 'unexpected' }]
    },
    {
      code: `<template lang="pug">button {{ ((function () {})()) }}</template>`,
      output: `<template lang="pug">button {{ (function () {})() }}</template>`,
      errors: [{ messageId: 'unexpected' }]
    },
    // CSS vars injection
    {
      code: `
      <style>
      .text {
        color: v-bind('(a)')
      }
      </style>`,
      output: `
      <style>
      .text {
        color: v-bind('a')
      }
      </style>`,
      errors: [{ messageId: 'unexpected' }]
    }
  ]
})
