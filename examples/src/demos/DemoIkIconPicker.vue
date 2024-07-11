<!--
 * @Author       : wfl
 * @LastEditors  : wfl
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2024-03-27 10:06:49
 * @LastEditTime : 2024-04-09 15:03:53
-->
<!--
 * @Author: qiye
 * @LastEditors: zqf
 * @description: page description
 * @Date: 2023-11-10 11:15:27
 * @LastEditTime: 2024-03-22 16:55:31
-->
<script setup lang="ts" name="DemoIkIconPicker">
import {ref, reactive} from 'vue';
import {IkIconPicker, IkSvgIcon} from '@iking-ui/components';
import "iking-admin-style/style/globals.scss";

const ikIconPickerRef = ref<any>(null);
const state = reactive({
  model: ''
});

</script>
<template>
<div>
  <IkSvgIcon table-icon-type="button" title="测试" @click="console.log(123123)" />
  <IkSvgIcon name="iksvg_yueliang" title="测试" />
  <IkSvgIcon name="iksvg_yueliang" error title="测试" />
  <IkSvgIcon name="iksvg_yueliang" padding="6px" show-bg error active title="测试" />
  <IkSvgIcon name="iksvg_yueliang" bg padding="6px" primary active title="测试" />

  <IkSvgIcon name="iksvg_yueliang" error active title="测试" />
  <IkSvgIcon name="iksvg_yueliang" bg padding="6px" error active title="测试" />

  <IkSvgIcon name="iksvg_yueliang" success active title="测试" />
  <IkSvgIcon name="iksvg_yueliang" bg padding="6px" success active title="测试" />

  <IkSvgIcon name="iksvg_yueliang" bg padding="6px" :size="36" :width="48" success active title="测试" />
  <div class="row-title">

    <span class="demo-label">示例：图标选择组件</span>
    <IkIconPicker v-model="state.model" />
    <!-- <IkIconPicker ref="ikIconPickerRef" :allow-icon-micro="false" v-model="state.model">
      <el-button @click="handleOpen"  link type="primary">选择</el-button>
    </IkIconPicker> -->
  </div>
</div>
</template>
<style lang="scss">
.row-title{
  display: flex;
}
//.ik-svg-icon.ik-icon {
//  color: var(--ik-color-icon-dark);
//  cursor: pointer;
//  border-radius: var(--ik-border-radius-s);
//  transition: all var(--ts-time-base) ease-in-out;
//
//  &:hover {
//    --ik-color-icon-dark: var(--ik-color-tag-primary);
//    --ik-color-icon-light: var(--ik-color-icon-light-hover);
//  }
//
//  &.active {
//    --ik-color-icon-dark: var(--ik-color-tag-primary);
//    --ik-color-icon-light: var(--ik-color-icon-light-hover);
//    &:hover{
//      opacity: 0.75;
//    }
//  }
//
//  &.bg,
//  &.show-bg {
//    --ik-color-icon-dark: var(--ik-color-bgicon-dark);
//    --ik-color-icon-light: var(--ik-color-bgicon-light);
//
//    background-color: var(--ik-color-bg-icon);
//
//    &:hover {
//      --ik-color-icon-dark: var(--ik-color-tag-primary);
//      --ik-color-icon-light: var(--ik-color-icon-light-hover);
//
//      background-color: var(--ik-color-bg-button-secondary);
//    }
//
//    &.active {
//      --ik-color-icon-dark: var(--ik-color-tag-primary);
//      --ik-color-icon-light: var(--ik-color-icon-light-hover);
//
//      background-color: var(--ik-color-bg-button-secondary);
//    }
//  }
//
//  &.success {
//    &:hover {
//      --ik-color-icon-dark: var(--ik-color-success);
//      --ik-color-icon-light: var(--ik-color-tag-success-light);
//    }
//
//    &.bg,
//    &.show-bg {
//      &:hover {
//        background-color: var(--ik-color-icon-success-bg);
//      }
//    }
//
//    &.active {
//      --ik-color-icon-dark: var(--ik-color-success);
//      --ik-color-icon-light: var(--ik-color-tag-success-light);
//      &.bg,&.show-bg{
//        background-color: var(--ik-color-icon-success-bg);
//      }
//    }
//  }
//
//  &.warning {
//    &:hover {
//      --ik-color-icon-dark: var(--ik-color-warning);
//      --ik-color-icon-light: var(--ik-color-tag-warning-light);
//    }
//
//    &.bg,
//    &.show-bg {
//      &:hover {
//        background-color: var(--ik-color-icon-warning-bg);
//      }
//    }
//
//    &.active {
//      --ik-color-icon-dark: var(--ik-color-warning);
//      --ik-color-icon-light: var(--ik-color-tag-warning-light);
//      &.bg,&.show-bg{
//        background-color: var(--ik-color-icon-warning-bg);
//      }
//    }
//  }
//
//  &.error {
//    &:hover {
//      --ik-color-icon-dark: var(--ik-color-error);
//      --ik-color-icon-light: var(--ik-color-icon-error-light);
//    }
//
//    &.bg,
//    &.show-bg {
//      &:hover {
//        background-color: var(--ik-color-icon-error-bg);
//      }
//    }
//
//    &.active {
//      --ik-color-icon-dark: var(--ik-color-error);
//      --ik-color-icon-light: var(--ik-color-icon-error-light);
//      &.bg,&.show-bg{
//        background-color: var(--ik-color-icon-error-bg);
//      }
//    }
//  }
//
//  &:not(:first-child) {
//    margin-left: var(--ik-margin-s-12);
//  }
//
//  &.default {
//    width: 40px;
//    height: 40px;
//    font-size: 20px;
//    box-sizing: border-box;
//  }
//
//  &.small {
//    width: 32px;
//    height: 32px;
//    box-sizing: border-box;
//    font-size: 16px !important;
//  }
//
//  &.big {
//    width: 40px;
//    height: 40px;
//    box-sizing: border-box;
//    font-size: 24px;
//  }
//}

</style>