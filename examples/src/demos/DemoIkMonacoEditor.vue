<!--
 * @Author       : wfl
 * @LastEditors: zqf
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2023-05-11 11:20:50
 * @LastEditTime: 2024-03-18 17:04:25
-->
<template>
  <IkMonacoEditor ref="sqlRef" language="javascript" :code="code" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { IkMonacoEditor } from '@iking-ui/components'

const code = ref(`
  console.log('hello world')
`)
</script>