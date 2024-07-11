/*
 * @Author       : wfl
 * @LastEditors: zqf
 * @description  :
 * @updateInfo   :
 * @Date         : 2022-12-12 11:02:38
 * @LastEditTime: 2024-03-19 15:55:07
 */
export enum EChooseType {
  org = "organization",
  dep = "dep",
  user = "user",
  role = "role",
  post = "post",
  dep_user = "dep_user",
}

export enum ETab {
  "group" = "group",
  "role" = "role",
  "post" = "post",
}

export type TList = {
  id: string | number;
  name: string;
  type: keyof typeof EChooseType & "organization"; // 部门 用户 角色
  // 是否不可编辑
  disabled?: boolean;
  [key: string]: any;
  userCount: string;
};

export type TMap = Map<string, TList>;

export type TCheck = {
  group: TMap;
  user: TMap;
  role: TMap;
  post: TMap;
};
