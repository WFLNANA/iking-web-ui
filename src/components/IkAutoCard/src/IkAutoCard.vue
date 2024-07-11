<!--
 * @Author       : wfl
 * @LastEditors: wfl
 * @description  :
 * @updateInfo   :
 * @Date         : 2024-03-12 14:00:50
 * @LastEditTime: 2024-05-14 14:07:19
-->
<script lang="ts" setup>
import {onMounted,ref, withDefaults} from 'vue'

withDefaults(defineProps<{
  line: number
}>(), {
  line: 2,
})
const ikAutoCard = ref(null)

</script>

<template>
  <div class="ik-auto-card" ref="ikAutoCard" :style="{'-webkit-line-clamp': line || 2}">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.ik-auto-card {
  width: 100%;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;

  &:hover {
    overflow: auto;
    -webkit-line-clamp: initial !important;
  }
}
</style>