<!--
 * @Author       : wfl
 * @LastEditors: wfl
 * @description  :
 * @updateInfo   :
 * @Date         : 2023-06-01 09:27:30
 * @LastEditTime: 2024-05-06 19:06:27
-->
<script lang="ts" setup name="IkTree">
import {computed, ref, watch} from 'vue'
import { ElTree } from 'element-plus'
import { Search } from '@element-plus/icons-vue'

const props = defineProps({
  showSearch: {
    type: Boolean,
    default: true,
  },
  placeholder: {
    type: String,
    default: '请输入名称检索',
  },
  emptyText: {
    type: String,
    default: '暂无数据',
  },
  // 是否自适应滚动
  autoFlow: {
    type: Boolean,
    default: false,
  },
  // 自适应滚动时父元素的padding值
  padding: {
    type: [String, Number],
    default: 'var(--el-card-padding)',
  },
})

const filterText = ref('')
const treeRef = ref<InstanceType<typeof ElTree>>()
watch(
    () => filterText.value,
    (val) => {
      treeRef.value?.filter(val)
    },
)

// 在style中使用
const treePadding = computed(() => (typeof props.padding === 'string') ? props.padding : `${props.padding}px`)

const resetInput = () => {
  filterText.value = ''
}

defineExpose({ tree: treeRef, filterText, resetInput })
</script>

<template>
  <slot name="inset"></slot>
  <div class="ik-tree-main" :class="{ 'auto-flow': autoFlow }">
    <el-input v-if="showSearch"  v-model.trim="filterText" class="w-full ik-tree-search" :placeholder="placeholder" clearable :suffix-icon="Search" />
    <ElTree ref="treeRef" :empty-text="emptyText" v-bind="$attrs" class="ik-tree" :filter-node-method="(value, data) => data[$attrs?.props?.label || 'label'].includes(value)">

      <!-- $slots.default?.length 用于判断默认插槽是否存在 -->
      <template v-if="$slots.default" #default="{ data }">
        <slot :data="data"></slot>
      </template>
    </ElTree>
  </div>
</template>

<style lang="scss" scoped>
.ik-tree-main{
  display: flex;
  flex-direction: column;
  height: 100%;

  &.auto-flow{
    margin: -20px;
    .ik-tree-search{
      padding: 0 v-bind('treePadding');
    }
    .ik-tree.el-tree{
      padding: 0 v-bind('treePadding');
      overflow: auto;
    }
  }

  .ik-tree-search {
    margin-bottom: 8px;
    :deep(.el-input-group__append){
      padding: 0;
    }
  }

  .ik-tree.el-tree {
    flex: 1;
    // height: v-bind(insetHeight);height
    color: var(--ik-header-menu-color);

    &.auto-flow{
      margin-right: calc(v-bind('treePadding') * -1);
      padding-right: v-bind('treePadding');
    }

    :deep(.el-tree-node.is-expanded.is-focusable) {
      & > .el-tree-node__content {
        color: var(--ik-text-color);
      }

      .is-current > .el-tree-node__content {
        color: var(--ik-header-menu-active-color);
        background-color: var(--ik-header-menu-active-bg);
      }
    }
  }
}
</style>
