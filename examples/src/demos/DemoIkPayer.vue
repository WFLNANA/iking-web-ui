<script setup lang="ts">
import { IkPlayer } from '@iking-ui/components'
import {ref} from "vue";

const show = ref(false)
</script>

<template>
  <IkPlayer v-model="show" url="http://192.168.1.22:8080/demo.mp4" />
  <el-button @click="show = true">查看视频</el-button>
</template>

<style scoped lang="scss">

</style>