/*
 * @Author       : wfl
 * @LastEditors: zqf
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2023-03-30 19:22:23
 * @LastEditTime: 2024-04-16 10:49:16
 */

import { PropType } from "vue";
import { TList, EChooseType } from "../../types";

export const _props = {
  // 所有数据
  list: {
    type: Array as PropType<TList[]>,
    default: () => [],
  },
  // 已选数据
  handList: {
    type: Array as PropType<TList[]>,
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
  fixPropOpt: {
    type: Object,
    default: () => {},
  },
  fixTypeOpt: {
    type: Object,
    default: () => {},
  },
  height: {
    type: String,
    default: "404px",
  },
  imageBaseUrl: {
    type: String,
    default: "",
  },
  emptyText: {
    type: String,
    default: "暂无数据",
  },
  // 是否允许选择子集
  children: {
    type: Boolean,
    default: true,
  },
  // 选择类别
  chooseType: {
    type: Array,
    // 传['dep_user']选择部门和人员 传['dep']则只选择部门，传['user']则只选择人员，传['role']则只选择角色 ['post']
    // 不传则默认选择人员和部门
    // 传['dep', 'user']则选择人员和部门
    // 传['dep', 'user', 'role']则选择人员、部门和角色
    default: () => ["dep"],
  },
};