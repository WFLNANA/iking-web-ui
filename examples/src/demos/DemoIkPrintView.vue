<!--
 * @Author: qiye
 * @LastEditors: qiye
 * @description: 打印预览示例
 * @Date: 2023-08-04 10:23:26
 * @LastEditTime: 2023-11-10 12:14:18
-->
<script setup lang="ts" name="DemoIkPrintCOnfig">
  import IkPrintView from '@iking-ui/components/IkPrintView';
import { reactive } from 'vue';

  const state = reactive({
    visible: false,
    srcPrefix: '',
    templateId: '846982303936024576',
    dataId: '1',
  })

  const methods = {
    open: () => {
      state.visible = true;
    }
  }
</script>
<template>
  <div>
    <div class="row-title">
      <span>示例：打印预览（基于积木报表）</span>
    </div>
    <el-row style="margin-top: 16px;" :gutter="16">
      <el-col :span="6">
        <el-form-item label="服务 host">
          <el-input v-model="state.srcPrefix" placeholder="请输入"></el-input>
        </el-form-item>
      
      </el-col>
      <el-col :span="6">
        <el-form-item label="模板 id">
          <el-input v-model="state.templateId" placeholder="请输入"></el-input>
        </el-form-item>
        
      </el-col>
      <el-col :span="6">
        <el-form-item label="数据 id">
          <el-input v-model="state.dataId" placeholder="请输入"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-button @click="methods.open">预览</el-button>
      </el-col>
    </el-row>
    <IkPrintView v-model="state.visible" :template-id="state.templateId" :data-id="state.dataId" />
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