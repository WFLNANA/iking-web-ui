<!--
 * @Author: zdl
 * @LastEditors: fj
 * @description: 
 * @updateInfo: 内容:onlyOffice
 * @Date: 2024-01-03 15:35:12
 * @LastEditTime: 2024-06-25 09:56:17
-->
<script lang="ts" setup name="IkOnlyOffice">
import {Ref, ref} from "vue";
import { DocumentEditor } from "@onlyoffice/document-editor-vue";
const props = defineProps({
  // 文件服务器的服务的地址
  documentServerUrl: {
    type: String,
    default: "",
  },
  // 配置项
  configOptions: {
    type: Object,
    default: () => {},
  },
  // 元素的高度
  officeHeight: {
    type: String,
    default: "100%",
  },
});

// 基础属性
const documentOptions: Ref<any> = ref({
  width: "100%",
  height: "100%",
  ...(props.configOptions || {}),
  ...props.configOptions,
});

// 文档初始化
const onDocumentReady = () => {
  console.info("文档加载完成", props.configOptions);
};
</script>

<template>
  <div :style="{ height: props.officeHeight }">
    <DocumentEditor
      :id="`${new Date().getTime()}`"
      ref="editorRef"
      :document-server-url="documentServerUrl"
      :config="documentOptions"
      :events_onDocumentReady="onDocumentReady"
    />
  </div>
</template>

<style scoped>
/* */
</style>
