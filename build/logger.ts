/*
 * @Author       : wfl
 * @LastEditors  : wfl
 * @description  :
 * @updateInfo   :
 * @Date         : 2024-03-14 11:00:23
 * @LastEditTime : 2024-04-19 14:05:57
 */
import { createLogger } from 'vite'

const logger = createLogger()

logger.info = (msg) => {
  if (msg.includes('dist')) {
    return
  }
  console.info('\x1B[32m[Iking Admin]:', msg)
}

logger.warn = (msg) => {
  // 忽略空 CSS 文件的警告
  if (msg.includes('larger than')) {
    console.info('\x1B[33m[Iking Admin (warn)]:', '存在打包后的文件大小大于1000 kb的文件，建议优化')
  }
  else if (msg.includes('Nested CSS')) {
    console.info('\x1B[33m[Iking Admin (warn)]: [vite:css] Nested CSS was detected, but CSS nesting has not been configured correctly')
  }
  else if (!msg.includes('[plugin:vite')) {
    console.info('\x1B[33m[Iking Admin (warn)]: ', msg)
  }
}

export default logger
