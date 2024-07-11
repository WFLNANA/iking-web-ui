<!--
 * @Author: zdl
 * @LastEditors: fj
 * @description: 
 * @updateInfo: 内容:office模板配置
 * @Date: 2024-01-04 16:56:35
 * @LastEditTime: 2024-05-28 16:39:22
-->
<script lang="ts" setup>
import { ref } from "vue";
import IkTemplateOfficeConfig from "@iking-ui/components/IkTemplateOfficeConfig";

const onlyOfficeConfig = ref(null);
const onlyOfficeFileId = ref("15ba05e178c245b4a0d9dbc3a30118b3"); //文档id
const token = ref("Bearer 9aa65e31e86f4232ac4e4136fb1d3413"); // 当前登录token
const documentServerUrl = ref("http://192.168.1.82:8889"); // http://192.168.1.124:3080onlyoffice的文档服务器地址
// 文档加密token
const jwtToken = ref(
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkb2N1bWVudCI6eyJrZXkiOiIxNzA0NzcwMzI2MDYyIiwidXJsIjoiaHR0cDovLzE5Mi4xNjguMS4xMjQ6ODAwMS9zZXJ2ZXIvb3NzL2Rvd25sb2FkP2ZpbGVVcmw9YmU4YWYwYTdlMDBmNGQwODkzN2ViYzBmZWYxMGExNzAifSwiZWRpdG9yQ29uZmlnIjp7ImNhbGxiYWNrVXJsIjoiaHR0cDovLzE5Mi4xNjguMS4xMjQ6ODAwMS9idXNpbmVzcy9yZXBvcnQvc3VtbWFyeS90ZW1wL3VwZGF0ZS80YmExMTAwYmFjZWQ0YzEzODkxYzA5ODE4NmFhNzMyMT90b2tlbj1CZWFyZXIgODFkNTU1YjM3NzI1NDkxOGIxNjBlODAxODU0NjAyNDQiLCJtb2RlIjoiIiwidXNlciI6eyJncm91cCI6Ikdyb3VwMSIsImlkIjoiNmM4MmUyYmVkMzZiNDE0YzlhMmU0MzlmYmYzMmI3NzQiLCJuYW1lIjoibXkifX19.N2hnxOZL6zugszmUrm5brEiVYjgvk9ojPNWibV_TeSQ"
);
const initOnlyOfficeConfig = () => {
  onlyOfficeConfig.value = {
    documentType: "word",
    document: {
      fileType: "doc",
      key: `${new Date().getTime()}`,
      title: "测试文档",
      lang: "zh-CN",
      url: `http://192.168.1.124:8001/server/oss/download?fileUrl=${onlyOfficeFileId.value}`, //目前为测试地址
    },
    editorConfig: {
      callbackUrl: `http://192.168.1.124:8001/business/report/summary/temp/update/${onlyOfficeFileId.value}?token=${token.value}`, // 保存的回调函数
    },
  };
};

initOnlyOfficeConfig();

// tabs数据
const tabsData = ref([
  { label: "系统数据", id: "0001" },
  { label: "自定义数据", id: "0002" },
]);

// 默认属性
const defaultProps = ref({
  name: "label", // 子节点
  children: "children",
  childName: "label", // 父节点内的属性
  childId: "id",
});

// 系统数据查询
const tableData = ref([]);
const handleSystemSearchData = (searchCondition?: any) => {
  tableData.value = [
    {
      label: "时间",
      children: [
        {
          label: "今年",
          id: "currentYear",
        },
        {
          label: "去年",
          id: "lastYear",
        },
        {
          label: "明年",
          id: "nextYear",
        },
        {
          label: "本月",
          id: "currentMonth",
        },
        {
          label: "上月",
          id: "lastMonth",
        },
      ],
    },
  ];
};
handleSystemSearchData("");

// 自定义数据查询
const handleCustomSearchData = (searchCondition?: any) => {
  tableData.value = [
    {
      name: "测试",
      children: [
        {
          label: "20%电子招标率",
          id: "6b7db1fb9b754d62bccc0c757d0d0475",
        },
        {
          label: "时间配置",
          id: "468b506d55cd481b8218b461a352fabc",
        },
        {
          label: "项目总投资状态",
          id: "468b506d55cd481b8218b461a352fab3",
        },
      ],
    },
  ];
};

//切换tabs
const handleSearchTabsData = (searchCondition: any, tabsId: any) => {
  if (tabsId === "0001") {
    handleSystemSearchData(searchCondition);
  } else {
    handleCustomSearchData(searchCondition);
  }
};

// 点击数据块获取数据,发送到onlyOffice //根据业务自己的需求调整
const refIkTemplateOfficeConfig = ref(null);
const handleGetBlockData = (parentData: any, children: any) => {
  refIkTemplateOfficeConfig.value.handleSendMessage(
    `{${children.childName}_${children.childId}}`
  );
};
</script>
<template>
<!--  <div style="height: 700px">-->
<!--    <p>onlyOffice模板配置</p>-->
<!--    <IkTemplateOfficeConfig-->
<!--      ref="refIkTemplateOfficeConfig"-->
<!--      :tabsData="tabsData"-->
<!--      :visible="true"-->
<!--      :tableData="tableData"-->
<!--      :documentServerUrl="documentServerUrl"-->
<!--      @handleSearchDataBlock="handleSearchTabsData"-->
<!--      @handleClickBlockData="handleGetBlockData"-->
<!--      :onlyOfficeConfig="onlyOfficeConfig"-->
<!--      :jwtToken="jwtToken"-->
<!--      :defaultProps="defaultProps"-->
<!--      :isShowTitleOperate="true"-->
<!--      :isShowContentOperate="true"-->
<!--    />-->
<!--  </div>-->
</template>
<style scoped lang="scss"></style>
