<!--
 * @Author       : wfl
 * @LastEditors: wfl
 * @description  :
 * @updateInfo   :
 * @Date         : 2022-11-02 12:05:01
 * @LastEditTime: 2024-05-13 11:43:09
-->
<script lang="ts" setup name="IkEmpty">
import Zwjl from './zwjl.webp'

defineProps({
  tip: {
    type: String,
    default: '暂无数据',
  },
  showSvg: {
    type: Boolean,
    default: true,
  },
  size: {
    type: Number,
    default: 250,
  },
})
</script>

<template>
  <slot>
    <div class="ik-empty-content flex flex-col items-center">
      <img :src="Zwjl">
      <span>{{ tip }}</span>
    </div>
  </slot>
</template>

<style lang="scss" scoped>
.ik-empty-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: var(--ik-font-size-t2);
  color: var(--ik-vice-text-color);
  opacity: 0;
  animation: empty-text 0.1s forwards;
  animation-delay: 0.35s;

  img {
    position: absolute;
    height: 180px;
  }

  span {
    position: absolute;
    top: calc(50% + 80px);
    user-select: none;
  }

  @keyframes empty-text {
    0% {
      opacity: 0;
    }

    99% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
}

:root.dark {
  .ik-empty-content {
    img {
      filter: brightness(0.7);
    }
  }
}
</style>
