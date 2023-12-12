import { defineComponent as l, computed as f, resolveComponent as p, openBlock as s, createBlock as a, withCtx as r, renderSlot as m } from "vue";
const i = (t, o) => {
  if (t.install = (n) => {
    for (const e of [t, ...Object.values(o ?? {})])
      n.component(e.name, e);
  }, o)
    for (const [n, e] of Object.entries(o))
      t[n] = e;
  return t;
}, u = /* @__PURE__ */ l({
  __name: "index",
  props: {
    effect: {
      type: String,
      default: "dark"
    },
    content: {
      type: String,
      default: ""
    },
    placement: {
      type: String,
      default: "bottom-start"
    }
  },
  setup(t) {
    const o = t, n = f(() => o.effect);
    return (e, d) => {
      const c = p("el-tooltip");
      return s(), a(c, {
        class: "gl-tooltip",
        effect: n.value,
        content: t.content,
        placement: t.placement,
        enterable: !1
      }, {
        default: r(() => [
          m(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["effect", "content", "placement"]);
    };
  }
}), k = i(u);
export {
  k as IkTooltip,
  k as default
};
