/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: 日程组件
 * @Date: 2023-08-10 19:14:18
 * @LastEditTime: 2023-08-14 14:04:03
 */
import { withInstall } from "@iking-ui/utils";

import FullCalendar from './src/IkFullCalendar.vue'

export * from './src/ik-full-calendar';

export const IkFullCalendar = withInstall(FullCalendar)
export default IkFullCalendar