<!--
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-11-10 11:15:27
 * @LastEditTime: 2023-11-27 20:19:51
-->
<script setup lang="ts" name="DemoIkPageTabs">
import {ref, reactive} from 'vue';
import { IkPageTabs, IkPageFull } from '@iking-ui/components';

const state = reactive<any>({
  visible: false,
  searchData: {},
  tableData: [],

  tabs: [
    {id: 'login', label: '登录日志'},
    {id: 'operate', label: '操作日志'},
    {id: 'system', label: '系统日志'},
  ],
  activeTab: 'login',

  // 字段映射
  fieldObj:{
    login: [
    {
        "key": "createTime",
        "value": "",
        "label": "登录日志",
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
  operate: [
    {
        "key": "createTime",
        "value": "",
        "label": "操作日志",
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
  system: [
    {
        "key": "createTime",
        "value": "",
        "label": "系统日志",
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
  },
  
  total: 0,
  loading: false
});

const methods = {
  search: () => {

  }
}

</script>
<template>
<div>
  <div class="row-title">
    <span>示例：IkPageTabs</span>
    <el-button type="primary" link v-if="state.visible === false" @click="state.visible = true">显示</el-button>
    <el-button type="primary" link v-if="state.visible === true" @click="state.visible = false">隐藏</el-button>
  </div>
  <div class="content-box" v-if="state.visible">
    <IkPageTabs
      v-model="state.activeTab"
      lazy-tab
      :tabs="state.tabs"
      @tab-click="methods.search"
    >
      <template #[state.activeTab]>
        <IkPageFull
          v-model="state.searchData"
          :tab-id="state.activeTab"
          :fields="state.fieldObj[state.activeTab]"
          :table-data="state.tableData"
          :total="state.total"
          :loading="state.loading"
          :search="methods.search"
        >
          <template #operate="{ data }">
            操作
          </template>
        </IkPageFull>
      </template>
    </IkPageTabs>
  </div>
</div>
</template>
<style scoped>
.content-box{
  position: relative;
  height: 700px;
}
</style>