<!--
 * @Author       : wfl
 * @LastEditors: fj
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2024-04-19 14:47:04
 * @LastEditTime: 2024-05-29 17:45:01
-->
<template>
  <IkPreviewFile
    :list="list"
    isOnlyOfficePreview
    onlyofficeServer="http://192.168.1.82:8889"
    loadUrl="http://192.168.2.191:9030/server/oss/download?fileUrl="
  />
  <br />
  <IkPreviewFile :list="list" :icon-size="40" width="400px" simple />

  <el-table :data="[1,2]">
    <el-table-column prop="attachmentName" label="文件名">
      <IkPreviewFile :list="list" :icon-size="40" width="400px" simple />
    </el-table-column>
    <el-table-column prop="3123" label="3123">
      <IkUploadFile  :multiple="true" :limit="5" />
    </el-table-column>
  </el-table>
  <br />
  <IkPreviewFile :list="list" :icon-size="40" :show-bg="false" />
</template>
<script setup lang="ts">
import { ref } from "vue";
import {IkPreviewFile, IkUploadFile} from "@iking-ui/components";

const list = ref([
  {
    attachmentName: "测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件",
    attachmentId: "374e1d60f03c44848e32ff16f691fd38",
    attachmentSuffix: "xlsx",
    attachmentSize: "10254",
  },
  {
    attachmentName: "测试文件",
    attachmentId: "f2dc7996d87a48fca5e74d9b2a270f71",
    attachmentSuffix: "docx",
    attachmentSize: "10254",
  },
  {
    attachmentName: "测试文件",
    attachmentId: "f060b98d60cb4333bf41a0a2ee86f7da",
    attachmentSuffix: "ppt",
    attachmentSize: "10254",
  },
  {
    attachmentName: "测试文件",
    attachmentId: "2540d108dc5748efac2cb5bffd61efb0",
    attachmentSuffix: "pdf",
    attachmentSize: "10254",
  },
  {
    attachmentName: "测试文件",
    attachmentId: "2540d108dc5748efac2cb5bffd61efb0",
    attachmentSuffix: "png",
    attachmentSize: "10254",
  },
]);
</script>