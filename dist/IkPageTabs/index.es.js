import { defineComponent as C, mergeModels as p, useModel as N, ref as V, resolveComponent as v, openBlock as d, createElementBlock as u, Fragment as r, createVNode as $, normalizeClass as T, withCtx as c, renderList as y, createBlock as B, createElementVNode as S, toDisplayString as I, renderSlot as f, createCommentVNode as i } from "vue";
const h = (e, o) => {
  if (e.install = (s) => {
    for (const a of [e, ...Object.values(o ?? {})])
      s.component(a.name, a);
  }, o)
    for (const [s, a] of Object.entries(o))
      e[s] = a;
  return e;
}, z = {
  key: 0,
  class: "ik-tabs-split overflow-overlay gl-padding"
}, P = /* @__PURE__ */ C({
  __name: "IkPageTabs",
  props: p({
    // tabs
    tabs: {
      type: Array,
      default: () => []
    },
    // 当存在默认slot且需要展示默认slot时
    defaultSlot: {
      type: Boolean,
      default: !0
    },
    // 除默认tab其它tab是否首次默认不加载
    lazyTab: {
      type: Boolean,
      default: !1
    },
    // 是否拆分tab页和内容页
    split: {
      type: Boolean,
      default: !1
    }
  }, {
    modelValue: {
      type: String || Number,
      default: ""
    }
  }),
  emits: p(["tabClick", "search"], ["update:modelValue"]),
  setup(e, { emit: o }) {
    const s = e, a = N(e, "modelValue"), n = V(/* @__PURE__ */ new Map());
    for (const l of s.tabs)
      n.value.set(l.id, s.lazyTab ? l.id !== a.value : !1);
    const k = (l) => {
      a.value = l.paneName, n.value.get(l.paneName) || o("tabClick", l.paneName, l), n.value.set(l.paneName, !1);
    };
    return (l, m) => {
      const b = v("el-tab-pane"), g = v("el-tabs");
      return d(), u(r, null, [
        $(g, {
          modelValue: a.value,
          "onUpdate:modelValue": m[0] || (m[0] = (t) => a.value = t),
          class: T(["ik-tabs", {
            "is-default": l.$slots.default,
            "split gl-padding gl-container": e.split
          }]),
          onTabClick: k
        }, {
          default: c(() => [
            (d(!0), u(r, null, y(e.tabs, (t) => (d(), B(b, {
              key: t.id,
              disabled: t == null ? void 0 : t.disabled,
              name: t.id
            }, {
              label: c(() => [
                S("span", null, I(t.label), 1)
              ]),
              default: c(() => [
                !l.$slots.default && !n.value.get(t.id) && !e.split ? f(l.$slots, t.id, { key: 0 }, void 0, !0) : i("", !0)
              ]),
              _: 2
            }, 1032, ["disabled", "name"]))), 128)),
            l.$slots.default && e.defaultSlot && !e.split ? f(l.$slots, "default", { key: 0 }, void 0, !0) : i("", !0)
          ]),
          _: 3
        }, 8, ["modelValue", "class"]),
        e.split ? (d(), u("div", z, [
          (d(!0), u(r, null, y(e.tabs, (t) => (d(), u(r, null, [
            !l.$slots.default && !n.value.get(t.id) ? f(l.$slots, t.id, { key: 0 }, void 0, !0) : i("", !0)
          ], 64))), 256)),
          l.$slots.default && e.defaultSlot ? f(l.$slots, "default", { key: 0 }, void 0, !0) : i("", !0)
        ])) : i("", !0)
      ], 64);
    };
  }
});
const M = (e, o) => {
  const s = e.__vccOpts || e;
  for (const [a, n] of o)
    s[a] = n;
  return s;
}, O = /* @__PURE__ */ M(P, [["__scopeId", "data-v-e282a7f2"]]), j = h(O);
export {
  j as IkPageTabs,
  j as default
};
