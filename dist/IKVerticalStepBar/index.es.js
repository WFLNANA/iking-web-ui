import { defineComponent as F, computed as C, openBlock as i, createElementBlock as r, Fragment as b, renderList as g, createElementVNode as v, normalizeClass as p, toDisplayString as k, normalizeStyle as x, createTextVNode as V, createCommentVNode as $ } from "vue";
const w = (n, a) => {
  if (n.install = (o) => {
    for (const l of [n, ...Object.values(a ?? {})])
      o.component(l.name, l);
  }, a)
    for (const [o, l] of Object.entries(a))
      n[o] = l;
  return n;
}, O = { class: "content" }, j = { class: "top" }, z = ["onClick"], E = ["onClick"], K = ["onClick"], T = ["id"], q = ["onClick"], A = /* @__PURE__ */ F({
  __name: "IKVerticalStepBar",
  props: {
    // 当前激活的下标
    active: {
      type: String,
      default: ""
    },
    // 数据数组
    list: {
      type: Array,
      default: () => []
    },
    // 是否存在点击事件
    needClick: {
      type: Boolean,
      default: !1
    },
    // 映射字段
    propsField: {
      type: Object,
      default: () => ({
        name: "name",
        children: "children"
      })
    }
  },
  emits: ["click", "update:active"],
  setup(n, { emit: a }) {
    const o = n, l = C(() => Number(
      o.active.indexOf("-") > 0 ? o.active.split("-")[0] : o.active
    )), d = C(() => o.active.indexOf("-") > 0 ? Number(o.active.split("-")[1]) : 0), I = (c) => {
      let t = "", e = c + 1;
      return e < l.value ? t = "active before-bg" : e === l.value ? t = "active-text active-bg" : e > l.value && (t = "after-text after-bg"), `${t} index`;
    }, N = (c) => {
      let t = "", e = c + 1;
      return e < l.value ? t = "before-text" : e === l.value ? t = "active" : e > l.value && (t = "after-text"), `${t} text`;
    }, B = (c) => {
      let t = "", e = c + 1;
      return e < l.value ? t = "before-style" : e < o.list.length && (t = "after-style"), `${t} bottom`;
    }, S = (c, t) => {
      let e = "", s = c + 1, u = t + 1;
      return s < l.value ? e = "before-text" : s === l.value ? u < d.value ? e = "before-text" : u === d.value ? e = "active" : u > d.value && (e = "after-text") : s > l.value && (e = "after-text"), `${e}`;
    }, y = (c, t) => {
      o.needClick && (c[o.propsField.children] || (a("update:active", t + ""), a("click", c)));
    }, m = (c, t) => {
      c.show = !c.show;
      let e = document.getElementById(`children${t}`);
      c.show ? e.style.display = "none" : e.style.display = "block";
    };
    return (c, t) => (i(), r("div", O, [
      (i(!0), r(b, null, g(n.list, (e, s) => {
        var u, _;
        return i(), r("div", {
          class: "line-block",
          key: s
        }, [
          v("div", j, [
            v("div", {
              class: p(I(s))
            }, k(s + 1), 3),
            v("div", {
              class: p(N(s)),
              style: x(n.needClick ? "cursor: pointer;" : ""),
              onClick: (f) => y(e, s + 1)
            }, [
              V(k(e[n.propsField.name]) + " ", 1),
              (u = e[n.propsField.children]) != null && u.length && !e.show ? (i(), r("i", {
                key: 0,
                class: "ikapprove icon-a-putongjiantouzhankai",
                onClick: (f) => m(e, s)
              }, null, 8, E)) : $("", !0),
              (_ = e[n.propsField.children]) != null && _.length && e.show ? (i(), r("i", {
                key: 1,
                onClick: (f) => m(e, s),
                class: "ikapprove icon-a-putongjiantoushouqi"
              }, null, 8, K)) : $("", !0)
            ], 14, z)
          ]),
          v("ul", {
            class: p(B(s))
          }, [
            v("div", {
              id: `children${s}`
            }, [
              (i(!0), r(b, null, g(e[n.propsField.children], (f, h) => (i(), r("li", {
                class: p(S(s, h)),
                style: x(n.needClick ? "cursor: pointer;" : ""),
                key: h,
                onClick: (G) => y(f, s + 1 + "-" + (h + 1))
              }, k(f.name), 15, q))), 128))
            ], 8, T)
          ], 2)
        ]);
      }), 128))
    ]));
  }
});
const D = (n, a) => {
  const o = n.__vccOpts || n;
  for (const [l, d] of a)
    o[l] = d;
  return o;
}, L = /* @__PURE__ */ D(A, [["__scopeId", "data-v-aa17b274"]]), J = w(L);
export {
  J as IKVerticalStepBar,
  J as default
};
