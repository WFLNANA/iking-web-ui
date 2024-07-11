/*
 * @Author       : wfl
 * @LastEditors  : wfl
 * @description  :
 * @updateInfo   :
 * @Date         : 2022-11-29 11:00:15
 * @LastEditTime : 2022-12-15 14:15:19
 */
import type { PropType } from 'vue'

export const defaultOpts = {
  animation: 200,
  group: 'gl',
  disabled: false,
  ghostClass: 'ghost',
  sort: true,
  delay: 100,
  showIcon: true,
  itemStyle: {
    radius: 4,
    bottom: 8,
    background: 'var(--ik-sub-sidebar-menu-bg)'
  }
}

export interface TList {
  label: String
  order?: number
  [key: string]: any
}

export const defaultProps = {
  list: {
    required: true,
    type: Array as PropType<Array<TList>>,
    default: []
  },
  // 如果一个页面有多个拖拽区域，通过设置group名称可以实现多个区域之间相互拖拽
  //  或者 { name: "...", pull: [true, false, 'clone', array , function], put: [true, false, array , function] }
  group: {
    type: String,
    default: 'draggable'
  },
  // 是否开启排序,如果设置为false,它所在组无法排序
  sort: {
    type: Boolean,
    default: true
  },
  // 前置图标
  showIcon: {
    type: Boolean,
    default: true
  },
  // 鼠标按下多少秒之后可以拖拽元素
  delay: {
    type: Number,
    default: 0
  },
  // 鼠标按下移动多少px才能拖动元素
  touchStartThreshold: {
    type: Number,
    default: 0
  },
  // 是否禁用用拖拽组件
  disabled: {
    type: Boolean,
    default: false
  },
  // 拖动时的动画效果，如设置animation=1000表示1秒过渡动画效果
  animation: {
    type: Number,
    default: 200
  },
  // 只有当鼠标在class为mover类的元素上才能触发拖到事件
  handle: {
    type: String,
    default: '.mover'
  },
  // 设置了unmover样式的元素不允许拖动
  filter: {
    type: String,
    default: '.unmover'
  },
  // 样式类为item的元素才能被拖动
  draggable: {
    type: String,
    default: '.item'
  },
  // 设置拖动元素的占位符类名,你的自定义样式可能需要加!important才能生效，并把forceFallback属性设置成true
  ghostClass: {
    type: String,
    default: 'ghost'
  },
  // 被选中目标的样式，你的自定义样式可能需要加!important才能生效，并把forceFallback属性设置成true
  chosenClass: {
    type: String,
    default: 'chosen'
  },
  // 拖动元素的样式，你的自定义样式可能需要加!important才能生效，并把forceFallback属性设置成true
  dragClass: {
    type: String,
    default: 'drag'
  },
  // 默认false，忽略HTML5的拖拽行为，因为h5里有个属性也是可以拖动，你要自定义ghostClass chosenClass dragClass样式时，建议forceFallback设置为true
  forceFallback: {
    type: Boolean,
    default: false
  },
  // 默认false，克隆选中元素的样式到跟随鼠标的样式
  fallbackClass: {
    type: String,
    default: 'fallback'
  },
  // 默认false，克隆的元素添加到文档的body中
  fallbackOnBody: {
    type: Boolean,
    default: false
  },
  // 按下鼠标移动多少个像素才能拖动元素，:fallback-tolerance="8"
  fallbackTolerance: {
    type: Number,
    default: 8
  },
  // 有滚动区域是否允许拖拽 默认true
  scroll: {
    type: Boolean,
    default: true
  },
  // 滚动回调函数
  scrollFn: {
    type: Function,
    default: () => { }
  },
  // 距离滚动区域多远时，滚动滚动条
  scrollFensitivity: {
    type: Number,
    default: 30
  },
  // 滚动速度
  scrollSpeed: {
    type: Number,
    default: 30
  },
  itemClass: {
    type: String,
    default: ''
  },
  groupClass: {
    type: String,
    default: ''
  },
  itemStyle: {
    type: Object,
    default: () => {
      return {
        radius: {
          type: Number,
          default: 30
        },
        bottom: {
          type: Number,
          default: 8
        },
        background: {
          type: String,
          default: 'var(--ik-sub-sidebar-menu-bg)'
        }
      }
    }
  }
}
