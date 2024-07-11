<!--
 * @Author       : wfl
 * @LastEditors: fj
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2023-08-31 15:30:45
 * @LastEditTime: 2024-06-25 12:26:17
-->
<script setup lang="ts" name="IkPreviewFile">
import { computed, ref, Ref, reactive, PropType, watch, nextTick } from "vue";
import { setFileUrl } from "@iking-ui/utils/math";
import { IkBaseDialog, IkOnlyOffice, IkPlayer } from "@iking-ui/components";
import { buildUUID } from "iking-utils-pro";
import { getFileTypes, getFileType } from "@iking-ui/utils/file";

const props = defineProps({
  file: {
    type: Object as PropType<{
      url: string;
      name?: string;
      suffix?: string;
      size?: number;
    }>,
    default: () => [],
  },
  // url为文件全路径（以http开头）时，不需要传递
  loadUrl: {
    type: String,
    default: "",
  },
  // 需要onlyoffice预览的文件类型 - 0.2.3版本后可不填
  onlyOfficeAccept: {
    type: String,
    default: ".pdf,.docx,.doc.ppt,.pptx,.xlsx,.xls,",
  },
  // onlyoffice服务地址 - 0.2.3版本后可不填
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
  field: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const show = defineModel("show", { default: false });

const fixFields = computed(() => {
  return {
    name: "name",
    url: "url",
    suffix: "suffix",
    size: "fileSize",
    ...props.field,
  };
});
const config: Ref<any | null> = ref(null);
const fileData: Ref<any | null> = ref(null);
const modal = reactive({
  image: false,
  office: false,
  video: false,
});

const priview = (file: any) => {
  try {
    const __file = file?.response?.data || file;
    const url =
      __file[fixFields.value.url] || __file?.id || __file.attachmentId;
    const suffix = (
      __file[fixFields.value.suffix] || __file.attachmentSuffix
    )?.toLowerCase();
    const name =
      __file[fixFields.value.name] ||
      __file?.attachmentName ||
      __file?.originName;

    fileData.value = {
      ...file,
      name: file[fixFields.value.name],
      url: setFileUrl(props.loadUrl, url),
    };

    if (file && getFileType(file, fixFields.value) === "image") {
      modal.image = true;
      return;
    } else if (file && getFileType(file, fixFields.value) === "video") {
      modal.video = true;
      return;
    }  else {
      const _accept = props.onlyOfficeConfig?.accept || props.onlyOfficeAccept;
      if (_accept.includes(suffix)) {
        modal.office = true;
        config.value = {
          ...props.onlyOfficeConfig,
          editorConfig: {
            ...(props.onlyOfficeConfig?.editorConfig || {}),
            customization: {
              ...(props.onlyOfficeConfig?.editorConfig?.customization || {}),
              review: {
                reviewDisplay: "final",
              },
            },
          },
          document: {
            key: buildUUID(),
            title: name,
            url: setFileUrl(props.loadUrl, url),
            fileType: suffix,
            ...(props.onlyOfficeConfig?.document || {}),
          },
          documentType: getFileTypes(suffix),
        };
        return;
      }
    }
  } catch (e) {
    console.info("预览错误: ", e);
  }
};

watch([show, props.file], ([bool, file]) => {
  if (bool) {
    nextTick(() => {
      priview(props.file);
    });
  }
});


const handleClose = () => {
  show.value = false;
  modal.office = false;
  modal.image = false;
  modal.video = false;
  fileData.value = null;
};
</script>
<template>
  <template v-if="show">
    <el-image-viewer
      v-if="fileData?.url && modal.image"
      @close="handleClose()"
      ref="previewImgRef"
      :url-list="[fileData?.url]"
      teleported
    >
    </el-image-viewer>
<!--    <IkPreviewVideo :file="fileData" v-model:show="modal.video" />-->
    <!-- 文档类 -->
    <IkPlayer v-model="modal.video" :url="fileData?.url" />
    <IkBaseDialog
      v-model="modal.office"
      draggable
      no-footer
      no-header
      fullscreen
      show-close-bg
      destroy-on-close
      close-on-click-modal
      :close-on-press-escape="false"
      append-to-body
      @close="handleClose"
      modal-class="ik-only-preview-dialog"
    >
      <IkOnlyOffice
        :config-options="config"
        :document-server-url="onlyOfficeConfig?.serverUrl || onlyofficeServer"
      />
    </IkBaseDialog>
  </template>
</template>

<style lang="scss">
.ik-only-preview-dialog {
  .el-dialog.is-fullscreen {
    padding: 0;

    .el-dialog__body {
      max-height: 100vh !important;
      padding: 0;
    }
  }
}
</style>