<script lang="ts" setup>
import { ref } from 'vue'
import { IkPreviewFile } from '@iking-ui/components'

const visable = ref(false)

const loadUrl = ref('http://192.168.2.171/api/server/oss/download?fileUrl=')
const url = ref('73ee4fe018f34b63b702862b8537f30a')
const filename = ref('test.png')
const handLoadFile = () => {
  loadUrl.value = ''
  url.value = 'http://192.168.2.144:8080/金合科技面试官手册2023.2.6.xlsx'
  filename.value = ''
}
</script>

<template>
 <IkPreviewFile v-model="visable" :load-url="loadUrl" :url="url" kk-url="http://192.168.2.144:8012/onlinePreview?url=" :file-name="filename" />

 <el-button @click="visable = true">tankuang1</el-button>
 <el-button @click="handLoadFile">加载新资源</el-button>
</template>