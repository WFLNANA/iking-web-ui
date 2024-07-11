<!--
 * @Author: fj
 * @LastEditors: zqf
 * @description:
 * @updateInfo: 本次更新内容：
 * @Date: 2023-03-31 15:44:37
 * @LastEditTime: 2024-05-27 14:26:03
-->
<template>
  <div class="approveProcess" id="approveProcess">
    <div
      class="approveBlock"
      :id="item[state.defaultFile.nodeId]"
      v-for="(item, index) of state.listData"
      :key="item[state.defaultFile.nodeId]"
    >
      <div class="topBlock">
        <div class="left">
          <span class="nodeBg">
            <!-- 用户列表长度等于1， :src="formatUrl(it)"并且存在头像 -->
            <img
              v-if="
                item[state.defaultFile.approvePersonList]?.length == 1 &&
                item[state.defaultFile.approvePersonList][0].userAvatar
              "
              style="width: 100%; height: 100%; border-radius: 10px;"
              :src="
                formatUrl(
                  item[state.defaultFile.approvePersonList][0].userAvatar
                )
              "
              alt=""
            />
            <!-- 否则显示对应节点 -->
            <i
              v-else
              :class="
                getTypeIcon(
                   state,
                  item[state.defaultFile.nodeType],
                  item[state.defaultFile.approvePersonList]
                )
              "
            ></i>
            <!-- 审批状态图标 -->
            <i
              :class="
                getClassIcon(item[state.defaultFile.approveStatus], index, item)
              "
            ></i>
          </span>
        </div>
        <div class="right">
          <div class="topInfo">
            <div>
              <!-- 不是抄送节点 -->
              <div v-if="state.nodeType.抄送节点 !== item[state.defaultFile.nodeType]">
                <!-- 撤销，评论不显示节点名称 -->
                <div
                  v-if="
                    item[state.defaultFile.approveStatus] !=
                      state.statusOption.撤销 &&
                    item[state.defaultFile.approveStatus] !=
                      state.statusOption.评论 && item[state.defaultFile.nodeType] !== state.nodeType.并行分支"
                  class="main-text"
                >
                 {{ item[state.defaultFile.nodeTypeName] }}
                </div>
                <!-- 名字+审批状态 -->
                <div class="name">
                  <!-- 已审批节点文本 -->
                  <div v-if="item[state.defaultFile.lineType] == 'solid'">
                    <span
                      :style="{
                        color:
                          item[state.defaultFile.approveStatus] ==
                          state.statusOption.评论
                            ? '#000'
                            : '',
                      }"
                      >{{ item[state.defaultFile.originator] }}</span
                    >
                    <!-- 发起，退回不显示状态 -->
                    <span
                      v-if="
                        item[state.defaultFile.approveStatusName] &&
                        item[state.defaultFile.approveStatus] !=
                          state.statusOption.发起 &&
                        item[state.defaultFile.approveStatus] !=
                          state.statusOption.退回
                      "
                    >
                      {{
                        item[state.defaultFile.approveStatus] ==
                        state.statusOption.评论
                          ? " 添加了评论"
                          : "（" +
                            item[state.defaultFile.approveStatusName] +
                            "）"
                      }}
                    </span>
                    <!-- 退回状态显示 -->
                    <span
                      v-if="
                        item[state.defaultFile.approveStatus] ==
                        state.statusOption.退回
                      "
                    >
                      <span class="red" style="margin: 0px 5px">
                        退回至</span>
                      {{ item[state.defaultFile.backToInstanceNodeName] || item[state.defaultFile.backToRecordNodeName] }}
                    </span>
                  </div>
                  <!-- 待审批节点 -->
                  <div v-else>
                    <span
                      v-if="
                        item[state.defaultFile.approvePersonList]?.length == 1
                      "
                      >{{ item[state.defaultFile.originator] }}
                      <span
                        v-if="
                          item[state.defaultFile.approveStatus] ==
                          state.statusOption.等待
                        "
                        >{{
                          `（${item[state.defaultFile.approveStatusName]}）`
                        }}</span
                      >
                    </span>
                    <span v-else-if="item[state.defaultFile.approvePersonList]">
                      {{`${item[state.defaultFile.approvePersonList]?.length}人${item[state.defaultFile.approveTypeName]}`}}
                    </span>
                  </div>
                </div>
              </div>
              <div v-else>
                <div class="main-text">抄送人员</div>
                <div class="name">
                  <!-- 抄送一人时 -->
                  <span
                    v-if="
                      item[state.defaultFile.approvePersonList]?.length == 1
                    "
                  >
                    <span
                      >已抄送给
                      <span style="color: #000">{{
                        item[state.defaultFile.approvePersonList][0].userName
                      }}</span>
                    </span>
                    <span
                      class="blue"
                      style="margin-left: 5px; font-size: 12px"
                      >{{
                        item[state.defaultFile.approvePersonList][0].status ===
                        "END"
                          ? "已读"
                          : "未读"
                      }}</span>
                  </span>
                  <!-- 抄送多人时 -->
                  <span
                    v-if="item[state.defaultFile.approvePersonList]?.length > 1"
                  >
                    {{
                      `已抄送${
                        item[state.defaultFile.approvePersonList]?.length
                      }人`
                    }}
                    <span
                      v-if="item[state.defaultFile.allRead]"
                      class="blue"
                      style="font-size: 12px"
                    >
                      全部已读
                    </span>
                    <span v-else>
                      <span
                        v-if="!item[state.defaultFile.read]"
                        class="blue"
                        style="font-size: 12px"
                      >
                        全部未读
                      </span>
                      <span
                        v-if="item[state.defaultFile.read]"
                        class="blue"
                        style="font-size: 12px"
                      >
                        {{ item[state.defaultFile.read] }}人已读
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="time">
              <!-- 不是抄送节点，展示时间 -->
              <span
                v-if="
                  item[state.defaultFile.nodeType] != state.nodeType.抄送节点 &&
                  item[state.defaultFile.approveStatus] !==
                    state.statusOption.等待
                "
                >{{
                  ikDate.toDateTime(
                    item[state.defaultFile.operationTime],
                    "MM/DD HH:mm"
                  )
                }}</span>
              <!-- 是抄送节点，并且抄送人员大于1时，展示图标 -->
              <span
                v-if="
                  item[state.defaultFile.nodeType] == state.nodeType.抄送节点 &&
                  item[state.defaultFile.approvePersonList]?.length > 1
                "
              >
                <i
                  v-if="item?.show"
                  class="ikapprove ikapprove-a-putongjiantouzhankai"
                  @click="changeShow(item, 'grid')"
                ></i>
                <i
                  v-else
                  @click="changeShow(item, 'none')"
                  class="ikapprove ikapprove-a-putongjiantoushouqi"
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bottomBlock"
        :style="{
          borderLeft:
            index == state.listData.length - 1
              ? ''
              : `2px ${
                  item[state.defaultFile.lineType] || 'dashed'
                } var(--el-border-color)`,
        }"
      >
        <!-- 审批意见 -->
        <div
          class="opinion"
          v-if="
            item[state.defaultFile.approveOpinion] ||
            item[state.defaultFile.approveStatus] == state.statusOption.加签
          "
        >
          <span v-if="item[state.defaultFile.approveOpinion]">{{
            item[state.defaultFile.approveOpinion]
          }}</span>
          <span
            v-if="
              item[state.defaultFile.approveStatus] == state.statusOption.加签
            "
          >
            <span class="ik-text-primary">添加审批人</span>
            <span
              v-for="(user, index) in item[state.defaultFile.countersignPer]"
              style="color: var(--el-text-color-primary); margin-left: 8px"
            >
              {{ user?.userName
              }}{{
                index < item[state.defaultFile.countersignPer].length - 1
                  ? "、"
                  : ""
              }}
            </span>
          </span>
        </div>
        <!-- 附件 -->
        <IkPreviewFile
          v-if="item[state.defaultFile.attachment]?.length"
          :list="item[state.defaultFile.attachment]"
        />
        <!-- 附件图片 -->
        <div
          class="annexImage"
          v-if="item[state.defaultFile.attachmentImg]?.length"
        >
          <div
            class="image"
            v-for="(it, i) of item[state.defaultFile.attachmentImg]"
            :key="i"
          >
            <el-image
              :src="formatUrl(it)"
              :preview-src-list="
                item[state.defaultFile.attachmentImg].map((im: any) => formatUrl(im))
              "
              fit="cover"
              z-index="9999"
              :zoom-rate="1.2"
              :alt="formatUrl(it)"
            />
          </div>
        </div>
        <!-- 抄送节点或是等待审批状态并且列表长度大于1 -->
        <div
          v-if="
            (item[state.defaultFile.nodeType] == state.nodeType.抄送节点 ||
              item[state.defaultFile.approveStatus] ==
                state.statusOption.等待) &&
            item[state.defaultFile.approvePersonList]?.length > 1
          "
          class="approveList"
        >
          <div
            class="perBlock"
            v-for="it of item[state.defaultFile.approvePersonList]"
            :key="it.userName"
          >
            <span class="nodeBg-list">
              <img
                v-if="it.userAvatar"
                style="width: 100%; height: 100%; border-radius: 50%"
                :src="formatUrl(it.userAvatar)"
                alt=""
              />
              <span v-else>{{ it.userName.slice(-2) }}</span>
              <i
                v-if="it.status === 'END'"
                class="ikapprove ikapprove-duihao2 green read"
              ></i>
            </span>
            <div class="main-text" :title="it.userName">{{ it.userName }}</div>
          </div>
        </div>
      </div>
      <div v-if="item[state.defaultFile.nodeType] === state.nodeType.并行分支" class="branch">
        <div class="branch-card" v-for="bran in item[state.defaultFile.parallelInstances]">
          <div class="branch-name">
            {{ bran.name }}
          </div>
          <IkingApprovalProcessDetail v-bind="props" :data-list="bran?.processInstanceNodes || []" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "IkingApprovalProcessDetail",
};
</script>
<script setup lang="ts">
import { nextTick, onMounted, reactive, watch } from "vue";
import { IkPreviewFile } from "@iking-ui/components";
import { setFileUrl } from "@iking-ui/utils/math";
import "../../../assets/font/iconfont.css";
import { ikDate } from "iking-utils-pro";
import {getTypeIcon, useState} from "@iking-ui/utils/approval";
import useProvider from "@iking-ui/utils/use-provider";

const props = defineProps({
  // 是否本地打开
  local: {
    type: Boolean,
    default: false,
  },
  // 状态数组
  defaultStatus: {
    type: Object,
    default: () => {
      return {};
    },
  },
  // 节点类型
  defaultNodeType: {
    type: Object,
    default: () => {
      return {};
    },
  },
  // 数据数组
  dataList: {
    type: Array,
    default: () => {
      return [];
    },
  },
  // 字段映射
  defaultFieldMap: {
    type: Object,
    default: () => {
      return {};
    },
  },
  // 退回的节点数组
  returnNode: {
    type: Array,
    default: () => {
      return [];
    },
  },
  //文件访问地址
  fileUrl: {
    type: String,
    default: "",
  },
  kkUrl: {
    type: String,
    default: "",
  },
  // 是否需要onlyoffice预览
  isOnlyOfficePreview: {
    type: Boolean,
    default: false,
  },
  // 需要onlyoffice预览的文件类型
  onlyOfficeAccept: {
    type: String,
    default: ".pdf,.docx,.doc.ppt,.pptx,.xlsx,.xls,",
  },
  // onlyoffice服务地址
  onlyofficeServer: {
    type: String,
    default: "",
  },
});

const { cLoadUrl } = useProvider(props)

const state: { [key: string]: any } = reactive(useState(props));
watch(
  () => props.dataList,
  (val) => {
    if (val) {
      nextTick(() => {
        state.listData = val;
      });
      setTimeout(() => {
        if (props.returnNode.length) getReturnNode();
      }, 500);
    }
  },
  { deep: true }
);
onMounted(() => {
  if (props.dataList.length) {
    state.listData = props.dataList;
    setTimeout(() => {
      if (props.returnNode.length) getReturnNode();
    }, 500);
  }
});

const getReturnNode = () => {
  let item: any = null;
  if (!props?.returnNode) return;
  for (item of props?.returnNode) {
    if (isNaN(item[1])) return;
    let arr = Array.from(new Array(item[1] + 1).keys()).slice(item[0]);
    nextTick(() => {
      getBgHW(arr);
    });
  }
};

/**
 * @description: 计算回退节点的背景样式
 * @return {*}
 */
const getBgHW = (arr: any) => {
  let bgDemo: any = document.createElement("div");
  let parent = document.getElementById("approveProcess");
  let height = 0;
  let width: any = document.getElementById(`${arr[0]}`)?.offsetWidth;
  let startL: any = document.getElementById(`${arr[0]}`)?.offsetLeft;
  let startT: any = document.getElementById(`${arr[0]}`)?.offsetTop;
  arr.forEach((item: any) => {
    let demo: any = document.getElementById(`${item}`);
    height += demo.offsetHeight;
  });
  setTimeout(() => {
    bgDemo.style.width = width + 32 + "px";
    bgDemo.style.height = height + "px";
    bgDemo.style.background = "#f9f9f9";
    bgDemo.style.position = "absolute";
    bgDemo.style.top = startT - 16 + "px";
    bgDemo.style.left = startL - 16 + "px";
    bgDemo.style.zIndex = -1;
    parent?.appendChild(bgDemo);
  });
};
/**
 * @description: 根据状态获取icon图标及颜色
 * @return {*}
 */
const getClassIcon = (status: any, index: any, item: any) => {
  let num = state.listData?.findIndex((it: any) => it.lineType == "dashed");
  let className: any = "";
  if(item){
    const index = item[state.defaultFile.approvePersonList]?.findIndex((it: any) => it[state.defaultFile.approveStatus] === state.statusOption.执行中)
    if(index > -1){
      return "ikapprove ikapprove-dengdai orange"
    }
  }
  switch (status) {
    case state.statusOption.发起:
      className = "ikapprove-duihao2 green";
      break;
    case state.statusOption.执行中:
      className = num == index ? "ikapprove-dengdai orange" : "";
      break;
    case state.statusOption.同意:
      className = "ikapprove-duihao2 green";
      break;
    case state.statusOption.拒绝:
      className = "ikapprove-jujue red";
      break;
    case state.statusOption.转交:
      className = "ikapprove-zhuanjiao blue";
      break;
    case state.statusOption.加签:
      className = "ikapprove-tianjia blue";
      break;
    case state.statusOption.退回:
      className = "ikapprove-s_fanhui2 red";
      break;
    case state.statusOption.评论:
      className = "ikapprove-pinglun1 blue";
      break;
  }
  return `ikapprove ${className}`;
};

const emits = defineEmits(["preview"]);
/**
 * @description:是否显示全部人员
 * @param {*} item  当前操作对象
 * @param {*} flag  样式
 * @return {*}
 */
const changeShow = (item: any, flag: any) => {
  item.show = !item.show;
  let demo: any = document.getElementById(`${item[state.defaultFile.nodeId]}`);
  let arr: Array<{ style: CSSStyleDeclaration; [key: string]: any }> =
    Array.from(demo?.getElementsByClassName("approveList"));
  for (let it of arr) {
    it.style.display = flag;
  }
};
/**
 * @description: 处理字符串
 * @param {*} str
 * @return {*}
 */
const formatUrl = (url: any) => {
  return setFileUrl(cLoadUrl.value, url);
};
</script>
<style lang="scss" scoped>
@import url("approveProcess.scss");
</style>
