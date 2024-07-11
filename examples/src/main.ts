/*
 * @Author: zqf
 * @Date: 2024-06-07 11:53:19
 * @email: 13289847921@163.com
 * @LastEditors: zqf
 * @LastEditTime: 2024-06-07 12:23:08
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "element-plus/dist/index.css";
import "./style.css";
import axios from "axios";
import "iking-admin-style/icon/iconfont.js";
import "iking-admin-style/style/globals.scss";
import "virtual:uno.css";
import router from "./router";

axios.interceptors.request.use((config: any) => {
  // config.headers['X-DOMAIN'] = 'X-DMMAIN';
  config.headers["Content-Type"] = "application/json;charset=UTF-8";
  // config.headers["Authorization"] = "Bearer iking";

  //   "Content-Type": "application/json;charset=UTF-8",
  //   "Authorization": 'Bearer iking'
  return config;
});

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(router);
app.mount("#app");
