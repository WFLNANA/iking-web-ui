<!--
 * @Author       : wfl
 * @LastEditors: qiye
 * @description  :
 * @updateInfo   :
 * @Date         : 2023-05-23 11:09:59
 * @LastEditTime: 2023-11-10 14:51:46
-->
<script lang="ts" setup name="IkPageHead">
import { computed, PropType, ref } from 'vue'
import type { ISearchForm } from './search'
import IkSearchAuto from './IkSearchAuto.tsx'
import { IkSvgIcon, IkBtnSetting } from '@iking-ui/components'

const props = defineProps({
  // 标题
  headerTitle: {
    type: String,
    default: ''
  },
  // 显示头部bottom  border
  headerBorder: {
    type: Boolean,
    default: false
  },
  // 字段名列表
  fields: {
    required: true,
    type: Array as PropType<ISearchForm[]>,
    default: () => []
  },
  // 查询方法
  search: {
    type: Function,
    default: null
  },
  loading: {
    type: Boolean,
    default: false
  },
  // tab页id，用于保存用户配置
  tabId: {
    type: Number || String,
    default: 0
  },
  // 显示导出按钮
  exportBtn: {
    type: Boolean,
    default: false
  },
  // 显示刷新按钮
  refreshBtn: {
    type: Boolean,
    default: false
  },
  // 显示设置按钮
  settingBtn: {
    type: Boolean,
    default: true
  },
  // 是否默认展开
  defaultShow: {
    type: Boolean,
    default: false
  },
  // 高度
  headerHeight: {
    type: Number,
    default: 66
  }
})

const srotFields = defineModel({
  type: Array as PropType<Array<ISearchForm>>,
  default: () => []
})

const showSearch = ref(props.defaultShow)
const handSearch = () => {
  showSearch.value = !showSearch.value
}

const settingList = computed(() => props.fields.filter(v => !v.onlyForm))
const searchFields = computed(() => props.fields?.filter(v => v.search))
const searchLen = computed(() => {
  return searchFields.value.length
})

const computedHeight = `${props.headerHeight}px`
</script>

<template>
  <div class="ik-page-header" :class="{ 'show-search': showSearch }">
    <div class="header" :style="{
        borderColor: headerBorder ? 'var(--ik-border-color)' : 'transparent',
        marginBottom: headerBorder ? '8px' : '0',
      }">
      <div class="header-left">
        <!-- 左侧标题、tab页或自定义内容 v-if="!$slots.headerLeft" -->
        <span class="title">{{ headerTitle }}</span>
        <slot name="headerLeft"></slot>
      </div>
      <!-- 默认按钮 -->
      <div class="flex items-center">
        <!-- 右侧操作或自定义内容 -->
        <slot name="headerRight"></slot>

        <IkSvgIcon v-if="exportBtn" name="iksvg_xiazai" type="primary" title="导出" show-bg size="default" />
        <IkSvgIcon v-if="searchLen" name="iksvg_shaixuan1" size="default" :title="showSearch ? '收起筛选条件' : '展开筛选条件'"
          show-bg @click="handSearch" />
        <IkSvgIcon v-if="refreshBtn" name="iksvg_zhongzhi1" title="保留搜索条件刷新" show-bg size="default" @click="search" />
        <!-- <IkSvgIcon
          name="icon-shezhi"
          show-bg
          :width="40"
          size="small"
        /> -->
        <IkBtnSetting v-model="srotFields" title="设置表格字段" :list="(settingList as any)" :tab="tabId" />
      </div>
    </div>
    <el-card shadow="always" class="search-form">
      <IkSearchAuto :list="searchFields" :search="search" :loading="loading" />
      <span class="hide-serch" @click="handSearch">
        <IkSvgIcon title="收起" rotate="180" name="icon-shouqi" />
      </span>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.ik-page-header {
  justify-content: space-between;
  flex-direction: column;

  .header {
    position: relative;
    z-index: 1;
    height: v-bind('computedHeight');
    display: flex;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid;

    .header-left {
      display: flex;
      align-items: flex-end;

      .title {
        font-weight: 700;
        font-size: 20px;
        color: var(--ik-page-title-color);
        margin-right: 12px;
      }
    }

    :deep(.tabs) {
      .el-tabs__nav-wrap {
        overflow: unset;

        &::after {
          display: none;
        }

        .el-tabs__nav-scroll {
          overflow: unset;

          &::after {
            display: none;
          }
        }
      }

      .el-tabs__header {
        margin: 0;
      }

      .el-tabs__active-bar {
        bottom: -18px;
        height: 4px;
      }

      .el-tabs__item {
        padding: 0;
        position: relative;

        span {
          font-size: 16px;
          letter-spacing: 0;
          transition: font-size .3s;
        }

        &:not(.is-disabled):hover {
          color: var(--ik-theme-color);
        }

        &.is-active span {
          font-weight: 700;
          font-size: 16px;
          color: var(--ik-theme-color);
          letter-spacing: 0;
        }

        &+.el-tabs__item {
          margin-left: 40px;
        }
      }
    }
  }

  .search-form {
    transform: translateY(-100%);
    height: 0;
    // transition: transform .3s, visibility .3s;
    background: var(--ik-card-bg);
    position: relative;
    border: none;
    box-shadow: none;
    overflow: hidden;

    :deep(.el-form-item) {
      margin-bottom: 16px;
    }

    :deep(.el-card__body){
      padding-bottom: calc(var(--el-card-padding) - 16px);
    }

    .hide-serch {
      cursor: pointer;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -13px;
      background-color: var(--el-card-bg-color);
      border-radius: 0 0 10px 10px;
      display: flex;
      width: 50px;
      align-items: center;
      justify-content: center;
      height: 13px;

      i {
        transform: rotateZ(180deg);
      }
    }
  }

  &.show-search {
    .search-form {
      box-shadow: 0 5px 8px 8px var(--ik-box-shadow-color);
      transform: translateY(0);
      top: -2px;
      border-radius: 6px;
      margin-bottom: 20px;
      animation-name: search;
      animation-duration: .25s;
      animation-direction: alternate;
      animation-fill-mode: forwards;
    }
  }

  @keyframes search {
    0% {
      z-index: 0;
      height: 0;
    }

    1% {
      height: fit-content;
    }

    99% {
      z-index: 0;
    }

    100% {
      z-index: 1;
      height: fit-content;
      overflow: visible;
    }
  }
}
</style>
