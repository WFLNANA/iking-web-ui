<!--
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-08-14 10:25:56
 * @LastEditTime: 2023-12-07 10:47:18
-->
<script lang="ts">
export default {
  name: "IkSchedule",
};
</script>
<script setup lang="ts">
import {computed, reactive, ref, onMounted, nextTick, useSlots } from 'vue';
import  { IkFullCalendar, Event } from '../../IkFullCalendar';
import {ArrowLeft, ArrowRight, Document} from '@element-plus/icons-vue';
import {ElMessage, ElMessageBox} from 'element-plus';
import {ObjectUtils} from '@iking-ui/utils';
import { ikDate  } from "iking-utils-pro"
import IkSvgIcon from '../../IkSvgIcon'
import {
  Calendar,
  Clock,
} from "@element-plus/icons-vue";



interface IProps {
  modelValue: Event[] | any;
  options: any;
  editVisible?: boolean;
  removable?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: [],
  options: {
    initialView: 'dayGridMonth'
  },
  removable: true
});

const emit = defineEmits([
  'update:modelValue', 
  'added',
  'updated',
  'deleted', 
  // 新增、编辑对话框打开
  'editOpen',
  // 新增、编辑提交
  'submit',
  // 新增、编辑对话框
  'update:editVisible',

  // 新增
  'submitAdd',
  // 修改
  'submitUpdate',
  // 删除
  'submitDelete'
]);

// 存在 form slot
const slotForm = !!useSlots().form;

const model = computed({
  get: () => {
    return props.modelValue;
  },
  set: (value: Event[]) =>{
    emit('update:modelValue', value);
  }
});

const realOptions = computed(() => {
  return {
    ...props.options,
    headerToolbar: false,
  }
});

const state = reactive({
  currentView: props.options?.initialView,
  viewTitle: '',
  rightLabel: '今日',

  timeType: 'month',
  currentDate: null,
});


/** 头部相关操作 start */
const _refCalendar = ref<any>(null);
const changeView= (viewName: string) => {
  _refCalendar.value?.changeView(viewName);
  state.currentView = viewName;
  refreshViewTitle();
  
}
const refreshViewTitle = () => {
  const view = _refCalendar.value?.getView();
  state.viewTitle = view?.title;
}
const datePrev = () => {
  _refCalendar.value?.prev();
  refreshViewTitle();
  
}
const dateNext = () => {
  _refCalendar.value?.next();
  refreshViewTitle();
}
const dateToday = () => {
  _refCalendar.value?.today();
  refreshViewTitle();
}
const isCurrentView = (viewName: string) => state.currentView === viewName;
/** 头部相关操作 end */

/** 日程相关操作 start */
const _editFormRef = ref<any>(null);

const editMethods = {

createDefaultForm: () => ({
  title: "",
  allDay: false,
  type: 1,
  startDate: "",
  endDate: "",
  startTime: "",
  endTime: "",
  location: "",
  remark: "",
}),
close: () => {
  editVisibleModel.value = false;
},

customSubmit: (event: {
  title: string;
  // allDay: boolean;
}) => {
    let param = {
      ...event,
      id: undefined,
      allDay: editState.form.allDay,
      start: editState.selectInfo?.startStr,
      end: editState.selectInfo?.endStr,
    }
    editMethods.operation(param);
    editMethods.close();
  },
operation: (param: Event) => {
  if(editState.operation === 'add'){
    emit('submitAdd', param);
  }else{
    // 修改
    param.id = editState.editEvent?.id;
    emit('submitUpdate', param);
  }
},
submit: async() => {
  if(slotForm){
    emit('submit');
    return;
  }

  if(!editState.form.title){
    ElMessage.info('标题不能为空');
    return;
  }
  if(!editState.form.allDay){
    if(!editState.form.startTime || !editState.form.endTime){
      ElMessage.info('时间不能为空');
      return;
    }
  }


  let param: Event = {
    id: undefined,
    title: editState.form.title,
    allDay: editState.form.allDay,
    start: editState.selectInfo?.startStr,
    end:  editState.selectInfo?.endStr,
    extendedProps: {
      ...editState.form
    }
   
  }
  // 设置开始~结束时间
  if(param.allDay){
    param.start = ikDate.toDate(editState.form.startDate);
    param.end =  ikDate.toDate(editState.form.endDate);
  }else{
    // 因为时间选择器默认的日期是当前日期，不是选中的日期，所以需要将进行纠偏处理
    const date = ikDate.toDate(editState.form.startDate);
    const startTime =  ikDate.toDateTime(editState.form.startTime).substring(10)
    const endTime = ikDate.toDateTime(editState.form.endTime).substring(10)

    param.start = `${date}${startTime}`
    param.end = `${date}${endTime}`
    param.extendedProps.startTime = param.start;
    param.extendedProps.endTime = param.end;
  }
  editMethods.operation(param);
  editMethods.close();
},
reset: () => {
  editState.form = editMethods.createDefaultForm();
  _editFormRef.value?.clearValidate();
},

edit: () => {
  editState.editable = true;
  editState.title="编辑日程"
},
cancelEdit: () => {
  editState.editable = false;
  editState.title="日程信息"
},
del: () => {
  delSchedule(editState.clickInfo)
}
}



const editState = reactive({
    operation: <'add' | 'update'> 'update',
    selectInfo: <any>{},
    
    editEvent: <Event | undefined> undefined,
    title: '',
    visible: false,
    allDay: false,
    form: editMethods.createDefaultForm(),
    // 可编辑状态
    editable: false,
    //
    clickInfo: null,
    
    
  })

  const editVisibleModel = computed({
    get: (): boolean => {
      return editState.visible;
    },
    set: (value: boolean) => {
      editState.visible = value;
    }
  });

  /**
 * 新建日程
 * @param arg 
 */
 const addSchedule = (selectInfo: any) => {
  editState.form.allDay = selectInfo.allDay;
  editState.selectInfo = selectInfo;
  editMethods.reset();
  if (selectInfo.view.type == "dayGridMonth") {
    let endD = selectInfo.end.getTime() - 24 * 60 * 60 * 1000;
    state.timeType = "month";
    editState.form.startDate = ikDate.toYMD(selectInfo.start);
    editState.form.endDate = ikDate.toYMD(new Date(endD) as any);
    editState.form.allDay = true;
  } else{
    if(selectInfo.view.type == "timeGridWeek"){
      state.timeType = "week";
    }else if(selectInfo.view.type == "timeGridDay"){
      state.timeType = "day";
    }
    editState.form.startDate = ikDate.toYMD(selectInfo.start);
    editState.form.endDate = ikDate.toYMD(selectInfo.start);
    editState.form.startTime = ikDate.toDateTime(selectInfo.start);
    editState.form.endTime = ikDate.toDateTime(selectInfo.end);
  }
  _refCalendar.value?.unselect();
  nextTick(() => {
    editState.title ="新建日程";
    editState.operation = 'add';
    editState.editable = true;
    editVisibleModel.value = true;
    emit('editOpen', JSON.parse(JSON.stringify(editState)));
  });
}

/**
 * @description: 修改日程
 * @param {*} clickInfo
 * @param {*} flag
 * @return {*}
 */
 const editSchedule = (clickInfo: any) => {
  // debugger
  editState.title ="日程信息";
  editState.operation = 'update';
  editState.clickInfo = clickInfo;
  editState.editEvent = <Event>clickInfo.event;
  debugger
  if(editState.editEvent.allDay){
    editState.form.startDate =  (editState.editEvent as any).startStr;
    editState.form.endDate =  (editState.editEvent as any).startStr;
  }else{
    editState.form.startDate = (editState.editEvent as any).startStr;
    editState.form.startTime =  editState.editEvent.start;
    editState.form.endTime =  editState.editEvent.end;
  }
  editState.form.title =  editState.editEvent.title;
  editState.form.allDay = editState.editEvent.allDay;

  ObjectUtils.copyValue( editState.form,  editState.editEvent.extendedProps);

  editMethods.cancelEdit()
  editVisibleModel.value = true;
  emit('editOpen', JSON.parse(JSON.stringify(editState)));
};

/** 删除日程操作 */
const delSchedule = (clickInfo: any) => {
  ElMessageBox.confirm(`你确定删除事件 ${clickInfo.event.title} ?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    // ElMessage({
    //   type: "success",
    //   message: "删除成功",
    // });
    editMethods.close();
    emit('submitDelete', clickInfo.event.id);
  });
}
/** 日程相关操作 end */

defineExpose({
  customSubmit: (param: {
  title: string;
  allDay: boolean;
}) => editMethods.customSubmit(param)
});

onMounted(() => {
  refreshViewTitle();
});

</script>
<template>
  <div class="ik-schedule">
    <div class="ik-schedule__left">
      <div class="ik-schedule__header">
      <el-space style="flex-shrink: 0;" :size="24" >
        <el-button-group>
        <el-button @click="changeView('dayGridMonth')" :type="isCurrentView('dayGridMonth') ? 'primary' : ''">月</el-button>
        <el-button @click="changeView('timeGridWeek')" :type="isCurrentView('timeGridWeek') ? 'primary' : ''">周</el-button>
        <el-button @click="changeView('timeGridDay')" :type="isCurrentView('timeGridDay') ? 'primary' : ''">日</el-button>
      </el-button-group>
      <span class="ik-schedule__title">{{state.viewTitle}}</span>
      <el-button-group  style="flex-shrink: 0;">
        <el-button @click="datePrev"><el-icon><ArrowLeft /></el-icon></el-button>
        <el-button @click="dateToday">今天</el-button>
        <el-button @click="dateNext"><el-icon><ArrowRight /></el-icon></el-button>
      </el-button-group>
      </el-space>

      <div class="ik-schedule__header-right">
       
      </div>
     
    </div>
    <div class="ik-schedule__body">
      <IkFullCalendar :removable="removable"  @date-select="addSchedule" @delete-click="delSchedule" @event-click="editSchedule" ref="_refCalendar" :options="realOptions" v-model="model"></IkFullCalendar>
    </div>
    </div>

    <!-- 新建/修改对话框 -->
     <el-dialog width="700px" v-model="editVisibleModel">
      <template #header>
        <div>
          <span style="font-size: 18px">{{editState.title}}</span>
          <span v-if="editState.operation === 'update'">
            <IkSvgIcon v-if="!editState.editable" style="margin-left: 4px" name="iksvg_xiugai" @click="editMethods.edit"></IkSvgIcon>
            <IkSvgIcon v-else style="margin-left: 4px" name="iksvg_qiehuan-daohang" @click="editMethods.cancelEdit"></IkSvgIcon>
          </span>
        </div>
        
      </template>
      <slot name="form">
         <el-form ref="_editFormRef" :model="editState.form" :disabled="!editState.editable">
        <el-form-item>
          <el-icon class="icon"><Calendar /></el-icon>
          <el-input
            v-model="editState.form.title"
            placeholder="请输入标题"
            style="width: 90%;"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-icon class="icon"><Clock /></el-icon>
          <div style="width: 90%;display: flex;align-items: center;justify-content: space-between;">
            <el-date-picker
              disabled
              v-model="editState.form.startDate"
              type="date"
              placeholder="开始日期"
              :style="{width: editState.form.allDay ? '45%': '90%'}"
              
            />
            <div v-if="!editState.form.allDay" style="margin-left: 2%;">
              <el-time-picker
                v-model="editState.form.startTime"
                type="datetime"
                placeholder="开始时间"
                style="width: 45%"
                format="HH:mm"
              />
              <span class="to" style=" width: 10% !important;">至</span>
              <el-time-picker
                v-model="editState.form.endTime"
                type="datetime"
                placeholder="结束时间"
                style="width: 45%"
                format="HH:mm"
              />
            </div>
            <div v-else>
              <span class="to" style=" width: 10% !important;">至</span>
              <el-date-picker
              disabled
              v-model="editState.form.endDate"
              type="date"
              placeholder="结束日期"
              style="width: 90%;"
              
            />
            </div>
            <el-checkbox v-model="editState.form.allDay" label="全天" style="margin-left: 2%;"/>
          </div>
        </el-form-item>
        <el-form-item>
          <el-icon class="icon"><Document /></el-icon>
          <el-input
            type="textarea"
            v-model="editState.form.remark"
            placeholder="描述"
            style="width: 90%"
            clearable
          ></el-input>
        </el-form-item>
      </el-form>
      </slot>
      <template #footer>
        <span class="dialog-footer">
          <slot name="form-footer">
            <span>
              <el-button @click="editMethods.close">取消</el-button>
              <el-button @click="editMethods.del">删除</el-button>
              <el-button type="primary" @click="editMethods.submit">确定</el-button>
            </span>
          </slot>
        </span>
      </template>
    </el-dialog>
  </div>

</template>
<style lang="less" scoped>

.ik-schedule { 
  width: 100%;
  height: 100%;
  display: flex;

}
.ik-schedule__left{
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
}
.ik-schedule__header{
  flex-shrink: 0;
  flex-grow: 0;
  text-align: left;
  display: flex;
}

.ik-schedule__title{
  font-family: 'Arial-BoldMT', 'Arial Bold', 'Arial', sans-serif;
    font-weight: 700;
    /* font-size: 16px; */

    flex-shrink: 0;
}

.ik-schedule__body{
  flex-grow: 1;
  margin-top: 16px;
  height: calc(100% - 56px);
}
.ik-schedule__header-right{
  display: flex;
  justify-content: space-between;

  flex-grow: 1;
}

.ik-schedule__header-right-item{
  border-left: 4px solid;
  line-height: 32px;
}

.ik-schedule__right-title{
  text-align: left;
  line-height: 32px;
}
</style>  