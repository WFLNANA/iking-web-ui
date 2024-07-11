<!--
 * @Author       : wfl
 * @LastEditors: fj
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2023-05-11 11:20:50
 * @LastEditTime: 2024-05-28 15:07:42
-->
<template>
  <el-button @click="show = true">显示IkBaseDialog弹窗</el-button>
  <el-button @click="showDialog = true">显示无头无尾弹窗</el-button>
  <IkBaseDialog v-model="show" title="弹窗标题">
    弹窗内容

    <template #footer>
      <el-button bg text @click="show = false">取消</el-button>
      <el-button type="primary" @click="show = false">确定</el-button>
    </template>
  </IkBaseDialog>

  <IkBaseDialog
    v-model="showDialog"
    no-header
    no-footer
    title="弹窗标题"
    :showCloseBg="true"
    :fullscreen="true"
  >
    弹窗内容

    <template #footer>
      <el-button bg text @click="showDialog = false">取消</el-button>
      <el-button type="primary" @click="showDialog = false">确定</el-button>
    </template>
  </IkBaseDialog>
</template>
<script setup lang="ts"  name="审批过程流程">
import { ref } from "vue";
import { IkBaseDialog } from "@iking-ui/components";

const show = ref(false);
const showDialog = ref(false);
</script>