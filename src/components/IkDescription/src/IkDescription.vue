<!--
 * @Author: fj
 * @LastEditors: fj
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2024-06-07 11:52:08
 * @LastEditTime: 2024-06-25 13:44:09
-->

<script lang="ts" setup name="IkDescription">
import {computed, PropType} from "vue";
import {IkPreviewFile} from "@iking-ui/components";
import { ElTag } from "element-plus";

const props = defineProps({
  showIcon: {
    type: Boolean,
    default: false,
  },
  listData: {
    type: Array as PropType<Array<any>>,
    default: () => {
      return [];
    },
  },
  // el-descriptions支持的所有props
  props: {
    type: Object,
    default: () => {
      return {};
    },
  },
  // 作用与props完全一致，只为兼容旧版本
  titleProps: {
    type: Object,
    default: () => {
      return {};
    },
  },
  fileField: {
    type: Object,
    default: () => {
      return {};
    },
  },
  loadUrl: {
    type: String,
    default: "",
  },
  kkUrl: {
    type: String,
    default: "",
  },
  labelWidth: {
    type: String || Number,
    default: "150px",
  },
  // 是否需要onlyoffice预览
  isOnlyOfficePreview: {
    type: Boolean,
    default: false,
  },
  // 需要onlyoffice预览的文件类型
  onlyOfficeAccept: {
    type: String,
    default: ".pdf,.docx,.doc.ppt,.pptx,.xlsx,.xls,",
  },
  // onlyoffice服务地址
  onlyofficeServer: {
    type: String,
    default: "",
  },
  // onlyoffice公共配置
  onlyOfficeConfig: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const fixOption = {
  id: "id",
  value: "value",
  props: "props",
  label: "label",
  tag: "tag",
  fileList: "fileList",
  ...props.fileField,
};

const labelWidth = computed(() => {
  return typeof props.labelWidth === "number"
      ? `${props.labelWidth}px`
      : props.labelWidth;
});
</script>

<template>
  <el-descriptions class="margin-top" v-bind="{ ...titleProps, ...props }">
    <template #extra>
      <slot name="extra"></slot>
    </template>
    <el-descriptions-item
        v-for="item of listData"
        :key="item[fixOption.id]"
        v-bind="item[fixOption.props]"
    >
      <template #label>
        <slot :name="item[fixOption.label]">{{ item[fixOption.label] }}</slot>
      </template>

      <slot :name="`${item[fixOption.label]}_value`">
        {{ item[fixOption.value] }}
        <el-tag v-if="item[fixOption.tag]" size="small">{{
            item[fixOption.value].value
          }}
        </el-tag>
        <IkPreviewFile
            :list="item[fixOption.fileList]"
            :field="fileField"
            :load-url="loadUrl"
            :kk-url="kkUrl"
            :show-bg="false"
            :isOnlyOfficePreview="isOnlyOfficePreview"
            :onlyOfficeAccept="onlyOfficeAccept"
            :onlyofficeServer="onlyofficeServer"
            :onlyOfficeConfig="onlyOfficeConfig"
        />
      </slot>
    </el-descriptions-item>
  </el-descriptions>
</template>
<style lang="scss" scoped>
:deep(.el-descriptions__body) {
  .el-descriptions__label {
    font-weight: 500 !important;
    width: v-bind(labelWidth) !important;
    background: var(--ik-table-header-bg) !important;
    color: var(--ik-color-font-secondary) !important;
  }

  .el-descriptions__content {
    color: var(--ik-color-font-title) !important;
  }
}
</style>