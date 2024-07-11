<!--
 * @Author: qiye
 * @LastEditors: zdl
 * @description: page description
 * @Date: 2023-11-10 11:15:27
 * @LastEditTime: 2023-12-11 10:59:13
-->
<script setup lang="ts" name="DemoIkFullCalendar">
import {ref, reactive} from 'vue';
import IkFullCalendar from '@iking-ui/components/IkFullCalendar';

const state = reactive({
  visible: false,
});

const events = ref<any[]>([]);
</script>
<template>
<div>
  <div class="row-title">
    <span>示例：日历组件</span>
    <el-button type="primary" link v-if="state.visible === false" @click="state.visible = true">显示</el-button>
    <el-button type="primary" link v-if="state.visible === true" @click="state.visible = false">隐藏</el-button>
  </div>
  <div v-if="state.visible" style="width:1080px;
    height:1080px; text-align: center; margin: 0 auto;">
  <IkFullCalendar v-model="events"></IkFullCalendar>
</div>
</div>
</template>
<style scoped>
</style>