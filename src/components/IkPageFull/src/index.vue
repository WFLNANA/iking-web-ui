<!--
 * @Author       : wfl
 * @LastEditors: qiye
 * @description  :
 * @updateInfo   :
 * @Date         : 2023-05-23 11:09:59
 * @LastEditTime: 2023-11-10 14:16:26
-->
<script lang="ts" setup name="IkPageFull">
import { computed, PropType, ref, Ref, defineEmits } from 'vue'
import IkPageHead from './IkPageHead.vue'
import IkPageTable from './IkPageTable.vue'
// import IkPageTabs from './IkPageTabs.vue'
// import IkDialog from './IkDialog.tsx'
import { IkSvgIcon } from '@iking-ui/components'
import { defaultProps } from './props'

const props = defineProps(defaultProps)
const emit = defineEmits<{
  'selection-change': [row: any]
  delete: [row: any]
  download: [row: any]
  addFunction: [form: any]
}>()
const pageData = defineModel({
  type: Object as PropType<{
    page: number
    rows: number
    [key: string]: any
  }>,
  default: () => {
    return {
      page: 1,
      rows: 15
    }
  }
})

// 当初次加载pageData不存在时使用默认配置
const checkPageData = () => {
  if (pageData?.value?.page) {
    pageData.value = {
      page: 1,
      rows: 15
    }
  }
}
checkPageData()

const handPageChange = (val: any) => {
  pageData.value = {
    ...pageData.value,
    ...val
  }
}

// 触发搜索
const handSearch = (val?: any) => {
  checkPageData()
  const obj = val?.type === 'click' ? {} : val
  pageData.value = {
    ...pageData.value,
    ...obj
  }
  props?.search?.({
    ...pageData.value
  })
}
// 已选列表
const chooseList = ref([])
// 表格选中项变化
const handleSelectionChange = (val: any) => {
  chooseList.value = val
  emit('selection-change', val)
}
const dataLen = computed(() => chooseList.value.length || props.chooseLen)

const srotFields = ref(props.fields)
const colorScheme = computed(() => 'light')

const refTable = ref()
const refHeader = ref()
// 弹框对象
const refIkDialog = ref()
// 是否展示弹框
const visible = ref(false)
// 新增、修改
const editData: Ref<typeof props.formKey | undefined> = ref(undefined)
// 弹框标题
const dialogTitle = ref(props.title || '')
/**
 * @description: 打开弹框
 * @param {*} form
 * @return {*}
 */
const handAdd = (form: any) => {
  editData.value = form ? { ...form } : null
  if (props.title) {
    if (props.title.includes('新增') || props.title.includes('修改'))
      dialogTitle.value = form ? props.title.replace(/新增/g, '修改') : props.title.replace(/修改/g, '新增')

    else
      dialogTitle.value = form ? `修改${props.title}` : `新增${props.title}`
  }
  else {
    dialogTitle.value = form ? '修改' : '新增'
  }
  visible.value = true
}
/**
 * @description: 确定添加/修改数据
 * @param {*} form
 * @return {*}
 */
const sureAdd = (form: any) => {
  emit('addFunction', form)
  handSearch()
}

const needAutoForm = computed(() => props.fields.find(v => v.isEdit))

defineExpose({
  table: refTable,
  header: refHeader,
  chooseList,
  srotFields,
  pageData,
  dialog: refIkDialog,
  handAdd
})
</script>

<template>
  <!-- 标题 + 搜索表单 -->
  <IkPageHead ref="refHeader" v-bind="{ ...$attrs, ...props }" v-model="srotFields" :loading="loading"
    :search="handSearch" :tab-id="tabId">
    <template #headerLeft>
      <slot name="headerLeft"></slot>
    </template>
    <template #headerRight>
      <slot name="headerRight">
        <el-button v-if="needAutoForm" v-role="role" type="primary" @click="handAdd(null)">
          新增
        </el-button>
      </slot>
    </template>
  </IkPageHead>
  <!-- 选中表格项 -->
  <div v-if="selection" class="hand-selection" :class="{ select: dataLen }">
    <p class="choose">
      已选
      <span>
        <IkNumberDuration :value="dataLen" />
      </span>
      条
    </p>
    <div class="btn">
      <template v-if="!$slots.selectionRight">
        <IkSvgIcon name="icon-shanchu" show-bg size="default" @click="$emit('delete', chooseList)" />
        <IkSvgIcon ize="default" name="icon-xiazai" show-bg @click="$emit('download', chooseList)" />
      </template>
      <slot v-else name="selectionRight"></slot>
    </div>
  </div>

  <!-- 自定义表格 -->
  <slot name="table">
    <IkPageTable ref="refTable" :page="pageData" v-bind="{ ...$attrs, ...props }" @page-change="handPageChange"
      @selection-change="handleSelectionChange">
      <template v-for="item in srotFields" :key="item.key">
        <template v-if="item.show">
          <el-table-column v-if="!item.tableSlot" :prop="item.key" :width="item.width" :min-width="item.minWidth"
            :align="item.align" :show-overflow-tooltip="{
              effect: colorScheme ?? 'light',
            }" :show-arrow="false" v-bind="{ ...item, ...$attrs, ...props }" />
          <el-table-column v-else :align="item.align" :width="item.width" :min-width="item.minWidth"
            :show-overflow-tooltip="{
              effect: colorScheme ?? 'light',
            }" v-bind="{ ...item, ...$attrs, ...props }">
            <template #default="columnData">
              <slot :name="item.tableSlot" :data="columnData"></slot>
            </template>
          </el-table-column>
        </template>
      </template>
    </IkPageTable>
  </slot>
  <!-- 新增修改 -->
  <!-- <IkDialog
    v-if="needAutoForm"
    ref="refIkDialog"
    v-bind="{ ...dialogProp }"
    v-model:visible="visible"
    :title="dialogTitle"
    :fields="fields"
    :size="dialogSize"
    :form-key="formKey"
    :edit-data="editData"
    @addFunction="sureAdd"
  /> -->
</template>

<style lang="scss" scoped>
.hand-selection {
  height: 72px;
  background-color: var(--el-color-primary-light-9);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: absolute;
  top: 0;
  z-index: 0;
  width: 100%;
  transform: translateY(-100%);
  transition: transform 0.25s;

  &.select {
    transform: translateY(0);
    z-index: 1;
  }

  .choose {
    font-size: 20px;
    font-weight: 700;
    color: var(--ik-text-color);
    display: flex;
    align-items: center;

    span {
      color: var(--el-color-primary);
      padding: 0 8px;
    }
  }
}
</style>
