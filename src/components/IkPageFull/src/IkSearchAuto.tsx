/* eslint-disable multiline-ternary */
/*
 * @Author       : wfl
 * @LastEditors: qiye
 * @description  :
 * @updateInfo   :
 * @Date         : 2022-12-13 16:08:40
 * @LastEditTime: 2024-01-05 11:39:08
 */
import {
  ElCard,
  ElCheckbox,
  ElCheckboxGroup,
  ElCol,
  ElDatePicker,
  ElForm,
  ElFormItem,
  ElInput,
  ElInputNumber,
  ElOption,
  ElRadio,
  ElRadioGroup,
  ElRow,
  ElSelect,
  ElTreeSelect,
  ElRadioButton
} from 'element-plus'
import { computed, PropType, ref, Ref, defineEmits, watch, defineComponent } from 'vue'
import {IkingPickerUser} from "@iking-ui/components";
import { EDateType, EFormType } from './search'
import type { ISearchForm } from './search'
import { IkSvgIcon } from '@iking-ui/components'

export const IkSearchAuto = defineComponent({
  name: 'IkSearchAuto',
  props: {
    // 查询字段列表
    list: {
      required: true,
      type: Array as PropType<ISearchForm[]>,
      default: () => []
    },
    // 阴影
    shadow: {
      type: String as PropType<'always' | 'hover' | 'never'>,
      default: 'never'
    },
    // 初始首次查询
    immediate: {
      type: Boolean,
      default: true
    },
    // tab页,用于存储时区分tab
    tab: {
      type: String,
      default: ''
    },
    // 搜索方法
    search: {
      type: Function,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['search', 'pickerChange'],
  setup(props, { emit, expose }) {
    const refAutoForm = ref()
    const obj: { [key: string]: any; } = {}
    const cacheObj: { [key: string]: any; } = ref({})
    // const checkAll = ref(false)
    const checkedKeys: Ref<string[]> = ref([])
    // const isIndeterminate = computed(() => !checkAll && checkedKeys.value.length)
    const autoForm = ref({ ...cacheObj.value })

    watch(checkedKeys, (val, oldVal) => {
      const out = oldVal.filter(v => !val.includes(v))
      // 当存在取消的字段时，将字段值置为undefined，并重新请求
      if (out.length) {
        let flag = false
        out.forEach(o => {
          if (autoForm.value[o] !== undefined)
            flag = true
          autoForm.value[o] = undefined
        })
        // 即使搜索项改变 但只当数据改变时才触发查询
        flag && emit('search', autoForm.value)
      }
    })

    const resetFList = () => {
      checkedKeys.value = []
      props.list.forEach(item => {
        cacheObj.value[item.key] = cacheObj.value[item.value]
        obj[item.key] = obj[item.value]
        checkedKeys.value.push(item.key)
        autoForm.value[item.key] ??= item.value || null
      })
    }
    resetFList()
    watch(() => props.list, () => {
      resetFList()
    })

    const comList = computed(() =>
      checkedKeys.value.map(i => props.list.find(item => item.key === i))
    )

    const handFormSearch = () => {
      autoForm.value.page = 1
      props.search?.(autoForm.value)
      emit('search', autoForm.value)
    }

    // 重置表单并请求
    const resetForm = () => {
      refAutoForm.value?.resetFields?.()
      handFormSearch()
    }

    // 重新请求
    const reRequest = () => {
      handFormSearch()
    }
    // 向父级暴露重置、重新请求方法
    expose({ resetForm, reRequest })

    // form内容改变搜索
    const handChange = () => {
      emit('search', autoForm.value)
      props.search?.(autoForm.value)
    }
    // 回车·搜索
    const handSearch = (e: KeyboardEvent) => {
      if (e.key === 'Enter')
        handFormSearch()
    }
    const handRefresh = () => {
      refAutoForm.value?.resetFields()
      // autoForm.value = {}
      handFormSearch()
    }
    // 初始默认首次搜索
    props.immediate && handFormSearch()

    // const setDefaultValue = (key: string, value: any) => {
    //   autoForm.value[key] = value
    // }

    // 创建输入框
    const createInput = ({ maxlength, minlength, key, disabled, placeholder, formProp = {}, value, label }: ISearchForm) => {
      // setDefaultValue(key, value)
      return (
        <ElInput
          v-model={autoForm.value[key]}
          clearable={true}
          maxlength={maxlength}
          minlength={minlength}
          disabled={disabled}
          v-model={autoForm.value[key]}
          onBlur={() => handChange()}
          {...formProp}
          placeholder={formProp?.placeholder || placeholder || `请输入${label || ''}`}
        ></ElInput>
      )
    }
    // 创建数字输入框
    const createInputNumber = ({
      key,
      placeholder,
      max,
      min,
      disabled,
      precision,
      step = 1,
      label,
      formProp = {}
    }: ISearchForm) => {
      return (
        <ElInputNumber
          v-model={autoForm.value[key]}
          clearable={true}
          max={max}
          min={min}
          disabled={disabled}
          precision={precision}
          step={step}
          onChange={() => handChange()}
          {...formProp}
          placeholder={formProp?.placeholder || placeholder || `请输入${label || ''}`}
        ></ElInputNumber>
      )
    }
    // 创建下拉
    const createSelect = ({
      key,
      placeholder,
      disabled,
      options,
      label,
      multiple = false,
      filterable = true,
      formProp = {}
    }: ISearchForm) => {
      return (
        <ElSelect
          v-model={autoForm.value[key]}
          clearable={true}
          disabled={disabled}
          multiple={multiple}
          filterable={filterable}
          onChange={() => handChange()}
          {...formProp}
          placeholder={formProp?.placeholder || placeholder || `请选择${label || ''}`}
        >
          {options?.map(item => {
            return (
              <ElOption
                key={item.value}
                label={item.label}
                value={item.value}
              ></ElOption>
            )
          })}
        </ElSelect>
      )
    }
    // 创建单选
    const createRadio = ({ key, disabled, options, formProp = {} }: ISearchForm) => {
      return (
        <ElRadioGroup
          v-model={autoForm.value[key]}
          disabled={disabled}
          onChange={() => handChange()}
          {...formProp}
        >
          {options?.map(item => {
            return formProp?.radioType === 'button' ? (
              <ElRadioButton
                key={item.value}
                label={item.value}
                name={item.label}
              ></ElRadioButton>
            ) : (
              <ElRadio
                key={item.value}
                label={item.value}
                name={item.label}
              ></ElRadio>
            )
          })}
        </ElRadioGroup>
      )
    }
    // 创建多选
    const createCheckBox = ({
      key,
      disabled,
      options,
      min,
      max,
      formProp = {}
    }: ISearchForm) => {
      return (
        <ElCheckboxGroup
          v-model={autoForm.value[key]}
          disabled={disabled}
          max={max}
          min={min}
          onChange={() => handChange()}
          {...formProp}
        >
          {options?.map(item => {
            return (
              <ElCheckbox
                key={item.value}
                label={item.label}
                value={item.value}
              ></ElCheckbox>
            )
          })}
        </ElCheckboxGroup>
      )
    }
    const createTimePicker = ({ key, label, formProp = {}, placeholder }) => {
      return (
        <ElDatePicker
          v-model={autoForm.value[key]}
          onChange={() => handChange()}
          {...formProp}
          placeholder={formProp?.placeholder || placeholder || `请选择${label}时间`}
        ></ElDatePicker>
      )
    }
    // 创建日期选择
    const createDatePicker = ({
      key,
      disabled,
      editable = true,
      startPlaceholder = '开始日期',
      endplaceholder = '结束日期',
      dateType = EDateType.date,
      format,
      placeholder = '请选择日期',
      popperclass,
      rangeSeparator = '-',
      defaultValue,
      defaultTime,
      valueFormat,
      disabledDate = () => false,
      formProp = {}
    }: ISearchForm) => {
      let _format: string | undefined = format
      if (_format) {
        switch (dateType) {
          case EDateType.date:
          case EDateType.dates:
            _format = 'YYYY-MM-DD'
            break
          case EDateType.year:
            _format = 'YYYY'
            break
          case EDateType.month:
            _format = 'YYYY-MM'
            break
          case EDateType.week:
            _format = 'YYYY-MM-DD'
            break
          // case EDateType.dates:
          //   _format = "YYYY";
          //   break;
          default:
            _format = ''
        }
      }

      return (
        <ElDatePicker
          v-model={autoForm.value[key]}
          onChange={() => handChange()}
          disabled={disabled}
          type={dateType}
          editable={editable}
          startPlaceholder={startPlaceholder}
          endPlaceholder={endplaceholder}
          rangeSeparator={rangeSeparator}
          format={_format}
          popperClass={popperclass}
          defaultValue={defaultValue}
          defaultTime={defaultTime}
          valueFormat={valueFormat}
          disabledDate={disabledDate}
          {...formProp}
          placeholder={formProp?.placeholder || placeholder || '请选择日期'}
        ></ElDatePicker>
      )
    }
    // 创建树形下拉
    const createTreeSelect = ({
      key,
      options,
      multiple = false,
      filterable = true,
      nodeKey = 'id',
      props,
      highlightCurrent = true,
      defaultExpandAll = false,
      expandOnClickNode = false,
      placeholder = '全部',
      checkOnClickNode = false,
      showCheckbox = false,
      checkStrictly = true,
      defaultCheckedKeys = [],
      currentNodeKey = '',
      accordion = false,
      formProp = {},
      label
    }: ISearchForm) => {
      return (
        <ElTreeSelect
          v-model={autoForm.value[key]}
          data={options}
          onChange={() => handChange()}
          clearable
          multiple={multiple}
          props={props}
          placeholder={placeholder}
          filterable={filterable}
          nodeKey={nodeKey}
          highlightCurrent={highlightCurrent}
          defaultExpandAll={defaultExpandAll}
          expandOnClickNode={expandOnClickNode}
          checkOnClickNode={checkOnClickNode}
          showCheckbox={showCheckbox}
          checkStrictly={checkStrictly}
          defaultCheckedKeys={defaultCheckedKeys}
          currentNodeKey={currentNodeKey}
          accordion={accordion}
          {...formProp}
          placeholder={formProp?.placeholder || placeholder || `请选择${label || ''}`}
        ></ElTreeSelect>
      )
    }

    // 左侧为下拉的输入框
    const createSelectInput = ({
      key,
      selectKey,
      placeholder,
      disabled,
      options,
      multiple = false,
      filterable = true,
      formProp = {}
    }: ISearchForm) => {
      return (
        <ElInput
          disabled={disabled}
          v-model={autoForm.value[key]}
          onBlur={() => handChange()}
          {...formProp}
          placeholder={formProp?.placeholder || placeholder || '全部'}
        >
          {{
            prepend: () => <ElSelect
              disabled={disabled}
              multiple={multiple}
              filterable={filterable}
              v-model={autoForm.value[selectKey]}
              onChange={() => handChange()}
              {...formProp}
            >
              {options?.map(item => {
                return (
                  <ElOption
                    key={item.value}
                    label={item.label}
                    value={item.value}
                  ></ElOption>
                )
              })}
            </ElSelect>
          }}
        </ElInput>
      )
    }

    const baseUrl = ''
    const token = 'iking'
    const refIkingPicker = ref(null)
    const handList = ref([])
    const showPicker = ref(false)
    const pickerKey = ref('')
    const pickerMap = new Map()
    const handShowPicker = (key) => {
      showPicker.value = true
      handList.value = pickerMap.has(key) ? pickerMap.get(key) : autoForm.value[key]
      pickerKey.value = key
    }
    const handClearPicker = () => {
      pickerMap.set(pickerKey.value, [])
      pickerKey.value = ''
      handChange()
    }
    const handSelectedPicker = (data: any) => {
      autoForm.value[pickerKey.value] = data.list.map((v) => v.elementName)?.join(',')
      pickerMap.set(pickerKey.value, data.list)
      emit('search', autoForm.value)
      emit('pickerChange', data)
      props.search?.(autoForm.value)
    }
    // 创建选择人员和部门的组件
    // TODO 替换为新的人员选择组件
    const ChoosePerson = ({
      key,
      placeholder,
      typeOption,
      _list,
      maxlength,
      minlength,
      disabled,
      formProp
    }: ISearchForm) => {
      return (
        <ElInput
          v-model={autoForm.value[key]}
          clearable={true}
          maxlength={maxlength}
          minlength={minlength}
          disabled={disabled}
          {...formProp}
          onClick={() => handShowPicker(key)}
          onClear={() => handClearPicker()}
          placeholder={formProp?.placeholder || placeholder || `点击选择${label || '人员'}`}
        ></ElInput>
      )
    }

    // 根据类别返回
    const getFormItem = (item: any) => {
      switch (item.type) {
        case '':
        case undefined:
        case EFormType.input:
        case 'el-input':
          return createInput(item)
        case EFormType.number:
        case 'el-input-number':
          return createInputNumber(item)
        case EFormType.select:
        case 'el-select':
          return createSelect(item)
        case EFormType.checkbox:
        case 'el-checkbox':
          return createCheckBox(item)
        case EFormType.radio:
        case 'el-radio-group':
        case 'el-radio':
          return createRadio(item)
        case EFormType.date:
        case 'el-date-picker':
          return createDatePicker(item)
        case 'el-time-select':
          return createTimePicker(item)
        case EFormType.treeselect:
        case 'el-tree-select':
          return createTreeSelect(item)
        case EFormType.choosePerson:
          return ChoosePerson(item)
        case 'select-input':
          return createSelectInput(item)
        default:
          return <></>
      }
    }
    // 为保证响应性 - 在给options字段赋值时请直接付给Ref类型不要.value，否则将失去响应性能力。下拉列表不会动态更新
    const renderItem = computed(() => {
      const renderArr: any[] = []
      const len = comList.value.length - 1
      comList.value?.forEach((item, index) => {
        if (!item)
          return []
        // 占得列数 默认为 1  `el-col-${4 * multiple}`
        const multiple = item.col || 1
        renderArr.push(
          <ElCol xl={{ span: multiple * 6 }} lg={{ span: multiple * 6 }} md={{ span: multiple * 12 }} sm={{ span: multiple * 24 }} >
            {index === len ? (
              // 最后一个form后跟上选项className="last-form"
              <div class="last-form">
                <ElFormItem label={item.type === 'select-input' ? '' : item.label} prop={item.key}>
                  {getFormItem(item)}
                </ElFormItem>
                <IkSvgIcon name="icon-sousuo1" pop title="搜索" size="big" show-bg width={40} onClick={() => handChange()} />
                <IkSvgIcon name="icon-zhongzhi" pop title="重置并搜索" size="big" show-bg width={40} onClick={() => handRefresh()} />
              </div>
            ) : (
              <ElFormItem label={item.type === 'select-input' ? '' : item.label} prop={item.key}>
                {getFormItem(item)}
              </ElFormItem>
            )}
          </ElCol>
        )
      })
      return renderArr
    })

    return () => (
      <>
        {/* v - loading={props.loading}  */}
        <ElCard class="gl-search-card" shadow={props.shadow}>
          <ElForm
            class="auto-search-form"
            onKeyup={handSearch}
            ref={refAutoForm}
            model={autoForm.value}
          >
            <ElRow gutter={16}>{renderItem.value}</ElRow>
          </ElForm>
        </ElCard>
         <IkingPickerUser
          ref={refIkingPicker.value}
          v-model={handList.value}
          v-model:show={showPicker.value}
          append-to-body
          api={{
            methods: 'post',
            url: `${baseUrl}/server/component/pick/mix`,
            headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              'Authorization': token,
            }
          }}
          tabs = { ['group', 'role', 'post'] }
          chooseType={ ['user'] }
          typeOption = {{ dep: 'DEPT', user: 'USER', role: 'ROLE', post: 'POST' }}
          propOption={{ name: 'elementName', id: 'elementId', type: 'elementType',}}
          onOk={(val) => handSelectedPicker(val)}
        />
      </>
    )
  }
})

export default IkSearchAuto
