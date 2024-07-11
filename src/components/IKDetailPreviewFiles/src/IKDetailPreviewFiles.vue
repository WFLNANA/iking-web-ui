<!--
 * @Author: zdl
 * @LastEditors: zdl
 * @description: 
 * @updateInfo: 内容:详情下的预览文件
 * @Date: 2023-12-11 16:06:36
 * @LastEditTime: 2024-01-02 10:50:49
-->

<script lang="ts" setup name="IKDetailPreviewFile">
import { ref, watch } from "vue";
import { IkPreviewFile } from "@iking-ui/components";
import { ikUrl } from 'iking-utils-pro'
import "../../../assets/font/iconfont.css";
import { IkSvgIcon } from "@iking-ui/components";
const props = defineProps({
  // 文件列表 [{originName:'',path:'',fileSize:''}] //文件大小
  fileList: {
    type: Array,
    default: () => [],
  },
  // 文件类型 (文件--file 还是图片---img)
  fileType: {
    type: String,
    default: "file",
  },
  fileWidth: {
    type: String,
    default: "100%",
  },
  // url为文件全路径（以http开头）时，不需要传递
  loadUrl: {
    type: String,
    default: "",
  },
  // kkFile的地址   预览地址
  kkUrl: {
    required: true,
    type: String,
    default: "",
  },
});

// 文件列表
const fileList: any = ref(props.fileList);

// 图片的预览
watch(
  () => props.fileList,
  (val) => {
    if (val) {
      fileList.value = val;
    }
  },
  { immediate: true }
);
// 是否显示
const visible = ref(false);
const objFile = ref<any>({});
// 预览
const handlePreview = (row: any) => {
  objFile.value = {
    url: row.url,
    name: row.name, // row.originName
  };
  visible.value = true;
};

// iconfont 的获取
const handleGetIcon = (item: any) => {
  if (item?.suffix?.includes("pdf")) return "iksvg_pdf";
  else if (item?.suffix?.includes("doc")) return "iksvg_word";
  else if (item?.suffix?.includes("xls")) return "iksvg_excel";
  else if (item?.suffix?.includes("mov")) return "iksvg_mov";
  else if (item?.suffix?.includes("zip")) return "iksvg_zip";
  else return "icon-jpg";
};
// iconfont 的颜色
const handleGetColor = (item: any) => {
  if (item?.suffix?.includes("pdf")) return "#FA4E4E";
  else if (item?.suffix?.includes("doc")) return "#2c69e0";
  else if (item.suffix?.includes("xls")) return "#39BFBF";
  else if (item.suffix?.includes("txt")) return "#2c69e0";
  else if (item.suffix?.includes("zip")) return "#FF9000";
  else return "#32CD79";
};

// 下载
const handleDownloadFiles = (row: any) => {
  const element = document.createElement("a");
  element.href = ikUrl.assembleUrl(props.loadUrl, row.url);
  element.download = row.name;
  element.click();
};
</script>

<template>
  <div>
    <div v-if="props.fileType === 'file'" class="preview-files">
      <div
        v-for="(item, index) of fileList"
        :key="index"
        class="files-item"
        :style="{
          width: props.fileWidth,
          'margin-right': props.fileWidth === '100%' ? '0px' : '',
        }"
      >
        <div class="flex" style="width: 80%; align-items: center">
          <IkSvgIcon
            :name="handleGetIcon(item)"
            :style="`color:${handleGetColor(item)}`"
            :size='36'
          ></IkSvgIcon>
          <div class="file-name" @click="handleDownloadFiles(item)">
            <p :title="item.name">{{ item.name }}</p>
            <p style="color: #b8c6d9">{{ (item.size / 1024).toFixed(2) }}KB</p>
          </div>
        </div>
        <div class="file-preview" @click="handlePreview(item)">
          <IkSvgIcon name="iksvg_yulan"></IkSvgIcon>
          <span>预览</span>
        </div>
      </div>
    </div>
    <div v-if="props.fileType === 'img'" class="flex preview-img">
      <div v-for="(item, index) of fileList" :key="index" class="preview-img">
        <el-image
          class="show-img"
          :src="loadUrl + item.url"
          :preview-src-list="[loadUrl + item.url]"
          fit="cover"
        />
      </div>
    </div>

    <IkPreviewFile
      v-model="visible"
      :load-url="props.loadUrl"
      :url="objFile?.url"
      :kk-url="kkUrl"
      :file-name="objFile?.name"
    />
  </div>
</template>

<style scoped lang="scss">
.preview-files {
  display: flex;
  flex-wrap: wrap;
  .flex{
    display:flex;
  }
  p{
    margin:0px;
  }
  .files-item {
    display: flex;
    justify-content: space-between;
    margin: 8px 8px 8px 0;
    background: var(--ik-color-bg-icon);
    padding: 16px 16px 10px;
    align-items: center;
  }

  .file-name {
    display: block;
    line-height: 20px;
    margin-left:8px;
    width: calc(100% - 40px);
    cursor: pointer;

    p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    p:last-child {
      font-size: 14px;
    }

    &:hover {
      color: var(--el-color-primary);
    }
  }

  .file-preview {
    color: var(--el-color-primary);
    cursor: pointer;  

    span {
      margin-left: 8px;
    }
  }

  .icon {
    font-size: 40px;
    margin-right: 8px;
    color: var(--el-color-primary);
  }
}

.preview-img {
  margin: 4px 4px 0 0;
  flex-wrap: wrap;

  .show-img {
    width: 100px;
    object-fit: contain;
    height: 100px;
  }
}
</style>
