<!--
 * @Author       : wfl
 * @LastEditors: zqf
 * @description  :
 * @updateInfo   :
 * @Date         : 2024-03-06 12:22:18
 * @LastEditTime: 2024-03-15 14:39:52
-->
<script setup lang="ts">
import {computed, defineOptions, inject, Ref, withDefaults} from 'vue'
import {ikColor} from 'iking-utils-pro'

defineOptions({
  name: 'IkSvgIcon',
})

const props = withDefaults(defineProps<{
  name: string
  flip?: 'horizontal' | 'vertical' | 'both'
  rotate?: number
  // 图标颜色
  color?: string
  // 图标次颜色
  colorLight?: string
  // 图标次颜色未设置时图标次颜色透明度
  opacity?: number
  size?: 'default' | 'small' | 'big' | string | number
  width?: number | string
  bg?: boolean
  // 兼容之前属性，新页面使用bg属性即可
  showBg?: boolean
  padding?: string
  primary?: boolean
  warning?: boolean
  success?: boolean
  error?: boolean
  // 关闭提示文字   提示文字通过title属性传入
  notip?: boolean
  title?: string
  type?: 'primary' | 'success' | 'warning' | 'error' | 'info'
  active?: boolean
  disabled?: boolean
  tableIconType?: 'icon' | 'button'
}>(), {
  size: '',
  bg: false,
  showBg: false,
  padding: '6px',
  notip: false,
  opacity: 0.5,
  active: false,
  disabled: false,
})
const iconConfig: Ref<any> | undefined = inject('iconConfig')
const cConfig = computed(() => {
  return {
    ...(iconConfig?.value || {}),
    ...props
  }
})
const outputType = computed(() => {
  const {name} = cConfig.value
  if (/^http?:\/\//.test(name)) {
    return 'img'
  } else if (/i-[^:]+:[^:]+/.test(name)) {
    return 'unocss'
  } else if (name?.startsWith('iksig')) {
    return 'iksig'
  } else if (name?.includes(':')) {
    return 'iconify'
  } else if (name?.startsWith('iksvg')) {
    return 'svg'
  } else {
    return 'i'
  }
})
const style = computed(() => {
  const transform = []
  if (cConfig.value.flip) {
    switch (cConfig.value.flip) {
      case 'horizontal':
        transform.push('rotateY(180deg)')
        break
      case 'vertical':
        transform.push('rotateX(180deg)')
        break
      case 'both':
        transform.push('rotateX(180deg)')
        transform.push('rotateY(180deg)')
        break
    }
  }
  if (cConfig.value.rotate) {
    transform.push(`rotate(${cConfig.value.rotate % 360}deg)`)
  }

  const _style: any = {
    ...(cConfig.value.color && {color: cConfig.value.color}),
    ...(cConfig.value.size && {fontSize: typeof cConfig.value.size === 'number' ? `${cConfig.value.size}px` : cConfig.value.size}),
    ...(transform.length && {transform: transform.join(' ')}),
    padding: (cConfig.value.showBg || cConfig.value.bg) ? cConfig.value.padding : 0,
    ...(cConfig.value.color && outputType.value !== 'iksig')
        ? {
          '--ik-color-icon-dark': cConfig.value.color,
          '--ik-color-icon-light': cConfig.value.colorLight || ikColor.setOpacity(cConfig.value.color, cConfig.value.opacity),
        }
        : {},
  }
  if(cConfig.value.width){
    _style.width = _style.height = typeof cConfig.value.width === 'number' ? `${cConfig.value.width}px` : cConfig.value.width
  }
  return _style
})

</script>

<template>
  <span class="ik-svg-icon ik-icon-span inline-block inline-flex justify-center box-content line-height-[0]"
        v-if="cConfig.tableIconType === 'icon' || !cConfig.tableIconType">
    <i v-if="cConfig.notip || !cConfig.title"
       class="ik-svg-icon ik-icon relative h-[1em] w-[1em] inline-flex items-center justify-center fill-current leading-[1em] transition"
       :class="{
        [name]: outputType === 'unocss',
        'show-bg': cConfig.showBg || cConfig.bg,
        'default': cConfig.size === 'default',
        'small': cConfig.size === 'small',
        'big': cConfig.size === 'big',
        'warning': cConfig.warning || cConfig.type === 'warning',
        'primary': cConfig.primary ||cConfig.type === 'primary',
        'success': success || cConfig.type === 'success',
        'error': cConfig.error || cConfig.type === 'error',
        'active': cConfig.active,
        'disabled': cConfig.disabled,
      }" :style="style">
      <!-- <Icon v-if="outputType === 'iconify'" :icon="name" /> -->
      <i v-if="outputType === 'iksig'" :class="`iksig ${cConfig.name}`" :style="style"></i>
      <svg v-else-if="outputType === 'svg'" class="h-[1em] w-[1em]" aria-hidden="true">
        <use :xlink:href="`#${cConfig.name}`"/>
      </svg>
      <img v-else-if="outputType === 'img'" :src="cConfig.name" class="h-[1em] w-[1em]">
      <i v-else :class="cConfig.name" :style="style"></i>
    </i>
    <el-tooltip v-else :content="cConfig.title" placement="top">
      <i class="ik-svg-icon ik-icon relative h-[1em] w-[1em] inline-flex items-center justify-center fill-current leading-[1em] transition"
         :class="{
          [name]: outputType === 'unocss',
          'show-bg': cConfig.showBg || cConfig.bg,
          'default': cConfig.size === 'default',
          'small': cConfig.size === 'small',
          'big': cConfig.size === 'big',
            'warning': cConfig.warning || cConfig.type === 'warning',
        'primary': primary || cConfig.type === 'primary',
        'success': success || cConfig.type === 'success',
        'error': cConfig.error || cConfig.type === 'error',
          'active': cConfig.active,
        }" :style="style">
        <i v-if="outputType === 'iksig'" :class="`iksig ${cConfig.name}`" :style="style"></i>
        <svg v-else-if="outputType === 'svg'" class="h-[1em] w-[1em]" aria-hidden="true">
          <use :xlink:href="`#${cConfig.name}`"/>
        </svg>
        <img v-else-if="outputType === 'img'" :src="cConfig.name" class="h-[1em] w-[1em]">
         <i v-else :class="cConfig.name" :style="style"></i>
      </i>
    </el-tooltip>
  </span>
  <el-button v-else :type="['warning', 'error'].includes(cConfig.type) ? 'danger' : ''">
    {{ cConfig.title }}
  </el-button>
</template>

<style lang="scss" scoped>
.row-title {
  display: flex;
}
// IkSvgIcon
.ik-svg-icon.ik-icon-span {

  &:not(:first-child) {
    margin-left: var(--ik-margin-s-12);
  }
}

</style>