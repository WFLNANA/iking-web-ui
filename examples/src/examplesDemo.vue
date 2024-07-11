<!--
 * @Author: zqf
 * @LastEditors: zqf
 * @description: 
 * @updateInfo: 
 * @Date: 2024-06-07 15:59:00
 * @LastEditTime: 2024-06-07 13:46:19
-->
<template>
    <div class="examples">
  <div class="demo-tabs" tab-position="left">
    <div v-for="demo in demoList" :label="demo.name" :name="demo.name">
        <div>{{ demo }}</div>
      <!-- <component :is="demo.name"></component> -->
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import Demos from "./examplesDemos";

export default {
  name: "ExamplesDemo",
  components: {
    ...Demos,
  },
  computed: {
    demoList() {
      const result = [];
      for (const key of Object.keys(Demos)) {
        result.push({ name: key, component: Demos[key] });
      }
      return result;
    },
  },
  data() {
    return {
      activeName: "",
    };
  },
};
</script>
<style lang="scss" scoped>
.examples{
    background: #fff;
    min-height: 100%;
    min-width: 100%;
    overflow-y: auto;
}
</style>
