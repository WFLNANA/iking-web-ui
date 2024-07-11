<!--
 * @Author       : wfl
 * @LastEditors: fj
 * @description  :
 * @updateInfo   :
 * @Date         : 2024-03-20 16:36:28
 * @LastEditTime: 2024-05-28 15:06:51
-->
<script lang="ts" setup>
import { IkSvgIcon } from "@iking-ui/components";
const props = defineProps({
  showBg: {
    type: Boolean,
    default: false,
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div>
    <div v-if="showBg && fullscreen" class="exit-main-page-maximize">
      <IkSvgIcon
        name="iksvg_guanbidanchuang"
        title="关闭"
        :size="20"
        error
      ></IkSvgIcon>
    </div>
    <IkSvgIcon
      v-else
      error
      name="iksvg_guanbidanchuang"
      title="关闭"
      :size="20"
    ></IkSvgIcon>
  </div>
</template>

<style lang="scss" scoped>
.exit-main-page-maximize {
  position: fixed;
  top: -40px;
  right: -40px;
  z-index: 1000;
  width: 80px;
  height: 80px;
  cursor: pointer;
  background-color: var(--ik-color-bg-icon);
  border-radius: 50%;

  span {
    position: absolute;
    top: 47px;
    right: 47px;
  }
}
.ik-svg-icon.ik-icon {
  --ik-color-icon-dark: var(--ik-color-bgicon-dark);
  --ik-color-icon-light: var(--ik-color-bgicon-light);
}
</style>
