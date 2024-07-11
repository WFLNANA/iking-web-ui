<!--
 * @Author       : wfl
 * @LastEditors: fj
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2023-06-09 16:02:29
 * @LastEditTime: 2024-07-10 10:39:32
-->
<script lang="ts" setup name="IkUploadFile">
import { PropType, computed, ref, Ref, nextTick } from "vue";
import {
  ElUpload,
  ElIcon,
  ElButton,
  ElProgress,
  ElTooltip,
  ElMessage,
} from "element-plus";
import type { UploadFile, UploadFiles, UploadUserFile } from "element-plus";
import {
  Delete,
  Refresh,
  WarningFilled,
  QuestionFilled,
  Download,
  View,
} from "@element-plus/icons-vue";
import { IkFileIcon } from "@iking-ui/components";
import { IkPreviewFileDialog } from "@iking-ui/components";
import { IkSvgIcon } from "@iking-ui/components";
import { _, ikFile } from "iking-utils-pro";
import { formatNumber, setFileUrl } from "@iking-ui/utils/math";
import { getFileType, iconFieldInter, fieldInter } from "@iking-ui/utils/file";
import useProvider from "@iking-ui/utils/use-provider";

const props = defineProps({
  // 显示图标
  showIcon: {
    type: Boolean,
    default: true,
  },
  // 显示的文字
  title: {
    type: String,
    default: "上传文件",
  },
  // 上传地址
  action: {
    type: String,
    default: "",
  },
  // 样式类别
  type: {
    type: String as PropType<"button" | "card">,
    default: "button",
  },
  // 设置上传的请求头部
  headers: {
    type: Object,
    default: () => {
      return {};
    },
  },
  // 预览地址
  loadUrl: {
    type: String,
    default: "",
  },
  // 最多上传数量
  limit: {
    type: Number,
    default: 1,
  },
  // 单个文件大小 MB
  size: {
    type: Number,
    default: 50,
  },
  // 允许的格式
  accept: {
    type: String,
    default: "*",
  },
  // 支持多选
  multiple: {
    type: Boolean,
    default: true,
  },
  // 显示提示
  tip: {
    type: Boolean,
    default: false,
  },
  // 提示文字
  tipText: {
    type: String,
    default: "",
  },
  // 提示文字
  limitText: {
    type: String,
    default: "",
  },
  defaultFileds: {
    type: Object as PropType<fieldInter>,
    default: () => {
      return {
        name: "name",
        url: "url",
        suffix: "suffix",
        size: "fileSize",
      };
    },
  },
  // 预览模式 - 为true时不显示上传元素
  preview: {
    type: Boolean,
    default: false,
  },
  // 自定义替图标数据
  customIconData: {
    type: Object as PropType<any>,
    default: () => {
      return {};
    },
  },
  // 自定义图标映射字段
  customIconFields: {
    type: Object as PropType<iconFieldInter>,
    default: () => {
      return {
        type: "type",
        icon: "icon",
      };
    },
  },
  // 禁用
  disabled: {
    type: Boolean,
    default: false,
  },
  // 清新样式
  plain: {
    type: Boolean,
    default: false,
  },
  // image
  imageMode: {
    type: Boolean,
    default: false,
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
  // onlyOffice的加密token
  jwtToken: {
    type: String,
    default: "",
  },
});

const emit = defineEmits<{
  (e: "delete", file: UploadFile): void;
  (e: "exceed", file: any): void;
  (e: "success", response: any, file: UploadFile, files: UploadFiles): void;
  (e: "error", error: any, file: UploadFile, files: UploadFiles): void;
  (e: "outSize"): void;
}>();

const modelValue = defineModel({
  type: Array as PropType<Array<{ url: string } | UploadFile> | string>,
  default: () => [],
}) as Ref<any>;

const FIELDS = {
  name: "name",
  url: "url",
  suffix: "suffix",
  size: "size",
};

const mixDefaultField: any = {
  ...FIELDS,
  ...props.defaultFileds,
};

const { cLoadUrl, cUploadUrl, cOnlyofficeConfig } = useProvider(props);

const sizeLimit = computed(() => props.size);
const refUpload: Ref<{
  handleStart: Function;
  submit: Function;
  abort: Function;
  handleRemove: Function;
} | null> = ref(null);
const errorList = ref<Array<any>>([]);
// 预览文件显隐
const fileData = ref({});
// onlyoffice
const officeVisible = ref(false);

const beforeUpload = (file: File) => {
  const fileSize = file.size / 1024 / 1024;
  const isLtSize = fileSize < sizeLimit.value;
  if (!isLtSize) {
    emit("outSize");
    ElMessage({
      message: `上传文件大小(${fileSize.toFixed(4)}MB)超出允许最大值(${
        props.size
      }MB)，请重新选择`,
      type: "warning",
      showClose: true,
      duration: 5000,
    });
    return false;
  }
  return true;
};

const handChange = (file, files) => {
  const fileSize = file.size / 1024 / 1024;
  const isLtSize = fileSize < sizeLimit.value;
  if (!isLtSize) {
    nextTick(() => {
      modelValue.value.pop();
    });
  }
  if (props.accept !== "*") {
    if (
      !props.accept.split(",").includes(file?.raw?.type) &&
      !props.accept.split(",").includes(`.${file.name.split(".").pop()}`)
    ) {
      ElMessage({
        message: `不允许的上传文件格式(${file.name})，请重新选择`,
        type: "warning",
        showClose: true,
        duration: 5000,
      });
      nextTick(() => {
        modelValue.value.pop();
      });
    }
  }
};

const beforeRemove = () => {
  return false;
};
// 定义一个重新上传函数，将标记为 fail 的文件重新上传
const handRetryUpload = (file: UploadFile, index?: number) => {
  file.status = "ready";
  if (index !== undefined) errorList.value.splice(index, 1);
  refUpload.value?.handleStart(file.raw);
  refUpload.value?.submit();
};

const handExceed = (files: File[], uploadFiles: UploadUserFile[]) => {
  const len = modelValue.value.length;
  const canLen = props.limit - len;
  let num = 0;
  while (num < canLen && num < files.length) {
    refUpload.value?.handleStart(files[num]);
    refUpload.value?.submit();
    num++;
  }
  ElMessage({
    message:
      props?.limitText || `最大可上传${props.limit}个文件，已忽略超出文件`,
    type: "warning",
    showClose: true,
    duration: 5000,
  });
  emit("exceed", files);
};
const handSuccess = (
  response: any,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  emit("success", response, uploadFile, uploadFiles);
};
const handError = (
  error: Error,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  errorList.value.push(uploadFile);
  emit("error", error, uploadFile, uploadFiles);
};

// 预览
const handPreview = (file: any) => {
  fileData.value = {
    ...file,
    name: file[mixDefaultField.name],
    url: setFileUrl(
      cLoadUrl.value,
      file[mixDefaultField.url] || file?.response?.data?.id
    ),
  };
  officeVisible.value = true;
};
// 下载
const handDownLoad = (file: any) => {
  ikFile.downloadByOnlineUrl(
    file[mixDefaultField.url],
    file[mixDefaultField.name]
  );
};
// 取消上传
const handAbort = (file: UploadFile, remove = false) => {
  refUpload.value?.abort(file);
};
// 删除
const handDelete = (file: UploadFile) => {
  try {
    if (file.status !== "success") handAbort(file);
    refUpload.value?.handleRemove(file);
    modelValue.value = modelValue.value.filter((v: any) => v.uid !== file.uid);
    emit("delete", file);
  } catch (error) {
    refUpload.value?.handleRemove(file);
    modelValue.value = modelValue.value.filter((v: any) => v.uid !== file.uid);
    emit("delete", file);
    console.error(error);
  }
};

const handRemoveError = (file: UploadFile, index: number) => {
  errorList.value.splice(index, 1);
};
const isDisabled = computed(
  () => modelValue.value.length >= props.limit || props.disabled
);
</script>

<template>
  <template v-if="!preview">
    <el-upload
      v-if="type === 'button'"
      class="ik-file-upload"
      v-bind="$attrs"
      :accept="accept"
      :action="cUploadUrl"
      v-model:file-list="modelValue"
      ref="refUpload"
      :before-upload="beforeUpload"
      :before-remove="beforeRemove"
      :on-exceed="handExceed"
      :on-change="handChange"
      :multiple="multiple"
      :headers="headers"
      :limit="limit"
      :on-success="handSuccess"
      :on-error="handError"
    >
      <template #trigger>
        <slot v-if="$slots.trigger" name="trigger"></slot>
        <el-button v-else :disabled="isDisabled">
          <template #icon v-if="showIcon">
            <IkSvgIcon name="iksvg_daoru" :disabled="isDisabled" />
          </template>
          {{ title }}
        </el-button>
      </template>
      <el-tooltip
        v-if="!preview && tip"
        effect="dark"
        :content="props.tipText || ``"
        popper-class="_ik_web_ui_file-help-tooltip"
      >
        <el-icon :size="23" class="_ik_web_ui_file_help_icon">
          <QuestionFilled />
        </el-icon>
      </el-tooltip>
      <template #file="{ file }">
        <div class="ik-flie-list">
          <div class="name">
            <IkFileIcon
              v-if="
                !$slots.fileIcon &&
                (!customIconData[getFileType(file, mixDefaultField)] ||
                  !customIconData[getFileType(file, mixDefaultField)][
                    customIconFields['icon']
                  ])
              "
              :type="getFileType(file, mixDefaultField)"
            />
            <div
              v-else-if="
                !$slots.fileIcon &&
                customIconData[getFileType(file, mixDefaultField)] &&
                customIconData[getFileType(file, mixDefaultField)][
                  customIconFields['icon']
                ]
              "
            >
              <img
                v-if="
                  customIconData[getFileType(file, mixDefaultField)][
                    customIconFields['type']
                  ] === 'img'
                "
                :src="
                  customIconData[getFileType(file, mixDefaultField)][
                    customIconFields['icon']
                  ]
                "
                alt=""
                class="file-img-icon"
              />
              <span
                v-else
                :class="
                  customIconData[getFileType(file, mixDefaultField)][
                    customIconFields['icon']
                  ]
                "
                class="file-icon-size"
              ></span>
            </div>
            <div class="file-icon">
              <slot name="fileIcon" :file="file"></slot>
            </div>
            <div class="file-name-loading">
              <p class="file-name">
                {{ file[mixDefaultField.name] || file.name }}
                <span v-if="file.percentage && file.status === 'uploading'"
                  >({{ file.percentage }}%)</span
                >
              </p>
              <p class="file-size" v-if="file.status === 'success'">
                {{ formatNumber(file.size / 1024 / 1024) }}MB
              </p>
              <el-progress
                v-if="file.percentage && file.status === 'uploading'"
                text-inside
                :percentage="file.percentage"
                color="var(--el-color-primary)"
                :show-text="false"
              />
            </div>
          </div>
          <div>
            <template v-if="file.status === 'success'">
              <IkSvgIcon
                @click="handPreview(file)"
                name="iksvg_yulan"
                title="预览"
                bg
                size="default"
              />
              <IkSvgIcon
                @click="handDelete(file)"
                error
                name="iksvg_shanchu"
                title="删除"
                bg
                size="default"
              />
            </template>

            <IkSvgIcon
              v-else
              @click="handDelete(file)"
              error
              name="iksvg_guanbi"
              size="default"
              bg
              title="取消上传"
            />
          </div>
        </div>
      </template>
      <template v-if="errorList?.length">
        <div
          class="ik-error-flie-list"
          v-for="(item, index) in errorList"
          :key="item.uid"
        >
          <div class="name">
            <el-icon :size="32" class="info" style="vertical-align: middle">
              <WarningFilled />
            </el-icon>
            <div class="file-name-loading">
              <p class="file-name">
                {{ item[mixDefaultField.name] || item.name }}
              </p>
              <p class="file-size">
                {{ formatNumber(item.size / 1024 / 1024) }}MB
              </p>
            </div>
          </div>
          <div class="operate-btn" v-show="item?.status === 'fail'">
            <el-icon
              style="vertical-align: middle"
              @click="handRetryUpload(item, index)"
              title="重新上传"
              class="primary"
            >
              <Refresh />
            </el-icon>
            <el-icon
              class="error"
              @click="handRemoveError(item, index)"
              title="删除"
            >
              <Delete />
            </el-icon>
          </div>
        </div>
      </template>
    </el-upload>
    <el-upload
      v-else
      v-model:file-list="modelValue"
      class="ik-file-pload-card"
      :class="{ plain: plain }"
      v-bind="$attrs"
      :accept="accept"
      :action="cUploadUrl"
      :disabled="isDisabled"
      ref="refUpload"
      :before-upload="beforeUpload"
      :before-remove="beforeRemove"
      :on-exceed="handExceed"
      :multiple="multiple"
      :headers="headers"
      :limit="limit"
      :on-success="handSuccess"
      :on-error="handError"
      :on-change="handChange"
    >
      <div class="card">
        <div class="title">
          <slot name="image" v-if="imageMode">
            <img src="./icon.webp" class="w-[48px] h-[48px]" />
          </slot>
          <IkSvgIcon
            v-else-if="showIcon"
            name="iksvg_img_shangchuanhetongfujianbeifen"
            type="primary"
            bg
            :size="40"
          />
          <span>
            {{ title }}
            <el-tooltip
              v-if="!preview && tip"
              effect="dark"
              :content="props.tipText || ``"
              popper-class="_ik_web_ui_file-help-tooltip"
            >
              <el-icon :size="23" class="_ik_web_ui_file_help_icon">
                <QuestionFilled />
              </el-icon>
            </el-tooltip>
          </span>
        </div>
        <IkSvgIcon name="iksvg_daoru" bg :size="24" :width="40" padding="0" />
      </div>
      <template #file="{ file }">
        <div class="ik-flie-list">
          <div class="name">
            <IkFileIcon
              v-if="
                !$slots.fileIcon &&
                (!customIconData[getFileType(file, mixDefaultField)] ||
                  !customIconData[getFileType(file, mixDefaultField)][
                    customIconFields['icon']
                  ])
              "
              :type="getFileType(file, mixDefaultField)"
            />
            <div
              v-else-if="
                !$slots.fileIcon &&
                customIconData[getFileType(file, mixDefaultField)] &&
                customIconData[getFileType(file, mixDefaultField)][
                  customIconFields['icon']
                ]
              "
            >
              <img
                v-if="
                  customIconData[getFileType(file, mixDefaultField)][
                    customIconFields['type']
                  ] === 'img'
                "
                :src="
                  customIconData[getFileType(file, mixDefaultField)][
                    customIconFields['icon']
                  ]
                "
                alt=""
                class="file-img-icon"
              />
              <span
                v-else
                :class="
                  customIconData[getFileType(file, mixDefaultField)][
                    customIconFields['icon']
                  ]
                "
                class="file-icon-size"
              ></span>
            </div>
            <div class="file-icon">
              <slot name="fileIcon" :file="file"></slot>
            </div>
            <div class="file-name-loading">
              <p class="file-name">
                {{ file[mixDefaultField.name] || file.name }}
                <span v-if="file.percentage && file.status === 'uploading'"
                  >({{ file.percentage }}%)</span
                >
              </p>
              <p class="file-size" v-if="file.status === 'success'">
                {{ formatNumber(file.size / 1024 / 1024) }}MB
              </p>
              <el-progress
                v-if="file.percentage && file.status === 'uploading'"
                text-inside
                :percentage="file.percentage"
                color="var(--el-color-primary)"
                :show-text="false"
              />
            </div>
          </div>
          <div v-if="!preview">
            <template v-if="file.status === 'success'">
              <IkSvgIcon
                @click="handPreview(file)"
                name="iksvg_yulan"
                title="预览"
                bg
                size="default"
              />
              <IkSvgIcon
                @click="handDelete(file)"
                error
                name="iksvg_shanchu"
                title="删除"
                bg
                size="default"
              />
            </template>

            <IkSvgIcon
              v-else
              @click="handDelete(file)"
              error
              name="iksvg_guanbi"
              size="default"
              bg
              title="取消上传"
            />
          </div>
          <template v-else>
            <el-icon
              title="预览"
              v-if="preview || file.percentage === 100"
              class="primary"
            >
              <View @click="handPreview(file)"></View>
            </el-icon>
            <el-icon title="下载" class="primary">
              <Download @click="handDownLoad(file)"></Download>
            </el-icon>
          </template>
        </div>
      </template>
    </el-upload>
  </template>
  <IkPreviewFileDialog
    v-model:show="officeVisible"
    :loadUrl="cLoadUrl"
    :file="fileData"
    :onlyofficeServer="cOnlyofficeConfig?.serverUrl || onlyofficeServer"
    :onlyOfficeConfig="cOnlyofficeConfig"
  />
</template>

<style lang="scss">
._ik_web_ui_file-help-tooltip {
  z-index: 9999 !important;
}
.ik-only-preview-dialog {
  .el-dialog.is-fullscreen {
    padding: 0;

    .el-dialog__body {
      max-height: 100vh !important;
      padding: 0;
    }
  }
}

.el-button {
  &:not(.is-disabled):hover {
    --ik-color-icon-dark: var(--ik-color-tag-primary);
    --ik-color-icon-light: var(--ik-color-icon-light-hover);
  }
}
</style>

<style lang="scss" scoped>
.tip {
  margin-left: 15px;
}

.ik-flie-list {
  display: flex;
  align-items: center;
  font-size: 14px;
  background-color: var(--ik-color-bg-page, #f5f8fa);
  padding: 8px 20px;
  justify-content: space-between;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: var(--ik-menu-active-bg, #eaeef2);
  }

  i {
    font-size: 18px;
  }
  .file-name {
    font-size: 12px;
  }
  .file-size {
    color: var(--ik-color-icon-dark);
    font-size: 12px;
  }
  .file-img-icon {
    width: 28px;
    height: 32px;
    border-radius: 4px;
    margin-right: 4px;
    position: relative;
    top: 2px;
  }

  .file-icon-size {
    font-size: 28px;
  }

  .file-icon {
    display: inline;
  }

  .file-icon:empty {
    display: none;
  }

  .name {
    display: flex;
    align-items: center;
    flex: 1;
    overflow: hidden;

    .file-name-loading {
      margin-left: 10px;
      position: relative;
      flex: 1;
      margin-right: 6px;
      overflow: hidden;

      p:first-child {
        margin-bottom: 2px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: calc(100% - 20px);
      }

      :deep(.el-progress) {
        .el-progress-bar {
          padding-top: 5px;
        }
      }
    }
  }

  svg {
    width: 40px;
    height: 40px;
  }
}

.error {
  margin-left: 10px;
  vertical-align: middle;

  &:hover {
    color: var(--el-color-error);
  }
}

.primary:hover {
  color: var(--el-color-primary) !important;
  cursor: pointer;
}

.error:hover {
  color: var(--ik-error, #f1416c);
  cursor: pointer;
}

.ik-error-flie-list {
  display: flex;
  align-items: center;
  font-size: 12px;
  padding: 8px 20px;
  justify-content: space-between;
  border-radius: 6px;
  background: var(--el-color-error-light-8) !important;
  margin: 5px 0px;

  .name {
    display: flex;
    align-items: center;

    .file-name-loading {
      margin-left: 10px;
      position: relative;
      flex: 1;
      margin-right: 20px;
      // overflow: hidden;

      p {
        line-height: 24px;

        &:first-child {
          margin-bottom: 2px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: calc(100% - 20px);
        }
      }
    }
  }

  i {
    font-size: 18px;
  }

  .info {
    color: var(--ik-error, #f1416c);
  }
}

.ik-file-upload {
  width: 100%;
  .el-icon {
    margin-left: 8px;
    color: var(--el-color-info);

    &:hover {
      color: var(--el-color-primary, #409eff);
    }

    &._ik_web_ui_file_help_icon {
      top: 5px;
    }
  }

  &.preview {
    :deep(.el-upload) {
      display: none;
    }
  }

  p {
    margin: 0;
    padding: 0;
    //line-height: 1.5;
  }
}

.ik-file-pload-card {
  width: 100%;
  background-color: var(--ik-color-bg-page);
  display: flex;
  border-radius: var(--ik-border-radius-l);
  flex-direction: column;
  border: 1px solid transparent;
  transition: all 0.25s;

  :deep(.el-upload) {
    padding: var(--ik-margin-m-24) var(--ik-margin-s-20);
  }

  // 清新模式
  &.plain {
    background-color: var(--ik-color-bg-page-content);
    box-shadow: 0 0 18px 0 var(--ik-color-divider);
    border: 1px solid var(--ik-color-divider);
    &:hover {
      --ik-color-bgicon-dark: var(--ik-color-tag-primary);
      --ik-color-bgicon-light: var(--ik-color-icon-light-hover);
      --ik-color-bg-icon: var(--ik-color-bg-button-secondary-hover);
    }
  }

  .el-icon {
    margin-left: 8px;
    color: var(--el-color-info);

    &:hover {
      color: var(--el-color-primary, #409eff);
    }

    &._ik_web_ui_file_help_icon {
      top: 5px;
    }
  }

  &:hover {
    --ik-color-icon-dark: var(--ik-color-tag-primary);
    --ik-color-icon-light: var(--ik-color-icon-light-hover);
    background-color: var(--ik-color-bg-page-content);
    border: 1px solid var(--ik-theme-color);

    .ik-flie-list {
      background-color: var(--ik-color-bg-page);
    }
  }

  :deep(.el-upload) {
    width: 100%;

    .card {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        display: flex;
        align-items: center;
        font-size: var(--ik-font-size-t5);

        span {
          color: var(--ik-color-font-normal);
          padding-left: 8px;

          .tip {
            color: var(--ik-color-warning);
            padding: 0;
            font-size: 12px;
          }
        }
      }
    }
  }

  :deep(.el-upload-list) {
    margin: 0;
  }

  .ik-flie-list {
    margin: 0 8px;
    background-color: var(--ik-color-bg-page-content);
    margin-top: var(--ik-margin-s-16);
    transition: background-color 0.25s;
    will-change: background-color;

    &:hover {
      background-color: var(--ik-color-bg-button-secondary-hover);
    }
  }
}
</style>
