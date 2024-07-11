<template>
<div style="width: 800px;">
  <IKApprovalProcessDetail
      :returnNode="state.returnNode"
      :defaultStatus="state.status"
      :defaultNodeType="state.nodeType"
      :dataList="state.data"
      :defaultFieldMap="state.filedMap"
      file-url="http://192.168.2.45:8000/server/oss/download?fileUrl="
      kk-url="http://192.168.2.144:8012"
  >
  </IKApprovalProcessDetail>

  <div
      v-for="(item, index) in state.recordsData"
      :key="index"
      class="detail-content"
  >
    <IKApprovalProcessDetail
        :return-node="item?.returnNode || []"
        :default-status="state.status"
        :default-node-type="state.nodeType"
        :data-list="item?.data || []"
        file-url="http://192.168.2.45:8000/server/oss/download?fileUrl="
        :default-field-map="state.filedMap"
    />
  </div>
</div>
</template>

<script lang="ts">
export default {
  name: "Home",
};
</script>
<script setup lang="ts" name="审批流程">
import { defineComponent, reactive } from "vue";
import { ikApproval } from 'iking-utils-pro'

import { IKApprovalProcessDetail } from "@iking-ui/components";
const state = reactive({
  data: [],
  returnNode: [],
  status: {
    发起: "INITIATE",
    等待: "WAIT",
    同意: "PASS",
    撤销: "REVOKE",
    拒绝: "REJECT",
    转交: "TRANSFER",
    加签: "APPEND",
    退回: "BACK",
    评论: "COMMENT",
    待执行: "WAITING",
    执行中: "RUNNING",
  },
  nodeType: {
    发起人节点: "INITIATOR",
    审批节点: "APPROVE",
    抄送节点: "CARBON_COPY",
    办理节点: "DISPOSE",
    分支节点: "BRANCH",
    条件节点: "CONDITION",
    结束节点: "END",
  },
  filedMap: {
    id: "id",
    nodeId: "sortOrder",
    nodeType: "type",
    nodeTypeName: "name",
    approveStatus: "status",
    approveStatusName: "statusName",
    // 发起人操作时间
    operationTime: "createTime",
    approveType: "multiExecutorType",
    approveTypeName: "multiExecutorTypeName",
    approveOpinion: "approveComment",
    countersignPer: "appendExecutorUsers",
    originator: "username",
    attachment: "attachments",
    attachmentParam: {
      id: "id",
      originName: "attachmentName",
      url: "attachmentId",
      suffix: "attachmentSuffix",
      size: "attachmentSize",
    },
    attachmentImg: "images",
    approvePersonList: "executorUsers",
    isShowAdd: "initiatorSpecify",
    lineType: "lineType",
  },
  recordsData: [],
  downloadUrl: "http://192.168.2.45:8000/server/oss/download?fileUrl=",
});


const deepSetParallel = (list: any[]) => {
  list.forEach((itemFa: any) => {
    itemFa.processInstanceNodes.forEach((item: any)=> {
      item.lineType = 'dashed'
      item.username
          = (item.executorUsers && item.executorUsers[0]?.userName) || ''
      item.status = 'WAIT'
      if (item.parallelInstances?.length) {
        deepSetParallel(item.parallelInstances)
      }
    })
  })
}

const getData = () => {
  fetch("http://192.168.2.45:8000/server/approve/form/instance/detail/id", {
    method: "POST",
    body: "0a6d4da7a6b14c449427b51c7e6becf3",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer 29ed136d1c4a44ff896445dfe71e4ee4",
      'X-Tenant': 'wdp'
    },
  })
    .then((response) => {
      response.json().then((data1) => {
        const data = data1.data
        const { stateData, recordsData: _recordsData } = ikApproval.formatProcess(data, state.downloadUrl)
        console.log(stateData, _recordsData)
        if (data?.processInstance) {
          state.data = stateData.data
          state.returnNode = state.data.filter((item: any) => item.status !== state.status.等待)
        }
        state.recordsData = _recordsData
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
getData();
</script>

<style lang="scss" scoped>
@import "../../../src/assets/font/iconfont.css";
</style>
