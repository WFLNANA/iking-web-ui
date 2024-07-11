<!--
 * @Author: fj
 * @LastEditors: zqf
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2023-05-08 15:59:00
 * @LastEditTime: 2024-06-07 13:37:54
-->
<template>
  <IkProviderConfig
      load-url="http://192.168.2.7/api/server/oss/download?fileUrl="
      upload-url="http://192.168.2.7/api/server/oss/upload"
      :onlyoffice-config="{serverUrl: 'http://192.168.1.82:8889'}"
  >
    <div class="web-ui-demo-container">
      <el-tabs v-model="activeName1" class="demo-tabs">
        <el-tab-pane label="全部" name="all">
          <div
              v-for="demo in demoList"
              :label="demo.name"
              :name="demo.name"
              class="demo-item"
          >
            <component :is="demo.name"></component>
          </div>
        </el-tab-pane>
        <el-tab-pane label="单独显示" name="single">
          <el-tabs
              v-model="activeName"
              class="demo-tabs"
              tab-position="left"
          >
            <el-tab-pane
                v-for="demo in demoList"
                :label="demo.name"
                :name="demo.name"
            >
              <component :is="demo.name"></component>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="流程" name="process">
          <DemoIkApproveTest />
        </el-tab-pane>
        <el-tab-pane label="流程详情" name="detail">
          <DemoIkApproveProcessTest/>
        </el-tab-pane>
        <el-tab-pane label="文件上传/预览" name="file">
          <DemoIkUploadFile />

          <DemoIkPreviewFile/>
        </el-tab-pane>
      </el-tabs>
      <!-- <IkPageFull :table-data="tableData" :fields="fields" />
      <IkUploadFile tip action="http://127.0.0.1:4523/m1/687531-0-default/upload/file" tip-text="只允许上传.xls、.doc文件，单个文件大小不能超过5M" /> -->

      <!-- <test /> -->
      <!-- <search /> -->
      <!-- <IKVerticalStepBar
        v-model:active="active"
        :list="menuList"
        :needClick="true"
      ></IKVerticalStepBar> -->
      <!-- <IKApprovalProcess :dataList="dataList"></IKApprovalProcess> -->
      <!-- <IKApprovalProcessDetail :dataList="detailList"></IKApprovalProcessDetail> -->
      <!-- <process></process> -->
      <!-- <approval></approval> -->
      <!-- <calendar @success="submit"  @delete="handleDelete"></calendar> -->
      <!-- <IkUploadImage v-model="imageList" action="http://127.0.0.1:4523/m1/687531-0-default/upload/file" /> -->
      <!-- 打印配置示例 -->
      <!-- <DemoIkPrintConfig /> -->
      <!-- 打印预览示例 -->
      <!-- <DemoIkPrintView /> -->
      <!-- <IKHorizontalStepBar :list="testList" :active="3"/> -->
      <!-- Full calendar 示例 -->
      <!-- <DemoIkSchedule /> -->
      <!-- <IkPreview /> -->
      <!-- <DemoIkUploadFile v-model="imageList" action="http://127.0.0.1:4523/m1/687531-0-default/upload/file" /> -->
    </div>
  </IkProviderConfig>
</template>

<script lang="ts">
import Demos from "./demos";

//import { IKSearch } from "iking-ui"
import {ref} from "vue";
import DemoIkApproveTest from "./examplesDemos/DemoIkApprove.vue";
import DemoIkApproveProcessTest from "./examplesDemos/DemoIkApprovalProcess.vue";
import {IkProviderConfig} from "@iking-ui/components";
import DemoIkUploadFile from "./examplesDemos/DemoIkUploadFile.vue";
import DemoIkPreviewFile from './examplesDemos/DemoIkPreviewFile.vue';
// import { IKApprovalProcessDetail, IKVerticalStepBar } from "@iking-ui/components";
// import { IKHorizontalStepBar, IKApprovalProcess } from '@iking-ui/components'
// import { IkUploadImage, IkUploadFile, IKCalendar, IkPageFull } from '@iking-ui/components'
// import {IkPageFull} from 'iking-mo-ui'
// import 'iking-mo-ui/dist/style.css'

// import IkPreview from './IkFilePriveew.vue'
// import test from "./test.vue";
// import search from "./search.vue";
// import process from "./approvalProcess.vue";
// import approval from "./approval.vue";
// import calendar from "./calendar.vue";
// import IkUploadImage from "./image_upload_demo.vue";

export default {
  name: "App",
  components: {
    DemoIkApproveProcessTest,
    DemoIkApproveTest,
    IkProviderConfig,
    DemoIkUploadFile,
    DemoIkPreviewFile,
    // IKCalendar,
    ...Demos,
  },
  computed: {
    demoList() {
      const result = [];
      for (const key of Object.keys(Demos)) {
        result.push({name: key, component: Demos[key]});
      }
      return result;
    },
  },
  data() {
    return {
      activeName1: "all",
      activeName: "",
      visable: true,
      horActive: 1,
      detailList: [
        {
          id: "1",
          nodeId: "1",
          nodeType: "1",
          nodeTypeName: "发起申请",
          approveStatus: "3",
          approveStatusName: "同意",
          originator: "朱秋柏",
          operationTime: "07-25 09:09", // 发起人操作时间
          approveType: "",
          approveTypeName: "",
          multiExecutorTypeName: "",
          approveOpinion: "",
          countersignPer: [],
          attachment: {
            id: "",
            originName: "",
            url: "",
            suffix: "",
            size: "",
          },
          attachmentImg: [],
          returnNode: "",
          returnNodeName: "",
          lineType: "lineType",
          allRead: true,
          read: 1,
          approvePersonList: [
            {
              id: "",
              name: "",
              approveState: "",
              approveTime: "",
              approveOpinion: "",
              userAvatar: "",
              accomplish: null,
            },
          ],
        },
      ],
      dataList: [
        {
          id: "1",
          nodeId: "1",
          nodeType: "1",
          nodeTypeName: "发起申请",
          approveStatus: "3",
          approveStatusName: "同意",
          originator: "朱秋柏",
          operationTime: "07-25 09:09",
          approveType: "",
          approveTypeName: "",
          multiExecutorTypeName: "",
          approveOpinion: "",
          countersignPer: [],
        },
        {
          id: "id",
          nodeId: "sortOrder",
          nodeType: "type",
          nodeTypeName: "name",
          approveType: "approveType",
          multiExecutorType: "multiExecutorType",
          approveTypeName: "approveTypeName",
          multiExecutorTypeName: "multiExecutorTypeName",
          approvalCategory: "approvalCategory", //审批类型
          isShowAdd: "initiatorSpecify", //是否显示添加按钮
          executorEmpty: "executorEmpty", //实际审批人是否为空
          executorEmptyStrategy: "executorEmptyStrategy", //为空时的审批类型
          reserveExecutorUsers: "reserveExecutorUsers", //executorEmptyStrategy为指定审批人时
          approvePersonList: "executorUsers",
          initiatorSpecifiedScope: "initiatorSpecifiedScope", //默认自选的人
          initiatorSpecifiedScopeType: "initiatorSpecifiedScopeType", //自选方式
          singleApproval: "singleApproval", //是否单选
        },
      ],
      imageList: [{url: "https://img.yzcdn.cn/vant/cat.jpeg"}],
      formData: {
        name: "",
        scaffoldType: "",
        createUser: "",
      },
      fields: [
        {
          key: "name",
          label: "名称",
          minWidth: 100,
          width: null,
          show: true,
          search: true,
          align: "",
          renderCode: "",
          value: "",
          format: "",
          tableSlot: "",
        },
        {
          key: "description",
          label: "描述",
          minWidth: 100,
          width: null,
          show: true,
          search: false,
          align: "",
          renderCode: "",
          value: "",
          format: "",
          tableSlot: "",
        },
        {
          key: "createName",
          label: "创建人",
          minWidth: 100,
          width: null,
          show: true,
          search: false,
          align: "",
          renderCode: "",
          value: "",
          format: "",
          tableSlot: "",
        },
        {
          key: "status",
          label: "发布状态",
          minWidth: 100,
          width: null,
          show: true,
          search: false,
          align: "",
          renderCode:
              '// <el-switch\r\n//               :model-value="data.row.status"\r\n//               active-value="PUBLISHED"\r\n//               inactive-value="NOT_PUBLISHED"\r\n//               active-text="取消"\r\n//               inactive-text="发布"\r\n//               inline-prompt\r\n//             />\r\n\r\nreturn h(components.ElSwitch, {\r\n  modelValue: row.status, \r\n  activeValue: \'PUBLISHED\', \r\n  inactiveValue: \'NOT_PUBLISHED\', \r\n  activeText: \'取消\', \r\n  inactiveText: \'发布\'}\r\n)',
          value: "",
          format: "render",
          tableSlot: "status",
        },
        {
          key: "",
          label: "操作",
          show: true,
          width: 148,
          tableSlot: "operate",
          fixed: "right",
          showOverflowTooltip: false,
        },
      ],
      tableData: [{name: "测试", phone: 18898457889}],
      typeList: [],
      formRef: ref(),
      active: "3-2",
      menuList: [
        {
          id: 1,
          name: "基本信息",
        },
        {
          id: 2,
          name: "服务能力基本信息",
        },
        {
          id: 3,
          name: "项目其他信息",
          children: [
            {
              id: 3 - 1,
              name: "公司信息",
            },
            {
              id: 3 - 2,
              name: "服务信息",
            },
            {
              id: 3 - 3,
              name: "数据信息",
            },
          ],
        },
        {
          id: 4,
          name: "销售许可证",
        },
        {
          id: 5,
          name: "合同信息",
        },
      ],
      testList: [
        {
          title: "基本信息",
          value: "",
          disabled: false,
        },
        {
          title: "服务能力信息",
          value: "",
          disabled: false,
        },
        {
          title: "项目其他信息",
          value: "",
          disabled: false,
        },
        {
          title: "销售许可证",
          value: "",
          disabled: false,
        },
        {
          title: "合同信息",
          value: "",
          disabled: false,
        },
        {
          title: "基本信息1",
          value: "",
          disabled: false,
        },
        {
          title: "服务能力信息2",
          value: "",
          disabled: false,
        },
      ],

      iconPicker: {
        model: "",
      },
    };
  },
  mounted() {
    // this.activeName = this.demoList[0].name;
    // setTimeout(() => {
    //   this.imageList = [{
    //     url: '123123123',
    //     name: '13123123'
    //   }]
    // }, 2000)
  },
  methods: {
    handleSearch() {
    },

    submit(form: any) {
    },
    handleDelete(row: any) {
    },
    handleConsole(response: any, uploadFile: any, uploadFiles: any) {
    },
  },
};
</script>
<style lang="scss" scoped>
.web-ui-demo-container {
  height: calc(100% - 40px);
  width: calc(100% - 40px);
  margin: 20px;
  background-color: #fff;
  padding: 20px;

  :deep(.el-tabs) {
    height: 100%;

    .el-tabs__content {
      height: calc(100% - 40px);
      overflow: auto;

      .el-tab-pane {
        height: 100%;
      }
    }
  }

  @font-face {
    font-family: "iconfont";
    /* Project id 3986283 */
    src: url("//at.alicdn.com/t/c/font_3986283_s80exvkid.woff2?t=1689219349171") format("woff2"),
    url("//at.alicdn.com/t/c/font_3986283_s80exvkid.woff?t=1689219349171") format("woff"),
    url("//at.alicdn.com/t/c/font_3986283_s80exvkid.ttf?t=1689219349171") format("truetype");
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-qitagongneng-copy:before {
    content: "\e83f";
  }

  .demo-item {
    padding: 16px;
    box-sizing: border-box;
    border-bottom: 1px solid var(--el-border-color);
  }
}
</style>
