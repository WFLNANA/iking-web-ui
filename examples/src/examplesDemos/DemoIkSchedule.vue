<!--
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-08-14 14:22:20
 * @LastEditTime: 2023-12-07 10:48:00
-->
<script setup lang="ts" name="DemoIkSchedule">
import {ref, reactive} from 'vue';
import IkSchedule from '@iking-ui/components/IkSchedule';
import { ObjectUtils } from '@iking-ui/utils';

class Event {
  title: string = '';
  content: string = '';
}

const state = reactive({
  visible: false,
});


const formData = reactive({
  title: '',
  content: '',
  startDate: '',
  endDate: '',
});

const events = ref<any[]>([
  {
    "id": "a6c69dd6784e4ba9a91a66dfd6d1c079",
    "businessId": "",
    "title": "11111",
    "type": null,
    "typeName": null,
    "status": null,
    "statusName": null,
    "estimateEndTime": "2023-12-06 00:00:00",
    "remark": "111",
    "estimateStartTime": "2023-12-06 00:00:00",
    "redirectUrl": "",
    "allDay": true,
    "createBy": "00000000",
    "createName": "平台管理员",
    "createTime": "2023-12-06 18:03:06",
    "updateBy": "00000000",
    "updateName": "平台管理员",
    "updateTime": "2023-12-06 18:03:06",
    "start": "2023-12-06 00:00:00",
    "end": "2023-12-06 00:00:00"
}
]);
const editVisible = ref<boolean>(false);

const _ref = ref<any>(null);

const handleEditOpen = (target: any) => {
  ObjectUtils.copyValue(formData, target.form);
}

const handleSubmit = (value: any) => {
  let param = new Event();
  ObjectUtils.copyValue(param, formData);
  _ref.value?.customSubmit(param);
}

const handleValueChange = (events) => {
}

const handleAdd = (param) => {
  param.id = new Date().getTime();
  events.value.push(param);
}

const handleUpdate = (param) => {
  const target = events.value.find(item => `${item.id}` === `${param?.id}`);
  if(target){
    const id = target?.id;
    ObjectUtils.copyValue(target,param);
    target.id = id;
  }
}

const handleDelete = (id) => {
  const delIndex = events.value.findIndex(item => `${item.id}` === `${id}`);
    if(delIndex > -1){
      events.value.splice(delIndex, 1)
    }
}

</script>
<template>

<div>
  <div class="row-title">
    <span>示例：日程组件</span>
    <el-button type="primary" link v-if="state.visible === false" @click="state.visible = true">显示</el-button>
    <el-button type="primary" link v-if="state.visible === true" @click="state.visible = false">隐藏</el-button>
  </div>
  <div v-if="state.visible" style="width:1200px;
    height:700px; text-align: center; margin: 0 auto;">

  <!-- <IkSchedule 
    ref="_ref"
    @edit-open="handleEditOpen" 
    @submit="handleSubmit" 
    v-model="events">
    <template #form>
      <el-form :model="formData">
        <el-form-item label="标题">
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="formData.content"></el-input>
        </el-form-item>
      </el-form>
    </template>
  </IkSchedule> -->
  <IkSchedule 
    ref="_ref"
    :removable="false"
    @submitAdd="handleAdd"
    @submitUpdate="handleUpdate"
    @submitDelete="handleDelete"
    v-model="events">
  </IkSchedule>
</div>
</div>

</template>
<style></style>