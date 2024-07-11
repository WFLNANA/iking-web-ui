<!--
 * @Author       : wfl
 * @LastEditors  : fj
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2023-06-25 10:11:38
 * @LastEditTime: 2023-09-14 14:06:50
-->
<template>
  <div class="approveProcess" id="approveProcess">
    <div class="content" v-for="(item, index) of props.dataList" :key="item.id">
      <!-- 审批节点类型 -->
      <div class="node">
        <span class="nodeBg">
          <i :class="getTypeIcon(state, item[state.defaultFile.nodeType])"></i>
        </span>
        <div class="line" :style="{'border-left': index === props.dataList.length - 1 ? '' : `2px solid var(--el-border-color)`}"></div>
      </div>
      <div class="info"  v-if="item[state.defaultFile.nodeType] !== state.nodeType.并行分支">
        <div>
          <div>{{ item[state.defaultFile.nodeTypeName] }}</div>
          <div class="explain">
            <!-- 抄送节点 -->
            <span v-if="item[state.defaultFile.nodeType] == state.nodeType.抄送节点">
              <span v-if="item[state.defaultFile.approvePersonList].length">{{
                  `抄送${item[state.defaultFile.approvePersonList].length}人`
                }}</span>
              <span v-if="item[state.defaultFile.isShowAdd]">,可添加抄送人</span>
            </span>
            <!-- 审批节点 -->
            <span v-else>
              <!-- 存在审批人时 -->
              <span v-if="item[state.defaultFile.approvePersonList]?.length">
                {{
                  item[state.defaultFile.approvePersonList]?.length == 1
                      ? "1人审批"
                      : `${item[state.defaultFile.approvePersonList]?.length}人${item[state.defaultFile.multiExecutorTypeName]
                      }`
                }}</span>
              <span
                  v-else-if="[state.statusWithoutApprover.自动通过, state.statusWithoutApprover.自动拒绝].includes(item[state.defaultFile.approveType])">
                {{ item[state.defaultFile.approveTypeName] }}
              </span>
              <!-- 没有审批人，并且有指定默认审批方式 -->
              <span v-else-if="item[state.defaultFile.executorEmptyStrategy] &&
                item[state.defaultFile.executorEmpty]
                ">
                未找到审批人，<span>{{
                  item[state.defaultFile.executorEmptyStrategy] ==
                  state.statusWithoutApprover.自动通过
                      ? "将自动通过"
                      : item[state.defaultFile.executorEmptyStrategy] ==
                      state.statusWithoutApprover.自动转交管理员
                          ? "自动转交给管理员"
                          : item[state.defaultFile.executorEmptyStrategy] ==
                          state.statusWithoutApprover.指定人员审批
                              ? `将自动转给指定成员${item[state.defaultFile.reserveExecutorUsers] &&
                              item[state.defaultFile.reserveExecutorUsers][0].userName
                              }`
                              : ""
                }}</span>
              </span>
              <span v-else-if="![state.nodeType.并行分支, state.nodeType.子流程].includes(item[state.defaultFile.nodeType])" :class="item.required ? 'warn' : ''">
                请选择{{ item[state.defaultFile.nodeType] === state.nodeType.办理节点 ? '办理人' : '审批人' }}
              </span>
            </span>
          </div>
        </div>
        <div class="personlist">
          <div class="list" v-for="(it, s) of item[state.defaultFile.approvePersonList]" :key="it.userId">
            <div style="width: 58px;">
              <div class="avatar">
                <img v-if="it.userAvatar" :src="formatUrl(it.userAvatar)" alt=""/>
                <div v-else class="nodeBg">
                  <span>{{ it.userName.slice(-2) }}</span>
                </div>
                <i v-if="it.canDele" @click="deletePer(index, s)" class="ikapprove ikapprove-shanchu1"></i>
              </div>
              <div class="name" :title="it.userName">{{ it.userName }}</div>
            </div>
            <!-- 显示添加人按钮,不是单选且已选中一个人的情况，显示图标 -->
            <span v-if="item[state.defaultFile.isShowAdd] &&
              !(
                item[state.defaultFile.singleApproval] &&
                item[state.defaultFile.approvePersonList]?.length == 1
              )
              " class="sign">
              <!-- 抄送默认 -->
              <span v-if="item[state.defaultFile.nodeType] == state.nodeType.抄送节点
                ">+</span>
              <!-- 审批 -->
              <span v-else>{{
                  item[state.defaultFile.multiExecutorType] == "ANY"
                      ? "/"
                      : item[state.defaultFile.multiExecutorType] == "ALL"
                          ? "+"
                          : ">"
                }}</span>
            </span>
          </div>
          <!-- 显示添加人按钮,不是单选且已选中一个人的情况，显示按钮 (item[state.defaultFile.isShowAdd] && -->
          <span v-if="item[state.defaultFile.isShowAdd] && !(
              item[state.defaultFile.singleApproval] &&
              item[state.defaultFile.approvePersonList]?.length == 1
            ) || item[state.defaultFile.isShowAddCopy]
            " class="addBg" @click="addPerson(item)">
            <span v-if="item[state.defaultFile.nodeType] == state.nodeType.审批节点" class="required"></span>
            <i class="ikapprove ikapprove-xinzeng"></i>
          </span>
          <!-- 添加人组件 -->
          <IkingPickerUser
              v-model="item.handList"
              v-model:show="item.isShow"
              @ok="handSelected($event, index)"
              :multiple="item.multiple"
              :dep-list="item.depList"
              :user-list="item.userList"
              :organization-list="item.organizationList"
              v-bind="pickerOption"
              :chooseType="item.chooseType"
          />
        </div>
      </div>
      <template v-else>
       <div class="node-branchs">
         <div class="branch-line"></div>
        <div style="flex: 1;">
          <div v-for="(bran, index) of item.parallelInstances" :key="index" :class="`branch branch-${index}`">
            <div class="node-branch" >
              {{ bran.name }}

            </div>
            <IkApprovalProcess v-bind="props" :dataList="bran.processInstanceNodes" style="margin-left: 20px;" />
          </div>
        </div>
       </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "IkApprovalProcess",
};
</script>
<script setup lang="ts">
import {reactive, nextTick, ref, computed} from "vue";
import { IkingPickerUser} from "@iking-ui/components";
import {ikStore} from 'iking-utils-pro'
import {getTypeIcon, useState} from "@iking-ui/utils/approval";
import useProvider from "@iking-ui/utils/use-provider";

const props = defineProps({
  // 选人组件请求地址
  pickerUrl: {
    type: String,
    default: "",
  },
  //文件访问地址
  loadUrl: {
    type: String,
    default: "",
  },
  // 数据数组
  dataList: {
    type: Array<any>,
    default: () => {
      return [];
    },
  },
  // 节点类型
  defaultNodeType: {
    type: Object,
    default: () => {
      return {};
    },
  },
  // 字段映射
  defaultFieldMap: {
    type: Object,
    default: () => {
      return {};
    },
  },
  // 没有审批人时的审批状态
  statusWithoutApprover: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const { cLoadUrl } = useProvider(props)
const TOKEN = ikStore.local.getItem('token') || 'Bearer 841b7a7b0d9c4021b1655192c28ac61b'
const TENANT = ref('sys')

function getSearchParam(key: string) {
  const searchStr = window.location.search
  const objParams = new URLSearchParams(searchStr)
  return objParams.get(key)
}

function setDomainHeader() {
  const xTenant = getSearchParam('xTenant') || ikStore.local.getItem('tenant')?.code
  if (xTenant) {
    //
    TENANT.value = xTenant
  }
}

setDomainHeader()

const state = reactive(useState(props));
/**
 * @description: 从后端获取所需要的数据
 * @param {*} id
 * @return {*}
 */

/**
 * @description:  打开当前数据的添加组件时
 * @param {*} row 当前对象
 * @return {*}
 */
const addPerson = async (row: any) => {
  row.multiple = !row[state.defaultFile.singleApproval] || row[state.defaultFile.isShowAddCopy];
  // 已选数据就等于页面渲染的row[state.defaultFile.approvePersonList]
  row.handList = row[state.defaultFile.approvePersonList]
      ? row[state.defaultFile.approvePersonList]
      : [];

  if (row[state.defaultFile.nodeType] === state.nodeType.抄送节点) {
    row.handList.forEach((ro: any) => {
      if (!ro.elementName) {
        ro.elementName = ro.userName
        ro.elementId = ro.userId
        ro.avatar = ro.userAvatar
      }
      ro.elementType = 'USER'
      ro.disabled = true
    })
    row.chooseType = ['user'];
    row.userList = [];
    row.depList = [];
  } else {
    switch (row[state.defaultFile.initiatorSpecifiedScopeType]) {
        // 全公司时，用后台返回的人员中去选择
      case "ALL":
        row.chooseType = ["dep_user"];
        row.userList = [];
        row.depList = [];
        break;
        // 否则就从后端返回的initiatorSpecifiedScope数组中选人
      default:
        row.chooseType = ["user"];
        row.userList = row.userList
            ? row.userList
            : row[state.defaultFile.initiatorSpecifiedScope]?.map((i: any) => {
              return {
                ...i,
                elementName: i?.executorName || i?.userName,
                elementId: i?.executorId || i?.userId,
                avatar: ((i?.executorAvatar || i?.userAvatar) && formatUrl(i?.executorAvatar || i?.userAvatar)) || "",
                elementType: "USER",
              };
            });
    }
  }

  nextTick(() => {
    row.isShow = true;
  });
};

const formatUrl = (str: any) => {
  let url = "";
  if (str.includes("http") || str.includes("https")) {
    url = str;
  } else {
    url = cLoadUrl.value ? `${str.includes(cLoadUrl.value) ? '' : cLoadUrl.value}${str}` : `${location.origin + location.pathname}server/oss/download?fileUrl=${str}`
  }
  return url;
};

/**
 * @description:
 * @param {*} val 返回的选中数据
 * @param {*} index  下标
 * @return {*}
 */
const handSelected = (val: any, index: any) => {
  props.dataList[index].handList = val.list;
  // 发起人存在之前选过的人员是，先默认回显
  let arr = props.dataList[index][state.defaultFile.approvePersonList] || [];
  let arr1 = arr.filter((it: any) => {
    return !it.canDele;
  });
  let newArr = val.list.map((it: any) => {
    return {
      ...it,
      userName: it.elementName,
      userAvatar: it.avatar,
      canDele: true,
    };
  });
  props.dataList[index][state.defaultFile.approvePersonList] =
      arr1.concat(newArr);
};
/**
 * @description:  删除人员，并给组件重新赋默认人员
 * @param {*} index  父级id
 * @param {*} ind   子级id
 * @return {*}
 */
const deletePer = (index: any, ind: any) => {
  // 删除人员
  props.dataList[index][state.defaultFile.approvePersonList].splice(ind, 1);
  // 改组件的默认人员为删除之后的人
  props.dataList[index].handList =
      props.dataList[index][state.defaultFile.approvePersonList];
};
/**
 * @description:必填校验
 * @return {*}
 */
const requiredVerification = () => {
  let flag = true;
  props.dataList.forEach((item: any) => {
    item.required = false;
    if (
        item[state.defaultFile.nodeType] == state.nodeType.审批节点 &&
        item[state.defaultFile.isShowAdd]
    ) {
      // 没有选择审批人时
      if (!item[state.defaultFile.approvePersonList]?.length) {
        flag = false;
        item.required = true;
      }
    }
  });
  return flag;
};

const pickerOption = computed(() => ({
  propOption: {
    name: 'elementName',
    id: 'elementId',
    type: 'elementType',
    avatar: 'avatar',
  },
  typeOption: {
    dep: 'DEPT',
    user: 'USER',
    role: 'ROLE',
    post: 'POST',
  },
  api: {
    methods: 'post',
    url: props.pickerUrl,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': TOKEN,
      'X-Tenant': TENANT.value
    }
  }
}))
defineExpose({requiredVerification});
</script>
<style lang="scss" scoped>
@import url("index.scss");
</style>
