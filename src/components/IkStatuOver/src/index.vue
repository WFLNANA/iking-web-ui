<!--
 * @Author       : wfl
 * @LastEditors: zqf
 * @description  : 支持多标签展示，超出长度时以 +2 这样的方式显示
 * @updateInfo   :
 * @Date         : 2023-07-25 12:01:32
 * @LastEditTime: 2024-03-27 14:36:06
-->
<script setup lang="ts" name="IkStatuOver">
import { computed, Ref, ref } from 'vue'
import type { PropType } from 'vue'
import { ikDom } from 'iking-utils-pro'
import { IkStatu } from '@iking-ui/components'

type TTag = { title?: string, color?: string, type?: 'success' | 'warning' | 'info' | 'danger' | '', background?: string }[]
const props = defineProps({
  // 超出长度时以 +2 这样的方式显示
  overfolw: {
    type: Boolean,
    default: true,
  },
  /**
   * @description: 标签列表 - 支持两种方式
   * 1. 传入字符串以“,”分割，会随机设置颜色
   * 2. 传入对象数组，对象包含 title 和 type 两个属性
   *  type: 除了'success' | 'warning' | 'info' | 'danger' | 'primary' | 'default'这些状态。 也可以是自己定义的颜色值
   * @return {*}
   */
  list: {
    type: Array as PropType<any>,
    default: () => [],
  },
  // 可选
  data: {
    type: Array as PropType<any>,
    default: () => [],
  }
})

const computList: Ref<TTag> = computed(() => {
  if (Array.isArray(props.list)) {
    return props.list
  }
  else if (typeof props.list === 'string') {
    return props.list.split(',').map((item, index) => {
      return {
        ...(props.data?.[index] || {}),
        title: item,
        type: '',
      }
    })
  }
  else {
    return []
  }
})
const containerRef = ref<HTMLElement | null>(null)
// 计算能完全显示的标签数组和超出显示的标签数
const tagsToDisplay: Ref<TTag> = computed(() => {
  if (containerRef.value) {
    const containerWidth = containerRef.value.clientWidth
    let currentWidth = 24
    const displayTags: TTag = []
    let moreTagsCount = 0
    for (const tag of computList.value) {
      const tagWidth = ikDom.useTextWidth(String(tag?.title || tag))
      currentWidth += tagWidth + 40

      // 未超出长度或者只有一条数据时，直接显示
      if (currentWidth <= containerWidth || !moreTagsCount) { displayTags.push(tag) }

      moreTagsCount++
    }

    return displayTags
  }

  return computList.value
})

const moreTags = computed(() => {
  return computList.value.length - tagsToDisplay.value.length
})
const moreTagList: Ref<any> = computed(() => {
  // return computList.value
  return computList.value.slice(tagsToDisplay.value.length)
})

const emit = defineEmits(['close'])
const handClose = (item) => {
  emit('close', item)
}
</script>

<template>
  <div ref="containerRef" class="tag-container" >
    <template v-for="item in tagsToDisplay" :key="item.title">
      <IkStatu v-if="item.title !== '--'" :title="item.title" @close="handClose(item)" :color="item.color" :background="item.background"
        :type="item.type" v-bind="$attrs" :circle="false" :disabled="item?.disabled" />
      <template v-else>
        {{ item.title }}
      </template>
    </template>
    <el-popover v-if="moreTags" placement="bottom" popper-class="ik-statu-over" trigger="hover">
      <div>
        <template v-for="item in moreTagList" :key="item.title">
          <IkStatu :title="item.title" :color="item.color"  @close="handClose(item)"  :background="item.background" :type="item.type"
            :circle="false" v-bind="$attrs" :disabled="item?.disabled" />
        </template>
      </div>
      <template #reference>
        <el-tag class="more-tags" type="info" :closable="false">
          +{{ moreTags }}
        </el-tag>
      </template>
    </el-popover>
  </div>
</template>

<style lang="scss">
.ik-statu-over {
  width: auto !important;
  min-width: 0 !important;
}
</style>

<style scoped lang="scss">
.tag-container {
  display: flex;
  width: 100%;

  .ik-statu-tag{
    max-width: calc(100% - 46px);
  }

  .el-tag:not(:last-child) {
    margin-right: 5px;
  }

  :deep(.el-tag__content) {
    display: inline-block !important;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.more-tags {
  margin: 5px 0;
}
</style>
