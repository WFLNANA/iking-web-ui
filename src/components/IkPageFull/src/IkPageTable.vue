<!--
 * @Author       : wfl
 * @LastEditors: qiye
 * @description  :
 * @updateInfo   :
 * @Date         : 2023-05-30 11:25:50
 * @LastEditTime: 2023-09-25 17:31:16
-->
<script setup lang="ts" name="IkPageTable">
import { computed, PropType, ref, Ref, getCurrentInstance } from 'vue'
import { _ } from 'iking-utils-pro'
import { defaultProps } from './props'
import IkPage from './IkPage.vue'
import { IkSvgIcon } from '@iking-ui/components'

const props = defineProps(defaultProps)
const emit = defineEmits<{
  'selection-change': [row: any]
  'page-change': [page: any]
}>()

const { attrs }: { attrs: any; } = getCurrentInstance()!
const page = ref({
  page: attrs.page?.page || 1,
  rows: 15
})

// 向表格数据添加索引
const insertIndexTable = computed(() => {
  const { page: _page, rows } = attrs?.page || page.value
  // clone数据，防止添加索引时改变原数据导致重复触发computed
  const TABLE_DATA = _.cloneDeep(props.tableData)
  TABLE_DATA.forEach((t: any, index: number) => {
    t.__index = _page === 1 ? index + 1 : ((_page - 1) * rows) + index + 1
  })
  return TABLE_DATA
})

// 分页修改
const handSearchPage = (val: any) => {
  page.value = val
  emit('page-change', val)
  props.search()
}

const chooseList = ref([])
// 表格选中项变化
const handleSelectionChange = (val: any) => {
  chooseList.value = val
  emit('selection-change', val)
}

const refTable = ref()
defineExpose({ table: refTable })
</script>

<template>
  <!-- 自定义表格 -->
  <template v-if="$slots?.table">
    <slot name="table"></slot>
  </template>
  <!-- 默认表格 -->
  <template v-else>
    <transition name="el-zoom-in-center">
      <!-- <div :key="tabId"> -->
      <el-table
        ref="refTable"
        v-loading="loading"
        v-bind="{ ...$attrs, ...props }"
        :data="insertIndexTable"
        style="width: 100%;"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          v-if="selection"
          type="selection"
          align="center"
          width="56"
        />
        <el-table-column
          v-if="serial"
          prop="__index"
          label="序号"
          :width="60"
          align="center"
        />
        <slot></slot>
      </el-table>
      <!-- </div> -->
    </transition>
  </template>
  <!-- 分页 -->
  <IkPage
    v-if="total"
    :current="($attrs as any)?.page?.page || 1"
    :total="total"
    :search="handSearchPage"
  />
</template>

<style lang="scss" scoped>
// .el-table{
//   height: 100%;
// }
</style>
