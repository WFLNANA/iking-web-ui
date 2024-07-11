<script setup lang="ts">
import {computed, provide} from "vue";

const props = defineProps({
  // onlyoffice配置
  onlyofficeConfig: {
    type: Object,
    default: () => null
  },
  // 平台token
  token: {
    type: String,
    default: ''
  },
  // 平台用户信息
  userInfo: {
    type: Object,
    default: () => null
  },
  // 资源加载地址
  loadUrl: {
    type: String,
    default: ''
  },
  // 资源上传地址
  uploadUrl: {
    type: String,
    default: ''
  },
  iconConfig: {
    type: Object,
    default: () => null
  }
})

provide('onlyofficeConfig', computed(() => props.onlyofficeConfig))
provide('token', computed(() => props.token))
provide('userInfo', computed(() => props.userInfo))
provide('loadUrl', computed(() => props.loadUrl))
provide('uploadUrl', computed(() => props.uploadUrl))
provide('iconConfig', computed(() => props.iconConfig))

</script>

<template>
  <slot></slot>
</template>