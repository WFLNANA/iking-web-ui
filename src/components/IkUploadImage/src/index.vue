<!--
 * @Author       : wfl
 * @LastEditors: fj
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2023-06-08 12:14:27
 * @LastEditTime: 2024-07-03 15:52:11
-->
<script lang="ts" setup name="IkUploadImage">
import { PropType, computed, ref, Ref, watch } from "vue";
import {
  ElUpload,
  ElIcon,
  ElImage,
  ElImageViewer,
  ElMessage,
} from "element-plus";
import type { UploadFile, UploadFiles, UploadUserFile } from "element-plus";
import {
  Delete,
  Download,
  ZoomIn,
  Refresh,
  Close,
} from "@element-plus/icons-vue";
import { _, ikFile } from "iking-utils-pro";
import LoadingCom from "./loading.vue";
import { IkSvgIcon } from "@iking-ui/components";
import useProvider from "@iking-ui/utils/use-provider";

const props = defineProps({
  // 显示的文字
  title: {
    type: String,
    default: "上传图片",
  },
  // 预览地址
  loadUrl: {
    type: String,
    default: "",
  },
  // 上传地址
  action: {
    type: String,
    default: "",
  },
  // 设置上传的请求头部
  headers: {
    type: Object,
    default: () => {},
  },
  // 上传时附带的额外参数
  data: {
    type: Object,
    default: () => {},
  },
  // 最多上传图片数量
  limit: {
    type: Number,
    default: 50,
  },
  // 单张图片大小 MB
  size: {
    type: Number,
    default: 50,
  },
  // 允许的图片格式
  // image/* 或者 image/png, image/jpeg 或者.png, .jpg, .jpeg格式都可以
  accept: {
    type: String,
    default: "image/*",
  },
  // 图片填充方式
  fit: {
    type: String as PropType<
      "contain" | "fill" | "cover" | "none" | "scale-down"
    >,
    default: "contain",
  },
  // 预览模式 - 为true时不显示上传元素
  preview: {
    type: Boolean,
    default: false,
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
  // 禁用
  disabled: {
    type: Boolean,
    default: false,
  },
});

const modelValue = defineModel({
  type: Array as PropType<Array<{ url: string } | UploadFile>> | string,
  default: () => [],
}) as Ref<any>;

const formatVlaue = (val) => {
  return Array.isArray(val)
    ? val.map((v) => {
        const isUrl = v.url?.startsWith("http") || v.url?.startsWith("blob");
        const url = v?.url || v;
        return {
          ...(v.url ? v : { url: url }),
          __url: isUrl ? url : `${cLoadUrl.value}${url}`,
        };
      })
    : val
    ? [
        {
          url: val,
          __url:
            val?.startsWith("http") || val?.startsWith("blob")
              ? val
              : `${cLoadUrl.value}${val}`,
        },
      ]
    : [];
};
watch(
  () => modelValue.value,
  (val) => {
    if (!val || !val.length) {
      fileList.value = [];
    } else {
      fileList.value = _.cloneDeep(formatVlaue(val));
    }
  },
  { deep: true }
);

const emit = defineEmits<{
  (e: "delete", file: UploadFile): void;
  (e: "success", response: any, file: UploadFile, files: UploadFiles): void;
}>();

const { cLoadUrl, cUploadUrl } = useProvider(props);

const sizeLimit = computed(() => props.size);
const refUpload: Ref<{
  handleStart: Function;
  submit: Function;
  abort: Function;
  handleRemove: Function;
} | null> = ref(null);
const fileList = ref(formatVlaue(modelValue.value));
const errorList = ref<Array<any>>([]);
const showViewer = ref(false);
const currentIndex = ref(0);
const tipContent = computed(
  () =>
    props.tipText ||
    `最多可上传${props.limit}张图片, 每张图片不能超过${props.size}MB`
);

const handleChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  // fileList.value = _.cloneDeep(formatVlaue(uploadFiles));
};

const beforeUpload = (file: File) => {
  const isJPG = file.type.includes("image");
  if (!isJPG) {
    ElMessage.warning(`只允许上传图片!`);
    try {
      fileList.value.pop();
    } catch (e) {}
    return false;
  }
  const isLtSize = file.size / 1024 / 1024 < sizeLimit.value;
  if (!isLtSize) {
    ElMessage.warning(`图片大小超出限制!`);
    try {
      fileList.value.pop();
    } catch (e) {}
    return false;
  }
  return true;
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
  while (num < canLen && num < files?.length) {
    refUpload.value?.handleStart(files?.[num]);
    refUpload.value?.submit();
    num++;
  }
};

const handSuccess = (
  response: any,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  emit("success", response, uploadFile, uploadFiles);
  modelValue.value = fileList.value//.filter((item) => item.status === "success");
};

const handError = (
  error: Error,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  errorList.value.push({
    ...uploadFile,
    __url: uploadFile.url,
  });
};

// 预览
const handPreview = (file: UploadFile) => {
  showViewer.value = true;
  currentIndex.value = modelValue.value?.findIndex((it) => it.url === file.url);
};
// 下载
const handDownLoad = (file: UploadFile) => {
  // window.open(file.url)
  ikFile.downloadByOnlineUrl(file.__url || file.url, file.name);
};
// 取消上传
const handAbort = (file: UploadFile) => {
  refUpload.value?.abort(file);
};
// 删除
const handDelete = (file: UploadFile) => {
  if (file.status !== "success") handAbort(file);
  // refUpload.value?.handleRemove(file);
  modelValue.value = fileList.value?.filter((v: any) => v.uid !== file.uid);
  emit("delete", file);
};

const handRemoveError = (file: UploadFile, index: number) => {
  errorList.value.splice(index, 1);
};

const canAddImage = computed(() => {
  return fileList.value.length + errorList.value.length < props.limit;
});

const isDisabled = computed(
  () => modelValue.value.length >= props.limit || props.disabled
);

</script>

<template>
  <el-upload
    class="ik-image-upload" 
    ref="refUpload"
    list-type="picture-card"
    :class="{ preview: preview, 'hide-upload': !canAddImage, 'disabled':isDisabled}"
    :accept="accept"
    :action="cUploadUrl"
    :headers="headers"
    :data="data"
    v-model:file-list="fileList"
    :multiple="multiple"
    :limit="limit"
    :on-change="handleChange"
    :before-upload="beforeUpload"
    :before-remove="beforeRemove"
    :on-exceed="handExceed"
    :on-success="handSuccess"
    :on-error="handError"
    drag
    v-bind="$attrs"
    :disabled="isDisabled"
  >
    <template #trigger>
      <slot v-if="$slots.trigger" name="trigger"></slot>
      <div v-else class="upload-btn">
        <el-icon :size="20">
          <IkSvgIcon name="iksvg_guanbibeifen" :disabled="isDisabled" />
        </el-icon>
        <span>{{ title }}</span>
      </div>
    </template>
    <template #tip v-if="tip">
      <span class="tip">{{ tipContent }}</span>
    </template>
    <template #file="{ file }">
      <div
        class="load-list"
        :class="{ loading: file.status === 'uploading' }"
        element-loading-background="var(--ik-upload-bg)"
      >
        <div class="loading-statu" v-show="file.status === 'uploading'">
          <LoadingCom />
          上传{{ file.percentage }}%
        </div>
        <!-- <img :src="file.url" alt="" :style="{ 'object-fit': fit }" /> -->
        <el-image
          style="width: 100%; height: 100%"
          :src="file.__url || file.url"
          :zoom-rate="1.2"
          :initial-index="0"
          fit="contain"
        />
        <span class="operate-btn">
          <span>
            <el-icon @click="handPreview(file)"><zoom-in /></el-icon>
          </span>
          <span>
            <el-icon @click="handDownLoad(file)">
              <Download />
            </el-icon>
          </span>
          <span v-if="!preview">
            <el-icon type="warning" @click="handDelete(file)">
              <Delete />
            </el-icon>
          </span>
        </span>
      </div>
    </template>
    <ul class="el-upload-list el-upload-list--picture-card" style="float: left">
      <li
        class="el-upload-list__item"
        v-for="(item, index) in errorList"
        :key="item.uid"
      >
        <span>
          <el-icon @click="handRemoveError(item, index)">
            <Close />
          </el-icon>
        </span>
        <div
          class="load-list"
          :class="{
            loading: item.status === 'uploading',
            fail: item.status === 'fail',
          }"
          element-loading-background="var(--ik-upload-bg)"
        >
          <div
            class="loading-statu"
            @click="handRetryUpload(item, index)"
            v-show="item.status === 'fail'"
          >
            <el-icon :size="24">
              <Refresh />
            </el-icon>
            <span class="error">上传错误</span>
            <p>点击重新上传</p>
          </div>
          <img :src="item.__url" alt="" :style="{ 'object-fit': fit }" />
        </div>
      </li>
    </ul>
  </el-upload>
  <!-- 文件预览 -->
  <div class="demo-image__preview">
    <el-image-viewer
      lock-scroll
      hide-on-click-modal
      @close="
        () => {
          showViewer = false;
        }
      "
      v-if="showViewer"
      :url-list="formatVlaue(fileList).map((it) => it.__url)"
      :initial-index="currentIndex"
    />
  </div>
</template>

<style lang="scss" scoped>
.ik-image-upload {
  display: inline-flex;
  position: relative;
 

  &.hide-upload {
    :deep(.el-upload) {
      display: none;
    }
  }

  .tip {
    position: absolute;
    bottom: -19px;
    font-size: 14px;
    color: var(--el-color-info);
  }

  &.preview {
    :deep(.el-upload) {
      display: none;
    }
  }

  :deep(.el-upload--picture-card) {
    --el-upload-picture-card-size: 106px;
    --el-fill-color-lighter: var(--ik-color-bg-page);
    border-color: transparent;
    border-style: solid;
    transition: all 0.3s;

    &.el-upload {
      --el-upload-dragger-padding-horizontal: 36px;
      margin: 0 8px 8px 0;

      .el-upload-dragger {
        border: none;
        background-color: transparent;

        .el-icon {
          margin-bottom: 5px;
        }
      }

      &:not(.is-disabled):hover {
        --el-fill-color-lighter: transparent;
        .upload-btn {
          color: var(--el-color-primary);

          i {
            color: var(--el-color-primary);
          }
        }
      }

      .upload-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        color: var(--el-text-color-secondary);
      }
    }

  }

  :deep(.el-upload-list--picture-card) {
    --el-upload-list-picture-card-size: 106px;
    flex-direction: row-reverse;

    .upload-btn{
      color: var(--el-text-color-secondary) !important;
    }

    &.is-disabled .el-upload--picture-card{
      opacity: 0.55;
      cursor: not-allowed !important;
      --el-fill-color-lighter: var(--ik-color-bg-page) !important;
      .el-upload-dragger{
        pointer-events: none;
      }
    }

    &:not(.is-disabled) .el-upload--picture-card:hover {
      --el-fill-color-lighter: var(--ik-color-font-reverse);
      --ik-color-icon-dark: var(--ik-color-tag-primary);
      --ik-color-icon-light: var(--ik-color-icon-light-hover);
      border-color: var(--el-color-primary);
    }

    .el-upload-list__item {
      border: none;
      background-color: var(--el-bg-color-page);
      overflow: hidden;

      & > span {
        position: absolute;
        right: 2px;
        top: 3px;
        z-index: 2;
        background: var(--el-color-error);
        display: flex;
        border-radius: 50%;
        padding: 3px;
        font-size: 11px;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.35s;

        &:hover {
          transform: rotate(180deg);
          opacity: 0.9;
        }
      }
    }
  }

  .load-list {
    --el-upload-picture-card-size: 106px;
    width: var(--el-upload-picture-card-size);
    height: var(--el-upload-picture-card-size);
    overflow: hidden;

    .loading-statu {
      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      box-shadow: 0 0 140px 140px var(--el-overlay-color-lighter) inset; //var(--ik-upload-bg);
      z-index: 1;
      border-radius: 6px;

      svg {
        width: 26px;
        height: 26px;
        fill: var(--el-color-primary);
        animation: rotate 2s linear infinite;
      }
    }

    .operate-btn {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.35s;
      border-radius: 4px;
      overflow: hidden;
    }

    &:hover {
      .operate-btn {
        box-shadow: 0 0 150px 150px var(--el-overlay-color-lighter) inset;
        color: #fff;
        font-size: 18px;
        // top: 0;
        z-index: 1;
        width: 100%;
        height: 100%;

        i {
          cursor: pointer;
          margin: 0 5px;

          &:hover {
            color: var(--el-color-primary);
          }
        }
      }

      img {
        filter: blur(2px);
      }
    }

    &.loading {
      img {
        filter: blur(2px);
      }

      .loading-statu {
        box-shadow: 0 0 140px 140px var(--el-overlay-color-lighter) inset; //var(--ik-upload-bg);

        svg {
          fill: var(--el-color-primary);
        }
      }
    }

    &.fail {
      img {
        filter: blur(0);
      }

      .loading-statu {
        box-shadow: 0 0 140px 140px var(--ik-error-shadow-bg) inset;
        line-height: 2;
        color: var(--ik-color-font-reverse);
        border-radius: 6px;
        background: #f1416d57;
        border: 1px dashed #f1416c;
        cursor: pointer;
        transition: all 0.25s;

        &:hover {
          background: #f1416d6b;
        }

        svg {
          animation: none;
        }

        p {
          margin: 0;
          padding: 0;
        }

        .el-button.is-link {
          color: var(--ik-color-font-reverse);

          &:hover {
            color: var(--color-primary);
          }
        }

        // .error {
        //   color: var(--el-color-error);
        // }
      }
    }

    @keyframes rotate {
      /* 定义动画 */
      from {
        transform: rotate(0);
      }

      to {
        transform: rotate(360deg);
      }
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
