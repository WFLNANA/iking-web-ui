<!--
 * @Author: qiye
 * @LastEditors: qiye
 * @description: 打印配置示例
 * @Date: 2023-08-04 10:23:26
 * @LastEditTime: 2023-11-10 11:59:53
-->
<script setup lang="ts" name="DemoIkPrintCOnfig">
// import IkPrintConfig from '@iking-ui/components/IkPrintConfig';
import { reactive } from 'vue';

  const state = reactive({
    id: '',
    visible: false
  })

  const methods = {
    add: () => {
      state.visible = false
      state.id = ''
      setTimeout(() => {
        state.visible = true
      })
    },
    update: () => {
      state.visible = false
      state.id = '1314846205892759552'
      setTimeout(() => {
        state.visible = true
      })

    },

    handleCreated: (id: string) => {
      state.id = id
    }
  }


</script>
<template>
  <div>
    <div class="row-title">
      <span>示例：打印配置（基于积木报表）</span>
      <el-button type="primary" link v-if="state.visible === false" @click="state.visible = true">显示</el-button>
      <el-button type="primary" link v-if="state.visible === true" @click="state.visible = false">隐藏</el-button>
    </div>
    <!-- <div class="print-config" v-if="state.visible">
      <div class="print-config__operation-row">
        <el-button @click="methods.add">新增</el-button>
        <el-button @click="methods.update">修改</el-button>
      </div>
      <div class="print-config__container">
        <IkPrintConfig  :id="state.id" @created="methods.handleCreated" />
      </div>
    </div> -->
  </div>
</template>
<style scoped>
  .print-config {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .print-config__container {
    flex-grow: 1;
  }
</style>