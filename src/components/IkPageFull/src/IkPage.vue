<!--
 * @Author       : wfl
 * @LastEditors: qiye
 * @description  :
 * @updateInfo   :
 * @Date         : 2023-05-25 11:10:58
 * @LastEditTime: 2023-09-25 18:13:11
-->
<script lang="ts" setup name="IkPage">
import {ref, watch, } from 'vue'
const props = defineProps({
  // 总条数
  total: {
    type: Number,
    default: 0
  },
  // mini分页
  mini: {
    type: Boolean,
    default: false
  },
  search: {
    type: Function,
    default: null
  },
  current: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits<{
  currentChange: [num: Number]
  sizeChange: [num: Number]
}>()
// 当前页数
const currentPage = ref(1)
watch(() => props.current, val => {
  currentPage.value = val
})

const pageSizes = [15, 30, 60, 100, 200, 500]
// 每页显示条目个数
const pageSize = ref(pageSizes[0])

const handleSizeChange = (val: number) => {
  emit('sizeChange', val)
  props?.search({
    page: currentPage.value,
    rows: pageSize.value
  })
}
const handleCurrentChange = (val: number) => {
  emit('currentChange', val)
  props?.search({
    page: currentPage.value,
    rows: pageSize.value
  })
}
</script>

<template>
  <el-pagination
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    v-bind="$attrs"
    layout="slot, ->, sizes, prev, pager, next,  jumper"
    :small="mini"
    :total="total"
    :page-sizes="pageSizes"
    class="ik-pagin-action"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  >
    <template #default>
      <span class="total">
        共<span class="num">{{ total }}</span>
        项数据
      </span>
    </template>
  </el-pagination>
</template>

<style lang="scss" scoped>
.ik-pagin-action{
  font-weight: 400;
  font-size: 14px;
  padding: 0 16px;
  margin: 8px 0;

  .total {
    .num{
      padding: 0 5px;
    }
  }

  :deep(.el-select) {
    .el-input {
      width: 110px;
    }
  }

  :deep(.el-input) {
       .el-input__wrapper {
          height: 28px;
          padding-right: 10px;
        }
    }

    :deep(.el-pager) {
      li {
        transition: color .25s, background-color .25s;
        border-radius: 6px;

        &.is-active{
          color: var(--ik-text-hover-color);
          background-color: var(--el-pagination-hover-color);
        }
      }
    }
}
</style>
