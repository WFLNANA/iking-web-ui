import { defineComponent as y, ref as w, watchEffect as C, createVNode as c, resolveComponent as d, withDirectives as B, mergeProps as I, resolveDirective as S } from "vue";
import { MoreFilled as h } from "@element-plus/icons-vue";
const j = (n, e) => {
  if (n.install = (f) => {
    for (const o of [n, ...Object.values(e ?? {})])
      f.component(o.name, o);
  }, e)
    for (const [f, o] of Object.entries(e))
      n[f] = o;
  return n;
};
const x = /* @__PURE__ */ y({
  name: "IkBtnContent",
  components: {
    MoreFilled: h
  },
  props: {
    // 外部显示数量
    num: {
      type: Number,
      default: 3
    },
    // 如何触发展开
    trigger: {
      type: String,
      default: "click"
    },
    // 展开位置
    placement: {
      type: String,
      default: "bottom"
    }
  },
  setup(n, {
    slots: e,
    attrs: f
  }) {
    const o = w(null), p = w(0), a = (r) => r == null ? void 0 : r.filter((u) => typeof u.children != "string");
    return C(() => {
      var r, u, l;
      o.value = (u = (r = e.default) == null ? void 0 : r.call(e)) == null ? void 0 : u.filter((i) => typeof i.children != "string"), p.value = ((l = o.value) == null ? void 0 : l.length) || 0;
    }), () => {
      var r, u;
      return c("div", {
        class: "flex"
      }, [
        // 未超出限制按钮渲染
        (u = a((r = e.default) == null ? void 0 : r.call(e))) == null ? void 0 : u.map((l, i) => i + 1 > n.num ? null : l),
        // 超出限制按钮渲染
        p.value > n.num ? c(d("el-dropdown"), {
          trigger: n.trigger,
          "popper-class": "gl-btn-content"
        }, {
          default: () => c(d("el-icon"), {
            title: "更多",
            class: "ml-[12px] more-operate"
          }, {
            default: () => [c(h, null, null)]
          }),
          dropdown: () => c(d("el-dropdown-menu"), null, {
            default: () => {
              var l, i;
              return [p.value > n.num ? (i = a((l = e.default) == null ? void 0 : l.call(e))) == null ? void 0 : i.map((t, k) => k < n.num ? null : c(d("el-dropdown-item"), null, {
                default: () => {
                  var m, g;
                  return [B(c(d("el-button"), I(t == null ? void 0 : t.props, {
                    link: !0
                  }), {
                    default: () => {
                      var v, b;
                      return [((v = t == null ? void 0 : t.props) == null ? void 0 : v.title) || ((b = t == null ? void 0 : t.props) == null ? void 0 : b.label)];
                    }
                  }), [[S("role"), (g = (m = t == null ? void 0 : t.dirs) == null ? void 0 : m[0]) == null ? void 0 : g.value]])];
                }
              })) : null];
            }
          })
        }) : null
      ]);
    };
  }
}), D = x, E = j(D);
export {
  E as IkBtnContent,
  E as default
};
