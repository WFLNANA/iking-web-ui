<!--
 * @Author       : wfl
 * @LastEditors  : wfl
 * @description  :
 * @updateInfo   :
 * @Date         : 2024-03-14 11:00:23
 * @LastEditTime : 2024-04-19 12:25:33
-->
<script lang="ts" setup name="IkIconPicker">
import IconJsons from "./icon.json";
import IconSingleJson from './icon-single.json'
import { ref, Ref, watch } from "vue";
import { _ } from 'iking-utils-pro'
import { IkSvgIcon } from '@iking-ui/components'

const props = defineProps({
  icon: {
    type: Object,
    default: () => {
      return {
        icon: IconJsons,
        iconSingle: IconSingleJson,
      }
    },
  },
  size: {
    type: Number,
    default: 20
  }
})

const value = defineModel({
  type: String,
  default: '',
})
const visible = ref(false)

let icons: { single?: Array<any>, double?: Array<any> } = {}
const filterIcons: Ref<{ single?: Array<any>, double?: Array<any> }> = ref({})
const target = ref(null)

function formatJson() {
  const _IconJsons = props.icon.icon
  const _IconSingleJson = props.icon.iconSingle
  icons = {
    double: _IconJsons.glyphs.map((item: any) => {
      return {
        ...item,
        class: `${_IconJsons.css_prefix_text}${item.font_class}`,
      }
    }),
    single: _IconSingleJson.glyphs.map((item: any) => {
      return {
        ...item,
        class: `${_IconSingleJson.css_prefix_text}${item.font_class}`,
      }
    }),
  }
  filterIcons.value = _.cloneDeep(icons)
}
formatJson()

function handSelect(item: { class: string }) {
  value.value = item.class
}

function handleClear() {
  value.value = ''
}

const filterText = ref('')
watch(filterText, (newVal) => {
  filterIcons.value = {
    single: icons.single!.filter(item => item.name?.includes(newVal)),
    double: icons.double!.filter(item => item.name?.includes(newVal)),
  }
})

const activeName = ref('double')
</script>

<template>
  <el-popover ref="target" title="" :hide-after="0" popper-class="icon-picker-pop" :width="400" trigger="click">
    <el-input v-model="filterText" clearable placeholder="输入图标名称检索">
      <template #suffix>
        <IkSvgIcon name="iksvg_sousuo-daohang" />
      </template>
    </el-input>
    <el-tabs v-model="activeName">
      <el-tab-pane label="双色图标" name="double">
        <div class="icon-list">
          <IkSvgIcon v-for="ic in filterIcons.double" :key="ic.name" :primary="ic.class === value" :size="20"
            :title="ic.name" :name="ic.class" @click="handSelect(ic)" />
        </div>
      </el-tab-pane>
      <el-tab-pane label="单色图标" name="single">
        <div class="icon-list">
          <IkSvgIcon v-for="ic in filterIcons.single" :key="ic.name" :primary="ic.class === value" :size="20"
            :title="ic.name" :name="ic.class" @click="handSelect(ic)" />
        </div>
      </el-tab-pane>
    </el-tabs>
    <template #reference>
      <div class="icon-picker-header font-size-[var(--ik-margin-m-28)] line-height-[0]" @click="handChooseIcon">
        <IkSvgIcon v-if="value" :name="value" :size="size" />
        <IkSvgIcon v-else name="iksvg_guanbibeifen" :size="size" />
        <IkSvgIcon v-if="value" title="删除图标" name="iksvg_guanbi" error class="icon-delete"
          @click.stop="handleClear" />
      </div>
    </template>
  </el-popover>
</template>

<style lang="scss" scoped>
.icon-picker-pop {
  .icon-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 36px);
    grid-gap: var(--ik-margin-s-16);
    justify-content: flex-start;
    justify-items: flex-end;
    max-height: 400px;
    margin-top: 16px;
    overflow-y: auto;
    font-size: 25px;
  }
}
</style>

<style lang="scss">
.icon-picker-header {
  position: relative;
  display: inline-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--ik-base-height);
  height: var(--ik-base-height);
  cursor: pointer;
  border: 1px dashed var(--ik-color-divider);
  border-radius: var(--ik-border-radius-xs);
  transition: border 0.25s ease-in-out;

  &:hover {
    border-color: var(--ik-color-primary);
  }

  .icon-delete {
    position: absolute;
    top: -6px;
    right: -8px;
    font-size: var(--ik-font-size-t2);
  }
}
</style>
