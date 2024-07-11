<!--
 * @Author       : wfl
 * @LastEditors  : wfl
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2024-03-14 18:56:03
 * @LastEditTime : 2024-03-14 19:02:34
-->
<script setup lang="ts" name="DemoIKVerticalStepBar">
import {ref, reactive} from 'vue';
import DemoIKVerticalStepBar from '@iking-ui/components/IKVerticalStepBar';

const list = [{name: '大范围的是否'}, {name: '大范围的是否1'}, {name: '大范围的是否2'}, {name: '大范围的是否3'}, {name: '大范围的是否4'}]
const active = ref('大范围的是否')
</script>
<template>
 <DemoIKVerticalStepBar :list="list" :active="active" />
</template>
<style scoped>
</style>