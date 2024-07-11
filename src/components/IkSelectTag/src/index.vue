<!--
 * @Author       : wfl
 * @LastEditors  : wfl
 * @description  : 根据选择标签数量和长度决定显示 +N 的时机
 * @updateInfo   :
 * @Date         : 2022-11-02 12:05:01
 * @LastEditTime: 2024-05-13 11:43:09
-->
<script lang="ts" setup name="IkSelectTag">
import {IkStatuOver} from "@iking-ui/components";
import {computed, getCurrentInstance, PropType} from "vue";

const props = defineProps({
  prop: {
    type: Object as PropType<{ label: string; value: string } | null>,
    default: () => {
      return {}
    }
  },
  tagProps: {
    type: Object,
    default: () => {
      return {}
    }
  }
})

const ctx = getCurrentInstance()

const fixProp = computed(() => ({
  label: 'label',
  value: 'value',
  ...props.prop
}))

const modelValue = defineModel({
  type: [Array, String],
  default: ''
})
const tagList = computed(() => {
  let cks = []
  const options = ctx?.attrs.options as Array<any>
  if (Array.isArray(modelValue.value)) {
    cks = modelValue.value.map((at) => {
      return options.find((ot) => ot[fixProp.value.value] === at)
    })
  } else if (modelValue.value) {
    cks = [options.find((ot) => ot[fixProp.value.value] === modelValue.value)]
  }
  return {
    list: cks.map((c) => c[fixProp.value.label]).join(","),
    data: cks
  }
})

const emit = defineEmits(['close'])
const handClose = (item) => {
  modelValue.value = modelValue.value.filter((v) => v !== item[fixProp.value.value])
  emit('close', item, modelValue.value)
}
</script>

<template>
  <el-select
      v-bind="$attrs"
      :collapse-tags="false"
      v-model="modelValue"
      no-data-text="暂无数据"
      no-match-text="无匹配项">
    <slot>
      <el-option
          v-for="item in $attrs.options"
          :key="item[fixProp.value]"
          :label="item[fixProp.label]"
          :value="item[fixProp.value]"
          :disabled="item.disabled"
      >
      </el-option>
    </slot>
    <template #tag>
      <IkStatuOver v-show="tagList" :list="tagList.list" :data="tagList.data" v-bind="tagProps" @close="handClose" />
    </template>
  </el-select>
</template>

<style lang="scss" scoped>
</style>
