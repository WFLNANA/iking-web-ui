<!--
 * @Author       : wfl
 * @LastEditors  : wfl
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2023-04-27 18:34:11
 * @LastEditTime : 2023-04-28 09:31:38
-->
<script lang="ts" setup name="IkSearch">
import { defineEmits } from "vue"
import { ElButton } from "element-plus"
import { Delete, Top, Bottom } from "@element-plus/icons-vue"

defineProps({
  //表格展示头部几条数据
  rowData: {
    type: Array,
    default: () => []
  }
})
const emits = defineEmits<{
  (event: "import", value: any): void
  (event: "export", value: any): void
  (event: "delete", value: any): void
}>()
</script>

<template>
  <div class="ik-head" :class="rowData.length === 0 ? 'pack-up' : 'ik-unfold'">
    <div class="ik-head-left">
      {{ `已选${rowData.length}条数据` }}
    </div>
    <div class="ik-head-right">
      <el-button
        class="ik-head-icon"
        title="查询"
        :icon="Delete"
        @click="emits('delete', rowData)"
      />
      <el-button
        class="ik-head-icon"
        title="导入"
        :icon="Top"
        @click="emits('import', rowData)"
      />
      <el-button
        class="ik-head-icon"
        title="导出"
        :icon="Bottom"
        @click="emits('export', rowData)"
      />
    </div>
  </div>
</template>
<style lang="scss">
// @import "../../../theme/global.scss";
</style>
<style lang="scss" scoped>
.ik-head {
  background: var(--ik-head-color-bg);
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  .ik-head-left {
    color: var(--ik-color-fs);
    font-size: 20px;
    font-weight: 700;
  }
  .ik-head-right {
    .ik-head-icon {
      margin-left: 10px;
      width: 40px;
      height: 40px;
      background: #ffffff;
      border-radius: 6px;
      color: var(--ik-color-primary);
      font-size: 24px;
      border: none !important;
    }
  }
}
</style>
