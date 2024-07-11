<!--
 * @Author: zdl
 * @LastEditors: zdl
 * @description: 
 * @updateInfo: 内容:onlyoffice的示例
 * @Date: 2024-01-03 15:51:16
 * @LastEditTime: 2024-01-03 16:32:28
-->
<script lang="ts" setup>
import { ref } from "vue";
import IKExpandCollapse from "@iking-ui/components/IKExpandCollapse";
import IkOnlyOffice from "@iking-ui/components/IkOnlyOffice";
// 展开收起
const isCollapse = ref(false);
const handleCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
// 初始化配置
const onlyOfficeConfig = ref(null);
const onlyOfficeFileId = ref(""); // 文件id
const token = ref(""); // 登录获取的token
const initOnlyOfficeConfig = () => {
  onlyOfficeConfig.value = {
    documentType: "word",
    document: {
      fileType: "doc",
      key: `${new Date().getTime()}`,
      title: "测试文档",
      lang: "zh-CN",
      url: `http://192.168.1.224:8001/server/oss/download?fileUrl=${onlyOfficeFileId.value}`,
    },
    editorConfig: {
      callbackUrl: `http://192.168.1.224:8001/business/summary/office/update/${onlyOfficeFileId.value}?token=${token.value}`, // 保存的回调函数
    },
  };
};
initOnlyOfficeConfig();
</script>
<template>
  <div style="display: flex; align-items: center">
    <p>onlyOffice示例:</p>
    <IKExpandCollapse :is-expand="isCollapse" @handleChangStatus="handleCollapse()" />
  </div>
  <div  v-if="isCollapse" style="height:700px">
    <IkOnlyOffice
      mode="edit"
      :config-options="onlyOfficeConfig"
      documentServerUrl="http://192.168.1.224:3080"
    />
  </div>
</template>
<style scoped lang="scss"></style>
