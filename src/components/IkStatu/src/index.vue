<!--
 * @Author       : wfl
 * @LastEditors: zqf
 * @description  :
 * @updateInfo   :
 * @Date         : 2022-11-02 12:05:01
 * @LastEditTime: 2024-03-15 11:03:11
-->
<script lang="ts" setup name="IkStatu">
import { PropType} from 'vue'
import { computed } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<any>,
    default: '',
  },
  // 传了type时，color和background不生效
  // 文字颜色
  color: {
    type: String,
    default: '',
  },
  // 背景色
  background: {
    type: String,
    default: '',
  },
  circleColor: {
    type: String,
    default: '',
  },
  effect: {
    type: String as PropType<'dark' | 'light' | 'plain'>,
    default: 'light',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  // 预留参数
  circleW: {
    type: Number,
    default: 8,
  },
  // 预留参数
  circleH: {
    type: Number,
    default: 8,
  },
  borderWidth: {
    type: Number,
    default: 1,
  },
  borderType: {
    type: String as PropType<'solid' | 'dashed' | 'dotted'>,
    default: 'solid',
  },
})
const tagStyle = computed(() => {
  return props.type
    ? ''
    : {
      color: props.color,
      backgroundColor: props.background,
      border: 'none',
      // borderColor: props.color
    }
})

const emit = defineEmits(['close'])
const handClose = () => {
  emit('close')
}
</script>

<template>
  <el-tag :effect="effect" class="ik-statu-tag" :class="{disabled: disabled}" :type="type" :style="tagStyle" :closable="$attrs.closable && !disabled" @close="handClose">
    <span v-if="circle" class="inline-block rounded-full" :style="{
      backgroundColor: type ? `var(--el-color-${type})` : circleColor,
      width: `${circleW}px`,
      height: `${circleH}px`,
    }"></span>
    {{ title }}
  </el-tag>
</template>

<style lang="scss" scoped>
.ik-statu-tag {
  margin: 5px 0;

  &:not(:first-child) {
    margin-left: 5px;
  }
}

.el-tag {
  border: none;
  border-radius: 6px;
}

.el-tag--success {
  color: var(--ik-color-tag-success);
  background-color: var(--ik-color-tag-success-light);
}

.el-tag--warning {
  color: var(--ik-color-tag-warning);
  background-color: var(--ik-color-tag-warning-light);
}

.el-tag--info {
  color: var(--ik-color-tag-primary);
  background-color: var(--ik-color-tag-primary-light);
}

.el-tag--danger {
  color: var(--ik-color-tag-error);
  background-color: var(--ik-color-tag-error-light);
}
</style>
