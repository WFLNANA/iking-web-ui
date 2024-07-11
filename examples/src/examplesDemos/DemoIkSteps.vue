<!--
 * @Author: zqf
 * @Date: 2024-03-21 15:43:07
 * @email: 13289847921@163.com
 * @LastEditors: zqf
 * @LastEditTime: 2024-03-25 10:18:35
 * @Description: 
-->
<template>
  <div>
    <div>步骤条示例组件</div>
    <IKHorizontalStepBar :list="testList" v-model:active="activeHorizontal" :needClick="true"/>
    <IKVerticalStepBar
      v-model:active="active"
      :list="menuList"
      :needClick="true"
    ></IKVerticalStepBar>
  </div>
</template>
<script setup lang="ts">
import { IKHorizontalStepBar } from "@iking-ui/components";
import { IKVerticalStepBar } from "@iking-ui/components";
import { ref } from "vue";
const active = ref('3-2');
const activeHorizontal = ref(3);
const menuList = [
  {
    id: 1,
    name: "基本信息",
  },
  {
    id: 2,
    name: "服务能力基本信息",
  },
  {
    id: 3,
    name: "项目其他信息",
    children: [
      {
        id: 3 - 1,
        name: "公司信息",
      },
      {
        id: 3 - 2,
        name: "服务信息",
      },
      {
        id: 3 - 3,
        name: "数据信息",
      },
    ],
  },
  {
    id: 4,
    name: "销售许可证",
  },
  {
    id: 5,
    name: "合同信息",
  },
];
const testList = [
  {
    title: "基本信息",
    value: "",
    disabled: false,
  },
  {
    title: "服务能力信息",
    value: "",
    disabled: false,
  },
  {
    title: "项目其他信息",
    value: "",
    disabled: false,
  },
  {
    title: "销售许可证",
    value: "",
    disabled: false,
  },
  {
    title: "合同信息",
    value: "",
    disabled: false,
  },
  {
    title: "基本信息1",
    value: "",
    disabled: false,
  },
  {
    title: "服务能力信息2",
    value: "",
    disabled: false,
  },
];
</script>
<style></style>
