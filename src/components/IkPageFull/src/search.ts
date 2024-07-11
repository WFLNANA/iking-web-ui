/*
 * @Author       : wfl
 * @LastEditors: fj
 * @description  :
 * @updateInfo   :
 * @Date         : 2022-12-14 15:22:48
 * @LastEditTime: 2023-09-11 15:19:10
 */
// ****************************************兼容旧版本 start*********************************
export enum EFormType {
  // 输入框
  'input' = 'input',
  // text area
  'area' = 'area',
  // 数字输入框
  'number' = 'number',
  // 下拉
  'select' = 'select',
  // 日期选择
  'date' = 'date',
  // 日期时间选择
  'datetime' = 'datetime',
  // 多选checkbox
  'checkbox' = 'checkbox',
  // 单选radio
  'radio' = 'radio',
  // 树形下拉
  'treeselect' = 'treeselect',
  'choosePerson' = 'choosePerson' // 选择人员和部门
}
export enum EDateType {
  // 年
  'year' = 'year',
  // 月
  'month' = 'month',
  // 日
  'date' = 'date',
  // 多个日期
  'dates' = 'dates',
  // 日期时间
  'datetime' = 'datetime',
  // 周
  'week' = 'week',
  // 日期时间区间
  'datetimerange' = 'datetimerange',
  // 日期区间
  'daterange' = 'daterange',
  // 月区间
  'monthrange' = 'monthrange'
}
// ****************************************兼容旧版本 end*********************************

export enum EAlign {
  'center' = 'center',
  'left' = 'left',
  'right' = 'right'
}

export interface ISearchForm {
  // element表格列支持的所有属性 直接写在对象中即可
  // element组件支持的属性
  // 例：<el-input> 支持的所有属性都可以写在formProp这个对象中
  // formProp: { clearable: true, maxlength: 15, placeholder: '请输入内容' }
  formProp?: {
    [key: string]: any
    // 使用el-radio-group或el-checkbox-group时，使用button形式
    radioType?: 'button'
  }
  // 必填校验
  rules?: Array<{
    required: Boolean
    message: string
    trigger: any
  }>
  // 新增修改form表单插槽
  formEditSlot?: string
  // 字段名称
  label: string
  // 绑定的字段名
  key: string
  // 特殊组件左侧select的key值（一个组件由左侧下拉，右侧input框组成的情况）或是用于选人组件的input值回显
  selectKey?: string
  // 人员选择组件用户存放/回显选中的人
  handList?: Array<any>
  // 渲染类型 当为特殊组件(可输入可下拉)时 type应当传递'select-input'
  type?: string // element组件名称；如：el-input, el-select等等
  // 默认值
  value?: any
  // 是否做为查询项 默认false
  search?: boolean
  // 是否作为新增修改的字段 默认false
  isEdit?: boolean
  // 在表格列中 是否默认显示
  show?: boolean
  // 搜索条件插槽
  formSlot?: string
  // 表格插槽
  tableSlot?: string
  // 下拉选项 select  treeselect radio checkbox等
  options?: Array<{
    label: string
    value: any
  }>
  emptyText?: string
  // 占得列数 默认 1
  col?: number
  // 任意字段
  [key: string]: any

  // ************************************以下参数是为了兼容之前版本**************************************
  placeholder?: string
  // 最大输入长度
  maxlength?: number
  // 最大输入长度
  minlength?: number
  // 最多多少行， 超出后显示省略号
  maxline?: number
  // 输入状态 默认 false
  disabled?: boolean

  // number checkbox
  // 最大值
  max?: number
  // 最小值
  min?: number

  // ===========================input-number=============================================
  // 步长 默认 1
  step?: number
  // 数值精度 小数位数 默认0
  precision?: number
  // ===========================input-number end=============================================

  // ===========================select  treeselect=============================================
  // 多选  默认false
  multiple?: boolean
  // 过滤  默认true
  filterable?: boolean
  // ===========================select  treeselect end=============================================

  // ==============================================treeselect==================================
  // 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的
  nodeKey?: string
  // 配置选项
  props?: {
    // 指定节点标签为节点对象的某个属性值
    label?: string | Function
    // 指定子树为节点对象的某个属性值
    children?: string
    // 指定节点选择框是否禁用为节点对象的某个属性值
    disabled?: string | Function
    // 自定义节点类名
    class?: string | Function
  }
  // 是否高亮当前选中节点，默认值是 true
  highlightCurrent?: boolean
  // 是否默认展开所有节点 默认值是 false
  defaultExpandAll?: boolean
  // 是否在点击节点的时候展开或者收缩节点 如果为 false，则只有点箭头图标的时候才会展开或者收缩节点 默认值是 false
  expandOnClickNode?: boolean
  // 是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。
  checkOnClickNode?: boolean
  // 默认展开的节点的 key 的数组
  defaultExpandedKeys?: Array<string>
  // 节点是否可被选择 默认值是 true
  showCheckbox?: boolean
  // 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 true
  checkStrictly?: boolean
  // 默认勾选的节点的 key 的数组
  defaultCheckedKeys?: Array<string>
  // 当前选中的节点
  currentNodeKey?: string | number
  // 是否每次只打开一个同级树节点展开 默认false
  accordion?: boolean
  // ==============================================treeselect  end==================================
  // ============================================= 日期选择 Date Picker================================
  // 文本框可输入
  editable?: boolean
  // 范围选择时开始日期的占位内容
  startPlaceholder?: string
  // 范围选择时结束日期的占位内容
  endplaceholder?: string
  // 显示类型
  dateType?: EDateType
  // 显示在输入框中的格式
  format?: string
  // DatePicker 下拉框的类名
  popperclass?: string
  // 选择范围时的分隔符
  rangeSeparator?: string
  // 可选，选择器打开时默认显示的时间
  defaultValue?: Date | [Date, Date]
  // 范围选择时选中日期所使用的当日内具体时刻
  defaultTime?: Date | [Date, Date]
  // 可选，绑定值的格式。 不指定则绑定值为 Date 对象
  valueFormat?: string
  // 一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值
  disabledDate?: (time: Date) => boolean
  typeOption?: Object
  _list?: Array<any>
  // ============================================= 日期选择 Date Picker  end================================

  // ============================================= 表格中的配置================================
  // 支持el-table所有属性配置  直接在组件中使用即可  例：<IkPageFull  stripe  border />
  // 表格 列宽度
  width?: number
  // 表格 列最小宽度
  minWidth?: number
  // 表格内容位置
  align?: keyof typeof EAlign
}
