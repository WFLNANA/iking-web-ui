<!--
 * @Author       : wfl
 * @LastEditors: zqf
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2023-11-13 17:51:01
 * @LastEditTime: 2024-05-29 19:51:16
-->
<script lang="ts" setup name="IkUploadImage">
import { ref, watch } from 'vue'
import { IkUploadImage } from '@iking-ui/components'
import { IkUploadFile } from '@iking-ui/components'
// const list = [{
//   name:'位图@2x.png',
//   url: "http://192.168.2.191:9030/server/oss/download?fileUrl=15ff90efd0ac41b3bfa71f42df8a79e0"
// }, {
//   url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
// }, {
//   url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
// },{
//   url:'https://img2.baidu.com/it/u=3329909248,3799019568&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1690477200&t=6214837ae3f288fa0ada9fe6b0bd1b36'
// }]
// https://img.yzcdn.cn/vant/cat.jpeg
// const list = ref(['https://img.yzcdn.cn/vant/cat.jpeg', 'https://img.yzcdn.cn/vant/cat.jpeg', 'https://img.yzcdn.cn/vant/cat.jpeg'])
const list = ref(['5c8ac08320c247d8899e7c8908447012'])
const lists = ref([])

const handleSuccess = () => {
}

watch(()=> list.value, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})

// watch(() => lists.value, (newVal, oldVal) => {
// })
</script>
<template>
  <IkUploadImage @success="handleSuccess" :multiple="true" :limit="5" />
  <br/>
  <IkUploadImage @success="handleSuccess" disabled :multiple="true" :limit="5" />
  <br/>
  <IkUploadFile type="card" image-mode plain :limit="2" tip  :multiple="false" tip-text="只允许上传.xls、.doc文件，单个文件大小不能超过5M" />
  <br/>
  <IkUploadFile :limit="88" :show-icon="false" tip multiple  tip-text="只允许上传.xls、.doc文件，单个文件大小不能超过5M" />
  <br/>
  <IkUploadFile :limit="88" tip multiple tip-text="只允许上传.xls、.doc文件，单个文件大小不能超过5M" />
  <br/>



</template>
<script setup lang="ts" namse="IkUploadFile">

</script>
