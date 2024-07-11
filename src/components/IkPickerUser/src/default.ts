/*
 * @Author       : wfl
 * @LastEditors: zqf
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2022-12-28 11:37:15
 * @LastEditTime: 2024-04-15 17:03:27
 */
import { PropType } from "vue";
import { TList, TCheck, ETab, EChooseType } from "../types";


export const defaultProps = {
  // 是否允许选择子集
  children: {
    type: Boolean,
    default: true,
  },
  // 是否允许点击根节点查询
  topLink: {
    type: Boolean,
    default: true,
  },
  // 参数
  modelValue: {
    type: Array as PropType<Array<TList>>,
    default: () => [],
  },
  // 已选数据 - 数据回显
  data: {
    type: Array as PropType<Array<TList>>,
    default: () => [],
  },
  // 默认最顶层节点id
  orgPid: {
    type: String,
    default: "",
  },
  // 默认顶层组织
  org: {
    type: Object as PropType<{
      elementName: string;
      elementId: string;
      elementType: "DEPT" | "USER" | "ROLE" | "POST";
    }>,
    default: () => null,
  },
  // 默认搜索
  immediate: {
    type: Boolean,
    default: false,
  },
  // 是否显示
  show: {
    type: Boolean,
    default: false,
    required: true,
  },
  // 宽度 为Number时为百分比，字符串时为具体像素
  width: {
    type: String as PropType<Number | String>,
    default: "685px",
  },
  height: {
    type: String as PropType<Number | String>,
    default: "580px",
  },
  // 标题
  title: {
    type: String,
    default: "选择人员",
  },
  // 部门数据
  groupList: {
    type: Array as PropType<Array<TList>>,
    default: () => [],
  },
  // 人员数据
  userList: {
    type: Array as PropType<Array<TList>>,
    default: () => [],
  },
  // 角色数据
  roleList: {
    type: Array as PropType<Array<TList>>,
    default: () => [],
  },
  // 岗位数据
  postList: {
    type: Array as PropType<Array<TList>>,
    default: () => [],
  },
  // 是否多选
  multiple: {
    type: Boolean,
    default: true,
  },
  // 最大允许选择数量
  // 0表示不限制
  max: {
    type: Number,
    default: 0,
  },
  // 显示的选项卡
  // 当只有一个选项卡时，不显示tab页
  tabs: {
    type: Array as PropType<Array<keyof typeof ETab>>,
    // prop校验
    validator: (val: Array<"group" | "role" | "post">) => {
      if (val === undefined) return true;
      if (!Array.isArray(val)) {
        console.error("IkingPicker参数错误：tabs必须是Array类型");
        return false;
      } else if (!val?.length) {
        // console.error("IkingPicker参数错误：tabs必须是['group', 'role', 'post']中的一种或多种组合")
        return false;
      }
      return true;
    },
    default: () => ["group", "role", "post"],
  },
  // 选择类别
  chooseType: {
    type: Array as PropType<Array<keyof typeof EChooseType>>,
    // 传['dep_user']选择部门和人员 传['dep']则只选择部门，传['user']则只选择人员，传['role']则只选择角色 ['post']
    // 不传则默认选择人员和部门
    // 传['dep', 'user']则选择人员和部门
    // 传['dep', 'user', 'role']则选择人员、部门和角色
    default: () => ["dep"],
  },
  // api地址
  api: {
    type: Object as PropType<{
      methods?: "get" | "post";
      headers?: any;
      url?: string;
      param?: any;
      paramKey?: string;
    }>,
    default: () => {
      return {
        methods: "post",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: "Bearer 9aa65e31e86f4232ac4e4136fb1d3413",
        },
        url: `${location.origin}${location.pathname}/serve/component/pick/mix`,
        param: null,
        paramKey: "type",
      };
    },
  },
  // 类型字段映射
  typeOption: {
    type: Object as PropType<{
      group?: string;
      user?: string;
      role?: string;
      post?: string;
    }>,

    default: () => {},
  },
  // 字段映射 {name: 'label', type: 'type'}
  propOption: {
    type: Object as PropType<{
      name?: string;
      type?: string;
      id?: string | number;
      avatar?: string;
    }>,
    default: () => null,
  },
  // 显示搜索栏
  search: {
    type: Boolean,
    default: true,
  },
  // 是否懒加载
  lazy: {
    type: Boolean,
    default: true,
  },
  // imageBaseUrl
  imageBaseUrl: {
    type: String,
    default: "",
  },
  // placeholder
  placeholder: {
    type: String,
    default: "请输入",
  },
  emptyText: {
    type: String,
    default: "暂无数据",
  },
  dataScopeOnly: {
    type: Boolean,
    default: false,
  },
  rootDepartmentOnly: {
    type: Boolean,
    default: false,
  },
};