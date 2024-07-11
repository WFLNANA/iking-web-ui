<!--
 * @Author       : wfl
 * @LastEditors: qiye
 * @description  :
 * @updateInfo   :
 * @Date         : 2023-05-31 11:31:24
 * @LastEditTime: 2023-11-27 09:39:55
-->
<script lang="ts" setup name="IkPageTabs">
import {PropType, ref} from 'vue';

const props = defineProps({
  // tabs
  tabs: {
    type: Array as PropType<
      Array<{ label: string | number; id: string | number; disabled?: boolean; }>
    >,
    default: () => []
  },
  // 当存在默认slot且需要展示默认slot时
  defaultSlot: {
    type: Boolean,
    default: true
  },
  // 除默认tab其它tab是否首次默认不加载
  lazyTab: {
    type: Boolean,
    default: false
  },
  // 是否拆分tab页和内容页
  split: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits<{
  tabClick: [id: string | number, row?: any]
  search: [row: any]
}>()

const activeName = defineModel({
  type: String || Number,
  default: ''
})

// 懒加载tab页, 首次加载时懒加载其它tab
const lazyLoad = ref(new Map())
for (const i of props.tabs)
  lazyLoad.value.set(i.id, props.lazyTab ? i.id !== activeName.value : false)

const handleTabClick = (row: any) => {
  activeName.value = row.paneName
  if (!lazyLoad.value.get(row.paneName))
    emits('tabClick', row.paneName, row)
  lazyLoad.value.set(row.paneName, false)
}
</script>

<template>
  <!-- <div class="flex-1 contents"> -->
  <el-tabs
    v-model="activeName"
    class="ik-tabs"
    :class="{
      'is-default': $slots.default,
      'split gl-padding gl-container': split,
    }"
    @tab-click="handleTabClick"
  >
    <el-tab-pane
      v-for="tab in tabs"
      :key="tab.id"
      :disabled="tab?.disabled"
      :name="tab.id"
    >
      <template #label>
        <span>{{ tab.label }}</span>
      </template>
      <slot
        v-if="!$slots.default && !lazyLoad.get(tab.id) && !split"
        :name="tab.id"
      ></slot>
    </el-tab-pane>
    <!-- 当存在默认slot且需要展示默认slot时 -->
    <template v-if="$slots.default && defaultSlot && !split">
      <slot></slot>
    </template>
  </el-tabs>
  <div v-if="split" class="ik-tabs-split overflow-overlay gl-padding">
    <template v-for="tab in tabs">
      <slot
        v-if="!$slots.default && !lazyLoad.get(tab.id)"
        :name="tab.id"
      ></slot>
    </template>
    <template v-if="$slots.default && defaultSlot">
      <slot></slot>
    </template>
  </div>
  <!-- </div> -->
</template>

<style lang="scss" scoped>
.ik-tabs {
  height: 100%;

  &.split {
    --el-tabs-header-height: 23px;

    height: 52px;
    background: var(--ik-card-bg);
    border-radius: var(--el-border-radius-base);
    position: relative;

    // :deep(.el-tabs__header) {
    //   margin-left: 16px;
    // }
  }

  &.is-default {
    .el-tab-pane {
      height: unset !important;
    }
  }

  :deep(.el-tabs__nav-wrap) {
    overflow: unset;

    &::after {
      display: none;
    }

    .el-tabs__nav-scroll {
      overflow: unset;

      &::after {
        display: none;
      }
    }
  }

  :deep(.el-tabs__header) {
    margin: 0;
    position: absolute;
    left: 20px;
    top: 13px;
  }

  :deep(.el-tabs__content) {
    height: 100%;
    display: flex;
    flex-direction: column;

    .el-tab-pane {
      height: 100%;
      display: flex;
      flex-direction: column;

      .el-table {
        height: calc(100% - 118px);
      }
    }
  }

  :deep(.el-tabs__active-bar) {
    bottom: -13px;
    height: 4px;
  }

  :deep(.el-tabs__item) {
    padding: 0;
    position: relative;

    span {
      font-size: 16px;
      letter-spacing: 0;
      // transition: all .3s;
    }

    &:not(.is-disabled):hover {
      color: var(--ik-theme-color);
    }

    &.is-active span {
      font-weight: 700;
      font-size: 16px;
      color: var(--ik-theme-color);
      letter-spacing: 0;
    }

    & + .el-tabs__item {
      margin-left: 40px;
    }
  }
}

.ik-tabs-split {
  background-color: var(--ik-card-bg);
  flex: 1;
  border-radius: var(--el-border-radius-base);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: auto;
  margin: 0 24px 24px;

  & > :first-child {
    position: absolute;
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
}
</style>
