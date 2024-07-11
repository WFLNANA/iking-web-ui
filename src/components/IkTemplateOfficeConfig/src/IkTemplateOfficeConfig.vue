<!--
 * @Author: zdl
 * @LastEditors: zdl
 * @description: 
 * @updateInfo: 内容:onlyOffice的模板配置
 * @Date: 2024-01-04 15:09:34
 * @LastEditTime: 2024-01-09 10:14:18
-->
<script lang="ts" setup>
import { ref } from "vue";
import IkOnlyOffice from "@iking-ui/components/IkOnlyOffice";
import TemplateOfficeData from "./templateOfficeData.vue";
const props = defineProps({
  // 标题
  title: {
    type: String,
    default: "模板配置",
  },
  // 显示
  visible: {
    type: Boolean,
    default: false,
  },
  // onlyOffice的配置项
  onlyOfficeConfig: {
    type: Object,
    default: () => {},
  },
  // 是否展示tabs
  isShowTabs: {
    type: Boolean,
    default: true,
  },
  // tabs下的搜索框
  isShowSearchCondition: {
    type: Boolean,
    default: true,
  },
  // TABS的数据
  tabsData: {
    type: Array as any,
    default: () => [],
  },
  // 每个tabs下面的表格数据
  tableData: {
    type: Array,
    default: () => [],
  },
  // office的文档服务器地址
  documentServerUrl: {
    type: String,
    default: "",
  },
  // onlyOffice的加密token
  jwtToken: {
    type: String,
    default: "",
  },
  // 内容展示的高度
  contentHeight: {
    type: String,
    default: "650px",
  },
  // 映射的属性
  defaultProps: {
    type: Object,
    default: () => {},
  },
  // 标题是否能编辑，删除
  isShowTitleOperate: {
    type: Boolean,
    default: false,
  },
  //内容是否能编辑和删除
  isShowContentOperate: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits<{
  (event: "handleSearchDataBlock", search: any, val: any): void;
  (event: "handleClickBlockData", parent: any, children: any): void;
}>();

/* -------------------------------------------------------------------------- */
/*                                   切换tabs                                   */
/* -------------------------------------------------------------------------- */

const activeName = ref(props.tabsData[0].id);
// 切换tabs
const handleTabsChange = (data: any) => {
  searchName.value = "";
  activeName.value = data;
  if (data) {
    emits("handleSearchDataBlock", "", activeName.value);
  }
};
/* -------------------------------------------------------------------------- */
/*                                   搜索条件的查询                                  */
/* -------------------------------------------------------------------------- */
const searchName = ref(""); //搜索条件
const handleSearch = () => {
  emits("handleSearchDataBlock", searchName.value, activeName.value);
};

/* -------------------------------------------------------------------------- */
/*                                   点击获取数据                                   */
/* -------------------------------------------------------------------------- */
//点击左边的数据块
const handleChooseData = (parentData: any, chooseData: any) => {
  emits("handleClickBlockData", parentData, chooseData);
};

// 发送消息给postMessage上
const handleSendMessage = (content: String) => {
  window[0][0].postMessage(JSON.stringify({ type: "INSERT_TEXT", text: content }), "*");
};

defineExpose({ handleSendMessage });
</script>
<template>
  <div class="template-config">
    <el-row :gutter="10">
      <el-col :span="6">
        <div class="template-config-data">
          <el-tabs
            v-if="props.isShowTabs"
            v-model="activeName"
            @tab-click="handleTabsChange($event.props.name)"
          >
            <el-tab-pane
              v-for="(item, index) of props.tabsData"
              :key="index"
              :label="item.label"
              :name="item.id"
            />
          </el-tabs>
          <el-input
            v-if="props.isShowSearchCondition"
            v-model="searchName"
            placeholder="请输入关键字"
            clearable
            @input="handleSearch()"
          />
          <TemplateOfficeData
            :data="props.tableData"
            :type="activeName"
            :defaultProps="props.defaultProps"
            @handleChooseDataBlock="handleChooseData"
            :isShowTitleOperate="props.isShowTitleOperate"
            :isShowContentOperate="props.isShowContentOperate"
          />
        </div>
      </el-col>
      <el-col :span="18">
        <div class="template-panel">
          <IkOnlyOffice
            v-if="props.visible"
            :config-options="props.onlyOfficeConfig"
            :documentServerUrl="props.documentServerUrl"
            :token="props.jwtToken"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped lang="scss">
.template-config {
  height: v-bind(contentHeight);
  .template-config-data {
    border-right: 1px solid var(--el-border-color);
    height: v-bind(contentHeight);
    overflow: auto;
    padding-right: 20px;
  }
  .template-panel {
    height: v-bind(contentHeight);
    overflow: auto;
  }
  .custom-btn {
    width: 100%;
    margin-top: 8px;
  }
}
</style>
