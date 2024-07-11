<!--
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-11-10 11:15:27
 * @LastEditTime: 2023-11-10 14:48:56
-->
<script setup lang="ts" name="DemoIkPageFull">
import {ref, reactive} from 'vue';
import IkPageFull from '@iking-ui/components/IkPageFull';

const state = reactive({
  visible: false,
  searchData: {},
  tableData: [],
  fields: [
    {
        "key": "createTime",
        "value": "",
        "label": "创建时间",
        "width": 170,
        "valueFormat": "YYYY-MM-DD",
        "type": "date",
        "search": false,
        "show": true
    },
    {
        "key": "updateTime",
        "value": "",
        "label": "更新时间",
        "valueFormat": "YYYY-MM-DD",
        "width": 170,
        "type": "date",
        "search": false,
        "show": true
    },
    {
        "key": "",
        "label": "操作",
        "show": true,
        "width": 148,
        "tableSlot": "operate",
        "fixed": "right",
        "showOverflowTooltip": false
    }
  ],
  total: 0,

  
});

const methods = {
  search: () => {

  }
}

const events = ref<any[]>([]);
</script>
<template>
<div>
  <div class="row-title">
    <span>示例：IkPageFull</span>
    <el-button type="primary" link v-if="state.visible === false" @click="state.visible = true">显示</el-button>
    <el-button type="primary" link v-if="state.visible === true" @click="state.visible = false">隐藏</el-button>
  </div>
  <div v-if="state.visible">
    <IkPageFull 
      :fields="state.fields" 
      :table-data="state.tableData" 
      v-model="state.searchData" 
      :search="methods.search"
      :total="state.total" >
    </IkPageFull>
  </div>
</div>
</template>
<style scoped>
</style>