<!--
 * @Author       : wfl
 * @LastEditors: zqf
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2023-04-28 15:12:41
 * @LastEditTime: 2024-05-31 14:39:18
-->
<script setup lang="ts" name="Picker">
import {
  ElInput,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  CheckboxValueType,
  vLoading,
  ElDialog,
} from "element-plus";
import { _, ikEvent } from "iking-utils-pro";
import {
  computed,
  nextTick,
  reactive,
  Ref,
  ref,
  toRef,
  watch,
  watchEffect,
} from "vue";
import Search from "./svg/search_svg.vue";
import Close from "./svg/close_svg.vue";

import Avatar from "./avatar/Avatar.vue";
import GroupList from "./list/GroupList.vue";
import PostList from "./list/PostList.vue";
import RoleList from "./list/RoleList.vue";

import { TList, TCheck, EChooseType, ETab } from "../types";
import { defaultProps } from "./default";
import { usePickerData } from "./use-picker-data";
const props = defineProps(defaultProps);
// 过滤
const filterText = ref("");
const filterOrgId = ref("");
const userList = ref<TList[]>([]);
const groupList = ref<TList[]>([]);
const roleList = ref<TList[]>([]);
const postList = ref<TList[]>([]);
const loading = ref(false);
// 组织结构总目录
const groupUserList = computed(() => {
  return fixChooseType.value.includes("user")
    ? groupList.value.concat(userList.value)
    : groupList.value;
});

// api改变后重新请求
watch(
  () => props.api,
  () => {
    props.show && ThrottleHandPicker("");
  }
);
// props参数合并
const fixPropOpt = computed(() => {
  return {
    ...{ name: "name", type: "type", id: "id", avatar: "avatar" },
    ...props.propOption,
  };
});
// type参数合并
const fixTypeOpt = computed(() => {
  return {
    ...{
      user: "USER",
      role: "ROLE",
      post: "POST",
      group: "DEPT",
    },
    ...props.typeOption,
  };
});
const chooseList: Ref<TList[]> = ref([]);

// const TOP_BAN: any = ref({
//   id: props.pid,
//   elementId: props.pid,
//   [fixPropOpt.value.name]: "顶层",
//   [fixPropOpt.value.type]: EChooseType.dep,
// });

const picker = usePickerData(toRef(props, "api"), props);
const handData = picker.handData;
const bannerList = picker.bannerList;
if (props.immediate) {
  handData(filterOrgId.value, filterText.value);
}

const setListStatus = (list: any) => {
  list.forEach((li: any) => {
    li.disabled =
      props.modelValue?.find(
        (v) => v[fixPropOpt.value.id] === li[fixPropOpt.value.id]
      )?.disabled || false;
  });
  return list;
};
const handPicker = async () => {
  loading.value = true;
  try {
    if (
      props.groupList?.length ||
      props.userList?.length ||
      props.roleList?.length ||
      props.postList?.length
    ) {
      userList.value = props.userList?.filter((v) =>
        v[fixPropOpt.value.name].includes(filterText.value)
      );
      groupList.value = props.groupList?.filter((v) =>
        v[fixPropOpt.value.name].includes(filterText.value)
      );
      roleList.value = props.roleList?.filter((v) =>
        v[fixPropOpt.value.name].includes(filterText.value)
      );
      postList.value = props.postList?.filter((v) =>
        v[fixPropOpt.value.name].includes(filterText.value)
      );
      setDepUserList();

      loading.value = false;
      return;
    }
    const data = await handData(filterOrgId.value, filterText.value);
    try {
      userList.value = setListStatus(data?.userList || []);
      groupList.value = setListStatus(data?.groupList || []);
      roleList.value = setListStatus(data?.roleList || []);
      postList.value = setListStatus(data?.postList || []);
    } catch (error) {
      loading.value = false;
      console.info("error: ", error);
    }
    setDepUserList();
    loading.value = false;
  } catch (error) {
    loading.value = false;
  }
};
// 已选择项
const checked: TCheck & { trans: string[]; single: string } = reactive({
  //组织架构
  group: new Map(),
  // 用户
  user: new Map(),
  // 角色
  role: new Map(),
  // 岗位
  post: new Map(),
  // 当前数据已选项
  trans: [],
  // 单选
  single: "",
});

// 全选状态
const check = reactive({
  indeterminate: false,
  checkAll: 0,
});
const checkHave = (key: string) => {
  return (
    checked.group.has(key) ||
    checked.user.has(key) ||
    checked.role.has(key) ||
    checked.post.has(key)
  );
};
// 节流
const ThrottleHandPicker = ikEvent.debounce(handPicker, 300);
// 已选列表
const choose = computed(() => {
  const groups = Array.from(checked.group.values());
  const roles = Array.from(checked.role.values());
  const users = Array.from(checked.user.values());
  const posts = Array.from(checked.post.values());
  chooseList.value = [...roles, ...posts, ...users, ...groups];
  return {
    list: [...roles, ...users, ...posts, ...groups],
    role: {
      list: roles,
      len: roles.length,
    },
    user: {
      list: users,
      len: users.length,
    },
    post: {
      list: posts,
      len: posts.length,
    },
    groups: {
      list: groups,
      len: groups.length,
    },
  };
});
// 忽略大小写
const fixChooseType: any = computed(() => {
  const type = props.chooseType.map((v) => v.toLocaleLowerCase());
  let list = [...type];
  if (type.includes("dep")) {
    list = [...list, "dept"];
  }
  if (type.includes("dep_user")) {
    list = [...list, "user"];
  }
  return list;
});

const _list: Ref<TList[]> = ref([]);
const setList = (list: TList[]) => {
  _list.value = list;
  _list.value.forEach((l: any) => {
    l.readonly = l?.disabled;
  });
};

const emits = defineEmits<{
  (e: "handChild", val: TList | null): void;
  (e: "update:show", val: boolean): void;
  (e: "update:modelValue", val: TList[]): void;
  (e: "ok", val: any): void;
  (e: "search", val: string): void;
}>();

const _visible = ref(false);

const setDepUserList = (onleReturn = false) => {
  const depUserList = props?.userList?.length
    ? _.cloneDeep([...props?.userList, ...props?.groupList])
    : [...groupList.value, ...userList.value];

  !onleReturn && setList(depUserList);
  return depUserList;
};
// 监听弹框状态
watch(
  () => props.show,
  async (val) => {
    _visible.value = val;
    if (val) {
      // 获取新的参数值
      filterOrgId.value = props.org?.elementId || props.orgPid;
      if (
        !props.userList.length &&
        !props.groupList.length &&
        !props.roleList.length &&
        !props.postList.length
      ) {
        await handPicker();
      } else {
        userList.value = props.userList;
        groupList.value = props.groupList;
        roleList.value = props.roleList;
        postList.value = props.postList;
      }
      // 重置
      checked.trans = [];
      check.checkAll = 0;
      check.indeterminate = false;
      const depUserList = setDepUserList(true);
      for (const i of depUserList) {
        checkHave(i[fixPropOpt.value.id]) &&
          checked.trans.push(i[fixPropOpt.value.id]);
      }
      const flag = depUserList.length === checked.trans.length;
      check.indeterminate = Boolean(depUserList.length && !flag);
      check.checkAll = Number(depUserList.length && flag);

      nextTick(() => {
        if (props.modelValue?.length)
          props.modelValue.forEach((v) => {
            handSet(v);
            if (props.multiple) checked.trans.push(v[fixPropOpt.value.id]);
            else checked.single = v[fixPropOpt.value.id];
          });
        else handClear();
      });
    } else {
      handClear();
    }
  }
);

watchEffect(() => {
  // true 代表全选状态
  // 当前页总长度
  let len;
  len = _list.value.length;
  // 当前页已选长度
  const transLen = checked.trans.length;
  // 半选
  check.indeterminate = !checked.trans.length ? false : transLen !== len;
  // 全选
  check.checkAll = Number(len !== 0 && transLen === len);
});

watch(
  () => props.modelValue,
  (val) => {
    if (val?.length)
      val.forEach((v) => {
        handSet(v);
        if (props.multiple) checked.trans.push(v[fixPropOpt.value.id]);
        else checked.single = v[fixPropOpt.value.id];
      });
    else handClear();
  }
);

// 已选删除
const handDelete = (item: TList | undefined) => {
  if (!item) return;
  checked.single = "";
  if (item[fixPropOpt.value.id]) {
    const index = checked.trans?.findIndex(
      (v) => v === item[fixPropOpt.value.id]
    );
    index !== -1 && checked.trans.splice(index, 1);
  }
  switch (item[fixPropOpt.value.type]) {
    case fixTypeOpt.value.user:
      return checked.user.delete(item[fixPropOpt.value.id]);
    case fixTypeOpt.value.role:
      return checked.role.delete(item[fixPropOpt.value.id]);
    case fixTypeOpt.value.post:
      return checked.post.delete(item[fixPropOpt.value.id]);
    case fixTypeOpt.value.group:
      return checked.group.delete(item[fixPropOpt.value.id]);
    default:
      return;
  }
};
// 移除已选项
const handRomeve = (item: TList) => {
  handDelete(item);
};
// 设置选项
const handSet = (item: TList) => {
  if (!checkHave(item[fixPropOpt.value.id])) {
    const obj = {
      ...item,
      // readonly: item.disabled
    };
    switch (item[fixPropOpt.value.type]) {
      case fixTypeOpt.value.user:
        return checked.user.set(item[fixPropOpt.value.id], obj);
      case fixTypeOpt.value.role:
        return checked.role.set(item[fixPropOpt.value.id], obj);
      case fixTypeOpt.value.post:
        return checked.post.set(item[fixPropOpt.value.id], obj);
      case fixTypeOpt.value.group:
        return checked.group.set(item[fixPropOpt.value.id], obj);
      default:
        return;
    }
  }
};
const setDisabledStatu = (item: any) => {
  const disabled = [fixTypeOpt.value.group].includes(
    item[fixPropOpt.value.type]
  )
    ? true
      ? item?.hasOwnProperty("disabled")
      : item.disabled
    : false;
  return disabled;
};
// 多选
watch(
  () => checked.trans,
  (val) => {
    if (!val.length)
      _list.value.forEach((li) => {
        li.disabled = false;
        try {
          if (props.multiple) handDelete(li);
        } catch (error) {}
      });
    else {
      const fi = _list.value.filter(
        (f) => !val.includes(f[fixPropOpt.value.id])
      );
      for (const i of fi) {
        i.disabled = false;
        if (props.multiple) handDelete(i);
      }

      const _fi = _list.value.filter((f) =>
        val.includes(f[fixPropOpt.value.id])
      );
      for (const i of _fi) {
        i.disabled = setDisabledStatu(i);
        handSet(i);
      }
    }
  },
  { deep: true }
);
// 单选
watch(
  () => checked.single,
  (val) => {
    if (val) {
      const item = _list.value?.find((v) => v[fixPropOpt.value.id] === val);
      if (item) {
        checked.user.clear();
        checked.role.clear();
        checked.post.clear();
        checked.group.clear();
        checked.trans = [];
        nextTick(() => {
          handSet(item);
        });
      }
    }
  }
);

// 下级
const handChild = (child: TList) => {
  filterOrgId.value = child?.elementId;
  handPicker();
  bannerList.value.push(child);
};
const bannerLen = computed(() => bannerList.value.length);
// 某一级
const handBackSteps = (item: TList, index: number) => {
  if (!index && !props.topLink) return;
  if (index === bannerLen.value - 1) return;
  filterOrgId.value = item?.elementId;
  handPicker();
  bannerList.value.splice(index + 1);
};

const IS_ROLE = computed(
  () => props.chooseType.includes("role") && props.chooseType.length === 1
);
const IS_POST = computed(
  () => props.chooseType.includes("post") && props.chooseType.length === 1
);
// 默认选中第一个tab页
const tabPosition = ref(props.tabs[0]);
const tabAutoPosition = ref(props.tabs[0]);
watchEffect(() => {
  tabAutoPosition.value = IS_ROLE.value
    ? props.tabs[1]
    : IS_POST.value
    ? props.tabs[2]
    : tabPosition.value;
  return tabAutoPosition.value;
});
// 清空选项
const handClear = () => {
  checked.user.clear();
  checked.role.clear();
  checked.post.clear();
  checked.group.clear();
  checked.trans = [];
  handRoleList.value = [];
  handPostList.value = [];
  tabPosition.value = props.tabs[0];
  tabAutoPosition.value = props.tabs[0];
  filterText.value = "";
  filterOrgId.value = props.orgPid;
  bannerList.value.splice(1, bannerList.value.length);
  checked.single = "";
  chooseList.value = [];
};
// 确认选项chooseList
const handConfirm = () => {
  emits(
    "ok",
    _.cloneDeep({
      // 所有选项、部门、人员、角色分别列出
      ...choose.value,
      // 排序后的列表
      sort: chooseList.value,
    })
  );
  emits("update:modelValue", _.cloneDeep(choose.value?.list || []));
  emits("update:show", false);
  handClear();
};
// 取消
const handCancle = () => {
  emits("update:show", false);
  handClear();
};

defineExpose({ handClear, handRomeve, handDelete });

// 计算是否显示tab页
const showTab = computed(() => {
  const types = fixChooseType.value;
  if ((types.includes("post") || types.includes("role")) && types.length > 1)
    return true;
  return false;
});

// tab页类别
const tabList = computed(() => {
  return [
    { name: "group", label: "组织架构" },
    { name: "role", label: "角色列表" },
    { name: "post", label: "岗位列表" },
  ].filter((v) => props.tabs.includes(v.name as any));
});

const contentHeight = computed(
  () =>
    `${
      (typeof props.height === "string"
        ? Number.parseInt(props.height)
        : props.height) as number
    }px`
);

const checkMultipe = () => {
  if (!props.multiple) {
    checked.post.clear();
    checked.role.clear();
    checked.user.clear();
    checked.group.clear();
    checked.single = "";
  }
};
//GROUP
const handGroupList: Ref<TList[]> = computed(() => {
  return choose.value.groups.list.concat(choose.value.user.list);
});
const handGroupChange = (_val: string[], data: TList[]) => {
  if (!props.multiple) {
    checked.single = "";
  }
  const val = props.multiple ? _val : [_val];
  if (!val.length) {
    checked.group.clear();
    checked.user.clear();
    return;
  }
  checkMultipe();
  data.forEach((item) => {
    if (val?.includes(item[fixPropOpt.value.id])) {
      handSet(item);
    } else {
      handDelete(item);
    }
  });
};
// // // 监听组织数据变化
// watch(
//   () => choose.value.groups.len,
//   (val) => {
//     handGroupList.value = _.cloneDeep(
//       choose.value.groups.list.concat(choose.value.user.list)
//     );
//   }
// );
// watch(
//   () => choose.value.user.len,
//   (val) => {
//     handGroupList.value = _.cloneDeep(
//       choose.value.groups.list.concat(choose.value.user.list)
//     );
//   }
// );
// ROLE
const handRoleList: Ref<TList[]> = ref([]);
const handRoleChange = (_val: string[], data: TList[]) => {
  if (!props.multiple) {
    checked.single = "";
  }
  const val = props.multiple ? _val : [_val];
  if (!val.length) {
    checked.role.clear();
    return;
  }
  checkMultipe();
  data.forEach((item) => {
    if (val?.includes(item[fixPropOpt.value.id])) {
      handSet(item);
    } else {
      handDelete(item);
    }
  });
};
// 监听角色数据变化
watch(
  () => choose.value.role.len,
  (val) => {
    handRoleList.value = _.cloneDeep(choose.value.role.list);
  }
);

// POST
const handPostList: Ref<TList[]> = ref([]);
const handPostChange = (_val: string[], data: TList[]) => {
  if (!props.multiple) {
    checked.single = "";
  }
  const val = props.multiple ? _val : [_val];
  if (!val.length) {
    checked.post.clear();
    return;
  }
  checkMultipe();
  data.forEach((item) => {
    if (val?.includes(item[fixPropOpt.value.id])) {
      handSet(item);
    } else {
      handDelete(item);
    }
  });
};
// 监听岗位数据变化
watch(
  () => choose.value.post.len,
  (val) => {
    handPostList.value = _.cloneDeep(choose.value.post.list);
  }
);

// 搜索
watch(
  () => filterText.value,
  (val) => {
    ThrottleHandPicker("");
  }
);
</script>

<template>
  <el-dialog
    v-model="_visible"
    :title="title"
    destroy-on-close
    append-to-body
    :close-on-click-modal="false"
    :close-on-click-escape="false"
    draggable
    align-center
    :width="typeof width === 'string' ? width : `${width}%`"
    class="p_p_picker-dialog"
    modal-class="p_p_picker-dialog-modal-user"
    @close="handCancle"
  >
    <div class="dep-use-picker" :style="{ height: contentHeight }">
      <div shadow="hover" class="sel-list">
        <div>
          <el-input
            v-model="filterText"
            clearable
            :placeholder="placeholder"
            :suffix-icon="Search"
          ></el-input>
          <el-tabs v-model="tabPosition" v-if="showTab" class="ik-picker-tab">
            <el-tab-pane
              v-for="tab in tabList"
              :label="tab.label"
              :name="tab.name"
              :key="tab.label"
            ></el-tab-pane>
          </el-tabs>
        </div>
        <!-- 过滤 -->
        <template v-if="tabAutoPosition === ETab.group">
          <div>
            <!-- 面包屑 全选 -->
            <el-breadcrumb
              separator=">"
              class="banner"
              :class="{ 'top-unlink': !topLink }"
            >
              <template v-if="bannerLen">
                <el-breadcrumb-item
                  v-for="(item, index) in bannerList"
                  :key="item[fixPropOpt.id]"
                  @click.stop="handBackSteps(item, index)"
                >
                  {{ item[fixPropOpt.name] }}
                </el-breadcrumb-item>
              </template>
            </el-breadcrumb>
          </div>
        </template>
        <!-- 左侧列表 -->
        <!-- 组织架构 -->
        <template v-if="tabAutoPosition === ETab.group">
          <GroupList
            v-loading="loading"
            :fixPropOpt="fixPropOpt"
            :fixTypeOpt="fixTypeOpt"
            :list="groupUserList"
            :max="max"
            :multiple="multiple"
            :hand-list="handGroupList"
            :imageBaseUrl="props.imageBaseUrl"
            :emptyText="props.emptyText"
            :children="props.children"
            :choose-type="fixChooseType"
            @handChild="handChild"
            @change="handGroupChange"
          ></GroupList>
        </template>
        <!-- 角色 -->
        <template v-else-if="tabAutoPosition === ETab.role">
          <RoleList
            v-loading="loading"
            :fixPropOpt="fixPropOpt"
            :fixTypeOpt="fixTypeOpt"
            :list="roleList"
            :max="max"
            :multiple="multiple"
            :hand-list="handRoleList"
            :imageBaseUrl="props.imageBaseUrl"
            :emptyText="props.emptyText"
            :choose-type="fixChooseType"
            @change="handRoleChange"
          />
        </template>
        <!-- 岗位 -->
        <template v-else-if="tabAutoPosition === ETab.post">
          <PostList
            :fixPropOpt="fixPropOpt"
            :fixTypeOpt="fixTypeOpt"
            v-loading="loading"
            :list="postList"
            :max="max"
            :multiple="multiple"
            :hand-list="handPostList"
            :imageBaseUrl="props.imageBaseUrl"
            :emptyText="props.emptyText"
            :choose-type="fixChooseType"
            @change="handPostChange"
          />
        </template>
      </div>
      <div class="split-div"></div>
      <!-- 已选列表 -->
      <div class="choose-list">
        <div class="choose-item">
          <div>已选</div>
          <el-button type="primary" link @click.stop="handClear"
            >清空</el-button
          >
        </div>
        <ul class="choose-box">
          <li v-for="element in chooseList" class="list-group-item">
            <div class="item_info">
              <!-- icon前缀 -->
              <div class="avatar_box">
                <Avatar
                  :fixTypeOpt="fixTypeOpt"
                  :fixPropOpt="fixPropOpt"
                  :element="element"
                  :imageBaseUrl="props.imageBaseUrl"
                ></Avatar>
              </div>
              <span>{{ element[fixPropOpt.name] }}</span>
            </div>
            <Close
              v-show="!element?.readonly"
              class="close"
              @click.stop="handRomeve(element)"
            />
          </li>
        </ul>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click.stop="handCancle">取消</el-button>
        <el-button type="primary" @click.stop="handConfirm"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss">
.w-full {
  width: 100%;
}

.p_picker-search-popper {
  margin-top: -12px !important;
}

.p_p_picker-dialog-modal-user {
  z-index: 8000 !important;

  .p_p_picker-dialog {
    position: relative;

    .el-breadcrumb__inner {
      color: var(--el-color-primary);
      cursor: pointer;
      &:hover {
        opacity: 0.85;
      }
    }

    .text-over-flow {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
      font-size: 14px;
      padding-left: 4px;
    }

    .ik-picker-single {
      display: flex;
      width: 100%;
    }

    .el-dialog__body {
      position: relative;
      padding: 0px var(--el-dialog-padding-primary);

      &:before {
        position: absolute;
        content: " ";
        display: inline-block;
        height: 100%;
        border-left: 1px solid var(--el-border-color);
        top: 0;
        left: 50%;
      }
    }

    .ik-picker-tab {
      margin-top: 12px;

      .el-radio-button {
        flex: 1;

        .el-radio-button__inner {
          width: 100%;
        }
      }
    }

    .dep-use-picker {
      display: flex;
      margin-top: 8px;

      .el-checkbox {
        flex: none;
      }

      .empty {
        text-align: center;
        padding: 32px 0;
      }

      .sel-list,
      .choose-list {
        display: flex;
        flex-direction: column;
        width: 306px;

        .choose-item {
          user-select: none;
          height: 33px;
          line-height: 33px;
          padding: 0 8px;
          margin-bottom: 7px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .choose-box {
          display: flex;
          flex-wrap: wrap;
          align-content: flex-start;
          .list-group-item {
            padding: 4px;
            background-color: var(--ik-color-divider);
            .avatar_box {
              width: 24px;
              height: 24px;
            }
          }
        }
      }

      .sel-list {
        .top-unlink {
          .el-breadcrumb__item:not(:last-child) {
            &:first-child .el-breadcrumb__inner {
              color: var(--el-text-color-regular) !important;
              cursor: auto !important;
            }
          }
        }

        .el-breadcrumb__item:not(:last-child) {
          &:first-child .el-breadcrumb__inner {
            color: var(--el-color-primary);
            cursor: pointer;
          }

          .el-breadcrumb__inner.is-link {
            color: var(--el-color-primary);
          }
        }
      }

      .view-list {
        overflow-y: auto;
        transition: all 0.25s ease-in-out;
        flex: 1;

        .el-radio {
          margin-right: 0;
        }

        label {
          width: calc(100% - 55px);
        }

        .filter-user {
          flex: 1;
          display: flex;
          font-size: 14px;
          align-items: center;
          fill: var(--el-text-color-regular);
          width: calc(100% - 55px);

          span {
            line-height: 1;
            padding-left: 2px;
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-right: 5px;
          }

          p {
            flex: 1;
            line-height: 1;
            padding: 0;
            padding-left: 8px;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-right: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: keep-all;
          }
        }

        .el-radio-group {
          width: 100%;

          li {
            width: 100%;
            box-sizing: border-box;

            .readonly {
              pointer-events: none;

              .el-radio__input {
                display: none;
              }

              .el-radio__label {
                padding-left: 0;
              }
            }

            .el-radio__label {
              display: flex;
              align-items: center;

              span {
                margin-right: 5px;
              }

              svg {
                fill: var(--el-text-color-regular);
                margin-right: 3px;
              }

              i svg {
                margin-right: 0;
              }
            }

            & > svg {
              fill: var(--el-text-color-regular);
              margin-right: 3px;
            }

            i svg {
              margin-right: 0;
            }

            .is-checked {
              svg {
                fill: var(--el-color-primary);
              }
            }
          }
        }
      }

      .choose-list {
        ul {
          overflow-y: auto;
          height: v-bind("contentHeight");
        }
      }

      .split-div {
        margin: 0 8px;
      }

      ul {
        margin: 0;
        padding: 0;
        flex: 1;

        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 40px;

          .name_number {
            flex: 1;
          }

          div {
            display: flex;
            align-items: center;
          }

          .next-child {
            display: flex;
            align-items: center;
            cursor: pointer;
            width: auto;
            border-left: 1px solid var(--ik-split-border-color, #d9d9d9);
            padding-left: 2px;

            .el-button {
              span {
                margin-left: 3px;
              }
            }
          }

          i {
            font-size: 15px;
          }

          svg {
            &.close {
              transition: transform 0.25s;
              margin-left: 4px;
              width: 16px;
              height: 16px;
              &:hover {
                transform: rotate(90deg);
              }
            }
          }

          .el-radio__label,
          .el-checkbox__label {
            display: flex;
            align-items: center;
            width: calc(100% - 25px);

            &:hover {
              svg {
                fill: var(--el-color-primary);
              }
            }

            span {
              display: inline-block;
            }

            .el-avatar {
              display: flex;
              margin: 0px !important;

              i {
                font-size: 20px;
              }

              svg {
                margin: 0;
              }
            }
          }

          .is-checked .el-checkbox__label {
            svg {
              fill: var(--el-checkbox-checked-text-color);
            }
          }
        }
      }

      .choose-item {
        span {
          display: inline-block;
          padding-left: 8px;
        }
      }

      .banner {
        display: inline-flex;
        user-select: none;
        flex-wrap: wrap;
        line-height: 30px;

        .el-breadcrumb__item {
          float: none;
          display: contents;
        }
      }

      .check-all {
        display: flex;

        .el-button {
          margin-left: 8px;
        }
      }
    }

    .ghost {
      opacity: 0.9;
      background: var(--el-color-primary) !important;
      color: var(--el-color-white);
    }

    .list-group {
      height: 100%;
      width: 100%;
      color: var(--el-text-color-regular);
      transition: all 0.25s;
    }

    li.list-group-item {
      cursor: pointer;
      border-radius: 6px;
      background: var(--el-color-primary-light-9);
      // padding: 0 8px;
      user-select: none;
      display: flex;
      align-items: center;
      height: 35px !important;
      font-size: 14px;
      transition: background 0.25s;
      color: var(--ik-color-font-title);
      margin-right: 8px;
      margin-bottom: 8px;
      max-width: 100%;
      overflow-x: hidden;
      .item_info {
        width: calc(100% - 20px);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      div {
        svg {
          fill: var(--el-text-color-secondary);
        }
      }

      svg {
        transition: all 0.25s;
        fill: transparent;
      }

      &:hover {
        background: var(--el-border-color) !important;

        div {
          svg {
            fill: var(--el-text-color-regular);
          }
        }

        svg {
          fill: var(--el-color-danger);
        }
      }

      span {
        padding-left: 5px;

        &:nth-child(2) {
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: keep-all;
        }
      }

      .el-avatar {
        padding-left: 0;
      }
      .avatar_name {
        font-size: 10px;
      }
    }
  }
}
</style>
