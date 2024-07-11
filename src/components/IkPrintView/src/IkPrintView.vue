<!--
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-08-03 17:18:40
 * @LastEditTime: 2023-08-16 10:36:20
-->
<script lang="ts">
export default {
  name: "IkPrintView",
};
</script>
<script setup lang="ts">

  import {computed, reactive, watch, onMounted  } from 'vue'

interface IProps {
  modelValue: boolean
  templateId: string
  dataId: string
  srcPrefix?: string
  token?: string
  idKey?: string
  width?: string
  height?: string
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: false,
  srcPrefix: '',
  idKey: 'id',
  width: '100%',
  height: 'calc(100vh - 186px)'
})

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get: () => {
    return props.modelValue
  },
  set: (value: boolean) => {
    emit('update:modelValue', value)
  }
})

const state = reactive({
  src: '',
  showIframe: false
})

const init = () => {
  state.showIframe = false
  state.src = `${props.srcPrefix}/jmreport/view/${props.templateId}?token=${props.token ?? ''}&${props.idKey}=${props.dataId}`

  setTimeout(() => {
    state.showIframe = true
  }, 300);
  
}

watch(() => model.value, (value: boolean) => {
  if (value)
    init()
})

onMounted(() => {
  if (model.value)
    init()
})
</script>

<template>
  <el-dialog v-model="model" fullscreen title="预览">
    <div :style="{ width: props.width, height: props.height }">
      <iframe
        v-if="state.showIframe"
        width="100%"
        height="100%"
        :src="state.src"
        frameborder="0"
      ></iframe>
    </div>
  </el-dialog>
</template>
