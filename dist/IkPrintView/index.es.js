import { defineComponent as u, computed as m, reactive as f, watch as p, onMounted as h, resolveComponent as w, openBlock as d, createBlock as _, withCtx as I, createElementVNode as V, normalizeStyle as k, createElementBlock as v, createCommentVNode as g } from "vue";
const y = (o, l) => {
  if (o.install = (e) => {
    for (const t of [o, ...Object.values(l ?? {})])
      e.component(t.name, t);
  }, l)
    for (const [e, t] of Object.entries(l))
      o[e] = t;
  return o;
}, $ = ["src"], x = {
  name: "IkPrintView"
}, B = /* @__PURE__ */ u({
  ...x,
  props: {
    modelValue: { type: Boolean, default: !1 },
    templateId: {},
    dataId: {},
    srcPrefix: { default: "" },
    token: {},
    idKey: { default: "id" },
    width: { default: "100%" },
    height: { default: "calc(100vh - 186px)" }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: l }) {
    const e = o, t = m({
      get: () => e.modelValue,
      set: (n) => {
        l("update:modelValue", n);
      }
    }), a = f({
      src: "",
      showIframe: !1
    }), r = () => {
      a.showIframe = !1, a.src = `${e.srcPrefix}/jmreport/view/${e.templateId}?token=${e.token ?? ""}&${e.idKey}=${e.dataId}`, setTimeout(() => {
        a.showIframe = !0;
      }, 300);
    };
    return p(() => t.value, (n) => {
      n && r();
    }), h(() => {
      t.value && r();
    }), (n, s) => {
      const c = w("el-dialog");
      return d(), _(c, {
        modelValue: t.value,
        "onUpdate:modelValue": s[0] || (s[0] = (i) => t.value = i),
        fullscreen: "",
        title: "预览"
      }, {
        default: I(() => [
          V("div", {
            style: k({ width: e.width, height: e.height })
          }, [
            a.showIframe ? (d(), v("iframe", {
              key: 0,
              width: "100%",
              height: "100%",
              src: a.src,
              frameborder: "0"
            }, null, 8, $)) : g("", !0)
          ], 4)
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), P = y(B);
export {
  P as IkPrintView,
  P as default
};
