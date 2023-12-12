import { defineComponent as E0, openBlock as ve, createElementBlock as _e, createCommentVNode as tt, createElementVNode as ue, ref as nt, computed as Un, watch as Wn, createBlock as rt, unref as xe, withCtx as Oe, resolveComponent as Qi, Fragment as Qt, createVNode as Te, normalizeClass as O0, renderSlot as L0, createTextVNode as I0, toDisplayString as wt, renderList as Ji, withDirectives as eo, vShow as to } from "vue";
import { ElDialog as ro, ElUpload as no, ElButton as io, ElProgress as oo, ElIcon as at, ElTooltip as so, ElMessage as F0 } from "element-plus";
import { Upload as ao, Delete as P0, CircleCloseFilled as co, View as fo, Download as uo, QuestionFilled as lo, WarningFilled as ho, Refresh as vo } from "@element-plus/icons-vue";
import * as po from "lodash-es";
const xo = (e, t) => {
  if (e.install = (r) => {
    for (const n of [e, ...Object.values(t ?? {})])
      r.component(n.name, n);
  }, t)
    for (const [r, n] of Object.entries(t))
      e[r] = n;
  return e;
}, bo = {
  key: 0,
  t: "1686300037564",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "7515",
  width: "200",
  height: "200"
}, go = /* @__PURE__ */ ue("path", {
  d: "M160 0h512l256 256v704c0 35.3472-28.6528 64-64 64H160c-35.3472 0-64-28.6528-64-64V64c0-35.3472 28.6528-64 64-64z",
  fill: "#029EF7",
  "p-id": "7516"
}, null, -1), mo = /* @__PURE__ */ ue("path", {
  d: "M672 0l256 256h-192c-35.3472 0-64-28.6528-64-64V0z",
  fill: "#64b5ed",
  "p-id": "7517"
}, null, -1), yo = /* @__PURE__ */ ue("path", {
  d: "M384 499.2c0-25.6 5.12-46.08 10.24-58.88 5.12-12.8 15.36-25.6 28.16-35.84 12.8-12.8 25.6-20.48 43.52-25.6 15.36-5.12 30.72-7.68 48.64-7.68 35.84 0 64 10.24 89.6 30.72C627.2 422.4 640 448 640 481.28c0 15.36-5.12 28.16-10.24 40.96s-17.92 28.16-38.4 46.08-28.16 30.72-35.84 38.4c-7.68 7.68-10.24 17.92-15.36 28.16-5.12 10.24-2.56 17.92-2.56 43.52h-51.2c0-25.6 2.56-38.4 5.12-51.2s7.68-23.04 15.36-33.28 15.36-23.04 33.28-40.96c17.92-17.92 30.72-30.72 35.84-38.4 5.12-7.68 10.24-20.48 10.24-38.4s-7.68-30.72-20.48-43.52-30.72-20.48-53.76-20.48c-51.2 0-76.8 35.84-76.8 87.04h-51.2z m153.6 281.6h-51.2v-51.2h51.2v51.2z",
  fill: "#FFFFFF",
  "p-id": "7518"
}, null, -1), _o = [
  go,
  mo,
  yo
], wo = {
  key: 1,
  t: "1686300059786",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "7671",
  width: "200",
  height: "200"
}, Eo = /* @__PURE__ */ ue("path", {
  d: "M160 0h512l256 256v704c0 35.3472-28.6528 64-64 64H160c-35.3472 0-64-28.6528-64-64V64c0-35.3472 28.6528-64 64-64z",
  fill: "#50CD89",
  "p-id": "7672"
}, null, -1), Co = /* @__PURE__ */ ue("path", {
  d: "M258.528 742.0672L351.8336 604.928a14.5024 14.5024 0 0 1 22.1696-2.1824l61.664 60.416 135.296-212.064a14.5024 14.5024 0 0 1 24.8064 0.5568l168.1024 291.328a14.5024 14.5024 0 0 1-12.5696 21.7664H270.528a14.5024 14.5024 0 0 1-12.0064-22.6816z",
  fill: "#FFF7F7",
  "p-id": "7673"
}, null, -1), So = /* @__PURE__ */ ue("path", {
  d: "M359.616 431.5456m-73.1456 0a73.1456 73.1456 0 1 0 146.2912 0 73.1456 73.1456 0 1 0-146.2912 0Z",
  fill: "#FFFFFF",
  "p-id": "7674"
}, null, -1), Bo = /* @__PURE__ */ ue("path", {
  d: "M672 0l256 256h-192c-35.3472 0-64-28.6528-64-64V0z",
  fill: "#a9f6cc",
  "p-id": "7675"
}, null, -1), ko = [
  Eo,
  Co,
  So,
  Bo
], Ao = {
  key: 2,
  t: "1686301531714",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "9067",
  width: "200",
  height: "200"
}, Ro = /* @__PURE__ */ ue("path", {
  d: "M409.6 0v68.266667h-34.133333c-20.48 0-34.133333 13.653333-34.133334 34.133333s13.653333 34.133333 34.133334 34.133333H409.6v68.266667h-34.133333c-20.48 0-34.133333 13.653333-34.133334 34.133333s13.653333 34.133333 34.133334 34.133334H409.6v68.266666h-34.133333c-20.48 0-34.133333 13.653333-34.133334 34.133334s13.653333 34.133333 34.133334 34.133333H409.6v68.266667h-34.133333c-20.48 0-34.133333 13.653333-34.133334 34.133333s13.653333 34.133333 34.133334 34.133333h68.266666c20.48 0 34.133333-13.653333 34.133334-34.133333V477.866667h34.133333c20.48 0 34.133333-13.653333 34.133333-34.133334S532.48 409.6 512 409.6H477.866667V341.333333h34.133333c20.48 0 34.133333-13.653333 34.133333-34.133333S532.48 273.066667 512 273.066667H477.866667V204.8h34.133333c20.48 0 34.133333-13.653333 34.133333-34.133333S532.48 136.533333 512 136.533333H477.866667V0h204.8l273.066666 273.066667v614.4c0 75.093333-61.44 136.533333-136.533333 136.533333H204.8c-75.093333 0-136.533333-61.44-136.533333-136.533333V136.533333C68.266667 61.44 129.706667 0 204.8 0h204.8z m0 682.666667h68.266667v68.266666H409.6v-68.266666z m-34.133333-68.266667c-20.48 0-34.133333 13.653333-34.133334 34.133333v136.533334c0 20.48 13.653333 34.133333 34.133334 34.133333h136.533333c20.48 0 34.133333-13.653333 34.133333-34.133333v-136.533334c0-20.48-13.653333-34.133333-34.133333-34.133333h-136.533333z",
  fill: "#FFA621",
  "p-id": "9068"
}, null, -1), No = /* @__PURE__ */ ue("path", {
  d: "M682.666667 0l273.066666 273.066667h-204.8c-40.96 0-68.266667-27.306667-68.266666-68.266667V0z",
  fill: "#f5d37b",
  "p-id": "9069"
}, null, -1), Do = [
  Ro,
  No
], To = {
  key: 3,
  t: "1686300141125",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "8137",
  width: "200",
  height: "200"
}, Oo = /* @__PURE__ */ ue("path", {
  d: "M204.8 0h477.866667l273.066666 273.066667v614.4c0 75.093333-61.44 136.533333-136.533333 136.533333H204.8c-75.093333 0-136.533333-61.44-136.533333-136.533333V136.533333C68.266667 61.44 129.706667 0 204.8 0z m204.8 546.133333V443.733333h204.8v136.533334H409.6V546.133333z m0 102.4h204.8c40.96 0 68.266667-27.306667 68.266667-68.266666v-136.533334c0-40.96-27.306667-68.266667-68.266667-68.266666H409.6c-40.96 0-68.266667 27.306667-68.266667 68.266666V819.2c0 20.48 13.653333 34.133333 34.133334 34.133333s34.133333-13.653333 34.133333-34.133333V648.533333z",
  fill: "#F1416C",
  "p-id": "8138"
}, null, -1), Lo = /* @__PURE__ */ ue("path", {
  d: "M682.666667 0l273.066666 273.066667h-204.8c-40.96 0-68.266667-27.306667-68.266666-68.266667V0z",
  fill: "#f78cbc",
  "p-id": "8139"
}, null, -1), Io = [
  Oo,
  Lo
], Fo = {
  key: 4,
  t: "1686300157181",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "8292",
  width: "200",
  height: "200"
}, Po = /* @__PURE__ */ ue("path", {
  d: "M204.8 0h477.866667l273.066666 273.066667v614.4c0 75.093333-61.44 136.533333-136.533333 136.533333H204.8c-75.093333 0-136.533333-61.44-136.533333-136.533333V136.533333C68.266667 61.44 129.706667 0 204.8 0z m307.2 607.573333l68.266667 191.146667c13.653333 27.306667 54.613333 27.306667 61.44 0l102.4-273.066667c6.826667-20.48 0-34.133333-20.48-40.96s-34.133333 0-40.96 13.653334l-68.266667 191.146666-68.266667-191.146666c-13.653333-27.306667-54.613333-27.306667-68.266666 0l-68.266667 191.146666-68.266667-191.146666c-6.826667-13.653333-27.306667-27.306667-47.786666-20.48s-27.306667 27.306667-20.48 47.786666l102.4 273.066667c13.653333 27.306667 54.613333 27.306667 61.44 0l75.093333-191.146667z",
  fill: "#029EF7",
  "p-id": "8293"
}, null, -1), Mo = /* @__PURE__ */ ue("path", {
  d: "M682.666667 0l273.066666 273.066667h-204.8c-40.96 0-68.266667-27.306667-68.266666-68.266667V0z",
  fill: "#64b5ed",
  "p-id": "8294"
}, null, -1), Ho = [
  Po,
  Mo
], zo = {
  key: 5,
  t: "1686300180947",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "8447",
  width: "200",
  height: "200"
}, $o = /* @__PURE__ */ ue("path", {
  d: "M204.8 0h477.866667l273.066666 273.066667v614.4c0 75.093333-61.44 136.533333-136.533333 136.533333H204.8c-75.093333 0-136.533333-61.44-136.533333-136.533333V136.533333C68.266667 61.44 129.706667 0 204.8 0z m477.866667 730.453333c20.48 0 68.266667 0 68.266666-47.786666 0-20.48-6.826667-47.786667-68.266666-47.786667-27.306667 0-54.613333 6.826667-81.92 6.826667-34.133333-27.306667-68.266667-61.44-88.746667-102.4 20.48-75.093333 20.48-122.88 6.826667-150.186667-6.826667-6.826667-20.48-13.653333-34.133334-13.653333-20.48 0-34.133333 6.826667-40.96 20.48-20.48 40.96 13.653333 116.053333 27.306667 150.186666-20.48 54.613333-40.96 109.226667-68.266667 163.84C273.066667 764.586667 273.066667 798.72 273.066667 812.373333c0 13.653333 6.826667 27.306667 20.48 34.133334 6.826667 6.826667 13.653333 6.826667 20.48 6.826666 34.133333 0 68.266667-34.133333 116.053333-109.226666 54.613333-20.48 102.4-40.96 157.013333-47.786667 27.306667 20.48 61.44 34.133333 95.573334 34.133333zM491.52 416.426667c6.826667 20.48 6.826667 47.786667 0 68.266666-13.653333-20.48-13.653333-40.96-13.653333-68.266666h13.653333z m-177.493333 395.946666c13.653333-20.48 27.306667-27.306667 47.786666-40.96-13.653333 20.48-27.306667 34.133333-47.786666 40.96z m184.32-204.8c13.653333 20.48 34.133333 47.786667 54.613333 68.266667H546.133333c-27.306667 6.826667-61.44 13.653333-88.746666 27.306667 13.653333-34.133333 27.306667-61.44 40.96-95.573334z m177.493333 68.266667c27.306667 0 34.133333 6.826667 34.133333 13.653333-6.826667 0-20.48 6.826667-27.306666 0-13.653333 0-27.306667-6.826667-40.96-13.653333h34.133333z",
  fill: "#F1416C",
  "p-id": "8448"
}, null, -1), qo = /* @__PURE__ */ ue("path", {
  d: "M682.666667 0l273.066666 273.066667h-204.8c-40.96 0-68.266667-27.306667-68.266666-68.266667V0z",
  fill: "#f78cbc",
  "p-id": "8449"
}, null, -1), Uo = [
  $o,
  qo
], Wo = {
  key: 6,
  t: "1686300195363",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "8602",
  width: "200",
  height: "200"
}, Vo = /* @__PURE__ */ ue("path", {
  d: "M204.8 0h477.866667l273.066666 273.066667v614.4c0 75.093333-61.44 136.533333-136.533333 136.533333H204.8c-75.093333 0-136.533333-61.44-136.533333-136.533333V136.533333C68.266667 61.44 129.706667 0 204.8 0z m341.333333 512h136.533334c20.48 0 34.133333-13.653333 34.133333-34.133333s-13.653333-34.133333-34.133333-34.133334H341.333333c-20.48 0-34.133333 13.653333-34.133333 34.133334s13.653333 34.133333 34.133333 34.133333h136.533334V819.2c0 20.48 13.653333 34.133333 34.133333 34.133333s34.133333-13.653333 34.133333-34.133333V512z",
  fill: "#029EF7",
  "p-id": "8603"
}, null, -1), Yo = /* @__PURE__ */ ue("path", {
  d: "M682.666667 0l273.066666 273.066667h-204.8c-40.96 0-68.266667-27.306667-68.266666-68.266667V0z",
  fill: "#64b5ed",
  "p-id": "8604"
}, null, -1), Ko = [
  Vo,
  Yo
], Zo = {
  key: 7,
  t: "1686300209288",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "8757",
  width: "200",
  height: "200"
}, Go = /* @__PURE__ */ ue("path", {
  d: "M204.8 0h477.866667l273.066666 273.066667v614.4c0 75.093333-61.44 136.533333-136.533333 136.533333H204.8c-75.093333 0-136.533333-61.44-136.533333-136.533333V136.533333C68.266667 61.44 129.706667 0 204.8 0z m464.213333 375.466667l-232.106666 61.44c-27.306667 13.653333-47.786667 34.133333-47.786667 61.44v218.453333s-20.48-13.653333-54.613333-6.826667c-47.786667 6.826667-95.573333 47.786667-95.573334 88.746667 0 40.96 47.786667 61.44 95.573334 54.613333 54.613333-6.826667 95.573333-40.96 95.573333-81.92V559.786667c0-13.653333 27.306667-27.306667 27.306667-27.306667L655.36 477.866667s20.48-6.826667 20.48 13.653333v170.666667s-20.48-13.653333-54.613333-6.826667c-54.613333 6.826667-95.573333 40.96-95.573334 81.92s47.786667 68.266667 95.573334 61.44 95.573333-40.96 95.573333-81.92V409.6c0-27.306667-27.306667-40.96-47.786667-34.133333z",
  fill: "#FFA621",
  "p-id": "8758"
}, null, -1), Xo = /* @__PURE__ */ ue("path", {
  d: "M682.666667 0l273.066666 273.066667h-204.8c-40.96 0-68.266667-27.306667-68.266666-68.266667V0z",
  fill: "#f5d37b",
  "p-id": "8759"
}, null, -1), jo = [
  Go,
  Xo
], Qo = {
  key: 8,
  t: "1686300225262",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "8912",
  width: "200",
  height: "200"
}, Jo = /* @__PURE__ */ ue("path", {
  d: "M204.8 0h477.866667l273.066666 273.066667v614.4c0 75.093333-61.44 136.533333-136.533333 136.533333H204.8c-75.093333 0-136.533333-61.44-136.533333-136.533333V136.533333C68.266667 61.44 129.706667 0 204.8 0z m307.2 853.333333c150.186667 0 273.066667-122.88 273.066667-273.066666s-122.88-273.066667-273.066667-273.066667-273.066667 122.88-273.066667 273.066667 122.88 273.066667 273.066667 273.066666z m0-68.266666c-116.053333 0-204.8-88.746667-204.8-204.8s88.746667-204.8 204.8-204.8 204.8 88.746667 204.8 204.8-88.746667 204.8-204.8 204.8zM614.4 600.746667l6.826667-6.826667c6.826667-13.653333 6.826667-27.306667-6.826667-34.133333L484.693333 471.04s-6.826667-6.826667-13.653333-6.826667c-13.653333 0-27.306667 13.653333-27.306667 27.306667v170.666667c0 6.826667 0 13.653333 6.826667 13.653333 6.826667 13.653333 27.306667 13.653333 40.96 6.826667L614.4 600.746667z",
  fill: "#FFA621",
  "p-id": "8913"
}, null, -1), es = /* @__PURE__ */ ue("path", {
  d: "M682.666667 0l273.066666 273.066667h-204.8c-40.96 0-68.266667-27.306667-68.266666-68.266667V0z",
  fill: "#f5d37b",
  "p-id": "8914"
}, null, -1), ts = [
  Jo,
  es
], rs = {
  key: 9,
  t: "1692251753690",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "4336",
  width: "200",
  height: "200"
}, ns = /* @__PURE__ */ ue("path", {
  d: "M192 0h448.170667l319.829333 320V896a128 128 0 0 1-128 128H192a128 128 0 0 1-128-128V128A128 128 0 0 1 192 0z",
  fill: "#00BD76",
  "p-id": "4337"
}, null, -1), is = /* @__PURE__ */ ue("path", {
  d: "M388.5056 631.261867H307.541333v54.852266h95.095467v33.8944H265.3184v-204.765866h136.977067v34.167466H307.5072v48.810667h80.9984v33.041067z m112.093867-45.397334l38.4-70.621866h48.503466l-59.630933 101.546666 61.201067 103.2192h-49.117867l-39.355733-71.714133-39.389867 71.68h-49.0496l61.166933-103.185067-59.630933-101.546666h48.503467l38.4 70.587733z m266.922666 65.9456c-0.648533 9.898667-3.037867 19.592533-7.0656 28.672-3.7888 8.533333-9.352533 16.1792-16.315733 22.4256-6.929067 6.2464-15.36 11.127467-25.258667 14.6432-9.864533 3.4816-21.128533 5.256533-33.792 5.256534-13.1072 0-24.917333-2.286933-35.362133-6.826667a72.260267 72.260267 0 0 1-26.555733-19.626667 89.019733 89.019733 0 0 1-16.725334-30.993066 133.597867 133.597867 0 0 1-5.870933-40.8576v-13.482667c0-15.121067 2.048-28.740267 6.0416-40.925867 4.061867-12.1856 9.728-22.528 17.1008-31.061333 7.338667-8.533333 16.4864-15.2576 26.794667-19.694933 10.478933-4.608 22.186667-6.894933 35.157333-6.894934 12.731733 0 24.029867 1.809067 33.792 5.393067 9.8304 3.618133 18.1248 8.635733 24.9856 15.0528 6.826667 6.485333 12.288 14.267733 16.042667 22.9376 3.822933 8.874667 6.2464 18.466133 7.304533 28.8768h-42.1888a63.829333 63.829333 0 0 0-3.1744-16.145067 31.744 31.744 0 0 0-7.099733-11.810133 29.354667 29.354667 0 0 0-11.946667-7.2704 55.944533 55.944533 0 0 0-17.749333-2.4576c-14.2336 0-24.849067 5.188267-31.812267 15.5648-6.997333 10.3424-10.478933 26.385067-10.478933 48.128v13.789867c0 10.581333 0.750933 19.899733 2.321066 27.8528 1.536 7.953067 3.959467 14.609067 7.304534 19.968a32.221867 32.221867 0 0 0 12.970666 12.014933c5.256533 2.696533 11.639467 4.027733 19.182934 4.027733 6.656 0 12.3904-0.750933 17.2032-2.2528a30.549333 30.549333 0 0 0 12.0832-6.826666 30.685867 30.685867 0 0 0 7.509333-11.4688c1.809067-4.573867 2.935467-9.898667 3.413333-16.042667h42.154667z",
  fill: "#FFFFFF",
  opacity: ".9",
  "p-id": "4338"
}, null, -1), os = /* @__PURE__ */ ue("path", {
  d: "M640 0l320 320H768a128 128 0 0 1-128-128V0z",
  fill: "#19EA9C",
  "p-id": "4339"
}, null, -1), ss = [
  ns,
  is,
  os
], as = /* @__PURE__ */ E0({
  __name: "FileIcon",
  props: {
    type: {
      type: String,
      default: "unknow"
    }
  },
  setup(e) {
    return (t, r) => e.type === "unknow" ? (ve(), _e("svg", bo, _o)) : e.type === "image" ? (ve(), _e("svg", wo, ko)) : e.type === "zip" ? (ve(), _e("svg", Ao, Do)) : e.type === "ppt" ? (ve(), _e("svg", To, Io)) : e.type === "word" ? (ve(), _e("svg", Fo, Ho)) : e.type === "pdf" ? (ve(), _e("svg", zo, Uo)) : e.type === "txt" ? (ve(), _e("svg", Wo, Ko)) : e.type === "audio" ? (ve(), _e("svg", Zo, jo)) : e.type === "video" ? (ve(), _e("svg", Qo, ts)) : e.type === "excal" ? (ve(), _e("svg", rs, ss)) : tt("", !0);
  }
}), cs = typeof btoa == "function", C0 = typeof Buffer == "function";
typeof TextDecoder == "function" && new TextDecoder();
const M0 = typeof TextEncoder == "function" ? new TextEncoder() : void 0, fs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", Pt = Array.prototype.slice.call(fs);
((e) => {
  let t = {};
  return e.forEach((r, n) => t[r] = n), t;
})(Pt);
const Ke = String.fromCharCode.bind(String);
typeof Uint8Array.from == "function" && Uint8Array.from.bind(Uint8Array);
const us = (e) => e.replace(/=/g, "").replace(/[+\/]/g, (t) => t == "+" ? "-" : "_"), ls = (e) => {
  let t, r, n, i, o = "";
  const a = e.length % 3;
  for (let c = 0; c < e.length; ) {
    if ((r = e.charCodeAt(c++)) > 255 || (n = e.charCodeAt(c++)) > 255 || (i = e.charCodeAt(c++)) > 255)
      throw new TypeError("invalid character found");
    t = r << 16 | n << 8 | i, o += Pt[t >> 18 & 63] + Pt[t >> 12 & 63] + Pt[t >> 6 & 63] + Pt[t & 63];
  }
  return a ? o.slice(0, a - 3) + "===".substring(a) : o;
}, Vn = cs ? (e) => btoa(e) : C0 ? (e) => Buffer.from(e, "binary").toString("base64") : ls, hs = C0 ? (e) => Buffer.from(e).toString("base64") : (e) => {
  let r = [];
  for (let n = 0, i = e.length; n < i; n += 4096)
    r.push(Ke.apply(null, e.subarray(n, n + 4096)));
  return Vn(r.join(""));
}, ds = (e) => {
  if (e.length < 2) {
    var t = e.charCodeAt(0);
    return t < 128 ? e : t < 2048 ? Ke(192 | t >>> 6) + Ke(128 | t & 63) : Ke(224 | t >>> 12 & 15) + Ke(128 | t >>> 6 & 63) + Ke(128 | t & 63);
  } else {
    var t = 65536 + (e.charCodeAt(0) - 55296) * 1024 + (e.charCodeAt(1) - 56320);
    return Ke(240 | t >>> 18 & 7) + Ke(128 | t >>> 12 & 63) + Ke(128 | t >>> 6 & 63) + Ke(128 | t & 63);
  }
}, vs = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, ps = (e) => e.replace(vs, ds), H0 = C0 ? (e) => Buffer.from(e, "utf8").toString("base64") : M0 ? (e) => hs(M0.encode(e)) : (e) => Vn(ps(e)), xs = (e, t = !1) => t ? us(H0(e)) : H0(e), bs = ["src"], gs = /* @__PURE__ */ E0({
  __name: "IKPreviewFile",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    // KKfile服务地址
    kkUrl: {
      required: !0,
      type: String,
      default: ""
    },
    // 文件地址 http://192.168.2.171/api/server/oss/download?fileUrl=
    url: {
      required: !0,
      type: String,
      default: ""
    },
    // url为文件全路径（以http开头）时，不需要传递
    loadUrl: {
      type: String,
      default: ""
    },
    // 当预览的文件是通过请求id等获取时，需要指定文件名
    fileName: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e, r = nt(null), n = Un(() => !t.kkUrl || !t.url ? "" : `${t.kkUrl}${encodeURIComponent(
      xs(`${t.loadUrl}${t.url}${t.fileName ? `&fullfilename=${t.fileName}` : ""}`)
    )}`), i = nt(t.modelValue);
    return Wn(() => t.modelValue, (o) => {
      i.value = o;
    }), (o, a) => (ve(), rt(xe(ro), {
      fullscreen: "",
      modelValue: i.value,
      "onUpdate:modelValue": a[0] || (a[0] = (c) => i.value = c),
      "append-to-body": "",
      "modal-class": "ik-file-preview-modal",
      onClose: a[1] || (a[1] = (c) => o.$emit("update:modelValue", !1)),
      class: "ik-file-preview"
    }, {
      default: Oe(() => [
        ue("iframe", {
          ref_key: "freamRef",
          ref: r,
          "cross-origin": "",
          src: n.value,
          frameborder: "0",
          allowfullscreen: "",
          seamless: ""
        }, null, 8, bs)
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
var re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ms(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      if (this instanceof n) {
        var i = [null];
        i.push.apply(i, arguments);
        var o = Function.bind.apply(t, i);
        return new o();
      }
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var z0 = {}, ys = {
  get exports() {
    return z0;
  },
  set exports(e) {
    z0 = e;
  }
};
function Mt(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var or = {}, _s = {
  get exports() {
    return or;
  },
  set exports(e) {
    or = e;
  }
};
const ws = {}, Es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ws
}, Symbol.toStringTag, { value: "Module" })), Cs = /* @__PURE__ */ ms(Es);
var $0;
function ce() {
  return $0 || ($0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(re, function() {
      var r = r || function(n, i) {
        var o;
        if (typeof window < "u" && window.crypto && (o = window.crypto), typeof self < "u" && self.crypto && (o = self.crypto), typeof globalThis < "u" && globalThis.crypto && (o = globalThis.crypto), !o && typeof window < "u" && window.msCrypto && (o = window.msCrypto), !o && typeof re < "u" && re.crypto && (o = re.crypto), !o && typeof Mt == "function")
          try {
            o = Cs;
          } catch {
          }
        var a = function() {
          if (o) {
            if (typeof o.getRandomValues == "function")
              try {
                return o.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof o.randomBytes == "function")
              try {
                return o.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, c = Object.create || function() {
          function y() {
          }
          return function(d) {
            var x;
            return y.prototype = d, x = new y(), y.prototype = null, x;
          };
        }(), l = {}, s = l.lib = {}, u = s.Base = function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(y) {
              var d = c(this);
              return y && d.mixIn(y), (!d.hasOwnProperty("init") || this.init === d.init) && (d.init = function() {
                d.$super.init.apply(this, arguments);
              }), d.init.prototype = d, d.$super = this, d;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var y = this.extend();
              return y.init.apply(y, arguments), y;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(y) {
              for (var d in y)
                y.hasOwnProperty(d) && (this[d] = y[d]);
              y.hasOwnProperty("toString") && (this.toString = y.toString);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }(), h = s.WordArray = u.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(y, d) {
            y = this.words = y || [], d != i ? this.sigBytes = d : this.sigBytes = y.length * 4;
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(y) {
            return (y || p).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(y) {
            var d = this.words, x = y.words, m = this.sigBytes, C = y.sigBytes;
            if (this.clamp(), m % 4)
              for (var A = 0; A < C; A++) {
                var T = x[A >>> 2] >>> 24 - A % 4 * 8 & 255;
                d[m + A >>> 2] |= T << 24 - (m + A) % 4 * 8;
              }
            else
              for (var I = 0; I < C; I += 4)
                d[m + I >>> 2] = x[I >>> 2];
            return this.sigBytes += C, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var y = this.words, d = this.sigBytes;
            y[d >>> 2] &= 4294967295 << 32 - d % 4 * 8, y.length = n.ceil(d / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var y = u.clone.call(this);
            return y.words = this.words.slice(0), y;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(y) {
            for (var d = [], x = 0; x < y; x += 4)
              d.push(a());
            return new h.init(d, y);
          }
        }), f = l.enc = {}, p = f.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(y) {
            for (var d = y.words, x = y.sigBytes, m = [], C = 0; C < x; C++) {
              var A = d[C >>> 2] >>> 24 - C % 4 * 8 & 255;
              m.push((A >>> 4).toString(16)), m.push((A & 15).toString(16));
            }
            return m.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(y) {
            for (var d = y.length, x = [], m = 0; m < d; m += 2)
              x[m >>> 3] |= parseInt(y.substr(m, 2), 16) << 24 - m % 8 * 4;
            return new h.init(x, d / 2);
          }
        }, g = f.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(y) {
            for (var d = y.words, x = y.sigBytes, m = [], C = 0; C < x; C++) {
              var A = d[C >>> 2] >>> 24 - C % 4 * 8 & 255;
              m.push(String.fromCharCode(A));
            }
            return m.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(y) {
            for (var d = y.length, x = [], m = 0; m < d; m++)
              x[m >>> 2] |= (y.charCodeAt(m) & 255) << 24 - m % 4 * 8;
            return new h.init(x, d);
          }
        }, _ = f.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(y) {
            try {
              return decodeURIComponent(escape(g.stringify(y)));
            } catch {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(y) {
            return g.parse(unescape(encodeURIComponent(y)));
          }
        }, S = s.BufferedBlockAlgorithm = u.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new h.init(), this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(y) {
            typeof y == "string" && (y = _.parse(y)), this._data.concat(y), this._nDataBytes += y.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(y) {
            var d, x = this._data, m = x.words, C = x.sigBytes, A = this.blockSize, T = A * 4, I = C / T;
            y ? I = n.ceil(I) : I = n.max((I | 0) - this._minBufferSize, 0);
            var E = I * A, w = n.min(E * 4, C);
            if (E) {
              for (var k = 0; k < E; k += A)
                this._doProcessBlock(m, k);
              d = m.splice(0, E), x.sigBytes -= w;
            }
            return new h.init(d, w);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var y = u.clone.call(this);
            return y._data = this._data.clone(), y;
          },
          _minBufferSize: 0
        });
        s.Hasher = S.extend({
          /**
           * Configuration options.
           */
          cfg: u.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(y) {
            this.cfg = this.cfg.extend(y), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            S.reset.call(this), this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(y) {
            return this._append(y), this._process(), this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(y) {
            y && this._append(y);
            var d = this._doFinalize();
            return d;
          },
          blockSize: 16,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(y) {
            return function(d, x) {
              return new y.init(x).finalize(d);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(y) {
            return function(d, x) {
              return new O.HMAC.init(y, x).finalize(d);
            };
          }
        });
        var O = l.algo = {};
        return l;
      }(Math);
      return r;
    });
  }(_s)), or;
}
var sr = {}, Ss = {
  get exports() {
    return sr;
  },
  set exports(e) {
    sr = e;
  }
}, q0;
function Ur() {
  return q0 || (q0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function(n) {
        var i = r, o = i.lib, a = o.Base, c = o.WordArray, l = i.x64 = {};
        l.Word = a.extend({
          /**
           * Initializes a newly created 64-bit word.
           *
           * @param {number} high The high 32 bits.
           * @param {number} low The low 32 bits.
           *
           * @example
           *
           *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
           */
          init: function(s, u) {
            this.high = s, this.low = u;
          }
          /**
           * Bitwise NOTs this word.
           *
           * @return {X64Word} A new x64-Word object after negating.
           *
           * @example
           *
           *     var negated = x64Word.not();
           */
          // not: function () {
          // var high = ~this.high;
          // var low = ~this.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ANDs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to AND with this word.
           *
           * @return {X64Word} A new x64-Word object after ANDing.
           *
           * @example
           *
           *     var anded = x64Word.and(anotherX64Word);
           */
          // and: function (word) {
          // var high = this.high & word.high;
          // var low = this.low & word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to OR with this word.
           *
           * @return {X64Word} A new x64-Word object after ORing.
           *
           * @example
           *
           *     var ored = x64Word.or(anotherX64Word);
           */
          // or: function (word) {
          // var high = this.high | word.high;
          // var low = this.low | word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise XORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to XOR with this word.
           *
           * @return {X64Word} A new x64-Word object after XORing.
           *
           * @example
           *
           *     var xored = x64Word.xor(anotherX64Word);
           */
          // xor: function (word) {
          // var high = this.high ^ word.high;
          // var low = this.low ^ word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the left.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftL(25);
           */
          // shiftL: function (n) {
          // if (n < 32) {
          // var high = (this.high << n) | (this.low >>> (32 - n));
          // var low = this.low << n;
          // } else {
          // var high = this.low << (n - 32);
          // var low = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the right.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftR(7);
           */
          // shiftR: function (n) {
          // if (n < 32) {
          // var low = (this.low >>> n) | (this.high << (32 - n));
          // var high = this.high >>> n;
          // } else {
          // var low = this.high >>> (n - 32);
          // var high = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Rotates this word n bits to the left.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotL(25);
           */
          // rotL: function (n) {
          // return this.shiftL(n).or(this.shiftR(64 - n));
          // },
          /**
           * Rotates this word n bits to the right.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotR(7);
           */
          // rotR: function (n) {
          // return this.shiftR(n).or(this.shiftL(64 - n));
          // },
          /**
           * Adds this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to add with this word.
           *
           * @return {X64Word} A new x64-Word object after adding.
           *
           * @example
           *
           *     var added = x64Word.add(anotherX64Word);
           */
          // add: function (word) {
          // var low = (this.low + word.low) | 0;
          // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
          // var high = (this.high + word.high + carry) | 0;
          // return X64Word.create(high, low);
          // }
        }), l.WordArray = a.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.x64.WordArray.create();
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ]);
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ], 10);
           */
          init: function(s, u) {
            s = this.words = s || [], u != n ? this.sigBytes = u : this.sigBytes = s.length * 8;
          },
          /**
           * Converts this 64-bit word array to a 32-bit word array.
           *
           * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
           *
           * @example
           *
           *     var x32WordArray = x64WordArray.toX32();
           */
          toX32: function() {
            for (var s = this.words, u = s.length, h = [], f = 0; f < u; f++) {
              var p = s[f];
              h.push(p.high), h.push(p.low);
            }
            return c.create(h, this.sigBytes);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {X64WordArray} The clone.
           *
           * @example
           *
           *     var clone = x64WordArray.clone();
           */
          clone: function() {
            for (var s = a.clone.call(this), u = s.words = this.words.slice(0), h = u.length, f = 0; f < h; f++)
              u[f] = u[f].clone();
            return s;
          }
        });
      }(), r;
    });
  }(Ss)), sr;
}
var ar = {}, Bs = {
  get exports() {
    return ar;
  },
  set exports(e) {
    ar = e;
  }
}, U0;
function ks() {
  return U0 || (U0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var n = r, i = n.lib, o = i.WordArray, a = o.init, c = o.init = function(l) {
            if (l instanceof ArrayBuffer && (l = new Uint8Array(l)), (l instanceof Int8Array || typeof Uint8ClampedArray < "u" && l instanceof Uint8ClampedArray || l instanceof Int16Array || l instanceof Uint16Array || l instanceof Int32Array || l instanceof Uint32Array || l instanceof Float32Array || l instanceof Float64Array) && (l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength)), l instanceof Uint8Array) {
              for (var s = l.byteLength, u = [], h = 0; h < s; h++)
                u[h >>> 2] |= l[h] << 24 - h % 4 * 8;
              a.call(this, u, s);
            } else
              a.apply(this, arguments);
          };
          c.prototype = o;
        }
      }(), r.lib.WordArray;
    });
  }(Bs)), ar;
}
var cr = {}, As = {
  get exports() {
    return cr;
  },
  set exports(e) {
    cr = e;
  }
}, W0;
function Rs() {
  return W0 || (W0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, a = n.enc;
        a.Utf16 = a.Utf16BE = {
          /**
           * Converts a word array to a UTF-16 BE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 BE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
           */
          stringify: function(l) {
            for (var s = l.words, u = l.sigBytes, h = [], f = 0; f < u; f += 2) {
              var p = s[f >>> 2] >>> 16 - f % 4 * 8 & 65535;
              h.push(String.fromCharCode(p));
            }
            return h.join("");
          },
          /**
           * Converts a UTF-16 BE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 BE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
           */
          parse: function(l) {
            for (var s = l.length, u = [], h = 0; h < s; h++)
              u[h >>> 1] |= l.charCodeAt(h) << 16 - h % 2 * 16;
            return o.create(u, s * 2);
          }
        }, a.Utf16LE = {
          /**
           * Converts a word array to a UTF-16 LE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 LE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
           */
          stringify: function(l) {
            for (var s = l.words, u = l.sigBytes, h = [], f = 0; f < u; f += 2) {
              var p = c(s[f >>> 2] >>> 16 - f % 4 * 8 & 65535);
              h.push(String.fromCharCode(p));
            }
            return h.join("");
          },
          /**
           * Converts a UTF-16 LE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 LE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
           */
          parse: function(l) {
            for (var s = l.length, u = [], h = 0; h < s; h++)
              u[h >>> 1] |= c(l.charCodeAt(h) << 16 - h % 2 * 16);
            return o.create(u, s * 2);
          }
        };
        function c(l) {
          return l << 8 & 4278255360 | l >>> 8 & 16711935;
        }
      }(), r.enc.Utf16;
    });
  }(As)), cr;
}
var fr = {}, Ns = {
  get exports() {
    return fr;
  },
  set exports(e) {
    fr = e;
  }
}, V0;
function bt() {
  return V0 || (V0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, a = n.enc;
        a.Base64 = {
          /**
           * Converts a word array to a Base64 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Base64 string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
           */
          stringify: function(l) {
            var s = l.words, u = l.sigBytes, h = this._map;
            l.clamp();
            for (var f = [], p = 0; p < u; p += 3)
              for (var g = s[p >>> 2] >>> 24 - p % 4 * 8 & 255, _ = s[p + 1 >>> 2] >>> 24 - (p + 1) % 4 * 8 & 255, S = s[p + 2 >>> 2] >>> 24 - (p + 2) % 4 * 8 & 255, O = g << 16 | _ << 8 | S, y = 0; y < 4 && p + y * 0.75 < u; y++)
                f.push(h.charAt(O >>> 6 * (3 - y) & 63));
            var d = h.charAt(64);
            if (d)
              for (; f.length % 4; )
                f.push(d);
            return f.join("");
          },
          /**
           * Converts a Base64 string to a word array.
           *
           * @param {string} base64Str The Base64 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
           */
          parse: function(l) {
            var s = l.length, u = this._map, h = this._reverseMap;
            if (!h) {
              h = this._reverseMap = [];
              for (var f = 0; f < u.length; f++)
                h[u.charCodeAt(f)] = f;
            }
            var p = u.charAt(64);
            if (p) {
              var g = l.indexOf(p);
              g !== -1 && (s = g);
            }
            return c(l, s, h);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function c(l, s, u) {
          for (var h = [], f = 0, p = 0; p < s; p++)
            if (p % 4) {
              var g = u[l.charCodeAt(p - 1)] << p % 4 * 2, _ = u[l.charCodeAt(p)] >>> 6 - p % 4 * 2, S = g | _;
              h[f >>> 2] |= S << 24 - f % 4 * 8, f++;
            }
          return o.create(h, f);
        }
      }(), r.enc.Base64;
    });
  }(Ns)), fr;
}
var ur = {}, Ds = {
  get exports() {
    return ur;
  },
  set exports(e) {
    ur = e;
  }
}, Y0;
function Ts() {
  return Y0 || (Y0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, a = n.enc;
        a.Base64url = {
          /**
           * Converts a word array to a Base64url string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {string} The Base64url string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
           */
          stringify: function(l, s = !0) {
            var u = l.words, h = l.sigBytes, f = s ? this._safe_map : this._map;
            l.clamp();
            for (var p = [], g = 0; g < h; g += 3)
              for (var _ = u[g >>> 2] >>> 24 - g % 4 * 8 & 255, S = u[g + 1 >>> 2] >>> 24 - (g + 1) % 4 * 8 & 255, O = u[g + 2 >>> 2] >>> 24 - (g + 2) % 4 * 8 & 255, y = _ << 16 | S << 8 | O, d = 0; d < 4 && g + d * 0.75 < h; d++)
                p.push(f.charAt(y >>> 6 * (3 - d) & 63));
            var x = f.charAt(64);
            if (x)
              for (; p.length % 4; )
                p.push(x);
            return p.join("");
          },
          /**
           * Converts a Base64url string to a word array.
           *
           * @param {string} base64Str The Base64url string.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
           */
          parse: function(l, s = !0) {
            var u = l.length, h = s ? this._safe_map : this._map, f = this._reverseMap;
            if (!f) {
              f = this._reverseMap = [];
              for (var p = 0; p < h.length; p++)
                f[h.charCodeAt(p)] = p;
            }
            var g = h.charAt(64);
            if (g) {
              var _ = l.indexOf(g);
              _ !== -1 && (u = _);
            }
            return c(l, u, f);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function c(l, s, u) {
          for (var h = [], f = 0, p = 0; p < s; p++)
            if (p % 4) {
              var g = u[l.charCodeAt(p - 1)] << p % 4 * 2, _ = u[l.charCodeAt(p)] >>> 6 - p % 4 * 2, S = g | _;
              h[f >>> 2] |= S << 24 - f % 4 * 8, f++;
            }
          return o.create(h, f);
        }
      }(), r.enc.Base64url;
    });
  }(Ds)), ur;
}
var lr = {}, Os = {
  get exports() {
    return lr;
  },
  set exports(e) {
    lr = e;
  }
}, K0;
function gt() {
  return K0 || (K0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function(n) {
        var i = r, o = i.lib, a = o.WordArray, c = o.Hasher, l = i.algo, s = [];
        (function() {
          for (var _ = 0; _ < 64; _++)
            s[_] = n.abs(n.sin(_ + 1)) * 4294967296 | 0;
        })();
        var u = l.MD5 = c.extend({
          _doReset: function() {
            this._hash = new a.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(_, S) {
            for (var O = 0; O < 16; O++) {
              var y = S + O, d = _[y];
              _[y] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360;
            }
            var x = this._hash.words, m = _[S + 0], C = _[S + 1], A = _[S + 2], T = _[S + 3], I = _[S + 4], E = _[S + 5], w = _[S + 6], k = _[S + 7], N = _[S + 8], M = _[S + 9], F = _[S + 10], P = _[S + 11], $ = _[S + 12], X = _[S + 13], j = _[S + 14], J = _[S + 15], H = x[0], z = x[1], U = x[2], W = x[3];
            H = h(H, z, U, W, m, 7, s[0]), W = h(W, H, z, U, C, 12, s[1]), U = h(U, W, H, z, A, 17, s[2]), z = h(z, U, W, H, T, 22, s[3]), H = h(H, z, U, W, I, 7, s[4]), W = h(W, H, z, U, E, 12, s[5]), U = h(U, W, H, z, w, 17, s[6]), z = h(z, U, W, H, k, 22, s[7]), H = h(H, z, U, W, N, 7, s[8]), W = h(W, H, z, U, M, 12, s[9]), U = h(U, W, H, z, F, 17, s[10]), z = h(z, U, W, H, P, 22, s[11]), H = h(H, z, U, W, $, 7, s[12]), W = h(W, H, z, U, X, 12, s[13]), U = h(U, W, H, z, j, 17, s[14]), z = h(z, U, W, H, J, 22, s[15]), H = f(H, z, U, W, C, 5, s[16]), W = f(W, H, z, U, w, 9, s[17]), U = f(U, W, H, z, P, 14, s[18]), z = f(z, U, W, H, m, 20, s[19]), H = f(H, z, U, W, E, 5, s[20]), W = f(W, H, z, U, F, 9, s[21]), U = f(U, W, H, z, J, 14, s[22]), z = f(z, U, W, H, I, 20, s[23]), H = f(H, z, U, W, M, 5, s[24]), W = f(W, H, z, U, j, 9, s[25]), U = f(U, W, H, z, T, 14, s[26]), z = f(z, U, W, H, N, 20, s[27]), H = f(H, z, U, W, X, 5, s[28]), W = f(W, H, z, U, A, 9, s[29]), U = f(U, W, H, z, k, 14, s[30]), z = f(z, U, W, H, $, 20, s[31]), H = p(H, z, U, W, E, 4, s[32]), W = p(W, H, z, U, N, 11, s[33]), U = p(U, W, H, z, P, 16, s[34]), z = p(z, U, W, H, j, 23, s[35]), H = p(H, z, U, W, C, 4, s[36]), W = p(W, H, z, U, I, 11, s[37]), U = p(U, W, H, z, k, 16, s[38]), z = p(z, U, W, H, F, 23, s[39]), H = p(H, z, U, W, X, 4, s[40]), W = p(W, H, z, U, m, 11, s[41]), U = p(U, W, H, z, T, 16, s[42]), z = p(z, U, W, H, w, 23, s[43]), H = p(H, z, U, W, M, 4, s[44]), W = p(W, H, z, U, $, 11, s[45]), U = p(U, W, H, z, J, 16, s[46]), z = p(z, U, W, H, A, 23, s[47]), H = g(H, z, U, W, m, 6, s[48]), W = g(W, H, z, U, k, 10, s[49]), U = g(U, W, H, z, j, 15, s[50]), z = g(z, U, W, H, E, 21, s[51]), H = g(H, z, U, W, $, 6, s[52]), W = g(W, H, z, U, T, 10, s[53]), U = g(U, W, H, z, F, 15, s[54]), z = g(z, U, W, H, C, 21, s[55]), H = g(H, z, U, W, N, 6, s[56]), W = g(W, H, z, U, J, 10, s[57]), U = g(U, W, H, z, w, 15, s[58]), z = g(z, U, W, H, X, 21, s[59]), H = g(H, z, U, W, I, 6, s[60]), W = g(W, H, z, U, P, 10, s[61]), U = g(U, W, H, z, A, 15, s[62]), z = g(z, U, W, H, M, 21, s[63]), x[0] = x[0] + H | 0, x[1] = x[1] + z | 0, x[2] = x[2] + U | 0, x[3] = x[3] + W | 0;
          },
          _doFinalize: function() {
            var _ = this._data, S = _.words, O = this._nDataBytes * 8, y = _.sigBytes * 8;
            S[y >>> 5] |= 128 << 24 - y % 32;
            var d = n.floor(O / 4294967296), x = O;
            S[(y + 64 >>> 9 << 4) + 15] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, S[(y + 64 >>> 9 << 4) + 14] = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, _.sigBytes = (S.length + 1) * 4, this._process();
            for (var m = this._hash, C = m.words, A = 0; A < 4; A++) {
              var T = C[A];
              C[A] = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360;
            }
            return m;
          },
          clone: function() {
            var _ = c.clone.call(this);
            return _._hash = this._hash.clone(), _;
          }
        });
        function h(_, S, O, y, d, x, m) {
          var C = _ + (S & O | ~S & y) + d + m;
          return (C << x | C >>> 32 - x) + S;
        }
        function f(_, S, O, y, d, x, m) {
          var C = _ + (S & y | O & ~y) + d + m;
          return (C << x | C >>> 32 - x) + S;
        }
        function p(_, S, O, y, d, x, m) {
          var C = _ + (S ^ O ^ y) + d + m;
          return (C << x | C >>> 32 - x) + S;
        }
        function g(_, S, O, y, d, x, m) {
          var C = _ + (O ^ (S | ~y)) + d + m;
          return (C << x | C >>> 32 - x) + S;
        }
        i.MD5 = c._createHelper(u), i.HmacMD5 = c._createHmacHelper(u);
      }(Math), r.MD5;
    });
  }(Os)), lr;
}
var hr = {}, Ls = {
  get exports() {
    return hr;
  },
  set exports(e) {
    hr = e;
  }
}, Z0;
function S0() {
  return Z0 || (Z0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, a = i.Hasher, c = n.algo, l = [], s = c.SHA1 = a.extend({
          _doReset: function() {
            this._hash = new o.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(u, h) {
            for (var f = this._hash.words, p = f[0], g = f[1], _ = f[2], S = f[3], O = f[4], y = 0; y < 80; y++) {
              if (y < 16)
                l[y] = u[h + y] | 0;
              else {
                var d = l[y - 3] ^ l[y - 8] ^ l[y - 14] ^ l[y - 16];
                l[y] = d << 1 | d >>> 31;
              }
              var x = (p << 5 | p >>> 27) + O + l[y];
              y < 20 ? x += (g & _ | ~g & S) + 1518500249 : y < 40 ? x += (g ^ _ ^ S) + 1859775393 : y < 60 ? x += (g & _ | g & S | _ & S) - 1894007588 : x += (g ^ _ ^ S) - 899497514, O = S, S = _, _ = g << 30 | g >>> 2, g = p, p = x;
            }
            f[0] = f[0] + p | 0, f[1] = f[1] + g | 0, f[2] = f[2] + _ | 0, f[3] = f[3] + S | 0, f[4] = f[4] + O | 0;
          },
          _doFinalize: function() {
            var u = this._data, h = u.words, f = this._nDataBytes * 8, p = u.sigBytes * 8;
            return h[p >>> 5] |= 128 << 24 - p % 32, h[(p + 64 >>> 9 << 4) + 14] = Math.floor(f / 4294967296), h[(p + 64 >>> 9 << 4) + 15] = f, u.sigBytes = h.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var u = a.clone.call(this);
            return u._hash = this._hash.clone(), u;
          }
        });
        n.SHA1 = a._createHelper(s), n.HmacSHA1 = a._createHmacHelper(s);
      }(), r.SHA1;
    });
  }(Ls)), hr;
}
var dr = {}, Is = {
  get exports() {
    return dr;
  },
  set exports(e) {
    dr = e;
  }
}, G0;
function Yn() {
  return G0 || (G0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function(n) {
        var i = r, o = i.lib, a = o.WordArray, c = o.Hasher, l = i.algo, s = [], u = [];
        (function() {
          function p(O) {
            for (var y = n.sqrt(O), d = 2; d <= y; d++)
              if (!(O % d))
                return !1;
            return !0;
          }
          function g(O) {
            return (O - (O | 0)) * 4294967296 | 0;
          }
          for (var _ = 2, S = 0; S < 64; )
            p(_) && (S < 8 && (s[S] = g(n.pow(_, 1 / 2))), u[S] = g(n.pow(_, 1 / 3)), S++), _++;
        })();
        var h = [], f = l.SHA256 = c.extend({
          _doReset: function() {
            this._hash = new a.init(s.slice(0));
          },
          _doProcessBlock: function(p, g) {
            for (var _ = this._hash.words, S = _[0], O = _[1], y = _[2], d = _[3], x = _[4], m = _[5], C = _[6], A = _[7], T = 0; T < 64; T++) {
              if (T < 16)
                h[T] = p[g + T] | 0;
              else {
                var I = h[T - 15], E = (I << 25 | I >>> 7) ^ (I << 14 | I >>> 18) ^ I >>> 3, w = h[T - 2], k = (w << 15 | w >>> 17) ^ (w << 13 | w >>> 19) ^ w >>> 10;
                h[T] = E + h[T - 7] + k + h[T - 16];
              }
              var N = x & m ^ ~x & C, M = S & O ^ S & y ^ O & y, F = (S << 30 | S >>> 2) ^ (S << 19 | S >>> 13) ^ (S << 10 | S >>> 22), P = (x << 26 | x >>> 6) ^ (x << 21 | x >>> 11) ^ (x << 7 | x >>> 25), $ = A + P + N + u[T] + h[T], X = F + M;
              A = C, C = m, m = x, x = d + $ | 0, d = y, y = O, O = S, S = $ + X | 0;
            }
            _[0] = _[0] + S | 0, _[1] = _[1] + O | 0, _[2] = _[2] + y | 0, _[3] = _[3] + d | 0, _[4] = _[4] + x | 0, _[5] = _[5] + m | 0, _[6] = _[6] + C | 0, _[7] = _[7] + A | 0;
          },
          _doFinalize: function() {
            var p = this._data, g = p.words, _ = this._nDataBytes * 8, S = p.sigBytes * 8;
            return g[S >>> 5] |= 128 << 24 - S % 32, g[(S + 64 >>> 9 << 4) + 14] = n.floor(_ / 4294967296), g[(S + 64 >>> 9 << 4) + 15] = _, p.sigBytes = g.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var p = c.clone.call(this);
            return p._hash = this._hash.clone(), p;
          }
        });
        i.SHA256 = c._createHelper(f), i.HmacSHA256 = c._createHmacHelper(f);
      }(Math), r.SHA256;
    });
  }(Is)), dr;
}
var vr = {}, Fs = {
  get exports() {
    return vr;
  },
  set exports(e) {
    vr = e;
  }
}, X0;
function Ps() {
  return X0 || (X0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Yn());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, a = n.algo, c = a.SHA256, l = a.SHA224 = c.extend({
          _doReset: function() {
            this._hash = new o.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var s = c._doFinalize.call(this);
            return s.sigBytes -= 4, s;
          }
        });
        n.SHA224 = c._createHelper(l), n.HmacSHA224 = c._createHmacHelper(l);
      }(), r.SHA224;
    });
  }(Fs)), vr;
}
var pr = {}, Ms = {
  get exports() {
    return pr;
  },
  set exports(e) {
    pr = e;
  }
}, j0;
function Kn() {
  return j0 || (j0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Ur());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.Hasher, a = n.x64, c = a.Word, l = a.WordArray, s = n.algo;
        function u() {
          return c.create.apply(c, arguments);
        }
        var h = [
          u(1116352408, 3609767458),
          u(1899447441, 602891725),
          u(3049323471, 3964484399),
          u(3921009573, 2173295548),
          u(961987163, 4081628472),
          u(1508970993, 3053834265),
          u(2453635748, 2937671579),
          u(2870763221, 3664609560),
          u(3624381080, 2734883394),
          u(310598401, 1164996542),
          u(607225278, 1323610764),
          u(1426881987, 3590304994),
          u(1925078388, 4068182383),
          u(2162078206, 991336113),
          u(2614888103, 633803317),
          u(3248222580, 3479774868),
          u(3835390401, 2666613458),
          u(4022224774, 944711139),
          u(264347078, 2341262773),
          u(604807628, 2007800933),
          u(770255983, 1495990901),
          u(1249150122, 1856431235),
          u(1555081692, 3175218132),
          u(1996064986, 2198950837),
          u(2554220882, 3999719339),
          u(2821834349, 766784016),
          u(2952996808, 2566594879),
          u(3210313671, 3203337956),
          u(3336571891, 1034457026),
          u(3584528711, 2466948901),
          u(113926993, 3758326383),
          u(338241895, 168717936),
          u(666307205, 1188179964),
          u(773529912, 1546045734),
          u(1294757372, 1522805485),
          u(1396182291, 2643833823),
          u(1695183700, 2343527390),
          u(1986661051, 1014477480),
          u(2177026350, 1206759142),
          u(2456956037, 344077627),
          u(2730485921, 1290863460),
          u(2820302411, 3158454273),
          u(3259730800, 3505952657),
          u(3345764771, 106217008),
          u(3516065817, 3606008344),
          u(3600352804, 1432725776),
          u(4094571909, 1467031594),
          u(275423344, 851169720),
          u(430227734, 3100823752),
          u(506948616, 1363258195),
          u(659060556, 3750685593),
          u(883997877, 3785050280),
          u(958139571, 3318307427),
          u(1322822218, 3812723403),
          u(1537002063, 2003034995),
          u(1747873779, 3602036899),
          u(1955562222, 1575990012),
          u(2024104815, 1125592928),
          u(2227730452, 2716904306),
          u(2361852424, 442776044),
          u(2428436474, 593698344),
          u(2756734187, 3733110249),
          u(3204031479, 2999351573),
          u(3329325298, 3815920427),
          u(3391569614, 3928383900),
          u(3515267271, 566280711),
          u(3940187606, 3454069534),
          u(4118630271, 4000239992),
          u(116418474, 1914138554),
          u(174292421, 2731055270),
          u(289380356, 3203993006),
          u(460393269, 320620315),
          u(685471733, 587496836),
          u(852142971, 1086792851),
          u(1017036298, 365543100),
          u(1126000580, 2618297676),
          u(1288033470, 3409855158),
          u(1501505948, 4234509866),
          u(1607167915, 987167468),
          u(1816402316, 1246189591)
        ], f = [];
        (function() {
          for (var g = 0; g < 80; g++)
            f[g] = u();
        })();
        var p = s.SHA512 = o.extend({
          _doReset: function() {
            this._hash = new l.init([
              new c.init(1779033703, 4089235720),
              new c.init(3144134277, 2227873595),
              new c.init(1013904242, 4271175723),
              new c.init(2773480762, 1595750129),
              new c.init(1359893119, 2917565137),
              new c.init(2600822924, 725511199),
              new c.init(528734635, 4215389547),
              new c.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(g, _) {
            for (var S = this._hash.words, O = S[0], y = S[1], d = S[2], x = S[3], m = S[4], C = S[5], A = S[6], T = S[7], I = O.high, E = O.low, w = y.high, k = y.low, N = d.high, M = d.low, F = x.high, P = x.low, $ = m.high, X = m.low, j = C.high, J = C.low, H = A.high, z = A.low, U = T.high, W = T.low, ae = I, le = E, be = w, ne = k, ge = N, Se = M, je = F, Pe = P, Ie = $, Ae = X, Fe = j, ht = J, dt = H, Ve = z, vt = U, Qe = W, Re = 0; Re < 80; Re++) {
              var Ne, ze, pt = f[Re];
              if (Re < 16)
                ze = pt.high = g[_ + Re * 2] | 0, Ne = pt.low = g[_ + Re * 2 + 1] | 0;
              else {
                var At = f[Re - 15], Je = At.high, ot = At.low, Ut = (Je >>> 1 | ot << 31) ^ (Je >>> 8 | ot << 24) ^ Je >>> 7, Rt = (ot >>> 1 | Je << 31) ^ (ot >>> 8 | Je << 24) ^ (ot >>> 7 | Je << 25), Nt = f[Re - 2], et = Nt.high, st = Nt.low, Wt = (et >>> 19 | st << 13) ^ (et << 3 | st >>> 29) ^ et >>> 6, yt = (st >>> 19 | et << 13) ^ (st << 3 | et >>> 29) ^ (st >>> 6 | et << 26), Vt = f[Re - 7], Gr = Vt.high, Dt = Vt.low, Tt = f[Re - 16], Xr = Tt.high, $e = Tt.low;
                Ne = Rt + Dt, ze = Ut + Gr + (Ne >>> 0 < Rt >>> 0 ? 1 : 0), Ne = Ne + yt, ze = ze + Wt + (Ne >>> 0 < yt >>> 0 ? 1 : 0), Ne = Ne + $e, ze = ze + Xr + (Ne >>> 0 < $e >>> 0 ? 1 : 0), pt.high = ze, pt.low = Ne;
              }
              var jr = Ie & Fe ^ ~Ie & dt, Yt = Ae & ht ^ ~Ae & Ve, Kt = ae & be ^ ae & ge ^ be & ge, Qr = le & ne ^ le & Se ^ ne & Se, Jr = (ae >>> 28 | le << 4) ^ (ae << 30 | le >>> 2) ^ (ae << 25 | le >>> 7), Zt = (le >>> 28 | ae << 4) ^ (le << 30 | ae >>> 2) ^ (le << 25 | ae >>> 7), e0 = (Ie >>> 14 | Ae << 18) ^ (Ie >>> 18 | Ae << 14) ^ (Ie << 23 | Ae >>> 9), t0 = (Ae >>> 14 | Ie << 18) ^ (Ae >>> 18 | Ie << 14) ^ (Ae << 23 | Ie >>> 9), Gt = h[Re], r0 = Gt.high, Xt = Gt.low, De = Qe + t0, Ye = vt + e0 + (De >>> 0 < Qe >>> 0 ? 1 : 0), De = De + Yt, Ye = Ye + jr + (De >>> 0 < Yt >>> 0 ? 1 : 0), De = De + Xt, Ye = Ye + r0 + (De >>> 0 < Xt >>> 0 ? 1 : 0), De = De + Ne, Ye = Ye + ze + (De >>> 0 < Ne >>> 0 ? 1 : 0), Ot = Zt + Qr, n0 = Jr + Kt + (Ot >>> 0 < Zt >>> 0 ? 1 : 0);
              vt = dt, Qe = Ve, dt = Fe, Ve = ht, Fe = Ie, ht = Ae, Ae = Pe + De | 0, Ie = je + Ye + (Ae >>> 0 < Pe >>> 0 ? 1 : 0) | 0, je = ge, Pe = Se, ge = be, Se = ne, be = ae, ne = le, le = De + Ot | 0, ae = Ye + n0 + (le >>> 0 < De >>> 0 ? 1 : 0) | 0;
            }
            E = O.low = E + le, O.high = I + ae + (E >>> 0 < le >>> 0 ? 1 : 0), k = y.low = k + ne, y.high = w + be + (k >>> 0 < ne >>> 0 ? 1 : 0), M = d.low = M + Se, d.high = N + ge + (M >>> 0 < Se >>> 0 ? 1 : 0), P = x.low = P + Pe, x.high = F + je + (P >>> 0 < Pe >>> 0 ? 1 : 0), X = m.low = X + Ae, m.high = $ + Ie + (X >>> 0 < Ae >>> 0 ? 1 : 0), J = C.low = J + ht, C.high = j + Fe + (J >>> 0 < ht >>> 0 ? 1 : 0), z = A.low = z + Ve, A.high = H + dt + (z >>> 0 < Ve >>> 0 ? 1 : 0), W = T.low = W + Qe, T.high = U + vt + (W >>> 0 < Qe >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var g = this._data, _ = g.words, S = this._nDataBytes * 8, O = g.sigBytes * 8;
            _[O >>> 5] |= 128 << 24 - O % 32, _[(O + 128 >>> 10 << 5) + 30] = Math.floor(S / 4294967296), _[(O + 128 >>> 10 << 5) + 31] = S, g.sigBytes = _.length * 4, this._process();
            var y = this._hash.toX32();
            return y;
          },
          clone: function() {
            var g = o.clone.call(this);
            return g._hash = this._hash.clone(), g;
          },
          blockSize: 1024 / 32
        });
        n.SHA512 = o._createHelper(p), n.HmacSHA512 = o._createHmacHelper(p);
      }(), r.SHA512;
    });
  }(Ms)), pr;
}
var xr = {}, Hs = {
  get exports() {
    return xr;
  },
  set exports(e) {
    xr = e;
  }
}, Q0;
function zs() {
  return Q0 || (Q0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Ur(), Kn());
    })(re, function(r) {
      return function() {
        var n = r, i = n.x64, o = i.Word, a = i.WordArray, c = n.algo, l = c.SHA512, s = c.SHA384 = l.extend({
          _doReset: function() {
            this._hash = new a.init([
              new o.init(3418070365, 3238371032),
              new o.init(1654270250, 914150663),
              new o.init(2438529370, 812702999),
              new o.init(355462360, 4144912697),
              new o.init(1731405415, 4290775857),
              new o.init(2394180231, 1750603025),
              new o.init(3675008525, 1694076839),
              new o.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var u = l._doFinalize.call(this);
            return u.sigBytes -= 16, u;
          }
        });
        n.SHA384 = l._createHelper(s), n.HmacSHA384 = l._createHmacHelper(s);
      }(), r.SHA384;
    });
  }(Hs)), xr;
}
var br = {}, $s = {
  get exports() {
    return br;
  },
  set exports(e) {
    br = e;
  }
}, J0;
function qs() {
  return J0 || (J0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Ur());
    })(re, function(r) {
      return function(n) {
        var i = r, o = i.lib, a = o.WordArray, c = o.Hasher, l = i.x64, s = l.Word, u = i.algo, h = [], f = [], p = [];
        (function() {
          for (var S = 1, O = 0, y = 0; y < 24; y++) {
            h[S + 5 * O] = (y + 1) * (y + 2) / 2 % 64;
            var d = O % 5, x = (2 * S + 3 * O) % 5;
            S = d, O = x;
          }
          for (var S = 0; S < 5; S++)
            for (var O = 0; O < 5; O++)
              f[S + 5 * O] = O + (2 * S + 3 * O) % 5 * 5;
          for (var m = 1, C = 0; C < 24; C++) {
            for (var A = 0, T = 0, I = 0; I < 7; I++) {
              if (m & 1) {
                var E = (1 << I) - 1;
                E < 32 ? T ^= 1 << E : A ^= 1 << E - 32;
              }
              m & 128 ? m = m << 1 ^ 113 : m <<= 1;
            }
            p[C] = s.create(A, T);
          }
        })();
        var g = [];
        (function() {
          for (var S = 0; S < 25; S++)
            g[S] = s.create();
        })();
        var _ = u.SHA3 = c.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: c.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var S = this._state = [], O = 0; O < 25; O++)
              S[O] = new s.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(S, O) {
            for (var y = this._state, d = this.blockSize / 2, x = 0; x < d; x++) {
              var m = S[O + 2 * x], C = S[O + 2 * x + 1];
              m = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360, C = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360;
              var A = y[x];
              A.high ^= C, A.low ^= m;
            }
            for (var T = 0; T < 24; T++) {
              for (var I = 0; I < 5; I++) {
                for (var E = 0, w = 0, k = 0; k < 5; k++) {
                  var A = y[I + 5 * k];
                  E ^= A.high, w ^= A.low;
                }
                var N = g[I];
                N.high = E, N.low = w;
              }
              for (var I = 0; I < 5; I++)
                for (var M = g[(I + 4) % 5], F = g[(I + 1) % 5], P = F.high, $ = F.low, E = M.high ^ (P << 1 | $ >>> 31), w = M.low ^ ($ << 1 | P >>> 31), k = 0; k < 5; k++) {
                  var A = y[I + 5 * k];
                  A.high ^= E, A.low ^= w;
                }
              for (var X = 1; X < 25; X++) {
                var E, w, A = y[X], j = A.high, J = A.low, H = h[X];
                H < 32 ? (E = j << H | J >>> 32 - H, w = J << H | j >>> 32 - H) : (E = J << H - 32 | j >>> 64 - H, w = j << H - 32 | J >>> 64 - H);
                var z = g[f[X]];
                z.high = E, z.low = w;
              }
              var U = g[0], W = y[0];
              U.high = W.high, U.low = W.low;
              for (var I = 0; I < 5; I++)
                for (var k = 0; k < 5; k++) {
                  var X = I + 5 * k, A = y[X], ae = g[X], le = g[(I + 1) % 5 + 5 * k], be = g[(I + 2) % 5 + 5 * k];
                  A.high = ae.high ^ ~le.high & be.high, A.low = ae.low ^ ~le.low & be.low;
                }
              var A = y[0], ne = p[T];
              A.high ^= ne.high, A.low ^= ne.low;
            }
          },
          _doFinalize: function() {
            var S = this._data, O = S.words;
            this._nDataBytes * 8;
            var y = S.sigBytes * 8, d = this.blockSize * 32;
            O[y >>> 5] |= 1 << 24 - y % 32, O[(n.ceil((y + 1) / d) * d >>> 5) - 1] |= 128, S.sigBytes = O.length * 4, this._process();
            for (var x = this._state, m = this.cfg.outputLength / 8, C = m / 8, A = [], T = 0; T < C; T++) {
              var I = x[T], E = I.high, w = I.low;
              E = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, w = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, A.push(w), A.push(E);
            }
            return new a.init(A, m);
          },
          clone: function() {
            for (var S = c.clone.call(this), O = S._state = this._state.slice(0), y = 0; y < 25; y++)
              O[y] = O[y].clone();
            return S;
          }
        });
        i.SHA3 = c._createHelper(_), i.HmacSHA3 = c._createHmacHelper(_);
      }(Math), r.SHA3;
    });
  }($s)), br;
}
var gr = {}, Us = {
  get exports() {
    return gr;
  },
  set exports(e) {
    gr = e;
  }
}, en;
function Ws() {
  return en || (en = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(n) {
        var i = r, o = i.lib, a = o.WordArray, c = o.Hasher, l = i.algo, s = a.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]), u = a.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]), h = a.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]), f = a.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]), p = a.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), g = a.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), _ = l.RIPEMD160 = c.extend({
          _doReset: function() {
            this._hash = a.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(C, A) {
            for (var T = 0; T < 16; T++) {
              var I = A + T, E = C[I];
              C[I] = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360;
            }
            var w = this._hash.words, k = p.words, N = g.words, M = s.words, F = u.words, P = h.words, $ = f.words, X, j, J, H, z, U, W, ae, le, be;
            U = X = w[0], W = j = w[1], ae = J = w[2], le = H = w[3], be = z = w[4];
            for (var ne, T = 0; T < 80; T += 1)
              ne = X + C[A + M[T]] | 0, T < 16 ? ne += S(j, J, H) + k[0] : T < 32 ? ne += O(j, J, H) + k[1] : T < 48 ? ne += y(j, J, H) + k[2] : T < 64 ? ne += d(j, J, H) + k[3] : ne += x(j, J, H) + k[4], ne = ne | 0, ne = m(ne, P[T]), ne = ne + z | 0, X = z, z = H, H = m(J, 10), J = j, j = ne, ne = U + C[A + F[T]] | 0, T < 16 ? ne += x(W, ae, le) + N[0] : T < 32 ? ne += d(W, ae, le) + N[1] : T < 48 ? ne += y(W, ae, le) + N[2] : T < 64 ? ne += O(W, ae, le) + N[3] : ne += S(W, ae, le) + N[4], ne = ne | 0, ne = m(ne, $[T]), ne = ne + be | 0, U = be, be = le, le = m(ae, 10), ae = W, W = ne;
            ne = w[1] + J + le | 0, w[1] = w[2] + H + be | 0, w[2] = w[3] + z + U | 0, w[3] = w[4] + X + W | 0, w[4] = w[0] + j + ae | 0, w[0] = ne;
          },
          _doFinalize: function() {
            var C = this._data, A = C.words, T = this._nDataBytes * 8, I = C.sigBytes * 8;
            A[I >>> 5] |= 128 << 24 - I % 32, A[(I + 64 >>> 9 << 4) + 14] = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360, C.sigBytes = (A.length + 1) * 4, this._process();
            for (var E = this._hash, w = E.words, k = 0; k < 5; k++) {
              var N = w[k];
              w[k] = (N << 8 | N >>> 24) & 16711935 | (N << 24 | N >>> 8) & 4278255360;
            }
            return E;
          },
          clone: function() {
            var C = c.clone.call(this);
            return C._hash = this._hash.clone(), C;
          }
        });
        function S(C, A, T) {
          return C ^ A ^ T;
        }
        function O(C, A, T) {
          return C & A | ~C & T;
        }
        function y(C, A, T) {
          return (C | ~A) ^ T;
        }
        function d(C, A, T) {
          return C & T | A & ~T;
        }
        function x(C, A, T) {
          return C ^ (A | ~T);
        }
        function m(C, A) {
          return C << A | C >>> 32 - A;
        }
        i.RIPEMD160 = c._createHelper(_), i.HmacRIPEMD160 = c._createHmacHelper(_);
      }(), r.RIPEMD160;
    });
  }(Us)), gr;
}
var mr = {}, Vs = {
  get exports() {
    return mr;
  },
  set exports(e) {
    mr = e;
  }
}, tn;
function B0() {
  return tn || (tn = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      (function() {
        var n = r, i = n.lib, o = i.Base, a = n.enc, c = a.Utf8, l = n.algo;
        l.HMAC = o.extend({
          /**
           * Initializes a newly created HMAC.
           *
           * @param {Hasher} hasher The hash algorithm to use.
           * @param {WordArray|string} key The secret key.
           *
           * @example
           *
           *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
           */
          init: function(s, u) {
            s = this._hasher = new s.init(), typeof u == "string" && (u = c.parse(u));
            var h = s.blockSize, f = h * 4;
            u.sigBytes > f && (u = s.finalize(u)), u.clamp();
            for (var p = this._oKey = u.clone(), g = this._iKey = u.clone(), _ = p.words, S = g.words, O = 0; O < h; O++)
              _[O] ^= 1549556828, S[O] ^= 909522486;
            p.sigBytes = g.sigBytes = f, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var s = this._hasher;
            s.reset(), s.update(this._iKey);
          },
          /**
           * Updates this HMAC with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {HMAC} This HMAC instance.
           *
           * @example
           *
           *     hmacHasher.update('message');
           *     hmacHasher.update(wordArray);
           */
          update: function(s) {
            return this._hasher.update(s), this;
          },
          /**
           * Finalizes the HMAC computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The HMAC.
           *
           * @example
           *
           *     var hmac = hmacHasher.finalize();
           *     var hmac = hmacHasher.finalize('message');
           *     var hmac = hmacHasher.finalize(wordArray);
           */
          finalize: function(s) {
            var u = this._hasher, h = u.finalize(s);
            u.reset();
            var f = u.finalize(this._oKey.clone().concat(h));
            return f;
          }
        });
      })();
    });
  }(Vs)), mr;
}
var yr = {}, Ys = {
  get exports() {
    return yr;
  },
  set exports(e) {
    yr = e;
  }
}, rn;
function Ks() {
  return rn || (rn = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), S0(), B0());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.Base, a = i.WordArray, c = n.algo, l = c.SHA1, s = c.HMAC, u = c.PBKDF2 = o.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA1
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: o.extend({
            keySize: 128 / 32,
            hasher: l,
            iterations: 1
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.PBKDF2.create();
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
           */
          init: function(h) {
            this.cfg = this.cfg.extend(h);
          },
          /**
           * Computes the Password-Based Key Derivation Function 2.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(h, f) {
            for (var p = this.cfg, g = s.create(p.hasher, h), _ = a.create(), S = a.create([1]), O = _.words, y = S.words, d = p.keySize, x = p.iterations; O.length < d; ) {
              var m = g.update(f).finalize(S);
              g.reset();
              for (var C = m.words, A = C.length, T = m, I = 1; I < x; I++) {
                T = g.finalize(T), g.reset();
                for (var E = T.words, w = 0; w < A; w++)
                  C[w] ^= E[w];
              }
              _.concat(m), y[0]++;
            }
            return _.sigBytes = d * 4, _;
          }
        });
        n.PBKDF2 = function(h, f, p) {
          return u.create(p).compute(h, f);
        };
      }(), r.PBKDF2;
    });
  }(Ys)), yr;
}
var _r = {}, Zs = {
  get exports() {
    return _r;
  },
  set exports(e) {
    _r = e;
  }
}, nn;
function mt() {
  return nn || (nn = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), S0(), B0());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.Base, a = i.WordArray, c = n.algo, l = c.MD5, s = c.EvpKDF = o.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: o.extend({
            keySize: 128 / 32,
            hasher: l,
            iterations: 1
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.EvpKDF.create();
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
           */
          init: function(u) {
            this.cfg = this.cfg.extend(u);
          },
          /**
           * Derives a key from a password.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(u, h) {
            for (var f, p = this.cfg, g = p.hasher.create(), _ = a.create(), S = _.words, O = p.keySize, y = p.iterations; S.length < O; ) {
              f && g.update(f), f = g.update(u).finalize(h), g.reset();
              for (var d = 1; d < y; d++)
                f = g.finalize(f), g.reset();
              _.concat(f);
            }
            return _.sigBytes = O * 4, _;
          }
        });
        n.EvpKDF = function(u, h, f) {
          return s.create(f).compute(u, h);
        };
      }(), r.EvpKDF;
    });
  }(Zs)), _r;
}
var wr = {}, Gs = {
  get exports() {
    return wr;
  },
  set exports(e) {
    wr = e;
  }
}, on;
function Ce() {
  return on || (on = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), mt());
    })(re, function(r) {
      r.lib.Cipher || function(n) {
        var i = r, o = i.lib, a = o.Base, c = o.WordArray, l = o.BufferedBlockAlgorithm, s = i.enc;
        s.Utf8;
        var u = s.Base64, h = i.algo, f = h.EvpKDF, p = o.Cipher = l.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: a.extend(),
          /**
           * Creates this cipher in encryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
           */
          createEncryptor: function(E, w) {
            return this.create(this._ENC_XFORM_MODE, E, w);
          },
          /**
           * Creates this cipher in decryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
           */
          createDecryptor: function(E, w) {
            return this.create(this._DEC_XFORM_MODE, E, w);
          },
          /**
           * Initializes a newly created cipher.
           *
           * @param {number} xformMode Either the encryption or decryption transormation mode constant.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
           */
          init: function(E, w, k) {
            this.cfg = this.cfg.extend(k), this._xformMode = E, this._key = w, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            l.reset.call(this), this._doReset();
          },
          /**
           * Adds data to be encrypted or decrypted.
           *
           * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
           *
           * @return {WordArray} The data after processing.
           *
           * @example
           *
           *     var encrypted = cipher.process('data');
           *     var encrypted = cipher.process(wordArray);
           */
          process: function(E) {
            return this._append(E), this._process();
          },
          /**
           * Finalizes the encryption or decryption process.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
           *
           * @return {WordArray} The data after final processing.
           *
           * @example
           *
           *     var encrypted = cipher.finalize();
           *     var encrypted = cipher.finalize('data');
           *     var encrypted = cipher.finalize(wordArray);
           */
          finalize: function(E) {
            E && this._append(E);
            var w = this._doFinalize();
            return w;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          /**
           * Creates shortcut functions to a cipher's object interface.
           *
           * @param {Cipher} cipher The cipher to create a helper for.
           *
           * @return {Object} An object with encrypt and decrypt shortcut functions.
           *
           * @static
           *
           * @example
           *
           *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
           */
          _createHelper: function() {
            function E(w) {
              return typeof w == "string" ? I : C;
            }
            return function(w) {
              return {
                encrypt: function(k, N, M) {
                  return E(N).encrypt(w, k, N, M);
                },
                decrypt: function(k, N, M) {
                  return E(N).decrypt(w, k, N, M);
                }
              };
            };
          }()
        });
        o.StreamCipher = p.extend({
          _doFinalize: function() {
            var E = this._process(!0);
            return E;
          },
          blockSize: 1
        });
        var g = i.mode = {}, _ = o.BlockCipherMode = a.extend({
          /**
           * Creates this mode for encryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
           */
          createEncryptor: function(E, w) {
            return this.Encryptor.create(E, w);
          },
          /**
           * Creates this mode for decryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
           */
          createDecryptor: function(E, w) {
            return this.Decryptor.create(E, w);
          },
          /**
           * Initializes a newly created mode.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
           */
          init: function(E, w) {
            this._cipher = E, this._iv = w;
          }
        }), S = g.CBC = function() {
          var E = _.extend();
          E.Encryptor = E.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(k, N) {
              var M = this._cipher, F = M.blockSize;
              w.call(this, k, N, F), M.encryptBlock(k, N), this._prevBlock = k.slice(N, N + F);
            }
          }), E.Decryptor = E.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(k, N) {
              var M = this._cipher, F = M.blockSize, P = k.slice(N, N + F);
              M.decryptBlock(k, N), w.call(this, k, N, F), this._prevBlock = P;
            }
          });
          function w(k, N, M) {
            var F, P = this._iv;
            P ? (F = P, this._iv = n) : F = this._prevBlock;
            for (var $ = 0; $ < M; $++)
              k[N + $] ^= F[$];
          }
          return E;
        }(), O = i.pad = {}, y = O.Pkcs7 = {
          /**
           * Pads data using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to pad.
           * @param {number} blockSize The multiple that the data should be padded to.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
           */
          pad: function(E, w) {
            for (var k = w * 4, N = k - E.sigBytes % k, M = N << 24 | N << 16 | N << 8 | N, F = [], P = 0; P < N; P += 4)
              F.push(M);
            var $ = c.create(F, N);
            E.concat($);
          },
          /**
           * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to unpad.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.unpad(wordArray);
           */
          unpad: function(E) {
            var w = E.words[E.sigBytes - 1 >>> 2] & 255;
            E.sigBytes -= w;
          }
        };
        o.BlockCipher = p.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: p.cfg.extend({
            mode: S,
            padding: y
          }),
          reset: function() {
            var E;
            p.reset.call(this);
            var w = this.cfg, k = w.iv, N = w.mode;
            this._xformMode == this._ENC_XFORM_MODE ? E = N.createEncryptor : (E = N.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == E ? this._mode.init(this, k && k.words) : (this._mode = E.call(N, this, k && k.words), this._mode.__creator = E);
          },
          _doProcessBlock: function(E, w) {
            this._mode.processBlock(E, w);
          },
          _doFinalize: function() {
            var E, w = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (w.pad(this._data, this.blockSize), E = this._process(!0)) : (E = this._process(!0), w.unpad(E)), E;
          },
          blockSize: 128 / 32
        });
        var d = o.CipherParams = a.extend({
          /**
           * Initializes a newly created cipher params object.
           *
           * @param {Object} cipherParams An object with any of the possible cipher parameters.
           *
           * @example
           *
           *     var cipherParams = CryptoJS.lib.CipherParams.create({
           *         ciphertext: ciphertextWordArray,
           *         key: keyWordArray,
           *         iv: ivWordArray,
           *         salt: saltWordArray,
           *         algorithm: CryptoJS.algo.AES,
           *         mode: CryptoJS.mode.CBC,
           *         padding: CryptoJS.pad.PKCS7,
           *         blockSize: 4,
           *         formatter: CryptoJS.format.OpenSSL
           *     });
           */
          init: function(E) {
            this.mixIn(E);
          },
          /**
           * Converts this cipher params object to a string.
           *
           * @param {Format} formatter (Optional) The formatting strategy to use.
           *
           * @return {string} The stringified cipher params.
           *
           * @throws Error If neither the formatter nor the default formatter is set.
           *
           * @example
           *
           *     var string = cipherParams + '';
           *     var string = cipherParams.toString();
           *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
           */
          toString: function(E) {
            return (E || this.formatter).stringify(this);
          }
        }), x = i.format = {}, m = x.OpenSSL = {
          /**
           * Converts a cipher params object to an OpenSSL-compatible string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The OpenSSL-compatible string.
           *
           * @static
           *
           * @example
           *
           *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
           */
          stringify: function(E) {
            var w, k = E.ciphertext, N = E.salt;
            return N ? w = c.create([1398893684, 1701076831]).concat(N).concat(k) : w = k, w.toString(u);
          },
          /**
           * Converts an OpenSSL-compatible string to a cipher params object.
           *
           * @param {string} openSSLStr The OpenSSL-compatible string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
           */
          parse: function(E) {
            var w, k = u.parse(E), N = k.words;
            return N[0] == 1398893684 && N[1] == 1701076831 && (w = c.create(N.slice(2, 4)), N.splice(0, 4), k.sigBytes -= 16), d.create({ ciphertext: k, salt: w });
          }
        }, C = o.SerializableCipher = a.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: a.extend({
            format: m
          }),
          /**
           * Encrypts a message.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(E, w, k, N) {
            N = this.cfg.extend(N);
            var M = E.createEncryptor(k, N), F = M.finalize(w), P = M.cfg;
            return d.create({
              ciphertext: F,
              key: k,
              iv: P.iv,
              algorithm: E,
              mode: P.mode,
              padding: P.padding,
              blockSize: E.blockSize,
              formatter: N.format
            });
          },
          /**
           * Decrypts serialized ciphertext.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(E, w, k, N) {
            N = this.cfg.extend(N), w = this._parse(w, N.format);
            var M = E.createDecryptor(k, N).finalize(w.ciphertext);
            return M;
          },
          /**
           * Converts serialized ciphertext to CipherParams,
           * else assumed CipherParams already and returns ciphertext unchanged.
           *
           * @param {CipherParams|string} ciphertext The ciphertext.
           * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
           *
           * @return {CipherParams} The unserialized ciphertext.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
           */
          _parse: function(E, w) {
            return typeof E == "string" ? w.parse(E, this) : E;
          }
        }), A = i.kdf = {}, T = A.OpenSSL = {
          /**
           * Derives a key and IV from a password.
           *
           * @param {string} password The password to derive from.
           * @param {number} keySize The size in words of the key to generate.
           * @param {number} ivSize The size in words of the IV to generate.
           * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
           *
           * @return {CipherParams} A cipher params object with the key, IV, and salt.
           *
           * @static
           *
           * @example
           *
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
           */
          execute: function(E, w, k, N) {
            N || (N = c.random(64 / 8));
            var M = f.create({ keySize: w + k }).compute(E, N), F = c.create(M.words.slice(w), k * 4);
            return M.sigBytes = w * 4, d.create({ key: M, iv: F, salt: N });
          }
        }, I = o.PasswordBasedCipher = C.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: C.cfg.extend({
            kdf: T
          }),
          /**
           * Encrypts a message using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(E, w, k, N) {
            N = this.cfg.extend(N);
            var M = N.kdf.execute(k, E.keySize, E.ivSize);
            N.iv = M.iv;
            var F = C.encrypt.call(this, E, w, M.key, N);
            return F.mixIn(M), F;
          },
          /**
           * Decrypts serialized ciphertext using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(E, w, k, N) {
            N = this.cfg.extend(N), w = this._parse(w, N.format);
            var M = N.kdf.execute(k, E.keySize, E.ivSize, w.salt);
            N.iv = M.iv;
            var F = C.decrypt.call(this, E, w, M.key, N);
            return F;
          }
        });
      }();
    });
  }(Gs)), wr;
}
var Er = {}, Xs = {
  get exports() {
    return Er;
  },
  set exports(e) {
    Er = e;
  }
}, sn;
function js() {
  return sn || (sn = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Ce());
    })(re, function(r) {
      return r.mode.CFB = function() {
        var n = r.lib.BlockCipherMode.extend();
        n.Encryptor = n.extend({
          processBlock: function(o, a) {
            var c = this._cipher, l = c.blockSize;
            i.call(this, o, a, l, c), this._prevBlock = o.slice(a, a + l);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(o, a) {
            var c = this._cipher, l = c.blockSize, s = o.slice(a, a + l);
            i.call(this, o, a, l, c), this._prevBlock = s;
          }
        });
        function i(o, a, c, l) {
          var s, u = this._iv;
          u ? (s = u.slice(0), this._iv = void 0) : s = this._prevBlock, l.encryptBlock(s, 0);
          for (var h = 0; h < c; h++)
            o[a + h] ^= s[h];
        }
        return n;
      }(), r.mode.CFB;
    });
  }(Xs)), Er;
}
var Cr = {}, Qs = {
  get exports() {
    return Cr;
  },
  set exports(e) {
    Cr = e;
  }
}, an;
function Js() {
  return an || (an = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Ce());
    })(re, function(r) {
      return r.mode.CTR = function() {
        var n = r.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(o, a) {
            var c = this._cipher, l = c.blockSize, s = this._iv, u = this._counter;
            s && (u = this._counter = s.slice(0), this._iv = void 0);
            var h = u.slice(0);
            c.encryptBlock(h, 0), u[l - 1] = u[l - 1] + 1 | 0;
            for (var f = 0; f < l; f++)
              o[a + f] ^= h[f];
          }
        });
        return n.Decryptor = i, n;
      }(), r.mode.CTR;
    });
  }(Qs)), Cr;
}
var Sr = {}, ea = {
  get exports() {
    return Sr;
  },
  set exports(e) {
    Sr = e;
  }
}, cn;
function ta() {
  return cn || (cn = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Ce());
    })(re, function(r) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return r.mode.CTRGladman = function() {
        var n = r.lib.BlockCipherMode.extend();
        function i(c) {
          if ((c >> 24 & 255) === 255) {
            var l = c >> 16 & 255, s = c >> 8 & 255, u = c & 255;
            l === 255 ? (l = 0, s === 255 ? (s = 0, u === 255 ? u = 0 : ++u) : ++s) : ++l, c = 0, c += l << 16, c += s << 8, c += u;
          } else
            c += 1 << 24;
          return c;
        }
        function o(c) {
          return (c[0] = i(c[0])) === 0 && (c[1] = i(c[1])), c;
        }
        var a = n.Encryptor = n.extend({
          processBlock: function(c, l) {
            var s = this._cipher, u = s.blockSize, h = this._iv, f = this._counter;
            h && (f = this._counter = h.slice(0), this._iv = void 0), o(f);
            var p = f.slice(0);
            s.encryptBlock(p, 0);
            for (var g = 0; g < u; g++)
              c[l + g] ^= p[g];
          }
        });
        return n.Decryptor = a, n;
      }(), r.mode.CTRGladman;
    });
  }(ea)), Sr;
}
var Br = {}, ra = {
  get exports() {
    return Br;
  },
  set exports(e) {
    Br = e;
  }
}, fn;
function na() {
  return fn || (fn = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Ce());
    })(re, function(r) {
      return r.mode.OFB = function() {
        var n = r.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(o, a) {
            var c = this._cipher, l = c.blockSize, s = this._iv, u = this._keystream;
            s && (u = this._keystream = s.slice(0), this._iv = void 0), c.encryptBlock(u, 0);
            for (var h = 0; h < l; h++)
              o[a + h] ^= u[h];
          }
        });
        return n.Decryptor = i, n;
      }(), r.mode.OFB;
    });
  }(ra)), Br;
}
var kr = {}, ia = {
  get exports() {
    return kr;
  },
  set exports(e) {
    kr = e;
  }
}, un;
function Zn() {
  return un || (un = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Ce());
    })(re, function(r) {
      return r.mode.ECB = function() {
        var n = r.lib.BlockCipherMode.extend();
        return n.Encryptor = n.extend({
          processBlock: function(i, o) {
            this._cipher.encryptBlock(i, o);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(i, o) {
            this._cipher.decryptBlock(i, o);
          }
        }), n;
      }(), r.mode.ECB;
    });
  }(ia)), kr;
}
var Ar = {}, oa = {
  get exports() {
    return Ar;
  },
  set exports(e) {
    Ar = e;
  }
}, ln;
function sa() {
  return ln || (ln = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Ce());
    })(re, function(r) {
      return r.pad.AnsiX923 = {
        pad: function(n, i) {
          var o = n.sigBytes, a = i * 4, c = a - o % a, l = o + c - 1;
          n.clamp(), n.words[l >>> 2] |= c << 24 - l % 4 * 8, n.sigBytes += c;
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, r.pad.Ansix923;
    });
  }(oa)), Ar;
}
var Rr = {}, aa = {
  get exports() {
    return Rr;
  },
  set exports(e) {
    Rr = e;
  }
}, hn;
function ca() {
  return hn || (hn = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Ce());
    })(re, function(r) {
      return r.pad.Iso10126 = {
        pad: function(n, i) {
          var o = i * 4, a = o - n.sigBytes % o;
          n.concat(r.lib.WordArray.random(a - 1)).concat(r.lib.WordArray.create([a << 24], 1));
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, r.pad.Iso10126;
    });
  }(aa)), Rr;
}
var Nr = {}, fa = {
  get exports() {
    return Nr;
  },
  set exports(e) {
    Nr = e;
  }
}, dn;
function ua() {
  return dn || (dn = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Ce());
    })(re, function(r) {
      return r.pad.Iso97971 = {
        pad: function(n, i) {
          n.concat(r.lib.WordArray.create([2147483648], 1)), r.pad.ZeroPadding.pad(n, i);
        },
        unpad: function(n) {
          r.pad.ZeroPadding.unpad(n), n.sigBytes--;
        }
      }, r.pad.Iso97971;
    });
  }(fa)), Nr;
}
var Dr = {}, la = {
  get exports() {
    return Dr;
  },
  set exports(e) {
    Dr = e;
  }
}, vn;
function ha() {
  return vn || (vn = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Ce());
    })(re, function(r) {
      return r.pad.ZeroPadding = {
        pad: function(n, i) {
          var o = i * 4;
          n.clamp(), n.sigBytes += o - (n.sigBytes % o || o);
        },
        unpad: function(n) {
          for (var i = n.words, o = n.sigBytes - 1, o = n.sigBytes - 1; o >= 0; o--)
            if (i[o >>> 2] >>> 24 - o % 4 * 8 & 255) {
              n.sigBytes = o + 1;
              break;
            }
        }
      }, r.pad.ZeroPadding;
    });
  }(la)), Dr;
}
var Tr = {}, da = {
  get exports() {
    return Tr;
  },
  set exports(e) {
    Tr = e;
  }
}, pn;
function va() {
  return pn || (pn = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Ce());
    })(re, function(r) {
      return r.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, r.pad.NoPadding;
    });
  }(da)), Tr;
}
var Or = {}, pa = {
  get exports() {
    return Or;
  },
  set exports(e) {
    Or = e;
  }
}, xn;
function xa() {
  return xn || (xn = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Ce());
    })(re, function(r) {
      return function(n) {
        var i = r, o = i.lib, a = o.CipherParams, c = i.enc, l = c.Hex, s = i.format;
        s.Hex = {
          /**
           * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The hexadecimally encoded string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
           */
          stringify: function(u) {
            return u.ciphertext.toString(l);
          },
          /**
           * Converts a hexadecimally encoded ciphertext string to a cipher params object.
           *
           * @param {string} input The hexadecimally encoded string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
           */
          parse: function(u) {
            var h = l.parse(u);
            return a.create({ ciphertext: h });
          }
        };
      }(), r.format.Hex;
    });
  }(pa)), Or;
}
var u0 = {}, ba = {
  get exports() {
    return u0;
  },
  set exports(e) {
    u0 = e;
  }
};
(function(e, t) {
  (function(r, n, i) {
    e.exports = n(ce(), bt(), gt(), mt(), Ce());
  })(re, function(r) {
    return function() {
      var n = r, i = n.lib, o = i.BlockCipher, a = n.algo, c = [], l = [], s = [], u = [], h = [], f = [], p = [], g = [], _ = [], S = [];
      (function() {
        for (var d = [], x = 0; x < 256; x++)
          x < 128 ? d[x] = x << 1 : d[x] = x << 1 ^ 283;
        for (var m = 0, C = 0, x = 0; x < 256; x++) {
          var A = C ^ C << 1 ^ C << 2 ^ C << 3 ^ C << 4;
          A = A >>> 8 ^ A & 255 ^ 99, c[m] = A, l[A] = m;
          var T = d[m], I = d[T], E = d[I], w = d[A] * 257 ^ A * 16843008;
          s[m] = w << 24 | w >>> 8, u[m] = w << 16 | w >>> 16, h[m] = w << 8 | w >>> 24, f[m] = w;
          var w = E * 16843009 ^ I * 65537 ^ T * 257 ^ m * 16843008;
          p[A] = w << 24 | w >>> 8, g[A] = w << 16 | w >>> 16, _[A] = w << 8 | w >>> 24, S[A] = w, m ? (m = T ^ d[d[d[E ^ T]]], C ^= d[d[C]]) : m = C = 1;
        }
      })();
      var O = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], y = a.AES = o.extend({
        _doReset: function() {
          var d;
          if (!(this._nRounds && this._keyPriorReset === this._key)) {
            for (var x = this._keyPriorReset = this._key, m = x.words, C = x.sigBytes / 4, A = this._nRounds = C + 6, T = (A + 1) * 4, I = this._keySchedule = [], E = 0; E < T; E++)
              E < C ? I[E] = m[E] : (d = I[E - 1], E % C ? C > 6 && E % C == 4 && (d = c[d >>> 24] << 24 | c[d >>> 16 & 255] << 16 | c[d >>> 8 & 255] << 8 | c[d & 255]) : (d = d << 8 | d >>> 24, d = c[d >>> 24] << 24 | c[d >>> 16 & 255] << 16 | c[d >>> 8 & 255] << 8 | c[d & 255], d ^= O[E / C | 0] << 24), I[E] = I[E - C] ^ d);
            for (var w = this._invKeySchedule = [], k = 0; k < T; k++) {
              var E = T - k;
              if (k % 4)
                var d = I[E];
              else
                var d = I[E - 4];
              k < 4 || E <= 4 ? w[k] = d : w[k] = p[c[d >>> 24]] ^ g[c[d >>> 16 & 255]] ^ _[c[d >>> 8 & 255]] ^ S[c[d & 255]];
            }
          }
        },
        encryptBlock: function(d, x) {
          this._doCryptBlock(d, x, this._keySchedule, s, u, h, f, c);
        },
        decryptBlock: function(d, x) {
          var m = d[x + 1];
          d[x + 1] = d[x + 3], d[x + 3] = m, this._doCryptBlock(d, x, this._invKeySchedule, p, g, _, S, l);
          var m = d[x + 1];
          d[x + 1] = d[x + 3], d[x + 3] = m;
        },
        _doCryptBlock: function(d, x, m, C, A, T, I, E) {
          for (var w = this._nRounds, k = d[x] ^ m[0], N = d[x + 1] ^ m[1], M = d[x + 2] ^ m[2], F = d[x + 3] ^ m[3], P = 4, $ = 1; $ < w; $++) {
            var X = C[k >>> 24] ^ A[N >>> 16 & 255] ^ T[M >>> 8 & 255] ^ I[F & 255] ^ m[P++], j = C[N >>> 24] ^ A[M >>> 16 & 255] ^ T[F >>> 8 & 255] ^ I[k & 255] ^ m[P++], J = C[M >>> 24] ^ A[F >>> 16 & 255] ^ T[k >>> 8 & 255] ^ I[N & 255] ^ m[P++], H = C[F >>> 24] ^ A[k >>> 16 & 255] ^ T[N >>> 8 & 255] ^ I[M & 255] ^ m[P++];
            k = X, N = j, M = J, F = H;
          }
          var X = (E[k >>> 24] << 24 | E[N >>> 16 & 255] << 16 | E[M >>> 8 & 255] << 8 | E[F & 255]) ^ m[P++], j = (E[N >>> 24] << 24 | E[M >>> 16 & 255] << 16 | E[F >>> 8 & 255] << 8 | E[k & 255]) ^ m[P++], J = (E[M >>> 24] << 24 | E[F >>> 16 & 255] << 16 | E[k >>> 8 & 255] << 8 | E[N & 255]) ^ m[P++], H = (E[F >>> 24] << 24 | E[k >>> 16 & 255] << 16 | E[N >>> 8 & 255] << 8 | E[M & 255]) ^ m[P++];
          d[x] = X, d[x + 1] = j, d[x + 2] = J, d[x + 3] = H;
        },
        keySize: 256 / 32
      });
      n.AES = o._createHelper(y);
    }(), r.AES;
  });
})(ba);
var Lr = {}, ga = {
  get exports() {
    return Lr;
  },
  set exports(e) {
    Lr = e;
  }
}, bn;
function ma() {
  return bn || (bn = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), bt(), gt(), mt(), Ce());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, a = i.BlockCipher, c = n.algo, l = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ], s = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ], u = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], h = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ], f = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], p = c.DES = a.extend({
          _doReset: function() {
            for (var O = this._key, y = O.words, d = [], x = 0; x < 56; x++) {
              var m = l[x] - 1;
              d[x] = y[m >>> 5] >>> 31 - m % 32 & 1;
            }
            for (var C = this._subKeys = [], A = 0; A < 16; A++) {
              for (var T = C[A] = [], I = u[A], x = 0; x < 24; x++)
                T[x / 6 | 0] |= d[(s[x] - 1 + I) % 28] << 31 - x % 6, T[4 + (x / 6 | 0)] |= d[28 + (s[x + 24] - 1 + I) % 28] << 31 - x % 6;
              T[0] = T[0] << 1 | T[0] >>> 31;
              for (var x = 1; x < 7; x++)
                T[x] = T[x] >>> (x - 1) * 4 + 3;
              T[7] = T[7] << 5 | T[7] >>> 27;
            }
            for (var E = this._invSubKeys = [], x = 0; x < 16; x++)
              E[x] = C[15 - x];
          },
          encryptBlock: function(O, y) {
            this._doCryptBlock(O, y, this._subKeys);
          },
          decryptBlock: function(O, y) {
            this._doCryptBlock(O, y, this._invSubKeys);
          },
          _doCryptBlock: function(O, y, d) {
            this._lBlock = O[y], this._rBlock = O[y + 1], g.call(this, 4, 252645135), g.call(this, 16, 65535), _.call(this, 2, 858993459), _.call(this, 8, 16711935), g.call(this, 1, 1431655765);
            for (var x = 0; x < 16; x++) {
              for (var m = d[x], C = this._lBlock, A = this._rBlock, T = 0, I = 0; I < 8; I++)
                T |= h[I][((A ^ m[I]) & f[I]) >>> 0];
              this._lBlock = A, this._rBlock = C ^ T;
            }
            var E = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = E, g.call(this, 1, 1431655765), _.call(this, 8, 16711935), _.call(this, 2, 858993459), g.call(this, 16, 65535), g.call(this, 4, 252645135), O[y] = this._lBlock, O[y + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function g(O, y) {
          var d = (this._lBlock >>> O ^ this._rBlock) & y;
          this._rBlock ^= d, this._lBlock ^= d << O;
        }
        function _(O, y) {
          var d = (this._rBlock >>> O ^ this._lBlock) & y;
          this._lBlock ^= d, this._rBlock ^= d << O;
        }
        n.DES = a._createHelper(p);
        var S = c.TripleDES = a.extend({
          _doReset: function() {
            var O = this._key, y = O.words;
            if (y.length !== 2 && y.length !== 4 && y.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var d = y.slice(0, 2), x = y.length < 4 ? y.slice(0, 2) : y.slice(2, 4), m = y.length < 6 ? y.slice(0, 2) : y.slice(4, 6);
            this._des1 = p.createEncryptor(o.create(d)), this._des2 = p.createEncryptor(o.create(x)), this._des3 = p.createEncryptor(o.create(m));
          },
          encryptBlock: function(O, y) {
            this._des1.encryptBlock(O, y), this._des2.decryptBlock(O, y), this._des3.encryptBlock(O, y);
          },
          decryptBlock: function(O, y) {
            this._des3.decryptBlock(O, y), this._des2.encryptBlock(O, y), this._des1.decryptBlock(O, y);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        n.TripleDES = a._createHelper(S);
      }(), r.TripleDES;
    });
  }(ga)), Lr;
}
var Ir = {}, ya = {
  get exports() {
    return Ir;
  },
  set exports(e) {
    Ir = e;
  }
}, gn;
function _a() {
  return gn || (gn = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), bt(), gt(), mt(), Ce());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.StreamCipher, a = n.algo, c = a.RC4 = o.extend({
          _doReset: function() {
            for (var u = this._key, h = u.words, f = u.sigBytes, p = this._S = [], g = 0; g < 256; g++)
              p[g] = g;
            for (var g = 0, _ = 0; g < 256; g++) {
              var S = g % f, O = h[S >>> 2] >>> 24 - S % 4 * 8 & 255;
              _ = (_ + p[g] + O) % 256;
              var y = p[g];
              p[g] = p[_], p[_] = y;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(u, h) {
            u[h] ^= l.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function l() {
          for (var u = this._S, h = this._i, f = this._j, p = 0, g = 0; g < 4; g++) {
            h = (h + 1) % 256, f = (f + u[h]) % 256;
            var _ = u[h];
            u[h] = u[f], u[f] = _, p |= u[(u[h] + u[f]) % 256] << 24 - g * 8;
          }
          return this._i = h, this._j = f, p;
        }
        n.RC4 = o._createHelper(c);
        var s = a.RC4Drop = c.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: c.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            c._doReset.call(this);
            for (var u = this.cfg.drop; u > 0; u--)
              l.call(this);
          }
        });
        n.RC4Drop = o._createHelper(s);
      }(), r.RC4;
    });
  }(ya)), Ir;
}
var Fr = {}, wa = {
  get exports() {
    return Fr;
  },
  set exports(e) {
    Fr = e;
  }
}, mn;
function Ea() {
  return mn || (mn = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), bt(), gt(), mt(), Ce());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.StreamCipher, a = n.algo, c = [], l = [], s = [], u = a.Rabbit = o.extend({
          _doReset: function() {
            for (var f = this._key.words, p = this.cfg.iv, g = 0; g < 4; g++)
              f[g] = (f[g] << 8 | f[g] >>> 24) & 16711935 | (f[g] << 24 | f[g] >>> 8) & 4278255360;
            var _ = this._X = [
              f[0],
              f[3] << 16 | f[2] >>> 16,
              f[1],
              f[0] << 16 | f[3] >>> 16,
              f[2],
              f[1] << 16 | f[0] >>> 16,
              f[3],
              f[2] << 16 | f[1] >>> 16
            ], S = this._C = [
              f[2] << 16 | f[2] >>> 16,
              f[0] & 4294901760 | f[1] & 65535,
              f[3] << 16 | f[3] >>> 16,
              f[1] & 4294901760 | f[2] & 65535,
              f[0] << 16 | f[0] >>> 16,
              f[2] & 4294901760 | f[3] & 65535,
              f[1] << 16 | f[1] >>> 16,
              f[3] & 4294901760 | f[0] & 65535
            ];
            this._b = 0;
            for (var g = 0; g < 4; g++)
              h.call(this);
            for (var g = 0; g < 8; g++)
              S[g] ^= _[g + 4 & 7];
            if (p) {
              var O = p.words, y = O[0], d = O[1], x = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, m = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, C = x >>> 16 | m & 4294901760, A = m << 16 | x & 65535;
              S[0] ^= x, S[1] ^= C, S[2] ^= m, S[3] ^= A, S[4] ^= x, S[5] ^= C, S[6] ^= m, S[7] ^= A;
              for (var g = 0; g < 4; g++)
                h.call(this);
            }
          },
          _doProcessBlock: function(f, p) {
            var g = this._X;
            h.call(this), c[0] = g[0] ^ g[5] >>> 16 ^ g[3] << 16, c[1] = g[2] ^ g[7] >>> 16 ^ g[5] << 16, c[2] = g[4] ^ g[1] >>> 16 ^ g[7] << 16, c[3] = g[6] ^ g[3] >>> 16 ^ g[1] << 16;
            for (var _ = 0; _ < 4; _++)
              c[_] = (c[_] << 8 | c[_] >>> 24) & 16711935 | (c[_] << 24 | c[_] >>> 8) & 4278255360, f[p + _] ^= c[_];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function h() {
          for (var f = this._X, p = this._C, g = 0; g < 8; g++)
            l[g] = p[g];
          p[0] = p[0] + 1295307597 + this._b | 0, p[1] = p[1] + 3545052371 + (p[0] >>> 0 < l[0] >>> 0 ? 1 : 0) | 0, p[2] = p[2] + 886263092 + (p[1] >>> 0 < l[1] >>> 0 ? 1 : 0) | 0, p[3] = p[3] + 1295307597 + (p[2] >>> 0 < l[2] >>> 0 ? 1 : 0) | 0, p[4] = p[4] + 3545052371 + (p[3] >>> 0 < l[3] >>> 0 ? 1 : 0) | 0, p[5] = p[5] + 886263092 + (p[4] >>> 0 < l[4] >>> 0 ? 1 : 0) | 0, p[6] = p[6] + 1295307597 + (p[5] >>> 0 < l[5] >>> 0 ? 1 : 0) | 0, p[7] = p[7] + 3545052371 + (p[6] >>> 0 < l[6] >>> 0 ? 1 : 0) | 0, this._b = p[7] >>> 0 < l[7] >>> 0 ? 1 : 0;
          for (var g = 0; g < 8; g++) {
            var _ = f[g] + p[g], S = _ & 65535, O = _ >>> 16, y = ((S * S >>> 17) + S * O >>> 15) + O * O, d = ((_ & 4294901760) * _ | 0) + ((_ & 65535) * _ | 0);
            s[g] = y ^ d;
          }
          f[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, f[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, f[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, f[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, f[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, f[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, f[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, f[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0;
        }
        n.Rabbit = o._createHelper(u);
      }(), r.Rabbit;
    });
  }(wa)), Fr;
}
var Pr = {}, Ca = {
  get exports() {
    return Pr;
  },
  set exports(e) {
    Pr = e;
  }
}, yn;
function Sa() {
  return yn || (yn = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), bt(), gt(), mt(), Ce());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.StreamCipher, a = n.algo, c = [], l = [], s = [], u = a.RabbitLegacy = o.extend({
          _doReset: function() {
            var f = this._key.words, p = this.cfg.iv, g = this._X = [
              f[0],
              f[3] << 16 | f[2] >>> 16,
              f[1],
              f[0] << 16 | f[3] >>> 16,
              f[2],
              f[1] << 16 | f[0] >>> 16,
              f[3],
              f[2] << 16 | f[1] >>> 16
            ], _ = this._C = [
              f[2] << 16 | f[2] >>> 16,
              f[0] & 4294901760 | f[1] & 65535,
              f[3] << 16 | f[3] >>> 16,
              f[1] & 4294901760 | f[2] & 65535,
              f[0] << 16 | f[0] >>> 16,
              f[2] & 4294901760 | f[3] & 65535,
              f[1] << 16 | f[1] >>> 16,
              f[3] & 4294901760 | f[0] & 65535
            ];
            this._b = 0;
            for (var S = 0; S < 4; S++)
              h.call(this);
            for (var S = 0; S < 8; S++)
              _[S] ^= g[S + 4 & 7];
            if (p) {
              var O = p.words, y = O[0], d = O[1], x = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, m = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, C = x >>> 16 | m & 4294901760, A = m << 16 | x & 65535;
              _[0] ^= x, _[1] ^= C, _[2] ^= m, _[3] ^= A, _[4] ^= x, _[5] ^= C, _[6] ^= m, _[7] ^= A;
              for (var S = 0; S < 4; S++)
                h.call(this);
            }
          },
          _doProcessBlock: function(f, p) {
            var g = this._X;
            h.call(this), c[0] = g[0] ^ g[5] >>> 16 ^ g[3] << 16, c[1] = g[2] ^ g[7] >>> 16 ^ g[5] << 16, c[2] = g[4] ^ g[1] >>> 16 ^ g[7] << 16, c[3] = g[6] ^ g[3] >>> 16 ^ g[1] << 16;
            for (var _ = 0; _ < 4; _++)
              c[_] = (c[_] << 8 | c[_] >>> 24) & 16711935 | (c[_] << 24 | c[_] >>> 8) & 4278255360, f[p + _] ^= c[_];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function h() {
          for (var f = this._X, p = this._C, g = 0; g < 8; g++)
            l[g] = p[g];
          p[0] = p[0] + 1295307597 + this._b | 0, p[1] = p[1] + 3545052371 + (p[0] >>> 0 < l[0] >>> 0 ? 1 : 0) | 0, p[2] = p[2] + 886263092 + (p[1] >>> 0 < l[1] >>> 0 ? 1 : 0) | 0, p[3] = p[3] + 1295307597 + (p[2] >>> 0 < l[2] >>> 0 ? 1 : 0) | 0, p[4] = p[4] + 3545052371 + (p[3] >>> 0 < l[3] >>> 0 ? 1 : 0) | 0, p[5] = p[5] + 886263092 + (p[4] >>> 0 < l[4] >>> 0 ? 1 : 0) | 0, p[6] = p[6] + 1295307597 + (p[5] >>> 0 < l[5] >>> 0 ? 1 : 0) | 0, p[7] = p[7] + 3545052371 + (p[6] >>> 0 < l[6] >>> 0 ? 1 : 0) | 0, this._b = p[7] >>> 0 < l[7] >>> 0 ? 1 : 0;
          for (var g = 0; g < 8; g++) {
            var _ = f[g] + p[g], S = _ & 65535, O = _ >>> 16, y = ((S * S >>> 17) + S * O >>> 15) + O * O, d = ((_ & 4294901760) * _ | 0) + ((_ & 65535) * _ | 0);
            s[g] = y ^ d;
          }
          f[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, f[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, f[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, f[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, f[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, f[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, f[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, f[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0;
        }
        n.RabbitLegacy = o._createHelper(u);
      }(), r.RabbitLegacy;
    });
  }(Ca)), Pr;
}
(function(e, t) {
  (function(r, n, i) {
    e.exports = n(ce(), Ur(), ks(), Rs(), bt(), Ts(), gt(), S0(), Yn(), Ps(), Kn(), zs(), qs(), Ws(), B0(), Ks(), mt(), Ce(), js(), Js(), ta(), na(), Zn(), sa(), ca(), ua(), ha(), va(), xa(), u0, ma(), _a(), Ea(), Sa());
  })(re, function(r) {
    return r;
  });
})(ys);
var _n = {}, Ba = {
  get exports() {
    return _n;
  },
  set exports(e) {
    _n = e;
  }
};
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(re, function() {
    var r = 1e3, n = 6e4, i = 36e5, o = "millisecond", a = "second", c = "minute", l = "hour", s = "day", u = "week", h = "month", f = "quarter", p = "year", g = "date", _ = "Invalid Date", S = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, O = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
      var M = ["th", "st", "nd", "rd"], F = N % 100;
      return "[" + N + (M[(F - 20) % 10] || M[F] || M[0]) + "]";
    } }, d = function(N, M, F) {
      var P = String(N);
      return !P || P.length >= M ? N : "" + Array(M + 1 - P.length).join(F) + N;
    }, x = { s: d, z: function(N) {
      var M = -N.utcOffset(), F = Math.abs(M), P = Math.floor(F / 60), $ = F % 60;
      return (M <= 0 ? "+" : "-") + d(P, 2, "0") + ":" + d($, 2, "0");
    }, m: function N(M, F) {
      if (M.date() < F.date())
        return -N(F, M);
      var P = 12 * (F.year() - M.year()) + (F.month() - M.month()), $ = M.clone().add(P, h), X = F - $ < 0, j = M.clone().add(P + (X ? -1 : 1), h);
      return +(-(P + (F - $) / (X ? $ - j : j - $)) || 0);
    }, a: function(N) {
      return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
    }, p: function(N) {
      return { M: h, y: p, w: u, d: s, D: g, h: l, m: c, s: a, ms: o, Q: f }[N] || String(N || "").toLowerCase().replace(/s$/, "");
    }, u: function(N) {
      return N === void 0;
    } }, m = "en", C = {};
    C[m] = y;
    var A = function(N) {
      return N instanceof w;
    }, T = function N(M, F, P) {
      var $;
      if (!M)
        return m;
      if (typeof M == "string") {
        var X = M.toLowerCase();
        C[X] && ($ = X), F && (C[X] = F, $ = X);
        var j = M.split("-");
        if (!$ && j.length > 1)
          return N(j[0]);
      } else {
        var J = M.name;
        C[J] = M, $ = J;
      }
      return !P && $ && (m = $), $ || !P && m;
    }, I = function(N, M) {
      if (A(N))
        return N.clone();
      var F = typeof M == "object" ? M : {};
      return F.date = N, F.args = arguments, new w(F);
    }, E = x;
    E.l = T, E.i = A, E.w = function(N, M) {
      return I(N, { locale: M.$L, utc: M.$u, x: M.$x, $offset: M.$offset });
    };
    var w = function() {
      function N(F) {
        this.$L = T(F.locale, null, !0), this.parse(F);
      }
      var M = N.prototype;
      return M.parse = function(F) {
        this.$d = function(P) {
          var $ = P.date, X = P.utc;
          if ($ === null)
            return /* @__PURE__ */ new Date(NaN);
          if (E.u($))
            return /* @__PURE__ */ new Date();
          if ($ instanceof Date)
            return new Date($);
          if (typeof $ == "string" && !/Z$/i.test($)) {
            var j = $.match(S);
            if (j) {
              var J = j[2] - 1 || 0, H = (j[7] || "0").substring(0, 3);
              return X ? new Date(Date.UTC(j[1], J, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, H)) : new Date(j[1], J, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, H);
            }
          }
          return new Date($);
        }(F), this.$x = F.x || {}, this.init();
      }, M.init = function() {
        var F = this.$d;
        this.$y = F.getFullYear(), this.$M = F.getMonth(), this.$D = F.getDate(), this.$W = F.getDay(), this.$H = F.getHours(), this.$m = F.getMinutes(), this.$s = F.getSeconds(), this.$ms = F.getMilliseconds();
      }, M.$utils = function() {
        return E;
      }, M.isValid = function() {
        return this.$d.toString() !== _;
      }, M.isSame = function(F, P) {
        var $ = I(F);
        return this.startOf(P) <= $ && $ <= this.endOf(P);
      }, M.isAfter = function(F, P) {
        return I(F) < this.startOf(P);
      }, M.isBefore = function(F, P) {
        return this.endOf(P) < I(F);
      }, M.$g = function(F, P, $) {
        return E.u(F) ? this[P] : this.set($, F);
      }, M.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, M.valueOf = function() {
        return this.$d.getTime();
      }, M.startOf = function(F, P) {
        var $ = this, X = !!E.u(P) || P, j = E.p(F), J = function(ne, ge) {
          var Se = E.w($.$u ? Date.UTC($.$y, ge, ne) : new Date($.$y, ge, ne), $);
          return X ? Se : Se.endOf(s);
        }, H = function(ne, ge) {
          return E.w($.toDate()[ne].apply($.toDate("s"), (X ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ge)), $);
        }, z = this.$W, U = this.$M, W = this.$D, ae = "set" + (this.$u ? "UTC" : "");
        switch (j) {
          case p:
            return X ? J(1, 0) : J(31, 11);
          case h:
            return X ? J(1, U) : J(0, U + 1);
          case u:
            var le = this.$locale().weekStart || 0, be = (z < le ? z + 7 : z) - le;
            return J(X ? W - be : W + (6 - be), U);
          case s:
          case g:
            return H(ae + "Hours", 0);
          case l:
            return H(ae + "Minutes", 1);
          case c:
            return H(ae + "Seconds", 2);
          case a:
            return H(ae + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, M.endOf = function(F) {
        return this.startOf(F, !1);
      }, M.$set = function(F, P) {
        var $, X = E.p(F), j = "set" + (this.$u ? "UTC" : ""), J = ($ = {}, $[s] = j + "Date", $[g] = j + "Date", $[h] = j + "Month", $[p] = j + "FullYear", $[l] = j + "Hours", $[c] = j + "Minutes", $[a] = j + "Seconds", $[o] = j + "Milliseconds", $)[X], H = X === s ? this.$D + (P - this.$W) : P;
        if (X === h || X === p) {
          var z = this.clone().set(g, 1);
          z.$d[J](H), z.init(), this.$d = z.set(g, Math.min(this.$D, z.daysInMonth())).$d;
        } else
          J && this.$d[J](H);
        return this.init(), this;
      }, M.set = function(F, P) {
        return this.clone().$set(F, P);
      }, M.get = function(F) {
        return this[E.p(F)]();
      }, M.add = function(F, P) {
        var $, X = this;
        F = Number(F);
        var j = E.p(P), J = function(U) {
          var W = I(X);
          return E.w(W.date(W.date() + Math.round(U * F)), X);
        };
        if (j === h)
          return this.set(h, this.$M + F);
        if (j === p)
          return this.set(p, this.$y + F);
        if (j === s)
          return J(1);
        if (j === u)
          return J(7);
        var H = ($ = {}, $[c] = n, $[l] = i, $[a] = r, $)[j] || 1, z = this.$d.getTime() + F * H;
        return E.w(z, this);
      }, M.subtract = function(F, P) {
        return this.add(-1 * F, P);
      }, M.format = function(F) {
        var P = this, $ = this.$locale();
        if (!this.isValid())
          return $.invalidDate || _;
        var X = F || "YYYY-MM-DDTHH:mm:ssZ", j = E.z(this), J = this.$H, H = this.$m, z = this.$M, U = $.weekdays, W = $.months, ae = function(ge, Se, je, Pe) {
          return ge && (ge[Se] || ge(P, X)) || je[Se].slice(0, Pe);
        }, le = function(ge) {
          return E.s(J % 12 || 12, ge, "0");
        }, be = $.meridiem || function(ge, Se, je) {
          var Pe = ge < 12 ? "AM" : "PM";
          return je ? Pe.toLowerCase() : Pe;
        }, ne = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: z + 1, MM: E.s(z + 1, 2, "0"), MMM: ae($.monthsShort, z, W, 3), MMMM: ae(W, z), D: this.$D, DD: E.s(this.$D, 2, "0"), d: String(this.$W), dd: ae($.weekdaysMin, this.$W, U, 2), ddd: ae($.weekdaysShort, this.$W, U, 3), dddd: U[this.$W], H: String(J), HH: E.s(J, 2, "0"), h: le(1), hh: le(2), a: be(J, H, !0), A: be(J, H, !1), m: String(H), mm: E.s(H, 2, "0"), s: String(this.$s), ss: E.s(this.$s, 2, "0"), SSS: E.s(this.$ms, 3, "0"), Z: j };
        return X.replace(O, function(ge, Se) {
          return Se || ne[ge] || j.replace(":", "");
        });
      }, M.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, M.diff = function(F, P, $) {
        var X, j = E.p(P), J = I(F), H = (J.utcOffset() - this.utcOffset()) * n, z = this - J, U = E.m(this, J);
        return U = (X = {}, X[p] = U / 12, X[h] = U, X[f] = U / 3, X[u] = (z - H) / 6048e5, X[s] = (z - H) / 864e5, X[l] = z / i, X[c] = z / n, X[a] = z / r, X)[j] || z, $ ? U : E.a(U);
      }, M.daysInMonth = function() {
        return this.endOf(h).$D;
      }, M.$locale = function() {
        return C[this.$L];
      }, M.locale = function(F, P) {
        if (!F)
          return this.$L;
        var $ = this.clone(), X = T(F, P, !0);
        return X && ($.$L = X), $;
      }, M.clone = function() {
        return E.w(this.$d, this);
      }, M.toDate = function() {
        return new Date(this.valueOf());
      }, M.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, M.toISOString = function() {
        return this.$d.toISOString();
      }, M.toString = function() {
        return this.$d.toUTCString();
      }, N;
    }(), k = w.prototype;
    return I.prototype = k, [["$ms", o], ["$s", a], ["$m", c], ["$H", l], ["$W", s], ["$M", h], ["$y", p], ["$D", g]].forEach(function(N) {
      k[N[1]] = function(M) {
        return this.$g(M, N[0], N[1]);
      };
    }), I.extend = function(N, M) {
      return N.$i || (N(M, w, I), N.$i = !0), I;
    }, I.locale = T, I.isDayjs = A, I.unix = function(N) {
      return I(1e3 * N);
    }, I.en = C[m], I.Ls = C, I.p = {}, I;
  });
})(Ba);
var Gn = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, r) {
    var n = -1;
    return t.some(function(i, o) {
      return i[0] === r ? (n = o, !0) : !1;
    }), n;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(r) {
        var n = e(this.__entries__, r), i = this.__entries__[n];
        return i && i[1];
      }, t.prototype.set = function(r, n) {
        var i = e(this.__entries__, r);
        ~i ? this.__entries__[i][1] = n : this.__entries__.push([r, n]);
      }, t.prototype.delete = function(r) {
        var n = this.__entries__, i = e(n, r);
        ~i && n.splice(i, 1);
      }, t.prototype.has = function(r) {
        return !!~e(this.__entries__, r);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(r, n) {
        n === void 0 && (n = null);
        for (var i = 0, o = this.__entries__; i < o.length; i++) {
          var a = o[i];
          r.call(n, a[1], a[0]);
        }
      }, t;
    }()
  );
}(), l0 = typeof window < "u" && typeof document < "u" && window.document === document, Mr = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), ka = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Mr) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Aa = 2;
function Ra(e, t) {
  var r = !1, n = !1, i = 0;
  function o() {
    r && (r = !1, e()), n && c();
  }
  function a() {
    ka(o);
  }
  function c() {
    var l = Date.now();
    if (r) {
      if (l - i < Aa)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(a, t);
    i = l;
  }
  return c;
}
var Na = 20, Da = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Ta = typeof MutationObserver < "u", Oa = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Ra(this.refresh.bind(this), Na);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var r = this.observers_, n = r.indexOf(t);
      ~n && r.splice(n, 1), !r.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(r) {
        return r.gatherActive(), r.hasActive();
      });
      return t.forEach(function(r) {
        return r.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !l0 || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Ta ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !l0 || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, i = Da.some(function(o) {
        return !!~n.indexOf(o);
      });
      i && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Xn = function(e, t) {
  for (var r = 0, n = Object.keys(t); r < n.length; r++) {
    var i = n[r];
    Object.defineProperty(e, i, {
      value: t[i],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, St = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Mr;
}, jn = Wr(0, 0, 0, 0);
function Hr(e) {
  return parseFloat(e) || 0;
}
function wn(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, i) {
    var o = e["border-" + i + "-width"];
    return n + Hr(o);
  }, 0);
}
function La(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, i = t; n < i.length; n++) {
    var o = i[n], a = e["padding-" + o];
    r[o] = Hr(a);
  }
  return r;
}
function Ia(e) {
  var t = e.getBBox();
  return Wr(0, 0, t.width, t.height);
}
function Fa(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return jn;
  var n = St(e).getComputedStyle(e), i = La(n), o = i.left + i.right, a = i.top + i.bottom, c = Hr(n.width), l = Hr(n.height);
  if (n.boxSizing === "border-box" && (Math.round(c + o) !== t && (c -= wn(n, "left", "right") + o), Math.round(l + a) !== r && (l -= wn(n, "top", "bottom") + a)), !Ma(e)) {
    var s = Math.round(c + o) - t, u = Math.round(l + a) - r;
    Math.abs(s) !== 1 && (c -= s), Math.abs(u) !== 1 && (l -= u);
  }
  return Wr(i.left, i.top, c, l);
}
var Pa = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof St(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof St(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Ma(e) {
  return e === St(e).document.documentElement;
}
function Ha(e) {
  return l0 ? Pa(e) ? Ia(e) : Fa(e) : jn;
}
function za(e) {
  var t = e.x, r = e.y, n = e.width, i = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(o.prototype);
  return Xn(a, {
    x: t,
    y: r,
    width: n,
    height: i,
    top: r,
    right: t + n,
    bottom: i + r,
    left: t
  }), a;
}
function Wr(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var $a = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Wr(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Ha(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), qa = (
  /** @class */
  function() {
    function e(t, r) {
      var n = za(r);
      Xn(this, { target: t, contentRect: n });
    }
    return e;
  }()
), Ua = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new Gn(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof St(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new $a(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof St(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) && (r.delete(t), r.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(r) {
        r.isActive() && t.activeObservations_.push(r);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, r = this.activeObservations_.map(function(n) {
          return new qa(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Qn = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Gn(), Jn = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = Oa.getInstance(), n = new Ua(t, r, this);
      Qn.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Jn.prototype[e] = function() {
    var t;
    return (t = Qn.get(this))[e].apply(t, arguments);
  };
});
(function() {
  return typeof Mr.ResizeObserver < "u" ? Mr.ResizeObserver : Jn;
})();
bt();
var En = {}, Wa = {
  get exports() {
    return En;
  },
  set exports(e) {
    En = e;
  }
};
(function(e, t) {
  (function(r, n) {
    e.exports = n(ce());
  })(re, function(r) {
    return r.enc.Utf8;
  });
})(Wa);
gt();
Zn();
var Cn = {}, Va = {
  get exports() {
    return Cn;
  },
  set exports(e) {
    Cn = e;
  }
};
(function(e, t) {
  (function(r, n, i) {
    e.exports = n(ce(), Ce());
  })(re, function(r) {
    return r.pad.Pkcs7;
  });
})(Va);
function Ya(e) {
  var t = [], r = "";
  for (r in e)
    t.push(r);
  return t;
}
function Sn(e) {
  return e = JSON.stringify(e), !(typeof e != "string" || !/^\{[\s\S]*\}$/.test(e));
}
function Ka(e) {
  return e instanceof Array;
}
function Za(e) {
  return Array.prototype.slice.call(e);
}
function zt() {
  if (!(this instanceof zt))
    return new zt();
}
zt.prototype = {
  get: function(e) {
    for (var t = e + "=", r = document.cookie.split(";"), n = 0; n < r.length; n++) {
      for (var i = r[n]; i.charAt(0) == " "; )
        i = i.substring(1, i.length);
      if (i.indexOf(t) == 0)
        return decodeURI(i.substring(t.length, i.length));
    }
    return !1;
  },
  set: function(e, t, r) {
    if (Sn(e))
      for (const n in e)
        this.set(n, e[n], t, r);
    else if (typeof e == "string") {
      const n = Sn(r) ? r : { expires: r }, i = n.path !== void 0 ? `;path=${n.path};path=/` : ";path=/", o = n.domain ? `;domain=${n.domain}` : "", a = n.secure ? ";secure" : "";
      let c = n.expires !== void 0 ? n.expires : "";
      typeof c == "string" && c !== "" ? c = new Date(c) : typeof c == "number" && (c = new Date(+/* @__PURE__ */ new Date() + 1e3 * 60 * 60 * 24 * c)), c !== "" && "toGMTString" in c && (c = `;expires=${c.toGMTString()}`);
      const l = n.sameSite ? `;SameSite=${n.sameSite}` : "";
      document.cookie = `${e}=${encodeURI(t) + c + i + o + a + l}`;
    }
  },
  remove: function(e) {
    e = Ka(e) ? e : Za(arguments);
    for (var t = 0, r = e.length; t < r; t++)
      this.set(e[t], "", -1);
    return e;
  },
  clear: function(e) {
    return e ? this.remove(e) : this.remove(Ya(this.all()));
  },
  all: function() {
    if (document.cookie === "")
      return {};
    for (var e = document.cookie.split("; "), t = {}, r = 0, n = e.length; r < n; r++) {
      var i = e[r].split("=");
      t[decodeURI(i[0])] = decodeURI(i[1]);
    }
    return t;
  }
};
for (const e in zt.prototype)
  zt.prototype[e];
var Bn = {}, Ga = {
  get exports() {
    return Bn;
  },
  set exports(e) {
    Bn = e;
  }
};
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(e, t) {
  (function(r) {
    e.exports = r();
  })(function() {
    return function r(n, i, o) {
      function a(s, u) {
        if (!i[s]) {
          if (!n[s]) {
            var h = typeof Mt == "function" && Mt;
            if (!u && h)
              return h(s, !0);
            if (c)
              return c(s, !0);
            var f = new Error("Cannot find module '" + s + "'");
            throw f.code = "MODULE_NOT_FOUND", f;
          }
          var p = i[s] = { exports: {} };
          n[s][0].call(p.exports, function(g) {
            var _ = n[s][1][g];
            return a(_ || g);
          }, p, p.exports, r, n, i, o);
        }
        return i[s].exports;
      }
      for (var c = typeof Mt == "function" && Mt, l = 0; l < o.length; l++)
        a(o[l]);
      return a;
    }({ 1: [function(r, n, i) {
      (function(o) {
        var a = o.MutationObserver || o.WebKitMutationObserver, c;
        if (a) {
          var l = 0, s = new a(g), u = o.document.createTextNode("");
          s.observe(u, {
            characterData: !0
          }), c = function() {
            u.data = l = ++l % 2;
          };
        } else if (!o.setImmediate && typeof o.MessageChannel < "u") {
          var h = new o.MessageChannel();
          h.port1.onmessage = g, c = function() {
            h.port2.postMessage(0);
          };
        } else
          "document" in o && "onreadystatechange" in o.document.createElement("script") ? c = function() {
            var S = o.document.createElement("script");
            S.onreadystatechange = function() {
              g(), S.onreadystatechange = null, S.parentNode.removeChild(S), S = null;
            }, o.document.documentElement.appendChild(S);
          } : c = function() {
            setTimeout(g, 0);
          };
        var f, p = [];
        function g() {
          f = !0;
          for (var S, O, y = p.length; y; ) {
            for (O = p, p = [], S = -1; ++S < y; )
              O[S]();
            y = p.length;
          }
          f = !1;
        }
        n.exports = _;
        function _(S) {
          p.push(S) === 1 && !f && c();
        }
      }).call(this, typeof re < "u" ? re : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(r, n, i) {
      var o = r(1);
      function a() {
      }
      var c = {}, l = ["REJECTED"], s = ["FULFILLED"], u = ["PENDING"];
      n.exports = h;
      function h(m) {
        if (typeof m != "function")
          throw new TypeError("resolver must be a function");
        this.state = u, this.queue = [], this.outcome = void 0, m !== a && _(this, m);
      }
      h.prototype.catch = function(m) {
        return this.then(null, m);
      }, h.prototype.then = function(m, C) {
        if (typeof m != "function" && this.state === s || typeof C != "function" && this.state === l)
          return this;
        var A = new this.constructor(a);
        if (this.state !== u) {
          var T = this.state === s ? m : C;
          p(A, T, this.outcome);
        } else
          this.queue.push(new f(A, m, C));
        return A;
      };
      function f(m, C, A) {
        this.promise = m, typeof C == "function" && (this.onFulfilled = C, this.callFulfilled = this.otherCallFulfilled), typeof A == "function" && (this.onRejected = A, this.callRejected = this.otherCallRejected);
      }
      f.prototype.callFulfilled = function(m) {
        c.resolve(this.promise, m);
      }, f.prototype.otherCallFulfilled = function(m) {
        p(this.promise, this.onFulfilled, m);
      }, f.prototype.callRejected = function(m) {
        c.reject(this.promise, m);
      }, f.prototype.otherCallRejected = function(m) {
        p(this.promise, this.onRejected, m);
      };
      function p(m, C, A) {
        o(function() {
          var T;
          try {
            T = C(A);
          } catch (I) {
            return c.reject(m, I);
          }
          T === m ? c.reject(m, new TypeError("Cannot resolve promise with itself")) : c.resolve(m, T);
        });
      }
      c.resolve = function(m, C) {
        var A = S(g, C);
        if (A.status === "error")
          return c.reject(m, A.value);
        var T = A.value;
        if (T)
          _(m, T);
        else {
          m.state = s, m.outcome = C;
          for (var I = -1, E = m.queue.length; ++I < E; )
            m.queue[I].callFulfilled(C);
        }
        return m;
      }, c.reject = function(m, C) {
        m.state = l, m.outcome = C;
        for (var A = -1, T = m.queue.length; ++A < T; )
          m.queue[A].callRejected(C);
        return m;
      };
      function g(m) {
        var C = m && m.then;
        if (m && (typeof m == "object" || typeof m == "function") && typeof C == "function")
          return function() {
            C.apply(m, arguments);
          };
      }
      function _(m, C) {
        var A = !1;
        function T(k) {
          A || (A = !0, c.reject(m, k));
        }
        function I(k) {
          A || (A = !0, c.resolve(m, k));
        }
        function E() {
          C(I, T);
        }
        var w = S(E);
        w.status === "error" && T(w.value);
      }
      function S(m, C) {
        var A = {};
        try {
          A.value = m(C), A.status = "success";
        } catch (T) {
          A.status = "error", A.value = T;
        }
        return A;
      }
      h.resolve = O;
      function O(m) {
        return m instanceof this ? m : c.resolve(new this(a), m);
      }
      h.reject = y;
      function y(m) {
        var C = new this(a);
        return c.reject(C, m);
      }
      h.all = d;
      function d(m) {
        var C = this;
        if (Object.prototype.toString.call(m) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var A = m.length, T = !1;
        if (!A)
          return this.resolve([]);
        for (var I = new Array(A), E = 0, w = -1, k = new this(a); ++w < A; )
          N(m[w], w);
        return k;
        function N(M, F) {
          C.resolve(M).then(P, function($) {
            T || (T = !0, c.reject(k, $));
          });
          function P($) {
            I[F] = $, ++E === A && !T && (T = !0, c.resolve(k, I));
          }
        }
      }
      h.race = x;
      function x(m) {
        var C = this;
        if (Object.prototype.toString.call(m) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var A = m.length, T = !1;
        if (!A)
          return this.resolve([]);
        for (var I = -1, E = new this(a); ++I < A; )
          w(m[I]);
        return E;
        function w(k) {
          C.resolve(k).then(function(N) {
            T || (T = !0, c.resolve(E, N));
          }, function(N) {
            T || (T = !0, c.reject(E, N));
          });
        }
      }
    }, { 1: 1 }], 3: [function(r, n, i) {
      (function(o) {
        typeof o.Promise != "function" && (o.Promise = r(2));
      }).call(this, typeof re < "u" ? re : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(r, n, i) {
      var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
        return typeof v;
      } : function(v) {
        return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
      };
      function a(v, B) {
        if (!(v instanceof B))
          throw new TypeError("Cannot call a class as a function");
      }
      function c() {
        try {
          if (typeof indexedDB < "u")
            return indexedDB;
          if (typeof webkitIndexedDB < "u")
            return webkitIndexedDB;
          if (typeof mozIndexedDB < "u")
            return mozIndexedDB;
          if (typeof OIndexedDB < "u")
            return OIndexedDB;
          if (typeof msIndexedDB < "u")
            return msIndexedDB;
        } catch {
          return;
        }
      }
      var l = c();
      function s() {
        try {
          if (!l || !l.open)
            return !1;
          var v = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), B = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!v || B) && typeof indexedDB < "u" && // some outdated implementations of IDB that appear on Samsung
          // and HTC Android devices <4.4 are missing IDBKeyRange
          // See: https://github.com/mozilla/localForage/issues/128
          // See: https://github.com/mozilla/localForage/issues/272
          typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function u(v, B) {
        v = v || [], B = B || {};
        try {
          return new Blob(v, B);
        } catch (R) {
          if (R.name !== "TypeError")
            throw R;
          for (var b = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, D = new b(), L = 0; L < v.length; L += 1)
            D.append(v[L]);
          return D.getBlob(B.type);
        }
      }
      typeof Promise > "u" && r(3);
      var h = Promise;
      function f(v, B) {
        B && v.then(function(b) {
          B(null, b);
        }, function(b) {
          B(b);
        });
      }
      function p(v, B, b) {
        typeof B == "function" && v.then(B), typeof b == "function" && v.catch(b);
      }
      function g(v) {
        return typeof v != "string" && (console.warn(v + " used as a key, but it is not a string."), v = String(v)), v;
      }
      function _() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var S = "local-forage-detect-blob-support", O = void 0, y = {}, d = Object.prototype.toString, x = "readonly", m = "readwrite";
      function C(v) {
        for (var B = v.length, b = new ArrayBuffer(B), D = new Uint8Array(b), L = 0; L < B; L++)
          D[L] = v.charCodeAt(L);
        return b;
      }
      function A(v) {
        return new h(function(B) {
          var b = v.transaction(S, m), D = u([""]);
          b.objectStore(S).put(D, "key"), b.onabort = function(L) {
            L.preventDefault(), L.stopPropagation(), B(!1);
          }, b.oncomplete = function() {
            var L = navigator.userAgent.match(/Chrome\/(\d+)/), R = navigator.userAgent.match(/Edge\//);
            B(R || !L || parseInt(L[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function T(v) {
        return typeof O == "boolean" ? h.resolve(O) : A(v).then(function(B) {
          return O = B, O;
        });
      }
      function I(v) {
        var B = y[v.name], b = {};
        b.promise = new h(function(D, L) {
          b.resolve = D, b.reject = L;
        }), B.deferredOperations.push(b), B.dbReady ? B.dbReady = B.dbReady.then(function() {
          return b.promise;
        }) : B.dbReady = b.promise;
      }
      function E(v) {
        var B = y[v.name], b = B.deferredOperations.pop();
        if (b)
          return b.resolve(), b.promise;
      }
      function w(v, B) {
        var b = y[v.name], D = b.deferredOperations.pop();
        if (D)
          return D.reject(B), D.promise;
      }
      function k(v, B) {
        return new h(function(b, D) {
          if (y[v.name] = y[v.name] || z(), v.db)
            if (B)
              I(v), v.db.close();
            else
              return b(v.db);
          var L = [v.name];
          B && L.push(v.version);
          var R = l.open.apply(l, L);
          B && (R.onupgradeneeded = function(q) {
            var Y = R.result;
            try {
              Y.createObjectStore(v.storeName), q.oldVersion <= 1 && Y.createObjectStore(S);
            } catch (K) {
              if (K.name === "ConstraintError")
                console.warn('The database "' + v.name + '" has been upgraded from version ' + q.oldVersion + " to version " + q.newVersion + ', but the storage "' + v.storeName + '" already exists.');
              else
                throw K;
            }
          }), R.onerror = function(q) {
            q.preventDefault(), D(R.error);
          }, R.onsuccess = function() {
            var q = R.result;
            q.onversionchange = function(Y) {
              Y.target.close();
            }, b(q), E(v);
          };
        });
      }
      function N(v) {
        return k(v, !1);
      }
      function M(v) {
        return k(v, !0);
      }
      function F(v, B) {
        if (!v.db)
          return !0;
        var b = !v.db.objectStoreNames.contains(v.storeName), D = v.version < v.db.version, L = v.version > v.db.version;
        if (D && (v.version !== B && console.warn('The database "' + v.name + `" can't be downgraded from version ` + v.db.version + " to version " + v.version + "."), v.version = v.db.version), L || b) {
          if (b) {
            var R = v.db.version + 1;
            R > v.version && (v.version = R);
          }
          return !0;
        }
        return !1;
      }
      function P(v) {
        return new h(function(B, b) {
          var D = new FileReader();
          D.onerror = b, D.onloadend = function(L) {
            var R = btoa(L.target.result || "");
            B({
              __local_forage_encoded_blob: !0,
              data: R,
              type: v.type
            });
          }, D.readAsBinaryString(v);
        });
      }
      function $(v) {
        var B = C(atob(v.data));
        return u([B], { type: v.type });
      }
      function X(v) {
        return v && v.__local_forage_encoded_blob;
      }
      function j(v) {
        var B = this, b = B._initReady().then(function() {
          var D = y[B._dbInfo.name];
          if (D && D.dbReady)
            return D.dbReady;
        });
        return p(b, v, v), b;
      }
      function J(v) {
        I(v);
        for (var B = y[v.name], b = B.forages, D = 0; D < b.length; D++) {
          var L = b[D];
          L._dbInfo.db && (L._dbInfo.db.close(), L._dbInfo.db = null);
        }
        return v.db = null, N(v).then(function(R) {
          return v.db = R, F(v) ? M(v) : R;
        }).then(function(R) {
          v.db = B.db = R;
          for (var q = 0; q < b.length; q++)
            b[q]._dbInfo.db = R;
        }).catch(function(R) {
          throw w(v, R), R;
        });
      }
      function H(v, B, b, D) {
        D === void 0 && (D = 1);
        try {
          var L = v.db.transaction(v.storeName, B);
          b(null, L);
        } catch (R) {
          if (D > 0 && (!v.db || R.name === "InvalidStateError" || R.name === "NotFoundError"))
            return h.resolve().then(function() {
              if (!v.db || R.name === "NotFoundError" && !v.db.objectStoreNames.contains(v.storeName) && v.version <= v.db.version)
                return v.db && (v.version = v.db.version + 1), M(v);
            }).then(function() {
              return J(v).then(function() {
                H(v, B, b, D - 1);
              });
            }).catch(b);
          b(R);
        }
      }
      function z() {
        return {
          // Running localForages sharing a database.
          forages: [],
          // Shared database.
          db: null,
          // Database readiness (promise).
          dbReady: null,
          // Deferred operations on the database.
          deferredOperations: []
        };
      }
      function U(v) {
        var B = this, b = {
          db: null
        };
        if (v)
          for (var D in v)
            b[D] = v[D];
        var L = y[b.name];
        L || (L = z(), y[b.name] = L), L.forages.push(B), B._initReady || (B._initReady = B.ready, B.ready = j);
        var R = [];
        function q() {
          return h.resolve();
        }
        for (var Y = 0; Y < L.forages.length; Y++) {
          var K = L.forages[Y];
          K !== B && R.push(K._initReady().catch(q));
        }
        var Z = L.forages.slice(0);
        return h.all(R).then(function() {
          return b.db = L.db, N(b);
        }).then(function(G) {
          return b.db = G, F(b, B._defaultConfig.version) ? M(b) : G;
        }).then(function(G) {
          b.db = L.db = G, B._dbInfo = b;
          for (var Q = 0; Q < Z.length; Q++) {
            var se = Z[Q];
            se !== B && (se._dbInfo.db = b.db, se._dbInfo.version = b.version);
          }
        });
      }
      function W(v, B) {
        var b = this;
        v = g(v);
        var D = new h(function(L, R) {
          b.ready().then(function() {
            H(b._dbInfo, x, function(q, Y) {
              if (q)
                return R(q);
              try {
                var K = Y.objectStore(b._dbInfo.storeName), Z = K.get(v);
                Z.onsuccess = function() {
                  var G = Z.result;
                  G === void 0 && (G = null), X(G) && (G = $(G)), L(G);
                }, Z.onerror = function() {
                  R(Z.error);
                };
              } catch (G) {
                R(G);
              }
            });
          }).catch(R);
        });
        return f(D, B), D;
      }
      function ae(v, B) {
        var b = this, D = new h(function(L, R) {
          b.ready().then(function() {
            H(b._dbInfo, x, function(q, Y) {
              if (q)
                return R(q);
              try {
                var K = Y.objectStore(b._dbInfo.storeName), Z = K.openCursor(), G = 1;
                Z.onsuccess = function() {
                  var Q = Z.result;
                  if (Q) {
                    var se = Q.value;
                    X(se) && (se = $(se));
                    var he = v(se, Q.key, G++);
                    he !== void 0 ? L(he) : Q.continue();
                  } else
                    L();
                }, Z.onerror = function() {
                  R(Z.error);
                };
              } catch (Q) {
                R(Q);
              }
            });
          }).catch(R);
        });
        return f(D, B), D;
      }
      function le(v, B, b) {
        var D = this;
        v = g(v);
        var L = new h(function(R, q) {
          var Y;
          D.ready().then(function() {
            return Y = D._dbInfo, d.call(B) === "[object Blob]" ? T(Y.db).then(function(K) {
              return K ? B : P(B);
            }) : B;
          }).then(function(K) {
            H(D._dbInfo, m, function(Z, G) {
              if (Z)
                return q(Z);
              try {
                var Q = G.objectStore(D._dbInfo.storeName);
                K === null && (K = void 0);
                var se = Q.put(K, v);
                G.oncomplete = function() {
                  K === void 0 && (K = null), R(K);
                }, G.onabort = G.onerror = function() {
                  var he = se.error ? se.error : se.transaction.error;
                  q(he);
                };
              } catch (he) {
                q(he);
              }
            });
          }).catch(q);
        });
        return f(L, b), L;
      }
      function be(v, B) {
        var b = this;
        v = g(v);
        var D = new h(function(L, R) {
          b.ready().then(function() {
            H(b._dbInfo, m, function(q, Y) {
              if (q)
                return R(q);
              try {
                var K = Y.objectStore(b._dbInfo.storeName), Z = K.delete(v);
                Y.oncomplete = function() {
                  L();
                }, Y.onerror = function() {
                  R(Z.error);
                }, Y.onabort = function() {
                  var G = Z.error ? Z.error : Z.transaction.error;
                  R(G);
                };
              } catch (G) {
                R(G);
              }
            });
          }).catch(R);
        });
        return f(D, B), D;
      }
      function ne(v) {
        var B = this, b = new h(function(D, L) {
          B.ready().then(function() {
            H(B._dbInfo, m, function(R, q) {
              if (R)
                return L(R);
              try {
                var Y = q.objectStore(B._dbInfo.storeName), K = Y.clear();
                q.oncomplete = function() {
                  D();
                }, q.onabort = q.onerror = function() {
                  var Z = K.error ? K.error : K.transaction.error;
                  L(Z);
                };
              } catch (Z) {
                L(Z);
              }
            });
          }).catch(L);
        });
        return f(b, v), b;
      }
      function ge(v) {
        var B = this, b = new h(function(D, L) {
          B.ready().then(function() {
            H(B._dbInfo, x, function(R, q) {
              if (R)
                return L(R);
              try {
                var Y = q.objectStore(B._dbInfo.storeName), K = Y.count();
                K.onsuccess = function() {
                  D(K.result);
                }, K.onerror = function() {
                  L(K.error);
                };
              } catch (Z) {
                L(Z);
              }
            });
          }).catch(L);
        });
        return f(b, v), b;
      }
      function Se(v, B) {
        var b = this, D = new h(function(L, R) {
          if (v < 0) {
            L(null);
            return;
          }
          b.ready().then(function() {
            H(b._dbInfo, x, function(q, Y) {
              if (q)
                return R(q);
              try {
                var K = Y.objectStore(b._dbInfo.storeName), Z = !1, G = K.openKeyCursor();
                G.onsuccess = function() {
                  var Q = G.result;
                  if (!Q) {
                    L(null);
                    return;
                  }
                  v === 0 || Z ? L(Q.key) : (Z = !0, Q.advance(v));
                }, G.onerror = function() {
                  R(G.error);
                };
              } catch (Q) {
                R(Q);
              }
            });
          }).catch(R);
        });
        return f(D, B), D;
      }
      function je(v) {
        var B = this, b = new h(function(D, L) {
          B.ready().then(function() {
            H(B._dbInfo, x, function(R, q) {
              if (R)
                return L(R);
              try {
                var Y = q.objectStore(B._dbInfo.storeName), K = Y.openKeyCursor(), Z = [];
                K.onsuccess = function() {
                  var G = K.result;
                  if (!G) {
                    D(Z);
                    return;
                  }
                  Z.push(G.key), G.continue();
                }, K.onerror = function() {
                  L(K.error);
                };
              } catch (G) {
                L(G);
              }
            });
          }).catch(L);
        });
        return f(b, v), b;
      }
      function Pe(v, B) {
        B = _.apply(this, arguments);
        var b = this.config();
        v = typeof v != "function" && v || {}, v.name || (v.name = v.name || b.name, v.storeName = v.storeName || b.storeName);
        var D = this, L;
        if (!v.name)
          L = h.reject("Invalid arguments");
        else {
          var R = v.name === b.name && D._dbInfo.db, q = R ? h.resolve(D._dbInfo.db) : N(v).then(function(Y) {
            var K = y[v.name], Z = K.forages;
            K.db = Y;
            for (var G = 0; G < Z.length; G++)
              Z[G]._dbInfo.db = Y;
            return Y;
          });
          v.storeName ? L = q.then(function(Y) {
            if (Y.objectStoreNames.contains(v.storeName)) {
              var K = Y.version + 1;
              I(v);
              var Z = y[v.name], G = Z.forages;
              Y.close();
              for (var Q = 0; Q < G.length; Q++) {
                var se = G[Q];
                se._dbInfo.db = null, se._dbInfo.version = K;
              }
              var he = new h(function(de, ye) {
                var me = l.open(v.name, K);
                me.onerror = function(Me) {
                  var It = me.result;
                  It.close(), ye(Me);
                }, me.onupgradeneeded = function() {
                  var Me = me.result;
                  Me.deleteObjectStore(v.storeName);
                }, me.onsuccess = function() {
                  var Me = me.result;
                  Me.close(), de(Me);
                };
              });
              return he.then(function(de) {
                Z.db = de;
                for (var ye = 0; ye < G.length; ye++) {
                  var me = G[ye];
                  me._dbInfo.db = de, E(me._dbInfo);
                }
              }).catch(function(de) {
                throw (w(v, de) || h.resolve()).catch(function() {
                }), de;
              });
            }
          }) : L = q.then(function(Y) {
            I(v);
            var K = y[v.name], Z = K.forages;
            Y.close();
            for (var G = 0; G < Z.length; G++) {
              var Q = Z[G];
              Q._dbInfo.db = null;
            }
            var se = new h(function(he, de) {
              var ye = l.deleteDatabase(v.name);
              ye.onerror = function() {
                var me = ye.result;
                me && me.close(), de(ye.error);
              }, ye.onblocked = function() {
                console.warn('dropInstance blocked for database "' + v.name + '" until all open connections are closed');
              }, ye.onsuccess = function() {
                var me = ye.result;
                me && me.close(), he(me);
              };
            });
            return se.then(function(he) {
              K.db = he;
              for (var de = 0; de < Z.length; de++) {
                var ye = Z[de];
                E(ye._dbInfo);
              }
            }).catch(function(he) {
              throw (w(v, he) || h.resolve()).catch(function() {
              }), he;
            });
          });
        }
        return f(L, B), L;
      }
      var Ie = {
        _driver: "asyncStorage",
        _initStorage: U,
        _support: s(),
        iterate: ae,
        getItem: W,
        setItem: le,
        removeItem: be,
        clear: ne,
        length: ge,
        key: Se,
        keys: je,
        dropInstance: Pe
      };
      function Ae() {
        return typeof openDatabase == "function";
      }
      var Fe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ht = "~~local_forage_type~", dt = /^~~local_forage_type~([^~]+)~/, Ve = "__lfsc__:", vt = Ve.length, Qe = "arbf", Re = "blob", Ne = "si08", ze = "ui08", pt = "uic8", At = "si16", Je = "si32", ot = "ur16", Ut = "ui32", Rt = "fl32", Nt = "fl64", et = vt + Qe.length, st = Object.prototype.toString;
      function Wt(v) {
        var B = v.length * 0.75, b = v.length, D, L = 0, R, q, Y, K;
        v[v.length - 1] === "=" && (B--, v[v.length - 2] === "=" && B--);
        var Z = new ArrayBuffer(B), G = new Uint8Array(Z);
        for (D = 0; D < b; D += 4)
          R = Fe.indexOf(v[D]), q = Fe.indexOf(v[D + 1]), Y = Fe.indexOf(v[D + 2]), K = Fe.indexOf(v[D + 3]), G[L++] = R << 2 | q >> 4, G[L++] = (q & 15) << 4 | Y >> 2, G[L++] = (Y & 3) << 6 | K & 63;
        return Z;
      }
      function yt(v) {
        var B = new Uint8Array(v), b = "", D;
        for (D = 0; D < B.length; D += 3)
          b += Fe[B[D] >> 2], b += Fe[(B[D] & 3) << 4 | B[D + 1] >> 4], b += Fe[(B[D + 1] & 15) << 2 | B[D + 2] >> 6], b += Fe[B[D + 2] & 63];
        return B.length % 3 === 2 ? b = b.substring(0, b.length - 1) + "=" : B.length % 3 === 1 && (b = b.substring(0, b.length - 2) + "=="), b;
      }
      function Vt(v, B) {
        var b = "";
        if (v && (b = st.call(v)), v && (b === "[object ArrayBuffer]" || v.buffer && st.call(v.buffer) === "[object ArrayBuffer]")) {
          var D, L = Ve;
          v instanceof ArrayBuffer ? (D = v, L += Qe) : (D = v.buffer, b === "[object Int8Array]" ? L += Ne : b === "[object Uint8Array]" ? L += ze : b === "[object Uint8ClampedArray]" ? L += pt : b === "[object Int16Array]" ? L += At : b === "[object Uint16Array]" ? L += ot : b === "[object Int32Array]" ? L += Je : b === "[object Uint32Array]" ? L += Ut : b === "[object Float32Array]" ? L += Rt : b === "[object Float64Array]" ? L += Nt : B(new Error("Failed to get type for BinaryArray"))), B(L + yt(D));
        } else if (b === "[object Blob]") {
          var R = new FileReader();
          R.onload = function() {
            var q = ht + v.type + "~" + yt(this.result);
            B(Ve + Re + q);
          }, R.readAsArrayBuffer(v);
        } else
          try {
            B(JSON.stringify(v));
          } catch (q) {
            console.error("Couldn't convert value into a JSON string: ", v), B(null, q);
          }
      }
      function Gr(v) {
        if (v.substring(0, vt) !== Ve)
          return JSON.parse(v);
        var B = v.substring(et), b = v.substring(vt, et), D;
        if (b === Re && dt.test(B)) {
          var L = B.match(dt);
          D = L[1], B = B.substring(L[0].length);
        }
        var R = Wt(B);
        switch (b) {
          case Qe:
            return R;
          case Re:
            return u([R], { type: D });
          case Ne:
            return new Int8Array(R);
          case ze:
            return new Uint8Array(R);
          case pt:
            return new Uint8ClampedArray(R);
          case At:
            return new Int16Array(R);
          case ot:
            return new Uint16Array(R);
          case Je:
            return new Int32Array(R);
          case Ut:
            return new Uint32Array(R);
          case Rt:
            return new Float32Array(R);
          case Nt:
            return new Float64Array(R);
          default:
            throw new Error("Unkown type: " + b);
        }
      }
      var Dt = {
        serialize: Vt,
        deserialize: Gr,
        stringToBuffer: Wt,
        bufferToString: yt
      };
      function Tt(v, B, b, D) {
        v.executeSql("CREATE TABLE IF NOT EXISTS " + B.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], b, D);
      }
      function Xr(v) {
        var B = this, b = {
          db: null
        };
        if (v)
          for (var D in v)
            b[D] = typeof v[D] != "string" ? v[D].toString() : v[D];
        var L = new h(function(R, q) {
          try {
            b.db = openDatabase(b.name, String(b.version), b.description, b.size);
          } catch (Y) {
            return q(Y);
          }
          b.db.transaction(function(Y) {
            Tt(Y, b, function() {
              B._dbInfo = b, R();
            }, function(K, Z) {
              q(Z);
            });
          }, q);
        });
        return b.serializer = Dt, L;
      }
      function $e(v, B, b, D, L, R) {
        v.executeSql(b, D, L, function(q, Y) {
          Y.code === Y.SYNTAX_ERR ? q.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [B.storeName], function(K, Z) {
            Z.rows.length ? R(K, Y) : Tt(K, B, function() {
              K.executeSql(b, D, L, R);
            }, R);
          }, R) : R(q, Y);
        }, R);
      }
      function jr(v, B) {
        var b = this;
        v = g(v);
        var D = new h(function(L, R) {
          b.ready().then(function() {
            var q = b._dbInfo;
            q.db.transaction(function(Y) {
              $e(Y, q, "SELECT * FROM " + q.storeName + " WHERE key = ? LIMIT 1", [v], function(K, Z) {
                var G = Z.rows.length ? Z.rows.item(0).value : null;
                G && (G = q.serializer.deserialize(G)), L(G);
              }, function(K, Z) {
                R(Z);
              });
            });
          }).catch(R);
        });
        return f(D, B), D;
      }
      function Yt(v, B) {
        var b = this, D = new h(function(L, R) {
          b.ready().then(function() {
            var q = b._dbInfo;
            q.db.transaction(function(Y) {
              $e(Y, q, "SELECT * FROM " + q.storeName, [], function(K, Z) {
                for (var G = Z.rows, Q = G.length, se = 0; se < Q; se++) {
                  var he = G.item(se), de = he.value;
                  if (de && (de = q.serializer.deserialize(de)), de = v(de, he.key, se + 1), de !== void 0) {
                    L(de);
                    return;
                  }
                }
                L();
              }, function(K, Z) {
                R(Z);
              });
            });
          }).catch(R);
        });
        return f(D, B), D;
      }
      function Kt(v, B, b, D) {
        var L = this;
        v = g(v);
        var R = new h(function(q, Y) {
          L.ready().then(function() {
            B === void 0 && (B = null);
            var K = B, Z = L._dbInfo;
            Z.serializer.serialize(B, function(G, Q) {
              Q ? Y(Q) : Z.db.transaction(function(se) {
                $e(se, Z, "INSERT OR REPLACE INTO " + Z.storeName + " (key, value) VALUES (?, ?)", [v, G], function() {
                  q(K);
                }, function(he, de) {
                  Y(de);
                });
              }, function(se) {
                if (se.code === se.QUOTA_ERR) {
                  if (D > 0) {
                    q(Kt.apply(L, [v, K, b, D - 1]));
                    return;
                  }
                  Y(se);
                }
              });
            });
          }).catch(Y);
        });
        return f(R, b), R;
      }
      function Qr(v, B, b) {
        return Kt.apply(this, [v, B, b, 1]);
      }
      function Jr(v, B) {
        var b = this;
        v = g(v);
        var D = new h(function(L, R) {
          b.ready().then(function() {
            var q = b._dbInfo;
            q.db.transaction(function(Y) {
              $e(Y, q, "DELETE FROM " + q.storeName + " WHERE key = ?", [v], function() {
                L();
              }, function(K, Z) {
                R(Z);
              });
            });
          }).catch(R);
        });
        return f(D, B), D;
      }
      function Zt(v) {
        var B = this, b = new h(function(D, L) {
          B.ready().then(function() {
            var R = B._dbInfo;
            R.db.transaction(function(q) {
              $e(q, R, "DELETE FROM " + R.storeName, [], function() {
                D();
              }, function(Y, K) {
                L(K);
              });
            });
          }).catch(L);
        });
        return f(b, v), b;
      }
      function e0(v) {
        var B = this, b = new h(function(D, L) {
          B.ready().then(function() {
            var R = B._dbInfo;
            R.db.transaction(function(q) {
              $e(q, R, "SELECT COUNT(key) as c FROM " + R.storeName, [], function(Y, K) {
                var Z = K.rows.item(0).c;
                D(Z);
              }, function(Y, K) {
                L(K);
              });
            });
          }).catch(L);
        });
        return f(b, v), b;
      }
      function t0(v, B) {
        var b = this, D = new h(function(L, R) {
          b.ready().then(function() {
            var q = b._dbInfo;
            q.db.transaction(function(Y) {
              $e(Y, q, "SELECT key FROM " + q.storeName + " WHERE id = ? LIMIT 1", [v + 1], function(K, Z) {
                var G = Z.rows.length ? Z.rows.item(0).key : null;
                L(G);
              }, function(K, Z) {
                R(Z);
              });
            });
          }).catch(R);
        });
        return f(D, B), D;
      }
      function Gt(v) {
        var B = this, b = new h(function(D, L) {
          B.ready().then(function() {
            var R = B._dbInfo;
            R.db.transaction(function(q) {
              $e(q, R, "SELECT key FROM " + R.storeName, [], function(Y, K) {
                for (var Z = [], G = 0; G < K.rows.length; G++)
                  Z.push(K.rows.item(G).key);
                D(Z);
              }, function(Y, K) {
                L(K);
              });
            });
          }).catch(L);
        });
        return f(b, v), b;
      }
      function r0(v) {
        return new h(function(B, b) {
          v.transaction(function(D) {
            D.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(L, R) {
              for (var q = [], Y = 0; Y < R.rows.length; Y++)
                q.push(R.rows.item(Y).name);
              B({
                db: v,
                storeNames: q
              });
            }, function(L, R) {
              b(R);
            });
          }, function(D) {
            b(D);
          });
        });
      }
      function Xt(v, B) {
        B = _.apply(this, arguments);
        var b = this.config();
        v = typeof v != "function" && v || {}, v.name || (v.name = v.name || b.name, v.storeName = v.storeName || b.storeName);
        var D = this, L;
        return v.name ? L = new h(function(R) {
          var q;
          v.name === b.name ? q = D._dbInfo.db : q = openDatabase(v.name, "", "", 0), v.storeName ? R({
            db: q,
            storeNames: [v.storeName]
          }) : R(r0(q));
        }).then(function(R) {
          return new h(function(q, Y) {
            R.db.transaction(function(K) {
              function Z(he) {
                return new h(function(de, ye) {
                  K.executeSql("DROP TABLE IF EXISTS " + he, [], function() {
                    de();
                  }, function(me, Me) {
                    ye(Me);
                  });
                });
              }
              for (var G = [], Q = 0, se = R.storeNames.length; Q < se; Q++)
                G.push(Z(R.storeNames[Q]));
              h.all(G).then(function() {
                q();
              }).catch(function(he) {
                Y(he);
              });
            }, function(K) {
              Y(K);
            });
          });
        }) : L = h.reject("Invalid arguments"), f(L, B), L;
      }
      var De = {
        _driver: "webSQLStorage",
        _initStorage: Xr,
        _support: Ae(),
        iterate: Yt,
        getItem: jr,
        setItem: Qr,
        removeItem: Jr,
        clear: Zt,
        length: e0,
        key: t0,
        keys: Gt,
        dropInstance: Xt
      };
      function Ye() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function Ot(v, B) {
        var b = v.name + "/";
        return v.storeName !== B.storeName && (b += v.storeName + "/"), b;
      }
      function n0() {
        var v = "_localforage_support_test";
        try {
          return localStorage.setItem(v, !0), localStorage.removeItem(v), !1;
        } catch {
          return !0;
        }
      }
      function Ni() {
        return !n0() || localStorage.length > 0;
      }
      function Di(v) {
        var B = this, b = {};
        if (v)
          for (var D in v)
            b[D] = v[D];
        return b.keyPrefix = Ot(v, B._defaultConfig), Ni() ? (B._dbInfo = b, b.serializer = Dt, h.resolve()) : h.reject();
      }
      function Ti(v) {
        var B = this, b = B.ready().then(function() {
          for (var D = B._dbInfo.keyPrefix, L = localStorage.length - 1; L >= 0; L--) {
            var R = localStorage.key(L);
            R.indexOf(D) === 0 && localStorage.removeItem(R);
          }
        });
        return f(b, v), b;
      }
      function Oi(v, B) {
        var b = this;
        v = g(v);
        var D = b.ready().then(function() {
          var L = b._dbInfo, R = localStorage.getItem(L.keyPrefix + v);
          return R && (R = L.serializer.deserialize(R)), R;
        });
        return f(D, B), D;
      }
      function Li(v, B) {
        var b = this, D = b.ready().then(function() {
          for (var L = b._dbInfo, R = L.keyPrefix, q = R.length, Y = localStorage.length, K = 1, Z = 0; Z < Y; Z++) {
            var G = localStorage.key(Z);
            if (G.indexOf(R) === 0) {
              var Q = localStorage.getItem(G);
              if (Q && (Q = L.serializer.deserialize(Q)), Q = v(Q, G.substring(q), K++), Q !== void 0)
                return Q;
            }
          }
        });
        return f(D, B), D;
      }
      function Ii(v, B) {
        var b = this, D = b.ready().then(function() {
          var L = b._dbInfo, R;
          try {
            R = localStorage.key(v);
          } catch {
            R = null;
          }
          return R && (R = R.substring(L.keyPrefix.length)), R;
        });
        return f(D, B), D;
      }
      function Fi(v) {
        var B = this, b = B.ready().then(function() {
          for (var D = B._dbInfo, L = localStorage.length, R = [], q = 0; q < L; q++) {
            var Y = localStorage.key(q);
            Y.indexOf(D.keyPrefix) === 0 && R.push(Y.substring(D.keyPrefix.length));
          }
          return R;
        });
        return f(b, v), b;
      }
      function Pi(v) {
        var B = this, b = B.keys().then(function(D) {
          return D.length;
        });
        return f(b, v), b;
      }
      function Mi(v, B) {
        var b = this;
        v = g(v);
        var D = b.ready().then(function() {
          var L = b._dbInfo;
          localStorage.removeItem(L.keyPrefix + v);
        });
        return f(D, B), D;
      }
      function Hi(v, B, b) {
        var D = this;
        v = g(v);
        var L = D.ready().then(function() {
          B === void 0 && (B = null);
          var R = B;
          return new h(function(q, Y) {
            var K = D._dbInfo;
            K.serializer.serialize(B, function(Z, G) {
              if (G)
                Y(G);
              else
                try {
                  localStorage.setItem(K.keyPrefix + v, Z), q(R);
                } catch (Q) {
                  (Q.name === "QuotaExceededError" || Q.name === "NS_ERROR_DOM_QUOTA_REACHED") && Y(Q), Y(Q);
                }
            });
          });
        });
        return f(L, b), L;
      }
      function zi(v, B) {
        if (B = _.apply(this, arguments), v = typeof v != "function" && v || {}, !v.name) {
          var b = this.config();
          v.name = v.name || b.name, v.storeName = v.storeName || b.storeName;
        }
        var D = this, L;
        return v.name ? L = new h(function(R) {
          v.storeName ? R(Ot(v, D._defaultConfig)) : R(v.name + "/");
        }).then(function(R) {
          for (var q = localStorage.length - 1; q >= 0; q--) {
            var Y = localStorage.key(q);
            Y.indexOf(R) === 0 && localStorage.removeItem(Y);
          }
        }) : L = h.reject("Invalid arguments"), f(L, B), L;
      }
      var $i = {
        _driver: "localStorageWrapper",
        _initStorage: Di,
        _support: Ye(),
        iterate: Li,
        getItem: Oi,
        setItem: Hi,
        removeItem: Mi,
        clear: Ti,
        length: Pi,
        key: Ii,
        keys: Fi,
        dropInstance: zi
      }, qi = function(B, b) {
        return B === b || typeof B == "number" && typeof b == "number" && isNaN(B) && isNaN(b);
      }, Ui = function(B, b) {
        for (var D = B.length, L = 0; L < D; ) {
          if (qi(B[L], b))
            return !0;
          L++;
        }
        return !1;
      }, N0 = Array.isArray || function(v) {
        return Object.prototype.toString.call(v) === "[object Array]";
      }, Lt = {}, D0 = {}, _t = {
        INDEXEDDB: Ie,
        WEBSQL: De,
        LOCALSTORAGE: $i
      }, Wi = [_t.INDEXEDDB._driver, _t.WEBSQL._driver, _t.LOCALSTORAGE._driver], jt = ["dropInstance"], i0 = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(jt), Vi = {
        description: "",
        driver: Wi.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function Yi(v, B) {
        v[B] = function() {
          var b = arguments;
          return v.ready().then(function() {
            return v[B].apply(v, b);
          });
        };
      }
      function o0() {
        for (var v = 1; v < arguments.length; v++) {
          var B = arguments[v];
          if (B)
            for (var b in B)
              B.hasOwnProperty(b) && (N0(B[b]) ? arguments[0][b] = B[b].slice() : arguments[0][b] = B[b]);
        }
        return arguments[0];
      }
      var Ki = function() {
        function v(B) {
          a(this, v);
          for (var b in _t)
            if (_t.hasOwnProperty(b)) {
              var D = _t[b], L = D._driver;
              this[b] = L, Lt[L] || this.defineDriver(D);
            }
          this._defaultConfig = o0({}, Vi), this._config = o0({}, this._defaultConfig, B), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return v.prototype.config = function(b) {
          if ((typeof b > "u" ? "undefined" : o(b)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var D in b) {
              if (D === "storeName" && (b[D] = b[D].replace(/\W/g, "_")), D === "version" && typeof b[D] != "number")
                return new Error("Database version must be a number.");
              this._config[D] = b[D];
            }
            return "driver" in b && b.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof b == "string" ? this._config[b] : this._config;
        }, v.prototype.defineDriver = function(b, D, L) {
          var R = new h(function(q, Y) {
            try {
              var K = b._driver, Z = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!b._driver) {
                Y(Z);
                return;
              }
              for (var G = i0.concat("_initStorage"), Q = 0, se = G.length; Q < se; Q++) {
                var he = G[Q], de = !Ui(jt, he);
                if ((de || b[he]) && typeof b[he] != "function") {
                  Y(Z);
                  return;
                }
              }
              var ye = function() {
                for (var It = function(Xi) {
                  return function() {
                    var ji = new Error("Method " + Xi + " is not implemented by the current driver"), T0 = h.reject(ji);
                    return f(T0, arguments[arguments.length - 1]), T0;
                  };
                }, s0 = 0, Gi = jt.length; s0 < Gi; s0++) {
                  var a0 = jt[s0];
                  b[a0] || (b[a0] = It(a0));
                }
              };
              ye();
              var me = function(It) {
                Lt[K] && console.info("Redefining LocalForage driver: " + K), Lt[K] = b, D0[K] = It, q();
              };
              "_support" in b ? b._support && typeof b._support == "function" ? b._support().then(me, Y) : me(!!b._support) : me(!0);
            } catch (Me) {
              Y(Me);
            }
          });
          return p(R, D, L), R;
        }, v.prototype.driver = function() {
          return this._driver || null;
        }, v.prototype.getDriver = function(b, D, L) {
          var R = Lt[b] ? h.resolve(Lt[b]) : h.reject(new Error("Driver not found."));
          return p(R, D, L), R;
        }, v.prototype.getSerializer = function(b) {
          var D = h.resolve(Dt);
          return p(D, b), D;
        }, v.prototype.ready = function(b) {
          var D = this, L = D._driverSet.then(function() {
            return D._ready === null && (D._ready = D._initDriver()), D._ready;
          });
          return p(L, b, b), L;
        }, v.prototype.setDriver = function(b, D, L) {
          var R = this;
          N0(b) || (b = [b]);
          var q = this._getSupportedDrivers(b);
          function Y() {
            R._config.driver = R.driver();
          }
          function K(Q) {
            return R._extend(Q), Y(), R._ready = R._initStorage(R._config), R._ready;
          }
          function Z(Q) {
            return function() {
              var se = 0;
              function he() {
                for (; se < Q.length; ) {
                  var de = Q[se];
                  return se++, R._dbInfo = null, R._ready = null, R.getDriver(de).then(K).catch(he);
                }
                Y();
                var ye = new Error("No available storage method found.");
                return R._driverSet = h.reject(ye), R._driverSet;
              }
              return he();
            };
          }
          var G = this._driverSet !== null ? this._driverSet.catch(function() {
            return h.resolve();
          }) : h.resolve();
          return this._driverSet = G.then(function() {
            var Q = q[0];
            return R._dbInfo = null, R._ready = null, R.getDriver(Q).then(function(se) {
              R._driver = se._driver, Y(), R._wrapLibraryMethodsWithReady(), R._initDriver = Z(q);
            });
          }).catch(function() {
            Y();
            var Q = new Error("No available storage method found.");
            return R._driverSet = h.reject(Q), R._driverSet;
          }), p(this._driverSet, D, L), this._driverSet;
        }, v.prototype.supports = function(b) {
          return !!D0[b];
        }, v.prototype._extend = function(b) {
          o0(this, b);
        }, v.prototype._getSupportedDrivers = function(b) {
          for (var D = [], L = 0, R = b.length; L < R; L++) {
            var q = b[L];
            this.supports(q) && D.push(q);
          }
          return D;
        }, v.prototype._wrapLibraryMethodsWithReady = function() {
          for (var b = 0, D = i0.length; b < D; b++)
            Yi(this, i0[b]);
        }, v.prototype.createInstance = function(b) {
          return new v(b);
        }, v;
      }(), Zi = new Ki();
      n.exports = Zi;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(Ga);
const Ge = /* @__PURE__ */ Object.create(null);
Ge.open = "0";
Ge.close = "1";
Ge.ping = "2";
Ge.pong = "3";
Ge.message = "4";
Ge.upgrade = "5";
Ge.noop = "6";
const rr = /* @__PURE__ */ Object.create(null);
Object.keys(Ge).forEach((e) => {
  rr[Ge[e]] = e;
});
const Xa = { type: "error", data: "parser error" }, ja = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Qa = typeof ArrayBuffer == "function", Ja = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, ei = ({ type: e, data: t }, r, n) => ja && t instanceof Blob ? r ? n(t) : kn(t, n) : Qa && (t instanceof ArrayBuffer || Ja(t)) ? r ? n(t) : kn(new Blob([t]), n) : n(Ge[e] + (t || "")), kn = (e, t) => {
  const r = new FileReader();
  return r.onload = function() {
    const n = r.result.split(",")[1];
    t("b" + (n || ""));
  }, r.readAsDataURL(e);
}, An = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ht = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < An.length; e++)
  Ht[An.charCodeAt(e)] = e;
const ec = (e) => {
  let t = e.length * 0.75, r = e.length, n, i = 0, o, a, c, l;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const s = new ArrayBuffer(t), u = new Uint8Array(s);
  for (n = 0; n < r; n += 4)
    o = Ht[e.charCodeAt(n)], a = Ht[e.charCodeAt(n + 1)], c = Ht[e.charCodeAt(n + 2)], l = Ht[e.charCodeAt(n + 3)], u[i++] = o << 2 | a >> 4, u[i++] = (a & 15) << 4 | c >> 2, u[i++] = (c & 3) << 6 | l & 63;
  return s;
}, tc = typeof ArrayBuffer == "function", ti = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: ri(e, t)
    };
  const r = e.charAt(0);
  return r === "b" ? {
    type: "message",
    data: rc(e.substring(1), t)
  } : rr[r] ? e.length > 1 ? {
    type: rr[r],
    data: e.substring(1)
  } : {
    type: rr[r]
  } : Xa;
}, rc = (e, t) => {
  if (tc) {
    const r = ec(e);
    return ri(r, t);
  } else
    return { base64: !0, data: e };
}, ri = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof ArrayBuffer ? new Blob([e]) : e;
    case "arraybuffer":
    default:
      return e;
  }
}, ni = String.fromCharCode(30), nc = (e, t) => {
  const r = e.length, n = new Array(r);
  let i = 0;
  e.forEach((o, a) => {
    ei(o, !1, (c) => {
      n[a] = c, ++i === r && t(n.join(ni));
    });
  });
}, ic = (e, t) => {
  const r = e.split(ni), n = [];
  for (let i = 0; i < r.length; i++) {
    const o = ti(r[i], t);
    if (n.push(o), o.type === "error")
      break;
  }
  return n;
}, ii = 4;
function we(e) {
  if (e)
    return oc(e);
}
function oc(e) {
  for (var t in we.prototype)
    e[t] = we.prototype[t];
  return e;
}
we.prototype.on = we.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
we.prototype.once = function(e, t) {
  function r() {
    this.off(e, r), t.apply(this, arguments);
  }
  return r.fn = t, this.on(e, r), this;
};
we.prototype.off = we.prototype.removeListener = we.prototype.removeAllListeners = we.prototype.removeEventListener = function(e, t) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var r = this._callbacks["$" + e];
  if (!r)
    return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var n, i = 0; i < r.length; i++)
    if (n = r[i], n === t || n.fn === t) {
      r.splice(i, 1);
      break;
    }
  return r.length === 0 && delete this._callbacks["$" + e], this;
};
we.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), r = this._callbacks["$" + e], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (r) {
    r = r.slice(0);
    for (var n = 0, i = r.length; n < i; ++n)
      r[n].apply(this, t);
  }
  return this;
};
we.prototype.emitReserved = we.prototype.emit;
we.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
we.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const He = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();
function oi(e, ...t) {
  return t.reduce((r, n) => (e.hasOwnProperty(n) && (r[n] = e[n]), r), {});
}
const sc = He.setTimeout, ac = He.clearTimeout;
function Vr(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = sc.bind(He), e.clearTimeoutFn = ac.bind(He)) : (e.setTimeoutFn = He.setTimeout.bind(He), e.clearTimeoutFn = He.clearTimeout.bind(He));
}
const cc = 1.33;
function fc(e) {
  return typeof e == "string" ? uc(e) : Math.ceil((e.byteLength || e.size) * cc);
}
function uc(e) {
  let t = 0, r = 0;
  for (let n = 0, i = e.length; n < i; n++)
    t = e.charCodeAt(n), t < 128 ? r += 1 : t < 2048 ? r += 2 : t < 55296 || t >= 57344 ? r += 3 : (n++, r += 4);
  return r;
}
class lc extends Error {
  constructor(t, r, n) {
    super(t), this.description = r, this.context = n, this.type = "TransportError";
  }
}
class si extends we {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, Vr(this, t), this.opts = t, this.query = t.query, this.socket = t.socket;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(t, r, n) {
    return super.emitReserved("error", new lc(t, r, n)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(t) {
    const r = ti(t, this.socket.binaryType);
    this.onPacket(r);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(t) {
    this.readyState = "closed", super.emitReserved("close", t);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(t) {
  }
}
const ai = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), h0 = 64, hc = {};
let Rn = 0, Jt = 0, Nn;
function Dn(e) {
  let t = "";
  do
    t = ai[e % h0] + t, e = Math.floor(e / h0);
  while (e > 0);
  return t;
}
function ci() {
  const e = Dn(+/* @__PURE__ */ new Date());
  return e !== Nn ? (Rn = 0, Nn = e) : e + "." + Dn(Rn++);
}
for (; Jt < h0; Jt++)
  hc[ai[Jt]] = Jt;
function fi(e) {
  let t = "";
  for (let r in e)
    e.hasOwnProperty(r) && (t.length && (t += "&"), t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
  return t;
}
function dc(e) {
  let t = {}, r = e.split("&");
  for (let n = 0, i = r.length; n < i; n++) {
    let o = r[n].split("=");
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return t;
}
let ui = !1;
try {
  ui = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const vc = ui;
function li(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || vc))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new He[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function pc() {
}
const xc = function() {
  return new li({
    xdomain: !1
  }).responseType != null;
}();
class bc extends si {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(t) {
    if (super(t), this.polling = !1, typeof location < "u") {
      const n = location.protocol === "https:";
      let i = location.port;
      i || (i = n ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || i !== t.port, this.xs = t.secure !== n;
    }
    const r = t && t.forceBase64;
    this.supportsBinary = xc && !r;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this.poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(t) {
    this.readyState = "pausing";
    const r = () => {
      this.readyState = "paused", t();
    };
    if (this.polling || !this.writable) {
      let n = 0;
      this.polling && (n++, this.once("pollComplete", function() {
        --n || r();
      })), this.writable || (n++, this.once("drain", function() {
        --n || r();
      }));
    } else
      r();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  poll() {
    this.polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(t) {
    const r = (n) => {
      if (this.readyState === "opening" && n.type === "open" && this.onOpen(), n.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(n);
    };
    ic(t, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(t) {
    this.writable = !1, nc(t, (r) => {
      this.doWrite(r, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    let t = this.query || {};
    const r = this.opts.secure ? "https" : "http";
    let n = "";
    this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = ci()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.opts.port && (r === "https" && Number(this.opts.port) !== 443 || r === "http" && Number(this.opts.port) !== 80) && (n = ":" + this.opts.port);
    const i = fi(t), o = this.opts.hostname.indexOf(":") !== -1;
    return r + "://" + (o ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(t = {}) {
    return Object.assign(t, { xd: this.xd, xs: this.xs }, this.opts), new Ze(this.uri(), t);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(t, r) {
    const n = this.request({
      method: "POST",
      data: t
    });
    n.on("success", r), n.on("error", (i, o) => {
      this.onError("xhr post error", i, o);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)), t.on("error", (r, n) => {
      this.onError("xhr poll error", r, n);
    }), this.pollXhr = t;
  }
}
class Ze extends we {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, r) {
    super(), Vr(this, r), this.opts = r, this.method = r.method || "GET", this.uri = t, this.async = r.async !== !1, this.data = r.data !== void 0 ? r.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    const t = oi(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    t.xdomain = !!this.opts.xd, t.xscheme = !!this.opts.xs;
    const r = this.xhr = new li(t);
    try {
      r.open(this.method, this.uri, this.async);
      try {
        if (this.opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let n in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(n) && r.setRequestHeader(n, this.opts.extraHeaders[n]);
        }
      } catch {
      }
      if (this.method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {
      }
      "withCredentials" in r && (r.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (r.timeout = this.opts.requestTimeout), r.onreadystatechange = () => {
        r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
          this.onError(typeof r.status == "number" ? r.status : 0);
        }, 0));
      }, r.send(this.data);
    } catch (n) {
      this.setTimeoutFn(() => {
        this.onError(n);
      }, 0);
      return;
    }
    typeof document < "u" && (this.index = Ze.requestsCount++, Ze.requests[this.index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  onError(t) {
    this.emitReserved("error", t, this.xhr), this.cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  cleanup(t) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (this.xhr.onreadystatechange = pc, t)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Ze.requests[this.index], this.xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  onLoad() {
    const t = this.xhr.responseText;
    t !== null && (this.emitReserved("data", t), this.emitReserved("success"), this.cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this.cleanup();
  }
}
Ze.requestsCount = 0;
Ze.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Tn);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in He ? "pagehide" : "unload";
    addEventListener(e, Tn, !1);
  }
}
function Tn() {
  for (let e in Ze.requests)
    Ze.requests.hasOwnProperty(e) && Ze.requests[e].abort();
}
const hi = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, r) => r(t, 0))(), er = He.WebSocket || He.MozWebSocket, On = !0, gc = "arraybuffer", Ln = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class mc extends si {
  /**
   * WebSocket transport constructor.
   *
   * @param {Object} opts - connection options
   * @protected
   */
  constructor(t) {
    super(t), this.supportsBinary = !t.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check())
      return;
    const t = this.uri(), r = this.opts.protocols, n = Ln ? {} : oi(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = On && !Ln ? r ? new er(t, r) : new er(t) : new er(t, r, n);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this.ws.binaryType = this.socket.binaryType || gc, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (t) => this.onClose({
      description: "websocket connection closed",
      context: t
    }), this.ws.onmessage = (t) => this.onData(t.data), this.ws.onerror = (t) => this.onError("websocket error", t);
  }
  write(t) {
    this.writable = !1;
    for (let r = 0; r < t.length; r++) {
      const n = t[r], i = r === t.length - 1;
      ei(n, this.supportsBinary, (o) => {
        const a = {};
        try {
          On && this.ws.send(o);
        } catch {
        }
        i && hi(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    let t = this.query || {};
    const r = this.opts.secure ? "wss" : "ws";
    let n = "";
    this.opts.port && (r === "wss" && Number(this.opts.port) !== 443 || r === "ws" && Number(this.opts.port) !== 80) && (n = ":" + this.opts.port), this.opts.timestampRequests && (t[this.opts.timestampParam] = ci()), this.supportsBinary || (t.b64 = 1);
    const i = fi(t), o = this.opts.hostname.indexOf(":") !== -1;
    return r + "://" + (o ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!er;
  }
}
const yc = {
  websocket: mc,
  polling: bc
}, _c = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, wc = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function d0(e) {
  const t = e, r = e.indexOf("["), n = e.indexOf("]");
  r != -1 && n != -1 && (e = e.substring(0, r) + e.substring(r, n).replace(/:/g, ";") + e.substring(n, e.length));
  let i = _c.exec(e || ""), o = {}, a = 14;
  for (; a--; )
    o[wc[a]] = i[a] || "";
  return r != -1 && n != -1 && (o.source = t, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"), o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o.ipv6uri = !0), o.pathNames = Ec(o, o.path), o.queryKey = Cc(o, o.query), o;
}
function Ec(e, t) {
  const r = /\/{2,9}/g, n = t.replace(r, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && n.splice(0, 1), t.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function Cc(e, t) {
  const r = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, i, o) {
    i && (r[i] = o);
  }), r;
}
let di = class Et extends we {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, r = {}) {
    super(), this.writeBuffer = [], t && typeof t == "object" && (r = t, t = null), t ? (t = d0(t), r.hostname = t.host, r.secure = t.protocol === "https" || t.protocol === "wss", r.port = t.port, t.query && (r.query = t.query)) : r.host && (r.hostname = d0(r.host).host), Vr(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = r.transports || ["polling", "websocket"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !0
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = dc(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this.beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
      this.onClose("transport close", {
        description: "network connection lost"
      });
    }, addEventListener("offline", this.offlineEventListener, !1))), this.open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(t) {
    const r = Object.assign({}, this.opts.query);
    r.EIO = ii, r.transport = t, this.id && (r.sid = this.id);
    const n = Object.assign({}, this.opts.transportOptions[t], this.opts, {
      query: r,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new yc[t](n);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let t;
    if (this.opts.rememberUpgrade && Et.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
      t = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else
      t = this.transports[0];
    this.readyState = "opening";
    try {
      t = this.createTransport(t);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    t.open(), this.setTransport(t);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (r) => this.onClose("transport close", r));
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  probe(t) {
    let r = this.createTransport(t), n = !1;
    Et.priorWebsocketSuccess = !1;
    const i = () => {
      n || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (h) => {
        if (!n)
          if (h.type === "pong" && h.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            Et.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (u(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush());
            });
          } else {
            const f = new Error("probe error");
            f.transport = r.name, this.emitReserved("upgradeError", f);
          }
      }));
    };
    function o() {
      n || (n = !0, u(), r.close(), r = null);
    }
    const a = (h) => {
      const f = new Error("probe error: " + h);
      f.transport = r.name, o(), this.emitReserved("upgradeError", f);
    };
    function c() {
      a("transport closed");
    }
    function l() {
      a("socket closed");
    }
    function s(h) {
      r && h.name !== r.name && o();
    }
    const u = () => {
      r.removeListener("open", i), r.removeListener("error", a), r.removeListener("close", c), this.off("close", l), this.off("upgrading", s);
    };
    r.once("open", i), r.once("error", a), r.once("close", c), this.once("close", l), this.once("upgrading", s), r.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", Et.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
      let t = 0;
      const r = this.upgrades.length;
      for (; t < r; t++)
        this.probe(this.upgrades[t]);
    }
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  onPacket(t) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
          break;
        case "error":
          const r = new Error("server error");
          r.code = t.data, this.onError(r);
          break;
        case "message":
          this.emitReserved("data", t.data), this.emitReserved("message", t.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(t) {
    this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.maxPayload = t.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const t = this.getWritablePackets();
      this.transport.send(t), this.prevBufferLen = t.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  getWritablePackets() {
    if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let r = 1;
    for (let n = 0; n < this.writeBuffer.length; n++) {
      const i = this.writeBuffer[n].data;
      if (i && (r += fc(i)), n > 0 && r > this.maxPayload)
        return this.writeBuffer.slice(0, n);
      r += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} callback function.
   * @return {Socket} for chaining.
   */
  write(t, r, n) {
    return this.sendPacket("message", t, r, n), this;
  }
  send(t, r, n) {
    return this.sendPacket("message", t, r, n), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  sendPacket(t, r, n, i) {
    if (typeof r == "function" && (i = r, r = void 0), typeof n == "function" && (i = n, n = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    n = n || {}, n.compress = n.compress !== !1;
    const o = {
      type: t,
      data: r,
      options: n
    };
    this.emitReserved("packetCreate", o), this.writeBuffer.push(o), i && this.once("flush", i), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const t = () => {
      this.onClose("forced close"), this.transport.close();
    }, r = () => {
      this.off("upgrade", r), this.off("upgradeError", r), t();
    }, n = () => {
      this.once("upgrade", r), this.once("upgradeError", r);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? n() : t();
    }) : this.upgrading ? n() : t()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  onError(t) {
    Et.priorWebsocketSuccess = !1, this.emitReserved("error", t), this.onClose("transport error", t);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  onClose(t, r) {
    (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", t, r), this.writeBuffer = [], this.prevBufferLen = 0);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  filterUpgrades(t) {
    const r = [];
    let n = 0;
    const i = t.length;
    for (; n < i; n++)
      ~this.transports.indexOf(t[n]) && r.push(t[n]);
    return r;
  }
};
di.protocol = ii;
function Sc(e, t = "", r) {
  let n = e;
  r = r || typeof location < "u" && location, e == null && (e = r.protocol + "//" + r.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = r.protocol + e : e = r.host + e), /^(https?|wss?):\/\//.test(e) || (typeof r < "u" ? e = r.protocol + "//" + e : e = "https://" + e), n = d0(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const o = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + o + ":" + n.port + t, n.href = n.protocol + "://" + o + (r && r.port === n.port ? "" : ":" + n.port), n;
}
const Bc = typeof ArrayBuffer == "function", kc = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, vi = Object.prototype.toString, Ac = typeof Blob == "function" || typeof Blob < "u" && vi.call(Blob) === "[object BlobConstructor]", Rc = typeof File == "function" || typeof File < "u" && vi.call(File) === "[object FileConstructor]";
function k0(e) {
  return Bc && (e instanceof ArrayBuffer || kc(e)) || Ac && e instanceof Blob || Rc && e instanceof File;
}
function nr(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let r = 0, n = e.length; r < n; r++)
      if (nr(e[r]))
        return !0;
    return !1;
  }
  if (k0(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return nr(e.toJSON(), !0);
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && nr(e[r]))
      return !0;
  return !1;
}
function Nc(e) {
  const t = [], r = e.data, n = e;
  return n.data = v0(r, t), n.attachments = t.length, { packet: n, buffers: t };
}
function v0(e, t) {
  if (!e)
    return e;
  if (k0(e)) {
    const r = { _placeholder: !0, num: t.length };
    return t.push(e), r;
  } else if (Array.isArray(e)) {
    const r = new Array(e.length);
    for (let n = 0; n < e.length; n++)
      r[n] = v0(e[n], t);
    return r;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const r = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (r[n] = v0(e[n], t));
    return r;
  }
  return e;
}
function Dc(e, t) {
  return e.data = p0(e.data, t), delete e.attachments, e;
}
function p0(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let r = 0; r < e.length; r++)
      e[r] = p0(e[r], t);
  else if (typeof e == "object")
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (e[r] = p0(e[r], t));
  return e;
}
const Tc = 5;
var fe;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(fe || (fe = {}));
class Oc {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(t) {
    this.replacer = t;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(t) {
    return (t.type === fe.EVENT || t.type === fe.ACK) && nr(t) ? this.encodeAsBinary({
      type: t.type === fe.EVENT ? fe.BINARY_EVENT : fe.BINARY_ACK,
      nsp: t.nsp,
      data: t.data,
      id: t.id
    }) : [this.encodeAsString(t)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(t) {
    let r = "" + t.type;
    return (t.type === fe.BINARY_EVENT || t.type === fe.BINARY_ACK) && (r += t.attachments + "-"), t.nsp && t.nsp !== "/" && (r += t.nsp + ","), t.id != null && (r += t.id), t.data != null && (r += JSON.stringify(t.data, this.replacer)), r;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const r = Nc(t), n = this.encodeAsString(r.packet), i = r.buffers;
    return i.unshift(n), i;
  }
}
class A0 extends we {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(t) {
    super(), this.reviver = t;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(t) {
    let r;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      r = this.decodeString(t);
      const n = r.type === fe.BINARY_EVENT;
      n || r.type === fe.BINARY_ACK ? (r.type = n ? fe.EVENT : fe.ACK, this.reconstructor = new Lc(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (k0(t) || t.base64)
      if (this.reconstructor)
        r = this.reconstructor.takeBinaryData(t), r && (this.reconstructor = null, super.emitReserved("decoded", r));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + t);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(t) {
    let r = 0;
    const n = {
      type: Number(t.charAt(0))
    };
    if (fe[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === fe.BINARY_EVENT || n.type === fe.BINARY_ACK) {
      const o = r + 1;
      for (; t.charAt(++r) !== "-" && r != t.length; )
        ;
      const a = t.substring(o, r);
      if (a != Number(a) || t.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(a);
    }
    if (t.charAt(r + 1) === "/") {
      const o = r + 1;
      for (; ++r && !(t.charAt(r) === "," || r === t.length); )
        ;
      n.nsp = t.substring(o, r);
    } else
      n.nsp = "/";
    const i = t.charAt(r + 1);
    if (i !== "" && Number(i) == i) {
      const o = r + 1;
      for (; ++r; ) {
        const a = t.charAt(r);
        if (a == null || Number(a) != a) {
          --r;
          break;
        }
        if (r === t.length)
          break;
      }
      n.id = Number(t.substring(o, r + 1));
    }
    if (t.charAt(++r)) {
      const o = this.tryParse(t.substr(r));
      if (A0.isPayloadValid(n.type, o))
        n.data = o;
      else
        throw new Error("invalid payload");
    }
    return n;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, r) {
    switch (t) {
      case fe.CONNECT:
        return typeof r == "object";
      case fe.DISCONNECT:
        return r === void 0;
      case fe.CONNECT_ERROR:
        return typeof r == "string" || typeof r == "object";
      case fe.EVENT:
      case fe.BINARY_EVENT:
        return Array.isArray(r) && r.length > 0;
      case fe.ACK:
      case fe.BINARY_ACK:
        return Array.isArray(r);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class Lc {
  constructor(t) {
    this.packet = t, this.buffers = [], this.reconPack = t;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(t) {
    if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
      const r = Dc(this.reconPack, this.buffers);
      return this.finishedReconstruction(), r;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const Ic = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: A0,
  Encoder: Oc,
  get PacketType() {
    return fe;
  },
  protocol: Tc
}, Symbol.toStringTag, { value: "Module" }));
function qe(e, t, r) {
  return e.on(t, r), function() {
    e.off(t, r);
  };
}
const Fc = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class pi extends we {
  /**
   * `Socket` constructor.
   */
  constructor(t, r, n) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = r, n && n.auth && (this.auth = n.auth), this._opts = Object.assign({}, n), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const t = this.io;
    this.subs = [
      qe(t, "open", this.onopen.bind(this)),
      qe(t, "packet", this.onpacket.bind(this)),
      qe(t, "error", this.onerror.bind(this)),
      qe(t, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(t, ...r) {
    if (Fc.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (r.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(r), this;
    const n = {
      type: fe.EVENT,
      data: r
    };
    if (n.options = {}, n.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
      const a = this.ids++, c = r.pop();
      this._registerAckCallback(a, c), n.id = a;
    }
    const i = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    return this.flags.volatile && (!i || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(n), this.packet(n)) : this.sendBuffer.push(n)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(t, r) {
    var n;
    const i = (n = this.flags.timeout) !== null && n !== void 0 ? n : this._opts.ackTimeout;
    if (i === void 0) {
      this.acks[t] = r;
      return;
    }
    const o = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === t && this.sendBuffer.splice(a, 1);
      r.call(this, new Error("operation has timed out"));
    }, i);
    this.acks[t] = (...a) => {
      this.io.clearTimeoutFn(o), r.apply(this, [null, ...a]);
    };
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(t, ...r) {
    const n = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
    return new Promise((i, o) => {
      r.push((a, c) => n ? a ? o(a) : i(c) : i(a)), this.emit(t, ...r);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(t) {
    let r;
    typeof t[t.length - 1] == "function" && (r = t.pop());
    const n = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    t.push((i, ...o) => n !== this._queue[0] ? void 0 : (i !== null ? n.tryCount > this._opts.retries && (this._queue.shift(), r && r(i)) : (this._queue.shift(), r && r(null, ...o)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const r = this._queue[0];
    r.pending && !t || (r.pending = !0, r.tryCount++, this.flags = r.flags, this.emit.apply(this, r.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(t) {
    t.nsp = this.nsp, this.io._packet(t);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((t) => {
      this._sendConnectPacket(t);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(t) {
    this.packet({
      type: fe.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t) : t
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(t, r) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", t, r);
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case fe.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case fe.EVENT:
        case fe.BINARY_EVENT:
          this.onevent(t);
          break;
        case fe.ACK:
        case fe.BINARY_ACK:
          this.onack(t);
          break;
        case fe.DISCONNECT:
          this.ondisconnect();
          break;
        case fe.CONNECT_ERROR:
          this.destroy();
          const n = new Error(t.data.message);
          n.data = t.data.data, this.emitReserved("connect_error", n);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(t) {
    const r = t.data || [];
    t.id != null && r.push(this.ack(t.id)), this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const r = this._anyListeners.slice();
      for (const n of r)
        n.apply(this, t);
    }
    super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(t) {
    const r = this;
    let n = !1;
    return function(...i) {
      n || (n = !0, r.packet({
        type: fe.ACK,
        id: t,
        data: i
      }));
    };
  }
  /**
   * Called upon a server acknowlegement.
   *
   * @param packet
   * @private
   */
  onack(t) {
    const r = this.acks[t.id];
    typeof r == "function" && (r.apply(this, t.data), delete this.acks[t.id]);
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(t, r) {
    this.id = t, this.recovered = r && this._pid === r, this._pid = r, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)), this.receiveBuffer = [], this.sendBuffer.forEach((t) => {
      this.notifyOutgoingListeners(t), this.packet(t);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: fe.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(t) {
    return this.flags.compress = t, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(t) {
    return this.flags.timeout = t, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(t) {
    if (!this._anyListeners)
      return this;
    if (t) {
      const r = this._anyListeners;
      for (let n = 0; n < r.length; n++)
        if (t === r[n])
          return r.splice(n, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners)
      return this;
    if (t) {
      const r = this._anyOutgoingListeners;
      for (let n = 0; n < r.length; n++)
        if (t === r[n])
          return r.splice(n, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const r = this._anyOutgoingListeners.slice();
      for (const n of r)
        n.apply(this, t.data);
    }
  }
}
function kt(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
kt.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), r = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + r : e - r;
  }
  return Math.min(e, this.max) | 0;
};
kt.prototype.reset = function() {
  this.attempts = 0;
};
kt.prototype.setMin = function(e) {
  this.ms = e;
};
kt.prototype.setMax = function(e) {
  this.max = e;
};
kt.prototype.setJitter = function(e) {
  this.jitter = e;
};
class x0 extends we {
  constructor(t, r) {
    var n;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (r = t, t = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, Vr(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((n = r.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new kt({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = t;
    const i = r.parser || Ic;
    this.encoder = new i.Encoder(), this.decoder = new i.Decoder(), this._autoConnect = r.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this);
  }
  reconnectionDelay(t) {
    var r;
    return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (r = this.backoff) === null || r === void 0 || r.setMin(t), this);
  }
  randomizationFactor(t) {
    var r;
    return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (r = this.backoff) === null || r === void 0 || r.setJitter(t), this);
  }
  reconnectionDelayMax(t) {
    var r;
    return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (r = this.backoff) === null || r === void 0 || r.setMax(t), this);
  }
  timeout(t) {
    return arguments.length ? (this._timeout = t, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(t) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new di(this.uri, this.opts);
    const r = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = qe(r, "open", function() {
      n.onopen(), t && t();
    }), o = qe(r, "error", (a) => {
      n.cleanup(), n._readyState = "closed", this.emitReserved("error", a), t ? t(a) : n.maybeReconnectOnOpen();
    });
    if (this._timeout !== !1) {
      const a = this._timeout;
      a === 0 && i();
      const c = this.setTimeoutFn(() => {
        i(), r.close(), r.emit("error", new Error("timeout"));
      }, a);
      this.opts.autoUnref && c.unref(), this.subs.push(function() {
        clearTimeout(c);
      });
    }
    return this.subs.push(i), this.subs.push(o), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(t) {
    return this.open(t);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const t = this.engine;
    this.subs.push(qe(t, "ping", this.onping.bind(this)), qe(t, "data", this.ondata.bind(this)), qe(t, "error", this.onerror.bind(this)), qe(t, "close", this.onclose.bind(this)), qe(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (r) {
      this.onclose("parse error", r);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(t) {
    hi(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(t) {
    this.emitReserved("error", t);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(t, r) {
    let n = this.nsps[t];
    return n ? this._autoConnect && !n.active && n.connect() : (n = new pi(this, t, r), this.nsps[t] = n), n;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(t) {
    const r = Object.keys(this.nsps);
    for (const n of r)
      if (this.nsps[n].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(t) {
    const r = this.encoder.encode(t);
    for (let n = 0; n < r.length; n++)
      this.engine.write(r[n], t.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((t) => t()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close();
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called upon engine close.
   *
   * @private
   */
  onclose(t, r) {
    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, r), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const r = this.backoff.duration();
      this._reconnecting = !0;
      const n = this.setTimeoutFn(() => {
        t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open((i) => {
          i ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", i)) : t.onreconnect();
        }));
      }, r);
      this.opts.autoUnref && n.unref(), this.subs.push(function() {
        clearTimeout(n);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const t = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t);
  }
}
const Ft = {};
function c0(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const r = Sc(e, t.path || "/socket.io"), n = r.source, i = r.id, o = r.path, a = Ft[i] && o in Ft[i].nsps, c = t.forceNew || t["force new connection"] || t.multiplex === !1 || a;
  let l;
  return c ? l = new x0(n, t) : (Ft[i] || (Ft[i] = new x0(n, t)), l = Ft[i]), r.query && !t.query && (t.query = r.queryKey), l.socket(r.path, t);
}
Object.assign(c0, {
  Manager: x0,
  Socket: pi,
  io: c0,
  connect: c0
});
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ct = 9e15, lt = 1e9, b0 = "0123456789abcdef", zr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", $r = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", g0 = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -Ct,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Ct,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, xi, it, oe = !0, Yr = "[DecimalError] ", ut = Yr + "Invalid argument: ", bi = Yr + "Precision limit exceeded", gi = Yr + "crypto unavailable", mi = "[object Decimal]", ke = Math.floor, Ee = Math.pow, Pc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Mc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Hc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, yi = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, We = 1e7, te = 7, zc = 9007199254740991, $c = zr.length - 1, m0 = $r.length - 1, V = { toStringTag: mi };
V.absoluteValue = V.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ee(e);
};
V.ceil = function() {
  return ee(new this.constructor(this), this.e + 1, 2);
};
V.clampedTo = V.clamp = function(e, t) {
  var r, n = this, i = n.constructor;
  if (e = new i(e), t = new i(t), !e.s || !t.s)
    return new i(NaN);
  if (e.gt(t))
    throw Error(ut + t);
  return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
};
V.comparedTo = V.cmp = function(e) {
  var t, r, n, i, o = this, a = o.d, c = (e = new o.constructor(e)).d, l = o.s, s = e.s;
  if (!a || !c)
    return !l || !s ? NaN : l !== s ? l : a === c ? 0 : !a ^ l < 0 ? 1 : -1;
  if (!a[0] || !c[0])
    return a[0] ? l : c[0] ? -s : 0;
  if (l !== s)
    return l;
  if (o.e !== e.e)
    return o.e > e.e ^ l < 0 ? 1 : -1;
  for (n = a.length, i = c.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a[t] !== c[t])
      return a[t] > c[t] ^ l < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
};
V.cosine = V.cos = function() {
  var e, t, r = this, n = r.constructor;
  return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + te, n.rounding = 1, r = qc(n, Si(n, r)), n.precision = e, n.rounding = t, ee(it == 2 || it == 3 ? r.neg() : r, e, t, !0)) : new n(1) : new n(NaN);
};
V.cubeRoot = V.cbrt = function() {
  var e, t, r, n, i, o, a, c, l, s, u = this, h = u.constructor;
  if (!u.isFinite() || u.isZero())
    return new h(u);
  for (oe = !1, o = u.s * Ee(u.s * u, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Be(u.d), e = u.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Ee(r, 1 / 3), e = ke((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new h(r), n.s = u.s) : n = new h(o.toString()), a = (e = h.precision) + 3; ; )
    if (c = n, l = c.times(c).times(c), s = l.plus(u), n = pe(s.plus(u).times(c), s.plus(l), a + 2, 1), Be(c.d).slice(0, a) === (r = Be(n.d)).slice(0, a))
      if (r = r.slice(a - 3, a + 1), r == "9999" || !i && r == "4999") {
        if (!i && (ee(c, e + 1, 0), c.times(c).times(c).eq(u))) {
          n = c;
          break;
        }
        a += 4, i = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (ee(n, e + 1, 1), t = !n.times(n).times(n).eq(u));
        break;
      }
  return oe = !0, ee(n, e, h.rounding, t);
};
V.decimalPlaces = V.dp = function() {
  var e, t = this.d, r = NaN;
  if (t) {
    if (e = t.length - 1, r = (e - ke(this.e / te)) * te, e = t[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
V.dividedBy = V.div = function(e) {
  return pe(this, new this.constructor(e));
};
V.dividedToIntegerBy = V.divToInt = function(e) {
  var t = this, r = t.constructor;
  return ee(pe(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
V.equals = V.eq = function(e) {
  return this.cmp(e) === 0;
};
V.floor = function() {
  return ee(new this.constructor(this), this.e + 1, 3);
};
V.greaterThan = V.gt = function(e) {
  return this.cmp(e) > 0;
};
V.greaterThanOrEqualTo = V.gte = function(e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
V.hyperbolicCosine = V.cosh = function() {
  var e, t, r, n, i, o = this, a = o.constructor, c = new a(1);
  if (!o.isFinite())
    return new a(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return c;
  r = a.precision, n = a.rounding, a.precision = r + Math.max(o.e, o.sd()) + 4, a.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / Zr(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = Bt(a, 1, o.times(t), new a(1), !0);
  for (var l, s = e, u = new a(8); s--; )
    l = o.times(o), o = c.minus(l.times(u.minus(l.times(u))));
  return ee(o, a.precision = r, a.rounding = n, !0);
};
V.hyperbolicSine = V.sinh = function() {
  var e, t, r, n, i = this, o = i.constructor;
  if (!i.isFinite() || i.isZero())
    return new o(i);
  if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
    i = Bt(o, 2, i, i, !0);
  else {
    e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / Zr(5, e)), i = Bt(o, 2, i, i, !0);
    for (var a, c = new o(5), l = new o(16), s = new o(20); e--; )
      a = i.times(i), i = i.times(c.plus(a.times(l.times(a).plus(s))));
  }
  return o.precision = t, o.rounding = r, ee(i, t, r, !0);
};
V.hyperbolicTangent = V.tanh = function() {
  var e, t, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, pe(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
};
V.inverseCosine = V.acos = function() {
  var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, o = r.rounding;
  return n !== -1 ? n === 0 ? t.isNeg() ? Ue(r, i, o) : new r(0) : new r(NaN) : t.isZero() ? Ue(r, i + 4, o).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = Ue(r, i + 4, o).times(0.5), r.precision = i, r.rounding = o, e.minus(t));
};
V.inverseHyperbolicCosine = V.acosh = function() {
  var e, t, r = this, n = r.constructor;
  return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, oe = !1, r = r.times(r).minus(1).sqrt().plus(r), oe = !0, n.precision = e, n.rounding = t, r.ln()) : new n(r);
};
V.inverseHyperbolicSine = V.asinh = function() {
  var e, t, r = this, n = r.constructor;
  return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, oe = !1, r = r.times(r).plus(1).sqrt().plus(r), oe = !0, n.precision = e, n.rounding = t, r.ln());
};
V.inverseHyperbolicTangent = V.atanh = function() {
  var e, t, r, n, i = this, o = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? ee(new o(i), e, t, !0) : (o.precision = r = n - i.e, i = pe(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
};
V.inverseSine = V.asin = function() {
  var e, t, r, n, i = this, o = i.constructor;
  return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = Ue(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
};
V.inverseTangent = V.atan = function() {
  var e, t, r, n, i, o, a, c, l, s = this, u = s.constructor, h = u.precision, f = u.rounding;
  if (s.isFinite()) {
    if (s.isZero())
      return new u(s);
    if (s.abs().eq(1) && h + 4 <= m0)
      return a = Ue(u, h + 4, f).times(0.25), a.s = s.s, a;
  } else {
    if (!s.s)
      return new u(NaN);
    if (h + 4 <= m0)
      return a = Ue(u, h + 4, f).times(0.5), a.s = s.s, a;
  }
  for (u.precision = c = h + 10, u.rounding = 1, r = Math.min(28, c / te + 2 | 0), e = r; e; --e)
    s = s.div(s.times(s).plus(1).sqrt().plus(1));
  for (oe = !1, t = Math.ceil(c / te), n = 1, l = s.times(s), a = new u(s), i = s; e !== -1; )
    if (i = i.times(l), o = a.minus(i.div(n += 2)), i = i.times(l), a = o.plus(i.div(n += 2)), a.d[t] !== void 0)
      for (e = t; a.d[e] === o.d[e] && e--; )
        ;
  return r && (a = a.times(2 << r - 1)), oe = !0, ee(a, u.precision = h, u.rounding = f, !0);
};
V.isFinite = function() {
  return !!this.d;
};
V.isInteger = V.isInt = function() {
  return !!this.d && ke(this.e / te) > this.d.length - 2;
};
V.isNaN = function() {
  return !this.s;
};
V.isNegative = V.isNeg = function() {
  return this.s < 0;
};
V.isPositive = V.isPos = function() {
  return this.s > 0;
};
V.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
V.lessThan = V.lt = function(e) {
  return this.cmp(e) < 0;
};
V.lessThanOrEqualTo = V.lte = function(e) {
  return this.cmp(e) < 1;
};
V.logarithm = V.log = function(e) {
  var t, r, n, i, o, a, c, l, s = this, u = s.constructor, h = u.precision, f = u.rounding, p = 5;
  if (e == null)
    e = new u(10), t = !0;
  else {
    if (e = new u(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
      return new u(NaN);
    t = e.eq(10);
  }
  if (r = s.d, s.s < 0 || !r || !r[0] || s.eq(1))
    return new u(r && !r[0] ? -1 / 0 : s.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (t)
    if (r.length > 1)
      o = !0;
    else {
      for (i = r[0]; i % 10 === 0; )
        i /= 10;
      o = i !== 1;
    }
  if (oe = !1, c = h + p, a = ft(s, c), n = t ? qr(u, c + 10) : ft(e, c), l = pe(a, n, c, 1), $t(l.d, i = h, f))
    do
      if (c += 10, a = ft(s, c), n = t ? qr(u, c + 10) : ft(e, c), l = pe(a, n, c, 1), !o) {
        +Be(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = ee(l, h + 1, 0));
        break;
      }
    while ($t(l.d, i += 10, f));
  return oe = !0, ee(l, h, f);
};
V.minus = V.sub = function(e) {
  var t, r, n, i, o, a, c, l, s, u, h, f, p = this, g = p.constructor;
  if (e = new g(e), !p.d || !e.d)
    return !p.s || !e.s ? e = new g(NaN) : p.d ? e.s = -e.s : e = new g(e.d || p.s !== e.s ? p : NaN), e;
  if (p.s != e.s)
    return e.s = -e.s, p.plus(e);
  if (s = p.d, f = e.d, c = g.precision, l = g.rounding, !s[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (s[0])
      e = new g(p);
    else
      return new g(l === 3 ? -0 : 0);
    return oe ? ee(e, c, l) : e;
  }
  if (r = ke(e.e / te), u = ke(p.e / te), s = s.slice(), o = u - r, o) {
    for (h = o < 0, h ? (t = s, o = -o, a = f.length) : (t = f, r = u, a = s.length), n = Math.max(Math.ceil(c / te), a) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o; n--; )
      t.push(0);
    t.reverse();
  } else {
    for (n = s.length, a = f.length, h = n < a, h && (a = n), n = 0; n < a; n++)
      if (s[n] != f[n]) {
        h = s[n] < f[n];
        break;
      }
    o = 0;
  }
  for (h && (t = s, s = f, f = t, e.s = -e.s), a = s.length, n = f.length - a; n > 0; --n)
    s[a++] = 0;
  for (n = f.length; n > o; ) {
    if (s[--n] < f[n]) {
      for (i = n; i && s[--i] === 0; )
        s[i] = We - 1;
      --s[i], s[n] += We;
    }
    s[n] -= f[n];
  }
  for (; s[--a] === 0; )
    s.pop();
  for (; s[0] === 0; s.shift())
    --r;
  return s[0] ? (e.d = s, e.e = Kr(s, r), oe ? ee(e, c, l) : e) : new g(l === 3 ? -0 : 0);
};
V.modulo = V.mod = function(e) {
  var t, r = this, n = r.constructor;
  return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? ee(new n(r), n.precision, n.rounding) : (oe = !1, n.modulo == 9 ? (t = pe(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = pe(r, e, 0, n.modulo, 1), t = t.times(e), oe = !0, r.minus(t));
};
V.naturalExponential = V.exp = function() {
  return y0(this);
};
V.naturalLogarithm = V.ln = function() {
  return ft(this);
};
V.negated = V.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ee(e);
};
V.plus = V.add = function(e) {
  var t, r, n, i, o, a, c, l, s, u, h = this, f = h.constructor;
  if (e = new f(e), !h.d || !e.d)
    return !h.s || !e.s ? e = new f(NaN) : h.d || (e = new f(e.d || h.s === e.s ? h : NaN)), e;
  if (h.s != e.s)
    return e.s = -e.s, h.minus(e);
  if (s = h.d, u = e.d, c = f.precision, l = f.rounding, !s[0] || !u[0])
    return u[0] || (e = new f(h)), oe ? ee(e, c, l) : e;
  if (o = ke(h.e / te), n = ke(e.e / te), s = s.slice(), i = o - n, i) {
    for (i < 0 ? (r = s, i = -i, a = u.length) : (r = u, n = o, a = s.length), o = Math.ceil(c / te), a = o > a ? o + 1 : a + 1, i > a && (i = a, r.length = 1), r.reverse(); i--; )
      r.push(0);
    r.reverse();
  }
  for (a = s.length, i = u.length, a - i < 0 && (i = a, r = u, u = s, s = r), t = 0; i; )
    t = (s[--i] = s[i] + u[i] + t) / We | 0, s[i] %= We;
  for (t && (s.unshift(t), ++n), a = s.length; s[--a] == 0; )
    s.pop();
  return e.d = s, e.e = Kr(s, n), oe ? ee(e, c, l) : e;
};
V.precision = V.sd = function(e) {
  var t, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(ut + e);
  return r.d ? (t = _i(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
};
V.round = function() {
  var e = this, t = e.constructor;
  return ee(new t(e), e.e + 1, t.rounding);
};
V.sine = V.sin = function() {
  var e, t, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + te, n.rounding = 1, r = Wc(n, Si(n, r)), n.precision = e, n.rounding = t, ee(it > 2 ? r.neg() : r, e, t, !0)) : new n(NaN);
};
V.squareRoot = V.sqrt = function() {
  var e, t, r, n, i, o, a = this, c = a.d, l = a.e, s = a.s, u = a.constructor;
  if (s !== 1 || !c || !c[0])
    return new u(!s || s < 0 && (!c || c[0]) ? NaN : c ? a : 1 / 0);
  for (oe = !1, s = Math.sqrt(+a), s == 0 || s == 1 / 0 ? (t = Be(c), (t.length + l) % 2 == 0 && (t += "0"), s = Math.sqrt(t), l = ke((l + 1) / 2) - (l < 0 || l % 2), s == 1 / 0 ? t = "5e" + l : (t = s.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l), n = new u(t)) : n = new u(s.toString()), r = (l = u.precision) + 3; ; )
    if (o = n, n = o.plus(pe(a, o, r + 2, 1)).times(0.5), Be(o.d).slice(0, r) === (t = Be(n.d)).slice(0, r))
      if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
        if (!i && (ee(o, l + 1, 0), o.times(o).eq(a))) {
          n = o;
          break;
        }
        r += 4, i = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (ee(n, l + 1, 1), e = !n.times(n).eq(a));
        break;
      }
  return oe = !0, ee(n, l, u.rounding, e);
};
V.tangent = V.tan = function() {
  var e, t, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = pe(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, ee(it == 2 || it == 4 ? r.neg() : r, e, t, !0)) : new n(NaN);
};
V.times = V.mul = function(e) {
  var t, r, n, i, o, a, c, l, s, u = this, h = u.constructor, f = u.d, p = (e = new h(e)).d;
  if (e.s *= u.s, !f || !f[0] || !p || !p[0])
    return new h(!e.s || f && !f[0] && !p || p && !p[0] && !f ? NaN : !f || !p ? e.s / 0 : e.s * 0);
  for (r = ke(u.e / te) + ke(e.e / te), l = f.length, s = p.length, l < s && (o = f, f = p, p = o, a = l, l = s, s = a), o = [], a = l + s, n = a; n--; )
    o.push(0);
  for (n = s; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      c = o[i] + p[n] * f[i - n - 1] + t, o[i--] = c % We | 0, t = c / We | 0;
    o[i] = (o[i] + t) % We | 0;
  }
  for (; !o[--a]; )
    o.pop();
  return t ? ++r : o.shift(), e.d = o, e.e = Kr(o, r), oe ? ee(e, h.precision, h.rounding) : e;
};
V.toBinary = function(e, t) {
  return R0(this, 2, e, t);
};
V.toDecimalPlaces = V.toDP = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (Le(e, 0, lt), t === void 0 ? t = n.rounding : Le(t, 0, 8), ee(r, e + r.e + 1, t));
};
V.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = Xe(n, !0) : (Le(e, 0, lt), t === void 0 ? t = i.rounding : Le(t, 0, 8), n = ee(new i(n), e + 1, t), r = Xe(n, !0, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
};
V.toFixed = function(e, t) {
  var r, n, i = this, o = i.constructor;
  return e === void 0 ? r = Xe(i) : (Le(e, 0, lt), t === void 0 ? t = o.rounding : Le(t, 0, 8), n = ee(new o(i), e + i.e + 1, t), r = Xe(n, !1, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
};
V.toFraction = function(e) {
  var t, r, n, i, o, a, c, l, s, u, h, f, p = this, g = p.d, _ = p.constructor;
  if (!g)
    return new _(p);
  if (s = r = new _(1), n = l = new _(0), t = new _(n), o = t.e = _i(g) - p.e - 1, a = o % te, t.d[0] = Ee(10, a < 0 ? te + a : a), e == null)
    e = o > 0 ? t : s;
  else {
    if (c = new _(e), !c.isInt() || c.lt(s))
      throw Error(ut + c);
    e = c.gt(t) ? o > 0 ? t : s : c;
  }
  for (oe = !1, c = new _(Be(g)), u = _.precision, _.precision = o = g.length * te * 2; h = pe(c, t, 0, 1, 1), i = r.plus(h.times(n)), i.cmp(e) != 1; )
    r = n, n = i, i = s, s = l.plus(h.times(i)), l = i, i = t, t = c.minus(h.times(i)), c = i;
  return i = pe(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(s)), r = r.plus(i.times(n)), l.s = s.s = p.s, f = pe(s, n, o, 1).minus(p).abs().cmp(pe(l, r, o, 1).minus(p).abs()) < 1 ? [s, n] : [l, r], _.precision = u, oe = !0, f;
};
V.toHexadecimal = V.toHex = function(e, t) {
  return R0(this, 16, e, t);
};
V.toNearest = function(e, t) {
  var r = this, n = r.constructor;
  if (r = new n(r), e == null) {
    if (!r.d)
      return r;
    e = new n(1), t = n.rounding;
  } else {
    if (e = new n(e), t === void 0 ? t = n.rounding : Le(t, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (oe = !1, r = pe(r, e, 0, t, 1).times(e), oe = !0, ee(r)) : (e.s = r.s, r = e), r;
};
V.toNumber = function() {
  return +this;
};
V.toOctal = function(e, t) {
  return R0(this, 8, e, t);
};
V.toPower = V.pow = function(e) {
  var t, r, n, i, o, a, c = this, l = c.constructor, s = +(e = new l(e));
  if (!c.d || !e.d || !c.d[0] || !e.d[0])
    return new l(Ee(+c, s));
  if (c = new l(c), c.eq(1))
    return c;
  if (n = l.precision, o = l.rounding, e.eq(1))
    return ee(c, n, o);
  if (t = ke(e.e / te), t >= e.d.length - 1 && (r = s < 0 ? -s : s) <= zc)
    return i = wi(l, c, r, n), e.s < 0 ? new l(1).div(i) : ee(i, n, o);
  if (a = c.s, a < 0) {
    if (t < e.d.length - 1)
      return new l(NaN);
    if (e.d[t] & 1 || (a = 1), c.e == 0 && c.d[0] == 1 && c.d.length == 1)
      return c.s = a, c;
  }
  return r = Ee(+c, s), t = r == 0 || !isFinite(r) ? ke(s * (Math.log("0." + Be(c.d)) / Math.LN10 + c.e + 1)) : new l(r + "").e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? a / 0 : 0) : (oe = !1, l.rounding = c.s = 1, r = Math.min(12, (t + "").length), i = y0(e.times(ft(c, n + r)), n), i.d && (i = ee(i, n + 5, 1), $t(i.d, n, o) && (t = n + 10, i = ee(y0(e.times(ft(c, t + r)), t), t + 5, 1), +Be(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = ee(i, n + 1, 0)))), i.s = a, oe = !0, l.rounding = o, ee(i, n, o));
};
V.toPrecision = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = Xe(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (Le(e, 1, lt), t === void 0 ? t = i.rounding : Le(t, 0, 8), n = ee(new i(n), e, t), r = Xe(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
};
V.toSignificantDigits = V.toSD = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (Le(e, 1, lt), t === void 0 ? t = n.rounding : Le(t, 0, 8)), ee(new n(r), e, t);
};
V.toString = function() {
  var e = this, t = e.constructor, r = Xe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
V.truncated = V.trunc = function() {
  return ee(new this.constructor(this), this.e + 1, 1);
};
V.valueOf = V.toJSON = function() {
  var e = this, t = e.constructor, r = Xe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Be(e) {
  var t, r, n, i = e.length - 1, o = "", a = e[0];
  if (i > 0) {
    for (o += a, t = 1; t < i; t++)
      n = e[t] + "", r = te - n.length, r && (o += ct(r)), o += n;
    a = e[t], n = a + "", r = te - n.length, r && (o += ct(r));
  } else if (a === 0)
    return "0";
  for (; a % 10 === 0; )
    a /= 10;
  return o + a;
}
function Le(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(ut + e);
}
function $t(e, t, r, n) {
  var i, o, a, c;
  for (o = e[0]; o >= 10; o /= 10)
    --t;
  return --t < 0 ? (t += te, i = 0) : (i = Math.ceil((t + 1) / te), t %= te), o = Ee(10, te - t), c = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? c = c / 100 | 0 : t == 1 && (c = c / 10 | 0), a = r < 4 && c == 99999 || r > 3 && c == 49999 || c == 5e4 || c == 0) : a = (r < 4 && c + 1 == o || r > 3 && c + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == Ee(10, t - 2) - 1 || (c == o / 2 || c == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? c = c / 1e3 | 0 : t == 1 ? c = c / 100 | 0 : t == 2 && (c = c / 10 | 0), a = (n || r < 4) && c == 9999 || !n && r > 3 && c == 4999) : a = ((n || r < 4) && c + 1 == o || !n && r > 3 && c + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == Ee(10, t - 3) - 1, a;
}
function ir(e, t, r) {
  for (var n, i = [0], o, a = 0, c = e.length; a < c; ) {
    for (o = i.length; o--; )
      i[o] *= t;
    for (i[0] += b0.indexOf(e.charAt(a++)), n = 0; n < i.length; n++)
      i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
  }
  return i.reverse();
}
function qc(e, t) {
  var r, n, i;
  if (t.isZero())
    return t;
  n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / Zr(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = Bt(e, 1, t.times(i), new e(1));
  for (var o = r; o--; ) {
    var a = t.times(t);
    t = a.times(a).minus(a).times(8).plus(1);
  }
  return e.precision -= r, t;
}
var pe = function() {
  function e(n, i, o) {
    var a, c = 0, l = n.length;
    for (n = n.slice(); l--; )
      a = n[l] * i + c, n[l] = a % o | 0, c = a / o | 0;
    return c && n.unshift(c), n;
  }
  function t(n, i, o, a) {
    var c, l;
    if (o != a)
      l = o > a ? 1 : -1;
    else
      for (c = l = 0; c < o; c++)
        if (n[c] != i[c]) {
          l = n[c] > i[c] ? 1 : -1;
          break;
        }
    return l;
  }
  function r(n, i, o, a) {
    for (var c = 0; o--; )
      n[o] -= c, c = n[o] < i[o] ? 1 : 0, n[o] = c * a + n[o] - i[o];
    for (; !n[0] && n.length > 1; )
      n.shift();
  }
  return function(n, i, o, a, c, l) {
    var s, u, h, f, p, g, _, S, O, y, d, x, m, C, A, T, I, E, w, k, N = n.constructor, M = n.s == i.s ? 1 : -1, F = n.d, P = i.d;
    if (!F || !F[0] || !P || !P[0])
      return new N(
        // Return NaN if either NaN, or both Infinity or 0.
        !n.s || !i.s || (F ? P && F[0] == P[0] : !P) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          F && F[0] == 0 || !P ? M * 0 : M / 0
        )
      );
    for (l ? (p = 1, u = n.e - i.e) : (l = We, p = te, u = ke(n.e / p) - ke(i.e / p)), w = P.length, I = F.length, O = new N(M), y = O.d = [], h = 0; P[h] == (F[h] || 0); h++)
      ;
    if (P[h] > (F[h] || 0) && u--, o == null ? (C = o = N.precision, a = N.rounding) : c ? C = o + (n.e - i.e) + 1 : C = o, C < 0)
      y.push(1), g = !0;
    else {
      if (C = C / p + 2 | 0, h = 0, w == 1) {
        for (f = 0, P = P[0], C++; (h < I || f) && C--; h++)
          A = f * l + (F[h] || 0), y[h] = A / P | 0, f = A % P | 0;
        g = f || h < I;
      } else {
        for (f = l / (P[0] + 1) | 0, f > 1 && (P = e(P, f, l), F = e(F, f, l), w = P.length, I = F.length), T = w, d = F.slice(0, w), x = d.length; x < w; )
          d[x++] = 0;
        k = P.slice(), k.unshift(0), E = P[0], P[1] >= l / 2 && ++E;
        do
          f = 0, s = t(P, d, w, x), s < 0 ? (m = d[0], w != x && (m = m * l + (d[1] || 0)), f = m / E | 0, f > 1 ? (f >= l && (f = l - 1), _ = e(P, f, l), S = _.length, x = d.length, s = t(_, d, S, x), s == 1 && (f--, r(_, w < S ? k : P, S, l))) : (f == 0 && (s = f = 1), _ = P.slice()), S = _.length, S < x && _.unshift(0), r(d, _, x, l), s == -1 && (x = d.length, s = t(P, d, w, x), s < 1 && (f++, r(d, w < x ? k : P, x, l))), x = d.length) : s === 0 && (f++, d = [0]), y[h++] = f, s && d[0] ? d[x++] = F[T] || 0 : (d = [F[T]], x = 1);
        while ((T++ < I || d[0] !== void 0) && C--);
        g = d[0] !== void 0;
      }
      y[0] || y.shift();
    }
    if (p == 1)
      O.e = u, xi = g;
    else {
      for (h = 1, f = y[0]; f >= 10; f /= 10)
        h++;
      O.e = h + u * p - 1, ee(O, c ? o + O.e + 1 : o, a, g);
    }
    return O;
  };
}();
function ee(e, t, r, n) {
  var i, o, a, c, l, s, u, h, f, p = e.constructor;
  e:
    if (t != null) {
      if (h = e.d, !h)
        return e;
      for (i = 1, c = h[0]; c >= 10; c /= 10)
        i++;
      if (o = t - i, o < 0)
        o += te, a = t, u = h[f = 0], l = u / Ee(10, i - a - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / te), c = h.length, f >= c)
        if (n) {
          for (; c++ <= f; )
            h.push(0);
          u = l = 0, i = 1, o %= te, a = o - te + 1;
        } else
          break e;
      else {
        for (u = c = h[f], i = 1; c >= 10; c /= 10)
          i++;
        o %= te, a = o - te + i, l = a < 0 ? 0 : u / Ee(10, i - a - 1) % 10 | 0;
      }
      if (n = n || t < 0 || h[f + 1] !== void 0 || (a < 0 ? u : u % Ee(10, i - a - 1)), s = r < 4 ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? a > 0 ? u / Ee(10, i - a) : 0 : h[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !h[0])
        return h.length = 0, s ? (t -= e.e + 1, h[0] = Ee(10, (te - t % te) % te), e.e = -t || 0) : h[0] = e.e = 0, e;
      if (o == 0 ? (h.length = f, c = 1, f--) : (h.length = f + 1, c = Ee(10, te - o), h[f] = a > 0 ? (u / Ee(10, i - a) % Ee(10, a) | 0) * c : 0), s)
        for (; ; )
          if (f == 0) {
            for (o = 1, a = h[0]; a >= 10; a /= 10)
              o++;
            for (a = h[0] += c, c = 1; a >= 10; a /= 10)
              c++;
            o != c && (e.e++, h[0] == We && (h[0] = 1));
            break;
          } else {
            if (h[f] += c, h[f] != We)
              break;
            h[f--] = 0, c = 1;
          }
      for (o = h.length; h[--o] === 0; )
        h.pop();
    }
  return oe && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e;
}
function Xe(e, t, r) {
  if (!e.isFinite())
    return Ci(e);
  var n, i = e.e, o = Be(e.d), a = o.length;
  return t ? (r && (n = r - a) > 0 ? o = o.charAt(0) + "." + o.slice(1) + ct(n) : a > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + ct(-i - 1) + o, r && (n = r - a) > 0 && (o += ct(n))) : i >= a ? (o += ct(i + 1 - a), r && (n = r - i - 1) > 0 && (o = o + "." + ct(n))) : ((n = i + 1) < a && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - a) > 0 && (i + 1 === a && (o += "."), o += ct(n))), o;
}
function Kr(e, t) {
  var r = e[0];
  for (t *= te; r >= 10; r /= 10)
    t++;
  return t;
}
function qr(e, t, r) {
  if (t > $c)
    throw oe = !0, r && (e.precision = r), Error(bi);
  return ee(new e(zr), t, 1, !0);
}
function Ue(e, t, r) {
  if (t > m0)
    throw Error(bi);
  return ee(new e($r), t, r, !0);
}
function _i(e) {
  var t = e.length - 1, r = t * te + 1;
  if (t = e[t], t) {
    for (; t % 10 == 0; t /= 10)
      r--;
    for (t = e[0]; t >= 10; t /= 10)
      r++;
  }
  return r;
}
function ct(e) {
  for (var t = ""; e--; )
    t += "0";
  return t;
}
function wi(e, t, r, n) {
  var i, o = new e(1), a = Math.ceil(n / te + 4);
  for (oe = !1; ; ) {
    if (r % 2 && (o = o.times(t), Fn(o.d, a) && (i = !0)), r = ke(r / 2), r === 0) {
      r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
      break;
    }
    t = t.times(t), Fn(t.d, a);
  }
  return oe = !0, o;
}
function In(e) {
  return e.d[e.d.length - 1] & 1;
}
function Ei(e, t, r) {
  for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
    if (n = new e(t[o]), n.s)
      i[r](n) && (i = n);
    else {
      i = n;
      break;
    }
  return i;
}
function y0(e, t) {
  var r, n, i, o, a, c, l, s = 0, u = 0, h = 0, f = e.constructor, p = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (t == null ? (oe = !1, l = g) : l = t, c = new f(0.03125); e.e > -2; )
    e = e.times(c), h += 5;
  for (n = Math.log(Ee(2, h)) / Math.LN10 * 2 + 5 | 0, l += n, r = o = a = new f(1), f.precision = l; ; ) {
    if (o = ee(o.times(e), l, 1), r = r.times(++u), c = a.plus(pe(o, r, l, 1)), Be(c.d).slice(0, l) === Be(a.d).slice(0, l)) {
      for (i = h; i--; )
        a = ee(a.times(a), l, 1);
      if (t == null)
        if (s < 3 && $t(a.d, l - n, p, s))
          f.precision = l += 10, r = o = c = new f(1), u = 0, s++;
        else
          return ee(a, f.precision = g, p, oe = !0);
      else
        return f.precision = g, a;
    }
    a = c;
  }
}
function ft(e, t) {
  var r, n, i, o, a, c, l, s, u, h, f, p = 1, g = 10, _ = e, S = _.d, O = _.constructor, y = O.rounding, d = O.precision;
  if (_.s < 0 || !S || !S[0] || !_.e && S[0] == 1 && S.length == 1)
    return new O(S && !S[0] ? -1 / 0 : _.s != 1 ? NaN : S ? 0 : _);
  if (t == null ? (oe = !1, u = d) : u = t, O.precision = u += g, r = Be(S), n = r.charAt(0), Math.abs(o = _.e) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      _ = _.times(e), r = Be(_.d), n = r.charAt(0), p++;
    o = _.e, n > 1 ? (_ = new O("0." + r), o++) : _ = new O(n + "." + r.slice(1));
  } else
    return s = qr(O, u + 2, d).times(o + ""), _ = ft(new O(n + "." + r.slice(1)), u - g).plus(s), O.precision = d, t == null ? ee(_, d, y, oe = !0) : _;
  for (h = _, l = a = _ = pe(_.minus(1), _.plus(1), u, 1), f = ee(_.times(_), u, 1), i = 3; ; ) {
    if (a = ee(a.times(f), u, 1), s = l.plus(pe(a, new O(i), u, 1)), Be(s.d).slice(0, u) === Be(l.d).slice(0, u))
      if (l = l.times(2), o !== 0 && (l = l.plus(qr(O, u + 2, d).times(o + ""))), l = pe(l, new O(p), u, 1), t == null)
        if ($t(l.d, u - g, y, c))
          O.precision = u += g, s = a = _ = pe(h.minus(1), h.plus(1), u, 1), f = ee(_.times(_), u, 1), i = c = 1;
        else
          return ee(l, O.precision = d, y, oe = !0);
      else
        return O.precision = d, l;
    l = s, i += 2;
  }
}
function Ci(e) {
  return String(e.s * e.s / 0);
}
function _0(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++)
    ;
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i)
    ;
  if (t = t.slice(n, i), t) {
    if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % te, r < 0 && (n += te), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= te; n < i; )
        e.d.push(+t.slice(n, n += te));
      t = t.slice(n), n = te - t.length;
    } else
      n -= i;
    for (; n--; )
      t += "0";
    e.d.push(+t), oe && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function Uc(e, t) {
  var r, n, i, o, a, c, l, s, u;
  if (t.indexOf("_") > -1) {
    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), yi.test(t))
      return _0(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Mc.test(t))
    r = 16, t = t.toLowerCase();
  else if (Pc.test(t))
    r = 2;
  else if (Hc.test(t))
    r = 8;
  else
    throw Error(ut + t);
  for (o = t.search(/p/i), o > 0 ? (l = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), a = o >= 0, n = e.constructor, a && (t = t.replace(".", ""), c = t.length, o = c - o, i = wi(n, new n(r), o, o * 2)), s = ir(t, r, We), u = s.length - 1, o = u; s[o] === 0; --o)
    s.pop();
  return o < 0 ? new n(e.s * 0) : (e.e = Kr(s, u), e.d = s, oe = !1, a && (e = pe(e, i, c * 4)), l && (e = e.times(Math.abs(l) < 54 ? Ee(2, l) : qt.pow(2, l))), oe = !0, e);
}
function Wc(e, t) {
  var r, n = t.d.length;
  if (n < 3)
    return t.isZero() ? t : Bt(e, 2, t, t);
  r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / Zr(5, r)), t = Bt(e, 2, t, t);
  for (var i, o = new e(5), a = new e(16), c = new e(20); r--; )
    i = t.times(t), t = t.times(o.plus(i.times(a.times(i).minus(c))));
  return t;
}
function Bt(e, t, r, n, i) {
  var o, a, c, l, s = e.precision, u = Math.ceil(s / te);
  for (oe = !1, l = r.times(r), c = new e(n); ; ) {
    if (a = pe(c.times(l), new e(t++ * t++), s, 1), c = i ? n.plus(a) : n.minus(a), n = pe(a.times(l), new e(t++ * t++), s, 1), a = c.plus(n), a.d[u] !== void 0) {
      for (o = u; a.d[o] === c.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = c, c = n, n = a, a = o;
  }
  return oe = !0, a.d.length = u + 1, a;
}
function Zr(e, t) {
  for (var r = e; --t; )
    r *= e;
  return r;
}
function Si(e, t) {
  var r, n = t.s < 0, i = Ue(e, e.precision, 1), o = i.times(0.5);
  if (t = t.abs(), t.lte(o))
    return it = n ? 4 : 1, t;
  if (r = t.divToInt(i), r.isZero())
    it = n ? 3 : 2;
  else {
    if (t = t.minus(r.times(i)), t.lte(o))
      return it = In(r) ? n ? 2 : 3 : n ? 4 : 1, t;
    it = In(r) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return t.minus(i).abs();
}
function R0(e, t, r, n) {
  var i, o, a, c, l, s, u, h, f, p = e.constructor, g = r !== void 0;
  if (g ? (Le(r, 1, lt), n === void 0 ? n = p.rounding : Le(n, 0, 8)) : (r = p.precision, n = p.rounding), !e.isFinite())
    u = Ci(e);
  else {
    for (u = Xe(e), a = u.indexOf("."), g ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, a >= 0 && (u = u.replace(".", ""), f = new p(1), f.e = u.length - a, f.d = ir(Xe(f), 10, i), f.e = f.d.length), h = ir(u, 10, i), o = l = h.length; h[--l] == 0; )
      h.pop();
    if (!h[0])
      u = g ? "0p+0" : "0";
    else {
      if (a < 0 ? o-- : (e = new p(e), e.d = h, e.e = o, e = pe(e, f, r, n, 0, i), h = e.d, o = e.e, s = xi), a = h[r], c = i / 2, s = s || h[r + 1] !== void 0, s = n < 4 ? (a !== void 0 || s) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : a > c || a === c && (n === 4 || s || n === 6 && h[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), h.length = r, s)
        for (; ++h[--r] > i - 1; )
          h[r] = 0, r || (++o, h.unshift(1));
      for (l = h.length; !h[l - 1]; --l)
        ;
      for (a = 0, u = ""; a < l; a++)
        u += b0.charAt(h[a]);
      if (g) {
        if (l > 1)
          if (t == 16 || t == 8) {
            for (a = t == 16 ? 4 : 3, --l; l % a; l++)
              u += "0";
            for (h = ir(u, i, t), l = h.length; !h[l - 1]; --l)
              ;
            for (a = 1, u = "1."; a < l; a++)
              u += b0.charAt(h[a]);
          } else
            u = u.charAt(0) + "." + u.slice(1);
        u = u + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; )
          u = "0" + u;
        u = "0." + u;
      } else if (++o > l)
        for (o -= l; o--; )
          u += "0";
      else
        o < l && (u = u.slice(0, o) + "." + u.slice(o));
    }
    u = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + u;
  }
  return e.s < 0 ? "-" + u : u;
}
function Fn(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function Vc(e) {
  return new this(e).abs();
}
function Yc(e) {
  return new this(e).acos();
}
function Kc(e) {
  return new this(e).acosh();
}
function Zc(e, t) {
  return new this(e).plus(t);
}
function Gc(e) {
  return new this(e).asin();
}
function Xc(e) {
  return new this(e).asinh();
}
function jc(e) {
  return new this(e).atan();
}
function Qc(e) {
  return new this(e).atanh();
}
function Jc(e, t) {
  e = new this(e), t = new this(t);
  var r, n = this.precision, i = this.rounding, o = n + 4;
  return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = Ue(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? Ue(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = Ue(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(pe(e, t, o, 1)), t = Ue(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(pe(e, t, o, 1)), r;
}
function ef(e) {
  return new this(e).cbrt();
}
function tf(e) {
  return ee(e = new this(e), e.e + 1, 2);
}
function rf(e, t, r) {
  return new this(e).clamp(t, r);
}
function nf(e) {
  if (!e || typeof e != "object")
    throw Error(Yr + "Object expected");
  var t, r, n, i = e.defaults === !0, o = [
    "precision",
    1,
    lt,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Ct,
    0,
    "toExpPos",
    0,
    Ct,
    "maxE",
    0,
    Ct,
    "minE",
    -Ct,
    0,
    "modulo",
    0,
    9
  ];
  for (t = 0; t < o.length; t += 3)
    if (r = o[t], i && (this[r] = g0[r]), (n = e[r]) !== void 0)
      if (ke(n) === n && n >= o[t + 1] && n <= o[t + 2])
        this[r] = n;
      else
        throw Error(ut + r + ": " + n);
  if (r = "crypto", i && (this[r] = g0[r]), (n = e[r]) !== void 0)
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(gi);
      else
        this[r] = !1;
    else
      throw Error(ut + r + ": " + n);
  return this;
}
function of(e) {
  return new this(e).cos();
}
function sf(e) {
  return new this(e).cosh();
}
function Bi(e) {
  var t, r, n;
  function i(o) {
    var a, c, l, s = this;
    if (!(s instanceof i))
      return new i(o);
    if (s.constructor = i, Pn(o)) {
      s.s = o.s, oe ? !o.d || o.e > i.maxE ? (s.e = NaN, s.d = null) : o.e < i.minE ? (s.e = 0, s.d = [0]) : (s.e = o.e, s.d = o.d.slice()) : (s.e = o.e, s.d = o.d ? o.d.slice() : o.d);
      return;
    }
    if (l = typeof o, l === "number") {
      if (o === 0) {
        s.s = 1 / o < 0 ? -1 : 1, s.e = 0, s.d = [0];
        return;
      }
      if (o < 0 ? (o = -o, s.s = -1) : s.s = 1, o === ~~o && o < 1e7) {
        for (a = 0, c = o; c >= 10; c /= 10)
          a++;
        oe ? a > i.maxE ? (s.e = NaN, s.d = null) : a < i.minE ? (s.e = 0, s.d = [0]) : (s.e = a, s.d = [o]) : (s.e = a, s.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (s.s = NaN), s.e = NaN, s.d = null;
        return;
      }
      return _0(s, o.toString());
    } else if (l !== "string")
      throw Error(ut + o);
    return (c = o.charCodeAt(0)) === 45 ? (o = o.slice(1), s.s = -1) : (c === 43 && (o = o.slice(1)), s.s = 1), yi.test(o) ? _0(s, o) : Uc(s, o);
  }
  if (i.prototype = V, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = nf, i.clone = Bi, i.isDecimal = Pn, i.abs = Vc, i.acos = Yc, i.acosh = Kc, i.add = Zc, i.asin = Gc, i.asinh = Xc, i.atan = jc, i.atanh = Qc, i.atan2 = Jc, i.cbrt = ef, i.ceil = tf, i.clamp = rf, i.cos = of, i.cosh = sf, i.div = af, i.exp = cf, i.floor = ff, i.hypot = uf, i.ln = lf, i.log = hf, i.log10 = vf, i.log2 = df, i.max = pf, i.min = xf, i.mod = bf, i.mul = gf, i.pow = mf, i.random = yf, i.round = _f, i.sign = wf, i.sin = Ef, i.sinh = Cf, i.sqrt = Sf, i.sub = Bf, i.sum = kf, i.tan = Af, i.tanh = Rf, i.trunc = Nf, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; )
      e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function af(e, t) {
  return new this(e).div(t);
}
function cf(e) {
  return new this(e).exp();
}
function ff(e) {
  return ee(e = new this(e), e.e + 1, 3);
}
function uf() {
  var e, t, r = new this(0);
  for (oe = !1, e = 0; e < arguments.length; )
    if (t = new this(arguments[e++]), t.d)
      r.d && (r = r.plus(t.times(t)));
    else {
      if (t.s)
        return oe = !0, new this(1 / 0);
      r = t;
    }
  return oe = !0, r.sqrt();
}
function Pn(e) {
  return e instanceof qt || e && e.toStringTag === mi || !1;
}
function lf(e) {
  return new this(e).ln();
}
function hf(e, t) {
  return new this(e).log(t);
}
function df(e) {
  return new this(e).log(2);
}
function vf(e) {
  return new this(e).log(10);
}
function pf() {
  return Ei(this, arguments, "lt");
}
function xf() {
  return Ei(this, arguments, "gt");
}
function bf(e, t) {
  return new this(e).mod(t);
}
function gf(e, t) {
  return new this(e).mul(t);
}
function mf(e, t) {
  return new this(e).pow(t);
}
function yf(e) {
  var t, r, n, i, o = 0, a = new this(1), c = [];
  if (e === void 0 ? e = this.precision : Le(e, 1, lt), n = Math.ceil(e / te), this.crypto)
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
        i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : c[o++] = i % 1e7;
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes(n *= 4); o < n; )
        i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (c.push(i % 1e7), o += 4);
      o = n / 4;
    } else
      throw Error(gi);
  else
    for (; o < n; )
      c[o++] = Math.random() * 1e7 | 0;
  for (n = c[--o], e %= te, n && e && (i = Ee(10, te - e), c[o] = (n / i | 0) * i); c[o] === 0; o--)
    c.pop();
  if (o < 0)
    r = 0, c = [0];
  else {
    for (r = -1; c[0] === 0; r -= te)
      c.shift();
    for (n = 1, i = c[0]; i >= 10; i /= 10)
      n++;
    n < te && (r -= te - n);
  }
  return a.e = r, a.d = c, a;
}
function _f(e) {
  return ee(e = new this(e), e.e + 1, this.rounding);
}
function wf(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Ef(e) {
  return new this(e).sin();
}
function Cf(e) {
  return new this(e).sinh();
}
function Sf(e) {
  return new this(e).sqrt();
}
function Bf(e, t) {
  return new this(e).sub(t);
}
function kf() {
  var e = 0, t = arguments, r = new this(t[e]);
  for (oe = !1; r.s && ++e < t.length; )
    r = r.plus(t[e]);
  return oe = !0, ee(r, this.precision, this.rounding);
}
function Af(e) {
  return new this(e).tan();
}
function Rf(e) {
  return new this(e).tanh();
}
function Nf(e) {
  return ee(e = new this(e), e.e + 1, 1);
}
V[Symbol.for("nodejs.util.inspect.custom")] = V.toString;
V[Symbol.toStringTag] = "Decimal";
var qt = V.constructor = Bi(g0);
zr = new qt(zr);
$r = new qt($r);
var Mn = {}, Df = {
  get exports() {
    return Mn;
  },
  set exports(e) {
    Mn = e;
  }
};
/*!
 * Waves v0.7.6
 * http://fian.my.id/Waves
 *
 * Copyright 2014-2018 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */
(function(e, t) {
  (function(r, n) {
    e.exports = n.call(r);
  })(re, function() {
    var r = r || {}, n = document.querySelectorAll.bind(document), i = Object.prototype.toString, o = "ontouchstart" in window;
    function a(d) {
      return d !== null && d === d.window;
    }
    function c(d) {
      return a(d) ? d : d.nodeType === 9 && d.defaultView;
    }
    function l(d) {
      var x = typeof d;
      return x === "function" || x === "object" && !!d;
    }
    function s(d) {
      return l(d) && d.nodeType > 0;
    }
    function u(d) {
      var x = i.call(d);
      return x === "[object String]" ? n(d) : l(d) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(x) && d.hasOwnProperty("length") ? d : s(d) ? [d] : [];
    }
    function h(d) {
      var x, m, C = { top: 0, left: 0 }, A = d && d.ownerDocument;
      return x = A.documentElement, typeof d.getBoundingClientRect < "u" && (C = d.getBoundingClientRect()), m = c(A), {
        top: C.top + m.pageYOffset - x.clientTop,
        left: C.left + m.pageXOffset - x.clientLeft
      };
    }
    function f(d) {
      var x = "";
      for (var m in d)
        d.hasOwnProperty(m) && (x += m + ":" + d[m] + ";");
      return x;
    }
    var p = {
      // Effect duration
      duration: 750,
      // Effect delay (check for scroll before showing effect)
      delay: 200,
      show: function(d, x, m) {
        if (d.button === 2)
          return !1;
        x = x || this;
        var C = document.createElement("div");
        C.className = "waves-ripple waves-rippling", x.appendChild(C);
        var A = h(x), T = 0, I = 0;
        "touches" in d && d.touches.length ? (T = d.touches[0].pageY - A.top, I = d.touches[0].pageX - A.left) : (T = d.pageY - A.top, I = d.pageX - A.left), I = I >= 0 ? I : 0, T = T >= 0 ? T : 0;
        var E = "scale(" + x.clientWidth / 100 * 3 + ")", w = "translate(0,0)";
        m && (w = "translate(" + m.x + "px, " + m.y + "px)"), C.setAttribute("data-hold", Date.now()), C.setAttribute("data-x", I), C.setAttribute("data-y", T), C.setAttribute("data-scale", E), C.setAttribute("data-translate", w);
        var k = {
          top: T + "px",
          left: I + "px"
        };
        C.classList.add("waves-notransition"), C.setAttribute("style", f(k)), C.classList.remove("waves-notransition"), k["-webkit-transform"] = E + " " + w, k["-moz-transform"] = E + " " + w, k["-ms-transform"] = E + " " + w, k["-o-transform"] = E + " " + w, k.transform = E + " " + w, k.opacity = "1";
        var N = d.type === "mousemove" ? 2500 : p.duration;
        k["-webkit-transition-duration"] = N + "ms", k["-moz-transition-duration"] = N + "ms", k["-o-transition-duration"] = N + "ms", k["transition-duration"] = N + "ms", C.setAttribute("style", f(k));
      },
      hide: function(d, x) {
        x = x || this;
        for (var m = x.getElementsByClassName("waves-rippling"), C = 0, A = m.length; C < A; C++)
          _(d, x, m[C]);
        o && (x.removeEventListener("touchend", p.hide), x.removeEventListener("touchcancel", p.hide)), x.removeEventListener("mouseup", p.hide), x.removeEventListener("mouseleave", p.hide);
      }
    }, g = {
      // Wrap <input> tag so it can perform the effect
      input: function(d) {
        var x = d.parentNode;
        if (!(x.tagName.toLowerCase() === "i" && x.classList.contains("waves-effect"))) {
          var m = document.createElement("i");
          m.className = d.className + " waves-input-wrapper", d.className = "waves-button-input", x.replaceChild(m, d), m.appendChild(d);
          var C = window.getComputedStyle(d, null), A = C.color, T = C.backgroundColor;
          m.setAttribute("style", "color:" + A + ";background:" + T), d.setAttribute("style", "background-color:rgba(0,0,0,0);");
        }
      },
      // Wrap <img> tag so it can perform the effect
      img: function(d) {
        var x = d.parentNode;
        if (!(x.tagName.toLowerCase() === "i" && x.classList.contains("waves-effect"))) {
          var m = document.createElement("i");
          x.replaceChild(m, d), m.appendChild(d);
        }
      }
    };
    function _(d, x, m) {
      if (m) {
        m.classList.remove("waves-rippling");
        var C = m.getAttribute("data-x"), A = m.getAttribute("data-y"), T = m.getAttribute("data-scale"), I = m.getAttribute("data-translate"), E = Date.now() - Number(m.getAttribute("data-hold")), w = 350 - E;
        w < 0 && (w = 0), d.type === "mousemove" && (w = 150);
        var k = d.type === "mousemove" ? 2500 : p.duration;
        setTimeout(function() {
          var N = {
            top: A + "px",
            left: C + "px",
            opacity: "0",
            // Duration
            "-webkit-transition-duration": k + "ms",
            "-moz-transition-duration": k + "ms",
            "-o-transition-duration": k + "ms",
            "transition-duration": k + "ms",
            "-webkit-transform": T + " " + I,
            "-moz-transform": T + " " + I,
            "-ms-transform": T + " " + I,
            "-o-transform": T + " " + I,
            transform: T + " " + I
          };
          m.setAttribute("style", f(N)), setTimeout(function() {
            try {
              x.removeChild(m);
            } catch {
              return !1;
            }
          }, k);
        }, w);
      }
    }
    var S = {
      /* uses an integer rather than bool so there's no issues with
       * needing to clear timeouts if another touch event occurred
       * within the 500ms. Cannot mouseup between touchstart and
       * touchend, nor in the 500ms after touchend. */
      touches: 0,
      allowEvent: function(d) {
        var x = !0;
        return /^(mousedown|mousemove)$/.test(d.type) && S.touches && (x = !1), x;
      },
      registerEvent: function(d) {
        var x = d.type;
        x === "touchstart" ? S.touches += 1 : /^(touchend|touchcancel)$/.test(x) && setTimeout(function() {
          S.touches && (S.touches -= 1);
        }, 500);
      }
    };
    function O(d) {
      if (S.allowEvent(d) === !1)
        return null;
      for (var x = null, m = d.target || d.srcElement; m.parentElement; ) {
        if (!(m instanceof SVGElement) && m.classList.contains("waves-effect")) {
          x = m;
          break;
        }
        m = m.parentElement;
      }
      return x;
    }
    function y(d) {
      var x = O(d);
      if (x !== null) {
        if (x.disabled || x.getAttribute("disabled") || x.classList.contains("disabled"))
          return;
        if (S.registerEvent(d), d.type === "touchstart" && p.delay) {
          var m = !1, C = setTimeout(function() {
            C = null, p.show(d, x);
          }, p.delay), A = function(E) {
            C && (clearTimeout(C), C = null, p.show(d, x)), m || (m = !0, p.hide(E, x)), I();
          }, T = function(E) {
            C && (clearTimeout(C), C = null), A(E), I();
          };
          x.addEventListener("touchmove", T, !1), x.addEventListener("touchend", A, !1), x.addEventListener("touchcancel", A, !1);
          var I = function() {
            x.removeEventListener("touchmove", T), x.removeEventListener("touchend", A), x.removeEventListener("touchcancel", A);
          };
        } else
          p.show(d, x), o && (x.addEventListener("touchend", p.hide, !1), x.addEventListener("touchcancel", p.hide, !1)), x.addEventListener("mouseup", p.hide, !1), x.addEventListener("mouseleave", p.hide, !1);
      }
    }
    return r.init = function(d) {
      var x = document.body;
      d = d || {}, "duration" in d && (p.duration = d.duration), "delay" in d && (p.delay = d.delay), o && (x.addEventListener("touchstart", y, !1), x.addEventListener("touchcancel", S.registerEvent, !1), x.addEventListener("touchend", S.registerEvent, !1)), x.addEventListener("mousedown", y, !1);
    }, r.attach = function(d, x) {
      d = u(d), i.call(x) === "[object Array]" && (x = x.join(" ")), x = x ? " " + x : "";
      for (var m, C, A = 0, T = d.length; A < T; A++)
        m = d[A], C = m.tagName.toLowerCase(), ["input", "img"].indexOf(C) !== -1 && (g[C](m), m = m.parentElement), m.className.indexOf("waves-effect") === -1 && (m.className += " waves-effect" + x);
    }, r.ripple = function(d, x) {
      d = u(d);
      var m = d.length;
      if (x = x || {}, x.wait = x.wait || 0, x.position = x.position || null, m) {
        for (var C, A, T, I = {}, E = 0, w = {
          type: "mousedown",
          button: 1
        }, k = function(M, F) {
          return function() {
            p.hide(M, F);
          };
        }; E < m; E++)
          if (C = d[E], A = x.position || {
            x: C.clientWidth / 2,
            y: C.clientHeight / 2
          }, T = h(C), I.x = T.left + A.x, I.y = T.top + A.y, w.pageX = I.x, w.pageY = I.y, p.show(w, C), x.wait >= 0 && x.wait !== null) {
            var N = {
              type: "mouseup",
              button: 1
            };
            setTimeout(k(N, C), x.wait);
          }
      }
    }, r.calm = function(d) {
      d = u(d);
      for (var x = {
        type: "mouseup",
        button: 1
      }, m = 0, C = d.length; m < C; m++)
        p.hide(x, d[m]);
    }, r.displayEffect = function(d) {
      console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), r.init(d);
    }, r;
  });
})(Df);
const ie = { lunarInfo: [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560], solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"], Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"], Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"], solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"], sTermInfo: ["9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722"], nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"], nStr2: ["初", "十", "廿", "卅"], nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"], lunarFestival: [{ month: "正", day: "初一", name: "春节" }, { month: "正", day: "十五", name: "元宵节" }, { month: "二", day: "初二", name: "龙抬头" }, { month: "五", day: "初五", name: "端午节" }, { month: "七", day: "初七", name: "七夕节" }, { month: "七", day: "十五", name: "中元节" }, { month: "八", day: "十五", name: "中秋节" }, { month: "九", day: "初九", name: "重阳节" }, { month: "腊", day: "除夕", name: "除夕" }], solarFestival: [{ month: 1, day: 1, name: "元旦节" }, { month: 3, day: 8, name: "妇女节" }, { month: 3, day: 12, name: "植树节" }, { month: 4, day: 5, name: "清明节" }, { month: 5, day: 1, name: "劳动节" }, { month: 5, day: 4, name: "青年节" }, { month: 6, day: 1, name: "儿童节" }, { month: 7, day: 1, name: "建党节" }, { month: 8, day: 1, name: "建军节" }, { month: 9, day: 10, name: "教师节" }, { month: 10, day: 1, name: "国庆节" }], lYearDays: function(e) {
  var t, r = 348;
  for (t = 32768; t > 8; t >>= 1)
    r += ie.lunarInfo[e - 1900] & t ? 1 : 0;
  return r + ie.leapDays(e);
}, leapMonth: function(e) {
  return 15 & ie.lunarInfo[e - 1900];
}, leapDays: function(e) {
  return ie.leapMonth(e) ? 65536 & ie.lunarInfo[e - 1900] ? 30 : 29 : 0;
}, monthDays: function(e, t) {
  return t > 12 || t < 1 ? -1 : ie.lunarInfo[e - 1900] & 65536 >> t ? 30 : 29;
}, solarDays: function(e, t) {
  if (t > 12 || t < 1)
    return -1;
  var r = t - 1;
  return r == 1 ? e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 29 : 28 : ie.solarMonth[r];
}, toGanZhiYear: function(e) {
  var t = (e - 3) % 10, r = (e - 3) % 12;
  return t == 0 && (t = 10), r == 0 && (r = 12), ie.Gan[t - 1] + ie.Zhi[r - 1];
}, toAstro: function(e, t) {
  return "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2 * e - (t < [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22][e - 1] ? 2 : 0), 2) + "座";
}, toGanZhi: function(e) {
  return ie.Gan[e % 10] + ie.Zhi[e % 12];
}, getTerm: function(e, t) {
  if (e < 1900 || e > 2100 || t < 1 || t > 24)
    return -1;
  var r = ie.sTermInfo[e - 1900], n = [parseInt("0x" + r.substr(0, 5)).toString(), parseInt("0x" + r.substr(5, 5)).toString(), parseInt("0x" + r.substr(10, 5)).toString(), parseInt("0x" + r.substr(15, 5)).toString(), parseInt("0x" + r.substr(20, 5)).toString(), parseInt("0x" + r.substr(25, 5)).toString()], i = [n[0].substr(0, 1), n[0].substr(1, 2), n[0].substr(3, 1), n[0].substr(4, 2), n[1].substr(0, 1), n[1].substr(1, 2), n[1].substr(3, 1), n[1].substr(4, 2), n[2].substr(0, 1), n[2].substr(1, 2), n[2].substr(3, 1), n[2].substr(4, 2), n[3].substr(0, 1), n[3].substr(1, 2), n[3].substr(3, 1), n[3].substr(4, 2), n[4].substr(0, 1), n[4].substr(1, 2), n[4].substr(3, 1), n[4].substr(4, 2), n[5].substr(0, 1), n[5].substr(1, 2), n[5].substr(3, 1), n[5].substr(4, 2)];
  return parseInt(i[t - 1]);
}, toChinaMonth: function(e) {
  if (e > 12 || e < 1)
    return -1;
  var t = ie.nStr3[e - 1];
  return t += "月";
}, toChinaDay: function(e) {
  var t;
  switch (e) {
    case 10:
      t = "初十";
      break;
    case 20:
      t = "二十";
      break;
    case 30:
      t = "三十";
      break;
    default:
      t = ie.nStr2[Math.floor(e / 10)], t += ie.nStr1[e % 10];
  }
  return t;
}, getAnimal: function(e) {
  return ie.Animals[(e - 4) % 12];
}, getFestival: (e, t, r, n) => {
  let i = null;
  const o = parseInt(e + "");
  return i = o ? ie.solarFestival.find((a) => a.month === o && a.day == t) : ie.lunarFestival.find((a) => `${a.month}月` === e && a.day === t), i;
}, solar2lunar: function(e, t, r) {
  if (e < 1900 || e > 2100 || e == 1900 && t == 1 && r < 31)
    return -1;
  if (e)
    n = new Date(e, parseInt(t + "") - 1, r);
  else
    var n = /* @__PURE__ */ new Date();
  var i, o = 0, a = (e = n.getFullYear(), t = n.getMonth() + 1, r = n.getDate(), (Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()) - Date.UTC(1900, 0, 31)) / 864e5);
  for (i = 1900; i < 2101 && a > 0; i++)
    a -= o = ie.lYearDays(i);
  a < 0 && (a += o, i--);
  var c = /* @__PURE__ */ new Date(), l = !1;
  c.getFullYear() == e && c.getMonth() + 1 == t && c.getDate() == r && (l = !0);
  var s = n.getDay(), u = ie.nStr1[s];
  s == 0 && (s = 7);
  var h = i, f = ie.leapMonth(i), p = !1;
  for (i = 1; i < 13 && a > 0; i++)
    f > 0 && i == f + 1 && p == 0 ? (--i, p = !0, o = ie.leapDays(h)) : o = ie.monthDays(h, i), p == 1 && i == f + 1 && (p = !1), a -= o;
  a == 0 && f > 0 && i == f + 1 && (p ? p = !1 : (p = !0, --i)), a < 0 && (a += o, --i);
  var g = i, _ = a + 1, S = t - 1, O = ie.toGanZhiYear(h), y = ie.getTerm(h, 2 * t - 1), d = ie.getTerm(h, 2 * t), x = ie.toGanZhi(12 * (e - 1900) + t + 11);
  r >= y && (x = ie.toGanZhi(12 * (e - 1900) + t + 12));
  var m = !1, C = null;
  y == r && (m = !0, C = ie.solarTerm[2 * t - 2]), d == r && (m = !0, C = ie.solarTerm[2 * t - 1]);
  var A = Date.UTC(e, S, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, T = ie.toGanZhi(A + r - 1), I = ie.toAstro(t, r);
  const E = ie.toChinaMonth(g), w = ie.toChinaDay(_);
  return { lYear: h, lMonth: g, lDay: _, Animal: ie.getAnimal(h), IMonthCn: (p ? "闰" : "") + E, IDayCn: w, cYear: e, cMonth: t, cDay: r, gzYear: O, gzMonth: x, gzDay: T, isToday: l, isLeap: p, nWeek: s, ncWeek: "星期" + u, isTerm: m, Term: C, astro: I, festcn: ie.getFestival(E, w, e, t), fest: ie.getFestival(t, r, e) };
}, lunar2solar: function(e, t, r, n = !0) {
  n = !!n;
  var i = ie.leapMonth(e);
  if (ie.leapDays(e), n && i != t || e == 2100 && t == 12 && r > 1 || e == 1900 && t == 1 && r < 31)
    return -1;
  var o = ie.monthDays(e, t), a = o;
  if (n && (a = ie.leapDays(e)), e < 1900 || e > 2100 || r > a)
    return -1;
  for (var c = 0, l = 1900; l < e; l++)
    c += ie.lYearDays(l);
  var s = 0, u = !1;
  for (l = 1; l < t; l++)
    s = ie.leapMonth(e), u || s <= l && s > 0 && (c += ie.leapDays(e), u = !0), c += ie.monthDays(e, l);
  n && (c += o);
  var h = Date.UTC(1900, 1, 30, 0, 0, 0), f = new Date(864e5 * (c + r - 31) + h), p = f.getUTCFullYear(), g = f.getUTCMonth() + 1, _ = f.getUTCDate();
  return ie.solar2lunar(p, g, _);
} };
ie.lunar2solar;
function Tf(e, t) {
  const { target: r = "__blank", noopener: n = !0, noreferrer: i = !0 } = t || {}, o = [];
  n && o.push("noopener=yes"), i && o.push("noreferrer=yes"), window.open(e, r, o.join(","));
}
for (let e = 0; e <= 15; e++)
  e.toString(16);
function ki(e) {
  const t = e.split(","), r = t[0].match(/:(.*?);/)[1], n = atob(t[1]);
  let i = n.length;
  const o = new Uint8Array(i);
  for (; i--; )
    o[i] = n.charCodeAt(i);
  return new Blob([o], { type: r });
}
function Hn(e, t) {
  return new Promise((r, n) => {
    let i = document.createElement("CANVAS");
    const o = i.getContext("2d"), a = new Image();
    a.crossOrigin = "", a.onload = function() {
      if (!i || !o)
        return n();
      i.height = a.height, i.width = a.width, o.drawImage(a, 0, 0);
      const c = i.toDataURL(t || "image/png");
      i = null, r(c);
    }, a.src = e;
  });
}
function zn(e, t, r, n) {
  Ai(ki(e), t, r, n);
}
function Ai(e, t, r, n) {
  const i = new Blob(n !== void 0 ? [n, e] : [e], { type: r || "application/octet-stream" }), o = window.URL.createObjectURL(i), a = document.createElement("a");
  a.style.display = "none", a.href = o, a.setAttribute("download", t), a.download === void 0 && a.setAttribute("target", "_blank"), document.body.appendChild(a), a.click(), document.body.removeChild(a), window.URL.revokeObjectURL(o);
}
let xt = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof globalThis == "object" && globalThis.globalThis === globalThis ? globalThis : void 0;
function f0(e, t, r) {
  const n = new XMLHttpRequest();
  n.open("GET", e), n.responseType = "blob", n.onload = function() {
    Ri(n.response, t, r);
  }, n.onerror = function() {
    console.error("could not download file");
  }, n.send();
}
function $n(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function tr(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const r = document.createEvent("MouseEvents");
    r.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(r);
  }
}
const w0 = xt.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), Ri = (e, t, r, n) => {
  if ("download" in HTMLAnchorElement.prototype && !w0) {
    const o = xt.URL || xt.webkitURL, a = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    t = t || (e == null ? void 0 : e.name) || "download", a.download = t, a.rel = "noopener", typeof e == "string" ? (a.href = e, a.origin !== location.origin ? $n(a.href) ? f0(e, t, r) : (a.target = "_blank") && tr(a) : tr(a)) : (a.href = o.createObjectURL(e), setTimeout(function() {
      o.revokeObjectURL(a.href);
    }, 4e4), setTimeout(function() {
      tr(a);
    }, 0));
  } else if (navigator != null && navigator.msSaveOrOpenBlob)
    if (t = t || e.name || "download", typeof e == "string")
      if ($n(e))
        f0(e, t, r);
      else {
        var i = document.createElement("a");
        i.href = e, i.target = "_blank", setTimeout(function() {
          tr(i);
        });
      }
    else
      navigator == null || navigator.msSaveOrOpenBlob(function(o, a) {
        return a === void 0 ? a = { autoBom: !1 } : typeof a != "object" && (console.warn("第二个参数类型必须是object"), a = { autoBom: !a }), a.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o == null ? void 0 : o.type) ? new Blob([String.fromCharCode(65279), o], { type: o == null ? void 0 : o.type }) : o;
      }(e, r), t);
  else {
    if ((n = n || open("", "_blank")) && (n.document.title = n.document.body.innerText = "downloading..."), typeof e == "string")
      return f0(e, t, r);
    const o = e.type === "application/octet-stream", a = /constructor/i.test(xt.HTMLElement) || xt.safari, c = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((c || o && a || w0) && typeof FileReader < "u") {
      const l = new FileReader();
      l.onloadend = function() {
        let s = l.result;
        s = c ? s : s == null ? void 0 : s.replace(/^data:[^;]*;/, "data:attachment/file;"), n ? n.location.href = s : location.href = s, n = null;
      }, l.readAsDataURL(e);
    } else {
      const l = xt.URL || xt.webkitURL, s = l.createObjectURL(e);
      n ? n.location = s : location.href = s, n = null, setTimeout(function() {
        l.revokeObjectURL(s);
      }, 4e4);
    }
  }
};
var Of = Object.freeze({ __proto__: null, base64ToBlob: ki, urlToBase64: Hn, downloadByOnlineUrl: function(e, t, r, n) {
  Hn(e).then((i) => {
    zn(i, t, r, n);
  });
}, downloadByBase64: zn, downloadByData: Ai, downloadByUrl: function({ url: e, target: t = "_blank", fileName: r }) {
  const n = window.navigator.userAgent.toLowerCase().indexOf("chrome") > -1, i = window.navigator.userAgent.toLowerCase().indexOf("safari") > -1;
  if (/(iP)/g.test(window.navigator.userAgent))
    return console.error("Your browser does not support download!"), !1;
  if (n || i) {
    const o = document.createElement("a");
    if (o.href = e, o.target = t, o.download !== void 0 && (o.download = r || e.substring(e.lastIndexOf("/") + 1, e.length)), document.createEvent) {
      const a = document.createEvent("MouseEvents");
      return a.initEvent("click", !0, !0), o.dispatchEvent(a), !0;
    }
  }
  return e.indexOf("?") === -1 && (e += "?download"), Tf(e, { target: t }), !0;
}, isMacOSWebView: w0, saveAs: Ri });
window.socketMap = /* @__PURE__ */ new Map();
qt.set({ precision: 14 });
const Lf = po, qn = (e) => e % 1 === 0 ? e.toString() : e.toFixed(2), If = { class: "ik-flie-list" }, Ff = { class: "name" }, Pf = { key: 1 }, Mf = ["src"], Hf = { class: "file-icon" }, zf = { class: "file-name-loading" }, $f = { class: "file-name" }, qf = { key: 0 }, Uf = {
  key: 0,
  class: "file-size"
}, Wf = { class: "name" }, Vf = { class: "file-name-loading" }, Yf = { class: "file-name" }, Kf = { class: "file-size" }, Zf = { class: "operate-btn" }, Gf = /* @__PURE__ */ E0({
  __name: "index",
  props: {
    // 显示的文字
    title: {
      type: String,
      default: "上传文件"
    },
    // 上传地址
    action: {
      type: String,
      default: ""
    },
    // 设置上传的请求头部
    headers: {
      type: Object,
      default: () => ({})
    },
    // 预览地址
    loadUrl: {
      type: String,
      default: ""
    },
    // 最多上传数量
    limit: {
      type: Number,
      default: 1
    },
    // 单个文件大小 MB
    size: {
      type: Number,
      default: 50
    },
    // 允许的格式
    accept: {
      type: String,
      default: "*"
    },
    // 支持多选
    multiple: {
      type: Boolean,
      default: !0
    },
    // 显示提示
    tip: {
      type: Boolean,
      default: !1
    },
    // 提示文字
    tipText: {
      type: String,
      default: ""
    },
    // 提示文字
    limitText: {
      type: String,
      default: ""
    },
    // 回显列表数据格式： [{url: '', name: ''}, {url: '', name: ''}]
    modelValue: {
      type: Array,
      default: () => []
    },
    defaultFileds: {
      type: Object,
      default: () => ({
        name: "name",
        url: "url",
        suffix: "suffix"
      })
    },
    // 预览模式 - 为true时不显示上传元素
    preview: {
      type: Boolean,
      default: !1
    },
    // 自定义替图标数据
    customIconData: {
      type: Object,
      default: () => ({})
    },
    // 自定义图标映射字段
    customIconFields: {
      type: Object,
      default: () => ({
        type: "type",
        icon: "icon"
      })
    },
    // 在线预览地址
    onlinePreviewUrl: {
      type: String,
      default: ""
    }
  },
  emits: ["delete", "exceed", "success", "error", "outSize"],
  setup(e, { emit: t }) {
    const r = e, i = {
      ...{
        name: "name",
        url: "url",
        suffix: "suffix"
      },
      ...r.defaultFileds
    }, o = Un(() => r.size), a = nt(null), c = nt(null), l = nt(r.modelValue);
    Wn(
      () => r.modelValue,
      (w) => {
        l.value = w;
      },
      { deep: !0 }
    );
    const s = nt([]), u = nt(!1), h = nt(!1), f = nt(null), p = (w, k) => {
      l.value = Lf.cloneDeep(k);
    }, g = (w) => {
      const k = w.size / 1024 / 1024;
      if (!(k < o.value)) {
        t("outSize"), F0({
          message: `上传文件大小(${k.toFixed(4)}MB)超出允许最大值(${r.size}MB)，请重新选择`,
          type: "warning",
          showClose: !0,
          duration: 5e3
        });
        const M = l.value.findIndex((F) => F.uid === w.uid);
        return l.value.splice(M, 1), !1;
      }
      return !0;
    }, _ = () => !1, S = (w, k) => {
      var N, M;
      w.status = "ready", k !== void 0 && s.value.splice(k, 1), (N = a.value) == null || N.handleStart(w.raw), (M = a.value) == null || M.submit();
    }, O = (w, k) => {
      var P, $;
      const N = l.value.length, M = r.limit - N;
      let F = 0;
      for (; F < M && F < w.length; )
        (P = a.value) == null || P.handleStart(w[F]), ($ = a.value) == null || $.submit(), F++;
      F0({
        message: (r == null ? void 0 : r.limitText) || `最大可上传${r.limit}个文件，已忽略超出文件`,
        type: "warning",
        showClose: !0,
        duration: 5e3
      }), t("exceed", w);
    }, y = (w, k, N) => {
      t("success", w, k, N);
    }, d = (w, k, N) => {
      s.value.push(k), t("error", w, k, N);
    }, x = (w) => {
      w && I(w) === "video" || w && I(w) === "image" ? (f.value = {
        ...w,
        url: w[i.url].startsWith("http") ? w[i.url] : `${r.loadUrl}${w[i.url]}`
      }, u.value = !0) : window.open(r.loadUrl + w[i.url]);
    }, m = (w) => {
      Of.downloadByOnlineUrl(
        w[i.url],
        w[i.name]
      );
    }, C = (w, k = !1) => {
      var N;
      (N = a.value) == null || N.abort(w);
    }, A = (w) => {
      var k;
      w.status !== "success" && C(w), (k = a.value) == null || k.handleRemove(w), l.value = l.value.filter((N) => N.uid !== w.uid), t("delete", w);
    }, T = (w, k) => {
      s.value.splice(k, 1);
    }, I = (w) => {
      var M, F, P, $, X;
      const k = (M = w == null ? void 0 : w.response) != null && M.data ? E((P = (F = w == null ? void 0 : w.response) == null ? void 0 : F.data) == null ? void 0 : P.suffix) : (($ = w.raw) == null ? void 0 : $.type) || E(w[i.suffix]), N = ((X = w.raw) == null ? void 0 : X.name) || w[i.name];
      return k != null && k.includes("sheet") || k === "excal" ? "excal" : k != null && k.includes("zip") || k === "zip" || k === "application/x-compressed" ? "zip" : k != null && k.includes("image") || k === "image" ? "image" : k != null && k.includes("video") || k === "video" ? "video" : k != null && k.includes("audio") || k === "audio" ? "audio" : k != null && k.includes("pdf") || k === "pdf" ? "pdf" : k != null && k.includes("text") || k === "txt" ? "txt" : k != null && k.includes("word") || k === "word" ? "word" : N != null && N.includes("ppt") || k === "ppt" ? "ppt" : "unknow";
    }, E = (w) => {
      const k = w == null ? void 0 : w.toLocaleLowerCase();
      switch (k != null && k.startsWith(".") ? k : `.${k}`) {
        case ".doc":
        case ".docx":
        case ".docxf":
        case ".docm":
        case ".dot":
        case ".dotm":
        case ".dotx":
        case ".epub":
        case ".fodt":
        case ".htm":
        case ".html":
        case ".mht":
        case ".odt":
        case ".ott":
        case ".rtf":
        case ".txt":
        case ".djvu":
        case ".oxps":
        case ".oform":
        case ".fb2":
        case ".xml":
        case ".xps":
          return "word";
        case ".csv":
        case ".xls":
        case ".xlsx":
        case ".fods":
        case ".ods":
        case ".ots":
        case ".xlsb":
        case ".xlsm":
        case ".xlt":
        case ".xltm":
        case ".xltx":
          return "excal";
        case ".fodp":
        case ".odp":
        case ".otp":
        case ".pot":
        case ".potm":
        case ".potx":
        case ".pps":
        case ".ppsm":
        case ".ppsx":
        case ".ppt":
        case ".pptm":
        case ".pptx":
          return "ppt";
        case ".zip":
        case ".rar":
        case ".7z":
        case ".apz":
        case ".ar":
        case ".bz":
        case ".car":
        case ".dar":
        case ".cpgz":
        case ".f":
        case ".ha":
        case ".hbc":
        case ".hbc2":
        case ".hbe":
        case ".hpk":
        case ".hyp":
          return "zip";
        case ".png":
        case ".jpg":
        case ".jpeg":
        case ".bmp":
        case ".gif":
        case ".webp":
        case ".psd":
        case ".svg":
        case ".tiff":
          return "image";
        case ".avi":
        case ".wmv":
        case ".mpeg":
        case ".mp4":
        case ".mpm4v":
        case ".mov":
        case ".asf":
        case ".flv":
        case ".f4v":
        case ".rmvb":
        case ".rm":
        case ".3gp":
        case ".vob":
          return "video";
        case "audio":
          return "audio";
        case ".txt":
          return "txt";
        case ".pdf":
          return "pdf";
        case w:
        case "":
          return "unknow";
      }
    };
    return (w, k) => {
      var M, F;
      const N = Qi("el-image-viewer");
      return ve(), _e(Qt, null, [
        Te(xe(no), {
          "file-list": l.value,
          "onUpdate:fileList": k[0] || (k[0] = (P) => l.value = P),
          class: O0(["ik-file-upload", { preview: e.preview }]),
          accept: e.accept,
          action: e.action,
          ref_key: "refUpload",
          ref: a,
          "on-change": p,
          "before-upload": g,
          "before-remove": _,
          "on-exceed": O,
          multiple: e.multiple,
          headers: e.headers,
          limit: e.limit,
          "on-success": y,
          "on-error": d
        }, {
          trigger: Oe(() => [
            w.$slots.trigger ? L0(w.$slots, "trigger", { key: 0 }, void 0, !0) : (ve(), rt(xe(io), {
              key: 1,
              type: "primary",
              disabled: l.value.length === e.limit,
              icon: xe(ao)
            }, {
              default: Oe(() => [
                I0(wt(e.title), 1)
              ]),
              _: 1
            }, 8, ["disabled", "icon"]))
          ]),
          file: Oe(({ file: P }) => [
            ue("div", If, [
              ue("div", Ff, [
                !w.$slots.fileIcon && (!e.customIconData[I(P)] || !e.customIconData[I(P)][e.customIconFields.icon]) ? (ve(), rt(as, {
                  key: 0,
                  type: I(P)
                }, null, 8, ["type"])) : !w.$slots.fileIcon && e.customIconData[I(P)] && e.customIconData[I(P)][e.customIconFields.icon] ? (ve(), _e("div", Pf, [
                  e.customIconData[I(P)][e.customIconFields.type] === "img" ? (ve(), _e("img", {
                    key: 0,
                    src: e.customIconData[I(P)][e.customIconFields.icon],
                    alt: "",
                    class: "file-img-icon"
                  }, null, 8, Mf)) : (ve(), _e("span", {
                    key: 1,
                    class: O0([
                      e.customIconData[I(P)][e.customIconFields.icon],
                      "file-icon-size"
                    ])
                  }, null, 2))
                ])) : tt("", !0),
                ue("div", Hf, [
                  L0(w.$slots, "fileIcon", { file: P }, void 0, !0)
                ]),
                ue("div", zf, [
                  ue("p", $f, [
                    I0(wt(P[i.name] || P.name) + " ", 1),
                    P.percentage && P.percentage !== 100 ? (ve(), _e("span", qf, "(" + wt(P.percentage) + "%)", 1)) : tt("", !0)
                  ]),
                  P.percentage === 100 ? (ve(), _e("p", Uf, wt(xe(qn)(P.size / 1024 / 1024)) + "MB ", 1)) : tt("", !0),
                  P.percentage && P.percentage !== 100 ? (ve(), rt(xe(oo), {
                    key: 1,
                    "text-inside": "",
                    percentage: P.percentage,
                    color: "var(--el-color-primary)",
                    "striped-flow": "",
                    striped: "",
                    "show-text": !1
                  }, null, 8, ["percentage"])) : tt("", !0)
                ])
              ]),
              e.preview ? (ve(), _e(Qt, { key: 1 }, [
                e.preview || P.percentage === 100 ? (ve(), rt(xe(at), {
                  key: 0,
                  title: "预览",
                  class: "primary"
                }, {
                  default: Oe(() => [
                    Te(xe(fo), {
                      onClick: ($) => x(P)
                    }, null, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024)) : tt("", !0),
                Te(xe(at), {
                  title: "下载",
                  class: "primary"
                }, {
                  default: Oe(() => [
                    Te(xe(uo), {
                      onClick: ($) => m(P)
                    }, null, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024)
              ], 64)) : (ve(), _e(Qt, { key: 0 }, [
                P.status === "success" ? (ve(), rt(xe(at), {
                  key: 0,
                  title: "删除",
                  class: "error"
                }, {
                  default: Oe(() => [
                    Te(xe(P0), {
                      onClick: ($) => A(P)
                    }, null, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024)) : (ve(), rt(xe(at), {
                  key: 1,
                  title: "取消上传"
                }, {
                  default: Oe(() => [
                    Te(xe(co), {
                      onClick: ($) => A(P)
                    }, null, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))
              ], 64))
            ])
          ]),
          default: Oe(() => {
            var P;
            return [
              !e.preview && e.tip ? (ve(), rt(xe(so), {
                key: 0,
                effect: "dark",
                content: r.tipText || "",
                "popper-class": "_ik_web_ui_file-help-tooltip"
              }, {
                default: Oe(() => [
                  Te(xe(at), {
                    size: 23,
                    class: "_ik_web_ui_file_help_icon"
                  }, {
                    default: Oe(() => [
                      Te(xe(lo))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["content"])) : tt("", !0),
              (P = s.value) != null && P.length ? (ve(!0), _e(Qt, { key: 1 }, Ji(s.value, ($, X) => (ve(), _e("div", {
                class: "ik-error-flie-list",
                key: $.uid
              }, [
                ue("div", Wf, [
                  Te(xe(at), {
                    size: 32,
                    class: "info",
                    style: { "vertical-align": "middle" }
                  }, {
                    default: Oe(() => [
                      Te(xe(ho))
                    ]),
                    _: 1
                  }),
                  ue("div", Vf, [
                    ue("p", Yf, wt($[i.name] || $.name), 1),
                    ue("p", Kf, wt(xe(qn)($.size / 1024 / 1024)) + "MB ", 1)
                  ])
                ]),
                eo(ue("div", Zf, [
                  Te(xe(at), {
                    style: { "vertical-align": "middle" },
                    onClick: (j) => S($, X),
                    title: "重新上传",
                    class: "primary"
                  }, {
                    default: Oe(() => [
                      Te(xe(vo))
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  Te(xe(at), {
                    class: "error",
                    onClick: (j) => T($, X),
                    title: "删除"
                  }, {
                    default: Oe(() => [
                      Te(xe(P0))
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ], 512), [
                  [to, ($ == null ? void 0 : $.status) === "fail"]
                ])
              ]))), 128)) : tt("", !0)
            ];
          }),
          _: 3
        }, 8, ["file-list", "class", "accept", "action", "multiple", "headers", "limit"]),
        Te(gs, {
          visible: u.value,
          "onUpdate:visible": k[1] || (k[1] = (P) => u.value = P),
          file: f.value,
          fileType: f.value && I(f.value),
          defaultFields: i
        }, null, 8, ["visible", "file", "fileType"]),
        (M = f.value) != null && M.url && h.value ? (ve(), rt(N, {
          key: 0,
          onClose: k[2] || (k[2] = (P) => (f.value = null, h.value = !1)),
          ref_key: "previewImgRef",
          ref: c,
          "url-list": [(F = f.value) == null ? void 0 : F.url]
        }, null, 8, ["url-list"])) : tt("", !0)
      ], 64);
    };
  }
});
const Xf = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, jf = /* @__PURE__ */ Xf(Gf, [["__scopeId", "data-v-37fe21f0"]]), ru = xo(jf);
export {
  ru as IkUploadFile,
  ru as default
};
