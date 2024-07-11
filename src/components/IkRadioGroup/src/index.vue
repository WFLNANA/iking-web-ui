<!--
 * @Author       : wfl
 * @LastEditors: qiye
 * @description  :
 * @updateInfo   :
 * @Date         : 2023-09-14 11:15:19
 * @LastEditTime: 2024-03-27 10:53:03
-->
<script setup lang="ts" name="IkRadioGroup">
import type {PropType} from 'vue';
defineProps({
  list: {
    type: Array as PropType<{
      label: String
      value: any
    }[]>
  },
  // 是否是按钮模式
  isButton: {
    type: Boolean,
    default: true
  }
})

const active = defineModel({
  type: String,
  default: ''
})
</script>

<template>
  <el-radio-group v-bind="$attrs" v-model="active" class="ik-radio-btn">
    <el-radio-button v-for="(item, index) in list" :key="index" :label="item.value">{{ item.label }}</el-radio-button>
  </el-radio-group>
</template>

<style lang="scss" scoped>
.ik-radio-btn {
  padding: 4px;
  background-color: var(--ik-color-bg-page);
  border-radius: 6px;

  :deep(.el-radio-button__inner) {
    background: transparent;
    border: none;
    border-left: none !important;
  }

  :deep(.el-radio-button__original-radio:checked+.el-radio-button__inner) {
    color: var(--el-color-primary);
    background-color: var(--ik-card-bg);
    border: none;
    padding: 8px 20px;
    border-radius: 6px;
    box-shadow: none;
  }

  :deep(.el-radio-button:last-child .el-radio-button__inner) {
    border-radius: var(--el-border-radius-base);
  }
}
</style>
