<!--
 * @Author      : wfl
 * @LastEditors: zqf
 * @description :
 * @updateInfo  :
 * @Date        : 2022-12-02 10:13:01
 * @LastEditTime: 2024-03-20 10:56:47
-->
<script setup lang="ts">
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
        headers: null,
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

const api = ref({})
setTimeout(() => {
  api.value = {
    methods: "post",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Authorization": 'Bearer 841b7a7b0d9c4021b1655192c28ac61b'
    },
    url: `http://192.168.2.7/api/server/component/pick/mix`,
    param: null,
    paramKey: "type",
  }
})

const chooseType: Ref<any[]> = ref(['organization', 'user'])
const handchangeType = (val: any) => {
  chooseType.value = [val]
  handList.value = []

  isShow.value = true
  testPid.value = '123123'
}
const testPid = ref('root')
</script>

<template>
  <button @click="handShow">TESTING</button>
  <button @click="handchangeType('user')">handchangeType</button>
  <button @click="handchangeType('role')">handchangeTypeRole</button>
  <IkingPickerUser 
      ref="testRef" 
      v-model="handList" 
      v-model:show="isShow" :multiple="false"
      :choose-type="chooseType" 
      :type-option="{ dep: 'DEPT', user: 'USER', role: 'ROLE', post: 'POST' }" 
      :prop-option="{
        name: 'elementName',
        id: 'elementId',
        type: 'elementType',
      }" 
      :api="api" 
      @ok="handSelected" 
      emptyText="暂无数据" />
</template>
