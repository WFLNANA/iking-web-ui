<!--
 * @Author       : wfl
 * @LastEditors  : wfl
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2023-07-25 17:20:55
 * @LastEditTime : 2023-11-01 20:25:06
-->
<template>
  <div class="demo-app">
    <div class="demo-app-main">
      <FullCalendar class="demo-app-calendar" :options="state.calendarOptions">
        <template v-slot:eventContent="arg">
          <div class="title-line">
            <span class="title" :title="arg.event.title" @click.stop="handleEventClick(arg,'edit')">{{
              arg.event.title
            }}</span>
            <el-icon :size="16" @click.stop="handleDelete(arg)"
              ><DeleteFilled
            /></el-icon>
          </div>
        </template>
      </FullCalendar>
    </div>
    <!-- 新建日程 -->
    <el-dialog
      v-model="state.dialogVisible"
      :title="state.title"
      width="30%"
      ref="formRef"
      @close="handleClose"
    >
      <el-form :model="state.form">
        <el-form-item>
          <el-icon class="icon"><Calendar /></el-icon>
          <el-input
            v-model="state.form.title"
            :placeholder="`添加${state.form.type == 1 ? '会议' : '活动'}标题`"
            style="width: 70%"
            clearable
          ></el-input>
          <el-select v-model="state.form.type" style="width: 20%">
            <el-option label="会议" :value="1" />
            <el-option label="活动" :value="2" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-icon class="icon"><Clock /></el-icon>
          <div v-if="state.timeType == 'month'" style="width: 90%;">
            <el-date-picker
              v-model="state.form.startDate"
              type="date"
              placeholder="开始日期"
              style="width: 48%"
            />
            <span class="to">至</span>

            <el-date-picker
              v-model="state.form.endDate"
              type="date"
              placeholder="结束日期"
              style="width: 48%"
            />
          </div>
          <div v-if="state.timeType == 'week'" style="width: 90%">
            <el-date-picker
              v-model="state.form.startDate"
              type="datetime"
              placeholder="开始日期"
              style="width: 48%"
              format="YYYY-MM-DD HH:mm"
            />
            <span class="to">至</span>

            <el-date-picker
              v-model="state.form.endDate"
              type="datetime"
              placeholder="结束日期"
              style="width: 48%"
              format="YYYY-MM-DD HH:mm"
            />
          </div>
          <div v-if="state.timeType == 'day'" style="width: 90%;display: flex;align-items: center;justify-content: space-between;">
            <el-date-picker
              v-model="state.form.startDate"
              type="date"
              placeholder="开始日期"
              :style="{width: state.allDay ? '45%': '90%'}"
              
            />
            <div v-if="!state.allDay" style="margin-left: 2%;">
              <el-time-picker
                v-model="state.form.startTime"
                type="datetime"
                placeholder="开始日期"
                style="width: 45%"
                format="HH:mm"
              />
              <span class="to" style=" width: 10% !important;">至</span>
  
              <el-time-picker
                v-model="state.form.endTime"
                type="datetime"
                placeholder="结束日期"
                style="width: 45%"
                format="HH:mm"
              />
            </div>
            <div v-else>
              <span class="to" style=" width: 10% !important;">至</span>
              <el-date-picker
              v-model="state.form.endDate"
              type="date"
              placeholder="结束日期"
              style="width: 90%;"
              
            />
            </div>
            <el-checkbox v-model="state.allDay" label="全天" style="margin-left: 2%;"/>
          </div>
        </el-form-item>
        <el-form-item>
          <el-icon class="icon"><User /></el-icon>
          <div class="personBlock" @click.stop="addPerson">
            <span v-if="!state.form.personList.length" class="placeholder"
              >添加参与人</span
            >
            <div
              v-else
              v-for="(item, index) of state.form.personList"
              :key="index"
              class="nameBlock"
            >
              <div class="info">
                <img
                  src="https://img1.baidu.com/it/u=1960110688,1786190632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281"
                  alt=""
                />
                <div>{{ item.elementName }}</div>
              </div>

              <el-icon class="close" @click.stop="deletePer(index)"
                ><Close
              /></el-icon>
            </div>
          </div>
        </el-form-item>
        <el-form-item>
          <el-icon class="icon"><Location /></el-icon>
          <el-input
            v-model="state.form.location"
            placeholder="添加地点"
            style="width: 90%"
            clearable
          ></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClose">取消</el-button>
          <el-button type="primary" @click="submit">确定</el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 选人组件 -->
    <IkingPickerUser
      v-model="state.handList"
      v-model:show="state.isShow"
      @ok="handSelected"
      :multiple="true"
      :type-option="{
        dep: 'DEPT',
        user: 'USER',
        role: 'ROLE',
        post: 'POST',
      }"
      :dep-list="state.depList"
      :user-list="state.userList"
      :prop-option="{
        name: 'elementName',
        id: 'elementId',
        type: 'elementType',
        avatar: 'avatar',
      }"
      :chooseType="['user']"
      @hand-child="handSetChild"
    ></IkingPickerUser>
  </div>
</template>
<script lang="ts">
export default {
  name: "IkApprovalProcess",
};
</script>
<script setup lang="ts">
import { reactive, nextTick } from "vue";
import { ikDate } from "iking-utils-pro";
import {IkingPickerUser} from "@iking-ui/components";
import {
  CalendarOptions,
  EventApi,
  EventClickArg,
} from "@fullcalendar/core";
import zh from "@fullcalendar/core/locales/zh-cn";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS } from "../event-utils";
import {
  Calendar,
  Clock,
  User,
  Location,
  Close,
  DeleteFilled,
} from "@element-plus/icons-vue";
import {
  ElDialog,
  ElForm,
  ElDatePicker,
  ElFormItem,
  ElInput,
  ElOption,
  ElSelect,
  ElButton,
  ElTimePicker,
  ElMessage,
  ElMessageBox,
  ElIcon,
} from "element-plus";

const props = defineProps({
  // 数据数组
  dataList: {
    type: Array,
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
const emit = defineEmits<{
  (e: "delete", row:any): void;
  (e: "success", response: any, ): void;
}>();
/**
 * @description: 新建日程
 * @param {*} selectInfo
 * @return {*}
 */
const handleDateSelect = (selectInfo: any) => {
  state.selectInfo = selectInfo;
  handData();
  if (selectInfo.view.type == "dayGridMonth") {
    let endD = selectInfo.end.getTime() - 24 * 60 * 60 * 1000;
    state.timeType = "month";
    state.form.startDate = ikDate.toYMD(selectInfo.start);
    state.form.endDate = ikDate.toYMD(new Date(endD));
  } else if (selectInfo.view.type == "timeGridWeek") {
    state.timeType = "week";
    state.form.startDate = ikDate.toYMDHM(selectInfo.start);
    state.form.endDate = ikDate.toYMDHM(selectInfo.end);
  } else if (selectInfo.view.type == "timeGridDay") {
    state.timeType = "day";
    state.form.startDate = ikDate.toYMD(selectInfo.start);
    state.form.endDate = ikDate.toYMD(selectInfo.start);

    state.form.startTime = ikDate.toDateTime(selectInfo.start);
    state.form.endTime = ikDate.toDateTime(selectInfo.end);
  }
  let calendarApi = selectInfo.view.calendar;
  calendarApi.unselect(); // clear date selection
  nextTick(() => {
    state.title ="新建日程";
    state.dialogVisible = true;
  });
};
/**
 * @description: 修改日程
 * @param {*} clickInfo
 * @param {*} flag
 * @return {*}
 */
const handleEventClick = (clickInfo: EventClickArg,flag:any) => {
  state.title ="修改日程";
  state.dialogVisible = true;
};


const handData = (id?: string) => {
  const param = {
    parentDepartmentId: id || "",
    name: "",
  };
  const url = `http://192.168.2.45:6002/component/pick/mix`;
  fetch(url, {
    method: "POST",
    body: JSON.stringify(param),
    headers: {
      Authorization: "Bearer iking",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      res.json().then((data1) => {
        const { success, data } = data1;
        if (!success) return;
        const { departments, users, roles, posts } = data;
        state.depList = departments;
        state.userList = users;
        state.roleList = roles;
        state.postList = posts;
      });
    })
    .catch((error) => {
      console.info("error: ", error);
    });
};
const handleEvents = (events: EventApi[]) => {
  state.currentEvents = events;
};

const state = reactive({
  allDay:false,
  dialogVisible: false,
  form: {
    title: "",
    type: 1,
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    personList: [],
    location: "",
  },
  formRef: null,
  title: "新建日程",
  timeType: "month",
  handList: [],
  isShow: false,
  depList: [],
  userList: [],
  roleList: [],
  postList: [],
  selectInfo: {},
  calendarOptions: {
    locale: zh,
    plugins: [
      dayGridPlugin,
      timeGridPlugin,
      interactionPlugin, // needed for dateClick
    ],
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    firstDay: 1, // 设置一周中显示的第一天是哪天，周日是0，周一是1，类
    initialView: "dayGridMonth",  // 默认为那个视图（月：dayGridMonth，周：timeGridWeek，日：timeGridDay）
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    weekends: true,
    // height: 'auto',
    select: handleDateSelect,
    eventClick: (e)=>handleEventClick(e,'add'),
    eventsSet: handleEvents,
  } as CalendarOptions,
  currentEvents: [] as EventApi[],
  
});

const handleClose = () => {
  state.formRef?.resetFields();
  state.form = {
    title: "",
    type: 1,
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    personList: [],
    location: "",
  };
  state.dialogVisible = false;
};
// 提交表单
const submit = async() => {
  let calendarApi = state.selectInfo?.view?.calendar;
  let param = {
    id:new Date().getTime(),
    title: state.form.title,
    start: state.selectInfo?.startStr,
    end: state.selectInfo?.endStr,
    allDay: state.allDay,
  }
 await calendarApi.addEvent(param);
  emit('success',param)
  handleClose();
};
/**
 * @description: 删除
 * @param {*} clickInfo
 * @return {*}
 */
 const handleDelete = (clickInfo: EventClickArg) => {
  ElMessageBox.confirm(`你确定删除事件'${clickInfo.event.title}'?`, "Warning", {
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    type: "warning",
  }).then(() => {
    ElMessage({
      type: "success",
      message: "删除成功",
    });
    clickInfo.event.remove();
    emit('delete',clickInfo.event)
  });
};
/**
 * @description: 确定选中的人
 * @param {*} val
 * @return {*}
 */
const handSelected = (val: any) => {
  state.handList = val.list;
  state.form.personList = val.list;
};

const addPerson = () => {
  state.isShow = true;
};

const handSetChild = (item: any) => {
  handData(item?.elementId);
};

const deletePer = (index: any) => {
  state.form.personList.splice(index, 1);
  state.handList = state.form.personList;
};

</script>
<style lang="less" scoped>
@import url("./index.less");

</style>