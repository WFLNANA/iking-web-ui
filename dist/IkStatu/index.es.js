import { defineComponent as u, computed as s, resolveComponent as d, openBlock as n, createBlock as i, normalizeStyle as r, withCtx as f, createElementBlock as y, createCommentVNode as p, createTextVNode as g, toDisplayString as m } from "vue";
const b = (e, t) => {
  if (e.install = (o) => {
    for (const c of [e, ...Object.values(t ?? {})])
      o.component(c.name, c);
  }, t)
    for (const [o, c] of Object.entries(t))
      e[o] = c;
  return e;
}, k = /* @__PURE__ */ u({
  __name: "index",
  props: {
    title: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "success"
    },
    // 传了type时，color和background不生效
    // 文字颜色
    color: {
      type: String,
      default: ""
    },
    // 背景色
    background: {
      type: String,
      default: ""
    },
    effect: {
      type: String,
      default: "light"
    },
    circle: {
      type: Boolean,
      default: !1
    },
    // 预留参数
    circleW: {
      type: Number,
      default: 8
    },
    // 预留参数
    circleH: {
      type: Number,
      default: 8
    },
    borderWidth: {
      type: Number,
      default: 1
    },
    borderType: {
      type: String,
      default: "solid"
    }
  },
  setup(e) {
    const t = e, o = s(() => t.type ? "" : {
      color: t.color,
      backgroundColor: t.background,
      borderColor: t.color
    });
    return (c, l) => {
      const a = d("el-tag");
      return n(), i(a, {
        effect: e.effect,
        class: "ik-statu-tag",
        type: e.type,
        style: r(o.value)
      }, {
        default: f(() => [
          e.circle ? (n(), y("span", {
            key: 0,
            class: "inline-block rounded-full",
            style: r({
              backgroundColor: `var(--el-color-${e.type})`,
              width: `${e.circleW}px`,
              height: `${e.circleH}px`
            })
          }, null, 4)) : p("", !0),
          g(" " + m(e.title), 1)
        ]),
        _: 1
      }, 8, ["effect", "type", "style"]);
    };
  }
});
const S = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [c, l] of t)
    o[c] = l;
  return o;
}, _ = /* @__PURE__ */ S(k, [["__scopeId", "data-v-241ac18b"]]), h = b(_);
export {
  h as IkStatu,
  h as default
};
