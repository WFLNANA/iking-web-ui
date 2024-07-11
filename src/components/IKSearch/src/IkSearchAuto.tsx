import { computed, ref, watch, defineComponent } from "vue"
import type { PropType, Ref } from "vue"
import {
  ElCheckbox,
  ElCheckboxGroup,
  ElDatePicker,
  ElFormItem,
  ElInput,
  ElInputNumber,
  ElOption,
  ElRadio,
  ElRadioGroup,
  ElSelect,
  ElTreeSelect
} from "element-plus"
import { EDateType, EType } from "./index"
import type { TSearchForm } from "./index.ts"
import { IkingPickerUser } from "@iking-ui/components"
const IkSearchAuto = defineComponent({
  name: "IkSearchAuto",
  props: {
    // 查询字段列表
    list: {
      required: true,
      type: Array as PropType<TSearchForm[]>,
      default: () => []
    },
    // 阴影
    shadow: {
      type: String as PropType<"always" | "hover" | "never">,
      default: "never"
    },
    // 初始首次查询
    immediate: {
      type: Boolean,
      default: true
    },
    // 默认显示搜索条件数量
    num: {
      type: Number,
      default: 4
    },
    // tab页,用于存储时区分tab
    tab: {
      type: String,
      default: ""
    }
  },
  emits: ["handleChange"],
  setup(props, { emit, expose }) {
    // form内容改变搜索
    const formModel = ref(props.list)
    const { list } = props
    const handleChange = () => {
      emit("handleChange", formModel)
    }

    // 创建输入框
    const createInput = ({
      key,
      placeholder,
      maxlength,
      minlength,
      disabled
    }: TSearchForm) => {
      return (
        <ElInput
          v-model={formModel.value[key]}
          clearable={true}
          maxlength={maxlength}
          minlength={minlength}
          disabled={disabled}
          onChange={() => handleChange()}
          placeholder={placeholder || "全部"}
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
      step = 1
    }: TSearchForm) => {
      return (
        <ElInputNumber
          v-model={formModel.value[key]}
          clearable={true}
          max={max}
          min={min}
          disabled={disabled}
          precision={precision}
          step={step}
          onChange={() => handleChange()}
          placeholder={placeholder || "全部"}
        ></ElInputNumber>
      )
    }
    // 创建下拉
    const createSelect = ({
      key,
      placeholder,
      disabled,
      options,
      multiple = false,
      filterable = true
    }: TSearchForm) => {
      return (
        <ElSelect
          v-model={formModel.value[key]}
          clearable={true}
          disabled={disabled}
          multiple={multiple}
          filterable={filterable}
          onChange={() => handleChange()}
          placeholder={placeholder || "全部"}
        >
          {options?.map((item) => {
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
    const createRadio = ({ key, disabled, options }: TSearchForm) => {
      return (
        <ElRadioGroup
          v-model={formModel.value[key]}
          disabled={disabled}
          onChange={() => handleChange()}
        >
          {options?.map((item) => {
            return (
              <ElRadio
                key={item.value}
                label={item.label}
                value={item.value}
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
      max
    }: TSearchForm) => {
      return (
        <ElCheckboxGroup
          v-model={formModel.value[key]}
          disabled={disabled}
          max={max}
          min={min}
          onChange={() => handleChange()}
        >
          {options?.map((item) => {
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
    // 创建日期选择
    const createDatePicker = ({
      key,
      disabled,
      editable = true,
      startPlaceholder = "开始日期",
      endplaceholder = "结束日期",
      dateType = EDateType.date,
      format,
      placeholder = "请选择日期",
      popperclass,
      rangeSeparator = "-",
      defaultValue,
      defaultTime,
      valueFormat,
      disabledDate = () => false
    }: TSearchForm) => {
      let _format: string | undefined = format
      if (!_format) {
        switch (dateType) {
          case EDateType.date:
          case EDateType.dates:
            _format = "YYYY-MM-DD"
            break
          case EDateType.year:
            _format = "YYYY"
            break
          case EDateType.month:
            _format = "YYYY-MM"
            break
          case EDateType.week:
            _format = "YYYY-MM-DD"
            break
          // case EDateType.dates:
          //   _format = "YYYY";
          //   break;
          default:
            _format = "YYYY-MM-DD"
        }
      }

      return (
        <ElDatePicker
          v-model={formModel.value[key]}
          onChange={() => handleChange()}
          placeholder={placeholder}
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
        ></ElDatePicker>
      )
    }
    // 创建树形下拉
    const createTreeSelect = ({
      key,
      options,
      multiple = false,
      filterable = true,
      nodeKey = "id",
      props,
      highlightCurrent = true,
      defaultExpandAll = false,
      expandOnClickNode = false,
      placeholder = "全部",
      checkOnClickNode = false,
      showCheckbox = false,
      checkStrictly = true,
      defaultCheckedKeys = [],
      currentNodeKey = "",
      accordion = false
    }: TSearchForm) => {
      return (
        <ElTreeSelect
          v-model={formModel.value[key]}
          data={options}
          onChange={() => handleChange()}
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
        ></ElTreeSelect>
      )
    }
    //创建选择人员和部门的组件
    const ChoosePerson = ({
      key,
      placeholder,
      typeOption,
      _list,
      data,
      handSetChild
    }: TSearchForm) => {
      return (
        <IkingPickerUser
          typeOption={typeOption}
          list={_list}
          key={key}
          props={props}
          data={data}
          handSetChild={handSetChild}
          placeholder={placeholder}
        />
      )
    }

    // 根据类别返回
    const getFormItem = (item: any) => {
      switch (item.type) {
        case "":
        case undefined:
        case EType.input:
          return createInput(item)
        case EType.number:
          return createInputNumber(item)
        case EType.select:
          return createSelect(item)
        case EType.checkbox:
          return createCheckBox(item)
        case EType.radio:
          return createRadio(item)
        case EType.date:
          return createDatePicker(item)
        case EType.treeselect:
          return createTreeSelect(item)
        case EType.choosePerson:
          return ChoosePerson(item)
        default:
          return <></>
      }
    }
    // 为保证响应性 - 在给options字段赋值时请直接付给Ref类型不要.value，否则将失去响应性能力。下拉列表不会动态更新
    const renderItem = computed(() => {
      const renderArr: any[] = []
      list.forEach((item, index) => {
        if (!item) return []
        renderArr.push(
          <ElFormItem label={item.label} prop={item.key}>
            {getFormItem(item)}
          </ElFormItem>
        )
      })
      return renderArr
    })

    return () => <>{renderItem.value}</>
  }
})

export default IkSearchAuto
