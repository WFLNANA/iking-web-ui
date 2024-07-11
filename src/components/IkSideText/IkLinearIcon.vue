<!--
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2024-01-15 17:27:14
 * @LastEditTime: 2024-01-16 10:57:44
-->
<script lang="ts" setup>
import {useLinear} from "./useLinear";
import {computed} from "vue";

const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
  backgroundColor: {
    type: String,
    default: '',
  },
  size: {
    type: Number,
    default: 40,
  },
})

const { getLinearGradient } = useLinear()

// <span :title="form.name" class="form-name text-over-line">{{ form.name }}</span>

const size = computed(() => `${props.size}px`)
</script>

<template>
  <div class="form-icon" :style="{ backgroundImage: getLinearGradient(backgroundColor || '#28b8a4') }">
    <i :class="`ikflow ${icon}`"></i>
  </div>
</template>

<style lang="scss" scoped>
.form-icon {
  --ik-color-white: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  width: v-bind(size);
  height: v-bind(size);
  border-radius: 4px;

  i {
    font-size: 27px;
    color: var(--ik-color-white);
  }
}
</style>
