<script lang="ts" setup name="IkSearch">
import { computed, ref, watch } from "vue"
import {
  Refresh,
  Search,
  Filter,
  ArrowUp,
  ArrowDown
} from "@element-plus/icons-vue"
import { FormInstance } from "element-plus"
import type { PropType, Ref } from "vue"
import type { TSearchForm } from "../index"
import {
  ElPopover,
  ElButton,
  ElCol,
  ElRow,
  ElForm,
  ElCard,
  ElCheckboxGroup,
  ElCheckbox,
  ElIcon
} from "element-plus"
import IkSearchAuto from "./IkSearchAuto.tsx"
import IKSearchHead from "../../IKSearchHead/src/IKSearchHead.vue"

const props = defineProps({
  enter: {
    type: Boolean,
    default: true
  },
  // 最小占用栅格数
  minSpan: {
    type: Number,
    default: 6
  },
  // inline
  inline: {
    type: Boolean,
    default: true
  },
  // 表单model
  model: {
    type: Object,
    default: () => {}
  },
  // 表单ref
  formRef: {
    type: Object as PropType<Ref<any> | null>,
    default: null
  },
  // label宽度
  labelWidth: {
    type: Number,
    default: 100
  },
  statusIcon: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ""
  },
  // card 阴影
  shadow: {
    type: String as PropType<"always" | "never" | "hover">,
    default: "never"
  },
  showSearch: {
    type: Boolean,
    default: true
  },
  //要展示的搜索列
  list: {
    type: Array as PropType<TSearchForm[]>,
    default: () => []
  },
  //表格展示头部几条数据
  rowData: {
    type: Array,
    default: () => []
  },
  // 默认显示搜索条件数量
  num: {
    type: Number,
    default: 4
  }
})

// emit事件
const emits = defineEmits<{
  (event: "refresh"): void
  (event: "search", value: any): void
  (event: "update:formRef", value: Ref<any>): void
  (event: "import", value: any): void
  (event: "export", value: any): void
  (event: "delete", value: any): void
}>()
const obj: { [key: string]: any } = {}
const cacheObj: { [key: string]: any } = {}
// const checkAll = ref(false)
const checkedKeys: Ref<string[]> = ref([])
// const isIndeterminate = computed(() => !checkAll && checkedKeys.value.length)
const autoForm = ref({ ...cacheObj })
// ref 重置
const _formRef: Ref<null | FormInstance> = ref(null)
const packIcon = ref(false)
watch(checkedKeys, (val, oldVal) => {
  const out = oldVal.filter((v) => !val.includes(v))
  // 当存在取消的字段时，将字段值置为undefined，并重新请求
  if (out.length) {
    let flag = false
    out.forEach((o) => {
      if (autoForm.value[o] !== undefined) flag = true
      autoForm.value[o] = undefined
    })
    // 即使搜索项改变 但只当数据改变时才触发查询
    flag && emits("search", autoForm.value)
  }
})
props.list.forEach((item, index) => {
  cacheObj[item.key] = cacheObj[item.value]
  if (index < props.num) {
    obj[item.key] = obj[item.value]
    checkedKeys.value.push(item.key)
  }
})
const comList = computed(() =>
  checkedKeys.value.map((i) => props.list.find((item) => item.key === i))
)
const fixSpan = computed(() => {
  const { minSpan } = props

  return comList.value.length < 4
    ? minSpan > 8
      ? minSpan
      : minSpan > 6
      ? minSpan
      : 6
    : minSpan
})

const handRefresh = () => {
  try {
    _formRef.value?.resetFields()
    emits("refresh")
    emits("search", autoForm.value)
  } catch (error) {}
}
const changePackUp = () => {
  packIcon.value = !packIcon.value
}
//
</script>

<template>
  <div>
    <IKSearchHead
      :rowData="props.rowData"
      @delete="emits('delete', rowData)"
      @import="emits('import', rowData)"
      @export="emits('export', rowData)"
    />
    <el-card
      class="gl-search-card"
      :class="packIcon ? 'pack-up-search' : 'ik-unfold-search'"
      :shadow="shadow"
    >
      <template v-if="title" #header>
        <h2>{{ title }}</h2>
      </template>

      <template #default>
        <el-form
          ref="_formRef"
          :inline="inline"
          :model="autoForm"
          :status-icon="statusIcon"
          :label-width="`${labelWidth}px`"
          class="in-label"
          @keydown.enter.prevent="emits('search', autoForm)"
        >
          <el-row :gutter="10">
            <el-col
              v-for="(item, i) in comList"
              :key="i"
              :class="
                [
                  'el-col',
                  'el-col-24',
                  `el-col-sm-${
                    12 * (item.col || 1) * (i === comList.length - 1 ? 2 : 1)
                  }`,
                  `el-col-md-${
                    8 * (item.col || 1) * (i === comList.length - 1 ? 2 : 1)
                  }`,
                  `el-col-lg-${
                    6 * (item.col || 1) * (i === comList.length - 1 ? 2 : 1)
                  }`,
                  `el-col-xl-${
                    4 * (item.col || 1) * (i === comList.length - 1 ? 2 : 1)
                  }`,
                  'is-guttered',
                  'el-col-4',
                  `el-col-l-${
                    4 * (item.col || 1) * (i === comList.length - 1 ? 2 : 1)
                  }`,
                  `el-col-sl-${
                    5 * (item.col || 1) * (i === comList.length - 1 ? 2 : 1)
                  }`,
                  `${i === comList.length - 1 ? 'last-col' : ''}`
                ].join(' ')
              "
            >
              <div
                class="last-with-btn"
                :class="i === comList.length - 1 ? 'last-form' : ''"
              >
                <slot v-if="!!item?.slot" :name="item?.slot"></slot>
                <IkSearchAuto
                  v-if="!item?.slot"
                  @handleChange="emits('search', autoForm)"
                  :list="[list[i]]"
                />
                <template v-if="i + 1 === comList.length">
                  <el-button
                    v-if="showSearch"
                    class="icon-more el-icon ml"
                    title="查询"
                    :icon="Search"
                    @click="emits('search', autoForm)"
                  />
                  <el-button
                    :icon="Refresh"
                    class="icon-more el-icon ml"
                    title="重置"
                    @click="handRefresh"
                  />
                  <!-- <el-popover
                    placement="right"
                    popper-class="gl-search-form-popper"
                    width="100"
                    trigger="click"
                  >
                    <template #reference>
                      <el-icon
                        className="icon-more el-icon ml"
                        title="选择搜索项"
                      >
                        <Filter />
                      </el-icon>
                    </template>
                    <template #default>
                      <el-checkbox-group v-model="checkedKeys" :min="1">
                        <el-checkbox
                          v-for="(item, i) in props.list"
                          :key="i"
                          :label="item.key"
                        >
                          {{ item.label }}
                        </el-checkbox>
                      </el-checkbox-group>
                    </template>
                  </el-popover> -->
                </template>
              </div>
            </el-col>
          </el-row>
        </el-form>
      </template>
    </el-card>
    <div class="ik-pack">
      <div class="ik-pack-up" @click="changePackUp">
        <el-icon size="16">
          <ArrowUp v-show="!packIcon" />
        </el-icon>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// @import "../../../theme/global.scss";
</style>
<style lang="scss" scoped>
.gl-search-card {
  background: var(--ik-cencolor-bg);
  box-shadow: 0 10px 30px 6px #c5c9d845;
  .in-label :deep(.el-form-item) {
    border-radius: var(
      --el-border-radius-base
    ); // var(--el-input-border-radius, var(--el-border-radius-base));
    transition: var(--el-transition-box-shadow);
    background-color: var(--ik-color-bg) !important;
    // box-shadow: 0 0 0 1px var(--el-border-color) inset;
    padding: 3px 8px;
    .el-input__wrapper {
      box-shadow: 0 0 0 1px #fff0 inset;
      background-color: var(--ik-color-bg) !important;
      padding: 0;
    }

    .el-form-item__label {
      width: auto !important;
      color: var(--el-text-color-regular);
      font-weight: 600;
    }

    .el-select:hover:not(.el-select--disabled) .el-input__wrapper {
      box-shadow: 0 0 0 1px #fff0 inset;
    }

    .el-select .el-input.is-focus .el-input__wrapper {
      box-shadow: 0 0 0 1px #fff0 inset !important;
    }

    .el-select,
    .select-trigger {
      --el-select-input-focus-border-color: transparent;

      border: none;
    }

    .el-date-editor.el-input,
    .el-date-editor.el-input__wrapper {
      width: 100%;
    }
  }
  .last-col {
    margin-bottom: 0px !important;
  }

  &.el-card {
    border: none;

    :deep(.el-card__body) {
      display: flex;
      padding: var(--el-card-padding) var(--el-card-padding) 0
        var(--el-card-padding);
    }
  }

  :deep(.el-card__header) {
    border-bottom: none;

    h2 {
      font-weight: 600;
    }
  }

  &.noBody {
    :deep(.el-card__body) {
      padding: 0;
    }
  }

  .last-with-btn {
    display: flex;
    .icon-more {
      font-size: 18px;
      height: 40px;
      border: none;
      width: 40px;
      cursor: pointer;
      margin-left: 8px;
      transition: all 0.25s;
      background: #f3f6f9;
      border-radius: 6px;
    }
    :deep(.el-form-item) {
      margin-right: 0;
    }
  }

  .el-form {
    flex: 1;
  }

  :deep(.el-row) .el-form-item {
    width: calc(100% - 32px);
  }

  :deep(.el-form--inline) .el-form-item {
    .el-form-item__content > div {
      width: 100%;
    }
  }
}
.gl-search-form-popper {
  .el-checkbox-group {
    max-height: 40vh;
    overflow-y: auto;
  }
}
.gl-search-form-popper {
  .el-checkbox-group {
    max-height: 40vh;
    overflow-y: auto;
  }
}
@media only screen and (min-width: 1750px) {
  .el-col-l-2 {
    display: block;
    max-width: 50%;
    flex: 0 0 50%;
  }

  .el-col-l-4 {
    display: block;
    max-width: 21.6666667%;
    flex: 0 0 21.6666667%;
  }

  .el-col-l-5 {
    display: block;
    max-width: 20%;
    flex: 0 0 20%;
  }

  .el-col-l-6 {
    display: block;
    max-width: 25%;
    flex: 0 0 25%;
  }

  .el-col-l-8 {
    display: block;
    max-width: 33.333333%;
    flex: 0 0 33.333333%;
  }

  .gl-search-card
    .el-card__body
    .el-col-sl-10.last-col
    .last-form
    :deep(.el-form-item) {
    width: calc(61% - 10px) !important;
  }
}
.ik-pack {
  display: flex;
  align-items: center;
  justify-content: center;
  .ik-pack-up {
    height: 14px;
    border: none;
    width: 60px;
    cursor: pointer;
    background: var(--ik-cencolor-bg);
    border-radius: 0 0 14px 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 30px 6px #c5c9d845;
  }
}
</style>
