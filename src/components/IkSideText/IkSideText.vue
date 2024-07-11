<!--
 * @Author       : wfl
 * @LastEditors  : wfl
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2024-04-19 14:47:04
 * @LastEditTime : 2024-04-24 09:28:27
-->
<script setup lang="ts" name="IkSideText">
import type { PropType } from 'vue'
import { computed, defineProps, ref } from 'vue'
import { IkSvgIcon } from '@iking-ui/components'
import IkLinearIcon from './IkLinearIcon.vue'

const props = defineProps({
  // 名称
  name: {
    type: String,
    default: '',
  },
  // 头像
  avatar: {
    type: String,
    default: '',
  },
  // 头像类型，'url' | 'icon'
  avatarType: {
    type: String,
    default: 'url',
  },
  showIconBg: {
    type: Boolean,
    default: false,
  },
  iconType: {
    type: String as PropType<'primary' | 'success' | 'warning' | 'error' | 'info'>,
    default: 'info',
  },
  iconBackgroundColor: {
    type: String,
    default: '',
  },
  // 主文本
  text: {
    type: String,
    default: '',
  },
  // 副文本
  subText: {
    type: String,
    default: '',
  },
  shape: {
    type: String as PropType<'square' | 'circle'>,
    default: 'square',
  },
  size: {
    type: Number,
    default: 50,
  },
  iconSize: {
    type: String || Number,
    default: 'small',
  },
  loadUrl: {
    type: String,
    default: '',
  },
})

const setFileUrl = (url: string) => {
  return url
    ? url.startsWith('http')
      ? url
      : `${props.loadUrl}${url}`
    : ''
}

const fixUrl = computed(() => setFileUrl(props.avatar))

const showImg = ref(Boolean(props.avatar))
const handError = () => {
  showImg.value = false
}
</script>

<template>
  <div class="side-text items-center">
    <div class="side-left flex items-center">
      <el-avatar v-if="avatarType === 'url'" :style="{ '--el-avatar-bg-color': 'var(--ik-color-primary)' }" :size="size"
        :shape="shape" :src="fixUrl" fit="contain" @error="handError">
        <template v-if="!showImg">
          {{ name.slice(-2) }}
        </template>
      </el-avatar>
      <IkSvgIcon v-if="avatarType === 'icon'" :name="`iksvg_${avatar?.replace('iksvg_', '')}`" :show-bg="showIconBg"
        :type="iconType" :style="{ fontSize: showIconBg ? '34px' : '50px' }" :size="iconSize" />
      <IkLinearIcon v-if="avatarType === 'linearIcon'" :icon="avatar" :background-color="iconBackgroundColor" />
    </div>
    <div class="side-right">
      <p class="text-over-line">
        {{ text }}
      </p>
      <el-tooltip :content="subText">
        <p class="text-over-line">
          {{ subText }}
        </p>
      </el-tooltip>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side-text {
  display: flex;

  .side-left {
    margin-right: 12px;
  }

  .side-right {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    text-overflow: ellipsis;

    p {
      overflow: hidden;
      text-overflow: ellipsis;

      &:last-child {
        color: #b5b5c3;
      }
    }
  }
}
</style>
