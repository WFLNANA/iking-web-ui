/*
 * @Author       : wfl
 * @LastEditors: qiye
 * @description  :
 * @updateInfo   :
 * @Date         : 2023-05-23 12:06:41
 * @LastEditTime: 2023-09-20 21:34:17
 */
import type { PropType } from 'vue'

export const defaultProps = {
  // 标题
  headerTitle: {
    type: String,
    default: ''
  },
  // 是否需要底部边框
  headerBorder: {
    type: Boolean,
    default: false
  },
  // tabs
  tabs: {
    type: Array as PropType<Array<{ label: string; id: string | number; }>>,
    default: () => []
  },
  // 字段名列表
  fields: {
    required: true,
    type: Array as PropType<any[]>,
    default: () => []
  },
  // 表格数据
  tableData: {
    type: Array as PropType<Array<any>>,
    default: () => []
  },
  // 初始首次查询
  immediate: {
    type: Boolean,
    default: true
  },
  // 表格数据总条数
  total: {
    type: Number,
    default: 0
  },
  // 查询方法
  search: {
    type: Function,
    default: null
  },
  // 显示表格复选框
  selection: {
    type: Boolean,
    default: false
  },
  // 序号
  serial: {
    type: Boolean,
    default: true
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
    default: true
  },
  // 显示设置按钮
  settingBtn: {
    type: Boolean,
    default: true
  },
  // 选中项数量
  chooseLen: {
    type: Number,
    default: 0
  },
  // 当前页
  current: {
    type: Number,
    default: 1
  },
  // 是否默认展开搜索条件
  defaultShow: {
    type: Boolean,
    default: false
  },
  // 新增弹框的尺寸   sl l xl
  dialogSize: {
    type: String,
    default: 'l'
  },
  // 弹框标题（不传的话，默认为“新增”/“修改”）
  title: {
    type: String,
    default: ''
  },
  // 按钮权限
  role: {
    type: String,
    default: ''
  },
  // formKey
  formKey: {
    type: Object,
    default: () => {
      return {}
    }
  },
  // 新增修改弹框的默认属性
  dialogProp: {
    type: Object as PropType<any>,
    default: () => { }
  },
  // header 高度
  headerHeight: {
    type: Number,
    default: 66
  }
}
