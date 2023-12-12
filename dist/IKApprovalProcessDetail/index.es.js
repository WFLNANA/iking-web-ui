import { defineComponent as M, reactive as V, watch as U, nextTick as j, onMounted as W, resolveComponent as H, openBlock as s, createElementBlock as o, Fragment as x, renderList as b, createElementVNode as n, normalizeClass as S, toDisplayString as r, createCommentVNode as d, normalizeStyle as E, createTextVNode as O, createVNode as K, pushScopeId as X, popScopeId as q } from "vue";
const G = (c, v) => {
  if (c.install = (p) => {
    for (const e of [c, ...Object.values(v ?? {})])
      p.component(e.name, e);
  }, v)
    for (const [p, e] of Object.entries(v))
      c[p] = e;
  return c;
};
const I = (c) => (X("data-v-21621e0f"), c = c(), q(), c), J = {
  class: "approveProcess",
  id: "approveProcess"
}, Q = ["id"], Y = { class: "topBlock" }, Z = { class: "left" }, ee = { class: "nodeBg" }, te = ["src"], ae = { class: "right" }, se = { class: "topInfo" }, oe = { key: 0 }, le = {
  key: 0,
  class: "main-text"
}, ne = { class: "name" }, ie = { key: 0 }, pe = { key: 0 }, re = { key: 1 }, de = /* @__PURE__ */ I(() => /* @__PURE__ */ n("span", {
  class: "red",
  style: { margin: "0px 5px" }
}, "退回至", -1)), ue = { key: 1 }, ce = { key: 0 }, fe = { key: 0 }, ve = { key: 1 }, _e = { key: 1 }, he = /* @__PURE__ */ I(() => /* @__PURE__ */ n("div", { class: "main-text" }, "抄送人员", -1)), ye = { class: "name" }, ke = { key: 0 }, ge = { style: { color: "#000" } }, Fe = {
  class: "blue",
  style: { "margin-left": "5px", "font-size": "12px" }
}, me = { key: 1 }, Te = {
  key: 0,
  class: "blue",
  style: { "font-size": "12px" }
}, Ne = { key: 1 }, xe = {
  key: 0,
  class: "blue",
  style: { "font-size": "12px" }
}, be = {
  key: 1,
  class: "blue",
  style: { "font-size": "12px" }
}, Oe = { class: "time" }, Pe = { key: 0 }, Se = { key: 1 }, Ie = ["onClick"], Le = ["onClick"], we = {
  key: 0,
  class: "opinion"
}, ze = { key: 0 }, Be = { key: 1 }, je = /* @__PURE__ */ I(() => /* @__PURE__ */ n("span", null, "添加审批人", -1)), Ee = { style: { color: "#000", "margin-left": "8px" } }, De = {
  key: 1,
  class: "annex"
}, Ae = ["onClick"], Ce = { class: "text" }, $e = { class: "fileName" }, Re = { class: "size" }, Me = {
  key: 2,
  class: "annexImage"
}, Ve = {
  key: 3,
  class: "approveList"
}, Ue = { class: "nodeBg-list" }, We = ["src"], He = {
  key: 1,
  class: "ikapprove ikapprove-duihao2 green read"
}, Ke = { class: "main-text" }, Xe = {
  name: "IkingApprovalProcessDetail"
}, qe = /* @__PURE__ */ M({
  ...Xe,
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
  setup(c, { emit: v }) {
    const p = c, e = V({
      nodeType: {
        发起人节点: "1",
        审批节点: "2",
        办理节点: "3",
        抄送节点: "4",
        ...p.defaultNodeType
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
        ...p.defaultStatus
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
        ...p.defaultFieldMap
      }
    });
    U(
      () => p.dataList,
      (a) => {
        a && (j(() => {
          e.listData = a;
        }), setTimeout(() => {
          p.returnNode.length && F();
        }, 500));
      },
      { deep: !0 }
    ), W(() => {
      p.dataList.length && (e.listData = p.dataList, setTimeout(() => {
        p.returnNode.length && F();
      }, 500));
    });
    const F = () => {
      let a = null;
      for (a of p.returnNode) {
        let l = Array.from(new Array(a[1] + 1).keys()).slice(a[0]);
        j(() => {
          D(l);
        });
      }
    }, D = (a) => {
      var y, k, g;
      let l = document.createElement("div"), i = document.getElementById("approveProcess"), t = 0, f = (y = document.getElementById(`${a[0]}`)) == null ? void 0 : y.offsetWidth, _ = (k = document.getElementById(`${a[0]}`)) == null ? void 0 : k.offsetLeft, m = (g = document.getElementById(`${a[0]}`)) == null ? void 0 : g.offsetTop;
      a.forEach((T) => {
        let N = document.getElementById(`${T}`);
        t += N.offsetHeight;
      }), setTimeout(() => {
        l.style.width = f + 32 + "px", l.style.height = t + "px", l.style.background = "#f9f9f9", l.style.position = "absolute", l.style.top = m - 16 + "px", l.style.left = _ - 16 + "px", l.style.zIndex = -1, i == null || i.appendChild(l);
      });
    }, A = (a, l) => {
      var f;
      let i = (f = e.listData) == null ? void 0 : f.findIndex((_) => _.lineType == "dashed"), t = "";
      switch (a) {
        case e.statusOption.发起:
          t = "ikapprove-duihao2 green";
          break;
        case e.statusOption.等待:
          t = i == l ? "ikapprove-dengdai orange" : "";
          break;
        case e.statusOption.同意:
          t = "ikapprove-duihao2 green";
          break;
        case e.statusOption.拒绝:
          t = "ikapprove-jujue red";
          break;
        case e.statusOption.转交:
          t = "ikapprove-zhuanjiao blue";
          break;
        case e.statusOption.加签:
          t = "ikapprove-tianjia blue";
          break;
        case e.statusOption.退回:
          t = "ikapprove-s_fanhui2 red";
          break;
        case e.statusOption.评论:
          t = "ikapprove-pinglun1 blue";
          break;
      }
      return `ikapprove ${t}`;
    }, C = (a, l) => {
      let i = "";
      switch (a) {
        case e.nodeType.发起人节点:
          i = "ikapprove-ziyuan";
          break;
        case e.nodeType.审批节点:
          l && l.length == 1 ? i = "ikapprove-ziyuan" : i = "ikapprove-shenpi";
          break;
        case e.nodeType.办理节点:
          i = "ikapprove-bianji";
          break;
        case e.nodeType.抄送节点:
          i = "ikapprove-chaosong";
          break;
        default:
          i = "ikapprove-ziyuan";
      }
      return `ikapprove ${i}`;
    }, $ = (a) => {
      let l = "";
      return a == "jpg" || a == "jpeg" || a == "png" ? l = "ikapprove-tupian" : a == "doc" || a == "docx" ? l = "ikapprove-WORD" : a == "xls" || a == "xlsx" ? l = "ikapprove-EXCEL" : a == "ppt" || a == "pptx" ? l = "ikapprove-pptcopy" : a == "pdf" ? l = "ikapprove-PDF" : a == "rar" || a == "zip" ? l = "ikapprove-fujian" : a == "txt" || a == "zip" ? l = "ikapprove-TXTCopy" : a == "mp3" || a == "wma" || a == "m4a" ? l = "ikapprove-yinpinwenjian" : (a == "avi" || a == "wmv" || a == "mp4" || a == "mov") && (l = "ikapprove-shipinwenjian"), `icon ikapprove ${l}`;
    }, R = (a) => {
      v("preview", a), p.local || window.open(h(a[e.defaultFile.attachmentParam.url]));
    }, L = (a, l) => {
      a.show = !a.show;
      let i = document.getElementById(`${a[e.defaultFile.nodeId]}`), t = Array.from(i == null ? void 0 : i.getElementsByClassName("approveList"));
      for (let f of t)
        f.style.display = l;
    }, h = (a) => {
      let l = "";
      return a.includes("http") || a.includes("https") ? l = a : l = p.fileUrl + a, l;
    };
    return (a, l) => {
      const i = H("el-image");
      return s(), o("div", J, [
        (s(!0), o(x, null, b(e.listData, (t, f) => {
          var _, m, y, k, g, T, N, w, z, B;
          return s(), o("div", {
            class: "approveBlock",
            id: t[e.defaultFile.nodeId],
            key: t[e.defaultFile.nodeId]
          }, [
            n("div", Y, [
              n("div", Z, [
                n("span", ee, [
                  ((_ = t[e.defaultFile.approvePersonList]) == null ? void 0 : _.length) == 1 && t[e.defaultFile.approvePersonList][0].userAvatar ? (s(), o("img", {
                    key: 0,
                    style: { width: "100%", height: "100%", "border-radius": "50%" },
                    src: h(t[e.defaultFile.approvePersonList][0].userAvatar),
                    alt: ""
                  }, null, 8, te)) : (s(), o("i", {
                    key: 1,
                    class: S(
                      C(
                        t[e.defaultFile.nodeType],
                        t[e.defaultFile.approvePersonList]
                      )
                    )
                  }, null, 2)),
                  n("i", {
                    class: S(
                      A(t[e.defaultFile.approveStatus], f)
                    )
                  }, null, 2)
                ])
              ]),
              n("div", ae, [
                n("div", se, [
                  n("div", null, [
                    t[e.defaultFile.nodeType] != e.nodeType.抄送节点 ? (s(), o("div", oe, [
                      t[e.defaultFile.approveStatus] != e.statusOption.撤销 && t[e.defaultFile.approveStatus] != e.statusOption.评论 ? (s(), o("div", le, r(t[e.defaultFile.nodeTypeName]), 1)) : d("", !0),
                      n("div", ne, [
                        t[e.defaultFile.lineType] == "solid" ? (s(), o("div", ie, [
                          n("span", {
                            style: E({
                              color: t[e.defaultFile.approveStatus] == e.statusOption.评论 ? "#000" : ""
                            })
                          }, r(t[e.defaultFile.originator]), 5),
                          t[e.defaultFile.approveStatusName] && t[e.defaultFile.approveStatus] != e.statusOption.发起 && t[e.defaultFile.approveStatus] != e.statusOption.退回 ? (s(), o("span", pe, r(t[e.defaultFile.approveStatus] == e.statusOption.评论 ? " 添加了评论" : "（" + t[e.defaultFile.approveStatusName] + "）"), 1)) : d("", !0),
                          t[e.defaultFile.approveStatus] == e.statusOption.退回 ? (s(), o("span", re, [
                            de,
                            O(r(t[e.defaultFile.backToRecordNodeName]), 1)
                          ])) : d("", !0)
                        ])) : (s(), o("div", ue, [
                          ((m = t[e.defaultFile.approvePersonList]) == null ? void 0 : m.length) == 1 ? (s(), o("span", ce, [
                            O(r(t[e.defaultFile.originator]) + " ", 1),
                            t[e.defaultFile.approveStatus] == e.statusOption.等待 ? (s(), o("span", fe, r(`（${t[e.defaultFile.approveStatusName]}）`), 1)) : d("", !0)
                          ])) : (s(), o("span", ve, r(((y = t[e.defaultFile.approvePersonList]) == null ? void 0 : y.length) + "人" + t[e.defaultFile.approveTypeName]), 1))
                        ]))
                      ])
                    ])) : (s(), o("div", _e, [
                      he,
                      n("div", ye, [
                        ((k = t[e.defaultFile.approvePersonList]) == null ? void 0 : k.length) == 1 ? (s(), o("span", ke, [
                          n("span", null, [
                            O("已抄送给 "),
                            n("span", ge, r(t[e.defaultFile.approvePersonList][0].userName), 1)
                          ]),
                          n("span", Fe, r(t[e.defaultFile.approvePersonList][0].status === "END" ? "已读" : "未读"), 1)
                        ])) : d("", !0),
                        ((g = t[e.defaultFile.approvePersonList]) == null ? void 0 : g.length) > 1 ? (s(), o("span", me, [
                          O(r(`已抄送${(T = t[e.defaultFile.approvePersonList]) == null ? void 0 : T.length}人`) + " ", 1),
                          t[e.defaultFile.allRead] ? (s(), o("span", Te, " 全部已读 ")) : (s(), o("span", Ne, [
                            t[e.defaultFile.read] ? d("", !0) : (s(), o("span", xe, " 全部未读 ")),
                            t[e.defaultFile.read] ? (s(), o("span", be, r(t[e.defaultFile.read]) + "人已读 ", 1)) : d("", !0)
                          ]))
                        ])) : d("", !0)
                      ])
                    ]))
                  ]),
                  n("div", Oe, [
                    t[e.defaultFile.nodeType] != e.nodeType.抄送节点 ? (s(), o("span", Pe, r(t[e.defaultFile.operationTime]), 1)) : d("", !0),
                    t[e.defaultFile.nodeType] == e.nodeType.抄送节点 && ((N = t[e.defaultFile.approvePersonList]) == null ? void 0 : N.length) > 1 ? (s(), o("span", Se, [
                      t != null && t.show ? (s(), o("i", {
                        key: 0,
                        class: "ikapprove ikapprove-a-putongjiantouzhankai",
                        onClick: (u) => L(t, "flex")
                      }, null, 8, Ie)) : (s(), o("i", {
                        key: 1,
                        onClick: (u) => L(t, "none"),
                        class: "ikapprove ikapprove-a-putongjiantoushouqi"
                      }, null, 8, Le))
                    ])) : d("", !0)
                  ])
                ])
              ])
            ]),
            n("div", {
              class: "bottomBlock",
              style: E({
                borderLeft: f == e.listData.length - 1 ? "" : `2px ${t[e.defaultFile.lineType]} var(--el-border-color)`
              })
            }, [
              t[e.defaultFile.approveOpinion] || t[e.defaultFile.approveStatus] == e.statusOption.加签 ? (s(), o("div", we, [
                t[e.defaultFile.approveOpinion] ? (s(), o("span", ze, r(t[e.defaultFile.approveOpinion]), 1)) : d("", !0),
                t[e.defaultFile.approveStatus] == e.statusOption.加签 ? (s(), o("span", Be, [
                  je,
                  n("span", Ee, r(t[e.defaultFile.countersignPer][0].userName), 1)
                ])) : d("", !0)
              ])) : d("", !0),
              (w = t[e.defaultFile.attachment]) != null && w.length ? (s(), o("div", De, [
                (s(!0), o(x, null, b(t[e.defaultFile.attachment], (u, P) => (s(), o("div", {
                  class: "file-card",
                  key: P,
                  onClick: (Qe) => R(u)
                }, [
                  n("div", {
                    class: S($(u[e.defaultFile.attachmentParam.suffix]))
                  }, null, 2),
                  n("div", Ce, [
                    n("div", $e, r(u[e.defaultFile.attachmentParam.originName]), 1),
                    n("div", Re, r((u[e.defaultFile.attachmentParam.size] / 1024 / 1024).toFixed(3)) + "MB ", 1)
                  ])
                ], 8, Ae))), 128))
              ])) : d("", !0),
              (z = t[e.defaultFile.attachmentImg]) != null && z.length ? (s(), o("div", Me, [
                (s(!0), o(x, null, b(t[e.defaultFile.attachmentImg], (u, P) => (s(), o("div", {
                  class: "image",
                  key: P
                }, [
                  K(i, {
                    src: h(u),
                    fit: "cover",
                    "z-index": "9999",
                    "zoom-rate": 1.2,
                    alt: h(u)
                  }, null, 8, ["src", "alt"])
                ]))), 128))
              ])) : d("", !0),
              (t[e.defaultFile.nodeType] == e.nodeType.抄送节点 || t[e.defaultFile.approveStatus] == e.statusOption.等待) && ((B = t[e.defaultFile.approvePersonList]) == null ? void 0 : B.length) > 1 ? (s(), o("div", Ve, [
                (s(!0), o(x, null, b(t[e.defaultFile.approvePersonList], (u) => (s(), o("div", {
                  class: "perBlock",
                  key: u.userName
                }, [
                  n("span", Ue, [
                    u.userAvatar ? (s(), o("img", {
                      key: 0,
                      style: { width: "100%", height: "100%", "border-radius": "50%" },
                      src: h(u.userAvatar),
                      alt: ""
                    }, null, 8, We)) : d("", !0),
                    n("span", null, r(u.userName.slice(-2)), 1),
                    u.status === "END" ? (s(), o("i", He)) : d("", !0)
                  ]),
                  n("div", Ke, r(u.userName), 1)
                ]))), 128))
              ])) : d("", !0)
            ], 4)
          ], 8, Q);
        }), 128))
      ]);
    };
  }
});
const Ge = (c, v) => {
  const p = c.__vccOpts || c;
  for (const [e, F] of v)
    p[e] = F;
  return p;
}, Je = /* @__PURE__ */ Ge(qe, [["__scopeId", "data-v-21621e0f"]]), Ze = G(Je);
export {
  Ze as IKApprovalProcessDetail,
  Ze as default
};
