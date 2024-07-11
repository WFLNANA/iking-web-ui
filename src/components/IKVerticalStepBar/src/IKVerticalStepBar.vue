<!--
 * @Author: fj
 * @LastEditors: zqf
 * @description: 垂直进度条
 * @updateInfo: 本次更新内容：
 * @Date: 2023-05-08 16:34:26
 * @LastEditTime: 2024-03-22 11:56:08
-->
<template>
  <div class="content">
    <div class="line-block" v-for="(item, index) of list" :key="index">
      <div class="top">
        <div :class="indexColor(index)">
          {{ index + 1 }}
        </div>
        <div
          :class="textColor(index)"
          :style="needClick ? 'cursor: pointer;' : ''"
          @click="getItem(item, index + 1)"
        >
          {{ item[propsField.name] }}

          <!-- <i
            v-if="item[propsField.children]?.length && !item.show"
            class="ikapprove icon-a-putongjiantouzhankai"
            @click="changeShow(item, index)"
          ></i> -->
          <IkSvgIcon
            v-if="item[propsField.children]?.length && !item.show"
            class="ikapprove"
            @click="changeShow(item, index)"
            name="iksvg_zhankai"
          ></IkSvgIcon>
          <!-- <i
            v-if="item[propsField.children]?.length && item.show"
            @click="changeShow(item, index)"
            class="ikapprove icon-a-putongjiantoushouqi"
          ></i> -->
          <IkSvgIcon
            v-if="item[propsField.children]?.length && item.show"
            class="ikapprove"
            @click="changeShow(item, index)"
            name="iksvg_shouqi"
          ></IkSvgIcon>
        </div>
      </div>
      <ul :class="borderColor(index)">
        <div :id="`children${index}`">
          <li
            v-for="(it, i) of item[propsField.children]"
            :class="getTextColor(index, i)"
            :style="needClick ? 'cursor: pointer;' : ''"
            :key="i"
            @click="getItem(it, index + 1 + '-' + (i + 1))"
          >
            {{ it.name }}
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts" name="IKVerticalStepBar">
import { computed } from "vue";
import { IkSvgIcon } from '@iking-ui/components'
const props = defineProps({
  // 当前激活的下标
  active: {
    type: String,
    default: "",
  },
  // 数据数组
  list: {
    type: Array,
    default: () => {
      return [];
    },
  },
  // 是否存在点击事件
  needClick: {
    type: Boolean,
    default: false,
  },
  // 映射字段
  propsField: {
    type: Object,
    default: () => {
      return {
        name: "name",
        children: "children",
      };
    },
  },
});

const emits = defineEmits<{
  (event: "click", value: any): void;
  (event: "update:active", value: any): void;
}>();

/**
 * @description: 计算父下标
 * @param {*} computed
 * @return {*}
 */
const activeIndex = computed(() => {
  return Number(
    props.active.indexOf("-") > 0 ? props.active.split("-")[0] : props.active
  );
});
/**
 * @description: 计算子级下标
 * @param {*} computed
 * @return {*}
 */
const activeChildIndex = computed(() => {
  return props.active.indexOf("-") > 0 ? Number(props.active.split("-")[1]) : 0;
});

/**
 * @description: 计算序号样式
 * @param {*} ind
 * @return {*}
 */
const indexColor = (ind: any) => {
  let className = "";
  let index = ind + 1;
  if (index < activeIndex.value) {
    className = "before-bg";
  } else if (index === activeIndex.value) {
    className = "active-bg";
  } else if (index > activeIndex.value) {
    className = "after-bg";
  }
  return `${className} index`;
};
/**
 * @description: 父标题样式
 * @param {*} ind
 * @return {*}
 */
const textColor = (ind: any) => {
  let className = "";
  let index = ind + 1;
  if (index < activeIndex.value) {
    className = "before-text";
  } else if (index === activeIndex.value) {
    className = "active-text";
  } else if (index > activeIndex.value) {
    className = "after-text";
  }
  return `${className} text`;
};

/**
 * @description: 边框样式
 * @param {*} ind
 * @return {*}
 */
const borderColor = (ind: any) => {
  let className = "";
  let index = ind + 1;
  if (index < activeIndex.value) {
    className = "before-style";
  } else if (index < props.list.length) {
    className = "after-style";
  }
  return `${className} bottom`;
};
/**
 * @description: 子标题样式
 * @param {*} val 父下标
 * @param {*} val1 子下标
 * @return {*}
 */
const getTextColor = (val: any, val1: any) => {
  let className = "";
  let index = val + 1;
  let index1 = val1 + 1;
  if (index < activeIndex.value) {
    className = "before-text";
  } else if (index === activeIndex.value) {
    if (index1 < activeChildIndex.value) {
      className = "before-text";
    } else if (index1 === activeChildIndex.value) {
      className = "active-text";
    } else if (index1 > activeChildIndex.value) {
      className = "after-text";
    }
  } else if (index > activeIndex.value) {
    className = "after-text";
  }
  return `${className} child-text`;
};
/**
 * @description: 点击事件，更新父组件传过来的当前激活得下标
 * @param {*} row  当前操作对象
 * @param {*} index  当前数据下标
 * @return {*}
 */
const getItem = (row: any, index: any) => {
  if (!props.needClick) {
    return;
  }
  if (row[props.propsField.children]) {
    return;
  }
  emits("update:active", index + "");
  emits("click", row);
};
/**
 * @description: 是否展示当前子数据
 * @param {*} val 当前操作对象
 * @param {*} val2  父下标
 * @return {*}
 */
const changeShow = (val: any, val2: any) => {
  val.show = !val.show;
  let demo: any = document.getElementById(`children${val2}`);
  if (val.show) {
    demo.style.display = "none";
  } else {
    demo.style.display = "block";
  }
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.content {
  width: 100%;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 32px 28px;
  .line-block {
    .top {
      display: flex;
      .index {
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        font-size: 18px;
        font-weight: 550;
      }

      .text {
        line-height: 32px;
        margin-left: 20px;
        font-size: 18px;
        font-weight: 700;
      }
    }
    .active-text {
      color: var(--ik-step-item-active-color, "#039ef7");
    }
    .before-text {
      color: var(--ik-color-font-title);
    }
    .after-text {
      color: var(--el-color-info, "#181c3266");
    }
    .before-bg {
      color: var(--ik-step-item-active-color, #333) !important;
      background-color: var(--ik-step-item-num-greater-bg);
    }
    .active-bg {
      background-color: var(--ik-step-item-active-color, #039ef7);
      color: var(--el-color-white, #fff);
    }
    .after-bg {
      background-color: var(--ik-step-item-num-bg, #f3f6f9);
      color: var(--ik-step-item-text-color, #a2a6b8);
    }
    .bottom {
      margin-left: 16px;
      border-width: 0 0 0 1px;
      padding-bottom: 20px;
      padding: 10px 0 20px 52px;
      margin-top: 4px;
      margin-bottom: 4px;
    }
    .before-style {
      border-color: var(--ik-step-item-active-color, #029ef7);
      border-style: solid;
    }
    .after-style {
      border-color: var(--el-color-info, #ccc);
      border-style: dashed;
    }
    li {
      line-height: 30px;
    }
    .child-text {
      padding: 5px 0px;
    }
  }
}
</style>
