<!--
 * @Author: zqf
 * @Date: 2024-05-29 17:55:18
 * @email: 13289847921@163.com
 * @LastEditors: zqf
 * @LastEditTime: 2024-05-29 17:56:53
 * @Description: 
-->
<script setup lang="ts">
import { ref } from "vue";
import { IkCurrencyInput } from "@iking-ui/components";
const currency = ref(0);
</script>
<template>
  <div>金额输入框</div>
  <IkCurrencyInput v-model="currency"></IkCurrencyInput>
</template>
<style lang="scss" scoped></style>
