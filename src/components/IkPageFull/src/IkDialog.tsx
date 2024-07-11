import {
  ElCard,
  ElDialog,
  ElButton,
  ElCheckbox,
  ElCheckboxButton,
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
  ElRadioButton,
  ElSelect,
  ElTreeSelect,
  FormItemRule,
  FormInstance
} from 'element-plus'
// import {IkingPickerUser} from "@iking-ui/components";
import { defineComponent, computed, PropType, ref, Ref, defineAsyncComponent } from 'vue'
import type { ISearchForm } from './search'
import { _ } from 'iking-utils-pro'
import { EFormType } from './search'
const IkingPickerUser = defineAsyncComponent(() => import('@iking-ui/components/IkPickerUser/src/picker.vue'))

const IkDialog = defineComponent({
  name: "IkDialog",
  props: {
    // 字段名列表
    fields: {
      required: true,
      type: Array as PropType<ISearchForm[]>,
      default: () => []
    },
    // 是否展示弹框
    visible: {
      type: Boolean,
      default: false
    },
    // 表单对象的key值
    formKey: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // 弹框尺寸 sl l xl
    size: {
      type: String,
      default: 'l'
    },
    // 弹框标题
    title:{
      type: String,
      default: ''
    },
    // 回显的数据
    editData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  components: {
    IkingPickerUser
  },
  emits: ['addFunction', 'update:visible'],
  setup(props, { emit, expose, attrs, slots }) {
    const { dialog, t } = useConfig()
    const { baseUrl } = useHttpUrl()
    const token = useToken()
    const loading = ref(false)
    // 弹框是都显示
    const dVisible = ref(props.visible)
    // 表单实例
    const formRef: Ref<FormInstance | null> = ref(null)
    // 表单对象
    const form = ref(props.formKey)
    // 人员组建实例
    const refIkingPicker = ref()
    // 是否展示人员组建
    const showPicker = ref(false)
    watch(() => props.visible, (val) => {
      dVisible.value = val
    })
    // 计算弹框尺寸，返回初始设定的三类尺寸之一
    const getWidth = computed(() => {
      let width = dialog.l
      switch (props.size) {
        case 'sl':
          width = dialog.sl
          break
        case 'l':
          width = dialog.l
          break
        case 'xl':
          width = dialog.xl
          break
      }
      return width
    })

    // 向父级暴露表单对象
    expose({ formRef })
    // 打开弹框
    const handOpen = async () => {
      if (props.editData) {
        form.value = _.cloneDeep(props.editData)
      }
      else {
        form.value = _.cloneDeep(props.formKey)
      }
    }

    /**
     * @description: 取消
     * @return {*}
     */
    const handCancel = () => {
      emit('update:visible', false)
      formRef.value?.resetFields()
    }
    /**
     * @description: 提交表单
     * @return {*}
     */
    const handConfirm = () => {
      formRef.value?.validate(async (valid: boolean) => {
        if (loading.value)
          return
        if (valid) {
          emit('addFunction', form.value)
          nextTick(() => {
            emit('update:visible', false)
          })
        }
      })
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
          return createChoosePerson(item)
        case 'select-input':
          return createSelectInput(item)
        default:
          return null
      }
    }
    /**
     * @description: 选中的人员
     * @param {object} val
     * @param {any} item
     * @return {*}
     */
    const handSelected = async (val: { list: any[]; },item:any) => {
      item.handList = [...val.list]
      form.value[`${item.selectKey}`] = val.list.map(it=>it.elementName).join(';')
      form.value[`${item.key}`] =  item.handList
      refIkingPicker.value?.handClear()
    }
    // 打开人员组件
    const openShowPicker = (item:any) => {
      showPicker.value = true
    }
    /**
     * @description: 人员选择
     * @param {any} item
     * @return {*}
     */
    const createChoosePerson = (item: any) => {
      return (
        <>
        <ElInput
          v-model={form.value[`${item.selectKey}`]}
          clearable={true}
          placeholder={`请输入${item.label}`}
          {...item.formProp}
          onClick={() => openShowPicker(item)}
        >
        </ElInput>
        <IkingPickerUser
          ref={refIkingPicker}
          v-model={item.handList}
          v-model:show={showPicker.value}
          api={{
            methods: 'post',
            url: `${baseUrl}/server/component/pick/mix`,
            headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              'Authorization': token,
            },
          }}
          tabs={['group',]}
          choose-type={['user', ]}
          type-option={{ dep: 'DEPT', user: 'USER', role: 'ROLE', post: 'POST' }}
          prop-option={{
            name: 'elementName',
            id: 'elementId',
            type: 'elementType',
          }}
          onOk={(e:any)=>handSelected(e,item)}
        />
        </>

      )
    }
    /**
     * @description: input组件
     * @param {any} item
     * @return {*}
     */
    const createInput = (item: any) => {
      return (
        <ElInput
          v-model={form.value[`${item.key}`]}
          clearable={true}
          placeholder={`请输入${item.label}`}
          {...item.formProp}
        ></ElInput>
      )
    }
    // 创建数字输入框
    const createInputNumber = (item: any) => {
      return (
        <ElInputNumber
          v-model={form.value[`${item.key}`]}
          placeholder={`请输入${item.label}`}
          {...item.formProp}
        ></ElInputNumber>
      )
    }
    // 创建下拉
    const createSelect = (item: any) => {
      return (
        <ElSelect
          v-model={form.value[`${item.key}`]}
          clearable={true}
          placeholder={`请选择${item.label}`}
          {...item.formProp}
        >
          {item.formProp.options?.map((it: any) => {
            return (
              <ElOption
                key={it.value}
                label={it.label}
                value={it.value}
              ></ElOption>
            )
          })}
        </ElSelect>
      )
    }
    // 创建单选
    const createRadio = (item: any) => {
      return (
        <ElRadioGroup
          v-model={form.value[`${item.key}`]}
          {...item.formProp}
        >
           {item.formProp.options?.map((it:any) => {
            return item.formProp?.radioType === 'button' ? (
              <ElRadioButton
                key={it.value}
                label={it.value}
                name={it.label}
              ></ElRadioButton>
            ) : (
              <ElRadio
                key={it.value}
                label={it.value}
                name={it.label}
              ></ElRadio>
            )
          })}
        </ElRadioGroup>
      )
    }
    // 创建多选
    const createCheckBox = (item: any) => {
      return (
        <ElCheckboxGroup
          v-model={form.value[`${item.key}`]}
          {...item.formProp}
        >
           {item.formProp.options?.map((it:any) => {
            return item.formProp?.radioType === 'button' ? (
              <ElCheckboxButton
                key={it.value}
                label={it.value}
                name={it.label}
              ></ElCheckboxButton>
            ) : (
              <ElCheckbox
                key={it.value}
                label={it.value}
                name={it.label}
              ></ElCheckbox>
            )
          })}
        </ElCheckboxGroup>
      )
    }
    /**
     * @description: 时间选择器
     * @param {any} item
     * @return {*}
     */
    const createTimePicker = (item: any) => {
      return (
        <ElDatePicker
          v-model={form.value[`${item.key}`]}
          {...item.formProp}
        ></ElDatePicker>
      )
    }
    // 创建日期选择
    const createDatePicker = (item: any) => {
      return (
        <ElDatePicker
          v-model={form.value[`${item.key}`]}
          placeholder={`请选择${item.label}`}
          {...item.formProp}
        ></ElDatePicker>
      )
    }
    // 创建树形下拉
    const createTreeSelect = (item: any) => {
      return (
        <ElTreeSelect
          v-model={form.value[`${item.key}`]}
          data={item.formProp.options}
          placeholder={`请选择${item.label}`}
          {...item.formProp}
        ></ElTreeSelect>
      )
    }

    // 左侧为下拉的输入框
    const createSelectInput = (item: any) => {
      return (
        <ElInput
          v-model={form.value[`${item.key}`]}
          placeholder={`请输入${item.label}`}
          {...item.formProp}
        >
          {{
            prepend: () => <ElSelect
              v-model={form.value[`${item.selectKey}`]}
              {...item.formProp}
            >
              {item.formProp.options?.map((it: any) => {
                return (
                  <ElOption
                    key={it.value}
                    label={it.label}
                    value={it.value}
                  ></ElOption>
                )
              })}
            </ElSelect>
          }}
        </ElInput>
      )
    }
    /**
     * @description: 渲染表单
     * @param {*} computed
     * @return {*}
     */
    const renderItem = computed(() => {
      let arr: any[] = []
      props.fields?.forEach((item, index) => {
        if (item.isEdit) {
          arr.push(
            <ElFormItem label={item.type === 'select-input' ? '' : item.label} prop={item.key} rules={item.rules as FormItemRule}>
               {
                item.formEditSlot ?
                null :
                 getFormItem(item)
               }
            </ElFormItem >
          )
        }
      })
      return arr
    })


    return () => (
      <>
        <ElDialog
          v-model={dVisible.value}
          v-loading={loading.value}
          title={props.title}
          width={getWidth.value}
          draggable
          align-center
          close-on-click-modal={false}
          onClose={() => handCancel()}
          onOpen={() => handOpen()}
        >
          {{
            default: () => <>
              <ElForm
                ref={formRef}
                labelPosition={'top'}
                model={form.value}
                label-width={'80px'}
              >
                { renderItem.value }
              </ElForm >
            </>,
            footer: () => <div class="dialog-footer">
              <ElButton onClick={() => handCancel()}>取消</ElButton>
              <ElButton type="primary" onClick={() => handConfirm()}>确定</ElButton>
            </div >
          }}
        </ElDialog >

      </>
    )
  }
})
export default IkDialog
