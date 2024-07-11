<!--
 * @Author: zqf
 * @Date: 2024-03-20 09:34:49
 * @email: 13289847921@163.com
 * @LastEditors: zqf
 * @LastEditTime: 2024-04-18 14:48:08
 * @Description: 
-->
<script setup lang="ts">
const props = defineProps({
  fixPropOpt: {
    type: Object,
    default: () => {},
  },
  fixTypeOpt: {
    type: Object,
    default: () => {},
  },
  element: {
    type: Object,
    default: () => {},
  },
  imageBaseUrl: {
    type: String,
    default: "",
  },
});
import Role from "../svg/role_svg.vue";
import PostSvg from "../svg/post_svg.vue";
import OrgSvg from "../svg/org_svg.vue";
import GroupSvg from "../svg/group_svg.vue";
const loadUrl = props.imageBaseUrl
  ? `${props.imageBaseUrl}/server/oss/download?fileUrl=`
  : `${location.origin}/server/oss/download?fileUrl=`;
const setFileUrl = (url: string) => {
  return url ? (url.startsWith("http") ? url : `${loadUrl}${url}`) : "";
};
</script>
<template>
  <div class="avatar">
    <GroupSvg
      v-if="props.fixTypeOpt.group === element[props.fixPropOpt.type]"
    />
    <Role
      v-else-if="props.fixTypeOpt.role === element[props.fixPropOpt.type]"
    />
    <PostSvg
      v-else-if="props.fixTypeOpt.post === element[props.fixPropOpt.type]"
    />
    <div
      v-else-if="props.fixTypeOpt.user === element[props.fixPropOpt.type]"
      class="user_box"
    >
      <el-avatar
        v-if="element[fixPropOpt.avatar]"
        shape="square"
        :src="setFileUrl(fixPropOpt.avatar ? element[fixPropOpt.avatar] : '')"
      />
      <div v-else class="avatar_name">
        {{ element[fixPropOpt.name].slice(-2) }}
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.avatar {
  width: 100% !important;
  height: 100%;
  border-radius: 6px;
  background-color: var(--ik-color-bg-head);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  svg {
    fill: var(--ik-color-primary);
    width: calc(100% - 35%);
    height: calc(100% - 35%);
    margin: 0px !important;
  }
  .user_box {
    width: 100% !important;
    height: 100%;
  }
  .avatar_name {
    width: 100%;
    height: 100%;
    background-color: var(--ik-color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--ik-color-font-reverse);
    font-size: 14px;
  }
}
.el-avatar {
  width: 100% !important;
  height: 100% !important;
  display: block;
  background-color: var(--ik-color-primary);
}
</style>
