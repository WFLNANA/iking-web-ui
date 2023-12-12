import { defineComponent as s, openBlock as d, createElementBlock as p, normalizeClass as u, createElementVNode as r, toDisplayString as _, createVNode as c, unref as a } from "vue";
import { ElButton as i } from "element-plus";
import { Delete as f, Top as m, Bottom as k } from "@element-plus/icons-vue";
const v = (e, o) => {
  if (e.install = (n) => {
    for (const t of [e, ...Object.values(o ?? {})])
      n.component(t.name, t);
  }, o)
    for (const [n, t] of Object.entries(o))
      e[n] = t;
  return e;
}, h = { class: "ik-head-left" }, y = { class: "ik-head-right" }, D = /* @__PURE__ */ s({
  __name: "IKSearchHead",
  props: {
    //表格展示头部几条数据
    rowData: {
      type: Array,
      default: () => []
    }
  },
  emits: ["import", "export", "delete"],
  setup(e, { emit: o }) {
    return (n, t) => (d(), p("div", {
      class: u(["ik-head", e.rowData.length === 0 ? "pack-up" : "ik-unfold"])
    }, [
      r("div", h, _(`已选${e.rowData.length}条数据`), 1),
      r("div", y, [
        c(a(i), {
          class: "ik-head-icon",
          title: "查询",
          icon: a(f),
          onClick: t[0] || (t[0] = (l) => o("delete", e.rowData))
        }, null, 8, ["icon"]),
        c(a(i), {
          class: "ik-head-icon",
          title: "导入",
          icon: a(m),
          onClick: t[1] || (t[1] = (l) => o("import", e.rowData))
        }, null, 8, ["icon"]),
        c(a(i), {
          class: "ik-head-icon",
          title: "导出",
          icon: a(k),
          onClick: t[2] || (t[2] = (l) => o("export", e.rowData))
        }, null, 8, ["icon"])
      ])
    ], 2));
  }
});
const g = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [t, l] of o)
    n[t] = l;
  return n;
}, w = /* @__PURE__ */ g(D, [["__scopeId", "data-v-c8e3b9d9"]]), H = v(w);
export {
  H as IKSearchHead,
  H as default
};
