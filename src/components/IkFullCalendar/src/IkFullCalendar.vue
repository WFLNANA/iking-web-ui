<!--
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-08-10 19:15:03
 * @LastEditTime: 2023-12-07 10:42:08
-->
<!--
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-08-10 19:15:03
 * @LastEditTime: 2023-08-14 12:20:04
-->
<script lang="ts">
export default {
  name: "IkFullCalendar",
};
</script>
<script setup lang="ts">
import {reactive, ref, onMounted, computed, watch} from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import zh from "@fullcalendar/core/locales/zh-cn";
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalendar/interaction'
import { Event } from './ik-full-calendar';
import { ikDate  } from "iking-utils-pro"

import {
  DeleteFilled,
} from "@element-plus/icons-vue";

interface IProps {
  options?: any;
  removable?: boolean;
  // 绑定日程数组
  modelValue?: Event[] | any;
  // 描述
  tooltipFieldName?: string,
}

const props = withDefaults(defineProps<IProps>(), {
  // 属性，具体查看 https://fullcalendar.io/
  options: {},
  // 可删除的
  removable: true,
  // 绑定日程数组
  modelValue: [],
  // 
  tooltipFieldName: 'remark'
}) 

const model = computed({
  get: () => {
    return props.modelValue
  },
  set: (events: any[]) => {
    return emit('update:modelValue', events)
  }
});

const emit = defineEmits(['added', 'deleted', 'update:modelValue', 'eventClick', 'deleteClick', 'dateSelect'])
const _ref = ref<any>(null)
const handleDateClick = (arg: any) => {
}


const currentView = ref<string>('dayGridMonth');


/** 日程相关 start */

/**
 * 新建日程
 * @param arg 
 */
 const handleDateSelect = (selectInfo: any) => {
    emit('dateSelect', selectInfo);
}

/**
 * @description: 修改日程
 * @param {*} clickInfo
 * @param {*} flag
 * @return {*}
 */
 const handleEventClick = (clickInfo: any) => {
  emit('eventClick', clickInfo);
};

/** 新建、编辑日程相关方法 */

/** 删除日程操作 */
const handleDeleteClick = (clickInfo: any) => {
  emit('deleteClick', clickInfo);
}
/** 日程相关 end */

/** 日历相关 start */
const createDefaultOptions = () => ({
    locale: zh,
   
    plugins: [ dayGridPlugin, interactionPlugin,timeGridPlugin ],
   
    headerToolbar: {
      left: "dayGridMonth,timeGridWeek,timeGridDay prev,today,next",
      center: "title",
      right: "",
    },
    firstDay: 1, // 设置一周中显示的第一天是哪天，周日是0，周一是1，类
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
     dateClick: handleDateClick,
     select: handleDateSelect,
     ...props.options,
     events: model.value,
})

const state = reactive({
  timeType: 'month',
  options: createDefaultOptions(),
})
const api = ref<any>(null)

/** 日历相关 end */
const rerender = () => {
  state.options =  createDefaultOptions();
  _ref.value?.buildOptions(state.options);
}

/** 导出 api 方法 */
const apiMethods = {
  // 
  prev: () => {
    api.value?.prev();
  },
  next: () => {
    api.value?.next();
  },
  today: () => {
    api.value?.today();
  },
  changeView: (viewName: string) => {
    api.value?.changeView(viewName);
    currentView.value = viewName;
  }, 
  getDate: () => api.value?.getDate(),
  getView: () => api.value?.view,
  unselect: () => api.value?.unselect()
}

defineExpose({
  ...apiMethods,
});


watch(() => model.value, () => {
  rerender();
}) 


const initApi = () => {
  api.value = _ref.value?.getApi();
}

// 默认选项
onMounted(() => {
  initApi();
})


</script>
<template>
  <div class="ik-full-calendar">
    <FullCalendar  ref="_ref" :options="state.options" :style="{height: '100%'}">
      <template v-slot:eventContent="arg">

          <div class="title-line"  @click="handleEventClick(arg)">
            <el-tooltip>
              <template #content>
                <!-- {{arg}} -->
                {{arg.event?.extendedProps?.[props.tooltipFieldName]}}
              </template>
              <span v-if="arg.event.allDay" class="event-title allday">
                <span v-if="currentView === 'dayGridMonth'" class="event-title-time">
                  {{'(全天)' }}
                </span>
                <span> {{arg.event.title}}</span>
             </span>
            <span v-else class="event-title no-allday">
              <span class="event-title-time">
                {{ikDate.toDateTime(arg.event.startStr, 'HH:mm') }}
              </span>
              <span class="event-title-text">{{arg.event.title}}</span>
            </span>
            </el-tooltip>
            <el-icon v-if="props.removable" :size="16" @click.stop="handleDeleteClick(arg)"
              ><DeleteFilled
            /></el-icon>
          </div>
        </template>
    </FullCalendar>
  </div>
</template>
<style lang="less" scoped>
@import url(../style/index.less);
.ik-full-calendar{
  width: 100%;
  height: 100%;
}

.event-title{
  display: flex;
  align-items: center;
  color: var(--ik-text-color)
}

:deep(.fc .fc-timeGridWeek-view .fc-v-event .event-title){
  color: var(--el-color-white)
}
:deep(.fc .fc-timeGridDay-view .fc-v-event .event-title){
  color: var(--el-color-white)
}

.event-title::before{
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 5px;
}
.allday::before{
  background-color: var(--ik-success);
}
.no-allday::before{
  background-color: var(--ik-error);
}
.event-title-time{
  color: var(--ik-vice-text-color)
}
:deep(.fc .fc-timeGridWeek-view .fc-v-event .event-title .event-title-time){
  color: var(--el-color-info-light-8)
}
:deep(.fc .fc-timeGridDay-view .fc-v-event .event-title .event-title-time){
  color: var(--el-color-info-light-8)
}

.event-title-text{
  margin-left: 4px;
}
</style>