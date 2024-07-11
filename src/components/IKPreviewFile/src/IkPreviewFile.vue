<!--
 * @Author       : wfl
 * @LastEditors: fj
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2023-08-31 15:30:45
 * @LastEditTime: 2024-07-10 10:41:54
-->
<script setup lang="ts">
import { computed, ref, Ref } from "vue";
import { IkSvgIcon } from "@iking-ui/components";
import { formatFileSize, setFileUrl } from "@iking-ui/utils/math";
import { ikFile, paramType } from "iking-utils-pro";
import { IkFileIcon } from "@iking-ui/components";
import { IkPreviewFileDialog } from "@iking-ui/components";
import useProvider from "@iking-ui/utils/use-provider";

const props = defineProps({
  list: {
    type: Array<any>,
    default: () => [],
  },
  // 文件地址 http://192.168.2.171/api/server/oss/download?fileUrl=
  url: {
    required: true,
    type: String,
    default: "",
  },
  // url为文件全路径（以http开头）时，不需要传递
  loadUrl: {
    type: String,
    default: "",
  },
  field: {
    required: true,
    type: Object,
    default: () => {
      return {};
    },
  },
  // 图标大小
  iconSize: {
    type: Number,
    default: 40,
  },
  // 显示背景色
  showBg: {
    type: Boolean,
    default: true,
  },
  // 宽度
  width: {
    type: Number || String,
    default: "100%",
  },
  // 图标hover时才显示
  iconHoverShow: {
    type: Boolean,
    default: false,
  },
  // 是否需要onlyoffice预览
  isOnlyOfficePreview: {
    type: Boolean,
    default: true,
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
  // 简单模式
  simple: {
    type: Boolean,
    default: false,
  },
});

const { cLoadUrl, cOnlyofficeConfig } = useProvider(props);

const fixFields = computed(() => {
  return {
    name: "name",
    url: "url",
    suffix: "suffix",
    size: "size",
    ...props.field,
  };
});
const fileData: Ref<any | null> = ref({});
const dialogVisible = ref(false);
const priview = (file: any) => {
  fileData.value = {
    ...file,
    name: file.name,
    url: setFileUrl(
      cLoadUrl.value,
      file.url || file?.response?.data?.id || file?.id
    ),
  };
  dialogVisible.value = true;
};
const download = (file: any) => {
  ikFile.downloadFile(
    setFileUrl(
      cLoadUrl.value,
      file[fixFields.value.url] || file.attachmentId || file.id
    ),
    file[fixFields.value.name] || file.attachmentName
  );
};
const cardWidth = computed(() => {
  return paramType.isNumber(props.width) ? `${props.width}px` : props.width;
});
const fileList = computed(() => {
  return props.list.map((item: any) => {
    return {
      ...item,
      name: item[fixFields.value.name] || item.attachmentName,
      size: item[fixFields.value.size] || item.fileSize || item.attachmentSize,
      suffix: item[fixFields.value.suffix] || item.attachmentSuffix,
    };
  });
});
</script>

<template>
  <template v-if="list?.length">
    <template v-if="simple">
      <div
        class="iking-privew-annex simple"
        v-for="(file, findex) in fileList"
        @click="priview(file)"
        :style="{ width: cardWidth }"
      >
        <div class="fileName simple">
          {{ file.name }}
        </div>
        <div class="flex flex-center" :class="{ 'hover-show': iconHoverShow }">
          <IkSvgIcon
            name="iksvg_daochu"
            @click.stop="download(file)"
            :size="20"
            active
          />
          <IkSvgIcon name="iksvg_yulan" :size="20" active />
          <slot name="operation" :data="{ ...file, findex }"></slot>
        </div>
      </div>
    </template>
    <tmplate v-else>
      <div
        class="iking-privew-annex"
        :class="{ 'is-bg': showBg }"
        v-for="(file, findex) in fileList"
        :key="findex"
        :style="{
          marginBottom: findex == list?.length - 1 ? '0' : '10px',
          width: cardWidth,
        }"
      >
        <div class="file-card" @click="priview(file)">
          <IkFileIcon
            :file="file"
            :style="{ height: `${iconSize}px` }"
            class="ikui-w-auto"
            :fields="fixFields"
          />
          <div class="text">
            <div class="fileName">
              {{ file.name }}
            </div>
            <div class="size">
              {{ formatFileSize(file.size) }}
            </div>
          </div>
          <div
            class="flex flex-center"
            :class="{ 'hover-show': iconHoverShow }"
          >
            <IkSvgIcon
              name="iksvg_daochu"
              @click.stop="download(file)"
              :bg="showBg"
              :size="showBg ? 'default' : 20"
              title="下载"
            />
            <IkSvgIcon
              name="iksvg_yulan"
              :bg="showBg"
              :size="showBg ? 'default' : 20"
              title="预览"
            />
            <slot name="operation" :data="{ ...file, findex }"></slot>
          </div>
        </div>
      </div>
    </tmplate>
  </template>
  <IkPreviewFileDialog
    v-model:show="dialogVisible"
    :loadUrl="cLoadUrl"
    :file="fileData"
    :onlyofficeServer="cOnlyofficeConfig?.serverUrl || onlyofficeServer"
    :onlyOfficeConfig="cOnlyofficeConfig"
    :onlyOfficeAccept="cOnlyofficeConfig?.accept || onlyOfficeAccept"
  />
</template>

<style lang="scss">
.ik-file-preview-modal {
  z-index: 9000 !important;
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

.ik-file-preview.el-dialog {
  width: 100vw;
  height: 100vh;
  margin: 0;
  background: transparent;

  .el-dialog__header {
    position: absolute;
    right: -13px;
    top: -5px;
    padding: 0;
    background-color: transparent;

    .el-dialog__headerbtn {
      font-size: 30px;

      .el-dialog__close {
        color: var(--el-color-primary-light-9);
        transition: all 0.25s linear;
        position: absolute;
        right: 20px;
        top: 20px;

        &:hover {
          color: var(--el-color-danger);
          transform: rotate(90deg);
        }
      }
    }
  }

  .el-dialog__body {
    width: 100% !important;
    height: 100% !important;
    max-height: 100% !important;
    padding: 0 !important;
    overflow: hidden;
    display: flex;
    justify-content: center;

    iframe {
      border-width: 0;
      width: calc(100% - 100px) !important;
      height: 100%;
      padding: 0;
      margin: 0;
      box-sizing: border-box;

      .viewer-open {
        background-color: transparent;
      }

      body {
        background-color: transparent;

        iframe {
          border-radius: 4px;
        }
      }
    }
  }
}

.iking-privew-annex {
  padding: 10px;
  border-radius: 10px;
  color: var(--el-text-color-secondary);
  display: flex;
  cursor: pointer;
  transition: background 0.25s;
  width: max-content;

  &.simple:hover {
    opacity: 0.8;
  }

  .fileName {
    padding-right: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: keep-all;
    word-wrap: normal;

    &.simple {
      color: var(--el-color-primary);
    }
  }

  &.is-bg {
    background: var(--el-bg-color-page);

    &:hover {
      background: var(--el-color-primary-light-9);
    }

    .file-card .text {
      flex: 1;
    }
  }

  &:hover {
    .hover-show {
      display: block;
    }
  }

  .hover-show {
    display: none;
  }

  .ikui-w-auto {
    width: auto;
  }

  .file-card {
    display: flex;
    flex: 1;
    align-items: center;
    overflow: hidden;
  }

  .icon {
    font-size: 50px;
    margin-right: 15px;
    flex: none;
  }

  .text {
    line-height: 25px;
    margin-right: 16px;
    overflow: hidden;

    .fileName {
      cursor: pointer;
      padding-right: 0;
    }

    .size {
      font-size: 12px;
    }
  }
}
</style>
