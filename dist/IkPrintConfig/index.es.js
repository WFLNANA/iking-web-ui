import { defineComponent as f, computed as p, reactive as u, onMounted as m, openBlock as l, createElementBlock as h, createCommentVNode as k } from "vue";
const _ = (r, c) => {
  if (r.install = (e) => {
    for (const n of [r, ...Object.values(c ?? {})])
      e.component(n.name, n);
  }, c)
    for (const [e, n] of Object.entries(c))
      r[e] = n;
  return r;
}, I = ["src"], j = {
  name: "IkPrintConfig"
}, y = /* @__PURE__ */ f({
  ...j,
  props: {
    id: {},
    srcPrefix: { default: "" },
    token: {}
  },
  emits: ["created"],
  setup(r, { emit: c }) {
    const e = r, n = p(() => !!e.id), t = u({
      currentId: e.id,
      loading: !0,
      src: ""
    }), i = async () => {
      fetch(`${e.srcPrefix ?? ""}/jmreport/save`, {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
          "Content-Type": "application/json",
          Authorization: e.token ?? ""
        }
      }).then((o) => o.json()).then(({ code: o, result: s }) => {
        if (o === 200) {
          const a = s.id;
          t.currentId = a, t.src = `${e.srcPrefix ?? ""}/jmreport/index/${t.currentId}?token=${e.token}&menuType=printinfo`, c("created", t.currentId);
        }
      }).catch((o) => {
        console.error(o);
      });
    }, d = () => {
      if (!n.value) {
        i();
        return;
      }
      t.src = `${e.srcPrefix ?? ""}/jmreport/index/${t.currentId}?token=${e.token}`;
    };
    return m(() => {
      d();
    }), (o, s) => t.src ? (l(), h("iframe", {
      key: 0,
      width: "100%",
      height: "100%",
      src: t.src,
      frameborder: "0"
    }, `\r
  `, 8, I)) : k("", !0);
  }
}), $ = _(y);
export {
  $ as IkPrintConfig,
  $ as default
};
