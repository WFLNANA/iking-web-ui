<script setup lang="ts" name="IKtest">
import { PropType, ref } from "vue"
import { IKSearch } from "@iking-ui/components"
import { Plus } from "@element-plus/icons-vue"
import { ElInput, ElSelect, ElFormItem, ElOption } from "element-plus"
const formData = ref({
  name: "",
  scaffoldType: "",
  createUser: ""
})
const typeList = ref([])
const formRef = ref()
const loading = ref(false)
const isShow = ref(false)
const datasourceDict = [
  {
    label: "MYSQL",
    value: "MYSQL"
  },
  {
    label: "POSTGRES",
    value: "POSTGRES"
  },
  {
    label: "ORACLE",
    value: "ORACLE"
  },
  {
    label: "MSSQL_SERVER",
    value: "MSSQL_SERVER"
  }
]
const list = ref([
  {
    key: "name",
    value: "",
    label: "连接名称",
    show: true
  },
  {
    key: "port",
    value: "",
    slot: "f3",
    label: "port",
    width: 140,
    show: true
  },
  {
    key: "type",
    value: "",
    label: "数据库类型",
    width: 100,
    type: "select",
    options: datasourceDict,
    show: true
  },
  {
    key: "cpu",
    value: "",
    slot: "f2",
    label: "cpu",
    width: 140,
    show: true
  },
  {
    key: "ip",
    value: "",
    label: "ip",
    width: 140,
    show: true
  },
  {
    key: "chars",
    value: "",
    slot: "f1",
    label: "chars",
    width: 140,
    show: true
  }
])
const handleSearch = (item: any) => {
}
const deleteRow = (item: any) => {
}
</script>

<template>
  <div class="bg-c">
    <IKSearch
      :list="list"
      :row-data="list"
      @delete="deleteRow"
      @import="deleteRow"
      @export="deleteRow"
      @search="handleSearch"
    >
      <template #f1>
        <el-form-item label="名称" label-width="45px" prop="name">
          <el-input
            v-model="formData.name"
            clearable
            placeholder="请输入名称"
          />
        </el-form-item>
      </template>
      <template #f2>
        <el-form-item label="设计类型" prop="scaffoldType">
          <el-select
            v-model="formData.scaffoldType"
            placeholder="请选择设计类型"
          >
            <el-option
              v-for="item in typeList"
              :key="item.type"
              :label="item.description"
              :value="item.type"
            />
          </el-select>
        </el-form-item>
      </template>
      <template #f3>
        <el-form-item label="创建人" prop="createUser">
          <el-input
            v-model="formData.createUser"
            clearable
            placeholder="请输入创建人"
            :icon="Plus"
          />
        </el-form-item>
      </template>
    </IKSearch>
  </div>
</template>
<style>
.bg-c {
  background: #fff;
}
</style>
