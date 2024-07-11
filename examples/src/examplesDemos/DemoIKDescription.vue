<!--
 * @Author: zdl
 * @LastEditors: zdl
 * @description: 
 * @updateInfo: 内容:描述列表的示例
 * @Date: 2023-12-11 13:45:35
 * @LastEditTime: 2023-12-11 14:54:48
-->
<script lang="ts" setup>
import { ref, reactive } from "vue";
import { IkDescriptions } from "@iking-ui/components";
import { IKExpandCollapse } from "@iking-ui/components";
// 示例数据
const exampleData = ref<any>([
  {
    label: "招标编号",
    value: "AB1234567",
    key: "projectNum",
  },
  {
    label: "招标项目名称",
    value: "示例招标项目名称",
    key: "projectName",
  },
  {
    label: "招标人",
    value: "某某招标人",
    key: "tenderee",
  },
  {
    label: "中标通知书发放时间",
    value: "2023-10-20",
    key: "awardNotifyTime",
  },
  {
    label: "中标单位",
    value: "陕西金合科技股份有限公司",
    key: "awardOrganization",
  },
  {
    label: "中标价格/万元",
    value: "100",
    key: "awardAmount",
  },
  {
    label: "是否属于依法必招范围",
    value: "是",
    span: 2,
    key: "mustBidsScope",
  },
  {
    label: "是否采用电子招标",
    value: "否",
    key: "electronic",
  },
  {
    label: "采购类型",
    value: "",
    key: "typeName",
  },
  {
    label: "招标形式",
    value: "公开招标",
    span: 2,
    key: "bidingFormName",
  },
  {
    label: "备注",
    value: "",
    span: 2,
    key: "remark",
  },
]);

// 展示
const isShow = ref<boolean>(false);

const handleChang = () => {
  isShow.value = !isShow.value;
};
</script>
<template>
  <div>
    <div style="display: flex; align-items: center">
      <p>描述示例组件 :</p>
      <IKExpandCollapse :is-expand="isShow" @handleChangStatus="handleChang()" />
    </div>
    <div>
      <IkDescriptions :listData="exampleData" border />
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
