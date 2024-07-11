<script lang="ts">
import loader from '@monaco-editor/loader'
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from 'vue'
import type { editor as MEditor } from 'monaco-editor'
import type { PropType } from 'vue'
import {
  defaultOpts,
  formatDocument,
  handleInputCode,
  registerApiCompletion,
  registerDatavDarkTheme,
} from './editor-config'
import type {
  Monaco, languageType,
} from './editor-config'
import { ElMessage } from 'element-plus'
import { _, buildUUID, ikDom } from 'iking-utils-pro'
import { IkSvgIcon } from '@iking-ui/components'
import './monaco-editor.scss'

export default defineComponent({
  name: 'IkMonacoEditor',
  components: {
    IkSvgIcon,
  },
  props: {
    language: {
      type: String as PropType<languageType>,
      default: 'plaintext',
    },
    code: {
      type: [String, Array, Object],
      default: '',
    },
    readOnly: Boolean,
    useMinimap: Boolean,
    lineNumbers: {
      type: String,
      default: 'on',
    },
    wordWrap: {
      type: String,
      default: 'on',
    },
    autoFormat: Boolean,
    options: {
      type: Object,
      default: () => { },
    },
    completions: Array as PropType<Array<string>>,
    extra: Object,
    height: {
      type: Number,
      default: 240,
    },
    editorClass: String,
    fullScreenTitle: {
      type: String,
      default: '全屏模式',
    },
  },
  emits: ['change', 'blur'],
  setup(props, ctx) {
    const loading = ref(false)
    const editorId = computed(() => `datav-editor-${buildUUID()}`)
    let monaco = null as Monaco | null
    let editor = null as MEditor.IStandaloneCodeEditor | null
    let fullEditor = null as MEditor.IStandaloneCodeEditor | null
    const themeName = 'datav-dark-theme'

    const isFullScreen = ref(false)

    const copyData = () => {
      if (editor) {
        ikDom.copyText(editor.getValue()).then(() => {
          ElMessage.success('复制成功')
        })
      }
    }

    const changeHandler = () => {
      if (editor) {
        const value = editor.getValue()
        ctx.emit('change', {
          value,
          extra: props.extra,
        })
      }
    }
    const blurHandler = () => {
      if (editor) {
        const value = editor.getValue()
        ctx.emit('blur', {
          value,
          extra: props.extra,
        })
        if (props.autoFormat) { formatDocument(editor, props.language) }
      }
    }

    const debounceChangeHandler = _.debounce(changeHandler, 300)

    const openedFullScreenDialog = () => {
      const dom = document.querySelector(
        '.datav-fullscreen-editor-dialog section',
      ) as HTMLElement
      if (dom) {
        const opts = Object.assign({}, defaultOpts, props.options, {
          tabSize: 2,
          value: '',
          language: props.language,
          theme: themeName,
          readOnly: props.readOnly,
          minimap: {
            enabled: props.useMinimap,
          },
          lineNumbers: props.lineNumbers,
          wordWrap: props.wordWrap,
        })
        if (!monaco || !editor) { return }
        const ce = monaco.editor.create(dom, opts)

        ce.setValue(editor.getValue())
        if (props.autoFormat) {
          setTimeout(() => {
            formatDocument(ce, props.language)
          }, 1200)
        }

        ce.onDidChangeModelContent(() => debounceChangeHandler())
        ce.onDidBlurEditorText(() => blurHandler())

        fullEditor = ce
      }
    }
    const switchFullScreen = () => {
      isFullScreen.value = !isFullScreen.value
      if (isFullScreen.value) {
        nextTick(() => {
          openedFullScreenDialog()
        })
      }
    }

    const closedFullScreenDialog = () => {
      if (fullEditor) {
        if (editor && !props.readOnly) {
          editor.setValue(fullEditor.getValue())
          editor.focus()
        }

        fullEditor.dispose()
      }
    }

    watch(
      () => props.code,
      (nv: any) => {
        if (editor) {
          const inputCode = handleInputCode(props.language, nv)
          editor.setValue(inputCode)
        }
      },
    )

    onMounted(async () => {
      const timer = setTimeout(() => {
        loading.value = true
      }, 200)
      monaco = await loader.init()
      clearTimeout(timer)
      loading.value = false

      registerDatavDarkTheme(monaco)
      registerApiCompletion(monaco, props.language, props.completions || [])

      await nextTick()

      const dom = document.getElementById(editorId.value)
      if (dom) {
        const opts = Object.assign({}, defaultOpts, props.options, {
          tabSize: 2,
          value: '',
          language: props.language,
          theme: themeName,
          readOnly: props.readOnly,
          minimap: {
            enabled: props.useMinimap,
          },
          lineNumbers: props.lineNumbers,
          wordWrap: props.wordWrap,
        })
        const ce = monaco.editor.create(dom, opts)

        const inputCode = handleInputCode(props.language, props.code)
        ce.setValue(inputCode)
        if (props.autoFormat) { formatDocument(ce, props.language) }

        if (props.height > 0) { dom.style.height = `${props.height}px` }

        ce.onDidChangeModelContent(() => debounceChangeHandler())
        ce.onDidBlurEditorText(() => blurHandler())
        editor = ce
      }
    })

    onUnmounted(() => {
      editor?.dispose()
      fullEditor?.dispose()
    })

    return {
      editorId,
      isFullScreen,
      loading,
      copyData,
      switchFullScreen,
      openedFullScreenDialog,
      closedFullScreenDialog,
    }
  },
})
</script>

<template>
  <div :id="editorId" class="datav-editor" :class="[
    {
      '--read-only': readOnly,
    },
    editorClass,
  ]">
    <div v-if="!loading" class="datav-editor-actions">
      <IkSvgIcon name="iksvg_tongyong4" title="复制" pop @click="copyData" />
      <IkSvgIcon v-if="!isFullScreen" pop title="全屏" name="iksvg_quanping" @click="switchFullScreen" />
      <IkSvgIcon v-else pop title="退出全屏" name="iksvg_tuichuquanping" @click="switchFullScreen" />
    </div>
  </div>

  <el-dialog v-model="isFullScreen" :title="`${fullScreenTitle}${readOnly ? ' ( 只读 )' : ''}`" preset="dialog"
    :show-icon="false" :mask-closable="false" class="datav-fullscreen-editor-dialog" style="width: 90%; margin-top: 1%;"
    @closed="closedFullScreenDialog">
    <div class="datav-fullscreen-editor-wp">
      <div class="datav-editor datav-fullscreen-editor" :class="[
        {
          '--read-only': readOnly,
        },
      ]">
        <section style=" position: relative;display: flex;width: 100%;height: 100%; text-align: initial;"></section>
      </div>
    </div>
  </el-dialog>
</template>
