<!--
 * @Author       : wfl
 * @LastEditors  : wfl
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2024-03-27 10:06:49
 * @LastEditTime : 2024-04-18 10:12:36
-->
<script lang="ts" setup>
import { ref } from "vue";
import IKExpandCollapse from "@iking-ui/components/IKExpandCollapse";
import IKDetailPreviewFiles from "@iking-ui/components/IKDetailPreviewFiles";
const files = ref<any>([
    {
      name: "可视化低代码平台-设计方案",
      suffix: '.doc',
      size: 5000,
      url:'可视化低代码平台-设计方案.doc'
    },
  ])

// 展示
const isShow = ref<boolean>(false);
const handleChang = () => {
  isShow.value = !isShow.value;
};
</script>
<template>
  <div>
    <div style="display: flex; align-items: center">
      <p>详情图片预览 ：</p>
      <IKExpandCollapse :is-expand="isShow" @handleChangStatus="handleChang()" />
    </div>
    <IKDetailPreviewFiles v-if="isShow" kk-url="http://192.168.2.144:8012" :file-list="files" file-width="100%" />
  </div>
</template>
<style scoped lang="scss"></style>
