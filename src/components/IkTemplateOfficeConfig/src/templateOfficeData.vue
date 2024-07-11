<!--
 * @Author: zdl
 * @LastEditors: zdl
 * @description: 
 * @updateInfo: 内容:自定义数据块
 * @Date: 2024-01-05 09:44:02
 * @LastEditTime: 2024-01-05 18:03:05
-->
<script lang="ts" setup>
import { ref, watch } from "vue";
const props = defineProps({
  // 详情数据
  data: {
    type: Array,
    default: () => [],
  },
  // 标题是否能编辑，删除
  isShowTitleOperate: {
    type: Boolean,
    default: false,
  },
  //内容是否能编辑和删除
  isShowContentOperate: {
    type: Boolean,
    default: false,
  },
  // 映射的属性
  defaultProps: {
    type: Object,
    default: () => {},
  },
});

const emits = defineEmits<{
  (event: "handleTitleEdit", val: any): void;
  (event: "handleTitleDel", val: any): void;
  (event: "handleGetTitleData", val: any): void;
  (event: "handleDataBlockEdit", val: any): void;
  (event: "handleDataBlockDel", val: any): void;
  (event: "handleChooseDataBlock", parent: any, children: any): void;
  (event: "handleDifferentTypeDataBlock", data: any, type: any): void;
}>();

/* -------------------------------------------------------------------------- */
/*                                    标题分类的操作                                   */
/* -------------------------------------------------------------------------- */
// 编辑
const handleSortEdit = (item: any) => {
  emits("handleTitleEdit", item);
};
//删除
const handleSortDel = (item: any) => {
  emits("handleTitleDel", item);
};

// 点击选中标题
const handleTitleData = (item: any) => {
  emits("handleGetTitleData", item);
};

/* -------------------------------------------------------------------------- */
/*                                   标题下的内容                                   */
/* -------------------------------------------------------------------------- */
//编辑
const handleEditDataBlock = (item: any) => {
  emits("handleDataBlockEdit", item);
};
// 删除
const handleDelDataBlock = (item: any) => {
  emits("handleDataBlockDel", item);
};
//点击选中数据块
const handleChoose = (parentData: any, childrenData: any) => {
  for (const item of dataList.value)
    item.children.forEach((i: any) => (i.isChoose = false));
  childrenData.isChoose = true;
  emits("handleChooseDataBlock", parentData, childrenData);
};

/* -------------------------------------------------------------------------- */
/*                              当数据块的内容分为表格和列表时候                              */
/* -------------------------------------------------------------------------- */
//  表格
const handleDataBlock = (item: any, type: any) => {
  emits("handleDifferentTypeDataBlock", item, type);
};

/* -------------------------------------------------------------------------- */
/*                                   属性字段的转化                                  */
/* -------------------------------------------------------------------------- */
const handleTransformProps = (list: any) => {
  let arr = list.map((item: any) => {
    return {
      name: item[props.defaultProps.name],
      children: item[props.defaultProps.children].map((child:any)=>{
        return{
          childName:child[props.defaultProps.childName],
          childId:child[props.defaultProps.childId]
        }
      }),
    };
  });
  dataList.value = arr;
};

// 数据块列表
const dataList = ref<any>(props.data);
watch(
  () => props.data,
  (val: any) => {
    handleTransformProps(val);
  },
  { immediate: true }
);

// 禁用掉鼠标的右键功能，替换成编辑和删除
document.addEventListener('contextmenu', event => {
  if (props.isShowTitleOperate)
    event.preventDefault()
})

</script>
<template>
  <div class="template-data">
    <div v-for="(item, index) of dataList" :key="index" class="mt-4">
      <el-popover
        v-if="isShowTitleOperate"
        popper-class="sort-popper"
        placement="right"
        width="60"
        trigger="contextmenu"
      >
        <!-- 能编辑删除的标题 -->
        <div class="operate-btn">
          <p class="point" style="margin:0;" @click="handleSortEdit(item)">编辑</p>
          <p style="color: var(--ik-error);margin:0" class="point" @click="handleSortDel(item)">
            删除
          </p>
        </div>
        <template #reference>
          <span class=" m-12 point">{{ item.name }}</span>
        </template>
      </el-popover>
      <!-- 不能操作的标题 -->
      <div v-else class="flex">
        <p class="mb-2 point" @click="handleTitleData(item)">
          {{ item.name }}
        </p>
        <el-popover
          v-if="item.resultType === 'LIST'"
          placement="right"
          :width="210"
          trigger="hover"
        >
          <template #reference>
            <i class="icon-icon_particulars iconfont tips"></i>
          </template>
          <p>鼠标右键选择操作的数据类型</p>
        </el-popover>
      </div>
      <!-- 标题下的内容 -->
      <div class="flex data-block">
        <div v-for="(i, index) of item.children" :key="index" style="flex-grow: 1">
          <el-popover
            v-if="props.isShowContentOperate && item.resultType === 'LIST'"
            popper-class="operate-popper"
            placement="bottom-end"
            width="60"
            trigger="contextmenu"
          >
            <div class="operate-btn">
              <p class="point" style="margin:0;" @click="handleDataBlock(i, 'TABLE')">表格</p>
              <p class="point" style="margin:0;" @click="handleDataBlock(i, 'LIST')">列表</p>
            </div>
            <template #reference>
              <p
                :class="{ 'choose-item': i.isChoose }"
                class="item-block"
                title="鼠标右键选择操作的数据类型"
              >
                {{ i.chileName }}
              </p>
            </template>
          </el-popover>
          <el-popover
            v-if="props.isShowContentOperate"
            popper-class="operate-popper"
            placement="bottom-end"
            width="60"
            trigger="contextmenu"
          >
            <div class="operate-btn">
              <p class="point" style="margin:0;" @click="handleEditDataBlock(i)">编辑</p>
              <p
                style="color: var(--ik-error); cursor: pointer;margin:0;"
                @click="handleDelDataBlock(i)"
              >
                删除
              </p>
            </div>
            <template #reference>
              <p
                :class="{ 'choose-item': i.isChoose }"
                class="item-block"
                @click="handleChoose(item, i)"
              >
                {{ i.childName }}
              </p>
            </template>
          </el-popover>
          <p
            v-else
            :class="{ 'choose-item': i.isChoose }"
            class="item-block"
            @click="handleChoose(item, i)"
          >
            {{ i.childName }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.template-data {
  .point {
    cursor: pointer;
  }
  .flex {
    display: flex;
  }
  .data-block {
    flex-wrap: wrap;
  }
  .item-block {
    min-width: 160px;
    border: 1px solid var(--ik-sub-sidebar-menu-active-bg);
    background: var(--ik-sub-sidebar-menu-active-bg);
    text-align: center;
    padding: 6px 0;
    margin: 6px;

    &:hover {
      border: 1px solid var(--ik-sub-sidebar-menu-active-color);
      color: var(--ik-sub-sidebar-menu-active-color);
      cursor: pointer;
    }
  }

  .choose-item {
    border: 1px solid var(--ik-sub-sidebar-menu-active-color);
    color: var(--ik-sub-sidebar-menu-active-color);
    cursor: pointer;
  }

  .tips {
    color: #909399;
    margin-top: 4px;
    margin-left: 10px;
  }
  .m-12{
    margin: 12px 0;
    display: inline-block;
  }
}

.operate-popper {
  .operate-btn {
    cursor: pointer !important;
    text-align: center !important;
    p {
      &:hover {
        color: var(--ik-sub-sidebar-menu-active-color);
      }
    }
  }
}
</style>
