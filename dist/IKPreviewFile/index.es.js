import { defineComponent as x, ref as c, computed as y, watch as g, openBlock as _, createBlock as b, unref as h, withCtx as v, createElementVNode as C } from "vue";
import { ElDialog as k } from "element-plus";
const w = (e, t) => {
  if (e.install = (o) => {
    for (const r of [e, ...Object.values(t ?? {})])
      o.component(r.name, r);
  }, t)
    for (const [o, r] of Object.entries(t))
      e[o] = r;
  return e;
}, U = typeof btoa == "function", i = typeof Buffer == "function";
typeof TextDecoder == "function" && new TextDecoder();
const d = typeof TextEncoder == "function" ? new TextEncoder() : void 0, A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", u = Array.prototype.slice.call(A);
((e) => {
  let t = {};
  return e.forEach((o, r) => t[o] = r), t;
})(u);
const n = String.fromCharCode.bind(String);
typeof Uint8Array.from == "function" && Uint8Array.from.bind(Uint8Array);
const F = (e) => e.replace(/=/g, "").replace(/[+\/]/g, (t) => t == "+" ? "-" : "_"), S = (e) => {
  let t, o, r, l, f = "";
  const a = e.length % 3;
  for (let s = 0; s < e.length; ) {
    if ((o = e.charCodeAt(s++)) > 255 || (r = e.charCodeAt(s++)) > 255 || (l = e.charCodeAt(s++)) > 255)
      throw new TypeError("invalid character found");
    t = o << 16 | r << 8 | l, f += u[t >> 18 & 63] + u[t >> 12 & 63] + u[t >> 6 & 63] + u[t & 63];
  }
  return a ? f.slice(0, a - 3) + "===".substring(a) : f;
}, m = U ? (e) => btoa(e) : i ? (e) => Buffer.from(e, "binary").toString("base64") : S, B = i ? (e) => Buffer.from(e).toString("base64") : (e) => {
  let o = [];
  for (let r = 0, l = e.length; r < l; r += 4096)
    o.push(n.apply(null, e.subarray(r, r + 4096)));
  return m(o.join(""));
}, D = (e) => {
  if (e.length < 2) {
    var t = e.charCodeAt(0);
    return t < 128 ? e : t < 2048 ? n(192 | t >>> 6) + n(128 | t & 63) : n(224 | t >>> 12 & 15) + n(128 | t >>> 6 & 63) + n(128 | t & 63);
  } else {
    var t = 65536 + (e.charCodeAt(0) - 55296) * 1024 + (e.charCodeAt(1) - 56320);
    return n(240 | t >>> 18 & 7) + n(128 | t >>> 12 & 63) + n(128 | t >>> 6 & 63) + n(128 | t & 63);
  }
}, V = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, E = (e) => e.replace(V, D), p = i ? (e) => Buffer.from(e, "utf8").toString("base64") : d ? (e) => B(d.encode(e)) : (e) => m(E(e)), $ = (e, t = !1) => t ? F(p(e)) : p(e), T = ["src"], I = /* @__PURE__ */ x({
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
    const t = e, o = c(null), r = y(() => !t.kkUrl || !t.url ? "" : `${t.kkUrl}${encodeURIComponent(
      $(`${t.loadUrl}${t.url}${t.fileName ? `&fullfilename=${t.fileName}` : ""}`)
    )}`), l = c(t.modelValue);
    return g(() => t.modelValue, (f) => {
      l.value = f;
    }), (f, a) => (_(), b(h(k), {
      fullscreen: "",
      modelValue: l.value,
      "onUpdate:modelValue": a[0] || (a[0] = (s) => l.value = s),
      "append-to-body": "",
      "modal-class": "ik-file-preview-modal",
      onClose: a[1] || (a[1] = (s) => f.$emit("update:modelValue", !1)),
      class: "ik-file-preview"
    }, {
      default: v(() => [
        C("iframe", {
          ref_key: "freamRef",
          ref: o,
          "cross-origin": "",
          src: r.value,
          frameborder: "0",
          allowfullscreen: "",
          seamless: ""
        }, null, 8, T)
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const j = w(I);
export {
  j as IkPreviewFile,
  j as default
};
