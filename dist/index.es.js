var cp = Object.defineProperty;
var up = (t, e, n) => e in t ? cp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var dn = (t, e, n) => (up(t, typeof e != "symbol" ? e + "" : e, n), n);
import { defineComponent as He, ref as fe, resolveComponent as Me, openBlock as T, createElementBlock as $, Fragment as Ae, createVNode as M, withCtx as Q, unref as F, computed as ye, isVNode as gd, normalizeClass as $e, createElementVNode as P, toDisplayString as pe, watch as dt, createSlots as Pa, withKeys as dp, withModifiers as Tt, renderList as qe, createBlock as de, renderSlot as Je, createCommentVNode as re, withDirectives as Ot, vShow as br, normalizeStyle as Oe, createTextVNode as Te, reactive as rn, nextTick as In, onMounted as kr, pushScopeId as Ar, popScopeId as Dr, h as pr, Teleport as fp, mergeProps as Ge, useSlots as hp, mergeModels as Zn, useModel as Ys, useCssVars as vd, getCurrentInstance as pp, resolveDirective as Gs, Transition as $a, toRef as gp, watchEffect as Ko } from "vue";
import { Plus as md, Delete as ji, Top as vp, Bottom as mp, Search as bp, Refresh as Ha, ArrowUp as yp, DeleteFilled as bd, Calendar as yd, Clock as xd, User as xp, Close as _d, Location as _p, ArrowLeft as wd, ArrowRight as Sd, Upload as wp, CircleCloseFilled as Sp, View as Ep, Download as Ed, QuestionFilled as Cp, WarningFilled as kp, ZoomIn as Ap, Document as Dp, MoreFilled as Hl, DCaret as Tp } from "@element-plus/icons-vue";
import { ElFormItem as Wn, ElInput as qn, ElInputNumber as Cd, ElSelect as Wi, ElOption as Gr, ElRadioGroup as yr, ElRadio as ni, ElCheckboxGroup as ri, ElCheckbox as tn, ElDatePicker as gn, ElTreeSelect as kd, ElButton as Rt, ElCard as Ad, ElForm as Fa, ElRow as Dd, ElCol as Td, ElIcon as it, ElDialog as za, ElTimePicker as Fl, ElMessageBox as Rd, ElMessage as Qr, ElUpload as Id, ElProgress as Rp, ElTooltip as Ip, ElImage as Mp, ElImageViewer as Op, ElRadioButton as Md, ElBreadcrumb as Np, ElBreadcrumbItem as Bp, ElAvatar as mi, vLoading as ko } from "element-plus";
import * as Lp from "lodash-es";
import Od from "vuedraggable";
const tt = (t, e) => {
  if (t.install = (n) => {
    for (const r of [t, ...Object.values(e ?? {})])
      n.component(r.name, r);
  }, e)
    for (const [n, r] of Object.entries(e))
      t[n] = r;
  return t;
}, Pp = Object.prototype.toString, Xo = (t) => Pp.call(t) === "[object Object]", $p = (t, e) => {
  if (!Xo(t) || !Xo(e))
    throw new Error("参数异常");
  return Object.keys(t).forEach((n) => {
    Reflect.has(e, n) && (t[n] = e[n]);
  }), t;
}, Hp = {
  copyValue: $p,
  isObject: Xo
};
var hn = /* @__PURE__ */ ((t) => (t.input = "input", t.area = "area", t.number = "number", t.select = "select", t.date = "date", t.datetime = "datetime", t.checkbox = "checkbox", t.radio = "radio", t.treeselect = "treeselect", t.choosePerson = "choosePerson", t))(hn || {}), Hn = /* @__PURE__ */ ((t) => (t.year = "year", t.month = "month", t.date = "date", t.dates = "dates", t.datetime = "datetime", t.week = "week", t.datetimerange = "datetimerange", t.daterange = "daterange", t.monthrange = "monthrange", t))(Hn || {}), Fp = /* @__PURE__ */ ((t) => (t.center = "center", t.left = "left", t.right = "right", t))(Fp || {});
const zp = /* @__PURE__ */ He({
  __name: "index",
  props: {
    typeOption: {
      type: Object,
      default: () => {
      }
    },
    list: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    handSetChild: {
      type: Function,
      default: () => {
      }
    }
  },
  setup(t) {
    const e = fe(!1), n = fe([]), { userList: r, depList: i, roleList: s, postList: o } = fe(data), a = (u) => {
      n.value = u.list;
    }, l = fe(""), c = () => {
    };
    return (u, h) => {
      const d = Me("el-icon"), f = Me("el-input");
      return T(), $(Ae, null, [
        M(f, {
          modelValue: l.value,
          "onUpdate:modelValue": h[1] || (h[1] = (g) => l.value = g),
          placeholder: "请选择部门/人员/角色",
          onClick: h[2] || (h[2] = (g) => e.value = !0)
        }, {
          suffix: Q(() => [
            M(d, {
              onClick: h[0] || (h[0] = (g) => e.value = !0)
            }, {
              default: Q(() => [
                M(F(md))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        M(F(ho), {
          modelValue: n.value,
          "onUpdate:modelValue": h[3] || (h[3] = (g) => n.value = g),
          show: e.value,
          "onUpdate:show": h[4] || (h[4] = (g) => e.value = g),
          "dep-list": F(i),
          "user-list": F(r),
          "role-list": F(s),
          "post-list": F(o),
          "choose-type": ["user"],
          tabs: ["group"],
          "type-option": { dep: "DEPT", user: "USER", role: "ROLE", post: "POST" },
          "prop-option": {
            name: "elementName",
            id: "elementId",
            type: "elementType"
          },
          "empty-text": "暂无数据",
          onHandChild: c,
          onOk: a
        }, null, 8, ["modelValue", "show", "dep-list", "user-list", "role-list", "post-list"])
      ], 64);
    };
  }
});
const ze = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, i] of e)
    n[r] = i;
  return n;
}, Vp = /* @__PURE__ */ ze(zp, [["__scopeId", "data-v-78a7b3d9"]]);
function Up(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !gd(t);
}
const jp = /* @__PURE__ */ He({
  name: "IkSearchAuto",
  props: {
    // 查询字段列表
    list: {
      required: !0,
      type: Array,
      default: () => []
    },
    // 阴影
    shadow: {
      type: String,
      default: "never"
    },
    // 初始首次查询
    immediate: {
      type: Boolean,
      default: !0
    },
    // 默认显示搜索条件数量
    num: {
      type: Number,
      default: 4
    },
    // tab页,用于存储时区分tab
    tab: {
      type: String,
      default: ""
    }
  },
  emits: ["handleChange"],
  setup(t, {
    emit: e,
    expose: n
  }) {
    const r = fe(t.list), {
      list: i
    } = t, s = () => {
      e("handleChange", r);
    }, o = ({
      key: v,
      placeholder: m,
      maxlength: x,
      minlength: b,
      disabled: _
    }) => M(qn, {
      modelValue: r.value[v],
      "onUpdate:modelValue": (w) => r.value[v] = w,
      clearable: !0,
      maxlength: x,
      minlength: b,
      disabled: _,
      onChange: () => s(),
      placeholder: m || "全部"
    }, null), a = ({
      key: v,
      placeholder: m,
      max: x,
      min: b,
      disabled: _,
      precision: w,
      step: S = 1
    }) => M(Cd, {
      modelValue: r.value[v],
      "onUpdate:modelValue": (y) => r.value[v] = y,
      clearable: !0,
      max: x,
      min: b,
      disabled: _,
      precision: w,
      step: S,
      onChange: () => s(),
      placeholder: m || "全部"
    }, null), l = ({
      key: v,
      placeholder: m,
      disabled: x,
      options: b,
      multiple: _ = !1,
      filterable: w = !0
    }) => M(Wi, {
      modelValue: r.value[v],
      "onUpdate:modelValue": (S) => r.value[v] = S,
      clearable: !0,
      disabled: x,
      multiple: _,
      filterable: w,
      onChange: () => s(),
      placeholder: m || "全部"
    }, {
      default: () => [b == null ? void 0 : b.map((S) => M(Gr, {
        key: S.value,
        label: S.label,
        value: S.value
      }, null))]
    }), c = ({
      key: v,
      disabled: m,
      options: x
    }) => M(yr, {
      modelValue: r.value[v],
      "onUpdate:modelValue": (b) => r.value[v] = b,
      disabled: m,
      onChange: () => s()
    }, {
      default: () => [x == null ? void 0 : x.map((b) => M(ni, {
        key: b.value,
        label: b.label,
        value: b.value
      }, null))]
    }), u = ({
      key: v,
      disabled: m,
      options: x,
      min: b,
      max: _
    }) => M(ri, {
      modelValue: r.value[v],
      "onUpdate:modelValue": (w) => r.value[v] = w,
      disabled: m,
      max: _,
      min: b,
      onChange: () => s()
    }, {
      default: () => [x == null ? void 0 : x.map((w) => M(tn, {
        key: w.value,
        label: w.label,
        value: w.value
      }, null))]
    }), h = ({
      key: v,
      disabled: m,
      editable: x = !0,
      startPlaceholder: b = "开始日期",
      endplaceholder: _ = "结束日期",
      dateType: w = Hn.date,
      format: S,
      placeholder: y = "请选择日期",
      popperclass: E,
      rangeSeparator: I = "-",
      defaultValue: A,
      defaultTime: k,
      valueFormat: R,
      disabledDate: N = () => !1
    }) => {
      let V = S;
      if (!V)
        switch (w) {
          case Hn.date:
          case Hn.dates:
            V = "YYYY-MM-DD";
            break;
          case Hn.year:
            V = "YYYY";
            break;
          case Hn.month:
            V = "YYYY-MM";
            break;
          case Hn.week:
            V = "YYYY-MM-DD";
            break;
          default:
            V = "YYYY-MM-DD";
        }
      return M(gn, {
        modelValue: r.value[v],
        "onUpdate:modelValue": (j) => r.value[v] = j,
        onChange: () => s(),
        placeholder: y,
        disabled: m,
        type: w,
        editable: x,
        startPlaceholder: b,
        endPlaceholder: _,
        rangeSeparator: I,
        format: V,
        popperClass: E,
        defaultValue: A,
        defaultTime: k,
        valueFormat: R,
        disabledDate: N
      }, null);
    }, d = ({
      key: v,
      options: m,
      multiple: x = !1,
      filterable: b = !0,
      nodeKey: _ = "id",
      props: w,
      highlightCurrent: S = !0,
      defaultExpandAll: y = !1,
      expandOnClickNode: E = !1,
      placeholder: I = "全部",
      checkOnClickNode: A = !1,
      showCheckbox: k = !1,
      checkStrictly: R = !0,
      defaultCheckedKeys: N = [],
      currentNodeKey: V = "",
      accordion: j = !1
    }) => M(kd, {
      modelValue: r.value[v],
      "onUpdate:modelValue": (W) => r.value[v] = W,
      data: m,
      onChange: () => s(),
      clearable: !0,
      multiple: x,
      props: w,
      placeholder: I,
      filterable: b,
      nodeKey: _,
      highlightCurrent: S,
      defaultExpandAll: y,
      expandOnClickNode: E,
      checkOnClickNode: A,
      showCheckbox: k,
      checkStrictly: R,
      defaultCheckedKeys: N,
      currentNodeKey: V,
      accordion: j
    }, null), f = ({
      key: v,
      placeholder: m,
      typeOption: x,
      _list: b,
      data: _,
      handSetChild: w
    }) => M(Vp, {
      typeOption: x,
      list: b,
      key: v,
      props: t,
      data: _,
      handSetChild: w,
      placeholder: m
    }, null), g = (v) => {
      switch (v.type) {
        case "":
        case void 0:
        case hn.input:
          return o(v);
        case hn.number:
          return a(v);
        case hn.select:
          return l(v);
        case hn.checkbox:
          return u(v);
        case hn.radio:
          return c(v);
        case hn.date:
          return h(v);
        case hn.treeselect:
          return d(v);
        case hn.choosePerson:
          return f(v);
        default:
          return M(Ae, null, null);
      }
    }, p = ye(() => {
      const v = [];
      return i.forEach((m, x) => {
        let b;
        if (!m)
          return [];
        v.push(M(Wn, {
          label: m.label,
          prop: m.key
        }, Up(b = g(m)) ? b : {
          default: () => [b]
        }));
      }), v;
    });
    return () => M(Ae, null, [p.value]);
  }
}), Wp = { class: "ik-head-left" }, qp = { class: "ik-head-right" }, Yp = /* @__PURE__ */ He({
  __name: "IKSearchHead",
  props: {
    //表格展示头部几条数据
    rowData: {
      type: Array,
      default: () => []
    }
  },
  emits: ["import", "export", "delete"],
  setup(t, { emit: e }) {
    return (n, r) => (T(), $("div", {
      class: $e(["ik-head", t.rowData.length === 0 ? "pack-up" : "ik-unfold"])
    }, [
      P("div", Wp, pe(`已选${t.rowData.length}条数据`), 1),
      P("div", qp, [
        M(F(Rt), {
          class: "ik-head-icon",
          title: "查询",
          icon: F(ji),
          onClick: r[0] || (r[0] = (i) => e("delete", t.rowData))
        }, null, 8, ["icon"]),
        M(F(Rt), {
          class: "ik-head-icon",
          title: "导入",
          icon: F(vp),
          onClick: r[1] || (r[1] = (i) => e("import", t.rowData))
        }, null, 8, ["icon"]),
        M(F(Rt), {
          class: "ik-head-icon",
          title: "导出",
          icon: F(mp),
          onClick: r[2] || (r[2] = (i) => e("export", t.rowData))
        }, null, 8, ["icon"])
      ])
    ], 2));
  }
});
const Nd = /* @__PURE__ */ ze(Yp, [["__scopeId", "data-v-c8e3b9d9"]]), Gp = { class: "ik-pack" }, Qp = /* @__PURE__ */ He({
  __name: "IKSearch",
  props: {
    enter: {
      type: Boolean,
      default: !0
    },
    // 最小占用栅格数
    minSpan: {
      type: Number,
      default: 6
    },
    // inline
    inline: {
      type: Boolean,
      default: !0
    },
    // 表单model
    model: {
      type: Object,
      default: () => {
      }
    },
    // 表单ref
    formRef: {
      type: Object,
      default: null
    },
    // label宽度
    labelWidth: {
      type: Number,
      default: 100
    },
    statusIcon: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: ""
    },
    // card 阴影
    shadow: {
      type: String,
      default: "never"
    },
    showSearch: {
      type: Boolean,
      default: !0
    },
    //要展示的搜索列
    list: {
      type: Array,
      default: () => []
    },
    //表格展示头部几条数据
    rowData: {
      type: Array,
      default: () => []
    },
    // 默认显示搜索条件数量
    num: {
      type: Number,
      default: 4
    }
  },
  emits: ["refresh", "search", "update:formRef", "import", "export", "delete"],
  setup(t, { emit: e }) {
    const n = t, r = {}, i = {}, s = fe([]), o = fe({ ...i }), a = fe(null), l = fe(!1);
    dt(s, (d, f) => {
      const g = f.filter((p) => !d.includes(p));
      if (g.length) {
        let p = !1;
        g.forEach((v) => {
          o.value[v] !== void 0 && (p = !0), o.value[v] = void 0;
        }), p && e("search", o.value);
      }
    }), n.list.forEach((d, f) => {
      i[d.key] = i[d.value], f < n.num && (r[d.key] = r[d.value], s.value.push(d.key));
    });
    const c = ye(
      () => s.value.map((d) => n.list.find((f) => f.key === d))
    );
    ye(() => {
      const { minSpan: d } = n;
      return c.value.length < 4 ? d > 8 || d > 6 ? d : 6 : d;
    });
    const u = () => {
      var d;
      try {
        (d = a.value) == null || d.resetFields(), e("refresh"), e("search", o.value);
      } catch {
      }
    }, h = () => {
      l.value = !l.value;
    };
    return (d, f) => (T(), $("div", null, [
      M(Nd, {
        rowData: n.rowData,
        onDelete: f[0] || (f[0] = (g) => e("delete", t.rowData)),
        onImport: f[1] || (f[1] = (g) => e("import", t.rowData)),
        onExport: f[2] || (f[2] = (g) => e("export", t.rowData))
      }, null, 8, ["rowData"]),
      M(F(Ad), {
        class: $e(["gl-search-card", l.value ? "pack-up-search" : "ik-unfold-search"]),
        shadow: t.shadow
      }, Pa({
        default: Q(() => [
          M(F(Fa), {
            ref_key: "_formRef",
            ref: a,
            inline: t.inline,
            model: o.value,
            "status-icon": t.statusIcon,
            "label-width": `${t.labelWidth}px`,
            class: "in-label",
            onKeydown: f[5] || (f[5] = dp(Tt((g) => e("search", o.value), ["prevent"]), ["enter"]))
          }, {
            default: Q(() => [
              M(F(Dd), { gutter: 10 }, {
                default: Q(() => [
                  (T(!0), $(Ae, null, qe(c.value, (g, p) => (T(), de(F(Td), {
                    key: p,
                    class: $e(
                      [
                        "el-col",
                        "el-col-24",
                        `el-col-sm-${12 * (g.col || 1) * (p === c.value.length - 1 ? 2 : 1)}`,
                        `el-col-md-${8 * (g.col || 1) * (p === c.value.length - 1 ? 2 : 1)}`,
                        `el-col-lg-${6 * (g.col || 1) * (p === c.value.length - 1 ? 2 : 1)}`,
                        `el-col-xl-${4 * (g.col || 1) * (p === c.value.length - 1 ? 2 : 1)}`,
                        "is-guttered",
                        "el-col-4",
                        `el-col-l-${4 * (g.col || 1) * (p === c.value.length - 1 ? 2 : 1)}`,
                        `el-col-sl-${5 * (g.col || 1) * (p === c.value.length - 1 ? 2 : 1)}`,
                        `${p === c.value.length - 1 ? "last-col" : ""}`
                      ].join(" ")
                    )
                  }, {
                    default: Q(() => [
                      P("div", {
                        class: $e(["last-with-btn", p === c.value.length - 1 ? "last-form" : ""])
                      }, [
                        g != null && g.slot ? Je(d.$slots, g == null ? void 0 : g.slot, { key: 0 }, void 0, !0) : re("", !0),
                        g != null && g.slot ? re("", !0) : (T(), de(F(jp), {
                          key: 1,
                          onHandleChange: f[3] || (f[3] = (v) => e("search", o.value)),
                          list: [t.list[p]]
                        }, null, 8, ["list"])),
                        p + 1 === c.value.length ? (T(), $(Ae, { key: 2 }, [
                          t.showSearch ? (T(), de(F(Rt), {
                            key: 0,
                            class: "icon-more el-icon ml",
                            title: "查询",
                            icon: F(bp),
                            onClick: f[4] || (f[4] = (v) => e("search", o.value))
                          }, null, 8, ["icon"])) : re("", !0),
                          M(F(Rt), {
                            icon: F(Ha),
                            class: "icon-more el-icon ml",
                            title: "重置",
                            onClick: u
                          }, null, 8, ["icon"])
                        ], 64)) : re("", !0)
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["class"]))), 128))
                ]),
                _: 3
              })
            ]),
            _: 3
          }, 8, ["inline", "model", "status-icon", "label-width"])
        ]),
        _: 2
      }, [
        t.title ? {
          name: "header",
          fn: Q(() => [
            P("h2", null, pe(t.title), 1)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["class", "shadow"]),
      P("div", Gp, [
        P("div", {
          class: "ik-pack-up",
          onClick: h
        }, [
          M(F(it), { size: "16" }, {
            default: Q(() => [
              Ot(M(F(yp), null, null, 512), [
                [br, !l.value]
              ])
            ]),
            _: 1
          })
        ])
      ])
    ]));
  }
});
const Zp = /* @__PURE__ */ ze(Qp, [["__scopeId", "data-v-58bf3841"]]), tk = tt(Zp), nk = tt(Nd), Kp = { class: "content" }, Xp = { class: "top" }, Jp = ["onClick"], eg = ["onClick"], tg = ["onClick"], ng = ["id"], rg = ["onClick"], ig = /* @__PURE__ */ He({
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
  setup(t, { emit: e }) {
    const n = t, r = ye(() => Number(
      n.active.indexOf("-") > 0 ? n.active.split("-")[0] : n.active
    )), i = ye(() => n.active.indexOf("-") > 0 ? Number(n.active.split("-")[1]) : 0), s = (h) => {
      let d = "", f = h + 1;
      return f < r.value ? d = "active before-bg" : f === r.value ? d = "active-text active-bg" : f > r.value && (d = "after-text after-bg"), `${d} index`;
    }, o = (h) => {
      let d = "", f = h + 1;
      return f < r.value ? d = "before-text" : f === r.value ? d = "active" : f > r.value && (d = "after-text"), `${d} text`;
    }, a = (h) => {
      let d = "", f = h + 1;
      return f < r.value ? d = "before-style" : f < n.list.length && (d = "after-style"), `${d} bottom`;
    }, l = (h, d) => {
      let f = "", g = h + 1, p = d + 1;
      return g < r.value ? f = "before-text" : g === r.value ? p < i.value ? f = "before-text" : p === i.value ? f = "active" : p > i.value && (f = "after-text") : g > r.value && (f = "after-text"), `${f}`;
    }, c = (h, d) => {
      n.needClick && (h[n.propsField.children] || (e("update:active", d + ""), e("click", h)));
    }, u = (h, d) => {
      h.show = !h.show;
      let f = document.getElementById(`children${d}`);
      h.show ? f.style.display = "none" : f.style.display = "block";
    };
    return (h, d) => (T(), $("div", Kp, [
      (T(!0), $(Ae, null, qe(t.list, (f, g) => {
        var p, v;
        return T(), $("div", {
          class: "line-block",
          key: g
        }, [
          P("div", Xp, [
            P("div", {
              class: $e(s(g))
            }, pe(g + 1), 3),
            P("div", {
              class: $e(o(g)),
              style: Oe(t.needClick ? "cursor: pointer;" : ""),
              onClick: (m) => c(f, g + 1)
            }, [
              Te(pe(f[t.propsField.name]) + " ", 1),
              (p = f[t.propsField.children]) != null && p.length && !f.show ? (T(), $("i", {
                key: 0,
                class: "ikapprove icon-a-putongjiantouzhankai",
                onClick: (m) => u(f, g)
              }, null, 8, eg)) : re("", !0),
              (v = f[t.propsField.children]) != null && v.length && f.show ? (T(), $("i", {
                key: 1,
                onClick: (m) => u(f, g),
                class: "ikapprove icon-a-putongjiantoushouqi"
              }, null, 8, tg)) : re("", !0)
            ], 14, Jp)
          ]),
          P("ul", {
            class: $e(a(g))
          }, [
            P("div", {
              id: `children${g}`
            }, [
              (T(!0), $(Ae, null, qe(f[t.propsField.children], (m, x) => (T(), $("li", {
                class: $e(l(g, x)),
                style: Oe(t.needClick ? "cursor: pointer;" : ""),
                key: x,
                onClick: (b) => c(m, g + 1 + "-" + (x + 1))
              }, pe(m.name), 15, rg))), 128))
            ], 8, ng)
          ], 2)
        ]);
      }), 128))
    ]));
  }
});
const sg = /* @__PURE__ */ ze(ig, [["__scopeId", "data-v-aa17b274"]]), rk = tt(sg);
const Va = (t) => (Ar("data-v-21621e0f"), t = t(), Dr(), t), og = {
  class: "approveProcess",
  id: "approveProcess"
}, ag = ["id"], lg = { class: "topBlock" }, cg = { class: "left" }, ug = { class: "nodeBg" }, dg = ["src"], fg = { class: "right" }, hg = { class: "topInfo" }, pg = { key: 0 }, gg = {
  key: 0,
  class: "main-text"
}, vg = { class: "name" }, mg = { key: 0 }, bg = { key: 0 }, yg = { key: 1 }, xg = /* @__PURE__ */ Va(() => /* @__PURE__ */ P("span", {
  class: "red",
  style: { margin: "0px 5px" }
}, "退回至", -1)), _g = { key: 1 }, wg = { key: 0 }, Sg = { key: 0 }, Eg = { key: 1 }, Cg = { key: 1 }, kg = /* @__PURE__ */ Va(() => /* @__PURE__ */ P("div", { class: "main-text" }, "抄送人员", -1)), Ag = { class: "name" }, Dg = { key: 0 }, Tg = { style: { color: "#000" } }, Rg = {
  class: "blue",
  style: { "margin-left": "5px", "font-size": "12px" }
}, Ig = { key: 1 }, Mg = {
  key: 0,
  class: "blue",
  style: { "font-size": "12px" }
}, Og = { key: 1 }, Ng = {
  key: 0,
  class: "blue",
  style: { "font-size": "12px" }
}, Bg = {
  key: 1,
  class: "blue",
  style: { "font-size": "12px" }
}, Lg = { class: "time" }, Pg = { key: 0 }, $g = { key: 1 }, Hg = ["onClick"], Fg = ["onClick"], zg = {
  key: 0,
  class: "opinion"
}, Vg = { key: 0 }, Ug = { key: 1 }, jg = /* @__PURE__ */ Va(() => /* @__PURE__ */ P("span", null, "添加审批人", -1)), Wg = { style: { color: "#000", "margin-left": "8px" } }, qg = {
  key: 1,
  class: "annex"
}, Yg = ["onClick"], Gg = { class: "text" }, Qg = { class: "fileName" }, Zg = { class: "size" }, Kg = {
  key: 2,
  class: "annexImage"
}, Xg = {
  key: 3,
  class: "approveList"
}, Jg = { class: "nodeBg-list" }, ev = ["src"], tv = {
  key: 1,
  class: "ikapprove ikapprove-duihao2 green read"
}, nv = { class: "main-text" }, rv = {
  name: "IkingApprovalProcessDetail"
}, iv = /* @__PURE__ */ He({
  ...rv,
  props: {
    // 是否本地打开
    local: {
      type: Boolean,
      default: !1
    },
    // 状态数组
    defaultStatus: {
      type: Object,
      default: () => ({})
    },
    // 节点类型
    defaultNodeType: {
      type: Object,
      default: () => ({})
    },
    // 数据数组
    dataList: {
      type: Array,
      default: () => []
    },
    // 字段映射
    defaultFieldMap: {
      type: Object,
      default: () => ({})
    },
    // 退回的节点数组
    returnNode: {
      type: Array,
      default: () => []
    },
    //文件访问地址
    fileUrl: {
      type: String,
      default: ""
    }
  },
  emits: ["preview"],
  setup(t, { emit: e }) {
    const n = t, r = rn({
      nodeType: {
        发起人节点: "1",
        审批节点: "2",
        办理节点: "3",
        抄送节点: "4",
        ...n.defaultNodeType
      },
      statusOption: {
        发起: "1",
        等待: "2",
        同意: "3",
        拒绝: "4",
        转交: "5",
        加签: "6",
        退回: "7",
        撤销: "8",
        评论: "9",
        ...n.defaultStatus
      },
      listData: [],
      defaultFile: {
        id: "id",
        nodeId: "nodeId",
        nodeType: "nodeType",
        nodeTypeName: "nodeTypeName",
        approveStatus: "approveStatus",
        approveStatusName: "approveStatusName",
        originator: "originator",
        operationTime: "operationTime",
        approveType: "approveType",
        approveTypeName: "approveTypeName",
        multiExecutorTypeName: "multiExecutorTypeName",
        approveOpinion: "approveOpinion",
        countersignPer: "countersignPer",
        backToRecordNodeName: "backToRecordNodeName",
        attachment: "attachment",
        attachmentParam: {
          id: "id",
          originName: "originName",
          url: "url",
          suffix: "suffix",
          size: "size"
        },
        attachmentImg: "attachmentImg",
        returnNode: "returnNode",
        returnNodeName: "returnNodeName",
        lineType: "lineType",
        allRead: "allRead",
        read: "read",
        approvePersonList: [
          {
            id: "id",
            name: "name",
            approveState: "approveState",
            approveTime: "approveTime",
            approveOpinion: "approveOpinion",
            userAvatar: "userAvatar",
            accomplish: "accomplish"
          }
        ],
        ...n.defaultFieldMap
      }
    });
    dt(
      () => n.dataList,
      (d) => {
        d && (In(() => {
          r.listData = d;
        }), setTimeout(() => {
          n.returnNode.length && i();
        }, 500));
      },
      { deep: !0 }
    ), kr(() => {
      n.dataList.length && (r.listData = n.dataList, setTimeout(() => {
        n.returnNode.length && i();
      }, 500));
    });
    const i = () => {
      let d = null;
      for (d of n.returnNode) {
        let f = Array.from(new Array(d[1] + 1).keys()).slice(d[0]);
        In(() => {
          s(f);
        });
      }
    }, s = (d) => {
      var b, _, w;
      let f = document.createElement("div"), g = document.getElementById("approveProcess"), p = 0, v = (b = document.getElementById(`${d[0]}`)) == null ? void 0 : b.offsetWidth, m = (_ = document.getElementById(`${d[0]}`)) == null ? void 0 : _.offsetLeft, x = (w = document.getElementById(`${d[0]}`)) == null ? void 0 : w.offsetTop;
      d.forEach((S) => {
        let y = document.getElementById(`${S}`);
        p += y.offsetHeight;
      }), setTimeout(() => {
        f.style.width = v + 32 + "px", f.style.height = p + "px", f.style.background = "#f9f9f9", f.style.position = "absolute", f.style.top = x - 16 + "px", f.style.left = m - 16 + "px", f.style.zIndex = -1, g == null || g.appendChild(f);
      });
    }, o = (d, f) => {
      var v;
      let g = (v = r.listData) == null ? void 0 : v.findIndex((m) => m.lineType == "dashed"), p = "";
      switch (d) {
        case r.statusOption.发起:
          p = "ikapprove-duihao2 green";
          break;
        case r.statusOption.等待:
          p = g == f ? "ikapprove-dengdai orange" : "";
          break;
        case r.statusOption.同意:
          p = "ikapprove-duihao2 green";
          break;
        case r.statusOption.拒绝:
          p = "ikapprove-jujue red";
          break;
        case r.statusOption.转交:
          p = "ikapprove-zhuanjiao blue";
          break;
        case r.statusOption.加签:
          p = "ikapprove-tianjia blue";
          break;
        case r.statusOption.退回:
          p = "ikapprove-s_fanhui2 red";
          break;
        case r.statusOption.评论:
          p = "ikapprove-pinglun1 blue";
          break;
      }
      return `ikapprove ${p}`;
    }, a = (d, f) => {
      let g = "";
      switch (d) {
        case r.nodeType.发起人节点:
          g = "ikapprove-ziyuan";
          break;
        case r.nodeType.审批节点:
          f && f.length == 1 ? g = "ikapprove-ziyuan" : g = "ikapprove-shenpi";
          break;
        case r.nodeType.办理节点:
          g = "ikapprove-bianji";
          break;
        case r.nodeType.抄送节点:
          g = "ikapprove-chaosong";
          break;
        default:
          g = "ikapprove-ziyuan";
      }
      return `ikapprove ${g}`;
    }, l = (d) => {
      let f = "";
      return d == "jpg" || d == "jpeg" || d == "png" ? f = "ikapprove-tupian" : d == "doc" || d == "docx" ? f = "ikapprove-WORD" : d == "xls" || d == "xlsx" ? f = "ikapprove-EXCEL" : d == "ppt" || d == "pptx" ? f = "ikapprove-pptcopy" : d == "pdf" ? f = "ikapprove-PDF" : d == "rar" || d == "zip" ? f = "ikapprove-fujian" : d == "txt" || d == "zip" ? f = "ikapprove-TXTCopy" : d == "mp3" || d == "wma" || d == "m4a" ? f = "ikapprove-yinpinwenjian" : (d == "avi" || d == "wmv" || d == "mp4" || d == "mov") && (f = "ikapprove-shipinwenjian"), `icon ikapprove ${f}`;
    }, c = (d) => {
      e("preview", d), n.local || window.open(h(d[r.defaultFile.attachmentParam.url]));
    }, u = (d, f) => {
      d.show = !d.show;
      let g = document.getElementById(`${d[r.defaultFile.nodeId]}`), p = Array.from(g == null ? void 0 : g.getElementsByClassName("approveList"));
      for (let v of p)
        v.style.display = f;
    }, h = (d) => {
      let f = "";
      return d.includes("http") || d.includes("https") ? f = d : f = n.fileUrl + d, f;
    };
    return (d, f) => {
      const g = Me("el-image");
      return T(), $("div", og, [
        (T(!0), $(Ae, null, qe(r.listData, (p, v) => {
          var m, x, b, _, w, S, y, E, I, A;
          return T(), $("div", {
            class: "approveBlock",
            id: p[r.defaultFile.nodeId],
            key: p[r.defaultFile.nodeId]
          }, [
            P("div", lg, [
              P("div", cg, [
                P("span", ug, [
                  ((m = p[r.defaultFile.approvePersonList]) == null ? void 0 : m.length) == 1 && p[r.defaultFile.approvePersonList][0].userAvatar ? (T(), $("img", {
                    key: 0,
                    style: { width: "100%", height: "100%", "border-radius": "50%" },
                    src: h(p[r.defaultFile.approvePersonList][0].userAvatar),
                    alt: ""
                  }, null, 8, dg)) : (T(), $("i", {
                    key: 1,
                    class: $e(
                      a(
                        p[r.defaultFile.nodeType],
                        p[r.defaultFile.approvePersonList]
                      )
                    )
                  }, null, 2)),
                  P("i", {
                    class: $e(
                      o(p[r.defaultFile.approveStatus], v)
                    )
                  }, null, 2)
                ])
              ]),
              P("div", fg, [
                P("div", hg, [
                  P("div", null, [
                    p[r.defaultFile.nodeType] != r.nodeType.抄送节点 ? (T(), $("div", pg, [
                      p[r.defaultFile.approveStatus] != r.statusOption.撤销 && p[r.defaultFile.approveStatus] != r.statusOption.评论 ? (T(), $("div", gg, pe(p[r.defaultFile.nodeTypeName]), 1)) : re("", !0),
                      P("div", vg, [
                        p[r.defaultFile.lineType] == "solid" ? (T(), $("div", mg, [
                          P("span", {
                            style: Oe({
                              color: p[r.defaultFile.approveStatus] == r.statusOption.评论 ? "#000" : ""
                            })
                          }, pe(p[r.defaultFile.originator]), 5),
                          p[r.defaultFile.approveStatusName] && p[r.defaultFile.approveStatus] != r.statusOption.发起 && p[r.defaultFile.approveStatus] != r.statusOption.退回 ? (T(), $("span", bg, pe(p[r.defaultFile.approveStatus] == r.statusOption.评论 ? " 添加了评论" : "（" + p[r.defaultFile.approveStatusName] + "）"), 1)) : re("", !0),
                          p[r.defaultFile.approveStatus] == r.statusOption.退回 ? (T(), $("span", yg, [
                            xg,
                            Te(pe(p[r.defaultFile.backToRecordNodeName]), 1)
                          ])) : re("", !0)
                        ])) : (T(), $("div", _g, [
                          ((x = p[r.defaultFile.approvePersonList]) == null ? void 0 : x.length) == 1 ? (T(), $("span", wg, [
                            Te(pe(p[r.defaultFile.originator]) + " ", 1),
                            p[r.defaultFile.approveStatus] == r.statusOption.等待 ? (T(), $("span", Sg, pe(`（${p[r.defaultFile.approveStatusName]}）`), 1)) : re("", !0)
                          ])) : (T(), $("span", Eg, pe(((b = p[r.defaultFile.approvePersonList]) == null ? void 0 : b.length) + "人" + p[r.defaultFile.approveTypeName]), 1))
                        ]))
                      ])
                    ])) : (T(), $("div", Cg, [
                      kg,
                      P("div", Ag, [
                        ((_ = p[r.defaultFile.approvePersonList]) == null ? void 0 : _.length) == 1 ? (T(), $("span", Dg, [
                          P("span", null, [
                            Te("已抄送给 "),
                            P("span", Tg, pe(p[r.defaultFile.approvePersonList][0].userName), 1)
                          ]),
                          P("span", Rg, pe(p[r.defaultFile.approvePersonList][0].status === "END" ? "已读" : "未读"), 1)
                        ])) : re("", !0),
                        ((w = p[r.defaultFile.approvePersonList]) == null ? void 0 : w.length) > 1 ? (T(), $("span", Ig, [
                          Te(pe(`已抄送${(S = p[r.defaultFile.approvePersonList]) == null ? void 0 : S.length}人`) + " ", 1),
                          p[r.defaultFile.allRead] ? (T(), $("span", Mg, " 全部已读 ")) : (T(), $("span", Og, [
                            p[r.defaultFile.read] ? re("", !0) : (T(), $("span", Ng, " 全部未读 ")),
                            p[r.defaultFile.read] ? (T(), $("span", Bg, pe(p[r.defaultFile.read]) + "人已读 ", 1)) : re("", !0)
                          ]))
                        ])) : re("", !0)
                      ])
                    ]))
                  ]),
                  P("div", Lg, [
                    p[r.defaultFile.nodeType] != r.nodeType.抄送节点 ? (T(), $("span", Pg, pe(p[r.defaultFile.operationTime]), 1)) : re("", !0),
                    p[r.defaultFile.nodeType] == r.nodeType.抄送节点 && ((y = p[r.defaultFile.approvePersonList]) == null ? void 0 : y.length) > 1 ? (T(), $("span", $g, [
                      p != null && p.show ? (T(), $("i", {
                        key: 0,
                        class: "ikapprove ikapprove-a-putongjiantouzhankai",
                        onClick: (k) => u(p, "flex")
                      }, null, 8, Hg)) : (T(), $("i", {
                        key: 1,
                        onClick: (k) => u(p, "none"),
                        class: "ikapprove ikapprove-a-putongjiantoushouqi"
                      }, null, 8, Fg))
                    ])) : re("", !0)
                  ])
                ])
              ])
            ]),
            P("div", {
              class: "bottomBlock",
              style: Oe({
                borderLeft: v == r.listData.length - 1 ? "" : `2px ${p[r.defaultFile.lineType]} var(--el-border-color)`
              })
            }, [
              p[r.defaultFile.approveOpinion] || p[r.defaultFile.approveStatus] == r.statusOption.加签 ? (T(), $("div", zg, [
                p[r.defaultFile.approveOpinion] ? (T(), $("span", Vg, pe(p[r.defaultFile.approveOpinion]), 1)) : re("", !0),
                p[r.defaultFile.approveStatus] == r.statusOption.加签 ? (T(), $("span", Ug, [
                  jg,
                  P("span", Wg, pe(p[r.defaultFile.countersignPer][0].userName), 1)
                ])) : re("", !0)
              ])) : re("", !0),
              (E = p[r.defaultFile.attachment]) != null && E.length ? (T(), $("div", qg, [
                (T(!0), $(Ae, null, qe(p[r.defaultFile.attachment], (k, R) => (T(), $("div", {
                  class: "file-card",
                  key: R,
                  onClick: (N) => c(k)
                }, [
                  P("div", {
                    class: $e(l(k[r.defaultFile.attachmentParam.suffix]))
                  }, null, 2),
                  P("div", Gg, [
                    P("div", Qg, pe(k[r.defaultFile.attachmentParam.originName]), 1),
                    P("div", Zg, pe((k[r.defaultFile.attachmentParam.size] / 1024 / 1024).toFixed(3)) + "MB ", 1)
                  ])
                ], 8, Yg))), 128))
              ])) : re("", !0),
              (I = p[r.defaultFile.attachmentImg]) != null && I.length ? (T(), $("div", Kg, [
                (T(!0), $(Ae, null, qe(p[r.defaultFile.attachmentImg], (k, R) => (T(), $("div", {
                  class: "image",
                  key: R
                }, [
                  M(g, {
                    src: h(k),
                    fit: "cover",
                    "z-index": "9999",
                    "zoom-rate": 1.2,
                    alt: h(k)
                  }, null, 8, ["src", "alt"])
                ]))), 128))
              ])) : re("", !0),
              (p[r.defaultFile.nodeType] == r.nodeType.抄送节点 || p[r.defaultFile.approveStatus] == r.statusOption.等待) && ((A = p[r.defaultFile.approvePersonList]) == null ? void 0 : A.length) > 1 ? (T(), $("div", Xg, [
                (T(!0), $(Ae, null, qe(p[r.defaultFile.approvePersonList], (k) => (T(), $("div", {
                  class: "perBlock",
                  key: k.userName
                }, [
                  P("span", Jg, [
                    k.userAvatar ? (T(), $("img", {
                      key: 0,
                      style: { width: "100%", height: "100%", "border-radius": "50%" },
                      src: h(k.userAvatar),
                      alt: ""
                    }, null, 8, ev)) : re("", !0),
                    P("span", null, pe(k.userName.slice(-2)), 1),
                    k.status === "END" ? (T(), $("i", tv)) : re("", !0)
                  ]),
                  P("div", nv, pe(k.userName), 1)
                ]))), 128))
              ])) : re("", !0)
            ], 4)
          ], 8, ag);
        }), 128))
      ]);
    };
  }
});
const sv = /* @__PURE__ */ ze(iv, [["__scopeId", "data-v-21621e0f"]]), ik = tt(sv);
var Re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ov(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function r() {
      if (this instanceof r) {
        var i = [null];
        i.push.apply(i, arguments);
        var s = Function.bind.apply(e, i);
        return new s();
      }
      return e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(t).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(t, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    });
  }), n;
}
var zl = {}, av = {
  get exports() {
    return zl;
  },
  set exports(t) {
    zl = t;
  }
};
function Fr(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var qi = {}, lv = {
  get exports() {
    return qi;
  },
  set exports(t) {
    qi = t;
  }
};
const cv = {}, uv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cv
}, Symbol.toStringTag, { value: "Module" })), dv = /* @__PURE__ */ ov(uv);
var Vl;
function Be() {
  return Vl || (Vl = 1, function(t, e) {
    (function(n, r) {
      t.exports = r();
    })(Re, function() {
      var n = n || function(r, i) {
        var s;
        if (typeof window < "u" && window.crypto && (s = window.crypto), typeof self < "u" && self.crypto && (s = self.crypto), typeof globalThis < "u" && globalThis.crypto && (s = globalThis.crypto), !s && typeof window < "u" && window.msCrypto && (s = window.msCrypto), !s && typeof Re < "u" && Re.crypto && (s = Re.crypto), !s && typeof Fr == "function")
          try {
            s = dv;
          } catch {
          }
        var o = function() {
          if (s) {
            if (typeof s.getRandomValues == "function")
              try {
                return s.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof s.randomBytes == "function")
              try {
                return s.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, a = Object.create || function() {
          function x() {
          }
          return function(b) {
            var _;
            return x.prototype = b, _ = new x(), x.prototype = null, _;
          };
        }(), l = {}, c = l.lib = {}, u = c.Base = function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(x) {
              var b = a(this);
              return x && b.mixIn(x), (!b.hasOwnProperty("init") || this.init === b.init) && (b.init = function() {
                b.$super.init.apply(this, arguments);
              }), b.init.prototype = b, b.$super = this, b;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var x = this.extend();
              return x.init.apply(x, arguments), x;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(x) {
              for (var b in x)
                x.hasOwnProperty(b) && (this[b] = x[b]);
              x.hasOwnProperty("toString") && (this.toString = x.toString);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }(), h = c.WordArray = u.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(x, b) {
            x = this.words = x || [], b != i ? this.sigBytes = b : this.sigBytes = x.length * 4;
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(x) {
            return (x || f).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(x) {
            var b = this.words, _ = x.words, w = this.sigBytes, S = x.sigBytes;
            if (this.clamp(), w % 4)
              for (var y = 0; y < S; y++) {
                var E = _[y >>> 2] >>> 24 - y % 4 * 8 & 255;
                b[w + y >>> 2] |= E << 24 - (w + y) % 4 * 8;
              }
            else
              for (var I = 0; I < S; I += 4)
                b[w + I >>> 2] = _[I >>> 2];
            return this.sigBytes += S, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var x = this.words, b = this.sigBytes;
            x[b >>> 2] &= 4294967295 << 32 - b % 4 * 8, x.length = r.ceil(b / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var x = u.clone.call(this);
            return x.words = this.words.slice(0), x;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(x) {
            for (var b = [], _ = 0; _ < x; _ += 4)
              b.push(o());
            return new h.init(b, x);
          }
        }), d = l.enc = {}, f = d.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(x) {
            for (var b = x.words, _ = x.sigBytes, w = [], S = 0; S < _; S++) {
              var y = b[S >>> 2] >>> 24 - S % 4 * 8 & 255;
              w.push((y >>> 4).toString(16)), w.push((y & 15).toString(16));
            }
            return w.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(x) {
            for (var b = x.length, _ = [], w = 0; w < b; w += 2)
              _[w >>> 3] |= parseInt(x.substr(w, 2), 16) << 24 - w % 8 * 4;
            return new h.init(_, b / 2);
          }
        }, g = d.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(x) {
            for (var b = x.words, _ = x.sigBytes, w = [], S = 0; S < _; S++) {
              var y = b[S >>> 2] >>> 24 - S % 4 * 8 & 255;
              w.push(String.fromCharCode(y));
            }
            return w.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(x) {
            for (var b = x.length, _ = [], w = 0; w < b; w++)
              _[w >>> 2] |= (x.charCodeAt(w) & 255) << 24 - w % 4 * 8;
            return new h.init(_, b);
          }
        }, p = d.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(x) {
            try {
              return decodeURIComponent(escape(g.stringify(x)));
            } catch {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(x) {
            return g.parse(unescape(encodeURIComponent(x)));
          }
        }, v = c.BufferedBlockAlgorithm = u.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new h.init(), this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(x) {
            typeof x == "string" && (x = p.parse(x)), this._data.concat(x), this._nDataBytes += x.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(x) {
            var b, _ = this._data, w = _.words, S = _.sigBytes, y = this.blockSize, E = y * 4, I = S / E;
            x ? I = r.ceil(I) : I = r.max((I | 0) - this._minBufferSize, 0);
            var A = I * y, k = r.min(A * 4, S);
            if (A) {
              for (var R = 0; R < A; R += y)
                this._doProcessBlock(w, R);
              b = w.splice(0, A), _.sigBytes -= k;
            }
            return new h.init(b, k);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var x = u.clone.call(this);
            return x._data = this._data.clone(), x;
          },
          _minBufferSize: 0
        });
        c.Hasher = v.extend({
          /**
           * Configuration options.
           */
          cfg: u.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(x) {
            this.cfg = this.cfg.extend(x), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            v.reset.call(this), this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(x) {
            return this._append(x), this._process(), this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(x) {
            x && this._append(x);
            var b = this._doFinalize();
            return b;
          },
          blockSize: 16,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(x) {
            return function(b, _) {
              return new x.init(_).finalize(b);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(x) {
            return function(b, _) {
              return new m.HMAC.init(x, _).finalize(b);
            };
          }
        });
        var m = l.algo = {};
        return l;
      }(Math);
      return n;
    });
  }(lv)), qi;
}
var Yi = {}, fv = {
  get exports() {
    return Yi;
  },
  set exports(t) {
    Yi = t;
  }
}, Ul;
function Qs() {
  return Ul || (Ul = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(Be());
    })(Re, function(n) {
      return function(r) {
        var i = n, s = i.lib, o = s.Base, a = s.WordArray, l = i.x64 = {};
        l.Word = o.extend({
          /**
           * Initializes a newly created 64-bit word.
           *
           * @param {number} high The high 32 bits.
           * @param {number} low The low 32 bits.
           *
           * @example
           *
           *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
           */
          init: function(c, u) {
            this.high = c, this.low = u;
          }
          /**
           * Bitwise NOTs this word.
           *
           * @return {X64Word} A new x64-Word object after negating.
           *
           * @example
           *
           *     var negated = x64Word.not();
           */
          // not: function () {
          // var high = ~this.high;
          // var low = ~this.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ANDs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to AND with this word.
           *
           * @return {X64Word} A new x64-Word object after ANDing.
           *
           * @example
           *
           *     var anded = x64Word.and(anotherX64Word);
           */
          // and: function (word) {
          // var high = this.high & word.high;
          // var low = this.low & word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to OR with this word.
           *
           * @return {X64Word} A new x64-Word object after ORing.
           *
           * @example
           *
           *     var ored = x64Word.or(anotherX64Word);
           */
          // or: function (word) {
          // var high = this.high | word.high;
          // var low = this.low | word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise XORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to XOR with this word.
           *
           * @return {X64Word} A new x64-Word object after XORing.
           *
           * @example
           *
           *     var xored = x64Word.xor(anotherX64Word);
           */
          // xor: function (word) {
          // var high = this.high ^ word.high;
          // var low = this.low ^ word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the left.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftL(25);
           */
          // shiftL: function (n) {
          // if (n < 32) {
          // var high = (this.high << n) | (this.low >>> (32 - n));
          // var low = this.low << n;
          // } else {
          // var high = this.low << (n - 32);
          // var low = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the right.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftR(7);
           */
          // shiftR: function (n) {
          // if (n < 32) {
          // var low = (this.low >>> n) | (this.high << (32 - n));
          // var high = this.high >>> n;
          // } else {
          // var low = this.high >>> (n - 32);
          // var high = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Rotates this word n bits to the left.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotL(25);
           */
          // rotL: function (n) {
          // return this.shiftL(n).or(this.shiftR(64 - n));
          // },
          /**
           * Rotates this word n bits to the right.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotR(7);
           */
          // rotR: function (n) {
          // return this.shiftR(n).or(this.shiftL(64 - n));
          // },
          /**
           * Adds this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to add with this word.
           *
           * @return {X64Word} A new x64-Word object after adding.
           *
           * @example
           *
           *     var added = x64Word.add(anotherX64Word);
           */
          // add: function (word) {
          // var low = (this.low + word.low) | 0;
          // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
          // var high = (this.high + word.high + carry) | 0;
          // return X64Word.create(high, low);
          // }
        }), l.WordArray = o.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.x64.WordArray.create();
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ]);
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ], 10);
           */
          init: function(c, u) {
            c = this.words = c || [], u != r ? this.sigBytes = u : this.sigBytes = c.length * 8;
          },
          /**
           * Converts this 64-bit word array to a 32-bit word array.
           *
           * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
           *
           * @example
           *
           *     var x32WordArray = x64WordArray.toX32();
           */
          toX32: function() {
            for (var c = this.words, u = c.length, h = [], d = 0; d < u; d++) {
              var f = c[d];
              h.push(f.high), h.push(f.low);
            }
            return a.create(h, this.sigBytes);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {X64WordArray} The clone.
           *
           * @example
           *
           *     var clone = x64WordArray.clone();
           */
          clone: function() {
            for (var c = o.clone.call(this), u = c.words = this.words.slice(0), h = u.length, d = 0; d < h; d++)
              u[d] = u[d].clone();
            return c;
          }
        });
      }(), n;
    });
  }(fv)), Yi;
}
var Gi = {}, hv = {
  get exports() {
    return Gi;
  },
  set exports(t) {
    Gi = t;
  }
}, jl;
function pv() {
  return jl || (jl = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(Be());
    })(Re, function(n) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var r = n, i = r.lib, s = i.WordArray, o = s.init, a = s.init = function(l) {
            if (l instanceof ArrayBuffer && (l = new Uint8Array(l)), (l instanceof Int8Array || typeof Uint8ClampedArray < "u" && l instanceof Uint8ClampedArray || l instanceof Int16Array || l instanceof Uint16Array || l instanceof Int32Array || l instanceof Uint32Array || l instanceof Float32Array || l instanceof Float64Array) && (l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength)), l instanceof Uint8Array) {
              for (var c = l.byteLength, u = [], h = 0; h < c; h++)
                u[h >>> 2] |= l[h] << 24 - h % 4 * 8;
              o.call(this, u, c);
            } else
              o.apply(this, arguments);
          };
          a.prototype = s;
        }
      }(), n.lib.WordArray;
    });
  }(hv)), Gi;
}
var Qi = {}, gv = {
  get exports() {
    return Qi;
  },
  set exports(t) {
    Qi = t;
  }
}, Wl;
function vv() {
  return Wl || (Wl = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(Be());
    })(Re, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.WordArray, o = r.enc;
        o.Utf16 = o.Utf16BE = {
          /**
           * Converts a word array to a UTF-16 BE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 BE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
           */
          stringify: function(l) {
            for (var c = l.words, u = l.sigBytes, h = [], d = 0; d < u; d += 2) {
              var f = c[d >>> 2] >>> 16 - d % 4 * 8 & 65535;
              h.push(String.fromCharCode(f));
            }
            return h.join("");
          },
          /**
           * Converts a UTF-16 BE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 BE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
           */
          parse: function(l) {
            for (var c = l.length, u = [], h = 0; h < c; h++)
              u[h >>> 1] |= l.charCodeAt(h) << 16 - h % 2 * 16;
            return s.create(u, c * 2);
          }
        }, o.Utf16LE = {
          /**
           * Converts a word array to a UTF-16 LE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 LE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
           */
          stringify: function(l) {
            for (var c = l.words, u = l.sigBytes, h = [], d = 0; d < u; d += 2) {
              var f = a(c[d >>> 2] >>> 16 - d % 4 * 8 & 65535);
              h.push(String.fromCharCode(f));
            }
            return h.join("");
          },
          /**
           * Converts a UTF-16 LE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 LE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
           */
          parse: function(l) {
            for (var c = l.length, u = [], h = 0; h < c; h++)
              u[h >>> 1] |= a(l.charCodeAt(h) << 16 - h % 2 * 16);
            return s.create(u, c * 2);
          }
        };
        function a(l) {
          return l << 8 & 4278255360 | l >>> 8 & 16711935;
        }
      }(), n.enc.Utf16;
    });
  }(gv)), Qi;
}
var Zi = {}, mv = {
  get exports() {
    return Zi;
  },
  set exports(t) {
    Zi = t;
  }
}, ql;
function tr() {
  return ql || (ql = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(Be());
    })(Re, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.WordArray, o = r.enc;
        o.Base64 = {
          /**
           * Converts a word array to a Base64 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Base64 string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
           */
          stringify: function(l) {
            var c = l.words, u = l.sigBytes, h = this._map;
            l.clamp();
            for (var d = [], f = 0; f < u; f += 3)
              for (var g = c[f >>> 2] >>> 24 - f % 4 * 8 & 255, p = c[f + 1 >>> 2] >>> 24 - (f + 1) % 4 * 8 & 255, v = c[f + 2 >>> 2] >>> 24 - (f + 2) % 4 * 8 & 255, m = g << 16 | p << 8 | v, x = 0; x < 4 && f + x * 0.75 < u; x++)
                d.push(h.charAt(m >>> 6 * (3 - x) & 63));
            var b = h.charAt(64);
            if (b)
              for (; d.length % 4; )
                d.push(b);
            return d.join("");
          },
          /**
           * Converts a Base64 string to a word array.
           *
           * @param {string} base64Str The Base64 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
           */
          parse: function(l) {
            var c = l.length, u = this._map, h = this._reverseMap;
            if (!h) {
              h = this._reverseMap = [];
              for (var d = 0; d < u.length; d++)
                h[u.charCodeAt(d)] = d;
            }
            var f = u.charAt(64);
            if (f) {
              var g = l.indexOf(f);
              g !== -1 && (c = g);
            }
            return a(l, c, h);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function a(l, c, u) {
          for (var h = [], d = 0, f = 0; f < c; f++)
            if (f % 4) {
              var g = u[l.charCodeAt(f - 1)] << f % 4 * 2, p = u[l.charCodeAt(f)] >>> 6 - f % 4 * 2, v = g | p;
              h[d >>> 2] |= v << 24 - d % 4 * 8, d++;
            }
          return s.create(h, d);
        }
      }(), n.enc.Base64;
    });
  }(mv)), Zi;
}
var Ki = {}, bv = {
  get exports() {
    return Ki;
  },
  set exports(t) {
    Ki = t;
  }
}, Yl;
function yv() {
  return Yl || (Yl = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(Be());
    })(Re, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.WordArray, o = r.enc;
        o.Base64url = {
          /**
           * Converts a word array to a Base64url string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {string} The Base64url string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
           */
          stringify: function(l, c = !0) {
            var u = l.words, h = l.sigBytes, d = c ? this._safe_map : this._map;
            l.clamp();
            for (var f = [], g = 0; g < h; g += 3)
              for (var p = u[g >>> 2] >>> 24 - g % 4 * 8 & 255, v = u[g + 1 >>> 2] >>> 24 - (g + 1) % 4 * 8 & 255, m = u[g + 2 >>> 2] >>> 24 - (g + 2) % 4 * 8 & 255, x = p << 16 | v << 8 | m, b = 0; b < 4 && g + b * 0.75 < h; b++)
                f.push(d.charAt(x >>> 6 * (3 - b) & 63));
            var _ = d.charAt(64);
            if (_)
              for (; f.length % 4; )
                f.push(_);
            return f.join("");
          },
          /**
           * Converts a Base64url string to a word array.
           *
           * @param {string} base64Str The Base64url string.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
           */
          parse: function(l, c = !0) {
            var u = l.length, h = c ? this._safe_map : this._map, d = this._reverseMap;
            if (!d) {
              d = this._reverseMap = [];
              for (var f = 0; f < h.length; f++)
                d[h.charCodeAt(f)] = f;
            }
            var g = h.charAt(64);
            if (g) {
              var p = l.indexOf(g);
              p !== -1 && (u = p);
            }
            return a(l, u, d);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function a(l, c, u) {
          for (var h = [], d = 0, f = 0; f < c; f++)
            if (f % 4) {
              var g = u[l.charCodeAt(f - 1)] << f % 4 * 2, p = u[l.charCodeAt(f)] >>> 6 - f % 4 * 2, v = g | p;
              h[d >>> 2] |= v << 24 - d % 4 * 8, d++;
            }
          return s.create(h, d);
        }
      }(), n.enc.Base64url;
    });
  }(bv)), Ki;
}
var Xi = {}, xv = {
  get exports() {
    return Xi;
  },
  set exports(t) {
    Xi = t;
  }
}, Gl;
function nr() {
  return Gl || (Gl = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(Be());
    })(Re, function(n) {
      return function(r) {
        var i = n, s = i.lib, o = s.WordArray, a = s.Hasher, l = i.algo, c = [];
        (function() {
          for (var p = 0; p < 64; p++)
            c[p] = r.abs(r.sin(p + 1)) * 4294967296 | 0;
        })();
        var u = l.MD5 = a.extend({
          _doReset: function() {
            this._hash = new o.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(p, v) {
            for (var m = 0; m < 16; m++) {
              var x = v + m, b = p[x];
              p[x] = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360;
            }
            var _ = this._hash.words, w = p[v + 0], S = p[v + 1], y = p[v + 2], E = p[v + 3], I = p[v + 4], A = p[v + 5], k = p[v + 6], R = p[v + 7], N = p[v + 8], V = p[v + 9], j = p[v + 10], W = p[v + 11], J = p[v + 12], le = p[v + 13], ie = p[v + 14], ce = p[v + 15], K = _[0], B = _[1], Y = _[2], G = _[3];
            K = h(K, B, Y, G, w, 7, c[0]), G = h(G, K, B, Y, S, 12, c[1]), Y = h(Y, G, K, B, y, 17, c[2]), B = h(B, Y, G, K, E, 22, c[3]), K = h(K, B, Y, G, I, 7, c[4]), G = h(G, K, B, Y, A, 12, c[5]), Y = h(Y, G, K, B, k, 17, c[6]), B = h(B, Y, G, K, R, 22, c[7]), K = h(K, B, Y, G, N, 7, c[8]), G = h(G, K, B, Y, V, 12, c[9]), Y = h(Y, G, K, B, j, 17, c[10]), B = h(B, Y, G, K, W, 22, c[11]), K = h(K, B, Y, G, J, 7, c[12]), G = h(G, K, B, Y, le, 12, c[13]), Y = h(Y, G, K, B, ie, 17, c[14]), B = h(B, Y, G, K, ce, 22, c[15]), K = d(K, B, Y, G, S, 5, c[16]), G = d(G, K, B, Y, k, 9, c[17]), Y = d(Y, G, K, B, W, 14, c[18]), B = d(B, Y, G, K, w, 20, c[19]), K = d(K, B, Y, G, A, 5, c[20]), G = d(G, K, B, Y, j, 9, c[21]), Y = d(Y, G, K, B, ce, 14, c[22]), B = d(B, Y, G, K, I, 20, c[23]), K = d(K, B, Y, G, V, 5, c[24]), G = d(G, K, B, Y, ie, 9, c[25]), Y = d(Y, G, K, B, E, 14, c[26]), B = d(B, Y, G, K, N, 20, c[27]), K = d(K, B, Y, G, le, 5, c[28]), G = d(G, K, B, Y, y, 9, c[29]), Y = d(Y, G, K, B, R, 14, c[30]), B = d(B, Y, G, K, J, 20, c[31]), K = f(K, B, Y, G, A, 4, c[32]), G = f(G, K, B, Y, N, 11, c[33]), Y = f(Y, G, K, B, W, 16, c[34]), B = f(B, Y, G, K, ie, 23, c[35]), K = f(K, B, Y, G, S, 4, c[36]), G = f(G, K, B, Y, I, 11, c[37]), Y = f(Y, G, K, B, R, 16, c[38]), B = f(B, Y, G, K, j, 23, c[39]), K = f(K, B, Y, G, le, 4, c[40]), G = f(G, K, B, Y, w, 11, c[41]), Y = f(Y, G, K, B, E, 16, c[42]), B = f(B, Y, G, K, k, 23, c[43]), K = f(K, B, Y, G, V, 4, c[44]), G = f(G, K, B, Y, J, 11, c[45]), Y = f(Y, G, K, B, ce, 16, c[46]), B = f(B, Y, G, K, y, 23, c[47]), K = g(K, B, Y, G, w, 6, c[48]), G = g(G, K, B, Y, R, 10, c[49]), Y = g(Y, G, K, B, ie, 15, c[50]), B = g(B, Y, G, K, A, 21, c[51]), K = g(K, B, Y, G, J, 6, c[52]), G = g(G, K, B, Y, E, 10, c[53]), Y = g(Y, G, K, B, j, 15, c[54]), B = g(B, Y, G, K, S, 21, c[55]), K = g(K, B, Y, G, N, 6, c[56]), G = g(G, K, B, Y, ce, 10, c[57]), Y = g(Y, G, K, B, k, 15, c[58]), B = g(B, Y, G, K, le, 21, c[59]), K = g(K, B, Y, G, I, 6, c[60]), G = g(G, K, B, Y, W, 10, c[61]), Y = g(Y, G, K, B, y, 15, c[62]), B = g(B, Y, G, K, V, 21, c[63]), _[0] = _[0] + K | 0, _[1] = _[1] + B | 0, _[2] = _[2] + Y | 0, _[3] = _[3] + G | 0;
          },
          _doFinalize: function() {
            var p = this._data, v = p.words, m = this._nDataBytes * 8, x = p.sigBytes * 8;
            v[x >>> 5] |= 128 << 24 - x % 32;
            var b = r.floor(m / 4294967296), _ = m;
            v[(x + 64 >>> 9 << 4) + 15] = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360, v[(x + 64 >>> 9 << 4) + 14] = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360, p.sigBytes = (v.length + 1) * 4, this._process();
            for (var w = this._hash, S = w.words, y = 0; y < 4; y++) {
              var E = S[y];
              S[y] = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360;
            }
            return w;
          },
          clone: function() {
            var p = a.clone.call(this);
            return p._hash = this._hash.clone(), p;
          }
        });
        function h(p, v, m, x, b, _, w) {
          var S = p + (v & m | ~v & x) + b + w;
          return (S << _ | S >>> 32 - _) + v;
        }
        function d(p, v, m, x, b, _, w) {
          var S = p + (v & x | m & ~x) + b + w;
          return (S << _ | S >>> 32 - _) + v;
        }
        function f(p, v, m, x, b, _, w) {
          var S = p + (v ^ m ^ x) + b + w;
          return (S << _ | S >>> 32 - _) + v;
        }
        function g(p, v, m, x, b, _, w) {
          var S = p + (m ^ (v | ~x)) + b + w;
          return (S << _ | S >>> 32 - _) + v;
        }
        i.MD5 = a._createHelper(u), i.HmacMD5 = a._createHmacHelper(u);
      }(Math), n.MD5;
    });
  }(xv)), Xi;
}
var Ji = {}, _v = {
  get exports() {
    return Ji;
  },
  set exports(t) {
    Ji = t;
  }
}, Ql;
function Ua() {
  return Ql || (Ql = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(Be());
    })(Re, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.WordArray, o = i.Hasher, a = r.algo, l = [], c = a.SHA1 = o.extend({
          _doReset: function() {
            this._hash = new s.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(u, h) {
            for (var d = this._hash.words, f = d[0], g = d[1], p = d[2], v = d[3], m = d[4], x = 0; x < 80; x++) {
              if (x < 16)
                l[x] = u[h + x] | 0;
              else {
                var b = l[x - 3] ^ l[x - 8] ^ l[x - 14] ^ l[x - 16];
                l[x] = b << 1 | b >>> 31;
              }
              var _ = (f << 5 | f >>> 27) + m + l[x];
              x < 20 ? _ += (g & p | ~g & v) + 1518500249 : x < 40 ? _ += (g ^ p ^ v) + 1859775393 : x < 60 ? _ += (g & p | g & v | p & v) - 1894007588 : _ += (g ^ p ^ v) - 899497514, m = v, v = p, p = g << 30 | g >>> 2, g = f, f = _;
            }
            d[0] = d[0] + f | 0, d[1] = d[1] + g | 0, d[2] = d[2] + p | 0, d[3] = d[3] + v | 0, d[4] = d[4] + m | 0;
          },
          _doFinalize: function() {
            var u = this._data, h = u.words, d = this._nDataBytes * 8, f = u.sigBytes * 8;
            return h[f >>> 5] |= 128 << 24 - f % 32, h[(f + 64 >>> 9 << 4) + 14] = Math.floor(d / 4294967296), h[(f + 64 >>> 9 << 4) + 15] = d, u.sigBytes = h.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var u = o.clone.call(this);
            return u._hash = this._hash.clone(), u;
          }
        });
        r.SHA1 = o._createHelper(c), r.HmacSHA1 = o._createHmacHelper(c);
      }(), n.SHA1;
    });
  }(_v)), Ji;
}
var es = {}, wv = {
  get exports() {
    return es;
  },
  set exports(t) {
    es = t;
  }
}, Zl;
function Bd() {
  return Zl || (Zl = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(Be());
    })(Re, function(n) {
      return function(r) {
        var i = n, s = i.lib, o = s.WordArray, a = s.Hasher, l = i.algo, c = [], u = [];
        (function() {
          function f(m) {
            for (var x = r.sqrt(m), b = 2; b <= x; b++)
              if (!(m % b))
                return !1;
            return !0;
          }
          function g(m) {
            return (m - (m | 0)) * 4294967296 | 0;
          }
          for (var p = 2, v = 0; v < 64; )
            f(p) && (v < 8 && (c[v] = g(r.pow(p, 1 / 2))), u[v] = g(r.pow(p, 1 / 3)), v++), p++;
        })();
        var h = [], d = l.SHA256 = a.extend({
          _doReset: function() {
            this._hash = new o.init(c.slice(0));
          },
          _doProcessBlock: function(f, g) {
            for (var p = this._hash.words, v = p[0], m = p[1], x = p[2], b = p[3], _ = p[4], w = p[5], S = p[6], y = p[7], E = 0; E < 64; E++) {
              if (E < 16)
                h[E] = f[g + E] | 0;
              else {
                var I = h[E - 15], A = (I << 25 | I >>> 7) ^ (I << 14 | I >>> 18) ^ I >>> 3, k = h[E - 2], R = (k << 15 | k >>> 17) ^ (k << 13 | k >>> 19) ^ k >>> 10;
                h[E] = A + h[E - 7] + R + h[E - 16];
              }
              var N = _ & w ^ ~_ & S, V = v & m ^ v & x ^ m & x, j = (v << 30 | v >>> 2) ^ (v << 19 | v >>> 13) ^ (v << 10 | v >>> 22), W = (_ << 26 | _ >>> 6) ^ (_ << 21 | _ >>> 11) ^ (_ << 7 | _ >>> 25), J = y + W + N + u[E] + h[E], le = j + V;
              y = S, S = w, w = _, _ = b + J | 0, b = x, x = m, m = v, v = J + le | 0;
            }
            p[0] = p[0] + v | 0, p[1] = p[1] + m | 0, p[2] = p[2] + x | 0, p[3] = p[3] + b | 0, p[4] = p[4] + _ | 0, p[5] = p[5] + w | 0, p[6] = p[6] + S | 0, p[7] = p[7] + y | 0;
          },
          _doFinalize: function() {
            var f = this._data, g = f.words, p = this._nDataBytes * 8, v = f.sigBytes * 8;
            return g[v >>> 5] |= 128 << 24 - v % 32, g[(v + 64 >>> 9 << 4) + 14] = r.floor(p / 4294967296), g[(v + 64 >>> 9 << 4) + 15] = p, f.sigBytes = g.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var f = a.clone.call(this);
            return f._hash = this._hash.clone(), f;
          }
        });
        i.SHA256 = a._createHelper(d), i.HmacSHA256 = a._createHmacHelper(d);
      }(Math), n.SHA256;
    });
  }(wv)), es;
}
var ts = {}, Sv = {
  get exports() {
    return ts;
  },
  set exports(t) {
    ts = t;
  }
}, Kl;
function Ev() {
  return Kl || (Kl = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), Bd());
    })(Re, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.WordArray, o = r.algo, a = o.SHA256, l = o.SHA224 = a.extend({
          _doReset: function() {
            this._hash = new s.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var c = a._doFinalize.call(this);
            return c.sigBytes -= 4, c;
          }
        });
        r.SHA224 = a._createHelper(l), r.HmacSHA224 = a._createHmacHelper(l);
      }(), n.SHA224;
    });
  }(Sv)), ts;
}
var ns = {}, Cv = {
  get exports() {
    return ns;
  },
  set exports(t) {
    ns = t;
  }
}, Xl;
function Ld() {
  return Xl || (Xl = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), Qs());
    })(Re, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.Hasher, o = r.x64, a = o.Word, l = o.WordArray, c = r.algo;
        function u() {
          return a.create.apply(a, arguments);
        }
        var h = [
          u(1116352408, 3609767458),
          u(1899447441, 602891725),
          u(3049323471, 3964484399),
          u(3921009573, 2173295548),
          u(961987163, 4081628472),
          u(1508970993, 3053834265),
          u(2453635748, 2937671579),
          u(2870763221, 3664609560),
          u(3624381080, 2734883394),
          u(310598401, 1164996542),
          u(607225278, 1323610764),
          u(1426881987, 3590304994),
          u(1925078388, 4068182383),
          u(2162078206, 991336113),
          u(2614888103, 633803317),
          u(3248222580, 3479774868),
          u(3835390401, 2666613458),
          u(4022224774, 944711139),
          u(264347078, 2341262773),
          u(604807628, 2007800933),
          u(770255983, 1495990901),
          u(1249150122, 1856431235),
          u(1555081692, 3175218132),
          u(1996064986, 2198950837),
          u(2554220882, 3999719339),
          u(2821834349, 766784016),
          u(2952996808, 2566594879),
          u(3210313671, 3203337956),
          u(3336571891, 1034457026),
          u(3584528711, 2466948901),
          u(113926993, 3758326383),
          u(338241895, 168717936),
          u(666307205, 1188179964),
          u(773529912, 1546045734),
          u(1294757372, 1522805485),
          u(1396182291, 2643833823),
          u(1695183700, 2343527390),
          u(1986661051, 1014477480),
          u(2177026350, 1206759142),
          u(2456956037, 344077627),
          u(2730485921, 1290863460),
          u(2820302411, 3158454273),
          u(3259730800, 3505952657),
          u(3345764771, 106217008),
          u(3516065817, 3606008344),
          u(3600352804, 1432725776),
          u(4094571909, 1467031594),
          u(275423344, 851169720),
          u(430227734, 3100823752),
          u(506948616, 1363258195),
          u(659060556, 3750685593),
          u(883997877, 3785050280),
          u(958139571, 3318307427),
          u(1322822218, 3812723403),
          u(1537002063, 2003034995),
          u(1747873779, 3602036899),
          u(1955562222, 1575990012),
          u(2024104815, 1125592928),
          u(2227730452, 2716904306),
          u(2361852424, 442776044),
          u(2428436474, 593698344),
          u(2756734187, 3733110249),
          u(3204031479, 2999351573),
          u(3329325298, 3815920427),
          u(3391569614, 3928383900),
          u(3515267271, 566280711),
          u(3940187606, 3454069534),
          u(4118630271, 4000239992),
          u(116418474, 1914138554),
          u(174292421, 2731055270),
          u(289380356, 3203993006),
          u(460393269, 320620315),
          u(685471733, 587496836),
          u(852142971, 1086792851),
          u(1017036298, 365543100),
          u(1126000580, 2618297676),
          u(1288033470, 3409855158),
          u(1501505948, 4234509866),
          u(1607167915, 987167468),
          u(1816402316, 1246189591)
        ], d = [];
        (function() {
          for (var g = 0; g < 80; g++)
            d[g] = u();
        })();
        var f = c.SHA512 = s.extend({
          _doReset: function() {
            this._hash = new l.init([
              new a.init(1779033703, 4089235720),
              new a.init(3144134277, 2227873595),
              new a.init(1013904242, 4271175723),
              new a.init(2773480762, 1595750129),
              new a.init(1359893119, 2917565137),
              new a.init(2600822924, 725511199),
              new a.init(528734635, 4215389547),
              new a.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(g, p) {
            for (var v = this._hash.words, m = v[0], x = v[1], b = v[2], _ = v[3], w = v[4], S = v[5], y = v[6], E = v[7], I = m.high, A = m.low, k = x.high, R = x.low, N = b.high, V = b.low, j = _.high, W = _.low, J = w.high, le = w.low, ie = S.high, ce = S.low, K = y.high, B = y.low, Y = E.high, G = E.low, ue = I, ve = A, Ee = k, ge = R, _e = N, De = V, vt = j, mt = W, nt = J, We = le, Ke = ie, St = ce, ot = K, ht = B, Ut = Y, Mt = G, pt = 0; pt < 80; pt++) {
              var bt, At, cn = d[pt];
              if (pt < 16)
                At = cn.high = g[p + pt * 2] | 0, bt = cn.low = g[p + pt * 2 + 1] | 0;
              else {
                var un = d[pt - 15], jt = un.high, Z = un.low, oe = (jt >>> 1 | Z << 31) ^ (jt >>> 8 | Z << 24) ^ jt >>> 7, q = (Z >>> 1 | jt << 31) ^ (Z >>> 8 | jt << 24) ^ (Z >>> 7 | jt << 25), be = d[pt - 2], Fe = be.high, yt = be.low, Wt = (Fe >>> 19 | yt << 13) ^ (Fe << 3 | yt >>> 29) ^ Fe >>> 6, Ft = (yt >>> 19 | Fe << 13) ^ (yt << 3 | Fe >>> 29) ^ (yt >>> 6 | Fe << 26), Pn = d[pt - 7], at = Pn.high, _t = Pn.low, Ir = d[pt - 16], po = Ir.high, qt = Ir.low;
                bt = q + _t, At = oe + at + (bt >>> 0 < q >>> 0 ? 1 : 0), bt = bt + Ft, At = At + Wt + (bt >>> 0 < Ft >>> 0 ? 1 : 0), bt = bt + qt, At = At + po + (bt >>> 0 < qt >>> 0 ? 1 : 0), cn.high = At, cn.low = bt;
              }
              var go = nt & Ke ^ ~nt & ot, di = We & St ^ ~We & ht, fi = ue & Ee ^ ue & _e ^ Ee & _e, vo = ve & ge ^ ve & De ^ ge & De, mo = (ue >>> 28 | ve << 4) ^ (ue << 30 | ve >>> 2) ^ (ue << 25 | ve >>> 7), hi = (ve >>> 28 | ue << 4) ^ (ve << 30 | ue >>> 2) ^ (ve << 25 | ue >>> 7), bo = (nt >>> 14 | We << 18) ^ (nt >>> 18 | We << 14) ^ (nt << 23 | We >>> 9), yo = (We >>> 14 | nt << 18) ^ (We >>> 18 | nt << 14) ^ (We << 23 | nt >>> 9), pi = h[pt], xo = pi.high, gi = pi.low, Dt = Mt + yo, Xt = Ut + bo + (Dt >>> 0 < Mt >>> 0 ? 1 : 0), Dt = Dt + di, Xt = Xt + go + (Dt >>> 0 < di >>> 0 ? 1 : 0), Dt = Dt + gi, Xt = Xt + xo + (Dt >>> 0 < gi >>> 0 ? 1 : 0), Dt = Dt + bt, Xt = Xt + At + (Dt >>> 0 < bt >>> 0 ? 1 : 0), Mr = hi + vo, _o = mo + fi + (Mr >>> 0 < hi >>> 0 ? 1 : 0);
              Ut = ot, Mt = ht, ot = Ke, ht = St, Ke = nt, St = We, We = mt + Dt | 0, nt = vt + Xt + (We >>> 0 < mt >>> 0 ? 1 : 0) | 0, vt = _e, mt = De, _e = Ee, De = ge, Ee = ue, ge = ve, ve = Dt + Mr | 0, ue = Xt + _o + (ve >>> 0 < Dt >>> 0 ? 1 : 0) | 0;
            }
            A = m.low = A + ve, m.high = I + ue + (A >>> 0 < ve >>> 0 ? 1 : 0), R = x.low = R + ge, x.high = k + Ee + (R >>> 0 < ge >>> 0 ? 1 : 0), V = b.low = V + De, b.high = N + _e + (V >>> 0 < De >>> 0 ? 1 : 0), W = _.low = W + mt, _.high = j + vt + (W >>> 0 < mt >>> 0 ? 1 : 0), le = w.low = le + We, w.high = J + nt + (le >>> 0 < We >>> 0 ? 1 : 0), ce = S.low = ce + St, S.high = ie + Ke + (ce >>> 0 < St >>> 0 ? 1 : 0), B = y.low = B + ht, y.high = K + ot + (B >>> 0 < ht >>> 0 ? 1 : 0), G = E.low = G + Mt, E.high = Y + Ut + (G >>> 0 < Mt >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var g = this._data, p = g.words, v = this._nDataBytes * 8, m = g.sigBytes * 8;
            p[m >>> 5] |= 128 << 24 - m % 32, p[(m + 128 >>> 10 << 5) + 30] = Math.floor(v / 4294967296), p[(m + 128 >>> 10 << 5) + 31] = v, g.sigBytes = p.length * 4, this._process();
            var x = this._hash.toX32();
            return x;
          },
          clone: function() {
            var g = s.clone.call(this);
            return g._hash = this._hash.clone(), g;
          },
          blockSize: 1024 / 32
        });
        r.SHA512 = s._createHelper(f), r.HmacSHA512 = s._createHmacHelper(f);
      }(), n.SHA512;
    });
  }(Cv)), ns;
}
var rs = {}, kv = {
  get exports() {
    return rs;
  },
  set exports(t) {
    rs = t;
  }
}, Jl;
function Av() {
  return Jl || (Jl = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), Qs(), Ld());
    })(Re, function(n) {
      return function() {
        var r = n, i = r.x64, s = i.Word, o = i.WordArray, a = r.algo, l = a.SHA512, c = a.SHA384 = l.extend({
          _doReset: function() {
            this._hash = new o.init([
              new s.init(3418070365, 3238371032),
              new s.init(1654270250, 914150663),
              new s.init(2438529370, 812702999),
              new s.init(355462360, 4144912697),
              new s.init(1731405415, 4290775857),
              new s.init(2394180231, 1750603025),
              new s.init(3675008525, 1694076839),
              new s.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var u = l._doFinalize.call(this);
            return u.sigBytes -= 16, u;
          }
        });
        r.SHA384 = l._createHelper(c), r.HmacSHA384 = l._createHmacHelper(c);
      }(), n.SHA384;
    });
  }(kv)), rs;
}
var is = {}, Dv = {
  get exports() {
    return is;
  },
  set exports(t) {
    is = t;
  }
}, ec;
function Tv() {
  return ec || (ec = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), Qs());
    })(Re, function(n) {
      return function(r) {
        var i = n, s = i.lib, o = s.WordArray, a = s.Hasher, l = i.x64, c = l.Word, u = i.algo, h = [], d = [], f = [];
        (function() {
          for (var v = 1, m = 0, x = 0; x < 24; x++) {
            h[v + 5 * m] = (x + 1) * (x + 2) / 2 % 64;
            var b = m % 5, _ = (2 * v + 3 * m) % 5;
            v = b, m = _;
          }
          for (var v = 0; v < 5; v++)
            for (var m = 0; m < 5; m++)
              d[v + 5 * m] = m + (2 * v + 3 * m) % 5 * 5;
          for (var w = 1, S = 0; S < 24; S++) {
            for (var y = 0, E = 0, I = 0; I < 7; I++) {
              if (w & 1) {
                var A = (1 << I) - 1;
                A < 32 ? E ^= 1 << A : y ^= 1 << A - 32;
              }
              w & 128 ? w = w << 1 ^ 113 : w <<= 1;
            }
            f[S] = c.create(y, E);
          }
        })();
        var g = [];
        (function() {
          for (var v = 0; v < 25; v++)
            g[v] = c.create();
        })();
        var p = u.SHA3 = a.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: a.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var v = this._state = [], m = 0; m < 25; m++)
              v[m] = new c.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(v, m) {
            for (var x = this._state, b = this.blockSize / 2, _ = 0; _ < b; _++) {
              var w = v[m + 2 * _], S = v[m + 2 * _ + 1];
              w = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, S = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360;
              var y = x[_];
              y.high ^= S, y.low ^= w;
            }
            for (var E = 0; E < 24; E++) {
              for (var I = 0; I < 5; I++) {
                for (var A = 0, k = 0, R = 0; R < 5; R++) {
                  var y = x[I + 5 * R];
                  A ^= y.high, k ^= y.low;
                }
                var N = g[I];
                N.high = A, N.low = k;
              }
              for (var I = 0; I < 5; I++)
                for (var V = g[(I + 4) % 5], j = g[(I + 1) % 5], W = j.high, J = j.low, A = V.high ^ (W << 1 | J >>> 31), k = V.low ^ (J << 1 | W >>> 31), R = 0; R < 5; R++) {
                  var y = x[I + 5 * R];
                  y.high ^= A, y.low ^= k;
                }
              for (var le = 1; le < 25; le++) {
                var A, k, y = x[le], ie = y.high, ce = y.low, K = h[le];
                K < 32 ? (A = ie << K | ce >>> 32 - K, k = ce << K | ie >>> 32 - K) : (A = ce << K - 32 | ie >>> 64 - K, k = ie << K - 32 | ce >>> 64 - K);
                var B = g[d[le]];
                B.high = A, B.low = k;
              }
              var Y = g[0], G = x[0];
              Y.high = G.high, Y.low = G.low;
              for (var I = 0; I < 5; I++)
                for (var R = 0; R < 5; R++) {
                  var le = I + 5 * R, y = x[le], ue = g[le], ve = g[(I + 1) % 5 + 5 * R], Ee = g[(I + 2) % 5 + 5 * R];
                  y.high = ue.high ^ ~ve.high & Ee.high, y.low = ue.low ^ ~ve.low & Ee.low;
                }
              var y = x[0], ge = f[E];
              y.high ^= ge.high, y.low ^= ge.low;
            }
          },
          _doFinalize: function() {
            var v = this._data, m = v.words;
            this._nDataBytes * 8;
            var x = v.sigBytes * 8, b = this.blockSize * 32;
            m[x >>> 5] |= 1 << 24 - x % 32, m[(r.ceil((x + 1) / b) * b >>> 5) - 1] |= 128, v.sigBytes = m.length * 4, this._process();
            for (var _ = this._state, w = this.cfg.outputLength / 8, S = w / 8, y = [], E = 0; E < S; E++) {
              var I = _[E], A = I.high, k = I.low;
              A = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360, k = (k << 8 | k >>> 24) & 16711935 | (k << 24 | k >>> 8) & 4278255360, y.push(k), y.push(A);
            }
            return new o.init(y, w);
          },
          clone: function() {
            for (var v = a.clone.call(this), m = v._state = this._state.slice(0), x = 0; x < 25; x++)
              m[x] = m[x].clone();
            return v;
          }
        });
        i.SHA3 = a._createHelper(p), i.HmacSHA3 = a._createHmacHelper(p);
      }(Math), n.SHA3;
    });
  }(Dv)), is;
}
var ss = {}, Rv = {
  get exports() {
    return ss;
  },
  set exports(t) {
    ss = t;
  }
}, tc;
function Iv() {
  return tc || (tc = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(Be());
    })(Re, function(n) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(r) {
        var i = n, s = i.lib, o = s.WordArray, a = s.Hasher, l = i.algo, c = o.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]), u = o.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]), h = o.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]), d = o.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]), f = o.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), g = o.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), p = l.RIPEMD160 = a.extend({
          _doReset: function() {
            this._hash = o.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(S, y) {
            for (var E = 0; E < 16; E++) {
              var I = y + E, A = S[I];
              S[I] = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360;
            }
            var k = this._hash.words, R = f.words, N = g.words, V = c.words, j = u.words, W = h.words, J = d.words, le, ie, ce, K, B, Y, G, ue, ve, Ee;
            Y = le = k[0], G = ie = k[1], ue = ce = k[2], ve = K = k[3], Ee = B = k[4];
            for (var ge, E = 0; E < 80; E += 1)
              ge = le + S[y + V[E]] | 0, E < 16 ? ge += v(ie, ce, K) + R[0] : E < 32 ? ge += m(ie, ce, K) + R[1] : E < 48 ? ge += x(ie, ce, K) + R[2] : E < 64 ? ge += b(ie, ce, K) + R[3] : ge += _(ie, ce, K) + R[4], ge = ge | 0, ge = w(ge, W[E]), ge = ge + B | 0, le = B, B = K, K = w(ce, 10), ce = ie, ie = ge, ge = Y + S[y + j[E]] | 0, E < 16 ? ge += _(G, ue, ve) + N[0] : E < 32 ? ge += b(G, ue, ve) + N[1] : E < 48 ? ge += x(G, ue, ve) + N[2] : E < 64 ? ge += m(G, ue, ve) + N[3] : ge += v(G, ue, ve) + N[4], ge = ge | 0, ge = w(ge, J[E]), ge = ge + Ee | 0, Y = Ee, Ee = ve, ve = w(ue, 10), ue = G, G = ge;
            ge = k[1] + ce + ve | 0, k[1] = k[2] + K + Ee | 0, k[2] = k[3] + B + Y | 0, k[3] = k[4] + le + G | 0, k[4] = k[0] + ie + ue | 0, k[0] = ge;
          },
          _doFinalize: function() {
            var S = this._data, y = S.words, E = this._nDataBytes * 8, I = S.sigBytes * 8;
            y[I >>> 5] |= 128 << 24 - I % 32, y[(I + 64 >>> 9 << 4) + 14] = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, S.sigBytes = (y.length + 1) * 4, this._process();
            for (var A = this._hash, k = A.words, R = 0; R < 5; R++) {
              var N = k[R];
              k[R] = (N << 8 | N >>> 24) & 16711935 | (N << 24 | N >>> 8) & 4278255360;
            }
            return A;
          },
          clone: function() {
            var S = a.clone.call(this);
            return S._hash = this._hash.clone(), S;
          }
        });
        function v(S, y, E) {
          return S ^ y ^ E;
        }
        function m(S, y, E) {
          return S & y | ~S & E;
        }
        function x(S, y, E) {
          return (S | ~y) ^ E;
        }
        function b(S, y, E) {
          return S & E | y & ~E;
        }
        function _(S, y, E) {
          return S ^ (y | ~E);
        }
        function w(S, y) {
          return S << y | S >>> 32 - y;
        }
        i.RIPEMD160 = a._createHelper(p), i.HmacRIPEMD160 = a._createHmacHelper(p);
      }(), n.RIPEMD160;
    });
  }(Rv)), ss;
}
var os = {}, Mv = {
  get exports() {
    return os;
  },
  set exports(t) {
    os = t;
  }
}, nc;
function ja() {
  return nc || (nc = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(Be());
    })(Re, function(n) {
      (function() {
        var r = n, i = r.lib, s = i.Base, o = r.enc, a = o.Utf8, l = r.algo;
        l.HMAC = s.extend({
          /**
           * Initializes a newly created HMAC.
           *
           * @param {Hasher} hasher The hash algorithm to use.
           * @param {WordArray|string} key The secret key.
           *
           * @example
           *
           *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
           */
          init: function(c, u) {
            c = this._hasher = new c.init(), typeof u == "string" && (u = a.parse(u));
            var h = c.blockSize, d = h * 4;
            u.sigBytes > d && (u = c.finalize(u)), u.clamp();
            for (var f = this._oKey = u.clone(), g = this._iKey = u.clone(), p = f.words, v = g.words, m = 0; m < h; m++)
              p[m] ^= 1549556828, v[m] ^= 909522486;
            f.sigBytes = g.sigBytes = d, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var c = this._hasher;
            c.reset(), c.update(this._iKey);
          },
          /**
           * Updates this HMAC with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {HMAC} This HMAC instance.
           *
           * @example
           *
           *     hmacHasher.update('message');
           *     hmacHasher.update(wordArray);
           */
          update: function(c) {
            return this._hasher.update(c), this;
          },
          /**
           * Finalizes the HMAC computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The HMAC.
           *
           * @example
           *
           *     var hmac = hmacHasher.finalize();
           *     var hmac = hmacHasher.finalize('message');
           *     var hmac = hmacHasher.finalize(wordArray);
           */
          finalize: function(c) {
            var u = this._hasher, h = u.finalize(c);
            u.reset();
            var d = u.finalize(this._oKey.clone().concat(h));
            return d;
          }
        });
      })();
    });
  }(Mv)), os;
}
var as = {}, Ov = {
  get exports() {
    return as;
  },
  set exports(t) {
    as = t;
  }
}, rc;
function Nv() {
  return rc || (rc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), Ua(), ja());
    })(Re, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.Base, o = i.WordArray, a = r.algo, l = a.SHA1, c = a.HMAC, u = a.PBKDF2 = s.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA1
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: s.extend({
            keySize: 128 / 32,
            hasher: l,
            iterations: 1
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.PBKDF2.create();
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
           */
          init: function(h) {
            this.cfg = this.cfg.extend(h);
          },
          /**
           * Computes the Password-Based Key Derivation Function 2.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(h, d) {
            for (var f = this.cfg, g = c.create(f.hasher, h), p = o.create(), v = o.create([1]), m = p.words, x = v.words, b = f.keySize, _ = f.iterations; m.length < b; ) {
              var w = g.update(d).finalize(v);
              g.reset();
              for (var S = w.words, y = S.length, E = w, I = 1; I < _; I++) {
                E = g.finalize(E), g.reset();
                for (var A = E.words, k = 0; k < y; k++)
                  S[k] ^= A[k];
              }
              p.concat(w), x[0]++;
            }
            return p.sigBytes = b * 4, p;
          }
        });
        r.PBKDF2 = function(h, d, f) {
          return u.create(f).compute(h, d);
        };
      }(), n.PBKDF2;
    });
  }(Ov)), as;
}
var ls = {}, Bv = {
  get exports() {
    return ls;
  },
  set exports(t) {
    ls = t;
  }
}, ic;
function rr() {
  return ic || (ic = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), Ua(), ja());
    })(Re, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.Base, o = i.WordArray, a = r.algo, l = a.MD5, c = a.EvpKDF = s.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: s.extend({
            keySize: 128 / 32,
            hasher: l,
            iterations: 1
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.EvpKDF.create();
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
           */
          init: function(u) {
            this.cfg = this.cfg.extend(u);
          },
          /**
           * Derives a key from a password.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(u, h) {
            for (var d, f = this.cfg, g = f.hasher.create(), p = o.create(), v = p.words, m = f.keySize, x = f.iterations; v.length < m; ) {
              d && g.update(d), d = g.update(u).finalize(h), g.reset();
              for (var b = 1; b < x; b++)
                d = g.finalize(d), g.reset();
              p.concat(d);
            }
            return p.sigBytes = m * 4, p;
          }
        });
        r.EvpKDF = function(u, h, d) {
          return c.create(d).compute(u, h);
        };
      }(), n.EvpKDF;
    });
  }(Bv)), ls;
}
var cs = {}, Lv = {
  get exports() {
    return cs;
  },
  set exports(t) {
    cs = t;
  }
}, sc;
function xt() {
  return sc || (sc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), rr());
    })(Re, function(n) {
      n.lib.Cipher || function(r) {
        var i = n, s = i.lib, o = s.Base, a = s.WordArray, l = s.BufferedBlockAlgorithm, c = i.enc;
        c.Utf8;
        var u = c.Base64, h = i.algo, d = h.EvpKDF, f = s.Cipher = l.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: o.extend(),
          /**
           * Creates this cipher in encryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
           */
          createEncryptor: function(A, k) {
            return this.create(this._ENC_XFORM_MODE, A, k);
          },
          /**
           * Creates this cipher in decryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
           */
          createDecryptor: function(A, k) {
            return this.create(this._DEC_XFORM_MODE, A, k);
          },
          /**
           * Initializes a newly created cipher.
           *
           * @param {number} xformMode Either the encryption or decryption transormation mode constant.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
           */
          init: function(A, k, R) {
            this.cfg = this.cfg.extend(R), this._xformMode = A, this._key = k, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            l.reset.call(this), this._doReset();
          },
          /**
           * Adds data to be encrypted or decrypted.
           *
           * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
           *
           * @return {WordArray} The data after processing.
           *
           * @example
           *
           *     var encrypted = cipher.process('data');
           *     var encrypted = cipher.process(wordArray);
           */
          process: function(A) {
            return this._append(A), this._process();
          },
          /**
           * Finalizes the encryption or decryption process.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
           *
           * @return {WordArray} The data after final processing.
           *
           * @example
           *
           *     var encrypted = cipher.finalize();
           *     var encrypted = cipher.finalize('data');
           *     var encrypted = cipher.finalize(wordArray);
           */
          finalize: function(A) {
            A && this._append(A);
            var k = this._doFinalize();
            return k;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          /**
           * Creates shortcut functions to a cipher's object interface.
           *
           * @param {Cipher} cipher The cipher to create a helper for.
           *
           * @return {Object} An object with encrypt and decrypt shortcut functions.
           *
           * @static
           *
           * @example
           *
           *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
           */
          _createHelper: function() {
            function A(k) {
              return typeof k == "string" ? I : S;
            }
            return function(k) {
              return {
                encrypt: function(R, N, V) {
                  return A(N).encrypt(k, R, N, V);
                },
                decrypt: function(R, N, V) {
                  return A(N).decrypt(k, R, N, V);
                }
              };
            };
          }()
        });
        s.StreamCipher = f.extend({
          _doFinalize: function() {
            var A = this._process(!0);
            return A;
          },
          blockSize: 1
        });
        var g = i.mode = {}, p = s.BlockCipherMode = o.extend({
          /**
           * Creates this mode for encryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
           */
          createEncryptor: function(A, k) {
            return this.Encryptor.create(A, k);
          },
          /**
           * Creates this mode for decryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
           */
          createDecryptor: function(A, k) {
            return this.Decryptor.create(A, k);
          },
          /**
           * Initializes a newly created mode.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
           */
          init: function(A, k) {
            this._cipher = A, this._iv = k;
          }
        }), v = g.CBC = function() {
          var A = p.extend();
          A.Encryptor = A.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(R, N) {
              var V = this._cipher, j = V.blockSize;
              k.call(this, R, N, j), V.encryptBlock(R, N), this._prevBlock = R.slice(N, N + j);
            }
          }), A.Decryptor = A.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(R, N) {
              var V = this._cipher, j = V.blockSize, W = R.slice(N, N + j);
              V.decryptBlock(R, N), k.call(this, R, N, j), this._prevBlock = W;
            }
          });
          function k(R, N, V) {
            var j, W = this._iv;
            W ? (j = W, this._iv = r) : j = this._prevBlock;
            for (var J = 0; J < V; J++)
              R[N + J] ^= j[J];
          }
          return A;
        }(), m = i.pad = {}, x = m.Pkcs7 = {
          /**
           * Pads data using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to pad.
           * @param {number} blockSize The multiple that the data should be padded to.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
           */
          pad: function(A, k) {
            for (var R = k * 4, N = R - A.sigBytes % R, V = N << 24 | N << 16 | N << 8 | N, j = [], W = 0; W < N; W += 4)
              j.push(V);
            var J = a.create(j, N);
            A.concat(J);
          },
          /**
           * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to unpad.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.unpad(wordArray);
           */
          unpad: function(A) {
            var k = A.words[A.sigBytes - 1 >>> 2] & 255;
            A.sigBytes -= k;
          }
        };
        s.BlockCipher = f.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: f.cfg.extend({
            mode: v,
            padding: x
          }),
          reset: function() {
            var A;
            f.reset.call(this);
            var k = this.cfg, R = k.iv, N = k.mode;
            this._xformMode == this._ENC_XFORM_MODE ? A = N.createEncryptor : (A = N.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == A ? this._mode.init(this, R && R.words) : (this._mode = A.call(N, this, R && R.words), this._mode.__creator = A);
          },
          _doProcessBlock: function(A, k) {
            this._mode.processBlock(A, k);
          },
          _doFinalize: function() {
            var A, k = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (k.pad(this._data, this.blockSize), A = this._process(!0)) : (A = this._process(!0), k.unpad(A)), A;
          },
          blockSize: 128 / 32
        });
        var b = s.CipherParams = o.extend({
          /**
           * Initializes a newly created cipher params object.
           *
           * @param {Object} cipherParams An object with any of the possible cipher parameters.
           *
           * @example
           *
           *     var cipherParams = CryptoJS.lib.CipherParams.create({
           *         ciphertext: ciphertextWordArray,
           *         key: keyWordArray,
           *         iv: ivWordArray,
           *         salt: saltWordArray,
           *         algorithm: CryptoJS.algo.AES,
           *         mode: CryptoJS.mode.CBC,
           *         padding: CryptoJS.pad.PKCS7,
           *         blockSize: 4,
           *         formatter: CryptoJS.format.OpenSSL
           *     });
           */
          init: function(A) {
            this.mixIn(A);
          },
          /**
           * Converts this cipher params object to a string.
           *
           * @param {Format} formatter (Optional) The formatting strategy to use.
           *
           * @return {string} The stringified cipher params.
           *
           * @throws Error If neither the formatter nor the default formatter is set.
           *
           * @example
           *
           *     var string = cipherParams + '';
           *     var string = cipherParams.toString();
           *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
           */
          toString: function(A) {
            return (A || this.formatter).stringify(this);
          }
        }), _ = i.format = {}, w = _.OpenSSL = {
          /**
           * Converts a cipher params object to an OpenSSL-compatible string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The OpenSSL-compatible string.
           *
           * @static
           *
           * @example
           *
           *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
           */
          stringify: function(A) {
            var k, R = A.ciphertext, N = A.salt;
            return N ? k = a.create([1398893684, 1701076831]).concat(N).concat(R) : k = R, k.toString(u);
          },
          /**
           * Converts an OpenSSL-compatible string to a cipher params object.
           *
           * @param {string} openSSLStr The OpenSSL-compatible string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
           */
          parse: function(A) {
            var k, R = u.parse(A), N = R.words;
            return N[0] == 1398893684 && N[1] == 1701076831 && (k = a.create(N.slice(2, 4)), N.splice(0, 4), R.sigBytes -= 16), b.create({ ciphertext: R, salt: k });
          }
        }, S = s.SerializableCipher = o.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: o.extend({
            format: w
          }),
          /**
           * Encrypts a message.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(A, k, R, N) {
            N = this.cfg.extend(N);
            var V = A.createEncryptor(R, N), j = V.finalize(k), W = V.cfg;
            return b.create({
              ciphertext: j,
              key: R,
              iv: W.iv,
              algorithm: A,
              mode: W.mode,
              padding: W.padding,
              blockSize: A.blockSize,
              formatter: N.format
            });
          },
          /**
           * Decrypts serialized ciphertext.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(A, k, R, N) {
            N = this.cfg.extend(N), k = this._parse(k, N.format);
            var V = A.createDecryptor(R, N).finalize(k.ciphertext);
            return V;
          },
          /**
           * Converts serialized ciphertext to CipherParams,
           * else assumed CipherParams already and returns ciphertext unchanged.
           *
           * @param {CipherParams|string} ciphertext The ciphertext.
           * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
           *
           * @return {CipherParams} The unserialized ciphertext.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
           */
          _parse: function(A, k) {
            return typeof A == "string" ? k.parse(A, this) : A;
          }
        }), y = i.kdf = {}, E = y.OpenSSL = {
          /**
           * Derives a key and IV from a password.
           *
           * @param {string} password The password to derive from.
           * @param {number} keySize The size in words of the key to generate.
           * @param {number} ivSize The size in words of the IV to generate.
           * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
           *
           * @return {CipherParams} A cipher params object with the key, IV, and salt.
           *
           * @static
           *
           * @example
           *
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
           */
          execute: function(A, k, R, N) {
            N || (N = a.random(64 / 8));
            var V = d.create({ keySize: k + R }).compute(A, N), j = a.create(V.words.slice(k), R * 4);
            return V.sigBytes = k * 4, b.create({ key: V, iv: j, salt: N });
          }
        }, I = s.PasswordBasedCipher = S.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: S.cfg.extend({
            kdf: E
          }),
          /**
           * Encrypts a message using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(A, k, R, N) {
            N = this.cfg.extend(N);
            var V = N.kdf.execute(R, A.keySize, A.ivSize);
            N.iv = V.iv;
            var j = S.encrypt.call(this, A, k, V.key, N);
            return j.mixIn(V), j;
          },
          /**
           * Decrypts serialized ciphertext using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(A, k, R, N) {
            N = this.cfg.extend(N), k = this._parse(k, N.format);
            var V = N.kdf.execute(R, A.keySize, A.ivSize, k.salt);
            N.iv = V.iv;
            var j = S.decrypt.call(this, A, k, V.key, N);
            return j;
          }
        });
      }();
    });
  }(Lv)), cs;
}
var us = {}, Pv = {
  get exports() {
    return us;
  },
  set exports(t) {
    us = t;
  }
}, oc;
function $v() {
  return oc || (oc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), xt());
    })(Re, function(n) {
      return n.mode.CFB = function() {
        var r = n.lib.BlockCipherMode.extend();
        r.Encryptor = r.extend({
          processBlock: function(s, o) {
            var a = this._cipher, l = a.blockSize;
            i.call(this, s, o, l, a), this._prevBlock = s.slice(o, o + l);
          }
        }), r.Decryptor = r.extend({
          processBlock: function(s, o) {
            var a = this._cipher, l = a.blockSize, c = s.slice(o, o + l);
            i.call(this, s, o, l, a), this._prevBlock = c;
          }
        });
        function i(s, o, a, l) {
          var c, u = this._iv;
          u ? (c = u.slice(0), this._iv = void 0) : c = this._prevBlock, l.encryptBlock(c, 0);
          for (var h = 0; h < a; h++)
            s[o + h] ^= c[h];
        }
        return r;
      }(), n.mode.CFB;
    });
  }(Pv)), us;
}
var ds = {}, Hv = {
  get exports() {
    return ds;
  },
  set exports(t) {
    ds = t;
  }
}, ac;
function Fv() {
  return ac || (ac = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), xt());
    })(Re, function(n) {
      return n.mode.CTR = function() {
        var r = n.lib.BlockCipherMode.extend(), i = r.Encryptor = r.extend({
          processBlock: function(s, o) {
            var a = this._cipher, l = a.blockSize, c = this._iv, u = this._counter;
            c && (u = this._counter = c.slice(0), this._iv = void 0);
            var h = u.slice(0);
            a.encryptBlock(h, 0), u[l - 1] = u[l - 1] + 1 | 0;
            for (var d = 0; d < l; d++)
              s[o + d] ^= h[d];
          }
        });
        return r.Decryptor = i, r;
      }(), n.mode.CTR;
    });
  }(Hv)), ds;
}
var fs = {}, zv = {
  get exports() {
    return fs;
  },
  set exports(t) {
    fs = t;
  }
}, lc;
function Vv() {
  return lc || (lc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), xt());
    })(Re, function(n) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return n.mode.CTRGladman = function() {
        var r = n.lib.BlockCipherMode.extend();
        function i(a) {
          if ((a >> 24 & 255) === 255) {
            var l = a >> 16 & 255, c = a >> 8 & 255, u = a & 255;
            l === 255 ? (l = 0, c === 255 ? (c = 0, u === 255 ? u = 0 : ++u) : ++c) : ++l, a = 0, a += l << 16, a += c << 8, a += u;
          } else
            a += 1 << 24;
          return a;
        }
        function s(a) {
          return (a[0] = i(a[0])) === 0 && (a[1] = i(a[1])), a;
        }
        var o = r.Encryptor = r.extend({
          processBlock: function(a, l) {
            var c = this._cipher, u = c.blockSize, h = this._iv, d = this._counter;
            h && (d = this._counter = h.slice(0), this._iv = void 0), s(d);
            var f = d.slice(0);
            c.encryptBlock(f, 0);
            for (var g = 0; g < u; g++)
              a[l + g] ^= f[g];
          }
        });
        return r.Decryptor = o, r;
      }(), n.mode.CTRGladman;
    });
  }(zv)), fs;
}
var hs = {}, Uv = {
  get exports() {
    return hs;
  },
  set exports(t) {
    hs = t;
  }
}, cc;
function jv() {
  return cc || (cc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), xt());
    })(Re, function(n) {
      return n.mode.OFB = function() {
        var r = n.lib.BlockCipherMode.extend(), i = r.Encryptor = r.extend({
          processBlock: function(s, o) {
            var a = this._cipher, l = a.blockSize, c = this._iv, u = this._keystream;
            c && (u = this._keystream = c.slice(0), this._iv = void 0), a.encryptBlock(u, 0);
            for (var h = 0; h < l; h++)
              s[o + h] ^= u[h];
          }
        });
        return r.Decryptor = i, r;
      }(), n.mode.OFB;
    });
  }(Uv)), hs;
}
var ps = {}, Wv = {
  get exports() {
    return ps;
  },
  set exports(t) {
    ps = t;
  }
}, uc;
function Pd() {
  return uc || (uc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), xt());
    })(Re, function(n) {
      return n.mode.ECB = function() {
        var r = n.lib.BlockCipherMode.extend();
        return r.Encryptor = r.extend({
          processBlock: function(i, s) {
            this._cipher.encryptBlock(i, s);
          }
        }), r.Decryptor = r.extend({
          processBlock: function(i, s) {
            this._cipher.decryptBlock(i, s);
          }
        }), r;
      }(), n.mode.ECB;
    });
  }(Wv)), ps;
}
var gs = {}, qv = {
  get exports() {
    return gs;
  },
  set exports(t) {
    gs = t;
  }
}, dc;
function Yv() {
  return dc || (dc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), xt());
    })(Re, function(n) {
      return n.pad.AnsiX923 = {
        pad: function(r, i) {
          var s = r.sigBytes, o = i * 4, a = o - s % o, l = s + a - 1;
          r.clamp(), r.words[l >>> 2] |= a << 24 - l % 4 * 8, r.sigBytes += a;
        },
        unpad: function(r) {
          var i = r.words[r.sigBytes - 1 >>> 2] & 255;
          r.sigBytes -= i;
        }
      }, n.pad.Ansix923;
    });
  }(qv)), gs;
}
var vs = {}, Gv = {
  get exports() {
    return vs;
  },
  set exports(t) {
    vs = t;
  }
}, fc;
function Qv() {
  return fc || (fc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), xt());
    })(Re, function(n) {
      return n.pad.Iso10126 = {
        pad: function(r, i) {
          var s = i * 4, o = s - r.sigBytes % s;
          r.concat(n.lib.WordArray.random(o - 1)).concat(n.lib.WordArray.create([o << 24], 1));
        },
        unpad: function(r) {
          var i = r.words[r.sigBytes - 1 >>> 2] & 255;
          r.sigBytes -= i;
        }
      }, n.pad.Iso10126;
    });
  }(Gv)), vs;
}
var ms = {}, Zv = {
  get exports() {
    return ms;
  },
  set exports(t) {
    ms = t;
  }
}, hc;
function Kv() {
  return hc || (hc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), xt());
    })(Re, function(n) {
      return n.pad.Iso97971 = {
        pad: function(r, i) {
          r.concat(n.lib.WordArray.create([2147483648], 1)), n.pad.ZeroPadding.pad(r, i);
        },
        unpad: function(r) {
          n.pad.ZeroPadding.unpad(r), r.sigBytes--;
        }
      }, n.pad.Iso97971;
    });
  }(Zv)), ms;
}
var bs = {}, Xv = {
  get exports() {
    return bs;
  },
  set exports(t) {
    bs = t;
  }
}, pc;
function Jv() {
  return pc || (pc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), xt());
    })(Re, function(n) {
      return n.pad.ZeroPadding = {
        pad: function(r, i) {
          var s = i * 4;
          r.clamp(), r.sigBytes += s - (r.sigBytes % s || s);
        },
        unpad: function(r) {
          for (var i = r.words, s = r.sigBytes - 1, s = r.sigBytes - 1; s >= 0; s--)
            if (i[s >>> 2] >>> 24 - s % 4 * 8 & 255) {
              r.sigBytes = s + 1;
              break;
            }
        }
      }, n.pad.ZeroPadding;
    });
  }(Xv)), bs;
}
var ys = {}, e1 = {
  get exports() {
    return ys;
  },
  set exports(t) {
    ys = t;
  }
}, gc;
function t1() {
  return gc || (gc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), xt());
    })(Re, function(n) {
      return n.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, n.pad.NoPadding;
    });
  }(e1)), ys;
}
var xs = {}, n1 = {
  get exports() {
    return xs;
  },
  set exports(t) {
    xs = t;
  }
}, vc;
function r1() {
  return vc || (vc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), xt());
    })(Re, function(n) {
      return function(r) {
        var i = n, s = i.lib, o = s.CipherParams, a = i.enc, l = a.Hex, c = i.format;
        c.Hex = {
          /**
           * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The hexadecimally encoded string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
           */
          stringify: function(u) {
            return u.ciphertext.toString(l);
          },
          /**
           * Converts a hexadecimally encoded ciphertext string to a cipher params object.
           *
           * @param {string} input The hexadecimally encoded string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
           */
          parse: function(u) {
            var h = l.parse(u);
            return o.create({ ciphertext: h });
          }
        };
      }(), n.format.Hex;
    });
  }(n1)), xs;
}
var _s = {}, i1 = {
  get exports() {
    return _s;
  },
  set exports(t) {
    _s = t;
  }
}, mc;
function $d() {
  return mc || (mc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), tr(), nr(), rr(), xt());
    })(Re, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.BlockCipher, o = r.algo, a = [], l = [], c = [], u = [], h = [], d = [], f = [], g = [], p = [], v = [];
        (function() {
          for (var b = [], _ = 0; _ < 256; _++)
            _ < 128 ? b[_] = _ << 1 : b[_] = _ << 1 ^ 283;
          for (var w = 0, S = 0, _ = 0; _ < 256; _++) {
            var y = S ^ S << 1 ^ S << 2 ^ S << 3 ^ S << 4;
            y = y >>> 8 ^ y & 255 ^ 99, a[w] = y, l[y] = w;
            var E = b[w], I = b[E], A = b[I], k = b[y] * 257 ^ y * 16843008;
            c[w] = k << 24 | k >>> 8, u[w] = k << 16 | k >>> 16, h[w] = k << 8 | k >>> 24, d[w] = k;
            var k = A * 16843009 ^ I * 65537 ^ E * 257 ^ w * 16843008;
            f[y] = k << 24 | k >>> 8, g[y] = k << 16 | k >>> 16, p[y] = k << 8 | k >>> 24, v[y] = k, w ? (w = E ^ b[b[b[A ^ E]]], S ^= b[b[S]]) : w = S = 1;
          }
        })();
        var m = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], x = o.AES = s.extend({
          _doReset: function() {
            var b;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var _ = this._keyPriorReset = this._key, w = _.words, S = _.sigBytes / 4, y = this._nRounds = S + 6, E = (y + 1) * 4, I = this._keySchedule = [], A = 0; A < E; A++)
                A < S ? I[A] = w[A] : (b = I[A - 1], A % S ? S > 6 && A % S == 4 && (b = a[b >>> 24] << 24 | a[b >>> 16 & 255] << 16 | a[b >>> 8 & 255] << 8 | a[b & 255]) : (b = b << 8 | b >>> 24, b = a[b >>> 24] << 24 | a[b >>> 16 & 255] << 16 | a[b >>> 8 & 255] << 8 | a[b & 255], b ^= m[A / S | 0] << 24), I[A] = I[A - S] ^ b);
              for (var k = this._invKeySchedule = [], R = 0; R < E; R++) {
                var A = E - R;
                if (R % 4)
                  var b = I[A];
                else
                  var b = I[A - 4];
                R < 4 || A <= 4 ? k[R] = b : k[R] = f[a[b >>> 24]] ^ g[a[b >>> 16 & 255]] ^ p[a[b >>> 8 & 255]] ^ v[a[b & 255]];
              }
            }
          },
          encryptBlock: function(b, _) {
            this._doCryptBlock(b, _, this._keySchedule, c, u, h, d, a);
          },
          decryptBlock: function(b, _) {
            var w = b[_ + 1];
            b[_ + 1] = b[_ + 3], b[_ + 3] = w, this._doCryptBlock(b, _, this._invKeySchedule, f, g, p, v, l);
            var w = b[_ + 1];
            b[_ + 1] = b[_ + 3], b[_ + 3] = w;
          },
          _doCryptBlock: function(b, _, w, S, y, E, I, A) {
            for (var k = this._nRounds, R = b[_] ^ w[0], N = b[_ + 1] ^ w[1], V = b[_ + 2] ^ w[2], j = b[_ + 3] ^ w[3], W = 4, J = 1; J < k; J++) {
              var le = S[R >>> 24] ^ y[N >>> 16 & 255] ^ E[V >>> 8 & 255] ^ I[j & 255] ^ w[W++], ie = S[N >>> 24] ^ y[V >>> 16 & 255] ^ E[j >>> 8 & 255] ^ I[R & 255] ^ w[W++], ce = S[V >>> 24] ^ y[j >>> 16 & 255] ^ E[R >>> 8 & 255] ^ I[N & 255] ^ w[W++], K = S[j >>> 24] ^ y[R >>> 16 & 255] ^ E[N >>> 8 & 255] ^ I[V & 255] ^ w[W++];
              R = le, N = ie, V = ce, j = K;
            }
            var le = (A[R >>> 24] << 24 | A[N >>> 16 & 255] << 16 | A[V >>> 8 & 255] << 8 | A[j & 255]) ^ w[W++], ie = (A[N >>> 24] << 24 | A[V >>> 16 & 255] << 16 | A[j >>> 8 & 255] << 8 | A[R & 255]) ^ w[W++], ce = (A[V >>> 24] << 24 | A[j >>> 16 & 255] << 16 | A[R >>> 8 & 255] << 8 | A[N & 255]) ^ w[W++], K = (A[j >>> 24] << 24 | A[R >>> 16 & 255] << 16 | A[N >>> 8 & 255] << 8 | A[V & 255]) ^ w[W++];
            b[_] = le, b[_ + 1] = ie, b[_ + 2] = ce, b[_ + 3] = K;
          },
          keySize: 256 / 32
        });
        r.AES = s._createHelper(x);
      }(), n.AES;
    });
  }(i1)), _s;
}
var ws = {}, s1 = {
  get exports() {
    return ws;
  },
  set exports(t) {
    ws = t;
  }
}, bc;
function o1() {
  return bc || (bc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), tr(), nr(), rr(), xt());
    })(Re, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.WordArray, o = i.BlockCipher, a = r.algo, l = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ], c = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ], u = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], h = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ], d = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], f = a.DES = o.extend({
          _doReset: function() {
            for (var m = this._key, x = m.words, b = [], _ = 0; _ < 56; _++) {
              var w = l[_] - 1;
              b[_] = x[w >>> 5] >>> 31 - w % 32 & 1;
            }
            for (var S = this._subKeys = [], y = 0; y < 16; y++) {
              for (var E = S[y] = [], I = u[y], _ = 0; _ < 24; _++)
                E[_ / 6 | 0] |= b[(c[_] - 1 + I) % 28] << 31 - _ % 6, E[4 + (_ / 6 | 0)] |= b[28 + (c[_ + 24] - 1 + I) % 28] << 31 - _ % 6;
              E[0] = E[0] << 1 | E[0] >>> 31;
              for (var _ = 1; _ < 7; _++)
                E[_] = E[_] >>> (_ - 1) * 4 + 3;
              E[7] = E[7] << 5 | E[7] >>> 27;
            }
            for (var A = this._invSubKeys = [], _ = 0; _ < 16; _++)
              A[_] = S[15 - _];
          },
          encryptBlock: function(m, x) {
            this._doCryptBlock(m, x, this._subKeys);
          },
          decryptBlock: function(m, x) {
            this._doCryptBlock(m, x, this._invSubKeys);
          },
          _doCryptBlock: function(m, x, b) {
            this._lBlock = m[x], this._rBlock = m[x + 1], g.call(this, 4, 252645135), g.call(this, 16, 65535), p.call(this, 2, 858993459), p.call(this, 8, 16711935), g.call(this, 1, 1431655765);
            for (var _ = 0; _ < 16; _++) {
              for (var w = b[_], S = this._lBlock, y = this._rBlock, E = 0, I = 0; I < 8; I++)
                E |= h[I][((y ^ w[I]) & d[I]) >>> 0];
              this._lBlock = y, this._rBlock = S ^ E;
            }
            var A = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = A, g.call(this, 1, 1431655765), p.call(this, 8, 16711935), p.call(this, 2, 858993459), g.call(this, 16, 65535), g.call(this, 4, 252645135), m[x] = this._lBlock, m[x + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function g(m, x) {
          var b = (this._lBlock >>> m ^ this._rBlock) & x;
          this._rBlock ^= b, this._lBlock ^= b << m;
        }
        function p(m, x) {
          var b = (this._rBlock >>> m ^ this._lBlock) & x;
          this._lBlock ^= b, this._rBlock ^= b << m;
        }
        r.DES = o._createHelper(f);
        var v = a.TripleDES = o.extend({
          _doReset: function() {
            var m = this._key, x = m.words;
            if (x.length !== 2 && x.length !== 4 && x.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var b = x.slice(0, 2), _ = x.length < 4 ? x.slice(0, 2) : x.slice(2, 4), w = x.length < 6 ? x.slice(0, 2) : x.slice(4, 6);
            this._des1 = f.createEncryptor(s.create(b)), this._des2 = f.createEncryptor(s.create(_)), this._des3 = f.createEncryptor(s.create(w));
          },
          encryptBlock: function(m, x) {
            this._des1.encryptBlock(m, x), this._des2.decryptBlock(m, x), this._des3.encryptBlock(m, x);
          },
          decryptBlock: function(m, x) {
            this._des3.decryptBlock(m, x), this._des2.encryptBlock(m, x), this._des1.decryptBlock(m, x);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        r.TripleDES = o._createHelper(v);
      }(), n.TripleDES;
    });
  }(s1)), ws;
}
var Ss = {}, a1 = {
  get exports() {
    return Ss;
  },
  set exports(t) {
    Ss = t;
  }
}, yc;
function l1() {
  return yc || (yc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), tr(), nr(), rr(), xt());
    })(Re, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.StreamCipher, o = r.algo, a = o.RC4 = s.extend({
          _doReset: function() {
            for (var u = this._key, h = u.words, d = u.sigBytes, f = this._S = [], g = 0; g < 256; g++)
              f[g] = g;
            for (var g = 0, p = 0; g < 256; g++) {
              var v = g % d, m = h[v >>> 2] >>> 24 - v % 4 * 8 & 255;
              p = (p + f[g] + m) % 256;
              var x = f[g];
              f[g] = f[p], f[p] = x;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(u, h) {
            u[h] ^= l.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function l() {
          for (var u = this._S, h = this._i, d = this._j, f = 0, g = 0; g < 4; g++) {
            h = (h + 1) % 256, d = (d + u[h]) % 256;
            var p = u[h];
            u[h] = u[d], u[d] = p, f |= u[(u[h] + u[d]) % 256] << 24 - g * 8;
          }
          return this._i = h, this._j = d, f;
        }
        r.RC4 = s._createHelper(a);
        var c = o.RC4Drop = a.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: a.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            a._doReset.call(this);
            for (var u = this.cfg.drop; u > 0; u--)
              l.call(this);
          }
        });
        r.RC4Drop = s._createHelper(c);
      }(), n.RC4;
    });
  }(a1)), Ss;
}
var Es = {}, c1 = {
  get exports() {
    return Es;
  },
  set exports(t) {
    Es = t;
  }
}, xc;
function u1() {
  return xc || (xc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), tr(), nr(), rr(), xt());
    })(Re, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.StreamCipher, o = r.algo, a = [], l = [], c = [], u = o.Rabbit = s.extend({
          _doReset: function() {
            for (var d = this._key.words, f = this.cfg.iv, g = 0; g < 4; g++)
              d[g] = (d[g] << 8 | d[g] >>> 24) & 16711935 | (d[g] << 24 | d[g] >>> 8) & 4278255360;
            var p = this._X = [
              d[0],
              d[3] << 16 | d[2] >>> 16,
              d[1],
              d[0] << 16 | d[3] >>> 16,
              d[2],
              d[1] << 16 | d[0] >>> 16,
              d[3],
              d[2] << 16 | d[1] >>> 16
            ], v = this._C = [
              d[2] << 16 | d[2] >>> 16,
              d[0] & 4294901760 | d[1] & 65535,
              d[3] << 16 | d[3] >>> 16,
              d[1] & 4294901760 | d[2] & 65535,
              d[0] << 16 | d[0] >>> 16,
              d[2] & 4294901760 | d[3] & 65535,
              d[1] << 16 | d[1] >>> 16,
              d[3] & 4294901760 | d[0] & 65535
            ];
            this._b = 0;
            for (var g = 0; g < 4; g++)
              h.call(this);
            for (var g = 0; g < 8; g++)
              v[g] ^= p[g + 4 & 7];
            if (f) {
              var m = f.words, x = m[0], b = m[1], _ = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, w = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360, S = _ >>> 16 | w & 4294901760, y = w << 16 | _ & 65535;
              v[0] ^= _, v[1] ^= S, v[2] ^= w, v[3] ^= y, v[4] ^= _, v[5] ^= S, v[6] ^= w, v[7] ^= y;
              for (var g = 0; g < 4; g++)
                h.call(this);
            }
          },
          _doProcessBlock: function(d, f) {
            var g = this._X;
            h.call(this), a[0] = g[0] ^ g[5] >>> 16 ^ g[3] << 16, a[1] = g[2] ^ g[7] >>> 16 ^ g[5] << 16, a[2] = g[4] ^ g[1] >>> 16 ^ g[7] << 16, a[3] = g[6] ^ g[3] >>> 16 ^ g[1] << 16;
            for (var p = 0; p < 4; p++)
              a[p] = (a[p] << 8 | a[p] >>> 24) & 16711935 | (a[p] << 24 | a[p] >>> 8) & 4278255360, d[f + p] ^= a[p];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function h() {
          for (var d = this._X, f = this._C, g = 0; g < 8; g++)
            l[g] = f[g];
          f[0] = f[0] + 1295307597 + this._b | 0, f[1] = f[1] + 3545052371 + (f[0] >>> 0 < l[0] >>> 0 ? 1 : 0) | 0, f[2] = f[2] + 886263092 + (f[1] >>> 0 < l[1] >>> 0 ? 1 : 0) | 0, f[3] = f[3] + 1295307597 + (f[2] >>> 0 < l[2] >>> 0 ? 1 : 0) | 0, f[4] = f[4] + 3545052371 + (f[3] >>> 0 < l[3] >>> 0 ? 1 : 0) | 0, f[5] = f[5] + 886263092 + (f[4] >>> 0 < l[4] >>> 0 ? 1 : 0) | 0, f[6] = f[6] + 1295307597 + (f[5] >>> 0 < l[5] >>> 0 ? 1 : 0) | 0, f[7] = f[7] + 3545052371 + (f[6] >>> 0 < l[6] >>> 0 ? 1 : 0) | 0, this._b = f[7] >>> 0 < l[7] >>> 0 ? 1 : 0;
          for (var g = 0; g < 8; g++) {
            var p = d[g] + f[g], v = p & 65535, m = p >>> 16, x = ((v * v >>> 17) + v * m >>> 15) + m * m, b = ((p & 4294901760) * p | 0) + ((p & 65535) * p | 0);
            c[g] = x ^ b;
          }
          d[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0, d[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, d[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0, d[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0, d[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0, d[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, d[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0, d[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0;
        }
        r.Rabbit = s._createHelper(u);
      }(), n.Rabbit;
    });
  }(c1)), Es;
}
var Cs = {}, d1 = {
  get exports() {
    return Cs;
  },
  set exports(t) {
    Cs = t;
  }
}, _c;
function f1() {
  return _c || (_c = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Be(), tr(), nr(), rr(), xt());
    })(Re, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.StreamCipher, o = r.algo, a = [], l = [], c = [], u = o.RabbitLegacy = s.extend({
          _doReset: function() {
            var d = this._key.words, f = this.cfg.iv, g = this._X = [
              d[0],
              d[3] << 16 | d[2] >>> 16,
              d[1],
              d[0] << 16 | d[3] >>> 16,
              d[2],
              d[1] << 16 | d[0] >>> 16,
              d[3],
              d[2] << 16 | d[1] >>> 16
            ], p = this._C = [
              d[2] << 16 | d[2] >>> 16,
              d[0] & 4294901760 | d[1] & 65535,
              d[3] << 16 | d[3] >>> 16,
              d[1] & 4294901760 | d[2] & 65535,
              d[0] << 16 | d[0] >>> 16,
              d[2] & 4294901760 | d[3] & 65535,
              d[1] << 16 | d[1] >>> 16,
              d[3] & 4294901760 | d[0] & 65535
            ];
            this._b = 0;
            for (var v = 0; v < 4; v++)
              h.call(this);
            for (var v = 0; v < 8; v++)
              p[v] ^= g[v + 4 & 7];
            if (f) {
              var m = f.words, x = m[0], b = m[1], _ = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, w = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360, S = _ >>> 16 | w & 4294901760, y = w << 16 | _ & 65535;
              p[0] ^= _, p[1] ^= S, p[2] ^= w, p[3] ^= y, p[4] ^= _, p[5] ^= S, p[6] ^= w, p[7] ^= y;
              for (var v = 0; v < 4; v++)
                h.call(this);
            }
          },
          _doProcessBlock: function(d, f) {
            var g = this._X;
            h.call(this), a[0] = g[0] ^ g[5] >>> 16 ^ g[3] << 16, a[1] = g[2] ^ g[7] >>> 16 ^ g[5] << 16, a[2] = g[4] ^ g[1] >>> 16 ^ g[7] << 16, a[3] = g[6] ^ g[3] >>> 16 ^ g[1] << 16;
            for (var p = 0; p < 4; p++)
              a[p] = (a[p] << 8 | a[p] >>> 24) & 16711935 | (a[p] << 24 | a[p] >>> 8) & 4278255360, d[f + p] ^= a[p];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function h() {
          for (var d = this._X, f = this._C, g = 0; g < 8; g++)
            l[g] = f[g];
          f[0] = f[0] + 1295307597 + this._b | 0, f[1] = f[1] + 3545052371 + (f[0] >>> 0 < l[0] >>> 0 ? 1 : 0) | 0, f[2] = f[2] + 886263092 + (f[1] >>> 0 < l[1] >>> 0 ? 1 : 0) | 0, f[3] = f[3] + 1295307597 + (f[2] >>> 0 < l[2] >>> 0 ? 1 : 0) | 0, f[4] = f[4] + 3545052371 + (f[3] >>> 0 < l[3] >>> 0 ? 1 : 0) | 0, f[5] = f[5] + 886263092 + (f[4] >>> 0 < l[4] >>> 0 ? 1 : 0) | 0, f[6] = f[6] + 1295307597 + (f[5] >>> 0 < l[5] >>> 0 ? 1 : 0) | 0, f[7] = f[7] + 3545052371 + (f[6] >>> 0 < l[6] >>> 0 ? 1 : 0) | 0, this._b = f[7] >>> 0 < l[7] >>> 0 ? 1 : 0;
          for (var g = 0; g < 8; g++) {
            var p = d[g] + f[g], v = p & 65535, m = p >>> 16, x = ((v * v >>> 17) + v * m >>> 15) + m * m, b = ((p & 4294901760) * p | 0) + ((p & 65535) * p | 0);
            c[g] = x ^ b;
          }
          d[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0, d[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, d[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0, d[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0, d[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0, d[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, d[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0, d[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0;
        }
        r.RabbitLegacy = s._createHelper(u);
      }(), n.RabbitLegacy;
    });
  }(d1)), Cs;
}
(function(t, e) {
  (function(n, r, i) {
    t.exports = r(Be(), Qs(), pv(), vv(), tr(), yv(), nr(), Ua(), Bd(), Ev(), Ld(), Av(), Tv(), Iv(), ja(), Nv(), rr(), xt(), $v(), Fv(), Vv(), jv(), Pd(), Yv(), Qv(), Kv(), Jv(), t1(), r1(), $d(), o1(), l1(), u1(), f1());
  })(Re, function(n) {
    return n;
  });
})(av);
var Jo = {}, h1 = {
  get exports() {
    return Jo;
  },
  set exports(t) {
    Jo = t;
  }
};
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(Re, function() {
    var n = 1e3, r = 6e4, i = 36e5, s = "millisecond", o = "second", a = "minute", l = "hour", c = "day", u = "week", h = "month", d = "quarter", f = "year", g = "date", p = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, x = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
      var V = ["th", "st", "nd", "rd"], j = N % 100;
      return "[" + N + (V[(j - 20) % 10] || V[j] || V[0]) + "]";
    } }, b = function(N, V, j) {
      var W = String(N);
      return !W || W.length >= V ? N : "" + Array(V + 1 - W.length).join(j) + N;
    }, _ = { s: b, z: function(N) {
      var V = -N.utcOffset(), j = Math.abs(V), W = Math.floor(j / 60), J = j % 60;
      return (V <= 0 ? "+" : "-") + b(W, 2, "0") + ":" + b(J, 2, "0");
    }, m: function N(V, j) {
      if (V.date() < j.date())
        return -N(j, V);
      var W = 12 * (j.year() - V.year()) + (j.month() - V.month()), J = V.clone().add(W, h), le = j - J < 0, ie = V.clone().add(W + (le ? -1 : 1), h);
      return +(-(W + (j - J) / (le ? J - ie : ie - J)) || 0);
    }, a: function(N) {
      return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
    }, p: function(N) {
      return { M: h, y: f, w: u, d: c, D: g, h: l, m: a, s: o, ms: s, Q: d }[N] || String(N || "").toLowerCase().replace(/s$/, "");
    }, u: function(N) {
      return N === void 0;
    } }, w = "en", S = {};
    S[w] = x;
    var y = function(N) {
      return N instanceof k;
    }, E = function N(V, j, W) {
      var J;
      if (!V)
        return w;
      if (typeof V == "string") {
        var le = V.toLowerCase();
        S[le] && (J = le), j && (S[le] = j, J = le);
        var ie = V.split("-");
        if (!J && ie.length > 1)
          return N(ie[0]);
      } else {
        var ce = V.name;
        S[ce] = V, J = ce;
      }
      return !W && J && (w = J), J || !W && w;
    }, I = function(N, V) {
      if (y(N))
        return N.clone();
      var j = typeof V == "object" ? V : {};
      return j.date = N, j.args = arguments, new k(j);
    }, A = _;
    A.l = E, A.i = y, A.w = function(N, V) {
      return I(N, { locale: V.$L, utc: V.$u, x: V.$x, $offset: V.$offset });
    };
    var k = function() {
      function N(j) {
        this.$L = E(j.locale, null, !0), this.parse(j);
      }
      var V = N.prototype;
      return V.parse = function(j) {
        this.$d = function(W) {
          var J = W.date, le = W.utc;
          if (J === null)
            return /* @__PURE__ */ new Date(NaN);
          if (A.u(J))
            return /* @__PURE__ */ new Date();
          if (J instanceof Date)
            return new Date(J);
          if (typeof J == "string" && !/Z$/i.test(J)) {
            var ie = J.match(v);
            if (ie) {
              var ce = ie[2] - 1 || 0, K = (ie[7] || "0").substring(0, 3);
              return le ? new Date(Date.UTC(ie[1], ce, ie[3] || 1, ie[4] || 0, ie[5] || 0, ie[6] || 0, K)) : new Date(ie[1], ce, ie[3] || 1, ie[4] || 0, ie[5] || 0, ie[6] || 0, K);
            }
          }
          return new Date(J);
        }(j), this.$x = j.x || {}, this.init();
      }, V.init = function() {
        var j = this.$d;
        this.$y = j.getFullYear(), this.$M = j.getMonth(), this.$D = j.getDate(), this.$W = j.getDay(), this.$H = j.getHours(), this.$m = j.getMinutes(), this.$s = j.getSeconds(), this.$ms = j.getMilliseconds();
      }, V.$utils = function() {
        return A;
      }, V.isValid = function() {
        return this.$d.toString() !== p;
      }, V.isSame = function(j, W) {
        var J = I(j);
        return this.startOf(W) <= J && J <= this.endOf(W);
      }, V.isAfter = function(j, W) {
        return I(j) < this.startOf(W);
      }, V.isBefore = function(j, W) {
        return this.endOf(W) < I(j);
      }, V.$g = function(j, W, J) {
        return A.u(j) ? this[W] : this.set(J, j);
      }, V.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, V.valueOf = function() {
        return this.$d.getTime();
      }, V.startOf = function(j, W) {
        var J = this, le = !!A.u(W) || W, ie = A.p(j), ce = function(ge, _e) {
          var De = A.w(J.$u ? Date.UTC(J.$y, _e, ge) : new Date(J.$y, _e, ge), J);
          return le ? De : De.endOf(c);
        }, K = function(ge, _e) {
          return A.w(J.toDate()[ge].apply(J.toDate("s"), (le ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(_e)), J);
        }, B = this.$W, Y = this.$M, G = this.$D, ue = "set" + (this.$u ? "UTC" : "");
        switch (ie) {
          case f:
            return le ? ce(1, 0) : ce(31, 11);
          case h:
            return le ? ce(1, Y) : ce(0, Y + 1);
          case u:
            var ve = this.$locale().weekStart || 0, Ee = (B < ve ? B + 7 : B) - ve;
            return ce(le ? G - Ee : G + (6 - Ee), Y);
          case c:
          case g:
            return K(ue + "Hours", 0);
          case l:
            return K(ue + "Minutes", 1);
          case a:
            return K(ue + "Seconds", 2);
          case o:
            return K(ue + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, V.endOf = function(j) {
        return this.startOf(j, !1);
      }, V.$set = function(j, W) {
        var J, le = A.p(j), ie = "set" + (this.$u ? "UTC" : ""), ce = (J = {}, J[c] = ie + "Date", J[g] = ie + "Date", J[h] = ie + "Month", J[f] = ie + "FullYear", J[l] = ie + "Hours", J[a] = ie + "Minutes", J[o] = ie + "Seconds", J[s] = ie + "Milliseconds", J)[le], K = le === c ? this.$D + (W - this.$W) : W;
        if (le === h || le === f) {
          var B = this.clone().set(g, 1);
          B.$d[ce](K), B.init(), this.$d = B.set(g, Math.min(this.$D, B.daysInMonth())).$d;
        } else
          ce && this.$d[ce](K);
        return this.init(), this;
      }, V.set = function(j, W) {
        return this.clone().$set(j, W);
      }, V.get = function(j) {
        return this[A.p(j)]();
      }, V.add = function(j, W) {
        var J, le = this;
        j = Number(j);
        var ie = A.p(W), ce = function(Y) {
          var G = I(le);
          return A.w(G.date(G.date() + Math.round(Y * j)), le);
        };
        if (ie === h)
          return this.set(h, this.$M + j);
        if (ie === f)
          return this.set(f, this.$y + j);
        if (ie === c)
          return ce(1);
        if (ie === u)
          return ce(7);
        var K = (J = {}, J[a] = r, J[l] = i, J[o] = n, J)[ie] || 1, B = this.$d.getTime() + j * K;
        return A.w(B, this);
      }, V.subtract = function(j, W) {
        return this.add(-1 * j, W);
      }, V.format = function(j) {
        var W = this, J = this.$locale();
        if (!this.isValid())
          return J.invalidDate || p;
        var le = j || "YYYY-MM-DDTHH:mm:ssZ", ie = A.z(this), ce = this.$H, K = this.$m, B = this.$M, Y = J.weekdays, G = J.months, ue = function(_e, De, vt, mt) {
          return _e && (_e[De] || _e(W, le)) || vt[De].slice(0, mt);
        }, ve = function(_e) {
          return A.s(ce % 12 || 12, _e, "0");
        }, Ee = J.meridiem || function(_e, De, vt) {
          var mt = _e < 12 ? "AM" : "PM";
          return vt ? mt.toLowerCase() : mt;
        }, ge = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: B + 1, MM: A.s(B + 1, 2, "0"), MMM: ue(J.monthsShort, B, G, 3), MMMM: ue(G, B), D: this.$D, DD: A.s(this.$D, 2, "0"), d: String(this.$W), dd: ue(J.weekdaysMin, this.$W, Y, 2), ddd: ue(J.weekdaysShort, this.$W, Y, 3), dddd: Y[this.$W], H: String(ce), HH: A.s(ce, 2, "0"), h: ve(1), hh: ve(2), a: Ee(ce, K, !0), A: Ee(ce, K, !1), m: String(K), mm: A.s(K, 2, "0"), s: String(this.$s), ss: A.s(this.$s, 2, "0"), SSS: A.s(this.$ms, 3, "0"), Z: ie };
        return le.replace(m, function(_e, De) {
          return De || ge[_e] || ie.replace(":", "");
        });
      }, V.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, V.diff = function(j, W, J) {
        var le, ie = A.p(W), ce = I(j), K = (ce.utcOffset() - this.utcOffset()) * r, B = this - ce, Y = A.m(this, ce);
        return Y = (le = {}, le[f] = Y / 12, le[h] = Y, le[d] = Y / 3, le[u] = (B - K) / 6048e5, le[c] = (B - K) / 864e5, le[l] = B / i, le[a] = B / r, le[o] = B / n, le)[ie] || B, J ? Y : A.a(Y);
      }, V.daysInMonth = function() {
        return this.endOf(h).$D;
      }, V.$locale = function() {
        return S[this.$L];
      }, V.locale = function(j, W) {
        if (!j)
          return this.$L;
        var J = this.clone(), le = E(j, W, !0);
        return le && (J.$L = le), J;
      }, V.clone = function() {
        return A.w(this.$d, this);
      }, V.toDate = function() {
        return new Date(this.valueOf());
      }, V.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, V.toISOString = function() {
        return this.$d.toISOString();
      }, V.toString = function() {
        return this.$d.toUTCString();
      }, N;
    }(), R = k.prototype;
    return I.prototype = R, [["$ms", s], ["$s", o], ["$m", a], ["$H", l], ["$W", c], ["$M", h], ["$y", f], ["$D", g]].forEach(function(N) {
      R[N[1]] = function(V) {
        return this.$g(V, N[0], N[1]);
      };
    }), I.extend = function(N, V) {
      return N.$i || (N(V, k, I), N.$i = !0), I;
    }, I.locale = E, I.isDayjs = y, I.unix = function(N) {
      return I(1e3 * N);
    }, I.en = S[w], I.Ls = S, I.p = {}, I;
  });
})(h1);
const ct = Jo;
var Hd = function() {
  if (typeof Map < "u")
    return Map;
  function t(e, n) {
    var r = -1;
    return e.some(function(i, s) {
      return i[0] === n ? (r = s, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    function() {
      function e() {
        this.__entries__ = [];
      }
      return Object.defineProperty(e.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.get = function(n) {
        var r = t(this.__entries__, n), i = this.__entries__[r];
        return i && i[1];
      }, e.prototype.set = function(n, r) {
        var i = t(this.__entries__, n);
        ~i ? this.__entries__[i][1] = r : this.__entries__.push([n, r]);
      }, e.prototype.delete = function(n) {
        var r = this.__entries__, i = t(r, n);
        ~i && r.splice(i, 1);
      }, e.prototype.has = function(n) {
        return !!~t(this.__entries__, n);
      }, e.prototype.clear = function() {
        this.__entries__.splice(0);
      }, e.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var i = 0, s = this.__entries__; i < s.length; i++) {
          var o = s[i];
          n.call(r, o[1], o[0]);
        }
      }, e;
    }()
  );
}(), ea = typeof window < "u" && typeof document < "u" && window.document === document, ks = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), p1 = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(ks) : function(t) {
    return setTimeout(function() {
      return t(Date.now());
    }, 1e3 / 60);
  };
}(), g1 = 2;
function v1(t, e) {
  var n = !1, r = !1, i = 0;
  function s() {
    n && (n = !1, t()), r && a();
  }
  function o() {
    p1(s);
  }
  function a() {
    var l = Date.now();
    if (n) {
      if (l - i < g1)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(o, e);
    i = l;
  }
  return a;
}
var m1 = 20, b1 = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], y1 = typeof MutationObserver < "u", x1 = (
  /** @class */
  function() {
    function t() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = v1(this.refresh.bind(this), m1);
    }
    return t.prototype.addObserver = function(e) {
      ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_();
    }, t.prototype.removeObserver = function(e) {
      var n = this.observers_, r = n.indexOf(e);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, t.prototype.refresh = function() {
      var e = this.updateObservers_();
      e && this.refresh();
    }, t.prototype.updateObservers_ = function() {
      var e = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return e.forEach(function(n) {
        return n.broadcastActive();
      }), e.length > 0;
    }, t.prototype.connect_ = function() {
      !ea || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), y1 ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, t.prototype.disconnect_ = function() {
      !ea || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, t.prototype.onTransitionEnd_ = function(e) {
      var n = e.propertyName, r = n === void 0 ? "" : n, i = b1.some(function(s) {
        return !!~r.indexOf(s);
      });
      i && this.refresh();
    }, t.getInstance = function() {
      return this.instance_ || (this.instance_ = new t()), this.instance_;
    }, t.instance_ = null, t;
  }()
), Fd = function(t, e) {
  for (var n = 0, r = Object.keys(e); n < r.length; n++) {
    var i = r[n];
    Object.defineProperty(t, i, {
      value: e[i],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return t;
}, xr = function(t) {
  var e = t && t.ownerDocument && t.ownerDocument.defaultView;
  return e || ks;
}, zd = Zs(0, 0, 0, 0);
function As(t) {
  return parseFloat(t) || 0;
}
function wc(t) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  return e.reduce(function(r, i) {
    var s = t["border-" + i + "-width"];
    return r + As(s);
  }, 0);
}
function _1(t) {
  for (var e = ["top", "right", "bottom", "left"], n = {}, r = 0, i = e; r < i.length; r++) {
    var s = i[r], o = t["padding-" + s];
    n[s] = As(o);
  }
  return n;
}
function w1(t) {
  var e = t.getBBox();
  return Zs(0, 0, e.width, e.height);
}
function S1(t) {
  var e = t.clientWidth, n = t.clientHeight;
  if (!e && !n)
    return zd;
  var r = xr(t).getComputedStyle(t), i = _1(r), s = i.left + i.right, o = i.top + i.bottom, a = As(r.width), l = As(r.height);
  if (r.boxSizing === "border-box" && (Math.round(a + s) !== e && (a -= wc(r, "left", "right") + s), Math.round(l + o) !== n && (l -= wc(r, "top", "bottom") + o)), !C1(t)) {
    var c = Math.round(a + s) - e, u = Math.round(l + o) - n;
    Math.abs(c) !== 1 && (a -= c), Math.abs(u) !== 1 && (l -= u);
  }
  return Zs(i.left, i.top, a, l);
}
var E1 = function() {
  return typeof SVGGraphicsElement < "u" ? function(t) {
    return t instanceof xr(t).SVGGraphicsElement;
  } : function(t) {
    return t instanceof xr(t).SVGElement && typeof t.getBBox == "function";
  };
}();
function C1(t) {
  return t === xr(t).document.documentElement;
}
function k1(t) {
  return ea ? E1(t) ? w1(t) : S1(t) : zd;
}
function A1(t) {
  var e = t.x, n = t.y, r = t.width, i = t.height, s = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, o = Object.create(s.prototype);
  return Fd(o, {
    x: e,
    y: n,
    width: r,
    height: i,
    top: n,
    right: e + r,
    bottom: i + n,
    left: e
  }), o;
}
function Zs(t, e, n, r) {
  return { x: t, y: e, width: n, height: r };
}
var D1 = (
  /** @class */
  function() {
    function t(e) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Zs(0, 0, 0, 0), this.target = e;
    }
    return t.prototype.isActive = function() {
      var e = k1(this.target);
      return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
    }, t.prototype.broadcastRect = function() {
      var e = this.contentRect_;
      return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e;
    }, t;
  }()
), T1 = (
  /** @class */
  function() {
    function t(e, n) {
      var r = A1(n);
      Fd(this, { target: e, contentRect: r });
    }
    return t;
  }()
), R1 = (
  /** @class */
  function() {
    function t(e, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new Hd(), typeof e != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = e, this.controller_ = n, this.callbackCtx_ = r;
    }
    return t.prototype.observe = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof xr(e).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(e) || (n.set(e, new D1(e)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, t.prototype.unobserve = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof xr(e).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(e) && (n.delete(e), n.size || this.controller_.removeObserver(this));
      }
    }, t.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, t.prototype.gatherActive = function() {
      var e = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && e.activeObservations_.push(n);
      });
    }, t.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var e = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new T1(r.target, r.broadcastRect());
        });
        this.callback_.call(e, n, e), this.clearActive();
      }
    }, t.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, t.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, t;
  }()
), Vd = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Hd(), Ud = (
  /** @class */
  function() {
    function t(e) {
      if (!(this instanceof t))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = x1.getInstance(), r = new R1(e, n, this);
      Vd.set(this, r);
    }
    return t;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(t) {
  Ud.prototype[t] = function() {
    var e;
    return (e = Vd.get(this))[t].apply(e, arguments);
  };
});
(function() {
  return typeof ks.ResizeObserver < "u" ? ks.ResizeObserver : Ud;
})();
$d();
tr();
var Sc = {}, I1 = {
  get exports() {
    return Sc;
  },
  set exports(t) {
    Sc = t;
  }
};
(function(t, e) {
  (function(n, r) {
    t.exports = r(Be());
  })(Re, function(n) {
    return n.enc.Utf8;
  });
})(I1);
nr();
Pd();
var Ec = {}, M1 = {
  get exports() {
    return Ec;
  },
  set exports(t) {
    Ec = t;
  }
};
(function(t, e) {
  (function(n, r, i) {
    t.exports = r(Be(), xt());
  })(Re, function(n) {
    return n.pad.Pkcs7;
  });
})(M1);
function O1(t) {
  var e = [], n = "";
  for (n in t)
    e.push(n);
  return e;
}
function ta(t) {
  return t = JSON.stringify(t), !(typeof t != "string" || !/^\{[\s\S]*\}$/.test(t));
}
function N1(t) {
  return t instanceof Array;
}
function B1(t) {
  return Array.prototype.slice.call(t);
}
function _r() {
  if (!(this instanceof _r))
    return new _r();
}
_r.prototype = {
  get: function(t) {
    for (var e = t + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
      for (var i = n[r]; i.charAt(0) == " "; )
        i = i.substring(1, i.length);
      if (i.indexOf(e) == 0)
        return decodeURI(i.substring(e.length, i.length));
    }
    return !1;
  },
  set: function(t, e, n) {
    if (ta(t))
      for (const r in t)
        this.set(r, t[r], e, n);
    else if (typeof t == "string") {
      const r = ta(n) ? n : { expires: n }, i = r.path !== void 0 ? `;path=${r.path};path=/` : ";path=/", s = r.domain ? `;domain=${r.domain}` : "", o = r.secure ? ";secure" : "";
      let a = r.expires !== void 0 ? r.expires : "";
      typeof a == "string" && a !== "" ? a = new Date(a) : typeof a == "number" && (a = new Date(+/* @__PURE__ */ new Date() + 1e3 * 60 * 60 * 24 * a)), a !== "" && "toGMTString" in a && (a = `;expires=${a.toGMTString()}`);
      const l = r.sameSite ? `;SameSite=${r.sameSite}` : "";
      document.cookie = `${t}=${encodeURI(e) + a + i + s + o + l}`;
    }
  },
  remove: function(t) {
    t = N1(t) ? t : B1(arguments);
    for (var e = 0, n = t.length; e < n; e++)
      this.set(t[e], "", -1);
    return t;
  },
  clear: function(t) {
    return t ? this.remove(t) : this.remove(O1(this.all()));
  },
  all: function() {
    if (document.cookie === "")
      return {};
    for (var t = document.cookie.split("; "), e = {}, n = 0, r = t.length; n < r; n++) {
      var i = t[n].split("=");
      e[decodeURI(i[0])] = decodeURI(i[1]);
    }
    return e;
  }
};
let $n = null;
const jd = function(t, e, n) {
  const r = arguments;
  if ($n || ($n = _r()), r.length === 0)
    return $n.all();
  if (r.length === 1 && t === null)
    return $n.clear();
  if (r.length === 2 && !e)
    return $n.clear(t);
  if (typeof t == "string" && !e)
    return $n.get(t);
  if (typeof t == "string" && e || ta(t))
    return $n.set(t, e, n);
};
for (const t in _r.prototype)
  jd[t] = _r.prototype[t];
var na = {}, L1 = {
  get exports() {
    return na;
  },
  set exports(t) {
    na = t;
  }
};
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(t, e) {
  (function(n) {
    t.exports = n();
  })(function() {
    return function n(r, i, s) {
      function o(c, u) {
        if (!i[c]) {
          if (!r[c]) {
            var h = typeof Fr == "function" && Fr;
            if (!u && h)
              return h(c, !0);
            if (a)
              return a(c, !0);
            var d = new Error("Cannot find module '" + c + "'");
            throw d.code = "MODULE_NOT_FOUND", d;
          }
          var f = i[c] = { exports: {} };
          r[c][0].call(f.exports, function(g) {
            var p = r[c][1][g];
            return o(p || g);
          }, f, f.exports, n, r, i, s);
        }
        return i[c].exports;
      }
      for (var a = typeof Fr == "function" && Fr, l = 0; l < s.length; l++)
        o(s[l]);
      return o;
    }({ 1: [function(n, r, i) {
      (function(s) {
        var o = s.MutationObserver || s.WebKitMutationObserver, a;
        if (o) {
          var l = 0, c = new o(g), u = s.document.createTextNode("");
          c.observe(u, {
            characterData: !0
          }), a = function() {
            u.data = l = ++l % 2;
          };
        } else if (!s.setImmediate && typeof s.MessageChannel < "u") {
          var h = new s.MessageChannel();
          h.port1.onmessage = g, a = function() {
            h.port2.postMessage(0);
          };
        } else
          "document" in s && "onreadystatechange" in s.document.createElement("script") ? a = function() {
            var v = s.document.createElement("script");
            v.onreadystatechange = function() {
              g(), v.onreadystatechange = null, v.parentNode.removeChild(v), v = null;
            }, s.document.documentElement.appendChild(v);
          } : a = function() {
            setTimeout(g, 0);
          };
        var d, f = [];
        function g() {
          d = !0;
          for (var v, m, x = f.length; x; ) {
            for (m = f, f = [], v = -1; ++v < x; )
              m[v]();
            x = f.length;
          }
          d = !1;
        }
        r.exports = p;
        function p(v) {
          f.push(v) === 1 && !d && a();
        }
      }).call(this, typeof Re < "u" ? Re : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(n, r, i) {
      var s = n(1);
      function o() {
      }
      var a = {}, l = ["REJECTED"], c = ["FULFILLED"], u = ["PENDING"];
      r.exports = h;
      function h(w) {
        if (typeof w != "function")
          throw new TypeError("resolver must be a function");
        this.state = u, this.queue = [], this.outcome = void 0, w !== o && p(this, w);
      }
      h.prototype.catch = function(w) {
        return this.then(null, w);
      }, h.prototype.then = function(w, S) {
        if (typeof w != "function" && this.state === c || typeof S != "function" && this.state === l)
          return this;
        var y = new this.constructor(o);
        if (this.state !== u) {
          var E = this.state === c ? w : S;
          f(y, E, this.outcome);
        } else
          this.queue.push(new d(y, w, S));
        return y;
      };
      function d(w, S, y) {
        this.promise = w, typeof S == "function" && (this.onFulfilled = S, this.callFulfilled = this.otherCallFulfilled), typeof y == "function" && (this.onRejected = y, this.callRejected = this.otherCallRejected);
      }
      d.prototype.callFulfilled = function(w) {
        a.resolve(this.promise, w);
      }, d.prototype.otherCallFulfilled = function(w) {
        f(this.promise, this.onFulfilled, w);
      }, d.prototype.callRejected = function(w) {
        a.reject(this.promise, w);
      }, d.prototype.otherCallRejected = function(w) {
        f(this.promise, this.onRejected, w);
      };
      function f(w, S, y) {
        s(function() {
          var E;
          try {
            E = S(y);
          } catch (I) {
            return a.reject(w, I);
          }
          E === w ? a.reject(w, new TypeError("Cannot resolve promise with itself")) : a.resolve(w, E);
        });
      }
      a.resolve = function(w, S) {
        var y = v(g, S);
        if (y.status === "error")
          return a.reject(w, y.value);
        var E = y.value;
        if (E)
          p(w, E);
        else {
          w.state = c, w.outcome = S;
          for (var I = -1, A = w.queue.length; ++I < A; )
            w.queue[I].callFulfilled(S);
        }
        return w;
      }, a.reject = function(w, S) {
        w.state = l, w.outcome = S;
        for (var y = -1, E = w.queue.length; ++y < E; )
          w.queue[y].callRejected(S);
        return w;
      };
      function g(w) {
        var S = w && w.then;
        if (w && (typeof w == "object" || typeof w == "function") && typeof S == "function")
          return function() {
            S.apply(w, arguments);
          };
      }
      function p(w, S) {
        var y = !1;
        function E(R) {
          y || (y = !0, a.reject(w, R));
        }
        function I(R) {
          y || (y = !0, a.resolve(w, R));
        }
        function A() {
          S(I, E);
        }
        var k = v(A);
        k.status === "error" && E(k.value);
      }
      function v(w, S) {
        var y = {};
        try {
          y.value = w(S), y.status = "success";
        } catch (E) {
          y.status = "error", y.value = E;
        }
        return y;
      }
      h.resolve = m;
      function m(w) {
        return w instanceof this ? w : a.resolve(new this(o), w);
      }
      h.reject = x;
      function x(w) {
        var S = new this(o);
        return a.reject(S, w);
      }
      h.all = b;
      function b(w) {
        var S = this;
        if (Object.prototype.toString.call(w) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var y = w.length, E = !1;
        if (!y)
          return this.resolve([]);
        for (var I = new Array(y), A = 0, k = -1, R = new this(o); ++k < y; )
          N(w[k], k);
        return R;
        function N(V, j) {
          S.resolve(V).then(W, function(J) {
            E || (E = !0, a.reject(R, J));
          });
          function W(J) {
            I[j] = J, ++A === y && !E && (E = !0, a.resolve(R, I));
          }
        }
      }
      h.race = _;
      function _(w) {
        var S = this;
        if (Object.prototype.toString.call(w) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var y = w.length, E = !1;
        if (!y)
          return this.resolve([]);
        for (var I = -1, A = new this(o); ++I < y; )
          k(w[I]);
        return A;
        function k(R) {
          S.resolve(R).then(function(N) {
            E || (E = !0, a.resolve(A, N));
          }, function(N) {
            E || (E = !0, a.reject(A, N));
          });
        }
      }
    }, { 1: 1 }], 3: [function(n, r, i) {
      (function(s) {
        typeof s.Promise != "function" && (s.Promise = n(2));
      }).call(this, typeof Re < "u" ? Re : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(n, r, i) {
      var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(C) {
        return typeof C;
      } : function(C) {
        return C && typeof Symbol == "function" && C.constructor === Symbol && C !== Symbol.prototype ? "symbol" : typeof C;
      };
      function o(C, L) {
        if (!(C instanceof L))
          throw new TypeError("Cannot call a class as a function");
      }
      function a() {
        try {
          if (typeof indexedDB < "u")
            return indexedDB;
          if (typeof webkitIndexedDB < "u")
            return webkitIndexedDB;
          if (typeof mozIndexedDB < "u")
            return mozIndexedDB;
          if (typeof OIndexedDB < "u")
            return OIndexedDB;
          if (typeof msIndexedDB < "u")
            return msIndexedDB;
        } catch {
          return;
        }
      }
      var l = a();
      function c() {
        try {
          if (!l || !l.open)
            return !1;
          var C = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), L = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!C || L) && typeof indexedDB < "u" && // some outdated implementations of IDB that appear on Samsung
          // and HTC Android devices <4.4 are missing IDBKeyRange
          // See: https://github.com/mozilla/localForage/issues/128
          // See: https://github.com/mozilla/localForage/issues/272
          typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function u(C, L) {
        C = C || [], L = L || {};
        try {
          return new Blob(C, L);
        } catch (H) {
          if (H.name !== "TypeError")
            throw H;
          for (var D = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, z = new D(), U = 0; U < C.length; U += 1)
            z.append(C[U]);
          return z.getBlob(L.type);
        }
      }
      typeof Promise > "u" && n(3);
      var h = Promise;
      function d(C, L) {
        L && C.then(function(D) {
          L(null, D);
        }, function(D) {
          L(D);
        });
      }
      function f(C, L, D) {
        typeof L == "function" && C.then(L), typeof D == "function" && C.catch(D);
      }
      function g(C) {
        return typeof C != "string" && (console.warn(C + " used as a key, but it is not a string."), C = String(C)), C;
      }
      function p() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var v = "local-forage-detect-blob-support", m = void 0, x = {}, b = Object.prototype.toString, _ = "readonly", w = "readwrite";
      function S(C) {
        for (var L = C.length, D = new ArrayBuffer(L), z = new Uint8Array(D), U = 0; U < L; U++)
          z[U] = C.charCodeAt(U);
        return D;
      }
      function y(C) {
        return new h(function(L) {
          var D = C.transaction(v, w), z = u([""]);
          D.objectStore(v).put(z, "key"), D.onabort = function(U) {
            U.preventDefault(), U.stopPropagation(), L(!1);
          }, D.oncomplete = function() {
            var U = navigator.userAgent.match(/Chrome\/(\d+)/), H = navigator.userAgent.match(/Edge\//);
            L(H || !U || parseInt(U[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function E(C) {
        return typeof m == "boolean" ? h.resolve(m) : y(C).then(function(L) {
          return m = L, m;
        });
      }
      function I(C) {
        var L = x[C.name], D = {};
        D.promise = new h(function(z, U) {
          D.resolve = z, D.reject = U;
        }), L.deferredOperations.push(D), L.dbReady ? L.dbReady = L.dbReady.then(function() {
          return D.promise;
        }) : L.dbReady = D.promise;
      }
      function A(C) {
        var L = x[C.name], D = L.deferredOperations.pop();
        if (D)
          return D.resolve(), D.promise;
      }
      function k(C, L) {
        var D = x[C.name], z = D.deferredOperations.pop();
        if (z)
          return z.reject(L), z.promise;
      }
      function R(C, L) {
        return new h(function(D, z) {
          if (x[C.name] = x[C.name] || B(), C.db)
            if (L)
              I(C), C.db.close();
            else
              return D(C.db);
          var U = [C.name];
          L && U.push(C.version);
          var H = l.open.apply(l, U);
          L && (H.onupgradeneeded = function(ee) {
            var ne = H.result;
            try {
              ne.createObjectStore(C.storeName), ee.oldVersion <= 1 && ne.createObjectStore(v);
            } catch (se) {
              if (se.name === "ConstraintError")
                console.warn('The database "' + C.name + '" has been upgraded from version ' + ee.oldVersion + " to version " + ee.newVersion + ', but the storage "' + C.storeName + '" already exists.');
              else
                throw se;
            }
          }), H.onerror = function(ee) {
            ee.preventDefault(), z(H.error);
          }, H.onsuccess = function() {
            var ee = H.result;
            ee.onversionchange = function(ne) {
              ne.target.close();
            }, D(ee), A(C);
          };
        });
      }
      function N(C) {
        return R(C, !1);
      }
      function V(C) {
        return R(C, !0);
      }
      function j(C, L) {
        if (!C.db)
          return !0;
        var D = !C.db.objectStoreNames.contains(C.storeName), z = C.version < C.db.version, U = C.version > C.db.version;
        if (z && (C.version !== L && console.warn('The database "' + C.name + `" can't be downgraded from version ` + C.db.version + " to version " + C.version + "."), C.version = C.db.version), U || D) {
          if (D) {
            var H = C.db.version + 1;
            H > C.version && (C.version = H);
          }
          return !0;
        }
        return !1;
      }
      function W(C) {
        return new h(function(L, D) {
          var z = new FileReader();
          z.onerror = D, z.onloadend = function(U) {
            var H = btoa(U.target.result || "");
            L({
              __local_forage_encoded_blob: !0,
              data: H,
              type: C.type
            });
          }, z.readAsBinaryString(C);
        });
      }
      function J(C) {
        var L = S(atob(C.data));
        return u([L], { type: C.type });
      }
      function le(C) {
        return C && C.__local_forage_encoded_blob;
      }
      function ie(C) {
        var L = this, D = L._initReady().then(function() {
          var z = x[L._dbInfo.name];
          if (z && z.dbReady)
            return z.dbReady;
        });
        return f(D, C, C), D;
      }
      function ce(C) {
        I(C);
        for (var L = x[C.name], D = L.forages, z = 0; z < D.length; z++) {
          var U = D[z];
          U._dbInfo.db && (U._dbInfo.db.close(), U._dbInfo.db = null);
        }
        return C.db = null, N(C).then(function(H) {
          return C.db = H, j(C) ? V(C) : H;
        }).then(function(H) {
          C.db = L.db = H;
          for (var ee = 0; ee < D.length; ee++)
            D[ee]._dbInfo.db = H;
        }).catch(function(H) {
          throw k(C, H), H;
        });
      }
      function K(C, L, D, z) {
        z === void 0 && (z = 1);
        try {
          var U = C.db.transaction(C.storeName, L);
          D(null, U);
        } catch (H) {
          if (z > 0 && (!C.db || H.name === "InvalidStateError" || H.name === "NotFoundError"))
            return h.resolve().then(function() {
              if (!C.db || H.name === "NotFoundError" && !C.db.objectStoreNames.contains(C.storeName) && C.version <= C.db.version)
                return C.db && (C.version = C.db.version + 1), V(C);
            }).then(function() {
              return ce(C).then(function() {
                K(C, L, D, z - 1);
              });
            }).catch(D);
          D(H);
        }
      }
      function B() {
        return {
          // Running localForages sharing a database.
          forages: [],
          // Shared database.
          db: null,
          // Database readiness (promise).
          dbReady: null,
          // Deferred operations on the database.
          deferredOperations: []
        };
      }
      function Y(C) {
        var L = this, D = {
          db: null
        };
        if (C)
          for (var z in C)
            D[z] = C[z];
        var U = x[D.name];
        U || (U = B(), x[D.name] = U), U.forages.push(L), L._initReady || (L._initReady = L.ready, L.ready = ie);
        var H = [];
        function ee() {
          return h.resolve();
        }
        for (var ne = 0; ne < U.forages.length; ne++) {
          var se = U.forages[ne];
          se !== L && H.push(se._initReady().catch(ee));
        }
        var ae = U.forages.slice(0);
        return h.all(H).then(function() {
          return D.db = U.db, N(D);
        }).then(function(he) {
          return D.db = he, j(D, L._defaultConfig.version) ? V(D) : he;
        }).then(function(he) {
          D.db = U.db = he, L._dbInfo = D;
          for (var me = 0; me < ae.length; me++) {
            var Ne = ae[me];
            Ne !== L && (Ne._dbInfo.db = D.db, Ne._dbInfo.version = D.version);
          }
        });
      }
      function G(C, L) {
        var D = this;
        C = g(C);
        var z = new h(function(U, H) {
          D.ready().then(function() {
            K(D._dbInfo, _, function(ee, ne) {
              if (ee)
                return H(ee);
              try {
                var se = ne.objectStore(D._dbInfo.storeName), ae = se.get(C);
                ae.onsuccess = function() {
                  var he = ae.result;
                  he === void 0 && (he = null), le(he) && (he = J(he)), U(he);
                }, ae.onerror = function() {
                  H(ae.error);
                };
              } catch (he) {
                H(he);
              }
            });
          }).catch(H);
        });
        return d(z, L), z;
      }
      function ue(C, L) {
        var D = this, z = new h(function(U, H) {
          D.ready().then(function() {
            K(D._dbInfo, _, function(ee, ne) {
              if (ee)
                return H(ee);
              try {
                var se = ne.objectStore(D._dbInfo.storeName), ae = se.openCursor(), he = 1;
                ae.onsuccess = function() {
                  var me = ae.result;
                  if (me) {
                    var Ne = me.value;
                    le(Ne) && (Ne = J(Ne));
                    var Ve = C(Ne, me.key, he++);
                    Ve !== void 0 ? U(Ve) : me.continue();
                  } else
                    U();
                }, ae.onerror = function() {
                  H(ae.error);
                };
              } catch (me) {
                H(me);
              }
            });
          }).catch(H);
        });
        return d(z, L), z;
      }
      function ve(C, L, D) {
        var z = this;
        C = g(C);
        var U = new h(function(H, ee) {
          var ne;
          z.ready().then(function() {
            return ne = z._dbInfo, b.call(L) === "[object Blob]" ? E(ne.db).then(function(se) {
              return se ? L : W(L);
            }) : L;
          }).then(function(se) {
            K(z._dbInfo, w, function(ae, he) {
              if (ae)
                return ee(ae);
              try {
                var me = he.objectStore(z._dbInfo.storeName);
                se === null && (se = void 0);
                var Ne = me.put(se, C);
                he.oncomplete = function() {
                  se === void 0 && (se = null), H(se);
                }, he.onabort = he.onerror = function() {
                  var Ve = Ne.error ? Ne.error : Ne.transaction.error;
                  ee(Ve);
                };
              } catch (Ve) {
                ee(Ve);
              }
            });
          }).catch(ee);
        });
        return d(U, D), U;
      }
      function Ee(C, L) {
        var D = this;
        C = g(C);
        var z = new h(function(U, H) {
          D.ready().then(function() {
            K(D._dbInfo, w, function(ee, ne) {
              if (ee)
                return H(ee);
              try {
                var se = ne.objectStore(D._dbInfo.storeName), ae = se.delete(C);
                ne.oncomplete = function() {
                  U();
                }, ne.onerror = function() {
                  H(ae.error);
                }, ne.onabort = function() {
                  var he = ae.error ? ae.error : ae.transaction.error;
                  H(he);
                };
              } catch (he) {
                H(he);
              }
            });
          }).catch(H);
        });
        return d(z, L), z;
      }
      function ge(C) {
        var L = this, D = new h(function(z, U) {
          L.ready().then(function() {
            K(L._dbInfo, w, function(H, ee) {
              if (H)
                return U(H);
              try {
                var ne = ee.objectStore(L._dbInfo.storeName), se = ne.clear();
                ee.oncomplete = function() {
                  z();
                }, ee.onabort = ee.onerror = function() {
                  var ae = se.error ? se.error : se.transaction.error;
                  U(ae);
                };
              } catch (ae) {
                U(ae);
              }
            });
          }).catch(U);
        });
        return d(D, C), D;
      }
      function _e(C) {
        var L = this, D = new h(function(z, U) {
          L.ready().then(function() {
            K(L._dbInfo, _, function(H, ee) {
              if (H)
                return U(H);
              try {
                var ne = ee.objectStore(L._dbInfo.storeName), se = ne.count();
                se.onsuccess = function() {
                  z(se.result);
                }, se.onerror = function() {
                  U(se.error);
                };
              } catch (ae) {
                U(ae);
              }
            });
          }).catch(U);
        });
        return d(D, C), D;
      }
      function De(C, L) {
        var D = this, z = new h(function(U, H) {
          if (C < 0) {
            U(null);
            return;
          }
          D.ready().then(function() {
            K(D._dbInfo, _, function(ee, ne) {
              if (ee)
                return H(ee);
              try {
                var se = ne.objectStore(D._dbInfo.storeName), ae = !1, he = se.openKeyCursor();
                he.onsuccess = function() {
                  var me = he.result;
                  if (!me) {
                    U(null);
                    return;
                  }
                  C === 0 || ae ? U(me.key) : (ae = !0, me.advance(C));
                }, he.onerror = function() {
                  H(he.error);
                };
              } catch (me) {
                H(me);
              }
            });
          }).catch(H);
        });
        return d(z, L), z;
      }
      function vt(C) {
        var L = this, D = new h(function(z, U) {
          L.ready().then(function() {
            K(L._dbInfo, _, function(H, ee) {
              if (H)
                return U(H);
              try {
                var ne = ee.objectStore(L._dbInfo.storeName), se = ne.openKeyCursor(), ae = [];
                se.onsuccess = function() {
                  var he = se.result;
                  if (!he) {
                    z(ae);
                    return;
                  }
                  ae.push(he.key), he.continue();
                }, se.onerror = function() {
                  U(se.error);
                };
              } catch (he) {
                U(he);
              }
            });
          }).catch(U);
        });
        return d(D, C), D;
      }
      function mt(C, L) {
        L = p.apply(this, arguments);
        var D = this.config();
        C = typeof C != "function" && C || {}, C.name || (C.name = C.name || D.name, C.storeName = C.storeName || D.storeName);
        var z = this, U;
        if (!C.name)
          U = h.reject("Invalid arguments");
        else {
          var H = C.name === D.name && z._dbInfo.db, ee = H ? h.resolve(z._dbInfo.db) : N(C).then(function(ne) {
            var se = x[C.name], ae = se.forages;
            se.db = ne;
            for (var he = 0; he < ae.length; he++)
              ae[he]._dbInfo.db = ne;
            return ne;
          });
          C.storeName ? U = ee.then(function(ne) {
            if (ne.objectStoreNames.contains(C.storeName)) {
              var se = ne.version + 1;
              I(C);
              var ae = x[C.name], he = ae.forages;
              ne.close();
              for (var me = 0; me < he.length; me++) {
                var Ne = he[me];
                Ne._dbInfo.db = null, Ne._dbInfo.version = se;
              }
              var Ve = new h(function(je, lt) {
                var rt = l.open(C.name, se);
                rt.onerror = function(zt) {
                  var Nr = rt.result;
                  Nr.close(), lt(zt);
                }, rt.onupgradeneeded = function() {
                  var zt = rt.result;
                  zt.deleteObjectStore(C.storeName);
                }, rt.onsuccess = function() {
                  var zt = rt.result;
                  zt.close(), je(zt);
                };
              });
              return Ve.then(function(je) {
                ae.db = je;
                for (var lt = 0; lt < he.length; lt++) {
                  var rt = he[lt];
                  rt._dbInfo.db = je, A(rt._dbInfo);
                }
              }).catch(function(je) {
                throw (k(C, je) || h.resolve()).catch(function() {
                }), je;
              });
            }
          }) : U = ee.then(function(ne) {
            I(C);
            var se = x[C.name], ae = se.forages;
            ne.close();
            for (var he = 0; he < ae.length; he++) {
              var me = ae[he];
              me._dbInfo.db = null;
            }
            var Ne = new h(function(Ve, je) {
              var lt = l.deleteDatabase(C.name);
              lt.onerror = function() {
                var rt = lt.result;
                rt && rt.close(), je(lt.error);
              }, lt.onblocked = function() {
                console.warn('dropInstance blocked for database "' + C.name + '" until all open connections are closed');
              }, lt.onsuccess = function() {
                var rt = lt.result;
                rt && rt.close(), Ve(rt);
              };
            });
            return Ne.then(function(Ve) {
              se.db = Ve;
              for (var je = 0; je < ae.length; je++) {
                var lt = ae[je];
                A(lt._dbInfo);
              }
            }).catch(function(Ve) {
              throw (k(C, Ve) || h.resolve()).catch(function() {
              }), Ve;
            });
          });
        }
        return d(U, L), U;
      }
      var nt = {
        _driver: "asyncStorage",
        _initStorage: Y,
        _support: c(),
        iterate: ue,
        getItem: G,
        setItem: ve,
        removeItem: Ee,
        clear: ge,
        length: _e,
        key: De,
        keys: vt,
        dropInstance: mt
      };
      function We() {
        return typeof openDatabase == "function";
      }
      var Ke = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", St = "~~local_forage_type~", ot = /^~~local_forage_type~([^~]+)~/, ht = "__lfsc__:", Ut = ht.length, Mt = "arbf", pt = "blob", bt = "si08", At = "ui08", cn = "uic8", un = "si16", jt = "si32", Z = "ur16", oe = "ui32", q = "fl32", be = "fl64", Fe = Ut + Mt.length, yt = Object.prototype.toString;
      function Wt(C) {
        var L = C.length * 0.75, D = C.length, z, U = 0, H, ee, ne, se;
        C[C.length - 1] === "=" && (L--, C[C.length - 2] === "=" && L--);
        var ae = new ArrayBuffer(L), he = new Uint8Array(ae);
        for (z = 0; z < D; z += 4)
          H = Ke.indexOf(C[z]), ee = Ke.indexOf(C[z + 1]), ne = Ke.indexOf(C[z + 2]), se = Ke.indexOf(C[z + 3]), he[U++] = H << 2 | ee >> 4, he[U++] = (ee & 15) << 4 | ne >> 2, he[U++] = (ne & 3) << 6 | se & 63;
        return ae;
      }
      function Ft(C) {
        var L = new Uint8Array(C), D = "", z;
        for (z = 0; z < L.length; z += 3)
          D += Ke[L[z] >> 2], D += Ke[(L[z] & 3) << 4 | L[z + 1] >> 4], D += Ke[(L[z + 1] & 15) << 2 | L[z + 2] >> 6], D += Ke[L[z + 2] & 63];
        return L.length % 3 === 2 ? D = D.substring(0, D.length - 1) + "=" : L.length % 3 === 1 && (D = D.substring(0, D.length - 2) + "=="), D;
      }
      function Pn(C, L) {
        var D = "";
        if (C && (D = yt.call(C)), C && (D === "[object ArrayBuffer]" || C.buffer && yt.call(C.buffer) === "[object ArrayBuffer]")) {
          var z, U = ht;
          C instanceof ArrayBuffer ? (z = C, U += Mt) : (z = C.buffer, D === "[object Int8Array]" ? U += bt : D === "[object Uint8Array]" ? U += At : D === "[object Uint8ClampedArray]" ? U += cn : D === "[object Int16Array]" ? U += un : D === "[object Uint16Array]" ? U += Z : D === "[object Int32Array]" ? U += jt : D === "[object Uint32Array]" ? U += oe : D === "[object Float32Array]" ? U += q : D === "[object Float64Array]" ? U += be : L(new Error("Failed to get type for BinaryArray"))), L(U + Ft(z));
        } else if (D === "[object Blob]") {
          var H = new FileReader();
          H.onload = function() {
            var ee = St + C.type + "~" + Ft(this.result);
            L(ht + pt + ee);
          }, H.readAsArrayBuffer(C);
        } else
          try {
            L(JSON.stringify(C));
          } catch (ee) {
            console.error("Couldn't convert value into a JSON string: ", C), L(null, ee);
          }
      }
      function at(C) {
        if (C.substring(0, Ut) !== ht)
          return JSON.parse(C);
        var L = C.substring(Fe), D = C.substring(Ut, Fe), z;
        if (D === pt && ot.test(L)) {
          var U = L.match(ot);
          z = U[1], L = L.substring(U[0].length);
        }
        var H = Wt(L);
        switch (D) {
          case Mt:
            return H;
          case pt:
            return u([H], { type: z });
          case bt:
            return new Int8Array(H);
          case At:
            return new Uint8Array(H);
          case cn:
            return new Uint8ClampedArray(H);
          case un:
            return new Int16Array(H);
          case Z:
            return new Uint16Array(H);
          case jt:
            return new Int32Array(H);
          case oe:
            return new Uint32Array(H);
          case q:
            return new Float32Array(H);
          case be:
            return new Float64Array(H);
          default:
            throw new Error("Unkown type: " + D);
        }
      }
      var _t = {
        serialize: Pn,
        deserialize: at,
        stringToBuffer: Wt,
        bufferToString: Ft
      };
      function Ir(C, L, D, z) {
        C.executeSql("CREATE TABLE IF NOT EXISTS " + L.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], D, z);
      }
      function po(C) {
        var L = this, D = {
          db: null
        };
        if (C)
          for (var z in C)
            D[z] = typeof C[z] != "string" ? C[z].toString() : C[z];
        var U = new h(function(H, ee) {
          try {
            D.db = openDatabase(D.name, String(D.version), D.description, D.size);
          } catch (ne) {
            return ee(ne);
          }
          D.db.transaction(function(ne) {
            Ir(ne, D, function() {
              L._dbInfo = D, H();
            }, function(se, ae) {
              ee(ae);
            });
          }, ee);
        });
        return D.serializer = _t, U;
      }
      function qt(C, L, D, z, U, H) {
        C.executeSql(D, z, U, function(ee, ne) {
          ne.code === ne.SYNTAX_ERR ? ee.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [L.storeName], function(se, ae) {
            ae.rows.length ? H(se, ne) : Ir(se, L, function() {
              se.executeSql(D, z, U, H);
            }, H);
          }, H) : H(ee, ne);
        }, H);
      }
      function go(C, L) {
        var D = this;
        C = g(C);
        var z = new h(function(U, H) {
          D.ready().then(function() {
            var ee = D._dbInfo;
            ee.db.transaction(function(ne) {
              qt(ne, ee, "SELECT * FROM " + ee.storeName + " WHERE key = ? LIMIT 1", [C], function(se, ae) {
                var he = ae.rows.length ? ae.rows.item(0).value : null;
                he && (he = ee.serializer.deserialize(he)), U(he);
              }, function(se, ae) {
                H(ae);
              });
            });
          }).catch(H);
        });
        return d(z, L), z;
      }
      function di(C, L) {
        var D = this, z = new h(function(U, H) {
          D.ready().then(function() {
            var ee = D._dbInfo;
            ee.db.transaction(function(ne) {
              qt(ne, ee, "SELECT * FROM " + ee.storeName, [], function(se, ae) {
                for (var he = ae.rows, me = he.length, Ne = 0; Ne < me; Ne++) {
                  var Ve = he.item(Ne), je = Ve.value;
                  if (je && (je = ee.serializer.deserialize(je)), je = C(je, Ve.key, Ne + 1), je !== void 0) {
                    U(je);
                    return;
                  }
                }
                U();
              }, function(se, ae) {
                H(ae);
              });
            });
          }).catch(H);
        });
        return d(z, L), z;
      }
      function fi(C, L, D, z) {
        var U = this;
        C = g(C);
        var H = new h(function(ee, ne) {
          U.ready().then(function() {
            L === void 0 && (L = null);
            var se = L, ae = U._dbInfo;
            ae.serializer.serialize(L, function(he, me) {
              me ? ne(me) : ae.db.transaction(function(Ne) {
                qt(Ne, ae, "INSERT OR REPLACE INTO " + ae.storeName + " (key, value) VALUES (?, ?)", [C, he], function() {
                  ee(se);
                }, function(Ve, je) {
                  ne(je);
                });
              }, function(Ne) {
                if (Ne.code === Ne.QUOTA_ERR) {
                  if (z > 0) {
                    ee(fi.apply(U, [C, se, D, z - 1]));
                    return;
                  }
                  ne(Ne);
                }
              });
            });
          }).catch(ne);
        });
        return d(H, D), H;
      }
      function vo(C, L, D) {
        return fi.apply(this, [C, L, D, 1]);
      }
      function mo(C, L) {
        var D = this;
        C = g(C);
        var z = new h(function(U, H) {
          D.ready().then(function() {
            var ee = D._dbInfo;
            ee.db.transaction(function(ne) {
              qt(ne, ee, "DELETE FROM " + ee.storeName + " WHERE key = ?", [C], function() {
                U();
              }, function(se, ae) {
                H(ae);
              });
            });
          }).catch(H);
        });
        return d(z, L), z;
      }
      function hi(C) {
        var L = this, D = new h(function(z, U) {
          L.ready().then(function() {
            var H = L._dbInfo;
            H.db.transaction(function(ee) {
              qt(ee, H, "DELETE FROM " + H.storeName, [], function() {
                z();
              }, function(ne, se) {
                U(se);
              });
            });
          }).catch(U);
        });
        return d(D, C), D;
      }
      function bo(C) {
        var L = this, D = new h(function(z, U) {
          L.ready().then(function() {
            var H = L._dbInfo;
            H.db.transaction(function(ee) {
              qt(ee, H, "SELECT COUNT(key) as c FROM " + H.storeName, [], function(ne, se) {
                var ae = se.rows.item(0).c;
                z(ae);
              }, function(ne, se) {
                U(se);
              });
            });
          }).catch(U);
        });
        return d(D, C), D;
      }
      function yo(C, L) {
        var D = this, z = new h(function(U, H) {
          D.ready().then(function() {
            var ee = D._dbInfo;
            ee.db.transaction(function(ne) {
              qt(ne, ee, "SELECT key FROM " + ee.storeName + " WHERE id = ? LIMIT 1", [C + 1], function(se, ae) {
                var he = ae.rows.length ? ae.rows.item(0).key : null;
                U(he);
              }, function(se, ae) {
                H(ae);
              });
            });
          }).catch(H);
        });
        return d(z, L), z;
      }
      function pi(C) {
        var L = this, D = new h(function(z, U) {
          L.ready().then(function() {
            var H = L._dbInfo;
            H.db.transaction(function(ee) {
              qt(ee, H, "SELECT key FROM " + H.storeName, [], function(ne, se) {
                for (var ae = [], he = 0; he < se.rows.length; he++)
                  ae.push(se.rows.item(he).key);
                z(ae);
              }, function(ne, se) {
                U(se);
              });
            });
          }).catch(U);
        });
        return d(D, C), D;
      }
      function xo(C) {
        return new h(function(L, D) {
          C.transaction(function(z) {
            z.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(U, H) {
              for (var ee = [], ne = 0; ne < H.rows.length; ne++)
                ee.push(H.rows.item(ne).name);
              L({
                db: C,
                storeNames: ee
              });
            }, function(U, H) {
              D(H);
            });
          }, function(z) {
            D(z);
          });
        });
      }
      function gi(C, L) {
        L = p.apply(this, arguments);
        var D = this.config();
        C = typeof C != "function" && C || {}, C.name || (C.name = C.name || D.name, C.storeName = C.storeName || D.storeName);
        var z = this, U;
        return C.name ? U = new h(function(H) {
          var ee;
          C.name === D.name ? ee = z._dbInfo.db : ee = openDatabase(C.name, "", "", 0), C.storeName ? H({
            db: ee,
            storeNames: [C.storeName]
          }) : H(xo(ee));
        }).then(function(H) {
          return new h(function(ee, ne) {
            H.db.transaction(function(se) {
              function ae(Ve) {
                return new h(function(je, lt) {
                  se.executeSql("DROP TABLE IF EXISTS " + Ve, [], function() {
                    je();
                  }, function(rt, zt) {
                    lt(zt);
                  });
                });
              }
              for (var he = [], me = 0, Ne = H.storeNames.length; me < Ne; me++)
                he.push(ae(H.storeNames[me]));
              h.all(he).then(function() {
                ee();
              }).catch(function(Ve) {
                ne(Ve);
              });
            }, function(se) {
              ne(se);
            });
          });
        }) : U = h.reject("Invalid arguments"), d(U, L), U;
      }
      var Dt = {
        _driver: "webSQLStorage",
        _initStorage: po,
        _support: We(),
        iterate: di,
        getItem: go,
        setItem: vo,
        removeItem: mo,
        clear: hi,
        length: bo,
        key: yo,
        keys: pi,
        dropInstance: gi
      };
      function Xt() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function Mr(C, L) {
        var D = C.name + "/";
        return C.storeName !== L.storeName && (D += C.storeName + "/"), D;
      }
      function _o() {
        var C = "_localforage_support_test";
        try {
          return localStorage.setItem(C, !0), localStorage.removeItem(C), !1;
        } catch {
          return !0;
        }
      }
      function zh() {
        return !_o() || localStorage.length > 0;
      }
      function Vh(C) {
        var L = this, D = {};
        if (C)
          for (var z in C)
            D[z] = C[z];
        return D.keyPrefix = Mr(C, L._defaultConfig), zh() ? (L._dbInfo = D, D.serializer = _t, h.resolve()) : h.reject();
      }
      function Uh(C) {
        var L = this, D = L.ready().then(function() {
          for (var z = L._dbInfo.keyPrefix, U = localStorage.length - 1; U >= 0; U--) {
            var H = localStorage.key(U);
            H.indexOf(z) === 0 && localStorage.removeItem(H);
          }
        });
        return d(D, C), D;
      }
      function jh(C, L) {
        var D = this;
        C = g(C);
        var z = D.ready().then(function() {
          var U = D._dbInfo, H = localStorage.getItem(U.keyPrefix + C);
          return H && (H = U.serializer.deserialize(H)), H;
        });
        return d(z, L), z;
      }
      function Wh(C, L) {
        var D = this, z = D.ready().then(function() {
          for (var U = D._dbInfo, H = U.keyPrefix, ee = H.length, ne = localStorage.length, se = 1, ae = 0; ae < ne; ae++) {
            var he = localStorage.key(ae);
            if (he.indexOf(H) === 0) {
              var me = localStorage.getItem(he);
              if (me && (me = U.serializer.deserialize(me)), me = C(me, he.substring(ee), se++), me !== void 0)
                return me;
            }
          }
        });
        return d(z, L), z;
      }
      function qh(C, L) {
        var D = this, z = D.ready().then(function() {
          var U = D._dbInfo, H;
          try {
            H = localStorage.key(C);
          } catch {
            H = null;
          }
          return H && (H = H.substring(U.keyPrefix.length)), H;
        });
        return d(z, L), z;
      }
      function Yh(C) {
        var L = this, D = L.ready().then(function() {
          for (var z = L._dbInfo, U = localStorage.length, H = [], ee = 0; ee < U; ee++) {
            var ne = localStorage.key(ee);
            ne.indexOf(z.keyPrefix) === 0 && H.push(ne.substring(z.keyPrefix.length));
          }
          return H;
        });
        return d(D, C), D;
      }
      function Gh(C) {
        var L = this, D = L.keys().then(function(z) {
          return z.length;
        });
        return d(D, C), D;
      }
      function Qh(C, L) {
        var D = this;
        C = g(C);
        var z = D.ready().then(function() {
          var U = D._dbInfo;
          localStorage.removeItem(U.keyPrefix + C);
        });
        return d(z, L), z;
      }
      function Zh(C, L, D) {
        var z = this;
        C = g(C);
        var U = z.ready().then(function() {
          L === void 0 && (L = null);
          var H = L;
          return new h(function(ee, ne) {
            var se = z._dbInfo;
            se.serializer.serialize(L, function(ae, he) {
              if (he)
                ne(he);
              else
                try {
                  localStorage.setItem(se.keyPrefix + C, ae), ee(H);
                } catch (me) {
                  (me.name === "QuotaExceededError" || me.name === "NS_ERROR_DOM_QUOTA_REACHED") && ne(me), ne(me);
                }
            });
          });
        });
        return d(U, D), U;
      }
      function Kh(C, L) {
        if (L = p.apply(this, arguments), C = typeof C != "function" && C || {}, !C.name) {
          var D = this.config();
          C.name = C.name || D.name, C.storeName = C.storeName || D.storeName;
        }
        var z = this, U;
        return C.name ? U = new h(function(H) {
          C.storeName ? H(Mr(C, z._defaultConfig)) : H(C.name + "/");
        }).then(function(H) {
          for (var ee = localStorage.length - 1; ee >= 0; ee--) {
            var ne = localStorage.key(ee);
            ne.indexOf(H) === 0 && localStorage.removeItem(ne);
          }
        }) : U = h.reject("Invalid arguments"), d(U, L), U;
      }
      var Xh = {
        _driver: "localStorageWrapper",
        _initStorage: Vh,
        _support: Xt(),
        iterate: Wh,
        getItem: jh,
        setItem: Zh,
        removeItem: Qh,
        clear: Uh,
        length: Gh,
        key: qh,
        keys: Yh,
        dropInstance: Kh
      }, Jh = function(L, D) {
        return L === D || typeof L == "number" && typeof D == "number" && isNaN(L) && isNaN(D);
      }, ep = function(L, D) {
        for (var z = L.length, U = 0; U < z; ) {
          if (Jh(L[U], D))
            return !0;
          U++;
        }
        return !1;
      }, Ll = Array.isArray || function(C) {
        return Object.prototype.toString.call(C) === "[object Array]";
      }, Or = {}, Pl = {}, ar = {
        INDEXEDDB: nt,
        WEBSQL: Dt,
        LOCALSTORAGE: Xh
      }, tp = [ar.INDEXEDDB._driver, ar.WEBSQL._driver, ar.LOCALSTORAGE._driver], vi = ["dropInstance"], wo = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(vi), np = {
        description: "",
        driver: tp.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function rp(C, L) {
        C[L] = function() {
          var D = arguments;
          return C.ready().then(function() {
            return C[L].apply(C, D);
          });
        };
      }
      function So() {
        for (var C = 1; C < arguments.length; C++) {
          var L = arguments[C];
          if (L)
            for (var D in L)
              L.hasOwnProperty(D) && (Ll(L[D]) ? arguments[0][D] = L[D].slice() : arguments[0][D] = L[D]);
        }
        return arguments[0];
      }
      var ip = function() {
        function C(L) {
          o(this, C);
          for (var D in ar)
            if (ar.hasOwnProperty(D)) {
              var z = ar[D], U = z._driver;
              this[D] = U, Or[U] || this.defineDriver(z);
            }
          this._defaultConfig = So({}, np), this._config = So({}, this._defaultConfig, L), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return C.prototype.config = function(D) {
          if ((typeof D > "u" ? "undefined" : s(D)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var z in D) {
              if (z === "storeName" && (D[z] = D[z].replace(/\W/g, "_")), z === "version" && typeof D[z] != "number")
                return new Error("Database version must be a number.");
              this._config[z] = D[z];
            }
            return "driver" in D && D.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof D == "string" ? this._config[D] : this._config;
        }, C.prototype.defineDriver = function(D, z, U) {
          var H = new h(function(ee, ne) {
            try {
              var se = D._driver, ae = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!D._driver) {
                ne(ae);
                return;
              }
              for (var he = wo.concat("_initStorage"), me = 0, Ne = he.length; me < Ne; me++) {
                var Ve = he[me], je = !ep(vi, Ve);
                if ((je || D[Ve]) && typeof D[Ve] != "function") {
                  ne(ae);
                  return;
                }
              }
              var lt = function() {
                for (var Nr = function(ap) {
                  return function() {
                    var lp = new Error("Method " + ap + " is not implemented by the current driver"), $l = h.reject(lp);
                    return d($l, arguments[arguments.length - 1]), $l;
                  };
                }, Eo = 0, op = vi.length; Eo < op; Eo++) {
                  var Co = vi[Eo];
                  D[Co] || (D[Co] = Nr(Co));
                }
              };
              lt();
              var rt = function(Nr) {
                Or[se] && console.info("Redefining LocalForage driver: " + se), Or[se] = D, Pl[se] = Nr, ee();
              };
              "_support" in D ? D._support && typeof D._support == "function" ? D._support().then(rt, ne) : rt(!!D._support) : rt(!0);
            } catch (zt) {
              ne(zt);
            }
          });
          return f(H, z, U), H;
        }, C.prototype.driver = function() {
          return this._driver || null;
        }, C.prototype.getDriver = function(D, z, U) {
          var H = Or[D] ? h.resolve(Or[D]) : h.reject(new Error("Driver not found."));
          return f(H, z, U), H;
        }, C.prototype.getSerializer = function(D) {
          var z = h.resolve(_t);
          return f(z, D), z;
        }, C.prototype.ready = function(D) {
          var z = this, U = z._driverSet.then(function() {
            return z._ready === null && (z._ready = z._initDriver()), z._ready;
          });
          return f(U, D, D), U;
        }, C.prototype.setDriver = function(D, z, U) {
          var H = this;
          Ll(D) || (D = [D]);
          var ee = this._getSupportedDrivers(D);
          function ne() {
            H._config.driver = H.driver();
          }
          function se(me) {
            return H._extend(me), ne(), H._ready = H._initStorage(H._config), H._ready;
          }
          function ae(me) {
            return function() {
              var Ne = 0;
              function Ve() {
                for (; Ne < me.length; ) {
                  var je = me[Ne];
                  return Ne++, H._dbInfo = null, H._ready = null, H.getDriver(je).then(se).catch(Ve);
                }
                ne();
                var lt = new Error("No available storage method found.");
                return H._driverSet = h.reject(lt), H._driverSet;
              }
              return Ve();
            };
          }
          var he = this._driverSet !== null ? this._driverSet.catch(function() {
            return h.resolve();
          }) : h.resolve();
          return this._driverSet = he.then(function() {
            var me = ee[0];
            return H._dbInfo = null, H._ready = null, H.getDriver(me).then(function(Ne) {
              H._driver = Ne._driver, ne(), H._wrapLibraryMethodsWithReady(), H._initDriver = ae(ee);
            });
          }).catch(function() {
            ne();
            var me = new Error("No available storage method found.");
            return H._driverSet = h.reject(me), H._driverSet;
          }), f(this._driverSet, z, U), this._driverSet;
        }, C.prototype.supports = function(D) {
          return !!Pl[D];
        }, C.prototype._extend = function(D) {
          So(this, D);
        }, C.prototype._getSupportedDrivers = function(D) {
          for (var z = [], U = 0, H = D.length; U < H; U++) {
            var ee = D[U];
            this.supports(ee) && z.push(ee);
          }
          return z;
        }, C.prototype._wrapLibraryMethodsWithReady = function() {
          for (var D = 0, z = wo.length; D < z; D++)
            rp(this, wo[D]);
        }, C.prototype.createInstance = function(D) {
          return new C(D);
        }, C;
      }(), sp = new ip();
      r.exports = sp;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(L1);
const P1 = na, sn = /* @__PURE__ */ Object.create(null);
sn.open = "0";
sn.close = "1";
sn.ping = "2";
sn.pong = "3";
sn.message = "4";
sn.upgrade = "5";
sn.noop = "6";
const Mi = /* @__PURE__ */ Object.create(null);
Object.keys(sn).forEach((t) => {
  Mi[sn[t]] = t;
});
const $1 = { type: "error", data: "parser error" }, H1 = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", F1 = typeof ArrayBuffer == "function", z1 = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, Wd = ({ type: t, data: e }, n, r) => H1 && e instanceof Blob ? n ? r(e) : Cc(e, r) : F1 && (e instanceof ArrayBuffer || z1(e)) ? n ? r(e) : Cc(new Blob([e]), r) : r(sn[t] + (e || "")), Cc = (t, e) => {
  const n = new FileReader();
  return n.onload = function() {
    const r = n.result.split(",")[1];
    e("b" + (r || ""));
  }, n.readAsDataURL(t);
}, kc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", zr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < kc.length; t++)
  zr[kc.charCodeAt(t)] = t;
const V1 = (t) => {
  let e = t.length * 0.75, n = t.length, r, i = 0, s, o, a, l;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const c = new ArrayBuffer(e), u = new Uint8Array(c);
  for (r = 0; r < n; r += 4)
    s = zr[t.charCodeAt(r)], o = zr[t.charCodeAt(r + 1)], a = zr[t.charCodeAt(r + 2)], l = zr[t.charCodeAt(r + 3)], u[i++] = s << 2 | o >> 4, u[i++] = (o & 15) << 4 | a >> 2, u[i++] = (a & 3) << 6 | l & 63;
  return c;
}, U1 = typeof ArrayBuffer == "function", qd = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: Yd(t, e)
    };
  const n = t.charAt(0);
  return n === "b" ? {
    type: "message",
    data: j1(t.substring(1), e)
  } : Mi[n] ? t.length > 1 ? {
    type: Mi[n],
    data: t.substring(1)
  } : {
    type: Mi[n]
  } : $1;
}, j1 = (t, e) => {
  if (U1) {
    const n = V1(t);
    return Yd(n, e);
  } else
    return { base64: !0, data: t };
}, Yd = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof ArrayBuffer ? new Blob([t]) : t;
    case "arraybuffer":
    default:
      return t;
  }
}, Gd = String.fromCharCode(30), W1 = (t, e) => {
  const n = t.length, r = new Array(n);
  let i = 0;
  t.forEach((s, o) => {
    Wd(s, !1, (a) => {
      r[o] = a, ++i === n && e(r.join(Gd));
    });
  });
}, q1 = (t, e) => {
  const n = t.split(Gd), r = [];
  for (let i = 0; i < n.length; i++) {
    const s = qd(n[i], e);
    if (r.push(s), s.type === "error")
      break;
  }
  return r;
}, Qd = 4;
function ft(t) {
  if (t)
    return Y1(t);
}
function Y1(t) {
  for (var e in ft.prototype)
    t[e] = ft.prototype[e];
  return t;
}
ft.prototype.on = ft.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
ft.prototype.once = function(t, e) {
  function n() {
    this.off(t, n), e.apply(this, arguments);
  }
  return n.fn = e, this.on(t, n), this;
};
ft.prototype.off = ft.prototype.removeListener = ft.prototype.removeAllListeners = ft.prototype.removeEventListener = function(t, e) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var n = this._callbacks["$" + t];
  if (!n)
    return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + t], this;
  for (var r, i = 0; i < n.length; i++)
    if (r = n[i], r === e || r.fn === e) {
      n.splice(i, 1);
      break;
    }
  return n.length === 0 && delete this._callbacks["$" + t], this;
};
ft.prototype.emit = function(t) {
  this._callbacks = this._callbacks || {};
  for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, i = n.length; r < i; ++r)
      n[r].apply(this, e);
  }
  return this;
};
ft.prototype.emitReserved = ft.prototype.emit;
ft.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
ft.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const Vt = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();
function Zd(t, ...e) {
  return e.reduce((n, r) => (t.hasOwnProperty(r) && (n[r] = t[r]), n), {});
}
const G1 = Vt.setTimeout, Q1 = Vt.clearTimeout;
function Ks(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = G1.bind(Vt), t.clearTimeoutFn = Q1.bind(Vt)) : (t.setTimeoutFn = Vt.setTimeout.bind(Vt), t.clearTimeoutFn = Vt.clearTimeout.bind(Vt));
}
const Z1 = 1.33;
function K1(t) {
  return typeof t == "string" ? X1(t) : Math.ceil((t.byteLength || t.size) * Z1);
}
function X1(t) {
  let e = 0, n = 0;
  for (let r = 0, i = t.length; r < i; r++)
    e = t.charCodeAt(r), e < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (r++, n += 4);
  return n;
}
class J1 extends Error {
  constructor(e, n, r) {
    super(e), this.description = n, this.context = r, this.type = "TransportError";
  }
}
class Kd extends ft {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, Ks(this, e), this.opts = e, this.query = e.query, this.socket = e.socket;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(e, n, r) {
    return super.emitReserved("error", new J1(e, n, r)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(e) {
    this.readyState === "open" && this.write(e);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(e) {
    const n = qd(e, this.socket.binaryType);
    this.onPacket(n);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(e) {
    super.emitReserved("packet", e);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(e) {
    this.readyState = "closed", super.emitReserved("close", e);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(e) {
  }
}
const Xd = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), ra = 64, em = {};
let Ac = 0, bi = 0, Dc;
function Tc(t) {
  let e = "";
  do
    e = Xd[t % ra] + e, t = Math.floor(t / ra);
  while (t > 0);
  return e;
}
function Jd() {
  const t = Tc(+/* @__PURE__ */ new Date());
  return t !== Dc ? (Ac = 0, Dc = t) : t + "." + Tc(Ac++);
}
for (; bi < ra; bi++)
  em[Xd[bi]] = bi;
function ef(t) {
  let e = "";
  for (let n in t)
    t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
  return e;
}
function tm(t) {
  let e = {}, n = t.split("&");
  for (let r = 0, i = n.length; r < i; r++) {
    let s = n[r].split("=");
    e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return e;
}
let tf = !1;
try {
  tf = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const nm = tf;
function nf(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || nm))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new Vt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function rm() {
}
const im = function() {
  return new nf({
    xdomain: !1
  }).responseType != null;
}();
class sm extends Kd {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(e) {
    if (super(e), this.polling = !1, typeof location < "u") {
      const r = location.protocol === "https:";
      let i = location.port;
      i || (i = r ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || i !== e.port, this.xs = e.secure !== r;
    }
    const n = e && e.forceBase64;
    this.supportsBinary = im && !n;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this.poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(e) {
    this.readyState = "pausing";
    const n = () => {
      this.readyState = "paused", e();
    };
    if (this.polling || !this.writable) {
      let r = 0;
      this.polling && (r++, this.once("pollComplete", function() {
        --r || n();
      })), this.writable || (r++, this.once("drain", function() {
        --r || n();
      }));
    } else
      n();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  poll() {
    this.polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(e) {
    const n = (r) => {
      if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(r);
    };
    q1(e, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const e = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? e() : this.once("open", e);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(e) {
    this.writable = !1, W1(e, (n) => {
      this.doWrite(n, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    let e = this.query || {};
    const n = this.opts.secure ? "https" : "http";
    let r = "";
    this.opts.timestampRequests !== !1 && (e[this.opts.timestampParam] = Jd()), !this.supportsBinary && !e.sid && (e.b64 = 1), this.opts.port && (n === "https" && Number(this.opts.port) !== 443 || n === "http" && Number(this.opts.port) !== 80) && (r = ":" + this.opts.port);
    const i = ef(e), s = this.opts.hostname.indexOf(":") !== -1;
    return n + "://" + (s ? "[" + this.opts.hostname + "]" : this.opts.hostname) + r + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(e = {}) {
    return Object.assign(e, { xd: this.xd, xs: this.xs }, this.opts), new nn(this.uri(), e);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(e, n) {
    const r = this.request({
      method: "POST",
      data: e
    });
    r.on("success", n), r.on("error", (i, s) => {
      this.onError("xhr post error", i, s);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const e = this.request();
    e.on("data", this.onData.bind(this)), e.on("error", (n, r) => {
      this.onError("xhr poll error", n, r);
    }), this.pollXhr = e;
  }
}
class nn extends ft {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, n) {
    super(), Ks(this, n), this.opts = n, this.method = n.method || "GET", this.uri = e, this.async = n.async !== !1, this.data = n.data !== void 0 ? n.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    const e = Zd(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    e.xdomain = !!this.opts.xd, e.xscheme = !!this.opts.xs;
    const n = this.xhr = new nf(e);
    try {
      n.open(this.method, this.uri, this.async);
      try {
        if (this.opts.extraHeaders) {
          n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
          for (let r in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(r) && n.setRequestHeader(r, this.opts.extraHeaders[r]);
        }
      } catch {
      }
      if (this.method === "POST")
        try {
          n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        n.setRequestHeader("Accept", "*/*");
      } catch {
      }
      "withCredentials" in n && (n.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (n.timeout = this.opts.requestTimeout), n.onreadystatechange = () => {
        n.readyState === 4 && (n.status === 200 || n.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
          this.onError(typeof n.status == "number" ? n.status : 0);
        }, 0));
      }, n.send(this.data);
    } catch (r) {
      this.setTimeoutFn(() => {
        this.onError(r);
      }, 0);
      return;
    }
    typeof document < "u" && (this.index = nn.requestsCount++, nn.requests[this.index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  onError(e) {
    this.emitReserved("error", e, this.xhr), this.cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  cleanup(e) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (this.xhr.onreadystatechange = rm, e)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete nn.requests[this.index], this.xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  onLoad() {
    const e = this.xhr.responseText;
    e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this.cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this.cleanup();
  }
}
nn.requestsCount = 0;
nn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Rc);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in Vt ? "pagehide" : "unload";
    addEventListener(t, Rc, !1);
  }
}
function Rc() {
  for (let t in nn.requests)
    nn.requests.hasOwnProperty(t) && nn.requests[t].abort();
}
const rf = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, n) => n(e, 0))(), yi = Vt.WebSocket || Vt.MozWebSocket, Ic = !0, om = "arraybuffer", Mc = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class am extends Kd {
  /**
   * WebSocket transport constructor.
   *
   * @param {Object} opts - connection options
   * @protected
   */
  constructor(e) {
    super(e), this.supportsBinary = !e.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check())
      return;
    const e = this.uri(), n = this.opts.protocols, r = Mc ? {} : Zd(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = Ic && !Mc ? n ? new yi(e, n) : new yi(e) : new yi(e, n, r);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this.ws.binaryType = this.socket.binaryType || om, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (e) => this.onClose({
      description: "websocket connection closed",
      context: e
    }), this.ws.onmessage = (e) => this.onData(e.data), this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(e) {
    this.writable = !1;
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = n === e.length - 1;
      Wd(r, this.supportsBinary, (s) => {
        const o = {};
        try {
          Ic && this.ws.send(s);
        } catch {
        }
        i && rf(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    let e = this.query || {};
    const n = this.opts.secure ? "wss" : "ws";
    let r = "";
    this.opts.port && (n === "wss" && Number(this.opts.port) !== 443 || n === "ws" && Number(this.opts.port) !== 80) && (r = ":" + this.opts.port), this.opts.timestampRequests && (e[this.opts.timestampParam] = Jd()), this.supportsBinary || (e.b64 = 1);
    const i = ef(e), s = this.opts.hostname.indexOf(":") !== -1;
    return n + "://" + (s ? "[" + this.opts.hostname + "]" : this.opts.hostname) + r + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!yi;
  }
}
const lm = {
  websocket: am,
  polling: sm
}, cm = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, um = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function ia(t) {
  const e = t, n = t.indexOf("["), r = t.indexOf("]");
  n != -1 && r != -1 && (t = t.substring(0, n) + t.substring(n, r).replace(/:/g, ";") + t.substring(r, t.length));
  let i = cm.exec(t || ""), s = {}, o = 14;
  for (; o--; )
    s[um[o]] = i[o] || "";
  return n != -1 && r != -1 && (s.source = e, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = dm(s, s.path), s.queryKey = fm(s, s.query), s;
}
function dm(t, e) {
  const n = /\/{2,9}/g, r = e.replace(n, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && r.splice(0, 1), e.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function fm(t, e) {
  const n = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, i, s) {
    i && (n[i] = s);
  }), n;
}
let sf = class lr extends ft {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, n = {}) {
    super(), this.writeBuffer = [], e && typeof e == "object" && (n = e, e = null), e ? (e = ia(e), n.hostname = e.host, n.secure = e.protocol === "https" || e.protocol === "wss", n.port = e.port, e.query && (n.query = e.query)) : n.host && (n.hostname = ia(n.host).host), Ks(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = n.transports || ["polling", "websocket"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !0
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = tm(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this.beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
      this.onClose("transport close", {
        description: "network connection lost"
      });
    }, addEventListener("offline", this.offlineEventListener, !1))), this.open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(e) {
    const n = Object.assign({}, this.opts.query);
    n.EIO = Qd, n.transport = e, this.id && (n.sid = this.id);
    const r = Object.assign({}, this.opts.transportOptions[e], this.opts, {
      query: n,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new lm[e](r);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let e;
    if (this.opts.rememberUpgrade && lr.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
      e = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else
      e = this.transports[0];
    this.readyState = "opening";
    try {
      e = this.createTransport(e);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    e.open(), this.setTransport(e);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(e) {
    this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (n) => this.onClose("transport close", n));
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  probe(e) {
    let n = this.createTransport(e), r = !1;
    lr.priorWebsocketSuccess = !1;
    const i = () => {
      r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (h) => {
        if (!r)
          if (h.type === "pong" && h.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            lr.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (u(), this.setTransport(n), n.send([{ type: "upgrade" }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush());
            });
          } else {
            const d = new Error("probe error");
            d.transport = n.name, this.emitReserved("upgradeError", d);
          }
      }));
    };
    function s() {
      r || (r = !0, u(), n.close(), n = null);
    }
    const o = (h) => {
      const d = new Error("probe error: " + h);
      d.transport = n.name, s(), this.emitReserved("upgradeError", d);
    };
    function a() {
      o("transport closed");
    }
    function l() {
      o("socket closed");
    }
    function c(h) {
      n && h.name !== n.name && s();
    }
    const u = () => {
      n.removeListener("open", i), n.removeListener("error", o), n.removeListener("close", a), this.off("close", l), this.off("upgrading", c);
    };
    n.once("open", i), n.once("error", o), n.once("close", a), this.once("close", l), this.once("upgrading", c), n.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", lr.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
      let e = 0;
      const n = this.upgrades.length;
      for (; e < n; e++)
        this.probe(this.upgrades[e]);
    }
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  onPacket(e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type) {
        case "open":
          this.onHandshake(JSON.parse(e.data));
          break;
        case "ping":
          this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
          break;
        case "error":
          const n = new Error("server error");
          n.code = e.data, this.onError(n);
          break;
        case "message":
          this.emitReserved("data", e.data), this.emitReserved("message", e.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(e) {
    this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const e = this.getWritablePackets();
      this.transport.send(e), this.prevBufferLen = e.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  getWritablePackets() {
    if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const i = this.writeBuffer[r].data;
      if (i && (n += K1(i)), r > 0 && n > this.maxPayload)
        return this.writeBuffer.slice(0, r);
      n += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} callback function.
   * @return {Socket} for chaining.
   */
  write(e, n, r) {
    return this.sendPacket("message", e, n, r), this;
  }
  send(e, n, r) {
    return this.sendPacket("message", e, n, r), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  sendPacket(e, n, r, i) {
    if (typeof n == "function" && (i = n, n = void 0), typeof r == "function" && (i = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    r = r || {}, r.compress = r.compress !== !1;
    const s = {
      type: e,
      data: n,
      options: r
    };
    this.emitReserved("packetCreate", s), this.writeBuffer.push(s), i && this.once("flush", i), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const e = () => {
      this.onClose("forced close"), this.transport.close();
    }, n = () => {
      this.off("upgrade", n), this.off("upgradeError", n), e();
    }, r = () => {
      this.once("upgrade", n), this.once("upgradeError", n);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? r() : e();
    }) : this.upgrading ? r() : e()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  onError(e) {
    lr.priorWebsocketSuccess = !1, this.emitReserved("error", e), this.onClose("transport error", e);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  onClose(e, n) {
    (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", e, n), this.writeBuffer = [], this.prevBufferLen = 0);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  filterUpgrades(e) {
    const n = [];
    let r = 0;
    const i = e.length;
    for (; r < i; r++)
      ~this.transports.indexOf(e[r]) && n.push(e[r]);
    return n;
  }
};
sf.protocol = Qd;
function hm(t, e = "", n) {
  let r = t;
  n = n || typeof location < "u" && location, t == null && (t = n.protocol + "//" + n.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = n.protocol + t : t = n.host + t), /^(https?|wss?):\/\//.test(t) || (typeof n < "u" ? t = n.protocol + "//" + t : t = "https://" + t), r = ia(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const s = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + s + ":" + r.port + e, r.href = r.protocol + "://" + s + (n && n.port === r.port ? "" : ":" + r.port), r;
}
const pm = typeof ArrayBuffer == "function", gm = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, of = Object.prototype.toString, vm = typeof Blob == "function" || typeof Blob < "u" && of.call(Blob) === "[object BlobConstructor]", mm = typeof File == "function" || typeof File < "u" && of.call(File) === "[object FileConstructor]";
function Wa(t) {
  return pm && (t instanceof ArrayBuffer || gm(t)) || vm && t instanceof Blob || mm && t instanceof File;
}
function Oi(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let n = 0, r = t.length; n < r; n++)
      if (Oi(t[n]))
        return !0;
    return !1;
  }
  if (Wa(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return Oi(t.toJSON(), !0);
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && Oi(t[n]))
      return !0;
  return !1;
}
function bm(t) {
  const e = [], n = t.data, r = t;
  return r.data = sa(n, e), r.attachments = e.length, { packet: r, buffers: e };
}
function sa(t, e) {
  if (!t)
    return t;
  if (Wa(t)) {
    const n = { _placeholder: !0, num: e.length };
    return e.push(t), n;
  } else if (Array.isArray(t)) {
    const n = new Array(t.length);
    for (let r = 0; r < t.length; r++)
      n[r] = sa(t[r], e);
    return n;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const n = {};
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (n[r] = sa(t[r], e));
    return n;
  }
  return t;
}
function ym(t, e) {
  return t.data = oa(t.data, e), delete t.attachments, t;
}
function oa(t, e) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
      return e[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let n = 0; n < t.length; n++)
      t[n] = oa(t[n], e);
  else if (typeof t == "object")
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (t[n] = oa(t[n], e));
  return t;
}
const xm = 5;
var Le;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(Le || (Le = {}));
class _m {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(e) {
    this.replacer = e;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(e) {
    return (e.type === Le.EVENT || e.type === Le.ACK) && Oi(e) ? this.encodeAsBinary({
      type: e.type === Le.EVENT ? Le.BINARY_EVENT : Le.BINARY_ACK,
      nsp: e.nsp,
      data: e.data,
      id: e.id
    }) : [this.encodeAsString(e)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(e) {
    let n = "" + e.type;
    return (e.type === Le.BINARY_EVENT || e.type === Le.BINARY_ACK) && (n += e.attachments + "-"), e.nsp && e.nsp !== "/" && (n += e.nsp + ","), e.id != null && (n += e.id), e.data != null && (n += JSON.stringify(e.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const n = bm(e), r = this.encodeAsString(n.packet), i = n.buffers;
    return i.unshift(r), i;
  }
}
class qa extends ft {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(e) {
    super(), this.reviver = e;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(e) {
    let n;
    if (typeof e == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(e);
      const r = n.type === Le.BINARY_EVENT;
      r || n.type === Le.BINARY_ACK ? (n.type = r ? Le.EVENT : Le.ACK, this.reconstructor = new wm(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (Wa(e) || e.base64)
      if (this.reconstructor)
        n = this.reconstructor.takeBinaryData(e), n && (this.reconstructor = null, super.emitReserved("decoded", n));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + e);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(e) {
    let n = 0;
    const r = {
      type: Number(e.charAt(0))
    };
    if (Le[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === Le.BINARY_EVENT || r.type === Le.BINARY_ACK) {
      const s = n + 1;
      for (; e.charAt(++n) !== "-" && n != e.length; )
        ;
      const o = e.substring(s, n);
      if (o != Number(o) || e.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(o);
    }
    if (e.charAt(n + 1) === "/") {
      const s = n + 1;
      for (; ++n && !(e.charAt(n) === "," || n === e.length); )
        ;
      r.nsp = e.substring(s, n);
    } else
      r.nsp = "/";
    const i = e.charAt(n + 1);
    if (i !== "" && Number(i) == i) {
      const s = n + 1;
      for (; ++n; ) {
        const o = e.charAt(n);
        if (o == null || Number(o) != o) {
          --n;
          break;
        }
        if (n === e.length)
          break;
      }
      r.id = Number(e.substring(s, n + 1));
    }
    if (e.charAt(++n)) {
      const s = this.tryParse(e.substr(n));
      if (qa.isPayloadValid(r.type, s))
        r.data = s;
      else
        throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(e) {
    try {
      return JSON.parse(e, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(e, n) {
    switch (e) {
      case Le.CONNECT:
        return typeof n == "object";
      case Le.DISCONNECT:
        return n === void 0;
      case Le.CONNECT_ERROR:
        return typeof n == "string" || typeof n == "object";
      case Le.EVENT:
      case Le.BINARY_EVENT:
        return Array.isArray(n) && n.length > 0;
      case Le.ACK:
      case Le.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class wm {
  constructor(e) {
    this.packet = e, this.buffers = [], this.reconPack = e;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(e) {
    if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
      const n = ym(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const Sm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: qa,
  Encoder: _m,
  get PacketType() {
    return Le;
  },
  protocol: xm
}, Symbol.toStringTag, { value: "Module" }));
function Yt(t, e, n) {
  return t.on(e, n), function() {
    t.off(e, n);
  };
}
const Em = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class af extends ft {
  /**
   * `Socket` constructor.
   */
  constructor(e, n, r) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = n, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const e = this.io;
    this.subs = [
      Yt(e, "open", this.onopen.bind(this)),
      Yt(e, "packet", this.onpacket.bind(this)),
      Yt(e, "error", this.onerror.bind(this)),
      Yt(e, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...e) {
    return e.unshift("message"), this.emit.apply(this, e), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(e, ...n) {
    if (Em.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (n.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const r = {
      type: Le.EVENT,
      data: n
    };
    if (r.options = {}, r.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
      const o = this.ids++, a = n.pop();
      this._registerAckCallback(o, a), r.id = o;
    }
    const i = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    return this.flags.volatile && (!i || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(r), this.packet(r)) : this.sendBuffer.push(r)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(e, n) {
    var r;
    const i = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (i === void 0) {
      this.acks[e] = n;
      return;
    }
    const s = this.io.setTimeoutFn(() => {
      delete this.acks[e];
      for (let o = 0; o < this.sendBuffer.length; o++)
        this.sendBuffer[o].id === e && this.sendBuffer.splice(o, 1);
      n.call(this, new Error("operation has timed out"));
    }, i);
    this.acks[e] = (...o) => {
      this.io.clearTimeoutFn(s), n.apply(this, [null, ...o]);
    };
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(e, ...n) {
    const r = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
    return new Promise((i, s) => {
      n.push((o, a) => r ? o ? s(o) : i(a) : i(o)), this.emit(e, ...n);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(e) {
    let n;
    typeof e[e.length - 1] == "function" && (n = e.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    e.push((i, ...s) => r !== this._queue[0] ? void 0 : (i !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), n && n(i)) : (this._queue.shift(), n && n(null, ...s)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(e = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const n = this._queue[0];
    n.pending && !e || (n.pending = !0, n.tryCount++, this.flags = n.flags, this.emit.apply(this, n.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(e) {
    e.nsp = this.nsp, this.io._packet(e);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((e) => {
      this._sendConnectPacket(e);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(e) {
    this.packet({
      type: Le.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e) : e
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(e) {
    this.connected || this.emitReserved("connect_error", e);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(e, n) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", e, n);
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(e) {
    if (e.nsp === this.nsp)
      switch (e.type) {
        case Le.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case Le.EVENT:
        case Le.BINARY_EVENT:
          this.onevent(e);
          break;
        case Le.ACK:
        case Le.BINARY_ACK:
          this.onack(e);
          break;
        case Le.DISCONNECT:
          this.ondisconnect();
          break;
        case Le.CONNECT_ERROR:
          this.destroy();
          const r = new Error(e.data.message);
          r.data = e.data.data, this.emitReserved("connect_error", r);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(e) {
    const n = e.data || [];
    e.id != null && n.push(this.ack(e.id)), this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(e) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n)
        r.apply(this, e);
    }
    super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(e) {
    const n = this;
    let r = !1;
    return function(...i) {
      r || (r = !0, n.packet({
        type: Le.ACK,
        id: e,
        data: i
      }));
    };
  }
  /**
   * Called upon a server acknowlegement.
   *
   * @param packet
   * @private
   */
  onack(e) {
    const n = this.acks[e.id];
    typeof n == "function" && (n.apply(this, e.data), delete this.acks[e.id]);
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(e, n) {
    this.id = e, this.recovered = n && this._pid === n, this._pid = n, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((e) => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach((e) => {
      this.notifyOutgoingListeners(e), this.packet(e);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((e) => e()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: Le.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(e) {
    return this.flags.compress = e, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(e) {
    return this.flags.timeout = e, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(e) {
    if (!this._anyListeners)
      return this;
    if (e) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (e === n[r])
          return n.splice(r, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(e) {
    if (!this._anyOutgoingListeners)
      return this;
    if (e) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (e === n[r])
          return n.splice(r, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(e) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n)
        r.apply(this, e.data);
    }
  }
}
function Tr(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
Tr.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), n = Math.floor(e * this.jitter * t);
    t = Math.floor(e * 10) & 1 ? t + n : t - n;
  }
  return Math.min(t, this.max) | 0;
};
Tr.prototype.reset = function() {
  this.attempts = 0;
};
Tr.prototype.setMin = function(t) {
  this.ms = t;
};
Tr.prototype.setMax = function(t) {
  this.max = t;
};
Tr.prototype.setJitter = function(t) {
  this.jitter = t;
};
class aa extends ft {
  constructor(e, n) {
    var r;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (n = e, e = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, Ks(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Tr({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = e;
    const i = n.parser || Sm;
    this.encoder = new i.Encoder(), this.decoder = new i.Decoder(), this._autoConnect = n.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(e) {
    return arguments.length ? (this._reconnection = !!e, this) : this._reconnection;
  }
  reconnectionAttempts(e) {
    return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this);
  }
  reconnectionDelay(e) {
    var n;
    return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (n = this.backoff) === null || n === void 0 || n.setMin(e), this);
  }
  randomizationFactor(e) {
    var n;
    return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (n = this.backoff) === null || n === void 0 || n.setJitter(e), this);
  }
  reconnectionDelayMax(e) {
    var n;
    return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (n = this.backoff) === null || n === void 0 || n.setMax(e), this);
  }
  timeout(e) {
    return arguments.length ? (this._timeout = e, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(e) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new sf(this.uri, this.opts);
    const n = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = Yt(n, "open", function() {
      r.onopen(), e && e();
    }), s = Yt(n, "error", (o) => {
      r.cleanup(), r._readyState = "closed", this.emitReserved("error", o), e ? e(o) : r.maybeReconnectOnOpen();
    });
    if (this._timeout !== !1) {
      const o = this._timeout;
      o === 0 && i();
      const a = this.setTimeoutFn(() => {
        i(), n.close(), n.emit("error", new Error("timeout"));
      }, o);
      this.opts.autoUnref && a.unref(), this.subs.push(function() {
        clearTimeout(a);
      });
    }
    return this.subs.push(i), this.subs.push(s), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(e) {
    return this.open(e);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const e = this.engine;
    this.subs.push(Yt(e, "ping", this.onping.bind(this)), Yt(e, "data", this.ondata.bind(this)), Yt(e, "error", this.onerror.bind(this)), Yt(e, "close", this.onclose.bind(this)), Yt(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(e) {
    try {
      this.decoder.add(e);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(e) {
    rf(() => {
      this.emitReserved("packet", e);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(e) {
    this.emitReserved("error", e);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(e, n) {
    let r = this.nsps[e];
    return r ? this._autoConnect && !r.active && r.connect() : (r = new af(this, e, n), this.nsps[e] = r), r;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(e) {
    const n = Object.keys(this.nsps);
    for (const r of n)
      if (this.nsps[r].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(e) {
    const n = this.encoder.encode(e);
    for (let r = 0; r < n.length; r++)
      this.engine.write(n[r], e.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((e) => e()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close();
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called upon engine close.
   *
   * @private
   */
  onclose(e, n) {
    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, n), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((i) => {
          i ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", i)) : e.onreconnect();
        }));
      }, n);
      this.opts.autoUnref && r.unref(), this.subs.push(function() {
        clearTimeout(r);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const e = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e);
  }
}
const Br = {};
function Ao(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const n = hm(t, e.path || "/socket.io"), r = n.source, i = n.id, s = n.path, o = Br[i] && s in Br[i].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let l;
  return a ? l = new aa(r, e) : (Br[i] || (Br[i] = new aa(r, e)), l = Br[i]), n.query && !e.query && (e.query = n.queryKey), l.socket(n.path, e);
}
Object.assign(Ao, {
  Manager: aa,
  Socket: af,
  io: Ao,
  connect: Ao
});
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var dr = 9e15, Bn = 1e9, la = "0123456789abcdef", Ds = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Ts = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ca = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -dr,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: dr,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, lf, vn, Ie = !0, Xs = "[DecimalError] ", Mn = Xs + "Invalid argument: ", cf = Xs + "Precision limit exceeded", uf = Xs + "crypto unavailable", df = "[object Decimal]", kt = Math.floor, gt = Math.pow, Cm = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, km = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Am = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, ff = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Kt = 1e7, Se = 7, Dm = 9007199254740991, Tm = Ds.length - 1, ua = Ts.length - 1, te = { toStringTag: df };
te.absoluteValue = te.abs = function() {
  var t = new this.constructor(this);
  return t.s < 0 && (t.s = 1), xe(t);
};
te.ceil = function() {
  return xe(new this.constructor(this), this.e + 1, 2);
};
te.clampedTo = te.clamp = function(t, e) {
  var n, r = this, i = r.constructor;
  if (t = new i(t), e = new i(e), !t.s || !e.s)
    return new i(NaN);
  if (t.gt(e))
    throw Error(Mn + e);
  return n = r.cmp(t), n < 0 ? t : r.cmp(e) > 0 ? e : new i(r);
};
te.comparedTo = te.cmp = function(t) {
  var e, n, r, i, s = this, o = s.d, a = (t = new s.constructor(t)).d, l = s.s, c = t.s;
  if (!o || !a)
    return !l || !c ? NaN : l !== c ? l : o === a ? 0 : !o ^ l < 0 ? 1 : -1;
  if (!o[0] || !a[0])
    return o[0] ? l : a[0] ? -c : 0;
  if (l !== c)
    return l;
  if (s.e !== t.e)
    return s.e > t.e ^ l < 0 ? 1 : -1;
  for (r = o.length, i = a.length, e = 0, n = r < i ? r : i; e < n; ++e)
    if (o[e] !== a[e])
      return o[e] > a[e] ^ l < 0 ? 1 : -1;
  return r === i ? 0 : r > i ^ l < 0 ? 1 : -1;
};
te.cosine = te.cos = function() {
  var t, e, n = this, r = n.constructor;
  return n.d ? n.d[0] ? (t = r.precision, e = r.rounding, r.precision = t + Math.max(n.e, n.sd()) + Se, r.rounding = 1, n = Rm(r, mf(r, n)), r.precision = t, r.rounding = e, xe(vn == 2 || vn == 3 ? n.neg() : n, t, e, !0)) : new r(1) : new r(NaN);
};
te.cubeRoot = te.cbrt = function() {
  var t, e, n, r, i, s, o, a, l, c, u = this, h = u.constructor;
  if (!u.isFinite() || u.isZero())
    return new h(u);
  for (Ie = !1, s = u.s * gt(u.s * u, 1 / 3), !s || Math.abs(s) == 1 / 0 ? (n = wt(u.d), t = u.e, (s = (t - n.length + 1) % 3) && (n += s == 1 || s == -2 ? "0" : "00"), s = gt(n, 1 / 3), t = kt((t + 1) / 3) - (t % 3 == (t < 0 ? -1 : 2)), s == 1 / 0 ? n = "5e" + t : (n = s.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + t), r = new h(n), r.s = u.s) : r = new h(s.toString()), o = (t = h.precision) + 3; ; )
    if (a = r, l = a.times(a).times(a), c = l.plus(u), r = Ye(c.plus(u).times(a), c.plus(l), o + 2, 1), wt(a.d).slice(0, o) === (n = wt(r.d)).slice(0, o))
      if (n = n.slice(o - 3, o + 1), n == "9999" || !i && n == "4999") {
        if (!i && (xe(a, t + 1, 0), a.times(a).times(a).eq(u))) {
          r = a;
          break;
        }
        o += 4, i = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (xe(r, t + 1, 1), e = !r.times(r).times(r).eq(u));
        break;
      }
  return Ie = !0, xe(r, t, h.rounding, e);
};
te.decimalPlaces = te.dp = function() {
  var t, e = this.d, n = NaN;
  if (e) {
    if (t = e.length - 1, n = (t - kt(this.e / Se)) * Se, t = e[t], t)
      for (; t % 10 == 0; t /= 10)
        n--;
    n < 0 && (n = 0);
  }
  return n;
};
te.dividedBy = te.div = function(t) {
  return Ye(this, new this.constructor(t));
};
te.dividedToIntegerBy = te.divToInt = function(t) {
  var e = this, n = e.constructor;
  return xe(Ye(e, new n(t), 0, 1, 1), n.precision, n.rounding);
};
te.equals = te.eq = function(t) {
  return this.cmp(t) === 0;
};
te.floor = function() {
  return xe(new this.constructor(this), this.e + 1, 3);
};
te.greaterThan = te.gt = function(t) {
  return this.cmp(t) > 0;
};
te.greaterThanOrEqualTo = te.gte = function(t) {
  var e = this.cmp(t);
  return e == 1 || e === 0;
};
te.hyperbolicCosine = te.cosh = function() {
  var t, e, n, r, i, s = this, o = s.constructor, a = new o(1);
  if (!s.isFinite())
    return new o(s.s ? 1 / 0 : NaN);
  if (s.isZero())
    return a;
  n = o.precision, r = o.rounding, o.precision = n + Math.max(s.e, s.sd()) + 4, o.rounding = 1, i = s.d.length, i < 32 ? (t = Math.ceil(i / 3), e = (1 / eo(4, t)).toString()) : (t = 16, e = "2.3283064365386962890625e-10"), s = wr(o, 1, s.times(e), new o(1), !0);
  for (var l, c = t, u = new o(8); c--; )
    l = s.times(s), s = a.minus(l.times(u.minus(l.times(u))));
  return xe(s, o.precision = n, o.rounding = r, !0);
};
te.hyperbolicSine = te.sinh = function() {
  var t, e, n, r, i = this, s = i.constructor;
  if (!i.isFinite() || i.isZero())
    return new s(i);
  if (e = s.precision, n = s.rounding, s.precision = e + Math.max(i.e, i.sd()) + 4, s.rounding = 1, r = i.d.length, r < 3)
    i = wr(s, 2, i, i, !0);
  else {
    t = 1.4 * Math.sqrt(r), t = t > 16 ? 16 : t | 0, i = i.times(1 / eo(5, t)), i = wr(s, 2, i, i, !0);
    for (var o, a = new s(5), l = new s(16), c = new s(20); t--; )
      o = i.times(i), i = i.times(a.plus(o.times(l.times(o).plus(c))));
  }
  return s.precision = e, s.rounding = n, xe(i, e, n, !0);
};
te.hyperbolicTangent = te.tanh = function() {
  var t, e, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (t = r.precision, e = r.rounding, r.precision = t + 7, r.rounding = 1, Ye(n.sinh(), n.cosh(), r.precision = t, r.rounding = e)) : new r(n.s);
};
te.inverseCosine = te.acos = function() {
  var t, e = this, n = e.constructor, r = e.abs().cmp(1), i = n.precision, s = n.rounding;
  return r !== -1 ? r === 0 ? e.isNeg() ? Gt(n, i, s) : new n(0) : new n(NaN) : e.isZero() ? Gt(n, i + 4, s).times(0.5) : (n.precision = i + 6, n.rounding = 1, e = e.asin(), t = Gt(n, i + 4, s).times(0.5), n.precision = i, n.rounding = s, t.minus(e));
};
te.inverseHyperbolicCosine = te.acosh = function() {
  var t, e, n = this, r = n.constructor;
  return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (t = r.precision, e = r.rounding, r.precision = t + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, Ie = !1, n = n.times(n).minus(1).sqrt().plus(n), Ie = !0, r.precision = t, r.rounding = e, n.ln()) : new r(n);
};
te.inverseHyperbolicSine = te.asinh = function() {
  var t, e, n = this, r = n.constructor;
  return !n.isFinite() || n.isZero() ? new r(n) : (t = r.precision, e = r.rounding, r.precision = t + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, Ie = !1, n = n.times(n).plus(1).sqrt().plus(n), Ie = !0, r.precision = t, r.rounding = e, n.ln());
};
te.inverseHyperbolicTangent = te.atanh = function() {
  var t, e, n, r, i = this, s = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (t = s.precision, e = s.rounding, r = i.sd(), Math.max(r, t) < 2 * -i.e - 1 ? xe(new s(i), t, e, !0) : (s.precision = n = r - i.e, i = Ye(i.plus(1), new s(1).minus(i), n + t, 1), s.precision = t + 4, s.rounding = 1, i = i.ln(), s.precision = t, s.rounding = e, i.times(0.5))) : new s(NaN);
};
te.inverseSine = te.asin = function() {
  var t, e, n, r, i = this, s = i.constructor;
  return i.isZero() ? new s(i) : (e = i.abs().cmp(1), n = s.precision, r = s.rounding, e !== -1 ? e === 0 ? (t = Gt(s, n + 4, r).times(0.5), t.s = i.s, t) : new s(NaN) : (s.precision = n + 6, s.rounding = 1, i = i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan(), s.precision = n, s.rounding = r, i.times(2)));
};
te.inverseTangent = te.atan = function() {
  var t, e, n, r, i, s, o, a, l, c = this, u = c.constructor, h = u.precision, d = u.rounding;
  if (c.isFinite()) {
    if (c.isZero())
      return new u(c);
    if (c.abs().eq(1) && h + 4 <= ua)
      return o = Gt(u, h + 4, d).times(0.25), o.s = c.s, o;
  } else {
    if (!c.s)
      return new u(NaN);
    if (h + 4 <= ua)
      return o = Gt(u, h + 4, d).times(0.5), o.s = c.s, o;
  }
  for (u.precision = a = h + 10, u.rounding = 1, n = Math.min(28, a / Se + 2 | 0), t = n; t; --t)
    c = c.div(c.times(c).plus(1).sqrt().plus(1));
  for (Ie = !1, e = Math.ceil(a / Se), r = 1, l = c.times(c), o = new u(c), i = c; t !== -1; )
    if (i = i.times(l), s = o.minus(i.div(r += 2)), i = i.times(l), o = s.plus(i.div(r += 2)), o.d[e] !== void 0)
      for (t = e; o.d[t] === s.d[t] && t--; )
        ;
  return n && (o = o.times(2 << n - 1)), Ie = !0, xe(o, u.precision = h, u.rounding = d, !0);
};
te.isFinite = function() {
  return !!this.d;
};
te.isInteger = te.isInt = function() {
  return !!this.d && kt(this.e / Se) > this.d.length - 2;
};
te.isNaN = function() {
  return !this.s;
};
te.isNegative = te.isNeg = function() {
  return this.s < 0;
};
te.isPositive = te.isPos = function() {
  return this.s > 0;
};
te.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
te.lessThan = te.lt = function(t) {
  return this.cmp(t) < 0;
};
te.lessThanOrEqualTo = te.lte = function(t) {
  return this.cmp(t) < 1;
};
te.logarithm = te.log = function(t) {
  var e, n, r, i, s, o, a, l, c = this, u = c.constructor, h = u.precision, d = u.rounding, f = 5;
  if (t == null)
    t = new u(10), e = !0;
  else {
    if (t = new u(t), n = t.d, t.s < 0 || !n || !n[0] || t.eq(1))
      return new u(NaN);
    e = t.eq(10);
  }
  if (n = c.d, c.s < 0 || !n || !n[0] || c.eq(1))
    return new u(n && !n[0] ? -1 / 0 : c.s != 1 ? NaN : n ? 0 : 1 / 0);
  if (e)
    if (n.length > 1)
      s = !0;
    else {
      for (i = n[0]; i % 10 === 0; )
        i /= 10;
      s = i !== 1;
    }
  if (Ie = !1, a = h + f, o = kn(c, a), r = e ? Rs(u, a + 10) : kn(t, a), l = Ye(o, r, a, 1), Zr(l.d, i = h, d))
    do
      if (a += 10, o = kn(c, a), r = e ? Rs(u, a + 10) : kn(t, a), l = Ye(o, r, a, 1), !s) {
        +wt(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = xe(l, h + 1, 0));
        break;
      }
    while (Zr(l.d, i += 10, d));
  return Ie = !0, xe(l, h, d);
};
te.minus = te.sub = function(t) {
  var e, n, r, i, s, o, a, l, c, u, h, d, f = this, g = f.constructor;
  if (t = new g(t), !f.d || !t.d)
    return !f.s || !t.s ? t = new g(NaN) : f.d ? t.s = -t.s : t = new g(t.d || f.s !== t.s ? f : NaN), t;
  if (f.s != t.s)
    return t.s = -t.s, f.plus(t);
  if (c = f.d, d = t.d, a = g.precision, l = g.rounding, !c[0] || !d[0]) {
    if (d[0])
      t.s = -t.s;
    else if (c[0])
      t = new g(f);
    else
      return new g(l === 3 ? -0 : 0);
    return Ie ? xe(t, a, l) : t;
  }
  if (n = kt(t.e / Se), u = kt(f.e / Se), c = c.slice(), s = u - n, s) {
    for (h = s < 0, h ? (e = c, s = -s, o = d.length) : (e = d, n = u, o = c.length), r = Math.max(Math.ceil(a / Se), o) + 2, s > r && (s = r, e.length = 1), e.reverse(), r = s; r--; )
      e.push(0);
    e.reverse();
  } else {
    for (r = c.length, o = d.length, h = r < o, h && (o = r), r = 0; r < o; r++)
      if (c[r] != d[r]) {
        h = c[r] < d[r];
        break;
      }
    s = 0;
  }
  for (h && (e = c, c = d, d = e, t.s = -t.s), o = c.length, r = d.length - o; r > 0; --r)
    c[o++] = 0;
  for (r = d.length; r > s; ) {
    if (c[--r] < d[r]) {
      for (i = r; i && c[--i] === 0; )
        c[i] = Kt - 1;
      --c[i], c[r] += Kt;
    }
    c[r] -= d[r];
  }
  for (; c[--o] === 0; )
    c.pop();
  for (; c[0] === 0; c.shift())
    --n;
  return c[0] ? (t.d = c, t.e = Js(c, n), Ie ? xe(t, a, l) : t) : new g(l === 3 ? -0 : 0);
};
te.modulo = te.mod = function(t) {
  var e, n = this, r = n.constructor;
  return t = new r(t), !n.d || !t.s || t.d && !t.d[0] ? new r(NaN) : !t.d || n.d && !n.d[0] ? xe(new r(n), r.precision, r.rounding) : (Ie = !1, r.modulo == 9 ? (e = Ye(n, t.abs(), 0, 3, 1), e.s *= t.s) : e = Ye(n, t, 0, r.modulo, 1), e = e.times(t), Ie = !0, n.minus(e));
};
te.naturalExponential = te.exp = function() {
  return da(this);
};
te.naturalLogarithm = te.ln = function() {
  return kn(this);
};
te.negated = te.neg = function() {
  var t = new this.constructor(this);
  return t.s = -t.s, xe(t);
};
te.plus = te.add = function(t) {
  var e, n, r, i, s, o, a, l, c, u, h = this, d = h.constructor;
  if (t = new d(t), !h.d || !t.d)
    return !h.s || !t.s ? t = new d(NaN) : h.d || (t = new d(t.d || h.s === t.s ? h : NaN)), t;
  if (h.s != t.s)
    return t.s = -t.s, h.minus(t);
  if (c = h.d, u = t.d, a = d.precision, l = d.rounding, !c[0] || !u[0])
    return u[0] || (t = new d(h)), Ie ? xe(t, a, l) : t;
  if (s = kt(h.e / Se), r = kt(t.e / Se), c = c.slice(), i = s - r, i) {
    for (i < 0 ? (n = c, i = -i, o = u.length) : (n = u, r = s, o = c.length), s = Math.ceil(a / Se), o = s > o ? s + 1 : o + 1, i > o && (i = o, n.length = 1), n.reverse(); i--; )
      n.push(0);
    n.reverse();
  }
  for (o = c.length, i = u.length, o - i < 0 && (i = o, n = u, u = c, c = n), e = 0; i; )
    e = (c[--i] = c[i] + u[i] + e) / Kt | 0, c[i] %= Kt;
  for (e && (c.unshift(e), ++r), o = c.length; c[--o] == 0; )
    c.pop();
  return t.d = c, t.e = Js(c, r), Ie ? xe(t, a, l) : t;
};
te.precision = te.sd = function(t) {
  var e, n = this;
  if (t !== void 0 && t !== !!t && t !== 1 && t !== 0)
    throw Error(Mn + t);
  return n.d ? (e = hf(n.d), t && n.e + 1 > e && (e = n.e + 1)) : e = NaN, e;
};
te.round = function() {
  var t = this, e = t.constructor;
  return xe(new e(t), t.e + 1, e.rounding);
};
te.sine = te.sin = function() {
  var t, e, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (t = r.precision, e = r.rounding, r.precision = t + Math.max(n.e, n.sd()) + Se, r.rounding = 1, n = Mm(r, mf(r, n)), r.precision = t, r.rounding = e, xe(vn > 2 ? n.neg() : n, t, e, !0)) : new r(NaN);
};
te.squareRoot = te.sqrt = function() {
  var t, e, n, r, i, s, o = this, a = o.d, l = o.e, c = o.s, u = o.constructor;
  if (c !== 1 || !a || !a[0])
    return new u(!c || c < 0 && (!a || a[0]) ? NaN : a ? o : 1 / 0);
  for (Ie = !1, c = Math.sqrt(+o), c == 0 || c == 1 / 0 ? (e = wt(a), (e.length + l) % 2 == 0 && (e += "0"), c = Math.sqrt(e), l = kt((l + 1) / 2) - (l < 0 || l % 2), c == 1 / 0 ? e = "5e" + l : (e = c.toExponential(), e = e.slice(0, e.indexOf("e") + 1) + l), r = new u(e)) : r = new u(c.toString()), n = (l = u.precision) + 3; ; )
    if (s = r, r = s.plus(Ye(o, s, n + 2, 1)).times(0.5), wt(s.d).slice(0, n) === (e = wt(r.d)).slice(0, n))
      if (e = e.slice(n - 3, n + 1), e == "9999" || !i && e == "4999") {
        if (!i && (xe(s, l + 1, 0), s.times(s).eq(o))) {
          r = s;
          break;
        }
        n += 4, i = 1;
      } else {
        (!+e || !+e.slice(1) && e.charAt(0) == "5") && (xe(r, l + 1, 1), t = !r.times(r).eq(o));
        break;
      }
  return Ie = !0, xe(r, l, u.rounding, t);
};
te.tangent = te.tan = function() {
  var t, e, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (t = r.precision, e = r.rounding, r.precision = t + 10, r.rounding = 1, n = n.sin(), n.s = 1, n = Ye(n, new r(1).minus(n.times(n)).sqrt(), t + 10, 0), r.precision = t, r.rounding = e, xe(vn == 2 || vn == 4 ? n.neg() : n, t, e, !0)) : new r(NaN);
};
te.times = te.mul = function(t) {
  var e, n, r, i, s, o, a, l, c, u = this, h = u.constructor, d = u.d, f = (t = new h(t)).d;
  if (t.s *= u.s, !d || !d[0] || !f || !f[0])
    return new h(!t.s || d && !d[0] && !f || f && !f[0] && !d ? NaN : !d || !f ? t.s / 0 : t.s * 0);
  for (n = kt(u.e / Se) + kt(t.e / Se), l = d.length, c = f.length, l < c && (s = d, d = f, f = s, o = l, l = c, c = o), s = [], o = l + c, r = o; r--; )
    s.push(0);
  for (r = c; --r >= 0; ) {
    for (e = 0, i = l + r; i > r; )
      a = s[i] + f[r] * d[i - r - 1] + e, s[i--] = a % Kt | 0, e = a / Kt | 0;
    s[i] = (s[i] + e) % Kt | 0;
  }
  for (; !s[--o]; )
    s.pop();
  return e ? ++n : s.shift(), t.d = s, t.e = Js(s, n), Ie ? xe(t, h.precision, h.rounding) : t;
};
te.toBinary = function(t, e) {
  return Ya(this, 2, t, e);
};
te.toDecimalPlaces = te.toDP = function(t, e) {
  var n = this, r = n.constructor;
  return n = new r(n), t === void 0 ? n : (Bt(t, 0, Bn), e === void 0 ? e = r.rounding : Bt(e, 0, 8), xe(n, t + n.e + 1, e));
};
te.toExponential = function(t, e) {
  var n, r = this, i = r.constructor;
  return t === void 0 ? n = on(r, !0) : (Bt(t, 0, Bn), e === void 0 ? e = i.rounding : Bt(e, 0, 8), r = xe(new i(r), t + 1, e), n = on(r, !0, t + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
te.toFixed = function(t, e) {
  var n, r, i = this, s = i.constructor;
  return t === void 0 ? n = on(i) : (Bt(t, 0, Bn), e === void 0 ? e = s.rounding : Bt(e, 0, 8), r = xe(new s(i), t + i.e + 1, e), n = on(r, !1, t + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
};
te.toFraction = function(t) {
  var e, n, r, i, s, o, a, l, c, u, h, d, f = this, g = f.d, p = f.constructor;
  if (!g)
    return new p(f);
  if (c = n = new p(1), r = l = new p(0), e = new p(r), s = e.e = hf(g) - f.e - 1, o = s % Se, e.d[0] = gt(10, o < 0 ? Se + o : o), t == null)
    t = s > 0 ? e : c;
  else {
    if (a = new p(t), !a.isInt() || a.lt(c))
      throw Error(Mn + a);
    t = a.gt(e) ? s > 0 ? e : c : a;
  }
  for (Ie = !1, a = new p(wt(g)), u = p.precision, p.precision = s = g.length * Se * 2; h = Ye(a, e, 0, 1, 1), i = n.plus(h.times(r)), i.cmp(t) != 1; )
    n = r, r = i, i = c, c = l.plus(h.times(i)), l = i, i = e, e = a.minus(h.times(i)), a = i;
  return i = Ye(t.minus(n), r, 0, 1, 1), l = l.plus(i.times(c)), n = n.plus(i.times(r)), l.s = c.s = f.s, d = Ye(c, r, s, 1).minus(f).abs().cmp(Ye(l, n, s, 1).minus(f).abs()) < 1 ? [c, r] : [l, n], p.precision = u, Ie = !0, d;
};
te.toHexadecimal = te.toHex = function(t, e) {
  return Ya(this, 16, t, e);
};
te.toNearest = function(t, e) {
  var n = this, r = n.constructor;
  if (n = new r(n), t == null) {
    if (!n.d)
      return n;
    t = new r(1), e = r.rounding;
  } else {
    if (t = new r(t), e === void 0 ? e = r.rounding : Bt(e, 0, 8), !n.d)
      return t.s ? n : t;
    if (!t.d)
      return t.s && (t.s = n.s), t;
  }
  return t.d[0] ? (Ie = !1, n = Ye(n, t, 0, e, 1).times(t), Ie = !0, xe(n)) : (t.s = n.s, n = t), n;
};
te.toNumber = function() {
  return +this;
};
te.toOctal = function(t, e) {
  return Ya(this, 8, t, e);
};
te.toPower = te.pow = function(t) {
  var e, n, r, i, s, o, a = this, l = a.constructor, c = +(t = new l(t));
  if (!a.d || !t.d || !a.d[0] || !t.d[0])
    return new l(gt(+a, c));
  if (a = new l(a), a.eq(1))
    return a;
  if (r = l.precision, s = l.rounding, t.eq(1))
    return xe(a, r, s);
  if (e = kt(t.e / Se), e >= t.d.length - 1 && (n = c < 0 ? -c : c) <= Dm)
    return i = pf(l, a, n, r), t.s < 0 ? new l(1).div(i) : xe(i, r, s);
  if (o = a.s, o < 0) {
    if (e < t.d.length - 1)
      return new l(NaN);
    if (t.d[e] & 1 || (o = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
      return a.s = o, a;
  }
  return n = gt(+a, c), e = n == 0 || !isFinite(n) ? kt(c * (Math.log("0." + wt(a.d)) / Math.LN10 + a.e + 1)) : new l(n + "").e, e > l.maxE + 1 || e < l.minE - 1 ? new l(e > 0 ? o / 0 : 0) : (Ie = !1, l.rounding = a.s = 1, n = Math.min(12, (e + "").length), i = da(t.times(kn(a, r + n)), r), i.d && (i = xe(i, r + 5, 1), Zr(i.d, r, s) && (e = r + 10, i = xe(da(t.times(kn(a, e + n)), e), e + 5, 1), +wt(i.d).slice(r + 1, r + 15) + 1 == 1e14 && (i = xe(i, r + 1, 0)))), i.s = o, Ie = !0, l.rounding = s, xe(i, r, s));
};
te.toPrecision = function(t, e) {
  var n, r = this, i = r.constructor;
  return t === void 0 ? n = on(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (Bt(t, 1, Bn), e === void 0 ? e = i.rounding : Bt(e, 0, 8), r = xe(new i(r), t, e), n = on(r, t <= r.e || r.e <= i.toExpNeg, t)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
te.toSignificantDigits = te.toSD = function(t, e) {
  var n = this, r = n.constructor;
  return t === void 0 ? (t = r.precision, e = r.rounding) : (Bt(t, 1, Bn), e === void 0 ? e = r.rounding : Bt(e, 0, 8)), xe(new r(n), t, e);
};
te.toString = function() {
  var t = this, e = t.constructor, n = on(t, t.e <= e.toExpNeg || t.e >= e.toExpPos);
  return t.isNeg() && !t.isZero() ? "-" + n : n;
};
te.truncated = te.trunc = function() {
  return xe(new this.constructor(this), this.e + 1, 1);
};
te.valueOf = te.toJSON = function() {
  var t = this, e = t.constructor, n = on(t, t.e <= e.toExpNeg || t.e >= e.toExpPos);
  return t.isNeg() ? "-" + n : n;
};
function wt(t) {
  var e, n, r, i = t.length - 1, s = "", o = t[0];
  if (i > 0) {
    for (s += o, e = 1; e < i; e++)
      r = t[e] + "", n = Se - r.length, n && (s += Cn(n)), s += r;
    o = t[e], r = o + "", n = Se - r.length, n && (s += Cn(n));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; )
    o /= 10;
  return s + o;
}
function Bt(t, e, n) {
  if (t !== ~~t || t < e || t > n)
    throw Error(Mn + t);
}
function Zr(t, e, n, r) {
  var i, s, o, a;
  for (s = t[0]; s >= 10; s /= 10)
    --e;
  return --e < 0 ? (e += Se, i = 0) : (i = Math.ceil((e + 1) / Se), e %= Se), s = gt(10, Se - e), a = t[i] % s | 0, r == null ? e < 3 ? (e == 0 ? a = a / 100 | 0 : e == 1 && (a = a / 10 | 0), o = n < 4 && a == 99999 || n > 3 && a == 49999 || a == 5e4 || a == 0) : o = (n < 4 && a + 1 == s || n > 3 && a + 1 == s / 2) && (t[i + 1] / s / 100 | 0) == gt(10, e - 2) - 1 || (a == s / 2 || a == 0) && (t[i + 1] / s / 100 | 0) == 0 : e < 4 ? (e == 0 ? a = a / 1e3 | 0 : e == 1 ? a = a / 100 | 0 : e == 2 && (a = a / 10 | 0), o = (r || n < 4) && a == 9999 || !r && n > 3 && a == 4999) : o = ((r || n < 4) && a + 1 == s || !r && n > 3 && a + 1 == s / 2) && (t[i + 1] / s / 1e3 | 0) == gt(10, e - 3) - 1, o;
}
function Ni(t, e, n) {
  for (var r, i = [0], s, o = 0, a = t.length; o < a; ) {
    for (s = i.length; s--; )
      i[s] *= e;
    for (i[0] += la.indexOf(t.charAt(o++)), r = 0; r < i.length; r++)
      i[r] > n - 1 && (i[r + 1] === void 0 && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n);
  }
  return i.reverse();
}
function Rm(t, e) {
  var n, r, i;
  if (e.isZero())
    return e;
  r = e.d.length, r < 32 ? (n = Math.ceil(r / 3), i = (1 / eo(4, n)).toString()) : (n = 16, i = "2.3283064365386962890625e-10"), t.precision += n, e = wr(t, 1, e.times(i), new t(1));
  for (var s = n; s--; ) {
    var o = e.times(e);
    e = o.times(o).minus(o).times(8).plus(1);
  }
  return t.precision -= n, e;
}
var Ye = function() {
  function t(r, i, s) {
    var o, a = 0, l = r.length;
    for (r = r.slice(); l--; )
      o = r[l] * i + a, r[l] = o % s | 0, a = o / s | 0;
    return a && r.unshift(a), r;
  }
  function e(r, i, s, o) {
    var a, l;
    if (s != o)
      l = s > o ? 1 : -1;
    else
      for (a = l = 0; a < s; a++)
        if (r[a] != i[a]) {
          l = r[a] > i[a] ? 1 : -1;
          break;
        }
    return l;
  }
  function n(r, i, s, o) {
    for (var a = 0; s--; )
      r[s] -= a, a = r[s] < i[s] ? 1 : 0, r[s] = a * o + r[s] - i[s];
    for (; !r[0] && r.length > 1; )
      r.shift();
  }
  return function(r, i, s, o, a, l) {
    var c, u, h, d, f, g, p, v, m, x, b, _, w, S, y, E, I, A, k, R, N = r.constructor, V = r.s == i.s ? 1 : -1, j = r.d, W = i.d;
    if (!j || !j[0] || !W || !W[0])
      return new N(
        // Return NaN if either NaN, or both Infinity or 0.
        !r.s || !i.s || (j ? W && j[0] == W[0] : !W) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          j && j[0] == 0 || !W ? V * 0 : V / 0
        )
      );
    for (l ? (f = 1, u = r.e - i.e) : (l = Kt, f = Se, u = kt(r.e / f) - kt(i.e / f)), k = W.length, I = j.length, m = new N(V), x = m.d = [], h = 0; W[h] == (j[h] || 0); h++)
      ;
    if (W[h] > (j[h] || 0) && u--, s == null ? (S = s = N.precision, o = N.rounding) : a ? S = s + (r.e - i.e) + 1 : S = s, S < 0)
      x.push(1), g = !0;
    else {
      if (S = S / f + 2 | 0, h = 0, k == 1) {
        for (d = 0, W = W[0], S++; (h < I || d) && S--; h++)
          y = d * l + (j[h] || 0), x[h] = y / W | 0, d = y % W | 0;
        g = d || h < I;
      } else {
        for (d = l / (W[0] + 1) | 0, d > 1 && (W = t(W, d, l), j = t(j, d, l), k = W.length, I = j.length), E = k, b = j.slice(0, k), _ = b.length; _ < k; )
          b[_++] = 0;
        R = W.slice(), R.unshift(0), A = W[0], W[1] >= l / 2 && ++A;
        do
          d = 0, c = e(W, b, k, _), c < 0 ? (w = b[0], k != _ && (w = w * l + (b[1] || 0)), d = w / A | 0, d > 1 ? (d >= l && (d = l - 1), p = t(W, d, l), v = p.length, _ = b.length, c = e(p, b, v, _), c == 1 && (d--, n(p, k < v ? R : W, v, l))) : (d == 0 && (c = d = 1), p = W.slice()), v = p.length, v < _ && p.unshift(0), n(b, p, _, l), c == -1 && (_ = b.length, c = e(W, b, k, _), c < 1 && (d++, n(b, k < _ ? R : W, _, l))), _ = b.length) : c === 0 && (d++, b = [0]), x[h++] = d, c && b[0] ? b[_++] = j[E] || 0 : (b = [j[E]], _ = 1);
        while ((E++ < I || b[0] !== void 0) && S--);
        g = b[0] !== void 0;
      }
      x[0] || x.shift();
    }
    if (f == 1)
      m.e = u, lf = g;
    else {
      for (h = 1, d = x[0]; d >= 10; d /= 10)
        h++;
      m.e = h + u * f - 1, xe(m, a ? s + m.e + 1 : s, o, g);
    }
    return m;
  };
}();
function xe(t, e, n, r) {
  var i, s, o, a, l, c, u, h, d, f = t.constructor;
  e:
    if (e != null) {
      if (h = t.d, !h)
        return t;
      for (i = 1, a = h[0]; a >= 10; a /= 10)
        i++;
      if (s = e - i, s < 0)
        s += Se, o = e, u = h[d = 0], l = u / gt(10, i - o - 1) % 10 | 0;
      else if (d = Math.ceil((s + 1) / Se), a = h.length, d >= a)
        if (r) {
          for (; a++ <= d; )
            h.push(0);
          u = l = 0, i = 1, s %= Se, o = s - Se + 1;
        } else
          break e;
      else {
        for (u = a = h[d], i = 1; a >= 10; a /= 10)
          i++;
        s %= Se, o = s - Se + i, l = o < 0 ? 0 : u / gt(10, i - o - 1) % 10 | 0;
      }
      if (r = r || e < 0 || h[d + 1] !== void 0 || (o < 0 ? u : u % gt(10, i - o - 1)), c = n < 4 ? (l || r) && (n == 0 || n == (t.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (n == 4 || r || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (s > 0 ? o > 0 ? u / gt(10, i - o) : 0 : h[d - 1]) % 10 & 1 || n == (t.s < 0 ? 8 : 7)), e < 1 || !h[0])
        return h.length = 0, c ? (e -= t.e + 1, h[0] = gt(10, (Se - e % Se) % Se), t.e = -e || 0) : h[0] = t.e = 0, t;
      if (s == 0 ? (h.length = d, a = 1, d--) : (h.length = d + 1, a = gt(10, Se - s), h[d] = o > 0 ? (u / gt(10, i - o) % gt(10, o) | 0) * a : 0), c)
        for (; ; )
          if (d == 0) {
            for (s = 1, o = h[0]; o >= 10; o /= 10)
              s++;
            for (o = h[0] += a, a = 1; o >= 10; o /= 10)
              a++;
            s != a && (t.e++, h[0] == Kt && (h[0] = 1));
            break;
          } else {
            if (h[d] += a, h[d] != Kt)
              break;
            h[d--] = 0, a = 1;
          }
      for (s = h.length; h[--s] === 0; )
        h.pop();
    }
  return Ie && (t.e > f.maxE ? (t.d = null, t.e = NaN) : t.e < f.minE && (t.e = 0, t.d = [0])), t;
}
function on(t, e, n) {
  if (!t.isFinite())
    return vf(t);
  var r, i = t.e, s = wt(t.d), o = s.length;
  return e ? (n && (r = n - o) > 0 ? s = s.charAt(0) + "." + s.slice(1) + Cn(r) : o > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (t.e < 0 ? "e" : "e+") + t.e) : i < 0 ? (s = "0." + Cn(-i - 1) + s, n && (r = n - o) > 0 && (s += Cn(r))) : i >= o ? (s += Cn(i + 1 - o), n && (r = n - i - 1) > 0 && (s = s + "." + Cn(r))) : ((r = i + 1) < o && (s = s.slice(0, r) + "." + s.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (s += "."), s += Cn(r))), s;
}
function Js(t, e) {
  var n = t[0];
  for (e *= Se; n >= 10; n /= 10)
    e++;
  return e;
}
function Rs(t, e, n) {
  if (e > Tm)
    throw Ie = !0, n && (t.precision = n), Error(cf);
  return xe(new t(Ds), e, 1, !0);
}
function Gt(t, e, n) {
  if (e > ua)
    throw Error(cf);
  return xe(new t(Ts), e, n, !0);
}
function hf(t) {
  var e = t.length - 1, n = e * Se + 1;
  if (e = t[e], e) {
    for (; e % 10 == 0; e /= 10)
      n--;
    for (e = t[0]; e >= 10; e /= 10)
      n++;
  }
  return n;
}
function Cn(t) {
  for (var e = ""; t--; )
    e += "0";
  return e;
}
function pf(t, e, n, r) {
  var i, s = new t(1), o = Math.ceil(r / Se + 4);
  for (Ie = !1; ; ) {
    if (n % 2 && (s = s.times(e), Nc(s.d, o) && (i = !0)), n = kt(n / 2), n === 0) {
      n = s.d.length - 1, i && s.d[n] === 0 && ++s.d[n];
      break;
    }
    e = e.times(e), Nc(e.d, o);
  }
  return Ie = !0, s;
}
function Oc(t) {
  return t.d[t.d.length - 1] & 1;
}
function gf(t, e, n) {
  for (var r, i = new t(e[0]), s = 0; ++s < e.length; )
    if (r = new t(e[s]), r.s)
      i[n](r) && (i = r);
    else {
      i = r;
      break;
    }
  return i;
}
function da(t, e) {
  var n, r, i, s, o, a, l, c = 0, u = 0, h = 0, d = t.constructor, f = d.rounding, g = d.precision;
  if (!t.d || !t.d[0] || t.e > 17)
    return new d(t.d ? t.d[0] ? t.s < 0 ? 0 : 1 / 0 : 1 : t.s ? t.s < 0 ? 0 : t : 0 / 0);
  for (e == null ? (Ie = !1, l = g) : l = e, a = new d(0.03125); t.e > -2; )
    t = t.times(a), h += 5;
  for (r = Math.log(gt(2, h)) / Math.LN10 * 2 + 5 | 0, l += r, n = s = o = new d(1), d.precision = l; ; ) {
    if (s = xe(s.times(t), l, 1), n = n.times(++u), a = o.plus(Ye(s, n, l, 1)), wt(a.d).slice(0, l) === wt(o.d).slice(0, l)) {
      for (i = h; i--; )
        o = xe(o.times(o), l, 1);
      if (e == null)
        if (c < 3 && Zr(o.d, l - r, f, c))
          d.precision = l += 10, n = s = a = new d(1), u = 0, c++;
        else
          return xe(o, d.precision = g, f, Ie = !0);
      else
        return d.precision = g, o;
    }
    o = a;
  }
}
function kn(t, e) {
  var n, r, i, s, o, a, l, c, u, h, d, f = 1, g = 10, p = t, v = p.d, m = p.constructor, x = m.rounding, b = m.precision;
  if (p.s < 0 || !v || !v[0] || !p.e && v[0] == 1 && v.length == 1)
    return new m(v && !v[0] ? -1 / 0 : p.s != 1 ? NaN : v ? 0 : p);
  if (e == null ? (Ie = !1, u = b) : u = e, m.precision = u += g, n = wt(v), r = n.charAt(0), Math.abs(s = p.e) < 15e14) {
    for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3; )
      p = p.times(t), n = wt(p.d), r = n.charAt(0), f++;
    s = p.e, r > 1 ? (p = new m("0." + n), s++) : p = new m(r + "." + n.slice(1));
  } else
    return c = Rs(m, u + 2, b).times(s + ""), p = kn(new m(r + "." + n.slice(1)), u - g).plus(c), m.precision = b, e == null ? xe(p, b, x, Ie = !0) : p;
  for (h = p, l = o = p = Ye(p.minus(1), p.plus(1), u, 1), d = xe(p.times(p), u, 1), i = 3; ; ) {
    if (o = xe(o.times(d), u, 1), c = l.plus(Ye(o, new m(i), u, 1)), wt(c.d).slice(0, u) === wt(l.d).slice(0, u))
      if (l = l.times(2), s !== 0 && (l = l.plus(Rs(m, u + 2, b).times(s + ""))), l = Ye(l, new m(f), u, 1), e == null)
        if (Zr(l.d, u - g, x, a))
          m.precision = u += g, c = o = p = Ye(h.minus(1), h.plus(1), u, 1), d = xe(p.times(p), u, 1), i = a = 1;
        else
          return xe(l, m.precision = b, x, Ie = !0);
      else
        return m.precision = b, l;
    l = c, i += 2;
  }
}
function vf(t) {
  return String(t.s * t.s / 0);
}
function fa(t, e) {
  var n, r, i;
  for ((n = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (r = e.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +e.slice(r + 1), e = e.substring(0, r)) : n < 0 && (n = e.length), r = 0; e.charCodeAt(r) === 48; r++)
    ;
  for (i = e.length; e.charCodeAt(i - 1) === 48; --i)
    ;
  if (e = e.slice(r, i), e) {
    if (i -= r, t.e = n = n - r - 1, t.d = [], r = (n + 1) % Se, n < 0 && (r += Se), r < i) {
      for (r && t.d.push(+e.slice(0, r)), i -= Se; r < i; )
        t.d.push(+e.slice(r, r += Se));
      e = e.slice(r), r = Se - e.length;
    } else
      r -= i;
    for (; r--; )
      e += "0";
    t.d.push(+e), Ie && (t.e > t.constructor.maxE ? (t.d = null, t.e = NaN) : t.e < t.constructor.minE && (t.e = 0, t.d = [0]));
  } else
    t.e = 0, t.d = [0];
  return t;
}
function Im(t, e) {
  var n, r, i, s, o, a, l, c, u;
  if (e.indexOf("_") > -1) {
    if (e = e.replace(/(\d)_(?=\d)/g, "$1"), ff.test(e))
      return fa(t, e);
  } else if (e === "Infinity" || e === "NaN")
    return +e || (t.s = NaN), t.e = NaN, t.d = null, t;
  if (km.test(e))
    n = 16, e = e.toLowerCase();
  else if (Cm.test(e))
    n = 2;
  else if (Am.test(e))
    n = 8;
  else
    throw Error(Mn + e);
  for (s = e.search(/p/i), s > 0 ? (l = +e.slice(s + 1), e = e.substring(2, s)) : e = e.slice(2), s = e.indexOf("."), o = s >= 0, r = t.constructor, o && (e = e.replace(".", ""), a = e.length, s = a - s, i = pf(r, new r(n), s, s * 2)), c = Ni(e, n, Kt), u = c.length - 1, s = u; c[s] === 0; --s)
    c.pop();
  return s < 0 ? new r(t.s * 0) : (t.e = Js(c, u), t.d = c, Ie = !1, o && (t = Ye(t, i, a * 4)), l && (t = t.times(Math.abs(l) < 54 ? gt(2, l) : ii.pow(2, l))), Ie = !0, t);
}
function Mm(t, e) {
  var n, r = e.d.length;
  if (r < 3)
    return e.isZero() ? e : wr(t, 2, e, e);
  n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : n | 0, e = e.times(1 / eo(5, n)), e = wr(t, 2, e, e);
  for (var i, s = new t(5), o = new t(16), a = new t(20); n--; )
    i = e.times(e), e = e.times(s.plus(i.times(o.times(i).minus(a))));
  return e;
}
function wr(t, e, n, r, i) {
  var s, o, a, l, c = t.precision, u = Math.ceil(c / Se);
  for (Ie = !1, l = n.times(n), a = new t(r); ; ) {
    if (o = Ye(a.times(l), new t(e++ * e++), c, 1), a = i ? r.plus(o) : r.minus(o), r = Ye(o.times(l), new t(e++ * e++), c, 1), o = a.plus(r), o.d[u] !== void 0) {
      for (s = u; o.d[s] === a.d[s] && s--; )
        ;
      if (s == -1)
        break;
    }
    s = a, a = r, r = o, o = s;
  }
  return Ie = !0, o.d.length = u + 1, o;
}
function eo(t, e) {
  for (var n = t; --e; )
    n *= t;
  return n;
}
function mf(t, e) {
  var n, r = e.s < 0, i = Gt(t, t.precision, 1), s = i.times(0.5);
  if (e = e.abs(), e.lte(s))
    return vn = r ? 4 : 1, e;
  if (n = e.divToInt(i), n.isZero())
    vn = r ? 3 : 2;
  else {
    if (e = e.minus(n.times(i)), e.lte(s))
      return vn = Oc(n) ? r ? 2 : 3 : r ? 4 : 1, e;
    vn = Oc(n) ? r ? 1 : 4 : r ? 3 : 2;
  }
  return e.minus(i).abs();
}
function Ya(t, e, n, r) {
  var i, s, o, a, l, c, u, h, d, f = t.constructor, g = n !== void 0;
  if (g ? (Bt(n, 1, Bn), r === void 0 ? r = f.rounding : Bt(r, 0, 8)) : (n = f.precision, r = f.rounding), !t.isFinite())
    u = vf(t);
  else {
    for (u = on(t), o = u.indexOf("."), g ? (i = 2, e == 16 ? n = n * 4 - 3 : e == 8 && (n = n * 3 - 2)) : i = e, o >= 0 && (u = u.replace(".", ""), d = new f(1), d.e = u.length - o, d.d = Ni(on(d), 10, i), d.e = d.d.length), h = Ni(u, 10, i), s = l = h.length; h[--l] == 0; )
      h.pop();
    if (!h[0])
      u = g ? "0p+0" : "0";
    else {
      if (o < 0 ? s-- : (t = new f(t), t.d = h, t.e = s, t = Ye(t, d, n, r, 0, i), h = t.d, s = t.e, c = lf), o = h[n], a = i / 2, c = c || h[n + 1] !== void 0, c = r < 4 ? (o !== void 0 || c) && (r === 0 || r === (t.s < 0 ? 3 : 2)) : o > a || o === a && (r === 4 || c || r === 6 && h[n - 1] & 1 || r === (t.s < 0 ? 8 : 7)), h.length = n, c)
        for (; ++h[--n] > i - 1; )
          h[n] = 0, n || (++s, h.unshift(1));
      for (l = h.length; !h[l - 1]; --l)
        ;
      for (o = 0, u = ""; o < l; o++)
        u += la.charAt(h[o]);
      if (g) {
        if (l > 1)
          if (e == 16 || e == 8) {
            for (o = e == 16 ? 4 : 3, --l; l % o; l++)
              u += "0";
            for (h = Ni(u, i, e), l = h.length; !h[l - 1]; --l)
              ;
            for (o = 1, u = "1."; o < l; o++)
              u += la.charAt(h[o]);
          } else
            u = u.charAt(0) + "." + u.slice(1);
        u = u + (s < 0 ? "p" : "p+") + s;
      } else if (s < 0) {
        for (; ++s; )
          u = "0" + u;
        u = "0." + u;
      } else if (++s > l)
        for (s -= l; s--; )
          u += "0";
      else
        s < l && (u = u.slice(0, s) + "." + u.slice(s));
    }
    u = (e == 16 ? "0x" : e == 2 ? "0b" : e == 8 ? "0o" : "") + u;
  }
  return t.s < 0 ? "-" + u : u;
}
function Nc(t, e) {
  if (t.length > e)
    return t.length = e, !0;
}
function Om(t) {
  return new this(t).abs();
}
function Nm(t) {
  return new this(t).acos();
}
function Bm(t) {
  return new this(t).acosh();
}
function Lm(t, e) {
  return new this(t).plus(e);
}
function Pm(t) {
  return new this(t).asin();
}
function $m(t) {
  return new this(t).asinh();
}
function Hm(t) {
  return new this(t).atan();
}
function Fm(t) {
  return new this(t).atanh();
}
function zm(t, e) {
  t = new this(t), e = new this(e);
  var n, r = this.precision, i = this.rounding, s = r + 4;
  return !t.s || !e.s ? n = new this(NaN) : !t.d && !e.d ? (n = Gt(this, s, 1).times(e.s > 0 ? 0.25 : 0.75), n.s = t.s) : !e.d || t.isZero() ? (n = e.s < 0 ? Gt(this, r, i) : new this(0), n.s = t.s) : !t.d || e.isZero() ? (n = Gt(this, s, 1).times(0.5), n.s = t.s) : e.s < 0 ? (this.precision = s, this.rounding = 1, n = this.atan(Ye(t, e, s, 1)), e = Gt(this, s, 1), this.precision = r, this.rounding = i, n = t.s < 0 ? n.minus(e) : n.plus(e)) : n = this.atan(Ye(t, e, s, 1)), n;
}
function Vm(t) {
  return new this(t).cbrt();
}
function Um(t) {
  return xe(t = new this(t), t.e + 1, 2);
}
function jm(t, e, n) {
  return new this(t).clamp(e, n);
}
function Wm(t) {
  if (!t || typeof t != "object")
    throw Error(Xs + "Object expected");
  var e, n, r, i = t.defaults === !0, s = [
    "precision",
    1,
    Bn,
    "rounding",
    0,
    8,
    "toExpNeg",
    -dr,
    0,
    "toExpPos",
    0,
    dr,
    "maxE",
    0,
    dr,
    "minE",
    -dr,
    0,
    "modulo",
    0,
    9
  ];
  for (e = 0; e < s.length; e += 3)
    if (n = s[e], i && (this[n] = ca[n]), (r = t[n]) !== void 0)
      if (kt(r) === r && r >= s[e + 1] && r <= s[e + 2])
        this[n] = r;
      else
        throw Error(Mn + n + ": " + r);
  if (n = "crypto", i && (this[n] = ca[n]), (r = t[n]) !== void 0)
    if (r === !0 || r === !1 || r === 0 || r === 1)
      if (r)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error(uf);
      else
        this[n] = !1;
    else
      throw Error(Mn + n + ": " + r);
  return this;
}
function qm(t) {
  return new this(t).cos();
}
function Ym(t) {
  return new this(t).cosh();
}
function bf(t) {
  var e, n, r;
  function i(s) {
    var o, a, l, c = this;
    if (!(c instanceof i))
      return new i(s);
    if (c.constructor = i, Bc(s)) {
      c.s = s.s, Ie ? !s.d || s.e > i.maxE ? (c.e = NaN, c.d = null) : s.e < i.minE ? (c.e = 0, c.d = [0]) : (c.e = s.e, c.d = s.d.slice()) : (c.e = s.e, c.d = s.d ? s.d.slice() : s.d);
      return;
    }
    if (l = typeof s, l === "number") {
      if (s === 0) {
        c.s = 1 / s < 0 ? -1 : 1, c.e = 0, c.d = [0];
        return;
      }
      if (s < 0 ? (s = -s, c.s = -1) : c.s = 1, s === ~~s && s < 1e7) {
        for (o = 0, a = s; a >= 10; a /= 10)
          o++;
        Ie ? o > i.maxE ? (c.e = NaN, c.d = null) : o < i.minE ? (c.e = 0, c.d = [0]) : (c.e = o, c.d = [s]) : (c.e = o, c.d = [s]);
        return;
      } else if (s * 0 !== 0) {
        s || (c.s = NaN), c.e = NaN, c.d = null;
        return;
      }
      return fa(c, s.toString());
    } else if (l !== "string")
      throw Error(Mn + s);
    return (a = s.charCodeAt(0)) === 45 ? (s = s.slice(1), c.s = -1) : (a === 43 && (s = s.slice(1)), c.s = 1), ff.test(s) ? fa(c, s) : Im(c, s);
  }
  if (i.prototype = te, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Wm, i.clone = bf, i.isDecimal = Bc, i.abs = Om, i.acos = Nm, i.acosh = Bm, i.add = Lm, i.asin = Pm, i.asinh = $m, i.atan = Hm, i.atanh = Fm, i.atan2 = zm, i.cbrt = Vm, i.ceil = Um, i.clamp = jm, i.cos = qm, i.cosh = Ym, i.div = Gm, i.exp = Qm, i.floor = Zm, i.hypot = Km, i.ln = Xm, i.log = Jm, i.log10 = tb, i.log2 = eb, i.max = nb, i.min = rb, i.mod = ib, i.mul = sb, i.pow = ob, i.random = ab, i.round = lb, i.sign = cb, i.sin = ub, i.sinh = db, i.sqrt = fb, i.sub = hb, i.sum = pb, i.tan = gb, i.tanh = vb, i.trunc = mb, t === void 0 && (t = {}), t && t.defaults !== !0)
    for (r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], e = 0; e < r.length; )
      t.hasOwnProperty(n = r[e++]) || (t[n] = this[n]);
  return i.config(t), i;
}
function Gm(t, e) {
  return new this(t).div(e);
}
function Qm(t) {
  return new this(t).exp();
}
function Zm(t) {
  return xe(t = new this(t), t.e + 1, 3);
}
function Km() {
  var t, e, n = new this(0);
  for (Ie = !1, t = 0; t < arguments.length; )
    if (e = new this(arguments[t++]), e.d)
      n.d && (n = n.plus(e.times(e)));
    else {
      if (e.s)
        return Ie = !0, new this(1 / 0);
      n = e;
    }
  return Ie = !0, n.sqrt();
}
function Bc(t) {
  return t instanceof ii || t && t.toStringTag === df || !1;
}
function Xm(t) {
  return new this(t).ln();
}
function Jm(t, e) {
  return new this(t).log(e);
}
function eb(t) {
  return new this(t).log(2);
}
function tb(t) {
  return new this(t).log(10);
}
function nb() {
  return gf(this, arguments, "lt");
}
function rb() {
  return gf(this, arguments, "gt");
}
function ib(t, e) {
  return new this(t).mod(e);
}
function sb(t, e) {
  return new this(t).mul(e);
}
function ob(t, e) {
  return new this(t).pow(e);
}
function ab(t) {
  var e, n, r, i, s = 0, o = new this(1), a = [];
  if (t === void 0 ? t = this.precision : Bt(t, 1, Bn), r = Math.ceil(t / Se), this.crypto)
    if (crypto.getRandomValues)
      for (e = crypto.getRandomValues(new Uint32Array(r)); s < r; )
        i = e[s], i >= 429e7 ? e[s] = crypto.getRandomValues(new Uint32Array(1))[0] : a[s++] = i % 1e7;
    else if (crypto.randomBytes) {
      for (e = crypto.randomBytes(r *= 4); s < r; )
        i = e[s] + (e[s + 1] << 8) + (e[s + 2] << 16) + ((e[s + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(e, s) : (a.push(i % 1e7), s += 4);
      s = r / 4;
    } else
      throw Error(uf);
  else
    for (; s < r; )
      a[s++] = Math.random() * 1e7 | 0;
  for (r = a[--s], t %= Se, r && t && (i = gt(10, Se - t), a[s] = (r / i | 0) * i); a[s] === 0; s--)
    a.pop();
  if (s < 0)
    n = 0, a = [0];
  else {
    for (n = -1; a[0] === 0; n -= Se)
      a.shift();
    for (r = 1, i = a[0]; i >= 10; i /= 10)
      r++;
    r < Se && (n -= Se - r);
  }
  return o.e = n, o.d = a, o;
}
function lb(t) {
  return xe(t = new this(t), t.e + 1, this.rounding);
}
function cb(t) {
  return t = new this(t), t.d ? t.d[0] ? t.s : 0 * t.s : t.s || NaN;
}
function ub(t) {
  return new this(t).sin();
}
function db(t) {
  return new this(t).sinh();
}
function fb(t) {
  return new this(t).sqrt();
}
function hb(t, e) {
  return new this(t).sub(e);
}
function pb() {
  var t = 0, e = arguments, n = new this(e[t]);
  for (Ie = !1; n.s && ++t < e.length; )
    n = n.plus(e[t]);
  return Ie = !0, xe(n, this.precision, this.rounding);
}
function gb(t) {
  return new this(t).tan();
}
function vb(t) {
  return new this(t).tanh();
}
function mb(t) {
  return xe(t = new this(t), t.e + 1, 1);
}
te[Symbol.for("nodejs.util.inspect.custom")] = te.toString;
te[Symbol.toStringTag] = "Decimal";
var ii = te.constructor = bf(ca);
Ds = new ii(Ds);
Ts = new ii(Ts);
var Lc = {}, bb = {
  get exports() {
    return Lc;
  },
  set exports(t) {
    Lc = t;
  }
};
/*!
 * Waves v0.7.6
 * http://fian.my.id/Waves
 *
 * Copyright 2014-2018 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */
(function(t, e) {
  (function(n, r) {
    t.exports = r.call(n);
  })(Re, function() {
    var n = n || {}, r = document.querySelectorAll.bind(document), i = Object.prototype.toString, s = "ontouchstart" in window;
    function o(b) {
      return b !== null && b === b.window;
    }
    function a(b) {
      return o(b) ? b : b.nodeType === 9 && b.defaultView;
    }
    function l(b) {
      var _ = typeof b;
      return _ === "function" || _ === "object" && !!b;
    }
    function c(b) {
      return l(b) && b.nodeType > 0;
    }
    function u(b) {
      var _ = i.call(b);
      return _ === "[object String]" ? r(b) : l(b) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(_) && b.hasOwnProperty("length") ? b : c(b) ? [b] : [];
    }
    function h(b) {
      var _, w, S = { top: 0, left: 0 }, y = b && b.ownerDocument;
      return _ = y.documentElement, typeof b.getBoundingClientRect < "u" && (S = b.getBoundingClientRect()), w = a(y), {
        top: S.top + w.pageYOffset - _.clientTop,
        left: S.left + w.pageXOffset - _.clientLeft
      };
    }
    function d(b) {
      var _ = "";
      for (var w in b)
        b.hasOwnProperty(w) && (_ += w + ":" + b[w] + ";");
      return _;
    }
    var f = {
      // Effect duration
      duration: 750,
      // Effect delay (check for scroll before showing effect)
      delay: 200,
      show: function(b, _, w) {
        if (b.button === 2)
          return !1;
        _ = _ || this;
        var S = document.createElement("div");
        S.className = "waves-ripple waves-rippling", _.appendChild(S);
        var y = h(_), E = 0, I = 0;
        "touches" in b && b.touches.length ? (E = b.touches[0].pageY - y.top, I = b.touches[0].pageX - y.left) : (E = b.pageY - y.top, I = b.pageX - y.left), I = I >= 0 ? I : 0, E = E >= 0 ? E : 0;
        var A = "scale(" + _.clientWidth / 100 * 3 + ")", k = "translate(0,0)";
        w && (k = "translate(" + w.x + "px, " + w.y + "px)"), S.setAttribute("data-hold", Date.now()), S.setAttribute("data-x", I), S.setAttribute("data-y", E), S.setAttribute("data-scale", A), S.setAttribute("data-translate", k);
        var R = {
          top: E + "px",
          left: I + "px"
        };
        S.classList.add("waves-notransition"), S.setAttribute("style", d(R)), S.classList.remove("waves-notransition"), R["-webkit-transform"] = A + " " + k, R["-moz-transform"] = A + " " + k, R["-ms-transform"] = A + " " + k, R["-o-transform"] = A + " " + k, R.transform = A + " " + k, R.opacity = "1";
        var N = b.type === "mousemove" ? 2500 : f.duration;
        R["-webkit-transition-duration"] = N + "ms", R["-moz-transition-duration"] = N + "ms", R["-o-transition-duration"] = N + "ms", R["transition-duration"] = N + "ms", S.setAttribute("style", d(R));
      },
      hide: function(b, _) {
        _ = _ || this;
        for (var w = _.getElementsByClassName("waves-rippling"), S = 0, y = w.length; S < y; S++)
          p(b, _, w[S]);
        s && (_.removeEventListener("touchend", f.hide), _.removeEventListener("touchcancel", f.hide)), _.removeEventListener("mouseup", f.hide), _.removeEventListener("mouseleave", f.hide);
      }
    }, g = {
      // Wrap <input> tag so it can perform the effect
      input: function(b) {
        var _ = b.parentNode;
        if (!(_.tagName.toLowerCase() === "i" && _.classList.contains("waves-effect"))) {
          var w = document.createElement("i");
          w.className = b.className + " waves-input-wrapper", b.className = "waves-button-input", _.replaceChild(w, b), w.appendChild(b);
          var S = window.getComputedStyle(b, null), y = S.color, E = S.backgroundColor;
          w.setAttribute("style", "color:" + y + ";background:" + E), b.setAttribute("style", "background-color:rgba(0,0,0,0);");
        }
      },
      // Wrap <img> tag so it can perform the effect
      img: function(b) {
        var _ = b.parentNode;
        if (!(_.tagName.toLowerCase() === "i" && _.classList.contains("waves-effect"))) {
          var w = document.createElement("i");
          _.replaceChild(w, b), w.appendChild(b);
        }
      }
    };
    function p(b, _, w) {
      if (w) {
        w.classList.remove("waves-rippling");
        var S = w.getAttribute("data-x"), y = w.getAttribute("data-y"), E = w.getAttribute("data-scale"), I = w.getAttribute("data-translate"), A = Date.now() - Number(w.getAttribute("data-hold")), k = 350 - A;
        k < 0 && (k = 0), b.type === "mousemove" && (k = 150);
        var R = b.type === "mousemove" ? 2500 : f.duration;
        setTimeout(function() {
          var N = {
            top: y + "px",
            left: S + "px",
            opacity: "0",
            // Duration
            "-webkit-transition-duration": R + "ms",
            "-moz-transition-duration": R + "ms",
            "-o-transition-duration": R + "ms",
            "transition-duration": R + "ms",
            "-webkit-transform": E + " " + I,
            "-moz-transform": E + " " + I,
            "-ms-transform": E + " " + I,
            "-o-transform": E + " " + I,
            transform: E + " " + I
          };
          w.setAttribute("style", d(N)), setTimeout(function() {
            try {
              _.removeChild(w);
            } catch {
              return !1;
            }
          }, R);
        }, k);
      }
    }
    var v = {
      /* uses an integer rather than bool so there's no issues with
       * needing to clear timeouts if another touch event occurred
       * within the 500ms. Cannot mouseup between touchstart and
       * touchend, nor in the 500ms after touchend. */
      touches: 0,
      allowEvent: function(b) {
        var _ = !0;
        return /^(mousedown|mousemove)$/.test(b.type) && v.touches && (_ = !1), _;
      },
      registerEvent: function(b) {
        var _ = b.type;
        _ === "touchstart" ? v.touches += 1 : /^(touchend|touchcancel)$/.test(_) && setTimeout(function() {
          v.touches && (v.touches -= 1);
        }, 500);
      }
    };
    function m(b) {
      if (v.allowEvent(b) === !1)
        return null;
      for (var _ = null, w = b.target || b.srcElement; w.parentElement; ) {
        if (!(w instanceof SVGElement) && w.classList.contains("waves-effect")) {
          _ = w;
          break;
        }
        w = w.parentElement;
      }
      return _;
    }
    function x(b) {
      var _ = m(b);
      if (_ !== null) {
        if (_.disabled || _.getAttribute("disabled") || _.classList.contains("disabled"))
          return;
        if (v.registerEvent(b), b.type === "touchstart" && f.delay) {
          var w = !1, S = setTimeout(function() {
            S = null, f.show(b, _);
          }, f.delay), y = function(A) {
            S && (clearTimeout(S), S = null, f.show(b, _)), w || (w = !0, f.hide(A, _)), I();
          }, E = function(A) {
            S && (clearTimeout(S), S = null), y(A), I();
          };
          _.addEventListener("touchmove", E, !1), _.addEventListener("touchend", y, !1), _.addEventListener("touchcancel", y, !1);
          var I = function() {
            _.removeEventListener("touchmove", E), _.removeEventListener("touchend", y), _.removeEventListener("touchcancel", y);
          };
        } else
          f.show(b, _), s && (_.addEventListener("touchend", f.hide, !1), _.addEventListener("touchcancel", f.hide, !1)), _.addEventListener("mouseup", f.hide, !1), _.addEventListener("mouseleave", f.hide, !1);
      }
    }
    return n.init = function(b) {
      var _ = document.body;
      b = b || {}, "duration" in b && (f.duration = b.duration), "delay" in b && (f.delay = b.delay), s && (_.addEventListener("touchstart", x, !1), _.addEventListener("touchcancel", v.registerEvent, !1), _.addEventListener("touchend", v.registerEvent, !1)), _.addEventListener("mousedown", x, !1);
    }, n.attach = function(b, _) {
      b = u(b), i.call(_) === "[object Array]" && (_ = _.join(" ")), _ = _ ? " " + _ : "";
      for (var w, S, y = 0, E = b.length; y < E; y++)
        w = b[y], S = w.tagName.toLowerCase(), ["input", "img"].indexOf(S) !== -1 && (g[S](w), w = w.parentElement), w.className.indexOf("waves-effect") === -1 && (w.className += " waves-effect" + _);
    }, n.ripple = function(b, _) {
      b = u(b);
      var w = b.length;
      if (_ = _ || {}, _.wait = _.wait || 0, _.position = _.position || null, w) {
        for (var S, y, E, I = {}, A = 0, k = {
          type: "mousedown",
          button: 1
        }, R = function(V, j) {
          return function() {
            f.hide(V, j);
          };
        }; A < w; A++)
          if (S = b[A], y = _.position || {
            x: S.clientWidth / 2,
            y: S.clientHeight / 2
          }, E = h(S), I.x = E.left + y.x, I.y = E.top + y.y, k.pageX = I.x, k.pageY = I.y, f.show(k, S), _.wait >= 0 && _.wait !== null) {
            var N = {
              type: "mouseup",
              button: 1
            };
            setTimeout(R(N, S), _.wait);
          }
      }
    }, n.calm = function(b) {
      b = u(b);
      for (var _ = {
        type: "mouseup",
        button: 1
      }, w = 0, S = b.length; w < S; w++)
        f.hide(_, b[w]);
    }, n.displayEffect = function(b) {
      console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), n.init(b);
    }, n;
  });
})(bb);
const ke = { lunarInfo: [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560], solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"], Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"], Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"], solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"], sTermInfo: ["9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722"], nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"], nStr2: ["初", "十", "廿", "卅"], nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"], lunarFestival: [{ month: "正", day: "初一", name: "春节" }, { month: "正", day: "十五", name: "元宵节" }, { month: "二", day: "初二", name: "龙抬头" }, { month: "五", day: "初五", name: "端午节" }, { month: "七", day: "初七", name: "七夕节" }, { month: "七", day: "十五", name: "中元节" }, { month: "八", day: "十五", name: "中秋节" }, { month: "九", day: "初九", name: "重阳节" }, { month: "腊", day: "除夕", name: "除夕" }], solarFestival: [{ month: 1, day: 1, name: "元旦节" }, { month: 3, day: 8, name: "妇女节" }, { month: 3, day: 12, name: "植树节" }, { month: 4, day: 5, name: "清明节" }, { month: 5, day: 1, name: "劳动节" }, { month: 5, day: 4, name: "青年节" }, { month: 6, day: 1, name: "儿童节" }, { month: 7, day: 1, name: "建党节" }, { month: 8, day: 1, name: "建军节" }, { month: 9, day: 10, name: "教师节" }, { month: 10, day: 1, name: "国庆节" }], lYearDays: function(t) {
  var e, n = 348;
  for (e = 32768; e > 8; e >>= 1)
    n += ke.lunarInfo[t - 1900] & e ? 1 : 0;
  return n + ke.leapDays(t);
}, leapMonth: function(t) {
  return 15 & ke.lunarInfo[t - 1900];
}, leapDays: function(t) {
  return ke.leapMonth(t) ? 65536 & ke.lunarInfo[t - 1900] ? 30 : 29 : 0;
}, monthDays: function(t, e) {
  return e > 12 || e < 1 ? -1 : ke.lunarInfo[t - 1900] & 65536 >> e ? 30 : 29;
}, solarDays: function(t, e) {
  if (e > 12 || e < 1)
    return -1;
  var n = e - 1;
  return n == 1 ? t % 4 == 0 && t % 100 != 0 || t % 400 == 0 ? 29 : 28 : ke.solarMonth[n];
}, toGanZhiYear: function(t) {
  var e = (t - 3) % 10, n = (t - 3) % 12;
  return e == 0 && (e = 10), n == 0 && (n = 12), ke.Gan[e - 1] + ke.Zhi[n - 1];
}, toAstro: function(t, e) {
  return "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2 * t - (e < [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22][t - 1] ? 2 : 0), 2) + "座";
}, toGanZhi: function(t) {
  return ke.Gan[t % 10] + ke.Zhi[t % 12];
}, getTerm: function(t, e) {
  if (t < 1900 || t > 2100 || e < 1 || e > 24)
    return -1;
  var n = ke.sTermInfo[t - 1900], r = [parseInt("0x" + n.substr(0, 5)).toString(), parseInt("0x" + n.substr(5, 5)).toString(), parseInt("0x" + n.substr(10, 5)).toString(), parseInt("0x" + n.substr(15, 5)).toString(), parseInt("0x" + n.substr(20, 5)).toString(), parseInt("0x" + n.substr(25, 5)).toString()], i = [r[0].substr(0, 1), r[0].substr(1, 2), r[0].substr(3, 1), r[0].substr(4, 2), r[1].substr(0, 1), r[1].substr(1, 2), r[1].substr(3, 1), r[1].substr(4, 2), r[2].substr(0, 1), r[2].substr(1, 2), r[2].substr(3, 1), r[2].substr(4, 2), r[3].substr(0, 1), r[3].substr(1, 2), r[3].substr(3, 1), r[3].substr(4, 2), r[4].substr(0, 1), r[4].substr(1, 2), r[4].substr(3, 1), r[4].substr(4, 2), r[5].substr(0, 1), r[5].substr(1, 2), r[5].substr(3, 1), r[5].substr(4, 2)];
  return parseInt(i[e - 1]);
}, toChinaMonth: function(t) {
  if (t > 12 || t < 1)
    return -1;
  var e = ke.nStr3[t - 1];
  return e += "月";
}, toChinaDay: function(t) {
  var e;
  switch (t) {
    case 10:
      e = "初十";
      break;
    case 20:
      e = "二十";
      break;
    case 30:
      e = "三十";
      break;
    default:
      e = ke.nStr2[Math.floor(t / 10)], e += ke.nStr1[t % 10];
  }
  return e;
}, getAnimal: function(t) {
  return ke.Animals[(t - 4) % 12];
}, getFestival: (t, e, n, r) => {
  let i = null;
  const s = parseInt(t + "");
  return i = s ? ke.solarFestival.find((o) => o.month === s && o.day == e) : ke.lunarFestival.find((o) => `${o.month}月` === t && o.day === e), i;
}, solar2lunar: function(t, e, n) {
  if (t < 1900 || t > 2100 || t == 1900 && e == 1 && n < 31)
    return -1;
  if (t)
    r = new Date(t, parseInt(e + "") - 1, n);
  else
    var r = /* @__PURE__ */ new Date();
  var i, s = 0, o = (t = r.getFullYear(), e = r.getMonth() + 1, n = r.getDate(), (Date.UTC(r.getFullYear(), r.getMonth(), r.getDate()) - Date.UTC(1900, 0, 31)) / 864e5);
  for (i = 1900; i < 2101 && o > 0; i++)
    o -= s = ke.lYearDays(i);
  o < 0 && (o += s, i--);
  var a = /* @__PURE__ */ new Date(), l = !1;
  a.getFullYear() == t && a.getMonth() + 1 == e && a.getDate() == n && (l = !0);
  var c = r.getDay(), u = ke.nStr1[c];
  c == 0 && (c = 7);
  var h = i, d = ke.leapMonth(i), f = !1;
  for (i = 1; i < 13 && o > 0; i++)
    d > 0 && i == d + 1 && f == 0 ? (--i, f = !0, s = ke.leapDays(h)) : s = ke.monthDays(h, i), f == 1 && i == d + 1 && (f = !1), o -= s;
  o == 0 && d > 0 && i == d + 1 && (f ? f = !1 : (f = !0, --i)), o < 0 && (o += s, --i);
  var g = i, p = o + 1, v = e - 1, m = ke.toGanZhiYear(h), x = ke.getTerm(h, 2 * e - 1), b = ke.getTerm(h, 2 * e), _ = ke.toGanZhi(12 * (t - 1900) + e + 11);
  n >= x && (_ = ke.toGanZhi(12 * (t - 1900) + e + 12));
  var w = !1, S = null;
  x == n && (w = !0, S = ke.solarTerm[2 * e - 2]), b == n && (w = !0, S = ke.solarTerm[2 * e - 1]);
  var y = Date.UTC(t, v, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, E = ke.toGanZhi(y + n - 1), I = ke.toAstro(e, n);
  const A = ke.toChinaMonth(g), k = ke.toChinaDay(p);
  return { lYear: h, lMonth: g, lDay: p, Animal: ke.getAnimal(h), IMonthCn: (f ? "闰" : "") + A, IDayCn: k, cYear: t, cMonth: e, cDay: n, gzYear: m, gzMonth: _, gzDay: E, isToday: l, isLeap: f, nWeek: c, ncWeek: "星期" + u, isTerm: w, Term: S, astro: I, festcn: ke.getFestival(A, k, t, e), fest: ke.getFestival(e, n, t) };
}, lunar2solar: function(t, e, n, r = !0) {
  r = !!r;
  var i = ke.leapMonth(t);
  if (ke.leapDays(t), r && i != e || t == 2100 && e == 12 && n > 1 || t == 1900 && e == 1 && n < 31)
    return -1;
  var s = ke.monthDays(t, e), o = s;
  if (r && (o = ke.leapDays(t)), t < 1900 || t > 2100 || n > o)
    return -1;
  for (var a = 0, l = 1900; l < t; l++)
    a += ke.lYearDays(l);
  var c = 0, u = !1;
  for (l = 1; l < e; l++)
    c = ke.leapMonth(t), u || c <= l && c > 0 && (a += ke.leapDays(t), u = !0), a += ke.monthDays(t, l);
  r && (a += s);
  var h = Date.UTC(1900, 1, 30, 0, 0, 0), d = new Date(864e5 * (a + n - 31) + h), f = d.getUTCFullYear(), g = d.getUTCMonth() + 1, p = d.getUTCDate();
  return ke.solar2lunar(f, g, p);
} }, yb = ke.lunar2solar, cr = (t, e = !0) => {
  t = t || /* @__PURE__ */ new Date();
  const n = new Date(t).getDay(), r = { 0: "日", 1: "一", 2: "二", 3: "三", 4: "四", 5: "五", 6: "六" }[n];
  return e ? [r, `星期${r}`, `周${r}`, n] : r;
}, Pc = ["number", "string"], yf = (t, e) => (Pc.includes(typeof t) && Pc.includes(typeof e) || (t = (/* @__PURE__ */ new Date()).getFullYear(), e = (/* @__PURE__ */ new Date()).getMonth() + 1), new Date(t, e, 0).getDate()), $c = (t) => {
  const e = [], n = ct(t).format("YYYY"), r = ct(t).format("MM"), i = yf(Number.parseInt(n), Number.parseInt(r));
  let s = 1;
  for (; s <= i; ) {
    const o = `${r}-${("00" + s).substr(`${s}`.length)}`, a = `${n}-${o}`, l = cr(a);
    e.push({ date: a, datemon: o, dateday: ct(a).format("DD"), week: l[0], week1: l[1], week2: l[2], week3: l[3], isnow: !0 }), s++;
  }
  return e;
};
function fn(t, e) {
  return Object.prototype.toString.call(t) === `[object ${e}]`;
}
function Hc(t) {
  return Object.prototype.toString.call(t);
}
const Bl = class {
  static getTypeLong(e) {
    return Hc(e);
  }
  static getType(e) {
    const n = Hc(e);
    return n.substring(8, n.length - 1).toLocaleLowerCase();
  }
  static isDef(e) {
    return e !== void 0;
  }
  static isUnDef(e) {
    return !this.isDef(e);
  }
  static isObject(e) {
    return e !== null && fn(e, "Object");
  }
  static isEmpty(e) {
    return this.isArray(e) || this.isString(e) ? e.length === 0 : e instanceof Map || e instanceof Set ? e.size === 0 : !!this.isObject(e) && Object.keys(e).length === 0;
  }
  static isDate(e) {
    return fn(e, "Date");
  }
  static isNull(e) {
    return e === null;
  }
  static isNullAndUnDef(e) {
    return this.isUnDef(e) && this.isNull(e);
  }
  static isNullOrUnDef(e) {
    return this.isUnDef(e) || this.isNull(e);
  }
  static isNumber(e) {
    return fn(e, "Number");
  }
  static isPromise(e) {
    return fn(e, "Promise") && this.isObject(e) && this.isFunction(e.then) && this.isFunction(e.catch);
  }
  static isString(e) {
    return fn(e, "String");
  }
  static isFunction(e) {
    return typeof e == "function";
  }
  static isBoolean(e) {
    return fn(e, "Boolean");
  }
  static isRegExp(e) {
    return fn(e, "RegExp");
  }
  static isArray(e) {
    return e && Array.isArray(e);
  }
  static isWindow(e) {
    return typeof window < "u" && fn(e, "Window");
  }
  static isElement(e) {
    return this.isObject(e) && !!e.tagName;
  }
  static isMap(e) {
    return fn(e, "Map");
  }
  static isUrl(e) {
    return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(e);
  }
};
let mn = Bl;
dn(mn, "isServer", typeof window > "u"), dn(mn, "isClient", !Bl.isServer);
var ut = Object.freeze({ __proto__: null, toDateTime: function(t, e = "YYYY-MM-DD HH:mm:ss") {
  return ct(t).format(e);
}, toDate: function(t, e = "YYYY-MM-DD") {
  return ct(t).format(e);
}, toY: function(t, e = "YYYY") {
  return ct(t).format(e);
}, toYM: function(t, e = "YYYY-MM") {
  return ct(t).format(e);
}, toMD: function(t, e = "MM-DD") {
  return ct(t).format(e);
}, toYMD: function(t, e = "YYYY-MM-DD") {
  return ct(t).format(e);
}, toYMDHM: function(t, e = "YYYY-MM-DD HH:mm") {
  return ct(t).format(e);
}, convertDate: ke, dayDetail: yb, formatWeek: cr, getWeek: (t) => {
  t = t || /* @__PURE__ */ new Date();
  const e = [], n = new Date(t).getDay() || 7, r = new Date(t).getTime();
  let i = 1, s = 1;
  for (; n >= i; ) {
    let o = r - 864e5 * (n - i);
    const a = cr(o);
    e.push({ date: ct(o).format("YYYY-MM-DD"), datemon: ct(o).format("MM-DD"), week: a[0], week1: a[1], week2: a[2], week3: a[3] }), i++;
  }
  for (; s <= 7 - n; ) {
    let o = r + 864e5 * s;
    const a = cr(o);
    e.push({ date: ct(o).format("YYYY-MM-DD"), datemon: ct(o).format("MM-DD"), week: a[0], week1: a[1], week2: a[2], week3: a[3] }), s++;
  }
  return e;
}, getMonth: $c, getMonthComple: (t) => {
  const e = $c(t), n = e[0].week3;
  let r = 1;
  for (; r < n; ) {
    const s = new Date(e[0].date).getTime() - 864e5, o = cr(s);
    e.unshift({ date: ct(s).format("YYYY-MM-DD"), datemon: ct(s).format("MM-DD"), dateday: ct(s).format("DD"), week: o[0], week1: o[1], week2: o[2], week3: o[3], isback: !0 }), r++;
  }
  let i = e.length;
  for (; i < 42; ) {
    const s = new Date(e[i - 1].date).getTime() + 864e5, o = cr(s);
    e.push({ date: ct(s).format("YYYY-MM-DD"), datemon: ct(s).format("MM-DD"), dateday: ct(s).format("DD"), week: o[0], week1: o[1], week2: o[2], week3: o[3], isnext: !0 }), i++;
  }
  return e.forEach((s) => {
    const o = s.date.split("-"), a = ke.solar2lunar(o[0], o[1], o[2]);
    s.nl = a, typeof a != "number" && (s.monthcn = a.IMonthCn, s.daycn = a.IDayCn);
  }), e;
}, getMonthDay: yf, daysBetweenDates: (t, e) => {
  if (mn.isNullOrUnDef(t) || mn.isNullOrUnDef(e))
    throw new TypeError("params must both be not empty or null or undefined");
  let n = null;
  return n = mn.isDate(t) && mn.isDate(e) ? Math.abs(t.getTime() - e.getTime()) : Math.abs(new Date(t).getTime() - new Date(e).getTime()), Math.floor(n / 864e5);
} });
function Bi(t) {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-f]{6})$/.test(t);
}
function Do(t) {
  let e = t.toLowerCase();
  if (Bi(t)) {
    if (e.length === 4) {
      let r = "#";
      for (let i = 1; i < 4; i += 1)
        r += e.slice(i, i + 1).concat(e.slice(i, i + 1));
      e = r;
    }
    const n = [];
    for (let r = 1; r < 7; r += 2)
      n.push(parseInt("0x" + e.slice(r, r + 2)));
    return "RGB(" + n.join(",") + ")";
  }
  return e;
}
function To(t, e) {
  const n = parseInt(t, 16) + e, r = n > 255 ? 255 : n;
  return r.toString(16).length > 1 ? r.toString(16) : `0${r.toString(16)}`;
}
function Fc(t, e, n) {
  const r = [t, e, n].map((i) => (i /= 255) <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
  return 0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2];
}
function Ro(t, e) {
  const n = parseInt(t, 16) - e, r = n < 0 ? 0 : n;
  return r.toString(16).length > 1 ? r.toString(16) : `0${r.toString(16)}`;
}
var zc = Object.freeze({ __proto__: null, isHexColor: Bi, rgbToHex: function(t, e, n) {
  const r = (t << 16 | e << 8 | n).toString(16);
  return "#" + new Array(Math.abs(r.length - 7)).join("0") + r;
}, hexToRGB: Do, hexToRGBA: function(t, e) {
  let n = t.toLowerCase();
  if (Bi(t)) {
    if (n.length === 4) {
      let i = "#";
      for (let s = 1; s < 4; s += 1)
        i += n.slice(s, s + 1).concat(n.slice(s, s + 1));
      n = i;
    }
    const r = [];
    for (let i = 1; i < 7; i += 2)
      r.push(parseInt("0x" + n.slice(i, i + 2)));
    return `RGBA(${r.join(",")},${e})`;
  }
  return n;
}, colorIsDark: function(t) {
  if (!Bi(t))
    return;
  const [e, n, r] = Do(t).replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",").map((i) => Number(i));
  return 0.299 * e + 0.578 * n + 0.114 * r < 192;
}, darken: function(t, e) {
  return t = t.indexOf("#") >= 0 ? t.substring(1, t.length) : t, e = Math.trunc(255 * e / 100), `#${Ro(t.substring(0, 2), e)}${Ro(t.substring(2, 4), e)}${Ro(t.substring(4, 6), e)}`;
}, lighten: function(t, e) {
  return t = t.indexOf("#") >= 0 ? t.substring(1, t.length) : t, e = Math.trunc(255 * e / 100), `#${To(t.substring(0, 2), e)}${To(t.substring(2, 4), e)}${To(t.substring(4, 6), e)}`;
}, calculateBestTextColor: function(t) {
  const e = Do(t.substring(1));
  var n, r;
  return n = e.split(","), r = [0, 0, 0], (Fc(~~n[0], ~~n[1], ~~n[2]) + 0.05) / (Fc(r[0], r[1], r[2]) + 0.05) >= 12 ? "#000000" : "#FFFFFF";
} });
function xb(t, e) {
  const { target: n = "__blank", noopener: r = !0, noreferrer: i = !0 } = e || {}, s = [];
  r && s.push("noopener=yes"), i && s.push("noreferrer=yes"), window.open(t, n, s.join(","));
}
for (let t = 0; t <= 15; t++)
  t.toString(16);
function xf(t) {
  const e = t.split(","), n = e[0].match(/:(.*?);/)[1], r = atob(e[1]);
  let i = r.length;
  const s = new Uint8Array(i);
  for (; i--; )
    s[i] = r.charCodeAt(i);
  return new Blob([s], { type: n });
}
function Vc(t, e) {
  return new Promise((n, r) => {
    let i = document.createElement("CANVAS");
    const s = i.getContext("2d"), o = new Image();
    o.crossOrigin = "", o.onload = function() {
      if (!i || !s)
        return r();
      i.height = o.height, i.width = o.width, s.drawImage(o, 0, 0);
      const a = i.toDataURL(e || "image/png");
      i = null, n(a);
    }, o.src = t;
  });
}
function Uc(t, e, n, r) {
  _f(xf(t), e, n, r);
}
function _f(t, e, n, r) {
  const i = new Blob(r !== void 0 ? [r, t] : [t], { type: n || "application/octet-stream" }), s = window.URL.createObjectURL(i), o = document.createElement("a");
  o.style.display = "none", o.href = s, o.setAttribute("download", e), o.download === void 0 && o.setAttribute("target", "_blank"), document.body.appendChild(o), o.click(), document.body.removeChild(o), window.URL.revokeObjectURL(s);
}
let Fn = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof globalThis == "object" && globalThis.globalThis === globalThis ? globalThis : void 0;
function Io(t, e, n) {
  const r = new XMLHttpRequest();
  r.open("GET", t), r.responseType = "blob", r.onload = function() {
    wf(r.response, e, n);
  }, r.onerror = function() {
    console.error("could not download file");
  }, r.send();
}
function jc(t) {
  const e = new XMLHttpRequest();
  e.open("HEAD", t, !1);
  try {
    e.send();
  } catch {
  }
  return e.status >= 200 && e.status <= 299;
}
function xi(t) {
  try {
    t.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(n);
  }
}
const ha = Fn.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), wf = (t, e, n, r) => {
  if ("download" in HTMLAnchorElement.prototype && !ha) {
    const s = Fn.URL || Fn.webkitURL, o = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    e = e || (t == null ? void 0 : t.name) || "download", o.download = e, o.rel = "noopener", typeof t == "string" ? (o.href = t, o.origin !== location.origin ? jc(o.href) ? Io(t, e, n) : (o.target = "_blank") && xi(o) : xi(o)) : (o.href = s.createObjectURL(t), setTimeout(function() {
      s.revokeObjectURL(o.href);
    }, 4e4), setTimeout(function() {
      xi(o);
    }, 0));
  } else if (navigator != null && navigator.msSaveOrOpenBlob)
    if (e = e || t.name || "download", typeof t == "string")
      if (jc(t))
        Io(t, e, n);
      else {
        var i = document.createElement("a");
        i.href = t, i.target = "_blank", setTimeout(function() {
          xi(i);
        });
      }
    else
      navigator == null || navigator.msSaveOrOpenBlob(function(s, o) {
        return o === void 0 ? o = { autoBom: !1 } : typeof o != "object" && (console.warn("第二个参数类型必须是object"), o = { autoBom: !o }), o.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(s == null ? void 0 : s.type) ? new Blob([String.fromCharCode(65279), s], { type: s == null ? void 0 : s.type }) : s;
      }(t, n), e);
  else {
    if ((r = r || open("", "_blank")) && (r.document.title = r.document.body.innerText = "downloading..."), typeof t == "string")
      return Io(t, e, n);
    const s = t.type === "application/octet-stream", o = /constructor/i.test(Fn.HTMLElement) || Fn.safari, a = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((a || s && o || ha) && typeof FileReader < "u") {
      const l = new FileReader();
      l.onloadend = function() {
        let c = l.result;
        c = a ? c : c == null ? void 0 : c.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = c : location.href = c, r = null;
      }, l.readAsDataURL(t);
    } else {
      const l = Fn.URL || Fn.webkitURL, c = l.createObjectURL(t);
      r ? r.location = c : location.href = c, r = null, setTimeout(function() {
        l.revokeObjectURL(c);
      }, 4e4);
    }
  }
};
var Sf = Object.freeze({ __proto__: null, base64ToBlob: xf, urlToBase64: Vc, downloadByOnlineUrl: function(t, e, n, r) {
  Vc(t).then((i) => {
    Uc(i, e, n, r);
  });
}, downloadByBase64: Uc, downloadByData: _f, downloadByUrl: function({ url: t, target: e = "_blank", fileName: n }) {
  const r = window.navigator.userAgent.toLowerCase().indexOf("chrome") > -1, i = window.navigator.userAgent.toLowerCase().indexOf("safari") > -1;
  if (/(iP)/g.test(window.navigator.userAgent))
    return console.error("Your browser does not support download!"), !1;
  if (r || i) {
    const s = document.createElement("a");
    if (s.href = t, s.target = e, s.download !== void 0 && (s.download = n || t.substring(t.lastIndexOf("/") + 1, t.length)), document.createEvent) {
      const o = document.createEvent("MouseEvents");
      return o.initEvent("click", !0, !0), s.dispatchEvent(o), !0;
    }
  }
  return t.indexOf("?") === -1 && (t += "?download"), xb(t, { target: e }), !0;
}, isMacOSWebView: ha, saveAs: wf }), Yn = { local: { has: (t) => Object.prototype.hasOwnProperty.call(localStorage, t), setItem: (t, e, n = 0) => {
  const r = (/* @__PURE__ */ new Date()).getTime(), i = mn.isDate(n) ? r + 1e3 * n : 0;
  localStorage.setItem(t, JSON.stringify({ value: e, overTime: i }));
}, getItem: (t) => {
  const e = localStorage.getItem(t);
  if (!e)
    return null;
  const n = JSON.parse(e);
  return (/* @__PURE__ */ new Date()).getTime() > n.overTime && n.overTime !== 0 ? (localStorage.removeItem(t), null) : n.value;
}, removeItem: (t) => {
  t && localStorage.removeItem(t);
}, clear: (t) => {
  t ? localStorage.removeItem(t) : localStorage.clear();
}, size: () => {
  const t = Object.keys(localStorage);
  let e = 0;
  for (let n = 0; n < t.length; n++) {
    const r = t[n], i = localStorage.getItem(r) || "";
    e += 2 * (r.length + i.length);
  }
  return Math.round(e / 1024);
} }, session: { has: (t) => Object.prototype.hasOwnProperty.call(sessionStorage, t), setItem: (t, e, n = 0) => {
  const r = (/* @__PURE__ */ new Date()).getTime(), i = n ? r + 1e3 * n : 0;
  sessionStorage.setItem(t, JSON.stringify({ value: e, overTime: i }));
}, getItem: (t) => {
  const e = sessionStorage.getItem(t);
  if (!e)
    return null;
  const n = JSON.parse(e);
  return (/* @__PURE__ */ new Date()).getTime() > n.overTime && n.overTime !== 0 ? (sessionStorage.removeItem(t), null) : n.value;
}, removeItem: (t) => {
  t && sessionStorage.removeItem(t);
}, clear: (t) => {
  t ? sessionStorage.removeItem(t) : sessionStorage.clear();
}, size: () => {
  const t = Object.keys(sessionStorage);
  let e = 0;
  for (let n = 0; n < t.length; n++) {
    const r = t[n], i = sessionStorage.getItem(r) || "";
    e += 2 * (r.length + i.length);
  }
  return Math.round(e / 1024);
} }, forage: P1, cookie: jd };
window.socketMap = /* @__PURE__ */ new Map();
ii.set({ precision: 14 });
var _b = Object.freeze({ __proto__: null, debounce: function(t, e) {
  let n;
  return (r) => {
    clearTimeout(n), n = setTimeout(() => {
      t(r);
    }, e);
  };
}, throttle: function(t, e) {
  let n = 0;
  return (r) => {
    const i = (/* @__PURE__ */ new Date()).getTime();
    i - n > e && (t(r), n = i);
  };
} });
const st = Lp, wb = (t) => (Ar("data-v-cfb7ded0"), t = t(), Dr(), t), Sb = {
  class: "approveProcess",
  id: "approveProcess"
}, Eb = { class: "node" }, Cb = { class: "nodeBg" }, kb = { class: "info" }, Ab = { class: "explain" }, Db = { key: 0 }, Tb = { key: 0 }, Rb = { key: 1 }, Ib = { key: 1 }, Mb = { key: 0 }, Ob = { key: 1 }, Nb = { key: 2 }, Bb = { class: "personlist" }, Lb = { class: "avatar" }, Pb = ["src"], $b = {
  key: 1,
  class: "nodeBg"
}, Hb = ["onClick"], Fb = { class: "name" }, zb = {
  key: 0,
  class: "sign"
}, Vb = { key: 0 }, Ub = { key: 1 }, jb = ["onClick"], Wb = {
  key: 0,
  class: "required"
}, qb = /* @__PURE__ */ wb(() => /* @__PURE__ */ P("i", { class: "ikapprove ikapprove-xinzeng" }, null, -1)), Yb = {
  name: "IkApprovalProcess"
}, Gb = /* @__PURE__ */ He({
  ...Yb,
  props: {
    // 选人组件请求地址
    pickerUrl: {
      type: String,
      default: ""
    },
    //文件访问地址
    loadUrl: {
      type: String,
      default: ""
    },
    // 数据数组
    dataList: {
      type: Array,
      default: () => []
    },
    // 节点类型
    defaultNodeType: {
      type: Object,
      default: () => ({})
    },
    // 字段映射
    defaultFieldMap: {
      type: Object,
      default: () => ({})
    },
    // 没有审批人时的审批状态
    statusWithoutApprover: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t, { expose: e }) {
    const n = t, r = Yn.local.getItem("token") || "Bearer iking", i = rn({
      nodeType: {
        发起人节点: "INITIATOR",
        审批节点: "APPROVE",
        抄送节点: "CARBON_COPY",
        办理节点: "DISPOSE",
        分支节点: "BRANCH",
        条件节点: "CONDITION",
        结束节点: "END",
        ...n.defaultNodeType
      },
      statusWithoutApprover: {
        自动通过: "AUTO_PASS",
        自动拒绝: "AUTO_REJECT",
        自动转交管理员: "TRANSMIT_TO_MANAGER",
        指定人员审批: "SPECIFIED_USER",
        ...n.statusWithoutApprover
      },
      defaultFile: {
        id: "id",
        // id
        nodeId: "sortOrder",
        // 	排序值
        nodeType: "type",
        // 节点类型
        nodeTypeName: "name",
        // 节点名称
        approveType: "approveType",
        // 审批对象类别名称
        multiExecutorType: "multiExecutorType",
        // 多人审批方式类型
        approveTypeName: "approveTypeName",
        // 审批对象类别名称
        multiExecutorTypeName: "multiExecutorTypeName",
        // 多人审批方式名称
        approvalCategory: "approvalCategory",
        // 审批类型
        isShowAdd: "initiatorSpecify",
        //是否显示添加按钮
        isShowAddCopy: "initiatorSpecifyCarbonCopy",
        // 是否显示抄送人添加按钮
        executorEmpty: "executorEmpty",
        //实际审批人是否为空
        executorEmptyStrategy: "executorEmptyStrategy",
        //为空时的审批类型
        reserveExecutorUsers: "reserveExecutorUsers",
        //executorEmptyStrategy为指定审批人时
        approvePersonList: "executorUsers",
        // 审批执行者用户信息
        initiatorSpecifiedScope: "initiatorSpecifiedScope",
        //默认自选的人
        initiatorSpecifiedScopeType: "initiatorSpecifiedScopeType",
        //自选方式
        singleApproval: "singleApproval",
        //是否单选
        ...n.defaultFieldMap
      },
      multiple: !1,
      chooseType: []
    }), s = async (h) => {
      var d;
      if (h.multiple = !h[i.defaultFile.singleApproval] || h[i.defaultFile.isShowAddCopy], h.handList = h[i.defaultFile.approvePersonList] ? h[i.defaultFile.approvePersonList] : [], h[i.defaultFile.nodeType] === i.nodeType.抄送节点)
        h.handList.forEach((f) => {
          f.elementName = f.userName, f.elementId = f.userId, f.elementType = "USER", f.avatar = f.userAvatar, f.disabled = !0;
        }), h.chooseType = ["dep_user,", "dep", "user", "organization"], h.userList = [], h.depList = [];
      else
        switch (h[i.defaultFile.initiatorSpecifiedScopeType]) {
          case "ALL":
            h.chooseType = ["dep_user"], h.userList = [], h.depList = [];
            break;
          default:
            h.chooseType = ["user"], h.userList = h.userList ? h.userList : (d = h[i.defaultFile.initiatorSpecifiedScope]) == null ? void 0 : d.map((f) => ({
              ...f,
              elementName: (f == null ? void 0 : f.executorName) || (f == null ? void 0 : f.userName),
              elementId: (f == null ? void 0 : f.executorId) || (f == null ? void 0 : f.userId),
              avatar: ((f == null ? void 0 : f.executorAvatar) || (f == null ? void 0 : f.userAvatar)) && o((f == null ? void 0 : f.executorAvatar) || (f == null ? void 0 : f.userAvatar)) || "",
              elementType: "USER"
            }));
        }
      In(() => {
        h.isShow = !0;
      });
    }, o = (h) => {
      let d = "";
      return h.includes("http") || h.includes("https") ? d = h : d = n.loadUrl ? `${n.loadUrl}${h}` : `${location.origin + location.pathname}server/oss/download?fileUrl=${h}`, d;
    }, a = (h) => {
      let d = "";
      switch (h) {
        case i.nodeType.审批节点:
          d = "ikapprove-shenpi";
          break;
        case i.nodeType.办理节点:
          d = "ikapprove-bianji";
          break;
        case i.nodeType.抄送节点:
          d = "ikapprove-chaosong";
          break;
        default:
          d = "ikapprove-ziyuan";
      }
      return `ikapprove ${d}`;
    }, l = (h, d) => {
      n.dataList[d].handList = h.list;
      let g = (n.dataList[d][i.defaultFile.approvePersonList] || []).filter((v) => !v.canDele), p = h.list.map((v) => ({
        ...v,
        userName: v.elementName,
        userAvatar: v.avatar,
        canDele: !0
      }));
      n.dataList[d][i.defaultFile.approvePersonList] = g.concat(p);
    }, c = (h, d) => {
      n.dataList[h][i.defaultFile.approvePersonList].splice(d, 1), n.dataList[h].handList = n.dataList[h][i.defaultFile.approvePersonList];
    };
    return e({ requiredVerification: () => {
      let h = !0;
      return n.dataList.forEach((d) => {
        var f;
        d.required = !1, d[i.defaultFile.nodeType] == i.nodeType.审批节点 && d[i.defaultFile.isShowAdd] && ((f = d[i.defaultFile.approvePersonList]) != null && f.length || (h = !1, d.required = !0));
      }), h;
    } }), (h, d) => (T(), $("div", Sb, [
      (T(!0), $(Ae, null, qe(n.dataList, (f, g) => {
        var p, v, m, x;
        return T(), $("div", {
          class: "content",
          key: f.id
        }, [
          P("div", Eb, [
            P("span", Cb, [
              P("i", {
                class: $e(a(f[i.defaultFile.nodeType]))
              }, null, 2)
            ]),
            P("div", {
              class: "line",
              style: Oe({
                "border-left": g === n.dataList.length - 1 ? "" : "2px solid var(--el-border-color)"
              })
            }, null, 4)
          ]),
          P("div", kb, [
            P("div", null, [
              P("div", null, pe(f[i.defaultFile.nodeTypeName]), 1),
              P("div", Ab, [
                f[i.defaultFile.nodeType] == i.nodeType.抄送节点 ? (T(), $("span", Db, [
                  f[i.defaultFile.approvePersonList].length ? (T(), $("span", Tb, pe(`抄送${f[i.defaultFile.approvePersonList].length}人`), 1)) : re("", !0),
                  f[i.defaultFile.isShowAdd] ? (T(), $("span", Rb, ",可添加抄送人")) : re("", !0)
                ])) : (T(), $("span", Ib, [
                  (p = f[i.defaultFile.approvePersonList]) != null && p.length ? (T(), $("span", Mb, pe(((v = f[i.defaultFile.approvePersonList]) == null ? void 0 : v.length) == 1 ? "1人审批" : `${(m = f[i.defaultFile.approvePersonList]) == null ? void 0 : m.length}人${f[i.defaultFile.multiExecutorTypeName]}`), 1)) : [i.statusWithoutApprover.自动通过, i.statusWithoutApprover.自动拒绝].includes(f[i.defaultFile.approveType]) ? (T(), $("span", Ob, pe(f[i.defaultFile.approveTypeName]), 1)) : f[i.defaultFile.executorEmptyStrategy] && f[i.defaultFile.executorEmpty] ? (T(), $("span", Nb, [
                    Te(" 未找到审批人，"),
                    P("span", null, pe(f[i.defaultFile.executorEmptyStrategy] == i.statusWithoutApprover.自动通过 ? "将自动通过" : f[i.defaultFile.executorEmptyStrategy] == i.statusWithoutApprover.自动转交管理员 ? "自动转交给管理员" : f[i.defaultFile.executorEmptyStrategy] == i.statusWithoutApprover.指定人员审批 ? `将自动转给指定成员${f[i.defaultFile.reserveExecutorUsers] && f[i.defaultFile.reserveExecutorUsers][0].userName}` : ""), 1)
                  ])) : (T(), $("span", {
                    key: 3,
                    class: $e(f.required ? "warn" : "")
                  }, "请选择" + pe(f[i.defaultFile.nodeType] === i.nodeType.办理节点 ? "办理人" : "审批人"), 3))
                ]))
              ])
            ]),
            P("div", Bb, [
              (T(!0), $(Ae, null, qe(f[i.defaultFile.approvePersonList], (b, _) => {
                var w;
                return T(), $("div", {
                  class: "list",
                  key: b.userId
                }, [
                  P("div", null, [
                    P("div", Lb, [
                      b.userAvatar ? (T(), $("img", {
                        key: 0,
                        src: o(b.userAvatar),
                        alt: ""
                      }, null, 8, Pb)) : (T(), $("div", $b, [
                        P("span", null, pe(b.userName.slice(-2)), 1)
                      ])),
                      b.canDele ? (T(), $("i", {
                        key: 2,
                        onClick: (S) => c(g, _),
                        class: "ikapprove ikapprove-shanchu1"
                      }, null, 8, Hb)) : re("", !0)
                    ]),
                    P("div", Fb, pe(b.userName), 1)
                  ]),
                  f[i.defaultFile.isShowAdd] && !(f[i.defaultFile.singleApproval] && ((w = f[i.defaultFile.approvePersonList]) == null ? void 0 : w.length) == 1) ? (T(), $("span", zb, [
                    f[i.defaultFile.nodeType] == i.nodeType.抄送节点 ? (T(), $("span", Vb, "+")) : (T(), $("span", Ub, pe(f[i.defaultFile.multiExecutorType] == "ANY" ? "/" : f[i.defaultFile.multiExecutorType] == "ALL" ? "+" : ">"), 1))
                  ])) : re("", !0)
                ]);
              }), 128)),
              f[i.defaultFile.isShowAdd] && !(f[i.defaultFile.singleApproval] && ((x = f[i.defaultFile.approvePersonList]) == null ? void 0 : x.length) == 1) || f[i.defaultFile.isShowAddCopy] ? (T(), $("span", {
                key: 0,
                class: "addBg",
                onClick: (b) => s(f)
              }, [
                f[i.defaultFile.nodeType] == i.nodeType.审批节点 ? (T(), $("span", Wb)) : re("", !0),
                qb
              ], 8, jb)) : re("", !0),
              M(F(ho), {
                modelValue: f.handList,
                "onUpdate:modelValue": (b) => f.handList = b,
                show: f.isShow,
                "onUpdate:show": (b) => f.isShow = b,
                onOk: (b) => l(b, g),
                multiple: f.multiple,
                "type-option": {
                  dep: "DEPT",
                  user: "USER",
                  role: "ROLE",
                  post: "POST"
                },
                api: {
                  methods: "post",
                  url: t.pickerUrl,
                  headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    Authorization: F(r)
                  }
                },
                "dep-list": f.depList,
                "user-list": f.userList,
                "organization-list": f.organizationList,
                "prop-option": {
                  name: "elementName",
                  id: "elementId",
                  type: "elementType",
                  avatar: "avatar"
                },
                chooseType: f.chooseType
              }, null, 8, ["modelValue", "onUpdate:modelValue", "show", "onUpdate:show", "onOk", "multiple", "api", "dep-list", "user-list", "organization-list", "chooseType"])
            ])
          ])
        ]);
      }), 128))
    ]));
  }
});
const Qb = /* @__PURE__ */ ze(Gb, [["__scopeId", "data-v-cfb7ded0"]]), sk = tt(Qb);
var Ef = {
  code: "zh-cn",
  week: {
    // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
    dow: 1,
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: "上月",
    next: "下月",
    today: "今天",
    year: "年",
    month: "月",
    week: "周",
    day: "日",
    list: "日程"
  },
  weekText: "周",
  allDayText: "全天",
  moreLinkText(t) {
    return "另外 " + t + " 个";
  },
  noEventsText: "没有事件显示"
}, to, we, Cf, Sr, jn, Wc, kf, Af, Is = {}, Df = [], Zb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function An(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Tf(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function O(t, e, n) {
  var r, i, s, o = {};
  for (s in e)
    s == "key" ? r = e[s] : s == "ref" ? i = e[s] : o[s] = e[s];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? to.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (s in t.defaultProps)
      o[s] === void 0 && (o[s] = t.defaultProps[s]);
  return Li(t, o, r, i, null);
}
function Li(t, e, n, r, i) {
  var s = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Cf };
  return i == null && we.vnode != null && we.vnode(s), s;
}
function It() {
  return { current: null };
}
function Ze(t) {
  return t.children;
}
function Kb(t, e, n, r, i) {
  var s;
  for (s in n)
    s === "children" || s === "key" || s in e || Ms(t, s, null, n[s], r);
  for (s in e)
    i && typeof e[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || n[s] === e[s] || Ms(t, s, e[s], n[s], r);
}
function qc(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || Zb.test(e) ? n : n + "px";
}
function Ms(t, e, n, r, i) {
  var s;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || qc(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || qc(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      s = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + s] = n, n ? r || t.addEventListener(e, s ? Gc : Yc, s) : t.removeEventListener(e, s ? Gc : Yc, s);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Yc(t) {
  Sr = !0;
  try {
    return this.l[t.type + !1](we.event ? we.event(t) : t);
  } finally {
    Sr = !1;
  }
}
function Gc(t) {
  Sr = !0;
  try {
    return this.l[t.type + !0](we.event ? we.event(t) : t);
  } finally {
    Sr = !1;
  }
}
function Pt(t, e) {
  this.props = t, this.context = e;
}
function Kr(t, e) {
  if (e == null)
    return t.__ ? Kr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Kr(t) : null;
}
function Rf(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Rf(t);
  }
}
function Xb(t) {
  Sr ? setTimeout(t) : kf(t);
}
function pa(t) {
  (!t.__d && (t.__d = !0) && jn.push(t) && !Os.__r++ || Wc !== we.debounceRendering) && ((Wc = we.debounceRendering) || Xb)(Os);
}
function Os() {
  var t, e, n, r, i, s, o, a;
  for (jn.sort(function(l, c) {
    return l.__v.__b - c.__v.__b;
  }); t = jn.shift(); )
    t.__d && (e = jn.length, r = void 0, i = void 0, o = (s = (n = t).__v).__e, (a = n.__P) && (r = [], (i = An({}, s)).__v = s.__v + 1, Ga(a, s, i, n.__n, a.ownerSVGElement !== void 0, s.__h != null ? [o] : null, r, o ?? Kr(s), s.__h), Bf(r, s), s.__e != o && Rf(s)), jn.length > e && jn.sort(function(l, c) {
      return l.__v.__b - c.__v.__b;
    }));
  Os.__r = 0;
}
function If(t, e, n, r, i, s, o, a, l, c) {
  var u, h, d, f, g, p, v, m = r && r.__k || Df, x = m.length;
  for (n.__k = [], u = 0; u < e.length; u++)
    if ((f = n.__k[u] = (f = e[u]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? Li(null, f, null, null, f) : Array.isArray(f) ? Li(Ze, { children: f }, null, null, null) : f.__b > 0 ? Li(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
      if (f.__ = n, f.__b = n.__b + 1, (d = m[u]) === null || d && f.key == d.key && f.type === d.type)
        m[u] = void 0;
      else
        for (h = 0; h < x; h++) {
          if ((d = m[h]) && f.key == d.key && f.type === d.type) {
            m[h] = void 0;
            break;
          }
          d = null;
        }
      Ga(t, f, d = d || Is, i, s, o, a, l, c), g = f.__e, (h = f.ref) && d.ref != h && (v || (v = []), d.ref && v.push(d.ref, null, f), v.push(h, f.__c || g, f)), g != null ? (p == null && (p = g), typeof f.type == "function" && f.__k === d.__k ? f.__d = l = Mf(f, l, t) : l = Of(t, f, d, m, g, l), typeof n.type == "function" && (n.__d = l)) : l && d.__e == l && l.parentNode != t && (l = Kr(d));
    }
  for (n.__e = p, u = x; u--; )
    m[u] != null && (typeof n.type == "function" && m[u].__e != null && m[u].__e == n.__d && (n.__d = Nf(r).nextSibling), Pf(m[u], m[u]));
  if (v)
    for (u = 0; u < v.length; u++)
      Lf(v[u], v[++u], v[++u]);
}
function Mf(t, e, n) {
  for (var r, i = t.__k, s = 0; i && s < i.length; s++)
    (r = i[s]) && (r.__ = t, e = typeof r.type == "function" ? Mf(r, e, n) : Of(n, r, r, i, r.__e, e));
  return e;
}
function Ns(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(n) {
    Ns(n, e);
  }) : e.push(t)), e;
}
function Of(t, e, n, r, i, s) {
  var o, a, l;
  if (e.__d !== void 0)
    o = e.__d, e.__d = void 0;
  else if (n == null || i != s || i.parentNode == null)
    e:
      if (s == null || s.parentNode !== t)
        t.appendChild(i), o = null;
      else {
        for (a = s, l = 0; (a = a.nextSibling) && l < r.length; l += 1)
          if (a == i)
            break e;
        t.insertBefore(i, s), o = s;
      }
  return o !== void 0 ? o : i.nextSibling;
}
function Nf(t) {
  var e, n, r;
  if (t.type == null || typeof t.type == "string")
    return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--)
      if ((n = t.__k[e]) && (r = Nf(n)))
        return r;
  }
  return null;
}
function Ga(t, e, n, r, i, s, o, a, l) {
  var c, u, h, d, f, g, p, v, m, x, b, _, w, S, y, E = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = e.__e = n.__e, e.__h = null, s = [a]), (c = we.__b) && c(e);
  try {
    e:
      if (typeof E == "function") {
        if (v = e.props, m = (c = E.contextType) && r[c.__c], x = c ? m ? m.props.value : c.__ : r, n.__c ? p = (u = e.__c = n.__c).__ = u.__E : ("prototype" in E && E.prototype.render ? e.__c = u = new E(v, x) : (e.__c = u = new Pt(v, x), u.constructor = E, u.render = ey), m && m.sub(u), u.props = v, u.state || (u.state = {}), u.context = x, u.__n = r, h = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), E.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = An({}, u.__s)), An(u.__s, E.getDerivedStateFromProps(v, u.__s))), d = u.props, f = u.state, u.__v = e, h)
          E.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (E.getDerivedStateFromProps == null && v !== d && u.componentWillReceiveProps != null && u.componentWillReceiveProps(v, x), !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(v, u.__s, x) === !1 || e.__v === n.__v) {
            for (e.__v !== n.__v && (u.props = v, u.state = u.__s, u.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(I) {
              I && (I.__ = e);
            }), b = 0; b < u._sb.length; b++)
              u.__h.push(u._sb[b]);
            u._sb = [], u.__h.length && o.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(v, u.__s, x), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(d, f, g);
          });
        }
        if (u.context = x, u.props = v, u.__P = t, _ = we.__r, w = 0, "prototype" in E && E.prototype.render) {
          for (u.state = u.__s, u.__d = !1, _ && _(e), c = u.render(u.props, u.state, u.context), S = 0; S < u._sb.length; S++)
            u.__h.push(u._sb[S]);
          u._sb = [];
        } else
          do
            u.__d = !1, _ && _(e), c = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++w < 25);
        u.state = u.__s, u.getChildContext != null && (r = An(An({}, r), u.getChildContext())), h || u.getSnapshotBeforeUpdate == null || (g = u.getSnapshotBeforeUpdate(d, f)), y = c != null && c.type === Ze && c.key == null ? c.props.children : c, If(t, Array.isArray(y) ? y : [y], e, n, r, i, s, o, a, l), u.base = e.__e, e.__h = null, u.__h.length && o.push(u), p && (u.__E = u.__ = null), u.__e = !1;
      } else
        s == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Jb(n.__e, e, n, r, i, s, o, l);
    (c = we.diffed) && c(e);
  } catch (I) {
    e.__v = null, (l || s != null) && (e.__e = a, e.__h = !!l, s[s.indexOf(a)] = null), we.__e(I, e, n);
  }
}
function Bf(t, e) {
  we.__c && we.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      we.__e(r, n.__v);
    }
  });
}
function Jb(t, e, n, r, i, s, o, a) {
  var l, c, u, h = n.props, d = e.props, f = e.type, g = 0;
  if (f === "svg" && (i = !0), s != null) {
    for (; g < s.length; g++)
      if ((l = s[g]) && "setAttribute" in l == !!f && (f ? l.localName === f : l.nodeType === 3)) {
        t = l, s[g] = null;
        break;
      }
  }
  if (t == null) {
    if (f === null)
      return document.createTextNode(d);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, d.is && d), s = null, a = !1;
  }
  if (f === null)
    h === d || a && t.data === d || (t.data = d);
  else {
    if (s = s && to.call(t.childNodes), c = (h = n.props || Is).dangerouslySetInnerHTML, u = d.dangerouslySetInnerHTML, !a) {
      if (s != null)
        for (h = {}, g = 0; g < t.attributes.length; g++)
          h[t.attributes[g].name] = t.attributes[g].value;
      (u || c) && (u && (c && u.__html == c.__html || u.__html === t.innerHTML) || (t.innerHTML = u && u.__html || ""));
    }
    if (Kb(t, d, h, i, a), u)
      e.__k = [];
    else if (g = e.props.children, If(t, Array.isArray(g) ? g : [g], e, n, r, i && f !== "foreignObject", s, o, s ? s[0] : n.__k && Kr(n, 0), a), s != null)
      for (g = s.length; g--; )
        s[g] != null && Tf(s[g]);
    a || ("value" in d && (g = d.value) !== void 0 && (g !== t.value || f === "progress" && !g || f === "option" && g !== h.value) && Ms(t, "value", g, h.value, !1), "checked" in d && (g = d.checked) !== void 0 && g !== t.checked && Ms(t, "checked", g, h.checked, !1));
  }
  return t;
}
function Lf(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    we.__e(r, n);
  }
}
function Pf(t, e, n) {
  var r, i;
  if (we.unmount && we.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || Lf(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (s) {
        we.__e(s, e);
      }
    r.base = r.__P = null, t.__c = void 0;
  }
  if (r = t.__k)
    for (i = 0; i < r.length; i++)
      r[i] && Pf(r[i], e, n || typeof t.type != "function");
  n || t.__e == null || Tf(t.__e), t.__ = t.__e = t.__d = void 0;
}
function ey(t, e, n) {
  return this.constructor(t, n);
}
function Xr(t, e, n) {
  var r, i, s;
  we.__ && we.__(t, e), i = (r = typeof n == "function") ? null : n && n.__k || e.__k, s = [], Ga(e, t = (!r && n || e).__k = O(Ze, null, [t]), i || Is, Is, e.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : e.firstChild ? to.call(e.childNodes) : null, s, !r && n ? n : i ? i.__e : e.firstChild, r), Bf(s, t);
}
function ty(t, e) {
  var n = { __c: e = "__cC" + Af++, __: t, Consumer: function(r, i) {
    return r.children(i);
  }, Provider: function(r) {
    var i, s;
    return this.getChildContext || (i = [], (s = {})[e] = this, this.getChildContext = function() {
      return s;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value !== o.value && i.some(function(a) {
        a.__e = !0, pa(a);
      });
    }, this.sub = function(o) {
      i.push(o);
      var a = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        i.splice(i.indexOf(o), 1), a && a.call(o);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
to = Df.slice, we = { __e: function(t, e, n, r) {
  for (var i, s, o; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((s = i.constructor) && s.getDerivedStateFromError != null && (i.setState(s.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        t = a;
      }
  throw t;
} }, Cf = 0, Sr = !1, Pt.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = An({}, this.state), typeof t == "function" && (t = t(An({}, n), this.props)), t && An(n, t), t != null && this.__v && (e && this._sb.push(e), pa(this));
}, Pt.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), pa(this));
}, Pt.prototype.render = Ze, jn = [], kf = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Os.__r = 0, Af = 0;
var en, Mo, Qc, $f = [], Oo = [], Zc = we.__b, Kc = we.__r, Xc = we.diffed, Jc = we.__c, eu = we.unmount;
function ny() {
  for (var t; t = $f.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(Pi), t.__H.__h.forEach(ga), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], we.__e(e, t.__v);
      }
}
we.__b = function(t) {
  en = null, Zc && Zc(t);
}, we.__r = function(t) {
  Kc && Kc(t);
  var e = (en = t.__c).__H;
  e && (Mo === en ? (e.__h = [], en.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Oo, n.__N = n.i = void 0;
  })) : (e.__h.forEach(Pi), e.__h.forEach(ga), e.__h = [])), Mo = en;
}, we.diffed = function(t) {
  Xc && Xc(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && ($f.push(e) !== 1 && Qc === we.requestAnimationFrame || ((Qc = we.requestAnimationFrame) || ry)(ny)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Oo && (n.__ = n.__V), n.i = void 0, n.__V = Oo;
  })), Mo = en = null;
}, we.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(Pi), n.__h = n.__h.filter(function(r) {
        return !r.__ || ga(r);
      });
    } catch (r) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], we.__e(r, n.__v);
    }
  }), Jc && Jc(t, e);
}, we.unmount = function(t) {
  eu && eu(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Pi(r);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && we.__e(e, n.__v));
};
var tu = typeof requestAnimationFrame == "function";
function ry(t) {
  var e, n = function() {
    clearTimeout(r), tu && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 100);
  tu && (e = requestAnimationFrame(n));
}
function Pi(t) {
  var e = en, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), en = e;
}
function ga(t) {
  var e = en;
  t.__c = t.__(), en = e;
}
function iy(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function nu(t, e) {
  for (var n in t)
    if (n !== "__source" && !(n in e))
      return !0;
  for (var r in e)
    if (r !== "__source" && t[r] !== e[r])
      return !0;
  return !1;
}
function ru(t) {
  this.props = t;
}
(ru.prototype = new Pt()).isPureReactComponent = !0, ru.prototype.shouldComponentUpdate = function(t, e) {
  return nu(this.props, t) || nu(this.state, e);
};
var iu = we.__b;
we.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), iu && iu(t);
};
var sy = we.__e;
we.__e = function(t, e, n, r) {
  if (t.then) {
    for (var i, s = e; s = s.__; )
      if ((i = s.__c) && i.__c)
        return e.__e == null && (e.__e = n.__e, e.__k = n.__k), i.__c(t, e);
  }
  sy(t, e, n, r);
};
var su = we.unmount;
function Hf(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), t.__c.__H = null), (t = iy({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
    return Hf(r, e, n);
  })), t;
}
function Ff(t, e, n) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
    return Ff(r, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t;
}
function No() {
  this.__u = 0, this.t = null, this.__b = null;
}
function zf(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function _i() {
  this.u = null, this.o = null;
}
we.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), su && su(t);
}, (No.prototype = new Pt()).__c = function(t, e) {
  var n = e.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var i = zf(r.__v), s = !1, o = function() {
    s || (s = !0, n.__R = null, i ? i(a) : a());
  };
  n.__R = o;
  var a = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var c = r.state.__a;
        r.__v.__k[0] = Ff(c, c.__c.__P, c.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.t.pop(); )
        u.forceUpdate();
    }
  }, l = e.__h === !0;
  r.__u++ || l || r.setState({ __a: r.__b = r.__v.__k[0] }), t.then(o, o);
}, No.prototype.componentWillUnmount = function() {
  this.t = [];
}, No.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Hf(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var i = e.__a && O(Ze, null, t.fallback);
  return i && (i.__h = null), [O(Ze, null, e.__a ? null : t.children), i];
};
var ou = function(t, e, n) {
  if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
    for (n = t.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      t.u = n = n[2];
    }
};
function oy(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function ay(t) {
  var e = this, n = t.i;
  e.componentWillUnmount = function() {
    Xr(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== n && e.componentWillUnmount(), t.__v ? (e.l || (e.i = n, e.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, insertBefore: function(r, i) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), e.i.removeChild(r);
  } }), Xr(O(oy, { context: e.context }, t.__v), e.l)) : e.l && e.componentWillUnmount();
}
function ly(t, e) {
  var n = O(ay, { __v: t, i: e });
  return n.containerInfo = e, n;
}
(_i.prototype = new Pt()).__a = function(t) {
  var e = this, n = zf(e.__v), r = e.o.get(t);
  return r[0]++, function(i) {
    var s = function() {
      e.props.revealOrder ? (r.push(i), ou(e, t, r)) : i();
    };
    n ? n(s) : s();
  };
}, _i.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = Ns(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; )
    this.o.set(e[n], this.u = [1, 0, this.u]);
  return t.children;
}, _i.prototype.componentDidUpdate = _i.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, n) {
    ou(t, n, e);
  });
};
var cy = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, uy = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, dy = typeof document < "u", fy = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
};
Pt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(Pt.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var au = we.event;
function hy() {
}
function py() {
  return this.cancelBubble;
}
function gy() {
  return this.defaultPrevented;
}
we.event = function(t) {
  return au && (t = au(t)), t.persist = hy, t.isPropagationStopped = py, t.isDefaultPrevented = gy, t.nativeEvent = t;
};
var lu = { configurable: !0, get: function() {
  return this.class;
} }, cu = we.vnode;
we.vnode = function(t) {
  var e = t.type, n = t.props, r = n;
  if (typeof e == "string") {
    var i = e.indexOf("-") === -1;
    for (var s in r = {}, n) {
      var o = n[s];
      dy && s === "children" && e === "noscript" || s === "value" && "defaultValue" in n && o == null || (s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && o === !0 ? o = "" : /ondoubleclick/i.test(s) ? s = "ondblclick" : /^onchange(textarea|input)/i.test(s + e) && !fy(n.type) ? s = "oninput" : /^onfocus$/i.test(s) ? s = "onfocusin" : /^onblur$/i.test(s) ? s = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s) ? s = s.toLowerCase() : i && uy.test(s) ? s = s.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : o === null && (o = void 0), /^oninput$/i.test(s) && (s = s.toLowerCase(), r[s] && (s = "oninputCapture")), r[s] = o);
    }
    e == "select" && r.multiple && Array.isArray(r.value) && (r.value = Ns(n.children).forEach(function(a) {
      a.props.selected = r.value.indexOf(a.props.value) != -1;
    })), e == "select" && r.defaultValue != null && (r.value = Ns(n.children).forEach(function(a) {
      a.props.selected = r.multiple ? r.defaultValue.indexOf(a.props.value) != -1 : r.defaultValue == a.props.value;
    })), t.props = r, n.class != n.className && (lu.enumerable = "className" in n, n.className != null && (r.class = n.className), Object.defineProperty(r, "className", lu));
  }
  t.$$typeof = cy, cu && cu(t);
};
var uu = we.__r;
we.__r = function(t) {
  uu && uu(t), t.__c;
};
const Vf = [], va = /* @__PURE__ */ new Map();
function Qa(t) {
  Vf.push(t), va.forEach((e) => {
    jf(e, t);
  });
}
function vy(t) {
  t.isConnected && Uf(t.getRootNode());
}
function Uf(t) {
  let e = va.get(t);
  if (!e || !e.isConnected) {
    if (e = t.querySelector("style[data-fullcalendar]"), !e) {
      e = document.createElement("style"), e.setAttribute("data-fullcalendar", "");
      const n = by();
      n && (e.nonce = n);
      const r = t === document ? document.head : t, i = t === document ? r.querySelector("script,link[rel=stylesheet],link[as=style],style") : r.firstChild;
      r.insertBefore(e, i);
    }
    va.set(t, e), my(e);
  }
}
function my(t) {
  for (const e of Vf)
    jf(t, e);
}
function jf(t, e) {
  const { sheet: n } = t, r = n.cssRules.length;
  e.split("}").forEach((i, s) => {
    i = i.trim(), i && n.insertRule(i + "}", r + s);
  });
}
let Bo;
function by() {
  return Bo === void 0 && (Bo = yy()), Bo;
}
function yy() {
  const t = document.querySelector('meta[name="csp-nonce"]');
  if (t && t.hasAttribute("content"))
    return t.getAttribute("content");
  const e = document.querySelector("script[nonce]");
  return e && e.nonce || "";
}
typeof document < "u" && Uf(document);
var xy = ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}';
Qa(xy);
function Za(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Et(t, e) {
  if (t.closest)
    return t.closest(e);
  if (!document.documentElement.contains(t))
    return null;
  do {
    if (_y(t, e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === 1);
  return null;
}
function _y(t, e) {
  return (t.matches || t.matchesSelector || t.msMatchesSelector).call(t, e);
}
function wy(t, e) {
  let n = t instanceof HTMLElement ? [t] : t, r = [];
  for (let i = 0; i < n.length; i += 1) {
    let s = n[i].querySelectorAll(e);
    for (let o = 0; o < s.length; o += 1)
      r.push(s[o]);
  }
  return r;
}
const Sy = /(top|left|right|bottom|width|height)$/i;
function jr(t, e) {
  for (let n in e)
    Wf(t, n, e[n]);
}
function Wf(t, e, n) {
  n == null ? t.style[e] = "" : typeof n == "number" && Sy.test(e) ? t.style[e] = `${n}px` : t.style[e] = n;
}
function qf(t) {
  var e, n;
  return (n = (e = t.composedPath) === null || e === void 0 ? void 0 : e.call(t)[0]) !== null && n !== void 0 ? n : t.target;
}
let du = 0;
function no() {
  return du += 1, "fc-dom-" + du;
}
function ro(t) {
  t.preventDefault();
}
function Ey(t, e) {
  return (n) => {
    let r = Et(n.target, t);
    r && e.call(r, n, r);
  };
}
function Yf(t, e, n, r) {
  let i = Ey(n, r);
  return t.addEventListener(e, i), () => {
    t.removeEventListener(e, i);
  };
}
function Cy(t, e, n, r) {
  let i;
  return Yf(t, "mouseover", e, (s, o) => {
    if (o !== i) {
      i = o, n(s, o);
      let a = (l) => {
        i = null, r(l, o), o.removeEventListener("mouseleave", a);
      };
      o.addEventListener("mouseleave", a);
    }
  });
}
const fu = [
  "webkitTransitionEnd",
  "otransitionend",
  "oTransitionEnd",
  "msTransitionEnd",
  "transitionend"
];
function ky(t, e) {
  let n = (r) => {
    e(r), fu.forEach((i) => {
      t.removeEventListener(i, n);
    });
  };
  fu.forEach((r) => {
    t.addEventListener(r, n);
  });
}
function Gf(t) {
  return Object.assign({ onClick: t }, Qf(t));
}
function Qf(t) {
  return {
    tabIndex: 0,
    onKeyDown(e) {
      (e.key === "Enter" || e.key === " ") && (t(e), e.preventDefault());
    }
  };
}
let hu = 0;
function ir() {
  return hu += 1, String(hu);
}
function Ka() {
  document.body.classList.add("fc-not-allowed");
}
function Xa() {
  document.body.classList.remove("fc-not-allowed");
}
function Ay(t) {
  t.style.userSelect = "none", t.addEventListener("selectstart", ro);
}
function Dy(t) {
  t.style.userSelect = "", t.removeEventListener("selectstart", ro);
}
function Ty(t) {
  t.addEventListener("contextmenu", ro);
}
function Ry(t) {
  t.removeEventListener("contextmenu", ro);
}
function Iy(t) {
  let e = [], n = [], r, i;
  for (typeof t == "string" ? n = t.split(/\s*,\s*/) : typeof t == "function" ? n = [t] : Array.isArray(t) && (n = t), r = 0; r < n.length; r += 1)
    i = n[r], typeof i == "string" ? e.push(i.charAt(0) === "-" ? { field: i.substring(1), order: -1 } : { field: i, order: 1 }) : typeof i == "function" && e.push({ func: i });
  return e;
}
function My(t, e, n) {
  let r, i;
  for (r = 0; r < n.length; r += 1)
    if (i = Oy(t, e, n[r]), i)
      return i;
  return 0;
}
function Oy(t, e, n) {
  return n.func ? n.func(t, e) : Ny(t[n.field], e[n.field]) * (n.order || 1);
}
function Ny(t, e) {
  return !t && !e ? 0 : e == null ? -1 : t == null ? 1 : typeof t == "string" || typeof e == "string" ? String(t).localeCompare(String(e)) : t - e;
}
function gr(t, e) {
  let n = String(t);
  return "000".substr(0, e - n.length) + n;
}
function Wr(t, e, n) {
  return typeof t == "function" ? t(...e) : typeof t == "string" ? e.reduce((r, i, s) => r.replace("$" + s, i || ""), t) : n;
}
function By(t, e) {
  return t - e;
}
function $i(t) {
  return t % 1 === 0;
}
function Ly(t) {
  let e = t.querySelector(".fc-scrollgrid-shrink-frame"), n = t.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!e)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!n)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return t.getBoundingClientRect().width - e.getBoundingClientRect().width + // the cell padding+border
  n.getBoundingClientRect().width;
}
const pu = ["years", "months", "days", "milliseconds"], Py = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function Pe(t, e) {
  return typeof t == "string" ? $y(t) : typeof t == "object" && t ? gu(t) : typeof t == "number" ? gu({ [e || "milliseconds"]: t }) : null;
}
function $y(t) {
  let e = Py.exec(t);
  if (e) {
    let n = e[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: n * (e[2] ? parseInt(e[2], 10) : 0),
      milliseconds: n * ((e[3] ? parseInt(e[3], 10) : 0) * 60 * 60 * 1e3 + // hours
      (e[4] ? parseInt(e[4], 10) : 0) * 60 * 1e3 + // minutes
      (e[5] ? parseInt(e[5], 10) : 0) * 1e3 + // seconds
      (e[6] ? parseInt(e[6], 10) : 0))
    };
  }
  return null;
}
function gu(t) {
  let e = {
    years: t.years || t.year || 0,
    months: t.months || t.month || 0,
    days: t.days || t.day || 0,
    milliseconds: (t.hours || t.hour || 0) * 60 * 60 * 1e3 + // hours
    (t.minutes || t.minute || 0) * 60 * 1e3 + // minutes
    (t.seconds || t.second || 0) * 1e3 + // seconds
    (t.milliseconds || t.millisecond || t.ms || 0)
    // ms
  }, n = t.weeks || t.week;
  return n && (e.days += n * 7, e.specifiedWeeks = !0), e;
}
function Hy(t, e) {
  return t.years === e.years && t.months === e.months && t.days === e.days && t.milliseconds === e.milliseconds;
}
function ma(t, e) {
  return {
    years: t.years + e.years,
    months: t.months + e.months,
    days: t.days + e.days,
    milliseconds: t.milliseconds + e.milliseconds
  };
}
function Fy(t, e) {
  return {
    years: t.years - e.years,
    months: t.months - e.months,
    days: t.days - e.days,
    milliseconds: t.milliseconds - e.milliseconds
  };
}
function zy(t, e) {
  return {
    years: t.years * e,
    months: t.months * e,
    days: t.days * e,
    milliseconds: t.milliseconds * e
  };
}
function Vy(t) {
  return vr(t) / 365;
}
function Uy(t) {
  return vr(t) / 30;
}
function vr(t) {
  return Qt(t) / 864e5;
}
function Qt(t) {
  return t.years * (365 * 864e5) + t.months * (30 * 864e5) + t.days * 864e5 + t.milliseconds;
}
function Ja(t, e) {
  let n = null;
  for (let r = 0; r < pu.length; r += 1) {
    let i = pu[r];
    if (e[i]) {
      let s = t[i] / e[i];
      if (!$i(s) || n !== null && n !== s)
        return null;
      n = s;
    } else if (t[i])
      return null;
  }
  return n;
}
function ba(t) {
  let e = t.milliseconds;
  if (e) {
    if (e % 1e3 !== 0)
      return { unit: "millisecond", value: e };
    if (e % (1e3 * 60) !== 0)
      return { unit: "second", value: e / 1e3 };
    if (e % (1e3 * 60 * 60) !== 0)
      return { unit: "minute", value: e / (1e3 * 60) };
    if (e)
      return { unit: "hour", value: e / (1e3 * 60 * 60) };
  }
  return t.days ? t.specifiedWeeks && t.days % 7 === 0 ? { unit: "week", value: t.days / 7 } : { unit: "day", value: t.days } : t.months ? { unit: "month", value: t.months } : t.years ? { unit: "year", value: t.years } : { unit: "millisecond", value: 0 };
}
const { hasOwnProperty: Bs } = Object.prototype;
function el(t, e) {
  let n = {};
  if (e) {
    for (let r in e)
      if (e[r] === Vn) {
        let i = [];
        for (let s = t.length - 1; s >= 0; s -= 1) {
          let o = t[s][r];
          if (typeof o == "object" && o)
            i.unshift(o);
          else if (o !== void 0) {
            n[r] = o;
            break;
          }
        }
        i.length && (n[r] = el(i));
      }
  }
  for (let r = t.length - 1; r >= 0; r -= 1) {
    let i = t[r];
    for (let s in i)
      s in n || (n[s] = i[s]);
  }
  return n;
}
function Kn(t, e) {
  let n = {};
  for (let r in t)
    e(t[r], r) && (n[r] = t[r]);
  return n;
}
function xn(t, e) {
  let n = {};
  for (let r in t)
    n[r] = e(t[r], r);
  return n;
}
function Zf(t) {
  let e = {};
  for (let n of t)
    e[n] = !0;
  return e;
}
function tl(t) {
  let e = [];
  for (let n in t)
    e.push(t[n]);
  return e;
}
function an(t, e) {
  if (t === e)
    return !0;
  for (let n in t)
    if (Bs.call(t, n) && !(n in e))
      return !1;
  for (let n in e)
    if (Bs.call(e, n) && t[n] !== e[n])
      return !1;
  return !0;
}
const jy = /^on[A-Z]/;
function Wy(t, e) {
  const n = ya(t, e);
  for (let r of n)
    if (!jy.test(r))
      return !1;
  return !0;
}
function ya(t, e) {
  let n = [];
  for (let r in t)
    Bs.call(t, r) && (r in e || n.push(r));
  for (let r in e)
    Bs.call(e, r) && t[r] !== e[r] && n.push(r);
  return n;
}
function Lo(t, e, n = {}) {
  if (t === e)
    return !0;
  for (let r in e)
    if (!(r in t && qy(t[r], e[r], n[r])))
      return !1;
  for (let r in t)
    if (!(r in e))
      return !1;
  return !0;
}
function qy(t, e, n) {
  return t === e || n === !0 ? !0 : n ? n(t, e) : !1;
}
function Yy(t, e = 0, n, r = 1) {
  let i = [];
  n == null && (n = Object.keys(t).length);
  for (let s = e; s < n; s += r) {
    let o = t[s];
    o !== void 0 && i.push(o);
  }
  return i;
}
function On(t, e, n) {
  if (t === e)
    return !0;
  let r = t.length, i;
  if (r !== e.length)
    return !1;
  for (i = 0; i < r; i += 1)
    if (!(n ? n(t[i], e[i]) : t[i] === e[i]))
      return !1;
  return !0;
}
const Gy = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function vu(t, e) {
  let n = Dn(t);
  return n[2] += e * 7, Nt(n);
}
function Ct(t, e) {
  let n = Dn(t);
  return n[2] += e, Nt(n);
}
function Nn(t, e) {
  let n = Dn(t);
  return n[6] += e, Nt(n);
}
function Qy(t, e) {
  return sr(t, e) / 7;
}
function sr(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60 * 24);
}
function Zy(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60);
}
function Ky(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60);
}
function Xy(t, e) {
  return (e.valueOf() - t.valueOf()) / 1e3;
}
function Jy(t, e) {
  let n = Qe(t), r = Qe(e);
  return {
    years: 0,
    months: 0,
    days: Math.round(sr(n, r)),
    milliseconds: e.valueOf() - r.valueOf() - (t.valueOf() - n.valueOf())
  };
}
function e3(t, e) {
  let n = Ls(t, e);
  return n !== null && n % 7 === 0 ? n / 7 : null;
}
function Ls(t, e) {
  return Tn(t) === Tn(e) ? Math.round(sr(t, e)) : null;
}
function Qe(t) {
  return Nt([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ]);
}
function t3(t) {
  return Nt([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours()
  ]);
}
function n3(t) {
  return Nt([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes()
  ]);
}
function r3(t) {
  return Nt([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds()
  ]);
}
function i3(t, e, n) {
  let r = t.getUTCFullYear(), i = Po(t, r, e, n);
  if (i < 1)
    return Po(t, r - 1, e, n);
  let s = Po(t, r + 1, e, n);
  return s >= 1 ? Math.min(i, s) : i;
}
function Po(t, e, n, r) {
  let i = Nt([e, 0, 1 + s3(e, n, r)]), s = Qe(t), o = Math.round(sr(i, s));
  return Math.floor(o / 7) + 1;
}
function s3(t, e, n) {
  let r = 7 + e - n;
  return -((7 + Nt([t, 0, r]).getUTCDay() - e) % 7) + r - 1;
}
function mu(t) {
  return [
    t.getFullYear(),
    t.getMonth(),
    t.getDate(),
    t.getHours(),
    t.getMinutes(),
    t.getSeconds(),
    t.getMilliseconds()
  ];
}
function bu(t) {
  return new Date(
    t[0],
    t[1] || 0,
    t[2] == null ? 1 : t[2],
    // day of month
    t[3] || 0,
    t[4] || 0,
    t[5] || 0
  );
}
function Dn(t) {
  return [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds(),
    t.getUTCMilliseconds()
  ];
}
function Nt(t) {
  return t.length === 1 && (t = t.concat([0])), new Date(Date.UTC(...t));
}
function Kf(t) {
  return !isNaN(t.valueOf());
}
function Tn(t) {
  return t.getUTCHours() * 1e3 * 60 * 60 + t.getUTCMinutes() * 1e3 * 60 + t.getUTCSeconds() * 1e3 + t.getUTCMilliseconds();
}
function Xf(t, e, n = !1) {
  let r = t.toISOString();
  return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (e == null ? r = r.replace("Z", "") : e !== 0 && (r = r.replace("Z", rl(e, !0)))), r;
}
function nl(t) {
  return t.toISOString().replace(/T.*$/, "");
}
function o3(t) {
  return t.toISOString().match(/^\d{4}-\d{2}/)[0];
}
function a3(t) {
  return gr(t.getUTCHours(), 2) + ":" + gr(t.getUTCMinutes(), 2) + ":" + gr(t.getUTCSeconds(), 2);
}
function rl(t, e = !1) {
  let n = t < 0 ? "-" : "+", r = Math.abs(t), i = Math.floor(r / 60), s = Math.round(r % 60);
  return e ? `${n + gr(i, 2)}:${gr(s, 2)}` : `GMT${n}${i}${s ? `:${gr(s, 2)}` : ""}`;
}
function Ce(t, e, n) {
  let r, i;
  return function(...s) {
    if (!r)
      i = t.apply(this, s);
    else if (!On(r, s)) {
      n && n(i);
      let o = t.apply(this, s);
      (!e || !e(o, i)) && (i = o);
    }
    return r = s, i;
  };
}
function Hi(t, e, n) {
  let r, i;
  return (s) => {
    if (!r)
      i = t.call(this, s);
    else if (!an(r, s)) {
      n && n(i);
      let o = t.call(this, s);
      (!e || !e(o, i)) && (i = o);
    }
    return r = s, i;
  };
}
const yu = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
}, Ps = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, wi = /\s*([ap])\.?m\.?/i, l3 = /,/g, c3 = /\s+/g, u3 = /\u200e/g, d3 = /UTC|GMT/;
class f3 {
  constructor(e) {
    let n = {}, r = {}, i = 0;
    for (let s in e)
      s in yu ? (r[s] = e[s], i = Math.max(yu[s], i)) : (n[s] = e[s], s in Ps && (i = Math.max(Ps[s], i)));
    this.standardDateProps = n, this.extendedSettings = r, this.severity = i, this.buildFormattingFunc = Ce(xu);
  }
  format(e, n) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, n)(e);
  }
  formatRange(e, n, r, i) {
    let { standardDateProps: s, extendedSettings: o } = this, a = b3(e.marker, n.marker, r.calendarSystem);
    if (!a)
      return this.format(e, r);
    let l = a;
    l > 1 && // the two dates are different in a way that's larger scale than time
    (s.year === "numeric" || s.year === "2-digit") && (s.month === "numeric" || s.month === "2-digit") && (s.day === "numeric" || s.day === "2-digit") && (l = 1);
    let c = this.format(e, r), u = this.format(n, r);
    if (c === u)
      return c;
    let h = y3(s, l), d = xu(h, o, r), f = d(e), g = d(n), p = x3(c, f, u, g), v = o.separator || i || r.defaultSeparator || "";
    return p ? p.before + f + v + g + p.after : c + v + u;
  }
  getLargestUnit() {
    switch (this.severity) {
      case 7:
      case 6:
      case 5:
        return "year";
      case 4:
        return "month";
      case 3:
        return "week";
      case 2:
        return "day";
      default:
        return "time";
    }
  }
}
function xu(t, e, n) {
  let r = Object.keys(t).length;
  return r === 1 && t.timeZoneName === "short" ? (i) => rl(i.timeZoneOffset) : r === 0 && e.week ? (i) => m3(n.computeWeekNumber(i.marker), n.weekText, n.weekTextLong, n.locale, e.week) : h3(t, e, n);
}
function h3(t, e, n) {
  t = Object.assign({}, t), e = Object.assign({}, e), p3(t, e), t.timeZone = "UTC";
  let r = new Intl.DateTimeFormat(n.locale.codes, t), i;
  if (e.omitZeroMinute) {
    let s = Object.assign({}, t);
    delete s.minute, i = new Intl.DateTimeFormat(n.locale.codes, s);
  }
  return (s) => {
    let { marker: o } = s, a;
    i && !o.getUTCMinutes() ? a = i : a = r;
    let l = a.format(o);
    return g3(l, s, t, e, n);
  };
}
function p3(t, e) {
  t.timeZoneName && (t.hour || (t.hour = "2-digit"), t.minute || (t.minute = "2-digit")), t.timeZoneName === "long" && (t.timeZoneName = "short"), e.omitZeroMinute && (t.second || t.millisecond) && delete e.omitZeroMinute;
}
function g3(t, e, n, r, i) {
  return t = t.replace(u3, ""), n.timeZoneName === "short" && (t = v3(t, i.timeZone === "UTC" || e.timeZoneOffset == null ? "UTC" : (
    // important to normalize for IE, which does "GMT"
    rl(e.timeZoneOffset)
  ))), r.omitCommas && (t = t.replace(l3, "").trim()), r.omitZeroMinute && (t = t.replace(":00", "")), r.meridiem === !1 ? t = t.replace(wi, "").trim() : r.meridiem === "narrow" ? t = t.replace(wi, (s, o) => o.toLocaleLowerCase()) : r.meridiem === "short" ? t = t.replace(wi, (s, o) => `${o.toLocaleLowerCase()}m`) : r.meridiem === "lowercase" && (t = t.replace(wi, (s) => s.toLocaleLowerCase())), t = t.replace(c3, " "), t = t.trim(), t;
}
function v3(t, e) {
  let n = !1;
  return t = t.replace(d3, () => (n = !0, e)), n || (t += ` ${e}`), t;
}
function m3(t, e, n, r, i) {
  let s = [];
  return i === "long" ? s.push(n) : (i === "short" || i === "narrow") && s.push(e), (i === "long" || i === "short") && s.push(" "), s.push(r.simpleNumberFormat.format(t)), r.options.direction === "rtl" && s.reverse(), s.join("");
}
function b3(t, e, n) {
  return n.getMarkerYear(t) !== n.getMarkerYear(e) ? 5 : n.getMarkerMonth(t) !== n.getMarkerMonth(e) ? 4 : n.getMarkerDay(t) !== n.getMarkerDay(e) ? 2 : Tn(t) !== Tn(e) ? 1 : 0;
}
function y3(t, e) {
  let n = {};
  for (let r in t)
    (!(r in Ps) || // not a date part prop (like timeZone)
    Ps[r] <= e) && (n[r] = t[r]);
  return n;
}
function x3(t, e, n, r) {
  let i = 0;
  for (; i < t.length; ) {
    let s = t.indexOf(e, i);
    if (s === -1)
      break;
    let o = t.substr(0, s);
    i = s + e.length;
    let a = t.substr(i), l = 0;
    for (; l < n.length; ) {
      let c = n.indexOf(r, l);
      if (c === -1)
        break;
      let u = n.substr(0, c);
      l = c + r.length;
      let h = n.substr(l);
      if (o === u && a === h)
        return {
          before: o,
          after: a
        };
    }
  }
  return null;
}
function _u(t, e) {
  let n = e.markerToArray(t.marker);
  return {
    marker: t.marker,
    timeZoneOffset: t.timeZoneOffset,
    array: n,
    year: n[0],
    month: n[1],
    day: n[2],
    hour: n[3],
    minute: n[4],
    second: n[5],
    millisecond: n[6]
  };
}
function $s(t, e, n, r) {
  let i = _u(t, n.calendarSystem), s = e ? _u(e, n.calendarSystem) : null;
  return {
    date: i,
    start: i,
    end: s,
    timeZone: n.timeZone,
    localeCodes: n.locale.codes,
    defaultSeparator: r || n.defaultSeparator
  };
}
class _3 {
  constructor(e) {
    this.cmdStr = e;
  }
  format(e, n, r) {
    return n.cmdFormatter(this.cmdStr, $s(e, null, n, r));
  }
  formatRange(e, n, r, i) {
    return r.cmdFormatter(this.cmdStr, $s(e, n, r, i));
  }
}
class w3 {
  constructor(e) {
    this.func = e;
  }
  format(e, n, r) {
    return this.func($s(e, null, n, r));
  }
  formatRange(e, n, r, i) {
    return this.func($s(e, n, r, i));
  }
}
function et(t) {
  return typeof t == "object" && t ? new f3(t) : typeof t == "string" ? new _3(t) : typeof t == "function" ? new w3(t) : null;
}
const wu = {
  navLinkDayClick: X,
  navLinkWeekClick: X,
  duration: Pe,
  bootstrapFontAwesome: X,
  buttonIcons: X,
  customButtons: X,
  defaultAllDayEventDuration: Pe,
  defaultTimedEventDuration: Pe,
  nextDayThreshold: Pe,
  scrollTime: Pe,
  scrollTimeReset: Boolean,
  slotMinTime: Pe,
  slotMaxTime: Pe,
  dayPopoverFormat: et,
  slotDuration: Pe,
  snapDuration: Pe,
  headerToolbar: X,
  footerToolbar: X,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: et,
  dayHeaderClassNames: X,
  dayHeaderContent: X,
  dayHeaderDidMount: X,
  dayHeaderWillUnmount: X,
  dayCellClassNames: X,
  dayCellContent: X,
  dayCellDidMount: X,
  dayCellWillUnmount: X,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: X,
  weekNumbers: Boolean,
  weekNumberClassNames: X,
  weekNumberContent: X,
  weekNumberDidMount: X,
  weekNumberWillUnmount: X,
  editable: Boolean,
  viewClassNames: X,
  viewDidMount: X,
  viewWillUnmount: X,
  nowIndicator: Boolean,
  nowIndicatorClassNames: X,
  nowIndicatorContent: X,
  nowIndicatorDidMount: X,
  nowIndicatorWillUnmount: X,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: X,
  locale: X,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: X,
  eventOrder: Iy,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: X,
  contentHeight: X,
  direction: String,
  weekNumberFormat: et,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: X,
  initialDate: X,
  now: X,
  eventDataTransform: X,
  stickyHeaderDates: X,
  stickyFooterScrollbar: X,
  viewHeight: X,
  defaultAllDay: Boolean,
  eventSourceFailure: X,
  eventSourceSuccess: X,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: X,
  eventConstraint: X,
  eventAllow: X,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: X,
  eventContent: X,
  eventDidMount: X,
  eventWillUnmount: X,
  selectConstraint: X,
  selectOverlap: X,
  selectAllow: X,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: X,
  slotLaneClassNames: X,
  slotLaneContent: X,
  slotLaneDidMount: X,
  slotLaneWillUnmount: X,
  slotLabelClassNames: X,
  slotLabelContent: X,
  slotLabelDidMount: X,
  slotLabelWillUnmount: X,
  dayMaxEvents: X,
  dayMaxEventRows: X,
  dayMinWidth: Number,
  slotLabelInterval: Pe,
  allDayText: String,
  allDayClassNames: X,
  allDayContent: X,
  allDayDidMount: X,
  allDayWillUnmount: X,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: et,
  rerenderDelay: Number,
  moreLinkText: X,
  moreLinkHint: X,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  plugins: X,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: Pe,
  hiddenDays: X,
  fixedWeekCount: Boolean,
  validRange: X,
  visibleRange: X,
  titleFormat: X,
  eventInteractive: Boolean,
  // only used by list-view, but languages define the value, so we need it in base options
  noEventsText: String,
  viewHint: X,
  navLinkHint: X,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: X,
  moreLinkClassNames: X,
  moreLinkContent: X,
  moreLinkDidMount: X,
  moreLinkWillUnmount: X,
  monthStartFormat: et,
  // for connectors
  // (can't be part of plugin system b/c must be provided at runtime)
  handleCustomRendering: X,
  customRenderingMetaMap: X,
  customRenderingReplacesEl: Boolean
}, qr = {
  eventDisplay: "auto",
  defaultRangeSeparator: " - ",
  titleRangeSeparator: " – ",
  defaultTimedEventDuration: "01:00:00",
  defaultAllDayEventDuration: { day: 1 },
  forceEventDuration: !1,
  nextDayThreshold: "00:00:00",
  dayHeaders: !0,
  initialView: "",
  aspectRatio: 1.35,
  headerToolbar: {
    start: "title",
    center: "",
    end: "today prev,next"
  },
  weekends: !0,
  weekNumbers: !1,
  weekNumberCalculation: "local",
  editable: !1,
  nowIndicator: !1,
  scrollTime: "06:00:00",
  scrollTimeReset: !0,
  slotMinTime: "00:00:00",
  slotMaxTime: "24:00:00",
  showNonCurrentDates: !0,
  lazyFetching: !0,
  startParam: "start",
  endParam: "end",
  timeZoneParam: "timeZone",
  timeZone: "local",
  locales: [],
  locale: "",
  themeSystem: "standard",
  dragRevertDuration: 500,
  dragScroll: !0,
  allDayMaintainDuration: !1,
  unselectAuto: !0,
  dropAccept: "*",
  eventOrder: "start,-duration,allDay,title",
  dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
  handleWindowResize: !0,
  windowResizeDelay: 100,
  longPressDelay: 1e3,
  eventDragMinDistance: 5,
  expandRows: !1,
  navLinks: !1,
  selectable: !1,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30,
  monthStartFormat: { month: "long", day: "numeric" }
}, Su = {
  datesSet: X,
  eventsSet: X,
  eventAdd: X,
  eventChange: X,
  eventRemove: X,
  windowResize: X,
  eventClick: X,
  eventMouseEnter: X,
  eventMouseLeave: X,
  select: X,
  unselect: X,
  loading: X,
  // internal
  _unmount: X,
  _beforeprint: X,
  _afterprint: X,
  _noEventDrop: X,
  _noEventResize: X,
  _resize: X,
  _scrollRequest: X
}, Eu = {
  buttonText: X,
  buttonHints: X,
  views: X,
  plugins: X,
  initialEvents: X,
  events: X,
  eventSources: X
}, zn = {
  headerToolbar: Vn,
  footerToolbar: Vn,
  buttonText: Vn,
  buttonHints: Vn,
  buttonIcons: Vn,
  dateIncrement: Vn,
  plugins: Si,
  events: Si,
  eventSources: Si,
  resources: Si
};
function Vn(t, e) {
  return typeof t == "object" && typeof e == "object" && t && e ? an(t, e) : t === e;
}
function Si(t, e) {
  return Array.isArray(t) && Array.isArray(e) ? On(t, e) : t === e;
}
const S3 = {
  type: String,
  component: X,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: X,
  usesMinMaxTime: Boolean,
  classNames: X,
  content: X,
  didMount: X,
  willUnmount: X
};
function $o(t) {
  return el(t, zn);
}
function il(t, e) {
  let n = {}, r = {};
  for (let i in e)
    i in t && (n[i] = e[i](t[i]));
  for (let i in t)
    i in e || (r[i] = t[i]);
  return { refined: n, extra: r };
}
function X(t) {
  return t;
}
function sl(t, e, n, r) {
  return {
    instanceId: ir(),
    defId: t,
    range: e,
    forcedStartTzo: n ?? null,
    forcedEndTzo: r ?? null
  };
}
function E3(t, e, n, r) {
  for (let i = 0; i < r.length; i += 1) {
    let s = r[i].parse(t, n);
    if (s) {
      let { allDay: o } = t;
      return o == null && (o = e, o == null && (o = s.allDayGuess, o == null && (o = !1))), {
        allDay: o,
        duration: s.duration,
        typeData: s.typeData,
        typeId: i
      };
    }
  }
  return null;
}
function Xn(t, e, n) {
  let { dateEnv: r, pluginHooks: i, options: s } = n, { defs: o, instances: a } = t;
  a = Kn(a, (l) => !o[l.defId].recurringDef);
  for (let l in o) {
    let c = o[l];
    if (c.recurringDef) {
      let { duration: u } = c.recurringDef;
      u || (u = c.allDay ? s.defaultAllDayEventDuration : s.defaultTimedEventDuration);
      let h = C3(c, u, e, r, i.recurringTypes);
      for (let d of h) {
        let f = sl(l, {
          start: d,
          end: r.add(d, u)
        });
        a[f.instanceId] = f;
      }
    }
  }
  return { defs: o, instances: a };
}
function C3(t, e, n, r, i) {
  let o = i[t.recurringDef.typeId].expand(t.recurringDef.typeData, {
    start: r.subtract(n.start, e),
    end: n.end
  }, r);
  return t.allDay && (o = o.map(Qe)), o;
}
function Jr(t, e, n, r, i, s) {
  let o = $t(), a = ll(n);
  for (let l of t) {
    let c = t0(l, e, n, r, a, i, s);
    c && xa(c, o);
  }
  return o;
}
function xa(t, e = $t()) {
  return e.defs[t.def.defId] = t.def, t.instance && (e.instances[t.instance.instanceId] = t.instance), e;
}
function ol(t, e) {
  let n = t.instances[e];
  if (n) {
    let r = t.defs[n.defId], i = io(t, (s) => k3(r, s));
    return i.defs[r.defId] = r, i.instances[n.instanceId] = n, i;
  }
  return $t();
}
function k3(t, e) {
  return !!(t.groupId && t.groupId === e.groupId);
}
function $t() {
  return { defs: {}, instances: {} };
}
function al(t, e) {
  return {
    defs: Object.assign(Object.assign({}, t.defs), e.defs),
    instances: Object.assign(Object.assign({}, t.instances), e.instances)
  };
}
function io(t, e) {
  let n = Kn(t.defs, e), r = Kn(t.instances, (i) => n[i.defId]);
  return { defs: n, instances: r };
}
function A3(t, e) {
  let { defs: n, instances: r } = t, i = {}, s = {};
  for (let o in n)
    e.defs[o] || (i[o] = n[o]);
  for (let o in r)
    !e.instances[o] && // not explicitly excluded
    i[r[o].defId] && (s[o] = r[o]);
  return {
    defs: i,
    instances: s
  };
}
function D3(t, e) {
  return Array.isArray(t) ? Jr(t, null, e, !0) : typeof t == "object" && t ? Jr([t], null, e, !0) : t != null ? String(t) : null;
}
function Cu(t) {
  return Array.isArray(t) ? t : typeof t == "string" ? t.split(/\s+/) : [];
}
const Hs = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: X,
  overlap: X,
  allow: X,
  className: Cu,
  classNames: Cu,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, T3 = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: "",
  borderColor: "",
  textColor: "",
  classNames: []
};
function Fs(t, e) {
  let n = D3(t.constraint, e);
  return {
    display: t.display || null,
    startEditable: t.startEditable != null ? t.startEditable : t.editable,
    durationEditable: t.durationEditable != null ? t.durationEditable : t.editable,
    constraints: n != null ? [n] : [],
    overlap: t.overlap != null ? t.overlap : null,
    allows: t.allow != null ? [t.allow] : [],
    backgroundColor: t.backgroundColor || t.color || "",
    borderColor: t.borderColor || t.color || "",
    textColor: t.textColor || "",
    classNames: (t.className || []).concat(t.classNames || [])
    // join singular and plural
  };
}
function Jf(t) {
  return t.reduce(R3, T3);
}
function R3(t, e) {
  return {
    display: e.display != null ? e.display : t.display,
    startEditable: e.startEditable != null ? e.startEditable : t.startEditable,
    durationEditable: e.durationEditable != null ? e.durationEditable : t.durationEditable,
    constraints: t.constraints.concat(e.constraints),
    overlap: typeof e.overlap == "boolean" ? e.overlap : t.overlap,
    allows: t.allows.concat(e.allows),
    backgroundColor: e.backgroundColor || t.backgroundColor,
    borderColor: e.borderColor || t.borderColor,
    textColor: e.textColor || t.textColor,
    classNames: t.classNames.concat(e.classNames)
  };
}
const Fi = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, e0 = {
  start: X,
  end: X,
  date: X,
  allDay: Boolean
}, I3 = Object.assign(Object.assign(Object.assign({}, Fi), e0), { extendedProps: X });
function t0(t, e, n, r, i = ll(n), s, o) {
  let { refined: a, extra: l } = n0(t, n, i), c = O3(e, n), u = E3(a, c, n.dateEnv, n.pluginHooks.recurringTypes);
  if (u) {
    let d = _a(a, l, e ? e.sourceId : "", u.allDay, !!u.duration, n, s);
    return d.recurringDef = {
      typeId: u.typeId,
      typeData: u.typeData,
      duration: u.duration
    }, { def: d, instance: null };
  }
  let h = M3(a, c, n, r);
  if (h) {
    let d = _a(a, l, e ? e.sourceId : "", h.allDay, h.hasEnd, n, s), f = sl(d.defId, h.range, h.forcedStartTzo, h.forcedEndTzo);
    return o && d.publicId && o[d.publicId] && (f.instanceId = o[d.publicId]), { def: d, instance: f };
  }
  return null;
}
function n0(t, e, n = ll(e)) {
  return il(t, n);
}
function ll(t) {
  return Object.assign(Object.assign(Object.assign({}, Hs), I3), t.pluginHooks.eventRefiners);
}
function _a(t, e, n, r, i, s, o) {
  let a = {
    title: t.title || "",
    groupId: t.groupId || "",
    publicId: t.id || "",
    url: t.url || "",
    recurringDef: null,
    defId: (o && t.id ? o[t.id] : "") || ir(),
    sourceId: n,
    allDay: r,
    hasEnd: i,
    interactive: t.interactive,
    ui: Fs(t, s),
    extendedProps: Object.assign(Object.assign({}, t.extendedProps || {}), e)
  };
  for (let l of s.pluginHooks.eventDefMemberAdders)
    Object.assign(a, l(t));
  return Object.freeze(a.ui.classNames), Object.freeze(a.extendedProps), a;
}
function M3(t, e, n, r) {
  let { allDay: i } = t, s, o = null, a = !1, l, c = null, u = t.start != null ? t.start : t.date;
  if (s = n.dateEnv.createMarkerMeta(u), s)
    o = s.marker;
  else if (!r)
    return null;
  return t.end != null && (l = n.dateEnv.createMarkerMeta(t.end)), i == null && (e != null ? i = e : i = (!s || s.isTimeUnspecified) && (!l || l.isTimeUnspecified)), i && o && (o = Qe(o)), l && (c = l.marker, i && (c = Qe(c)), o && c <= o && (c = null)), c ? a = !0 : r || (a = n.options.forceEventDuration || !1, c = n.dateEnv.add(o, i ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration)), {
    allDay: i,
    hasEnd: a,
    range: { start: o, end: c },
    forcedStartTzo: s ? s.forcedTzo : null,
    forcedEndTzo: l ? l.forcedTzo : null
  };
}
function O3(t, e) {
  let n = null;
  return t && (n = t.defaultAllDay), n == null && (n = e.options.defaultAllDay), n;
}
const N3 = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
  // so multiple defs get grouped
};
function B3(t, e) {
  return Jr(L3(t), null, e);
}
function L3(t) {
  let e;
  return t === !0 ? e = [{}] : Array.isArray(t) ? e = t.filter((n) => n.daysOfWeek) : typeof t == "object" && t ? e = [t] : e = [], e = e.map((n) => Object.assign(Object.assign({}, N3), n)), e;
}
function r0(t) {
  let e = Math.floor(sr(t.start, t.end)) || 1, n = Qe(t.start), r = Ct(n, e);
  return { start: n, end: r };
}
function i0(t, e = Pe(0)) {
  let n = null, r = null;
  if (t.end) {
    r = Qe(t.end);
    let i = t.end.valueOf() - r.valueOf();
    i && i >= Qt(e) && (r = Ct(r, 1));
  }
  return t.start && (n = Qe(t.start), r && r <= n && (r = Ct(n, 1))), { start: n, end: r };
}
function fr(t, e, n, r) {
  return r === "year" ? Pe(n.diffWholeYears(t, e), "year") : r === "month" ? Pe(n.diffWholeMonths(t, e), "month") : Jy(t, e);
}
function P3(t, e) {
  return t.left >= e.left && t.left < e.right && t.top >= e.top && t.top < e.bottom;
}
function s0(t, e) {
  let n = {
    left: Math.max(t.left, e.left),
    right: Math.min(t.right, e.right),
    top: Math.max(t.top, e.top),
    bottom: Math.min(t.bottom, e.bottom)
  };
  return n.left < n.right && n.top < n.bottom ? n : !1;
}
function $3(t, e) {
  return {
    left: Math.min(Math.max(t.left, e.left), e.right),
    top: Math.min(Math.max(t.top, e.top), e.bottom)
  };
}
function H3(t) {
  return {
    left: (t.left + t.right) / 2,
    top: (t.top + t.bottom) / 2
  };
}
function F3(t, e) {
  return {
    left: t.left - e.left,
    top: t.top - e.top
  };
}
let Ho;
function o0() {
  return Ho == null && (Ho = z3()), Ho;
}
function z3() {
  if (typeof document > "u")
    return !0;
  let t = document.createElement("div");
  t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.innerHTML = "<table><tr><td><div></div></td></tr></table>", t.querySelector("table").style.height = "100px", t.querySelector("div").style.height = "100%", document.body.appendChild(t);
  let n = t.querySelector("div").offsetHeight > 0;
  return document.body.removeChild(t), n;
}
const Fo = $t();
class V3 {
  constructor() {
    this.getKeysForEventDefs = Ce(this._getKeysForEventDefs), this.splitDateSelection = Ce(this._splitDateSpan), this.splitEventStore = Ce(this._splitEventStore), this.splitIndividualUi = Ce(this._splitIndividualUi), this.splitEventDrag = Ce(this._splitInteraction), this.splitEventResize = Ce(this._splitInteraction), this.eventUiBuilders = {};
  }
  splitProps(e) {
    let n = this.getKeyInfo(e), r = this.getKeysForEventDefs(e.eventStore), i = this.splitDateSelection(e.dateSelection), s = this.splitIndividualUi(e.eventUiBases, r), o = this.splitEventStore(e.eventStore, r), a = this.splitEventDrag(e.eventDrag), l = this.splitEventResize(e.eventResize), c = {};
    this.eventUiBuilders = xn(n, (u, h) => this.eventUiBuilders[h] || Ce(U3));
    for (let u in n) {
      let h = n[u], d = o[u] || Fo, f = this.eventUiBuilders[u];
      c[u] = {
        businessHours: h.businessHours || e.businessHours,
        dateSelection: i[u] || null,
        eventStore: d,
        eventUiBases: f(e.eventUiBases[""], h.ui, s[u]),
        eventSelection: d.instances[e.eventSelection] ? e.eventSelection : "",
        eventDrag: a[u] || null,
        eventResize: l[u] || null
      };
    }
    return c;
  }
  _splitDateSpan(e) {
    let n = {};
    if (e) {
      let r = this.getKeysForDateSpan(e);
      for (let i of r)
        n[i] = e;
    }
    return n;
  }
  _getKeysForEventDefs(e) {
    return xn(e.defs, (n) => this.getKeysForEventDef(n));
  }
  _splitEventStore(e, n) {
    let { defs: r, instances: i } = e, s = {};
    for (let o in r)
      for (let a of n[o])
        s[a] || (s[a] = $t()), s[a].defs[o] = r[o];
    for (let o in i) {
      let a = i[o];
      for (let l of n[a.defId])
        s[l] && (s[l].instances[o] = a);
    }
    return s;
  }
  _splitIndividualUi(e, n) {
    let r = {};
    for (let i in e)
      if (i)
        for (let s of n[i])
          r[s] || (r[s] = {}), r[s][i] = e[i];
    return r;
  }
  _splitInteraction(e) {
    let n = {};
    if (e) {
      let r = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents)), i = this._getKeysForEventDefs(e.mutatedEvents), s = this._splitEventStore(e.mutatedEvents, i), o = (a) => {
        n[a] || (n[a] = {
          affectedEvents: r[a] || Fo,
          mutatedEvents: s[a] || Fo,
          isEvent: e.isEvent
        });
      };
      for (let a in r)
        o(a);
      for (let a in s)
        o(a);
    }
    return n;
  }
}
function U3(t, e, n) {
  let r = [];
  t && r.push(t), e && r.push(e);
  let i = {
    "": Jf(r)
  };
  return n && Object.assign(i, n), i;
}
function j3(t, e) {
  let n = null, r = null;
  return t.start && (n = e.createMarker(t.start)), t.end && (r = e.createMarker(t.end)), !n && !r || n && r && r < n ? null : { start: n, end: r };
}
function ku(t, e) {
  let n = [], { start: r } = e, i, s;
  for (t.sort(W3), i = 0; i < t.length; i += 1)
    s = t[i], s.start > r && n.push({ start: r, end: s.start }), s.end > r && (r = s.end);
  return r < e.end && n.push({ start: r, end: e.end }), n;
}
function W3(t, e) {
  return t.start.valueOf() - e.start.valueOf();
}
function Jn(t, e) {
  let { start: n, end: r } = t, i = null;
  return e.start !== null && (n === null ? n = e.start : n = new Date(Math.max(n.valueOf(), e.start.valueOf()))), e.end != null && (r === null ? r = e.end : r = new Date(Math.min(r.valueOf(), e.end.valueOf()))), (n === null || r === null || n < r) && (i = { start: n, end: r }), i;
}
function q3(t, e) {
  return (t.start === null ? null : t.start.valueOf()) === (e.start === null ? null : e.start.valueOf()) && (t.end === null ? null : t.end.valueOf()) === (e.end === null ? null : e.end.valueOf());
}
function cl(t, e) {
  return (t.end === null || e.start === null || t.end > e.start) && (t.start === null || e.end === null || t.start < e.end);
}
function so(t, e) {
  return (t.start === null || e.start !== null && e.start >= t.start) && (t.end === null || e.end !== null && e.end <= t.end);
}
function yn(t, e) {
  return (t.start === null || e >= t.start) && (t.end === null || e < t.end);
}
function Y3(t, e) {
  return e.start != null && t < e.start ? e.start : e.end != null && t >= e.end ? new Date(e.end.valueOf() - 1) : t;
}
function a0(t, e, n, r) {
  return {
    dow: t.getUTCDay(),
    isDisabled: !!(r && !yn(r.activeRange, t)),
    isOther: !!(r && !yn(r.currentRange, t)),
    isToday: !!(e && yn(e, t)),
    isPast: !!(n ? t < n : e && t < e.start),
    isFuture: !!(n ? t > n : e && t >= e.end)
  };
}
function ul(t, e) {
  let n = [
    "fc-day",
    `fc-day-${Gy[t.dow]}`
  ];
  return t.isDisabled ? n.push("fc-day-disabled") : (t.isToday && (n.push("fc-day-today"), n.push(e.getClass("today"))), t.isPast && n.push("fc-day-past"), t.isFuture && n.push("fc-day-future"), t.isOther && n.push("fc-day-other")), n;
}
const G3 = et({ year: "numeric", month: "long", day: "numeric" }), Q3 = et({ week: "long" });
function zs(t, e, n = "day", r = !0) {
  const { dateEnv: i, options: s, calendarApi: o } = t;
  let a = i.format(e, n === "week" ? Q3 : G3);
  if (s.navLinks) {
    let l = i.toDate(e);
    const c = (u) => {
      let h = n === "day" ? s.navLinkDayClick : n === "week" ? s.navLinkWeekClick : null;
      typeof h == "function" ? h.call(o, i.toDate(e), u) : (typeof h == "string" && (n = h), o.zoomTo(e, n));
    };
    return Object.assign({ title: Wr(s.navLinkHint, [a, l], a), "data-navlink": "" }, r ? Gf(c) : { onClick: c });
  }
  return { "aria-label": a };
}
let zo = null;
function Z3() {
  return zo === null && (zo = K3()), zo;
}
function K3() {
  let t = document.createElement("div");
  jr(t, {
    position: "absolute",
    top: -1e3,
    left: 0,
    border: 0,
    padding: 0,
    overflow: "scroll",
    direction: "rtl"
  }), t.innerHTML = "<div></div>", document.body.appendChild(t);
  let n = t.firstChild.getBoundingClientRect().left > t.getBoundingClientRect().left;
  return Za(t), n;
}
let Vo;
function X3() {
  return Vo || (Vo = J3()), Vo;
}
function J3() {
  let t = document.createElement("div");
  t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-9999px", t.style.left = "-9999px", document.body.appendChild(t);
  let e = l0(t);
  return document.body.removeChild(t), e;
}
function l0(t) {
  return {
    x: t.offsetHeight - t.clientHeight,
    y: t.offsetWidth - t.clientWidth
  };
}
function e2(t, e = !1) {
  let n = window.getComputedStyle(t), r = parseInt(n.borderLeftWidth, 10) || 0, i = parseInt(n.borderRightWidth, 10) || 0, s = parseInt(n.borderTopWidth, 10) || 0, o = parseInt(n.borderBottomWidth, 10) || 0, a = l0(t), l = a.y - r - i, c = a.x - s - o, u = {
    borderLeft: r,
    borderRight: i,
    borderTop: s,
    borderBottom: o,
    scrollbarBottom: c,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };
  return Z3() && n.direction === "rtl" ? u.scrollbarLeft = l : u.scrollbarRight = l, e && (u.paddingLeft = parseInt(n.paddingLeft, 10) || 0, u.paddingRight = parseInt(n.paddingRight, 10) || 0, u.paddingTop = parseInt(n.paddingTop, 10) || 0, u.paddingBottom = parseInt(n.paddingBottom, 10) || 0), u;
}
function t2(t, e = !1, n) {
  let r = n ? t.getBoundingClientRect() : dl(t), i = e2(t, e), s = {
    left: r.left + i.borderLeft + i.scrollbarLeft,
    right: r.right - i.borderRight - i.scrollbarRight,
    top: r.top + i.borderTop,
    bottom: r.bottom - i.borderBottom - i.scrollbarBottom
  };
  return e && (s.left += i.paddingLeft, s.right -= i.paddingRight, s.top += i.paddingTop, s.bottom -= i.paddingBottom), s;
}
function dl(t) {
  let e = t.getBoundingClientRect();
  return {
    left: e.left + window.pageXOffset,
    top: e.top + window.pageYOffset,
    right: e.right + window.pageXOffset,
    bottom: e.bottom + window.pageYOffset
  };
}
function n2(t) {
  let e = c0(t), n = t.getBoundingClientRect();
  for (let r of e) {
    let i = s0(n, r.getBoundingClientRect());
    if (i)
      n = i;
    else
      return null;
  }
  return n;
}
function c0(t) {
  let e = [];
  for (; t instanceof HTMLElement; ) {
    let n = window.getComputedStyle(t);
    if (n.position === "fixed")
      break;
    /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && e.push(t), t = t.parentNode;
  }
  return e;
}
function r2(t, e, n) {
  let r = !1, i = function(a) {
    r || (r = !0, e(a));
  }, s = function(a) {
    r || (r = !0, n(a));
  }, o = t(i, s);
  o && typeof o.then == "function" && o.then(i, s);
}
class oo {
  constructor() {
    this.handlers = {}, this.thisContext = null;
  }
  setThisContext(e) {
    this.thisContext = e;
  }
  setOptions(e) {
    this.options = e;
  }
  on(e, n) {
    i2(this.handlers, e, n);
  }
  off(e, n) {
    s2(this.handlers, e, n);
  }
  trigger(e, ...n) {
    let r = this.handlers[e] || [], i = this.options && this.options[e], s = [].concat(i || [], r);
    for (let o of s)
      o.apply(this.thisContext, n);
  }
  hasHandlers(e) {
    return !!(this.handlers[e] && this.handlers[e].length || this.options && this.options[e]);
  }
}
function i2(t, e, n) {
  (t[e] || (t[e] = [])).push(n);
}
function s2(t, e, n) {
  n ? t[e] && (t[e] = t[e].filter((r) => r !== n)) : delete t[e];
}
class Er {
  constructor(e, n, r, i) {
    this.els = n;
    let s = this.originClientRect = e.getBoundingClientRect();
    r && this.buildElHorizontals(s.left), i && this.buildElVerticals(s.top);
  }
  // Populates the left/right internal coordinate arrays
  buildElHorizontals(e) {
    let n = [], r = [];
    for (let i of this.els) {
      let s = i.getBoundingClientRect();
      n.push(s.left - e), r.push(s.right - e);
    }
    this.lefts = n, this.rights = r;
  }
  // Populates the top/bottom internal coordinate arrays
  buildElVerticals(e) {
    let n = [], r = [];
    for (let i of this.els) {
      let s = i.getBoundingClientRect();
      n.push(s.top - e), r.push(s.bottom - e);
    }
    this.tops = n, this.bottoms = r;
  }
  // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
  // If no intersection is made, returns undefined.
  leftToIndex(e) {
    let { lefts: n, rights: r } = this, i = n.length, s;
    for (s = 0; s < i; s += 1)
      if (e >= n[s] && e < r[s])
        return s;
  }
  // Given a top offset (from document top), returns the index of the el that it vertically intersects.
  // If no intersection is made, returns undefined.
  topToIndex(e) {
    let { tops: n, bottoms: r } = this, i = n.length, s;
    for (s = 0; s < i; s += 1)
      if (e >= n[s] && e < r[s])
        return s;
  }
  // Gets the width of the element at the given index
  getWidth(e) {
    return this.rights[e] - this.lefts[e];
  }
  // Gets the height of the element at the given index
  getHeight(e) {
    return this.bottoms[e] - this.tops[e];
  }
  similarTo(e) {
    return Ei(this.tops || [], e.tops || []) && Ei(this.bottoms || [], e.bottoms || []) && Ei(this.lefts || [], e.lefts || []) && Ei(this.rights || [], e.rights || []);
  }
}
function Ei(t, e) {
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (Math.round(t[r]) !== Math.round(e[r]))
      return !1;
  return !0;
}
class fl {
  getMaxScrollTop() {
    return this.getScrollHeight() - this.getClientHeight();
  }
  getMaxScrollLeft() {
    return this.getScrollWidth() - this.getClientWidth();
  }
  canScrollVertically() {
    return this.getMaxScrollTop() > 0;
  }
  canScrollHorizontally() {
    return this.getMaxScrollLeft() > 0;
  }
  canScrollUp() {
    return this.getScrollTop() > 0;
  }
  canScrollDown() {
    return this.getScrollTop() < this.getMaxScrollTop();
  }
  canScrollLeft() {
    return this.getScrollLeft() > 0;
  }
  canScrollRight() {
    return this.getScrollLeft() < this.getMaxScrollLeft();
  }
}
class o2 extends fl {
  constructor(e) {
    super(), this.el = e;
  }
  getScrollTop() {
    return this.el.scrollTop;
  }
  getScrollLeft() {
    return this.el.scrollLeft;
  }
  setScrollTop(e) {
    this.el.scrollTop = e;
  }
  setScrollLeft(e) {
    this.el.scrollLeft = e;
  }
  getScrollWidth() {
    return this.el.scrollWidth;
  }
  getScrollHeight() {
    return this.el.scrollHeight;
  }
  getClientHeight() {
    return this.el.clientHeight;
  }
  getClientWidth() {
    return this.el.clientWidth;
  }
}
class a2 extends fl {
  getScrollTop() {
    return window.pageYOffset;
  }
  getScrollLeft() {
    return window.pageXOffset;
  }
  setScrollTop(e) {
    window.scroll(window.pageXOffset, e);
  }
  setScrollLeft(e) {
    window.scroll(e, window.pageYOffset);
  }
  getScrollWidth() {
    return document.documentElement.scrollWidth;
  }
  getScrollHeight() {
    return document.documentElement.scrollHeight;
  }
  getClientHeight() {
    return document.documentElement.clientHeight;
  }
  getClientWidth() {
    return document.documentElement.clientWidth;
  }
}
class si {
  constructor(e) {
    this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption]);
  }
  setIconOverride(e) {
    let n, r;
    if (typeof e == "object" && e) {
      n = Object.assign({}, this.iconClasses);
      for (r in e)
        n[r] = this.applyIconOverridePrefix(e[r]);
      this.iconClasses = n;
    } else
      e === !1 && (this.iconClasses = {});
  }
  applyIconOverridePrefix(e) {
    let n = this.iconOverridePrefix;
    return n && e.indexOf(n) !== 0 && (e = n + e), e;
  }
  getClass(e) {
    return this.classes[e] || "";
  }
  getIconClass(e, n) {
    let r;
    return n && this.rtlIconClasses ? r = this.rtlIconClasses[e] || this.iconClasses[e] : r = this.iconClasses[e], r ? `${this.baseIconClass} ${r}` : "";
  }
  getCustomButtonIconClass(e) {
    let n;
    return this.iconOverrideCustomButtonOption && (n = e[this.iconOverrideCustomButtonOption], n) ? `${this.baseIconClass} ${this.applyIconOverridePrefix(n)}` : "";
  }
}
si.prototype.classes = {};
si.prototype.iconClasses = {};
si.prototype.baseIconClass = "";
si.prototype.iconOverridePrefix = "";
function Au(t) {
  t();
  let e = we.debounceRendering, n = [];
  function r(i) {
    n.push(i);
  }
  for (we.debounceRendering = r, Xr(O(l2, {}), document.createElement("div")); n.length; )
    n.shift()();
  we.debounceRendering = e;
}
class l2 extends Pt {
  render() {
    return O("div", {});
  }
  componentDidMount() {
    this.setState({});
  }
}
function u0(t) {
  let e = ty(t), n = e.Provider;
  return e.Provider = function() {
    let r = !this.getChildContext, i = n.apply(this, arguments);
    if (r) {
      let s = [];
      this.shouldComponentUpdate = (o) => {
        this.props.value !== o.value && s.forEach((a) => {
          a.context = o.value, a.forceUpdate();
        });
      }, this.sub = (o) => {
        s.push(o);
        let a = o.componentWillUnmount;
        o.componentWillUnmount = () => {
          s.splice(s.indexOf(o), 1), a && a.call(o);
        };
      };
    }
    return i;
  }, e;
}
class c2 {
  constructor(e, n, r, i) {
    this.execFunc = e, this.emitter = n, this.scrollTime = r, this.scrollTimeReset = i, this.handleScrollRequest = (s) => {
      this.queuedRequest = Object.assign({}, this.queuedRequest || {}, s), this.drain();
    }, n.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll();
  }
  detach() {
    this.emitter.off("_scrollRequest", this.handleScrollRequest);
  }
  update(e) {
    e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
  }
  fireInitialScroll() {
    this.handleScrollRequest({
      time: this.scrollTime
    });
  }
  drain() {
    this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
  }
}
const wn = u0({});
function u2(t, e, n, r, i, s, o, a, l, c, u, h, d) {
  return {
    dateEnv: i,
    options: n,
    pluginHooks: o,
    emitter: c,
    dispatch: a,
    getCurrentData: l,
    calendarApi: u,
    viewSpec: t,
    viewApi: e,
    dateProfileGenerator: r,
    theme: s,
    isRtl: n.direction === "rtl",
    addResizeHandler(f) {
      c.on("_resize", f);
    },
    removeResizeHandler(f) {
      c.off("_resize", f);
    },
    createScrollResponder(f) {
      return new c2(f, c, Pe(n.scrollTime), n.scrollTimeReset);
    },
    registerInteractiveComponent: h,
    unregisterInteractiveComponent: d
  };
}
class or extends Pt {
  shouldComponentUpdate(e, n) {
    return this.debug && console.log(ya(e, this.props), ya(n, this.state)), !Lo(this.props, e, this.propEquality) || !Lo(this.state, n, this.stateEquality);
  }
  // HACK for freakin' React StrictMode
  safeSetState(e) {
    Lo(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e);
  }
}
or.addPropsEquality = d2;
or.addStateEquality = f2;
or.contextType = wn;
or.prototype.propEquality = {};
or.prototype.stateEquality = {};
class Ue extends or {
}
Ue.contextType = wn;
function d2(t) {
  let e = Object.create(this.prototype.propEquality);
  Object.assign(e, t), this.prototype.propEquality = e;
}
function f2(t) {
  let e = Object.create(this.prototype.stateEquality);
  Object.assign(e, t), this.prototype.stateEquality = e;
}
function _n(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
class ln extends Ue {
  constructor() {
    super(...arguments), this.uid = ir();
  }
  // Hit System
  // -----------------------------------------------------------------------------------------------------------------
  prepareHits() {
  }
  queryHit(e, n, r, i) {
    return null;
  }
  // Pointer Interaction Utils
  // -----------------------------------------------------------------------------------------------------------------
  isValidSegDownEl(e) {
    return !this.props.eventDrag && // HACK
    !this.props.eventResize && // HACK
    !Et(e, ".fc-event-mirror");
  }
  isValidDateDownEl(e) {
    return !Et(e, ".fc-event:not(.fc-bg-event)") && !Et(e, ".fc-more-link") && // a "more.." link
    !Et(e, "a[data-navlink]") && // a clickable nav link
    !Et(e, ".fc-popover");
  }
}
function h2(t, e) {
  switch (e.type) {
    case "CHANGE_DATE":
      return e.dateMarker;
    default:
      return t;
  }
}
function p2(t, e) {
  let n = t.initialDate;
  return n != null ? e.createMarker(n) : oi(t.now, e);
}
function oi(t, e) {
  return typeof t == "function" && (t = t()), t == null ? e.createNowMarker() : e.createMarker(t);
}
class d0 {
  constructor(e) {
    this.props = e, this.nowDate = oi(e.nowInput, e.dateEnv), this.initHiddenDays();
  }
  /* Date Range Computation
  ------------------------------------------------------------------------------------------------------------------*/
  // Builds a structure with info about what the dates/ranges will be for the "prev" view.
  buildPrev(e, n, r) {
    let { dateEnv: i } = this.props, s = i.subtract(
      i.startOf(n, e.currentRangeUnit),
      // important for start-of-month
      e.dateIncrement
    );
    return this.build(s, -1, r);
  }
  // Builds a structure with info about what the dates/ranges will be for the "next" view.
  buildNext(e, n, r) {
    let { dateEnv: i } = this.props, s = i.add(
      i.startOf(n, e.currentRangeUnit),
      // important for start-of-month
      e.dateIncrement
    );
    return this.build(s, 1, r);
  }
  // Builds a structure holding dates/ranges for rendering around the given date.
  // Optional direction param indicates whether the date is being incremented/decremented
  // from its previous value. decremented = -1, incremented = 1 (default).
  build(e, n, r = !0) {
    let { props: i } = this, s, o, a, l, c, u;
    return s = this.buildValidRange(), s = this.trimHiddenDays(s), r && (e = Y3(e, s)), o = this.buildCurrentRangeInfo(e, n), a = /^(year|month|week|day)$/.test(o.unit), l = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, a), l = this.trimHiddenDays(l), c = l, i.showNonCurrentDates || (c = Jn(c, o.range)), c = this.adjustActiveRange(c), c = Jn(c, s), u = cl(o.range, s), yn(l, e) || (e = l.start), {
      currentDate: e,
      // constraint for where prev/next operations can go and where events can be dragged/resized to.
      // an object with optional start and end properties.
      validRange: s,
      // range the view is formally responsible for.
      // for example, a month view might have 1st-31st, excluding padded dates
      currentRange: o.range,
      // name of largest unit being displayed, like "month" or "week"
      currentRangeUnit: o.unit,
      isRangeAllDay: a,
      // dates that display events and accept drag-n-drop
      // will be `null` if no dates accept events
      activeRange: c,
      // date range with a rendered skeleton
      // includes not-active days that need some sort of DOM
      renderRange: l,
      // Duration object that denotes the first visible time of any given day
      slotMinTime: i.slotMinTime,
      // Duration object that denotes the exclusive visible end time of any given day
      slotMaxTime: i.slotMaxTime,
      isValid: u,
      // how far the current date will move for a prev/next operation
      dateIncrement: this.buildDateIncrement(o.duration)
      // pass a fallback (might be null) ^
    };
  }
  // Builds an object with optional start/end properties.
  // Indicates the minimum/maximum dates to display.
  // not responsible for trimming hidden days.
  buildValidRange() {
    let e = this.props.validRangeInput, n = typeof e == "function" ? e.call(this.props.calendarApi, this.nowDate) : e;
    return this.refineRange(n) || { start: null, end: null };
  }
  // Builds a structure with info about the "current" range, the range that is
  // highlighted as being the current month for example.
  // See build() for a description of `direction`.
  // Guaranteed to have `range` and `unit` properties. `duration` is optional.
  buildCurrentRangeInfo(e, n) {
    let { props: r } = this, i = null, s = null, o = null, a;
    return r.duration ? (i = r.duration, s = r.durationUnit, o = this.buildRangeFromDuration(e, n, i, s)) : (a = this.props.dayCount) ? (s = "day", o = this.buildRangeFromDayCount(e, n, a)) : (o = this.buildCustomVisibleRange(e)) ? s = r.dateEnv.greatestWholeUnit(o.start, o.end).unit : (i = this.getFallbackDuration(), s = ba(i).unit, o = this.buildRangeFromDuration(e, n, i, s)), { duration: i, unit: s, range: o };
  }
  getFallbackDuration() {
    return Pe({ day: 1 });
  }
  // Returns a new activeRange to have time values (un-ambiguate)
  // slotMinTime or slotMaxTime causes the range to expand.
  adjustActiveRange(e) {
    let { dateEnv: n, usesMinMaxTime: r, slotMinTime: i, slotMaxTime: s } = this.props, { start: o, end: a } = e;
    return r && (vr(i) < 0 && (o = Qe(o), o = n.add(o, i)), vr(s) > 1 && (a = Qe(a), a = Ct(a, -1), a = n.add(a, s))), { start: o, end: a };
  }
  // Builds the "current" range when it is specified as an explicit duration.
  // `unit` is the already-computed greatestDurationDenominator unit of duration.
  buildRangeFromDuration(e, n, r, i) {
    let { dateEnv: s, dateAlignment: o } = this.props, a, l, c;
    if (!o) {
      let { dateIncrement: h } = this.props;
      h && Qt(h) < Qt(r) ? o = ba(h).unit : o = i;
    }
    vr(r) <= 1 && this.isHiddenDay(a) && (a = this.skipHiddenDays(a, n), a = Qe(a));
    function u() {
      a = s.startOf(e, o), l = s.add(a, r), c = { start: a, end: l };
    }
    return u(), this.trimHiddenDays(c) || (e = this.skipHiddenDays(e, n), u()), c;
  }
  // Builds the "current" range when a dayCount is specified.
  buildRangeFromDayCount(e, n, r) {
    let { dateEnv: i, dateAlignment: s } = this.props, o = 0, a = e, l;
    s && (a = i.startOf(a, s)), a = Qe(a), a = this.skipHiddenDays(a, n), l = a;
    do
      l = Ct(l, 1), this.isHiddenDay(l) || (o += 1);
    while (o < r);
    return { start: a, end: l };
  }
  // Builds a normalized range object for the "visible" range,
  // which is a way to define the currentRange and activeRange at the same time.
  buildCustomVisibleRange(e) {
    let { props: n } = this, r = n.visibleRangeInput, i = typeof r == "function" ? r.call(n.calendarApi, n.dateEnv.toDate(e)) : r, s = this.refineRange(i);
    return s && (s.start == null || s.end == null) ? null : s;
  }
  // Computes the range that will represent the element/cells for *rendering*,
  // but which may have voided days/times.
  // not responsible for trimming hidden days.
  buildRenderRange(e, n, r) {
    return e;
  }
  // Compute the duration value that should be added/substracted to the current date
  // when a prev/next operation happens.
  buildDateIncrement(e) {
    let { dateIncrement: n } = this.props, r;
    return n || ((r = this.props.dateAlignment) ? Pe(1, r) : e || Pe({ days: 1 }));
  }
  refineRange(e) {
    if (e) {
      let n = j3(e, this.props.dateEnv);
      return n && (n = i0(n)), n;
    }
    return null;
  }
  /* Hidden Days
  ------------------------------------------------------------------------------------------------------------------*/
  // Initializes internal variables related to calculating hidden days-of-week
  initHiddenDays() {
    let e = this.props.hiddenDays || [], n = [], r = 0, i;
    for (this.props.weekends === !1 && e.push(0, 6), i = 0; i < 7; i += 1)
      (n[i] = e.indexOf(i) !== -1) || (r += 1);
    if (!r)
      throw new Error("invalid hiddenDays");
    this.isHiddenDayHash = n;
  }
  // Remove days from the beginning and end of the range that are computed as hidden.
  // If the whole range is trimmed off, returns null
  trimHiddenDays(e) {
    let { start: n, end: r } = e;
    return n && (n = this.skipHiddenDays(n)), r && (r = this.skipHiddenDays(r, -1, !0)), n == null || r == null || n < r ? { start: n, end: r } : null;
  }
  // Is the current day hidden?
  // `day` is a day-of-week index (0-6), or a Date (used for UTC)
  isHiddenDay(e) {
    return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e];
  }
  // Incrementing the current day until it is no longer a hidden day, returning a copy.
  // DOES NOT CONSIDER validRange!
  // If the initial value of `date` is not a hidden day, don't do anything.
  // Pass `isExclusive` as `true` if you are dealing with an end date.
  // `inc` defaults to `1` (increment one day forward each time)
  skipHiddenDays(e, n = 1, r = !1) {
    for (; this.isHiddenDayHash[(e.getUTCDay() + (r ? n : 0) + 7) % 7]; )
      e = Ct(e, n);
    return e;
  }
}
function f0(t, e, n) {
  n.emitter.trigger("select", Object.assign(Object.assign({}, hl(t, n)), { jsEvent: e ? e.origEvent : null, view: n.viewApi || n.calendarApi.view }));
}
function g2(t, e) {
  e.emitter.trigger("unselect", {
    jsEvent: t ? t.origEvent : null,
    view: e.viewApi || e.calendarApi.view
  });
}
function hl(t, e) {
  let n = {};
  for (let r of e.pluginHooks.dateSpanTransforms)
    Object.assign(n, r(t, e));
  return Object.assign(n, T2(t, e.dateEnv)), n;
}
function Du(t, e, n) {
  let { dateEnv: r, options: i } = n, s = e;
  return t ? (s = Qe(s), s = r.add(s, i.defaultAllDayEventDuration)) : s = r.add(s, i.defaultTimedEventDuration), s;
}
function pl(t, e, n, r) {
  let i = Vs(t.defs, e), s = $t();
  for (let o in t.defs) {
    let a = t.defs[o];
    s.defs[o] = v2(a, i[o], n, r);
  }
  for (let o in t.instances) {
    let a = t.instances[o], l = s.defs[a.defId];
    s.instances[o] = m2(a, l, i[a.defId], n, r);
  }
  return s;
}
function v2(t, e, n, r) {
  let i = n.standardProps || {};
  i.hasEnd == null && e.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
  let s = Object.assign(Object.assign(Object.assign({}, t), i), { ui: Object.assign(Object.assign({}, t.ui), i.ui) });
  n.extendedProps && (s.extendedProps = Object.assign(Object.assign({}, s.extendedProps), n.extendedProps));
  for (let o of r.pluginHooks.eventDefMutationAppliers)
    o(s, n, r);
  return !s.hasEnd && r.options.forceEventDuration && (s.hasEnd = !0), s;
}
function m2(t, e, n, r, i) {
  let { dateEnv: s } = i, o = r.standardProps && r.standardProps.allDay === !0, a = r.standardProps && r.standardProps.hasEnd === !1, l = Object.assign({}, t);
  return o && (l.range = r0(l.range)), r.datesDelta && n.startEditable && (l.range = {
    start: s.add(l.range.start, r.datesDelta),
    end: s.add(l.range.end, r.datesDelta)
  }), r.startDelta && n.durationEditable && (l.range = {
    start: s.add(l.range.start, r.startDelta),
    end: l.range.end
  }), r.endDelta && n.durationEditable && (l.range = {
    start: l.range.start,
    end: s.add(l.range.end, r.endDelta)
  }), a && (l.range = {
    start: l.range.start,
    end: Du(e.allDay, l.range.start, i)
  }), e.allDay && (l.range = {
    start: Qe(l.range.start),
    end: Qe(l.range.end)
  }), l.range.end < l.range.start && (l.range.end = Du(e.allDay, l.range.start, i)), l;
}
class ur {
  constructor(e, n) {
    this.context = e, this.internalEventSource = n;
  }
  remove() {
    this.context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: this.internalEventSource.sourceId
    });
  }
  refetch() {
    this.context.dispatch({
      type: "FETCH_EVENT_SOURCES",
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: !0
    });
  }
  get id() {
    return this.internalEventSource.publicId;
  }
  get url() {
    return this.internalEventSource.meta.url;
  }
  get format() {
    return this.internalEventSource.meta.format;
  }
}
class Xe {
  // instance will be null if expressing a recurring event that has no current instances,
  // OR if trying to validate an incoming external event that has no dates assigned
  constructor(e, n, r) {
    this._context = e, this._def = n, this._instance = r || null;
  }
  /*
  TODO: make event struct more responsible for this
  */
  setProp(e, n) {
    if (e in e0)
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    else if (e === "id")
      n = Fi[e](n), this.mutate({
        standardProps: { publicId: n }
        // hardcoded internal name
      });
    else if (e in Fi)
      n = Fi[e](n), this.mutate({
        standardProps: { [e]: n }
      });
    else if (e in Hs) {
      let r = Hs[e](n);
      e === "color" ? r = { backgroundColor: n, borderColor: n } : e === "editable" ? r = { startEditable: n, durationEditable: n } : r = { [e]: n }, this.mutate({
        standardProps: { ui: r }
      });
    } else
      console.warn(`Could not set prop '${e}'. Use setExtendedProp instead.`);
  }
  setExtendedProp(e, n) {
    this.mutate({
      extendedProps: { [e]: n }
    });
  }
  setStart(e, n = {}) {
    let { dateEnv: r } = this._context, i = r.createMarker(e);
    if (i && this._instance) {
      let s = this._instance.range, o = fr(s.start, i, r, n.granularity);
      n.maintainDuration ? this.mutate({ datesDelta: o }) : this.mutate({ startDelta: o });
    }
  }
  setEnd(e, n = {}) {
    let { dateEnv: r } = this._context, i;
    if (!(e != null && (i = r.createMarker(e), !i)) && this._instance)
      if (i) {
        let s = fr(this._instance.range.end, i, r, n.granularity);
        this.mutate({ endDelta: s });
      } else
        this.mutate({ standardProps: { hasEnd: !1 } });
  }
  setDates(e, n, r = {}) {
    let { dateEnv: i } = this._context, s = { allDay: r.allDay }, o = i.createMarker(e), a;
    if (o && !(n != null && (a = i.createMarker(n), !a)) && this._instance) {
      let l = this._instance.range;
      r.allDay === !0 && (l = r0(l));
      let c = fr(l.start, o, i, r.granularity);
      if (a) {
        let u = fr(l.end, a, i, r.granularity);
        Hy(c, u) ? this.mutate({ datesDelta: c, standardProps: s }) : this.mutate({ startDelta: c, endDelta: u, standardProps: s });
      } else
        s.hasEnd = !1, this.mutate({ datesDelta: c, standardProps: s });
    }
  }
  moveStart(e) {
    let n = Pe(e);
    n && this.mutate({ startDelta: n });
  }
  moveEnd(e) {
    let n = Pe(e);
    n && this.mutate({ endDelta: n });
  }
  moveDates(e) {
    let n = Pe(e);
    n && this.mutate({ datesDelta: n });
  }
  setAllDay(e, n = {}) {
    let r = { allDay: e }, { maintainDuration: i } = n;
    i == null && (i = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (r.hasEnd = i), this.mutate({ standardProps: r });
  }
  formatRange(e) {
    let { dateEnv: n } = this._context, r = this._instance, i = et(e);
    return this._def.hasEnd ? n.formatRange(r.range.start, r.range.end, i, {
      forcedStartTzo: r.forcedStartTzo,
      forcedEndTzo: r.forcedEndTzo
    }) : n.format(r.range.start, i, {
      forcedTzo: r.forcedStartTzo
    });
  }
  mutate(e) {
    let n = this._instance;
    if (n) {
      let r = this._def, i = this._context, { eventStore: s } = i.getCurrentData(), o = ol(s, n.instanceId);
      o = pl(o, {
        "": {
          display: "",
          startEditable: !0,
          durationEditable: !0,
          constraints: [],
          overlap: null,
          allows: [],
          backgroundColor: "",
          borderColor: "",
          textColor: "",
          classNames: []
        }
      }, e, i);
      let l = new Xe(i, r, n);
      this._def = o.defs[r.defId], this._instance = o.instances[n.instanceId], i.dispatch({
        type: "MERGE_EVENTS",
        eventStore: o
      }), i.emitter.trigger("eventChange", {
        oldEvent: l,
        event: this,
        relatedEvents: Gn(o, i, n),
        revert() {
          i.dispatch({
            type: "RESET_EVENTS",
            eventStore: s
            // the ORIGINAL store
          });
        }
      });
    }
  }
  remove() {
    let e = this._context, n = h0(this);
    e.dispatch({
      type: "REMOVE_EVENTS",
      eventStore: n
    }), e.emitter.trigger("eventRemove", {
      event: this,
      relatedEvents: [],
      revert() {
        e.dispatch({
          type: "MERGE_EVENTS",
          eventStore: n
        });
      }
    });
  }
  get source() {
    let { sourceId: e } = this._def;
    return e ? new ur(this._context, this._context.getCurrentData().eventSources[e]) : null;
  }
  get start() {
    return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
  }
  get end() {
    return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
  }
  get startStr() {
    let e = this._instance;
    return e ? this._context.dateEnv.formatIso(e.range.start, {
      omitTime: this._def.allDay,
      forcedTzo: e.forcedStartTzo
    }) : "";
  }
  get endStr() {
    let e = this._instance;
    return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
      omitTime: this._def.allDay,
      forcedTzo: e.forcedEndTzo
    }) : "";
  }
  // computable props that all access the def
  // TODO: find a TypeScript-compatible way to do this at scale
  get id() {
    return this._def.publicId;
  }
  get groupId() {
    return this._def.groupId;
  }
  get allDay() {
    return this._def.allDay;
  }
  get title() {
    return this._def.title;
  }
  get url() {
    return this._def.url;
  }
  get display() {
    return this._def.ui.display || "auto";
  }
  // bad. just normalize the type earlier
  get startEditable() {
    return this._def.ui.startEditable;
  }
  get durationEditable() {
    return this._def.ui.durationEditable;
  }
  get constraint() {
    return this._def.ui.constraints[0] || null;
  }
  get overlap() {
    return this._def.ui.overlap;
  }
  get allow() {
    return this._def.ui.allows[0] || null;
  }
  get backgroundColor() {
    return this._def.ui.backgroundColor;
  }
  get borderColor() {
    return this._def.ui.borderColor;
  }
  get textColor() {
    return this._def.ui.textColor;
  }
  // NOTE: user can't modify these because Object.freeze was called in event-def parsing
  get classNames() {
    return this._def.ui.classNames;
  }
  get extendedProps() {
    return this._def.extendedProps;
  }
  toPlainObject(e = {}) {
    let n = this._def, { ui: r } = n, { startStr: i, endStr: s } = this, o = {
      allDay: n.allDay
    };
    return n.title && (o.title = n.title), i && (o.start = i), s && (o.end = s), n.publicId && (o.id = n.publicId), n.groupId && (o.groupId = n.groupId), n.url && (o.url = n.url), r.display && r.display !== "auto" && (o.display = r.display), e.collapseColor && r.backgroundColor && r.backgroundColor === r.borderColor ? o.color = r.backgroundColor : (r.backgroundColor && (o.backgroundColor = r.backgroundColor), r.borderColor && (o.borderColor = r.borderColor)), r.textColor && (o.textColor = r.textColor), r.classNames.length && (o.classNames = r.classNames), Object.keys(n.extendedProps).length && (e.collapseExtendedProps ? Object.assign(o, n.extendedProps) : o.extendedProps = n.extendedProps), o;
  }
  toJSON() {
    return this.toPlainObject();
  }
}
function h0(t) {
  let e = t._def, n = t._instance;
  return {
    defs: { [e.defId]: e },
    instances: n ? { [n.instanceId]: n } : {}
  };
}
function Gn(t, e, n) {
  let { defs: r, instances: i } = t, s = [], o = n ? n.instanceId : "";
  for (let a in i) {
    let l = i[a], c = r[l.defId];
    l.instanceId !== o && s.push(new Xe(e, c, l));
  }
  return s;
}
function Tu(t, e, n, r) {
  let i = {}, s = {}, o = {}, a = [], l = [], c = Vs(t.defs, e);
  for (let u in t.defs) {
    let h = t.defs[u];
    c[h.defId].display === "inverse-background" && (h.groupId ? (i[h.groupId] = [], o[h.groupId] || (o[h.groupId] = h)) : s[u] = []);
  }
  for (let u in t.instances) {
    let h = t.instances[u], d = t.defs[h.defId], f = c[d.defId], g = h.range, p = !d.allDay && r ? i0(g, r) : g, v = Jn(p, n);
    v && (f.display === "inverse-background" ? d.groupId ? i[d.groupId].push(v) : s[h.defId].push(v) : f.display !== "none" && (f.display === "background" ? a : l).push({
      def: d,
      ui: f,
      instance: h,
      range: v,
      isStart: p.start && p.start.valueOf() === v.start.valueOf(),
      isEnd: p.end && p.end.valueOf() === v.end.valueOf()
    }));
  }
  for (let u in i) {
    let h = i[u], d = ku(h, n);
    for (let f of d) {
      let g = o[u], p = c[g.defId];
      a.push({
        def: g,
        ui: p,
        instance: null,
        range: f,
        isStart: !1,
        isEnd: !1
      });
    }
  }
  for (let u in s) {
    let h = s[u], d = ku(h, n);
    for (let f of d)
      a.push({
        def: t.defs[u],
        ui: c[u],
        instance: null,
        range: f,
        isStart: !1,
        isEnd: !1
      });
  }
  return { bg: a, fg: l };
}
function b2(t) {
  return t.ui.display === "background" || t.ui.display === "inverse-background";
}
function Ru(t, e) {
  t.fcSeg = e;
}
function Cr(t) {
  return t.fcSeg || t.parentNode.fcSeg || // for the harness
  null;
}
function Vs(t, e) {
  return xn(t, (n) => p0(n, e));
}
function p0(t, e) {
  let n = [];
  return e[""] && n.push(e[""]), e[t.defId] && n.push(e[t.defId]), n.push(t.ui), Jf(n);
}
function g0(t, e) {
  let n = t.map(y2);
  return n.sort((r, i) => My(r, i, e)), n.map((r) => r._seg);
}
function y2(t) {
  let { eventRange: e } = t, n = e.def, r = e.instance ? e.instance.range : e.range, i = r.start ? r.start.valueOf() : 0, s = r.end ? r.end.valueOf() : 0;
  return Object.assign(Object.assign(Object.assign({}, n.extendedProps), n), {
    id: n.publicId,
    start: i,
    end: s,
    duration: s - i,
    allDay: Number(n.allDay),
    _seg: t
  });
}
function x2(t, e) {
  let { pluginHooks: n } = e, r = n.isDraggableTransformers, { def: i, ui: s } = t.eventRange, o = s.startEditable;
  for (let a of r)
    o = a(o, i, s, e);
  return o;
}
function _2(t, e) {
  return t.isStart && t.eventRange.ui.durationEditable && e.options.eventResizableFromStart;
}
function w2(t, e) {
  return t.isEnd && t.eventRange.ui.durationEditable;
}
function v0(t, e, n, r, i, s, o) {
  let { dateEnv: a, options: l } = n, { displayEventTime: c, displayEventEnd: u } = l, h = t.eventRange.def, d = t.eventRange.instance;
  c == null && (c = r !== !1), u == null && (u = i !== !1);
  let f = d.range.start, g = d.range.end, p = s || t.start || t.eventRange.range.start, v = o || t.end || t.eventRange.range.end, m = Qe(f).valueOf() === Qe(p).valueOf(), x = Qe(Nn(g, -1)).valueOf() === Qe(Nn(v, -1)).valueOf();
  return c && !h.allDay && (m || x) ? (p = m ? f : p, v = x ? g : v, u && h.hasEnd ? a.formatRange(p, v, e, {
    forcedStartTzo: s ? null : d.forcedStartTzo,
    forcedEndTzo: o ? null : d.forcedEndTzo
  }) : a.format(p, e, {
    forcedTzo: s ? null : d.forcedStartTzo
    // nooooo, same
  })) : "";
}
function Rn(t, e, n) {
  let r = t.eventRange.range;
  return {
    isPast: r.end < (n || e.start),
    isFuture: r.start >= (n || e.end),
    isToday: e && yn(e, r.start)
  };
}
function S2(t) {
  let e = ["fc-event"];
  return t.isMirror && e.push("fc-event-mirror"), t.isDraggable && e.push("fc-event-draggable"), (t.isStartResizable || t.isEndResizable) && e.push("fc-event-resizable"), t.isDragging && e.push("fc-event-dragging"), t.isResizing && e.push("fc-event-resizing"), t.isSelected && e.push("fc-event-selected"), t.isStart && e.push("fc-event-start"), t.isEnd && e.push("fc-event-end"), t.isPast && e.push("fc-event-past"), t.isToday && e.push("fc-event-today"), t.isFuture && e.push("fc-event-future"), e;
}
function m0(t) {
  return t.instance ? t.instance.instanceId : `${t.def.defId}:${t.range.start.toISOString()}`;
}
function b0(t, e) {
  let { def: n, instance: r } = t.eventRange, { url: i } = n;
  if (i)
    return { href: i };
  let { emitter: s, options: o } = e, { eventInteractive: a } = o;
  return a == null && (a = n.interactive, a == null && (a = !!s.hasHandlers("eventClick"))), a ? Qf((l) => {
    s.trigger("eventClick", {
      el: l.target,
      event: new Xe(e, n, r),
      jsEvent: l,
      view: e.viewApi
    });
  }) : {};
}
const E2 = {
  start: X,
  end: X,
  allDay: Boolean
};
function C2(t, e, n) {
  let r = k2(t, e), { range: i } = r;
  if (!i.start)
    return null;
  if (!i.end) {
    if (n == null)
      return null;
    i.end = e.add(i.start, n);
  }
  return r;
}
function k2(t, e) {
  let { refined: n, extra: r } = il(t, E2), i = n.start ? e.createMarkerMeta(n.start) : null, s = n.end ? e.createMarkerMeta(n.end) : null, { allDay: o } = n;
  return o == null && (o = i && i.isTimeUnspecified && (!s || s.isTimeUnspecified)), Object.assign({ range: {
    start: i ? i.marker : null,
    end: s ? s.marker : null
  }, allDay: o }, r);
}
function A2(t, e) {
  return q3(t.range, e.range) && t.allDay === e.allDay && D2(t, e);
}
function D2(t, e) {
  for (let n in e)
    if (n !== "range" && n !== "allDay" && t[n] !== e[n])
      return !1;
  for (let n in t)
    if (!(n in e))
      return !1;
  return !0;
}
function T2(t, e) {
  return Object.assign(Object.assign({}, x0(t.range, e, t.allDay)), { allDay: t.allDay });
}
function y0(t, e, n) {
  return Object.assign(Object.assign({}, x0(t, e, n)), { timeZone: e.timeZone });
}
function x0(t, e, n) {
  return {
    start: e.toDate(t.start),
    end: e.toDate(t.end),
    startStr: e.formatIso(t.start, { omitTime: n }),
    endStr: e.formatIso(t.end, { omitTime: n })
  };
}
function R2(t, e, n) {
  let r = n0({ editable: !1 }, n), i = _a(
    r.refined,
    r.extra,
    "",
    // sourceId
    t.allDay,
    !0,
    // hasEnd
    n
  );
  return {
    def: i,
    ui: p0(i, e),
    instance: sl(i.defId, t.range),
    range: t.range,
    isStart: !0,
    isEnd: !0
  };
}
let _0 = {};
function I2(t, e) {
  _0[t] = e;
}
function M2(t) {
  return new _0[t]();
}
class O2 {
  getMarkerYear(e) {
    return e.getUTCFullYear();
  }
  getMarkerMonth(e) {
    return e.getUTCMonth();
  }
  getMarkerDay(e) {
    return e.getUTCDate();
  }
  arrayToMarker(e) {
    return Nt(e);
  }
  markerToArray(e) {
    return Dn(e);
  }
}
I2("gregory", O2);
const N2 = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function B2(t) {
  let e = N2.exec(t);
  if (e) {
    let n = new Date(Date.UTC(Number(e[1]), e[3] ? Number(e[3]) - 1 : 0, Number(e[5] || 1), Number(e[7] || 0), Number(e[8] || 0), Number(e[10] || 0), e[12] ? +`0.${e[12]}` * 1e3 : 0));
    if (Kf(n)) {
      let r = null;
      return e[13] && (r = (e[15] === "-" ? -1 : 1) * (Number(e[16] || 0) * 60 + Number(e[18] || 0))), {
        marker: n,
        isTimeUnspecified: !e[6],
        timeZoneOffset: r
      };
    }
  }
  return null;
}
class L2 {
  constructor(e) {
    let n = this.timeZone = e.timeZone, r = n !== "local" && n !== "UTC";
    e.namedTimeZoneImpl && r && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(n)), this.canComputeOffset = !!(!r || this.namedTimeZoneImpl), this.calendarSystem = M2(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, e.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof e.firstDay == "number" && (this.weekDow = e.firstDay), typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = e.weekText != null ? e.weekText : e.locale.options.weekText, this.weekTextLong = (e.weekTextLong != null ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
  }
  // Creating / Parsing
  createMarker(e) {
    let n = this.createMarkerMeta(e);
    return n === null ? null : n.marker;
  }
  createNowMarker() {
    return this.canComputeOffset ? this.timestampToMarker((/* @__PURE__ */ new Date()).valueOf()) : Nt(mu(/* @__PURE__ */ new Date()));
  }
  createMarkerMeta(e) {
    if (typeof e == "string")
      return this.parse(e);
    let n = null;
    return typeof e == "number" ? n = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (n = this.timestampToMarker(e))) : Array.isArray(e) && (n = Nt(e)), n === null || !Kf(n) ? null : { marker: n, isTimeUnspecified: !1, forcedTzo: null };
  }
  parse(e) {
    let n = B2(e);
    if (n === null)
      return null;
    let { marker: r } = n, i = null;
    return n.timeZoneOffset !== null && (this.canComputeOffset ? r = this.timestampToMarker(r.valueOf() - n.timeZoneOffset * 60 * 1e3) : i = n.timeZoneOffset), { marker: r, isTimeUnspecified: n.isTimeUnspecified, forcedTzo: i };
  }
  // Accessors
  getYear(e) {
    return this.calendarSystem.getMarkerYear(e);
  }
  getMonth(e) {
    return this.calendarSystem.getMarkerMonth(e);
  }
  getDay(e) {
    return this.calendarSystem.getMarkerDay(e);
  }
  // Adding / Subtracting
  add(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[0] += n.years, r[1] += n.months, r[2] += n.days, r[6] += n.milliseconds, this.calendarSystem.arrayToMarker(r);
  }
  subtract(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[0] -= n.years, r[1] -= n.months, r[2] -= n.days, r[6] -= n.milliseconds, this.calendarSystem.arrayToMarker(r);
  }
  addYears(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[0] += n, this.calendarSystem.arrayToMarker(r);
  }
  addMonths(e, n) {
    let r = this.calendarSystem.markerToArray(e);
    return r[1] += n, this.calendarSystem.arrayToMarker(r);
  }
  // Diffing Whole Units
  diffWholeYears(e, n) {
    let { calendarSystem: r } = this;
    return Tn(e) === Tn(n) && r.getMarkerDay(e) === r.getMarkerDay(n) && r.getMarkerMonth(e) === r.getMarkerMonth(n) ? r.getMarkerYear(n) - r.getMarkerYear(e) : null;
  }
  diffWholeMonths(e, n) {
    let { calendarSystem: r } = this;
    return Tn(e) === Tn(n) && r.getMarkerDay(e) === r.getMarkerDay(n) ? r.getMarkerMonth(n) - r.getMarkerMonth(e) + (r.getMarkerYear(n) - r.getMarkerYear(e)) * 12 : null;
  }
  // Range / Duration
  greatestWholeUnit(e, n) {
    let r = this.diffWholeYears(e, n);
    return r !== null ? { unit: "year", value: r } : (r = this.diffWholeMonths(e, n), r !== null ? { unit: "month", value: r } : (r = e3(e, n), r !== null ? { unit: "week", value: r } : (r = Ls(e, n), r !== null ? { unit: "day", value: r } : (r = Zy(e, n), $i(r) ? { unit: "hour", value: r } : (r = Ky(e, n), $i(r) ? { unit: "minute", value: r } : (r = Xy(e, n), $i(r) ? { unit: "second", value: r } : { unit: "millisecond", value: n.valueOf() - e.valueOf() }))))));
  }
  countDurationsBetween(e, n, r) {
    let i;
    return r.years && (i = this.diffWholeYears(e, n), i !== null) ? i / Vy(r) : r.months && (i = this.diffWholeMonths(e, n), i !== null) ? i / Uy(r) : r.days && (i = Ls(e, n), i !== null) ? i / vr(r) : (n.valueOf() - e.valueOf()) / Qt(r);
  }
  // Start-Of
  // these DON'T return zoned-dates. only UTC start-of dates
  startOf(e, n) {
    return n === "year" ? this.startOfYear(e) : n === "month" ? this.startOfMonth(e) : n === "week" ? this.startOfWeek(e) : n === "day" ? Qe(e) : n === "hour" ? t3(e) : n === "minute" ? n3(e) : n === "second" ? r3(e) : null;
  }
  startOfYear(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e)
    ]);
  }
  startOfMonth(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e),
      this.calendarSystem.getMarkerMonth(e)
    ]);
  }
  startOfWeek(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e),
      this.calendarSystem.getMarkerMonth(e),
      e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7
    ]);
  }
  // Week Number
  computeWeekNumber(e) {
    return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : i3(e, this.weekDow, this.weekDoy);
  }
  // TODO: choke on timeZoneName: long
  format(e, n, r = {}) {
    return n.format({
      marker: e,
      timeZoneOffset: r.forcedTzo != null ? r.forcedTzo : this.offsetForMarker(e)
    }, this);
  }
  formatRange(e, n, r, i = {}) {
    return i.isEndExclusive && (n = Nn(n, -1)), r.formatRange({
      marker: e,
      timeZoneOffset: i.forcedStartTzo != null ? i.forcedStartTzo : this.offsetForMarker(e)
    }, {
      marker: n,
      timeZoneOffset: i.forcedEndTzo != null ? i.forcedEndTzo : this.offsetForMarker(n)
    }, this, i.defaultSeparator);
  }
  /*
  DUMB: the omitTime arg is dumb. if we omit the time, we want to omit the timezone offset. and if we do that,
  might as well use buildIsoString or some other util directly
  */
  formatIso(e, n = {}) {
    let r = null;
    return n.omitTimeZoneOffset || (n.forcedTzo != null ? r = n.forcedTzo : r = this.offsetForMarker(e)), Xf(e, r, n.omitTime);
  }
  // TimeZone
  timestampToMarker(e) {
    return this.timeZone === "local" ? Nt(mu(new Date(e))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(e) : Nt(this.namedTimeZoneImpl.timestampToArray(e));
  }
  offsetForMarker(e) {
    return this.timeZone === "local" ? -bu(Dn(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(Dn(e)) : null;
  }
  // Conversion
  toDate(e, n) {
    return this.timeZone === "local" ? bu(Dn(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(Dn(e)) * 1e3 * 60) : new Date(e.valueOf() - (n || 0));
  }
}
class w0 {
  constructor() {
    this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {};
  }
  addSegs(e) {
    let n = [];
    for (let r of e)
      this.insertEntry(r, n);
    return n;
  }
  insertEntry(e, n) {
    let r = this.findInsertion(e);
    return this.isInsertionValid(r, e) ? (this.insertEntryAt(e, r), 1) : this.handleInvalidInsertion(r, e, n);
  }
  isInsertionValid(e, n) {
    return (this.maxCoord === -1 || e.levelCoord + n.thickness <= this.maxCoord) && (this.maxStackCnt === -1 || e.stackCnt < this.maxStackCnt);
  }
  // returns number of new entries inserted
  handleInvalidInsertion(e, n, r) {
    return this.allowReslicing && e.touchingEntry ? this.splitEntry(n, e.touchingEntry, r) : (r.push(n), 0);
  }
  splitEntry(e, n, r) {
    let i = 0, s = [], o = e.span, a = n.span;
    return o.start < a.start && (i += this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: o.start, end: a.start }
    }, s)), o.end > a.end && (i += this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: a.end, end: o.end }
    }, s)), i ? (r.push({
      index: e.index,
      thickness: e.thickness,
      span: gl(a, o)
      // guaranteed to intersect
    }, ...s), i) : (r.push(e), 0);
  }
  insertEntryAt(e, n) {
    let { entriesByLevel: r, levelCoords: i } = this;
    n.lateral === -1 ? (Uo(i, n.level, n.levelCoord), Uo(r, n.level, [e])) : Uo(r[n.level], n.lateral, e), this.stackCnts[Qn(e)] = n.stackCnt;
  }
  findInsertion(e) {
    let { levelCoords: n, entriesByLevel: r, strictOrder: i, stackCnts: s } = this, o = n.length, a = 0, l = -1, c = -1, u = null, h = 0;
    for (let g = 0; g < o; g += 1) {
      let p = n[g];
      if (!i && p >= a + e.thickness)
        break;
      let v = r[g], m, x = Sa(v, e.span.start, wa), b = x[0] + x[1];
      for (
        ;
        // loop through entries that horizontally intersect
        (m = v[b]) && // but not past the whole entry list
        m.span.start < e.span.end;
      ) {
        let _ = p + m.thickness;
        _ > a && (a = _, u = m, l = g, c = b), _ === a && (h = Math.max(h, s[Qn(m)] + 1)), b += 1;
      }
    }
    let d = 0;
    if (u)
      for (d = l + 1; d < o && n[d] < a; )
        d += 1;
    let f = -1;
    return d < o && n[d] === a && (f = Sa(r[d], e.span.end, wa)[0]), {
      touchingLevel: l,
      touchingLateral: c,
      touchingEntry: u,
      stackCnt: h,
      levelCoord: a,
      level: d,
      lateral: f
    };
  }
  // sorted by levelCoord (lowest to highest)
  toRects() {
    let { entriesByLevel: e, levelCoords: n } = this, r = e.length, i = [];
    for (let s = 0; s < r; s += 1) {
      let o = e[s], a = n[s];
      for (let l of o)
        i.push(Object.assign(Object.assign({}, l), { levelCoord: a }));
    }
    return i;
  }
}
function wa(t) {
  return t.span.end;
}
function Qn(t) {
  return t.index + ":" + t.span.start;
}
function P2(t) {
  let e = [];
  for (let n of t) {
    let r = [], i = {
      span: n.span,
      entries: [n]
    };
    for (let s of e)
      gl(s.span, i.span) ? i = {
        entries: s.entries.concat(i.entries),
        span: $2(s.span, i.span)
      } : r.push(s);
    r.push(i), e = r;
  }
  return e;
}
function $2(t, e) {
  return {
    start: Math.min(t.start, e.start),
    end: Math.max(t.end, e.end)
  };
}
function gl(t, e) {
  let n = Math.max(t.start, e.start), r = Math.min(t.end, e.end);
  return n < r ? { start: n, end: r } : null;
}
function Uo(t, e, n) {
  t.splice(e, 0, n);
}
function Sa(t, e, n) {
  let r = 0, i = t.length;
  if (!i || e < n(t[r]))
    return [0, 0];
  if (e > n(t[i - 1]))
    return [i, 0];
  for (; r < i; ) {
    let s = Math.floor(r + (i - r) / 2), o = n(t[s]);
    if (e < o)
      i = s;
    else if (e > o)
      r = s + 1;
    else
      return [s, 1];
  }
  return [r, 0];
}
class Rr {
  constructor(e) {
    this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
  }
  destroy() {
  }
}
function H2(t, e) {
  return {
    component: t,
    el: e.el,
    useEventCenter: e.useEventCenter != null ? e.useEventCenter : !0,
    isHitComboAllowed: e.isHitComboAllowed || null
  };
}
function vl(t) {
  return {
    [t.component.uid]: t
  };
}
const Ea = {};
class F2 {
  constructor(e, n) {
    this.emitter = new oo();
  }
  destroy() {
  }
  setMirrorIsVisible(e) {
  }
  setMirrorNeedsRevert(e) {
  }
  setAutoScrollEnabled(e) {
  }
}
const ml = {};
class z2 extends Ue {
  constructor() {
    super(...arguments), this.state = {
      forPrint: !1
    }, this.handleBeforePrint = () => {
      this.setState({ forPrint: !0 });
    }, this.handleAfterPrint = () => {
      this.setState({ forPrint: !1 });
    };
  }
  render() {
    let { props: e } = this, { options: n } = e, { forPrint: r } = this.state, i = r || n.height === "auto" || n.contentHeight === "auto", s = !i && n.height != null ? n.height : "", o = [
      "fc",
      r ? "fc-media-print" : "fc-media-screen",
      `fc-direction-${n.direction}`,
      e.theme.getClass("root")
    ];
    return o0() || o.push("fc-liquid-hack"), e.children(o, s, i, r);
  }
  componentDidMount() {
    let { emitter: e } = this.props;
    e.on("_beforeprint", this.handleBeforePrint), e.on("_afterprint", this.handleAfterPrint);
  }
  componentWillUnmount() {
    let { emitter: e } = this.props;
    e.off("_beforeprint", this.handleBeforePrint), e.off("_afterprint", this.handleAfterPrint);
  }
}
function V2(t, e) {
  return !t || e > 10 ? et({ weekday: "short" }) : e > 1 ? et({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : et({ weekday: "long" });
}
const S0 = "fc-col-header-cell";
function E0(t) {
  return t.text;
}
class bl extends Ue {
  constructor() {
    super(...arguments), this.id = ir(), this.queuedDomNodes = [], this.currentDomNodes = [], this.handleEl = (e) => {
      this.props.elRef && _n(this.props.elRef, e);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: r } = n, { customGenerator: i, defaultGenerator: s, renderProps: o } = e, a = k0(e);
    let l = !1, c, u = [], h;
    if (i != null) {
      const d = typeof i == "function" ? i(o, O) : i;
      if (d === !0)
        l = !0;
      else {
        const f = d && typeof d == "object";
        f && "html" in d ? a.dangerouslySetInnerHTML = { __html: d.html } : f && "domNodes" in d ? u = Array.prototype.slice.call(d.domNodes) : !f && typeof d != "function" ? c = d : h = d;
      }
    } else
      l = !C0(e.generatorName, r);
    return l && s && (c = s(o)), this.queuedDomNodes = u, this.currentGeneratorMeta = h, O(e.elTag, a, c);
  }
  componentDidMount() {
    this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
  }
  componentDidUpdate() {
    this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
  }
  componentWillUnmount() {
    this.triggerCustomRendering(!1);
  }
  triggerCustomRendering(e) {
    var n;
    const { props: r, context: i } = this, { handleCustomRendering: s, customRenderingMetaMap: o } = i.options;
    if (s) {
      const a = (n = this.currentGeneratorMeta) !== null && n !== void 0 ? n : o == null ? void 0 : o[r.generatorName];
      a && s(Object.assign(Object.assign({
        id: this.id,
        isActive: e,
        containerEl: this.base,
        reportNewContainerEl: this.handleEl,
        // for customRenderingReplacesEl
        generatorMeta: a
      }, r), { elClasses: (r.elClasses || []).filter(U2) }));
    }
  }
  applyQueueudDomNodes() {
    const { queuedDomNodes: e, currentDomNodes: n } = this, r = this.base;
    if (!On(e, n)) {
      n.forEach(Za);
      for (let i of e)
        r.appendChild(i);
      this.currentDomNodes = e;
    }
  }
}
bl.addPropsEquality({
  elClasses: On,
  elStyle: an,
  elAttrs: Wy,
  renderProps: an
});
function C0(t, e) {
  var n;
  return !!(e.handleCustomRendering && t && (!((n = e.customRenderingMetaMap) === null || n === void 0) && n[t]));
}
function k0(t, e) {
  const n = Object.assign(Object.assign({}, t.elAttrs), { ref: t.elRef });
  return (t.elClasses || e) && (n.className = (t.elClasses || []).concat(e || []).concat(n.className || []).filter(Boolean).join(" ")), t.elStyle && (n.style = t.elStyle), n;
}
function U2(t) {
  return !!t;
}
const A0 = u0(0);
class Ht extends Pt {
  constructor() {
    super(...arguments), this.InnerContent = j2.bind(void 0, this), this.handleRootEl = (e) => {
      this.rootEl = e, this.props.elRef && _n(this.props.elRef, e);
    };
  }
  render() {
    const { props: e } = this, n = W2(e.classNameGenerator, e.renderProps);
    if (e.children) {
      const r = k0(e, n), i = e.children(this.InnerContent, e.renderProps, r);
      return e.elTag ? O(e.elTag, r, i) : i;
    } else
      return O(bl, Object.assign(Object.assign({}, e), { elRef: this.handleRootEl, elTag: e.elTag || "div", elClasses: (e.elClasses || []).concat(n), renderId: this.context }));
  }
  componentDidMount() {
    var e, n;
    (n = (e = this.props).didMount) === null || n === void 0 || n.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.rootEl || this.base }));
  }
  componentWillUnmount() {
    var e, n;
    (n = (e = this.props).willUnmount) === null || n === void 0 || n.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.rootEl || this.base }));
  }
}
Ht.contextType = A0;
function j2(t, e) {
  const n = t.props;
  return O(bl, Object.assign({ renderProps: n.renderProps, generatorName: n.generatorName, customGenerator: n.customGenerator, defaultGenerator: n.defaultGenerator, renderId: t.context }, e));
}
function W2(t, e) {
  const n = typeof t == "function" ? t(e) : t || [];
  return typeof n == "string" ? [n] : n;
}
class q2 extends Ue {
  render() {
    let { dateEnv: e, options: n, theme: r, viewApi: i } = this.context, { props: s } = this, { date: o, dateProfile: a } = s, l = a0(o, s.todayRange, null, a), c = [S0].concat(ul(l, r)), u = e.format(o, s.dayHeaderFormat), h = !l.isDisabled && s.colCnt > 1 ? zs(this.context, o) : {}, d = Object.assign(Object.assign(Object.assign({ date: e.toDate(o), view: i }, s.extraRenderProps), { text: u }), l);
    return O(Ht, { elTag: "th", elClasses: c, elAttrs: Object.assign({ role: "columnheader", colSpan: s.colSpan, "data-date": l.isDisabled ? void 0 : nl(o) }, s.extraDataAttrs), renderProps: d, generatorName: "dayHeaderContent", customGenerator: n.dayHeaderContent, defaultGenerator: E0, classNameGenerator: n.dayHeaderClassNames, didMount: n.dayHeaderDidMount, willUnmount: n.dayHeaderWillUnmount }, (f) => O("div", { className: "fc-scrollgrid-sync-inner" }, !l.isDisabled && O(f, { elTag: "a", elAttrs: h, elClasses: [
      "fc-col-header-cell-cushion",
      s.isSticky && "fc-sticky"
    ] })));
  }
}
const Y2 = et({ weekday: "long" });
class G2 extends Ue {
  render() {
    let { props: e } = this, { dateEnv: n, theme: r, viewApi: i, options: s } = this.context, o = Ct(/* @__PURE__ */ new Date(2592e5), e.dow), a = {
      dow: e.dow,
      isDisabled: !1,
      isFuture: !1,
      isPast: !1,
      isToday: !1,
      isOther: !1
    }, l = n.format(o, e.dayHeaderFormat), c = Object.assign(Object.assign(Object.assign(Object.assign({
      // TODO: make this public?
      date: o
    }, a), { view: i }), e.extraRenderProps), { text: l });
    return O(Ht, { elTag: "th", elClasses: [
      S0,
      ...ul(a, r),
      ...e.extraClassNames || []
    ], elAttrs: Object.assign({ role: "columnheader", colSpan: e.colSpan }, e.extraDataAttrs), renderProps: c, generatorName: "dayHeaderContent", customGenerator: s.dayHeaderContent, defaultGenerator: E0, classNameGenerator: s.dayHeaderClassNames, didMount: s.dayHeaderDidMount, willUnmount: s.dayHeaderWillUnmount }, (u) => O(
      "div",
      { className: "fc-scrollgrid-sync-inner" },
      O(u, { elTag: "a", elClasses: [
        "fc-col-header-cell-cushion",
        e.isSticky && "fc-sticky"
      ], elAttrs: {
        "aria-label": n.format(o, Y2)
      } })
    ));
  }
}
class ai extends Pt {
  constructor(e, n) {
    super(e, n), this.initialNowDate = oi(n.options.now, n.dateEnv), this.initialNowQueriedMs = (/* @__PURE__ */ new Date()).valueOf(), this.state = this.computeTiming().currentState;
  }
  render() {
    let { props: e, state: n } = this;
    return e.children(n.nowDate, n.todayRange);
  }
  componentDidMount() {
    this.setTimeout();
  }
  componentDidUpdate(e) {
    e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
  }
  componentWillUnmount() {
    this.clearTimeout();
  }
  computeTiming() {
    let { props: e, context: n } = this, r = Nn(this.initialNowDate, (/* @__PURE__ */ new Date()).valueOf() - this.initialNowQueriedMs), i = n.dateEnv.startOf(r, e.unit), s = n.dateEnv.add(i, Pe(1, e.unit)), o = s.valueOf() - r.valueOf();
    return o = Math.min(1e3 * 60 * 60 * 24, o), {
      currentState: { nowDate: i, todayRange: Iu(i) },
      nextState: { nowDate: s, todayRange: Iu(s) },
      waitMs: o
    };
  }
  setTimeout() {
    let { nextState: e, waitMs: n } = this.computeTiming();
    this.timeoutId = setTimeout(() => {
      this.setState(e, () => {
        this.setTimeout();
      });
    }, n);
  }
  clearTimeout() {
    this.timeoutId && clearTimeout(this.timeoutId);
  }
}
ai.contextType = wn;
function Iu(t) {
  let e = Qe(t), n = Ct(e, 1);
  return { start: e, end: n };
}
class D0 extends Ue {
  constructor() {
    super(...arguments), this.createDayHeaderFormatter = Ce(Q2);
  }
  render() {
    let { context: e } = this, { dates: n, dateProfile: r, datesRepDistinctDays: i, renderIntro: s } = this.props, o = this.createDayHeaderFormatter(e.options.dayHeaderFormat, i, n.length);
    return O(ai, { unit: "day" }, (a, l) => O(
      "tr",
      { role: "row" },
      s && s("day"),
      n.map((c) => i ? O(q2, { key: c.toISOString(), date: c, dateProfile: r, todayRange: l, colCnt: n.length, dayHeaderFormat: o }) : O(G2, { key: c.getUTCDay(), dow: c.getUTCDay(), dayHeaderFormat: o }))
    ));
  }
}
function Q2(t, e, n) {
  return t || V2(e, n);
}
class T0 {
  constructor(e, n) {
    let r = e.start, { end: i } = e, s = [], o = [], a = -1;
    for (; r < i; )
      n.isHiddenDay(r) ? s.push(a + 0.5) : (a += 1, s.push(a), o.push(r)), r = Ct(r, 1);
    this.dates = o, this.indices = s, this.cnt = o.length;
  }
  sliceRange(e) {
    let n = this.getDateDayIndex(e.start), r = this.getDateDayIndex(Ct(e.end, -1)), i = Math.max(0, n), s = Math.min(this.cnt - 1, r);
    return i = Math.ceil(i), s = Math.floor(s), i <= s ? {
      firstIndex: i,
      lastIndex: s,
      isStart: n === i,
      isEnd: r === s
    } : null;
  }
  // Given a date, returns its chronolocial cell-index from the first cell of the grid.
  // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
  // If before the first offset, returns a negative number.
  // If after the last offset, returns an offset past the last cell offset.
  // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
  getDateDayIndex(e) {
    let { indices: n } = this, r = Math.floor(sr(this.dates[0], e));
    return r < 0 ? n[0] - 1 : r >= n.length ? n[n.length - 1] + 1 : n[r];
  }
}
class R0 {
  constructor(e, n) {
    let { dates: r } = e, i, s, o;
    if (n) {
      for (s = r[0].getUTCDay(), i = 1; i < r.length && r[i].getUTCDay() !== s; i += 1)
        ;
      o = Math.ceil(r.length / i);
    } else
      o = 1, i = r.length;
    this.rowCnt = o, this.colCnt = i, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
  }
  buildCells() {
    let e = [];
    for (let n = 0; n < this.rowCnt; n += 1) {
      let r = [];
      for (let i = 0; i < this.colCnt; i += 1)
        r.push(this.buildCell(n, i));
      e.push(r);
    }
    return e;
  }
  buildCell(e, n) {
    let r = this.daySeries.dates[e * this.colCnt + n];
    return {
      key: r.toISOString(),
      date: r
    };
  }
  buildHeaderDates() {
    let e = [];
    for (let n = 0; n < this.colCnt; n += 1)
      e.push(this.cells[0][n].date);
    return e;
  }
  sliceRange(e) {
    let { colCnt: n } = this, r = this.daySeries.sliceRange(e), i = [];
    if (r) {
      let { firstIndex: s, lastIndex: o } = r, a = s;
      for (; a <= o; ) {
        let l = Math.floor(a / n), c = Math.min((l + 1) * n, o + 1);
        i.push({
          row: l,
          firstCol: a % n,
          lastCol: (c - 1) % n,
          isStart: r.isStart && a === s,
          isEnd: r.isEnd && c - 1 === o
        }), a = c;
      }
    }
    return i;
  }
}
class I0 {
  constructor() {
    this.sliceBusinessHours = Ce(this._sliceBusinessHours), this.sliceDateSelection = Ce(this._sliceDateSpan), this.sliceEventStore = Ce(this._sliceEventStore), this.sliceEventDrag = Ce(this._sliceInteraction), this.sliceEventResize = Ce(this._sliceInteraction), this.forceDayIfListItem = !1;
  }
  sliceProps(e, n, r, i, ...s) {
    let { eventUiBases: o } = e, a = this.sliceEventStore(e.eventStore, o, n, r, ...s);
    return {
      dateSelectionSegs: this.sliceDateSelection(e.dateSelection, n, r, o, i, ...s),
      businessHourSegs: this.sliceBusinessHours(e.businessHours, n, r, i, ...s),
      fgEventSegs: a.fg,
      bgEventSegs: a.bg,
      eventDrag: this.sliceEventDrag(e.eventDrag, o, n, r, ...s),
      eventResize: this.sliceEventResize(e.eventResize, o, n, r, ...s),
      eventSelection: e.eventSelection
    };
  }
  sliceNowDate(e, n, r, i, ...s) {
    return this._sliceDateSpan(
      { range: { start: e, end: Nn(e, 1) }, allDay: !1 },
      // add 1 ms, protect against null range
      n,
      r,
      {},
      i,
      ...s
    );
  }
  _sliceBusinessHours(e, n, r, i, ...s) {
    return e ? this._sliceEventStore(Xn(e, Ci(n, !!r), i), {}, n, r, ...s).bg : [];
  }
  _sliceEventStore(e, n, r, i, ...s) {
    if (e) {
      let o = Tu(e, n, Ci(r, !!i), i);
      return {
        bg: this.sliceEventRanges(o.bg, s),
        fg: this.sliceEventRanges(o.fg, s)
      };
    }
    return { bg: [], fg: [] };
  }
  _sliceInteraction(e, n, r, i, ...s) {
    if (!e)
      return null;
    let o = Tu(e.mutatedEvents, n, Ci(r, !!i), i);
    return {
      segs: this.sliceEventRanges(o.fg, s),
      affectedInstances: e.affectedEvents.instances,
      isEvent: e.isEvent
    };
  }
  _sliceDateSpan(e, n, r, i, s, ...o) {
    if (!e)
      return [];
    let a = Ci(n, !!r), l = Jn(e.range, a);
    if (l) {
      e = Object.assign(Object.assign({}, e), { range: l });
      let c = R2(e, i, s), u = this.sliceRange(e.range, ...o);
      for (let h of u)
        h.eventRange = c;
      return u;
    }
    return [];
  }
  /*
  "complete" seg means it has component and eventRange
  */
  sliceEventRanges(e, n) {
    let r = [];
    for (let i of e)
      r.push(...this.sliceEventRange(i, n));
    return r;
  }
  /*
  "complete" seg means it has component and eventRange
  */
  sliceEventRange(e, n) {
    let r = e.range;
    this.forceDayIfListItem && e.ui.display === "list-item" && (r = {
      start: r.start,
      end: Ct(r.start, 1)
    });
    let i = this.sliceRange(r, ...n);
    for (let s of i)
      s.eventRange = e, s.isStart = e.isStart && s.isStart, s.isEnd = e.isEnd && s.isEnd;
    return i;
  }
}
function Ci(t, e) {
  let n = t.activeRange;
  return e ? n : {
    start: Nn(n.start, t.slotMinTime.milliseconds),
    end: Nn(n.end, t.slotMaxTime.milliseconds - 864e5)
    // 864e5 = ms in a day
  };
}
function Z2(t, e, n, r, i) {
  switch (e.type) {
    case "RECEIVE_EVENTS":
      return K2(t, n[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, i);
    case "RESET_RAW_EVENTS":
      return X2(t, n[e.sourceId], e.rawEvents, r.activeRange, i);
    case "ADD_EVENTS":
      return J2(
        t,
        e.eventStore,
        // new ones
        r ? r.activeRange : null,
        i
      );
    case "RESET_EVENTS":
      return e.eventStore;
    case "MERGE_EVENTS":
      return al(t, e.eventStore);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return r ? Xn(t, r.activeRange, i) : t;
    case "REMOVE_EVENTS":
      return A3(t, e.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return O0(t, e.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return io(t, (s) => !s.sourceId);
    case "REMOVE_ALL_EVENTS":
      return $t();
    default:
      return t;
  }
}
function K2(t, e, n, r, i, s) {
  if (e && // not already removed
  n === e.latestFetchId) {
    let o = Jr(M0(i, e, s), e, s);
    return r && (o = Xn(o, r, s)), al(O0(t, e.sourceId), o);
  }
  return t;
}
function X2(t, e, n, r, i) {
  const { defIdMap: s, instanceIdMap: o } = t6(t);
  let a = Jr(M0(n, e, i), e, i, !1, s, o);
  return Xn(a, r, i);
}
function M0(t, e, n) {
  let r = n.options.eventDataTransform, i = e ? e.eventDataTransform : null;
  return i && (t = Mu(t, i)), r && (t = Mu(t, r)), t;
}
function Mu(t, e) {
  let n;
  if (!e)
    n = t;
  else {
    n = [];
    for (let r of t) {
      let i = e(r);
      i ? n.push(i) : i == null && n.push(r);
    }
  }
  return n;
}
function J2(t, e, n, r) {
  return n && (e = Xn(e, n, r)), al(t, e);
}
function Ou(t, e, n) {
  let { defs: r } = t, i = xn(t.instances, (s) => r[s.defId].allDay ? s : Object.assign(Object.assign({}, s), { range: {
    start: n.createMarker(e.toDate(s.range.start, s.forcedStartTzo)),
    end: n.createMarker(e.toDate(s.range.end, s.forcedEndTzo))
  }, forcedStartTzo: n.canComputeOffset ? null : s.forcedStartTzo, forcedEndTzo: n.canComputeOffset ? null : s.forcedEndTzo }));
  return { defs: r, instances: i };
}
function O0(t, e) {
  return io(t, (n) => n.sourceId !== e);
}
function e6(t, e) {
  return {
    defs: t.defs,
    instances: Kn(t.instances, (n) => !e[n.instanceId])
  };
}
function t6(t) {
  const { defs: e, instances: n } = t, r = {}, i = {};
  for (let s in e) {
    const o = e[s], { publicId: a } = o;
    a && (r[a] = s);
  }
  for (let s in n) {
    const o = n[s], a = e[o.defId], { publicId: l } = a;
    l && (i[l] = s);
  }
  return { defIdMap: r, instanceIdMap: i };
}
function N0(t, e, n) {
  let { instances: r } = t.mutatedEvents;
  for (let i in r)
    if (!so(e.validRange, r[i].range))
      return !1;
  return B0({ eventDrag: t }, n);
}
function n6(t, e, n) {
  return so(e.validRange, t.range) ? B0({ dateSelection: t }, n) : !1;
}
function B0(t, e) {
  let n = e.getCurrentData(), r = Object.assign({ businessHours: n.businessHours, dateSelection: "", eventStore: n.eventStore, eventUiBases: n.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, t);
  return (e.pluginHooks.isPropsValid || r6)(r, e);
}
function r6(t, e, n = {}, r) {
  return !(t.eventDrag && !i6(t, e, n, r) || t.dateSelection && !s6(t, e, n, r));
}
function i6(t, e, n, r) {
  let i = e.getCurrentData(), s = t.eventDrag, o = s.mutatedEvents, a = o.defs, l = o.instances, c = Vs(a, s.isEvent ? t.eventUiBases : { "": i.selectionConfig });
  r && (c = xn(c, r));
  let u = e6(t.eventStore, s.affectedEvents.instances), h = u.defs, d = u.instances, f = Vs(h, t.eventUiBases);
  for (let g in l) {
    let p = l[g], v = p.range, m = c[p.defId], x = a[p.defId];
    if (!L0(m.constraints, v, u, t.businessHours, e))
      return !1;
    let { eventOverlap: b } = e.options, _ = typeof b == "function" ? b : null;
    for (let S in d) {
      let y = d[S];
      if (cl(v, y.range) && (f[y.defId].overlap === !1 && s.isEvent || m.overlap === !1 || _ && !_(
        new Xe(e, h[y.defId], y),
        // still event
        new Xe(e, x, p)
      )))
        return !1;
    }
    let w = i.eventStore;
    for (let S of m.allows) {
      let y = Object.assign(Object.assign({}, n), { range: p.range, allDay: x.allDay }), E = w.defs[x.defId], I = w.instances[g], A;
      if (E ? A = new Xe(e, E, I) : A = new Xe(e, x), !S(hl(y, e), A))
        return !1;
    }
  }
  return !0;
}
function s6(t, e, n, r) {
  let i = t.eventStore, s = i.defs, o = i.instances, a = t.dateSelection, l = a.range, { selectionConfig: c } = e.getCurrentData();
  if (r && (c = r(c)), !L0(c.constraints, l, i, t.businessHours, e))
    return !1;
  let { selectOverlap: u } = e.options, h = typeof u == "function" ? u : null;
  for (let d in o) {
    let f = o[d];
    if (cl(l, f.range) && (c.overlap === !1 || h && !h(new Xe(e, s[f.defId], f), null)))
      return !1;
  }
  for (let d of c.allows) {
    let f = Object.assign(Object.assign({}, n), a);
    if (!d(hl(f, e), null))
      return !1;
  }
  return !0;
}
function L0(t, e, n, r, i) {
  for (let s of t)
    if (!a6(o6(s, e, n, r, i), e))
      return !1;
  return !0;
}
function o6(t, e, n, r, i) {
  return t === "businessHours" ? jo(Xn(r, e, i)) : typeof t == "string" ? jo(io(n, (s) => s.groupId === t)) : typeof t == "object" && t ? jo(Xn(t, e, i)) : [];
}
function jo(t) {
  let { instances: e } = t, n = [];
  for (let r in e)
    n.push(e[r].range);
  return n;
}
function a6(t, e) {
  for (let n of t)
    if (so(n, e))
      return !0;
  return !1;
}
class Nu extends Error {
  constructor(e, n) {
    super(e), this.response = n;
  }
}
function l6(t, e, n) {
  t = t.toUpperCase();
  const r = {
    method: t
  };
  return t === "GET" ? e += (e.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(n) : (r.body = new URLSearchParams(n), r.headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  }), fetch(e, r).then((i) => {
    if (i.ok)
      return i.json().then((s) => [s, i], () => {
        throw new Nu("Failure parsing JSON", i);
      });
    throw new Nu("Request failed", i);
  });
}
class yl {
  constructor(e) {
    this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0;
  }
  request(e) {
    this.isDirty = !0, this.isPaused() || (this.clearTimeout(), e == null ? this.tryDrain() : this.timeoutId = setTimeout(
      // NOT OPTIMAL! TODO: look at debounce
      this.tryDrain.bind(this),
      e
    ));
  }
  pause(e = "") {
    let { pauseDepths: n } = this;
    n[e] = (n[e] || 0) + 1, this.clearTimeout();
  }
  resume(e = "", n) {
    let { pauseDepths: r } = this;
    e in r && (n ? delete r[e] : (r[e] -= 1, r[e] <= 0 && delete r[e]), this.tryDrain());
  }
  isPaused() {
    return Object.keys(this.pauseDepths).length;
  }
  tryDrain() {
    if (!this.isRunning && !this.isPaused()) {
      for (this.isRunning = !0; this.isDirty; )
        this.isDirty = !1, this.drained();
      this.isRunning = !1;
    }
  }
  clear() {
    this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {};
  }
  clearTimeout() {
    this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0);
  }
  drained() {
    this.drainedOption && this.drainedOption();
  }
}
const ki = /^(visible|hidden)$/;
class c6 extends Ue {
  constructor() {
    super(...arguments), this.handleEl = (e) => {
      this.el = e, _n(this.props.elRef, e);
    };
  }
  render() {
    let { props: e } = this, { liquid: n, liquidIsAbsolute: r } = e, i = n && r, s = ["fc-scroller"];
    return n && (r ? s.push("fc-scroller-liquid-absolute") : s.push("fc-scroller-liquid")), O("div", { ref: this.handleEl, className: s.join(" "), style: {
      overflowX: e.overflowX,
      overflowY: e.overflowY,
      left: i && -(e.overcomeLeft || 0) || "",
      right: i && -(e.overcomeRight || 0) || "",
      bottom: i && -(e.overcomeBottom || 0) || "",
      marginLeft: !i && -(e.overcomeLeft || 0) || "",
      marginRight: !i && -(e.overcomeRight || 0) || "",
      marginBottom: !i && -(e.overcomeBottom || 0) || "",
      maxHeight: e.maxHeight || ""
    } }, e.children);
  }
  needsXScrolling() {
    if (ki.test(this.props.overflowX))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), { children: r } = e;
    for (let i = 0; i < r.length; i += 1)
      if (r[i].getBoundingClientRect().width > n)
        return !0;
    return !1;
  }
  needsYScrolling() {
    if (ki.test(this.props.overflowY))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), { children: r } = e;
    for (let i = 0; i < r.length; i += 1)
      if (r[i].getBoundingClientRect().height > n)
        return !0;
    return !1;
  }
  getXScrollbarWidth() {
    return ki.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
  }
  getYScrollbarWidth() {
    return ki.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
  }
}
class bn {
  constructor(e) {
    this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = (n, r) => {
      let { depths: i, currentMap: s } = this, o = !1, a = !1;
      n !== null ? (o = r in s, s[r] = n, i[r] = (i[r] || 0) + 1, a = !0) : (i[r] -= 1, i[r] || (delete s[r], delete this.callbackMap[r], o = !0)), this.masterCallback && (o && this.masterCallback(null, String(r)), a && this.masterCallback(n, String(r)));
    };
  }
  createRef(e) {
    let n = this.callbackMap[e];
    return n || (n = this.callbackMap[e] = (r) => {
      this.handleValue(r, String(e));
    }), n;
  }
  // TODO: check callers that don't care about order. should use getAll instead
  // NOTE: this method has become less valuable now that we are encouraged to map order by some other index
  // TODO: provide ONE array-export function, buildArray, which fails on non-numeric indexes. caller can manipulate and "collect"
  collect(e, n, r) {
    return Yy(this.currentMap, e, n, r);
  }
  getAll() {
    return tl(this.currentMap);
  }
}
function u6(t) {
  let e = wy(t, ".fc-scrollgrid-shrink"), n = 0;
  for (let r of e)
    n = Math.max(n, Ly(r));
  return Math.ceil(n);
}
function P0(t, e) {
  return t.liquid && e.liquid;
}
function d6(t, e) {
  return e.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
  P0(t, e);
}
function f6(t, e, n, r) {
  let { expandRows: i } = n;
  return typeof e.content == "function" ? e.content(n) : O("table", {
    role: "presentation",
    className: [
      e.tableClassName,
      t.syncRowHeights ? "fc-scrollgrid-sync-table" : ""
    ].join(" "),
    style: {
      minWidth: n.tableMinWidth,
      width: n.clientWidth,
      height: i ? n.clientHeight : ""
      // css `height` on a <table> serves as a min-height
    }
  }, n.tableColGroupNode, O(r ? "thead" : "tbody", {
    role: "presentation"
  }, typeof e.rowContent == "function" ? e.rowContent(n) : e.rowContent));
}
function h6(t, e) {
  return On(t, e, an);
}
function p6(t, e) {
  let n = [];
  for (let r of t) {
    let i = r.span || 1;
    for (let s = 0; s < i; s += 1)
      n.push(O("col", { style: {
        width: r.width === "shrink" ? g6(e) : r.width || "",
        minWidth: r.minWidth || ""
      } }));
  }
  return O("colgroup", {}, ...n);
}
function g6(t) {
  return t ?? 4;
}
function v6(t) {
  for (let e of t)
    if (e.width === "shrink")
      return !0;
  return !1;
}
function m6(t, e) {
  let n = [
    "fc-scrollgrid",
    e.theme.getClass("table")
  ];
  return t && n.push("fc-scrollgrid-liquid"), n;
}
function b6(t, e) {
  let n = [
    "fc-scrollgrid-section",
    `fc-scrollgrid-section-${t.type}`,
    t.className
    // used?
  ];
  return e && t.liquid && t.maxHeight == null && n.push("fc-scrollgrid-section-liquid"), t.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
}
function Ca(t) {
  return O("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: t.clientWidth,
    minWidth: t.tableMinWidth
  } });
}
function Us(t) {
  let { stickyHeaderDates: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
function $0(t) {
  let { stickyFooterScrollbar: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
class xl extends Ue {
  constructor() {
    super(...arguments), this.processCols = Ce((e) => e, h6), this.renderMicroColGroup = Ce(p6), this.scrollerRefs = new bn(), this.scrollerElRefs = new bn(this._handleScrollerEl.bind(this)), this.state = {
      shrinkWidth: null,
      forceYScrollbars: !1,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }, this.handleSizing = () => {
      this.safeSetState(Object.assign({ shrinkWidth: this.computeShrinkWidth() }, this.computeScrollerDims()));
    };
  }
  render() {
    let { props: e, state: n, context: r } = this, i = e.sections || [], s = this.processCols(e.cols), o = this.renderMicroColGroup(s, n.shrinkWidth), a = m6(e.liquid, r);
    e.collapsibleWidth && a.push("fc-scrollgrid-collapsible");
    let l = i.length, c = 0, u, h = [], d = [], f = [];
    for (; c < l && (u = i[c]).type === "header"; )
      h.push(this.renderSection(u, o, !0)), c += 1;
    for (; c < l && (u = i[c]).type === "body"; )
      d.push(this.renderSection(u, o, !1)), c += 1;
    for (; c < l && (u = i[c]).type === "footer"; )
      f.push(this.renderSection(u, o, !0)), c += 1;
    let g = !o0();
    const p = { role: "rowgroup" };
    return O("table", {
      role: "grid",
      className: a.join(" "),
      style: { height: e.height }
    }, !!(!g && h.length) && O("thead", p, ...h), !!(!g && d.length) && O("tbody", p, ...d), !!(!g && f.length) && O("tfoot", p, ...f), g && O("tbody", p, ...h, ...d, ...f));
  }
  renderSection(e, n, r) {
    return "outerContent" in e ? O(Ze, { key: e.key }, e.outerContent) : O("tr", { key: e.key, role: "presentation", className: b6(e, this.props.liquid).join(" ") }, this.renderChunkTd(e, n, e.chunk, r));
  }
  renderChunkTd(e, n, r, i) {
    if ("outerContent" in r)
      return r.outerContent;
    let { props: s } = this, { forceYScrollbars: o, scrollerClientWidths: a, scrollerClientHeights: l } = this.state, c = d6(s, e), u = P0(s, e), h = s.liquid ? o ? "scroll" : c ? "auto" : "hidden" : "visible", d = e.key, f = f6(e, r, {
      tableColGroupNode: n,
      tableMinWidth: "",
      clientWidth: !s.collapsibleWidth && a[d] !== void 0 ? a[d] : null,
      clientHeight: l[d] !== void 0 ? l[d] : null,
      expandRows: e.expandRows,
      syncRowHeights: !1,
      rowSyncHeights: [],
      reportRowHeightChange: () => {
      }
    }, i);
    return O(i ? "th" : "td", {
      ref: r.elRef,
      role: "presentation"
    }, O(
      "div",
      { className: `fc-scroller-harness${u ? " fc-scroller-harness-liquid" : ""}` },
      O(c6, { ref: this.scrollerRefs.createRef(d), elRef: this.scrollerElRefs.createRef(d), overflowY: h, overflowX: s.liquid ? "hidden" : "visible", maxHeight: e.maxHeight, liquid: u, liquidIsAbsolute: !0 }, f)
    ));
  }
  _handleScrollerEl(e, n) {
    let r = y6(this.props.sections, n);
    r && _n(r.chunk.scrollerElRef, e);
  }
  componentDidMount() {
    this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
  }
  componentDidUpdate() {
    this.handleSizing();
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleSizing);
  }
  computeShrinkWidth() {
    return v6(this.props.cols) ? u6(this.scrollerElRefs.getAll()) : 0;
  }
  computeScrollerDims() {
    let e = X3(), { scrollerRefs: n, scrollerElRefs: r } = this, i = !1, s = {}, o = {};
    for (let a in n.currentMap) {
      let l = n.currentMap[a];
      if (l && l.needsYScrolling()) {
        i = !0;
        break;
      }
    }
    for (let a of this.props.sections) {
      let l = a.key, c = r.currentMap[l];
      if (c) {
        let u = c.parentNode;
        s[l] = Math.floor(u.getBoundingClientRect().width - (i ? e.y : 0)), o[l] = Math.floor(u.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars: i, scrollerClientWidths: s, scrollerClientHeights: o };
  }
}
xl.addStateEquality({
  scrollerClientWidths: an,
  scrollerClientHeights: an
});
function y6(t, e) {
  for (let n of t)
    if (n.key === e)
      return n;
  return null;
}
class _l extends Ue {
  constructor() {
    super(...arguments), this.handleEl = (e) => {
      this.el = e, e && Ru(e, this.props.seg);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: r } = n, { seg: i } = e, { eventRange: s } = i, { ui: o } = s, a = {
      event: new Xe(n, s.def, s.instance),
      view: n.viewApi,
      timeText: e.timeText,
      textColor: o.textColor,
      backgroundColor: o.backgroundColor,
      borderColor: o.borderColor,
      isDraggable: !e.disableDragging && x2(i, n),
      isStartResizable: !e.disableResizing && _2(i, n),
      isEndResizable: !e.disableResizing && w2(i),
      isMirror: !!(e.isDragging || e.isResizing || e.isDateSelecting),
      isStart: !!i.isStart,
      isEnd: !!i.isEnd,
      isPast: !!e.isPast,
      isFuture: !!e.isFuture,
      isToday: !!e.isToday,
      isSelected: !!e.isSelected,
      isDragging: !!e.isDragging,
      isResizing: !!e.isResizing
    };
    return O(Ht, Object.assign({}, e, { elRef: this.handleEl, elClasses: [
      ...S2(a),
      ...i.eventRange.ui.classNames,
      ...e.elClasses || []
    ], renderProps: a, generatorName: "eventContent", customGenerator: r.eventContent, defaultGenerator: e.defaultGenerator, classNameGenerator: r.eventClassNames, didMount: r.eventDidMount, willUnmount: r.eventWillUnmount }));
  }
  componentDidUpdate(e) {
    this.el && this.props.seg !== e.seg && Ru(this.el, this.props.seg);
  }
}
class H0 extends Ue {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { seg: i } = e, { ui: s } = i.eventRange, o = r.eventTimeFormat || e.defaultTimeFormat, a = v0(i, o, n, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
    return O(_l, Object.assign({}, e, { elTag: "a", elStyle: {
      borderColor: s.borderColor,
      backgroundColor: s.backgroundColor
    }, elAttrs: b0(i, n), defaultGenerator: x6, timeText: a }), (l, c) => O(
      Ze,
      null,
      O(l, { elTag: "div", elClasses: ["fc-event-main"], elStyle: { color: c.textColor } }),
      !!c.isStartResizable && O("div", { className: "fc-event-resizer fc-event-resizer-start" }),
      !!c.isEndResizable && O("div", { className: "fc-event-resizer fc-event-resizer-end" })
    ));
  }
}
function x6(t) {
  return O(
    "div",
    { className: "fc-event-main-frame" },
    t.timeText && O("div", { className: "fc-event-time" }, t.timeText),
    O(
      "div",
      { className: "fc-event-title-container" },
      O("div", { className: "fc-event-title fc-sticky" }, t.event.title || O(Ze, null, " "))
    )
  );
}
const wl = (t) => O(wn.Consumer, null, (e) => {
  let { options: n } = e, r = {
    isAxis: t.isAxis,
    date: e.dateEnv.toDate(t.date),
    view: e.viewApi
  };
  return O(Ht, Object.assign({}, t, { elTag: t.elTag || "div", renderProps: r, generatorName: "nowIndicatorContent", customGenerator: n.nowIndicatorContent, classNameGenerator: n.nowIndicatorClassNames, didMount: n.nowIndicatorDidMount, willUnmount: n.nowIndicatorWillUnmount }));
}), _6 = et({ day: "numeric" });
class Sl extends Ue {
  constructor() {
    super(...arguments), this.refineRenderProps = Hi(w6);
  }
  render() {
    let { props: e, context: n } = this, { options: r } = n, i = this.refineRenderProps({
      date: e.date,
      dateProfile: e.dateProfile,
      todayRange: e.todayRange,
      isMonthStart: e.isMonthStart || !1,
      showDayNumber: e.showDayNumber,
      extraRenderProps: e.extraRenderProps,
      viewApi: n.viewApi,
      dateEnv: n.dateEnv,
      monthStartFormat: r.monthStartFormat
    });
    return O(Ht, Object.assign({}, e, { elClasses: [
      ...ul(i, n.theme),
      ...e.elClasses || []
    ], elAttrs: Object.assign(Object.assign({}, e.elAttrs), i.isDisabled ? {} : { "data-date": nl(e.date) }), renderProps: i, generatorName: "dayCellContent", customGenerator: r.dayCellContent, defaultGenerator: e.defaultGenerator, classNameGenerator: (
      // don't use custom classNames if disabled
      i.isDisabled ? void 0 : r.dayCellClassNames
    ), didMount: r.dayCellDidMount, willUnmount: r.dayCellWillUnmount }));
  }
}
function El(t) {
  return !!(t.dayCellContent || C0("dayCellContent", t));
}
function w6(t) {
  let { date: e, dateEnv: n, dateProfile: r, isMonthStart: i } = t, s = a0(e, t.todayRange, null, r), o = t.showDayNumber ? n.format(e, i ? t.monthStartFormat : _6) : "";
  return Object.assign(Object.assign(Object.assign({ date: n.toDate(e), view: t.viewApi }, s), {
    isMonthStart: i,
    dayNumberText: o
  }), t.extraRenderProps);
}
class F0 extends Ue {
  render() {
    let { props: e } = this, { seg: n } = e;
    return O(_l, { elTag: "div", elClasses: ["fc-bg-event"], elStyle: { backgroundColor: n.eventRange.ui.backgroundColor }, defaultGenerator: S6, seg: n, timeText: "", isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: e.isPast, isFuture: e.isFuture, isToday: e.isToday, disableDragging: !0, disableResizing: !0 });
  }
}
function S6(t) {
  let { title: e } = t.event;
  return e && O("div", { className: "fc-event-title" }, t.event.title);
}
function z0(t) {
  return O("div", { className: `fc-${t}` });
}
const V0 = (t) => O(wn.Consumer, null, (e) => {
  let { dateEnv: n, options: r } = e, { date: i } = t, s = r.weekNumberFormat || t.defaultFormat, o = n.computeWeekNumber(i), a = n.format(i, s);
  return O(
    Ht,
    Object.assign({}, t, { renderProps: { num: o, text: a, date: i }, generatorName: "weekNumberContent", customGenerator: r.weekNumberContent, defaultGenerator: E6, classNameGenerator: r.weekNumberClassNames, didMount: r.weekNumberDidMount, willUnmount: r.weekNumberWillUnmount })
  );
});
function E6(t) {
  return t.text;
}
const Wo = 10;
class C6 extends Ue {
  constructor() {
    super(...arguments), this.state = {
      titleId: no()
    }, this.handleRootEl = (e) => {
      this.rootEl = e, this.props.elRef && _n(this.props.elRef, e);
    }, this.handleDocumentMouseDown = (e) => {
      const n = qf(e);
      this.rootEl.contains(n) || this.handleCloseClick();
    }, this.handleDocumentKeyDown = (e) => {
      e.key === "Escape" && this.handleCloseClick();
    }, this.handleCloseClick = () => {
      let { onClose: e } = this.props;
      e && e();
    };
  }
  render() {
    let { theme: e, options: n } = this.context, { props: r, state: i } = this, s = [
      "fc-popover",
      e.getClass("popover")
    ].concat(r.extraClassNames || []);
    return ly(O(
      "div",
      Object.assign({}, r.extraAttrs, { id: r.id, className: s.join(" "), "aria-labelledby": i.titleId, ref: this.handleRootEl }),
      O(
        "div",
        { className: "fc-popover-header " + e.getClass("popoverHeader") },
        O("span", { className: "fc-popover-title", id: i.titleId }, r.title),
        O("span", { className: "fc-popover-close " + e.getIconClass("close"), title: n.closeHint, onClick: this.handleCloseClick })
      ),
      O("div", { className: "fc-popover-body " + e.getClass("popoverContent") }, r.children)
    ), r.parentEl);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  updateSize() {
    let { isRtl: e } = this.context, { alignmentEl: n, alignGridTop: r } = this.props, { rootEl: i } = this, s = n2(n);
    if (s) {
      let o = i.getBoundingClientRect(), a = r ? Et(n, ".fc-scrollgrid").getBoundingClientRect().top : s.top, l = e ? s.right - o.width : s.left;
      a = Math.max(a, Wo), l = Math.min(l, document.documentElement.clientWidth - Wo - o.width), l = Math.max(l, Wo);
      let c = i.offsetParent.getBoundingClientRect();
      jr(i, {
        top: a - c.top,
        left: l - c.left
      });
    }
  }
}
class k6 extends ln {
  constructor() {
    super(...arguments), this.handleRootEl = (e) => {
      this.rootEl = e, e ? this.context.registerInteractiveComponent(this, {
        el: e,
        useEventCenter: !1
      }) : this.context.unregisterInteractiveComponent(this);
    };
  }
  render() {
    let { options: e, dateEnv: n } = this.context, { props: r } = this, { startDate: i, todayRange: s, dateProfile: o } = r, a = n.format(i, e.dayPopoverFormat);
    return O(Sl, { elRef: this.handleRootEl, date: i, dateProfile: o, todayRange: s }, (l, c, u) => O(
      C6,
      { elRef: u.ref, id: r.id, title: a, extraClassNames: ["fc-more-popover"].concat(u.className || []), extraAttrs: u, parentEl: r.parentEl, alignmentEl: r.alignmentEl, alignGridTop: r.alignGridTop, onClose: r.onClose },
      El(e) && O(l, { elTag: "div", elClasses: ["fc-more-popover-misc"] }),
      r.children
    ));
  }
  queryHit(e, n, r, i) {
    let { rootEl: s, props: o } = this;
    return e >= 0 && e < r && n >= 0 && n < i ? {
      dateProfile: o.dateProfile,
      dateSpan: Object.assign({ allDay: !o.forceTimed, range: {
        start: o.startDate,
        end: o.endDate
      } }, o.extraDateSpan),
      dayEl: s,
      rect: {
        left: 0,
        top: 0,
        right: r,
        bottom: i
      },
      layer: 1
      // important when comparing with hits from other components
    } : null;
  }
}
class U0 extends Ue {
  constructor() {
    super(...arguments), this.state = {
      isPopoverOpen: !1,
      popoverId: no()
    }, this.handleLinkEl = (e) => {
      this.linkEl = e, this.props.elRef && _n(this.props.elRef, e);
    }, this.handleClick = (e) => {
      let { props: n, context: r } = this, { moreLinkClick: i } = r.options, s = Bu(n).start;
      function o(a) {
        let { def: l, instance: c, range: u } = a.eventRange;
        return {
          event: new Xe(r, l, c),
          start: r.dateEnv.toDate(u.start),
          end: r.dateEnv.toDate(u.end),
          isStart: a.isStart,
          isEnd: a.isEnd
        };
      }
      typeof i == "function" && (i = i({
        date: s,
        allDay: !!n.allDayDate,
        allSegs: n.allSegs.map(o),
        hiddenSegs: n.hiddenSegs.map(o),
        jsEvent: e,
        view: r.viewApi
      })), !i || i === "popover" ? this.setState({ isPopoverOpen: !0 }) : typeof i == "string" && r.calendarApi.zoomTo(s, i);
    }, this.handlePopoverClose = () => {
      this.setState({ isPopoverOpen: !1 });
    };
  }
  render() {
    let { props: e, state: n } = this;
    return O(wn.Consumer, null, (r) => {
      let { viewApi: i, options: s, calendarApi: o } = r, { moreLinkText: a } = s, { moreCnt: l } = e, c = Bu(e), u = typeof a == "function" ? a.call(o, l) : `+${l} ${a}`, h = Wr(s.moreLinkHint, [l], u), d = {
        num: l,
        shortText: `+${l}`,
        text: u,
        view: i
      };
      return O(
        Ze,
        null,
        !!e.moreCnt && O(Ht, { elTag: e.elTag || "a", elRef: this.handleLinkEl, elClasses: [
          ...e.elClasses || [],
          "fc-more-link"
        ], elStyle: e.elStyle, elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), Gf(this.handleClick)), { title: h, "aria-expanded": n.isPopoverOpen, "aria-controls": n.isPopoverOpen ? n.popoverId : "" }), renderProps: d, generatorName: "moreLinkContent", customGenerator: s.moreLinkContent, defaultGenerator: e.defaultGenerator || A6, classNameGenerator: s.moreLinkClassNames, didMount: s.moreLinkDidMount, willUnmount: s.moreLinkWillUnmount }, e.children),
        n.isPopoverOpen && O(k6, { id: n.popoverId, startDate: c.start, endDate: c.end, dateProfile: e.dateProfile, todayRange: e.todayRange, extraDateSpan: e.extraDateSpan, parentEl: this.parentEl, alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : this.linkEl, alignGridTop: e.alignGridTop, forceTimed: e.forceTimed, onClose: this.handlePopoverClose }, e.popoverContent())
      );
    });
  }
  componentDidMount() {
    this.updateParentEl();
  }
  componentDidUpdate() {
    this.updateParentEl();
  }
  updateParentEl() {
    this.linkEl && (this.parentEl = Et(this.linkEl, ".fc-view-harness"));
  }
}
function A6(t) {
  return t.text;
}
function Bu(t) {
  if (t.allDayDate)
    return {
      start: t.allDayDate,
      end: Ct(t.allDayDate, 1)
    };
  let { hiddenSegs: e } = t;
  return {
    start: j0(e),
    end: T6(e)
  };
}
function j0(t) {
  return t.reduce(D6).eventRange.range.start;
}
function D6(t, e) {
  return t.eventRange.range.start < e.eventRange.range.start ? t : e;
}
function T6(t) {
  return t.reduce(R6).eventRange.range.end;
}
function R6(t, e) {
  return t.eventRange.range.end > e.eventRange.range.end ? t : e;
}
class js extends Ue {
  render() {
    let { props: e, context: n } = this, { options: r } = n, i = { view: n.viewApi };
    return O(Ht, Object.assign({}, e, { elTag: e.elTag || "div", elClasses: [
      ...W0(e.viewSpec),
      ...e.elClasses || []
    ], renderProps: i, classNameGenerator: r.viewClassNames, generatorName: void 0, didMount: r.viewDidMount, willUnmount: r.viewWillUnmount }), () => e.children);
  }
}
function W0(t) {
  return [
    `fc-${t.type}-view`,
    "fc-view"
  ];
}
const I6 = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: X,
  eventDataTransform: X,
  // for any network-related sources
  success: X,
  failure: X
};
function q0(t, e, n = Y0(e)) {
  let r;
  if (typeof t == "string" ? r = { url: t } : typeof t == "function" || Array.isArray(t) ? r = { events: t } : typeof t == "object" && t && (r = t), r) {
    let { refined: i, extra: s } = il(r, n), o = M6(i, e);
    if (o)
      return {
        _raw: t,
        isFetching: !1,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: i.defaultAllDay,
        eventDataTransform: i.eventDataTransform,
        success: i.success,
        failure: i.failure,
        publicId: i.id || "",
        sourceId: ir(),
        sourceDefId: o.sourceDefId,
        meta: o.meta,
        ui: Fs(i, e),
        extendedProps: s
      };
  }
  return null;
}
function Y0(t) {
  return Object.assign(Object.assign(Object.assign({}, Hs), I6), t.pluginHooks.eventSourceRefiners);
}
function M6(t, e) {
  let n = e.pluginHooks.eventSourceDefs;
  for (let r = n.length - 1; r >= 0; r -= 1) {
    let s = n[r].parseMeta(t);
    if (s)
      return { sourceDefId: r, meta: s };
  }
  return null;
}
class O6 {
  getCurrentData() {
    return this.currentDataManager.getCurrentData();
  }
  dispatch(e) {
    this.currentDataManager.dispatch(e);
  }
  get view() {
    return this.getCurrentData().viewApi;
  }
  batchRendering(e) {
    e();
  }
  updateSize() {
    this.trigger("_resize", !0);
  }
  // Options
  // -----------------------------------------------------------------------------------------------------------------
  setOption(e, n) {
    this.dispatch({
      type: "SET_OPTION",
      optionName: e,
      rawOptionValue: n
    });
  }
  getOption(e) {
    return this.currentDataManager.currentCalendarOptionsInput[e];
  }
  getAvailableLocaleCodes() {
    return Object.keys(this.getCurrentData().availableRawLocales);
  }
  // Trigger
  // -----------------------------------------------------------------------------------------------------------------
  on(e, n) {
    let { currentDataManager: r } = this;
    r.currentCalendarOptionsRefiners[e] ? r.emitter.on(e, n) : console.warn(`Unknown listener name '${e}'`);
  }
  off(e, n) {
    this.currentDataManager.emitter.off(e, n);
  }
  // not meant for public use
  trigger(e, ...n) {
    this.currentDataManager.emitter.trigger(e, ...n);
  }
  // View
  // -----------------------------------------------------------------------------------------------------------------
  changeView(e, n) {
    this.batchRendering(() => {
      if (this.unselect(), n)
        if (n.start && n.end)
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e
          }), this.dispatch({
            type: "SET_OPTION",
            optionName: "visibleRange",
            rawOptionValue: n
          });
        else {
          let { dateEnv: r } = this.getCurrentData();
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e,
            dateMarker: r.createMarker(n)
          });
        }
      else
        this.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType: e
        });
    });
  }
  // Forces navigation to a view for the given date.
  // `viewType` can be a specific view name or a generic one like "week" or "day".
  // needs to change
  zoomTo(e, n) {
    let r = this.getCurrentData(), i;
    n = n || "day", i = r.viewSpecs[n] || this.getUnitViewSpec(n), this.unselect(), i ? this.dispatch({
      type: "CHANGE_VIEW_TYPE",
      viewType: i.type,
      dateMarker: e
    }) : this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e
    });
  }
  // Given a duration singular unit, like "week" or "day", finds a matching view spec.
  // Preference is given to views that have corresponding buttons.
  getUnitViewSpec(e) {
    let { viewSpecs: n, toolbarConfig: r } = this.getCurrentData(), i = [].concat(r.header ? r.header.viewsWithButtons : [], r.footer ? r.footer.viewsWithButtons : []), s, o;
    for (let a in n)
      i.push(a);
    for (s = 0; s < i.length; s += 1)
      if (o = n[i[s]], o && o.singleUnit === e)
        return o;
    return null;
  }
  // Current Date
  // -----------------------------------------------------------------------------------------------------------------
  prev() {
    this.unselect(), this.dispatch({ type: "PREV" });
  }
  next() {
    this.unselect(), this.dispatch({ type: "NEXT" });
  }
  prevYear() {
    let e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e.dateEnv.addYears(e.currentDate, -1)
    });
  }
  nextYear() {
    let e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e.dateEnv.addYears(e.currentDate, 1)
    });
  }
  today() {
    let e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: oi(e.calendarOptions.now, e.dateEnv)
    });
  }
  gotoDate(e) {
    let n = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: n.dateEnv.createMarker(e)
    });
  }
  incrementDate(e) {
    let n = this.getCurrentData(), r = Pe(e);
    r && (this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: n.dateEnv.add(n.currentDate, r)
    }));
  }
  getDate() {
    let e = this.getCurrentData();
    return e.dateEnv.toDate(e.currentDate);
  }
  // Date Formatting Utils
  // -----------------------------------------------------------------------------------------------------------------
  formatDate(e, n) {
    let { dateEnv: r } = this.getCurrentData();
    return r.format(r.createMarker(e), et(n));
  }
  // `settings` is for formatter AND isEndExclusive
  formatRange(e, n, r) {
    let { dateEnv: i } = this.getCurrentData();
    return i.formatRange(i.createMarker(e), i.createMarker(n), et(r), r);
  }
  formatIso(e, n) {
    let { dateEnv: r } = this.getCurrentData();
    return r.formatIso(r.createMarker(e), { omitTime: n });
  }
  // Date Selection / Event Selection / DayClick
  // -----------------------------------------------------------------------------------------------------------------
  select(e, n) {
    let r;
    n == null ? e.start != null ? r = e : r = {
      start: e,
      end: null
    } : r = {
      start: e,
      end: n
    };
    let i = this.getCurrentData(), s = C2(r, i.dateEnv, Pe({ days: 1 }));
    s && (this.dispatch({ type: "SELECT_DATES", selection: s }), f0(s, null, i));
  }
  unselect(e) {
    let n = this.getCurrentData();
    n.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), g2(e, n));
  }
  // Public Events API
  // -----------------------------------------------------------------------------------------------------------------
  addEvent(e, n) {
    if (e instanceof Xe) {
      let o = e._def, a = e._instance;
      return this.getCurrentData().eventStore.defs[o.defId] || (this.dispatch({
        type: "ADD_EVENTS",
        eventStore: xa({ def: o, instance: a })
        // TODO: better util for two args?
      }), this.triggerEventAdd(e)), e;
    }
    let r = this.getCurrentData(), i;
    if (n instanceof ur)
      i = n.internalEventSource;
    else if (typeof n == "boolean")
      n && ([i] = tl(r.eventSources));
    else if (n != null) {
      let o = this.getEventSourceById(n);
      if (!o)
        return console.warn(`Could not find an event source with ID "${n}"`), null;
      i = o.internalEventSource;
    }
    let s = t0(e, i, r, !1);
    if (s) {
      let o = new Xe(r, s.def, s.def.recurringDef ? null : s.instance);
      return this.dispatch({
        type: "ADD_EVENTS",
        eventStore: xa(s)
      }), this.triggerEventAdd(o), o;
    }
    return null;
  }
  triggerEventAdd(e) {
    let { emitter: n } = this.getCurrentData();
    n.trigger("eventAdd", {
      event: e,
      relatedEvents: [],
      revert: () => {
        this.dispatch({
          type: "REMOVE_EVENTS",
          eventStore: h0(e)
        });
      }
    });
  }
  // TODO: optimize
  getEventById(e) {
    let n = this.getCurrentData(), { defs: r, instances: i } = n.eventStore;
    e = String(e);
    for (let s in r) {
      let o = r[s];
      if (o.publicId === e) {
        if (o.recurringDef)
          return new Xe(n, o, null);
        for (let a in i) {
          let l = i[a];
          if (l.defId === o.defId)
            return new Xe(n, o, l);
        }
      }
    }
    return null;
  }
  getEvents() {
    let e = this.getCurrentData();
    return Gn(e.eventStore, e);
  }
  removeAllEvents() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }
  // Public Event Sources API
  // -----------------------------------------------------------------------------------------------------------------
  getEventSources() {
    let e = this.getCurrentData(), n = e.eventSources, r = [];
    for (let i in n)
      r.push(new ur(e, n[i]));
    return r;
  }
  getEventSourceById(e) {
    let n = this.getCurrentData(), r = n.eventSources;
    e = String(e);
    for (let i in r)
      if (r[i].publicId === e)
        return new ur(n, r[i]);
    return null;
  }
  addEventSource(e) {
    let n = this.getCurrentData();
    if (e instanceof ur)
      return n.eventSources[e.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [e.internalEventSource]
      }), e;
    let r = q0(e, n);
    return r ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [r] }), new ur(n, r)) : null;
  }
  removeAllEventSources() {
    this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
  }
  refetchEvents() {
    this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: !0 });
  }
  // Scroll
  // -----------------------------------------------------------------------------------------------------------------
  scrollToTime(e) {
    let n = Pe(e);
    n && this.trigger("_scrollRequest", { time: n });
  }
}
class N6 {
  constructor() {
    this.handlers = [];
  }
  set(e) {
    this.currentValue = e;
    for (let n of this.handlers)
      n(e);
  }
  subscribe(e) {
    this.handlers.push(e), this.currentValue !== void 0 && e(this.currentValue);
  }
}
class B6 extends N6 {
  constructor() {
    super(...arguments), this.map = /* @__PURE__ */ new Map();
  }
  // for consistent order
  handle(e) {
    const { map: n } = this;
    let r = !1;
    e.isActive ? (n.set(e.id, e), r = !0) : n.has(e.id) && (n.delete(e.id), r = !0), r && this.set(n);
  }
}
const L6 = [], G0 = {
  code: "en",
  week: {
    dow: 0,
    doy: 4
    // 4 days need to be within the year to be considered the first week
  },
  direction: "ltr",
  buttonText: {
    prev: "prev",
    next: "next",
    prevYear: "prev year",
    nextYear: "next year",
    year: "year",
    today: "today",
    month: "month",
    week: "week",
    day: "day",
    list: "list"
  },
  weekText: "W",
  weekTextLong: "Week",
  closeHint: "Close",
  timeHint: "Time",
  eventHint: "Event",
  allDayText: "all-day",
  moreLinkText: "more",
  noEventsText: "No events to display"
}, Q0 = Object.assign(Object.assign({}, G0), {
  // Includes things we don't want other locales to inherit,
  // things that derive from other translatable strings.
  buttonHints: {
    prev: "Previous $0",
    next: "Next $0",
    today(t, e) {
      return e === "day" ? "Today" : `This ${t}`;
    }
  },
  viewHint: "$0 view",
  navLinkHint: "Go to $0",
  moreLinkHint(t) {
    return `Show ${t} more event${t === 1 ? "" : "s"}`;
  }
});
function P6(t) {
  let e = t.length > 0 ? t[0].code : "en", n = L6.concat(t), r = {
    en: Q0
  };
  for (let i of n)
    r[i.code] = i;
  return {
    map: r,
    defaultCode: e
  };
}
function Z0(t, e) {
  return typeof t == "object" && !Array.isArray(t) ? K0(t.code, [t.code], t) : $6(t, e);
}
function $6(t, e) {
  let n = [].concat(t || []), r = H6(n, e) || Q0;
  return K0(t, n, r);
}
function H6(t, e) {
  for (let n = 0; n < t.length; n += 1) {
    let r = t[n].toLocaleLowerCase().split("-");
    for (let i = r.length; i > 0; i -= 1) {
      let s = r.slice(0, i).join("-");
      if (e[s])
        return e[s];
    }
  }
  return null;
}
function K0(t, e, n) {
  let r = el([G0, n], ["buttonText"]);
  delete r.code;
  let { week: i } = r;
  return delete r.week, {
    codeArg: t,
    codes: e,
    week: i,
    simpleNumberFormat: new Intl.NumberFormat(t),
    options: r
  };
}
function Sn(t) {
  return {
    id: ir(),
    name: t.name,
    premiumReleaseDate: t.premiumReleaseDate ? new Date(t.premiumReleaseDate) : void 0,
    deps: t.deps || [],
    reducers: t.reducers || [],
    isLoadingFuncs: t.isLoadingFuncs || [],
    contextInit: [].concat(t.contextInit || []),
    eventRefiners: t.eventRefiners || {},
    eventDefMemberAdders: t.eventDefMemberAdders || [],
    eventSourceRefiners: t.eventSourceRefiners || {},
    isDraggableTransformers: t.isDraggableTransformers || [],
    eventDragMutationMassagers: t.eventDragMutationMassagers || [],
    eventDefMutationAppliers: t.eventDefMutationAppliers || [],
    dateSelectionTransformers: t.dateSelectionTransformers || [],
    datePointTransforms: t.datePointTransforms || [],
    dateSpanTransforms: t.dateSpanTransforms || [],
    views: t.views || {},
    viewPropsTransformers: t.viewPropsTransformers || [],
    isPropsValid: t.isPropsValid || null,
    externalDefTransforms: t.externalDefTransforms || [],
    viewContainerAppends: t.viewContainerAppends || [],
    eventDropTransformers: t.eventDropTransformers || [],
    componentInteractions: t.componentInteractions || [],
    calendarInteractions: t.calendarInteractions || [],
    themeClasses: t.themeClasses || {},
    eventSourceDefs: t.eventSourceDefs || [],
    cmdFormatter: t.cmdFormatter,
    recurringTypes: t.recurringTypes || [],
    namedTimeZonedImpl: t.namedTimeZonedImpl,
    initialView: t.initialView || "",
    elementDraggingImpl: t.elementDraggingImpl,
    optionChangeHandlers: t.optionChangeHandlers || {},
    scrollGridImpl: t.scrollGridImpl || null,
    listenerRefiners: t.listenerRefiners || {},
    optionRefiners: t.optionRefiners || {},
    propSetHandlers: t.propSetHandlers || {}
  };
}
function F6(t, e) {
  let n = {}, r = {
    premiumReleaseDate: void 0,
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: "",
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };
  function i(s) {
    for (let o of s) {
      const a = o.name, l = n[a];
      l === void 0 ? (n[a] = o.id, i(o.deps), r = V6(r, o)) : l !== o.id && console.warn(`Duplicate plugin '${a}'`);
    }
  }
  return t && i(t), i(e), r;
}
function z6() {
  let t = [], e = [], n;
  return (r, i) => ((!n || !On(r, t) || !On(i, e)) && (n = F6(r, i)), t = r, e = i, n);
}
function V6(t, e) {
  return {
    premiumReleaseDate: U6(t.premiumReleaseDate, e.premiumReleaseDate),
    reducers: t.reducers.concat(e.reducers),
    isLoadingFuncs: t.isLoadingFuncs.concat(e.isLoadingFuncs),
    contextInit: t.contextInit.concat(e.contextInit),
    eventRefiners: Object.assign(Object.assign({}, t.eventRefiners), e.eventRefiners),
    eventDefMemberAdders: t.eventDefMemberAdders.concat(e.eventDefMemberAdders),
    eventSourceRefiners: Object.assign(Object.assign({}, t.eventSourceRefiners), e.eventSourceRefiners),
    isDraggableTransformers: t.isDraggableTransformers.concat(e.isDraggableTransformers),
    eventDragMutationMassagers: t.eventDragMutationMassagers.concat(e.eventDragMutationMassagers),
    eventDefMutationAppliers: t.eventDefMutationAppliers.concat(e.eventDefMutationAppliers),
    dateSelectionTransformers: t.dateSelectionTransformers.concat(e.dateSelectionTransformers),
    datePointTransforms: t.datePointTransforms.concat(e.datePointTransforms),
    dateSpanTransforms: t.dateSpanTransforms.concat(e.dateSpanTransforms),
    views: Object.assign(Object.assign({}, t.views), e.views),
    viewPropsTransformers: t.viewPropsTransformers.concat(e.viewPropsTransformers),
    isPropsValid: e.isPropsValid || t.isPropsValid,
    externalDefTransforms: t.externalDefTransforms.concat(e.externalDefTransforms),
    viewContainerAppends: t.viewContainerAppends.concat(e.viewContainerAppends),
    eventDropTransformers: t.eventDropTransformers.concat(e.eventDropTransformers),
    calendarInteractions: t.calendarInteractions.concat(e.calendarInteractions),
    componentInteractions: t.componentInteractions.concat(e.componentInteractions),
    themeClasses: Object.assign(Object.assign({}, t.themeClasses), e.themeClasses),
    eventSourceDefs: t.eventSourceDefs.concat(e.eventSourceDefs),
    cmdFormatter: e.cmdFormatter || t.cmdFormatter,
    recurringTypes: t.recurringTypes.concat(e.recurringTypes),
    namedTimeZonedImpl: e.namedTimeZonedImpl || t.namedTimeZonedImpl,
    initialView: t.initialView || e.initialView,
    elementDraggingImpl: t.elementDraggingImpl || e.elementDraggingImpl,
    optionChangeHandlers: Object.assign(Object.assign({}, t.optionChangeHandlers), e.optionChangeHandlers),
    scrollGridImpl: e.scrollGridImpl || t.scrollGridImpl,
    listenerRefiners: Object.assign(Object.assign({}, t.listenerRefiners), e.listenerRefiners),
    optionRefiners: Object.assign(Object.assign({}, t.optionRefiners), e.optionRefiners),
    propSetHandlers: Object.assign(Object.assign({}, t.propSetHandlers), e.propSetHandlers)
  };
}
function U6(t, e) {
  return t === void 0 ? e : e === void 0 ? t : new Date(Math.max(t.valueOf(), e.valueOf()));
}
class Ln extends si {
}
Ln.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
Ln.prototype.baseIconClass = "fc-icon";
Ln.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
Ln.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
Ln.prototype.iconOverrideOption = "buttonIcons";
Ln.prototype.iconOverrideCustomButtonOption = "icon";
Ln.prototype.iconOverridePrefix = "fc-icon-";
function j6(t, e) {
  let n = {}, r;
  for (r in t)
    ka(r, n, t, e);
  for (r in e)
    ka(r, n, t, e);
  return n;
}
function ka(t, e, n, r) {
  if (e[t])
    return e[t];
  let i = W6(t, e, n, r);
  return i && (e[t] = i), i;
}
function W6(t, e, n, r) {
  let i = n[t], s = r[t], o = (u) => i && i[u] !== null ? i[u] : s && s[u] !== null ? s[u] : null, a = o("component"), l = o("superType"), c = null;
  if (l) {
    if (l === t)
      throw new Error("Can't have a custom view type that references itself");
    c = ka(l, e, n, r);
  }
  return !a && c && (a = c.component), a ? {
    type: t,
    component: a,
    defaults: Object.assign(Object.assign({}, c ? c.defaults : {}), i ? i.rawOptions : {}),
    overrides: Object.assign(Object.assign({}, c ? c.overrides : {}), s ? s.rawOptions : {})
  } : null;
}
function Lu(t) {
  return xn(t, q6);
}
function q6(t) {
  let e = typeof t == "function" ? { component: t } : t, { component: n } = e;
  return e.content ? n = Pu(e) : n && !(n.prototype instanceof Ue) && (n = Pu(Object.assign(Object.assign({}, e), { content: n }))), {
    superType: e.type,
    component: n,
    rawOptions: e
    // includes type and component too :(
  };
}
function Pu(t) {
  return (e) => O(wn.Consumer, null, (n) => O(Ht, { elTag: "div", elClasses: W0(n.viewSpec), renderProps: Object.assign(Object.assign({}, e), { nextDayThreshold: n.options.nextDayThreshold }), generatorName: void 0, customGenerator: t.content, classNameGenerator: t.classNames, didMount: t.didMount, willUnmount: t.willUnmount }));
}
function Y6(t, e, n, r) {
  let i = Lu(t), s = Lu(e.views), o = j6(i, s);
  return xn(o, (a) => G6(a, s, e, n, r));
}
function G6(t, e, n, r, i) {
  let s = t.overrides.duration || t.defaults.duration || r.duration || n.duration, o = null, a = "", l = "", c = {};
  if (s && (o = Q6(s), o)) {
    let d = ba(o);
    a = d.unit, d.value === 1 && (l = a, c = e[a] ? e[a].rawOptions : {});
  }
  let u = (d) => {
    let f = d.buttonText || {}, g = t.defaults.buttonTextKey;
    return g != null && f[g] != null ? f[g] : f[t.type] != null ? f[t.type] : f[l] != null ? f[l] : null;
  }, h = (d) => {
    let f = d.buttonHints || {}, g = t.defaults.buttonTextKey;
    return g != null && f[g] != null ? f[g] : f[t.type] != null ? f[t.type] : f[l] != null ? f[l] : null;
  };
  return {
    type: t.type,
    component: t.component,
    duration: o,
    durationUnit: a,
    singleUnit: l,
    optionDefaults: t.defaults,
    optionOverrides: Object.assign(Object.assign({}, c), t.overrides),
    buttonTextOverride: u(r) || u(n) || // constructor-specified buttonText lookup hash takes precedence
    t.overrides.buttonText,
    buttonTextDefault: u(i) || t.defaults.buttonText || u(qr) || t.type,
    // not DRY
    buttonTitleOverride: h(r) || h(n) || t.overrides.buttonHint,
    buttonTitleDefault: h(i) || t.defaults.buttonHint || h(qr)
    // will eventually fall back to buttonText
  };
}
let $u = {};
function Q6(t) {
  let e = JSON.stringify(t), n = $u[e];
  return n === void 0 && (n = Pe(t), $u[e] = n), n;
}
function Z6(t, e) {
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      t = e.viewType;
  }
  return t;
}
function K6(t, e) {
  switch (e.type) {
    case "SET_OPTION":
      return Object.assign(Object.assign({}, t), { [e.optionName]: e.rawOptionValue });
    default:
      return t;
  }
}
function X6(t, e, n, r) {
  let i;
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      return r.build(e.dateMarker || n);
    case "CHANGE_DATE":
      return r.build(e.dateMarker);
    case "PREV":
      if (i = r.buildPrev(t, n), i.isValid)
        return i;
      break;
    case "NEXT":
      if (i = r.buildNext(t, n), i.isValid)
        return i;
      break;
  }
  return t;
}
function J6(t, e, n) {
  let r = e ? e.activeRange : null;
  return J0({}, ox(t, n), r, n);
}
function ex(t, e, n, r) {
  let i = n ? n.activeRange : null;
  switch (e.type) {
    case "ADD_EVENT_SOURCES":
      return J0(t, e.sources, i, r);
    case "REMOVE_EVENT_SOURCE":
      return nx(t, e.sourceId);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return n ? eh(t, i, r) : t;
    case "FETCH_EVENT_SOURCES":
      return Cl(t, e.sourceIds ? (
        // why no type?
        Zf(e.sourceIds)
      ) : th(t, r), i, e.isRefetch || !1, r);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return sx(t, e.sourceId, e.fetchId, e.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return t;
  }
}
function tx(t, e, n) {
  let r = e ? e.activeRange : null;
  return Cl(t, th(t, n), r, !0, n);
}
function X0(t) {
  for (let e in t)
    if (t[e].isFetching)
      return !0;
  return !1;
}
function J0(t, e, n, r) {
  let i = {};
  for (let s of e)
    i[s.sourceId] = s;
  return n && (i = eh(i, n, r)), Object.assign(Object.assign({}, t), i);
}
function nx(t, e) {
  return Kn(t, (n) => n.sourceId !== e);
}
function eh(t, e, n) {
  return Cl(t, Kn(t, (r) => rx(r, e, n)), e, !1, n);
}
function rx(t, e, n) {
  return nh(t, n) ? !n.options.lazyFetching || !t.fetchRange || t.isFetching || // always cancel outdated in-progress fetches
  e.start < t.fetchRange.start || e.end > t.fetchRange.end : !t.latestFetchId;
}
function Cl(t, e, n, r, i) {
  let s = {};
  for (let o in t) {
    let a = t[o];
    e[o] ? s[o] = ix(a, n, r, i) : s[o] = a;
  }
  return s;
}
function ix(t, e, n, r) {
  let { options: i, calendarApi: s } = r, o = r.pluginHooks.eventSourceDefs[t.sourceDefId], a = ir();
  return o.fetch({
    eventSource: t,
    range: e,
    isRefetch: n,
    context: r
  }, (l) => {
    let { rawEvents: c } = l;
    i.eventSourceSuccess && (c = i.eventSourceSuccess.call(s, c, l.response) || c), t.success && (c = t.success.call(s, c, l.response) || c), r.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: t.sourceId,
      fetchId: a,
      fetchRange: e,
      rawEvents: c
    });
  }, (l) => {
    let c = !1;
    i.eventSourceFailure && (i.eventSourceFailure.call(s, l), c = !0), t.failure && (t.failure(l), c = !0), c || console.warn(l.message, l), r.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: t.sourceId,
      fetchId: a,
      fetchRange: e,
      error: l
    });
  }), Object.assign(Object.assign({}, t), { isFetching: !0, latestFetchId: a });
}
function sx(t, e, n, r) {
  let i = t[e];
  return i && // not already removed
  n === i.latestFetchId ? Object.assign(Object.assign({}, t), { [e]: Object.assign(Object.assign({}, i), { isFetching: !1, fetchRange: r }) }) : t;
}
function th(t, e) {
  return Kn(t, (n) => nh(n, e));
}
function ox(t, e) {
  let n = Y0(e), r = [].concat(t.eventSources || []), i = [];
  t.initialEvents && r.unshift(t.initialEvents), t.events && r.unshift(t.events);
  for (let s of r) {
    let o = q0(s, e, n);
    o && i.push(o);
  }
  return i;
}
function nh(t, e) {
  return !e.pluginHooks.eventSourceDefs[t.sourceDefId].ignoreRange;
}
function ax(t, e) {
  switch (e.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return e.selection;
    default:
      return t;
  }
}
function lx(t, e) {
  switch (e.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return e.eventInstanceId;
    default:
      return t;
  }
}
function cx(t, e) {
  let n;
  switch (e.type) {
    case "UNSET_EVENT_DRAG":
      return null;
    case "SET_EVENT_DRAG":
      return n = e.state, {
        affectedEvents: n.affectedEvents,
        mutatedEvents: n.mutatedEvents,
        isEvent: n.isEvent
      };
    default:
      return t;
  }
}
function ux(t, e) {
  let n;
  switch (e.type) {
    case "UNSET_EVENT_RESIZE":
      return null;
    case "SET_EVENT_RESIZE":
      return n = e.state, {
        affectedEvents: n.affectedEvents,
        mutatedEvents: n.mutatedEvents,
        isEvent: n.isEvent
      };
    default:
      return t;
  }
}
function dx(t, e, n, r, i) {
  let s = t.headerToolbar ? Hu(t.headerToolbar, t, e, n, r, i) : null, o = t.footerToolbar ? Hu(t.footerToolbar, t, e, n, r, i) : null;
  return { header: s, footer: o };
}
function Hu(t, e, n, r, i, s) {
  let o = {}, a = [], l = !1;
  for (let c in t) {
    let u = t[c], h = fx(u, e, n, r, i, s);
    o[c] = h.widgets, a.push(...h.viewsWithButtons), l = l || h.hasTitle;
  }
  return { sectionWidgets: o, viewsWithButtons: a, hasTitle: l };
}
function fx(t, e, n, r, i, s) {
  let o = e.direction === "rtl", a = e.customButtons || {}, l = n.buttonText || {}, c = e.buttonText || {}, u = n.buttonHints || {}, h = e.buttonHints || {}, d = t ? t.split(" ") : [], f = [], g = !1;
  return { widgets: d.map((v) => v.split(",").map((m) => {
    if (m === "title")
      return g = !0, { buttonName: m };
    let x, b, _, w, S, y;
    if (x = a[m])
      _ = (E) => {
        x.click && x.click.call(E.target, E, E.target);
      }, (w = r.getCustomButtonIconClass(x)) || (w = r.getIconClass(m, o)) || (S = x.text), y = x.hint || x.text;
    else if (b = i[m]) {
      f.push(m), _ = () => {
        s.changeView(m);
      }, (S = b.buttonTextOverride) || (w = r.getIconClass(m, o)) || (S = b.buttonTextDefault);
      let E = b.buttonTextOverride || b.buttonTextDefault;
      y = Wr(
        b.buttonTitleOverride || b.buttonTitleDefault || e.viewHint,
        [E, m],
        // view-name = buttonName
        E
      );
    } else if (s[m])
      if (_ = () => {
        s[m]();
      }, (S = l[m]) || (w = r.getIconClass(m, o)) || (S = c[m]), m === "prevYear" || m === "nextYear") {
        let E = m === "prevYear" ? "prev" : "next";
        y = Wr(u[E] || h[E], [
          c.year || "year",
          "year"
        ], c[m]);
      } else
        y = (E) => Wr(u[m] || h[m], [
          c[E] || E,
          E
        ], c[m]);
    return { buttonName: m, buttonClick: _, buttonIcon: w, buttonText: S, buttonHint: y };
  })), viewsWithButtons: f, hasTitle: g };
}
class hx {
  constructor(e, n, r) {
    this.type = e, this.getCurrentData = n, this.dateEnv = r;
  }
  get calendar() {
    return this.getCurrentData().calendarApi;
  }
  get title() {
    return this.getCurrentData().viewTitle;
  }
  get activeStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
  }
  get activeEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
  }
  get currentStart() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
  }
  get currentEnd() {
    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
  }
  getOption(e) {
    return this.getCurrentData().options[e];
  }
}
let px = {
  ignoreRange: !0,
  parseMeta(t) {
    return Array.isArray(t.events) ? t.events : null;
  },
  fetch(t, e) {
    e({
      rawEvents: t.eventSource.meta
    });
  }
};
const gx = Sn({
  name: "array-event-source",
  eventSourceDefs: [px]
});
let vx = {
  parseMeta(t) {
    return typeof t.events == "function" ? t.events : null;
  },
  fetch(t, e, n) {
    const { dateEnv: r } = t.context, i = t.eventSource.meta;
    r2(i.bind(null, y0(t.range, r)), (s) => e({ rawEvents: s }), n);
  }
};
const mx = Sn({
  name: "func-event-source",
  eventSourceDefs: [vx]
}), bx = {
  method: String,
  extraParams: X,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
let yx = {
  parseMeta(t) {
    return t.url && (t.format === "json" || !t.format) ? {
      url: t.url,
      format: "json",
      method: (t.method || "GET").toUpperCase(),
      extraParams: t.extraParams,
      startParam: t.startParam,
      endParam: t.endParam,
      timeZoneParam: t.timeZoneParam
    } : null;
  },
  fetch(t, e, n) {
    const { meta: r } = t.eventSource, i = _x(r, t.range, t.context);
    l6(r.method, r.url, i).then(([s, o]) => {
      e({ rawEvents: s, response: o });
    }, n);
  }
};
const xx = Sn({
  name: "json-event-source",
  eventSourceRefiners: bx,
  eventSourceDefs: [yx]
});
function _x(t, e, n) {
  let { dateEnv: r, options: i } = n, s, o, a, l, c = {};
  return s = t.startParam, s == null && (s = i.startParam), o = t.endParam, o == null && (o = i.endParam), a = t.timeZoneParam, a == null && (a = i.timeZoneParam), typeof t.extraParams == "function" ? l = t.extraParams() : l = t.extraParams || {}, Object.assign(c, l), c[s] = r.formatIso(e.start), c[o] = r.formatIso(e.end), r.timeZone !== "local" && (c[a] = r.timeZone), c;
}
const wx = {
  daysOfWeek: X,
  startTime: Pe,
  endTime: Pe,
  duration: Pe,
  startRecur: X,
  endRecur: X
};
let Sx = {
  parse(t, e) {
    if (t.daysOfWeek || t.startTime || t.endTime || t.startRecur || t.endRecur) {
      let n = {
        daysOfWeek: t.daysOfWeek || null,
        startTime: t.startTime || null,
        endTime: t.endTime || null,
        startRecur: t.startRecur ? e.createMarker(t.startRecur) : null,
        endRecur: t.endRecur ? e.createMarker(t.endRecur) : null
      }, r;
      return t.duration && (r = t.duration), !r && t.startTime && t.endTime && (r = Fy(t.endTime, t.startTime)), {
        allDayGuess: !t.startTime && !t.endTime,
        duration: r,
        typeData: n
        // doesn't need endTime anymore but oh well
      };
    }
    return null;
  },
  expand(t, e, n) {
    let r = Jn(e, { start: t.startRecur, end: t.endRecur });
    return r ? Cx(t.daysOfWeek, t.startTime, r, n) : [];
  }
};
const Ex = Sn({
  name: "simple-recurring-event",
  recurringTypes: [Sx],
  eventRefiners: wx
});
function Cx(t, e, n, r) {
  let i = t ? Zf(t) : null, s = Qe(n.start), o = n.end, a = [];
  for (; s < o; ) {
    let l;
    (!i || i[s.getUTCDay()]) && (e ? l = r.add(s, e) : l = s, a.push(l)), s = Ct(s, 1);
  }
  return a;
}
const kx = Sn({
  name: "change-handler",
  optionChangeHandlers: {
    events(t, e) {
      Fu([t], e);
    },
    eventSources: Fu
  }
});
function Fu(t, e) {
  let n = tl(e.getCurrentData().eventSources);
  if (n.length === 1 && t.length === 1 && Array.isArray(n[0]._raw) && Array.isArray(t[0])) {
    e.dispatch({
      type: "RESET_RAW_EVENTS",
      sourceId: n[0].sourceId,
      rawEvents: t[0]
    });
    return;
  }
  let r = [];
  for (let i of t) {
    let s = !1;
    for (let o = 0; o < n.length; o += 1)
      if (n[o]._raw === i) {
        n.splice(o, 1), s = !0;
        break;
      }
    s || r.push(i);
  }
  for (let i of n)
    e.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: i.sourceId
    });
  for (let i of r)
    e.calendarApi.addEventSource(i);
}
function Ax(t, e) {
  e.emitter.trigger("datesSet", Object.assign(Object.assign({}, y0(t.activeRange, e.dateEnv)), { view: e.viewApi }));
}
function Dx(t, e) {
  let { emitter: n } = e;
  n.hasHandlers("eventsSet") && n.trigger("eventsSet", Gn(t, e));
}
const Tx = [
  gx,
  mx,
  xx,
  Ex,
  kx,
  Sn({
    name: "misc",
    isLoadingFuncs: [
      (t) => X0(t.eventSources)
    ],
    propSetHandlers: {
      dateProfile: Ax,
      eventStore: Dx
    }
  })
];
class Rx {
  constructor(e, n) {
    this.runTaskOption = e, this.drainedOption = n, this.queue = [], this.delayedRunner = new yl(this.drain.bind(this));
  }
  request(e, n) {
    this.queue.push(e), this.delayedRunner.request(n);
  }
  pause(e) {
    this.delayedRunner.pause(e);
  }
  resume(e, n) {
    this.delayedRunner.resume(e, n);
  }
  drain() {
    let { queue: e } = this;
    for (; e.length; ) {
      let n = [], r;
      for (; r = e.shift(); )
        this.runTask(r), n.push(r);
      this.drained(n);
    }
  }
  runTask(e) {
    this.runTaskOption && this.runTaskOption(e);
  }
  drained(e) {
    this.drainedOption && this.drainedOption(e);
  }
}
function Ix(t, e, n) {
  let r;
  return /^(year|month)$/.test(t.currentRangeUnit) ? r = t.currentRange : r = t.activeRange, n.formatRange(r.start, r.end, et(e.titleFormat || Mx(t)), {
    isEndExclusive: t.isRangeAllDay,
    defaultSeparator: e.titleRangeSeparator
  });
}
function Mx(t) {
  let { currentRangeUnit: e } = t;
  if (e === "year")
    return { year: "numeric" };
  if (e === "month")
    return { year: "numeric", month: "long" };
  let n = Ls(t.currentRange.start, t.currentRange.end);
  return n !== null && n > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
class Ox {
  constructor(e) {
    this.computeCurrentViewData = Ce(this._computeCurrentViewData), this.organizeRawLocales = Ce(P6), this.buildLocale = Ce(Z0), this.buildPluginHooks = z6(), this.buildDateEnv = Ce(Nx), this.buildTheme = Ce(Bx), this.parseToolbars = Ce(dx), this.buildViewSpecs = Ce(Y6), this.buildDateProfileGenerator = Hi(Lx), this.buildViewApi = Ce(Px), this.buildViewUiProps = Hi(Fx), this.buildEventUiBySource = Ce($x, an), this.buildEventUiBases = Ce(Hx), this.parseContextBusinessHours = Hi(zx), this.buildTitle = Ce(Ix), this.emitter = new oo(), this.actionRunner = new Rx(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.optionsForRefining = [], this.optionsForHandling = [], this.getCurrentData = () => this.data, this.dispatch = (d) => {
      this.actionRunner.request(d);
    }, this.props = e, this.actionRunner.pause();
    let n = {}, r = this.computeOptionsData(e.optionOverrides, n, e.calendarApi), i = r.calendarOptions.initialView || r.pluginHooks.initialView, s = this.computeCurrentViewData(i, r, e.optionOverrides, n);
    e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(s.options);
    let o = p2(r.calendarOptions, r.dateEnv), a = s.dateProfileGenerator.build(o);
    yn(a.activeRange, o) || (o = a.currentRange.start);
    let l = {
      dateEnv: r.dateEnv,
      options: r.calendarOptions,
      pluginHooks: r.pluginHooks,
      calendarApi: e.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    };
    for (let d of r.pluginHooks.contextInit)
      d(l);
    let c = J6(r.calendarOptions, a, l), u = {
      dynamicOptionOverrides: n,
      currentViewType: i,
      currentDate: o,
      dateProfile: a,
      businessHours: this.parseContextBusinessHours(l),
      eventSources: c,
      eventUiBases: {},
      eventStore: $t(),
      renderableEventStore: $t(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(l).selectionConfig
    }, h = Object.assign(Object.assign({}, l), u);
    for (let d of r.pluginHooks.reducers)
      Object.assign(u, d(null, null, h));
    qo(u, l) && this.emitter.trigger("loading", !0), this.state = u, this.updateData(), this.actionRunner.resume();
  }
  resetOptions(e, n) {
    let { props: r } = this;
    n === void 0 ? r.optionOverrides = e : (r.optionOverrides = Object.assign(Object.assign({}, r.optionOverrides || {}), e), this.optionsForRefining.push(...n)), (n === void 0 || n.length) && this.actionRunner.request({
      type: "NOTHING"
    });
  }
  _handleAction(e) {
    let { props: n, state: r, emitter: i } = this, s = K6(r.dynamicOptionOverrides, e), o = this.computeOptionsData(n.optionOverrides, s, n.calendarApi), a = Z6(r.currentViewType, e), l = this.computeCurrentViewData(a, o, n.optionOverrides, s);
    n.calendarApi.currentDataManager = this, i.setThisContext(n.calendarApi), i.setOptions(l.options);
    let c = {
      dateEnv: o.dateEnv,
      options: o.calendarOptions,
      pluginHooks: o.pluginHooks,
      calendarApi: n.calendarApi,
      dispatch: this.dispatch,
      emitter: i,
      getCurrentData: this.getCurrentData
    }, { currentDate: u, dateProfile: h } = r;
    this.data && this.data.dateProfileGenerator !== l.dateProfileGenerator && (h = l.dateProfileGenerator.build(u)), u = h2(u, e), h = X6(h, e, u, l.dateProfileGenerator), (e.type === "PREV" || // TODO: move this logic into DateProfileGenerator
    e.type === "NEXT" || // "
    !yn(h.currentRange, u)) && (u = h.currentRange.start);
    let d = ex(r.eventSources, e, h, c), f = Z2(r.eventStore, e, d, h, c), p = X0(d) && !l.options.progressiveEventRendering && r.renderableEventStore || f, { eventUiSingleBase: v, selectionConfig: m } = this.buildViewUiProps(c), x = this.buildEventUiBySource(d), b = this.buildEventUiBases(p.defs, v, x), _ = {
      dynamicOptionOverrides: s,
      currentViewType: a,
      currentDate: u,
      dateProfile: h,
      eventSources: d,
      eventStore: f,
      renderableEventStore: p,
      selectionConfig: m,
      eventUiBases: b,
      businessHours: this.parseContextBusinessHours(c),
      dateSelection: ax(r.dateSelection, e),
      eventSelection: lx(r.eventSelection, e),
      eventDrag: cx(r.eventDrag, e),
      eventResize: ux(r.eventResize, e)
    }, w = Object.assign(Object.assign({}, c), _);
    for (let E of o.pluginHooks.reducers)
      Object.assign(_, E(r, e, w));
    let S = qo(r, c), y = qo(_, c);
    !S && y ? i.trigger("loading", !0) : S && !y && i.trigger("loading", !1), this.state = _, n.onAction && n.onAction(e);
  }
  updateData() {
    let { props: e, state: n } = this, r = this.data, i = this.computeOptionsData(e.optionOverrides, n.dynamicOptionOverrides, e.calendarApi), s = this.computeCurrentViewData(n.currentViewType, i, e.optionOverrides, n.dynamicOptionOverrides), o = this.data = Object.assign(Object.assign(Object.assign({ viewTitle: this.buildTitle(n.dateProfile, s.options, i.dateEnv), calendarApi: e.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, i), s), n), a = i.pluginHooks.optionChangeHandlers, l = r && r.calendarOptions, c = i.calendarOptions;
    if (l && l !== c) {
      l.timeZone !== c.timeZone && (n.eventSources = o.eventSources = tx(o.eventSources, n.dateProfile, o), n.eventStore = o.eventStore = Ou(o.eventStore, r.dateEnv, o.dateEnv), n.renderableEventStore = o.renderableEventStore = Ou(o.renderableEventStore, r.dateEnv, o.dateEnv));
      for (let u in a)
        (this.optionsForHandling.indexOf(u) !== -1 || l[u] !== c[u]) && a[u](c[u], o);
    }
    this.optionsForHandling = [], e.onData && e.onData(o);
  }
  computeOptionsData(e, n, r) {
    if (!this.optionsForRefining.length && e === this.stableOptionOverrides && n === this.stableDynamicOptionOverrides)
      return this.stableCalendarOptionsData;
    let { refinedOptions: i, pluginHooks: s, localeDefaults: o, availableLocaleData: a, extra: l } = this.processRawCalendarOptions(e, n);
    zu(l);
    let c = this.buildDateEnv(i.timeZone, i.locale, i.weekNumberCalculation, i.firstDay, i.weekText, s, a, i.defaultRangeSeparator), u = this.buildViewSpecs(s.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides, o), h = this.buildTheme(i, s), d = this.parseToolbars(i, this.stableOptionOverrides, h, u, r);
    return this.stableCalendarOptionsData = {
      calendarOptions: i,
      pluginHooks: s,
      dateEnv: c,
      viewSpecs: u,
      theme: h,
      toolbarConfig: d,
      localeDefaults: o,
      availableRawLocales: a.map
    };
  }
  // always called from behind a memoizer
  processRawCalendarOptions(e, n) {
    let { locales: r, locale: i } = $o([
      qr,
      e,
      n
    ]), s = this.organizeRawLocales(r), o = s.map, a = this.buildLocale(i || s.defaultCode, o).options, l = this.buildPluginHooks(e.plugins || [], Tx), c = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, wu), Su), Eu), l.listenerRefiners), l.optionRefiners), u = {}, h = $o([
      qr,
      a,
      e,
      n
    ]), d = {}, f = this.currentCalendarOptionsInput, g = this.currentCalendarOptionsRefined, p = !1;
    for (let v in h)
      this.optionsForRefining.indexOf(v) === -1 && (h[v] === f[v] || zn[v] && v in f && zn[v](f[v], h[v])) ? d[v] = g[v] : c[v] ? (d[v] = c[v](h[v]), p = !0) : u[v] = f[v];
    return p && (this.currentCalendarOptionsInput = h, this.currentCalendarOptionsRefined = d, this.stableOptionOverrides = e, this.stableDynamicOptionOverrides = n), this.optionsForHandling.push(...this.optionsForRefining), this.optionsForRefining = [], {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks: l,
      availableLocaleData: s,
      localeDefaults: a,
      extra: u
    };
  }
  _computeCurrentViewData(e, n, r, i) {
    let s = n.viewSpecs[e];
    if (!s)
      throw new Error(`viewType "${e}" is not available. Please make sure you've loaded all neccessary plugins`);
    let { refinedOptions: o, extra: a } = this.processRawViewOptions(s, n.pluginHooks, n.localeDefaults, r, i);
    zu(a);
    let l = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: s.optionDefaults.dateProfileGeneratorClass,
      duration: s.duration,
      durationUnit: s.durationUnit,
      usesMinMaxTime: s.optionDefaults.usesMinMaxTime,
      dateEnv: n.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: o.slotMinTime,
      slotMaxTime: o.slotMaxTime,
      showNonCurrentDates: o.showNonCurrentDates,
      dayCount: o.dayCount,
      dateAlignment: o.dateAlignment,
      dateIncrement: o.dateIncrement,
      hiddenDays: o.hiddenDays,
      weekends: o.weekends,
      nowInput: o.now,
      validRangeInput: o.validRange,
      visibleRangeInput: o.visibleRange,
      fixedWeekCount: o.fixedWeekCount
    }), c = this.buildViewApi(e, this.getCurrentData, n.dateEnv);
    return { viewSpec: s, options: o, dateProfileGenerator: l, viewApi: c };
  }
  processRawViewOptions(e, n, r, i, s) {
    let o = $o([
      qr,
      e.optionDefaults,
      r,
      i,
      e.optionOverrides,
      s
    ]), a = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, wu), Su), Eu), S3), n.listenerRefiners), n.optionRefiners), l = {}, c = this.currentViewOptionsInput, u = this.currentViewOptionsRefined, h = !1, d = {};
    for (let f in o)
      o[f] === c[f] || zn[f] && zn[f](o[f], c[f]) ? l[f] = u[f] : (o[f] === this.currentCalendarOptionsInput[f] || zn[f] && zn[f](o[f], this.currentCalendarOptionsInput[f]) ? f in this.currentCalendarOptionsRefined && (l[f] = this.currentCalendarOptionsRefined[f]) : a[f] ? l[f] = a[f](o[f]) : d[f] = o[f], h = !0);
    return h && (this.currentViewOptionsInput = o, this.currentViewOptionsRefined = l), {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: d
    };
  }
}
function Nx(t, e, n, r, i, s, o, a) {
  let l = Z0(e || o.defaultCode, o.map);
  return new L2({
    calendarSystem: "gregory",
    timeZone: t,
    namedTimeZoneImpl: s.namedTimeZonedImpl,
    locale: l,
    weekNumberCalculation: n,
    firstDay: r,
    weekText: i,
    cmdFormatter: s.cmdFormatter,
    defaultSeparator: a
  });
}
function Bx(t, e) {
  let n = e.themeClasses[t.themeSystem] || Ln;
  return new n(t);
}
function Lx(t) {
  let e = t.dateProfileGeneratorClass || d0;
  return new e(t);
}
function Px(t, e, n) {
  return new hx(t, e, n);
}
function $x(t) {
  return xn(t, (e) => e.ui);
}
function Hx(t, e, n) {
  let r = { "": e };
  for (let i in t) {
    let s = t[i];
    s.sourceId && n[s.sourceId] && (r[i] = n[s.sourceId]);
  }
  return r;
}
function Fx(t) {
  let { options: e } = t;
  return {
    eventUiSingleBase: Fs({
      display: e.eventDisplay,
      editable: e.editable,
      startEditable: e.eventStartEditable,
      durationEditable: e.eventDurationEditable,
      constraint: e.eventConstraint,
      overlap: typeof e.eventOverlap == "boolean" ? e.eventOverlap : void 0,
      allow: e.eventAllow,
      backgroundColor: e.eventBackgroundColor,
      borderColor: e.eventBorderColor,
      textColor: e.eventTextColor,
      color: e.eventColor
      // classNames: options.eventClassNames // render hook will handle this
    }, t),
    selectionConfig: Fs({
      constraint: e.selectConstraint,
      overlap: typeof e.selectOverlap == "boolean" ? e.selectOverlap : void 0,
      allow: e.selectAllow
    }, t)
  };
}
function qo(t, e) {
  for (let n of e.pluginHooks.isLoadingFuncs)
    if (n(t))
      return !0;
  return !1;
}
function zx(t) {
  return B3(t.options.businessHours, t);
}
function zu(t, e) {
  for (let n in t)
    console.warn(`Unknown option '${n}'` + (e ? ` for view '${e}'` : ""));
}
class Vx extends Ue {
  render() {
    let e = this.props.widgetGroups.map((n) => this.renderWidgetGroup(n));
    return O("div", { className: "fc-toolbar-chunk" }, ...e);
  }
  renderWidgetGroup(e) {
    let { props: n } = this, { theme: r } = this.context, i = [], s = !0;
    for (let o of e) {
      let { buttonName: a, buttonClick: l, buttonText: c, buttonIcon: u, buttonHint: h } = o;
      if (a === "title")
        s = !1, i.push(O("h2", { className: "fc-toolbar-title", id: n.titleId }, n.title));
      else {
        let d = a === n.activeButton, f = !n.isTodayEnabled && a === "today" || !n.isPrevEnabled && a === "prev" || !n.isNextEnabled && a === "next", g = [`fc-${a}-button`, r.getClass("button")];
        d && g.push(r.getClass("buttonActive")), i.push(O("button", { type: "button", title: typeof h == "function" ? h(n.navUnit) : h, disabled: f, "aria-pressed": d, className: g.join(" "), onClick: l }, c || (u ? O("span", { className: u }) : "")));
      }
    }
    if (i.length > 1) {
      let o = s && r.getClass("buttonGroup") || "";
      return O("div", { className: o }, ...i);
    }
    return i[0];
  }
}
class Vu extends Ue {
  render() {
    let { model: e, extraClassName: n } = this.props, r = !1, i, s, o = e.sectionWidgets, a = o.center;
    return o.left ? (r = !0, i = o.left) : i = o.start, o.right ? (r = !0, s = o.right) : s = o.end, O(
      "div",
      { className: [
        n || "",
        "fc-toolbar",
        r ? "fc-toolbar-ltr" : ""
      ].join(" ") },
      this.renderSection("start", i || []),
      this.renderSection("center", a || []),
      this.renderSection("end", s || [])
    );
  }
  renderSection(e, n) {
    let { props: r } = this;
    return O(Vx, { key: e, widgetGroups: n, title: r.title, navUnit: r.navUnit, activeButton: r.activeButton, isTodayEnabled: r.isTodayEnabled, isPrevEnabled: r.isPrevEnabled, isNextEnabled: r.isNextEnabled, titleId: r.titleId });
  }
}
class Ux extends Ue {
  constructor() {
    super(...arguments), this.state = {
      availableWidth: null
    }, this.handleEl = (e) => {
      this.el = e, _n(this.props.elRef, e), this.updateAvailableWidth();
    }, this.handleResize = () => {
      this.updateAvailableWidth();
    };
  }
  render() {
    let { props: e, state: n } = this, { aspectRatio: r } = e, i = [
      "fc-view-harness",
      r || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"
      // let the view do the height
    ], s = "", o = "";
    return r ? n.availableWidth !== null ? s = n.availableWidth / r : o = `${1 / r * 100}%` : s = e.height || "", O("div", { "aria-labelledby": e.labeledById, ref: this.handleEl, className: i.join(" "), style: { height: s, paddingBottom: o } }, e.children);
  }
  componentDidMount() {
    this.context.addResizeHandler(this.handleResize);
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  updateAvailableWidth() {
    this.el && // needed. but why?
    this.props.aspectRatio && this.setState({ availableWidth: this.el.offsetWidth });
  }
}
class jx extends Rr {
  constructor(e) {
    super(e), this.handleSegClick = (n, r) => {
      let { component: i } = this, { context: s } = i, o = Cr(r);
      if (o && // might be the <div> surrounding the more link
      i.isValidSegDownEl(n.target)) {
        let a = Et(n.target, ".fc-event-forced-url"), l = a ? a.querySelector("a[href]").href : "";
        s.emitter.trigger("eventClick", {
          el: r,
          event: new Xe(i.context, o.eventRange.def, o.eventRange.instance),
          jsEvent: n,
          view: s.viewApi
        }), l && !n.defaultPrevented && (window.location.href = l);
      }
    }, this.destroy = Yf(
      e.el,
      "click",
      ".fc-event",
      // on both fg and bg events
      this.handleSegClick
    );
  }
}
class Wx extends Rr {
  constructor(e) {
    super(e), this.handleEventElRemove = (n) => {
      n === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl);
    }, this.handleSegEnter = (n, r) => {
      Cr(r) && (this.currentSegEl = r, this.triggerEvent("eventMouseEnter", n, r));
    }, this.handleSegLeave = (n, r) => {
      this.currentSegEl && (this.currentSegEl = null, this.triggerEvent("eventMouseLeave", n, r));
    }, this.removeHoverListeners = Cy(
      e.el,
      ".fc-event",
      // on both fg and bg events
      this.handleSegEnter,
      this.handleSegLeave
    );
  }
  destroy() {
    this.removeHoverListeners();
  }
  triggerEvent(e, n, r) {
    let { component: i } = this, { context: s } = i, o = Cr(r);
    (!n || i.isValidSegDownEl(n.target)) && s.emitter.trigger(e, {
      el: r,
      event: new Xe(s, o.eventRange.def, o.eventRange.instance),
      jsEvent: n,
      view: s.viewApi
    });
  }
}
class qx extends or {
  constructor() {
    super(...arguments), this.buildViewContext = Ce(u2), this.buildViewPropTransformers = Ce(Gx), this.buildToolbarProps = Ce(Yx), this.headerRef = It(), this.footerRef = It(), this.interactionsStore = {}, this.state = {
      viewLabelId: no()
    }, this.registerInteractiveComponent = (e, n) => {
      let r = H2(e, n), o = [
        jx,
        Wx
      ].concat(this.props.pluginHooks.componentInteractions).map((a) => new a(r));
      this.interactionsStore[e.uid] = o, Ea[e.uid] = r;
    }, this.unregisterInteractiveComponent = (e) => {
      let n = this.interactionsStore[e.uid];
      if (n) {
        for (let r of n)
          r.destroy();
        delete this.interactionsStore[e.uid];
      }
      delete Ea[e.uid];
    }, this.resizeRunner = new yl(() => {
      this.props.emitter.trigger("_resize", !0), this.props.emitter.trigger("windowResize", { view: this.props.viewApi });
    }), this.handleWindowResize = (e) => {
      let { options: n } = this.props;
      n.handleWindowResize && e.target === window && this.resizeRunner.request(n.windowResizeDelay);
    };
  }
  /*
  renders INSIDE of an outer div
  */
  render() {
    let { props: e } = this, { toolbarConfig: n, options: r } = e, i = this.buildToolbarProps(
      e.viewSpec,
      e.dateProfile,
      e.dateProfileGenerator,
      e.currentDate,
      oi(e.options.now, e.dateEnv),
      // TODO: use NowTimer????
      e.viewTitle
    ), s = !1, o = "", a;
    e.isHeightAuto || e.forPrint ? o = "" : r.height != null ? s = !0 : r.contentHeight != null ? o = r.contentHeight : a = Math.max(r.aspectRatio, 0.5);
    let l = this.buildViewContext(e.viewSpec, e.viewApi, e.options, e.dateProfileGenerator, e.dateEnv, e.theme, e.pluginHooks, e.dispatch, e.getCurrentData, e.emitter, e.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), c = n.header && n.header.hasTitle ? this.state.viewLabelId : "";
    return O(
      wn.Provider,
      { value: l },
      n.header && O(Vu, Object.assign({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: n.header, titleId: c }, i)),
      O(
        Ux,
        { liquid: s, height: o, aspectRatio: a, labeledById: c },
        this.renderView(e),
        this.buildAppendContent()
      ),
      n.footer && O(Vu, Object.assign({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: n.footer, titleId: "" }, i))
    );
  }
  componentDidMount() {
    let { props: e } = this;
    this.calendarInteractions = e.pluginHooks.calendarInteractions.map((r) => new r(e)), window.addEventListener("resize", this.handleWindowResize);
    let { propSetHandlers: n } = e.pluginHooks;
    for (let r in n)
      n[r](e[r], e);
  }
  componentDidUpdate(e) {
    let { props: n } = this, { propSetHandlers: r } = n.pluginHooks;
    for (let i in r)
      n[i] !== e[i] && r[i](n[i], n);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
    for (let e of this.calendarInteractions)
      e.destroy();
    this.props.emitter.trigger("_unmount");
  }
  buildAppendContent() {
    let { props: e } = this, n = e.pluginHooks.viewContainerAppends.map((r) => r(e));
    return O(Ze, {}, ...n);
  }
  renderView(e) {
    let { pluginHooks: n } = e, { viewSpec: r } = e, i = {
      dateProfile: e.dateProfile,
      businessHours: e.businessHours,
      eventStore: e.renderableEventStore,
      eventUiBases: e.eventUiBases,
      dateSelection: e.dateSelection,
      eventSelection: e.eventSelection,
      eventDrag: e.eventDrag,
      eventResize: e.eventResize,
      isHeightAuto: e.isHeightAuto,
      forPrint: e.forPrint
    }, s = this.buildViewPropTransformers(n.viewPropsTransformers);
    for (let a of s)
      Object.assign(i, a.transform(i, e));
    let o = r.component;
    return O(o, Object.assign({}, i));
  }
}
function Yx(t, e, n, r, i, s) {
  let o = n.build(i, void 0, !1), a = n.buildPrev(e, r, !1), l = n.buildNext(e, r, !1);
  return {
    title: s,
    activeButton: t.type,
    navUnit: t.singleUnit,
    isTodayEnabled: o.isValid && !yn(e.currentRange, i),
    isPrevEnabled: a.isValid,
    isNextEnabled: l.isValid
  };
}
function Gx(t) {
  return t.map((e) => new e());
}
let Qx = class extends O6 {
  constructor(e, n = {}) {
    super(), this.isRendering = !1, this.isRendered = !1, this.currentClassNames = [], this.customContentRenderId = 0, this.handleAction = (r) => {
      switch (r.type) {
        case "SET_EVENT_DRAG":
        case "SET_EVENT_RESIZE":
          this.renderRunner.tryDrain();
      }
    }, this.handleData = (r) => {
      this.currentData = r, this.renderRunner.request(r.calendarOptions.rerenderDelay);
    }, this.handleRenderRequest = () => {
      if (this.isRendering) {
        this.isRendered = !0;
        let { currentData: r } = this;
        Au(() => {
          Xr(O(z2, { options: r.calendarOptions, theme: r.theme, emitter: r.emitter }, (i, s, o, a) => (this.setClassNames(i), this.setHeight(s), O(
            A0.Provider,
            { value: this.customContentRenderId },
            O(qx, Object.assign({ isHeightAuto: o, forPrint: a }, r))
          ))), this.el);
        });
      } else
        this.isRendered && (this.isRendered = !1, Xr(null, this.el), this.setClassNames([]), this.setHeight(""));
    }, vy(e), this.el = e, this.renderRunner = new yl(this.handleRenderRequest), new Ox({
      optionOverrides: n,
      calendarApi: this,
      onAction: this.handleAction,
      onData: this.handleData
    });
  }
  render() {
    let e = this.isRendering;
    e ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), e && this.updateSize();
  }
  destroy() {
    this.isRendering && (this.isRendering = !1, this.renderRunner.request());
  }
  updateSize() {
    Au(() => {
      super.updateSize();
    });
  }
  batchRendering(e) {
    this.renderRunner.pause("batchRendering"), e(), this.renderRunner.resume("batchRendering");
  }
  pauseRendering() {
    this.renderRunner.pause("pauseRendering");
  }
  resumeRendering() {
    this.renderRunner.resume("pauseRendering", !0);
  }
  resetOptions(e, n) {
    this.currentDataManager.resetOptions(e, n);
  }
  setClassNames(e) {
    if (!On(e, this.currentClassNames)) {
      let { classList: n } = this.el;
      for (let r of this.currentClassNames)
        n.remove(r);
      for (let r of e)
        n.add(r);
      this.currentClassNames = e;
    }
  }
  setHeight(e) {
    Wf(this.el, "height", e);
  }
};
const Zx = {
  headerToolbar: !0,
  footerToolbar: !0,
  events: !0,
  eventSources: !0,
  resources: !0
}, Kx = He({
  props: {
    options: Object
  },
  data() {
    return {
      renderId: 0,
      customRenderingMap: /* @__PURE__ */ new Map()
    };
  },
  methods: {
    getApi() {
      return this.calendar;
    },
    buildOptions(t) {
      return {
        ...t,
        customRenderingMetaMap: e4(this.$slots),
        handleCustomRendering: this.handleCustomRendering
      };
    }
  },
  render() {
    const t = [];
    for (const e of this.customRenderingMap.values())
      t.push(pr(Xx, {
        key: e.id,
        customRendering: e
      }));
    return pr("div", {
      // when renderId is changed, Vue will trigger a real-DOM async rerender, calling beforeUpdate/updated
      attrs: { "data-fc-render-id": this.renderId }
    }, pr(Ae, t));
  },
  mounted() {
    const t = new B6();
    this.handleCustomRendering = t.handle.bind(t);
    const e = this.buildOptions(this.options), n = new Qx(this.$el, e);
    this.calendar = n, n.render(), t.subscribe((r) => {
      this.customRenderingMap = r, this.renderId++, this.needCustomRenderingResize = !0;
    });
  },
  beforeUpdate() {
    this.getApi().resumeRendering();
  },
  updated() {
    this.needCustomRenderingResize && (this.needCustomRenderingResize = !1, this.getApi().updateSize());
  },
  beforeUnmount() {
    this.getApi().destroy();
  },
  watch: Jx()
}), rh = Kx, Xx = He({
  props: {
    customRendering: Object
  },
  render() {
    const t = this.customRendering, e = typeof t.generatorMeta == "function" ? t.generatorMeta(t.renderProps) : (
      // vue-normalized slot function
      t.generatorMeta
    );
    return pr(fp, { to: t.containerEl }, e);
  }
});
function Jx() {
  let t = {
    // watches changes of ALL options and their nested objects,
    // but this is only a means to be notified of top-level non-complex options changes.
    options: {
      deep: !0,
      handler(e) {
        let n = this.getApi();
        n.pauseRendering();
        let r = this.buildOptions(e);
        n.resetOptions(r), this.renderId++;
      }
    }
  };
  for (let e in Zx)
    t[`options.${e}`] = {
      deep: !0,
      handler(n) {
        if (n !== void 0) {
          let r = this.getApi();
          r.pauseRendering(), r.resetOptions({
            [e]: n
          }, [e]), this.renderId++;
        }
      }
    };
  return t;
}
function e4(t) {
  const e = {};
  for (const n in t)
    e[t4(n)] = t[n];
  return e;
}
function t4(t) {
  return t.split("-").map((e, n) => n ? n4(e) : e).join("");
}
function n4(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
var r4 = ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';
Qa(r4);
function Ai(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n[r] = [];
  for (let r of t)
    n[r.row].push(r);
  return n;
}
function Di(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n[r] = [];
  for (let r of t)
    n[r.firstCol].push(r);
  return n;
}
function Uu(t, e) {
  let n = [];
  if (t) {
    for (let r = 0; r < e; r += 1)
      n[r] = {
        affectedInstances: t.affectedInstances,
        isEvent: t.isEvent,
        segs: []
      };
    for (let r of t.segs)
      n[r.row].segs.push(r);
  } else
    for (let r = 0; r < e; r += 1)
      n[r] = null;
  return n;
}
const ih = et({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function sh(t) {
  let { display: e } = t.eventRange.ui;
  return e === "list-item" || e === "auto" && !t.eventRange.def.allDay && t.firstCol === t.lastCol && // can't be multi-day
  t.isStart && // "
  t.isEnd;
}
class oh extends Ue {
  render() {
    let { props: e } = this;
    return O(H0, Object.assign({}, e, { elClasses: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: ih, defaultDisplayEventEnd: e.defaultDisplayEventEnd, disableResizing: !e.seg.eventRange.def.allDay }));
  }
}
class ah extends Ue {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { seg: i } = e, s = r.eventTimeFormat || ih, o = v0(i, s, n, !0, e.defaultDisplayEventEnd);
    return O(_l, Object.assign({}, e, { elTag: "a", elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"], elAttrs: b0(e.seg, n), defaultGenerator: i4, timeText: o, isResizing: !1, isDateSelecting: !1 }));
  }
}
function i4(t) {
  return O(
    Ze,
    null,
    O("div", { className: "fc-daygrid-event-dot", style: { borderColor: t.borderColor || t.backgroundColor } }),
    t.timeText && O("div", { className: "fc-event-time" }, t.timeText),
    O("div", { className: "fc-event-title" }, t.event.title || O(Ze, null, " "))
  );
}
class s4 extends Ue {
  constructor() {
    super(...arguments), this.compileSegs = Ce(o4);
  }
  render() {
    let { props: e } = this, { allSegs: n, invisibleSegs: r } = this.compileSegs(e.singlePlacements);
    return O(U0, { elClasses: ["fc-daygrid-more-link"], dateProfile: e.dateProfile, todayRange: e.todayRange, allDayDate: e.allDayDate, moreCnt: e.moreCnt, allSegs: n, hiddenSegs: r, alignmentElRef: e.alignmentElRef, alignGridTop: e.alignGridTop, extraDateSpan: e.extraDateSpan, popoverContent: () => {
      let i = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
      return O(Ze, null, n.map((s) => {
        let o = s.eventRange.instance.instanceId;
        return O("div", { className: "fc-daygrid-event-harness", key: o, style: {
          visibility: i[o] ? "hidden" : ""
        } }, sh(s) ? O(ah, Object.assign({ seg: s, isDragging: !1, isSelected: o === e.eventSelection, defaultDisplayEventEnd: !1 }, Rn(s, e.todayRange))) : O(oh, Object.assign({ seg: s, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: o === e.eventSelection, defaultDisplayEventEnd: !1 }, Rn(s, e.todayRange))));
      }));
    } });
  }
}
function o4(t) {
  let e = [], n = [];
  for (let r of t)
    e.push(r.seg), r.isVisible || n.push(r.seg);
  return { allSegs: e, invisibleSegs: n };
}
const a4 = et({ week: "narrow" });
class l4 extends ln {
  constructor() {
    super(...arguments), this.rootElRef = It(), this.state = {
      dayNumberId: no()
    }, this.handleRootEl = (e) => {
      _n(this.rootElRef, e), _n(this.props.elRef, e);
    };
  }
  render() {
    let { context: e, props: n, state: r, rootElRef: i } = this, { options: s, dateEnv: o } = e, { date: a, dateProfile: l } = n;
    const c = n.showDayNumber && u4(a, l.currentRange, o);
    return O(Sl, { elTag: "td", elRef: this.handleRootEl, elClasses: [
      "fc-daygrid-day",
      ...n.extraClassNames || []
    ], elAttrs: Object.assign(Object.assign(Object.assign({}, n.extraDataAttrs), n.showDayNumber ? { "aria-labelledby": r.dayNumberId } : {}), { role: "gridcell" }), defaultGenerator: c4, date: a, dateProfile: l, todayRange: n.todayRange, showDayNumber: n.showDayNumber, isMonthStart: c, extraRenderProps: n.extraRenderProps }, (u, h) => O(
      "div",
      { ref: n.innerElRef, className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", style: { minHeight: n.minHeight } },
      n.showWeekNumber && O(V0, { elTag: "a", elClasses: ["fc-daygrid-week-number"], elAttrs: zs(e, a, "week"), date: a, defaultFormat: a4 }),
      !h.isDisabled && (n.showDayNumber || El(s) || n.forceDayTop) ? O(
        "div",
        { className: "fc-daygrid-day-top" },
        O(u, { elTag: "a", elClasses: [
          "fc-daygrid-day-number",
          c && "fc-daygrid-month-start"
        ], elAttrs: Object.assign(Object.assign({}, zs(e, a)), { id: r.dayNumberId }) })
      ) : n.showDayNumber ? (
        // for creating correct amount of space (see issue #7162)
        O(
          "div",
          { className: "fc-daygrid-day-top", style: { visibility: "hidden" } },
          O("a", { className: "fc-daygrid-day-number" }, " ")
        )
      ) : void 0,
      O(
        "div",
        { className: "fc-daygrid-day-events", ref: n.fgContentElRef },
        n.fgContent,
        O(
          "div",
          { className: "fc-daygrid-day-bottom", style: { marginTop: n.moreMarginTop } },
          O(s4, { allDayDate: a, singlePlacements: n.singlePlacements, moreCnt: n.moreCnt, alignmentElRef: i, alignGridTop: !n.showDayNumber, extraDateSpan: n.extraDateSpan, dateProfile: n.dateProfile, eventSelection: n.eventSelection, eventDrag: n.eventDrag, eventResize: n.eventResize, todayRange: n.todayRange })
        )
      ),
      O("div", { className: "fc-daygrid-day-bg" }, n.bgContent)
    ));
  }
}
function c4(t) {
  return t.dayNumberText || O(Ze, null, " ");
}
function u4(t, e, n) {
  const { start: r, end: i } = e, s = Nn(i, -1), o = n.getYear(r), a = n.getMonth(r), l = n.getYear(s), c = n.getMonth(s);
  return !(o === l && a === c) && // first date in current view?
  (t.valueOf() === r.valueOf() || // a month-start that's within the current range?
  n.getDay(t) === 1 && t.valueOf() < i.valueOf());
}
function d4(t, e, n, r, i, s, o) {
  let a = new p4();
  a.allowReslicing = !0, a.strictOrder = r, e === !0 || n === !0 ? (a.maxCoord = s, a.hiddenConsumes = !0) : typeof e == "number" ? a.maxStackCnt = e : typeof n == "number" && (a.maxStackCnt = n, a.hiddenConsumes = !0);
  let l = [], c = [];
  for (let m = 0; m < t.length; m += 1) {
    let x = t[m], { instanceId: b } = x.eventRange.instance, _ = i[b];
    _ != null ? l.push({
      index: m,
      thickness: _,
      span: {
        start: x.firstCol,
        end: x.lastCol + 1
      }
    }) : c.push(x);
  }
  let u = a.addSegs(l), h = a.toRects(), { singleColPlacements: d, multiColPlacements: f, leftoverMargins: g } = f4(h, t, o), p = [], v = [];
  for (let m of c) {
    f[m.firstCol].push({
      seg: m,
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let x = m.firstCol; x <= m.lastCol; x += 1)
      d[x].push({
        seg: mr(m, x, x + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let m = 0; m < o.length; m += 1)
    p.push(0);
  for (let m of u) {
    let x = t[m.index], b = m.span;
    f[b.start].push({
      seg: mr(x, b.start, b.end, o),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let _ = b.start; _ < b.end; _ += 1)
      p[_] += 1, d[_].push({
        seg: mr(x, _, _ + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let m = 0; m < o.length; m += 1)
    v.push(g[m]);
  return { singleColPlacements: d, multiColPlacements: f, moreCnts: p, moreMarginTops: v };
}
function f4(t, e, n) {
  let r = h4(t, n.length), i = [], s = [], o = [];
  for (let a = 0; a < n.length; a += 1) {
    let l = r[a], c = [], u = 0, h = 0;
    for (let f of l) {
      let g = e[f.index];
      c.push({
        seg: mr(g, a, a + 1, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: f.levelCoord,
        marginTop: f.levelCoord - u
      }), u = f.levelCoord + f.thickness;
    }
    let d = [];
    u = 0, h = 0;
    for (let f of l) {
      let g = e[f.index], p = f.span.end - f.span.start > 1, v = f.span.start === a;
      h += f.levelCoord - u, u = f.levelCoord + f.thickness, p ? (h += f.thickness, v && d.push({
        seg: mr(g, f.span.start, f.span.end, n),
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: f.levelCoord,
        marginTop: 0
      })) : v && (d.push({
        seg: mr(g, f.span.start, f.span.end, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: f.levelCoord,
        marginTop: h
        // claim the margin
      }), h = 0);
    }
    i.push(c), s.push(d), o.push(h);
  }
  return { singleColPlacements: i, multiColPlacements: s, leftoverMargins: o };
}
function h4(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n.push([]);
  for (let r of t)
    for (let i = r.span.start; i < r.span.end; i += 1)
      n[i].push(r);
  return n;
}
function mr(t, e, n, r) {
  if (t.firstCol === e && t.lastCol === n - 1)
    return t;
  let i = t.eventRange, s = i.range, o = Jn(s, {
    start: r[e].date,
    end: Ct(r[n - 1].date, 1)
  });
  return Object.assign(Object.assign({}, t), { firstCol: e, lastCol: n - 1, eventRange: {
    def: i.def,
    ui: Object.assign(Object.assign({}, i.ui), { durationEditable: !1 }),
    instance: i.instance,
    range: o
  }, isStart: t.isStart && o.start.valueOf() === s.start.valueOf(), isEnd: t.isEnd && o.end.valueOf() === s.end.valueOf() });
}
class p4 extends w0 {
  constructor() {
    super(...arguments), this.hiddenConsumes = !1, this.forceHidden = {};
  }
  addSegs(e) {
    const n = super.addSegs(e), { entriesByLevel: r } = this, i = (s) => !this.forceHidden[Qn(s)];
    for (let s = 0; s < r.length; s += 1)
      r[s] = r[s].filter(i);
    return n;
  }
  handleInvalidInsertion(e, n, r) {
    const { entriesByLevel: i, forceHidden: s } = this, { touchingEntry: o, touchingLevel: a, touchingLateral: l } = e;
    if (this.hiddenConsumes && o) {
      const c = Qn(o);
      if (!s[c])
        if (this.allowReslicing) {
          const u = Object.assign(Object.assign({}, o), { span: gl(o.span, n.span) }), h = Qn(u);
          s[h] = !0, i[a][l] = u, this.splitEntry(o, n, r);
        } else
          s[c] = !0, r.push(o);
    }
    return super.handleInvalidInsertion(e, n, r);
  }
}
class lh extends ln {
  constructor() {
    super(...arguments), this.cellElRefs = new bn(), this.frameElRefs = new bn(), this.fgElRefs = new bn(), this.segHarnessRefs = new bn(), this.rootElRef = It(), this.state = {
      framePositions: null,
      maxContentHeight: null,
      eventInstanceHeights: {}
    }, this.handleResize = (e) => {
      e && this.updateSizing(!0);
    };
  }
  render() {
    let { props: e, state: n, context: r } = this, { options: i } = r, s = e.cells.length, o = Di(e.businessHourSegs, s), a = Di(e.bgEventSegs, s), l = Di(this.getHighlightSegs(), s), c = Di(this.getMirrorSegs(), s), { singleColPlacements: u, multiColPlacements: h, moreCnts: d, moreMarginTops: f } = d4(g0(e.fgEventSegs, i.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, i.eventOrderStrict, n.eventInstanceHeights, n.maxContentHeight, e.cells), g = (
      // TODO: messy way to compute this
      e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}
    );
    return O(
      "tr",
      { ref: this.rootElRef, role: "row" },
      e.renderIntro && e.renderIntro(),
      e.cells.map((p, v) => {
        let m = this.renderFgSegs(v, e.forPrint ? u[v] : h[v], e.todayRange, g), x = this.renderFgSegs(v, g4(c[v], h), e.todayRange, {}, !!e.eventDrag, !!e.eventResize, !1);
        return O(l4, { key: p.key, elRef: this.cellElRefs.createRef(p.key), innerElRef: this.frameElRefs.createRef(p.key), dateProfile: e.dateProfile, date: p.date, showDayNumber: e.showDayNumbers, showWeekNumber: e.showWeekNumbers && v === 0, forceDayTop: e.showWeekNumbers, todayRange: e.todayRange, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, extraRenderProps: p.extraRenderProps, extraDataAttrs: p.extraDataAttrs, extraClassNames: p.extraClassNames, extraDateSpan: p.extraDateSpan, moreCnt: d[v], moreMarginTop: f[v], singlePlacements: u[v], fgContentElRef: this.fgElRefs.createRef(p.key), fgContent: (
          // Fragment scopes the keys
          O(
            Ze,
            null,
            O(Ze, null, m),
            O(Ze, null, x)
          )
        ), bgContent: (
          // Fragment scopes the keys
          O(
            Ze,
            null,
            this.renderFillSegs(l[v], "highlight"),
            this.renderFillSegs(o[v], "non-business"),
            this.renderFillSegs(a[v], "bg-event")
          )
        ), minHeight: e.cellMinHeight });
      })
    );
  }
  componentDidMount() {
    this.updateSizing(!0), this.context.addResizeHandler(this.handleResize);
  }
  componentDidUpdate(e, n) {
    let r = this.props;
    this.updateSizing(!an(e, r));
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  getHighlightSegs() {
    let { props: e } = this;
    return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs;
  }
  getMirrorSegs() {
    let { props: e } = this;
    return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : [];
  }
  renderFgSegs(e, n, r, i, s, o, a) {
    let { context: l } = this, { eventSelection: c } = this.props, { framePositions: u } = this.state, h = this.props.cells.length === 1, d = s || o || a, f = [];
    if (u)
      for (let g of n) {
        let { seg: p } = g, { instanceId: v } = p.eventRange.instance, m = v + ":" + e, x = g.isVisible && !i[v], b = g.isAbsolute, _ = "", w = "";
        b && (l.isRtl ? (w = 0, _ = u.lefts[p.lastCol] - u.lefts[p.firstCol]) : (_ = 0, w = u.rights[p.firstCol] - u.rights[p.lastCol])), f.push(O("div", { className: "fc-daygrid-event-harness" + (b ? " fc-daygrid-event-harness-abs" : ""), key: m, ref: d ? null : this.segHarnessRefs.createRef(m), style: {
          visibility: x ? "" : "hidden",
          marginTop: b ? "" : g.marginTop,
          top: b ? g.absoluteTop : "",
          left: _,
          right: w
        } }, sh(p) ? O(ah, Object.assign({ seg: p, isDragging: s, isSelected: v === c, defaultDisplayEventEnd: h }, Rn(p, r))) : O(oh, Object.assign({ seg: p, isDragging: s, isResizing: o, isDateSelecting: a, isSelected: v === c, defaultDisplayEventEnd: h }, Rn(p, r)))));
      }
    return f;
  }
  renderFillSegs(e, n) {
    let { isRtl: r } = this.context, { todayRange: i } = this.props, { framePositions: s } = this.state, o = [];
    if (s)
      for (let a of e) {
        let l = r ? {
          right: 0,
          left: s.lefts[a.lastCol] - s.lefts[a.firstCol]
        } : {
          left: 0,
          right: s.rights[a.firstCol] - s.rights[a.lastCol]
        };
        o.push(O("div", { key: m0(a.eventRange), className: "fc-daygrid-bg-harness", style: l }, n === "bg-event" ? O(F0, Object.assign({ seg: a }, Rn(a, i))) : z0(n)));
      }
    return O(Ze, {}, ...o);
  }
  updateSizing(e) {
    let { props: n, state: r, frameElRefs: i } = this;
    if (!n.forPrint && n.clientWidth !== null) {
      if (e) {
        let l = n.cells.map((c) => i.currentMap[c.key]);
        if (l.length) {
          let c = this.rootElRef.current, u = new Er(
            c,
            l,
            !0,
            // isHorizontal
            !1
          );
          (!r.framePositions || !r.framePositions.similarTo(u)) && this.setState({
            framePositions: new Er(
              c,
              l,
              !0,
              // isHorizontal
              !1
            )
          });
        }
      }
      const s = this.state.eventInstanceHeights, o = this.queryEventInstanceHeights(), a = n.dayMaxEvents === !0 || n.dayMaxEventRows === !0;
      this.safeSetState({
        // HACK to prevent oscillations of events being shown/hidden from max-event-rows
        // Essentially, once you compute an element's height, never null-out.
        // TODO: always display all events, as visibility:hidden?
        eventInstanceHeights: Object.assign(Object.assign({}, s), o),
        maxContentHeight: a ? this.computeMaxContentHeight() : null
      });
    }
  }
  queryEventInstanceHeights() {
    let e = this.segHarnessRefs.currentMap, n = {};
    for (let r in e) {
      let i = Math.round(e[r].getBoundingClientRect().height), s = r.split(":")[0];
      n[s] = Math.max(n[s] || 0, i);
    }
    return n;
  }
  computeMaxContentHeight() {
    let e = this.props.cells[0].key, n = this.cellElRefs.currentMap[e], r = this.fgElRefs.currentMap[e];
    return n.getBoundingClientRect().bottom - r.getBoundingClientRect().top;
  }
  getCellEls() {
    let e = this.cellElRefs.currentMap;
    return this.props.cells.map((n) => e[n.key]);
  }
}
lh.addStateEquality({
  eventInstanceHeights: an
});
function g4(t, e) {
  if (!t.length)
    return [];
  let n = v4(e);
  return t.map((r) => ({
    seg: r,
    isVisible: !0,
    isAbsolute: !0,
    absoluteTop: n[r.eventRange.instance.instanceId],
    marginTop: 0
  }));
}
function v4(t) {
  let e = {};
  for (let n of t)
    for (let r of n)
      e[r.seg.eventRange.instance.instanceId] = r.absoluteTop;
  return e;
}
class m4 extends ln {
  constructor() {
    super(...arguments), this.splitBusinessHourSegs = Ce(Ai), this.splitBgEventSegs = Ce(Ai), this.splitFgEventSegs = Ce(Ai), this.splitDateSelectionSegs = Ce(Ai), this.splitEventDrag = Ce(Uu), this.splitEventResize = Ce(Uu), this.rowRefs = new bn();
  }
  render() {
    let { props: e, context: n } = this, r = e.cells.length, i = this.splitBusinessHourSegs(e.businessHourSegs, r), s = this.splitBgEventSegs(e.bgEventSegs, r), o = this.splitFgEventSegs(e.fgEventSegs, r), a = this.splitDateSelectionSegs(e.dateSelectionSegs, r), l = this.splitEventDrag(e.eventDrag, r), c = this.splitEventResize(e.eventResize, r), u = r >= 7 && e.clientWidth ? e.clientWidth / n.options.aspectRatio / 6 : null;
    return O(ai, { unit: "day" }, (h, d) => O(Ze, null, e.cells.map((f, g) => O(lh, {
      ref: this.rowRefs.createRef(g),
      key: f.length ? f[0].date.toISOString() : g,
      showDayNumbers: r > 1,
      showWeekNumbers: e.showWeekNumbers,
      todayRange: d,
      dateProfile: e.dateProfile,
      cells: f,
      renderIntro: e.renderRowIntro,
      businessHourSegs: i[g],
      eventSelection: e.eventSelection,
      bgEventSegs: s[g].filter(b4),
      fgEventSegs: o[g],
      dateSelectionSegs: a[g],
      eventDrag: l[g],
      eventResize: c[g],
      dayMaxEvents: e.dayMaxEvents,
      dayMaxEventRows: e.dayMaxEventRows,
      clientWidth: e.clientWidth,
      clientHeight: e.clientHeight,
      cellMinHeight: u,
      forPrint: e.forPrint
    }))));
  }
  componentDidMount() {
    const e = this.rowRefs.currentMap[0].getCellEls()[0];
    this.rootEl = e ? e.closest(".fc-daygrid-body") : null, this.rootEl && this.context.registerInteractiveComponent(this, {
      el: this.rootEl,
      isHitComboAllowed: this.props.isHitComboAllowed
    });
  }
  componentWillUnmount() {
    this.rootEl && (this.context.unregisterInteractiveComponent(this), this.rootEl = null);
  }
  // Hit System
  // ----------------------------------------------------------------------------------------------------
  prepareHits() {
    this.rowPositions = new Er(
      this.rootEl,
      this.rowRefs.collect().map((e) => e.getCellEls()[0]),
      // first cell el in each row. TODO: not optimal
      !1,
      !0
    ), this.colPositions = new Er(
      this.rootEl,
      this.rowRefs.currentMap[0].getCellEls(),
      // cell els in first row
      !0,
      // horizontal
      !1
    );
  }
  queryHit(e, n) {
    let { colPositions: r, rowPositions: i } = this, s = r.leftToIndex(e), o = i.topToIndex(n);
    if (o != null && s != null) {
      let a = this.props.cells[o][s];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: Object.assign({ range: this.getCellRange(o, s), allDay: !0 }, a.extraDateSpan),
        dayEl: this.getCellEl(o, s),
        rect: {
          left: r.lefts[s],
          right: r.rights[s],
          top: i.tops[o],
          bottom: i.bottoms[o]
        },
        layer: 0
      };
    }
    return null;
  }
  getCellEl(e, n) {
    return this.rowRefs.currentMap[e].getCellEls()[n];
  }
  getCellRange(e, n) {
    let r = this.props.cells[e][n].date, i = Ct(r, 1);
    return { start: r, end: i };
  }
}
function b4(t) {
  return t.eventRange.def.allDay;
}
class y4 extends ln {
  constructor() {
    super(...arguments), this.elRef = It(), this.needsScrollReset = !1;
  }
  render() {
    let { props: e } = this, { dayMaxEventRows: n, dayMaxEvents: r, expandRows: i } = e, s = r === !0 || n === !0;
    s && !i && (s = !1, n = null, r = null);
    let o = [
      "fc-daygrid-body",
      s ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
      i ? "" : "fc-daygrid-body-natural"
      // will height of one row depend on the others?
    ];
    return O(
      "div",
      { ref: this.elRef, className: o.join(" "), style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: e.clientWidth,
        minWidth: e.tableMinWidth
      } },
      O(
        "table",
        { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
          width: e.clientWidth,
          minWidth: e.tableMinWidth,
          height: i ? e.clientHeight : ""
        } },
        e.colGroupNode,
        O(
          "tbody",
          { role: "presentation" },
          O(m4, { dateProfile: e.dateProfile, cells: e.cells, renderRowIntro: e.renderRowIntro, showWeekNumbers: e.showWeekNumbers, clientWidth: e.clientWidth, clientHeight: e.clientHeight, businessHourSegs: e.businessHourSegs, bgEventSegs: e.bgEventSegs, fgEventSegs: e.fgEventSegs, dateSelectionSegs: e.dateSelectionSegs, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, dayMaxEvents: r, dayMaxEventRows: n, forPrint: e.forPrint, isHitComboAllowed: e.isHitComboAllowed })
        )
      )
    );
  }
  componentDidMount() {
    this.requestScrollReset();
  }
  componentDidUpdate(e) {
    e.dateProfile !== this.props.dateProfile ? this.requestScrollReset() : this.flushScrollReset();
  }
  requestScrollReset() {
    this.needsScrollReset = !0, this.flushScrollReset();
  }
  flushScrollReset() {
    if (this.needsScrollReset && this.props.clientWidth) {
      const e = x4(this.elRef.current, this.props.dateProfile);
      if (e) {
        const n = e.closest(".fc-daygrid-body"), r = n.closest(".fc-scroller"), i = e.getBoundingClientRect().top - n.getBoundingClientRect().top;
        r.scrollTop = i ? i + 1 : 0;
      }
      this.needsScrollReset = !1;
    }
  }
}
function x4(t, e) {
  let n;
  return e.currentRangeUnit.match(/year|month/) && (n = t.querySelector(`[data-date="${o3(e.currentDate)}-01"]`)), n || (n = t.querySelector(`[data-date="${nl(e.currentDate)}"]`)), n;
}
class _4 extends I0 {
  constructor() {
    super(...arguments), this.forceDayIfListItem = !0;
  }
  sliceRange(e, n) {
    return n.sliceRange(e);
  }
}
class ch extends ln {
  constructor() {
    super(...arguments), this.slicer = new _4(), this.tableRef = It();
  }
  render() {
    let { props: e, context: n } = this;
    return O(y4, Object.assign({ ref: this.tableRef }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, n, e.dayTableModel), { dateProfile: e.dateProfile, cells: e.dayTableModel.cells, colGroupNode: e.colGroupNode, tableMinWidth: e.tableMinWidth, renderRowIntro: e.renderRowIntro, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.showWeekNumbers, expandRows: e.expandRows, headerAlignElRef: e.headerAlignElRef, clientWidth: e.clientWidth, clientHeight: e.clientHeight, forPrint: e.forPrint }));
  }
}
class w4 extends d0 {
  // Computes the date range that will be rendered
  buildRenderRange(e, n, r) {
    let i = super.buildRenderRange(e, n, r), { props: s } = this;
    return S4({
      currentRange: i,
      snapToWeek: /^(year|month)$/.test(n),
      fixedWeekCount: s.fixedWeekCount,
      dateEnv: s.dateEnv
    });
  }
}
function S4(t) {
  let { dateEnv: e, currentRange: n } = t, { start: r, end: i } = n, s;
  if (t.snapToWeek && (r = e.startOfWeek(r), s = e.startOfWeek(i), s.valueOf() !== i.valueOf() && (i = vu(s, 1))), t.fixedWeekCount) {
    let o = e.startOfWeek(e.startOfMonth(Ct(n.end, -1))), a = Math.ceil(
      // could be partial weeks due to hiddenDays
      Qy(o, i)
    );
    i = vu(i, 6 - a);
  }
  return { start: r, end: i };
}
class E4 extends ln {
  constructor() {
    super(...arguments), this.headerElRef = It();
  }
  renderSimpleLayout(e, n) {
    let { props: r, context: i } = this, s = [], o = Us(i.options);
    return e && s.push({
      type: "header",
      key: "header",
      isSticky: o,
      chunk: {
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }
    }), s.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunk: { content: n }
    }), O(
      js,
      { elClasses: ["fc-daygrid"], viewSpec: i.viewSpec },
      O(xl, { liquid: !r.isHeightAuto && !r.forPrint, collapsibleWidth: r.forPrint, cols: [], sections: s })
    );
  }
  renderHScrollLayout(e, n, r, i) {
    let s = this.context.pluginHooks.scrollGridImpl;
    if (!s)
      throw new Error("No ScrollGrid implementation");
    let { props: o, context: a } = this, l = !o.forPrint && Us(a.options), c = !o.forPrint && $0(a.options), u = [];
    return e && u.push({
      type: "header",
      key: "header",
      isSticky: l,
      chunks: [{
        key: "main",
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }]
    }), u.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunks: [{
        key: "main",
        content: n
      }]
    }), c && u.push({
      type: "footer",
      key: "footer",
      isSticky: !0,
      chunks: [{
        key: "main",
        content: Ca
      }]
    }), O(
      js,
      { elClasses: ["fc-daygrid"], viewSpec: a.viewSpec },
      O(s, { liquid: !o.isHeightAuto && !o.forPrint, forPrint: o.forPrint, collapsibleWidth: o.forPrint, colGroups: [{ cols: [{ span: r, minWidth: i }] }], sections: u })
    );
  }
}
class C4 extends E4 {
  constructor() {
    super(...arguments), this.buildDayTableModel = Ce(k4), this.headerRef = It(), this.tableRef = It();
  }
  render() {
    let { options: e, dateProfileGenerator: n } = this.context, { props: r } = this, i = this.buildDayTableModel(r.dateProfile, n), s = e.dayHeaders && O(D0, { ref: this.headerRef, dateProfile: r.dateProfile, dates: i.headerDates, datesRepDistinctDays: i.rowCnt === 1 }), o = (a) => O(ch, { ref: this.tableRef, dateProfile: r.dateProfile, dayTableModel: i, businessHours: r.businessHours, dateSelection: r.dateSelection, eventStore: r.eventStore, eventUiBases: r.eventUiBases, eventSelection: r.eventSelection, eventDrag: r.eventDrag, eventResize: r.eventResize, nextDayThreshold: e.nextDayThreshold, colGroupNode: a.tableColGroupNode, tableMinWidth: a.tableMinWidth, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.weekNumbers, expandRows: !r.isHeightAuto, headerAlignElRef: this.headerElRef, clientWidth: a.clientWidth, clientHeight: a.clientHeight, forPrint: r.forPrint });
    return e.dayMinWidth ? this.renderHScrollLayout(s, o, i.colCnt, e.dayMinWidth) : this.renderSimpleLayout(s, o);
  }
}
function k4(t, e) {
  let n = new T0(t.renderRange, e);
  return new R0(n, /year|month|week/.test(t.currentRangeUnit));
}
var uh = Sn({
  name: "@fullcalendar/daygrid",
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: C4,
      dateProfileGeneratorClass: w4
    },
    dayGridDay: {
      type: "dayGrid",
      duration: { days: 1 }
    },
    dayGridWeek: {
      type: "dayGrid",
      duration: { weeks: 1 }
    },
    dayGridMonth: {
      type: "dayGrid",
      duration: { months: 1 },
      fixedWeekCount: !0
    },
    dayGridYear: {
      type: "dayGrid",
      duration: { years: 1 }
    }
  }
}), A4 = '.fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:"\\00a0"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:"\\00a0-\\00a0"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}';
Qa(A4);
class D4 extends V3 {
  getKeyInfo() {
    return {
      allDay: {},
      timed: {}
    };
  }
  getKeysForDateSpan(e) {
    return e.allDay ? ["allDay"] : ["timed"];
  }
  getKeysForEventDef(e) {
    return e.allDay ? b2(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"];
  }
}
const T4 = et({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "short"
});
function dh(t) {
  let e = [
    "fc-timegrid-slot",
    "fc-timegrid-slot-label",
    t.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"
  ];
  return O(wn.Consumer, null, (n) => {
    if (!t.isLabeled)
      return O("td", { className: e.join(" "), "data-time": t.isoTimeStr });
    let { dateEnv: r, options: i, viewApi: s } = n, o = (
      // TODO: fully pre-parse
      i.slotLabelFormat == null ? T4 : Array.isArray(i.slotLabelFormat) ? et(i.slotLabelFormat[0]) : et(i.slotLabelFormat)
    ), a = {
      level: 0,
      time: t.time,
      date: r.toDate(t.date),
      view: s,
      text: r.format(t.date, o)
    };
    return O(Ht, { elTag: "td", elClasses: e, elAttrs: {
      "data-time": t.isoTimeStr
    }, renderProps: a, generatorName: "slotLabelContent", customGenerator: i.slotLabelContent, defaultGenerator: R4, classNameGenerator: i.slotLabelClassNames, didMount: i.slotLabelDidMount, willUnmount: i.slotLabelWillUnmount }, (l) => O(
      "div",
      { className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame" },
      O(l, { elTag: "div", elClasses: [
        "fc-timegrid-slot-label-cushion",
        "fc-scrollgrid-shrink-cushion"
      ] })
    ));
  });
}
function R4(t) {
  return t.text;
}
class I4 extends Ue {
  render() {
    return this.props.slatMetas.map((e) => O(
      "tr",
      { key: e.key },
      O(dh, Object.assign({}, e))
    ));
  }
}
const M4 = et({ week: "short" }), O4 = 5;
class N4 extends ln {
  constructor() {
    super(...arguments), this.allDaySplitter = new D4(), this.headerElRef = It(), this.rootElRef = It(), this.scrollerElRef = It(), this.state = {
      slatCoords: null
    }, this.handleScrollTopRequest = (e) => {
      let n = this.scrollerElRef.current;
      n && (n.scrollTop = e);
    }, this.renderHeadAxis = (e, n = "") => {
      let { options: r } = this.context, { dateProfile: i } = this.props, s = i.renderRange, a = sr(s.start, s.end) === 1 ? zs(this.context, s.start, "week") : {};
      return r.weekNumbers && e === "day" ? O(V0, { elTag: "th", elClasses: [
        "fc-timegrid-axis",
        "fc-scrollgrid-shrink"
      ], elAttrs: {
        "aria-hidden": !0
      }, date: s.start, defaultFormat: M4 }, (l) => O(
        "div",
        { className: [
          "fc-timegrid-axis-frame",
          "fc-scrollgrid-shrink-frame",
          "fc-timegrid-axis-frame-liquid"
        ].join(" "), style: { height: n } },
        O(l, { elTag: "a", elClasses: [
          "fc-timegrid-axis-cushion",
          "fc-scrollgrid-shrink-cushion",
          "fc-scrollgrid-sync-inner"
        ], elAttrs: a })
      )) : O(
        "th",
        { "aria-hidden": !0, className: "fc-timegrid-axis" },
        O("div", { className: "fc-timegrid-axis-frame", style: { height: n } })
      );
    }, this.renderTableRowAxis = (e) => {
      let { options: n, viewApi: r } = this.context, i = {
        text: n.allDayText,
        view: r
      };
      return (
        // TODO: make reusable hook. used in list view too
        O(Ht, { elTag: "td", elClasses: [
          "fc-timegrid-axis",
          "fc-scrollgrid-shrink"
        ], elAttrs: {
          "aria-hidden": !0
        }, renderProps: i, generatorName: "allDayContent", customGenerator: n.allDayContent, defaultGenerator: B4, classNameGenerator: n.allDayClassNames, didMount: n.allDayDidMount, willUnmount: n.allDayWillUnmount }, (s) => O(
          "div",
          { className: [
            "fc-timegrid-axis-frame",
            "fc-scrollgrid-shrink-frame",
            e == null ? " fc-timegrid-axis-frame-liquid" : ""
          ].join(" "), style: { height: e } },
          O(s, { elTag: "span", elClasses: [
            "fc-timegrid-axis-cushion",
            "fc-scrollgrid-shrink-cushion",
            "fc-scrollgrid-sync-inner"
          ] })
        ))
      );
    }, this.handleSlatCoords = (e) => {
      this.setState({ slatCoords: e });
    };
  }
  // rendering
  // ----------------------------------------------------------------------------------------------------
  renderSimpleLayout(e, n, r) {
    let { context: i, props: s } = this, o = [], a = Us(i.options);
    return e && o.push({
      type: "header",
      key: "header",
      isSticky: a,
      chunk: {
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }
    }), n && (o.push({
      type: "body",
      key: "all-day",
      chunk: { content: n }
    }), o.push({
      type: "body",
      key: "all-day-divider",
      outerContent: (
        // TODO: rename to cellContent so don't need to define <tr>?
        O(
          "tr",
          { role: "presentation", className: "fc-scrollgrid-section" },
          O("td", { className: "fc-timegrid-divider " + i.theme.getClass("tableCellShaded") })
        )
      )
    })), o.push({
      type: "body",
      key: "body",
      liquid: !0,
      expandRows: !!i.options.expandRows,
      chunk: {
        scrollerElRef: this.scrollerElRef,
        content: r
      }
    }), O(
      js,
      { elRef: this.rootElRef, elClasses: ["fc-timegrid"], viewSpec: i.viewSpec },
      O(xl, { liquid: !s.isHeightAuto && !s.forPrint, collapsibleWidth: s.forPrint, cols: [{ width: "shrink" }], sections: o })
    );
  }
  renderHScrollLayout(e, n, r, i, s, o, a) {
    let l = this.context.pluginHooks.scrollGridImpl;
    if (!l)
      throw new Error("No ScrollGrid implementation");
    let { context: c, props: u } = this, h = !u.forPrint && Us(c.options), d = !u.forPrint && $0(c.options), f = [];
    e && f.push({
      type: "header",
      key: "header",
      isSticky: h,
      syncRowHeights: !0,
      chunks: [
        {
          key: "axis",
          rowContent: (p) => O("tr", { role: "presentation" }, this.renderHeadAxis("day", p.rowSyncHeights[0]))
        },
        {
          key: "cols",
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: e
        }
      ]
    }), n && (f.push({
      type: "body",
      key: "all-day",
      syncRowHeights: !0,
      chunks: [
        {
          key: "axis",
          rowContent: (p) => O("tr", { role: "presentation" }, this.renderTableRowAxis(p.rowSyncHeights[0]))
        },
        {
          key: "cols",
          content: n
        }
      ]
    }), f.push({
      key: "all-day-divider",
      type: "body",
      outerContent: (
        // TODO: rename to cellContent so don't need to define <tr>?
        O(
          "tr",
          { role: "presentation", className: "fc-scrollgrid-section" },
          O("td", { colSpan: 2, className: "fc-timegrid-divider " + c.theme.getClass("tableCellShaded") })
        )
      )
    }));
    let g = c.options.nowIndicator;
    return f.push({
      type: "body",
      key: "body",
      liquid: !0,
      expandRows: !!c.options.expandRows,
      chunks: [
        {
          key: "axis",
          content: (p) => (
            // TODO: make this now-indicator arrow more DRY with TimeColsContent
            O(
              "div",
              { className: "fc-timegrid-axis-chunk" },
              O(
                "table",
                { "aria-hidden": !0, style: { height: p.expandRows ? p.clientHeight : "" } },
                p.tableColGroupNode,
                O(
                  "tbody",
                  null,
                  O(I4, { slatMetas: o })
                )
              ),
              O(
                "div",
                { className: "fc-timegrid-now-indicator-container" },
                O(ai, {
                  unit: g ? "minute" : "day"
                  /* hacky */
                }, (v) => {
                  let m = g && a && a.safeComputeTop(v);
                  return typeof m == "number" ? O(wl, { elClasses: ["fc-timegrid-now-indicator-arrow"], elStyle: { top: m }, isAxis: !0, date: v }) : null;
                })
              )
            )
          )
        },
        {
          key: "cols",
          scrollerElRef: this.scrollerElRef,
          content: r
        }
      ]
    }), d && f.push({
      key: "footer",
      type: "footer",
      isSticky: !0,
      chunks: [
        {
          key: "axis",
          content: Ca
        },
        {
          key: "cols",
          content: Ca
        }
      ]
    }), O(
      js,
      { elRef: this.rootElRef, elClasses: ["fc-timegrid"], viewSpec: c.viewSpec },
      O(l, { liquid: !u.isHeightAuto && !u.forPrint, forPrint: u.forPrint, collapsibleWidth: !1, colGroups: [
        { width: "shrink", cols: [{ width: "shrink" }] },
        { cols: [{ span: i, minWidth: s }] }
      ], sections: f })
    );
  }
  /* Dimensions
  ------------------------------------------------------------------------------------------------------------------*/
  getAllDayMaxEventProps() {
    let { dayMaxEvents: e, dayMaxEventRows: n } = this.context.options;
    return (e === !0 || n === !0) && (e = void 0, n = O4), { dayMaxEvents: e, dayMaxEventRows: n };
  }
}
function B4(t) {
  return t.text;
}
class L4 {
  constructor(e, n, r) {
    this.positions = e, this.dateProfile = n, this.slotDuration = r;
  }
  safeComputeTop(e) {
    let { dateProfile: n } = this;
    if (yn(n.currentRange, e)) {
      let r = Qe(e), i = e.valueOf() - r.valueOf();
      if (i >= Qt(n.slotMinTime) && i < Qt(n.slotMaxTime))
        return this.computeTimeTop(Pe(i));
    }
    return null;
  }
  // Computes the top coordinate, relative to the bounds of the grid, of the given date.
  // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
  computeDateTop(e, n) {
    return n || (n = Qe(e)), this.computeTimeTop(Pe(e.valueOf() - n.valueOf()));
  }
  // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
  // This is a makeshify way to compute the time-top. Assumes all slatMetas dates are uniform.
  // Eventually allow computation with arbirary slat dates.
  computeTimeTop(e) {
    let { positions: n, dateProfile: r } = this, i = n.els.length, s = (e.milliseconds - Qt(r.slotMinTime)) / Qt(this.slotDuration), o, a;
    return s = Math.max(0, s), s = Math.min(i, s), o = Math.floor(s), o = Math.min(o, i - 1), a = s - o, n.tops[o] + n.getHeight(o) * a;
  }
}
class P4 extends Ue {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { slatElRefs: i } = e;
    return O("tbody", null, e.slatMetas.map((s, o) => {
      let a = {
        time: s.time,
        date: n.dateEnv.toDate(s.date),
        view: n.viewApi
      };
      return O(
        "tr",
        { key: s.key, ref: i.createRef(s.key) },
        e.axis && O(dh, Object.assign({}, s)),
        O(Ht, { elTag: "td", elClasses: [
          "fc-timegrid-slot",
          "fc-timegrid-slot-lane",
          !s.isLabeled && "fc-timegrid-slot-minor"
        ], elAttrs: {
          "data-time": s.isoTimeStr
        }, renderProps: a, generatorName: "slotLaneContent", customGenerator: r.slotLaneContent, classNameGenerator: r.slotLaneClassNames, didMount: r.slotLaneDidMount, willUnmount: r.slotLaneWillUnmount })
      );
    }));
  }
}
class $4 extends Ue {
  constructor() {
    super(...arguments), this.rootElRef = It(), this.slatElRefs = new bn();
  }
  render() {
    let { props: e, context: n } = this;
    return O(
      "div",
      { ref: this.rootElRef, className: "fc-timegrid-slots" },
      O(
        "table",
        { "aria-hidden": !0, className: n.theme.getClass("table"), style: {
          minWidth: e.tableMinWidth,
          width: e.clientWidth,
          height: e.minHeight
        } },
        e.tableColGroupNode,
        O(P4, { slatElRefs: this.slatElRefs, axis: e.axis, slatMetas: e.slatMetas })
      )
    );
  }
  componentDidMount() {
    this.updateSizing();
  }
  componentDidUpdate() {
    this.updateSizing();
  }
  componentWillUnmount() {
    this.props.onCoords && this.props.onCoords(null);
  }
  updateSizing() {
    let { context: e, props: n } = this;
    n.onCoords && n.clientWidth !== null && this.rootElRef.current.offsetHeight && n.onCoords(new L4(new Er(this.rootElRef.current, H4(this.slatElRefs.currentMap, n.slatMetas), !1, !0), this.props.dateProfile, e.options.slotDuration));
  }
}
function H4(t, e) {
  return e.map((n) => t[n.key]);
}
function Lr(t, e) {
  let n = [], r;
  for (r = 0; r < e; r += 1)
    n.push([]);
  if (t)
    for (r = 0; r < t.length; r += 1)
      n[t[r].col].push(t[r]);
  return n;
}
function ju(t, e) {
  let n = [];
  if (t) {
    for (let r = 0; r < e; r += 1)
      n[r] = {
        affectedInstances: t.affectedInstances,
        isEvent: t.isEvent,
        segs: []
      };
    for (let r of t.segs)
      n[r.col].segs.push(r);
  } else
    for (let r = 0; r < e; r += 1)
      n[r] = null;
  return n;
}
class F4 extends Ue {
  render() {
    let { props: e } = this;
    return O(U0, { elClasses: ["fc-timegrid-more-link"], elStyle: {
      top: e.top,
      bottom: e.bottom
    }, allDayDate: null, moreCnt: e.hiddenSegs.length, allSegs: e.hiddenSegs, hiddenSegs: e.hiddenSegs, extraDateSpan: e.extraDateSpan, dateProfile: e.dateProfile, todayRange: e.todayRange, popoverContent: () => hh(e.hiddenSegs, e), defaultGenerator: z4, forceTimed: !0 }, (n) => O(n, { elTag: "div", elClasses: ["fc-timegrid-more-link-inner", "fc-sticky"] }));
  }
}
function z4(t) {
  return t.shortText;
}
function V4(t, e, n) {
  let r = new w0();
  e != null && (r.strictOrder = e), n != null && (r.maxStackCnt = n);
  let i = r.addSegs(t), s = P2(i), o = U4(r);
  return o = Y4(o, 1), { segRects: G4(o), hiddenGroups: s };
}
function U4(t) {
  const { entriesByLevel: e } = t, n = kl((r, i) => r + ":" + i, (r, i) => {
    let s = q4(t, r, i), o = Wu(s, n), a = e[r][i];
    return [
      Object.assign(Object.assign({}, a), { nextLevelNodes: o[0] }),
      a.thickness + o[1]
      // the pressure builds
    ];
  });
  return Wu(e.length ? { level: 0, lateralStart: 0, lateralEnd: e[0].length } : null, n)[0];
}
function Wu(t, e) {
  if (!t)
    return [[], 0];
  let { level: n, lateralStart: r, lateralEnd: i } = t, s = r, o = [];
  for (; s < i; )
    o.push(e(n, s)), s += 1;
  return o.sort(j4), [
    o.map(W4),
    o[0][1]
    // first item's pressure
  ];
}
function j4(t, e) {
  return e[1] - t[1];
}
function W4(t) {
  return t[0];
}
function q4(t, e, n) {
  let { levelCoords: r, entriesByLevel: i } = t, s = i[e][n], o = r[e] + s.thickness, a = r.length, l = e;
  for (; l < a && r[l] < o; l += 1)
    ;
  for (; l < a; l += 1) {
    let c = i[l], u, h = Sa(c, s.span.start, wa), d = h[0] + h[1], f = d;
    for (
      ;
      // loop through entries that horizontally intersect
      (u = c[f]) && // but not past the whole seg list
      u.span.start < s.span.end;
    )
      f += 1;
    if (d < f)
      return { level: l, lateralStart: d, lateralEnd: f };
  }
  return null;
}
function Y4(t, e) {
  const n = kl((r, i, s) => Qn(r), (r, i, s) => {
    let { nextLevelNodes: o, thickness: a } = r, l = a + s, c = a / l, u, h = [];
    if (!o.length)
      u = e;
    else
      for (let f of o)
        if (u === void 0) {
          let g = n(f, i, l);
          u = g[0], h.push(g[1]);
        } else {
          let g = n(f, u, 0);
          h.push(g[1]);
        }
    let d = (u - i) * c;
    return [u - d, Object.assign(Object.assign({}, r), { thickness: d, nextLevelNodes: h })];
  });
  return t.map((r) => n(r, 0, 0)[1]);
}
function G4(t) {
  let e = [];
  const n = kl((i, s, o) => Qn(i), (i, s, o) => {
    let a = Object.assign(Object.assign({}, i), {
      levelCoord: s,
      stackDepth: o,
      stackForward: 0
    });
    return e.push(a), a.stackForward = r(i.nextLevelNodes, s + i.thickness, o + 1) + 1;
  });
  function r(i, s, o) {
    let a = 0;
    for (let l of i)
      a = Math.max(n(l, s, o), a);
    return a;
  }
  return r(t, 0, 0), e;
}
function kl(t, e) {
  const n = {};
  return (...r) => {
    let i = t(...r);
    return i in n ? n[i] : n[i] = e(...r);
  };
}
function qu(t, e, n = null, r = 0) {
  let i = [];
  if (n)
    for (let s = 0; s < t.length; s += 1) {
      let o = t[s], a = n.computeDateTop(o.start, e), l = Math.max(
        a + (r || 0),
        // :(
        n.computeDateTop(o.end, e)
      );
      i.push({
        start: Math.round(a),
        end: Math.round(l)
        //
      });
    }
  return i;
}
function Q4(t, e, n, r) {
  let i = [], s = [];
  for (let c = 0; c < t.length; c += 1) {
    let u = e[c];
    u ? i.push({
      index: c,
      thickness: 1,
      span: u
    }) : s.push(t[c]);
  }
  let { segRects: o, hiddenGroups: a } = V4(i, n, r), l = [];
  for (let c of o)
    l.push({
      seg: t[c.index],
      rect: c
    });
  for (let c of s)
    l.push({ seg: c, rect: null });
  return { segPlacements: l, hiddenGroups: a };
}
const Z4 = et({
  hour: "numeric",
  minute: "2-digit",
  meridiem: !1
});
class fh extends Ue {
  render() {
    return O(H0, Object.assign({}, this.props, { elClasses: [
      "fc-timegrid-event",
      "fc-v-event",
      this.props.isShort && "fc-timegrid-event-short"
    ], defaultTimeFormat: Z4 }));
  }
}
class K4 extends Ue {
  constructor() {
    super(...arguments), this.sortEventSegs = Ce(g0);
  }
  // TODO: memoize event-placement?
  render() {
    let { props: e, context: n } = this, { options: r } = n, i = r.selectMirror, s = (
      // yuck
      e.eventDrag && e.eventDrag.segs || e.eventResize && e.eventResize.segs || i && e.dateSelectionSegs || []
    ), o = (
      // TODO: messy way to compute this
      e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}
    ), a = this.sortEventSegs(e.fgEventSegs, r.eventOrder);
    return O(Sl, { elTag: "td", elRef: e.elRef, elClasses: [
      "fc-timegrid-col",
      ...e.extraClassNames || []
    ], elAttrs: Object.assign({ role: "gridcell" }, e.extraDataAttrs), date: e.date, dateProfile: e.dateProfile, todayRange: e.todayRange, extraRenderProps: e.extraRenderProps }, (l) => O(
      "div",
      { className: "fc-timegrid-col-frame" },
      O(
        "div",
        { className: "fc-timegrid-col-bg" },
        this.renderFillSegs(e.businessHourSegs, "non-business"),
        this.renderFillSegs(e.bgEventSegs, "bg-event"),
        this.renderFillSegs(e.dateSelectionSegs, "highlight")
      ),
      O("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(a, o, !1, !1, !1)),
      O("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(s, {}, !!e.eventDrag, !!e.eventResize, !!i, "mirror")),
      O("div", { className: "fc-timegrid-now-indicator-container" }, this.renderNowIndicator(e.nowIndicatorSegs)),
      El(r) && O(l, { elTag: "div", elClasses: ["fc-timegrid-col-misc"] })
    ));
  }
  renderFgSegs(e, n, r, i, s, o) {
    let { props: a } = this;
    return a.forPrint ? hh(e, a) : this.renderPositionedFgSegs(e, n, r, i, s, o);
  }
  renderPositionedFgSegs(e, n, r, i, s, o) {
    let { eventMaxStack: a, eventShortHeight: l, eventOrderStrict: c, eventMinHeight: u } = this.context.options, { date: h, slatCoords: d, eventSelection: f, todayRange: g, nowDate: p } = this.props, v = r || i || s, m = qu(e, h, d, u), { segPlacements: x, hiddenGroups: b } = Q4(e, m, c, a);
    return O(
      Ze,
      null,
      this.renderHiddenGroups(b, e),
      x.map((_) => {
        let { seg: w, rect: S } = _, y = w.eventRange.instance.instanceId, E = v || !!(!n[y] && S), I = Yo(S && S.span), A = !v && S ? this.computeSegHStyle(S) : { left: 0, right: 0 }, k = !!S && S.stackForward > 0, R = !!S && S.span.end - S.span.start < l;
        return O(
          "div",
          { className: "fc-timegrid-event-harness" + (k ? " fc-timegrid-event-harness-inset" : ""), key: o || y, style: Object.assign(Object.assign({ visibility: E ? "" : "hidden" }, I), A) },
          O(fh, Object.assign({ seg: w, isDragging: r, isResizing: i, isDateSelecting: s, isSelected: y === f, isShort: R }, Rn(w, g, p)))
        );
      })
    );
  }
  // will already have eventMinHeight applied because segInputs already had it
  renderHiddenGroups(e, n) {
    let { extraDateSpan: r, dateProfile: i, todayRange: s, nowDate: o, eventSelection: a, eventDrag: l, eventResize: c } = this.props;
    return O(Ze, null, e.map((u) => {
      let h = Yo(u.span), d = X4(u.entries, n);
      return O(F4, { key: Xf(j0(d)), hiddenSegs: d, top: h.top, bottom: h.bottom, extraDateSpan: r, dateProfile: i, todayRange: s, nowDate: o, eventSelection: a, eventDrag: l, eventResize: c });
    }));
  }
  renderFillSegs(e, n) {
    let { props: r, context: i } = this, o = qu(e, r.date, r.slatCoords, i.options.eventMinHeight).map((a, l) => {
      let c = e[l];
      return O("div", { key: m0(c.eventRange), className: "fc-timegrid-bg-harness", style: Yo(a) }, n === "bg-event" ? O(F0, Object.assign({ seg: c }, Rn(c, r.todayRange, r.nowDate))) : z0(n));
    });
    return O(Ze, null, o);
  }
  renderNowIndicator(e) {
    let { slatCoords: n, date: r } = this.props;
    return n ? e.map((i, s) => O(
      wl,
      {
        // key doesn't matter. will only ever be one
        key: s,
        elClasses: ["fc-timegrid-now-indicator-line"],
        elStyle: {
          top: n.computeDateTop(i.start, r)
        },
        isAxis: !1,
        date: r
      }
    )) : null;
  }
  computeSegHStyle(e) {
    let { isRtl: n, options: r } = this.context, i = r.slotEventOverlap, s = e.levelCoord, o = e.levelCoord + e.thickness, a, l;
    i && (o = Math.min(1, s + (o - s) * 2)), n ? (a = 1 - o, l = s) : (a = s, l = 1 - o);
    let c = {
      zIndex: e.stackDepth + 1,
      left: a * 100 + "%",
      right: l * 100 + "%"
    };
    return i && !e.stackForward && (c[n ? "marginLeft" : "marginRight"] = 10 * 2), c;
  }
}
function hh(t, { todayRange: e, nowDate: n, eventSelection: r, eventDrag: i, eventResize: s }) {
  let o = (i ? i.affectedInstances : null) || (s ? s.affectedInstances : null) || {};
  return O(Ze, null, t.map((a) => {
    let l = a.eventRange.instance.instanceId;
    return O(
      "div",
      { key: l, style: { visibility: o[l] ? "hidden" : "" } },
      O(fh, Object.assign({ seg: a, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: l === r, isShort: !1 }, Rn(a, e, n)))
    );
  }));
}
function Yo(t) {
  return t ? {
    top: t.start,
    bottom: -t.end
  } : { top: "", bottom: "" };
}
function X4(t, e) {
  return t.map((n) => e[n.index]);
}
class J4 extends Ue {
  constructor() {
    super(...arguments), this.splitFgEventSegs = Ce(Lr), this.splitBgEventSegs = Ce(Lr), this.splitBusinessHourSegs = Ce(Lr), this.splitNowIndicatorSegs = Ce(Lr), this.splitDateSelectionSegs = Ce(Lr), this.splitEventDrag = Ce(ju), this.splitEventResize = Ce(ju), this.rootElRef = It(), this.cellElRefs = new bn();
  }
  render() {
    let { props: e, context: n } = this, r = n.options.nowIndicator && e.slatCoords && e.slatCoords.safeComputeTop(e.nowDate), i = e.cells.length, s = this.splitFgEventSegs(e.fgEventSegs, i), o = this.splitBgEventSegs(e.bgEventSegs, i), a = this.splitBusinessHourSegs(e.businessHourSegs, i), l = this.splitNowIndicatorSegs(e.nowIndicatorSegs, i), c = this.splitDateSelectionSegs(e.dateSelectionSegs, i), u = this.splitEventDrag(e.eventDrag, i), h = this.splitEventResize(e.eventResize, i);
    return O(
      "div",
      { className: "fc-timegrid-cols", ref: this.rootElRef },
      O(
        "table",
        { role: "presentation", style: {
          minWidth: e.tableMinWidth,
          width: e.clientWidth
        } },
        e.tableColGroupNode,
        O(
          "tbody",
          { role: "presentation" },
          O(
            "tr",
            { role: "row" },
            e.axis && O(
              "td",
              { "aria-hidden": !0, className: "fc-timegrid-col fc-timegrid-axis" },
              O(
                "div",
                { className: "fc-timegrid-col-frame" },
                O("div", { className: "fc-timegrid-now-indicator-container" }, typeof r == "number" && O(wl, { elClasses: ["fc-timegrid-now-indicator-arrow"], elStyle: { top: r }, isAxis: !0, date: e.nowDate }))
              )
            ),
            e.cells.map((d, f) => O(K4, { key: d.key, elRef: this.cellElRefs.createRef(d.key), dateProfile: e.dateProfile, date: d.date, nowDate: e.nowDate, todayRange: e.todayRange, extraRenderProps: d.extraRenderProps, extraDataAttrs: d.extraDataAttrs, extraClassNames: d.extraClassNames, extraDateSpan: d.extraDateSpan, fgEventSegs: s[f], bgEventSegs: o[f], businessHourSegs: a[f], nowIndicatorSegs: l[f], dateSelectionSegs: c[f], eventDrag: u[f], eventResize: h[f], slatCoords: e.slatCoords, eventSelection: e.eventSelection, forPrint: e.forPrint }))
          )
        )
      )
    );
  }
  componentDidMount() {
    this.updateCoords();
  }
  componentDidUpdate() {
    this.updateCoords();
  }
  updateCoords() {
    let { props: e } = this;
    e.onColCoords && e.clientWidth !== null && e.onColCoords(new Er(
      this.rootElRef.current,
      e_(this.cellElRefs.currentMap, e.cells),
      !0,
      // horizontal
      !1
    ));
  }
}
function e_(t, e) {
  return e.map((n) => t[n.key]);
}
class t_ extends ln {
  constructor() {
    super(...arguments), this.processSlotOptions = Ce(n_), this.state = {
      slatCoords: null
    }, this.handleRootEl = (e) => {
      e ? this.context.registerInteractiveComponent(this, {
        el: e,
        isHitComboAllowed: this.props.isHitComboAllowed
      }) : this.context.unregisterInteractiveComponent(this);
    }, this.handleScrollRequest = (e) => {
      let { onScrollTopRequest: n } = this.props, { slatCoords: r } = this.state;
      if (n && r) {
        if (e.time) {
          let i = r.computeTimeTop(e.time);
          i = Math.ceil(i), i && (i += 1), n(i);
        }
        return !0;
      }
      return !1;
    }, this.handleColCoords = (e) => {
      this.colCoords = e;
    }, this.handleSlatCoords = (e) => {
      this.setState({ slatCoords: e }), this.props.onSlatCoords && this.props.onSlatCoords(e);
    };
  }
  render() {
    let { props: e, state: n } = this;
    return O(
      "div",
      { className: "fc-timegrid-body", ref: this.handleRootEl, style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: e.clientWidth,
        minWidth: e.tableMinWidth
      } },
      O($4, { axis: e.axis, dateProfile: e.dateProfile, slatMetas: e.slatMetas, clientWidth: e.clientWidth, minHeight: e.expandRows ? e.clientHeight : "", tableMinWidth: e.tableMinWidth, tableColGroupNode: e.axis ? e.tableColGroupNode : null, onCoords: this.handleSlatCoords }),
      O(J4, { cells: e.cells, axis: e.axis, dateProfile: e.dateProfile, businessHourSegs: e.businessHourSegs, bgEventSegs: e.bgEventSegs, fgEventSegs: e.fgEventSegs, dateSelectionSegs: e.dateSelectionSegs, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, todayRange: e.todayRange, nowDate: e.nowDate, nowIndicatorSegs: e.nowIndicatorSegs, clientWidth: e.clientWidth, tableMinWidth: e.tableMinWidth, tableColGroupNode: e.tableColGroupNode, slatCoords: n.slatCoords, onColCoords: this.handleColCoords, forPrint: e.forPrint })
    );
  }
  componentDidMount() {
    this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
  }
  componentDidUpdate(e) {
    this.scrollResponder.update(e.dateProfile !== this.props.dateProfile);
  }
  componentWillUnmount() {
    this.scrollResponder.detach();
  }
  queryHit(e, n) {
    let { dateEnv: r, options: i } = this.context, { colCoords: s } = this, { dateProfile: o } = this.props, { slatCoords: a } = this.state, { snapDuration: l, snapsPerSlot: c } = this.processSlotOptions(this.props.slotDuration, i.snapDuration), u = s.leftToIndex(e), h = a.positions.topToIndex(n);
    if (u != null && h != null) {
      let d = this.props.cells[u], f = a.positions.tops[h], g = a.positions.getHeight(h), p = (n - f) / g, v = Math.floor(p * c), m = h * c + v, x = this.props.cells[u].date, b = ma(o.slotMinTime, zy(l, m)), _ = r.add(x, b), w = r.add(_, l);
      return {
        dateProfile: o,
        dateSpan: Object.assign({ range: { start: _, end: w }, allDay: !1 }, d.extraDateSpan),
        dayEl: s.els[u],
        rect: {
          left: s.lefts[u],
          right: s.rights[u],
          top: f,
          bottom: f + g
        },
        layer: 0
      };
    }
    return null;
  }
}
function n_(t, e) {
  let n = e || t, r = Ja(t, n);
  return r === null && (n = t, r = 1), { snapDuration: n, snapsPerSlot: r };
}
class r_ extends I0 {
  sliceRange(e, n) {
    let r = [];
    for (let i = 0; i < n.length; i += 1) {
      let s = Jn(e, n[i]);
      s && r.push({
        start: s.start,
        end: s.end,
        isStart: s.start.valueOf() === e.start.valueOf(),
        isEnd: s.end.valueOf() === e.end.valueOf(),
        col: i
      });
    }
    return r;
  }
}
class i_ extends ln {
  constructor() {
    super(...arguments), this.buildDayRanges = Ce(s_), this.slicer = new r_(), this.timeColsRef = It();
  }
  render() {
    let { props: e, context: n } = this, { dateProfile: r, dayTableModel: i } = e, { nowIndicator: s, nextDayThreshold: o } = n.options, a = this.buildDayRanges(i, r, n.dateEnv);
    return O(ai, { unit: s ? "minute" : "day" }, (l, c) => O(t_, Object.assign({ ref: this.timeColsRef }, this.slicer.sliceProps(e, r, null, n, a), { forPrint: e.forPrint, axis: e.axis, dateProfile: r, slatMetas: e.slatMetas, slotDuration: e.slotDuration, cells: i.cells[0], tableColGroupNode: e.tableColGroupNode, tableMinWidth: e.tableMinWidth, clientWidth: e.clientWidth, clientHeight: e.clientHeight, expandRows: e.expandRows, nowDate: l, nowIndicatorSegs: s && this.slicer.sliceNowDate(l, r, o, n, a), todayRange: c, onScrollTopRequest: e.onScrollTopRequest, onSlatCoords: e.onSlatCoords })));
  }
}
function s_(t, e, n) {
  let r = [];
  for (let i of t.headerDates)
    r.push({
      start: n.add(i, e.slotMinTime),
      end: n.add(i, e.slotMaxTime)
    });
  return r;
}
const Yu = [
  { hours: 1 },
  { minutes: 30 },
  { minutes: 15 },
  { seconds: 30 },
  { seconds: 15 }
];
function o_(t, e, n, r, i) {
  let s = /* @__PURE__ */ new Date(0), o = t, a = Pe(0), l = n || a_(r), c = [];
  for (; Qt(o) < Qt(e); ) {
    let u = i.add(s, o), h = Ja(a, l) !== null;
    c.push({
      date: u,
      time: o,
      key: u.toISOString(),
      isoTimeStr: a3(u),
      isLabeled: h
    }), o = ma(o, r), a = ma(a, r);
  }
  return c;
}
function a_(t) {
  let e, n, r;
  for (e = Yu.length - 1; e >= 0; e -= 1)
    if (n = Pe(Yu[e]), r = Ja(n, t), r !== null && r > 1)
      return n;
  return t;
}
class l_ extends N4 {
  constructor() {
    super(...arguments), this.buildTimeColsModel = Ce(c_), this.buildSlatMetas = Ce(o_);
  }
  render() {
    let { options: e, dateEnv: n, dateProfileGenerator: r } = this.context, { props: i } = this, { dateProfile: s } = i, o = this.buildTimeColsModel(s, r), a = this.allDaySplitter.splitProps(i), l = this.buildSlatMetas(s.slotMinTime, s.slotMaxTime, e.slotLabelInterval, e.slotDuration, n), { dayMinWidth: c } = e, u = !c, h = c, d = e.dayHeaders && O(D0, { dates: o.headerDates, dateProfile: s, datesRepDistinctDays: !0, renderIntro: u ? this.renderHeadAxis : null }), f = e.allDaySlot !== !1 && ((p) => O(ch, Object.assign({}, a.allDay, { dateProfile: s, dayTableModel: o, nextDayThreshold: e.nextDayThreshold, tableMinWidth: p.tableMinWidth, colGroupNode: p.tableColGroupNode, renderRowIntro: u ? this.renderTableRowAxis : null, showWeekNumbers: !1, expandRows: !1, headerAlignElRef: this.headerElRef, clientWidth: p.clientWidth, clientHeight: p.clientHeight, forPrint: i.forPrint }, this.getAllDayMaxEventProps()))), g = (p) => O(i_, Object.assign({}, a.timed, { dayTableModel: o, dateProfile: s, axis: u, slotDuration: e.slotDuration, slatMetas: l, forPrint: i.forPrint, tableColGroupNode: p.tableColGroupNode, tableMinWidth: p.tableMinWidth, clientWidth: p.clientWidth, clientHeight: p.clientHeight, onSlatCoords: this.handleSlatCoords, expandRows: p.expandRows, onScrollTopRequest: this.handleScrollTopRequest }));
    return h ? this.renderHScrollLayout(d, f, g, o.colCnt, c, l, this.state.slatCoords) : this.renderSimpleLayout(d, f, g);
  }
}
function c_(t, e) {
  let n = new T0(t.renderRange, e);
  return new R0(n, !1);
}
const u_ = {
  allDaySlot: Boolean
};
var ph = Sn({
  name: "@fullcalendar/timegrid",
  initialView: "timeGridWeek",
  optionRefiners: u_,
  views: {
    timeGrid: {
      component: l_,
      usesMinMaxTime: !0,
      allDaySlot: !0,
      slotDuration: "00:30:00",
      slotEventOverlap: !0
      // a bad name. confused with overlap/constraint system
    },
    timeGridDay: {
      type: "timeGrid",
      duration: { days: 1 }
    },
    timeGridWeek: {
      type: "timeGrid",
      duration: { weeks: 1 }
    }
  }
});
ml.touchMouseIgnoreWait = 500;
let Aa = 0, Ws = 0, Da = !1;
class gh {
  constructor(e) {
    this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = (n) => {
      if (!this.shouldIgnoreMouse() && d_(n) && this.tryStart(n)) {
        let r = this.createEventFromMouse(n, !0);
        this.emitter.trigger("pointerdown", r), this.initScrollWatch(r), this.shouldIgnoreMove || document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("mouseup", this.handleMouseUp);
      }
    }, this.handleMouseMove = (n) => {
      let r = this.createEventFromMouse(n);
      this.recordCoords(r), this.emitter.trigger("pointermove", r);
    }, this.handleMouseUp = (n) => {
      document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), this.emitter.trigger("pointerup", this.createEventFromMouse(n)), this.cleanup();
    }, this.handleTouchStart = (n) => {
      if (this.tryStart(n)) {
        this.isTouchDragging = !0;
        let r = this.createEventFromTouch(n, !0);
        this.emitter.trigger("pointerdown", r), this.initScrollWatch(r);
        let i = n.target;
        this.shouldIgnoreMove || i.addEventListener("touchmove", this.handleTouchMove), i.addEventListener("touchend", this.handleTouchEnd), i.addEventListener("touchcancel", this.handleTouchEnd), window.addEventListener("scroll", this.handleTouchScroll, !0);
      }
    }, this.handleTouchMove = (n) => {
      let r = this.createEventFromTouch(n);
      this.recordCoords(r), this.emitter.trigger("pointermove", r);
    }, this.handleTouchEnd = (n) => {
      if (this.isDragging) {
        let r = n.target;
        r.removeEventListener("touchmove", this.handleTouchMove), r.removeEventListener("touchend", this.handleTouchEnd), r.removeEventListener("touchcancel", this.handleTouchEnd), window.removeEventListener("scroll", this.handleTouchScroll, !0), this.emitter.trigger("pointerup", this.createEventFromTouch(n)), this.cleanup(), this.isTouchDragging = !1, f_();
      }
    }, this.handleTouchScroll = () => {
      this.wasTouchScroll = !0;
    }, this.handleScroll = (n) => {
      if (!this.shouldIgnoreMove) {
        let r = window.pageXOffset - this.prevScrollX + this.prevPageX, i = window.pageYOffset - this.prevScrollY + this.prevPageY;
        this.emitter.trigger("pointermove", {
          origEvent: n,
          isTouch: this.isTouchDragging,
          subjectEl: this.subjectEl,
          pageX: r,
          pageY: i,
          deltaX: r - this.origPageX,
          deltaY: i - this.origPageY
        });
      }
    }, this.containerEl = e, this.emitter = new oo(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), h_();
  }
  destroy() {
    this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), p_();
  }
  tryStart(e) {
    let n = this.querySubjectEl(e), r = e.target;
    return n && (!this.handleSelector || Et(r, this.handleSelector)) ? (this.subjectEl = n, this.isDragging = !0, this.wasTouchScroll = !1, !0) : !1;
  }
  cleanup() {
    Da = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
  }
  querySubjectEl(e) {
    return this.selector ? Et(e.target, this.selector) : this.containerEl;
  }
  shouldIgnoreMouse() {
    return Aa || this.isTouchDragging;
  }
  // can be called by user of this class, to cancel touch-based scrolling for the current drag
  cancelTouchScroll() {
    this.isDragging && (Da = !0);
  }
  // Scrolling that simulates pointermoves
  // ----------------------------------------------------------------------------------------------------
  initScrollWatch(e) {
    this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0));
  }
  recordCoords(e) {
    this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.pageXOffset, this.prevScrollY = window.pageYOffset);
  }
  destroyScrollWatch() {
    this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0);
  }
  // Event Normalization
  // ----------------------------------------------------------------------------------------------------
  createEventFromMouse(e, n) {
    let r = 0, i = 0;
    return n ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (r = e.pageX - this.origPageX, i = e.pageY - this.origPageY), {
      origEvent: e,
      isTouch: !1,
      subjectEl: this.subjectEl,
      pageX: e.pageX,
      pageY: e.pageY,
      deltaX: r,
      deltaY: i
    };
  }
  createEventFromTouch(e, n) {
    let r = e.touches, i, s, o = 0, a = 0;
    return r && r.length ? (i = r[0].pageX, s = r[0].pageY) : (i = e.pageX, s = e.pageY), n ? (this.origPageX = i, this.origPageY = s) : (o = i - this.origPageX, a = s - this.origPageY), {
      origEvent: e,
      isTouch: !0,
      subjectEl: this.subjectEl,
      pageX: i,
      pageY: s,
      deltaX: o,
      deltaY: a
    };
  }
}
function d_(t) {
  return t.button === 0 && !t.ctrlKey;
}
function f_() {
  Aa += 1, setTimeout(() => {
    Aa -= 1;
  }, ml.touchMouseIgnoreWait);
}
function h_() {
  Ws += 1, Ws === 1 && window.addEventListener("touchmove", vh, { passive: !1 });
}
function p_() {
  Ws -= 1, Ws || window.removeEventListener("touchmove", vh, { passive: !1 });
}
function vh(t) {
  Da && t.preventDefault();
}
class g_ {
  constructor() {
    this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0;
  }
  start(e, n, r) {
    this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = n - window.pageXOffset, this.origScreenY = r - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition();
  }
  handleMove(e, n) {
    this.deltaX = e - window.pageXOffset - this.origScreenX, this.deltaY = n - window.pageYOffset - this.origScreenY, this.updateElPosition();
  }
  // can be called before start
  setIsVisible(e) {
    e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e);
  }
  // always async
  stop(e, n) {
    let r = () => {
      this.cleanup(), n();
    };
    e && this.mirrorEl && this.isVisible && this.revertDuration && // if 0, transition won't work
    (this.deltaX || this.deltaY) ? this.doRevertAnimation(r, this.revertDuration) : setTimeout(r, 0);
  }
  doRevertAnimation(e, n) {
    let r = this.mirrorEl, i = this.sourceEl.getBoundingClientRect();
    r.style.transition = "top " + n + "ms,left " + n + "ms", jr(r, {
      left: i.left,
      top: i.top
    }), ky(r, () => {
      r.style.transition = "", e();
    });
  }
  cleanup() {
    this.mirrorEl && (Za(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null;
  }
  updateElPosition() {
    this.sourceEl && this.isVisible && jr(this.getMirrorEl(), {
      left: this.sourceElRect.left + this.deltaX,
      top: this.sourceElRect.top + this.deltaY
    });
  }
  getMirrorEl() {
    let e = this.sourceElRect, n = this.mirrorEl;
    return n || (n = this.mirrorEl = this.sourceEl.cloneNode(!0), n.style.userSelect = "none", n.classList.add("fc-event-dragging"), jr(n, {
      position: "fixed",
      zIndex: this.zIndex,
      visibility: "",
      boxSizing: "border-box",
      width: e.right - e.left,
      height: e.bottom - e.top,
      right: "auto",
      bottom: "auto",
      margin: 0
    }), this.parentNode.appendChild(n)), n;
  }
}
class mh extends fl {
  constructor(e, n) {
    super(), this.handleScroll = () => {
      this.scrollTop = this.scrollController.getScrollTop(), this.scrollLeft = this.scrollController.getScrollLeft(), this.handleScrollChange();
    }, this.scrollController = e, this.doesListening = n, this.scrollTop = this.origScrollTop = e.getScrollTop(), this.scrollLeft = this.origScrollLeft = e.getScrollLeft(), this.scrollWidth = e.getScrollWidth(), this.scrollHeight = e.getScrollHeight(), this.clientWidth = e.getClientWidth(), this.clientHeight = e.getClientHeight(), this.clientRect = this.computeClientRect(), this.doesListening && this.getEventTarget().addEventListener("scroll", this.handleScroll);
  }
  destroy() {
    this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll);
  }
  getScrollTop() {
    return this.scrollTop;
  }
  getScrollLeft() {
    return this.scrollLeft;
  }
  setScrollTop(e) {
    this.scrollController.setScrollTop(e), this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0), this.handleScrollChange());
  }
  setScrollLeft(e) {
    this.scrollController.setScrollLeft(e), this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0), this.handleScrollChange());
  }
  getClientWidth() {
    return this.clientWidth;
  }
  getClientHeight() {
    return this.clientHeight;
  }
  getScrollWidth() {
    return this.scrollWidth;
  }
  getScrollHeight() {
    return this.scrollHeight;
  }
  handleScrollChange() {
  }
}
class bh extends mh {
  constructor(e, n) {
    super(new o2(e), n);
  }
  getEventTarget() {
    return this.scrollController.el;
  }
  computeClientRect() {
    return t2(this.scrollController.el);
  }
}
class v_ extends mh {
  constructor(e) {
    super(new a2(), e);
  }
  getEventTarget() {
    return window;
  }
  computeClientRect() {
    return {
      left: this.scrollLeft,
      right: this.scrollLeft + this.clientWidth,
      top: this.scrollTop,
      bottom: this.scrollTop + this.clientHeight
    };
  }
  // the window is the only scroll object that changes it's rectangle relative
  // to the document's topleft as it scrolls
  handleScrollChange() {
    this.clientRect = this.computeClientRect();
  }
}
const Gu = typeof performance == "function" ? performance.now : Date.now;
class m_ {
  constructor() {
    this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = () => {
      if (this.isAnimating) {
        let e = this.computeBestEdge(this.pointerScreenX + window.pageXOffset, this.pointerScreenY + window.pageYOffset);
        if (e) {
          let n = Gu();
          this.handleSide(e, (n - this.msSinceRequest) / 1e3), this.requestAnimation(n);
        } else
          this.isAnimating = !1;
      }
    };
  }
  start(e, n, r) {
    this.isEnabled && (this.scrollCaches = this.buildCaches(r), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, n));
  }
  handleMove(e, n) {
    if (this.isEnabled) {
      let r = e - window.pageXOffset, i = n - window.pageYOffset, s = this.pointerScreenY === null ? 0 : i - this.pointerScreenY, o = this.pointerScreenX === null ? 0 : r - this.pointerScreenX;
      s < 0 ? this.everMovedUp = !0 : s > 0 && (this.everMovedDown = !0), o < 0 ? this.everMovedLeft = !0 : o > 0 && (this.everMovedRight = !0), this.pointerScreenX = r, this.pointerScreenY = i, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(Gu()));
    }
  }
  stop() {
    if (this.isEnabled) {
      this.isAnimating = !1;
      for (let e of this.scrollCaches)
        e.destroy();
      this.scrollCaches = null;
    }
  }
  requestAnimation(e) {
    this.msSinceRequest = e, requestAnimationFrame(this.animate);
  }
  handleSide(e, n) {
    let { scrollCache: r } = e, { edgeThreshold: i } = this, s = i - e.distance, o = (
      // the closer to the edge, the faster we scroll
      s * s / (i * i) * // quadratic
      this.maxVelocity * n
    ), a = 1;
    switch (e.name) {
      case "left":
        a = -1;
      case "right":
        r.setScrollLeft(r.getScrollLeft() + o * a);
        break;
      case "top":
        a = -1;
      case "bottom":
        r.setScrollTop(r.getScrollTop() + o * a);
        break;
    }
  }
  // left/top are relative to document topleft
  computeBestEdge(e, n) {
    let { edgeThreshold: r } = this, i = null, s = this.scrollCaches || [];
    for (let o of s) {
      let a = o.clientRect, l = e - a.left, c = a.right - e, u = n - a.top, h = a.bottom - n;
      l >= 0 && c >= 0 && u >= 0 && h >= 0 && (u <= r && this.everMovedUp && o.canScrollUp() && (!i || i.distance > u) && (i = { scrollCache: o, name: "top", distance: u }), h <= r && this.everMovedDown && o.canScrollDown() && (!i || i.distance > h) && (i = { scrollCache: o, name: "bottom", distance: h }), l <= r && this.everMovedLeft && o.canScrollLeft() && (!i || i.distance > l) && (i = { scrollCache: o, name: "left", distance: l }), c <= r && this.everMovedRight && o.canScrollRight() && (!i || i.distance > c) && (i = { scrollCache: o, name: "right", distance: c }));
    }
    return i;
  }
  buildCaches(e) {
    return this.queryScrollEls(e).map((n) => n === window ? new v_(!1) : new bh(n, !1));
  }
  queryScrollEls(e) {
    let n = [];
    for (let r of this.scrollQuery)
      typeof r == "object" ? n.push(r) : n.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(r)));
    return n;
  }
}
class li extends F2 {
  constructor(e, n) {
    super(e), this.containerEl = e, this.delay = null, this.minDistance = 0, this.touchScrollAllowed = !0, this.mirrorNeedsRevert = !1, this.isInteracting = !1, this.isDragging = !1, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.delayTimeoutId = null, this.onPointerDown = (i) => {
      this.isDragging || (this.isInteracting = !0, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, Ay(document.body), Ty(document.body), i.isTouch || i.origEvent.preventDefault(), this.emitter.trigger("pointerdown", i), this.isInteracting && // not destroyed via pointerdown handler
      !this.pointer.shouldIgnoreMove && (this.mirror.setIsVisible(!1), this.mirror.start(i.subjectEl, i.pageX, i.pageY), this.startDelay(i), this.minDistance || this.handleDistanceSurpassed(i)));
    }, this.onPointerMove = (i) => {
      if (this.isInteracting) {
        if (this.emitter.trigger("pointermove", i), !this.isDistanceSurpassed) {
          let s = this.minDistance, o, { deltaX: a, deltaY: l } = i;
          o = a * a + l * l, o >= s * s && this.handleDistanceSurpassed(i);
        }
        this.isDragging && (i.origEvent.type !== "scroll" && (this.mirror.handleMove(i.pageX, i.pageY), this.autoScroller.handleMove(i.pageX, i.pageY)), this.emitter.trigger("dragmove", i));
      }
    }, this.onPointerUp = (i) => {
      this.isInteracting && (this.isInteracting = !1, Dy(document.body), Ry(document.body), this.emitter.trigger("pointerup", i), this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(i)), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null));
    };
    let r = this.pointer = new gh(e);
    r.emitter.on("pointerdown", this.onPointerDown), r.emitter.on("pointermove", this.onPointerMove), r.emitter.on("pointerup", this.onPointerUp), n && (r.selector = n), this.mirror = new g_(), this.autoScroller = new m_();
  }
  destroy() {
    this.pointer.destroy(), this.onPointerUp({});
  }
  startDelay(e) {
    typeof this.delay == "number" ? this.delayTimeoutId = setTimeout(() => {
      this.delayTimeoutId = null, this.handleDelayEnd(e);
    }, this.delay) : this.handleDelayEnd(e);
  }
  handleDelayEnd(e) {
    this.isDelayEnded = !0, this.tryStartDrag(e);
  }
  handleDistanceSurpassed(e) {
    this.isDistanceSurpassed = !0, this.tryStartDrag(e);
  }
  tryStartDrag(e) {
    this.isDelayEnded && this.isDistanceSurpassed && (!this.pointer.wasTouchScroll || this.touchScrollAllowed) && (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(e.pageX, e.pageY, this.containerEl), this.emitter.trigger("dragstart", e), this.touchScrollAllowed === !1 && this.pointer.cancelTouchScroll());
  }
  tryStopDrag(e) {
    this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e));
  }
  stopDrag(e) {
    this.isDragging = !1, this.emitter.trigger("dragend", e);
  }
  // fill in the implementations...
  setIgnoreMove(e) {
    this.pointer.shouldIgnoreMove = e;
  }
  setMirrorIsVisible(e) {
    this.mirror.setIsVisible(e);
  }
  setMirrorNeedsRevert(e) {
    this.mirrorNeedsRevert = e;
  }
  setAutoScrollEnabled(e) {
    this.autoScroller.isEnabled = e;
  }
}
class b_ {
  constructor(e) {
    this.origRect = dl(e), this.scrollCaches = c0(e).map((n) => new bh(n, !0));
  }
  destroy() {
    for (let e of this.scrollCaches)
      e.destroy();
  }
  computeLeft() {
    let e = this.origRect.left;
    for (let n of this.scrollCaches)
      e += n.origScrollLeft - n.getScrollLeft();
    return e;
  }
  computeTop() {
    let e = this.origRect.top;
    for (let n of this.scrollCaches)
      e += n.origScrollTop - n.getScrollTop();
    return e;
  }
  isWithinClipping(e, n) {
    let r = { left: e, top: n };
    for (let i of this.scrollCaches)
      if (!y_(i.getEventTarget()) && !P3(r, i.clientRect))
        return !1;
    return !0;
  }
}
function y_(t) {
  let e = t.tagName;
  return e === "HTML" || e === "BODY";
}
class ao {
  constructor(e, n) {
    this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = (r) => {
      let { dragging: i } = this;
      this.initialHit = null, this.movingHit = null, this.finalHit = null, this.prepareHits(), this.processFirstCoord(r), this.initialHit || !this.requireInitial ? (i.setIgnoreMove(!1), this.emitter.trigger("pointerdown", r)) : i.setIgnoreMove(!0);
    }, this.handleDragStart = (r) => {
      this.emitter.trigger("dragstart", r), this.handleMove(r, !0);
    }, this.handleDragMove = (r) => {
      this.emitter.trigger("dragmove", r), this.handleMove(r);
    }, this.handlePointerUp = (r) => {
      this.releaseHits(), this.emitter.trigger("pointerup", r);
    }, this.handleDragEnd = (r) => {
      this.movingHit && this.emitter.trigger("hitupdate", null, !0, r), this.finalHit = this.movingHit, this.movingHit = null, this.emitter.trigger("dragend", r);
    }, this.droppableStore = n, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new oo();
  }
  // sets initialHit
  // sets coordAdjust
  processFirstCoord(e) {
    let n = { left: e.pageX, top: e.pageY }, r = n, i = e.subjectEl, s;
    i instanceof HTMLElement && (s = dl(i), r = $3(r, s));
    let o = this.initialHit = this.queryHitForOffset(r.left, r.top);
    if (o) {
      if (this.useSubjectCenter && s) {
        let a = s0(s, o.rect);
        a && (r = H3(a));
      }
      this.coordAdjust = F3(r, n);
    } else
      this.coordAdjust = { left: 0, top: 0 };
  }
  handleMove(e, n) {
    let r = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
    (n || !lo(this.movingHit, r)) && (this.movingHit = r, this.emitter.trigger("hitupdate", r, !1, e));
  }
  prepareHits() {
    this.offsetTrackers = xn(this.droppableStore, (e) => (e.component.prepareHits(), new b_(e.el)));
  }
  releaseHits() {
    let { offsetTrackers: e } = this;
    for (let n in e)
      e[n].destroy();
    this.offsetTrackers = {};
  }
  queryHitForOffset(e, n) {
    let { droppableStore: r, offsetTrackers: i } = this, s = null;
    for (let o in r) {
      let a = r[o].component, l = i[o];
      if (l && // wasn't destroyed mid-drag
      l.isWithinClipping(e, n)) {
        let c = l.computeLeft(), u = l.computeTop(), h = e - c, d = n - u, { origRect: f } = l, g = f.right - f.left, p = f.bottom - f.top;
        if (
          // must be within the element's bounds
          h >= 0 && h < g && d >= 0 && d < p
        ) {
          let v = a.queryHit(h, d, g, p);
          v && // make sure the hit is within activeRange, meaning it's not a dead cell
          so(v.dateProfile.activeRange, v.dateSpan.range) && (!s || v.layer > s.layer) && (v.componentId = o, v.context = a.context, v.rect.left += c, v.rect.right += c, v.rect.top += u, v.rect.bottom += u, s = v);
        }
      }
    }
    return s;
  }
}
function lo(t, e) {
  return !t && !e ? !0 : !!t != !!e ? !1 : A2(t.dateSpan, e.dateSpan);
}
function yh(t, e) {
  let n = {};
  for (let r of e.pluginHooks.datePointTransforms)
    Object.assign(n, r(t, e));
  return Object.assign(n, x_(t, e.dateEnv)), n;
}
function x_(t, e) {
  return {
    date: e.toDate(t.range.start),
    dateStr: e.formatIso(t.range.start, { omitTime: t.allDay }),
    allDay: t.allDay
  };
}
class __ extends Rr {
  constructor(e) {
    super(e), this.handlePointerDown = (r) => {
      let { dragging: i } = this, s = r.origEvent.target;
      i.setIgnoreMove(!this.component.isValidDateDownEl(s));
    }, this.handleDragEnd = (r) => {
      let { component: i } = this, { pointer: s } = this.dragging;
      if (!s.wasTouchScroll) {
        let { initialHit: o, finalHit: a } = this.hitDragging;
        if (o && a && lo(o, a)) {
          let { context: l } = i, c = Object.assign(Object.assign({}, yh(o.dateSpan, l)), { dayEl: o.dayEl, jsEvent: r.origEvent, view: l.viewApi || l.calendarApi.view });
          l.emitter.trigger("dateClick", c);
        }
      }
    }, this.dragging = new li(e.el), this.dragging.autoScroller.isEnabled = !1;
    let n = this.hitDragging = new ao(this.dragging, vl(e));
    n.emitter.on("pointerdown", this.handlePointerDown), n.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
}
class w_ extends Rr {
  constructor(e) {
    super(e), this.dragSelection = null, this.handlePointerDown = (o) => {
      let { component: a, dragging: l } = this, { options: c } = a.context, u = c.selectable && a.isValidDateDownEl(o.origEvent.target);
      l.setIgnoreMove(!u), l.delay = o.isTouch ? S_(a) : null;
    }, this.handleDragStart = (o) => {
      this.component.context.calendarApi.unselect(o);
    }, this.handleHitUpdate = (o, a) => {
      let { context: l } = this.component, c = null, u = !1;
      if (o) {
        let h = this.hitDragging.initialHit;
        o.componentId === h.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(h, o) || (c = E_(h, o, l.pluginHooks.dateSelectionTransformers)), (!c || !n6(c, o.dateProfile, l)) && (u = !0, c = null);
      }
      c ? l.dispatch({ type: "SELECT_DATES", selection: c }) : a || l.dispatch({ type: "UNSELECT_DATES" }), u ? Ka() : Xa(), a || (this.dragSelection = c);
    }, this.handlePointerUp = (o) => {
      this.dragSelection && (f0(this.dragSelection, o, this.component.context), this.dragSelection = null);
    };
    let { component: n } = e, { options: r } = n.context, i = this.dragging = new li(e.el);
    i.touchScrollAllowed = !1, i.minDistance = r.selectMinDistance || 0, i.autoScroller.isEnabled = r.dragScroll;
    let s = this.hitDragging = new ao(this.dragging, vl(e));
    s.emitter.on("pointerdown", this.handlePointerDown), s.emitter.on("dragstart", this.handleDragStart), s.emitter.on("hitupdate", this.handleHitUpdate), s.emitter.on("pointerup", this.handlePointerUp);
  }
  destroy() {
    this.dragging.destroy();
  }
}
function S_(t) {
  let { options: e } = t.context, n = e.selectLongPressDelay;
  return n == null && (n = e.longPressDelay), n;
}
function E_(t, e, n) {
  let r = t.dateSpan, i = e.dateSpan, s = [
    r.range.start,
    r.range.end,
    i.range.start,
    i.range.end
  ];
  s.sort(By);
  let o = {};
  for (let a of n) {
    let l = a(t, e);
    if (l === !1)
      return null;
    l && Object.assign(o, l);
  }
  return o.range = { start: s[0], end: s[3] }, o.allDay = r.allDay, o;
}
class ci extends Rr {
  constructor(e) {
    super(e), this.subjectEl = null, this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (o) => {
      let a = o.origEvent.target, { component: l, dragging: c } = this, { mirror: u } = c, { options: h } = l.context, d = l.context;
      this.subjectEl = o.subjectEl;
      let f = this.subjectSeg = Cr(o.subjectEl), p = (this.eventRange = f.eventRange).instance.instanceId;
      this.relevantEvents = ol(d.getCurrentData().eventStore, p), c.minDistance = o.isTouch ? 0 : h.eventDragMinDistance, c.delay = // only do a touch delay if touch and this event hasn't been selected yet
      o.isTouch && p !== l.props.eventSelection ? k_(l) : null, h.fixedMirrorParent ? u.parentNode = h.fixedMirrorParent : u.parentNode = Et(a, ".fc"), u.revertDuration = h.dragRevertDuration;
      let v = l.isValidSegDownEl(a) && !Et(a, ".fc-event-resizer");
      c.setIgnoreMove(!v), this.isDragging = v && o.subjectEl.classList.contains("fc-event-draggable");
    }, this.handleDragStart = (o) => {
      let a = this.component.context, l = this.eventRange, c = l.instance.instanceId;
      o.isTouch ? c !== this.component.props.eventSelection && a.dispatch({ type: "SELECT_EVENT", eventInstanceId: c }) : a.dispatch({ type: "UNSELECT_EVENT" }), this.isDragging && (a.calendarApi.unselect(o), a.emitter.trigger("eventDragStart", {
        el: this.subjectEl,
        event: new Xe(a, l.def, l.instance),
        jsEvent: o.origEvent,
        view: a.viewApi
      }));
    }, this.handleHitUpdate = (o, a) => {
      if (!this.isDragging)
        return;
      let l = this.relevantEvents, c = this.hitDragging.initialHit, u = this.component.context, h = null, d = null, f = null, g = !1, p = {
        affectedEvents: l,
        mutatedEvents: $t(),
        isEvent: !0
      };
      if (o) {
        h = o.context;
        let v = h.options;
        u === h || v.editable && v.droppable ? (d = C_(c, o, h.getCurrentData().pluginHooks.eventDragMutationMassagers), d && (f = pl(l, h.getCurrentData().eventUiBases, d, h), p.mutatedEvents = f, N0(p, o.dateProfile, h) || (g = !0, d = null, f = null, p.mutatedEvents = $t()))) : h = null;
      }
      this.displayDrag(h, p), g ? Ka() : Xa(), a || (u === h && // TODO: write test for this
      lo(c, o) && (d = null), this.dragging.setMirrorNeedsRevert(!d), this.dragging.setMirrorIsVisible(!o || !this.subjectEl.getRootNode().querySelector(".fc-event-mirror")), this.receivingContext = h, this.validMutation = d, this.mutatedRelevantEvents = f);
    }, this.handlePointerUp = () => {
      this.isDragging || this.cleanup();
    }, this.handleDragEnd = (o) => {
      if (this.isDragging) {
        let a = this.component.context, l = a.viewApi, { receivingContext: c, validMutation: u } = this, h = this.eventRange.def, d = this.eventRange.instance, f = new Xe(a, h, d), g = this.relevantEvents, p = this.mutatedRelevantEvents, { finalHit: v } = this.hitDragging;
        if (this.clearDrag(), a.emitter.trigger("eventDragStop", {
          el: this.subjectEl,
          event: f,
          jsEvent: o.origEvent,
          view: l
        }), u) {
          if (c === a) {
            let m = new Xe(a, p.defs[h.defId], d ? p.instances[d.instanceId] : null);
            a.dispatch({
              type: "MERGE_EVENTS",
              eventStore: p
            });
            let x = {
              oldEvent: f,
              event: m,
              relatedEvents: Gn(p, a, d),
              revert() {
                a.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: g
                  // the pre-change data
                });
              }
            }, b = {};
            for (let _ of a.getCurrentData().pluginHooks.eventDropTransformers)
              Object.assign(b, _(u, a));
            a.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, x), b), { el: o.subjectEl, delta: u.datesDelta, jsEvent: o.origEvent, view: l })), a.emitter.trigger("eventChange", x);
          } else if (c) {
            let m = {
              event: f,
              relatedEvents: Gn(g, a, d),
              revert() {
                a.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: g
                });
              }
            };
            a.emitter.trigger("eventLeave", Object.assign(Object.assign({}, m), { draggedEl: o.subjectEl, view: l })), a.dispatch({
              type: "REMOVE_EVENTS",
              eventStore: g
            }), a.emitter.trigger("eventRemove", m);
            let x = p.defs[h.defId], b = p.instances[d.instanceId], _ = new Xe(c, x, b);
            c.dispatch({
              type: "MERGE_EVENTS",
              eventStore: p
            });
            let w = {
              event: _,
              relatedEvents: Gn(p, c, b),
              revert() {
                c.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: p
                });
              }
            };
            c.emitter.trigger("eventAdd", w), o.isTouch && c.dispatch({
              type: "SELECT_EVENT",
              eventInstanceId: d.instanceId
            }), c.emitter.trigger("drop", Object.assign(Object.assign({}, yh(v.dateSpan, c)), { draggedEl: o.subjectEl, jsEvent: o.origEvent, view: v.context.viewApi })), c.emitter.trigger("eventReceive", Object.assign(Object.assign({}, w), { draggedEl: o.subjectEl, view: v.context.viewApi }));
          }
        } else
          a.emitter.trigger("_noEventDrop");
      }
      this.cleanup();
    };
    let { component: n } = this, { options: r } = n.context, i = this.dragging = new li(e.el);
    i.pointer.selector = ci.SELECTOR, i.touchScrollAllowed = !1, i.autoScroller.isEnabled = r.dragScroll;
    let s = this.hitDragging = new ao(this.dragging, Ea);
    s.useSubjectCenter = e.useEventCenter, s.emitter.on("pointerdown", this.handlePointerDown), s.emitter.on("dragstart", this.handleDragStart), s.emitter.on("hitupdate", this.handleHitUpdate), s.emitter.on("pointerup", this.handlePointerUp), s.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  // render a drag state on the next receivingCalendar
  displayDrag(e, n) {
    let r = this.component.context, i = this.receivingContext;
    i && i !== e && (i === r ? i.dispatch({
      type: "SET_EVENT_DRAG",
      state: {
        affectedEvents: n.affectedEvents,
        mutatedEvents: $t(),
        isEvent: !0
      }
    }) : i.dispatch({ type: "UNSET_EVENT_DRAG" })), e && e.dispatch({ type: "SET_EVENT_DRAG", state: n });
  }
  clearDrag() {
    let e = this.component.context, { receivingContext: n } = this;
    n && n.dispatch({ type: "UNSET_EVENT_DRAG" }), e !== n && e.dispatch({ type: "UNSET_EVENT_DRAG" });
  }
  cleanup() {
    this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null;
  }
}
ci.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
function C_(t, e, n) {
  let r = t.dateSpan, i = e.dateSpan, s = r.range.start, o = i.range.start, a = {};
  r.allDay !== i.allDay && (a.allDay = i.allDay, a.hasEnd = e.context.options.allDayMaintainDuration, i.allDay && (s = Qe(s)));
  let l = fr(s, o, t.context.dateEnv, t.componentId === e.componentId ? t.largeUnit : null);
  l.milliseconds && (a.allDay = !1);
  let c = {
    datesDelta: l,
    standardProps: a
  };
  for (let u of n)
    u(c, t, e);
  return c;
}
function k_(t) {
  let { options: e } = t.context, n = e.eventLongPressDelay;
  return n == null && (n = e.longPressDelay), n;
}
class A_ extends Rr {
  constructor(e) {
    super(e), this.draggingSegEl = null, this.draggingSeg = null, this.eventRange = null, this.relevantEvents = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (s) => {
      let { component: o } = this, a = this.querySegEl(s), l = Cr(a), c = this.eventRange = l.eventRange;
      this.dragging.minDistance = o.context.options.eventDragMinDistance, this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(s.origEvent.target) || s.isTouch && this.component.props.eventSelection !== c.instance.instanceId);
    }, this.handleDragStart = (s) => {
      let { context: o } = this.component, a = this.eventRange;
      this.relevantEvents = ol(o.getCurrentData().eventStore, this.eventRange.instance.instanceId);
      let l = this.querySegEl(s);
      this.draggingSegEl = l, this.draggingSeg = Cr(l), o.calendarApi.unselect(), o.emitter.trigger("eventResizeStart", {
        el: l,
        event: new Xe(o, a.def, a.instance),
        jsEvent: s.origEvent,
        view: o.viewApi
      });
    }, this.handleHitUpdate = (s, o, a) => {
      let { context: l } = this.component, c = this.relevantEvents, u = this.hitDragging.initialHit, h = this.eventRange.instance, d = null, f = null, g = !1, p = {
        affectedEvents: c,
        mutatedEvents: $t(),
        isEvent: !0
      };
      s && (s.componentId === u.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(u, s) || (d = D_(u, s, a.subjectEl.classList.contains("fc-event-resizer-start"), h.range))), d && (f = pl(c, l.getCurrentData().eventUiBases, d, l), p.mutatedEvents = f, N0(p, s.dateProfile, l) || (g = !0, d = null, f = null, p.mutatedEvents = null)), f ? l.dispatch({
        type: "SET_EVENT_RESIZE",
        state: p
      }) : l.dispatch({ type: "UNSET_EVENT_RESIZE" }), g ? Ka() : Xa(), o || (d && lo(u, s) && (d = null), this.validMutation = d, this.mutatedRelevantEvents = f);
    }, this.handleDragEnd = (s) => {
      let { context: o } = this.component, a = this.eventRange.def, l = this.eventRange.instance, c = new Xe(o, a, l), u = this.relevantEvents, h = this.mutatedRelevantEvents;
      if (o.emitter.trigger("eventResizeStop", {
        el: this.draggingSegEl,
        event: c,
        jsEvent: s.origEvent,
        view: o.viewApi
      }), this.validMutation) {
        let d = new Xe(o, h.defs[a.defId], l ? h.instances[l.instanceId] : null);
        o.dispatch({
          type: "MERGE_EVENTS",
          eventStore: h
        });
        let f = {
          oldEvent: c,
          event: d,
          relatedEvents: Gn(h, o, l),
          revert() {
            o.dispatch({
              type: "MERGE_EVENTS",
              eventStore: u
              // the pre-change events
            });
          }
        };
        o.emitter.trigger("eventResize", Object.assign(Object.assign({}, f), { el: this.draggingSegEl, startDelta: this.validMutation.startDelta || Pe(0), endDelta: this.validMutation.endDelta || Pe(0), jsEvent: s.origEvent, view: o.viewApi })), o.emitter.trigger("eventChange", f);
      } else
        o.emitter.trigger("_noEventResize");
      this.draggingSeg = null, this.relevantEvents = null, this.validMutation = null;
    };
    let { component: n } = e, r = this.dragging = new li(e.el);
    r.pointer.selector = ".fc-event-resizer", r.touchScrollAllowed = !1, r.autoScroller.isEnabled = n.context.options.dragScroll;
    let i = this.hitDragging = new ao(this.dragging, vl(e));
    i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  querySegEl(e) {
    return Et(e.subjectEl, ".fc-event");
  }
}
function D_(t, e, n, r) {
  let i = t.context.dateEnv, s = t.dateSpan.range.start, o = e.dateSpan.range.start, a = fr(s, o, i, t.largeUnit);
  if (n) {
    if (i.add(r.start, a) < r.end)
      return { startDelta: a };
  } else if (i.add(r.end, a) > r.start)
    return { endDelta: a };
  return null;
}
class T_ {
  constructor(e) {
    this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = (r) => {
      r.jsEvent && (this.isRecentPointerDateSelect = !0);
    }, this.onDocumentPointerDown = (r) => {
      let i = this.context.options.unselectCancel, s = qf(r.origEvent);
      this.matchesCancel = !!Et(s, i), this.matchesEvent = !!Et(s, ci.SELECTOR);
    }, this.onDocumentPointerUp = (r) => {
      let { context: i } = this, { documentPointer: s } = this, o = i.getCurrentData();
      if (!s.wasTouchScroll) {
        if (o.dateSelection && // an existing date selection?
        !this.isRecentPointerDateSelect) {
          let a = i.options.unselectAuto;
          a && (!a || !this.matchesCancel) && i.calendarApi.unselect(r);
        }
        o.eventSelection && // an existing event selected?
        !this.matchesEvent && i.dispatch({ type: "UNSELECT_EVENT" });
      }
      this.isRecentPointerDateSelect = !1;
    };
    let n = this.documentPointer = new gh(document);
    n.shouldIgnoreMove = !0, n.shouldWatchScroll = !1, n.emitter.on("pointerdown", this.onDocumentPointerDown), n.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
  }
  destroy() {
    this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
  }
}
const R_ = {
  fixedMirrorParent: X
}, I_ = {
  dateClick: X,
  eventDragStart: X,
  eventDragStop: X,
  eventDrop: X,
  eventResizeStart: X,
  eventResizeStop: X,
  eventResize: X,
  drop: X,
  eventReceive: X,
  eventLeave: X
};
ml.dataAttrPrefix = "";
var xh = Sn({
  name: "@fullcalendar/interaction",
  componentInteractions: [__, w_, ci, A_],
  calendarInteractions: [T_],
  elementDraggingImpl: li,
  optionRefiners: R_,
  listenerRefiners: I_
});
let M_ = 0, O_ = (/* @__PURE__ */ new Date()).toISOString().replace(/T.*$/, "");
const N_ = [
  {
    id: B_(),
    title: "All-day event",
    start: O_
  }
  // {
  //   id: createEventId(),
  //   title: 'Timed event',
  //   start: todayStr + 'T12:00:00'
  // }
];
function B_() {
  return String(M_++);
}
const ui = (t) => (Ar("data-v-5b784b52"), t = t(), Dr(), t), L_ = { class: "demo-app" }, P_ = { class: "demo-app-main" }, $_ = { class: "title-line" }, H_ = ["title", "onClick"], F_ = {
  key: 0,
  style: { width: "90%" }
}, z_ = /* @__PURE__ */ ui(() => /* @__PURE__ */ P("span", { class: "to" }, "至", -1)), V_ = {
  key: 1,
  style: { width: "90%" }
}, U_ = /* @__PURE__ */ ui(() => /* @__PURE__ */ P("span", { class: "to" }, "至", -1)), j_ = {
  key: 2,
  style: { width: "90%", display: "flex", "align-items": "center", "justify-content": "space-between" }
}, W_ = {
  key: 0,
  style: { "margin-left": "2%" }
}, q_ = /* @__PURE__ */ ui(() => /* @__PURE__ */ P("span", {
  class: "to",
  style: { width: "10% !important" }
}, "至", -1)), Y_ = { key: 1 }, G_ = /* @__PURE__ */ ui(() => /* @__PURE__ */ P("span", {
  class: "to",
  style: { width: "10% !important" }
}, "至", -1)), Q_ = ["onClick"], Z_ = {
  key: 0,
  class: "placeholder"
}, K_ = { class: "info" }, X_ = /* @__PURE__ */ ui(() => /* @__PURE__ */ P("img", {
  src: "https://img1.baidu.com/it/u=1960110688,1786190632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
  alt: ""
}, null, -1)), J_ = { class: "dialog-footer" }, e8 = {
  name: "IkApprovalProcess"
}, t8 = /* @__PURE__ */ He({
  ...e8,
  props: {
    // 数据数组
    dataList: {
      type: Array,
      default: () => []
    },
    // 节点类型
    defaultNodeType: {
      type: Object,
      default: () => ({})
    },
    // 字段映射
    defaultFieldMap: {
      type: Object,
      default: () => ({})
    },
    // 没有审批人时的审批状态
    statusWithoutApprover: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["delete", "success"],
  setup(t, { emit: e }) {
    const n = (g) => {
      if (o.selectInfo = g, i(), g.view.type == "dayGridMonth") {
        let v = g.end.getTime() - 864e5;
        o.timeType = "month", o.form.startDate = ut.toYMD(g.start), o.form.endDate = ut.toYMD(new Date(v));
      } else
        g.view.type == "timeGridWeek" ? (o.timeType = "week", o.form.startDate = ut.toYMDHM(g.start), o.form.endDate = ut.toYMDHM(g.end)) : g.view.type == "timeGridDay" && (o.timeType = "day", o.form.startDate = ut.toYMD(g.start), o.form.endDate = ut.toYMD(g.start), o.form.startTime = ut.toDateTime(g.start), o.form.endTime = ut.toDateTime(g.end));
      g.view.calendar.unselect(), In(() => {
        o.title = "新建日程", o.dialogVisible = !0;
      });
    }, r = (g, p) => {
      o.title = "修改日程", o.dialogVisible = !0;
    }, i = (g) => {
      fetch("http://192.168.2.45:6002/component/pick/mix", {
        method: "POST",
        body: JSON.stringify({
          parentDepartmentId: g || "",
          name: ""
        }),
        headers: {
          Authorization: "Bearer iking",
          "Content-Type": "application/json"
        }
      }).then((m) => {
        m.json().then((x) => {
          const { success: b, data: _ } = x;
          if (!b)
            return;
          const { departments: w, users: S, roles: y, posts: E } = _;
          o.depList = w, o.userList = S, o.roleList = y, o.postList = E;
        });
      }).catch((m) => {
        console.info("error: ", m);
      });
    }, o = rn({
      allDay: !1,
      dialogVisible: !1,
      form: {
        title: "",
        type: 1,
        startDate: "",
        endDate: "",
        startTime: "",
        endTime: "",
        personList: [],
        location: ""
      },
      formRef: null,
      title: "新建日程",
      timeType: "month",
      handList: [],
      isShow: !1,
      depList: [],
      userList: [],
      roleList: [],
      postList: [],
      selectInfo: {},
      calendarOptions: {
        locale: Ef,
        plugins: [
          uh,
          ph,
          xh
          // needed for dateClick
        ],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        },
        firstDay: 1,
        // 设置一周中显示的第一天是哪天，周日是0，周一是1，类
        initialView: "dayGridMonth",
        // 默认为那个视图（月：dayGridMonth，周：timeGridWeek，日：timeGridDay）
        initialEvents: N_,
        // alternatively, use the `events` setting to fetch from a feed
        editable: !0,
        selectable: !0,
        selectMirror: !0,
        dayMaxEvents: !0,
        weekends: !0,
        // height: 'auto',
        select: n,
        eventClick: (g) => r(),
        eventsSet: (g) => {
          o.currentEvents = g;
        }
      },
      currentEvents: []
    }), a = () => {
      var g;
      (g = o.formRef) == null || g.resetFields(), o.form = {
        title: "",
        type: 1,
        startDate: "",
        endDate: "",
        startTime: "",
        endTime: "",
        personList: [],
        location: ""
      }, o.dialogVisible = !1;
    }, l = async () => {
      var v, m, x, b;
      let g = (m = (v = o.selectInfo) == null ? void 0 : v.view) == null ? void 0 : m.calendar, p = {
        id: (/* @__PURE__ */ new Date()).getTime(),
        title: o.form.title,
        start: (x = o.selectInfo) == null ? void 0 : x.startStr,
        end: (b = o.selectInfo) == null ? void 0 : b.endStr,
        allDay: o.allDay
      };
      await g.addEvent(p), e("success", p), a();
    }, c = (g) => {
      Rd.confirm(`你确定删除事件'${g.event.title}'?`, "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(() => {
        Qr({
          type: "success",
          message: "删除成功"
        }), g.event.remove(), e("delete", g.event);
      });
    }, u = (g) => {
      o.handList = g.list, o.form.personList = g.list;
    }, h = () => {
      o.isShow = !0;
    }, d = (g) => {
      i(g == null ? void 0 : g.elementId);
    }, f = (g) => {
      o.form.personList.splice(g, 1), o.handList = o.form.personList;
    };
    return (g, p) => {
      const v = Me("el-checkbox");
      return T(), $("div", L_, [
        P("div", P_, [
          M(F(rh), {
            class: "demo-app-calendar",
            options: o.calendarOptions
          }, {
            eventContent: Q((m) => [
              P("div", $_, [
                P("span", {
                  class: "title",
                  title: m.event.title,
                  onClick: Tt((x) => r(), ["stop"])
                }, pe(m.event.title), 9, H_),
                M(F(it), {
                  size: 16,
                  onClick: Tt((x) => c(m), ["stop"])
                }, {
                  default: Q(() => [
                    M(F(bd))
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ])
            ]),
            _: 1
          }, 8, ["options"])
        ]),
        M(F(za), {
          modelValue: o.dialogVisible,
          "onUpdate:modelValue": p[12] || (p[12] = (m) => o.dialogVisible = m),
          title: o.title,
          width: "30%",
          ref: "formRef",
          onClose: a
        }, {
          footer: Q(() => [
            P("span", J_, [
              M(F(Rt), { onClick: a }, {
                default: Q(() => [
                  Te("取消")
                ]),
                _: 1
              }),
              M(F(Rt), {
                type: "primary",
                onClick: l
              }, {
                default: Q(() => [
                  Te("确定")
                ]),
                _: 1
              })
            ])
          ]),
          default: Q(() => [
            M(F(Fa), {
              model: o.form
            }, {
              default: Q(() => [
                M(F(Wn), null, {
                  default: Q(() => [
                    M(F(it), { class: "icon" }, {
                      default: Q(() => [
                        M(F(yd))
                      ]),
                      _: 1
                    }),
                    M(F(qn), {
                      modelValue: o.form.title,
                      "onUpdate:modelValue": p[0] || (p[0] = (m) => o.form.title = m),
                      placeholder: `添加${o.form.type == 1 ? "会议" : "活动"}标题`,
                      style: { width: "70%" },
                      clearable: ""
                    }, null, 8, ["modelValue", "placeholder"]),
                    M(F(Wi), {
                      modelValue: o.form.type,
                      "onUpdate:modelValue": p[1] || (p[1] = (m) => o.form.type = m),
                      style: { width: "20%" }
                    }, {
                      default: Q(() => [
                        M(F(Gr), {
                          label: "会议",
                          value: 1
                        }),
                        M(F(Gr), {
                          label: "活动",
                          value: 2
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                M(F(Wn), null, {
                  default: Q(() => [
                    M(F(it), { class: "icon" }, {
                      default: Q(() => [
                        M(F(xd))
                      ]),
                      _: 1
                    }),
                    o.timeType == "month" ? (T(), $("div", F_, [
                      M(F(gn), {
                        modelValue: o.form.startDate,
                        "onUpdate:modelValue": p[2] || (p[2] = (m) => o.form.startDate = m),
                        type: "date",
                        placeholder: "开始日期",
                        style: { width: "48%" }
                      }, null, 8, ["modelValue"]),
                      z_,
                      M(F(gn), {
                        modelValue: o.form.endDate,
                        "onUpdate:modelValue": p[3] || (p[3] = (m) => o.form.endDate = m),
                        type: "date",
                        placeholder: "结束日期",
                        style: { width: "48%" }
                      }, null, 8, ["modelValue"])
                    ])) : re("", !0),
                    o.timeType == "week" ? (T(), $("div", V_, [
                      M(F(gn), {
                        modelValue: o.form.startDate,
                        "onUpdate:modelValue": p[4] || (p[4] = (m) => o.form.startDate = m),
                        type: "datetime",
                        placeholder: "开始日期",
                        style: { width: "48%" },
                        format: "YYYY-MM-DD HH:mm"
                      }, null, 8, ["modelValue"]),
                      U_,
                      M(F(gn), {
                        modelValue: o.form.endDate,
                        "onUpdate:modelValue": p[5] || (p[5] = (m) => o.form.endDate = m),
                        type: "datetime",
                        placeholder: "结束日期",
                        style: { width: "48%" },
                        format: "YYYY-MM-DD HH:mm"
                      }, null, 8, ["modelValue"])
                    ])) : re("", !0),
                    o.timeType == "day" ? (T(), $("div", j_, [
                      M(F(gn), {
                        modelValue: o.form.startDate,
                        "onUpdate:modelValue": p[6] || (p[6] = (m) => o.form.startDate = m),
                        type: "date",
                        placeholder: "开始日期",
                        style: Oe({ width: o.allDay ? "45%" : "90%" })
                      }, null, 8, ["modelValue", "style"]),
                      o.allDay ? (T(), $("div", Y_, [
                        G_,
                        M(F(gn), {
                          modelValue: o.form.endDate,
                          "onUpdate:modelValue": p[9] || (p[9] = (m) => o.form.endDate = m),
                          type: "date",
                          placeholder: "结束日期",
                          style: { width: "90%" }
                        }, null, 8, ["modelValue"])
                      ])) : (T(), $("div", W_, [
                        M(F(Fl), {
                          modelValue: o.form.startTime,
                          "onUpdate:modelValue": p[7] || (p[7] = (m) => o.form.startTime = m),
                          type: "datetime",
                          placeholder: "开始日期",
                          style: { width: "45%" },
                          format: "HH:mm"
                        }, null, 8, ["modelValue"]),
                        q_,
                        M(F(Fl), {
                          modelValue: o.form.endTime,
                          "onUpdate:modelValue": p[8] || (p[8] = (m) => o.form.endTime = m),
                          type: "datetime",
                          placeholder: "结束日期",
                          style: { width: "45%" },
                          format: "HH:mm"
                        }, null, 8, ["modelValue"])
                      ])),
                      M(v, {
                        modelValue: o.allDay,
                        "onUpdate:modelValue": p[10] || (p[10] = (m) => o.allDay = m),
                        label: "全天",
                        style: { "margin-left": "2%" }
                      }, null, 8, ["modelValue"])
                    ])) : re("", !0)
                  ]),
                  _: 1
                }),
                M(F(Wn), null, {
                  default: Q(() => [
                    M(F(it), { class: "icon" }, {
                      default: Q(() => [
                        M(F(xp))
                      ]),
                      _: 1
                    }),
                    P("div", {
                      class: "personBlock",
                      onClick: Tt(h, ["stop"])
                    }, [
                      o.form.personList.length ? (T(!0), $(Ae, { key: 1 }, qe(o.form.personList, (m, x) => (T(), $("div", {
                        key: x,
                        class: "nameBlock"
                      }, [
                        P("div", K_, [
                          X_,
                          P("div", null, pe(m.elementName), 1)
                        ]),
                        M(F(it), {
                          class: "close",
                          onClick: Tt((b) => f(x), ["stop"])
                        }, {
                          default: Q(() => [
                            M(F(_d))
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]))), 128)) : (T(), $("span", Z_, "添加参与人"))
                    ], 8, Q_)
                  ]),
                  _: 1
                }),
                M(F(Wn), null, {
                  default: Q(() => [
                    M(F(it), { class: "icon" }, {
                      default: Q(() => [
                        M(F(_p))
                      ]),
                      _: 1
                    }),
                    M(F(qn), {
                      modelValue: o.form.location,
                      "onUpdate:modelValue": p[11] || (p[11] = (m) => o.form.location = m),
                      placeholder: "添加地点",
                      style: { width: "90%" },
                      clearable: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model"])
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        M(F(ho), {
          modelValue: o.handList,
          "onUpdate:modelValue": p[13] || (p[13] = (m) => o.handList = m),
          show: o.isShow,
          "onUpdate:show": p[14] || (p[14] = (m) => o.isShow = m),
          onOk: u,
          multiple: !0,
          "type-option": {
            dep: "DEPT",
            user: "USER",
            role: "ROLE",
            post: "POST"
          },
          "dep-list": o.depList,
          "user-list": o.userList,
          "prop-option": {
            name: "elementName",
            id: "elementId",
            type: "elementType",
            avatar: "avatar"
          },
          chooseType: ["user"],
          onHandChild: d
        }, null, 8, ["modelValue", "show", "dep-list", "user-list"])
      ]);
    };
  }
});
const n8 = /* @__PURE__ */ ze(t8, [["__scopeId", "data-v-5b784b52"]]), ak = tt(n8), r8 = { class: "ik-hor-step-content" }, i8 = { class: "flex" }, s8 = ["onClick"], o8 = ["id", "onClick"], a8 = /* @__PURE__ */ He({
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
  setup(t, { emit: e }) {
    const n = t, r = fe(!1), i = fe(), s = fe(), o = fe(!1);
    dt(
      () => n.active,
      (g) => {
        let p = document.getElementById("stepItemContent"), v = document.getElementById(`stepItem${g}`), m = document.getElementById("stepItem0");
        const x = v && m ? (v == null ? void 0 : v.offsetLeft) - (m == null ? void 0 : m.offsetLeft) : 0;
        p && v && (p.scrollLeft = x > (p == null ? void 0 : p.clientWidth) ? x - (p == null ? void 0 : p.offsetLeft) : 0);
      }
    ), kr(() => {
      In(() => {
        let p = document.getElementById("stepItemContent"), v = (p == null ? void 0 : p.scrollWidth) > (p == null ? void 0 : p.clientWidth);
        r.value = v, window.addEventListener("resize", g, !0);
      });
      const g = () => {
        let p = document.getElementById("stepItemContent"), v = (p == null ? void 0 : p.scrollWidth) > (p == null ? void 0 : p.clientWidth);
        r.value = v;
      };
    });
    const a = (g, p) => {
      if (!n.needClick)
        return;
      e("update:active", p), e("click", g);
      let v = document.getElementById("stepItemContent"), m = document.getElementById(`stepItem${p}`), x = document.getElementById("stepItem0");
      const b = m && x ? (m == null ? void 0 : m.offsetLeft) - (x == null ? void 0 : x.offsetLeft) : 0;
      v && m && (v.scrollLeft = b > (v == null ? void 0 : v.clientWidth) ? b - (v == null ? void 0 : v.offsetLeft) : 0);
    }, l = () => {
      let g = document.getElementById("stepItemContent");
      g && (g.scrollLeft = g.scrollLeft - 20);
    }, c = () => {
      let g = document.getElementById("stepItemContent");
      g && (g.scrollLeft = g.scrollLeft + 20);
    }, u = () => {
      clearInterval(s.value);
      let g = document.getElementById("stepItemContent");
      o.value = !1, s.value = setInterval(() => {
        o.value = !0, g && (g.scrollLeft = g.scrollLeft - 20);
      }, 100);
    }, h = () => {
      clearInterval(s.value), o.value || l();
    }, d = () => {
      clearInterval(i.value);
      let g = document.getElementById("stepItemContent");
      o.value = !1, i.value = setInterval(() => {
        o.value = !0, g && (g.scrollLeft = g.scrollLeft + 20);
      }, 100);
    }, f = () => {
      clearInterval(i.value), o.value || c();
    };
    return (g, p) => {
      const v = Me("el-icon");
      return T(), $("div", r8, [
        P("div", i8, [
          r.value ? (T(), $("div", {
            key: 0,
            class: "icon-left",
            onMousedown: u,
            onMouseup: h,
            onClick: l
          }, [
            M(v, { class: "operation-icon" }, {
              default: Q(() => [
                M(F(wd), { size: "26px" })
              ]),
              _: 1
            })
          ], 32)) : re("", !0),
          P("div", {
            class: "step-item-content",
            id: "stepItemContent",
            style: Oe({ justifyContent: r.value ? "flex-start" : "center" })
          }, [
            (T(!0), $(Ae, null, qe(t.list, (m, x) => (T(), $("div", {
              class: $e(`step-item ${x <= t.active ? "step-item-active" : ""}`),
              key: x
            }, [
              x != 0 ? (T(), $("span", {
                key: 0,
                class: $e(`step-border ${x <= t.active ? "step-border-greater-than" : ""}`),
                style: Oe({ width: `${t.spaceNum.indexOf("px") != -1 ? t.spaceNum : `${t.spaceNum}px`}` })
              }, null, 6)) : re("", !0),
              P("span", {
                class: $e(`step-num ${x === t.active ? "step-num-active" : x < t.active ? "step-num-greater-than" : ""}`),
                onClick: (b) => a(m, x),
                style: Oe({ backgroundColor: x === t.active && t.activeColor ? t.activeColor : "", cursor: m && m.disabled ? "not-allowed" : t.needClick ? "pointer" : "context-menu" })
              }, [
                Je(g.$slots, "icon", {
                  data: { item: m, index: x }
                }, () => [
                  Te(pe(x + 1), 1)
                ], !0)
              ], 14, s8),
              P("span", {
                id: `stepItem${x}`,
                class: $e(`step-label ${t.active === x ? "step-label-active" : x < t.active ? "step-label-greater-than" : ""} step-item-${x}`),
                style: Oe({
                  color: x === t.active && t.activeColor ? t.activeColor : "",
                  cursor: m && m.disabled ? "not-allowed" : t.needClick ? "pointer" : "context-menu"
                }),
                onClick: (b) => a(m, x)
              }, pe(m[t.propsField.title]), 15, o8)
            ], 2))), 128))
          ], 4),
          r.value ? (T(), $("div", {
            key: 1,
            class: "icon-right",
            onMousedown: d,
            onMouseup: f,
            onClick: c
          }, [
            M(v, { class: "operation-icon" }, {
              default: Q(() => [
                M(F(Sd))
              ]),
              _: 1
            })
          ], 32)) : re("", !0)
        ])
      ]);
    };
  }
});
const l8 = /* @__PURE__ */ ze(a8, [["__scopeId", "data-v-153d28a8"]]), lk = tt(l8), c8 = typeof btoa == "function", Al = typeof Buffer == "function";
typeof TextDecoder == "function" && new TextDecoder();
const Qu = typeof TextEncoder == "function" ? new TextEncoder() : void 0, u8 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", Vr = Array.prototype.slice.call(u8);
((t) => {
  let e = {};
  return t.forEach((n, r) => e[n] = r), e;
})(Vr);
const Jt = String.fromCharCode.bind(String);
typeof Uint8Array.from == "function" && Uint8Array.from.bind(Uint8Array);
const d8 = (t) => t.replace(/=/g, "").replace(/[+\/]/g, (e) => e == "+" ? "-" : "_"), f8 = (t) => {
  let e, n, r, i, s = "";
  const o = t.length % 3;
  for (let a = 0; a < t.length; ) {
    if ((n = t.charCodeAt(a++)) > 255 || (r = t.charCodeAt(a++)) > 255 || (i = t.charCodeAt(a++)) > 255)
      throw new TypeError("invalid character found");
    e = n << 16 | r << 8 | i, s += Vr[e >> 18 & 63] + Vr[e >> 12 & 63] + Vr[e >> 6 & 63] + Vr[e & 63];
  }
  return o ? s.slice(0, o - 3) + "===".substring(o) : s;
}, _h = c8 ? (t) => btoa(t) : Al ? (t) => Buffer.from(t, "binary").toString("base64") : f8, h8 = Al ? (t) => Buffer.from(t).toString("base64") : (t) => {
  let n = [];
  for (let r = 0, i = t.length; r < i; r += 4096)
    n.push(Jt.apply(null, t.subarray(r, r + 4096)));
  return _h(n.join(""));
}, p8 = (t) => {
  if (t.length < 2) {
    var e = t.charCodeAt(0);
    return e < 128 ? t : e < 2048 ? Jt(192 | e >>> 6) + Jt(128 | e & 63) : Jt(224 | e >>> 12 & 15) + Jt(128 | e >>> 6 & 63) + Jt(128 | e & 63);
  } else {
    var e = 65536 + (t.charCodeAt(0) - 55296) * 1024 + (t.charCodeAt(1) - 56320);
    return Jt(240 | e >>> 18 & 7) + Jt(128 | e >>> 12 & 63) + Jt(128 | e >>> 6 & 63) + Jt(128 | e & 63);
  }
}, g8 = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, v8 = (t) => t.replace(g8, p8), Zu = Al ? (t) => Buffer.from(t, "utf8").toString("base64") : Qu ? (t) => h8(Qu.encode(t)) : (t) => _h(v8(t)), m8 = (t, e = !1) => e ? d8(Zu(t)) : Zu(t), b8 = ["src"], wh = /* @__PURE__ */ He({
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
  setup(t) {
    const e = t, n = fe(null), r = ye(() => !e.kkUrl || !e.url ? "" : `${e.kkUrl}${encodeURIComponent(
      m8(`${e.loadUrl}${e.url}${e.fileName ? `&fullfilename=${e.fileName}` : ""}`)
    )}`), i = fe(e.modelValue);
    return dt(() => e.modelValue, (s) => {
      i.value = s;
    }), (s, o) => (T(), de(F(za), {
      fullscreen: "",
      modelValue: i.value,
      "onUpdate:modelValue": o[0] || (o[0] = (a) => i.value = a),
      "append-to-body": "",
      "modal-class": "ik-file-preview-modal",
      onClose: o[1] || (o[1] = (a) => s.$emit("update:modelValue", !1)),
      class: "ik-file-preview"
    }, {
      default: Q(() => [
        P("iframe", {
          ref_key: "freamRef",
          ref: n,
          "cross-origin": "",
          src: r.value,
          frameborder: "0",
          allowfullscreen: "",
          seamless: ""
        }, null, 8, b8)
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const ck = tt(wh), y8 = {
  key: 0,
  t: "1686300037564",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "7515",
  width: "200",
  height: "200"
}, x8 = /* @__PURE__ */ P("path", {
  d: "M160 0h512l256 256v704c0 35.3472-28.6528 64-64 64H160c-35.3472 0-64-28.6528-64-64V64c0-35.3472 28.6528-64 64-64z",
  fill: "#029EF7",
  "p-id": "7516"
}, null, -1), _8 = /* @__PURE__ */ P("path", {
  d: "M672 0l256 256h-192c-35.3472 0-64-28.6528-64-64V0z",
  fill: "#64b5ed",
  "p-id": "7517"
}, null, -1), w8 = /* @__PURE__ */ P("path", {
  d: "M384 499.2c0-25.6 5.12-46.08 10.24-58.88 5.12-12.8 15.36-25.6 28.16-35.84 12.8-12.8 25.6-20.48 43.52-25.6 15.36-5.12 30.72-7.68 48.64-7.68 35.84 0 64 10.24 89.6 30.72C627.2 422.4 640 448 640 481.28c0 15.36-5.12 28.16-10.24 40.96s-17.92 28.16-38.4 46.08-28.16 30.72-35.84 38.4c-7.68 7.68-10.24 17.92-15.36 28.16-5.12 10.24-2.56 17.92-2.56 43.52h-51.2c0-25.6 2.56-38.4 5.12-51.2s7.68-23.04 15.36-33.28 15.36-23.04 33.28-40.96c17.92-17.92 30.72-30.72 35.84-38.4 5.12-7.68 10.24-20.48 10.24-38.4s-7.68-30.72-20.48-43.52-30.72-20.48-53.76-20.48c-51.2 0-76.8 35.84-76.8 87.04h-51.2z m153.6 281.6h-51.2v-51.2h51.2v51.2z",
  fill: "#FFFFFF",
  "p-id": "7518"
}, null, -1), S8 = [
  x8,
  _8,
  w8
], E8 = {
  key: 1,
  t: "1686300059786",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "7671",
  width: "200",
  height: "200"
}, C8 = /* @__PURE__ */ P("path", {
  d: "M160 0h512l256 256v704c0 35.3472-28.6528 64-64 64H160c-35.3472 0-64-28.6528-64-64V64c0-35.3472 28.6528-64 64-64z",
  fill: "#50CD89",
  "p-id": "7672"
}, null, -1), k8 = /* @__PURE__ */ P("path", {
  d: "M258.528 742.0672L351.8336 604.928a14.5024 14.5024 0 0 1 22.1696-2.1824l61.664 60.416 135.296-212.064a14.5024 14.5024 0 0 1 24.8064 0.5568l168.1024 291.328a14.5024 14.5024 0 0 1-12.5696 21.7664H270.528a14.5024 14.5024 0 0 1-12.0064-22.6816z",
  fill: "#FFF7F7",
  "p-id": "7673"
}, null, -1), A8 = /* @__PURE__ */ P("path", {
  d: "M359.616 431.5456m-73.1456 0a73.1456 73.1456 0 1 0 146.2912 0 73.1456 73.1456 0 1 0-146.2912 0Z",
  fill: "#FFFFFF",
  "p-id": "7674"
}, null, -1), D8 = /* @__PURE__ */ P("path", {
  d: "M672 0l256 256h-192c-35.3472 0-64-28.6528-64-64V0z",
  fill: "#a9f6cc",
  "p-id": "7675"
}, null, -1), T8 = [
  C8,
  k8,
  A8,
  D8
], R8 = {
  key: 2,
  t: "1686301531714",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "9067",
  width: "200",
  height: "200"
}, I8 = /* @__PURE__ */ P("path", {
  d: "M409.6 0v68.266667h-34.133333c-20.48 0-34.133333 13.653333-34.133334 34.133333s13.653333 34.133333 34.133334 34.133333H409.6v68.266667h-34.133333c-20.48 0-34.133333 13.653333-34.133334 34.133333s13.653333 34.133333 34.133334 34.133334H409.6v68.266666h-34.133333c-20.48 0-34.133333 13.653333-34.133334 34.133334s13.653333 34.133333 34.133334 34.133333H409.6v68.266667h-34.133333c-20.48 0-34.133333 13.653333-34.133334 34.133333s13.653333 34.133333 34.133334 34.133333h68.266666c20.48 0 34.133333-13.653333 34.133334-34.133333V477.866667h34.133333c20.48 0 34.133333-13.653333 34.133333-34.133334S532.48 409.6 512 409.6H477.866667V341.333333h34.133333c20.48 0 34.133333-13.653333 34.133333-34.133333S532.48 273.066667 512 273.066667H477.866667V204.8h34.133333c20.48 0 34.133333-13.653333 34.133333-34.133333S532.48 136.533333 512 136.533333H477.866667V0h204.8l273.066666 273.066667v614.4c0 75.093333-61.44 136.533333-136.533333 136.533333H204.8c-75.093333 0-136.533333-61.44-136.533333-136.533333V136.533333C68.266667 61.44 129.706667 0 204.8 0h204.8z m0 682.666667h68.266667v68.266666H409.6v-68.266666z m-34.133333-68.266667c-20.48 0-34.133333 13.653333-34.133334 34.133333v136.533334c0 20.48 13.653333 34.133333 34.133334 34.133333h136.533333c20.48 0 34.133333-13.653333 34.133333-34.133333v-136.533334c0-20.48-13.653333-34.133333-34.133333-34.133333h-136.533333z",
  fill: "#FFA621",
  "p-id": "9068"
}, null, -1), M8 = /* @__PURE__ */ P("path", {
  d: "M682.666667 0l273.066666 273.066667h-204.8c-40.96 0-68.266667-27.306667-68.266666-68.266667V0z",
  fill: "#f5d37b",
  "p-id": "9069"
}, null, -1), O8 = [
  I8,
  M8
], N8 = {
  key: 3,
  t: "1686300141125",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "8137",
  width: "200",
  height: "200"
}, B8 = /* @__PURE__ */ P("path", {
  d: "M204.8 0h477.866667l273.066666 273.066667v614.4c0 75.093333-61.44 136.533333-136.533333 136.533333H204.8c-75.093333 0-136.533333-61.44-136.533333-136.533333V136.533333C68.266667 61.44 129.706667 0 204.8 0z m204.8 546.133333V443.733333h204.8v136.533334H409.6V546.133333z m0 102.4h204.8c40.96 0 68.266667-27.306667 68.266667-68.266666v-136.533334c0-40.96-27.306667-68.266667-68.266667-68.266666H409.6c-40.96 0-68.266667 27.306667-68.266667 68.266666V819.2c0 20.48 13.653333 34.133333 34.133334 34.133333s34.133333-13.653333 34.133333-34.133333V648.533333z",
  fill: "#F1416C",
  "p-id": "8138"
}, null, -1), L8 = /* @__PURE__ */ P("path", {
  d: "M682.666667 0l273.066666 273.066667h-204.8c-40.96 0-68.266667-27.306667-68.266666-68.266667V0z",
  fill: "#f78cbc",
  "p-id": "8139"
}, null, -1), P8 = [
  B8,
  L8
], $8 = {
  key: 4,
  t: "1686300157181",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "8292",
  width: "200",
  height: "200"
}, H8 = /* @__PURE__ */ P("path", {
  d: "M204.8 0h477.866667l273.066666 273.066667v614.4c0 75.093333-61.44 136.533333-136.533333 136.533333H204.8c-75.093333 0-136.533333-61.44-136.533333-136.533333V136.533333C68.266667 61.44 129.706667 0 204.8 0z m307.2 607.573333l68.266667 191.146667c13.653333 27.306667 54.613333 27.306667 61.44 0l102.4-273.066667c6.826667-20.48 0-34.133333-20.48-40.96s-34.133333 0-40.96 13.653334l-68.266667 191.146666-68.266667-191.146666c-13.653333-27.306667-54.613333-27.306667-68.266666 0l-68.266667 191.146666-68.266667-191.146666c-6.826667-13.653333-27.306667-27.306667-47.786666-20.48s-27.306667 27.306667-20.48 47.786666l102.4 273.066667c13.653333 27.306667 54.613333 27.306667 61.44 0l75.093333-191.146667z",
  fill: "#029EF7",
  "p-id": "8293"
}, null, -1), F8 = /* @__PURE__ */ P("path", {
  d: "M682.666667 0l273.066666 273.066667h-204.8c-40.96 0-68.266667-27.306667-68.266666-68.266667V0z",
  fill: "#64b5ed",
  "p-id": "8294"
}, null, -1), z8 = [
  H8,
  F8
], V8 = {
  key: 5,
  t: "1686300180947",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "8447",
  width: "200",
  height: "200"
}, U8 = /* @__PURE__ */ P("path", {
  d: "M204.8 0h477.866667l273.066666 273.066667v614.4c0 75.093333-61.44 136.533333-136.533333 136.533333H204.8c-75.093333 0-136.533333-61.44-136.533333-136.533333V136.533333C68.266667 61.44 129.706667 0 204.8 0z m477.866667 730.453333c20.48 0 68.266667 0 68.266666-47.786666 0-20.48-6.826667-47.786667-68.266666-47.786667-27.306667 0-54.613333 6.826667-81.92 6.826667-34.133333-27.306667-68.266667-61.44-88.746667-102.4 20.48-75.093333 20.48-122.88 6.826667-150.186667-6.826667-6.826667-20.48-13.653333-34.133334-13.653333-20.48 0-34.133333 6.826667-40.96 20.48-20.48 40.96 13.653333 116.053333 27.306667 150.186666-20.48 54.613333-40.96 109.226667-68.266667 163.84C273.066667 764.586667 273.066667 798.72 273.066667 812.373333c0 13.653333 6.826667 27.306667 20.48 34.133334 6.826667 6.826667 13.653333 6.826667 20.48 6.826666 34.133333 0 68.266667-34.133333 116.053333-109.226666 54.613333-20.48 102.4-40.96 157.013333-47.786667 27.306667 20.48 61.44 34.133333 95.573334 34.133333zM491.52 416.426667c6.826667 20.48 6.826667 47.786667 0 68.266666-13.653333-20.48-13.653333-40.96-13.653333-68.266666h13.653333z m-177.493333 395.946666c13.653333-20.48 27.306667-27.306667 47.786666-40.96-13.653333 20.48-27.306667 34.133333-47.786666 40.96z m184.32-204.8c13.653333 20.48 34.133333 47.786667 54.613333 68.266667H546.133333c-27.306667 6.826667-61.44 13.653333-88.746666 27.306667 13.653333-34.133333 27.306667-61.44 40.96-95.573334z m177.493333 68.266667c27.306667 0 34.133333 6.826667 34.133333 13.653333-6.826667 0-20.48 6.826667-27.306666 0-13.653333 0-27.306667-6.826667-40.96-13.653333h34.133333z",
  fill: "#F1416C",
  "p-id": "8448"
}, null, -1), j8 = /* @__PURE__ */ P("path", {
  d: "M682.666667 0l273.066666 273.066667h-204.8c-40.96 0-68.266667-27.306667-68.266666-68.266667V0z",
  fill: "#f78cbc",
  "p-id": "8449"
}, null, -1), W8 = [
  U8,
  j8
], q8 = {
  key: 6,
  t: "1686300195363",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "8602",
  width: "200",
  height: "200"
}, Y8 = /* @__PURE__ */ P("path", {
  d: "M204.8 0h477.866667l273.066666 273.066667v614.4c0 75.093333-61.44 136.533333-136.533333 136.533333H204.8c-75.093333 0-136.533333-61.44-136.533333-136.533333V136.533333C68.266667 61.44 129.706667 0 204.8 0z m341.333333 512h136.533334c20.48 0 34.133333-13.653333 34.133333-34.133333s-13.653333-34.133333-34.133333-34.133334H341.333333c-20.48 0-34.133333 13.653333-34.133333 34.133334s13.653333 34.133333 34.133333 34.133333h136.533334V819.2c0 20.48 13.653333 34.133333 34.133333 34.133333s34.133333-13.653333 34.133333-34.133333V512z",
  fill: "#029EF7",
  "p-id": "8603"
}, null, -1), G8 = /* @__PURE__ */ P("path", {
  d: "M682.666667 0l273.066666 273.066667h-204.8c-40.96 0-68.266667-27.306667-68.266666-68.266667V0z",
  fill: "#64b5ed",
  "p-id": "8604"
}, null, -1), Q8 = [
  Y8,
  G8
], Z8 = {
  key: 7,
  t: "1686300209288",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "8757",
  width: "200",
  height: "200"
}, K8 = /* @__PURE__ */ P("path", {
  d: "M204.8 0h477.866667l273.066666 273.066667v614.4c0 75.093333-61.44 136.533333-136.533333 136.533333H204.8c-75.093333 0-136.533333-61.44-136.533333-136.533333V136.533333C68.266667 61.44 129.706667 0 204.8 0z m464.213333 375.466667l-232.106666 61.44c-27.306667 13.653333-47.786667 34.133333-47.786667 61.44v218.453333s-20.48-13.653333-54.613333-6.826667c-47.786667 6.826667-95.573333 47.786667-95.573334 88.746667 0 40.96 47.786667 61.44 95.573334 54.613333 54.613333-6.826667 95.573333-40.96 95.573333-81.92V559.786667c0-13.653333 27.306667-27.306667 27.306667-27.306667L655.36 477.866667s20.48-6.826667 20.48 13.653333v170.666667s-20.48-13.653333-54.613333-6.826667c-54.613333 6.826667-95.573333 40.96-95.573334 81.92s47.786667 68.266667 95.573334 61.44 95.573333-40.96 95.573333-81.92V409.6c0-27.306667-27.306667-40.96-47.786667-34.133333z",
  fill: "#FFA621",
  "p-id": "8758"
}, null, -1), X8 = /* @__PURE__ */ P("path", {
  d: "M682.666667 0l273.066666 273.066667h-204.8c-40.96 0-68.266667-27.306667-68.266666-68.266667V0z",
  fill: "#f5d37b",
  "p-id": "8759"
}, null, -1), J8 = [
  K8,
  X8
], ew = {
  key: 8,
  t: "1686300225262",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "8912",
  width: "200",
  height: "200"
}, tw = /* @__PURE__ */ P("path", {
  d: "M204.8 0h477.866667l273.066666 273.066667v614.4c0 75.093333-61.44 136.533333-136.533333 136.533333H204.8c-75.093333 0-136.533333-61.44-136.533333-136.533333V136.533333C68.266667 61.44 129.706667 0 204.8 0z m307.2 853.333333c150.186667 0 273.066667-122.88 273.066667-273.066666s-122.88-273.066667-273.066667-273.066667-273.066667 122.88-273.066667 273.066667 122.88 273.066667 273.066667 273.066666z m0-68.266666c-116.053333 0-204.8-88.746667-204.8-204.8s88.746667-204.8 204.8-204.8 204.8 88.746667 204.8 204.8-88.746667 204.8-204.8 204.8zM614.4 600.746667l6.826667-6.826667c6.826667-13.653333 6.826667-27.306667-6.826667-34.133333L484.693333 471.04s-6.826667-6.826667-13.653333-6.826667c-13.653333 0-27.306667 13.653333-27.306667 27.306667v170.666667c0 6.826667 0 13.653333 6.826667 13.653333 6.826667 13.653333 27.306667 13.653333 40.96 6.826667L614.4 600.746667z",
  fill: "#FFA621",
  "p-id": "8913"
}, null, -1), nw = /* @__PURE__ */ P("path", {
  d: "M682.666667 0l273.066666 273.066667h-204.8c-40.96 0-68.266667-27.306667-68.266666-68.266667V0z",
  fill: "#f5d37b",
  "p-id": "8914"
}, null, -1), rw = [
  tw,
  nw
], iw = {
  key: 9,
  t: "1692251753690",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "4336",
  width: "200",
  height: "200"
}, sw = /* @__PURE__ */ P("path", {
  d: "M192 0h448.170667l319.829333 320V896a128 128 0 0 1-128 128H192a128 128 0 0 1-128-128V128A128 128 0 0 1 192 0z",
  fill: "#00BD76",
  "p-id": "4337"
}, null, -1), ow = /* @__PURE__ */ P("path", {
  d: "M388.5056 631.261867H307.541333v54.852266h95.095467v33.8944H265.3184v-204.765866h136.977067v34.167466H307.5072v48.810667h80.9984v33.041067z m112.093867-45.397334l38.4-70.621866h48.503466l-59.630933 101.546666 61.201067 103.2192h-49.117867l-39.355733-71.714133-39.389867 71.68h-49.0496l61.166933-103.185067-59.630933-101.546666h48.503467l38.4 70.587733z m266.922666 65.9456c-0.648533 9.898667-3.037867 19.592533-7.0656 28.672-3.7888 8.533333-9.352533 16.1792-16.315733 22.4256-6.929067 6.2464-15.36 11.127467-25.258667 14.6432-9.864533 3.4816-21.128533 5.256533-33.792 5.256534-13.1072 0-24.917333-2.286933-35.362133-6.826667a72.260267 72.260267 0 0 1-26.555733-19.626667 89.019733 89.019733 0 0 1-16.725334-30.993066 133.597867 133.597867 0 0 1-5.870933-40.8576v-13.482667c0-15.121067 2.048-28.740267 6.0416-40.925867 4.061867-12.1856 9.728-22.528 17.1008-31.061333 7.338667-8.533333 16.4864-15.2576 26.794667-19.694933 10.478933-4.608 22.186667-6.894933 35.157333-6.894934 12.731733 0 24.029867 1.809067 33.792 5.393067 9.8304 3.618133 18.1248 8.635733 24.9856 15.0528 6.826667 6.485333 12.288 14.267733 16.042667 22.9376 3.822933 8.874667 6.2464 18.466133 7.304533 28.8768h-42.1888a63.829333 63.829333 0 0 0-3.1744-16.145067 31.744 31.744 0 0 0-7.099733-11.810133 29.354667 29.354667 0 0 0-11.946667-7.2704 55.944533 55.944533 0 0 0-17.749333-2.4576c-14.2336 0-24.849067 5.188267-31.812267 15.5648-6.997333 10.3424-10.478933 26.385067-10.478933 48.128v13.789867c0 10.581333 0.750933 19.899733 2.321066 27.8528 1.536 7.953067 3.959467 14.609067 7.304534 19.968a32.221867 32.221867 0 0 0 12.970666 12.014933c5.256533 2.696533 11.639467 4.027733 19.182934 4.027733 6.656 0 12.3904-0.750933 17.2032-2.2528a30.549333 30.549333 0 0 0 12.0832-6.826666 30.685867 30.685867 0 0 0 7.509333-11.4688c1.809067-4.573867 2.935467-9.898667 3.413333-16.042667h42.154667z",
  fill: "#FFFFFF",
  opacity: ".9",
  "p-id": "4338"
}, null, -1), aw = /* @__PURE__ */ P("path", {
  d: "M640 0l320 320H768a128 128 0 0 1-128-128V0z",
  fill: "#19EA9C",
  "p-id": "4339"
}, null, -1), lw = [
  sw,
  ow,
  aw
], cw = /* @__PURE__ */ He({
  __name: "FileIcon",
  props: {
    type: {
      type: String,
      default: "unknow"
    }
  },
  setup(t) {
    return (e, n) => t.type === "unknow" ? (T(), $("svg", y8, S8)) : t.type === "image" ? (T(), $("svg", E8, T8)) : t.type === "zip" ? (T(), $("svg", R8, O8)) : t.type === "ppt" ? (T(), $("svg", N8, P8)) : t.type === "word" ? (T(), $("svg", $8, z8)) : t.type === "pdf" ? (T(), $("svg", V8, W8)) : t.type === "txt" ? (T(), $("svg", q8, Q8)) : t.type === "audio" ? (T(), $("svg", Z8, J8)) : t.type === "video" ? (T(), $("svg", ew, rw)) : t.type === "excal" ? (T(), $("svg", iw, lw)) : re("", !0);
  }
}), Ku = (t) => t % 1 === 0 ? t.toString() : t.toFixed(2), uw = { class: "ik-flie-list" }, dw = { class: "name" }, fw = { key: 1 }, hw = ["src"], pw = { class: "file-icon" }, gw = { class: "file-name-loading" }, vw = { class: "file-name" }, mw = { key: 0 }, bw = {
  key: 0,
  class: "file-size"
}, yw = { class: "name" }, xw = { class: "file-name-loading" }, _w = { class: "file-name" }, ww = { class: "file-size" }, Sw = { class: "operate-btn" }, Ew = /* @__PURE__ */ He({
  __name: "index",
  props: {
    // 显示的文字
    title: {
      type: String,
      default: "上传文件"
    },
    // 上传地址
    action: {
      type: String,
      default: ""
    },
    // 设置上传的请求头部
    headers: {
      type: Object,
      default: () => ({})
    },
    // 预览地址
    loadUrl: {
      type: String,
      default: ""
    },
    // 最多上传数量
    limit: {
      type: Number,
      default: 1
    },
    // 单个文件大小 MB
    size: {
      type: Number,
      default: 50
    },
    // 允许的格式
    accept: {
      type: String,
      default: "*"
    },
    // 支持多选
    multiple: {
      type: Boolean,
      default: !0
    },
    // 显示提示
    tip: {
      type: Boolean,
      default: !1
    },
    // 提示文字
    tipText: {
      type: String,
      default: ""
    },
    // 提示文字
    limitText: {
      type: String,
      default: ""
    },
    // 回显列表数据格式： [{url: '', name: ''}, {url: '', name: ''}]
    modelValue: {
      type: Array,
      default: () => []
    },
    defaultFileds: {
      type: Object,
      default: () => ({
        name: "name",
        url: "url",
        suffix: "suffix"
      })
    },
    // 预览模式 - 为true时不显示上传元素
    preview: {
      type: Boolean,
      default: !1
    },
    // 自定义替图标数据
    customIconData: {
      type: Object,
      default: () => ({})
    },
    // 自定义图标映射字段
    customIconFields: {
      type: Object,
      default: () => ({
        type: "type",
        icon: "icon"
      })
    },
    // 在线预览地址
    onlinePreviewUrl: {
      type: String,
      default: ""
    }
  },
  emits: ["delete", "exceed", "success", "error", "outSize"],
  setup(t, { emit: e }) {
    const n = t, i = {
      ...{
        name: "name",
        url: "url",
        suffix: "suffix"
      },
      ...n.defaultFileds
    }, s = ye(() => n.size), o = fe(null), a = fe(null), l = fe(n.modelValue);
    dt(
      () => n.modelValue,
      (k) => {
        l.value = k;
      },
      { deep: !0 }
    );
    const c = fe([]), u = fe(!1), h = fe(!1), d = fe(null), f = (k, R) => {
      l.value = st.cloneDeep(R);
    }, g = (k) => {
      const R = k.size / 1024 / 1024;
      if (!(R < s.value)) {
        e("outSize"), Qr({
          message: `上传文件大小(${R.toFixed(4)}MB)超出允许最大值(${n.size}MB)，请重新选择`,
          type: "warning",
          showClose: !0,
          duration: 5e3
        });
        const V = l.value.findIndex((j) => j.uid === k.uid);
        return l.value.splice(V, 1), !1;
      }
      return !0;
    }, p = () => !1, v = (k, R) => {
      var N, V;
      k.status = "ready", R !== void 0 && c.value.splice(R, 1), (N = o.value) == null || N.handleStart(k.raw), (V = o.value) == null || V.submit();
    }, m = (k, R) => {
      var W, J;
      const N = l.value.length, V = n.limit - N;
      let j = 0;
      for (; j < V && j < k.length; )
        (W = o.value) == null || W.handleStart(k[j]), (J = o.value) == null || J.submit(), j++;
      Qr({
        message: (n == null ? void 0 : n.limitText) || `最大可上传${n.limit}个文件，已忽略超出文件`,
        type: "warning",
        showClose: !0,
        duration: 5e3
      }), e("exceed", k);
    }, x = (k, R, N) => {
      e("success", k, R, N);
    }, b = (k, R, N) => {
      c.value.push(R), e("error", k, R, N);
    }, _ = (k) => {
      k && I(k) === "video" || k && I(k) === "image" ? (d.value = {
        ...k,
        url: k[i.url].startsWith("http") ? k[i.url] : `${n.loadUrl}${k[i.url]}`
      }, u.value = !0) : window.open(n.loadUrl + k[i.url]);
    }, w = (k) => {
      Sf.downloadByOnlineUrl(
        k[i.url],
        k[i.name]
      );
    }, S = (k, R = !1) => {
      var N;
      (N = o.value) == null || N.abort(k);
    }, y = (k) => {
      var R;
      k.status !== "success" && S(k), (R = o.value) == null || R.handleRemove(k), l.value = l.value.filter((N) => N.uid !== k.uid), e("delete", k);
    }, E = (k, R) => {
      c.value.splice(R, 1);
    }, I = (k) => {
      var V, j, W, J, le;
      const R = (V = k == null ? void 0 : k.response) != null && V.data ? A((W = (j = k == null ? void 0 : k.response) == null ? void 0 : j.data) == null ? void 0 : W.suffix) : ((J = k.raw) == null ? void 0 : J.type) || A(k[i.suffix]), N = ((le = k.raw) == null ? void 0 : le.name) || k[i.name];
      return R != null && R.includes("sheet") || R === "excal" ? "excal" : R != null && R.includes("zip") || R === "zip" || R === "application/x-compressed" ? "zip" : R != null && R.includes("image") || R === "image" ? "image" : R != null && R.includes("video") || R === "video" ? "video" : R != null && R.includes("audio") || R === "audio" ? "audio" : R != null && R.includes("pdf") || R === "pdf" ? "pdf" : R != null && R.includes("text") || R === "txt" ? "txt" : R != null && R.includes("word") || R === "word" ? "word" : N != null && N.includes("ppt") || R === "ppt" ? "ppt" : "unknow";
    }, A = (k) => {
      const R = k == null ? void 0 : k.toLocaleLowerCase();
      switch (R != null && R.startsWith(".") ? R : `.${R}`) {
        case ".doc":
        case ".docx":
        case ".docxf":
        case ".docm":
        case ".dot":
        case ".dotm":
        case ".dotx":
        case ".epub":
        case ".fodt":
        case ".htm":
        case ".html":
        case ".mht":
        case ".odt":
        case ".ott":
        case ".rtf":
        case ".txt":
        case ".djvu":
        case ".oxps":
        case ".oform":
        case ".fb2":
        case ".xml":
        case ".xps":
          return "word";
        case ".csv":
        case ".xls":
        case ".xlsx":
        case ".fods":
        case ".ods":
        case ".ots":
        case ".xlsb":
        case ".xlsm":
        case ".xlt":
        case ".xltm":
        case ".xltx":
          return "excal";
        case ".fodp":
        case ".odp":
        case ".otp":
        case ".pot":
        case ".potm":
        case ".potx":
        case ".pps":
        case ".ppsm":
        case ".ppsx":
        case ".ppt":
        case ".pptm":
        case ".pptx":
          return "ppt";
        case ".zip":
        case ".rar":
        case ".7z":
        case ".apz":
        case ".ar":
        case ".bz":
        case ".car":
        case ".dar":
        case ".cpgz":
        case ".f":
        case ".ha":
        case ".hbc":
        case ".hbc2":
        case ".hbe":
        case ".hpk":
        case ".hyp":
          return "zip";
        case ".png":
        case ".jpg":
        case ".jpeg":
        case ".bmp":
        case ".gif":
        case ".webp":
        case ".psd":
        case ".svg":
        case ".tiff":
          return "image";
        case ".avi":
        case ".wmv":
        case ".mpeg":
        case ".mp4":
        case ".mpm4v":
        case ".mov":
        case ".asf":
        case ".flv":
        case ".f4v":
        case ".rmvb":
        case ".rm":
        case ".3gp":
        case ".vob":
          return "video";
        case "audio":
          return "audio";
        case ".txt":
          return "txt";
        case ".pdf":
          return "pdf";
        case k:
        case "":
          return "unknow";
      }
    };
    return (k, R) => {
      var V, j;
      const N = Me("el-image-viewer");
      return T(), $(Ae, null, [
        M(F(Id), {
          "file-list": l.value,
          "onUpdate:fileList": R[0] || (R[0] = (W) => l.value = W),
          class: $e(["ik-file-upload", { preview: t.preview }]),
          accept: t.accept,
          action: t.action,
          ref_key: "refUpload",
          ref: o,
          "on-change": f,
          "before-upload": g,
          "before-remove": p,
          "on-exceed": m,
          multiple: t.multiple,
          headers: t.headers,
          limit: t.limit,
          "on-success": x,
          "on-error": b
        }, {
          trigger: Q(() => [
            k.$slots.trigger ? Je(k.$slots, "trigger", { key: 0 }, void 0, !0) : (T(), de(F(Rt), {
              key: 1,
              type: "primary",
              disabled: l.value.length === t.limit,
              icon: F(wp)
            }, {
              default: Q(() => [
                Te(pe(t.title), 1)
              ]),
              _: 1
            }, 8, ["disabled", "icon"]))
          ]),
          file: Q(({ file: W }) => [
            P("div", uw, [
              P("div", dw, [
                !k.$slots.fileIcon && (!t.customIconData[I(W)] || !t.customIconData[I(W)][t.customIconFields.icon]) ? (T(), de(cw, {
                  key: 0,
                  type: I(W)
                }, null, 8, ["type"])) : !k.$slots.fileIcon && t.customIconData[I(W)] && t.customIconData[I(W)][t.customIconFields.icon] ? (T(), $("div", fw, [
                  t.customIconData[I(W)][t.customIconFields.type] === "img" ? (T(), $("img", {
                    key: 0,
                    src: t.customIconData[I(W)][t.customIconFields.icon],
                    alt: "",
                    class: "file-img-icon"
                  }, null, 8, hw)) : (T(), $("span", {
                    key: 1,
                    class: $e([
                      t.customIconData[I(W)][t.customIconFields.icon],
                      "file-icon-size"
                    ])
                  }, null, 2))
                ])) : re("", !0),
                P("div", pw, [
                  Je(k.$slots, "fileIcon", { file: W }, void 0, !0)
                ]),
                P("div", gw, [
                  P("p", vw, [
                    Te(pe(W[i.name] || W.name) + " ", 1),
                    W.percentage && W.percentage !== 100 ? (T(), $("span", mw, "(" + pe(W.percentage) + "%)", 1)) : re("", !0)
                  ]),
                  W.percentage === 100 ? (T(), $("p", bw, pe(F(Ku)(W.size / 1024 / 1024)) + "MB ", 1)) : re("", !0),
                  W.percentage && W.percentage !== 100 ? (T(), de(F(Rp), {
                    key: 1,
                    "text-inside": "",
                    percentage: W.percentage,
                    color: "var(--el-color-primary)",
                    "striped-flow": "",
                    striped: "",
                    "show-text": !1
                  }, null, 8, ["percentage"])) : re("", !0)
                ])
              ]),
              t.preview ? (T(), $(Ae, { key: 1 }, [
                t.preview || W.percentage === 100 ? (T(), de(F(it), {
                  key: 0,
                  title: "预览",
                  class: "primary"
                }, {
                  default: Q(() => [
                    M(F(Ep), {
                      onClick: (J) => _(W)
                    }, null, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024)) : re("", !0),
                M(F(it), {
                  title: "下载",
                  class: "primary"
                }, {
                  default: Q(() => [
                    M(F(Ed), {
                      onClick: (J) => w(W)
                    }, null, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024)
              ], 64)) : (T(), $(Ae, { key: 0 }, [
                W.status === "success" ? (T(), de(F(it), {
                  key: 0,
                  title: "删除",
                  class: "error"
                }, {
                  default: Q(() => [
                    M(F(ji), {
                      onClick: (J) => y(W)
                    }, null, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024)) : (T(), de(F(it), {
                  key: 1,
                  title: "取消上传"
                }, {
                  default: Q(() => [
                    M(F(Sp), {
                      onClick: (J) => y(W)
                    }, null, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))
              ], 64))
            ])
          ]),
          default: Q(() => {
            var W;
            return [
              !t.preview && t.tip ? (T(), de(F(Ip), {
                key: 0,
                effect: "dark",
                content: n.tipText || "",
                "popper-class": "_ik_web_ui_file-help-tooltip"
              }, {
                default: Q(() => [
                  M(F(it), {
                    size: 23,
                    class: "_ik_web_ui_file_help_icon"
                  }, {
                    default: Q(() => [
                      M(F(Cp))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["content"])) : re("", !0),
              (W = c.value) != null && W.length ? (T(!0), $(Ae, { key: 1 }, qe(c.value, (J, le) => (T(), $("div", {
                class: "ik-error-flie-list",
                key: J.uid
              }, [
                P("div", yw, [
                  M(F(it), {
                    size: 32,
                    class: "info",
                    style: { "vertical-align": "middle" }
                  }, {
                    default: Q(() => [
                      M(F(kp))
                    ]),
                    _: 1
                  }),
                  P("div", xw, [
                    P("p", _w, pe(J[i.name] || J.name), 1),
                    P("p", ww, pe(F(Ku)(J.size / 1024 / 1024)) + "MB ", 1)
                  ])
                ]),
                Ot(P("div", Sw, [
                  M(F(it), {
                    style: { "vertical-align": "middle" },
                    onClick: (ie) => v(J, le),
                    title: "重新上传",
                    class: "primary"
                  }, {
                    default: Q(() => [
                      M(F(Ha))
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  M(F(it), {
                    class: "error",
                    onClick: (ie) => E(J, le),
                    title: "删除"
                  }, {
                    default: Q(() => [
                      M(F(ji))
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ], 512), [
                  [br, (J == null ? void 0 : J.status) === "fail"]
                ])
              ]))), 128)) : re("", !0)
            ];
          }),
          _: 3
        }, 8, ["file-list", "class", "accept", "action", "multiple", "headers", "limit"]),
        M(wh, {
          visible: u.value,
          "onUpdate:visible": R[1] || (R[1] = (W) => u.value = W),
          file: d.value,
          fileType: d.value && I(d.value),
          defaultFields: i
        }, null, 8, ["visible", "file", "fileType"]),
        (V = d.value) != null && V.url && h.value ? (T(), de(N, {
          key: 0,
          onClose: R[2] || (R[2] = (W) => (d.value = null, h.value = !1)),
          ref_key: "previewImgRef",
          ref: a,
          "url-list": [(j = d.value) == null ? void 0 : j.url]
        }, null, 8, ["url-list"])) : re("", !0)
      ], 64);
    };
  }
});
const Cw = /* @__PURE__ */ ze(Ew, [["__scopeId", "data-v-37fe21f0"]]), uk = tt(Cw), kw = {}, Aw = {
  t: "1686214149488",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "8490",
  width: "200",
  height: "200"
}, Dw = /* @__PURE__ */ P("path", {
  d: "M369.569592 512.011256c0-14.328333-11.010775-25.945929-24.591071-25.945929L86.980515 486.065328c-13.580297 0-24.591071 11.618619-24.591071 25.945929 0 14.33038 11.010775 25.947975 24.591071 25.947975l257.998005 0C358.55984 537.959232 369.569592 526.341636 369.569592 512.011256z",
  "p-id": "8491"
}, null, -1), Tw = /* @__PURE__ */ P("path", {
  d: "M937.019485 486.064304 679.020456 486.064304c-13.580297 0-24.591071 11.618619-24.591071 25.945929 0 14.33038 11.010775 25.947975 24.591071 25.947975l257.999029 0c13.580297 0 24.590048-11.618619 24.590048-25.947975C961.609533 497.682923 950.598758 486.064304 937.019485 486.064304z",
  "p-id": "8492"
}, null, -1), Rw = /* @__PURE__ */ P("path", {
  d: "M512.011768 62.389956c-13.580297 0-24.590048 11.618619-24.590048 25.945929l0 257.170151c0 14.329357 11.010775 25.946952 24.590048 25.946952s24.591071-11.618619 24.591071-25.946952L536.602839 88.335884C536.602839 74.008574 525.591041 62.389956 512.011768 62.389956z",
  "p-id": "8493"
}, null, -1), Iw = /* @__PURE__ */ P("path", {
  d: "M512.011768 652.544967c-13.580297 0-24.590048 11.618619-24.590048 25.946952l0 257.169127c0 14.33038 11.010775 25.947975 24.590048 25.947975s24.591071-11.618619 24.591071-25.947975L536.602839 678.491918C536.602839 664.162562 525.591041 652.544967 512.011768 652.544967z",
  "p-id": "8494"
}, null, -1), Mw = /* @__PURE__ */ P("path", {
  d: "M377.001865 413.125085c4.744048 4.737908 10.818393 7.082302 16.882506 7.082302 6.519484 0 13.039991-2.724041 17.879206-8.134261 9.317203-10.414187 8.885368-26.834158-0.9967-36.678364L228.341057 193.559391c-9.832949-9.830903-25.406646-9.388834-34.760688 1.050935-9.317203 10.414187-8.885368 26.834158 0.9967 36.678364L377.001865 413.125085z",
  "p-id": "8495"
}, null, -1), Ow = /* @__PURE__ */ P("path", {
  d: "M646.997112 610.873892c-9.846252-9.831926-25.419949-9.388834-34.761712 1.051959-9.317203 10.414187-8.885368 26.834158 0.997724 36.678364l182.41354 181.834348c4.743024 4.738931 10.818393 7.083326 16.881482 7.083326 6.520507 0 13.039991-2.723018 17.879206-8.134261 9.317203-10.41521 8.886391-26.834158-0.9967-36.678364L646.997112 610.873892z",
  "p-id": "8496"
}, null, -1), Nw = /* @__PURE__ */ P("path", {
  d: "M630.114606 420.207387c6.064113 0 12.139481-2.344395 16.882506-7.082302l182.425819-181.836395c9.882068-9.844206 10.313903-26.264177 0.9967-36.678364-9.341762-10.43977-24.915459-10.882861-34.760688-1.050935L613.233124 375.394762c-9.882068 9.844206-10.314926 26.264177-0.997724 36.678364C617.074615 417.483346 623.595123 420.207387 630.114606 420.207387z",
  "p-id": "8497"
}, null, -1), Bw = /* @__PURE__ */ P("path", {
  d: "M377.025401 610.873892 194.600605 792.710286c-9.881045 9.844206-10.313903 26.263154-0.9967 36.678364 4.839215 5.411243 11.358699 8.134261 17.879206 8.134261 6.064113 0 12.138458-2.344395 16.881482-7.083326l182.425819-181.834348c9.881045-9.844206 10.313903-26.264177 0.9967-36.678364C402.469909 601.485057 386.872676 601.041966 377.025401 610.873892z",
  "p-id": "8498"
}, null, -1), Lw = [
  Dw,
  Tw,
  Rw,
  Iw,
  Mw,
  Ow,
  Nw,
  Bw
];
function Pw(t, e) {
  return T(), $("svg", Aw, Lw);
}
const $w = /* @__PURE__ */ ze(kw, [["render", Pw]]), Sh = (t) => (Ar("data-v-080679d7"), t = t(), Dr(), t), Hw = {
  key: 1,
  class: "upload-btn"
}, Fw = { class: "tip" }, zw = { class: "loading-statu" }, Vw = { class: "operate-btn" }, Uw = { key: 0 }, jw = {
  class: "el-upload-list el-upload-list--picture-card",
  style: { float: "left" }
}, Ww = ["onClick"], qw = /* @__PURE__ */ Sh(() => /* @__PURE__ */ P("span", { class: "error" }, "上传错误", -1)), Yw = /* @__PURE__ */ Sh(() => /* @__PURE__ */ P("p", null, "点击重新上传", -1)), Gw = ["src"], Qw = { class: "demo-image__preview" }, Zw = /* @__PURE__ */ He({
  __name: "index",
  props: {
    // 显示的文字
    title: {
      type: String,
      default: "上传图片"
    },
    // 预览地址
    loadUrl: {
      type: String,
      default: ""
    },
    // 上传地址
    action: {
      type: String,
      default: ""
    },
    // 最多上传图片数量
    limit: {
      type: Number,
      default: 5
    },
    // 单张图片大小 MB
    size: {
      type: Number,
      default: 50
    },
    // 允许的图片格式
    // image/* 或者 image/png, image/jpeg 或者.png, .jpg, .jpeg格式都可以
    accept: {
      type: String,
      default: "image/*"
    },
    // 图片填充方式
    fit: {
      type: String,
      default: "contain"
    },
    // 预览模式 - 为true时不显示上传元素
    preview: {
      type: Boolean,
      default: !1
    },
    // 支持多选
    multiple: {
      type: Boolean,
      default: !0
    },
    // 显示提示
    tip: {
      type: Boolean,
      default: !1
    },
    // 提示文字
    tipText: {
      type: String,
      default: ""
    },
    // 回显列表数据格式： [{url: ''}, {url: ''}]
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["delete", "success"],
  setup(t, { emit: e }) {
    const n = t;
    dt(
      () => n.modelValue,
      (S) => {
        s.value = S.map((y) => {
          var E;
          return {
            ...y,
            __url: (E = y.url) != null && E.startsWith("http") ? y.url : `${n.loadUrl}${y.url}`
          };
        });
      },
      { deep: !0 }
    );
    const r = ye(() => n.size), i = fe(null), s = fe(n.modelValue.map((S) => {
      var y;
      return {
        ...S,
        __url: (y = S.url) != null && y.startsWith("http") ? S.url : `${n.loadUrl}${S.url}`
      };
    })), o = fe([]), a = fe(!1), l = fe(0), c = ye(
      () => n.tipText || `最多可上传${n.limit}张图片, 每张图片不能超过${n.size}MB`
    ), u = (S, y) => {
      s.value = st.cloneDeep(y.map((E) => {
        var I;
        return {
          ...E,
          __url: (I = E.url) != null && I.startsWith("http") ? E.url : `${n.loadUrl}${E.url}`
        };
      }));
    }, h = (S) => !(!(S.type === "image/jpeg" || S.type === "image/png") || !(S.size / 1024 / 1024 < r.value)), d = () => !1, f = (S, y) => {
      var E, I;
      S.status = "ready", y !== void 0 && o.value.splice(y, 1), (E = i.value) == null || E.handleStart(S.raw), (I = i.value) == null || I.submit();
    }, g = (S, y) => {
      var k, R;
      const E = s.value.length, I = n.limit - E;
      let A = 0;
      for (; A < I && A < S.length; )
        (k = i.value) == null || k.handleStart(S[A]), (R = i.value) == null || R.submit(), A++;
    }, p = (S, y, E) => {
      e("success", S, y, E);
    }, v = (S, y, E) => {
      o.value.push(y);
    }, m = (S) => {
      a.value = !0, l.value = s.value.findIndex((y) => y.url === S.url);
    }, x = (S) => {
      Sf.downloadByOnlineUrl(S.__url, S.name);
    }, b = (S) => {
      var y;
      (y = i.value) == null || y.abort(S);
    }, _ = (S) => {
      var y;
      S.status !== "success" && b(S), (y = i.value) == null || y.handleRemove(S), s.value = s.value.filter((E) => E.uid !== S.uid), e("delete", S);
    }, w = (S, y) => {
      o.value.splice(y, 1);
    };
    return (S, y) => (T(), $(Ae, null, [
      M(F(Id), {
        class: $e(["ik-image-upload", { preview: t.preview }]),
        ref_key: "refUpload",
        ref: i,
        "list-type": "picture-card",
        accept: t.accept,
        action: t.action,
        "file-list": s.value,
        "onUpdate:fileList": y[0] || (y[0] = (E) => s.value = E),
        multiple: t.multiple,
        limit: t.limit,
        "on-change": u,
        "before-upload": h,
        "before-remove": d,
        "on-exceed": g,
        "on-success": p,
        "on-error": v,
        drag: ""
      }, Pa({
        trigger: Q(() => [
          S.$slots.trigger ? Je(S.$slots, "trigger", { key: 0 }, void 0, !0) : (T(), $("div", Hw, [
            M(F(it), null, {
              default: Q(() => [
                M(F(md))
              ]),
              _: 1
            }),
            P("span", null, pe(t.title), 1)
          ]))
        ]),
        file: Q(({ file: E }) => [
          P("div", {
            class: $e(["load-list", { loading: E.status === "uploading" }]),
            "element-loading-background": "var(--ik-upload-bg)"
          }, [
            Ot(P("div", zw, [
              M($w),
              Te(" 上传" + pe(E.percentage) + "% ", 1)
            ], 512), [
              [br, E.status === "uploading"]
            ]),
            M(F(Mp), {
              style: { width: "100%", height: "100%" },
              src: E.__url,
              "zoom-rate": 1.2,
              "initial-index": 0,
              fit: "contain"
            }, null, 8, ["src"]),
            P("span", Vw, [
              P("span", null, [
                M(F(it), {
                  onClick: (I) => m(E)
                }, {
                  default: Q(() => [
                    M(F(Ap))
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              P("span", null, [
                M(F(it), {
                  onClick: (I) => x(E)
                }, {
                  default: Q(() => [
                    M(F(Ed))
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              t.preview ? re("", !0) : (T(), $("span", Uw, [
                M(F(it), {
                  onClick: (I) => _(E)
                }, {
                  default: Q(() => [
                    M(F(ji))
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]))
            ])
          ], 2)
        ]),
        default: Q(() => [
          P("ul", jw, [
            (T(!0), $(Ae, null, qe(o.value, (E, I) => (T(), $("li", {
              class: "el-upload-list__item",
              key: E.uid
            }, [
              P("span", null, [
                M(F(it), {
                  onClick: (A) => w(E, I)
                }, {
                  default: Q(() => [
                    M(F(_d))
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              P("div", {
                class: $e(["load-list", {
                  loading: E.status === "uploading",
                  fail: E.status === "fail"
                }]),
                "element-loading-background": "var(--ik-upload-bg)"
              }, [
                Ot(P("div", {
                  class: "loading-statu",
                  onClick: (A) => f(E, I)
                }, [
                  M(F(it), { size: 24 }, {
                    default: Q(() => [
                      M(F(Ha))
                    ]),
                    _: 1
                  }),
                  qw,
                  Yw
                ], 8, Ww), [
                  [br, E.status === "fail"]
                ]),
                P("img", {
                  src: E.__url,
                  alt: "",
                  style: Oe({ "object-fit": t.fit })
                }, null, 12, Gw)
              ], 2)
            ]))), 128))
          ])
        ]),
        _: 2
      }, [
        t.tip ? {
          name: "tip",
          fn: Q(() => [
            P("span", Fw, pe(c.value), 1)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["class", "accept", "action", "file-list", "multiple", "limit"]),
      P("div", Qw, [
        a.value ? (T(), de(F(Op), {
          key: 0,
          "hide-on-click-modal": "",
          onClose: y[1] || (y[1] = () => {
            a.value = !1;
          }),
          "url-list": s.value.map((E) => E.__url),
          "initial-index": l.value
        }, null, 8, ["url-list", "initial-index"])) : re("", !0)
      ])
    ], 64));
  }
});
const Kw = /* @__PURE__ */ ze(Zw, [["__scopeId", "data-v-080679d7"]]), dk = tt(Kw), Xw = ["src"], Jw = {
  name: "IkPrintConfig"
}, e7 = /* @__PURE__ */ He({
  ...Jw,
  props: {
    id: {},
    srcPrefix: { default: "" },
    token: {}
  },
  emits: ["created"],
  setup(t, { emit: e }) {
    const n = t, r = ye(() => !!n.id), i = rn({
      currentId: n.id,
      loading: !0,
      src: ""
    }), s = async () => {
      fetch(`${n.srcPrefix ?? ""}/jmreport/save`, {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
          "Content-Type": "application/json",
          Authorization: n.token ?? ""
        }
      }).then((a) => a.json()).then(({ code: a, result: l }) => {
        if (a === 200) {
          const c = l.id;
          i.currentId = c, i.src = `${n.srcPrefix ?? ""}/jmreport/index/${i.currentId}?token=${n.token}&menuType=printinfo`, e("created", i.currentId);
        }
      }).catch((a) => {
        console.error(a);
      });
    }, o = () => {
      if (!r.value) {
        s();
        return;
      }
      i.src = `${n.srcPrefix ?? ""}/jmreport/index/${i.currentId}?token=${n.token}`;
    };
    return kr(() => {
      o();
    }), (a, l) => i.src ? (T(), $("iframe", {
      key: 0,
      width: "100%",
      height: "100%",
      src: i.src,
      frameborder: "0"
    }, `\r
  `, 8, Xw)) : re("", !0);
  }
}), fk = tt(e7), t7 = ["src"], n7 = {
  name: "IkPrintView"
}, r7 = /* @__PURE__ */ He({
  ...n7,
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
  setup(t, { emit: e }) {
    const n = t, r = ye({
      get: () => n.modelValue,
      set: (o) => {
        e("update:modelValue", o);
      }
    }), i = rn({
      src: "",
      showIframe: !1
    }), s = () => {
      i.showIframe = !1, i.src = `${n.srcPrefix}/jmreport/view/${n.templateId}?token=${n.token ?? ""}&${n.idKey}=${n.dataId}`, setTimeout(() => {
        i.showIframe = !0;
      }, 300);
    };
    return dt(() => r.value, (o) => {
      o && s();
    }), kr(() => {
      r.value && s();
    }), (o, a) => {
      const l = Me("el-dialog");
      return T(), de(l, {
        modelValue: r.value,
        "onUpdate:modelValue": a[0] || (a[0] = (c) => r.value = c),
        fullscreen: "",
        title: "预览"
      }, {
        default: Q(() => [
          P("div", {
            style: Oe({ width: n.width, height: n.height })
          }, [
            i.showIframe ? (T(), $("iframe", {
              key: 0,
              width: "100%",
              height: "100%",
              src: i.src,
              frameborder: "0"
            }, null, 8, t7)) : re("", !0)
          ], 4)
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), hk = tt(r7), i7 = { class: "ik-full-calendar" }, s7 = ["onClick"], o7 = {
  key: 0,
  class: "event-title allday"
}, a7 = {
  key: 0,
  class: "event-title-time"
}, l7 = {
  key: 1,
  class: "event-title no-allday"
}, c7 = { class: "event-title-time" }, u7 = { class: "event-title-text" }, d7 = {
  name: "IkFullCalendar"
}, f7 = /* @__PURE__ */ He({
  ...d7,
  props: {
    options: { default: {} },
    removable: { type: Boolean, default: !0 },
    modelValue: { default: [] },
    tooltipFieldName: { default: "remark" }
  },
  emits: ["added", "deleted", "update:modelValue", "eventClick", "deleteClick", "dateSelect"],
  setup(t, { expose: e, emit: n }) {
    const r = t, i = ye({
      get: () => r.modelValue,
      set: (m) => n("update:modelValue", m)
    }), s = fe(null), o = (m) => {
    }, a = fe("dayGridMonth"), l = (m) => {
      n("dateSelect", m);
    }, c = (m) => {
      n("eventClick", m);
    }, u = (m) => {
      n("deleteClick", m);
    }, h = () => ({
      locale: Ef,
      plugins: [uh, xh, ph],
      headerToolbar: {
        left: "dayGridMonth,timeGridWeek,timeGridDay prev,today,next",
        center: "title",
        right: ""
      },
      firstDay: 1,
      // 设置一周中显示的第一天是哪天，周日是0，周一是1，类
      initialView: "dayGridMonth",
      weekends: !0,
      editable: !0,
      selectable: !0,
      selectMirror: !0,
      dateClick: o,
      select: l,
      ...r.options,
      events: i.value
    }), d = rn({
      timeType: "month",
      options: h()
    }), f = fe(null), g = () => {
      var m;
      d.options = h(), (m = s.value) == null || m.buildOptions(d.options);
    };
    e({
      ...{
        // 
        prev: () => {
          var m;
          (m = f.value) == null || m.prev();
        },
        next: () => {
          var m;
          (m = f.value) == null || m.next();
        },
        today: () => {
          var m;
          (m = f.value) == null || m.today();
        },
        changeView: (m) => {
          var x;
          (x = f.value) == null || x.changeView(m), a.value = m;
        },
        getDate: () => {
          var m;
          return (m = f.value) == null ? void 0 : m.getDate();
        },
        getView: () => {
          var m;
          return (m = f.value) == null ? void 0 : m.view;
        },
        unselect: () => {
          var m;
          return (m = f.value) == null ? void 0 : m.unselect();
        }
      }
    }), dt(() => i.value, () => {
      g();
    });
    const v = () => {
      var m;
      f.value = (m = s.value) == null ? void 0 : m.getApi();
    };
    return kr(() => {
      v();
    }), (m, x) => {
      const b = Me("el-tooltip"), _ = Me("el-icon");
      return T(), $("div", i7, [
        M(F(rh), {
          ref_key: "_ref",
          ref: s,
          options: d.options,
          style: { height: "100%" }
        }, {
          eventContent: Q((w) => [
            P("div", {
              class: "title-line",
              onClick: (S) => c(w)
            }, [
              M(b, null, {
                content: Q(() => {
                  var S, y;
                  return [
                    Te(pe((y = (S = w.event) == null ? void 0 : S.extendedProps) == null ? void 0 : y[r.tooltipFieldName]), 1)
                  ];
                }),
                default: Q(() => [
                  w.event.allDay ? (T(), $("span", o7, [
                    a.value === "dayGridMonth" ? (T(), $("span", a7, pe("(全天)"))) : re("", !0),
                    P("span", null, pe(w.event.title), 1)
                  ])) : (T(), $("span", l7, [
                    P("span", c7, pe(F(ut).toDateTime(w.event.startStr, "HH:mm")), 1),
                    P("span", u7, pe(w.event.title), 1)
                  ]))
                ]),
                _: 2
              }, 1024),
              r.removable ? (T(), de(_, {
                key: 0,
                size: 16,
                onClick: Tt((S) => u(w), ["stop"])
              }, {
                default: Q(() => [
                  M(F(bd))
                ]),
                _: 2
              }, 1032, ["onClick"])) : re("", !0)
            ], 8, s7)
          ]),
          _: 1
        }, 8, ["options"])
      ]);
    };
  }
});
const h7 = /* @__PURE__ */ ze(f7, [["__scopeId", "data-v-421b620c"]]);
class pk {
  constructor() {
    // 唯一标识
    dn(this, "id", (/* @__PURE__ */ new Date()).getTime());
    // 日程标题
    dn(this, "title", "");
    // 开始时间
    dn(this, "start", "");
    // 结束时间
    dn(this, "end", "");
    // 是否全天
    dn(this, "allDay", !1);
    // 详情
    dn(this, "extendedProps", {});
  }
}
const p7 = tt(h7), Yr = /^[a-z0-9]+(-[a-z0-9]+)*$/, co = (t, e, n, r = "") => {
  const i = t.split(":");
  if (t.slice(0, 1) === "@") {
    if (i.length < 2 || i.length > 3)
      return null;
    r = i.shift().slice(1);
  }
  if (i.length > 3 || !i.length)
    return null;
  if (i.length > 1) {
    const a = i.pop(), l = i.pop(), c = {
      // Allow provider without '@': "provider:prefix:name"
      provider: i.length > 0 ? i[0] : r,
      prefix: l,
      name: a
    };
    return e && !zi(c) ? null : c;
  }
  const s = i[0], o = s.split("-");
  if (o.length > 1) {
    const a = {
      provider: r,
      prefix: o.shift(),
      name: o.join("-")
    };
    return e && !zi(a) ? null : a;
  }
  if (n && r === "") {
    const a = {
      provider: r,
      prefix: "",
      name: s
    };
    return e && !zi(a, n) ? null : a;
  }
  return null;
}, zi = (t, e) => t ? !!((t.provider === "" || t.provider.match(Yr)) && (e && t.prefix === "" || t.prefix.match(Yr)) && t.name.match(Yr)) : !1, Eh = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), qs = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), uo = Object.freeze({
  ...Eh,
  ...qs
}), Ta = Object.freeze({
  ...uo,
  body: "",
  hidden: !1
});
function g7(t, e) {
  const n = {};
  !t.hFlip != !e.hFlip && (n.hFlip = !0), !t.vFlip != !e.vFlip && (n.vFlip = !0);
  const r = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function Xu(t, e) {
  const n = g7(t, e);
  for (const r in Ta)
    r in qs ? r in t && !(r in n) && (n[r] = qs[r]) : r in e ? n[r] = e[r] : r in t && (n[r] = t[r]);
  return n;
}
function v7(t, e) {
  const n = t.icons, r = t.aliases || /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  function s(o) {
    if (n[o])
      return i[o] = [];
    if (!(o in i)) {
      i[o] = null;
      const a = r[o] && r[o].parent, l = a && s(a);
      l && (i[o] = [a].concat(l));
    }
    return i[o];
  }
  return (e || Object.keys(n).concat(Object.keys(r))).forEach(s), i;
}
function m7(t, e, n) {
  const r = t.icons, i = t.aliases || /* @__PURE__ */ Object.create(null);
  let s = {};
  function o(a) {
    s = Xu(
      r[a] || i[a],
      s
    );
  }
  return o(e), n.forEach(o), Xu(t, s);
}
function Ch(t, e) {
  const n = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return n;
  t.not_found instanceof Array && t.not_found.forEach((i) => {
    e(i, null), n.push(i);
  });
  const r = v7(t);
  for (const i in r) {
    const s = r[i];
    s && (e(i, m7(t, i, s)), n.push(i));
  }
  return n;
}
const b7 = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Eh
};
function Go(t, e) {
  for (const n in e)
    if (n in t && typeof t[n] != typeof e[n])
      return !1;
  return !0;
}
function kh(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !Go(t, b7))
    return null;
  const n = e.icons;
  for (const i in n) {
    const s = n[i];
    if (!i.match(Yr) || typeof s.body != "string" || !Go(
      s,
      Ta
    ))
      return null;
  }
  const r = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const i in r) {
    const s = r[i], o = s.parent;
    if (!i.match(Yr) || typeof o != "string" || !n[o] && !r[o] || !Go(
      s,
      Ta
    ))
      return null;
  }
  return e;
}
const Ju = /* @__PURE__ */ Object.create(null);
function y7(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function er(t, e) {
  const n = Ju[t] || (Ju[t] = /* @__PURE__ */ Object.create(null));
  return n[e] || (n[e] = y7(t, e));
}
function Dl(t, e) {
  return kh(e) ? Ch(e, (n, r) => {
    r ? t.icons[n] = r : t.missing.add(n);
  }) : [];
}
function x7(t, e, n) {
  try {
    if (typeof n.body == "string")
      return t.icons[e] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let ei = !1;
function Ah(t) {
  return typeof t == "boolean" && (ei = t), ei;
}
function _7(t) {
  const e = typeof t == "string" ? co(t, !0, ei) : t;
  if (e) {
    const n = er(e.provider, e.prefix), r = e.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function w7(t, e) {
  const n = co(t, !0, ei);
  if (!n)
    return !1;
  const r = er(n.provider, n.prefix);
  return x7(r, n.name, e);
}
function S7(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), ei && !e && !t.prefix) {
    let i = !1;
    return kh(t) && (t.prefix = "", Ch(t, (s, o) => {
      o && w7(s, o) && (i = !0);
    })), i;
  }
  const n = t.prefix;
  if (!zi({
    provider: e,
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = er(e, n);
  return !!Dl(r, t);
}
const Dh = Object.freeze({
  width: null,
  height: null
}), Th = Object.freeze({
  // Dimensions
  ...Dh,
  // Transformations
  ...qs
}), E7 = /(-?[0-9.]*[0-9]+[0-9.]*)/g, C7 = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ed(t, e, n) {
  if (e === 1)
    return t;
  if (n = n || 100, typeof t == "number")
    return Math.ceil(t * e * n) / n;
  if (typeof t != "string")
    return t;
  const r = t.split(E7);
  if (r === null || !r.length)
    return t;
  const i = [];
  let s = r.shift(), o = C7.test(s);
  for (; ; ) {
    if (o) {
      const a = parseFloat(s);
      isNaN(a) ? i.push(s) : i.push(Math.ceil(a * e * n) / n);
    } else
      i.push(s);
    if (s = r.shift(), s === void 0)
      return i.join("");
    o = !o;
  }
}
const k7 = (t) => t === "unset" || t === "undefined" || t === "none";
function A7(t, e) {
  const n = {
    ...uo,
    ...t
  }, r = {
    ...Th,
    ...e
  }, i = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let s = n.body;
  [n, r].forEach((g) => {
    const p = [], v = g.hFlip, m = g.vFlip;
    let x = g.rotate;
    v ? m ? x += 2 : (p.push(
      "translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"
    ), p.push("scale(-1 1)"), i.top = i.left = 0) : m && (p.push(
      "translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"
    ), p.push("scale(1 -1)"), i.top = i.left = 0);
    let b;
    switch (x < 0 && (x -= Math.floor(x / 4) * 4), x = x % 4, x) {
      case 1:
        b = i.height / 2 + i.top, p.unshift(
          "rotate(90 " + b.toString() + " " + b.toString() + ")"
        );
        break;
      case 2:
        p.unshift(
          "rotate(180 " + (i.width / 2 + i.left).toString() + " " + (i.height / 2 + i.top).toString() + ")"
        );
        break;
      case 3:
        b = i.width / 2 + i.left, p.unshift(
          "rotate(-90 " + b.toString() + " " + b.toString() + ")"
        );
        break;
    }
    x % 2 === 1 && (i.left !== i.top && (b = i.left, i.left = i.top, i.top = b), i.width !== i.height && (b = i.width, i.width = i.height, i.height = b)), p.length && (s = '<g transform="' + p.join(" ") + '">' + s + "</g>");
  });
  const o = r.width, a = r.height, l = i.width, c = i.height;
  let u, h;
  o === null ? (h = a === null ? "1em" : a === "auto" ? c : a, u = ed(h, l / c)) : (u = o === "auto" ? l : o, h = a === null ? ed(u, c / l) : a === "auto" ? c : a);
  const d = {}, f = (g, p) => {
    k7(p) || (d[g] = p.toString());
  };
  return f("width", u), f("height", h), d.viewBox = i.left.toString() + " " + i.top.toString() + " " + l.toString() + " " + c.toString(), {
    attributes: d,
    body: s
  };
}
const D7 = /\sid="(\S+)"/g, T7 = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let R7 = 0;
function I7(t, e = T7) {
  const n = [];
  let r;
  for (; r = D7.exec(t); )
    n.push(r[1]);
  if (!n.length)
    return t;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((s) => {
    const o = typeof e == "function" ? e(s) : e + (R7++).toString(), a = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"),
      "$1" + o + i + "$3"
    );
  }), t = t.replace(new RegExp(i, "g"), ""), t;
}
const Ra = /* @__PURE__ */ Object.create(null);
function M7(t, e) {
  Ra[t] = e;
}
function Ia(t) {
  return Ra[t] || Ra[""];
}
function Tl(t) {
  let e;
  if (typeof t.resources == "string")
    e = [t.resources];
  else if (e = t.resources, !(e instanceof Array) || !e.length)
    return null;
  return {
    // API hosts
    resources: e,
    // Root path
    path: t.path || "/",
    // URL length limit
    maxURL: t.maxURL || 500,
    // Timeout before next host is used.
    rotate: t.rotate || 750,
    // Timeout before failing query.
    timeout: t.timeout || 5e3,
    // Randomise default API end point.
    random: t.random === !0,
    // Start index
    index: t.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: t.dataAfterTimeout !== !1
  };
}
const Rl = /* @__PURE__ */ Object.create(null), Pr = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Vi = [];
for (; Pr.length > 0; )
  Pr.length === 1 || Math.random() > 0.5 ? Vi.push(Pr.shift()) : Vi.push(Pr.pop());
Rl[""] = Tl({
  resources: ["https://api.iconify.design"].concat(Vi)
});
function O7(t, e) {
  const n = Tl(e);
  return n === null ? !1 : (Rl[t] = n, !0);
}
function Il(t) {
  return Rl[t];
}
const N7 = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let td = N7();
function B7(t, e) {
  const n = Il(t);
  if (!n)
    return 0;
  let r;
  if (!n.maxURL)
    r = 0;
  else {
    let i = 0;
    n.resources.forEach((o) => {
      i = Math.max(i, o.length);
    });
    const s = e + ".json?icons=";
    r = n.maxURL - i - n.path.length - s.length;
  }
  return r;
}
function L7(t) {
  return t === 404;
}
const P7 = (t, e, n) => {
  const r = [], i = B7(t, e), s = "icons";
  let o = {
    type: s,
    provider: t,
    prefix: e,
    icons: []
  }, a = 0;
  return n.forEach((l, c) => {
    a += l.length + 1, a >= i && c > 0 && (r.push(o), o = {
      type: s,
      provider: t,
      prefix: e,
      icons: []
    }, a = l.length), o.icons.push(l);
  }), r.push(o), r;
};
function $7(t) {
  if (typeof t == "string") {
    const e = Il(t);
    if (e)
      return e.path;
  }
  return "/";
}
const H7 = (t, e, n) => {
  if (!td) {
    n("abort", 424);
    return;
  }
  let r = $7(e.provider);
  switch (e.type) {
    case "icons": {
      const s = e.prefix, a = e.icons.join(","), l = new URLSearchParams({
        icons: a
      });
      r += s + ".json?" + l.toString();
      break;
    }
    case "custom": {
      const s = e.uri;
      r += s.slice(0, 1) === "/" ? s.slice(1) : s;
      break;
    }
    default:
      n("abort", 400);
      return;
  }
  let i = 503;
  td(t + r).then((s) => {
    const o = s.status;
    if (o !== 200) {
      setTimeout(() => {
        n(L7(o) ? "abort" : "next", o);
      });
      return;
    }
    return i = 501, s.json();
  }).then((s) => {
    if (typeof s != "object" || s === null) {
      setTimeout(() => {
        s === 404 ? n("abort", s) : n("next", i);
      });
      return;
    }
    setTimeout(() => {
      n("success", s);
    });
  }).catch(() => {
    n("next", i);
  });
}, F7 = {
  prepare: P7,
  send: H7
};
function z7(t) {
  const e = {
    loaded: [],
    missing: [],
    pending: []
  }, n = /* @__PURE__ */ Object.create(null);
  t.sort((i, s) => i.provider !== s.provider ? i.provider.localeCompare(s.provider) : i.prefix !== s.prefix ? i.prefix.localeCompare(s.prefix) : i.name.localeCompare(s.name));
  let r = {
    provider: "",
    prefix: "",
    name: ""
  };
  return t.forEach((i) => {
    if (r.name === i.name && r.prefix === i.prefix && r.provider === i.provider)
      return;
    r = i;
    const s = i.provider, o = i.prefix, a = i.name, l = n[s] || (n[s] = /* @__PURE__ */ Object.create(null)), c = l[o] || (l[o] = er(s, o));
    let u;
    a in c.icons ? u = e.loaded : o === "" || c.missing.has(a) ? u = e.missing : u = e.pending;
    const h = {
      provider: s,
      prefix: o,
      name: a
    };
    u.push(h);
  }), e;
}
function Rh(t, e) {
  t.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((i) => i.id !== e));
  });
}
function V7(t) {
  t.pendingCallbacksFlag || (t.pendingCallbacksFlag = !0, setTimeout(() => {
    t.pendingCallbacksFlag = !1;
    const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
    if (!e.length)
      return;
    let n = !1;
    const r = t.provider, i = t.prefix;
    e.forEach((s) => {
      const o = s.icons, a = o.pending.length;
      o.pending = o.pending.filter((l) => {
        if (l.prefix !== i)
          return !0;
        const c = l.name;
        if (t.icons[c])
          o.loaded.push({
            provider: r,
            prefix: i,
            name: c
          });
        else if (t.missing.has(c))
          o.missing.push({
            provider: r,
            prefix: i,
            name: c
          });
        else
          return n = !0, !0;
        return !1;
      }), o.pending.length !== a && (n || Rh([t], s.id), s.callback(
        o.loaded.slice(0),
        o.missing.slice(0),
        o.pending.slice(0),
        s.abort
      ));
    });
  }));
}
let U7 = 0;
function j7(t, e, n) {
  const r = U7++, i = Rh.bind(null, n, r);
  if (!e.pending.length)
    return i;
  const s = {
    id: r,
    icons: e,
    callback: t,
    abort: i
  };
  return n.forEach((o) => {
    (o.loaderCallbacks || (o.loaderCallbacks = [])).push(s);
  }), i;
}
function W7(t, e = !0, n = !1) {
  const r = [];
  return t.forEach((i) => {
    const s = typeof i == "string" ? co(i, e, n) : i;
    s && r.push(s);
  }), r;
}
var q7 = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Y7(t, e, n, r) {
  const i = t.resources.length, s = t.random ? Math.floor(Math.random() * i) : t.index;
  let o;
  if (t.random) {
    let S = t.resources.slice(0);
    for (o = []; S.length > 1; ) {
      const y = Math.floor(Math.random() * S.length);
      o.push(S[y]), S = S.slice(0, y).concat(S.slice(y + 1));
    }
    o = o.concat(S);
  } else
    o = t.resources.slice(s).concat(t.resources.slice(0, s));
  const a = Date.now();
  let l = "pending", c = 0, u, h = null, d = [], f = [];
  typeof r == "function" && f.push(r);
  function g() {
    h && (clearTimeout(h), h = null);
  }
  function p() {
    l === "pending" && (l = "aborted"), g(), d.forEach((S) => {
      S.status === "pending" && (S.status = "aborted");
    }), d = [];
  }
  function v(S, y) {
    y && (f = []), typeof S == "function" && f.push(S);
  }
  function m() {
    return {
      startTime: a,
      payload: e,
      status: l,
      queriesSent: c,
      queriesPending: d.length,
      subscribe: v,
      abort: p
    };
  }
  function x() {
    l = "failed", f.forEach((S) => {
      S(void 0, u);
    });
  }
  function b() {
    d.forEach((S) => {
      S.status === "pending" && (S.status = "aborted");
    }), d = [];
  }
  function _(S, y, E) {
    const I = y !== "success";
    switch (d = d.filter((A) => A !== S), l) {
      case "pending":
        break;
      case "failed":
        if (I || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (y === "abort") {
      u = E, x();
      return;
    }
    if (I) {
      u = E, d.length || (o.length ? w() : x());
      return;
    }
    if (g(), b(), !t.random) {
      const A = t.resources.indexOf(S.resource);
      A !== -1 && A !== t.index && (t.index = A);
    }
    l = "completed", f.forEach((A) => {
      A(E);
    });
  }
  function w() {
    if (l !== "pending")
      return;
    g();
    const S = o.shift();
    if (S === void 0) {
      if (d.length) {
        h = setTimeout(() => {
          g(), l === "pending" && (b(), x());
        }, t.timeout);
        return;
      }
      x();
      return;
    }
    const y = {
      status: "pending",
      resource: S,
      callback: (E, I) => {
        _(y, E, I);
      }
    };
    d.push(y), c++, h = setTimeout(w, t.rotate), n(S, e, y.callback);
  }
  return setTimeout(w), m;
}
function Ih(t) {
  const e = {
    ...q7,
    ...t
  };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === "pending");
  }
  function i(a, l, c) {
    const u = Y7(
      e,
      a,
      l,
      (h, d) => {
        r(), c && c(h, d);
      }
    );
    return n.push(u), u;
  }
  function s(a) {
    return n.find((l) => a(l)) || null;
  }
  return {
    query: i,
    find: s,
    setIndex: (a) => {
      e.index = a;
    },
    getIndex: () => e.index,
    cleanup: r
  };
}
function nd() {
}
const Qo = /* @__PURE__ */ Object.create(null);
function G7(t) {
  if (!Qo[t]) {
    const e = Il(t);
    if (!e)
      return;
    const n = Ih(e), r = {
      config: e,
      redundancy: n
    };
    Qo[t] = r;
  }
  return Qo[t];
}
function Q7(t, e, n) {
  let r, i;
  if (typeof t == "string") {
    const s = Ia(t);
    if (!s)
      return n(void 0, 424), nd;
    i = s.send;
    const o = G7(t);
    o && (r = o.redundancy);
  } else {
    const s = Tl(t);
    if (s) {
      r = Ih(s);
      const o = t.resources ? t.resources[0] : "", a = Ia(o);
      a && (i = a.send);
    }
  }
  return !r || !i ? (n(void 0, 424), nd) : r.query(e, i, n)().abort;
}
const rd = "iconify2", ti = "iconify", Mh = ti + "-count", id = ti + "-version", Oh = 36e5, Z7 = 168;
function Ma(t, e) {
  try {
    return t.getItem(e);
  } catch {
  }
}
function Ml(t, e, n) {
  try {
    return t.setItem(e, n), !0;
  } catch {
  }
}
function sd(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function Oa(t, e) {
  return Ml(t, Mh, e.toString());
}
function Na(t) {
  return parseInt(Ma(t, Mh)) || 0;
}
const fo = {
  local: !0,
  session: !0
}, Nh = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Ol = !1;
function K7(t) {
  Ol = t;
}
let Ti = typeof window > "u" ? {} : window;
function Bh(t) {
  const e = t + "Storage";
  try {
    if (Ti && Ti[e] && typeof Ti[e].length == "number")
      return Ti[e];
  } catch {
  }
  fo[t] = !1;
}
function Lh(t, e) {
  const n = Bh(t);
  if (!n)
    return;
  const r = Ma(n, id);
  if (r !== rd) {
    if (r) {
      const a = Na(n);
      for (let l = 0; l < a; l++)
        sd(n, ti + l.toString());
    }
    Ml(n, id, rd), Oa(n, 0);
    return;
  }
  const i = Math.floor(Date.now() / Oh) - Z7, s = (a) => {
    const l = ti + a.toString(), c = Ma(n, l);
    if (typeof c == "string") {
      try {
        const u = JSON.parse(c);
        if (typeof u == "object" && typeof u.cached == "number" && u.cached > i && typeof u.provider == "string" && typeof u.data == "object" && typeof u.data.prefix == "string" && // Valid item: run callback
        e(u, a))
          return !0;
      } catch {
      }
      sd(n, l);
    }
  };
  let o = Na(n);
  for (let a = o - 1; a >= 0; a--)
    s(a) || (a === o - 1 ? (o--, Oa(n, o)) : Nh[t].add(a));
}
function Ph() {
  if (!Ol) {
    K7(!0);
    for (const t in fo)
      Lh(t, (e) => {
        const n = e.data, r = e.provider, i = n.prefix, s = er(
          r,
          i
        );
        if (!Dl(s, n).length)
          return !1;
        const o = n.lastModified || -1;
        return s.lastModifiedCached = s.lastModifiedCached ? Math.min(s.lastModifiedCached, o) : o, !0;
      });
  }
}
function X7(t, e) {
  const n = t.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= e
  )
    return n === e;
  if (t.lastModifiedCached = e, n)
    for (const r in fo)
      Lh(r, (i) => {
        const s = i.data;
        return i.provider !== t.provider || s.prefix !== t.prefix || s.lastModified === e;
      });
  return !0;
}
function J7(t, e) {
  Ol || Ph();
  function n(r) {
    let i;
    if (!fo[r] || !(i = Bh(r)))
      return;
    const s = Nh[r];
    let o;
    if (s.size)
      s.delete(o = Array.from(s).shift());
    else if (o = Na(i), !Oa(i, o + 1))
      return;
    const a = {
      cached: Math.floor(Date.now() / Oh),
      provider: t.provider,
      data: e
    };
    return Ml(
      i,
      ti + o.toString(),
      JSON.stringify(a)
    );
  }
  e.lastModified && !X7(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), n("local") || n("session"));
}
function od() {
}
function eS(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, V7(t);
  }));
}
function tS(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = t, i = t.iconsToLoad;
    delete t.iconsToLoad;
    let s;
    if (!i || !(s = Ia(n)))
      return;
    s.prepare(n, r, i).forEach((a) => {
      Q7(n, a, (l) => {
        if (typeof l != "object")
          a.icons.forEach((c) => {
            t.missing.add(c);
          });
        else
          try {
            const c = Dl(
              t,
              l
            );
            if (!c.length)
              return;
            const u = t.pendingIcons;
            u && c.forEach((h) => {
              u.delete(h);
            }), J7(t, l);
          } catch (c) {
            console.error(c);
          }
        eS(t);
      });
    });
  }));
}
const nS = (t, e) => {
  const n = W7(t, !0, Ah()), r = z7(n);
  if (!r.pending.length) {
    let l = !0;
    return e && setTimeout(() => {
      l && e(
        r.loaded,
        r.missing,
        r.pending,
        od
      );
    }), () => {
      l = !1;
    };
  }
  const i = /* @__PURE__ */ Object.create(null), s = [];
  let o, a;
  return r.pending.forEach((l) => {
    const { provider: c, prefix: u } = l;
    if (u === a && c === o)
      return;
    o = c, a = u, s.push(er(c, u));
    const h = i[c] || (i[c] = /* @__PURE__ */ Object.create(null));
    h[u] || (h[u] = []);
  }), r.pending.forEach((l) => {
    const { provider: c, prefix: u, name: h } = l, d = er(c, u), f = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    f.has(h) || (f.add(h), i[c][u].push(h));
  }), s.forEach((l) => {
    const { provider: c, prefix: u } = l;
    i[c][u].length && tS(l, i[c][u]);
  }), e ? j7(e, r, s) : od;
};
function rS(t, e) {
  const n = {
    ...t
  };
  for (const r in e) {
    const i = e[r], s = typeof i;
    r in Dh ? (i === null || i && (s === "string" || s === "number")) && (n[r] = i) : s === typeof n[r] && (n[r] = r === "rotate" ? i % 4 : i);
  }
  return n;
}
const iS = /[\s,]+/;
function sS(t, e) {
  e.split(iS).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        t.hFlip = !0;
        break;
      case "vertical":
        t.vFlip = !0;
        break;
    }
  });
}
function oS(t, e = 0) {
  const n = t.replace(/^-?[0-9.]*/, "");
  function r(i) {
    for (; i < 0; )
      i += 4;
    return i % 4;
  }
  if (n === "") {
    const i = parseInt(t);
    return isNaN(i) ? 0 : r(i);
  } else if (n !== t) {
    let i = 0;
    switch (n) {
      case "%":
        i = 25;
        break;
      case "deg":
        i = 90;
    }
    if (i) {
      let s = parseFloat(t.slice(0, t.length - n.length));
      return isNaN(s) ? 0 : (s = s / i, s % 1 === 0 ? r(s) : 0);
    }
  }
  return e;
}
function aS(t, e) {
  let n = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in e)
    n += " " + r + '="' + e[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
}
function lS(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function cS(t) {
  return "data:image/svg+xml," + lS(t);
}
function uS(t) {
  return 'url("' + cS(t) + '")';
}
const ad = {
  ...Th,
  inline: !1
}, dS = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, fS = {
  display: "inline-block"
}, Ba = {
  backgroundColor: "currentColor"
}, $h = {
  backgroundColor: "transparent"
}, ld = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, cd = {
  webkitMask: Ba,
  mask: Ba,
  background: $h
};
for (const t in cd) {
  const e = cd[t];
  for (const n in ld)
    e[t + n] = ld[n];
}
const Ui = {};
["horizontal", "vertical"].forEach((t) => {
  const e = t.slice(0, 1) + "Flip";
  Ui[t + "-flip"] = e, Ui[t.slice(0, 1) + "-flip"] = e, Ui[t + "Flip"] = e;
});
function ud(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
const dd = (t, e) => {
  const n = rS(ad, e), r = { ...dS }, i = e.mode || "svg", s = {}, o = e.style, a = typeof o == "object" && !(o instanceof Array) ? o : {};
  for (let p in e) {
    const v = e[p];
    if (v !== void 0)
      switch (p) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          n[p] = v === !0 || v === "true" || v === 1;
          break;
        case "flip":
          typeof v == "string" && sS(n, v);
          break;
        case "color":
          s.color = v;
          break;
        case "rotate":
          typeof v == "string" ? n[p] = oS(v) : typeof v == "number" && (n[p] = v);
          break;
        case "ariaHidden":
        case "aria-hidden":
          v !== !0 && v !== "true" && delete r["aria-hidden"];
          break;
        default: {
          const m = Ui[p];
          m ? (v === !0 || v === "true" || v === 1) && (n[m] = !0) : ad[p] === void 0 && (r[p] = v);
        }
      }
  }
  const l = A7(t, n), c = l.attributes;
  if (n.inline && (s.verticalAlign = "-0.125em"), i === "svg") {
    r.style = {
      ...s,
      ...a
    }, Object.assign(r, c);
    let p = 0, v = e.id;
    return typeof v == "string" && (v = v.replace(/-/g, "_")), r.innerHTML = I7(l.body, v ? () => v + "ID" + p++ : "iconifyVue"), pr("svg", r);
  }
  const { body: u, width: h, height: d } = t, f = i === "mask" || (i === "bg" ? !1 : u.indexOf("currentColor") !== -1), g = aS(u, {
    ...c,
    width: h + "",
    height: d + ""
  });
  return r.style = {
    ...s,
    "--svg": uS(g),
    width: ud(c.width),
    height: ud(c.height),
    ...fS,
    ...f ? Ba : $h,
    ...a
  }, pr("span", r);
};
Ah(!0);
M7("", F7);
if (typeof document < "u" && typeof window < "u") {
  Ph();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((r) => {
      try {
        // Check if item is an object and not null/array
        (typeof r != "object" || r === null || r instanceof Array || // Check for 'icons' and 'prefix'
        typeof r.icons != "object" || typeof r.prefix != "string" || // Add icon set
        !S7(r)) && console.error(n);
      } catch {
        console.error(n);
      }
    });
  }
  if (t.IconifyProviders !== void 0) {
    const e = t.IconifyProviders;
    if (typeof e == "object" && e !== null)
      for (let n in e) {
        const r = "IconifyProviders[" + n + "] is invalid.";
        try {
          const i = e[n];
          if (typeof i != "object" || !i || i.resources === void 0)
            continue;
          O7(n, i) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
const hS = {
  ...uo,
  body: ""
}, Ri = He({
  // Do not inherit other attributes: it is handled by render()
  inheritAttrs: !1,
  // Set initial data
  data() {
    return {
      // Mounted status
      iconMounted: !1,
      // Callback counter to trigger re-render
      counter: 0
    };
  },
  mounted() {
    this._name = "", this._loadingIcon = null, this.iconMounted = !0;
  },
  unmounted() {
    this.abortLoading();
  },
  methods: {
    abortLoading() {
      this._loadingIcon && (this._loadingIcon.abort(), this._loadingIcon = null);
    },
    // Get data for icon to render or null
    getIcon(t, e) {
      if (typeof t == "object" && t !== null && typeof t.body == "string")
        return this._name = "", this.abortLoading(), {
          data: t
        };
      let n;
      if (typeof t != "string" || (n = co(t, !1, !0)) === null)
        return this.abortLoading(), null;
      const r = _7(n);
      if (!r)
        return (!this._loadingIcon || this._loadingIcon.name !== t) && (this.abortLoading(), this._name = "", r !== null && (this._loadingIcon = {
          name: t,
          abort: nS([n], () => {
            this.counter++;
          })
        })), null;
      this.abortLoading(), this._name !== t && (this._name = t, e && e(t));
      const i = ["iconify"];
      return n.prefix !== "" && i.push("iconify--" + n.prefix), n.provider !== "" && i.push("iconify--" + n.provider), { data: r, classes: i };
    }
  },
  // Render icon
  render() {
    this.counter;
    const t = this.$attrs, e = this.iconMounted ? this.getIcon(t.icon, t.onLoad) : null;
    if (!e)
      return dd(hS, t);
    let n = t;
    return e.classes && (n = {
      ...t,
      class: (typeof t.class == "string" ? t.class + " " : "") + e.classes.join(" ")
    }), dd({
      ...uo,
      ...e.data
    }, n);
  }
}), pS = (t) => {
  const e = "--ik-main-icon-deep-color", n = "--ik-main-icon-color", r = /fill="([^"]*)"/g;
  let i, s = 0, o = t;
  for (o = o.replaceAll('fill="#71778D"', `fill="var(${e})"`), o = o.replaceAll('fill="#A1A5B7"', `fill="var(${e})"`), o = o.replaceAll('fill="#E3E4E9"', `fill="var(${n})"`), o = o.replaceAll('fill="#B9BAC5"', `fill="var(${n})"`); (i = r.exec(t)) !== null; ) {
    const a = i[1];
    s === 0 ? o = o.replace(`fill="${a}"`, `fill="var(${zc.colorIsDark(a) ? e : n})"`) : o = o.replace(`fill="${a}"`, `fill="var(${zc.colorIsDark(a) ? e : n})"`), s++;
  }
  return o;
}, gS = (t) => {
  const e = /<symbol(.|\n)*?<\/symbol>/g, n = t == null ? void 0 : t.match(e);
  if (!n)
    return {};
  const r = {}, i = new DOMParser();
  for (const s of n) {
    const o = i.parseFromString(s, "text/xml").firstChild;
    if (!o || o.nodeName !== "symbol")
      continue;
    const a = o.getAttribute("id");
    if (!a)
      continue;
    const l = s.replace(/<symbol[^>]*>|<\/symbol>/gi, ""), c = pS(l);
    r[a] = c;
  }
  return r;
}, vS = gS, mS = ["innerHTML"], bS = ["xlink:href"], yS = ["innerHTML"], xS = ["xlink:href"], _S = ["innerHTML"], wS = ["xlink:href"], SS = ["innerHTML"], ES = ["xlink:href"], CS = /* @__PURE__ */ He({
  __name: "index",
  props: {
    name: {
      type: String,
      required: !0
    },
    // 文字
    label: {
      type: String,
      default: ""
    },
    // svg大小
    size: {
      type: [String, Number],
      default: "default"
    },
    // icon: 只显示图标 label: 只显示文字  all:显示图标+文字
    showType: {
      type: String,
      default: "icon"
    },
    // 提示内容
    title: {
      type: String,
      default: ""
    },
    // 是否显示提示popper
    pop: {
      type: Boolean,
      default: !1
    },
    // 旋转角度
    rotate: {
      type: Number,
      default: 0
    },
    // 显示背景色
    showBg: {
      type: Boolean,
      default: !1
    },
    // 宽
    width: {
      type: Number,
      default: 32
    },
    // 类型
    type: {
      type: [String, Number],
      default: "info"
    },
    // 背景色
    background: {
      type: String,
      default: ""
    },
    // 第一个按钮是否需要margin-left   一般在表格行内操作时 第一个icon设置为false
    startMargin: {
      type: Boolean,
      default: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    //
    runtime: {
      type: Boolean,
      default: !1
    },
    //
    flip: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const n = t, r = Yn.local.has("ik-svg"), i = r ? Yn.local.getItem("ik-svg") : vS(window._iconfont_svg_string);
    r || Yn.local.setItem("ik-svg", i);
    const s = {}.VITE_ICON_SUFFIX, o = ye(() => {
      var f, g, p, v;
      return (f = n.name) != null && f.includes("iksvg") ? "svg" : ((g = n == null ? void 0 : n.name) == null ? void 0 : g.indexOf("-")) > 0 || ((p = n == null ? void 0 : n.name) == null ? void 0 : p.indexOf(s)) === 0 ? n.runtime ? "svg" : "css" : (v = n.name) != null && v.includes(":") ? "svg" : "custom";
    }), a = ye(() => {
      var f;
      if (((f = n.name) == null ? void 0 : f.indexOf("i-")) === 0) {
        let g = n.name;
        return n.runtime && (g = g.replace("i-", "")), g;
      } else
        return n.name;
    }), l = ye(() => {
      const f = [];
      if (n.flip !== "")
        switch (n.flip) {
          case "horizontal":
            f.push("rotateY(180deg)");
            break;
          case "vertical":
            f.push("rotateX(180deg)");
            break;
          case "both":
            f.push("rotateX(180deg)"), f.push("rotateY(180deg)");
            break;
        }
      return n.rotate !== 0 && f.push(`rotate(${n.rotate % 360}deg)`), `transform: ${f.join(" ")};`;
    }), c = ye(
      () => n.showBg ? `width: ${n.width}px; height: ${n.width}px;background-color: ${n.type === "primary" ? n.background : ""};` : ""
    ), u = ye(() => {
      var f;
      if (i[a.value])
        return i[a.value];
      {
        const g = (f = n.name) == null ? void 0 : f.replace("icon-", "iksvg_");
        return i[g] ? i[g] : "";
      }
    }), h = ye(() => ["all", "label"].includes(n.showType)), d = ye(
      () => ["big", "default", "small"].includes(n.size) ? n.size === "big" ? 20 : n.size === "default" ? 16 : 14 : n.size
    );
    return (f, g) => {
      const p = Me("el-icon"), v = Me("el-button"), m = Me("el-tooltip"), x = Me("iksvg");
      return T(), de(x, { class: "inline-flex" }, {
        default: Q(() => [
          n.pop && !h.value ? (T(), de(m, {
            key: 0,
            placement: "top",
            title: "",
            "popper-class": "ik-svg-icon-popover",
            trigger: "hover",
            enterable: !1,
            content: t.title
          }, {
            default: Q(() => [
              t.showType === "icon" ? (T(), de(p, Ge({
                key: 0,
                style: c.value,
                class: ["ik-icon-btn", [
                  n.showBg ? "show-bg" : null,
                  t.type,
                  t.disabled ? "disabled" : null,
                  t.startMargin ? "start-margin" : null,
                  `ik-${a.value}`
                ]],
                size: d.value
              }, f.$attrs, {
                onClick: g[0] || (g[0] = (b) => e("click", b))
              }), {
                default: Q(() => {
                  var b, _;
                  return [
                    u.value ? (T(), $("svg", {
                      key: 0,
                      style: Oe(l.value),
                      viewBox: "0 0 1024 1024",
                      innerHTML: u.value
                    }, null, 12, mS)) : o.value === "css" ? (T(), $("i", {
                      key: 1,
                      class: $e(`${F(s)} ${a.value} ${(b = t.name) == null ? void 0 : b.split("-")[0]} ${(_ = t.name) != null && _.startsWith("ik") ? "ik iksvg" : "iconfont"}`),
                      style: Oe(`${l.value};fontSize:${d.value}px;`)
                    }, null, 6)) : o.value === "svg" ? (T(), de(F(Ri), {
                      key: 2,
                      icon: a.value,
                      style: Oe(l.value)
                    }, null, 8, ["icon", "style"])) : (T(), $("svg", {
                      key: 3,
                      style: Oe(l.value),
                      "aria-hidden": "true"
                    }, [
                      P("use", {
                        "xlink:href": `#icon-${a.value}`
                      }, null, 8, bS)
                    ], 4))
                  ];
                }),
                _: 1
              }, 16, ["style", "size", "class"])) : t.showType === "label" ? (T(), de(v, {
                key: 1,
                text: ""
              }, {
                default: Q(() => [
                  Te(pe(t.label), 1)
                ]),
                _: 1
              })) : t.showType === "all" ? (T(), de(v, { key: 2 }, {
                icon: Q(() => [
                  M(p, Ge({
                    style: c.value,
                    class: ["ik-icon-btn", [
                      n.showBg ? "show-bg" : null,
                      t.type,
                      t.disabled ? "disabled" : null,
                      t.startMargin ? "start-margin" : null,
                      `ik-${a.value}`
                    ]],
                    size: d.value
                  }, f.$attrs, {
                    onClick: g[1] || (g[1] = (b) => e("click", b))
                  }), {
                    default: Q(() => {
                      var b, _;
                      return [
                        u.value ? (T(), $("svg", {
                          key: 0,
                          style: Oe(l.value),
                          viewBox: "0 0 1024 1024",
                          innerHTML: u.value
                        }, null, 12, yS)) : o.value === "css" ? (T(), $("i", {
                          key: 1,
                          class: $e(`${F(s)} ${a.value} ${(b = t.name) == null ? void 0 : b.split("-")[0]} ${(_ = t.name) != null && _.startsWith("ik") ? "ik iksvg" : "iconfont"}`),
                          style: Oe(`${l.value};fontSize:${d.value}px;`)
                        }, null, 6)) : o.value === "svg" ? (T(), de(F(Ri), {
                          key: 2,
                          icon: a.value,
                          style: Oe(l.value)
                        }, null, 8, ["icon", "style"])) : (T(), $("svg", {
                          key: 3,
                          style: Oe(l.value),
                          "aria-hidden": "true"
                        }, [
                          P("use", {
                            "xlink:href": `#icon-${a.value}`
                          }, null, 8, xS)
                        ], 4))
                      ];
                    }),
                    _: 1
                  }, 16, ["style", "size", "class"])
                ]),
                default: Q(() => [
                  Te(" " + pe(t.label), 1)
                ]),
                _: 1
              })) : re("", !0)
            ]),
            _: 1
          }, 8, ["content"])) : (T(), $(Ae, { key: 1 }, [
            t.showType === "icon" ? (T(), de(p, Ge({
              key: 0,
              style: c.value,
              class: ["ik-icon-btn", [
                n.showBg ? "show-bg" : null,
                t.type,
                t.disabled ? "disabled" : null,
                t.startMargin ? "start-margin" : null,
                `ik-${a.value}`
              ]],
              size: d.value
            }, f.$attrs, {
              onClick: g[2] || (g[2] = (b) => e("click", b))
            }), {
              default: Q(() => {
                var b, _;
                return [
                  u.value ? (T(), $("svg", {
                    key: 0,
                    style: Oe(l.value),
                    viewBox: "0 0 1024 1024",
                    innerHTML: u.value
                  }, null, 12, _S)) : o.value === "css" ? (T(), $("i", {
                    key: 1,
                    class: $e(`${F(s)} ${a.value} ${(b = t.name) == null ? void 0 : b.split("-")[0]} ${(_ = t.name) != null && _.startsWith("ik") ? "ik iksvg" : "iconfont"}`),
                    style: Oe(`${l.value};fontSize:${d.value}px;`)
                  }, null, 6)) : o.value === "svg" ? (T(), de(F(Ri), {
                    key: 2,
                    icon: a.value,
                    style: Oe(l.value)
                  }, null, 8, ["icon", "style"])) : (T(), $("svg", {
                    key: 3,
                    style: Oe(l.value),
                    "aria-hidden": "true"
                  }, [
                    P("use", {
                      "xlink:href": `#icon-${a.value}`
                    }, null, 8, wS)
                  ], 4))
                ];
              }),
              _: 1
            }, 16, ["style", "size", "class"])) : t.showType === "label" ? (T(), de(v, Ge({
              key: 1,
              text: ""
            }, f.$attrs), {
              default: Q(() => [
                Te(pe(t.label), 1)
              ]),
              _: 1
            }, 16)) : t.showType === "all" ? (T(), de(v, Ge({
              key: 2,
              text: "",
              type: "primary"
            }, f.$attrs), {
              icon: Q(() => [
                M(p, Ge({
                  style: c.value,
                  class: ["ik-icon-btn hover", [t.type, `ik-${a.value}`]]
                }, f.$attrs, {
                  onClick: g[3] || (g[3] = (b) => e("click", b))
                }), {
                  default: Q(() => {
                    var b, _;
                    return [
                      u.value ? (T(), $("svg", {
                        key: 0,
                        style: Oe(l.value),
                        viewBox: "0 0 1024 1024",
                        innerHTML: u.value
                      }, null, 12, SS)) : o.value === "css" ? (T(), $("i", {
                        key: 1,
                        class: $e(`${F(s)} ${a.value} ${(b = t.name) == null ? void 0 : b.split("-")[0]} ${(_ = t.name) != null && _.startsWith("ik") ? "ik iksvg" : "iconfont"}`),
                        style: Oe(`${l.value};fontSize:${d.value}px;`)
                      }, null, 6)) : o.value === "svg" ? (T(), de(F(Ri), {
                        key: 2,
                        icon: a.value,
                        style: Oe(l.value)
                      }, null, 8, ["icon", "style"])) : (T(), $("svg", {
                        key: 3,
                        style: Oe(l.value),
                        "aria-hidden": "true"
                      }, [
                        P("use", {
                          "xlink:href": `#icon-${a.value}`
                        }, null, 8, ES)
                      ], 4))
                    ];
                  }),
                  _: 1
                }, 16, ["style", "class"])
              ]),
              default: Q(() => [
                Te(" " + pe(t.label), 1)
              ]),
              _: 1
            }, 16)) : re("", !0)
          ], 64))
        ]),
        _: 1
      });
    };
  }
});
const kS = /* @__PURE__ */ ze(CS, [["__scopeId", "data-v-3d0fc4c6"]]), Zt = tt(kS), Nl = (t) => (Ar("data-v-600ed17b"), t = t(), Dr(), t), AS = { class: "ik-schedule" }, DS = { class: "ik-schedule__left" }, TS = { class: "ik-schedule__header" }, RS = { class: "ik-schedule__title" }, IS = /* @__PURE__ */ Nl(() => /* @__PURE__ */ P("div", { class: "ik-schedule__header-right" }, null, -1)), MS = { class: "ik-schedule__body" }, OS = { style: { "font-size": "18px" } }, NS = { key: 0 }, BS = { style: { width: "90%", display: "flex", "align-items": "center", "justify-content": "space-between" } }, LS = {
  key: 0,
  style: { "margin-left": "2%" }
}, PS = /* @__PURE__ */ Nl(() => /* @__PURE__ */ P("span", {
  class: "to",
  style: { width: "10% !important" }
}, "至", -1)), $S = { key: 1 }, HS = /* @__PURE__ */ Nl(() => /* @__PURE__ */ P("span", {
  class: "to",
  style: { width: "10% !important" }
}, "至", -1)), FS = { class: "dialog-footer" }, zS = {
  name: "IkSchedule"
}, VS = /* @__PURE__ */ He({
  ...zS,
  props: {
    modelValue: { default: [] },
    options: { default: {
      initialView: "dayGridMonth"
    } },
    editVisible: { type: Boolean },
    removable: { type: Boolean, default: !0 }
  },
  emits: [
    "update:modelValue",
    "added",
    "updated",
    "deleted",
    // 新增、编辑对话框打开
    "editOpen",
    // 新增、编辑提交
    "submit",
    // 新增、编辑对话框
    "update:editVisible",
    // 新增
    "submitAdd",
    // 修改
    "submitUpdate",
    // 删除
    "submitDelete"
  ],
  setup(t, { expose: e, emit: n }) {
    var S;
    const r = t, i = !!hp().form, s = ye({
      get: () => r.modelValue,
      set: (y) => {
        n("update:modelValue", y);
      }
    }), o = ye(() => ({
      ...r.options,
      headerToolbar: !1
    })), a = rn({
      currentView: (S = r.options) == null ? void 0 : S.initialView,
      viewTitle: "",
      rightLabel: "今日",
      timeType: "month",
      currentDate: null
    }), l = fe(null), c = (y) => {
      var E;
      (E = l.value) == null || E.changeView(y), a.currentView = y, u();
    }, u = () => {
      var E;
      const y = (E = l.value) == null ? void 0 : E.getView();
      a.viewTitle = y == null ? void 0 : y.title;
    }, h = () => {
      var y;
      (y = l.value) == null || y.prev(), u();
    }, d = () => {
      var y;
      (y = l.value) == null || y.next(), u();
    }, f = () => {
      var y;
      (y = l.value) == null || y.today(), u();
    }, g = (y) => a.currentView === y, p = fe(null), v = {
      createDefaultForm: () => ({
        title: "",
        allDay: !1,
        type: 1,
        startDate: "",
        endDate: "",
        startTime: "",
        endTime: "",
        location: "",
        remark: ""
      }),
      close: () => {
        x.value = !1;
      },
      customSubmit: (y) => {
        var I, A;
        let E = {
          ...y,
          id: void 0,
          allDay: m.form.allDay,
          start: (I = m.selectInfo) == null ? void 0 : I.startStr,
          end: (A = m.selectInfo) == null ? void 0 : A.endStr
        };
        v.operation(E), v.close();
      },
      operation: (y) => {
        var E;
        m.operation === "add" ? n("submitAdd", y) : (y.id = (E = m.editEvent) == null ? void 0 : E.id, n("submitUpdate", y));
      },
      submit: async () => {
        var E, I;
        if (i) {
          n("submit");
          return;
        }
        if (!m.form.title) {
          Qr.info("标题不能为空");
          return;
        }
        if (!m.form.allDay && (!m.form.startTime || !m.form.endTime)) {
          Qr.info("时间不能为空");
          return;
        }
        let y = {
          id: void 0,
          title: m.form.title,
          allDay: m.form.allDay,
          start: (E = m.selectInfo) == null ? void 0 : E.startStr,
          end: (I = m.selectInfo) == null ? void 0 : I.endStr,
          extendedProps: {
            ...m.form
          }
        };
        if (y.allDay)
          y.start = ut.toDate(m.form.startDate), y.end = ut.toDate(m.form.endDate);
        else {
          const A = ut.toDate(m.form.startDate), k = ut.toDateTime(m.form.startTime).substring(10), R = ut.toDateTime(m.form.endTime).substring(10);
          y.start = `${A}${k}`, y.end = `${A}${R}`, y.extendedProps.startTime = y.start, y.extendedProps.endTime = y.end;
        }
        v.operation(y), v.close();
      },
      reset: () => {
        var y;
        m.form = v.createDefaultForm(), (y = p.value) == null || y.clearValidate();
      },
      edit: () => {
        m.editable = !0, m.title = "编辑日程";
      },
      cancelEdit: () => {
        m.editable = !1, m.title = "日程信息";
      },
      del: () => {
        w(m.clickInfo);
      }
    }, m = rn({
      operation: "update",
      selectInfo: {},
      editEvent: void 0,
      title: "",
      visible: !1,
      allDay: !1,
      form: v.createDefaultForm(),
      // 可编辑状态
      editable: !1,
      //
      clickInfo: null
    }), x = ye({
      get: () => m.visible,
      set: (y) => {
        m.visible = y;
      }
    }), b = (y) => {
      var E;
      if (m.form.allDay = y.allDay, m.selectInfo = y, v.reset(), y.view.type == "dayGridMonth") {
        let I = y.end.getTime() - 864e5;
        a.timeType = "month", m.form.startDate = ut.toYMD(y.start), m.form.endDate = ut.toYMD(new Date(I)), m.form.allDay = !0;
      } else
        y.view.type == "timeGridWeek" ? a.timeType = "week" : y.view.type == "timeGridDay" && (a.timeType = "day"), m.form.startDate = ut.toYMD(y.start), m.form.endDate = ut.toYMD(y.start), m.form.startTime = ut.toDateTime(y.start), m.form.endTime = ut.toDateTime(y.end);
      (E = l.value) == null || E.unselect(), In(() => {
        m.title = "新建日程", m.operation = "add", m.editable = !0, x.value = !0, n("editOpen", JSON.parse(JSON.stringify(m)));
      });
    }, _ = (y) => {
      m.title = "日程信息", m.operation = "update", m.clickInfo = y, m.editEvent = y.event;
      debugger;
      m.editEvent.allDay ? (m.form.startDate = m.editEvent.startStr, m.form.endDate = m.editEvent.startStr) : (m.form.startDate = m.editEvent.startStr, m.form.startTime = m.editEvent.start, m.form.endTime = m.editEvent.end), m.form.title = m.editEvent.title, m.form.allDay = m.editEvent.allDay, Hp.copyValue(m.form, m.editEvent.extendedProps), v.cancelEdit(), x.value = !0, n("editOpen", JSON.parse(JSON.stringify(m)));
    }, w = (y) => {
      Rd.confirm(`你确定删除事件 ${y.event.title} ?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        v.close(), n("submitDelete", y.event.id);
      });
    };
    return e({
      customSubmit: (y) => v.customSubmit(y)
    }), kr(() => {
      u();
    }), (y, E) => {
      const I = Me("el-button"), A = Me("el-button-group"), k = Me("el-icon"), R = Me("el-space"), N = Me("el-input"), V = Me("el-form-item"), j = Me("el-date-picker"), W = Me("el-time-picker"), J = Me("el-checkbox"), le = Me("el-form"), ie = Me("el-dialog");
      return T(), $("div", AS, [
        P("div", DS, [
          P("div", TS, [
            M(R, {
              style: { "flex-shrink": "0" },
              size: 24
            }, {
              default: Q(() => [
                M(A, null, {
                  default: Q(() => [
                    M(I, {
                      onClick: E[0] || (E[0] = (ce) => c("dayGridMonth")),
                      type: g("dayGridMonth") ? "primary" : ""
                    }, {
                      default: Q(() => [
                        Te("月")
                      ]),
                      _: 1
                    }, 8, ["type"]),
                    M(I, {
                      onClick: E[1] || (E[1] = (ce) => c("timeGridWeek")),
                      type: g("timeGridWeek") ? "primary" : ""
                    }, {
                      default: Q(() => [
                        Te("周")
                      ]),
                      _: 1
                    }, 8, ["type"]),
                    M(I, {
                      onClick: E[2] || (E[2] = (ce) => c("timeGridDay")),
                      type: g("timeGridDay") ? "primary" : ""
                    }, {
                      default: Q(() => [
                        Te("日")
                      ]),
                      _: 1
                    }, 8, ["type"])
                  ]),
                  _: 1
                }),
                P("span", RS, pe(a.viewTitle), 1),
                M(A, { style: { "flex-shrink": "0" } }, {
                  default: Q(() => [
                    M(I, { onClick: h }, {
                      default: Q(() => [
                        M(k, null, {
                          default: Q(() => [
                            M(F(wd))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    M(I, { onClick: f }, {
                      default: Q(() => [
                        Te("今天")
                      ]),
                      _: 1
                    }),
                    M(I, { onClick: d }, {
                      default: Q(() => [
                        M(k, null, {
                          default: Q(() => [
                            M(F(Sd))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            IS
          ]),
          P("div", MS, [
            M(F(p7), {
              removable: y.removable,
              onDateSelect: b,
              onDeleteClick: w,
              onEventClick: _,
              ref_key: "_refCalendar",
              ref: l,
              options: o.value,
              modelValue: s.value,
              "onUpdate:modelValue": E[3] || (E[3] = (ce) => s.value = ce)
            }, null, 8, ["removable", "options", "modelValue"])
          ])
        ]),
        M(ie, {
          width: "700px",
          modelValue: x.value,
          "onUpdate:modelValue": E[11] || (E[11] = (ce) => x.value = ce)
        }, {
          header: Q(() => [
            P("div", null, [
              P("span", OS, pe(m.title), 1),
              m.operation === "update" ? (T(), $("span", NS, [
                m.editable ? (T(), de(F(Zt), {
                  key: 1,
                  style: { "margin-left": "4px" },
                  name: "iksvg_qiehuan-daohang",
                  onClick: v.cancelEdit
                }, null, 8, ["onClick"])) : (T(), de(F(Zt), {
                  key: 0,
                  style: { "margin-left": "4px" },
                  name: "iksvg_xiugai",
                  onClick: v.edit
                }, null, 8, ["onClick"]))
              ])) : re("", !0)
            ])
          ]),
          footer: Q(() => [
            P("span", FS, [
              Je(y.$slots, "form-footer", {}, () => [
                P("span", null, [
                  M(I, {
                    onClick: v.close
                  }, {
                    default: Q(() => [
                      Te("取消")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  M(I, {
                    onClick: v.del
                  }, {
                    default: Q(() => [
                      Te("删除")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  M(I, {
                    type: "primary",
                    onClick: v.submit
                  }, {
                    default: Q(() => [
                      Te("确定")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ], !0)
            ])
          ]),
          default: Q(() => [
            Je(y.$slots, "form", {}, () => [
              M(le, {
                ref_key: "_editFormRef",
                ref: p,
                model: m.form,
                disabled: !m.editable
              }, {
                default: Q(() => [
                  M(V, null, {
                    default: Q(() => [
                      M(k, { class: "icon" }, {
                        default: Q(() => [
                          M(F(yd))
                        ]),
                        _: 1
                      }),
                      M(N, {
                        modelValue: m.form.title,
                        "onUpdate:modelValue": E[4] || (E[4] = (ce) => m.form.title = ce),
                        placeholder: "请输入标题",
                        style: { width: "90%" },
                        clearable: ""
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  M(V, null, {
                    default: Q(() => [
                      M(k, { class: "icon" }, {
                        default: Q(() => [
                          M(F(xd))
                        ]),
                        _: 1
                      }),
                      P("div", BS, [
                        M(j, {
                          disabled: "",
                          modelValue: m.form.startDate,
                          "onUpdate:modelValue": E[5] || (E[5] = (ce) => m.form.startDate = ce),
                          type: "date",
                          placeholder: "开始日期",
                          style: Oe({ width: m.form.allDay ? "45%" : "90%" })
                        }, null, 8, ["modelValue", "style"]),
                        m.form.allDay ? (T(), $("div", $S, [
                          HS,
                          M(j, {
                            disabled: "",
                            modelValue: m.form.endDate,
                            "onUpdate:modelValue": E[8] || (E[8] = (ce) => m.form.endDate = ce),
                            type: "date",
                            placeholder: "结束日期",
                            style: { width: "90%" }
                          }, null, 8, ["modelValue"])
                        ])) : (T(), $("div", LS, [
                          M(W, {
                            modelValue: m.form.startTime,
                            "onUpdate:modelValue": E[6] || (E[6] = (ce) => m.form.startTime = ce),
                            type: "datetime",
                            placeholder: "开始时间",
                            style: { width: "45%" },
                            format: "HH:mm"
                          }, null, 8, ["modelValue"]),
                          PS,
                          M(W, {
                            modelValue: m.form.endTime,
                            "onUpdate:modelValue": E[7] || (E[7] = (ce) => m.form.endTime = ce),
                            type: "datetime",
                            placeholder: "结束时间",
                            style: { width: "45%" },
                            format: "HH:mm"
                          }, null, 8, ["modelValue"])
                        ])),
                        M(J, {
                          modelValue: m.form.allDay,
                          "onUpdate:modelValue": E[9] || (E[9] = (ce) => m.form.allDay = ce),
                          label: "全天",
                          style: { "margin-left": "2%" }
                        }, null, 8, ["modelValue"])
                      ])
                    ]),
                    _: 1
                  }),
                  M(V, null, {
                    default: Q(() => [
                      M(k, { class: "icon" }, {
                        default: Q(() => [
                          M(F(Dp))
                        ]),
                        _: 1
                      }),
                      M(N, {
                        type: "textarea",
                        modelValue: m.form.remark,
                        "onUpdate:modelValue": E[10] || (E[10] = (ce) => m.form.remark = ce),
                        placeholder: "描述",
                        style: { width: "90%" },
                        clearable: ""
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model", "disabled"])
            ], !0)
          ]),
          _: 3
        }, 8, ["modelValue"])
      ]);
    };
  }
});
const US = /* @__PURE__ */ ze(VS, [["__scopeId", "data-v-600ed17b"]]), gk = tt(US), jS = {
  key: 0,
  class: "ik-tabs-split overflow-overlay gl-padding"
}, WS = /* @__PURE__ */ He({
  __name: "IkPageTabs",
  props: Zn({
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
  emits: Zn(["tabClick", "search"], ["update:modelValue"]),
  setup(t, { emit: e }) {
    const n = t, r = Ys(t, "modelValue"), i = fe(/* @__PURE__ */ new Map());
    for (const o of n.tabs)
      i.value.set(o.id, n.lazyTab ? o.id !== r.value : !1);
    const s = (o) => {
      r.value = o.paneName, i.value.get(o.paneName) || e("tabClick", o.paneName, o), i.value.set(o.paneName, !1);
    };
    return (o, a) => {
      const l = Me("el-tab-pane"), c = Me("el-tabs");
      return T(), $(Ae, null, [
        M(c, {
          modelValue: r.value,
          "onUpdate:modelValue": a[0] || (a[0] = (u) => r.value = u),
          class: $e(["ik-tabs", {
            "is-default": o.$slots.default,
            "split gl-padding gl-container": t.split
          }]),
          onTabClick: s
        }, {
          default: Q(() => [
            (T(!0), $(Ae, null, qe(t.tabs, (u) => (T(), de(l, {
              key: u.id,
              disabled: u == null ? void 0 : u.disabled,
              name: u.id
            }, {
              label: Q(() => [
                P("span", null, pe(u.label), 1)
              ]),
              default: Q(() => [
                !o.$slots.default && !i.value.get(u.id) && !t.split ? Je(o.$slots, u.id, { key: 0 }, void 0, !0) : re("", !0)
              ]),
              _: 2
            }, 1032, ["disabled", "name"]))), 128)),
            o.$slots.default && t.defaultSlot && !t.split ? Je(o.$slots, "default", { key: 0 }, void 0, !0) : re("", !0)
          ]),
          _: 3
        }, 8, ["modelValue", "class"]),
        t.split ? (T(), $("div", jS, [
          (T(!0), $(Ae, null, qe(t.tabs, (u) => (T(), $(Ae, null, [
            !o.$slots.default && !i.value.get(u.id) ? Je(o.$slots, u.id, { key: 0 }, void 0, !0) : re("", !0)
          ], 64))), 256)),
          o.$slots.default && t.defaultSlot ? Je(o.$slots, "default", { key: 0 }, void 0, !0) : re("", !0)
        ])) : re("", !0)
      ], 64);
    };
  }
});
const qS = /* @__PURE__ */ ze(WS, [["__scopeId", "data-v-e282a7f2"]]), vk = tt(qS);
var pn = /* @__PURE__ */ ((t) => (t.input = "input", t.area = "area", t.number = "number", t.select = "select", t.date = "date", t.datetime = "datetime", t.checkbox = "checkbox", t.radio = "radio", t.treeselect = "treeselect", t.choosePerson = "choosePerson", t))(pn || {}), Un = /* @__PURE__ */ ((t) => (t.year = "year", t.month = "month", t.date = "date", t.dates = "dates", t.datetime = "datetime", t.week = "week", t.datetimerange = "datetimerange", t.daterange = "daterange", t.monthrange = "monthrange", t))(Un || {});
function fd(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !gd(t);
}
const YS = /* @__PURE__ */ He({
  name: "IkSearchAuto",
  props: {
    // 查询字段列表
    list: {
      required: !0,
      type: Array,
      default: () => []
    },
    // 阴影
    shadow: {
      type: String,
      default: "never"
    },
    // 初始首次查询
    immediate: {
      type: Boolean,
      default: !0
    },
    // tab页,用于存储时区分tab
    tab: {
      type: String,
      default: ""
    },
    // 搜索方法
    search: {
      type: Function,
      default: null
    },
    loading: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["search", "pickerChange"],
  setup(t, {
    emit: e,
    expose: n
  }) {
    const r = fe(), i = {}, s = fe({}), o = fe([]), a = fe({
      ...s.value
    });
    dt(o, (B, Y) => {
      const G = Y.filter((ue) => !B.includes(ue));
      if (G.length) {
        let ue = !1;
        G.forEach((ve) => {
          a.value[ve] !== void 0 && (ue = !0), a.value[ve] = void 0;
        }), ue && e("search", a.value);
      }
    });
    const l = () => {
      o.value = [], t.list.forEach((B) => {
        var Y, G;
        s.value[B.key] = s.value[B.value], i[B.key] = i[B.value], o.value.push(B.key), (Y = a.value)[G = B.key] ?? (Y[G] = B.value || null);
      });
    };
    l(), dt(() => t.list, () => {
      l();
    });
    const c = ye(() => o.value.map((B) => t.list.find((Y) => Y.key === B))), u = () => {
      var B;
      a.value.page = 1, (B = t.search) == null || B.call(t, a.value), e("search", a.value);
    };
    n({
      resetForm: () => {
        var B, Y;
        (Y = (B = r.value) == null ? void 0 : B.resetFields) == null || Y.call(B), u();
      },
      reRequest: () => {
        u();
      }
    });
    const f = () => {
      var B;
      e("search", a.value), (B = t.search) == null || B.call(t, a.value);
    }, g = (B) => {
      B.key === "Enter" && u();
    }, p = () => {
      var B;
      (B = r.value) == null || B.resetFields(), u();
    };
    t.immediate && u();
    const v = ({
      maxlength: B,
      minlength: Y,
      key: G,
      disabled: ue,
      placeholder: ve,
      formProp: Ee = {},
      value: ge,
      label: _e
    }) => M(qn, Ge({
      modelValue: a.value[G],
      "onUpdate:modelValue": [(De) => a.value[G] = De, (De) => a.value[G] = De],
      clearable: !0,
      maxlength: B,
      minlength: Y,
      disabled: ue,
      onBlur: () => f()
    }, Ee, {
      placeholder: (Ee == null ? void 0 : Ee.placeholder) || ve || `请输入${_e || ""}`
    }), null), m = ({
      key: B,
      placeholder: Y,
      max: G,
      min: ue,
      disabled: ve,
      precision: Ee,
      step: ge = 1,
      label: _e,
      formProp: De = {}
    }) => M(Cd, Ge({
      modelValue: a.value[B],
      "onUpdate:modelValue": (vt) => a.value[B] = vt,
      clearable: !0,
      max: G,
      min: ue,
      disabled: ve,
      precision: Ee,
      step: ge,
      onChange: () => f()
    }, De, {
      placeholder: (De == null ? void 0 : De.placeholder) || Y || `请输入${_e || ""}`
    }), null), x = ({
      key: B,
      placeholder: Y,
      disabled: G,
      options: ue,
      label: ve,
      multiple: Ee = !1,
      filterable: ge = !0,
      formProp: _e = {}
    }) => M(Wi, Ge({
      modelValue: a.value[B],
      "onUpdate:modelValue": (De) => a.value[B] = De,
      clearable: !0,
      disabled: G,
      multiple: Ee,
      filterable: ge,
      onChange: () => f()
    }, _e, {
      placeholder: (_e == null ? void 0 : _e.placeholder) || Y || `请选择${ve || ""}`
    }), {
      default: () => [ue == null ? void 0 : ue.map((De) => M(Gr, {
        key: De.value,
        label: De.label,
        value: De.value
      }, null))]
    }), b = ({
      key: B,
      disabled: Y,
      options: G,
      formProp: ue = {}
    }) => M(yr, Ge({
      modelValue: a.value[B],
      "onUpdate:modelValue": (ve) => a.value[B] = ve,
      disabled: Y,
      onChange: () => f()
    }, ue), {
      default: () => [G == null ? void 0 : G.map((ve) => (ue == null ? void 0 : ue.radioType) === "button" ? M(Md, {
        key: ve.value,
        label: ve.value,
        name: ve.label
      }, null) : M(ni, {
        key: ve.value,
        label: ve.value,
        name: ve.label
      }, null))]
    }), _ = ({
      key: B,
      disabled: Y,
      options: G,
      min: ue,
      max: ve,
      formProp: Ee = {}
    }) => M(ri, Ge({
      modelValue: a.value[B],
      "onUpdate:modelValue": (ge) => a.value[B] = ge,
      disabled: Y,
      max: ve,
      min: ue,
      onChange: () => f()
    }, Ee), {
      default: () => [G == null ? void 0 : G.map((ge) => M(tn, {
        key: ge.value,
        label: ge.label,
        value: ge.value
      }, null))]
    }), w = ({
      key: B,
      label: Y,
      formProp: G = {},
      placeholder: ue
    }) => M(gn, Ge({
      modelValue: a.value[B],
      "onUpdate:modelValue": (ve) => a.value[B] = ve,
      onChange: () => f()
    }, G, {
      placeholder: (G == null ? void 0 : G.placeholder) || ue || `请选择${Y}时间`
    }), null), S = ({
      key: B,
      disabled: Y,
      editable: G = !0,
      startPlaceholder: ue = "开始日期",
      endplaceholder: ve = "结束日期",
      dateType: Ee = Un.date,
      format: ge,
      placeholder: _e = "请选择日期",
      popperclass: De,
      rangeSeparator: vt = "-",
      defaultValue: mt,
      defaultTime: nt,
      valueFormat: We,
      disabledDate: Ke = () => !1,
      formProp: St = {}
    }) => {
      let ot = ge;
      if (ot)
        switch (Ee) {
          case Un.date:
          case Un.dates:
            ot = "YYYY-MM-DD";
            break;
          case Un.year:
            ot = "YYYY";
            break;
          case Un.month:
            ot = "YYYY-MM";
            break;
          case Un.week:
            ot = "YYYY-MM-DD";
            break;
          default:
            ot = "";
        }
      return M(gn, Ge({
        modelValue: a.value[B],
        "onUpdate:modelValue": (ht) => a.value[B] = ht,
        onChange: () => f(),
        disabled: Y,
        type: Ee,
        editable: G,
        startPlaceholder: ue,
        endPlaceholder: ve,
        rangeSeparator: vt,
        format: ot,
        popperClass: De,
        defaultValue: mt,
        defaultTime: nt,
        valueFormat: We,
        disabledDate: Ke
      }, St, {
        placeholder: (St == null ? void 0 : St.placeholder) || _e || "请选择日期"
      }), null);
    }, y = ({
      key: B,
      options: Y,
      multiple: G = !1,
      filterable: ue = !0,
      nodeKey: ve = "id",
      props: Ee,
      highlightCurrent: ge = !0,
      defaultExpandAll: _e = !1,
      expandOnClickNode: De = !1,
      placeholder: vt = "全部",
      checkOnClickNode: mt = !1,
      showCheckbox: nt = !1,
      checkStrictly: We = !0,
      defaultCheckedKeys: Ke = [],
      currentNodeKey: St = "",
      accordion: ot = !1,
      formProp: ht = {},
      label: Ut
    }) => M(kd, Ge({
      modelValue: a.value[B],
      "onUpdate:modelValue": (Mt) => a.value[B] = Mt,
      data: Y,
      onChange: () => f(),
      clearable: !0,
      multiple: G,
      props: Ee,
      placeholder: vt,
      filterable: ue,
      nodeKey: ve,
      highlightCurrent: ge,
      defaultExpandAll: _e,
      expandOnClickNode: De,
      checkOnClickNode: mt,
      showCheckbox: nt,
      checkStrictly: We,
      defaultCheckedKeys: Ke,
      currentNodeKey: St,
      accordion: ot
    }, ht, {
      placeholder: (ht == null ? void 0 : ht.placeholder) || vt || `请选择${Ut || ""}`
    }), null), E = ({
      key: B,
      selectKey: Y,
      placeholder: G,
      disabled: ue,
      options: ve,
      multiple: Ee = !1,
      filterable: ge = !0,
      formProp: _e = {}
    }) => M(qn, Ge({
      disabled: ue,
      modelValue: a.value[B],
      "onUpdate:modelValue": (De) => a.value[B] = De,
      onBlur: () => f()
    }, _e, {
      placeholder: (_e == null ? void 0 : _e.placeholder) || G || "全部"
    }), {
      prepend: () => M(Wi, Ge({
        disabled: ue,
        multiple: Ee,
        filterable: ge,
        modelValue: a.value[Y],
        "onUpdate:modelValue": (De) => a.value[Y] = De,
        onChange: () => f()
      }, _e), {
        default: () => [ve == null ? void 0 : ve.map((De) => M(Gr, {
          key: De.value,
          label: De.label,
          value: De.value
        }, null))]
      })
    }), I = "", A = "iking", k = fe(null), R = fe([]), N = fe(!1), V = fe(""), j = /* @__PURE__ */ new Map(), W = (B) => {
      N.value = !0, R.value = j.has(B) ? j.get(B) : a.value[B], V.value = B;
    }, J = () => {
      j.set(V.value, []), V.value = "", f();
    }, le = (B) => {
      var Y, G;
      a.value[V.value] = (Y = B.list.map((ue) => ue.elementName)) == null ? void 0 : Y.join(","), j.set(V.value, B.list), e("search", a.value), e("pickerChange", B), (G = t.search) == null || G.call(t, a.value);
    }, ie = ({
      key: B,
      placeholder: Y,
      typeOption: G,
      _list: ue,
      maxlength: ve,
      minlength: Ee,
      disabled: ge,
      formProp: _e
    }) => M(qn, Ge({
      modelValue: a.value[B],
      "onUpdate:modelValue": (De) => a.value[B] = De,
      clearable: !0,
      maxlength: ve,
      minlength: Ee,
      disabled: ge
    }, _e, {
      onClick: () => W(B),
      onClear: () => J(),
      placeholder: (_e == null ? void 0 : _e.placeholder) || Y || `点击选择${label || "人员"}`
    }), null), ce = (B) => {
      switch (B.type) {
        case "":
        case void 0:
        case pn.input:
        case "el-input":
          return v(B);
        case pn.number:
        case "el-input-number":
          return m(B);
        case pn.select:
        case "el-select":
          return x(B);
        case pn.checkbox:
        case "el-checkbox":
          return _(B);
        case pn.radio:
        case "el-radio-group":
        case "el-radio":
          return b(B);
        case pn.date:
        case "el-date-picker":
          return S(B);
        case "el-time-select":
          return w(B);
        case pn.treeselect:
        case "el-tree-select":
          return y(B);
        case pn.choosePerson:
          return ie(B);
        case "select-input":
          return E(B);
        default:
          return M(Ae, null, null);
      }
    }, K = ye(() => {
      var G;
      const B = [], Y = c.value.length - 1;
      return (G = c.value) == null || G.forEach((ue, ve) => {
        let Ee, ge;
        if (!ue)
          return [];
        const _e = ue.col || 1;
        B.push(M(Td, {
          xl: {
            span: _e * 6
          },
          lg: {
            span: _e * 6
          },
          md: {
            span: _e * 12
          },
          sm: {
            span: _e * 24
          }
        }, {
          default: () => [ve === Y ? (
            // 最后一个form后跟上选项className="last-form"
            M("div", {
              class: "last-form"
            }, [M(Wn, {
              label: ue.type === "select-input" ? "" : ue.label,
              prop: ue.key
            }, fd(Ee = ce(ue)) ? Ee : {
              default: () => [Ee]
            }), M(Zt, {
              name: "icon-sousuo1",
              pop: !0,
              title: "搜索",
              size: "big",
              "show-bg": !0,
              width: 40,
              onClick: () => f()
            }, null), M(Zt, {
              name: "icon-zhongzhi",
              pop: !0,
              title: "重置并搜索",
              size: "big",
              "show-bg": !0,
              width: 40,
              onClick: () => p()
            }, null)])
          ) : M(Wn, {
            label: ue.type === "select-input" ? "" : ue.label,
            prop: ue.key
          }, fd(ge = ce(ue)) ? ge : {
            default: () => [ge]
          })]
        }));
      }), B;
    });
    return () => M(Ae, null, [M(Ad, {
      class: "gl-search-card",
      shadow: t.shadow
    }, {
      default: () => [M(Fa, {
        class: "auto-search-form",
        onKeyup: g,
        ref: r,
        model: a.value
      }, {
        default: () => [M(Dd, {
          gutter: 16
        }, {
          default: () => [K.value]
        })]
      })]
    }), M(ho, {
      ref: k.value,
      modelValue: R.value,
      "onUpdate:modelValue": (B) => R.value = B,
      show: N.value,
      "onUpdate:show": (B) => N.value = B,
      "append-to-body": !0,
      api: {
        methods: "post",
        url: `${I}/server/component/pick/mix`,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: A
        }
      },
      tabs: ["group", "role", "post"],
      chooseType: ["user"],
      typeOption: {
        dep: "DEPT",
        user: "USER",
        role: "ROLE",
        post: "POST"
      },
      propOption: {
        name: "elementName",
        id: "elementId",
        type: "elementType"
      },
      onOk: (B) => le(B)
    }, null)]);
  }
}), GS = YS, QS = { class: "header-left" }, ZS = { class: "title" }, KS = { class: "flex items-center" }, XS = /* @__PURE__ */ He({
  __name: "IkPageHead",
  props: Zn({
    // 标题
    headerTitle: {
      type: String,
      default: ""
    },
    // 显示头部bottom  border
    headerBorder: {
      type: Boolean,
      default: !1
    },
    // 字段名列表
    fields: {
      required: !0,
      type: Array,
      default: () => []
    },
    // 查询方法
    search: {
      type: Function,
      default: null
    },
    loading: {
      type: Boolean,
      default: !1
    },
    // tab页id，用于保存用户配置
    tabId: {
      type: Number || String,
      default: 0
    },
    // 显示导出按钮
    exportBtn: {
      type: Boolean,
      default: !1
    },
    // 显示刷新按钮
    refreshBtn: {
      type: Boolean,
      default: !1
    },
    // 显示设置按钮
    settingBtn: {
      type: Boolean,
      default: !0
    },
    // 是否默认展开
    defaultShow: {
      type: Boolean,
      default: !1
    },
    // 高度
    headerHeight: {
      type: Number,
      default: 66
    }
  }, {
    modelValue: {
      type: Array,
      default: () => []
    }
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const e = t;
    vd((c) => ({
      ad902706: l
    })), console.log("IkBtnSetting 111", hd);
    const n = Ys(t, "modelValue"), r = fe(e.defaultShow), i = () => {
      r.value = !r.value;
    }, s = ye(() => e.fields.filter((c) => !c.onlyForm)), o = ye(() => {
      var c;
      return (c = e.fields) == null ? void 0 : c.filter((u) => u.search);
    }), a = ye(() => o.value.length), l = `${e.headerHeight}px`;
    return (c, u) => {
      const h = Me("el-card");
      return T(), $("div", {
        class: $e(["ik-page-header", { "show-search": r.value }])
      }, [
        P("div", {
          class: "header",
          style: Oe({
            borderColor: t.headerBorder ? "var(--ik-border-color)" : "transparent",
            marginBottom: t.headerBorder ? "8px" : "0"
          })
        }, [
          P("div", QS, [
            P("span", ZS, pe(t.headerTitle), 1),
            Je(c.$slots, "headerLeft", {}, void 0, !0)
          ]),
          P("div", KS, [
            Je(c.$slots, "headerRight", {}, void 0, !0),
            t.exportBtn ? (T(), de(F(Zt), {
              key: 0,
              name: "iksvg_xiazai",
              width: 40,
              type: "primary",
              title: "导出",
              "show-bg": "",
              pop: "",
              size: "big"
            })) : re("", !0),
            a.value ? (T(), de(F(Zt), {
              key: 1,
              name: "iksvg_shaixuan1",
              width: 40,
              title: r.value ? "收起筛选条件" : "展开筛选条件",
              "show-bg": "",
              pop: "",
              size: "big",
              onClick: i
            }, null, 8, ["title"])) : re("", !0),
            t.refreshBtn ? (T(), de(F(Zt), {
              key: 2,
              name: "iksvg_zhongzhi",
              title: "保留搜索条件刷新",
              "show-bg": "",
              width: 40,
              pop: "",
              size: "big",
              onClick: t.search
            }, null, 8, ["onClick"])) : re("", !0),
            M(F(hd), {
              modelValue: n.value,
              "onUpdate:modelValue": u[0] || (u[0] = (d) => n.value = d),
              title: "设置表格字段",
              list: s.value,
              tab: t.tabId
            }, null, 8, ["modelValue", "list", "tab"])
          ])
        ], 4),
        M(h, {
          shadow: "always",
          class: "search-form"
        }, {
          default: Q(() => [
            M(F(GS), {
              list: o.value,
              search: t.search,
              loading: t.loading
            }, null, 8, ["list", "search", "loading"]),
            P("span", {
              class: "hide-serch",
              onClick: i
            }, [
              M(F(Zt), {
                title: "收起",
                rotate: "180",
                name: "icon-shouqi"
              })
            ])
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const JS = /* @__PURE__ */ ze(XS, [["__scopeId", "data-v-ed2dd2b6"]]), Hh = {
  // 标题
  headerTitle: {
    type: String,
    default: ""
  },
  // 是否需要底部边框
  headerBorder: {
    type: Boolean,
    default: !1
  },
  // tabs
  tabs: {
    type: Array,
    default: () => []
  },
  // 字段名列表
  fields: {
    required: !0,
    type: Array,
    default: () => []
  },
  // 表格数据
  tableData: {
    type: Array,
    default: () => []
  },
  // 初始首次查询
  immediate: {
    type: Boolean,
    default: !0
  },
  // 表格数据总条数
  total: {
    type: Number,
    default: 0
  },
  // 查询方法
  search: {
    type: Function,
    default: null
  },
  // 显示表格复选框
  selection: {
    type: Boolean,
    default: !1
  },
  // 序号
  serial: {
    type: Boolean,
    default: !0
  },
  loading: {
    type: Boolean,
    default: !1
  },
  // tab页id，用于保存用户配置
  tabId: {
    type: Number || String,
    default: 0
  },
  // 显示导出按钮
  exportBtn: {
    type: Boolean,
    default: !1
  },
  // 显示刷新按钮
  refreshBtn: {
    type: Boolean,
    default: !0
  },
  // 显示设置按钮
  settingBtn: {
    type: Boolean,
    default: !0
  },
  // 选中项数量
  chooseLen: {
    type: Number,
    default: 0
  },
  // 当前页
  current: {
    type: Number,
    default: 1
  },
  // 是否默认展开搜索条件
  defaultShow: {
    type: Boolean,
    default: !1
  },
  // 新增弹框的尺寸   sl l xl
  dialogSize: {
    type: String,
    default: "l"
  },
  // 弹框标题（不传的话，默认为“新增”/“修改”）
  title: {
    type: String,
    default: ""
  },
  // 按钮权限
  role: {
    type: String,
    default: ""
  },
  // formKey
  formKey: {
    type: Object,
    default: () => ({})
  },
  // 新增修改弹框的默认属性
  dialogProp: {
    type: Object,
    default: () => {
    }
  },
  // header 高度
  headerHeight: {
    type: Number,
    default: 66
  }
}, eE = { class: "total" }, tE = { class: "num" }, nE = /* @__PURE__ */ He({
  __name: "IkPage",
  props: {
    // 总条数
    total: {
      type: Number,
      default: 0
    },
    // mini分页
    mini: {
      type: Boolean,
      default: !1
    },
    search: {
      type: Function,
      default: null
    },
    current: {
      type: Number,
      default: 0
    }
  },
  emits: ["currentChange", "sizeChange"],
  setup(t, { emit: e }) {
    const n = t, r = fe(1);
    dt(() => n.current, (l) => {
      r.value = l;
    });
    const i = [15, 30, 60, 100, 200, 500], s = fe(i[0]), o = (l) => {
      e("sizeChange", l), n == null || n.search({
        page: r.value,
        rows: s.value
      });
    }, a = (l) => {
      e("currentChange", l), n == null || n.search({
        page: r.value,
        rows: s.value
      });
    };
    return (l, c) => {
      const u = Me("el-pagination");
      return T(), de(u, Ge({
        "current-page": r.value,
        "onUpdate:currentPage": c[0] || (c[0] = (h) => r.value = h),
        "page-size": s.value,
        "onUpdate:pageSize": c[1] || (c[1] = (h) => s.value = h)
      }, l.$attrs, {
        layout: "slot, ->, sizes, prev, pager, next,  jumper",
        small: t.mini,
        total: t.total,
        "page-sizes": i,
        class: "ik-pagin-action",
        onSizeChange: o,
        onCurrentChange: a
      }), {
        default: Q(() => [
          P("span", eE, [
            Te(" 共"),
            P("span", tE, pe(t.total), 1),
            Te(" 项数据 ")
          ])
        ]),
        _: 1
      }, 16, ["current-page", "page-size", "small", "total"]);
    };
  }
});
const rE = /* @__PURE__ */ ze(nE, [["__scopeId", "data-v-e7b4fc6e"]]), iE = /* @__PURE__ */ He({
  __name: "IkPageTable",
  props: Hh,
  emits: ["selection-change", "page-change"],
  setup(t, { expose: e, emit: n }) {
    var h;
    const r = t, { attrs: i } = pp(), s = fe({
      page: ((h = i.page) == null ? void 0 : h.page) || 1,
      rows: 15
    }), o = ye(() => {
      const { page: d, rows: f } = (i == null ? void 0 : i.page) || s.value, g = st.cloneDeep(r.tableData);
      return g.forEach((p, v) => {
        p.__index = d === 1 ? v + 1 : (d - 1) * f + v + 1;
      }), g;
    }), a = (d) => {
      s.value = d, n("page-change", d), r.search();
    }, l = fe([]), c = (d) => {
      l.value = d, n("selection-change", d);
    }, u = fe();
    return e({ table: u }), (d, f) => {
      var m, x, b;
      const g = Me("el-table-column"), p = Me("el-table"), v = Gs("loading");
      return T(), $(Ae, null, [
        (m = d.$slots) != null && m.table ? Je(d.$slots, "table", { key: 0 }, void 0, !0) : (T(), de($a, {
          key: 1,
          name: "el-zoom-in-center"
        }, {
          default: Q(() => [
            Ot((T(), de(p, Ge({
              ref_key: "refTable",
              ref: u
            }, { ...d.$attrs, ...r }, {
              data: o.value,
              style: { width: "100%" },
              onSelectionChange: c
            }), {
              default: Q(() => [
                d.selection ? (T(), de(g, {
                  key: 0,
                  type: "selection",
                  align: "center",
                  width: "56"
                })) : re("", !0),
                d.serial ? (T(), de(g, {
                  key: 1,
                  prop: "__index",
                  label: "序号",
                  width: 60,
                  align: "center"
                })) : re("", !0),
                Je(d.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 16, ["data"])), [
              [v, d.loading]
            ])
          ]),
          _: 3
        })),
        d.total ? (T(), de(rE, {
          key: 2,
          current: ((b = (x = d.$attrs) == null ? void 0 : x.page) == null ? void 0 : b.page) || 1,
          total: d.total,
          search: a
        }, null, 8, ["current", "total"])) : re("", !0)
      ], 64);
    };
  }
});
const sE = /* @__PURE__ */ ze(iE, [["__scopeId", "data-v-41391707"]]), oE = { class: "choose" }, aE = { class: "btn" }, lE = /* @__PURE__ */ He({
  __name: "index",
  props: Zn(Hh, {
    modelValue: {
      type: Object,
      default: () => ({
        page: 1,
        rows: 15
      })
    }
  }),
  emits: Zn(["selection-change", "delete", "download", "addFunction"], ["update:modelValue"]),
  setup(t, { expose: e, emit: n }) {
    const r = t, i = Ys(t, "modelValue"), s = () => {
      var w;
      (w = i == null ? void 0 : i.value) != null && w.page && (i.value = {
        page: 1,
        rows: 15
      });
    };
    s();
    const o = (w) => {
      i.value = {
        ...i.value,
        ...w
      };
    }, a = (w) => {
      var y;
      s();
      const S = (w == null ? void 0 : w.type) === "click" ? {} : w;
      i.value = {
        ...i.value,
        ...S
      }, (y = r == null ? void 0 : r.search) == null || y.call(r, {
        ...i.value
      });
    }, l = fe([]), c = (w) => {
      l.value = w, n("selection-change", w);
    }, u = ye(() => l.value.length || r.chooseLen), h = fe(r.fields), d = ye(() => "light"), f = fe(), g = fe(), p = fe(), v = fe(!1), m = fe(void 0), x = fe(r.title || ""), b = (w) => {
      m.value = w ? { ...w } : null, r.title ? r.title.includes("新增") || r.title.includes("修改") ? x.value = w ? r.title.replace(/新增/g, "修改") : r.title.replace(/修改/g, "新增") : x.value = w ? `修改${r.title}` : `新增${r.title}` : x.value = w ? "修改" : "新增", v.value = !0;
    }, _ = ye(() => r.fields.find((w) => w.isEdit));
    return e({
      table: f,
      header: g,
      chooseList: l,
      srotFields: h,
      pageData: i,
      dialog: p,
      handAdd: b
    }), (w, S) => {
      const y = Me("el-button"), E = Me("IkNumberDuration"), I = Me("el-table-column"), A = Gs("role");
      return T(), $(Ae, null, [
        M(JS, Ge({
          ref_key: "refHeader",
          ref: g
        }, { ...w.$attrs, ...r }, {
          modelValue: h.value,
          "onUpdate:modelValue": S[1] || (S[1] = (k) => h.value = k),
          loading: w.loading,
          search: a,
          "tab-id": w.tabId
        }), {
          headerLeft: Q(() => [
            Je(w.$slots, "headerLeft", {}, void 0, !0)
          ]),
          headerRight: Q(() => [
            Je(w.$slots, "headerRight", {}, () => [
              _.value ? Ot((T(), de(y, {
                key: 0,
                type: "primary",
                onClick: S[0] || (S[0] = (k) => b(null))
              }, {
                default: Q(() => [
                  Te(" 新增 ")
                ]),
                _: 1
              })), [
                [A, w.role]
              ]) : re("", !0)
            ], !0)
          ]),
          _: 3
        }, 16, ["modelValue", "loading", "tab-id"]),
        w.selection ? (T(), $("div", {
          key: 0,
          class: $e(["hand-selection", { select: u.value }])
        }, [
          P("p", oE, [
            Te(" 已选 "),
            P("span", null, [
              M(E, { value: u.value }, null, 8, ["value"])
            ]),
            Te(" 条 ")
          ]),
          P("div", aE, [
            w.$slots.selectionRight ? Je(w.$slots, "selectionRight", { key: 1 }, void 0, !0) : (T(), $(Ae, { key: 0 }, [
              M(F(Zt), {
                name: "icon-shanchu",
                "show-bg": "",
                background: "var(--el-bg-color)",
                width: 40,
                type: "primary",
                onClick: S[2] || (S[2] = (k) => w.$emit("delete", l.value))
              }),
              M(F(Zt), {
                name: "icon-xiazai",
                "show-bg": "",
                background: "var(--el-bg-color)",
                width: 40,
                type: "primary",
                onClick: S[3] || (S[3] = (k) => w.$emit("download", l.value))
              })
            ], 64))
          ])
        ], 2)) : re("", !0),
        Je(w.$slots, "table", {}, () => [
          M(sE, Ge({
            ref_key: "refTable",
            ref: f,
            page: i.value
          }, { ...w.$attrs, ...r }, {
            onPageChange: o,
            onSelectionChange: c
          }), {
            default: Q(() => [
              (T(!0), $(Ae, null, qe(h.value, (k) => (T(), $(Ae, {
                key: k.key
              }, [
                k.show ? (T(), $(Ae, { key: 0 }, [
                  k.tableSlot ? (T(), de(I, Ge({
                    key: 1,
                    align: k.align,
                    width: k.width,
                    "min-width": k.minWidth,
                    "show-overflow-tooltip": {
                      effect: d.value ?? "light"
                    }
                  }, { ...k, ...w.$attrs, ...r }), {
                    default: Q((R) => [
                      Je(w.$slots, k.tableSlot, { data: R }, void 0, !0)
                    ]),
                    _: 2
                  }, 1040, ["align", "width", "min-width", "show-overflow-tooltip"])) : (T(), de(I, Ge({
                    key: 0,
                    prop: k.key,
                    width: k.width,
                    "min-width": k.minWidth,
                    align: k.align,
                    "show-overflow-tooltip": {
                      effect: d.value ?? "light"
                    },
                    "show-arrow": !1
                  }, { ...k, ...w.$attrs, ...r }), null, 16, ["prop", "width", "min-width", "align", "show-overflow-tooltip"]))
                ], 64)) : re("", !0)
              ], 64))), 128))
            ]),
            _: 3
          }, 16, ["page"])
        ], !0)
      ], 64);
    };
  }
});
const cE = /* @__PURE__ */ ze(lE, [["__scopeId", "data-v-e345a12f"]]), mk = tt(cE), uE = {}, dE = {
  t: "1672196428320",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3618",
  width: "200",
  height: "200"
}, fE = /* @__PURE__ */ P("path", {
  d: "M384 250V134a70 70 0 0 0-70-70H134a70 70 0 0 0-70 70v116a70 70 0 0 0 70 70h180a70 70 0 0 0 70-70z m-80-10H144v-96h160zM890 704H710a70 70 0 0 0-70 70v116a70 70 0 0 0 70 70h180a70 70 0 0 0 70-70V774a70 70 0 0 0-70-70z m-10 176H720v-96h160zM890 384H710a70 70 0 0 0-70 70v116a70 70 0 0 0 70 70h180a70 70 0 0 0 70-70V454a70 70 0 0 0-70-70z m-10 176H720v-96h160zM536 504H264v-80a40 40 0 0 0-40-40 40 40 0 0 0-40 40v432a40 40 0 0 0 40 40h312a40 40 0 0 0 40-40 40 40 0 0 0-40-40H264V584h272a40 40 0 0 0 40-40 40 40 0 0 0-40-40z",
  "p-id": "3619",
  "data-spm-anchor-id": "a313x.7781069.0.i2",
  class: "selected"
}, null, -1), hE = [
  fE
];
function pE(t, e) {
  return T(), $("svg", dE, hE);
}
const Zo = /* @__PURE__ */ ze(uE, [["render", pE]]), gE = {}, vE = {
  t: "1672197639916",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "19012"
}, mE = /* @__PURE__ */ P("path", {
  d: "M863.1 255.1H551.3c-25.1 0-49.2-9.8-67.1-27.4l-75-73.4c-17.9-17.5-42-27.4-67.1-27.4H161c-53 0-96 43-96 96v512.8c0 53 43 96 96 96h702c53 0 96-43 96-96V351.1c0.1-53-42.9-96-95.9-96z m-31 161.1c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32v-0.1c0-17.7 14.3-32 32-32h576.1c17.7 0 32 14.3 32 32v0.1z",
  "p-id": "19013"
}, null, -1), bE = [
  mE
];
function yE(t, e) {
  return T(), $("svg", vE, bE);
}
const $r = /* @__PURE__ */ ze(gE, [["render", yE]]), xE = {}, _E = {
  t: "1672197222005",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "14755"
}, wE = /* @__PURE__ */ P("path", {
  d: "M959.68 921.024c-15.232-181.696-139.648-331.968-307.84-386.624 70.464-45.632 117.248-124.48 117.248-214.464C769.152 178.624 654.208 64 512.512 64 370.752 64 255.808 178.624 255.808 319.936c0 89.984 46.784 168.832 117.248 214.528-168.192 54.592-292.544 204.864-307.84 386.56-0.192 3.456-0.64 5.44 0 10.176C66.496 947.2 80.64 960 96.704 960c17.92 0 32.064-14.656 32.064-32 16.704-197.76 182.272-351.936 383.744-351.936 201.408 0 366.976 154.176 383.68 351.936 0 17.344 14.144 32 32.064 32 16.064 0 30.208-12.8 31.424-28.8C960.32 926.464 959.936 924.416 959.68 921.024zM320 319.936C320 213.952 406.208 128 512.512 128s192.448 85.952 192.448 191.936c0 106.048-86.144 192-192.448 192S320 425.984 320 319.936z",
  "p-id": "14756"
}, null, -1), SE = [
  wE
];
function EE(t, e) {
  return T(), $("svg", _E, SE);
}
const Ii = /* @__PURE__ */ ze(xE, [["render", EE]]), CE = {}, kE = {
  t: "1672194715727",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  "p-id": "2667"
}, AE = /* @__PURE__ */ P("path", {
  d: "M809.246403 771.926938 777.737782 803.458071 924.965961 950.667831 956.476629 919.157163Z",
  fill: "#5D5D5D",
  "p-id": "2668"
}, null, -1), DE = /* @__PURE__ */ P("path", {
  d: "M454.878536 70.285786C239.51556 70.285786 64.93236 244.847497 64.93236 460.231963c0 215.341486 174.583201 389.945153 389.945153 389.945153 215.362976 0 389.9472-174.603667 389.9472-389.945153C844.825736 244.847497 670.241512 70.285786 454.878536 70.285786zM454.878536 805.611108c-190.750415 0-345.381192-154.626683-345.381192-345.379145 0-190.751439 154.629753-345.380168 345.381192-345.380168 190.752462 0 345.382215 154.62873 345.382215 345.380168C800.259728 650.983401 645.630998 805.611108 454.878536 805.611108z",
  fill: "#5D5D5D",
  "p-id": "2669"
}, null, -1), TE = [
  AE,
  DE
];
function RE(t, e) {
  return T(), $("svg", kE, TE);
}
const IE = /* @__PURE__ */ ze(CE, [["render", RE]]), ME = {}, OE = {
  t: "1672212880079",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "19924"
}, NE = /* @__PURE__ */ P("path", {
  d: "M806.4 263.2l-45.6-45.6L512 467.2 263.2 217.6l-45.6 45.6L467.2 512 217.6 760.8l45.6 45.6L512 557.6l248.8 248.8 45.6-45.6L557.6 512z",
  "p-id": "19925"
}, null, -1), BE = [
  NE
];
function LE(t, e) {
  return T(), $("svg", OE, BE);
}
const PE = /* @__PURE__ */ ze(ME, [["render", LE]]), $E = {}, HE = {
  t: "1672216076738",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "28376"
}, FE = /* @__PURE__ */ P("path", {
  d: "M501.937582 545.097053c147.891962 0 268.231366-118.534055 268.223274-264.288929 0-145.746783-120.330301-264.28994-268.222263-264.28994-147.890951 0-268.221252 118.584625-268.221252 264.28994C233.71633 426.520519 354.046631 545.097053 501.937582 545.097053zM612.471463 570.546911 411.497184 570.546911c-186.760063 0-338.664249 149.569875-338.664249 333.472733l0 19.794109c0 96.139636 149.47278 96.139636 338.664249 96.139636l200.974278 0c181.747565 0 338.694591 0 338.694591-96.139636l0-19.794109C951.164031 720.158252 799.235571 570.546911 612.471463 570.546911z",
  "p-id": "28377"
}, null, -1), zE = [
  FE
];
function VE(t, e) {
  return T(), $("svg", HE, zE);
}
const hr = /* @__PURE__ */ ze($E, [["render", VE]]), UE = {}, jE = {
  t: "1680231254898",
  class: "icon",
  viewBox: "0 0 1154 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "9556"
}, WE = /* @__PURE__ */ P("path", {
  d: "M1015.808 64.512q62.464 0 99.84 31.744t37.376 96.256l0 568.32q0 27.648-10.24 52.224t-28.16 43.008-41.984 29.184-50.688 10.752l-892.928 0q-26.624 0-50.176-10.24t-40.96-27.136-27.648-39.424-10.24-48.128l0-580.608q0-55.296 33.792-90.624t95.232-35.328l886.784 0zM287.744 253.952q-19.456 0-36.864 7.168t-30.72 19.968-20.992 30.72-7.68 38.4 7.68 37.888 20.992 30.72 30.72 20.992 36.864 7.68q21.504 0 39.424-7.68t30.72-20.992 20.48-30.72 7.68-37.888q0-41.984-27.648-69.12t-70.656-27.136zM448.512 608.256q0-19.456-7.68-37.376t-20.48-30.72-30.72-20.48-37.376-7.68l-128 0q-39.936 0-67.584 28.16t-27.648 68.096l0 4.096 0 92.16 319.488 0 0-92.16 0-4.096zM923.648 709.632q20.48 0 30.208-10.24t9.728-24.576-11.264-25.088-31.744-10.752l-305.152 0q-20.48 0-30.72 10.752t-10.24 25.088 10.24 24.576 29.696 10.24l309.248 0zM924.672 577.536q20.48 0 29.696-10.24t9.216-24.576q0-15.36-8.704-25.6t-29.184-10.24l-313.344 0q-20.48 0-29.696 10.24t-9.216 25.6q0 14.336 8.704 24.576t29.184 10.24l313.344 0zM925.696 447.488q15.36 0 26.624-10.24t11.264-24.576-11.264-23.04-26.624-8.704l-207.872 0q-15.36 0-26.112 8.704t-10.752 23.04 10.752 24.576 26.112 10.24l207.872 0z",
  "p-id": "9557"
}, null, -1), qE = [
  WE
];
function YE(t, e) {
  return T(), $("svg", jE, qE);
}
const La = /* @__PURE__ */ ze(UE, [["render", YE]]), GE = {}, QE = {
  t: "1698719360533",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "15490",
  width: "200",
  height: "200"
}, ZE = /* @__PURE__ */ P("path", {
  d: "M960 704h-63.616v-167.392a32 32 0 0 0-32-32H544V416h160a32 32 0 0 0 32-32V96a32 32 0 0 0-32-32H320a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h160v88.608H161.984a32 32 0 0 0-32 31.968L129.792 704H64a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-192a32 32 0 0 0-32-32H193.792l0.16-135.392H480V704h-64a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-192a32 32 0 0 0-32-32h-64v-135.392h288.384V704H768a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-192a32 32 0 0 0-32-32zM352 128h320v224H352V128zM224 896H96v-128h128v128z m352 0h-128v-128h128v128z m352 0h-128v-128h128v128z",
  "p-id": "15491"
}, null, -1), KE = [
  ZE
];
function XE(t, e) {
  return T(), $("svg", QE, KE);
}
const Hr = /* @__PURE__ */ ze(GE, [["render", XE]]), Fh = {
  // 所有数据
  list: {
    type: Array,
    default: () => []
  },
  // 已选数据
  handList: {
    type: Array,
    default: () => []
  },
  // 是否多选
  multiple: {
    type: Boolean,
    default: !0
  },
  // 最大允许选择数量
  // 0表示不限制
  max: {
    type: Number,
    default: 0
  },
  fixPropOpt: {
    type: Object,
    default: () => {
    }
  },
  height: {
    type: String,
    default: "404px"
  }
}, JE = { class: "left-pick-list" }, eC = { class: "post-view-list" }, tC = { class: "ik-picker-single" }, nC = /* @__PURE__ */ He({
  __name: "PostList",
  props: Fh,
  emits: ["change", "check"],
  setup(t, { emit: e }) {
    var u, h;
    const n = t, r = ye(() => {
      var d, f;
      return ((d = n.handList) == null ? void 0 : d.length) === ((f = n.list) == null ? void 0 : f.length);
    }), i = ye(() => {
      var g, p, v, m;
      const d = (g = n.handList) == null ? void 0 : g.length, f = (p = n.list) == null ? void 0 : p.length;
      return n.multiple ? s.value = n.handList.map((x) => x[n.fixPropOpt.id]) : o.value = (m = (v = n.handList) == null ? void 0 : v[0]) == null ? void 0 : m[n.fixPropOpt.id], d > 0 && d < f;
    }), s = fe(
      n.handList.map((d) => d[n.fixPropOpt.id])
    ), o = fe((h = (u = n.handList) == null ? void 0 : u[0]) == null ? void 0 : h[n.fixPropOpt.id]), a = (d) => {
      const f = d ? n.list.map((g) => g[n.fixPropOpt.id]) : [];
      e("change", f, d ? n.list : []);
    }, l = (d) => {
      e("change", d, n.list);
    }, c = (d) => {
      e("change", d, n.list);
    };
    return (d, f) => (T(), $("div", JE, [
      d.multiple ? (T(), de(F(tn), {
        key: 0,
        modelValue: r.value,
        "onUpdate:modelValue": f[0] || (f[0] = (g) => r.value = g),
        indeterminate: i.value,
        onChange: a
      }, {
        default: Q(() => [
          Te("全选")
        ]),
        _: 1
      }, 8, ["modelValue", "indeterminate"])) : re("", !0),
      P("ul", eC, [
        d.multiple ? (T(), de(F(ri), {
          key: 0,
          modelValue: s.value,
          "onUpdate:modelValue": f[1] || (f[1] = (g) => s.value = g),
          onChange: l
        }, {
          default: Q(() => [
            (T(!0), $(Ae, null, qe(d.list, (g) => (T(), $("li", {
              key: g[n.fixPropOpt.id]
            }, [
              M(F(tn), {
                label: g[n.fixPropOpt.id]
              }, {
                default: Q(() => [
                  M(La),
                  P("p", null, pe(g[n.fixPropOpt.name]), 1)
                ]),
                _: 2
              }, 1032, ["label"])
            ]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])) : (T(), de(F(yr), {
          key: 1,
          isIndeterminate: i.value,
          modelValue: o.value,
          "onUpdate:modelValue": f[2] || (f[2] = (g) => o.value = g),
          onChange: c
        }, {
          default: Q(() => [
            (T(!0), $(Ae, null, qe(d.list, (g) => (T(), $("li", {
              class: "w-full",
              key: g[n.fixPropOpt.id]
            }, [
              M(F(ni), {
                label: g[n.fixPropOpt.id]
              }, {
                default: Q(() => [
                  P("div", tC, [
                    M(La),
                    P("p", null, pe(g[n.fixPropOpt.name]), 1)
                  ])
                ]),
                _: 2
              }, 1032, ["label"])
            ]))), 128))
          ]),
          _: 1
        }, 8, ["isIndeterminate", "modelValue"]))
      ])
    ]));
  }
});
const rC = /* @__PURE__ */ ze(nC, [["__scopeId", "data-v-c47c3e50"]]), iC = { class: "left-pick-list" }, sC = { class: "role-view-list" }, oC = ["title"], aC = { class: "ik-picker-single" }, lC = ["title"], cC = /* @__PURE__ */ He({
  __name: "RoleList",
  props: Fh,
  emits: ["change", "check"],
  setup(t, { emit: e }) {
    var u, h;
    const n = t, r = ye(() => {
      var d, f;
      return ((d = n.handList) == null ? void 0 : d.length) === ((f = n.list) == null ? void 0 : f.length);
    }), i = ye(() => {
      var g, p, v, m;
      const d = (g = n.handList) == null ? void 0 : g.length, f = (p = n.list) == null ? void 0 : p.length;
      return n.multiple ? s.value = n.handList.map((x) => x[n.fixPropOpt.id]) : o.value = (m = (v = n.handList) == null ? void 0 : v[0]) == null ? void 0 : m[n.fixPropOpt.id], d > 0 && d < f;
    }), s = fe(
      n.handList.map((d) => d[n.fixPropOpt.id])
    ), o = fe((h = (u = n.handList) == null ? void 0 : u[0]) == null ? void 0 : h[n.fixPropOpt.id]), a = (d) => {
      const f = d ? n.list.map((g) => g[n.fixPropOpt.id]) : [];
      e("change", f, d ? n.list : []);
    }, l = (d) => {
      e("change", d, n.list);
    }, c = (d) => {
      e("change", d, n.list);
    };
    return (d, f) => (T(), $("div", iC, [
      d.multiple ? (T(), de(F(tn), {
        key: 0,
        modelValue: r.value,
        "onUpdate:modelValue": f[0] || (f[0] = (g) => r.value = g),
        indeterminate: i.value,
        onChange: a
      }, {
        default: Q(() => [
          Te("全选")
        ]),
        _: 1
      }, 8, ["modelValue", "indeterminate"])) : re("", !0),
      P("ul", sC, [
        d.multiple ? (T(), de(F(ri), {
          key: 0,
          modelValue: s.value,
          "onUpdate:modelValue": f[1] || (f[1] = (g) => s.value = g),
          onChange: l
        }, {
          default: Q(() => [
            (T(!0), $(Ae, null, qe(d.list, (g) => (T(), $("li", {
              key: g[d.fixPropOpt.id]
            }, [
              M(F(tn), {
                label: g[d.fixPropOpt.id],
                value: g[d.fixPropOpt.id],
                disabled: g.disabled
              }, {
                default: Q(() => [
                  M(hr),
                  P("p", {
                    title: g[d.fixPropOpt.name]
                  }, pe(g[d.fixPropOpt.name]), 9, oC)
                ]),
                _: 2
              }, 1032, ["label", "value", "disabled"])
            ]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])) : (T(), de(F(yr), {
          key: 1,
          indeterminate: i.value,
          modelValue: o.value,
          "onUpdate:modelValue": f[2] || (f[2] = (g) => o.value = g),
          onChange: c
        }, {
          default: Q(() => [
            (T(!0), $(Ae, null, qe(d.list, (g) => (T(), $("li", {
              class: "w-full",
              key: g[d.fixPropOpt.id]
            }, [
              M(F(ni), {
                label: g[d.fixPropOpt.id],
                value: g[d.fixPropOpt.id],
                disabled: g.disabled
              }, {
                default: Q(() => [
                  P("div", aC, [
                    M(hr),
                    P("p", {
                      title: g[d.fixPropOpt.name]
                    }, pe(g[d.fixPropOpt.name]), 9, lC)
                  ])
                ]),
                _: 2
              }, 1032, ["label", "value", "disabled"])
            ]))), 128))
          ]),
          _: 1
        }, 8, ["indeterminate", "modelValue"]))
      ])
    ]));
  }
});
const uC = /* @__PURE__ */ ze(cC, [["__scopeId", "data-v-a51e0920"]]);
var Lt = /* @__PURE__ */ ((t) => (t.org = "organization", t.dep = "dep", t.user = "user", t.role = "role", t.post = "post", t.dep_user = "dep_user", t))(Lt || {}), Ur = /* @__PURE__ */ ((t) => (t.group = "group", t.role = "role", t.post = "post", t))(Ur || {});
const En = {
  animation: 200,
  group: "gl",
  disabled: !1,
  ghostClass: "ghost",
  sort: !0,
  delay: 100,
  showIcon: !0,
  itemStyle: {
    radius: 25,
    bottom: 8,
    background: "#0000"
  }
}, dC = {
  // 是否允许点击根节点查询
  topLink: {
    type: Boolean,
    default: !0
  },
  // 是否允许选择子集
  children: {
    type: Boolean,
    default: !0
  },
  // 参数
  modelValue: {
    type: Array,
    default: () => []
  },
  // 已选数据 - 数据回显
  data: {
    type: Array,
    default: () => []
  },
  // 默认最顶层节点id
  pid: {
    type: String,
    default: ""
  },
  // 默认顶层组织节点id
  orgPid: {
    type: String,
    default: "root"
  },
  // 默认顶层组织
  org: {
    type: Object,
    default: () => null
  },
  // 默认搜索
  immediate: {
    type: Boolean,
    default: !1
  },
  // 是否显示
  show: {
    type: Boolean,
    default: !1,
    required: !0
  },
  // 宽度 为Number时为百分比，字符串时为具体像素
  width: {
    type: String,
    default: "685px"
  },
  height: {
    type: String,
    default: "580px"
  },
  // 标题
  title: {
    type: String,
    default: "选择人员"
  },
  // 组织数据
  organizationList: {
    type: Array,
    default: () => []
  },
  // 部门数据
  depList: {
    type: Array,
    default: () => []
  },
  // 人员数据
  userList: {
    type: Array,
    default: () => []
  },
  // 角色数据
  roleList: {
    type: Array,
    default: () => []
  },
  // 岗位数据
  postList: {
    type: Array,
    default: () => []
  },
  // 是否多选
  multiple: {
    type: Boolean,
    default: !0
  },
  // 最大允许选择数量
  // 0表示不限制
  max: {
    type: Number,
    default: 0
  },
  // 显示的选项卡
  // 当只有一个选项卡时，不显示tab页
  tabs: {
    type: Array,
    // prop校验
    validator: (t) => {
      if (t === void 0)
        return !0;
      if (Array.isArray(t)) {
        if (!(t != null && t.length))
          return !1;
      } else
        return console.error("IkingPicker参数错误：tabs必须是Array类型"), !1;
      return !0;
    },
    default: () => ["group", "role", "post"]
  },
  showDep: {
    type: Boolean,
    default: !0
  },
  // 选择类别
  chooseType: {
    type: Array,
    // 传['dep_user']选择部门和人员 传['dep']则只选择部门，传['user']则只选择人员，传['role']则只选择角色 ['post']
    // 不传则默认选择人员和部门
    // 传['dep', 'user']则选择人员和部门
    // 传['dep', 'user', 'role']则选择人员、部门和角色
    default: () => ["dep"]
  },
  // api地址
  api: {
    type: Object,
    default: () => ({
      methods: "post",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: "Bearer iking"
      },
      url: `${location.origin}${location.pathname}/serve/component/pick/mix`,
      param: null,
      paramKey: "type"
    })
  },
  // 类型字段映射
  typeOption: {
    type: Object,
    default: () => {
    }
  },
  // 字段映射 {name: 'label', type: 'type'}
  propOption: {
    type: Object,
    default: () => null
  },
  // 显示搜索栏
  search: {
    type: Boolean,
    default: !0
  },
  // 是否懒加载
  lazy: {
    type: Boolean,
    default: !0
  },
  // imageBaseUrl
  imageBaseUrl: {
    type: String,
    default: ""
  },
  // 是否缓存请求过得数据
  cache: {
    type: Boolean,
    default: !0
  },
  // placeholder
  placeholder: {
    type: String,
    default: "模糊搜索组织、人员、角色、岗位"
  },
  emptyText: {
    type: String,
    default: "暂无数据"
  }
}, fC = (t, e) => {
  const n = fe([]), r = async (s, o, a) => {
    var E, I;
    const { url: l, methods: c, headers: u, param: h } = t.value || {}, d = {
      parentOrgId: s,
      ...h || {},
      parentDepartmentId: o || "",
      name: a || ""
    }, f = await fetch(l, {
      method: c,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        ...u
      },
      body: JSON.stringify(d)
    }), { success: g, data: p } = await f.json();
    if (!g)
      return {
        depList: [],
        roleList: [],
        postList: [],
        userList: [],
        organizationList: [],
        rootOrganization: {},
        rootDepartment: {}
      };
    const { departments: v, roles: m, posts: x, users: b, organizations: _, rootOrganization: w, rootDepartment: S } = p, y = w || S;
    return n.value[0] = e.org ? {
      ...e.org,
      id: e.elementId,
      elementType: (I = (E = e.org) == null ? void 0 : E.elementType) == null ? void 0 : I.toLocaleUpperCase()
    } : {
      ...y,
      id: y.elementId
    }, {
      depList: st.cloneDeep(v),
      roleList: st.cloneDeep(m),
      postList: st.cloneDeep(x),
      userList: st.cloneDeep(b),
      organizationList: st.cloneDeep(_),
      rootOrganization: w,
      rootDepartment: S
    };
  };
  return {
    handData: r,
    handSetChild: (s, o) => {
      r(s == null ? void 0 : s.elementId, o);
    },
    bannerList: n
  };
}, hC = {
  shadow: "hover",
  class: "sel-list"
}, pC = { key: 0 }, gC = {
  key: 0,
  class: "check-all"
}, vC = {
  key: 0,
  class: "view-list"
}, mC = {
  key: 0,
  class: "filter-user"
}, bC = { class: "filter-user" }, yC = {
  key: 2,
  class: "next-child"
}, xC = { class: "filter-user" }, _C = {
  key: 1,
  class: "filter-user"
}, wC = {
  key: 2,
  class: "next-child"
}, SC = { class: "text-over-flow" }, EC = { class: "text-over-flow" }, CC = { class: "text-over-flow" }, kC = {
  key: 2,
  class: "next-child"
}, AC = {
  key: 1,
  class: "empty"
}, DC = /* @__PURE__ */ P("div", { class: "split-div" }, null, -1), TC = { class: "choose-list" }, RC = { class: "choose-item" }, IC = /* @__PURE__ */ P("div", null, "已选", -1), MC = { class: "dialog-footer" }, OC = /* @__PURE__ */ He({
  __name: "picker",
  props: dC,
  emits: ["handChild", "update:show", "update:modelValue", "ok", "search"],
  setup(t, { expose: e, emit: n }) {
    const r = t;
    vd((Z) => ({
      "3e125c61": pt.value
    }));
    const i = fe(""), s = fe(""), o = fe(""), a = fe([]), l = fe([]), c = fe([]), u = fe([]), h = fe([]), d = fe(!1), f = r.imageBaseUrl || `${location.origin}/server/oss/download?fileUrl=`, g = (Z) => Z ? Z.startsWith("http") ? Z : `${f}${Z}` : "";
    dt(() => r.api, () => {
      r.show && A("");
    });
    const p = ye(() => ({
      name: "name",
      type: "type",
      id: "id",
      avatar: "avatar",
      ...r.propOption
    })), v = ye(() => ({
      dep: "DEPT",
      user: "USER",
      role: "ROLE",
      post: "POST",
      organization: "ORGANIZATION",
      ...r.typeOption
    })), m = fe([]), x = fC(gp(r, "api"), r), b = x.handData, _ = x.bannerList;
    r.immediate && b(o.value, s.value, i.value);
    const w = (Z) => (Z.forEach((oe) => {
      var q, be;
      oe.disabled = ((be = (q = r.modelValue) == null ? void 0 : q.find((Fe) => Fe[p.value.id] === oe[p.value.id])) == null ? void 0 : be.disabled) || !1;
    }), Z), S = async () => {
      var Z, oe, q, be, Fe, yt, Wt, Ft, Pn;
      d.value = !0;
      try {
        if ((Z = r.depList) != null && Z.length || (oe = r.userList) != null && oe.length || (q = r.roleList) != null && q.length || (be = r.postList) != null && be.length) {
          a.value = (Fe = r.userList) == null ? void 0 : Fe.filter((_t) => _t[p.value.name].includes(i.value)), l.value = (yt = r.depList) == null ? void 0 : yt.filter((_t) => _t[p.value.name].includes(i.value)), c.value = (Wt = r.roleList) == null ? void 0 : Wt.filter((_t) => _t[p.value.name].includes(i.value)), u.value = (Ft = r.postList) == null ? void 0 : Ft.filter((_t) => _t[p.value.name].includes(i.value)), h.value = (Pn = r.organizationList) == null ? void 0 : Pn.filter((_t) => _t[p.value.name].includes(i.value)), B(), d.value = !1;
          return;
        }
        const at = await b(o.value, s.value, i.value);
        try {
          a.value = w((at == null ? void 0 : at.userList) || []), l.value = w((at == null ? void 0 : at.depList) || []), c.value = w((at == null ? void 0 : at.roleList) || []), u.value = w((at == null ? void 0 : at.postList) || []), h.value = w((at == null ? void 0 : at.organizationList) || []);
        } catch (_t) {
          d.value = !1, console.info("error: ", _t);
        }
        B(), d.value = !1;
      } catch {
        d.value = !1;
      }
    }, y = rn({
      // 组织
      org: /* @__PURE__ */ new Map(),
      // 部门
      dep: /* @__PURE__ */ new Map(),
      // 用户
      user: /* @__PURE__ */ new Map(),
      // 角色
      role: /* @__PURE__ */ new Map(),
      // 岗位
      post: /* @__PURE__ */ new Map(),
      // 当前数据已选项
      trans: [],
      // 单选
      single: ""
    }), E = rn({
      indeterminate: !1,
      checkAll: 0
    }), I = (Z) => y.org.has(Z) || y.dep.has(Z) || y.user.has(Z) || y.role.has(Z) || y.post.has(Z), A = _b.debounce(S, 300), k = ye(() => {
      const Z = Array.from(y.org.values()), oe = Array.from(y.dep.values()), q = Array.from(y.role.values()), be = Array.from(y.user.values()), Fe = Array.from(y.post.values());
      return m.value = [...Z, ...oe, ...q, ...Fe, ...be], {
        list: [...Z, ...oe, ...q, ...be, ...Fe],
        org: {
          list: Z,
          len: Z.length,
          deps: Z
        },
        dep: {
          list: oe,
          len: oe.length,
          deps: oe
        },
        role: {
          list: q,
          len: q.length
        },
        user: {
          list: be,
          len: be.length
        },
        post: {
          list: Fe,
          len: Fe.length
        }
      };
    }), R = ye(
      () => {
        const Z = r.chooseType.map((q) => q.toLocaleLowerCase());
        let oe = [...Z];
        return Z.includes("dep") && (oe = [...oe, "organization", "dept"]), Z.includes("dep_user") && (oe = [...oe, "user"]), oe;
      }
    ), N = ye(
      () => R.value.includes(Lt.dep) && !R.value.includes(Lt.user) && !R.value.includes(Lt.org)
    ), V = ye(
      () => R.value.includes(Lt.user) && !R.value.includes(Lt.dep) && !R.value.includes(Lt.org)
    ), j = ye(() => R.value.includes(Lt.org) && !R.value.includes(Lt.dep) && !R.value.includes(Lt.user)), W = ye(() => !_.value.length), J = ye(
      () => !r.max || k.value.list.length < r.max
    ), le = (Z) => [v.value.dep, v.value.organization].includes(Z[p.value.type]) ? Z.hasOwnProperty("disabled") : !1, ie = fe([]), ce = (Z) => {
      ie.value = Z, ie.value.forEach((oe) => {
        oe.readonly = oe == null ? void 0 : oe.disabled;
      });
    }, K = fe(!1), B = (Z = !1) => {
      var q;
      const oe = (q = r == null ? void 0 : r.userList) != null && q.length ? st.cloneDeep([...r == null ? void 0 : r.organizationList, ...r == null ? void 0 : r.userList, ...r == null ? void 0 : r.depList]) : [...h.value, ...l.value, ...a.value];
      return !Z && ce(oe), oe;
    };
    dt(
      () => r.show,
      async (Z) => {
        var oe;
        if (K.value = Z, Z) {
          s.value = r.pid, o.value = ((oe = r.org) == null ? void 0 : oe.elementId) || r.orgPid, !r.userList.length && !r.depList.length && !r.roleList.length && !r.postList.length && !r.organizationList.length ? await S() : (a.value = r.userList, l.value = r.depList, c.value = r.roleList, u.value = r.postList, h.value = r.organizationList), y.trans = [], E.checkAll = 0, E.indeterminate = !1;
          const q = B(!0);
          for (const Fe of q)
            I(Fe[p.value.id]) && y.trans.push(Fe[p.value.id]);
          const be = q.length === y.trans.length;
          E.indeterminate = !!(q.length && !be), E.checkAll = Number(q.length && be), In(() => {
            var Fe;
            (Fe = r.modelValue) != null && Fe.length ? r.modelValue.forEach((yt) => {
              ue(yt), r.multiple ? y.trans.push(yt[p.value.id]) : y.single = yt[p.value.id];
            }) : Ke();
          });
        } else
          Ke();
      }
    ), Ko(() => {
      let Z;
      if (N.value || V.value) {
        const q = a.value.length, be = l.value.length;
        Z = N.value ? be : V.value ? q : q + q;
      } else
        Z = ie.value.length;
      const oe = y.trans.length;
      E.indeterminate = y.trans.length ? oe !== Z : !1, E.checkAll = +(Z !== 0 && oe === Z);
    });
    const Y = (Z) => {
      if (Z) {
        if (y.single = "", Z[p.value.id]) {
          const oe = y.trans.findIndex(
            (q) => q === Z[p.value.id]
          );
          oe !== -1 && y.trans.splice(oe, 1);
        }
        switch (Z[p.value.type]) {
          case v.value.dep:
            return y.dep.delete(Z[p.value.id]);
          case v.value.user:
            return y.user.delete(Z[p.value.id]);
          case v.value.role:
            return y.role.delete(Z[p.value.id]);
          case v.value.post:
            return y.post.delete(Z[p.value.id]);
          case v.value.organization:
            return y.org.delete(Z[p.value.id]);
          default:
            return;
        }
      }
    }, G = (Z) => {
      Y(Z);
    }, ue = (Z) => {
      if (!I(Z[p.value.id])) {
        const oe = {
          ...Z
          // readonly: item.disabled
        };
        switch (Z[p.value.type]) {
          case v.value.dep:
            return y.dep.set(Z[p.value.id], oe);
          case v.value.user:
            return y.user.set(Z[p.value.id], oe);
          case v.value.role:
            return y.role.set(Z[p.value.id], oe);
          case v.value.post:
            return y.post.set(Z[p.value.id], oe);
          case v.value.organization:
            return y.org.set(Z[p.value.id], oe);
          default:
            return;
        }
      }
    };
    dt(
      () => y.trans,
      (Z) => {
        if (!Z.length)
          ie.value.forEach((oe) => {
            oe.disabled = !1;
            try {
              r.multiple && Y(oe);
            } catch {
            }
          });
        else {
          const oe = ie.value.filter(
            (be) => !Z.includes(be[p.value.id])
          );
          for (const be of oe)
            be.disabled = !1, r.multiple && Y(be);
          const q = ie.value.filter(
            (be) => Z.includes(be[p.value.id])
          );
          for (const be of q)
            be.disabled = le(be), ue(be);
        }
      },
      { deep: !0 }
    ), dt(
      () => y.single,
      (Z) => {
        if (Z) {
          const oe = ie.value.find((q) => q[p.value.id] === Z);
          oe && (y.dep.clear(), y.user.clear(), y.role.clear(), y.post.clear(), y.org.clear(), y.trans = [], In(() => {
            ue(oe);
          }));
        }
      }
    );
    const ve = (Z) => {
      if (Z) {
        let oe = [];
        if (R.value.includes("dep") || R.value.includes("dep_user")) {
          const q = ie.value.filter(
            (be) => be[p.value.type].toLocaleUpperCase() === v.value[Lt.dep].toLocaleUpperCase()
          );
          oe = [...oe, ...q];
        }
        if (R.value.includes("user") || R.value.includes("dep_user")) {
          const q = ie.value.filter(
            (be) => be[p.value.type].toLocaleUpperCase() === v.value[Lt.user].toLocaleUpperCase()
          );
          oe = [...oe, ...q];
        }
        if (R.value.includes("organization")) {
          const q = ie.value.filter(
            (be) => be[p.value.type].toLocaleUpperCase() === v.value[Lt.org].toLocaleUpperCase()
          );
          oe = [...oe, ...q];
        }
        oe.forEach((q) => {
          !y.trans.includes(q[p.value.id]) && y.trans.push(q[p.value.id]);
        });
      } else
        ie.value.forEach((oe) => {
          const q = y.trans.findIndex((be) => be === oe[p.value.id]);
          q >= 0 && y.trans.splice(q, 1);
        });
    }, Ee = (Z) => {
      Z[p.value.type] === v.value.organization ? (o.value = Z == null ? void 0 : Z.elementId, s.value = "") : (o.value = "", s.value = Z == null ? void 0 : Z.elementId), S(), _.value.push(Z);
    }, ge = () => {
      const Z = _.value.length - 2, oe = Z < 0 ? 0 : Z, q = _.value[oe];
      q[p.value.type] === v.value.organization ? (o.value = Z < 0 ? "root" : (q == null ? void 0 : q.elementId) || (q == null ? void 0 : q.id), s.value = "") : (o.value = "", s.value = Z < 0 ? "" : (q == null ? void 0 : q.elementId) || (q == null ? void 0 : q.id)), S(), _.value.pop();
    }, _e = ye(() => _.value.length), De = (Z, oe) => {
      !oe && !r.topLink || oe !== _e.value - 1 && (Z[p.value.type] === v.value.organization ? (o.value = Z == null ? void 0 : Z.elementId, s.value = "") : (o.value = "", s.value = Z == null ? void 0 : Z.elementId), S(), _.value.splice(oe + 1));
    }, vt = ye(() => r.chooseType.includes("role") && r.chooseType.length === 1), mt = ye(() => r.chooseType.includes("post") && r.chooseType.length === 1), nt = fe(r.tabs[0]), We = fe(r.tabs[0]);
    Ko(() => (We.value = vt.value ? r.tabs[1] : mt.value ? r.tabs[2] : nt.value, We.value));
    const Ke = () => {
      y.dep.clear(), y.user.clear(), y.role.clear(), y.post.clear(), y.org.clear(), y.trans = [], At.value = [], un.value = [], nt.value = r.tabs[0], We.value = r.tabs[0], i.value = "", s.value = r.pid, o.value = r.orgPid, _.value.splice(1, _.value.length), y.single = "", m.value = [];
    }, St = () => {
      var Z;
      n(
        "ok",
        st.cloneDeep({
          // 所有选项、部门、人员、角色分别列出
          ...k.value,
          // 排序后的列表
          sort: m.value
        })
      ), n("update:modelValue", st.cloneDeep(((Z = k.value) == null ? void 0 : Z.list) || [])), n("update:show", !1), Ke();
    }, ot = () => {
      n("update:show", !1), Ke();
    };
    e({ handClear: Ke, handRomeve: G, handDelete: Y });
    const ht = ye(() => {
      const Z = R.value;
      return !!((Z.includes("post") || Z.includes("role")) && Z.length > 1);
    }), Ut = ye(() => [
      { label: "group", name: "组织架构" },
      { label: "role", name: "角色列表" },
      { label: "post", name: "岗位列表" }
    ].filter((Z) => r.tabs.includes(Z.label))), Mt = ye(
      () => `${(typeof r.width == "string" ? Number.parseInt(r.width) : r.width) / 2 - 30}px`
    ), pt = ye(
      () => `${typeof r.height == "string" ? Number.parseInt(r.height) : r.height}px`
    ), bt = () => {
      r.multiple || (y.post.clear(), y.role.clear(), y.user.clear(), y.dep.clear(), y.single = "");
    }, At = fe([]), cn = (Z, oe) => {
      r.multiple || (y.single = "");
      const q = r.multiple ? Z : [Z];
      if (!q.length) {
        y.role.clear();
        return;
      }
      bt(), oe.forEach((be) => {
        q != null && q.includes(be[p.value.id]) ? ue(be) : Y(be);
      });
    };
    dt(
      () => k.value.role.len,
      (Z) => {
        At.value = st.cloneDeep(k.value.role.list);
      }
    );
    const un = fe([]), jt = (Z, oe) => {
      r.multiple || (y.single = "");
      const q = r.multiple ? Z : [Z];
      if (!q.length) {
        y.post.clear();
        return;
      }
      bt(), oe.forEach((be) => {
        q != null && q.includes(be[p.value.id]) ? ue(be) : Y(be);
      });
    };
    return dt(
      () => k.value.post.len,
      (Z) => {
        un.value = st.cloneDeep(k.value.post.list);
      }
    ), dt(
      () => i.value,
      (Z) => {
        A("");
      }
    ), (Z, oe) => (T(), de(F(za), {
      modelValue: K.value,
      "onUpdate:modelValue": oe[6] || (oe[6] = (q) => K.value = q),
      title: Z.title,
      "destroy-on-close": "",
      "close-on-click-modal": !1,
      "close-on-click-escape": !1,
      draggable: "",
      "align-center": "",
      width: typeof Z.width == "string" ? Z.width : `${Z.width}%`,
      class: "p_p_picker-dialog",
      "modal-class": "p_p_picker-dialog-modal",
      onClose: ot
    }, {
      footer: Q(() => [
        P("span", MC, [
          M(F(Rt), {
            onClick: Tt(ot, ["stop"])
          }, {
            default: Q(() => [
              Te("取消")
            ]),
            _: 1
          }, 8, ["onClick"]),
          M(F(Rt), {
            type: "primary",
            onClick: Tt(St, ["stop"])
          }, {
            default: Q(() => [
              Te(" 确定 ")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: Q(() => [
        P("div", {
          class: "dep-use-picker",
          style: Oe({ height: pt.value })
        }, [
          P("div", hC, [
            P("div", null, [
              M(F(qn), {
                modelValue: i.value,
                "onUpdate:modelValue": oe[0] || (oe[0] = (q) => i.value = q),
                clearable: "",
                placeholder: Z.placeholder,
                "prefix-icon": IE,
                style: Oe({ width: Mt.value })
              }, null, 8, ["modelValue", "placeholder", "style"]),
              ht.value ? (T(), de(F(yr), {
                key: 0,
                modelValue: nt.value,
                "onUpdate:modelValue": oe[1] || (oe[1] = (q) => nt.value = q),
                class: "ik-picker-tab",
                style: Oe({ width: Mt.value })
              }, {
                default: Q(() => [
                  (T(!0), $(Ae, null, qe(Ut.value, (q) => (T(), de(F(Md), {
                    label: q.label,
                    key: q.label
                  }, {
                    default: Q(() => [
                      Te(pe(q.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "style"])) : re("", !0)
            ]),
            We.value === F(Ur).group ? (T(), $("div", pC, [
              M(F(Np), {
                separator: ">",
                class: $e(["banner", { "top-unlink": !Z.topLink }])
              }, {
                default: Q(() => [
                  _e.value ? (T(!0), $(Ae, { key: 0 }, qe(F(_), (q, be) => (T(), de(F(Bp), {
                    key: q[p.value.id],
                    onClick: Tt((Fe) => De(q, be), ["stop"])
                  }, {
                    default: Q(() => [
                      Te(pe(q[p.value.name]), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 128)) : re("", !0)
                ]),
                _: 1
              }, 8, ["class"]),
              Z.multiple ? (T(), $("div", gC, [
                M(F(tn), {
                  modelValue: E.checkAll,
                  "onUpdate:modelValue": oe[2] || (oe[2] = (q) => E.checkAll = q),
                  indeterminate: E.indeterminate,
                  "true-label": 1,
                  "false-label": 0,
                  disabled: !Z.multiple,
                  onChange: ve,
                  onInput: ve
                }, {
                  default: Q(() => [
                    Te("全选")
                  ]),
                  _: 1
                }, 8, ["modelValue", "indeterminate", "disabled"]),
                _e.value > 1 ? Ot((T(), de(F(Rt), {
                  key: 0,
                  link: "",
                  type: "primary",
                  onClick: Tt(ge, ["stop"])
                }, {
                  default: Q(() => [
                    Te("上一级")
                  ]),
                  _: 1
                }, 8, ["onClick"])), [
                  [br, !W.value]
                ]) : re("", !0)
              ])) : re("", !0)
            ])) : re("", !0),
            We.value === F(Ur).group ? (T(), $(Ae, { key: 1 }, [
              ie.value.length ? Ot((T(), $("ul", vC, [
                Z.multiple ? (T(), de(F(ri), {
                  key: 0,
                  modelValue: y.trans,
                  "onUpdate:modelValue": oe[3] || (oe[3] = (q) => y.trans = q)
                }, {
                  default: Q(() => [
                    (T(!0), $(Ae, null, qe(h.value, (q) => (T(), $("li", {
                      key: q[p.value.id]
                    }, [
                      Z.chooseType.includes("org") ? (T(), $("div", mC, [
                        M(Hr),
                        P("p", null, pe(q[p.value.name]), 1)
                      ])) : (T(), de(F(tn), {
                        key: 1,
                        label: q[p.value.id],
                        disabled: !J.value || (q == null ? void 0 : q.readonly)
                      }, {
                        default: Q(() => [
                          P("div", bC, [
                            M(Hr),
                            P("p", null, pe(q[p.value.name]), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["label", "disabled"])),
                      Z.children ? (T(), $("div", yC, [
                        [v.value.organization, v.value.dep, v.value.role].includes(
                          q[p.value.type]
                        ) ? (T(), de(F(Rt), {
                          key: 0,
                          link: "",
                          type: "primary",
                          onClick: Tt((be) => Ee(q), ["stop"]),
                          disabled: q.disabled
                        }, {
                          icon: Q(() => [
                            M(Zo)
                          ]),
                          default: Q(() => [
                            Te(" 下级 ")
                          ]),
                          _: 2
                        }, 1032, ["onClick", "disabled"])) : re("", !0)
                      ])) : re("", !0)
                    ]))), 128)),
                    (!V.value || Z.showDep) && !j.value ? (T(!0), $(Ae, { key: 0 }, qe(l.value, (q) => (T(), $("li", {
                      key: q[p.value.id]
                    }, [
                      Z.chooseType.includes("dep") || Z.chooseType.includes("dep_user") ? (T(), de(F(tn), {
                        key: 0,
                        label: q[p.value.id],
                        disabled: !J.value || (q == null ? void 0 : q.readonly)
                      }, {
                        default: Q(() => [
                          P("div", xC, [
                            M($r),
                            P("p", null, pe(q[p.value.name]), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["label", "disabled"])) : (T(), $("div", _C, [
                        M($r),
                        P("p", null, pe(q[p.value.name]), 1)
                      ])),
                      Z.children ? (T(), $("div", wC, [
                        [v.value.dep, v.value.role].includes(
                          q[p.value.type]
                        ) ? (T(), de(F(Rt), {
                          key: 0,
                          link: "",
                          type: "primary",
                          onClick: Tt((be) => Ee(q), ["stop"]),
                          disabled: q.disabled
                        }, {
                          icon: Q(() => [
                            M(Zo)
                          ]),
                          default: Q(() => [
                            Te(" 下级 ")
                          ]),
                          _: 2
                        }, 1032, ["onClick", "disabled"])) : re("", !0)
                      ])) : re("", !0)
                    ]))), 128)) : re("", !0),
                    Z.chooseType.includes("user") || Z.chooseType.includes("dep_user") ? (T(!0), $(Ae, { key: 1 }, qe(a.value, (q) => (T(), $("li", {
                      key: q[p.value.id]
                    }, [
                      M(F(tn), {
                        label: q[p.value.id],
                        disabled: !J.value || (q == null ? void 0 : q.readonly)
                      }, {
                        default: Q(() => {
                          var be, Fe;
                          return [
                            v.value.dep === q[p.value.type] ? (T(), de(hr, { key: 0 })) : v.value.user === q[p.value.type] ? (T(), de(F(mi), {
                              key: 1,
                              size: 30,
                              src: g((be = p.value) != null && be.avatar ? q[(Fe = p.value) == null ? void 0 : Fe.avatar] : ""),
                              icon: Ii
                            }, null, 8, ["src"])) : re("", !0),
                            P("span", SC, pe(q[p.value.name]), 1)
                          ];
                        }),
                        _: 2
                      }, 1032, ["label", "disabled"])
                    ]))), 128)) : re("", !0)
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : (T(), de(F(yr), {
                  key: 1,
                  modelValue: y.single,
                  "onUpdate:modelValue": oe[4] || (oe[4] = (q) => y.single = q)
                }, {
                  default: Q(() => [
                    (T(!0), $(Ae, null, qe(ie.value, (q) => {
                      var be, Fe, yt;
                      return T(), $("li", {
                        key: q[p.value.id]
                      }, [
                        R.value.includes((be = q[p.value.type]) == null ? void 0 : be.toLocaleLowerCase()) ? (T(), de(F(ni), {
                          key: 0,
                          label: q[p.value.id],
                          class: $e({
                            readonly: ![v.value.organization, v.value.dep, v.value.user].includes(
                              q[p.value.type]
                            ),
                            "w-full": !0
                          }),
                          disabled: q.readonly
                        }, {
                          default: Q(() => {
                            var Wt, Ft;
                            return [
                              v.value.organization === q[p.value.type] ? (T(), de(Hr, { key: 0 })) : v.value.dep === q[p.value.type] ? (T(), de($r, { key: 1 })) : v.value.role === q[p.value.type] ? (T(), de(hr, { key: 2 })) : v.value.user === q[p.value.type] ? (T(), de(F(mi), {
                                key: 3,
                                size: 30,
                                src: g((Wt = p.value) != null && Wt.avatar ? q[(Ft = p.value) == null ? void 0 : Ft.avatar] : ""),
                                icon: Ii
                              }, null, 8, ["src"])) : re("", !0),
                              P("span", EC, pe(q[p.value.name]), 1)
                            ];
                          }),
                          _: 2
                        }, 1032, ["label", "class", "disabled"])) : (T(), $(Ae, { key: 1 }, [
                          v.value.organization === q[p.value.type] ? (T(), de(Hr, { key: 0 })) : v.value.dep === q[p.value.type] ? (T(), de($r, { key: 1 })) : v.value.role === q[p.value.type] ? (T(), de(hr, { key: 2 })) : v.value.user === q[p.value.type] ? (T(), de(F(mi), {
                            key: 3,
                            size: 30,
                            src: g((Fe = p.value) != null && Fe.avatar ? q[(yt = p.value) == null ? void 0 : yt.avatar] : ""),
                            icon: Ii
                          }, null, 8, ["src"])) : re("", !0),
                          P("span", CC, pe(q[p.value.name]), 1)
                        ], 64)),
                        Z.children ? (T(), $("div", kC, [
                          [v.value.organization, v.value.dep, v.value.role].includes(
                            q[p.value.type]
                          ) ? (T(), de(F(Rt), {
                            key: 0,
                            link: "",
                            type: "primary",
                            onClick: Tt((Wt) => Ee(q), ["stop"])
                          }, {
                            icon: Q(() => [
                              M(Zo)
                            ]),
                            default: Q(() => [
                              Te(" 下级 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : re("", !0)
                        ])) : re("", !0)
                      ]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"]))
              ])), [
                [F(ko), d.value]
              ]) : (T(), $("div", AC, pe(Z.emptyText), 1))
            ], 64)) : We.value === F(Ur).role ? Ot((T(), de(uC, {
              key: 2,
              fixPropOpt: p.value,
              list: c.value,
              max: Z.max,
              multiple: Z.multiple,
              "hand-list": At.value,
              onChange: cn
            }, null, 8, ["fixPropOpt", "list", "max", "multiple", "hand-list"])), [
              [F(ko), d.value]
            ]) : We.value === F(Ur).post ? Ot((T(), de(rC, {
              key: 3,
              fixPropOpt: p.value,
              list: u.value,
              max: Z.max,
              multiple: Z.multiple,
              "hand-list": un.value,
              onChange: jt
            }, null, 8, ["fixPropOpt", "list", "max", "multiple", "hand-list"])), [
              [F(ko), d.value]
            ]) : re("", !0)
          ]),
          DC,
          P("div", TC, [
            P("div", RC, [
              IC,
              M(F(Rt), {
                type: "primary",
                link: "",
                onClick: Tt(Ke, ["stop"])
              }, {
                default: Q(() => [
                  Te("清空")
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            M(F(Od), {
              tag: "ul",
              name: "fade",
              "item-key": "elementId",
              modelValue: m.value,
              "onUpdate:modelValue": oe[5] || (oe[5] = (q) => m.value = q),
              style: Oe({ height: `calc(${pt.value} + 21px)` }),
              animation: F(En).animation,
              group: F(En).group,
              disabled: F(En).disabled,
              ghostClass: F(En).ghostClass,
              forceFallback: F(En).ghostClass
            }, {
              item: Q(({ element: q }) => [
                M($a, {
                  type: "transition",
                  name: "flip-list"
                }, {
                  default: Q(() => [
                    P("li", {
                      class: $e(["list-group-item"]),
                      style: Oe({
                        borderRadius: `${F(En).itemStyle.radius}px`,
                        marginBottom: `${F(En).itemStyle.bottom}px`,
                        backgroundColor: `${F(En).itemStyle.background}`
                      })
                    }, [
                      P("div", null, [
                        v.value.organization === q[p.value.type] ? (T(), de(Hr, { key: 0 })) : re("", !0),
                        v.value.dep === q[p.value.type] ? (T(), de($r, { key: 1 })) : v.value.role === q[p.value.type] ? (T(), de(hr, { key: 2 })) : v.value.post === q[p.value.type] ? (T(), de(La, { key: 3 })) : v.value.user === q[p.value.type] ? (T(), de(F(mi), {
                          key: 4,
                          size: 30,
                          src: g(p.value.avatar ? q[p.value.avatar] : ""),
                          icon: Ii
                        }, null, 8, ["src"])) : re("", !0),
                        P("span", null, pe(q[p.value.name]), 1)
                      ]),
                      Ot(M(PE, {
                        class: "close",
                        onClick: Tt((be) => G(q), ["stop"])
                      }, null, 8, ["onClick"]), [
                        [br, !(q != null && q.readonly)]
                      ])
                    ], 4)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 1
            }, 8, ["modelValue", "style", "animation", "group", "disabled", "ghostClass", "forceFallback"])
          ])
        ], 4)
      ]),
      _: 1
    }, 8, ["modelValue", "title", "width"]));
  }
});
const ho = tt(OC);
const NC = /* @__PURE__ */ He({
  name: "IkBtnContent",
  components: {
    MoreFilled: Hl
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
  setup(t, {
    slots: e,
    attrs: n
  }) {
    const r = fe(null), i = fe(0), s = (o) => o == null ? void 0 : o.filter((a) => typeof a.children != "string");
    return Ko(() => {
      var o, a, l;
      r.value = (a = (o = e.default) == null ? void 0 : o.call(e)) == null ? void 0 : a.filter((c) => typeof c.children != "string"), i.value = ((l = r.value) == null ? void 0 : l.length) || 0;
    }), () => {
      var o, a;
      return M("div", {
        class: "flex"
      }, [
        // 未超出限制按钮渲染
        (a = s((o = e.default) == null ? void 0 : o.call(e))) == null ? void 0 : a.map((l, c) => c + 1 > t.num ? null : l),
        // 超出限制按钮渲染
        i.value > t.num ? M(Me("el-dropdown"), {
          trigger: t.trigger,
          "popper-class": "gl-btn-content"
        }, {
          default: () => M(Me("el-icon"), {
            title: "更多",
            class: "ml-[12px] more-operate"
          }, {
            default: () => [M(Hl, null, null)]
          }),
          dropdown: () => M(Me("el-dropdown-menu"), null, {
            default: () => {
              var l, c;
              return [i.value > t.num ? (c = s((l = e.default) == null ? void 0 : l.call(e))) == null ? void 0 : c.map((u, h) => h < t.num ? null : M(Me("el-dropdown-item"), null, {
                default: () => {
                  var d, f;
                  return [Ot(M(Me("el-button"), Ge(u == null ? void 0 : u.props, {
                    link: !0
                  }), {
                    default: () => {
                      var g, p;
                      return [((g = u == null ? void 0 : u.props) == null ? void 0 : g.title) || ((p = u == null ? void 0 : u.props) == null ? void 0 : p.label)];
                    }
                  }), [[Gs("role"), (f = (d = u == null ? void 0 : u.dirs) == null ? void 0 : d[0]) == null ? void 0 : f.value]])];
                }
              })) : null];
            }
          })
        }) : null
      ]);
    };
  }
}), BC = NC, bk = tt(BC), LC = /* @__PURE__ */ He({
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
  setup(t) {
    const e = t, n = ye(() => e.type ? "" : {
      color: e.color,
      backgroundColor: e.background,
      borderColor: e.color
    });
    return (r, i) => {
      const s = Me("el-tag");
      return T(), de(s, {
        effect: t.effect,
        class: "ik-statu-tag",
        type: t.type,
        style: Oe(n.value)
      }, {
        default: Q(() => [
          t.circle ? (T(), $("span", {
            key: 0,
            class: "inline-block rounded-full",
            style: Oe({
              backgroundColor: `var(--el-color-${t.type})`,
              width: `${t.circleW}px`,
              height: `${t.circleH}px`
            })
          }, null, 4)) : re("", !0),
          Te(" " + pe(t.title), 1)
        ]),
        _: 1
      }, 8, ["effect", "type", "style"]);
    };
  }
});
const PC = /* @__PURE__ */ ze(LC, [["__scopeId", "data-v-241ac18b"]]), yk = tt(PC), $C = /* @__PURE__ */ He({
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
    const e = t, n = ye(() => e.effect);
    return (r, i) => {
      const s = Me("el-tooltip");
      return T(), de(s, {
        class: "gl-tooltip",
        effect: n.value,
        content: t.content,
        placement: t.placement,
        enterable: !1
      }, {
        default: Q(() => [
          Je(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["effect", "content", "placement"]);
    };
  }
}), xk = tt($C), HC = (t) => (Ar("data-v-d488f4ef"), t = t(), Dr(), t), FC = /* @__PURE__ */ HC(() => /* @__PURE__ */ P("i", { class: "ik ik-shezhi" }, null, -1)), zC = { class: "check-right" }, VC = { class: "dialog-footer" }, UC = /* @__PURE__ */ He({
  __name: "IkBtnSetting",
  props: Zn({
    list: {
      type: Array,
      default: () => []
    },
    // 区分页面tab页
    tab: {
      type: [String, Number],
      default: ""
    },
    // button按钮类型
    type: {
      type: String,
      default: "primary"
    },
    // 按钮类型
    btnType: {
      type: String,
      default: "icon"
    },
    // button按钮是否为圆形
    circle: {
      type: Boolean,
      default: !0
    },
    // inline模式一行显示多个
    inline: {
      type: Boolean,
      default: !1
    },
    // 角色
    role: {
      type: String,
      default: ""
    },
    config: {
      type: Object,
      default: () => ({
        t: (t) => t,
        dialog: {
          l: "700px",
          sl: "600px"
        },
        path: "user_0",
        user: {
          id: "111"
        }
      })
    }
  }, {
    modelValue: {
      type: Array,
      default: () => []
    }
  }),
  emits: Zn(["sort"], ["update:modelValue"]),
  setup(t, { emit: e }) {
    const n = t, r = Ys(t, "modelValue"), { t: i, dialog: s, path: o, user: a } = n.config, l = ye(() => `${a == null ? void 0 : a.id}_${o}${n.tab !== "" ? `_${n.tab}` : ""}`), c = fe([]), u = fe([]), h = fe([]), d = /* @__PURE__ */ new Map(), f = fe(!1), g = ye(() => {
      const S = u.value.length && u.value.length !== n.list.length;
      return !S && u.value.length && (f.value = !0), !!S;
    }), p = (S) => {
      var E;
      const y = st.cloneDeep(h.value);
      y == null || y.forEach((I) => {
        var A;
        if (!u.value.length)
          h.value = [];
        else if (!u.value.includes(I == null ? void 0 : I.key)) {
          const k = (A = h.value) == null ? void 0 : A.findIndex((R) => R.key === I.key);
          k !== -1 && h.value.splice(k, 1), I.show = !1, d.set(I.key, I);
        }
      }), u.value.forEach((I) => {
        var k;
        if (((k = h.value) == null ? void 0 : k.findIndex((R) => (R == null ? void 0 : R.key) === I)) === -1) {
          const R = d.get(I);
          R && (R.show = !0, h.value.push(R));
        }
      }), (E = h.value) != null && E.length || (h.value = st.cloneDeep(n.list)), S === !0 && (e("sort", st.cloneDeep(h.value)), r.value = st.cloneDeep(h.value));
    }, v = (S) => {
      if (S)
        u.value = n.list.map((y) => y.key);
      else {
        const y = n.list.find((E) => !E.key || E.label === "操作");
        u.value = y ? [y.key] : [];
      }
      p();
    }, m = () => {
      const S = Yn.local.getItem(l.value);
      try {
        const y = st.cloneDeep(n == null ? void 0 : n.list);
        if ((!S || !(S != null && S.length)) && Yn.local.setItem(
          l.value,
          y.map(({ show: E, type: I, key: A, label: k, width: R, minWidth: N, align: V }) => ({
            show: E,
            key: A,
            type: I,
            label: k,
            width: R,
            minWidth: N,
            align: V
          }))
        ), c.value = [
          ...(y == null ? void 0 : y.map((E) => (d.set(E.key, E), {
            ...E,
            show: E.show || !1
          }))) || []
        ], S) {
          const E = S.filter((I) => I.show).map((I) => I.key);
          u.value = [...E];
        } else {
          const E = c.value.filter((I) => I.show);
          u.value = E.map((I) => I.key);
        }
        p(!0);
      } catch (y) {
        console.info("error: ", y);
      }
    };
    m(), dt(() => n.list, () => {
      m();
    }, { deep: !0 });
    const x = fe(!1), b = () => {
      x.value = !0;
    }, _ = (S) => {
      h.value = S;
    }, w = () => {
      x.value = !1, Yn.local.setItem(
        l.value,
        h.value.map(({ show: S, key: y, label: E, value: I, width: A, minWidth: k, align: R }) => ({
          show: S,
          key: y,
          label: E,
          value: I,
          width: A,
          minWidth: k,
          align: R
        }))
      ), console.log("sortList ", h), e("sort", st.cloneDeep(h.value)), r.value = st.cloneDeep(h.value);
    };
    return (S, y) => {
      const E = Me("el-button"), I = Me("el-checkbox"), A = Me("el-checkbox-group"), k = Me("el-dialog"), R = Gs("role");
      return T(), $(Ae, null, [
        t.btnType === "button" ? Ot((T(), de(E, Ge({ key: 0 }, S.$attrs, {
          circle: t.circle,
          type: t.type,
          style: { minWidth: t.circle ? "40px" : "", minHeight: t.circle ? "40px" : "" },
          onClick: b
        }), Pa({
          icon: Q(() => [
            FC
          ]),
          _: 2
        }, [
          t.circle ? void 0 : {
            name: "default",
            fn: Q(() => [
              Te(pe(F(i)("设置")), 1)
            ]),
            key: "0"
          }
        ]), 1040, ["circle", "type", "style"])), [
          [R, S.$props.role]
        ]) : re("", !0),
        t.btnType === "icon" ? Ot((T(), de(F(Zt), Ge({
          key: 1,
          name: "iksvg_shezhi2",
          "show-bg": "",
          pop: "",
          width: 40,
          size: "big"
        }, S.$attrs, { onClick: b }), null, 16)), [
          [R, S.$props.role]
        ]) : re("", !0),
        M(k, {
          modelValue: x.value,
          "onUpdate:modelValue": y[3] || (y[3] = (N) => x.value = N),
          draggable: "",
          width: t.inline ? F(s).l : F(s).sl,
          "close-on-click-modal": !1,
          "close-on-press-escape": !1,
          title: "显示字段",
          "append-to-body": "",
          onOpen: m
        }, {
          footer: Q(() => [
            P("div", VC, [
              M(E, {
                onClick: y[2] || (y[2] = (N) => x.value = !1)
              }, {
                default: Q(() => [
                  Te(pe(F(i)("关闭")) + " ", 1)
                ]),
                _: 1
              }),
              M(E, {
                type: "primary",
                disabled: h.value.length < 2,
                onClick: w
              }, {
                default: Q(() => [
                  Te(pe(h.value.length < 2 ? "至少选择一个字段" : F(i)("确定")), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          default: Q(() => [
            P("div", {
              class: $e(["view-fields", [t.inline ? null : "un-inline"]])
            }, [
              P("div", {
                style: Oe({ flex: t.inline ? 2 : 1 })
              }, [
                M(I, {
                  modelValue: f.value,
                  "onUpdate:modelValue": y[0] || (y[0] = (N) => f.value = N),
                  class: "single-line",
                  indeterminate: g.value,
                  onChange: v
                }, {
                  default: Q(() => [
                    Te(" 全选 ")
                  ]),
                  _: 1
                }, 8, ["modelValue", "indeterminate"]),
                M(A, {
                  modelValue: u.value,
                  "onUpdate:modelValue": y[1] || (y[1] = (N) => u.value = N),
                  onChange: p
                }, {
                  default: Q(() => [
                    (T(!0), $(Ae, null, qe(c.value, (N) => (T(), de(I, {
                      key: N.key,
                      disabled: !N.key,
                      label: N.key
                    }, {
                      default: Q(() => [
                        Te(pe(N.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["disabled", "label"]))), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ], 4),
              P("div", zC, [
                M(F(GC), {
                  list: h.value,
                  "item-style": { bottom: 4 },
                  onChange: _
                }, null, 8, ["list"])
              ])
            ], 2)
          ]),
          _: 1
        }, 8, ["modelValue", "width"])
      ], 64);
    };
  }
});
const jC = /* @__PURE__ */ ze(UC, [["__scopeId", "data-v-d488f4ef"]]), hd = tt(jC), pd = {
  animation: 200,
  group: "gl",
  disabled: !1,
  ghostClass: "ghost",
  sort: !0,
  delay: 100,
  showIcon: !0,
  itemStyle: {
    radius: 4,
    bottom: 8,
    background: "var(--ik-sub-sidebar-menu-bg)"
  }
}, WC = {
  list: {
    required: !0,
    type: Array,
    default: []
  },
  // 如果一个页面有多个拖拽区域，通过设置group名称可以实现多个区域之间相互拖拽
  //  或者 { name: "...", pull: [true, false, 'clone', array , function], put: [true, false, array , function] }
  group: {
    type: String,
    default: "draggable"
  },
  // 是否开启排序,如果设置为false,它所在组无法排序
  sort: {
    type: Boolean,
    default: !0
  },
  // 前置图标
  showIcon: {
    type: Boolean,
    default: !0
  },
  // 鼠标按下多少秒之后可以拖拽元素
  delay: {
    type: Number,
    default: 0
  },
  // 鼠标按下移动多少px才能拖动元素
  touchStartThreshold: {
    type: Number,
    default: 0
  },
  // 是否禁用用拖拽组件
  disabled: {
    type: Boolean,
    default: !1
  },
  // 拖动时的动画效果，如设置animation=1000表示1秒过渡动画效果
  animation: {
    type: Number,
    default: 200
  },
  // 只有当鼠标在class为mover类的元素上才能触发拖到事件
  handle: {
    type: String,
    default: ".mover"
  },
  // 设置了unmover样式的元素不允许拖动
  filter: {
    type: String,
    default: ".unmover"
  },
  // 样式类为item的元素才能被拖动
  draggable: {
    type: String,
    default: ".item"
  },
  // 设置拖动元素的占位符类名,你的自定义样式可能需要加!important才能生效，并把forceFallback属性设置成true
  ghostClass: {
    type: String,
    default: "ghost"
  },
  // 被选中目标的样式，你的自定义样式可能需要加!important才能生效，并把forceFallback属性设置成true
  chosenClass: {
    type: String,
    default: "chosen"
  },
  // 拖动元素的样式，你的自定义样式可能需要加!important才能生效，并把forceFallback属性设置成true
  dragClass: {
    type: String,
    default: "drag"
  },
  // 默认false，忽略HTML5的拖拽行为，因为h5里有个属性也是可以拖动，你要自定义ghostClass chosenClass dragClass样式时，建议forceFallback设置为true
  forceFallback: {
    type: Boolean,
    default: !1
  },
  // 默认false，克隆选中元素的样式到跟随鼠标的样式
  fallbackClass: {
    type: String,
    default: "fallback"
  },
  // 默认false，克隆的元素添加到文档的body中
  fallbackOnBody: {
    type: Boolean,
    default: !1
  },
  // 按下鼠标移动多少个像素才能拖动元素，:fallback-tolerance="8"
  fallbackTolerance: {
    type: Number,
    default: 8
  },
  // 有滚动区域是否允许拖拽 默认true
  scroll: {
    type: Boolean,
    default: !0
  },
  // 滚动回调函数
  scrollFn: {
    type: Function,
    default: () => {
    }
  },
  // 距离滚动区域多远时，滚动滚动条
  scrollFensitivity: {
    type: Number,
    default: 30
  },
  // 滚动速度
  scrollSpeed: {
    type: Number,
    default: 30
  },
  itemClass: {
    type: String,
    default: ""
  },
  groupClass: {
    type: String,
    default: ""
  },
  itemStyle: {
    type: Object,
    default: () => ({
      radius: {
        type: Number,
        default: 30
      },
      bottom: {
        type: Number,
        default: 8
      },
      background: {
        type: String,
        default: "var(--ik-sub-sidebar-menu-bg)"
      }
    })
  }
}, qC = /* @__PURE__ */ He({
  __name: "IkDragList",
  props: WC,
  emits: ["change"],
  setup(t, { emit: e }) {
    const n = t, r = fe([]);
    dt(
      () => n.list,
      (l) => {
        r.value = st.cloneDeep(l);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    const i = ye(() => ({
      ...pd,
      ...n,
      itemStyle: {
        ...pd.itemStyle,
        ...n.itemStyle
      }
    })), s = fe(!1), o = () => {
      s.value = !0;
    }, a = (l) => {
      s.value = !1;
      const c = n.list[l.oldIndex];
      e("change", r.value, {
        ...c,
        oldIndex: l.oldIndex,
        newIndex: l.newIndex
      });
    };
    return (l, c) => {
      const u = Me("el-icon");
      return T(), de(F(Od), {
        modelValue: r.value,
        "onUpdate:modelValue": c[0] || (c[0] = (h) => r.value = h),
        class: $e(["list-group", [i.value.groupClass]]),
        tag: "ul",
        attrs: i.value,
        animation: i.value.animation,
        group: i.value.group,
        disabled: i.value.disabled,
        "ghost-class": i.value.ghostClass,
        "force-fallback": i.value.ghostClass,
        "item-key": "order",
        onStart: o,
        onEnd: a
      }, {
        item: Q(({ element: h }) => [
          M($a, {
            type: "transition",
            name: "flip-list"
          }, {
            default: Q(() => [
              l.$slots.item ? Je(l.$slots, "item", {
                key: 0,
                item: h
              }, void 0, !0) : (T(), $("li", {
                key: 1,
                class: $e(["list-group-item", [i.value.itemClass]]),
                style: Oe({
                  borderRadius: `${i.value.itemStyle.radius}px`,
                  marginBottom: `${i.value.itemStyle.bottom}px`,
                  backgroundColor: `${i.value.itemStyle.background}`
                })
              }, [
                i.value.showIcon && !l.$slots.icon ? (T(), de(u, { key: 0 }, {
                  default: Q(() => [
                    M(F(Tp))
                  ]),
                  _: 1
                })) : Je(l.$slots, "icon", { key: 1 }, void 0, !0),
                Te(" " + pe(h.label), 1)
              ], 6))
            ]),
            _: 2
          }, 1024)
        ]),
        _: 3
      }, 8, ["modelValue", "class", "attrs", "animation", "group", "disabled", "ghost-class", "force-fallback"]);
    };
  }
});
const YC = /* @__PURE__ */ ze(qC, [["__scopeId", "data-v-d2a34939"]]), GC = tt(YC);
export {
  Fp as EAlign,
  Hn as EDateType,
  hn as EType,
  pk as Event,
  sk as IKApprovalProcess,
  ik as IKApprovalProcessDetail,
  ak as IKCalendar,
  lk as IKHorizontalStepBar,
  tk as IKSearch,
  nk as IKSearchHead,
  rk as IKVerticalStepBar,
  bk as IkBtnContent,
  hd as IkBtnSetting,
  GC as IkDragList,
  p7 as IkFullCalendar,
  mk as IkPageFull,
  vk as IkPageTabs,
  ck as IkPreviewFile,
  fk as IkPrintConfig,
  hk as IkPrintView,
  gk as IkSchedule,
  yk as IkStatu,
  Zt as IkSvgIcon,
  xk as IkTooltip,
  uk as IkUploadFile,
  dk as IkUploadImage,
  ho as IkingPicker
};
