<!--
 * @Author       : wfl
 * @LastEditors: qiye
 * @description  :
 * @updateInfo   :
 * @Date         : 2022-12-16 11:20:05
 * @LastEditTime: 2023-09-26 09:43:45
-->
<script lang="ts" setup name="IkTooltip">
import type { PropType  } from 'vue'
import {computed} from 'vue'

const props = defineProps({
  effect: {
    type: String as PropType<'dark' | 'light'>,
    default: 'dark'
  },
  content: {
    type: String,
    default: ''
  },
  placement: {
    type: String as PropType<
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    >,
    default: 'bottom-start'
  }
})

const _effect = computed(() => props.effect)
</script>

<template>
  <el-tooltip
    class="gl-tooltip"
    :effect="_effect"
    :content="content"
    :placement="placement"
    :enterable="false"
  >
    <slot></slot>
  </el-tooltip>
</template>
