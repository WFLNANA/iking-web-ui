
<!--
 * @Author: zdl
 * @LastEditors: zdl
 * @description: 
 * @updateInfo: 内容::展开或收起的操作
 * @Date: 2023-12-11 10:13:09
 * @LastEditTime: 2023-12-13 15:43:17
-->
<script lang="ts" setup name="IKExpandCollapse">
import "../../../assets/font/iconfont.css";
import { IkSvgIcon } from '@iking-ui/components'
const props = defineProps({
  // 展示形式 图标(icon)，文字(word)，图标和文字(wordIcon)
  showType: {
    type: String,
    default: 'word'
  },
  // 是否展开
  isExpand: {
    type: Boolean,
    default: true
  },
  wordName:{
    type:String,
    default:''
  }
})
const emits = defineEmits<{
  (event: 'handleChangStatus'): void
}>()
// 切换状态
const handleChangStatus = () => {
  emits('handleChangStatus')
}
</script>

<template>
  <div class="words-color" @click="handleChangStatus()">
    <span v-if="props.showType === 'word' || props.showType === 'wordIcon'" class="">
      {{
        isExpand ? wordName || "收起" :wordName || "展开"
      }}
    </span>
    <IkSvgIcon
      v-if="props.showType === 'icon' || props.showType === 'wordIcon'"
      :name="!isExpand ? 'iksvg_shouqi' : 'iksvg_zhankai'"
    ></IkSvgIcon>
  </div>
</template>

<style scoped lang="scss">
.words-color{
  color:var(--el-color-primary);
  cursor: pointer;
}
</style>
