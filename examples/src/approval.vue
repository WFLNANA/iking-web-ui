<!--
 * @Author       : wfl
 * @LastEditors: fj
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2023-05-11 11:20:50
 * @LastEditTime: 2023-09-14 13:50:02
-->
<template>
  <IKApprovalProcess :dep-list="depList" picker-url="http://192.168.1.222/api/server/component/pick/mix" :user-list="userList" :dataList="tableData" />
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { IKApprovalProcess } from "@iking-ui/components";
const tableData = ref([]);

const downloadUrl = ref(
  "http://192.168.2.45:8000/server/oss/download?fileUrl="
);
const depList = ref([])
const userList = ref([])

const formatUrl = (str: any) => {
  let url = "";
  if (str.includes("http") || str.includes("https")) {
    url = str;
  } else {
    url = downloadUrl.value + str;
  }
  return url;
};

const getData = () => {
  fetch("http://192.168.1.222/api/server/approve/form/instance/preview", {
    method: "POST",
    body: JSON.stringify({
      formData: "",
      formId: "8f00cd3262ce4f3ca0ef37096f9c5aca",
      previewType: "BY_DRAFT",
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer iking",
    },
  })
    .then((response) => {
      response.json().then((data1) => {
        if (data1.data) {
          tableData.value = data1.data?.processInstance?.instanceNodes;
          tableData.value?.map((it) => {
            // 发起人自选时，存在上次已保存的数据时，这个数组就有值。（记录之前选中的数据和从组件新选的数据）
            it.executorUsers?.map((i) => {
              i.userAvatar = (i.userAvatar && formatUrl(i.userAvatar)) || "";
              // 如果是发起人自选，则初始化添加删除按钮
              if (it.approvalCategory=="INITIATOR_SPECIFIED") {
                i.canDele = true;
              }
            });
          });
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
getData();
</script>