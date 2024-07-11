<!--
 * @Author: zdl
 * @LastEditors: zdl
 * @description: 
 * @updateInfo: 内容:展开或收起
 * @Date: 2023-12-11 10:56:03
 * @LastEditTime: 2023-12-11 12:13:43
-->
<script lang="ts" setup>
import { ref, reactive } from "vue";
import IKExpandCollapse from "@iking-ui/components/IKExpandCollapse";

// 箭头类型
const isFoldArrow = ref<boolean>(false);
// 文字类型
const isFoldWord = ref<boolean>(false);
// 箭头文字类型
const isFoldAll = ref<boolean>(false);
// 展示demo内容
const isShowAll = ref<boolean>(false);

// 修改状态
const handleChang = (type: string) => {
  switch (type) {
    case "arrow":
      isFoldArrow.value = !isFoldArrow.value;
      break;
    case "word":
      isFoldWord.value = !isFoldWord.value;
      break;
    case "wordIcon":
      isFoldAll.value = !isFoldAll.value;
      break;
    case "all":
      isShowAll.value = !isShowAll.value;
      break;
    default:
      break;
  }
};
</script>
<template>
  <div>
    <div class="flex">
      示例: 展开和收起组件 :
      <IKExpandCollapse
        showType="word"
        :is-expand="isShowAll"
        @handleChangStatus="handleChang('all')"
      />
    </div>

    <div v-if="isShowAll" class="flex">
      <p>图标类型 ：</p>
      <IKExpandCollapse
        showType="icon"
        :is-expand="isFoldArrow"
        @handleChangStatus="handleChang('arrow')"
      /> &nbsp;&nbsp;
      <p>文字类型 ：</p>
      <IKExpandCollapse
        showType="word"
        :is-expand="isFoldWord"
        @handleChangStatus="handleChang('word')"
      />
      &nbsp;&nbsp;
      <p>图文类型 ：</p>
      <IKExpandCollapse
        showType="wordIcon"
        :is-expand="isFoldAll"
        @handleChangStatus="handleChang('wordIcon')"
      />
      &nbsp;&nbsp;
    </div>
    <p v-if="isFoldArrow || isFoldWord || isFoldAll">我是展开的内容面板</p>

  </div>
</template>
<style scoped lang="scss">
.flex {
  display: flex;
  align-items: center;
}
</style>
