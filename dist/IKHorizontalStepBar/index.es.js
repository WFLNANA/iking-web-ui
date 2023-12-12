import { defineComponent as T, ref as m, watch as H, onMounted as W, nextTick as M, resolveComponent as O, openBlock as u, createElementBlock as d, createElementVNode as p, createVNode as I, withCtx as E, unref as S, createCommentVNode as h, normalizeStyle as y, Fragment as R, renderList as j, normalizeClass as g, renderSlot as V, createTextVNode as A, toDisplayString as w } from "vue";
import { ArrowLeft as F, ArrowRight as K } from "@element-plus/icons-vue";
const q = (e, r) => {
  if (e.install = (a) => {
    for (const s of [e, ...Object.values(r ?? {})])
      a.component(s.name, s);
  }, r)
    for (const [a, s] of Object.entries(r))
      e[a] = s;
  return e;
}, G = { class: "ik-hor-step-content" }, J = { class: "flex" }, P = ["onClick"], Q = ["id", "onClick"], U = /* @__PURE__ */ T({
  __name: "IKHorizontalStepBar",
  props: {
    spaceNum: {
      type: String,
      default: "58px"
    },
    // 当前激活的下标
    active: {
      type: Number,
      default: null
    },
    // 当前激活颜色
    activeColor: {
      type: String,
      default: ""
    },
    // 步骤是否可点击
    needClick: {
      type: Boolean,
      default: !1
    },
    // 步骤数据
    list: {
      type: Array,
      default: () => []
    },
    // 映射字段
    propsField: {
      type: Object,
      default: () => ({
        title: "title",
        value: "value"
      })
    }
  },
  emits: ["click", "update:active"],
  setup(e, { emit: r }) {
    const a = e, s = m(!1), f = m(), C = m(), i = m(!1);
    H(
      () => a.active,
      (n) => {
        let t = document.getElementById("stepItemContent"), o = document.getElementById(`stepItem${n}`), c = document.getElementById("stepItem0");
        const l = o && c ? (o == null ? void 0 : o.offsetLeft) - (c == null ? void 0 : c.offsetLeft) : 0;
        t && o && (t.scrollLeft = l > (t == null ? void 0 : t.clientWidth) ? l - (t == null ? void 0 : t.offsetLeft) : 0);
      }
    ), W(() => {
      M(() => {
        let t = document.getElementById("stepItemContent"), o = (t == null ? void 0 : t.scrollWidth) > (t == null ? void 0 : t.clientWidth);
        s.value = o, window.addEventListener("resize", n, !0);
      });
      const n = () => {
        let t = document.getElementById("stepItemContent"), o = (t == null ? void 0 : t.scrollWidth) > (t == null ? void 0 : t.clientWidth);
        s.value = o;
      };
    });
    const k = (n, t) => {
      if (!a.needClick)
        return;
      r("update:active", t), r("click", n);
      let o = document.getElementById("stepItemContent"), c = document.getElementById(`stepItem${t}`), l = document.getElementById("stepItem0");
      const v = c && l ? (c == null ? void 0 : c.offsetLeft) - (l == null ? void 0 : l.offsetLeft) : 0;
      o && c && (o.scrollLeft = v > (o == null ? void 0 : o.clientWidth) ? v - (o == null ? void 0 : o.offsetLeft) : 0);
    }, L = () => {
      let n = document.getElementById("stepItemContent");
      n && (n.scrollLeft = n.scrollLeft - 20);
    }, B = () => {
      let n = document.getElementById("stepItemContent");
      n && (n.scrollLeft = n.scrollLeft + 20);
    }, $ = () => {
      clearInterval(C.value);
      let n = document.getElementById("stepItemContent");
      i.value = !1, C.value = setInterval(() => {
        i.value = !0, n && (n.scrollLeft = n.scrollLeft - 20);
      }, 100);
    }, b = () => {
      clearInterval(C.value), i.value || L();
    }, z = () => {
      clearInterval(f.value);
      let n = document.getElementById("stepItemContent");
      i.value = !1, f.value = setInterval(() => {
        i.value = !0, n && (n.scrollLeft = n.scrollLeft + 20);
      }, 100);
    }, N = () => {
      clearInterval(f.value), i.value || B();
    };
    return (n, t) => {
      const o = O("el-icon");
      return u(), d("div", G, [
        p("div", J, [
          s.value ? (u(), d("div", {
            key: 0,
            class: "icon-left",
            onMousedown: $,
            onMouseup: b,
            onClick: L
          }, [
            I(o, { class: "operation-icon" }, {
              default: E(() => [
                I(S(F), { size: "26px" })
              ]),
              _: 1
            })
          ], 32)) : h("", !0),
          p("div", {
            class: "step-item-content",
            id: "stepItemContent",
            style: y({ justifyContent: s.value ? "flex-start" : "center" })
          }, [
            (u(!0), d(R, null, j(e.list, (c, l) => (u(), d("div", {
              class: g(`step-item ${l <= e.active ? "step-item-active" : ""}`),
              key: l
            }, [
              l != 0 ? (u(), d("span", {
                key: 0,
                class: g(`step-border ${l <= e.active ? "step-border-greater-than" : ""}`),
                style: y({ width: `${e.spaceNum.indexOf("px") != -1 ? e.spaceNum : `${e.spaceNum}px`}` })
              }, null, 6)) : h("", !0),
              p("span", {
                class: g(`step-num ${l === e.active ? "step-num-active" : l < e.active ? "step-num-greater-than" : ""}`),
                onClick: (v) => k(c, l),
                style: y({ backgroundColor: l === e.active && e.activeColor ? e.activeColor : "", cursor: c && c.disabled ? "not-allowed" : e.needClick ? "pointer" : "context-menu" })
              }, [
                V(n.$slots, "icon", {
                  data: { item: c, index: l }
                }, () => [
                  A(w(l + 1), 1)
                ], !0)
              ], 14, P),
              p("span", {
                id: `stepItem${l}`,
                class: g(`step-label ${e.active === l ? "step-label-active" : l < e.active ? "step-label-greater-than" : ""} step-item-${l}`),
                style: y({
                  color: l === e.active && e.activeColor ? e.activeColor : "",
                  cursor: c && c.disabled ? "not-allowed" : e.needClick ? "pointer" : "context-menu"
                }),
                onClick: (v) => k(c, l)
              }, w(c[e.propsField.title]), 15, Q)
            ], 2))), 128))
          ], 4),
          s.value ? (u(), d("div", {
            key: 1,
            class: "icon-right",
            onMousedown: z,
            onMouseup: N,
            onClick: B
          }, [
            I(o, { class: "operation-icon" }, {
              default: E(() => [
                I(S(K))
              ]),
              _: 1
            })
          ], 32)) : h("", !0)
        ])
      ]);
    };
  }
});
const X = (e, r) => {
  const a = e.__vccOpts || e;
  for (const [s, f] of r)
    a[s] = f;
  return a;
}, Y = /* @__PURE__ */ X(U, [["__scopeId", "data-v-153d28a8"]]), D = q(Y);
export {
  D as IKHorizontalStepBar,
  D as default
};
