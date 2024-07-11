/* stylelint-disable no-duplicate-selectors */
<!--
 * @Author       : wfl
 * @LastEditors: qiye
 * @description  : 拖拽排序组件
 * @updateInfo   :
 * @Date         : 2022-11-29 09:48:56
 * @LastEditTime: 2023-11-10 15:04:41
-->
<script lang="ts" setup name="IkDragList">
import { DCaret } from '@element-plus/icons-vue'
import draggable from 'vuedraggable'
import type { Ref } from 'vue'
import {watch, computed, ref, } from 'vue';
import { _ } from 'iking-utils-pro'
import { defaultOpts, defaultProps } from './default-props'
import type { TList } from './default-props'

const props = defineProps(defaultProps)
const emits = defineEmits<{
  (e: 'change', val: Array<TList>, item: any): void
}>()
const dragList: Ref<TList[]> = ref([])

watch(
  () => props.list,
  val => {
    dragList.value = _.cloneDeep(val)
  },
  {
    immediate: true,
    deep: true
  }
)

const mixOption = computed(() => {
  return {
    ...defaultOpts,
    ...props,
    itemStyle: {
      ...defaultOpts.itemStyle,
      ...props.itemStyle
    }
  }
})

const drag = ref(false)
const handStart = () => {
  drag.value = true
}

const handEnd = (dragingItem: any) => {
  drag.value = false
  const dragItem = props.list[dragingItem.oldIndex as number]
  emits('change', dragList.value, {
    ...dragItem,
    oldIndex: dragingItem.oldIndex,
    newIndex: dragingItem.newIndex
  })
}
</script>

<template>
  <draggable
    v-model="dragList"
    class="list-group"
    :class="[mixOption.groupClass]"
    tag="ul"
    :attrs="mixOption"
    :animation="mixOption.animation"
    :group="mixOption.group"
    :disabled="mixOption.disabled"
    :ghost-class="mixOption.ghostClass"
    :force-fallback="mixOption.ghostClass"
    item-key="order"
    @start="handStart"
    @end="handEnd"
  >
    <template #item="{ element }">
      <transition type="transition" name="flip-list">
        <slot v-if="$slots.item" name="item" :item="element"></slot>
        <li
          v-else
          class="list-group-item"
          :class="[mixOption.itemClass]"
          :style="{
            borderRadius: `${mixOption.itemStyle.radius}px`,
            marginBottom: `${mixOption.itemStyle.bottom}px`,
            backgroundColor: `${mixOption.itemStyle.background}`,
          }"
        >
          <el-icon v-if="mixOption.showIcon && !$slots.icon">
            <DCaret />
          </el-icon>
          <slot v-else name="icon"></slot>
          {{ element.label }}
        </li>
      </transition>
    </template>
  </draggable>
</template>

<style lang="scss" scoped>
.ghost {
  opacity: 0.9;
  background: var(--el-color-primary) !important;
  color: var(--el-color-white);
}

.list-group {
  height: 100%;
  width: 100%;
  color: var(--el-text-color-regular);
  transition: all 0.25s;
}

.list-group-item {
  cursor: move;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  margin-bottom: var(--base-m);
  padding: var(--base-p);
  user-select: none;
  display: flex;
  align-items: center;

  &:hover {
    background: var(--el-color-primary-light-7) !important;
  }

  i {
    margin-right: calc(var(--base-m) / 2);
    cursor: pointer;
  }
}
</style>
