<!--
 * @Author       : wfl
 * @LastEditors  : wfl
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2024-03-27 10:06:49
 * @LastEditTime : 2024-04-09 15:03:53
-->
<!--
 * @Author: qiye
 * @LastEditors: zqf
 * @description: page description
 * @Date: 2023-11-10 11:15:27
 * @LastEditTime: 2024-03-22 16:55:31
-->
<script setup lang="ts" name="DemoIkIconPicker">
import {ref, reactive} from 'vue';
import {IkIconPicker, IkSvgIcon} from '@iking-ui/components';

const ikIconPickerRef = ref<any>(null);
const state = reactive({
  model: ''
});

</script>
<template>
<div>
  <IkSvgIcon table-icon-type="button" title="测试" @click="console.log(123123)" />
  <div class="row-title">

    <span class="demo-label">示例：图标选择组件</span>
    <IkIconPicker v-model="state.model" />
    <!-- <IkIconPicker ref="ikIconPickerRef" :allow-icon-micro="false" v-model="state.model">
      <el-button @click="handleOpen"  link type="primary">选择</el-button>
    </IkIconPicker> -->
  </div>
</div>
</template>
<style scoped>
.row-title{
  display: flex;
}
</style>