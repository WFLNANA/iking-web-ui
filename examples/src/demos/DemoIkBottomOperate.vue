<!--
 * @Author: zdl
 * @LastEditors: zdl
 * @description: 
 * @updateInfo: 内容:底部
 * @Date: 2024-01-02 13:56:21
 * @LastEditTime: 2024-01-02 15:27:29
-->
<script lang="ts" setup>
import { ref } from "vue";
import IKExpandCollapse from "@iking-ui/components/IKExpandCollapse";
import IkBottomOperate from "@iking-ui/components/IkBottomOperate";

// 展开收起
const isCollapse = ref(false);
const handleCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
</script>
<template>
  <div style="display: flex; align-items: center">
    <p>底部上一页,下一条示例:</p>
    <IKExpandCollapse :is-expand="isCollapse" @handleChangStatus="handleCollapse()" />
  </div>
  <div v-if="isCollapse">
    <p>全部都展示</p>
    <IkBottomOperate />
    <p>展示输入意见</p>
    <IkBottomOperate :lastShow="false" />
    <p>不展示输入意见</p>
    <IkBottomOperate :inputShow="false" />
    <p>自定义右边的按钮</p>
    <IkBottomOperate :inputShow="false">
      <template #bottomRight>
        <el-button type="warning">自定义按钮</el-button>
      </template>
    </IkBottomOperate>
    <p>展示上一条,下一条</p>
    <IkBottomOperate :buttonShow="false" :inputShow="false" />
  </div>
</template>
<style scoped lang="scss"></style>
