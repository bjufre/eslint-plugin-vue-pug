// AUTOGENERATED FROM https://github.com/vuejs/eslint-plugin-vue/blob/8f094200664a2b10bc597016f5486066a174e098/tests/lib/rules/require-v-for-key.js
/**
 * @author Toru Nagashima
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester
const rule = require('../../../eslint-plugin-vue/lib/rules/require-v-for-key')

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2015,
    templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug' }
  }
})

tester.run('require-v-for-key', rule, {
  valid: [
    {
      filename: 'test.vue',
      code: ''
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  div(v-for="x in list", v-bind:key="x")
</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  div(v-for="x in list", :key="x.foo")
</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  custom-component(v-for="x in list")
</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  template(v-for="x in list")
    div(:key="x")
</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  slot(v-for="x in list", :name="x")
</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  slot(v-for="x in list", :name="x")
    div(:key="x")
</template>`
    },
    // key on <template> : In Vue.js 3.x, you can place key on <template>.
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  template(v-for="x in list", v-bind:key="x")
    div
</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  template(v-for="x in list", v-bind:key="x")
    MyComp
</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  template(v-for="x in list", :key="x")
    div
</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  template(v-for="x in list", :key="x")
    MyComp
</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  template(v-for="x in list", :key="x.id")
    div
</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  template(v-for="x in list", :key="x.id")
    MyComp
</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  template(v-for="(x, i) in list", :key="i")
    div
</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  template(v-for="(x, i) in list", :key="i")
    MyComp
</template>`
    },
    // key on <slot> : In Vue.js 3.x, you can place key on <slot>.
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  slot(v-for="x in list", :key="x")
    div
</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  slot(v-for="x in list", :key="x")
    MyComp
</template>`
    }
  ],
  invalid: [
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  div(v-for="x in list")
</template>`,
      errors: ["Elements in iteration expect to have 'v-bind:key' directives."]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  div(v-for="x in list", key="100")
</template>`,
      errors: ["Elements in iteration expect to have 'v-bind:key' directives."]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  template(v-for="x in list")
    div
</template>`,
      errors: ["Elements in iteration expect to have 'v-bind:key' directives."]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  slot(v-for="x in list", :name="x")
    div
</template>`,
      errors: ["Elements in iteration expect to have 'v-bind:key' directives."]
    }
  ]
})
