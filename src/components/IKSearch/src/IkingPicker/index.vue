<!--
 * @Author       : wfl
 * @LastEditors  : wfl
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2023-04-28 15:13:16
 * @LastEditTime : 2023-11-01 20:29:07
-->
<script lang="ts" setup>
import { Plus } from "@element-plus/icons-vue"
import { IkingPickerUser } from "@iking-ui/components"
import { ref } from "vue"
defineProps({
  typeOption: {
    type: Object,
    default: () => {}
  },
  list: {
    type: Array,
    default: () => []
  },
  data: {
    type: Array,
    default: () => []
  },
  handSetChild: {
    type: Function,
    default: () => {
      ;() => {}
    }
  }
})

const showPicker = ref(false)
const handList = ref([])
const { userList, depList, roleList, postList } = ref(data)

const handSelected = (val: any) => {
  handList.value = val.list
}

const pickerContent = ref("")
const handSetChild = () => {}
</script>

<template>
  <el-input
    v-model="pickerContent"
    placeholder="请选择部门/人员/角色"
    @click="showPicker = true"
  >
    <template #suffix>
      <el-icon @click="showPicker = true">
        <Plus />
      </el-icon>
    </template>
  </el-input>
  <IkingPickerUser
    v-model="handList"
    v-model:show="showPicker"
    :dep-list="depList"
    :user-list="userList"
    :role-list="roleList"
    :post-list="postList"
    :choose-type="['user']"
    :tabs="['group']"
    :type-option="{ dep: 'DEPT', user: 'USER', role: 'ROLE', post: 'POST' }"
    :prop-option="{
      name: 'elementName',
      id: 'elementId',
      type: 'elementType'
    }"
    empty-text="暂无数据"
    @hand-child="handSetChild"
    @ok="handSelected"
  />
</template>

<style lang="scss" scoped>
/* stylelint-disable-next-line no-empty-source */
</style>
