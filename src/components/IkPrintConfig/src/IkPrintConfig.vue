<!--
 * @Author: qiye
 * @LastEditors: qiye
 * @description: 基于积木报表的打印模板定义组件
 * @Date: 2023-08-03 18:38:40
 * @LastEditTime: 2023-08-04 10:55:57
-->
<script lang="ts">
export default {
  name: "IkPrintConfig",
};
</script>
<script setup lang="ts">
import {withDefaults, computed, reactive, onMounted} from 'vue'

interface IProps {
  id: string
  srcPrefix?: string
  token?: string
}

const props = withDefaults(defineProps<IProps>(), {
  srcPrefix: ''
})
const emit = defineEmits(['created'])
const isUpdate = computed<boolean>(() => !!props.id)

const state = reactive<any>({
  currentId: props.id,
  loading: true,
  src: ''
})

/**
 * 创建
 */
const create = async () => {

  fetch(`${props.srcPrefix ?? ''}/jmreport/save`, {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
      Authorization: props.token ?? '',
    },
  })
    .then((response) => response.json())
    .then(({code, result}) => {
      if(code === 200){
        const id = result.id
        state.currentId = id
        state.src = `${props.srcPrefix ?? ''}/jmreport/index/${state.currentId}?token=${props.token}&menuType=printinfo`
        emit('created', state.currentId)
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

// 初始化系统
const init = () => {
  if (!isUpdate.value) {
    create()
    return
  }
  state.src = `${props.srcPrefix ?? ''}/jmreport/index/${state.currentId}?token=${props.token}`
}

onMounted(() => {
  init()
})
</script>

<template>
  <iframe
    v-if="state.src"
    width="100%"
    height="100%"
    :src="state.src"
    frameborder="0"
  >
  </iframe>
</template>
