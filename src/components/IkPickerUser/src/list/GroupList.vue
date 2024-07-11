<script setup lang="ts" name="PostList">
import {
  ElInput,
  ElCheckbox,
  ElCheckboxGroup,
  ElRadioGroup,
  ElRadio,
} from "element-plus";
import { Ref, computed, ref, watch } from "vue";
import { _ } from "iking-utils-pro";
import { _props } from "./props";
import Avatar from "../avatar/Avatar.vue";
const props = defineProps(_props);

const checkAll = computed(() => props.handList?.length === props.list?.length);
const isIndeterminate = computed(() => {
  const handLen = props.handList?.length;
  const listLen = props.list?.length;
  if (props.multiple)
    checkPosts.value = props.handList.map((v) => v[props.fixPropOpt.id]);
  else checkPost.value = props.handList?.[0]?.[props.fixPropOpt.id];
  return handLen > 0 && handLen < listLen;
});
const checkPosts: Ref<string[]> = ref(
  props.handList.map((v) => v[props.fixPropOpt.id])
);
const checkPost: Ref<string> = ref(props.handList?.[0]?.[props.fixPropOpt.id]);

const emit = defineEmits(["change", "check", "handChild"]);

const handleCheckAllChange = (val: any) => {
  const _val = val
    ? props.list.map((v) => {
        if (props.chooseType.includes(v[props.fixPropOpt.type].toLowerCase()) && v.available !== false) {
          return v[props.fixPropOpt.id];
        }
      })
    : [];
  emit("change", _val, val ? props.list : []);
};
const handleCheckedListChange = (value: any[]) => {
  emit("change", value, props.list);
};

const handleCheckedChange = (val: any) => {
  emit("change", val, props.list);
};
const handChild = (val: any, el: any) => {
  if (!el) {
    emit("handChild", val);
  }
};
</script>

<template>
  <!-- 遍历list多选 -->
  <div class="left-pick-list">
    <el-checkbox
      v-model="checkAll"
      v-if="multiple && list && list.length"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
      >全选</el-checkbox
    >
    <ul v-if="list && list.length" class="post-view-list">
      <template v-if="multiple">
        <el-checkbox-group
          v-model="checkPosts"
          @change="handleCheckedListChange"
        >
          <li v-for="item in list" :key="item[props.fixPropOpt.id]">
            <el-checkbox
              v-if="
                chooseType.includes(
                  item[props.fixPropOpt.type].toLowerCase()
                ) && item.available !== false
              "
              :label="item[props.fixPropOpt.id]"
              :disabled="item.available === false"
            >
              <div class="checkText">
                <div class="iconBox">
                  <Avatar
                    :fixTypeOpt="props.fixTypeOpt"
                    :fixPropOpt="props.fixPropOpt"
                    :element="item"
                    :imageBaseUrl="props.imageBaseUrl"
                  ></Avatar>
                </div>
                <div class="name_number">
                  <div class="title">{{ item[props.fixPropOpt.name] }}</div>
                  <div
                    v-if="item[props.fixPropOpt.type] === props.fixTypeOpt.group"
                    class="userCount"
                  >
                    ({{ item.userCount }})
                  </div>
                </div>
              </div>
            </el-checkbox>
            <template v-else>
              <div class="checkText">
                <div class="side"></div>
                <div class="iconBox">
                  <Avatar
                    :fixTypeOpt="props.fixTypeOpt"
                    :fixPropOpt="props.fixPropOpt"
                    :element="item"
                    :imageBaseUrl="props.imageBaseUrl"
                  ></Avatar>
                </div>
                <div class="name_number">
                  <div class="title">{{ item[props.fixPropOpt.name] }}</div>
                  <div
                    v-if="item[props.fixPropOpt.type] === props.fixTypeOpt.group"
                    class="userCount"
                  >
                    ({{ item.userCount }})
                  </div>
                </div>
              </div>
            </template>
            <span
              v-if="
                item[props.fixPropOpt.type] === props.fixTypeOpt.group &&
                props.children
              "
              class="nextLevel"
              :class="{
                'is-disabled': checkPosts?.find(
                  (v) => v === item[props.fixPropOpt.id]
                ),
              }"
              @click="
                handChild(
                  item,
                  checkPosts?.find((v) => v === item[props.fixPropOpt.id])
                )
              "
            >
              下级</span
            >
          </li>
        </el-checkbox-group>
      </template>
      <template v-else>
        <el-radio-group
          :isIndeterminate="isIndeterminate"
          v-model="checkPost"
          @change="handleCheckedChange"
        >
          <li
            class="w-full"
            v-for="item in list"
            :key="item[props.fixPropOpt.id]"
          >
            <el-radio
              v-if="
                chooseType.includes(item[props.fixPropOpt.type].toLowerCase())
                && item.available !== false
              "
              :label="item[props.fixPropOpt.id]"
            >
              <div class="checkText">
                <div class="iconBox">
                  <Avatar
                    :fixTypeOpt="props.fixTypeOpt"
                    :fixPropOpt="props.fixPropOpt"
                    :element="item"
                    :imageBaseUrl="props.imageBaseUrl"
                  ></Avatar>
                </div>
                <div class="name_number">
                  <div class="title">{{ item[props.fixPropOpt.name] }}</div>
                  <div
                    v-if="
                      item[props.fixPropOpt.type] === props.fixTypeOpt.group
                    "
                    class="userCount"
                  >
                    ({{ item.userCount }})
                  </div>
                </div>
              </div>
            </el-radio>
            <template v-else>
              <div class="checkText">
                <div class="side"></div>
                <div class="iconBox">
                  <Avatar
                    :fixTypeOpt="props.fixTypeOpt"
                    :fixPropOpt="props.fixPropOpt"
                    :element="item"
                    :imageBaseUrl="props.imageBaseUrl"
                  ></Avatar>
                </div>
                <div class="name_number">
                  <div class="title">{{ item[props.fixPropOpt.name] }}</div>
                  <div
                    v-if="
                      item[props.fixPropOpt.type] === props.fixTypeOpt.group
                    "
                    class="userCount"
                  >
                    ({{ item.userCount }})
                  </div>
                </div>
              </div>
            </template>
            <span
              v-if="
                item[props.fixPropOpt.type] === props.fixTypeOpt.group &&
                props.children
              "
              class="nextLevel"
              :class="{
                'is-disabled': checkPosts?.find(
                  (v) => v === item[props.fixPropOpt.id]
                ),
              }"
              @click="
                handChild(
                  item,
                  checkPosts?.find((v) => v === item[props.fixPropOpt.id])
                )
              "
            >
              下级</span
            >
          </li>
        </el-radio-group>
      </template>
    </ul>
    <div v-else class="empty">
      <img src="../../../../assets/kong.webp" alt="" />
      <div>{{ props.emptyText }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left-pick-list {
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;

  :deep(.el-checkbox) {
    flex: none;
  }

  .post-view-list {
    .el-radio-group {
      width: 100%;
    }

    label {
      width: calc(100% - 40px);

      p {
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--ik-color-font-title);
        flex: 1;
      }
    }

    .el-checkbox {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
      :deep(.el-checkbox__label){
        padding-left: 0px!important;
      }
    }
    li .el-radio {
      margin-right: 0px;
      .el-radio__label {
        display: flex;
        align-items: center;
        width: 100%;

        svg {
          width: auto;
          height: 16px;
          fill: var(--el-text-color-secondary);
          padding-right: 5px;
        }
      }

      &.is-checked {
        .el-radio__label {
          svg {
            fill: var(--el-color-primary);
          }
        }
      }
    }
    .checkText {
      flex: 1;
      width: 100%;
      display: flex;
      align-items: center;
      overflow: hidden;
      // justify-content: space-between;
      .side {
        width: 16px;
        height: 16px;
        margin-right: 8px;
      }
      .name_number {
        font-size: 14px;
        color: var(--ik-color-font-title);
        height: 32px;
        overflow: hidden;
        flex: 1;
      }
    }
    .iconBox {
      width: 32px;
      height: 32px;
      margin-right: 8px;
    }
    .title {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      flex: 1;
      height: 32px;
      display: block;
      width: 0;
      line-height: 32px;
    }
    .userCount {
      color: var(--ik-color-font-secondary);
      margin: 0px 4px;
      height: 32px;
    }
    .nextLevel {
      color: var(--ik-color-primary);
      width: 40px;
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 14px;
      line-height: 40px;
      &::before {
        display: inline-block;
        content: " ";
        width: 1px;
        height: 14px;
        background-color: #e3e4e9;
        margin-right: 8px;
      }
      &.is-disabled {
        opacity: 0.5;
        cursor: not-allowed;
        // pointer-events: none;
      }
    }
  }
}
</style>
