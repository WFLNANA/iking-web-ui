<template>
  <IKApprovalProcessDetail :returnNode="state.returnNode" :defaultStatus="state.status"
    :defaultNodeType="state.nodeType" :dataList="state.data" :defaultFieldMap="state.filedMap"
    file-url="http://192.168.2.7/api/server/oss/download?fileUrl=" kk-url="http://192.168.2.144:8012">
  </IKApprovalProcessDetail>

  <div v-for="(item, index) in state.recordsData" :key="index" class="detail-content">
    <IKApprovalProcessDetail :return-node="item?.recordNodes || []" :default-status="state.status"
      :default-node-type="state.nodeType" :data-list="item?.recordNodes || []"
      file-url="http://192.168.2.7/api/server/oss/download?fileUrl=" kk-url="http://192.168.2.144:8012"
      :default-field-map="state.filedMap" />
  </div>
</template>
<script setup lang="ts" name="审批流程">
import { reactive } from "vue";
import { IKApprovalProcessDetail } from "@iking-ui/components";
const state = reactive({
  data: [],
  status: {
    发起: 'INITIATE',
    等待: 'WAIT',
    同意: 'PASS',
    撤销: 'REVOKE',
    拒绝: 'REJECT',
    转交: 'TRANSFER',
    加签: 'APPEND',
    退回: 'BACK',
    评论: 'COMMENT',
    待执行: 'WAITING',
    执行中: 'RUNNING'
  },
  nodeType: {
    发起人节点: 'INITIATOR',
    审批节点: 'APPROVE',
    抄送节点: 'CARBON_COPY',
    办理节点: 'DISPOSE',
    分支节点: 'BRANCH',
    条件节点: 'CONDITION',
    结束节点: 'END'
  },
  filedMap: {
    id: 'id',
    nodeId: 'sortOrder',
    nodeType: 'type',
    nodeTypeName: 'name',
    approveStatus: 'status',
    approveStatusName: 'statusName',
    // 发起人操作时间
    operationTime: 'createTime',
    approveType: 'multiExecutorType',
    approveTypeName: 'multiExecutorTypeName',
    approveOpinion: 'approveComment',
    countersignPer: 'appendExecutorUsers',
    originator: 'username',
    attachment: 'attachments',
    attachmentParam: {
      id: 'id',
      originName: 'attachmentName',
      url: 'attachmentId',
      suffix: 'attachmentSuffix',
      size: 'attachmentSize'
    },
    attachmentImg: 'images',
    approvePersonList: 'executorUsers',
    isShowAdd: 'initiatorSpecify',
    lineType: 'lineType'
  },
  returnNode: [],
  recordsData: [],
  downloadUrl: "http://192.168.2.7/api/server/oss/download?fileUrl=",
});

const getData = () => {
  fetch("http://192.168.2.45:8000/server/approve/form/instance/detail/id", {
    method: "POST",
    body: '8e69a8d33be64e75b167bf797d95af69',
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer e8c29f1d6db445b6a6b7cb38c4f3684f",
    },
  })
    .then((response) => {
      response.json().then((data1) => {
        const arr = data1.data?.processInstance?.recordNodes
        state.recordsData = data1.data?.processRecords?.map((sta) => {
          sta.recordNodes.forEach((item) => {
            if (item.type == state.nodeType.抄送节点) {
              // 计算抄送时，已读未读情况
              let readList = item.executorUsers.filter((it: any) => {
                return it.status === 'END';
              });
              item.read = readList.length;
              item.allRead = readList.length === item.executorUsers.length;
            }
          })
          return sta
        })
        if (data1.data) {
          if (arr) {
            for (let item of data1.data?.processInstance?.recordNodes) {
              item.lineType = "solid";
              item.username = item.executorUsers && item.executorUsers[0]?.userName;
            }
          }
          arr && data1.data?.processInstance?.instanceNodes.forEach((element: any, index: any) => {
            element.lineType = "dashed";
            element.sortOrder = data1.data?.processInstance?.recordNodes.length + index + 1;
            element.username =
              element.executorUsers?.length && element.executorUsers[0]?.userName;
            element.status = state.status.等待;
            // element.statusName = "审批中";
          });

          state.data = [
            ...data1.data?.processInstance?.recordNodes || [],
            ...data1.data?.processInstance?.instanceNodes || [],
          ] as any;
          // 将数据按照sortOrder排序
          state.data = state.data.sort(
            (a: any, b: any) => a.sortOrder - b.sortOrder
          );

          state.data.forEach((item: any) => {
            if (item.backToRecordNodeId) {
              // 计算退回节点下标
              let obj: any = state.data.find(
                (it: any) => it.id == item.backToRecordNodeId
              );
              item.returnNodeName = obj.name;
              let arr: any = [obj.sortOrder, item.sortOrder];
              (state.returnNode as any).push(arr);
            }
            if (item.type == state.nodeType.抄送节点) {
              // 计算抄送时，已读未读情况
              let readList = item.executorUsers.filter((it: any) => {
                return it.status === 'END';
              });
              item.read = readList.length;
              item.allRead = readList.length == item.executorUsers.length;
            }
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

<style lang="scss" scoped>
@import '../../../src/assets/font/iconfont.css';
</style>
