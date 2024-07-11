<template>
  <teleport to="body" v-if="show">
    <transition name="viewer-fade" appear>
      <div
          ref="wrapper"
          :tabindex="-1"
          :class="ns.e('wrapper')"
          :style="{ zIndex }"
      >
        <div :class="ns.e('mask')" />
        <!-- CANVAS -->
        <div :class="ns.e('canvas')">
          <div :id="videoId"></div>
          <!-- CLOSE -->
          <span :class="[ns.e('btn'), ns.e('close')]" @click="hide">
          <el-icon @click="hide">
            <Close />
          </el-icon>
        </span>
        </div>
        <slot />
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
// https://h5player.bytedance.com/config/
import {
  computed,
  nextTick,
  watch,
} from 'vue'
import {buildUUID} from 'iking-utils-pro'
import { useNamespace } from 'element-plus'
import {
  Close,
} from '@element-plus/icons-vue'
import XgPlayer from 'xgplayer';
import 'xgplayer/dist/index.min.css';
import useProvider from "@iking-ui/utils/use-provider";
import {setFileUrl} from "@iking-ui/utils/math";
let XPlayer: any = null

defineOptions({
  name: 'ElImageViewer',
})

const props = defineProps({
  url: {
    type: String,
    default: '',
  },
  zIndex: {
    type: Number,
    default: 200,
  },
  // 播放器配置、插件配置等
  config: {
    type: Object,
    default: () => {
      return {}
    }
  },
})

const { cLoadUrl } = useProvider(props)

const videoUrl = computed(() => setFileUrl(cLoadUrl.value, props.url))

const DEFAULT_CONFIG = {
  width: '100%',
  height: '100%',
  // 是否自动播放
  autoplay: false,
  // 默认音量, 取值范围0 ~ 1
  volume: 0.6,
  controls: true,
  playbackRate: [0.5, 0.75, 1, 1.5, 2],
  crossOrigin: true,
  preload: 'auto',
  muted: false,
  // 循环播放
  loop: true,
  // 封面图地址
  poster: '',
  lang: 'zh-CN',
  screenShot: true
}

const mixConfig = computed(()=>{
  return {
    ...DEFAULT_CONFIG,
    ...props.config
  }
})

const emit = defineEmits({
  close: () => true,
})

const show = defineModel({
  type: Boolean,
  default: false,
})

const videoId = buildUUID()

const ns = useNamespace('image-viewer')

function hide() {
  emit('close')
  show.value = false
  XPlayer.destroy()
}

watch(()=> show.value, (bool: boolean) => {
  if (bool) {
    nextTick(() => {
      console.log('videoUrl', videoUrl.value)

      XPlayer = new XgPlayer({
        id: videoId,
        url: videoUrl.value,
        ...mixConfig.value
      })
    })
  }
})

</script>

<style lang="scss" scoped>
.el-image-viewer__close{
  position: absolute;
  transition: opacity .3s ease;
  &:hover{
    opacity: 1;
  }
}
</style>
