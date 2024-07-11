/*
 * @Author: zqf
 * @Date: 2024-06-07 09:27:56
 * @email: 13289847921@163.com
 * @LastEditors: zqf
 * @LastEditTime: 2024-06-07 12:29:06
 * @Description:
 */
import { createRouter, createWebHistory } from "vue-router";
import DebuggerDemo from "../debuggerDemo.vue";
import ExamplesDemos from "../examplesDemo.vue";
const routes = [
  {
    path: "/",
    component: () => import("../debuggerDemo.vue"),
  },
  {
    path: "/examples-demos",
    component: () => import("../examplesDemo.vue"),
  },
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
