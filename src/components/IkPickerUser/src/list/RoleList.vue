<!--
 * @Author       : wfl
 * @LastEditors: zqf
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2023-03-30 19:17:43
 * @LastEditTime: 2024-05-20 16:07:12
-->
<script setup lang="ts" name="RoleList">
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
    checkRoles.value = props.handList.map((v) => v[props.fixPropOpt.id]);
  else checkRole.value = props.handList?.[0]?.[props.fixPropOpt.id];
  return handLen > 0 && handLen < listLen;
});
const checkRoles: Ref<string[]> = ref(
  props.handList.map((v) => v[props.fixPropOpt.id])
);
const checkRole: Ref<string> = ref(props.handList?.[0]?.[props.fixPropOpt.id]);

const emit = defineEmits(["change", "check"]);

const handleCheckAllChange = (val: any) => {
  const _val = val ? props.list.map((v) => v[props.fixPropOpt.id]) : [];
  emit("change", _val, val ? props.list : []);
};
const handleCheckedListChange = (value: any[]) => {
  emit("change", value, props.list);
};

const handleCheckedChange = (val: any) => {
  emit("change", val, props.list);
};
</script>

<template>
  <!-- 遍历list多选 -->
  <div class="left-pick-list">
    <el-checkbox
      v-if="multiple && chooseType.includes('role') && list && list.length"
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
      >全选</el-checkbox
    >
    <ul v-if="list && list.length" class="role-view-list">
      <template v-if="multiple">
        <el-checkbox-group
          v-model="checkRoles"
          @change="handleCheckedListChange"
        >
          <li v-for="item in list" :key="item[fixPropOpt.id]">
            <el-checkbox
              v-if="
                chooseType.includes(item[props.fixPropOpt.type].toLowerCase())
              "
              :label="item[fixPropOpt.id]"
              :value="item[fixPropOpt.id]"
              :disabled="item.disabled"
            >
              <div class="iconBox">
                <Avatar
                  :fixTypeOpt="props.fixTypeOpt"
                  :fixPropOpt="props.fixPropOpt"
                  :element="item"
                  :imageBaseUrl="props.imageBaseUrl"
                ></Avatar>
              </div>
              <p :title="item[fixPropOpt.name]">{{ item[fixPropOpt.name] }}</p>
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
                <div class="title" :title="item[fixPropOpt.name]">
                  {{ item[fixPropOpt.name] }}
                </div>
              </div>
            </template>
          </li>
        </el-checkbox-group>
      </template>
      <template v-else>
        <el-radio-group
          :indeterminate="isIndeterminate"
          v-model="checkRole"
          @change="handleCheckedChange"
        >
          <li class="w-full" v-for="item in list" :key="item[fixPropOpt.id]">
            <el-radio
              v-if="
                chooseType.includes(item[props.fixPropOpt.type].toLowerCase())
              "
              :label="item[fixPropOpt.id]"
              :value="item[fixPropOpt.id]"
              :disabled="item.disabled"
            >
              <div class="ik-picker-single">
                <div class="iconBox">
                  <Avatar
                    :fixTypeOpt="props.fixTypeOpt"
                    :fixPropOpt="props.fixPropOpt"
                    :element="item"
                    :imageBaseUrl="props.imageBaseUrl"
                  ></Avatar>
                </div>
                <p :title="item[fixPropOpt.name]">
                  {{ item[fixPropOpt.name] }}
                </p>
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
                <div class="title" :title="item[fixPropOpt.name]">
                  {{ item[fixPropOpt.name] }}
                </div>
              </div>
            </template>
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

  .role-view-list {
    .el-radio-group {
      padding-top: 20px;
      width: 100%;
    }

    label {
      width: 100%;

      p {
        overflow: hidden;
        text-overflow: ellipsis;
        width: calc(100% - 20px);
      }
    }

    .el-checkbox-group {
      .el-checkbox {
        width: 100%;

        svg {
          width: auto;
          height: 16px;
          fill: var(--el-text-color-secondary);
          padding-right: 5px;
        }
      }
    }

    li .el-radio {
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
  }
  .checkText {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    .title {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      flex: 1;
      height: 32px;
      display: block;
      width: 0;
      line-height: 32px;
      font-size: 14px;
      color: var(--ik-color-font-title);
    }
  }
  .side {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
  .iconBox {
    width: 32px;
    height: 32px;
    margin-right: 8px;
    & + p {
      font-size: 14px;
      color: var(--ik-color-font-title);
    }
  }
}
</style>
