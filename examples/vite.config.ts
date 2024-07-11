/*
 * @Author       : wfl
 * @LastEditors  : wfl
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2023-08-10 16:48:03
 * @LastEditTime : 2024-04-17 16:10:54
 */
import { defineConfig,loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { resolve } from "path"
import Unocss from 'unocss/vite'
import fs from 'fs'
import path from 'path'

//iking-admin-style中图标有更新时必须执行一次pnpm dev才能再web-ui中更新图标库 自动更新图标信息
fs.writeFileSync(path.resolve(__dirname, '../src/components/IkIconPicker/src/icon.json'), JSON.stringify(JSON.parse(fs.readFileSync(path.resolve(__dirname, 'node_modules/iking-admin-style/icon/iconfont.json')))))
fs.writeFileSync(path.resolve(__dirname, '../src/components/IkIconPicker/src/icon-single.json'), JSON.stringify(JSON.parse(fs.readFileSync(path.resolve(__dirname, 'node_modules/iking-admin-style/icon/single-color-icon/iconfont.json')))))

export default async ({mode, command}) => {

  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    base: "",
    server: {
      host: true,
      proxy: {
        '/jmreport': {
          target: 'http://localhost:8080',
          changeOrigin: command === 'serve' && env.VITE_OPEN_PROXY === 'true',
        }
      }
  
    },
    plugins: [
      vue({
        script: {
          defineModel: true
        }
      }),
      Unocss(),
  
      //添加jsx/tsx支持
      vueJsx({})
    ],
  
    resolve: {
      alias: {
        "@": resolve(__dirname, "src") // 路径别名
      },
      extensions: [".js", ".vue", ".json", ".ts"] // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
  
    optimizeDeps: {
      include: []
    },
  
    css: {
      // postcss: {
      //   plugins: [
      //     postcssClassPrefix('ik1-')
      //   ]
      // },
      preprocessorOptions: {
        scss: {
          /* 自动引入全局scss文件 */
          additionalData: ""
        }
      }
    },
  
    build: {
      //minify: false,
      commonjsOptions: {
        exclude: [
          //引号前的逗号不能删，不知何故？？
          //'vue/dist/*.js'
        ],
        include: []
        //requireReturnsDefault: true
      },
      rollupOptions: {
        // 指定生产打包入口文件为index.htm
        input: {
          main: resolve(__dirname, "index.html")
        },
  
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue', 'element-plus', '@monaco-editor/loader', 'monaco-editor'],
        // output: {
        //  在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        //   globals: {
        //     vue: 'Vue', //报错：Failed to resolve module specifier "vue". Relative references must start with either
        //     'element-plus': 'ElementPlus',
        //   }
        // }
      }
    }
  })
}
