<!--
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-11-10 11:15:27
 * @LastEditTime: 2023-12-22 15:21:11
-->
<script setup lang="ts" name="DemoIkRadioGroup">
import {ref, reactive} from 'vue';
import IkRadioGroup from '@iking-ui/components/IkRadioGroup';

const ikIconPickerRef = ref<any>(null);
const state = reactive({
  model: 'unapproved',
  list: [{ label: '待审列表', value: 'unapproved' }, { label: '已审列表', value: 'approved' }]
});

const handleOpen = () => {
  ikIconPickerRef.value?.open()
}


</script>
<template>
<div>
  <div class="row-title">
    <span class="demo-label">示例：按钮组组件</span>
    <IkRadioGroup  v-model="state.model" :list="state.list" size="small">
      <el-button @click="handleOpen"  link type="primary">选择</el-button>
    </IkRadioGroup>
    <IkRadioGroup  v-model="state.model" :list="state.list">
      <el-button @click="handleOpen"  link type="primary">选择</el-button>
    </IkRadioGroup>
  </div>
</div>
</template>
<style scoped>
</style>