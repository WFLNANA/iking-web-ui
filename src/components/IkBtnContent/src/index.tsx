/*
 * @Author       : wfl
 * @LastEditors: qiye
 * @description  : 按钮包裹组件
 * @updateInfo   :
 * @Date         : 2022-11-02 14:57:18
 * @LastEditTime: 2023-09-25 18:14:10
 */
import { defineComponent } from 'vue'
import { MoreFilled } from '@element-plus/icons-vue'
import type { PropType, Ref } from 'vue'
import  { ref, watchEffect } from 'vue'
import './index.scss'

const IkBtnContent = defineComponent({
  name: 'IkBtnContent',
  components: {
    MoreFilled
  },
  props: {
    // 外部显示数量
    num: {
      type: Number,
      default: 3
    },
    // 如何触发展开
    trigger: {
      type: String as PropType<'click' | 'hover'>,
      default: 'click'
    },
    // 展开位置
    placement: {
      type: String as PropType<'top' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'bottom'>,
      default: 'bottom'
    }
  },
  setup(props, { slots, attrs }) {
    // 不在此解析slot dom; 会导致slot更新失效，虽然很多情况并不需要它更新，但这样写会导致Vue报一个警告。
    // const _slots = slots.default?.()
    const nodeSlot: Ref<any> = ref(null)
    const slotLen = ref(0)

    const filterSlot = (val: any) => {
      return val?.filter((sl: { children: any; }) => typeof sl.children !== 'string')
    }

    watchEffect(() => {
      nodeSlot.value = slots.default?.()?.filter(sl => typeof sl.children !== 'string')
      slotLen.value = nodeSlot.value?.length || 0
    })

    return () => (
      <div class="flex" >
        {
          // 未超出限制按钮渲染
          filterSlot(slots.default?.())?.map((sl: any, index: number) => {
            return (index + 1) > props.num ? null : sl
          })
        }
        {
          // 超出限制按钮渲染
          slotLen.value > props.num
            ? <el-dropdown trigger={props.trigger} popper-class="gl-btn-content">
              {{
                default: () => <el-icon title="更多" class="ml-[12px] more-operate"><MoreFilled /></el-icon>,
                dropdown: () =>
                  <el-dropdown-menu>
                    {
                      slotLen.value > props.num
                        ? filterSlot(slots.default?.())?.map((sl: any, index: number) => {
                          return index < props.num
                            ? null
                            : <el-dropdown-item>
                              <el-button {...sl?.props} link v-role={ sl?.dirs?.[0]?.value }>
                                {sl?.props?.title || sl?.props?.label}
                              </el-button>
                            </el-dropdown-item>
                        })
                        : null
                    }
                  </el-dropdown-menu>
              }}
            </el-dropdown>
            : null
        }
      </div>
    )
  }
})
export default IkBtnContent
