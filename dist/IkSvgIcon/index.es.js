var Jo = Object.defineProperty;
var es = (e, t, r) => t in e ? Jo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var kn = (e, t, r) => (es(e, typeof t != "symbol" ? t + "" : t, r), r);
import { defineComponent as Ni, h as p0, computed as ht, resolveComponent as er, openBlock as pe, createBlock as Pe, withCtx as Me, mergeProps as yt, createElementBlock as Ie, normalizeStyle as Se, normalizeClass as tr, unref as nt, createElementVNode as rr, createTextVNode as nr, toDisplayString as ir, createVNode as v0, createCommentVNode as x0, Fragment as ts } from "vue";
import "lodash-es";
const rs = (e, t) => {
  if (e.install = (r) => {
    for (const n of [e, ...Object.values(t ?? {})])
      r.component(n.name, n);
  }, t)
    for (const [r, n] of Object.entries(t))
      e[r] = n;
  return e;
}, Ht = /^[a-z0-9]+(-[a-z0-9]+)*$/, rn = (e, t, r, n = "") => {
  const i = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (i.length < 2 || i.length > 3)
      return null;
    n = i.shift().slice(1);
  }
  if (i.length > 3 || !i.length)
    return null;
  if (i.length > 1) {
    const c = i.pop(), f = i.pop(), a = {
      // Allow provider without '@': "provider:prefix:name"
      provider: i.length > 0 ? i[0] : n,
      prefix: f,
      name: c
    };
    return t && !fr(a) ? null : a;
  }
  const o = i[0], s = o.split("-");
  if (s.length > 1) {
    const c = {
      provider: n,
      prefix: s.shift(),
      name: s.join("-")
    };
    return t && !fr(c) ? null : c;
  }
  if (r && n === "") {
    const c = {
      provider: n,
      prefix: "",
      name: o
    };
    return t && !fr(c, r) ? null : c;
  }
  return null;
}, fr = (e, t) => e ? !!((e.provider === "" || e.provider.match(Ht)) && (t && e.prefix === "" || e.prefix.match(Ht)) && e.name.match(Ht)) : !1, Oi = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), xr = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), nn = Object.freeze({
  ...Oi,
  ...xr
}), In = Object.freeze({
  ...nn,
  body: "",
  hidden: !1
});
function ns(e, t) {
  const r = {};
  !e.hFlip != !t.hFlip && (r.hFlip = !0), !e.vFlip != !t.vFlip && (r.vFlip = !0);
  const n = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return n && (r.rotate = n), r;
}
function b0(e, t) {
  const r = ns(e, t);
  for (const n in In)
    n in xr ? n in e && !(n in r) && (r[n] = xr[n]) : n in t ? r[n] = t[n] : n in e && (r[n] = e[n]);
  return r;
}
function is(e, t) {
  const r = e.icons, n = e.aliases || /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  function o(s) {
    if (r[s])
      return i[s] = [];
    if (!(s in i)) {
      i[s] = null;
      const c = n[s] && n[s].parent, f = c && o(c);
      f && (i[s] = [c].concat(f));
    }
    return i[s];
  }
  return (t || Object.keys(r).concat(Object.keys(n))).forEach(o), i;
}
function os(e, t, r) {
  const n = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function s(c) {
    o = b0(
      n[c] || i[c],
      o
    );
  }
  return s(t), r.forEach(s), b0(e, o);
}
function Ii(e, t) {
  const r = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return r;
  e.not_found instanceof Array && e.not_found.forEach((i) => {
    t(i, null), r.push(i);
  });
  const n = is(e);
  for (const i in n) {
    const o = n[i];
    o && (t(i, os(e, i, o)), r.push(i));
  }
  return r;
}
const ss = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Oi
};
function Cn(e, t) {
  for (const r in t)
    if (r in e && typeof e[r] != typeof t[r])
      return !1;
  return !0;
}
function Di(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Cn(e, ss))
    return null;
  const r = t.icons;
  for (const i in r) {
    const o = r[i];
    if (!i.match(Ht) || typeof o.body != "string" || !Cn(
      o,
      In
    ))
      return null;
  }
  const n = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const i in n) {
    const o = n[i], s = o.parent;
    if (!i.match(Ht) || typeof s != "string" || !r[s] && !n[s] || !Cn(
      o,
      In
    ))
      return null;
  }
  return t;
}
const g0 = /* @__PURE__ */ Object.create(null);
function as(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function pt(e, t) {
  const r = g0[e] || (g0[e] = /* @__PURE__ */ Object.create(null));
  return r[t] || (r[t] = as(e, t));
}
function Jn(e, t) {
  return Di(t) ? Ii(t, (r, n) => {
    n ? e.icons[r] = n : e.missing.add(r);
  }) : [];
}
function cs(e, t, r) {
  try {
    if (typeof r.body == "string")
      return e.icons[t] = { ...r }, !0;
  } catch {
  }
  return !1;
}
let zt = !1;
function Li(e) {
  return typeof e == "boolean" && (zt = e), zt;
}
function fs(e) {
  const t = typeof e == "string" ? rn(e, !0, zt) : e;
  if (t) {
    const r = pt(t.provider, t.prefix), n = t.name;
    return r.icons[n] || (r.missing.has(n) ? null : void 0);
  }
}
function us(e, t) {
  const r = rn(e, !0, zt);
  if (!r)
    return !1;
  const n = pt(r.provider, r.prefix);
  return cs(n, r.name, t);
}
function ls(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), zt && !t && !e.prefix) {
    let i = !1;
    return Di(e) && (e.prefix = "", Ii(e, (o, s) => {
      s && us(o, s) && (i = !0);
    })), i;
  }
  const r = e.prefix;
  if (!fr({
    provider: t,
    prefix: r,
    name: "a"
  }))
    return !1;
  const n = pt(t, r);
  return !!Jn(n, e);
}
const Pi = Object.freeze({
  width: null,
  height: null
}), Mi = Object.freeze({
  // Dimensions
  ...Pi,
  // Transformations
  ...xr
}), hs = /(-?[0-9.]*[0-9]+[0-9.]*)/g, ds = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function m0(e, t, r) {
  if (t === 1)
    return e;
  if (r = r || 100, typeof e == "number")
    return Math.ceil(e * t * r) / r;
  if (typeof e != "string")
    return e;
  const n = e.split(hs);
  if (n === null || !n.length)
    return e;
  const i = [];
  let o = n.shift(), s = ds.test(o);
  for (; ; ) {
    if (s) {
      const c = parseFloat(o);
      isNaN(c) ? i.push(o) : i.push(Math.ceil(c * t * r) / r);
    } else
      i.push(o);
    if (o = n.shift(), o === void 0)
      return i.join("");
    s = !s;
  }
}
const ps = (e) => e === "unset" || e === "undefined" || e === "none";
function vs(e, t) {
  const r = {
    ...nn,
    ...e
  }, n = {
    ...Mi,
    ...t
  }, i = {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height
  };
  let o = r.body;
  [r, n].forEach((b) => {
    const g = [], E = b.hFlip, N = b.vFlip;
    let w = b.rotate;
    E ? N ? w += 2 : (g.push(
      "translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"
    ), g.push("scale(-1 1)"), i.top = i.left = 0) : N && (g.push(
      "translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"
    ), g.push("scale(1 -1)"), i.top = i.left = 0);
    let d;
    switch (w < 0 && (w -= Math.floor(w / 4) * 4), w = w % 4, w) {
      case 1:
        d = i.height / 2 + i.top, g.unshift(
          "rotate(90 " + d.toString() + " " + d.toString() + ")"
        );
        break;
      case 2:
        g.unshift(
          "rotate(180 " + (i.width / 2 + i.left).toString() + " " + (i.height / 2 + i.top).toString() + ")"
        );
        break;
      case 3:
        d = i.width / 2 + i.left, g.unshift(
          "rotate(-90 " + d.toString() + " " + d.toString() + ")"
        );
        break;
    }
    w % 2 === 1 && (i.left !== i.top && (d = i.left, i.left = i.top, i.top = d), i.width !== i.height && (d = i.width, i.width = i.height, i.height = d)), g.length && (o = '<g transform="' + g.join(" ") + '">' + o + "</g>");
  });
  const s = n.width, c = n.height, f = i.width, a = i.height;
  let u, h;
  s === null ? (h = c === null ? "1em" : c === "auto" ? a : c, u = m0(h, f / a)) : (u = s === "auto" ? f : s, h = c === null ? m0(u, a / f) : c === "auto" ? a : c);
  const l = {}, p = (b, g) => {
    ps(g) || (l[b] = g.toString());
  };
  return p("width", u), p("height", h), l.viewBox = i.left.toString() + " " + i.top.toString() + " " + f.toString() + " " + a.toString(), {
    attributes: l,
    body: o
  };
}
const xs = /\sid="(\S+)"/g, bs = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let gs = 0;
function ms(e, t = bs) {
  const r = [];
  let n;
  for (; n = xs.exec(e); )
    r.push(n[1]);
  if (!r.length)
    return e;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return r.forEach((o) => {
    const s = typeof t == "function" ? t(o) : t + (gs++).toString(), c = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"),
      "$1" + s + i + "$3"
    );
  }), e = e.replace(new RegExp(i, "g"), ""), e;
}
const Dn = /* @__PURE__ */ Object.create(null);
function ys(e, t) {
  Dn[e] = t;
}
function Ln(e) {
  return Dn[e] || Dn[""];
}
function e0(e) {
  let t;
  if (typeof e.resources == "string")
    t = [e.resources];
  else if (t = e.resources, !(t instanceof Array) || !t.length)
    return null;
  return {
    // API hosts
    resources: t,
    // Root path
    path: e.path || "/",
    // URL length limit
    maxURL: e.maxURL || 500,
    // Timeout before next host is used.
    rotate: e.rotate || 750,
    // Timeout before failing query.
    timeout: e.timeout || 5e3,
    // Randomise default API end point.
    random: e.random === !0,
    // Start index
    index: e.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: e.dataAfterTimeout !== !1
  };
}
const t0 = /* @__PURE__ */ Object.create(null), Lt = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], ur = [];
for (; Lt.length > 0; )
  Lt.length === 1 || Math.random() > 0.5 ? ur.push(Lt.shift()) : ur.push(Lt.pop());
t0[""] = e0({
  resources: ["https://api.iconify.design"].concat(ur)
});
function ws(e, t) {
  const r = e0(t);
  return r === null ? !1 : (t0[e] = r, !0);
}
function r0(e) {
  return t0[e];
}
const _s = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let y0 = _s();
function Es(e, t) {
  const r = r0(e);
  if (!r)
    return 0;
  let n;
  if (!r.maxURL)
    n = 0;
  else {
    let i = 0;
    r.resources.forEach((s) => {
      i = Math.max(i, s.length);
    });
    const o = t + ".json?icons=";
    n = r.maxURL - i - r.path.length - o.length;
  }
  return n;
}
function Ss(e) {
  return e === 404;
}
const ks = (e, t, r) => {
  const n = [], i = Es(e, t), o = "icons";
  let s = {
    type: o,
    provider: e,
    prefix: t,
    icons: []
  }, c = 0;
  return r.forEach((f, a) => {
    c += f.length + 1, c >= i && a > 0 && (n.push(s), s = {
      type: o,
      provider: e,
      prefix: t,
      icons: []
    }, c = f.length), s.icons.push(f);
  }), n.push(s), n;
};
function Cs(e) {
  if (typeof e == "string") {
    const t = r0(e);
    if (t)
      return t.path;
  }
  return "/";
}
const Bs = (e, t, r) => {
  if (!y0) {
    r("abort", 424);
    return;
  }
  let n = Cs(t.provider);
  switch (t.type) {
    case "icons": {
      const o = t.prefix, c = t.icons.join(","), f = new URLSearchParams({
        icons: c
      });
      n += o + ".json?" + f.toString();
      break;
    }
    case "custom": {
      const o = t.uri;
      n += o.slice(0, 1) === "/" ? o.slice(1) : o;
      break;
    }
    default:
      r("abort", 400);
      return;
  }
  let i = 503;
  y0(e + n).then((o) => {
    const s = o.status;
    if (s !== 200) {
      setTimeout(() => {
        r(Ss(s) ? "abort" : "next", s);
      });
      return;
    }
    return i = 501, o.json();
  }).then((o) => {
    if (typeof o != "object" || o === null) {
      setTimeout(() => {
        o === 404 ? r("abort", o) : r("next", i);
      });
      return;
    }
    setTimeout(() => {
      r("success", o);
    });
  }).catch(() => {
    r("next", i);
  });
}, As = {
  prepare: ks,
  send: Bs
};
function Rs(e) {
  const t = {
    loaded: [],
    missing: [],
    pending: []
  }, r = /* @__PURE__ */ Object.create(null);
  e.sort((i, o) => i.provider !== o.provider ? i.provider.localeCompare(o.provider) : i.prefix !== o.prefix ? i.prefix.localeCompare(o.prefix) : i.name.localeCompare(o.name));
  let n = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((i) => {
    if (n.name === i.name && n.prefix === i.prefix && n.provider === i.provider)
      return;
    n = i;
    const o = i.provider, s = i.prefix, c = i.name, f = r[o] || (r[o] = /* @__PURE__ */ Object.create(null)), a = f[s] || (f[s] = pt(o, s));
    let u;
    c in a.icons ? u = t.loaded : s === "" || a.missing.has(c) ? u = t.missing : u = t.pending;
    const h = {
      provider: o,
      prefix: s,
      name: c
    };
    u.push(h);
  }), t;
}
function Fi(e, t) {
  e.forEach((r) => {
    const n = r.loaderCallbacks;
    n && (r.loaderCallbacks = n.filter((i) => i.id !== t));
  });
}
function Ts(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let r = !1;
    const n = e.provider, i = e.prefix;
    t.forEach((o) => {
      const s = o.icons, c = s.pending.length;
      s.pending = s.pending.filter((f) => {
        if (f.prefix !== i)
          return !0;
        const a = f.name;
        if (e.icons[a])
          s.loaded.push({
            provider: n,
            prefix: i,
            name: a
          });
        else if (e.missing.has(a))
          s.missing.push({
            provider: n,
            prefix: i,
            name: a
          });
        else
          return r = !0, !0;
        return !1;
      }), s.pending.length !== c && (r || Fi([e], o.id), o.callback(
        s.loaded.slice(0),
        s.missing.slice(0),
        s.pending.slice(0),
        o.abort
      ));
    });
  }));
}
let Ns = 0;
function Os(e, t, r) {
  const n = Ns++, i = Fi.bind(null, r, n);
  if (!t.pending.length)
    return i;
  const o = {
    id: n,
    icons: t,
    callback: e,
    abort: i
  };
  return r.forEach((s) => {
    (s.loaderCallbacks || (s.loaderCallbacks = [])).push(o);
  }), i;
}
function Is(e, t = !0, r = !1) {
  const n = [];
  return e.forEach((i) => {
    const o = typeof i == "string" ? rn(i, t, r) : i;
    o && n.push(o);
  }), n;
}
var Ds = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Ls(e, t, r, n) {
  const i = e.resources.length, o = e.random ? Math.floor(Math.random() * i) : e.index;
  let s;
  if (e.random) {
    let _ = e.resources.slice(0);
    for (s = []; _.length > 1; ) {
      const C = Math.floor(Math.random() * _.length);
      s.push(_[C]), _ = _.slice(0, C).concat(_.slice(C + 1));
    }
    s = s.concat(_);
  } else
    s = e.resources.slice(o).concat(e.resources.slice(0, o));
  const c = Date.now();
  let f = "pending", a = 0, u, h = null, l = [], p = [];
  typeof n == "function" && p.push(n);
  function b() {
    h && (clearTimeout(h), h = null);
  }
  function g() {
    f === "pending" && (f = "aborted"), b(), l.forEach((_) => {
      _.status === "pending" && (_.status = "aborted");
    }), l = [];
  }
  function E(_, C) {
    C && (p = []), typeof _ == "function" && p.push(_);
  }
  function N() {
    return {
      startTime: c,
      payload: t,
      status: f,
      queriesSent: a,
      queriesPending: l.length,
      subscribe: E,
      abort: g
    };
  }
  function w() {
    f = "failed", p.forEach((_) => {
      _(void 0, u);
    });
  }
  function d() {
    l.forEach((_) => {
      _.status === "pending" && (_.status = "aborted");
    }), l = [];
  }
  function x(_, C, T) {
    const D = C !== "success";
    switch (l = l.filter((S) => S !== _), f) {
      case "pending":
        break;
      case "failed":
        if (D || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (C === "abort") {
      u = T, w();
      return;
    }
    if (D) {
      u = T, l.length || (s.length ? y() : w());
      return;
    }
    if (b(), d(), !e.random) {
      const S = e.resources.indexOf(_.resource);
      S !== -1 && S !== e.index && (e.index = S);
    }
    f = "completed", p.forEach((S) => {
      S(T);
    });
  }
  function y() {
    if (f !== "pending")
      return;
    b();
    const _ = s.shift();
    if (_ === void 0) {
      if (l.length) {
        h = setTimeout(() => {
          b(), f === "pending" && (d(), w());
        }, e.timeout);
        return;
      }
      w();
      return;
    }
    const C = {
      status: "pending",
      resource: _,
      callback: (T, D) => {
        x(C, T, D);
      }
    };
    l.push(C), a++, h = setTimeout(y, e.rotate), r(_, t, C.callback);
  }
  return setTimeout(y), N;
}
function $i(e) {
  const t = {
    ...Ds,
    ...e
  };
  let r = [];
  function n() {
    r = r.filter((c) => c().status === "pending");
  }
  function i(c, f, a) {
    const u = Ls(
      t,
      c,
      f,
      (h, l) => {
        n(), a && a(h, l);
      }
    );
    return r.push(u), u;
  }
  function o(c) {
    return r.find((f) => c(f)) || null;
  }
  return {
    query: i,
    find: o,
    setIndex: (c) => {
      t.index = c;
    },
    getIndex: () => t.index,
    cleanup: n
  };
}
function w0() {
}
const Bn = /* @__PURE__ */ Object.create(null);
function Ps(e) {
  if (!Bn[e]) {
    const t = r0(e);
    if (!t)
      return;
    const r = $i(t), n = {
      config: t,
      redundancy: r
    };
    Bn[e] = n;
  }
  return Bn[e];
}
function Ms(e, t, r) {
  let n, i;
  if (typeof e == "string") {
    const o = Ln(e);
    if (!o)
      return r(void 0, 424), w0;
    i = o.send;
    const s = Ps(e);
    s && (n = s.redundancy);
  } else {
    const o = e0(e);
    if (o) {
      n = $i(o);
      const s = e.resources ? e.resources[0] : "", c = Ln(s);
      c && (i = c.send);
    }
  }
  return !n || !i ? (r(void 0, 424), w0) : n.query(t, i, r)().abort;
}
const _0 = "iconify2", qt = "iconify", Hi = qt + "-count", E0 = qt + "-version", zi = 36e5, Fs = 168;
function Pn(e, t) {
  try {
    return e.getItem(t);
  } catch {
  }
}
function n0(e, t, r) {
  try {
    return e.setItem(t, r), !0;
  } catch {
  }
}
function S0(e, t) {
  try {
    e.removeItem(t);
  } catch {
  }
}
function Mn(e, t) {
  return n0(e, Hi, t.toString());
}
function Fn(e) {
  return parseInt(Pn(e, Hi)) || 0;
}
const on = {
  local: !0,
  session: !0
}, qi = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let i0 = !1;
function $s(e) {
  i0 = e;
}
let or = typeof window > "u" ? {} : window;
function Wi(e) {
  const t = e + "Storage";
  try {
    if (or && or[t] && typeof or[t].length == "number")
      return or[t];
  } catch {
  }
  on[e] = !1;
}
function Ui(e, t) {
  const r = Wi(e);
  if (!r)
    return;
  const n = Pn(r, E0);
  if (n !== _0) {
    if (n) {
      const c = Fn(r);
      for (let f = 0; f < c; f++)
        S0(r, qt + f.toString());
    }
    n0(r, E0, _0), Mn(r, 0);
    return;
  }
  const i = Math.floor(Date.now() / zi) - Fs, o = (c) => {
    const f = qt + c.toString(), a = Pn(r, f);
    if (typeof a == "string") {
      try {
        const u = JSON.parse(a);
        if (typeof u == "object" && typeof u.cached == "number" && u.cached > i && typeof u.provider == "string" && typeof u.data == "object" && typeof u.data.prefix == "string" && // Valid item: run callback
        t(u, c))
          return !0;
      } catch {
      }
      S0(r, f);
    }
  };
  let s = Fn(r);
  for (let c = s - 1; c >= 0; c--)
    o(c) || (c === s - 1 ? (s--, Mn(r, s)) : qi[e].add(c));
}
function Yi() {
  if (!i0) {
    $s(!0);
    for (const e in on)
      Ui(e, (t) => {
        const r = t.data, n = t.provider, i = r.prefix, o = pt(
          n,
          i
        );
        if (!Jn(o, r).length)
          return !1;
        const s = r.lastModified || -1;
        return o.lastModifiedCached = o.lastModifiedCached ? Math.min(o.lastModifiedCached, s) : s, !0;
      });
  }
}
function Hs(e, t) {
  const r = e.lastModifiedCached;
  if (
    // Matches or newer
    r && r >= t
  )
    return r === t;
  if (e.lastModifiedCached = t, r)
    for (const n in on)
      Ui(n, (i) => {
        const o = i.data;
        return i.provider !== e.provider || o.prefix !== e.prefix || o.lastModified === t;
      });
  return !0;
}
function zs(e, t) {
  i0 || Yi();
  function r(n) {
    let i;
    if (!on[n] || !(i = Wi(n)))
      return;
    const o = qi[n];
    let s;
    if (o.size)
      o.delete(s = Array.from(o).shift());
    else if (s = Fn(i), !Mn(i, s + 1))
      return;
    const c = {
      cached: Math.floor(Date.now() / zi),
      provider: e.provider,
      data: t
    };
    return n0(
      i,
      qt + s.toString(),
      JSON.stringify(c)
    );
  }
  t.lastModified && !Hs(e, t.lastModified) || Object.keys(t.icons).length && (t.not_found && (t = Object.assign({}, t), delete t.not_found), r("local") || r("session"));
}
function k0() {
}
function qs(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, Ts(e);
  }));
}
function Ws(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: r, prefix: n } = e, i = e.iconsToLoad;
    delete e.iconsToLoad;
    let o;
    if (!i || !(o = Ln(r)))
      return;
    o.prepare(r, n, i).forEach((c) => {
      Ms(r, c, (f) => {
        if (typeof f != "object")
          c.icons.forEach((a) => {
            e.missing.add(a);
          });
        else
          try {
            const a = Jn(
              e,
              f
            );
            if (!a.length)
              return;
            const u = e.pendingIcons;
            u && a.forEach((h) => {
              u.delete(h);
            }), zs(e, f);
          } catch (a) {
            console.error(a);
          }
        qs(e);
      });
    });
  }));
}
const Us = (e, t) => {
  const r = Is(e, !0, Li()), n = Rs(r);
  if (!n.pending.length) {
    let f = !0;
    return t && setTimeout(() => {
      f && t(
        n.loaded,
        n.missing,
        n.pending,
        k0
      );
    }), () => {
      f = !1;
    };
  }
  const i = /* @__PURE__ */ Object.create(null), o = [];
  let s, c;
  return n.pending.forEach((f) => {
    const { provider: a, prefix: u } = f;
    if (u === c && a === s)
      return;
    s = a, c = u, o.push(pt(a, u));
    const h = i[a] || (i[a] = /* @__PURE__ */ Object.create(null));
    h[u] || (h[u] = []);
  }), n.pending.forEach((f) => {
    const { provider: a, prefix: u, name: h } = f, l = pt(a, u), p = l.pendingIcons || (l.pendingIcons = /* @__PURE__ */ new Set());
    p.has(h) || (p.add(h), i[a][u].push(h));
  }), o.forEach((f) => {
    const { provider: a, prefix: u } = f;
    i[a][u].length && Ws(f, i[a][u]);
  }), t ? Os(t, n, o) : k0;
};
function Ys(e, t) {
  const r = {
    ...e
  };
  for (const n in t) {
    const i = t[n], o = typeof i;
    n in Pi ? (i === null || i && (o === "string" || o === "number")) && (r[n] = i) : o === typeof r[n] && (r[n] = n === "rotate" ? i % 4 : i);
  }
  return r;
}
const js = /[\s,]+/;
function Vs(e, t) {
  t.split(js).forEach((r) => {
    switch (r.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function Ks(e, t = 0) {
  const r = e.replace(/^-?[0-9.]*/, "");
  function n(i) {
    for (; i < 0; )
      i += 4;
    return i % 4;
  }
  if (r === "") {
    const i = parseInt(e);
    return isNaN(i) ? 0 : n(i);
  } else if (r !== e) {
    let i = 0;
    switch (r) {
      case "%":
        i = 25;
        break;
      case "deg":
        i = 90;
    }
    if (i) {
      let o = parseFloat(e.slice(0, e.length - r.length));
      return isNaN(o) ? 0 : (o = o / i, o % 1 === 0 ? n(o) : 0);
    }
  }
  return t;
}
function Gs(e, t) {
  let r = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const n in t)
    r += " " + n + '="' + t[n] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e + "</svg>";
}
function Zs(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Xs(e) {
  return "data:image/svg+xml," + Zs(e);
}
function Qs(e) {
  return 'url("' + Xs(e) + '")';
}
const C0 = {
  ...Mi,
  inline: !1
}, Js = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, ea = {
  display: "inline-block"
}, $n = {
  backgroundColor: "currentColor"
}, ji = {
  backgroundColor: "transparent"
}, B0 = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, A0 = {
  webkitMask: $n,
  mask: $n,
  background: ji
};
for (const e in A0) {
  const t = A0[e];
  for (const r in B0)
    t[e + r] = B0[r];
}
const lr = {};
["horizontal", "vertical"].forEach((e) => {
  const t = e.slice(0, 1) + "Flip";
  lr[e + "-flip"] = t, lr[e.slice(0, 1) + "-flip"] = t, lr[e + "Flip"] = t;
});
function R0(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const T0 = (e, t) => {
  const r = Ys(C0, t), n = { ...Js }, i = t.mode || "svg", o = {}, s = t.style, c = typeof s == "object" && !(s instanceof Array) ? s : {};
  for (let g in t) {
    const E = t[g];
    if (E !== void 0)
      switch (g) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          r[g] = E === !0 || E === "true" || E === 1;
          break;
        case "flip":
          typeof E == "string" && Vs(r, E);
          break;
        case "color":
          o.color = E;
          break;
        case "rotate":
          typeof E == "string" ? r[g] = Ks(E) : typeof E == "number" && (r[g] = E);
          break;
        case "ariaHidden":
        case "aria-hidden":
          E !== !0 && E !== "true" && delete n["aria-hidden"];
          break;
        default: {
          const N = lr[g];
          N ? (E === !0 || E === "true" || E === 1) && (r[N] = !0) : C0[g] === void 0 && (n[g] = E);
        }
      }
  }
  const f = vs(e, r), a = f.attributes;
  if (r.inline && (o.verticalAlign = "-0.125em"), i === "svg") {
    n.style = {
      ...o,
      ...c
    }, Object.assign(n, a);
    let g = 0, E = t.id;
    return typeof E == "string" && (E = E.replace(/-/g, "_")), n.innerHTML = ms(f.body, E ? () => E + "ID" + g++ : "iconifyVue"), p0("svg", n);
  }
  const { body: u, width: h, height: l } = e, p = i === "mask" || (i === "bg" ? !1 : u.indexOf("currentColor") !== -1), b = Gs(u, {
    ...a,
    width: h + "",
    height: l + ""
  });
  return n.style = {
    ...o,
    "--svg": Qs(b),
    width: R0(a.width),
    height: R0(a.height),
    ...ea,
    ...p ? $n : ji,
    ...c
  }, p0("span", n);
};
Li(!0);
ys("", As);
if (typeof document < "u" && typeof window < "u") {
  Yi();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, r = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((n) => {
      try {
        // Check if item is an object and not null/array
        (typeof n != "object" || n === null || n instanceof Array || // Check for 'icons' and 'prefix'
        typeof n.icons != "object" || typeof n.prefix != "string" || // Add icon set
        !ls(n)) && console.error(r);
      } catch {
        console.error(r);
      }
    });
  }
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders;
    if (typeof t == "object" && t !== null)
      for (let r in t) {
        const n = "IconifyProviders[" + r + "] is invalid.";
        try {
          const i = t[r];
          if (typeof i != "object" || !i || i.resources === void 0)
            continue;
          ws(r, i) || console.error(n);
        } catch {
          console.error(n);
        }
      }
  }
}
const ta = {
  ...nn,
  body: ""
}, sr = Ni({
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
    getIcon(e, t) {
      if (typeof e == "object" && e !== null && typeof e.body == "string")
        return this._name = "", this.abortLoading(), {
          data: e
        };
      let r;
      if (typeof e != "string" || (r = rn(e, !1, !0)) === null)
        return this.abortLoading(), null;
      const n = fs(r);
      if (!n)
        return (!this._loadingIcon || this._loadingIcon.name !== e) && (this.abortLoading(), this._name = "", n !== null && (this._loadingIcon = {
          name: e,
          abort: Us([r], () => {
            this.counter++;
          })
        })), null;
      this.abortLoading(), this._name !== e && (this._name = e, t && t(e));
      const i = ["iconify"];
      return r.prefix !== "" && i.push("iconify--" + r.prefix), r.provider !== "" && i.push("iconify--" + r.provider), { data: n, classes: i };
    }
  },
  // Render icon
  render() {
    this.counter;
    const e = this.$attrs, t = this.iconMounted ? this.getIcon(e.icon, e.onLoad) : null;
    if (!t)
      return T0(ta, e);
    let r = e;
    return t.classes && (r = {
      ...e,
      class: (typeof e.class == "string" ? e.class + " " : "") + t.classes.join(" ")
    }), T0({
      ...nn,
      ...t.data
    }, r);
  }
});
var re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ra(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      if (this instanceof n) {
        var i = [null];
        i.push.apply(i, arguments);
        var o = Function.bind.apply(t, i);
        return new o();
      }
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var N0 = {}, na = {
  get exports() {
    return N0;
  },
  set exports(e) {
    N0 = e;
  }
};
function Mt(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var br = {}, ia = {
  get exports() {
    return br;
  },
  set exports(e) {
    br = e;
  }
};
const oa = {}, sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oa
}, Symbol.toStringTag, { value: "Module" })), aa = /* @__PURE__ */ ra(sa);
var O0;
function ce() {
  return O0 || (O0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(re, function() {
      var r = r || function(n, i) {
        var o;
        if (typeof window < "u" && window.crypto && (o = window.crypto), typeof self < "u" && self.crypto && (o = self.crypto), typeof globalThis < "u" && globalThis.crypto && (o = globalThis.crypto), !o && typeof window < "u" && window.msCrypto && (o = window.msCrypto), !o && typeof re < "u" && re.crypto && (o = re.crypto), !o && typeof Mt == "function")
          try {
            o = aa;
          } catch {
          }
        var s = function() {
          if (o) {
            if (typeof o.getRandomValues == "function")
              try {
                return o.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof o.randomBytes == "function")
              try {
                return o.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, c = Object.create || function() {
          function w() {
          }
          return function(d) {
            var x;
            return w.prototype = d, x = new w(), w.prototype = null, x;
          };
        }(), f = {}, a = f.lib = {}, u = a.Base = function() {
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
            extend: function(w) {
              var d = c(this);
              return w && d.mixIn(w), (!d.hasOwnProperty("init") || this.init === d.init) && (d.init = function() {
                d.$super.init.apply(this, arguments);
              }), d.init.prototype = d, d.$super = this, d;
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
              var w = this.extend();
              return w.init.apply(w, arguments), w;
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
            mixIn: function(w) {
              for (var d in w)
                w.hasOwnProperty(d) && (this[d] = w[d]);
              w.hasOwnProperty("toString") && (this.toString = w.toString);
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
        }(), h = a.WordArray = u.extend({
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
          init: function(w, d) {
            w = this.words = w || [], d != i ? this.sigBytes = d : this.sigBytes = w.length * 4;
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
          toString: function(w) {
            return (w || p).stringify(this);
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
          concat: function(w) {
            var d = this.words, x = w.words, y = this.sigBytes, _ = w.sigBytes;
            if (this.clamp(), y % 4)
              for (var C = 0; C < _; C++) {
                var T = x[C >>> 2] >>> 24 - C % 4 * 8 & 255;
                d[y + C >>> 2] |= T << 24 - (y + C) % 4 * 8;
              }
            else
              for (var D = 0; D < _; D += 4)
                d[y + D >>> 2] = x[D >>> 2];
            return this.sigBytes += _, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var w = this.words, d = this.sigBytes;
            w[d >>> 2] &= 4294967295 << 32 - d % 4 * 8, w.length = n.ceil(d / 4);
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
            var w = u.clone.call(this);
            return w.words = this.words.slice(0), w;
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
          random: function(w) {
            for (var d = [], x = 0; x < w; x += 4)
              d.push(s());
            return new h.init(d, w);
          }
        }), l = f.enc = {}, p = l.Hex = {
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
          stringify: function(w) {
            for (var d = w.words, x = w.sigBytes, y = [], _ = 0; _ < x; _++) {
              var C = d[_ >>> 2] >>> 24 - _ % 4 * 8 & 255;
              y.push((C >>> 4).toString(16)), y.push((C & 15).toString(16));
            }
            return y.join("");
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
          parse: function(w) {
            for (var d = w.length, x = [], y = 0; y < d; y += 2)
              x[y >>> 3] |= parseInt(w.substr(y, 2), 16) << 24 - y % 8 * 4;
            return new h.init(x, d / 2);
          }
        }, b = l.Latin1 = {
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
          stringify: function(w) {
            for (var d = w.words, x = w.sigBytes, y = [], _ = 0; _ < x; _++) {
              var C = d[_ >>> 2] >>> 24 - _ % 4 * 8 & 255;
              y.push(String.fromCharCode(C));
            }
            return y.join("");
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
          parse: function(w) {
            for (var d = w.length, x = [], y = 0; y < d; y++)
              x[y >>> 2] |= (w.charCodeAt(y) & 255) << 24 - y % 4 * 8;
            return new h.init(x, d);
          }
        }, g = l.Utf8 = {
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
          stringify: function(w) {
            try {
              return decodeURIComponent(escape(b.stringify(w)));
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
          parse: function(w) {
            return b.parse(unescape(encodeURIComponent(w)));
          }
        }, E = a.BufferedBlockAlgorithm = u.extend({
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
          _append: function(w) {
            typeof w == "string" && (w = g.parse(w)), this._data.concat(w), this._nDataBytes += w.sigBytes;
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
          _process: function(w) {
            var d, x = this._data, y = x.words, _ = x.sigBytes, C = this.blockSize, T = C * 4, D = _ / T;
            w ? D = n.ceil(D) : D = n.max((D | 0) - this._minBufferSize, 0);
            var S = D * C, A = n.min(S * 4, _);
            if (S) {
              for (var L = 0; L < S; L += C)
                this._doProcessBlock(y, L);
              d = y.splice(0, S), x.sigBytes -= A;
            }
            return new h.init(d, A);
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
            var w = u.clone.call(this);
            return w._data = this._data.clone(), w;
          },
          _minBufferSize: 0
        });
        a.Hasher = E.extend({
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
          init: function(w) {
            this.cfg = this.cfg.extend(w), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            E.reset.call(this), this._doReset();
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
          update: function(w) {
            return this._append(w), this._process(), this;
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
          finalize: function(w) {
            w && this._append(w);
            var d = this._doFinalize();
            return d;
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
          _createHelper: function(w) {
            return function(d, x) {
              return new w.init(x).finalize(d);
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
          _createHmacHelper: function(w) {
            return function(d, x) {
              return new N.HMAC.init(w, x).finalize(d);
            };
          }
        });
        var N = f.algo = {};
        return f;
      }(Math);
      return r;
    });
  }(ia)), br;
}
var gr = {}, ca = {
  get exports() {
    return gr;
  },
  set exports(e) {
    gr = e;
  }
}, I0;
function sn() {
  return I0 || (I0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function(n) {
        var i = r, o = i.lib, s = o.Base, c = o.WordArray, f = i.x64 = {};
        f.Word = s.extend({
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
          init: function(a, u) {
            this.high = a, this.low = u;
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
        }), f.WordArray = s.extend({
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
          init: function(a, u) {
            a = this.words = a || [], u != n ? this.sigBytes = u : this.sigBytes = a.length * 8;
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
            for (var a = this.words, u = a.length, h = [], l = 0; l < u; l++) {
              var p = a[l];
              h.push(p.high), h.push(p.low);
            }
            return c.create(h, this.sigBytes);
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
            for (var a = s.clone.call(this), u = a.words = this.words.slice(0), h = u.length, l = 0; l < h; l++)
              u[l] = u[l].clone();
            return a;
          }
        });
      }(), r;
    });
  }(ca)), gr;
}
var mr = {}, fa = {
  get exports() {
    return mr;
  },
  set exports(e) {
    mr = e;
  }
}, D0;
function ua() {
  return D0 || (D0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var n = r, i = n.lib, o = i.WordArray, s = o.init, c = o.init = function(f) {
            if (f instanceof ArrayBuffer && (f = new Uint8Array(f)), (f instanceof Int8Array || typeof Uint8ClampedArray < "u" && f instanceof Uint8ClampedArray || f instanceof Int16Array || f instanceof Uint16Array || f instanceof Int32Array || f instanceof Uint32Array || f instanceof Float32Array || f instanceof Float64Array) && (f = new Uint8Array(f.buffer, f.byteOffset, f.byteLength)), f instanceof Uint8Array) {
              for (var a = f.byteLength, u = [], h = 0; h < a; h++)
                u[h >>> 2] |= f[h] << 24 - h % 4 * 8;
              s.call(this, u, a);
            } else
              s.apply(this, arguments);
          };
          c.prototype = o;
        }
      }(), r.lib.WordArray;
    });
  }(fa)), mr;
}
var yr = {}, la = {
  get exports() {
    return yr;
  },
  set exports(e) {
    yr = e;
  }
}, L0;
function ha() {
  return L0 || (L0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, s = n.enc;
        s.Utf16 = s.Utf16BE = {
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
          stringify: function(f) {
            for (var a = f.words, u = f.sigBytes, h = [], l = 0; l < u; l += 2) {
              var p = a[l >>> 2] >>> 16 - l % 4 * 8 & 65535;
              h.push(String.fromCharCode(p));
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
          parse: function(f) {
            for (var a = f.length, u = [], h = 0; h < a; h++)
              u[h >>> 1] |= f.charCodeAt(h) << 16 - h % 2 * 16;
            return o.create(u, a * 2);
          }
        }, s.Utf16LE = {
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
          stringify: function(f) {
            for (var a = f.words, u = f.sigBytes, h = [], l = 0; l < u; l += 2) {
              var p = c(a[l >>> 2] >>> 16 - l % 4 * 8 & 65535);
              h.push(String.fromCharCode(p));
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
          parse: function(f) {
            for (var a = f.length, u = [], h = 0; h < a; h++)
              u[h >>> 1] |= c(f.charCodeAt(h) << 16 - h % 2 * 16);
            return o.create(u, a * 2);
          }
        };
        function c(f) {
          return f << 8 & 4278255360 | f >>> 8 & 16711935;
        }
      }(), r.enc.Utf16;
    });
  }(la)), yr;
}
var wr = {}, da = {
  get exports() {
    return wr;
  },
  set exports(e) {
    wr = e;
  }
}, P0;
function vt() {
  return P0 || (P0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, s = n.enc;
        s.Base64 = {
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
          stringify: function(f) {
            var a = f.words, u = f.sigBytes, h = this._map;
            f.clamp();
            for (var l = [], p = 0; p < u; p += 3)
              for (var b = a[p >>> 2] >>> 24 - p % 4 * 8 & 255, g = a[p + 1 >>> 2] >>> 24 - (p + 1) % 4 * 8 & 255, E = a[p + 2 >>> 2] >>> 24 - (p + 2) % 4 * 8 & 255, N = b << 16 | g << 8 | E, w = 0; w < 4 && p + w * 0.75 < u; w++)
                l.push(h.charAt(N >>> 6 * (3 - w) & 63));
            var d = h.charAt(64);
            if (d)
              for (; l.length % 4; )
                l.push(d);
            return l.join("");
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
          parse: function(f) {
            var a = f.length, u = this._map, h = this._reverseMap;
            if (!h) {
              h = this._reverseMap = [];
              for (var l = 0; l < u.length; l++)
                h[u.charCodeAt(l)] = l;
            }
            var p = u.charAt(64);
            if (p) {
              var b = f.indexOf(p);
              b !== -1 && (a = b);
            }
            return c(f, a, h);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function c(f, a, u) {
          for (var h = [], l = 0, p = 0; p < a; p++)
            if (p % 4) {
              var b = u[f.charCodeAt(p - 1)] << p % 4 * 2, g = u[f.charCodeAt(p)] >>> 6 - p % 4 * 2, E = b | g;
              h[l >>> 2] |= E << 24 - l % 4 * 8, l++;
            }
          return o.create(h, l);
        }
      }(), r.enc.Base64;
    });
  }(da)), wr;
}
var _r = {}, pa = {
  get exports() {
    return _r;
  },
  set exports(e) {
    _r = e;
  }
}, M0;
function va() {
  return M0 || (M0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, s = n.enc;
        s.Base64url = {
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
          stringify: function(f, a = !0) {
            var u = f.words, h = f.sigBytes, l = a ? this._safe_map : this._map;
            f.clamp();
            for (var p = [], b = 0; b < h; b += 3)
              for (var g = u[b >>> 2] >>> 24 - b % 4 * 8 & 255, E = u[b + 1 >>> 2] >>> 24 - (b + 1) % 4 * 8 & 255, N = u[b + 2 >>> 2] >>> 24 - (b + 2) % 4 * 8 & 255, w = g << 16 | E << 8 | N, d = 0; d < 4 && b + d * 0.75 < h; d++)
                p.push(l.charAt(w >>> 6 * (3 - d) & 63));
            var x = l.charAt(64);
            if (x)
              for (; p.length % 4; )
                p.push(x);
            return p.join("");
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
          parse: function(f, a = !0) {
            var u = f.length, h = a ? this._safe_map : this._map, l = this._reverseMap;
            if (!l) {
              l = this._reverseMap = [];
              for (var p = 0; p < h.length; p++)
                l[h.charCodeAt(p)] = p;
            }
            var b = h.charAt(64);
            if (b) {
              var g = f.indexOf(b);
              g !== -1 && (u = g);
            }
            return c(f, u, l);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function c(f, a, u) {
          for (var h = [], l = 0, p = 0; p < a; p++)
            if (p % 4) {
              var b = u[f.charCodeAt(p - 1)] << p % 4 * 2, g = u[f.charCodeAt(p)] >>> 6 - p % 4 * 2, E = b | g;
              h[l >>> 2] |= E << 24 - l % 4 * 8, l++;
            }
          return o.create(h, l);
        }
      }(), r.enc.Base64url;
    });
  }(pa)), _r;
}
var Er = {}, xa = {
  get exports() {
    return Er;
  },
  set exports(e) {
    Er = e;
  }
}, F0;
function xt() {
  return F0 || (F0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function(n) {
        var i = r, o = i.lib, s = o.WordArray, c = o.Hasher, f = i.algo, a = [];
        (function() {
          for (var g = 0; g < 64; g++)
            a[g] = n.abs(n.sin(g + 1)) * 4294967296 | 0;
        })();
        var u = f.MD5 = c.extend({
          _doReset: function() {
            this._hash = new s.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(g, E) {
            for (var N = 0; N < 16; N++) {
              var w = E + N, d = g[w];
              g[w] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360;
            }
            var x = this._hash.words, y = g[E + 0], _ = g[E + 1], C = g[E + 2], T = g[E + 3], D = g[E + 4], S = g[E + 5], A = g[E + 6], L = g[E + 7], I = g[E + 8], F = g[E + 9], P = g[E + 10], z = g[E + 11], Y = g[E + 12], Z = g[E + 13], X = g[E + 14], J = g[E + 15], M = x[0], $ = x[1], q = x[2], W = x[3];
            M = h(M, $, q, W, y, 7, a[0]), W = h(W, M, $, q, _, 12, a[1]), q = h(q, W, M, $, C, 17, a[2]), $ = h($, q, W, M, T, 22, a[3]), M = h(M, $, q, W, D, 7, a[4]), W = h(W, M, $, q, S, 12, a[5]), q = h(q, W, M, $, A, 17, a[6]), $ = h($, q, W, M, L, 22, a[7]), M = h(M, $, q, W, I, 7, a[8]), W = h(W, M, $, q, F, 12, a[9]), q = h(q, W, M, $, P, 17, a[10]), $ = h($, q, W, M, z, 22, a[11]), M = h(M, $, q, W, Y, 7, a[12]), W = h(W, M, $, q, Z, 12, a[13]), q = h(q, W, M, $, X, 17, a[14]), $ = h($, q, W, M, J, 22, a[15]), M = l(M, $, q, W, _, 5, a[16]), W = l(W, M, $, q, A, 9, a[17]), q = l(q, W, M, $, z, 14, a[18]), $ = l($, q, W, M, y, 20, a[19]), M = l(M, $, q, W, S, 5, a[20]), W = l(W, M, $, q, P, 9, a[21]), q = l(q, W, M, $, J, 14, a[22]), $ = l($, q, W, M, D, 20, a[23]), M = l(M, $, q, W, F, 5, a[24]), W = l(W, M, $, q, X, 9, a[25]), q = l(q, W, M, $, T, 14, a[26]), $ = l($, q, W, M, I, 20, a[27]), M = l(M, $, q, W, Z, 5, a[28]), W = l(W, M, $, q, C, 9, a[29]), q = l(q, W, M, $, L, 14, a[30]), $ = l($, q, W, M, Y, 20, a[31]), M = p(M, $, q, W, S, 4, a[32]), W = p(W, M, $, q, I, 11, a[33]), q = p(q, W, M, $, z, 16, a[34]), $ = p($, q, W, M, X, 23, a[35]), M = p(M, $, q, W, _, 4, a[36]), W = p(W, M, $, q, D, 11, a[37]), q = p(q, W, M, $, L, 16, a[38]), $ = p($, q, W, M, P, 23, a[39]), M = p(M, $, q, W, Z, 4, a[40]), W = p(W, M, $, q, y, 11, a[41]), q = p(q, W, M, $, T, 16, a[42]), $ = p($, q, W, M, A, 23, a[43]), M = p(M, $, q, W, F, 4, a[44]), W = p(W, M, $, q, Y, 11, a[45]), q = p(q, W, M, $, J, 16, a[46]), $ = p($, q, W, M, C, 23, a[47]), M = b(M, $, q, W, y, 6, a[48]), W = b(W, M, $, q, L, 10, a[49]), q = b(q, W, M, $, X, 15, a[50]), $ = b($, q, W, M, S, 21, a[51]), M = b(M, $, q, W, Y, 6, a[52]), W = b(W, M, $, q, T, 10, a[53]), q = b(q, W, M, $, P, 15, a[54]), $ = b($, q, W, M, _, 21, a[55]), M = b(M, $, q, W, I, 6, a[56]), W = b(W, M, $, q, J, 10, a[57]), q = b(q, W, M, $, A, 15, a[58]), $ = b($, q, W, M, Z, 21, a[59]), M = b(M, $, q, W, D, 6, a[60]), W = b(W, M, $, q, z, 10, a[61]), q = b(q, W, M, $, C, 15, a[62]), $ = b($, q, W, M, F, 21, a[63]), x[0] = x[0] + M | 0, x[1] = x[1] + $ | 0, x[2] = x[2] + q | 0, x[3] = x[3] + W | 0;
          },
          _doFinalize: function() {
            var g = this._data, E = g.words, N = this._nDataBytes * 8, w = g.sigBytes * 8;
            E[w >>> 5] |= 128 << 24 - w % 32;
            var d = n.floor(N / 4294967296), x = N;
            E[(w + 64 >>> 9 << 4) + 15] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, E[(w + 64 >>> 9 << 4) + 14] = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, g.sigBytes = (E.length + 1) * 4, this._process();
            for (var y = this._hash, _ = y.words, C = 0; C < 4; C++) {
              var T = _[C];
              _[C] = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360;
            }
            return y;
          },
          clone: function() {
            var g = c.clone.call(this);
            return g._hash = this._hash.clone(), g;
          }
        });
        function h(g, E, N, w, d, x, y) {
          var _ = g + (E & N | ~E & w) + d + y;
          return (_ << x | _ >>> 32 - x) + E;
        }
        function l(g, E, N, w, d, x, y) {
          var _ = g + (E & w | N & ~w) + d + y;
          return (_ << x | _ >>> 32 - x) + E;
        }
        function p(g, E, N, w, d, x, y) {
          var _ = g + (E ^ N ^ w) + d + y;
          return (_ << x | _ >>> 32 - x) + E;
        }
        function b(g, E, N, w, d, x, y) {
          var _ = g + (N ^ (E | ~w)) + d + y;
          return (_ << x | _ >>> 32 - x) + E;
        }
        i.MD5 = c._createHelper(u), i.HmacMD5 = c._createHmacHelper(u);
      }(Math), r.MD5;
    });
  }(xa)), Er;
}
var Sr = {}, ba = {
  get exports() {
    return Sr;
  },
  set exports(e) {
    Sr = e;
  }
}, $0;
function o0() {
  return $0 || ($0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, s = i.Hasher, c = n.algo, f = [], a = c.SHA1 = s.extend({
          _doReset: function() {
            this._hash = new o.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(u, h) {
            for (var l = this._hash.words, p = l[0], b = l[1], g = l[2], E = l[3], N = l[4], w = 0; w < 80; w++) {
              if (w < 16)
                f[w] = u[h + w] | 0;
              else {
                var d = f[w - 3] ^ f[w - 8] ^ f[w - 14] ^ f[w - 16];
                f[w] = d << 1 | d >>> 31;
              }
              var x = (p << 5 | p >>> 27) + N + f[w];
              w < 20 ? x += (b & g | ~b & E) + 1518500249 : w < 40 ? x += (b ^ g ^ E) + 1859775393 : w < 60 ? x += (b & g | b & E | g & E) - 1894007588 : x += (b ^ g ^ E) - 899497514, N = E, E = g, g = b << 30 | b >>> 2, b = p, p = x;
            }
            l[0] = l[0] + p | 0, l[1] = l[1] + b | 0, l[2] = l[2] + g | 0, l[3] = l[3] + E | 0, l[4] = l[4] + N | 0;
          },
          _doFinalize: function() {
            var u = this._data, h = u.words, l = this._nDataBytes * 8, p = u.sigBytes * 8;
            return h[p >>> 5] |= 128 << 24 - p % 32, h[(p + 64 >>> 9 << 4) + 14] = Math.floor(l / 4294967296), h[(p + 64 >>> 9 << 4) + 15] = l, u.sigBytes = h.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var u = s.clone.call(this);
            return u._hash = this._hash.clone(), u;
          }
        });
        n.SHA1 = s._createHelper(a), n.HmacSHA1 = s._createHmacHelper(a);
      }(), r.SHA1;
    });
  }(ba)), Sr;
}
var kr = {}, ga = {
  get exports() {
    return kr;
  },
  set exports(e) {
    kr = e;
  }
}, H0;
function Vi() {
  return H0 || (H0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function(n) {
        var i = r, o = i.lib, s = o.WordArray, c = o.Hasher, f = i.algo, a = [], u = [];
        (function() {
          function p(N) {
            for (var w = n.sqrt(N), d = 2; d <= w; d++)
              if (!(N % d))
                return !1;
            return !0;
          }
          function b(N) {
            return (N - (N | 0)) * 4294967296 | 0;
          }
          for (var g = 2, E = 0; E < 64; )
            p(g) && (E < 8 && (a[E] = b(n.pow(g, 1 / 2))), u[E] = b(n.pow(g, 1 / 3)), E++), g++;
        })();
        var h = [], l = f.SHA256 = c.extend({
          _doReset: function() {
            this._hash = new s.init(a.slice(0));
          },
          _doProcessBlock: function(p, b) {
            for (var g = this._hash.words, E = g[0], N = g[1], w = g[2], d = g[3], x = g[4], y = g[5], _ = g[6], C = g[7], T = 0; T < 64; T++) {
              if (T < 16)
                h[T] = p[b + T] | 0;
              else {
                var D = h[T - 15], S = (D << 25 | D >>> 7) ^ (D << 14 | D >>> 18) ^ D >>> 3, A = h[T - 2], L = (A << 15 | A >>> 17) ^ (A << 13 | A >>> 19) ^ A >>> 10;
                h[T] = S + h[T - 7] + L + h[T - 16];
              }
              var I = x & y ^ ~x & _, F = E & N ^ E & w ^ N & w, P = (E << 30 | E >>> 2) ^ (E << 19 | E >>> 13) ^ (E << 10 | E >>> 22), z = (x << 26 | x >>> 6) ^ (x << 21 | x >>> 11) ^ (x << 7 | x >>> 25), Y = C + z + I + u[T] + h[T], Z = P + F;
              C = _, _ = y, y = x, x = d + Y | 0, d = w, w = N, N = E, E = Y + Z | 0;
            }
            g[0] = g[0] + E | 0, g[1] = g[1] + N | 0, g[2] = g[2] + w | 0, g[3] = g[3] + d | 0, g[4] = g[4] + x | 0, g[5] = g[5] + y | 0, g[6] = g[6] + _ | 0, g[7] = g[7] + C | 0;
          },
          _doFinalize: function() {
            var p = this._data, b = p.words, g = this._nDataBytes * 8, E = p.sigBytes * 8;
            return b[E >>> 5] |= 128 << 24 - E % 32, b[(E + 64 >>> 9 << 4) + 14] = n.floor(g / 4294967296), b[(E + 64 >>> 9 << 4) + 15] = g, p.sigBytes = b.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var p = c.clone.call(this);
            return p._hash = this._hash.clone(), p;
          }
        });
        i.SHA256 = c._createHelper(l), i.HmacSHA256 = c._createHmacHelper(l);
      }(Math), r.SHA256;
    });
  }(ga)), kr;
}
var Cr = {}, ma = {
  get exports() {
    return Cr;
  },
  set exports(e) {
    Cr = e;
  }
}, z0;
function ya() {
  return z0 || (z0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Vi());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, s = n.algo, c = s.SHA256, f = s.SHA224 = c.extend({
          _doReset: function() {
            this._hash = new o.init([
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
            var a = c._doFinalize.call(this);
            return a.sigBytes -= 4, a;
          }
        });
        n.SHA224 = c._createHelper(f), n.HmacSHA224 = c._createHmacHelper(f);
      }(), r.SHA224;
    });
  }(ma)), Cr;
}
var Br = {}, wa = {
  get exports() {
    return Br;
  },
  set exports(e) {
    Br = e;
  }
}, q0;
function Ki() {
  return q0 || (q0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), sn());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.Hasher, s = n.x64, c = s.Word, f = s.WordArray, a = n.algo;
        function u() {
          return c.create.apply(c, arguments);
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
        ], l = [];
        (function() {
          for (var b = 0; b < 80; b++)
            l[b] = u();
        })();
        var p = a.SHA512 = o.extend({
          _doReset: function() {
            this._hash = new f.init([
              new c.init(1779033703, 4089235720),
              new c.init(3144134277, 2227873595),
              new c.init(1013904242, 4271175723),
              new c.init(2773480762, 1595750129),
              new c.init(1359893119, 2917565137),
              new c.init(2600822924, 725511199),
              new c.init(528734635, 4215389547),
              new c.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(b, g) {
            for (var E = this._hash.words, N = E[0], w = E[1], d = E[2], x = E[3], y = E[4], _ = E[5], C = E[6], T = E[7], D = N.high, S = N.low, A = w.high, L = w.low, I = d.high, F = d.low, P = x.high, z = x.low, Y = y.high, Z = y.low, X = _.high, J = _.low, M = C.high, $ = C.low, q = T.high, W = T.low, ae = D, ue = S, ve = A, ne = L, xe = I, _e = F, Ge = P, De = z, Ne = Y, Ce = Z, Oe = X, ct = J, ft = M, Ue = $, ut = q, Ze = W, Be = 0; Be < 80; Be++) {
              var Ae, $e, lt = l[Be];
              if (Be < 16)
                $e = lt.high = b[g + Be * 2] | 0, Ae = lt.low = b[g + Be * 2 + 1] | 0;
              else {
                var Bt = l[Be - 15], Xe = Bt.high, tt = Bt.low, Yt = (Xe >>> 1 | tt << 31) ^ (Xe >>> 8 | tt << 24) ^ Xe >>> 7, At = (tt >>> 1 | Xe << 31) ^ (tt >>> 8 | Xe << 24) ^ (tt >>> 7 | Xe << 25), Rt = l[Be - 2], Qe = Rt.high, rt = Rt.low, jt = (Qe >>> 19 | rt << 13) ^ (Qe << 3 | rt >>> 29) ^ Qe >>> 6, gt = (rt >>> 19 | Qe << 13) ^ (rt << 3 | Qe >>> 29) ^ (rt >>> 6 | Qe << 26), Vt = l[Be - 7], hn = Vt.high, Tt = Vt.low, Nt = l[Be - 16], dn = Nt.high, He = Nt.low;
                Ae = At + Tt, $e = Yt + hn + (Ae >>> 0 < At >>> 0 ? 1 : 0), Ae = Ae + gt, $e = $e + jt + (Ae >>> 0 < gt >>> 0 ? 1 : 0), Ae = Ae + He, $e = $e + dn + (Ae >>> 0 < He >>> 0 ? 1 : 0), lt.high = $e, lt.low = Ae;
              }
              var pn = Ne & Oe ^ ~Ne & ft, Kt = Ce & ct ^ ~Ce & Ue, Gt = ae & ve ^ ae & xe ^ ve & xe, vn = ue & ne ^ ue & _e ^ ne & _e, xn = (ae >>> 28 | ue << 4) ^ (ae << 30 | ue >>> 2) ^ (ae << 25 | ue >>> 7), Zt = (ue >>> 28 | ae << 4) ^ (ue << 30 | ae >>> 2) ^ (ue << 25 | ae >>> 7), bn = (Ne >>> 14 | Ce << 18) ^ (Ne >>> 18 | Ce << 14) ^ (Ne << 23 | Ce >>> 9), gn = (Ce >>> 14 | Ne << 18) ^ (Ce >>> 18 | Ne << 14) ^ (Ce << 23 | Ne >>> 9), Xt = h[Be], mn = Xt.high, Qt = Xt.low, Re = Ze + gn, Ye = ut + bn + (Re >>> 0 < Ze >>> 0 ? 1 : 0), Re = Re + Kt, Ye = Ye + pn + (Re >>> 0 < Kt >>> 0 ? 1 : 0), Re = Re + Qt, Ye = Ye + mn + (Re >>> 0 < Qt >>> 0 ? 1 : 0), Re = Re + Ae, Ye = Ye + $e + (Re >>> 0 < Ae >>> 0 ? 1 : 0), Ot = Zt + vn, yn = xn + Gt + (Ot >>> 0 < Zt >>> 0 ? 1 : 0);
              ut = ft, Ze = Ue, ft = Oe, Ue = ct, Oe = Ne, ct = Ce, Ce = De + Re | 0, Ne = Ge + Ye + (Ce >>> 0 < De >>> 0 ? 1 : 0) | 0, Ge = xe, De = _e, xe = ve, _e = ne, ve = ae, ne = ue, ue = Re + Ot | 0, ae = Ye + yn + (ue >>> 0 < Re >>> 0 ? 1 : 0) | 0;
            }
            S = N.low = S + ue, N.high = D + ae + (S >>> 0 < ue >>> 0 ? 1 : 0), L = w.low = L + ne, w.high = A + ve + (L >>> 0 < ne >>> 0 ? 1 : 0), F = d.low = F + _e, d.high = I + xe + (F >>> 0 < _e >>> 0 ? 1 : 0), z = x.low = z + De, x.high = P + Ge + (z >>> 0 < De >>> 0 ? 1 : 0), Z = y.low = Z + Ce, y.high = Y + Ne + (Z >>> 0 < Ce >>> 0 ? 1 : 0), J = _.low = J + ct, _.high = X + Oe + (J >>> 0 < ct >>> 0 ? 1 : 0), $ = C.low = $ + Ue, C.high = M + ft + ($ >>> 0 < Ue >>> 0 ? 1 : 0), W = T.low = W + Ze, T.high = q + ut + (W >>> 0 < Ze >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var b = this._data, g = b.words, E = this._nDataBytes * 8, N = b.sigBytes * 8;
            g[N >>> 5] |= 128 << 24 - N % 32, g[(N + 128 >>> 10 << 5) + 30] = Math.floor(E / 4294967296), g[(N + 128 >>> 10 << 5) + 31] = E, b.sigBytes = g.length * 4, this._process();
            var w = this._hash.toX32();
            return w;
          },
          clone: function() {
            var b = o.clone.call(this);
            return b._hash = this._hash.clone(), b;
          },
          blockSize: 1024 / 32
        });
        n.SHA512 = o._createHelper(p), n.HmacSHA512 = o._createHmacHelper(p);
      }(), r.SHA512;
    });
  }(wa)), Br;
}
var Ar = {}, _a = {
  get exports() {
    return Ar;
  },
  set exports(e) {
    Ar = e;
  }
}, W0;
function Ea() {
  return W0 || (W0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), sn(), Ki());
    })(re, function(r) {
      return function() {
        var n = r, i = n.x64, o = i.Word, s = i.WordArray, c = n.algo, f = c.SHA512, a = c.SHA384 = f.extend({
          _doReset: function() {
            this._hash = new s.init([
              new o.init(3418070365, 3238371032),
              new o.init(1654270250, 914150663),
              new o.init(2438529370, 812702999),
              new o.init(355462360, 4144912697),
              new o.init(1731405415, 4290775857),
              new o.init(2394180231, 1750603025),
              new o.init(3675008525, 1694076839),
              new o.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var u = f._doFinalize.call(this);
            return u.sigBytes -= 16, u;
          }
        });
        n.SHA384 = f._createHelper(a), n.HmacSHA384 = f._createHmacHelper(a);
      }(), r.SHA384;
    });
  }(_a)), Ar;
}
var Rr = {}, Sa = {
  get exports() {
    return Rr;
  },
  set exports(e) {
    Rr = e;
  }
}, U0;
function ka() {
  return U0 || (U0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), sn());
    })(re, function(r) {
      return function(n) {
        var i = r, o = i.lib, s = o.WordArray, c = o.Hasher, f = i.x64, a = f.Word, u = i.algo, h = [], l = [], p = [];
        (function() {
          for (var E = 1, N = 0, w = 0; w < 24; w++) {
            h[E + 5 * N] = (w + 1) * (w + 2) / 2 % 64;
            var d = N % 5, x = (2 * E + 3 * N) % 5;
            E = d, N = x;
          }
          for (var E = 0; E < 5; E++)
            for (var N = 0; N < 5; N++)
              l[E + 5 * N] = N + (2 * E + 3 * N) % 5 * 5;
          for (var y = 1, _ = 0; _ < 24; _++) {
            for (var C = 0, T = 0, D = 0; D < 7; D++) {
              if (y & 1) {
                var S = (1 << D) - 1;
                S < 32 ? T ^= 1 << S : C ^= 1 << S - 32;
              }
              y & 128 ? y = y << 1 ^ 113 : y <<= 1;
            }
            p[_] = a.create(C, T);
          }
        })();
        var b = [];
        (function() {
          for (var E = 0; E < 25; E++)
            b[E] = a.create();
        })();
        var g = u.SHA3 = c.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: c.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var E = this._state = [], N = 0; N < 25; N++)
              E[N] = new a.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(E, N) {
            for (var w = this._state, d = this.blockSize / 2, x = 0; x < d; x++) {
              var y = E[N + 2 * x], _ = E[N + 2 * x + 1];
              y = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, _ = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360;
              var C = w[x];
              C.high ^= _, C.low ^= y;
            }
            for (var T = 0; T < 24; T++) {
              for (var D = 0; D < 5; D++) {
                for (var S = 0, A = 0, L = 0; L < 5; L++) {
                  var C = w[D + 5 * L];
                  S ^= C.high, A ^= C.low;
                }
                var I = b[D];
                I.high = S, I.low = A;
              }
              for (var D = 0; D < 5; D++)
                for (var F = b[(D + 4) % 5], P = b[(D + 1) % 5], z = P.high, Y = P.low, S = F.high ^ (z << 1 | Y >>> 31), A = F.low ^ (Y << 1 | z >>> 31), L = 0; L < 5; L++) {
                  var C = w[D + 5 * L];
                  C.high ^= S, C.low ^= A;
                }
              for (var Z = 1; Z < 25; Z++) {
                var S, A, C = w[Z], X = C.high, J = C.low, M = h[Z];
                M < 32 ? (S = X << M | J >>> 32 - M, A = J << M | X >>> 32 - M) : (S = J << M - 32 | X >>> 64 - M, A = X << M - 32 | J >>> 64 - M);
                var $ = b[l[Z]];
                $.high = S, $.low = A;
              }
              var q = b[0], W = w[0];
              q.high = W.high, q.low = W.low;
              for (var D = 0; D < 5; D++)
                for (var L = 0; L < 5; L++) {
                  var Z = D + 5 * L, C = w[Z], ae = b[Z], ue = b[(D + 1) % 5 + 5 * L], ve = b[(D + 2) % 5 + 5 * L];
                  C.high = ae.high ^ ~ue.high & ve.high, C.low = ae.low ^ ~ue.low & ve.low;
                }
              var C = w[0], ne = p[T];
              C.high ^= ne.high, C.low ^= ne.low;
            }
          },
          _doFinalize: function() {
            var E = this._data, N = E.words;
            this._nDataBytes * 8;
            var w = E.sigBytes * 8, d = this.blockSize * 32;
            N[w >>> 5] |= 1 << 24 - w % 32, N[(n.ceil((w + 1) / d) * d >>> 5) - 1] |= 128, E.sigBytes = N.length * 4, this._process();
            for (var x = this._state, y = this.cfg.outputLength / 8, _ = y / 8, C = [], T = 0; T < _; T++) {
              var D = x[T], S = D.high, A = D.low;
              S = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360, A = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360, C.push(A), C.push(S);
            }
            return new s.init(C, y);
          },
          clone: function() {
            for (var E = c.clone.call(this), N = E._state = this._state.slice(0), w = 0; w < 25; w++)
              N[w] = N[w].clone();
            return E;
          }
        });
        i.SHA3 = c._createHelper(g), i.HmacSHA3 = c._createHmacHelper(g);
      }(Math), r.SHA3;
    });
  }(Sa)), Rr;
}
var Tr = {}, Ca = {
  get exports() {
    return Tr;
  },
  set exports(e) {
    Tr = e;
  }
}, Y0;
function Ba() {
  return Y0 || (Y0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(n) {
        var i = r, o = i.lib, s = o.WordArray, c = o.Hasher, f = i.algo, a = s.create([
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
        ]), u = s.create([
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
        ]), h = s.create([
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
        ]), l = s.create([
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
        ]), p = s.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), b = s.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), g = f.RIPEMD160 = c.extend({
          _doReset: function() {
            this._hash = s.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(_, C) {
            for (var T = 0; T < 16; T++) {
              var D = C + T, S = _[D];
              _[D] = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360;
            }
            var A = this._hash.words, L = p.words, I = b.words, F = a.words, P = u.words, z = h.words, Y = l.words, Z, X, J, M, $, q, W, ae, ue, ve;
            q = Z = A[0], W = X = A[1], ae = J = A[2], ue = M = A[3], ve = $ = A[4];
            for (var ne, T = 0; T < 80; T += 1)
              ne = Z + _[C + F[T]] | 0, T < 16 ? ne += E(X, J, M) + L[0] : T < 32 ? ne += N(X, J, M) + L[1] : T < 48 ? ne += w(X, J, M) + L[2] : T < 64 ? ne += d(X, J, M) + L[3] : ne += x(X, J, M) + L[4], ne = ne | 0, ne = y(ne, z[T]), ne = ne + $ | 0, Z = $, $ = M, M = y(J, 10), J = X, X = ne, ne = q + _[C + P[T]] | 0, T < 16 ? ne += x(W, ae, ue) + I[0] : T < 32 ? ne += d(W, ae, ue) + I[1] : T < 48 ? ne += w(W, ae, ue) + I[2] : T < 64 ? ne += N(W, ae, ue) + I[3] : ne += E(W, ae, ue) + I[4], ne = ne | 0, ne = y(ne, Y[T]), ne = ne + ve | 0, q = ve, ve = ue, ue = y(ae, 10), ae = W, W = ne;
            ne = A[1] + J + ue | 0, A[1] = A[2] + M + ve | 0, A[2] = A[3] + $ + q | 0, A[3] = A[4] + Z + W | 0, A[4] = A[0] + X + ae | 0, A[0] = ne;
          },
          _doFinalize: function() {
            var _ = this._data, C = _.words, T = this._nDataBytes * 8, D = _.sigBytes * 8;
            C[D >>> 5] |= 128 << 24 - D % 32, C[(D + 64 >>> 9 << 4) + 14] = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360, _.sigBytes = (C.length + 1) * 4, this._process();
            for (var S = this._hash, A = S.words, L = 0; L < 5; L++) {
              var I = A[L];
              A[L] = (I << 8 | I >>> 24) & 16711935 | (I << 24 | I >>> 8) & 4278255360;
            }
            return S;
          },
          clone: function() {
            var _ = c.clone.call(this);
            return _._hash = this._hash.clone(), _;
          }
        });
        function E(_, C, T) {
          return _ ^ C ^ T;
        }
        function N(_, C, T) {
          return _ & C | ~_ & T;
        }
        function w(_, C, T) {
          return (_ | ~C) ^ T;
        }
        function d(_, C, T) {
          return _ & T | C & ~T;
        }
        function x(_, C, T) {
          return _ ^ (C | ~T);
        }
        function y(_, C) {
          return _ << C | _ >>> 32 - C;
        }
        i.RIPEMD160 = c._createHelper(g), i.HmacRIPEMD160 = c._createHmacHelper(g);
      }(), r.RIPEMD160;
    });
  }(Ca)), Tr;
}
var Nr = {}, Aa = {
  get exports() {
    return Nr;
  },
  set exports(e) {
    Nr = e;
  }
}, j0;
function s0() {
  return j0 || (j0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      (function() {
        var n = r, i = n.lib, o = i.Base, s = n.enc, c = s.Utf8, f = n.algo;
        f.HMAC = o.extend({
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
          init: function(a, u) {
            a = this._hasher = new a.init(), typeof u == "string" && (u = c.parse(u));
            var h = a.blockSize, l = h * 4;
            u.sigBytes > l && (u = a.finalize(u)), u.clamp();
            for (var p = this._oKey = u.clone(), b = this._iKey = u.clone(), g = p.words, E = b.words, N = 0; N < h; N++)
              g[N] ^= 1549556828, E[N] ^= 909522486;
            p.sigBytes = b.sigBytes = l, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var a = this._hasher;
            a.reset(), a.update(this._iKey);
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
          update: function(a) {
            return this._hasher.update(a), this;
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
          finalize: function(a) {
            var u = this._hasher, h = u.finalize(a);
            u.reset();
            var l = u.finalize(this._oKey.clone().concat(h));
            return l;
          }
        });
      })();
    });
  }(Aa)), Nr;
}
var Or = {}, Ra = {
  get exports() {
    return Or;
  },
  set exports(e) {
    Or = e;
  }
}, V0;
function Ta() {
  return V0 || (V0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), o0(), s0());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.Base, s = i.WordArray, c = n.algo, f = c.SHA1, a = c.HMAC, u = c.PBKDF2 = o.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA1
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: o.extend({
            keySize: 128 / 32,
            hasher: f,
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
          compute: function(h, l) {
            for (var p = this.cfg, b = a.create(p.hasher, h), g = s.create(), E = s.create([1]), N = g.words, w = E.words, d = p.keySize, x = p.iterations; N.length < d; ) {
              var y = b.update(l).finalize(E);
              b.reset();
              for (var _ = y.words, C = _.length, T = y, D = 1; D < x; D++) {
                T = b.finalize(T), b.reset();
                for (var S = T.words, A = 0; A < C; A++)
                  _[A] ^= S[A];
              }
              g.concat(y), w[0]++;
            }
            return g.sigBytes = d * 4, g;
          }
        });
        n.PBKDF2 = function(h, l, p) {
          return u.create(p).compute(h, l);
        };
      }(), r.PBKDF2;
    });
  }(Ra)), Or;
}
var Ir = {}, Na = {
  get exports() {
    return Ir;
  },
  set exports(e) {
    Ir = e;
  }
}, K0;
function bt() {
  return K0 || (K0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), o0(), s0());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.Base, s = i.WordArray, c = n.algo, f = c.MD5, a = c.EvpKDF = o.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: o.extend({
            keySize: 128 / 32,
            hasher: f,
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
            for (var l, p = this.cfg, b = p.hasher.create(), g = s.create(), E = g.words, N = p.keySize, w = p.iterations; E.length < N; ) {
              l && b.update(l), l = b.update(u).finalize(h), b.reset();
              for (var d = 1; d < w; d++)
                l = b.finalize(l), b.reset();
              g.concat(l);
            }
            return g.sigBytes = N * 4, g;
          }
        });
        n.EvpKDF = function(u, h, l) {
          return a.create(l).compute(u, h);
        };
      }(), r.EvpKDF;
    });
  }(Na)), Ir;
}
var Dr = {}, Oa = {
  get exports() {
    return Dr;
  },
  set exports(e) {
    Dr = e;
  }
}, G0;
function we() {
  return G0 || (G0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), bt());
    })(re, function(r) {
      r.lib.Cipher || function(n) {
        var i = r, o = i.lib, s = o.Base, c = o.WordArray, f = o.BufferedBlockAlgorithm, a = i.enc;
        a.Utf8;
        var u = a.Base64, h = i.algo, l = h.EvpKDF, p = o.Cipher = f.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: s.extend(),
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
          createEncryptor: function(S, A) {
            return this.create(this._ENC_XFORM_MODE, S, A);
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
          createDecryptor: function(S, A) {
            return this.create(this._DEC_XFORM_MODE, S, A);
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
          init: function(S, A, L) {
            this.cfg = this.cfg.extend(L), this._xformMode = S, this._key = A, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            f.reset.call(this), this._doReset();
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
          process: function(S) {
            return this._append(S), this._process();
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
          finalize: function(S) {
            S && this._append(S);
            var A = this._doFinalize();
            return A;
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
            function S(A) {
              return typeof A == "string" ? D : _;
            }
            return function(A) {
              return {
                encrypt: function(L, I, F) {
                  return S(I).encrypt(A, L, I, F);
                },
                decrypt: function(L, I, F) {
                  return S(I).decrypt(A, L, I, F);
                }
              };
            };
          }()
        });
        o.StreamCipher = p.extend({
          _doFinalize: function() {
            var S = this._process(!0);
            return S;
          },
          blockSize: 1
        });
        var b = i.mode = {}, g = o.BlockCipherMode = s.extend({
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
          createEncryptor: function(S, A) {
            return this.Encryptor.create(S, A);
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
          createDecryptor: function(S, A) {
            return this.Decryptor.create(S, A);
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
          init: function(S, A) {
            this._cipher = S, this._iv = A;
          }
        }), E = b.CBC = function() {
          var S = g.extend();
          S.Encryptor = S.extend({
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
            processBlock: function(L, I) {
              var F = this._cipher, P = F.blockSize;
              A.call(this, L, I, P), F.encryptBlock(L, I), this._prevBlock = L.slice(I, I + P);
            }
          }), S.Decryptor = S.extend({
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
            processBlock: function(L, I) {
              var F = this._cipher, P = F.blockSize, z = L.slice(I, I + P);
              F.decryptBlock(L, I), A.call(this, L, I, P), this._prevBlock = z;
            }
          });
          function A(L, I, F) {
            var P, z = this._iv;
            z ? (P = z, this._iv = n) : P = this._prevBlock;
            for (var Y = 0; Y < F; Y++)
              L[I + Y] ^= P[Y];
          }
          return S;
        }(), N = i.pad = {}, w = N.Pkcs7 = {
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
          pad: function(S, A) {
            for (var L = A * 4, I = L - S.sigBytes % L, F = I << 24 | I << 16 | I << 8 | I, P = [], z = 0; z < I; z += 4)
              P.push(F);
            var Y = c.create(P, I);
            S.concat(Y);
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
          unpad: function(S) {
            var A = S.words[S.sigBytes - 1 >>> 2] & 255;
            S.sigBytes -= A;
          }
        };
        o.BlockCipher = p.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: p.cfg.extend({
            mode: E,
            padding: w
          }),
          reset: function() {
            var S;
            p.reset.call(this);
            var A = this.cfg, L = A.iv, I = A.mode;
            this._xformMode == this._ENC_XFORM_MODE ? S = I.createEncryptor : (S = I.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == S ? this._mode.init(this, L && L.words) : (this._mode = S.call(I, this, L && L.words), this._mode.__creator = S);
          },
          _doProcessBlock: function(S, A) {
            this._mode.processBlock(S, A);
          },
          _doFinalize: function() {
            var S, A = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (A.pad(this._data, this.blockSize), S = this._process(!0)) : (S = this._process(!0), A.unpad(S)), S;
          },
          blockSize: 128 / 32
        });
        var d = o.CipherParams = s.extend({
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
          init: function(S) {
            this.mixIn(S);
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
          toString: function(S) {
            return (S || this.formatter).stringify(this);
          }
        }), x = i.format = {}, y = x.OpenSSL = {
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
          stringify: function(S) {
            var A, L = S.ciphertext, I = S.salt;
            return I ? A = c.create([1398893684, 1701076831]).concat(I).concat(L) : A = L, A.toString(u);
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
          parse: function(S) {
            var A, L = u.parse(S), I = L.words;
            return I[0] == 1398893684 && I[1] == 1701076831 && (A = c.create(I.slice(2, 4)), I.splice(0, 4), L.sigBytes -= 16), d.create({ ciphertext: L, salt: A });
          }
        }, _ = o.SerializableCipher = s.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: s.extend({
            format: y
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
          encrypt: function(S, A, L, I) {
            I = this.cfg.extend(I);
            var F = S.createEncryptor(L, I), P = F.finalize(A), z = F.cfg;
            return d.create({
              ciphertext: P,
              key: L,
              iv: z.iv,
              algorithm: S,
              mode: z.mode,
              padding: z.padding,
              blockSize: S.blockSize,
              formatter: I.format
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
          decrypt: function(S, A, L, I) {
            I = this.cfg.extend(I), A = this._parse(A, I.format);
            var F = S.createDecryptor(L, I).finalize(A.ciphertext);
            return F;
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
          _parse: function(S, A) {
            return typeof S == "string" ? A.parse(S, this) : S;
          }
        }), C = i.kdf = {}, T = C.OpenSSL = {
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
          execute: function(S, A, L, I) {
            I || (I = c.random(64 / 8));
            var F = l.create({ keySize: A + L }).compute(S, I), P = c.create(F.words.slice(A), L * 4);
            return F.sigBytes = A * 4, d.create({ key: F, iv: P, salt: I });
          }
        }, D = o.PasswordBasedCipher = _.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: _.cfg.extend({
            kdf: T
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
          encrypt: function(S, A, L, I) {
            I = this.cfg.extend(I);
            var F = I.kdf.execute(L, S.keySize, S.ivSize);
            I.iv = F.iv;
            var P = _.encrypt.call(this, S, A, F.key, I);
            return P.mixIn(F), P;
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
          decrypt: function(S, A, L, I) {
            I = this.cfg.extend(I), A = this._parse(A, I.format);
            var F = I.kdf.execute(L, S.keySize, S.ivSize, A.salt);
            I.iv = F.iv;
            var P = _.decrypt.call(this, S, A, F.key, I);
            return P;
          }
        });
      }();
    });
  }(Oa)), Dr;
}
var Lr = {}, Ia = {
  get exports() {
    return Lr;
  },
  set exports(e) {
    Lr = e;
  }
}, Z0;
function Da() {
  return Z0 || (Z0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), we());
    })(re, function(r) {
      return r.mode.CFB = function() {
        var n = r.lib.BlockCipherMode.extend();
        n.Encryptor = n.extend({
          processBlock: function(o, s) {
            var c = this._cipher, f = c.blockSize;
            i.call(this, o, s, f, c), this._prevBlock = o.slice(s, s + f);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(o, s) {
            var c = this._cipher, f = c.blockSize, a = o.slice(s, s + f);
            i.call(this, o, s, f, c), this._prevBlock = a;
          }
        });
        function i(o, s, c, f) {
          var a, u = this._iv;
          u ? (a = u.slice(0), this._iv = void 0) : a = this._prevBlock, f.encryptBlock(a, 0);
          for (var h = 0; h < c; h++)
            o[s + h] ^= a[h];
        }
        return n;
      }(), r.mode.CFB;
    });
  }(Ia)), Lr;
}
var Pr = {}, La = {
  get exports() {
    return Pr;
  },
  set exports(e) {
    Pr = e;
  }
}, X0;
function Pa() {
  return X0 || (X0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), we());
    })(re, function(r) {
      return r.mode.CTR = function() {
        var n = r.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(o, s) {
            var c = this._cipher, f = c.blockSize, a = this._iv, u = this._counter;
            a && (u = this._counter = a.slice(0), this._iv = void 0);
            var h = u.slice(0);
            c.encryptBlock(h, 0), u[f - 1] = u[f - 1] + 1 | 0;
            for (var l = 0; l < f; l++)
              o[s + l] ^= h[l];
          }
        });
        return n.Decryptor = i, n;
      }(), r.mode.CTR;
    });
  }(La)), Pr;
}
var Mr = {}, Ma = {
  get exports() {
    return Mr;
  },
  set exports(e) {
    Mr = e;
  }
}, Q0;
function Fa() {
  return Q0 || (Q0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), we());
    })(re, function(r) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return r.mode.CTRGladman = function() {
        var n = r.lib.BlockCipherMode.extend();
        function i(c) {
          if ((c >> 24 & 255) === 255) {
            var f = c >> 16 & 255, a = c >> 8 & 255, u = c & 255;
            f === 255 ? (f = 0, a === 255 ? (a = 0, u === 255 ? u = 0 : ++u) : ++a) : ++f, c = 0, c += f << 16, c += a << 8, c += u;
          } else
            c += 1 << 24;
          return c;
        }
        function o(c) {
          return (c[0] = i(c[0])) === 0 && (c[1] = i(c[1])), c;
        }
        var s = n.Encryptor = n.extend({
          processBlock: function(c, f) {
            var a = this._cipher, u = a.blockSize, h = this._iv, l = this._counter;
            h && (l = this._counter = h.slice(0), this._iv = void 0), o(l);
            var p = l.slice(0);
            a.encryptBlock(p, 0);
            for (var b = 0; b < u; b++)
              c[f + b] ^= p[b];
          }
        });
        return n.Decryptor = s, n;
      }(), r.mode.CTRGladman;
    });
  }(Ma)), Mr;
}
var Fr = {}, $a = {
  get exports() {
    return Fr;
  },
  set exports(e) {
    Fr = e;
  }
}, J0;
function Ha() {
  return J0 || (J0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), we());
    })(re, function(r) {
      return r.mode.OFB = function() {
        var n = r.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(o, s) {
            var c = this._cipher, f = c.blockSize, a = this._iv, u = this._keystream;
            a && (u = this._keystream = a.slice(0), this._iv = void 0), c.encryptBlock(u, 0);
            for (var h = 0; h < f; h++)
              o[s + h] ^= u[h];
          }
        });
        return n.Decryptor = i, n;
      }(), r.mode.OFB;
    });
  }($a)), Fr;
}
var $r = {}, za = {
  get exports() {
    return $r;
  },
  set exports(e) {
    $r = e;
  }
}, ei;
function Gi() {
  return ei || (ei = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), we());
    })(re, function(r) {
      return r.mode.ECB = function() {
        var n = r.lib.BlockCipherMode.extend();
        return n.Encryptor = n.extend({
          processBlock: function(i, o) {
            this._cipher.encryptBlock(i, o);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(i, o) {
            this._cipher.decryptBlock(i, o);
          }
        }), n;
      }(), r.mode.ECB;
    });
  }(za)), $r;
}
var Hr = {}, qa = {
  get exports() {
    return Hr;
  },
  set exports(e) {
    Hr = e;
  }
}, ti;
function Wa() {
  return ti || (ti = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), we());
    })(re, function(r) {
      return r.pad.AnsiX923 = {
        pad: function(n, i) {
          var o = n.sigBytes, s = i * 4, c = s - o % s, f = o + c - 1;
          n.clamp(), n.words[f >>> 2] |= c << 24 - f % 4 * 8, n.sigBytes += c;
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, r.pad.Ansix923;
    });
  }(qa)), Hr;
}
var zr = {}, Ua = {
  get exports() {
    return zr;
  },
  set exports(e) {
    zr = e;
  }
}, ri;
function Ya() {
  return ri || (ri = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), we());
    })(re, function(r) {
      return r.pad.Iso10126 = {
        pad: function(n, i) {
          var o = i * 4, s = o - n.sigBytes % o;
          n.concat(r.lib.WordArray.random(s - 1)).concat(r.lib.WordArray.create([s << 24], 1));
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, r.pad.Iso10126;
    });
  }(Ua)), zr;
}
var qr = {}, ja = {
  get exports() {
    return qr;
  },
  set exports(e) {
    qr = e;
  }
}, ni;
function Va() {
  return ni || (ni = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), we());
    })(re, function(r) {
      return r.pad.Iso97971 = {
        pad: function(n, i) {
          n.concat(r.lib.WordArray.create([2147483648], 1)), r.pad.ZeroPadding.pad(n, i);
        },
        unpad: function(n) {
          r.pad.ZeroPadding.unpad(n), n.sigBytes--;
        }
      }, r.pad.Iso97971;
    });
  }(ja)), qr;
}
var Wr = {}, Ka = {
  get exports() {
    return Wr;
  },
  set exports(e) {
    Wr = e;
  }
}, ii;
function Ga() {
  return ii || (ii = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), we());
    })(re, function(r) {
      return r.pad.ZeroPadding = {
        pad: function(n, i) {
          var o = i * 4;
          n.clamp(), n.sigBytes += o - (n.sigBytes % o || o);
        },
        unpad: function(n) {
          for (var i = n.words, o = n.sigBytes - 1, o = n.sigBytes - 1; o >= 0; o--)
            if (i[o >>> 2] >>> 24 - o % 4 * 8 & 255) {
              n.sigBytes = o + 1;
              break;
            }
        }
      }, r.pad.ZeroPadding;
    });
  }(Ka)), Wr;
}
var Ur = {}, Za = {
  get exports() {
    return Ur;
  },
  set exports(e) {
    Ur = e;
  }
}, oi;
function Xa() {
  return oi || (oi = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), we());
    })(re, function(r) {
      return r.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, r.pad.NoPadding;
    });
  }(Za)), Ur;
}
var Yr = {}, Qa = {
  get exports() {
    return Yr;
  },
  set exports(e) {
    Yr = e;
  }
}, si;
function Ja() {
  return si || (si = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), we());
    })(re, function(r) {
      return function(n) {
        var i = r, o = i.lib, s = o.CipherParams, c = i.enc, f = c.Hex, a = i.format;
        a.Hex = {
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
            return u.ciphertext.toString(f);
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
            var h = f.parse(u);
            return s.create({ ciphertext: h });
          }
        };
      }(), r.format.Hex;
    });
  }(Qa)), Yr;
}
var jr = {}, ec = {
  get exports() {
    return jr;
  },
  set exports(e) {
    jr = e;
  }
}, ai;
function Zi() {
  return ai || (ai = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), vt(), xt(), bt(), we());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.BlockCipher, s = n.algo, c = [], f = [], a = [], u = [], h = [], l = [], p = [], b = [], g = [], E = [];
        (function() {
          for (var d = [], x = 0; x < 256; x++)
            x < 128 ? d[x] = x << 1 : d[x] = x << 1 ^ 283;
          for (var y = 0, _ = 0, x = 0; x < 256; x++) {
            var C = _ ^ _ << 1 ^ _ << 2 ^ _ << 3 ^ _ << 4;
            C = C >>> 8 ^ C & 255 ^ 99, c[y] = C, f[C] = y;
            var T = d[y], D = d[T], S = d[D], A = d[C] * 257 ^ C * 16843008;
            a[y] = A << 24 | A >>> 8, u[y] = A << 16 | A >>> 16, h[y] = A << 8 | A >>> 24, l[y] = A;
            var A = S * 16843009 ^ D * 65537 ^ T * 257 ^ y * 16843008;
            p[C] = A << 24 | A >>> 8, b[C] = A << 16 | A >>> 16, g[C] = A << 8 | A >>> 24, E[C] = A, y ? (y = T ^ d[d[d[S ^ T]]], _ ^= d[d[_]]) : y = _ = 1;
          }
        })();
        var N = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], w = s.AES = o.extend({
          _doReset: function() {
            var d;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var x = this._keyPriorReset = this._key, y = x.words, _ = x.sigBytes / 4, C = this._nRounds = _ + 6, T = (C + 1) * 4, D = this._keySchedule = [], S = 0; S < T; S++)
                S < _ ? D[S] = y[S] : (d = D[S - 1], S % _ ? _ > 6 && S % _ == 4 && (d = c[d >>> 24] << 24 | c[d >>> 16 & 255] << 16 | c[d >>> 8 & 255] << 8 | c[d & 255]) : (d = d << 8 | d >>> 24, d = c[d >>> 24] << 24 | c[d >>> 16 & 255] << 16 | c[d >>> 8 & 255] << 8 | c[d & 255], d ^= N[S / _ | 0] << 24), D[S] = D[S - _] ^ d);
              for (var A = this._invKeySchedule = [], L = 0; L < T; L++) {
                var S = T - L;
                if (L % 4)
                  var d = D[S];
                else
                  var d = D[S - 4];
                L < 4 || S <= 4 ? A[L] = d : A[L] = p[c[d >>> 24]] ^ b[c[d >>> 16 & 255]] ^ g[c[d >>> 8 & 255]] ^ E[c[d & 255]];
              }
            }
          },
          encryptBlock: function(d, x) {
            this._doCryptBlock(d, x, this._keySchedule, a, u, h, l, c);
          },
          decryptBlock: function(d, x) {
            var y = d[x + 1];
            d[x + 1] = d[x + 3], d[x + 3] = y, this._doCryptBlock(d, x, this._invKeySchedule, p, b, g, E, f);
            var y = d[x + 1];
            d[x + 1] = d[x + 3], d[x + 3] = y;
          },
          _doCryptBlock: function(d, x, y, _, C, T, D, S) {
            for (var A = this._nRounds, L = d[x] ^ y[0], I = d[x + 1] ^ y[1], F = d[x + 2] ^ y[2], P = d[x + 3] ^ y[3], z = 4, Y = 1; Y < A; Y++) {
              var Z = _[L >>> 24] ^ C[I >>> 16 & 255] ^ T[F >>> 8 & 255] ^ D[P & 255] ^ y[z++], X = _[I >>> 24] ^ C[F >>> 16 & 255] ^ T[P >>> 8 & 255] ^ D[L & 255] ^ y[z++], J = _[F >>> 24] ^ C[P >>> 16 & 255] ^ T[L >>> 8 & 255] ^ D[I & 255] ^ y[z++], M = _[P >>> 24] ^ C[L >>> 16 & 255] ^ T[I >>> 8 & 255] ^ D[F & 255] ^ y[z++];
              L = Z, I = X, F = J, P = M;
            }
            var Z = (S[L >>> 24] << 24 | S[I >>> 16 & 255] << 16 | S[F >>> 8 & 255] << 8 | S[P & 255]) ^ y[z++], X = (S[I >>> 24] << 24 | S[F >>> 16 & 255] << 16 | S[P >>> 8 & 255] << 8 | S[L & 255]) ^ y[z++], J = (S[F >>> 24] << 24 | S[P >>> 16 & 255] << 16 | S[L >>> 8 & 255] << 8 | S[I & 255]) ^ y[z++], M = (S[P >>> 24] << 24 | S[L >>> 16 & 255] << 16 | S[I >>> 8 & 255] << 8 | S[F & 255]) ^ y[z++];
            d[x] = Z, d[x + 1] = X, d[x + 2] = J, d[x + 3] = M;
          },
          keySize: 256 / 32
        });
        n.AES = o._createHelper(w);
      }(), r.AES;
    });
  }(ec)), jr;
}
var Vr = {}, tc = {
  get exports() {
    return Vr;
  },
  set exports(e) {
    Vr = e;
  }
}, ci;
function rc() {
  return ci || (ci = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), vt(), xt(), bt(), we());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, s = i.BlockCipher, c = n.algo, f = [
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
        ], a = [
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
        ], l = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], p = c.DES = s.extend({
          _doReset: function() {
            for (var N = this._key, w = N.words, d = [], x = 0; x < 56; x++) {
              var y = f[x] - 1;
              d[x] = w[y >>> 5] >>> 31 - y % 32 & 1;
            }
            for (var _ = this._subKeys = [], C = 0; C < 16; C++) {
              for (var T = _[C] = [], D = u[C], x = 0; x < 24; x++)
                T[x / 6 | 0] |= d[(a[x] - 1 + D) % 28] << 31 - x % 6, T[4 + (x / 6 | 0)] |= d[28 + (a[x + 24] - 1 + D) % 28] << 31 - x % 6;
              T[0] = T[0] << 1 | T[0] >>> 31;
              for (var x = 1; x < 7; x++)
                T[x] = T[x] >>> (x - 1) * 4 + 3;
              T[7] = T[7] << 5 | T[7] >>> 27;
            }
            for (var S = this._invSubKeys = [], x = 0; x < 16; x++)
              S[x] = _[15 - x];
          },
          encryptBlock: function(N, w) {
            this._doCryptBlock(N, w, this._subKeys);
          },
          decryptBlock: function(N, w) {
            this._doCryptBlock(N, w, this._invSubKeys);
          },
          _doCryptBlock: function(N, w, d) {
            this._lBlock = N[w], this._rBlock = N[w + 1], b.call(this, 4, 252645135), b.call(this, 16, 65535), g.call(this, 2, 858993459), g.call(this, 8, 16711935), b.call(this, 1, 1431655765);
            for (var x = 0; x < 16; x++) {
              for (var y = d[x], _ = this._lBlock, C = this._rBlock, T = 0, D = 0; D < 8; D++)
                T |= h[D][((C ^ y[D]) & l[D]) >>> 0];
              this._lBlock = C, this._rBlock = _ ^ T;
            }
            var S = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = S, b.call(this, 1, 1431655765), g.call(this, 8, 16711935), g.call(this, 2, 858993459), b.call(this, 16, 65535), b.call(this, 4, 252645135), N[w] = this._lBlock, N[w + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function b(N, w) {
          var d = (this._lBlock >>> N ^ this._rBlock) & w;
          this._rBlock ^= d, this._lBlock ^= d << N;
        }
        function g(N, w) {
          var d = (this._rBlock >>> N ^ this._lBlock) & w;
          this._lBlock ^= d, this._rBlock ^= d << N;
        }
        n.DES = s._createHelper(p);
        var E = c.TripleDES = s.extend({
          _doReset: function() {
            var N = this._key, w = N.words;
            if (w.length !== 2 && w.length !== 4 && w.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var d = w.slice(0, 2), x = w.length < 4 ? w.slice(0, 2) : w.slice(2, 4), y = w.length < 6 ? w.slice(0, 2) : w.slice(4, 6);
            this._des1 = p.createEncryptor(o.create(d)), this._des2 = p.createEncryptor(o.create(x)), this._des3 = p.createEncryptor(o.create(y));
          },
          encryptBlock: function(N, w) {
            this._des1.encryptBlock(N, w), this._des2.decryptBlock(N, w), this._des3.encryptBlock(N, w);
          },
          decryptBlock: function(N, w) {
            this._des3.decryptBlock(N, w), this._des2.encryptBlock(N, w), this._des1.decryptBlock(N, w);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        n.TripleDES = s._createHelper(E);
      }(), r.TripleDES;
    });
  }(tc)), Vr;
}
var Kr = {}, nc = {
  get exports() {
    return Kr;
  },
  set exports(e) {
    Kr = e;
  }
}, fi;
function ic() {
  return fi || (fi = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), vt(), xt(), bt(), we());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.StreamCipher, s = n.algo, c = s.RC4 = o.extend({
          _doReset: function() {
            for (var u = this._key, h = u.words, l = u.sigBytes, p = this._S = [], b = 0; b < 256; b++)
              p[b] = b;
            for (var b = 0, g = 0; b < 256; b++) {
              var E = b % l, N = h[E >>> 2] >>> 24 - E % 4 * 8 & 255;
              g = (g + p[b] + N) % 256;
              var w = p[b];
              p[b] = p[g], p[g] = w;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(u, h) {
            u[h] ^= f.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function f() {
          for (var u = this._S, h = this._i, l = this._j, p = 0, b = 0; b < 4; b++) {
            h = (h + 1) % 256, l = (l + u[h]) % 256;
            var g = u[h];
            u[h] = u[l], u[l] = g, p |= u[(u[h] + u[l]) % 256] << 24 - b * 8;
          }
          return this._i = h, this._j = l, p;
        }
        n.RC4 = o._createHelper(c);
        var a = s.RC4Drop = c.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: c.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            c._doReset.call(this);
            for (var u = this.cfg.drop; u > 0; u--)
              f.call(this);
          }
        });
        n.RC4Drop = o._createHelper(a);
      }(), r.RC4;
    });
  }(nc)), Kr;
}
var Gr = {}, oc = {
  get exports() {
    return Gr;
  },
  set exports(e) {
    Gr = e;
  }
}, ui;
function sc() {
  return ui || (ui = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), vt(), xt(), bt(), we());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.StreamCipher, s = n.algo, c = [], f = [], a = [], u = s.Rabbit = o.extend({
          _doReset: function() {
            for (var l = this._key.words, p = this.cfg.iv, b = 0; b < 4; b++)
              l[b] = (l[b] << 8 | l[b] >>> 24) & 16711935 | (l[b] << 24 | l[b] >>> 8) & 4278255360;
            var g = this._X = [
              l[0],
              l[3] << 16 | l[2] >>> 16,
              l[1],
              l[0] << 16 | l[3] >>> 16,
              l[2],
              l[1] << 16 | l[0] >>> 16,
              l[3],
              l[2] << 16 | l[1] >>> 16
            ], E = this._C = [
              l[2] << 16 | l[2] >>> 16,
              l[0] & 4294901760 | l[1] & 65535,
              l[3] << 16 | l[3] >>> 16,
              l[1] & 4294901760 | l[2] & 65535,
              l[0] << 16 | l[0] >>> 16,
              l[2] & 4294901760 | l[3] & 65535,
              l[1] << 16 | l[1] >>> 16,
              l[3] & 4294901760 | l[0] & 65535
            ];
            this._b = 0;
            for (var b = 0; b < 4; b++)
              h.call(this);
            for (var b = 0; b < 8; b++)
              E[b] ^= g[b + 4 & 7];
            if (p) {
              var N = p.words, w = N[0], d = N[1], x = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, y = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, _ = x >>> 16 | y & 4294901760, C = y << 16 | x & 65535;
              E[0] ^= x, E[1] ^= _, E[2] ^= y, E[3] ^= C, E[4] ^= x, E[5] ^= _, E[6] ^= y, E[7] ^= C;
              for (var b = 0; b < 4; b++)
                h.call(this);
            }
          },
          _doProcessBlock: function(l, p) {
            var b = this._X;
            h.call(this), c[0] = b[0] ^ b[5] >>> 16 ^ b[3] << 16, c[1] = b[2] ^ b[7] >>> 16 ^ b[5] << 16, c[2] = b[4] ^ b[1] >>> 16 ^ b[7] << 16, c[3] = b[6] ^ b[3] >>> 16 ^ b[1] << 16;
            for (var g = 0; g < 4; g++)
              c[g] = (c[g] << 8 | c[g] >>> 24) & 16711935 | (c[g] << 24 | c[g] >>> 8) & 4278255360, l[p + g] ^= c[g];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function h() {
          for (var l = this._X, p = this._C, b = 0; b < 8; b++)
            f[b] = p[b];
          p[0] = p[0] + 1295307597 + this._b | 0, p[1] = p[1] + 3545052371 + (p[0] >>> 0 < f[0] >>> 0 ? 1 : 0) | 0, p[2] = p[2] + 886263092 + (p[1] >>> 0 < f[1] >>> 0 ? 1 : 0) | 0, p[3] = p[3] + 1295307597 + (p[2] >>> 0 < f[2] >>> 0 ? 1 : 0) | 0, p[4] = p[4] + 3545052371 + (p[3] >>> 0 < f[3] >>> 0 ? 1 : 0) | 0, p[5] = p[5] + 886263092 + (p[4] >>> 0 < f[4] >>> 0 ? 1 : 0) | 0, p[6] = p[6] + 1295307597 + (p[5] >>> 0 < f[5] >>> 0 ? 1 : 0) | 0, p[7] = p[7] + 3545052371 + (p[6] >>> 0 < f[6] >>> 0 ? 1 : 0) | 0, this._b = p[7] >>> 0 < f[7] >>> 0 ? 1 : 0;
          for (var b = 0; b < 8; b++) {
            var g = l[b] + p[b], E = g & 65535, N = g >>> 16, w = ((E * E >>> 17) + E * N >>> 15) + N * N, d = ((g & 4294901760) * g | 0) + ((g & 65535) * g | 0);
            a[b] = w ^ d;
          }
          l[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, l[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, l[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, l[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, l[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, l[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, l[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, l[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
        }
        n.Rabbit = o._createHelper(u);
      }(), r.Rabbit;
    });
  }(oc)), Gr;
}
var Zr = {}, ac = {
  get exports() {
    return Zr;
  },
  set exports(e) {
    Zr = e;
  }
}, li;
function cc() {
  return li || (li = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), vt(), xt(), bt(), we());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.StreamCipher, s = n.algo, c = [], f = [], a = [], u = s.RabbitLegacy = o.extend({
          _doReset: function() {
            var l = this._key.words, p = this.cfg.iv, b = this._X = [
              l[0],
              l[3] << 16 | l[2] >>> 16,
              l[1],
              l[0] << 16 | l[3] >>> 16,
              l[2],
              l[1] << 16 | l[0] >>> 16,
              l[3],
              l[2] << 16 | l[1] >>> 16
            ], g = this._C = [
              l[2] << 16 | l[2] >>> 16,
              l[0] & 4294901760 | l[1] & 65535,
              l[3] << 16 | l[3] >>> 16,
              l[1] & 4294901760 | l[2] & 65535,
              l[0] << 16 | l[0] >>> 16,
              l[2] & 4294901760 | l[3] & 65535,
              l[1] << 16 | l[1] >>> 16,
              l[3] & 4294901760 | l[0] & 65535
            ];
            this._b = 0;
            for (var E = 0; E < 4; E++)
              h.call(this);
            for (var E = 0; E < 8; E++)
              g[E] ^= b[E + 4 & 7];
            if (p) {
              var N = p.words, w = N[0], d = N[1], x = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, y = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, _ = x >>> 16 | y & 4294901760, C = y << 16 | x & 65535;
              g[0] ^= x, g[1] ^= _, g[2] ^= y, g[3] ^= C, g[4] ^= x, g[5] ^= _, g[6] ^= y, g[7] ^= C;
              for (var E = 0; E < 4; E++)
                h.call(this);
            }
          },
          _doProcessBlock: function(l, p) {
            var b = this._X;
            h.call(this), c[0] = b[0] ^ b[5] >>> 16 ^ b[3] << 16, c[1] = b[2] ^ b[7] >>> 16 ^ b[5] << 16, c[2] = b[4] ^ b[1] >>> 16 ^ b[7] << 16, c[3] = b[6] ^ b[3] >>> 16 ^ b[1] << 16;
            for (var g = 0; g < 4; g++)
              c[g] = (c[g] << 8 | c[g] >>> 24) & 16711935 | (c[g] << 24 | c[g] >>> 8) & 4278255360, l[p + g] ^= c[g];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function h() {
          for (var l = this._X, p = this._C, b = 0; b < 8; b++)
            f[b] = p[b];
          p[0] = p[0] + 1295307597 + this._b | 0, p[1] = p[1] + 3545052371 + (p[0] >>> 0 < f[0] >>> 0 ? 1 : 0) | 0, p[2] = p[2] + 886263092 + (p[1] >>> 0 < f[1] >>> 0 ? 1 : 0) | 0, p[3] = p[3] + 1295307597 + (p[2] >>> 0 < f[2] >>> 0 ? 1 : 0) | 0, p[4] = p[4] + 3545052371 + (p[3] >>> 0 < f[3] >>> 0 ? 1 : 0) | 0, p[5] = p[5] + 886263092 + (p[4] >>> 0 < f[4] >>> 0 ? 1 : 0) | 0, p[6] = p[6] + 1295307597 + (p[5] >>> 0 < f[5] >>> 0 ? 1 : 0) | 0, p[7] = p[7] + 3545052371 + (p[6] >>> 0 < f[6] >>> 0 ? 1 : 0) | 0, this._b = p[7] >>> 0 < f[7] >>> 0 ? 1 : 0;
          for (var b = 0; b < 8; b++) {
            var g = l[b] + p[b], E = g & 65535, N = g >>> 16, w = ((E * E >>> 17) + E * N >>> 15) + N * N, d = ((g & 4294901760) * g | 0) + ((g & 65535) * g | 0);
            a[b] = w ^ d;
          }
          l[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, l[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, l[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, l[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, l[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, l[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, l[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, l[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
        }
        n.RabbitLegacy = o._createHelper(u);
      }(), r.RabbitLegacy;
    });
  }(ac)), Zr;
}
(function(e, t) {
  (function(r, n, i) {
    e.exports = n(ce(), sn(), ua(), ha(), vt(), va(), xt(), o0(), Vi(), ya(), Ki(), Ea(), ka(), Ba(), s0(), Ta(), bt(), we(), Da(), Pa(), Fa(), Ha(), Gi(), Wa(), Ya(), Va(), Ga(), Xa(), Ja(), Zi(), rc(), ic(), sc(), cc());
  })(re, function(r) {
    return r;
  });
})(na);
var hi = {}, fc = {
  get exports() {
    return hi;
  },
  set exports(e) {
    hi = e;
  }
};
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(re, function() {
    var r = 1e3, n = 6e4, i = 36e5, o = "millisecond", s = "second", c = "minute", f = "hour", a = "day", u = "week", h = "month", l = "quarter", p = "year", b = "date", g = "Invalid Date", E = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, N = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, w = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(I) {
      var F = ["th", "st", "nd", "rd"], P = I % 100;
      return "[" + I + (F[(P - 20) % 10] || F[P] || F[0]) + "]";
    } }, d = function(I, F, P) {
      var z = String(I);
      return !z || z.length >= F ? I : "" + Array(F + 1 - z.length).join(P) + I;
    }, x = { s: d, z: function(I) {
      var F = -I.utcOffset(), P = Math.abs(F), z = Math.floor(P / 60), Y = P % 60;
      return (F <= 0 ? "+" : "-") + d(z, 2, "0") + ":" + d(Y, 2, "0");
    }, m: function I(F, P) {
      if (F.date() < P.date())
        return -I(P, F);
      var z = 12 * (P.year() - F.year()) + (P.month() - F.month()), Y = F.clone().add(z, h), Z = P - Y < 0, X = F.clone().add(z + (Z ? -1 : 1), h);
      return +(-(z + (P - Y) / (Z ? Y - X : X - Y)) || 0);
    }, a: function(I) {
      return I < 0 ? Math.ceil(I) || 0 : Math.floor(I);
    }, p: function(I) {
      return { M: h, y: p, w: u, d: a, D: b, h: f, m: c, s, ms: o, Q: l }[I] || String(I || "").toLowerCase().replace(/s$/, "");
    }, u: function(I) {
      return I === void 0;
    } }, y = "en", _ = {};
    _[y] = w;
    var C = function(I) {
      return I instanceof A;
    }, T = function I(F, P, z) {
      var Y;
      if (!F)
        return y;
      if (typeof F == "string") {
        var Z = F.toLowerCase();
        _[Z] && (Y = Z), P && (_[Z] = P, Y = Z);
        var X = F.split("-");
        if (!Y && X.length > 1)
          return I(X[0]);
      } else {
        var J = F.name;
        _[J] = F, Y = J;
      }
      return !z && Y && (y = Y), Y || !z && y;
    }, D = function(I, F) {
      if (C(I))
        return I.clone();
      var P = typeof F == "object" ? F : {};
      return P.date = I, P.args = arguments, new A(P);
    }, S = x;
    S.l = T, S.i = C, S.w = function(I, F) {
      return D(I, { locale: F.$L, utc: F.$u, x: F.$x, $offset: F.$offset });
    };
    var A = function() {
      function I(P) {
        this.$L = T(P.locale, null, !0), this.parse(P);
      }
      var F = I.prototype;
      return F.parse = function(P) {
        this.$d = function(z) {
          var Y = z.date, Z = z.utc;
          if (Y === null)
            return /* @__PURE__ */ new Date(NaN);
          if (S.u(Y))
            return /* @__PURE__ */ new Date();
          if (Y instanceof Date)
            return new Date(Y);
          if (typeof Y == "string" && !/Z$/i.test(Y)) {
            var X = Y.match(E);
            if (X) {
              var J = X[2] - 1 || 0, M = (X[7] || "0").substring(0, 3);
              return Z ? new Date(Date.UTC(X[1], J, X[3] || 1, X[4] || 0, X[5] || 0, X[6] || 0, M)) : new Date(X[1], J, X[3] || 1, X[4] || 0, X[5] || 0, X[6] || 0, M);
            }
          }
          return new Date(Y);
        }(P), this.$x = P.x || {}, this.init();
      }, F.init = function() {
        var P = this.$d;
        this.$y = P.getFullYear(), this.$M = P.getMonth(), this.$D = P.getDate(), this.$W = P.getDay(), this.$H = P.getHours(), this.$m = P.getMinutes(), this.$s = P.getSeconds(), this.$ms = P.getMilliseconds();
      }, F.$utils = function() {
        return S;
      }, F.isValid = function() {
        return this.$d.toString() !== g;
      }, F.isSame = function(P, z) {
        var Y = D(P);
        return this.startOf(z) <= Y && Y <= this.endOf(z);
      }, F.isAfter = function(P, z) {
        return D(P) < this.startOf(z);
      }, F.isBefore = function(P, z) {
        return this.endOf(z) < D(P);
      }, F.$g = function(P, z, Y) {
        return S.u(P) ? this[z] : this.set(Y, P);
      }, F.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, F.valueOf = function() {
        return this.$d.getTime();
      }, F.startOf = function(P, z) {
        var Y = this, Z = !!S.u(z) || z, X = S.p(P), J = function(ne, xe) {
          var _e = S.w(Y.$u ? Date.UTC(Y.$y, xe, ne) : new Date(Y.$y, xe, ne), Y);
          return Z ? _e : _e.endOf(a);
        }, M = function(ne, xe) {
          return S.w(Y.toDate()[ne].apply(Y.toDate("s"), (Z ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(xe)), Y);
        }, $ = this.$W, q = this.$M, W = this.$D, ae = "set" + (this.$u ? "UTC" : "");
        switch (X) {
          case p:
            return Z ? J(1, 0) : J(31, 11);
          case h:
            return Z ? J(1, q) : J(0, q + 1);
          case u:
            var ue = this.$locale().weekStart || 0, ve = ($ < ue ? $ + 7 : $) - ue;
            return J(Z ? W - ve : W + (6 - ve), q);
          case a:
          case b:
            return M(ae + "Hours", 0);
          case f:
            return M(ae + "Minutes", 1);
          case c:
            return M(ae + "Seconds", 2);
          case s:
            return M(ae + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, F.endOf = function(P) {
        return this.startOf(P, !1);
      }, F.$set = function(P, z) {
        var Y, Z = S.p(P), X = "set" + (this.$u ? "UTC" : ""), J = (Y = {}, Y[a] = X + "Date", Y[b] = X + "Date", Y[h] = X + "Month", Y[p] = X + "FullYear", Y[f] = X + "Hours", Y[c] = X + "Minutes", Y[s] = X + "Seconds", Y[o] = X + "Milliseconds", Y)[Z], M = Z === a ? this.$D + (z - this.$W) : z;
        if (Z === h || Z === p) {
          var $ = this.clone().set(b, 1);
          $.$d[J](M), $.init(), this.$d = $.set(b, Math.min(this.$D, $.daysInMonth())).$d;
        } else
          J && this.$d[J](M);
        return this.init(), this;
      }, F.set = function(P, z) {
        return this.clone().$set(P, z);
      }, F.get = function(P) {
        return this[S.p(P)]();
      }, F.add = function(P, z) {
        var Y, Z = this;
        P = Number(P);
        var X = S.p(z), J = function(q) {
          var W = D(Z);
          return S.w(W.date(W.date() + Math.round(q * P)), Z);
        };
        if (X === h)
          return this.set(h, this.$M + P);
        if (X === p)
          return this.set(p, this.$y + P);
        if (X === a)
          return J(1);
        if (X === u)
          return J(7);
        var M = (Y = {}, Y[c] = n, Y[f] = i, Y[s] = r, Y)[X] || 1, $ = this.$d.getTime() + P * M;
        return S.w($, this);
      }, F.subtract = function(P, z) {
        return this.add(-1 * P, z);
      }, F.format = function(P) {
        var z = this, Y = this.$locale();
        if (!this.isValid())
          return Y.invalidDate || g;
        var Z = P || "YYYY-MM-DDTHH:mm:ssZ", X = S.z(this), J = this.$H, M = this.$m, $ = this.$M, q = Y.weekdays, W = Y.months, ae = function(xe, _e, Ge, De) {
          return xe && (xe[_e] || xe(z, Z)) || Ge[_e].slice(0, De);
        }, ue = function(xe) {
          return S.s(J % 12 || 12, xe, "0");
        }, ve = Y.meridiem || function(xe, _e, Ge) {
          var De = xe < 12 ? "AM" : "PM";
          return Ge ? De.toLowerCase() : De;
        }, ne = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: $ + 1, MM: S.s($ + 1, 2, "0"), MMM: ae(Y.monthsShort, $, W, 3), MMMM: ae(W, $), D: this.$D, DD: S.s(this.$D, 2, "0"), d: String(this.$W), dd: ae(Y.weekdaysMin, this.$W, q, 2), ddd: ae(Y.weekdaysShort, this.$W, q, 3), dddd: q[this.$W], H: String(J), HH: S.s(J, 2, "0"), h: ue(1), hh: ue(2), a: ve(J, M, !0), A: ve(J, M, !1), m: String(M), mm: S.s(M, 2, "0"), s: String(this.$s), ss: S.s(this.$s, 2, "0"), SSS: S.s(this.$ms, 3, "0"), Z: X };
        return Z.replace(N, function(xe, _e) {
          return _e || ne[xe] || X.replace(":", "");
        });
      }, F.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, F.diff = function(P, z, Y) {
        var Z, X = S.p(z), J = D(P), M = (J.utcOffset() - this.utcOffset()) * n, $ = this - J, q = S.m(this, J);
        return q = (Z = {}, Z[p] = q / 12, Z[h] = q, Z[l] = q / 3, Z[u] = ($ - M) / 6048e5, Z[a] = ($ - M) / 864e5, Z[f] = $ / i, Z[c] = $ / n, Z[s] = $ / r, Z)[X] || $, Y ? q : S.a(q);
      }, F.daysInMonth = function() {
        return this.endOf(h).$D;
      }, F.$locale = function() {
        return _[this.$L];
      }, F.locale = function(P, z) {
        if (!P)
          return this.$L;
        var Y = this.clone(), Z = T(P, z, !0);
        return Z && (Y.$L = Z), Y;
      }, F.clone = function() {
        return S.w(this.$d, this);
      }, F.toDate = function() {
        return new Date(this.valueOf());
      }, F.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, F.toISOString = function() {
        return this.$d.toISOString();
      }, F.toString = function() {
        return this.$d.toUTCString();
      }, I;
    }(), L = A.prototype;
    return D.prototype = L, [["$ms", o], ["$s", s], ["$m", c], ["$H", f], ["$W", a], ["$M", h], ["$y", p], ["$D", b]].forEach(function(I) {
      L[I[1]] = function(F) {
        return this.$g(F, I[0], I[1]);
      };
    }), D.extend = function(I, F) {
      return I.$i || (I(F, A, D), I.$i = !0), D;
    }, D.locale = T, D.isDayjs = C, D.unix = function(I) {
      return D(1e3 * I);
    }, D.en = _[y], D.Ls = _, D.p = {}, D;
  });
})(fc);
var Xi = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, r) {
    var n = -1;
    return t.some(function(i, o) {
      return i[0] === r ? (n = o, !0) : !1;
    }), n;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(r) {
        var n = e(this.__entries__, r), i = this.__entries__[n];
        return i && i[1];
      }, t.prototype.set = function(r, n) {
        var i = e(this.__entries__, r);
        ~i ? this.__entries__[i][1] = n : this.__entries__.push([r, n]);
      }, t.prototype.delete = function(r) {
        var n = this.__entries__, i = e(n, r);
        ~i && n.splice(i, 1);
      }, t.prototype.has = function(r) {
        return !!~e(this.__entries__, r);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(r, n) {
        n === void 0 && (n = null);
        for (var i = 0, o = this.__entries__; i < o.length; i++) {
          var s = o[i];
          r.call(n, s[1], s[0]);
        }
      }, t;
    }()
  );
}(), Hn = typeof window < "u" && typeof document < "u" && window.document === document, Xr = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), uc = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Xr) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), lc = 2;
function hc(e, t) {
  var r = !1, n = !1, i = 0;
  function o() {
    r && (r = !1, e()), n && c();
  }
  function s() {
    uc(o);
  }
  function c() {
    var f = Date.now();
    if (r) {
      if (f - i < lc)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(s, t);
    i = f;
  }
  return c;
}
var dc = 20, pc = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], vc = typeof MutationObserver < "u", xc = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = hc(this.refresh.bind(this), dc);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var r = this.observers_, n = r.indexOf(t);
      ~n && r.splice(n, 1), !r.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(r) {
        return r.gatherActive(), r.hasActive();
      });
      return t.forEach(function(r) {
        return r.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !Hn || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), vc ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Hn || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, i = pc.some(function(o) {
        return !!~n.indexOf(o);
      });
      i && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Qi = function(e, t) {
  for (var r = 0, n = Object.keys(t); r < n.length; r++) {
    var i = n[r];
    Object.defineProperty(e, i, {
      value: t[i],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, Et = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Xr;
}, Ji = an(0, 0, 0, 0);
function Qr(e) {
  return parseFloat(e) || 0;
}
function di(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, i) {
    var o = e["border-" + i + "-width"];
    return n + Qr(o);
  }, 0);
}
function bc(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, i = t; n < i.length; n++) {
    var o = i[n], s = e["padding-" + o];
    r[o] = Qr(s);
  }
  return r;
}
function gc(e) {
  var t = e.getBBox();
  return an(0, 0, t.width, t.height);
}
function mc(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return Ji;
  var n = Et(e).getComputedStyle(e), i = bc(n), o = i.left + i.right, s = i.top + i.bottom, c = Qr(n.width), f = Qr(n.height);
  if (n.boxSizing === "border-box" && (Math.round(c + o) !== t && (c -= di(n, "left", "right") + o), Math.round(f + s) !== r && (f -= di(n, "top", "bottom") + s)), !wc(e)) {
    var a = Math.round(c + o) - t, u = Math.round(f + s) - r;
    Math.abs(a) !== 1 && (c -= a), Math.abs(u) !== 1 && (f -= u);
  }
  return an(i.left, i.top, c, f);
}
var yc = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Et(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Et(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function wc(e) {
  return e === Et(e).document.documentElement;
}
function _c(e) {
  return Hn ? yc(e) ? gc(e) : mc(e) : Ji;
}
function Ec(e) {
  var t = e.x, r = e.y, n = e.width, i = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, s = Object.create(o.prototype);
  return Qi(s, {
    x: t,
    y: r,
    width: n,
    height: i,
    top: r,
    right: t + n,
    bottom: i + r,
    left: t
  }), s;
}
function an(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var Sc = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = an(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = _c(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), kc = (
  /** @class */
  function() {
    function e(t, r) {
      var n = Ec(r);
      Qi(this, { target: t, contentRect: n });
    }
    return e;
  }()
), Cc = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new Xi(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Et(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new Sc(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Et(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) && (r.delete(t), r.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(r) {
        r.isActive() && t.activeObservations_.push(r);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, r = this.activeObservations_.map(function(n) {
          return new kc(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), eo = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Xi(), to = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = xc.getInstance(), n = new Cc(t, r, this);
      eo.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  to.prototype[e] = function() {
    var t;
    return (t = eo.get(this))[e].apply(t, arguments);
  };
});
(function() {
  return typeof Xr.ResizeObserver < "u" ? Xr.ResizeObserver : to;
})();
Zi();
vt();
var pi = {}, Bc = {
  get exports() {
    return pi;
  },
  set exports(e) {
    pi = e;
  }
};
(function(e, t) {
  (function(r, n) {
    e.exports = n(ce());
  })(re, function(r) {
    return r.enc.Utf8;
  });
})(Bc);
xt();
Gi();
var vi = {}, Ac = {
  get exports() {
    return vi;
  },
  set exports(e) {
    vi = e;
  }
};
(function(e, t) {
  (function(r, n, i) {
    e.exports = n(ce(), we());
  })(re, function(r) {
    return r.pad.Pkcs7;
  });
})(Ac);
function Rc(e) {
  var t = [], r = "";
  for (r in e)
    t.push(r);
  return t;
}
function zn(e) {
  return e = JSON.stringify(e), !(typeof e != "string" || !/^\{[\s\S]*\}$/.test(e));
}
function Tc(e) {
  return e instanceof Array;
}
function Nc(e) {
  return Array.prototype.slice.call(e);
}
function St() {
  if (!(this instanceof St))
    return new St();
}
St.prototype = {
  get: function(e) {
    for (var t = e + "=", r = document.cookie.split(";"), n = 0; n < r.length; n++) {
      for (var i = r[n]; i.charAt(0) == " "; )
        i = i.substring(1, i.length);
      if (i.indexOf(t) == 0)
        return decodeURI(i.substring(t.length, i.length));
    }
    return !1;
  },
  set: function(e, t, r) {
    if (zn(e))
      for (const n in e)
        this.set(n, e[n], t, r);
    else if (typeof e == "string") {
      const n = zn(r) ? r : { expires: r }, i = n.path !== void 0 ? `;path=${n.path};path=/` : ";path=/", o = n.domain ? `;domain=${n.domain}` : "", s = n.secure ? ";secure" : "";
      let c = n.expires !== void 0 ? n.expires : "";
      typeof c == "string" && c !== "" ? c = new Date(c) : typeof c == "number" && (c = new Date(+/* @__PURE__ */ new Date() + 1e3 * 60 * 60 * 24 * c)), c !== "" && "toGMTString" in c && (c = `;expires=${c.toGMTString()}`);
      const f = n.sameSite ? `;SameSite=${n.sameSite}` : "";
      document.cookie = `${e}=${encodeURI(t) + c + i + o + s + f}`;
    }
  },
  remove: function(e) {
    e = Tc(e) ? e : Nc(arguments);
    for (var t = 0, r = e.length; t < r; t++)
      this.set(e[t], "", -1);
    return e;
  },
  clear: function(e) {
    return e ? this.remove(e) : this.remove(Rc(this.all()));
  },
  all: function() {
    if (document.cookie === "")
      return {};
    for (var e = document.cookie.split("; "), t = {}, r = 0, n = e.length; r < n; r++) {
      var i = e[r].split("=");
      t[decodeURI(i[0])] = decodeURI(i[1]);
    }
    return t;
  }
};
let dt = null;
const ro = function(e, t, r) {
  const n = arguments;
  if (dt || (dt = St()), n.length === 0)
    return dt.all();
  if (n.length === 1 && e === null)
    return dt.clear();
  if (n.length === 2 && !t)
    return dt.clear(e);
  if (typeof e == "string" && !t)
    return dt.get(e);
  if (typeof e == "string" && t || zn(e))
    return dt.set(e, t, r);
};
for (const e in St.prototype)
  ro[e] = St.prototype[e];
var qn = {}, Oc = {
  get exports() {
    return qn;
  },
  set exports(e) {
    qn = e;
  }
};
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(e, t) {
  (function(r) {
    e.exports = r();
  })(function() {
    return function r(n, i, o) {
      function s(a, u) {
        if (!i[a]) {
          if (!n[a]) {
            var h = typeof Mt == "function" && Mt;
            if (!u && h)
              return h(a, !0);
            if (c)
              return c(a, !0);
            var l = new Error("Cannot find module '" + a + "'");
            throw l.code = "MODULE_NOT_FOUND", l;
          }
          var p = i[a] = { exports: {} };
          n[a][0].call(p.exports, function(b) {
            var g = n[a][1][b];
            return s(g || b);
          }, p, p.exports, r, n, i, o);
        }
        return i[a].exports;
      }
      for (var c = typeof Mt == "function" && Mt, f = 0; f < o.length; f++)
        s(o[f]);
      return s;
    }({ 1: [function(r, n, i) {
      (function(o) {
        var s = o.MutationObserver || o.WebKitMutationObserver, c;
        if (s) {
          var f = 0, a = new s(b), u = o.document.createTextNode("");
          a.observe(u, {
            characterData: !0
          }), c = function() {
            u.data = f = ++f % 2;
          };
        } else if (!o.setImmediate && typeof o.MessageChannel < "u") {
          var h = new o.MessageChannel();
          h.port1.onmessage = b, c = function() {
            h.port2.postMessage(0);
          };
        } else
          "document" in o && "onreadystatechange" in o.document.createElement("script") ? c = function() {
            var E = o.document.createElement("script");
            E.onreadystatechange = function() {
              b(), E.onreadystatechange = null, E.parentNode.removeChild(E), E = null;
            }, o.document.documentElement.appendChild(E);
          } : c = function() {
            setTimeout(b, 0);
          };
        var l, p = [];
        function b() {
          l = !0;
          for (var E, N, w = p.length; w; ) {
            for (N = p, p = [], E = -1; ++E < w; )
              N[E]();
            w = p.length;
          }
          l = !1;
        }
        n.exports = g;
        function g(E) {
          p.push(E) === 1 && !l && c();
        }
      }).call(this, typeof re < "u" ? re : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(r, n, i) {
      var o = r(1);
      function s() {
      }
      var c = {}, f = ["REJECTED"], a = ["FULFILLED"], u = ["PENDING"];
      n.exports = h;
      function h(y) {
        if (typeof y != "function")
          throw new TypeError("resolver must be a function");
        this.state = u, this.queue = [], this.outcome = void 0, y !== s && g(this, y);
      }
      h.prototype.catch = function(y) {
        return this.then(null, y);
      }, h.prototype.then = function(y, _) {
        if (typeof y != "function" && this.state === a || typeof _ != "function" && this.state === f)
          return this;
        var C = new this.constructor(s);
        if (this.state !== u) {
          var T = this.state === a ? y : _;
          p(C, T, this.outcome);
        } else
          this.queue.push(new l(C, y, _));
        return C;
      };
      function l(y, _, C) {
        this.promise = y, typeof _ == "function" && (this.onFulfilled = _, this.callFulfilled = this.otherCallFulfilled), typeof C == "function" && (this.onRejected = C, this.callRejected = this.otherCallRejected);
      }
      l.prototype.callFulfilled = function(y) {
        c.resolve(this.promise, y);
      }, l.prototype.otherCallFulfilled = function(y) {
        p(this.promise, this.onFulfilled, y);
      }, l.prototype.callRejected = function(y) {
        c.reject(this.promise, y);
      }, l.prototype.otherCallRejected = function(y) {
        p(this.promise, this.onRejected, y);
      };
      function p(y, _, C) {
        o(function() {
          var T;
          try {
            T = _(C);
          } catch (D) {
            return c.reject(y, D);
          }
          T === y ? c.reject(y, new TypeError("Cannot resolve promise with itself")) : c.resolve(y, T);
        });
      }
      c.resolve = function(y, _) {
        var C = E(b, _);
        if (C.status === "error")
          return c.reject(y, C.value);
        var T = C.value;
        if (T)
          g(y, T);
        else {
          y.state = a, y.outcome = _;
          for (var D = -1, S = y.queue.length; ++D < S; )
            y.queue[D].callFulfilled(_);
        }
        return y;
      }, c.reject = function(y, _) {
        y.state = f, y.outcome = _;
        for (var C = -1, T = y.queue.length; ++C < T; )
          y.queue[C].callRejected(_);
        return y;
      };
      function b(y) {
        var _ = y && y.then;
        if (y && (typeof y == "object" || typeof y == "function") && typeof _ == "function")
          return function() {
            _.apply(y, arguments);
          };
      }
      function g(y, _) {
        var C = !1;
        function T(L) {
          C || (C = !0, c.reject(y, L));
        }
        function D(L) {
          C || (C = !0, c.resolve(y, L));
        }
        function S() {
          _(D, T);
        }
        var A = E(S);
        A.status === "error" && T(A.value);
      }
      function E(y, _) {
        var C = {};
        try {
          C.value = y(_), C.status = "success";
        } catch (T) {
          C.status = "error", C.value = T;
        }
        return C;
      }
      h.resolve = N;
      function N(y) {
        return y instanceof this ? y : c.resolve(new this(s), y);
      }
      h.reject = w;
      function w(y) {
        var _ = new this(s);
        return c.reject(_, y);
      }
      h.all = d;
      function d(y) {
        var _ = this;
        if (Object.prototype.toString.call(y) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var C = y.length, T = !1;
        if (!C)
          return this.resolve([]);
        for (var D = new Array(C), S = 0, A = -1, L = new this(s); ++A < C; )
          I(y[A], A);
        return L;
        function I(F, P) {
          _.resolve(F).then(z, function(Y) {
            T || (T = !0, c.reject(L, Y));
          });
          function z(Y) {
            D[P] = Y, ++S === C && !T && (T = !0, c.resolve(L, D));
          }
        }
      }
      h.race = x;
      function x(y) {
        var _ = this;
        if (Object.prototype.toString.call(y) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var C = y.length, T = !1;
        if (!C)
          return this.resolve([]);
        for (var D = -1, S = new this(s); ++D < C; )
          A(y[D]);
        return S;
        function A(L) {
          _.resolve(L).then(function(I) {
            T || (T = !0, c.resolve(S, I));
          }, function(I) {
            T || (T = !0, c.reject(S, I));
          });
        }
      }
    }, { 1: 1 }], 3: [function(r, n, i) {
      (function(o) {
        typeof o.Promise != "function" && (o.Promise = r(2));
      }).call(this, typeof re < "u" ? re : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(r, n, i) {
      var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
        return typeof v;
      } : function(v) {
        return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
      };
      function s(v, k) {
        if (!(v instanceof k))
          throw new TypeError("Cannot call a class as a function");
      }
      function c() {
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
      var f = c();
      function a() {
        try {
          if (!f || !f.open)
            return !1;
          var v = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), k = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!v || k) && typeof indexedDB < "u" && // some outdated implementations of IDB that appear on Samsung
          // and HTC Android devices <4.4 are missing IDBKeyRange
          // See: https://github.com/mozilla/localForage/issues/128
          // See: https://github.com/mozilla/localForage/issues/272
          typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function u(v, k) {
        v = v || [], k = k || {};
        try {
          return new Blob(v, k);
        } catch (B) {
          if (B.name !== "TypeError")
            throw B;
          for (var m = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, R = new m(), O = 0; O < v.length; O += 1)
            R.append(v[O]);
          return R.getBlob(k.type);
        }
      }
      typeof Promise > "u" && r(3);
      var h = Promise;
      function l(v, k) {
        k && v.then(function(m) {
          k(null, m);
        }, function(m) {
          k(m);
        });
      }
      function p(v, k, m) {
        typeof k == "function" && v.then(k), typeof m == "function" && v.catch(m);
      }
      function b(v) {
        return typeof v != "string" && (console.warn(v + " used as a key, but it is not a string."), v = String(v)), v;
      }
      function g() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var E = "local-forage-detect-blob-support", N = void 0, w = {}, d = Object.prototype.toString, x = "readonly", y = "readwrite";
      function _(v) {
        for (var k = v.length, m = new ArrayBuffer(k), R = new Uint8Array(m), O = 0; O < k; O++)
          R[O] = v.charCodeAt(O);
        return m;
      }
      function C(v) {
        return new h(function(k) {
          var m = v.transaction(E, y), R = u([""]);
          m.objectStore(E).put(R, "key"), m.onabort = function(O) {
            O.preventDefault(), O.stopPropagation(), k(!1);
          }, m.oncomplete = function() {
            var O = navigator.userAgent.match(/Chrome\/(\d+)/), B = navigator.userAgent.match(/Edge\//);
            k(B || !O || parseInt(O[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function T(v) {
        return typeof N == "boolean" ? h.resolve(N) : C(v).then(function(k) {
          return N = k, N;
        });
      }
      function D(v) {
        var k = w[v.name], m = {};
        m.promise = new h(function(R, O) {
          m.resolve = R, m.reject = O;
        }), k.deferredOperations.push(m), k.dbReady ? k.dbReady = k.dbReady.then(function() {
          return m.promise;
        }) : k.dbReady = m.promise;
      }
      function S(v) {
        var k = w[v.name], m = k.deferredOperations.pop();
        if (m)
          return m.resolve(), m.promise;
      }
      function A(v, k) {
        var m = w[v.name], R = m.deferredOperations.pop();
        if (R)
          return R.reject(k), R.promise;
      }
      function L(v, k) {
        return new h(function(m, R) {
          if (w[v.name] = w[v.name] || $(), v.db)
            if (k)
              D(v), v.db.close();
            else
              return m(v.db);
          var O = [v.name];
          k && O.push(v.version);
          var B = f.open.apply(f, O);
          k && (B.onupgradeneeded = function(H) {
            var j = B.result;
            try {
              j.createObjectStore(v.storeName), H.oldVersion <= 1 && j.createObjectStore(E);
            } catch (V) {
              if (V.name === "ConstraintError")
                console.warn('The database "' + v.name + '" has been upgraded from version ' + H.oldVersion + " to version " + H.newVersion + ', but the storage "' + v.storeName + '" already exists.');
              else
                throw V;
            }
          }), B.onerror = function(H) {
            H.preventDefault(), R(B.error);
          }, B.onsuccess = function() {
            var H = B.result;
            H.onversionchange = function(j) {
              j.target.close();
            }, m(H), S(v);
          };
        });
      }
      function I(v) {
        return L(v, !1);
      }
      function F(v) {
        return L(v, !0);
      }
      function P(v, k) {
        if (!v.db)
          return !0;
        var m = !v.db.objectStoreNames.contains(v.storeName), R = v.version < v.db.version, O = v.version > v.db.version;
        if (R && (v.version !== k && console.warn('The database "' + v.name + `" can't be downgraded from version ` + v.db.version + " to version " + v.version + "."), v.version = v.db.version), O || m) {
          if (m) {
            var B = v.db.version + 1;
            B > v.version && (v.version = B);
          }
          return !0;
        }
        return !1;
      }
      function z(v) {
        return new h(function(k, m) {
          var R = new FileReader();
          R.onerror = m, R.onloadend = function(O) {
            var B = btoa(O.target.result || "");
            k({
              __local_forage_encoded_blob: !0,
              data: B,
              type: v.type
            });
          }, R.readAsBinaryString(v);
        });
      }
      function Y(v) {
        var k = _(atob(v.data));
        return u([k], { type: v.type });
      }
      function Z(v) {
        return v && v.__local_forage_encoded_blob;
      }
      function X(v) {
        var k = this, m = k._initReady().then(function() {
          var R = w[k._dbInfo.name];
          if (R && R.dbReady)
            return R.dbReady;
        });
        return p(m, v, v), m;
      }
      function J(v) {
        D(v);
        for (var k = w[v.name], m = k.forages, R = 0; R < m.length; R++) {
          var O = m[R];
          O._dbInfo.db && (O._dbInfo.db.close(), O._dbInfo.db = null);
        }
        return v.db = null, I(v).then(function(B) {
          return v.db = B, P(v) ? F(v) : B;
        }).then(function(B) {
          v.db = k.db = B;
          for (var H = 0; H < m.length; H++)
            m[H]._dbInfo.db = B;
        }).catch(function(B) {
          throw A(v, B), B;
        });
      }
      function M(v, k, m, R) {
        R === void 0 && (R = 1);
        try {
          var O = v.db.transaction(v.storeName, k);
          m(null, O);
        } catch (B) {
          if (R > 0 && (!v.db || B.name === "InvalidStateError" || B.name === "NotFoundError"))
            return h.resolve().then(function() {
              if (!v.db || B.name === "NotFoundError" && !v.db.objectStoreNames.contains(v.storeName) && v.version <= v.db.version)
                return v.db && (v.version = v.db.version + 1), F(v);
            }).then(function() {
              return J(v).then(function() {
                M(v, k, m, R - 1);
              });
            }).catch(m);
          m(B);
        }
      }
      function $() {
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
      function q(v) {
        var k = this, m = {
          db: null
        };
        if (v)
          for (var R in v)
            m[R] = v[R];
        var O = w[m.name];
        O || (O = $(), w[m.name] = O), O.forages.push(k), k._initReady || (k._initReady = k.ready, k.ready = X);
        var B = [];
        function H() {
          return h.resolve();
        }
        for (var j = 0; j < O.forages.length; j++) {
          var V = O.forages[j];
          V !== k && B.push(V._initReady().catch(H));
        }
        var K = O.forages.slice(0);
        return h.all(B).then(function() {
          return m.db = O.db, I(m);
        }).then(function(G) {
          return m.db = G, P(m, k._defaultConfig.version) ? F(m) : G;
        }).then(function(G) {
          m.db = O.db = G, k._dbInfo = m;
          for (var Q = 0; Q < K.length; Q++) {
            var se = K[Q];
            se !== k && (se._dbInfo.db = m.db, se._dbInfo.version = m.version);
          }
        });
      }
      function W(v, k) {
        var m = this;
        v = b(v);
        var R = new h(function(O, B) {
          m.ready().then(function() {
            M(m._dbInfo, x, function(H, j) {
              if (H)
                return B(H);
              try {
                var V = j.objectStore(m._dbInfo.storeName), K = V.get(v);
                K.onsuccess = function() {
                  var G = K.result;
                  G === void 0 && (G = null), Z(G) && (G = Y(G)), O(G);
                }, K.onerror = function() {
                  B(K.error);
                };
              } catch (G) {
                B(G);
              }
            });
          }).catch(B);
        });
        return l(R, k), R;
      }
      function ae(v, k) {
        var m = this, R = new h(function(O, B) {
          m.ready().then(function() {
            M(m._dbInfo, x, function(H, j) {
              if (H)
                return B(H);
              try {
                var V = j.objectStore(m._dbInfo.storeName), K = V.openCursor(), G = 1;
                K.onsuccess = function() {
                  var Q = K.result;
                  if (Q) {
                    var se = Q.value;
                    Z(se) && (se = Y(se));
                    var le = v(se, Q.key, G++);
                    le !== void 0 ? O(le) : Q.continue();
                  } else
                    O();
                }, K.onerror = function() {
                  B(K.error);
                };
              } catch (Q) {
                B(Q);
              }
            });
          }).catch(B);
        });
        return l(R, k), R;
      }
      function ue(v, k, m) {
        var R = this;
        v = b(v);
        var O = new h(function(B, H) {
          var j;
          R.ready().then(function() {
            return j = R._dbInfo, d.call(k) === "[object Blob]" ? T(j.db).then(function(V) {
              return V ? k : z(k);
            }) : k;
          }).then(function(V) {
            M(R._dbInfo, y, function(K, G) {
              if (K)
                return H(K);
              try {
                var Q = G.objectStore(R._dbInfo.storeName);
                V === null && (V = void 0);
                var se = Q.put(V, v);
                G.oncomplete = function() {
                  V === void 0 && (V = null), B(V);
                }, G.onabort = G.onerror = function() {
                  var le = se.error ? se.error : se.transaction.error;
                  H(le);
                };
              } catch (le) {
                H(le);
              }
            });
          }).catch(H);
        });
        return l(O, m), O;
      }
      function ve(v, k) {
        var m = this;
        v = b(v);
        var R = new h(function(O, B) {
          m.ready().then(function() {
            M(m._dbInfo, y, function(H, j) {
              if (H)
                return B(H);
              try {
                var V = j.objectStore(m._dbInfo.storeName), K = V.delete(v);
                j.oncomplete = function() {
                  O();
                }, j.onerror = function() {
                  B(K.error);
                }, j.onabort = function() {
                  var G = K.error ? K.error : K.transaction.error;
                  B(G);
                };
              } catch (G) {
                B(G);
              }
            });
          }).catch(B);
        });
        return l(R, k), R;
      }
      function ne(v) {
        var k = this, m = new h(function(R, O) {
          k.ready().then(function() {
            M(k._dbInfo, y, function(B, H) {
              if (B)
                return O(B);
              try {
                var j = H.objectStore(k._dbInfo.storeName), V = j.clear();
                H.oncomplete = function() {
                  R();
                }, H.onabort = H.onerror = function() {
                  var K = V.error ? V.error : V.transaction.error;
                  O(K);
                };
              } catch (K) {
                O(K);
              }
            });
          }).catch(O);
        });
        return l(m, v), m;
      }
      function xe(v) {
        var k = this, m = new h(function(R, O) {
          k.ready().then(function() {
            M(k._dbInfo, x, function(B, H) {
              if (B)
                return O(B);
              try {
                var j = H.objectStore(k._dbInfo.storeName), V = j.count();
                V.onsuccess = function() {
                  R(V.result);
                }, V.onerror = function() {
                  O(V.error);
                };
              } catch (K) {
                O(K);
              }
            });
          }).catch(O);
        });
        return l(m, v), m;
      }
      function _e(v, k) {
        var m = this, R = new h(function(O, B) {
          if (v < 0) {
            O(null);
            return;
          }
          m.ready().then(function() {
            M(m._dbInfo, x, function(H, j) {
              if (H)
                return B(H);
              try {
                var V = j.objectStore(m._dbInfo.storeName), K = !1, G = V.openKeyCursor();
                G.onsuccess = function() {
                  var Q = G.result;
                  if (!Q) {
                    O(null);
                    return;
                  }
                  v === 0 || K ? O(Q.key) : (K = !0, Q.advance(v));
                }, G.onerror = function() {
                  B(G.error);
                };
              } catch (Q) {
                B(Q);
              }
            });
          }).catch(B);
        });
        return l(R, k), R;
      }
      function Ge(v) {
        var k = this, m = new h(function(R, O) {
          k.ready().then(function() {
            M(k._dbInfo, x, function(B, H) {
              if (B)
                return O(B);
              try {
                var j = H.objectStore(k._dbInfo.storeName), V = j.openKeyCursor(), K = [];
                V.onsuccess = function() {
                  var G = V.result;
                  if (!G) {
                    R(K);
                    return;
                  }
                  K.push(G.key), G.continue();
                }, V.onerror = function() {
                  O(V.error);
                };
              } catch (G) {
                O(G);
              }
            });
          }).catch(O);
        });
        return l(m, v), m;
      }
      function De(v, k) {
        k = g.apply(this, arguments);
        var m = this.config();
        v = typeof v != "function" && v || {}, v.name || (v.name = v.name || m.name, v.storeName = v.storeName || m.storeName);
        var R = this, O;
        if (!v.name)
          O = h.reject("Invalid arguments");
        else {
          var B = v.name === m.name && R._dbInfo.db, H = B ? h.resolve(R._dbInfo.db) : I(v).then(function(j) {
            var V = w[v.name], K = V.forages;
            V.db = j;
            for (var G = 0; G < K.length; G++)
              K[G]._dbInfo.db = j;
            return j;
          });
          v.storeName ? O = H.then(function(j) {
            if (j.objectStoreNames.contains(v.storeName)) {
              var V = j.version + 1;
              D(v);
              var K = w[v.name], G = K.forages;
              j.close();
              for (var Q = 0; Q < G.length; Q++) {
                var se = G[Q];
                se._dbInfo.db = null, se._dbInfo.version = V;
              }
              var le = new h(function(he, ge) {
                var be = f.open(v.name, V);
                be.onerror = function(Le) {
                  var Dt = be.result;
                  Dt.close(), ge(Le);
                }, be.onupgradeneeded = function() {
                  var Le = be.result;
                  Le.deleteObjectStore(v.storeName);
                }, be.onsuccess = function() {
                  var Le = be.result;
                  Le.close(), he(Le);
                };
              });
              return le.then(function(he) {
                K.db = he;
                for (var ge = 0; ge < G.length; ge++) {
                  var be = G[ge];
                  be._dbInfo.db = he, S(be._dbInfo);
                }
              }).catch(function(he) {
                throw (A(v, he) || h.resolve()).catch(function() {
                }), he;
              });
            }
          }) : O = H.then(function(j) {
            D(v);
            var V = w[v.name], K = V.forages;
            j.close();
            for (var G = 0; G < K.length; G++) {
              var Q = K[G];
              Q._dbInfo.db = null;
            }
            var se = new h(function(le, he) {
              var ge = f.deleteDatabase(v.name);
              ge.onerror = function() {
                var be = ge.result;
                be && be.close(), he(ge.error);
              }, ge.onblocked = function() {
                console.warn('dropInstance blocked for database "' + v.name + '" until all open connections are closed');
              }, ge.onsuccess = function() {
                var be = ge.result;
                be && be.close(), le(be);
              };
            });
            return se.then(function(le) {
              V.db = le;
              for (var he = 0; he < K.length; he++) {
                var ge = K[he];
                S(ge._dbInfo);
              }
            }).catch(function(le) {
              throw (A(v, le) || h.resolve()).catch(function() {
              }), le;
            });
          });
        }
        return l(O, k), O;
      }
      var Ne = {
        _driver: "asyncStorage",
        _initStorage: q,
        _support: a(),
        iterate: ae,
        getItem: W,
        setItem: ue,
        removeItem: ve,
        clear: ne,
        length: xe,
        key: _e,
        keys: Ge,
        dropInstance: De
      };
      function Ce() {
        return typeof openDatabase == "function";
      }
      var Oe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ct = "~~local_forage_type~", ft = /^~~local_forage_type~([^~]+)~/, Ue = "__lfsc__:", ut = Ue.length, Ze = "arbf", Be = "blob", Ae = "si08", $e = "ui08", lt = "uic8", Bt = "si16", Xe = "si32", tt = "ur16", Yt = "ui32", At = "fl32", Rt = "fl64", Qe = ut + Ze.length, rt = Object.prototype.toString;
      function jt(v) {
        var k = v.length * 0.75, m = v.length, R, O = 0, B, H, j, V;
        v[v.length - 1] === "=" && (k--, v[v.length - 2] === "=" && k--);
        var K = new ArrayBuffer(k), G = new Uint8Array(K);
        for (R = 0; R < m; R += 4)
          B = Oe.indexOf(v[R]), H = Oe.indexOf(v[R + 1]), j = Oe.indexOf(v[R + 2]), V = Oe.indexOf(v[R + 3]), G[O++] = B << 2 | H >> 4, G[O++] = (H & 15) << 4 | j >> 2, G[O++] = (j & 3) << 6 | V & 63;
        return K;
      }
      function gt(v) {
        var k = new Uint8Array(v), m = "", R;
        for (R = 0; R < k.length; R += 3)
          m += Oe[k[R] >> 2], m += Oe[(k[R] & 3) << 4 | k[R + 1] >> 4], m += Oe[(k[R + 1] & 15) << 2 | k[R + 2] >> 6], m += Oe[k[R + 2] & 63];
        return k.length % 3 === 2 ? m = m.substring(0, m.length - 1) + "=" : k.length % 3 === 1 && (m = m.substring(0, m.length - 2) + "=="), m;
      }
      function Vt(v, k) {
        var m = "";
        if (v && (m = rt.call(v)), v && (m === "[object ArrayBuffer]" || v.buffer && rt.call(v.buffer) === "[object ArrayBuffer]")) {
          var R, O = Ue;
          v instanceof ArrayBuffer ? (R = v, O += Ze) : (R = v.buffer, m === "[object Int8Array]" ? O += Ae : m === "[object Uint8Array]" ? O += $e : m === "[object Uint8ClampedArray]" ? O += lt : m === "[object Int16Array]" ? O += Bt : m === "[object Uint16Array]" ? O += tt : m === "[object Int32Array]" ? O += Xe : m === "[object Uint32Array]" ? O += Yt : m === "[object Float32Array]" ? O += At : m === "[object Float64Array]" ? O += Rt : k(new Error("Failed to get type for BinaryArray"))), k(O + gt(R));
        } else if (m === "[object Blob]") {
          var B = new FileReader();
          B.onload = function() {
            var H = ct + v.type + "~" + gt(this.result);
            k(Ue + Be + H);
          }, B.readAsArrayBuffer(v);
        } else
          try {
            k(JSON.stringify(v));
          } catch (H) {
            console.error("Couldn't convert value into a JSON string: ", v), k(null, H);
          }
      }
      function hn(v) {
        if (v.substring(0, ut) !== Ue)
          return JSON.parse(v);
        var k = v.substring(Qe), m = v.substring(ut, Qe), R;
        if (m === Be && ft.test(k)) {
          var O = k.match(ft);
          R = O[1], k = k.substring(O[0].length);
        }
        var B = jt(k);
        switch (m) {
          case Ze:
            return B;
          case Be:
            return u([B], { type: R });
          case Ae:
            return new Int8Array(B);
          case $e:
            return new Uint8Array(B);
          case lt:
            return new Uint8ClampedArray(B);
          case Bt:
            return new Int16Array(B);
          case tt:
            return new Uint16Array(B);
          case Xe:
            return new Int32Array(B);
          case Yt:
            return new Uint32Array(B);
          case At:
            return new Float32Array(B);
          case Rt:
            return new Float64Array(B);
          default:
            throw new Error("Unkown type: " + m);
        }
      }
      var Tt = {
        serialize: Vt,
        deserialize: hn,
        stringToBuffer: jt,
        bufferToString: gt
      };
      function Nt(v, k, m, R) {
        v.executeSql("CREATE TABLE IF NOT EXISTS " + k.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], m, R);
      }
      function dn(v) {
        var k = this, m = {
          db: null
        };
        if (v)
          for (var R in v)
            m[R] = typeof v[R] != "string" ? v[R].toString() : v[R];
        var O = new h(function(B, H) {
          try {
            m.db = openDatabase(m.name, String(m.version), m.description, m.size);
          } catch (j) {
            return H(j);
          }
          m.db.transaction(function(j) {
            Nt(j, m, function() {
              k._dbInfo = m, B();
            }, function(V, K) {
              H(K);
            });
          }, H);
        });
        return m.serializer = Tt, O;
      }
      function He(v, k, m, R, O, B) {
        v.executeSql(m, R, O, function(H, j) {
          j.code === j.SYNTAX_ERR ? H.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [k.storeName], function(V, K) {
            K.rows.length ? B(V, j) : Nt(V, k, function() {
              V.executeSql(m, R, O, B);
            }, B);
          }, B) : B(H, j);
        }, B);
      }
      function pn(v, k) {
        var m = this;
        v = b(v);
        var R = new h(function(O, B) {
          m.ready().then(function() {
            var H = m._dbInfo;
            H.db.transaction(function(j) {
              He(j, H, "SELECT * FROM " + H.storeName + " WHERE key = ? LIMIT 1", [v], function(V, K) {
                var G = K.rows.length ? K.rows.item(0).value : null;
                G && (G = H.serializer.deserialize(G)), O(G);
              }, function(V, K) {
                B(K);
              });
            });
          }).catch(B);
        });
        return l(R, k), R;
      }
      function Kt(v, k) {
        var m = this, R = new h(function(O, B) {
          m.ready().then(function() {
            var H = m._dbInfo;
            H.db.transaction(function(j) {
              He(j, H, "SELECT * FROM " + H.storeName, [], function(V, K) {
                for (var G = K.rows, Q = G.length, se = 0; se < Q; se++) {
                  var le = G.item(se), he = le.value;
                  if (he && (he = H.serializer.deserialize(he)), he = v(he, le.key, se + 1), he !== void 0) {
                    O(he);
                    return;
                  }
                }
                O();
              }, function(V, K) {
                B(K);
              });
            });
          }).catch(B);
        });
        return l(R, k), R;
      }
      function Gt(v, k, m, R) {
        var O = this;
        v = b(v);
        var B = new h(function(H, j) {
          O.ready().then(function() {
            k === void 0 && (k = null);
            var V = k, K = O._dbInfo;
            K.serializer.serialize(k, function(G, Q) {
              Q ? j(Q) : K.db.transaction(function(se) {
                He(se, K, "INSERT OR REPLACE INTO " + K.storeName + " (key, value) VALUES (?, ?)", [v, G], function() {
                  H(V);
                }, function(le, he) {
                  j(he);
                });
              }, function(se) {
                if (se.code === se.QUOTA_ERR) {
                  if (R > 0) {
                    H(Gt.apply(O, [v, V, m, R - 1]));
                    return;
                  }
                  j(se);
                }
              });
            });
          }).catch(j);
        });
        return l(B, m), B;
      }
      function vn(v, k, m) {
        return Gt.apply(this, [v, k, m, 1]);
      }
      function xn(v, k) {
        var m = this;
        v = b(v);
        var R = new h(function(O, B) {
          m.ready().then(function() {
            var H = m._dbInfo;
            H.db.transaction(function(j) {
              He(j, H, "DELETE FROM " + H.storeName + " WHERE key = ?", [v], function() {
                O();
              }, function(V, K) {
                B(K);
              });
            });
          }).catch(B);
        });
        return l(R, k), R;
      }
      function Zt(v) {
        var k = this, m = new h(function(R, O) {
          k.ready().then(function() {
            var B = k._dbInfo;
            B.db.transaction(function(H) {
              He(H, B, "DELETE FROM " + B.storeName, [], function() {
                R();
              }, function(j, V) {
                O(V);
              });
            });
          }).catch(O);
        });
        return l(m, v), m;
      }
      function bn(v) {
        var k = this, m = new h(function(R, O) {
          k.ready().then(function() {
            var B = k._dbInfo;
            B.db.transaction(function(H) {
              He(H, B, "SELECT COUNT(key) as c FROM " + B.storeName, [], function(j, V) {
                var K = V.rows.item(0).c;
                R(K);
              }, function(j, V) {
                O(V);
              });
            });
          }).catch(O);
        });
        return l(m, v), m;
      }
      function gn(v, k) {
        var m = this, R = new h(function(O, B) {
          m.ready().then(function() {
            var H = m._dbInfo;
            H.db.transaction(function(j) {
              He(j, H, "SELECT key FROM " + H.storeName + " WHERE id = ? LIMIT 1", [v + 1], function(V, K) {
                var G = K.rows.length ? K.rows.item(0).key : null;
                O(G);
              }, function(V, K) {
                B(K);
              });
            });
          }).catch(B);
        });
        return l(R, k), R;
      }
      function Xt(v) {
        var k = this, m = new h(function(R, O) {
          k.ready().then(function() {
            var B = k._dbInfo;
            B.db.transaction(function(H) {
              He(H, B, "SELECT key FROM " + B.storeName, [], function(j, V) {
                for (var K = [], G = 0; G < V.rows.length; G++)
                  K.push(V.rows.item(G).key);
                R(K);
              }, function(j, V) {
                O(V);
              });
            });
          }).catch(O);
        });
        return l(m, v), m;
      }
      function mn(v) {
        return new h(function(k, m) {
          v.transaction(function(R) {
            R.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(O, B) {
              for (var H = [], j = 0; j < B.rows.length; j++)
                H.push(B.rows.item(j).name);
              k({
                db: v,
                storeNames: H
              });
            }, function(O, B) {
              m(B);
            });
          }, function(R) {
            m(R);
          });
        });
      }
      function Qt(v, k) {
        k = g.apply(this, arguments);
        var m = this.config();
        v = typeof v != "function" && v || {}, v.name || (v.name = v.name || m.name, v.storeName = v.storeName || m.storeName);
        var R = this, O;
        return v.name ? O = new h(function(B) {
          var H;
          v.name === m.name ? H = R._dbInfo.db : H = openDatabase(v.name, "", "", 0), v.storeName ? B({
            db: H,
            storeNames: [v.storeName]
          }) : B(mn(H));
        }).then(function(B) {
          return new h(function(H, j) {
            B.db.transaction(function(V) {
              function K(le) {
                return new h(function(he, ge) {
                  V.executeSql("DROP TABLE IF EXISTS " + le, [], function() {
                    he();
                  }, function(be, Le) {
                    ge(Le);
                  });
                });
              }
              for (var G = [], Q = 0, se = B.storeNames.length; Q < se; Q++)
                G.push(K(B.storeNames[Q]));
              h.all(G).then(function() {
                H();
              }).catch(function(le) {
                j(le);
              });
            }, function(V) {
              j(V);
            });
          });
        }) : O = h.reject("Invalid arguments"), l(O, k), O;
      }
      var Re = {
        _driver: "webSQLStorage",
        _initStorage: dn,
        _support: Ce(),
        iterate: Kt,
        getItem: pn,
        setItem: vn,
        removeItem: xn,
        clear: Zt,
        length: bn,
        key: gn,
        keys: Xt,
        dropInstance: Qt
      };
      function Ye() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function Ot(v, k) {
        var m = v.name + "/";
        return v.storeName !== k.storeName && (m += v.storeName + "/"), m;
      }
      function yn() {
        var v = "_localforage_support_test";
        try {
          return localStorage.setItem(v, !0), localStorage.removeItem(v), !1;
        } catch {
          return !0;
        }
      }
      function No() {
        return !yn() || localStorage.length > 0;
      }
      function Oo(v) {
        var k = this, m = {};
        if (v)
          for (var R in v)
            m[R] = v[R];
        return m.keyPrefix = Ot(v, k._defaultConfig), No() ? (k._dbInfo = m, m.serializer = Tt, h.resolve()) : h.reject();
      }
      function Io(v) {
        var k = this, m = k.ready().then(function() {
          for (var R = k._dbInfo.keyPrefix, O = localStorage.length - 1; O >= 0; O--) {
            var B = localStorage.key(O);
            B.indexOf(R) === 0 && localStorage.removeItem(B);
          }
        });
        return l(m, v), m;
      }
      function Do(v, k) {
        var m = this;
        v = b(v);
        var R = m.ready().then(function() {
          var O = m._dbInfo, B = localStorage.getItem(O.keyPrefix + v);
          return B && (B = O.serializer.deserialize(B)), B;
        });
        return l(R, k), R;
      }
      function Lo(v, k) {
        var m = this, R = m.ready().then(function() {
          for (var O = m._dbInfo, B = O.keyPrefix, H = B.length, j = localStorage.length, V = 1, K = 0; K < j; K++) {
            var G = localStorage.key(K);
            if (G.indexOf(B) === 0) {
              var Q = localStorage.getItem(G);
              if (Q && (Q = O.serializer.deserialize(Q)), Q = v(Q, G.substring(H), V++), Q !== void 0)
                return Q;
            }
          }
        });
        return l(R, k), R;
      }
      function Po(v, k) {
        var m = this, R = m.ready().then(function() {
          var O = m._dbInfo, B;
          try {
            B = localStorage.key(v);
          } catch {
            B = null;
          }
          return B && (B = B.substring(O.keyPrefix.length)), B;
        });
        return l(R, k), R;
      }
      function Mo(v) {
        var k = this, m = k.ready().then(function() {
          for (var R = k._dbInfo, O = localStorage.length, B = [], H = 0; H < O; H++) {
            var j = localStorage.key(H);
            j.indexOf(R.keyPrefix) === 0 && B.push(j.substring(R.keyPrefix.length));
          }
          return B;
        });
        return l(m, v), m;
      }
      function Fo(v) {
        var k = this, m = k.keys().then(function(R) {
          return R.length;
        });
        return l(m, v), m;
      }
      function $o(v, k) {
        var m = this;
        v = b(v);
        var R = m.ready().then(function() {
          var O = m._dbInfo;
          localStorage.removeItem(O.keyPrefix + v);
        });
        return l(R, k), R;
      }
      function Ho(v, k, m) {
        var R = this;
        v = b(v);
        var O = R.ready().then(function() {
          k === void 0 && (k = null);
          var B = k;
          return new h(function(H, j) {
            var V = R._dbInfo;
            V.serializer.serialize(k, function(K, G) {
              if (G)
                j(G);
              else
                try {
                  localStorage.setItem(V.keyPrefix + v, K), H(B);
                } catch (Q) {
                  (Q.name === "QuotaExceededError" || Q.name === "NS_ERROR_DOM_QUOTA_REACHED") && j(Q), j(Q);
                }
            });
          });
        });
        return l(O, m), O;
      }
      function zo(v, k) {
        if (k = g.apply(this, arguments), v = typeof v != "function" && v || {}, !v.name) {
          var m = this.config();
          v.name = v.name || m.name, v.storeName = v.storeName || m.storeName;
        }
        var R = this, O;
        return v.name ? O = new h(function(B) {
          v.storeName ? B(Ot(v, R._defaultConfig)) : B(v.name + "/");
        }).then(function(B) {
          for (var H = localStorage.length - 1; H >= 0; H--) {
            var j = localStorage.key(H);
            j.indexOf(B) === 0 && localStorage.removeItem(j);
          }
        }) : O = h.reject("Invalid arguments"), l(O, k), O;
      }
      var qo = {
        _driver: "localStorageWrapper",
        _initStorage: Oo,
        _support: Ye(),
        iterate: Lo,
        getItem: Do,
        setItem: Ho,
        removeItem: $o,
        clear: Io,
        length: Fo,
        key: Po,
        keys: Mo,
        dropInstance: zo
      }, Wo = function(k, m) {
        return k === m || typeof k == "number" && typeof m == "number" && isNaN(k) && isNaN(m);
      }, Uo = function(k, m) {
        for (var R = k.length, O = 0; O < R; ) {
          if (Wo(k[O], m))
            return !0;
          O++;
        }
        return !1;
      }, l0 = Array.isArray || function(v) {
        return Object.prototype.toString.call(v) === "[object Array]";
      }, It = {}, h0 = {}, mt = {
        INDEXEDDB: Ne,
        WEBSQL: Re,
        LOCALSTORAGE: qo
      }, Yo = [mt.INDEXEDDB._driver, mt.WEBSQL._driver, mt.LOCALSTORAGE._driver], Jt = ["dropInstance"], wn = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Jt), jo = {
        description: "",
        driver: Yo.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function Vo(v, k) {
        v[k] = function() {
          var m = arguments;
          return v.ready().then(function() {
            return v[k].apply(v, m);
          });
        };
      }
      function _n() {
        for (var v = 1; v < arguments.length; v++) {
          var k = arguments[v];
          if (k)
            for (var m in k)
              k.hasOwnProperty(m) && (l0(k[m]) ? arguments[0][m] = k[m].slice() : arguments[0][m] = k[m]);
        }
        return arguments[0];
      }
      var Ko = function() {
        function v(k) {
          s(this, v);
          for (var m in mt)
            if (mt.hasOwnProperty(m)) {
              var R = mt[m], O = R._driver;
              this[m] = O, It[O] || this.defineDriver(R);
            }
          this._defaultConfig = _n({}, jo), this._config = _n({}, this._defaultConfig, k), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return v.prototype.config = function(m) {
          if ((typeof m > "u" ? "undefined" : o(m)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var R in m) {
              if (R === "storeName" && (m[R] = m[R].replace(/\W/g, "_")), R === "version" && typeof m[R] != "number")
                return new Error("Database version must be a number.");
              this._config[R] = m[R];
            }
            return "driver" in m && m.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof m == "string" ? this._config[m] : this._config;
        }, v.prototype.defineDriver = function(m, R, O) {
          var B = new h(function(H, j) {
            try {
              var V = m._driver, K = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!m._driver) {
                j(K);
                return;
              }
              for (var G = wn.concat("_initStorage"), Q = 0, se = G.length; Q < se; Q++) {
                var le = G[Q], he = !Uo(Jt, le);
                if ((he || m[le]) && typeof m[le] != "function") {
                  j(K);
                  return;
                }
              }
              var ge = function() {
                for (var Dt = function(Xo) {
                  return function() {
                    var Qo = new Error("Method " + Xo + " is not implemented by the current driver"), d0 = h.reject(Qo);
                    return l(d0, arguments[arguments.length - 1]), d0;
                  };
                }, En = 0, Zo = Jt.length; En < Zo; En++) {
                  var Sn = Jt[En];
                  m[Sn] || (m[Sn] = Dt(Sn));
                }
              };
              ge();
              var be = function(Dt) {
                It[V] && console.info("Redefining LocalForage driver: " + V), It[V] = m, h0[V] = Dt, H();
              };
              "_support" in m ? m._support && typeof m._support == "function" ? m._support().then(be, j) : be(!!m._support) : be(!0);
            } catch (Le) {
              j(Le);
            }
          });
          return p(B, R, O), B;
        }, v.prototype.driver = function() {
          return this._driver || null;
        }, v.prototype.getDriver = function(m, R, O) {
          var B = It[m] ? h.resolve(It[m]) : h.reject(new Error("Driver not found."));
          return p(B, R, O), B;
        }, v.prototype.getSerializer = function(m) {
          var R = h.resolve(Tt);
          return p(R, m), R;
        }, v.prototype.ready = function(m) {
          var R = this, O = R._driverSet.then(function() {
            return R._ready === null && (R._ready = R._initDriver()), R._ready;
          });
          return p(O, m, m), O;
        }, v.prototype.setDriver = function(m, R, O) {
          var B = this;
          l0(m) || (m = [m]);
          var H = this._getSupportedDrivers(m);
          function j() {
            B._config.driver = B.driver();
          }
          function V(Q) {
            return B._extend(Q), j(), B._ready = B._initStorage(B._config), B._ready;
          }
          function K(Q) {
            return function() {
              var se = 0;
              function le() {
                for (; se < Q.length; ) {
                  var he = Q[se];
                  return se++, B._dbInfo = null, B._ready = null, B.getDriver(he).then(V).catch(le);
                }
                j();
                var ge = new Error("No available storage method found.");
                return B._driverSet = h.reject(ge), B._driverSet;
              }
              return le();
            };
          }
          var G = this._driverSet !== null ? this._driverSet.catch(function() {
            return h.resolve();
          }) : h.resolve();
          return this._driverSet = G.then(function() {
            var Q = H[0];
            return B._dbInfo = null, B._ready = null, B.getDriver(Q).then(function(se) {
              B._driver = se._driver, j(), B._wrapLibraryMethodsWithReady(), B._initDriver = K(H);
            });
          }).catch(function() {
            j();
            var Q = new Error("No available storage method found.");
            return B._driverSet = h.reject(Q), B._driverSet;
          }), p(this._driverSet, R, O), this._driverSet;
        }, v.prototype.supports = function(m) {
          return !!h0[m];
        }, v.prototype._extend = function(m) {
          _n(this, m);
        }, v.prototype._getSupportedDrivers = function(m) {
          for (var R = [], O = 0, B = m.length; O < B; O++) {
            var H = m[O];
            this.supports(H) && R.push(H);
          }
          return R;
        }, v.prototype._wrapLibraryMethodsWithReady = function() {
          for (var m = 0, R = wn.length; m < R; m++)
            Vo(this, wn[m]);
        }, v.prototype.createInstance = function(m) {
          return new v(m);
        }, v;
      }(), Go = new Ko();
      n.exports = Go;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(Oc);
const Ic = qn, Ve = /* @__PURE__ */ Object.create(null);
Ve.open = "0";
Ve.close = "1";
Ve.ping = "2";
Ve.pong = "3";
Ve.message = "4";
Ve.upgrade = "5";
Ve.noop = "6";
const hr = /* @__PURE__ */ Object.create(null);
Object.keys(Ve).forEach((e) => {
  hr[Ve[e]] = e;
});
const Dc = { type: "error", data: "parser error" }, Lc = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Pc = typeof ArrayBuffer == "function", Mc = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, no = ({ type: e, data: t }, r, n) => Lc && t instanceof Blob ? r ? n(t) : xi(t, n) : Pc && (t instanceof ArrayBuffer || Mc(t)) ? r ? n(t) : xi(new Blob([t]), n) : n(Ve[e] + (t || "")), xi = (e, t) => {
  const r = new FileReader();
  return r.onload = function() {
    const n = r.result.split(",")[1];
    t("b" + (n || ""));
  }, r.readAsDataURL(e);
}, bi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ft = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < bi.length; e++)
  Ft[bi.charCodeAt(e)] = e;
const Fc = (e) => {
  let t = e.length * 0.75, r = e.length, n, i = 0, o, s, c, f;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const a = new ArrayBuffer(t), u = new Uint8Array(a);
  for (n = 0; n < r; n += 4)
    o = Ft[e.charCodeAt(n)], s = Ft[e.charCodeAt(n + 1)], c = Ft[e.charCodeAt(n + 2)], f = Ft[e.charCodeAt(n + 3)], u[i++] = o << 2 | s >> 4, u[i++] = (s & 15) << 4 | c >> 2, u[i++] = (c & 3) << 6 | f & 63;
  return a;
}, $c = typeof ArrayBuffer == "function", io = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: oo(e, t)
    };
  const r = e.charAt(0);
  return r === "b" ? {
    type: "message",
    data: Hc(e.substring(1), t)
  } : hr[r] ? e.length > 1 ? {
    type: hr[r],
    data: e.substring(1)
  } : {
    type: hr[r]
  } : Dc;
}, Hc = (e, t) => {
  if ($c) {
    const r = Fc(e);
    return oo(r, t);
  } else
    return { base64: !0, data: e };
}, oo = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof ArrayBuffer ? new Blob([e]) : e;
    case "arraybuffer":
    default:
      return e;
  }
}, so = String.fromCharCode(30), zc = (e, t) => {
  const r = e.length, n = new Array(r);
  let i = 0;
  e.forEach((o, s) => {
    no(o, !1, (c) => {
      n[s] = c, ++i === r && t(n.join(so));
    });
  });
}, qc = (e, t) => {
  const r = e.split(so), n = [];
  for (let i = 0; i < r.length; i++) {
    const o = io(r[i], t);
    if (n.push(o), o.type === "error")
      break;
  }
  return n;
}, ao = 4;
function me(e) {
  if (e)
    return Wc(e);
}
function Wc(e) {
  for (var t in me.prototype)
    e[t] = me.prototype[t];
  return e;
}
me.prototype.on = me.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
me.prototype.once = function(e, t) {
  function r() {
    this.off(e, r), t.apply(this, arguments);
  }
  return r.fn = t, this.on(e, r), this;
};
me.prototype.off = me.prototype.removeListener = me.prototype.removeAllListeners = me.prototype.removeEventListener = function(e, t) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var r = this._callbacks["$" + e];
  if (!r)
    return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var n, i = 0; i < r.length; i++)
    if (n = r[i], n === t || n.fn === t) {
      r.splice(i, 1);
      break;
    }
  return r.length === 0 && delete this._callbacks["$" + e], this;
};
me.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), r = this._callbacks["$" + e], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (r) {
    r = r.slice(0);
    for (var n = 0, i = r.length; n < i; ++n)
      r[n].apply(this, t);
  }
  return this;
};
me.prototype.emitReserved = me.prototype.emit;
me.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
me.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const Fe = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();
function co(e, ...t) {
  return t.reduce((r, n) => (e.hasOwnProperty(n) && (r[n] = e[n]), r), {});
}
const Uc = Fe.setTimeout, Yc = Fe.clearTimeout;
function cn(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = Uc.bind(Fe), e.clearTimeoutFn = Yc.bind(Fe)) : (e.setTimeoutFn = Fe.setTimeout.bind(Fe), e.clearTimeoutFn = Fe.clearTimeout.bind(Fe));
}
const jc = 1.33;
function Vc(e) {
  return typeof e == "string" ? Kc(e) : Math.ceil((e.byteLength || e.size) * jc);
}
function Kc(e) {
  let t = 0, r = 0;
  for (let n = 0, i = e.length; n < i; n++)
    t = e.charCodeAt(n), t < 128 ? r += 1 : t < 2048 ? r += 2 : t < 55296 || t >= 57344 ? r += 3 : (n++, r += 4);
  return r;
}
class Gc extends Error {
  constructor(t, r, n) {
    super(t), this.description = r, this.context = n, this.type = "TransportError";
  }
}
class fo extends me {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, cn(this, t), this.opts = t, this.query = t.query, this.socket = t.socket;
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
  onError(t, r, n) {
    return super.emitReserved("error", new Gc(t, r, n)), this;
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
  send(t) {
    this.readyState === "open" && this.write(t);
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
  onData(t) {
    const r = io(t, this.socket.binaryType);
    this.onPacket(r);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(t) {
    this.readyState = "closed", super.emitReserved("close", t);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(t) {
  }
}
const uo = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), Wn = 64, Zc = {};
let gi = 0, ar = 0, mi;
function yi(e) {
  let t = "";
  do
    t = uo[e % Wn] + t, e = Math.floor(e / Wn);
  while (e > 0);
  return t;
}
function lo() {
  const e = yi(+/* @__PURE__ */ new Date());
  return e !== mi ? (gi = 0, mi = e) : e + "." + yi(gi++);
}
for (; ar < Wn; ar++)
  Zc[uo[ar]] = ar;
function ho(e) {
  let t = "";
  for (let r in e)
    e.hasOwnProperty(r) && (t.length && (t += "&"), t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
  return t;
}
function Xc(e) {
  let t = {}, r = e.split("&");
  for (let n = 0, i = r.length; n < i; n++) {
    let o = r[n].split("=");
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return t;
}
let po = !1;
try {
  po = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Qc = po;
function vo(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || Qc))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new Fe[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function Jc() {
}
const ef = function() {
  return new vo({
    xdomain: !1
  }).responseType != null;
}();
class tf extends fo {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(t) {
    if (super(t), this.polling = !1, typeof location < "u") {
      const n = location.protocol === "https:";
      let i = location.port;
      i || (i = n ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || i !== t.port, this.xs = t.secure !== n;
    }
    const r = t && t.forceBase64;
    this.supportsBinary = ef && !r;
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
  pause(t) {
    this.readyState = "pausing";
    const r = () => {
      this.readyState = "paused", t();
    };
    if (this.polling || !this.writable) {
      let n = 0;
      this.polling && (n++, this.once("pollComplete", function() {
        --n || r();
      })), this.writable || (n++, this.once("drain", function() {
        --n || r();
      }));
    } else
      r();
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
  onData(t) {
    const r = (n) => {
      if (this.readyState === "opening" && n.type === "open" && this.onOpen(), n.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(n);
    };
    qc(t, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(t) {
    this.writable = !1, zc(t, (r) => {
      this.doWrite(r, () => {
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
    let t = this.query || {};
    const r = this.opts.secure ? "https" : "http";
    let n = "";
    this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = lo()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.opts.port && (r === "https" && Number(this.opts.port) !== 443 || r === "http" && Number(this.opts.port) !== 80) && (n = ":" + this.opts.port);
    const i = ho(t), o = this.opts.hostname.indexOf(":") !== -1;
    return r + "://" + (o ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(t = {}) {
    return Object.assign(t, { xd: this.xd, xs: this.xs }, this.opts), new je(this.uri(), t);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(t, r) {
    const n = this.request({
      method: "POST",
      data: t
    });
    n.on("success", r), n.on("error", (i, o) => {
      this.onError("xhr post error", i, o);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)), t.on("error", (r, n) => {
      this.onError("xhr poll error", r, n);
    }), this.pollXhr = t;
  }
}
class je extends me {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, r) {
    super(), cn(this, r), this.opts = r, this.method = r.method || "GET", this.uri = t, this.async = r.async !== !1, this.data = r.data !== void 0 ? r.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    const t = co(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    t.xdomain = !!this.opts.xd, t.xscheme = !!this.opts.xs;
    const r = this.xhr = new vo(t);
    try {
      r.open(this.method, this.uri, this.async);
      try {
        if (this.opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let n in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(n) && r.setRequestHeader(n, this.opts.extraHeaders[n]);
        }
      } catch {
      }
      if (this.method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {
      }
      "withCredentials" in r && (r.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (r.timeout = this.opts.requestTimeout), r.onreadystatechange = () => {
        r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
          this.onError(typeof r.status == "number" ? r.status : 0);
        }, 0));
      }, r.send(this.data);
    } catch (n) {
      this.setTimeoutFn(() => {
        this.onError(n);
      }, 0);
      return;
    }
    typeof document < "u" && (this.index = je.requestsCount++, je.requests[this.index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  onError(t) {
    this.emitReserved("error", t, this.xhr), this.cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  cleanup(t) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (this.xhr.onreadystatechange = Jc, t)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete je.requests[this.index], this.xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  onLoad() {
    const t = this.xhr.responseText;
    t !== null && (this.emitReserved("data", t), this.emitReserved("success"), this.cleanup());
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
je.requestsCount = 0;
je.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", wi);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in Fe ? "pagehide" : "unload";
    addEventListener(e, wi, !1);
  }
}
function wi() {
  for (let e in je.requests)
    je.requests.hasOwnProperty(e) && je.requests[e].abort();
}
const xo = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, r) => r(t, 0))(), cr = Fe.WebSocket || Fe.MozWebSocket, _i = !0, rf = "arraybuffer", Ei = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class nf extends fo {
  /**
   * WebSocket transport constructor.
   *
   * @param {Object} opts - connection options
   * @protected
   */
  constructor(t) {
    super(t), this.supportsBinary = !t.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check())
      return;
    const t = this.uri(), r = this.opts.protocols, n = Ei ? {} : co(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = _i && !Ei ? r ? new cr(t, r) : new cr(t) : new cr(t, r, n);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this.ws.binaryType = this.socket.binaryType || rf, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (t) => this.onClose({
      description: "websocket connection closed",
      context: t
    }), this.ws.onmessage = (t) => this.onData(t.data), this.ws.onerror = (t) => this.onError("websocket error", t);
  }
  write(t) {
    this.writable = !1;
    for (let r = 0; r < t.length; r++) {
      const n = t[r], i = r === t.length - 1;
      no(n, this.supportsBinary, (o) => {
        const s = {};
        try {
          _i && this.ws.send(o);
        } catch {
        }
        i && xo(() => {
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
    let t = this.query || {};
    const r = this.opts.secure ? "wss" : "ws";
    let n = "";
    this.opts.port && (r === "wss" && Number(this.opts.port) !== 443 || r === "ws" && Number(this.opts.port) !== 80) && (n = ":" + this.opts.port), this.opts.timestampRequests && (t[this.opts.timestampParam] = lo()), this.supportsBinary || (t.b64 = 1);
    const i = ho(t), o = this.opts.hostname.indexOf(":") !== -1;
    return r + "://" + (o ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!cr;
  }
}
const of = {
  websocket: nf,
  polling: tf
}, sf = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, af = [
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
function Un(e) {
  const t = e, r = e.indexOf("["), n = e.indexOf("]");
  r != -1 && n != -1 && (e = e.substring(0, r) + e.substring(r, n).replace(/:/g, ";") + e.substring(n, e.length));
  let i = sf.exec(e || ""), o = {}, s = 14;
  for (; s--; )
    o[af[s]] = i[s] || "";
  return r != -1 && n != -1 && (o.source = t, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"), o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o.ipv6uri = !0), o.pathNames = cf(o, o.path), o.queryKey = ff(o, o.query), o;
}
function cf(e, t) {
  const r = /\/{2,9}/g, n = t.replace(r, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && n.splice(0, 1), t.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function ff(e, t) {
  const r = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, i, o) {
    i && (r[i] = o);
  }), r;
}
let bo = class wt extends me {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, r = {}) {
    super(), this.writeBuffer = [], t && typeof t == "object" && (r = t, t = null), t ? (t = Un(t), r.hostname = t.host, r.secure = t.protocol === "https" || t.protocol === "wss", r.port = t.port, t.query && (r.query = t.query)) : r.host && (r.hostname = Un(r.host).host), cn(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = r.transports || ["polling", "websocket"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
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
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Xc(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
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
  createTransport(t) {
    const r = Object.assign({}, this.opts.query);
    r.EIO = ao, r.transport = t, this.id && (r.sid = this.id);
    const n = Object.assign({}, this.opts.transportOptions[t], this.opts, {
      query: r,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new of[t](n);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let t;
    if (this.opts.rememberUpgrade && wt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
      t = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else
      t = this.transports[0];
    this.readyState = "opening";
    try {
      t = this.createTransport(t);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    t.open(), this.setTransport(t);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (r) => this.onClose("transport close", r));
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  probe(t) {
    let r = this.createTransport(t), n = !1;
    wt.priorWebsocketSuccess = !1;
    const i = () => {
      n || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (h) => {
        if (!n)
          if (h.type === "pong" && h.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            wt.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (u(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush());
            });
          } else {
            const l = new Error("probe error");
            l.transport = r.name, this.emitReserved("upgradeError", l);
          }
      }));
    };
    function o() {
      n || (n = !0, u(), r.close(), r = null);
    }
    const s = (h) => {
      const l = new Error("probe error: " + h);
      l.transport = r.name, o(), this.emitReserved("upgradeError", l);
    };
    function c() {
      s("transport closed");
    }
    function f() {
      s("socket closed");
    }
    function a(h) {
      r && h.name !== r.name && o();
    }
    const u = () => {
      r.removeListener("open", i), r.removeListener("error", s), r.removeListener("close", c), this.off("close", f), this.off("upgrading", a);
    };
    r.once("open", i), r.once("error", s), r.once("close", c), this.once("close", f), this.once("upgrading", a), r.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", wt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
      let t = 0;
      const r = this.upgrades.length;
      for (; t < r; t++)
        this.probe(this.upgrades[t]);
    }
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  onPacket(t) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
          break;
        case "error":
          const r = new Error("server error");
          r.code = t.data, this.onError(r);
          break;
        case "message":
          this.emitReserved("data", t.data), this.emitReserved("message", t.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(t) {
    this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.maxPayload = t.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout();
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
      const t = this.getWritablePackets();
      this.transport.send(t), this.prevBufferLen = t.length, this.emitReserved("flush");
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
    let r = 1;
    for (let n = 0; n < this.writeBuffer.length; n++) {
      const i = this.writeBuffer[n].data;
      if (i && (r += Vc(i)), n > 0 && r > this.maxPayload)
        return this.writeBuffer.slice(0, n);
      r += 2;
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
  write(t, r, n) {
    return this.sendPacket("message", t, r, n), this;
  }
  send(t, r, n) {
    return this.sendPacket("message", t, r, n), this;
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
  sendPacket(t, r, n, i) {
    if (typeof r == "function" && (i = r, r = void 0), typeof n == "function" && (i = n, n = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    n = n || {}, n.compress = n.compress !== !1;
    const o = {
      type: t,
      data: r,
      options: n
    };
    this.emitReserved("packetCreate", o), this.writeBuffer.push(o), i && this.once("flush", i), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const t = () => {
      this.onClose("forced close"), this.transport.close();
    }, r = () => {
      this.off("upgrade", r), this.off("upgradeError", r), t();
    }, n = () => {
      this.once("upgrade", r), this.once("upgradeError", r);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? n() : t();
    }) : this.upgrading ? n() : t()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  onError(t) {
    wt.priorWebsocketSuccess = !1, this.emitReserved("error", t), this.onClose("transport error", t);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  onClose(t, r) {
    (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", t, r), this.writeBuffer = [], this.prevBufferLen = 0);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  filterUpgrades(t) {
    const r = [];
    let n = 0;
    const i = t.length;
    for (; n < i; n++)
      ~this.transports.indexOf(t[n]) && r.push(t[n]);
    return r;
  }
};
bo.protocol = ao;
function uf(e, t = "", r) {
  let n = e;
  r = r || typeof location < "u" && location, e == null && (e = r.protocol + "//" + r.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = r.protocol + e : e = r.host + e), /^(https?|wss?):\/\//.test(e) || (typeof r < "u" ? e = r.protocol + "//" + e : e = "https://" + e), n = Un(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const o = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + o + ":" + n.port + t, n.href = n.protocol + "://" + o + (r && r.port === n.port ? "" : ":" + n.port), n;
}
const lf = typeof ArrayBuffer == "function", hf = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, go = Object.prototype.toString, df = typeof Blob == "function" || typeof Blob < "u" && go.call(Blob) === "[object BlobConstructor]", pf = typeof File == "function" || typeof File < "u" && go.call(File) === "[object FileConstructor]";
function a0(e) {
  return lf && (e instanceof ArrayBuffer || hf(e)) || df && e instanceof Blob || pf && e instanceof File;
}
function dr(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let r = 0, n = e.length; r < n; r++)
      if (dr(e[r]))
        return !0;
    return !1;
  }
  if (a0(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return dr(e.toJSON(), !0);
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && dr(e[r]))
      return !0;
  return !1;
}
function vf(e) {
  const t = [], r = e.data, n = e;
  return n.data = Yn(r, t), n.attachments = t.length, { packet: n, buffers: t };
}
function Yn(e, t) {
  if (!e)
    return e;
  if (a0(e)) {
    const r = { _placeholder: !0, num: t.length };
    return t.push(e), r;
  } else if (Array.isArray(e)) {
    const r = new Array(e.length);
    for (let n = 0; n < e.length; n++)
      r[n] = Yn(e[n], t);
    return r;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const r = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (r[n] = Yn(e[n], t));
    return r;
  }
  return e;
}
function xf(e, t) {
  return e.data = jn(e.data, t), delete e.attachments, e;
}
function jn(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let r = 0; r < e.length; r++)
      e[r] = jn(e[r], t);
  else if (typeof e == "object")
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (e[r] = jn(e[r], t));
  return e;
}
const bf = 5;
var fe;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(fe || (fe = {}));
class gf {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(t) {
    this.replacer = t;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(t) {
    return (t.type === fe.EVENT || t.type === fe.ACK) && dr(t) ? this.encodeAsBinary({
      type: t.type === fe.EVENT ? fe.BINARY_EVENT : fe.BINARY_ACK,
      nsp: t.nsp,
      data: t.data,
      id: t.id
    }) : [this.encodeAsString(t)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(t) {
    let r = "" + t.type;
    return (t.type === fe.BINARY_EVENT || t.type === fe.BINARY_ACK) && (r += t.attachments + "-"), t.nsp && t.nsp !== "/" && (r += t.nsp + ","), t.id != null && (r += t.id), t.data != null && (r += JSON.stringify(t.data, this.replacer)), r;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const r = vf(t), n = this.encodeAsString(r.packet), i = r.buffers;
    return i.unshift(n), i;
  }
}
class c0 extends me {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(t) {
    super(), this.reviver = t;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(t) {
    let r;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      r = this.decodeString(t);
      const n = r.type === fe.BINARY_EVENT;
      n || r.type === fe.BINARY_ACK ? (r.type = n ? fe.EVENT : fe.ACK, this.reconstructor = new mf(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (a0(t) || t.base64)
      if (this.reconstructor)
        r = this.reconstructor.takeBinaryData(t), r && (this.reconstructor = null, super.emitReserved("decoded", r));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + t);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(t) {
    let r = 0;
    const n = {
      type: Number(t.charAt(0))
    };
    if (fe[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === fe.BINARY_EVENT || n.type === fe.BINARY_ACK) {
      const o = r + 1;
      for (; t.charAt(++r) !== "-" && r != t.length; )
        ;
      const s = t.substring(o, r);
      if (s != Number(s) || t.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(s);
    }
    if (t.charAt(r + 1) === "/") {
      const o = r + 1;
      for (; ++r && !(t.charAt(r) === "," || r === t.length); )
        ;
      n.nsp = t.substring(o, r);
    } else
      n.nsp = "/";
    const i = t.charAt(r + 1);
    if (i !== "" && Number(i) == i) {
      const o = r + 1;
      for (; ++r; ) {
        const s = t.charAt(r);
        if (s == null || Number(s) != s) {
          --r;
          break;
        }
        if (r === t.length)
          break;
      }
      n.id = Number(t.substring(o, r + 1));
    }
    if (t.charAt(++r)) {
      const o = this.tryParse(t.substr(r));
      if (c0.isPayloadValid(n.type, o))
        n.data = o;
      else
        throw new Error("invalid payload");
    }
    return n;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, r) {
    switch (t) {
      case fe.CONNECT:
        return typeof r == "object";
      case fe.DISCONNECT:
        return r === void 0;
      case fe.CONNECT_ERROR:
        return typeof r == "string" || typeof r == "object";
      case fe.EVENT:
      case fe.BINARY_EVENT:
        return Array.isArray(r) && r.length > 0;
      case fe.ACK:
      case fe.BINARY_ACK:
        return Array.isArray(r);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class mf {
  constructor(t) {
    this.packet = t, this.buffers = [], this.reconPack = t;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(t) {
    if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
      const r = xf(this.reconPack, this.buffers);
      return this.finishedReconstruction(), r;
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
const yf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: c0,
  Encoder: gf,
  get PacketType() {
    return fe;
  },
  protocol: bf
}, Symbol.toStringTag, { value: "Module" }));
function ze(e, t, r) {
  return e.on(t, r), function() {
    e.off(t, r);
  };
}
const wf = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class mo extends me {
  /**
   * `Socket` constructor.
   */
  constructor(t, r, n) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = r, n && n.auth && (this.auth = n.auth), this._opts = Object.assign({}, n), this.io._autoConnect && this.open();
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
    const t = this.io;
    this.subs = [
      ze(t, "open", this.onopen.bind(this)),
      ze(t, "packet", this.onpacket.bind(this)),
      ze(t, "error", this.onerror.bind(this)),
      ze(t, "close", this.onclose.bind(this))
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
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
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
  emit(t, ...r) {
    if (wf.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (r.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(r), this;
    const n = {
      type: fe.EVENT,
      data: r
    };
    if (n.options = {}, n.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
      const s = this.ids++, c = r.pop();
      this._registerAckCallback(s, c), n.id = s;
    }
    const i = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    return this.flags.volatile && (!i || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(n), this.packet(n)) : this.sendBuffer.push(n)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(t, r) {
    var n;
    const i = (n = this.flags.timeout) !== null && n !== void 0 ? n : this._opts.ackTimeout;
    if (i === void 0) {
      this.acks[t] = r;
      return;
    }
    const o = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let s = 0; s < this.sendBuffer.length; s++)
        this.sendBuffer[s].id === t && this.sendBuffer.splice(s, 1);
      r.call(this, new Error("operation has timed out"));
    }, i);
    this.acks[t] = (...s) => {
      this.io.clearTimeoutFn(o), r.apply(this, [null, ...s]);
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
  emitWithAck(t, ...r) {
    const n = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
    return new Promise((i, o) => {
      r.push((s, c) => n ? s ? o(s) : i(c) : i(s)), this.emit(t, ...r);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(t) {
    let r;
    typeof t[t.length - 1] == "function" && (r = t.pop());
    const n = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    t.push((i, ...o) => n !== this._queue[0] ? void 0 : (i !== null ? n.tryCount > this._opts.retries && (this._queue.shift(), r && r(i)) : (this._queue.shift(), r && r(null, ...o)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const r = this._queue[0];
    r.pending && !t || (r.pending = !0, r.tryCount++, this.flags = r.flags, this.emit.apply(this, r.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(t) {
    t.nsp = this.nsp, this.io._packet(t);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((t) => {
      this._sendConnectPacket(t);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(t) {
    this.packet({
      type: fe.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t) : t
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(t, r) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", t, r);
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case fe.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case fe.EVENT:
        case fe.BINARY_EVENT:
          this.onevent(t);
          break;
        case fe.ACK:
        case fe.BINARY_ACK:
          this.onack(t);
          break;
        case fe.DISCONNECT:
          this.ondisconnect();
          break;
        case fe.CONNECT_ERROR:
          this.destroy();
          const n = new Error(t.data.message);
          n.data = t.data.data, this.emitReserved("connect_error", n);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(t) {
    const r = t.data || [];
    t.id != null && r.push(this.ack(t.id)), this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const r = this._anyListeners.slice();
      for (const n of r)
        n.apply(this, t);
    }
    super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(t) {
    const r = this;
    let n = !1;
    return function(...i) {
      n || (n = !0, r.packet({
        type: fe.ACK,
        id: t,
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
  onack(t) {
    const r = this.acks[t.id];
    typeof r == "function" && (r.apply(this, t.data), delete this.acks[t.id]);
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(t, r) {
    this.id = t, this.recovered = r && this._pid === r, this._pid = r, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)), this.receiveBuffer = [], this.sendBuffer.forEach((t) => {
      this.notifyOutgoingListeners(t), this.packet(t);
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
    this.subs && (this.subs.forEach((t) => t()), this.subs = void 0), this.io._destroy(this);
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
    return this.connected && this.packet({ type: fe.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
  compress(t) {
    return this.flags.compress = t, this;
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
  timeout(t) {
    return this.flags.timeout = t, this;
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
  onAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this;
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
  prependAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this;
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
  offAny(t) {
    if (!this._anyListeners)
      return this;
    if (t) {
      const r = this._anyListeners;
      for (let n = 0; n < r.length; n++)
        if (t === r[n])
          return r.splice(n, 1), this;
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
  onAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this;
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
  prependAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this;
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
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners)
      return this;
    if (t) {
      const r = this._anyOutgoingListeners;
      for (let n = 0; n < r.length; n++)
        if (t === r[n])
          return r.splice(n, 1), this;
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
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const r = this._anyOutgoingListeners.slice();
      for (const n of r)
        n.apply(this, t.data);
    }
  }
}
function Ct(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
Ct.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), r = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + r : e - r;
  }
  return Math.min(e, this.max) | 0;
};
Ct.prototype.reset = function() {
  this.attempts = 0;
};
Ct.prototype.setMin = function(e) {
  this.ms = e;
};
Ct.prototype.setMax = function(e) {
  this.max = e;
};
Ct.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Vn extends me {
  constructor(t, r) {
    var n;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (r = t, t = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, cn(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((n = r.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new Ct({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = t;
    const i = r.parser || yf;
    this.encoder = new i.Encoder(), this.decoder = new i.Decoder(), this._autoConnect = r.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this);
  }
  reconnectionDelay(t) {
    var r;
    return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (r = this.backoff) === null || r === void 0 || r.setMin(t), this);
  }
  randomizationFactor(t) {
    var r;
    return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (r = this.backoff) === null || r === void 0 || r.setJitter(t), this);
  }
  reconnectionDelayMax(t) {
    var r;
    return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (r = this.backoff) === null || r === void 0 || r.setMax(t), this);
  }
  timeout(t) {
    return arguments.length ? (this._timeout = t, this) : this._timeout;
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
  open(t) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new bo(this.uri, this.opts);
    const r = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = ze(r, "open", function() {
      n.onopen(), t && t();
    }), o = ze(r, "error", (s) => {
      n.cleanup(), n._readyState = "closed", this.emitReserved("error", s), t ? t(s) : n.maybeReconnectOnOpen();
    });
    if (this._timeout !== !1) {
      const s = this._timeout;
      s === 0 && i();
      const c = this.setTimeoutFn(() => {
        i(), r.close(), r.emit("error", new Error("timeout"));
      }, s);
      this.opts.autoUnref && c.unref(), this.subs.push(function() {
        clearTimeout(c);
      });
    }
    return this.subs.push(i), this.subs.push(o), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(t) {
    return this.open(t);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const t = this.engine;
    this.subs.push(ze(t, "ping", this.onping.bind(this)), ze(t, "data", this.ondata.bind(this)), ze(t, "error", this.onerror.bind(this)), ze(t, "close", this.onclose.bind(this)), ze(this.decoder, "decoded", this.ondecoded.bind(this)));
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
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (r) {
      this.onclose("parse error", r);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(t) {
    xo(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(t) {
    this.emitReserved("error", t);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(t, r) {
    let n = this.nsps[t];
    return n ? this._autoConnect && !n.active && n.connect() : (n = new mo(this, t, r), this.nsps[t] = n), n;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(t) {
    const r = Object.keys(this.nsps);
    for (const n of r)
      if (this.nsps[n].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(t) {
    const r = this.encoder.encode(t);
    for (let n = 0; n < r.length; n++)
      this.engine.write(r[n], t.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((t) => t()), this.subs.length = 0, this.decoder.destroy();
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
  onclose(t, r) {
    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, r), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const r = this.backoff.duration();
      this._reconnecting = !0;
      const n = this.setTimeoutFn(() => {
        t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open((i) => {
          i ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", i)) : t.onreconnect();
        }));
      }, r);
      this.opts.autoUnref && n.unref(), this.subs.push(function() {
        clearTimeout(n);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const t = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t);
  }
}
const Pt = {};
function An(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const r = uf(e, t.path || "/socket.io"), n = r.source, i = r.id, o = r.path, s = Pt[i] && o in Pt[i].nsps, c = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
  let f;
  return c ? f = new Vn(n, t) : (Pt[i] || (Pt[i] = new Vn(n, t)), f = Pt[i]), r.query && !t.query && (t.query = r.queryKey), f.socket(r.path, t);
}
Object.assign(An, {
  Manager: Vn,
  Socket: mo,
  io: An,
  connect: An
});
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var _t = 9e15, at = 1e9, Kn = "0123456789abcdef", Jr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", en = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Gn = {
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
  minE: -_t,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: _t,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, yo, et, oe = !0, fn = "[DecimalError] ", st = fn + "Invalid argument: ", wo = fn + "Precision limit exceeded", _o = fn + "crypto unavailable", Eo = "[object Decimal]", ke = Math.floor, ye = Math.pow, _f = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Ef = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Sf = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, So = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, We = 1e7, te = 7, kf = 9007199254740991, Cf = Jr.length - 1, Zn = en.length - 1, U = { toStringTag: Eo };
U.absoluteValue = U.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ee(e);
};
U.ceil = function() {
  return ee(new this.constructor(this), this.e + 1, 2);
};
U.clampedTo = U.clamp = function(e, t) {
  var r, n = this, i = n.constructor;
  if (e = new i(e), t = new i(t), !e.s || !t.s)
    return new i(NaN);
  if (e.gt(t))
    throw Error(st + t);
  return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
};
U.comparedTo = U.cmp = function(e) {
  var t, r, n, i, o = this, s = o.d, c = (e = new o.constructor(e)).d, f = o.s, a = e.s;
  if (!s || !c)
    return !f || !a ? NaN : f !== a ? f : s === c ? 0 : !s ^ f < 0 ? 1 : -1;
  if (!s[0] || !c[0])
    return s[0] ? f : c[0] ? -a : 0;
  if (f !== a)
    return f;
  if (o.e !== e.e)
    return o.e > e.e ^ f < 0 ? 1 : -1;
  for (n = s.length, i = c.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (s[t] !== c[t])
      return s[t] > c[t] ^ f < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ f < 0 ? 1 : -1;
};
U.cosine = U.cos = function() {
  var e, t, r = this, n = r.constructor;
  return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + te, n.rounding = 1, r = Bf(n, Ro(n, r)), n.precision = e, n.rounding = t, ee(et == 2 || et == 3 ? r.neg() : r, e, t, !0)) : new n(1) : new n(NaN);
};
U.cubeRoot = U.cbrt = function() {
  var e, t, r, n, i, o, s, c, f, a, u = this, h = u.constructor;
  if (!u.isFinite() || u.isZero())
    return new h(u);
  for (oe = !1, o = u.s * ye(u.s * u, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Ee(u.d), e = u.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = ye(r, 1 / 3), e = ke((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new h(r), n.s = u.s) : n = new h(o.toString()), s = (e = h.precision) + 3; ; )
    if (c = n, f = c.times(c).times(c), a = f.plus(u), n = de(a.plus(u).times(c), a.plus(f), s + 2, 1), Ee(c.d).slice(0, s) === (r = Ee(n.d)).slice(0, s))
      if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
        if (!i && (ee(c, e + 1, 0), c.times(c).times(c).eq(u))) {
          n = c;
          break;
        }
        s += 4, i = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (ee(n, e + 1, 1), t = !n.times(n).times(n).eq(u));
        break;
      }
  return oe = !0, ee(n, e, h.rounding, t);
};
U.decimalPlaces = U.dp = function() {
  var e, t = this.d, r = NaN;
  if (t) {
    if (e = t.length - 1, r = (e - ke(this.e / te)) * te, e = t[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
U.dividedBy = U.div = function(e) {
  return de(this, new this.constructor(e));
};
U.dividedToIntegerBy = U.divToInt = function(e) {
  var t = this, r = t.constructor;
  return ee(de(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
U.equals = U.eq = function(e) {
  return this.cmp(e) === 0;
};
U.floor = function() {
  return ee(new this.constructor(this), this.e + 1, 3);
};
U.greaterThan = U.gt = function(e) {
  return this.cmp(e) > 0;
};
U.greaterThanOrEqualTo = U.gte = function(e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
U.hyperbolicCosine = U.cosh = function() {
  var e, t, r, n, i, o = this, s = o.constructor, c = new s(1);
  if (!o.isFinite())
    return new s(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return c;
  r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / ln(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = kt(s, 1, o.times(t), new s(1), !0);
  for (var f, a = e, u = new s(8); a--; )
    f = o.times(o), o = c.minus(f.times(u.minus(f.times(u))));
  return ee(o, s.precision = r, s.rounding = n, !0);
};
U.hyperbolicSine = U.sinh = function() {
  var e, t, r, n, i = this, o = i.constructor;
  if (!i.isFinite() || i.isZero())
    return new o(i);
  if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
    i = kt(o, 2, i, i, !0);
  else {
    e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / ln(5, e)), i = kt(o, 2, i, i, !0);
    for (var s, c = new o(5), f = new o(16), a = new o(20); e--; )
      s = i.times(i), i = i.times(c.plus(s.times(f.times(s).plus(a))));
  }
  return o.precision = t, o.rounding = r, ee(i, t, r, !0);
};
U.hyperbolicTangent = U.tanh = function() {
  var e, t, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, de(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
};
U.inverseCosine = U.acos = function() {
  var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, o = r.rounding;
  return n !== -1 ? n === 0 ? t.isNeg() ? qe(r, i, o) : new r(0) : new r(NaN) : t.isZero() ? qe(r, i + 4, o).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = qe(r, i + 4, o).times(0.5), r.precision = i, r.rounding = o, e.minus(t));
};
U.inverseHyperbolicCosine = U.acosh = function() {
  var e, t, r = this, n = r.constructor;
  return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, oe = !1, r = r.times(r).minus(1).sqrt().plus(r), oe = !0, n.precision = e, n.rounding = t, r.ln()) : new n(r);
};
U.inverseHyperbolicSine = U.asinh = function() {
  var e, t, r = this, n = r.constructor;
  return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, oe = !1, r = r.times(r).plus(1).sqrt().plus(r), oe = !0, n.precision = e, n.rounding = t, r.ln());
};
U.inverseHyperbolicTangent = U.atanh = function() {
  var e, t, r, n, i = this, o = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? ee(new o(i), e, t, !0) : (o.precision = r = n - i.e, i = de(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
};
U.inverseSine = U.asin = function() {
  var e, t, r, n, i = this, o = i.constructor;
  return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = qe(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
};
U.inverseTangent = U.atan = function() {
  var e, t, r, n, i, o, s, c, f, a = this, u = a.constructor, h = u.precision, l = u.rounding;
  if (a.isFinite()) {
    if (a.isZero())
      return new u(a);
    if (a.abs().eq(1) && h + 4 <= Zn)
      return s = qe(u, h + 4, l).times(0.25), s.s = a.s, s;
  } else {
    if (!a.s)
      return new u(NaN);
    if (h + 4 <= Zn)
      return s = qe(u, h + 4, l).times(0.5), s.s = a.s, s;
  }
  for (u.precision = c = h + 10, u.rounding = 1, r = Math.min(28, c / te + 2 | 0), e = r; e; --e)
    a = a.div(a.times(a).plus(1).sqrt().plus(1));
  for (oe = !1, t = Math.ceil(c / te), n = 1, f = a.times(a), s = new u(a), i = a; e !== -1; )
    if (i = i.times(f), o = s.minus(i.div(n += 2)), i = i.times(f), s = o.plus(i.div(n += 2)), s.d[t] !== void 0)
      for (e = t; s.d[e] === o.d[e] && e--; )
        ;
  return r && (s = s.times(2 << r - 1)), oe = !0, ee(s, u.precision = h, u.rounding = l, !0);
};
U.isFinite = function() {
  return !!this.d;
};
U.isInteger = U.isInt = function() {
  return !!this.d && ke(this.e / te) > this.d.length - 2;
};
U.isNaN = function() {
  return !this.s;
};
U.isNegative = U.isNeg = function() {
  return this.s < 0;
};
U.isPositive = U.isPos = function() {
  return this.s > 0;
};
U.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
U.lessThan = U.lt = function(e) {
  return this.cmp(e) < 0;
};
U.lessThanOrEqualTo = U.lte = function(e) {
  return this.cmp(e) < 1;
};
U.logarithm = U.log = function(e) {
  var t, r, n, i, o, s, c, f, a = this, u = a.constructor, h = u.precision, l = u.rounding, p = 5;
  if (e == null)
    e = new u(10), t = !0;
  else {
    if (e = new u(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
      return new u(NaN);
    t = e.eq(10);
  }
  if (r = a.d, a.s < 0 || !r || !r[0] || a.eq(1))
    return new u(r && !r[0] ? -1 / 0 : a.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (t)
    if (r.length > 1)
      o = !0;
    else {
      for (i = r[0]; i % 10 === 0; )
        i /= 10;
      o = i !== 1;
    }
  if (oe = !1, c = h + p, s = ot(a, c), n = t ? tn(u, c + 10) : ot(e, c), f = de(s, n, c, 1), Wt(f.d, i = h, l))
    do
      if (c += 10, s = ot(a, c), n = t ? tn(u, c + 10) : ot(e, c), f = de(s, n, c, 1), !o) {
        +Ee(f.d).slice(i + 1, i + 15) + 1 == 1e14 && (f = ee(f, h + 1, 0));
        break;
      }
    while (Wt(f.d, i += 10, l));
  return oe = !0, ee(f, h, l);
};
U.minus = U.sub = function(e) {
  var t, r, n, i, o, s, c, f, a, u, h, l, p = this, b = p.constructor;
  if (e = new b(e), !p.d || !e.d)
    return !p.s || !e.s ? e = new b(NaN) : p.d ? e.s = -e.s : e = new b(e.d || p.s !== e.s ? p : NaN), e;
  if (p.s != e.s)
    return e.s = -e.s, p.plus(e);
  if (a = p.d, l = e.d, c = b.precision, f = b.rounding, !a[0] || !l[0]) {
    if (l[0])
      e.s = -e.s;
    else if (a[0])
      e = new b(p);
    else
      return new b(f === 3 ? -0 : 0);
    return oe ? ee(e, c, f) : e;
  }
  if (r = ke(e.e / te), u = ke(p.e / te), a = a.slice(), o = u - r, o) {
    for (h = o < 0, h ? (t = a, o = -o, s = l.length) : (t = l, r = u, s = a.length), n = Math.max(Math.ceil(c / te), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o; n--; )
      t.push(0);
    t.reverse();
  } else {
    for (n = a.length, s = l.length, h = n < s, h && (s = n), n = 0; n < s; n++)
      if (a[n] != l[n]) {
        h = a[n] < l[n];
        break;
      }
    o = 0;
  }
  for (h && (t = a, a = l, l = t, e.s = -e.s), s = a.length, n = l.length - s; n > 0; --n)
    a[s++] = 0;
  for (n = l.length; n > o; ) {
    if (a[--n] < l[n]) {
      for (i = n; i && a[--i] === 0; )
        a[i] = We - 1;
      --a[i], a[n] += We;
    }
    a[n] -= l[n];
  }
  for (; a[--s] === 0; )
    a.pop();
  for (; a[0] === 0; a.shift())
    --r;
  return a[0] ? (e.d = a, e.e = un(a, r), oe ? ee(e, c, f) : e) : new b(f === 3 ? -0 : 0);
};
U.modulo = U.mod = function(e) {
  var t, r = this, n = r.constructor;
  return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? ee(new n(r), n.precision, n.rounding) : (oe = !1, n.modulo == 9 ? (t = de(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = de(r, e, 0, n.modulo, 1), t = t.times(e), oe = !0, r.minus(t));
};
U.naturalExponential = U.exp = function() {
  return Xn(this);
};
U.naturalLogarithm = U.ln = function() {
  return ot(this);
};
U.negated = U.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ee(e);
};
U.plus = U.add = function(e) {
  var t, r, n, i, o, s, c, f, a, u, h = this, l = h.constructor;
  if (e = new l(e), !h.d || !e.d)
    return !h.s || !e.s ? e = new l(NaN) : h.d || (e = new l(e.d || h.s === e.s ? h : NaN)), e;
  if (h.s != e.s)
    return e.s = -e.s, h.minus(e);
  if (a = h.d, u = e.d, c = l.precision, f = l.rounding, !a[0] || !u[0])
    return u[0] || (e = new l(h)), oe ? ee(e, c, f) : e;
  if (o = ke(h.e / te), n = ke(e.e / te), a = a.slice(), i = o - n, i) {
    for (i < 0 ? (r = a, i = -i, s = u.length) : (r = u, n = o, s = a.length), o = Math.ceil(c / te), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse(); i--; )
      r.push(0);
    r.reverse();
  }
  for (s = a.length, i = u.length, s - i < 0 && (i = s, r = u, u = a, a = r), t = 0; i; )
    t = (a[--i] = a[i] + u[i] + t) / We | 0, a[i] %= We;
  for (t && (a.unshift(t), ++n), s = a.length; a[--s] == 0; )
    a.pop();
  return e.d = a, e.e = un(a, n), oe ? ee(e, c, f) : e;
};
U.precision = U.sd = function(e) {
  var t, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(st + e);
  return r.d ? (t = ko(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
};
U.round = function() {
  var e = this, t = e.constructor;
  return ee(new t(e), e.e + 1, t.rounding);
};
U.sine = U.sin = function() {
  var e, t, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + te, n.rounding = 1, r = Rf(n, Ro(n, r)), n.precision = e, n.rounding = t, ee(et > 2 ? r.neg() : r, e, t, !0)) : new n(NaN);
};
U.squareRoot = U.sqrt = function() {
  var e, t, r, n, i, o, s = this, c = s.d, f = s.e, a = s.s, u = s.constructor;
  if (a !== 1 || !c || !c[0])
    return new u(!a || a < 0 && (!c || c[0]) ? NaN : c ? s : 1 / 0);
  for (oe = !1, a = Math.sqrt(+s), a == 0 || a == 1 / 0 ? (t = Ee(c), (t.length + f) % 2 == 0 && (t += "0"), a = Math.sqrt(t), f = ke((f + 1) / 2) - (f < 0 || f % 2), a == 1 / 0 ? t = "5e" + f : (t = a.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + f), n = new u(t)) : n = new u(a.toString()), r = (f = u.precision) + 3; ; )
    if (o = n, n = o.plus(de(s, o, r + 2, 1)).times(0.5), Ee(o.d).slice(0, r) === (t = Ee(n.d)).slice(0, r))
      if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
        if (!i && (ee(o, f + 1, 0), o.times(o).eq(s))) {
          n = o;
          break;
        }
        r += 4, i = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (ee(n, f + 1, 1), e = !n.times(n).eq(s));
        break;
      }
  return oe = !0, ee(n, f, u.rounding, e);
};
U.tangent = U.tan = function() {
  var e, t, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = de(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, ee(et == 2 || et == 4 ? r.neg() : r, e, t, !0)) : new n(NaN);
};
U.times = U.mul = function(e) {
  var t, r, n, i, o, s, c, f, a, u = this, h = u.constructor, l = u.d, p = (e = new h(e)).d;
  if (e.s *= u.s, !l || !l[0] || !p || !p[0])
    return new h(!e.s || l && !l[0] && !p || p && !p[0] && !l ? NaN : !l || !p ? e.s / 0 : e.s * 0);
  for (r = ke(u.e / te) + ke(e.e / te), f = l.length, a = p.length, f < a && (o = l, l = p, p = o, s = f, f = a, a = s), o = [], s = f + a, n = s; n--; )
    o.push(0);
  for (n = a; --n >= 0; ) {
    for (t = 0, i = f + n; i > n; )
      c = o[i] + p[n] * l[i - n - 1] + t, o[i--] = c % We | 0, t = c / We | 0;
    o[i] = (o[i] + t) % We | 0;
  }
  for (; !o[--s]; )
    o.pop();
  return t ? ++r : o.shift(), e.d = o, e.e = un(o, r), oe ? ee(e, h.precision, h.rounding) : e;
};
U.toBinary = function(e, t) {
  return f0(this, 2, e, t);
};
U.toDecimalPlaces = U.toDP = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (Te(e, 0, at), t === void 0 ? t = n.rounding : Te(t, 0, 8), ee(r, e + r.e + 1, t));
};
U.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = Ke(n, !0) : (Te(e, 0, at), t === void 0 ? t = i.rounding : Te(t, 0, 8), n = ee(new i(n), e + 1, t), r = Ke(n, !0, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
};
U.toFixed = function(e, t) {
  var r, n, i = this, o = i.constructor;
  return e === void 0 ? r = Ke(i) : (Te(e, 0, at), t === void 0 ? t = o.rounding : Te(t, 0, 8), n = ee(new o(i), e + i.e + 1, t), r = Ke(n, !1, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
};
U.toFraction = function(e) {
  var t, r, n, i, o, s, c, f, a, u, h, l, p = this, b = p.d, g = p.constructor;
  if (!b)
    return new g(p);
  if (a = r = new g(1), n = f = new g(0), t = new g(n), o = t.e = ko(b) - p.e - 1, s = o % te, t.d[0] = ye(10, s < 0 ? te + s : s), e == null)
    e = o > 0 ? t : a;
  else {
    if (c = new g(e), !c.isInt() || c.lt(a))
      throw Error(st + c);
    e = c.gt(t) ? o > 0 ? t : a : c;
  }
  for (oe = !1, c = new g(Ee(b)), u = g.precision, g.precision = o = b.length * te * 2; h = de(c, t, 0, 1, 1), i = r.plus(h.times(n)), i.cmp(e) != 1; )
    r = n, n = i, i = a, a = f.plus(h.times(i)), f = i, i = t, t = c.minus(h.times(i)), c = i;
  return i = de(e.minus(r), n, 0, 1, 1), f = f.plus(i.times(a)), r = r.plus(i.times(n)), f.s = a.s = p.s, l = de(a, n, o, 1).minus(p).abs().cmp(de(f, r, o, 1).minus(p).abs()) < 1 ? [a, n] : [f, r], g.precision = u, oe = !0, l;
};
U.toHexadecimal = U.toHex = function(e, t) {
  return f0(this, 16, e, t);
};
U.toNearest = function(e, t) {
  var r = this, n = r.constructor;
  if (r = new n(r), e == null) {
    if (!r.d)
      return r;
    e = new n(1), t = n.rounding;
  } else {
    if (e = new n(e), t === void 0 ? t = n.rounding : Te(t, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (oe = !1, r = de(r, e, 0, t, 1).times(e), oe = !0, ee(r)) : (e.s = r.s, r = e), r;
};
U.toNumber = function() {
  return +this;
};
U.toOctal = function(e, t) {
  return f0(this, 8, e, t);
};
U.toPower = U.pow = function(e) {
  var t, r, n, i, o, s, c = this, f = c.constructor, a = +(e = new f(e));
  if (!c.d || !e.d || !c.d[0] || !e.d[0])
    return new f(ye(+c, a));
  if (c = new f(c), c.eq(1))
    return c;
  if (n = f.precision, o = f.rounding, e.eq(1))
    return ee(c, n, o);
  if (t = ke(e.e / te), t >= e.d.length - 1 && (r = a < 0 ? -a : a) <= kf)
    return i = Co(f, c, r, n), e.s < 0 ? new f(1).div(i) : ee(i, n, o);
  if (s = c.s, s < 0) {
    if (t < e.d.length - 1)
      return new f(NaN);
    if (e.d[t] & 1 || (s = 1), c.e == 0 && c.d[0] == 1 && c.d.length == 1)
      return c.s = s, c;
  }
  return r = ye(+c, a), t = r == 0 || !isFinite(r) ? ke(a * (Math.log("0." + Ee(c.d)) / Math.LN10 + c.e + 1)) : new f(r + "").e, t > f.maxE + 1 || t < f.minE - 1 ? new f(t > 0 ? s / 0 : 0) : (oe = !1, f.rounding = c.s = 1, r = Math.min(12, (t + "").length), i = Xn(e.times(ot(c, n + r)), n), i.d && (i = ee(i, n + 5, 1), Wt(i.d, n, o) && (t = n + 10, i = ee(Xn(e.times(ot(c, t + r)), t), t + 5, 1), +Ee(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = ee(i, n + 1, 0)))), i.s = s, oe = !0, f.rounding = o, ee(i, n, o));
};
U.toPrecision = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = Ke(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (Te(e, 1, at), t === void 0 ? t = i.rounding : Te(t, 0, 8), n = ee(new i(n), e, t), r = Ke(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
};
U.toSignificantDigits = U.toSD = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (Te(e, 1, at), t === void 0 ? t = n.rounding : Te(t, 0, 8)), ee(new n(r), e, t);
};
U.toString = function() {
  var e = this, t = e.constructor, r = Ke(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
U.truncated = U.trunc = function() {
  return ee(new this.constructor(this), this.e + 1, 1);
};
U.valueOf = U.toJSON = function() {
  var e = this, t = e.constructor, r = Ke(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Ee(e) {
  var t, r, n, i = e.length - 1, o = "", s = e[0];
  if (i > 0) {
    for (o += s, t = 1; t < i; t++)
      n = e[t] + "", r = te - n.length, r && (o += it(r)), o += n;
    s = e[t], n = s + "", r = te - n.length, r && (o += it(r));
  } else if (s === 0)
    return "0";
  for (; s % 10 === 0; )
    s /= 10;
  return o + s;
}
function Te(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(st + e);
}
function Wt(e, t, r, n) {
  var i, o, s, c;
  for (o = e[0]; o >= 10; o /= 10)
    --t;
  return --t < 0 ? (t += te, i = 0) : (i = Math.ceil((t + 1) / te), t %= te), o = ye(10, te - t), c = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? c = c / 100 | 0 : t == 1 && (c = c / 10 | 0), s = r < 4 && c == 99999 || r > 3 && c == 49999 || c == 5e4 || c == 0) : s = (r < 4 && c + 1 == o || r > 3 && c + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == ye(10, t - 2) - 1 || (c == o / 2 || c == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? c = c / 1e3 | 0 : t == 1 ? c = c / 100 | 0 : t == 2 && (c = c / 10 | 0), s = (n || r < 4) && c == 9999 || !n && r > 3 && c == 4999) : s = ((n || r < 4) && c + 1 == o || !n && r > 3 && c + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == ye(10, t - 3) - 1, s;
}
function pr(e, t, r) {
  for (var n, i = [0], o, s = 0, c = e.length; s < c; ) {
    for (o = i.length; o--; )
      i[o] *= t;
    for (i[0] += Kn.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
      i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
  }
  return i.reverse();
}
function Bf(e, t) {
  var r, n, i;
  if (t.isZero())
    return t;
  n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / ln(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = kt(e, 1, t.times(i), new e(1));
  for (var o = r; o--; ) {
    var s = t.times(t);
    t = s.times(s).minus(s).times(8).plus(1);
  }
  return e.precision -= r, t;
}
var de = function() {
  function e(n, i, o) {
    var s, c = 0, f = n.length;
    for (n = n.slice(); f--; )
      s = n[f] * i + c, n[f] = s % o | 0, c = s / o | 0;
    return c && n.unshift(c), n;
  }
  function t(n, i, o, s) {
    var c, f;
    if (o != s)
      f = o > s ? 1 : -1;
    else
      for (c = f = 0; c < o; c++)
        if (n[c] != i[c]) {
          f = n[c] > i[c] ? 1 : -1;
          break;
        }
    return f;
  }
  function r(n, i, o, s) {
    for (var c = 0; o--; )
      n[o] -= c, c = n[o] < i[o] ? 1 : 0, n[o] = c * s + n[o] - i[o];
    for (; !n[0] && n.length > 1; )
      n.shift();
  }
  return function(n, i, o, s, c, f) {
    var a, u, h, l, p, b, g, E, N, w, d, x, y, _, C, T, D, S, A, L, I = n.constructor, F = n.s == i.s ? 1 : -1, P = n.d, z = i.d;
    if (!P || !P[0] || !z || !z[0])
      return new I(
        // Return NaN if either NaN, or both Infinity or 0.
        !n.s || !i.s || (P ? z && P[0] == z[0] : !z) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          P && P[0] == 0 || !z ? F * 0 : F / 0
        )
      );
    for (f ? (p = 1, u = n.e - i.e) : (f = We, p = te, u = ke(n.e / p) - ke(i.e / p)), A = z.length, D = P.length, N = new I(F), w = N.d = [], h = 0; z[h] == (P[h] || 0); h++)
      ;
    if (z[h] > (P[h] || 0) && u--, o == null ? (_ = o = I.precision, s = I.rounding) : c ? _ = o + (n.e - i.e) + 1 : _ = o, _ < 0)
      w.push(1), b = !0;
    else {
      if (_ = _ / p + 2 | 0, h = 0, A == 1) {
        for (l = 0, z = z[0], _++; (h < D || l) && _--; h++)
          C = l * f + (P[h] || 0), w[h] = C / z | 0, l = C % z | 0;
        b = l || h < D;
      } else {
        for (l = f / (z[0] + 1) | 0, l > 1 && (z = e(z, l, f), P = e(P, l, f), A = z.length, D = P.length), T = A, d = P.slice(0, A), x = d.length; x < A; )
          d[x++] = 0;
        L = z.slice(), L.unshift(0), S = z[0], z[1] >= f / 2 && ++S;
        do
          l = 0, a = t(z, d, A, x), a < 0 ? (y = d[0], A != x && (y = y * f + (d[1] || 0)), l = y / S | 0, l > 1 ? (l >= f && (l = f - 1), g = e(z, l, f), E = g.length, x = d.length, a = t(g, d, E, x), a == 1 && (l--, r(g, A < E ? L : z, E, f))) : (l == 0 && (a = l = 1), g = z.slice()), E = g.length, E < x && g.unshift(0), r(d, g, x, f), a == -1 && (x = d.length, a = t(z, d, A, x), a < 1 && (l++, r(d, A < x ? L : z, x, f))), x = d.length) : a === 0 && (l++, d = [0]), w[h++] = l, a && d[0] ? d[x++] = P[T] || 0 : (d = [P[T]], x = 1);
        while ((T++ < D || d[0] !== void 0) && _--);
        b = d[0] !== void 0;
      }
      w[0] || w.shift();
    }
    if (p == 1)
      N.e = u, yo = b;
    else {
      for (h = 1, l = w[0]; l >= 10; l /= 10)
        h++;
      N.e = h + u * p - 1, ee(N, c ? o + N.e + 1 : o, s, b);
    }
    return N;
  };
}();
function ee(e, t, r, n) {
  var i, o, s, c, f, a, u, h, l, p = e.constructor;
  e:
    if (t != null) {
      if (h = e.d, !h)
        return e;
      for (i = 1, c = h[0]; c >= 10; c /= 10)
        i++;
      if (o = t - i, o < 0)
        o += te, s = t, u = h[l = 0], f = u / ye(10, i - s - 1) % 10 | 0;
      else if (l = Math.ceil((o + 1) / te), c = h.length, l >= c)
        if (n) {
          for (; c++ <= l; )
            h.push(0);
          u = f = 0, i = 1, o %= te, s = o - te + 1;
        } else
          break e;
      else {
        for (u = c = h[l], i = 1; c >= 10; c /= 10)
          i++;
        o %= te, s = o - te + i, f = s < 0 ? 0 : u / ye(10, i - s - 1) % 10 | 0;
      }
      if (n = n || t < 0 || h[l + 1] !== void 0 || (s < 0 ? u : u % ye(10, i - s - 1)), a = r < 4 ? (f || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : f > 5 || f == 5 && (r == 4 || n || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? s > 0 ? u / ye(10, i - s) : 0 : h[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !h[0])
        return h.length = 0, a ? (t -= e.e + 1, h[0] = ye(10, (te - t % te) % te), e.e = -t || 0) : h[0] = e.e = 0, e;
      if (o == 0 ? (h.length = l, c = 1, l--) : (h.length = l + 1, c = ye(10, te - o), h[l] = s > 0 ? (u / ye(10, i - s) % ye(10, s) | 0) * c : 0), a)
        for (; ; )
          if (l == 0) {
            for (o = 1, s = h[0]; s >= 10; s /= 10)
              o++;
            for (s = h[0] += c, c = 1; s >= 10; s /= 10)
              c++;
            o != c && (e.e++, h[0] == We && (h[0] = 1));
            break;
          } else {
            if (h[l] += c, h[l] != We)
              break;
            h[l--] = 0, c = 1;
          }
      for (o = h.length; h[--o] === 0; )
        h.pop();
    }
  return oe && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e;
}
function Ke(e, t, r) {
  if (!e.isFinite())
    return Ao(e);
  var n, i = e.e, o = Ee(e.d), s = o.length;
  return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + it(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + it(-i - 1) + o, r && (n = r - s) > 0 && (o += it(n))) : i >= s ? (o += it(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + it(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += it(n))), o;
}
function un(e, t) {
  var r = e[0];
  for (t *= te; r >= 10; r /= 10)
    t++;
  return t;
}
function tn(e, t, r) {
  if (t > Cf)
    throw oe = !0, r && (e.precision = r), Error(wo);
  return ee(new e(Jr), t, 1, !0);
}
function qe(e, t, r) {
  if (t > Zn)
    throw Error(wo);
  return ee(new e(en), t, r, !0);
}
function ko(e) {
  var t = e.length - 1, r = t * te + 1;
  if (t = e[t], t) {
    for (; t % 10 == 0; t /= 10)
      r--;
    for (t = e[0]; t >= 10; t /= 10)
      r++;
  }
  return r;
}
function it(e) {
  for (var t = ""; e--; )
    t += "0";
  return t;
}
function Co(e, t, r, n) {
  var i, o = new e(1), s = Math.ceil(n / te + 4);
  for (oe = !1; ; ) {
    if (r % 2 && (o = o.times(t), ki(o.d, s) && (i = !0)), r = ke(r / 2), r === 0) {
      r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
      break;
    }
    t = t.times(t), ki(t.d, s);
  }
  return oe = !0, o;
}
function Si(e) {
  return e.d[e.d.length - 1] & 1;
}
function Bo(e, t, r) {
  for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
    if (n = new e(t[o]), n.s)
      i[r](n) && (i = n);
    else {
      i = n;
      break;
    }
  return i;
}
function Xn(e, t) {
  var r, n, i, o, s, c, f, a = 0, u = 0, h = 0, l = e.constructor, p = l.rounding, b = l.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new l(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (t == null ? (oe = !1, f = b) : f = t, c = new l(0.03125); e.e > -2; )
    e = e.times(c), h += 5;
  for (n = Math.log(ye(2, h)) / Math.LN10 * 2 + 5 | 0, f += n, r = o = s = new l(1), l.precision = f; ; ) {
    if (o = ee(o.times(e), f, 1), r = r.times(++u), c = s.plus(de(o, r, f, 1)), Ee(c.d).slice(0, f) === Ee(s.d).slice(0, f)) {
      for (i = h; i--; )
        s = ee(s.times(s), f, 1);
      if (t == null)
        if (a < 3 && Wt(s.d, f - n, p, a))
          l.precision = f += 10, r = o = c = new l(1), u = 0, a++;
        else
          return ee(s, l.precision = b, p, oe = !0);
      else
        return l.precision = b, s;
    }
    s = c;
  }
}
function ot(e, t) {
  var r, n, i, o, s, c, f, a, u, h, l, p = 1, b = 10, g = e, E = g.d, N = g.constructor, w = N.rounding, d = N.precision;
  if (g.s < 0 || !E || !E[0] || !g.e && E[0] == 1 && E.length == 1)
    return new N(E && !E[0] ? -1 / 0 : g.s != 1 ? NaN : E ? 0 : g);
  if (t == null ? (oe = !1, u = d) : u = t, N.precision = u += b, r = Ee(E), n = r.charAt(0), Math.abs(o = g.e) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      g = g.times(e), r = Ee(g.d), n = r.charAt(0), p++;
    o = g.e, n > 1 ? (g = new N("0." + r), o++) : g = new N(n + "." + r.slice(1));
  } else
    return a = tn(N, u + 2, d).times(o + ""), g = ot(new N(n + "." + r.slice(1)), u - b).plus(a), N.precision = d, t == null ? ee(g, d, w, oe = !0) : g;
  for (h = g, f = s = g = de(g.minus(1), g.plus(1), u, 1), l = ee(g.times(g), u, 1), i = 3; ; ) {
    if (s = ee(s.times(l), u, 1), a = f.plus(de(s, new N(i), u, 1)), Ee(a.d).slice(0, u) === Ee(f.d).slice(0, u))
      if (f = f.times(2), o !== 0 && (f = f.plus(tn(N, u + 2, d).times(o + ""))), f = de(f, new N(p), u, 1), t == null)
        if (Wt(f.d, u - b, w, c))
          N.precision = u += b, a = s = g = de(h.minus(1), h.plus(1), u, 1), l = ee(g.times(g), u, 1), i = c = 1;
        else
          return ee(f, N.precision = d, w, oe = !0);
      else
        return N.precision = d, f;
    f = a, i += 2;
  }
}
function Ao(e) {
  return String(e.s * e.s / 0);
}
function Qn(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++)
    ;
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i)
    ;
  if (t = t.slice(n, i), t) {
    if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % te, r < 0 && (n += te), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= te; n < i; )
        e.d.push(+t.slice(n, n += te));
      t = t.slice(n), n = te - t.length;
    } else
      n -= i;
    for (; n--; )
      t += "0";
    e.d.push(+t), oe && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function Af(e, t) {
  var r, n, i, o, s, c, f, a, u;
  if (t.indexOf("_") > -1) {
    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), So.test(t))
      return Qn(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Ef.test(t))
    r = 16, t = t.toLowerCase();
  else if (_f.test(t))
    r = 2;
  else if (Sf.test(t))
    r = 8;
  else
    throw Error(st + t);
  for (o = t.search(/p/i), o > 0 ? (f = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e.constructor, s && (t = t.replace(".", ""), c = t.length, o = c - o, i = Co(n, new n(r), o, o * 2)), a = pr(t, r, We), u = a.length - 1, o = u; a[o] === 0; --o)
    a.pop();
  return o < 0 ? new n(e.s * 0) : (e.e = un(a, u), e.d = a, oe = !1, s && (e = de(e, i, c * 4)), f && (e = e.times(Math.abs(f) < 54 ? ye(2, f) : Ut.pow(2, f))), oe = !0, e);
}
function Rf(e, t) {
  var r, n = t.d.length;
  if (n < 3)
    return t.isZero() ? t : kt(e, 2, t, t);
  r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / ln(5, r)), t = kt(e, 2, t, t);
  for (var i, o = new e(5), s = new e(16), c = new e(20); r--; )
    i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(c))));
  return t;
}
function kt(e, t, r, n, i) {
  var o, s, c, f, a = e.precision, u = Math.ceil(a / te);
  for (oe = !1, f = r.times(r), c = new e(n); ; ) {
    if (s = de(c.times(f), new e(t++ * t++), a, 1), c = i ? n.plus(s) : n.minus(s), n = de(s.times(f), new e(t++ * t++), a, 1), s = c.plus(n), s.d[u] !== void 0) {
      for (o = u; s.d[o] === c.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = c, c = n, n = s, s = o;
  }
  return oe = !0, s.d.length = u + 1, s;
}
function ln(e, t) {
  for (var r = e; --t; )
    r *= e;
  return r;
}
function Ro(e, t) {
  var r, n = t.s < 0, i = qe(e, e.precision, 1), o = i.times(0.5);
  if (t = t.abs(), t.lte(o))
    return et = n ? 4 : 1, t;
  if (r = t.divToInt(i), r.isZero())
    et = n ? 3 : 2;
  else {
    if (t = t.minus(r.times(i)), t.lte(o))
      return et = Si(r) ? n ? 2 : 3 : n ? 4 : 1, t;
    et = Si(r) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return t.minus(i).abs();
}
function f0(e, t, r, n) {
  var i, o, s, c, f, a, u, h, l, p = e.constructor, b = r !== void 0;
  if (b ? (Te(r, 1, at), n === void 0 ? n = p.rounding : Te(n, 0, 8)) : (r = p.precision, n = p.rounding), !e.isFinite())
    u = Ao(e);
  else {
    for (u = Ke(e), s = u.indexOf("."), b ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (u = u.replace(".", ""), l = new p(1), l.e = u.length - s, l.d = pr(Ke(l), 10, i), l.e = l.d.length), h = pr(u, 10, i), o = f = h.length; h[--f] == 0; )
      h.pop();
    if (!h[0])
      u = b ? "0p+0" : "0";
    else {
      if (s < 0 ? o-- : (e = new p(e), e.d = h, e.e = o, e = de(e, l, r, n, 0, i), h = e.d, o = e.e, a = yo), s = h[r], c = i / 2, a = a || h[r + 1] !== void 0, a = n < 4 ? (s !== void 0 || a) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > c || s === c && (n === 4 || a || n === 6 && h[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), h.length = r, a)
        for (; ++h[--r] > i - 1; )
          h[r] = 0, r || (++o, h.unshift(1));
      for (f = h.length; !h[f - 1]; --f)
        ;
      for (s = 0, u = ""; s < f; s++)
        u += Kn.charAt(h[s]);
      if (b) {
        if (f > 1)
          if (t == 16 || t == 8) {
            for (s = t == 16 ? 4 : 3, --f; f % s; f++)
              u += "0";
            for (h = pr(u, i, t), f = h.length; !h[f - 1]; --f)
              ;
            for (s = 1, u = "1."; s < f; s++)
              u += Kn.charAt(h[s]);
          } else
            u = u.charAt(0) + "." + u.slice(1);
        u = u + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; )
          u = "0" + u;
        u = "0." + u;
      } else if (++o > f)
        for (o -= f; o--; )
          u += "0";
      else
        o < f && (u = u.slice(0, o) + "." + u.slice(o));
    }
    u = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + u;
  }
  return e.s < 0 ? "-" + u : u;
}
function ki(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function Tf(e) {
  return new this(e).abs();
}
function Nf(e) {
  return new this(e).acos();
}
function Of(e) {
  return new this(e).acosh();
}
function If(e, t) {
  return new this(e).plus(t);
}
function Df(e) {
  return new this(e).asin();
}
function Lf(e) {
  return new this(e).asinh();
}
function Pf(e) {
  return new this(e).atan();
}
function Mf(e) {
  return new this(e).atanh();
}
function Ff(e, t) {
  e = new this(e), t = new this(t);
  var r, n = this.precision, i = this.rounding, o = n + 4;
  return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = qe(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? qe(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = qe(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(de(e, t, o, 1)), t = qe(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(de(e, t, o, 1)), r;
}
function $f(e) {
  return new this(e).cbrt();
}
function Hf(e) {
  return ee(e = new this(e), e.e + 1, 2);
}
function zf(e, t, r) {
  return new this(e).clamp(t, r);
}
function qf(e) {
  if (!e || typeof e != "object")
    throw Error(fn + "Object expected");
  var t, r, n, i = e.defaults === !0, o = [
    "precision",
    1,
    at,
    "rounding",
    0,
    8,
    "toExpNeg",
    -_t,
    0,
    "toExpPos",
    0,
    _t,
    "maxE",
    0,
    _t,
    "minE",
    -_t,
    0,
    "modulo",
    0,
    9
  ];
  for (t = 0; t < o.length; t += 3)
    if (r = o[t], i && (this[r] = Gn[r]), (n = e[r]) !== void 0)
      if (ke(n) === n && n >= o[t + 1] && n <= o[t + 2])
        this[r] = n;
      else
        throw Error(st + r + ": " + n);
  if (r = "crypto", i && (this[r] = Gn[r]), (n = e[r]) !== void 0)
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(_o);
      else
        this[r] = !1;
    else
      throw Error(st + r + ": " + n);
  return this;
}
function Wf(e) {
  return new this(e).cos();
}
function Uf(e) {
  return new this(e).cosh();
}
function To(e) {
  var t, r, n;
  function i(o) {
    var s, c, f, a = this;
    if (!(a instanceof i))
      return new i(o);
    if (a.constructor = i, Ci(o)) {
      a.s = o.s, oe ? !o.d || o.e > i.maxE ? (a.e = NaN, a.d = null) : o.e < i.minE ? (a.e = 0, a.d = [0]) : (a.e = o.e, a.d = o.d.slice()) : (a.e = o.e, a.d = o.d ? o.d.slice() : o.d);
      return;
    }
    if (f = typeof o, f === "number") {
      if (o === 0) {
        a.s = 1 / o < 0 ? -1 : 1, a.e = 0, a.d = [0];
        return;
      }
      if (o < 0 ? (o = -o, a.s = -1) : a.s = 1, o === ~~o && o < 1e7) {
        for (s = 0, c = o; c >= 10; c /= 10)
          s++;
        oe ? s > i.maxE ? (a.e = NaN, a.d = null) : s < i.minE ? (a.e = 0, a.d = [0]) : (a.e = s, a.d = [o]) : (a.e = s, a.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (a.s = NaN), a.e = NaN, a.d = null;
        return;
      }
      return Qn(a, o.toString());
    } else if (f !== "string")
      throw Error(st + o);
    return (c = o.charCodeAt(0)) === 45 ? (o = o.slice(1), a.s = -1) : (c === 43 && (o = o.slice(1)), a.s = 1), So.test(o) ? Qn(a, o) : Af(a, o);
  }
  if (i.prototype = U, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = qf, i.clone = To, i.isDecimal = Ci, i.abs = Tf, i.acos = Nf, i.acosh = Of, i.add = If, i.asin = Df, i.asinh = Lf, i.atan = Pf, i.atanh = Mf, i.atan2 = Ff, i.cbrt = $f, i.ceil = Hf, i.clamp = zf, i.cos = Wf, i.cosh = Uf, i.div = Yf, i.exp = jf, i.floor = Vf, i.hypot = Kf, i.ln = Gf, i.log = Zf, i.log10 = Qf, i.log2 = Xf, i.max = Jf, i.min = eu, i.mod = tu, i.mul = ru, i.pow = nu, i.random = iu, i.round = ou, i.sign = su, i.sin = au, i.sinh = cu, i.sqrt = fu, i.sub = uu, i.sum = lu, i.tan = hu, i.tanh = du, i.trunc = pu, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; )
      e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function Yf(e, t) {
  return new this(e).div(t);
}
function jf(e) {
  return new this(e).exp();
}
function Vf(e) {
  return ee(e = new this(e), e.e + 1, 3);
}
function Kf() {
  var e, t, r = new this(0);
  for (oe = !1, e = 0; e < arguments.length; )
    if (t = new this(arguments[e++]), t.d)
      r.d && (r = r.plus(t.times(t)));
    else {
      if (t.s)
        return oe = !0, new this(1 / 0);
      r = t;
    }
  return oe = !0, r.sqrt();
}
function Ci(e) {
  return e instanceof Ut || e && e.toStringTag === Eo || !1;
}
function Gf(e) {
  return new this(e).ln();
}
function Zf(e, t) {
  return new this(e).log(t);
}
function Xf(e) {
  return new this(e).log(2);
}
function Qf(e) {
  return new this(e).log(10);
}
function Jf() {
  return Bo(this, arguments, "lt");
}
function eu() {
  return Bo(this, arguments, "gt");
}
function tu(e, t) {
  return new this(e).mod(t);
}
function ru(e, t) {
  return new this(e).mul(t);
}
function nu(e, t) {
  return new this(e).pow(t);
}
function iu(e) {
  var t, r, n, i, o = 0, s = new this(1), c = [];
  if (e === void 0 ? e = this.precision : Te(e, 1, at), n = Math.ceil(e / te), this.crypto)
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
        i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : c[o++] = i % 1e7;
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes(n *= 4); o < n; )
        i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (c.push(i % 1e7), o += 4);
      o = n / 4;
    } else
      throw Error(_o);
  else
    for (; o < n; )
      c[o++] = Math.random() * 1e7 | 0;
  for (n = c[--o], e %= te, n && e && (i = ye(10, te - e), c[o] = (n / i | 0) * i); c[o] === 0; o--)
    c.pop();
  if (o < 0)
    r = 0, c = [0];
  else {
    for (r = -1; c[0] === 0; r -= te)
      c.shift();
    for (n = 1, i = c[0]; i >= 10; i /= 10)
      n++;
    n < te && (r -= te - n);
  }
  return s.e = r, s.d = c, s;
}
function ou(e) {
  return ee(e = new this(e), e.e + 1, this.rounding);
}
function su(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function au(e) {
  return new this(e).sin();
}
function cu(e) {
  return new this(e).sinh();
}
function fu(e) {
  return new this(e).sqrt();
}
function uu(e, t) {
  return new this(e).sub(t);
}
function lu() {
  var e = 0, t = arguments, r = new this(t[e]);
  for (oe = !1; r.s && ++e < t.length; )
    r = r.plus(t[e]);
  return oe = !0, ee(r, this.precision, this.rounding);
}
function hu(e) {
  return new this(e).tan();
}
function du(e) {
  return new this(e).tanh();
}
function pu(e) {
  return ee(e = new this(e), e.e + 1, 1);
}
U[Symbol.for("nodejs.util.inspect.custom")] = U.toString;
U[Symbol.toStringTag] = "Decimal";
var Ut = U.constructor = To(Gn);
Jr = new Ut(Jr);
en = new Ut(en);
var Bi = {}, vu = {
  get exports() {
    return Bi;
  },
  set exports(e) {
    Bi = e;
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
(function(e, t) {
  (function(r, n) {
    e.exports = n.call(r);
  })(re, function() {
    var r = r || {}, n = document.querySelectorAll.bind(document), i = Object.prototype.toString, o = "ontouchstart" in window;
    function s(d) {
      return d !== null && d === d.window;
    }
    function c(d) {
      return s(d) ? d : d.nodeType === 9 && d.defaultView;
    }
    function f(d) {
      var x = typeof d;
      return x === "function" || x === "object" && !!d;
    }
    function a(d) {
      return f(d) && d.nodeType > 0;
    }
    function u(d) {
      var x = i.call(d);
      return x === "[object String]" ? n(d) : f(d) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(x) && d.hasOwnProperty("length") ? d : a(d) ? [d] : [];
    }
    function h(d) {
      var x, y, _ = { top: 0, left: 0 }, C = d && d.ownerDocument;
      return x = C.documentElement, typeof d.getBoundingClientRect < "u" && (_ = d.getBoundingClientRect()), y = c(C), {
        top: _.top + y.pageYOffset - x.clientTop,
        left: _.left + y.pageXOffset - x.clientLeft
      };
    }
    function l(d) {
      var x = "";
      for (var y in d)
        d.hasOwnProperty(y) && (x += y + ":" + d[y] + ";");
      return x;
    }
    var p = {
      // Effect duration
      duration: 750,
      // Effect delay (check for scroll before showing effect)
      delay: 200,
      show: function(d, x, y) {
        if (d.button === 2)
          return !1;
        x = x || this;
        var _ = document.createElement("div");
        _.className = "waves-ripple waves-rippling", x.appendChild(_);
        var C = h(x), T = 0, D = 0;
        "touches" in d && d.touches.length ? (T = d.touches[0].pageY - C.top, D = d.touches[0].pageX - C.left) : (T = d.pageY - C.top, D = d.pageX - C.left), D = D >= 0 ? D : 0, T = T >= 0 ? T : 0;
        var S = "scale(" + x.clientWidth / 100 * 3 + ")", A = "translate(0,0)";
        y && (A = "translate(" + y.x + "px, " + y.y + "px)"), _.setAttribute("data-hold", Date.now()), _.setAttribute("data-x", D), _.setAttribute("data-y", T), _.setAttribute("data-scale", S), _.setAttribute("data-translate", A);
        var L = {
          top: T + "px",
          left: D + "px"
        };
        _.classList.add("waves-notransition"), _.setAttribute("style", l(L)), _.classList.remove("waves-notransition"), L["-webkit-transform"] = S + " " + A, L["-moz-transform"] = S + " " + A, L["-ms-transform"] = S + " " + A, L["-o-transform"] = S + " " + A, L.transform = S + " " + A, L.opacity = "1";
        var I = d.type === "mousemove" ? 2500 : p.duration;
        L["-webkit-transition-duration"] = I + "ms", L["-moz-transition-duration"] = I + "ms", L["-o-transition-duration"] = I + "ms", L["transition-duration"] = I + "ms", _.setAttribute("style", l(L));
      },
      hide: function(d, x) {
        x = x || this;
        for (var y = x.getElementsByClassName("waves-rippling"), _ = 0, C = y.length; _ < C; _++)
          g(d, x, y[_]);
        o && (x.removeEventListener("touchend", p.hide), x.removeEventListener("touchcancel", p.hide)), x.removeEventListener("mouseup", p.hide), x.removeEventListener("mouseleave", p.hide);
      }
    }, b = {
      // Wrap <input> tag so it can perform the effect
      input: function(d) {
        var x = d.parentNode;
        if (!(x.tagName.toLowerCase() === "i" && x.classList.contains("waves-effect"))) {
          var y = document.createElement("i");
          y.className = d.className + " waves-input-wrapper", d.className = "waves-button-input", x.replaceChild(y, d), y.appendChild(d);
          var _ = window.getComputedStyle(d, null), C = _.color, T = _.backgroundColor;
          y.setAttribute("style", "color:" + C + ";background:" + T), d.setAttribute("style", "background-color:rgba(0,0,0,0);");
        }
      },
      // Wrap <img> tag so it can perform the effect
      img: function(d) {
        var x = d.parentNode;
        if (!(x.tagName.toLowerCase() === "i" && x.classList.contains("waves-effect"))) {
          var y = document.createElement("i");
          x.replaceChild(y, d), y.appendChild(d);
        }
      }
    };
    function g(d, x, y) {
      if (y) {
        y.classList.remove("waves-rippling");
        var _ = y.getAttribute("data-x"), C = y.getAttribute("data-y"), T = y.getAttribute("data-scale"), D = y.getAttribute("data-translate"), S = Date.now() - Number(y.getAttribute("data-hold")), A = 350 - S;
        A < 0 && (A = 0), d.type === "mousemove" && (A = 150);
        var L = d.type === "mousemove" ? 2500 : p.duration;
        setTimeout(function() {
          var I = {
            top: C + "px",
            left: _ + "px",
            opacity: "0",
            // Duration
            "-webkit-transition-duration": L + "ms",
            "-moz-transition-duration": L + "ms",
            "-o-transition-duration": L + "ms",
            "transition-duration": L + "ms",
            "-webkit-transform": T + " " + D,
            "-moz-transform": T + " " + D,
            "-ms-transform": T + " " + D,
            "-o-transform": T + " " + D,
            transform: T + " " + D
          };
          y.setAttribute("style", l(I)), setTimeout(function() {
            try {
              x.removeChild(y);
            } catch {
              return !1;
            }
          }, L);
        }, A);
      }
    }
    var E = {
      /* uses an integer rather than bool so there's no issues with
       * needing to clear timeouts if another touch event occurred
       * within the 500ms. Cannot mouseup between touchstart and
       * touchend, nor in the 500ms after touchend. */
      touches: 0,
      allowEvent: function(d) {
        var x = !0;
        return /^(mousedown|mousemove)$/.test(d.type) && E.touches && (x = !1), x;
      },
      registerEvent: function(d) {
        var x = d.type;
        x === "touchstart" ? E.touches += 1 : /^(touchend|touchcancel)$/.test(x) && setTimeout(function() {
          E.touches && (E.touches -= 1);
        }, 500);
      }
    };
    function N(d) {
      if (E.allowEvent(d) === !1)
        return null;
      for (var x = null, y = d.target || d.srcElement; y.parentElement; ) {
        if (!(y instanceof SVGElement) && y.classList.contains("waves-effect")) {
          x = y;
          break;
        }
        y = y.parentElement;
      }
      return x;
    }
    function w(d) {
      var x = N(d);
      if (x !== null) {
        if (x.disabled || x.getAttribute("disabled") || x.classList.contains("disabled"))
          return;
        if (E.registerEvent(d), d.type === "touchstart" && p.delay) {
          var y = !1, _ = setTimeout(function() {
            _ = null, p.show(d, x);
          }, p.delay), C = function(S) {
            _ && (clearTimeout(_), _ = null, p.show(d, x)), y || (y = !0, p.hide(S, x)), D();
          }, T = function(S) {
            _ && (clearTimeout(_), _ = null), C(S), D();
          };
          x.addEventListener("touchmove", T, !1), x.addEventListener("touchend", C, !1), x.addEventListener("touchcancel", C, !1);
          var D = function() {
            x.removeEventListener("touchmove", T), x.removeEventListener("touchend", C), x.removeEventListener("touchcancel", C);
          };
        } else
          p.show(d, x), o && (x.addEventListener("touchend", p.hide, !1), x.addEventListener("touchcancel", p.hide, !1)), x.addEventListener("mouseup", p.hide, !1), x.addEventListener("mouseleave", p.hide, !1);
      }
    }
    return r.init = function(d) {
      var x = document.body;
      d = d || {}, "duration" in d && (p.duration = d.duration), "delay" in d && (p.delay = d.delay), o && (x.addEventListener("touchstart", w, !1), x.addEventListener("touchcancel", E.registerEvent, !1), x.addEventListener("touchend", E.registerEvent, !1)), x.addEventListener("mousedown", w, !1);
    }, r.attach = function(d, x) {
      d = u(d), i.call(x) === "[object Array]" && (x = x.join(" ")), x = x ? " " + x : "";
      for (var y, _, C = 0, T = d.length; C < T; C++)
        y = d[C], _ = y.tagName.toLowerCase(), ["input", "img"].indexOf(_) !== -1 && (b[_](y), y = y.parentElement), y.className.indexOf("waves-effect") === -1 && (y.className += " waves-effect" + x);
    }, r.ripple = function(d, x) {
      d = u(d);
      var y = d.length;
      if (x = x || {}, x.wait = x.wait || 0, x.position = x.position || null, y) {
        for (var _, C, T, D = {}, S = 0, A = {
          type: "mousedown",
          button: 1
        }, L = function(F, P) {
          return function() {
            p.hide(F, P);
          };
        }; S < y; S++)
          if (_ = d[S], C = x.position || {
            x: _.clientWidth / 2,
            y: _.clientHeight / 2
          }, T = h(_), D.x = T.left + C.x, D.y = T.top + C.y, A.pageX = D.x, A.pageY = D.y, p.show(A, _), x.wait >= 0 && x.wait !== null) {
            var I = {
              type: "mouseup",
              button: 1
            };
            setTimeout(L(I, _), x.wait);
          }
      }
    }, r.calm = function(d) {
      d = u(d);
      for (var x = {
        type: "mouseup",
        button: 1
      }, y = 0, _ = d.length; y < _; y++)
        p.hide(x, d[y]);
    }, r.displayEffect = function(d) {
      console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), r.init(d);
    }, r;
  });
})(vu);
const ie = { lunarInfo: [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560], solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"], Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"], Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"], solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"], sTermInfo: ["9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722"], nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"], nStr2: ["初", "十", "廿", "卅"], nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"], lunarFestival: [{ month: "正", day: "初一", name: "春节" }, { month: "正", day: "十五", name: "元宵节" }, { month: "二", day: "初二", name: "龙抬头" }, { month: "五", day: "初五", name: "端午节" }, { month: "七", day: "初七", name: "七夕节" }, { month: "七", day: "十五", name: "中元节" }, { month: "八", day: "十五", name: "中秋节" }, { month: "九", day: "初九", name: "重阳节" }, { month: "腊", day: "除夕", name: "除夕" }], solarFestival: [{ month: 1, day: 1, name: "元旦节" }, { month: 3, day: 8, name: "妇女节" }, { month: 3, day: 12, name: "植树节" }, { month: 4, day: 5, name: "清明节" }, { month: 5, day: 1, name: "劳动节" }, { month: 5, day: 4, name: "青年节" }, { month: 6, day: 1, name: "儿童节" }, { month: 7, day: 1, name: "建党节" }, { month: 8, day: 1, name: "建军节" }, { month: 9, day: 10, name: "教师节" }, { month: 10, day: 1, name: "国庆节" }], lYearDays: function(e) {
  var t, r = 348;
  for (t = 32768; t > 8; t >>= 1)
    r += ie.lunarInfo[e - 1900] & t ? 1 : 0;
  return r + ie.leapDays(e);
}, leapMonth: function(e) {
  return 15 & ie.lunarInfo[e - 1900];
}, leapDays: function(e) {
  return ie.leapMonth(e) ? 65536 & ie.lunarInfo[e - 1900] ? 30 : 29 : 0;
}, monthDays: function(e, t) {
  return t > 12 || t < 1 ? -1 : ie.lunarInfo[e - 1900] & 65536 >> t ? 30 : 29;
}, solarDays: function(e, t) {
  if (t > 12 || t < 1)
    return -1;
  var r = t - 1;
  return r == 1 ? e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 29 : 28 : ie.solarMonth[r];
}, toGanZhiYear: function(e) {
  var t = (e - 3) % 10, r = (e - 3) % 12;
  return t == 0 && (t = 10), r == 0 && (r = 12), ie.Gan[t - 1] + ie.Zhi[r - 1];
}, toAstro: function(e, t) {
  return "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2 * e - (t < [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22][e - 1] ? 2 : 0), 2) + "座";
}, toGanZhi: function(e) {
  return ie.Gan[e % 10] + ie.Zhi[e % 12];
}, getTerm: function(e, t) {
  if (e < 1900 || e > 2100 || t < 1 || t > 24)
    return -1;
  var r = ie.sTermInfo[e - 1900], n = [parseInt("0x" + r.substr(0, 5)).toString(), parseInt("0x" + r.substr(5, 5)).toString(), parseInt("0x" + r.substr(10, 5)).toString(), parseInt("0x" + r.substr(15, 5)).toString(), parseInt("0x" + r.substr(20, 5)).toString(), parseInt("0x" + r.substr(25, 5)).toString()], i = [n[0].substr(0, 1), n[0].substr(1, 2), n[0].substr(3, 1), n[0].substr(4, 2), n[1].substr(0, 1), n[1].substr(1, 2), n[1].substr(3, 1), n[1].substr(4, 2), n[2].substr(0, 1), n[2].substr(1, 2), n[2].substr(3, 1), n[2].substr(4, 2), n[3].substr(0, 1), n[3].substr(1, 2), n[3].substr(3, 1), n[3].substr(4, 2), n[4].substr(0, 1), n[4].substr(1, 2), n[4].substr(3, 1), n[4].substr(4, 2), n[5].substr(0, 1), n[5].substr(1, 2), n[5].substr(3, 1), n[5].substr(4, 2)];
  return parseInt(i[t - 1]);
}, toChinaMonth: function(e) {
  if (e > 12 || e < 1)
    return -1;
  var t = ie.nStr3[e - 1];
  return t += "月";
}, toChinaDay: function(e) {
  var t;
  switch (e) {
    case 10:
      t = "初十";
      break;
    case 20:
      t = "二十";
      break;
    case 30:
      t = "三十";
      break;
    default:
      t = ie.nStr2[Math.floor(e / 10)], t += ie.nStr1[e % 10];
  }
  return t;
}, getAnimal: function(e) {
  return ie.Animals[(e - 4) % 12];
}, getFestival: (e, t, r, n) => {
  let i = null;
  const o = parseInt(e + "");
  return i = o ? ie.solarFestival.find((s) => s.month === o && s.day == t) : ie.lunarFestival.find((s) => `${s.month}月` === e && s.day === t), i;
}, solar2lunar: function(e, t, r) {
  if (e < 1900 || e > 2100 || e == 1900 && t == 1 && r < 31)
    return -1;
  if (e)
    n = new Date(e, parseInt(t + "") - 1, r);
  else
    var n = /* @__PURE__ */ new Date();
  var i, o = 0, s = (e = n.getFullYear(), t = n.getMonth() + 1, r = n.getDate(), (Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()) - Date.UTC(1900, 0, 31)) / 864e5);
  for (i = 1900; i < 2101 && s > 0; i++)
    s -= o = ie.lYearDays(i);
  s < 0 && (s += o, i--);
  var c = /* @__PURE__ */ new Date(), f = !1;
  c.getFullYear() == e && c.getMonth() + 1 == t && c.getDate() == r && (f = !0);
  var a = n.getDay(), u = ie.nStr1[a];
  a == 0 && (a = 7);
  var h = i, l = ie.leapMonth(i), p = !1;
  for (i = 1; i < 13 && s > 0; i++)
    l > 0 && i == l + 1 && p == 0 ? (--i, p = !0, o = ie.leapDays(h)) : o = ie.monthDays(h, i), p == 1 && i == l + 1 && (p = !1), s -= o;
  s == 0 && l > 0 && i == l + 1 && (p ? p = !1 : (p = !0, --i)), s < 0 && (s += o, --i);
  var b = i, g = s + 1, E = t - 1, N = ie.toGanZhiYear(h), w = ie.getTerm(h, 2 * t - 1), d = ie.getTerm(h, 2 * t), x = ie.toGanZhi(12 * (e - 1900) + t + 11);
  r >= w && (x = ie.toGanZhi(12 * (e - 1900) + t + 12));
  var y = !1, _ = null;
  w == r && (y = !0, _ = ie.solarTerm[2 * t - 2]), d == r && (y = !0, _ = ie.solarTerm[2 * t - 1]);
  var C = Date.UTC(e, E, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, T = ie.toGanZhi(C + r - 1), D = ie.toAstro(t, r);
  const S = ie.toChinaMonth(b), A = ie.toChinaDay(g);
  return { lYear: h, lMonth: b, lDay: g, Animal: ie.getAnimal(h), IMonthCn: (p ? "闰" : "") + S, IDayCn: A, cYear: e, cMonth: t, cDay: r, gzYear: N, gzMonth: x, gzDay: T, isToday: f, isLeap: p, nWeek: a, ncWeek: "星期" + u, isTerm: y, Term: _, astro: D, festcn: ie.getFestival(S, A, e, t), fest: ie.getFestival(t, r, e) };
}, lunar2solar: function(e, t, r, n = !0) {
  n = !!n;
  var i = ie.leapMonth(e);
  if (ie.leapDays(e), n && i != t || e == 2100 && t == 12 && r > 1 || e == 1900 && t == 1 && r < 31)
    return -1;
  var o = ie.monthDays(e, t), s = o;
  if (n && (s = ie.leapDays(e)), e < 1900 || e > 2100 || r > s)
    return -1;
  for (var c = 0, f = 1900; f < e; f++)
    c += ie.lYearDays(f);
  var a = 0, u = !1;
  for (f = 1; f < t; f++)
    a = ie.leapMonth(e), u || a <= f && a > 0 && (c += ie.leapDays(e), u = !0), c += ie.monthDays(e, f);
  n && (c += o);
  var h = Date.UTC(1900, 1, 30, 0, 0, 0), l = new Date(864e5 * (c + r - 31) + h), p = l.getUTCFullYear(), b = l.getUTCMonth() + 1, g = l.getUTCDate();
  return ie.solar2lunar(p, b, g);
} };
ie.lunar2solar;
function Je(e, t) {
  return Object.prototype.toString.call(e) === `[object ${t}]`;
}
function Ai(e) {
  return Object.prototype.toString.call(e);
}
const u0 = class {
  static getTypeLong(t) {
    return Ai(t);
  }
  static getType(t) {
    const r = Ai(t);
    return r.substring(8, r.length - 1).toLocaleLowerCase();
  }
  static isDef(t) {
    return t !== void 0;
  }
  static isUnDef(t) {
    return !this.isDef(t);
  }
  static isObject(t) {
    return t !== null && Je(t, "Object");
  }
  static isEmpty(t) {
    return this.isArray(t) || this.isString(t) ? t.length === 0 : t instanceof Map || t instanceof Set ? t.size === 0 : !!this.isObject(t) && Object.keys(t).length === 0;
  }
  static isDate(t) {
    return Je(t, "Date");
  }
  static isNull(t) {
    return t === null;
  }
  static isNullAndUnDef(t) {
    return this.isUnDef(t) && this.isNull(t);
  }
  static isNullOrUnDef(t) {
    return this.isUnDef(t) || this.isNull(t);
  }
  static isNumber(t) {
    return Je(t, "Number");
  }
  static isPromise(t) {
    return Je(t, "Promise") && this.isObject(t) && this.isFunction(t.then) && this.isFunction(t.catch);
  }
  static isString(t) {
    return Je(t, "String");
  }
  static isFunction(t) {
    return typeof t == "function";
  }
  static isBoolean(t) {
    return Je(t, "Boolean");
  }
  static isRegExp(t) {
    return Je(t, "RegExp");
  }
  static isArray(t) {
    return t && Array.isArray(t);
  }
  static isWindow(t) {
    return typeof window < "u" && Je(t, "Window");
  }
  static isElement(t) {
    return this.isObject(t) && !!t.tagName;
  }
  static isMap(t) {
    return Je(t, "Map");
  }
  static isUrl(t) {
    return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(t);
  }
};
let $t = u0;
kn($t, "isServer", typeof window > "u"), kn($t, "isClient", !u0.isServer);
function vr(e) {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-f]{6})$/.test(e);
}
function Rn(e) {
  let t = e.toLowerCase();
  if (vr(e)) {
    if (t.length === 4) {
      let n = "#";
      for (let i = 1; i < 4; i += 1)
        n += t.slice(i, i + 1).concat(t.slice(i, i + 1));
      t = n;
    }
    const r = [];
    for (let n = 1; n < 7; n += 2)
      r.push(parseInt("0x" + t.slice(n, n + 2)));
    return "RGB(" + r.join(",") + ")";
  }
  return t;
}
function Tn(e, t) {
  const r = parseInt(e, 16) + t, n = r > 255 ? 255 : r;
  return n.toString(16).length > 1 ? n.toString(16) : `0${n.toString(16)}`;
}
function Ri(e, t, r) {
  const n = [e, t, r].map((i) => (i /= 255) <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
  return 0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2];
}
function Nn(e, t) {
  const r = parseInt(e, 16) - t, n = r < 0 ? 0 : r;
  return n.toString(16).length > 1 ? n.toString(16) : `0${n.toString(16)}`;
}
var Ti = Object.freeze({ __proto__: null, isHexColor: vr, rgbToHex: function(e, t, r) {
  const n = (e << 16 | t << 8 | r).toString(16);
  return "#" + new Array(Math.abs(n.length - 7)).join("0") + n;
}, hexToRGB: Rn, hexToRGBA: function(e, t) {
  let r = e.toLowerCase();
  if (vr(e)) {
    if (r.length === 4) {
      let i = "#";
      for (let o = 1; o < 4; o += 1)
        i += r.slice(o, o + 1).concat(r.slice(o, o + 1));
      r = i;
    }
    const n = [];
    for (let i = 1; i < 7; i += 2)
      n.push(parseInt("0x" + r.slice(i, i + 2)));
    return `RGBA(${n.join(",")},${t})`;
  }
  return r;
}, colorIsDark: function(e) {
  if (!vr(e))
    return;
  const [t, r, n] = Rn(e).replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",").map((i) => Number(i));
  return 0.299 * t + 0.578 * r + 0.114 * n < 192;
}, darken: function(e, t) {
  return e = e.indexOf("#") >= 0 ? e.substring(1, e.length) : e, t = Math.trunc(255 * t / 100), `#${Nn(e.substring(0, 2), t)}${Nn(e.substring(2, 4), t)}${Nn(e.substring(4, 6), t)}`;
}, lighten: function(e, t) {
  return e = e.indexOf("#") >= 0 ? e.substring(1, e.length) : e, t = Math.trunc(255 * t / 100), `#${Tn(e.substring(0, 2), t)}${Tn(e.substring(2, 4), t)}${Tn(e.substring(4, 6), t)}`;
}, calculateBestTextColor: function(e) {
  const t = Rn(e.substring(1));
  var r, n;
  return r = t.split(","), n = [0, 0, 0], (Ri(~~r[0], ~~r[1], ~~r[2]) + 0.05) / (Ri(n[0], n[1], n[2]) + 0.05) >= 12 ? "#000000" : "#FFFFFF";
} });
for (let e = 0; e <= 15; e++)
  e.toString(16);
let xu = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof globalThis == "object" && globalThis.globalThis === globalThis ? globalThis : void 0;
xu.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && /Safari/.test(navigator.userAgent);
var On = { local: { has: (e) => Object.prototype.hasOwnProperty.call(localStorage, e), setItem: (e, t, r = 0) => {
  const n = (/* @__PURE__ */ new Date()).getTime(), i = $t.isDate(r) ? n + 1e3 * r : 0;
  localStorage.setItem(e, JSON.stringify({ value: t, overTime: i }));
}, getItem: (e) => {
  const t = localStorage.getItem(e);
  if (!t)
    return null;
  const r = JSON.parse(t);
  return (/* @__PURE__ */ new Date()).getTime() > r.overTime && r.overTime !== 0 ? (localStorage.removeItem(e), null) : r.value;
}, removeItem: (e) => {
  e && localStorage.removeItem(e);
}, clear: (e) => {
  e ? localStorage.removeItem(e) : localStorage.clear();
}, size: () => {
  const e = Object.keys(localStorage);
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    const n = e[r], i = localStorage.getItem(n) || "";
    t += 2 * (n.length + i.length);
  }
  return Math.round(t / 1024);
} }, session: { has: (e) => Object.prototype.hasOwnProperty.call(sessionStorage, e), setItem: (e, t, r = 0) => {
  const n = (/* @__PURE__ */ new Date()).getTime(), i = r ? n + 1e3 * r : 0;
  sessionStorage.setItem(e, JSON.stringify({ value: t, overTime: i }));
}, getItem: (e) => {
  const t = sessionStorage.getItem(e);
  if (!t)
    return null;
  const r = JSON.parse(t);
  return (/* @__PURE__ */ new Date()).getTime() > r.overTime && r.overTime !== 0 ? (sessionStorage.removeItem(e), null) : r.value;
}, removeItem: (e) => {
  e && sessionStorage.removeItem(e);
}, clear: (e) => {
  e ? sessionStorage.removeItem(e) : sessionStorage.clear();
}, size: () => {
  const e = Object.keys(sessionStorage);
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    const n = e[r], i = sessionStorage.getItem(n) || "";
    t += 2 * (n.length + i.length);
  }
  return Math.round(t / 1024);
} }, forage: Ic, cookie: ro };
window.socketMap = /* @__PURE__ */ new Map();
Ut.set({ precision: 14 });
const bu = (e) => {
  const t = "--ik-main-icon-deep-color", r = "--ik-main-icon-color", n = /fill="([^"]*)"/g;
  let i, o = 0, s = e;
  for (s = s.replaceAll('fill="#71778D"', `fill="var(${t})"`), s = s.replaceAll('fill="#A1A5B7"', `fill="var(${t})"`), s = s.replaceAll('fill="#E3E4E9"', `fill="var(${r})"`), s = s.replaceAll('fill="#B9BAC5"', `fill="var(${r})"`); (i = n.exec(e)) !== null; ) {
    const c = i[1];
    o === 0 ? s = s.replace(`fill="${c}"`, `fill="var(${Ti.colorIsDark(c) ? t : r})"`) : s = s.replace(`fill="${c}"`, `fill="var(${Ti.colorIsDark(c) ? t : r})"`), o++;
  }
  return s;
}, gu = (e) => {
  const t = /<symbol(.|\n)*?<\/symbol>/g, r = e == null ? void 0 : e.match(t);
  if (!r)
    return {};
  const n = {}, i = new DOMParser();
  for (const o of r) {
    const s = i.parseFromString(o, "text/xml").firstChild;
    if (!s || s.nodeName !== "symbol")
      continue;
    const c = s.getAttribute("id");
    if (!c)
      continue;
    const f = o.replace(/<symbol[^>]*>|<\/symbol>/gi, ""), a = bu(f);
    n[c] = a;
  }
  return n;
}, mu = gu, yu = ["innerHTML"], wu = ["xlink:href"], _u = ["innerHTML"], Eu = ["xlink:href"], Su = ["innerHTML"], ku = ["xlink:href"], Cu = ["innerHTML"], Bu = ["xlink:href"], Au = /* @__PURE__ */ Ni({
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
  setup(e, { emit: t }) {
    const r = e, n = On.local.has("ik-svg"), i = n ? On.local.getItem("ik-svg") : mu(window._iconfont_svg_string);
    n || On.local.setItem("ik-svg", i);
    const o = {}.VITE_ICON_SUFFIX, s = ht(() => {
      var p, b, g, E;
      return (p = r.name) != null && p.includes("iksvg") ? "svg" : ((b = r == null ? void 0 : r.name) == null ? void 0 : b.indexOf("-")) > 0 || ((g = r == null ? void 0 : r.name) == null ? void 0 : g.indexOf(o)) === 0 ? r.runtime ? "svg" : "css" : (E = r.name) != null && E.includes(":") ? "svg" : "custom";
    }), c = ht(() => {
      var p;
      if (((p = r.name) == null ? void 0 : p.indexOf("i-")) === 0) {
        let b = r.name;
        return r.runtime && (b = b.replace("i-", "")), b;
      } else
        return r.name;
    }), f = ht(() => {
      const p = [];
      if (r.flip !== "")
        switch (r.flip) {
          case "horizontal":
            p.push("rotateY(180deg)");
            break;
          case "vertical":
            p.push("rotateX(180deg)");
            break;
          case "both":
            p.push("rotateX(180deg)"), p.push("rotateY(180deg)");
            break;
        }
      return r.rotate !== 0 && p.push(`rotate(${r.rotate % 360}deg)`), `transform: ${p.join(" ")};`;
    }), a = ht(
      () => r.showBg ? `width: ${r.width}px; height: ${r.width}px;background-color: ${r.type === "primary" ? r.background : ""};` : ""
    ), u = ht(() => {
      var p;
      if (i[c.value])
        return i[c.value];
      {
        const b = (p = r.name) == null ? void 0 : p.replace("icon-", "iksvg_");
        return i[b] ? i[b] : "";
      }
    }), h = ht(() => ["all", "label"].includes(r.showType)), l = ht(
      () => ["big", "default", "small"].includes(r.size) ? r.size === "big" ? 20 : r.size === "default" ? 16 : 14 : r.size
    );
    return (p, b) => {
      const g = er("el-icon"), E = er("el-button"), N = er("el-tooltip"), w = er("iksvg");
      return pe(), Pe(w, { class: "inline-flex" }, {
        default: Me(() => [
          r.pop && !h.value ? (pe(), Pe(N, {
            key: 0,
            placement: "top",
            title: "",
            "popper-class": "ik-svg-icon-popover",
            trigger: "hover",
            enterable: !1,
            content: e.title
          }, {
            default: Me(() => [
              e.showType === "icon" ? (pe(), Pe(g, yt({
                key: 0,
                style: a.value,
                class: ["ik-icon-btn", [
                  r.showBg ? "show-bg" : null,
                  e.type,
                  e.disabled ? "disabled" : null,
                  e.startMargin ? "start-margin" : null,
                  `ik-${c.value}`
                ]],
                size: l.value
              }, p.$attrs, {
                onClick: b[0] || (b[0] = (d) => t("click", d))
              }), {
                default: Me(() => {
                  var d, x;
                  return [
                    u.value ? (pe(), Ie("svg", {
                      key: 0,
                      style: Se(f.value),
                      viewBox: "0 0 1024 1024",
                      innerHTML: u.value
                    }, null, 12, yu)) : s.value === "css" ? (pe(), Ie("i", {
                      key: 1,
                      class: tr(`${nt(o)} ${c.value} ${(d = e.name) == null ? void 0 : d.split("-")[0]} ${(x = e.name) != null && x.startsWith("ik") ? "ik iksvg" : "iconfont"}`),
                      style: Se(`${f.value};fontSize:${l.value}px;`)
                    }, null, 6)) : s.value === "svg" ? (pe(), Pe(nt(sr), {
                      key: 2,
                      icon: c.value,
                      style: Se(f.value)
                    }, null, 8, ["icon", "style"])) : (pe(), Ie("svg", {
                      key: 3,
                      style: Se(f.value),
                      "aria-hidden": "true"
                    }, [
                      rr("use", {
                        "xlink:href": `#icon-${c.value}`
                      }, null, 8, wu)
                    ], 4))
                  ];
                }),
                _: 1
              }, 16, ["style", "size", "class"])) : e.showType === "label" ? (pe(), Pe(E, {
                key: 1,
                text: ""
              }, {
                default: Me(() => [
                  nr(ir(e.label), 1)
                ]),
                _: 1
              })) : e.showType === "all" ? (pe(), Pe(E, { key: 2 }, {
                icon: Me(() => [
                  v0(g, yt({
                    style: a.value,
                    class: ["ik-icon-btn", [
                      r.showBg ? "show-bg" : null,
                      e.type,
                      e.disabled ? "disabled" : null,
                      e.startMargin ? "start-margin" : null,
                      `ik-${c.value}`
                    ]],
                    size: l.value
                  }, p.$attrs, {
                    onClick: b[1] || (b[1] = (d) => t("click", d))
                  }), {
                    default: Me(() => {
                      var d, x;
                      return [
                        u.value ? (pe(), Ie("svg", {
                          key: 0,
                          style: Se(f.value),
                          viewBox: "0 0 1024 1024",
                          innerHTML: u.value
                        }, null, 12, _u)) : s.value === "css" ? (pe(), Ie("i", {
                          key: 1,
                          class: tr(`${nt(o)} ${c.value} ${(d = e.name) == null ? void 0 : d.split("-")[0]} ${(x = e.name) != null && x.startsWith("ik") ? "ik iksvg" : "iconfont"}`),
                          style: Se(`${f.value};fontSize:${l.value}px;`)
                        }, null, 6)) : s.value === "svg" ? (pe(), Pe(nt(sr), {
                          key: 2,
                          icon: c.value,
                          style: Se(f.value)
                        }, null, 8, ["icon", "style"])) : (pe(), Ie("svg", {
                          key: 3,
                          style: Se(f.value),
                          "aria-hidden": "true"
                        }, [
                          rr("use", {
                            "xlink:href": `#icon-${c.value}`
                          }, null, 8, Eu)
                        ], 4))
                      ];
                    }),
                    _: 1
                  }, 16, ["style", "size", "class"])
                ]),
                default: Me(() => [
                  nr(" " + ir(e.label), 1)
                ]),
                _: 1
              })) : x0("", !0)
            ]),
            _: 1
          }, 8, ["content"])) : (pe(), Ie(ts, { key: 1 }, [
            e.showType === "icon" ? (pe(), Pe(g, yt({
              key: 0,
              style: a.value,
              class: ["ik-icon-btn", [
                r.showBg ? "show-bg" : null,
                e.type,
                e.disabled ? "disabled" : null,
                e.startMargin ? "start-margin" : null,
                `ik-${c.value}`
              ]],
              size: l.value
            }, p.$attrs, {
              onClick: b[2] || (b[2] = (d) => t("click", d))
            }), {
              default: Me(() => {
                var d, x;
                return [
                  u.value ? (pe(), Ie("svg", {
                    key: 0,
                    style: Se(f.value),
                    viewBox: "0 0 1024 1024",
                    innerHTML: u.value
                  }, null, 12, Su)) : s.value === "css" ? (pe(), Ie("i", {
                    key: 1,
                    class: tr(`${nt(o)} ${c.value} ${(d = e.name) == null ? void 0 : d.split("-")[0]} ${(x = e.name) != null && x.startsWith("ik") ? "ik iksvg" : "iconfont"}`),
                    style: Se(`${f.value};fontSize:${l.value}px;`)
                  }, null, 6)) : s.value === "svg" ? (pe(), Pe(nt(sr), {
                    key: 2,
                    icon: c.value,
                    style: Se(f.value)
                  }, null, 8, ["icon", "style"])) : (pe(), Ie("svg", {
                    key: 3,
                    style: Se(f.value),
                    "aria-hidden": "true"
                  }, [
                    rr("use", {
                      "xlink:href": `#icon-${c.value}`
                    }, null, 8, ku)
                  ], 4))
                ];
              }),
              _: 1
            }, 16, ["style", "size", "class"])) : e.showType === "label" ? (pe(), Pe(E, yt({
              key: 1,
              text: ""
            }, p.$attrs), {
              default: Me(() => [
                nr(ir(e.label), 1)
              ]),
              _: 1
            }, 16)) : e.showType === "all" ? (pe(), Pe(E, yt({
              key: 2,
              text: "",
              type: "primary"
            }, p.$attrs), {
              icon: Me(() => [
                v0(g, yt({
                  style: a.value,
                  class: ["ik-icon-btn hover", [e.type, `ik-${c.value}`]]
                }, p.$attrs, {
                  onClick: b[3] || (b[3] = (d) => t("click", d))
                }), {
                  default: Me(() => {
                    var d, x;
                    return [
                      u.value ? (pe(), Ie("svg", {
                        key: 0,
                        style: Se(f.value),
                        viewBox: "0 0 1024 1024",
                        innerHTML: u.value
                      }, null, 12, Cu)) : s.value === "css" ? (pe(), Ie("i", {
                        key: 1,
                        class: tr(`${nt(o)} ${c.value} ${(d = e.name) == null ? void 0 : d.split("-")[0]} ${(x = e.name) != null && x.startsWith("ik") ? "ik iksvg" : "iconfont"}`),
                        style: Se(`${f.value};fontSize:${l.value}px;`)
                      }, null, 6)) : s.value === "svg" ? (pe(), Pe(nt(sr), {
                        key: 2,
                        icon: c.value,
                        style: Se(f.value)
                      }, null, 8, ["icon", "style"])) : (pe(), Ie("svg", {
                        key: 3,
                        style: Se(f.value),
                        "aria-hidden": "true"
                      }, [
                        rr("use", {
                          "xlink:href": `#icon-${c.value}`
                        }, null, 8, Bu)
                      ], 4))
                    ];
                  }),
                  _: 1
                }, 16, ["style", "class"])
              ]),
              default: Me(() => [
                nr(" " + ir(e.label), 1)
              ]),
              _: 1
            }, 16)) : x0("", !0)
          ], 64))
        ]),
        _: 1
      });
    };
  }
});
const Ru = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, Tu = /* @__PURE__ */ Ru(Au, [["__scopeId", "data-v-3d0fc4c6"]]), Lu = rs(Tu);
export {
  Lu as IkSvgIcon,
  Lu as default
};
