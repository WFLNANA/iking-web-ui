<!--
 * @Author      : wfl
 * @LastEditors: zqf
 * @description :
 * @updateInfo  :
 * @Date        : 2022-12-02 10:13:01
 * @LastEditTime: 2024-05-31 14:41:04
-->
<script setup lang="ts" name="DemoIkPicker">
import { PropType, Ref, ref } from "vue";
import { IkingPickerUser } from "@iking-ui/components";
import { TList, EChooseType } from "@iking-ui/components/IkPickerUser/types";
const props = defineProps({
  // declare props
  isMobile: { type: Boolean, default: false },
  api: {
    type: Object,
    default: () => {
      return {
        methods: "get",
        headers: {},
        url: "",
        param: null,
        paramKey: "type",
      };
    },
  },
  list: {
    type: Array as PropType<Array<TList>>,
    default: () => [],
  },
  typeOption: {
    type: Object,
    default: () => {
      dep: "dept";
    },
  },
  propOption: {
    type: Object,
    default: () => null,
  },
  search: {
    type: Boolean,
    default: true,
  },
  lazy: {
    type: Boolean,
    default: true,
  },
  cache: {
    type: Boolean,
    default: true,
  },
  shadow: {
    type: String as PropType<"hover" | "always" | "never">,
    default: "hover",
  },
  placeholder: {
    type: String,
    default: "模糊搜索人员、部门",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  emptyText: {
    type: String,
    default: "暂无数据",
  },
} as const);

const isShow = ref(false);
const isShowPickerUser = ref(false);

// [{elementType: 'DEPT', elementName: '1', elementId: 'd4bd83831abe439885597bc1c49057de'}]
// [{
//   elementId: "00fed125c0ba4e4b8fe6e1c05ae750e6",
//   elementName: "测试", elementType: "USER"
// }]
const handList: Ref<any[]> = ref([]);
const testRef = ref(null);
const handSelected = (val: any) => {
  handList.value = val.list;
};

const handShow = () => {
  isShow.value = true;
};

const api = ref({
  methods: "post",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: "Bearer 4dfd2c530a9d4a6fb8862191a64ebfe1",
    "X-Tenant": "wdp",
  },
  url: `http://192.168.1.22:9000/api/server/component/pick/mix`,
  param: null,
  paramKey: "type",
});

const chooseType: Ref<any[]> = ref(["organization", "dep", "user"]);
const handchangeType = (val: any) => {
  // chooseType.value = [val];
  handList.value = [];

  isShowPickerUser.value = true;
  testPid.value = "123123";
};
const handchangeTypeUser = (val: any) => {
  chooseType.value = ["user", "post", "role"];
  // setTimeout(()=>{
  //   handList.value = [{
  //     elementId:"311eebf4eb3145e687d3bf7822d40f3e",
  //     elementName:"马化云",
  //     elementType:"USER"
  //   }];
  // }, 3000)

  isShowPickerUser.value = true;
};
const testPid = ref("");
const orgElement = {
  elementType: "DEPT",
  elementName: "自定义一级单位",
  elementId: "bcc9640b241e4142984481abf74c7f6d",
  userCount: "100",
};
const groupList = [
  {
    type: "DEPT",
    name: "自定义一级单位",
    id: "bcc9640b241e4142984481abf74c7f6d",
    userCount: "100",
  },
];
// const userList = [
//   {
//     type: "USER",
//     name: "自定义一级单位的人",
//     id: "bcc9640b241e4142984481abf74c7f6b",
//   },
// ];
// const roleList = [
//   {
//     id: "1",
//     name: "管理员",
//     type: "role",
//   },
//   {
//     id: "2",
//     name: "普通人员",
//     type: "role",
//   },
//   {
//     id: "3",
//     name: "普通人员1",
//     type: "role",
//   },
//   {
//     id: "4",
//     name: "普通人员2",
//     type: "role",
//   },
//   {
//     id: "5",
//     name: "普通人员3",
//     type: "role",
//   },
//   {
//     id: "6",
//     name: "普通人员4",
//     type: "role",
//   },
//   {
//     id: "7",
//     name: "普通人员5",
//     type: "role",
//   },
//   {
//     id: "8",
//     name: "普通人员6",
//     type: "role",
//   },
//   {
//     id: 9,
//     name: "普通人员7",
//     type: "role",
//   },
//   {
//     id: 10,
//     name: "普通人员8",
//     type: "role",
//   },
//   {
//     id: 11,
//     name: "普通人员9",
//     type: "role",
//   },
//   {
//     id: 12,
//     name: "普通人员10",
//     type: "role",
//   },
//   {
//     id: 13,
//     name: "普通人员11",
//     type: "role",
//   },
//   {
//     id: 14,
//     name: "普通人员12",
//     type: "role",
//   },
//   {
//     id: 15,
//     name: "普通人员13",
//     type: "role",
//   },
//   {
//     id: 16,
//     name: "普通人员14",
//     type: "role",
//   },
//   {
//     id: 17,
//     name: "普通人员15",
//     type: "role",
//   },
//   {
//     id: 18,
//     name: "普通人员16",
//     type: "role",
//   },
//   {
//     id: 19,
//     name: "普通人员17",
//     type: "role",
//   },
//   {
//     id: 20,
//     name: "普通人员18",
//     type: "role",
//   },
//   {
//     id: 21,
//     name: "普通人员19",
//     type: "role",
//   },
//   {
//     id: 22,
//     name: "普通人员20",
//     type: "role",
//   },
//   {
//     id: 23,
//     name: "普通人员21",
//     type: "role",
//   },
//   {
//     id: 24,
//     name: "普通人员22",
//     type: "role",
//   },
//   {
//     id: 25,
//     name: "普通人员23",
//     type: "role",
//   },
// ];

// const postList = [
//   {
//     id: 1,
//     name: "总经理",
//     type: "post",
//   },
//   {
//     id: 2,
//     name: "总经理1",
//     type: "post",
//   },
//   {
//     id: 3,
//     name: "总经理2",
//     type: "post",
//   },
//   {
//     id: 4,
//     name: "总经理3",
//     type: "post",
//   },
//   {
//     id: 5,
//     name: "总经理4",
//     type: "post",
//   },
//   {
//     id: 6,
//     name: "总经理5",
//     type: "post",
//   },
//   {
//     id: 7,
//     name: "总经理6",
//     type: "post",
//   },
//   {
//     id: 8,
//     name: "总经理7",
//     type: "post",
//   },
//   {
//     id: 9,
//     name: "总经理8",
//     type: "post",
//   },
//   {
//     id: 10,
//     name: "总经理9",
//     type: "post",
//   },
//   {
//     id: 11,
//     name: "总经理10",
//     type: "post",
//   },
//   {
//     id: 12,
//     name: "总经理11",
//     type: "post",
//   },
//   {
//     id: 13,
//     name: "总经理12",
//     type: "post",
//   },
//   {
//     id: 14,
//     name: "总经理13",
//     type: "post",
//   },
//   {
//     id: 15,
//     name: "总经理14",
//     type: "post",
//   },
//   {
//     id: 16,
//     name: "总经理15",
//     type: "post",
//   },
//   {
//     id: 17,
//     name: "总经理16",
//     type: "post",
//   },
//   {
//     id: 18,
//     name: "总经理17",
//     type: "post",
//   },
//   {
//     id: 19,
//     name: "总经理18",
//     type: "post",
//   },
//   {
//     id: 20,
//     name: "总经理19",
//     type: "post",
//   },
//   {
//     id: 21,
//     name: "总经理20",
//     type: "post",
//   },
//   {
//     id: 22,
//     name: "总经理21",
//     type: "post",
//   },
//   {
//     id: 23,
//     name: "总经理22",
//     type: "post",
//   },
//   {
//     id: 24,
//     type: "post",
//     name: "总经理23",
//   },
// ];
</script>

<template>
  <button @click="handShow">TESTING</button>
  <button @click="handchangeType('organization')">handchangeType</button>
  <button @click="handchangeType('role')">handchangeTypeRole</button>
  <button @click="handchangeTypeUser('role')">IkingPickerUser</button>
  <IkingPickerUser
    ref="testRef"
    v-model="handList"
    v-model:show="isShowPickerUser"
    :multiple="false"
    :children="true"
    :data-scope-only="true"
    :root-department-only="false"
    :choose-type="['user']"
    :type-option="{ group: 'DEPT', user: 'USER', role: 'ROLE', post: 'POST' }"
    :prop-option="{
      name: 'elementName',
      id: 'elementId',
      type: 'elementType',
    }"
    :api="api"
    :title="'人员选择组件'"
    @ok="handSelected"
    emptyText="暂无数据"
  />
</template>
