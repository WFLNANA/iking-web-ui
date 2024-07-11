<!--
 * @Author       : wfl
 * @LastEditors  : wfl
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2024-04-19 15:37:49
 * @LastEditTime : 2024-04-19 15:59:42
-->
<template>
  <IkCollapseCard>
    <template #header-leaft>
      左侧插槽
    </template>
    <template #header-right>
      右侧插槽
    </template>
    <div class="content">
        <p> 什么内容都可以在这里</p>
        <p> 什么内容都可以在这里</p>
        <p> 什么内容都可以在这里</p>
        <p> 什么内容都可以在这里</p>
        <p> 什么内容都可以在这里</p>
        <p> 什么内容都可以在这里</p>
        <p> 什么内容都可以在这里</p>
        <p> 什么内容都可以在这里</p>
    </div>
  </IkCollapseCard>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { IkCollapseCard } from '@iking-ui/components'
</script>