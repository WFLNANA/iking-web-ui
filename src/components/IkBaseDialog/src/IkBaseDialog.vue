<!--
 * @Author       : wfl
 * @LastEditors: zqf
 * @description  :
 * @updateInfo   :
 * @Date         : 2024-03-12 14:00:50
 * @LastEditTime: 2024-05-28 19:07:16
-->
<script lang="ts" setup>
import { ref, defineModel, withDefaults, defineComponent, h } from "vue";
import IkCloseIcon from "./CloseIcon.vue";
import { IkSvgIcon } from '@iking-ui/components'

// 这里只列举了个别属性，实际所有el-dialog的属性、事件都支持
// https://element-plus.org/zh-CN/component/dialog.html#attributes
const props = withDefaults(
  defineProps<{
    title: string;
    cancelText?: string;
    confirmText?: string;
    noHeader?: boolean;
    noFooter?: boolean;
    showCloseBg?: boolean;
    fullscreen?: boolean;
  }>(),
  {
    title: "",
    cancelText: "取消",
    confirmText: "确认",
    showCloseBg: false,
    fullscreen: false,
  }
);
const visible = defineModel({
  type: Boolean,
  default: false,
  noHeader: false,
  noFooter: false,
});

const isFull = ref(props.fullscreen);
const handFullSize = () => {
  isFull.value = !isFull.value;
};

const CloseIcon = defineComponent({
  setup() {
    return () =>
      h(IkCloseIcon, {
        showBg: props.showCloseBg,
        fullscreen: props.fullscreen,
      });
  },
});
</script>

<template>
  <el-dialog
    v-model="visible"
    v-bind="$attrs"
    :close-icon="CloseIcon"
    :class="`ik-base-dialog ${noHeader ? 'no-header' : ''} ${
      noFooter ? 'no-footer' : ''
    }`"
    :fullscreen="isFull"
    modal-class="baseDialog"
  >
    <template #icon>
      <slot name="title">
        {{ title }}
      </slot>
    </template>
    <template #header>
      <div class="base-header">
        <slot name="header">
          {{ title }}
        </slot>
      </div>

      <IkSvgIcon
        v-if="$attrs.showClose"
        @click="handFullSize"
        :name="isFull ? 'iksvg_tuichuquanping' : 'iksvg_quanping-daohang'"
        class="absolute! top-[18px] right-[50px] icon-dialog-full"
        :title="isFull ? '退出全屏' : '全屏'"
      />
    </template>
    <slot />
    <template v-if="$slots.footer" #footer>
      <slot name="footer"> </slot>
    </template>
  </el-dialog>
</template>

<style lang="scss">
.el-dialog.ik-base-dialog {
  &.no-header .el-dialog__header {
    height: 0;
    .base-header {
      overflow: hidden;
      display: none;
    }
    &::after {
      display: none;
    }
  }
  &.no-footer .el-dialog__footer {
    height: 0;
    overflow: hidden;
  }
}
</style>