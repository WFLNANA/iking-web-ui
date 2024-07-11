<!--
 * @Author       : wfl
 * @LastEditors: ww
 * @description  :
 * @updateInfo   :
 * @Date         : 2023-03-22 13:37:08
 * @LastEditTime: 2023-06-29 17:24:27
-->
<script setup lang="ts" name="IkCollapseCard">
import { IkSvgIcon } from '@iking-ui/components'

defineProps({
  showToggle: {
    type: Boolean,
    default: true,
  },
})

const hidden = defineModel({
  type: Boolean,
  default: false,
})

const handToogle = () => {
  hidden.value = !hidden.value
}
</script>

<template>
  <el-card class="ik-collapse-box-card" :class="hidden ? 'hiddened' : ''" shadow="hover">
    <template #header>
      <div class="align-center flex justify-between">
        <!-- card header左侧内容 -->
        <slot name="header-leaft"></slot>
        <div class="align-center flex">
          <!-- card header右侧内容 -->
          <slot name="header-right"></slot>
          <!-- 展开、收起按钮 -->
          <el-button v-if="showToggle" link class="ml-[8px]" @click="handToogle()">
            {{ hidden ? '展开' : '收起' }}
            <IkSvgIcon name="iksvg_shouqi" :size="16" :class="hidden ? 'toogle' : null" />
          </el-button>
        </div>
      </div>
    </template>
    <div style="overflow: hidden;">
      <slot></slot>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.ik-collapse-box-card {
  flex: 1;
  margin-bottom: 20px;

  --el-card-border-radius: 0;

  :deep(.el-card__header) {
    padding-right: 0;
    color: var(--el-text-color-regular);
    background-color: var(--el-bg-color-page);
    border-bottom: none;

    .el-button.is-link:hover {
      --ik-color-icon-dark: var(--ik-color-tag-primary);
      --ik-color-icon-light: var(--ik-color-icon-light-hover);
    }
  }

  :deep(.ik-svg-icon) {
    transition: all 0.25s;

    &.toogle {
      transform: rotate(-90deg);
    }
  }

  &.hiddened {
    :deep(.el-card__body) {
      grid-template-rows: 0fr;
      // height: 0 !important;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      overflow: hidden;
      opacity: 0;
    }
  }

  :deep(.el-card__body) {
    display: grid;
    grid-template-rows: 1fr;
    padding: 0;
    overflow: hidden !important;
    opacity: 1;
    transition: all 0.25s ease;

    table>tbody>tr>td>.cell {
      .cell-icon {
        font-size: 14px;
      }

      .el-button span {
        margin-left: 3px;
      }
    }
  }
}
</style>
