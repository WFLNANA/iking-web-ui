<!--
 * @Author: ln
 * @Description: 水平步骤条组件
 * @Date: 2023-07-27 14:38:02
 * @updateInfo: 
 * @LastEditors: ln
 * @LastEditTime: 2024-07-10 13:51:28
-->
<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from "vue";
import { ArrowRight, ArrowLeft } from "@element-plus/icons-vue";
const props = defineProps({
  spaceNum: {
    type: String,
    default: "58px",
  },
  // 当前激活的下标
  active: {
    type: Number,
    default: null,
  },
  // 当前激活颜色
  activeColor: {
    type: String,
    default: "",
  },
  // 步骤是否可点击
  needClick: {
    type: Boolean,
    default: true,
  },
  // 步骤数据
  list: {
    type: Array<any>,
    default: () => {
      return [];
    },
  },
  // 文本方向 居中
  alignCenter: {
    type: Boolean,
    default: false,
  },
  // 映射字段
  propsField: {
    type: Object,
    default: () => {
      return {
        title: "title",
        description: "description",
        value: "value",
      };
    },
  },
});
const emits = defineEmits<{
  (event: "click", value: any): void;
  (event: "update:active", value: any): void;
}>();
// 是否显示滚动
const showScroll = ref(false);
// 右侧按钮定时器
const rightTimer: any = ref();
// 左侧按钮定时器
const leftTimer: any = ref();
// 是否长时间店家
const longTouch = ref(false);
watch(
  () => props.active,
  (index: number) => {
    let dom: any = document.getElementById("stepItemContent");
    let childDom = document.getElementById(`stepItem${index}`);
    let childDom1 = document.getElementById(`stepItem0`);
    const distance =
      childDom && childDom1 ? childDom?.offsetLeft - childDom1?.offsetLeft : 0;
    dom &&
      childDom &&
      (dom.scrollLeft =
        distance > dom?.clientWidth ? distance - dom?.offsetLeft : 0);
  }
);
watch(
  () => props.list,
  () => {
    nextTick(() => {
      let dom: any = document.getElementById("stepItemContent");
      let isHasScroll = dom?.scrollWidth > dom?.clientWidth;
      showScroll.value = isHasScroll;
      window.addEventListener("resize", handleResize, true);
    });
    const handleResize = () => {
      let dom: any = document.getElementById("stepItemContent");
      let isHasScroll = dom?.scrollWidth > dom?.clientWidth;
      showScroll.value = isHasScroll;
    };
  },
  { deep: true }
);
onMounted(() => {
  nextTick(() => {
    let dom: any = document.getElementById("stepItemContent");
    let isHasScroll = dom?.scrollWidth > dom?.clientWidth;
    showScroll.value = isHasScroll;
    window.addEventListener("resize", handleResize, true);
  });
  const handleResize = () => {
    let dom: any = document.getElementById("stepItemContent");
    let isHasScroll = dom?.scrollWidth > dom?.clientWidth;
    showScroll.value = isHasScroll;
  };
});
/**
 * @description 点击步骤
 * @param index 当前点击步骤的索引
 */
const handleClickStep = (row: any, index: number) => {
  if (!props.needClick) return;
  emits("update:active", index);
  emits("click", row);
  let dom: any = document.getElementById("stepItemContent");
  let childDom = document.getElementById(`stepItem${index}`);
  let childDom1 = document.getElementById(`stepItem0`);
  const distance =
    childDom && childDom1 ? childDom?.offsetLeft - childDom1?.offsetLeft : 0;
  dom &&
    childDom &&
    (dom.scrollLeft =
      distance > dom?.clientWidth ? distance - dom?.offsetLeft : 0);
};
/**
 * @description 点击左侧的滚动按钮
 */
const handleScrollLeft = () => {
  let dom: any = document.getElementById("stepItemContent");
  dom && (dom.scrollLeft = dom.scrollLeft - 20);
};
/**
 * @description 点击右侧的滚动按钮
 */
const handleScrollRight = () => {
  let dom: any = document.getElementById("stepItemContent");
  dom && (dom.scrollLeft = dom.scrollLeft + 20);
};
/**
 * @description 长按左侧按钮滚动开始
 */
const longTouchLeftStart = () => {
  // 模拟长按
  clearInterval(leftTimer.value); // 再次清空定时器，防止重复注册定时器（会把点击事件也阻止掉）
  let dom: any = document.getElementById("stepItemContent");
  longTouch.value = false; // 关键
  leftTimer.value = setInterval(() => {
    longTouch.value = true; // 关键
    dom && (dom.scrollLeft = dom.scrollLeft - 20);
  }, 100);
};
/**
 * @description 长按左侧按钮滚动结束
 */
const longTouchLeftEnd = () => {
  clearInterval(leftTimer.value); // 清空定时器，防止重复注册定时器
  if (!longTouch.value) {
    //如果不是长按，执行点击事件
    handleScrollLeft();
  }
};
/**
 * @description 长按左侧按钮滚动开始
 */
const longTouchRightStart = () => {
  // 模拟长按
  clearInterval(rightTimer.value); // 再次清空定时器，防止重复注册定时器（会把点击事件也阻止掉）
  let dom: any = document.getElementById("stepItemContent");
  longTouch.value = false; // 关键
  rightTimer.value = setInterval(() => {
    longTouch.value = true; // 关键
    dom && (dom.scrollLeft = dom.scrollLeft + 20);
  }, 100);
};
/**
 * @description 长按左侧按钮滚动结束
 */
const longTouchRightEnd = () => {
  clearInterval(rightTimer.value); // 清空定时器，防止重复注册定时器
  if (!longTouch.value) {
    //如果不是长按，执行点击事件
    handleScrollRight();
  }
};
</script>

<template>
  <div class="ik-hor-step-content">
    <div
      class="icon-left"
      v-if="showScroll"
      @mousedown="longTouchLeftStart"
      @mouseup="longTouchLeftEnd"
      @click="handleScrollLeft"
    >
      <el-icon class="operation-icon"><ArrowLeft size="26px" /></el-icon>
    </div>
    <div
      class="step-item-content"
      id="stepItemContent"
      :style="{
        justifyContent: showScroll ? 'flex-start' : 'center',
        // width: alignCenter ? `100%` : '',
      }"
    >
      <div
        :class="`${alignCenter ? 'ik-hor-step-item' : ''} step-item ${
          index <= active ? 'step-item-active' : ''
        }`"
        :style="{ width: alignCenter ? `calc(100%/${list?.length})` : '' }"
        v-for="(item, index) in list"
        :key="index"
      >
        <div :class="`${alignCenter ? 'ik-hor-step_head' : ''} `">
          <div
            v-if="index !== 0"
            :class="`ik-hor-step_line step-border ${
              index <= active ? 'step-border-greater-than' : ''
            }`"
            :style="{
              width: `${
                spaceNum.indexOf('px') != -1 ? spaceNum : `${spaceNum}px`
              }`,
            }"
          >
            <i class="ik-hor-step_line_inner"></i>
          </div>
          <div
            :class="`step-num ${
              index === active
                ? 'step-num-active'
                : index < active
                ? 'step-num-greater-than'
                : ''
            }`"
            @click="handleClickStep(item, index)"
            :style="{
              backgroundColor:
                index === active && activeColor ? activeColor : '',
              cursor:
                item && item.disabled
                  ? 'not-allowed'
                  : needClick
                  ? 'pointer'
                  : 'context-menu',
            }"
          >
            <slot name="icon" :data="{ item, index }">{{ index + 1 }}</slot>
          </div>
        </div>
        <div class="ik-hor-step_main">
          <div
            :id="`stepItem${index}`"
            :class="`step-label ${
              active === index
                ? 'step-label-active'
                : index < active
                ? 'step-label-greater-than'
                : ''
            } step-item-${index}`"
            :style="{
              color: index === active && activeColor ? activeColor : '',
              cursor:
                item && item.disabled
                  ? 'not-allowed'
                  : needClick
                  ? 'pointer'
                  : 'context-menu',
            }"
            @click="handleClickStep(item, index)"
          >
            {{ item[propsField.title] }}
          </div>
          <div
            :id="`stepItemDesc${index}`"
            :class="`step-description step-label ${
              active === index
                ? 'step-label-active'
                : index < active
                ? 'step-label-greater-than'
                : ''
            } step-item-${index}`"
            :style="{
              color: index === active && activeColor ? activeColor : '',
              cursor:
                item && item.disabled
                  ? 'not-allowed'
                  : needClick
                  ? 'pointer'
                  : 'context-menu',
            }"
            @click="handleClickStep(item, index)"
          >
            {{ item[propsField.description] }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="icon-right"
      v-if="showScroll"
      @mousedown="longTouchRightStart"
      @mouseup="longTouchRightEnd"
      @click="handleScrollRight"
    >
      <el-icon class="operation-icon"><ArrowRight /></el-icon>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ik-hor-step-content {
  width: 100%;
  display: flex;
  ::-webkit-scrollbar {
    /*滚动条整体样式*/
    display: none;
  }
  .flex {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .step-item-content {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    overflow-x: auto;
    word-break: break-all;
    white-space: nowrap;
  }
  .operation-icon {
    margin: auto;
    // position: relative;
    // left: 9px;
  }
  .icon-left {
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 22px;
    border-radius: 8px;
    color: var(--el-color-info, "#999");
    display: flex;
    align-items: center;
    margin-right: 10px;
    // position: relative;
    // right: 10px;
    // top: 1px;
    cursor: pointer;
    text-align: center;
    &:hover {
      background-color: var(--ik-menu-active-bg, #eaeef2);
    }
  }
  .icon-right {
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 22px;
    border-radius: 8px;
    color: var(--el-color-info, "#999");
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
      background-color: var(--ik-menu-active-bg, #eaeef2);
    }
  }
  .ik-hor-step-item {
    display: inline-block !important;
    min-width: 130px;
    flex-shrink: 1;
    .ik-hor-step_main {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
  .step-item {
    position: relative;
    display: flex;
    align-items: center;
    .step-border {
      display: inline-block;
      position: relative;
      border-top: 1px dashed var(--el-color-info, #ccc);
      margin: 0 18px;
      top: -7px;
    }
    .step-num {
      display: inline-block;
      padding: 4px 10px;
      background-color: var(--ik-step-item-num-bg, #f3f6f9);
      color: var(--ik-step-item-text-color, "#A2A6B8");
      font-size: 18px;
      border-radius: 6px;
      text-align: center;
      &:active {
        background-color: var(--ik-step-item-active-color, #039ef7);
        color: var(--ik-step-item-num-active, "#fff");
      }
    }
  }

  .ik-hor-step_head {
    position: relative;
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
    .ik-hor-step_line {
      height: 2px;
      top: -4px;
      left: 0;
      right: 0;
    }
    .step-border {
      width: calc(100% - 40px) !important;
      position: absolute;
      border-color: inherit;
      display: inline-block;
      border-top: 1px dashed var(--el-color-info, #ccc);
      margin: 0 20px;
      top: 16px;
      left: -50%;
      right: -50%;
      z-index: 2;
      .ik-hor-step_line_inner {
        transition-delay: 0ms;
        border-width: 1px;
        width: 100%;
      }
    }
    .step-num {
      position: relative !important;
      width: fit-content;
      padding: 4px 10px;
      background-color: var(--ik-step-item-num-bg, #f3f6f9);
      color: var(--ik-step-item-text-color, #a2a6b8);
      font-size: 18px;
      border-radius: 6px;
      text-align: center;
      z-index: 50;
      &:active {
        background-color: var(--ik-step-item-active-color, #039ef7);
        color: var(--ik-step-item-num-active, #fff);
      }
    }
  }

  .step-border-greater-than {
    border-top-style: solid !important;
    border-top-color: var(--ik-step-item-active-color, #029ef7) !important;
  }
  .step-num-active {
    background-color: var(--ik-step-item-active-color, #039ef7) !important;
    color: var(--el-color-white, #fff) !important;
  }
  .step-num-greater-than {
    color: var(--ik-step-item-active-color, #333) !important;
    background-color: var(--ik-step-item-num-greater-bg, #d9f1fe) !important;
    font-weight: 550;
  }
  .step-label {
    padding-left: 6px;
    color: var(--el-color-info, #181c3266);
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 550;
    position: relative;
    top: 0px;
  }
  .step-label-active {
    color: var(--ik-step-item-active-color, #039ef7) !important;
  }
  .step-label-greater-than {
    color: var(--ik-color-font-title, #181c32);
    font-weight: 550;
  }
  .step-description {
    font-size: 14px;
    color: var(--ik-step-item-text-color);
    font-weight: 400;
  }
}
</style>
