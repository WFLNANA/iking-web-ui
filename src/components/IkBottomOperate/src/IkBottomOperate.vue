<!--
 * @Author: zdl
 * @LastEditors: zdl
 * @description: 
 * @updateInfo: 内容:底部操作栏，下一条，上一条
 * @Date: 2024-01-02 12:13:17
 * @LastEditTime: 2024-01-02 17:38:59
-->
<script lang="ts" setup name="bottomOperate">
import { inject, ref, watch } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
const props = defineProps({
  // 是否显示上一条下一条按钮
  lastShow: {
    type: Boolean,
    default: true,
  },
  // 是否显示右侧按钮组
  buttonShow: {
    type: Boolean,
    default: true,
  },
  // 是否输入框显示
  inputShow: {
    type: Boolean,
    default: true,
  },
  // 表格数据全部id合集
  ids: {
    type: Array,
    default: () => [],
  },
  // 当前数据id
  rowId: {
    type: String,
    default: "",
  },
});
const emits = defineEmits<{
  (event: "cancel"): void;
  (event: "update:visible", value: boolean): void;
  (event: "confirm", obj: any): void;
  (event: "repulse", obj: any): void;
  (event: "prevChange", obj: any): void;
  (event: "nextChange", obj: any): void;
}>();

// 使用页面注入的方法和参数
const searchData: any = inject("searchData"); // 搜索条件
const search: any = inject("search"); // 搜索方法
const countTotal: any = inject("countTotal"); // 表格的总数

// 加载
const loading = ref(false);

// 取消
const handCancel = () => {
  statement.value = "";
  emits("update:visible", false);
  emits("cancel");
};

// 同意
const handConfirm = async () => {
  emits("confirm", statement.value);
  statement.value = "";
};
// 驳回的评论
const statement = ref("");
// 打回
const handRepulse = async () => {
  if (statement.value === "" && props.inputShow) {
    ElMessage.warning("请输入意见说明");
    return;
  }
  emits("repulse", statement.value);
  statement.value = "";
};
// 上一条
const prev = () => {
  handleChangePage("prev");
};
// 下一条
const next = () => {
  handleChangePage("next");
};

// ---------------------------------------------------------------- 上一页   /   下一页 功能 ----------------------------------------------------------------
// 表格数据集合
const tableDataIds = ref<any>(props.ids);
// 总页数
const totalPageCount = ref(1);

const handleChangePage = (type: string) => {
  if (type === "next") handleNext();
  else handlePrev();
};

// 下一页
const nextDisabled = ref(false); // 下一页的禁用
const handleNext = async () => {
  preDisabled.value = false;
  if (searchData?.value)
    totalPageCount.value = Math.ceil(countTotal?.value / searchData.value?.rows);
  const arr = props.ids;
  const currentIndex = arr?.findIndex((item) => item === props.rowId);
  if (currentIndex === arr.length - 1) {
    if (searchData?.value) {
      if (totalPageCount.value === searchData.value?.page) {
        ElMessage.warning("已经是最后一条数据");
        nextDisabled.value = true;
        return;
      }
      searchData.value.page++;
      await search();
      if (arr.length) {
        emits("nextChange", {
          targetItem: arr[0],
          targetIndex: 0,
        });
      }
    }
    ElMessage.warning("已经是最后一条数据");
    nextDisabled.value = true;
    return;
  }
  const targetIndex = currentIndex + 1;
  emits("nextChange", {
    targetItem: arr[targetIndex],
    targetIndex,
  });
};

// 上一页
const preDisabled = ref(false); // 上一页的禁用
const handlePrev = async () => {
  nextDisabled.value = false;
  const arr = props.ids;
  const currentIndex = arr?.findIndex((item) => item === props.rowId);
  if (currentIndex < 1) {
    // 上一页
    if (searchData?.value) {
      if (searchData.value.page > 1) {
        searchData.value.page--;
        await search();
        if (arr.length) {
          emits("nextChange", {
            targetItem: arr[arr.length - 1],
            targetIndex: arr.length - 1,
          });
        }
        return;
      }
    }
    ElMessage.warning("已经是第一条数据");
    preDisabled.value = true;
    return;
  }
  emits("prevChange", {
    targetItem: arr[currentIndex - 1],
    targetIndex: currentIndex - 1,
  });
};

defineExpose({ handleNext });

watch(
  () => props.ids,
  (val: any) => {
    if (val) {
      preDisabled.value = false;
      nextDisabled.value = false;
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="bottom">
    <div v-if="props.lastShow" class="bottom-left">
      <el-button :disabled="preDisabled" @click="prev">上一条</el-button>
      <el-button :disabled="nextDisabled" @click="next" style="margin-right: 24px"
        >下一条</el-button
      >
    </div>
    <el-input
      v-if="props.inputShow"
      v-model="statement"
      maxlength="50"
      placeholder="请输入意见说明"
      show-word-limit
      class="input-prepend"
    >
      <template #prepend>意见说明</template>
    </el-input>
    <div v-if="props.buttonShow" class="bottom-right">
      <slot v-if="$slots.bottomRight" name="bottomRight"></slot>
      <template v-else>
        <el-button @click="handCancel" style="margin-left: 24px">取消</el-button>
        <el-button v-loading="loading" type="primary" @click="handConfirm"
          >确认</el-button
        >
        <el-button type="danger" @click="handRepulse">打回</el-button>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bottom {
  width: 100%;
  border-top: 1px solid var(--ik-color-bg-icon);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  .el-button {
    height: 40px;
    font-weight: 400;
    font-size: 14px;
  }
  .bottom-left {
    .el-button {
      width: 98px;

      font-weight: 400;
      font-size: 14px;
    }
  }

  .bottom-right {
    .el-button {
      width: 84px;
    }
  }

  .input-prepend {
    flex: 1;
    p {
      font-weight: bold;
      color: var(--el-text-color-regular);
    }
  }
}
</style>
