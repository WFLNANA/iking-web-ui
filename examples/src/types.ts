export enum EChooseType {
  dep = "dep",
  user = "user",
  role = "role",
  post = "post"
}

export enum ETab {
  "group" = "group",
  "role" = "role",
  "post" = "post"
}

export type TList = {
  id: string | number
  name: string
  type: keyof typeof EChooseType // 部门 用户 角色
  [key: string]: any
}

export type TMap = Map<string, TList>

export type TCheck = {
  dep: TMap
  user: TMap
  role: TMap
  post: TMap
}
