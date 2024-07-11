<!--
 * @Author       : wfl
 * @LastEditors  : wfl
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2024-03-14 18:56:03
 * @LastEditTime : 2024-03-14 19:02:44
-->
<script setup lang="ts" name="DemoIKHorizontalStepBar">
import {ref, reactive} from 'vue';
import DemoIKHorizontalStepBar from '@iking-ui/components/IKHorizontalStepBar';

const list = [{title: '大范围的是否'}, {title: '大范围的是否1'}, {title: '大范围的是否2'}, {title: '大范围的是否3'}, {title: '大范围的是否4'}]
const active = ref(3)
</script>
<template>
 <DemoIKHorizontalStepBar :list="list" :active="active" />
</template>
<style scoped>
</style>