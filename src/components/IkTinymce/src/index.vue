<!--
 * @Author: wfl
 * @LastEditors: zqf
 * @description: tinymce文档地址 https://www.tiny.cloud/docs/tinymce/6/basic-setup/
 * @updateInfo:
 * @Date: 2022-10-31 10:00:36
 * @LastEditTime: 2024-05-29 09:24:52
-->
<script lang="ts" setup name="IkTinymce">
import { ref, watch, onMounted, defineProps, defineEmits, computed } from "vue";
import axios from "axios";
import tinymce from "tinymce/tinymce";
import { ikDom } from "iking-utils-pro";

import TinymceEditor from "@tinymce/tinymce-vue";
import "tinymce/icons/default/icons";
import "tinymce/models/dom";
import "tinymce/plugins/autolink";
import "tinymce/plugins/autoresize";
import "tinymce/plugins/code";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/image";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/link";
import "tinymce/plugins/lists";
import "tinymce/plugins/media";
import "tinymce/plugins/preview";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/table";
import "tinymce/plugins/wordcount";
import "tinymce/themes/silver/theme";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  setting: {
    type: Object,
    default: () => {},
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  minHeight: {
    type: Number,
    default: 250,
  },
  maxHeight: {
    type: Number,
    default: null,
  },
  // 是否折叠
  collapse: {
    type: Boolean,
    default: false,
  },
  // 具体查看tinymce的文档说明
  plugins: {
    type: String,
    default:
      "autolink autoresize fullscreen image insertdatetime link lists media preview table wordcount code searchreplace",
  },
  // 具体查看tinymce的文档说明
  toolbar: {
    type: String,
    default:
      "undo redo | blocks | fontfamily fontsize | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor removeformat | link table insertdatetime searchreplace | preview code fullscreen",
  },
  branding: {
    type: Boolean,
    default: false,
  },
  menubar: {
    type: Boolean,
    default: false,
  },
  // 将目标元素作为副文本渲染
  selector: {
    type: String || null,
    default: null,
  },
  // 图片上传回调函数
  callback: {
    type: Function,
    default: null,
  },
  // 允许的最大图片大小 MB
  size: {
    type: Number,
    default: 2,
  },
  // 文件地址
  uploadUrl: {
    type: String,
    default: "",
  },
  // 文件显示服务地址
  loadUrl: {
    type: String,
    default: "",
  },
  // 图片上传请求头
  header: {
    type: Object,
    default: () => {},
  },
});

const emit = defineEmits(["update:modelValue"]);

const isLight = ikDom.getDomDataset(null, "theme") === "light";

const defaultSetting = ref({
  license_key: "gpl",
  font_size_input_default_unit: "px",
  font_size_formats: '8px 10px 12px 14px 16px 18px 20px 22px 24px 26px 28px 36px 48px 72px',
  language_url: "tinymce/langs/zh-Hans.js",
  font_family_formats: "系统字体=Source Han Sans CN Medium;宋体=SimSun;sans-serif;微软雅黑=Microsoft YaHei; Helvetica; Tahoma; Arial",
  language: "zh-Hans",
  skin_url: isLight ? "tinymce/skins/ui/oxide" : "tinymce/skins/ui/oxide-dark",
  content_css: isLight
    ? "tinymce/skins/content/default/content.min.css"
    : "tinymce/skins/content/dark/content.min.css",
  min_height: props.minHeight,
  max_height: props.maxHeight,
  selector: props.selector,
  plugins: props.plugins,
  toolbar: props.toolbar,
  branding: props.branding,
  menubar: props.menubar,
  toolbar_mode: "sliding",
  insertdatetime_formats: [
    "%Y年%m月%d日",
    "%H点%M分%S秒",
    "%Y-%m-%d",
    "%H:%M:%S",
  ],
  // images_upload_handler: (blobInfo: any) =>
  //   new Promise(resolve => {
  //     const img = `data:image/jpeg;base64,${blobInfo.base64()}`
  //     resolve(img)
  //   })
  // 图片上传
  images_upload_handler: (
    blobInfo: any,
    succFun: any,
    reject: any,
    progress: any
  ) => {
    return new Promise((resolve, reject) => {
      // 自定义回调函数
      if (props.callback) {
        props.callback(blobInfo, progress).then((res: any) => {
          resolve(res);
        });
        return;
      }
      // 默认处理
      if (blobInfo.blob().size / 1024 / 1024 > props.size) {
        reject(new Error(`上传错误，图片大小请控制在 ${props.size}M 以内`));
      } else {
        if (!props.uploadUrl) {
          reject(new Error("请传入uploadUrl"));
          return;
        }
        const params = new FormData();
        params.append("file", blobInfo.blob());

        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
            ...props.header,
          },
        };
        axios
          .post(props.uploadUrl, params, config)
          .then((res) => {
            if (res.data.code === 0) {
              resolve(props.loadUrl + res.data.data.id);
            } // 上传成功，在成功函数里填入图片路径
            else {
              reject(new Error(`HTTP Error: 上传失败${res.data.code}`));
            }
          })
          .catch(() => {
            reject(new Error("上传出错，服务器开小差了呢"));
          });
      }
    });
  },
});

const tinyValue = ref(props.modelValue);

const completeSetting = computed(() => {
  return Object.assign(defaultSetting.value, props.setting);
});

watch(
  () => tinyValue.value,
  (newValue) => {
    emit("update:modelValue", newValue);
  }
);

watch(
  () => props.modelValue,
  (newValue) => {
    tinyValue.value = newValue;
  }
);

const maxHeightstyle = computed(
  () => `${props.collapse ? 50 : props.maxHeight}px`
);

onMounted(() => {
  tinymce.init({});
});
</script>

<template>
  <div class="editor">
    <TinymceEditor
      v-model="tinyValue"
      :init="completeSetting"
      :disabled="disabled"
    />
  </div>
</template>

<style lang="scss" scoped>
:deep(.tox-tinymce) {
  max-height: v-bind(maxHeightstyle);
  border-radius: 4px;
}
</style>
<style>
.tox-fullscreen {
  z-index: 2000 !important;
}
</style>
