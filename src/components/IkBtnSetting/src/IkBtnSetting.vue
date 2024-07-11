<!--
 * @Author       : wfl
 * @LastEditors: qiye
 * @description  :
 * @updateInfo   :
 * @Date         : 2022-11-02 18:15:19
 * @LastEditTime: 2023-11-10 15:06:11
-->
<script lang="ts" setup name="IkBtnSetting">
import type { PropType, Ref } from 'vue'
import {watch, ref, computed} from 'vue';
import { _, ikStore } from 'iking-utils-pro'
import type { ISearchForm } from '@iking-ui/enum/search'
import {IkSvgIcon, IkDragList} from '@iking-ui/components';

const props = defineProps({
  list: {
    type: Array as PropType<Array<ISearchForm>>,
    default: () => []
  },
  // 区分页面tab页
  tab: {
    type: [String, Number],
    default: ''
  },
  // button按钮类型
  type: {
    type: String as PropType<'success' | 'warning' | 'info' | 'danger'>,
    default: 'primary'
  },
  // 按钮类型
  btnType: {
    type: String as PropType<'icon' | 'button'>,
    default: 'icon'
  },
  // button按钮是否为圆形
  circle: {
    type: Boolean,
    default: true
  },
  // inline模式一行显示多个
  inline: {
    type: Boolean,
    default: false
  },
  // 角色
  role: {
    type: String,
    default: ''
  },
  config: {
    type: Object,
    default: () => ({
      t: (str: string) => str,
      dialog: {
        l: '700px',
        sl: '600px'
      },
      path: 'user_0',
      user:{
        id: '111'
      }
    })
  }
})

const emit = defineEmits(['sort'])
const model = defineModel({
  type: Array as PropType<Array<ISearchForm>>,
  default: () => []
})

const { t, dialog, path, user } = props.config;

const _key = computed(() => `${user?.id}_${path}${props.tab !== '' ? `_${props.tab}` : ''}`)
const renderFields: Ref<Array<ISearchForm>> = ref([])
const checkList: Ref<string[]> = ref([])
const sortList: Ref<Array<ISearchForm>> = ref([])
const sortMap: Map<string, ISearchForm> = new Map()

const checkAll = ref(false)
const immediate = computed(() => {
  const isImmediate
    = checkList.value.length && checkList.value.length !== props.list.length
  if (!isImmediate && checkList.value.length)
    checkAll.value = true
  return Boolean(isImmediate)
})

const handUpdateCheck = (statu?: any) => {
  const copyList = _.cloneDeep(sortList.value)
  copyList?.forEach(s => {
    if (!checkList.value.length) {
      sortList.value = []
    }
    else if (!checkList.value.includes(s?.key)) {
      const soIndex = sortList.value?.findIndex(sor => sor.key === s.key)
      soIndex !== -1 && sortList.value.splice(soIndex, 1)
      s.show = false
      sortMap.set(s.key, s)
    }
  })

  checkList.value.forEach(v => {
    const index = sortList.value?.findIndex(s => s?.key === v)
    if (index === -1) {
      const _obj = sortMap.get(v)
      if (_obj) {
        _obj.show = true
        sortList.value.push(_obj)
      }
    }
  })
  if (!sortList.value?.length)
    sortList.value = _.cloneDeep(props.list)

  if (statu === true) {
    emit('sort', _.cloneDeep(sortList.value))
    model.value = _.cloneDeep(sortList.value)
  }
}
const handCheckAll = (bool: any) => {
  if (!bool) {
    const operate = props.list.find(v => (!v.key || v.label === '操作'))
    checkList.value = operate ? [operate.key] : []
  }
  else {
    checkList.value = props.list.map(v => v.key)
  }

  handUpdateCheck()
}

// 判断是否有缓存，有则从缓存中获取，否则获取页面数据并存储
const getCache = () => {
  const res = ikStore.local.getItem(_key.value)
  try {
    const _list = _.cloneDeep(props?.list)
    if (!res || !res?.length) {
      ikStore.local.setItem(
        _key.value,
        _list.map(({ show, type, key, label, width, minWidth, align }) => {
          return {
            show,
            key,
            type,
            label,
            width,
            minWidth,
            align
          }
        })
      )
    }

    renderFields.value = [
      ...(_list?.map(v => {
        sortMap.set(v.key, v)
        return {
          ...v,
          show: v.show || false
        }
      }) || [])
    ]
    if (res) {
      const _cache = res
        .filter((v: { show: any; }) => v.show)
        .map((v: { key: any; }) => v.key)
      checkList.value = [..._cache]
    }
    else {
      const _filter = renderFields.value.filter(v => {
        return v.show
      })
      checkList.value = _filter.map(v => v.key)
    }
    handUpdateCheck(true)
  }
  catch (error) {
    console.info('error: ', error)
  }
}
getCache()

watch(() => props.list, () => {
  getCache()
}, { deep: true })

const visible = ref(false)
const handShow = () => {
  visible.value = true
}

const handSortChange = (val: ISearchForm[]) => {
  sortList.value = val
}
const handSortEnd = () => {
  visible.value = false
  ikStore.local.setItem(
    _key.value,
    sortList.value.map(({ show, key, label, value, width, minWidth, align }) => {
      return {
        show,
        key,
        label,
        value,
        width,
        minWidth,
        align
      }
    })
  )
  emit('sort', _.cloneDeep(sortList.value))
  model.value = _.cloneDeep(sortList.value)
}
</script>

<template>
  <el-button v-if="btnType === 'button'" v-role="$props.role" v-bind="$attrs" :circle="circle" :type="type"
    :style="{ minWidth: circle ? '40px' : '', minHeight: circle ? '40px' : '' }" @click="handShow">
    <template #icon>
      <i class="ik ik-shezhi"></i>
    </template>

    <template v-if="!circle" #default>
      <!-- {{ t("action.setting") }} -->
      {{ t("设置") }}
    </template>
  </el-button>
  <IkSvgIcon v-if="btnType === 'icon'" v-role="$props.role" name="iksvg_shezhi-daohang" show-bg size="default"
    v-bind="$attrs" @click="handShow" />

  <el-dialog v-model="visible" draggable :width="inline ? dialog.l : dialog.sl" :close-on-click-modal="false"
    :close-on-press-escape="false" title="显示字段" append-to-body @open="getCache">
    <div class="view-fields" :class="[!inline ? 'un-inline' : null]">
      <div :style="{ flex: inline ? 2 : 1 }">
        <el-checkbox v-model="checkAll" class="single-line" :indeterminate="immediate" @change="handCheckAll">
          全选
        </el-checkbox>
        <el-checkbox-group v-model="checkList" @change="handUpdateCheck">
          <el-checkbox v-for="item in renderFields" :key="item.key" :disabled="!item.key" :label="item.key">
            {{ item.label }}
          </el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="check-right">
        <IkDragList :list="sortList" :item-style="{ bottom: 4 }" @change="handSortChange" />
      </div>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="visible = false">
          {{ t("关闭") }}
          <!-- {{ t("action.close") }} -->
        </el-button>
        <el-button type="primary" :disabled="sortList.length < 2" @click="handSortEnd">
          {{ sortList.length < 2 ? '至少选择一个字段' : t("确定") }} </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.view-fields.un-inline {
  .el-checkbox {
    width: 100%;
    background: var(--ik-sub-sidebar-menu-bg);
    margin: 2px 0;
    padding: 8px;
    border-radius: 4px;
    height: 37px;
  }
}

.view-fields {
  display: flex;
  justify-content: space-between;
  max-height: 55vh;
  overflow-y: auto;
  overflow-x: hidden;
  // min-height: 325px;
  .check-right{
    margin-top: 37px;
  }

  .single-line {
    background-color: transparent !important;
  }

  & > div:nth-child(1) {
    padding-right: 8px;
    flex: 2;
    border-right: 1px solid var(--el-border-color);
  }

  & > div:nth-child(2) {
    flex: 1;
    margin-left: 8px;

    .field-sort {
      cursor: move;
      padding: calc(var(--base-p) / 2);
      color: var(--el-text-color-regular);
    }
  }

  .el-checkbox {
    width: 195px;
    margin-right: 0;
  }
}
</style>
