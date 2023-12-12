var Uf = Object.defineProperty;
var Wf = (t, e, r) => e in t ? Uf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var vt = (t, e, r) => (Wf(t, typeof e != "symbol" ? e + "" : e, r), r);
import { defineComponent as Ys, h as mn, Fragment as jf, Teleport as Vf, computed as qf, ref as Ji, reactive as Yf, watch as Gf, onMounted as $f, resolveComponent as Po, openBlock as Rr, createElementBlock as nn, createVNode as es, unref as ts, withCtx as sn, createElementVNode as on, createTextVNode as Qf, toDisplayString as Tr, createCommentVNode as Ho, createBlock as Zf, withModifiers as Xf } from "vue";
import "lodash-es";
import { DeleteFilled as Kf } from "@element-plus/icons-vue";
const Jf = (t, e) => {
  if (t.install = (r) => {
    for (const n of [t, ...Object.values(e ?? {})])
      r.component(n.name, n);
  }, e)
    for (const [r, n] of Object.entries(e))
      t[r] = n;
  return t;
};
var Ci, ne, jl, hr, qt, Lo, Vl, ql, Cn = {}, Yl = [], ed = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Rt(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function Gl(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function D(t, e, r) {
  var n, i, s, o = {};
  for (s in e)
    s == "key" ? n = e[s] : s == "ref" ? i = e[s] : o[s] = e[s];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Ci.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null)
    for (s in t.defaultProps)
      o[s] === void 0 && (o[s] = t.defaultProps[s]);
  return bn(t, o, n, i, null);
}
function bn(t, e, r, n, i) {
  var s = { type: t, props: e, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++jl };
  return i == null && ne.vnode != null && ne.vnode(s), s;
}
function Ue() {
  return { current: null };
}
function Ee(t) {
  return t.children;
}
function td(t, e, r, n, i) {
  var s;
  for (s in r)
    s === "children" || s === "key" || s in e || Dn(t, s, null, r[s], n);
  for (s in e)
    i && typeof e[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || r[s] === e[s] || Dn(t, s, e[s], r[s], n);
}
function Fo(t, e, r) {
  e[0] === "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || ed.test(e) ? r : r + "px";
}
function Dn(t, e, r, n, i) {
  var s;
  e:
    if (e === "style")
      if (typeof r == "string")
        t.style.cssText = r;
      else {
        if (typeof n == "string" && (t.style.cssText = n = ""), n)
          for (e in n)
            r && e in r || Fo(t.style, e, "");
        if (r)
          for (e in r)
            n && r[e] === n[e] || Fo(t.style, e, r[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      s = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + s] = r, r ? n || t.addEventListener(e, s ? Uo : zo, s) : t.removeEventListener(e, s ? Uo : zo, s);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = r ?? "";
          break e;
        } catch {
        }
      typeof r == "function" || (r == null || r === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, r));
    }
}
function zo(t) {
  hr = !0;
  try {
    return this.l[t.type + !1](ne.event ? ne.event(t) : t);
  } finally {
    hr = !1;
  }
}
function Uo(t) {
  hr = !0;
  try {
    return this.l[t.type + !0](ne.event ? ne.event(t) : t);
  } finally {
    hr = !1;
  }
}
function Ye(t, e) {
  this.props = t, this.context = e;
}
function Hr(t, e) {
  if (e == null)
    return t.__ ? Hr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var r; e < t.__k.length; e++)
    if ((r = t.__k[e]) != null && r.__e != null)
      return r.__e;
  return typeof t.type == "function" ? Hr(t) : null;
}
function $l(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((r = t.__k[e]) != null && r.__e != null) {
        t.__e = t.__c.base = r.__e;
        break;
      }
    return $l(t);
  }
}
function rd(t) {
  hr ? setTimeout(t) : Vl(t);
}
function ys(t) {
  (!t.__d && (t.__d = !0) && qt.push(t) && !Rn.__r++ || Lo !== ne.debounceRendering) && ((Lo = ne.debounceRendering) || rd)(Rn);
}
function Rn() {
  var t, e, r, n, i, s, o, a;
  for (qt.sort(function(c, l) {
    return c.__v.__b - l.__v.__b;
  }); t = qt.shift(); )
    t.__d && (e = qt.length, n = void 0, i = void 0, o = (s = (r = t).__v).__e, (a = r.__P) && (n = [], (i = Rt({}, s)).__v = s.__v + 1, Gs(a, s, i, r.__n, a.ownerSVGElement !== void 0, s.__h != null ? [o] : null, n, o ?? Hr(s), s.__h), Jl(n, s), s.__e != o && $l(s)), qt.length > e && qt.sort(function(c, l) {
      return c.__v.__b - l.__v.__b;
    }));
  Rn.__r = 0;
}
function Ql(t, e, r, n, i, s, o, a, c, l) {
  var u, d, f, h, p, v, b, w = n && n.__k || Yl, x = w.length;
  for (r.__k = [], u = 0; u < e.length; u++)
    if ((h = r.__k[u] = (h = e[u]) == null || typeof h == "boolean" ? null : typeof h == "string" || typeof h == "number" || typeof h == "bigint" ? bn(null, h, null, null, h) : Array.isArray(h) ? bn(Ee, { children: h }, null, null, null) : h.__b > 0 ? bn(h.type, h.props, h.key, h.ref ? h.ref : null, h.__v) : h) != null) {
      if (h.__ = r, h.__b = r.__b + 1, (f = w[u]) === null || f && h.key == f.key && h.type === f.type)
        w[u] = void 0;
      else
        for (d = 0; d < x; d++) {
          if ((f = w[d]) && h.key == f.key && h.type === f.type) {
            w[d] = void 0;
            break;
          }
          f = null;
        }
      Gs(t, h, f = f || Cn, i, s, o, a, c, l), p = h.__e, (d = h.ref) && f.ref != d && (b || (b = []), f.ref && b.push(f.ref, null, h), b.push(d, h.__c || p, h)), p != null ? (v == null && (v = p), typeof h.type == "function" && h.__k === f.__k ? h.__d = c = Zl(h, c, t) : c = Xl(t, h, f, w, p, c), typeof r.type == "function" && (r.__d = c)) : c && f.__e == c && c.parentNode != t && (c = Hr(f));
    }
  for (r.__e = v, u = x; u--; )
    w[u] != null && (typeof r.type == "function" && w[u].__e != null && w[u].__e == r.__d && (r.__d = Kl(n).nextSibling), tc(w[u], w[u]));
  if (b)
    for (u = 0; u < b.length; u++)
      ec(b[u], b[++u], b[++u]);
}
function Zl(t, e, r) {
  for (var n, i = t.__k, s = 0; i && s < i.length; s++)
    (n = i[s]) && (n.__ = t, e = typeof n.type == "function" ? Zl(n, e, r) : Xl(r, n, n, i, n.__e, e));
  return e;
}
function Tn(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(r) {
    Tn(r, e);
  }) : e.push(t)), e;
}
function Xl(t, e, r, n, i, s) {
  var o, a, c;
  if (e.__d !== void 0)
    o = e.__d, e.__d = void 0;
  else if (r == null || i != s || i.parentNode == null)
    e:
      if (s == null || s.parentNode !== t)
        t.appendChild(i), o = null;
      else {
        for (a = s, c = 0; (a = a.nextSibling) && c < n.length; c += 1)
          if (a == i)
            break e;
        t.insertBefore(i, s), o = s;
      }
  return o !== void 0 ? o : i.nextSibling;
}
function Kl(t) {
  var e, r, n;
  if (t.type == null || typeof t.type == "string")
    return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--)
      if ((r = t.__k[e]) && (n = Kl(r)))
        return n;
  }
  return null;
}
function Gs(t, e, r, n, i, s, o, a, c) {
  var l, u, d, f, h, p, v, b, w, x, g, m, E, S, C, T = e.type;
  if (e.constructor !== void 0)
    return null;
  r.__h != null && (c = r.__h, a = e.__e = r.__e, e.__h = null, s = [a]), (l = ne.__b) && l(e);
  try {
    e:
      if (typeof T == "function") {
        if (b = e.props, w = (l = T.contextType) && n[l.__c], x = l ? w ? w.props.value : l.__ : n, r.__c ? v = (u = e.__c = r.__c).__ = u.__E : ("prototype" in T && T.prototype.render ? e.__c = u = new T(b, x) : (e.__c = u = new Ye(b, x), u.constructor = T, u.render = id), w && w.sub(u), u.props = b, u.state || (u.state = {}), u.context = x, u.__n = n, d = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), T.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = Rt({}, u.__s)), Rt(u.__s, T.getDerivedStateFromProps(b, u.__s))), f = u.props, h = u.state, u.__v = e, d)
          T.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (T.getDerivedStateFromProps == null && b !== f && u.componentWillReceiveProps != null && u.componentWillReceiveProps(b, x), !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(b, u.__s, x) === !1 || e.__v === r.__v) {
            for (e.__v !== r.__v && (u.props = b, u.state = u.__s, u.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.forEach(function(B) {
              B && (B.__ = e);
            }), g = 0; g < u._sb.length; g++)
              u.__h.push(u._sb[g]);
            u._sb = [], u.__h.length && o.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(b, u.__s, x), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(f, h, p);
          });
        }
        if (u.context = x, u.props = b, u.__P = t, m = ne.__r, E = 0, "prototype" in T && T.prototype.render) {
          for (u.state = u.__s, u.__d = !1, m && m(e), l = u.render(u.props, u.state, u.context), S = 0; S < u._sb.length; S++)
            u.__h.push(u._sb[S]);
          u._sb = [];
        } else
          do
            u.__d = !1, m && m(e), l = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++E < 25);
        u.state = u.__s, u.getChildContext != null && (n = Rt(Rt({}, n), u.getChildContext())), d || u.getSnapshotBeforeUpdate == null || (p = u.getSnapshotBeforeUpdate(f, h)), C = l != null && l.type === Ee && l.key == null ? l.props.children : l, Ql(t, Array.isArray(C) ? C : [C], e, r, n, i, s, o, a, c), u.base = e.__e, e.__h = null, u.__h.length && o.push(u), v && (u.__E = u.__ = null), u.__e = !1;
      } else
        s == null && e.__v === r.__v ? (e.__k = r.__k, e.__e = r.__e) : e.__e = nd(r.__e, e, r, n, i, s, o, c);
    (l = ne.diffed) && l(e);
  } catch (B) {
    e.__v = null, (c || s != null) && (e.__e = a, e.__h = !!c, s[s.indexOf(a)] = null), ne.__e(B, e, r);
  }
}
function Jl(t, e) {
  ne.__c && ne.__c(e, t), t.some(function(r) {
    try {
      t = r.__h, r.__h = [], t.some(function(n) {
        n.call(r);
      });
    } catch (n) {
      ne.__e(n, r.__v);
    }
  });
}
function nd(t, e, r, n, i, s, o, a) {
  var c, l, u, d = r.props, f = e.props, h = e.type, p = 0;
  if (h === "svg" && (i = !0), s != null) {
    for (; p < s.length; p++)
      if ((c = s[p]) && "setAttribute" in c == !!h && (h ? c.localName === h : c.nodeType === 3)) {
        t = c, s[p] = null;
        break;
      }
  }
  if (t == null) {
    if (h === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, f.is && f), s = null, a = !1;
  }
  if (h === null)
    d === f || a && t.data === f || (t.data = f);
  else {
    if (s = s && Ci.call(t.childNodes), l = (d = r.props || Cn).dangerouslySetInnerHTML, u = f.dangerouslySetInnerHTML, !a) {
      if (s != null)
        for (d = {}, p = 0; p < t.attributes.length; p++)
          d[t.attributes[p].name] = t.attributes[p].value;
      (u || l) && (u && (l && u.__html == l.__html || u.__html === t.innerHTML) || (t.innerHTML = u && u.__html || ""));
    }
    if (td(t, f, d, i, a), u)
      e.__k = [];
    else if (p = e.props.children, Ql(t, Array.isArray(p) ? p : [p], e, r, n, i && h !== "foreignObject", s, o, s ? s[0] : r.__k && Hr(r, 0), a), s != null)
      for (p = s.length; p--; )
        s[p] != null && Gl(s[p]);
    a || ("value" in f && (p = f.value) !== void 0 && (p !== t.value || h === "progress" && !p || h === "option" && p !== d.value) && Dn(t, "value", p, d.value, !1), "checked" in f && (p = f.checked) !== void 0 && p !== t.checked && Dn(t, "checked", p, d.checked, !1));
  }
  return t;
}
function ec(t, e, r) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (n) {
    ne.__e(n, r);
  }
}
function tc(t, e, r) {
  var n, i;
  if (ne.unmount && ne.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || ec(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (s) {
        ne.__e(s, e);
      }
    n.base = n.__P = null, t.__c = void 0;
  }
  if (n = t.__k)
    for (i = 0; i < n.length; i++)
      n[i] && tc(n[i], e, r || typeof t.type != "function");
  r || t.__e == null || Gl(t.__e), t.__ = t.__e = t.__d = void 0;
}
function id(t, e, r) {
  return this.constructor(t, r);
}
function Lr(t, e, r) {
  var n, i, s;
  ne.__ && ne.__(t, e), i = (n = typeof r == "function") ? null : r && r.__k || e.__k, s = [], Gs(e, t = (!n && r || e).__k = D(Ee, null, [t]), i || Cn, Cn, e.ownerSVGElement !== void 0, !n && r ? [r] : i ? null : e.firstChild ? Ci.call(e.childNodes) : null, s, !n && r ? r : i ? i.__e : e.firstChild, n), Jl(s, t);
}
function sd(t, e) {
  var r = { __c: e = "__cC" + ql++, __: t, Consumer: function(n, i) {
    return n.children(i);
  }, Provider: function(n) {
    var i, s;
    return this.getChildContext || (i = [], (s = {})[e] = this, this.getChildContext = function() {
      return s;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value !== o.value && i.some(function(a) {
        a.__e = !0, ys(a);
      });
    }, this.sub = function(o) {
      i.push(o);
      var a = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        i.splice(i.indexOf(o), 1), a && a.call(o);
      };
    }), n.children;
  } };
  return r.Provider.__ = r.Consumer.contextType = r;
}
Ci = Yl.slice, ne = { __e: function(t, e, r, n) {
  for (var i, s, o; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((s = i.constructor) && s.getDerivedStateFromError != null && (i.setState(s.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, n || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        t = a;
      }
  throw t;
} }, jl = 0, hr = !1, Ye.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Rt({}, this.state), typeof t == "function" && (t = t(Rt({}, r), this.props)), t && Rt(r, t), t != null && this.__v && (e && this._sb.push(e), ys(this));
}, Ye.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ys(this));
}, Ye.prototype.render = Ee, qt = [], Vl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Rn.__r = 0, ql = 0;
var ot, rs, Wo, rc = [], ns = [], jo = ne.__b, Vo = ne.__r, qo = ne.diffed, Yo = ne.__c, Go = ne.unmount;
function od() {
  for (var t; t = rc.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(yn), t.__H.__h.forEach(xs), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], ne.__e(e, t.__v);
      }
}
ne.__b = function(t) {
  ot = null, jo && jo(t);
}, ne.__r = function(t) {
  Vo && Vo(t);
  var e = (ot = t.__c).__H;
  e && (rs === ot ? (e.__h = [], ot.__h = [], e.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = ns, r.__N = r.i = void 0;
  })) : (e.__h.forEach(yn), e.__h.forEach(xs), e.__h = [])), rs = ot;
}, ne.diffed = function(t) {
  qo && qo(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (rc.push(e) !== 1 && Wo === ne.requestAnimationFrame || ((Wo = ne.requestAnimationFrame) || ad)(od)), e.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== ns && (r.__ = r.__V), r.i = void 0, r.__V = ns;
  })), rs = ot = null;
}, ne.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.forEach(yn), r.__h = r.__h.filter(function(n) {
        return !n.__ || xs(n);
      });
    } catch (n) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], ne.__e(n, r.__v);
    }
  }), Yo && Yo(t, e);
}, ne.unmount = function(t) {
  Go && Go(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      yn(n);
    } catch (i) {
      e = i;
    }
  }), r.__H = void 0, e && ne.__e(e, r.__v));
};
var $o = typeof requestAnimationFrame == "function";
function ad(t) {
  var e, r = function() {
    clearTimeout(n), $o && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(r, 100);
  $o && (e = requestAnimationFrame(r));
}
function yn(t) {
  var e = ot, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), ot = e;
}
function xs(t) {
  var e = ot;
  t.__c = t.__(), ot = e;
}
function ld(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function Qo(t, e) {
  for (var r in t)
    if (r !== "__source" && !(r in e))
      return !0;
  for (var n in e)
    if (n !== "__source" && t[n] !== e[n])
      return !0;
  return !1;
}
function Zo(t) {
  this.props = t;
}
(Zo.prototype = new Ye()).isPureReactComponent = !0, Zo.prototype.shouldComponentUpdate = function(t, e) {
  return Qo(this.props, t) || Qo(this.state, e);
};
var Xo = ne.__b;
ne.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Xo && Xo(t);
};
var cd = ne.__e;
ne.__e = function(t, e, r, n) {
  if (t.then) {
    for (var i, s = e; s = s.__; )
      if ((i = s.__c) && i.__c)
        return e.__e == null && (e.__e = r.__e, e.__k = r.__k), i.__c(t, e);
  }
  cd(t, e, r, n);
};
var Ko = ne.unmount;
function nc(t, e, r) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), t.__c.__H = null), (t = ld({}, t)).__c != null && (t.__c.__P === r && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(n) {
    return nc(n, e, r);
  })), t;
}
function ic(t, e, r) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(n) {
    return ic(n, e, r);
  }), t.__c && t.__c.__P === e && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t;
}
function is() {
  this.__u = 0, this.t = null, this.__b = null;
}
function sc(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function an() {
  this.u = null, this.o = null;
}
ne.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), Ko && Ko(t);
}, (is.prototype = new Ye()).__c = function(t, e) {
  var r = e.__c, n = this;
  n.t == null && (n.t = []), n.t.push(r);
  var i = sc(n.__v), s = !1, o = function() {
    s || (s = !0, r.__R = null, i ? i(a) : a());
  };
  r.__R = o;
  var a = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var l = n.state.__a;
        n.__v.__k[0] = ic(l, l.__c.__P, l.__c.__O);
      }
      var u;
      for (n.setState({ __a: n.__b = null }); u = n.t.pop(); )
        u.forceUpdate();
    }
  }, c = e.__h === !0;
  n.__u++ || c || n.setState({ __a: n.__b = n.__v.__k[0] }), t.then(o, o);
}, is.prototype.componentWillUnmount = function() {
  this.t = [];
}, is.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = nc(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var i = e.__a && D(Ee, null, t.fallback);
  return i && (i.__h = null), [D(Ee, null, e.__a ? null : t.children), i];
};
var Jo = function(t, e, r) {
  if (++r[1] === r[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
    for (r = t.u; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      t.u = r = r[2];
    }
};
function ud(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function fd(t) {
  var e = this, r = t.i;
  e.componentWillUnmount = function() {
    Lr(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== r && e.componentWillUnmount(), t.__v ? (e.l || (e.i = r, e.l = { nodeType: 1, parentNode: r, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), e.i.appendChild(n);
  }, insertBefore: function(n, i) {
    this.childNodes.push(n), e.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.i.removeChild(n);
  } }), Lr(D(ud, { context: e.context }, t.__v), e.l)) : e.l && e.componentWillUnmount();
}
function dd(t, e) {
  var r = D(fd, { __v: t, i: e });
  return r.containerInfo = e, r;
}
(an.prototype = new Ye()).__a = function(t) {
  var e = this, r = sc(e.__v), n = e.o.get(t);
  return n[0]++, function(i) {
    var s = function() {
      e.props.revealOrder ? (n.push(i), Jo(e, t, n)) : i();
    };
    r ? r(s) : s();
  };
}, an.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = Tn(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var r = e.length; r--; )
    this.o.set(e[r], this.u = [1, 0, this.u]);
  return t.children;
}, an.prototype.componentDidUpdate = an.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, r) {
    Jo(t, r, e);
  });
};
var hd = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, pd = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, gd = typeof document < "u", vd = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
};
Ye.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(Ye.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var ea = ne.event;
function md() {
}
function bd() {
  return this.cancelBubble;
}
function yd() {
  return this.defaultPrevented;
}
ne.event = function(t) {
  return ea && (t = ea(t)), t.persist = md, t.isPropagationStopped = bd, t.isDefaultPrevented = yd, t.nativeEvent = t;
};
var ta = { configurable: !0, get: function() {
  return this.class;
} }, ra = ne.vnode;
ne.vnode = function(t) {
  var e = t.type, r = t.props, n = r;
  if (typeof e == "string") {
    var i = e.indexOf("-") === -1;
    for (var s in n = {}, r) {
      var o = r[s];
      gd && s === "children" && e === "noscript" || s === "value" && "defaultValue" in r && o == null || (s === "defaultValue" && "value" in r && r.value == null ? s = "value" : s === "download" && o === !0 ? o = "" : /ondoubleclick/i.test(s) ? s = "ondblclick" : /^onchange(textarea|input)/i.test(s + e) && !vd(r.type) ? s = "oninput" : /^onfocus$/i.test(s) ? s = "onfocusin" : /^onblur$/i.test(s) ? s = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s) ? s = s.toLowerCase() : i && pd.test(s) ? s = s.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : o === null && (o = void 0), /^oninput$/i.test(s) && (s = s.toLowerCase(), n[s] && (s = "oninputCapture")), n[s] = o);
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = Tn(r.children).forEach(function(a) {
      a.props.selected = n.value.indexOf(a.props.value) != -1;
    })), e == "select" && n.defaultValue != null && (n.value = Tn(r.children).forEach(function(a) {
      a.props.selected = n.multiple ? n.defaultValue.indexOf(a.props.value) != -1 : n.defaultValue == a.props.value;
    })), t.props = n, r.class != r.className && (ta.enumerable = "className" in r, r.className != null && (n.class = r.className), Object.defineProperty(n, "className", ta));
  }
  t.$$typeof = hd, ra && ra(t);
};
var na = ne.__r;
ne.__r = function(t) {
  na && na(t), t.__c;
};
const oc = [], Es = /* @__PURE__ */ new Map();
function $s(t) {
  oc.push(t), Es.forEach((e) => {
    lc(e, t);
  });
}
function xd(t) {
  t.isConnected && ac(t.getRootNode());
}
function ac(t) {
  let e = Es.get(t);
  if (!e || !e.isConnected) {
    if (e = t.querySelector("style[data-fullcalendar]"), !e) {
      e = document.createElement("style"), e.setAttribute("data-fullcalendar", "");
      const r = wd();
      r && (e.nonce = r);
      const n = t === document ? document.head : t, i = t === document ? n.querySelector("script,link[rel=stylesheet],link[as=style],style") : n.firstChild;
      n.insertBefore(e, i);
    }
    Es.set(t, e), Ed(e);
  }
}
function Ed(t) {
  for (const e of oc)
    lc(t, e);
}
function lc(t, e) {
  const { sheet: r } = t, n = r.cssRules.length;
  e.split("}").forEach((i, s) => {
    i = i.trim(), i && r.insertRule(i + "}", n + s);
  });
}
let ss;
function wd() {
  return ss === void 0 && (ss = _d()), ss;
}
function _d() {
  const t = document.querySelector('meta[name="csp-nonce"]');
  if (t && t.hasAttribute("content"))
    return t.getAttribute("content");
  const e = document.querySelector("script[nonce]");
  return e && e.nonce || "";
}
typeof document < "u" && ac(document);
var Sd = ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}';
$s(Sd);
function Qs(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Oe(t, e) {
  if (t.closest)
    return t.closest(e);
  if (!document.documentElement.contains(t))
    return null;
  do {
    if (Ad(t, e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === 1);
  return null;
}
function Ad(t, e) {
  return (t.matches || t.matchesSelector || t.msMatchesSelector).call(t, e);
}
function Cd(t, e) {
  let r = t instanceof HTMLElement ? [t] : t, n = [];
  for (let i = 0; i < r.length; i += 1) {
    let s = r[i].querySelectorAll(e);
    for (let o = 0; o < s.length; o += 1)
      n.push(s[o]);
  }
  return n;
}
const Dd = /(top|left|right|bottom|width|height)$/i;
function Or(t, e) {
  for (let r in e)
    cc(t, r, e[r]);
}
function cc(t, e, r) {
  r == null ? t.style[e] = "" : typeof r == "number" && Dd.test(e) ? t.style[e] = `${r}px` : t.style[e] = r;
}
function uc(t) {
  var e, r;
  return (r = (e = t.composedPath) === null || e === void 0 ? void 0 : e.call(t)[0]) !== null && r !== void 0 ? r : t.target;
}
let ia = 0;
function Di() {
  return ia += 1, "fc-dom-" + ia;
}
function Ri(t) {
  t.preventDefault();
}
function Rd(t, e) {
  return (r) => {
    let n = Oe(r.target, t);
    n && e.call(n, r, n);
  };
}
function fc(t, e, r, n) {
  let i = Rd(r, n);
  return t.addEventListener(e, i), () => {
    t.removeEventListener(e, i);
  };
}
function Td(t, e, r, n) {
  let i;
  return fc(t, "mouseover", e, (s, o) => {
    if (o !== i) {
      i = o, r(s, o);
      let a = (c) => {
        i = null, n(c, o), o.removeEventListener("mouseleave", a);
      };
      o.addEventListener("mouseleave", a);
    }
  });
}
const sa = [
  "webkitTransitionEnd",
  "otransitionend",
  "oTransitionEnd",
  "msTransitionEnd",
  "transitionend"
];
function kd(t, e) {
  let r = (n) => {
    e(n), sa.forEach((i) => {
      t.removeEventListener(i, r);
    });
  };
  sa.forEach((n) => {
    t.addEventListener(n, r);
  });
}
function dc(t) {
  return Object.assign({ onClick: t }, hc(t));
}
function hc(t) {
  return {
    tabIndex: 0,
    onKeyDown(e) {
      (e.key === "Enter" || e.key === " ") && (t(e), e.preventDefault());
    }
  };
}
let oa = 0;
function Xt() {
  return oa += 1, String(oa);
}
function Zs() {
  document.body.classList.add("fc-not-allowed");
}
function Xs() {
  document.body.classList.remove("fc-not-allowed");
}
function Id(t) {
  t.style.userSelect = "none", t.addEventListener("selectstart", Ri);
}
function Md(t) {
  t.style.userSelect = "", t.removeEventListener("selectstart", Ri);
}
function Nd(t) {
  t.addEventListener("contextmenu", Ri);
}
function Od(t) {
  t.removeEventListener("contextmenu", Ri);
}
function Bd(t) {
  let e = [], r = [], n, i;
  for (typeof t == "string" ? r = t.split(/\s*,\s*/) : typeof t == "function" ? r = [t] : Array.isArray(t) && (r = t), n = 0; n < r.length; n += 1)
    i = r[n], typeof i == "string" ? e.push(i.charAt(0) === "-" ? { field: i.substring(1), order: -1 } : { field: i, order: 1 }) : typeof i == "function" && e.push({ func: i });
  return e;
}
function Pd(t, e, r) {
  let n, i;
  for (n = 0; n < r.length; n += 1)
    if (i = Hd(t, e, r[n]), i)
      return i;
  return 0;
}
function Hd(t, e, r) {
  return r.func ? r.func(t, e) : Ld(t[r.field], e[r.field]) * (r.order || 1);
}
function Ld(t, e) {
  return !t && !e ? 0 : e == null ? -1 : t == null ? 1 : typeof t == "string" || typeof e == "string" ? String(t).localeCompare(String(e)) : t - e;
}
function ur(t, e) {
  let r = String(t);
  return "000".substr(0, e - r.length) + r;
}
function Br(t, e, r) {
  return typeof t == "function" ? t(...e) : typeof t == "string" ? e.reduce((n, i, s) => n.replace("$" + s, i || ""), t) : r;
}
function Fd(t, e) {
  return t - e;
}
function xn(t) {
  return t % 1 === 0;
}
function zd(t) {
  let e = t.querySelector(".fc-scrollgrid-shrink-frame"), r = t.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!e)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!r)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return t.getBoundingClientRect().width - e.getBoundingClientRect().width + // the cell padding+border
  r.getBoundingClientRect().width;
}
const aa = ["years", "months", "days", "milliseconds"], Ud = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function pe(t, e) {
  return typeof t == "string" ? Wd(t) : typeof t == "object" && t ? la(t) : typeof t == "number" ? la({ [e || "milliseconds"]: t }) : null;
}
function Wd(t) {
  let e = Ud.exec(t);
  if (e) {
    let r = e[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: r * (e[2] ? parseInt(e[2], 10) : 0),
      milliseconds: r * ((e[3] ? parseInt(e[3], 10) : 0) * 60 * 60 * 1e3 + // hours
      (e[4] ? parseInt(e[4], 10) : 0) * 60 * 1e3 + // minutes
      (e[5] ? parseInt(e[5], 10) : 0) * 1e3 + // seconds
      (e[6] ? parseInt(e[6], 10) : 0))
    };
  }
  return null;
}
function la(t) {
  let e = {
    years: t.years || t.year || 0,
    months: t.months || t.month || 0,
    days: t.days || t.day || 0,
    milliseconds: (t.hours || t.hour || 0) * 60 * 60 * 1e3 + // hours
    (t.minutes || t.minute || 0) * 60 * 1e3 + // minutes
    (t.seconds || t.second || 0) * 1e3 + // seconds
    (t.milliseconds || t.millisecond || t.ms || 0)
    // ms
  }, r = t.weeks || t.week;
  return r && (e.days += r * 7, e.specifiedWeeks = !0), e;
}
function jd(t, e) {
  return t.years === e.years && t.months === e.months && t.days === e.days && t.milliseconds === e.milliseconds;
}
function ws(t, e) {
  return {
    years: t.years + e.years,
    months: t.months + e.months,
    days: t.days + e.days,
    milliseconds: t.milliseconds + e.milliseconds
  };
}
function Vd(t, e) {
  return {
    years: t.years - e.years,
    months: t.months - e.months,
    days: t.days - e.days,
    milliseconds: t.milliseconds - e.milliseconds
  };
}
function qd(t, e) {
  return {
    years: t.years * e,
    months: t.months * e,
    days: t.days * e,
    milliseconds: t.milliseconds * e
  };
}
function Yd(t) {
  return fr(t) / 365;
}
function Gd(t) {
  return fr(t) / 30;
}
function fr(t) {
  return tt(t) / 864e5;
}
function tt(t) {
  return t.years * (365 * 864e5) + t.months * (30 * 864e5) + t.days * 864e5 + t.milliseconds;
}
function Ks(t, e) {
  let r = null;
  for (let n = 0; n < aa.length; n += 1) {
    let i = aa[n];
    if (e[i]) {
      let s = t[i] / e[i];
      if (!xn(s) || r !== null && r !== s)
        return null;
      r = s;
    } else if (t[i])
      return null;
  }
  return r;
}
function _s(t) {
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
const { hasOwnProperty: kn } = Object.prototype;
function Js(t, e) {
  let r = {};
  if (e) {
    for (let n in e)
      if (e[n] === Vt) {
        let i = [];
        for (let s = t.length - 1; s >= 0; s -= 1) {
          let o = t[s][n];
          if (typeof o == "object" && o)
            i.unshift(o);
          else if (o !== void 0) {
            r[n] = o;
            break;
          }
        }
        i.length && (r[n] = Js(i));
      }
  }
  for (let n = t.length - 1; n >= 0; n -= 1) {
    let i = t[n];
    for (let s in i)
      s in r || (r[s] = i[s]);
  }
  return r;
}
function $t(t, e) {
  let r = {};
  for (let n in t)
    e(t[n], n) && (r[n] = t[n]);
  return r;
}
function Et(t, e) {
  let r = {};
  for (let n in t)
    r[n] = e(t[n], n);
  return r;
}
function pc(t) {
  let e = {};
  for (let r of t)
    e[r] = !0;
  return e;
}
function eo(t) {
  let e = [];
  for (let r in t)
    e.push(t[r]);
  return e;
}
function lt(t, e) {
  if (t === e)
    return !0;
  for (let r in t)
    if (kn.call(t, r) && !(r in e))
      return !1;
  for (let r in e)
    if (kn.call(e, r) && t[r] !== e[r])
      return !1;
  return !0;
}
const $d = /^on[A-Z]/;
function Qd(t, e) {
  const r = Ss(t, e);
  for (let n of r)
    if (!$d.test(n))
      return !1;
  return !0;
}
function Ss(t, e) {
  let r = [];
  for (let n in t)
    kn.call(t, n) && (n in e || r.push(n));
  for (let n in e)
    kn.call(e, n) && t[n] !== e[n] && r.push(n);
  return r;
}
function os(t, e, r = {}) {
  if (t === e)
    return !0;
  for (let n in e)
    if (!(n in t && Zd(t[n], e[n], r[n])))
      return !1;
  for (let n in t)
    if (!(n in e))
      return !1;
  return !0;
}
function Zd(t, e, r) {
  return t === e || r === !0 ? !0 : r ? r(t, e) : !1;
}
function Xd(t, e = 0, r, n = 1) {
  let i = [];
  r == null && (r = Object.keys(t).length);
  for (let s = e; s < r; s += n) {
    let o = t[s];
    o !== void 0 && i.push(o);
  }
  return i;
}
function Ot(t, e, r) {
  if (t === e)
    return !0;
  let n = t.length, i;
  if (n !== e.length)
    return !1;
  for (i = 0; i < n; i += 1)
    if (!(r ? r(t[i], e[i]) : t[i] === e[i]))
      return !1;
  return !0;
}
const Kd = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function ca(t, e) {
  let r = Tt(t);
  return r[2] += e * 7, We(r);
}
function Be(t, e) {
  let r = Tt(t);
  return r[2] += e, We(r);
}
function Bt(t, e) {
  let r = Tt(t);
  return r[6] += e, We(r);
}
function Jd(t, e) {
  return Kt(t, e) / 7;
}
function Kt(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60 * 24);
}
function e0(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60);
}
function t0(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60);
}
function r0(t, e) {
  return (e.valueOf() - t.valueOf()) / 1e3;
}
function n0(t, e) {
  let r = xe(t), n = xe(e);
  return {
    years: 0,
    months: 0,
    days: Math.round(Kt(r, n)),
    milliseconds: e.valueOf() - n.valueOf() - (t.valueOf() - r.valueOf())
  };
}
function i0(t, e) {
  let r = In(t, e);
  return r !== null && r % 7 === 0 ? r / 7 : null;
}
function In(t, e) {
  return kt(t) === kt(e) ? Math.round(Kt(t, e)) : null;
}
function xe(t) {
  return We([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ]);
}
function s0(t) {
  return We([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours()
  ]);
}
function o0(t) {
  return We([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes()
  ]);
}
function a0(t) {
  return We([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds()
  ]);
}
function l0(t, e, r) {
  let n = t.getUTCFullYear(), i = as(t, n, e, r);
  if (i < 1)
    return as(t, n - 1, e, r);
  let s = as(t, n + 1, e, r);
  return s >= 1 ? Math.min(i, s) : i;
}
function as(t, e, r, n) {
  let i = We([e, 0, 1 + c0(e, r, n)]), s = xe(t), o = Math.round(Kt(i, s));
  return Math.floor(o / 7) + 1;
}
function c0(t, e, r) {
  let n = 7 + e - r;
  return -((7 + We([t, 0, n]).getUTCDay() - e) % 7) + n - 1;
}
function ua(t) {
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
function fa(t) {
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
function Tt(t) {
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
function We(t) {
  return t.length === 1 && (t = t.concat([0])), new Date(Date.UTC(...t));
}
function gc(t) {
  return !isNaN(t.valueOf());
}
function kt(t) {
  return t.getUTCHours() * 1e3 * 60 * 60 + t.getUTCMinutes() * 1e3 * 60 + t.getUTCSeconds() * 1e3 + t.getUTCMilliseconds();
}
function vc(t, e, r = !1) {
  let n = t.toISOString();
  return n = n.replace(".000", ""), r && (n = n.replace("T00:00:00Z", "")), n.length > 10 && (e == null ? n = n.replace("Z", "") : e !== 0 && (n = n.replace("Z", ro(e, !0)))), n;
}
function to(t) {
  return t.toISOString().replace(/T.*$/, "");
}
function u0(t) {
  return t.toISOString().match(/^\d{4}-\d{2}/)[0];
}
function f0(t) {
  return ur(t.getUTCHours(), 2) + ":" + ur(t.getUTCMinutes(), 2) + ":" + ur(t.getUTCSeconds(), 2);
}
function ro(t, e = !1) {
  let r = t < 0 ? "-" : "+", n = Math.abs(t), i = Math.floor(n / 60), s = Math.round(n % 60);
  return e ? `${r + ur(i, 2)}:${ur(s, 2)}` : `GMT${r}${i}${s ? `:${ur(s, 2)}` : ""}`;
}
function se(t, e, r) {
  let n, i;
  return function(...s) {
    if (!n)
      i = t.apply(this, s);
    else if (!Ot(n, s)) {
      r && r(i);
      let o = t.apply(this, s);
      (!e || !e(o, i)) && (i = o);
    }
    return n = s, i;
  };
}
function En(t, e, r) {
  let n, i;
  return (s) => {
    if (!n)
      i = t.call(this, s);
    else if (!lt(n, s)) {
      r && r(i);
      let o = t.call(this, s);
      (!e || !e(o, i)) && (i = o);
    }
    return n = s, i;
  };
}
const da = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
}, Mn = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, ln = /\s*([ap])\.?m\.?/i, d0 = /,/g, h0 = /\s+/g, p0 = /\u200e/g, g0 = /UTC|GMT/;
class v0 {
  constructor(e) {
    let r = {}, n = {}, i = 0;
    for (let s in e)
      s in da ? (n[s] = e[s], i = Math.max(da[s], i)) : (r[s] = e[s], s in Mn && (i = Math.max(Mn[s], i)));
    this.standardDateProps = r, this.extendedSettings = n, this.severity = i, this.buildFormattingFunc = se(ha);
  }
  format(e, r) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, r)(e);
  }
  formatRange(e, r, n, i) {
    let { standardDateProps: s, extendedSettings: o } = this, a = w0(e.marker, r.marker, n.calendarSystem);
    if (!a)
      return this.format(e, n);
    let c = a;
    c > 1 && // the two dates are different in a way that's larger scale than time
    (s.year === "numeric" || s.year === "2-digit") && (s.month === "numeric" || s.month === "2-digit") && (s.day === "numeric" || s.day === "2-digit") && (c = 1);
    let l = this.format(e, n), u = this.format(r, n);
    if (l === u)
      return l;
    let d = _0(s, c), f = ha(d, o, n), h = f(e), p = f(r), v = S0(l, h, u, p), b = o.separator || i || n.defaultSeparator || "";
    return v ? v.before + h + b + p + v.after : l + b + u;
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
function ha(t, e, r) {
  let n = Object.keys(t).length;
  return n === 1 && t.timeZoneName === "short" ? (i) => ro(i.timeZoneOffset) : n === 0 && e.week ? (i) => E0(r.computeWeekNumber(i.marker), r.weekText, r.weekTextLong, r.locale, e.week) : m0(t, e, r);
}
function m0(t, e, r) {
  t = Object.assign({}, t), e = Object.assign({}, e), b0(t, e), t.timeZone = "UTC";
  let n = new Intl.DateTimeFormat(r.locale.codes, t), i;
  if (e.omitZeroMinute) {
    let s = Object.assign({}, t);
    delete s.minute, i = new Intl.DateTimeFormat(r.locale.codes, s);
  }
  return (s) => {
    let { marker: o } = s, a;
    i && !o.getUTCMinutes() ? a = i : a = n;
    let c = a.format(o);
    return y0(c, s, t, e, r);
  };
}
function b0(t, e) {
  t.timeZoneName && (t.hour || (t.hour = "2-digit"), t.minute || (t.minute = "2-digit")), t.timeZoneName === "long" && (t.timeZoneName = "short"), e.omitZeroMinute && (t.second || t.millisecond) && delete e.omitZeroMinute;
}
function y0(t, e, r, n, i) {
  return t = t.replace(p0, ""), r.timeZoneName === "short" && (t = x0(t, i.timeZone === "UTC" || e.timeZoneOffset == null ? "UTC" : (
    // important to normalize for IE, which does "GMT"
    ro(e.timeZoneOffset)
  ))), n.omitCommas && (t = t.replace(d0, "").trim()), n.omitZeroMinute && (t = t.replace(":00", "")), n.meridiem === !1 ? t = t.replace(ln, "").trim() : n.meridiem === "narrow" ? t = t.replace(ln, (s, o) => o.toLocaleLowerCase()) : n.meridiem === "short" ? t = t.replace(ln, (s, o) => `${o.toLocaleLowerCase()}m`) : n.meridiem === "lowercase" && (t = t.replace(ln, (s) => s.toLocaleLowerCase())), t = t.replace(h0, " "), t = t.trim(), t;
}
function x0(t, e) {
  let r = !1;
  return t = t.replace(g0, () => (r = !0, e)), r || (t += ` ${e}`), t;
}
function E0(t, e, r, n, i) {
  let s = [];
  return i === "long" ? s.push(r) : (i === "short" || i === "narrow") && s.push(e), (i === "long" || i === "short") && s.push(" "), s.push(n.simpleNumberFormat.format(t)), n.options.direction === "rtl" && s.reverse(), s.join("");
}
function w0(t, e, r) {
  return r.getMarkerYear(t) !== r.getMarkerYear(e) ? 5 : r.getMarkerMonth(t) !== r.getMarkerMonth(e) ? 4 : r.getMarkerDay(t) !== r.getMarkerDay(e) ? 2 : kt(t) !== kt(e) ? 1 : 0;
}
function _0(t, e) {
  let r = {};
  for (let n in t)
    (!(n in Mn) || // not a date part prop (like timeZone)
    Mn[n] <= e) && (r[n] = t[n]);
  return r;
}
function S0(t, e, r, n) {
  let i = 0;
  for (; i < t.length; ) {
    let s = t.indexOf(e, i);
    if (s === -1)
      break;
    let o = t.substr(0, s);
    i = s + e.length;
    let a = t.substr(i), c = 0;
    for (; c < r.length; ) {
      let l = r.indexOf(n, c);
      if (l === -1)
        break;
      let u = r.substr(0, l);
      c = l + n.length;
      let d = r.substr(c);
      if (o === u && a === d)
        return {
          before: o,
          after: a
        };
    }
  }
  return null;
}
function pa(t, e) {
  let r = e.markerToArray(t.marker);
  return {
    marker: t.marker,
    timeZoneOffset: t.timeZoneOffset,
    array: r,
    year: r[0],
    month: r[1],
    day: r[2],
    hour: r[3],
    minute: r[4],
    second: r[5],
    millisecond: r[6]
  };
}
function Nn(t, e, r, n) {
  let i = pa(t, r.calendarSystem), s = e ? pa(e, r.calendarSystem) : null;
  return {
    date: i,
    start: i,
    end: s,
    timeZone: r.timeZone,
    localeCodes: r.locale.codes,
    defaultSeparator: n || r.defaultSeparator
  };
}
class A0 {
  constructor(e) {
    this.cmdStr = e;
  }
  format(e, r, n) {
    return r.cmdFormatter(this.cmdStr, Nn(e, null, r, n));
  }
  formatRange(e, r, n, i) {
    return n.cmdFormatter(this.cmdStr, Nn(e, r, n, i));
  }
}
class C0 {
  constructor(e) {
    this.func = e;
  }
  format(e, r, n) {
    return this.func(Nn(e, null, r, n));
  }
  formatRange(e, r, n, i) {
    return this.func(Nn(e, r, n, i));
  }
}
function _e(t) {
  return typeof t == "object" && t ? new v0(t) : typeof t == "string" ? new A0(t) : typeof t == "function" ? new C0(t) : null;
}
const ga = {
  navLinkDayClick: L,
  navLinkWeekClick: L,
  duration: pe,
  bootstrapFontAwesome: L,
  buttonIcons: L,
  customButtons: L,
  defaultAllDayEventDuration: pe,
  defaultTimedEventDuration: pe,
  nextDayThreshold: pe,
  scrollTime: pe,
  scrollTimeReset: Boolean,
  slotMinTime: pe,
  slotMaxTime: pe,
  dayPopoverFormat: _e,
  slotDuration: pe,
  snapDuration: pe,
  headerToolbar: L,
  footerToolbar: L,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: _e,
  dayHeaderClassNames: L,
  dayHeaderContent: L,
  dayHeaderDidMount: L,
  dayHeaderWillUnmount: L,
  dayCellClassNames: L,
  dayCellContent: L,
  dayCellDidMount: L,
  dayCellWillUnmount: L,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: L,
  weekNumbers: Boolean,
  weekNumberClassNames: L,
  weekNumberContent: L,
  weekNumberDidMount: L,
  weekNumberWillUnmount: L,
  editable: Boolean,
  viewClassNames: L,
  viewDidMount: L,
  viewWillUnmount: L,
  nowIndicator: Boolean,
  nowIndicatorClassNames: L,
  nowIndicatorContent: L,
  nowIndicatorDidMount: L,
  nowIndicatorWillUnmount: L,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: L,
  locale: L,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: L,
  eventOrder: Bd,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: L,
  contentHeight: L,
  direction: String,
  weekNumberFormat: _e,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: L,
  initialDate: L,
  now: L,
  eventDataTransform: L,
  stickyHeaderDates: L,
  stickyFooterScrollbar: L,
  viewHeight: L,
  defaultAllDay: Boolean,
  eventSourceFailure: L,
  eventSourceSuccess: L,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: L,
  eventConstraint: L,
  eventAllow: L,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: L,
  eventContent: L,
  eventDidMount: L,
  eventWillUnmount: L,
  selectConstraint: L,
  selectOverlap: L,
  selectAllow: L,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: L,
  slotLaneClassNames: L,
  slotLaneContent: L,
  slotLaneDidMount: L,
  slotLaneWillUnmount: L,
  slotLabelClassNames: L,
  slotLabelContent: L,
  slotLabelDidMount: L,
  slotLabelWillUnmount: L,
  dayMaxEvents: L,
  dayMaxEventRows: L,
  dayMinWidth: Number,
  slotLabelInterval: pe,
  allDayText: String,
  allDayClassNames: L,
  allDayContent: L,
  allDayDidMount: L,
  allDayWillUnmount: L,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: _e,
  rerenderDelay: Number,
  moreLinkText: L,
  moreLinkHint: L,
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
  plugins: L,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: pe,
  hiddenDays: L,
  fixedWeekCount: Boolean,
  validRange: L,
  visibleRange: L,
  titleFormat: L,
  eventInteractive: Boolean,
  // only used by list-view, but languages define the value, so we need it in base options
  noEventsText: String,
  viewHint: L,
  navLinkHint: L,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: L,
  moreLinkClassNames: L,
  moreLinkContent: L,
  moreLinkDidMount: L,
  moreLinkWillUnmount: L,
  monthStartFormat: _e,
  // for connectors
  // (can't be part of plugin system b/c must be provided at runtime)
  handleCustomRendering: L,
  customRenderingMetaMap: L,
  customRenderingReplacesEl: Boolean
}, Pr = {
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
}, va = {
  datesSet: L,
  eventsSet: L,
  eventAdd: L,
  eventChange: L,
  eventRemove: L,
  windowResize: L,
  eventClick: L,
  eventMouseEnter: L,
  eventMouseLeave: L,
  select: L,
  unselect: L,
  loading: L,
  // internal
  _unmount: L,
  _beforeprint: L,
  _afterprint: L,
  _noEventDrop: L,
  _noEventResize: L,
  _resize: L,
  _scrollRequest: L
}, ma = {
  buttonText: L,
  buttonHints: L,
  views: L,
  plugins: L,
  initialEvents: L,
  events: L,
  eventSources: L
}, jt = {
  headerToolbar: Vt,
  footerToolbar: Vt,
  buttonText: Vt,
  buttonHints: Vt,
  buttonIcons: Vt,
  dateIncrement: Vt,
  plugins: cn,
  events: cn,
  eventSources: cn,
  resources: cn
};
function Vt(t, e) {
  return typeof t == "object" && typeof e == "object" && t && e ? lt(t, e) : t === e;
}
function cn(t, e) {
  return Array.isArray(t) && Array.isArray(e) ? Ot(t, e) : t === e;
}
const D0 = {
  type: String,
  component: L,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: L,
  usesMinMaxTime: Boolean,
  classNames: L,
  content: L,
  didMount: L,
  willUnmount: L
};
function ls(t) {
  return Js(t, jt);
}
function no(t, e) {
  let r = {}, n = {};
  for (let i in e)
    i in t && (r[i] = e[i](t[i]));
  for (let i in t)
    i in e || (n[i] = t[i]);
  return { refined: r, extra: n };
}
function L(t) {
  return t;
}
function io(t, e, r, n) {
  return {
    instanceId: Xt(),
    defId: t,
    range: e,
    forcedStartTzo: r ?? null,
    forcedEndTzo: n ?? null
  };
}
function R0(t, e, r, n) {
  for (let i = 0; i < n.length; i += 1) {
    let s = n[i].parse(t, r);
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
function Qt(t, e, r) {
  let { dateEnv: n, pluginHooks: i, options: s } = r, { defs: o, instances: a } = t;
  a = $t(a, (c) => !o[c.defId].recurringDef);
  for (let c in o) {
    let l = o[c];
    if (l.recurringDef) {
      let { duration: u } = l.recurringDef;
      u || (u = l.allDay ? s.defaultAllDayEventDuration : s.defaultTimedEventDuration);
      let d = T0(l, u, e, n, i.recurringTypes);
      for (let f of d) {
        let h = io(c, {
          start: f,
          end: n.add(f, u)
        });
        a[h.instanceId] = h;
      }
    }
  }
  return { defs: o, instances: a };
}
function T0(t, e, r, n, i) {
  let o = i[t.recurringDef.typeId].expand(t.recurringDef.typeData, {
    start: n.subtract(r.start, e),
    end: r.end
  }, n);
  return t.allDay && (o = o.map(xe)), o;
}
function Fr(t, e, r, n, i, s) {
  let o = Ge(), a = ao(r);
  for (let c of t) {
    let l = yc(c, e, r, n, a, i, s);
    l && As(l, o);
  }
  return o;
}
function As(t, e = Ge()) {
  return e.defs[t.def.defId] = t.def, t.instance && (e.instances[t.instance.instanceId] = t.instance), e;
}
function so(t, e) {
  let r = t.instances[e];
  if (r) {
    let n = t.defs[r.defId], i = Ti(t, (s) => k0(n, s));
    return i.defs[n.defId] = n, i.instances[r.instanceId] = r, i;
  }
  return Ge();
}
function k0(t, e) {
  return !!(t.groupId && t.groupId === e.groupId);
}
function Ge() {
  return { defs: {}, instances: {} };
}
function oo(t, e) {
  return {
    defs: Object.assign(Object.assign({}, t.defs), e.defs),
    instances: Object.assign(Object.assign({}, t.instances), e.instances)
  };
}
function Ti(t, e) {
  let r = $t(t.defs, e), n = $t(t.instances, (i) => r[i.defId]);
  return { defs: r, instances: n };
}
function I0(t, e) {
  let { defs: r, instances: n } = t, i = {}, s = {};
  for (let o in r)
    e.defs[o] || (i[o] = r[o]);
  for (let o in n)
    !e.instances[o] && // not explicitly excluded
    i[n[o].defId] && (s[o] = n[o]);
  return {
    defs: i,
    instances: s
  };
}
function M0(t, e) {
  return Array.isArray(t) ? Fr(t, null, e, !0) : typeof t == "object" && t ? Fr([t], null, e, !0) : t != null ? String(t) : null;
}
function ba(t) {
  return Array.isArray(t) ? t : typeof t == "string" ? t.split(/\s+/) : [];
}
const On = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: L,
  overlap: L,
  allow: L,
  className: ba,
  classNames: ba,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, N0 = {
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
function Bn(t, e) {
  let r = M0(t.constraint, e);
  return {
    display: t.display || null,
    startEditable: t.startEditable != null ? t.startEditable : t.editable,
    durationEditable: t.durationEditable != null ? t.durationEditable : t.editable,
    constraints: r != null ? [r] : [],
    overlap: t.overlap != null ? t.overlap : null,
    allows: t.allow != null ? [t.allow] : [],
    backgroundColor: t.backgroundColor || t.color || "",
    borderColor: t.borderColor || t.color || "",
    textColor: t.textColor || "",
    classNames: (t.className || []).concat(t.classNames || [])
    // join singular and plural
  };
}
function mc(t) {
  return t.reduce(O0, N0);
}
function O0(t, e) {
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
const wn = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, bc = {
  start: L,
  end: L,
  date: L,
  allDay: Boolean
}, B0 = Object.assign(Object.assign(Object.assign({}, wn), bc), { extendedProps: L });
function yc(t, e, r, n, i = ao(r), s, o) {
  let { refined: a, extra: c } = xc(t, r, i), l = H0(e, r), u = R0(a, l, r.dateEnv, r.pluginHooks.recurringTypes);
  if (u) {
    let f = Cs(a, c, e ? e.sourceId : "", u.allDay, !!u.duration, r, s);
    return f.recurringDef = {
      typeId: u.typeId,
      typeData: u.typeData,
      duration: u.duration
    }, { def: f, instance: null };
  }
  let d = P0(a, l, r, n);
  if (d) {
    let f = Cs(a, c, e ? e.sourceId : "", d.allDay, d.hasEnd, r, s), h = io(f.defId, d.range, d.forcedStartTzo, d.forcedEndTzo);
    return o && f.publicId && o[f.publicId] && (h.instanceId = o[f.publicId]), { def: f, instance: h };
  }
  return null;
}
function xc(t, e, r = ao(e)) {
  return no(t, r);
}
function ao(t) {
  return Object.assign(Object.assign(Object.assign({}, On), B0), t.pluginHooks.eventRefiners);
}
function Cs(t, e, r, n, i, s, o) {
  let a = {
    title: t.title || "",
    groupId: t.groupId || "",
    publicId: t.id || "",
    url: t.url || "",
    recurringDef: null,
    defId: (o && t.id ? o[t.id] : "") || Xt(),
    sourceId: r,
    allDay: n,
    hasEnd: i,
    interactive: t.interactive,
    ui: Bn(t, s),
    extendedProps: Object.assign(Object.assign({}, t.extendedProps || {}), e)
  };
  for (let c of s.pluginHooks.eventDefMemberAdders)
    Object.assign(a, c(t));
  return Object.freeze(a.ui.classNames), Object.freeze(a.extendedProps), a;
}
function P0(t, e, r, n) {
  let { allDay: i } = t, s, o = null, a = !1, c, l = null, u = t.start != null ? t.start : t.date;
  if (s = r.dateEnv.createMarkerMeta(u), s)
    o = s.marker;
  else if (!n)
    return null;
  return t.end != null && (c = r.dateEnv.createMarkerMeta(t.end)), i == null && (e != null ? i = e : i = (!s || s.isTimeUnspecified) && (!c || c.isTimeUnspecified)), i && o && (o = xe(o)), c && (l = c.marker, i && (l = xe(l)), o && l <= o && (l = null)), l ? a = !0 : n || (a = r.options.forceEventDuration || !1, l = r.dateEnv.add(o, i ? r.options.defaultAllDayEventDuration : r.options.defaultTimedEventDuration)), {
    allDay: i,
    hasEnd: a,
    range: { start: o, end: l },
    forcedStartTzo: s ? s.forcedTzo : null,
    forcedEndTzo: c ? c.forcedTzo : null
  };
}
function H0(t, e) {
  let r = null;
  return t && (r = t.defaultAllDay), r == null && (r = e.options.defaultAllDay), r;
}
const L0 = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
  // so multiple defs get grouped
};
function F0(t, e) {
  return Fr(z0(t), null, e);
}
function z0(t) {
  let e;
  return t === !0 ? e = [{}] : Array.isArray(t) ? e = t.filter((r) => r.daysOfWeek) : typeof t == "object" && t ? e = [t] : e = [], e = e.map((r) => Object.assign(Object.assign({}, L0), r)), e;
}
function Ec(t) {
  let e = Math.floor(Kt(t.start, t.end)) || 1, r = xe(t.start), n = Be(r, e);
  return { start: r, end: n };
}
function wc(t, e = pe(0)) {
  let r = null, n = null;
  if (t.end) {
    n = xe(t.end);
    let i = t.end.valueOf() - n.valueOf();
    i && i >= tt(e) && (n = Be(n, 1));
  }
  return t.start && (r = xe(t.start), n && n <= r && (n = Be(r, 1))), { start: r, end: n };
}
function lr(t, e, r, n) {
  return n === "year" ? pe(r.diffWholeYears(t, e), "year") : n === "month" ? pe(r.diffWholeMonths(t, e), "month") : n0(t, e);
}
function U0(t, e) {
  return t.left >= e.left && t.left < e.right && t.top >= e.top && t.top < e.bottom;
}
function _c(t, e) {
  let r = {
    left: Math.max(t.left, e.left),
    right: Math.min(t.right, e.right),
    top: Math.max(t.top, e.top),
    bottom: Math.min(t.bottom, e.bottom)
  };
  return r.left < r.right && r.top < r.bottom ? r : !1;
}
function W0(t, e) {
  return {
    left: Math.min(Math.max(t.left, e.left), e.right),
    top: Math.min(Math.max(t.top, e.top), e.bottom)
  };
}
function j0(t) {
  return {
    left: (t.left + t.right) / 2,
    top: (t.top + t.bottom) / 2
  };
}
function V0(t, e) {
  return {
    left: t.left - e.left,
    top: t.top - e.top
  };
}
let cs;
function Sc() {
  return cs == null && (cs = q0()), cs;
}
function q0() {
  if (typeof document > "u")
    return !0;
  let t = document.createElement("div");
  t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.innerHTML = "<table><tr><td><div></div></td></tr></table>", t.querySelector("table").style.height = "100px", t.querySelector("div").style.height = "100%", document.body.appendChild(t);
  let r = t.querySelector("div").offsetHeight > 0;
  return document.body.removeChild(t), r;
}
const us = Ge();
class Y0 {
  constructor() {
    this.getKeysForEventDefs = se(this._getKeysForEventDefs), this.splitDateSelection = se(this._splitDateSpan), this.splitEventStore = se(this._splitEventStore), this.splitIndividualUi = se(this._splitIndividualUi), this.splitEventDrag = se(this._splitInteraction), this.splitEventResize = se(this._splitInteraction), this.eventUiBuilders = {};
  }
  splitProps(e) {
    let r = this.getKeyInfo(e), n = this.getKeysForEventDefs(e.eventStore), i = this.splitDateSelection(e.dateSelection), s = this.splitIndividualUi(e.eventUiBases, n), o = this.splitEventStore(e.eventStore, n), a = this.splitEventDrag(e.eventDrag), c = this.splitEventResize(e.eventResize), l = {};
    this.eventUiBuilders = Et(r, (u, d) => this.eventUiBuilders[d] || se(G0));
    for (let u in r) {
      let d = r[u], f = o[u] || us, h = this.eventUiBuilders[u];
      l[u] = {
        businessHours: d.businessHours || e.businessHours,
        dateSelection: i[u] || null,
        eventStore: f,
        eventUiBases: h(e.eventUiBases[""], d.ui, s[u]),
        eventSelection: f.instances[e.eventSelection] ? e.eventSelection : "",
        eventDrag: a[u] || null,
        eventResize: c[u] || null
      };
    }
    return l;
  }
  _splitDateSpan(e) {
    let r = {};
    if (e) {
      let n = this.getKeysForDateSpan(e);
      for (let i of n)
        r[i] = e;
    }
    return r;
  }
  _getKeysForEventDefs(e) {
    return Et(e.defs, (r) => this.getKeysForEventDef(r));
  }
  _splitEventStore(e, r) {
    let { defs: n, instances: i } = e, s = {};
    for (let o in n)
      for (let a of r[o])
        s[a] || (s[a] = Ge()), s[a].defs[o] = n[o];
    for (let o in i) {
      let a = i[o];
      for (let c of r[a.defId])
        s[c] && (s[c].instances[o] = a);
    }
    return s;
  }
  _splitIndividualUi(e, r) {
    let n = {};
    for (let i in e)
      if (i)
        for (let s of r[i])
          n[s] || (n[s] = {}), n[s][i] = e[i];
    return n;
  }
  _splitInteraction(e) {
    let r = {};
    if (e) {
      let n = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents)), i = this._getKeysForEventDefs(e.mutatedEvents), s = this._splitEventStore(e.mutatedEvents, i), o = (a) => {
        r[a] || (r[a] = {
          affectedEvents: n[a] || us,
          mutatedEvents: s[a] || us,
          isEvent: e.isEvent
        });
      };
      for (let a in n)
        o(a);
      for (let a in s)
        o(a);
    }
    return r;
  }
}
function G0(t, e, r) {
  let n = [];
  t && n.push(t), e && n.push(e);
  let i = {
    "": mc(n)
  };
  return r && Object.assign(i, r), i;
}
function $0(t, e) {
  let r = null, n = null;
  return t.start && (r = e.createMarker(t.start)), t.end && (n = e.createMarker(t.end)), !r && !n || r && n && n < r ? null : { start: r, end: n };
}
function ya(t, e) {
  let r = [], { start: n } = e, i, s;
  for (t.sort(Q0), i = 0; i < t.length; i += 1)
    s = t[i], s.start > n && r.push({ start: n, end: s.start }), s.end > n && (n = s.end);
  return n < e.end && r.push({ start: n, end: e.end }), r;
}
function Q0(t, e) {
  return t.start.valueOf() - e.start.valueOf();
}
function Zt(t, e) {
  let { start: r, end: n } = t, i = null;
  return e.start !== null && (r === null ? r = e.start : r = new Date(Math.max(r.valueOf(), e.start.valueOf()))), e.end != null && (n === null ? n = e.end : n = new Date(Math.min(n.valueOf(), e.end.valueOf()))), (r === null || n === null || r < n) && (i = { start: r, end: n }), i;
}
function Z0(t, e) {
  return (t.start === null ? null : t.start.valueOf()) === (e.start === null ? null : e.start.valueOf()) && (t.end === null ? null : t.end.valueOf()) === (e.end === null ? null : e.end.valueOf());
}
function lo(t, e) {
  return (t.end === null || e.start === null || t.end > e.start) && (t.start === null || e.end === null || t.start < e.end);
}
function ki(t, e) {
  return (t.start === null || e.start !== null && e.start >= t.start) && (t.end === null || e.end !== null && e.end <= t.end);
}
function xt(t, e) {
  return (t.start === null || e >= t.start) && (t.end === null || e < t.end);
}
function X0(t, e) {
  return e.start != null && t < e.start ? e.start : e.end != null && t >= e.end ? new Date(e.end.valueOf() - 1) : t;
}
function Ac(t, e, r, n) {
  return {
    dow: t.getUTCDay(),
    isDisabled: !!(n && !xt(n.activeRange, t)),
    isOther: !!(n && !xt(n.currentRange, t)),
    isToday: !!(e && xt(e, t)),
    isPast: !!(r ? t < r : e && t < e.start),
    isFuture: !!(r ? t > r : e && t >= e.end)
  };
}
function co(t, e) {
  let r = [
    "fc-day",
    `fc-day-${Kd[t.dow]}`
  ];
  return t.isDisabled ? r.push("fc-day-disabled") : (t.isToday && (r.push("fc-day-today"), r.push(e.getClass("today"))), t.isPast && r.push("fc-day-past"), t.isFuture && r.push("fc-day-future"), t.isOther && r.push("fc-day-other")), r;
}
const K0 = _e({ year: "numeric", month: "long", day: "numeric" }), J0 = _e({ week: "long" });
function Pn(t, e, r = "day", n = !0) {
  const { dateEnv: i, options: s, calendarApi: o } = t;
  let a = i.format(e, r === "week" ? J0 : K0);
  if (s.navLinks) {
    let c = i.toDate(e);
    const l = (u) => {
      let d = r === "day" ? s.navLinkDayClick : r === "week" ? s.navLinkWeekClick : null;
      typeof d == "function" ? d.call(o, i.toDate(e), u) : (typeof d == "string" && (r = d), o.zoomTo(e, r));
    };
    return Object.assign({ title: Br(s.navLinkHint, [a, c], a), "data-navlink": "" }, n ? dc(l) : { onClick: l });
  }
  return { "aria-label": a };
}
let fs = null;
function eh() {
  return fs === null && (fs = th()), fs;
}
function th() {
  let t = document.createElement("div");
  Or(t, {
    position: "absolute",
    top: -1e3,
    left: 0,
    border: 0,
    padding: 0,
    overflow: "scroll",
    direction: "rtl"
  }), t.innerHTML = "<div></div>", document.body.appendChild(t);
  let r = t.firstChild.getBoundingClientRect().left > t.getBoundingClientRect().left;
  return Qs(t), r;
}
let ds;
function rh() {
  return ds || (ds = nh()), ds;
}
function nh() {
  let t = document.createElement("div");
  t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-9999px", t.style.left = "-9999px", document.body.appendChild(t);
  let e = Cc(t);
  return document.body.removeChild(t), e;
}
function Cc(t) {
  return {
    x: t.offsetHeight - t.clientHeight,
    y: t.offsetWidth - t.clientWidth
  };
}
function ih(t, e = !1) {
  let r = window.getComputedStyle(t), n = parseInt(r.borderLeftWidth, 10) || 0, i = parseInt(r.borderRightWidth, 10) || 0, s = parseInt(r.borderTopWidth, 10) || 0, o = parseInt(r.borderBottomWidth, 10) || 0, a = Cc(t), c = a.y - n - i, l = a.x - s - o, u = {
    borderLeft: n,
    borderRight: i,
    borderTop: s,
    borderBottom: o,
    scrollbarBottom: l,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };
  return eh() && r.direction === "rtl" ? u.scrollbarLeft = c : u.scrollbarRight = c, e && (u.paddingLeft = parseInt(r.paddingLeft, 10) || 0, u.paddingRight = parseInt(r.paddingRight, 10) || 0, u.paddingTop = parseInt(r.paddingTop, 10) || 0, u.paddingBottom = parseInt(r.paddingBottom, 10) || 0), u;
}
function sh(t, e = !1, r) {
  let n = r ? t.getBoundingClientRect() : uo(t), i = ih(t, e), s = {
    left: n.left + i.borderLeft + i.scrollbarLeft,
    right: n.right - i.borderRight - i.scrollbarRight,
    top: n.top + i.borderTop,
    bottom: n.bottom - i.borderBottom - i.scrollbarBottom
  };
  return e && (s.left += i.paddingLeft, s.right -= i.paddingRight, s.top += i.paddingTop, s.bottom -= i.paddingBottom), s;
}
function uo(t) {
  let e = t.getBoundingClientRect();
  return {
    left: e.left + window.pageXOffset,
    top: e.top + window.pageYOffset,
    right: e.right + window.pageXOffset,
    bottom: e.bottom + window.pageYOffset
  };
}
function oh(t) {
  let e = Dc(t), r = t.getBoundingClientRect();
  for (let n of e) {
    let i = _c(r, n.getBoundingClientRect());
    if (i)
      r = i;
    else
      return null;
  }
  return r;
}
function Dc(t) {
  let e = [];
  for (; t instanceof HTMLElement; ) {
    let r = window.getComputedStyle(t);
    if (r.position === "fixed")
      break;
    /(auto|scroll)/.test(r.overflow + r.overflowY + r.overflowX) && e.push(t), t = t.parentNode;
  }
  return e;
}
function ah(t, e, r) {
  let n = !1, i = function(a) {
    n || (n = !0, e(a));
  }, s = function(a) {
    n || (n = !0, r(a));
  }, o = t(i, s);
  o && typeof o.then == "function" && o.then(i, s);
}
let Ii = class {
  constructor() {
    this.handlers = {}, this.thisContext = null;
  }
  setThisContext(e) {
    this.thisContext = e;
  }
  setOptions(e) {
    this.options = e;
  }
  on(e, r) {
    lh(this.handlers, e, r);
  }
  off(e, r) {
    ch(this.handlers, e, r);
  }
  trigger(e, ...r) {
    let n = this.handlers[e] || [], i = this.options && this.options[e], s = [].concat(i || [], n);
    for (let o of s)
      o.apply(this.thisContext, r);
  }
  hasHandlers(e) {
    return !!(this.handlers[e] && this.handlers[e].length || this.options && this.options[e]);
  }
};
function lh(t, e, r) {
  (t[e] || (t[e] = [])).push(r);
}
function ch(t, e, r) {
  r ? t[e] && (t[e] = t[e].filter((n) => n !== r)) : delete t[e];
}
class pr {
  constructor(e, r, n, i) {
    this.els = r;
    let s = this.originClientRect = e.getBoundingClientRect();
    n && this.buildElHorizontals(s.left), i && this.buildElVerticals(s.top);
  }
  // Populates the left/right internal coordinate arrays
  buildElHorizontals(e) {
    let r = [], n = [];
    for (let i of this.els) {
      let s = i.getBoundingClientRect();
      r.push(s.left - e), n.push(s.right - e);
    }
    this.lefts = r, this.rights = n;
  }
  // Populates the top/bottom internal coordinate arrays
  buildElVerticals(e) {
    let r = [], n = [];
    for (let i of this.els) {
      let s = i.getBoundingClientRect();
      r.push(s.top - e), n.push(s.bottom - e);
    }
    this.tops = r, this.bottoms = n;
  }
  // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
  // If no intersection is made, returns undefined.
  leftToIndex(e) {
    let { lefts: r, rights: n } = this, i = r.length, s;
    for (s = 0; s < i; s += 1)
      if (e >= r[s] && e < n[s])
        return s;
  }
  // Given a top offset (from document top), returns the index of the el that it vertically intersects.
  // If no intersection is made, returns undefined.
  topToIndex(e) {
    let { tops: r, bottoms: n } = this, i = r.length, s;
    for (s = 0; s < i; s += 1)
      if (e >= r[s] && e < n[s])
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
    return un(this.tops || [], e.tops || []) && un(this.bottoms || [], e.bottoms || []) && un(this.lefts || [], e.lefts || []) && un(this.rights || [], e.rights || []);
  }
}
function un(t, e) {
  const r = t.length;
  if (r !== e.length)
    return !1;
  for (let n = 0; n < r; n++)
    if (Math.round(t[n]) !== Math.round(e[n]))
      return !1;
  return !0;
}
class fo {
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
class uh extends fo {
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
class fh extends fo {
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
class Wr {
  constructor(e) {
    this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption]);
  }
  setIconOverride(e) {
    let r, n;
    if (typeof e == "object" && e) {
      r = Object.assign({}, this.iconClasses);
      for (n in e)
        r[n] = this.applyIconOverridePrefix(e[n]);
      this.iconClasses = r;
    } else
      e === !1 && (this.iconClasses = {});
  }
  applyIconOverridePrefix(e) {
    let r = this.iconOverridePrefix;
    return r && e.indexOf(r) !== 0 && (e = r + e), e;
  }
  getClass(e) {
    return this.classes[e] || "";
  }
  getIconClass(e, r) {
    let n;
    return r && this.rtlIconClasses ? n = this.rtlIconClasses[e] || this.iconClasses[e] : n = this.iconClasses[e], n ? `${this.baseIconClass} ${n}` : "";
  }
  getCustomButtonIconClass(e) {
    let r;
    return this.iconOverrideCustomButtonOption && (r = e[this.iconOverrideCustomButtonOption], r) ? `${this.baseIconClass} ${this.applyIconOverridePrefix(r)}` : "";
  }
}
Wr.prototype.classes = {};
Wr.prototype.iconClasses = {};
Wr.prototype.baseIconClass = "";
Wr.prototype.iconOverridePrefix = "";
function xa(t) {
  t();
  let e = ne.debounceRendering, r = [];
  function n(i) {
    r.push(i);
  }
  for (ne.debounceRendering = n, Lr(D(dh, {}), document.createElement("div")); r.length; )
    r.shift()();
  ne.debounceRendering = e;
}
class dh extends Ye {
  render() {
    return D("div", {});
  }
  componentDidMount() {
    this.setState({});
  }
}
function Rc(t) {
  let e = sd(t), r = e.Provider;
  return e.Provider = function() {
    let n = !this.getChildContext, i = r.apply(this, arguments);
    if (n) {
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
class hh {
  constructor(e, r, n, i) {
    this.execFunc = e, this.emitter = r, this.scrollTime = n, this.scrollTimeReset = i, this.handleScrollRequest = (s) => {
      this.queuedRequest = Object.assign({}, this.queuedRequest || {}, s), this.drain();
    }, r.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll();
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
const _t = Rc({});
function ph(t, e, r, n, i, s, o, a, c, l, u, d, f) {
  return {
    dateEnv: i,
    options: r,
    pluginHooks: o,
    emitter: l,
    dispatch: a,
    getCurrentData: c,
    calendarApi: u,
    viewSpec: t,
    viewApi: e,
    dateProfileGenerator: n,
    theme: s,
    isRtl: r.direction === "rtl",
    addResizeHandler(h) {
      l.on("_resize", h);
    },
    removeResizeHandler(h) {
      l.off("_resize", h);
    },
    createScrollResponder(h) {
      return new hh(h, l, pe(r.scrollTime), r.scrollTimeReset);
    },
    registerInteractiveComponent: d,
    unregisterInteractiveComponent: f
  };
}
class Jt extends Ye {
  shouldComponentUpdate(e, r) {
    return this.debug && console.log(Ss(e, this.props), Ss(r, this.state)), !os(this.props, e, this.propEquality) || !os(this.state, r, this.stateEquality);
  }
  // HACK for freakin' React StrictMode
  safeSetState(e) {
    os(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e);
  }
}
Jt.addPropsEquality = gh;
Jt.addStateEquality = vh;
Jt.contextType = _t;
Jt.prototype.propEquality = {};
Jt.prototype.stateEquality = {};
class me extends Jt {
}
me.contextType = _t;
function gh(t) {
  let e = Object.create(this.prototype.propEquality);
  Object.assign(e, t), this.prototype.propEquality = e;
}
function vh(t) {
  let e = Object.create(this.prototype.stateEquality);
  Object.assign(e, t), this.prototype.stateEquality = e;
}
function wt(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
class ft extends me {
  constructor() {
    super(...arguments), this.uid = Xt();
  }
  // Hit System
  // -----------------------------------------------------------------------------------------------------------------
  prepareHits() {
  }
  queryHit(e, r, n, i) {
    return null;
  }
  // Pointer Interaction Utils
  // -----------------------------------------------------------------------------------------------------------------
  isValidSegDownEl(e) {
    return !this.props.eventDrag && // HACK
    !this.props.eventResize && // HACK
    !Oe(e, ".fc-event-mirror");
  }
  isValidDateDownEl(e) {
    return !Oe(e, ".fc-event:not(.fc-bg-event)") && !Oe(e, ".fc-more-link") && // a "more.." link
    !Oe(e, "a[data-navlink]") && // a clickable nav link
    !Oe(e, ".fc-popover");
  }
}
function mh(t, e) {
  switch (e.type) {
    case "CHANGE_DATE":
      return e.dateMarker;
    default:
      return t;
  }
}
function bh(t, e) {
  let r = t.initialDate;
  return r != null ? e.createMarker(r) : jr(t.now, e);
}
function jr(t, e) {
  return typeof t == "function" && (t = t()), t == null ? e.createNowMarker() : e.createMarker(t);
}
class Tc {
  constructor(e) {
    this.props = e, this.nowDate = jr(e.nowInput, e.dateEnv), this.initHiddenDays();
  }
  /* Date Range Computation
  ------------------------------------------------------------------------------------------------------------------*/
  // Builds a structure with info about what the dates/ranges will be for the "prev" view.
  buildPrev(e, r, n) {
    let { dateEnv: i } = this.props, s = i.subtract(
      i.startOf(r, e.currentRangeUnit),
      // important for start-of-month
      e.dateIncrement
    );
    return this.build(s, -1, n);
  }
  // Builds a structure with info about what the dates/ranges will be for the "next" view.
  buildNext(e, r, n) {
    let { dateEnv: i } = this.props, s = i.add(
      i.startOf(r, e.currentRangeUnit),
      // important for start-of-month
      e.dateIncrement
    );
    return this.build(s, 1, n);
  }
  // Builds a structure holding dates/ranges for rendering around the given date.
  // Optional direction param indicates whether the date is being incremented/decremented
  // from its previous value. decremented = -1, incremented = 1 (default).
  build(e, r, n = !0) {
    let { props: i } = this, s, o, a, c, l, u;
    return s = this.buildValidRange(), s = this.trimHiddenDays(s), n && (e = X0(e, s)), o = this.buildCurrentRangeInfo(e, r), a = /^(year|month|week|day)$/.test(o.unit), c = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, a), c = this.trimHiddenDays(c), l = c, i.showNonCurrentDates || (l = Zt(l, o.range)), l = this.adjustActiveRange(l), l = Zt(l, s), u = lo(o.range, s), xt(c, e) || (e = c.start), {
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
      activeRange: l,
      // date range with a rendered skeleton
      // includes not-active days that need some sort of DOM
      renderRange: c,
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
    let e = this.props.validRangeInput, r = typeof e == "function" ? e.call(this.props.calendarApi, this.nowDate) : e;
    return this.refineRange(r) || { start: null, end: null };
  }
  // Builds a structure with info about the "current" range, the range that is
  // highlighted as being the current month for example.
  // See build() for a description of `direction`.
  // Guaranteed to have `range` and `unit` properties. `duration` is optional.
  buildCurrentRangeInfo(e, r) {
    let { props: n } = this, i = null, s = null, o = null, a;
    return n.duration ? (i = n.duration, s = n.durationUnit, o = this.buildRangeFromDuration(e, r, i, s)) : (a = this.props.dayCount) ? (s = "day", o = this.buildRangeFromDayCount(e, r, a)) : (o = this.buildCustomVisibleRange(e)) ? s = n.dateEnv.greatestWholeUnit(o.start, o.end).unit : (i = this.getFallbackDuration(), s = _s(i).unit, o = this.buildRangeFromDuration(e, r, i, s)), { duration: i, unit: s, range: o };
  }
  getFallbackDuration() {
    return pe({ day: 1 });
  }
  // Returns a new activeRange to have time values (un-ambiguate)
  // slotMinTime or slotMaxTime causes the range to expand.
  adjustActiveRange(e) {
    let { dateEnv: r, usesMinMaxTime: n, slotMinTime: i, slotMaxTime: s } = this.props, { start: o, end: a } = e;
    return n && (fr(i) < 0 && (o = xe(o), o = r.add(o, i)), fr(s) > 1 && (a = xe(a), a = Be(a, -1), a = r.add(a, s))), { start: o, end: a };
  }
  // Builds the "current" range when it is specified as an explicit duration.
  // `unit` is the already-computed greatestDurationDenominator unit of duration.
  buildRangeFromDuration(e, r, n, i) {
    let { dateEnv: s, dateAlignment: o } = this.props, a, c, l;
    if (!o) {
      let { dateIncrement: d } = this.props;
      d && tt(d) < tt(n) ? o = _s(d).unit : o = i;
    }
    fr(n) <= 1 && this.isHiddenDay(a) && (a = this.skipHiddenDays(a, r), a = xe(a));
    function u() {
      a = s.startOf(e, o), c = s.add(a, n), l = { start: a, end: c };
    }
    return u(), this.trimHiddenDays(l) || (e = this.skipHiddenDays(e, r), u()), l;
  }
  // Builds the "current" range when a dayCount is specified.
  buildRangeFromDayCount(e, r, n) {
    let { dateEnv: i, dateAlignment: s } = this.props, o = 0, a = e, c;
    s && (a = i.startOf(a, s)), a = xe(a), a = this.skipHiddenDays(a, r), c = a;
    do
      c = Be(c, 1), this.isHiddenDay(c) || (o += 1);
    while (o < n);
    return { start: a, end: c };
  }
  // Builds a normalized range object for the "visible" range,
  // which is a way to define the currentRange and activeRange at the same time.
  buildCustomVisibleRange(e) {
    let { props: r } = this, n = r.visibleRangeInput, i = typeof n == "function" ? n.call(r.calendarApi, r.dateEnv.toDate(e)) : n, s = this.refineRange(i);
    return s && (s.start == null || s.end == null) ? null : s;
  }
  // Computes the range that will represent the element/cells for *rendering*,
  // but which may have voided days/times.
  // not responsible for trimming hidden days.
  buildRenderRange(e, r, n) {
    return e;
  }
  // Compute the duration value that should be added/substracted to the current date
  // when a prev/next operation happens.
  buildDateIncrement(e) {
    let { dateIncrement: r } = this.props, n;
    return r || ((n = this.props.dateAlignment) ? pe(1, n) : e || pe({ days: 1 }));
  }
  refineRange(e) {
    if (e) {
      let r = $0(e, this.props.dateEnv);
      return r && (r = wc(r)), r;
    }
    return null;
  }
  /* Hidden Days
  ------------------------------------------------------------------------------------------------------------------*/
  // Initializes internal variables related to calculating hidden days-of-week
  initHiddenDays() {
    let e = this.props.hiddenDays || [], r = [], n = 0, i;
    for (this.props.weekends === !1 && e.push(0, 6), i = 0; i < 7; i += 1)
      (r[i] = e.indexOf(i) !== -1) || (n += 1);
    if (!n)
      throw new Error("invalid hiddenDays");
    this.isHiddenDayHash = r;
  }
  // Remove days from the beginning and end of the range that are computed as hidden.
  // If the whole range is trimmed off, returns null
  trimHiddenDays(e) {
    let { start: r, end: n } = e;
    return r && (r = this.skipHiddenDays(r)), n && (n = this.skipHiddenDays(n, -1, !0)), r == null || n == null || r < n ? { start: r, end: n } : null;
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
  skipHiddenDays(e, r = 1, n = !1) {
    for (; this.isHiddenDayHash[(e.getUTCDay() + (n ? r : 0) + 7) % 7]; )
      e = Be(e, r);
    return e;
  }
}
function kc(t, e, r) {
  r.emitter.trigger("select", Object.assign(Object.assign({}, ho(t, r)), { jsEvent: e ? e.origEvent : null, view: r.viewApi || r.calendarApi.view }));
}
function yh(t, e) {
  e.emitter.trigger("unselect", {
    jsEvent: t ? t.origEvent : null,
    view: e.viewApi || e.calendarApi.view
  });
}
function ho(t, e) {
  let r = {};
  for (let n of e.pluginHooks.dateSpanTransforms)
    Object.assign(r, n(t, e));
  return Object.assign(r, Nh(t, e.dateEnv)), r;
}
function Ea(t, e, r) {
  let { dateEnv: n, options: i } = r, s = e;
  return t ? (s = xe(s), s = n.add(s, i.defaultAllDayEventDuration)) : s = n.add(s, i.defaultTimedEventDuration), s;
}
function po(t, e, r, n) {
  let i = Hn(t.defs, e), s = Ge();
  for (let o in t.defs) {
    let a = t.defs[o];
    s.defs[o] = xh(a, i[o], r, n);
  }
  for (let o in t.instances) {
    let a = t.instances[o], c = s.defs[a.defId];
    s.instances[o] = Eh(a, c, i[a.defId], r, n);
  }
  return s;
}
function xh(t, e, r, n) {
  let i = r.standardProps || {};
  i.hasEnd == null && e.durationEditable && (r.startDelta || r.endDelta) && (i.hasEnd = !0);
  let s = Object.assign(Object.assign(Object.assign({}, t), i), { ui: Object.assign(Object.assign({}, t.ui), i.ui) });
  r.extendedProps && (s.extendedProps = Object.assign(Object.assign({}, s.extendedProps), r.extendedProps));
  for (let o of n.pluginHooks.eventDefMutationAppliers)
    o(s, r, n);
  return !s.hasEnd && n.options.forceEventDuration && (s.hasEnd = !0), s;
}
function Eh(t, e, r, n, i) {
  let { dateEnv: s } = i, o = n.standardProps && n.standardProps.allDay === !0, a = n.standardProps && n.standardProps.hasEnd === !1, c = Object.assign({}, t);
  return o && (c.range = Ec(c.range)), n.datesDelta && r.startEditable && (c.range = {
    start: s.add(c.range.start, n.datesDelta),
    end: s.add(c.range.end, n.datesDelta)
  }), n.startDelta && r.durationEditable && (c.range = {
    start: s.add(c.range.start, n.startDelta),
    end: c.range.end
  }), n.endDelta && r.durationEditable && (c.range = {
    start: c.range.start,
    end: s.add(c.range.end, n.endDelta)
  }), a && (c.range = {
    start: c.range.start,
    end: Ea(e.allDay, c.range.start, i)
  }), e.allDay && (c.range = {
    start: xe(c.range.start),
    end: xe(c.range.end)
  }), c.range.end < c.range.start && (c.range.end = Ea(e.allDay, c.range.start, i)), c;
}
class sr {
  constructor(e, r) {
    this.context = e, this.internalEventSource = r;
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
class we {
  // instance will be null if expressing a recurring event that has no current instances,
  // OR if trying to validate an incoming external event that has no dates assigned
  constructor(e, r, n) {
    this._context = e, this._def = r, this._instance = n || null;
  }
  /*
  TODO: make event struct more responsible for this
  */
  setProp(e, r) {
    if (e in bc)
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    else if (e === "id")
      r = wn[e](r), this.mutate({
        standardProps: { publicId: r }
        // hardcoded internal name
      });
    else if (e in wn)
      r = wn[e](r), this.mutate({
        standardProps: { [e]: r }
      });
    else if (e in On) {
      let n = On[e](r);
      e === "color" ? n = { backgroundColor: r, borderColor: r } : e === "editable" ? n = { startEditable: r, durationEditable: r } : n = { [e]: r }, this.mutate({
        standardProps: { ui: n }
      });
    } else
      console.warn(`Could not set prop '${e}'. Use setExtendedProp instead.`);
  }
  setExtendedProp(e, r) {
    this.mutate({
      extendedProps: { [e]: r }
    });
  }
  setStart(e, r = {}) {
    let { dateEnv: n } = this._context, i = n.createMarker(e);
    if (i && this._instance) {
      let s = this._instance.range, o = lr(s.start, i, n, r.granularity);
      r.maintainDuration ? this.mutate({ datesDelta: o }) : this.mutate({ startDelta: o });
    }
  }
  setEnd(e, r = {}) {
    let { dateEnv: n } = this._context, i;
    if (!(e != null && (i = n.createMarker(e), !i)) && this._instance)
      if (i) {
        let s = lr(this._instance.range.end, i, n, r.granularity);
        this.mutate({ endDelta: s });
      } else
        this.mutate({ standardProps: { hasEnd: !1 } });
  }
  setDates(e, r, n = {}) {
    let { dateEnv: i } = this._context, s = { allDay: n.allDay }, o = i.createMarker(e), a;
    if (o && !(r != null && (a = i.createMarker(r), !a)) && this._instance) {
      let c = this._instance.range;
      n.allDay === !0 && (c = Ec(c));
      let l = lr(c.start, o, i, n.granularity);
      if (a) {
        let u = lr(c.end, a, i, n.granularity);
        jd(l, u) ? this.mutate({ datesDelta: l, standardProps: s }) : this.mutate({ startDelta: l, endDelta: u, standardProps: s });
      } else
        s.hasEnd = !1, this.mutate({ datesDelta: l, standardProps: s });
    }
  }
  moveStart(e) {
    let r = pe(e);
    r && this.mutate({ startDelta: r });
  }
  moveEnd(e) {
    let r = pe(e);
    r && this.mutate({ endDelta: r });
  }
  moveDates(e) {
    let r = pe(e);
    r && this.mutate({ datesDelta: r });
  }
  setAllDay(e, r = {}) {
    let n = { allDay: e }, { maintainDuration: i } = r;
    i == null && (i = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (n.hasEnd = i), this.mutate({ standardProps: n });
  }
  formatRange(e) {
    let { dateEnv: r } = this._context, n = this._instance, i = _e(e);
    return this._def.hasEnd ? r.formatRange(n.range.start, n.range.end, i, {
      forcedStartTzo: n.forcedStartTzo,
      forcedEndTzo: n.forcedEndTzo
    }) : r.format(n.range.start, i, {
      forcedTzo: n.forcedStartTzo
    });
  }
  mutate(e) {
    let r = this._instance;
    if (r) {
      let n = this._def, i = this._context, { eventStore: s } = i.getCurrentData(), o = so(s, r.instanceId);
      o = po(o, {
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
      let c = new we(i, n, r);
      this._def = o.defs[n.defId], this._instance = o.instances[r.instanceId], i.dispatch({
        type: "MERGE_EVENTS",
        eventStore: o
      }), i.emitter.trigger("eventChange", {
        oldEvent: c,
        event: this,
        relatedEvents: Yt(o, i, r),
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
    let e = this._context, r = Ic(this);
    e.dispatch({
      type: "REMOVE_EVENTS",
      eventStore: r
    }), e.emitter.trigger("eventRemove", {
      event: this,
      relatedEvents: [],
      revert() {
        e.dispatch({
          type: "MERGE_EVENTS",
          eventStore: r
        });
      }
    });
  }
  get source() {
    let { sourceId: e } = this._def;
    return e ? new sr(this._context, this._context.getCurrentData().eventSources[e]) : null;
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
    let r = this._def, { ui: n } = r, { startStr: i, endStr: s } = this, o = {
      allDay: r.allDay
    };
    return r.title && (o.title = r.title), i && (o.start = i), s && (o.end = s), r.publicId && (o.id = r.publicId), r.groupId && (o.groupId = r.groupId), r.url && (o.url = r.url), n.display && n.display !== "auto" && (o.display = n.display), e.collapseColor && n.backgroundColor && n.backgroundColor === n.borderColor ? o.color = n.backgroundColor : (n.backgroundColor && (o.backgroundColor = n.backgroundColor), n.borderColor && (o.borderColor = n.borderColor)), n.textColor && (o.textColor = n.textColor), n.classNames.length && (o.classNames = n.classNames), Object.keys(r.extendedProps).length && (e.collapseExtendedProps ? Object.assign(o, r.extendedProps) : o.extendedProps = r.extendedProps), o;
  }
  toJSON() {
    return this.toPlainObject();
  }
}
function Ic(t) {
  let e = t._def, r = t._instance;
  return {
    defs: { [e.defId]: e },
    instances: r ? { [r.instanceId]: r } : {}
  };
}
function Yt(t, e, r) {
  let { defs: n, instances: i } = t, s = [], o = r ? r.instanceId : "";
  for (let a in i) {
    let c = i[a], l = n[c.defId];
    c.instanceId !== o && s.push(new we(e, l, c));
  }
  return s;
}
function wa(t, e, r, n) {
  let i = {}, s = {}, o = {}, a = [], c = [], l = Hn(t.defs, e);
  for (let u in t.defs) {
    let d = t.defs[u];
    l[d.defId].display === "inverse-background" && (d.groupId ? (i[d.groupId] = [], o[d.groupId] || (o[d.groupId] = d)) : s[u] = []);
  }
  for (let u in t.instances) {
    let d = t.instances[u], f = t.defs[d.defId], h = l[f.defId], p = d.range, v = !f.allDay && n ? wc(p, n) : p, b = Zt(v, r);
    b && (h.display === "inverse-background" ? f.groupId ? i[f.groupId].push(b) : s[d.defId].push(b) : h.display !== "none" && (h.display === "background" ? a : c).push({
      def: f,
      ui: h,
      instance: d,
      range: b,
      isStart: v.start && v.start.valueOf() === b.start.valueOf(),
      isEnd: v.end && v.end.valueOf() === b.end.valueOf()
    }));
  }
  for (let u in i) {
    let d = i[u], f = ya(d, r);
    for (let h of f) {
      let p = o[u], v = l[p.defId];
      a.push({
        def: p,
        ui: v,
        instance: null,
        range: h,
        isStart: !1,
        isEnd: !1
      });
    }
  }
  for (let u in s) {
    let d = s[u], f = ya(d, r);
    for (let h of f)
      a.push({
        def: t.defs[u],
        ui: l[u],
        instance: null,
        range: h,
        isStart: !1,
        isEnd: !1
      });
  }
  return { bg: a, fg: c };
}
function wh(t) {
  return t.ui.display === "background" || t.ui.display === "inverse-background";
}
function _a(t, e) {
  t.fcSeg = e;
}
function gr(t) {
  return t.fcSeg || t.parentNode.fcSeg || // for the harness
  null;
}
function Hn(t, e) {
  return Et(t, (r) => Mc(r, e));
}
function Mc(t, e) {
  let r = [];
  return e[""] && r.push(e[""]), e[t.defId] && r.push(e[t.defId]), r.push(t.ui), mc(r);
}
function Nc(t, e) {
  let r = t.map(_h);
  return r.sort((n, i) => Pd(n, i, e)), r.map((n) => n._seg);
}
function _h(t) {
  let { eventRange: e } = t, r = e.def, n = e.instance ? e.instance.range : e.range, i = n.start ? n.start.valueOf() : 0, s = n.end ? n.end.valueOf() : 0;
  return Object.assign(Object.assign(Object.assign({}, r.extendedProps), r), {
    id: r.publicId,
    start: i,
    end: s,
    duration: s - i,
    allDay: Number(r.allDay),
    _seg: t
  });
}
function Sh(t, e) {
  let { pluginHooks: r } = e, n = r.isDraggableTransformers, { def: i, ui: s } = t.eventRange, o = s.startEditable;
  for (let a of n)
    o = a(o, i, s, e);
  return o;
}
function Ah(t, e) {
  return t.isStart && t.eventRange.ui.durationEditable && e.options.eventResizableFromStart;
}
function Ch(t, e) {
  return t.isEnd && t.eventRange.ui.durationEditable;
}
function Oc(t, e, r, n, i, s, o) {
  let { dateEnv: a, options: c } = r, { displayEventTime: l, displayEventEnd: u } = c, d = t.eventRange.def, f = t.eventRange.instance;
  l == null && (l = n !== !1), u == null && (u = i !== !1);
  let h = f.range.start, p = f.range.end, v = s || t.start || t.eventRange.range.start, b = o || t.end || t.eventRange.range.end, w = xe(h).valueOf() === xe(v).valueOf(), x = xe(Bt(p, -1)).valueOf() === xe(Bt(b, -1)).valueOf();
  return l && !d.allDay && (w || x) ? (v = w ? h : v, b = x ? p : b, u && d.hasEnd ? a.formatRange(v, b, e, {
    forcedStartTzo: s ? null : f.forcedStartTzo,
    forcedEndTzo: o ? null : f.forcedEndTzo
  }) : a.format(v, e, {
    forcedTzo: s ? null : f.forcedStartTzo
    // nooooo, same
  })) : "";
}
function Nt(t, e, r) {
  let n = t.eventRange.range;
  return {
    isPast: n.end < (r || e.start),
    isFuture: n.start >= (r || e.end),
    isToday: e && xt(e, n.start)
  };
}
function Dh(t) {
  let e = ["fc-event"];
  return t.isMirror && e.push("fc-event-mirror"), t.isDraggable && e.push("fc-event-draggable"), (t.isStartResizable || t.isEndResizable) && e.push("fc-event-resizable"), t.isDragging && e.push("fc-event-dragging"), t.isResizing && e.push("fc-event-resizing"), t.isSelected && e.push("fc-event-selected"), t.isStart && e.push("fc-event-start"), t.isEnd && e.push("fc-event-end"), t.isPast && e.push("fc-event-past"), t.isToday && e.push("fc-event-today"), t.isFuture && e.push("fc-event-future"), e;
}
function Bc(t) {
  return t.instance ? t.instance.instanceId : `${t.def.defId}:${t.range.start.toISOString()}`;
}
function Pc(t, e) {
  let { def: r, instance: n } = t.eventRange, { url: i } = r;
  if (i)
    return { href: i };
  let { emitter: s, options: o } = e, { eventInteractive: a } = o;
  return a == null && (a = r.interactive, a == null && (a = !!s.hasHandlers("eventClick"))), a ? hc((c) => {
    s.trigger("eventClick", {
      el: c.target,
      event: new we(e, r, n),
      jsEvent: c,
      view: e.viewApi
    });
  }) : {};
}
const Rh = {
  start: L,
  end: L,
  allDay: Boolean
};
function Th(t, e, r) {
  let n = kh(t, e), { range: i } = n;
  if (!i.start)
    return null;
  if (!i.end) {
    if (r == null)
      return null;
    i.end = e.add(i.start, r);
  }
  return n;
}
function kh(t, e) {
  let { refined: r, extra: n } = no(t, Rh), i = r.start ? e.createMarkerMeta(r.start) : null, s = r.end ? e.createMarkerMeta(r.end) : null, { allDay: o } = r;
  return o == null && (o = i && i.isTimeUnspecified && (!s || s.isTimeUnspecified)), Object.assign({ range: {
    start: i ? i.marker : null,
    end: s ? s.marker : null
  }, allDay: o }, n);
}
function Ih(t, e) {
  return Z0(t.range, e.range) && t.allDay === e.allDay && Mh(t, e);
}
function Mh(t, e) {
  for (let r in e)
    if (r !== "range" && r !== "allDay" && t[r] !== e[r])
      return !1;
  for (let r in t)
    if (!(r in e))
      return !1;
  return !0;
}
function Nh(t, e) {
  return Object.assign(Object.assign({}, Lc(t.range, e, t.allDay)), { allDay: t.allDay });
}
function Hc(t, e, r) {
  return Object.assign(Object.assign({}, Lc(t, e, r)), { timeZone: e.timeZone });
}
function Lc(t, e, r) {
  return {
    start: e.toDate(t.start),
    end: e.toDate(t.end),
    startStr: e.formatIso(t.start, { omitTime: r }),
    endStr: e.formatIso(t.end, { omitTime: r })
  };
}
function Oh(t, e, r) {
  let n = xc({ editable: !1 }, r), i = Cs(
    n.refined,
    n.extra,
    "",
    // sourceId
    t.allDay,
    !0,
    // hasEnd
    r
  );
  return {
    def: i,
    ui: Mc(i, e),
    instance: io(i.defId, t.range),
    range: t.range,
    isStart: !0,
    isEnd: !0
  };
}
let Fc = {};
function Bh(t, e) {
  Fc[t] = e;
}
function Ph(t) {
  return new Fc[t]();
}
class Hh {
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
    return We(e);
  }
  markerToArray(e) {
    return Tt(e);
  }
}
Bh("gregory", Hh);
const Lh = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function Fh(t) {
  let e = Lh.exec(t);
  if (e) {
    let r = new Date(Date.UTC(Number(e[1]), e[3] ? Number(e[3]) - 1 : 0, Number(e[5] || 1), Number(e[7] || 0), Number(e[8] || 0), Number(e[10] || 0), e[12] ? +`0.${e[12]}` * 1e3 : 0));
    if (gc(r)) {
      let n = null;
      return e[13] && (n = (e[15] === "-" ? -1 : 1) * (Number(e[16] || 0) * 60 + Number(e[18] || 0))), {
        marker: r,
        isTimeUnspecified: !e[6],
        timeZoneOffset: n
      };
    }
  }
  return null;
}
class zh {
  constructor(e) {
    let r = this.timeZone = e.timeZone, n = r !== "local" && r !== "UTC";
    e.namedTimeZoneImpl && n && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(r)), this.canComputeOffset = !!(!n || this.namedTimeZoneImpl), this.calendarSystem = Ph(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, e.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof e.firstDay == "number" && (this.weekDow = e.firstDay), typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = e.weekText != null ? e.weekText : e.locale.options.weekText, this.weekTextLong = (e.weekTextLong != null ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
  }
  // Creating / Parsing
  createMarker(e) {
    let r = this.createMarkerMeta(e);
    return r === null ? null : r.marker;
  }
  createNowMarker() {
    return this.canComputeOffset ? this.timestampToMarker((/* @__PURE__ */ new Date()).valueOf()) : We(ua(/* @__PURE__ */ new Date()));
  }
  createMarkerMeta(e) {
    if (typeof e == "string")
      return this.parse(e);
    let r = null;
    return typeof e == "number" ? r = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (r = this.timestampToMarker(e))) : Array.isArray(e) && (r = We(e)), r === null || !gc(r) ? null : { marker: r, isTimeUnspecified: !1, forcedTzo: null };
  }
  parse(e) {
    let r = Fh(e);
    if (r === null)
      return null;
    let { marker: n } = r, i = null;
    return r.timeZoneOffset !== null && (this.canComputeOffset ? n = this.timestampToMarker(n.valueOf() - r.timeZoneOffset * 60 * 1e3) : i = r.timeZoneOffset), { marker: n, isTimeUnspecified: r.isTimeUnspecified, forcedTzo: i };
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
  add(e, r) {
    let n = this.calendarSystem.markerToArray(e);
    return n[0] += r.years, n[1] += r.months, n[2] += r.days, n[6] += r.milliseconds, this.calendarSystem.arrayToMarker(n);
  }
  subtract(e, r) {
    let n = this.calendarSystem.markerToArray(e);
    return n[0] -= r.years, n[1] -= r.months, n[2] -= r.days, n[6] -= r.milliseconds, this.calendarSystem.arrayToMarker(n);
  }
  addYears(e, r) {
    let n = this.calendarSystem.markerToArray(e);
    return n[0] += r, this.calendarSystem.arrayToMarker(n);
  }
  addMonths(e, r) {
    let n = this.calendarSystem.markerToArray(e);
    return n[1] += r, this.calendarSystem.arrayToMarker(n);
  }
  // Diffing Whole Units
  diffWholeYears(e, r) {
    let { calendarSystem: n } = this;
    return kt(e) === kt(r) && n.getMarkerDay(e) === n.getMarkerDay(r) && n.getMarkerMonth(e) === n.getMarkerMonth(r) ? n.getMarkerYear(r) - n.getMarkerYear(e) : null;
  }
  diffWholeMonths(e, r) {
    let { calendarSystem: n } = this;
    return kt(e) === kt(r) && n.getMarkerDay(e) === n.getMarkerDay(r) ? n.getMarkerMonth(r) - n.getMarkerMonth(e) + (n.getMarkerYear(r) - n.getMarkerYear(e)) * 12 : null;
  }
  // Range / Duration
  greatestWholeUnit(e, r) {
    let n = this.diffWholeYears(e, r);
    return n !== null ? { unit: "year", value: n } : (n = this.diffWholeMonths(e, r), n !== null ? { unit: "month", value: n } : (n = i0(e, r), n !== null ? { unit: "week", value: n } : (n = In(e, r), n !== null ? { unit: "day", value: n } : (n = e0(e, r), xn(n) ? { unit: "hour", value: n } : (n = t0(e, r), xn(n) ? { unit: "minute", value: n } : (n = r0(e, r), xn(n) ? { unit: "second", value: n } : { unit: "millisecond", value: r.valueOf() - e.valueOf() }))))));
  }
  countDurationsBetween(e, r, n) {
    let i;
    return n.years && (i = this.diffWholeYears(e, r), i !== null) ? i / Yd(n) : n.months && (i = this.diffWholeMonths(e, r), i !== null) ? i / Gd(n) : n.days && (i = In(e, r), i !== null) ? i / fr(n) : (r.valueOf() - e.valueOf()) / tt(n);
  }
  // Start-Of
  // these DON'T return zoned-dates. only UTC start-of dates
  startOf(e, r) {
    return r === "year" ? this.startOfYear(e) : r === "month" ? this.startOfMonth(e) : r === "week" ? this.startOfWeek(e) : r === "day" ? xe(e) : r === "hour" ? s0(e) : r === "minute" ? o0(e) : r === "second" ? a0(e) : null;
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
    return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : l0(e, this.weekDow, this.weekDoy);
  }
  // TODO: choke on timeZoneName: long
  format(e, r, n = {}) {
    return r.format({
      marker: e,
      timeZoneOffset: n.forcedTzo != null ? n.forcedTzo : this.offsetForMarker(e)
    }, this);
  }
  formatRange(e, r, n, i = {}) {
    return i.isEndExclusive && (r = Bt(r, -1)), n.formatRange({
      marker: e,
      timeZoneOffset: i.forcedStartTzo != null ? i.forcedStartTzo : this.offsetForMarker(e)
    }, {
      marker: r,
      timeZoneOffset: i.forcedEndTzo != null ? i.forcedEndTzo : this.offsetForMarker(r)
    }, this, i.defaultSeparator);
  }
  /*
  DUMB: the omitTime arg is dumb. if we omit the time, we want to omit the timezone offset. and if we do that,
  might as well use buildIsoString or some other util directly
  */
  formatIso(e, r = {}) {
    let n = null;
    return r.omitTimeZoneOffset || (r.forcedTzo != null ? n = r.forcedTzo : n = this.offsetForMarker(e)), vc(e, n, r.omitTime);
  }
  // TimeZone
  timestampToMarker(e) {
    return this.timeZone === "local" ? We(ua(new Date(e))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(e) : We(this.namedTimeZoneImpl.timestampToArray(e));
  }
  offsetForMarker(e) {
    return this.timeZone === "local" ? -fa(Tt(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(Tt(e)) : null;
  }
  // Conversion
  toDate(e, r) {
    return this.timeZone === "local" ? fa(Tt(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(Tt(e)) * 1e3 * 60) : new Date(e.valueOf() - (r || 0));
  }
}
class zc {
  constructor() {
    this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {};
  }
  addSegs(e) {
    let r = [];
    for (let n of e)
      this.insertEntry(n, r);
    return r;
  }
  insertEntry(e, r) {
    let n = this.findInsertion(e);
    return this.isInsertionValid(n, e) ? (this.insertEntryAt(e, n), 1) : this.handleInvalidInsertion(n, e, r);
  }
  isInsertionValid(e, r) {
    return (this.maxCoord === -1 || e.levelCoord + r.thickness <= this.maxCoord) && (this.maxStackCnt === -1 || e.stackCnt < this.maxStackCnt);
  }
  // returns number of new entries inserted
  handleInvalidInsertion(e, r, n) {
    return this.allowReslicing && e.touchingEntry ? this.splitEntry(r, e.touchingEntry, n) : (n.push(r), 0);
  }
  splitEntry(e, r, n) {
    let i = 0, s = [], o = e.span, a = r.span;
    return o.start < a.start && (i += this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: o.start, end: a.start }
    }, s)), o.end > a.end && (i += this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: a.end, end: o.end }
    }, s)), i ? (n.push({
      index: e.index,
      thickness: e.thickness,
      span: go(a, o)
      // guaranteed to intersect
    }, ...s), i) : (n.push(e), 0);
  }
  insertEntryAt(e, r) {
    let { entriesByLevel: n, levelCoords: i } = this;
    r.lateral === -1 ? (hs(i, r.level, r.levelCoord), hs(n, r.level, [e])) : hs(n[r.level], r.lateral, e), this.stackCnts[Gt(e)] = r.stackCnt;
  }
  findInsertion(e) {
    let { levelCoords: r, entriesByLevel: n, strictOrder: i, stackCnts: s } = this, o = r.length, a = 0, c = -1, l = -1, u = null, d = 0;
    for (let p = 0; p < o; p += 1) {
      let v = r[p];
      if (!i && v >= a + e.thickness)
        break;
      let b = n[p], w, x = Rs(b, e.span.start, Ds), g = x[0] + x[1];
      for (
        ;
        // loop through entries that horizontally intersect
        (w = b[g]) && // but not past the whole entry list
        w.span.start < e.span.end;
      ) {
        let m = v + w.thickness;
        m > a && (a = m, u = w, c = p, l = g), m === a && (d = Math.max(d, s[Gt(w)] + 1)), g += 1;
      }
    }
    let f = 0;
    if (u)
      for (f = c + 1; f < o && r[f] < a; )
        f += 1;
    let h = -1;
    return f < o && r[f] === a && (h = Rs(n[f], e.span.end, Ds)[0]), {
      touchingLevel: c,
      touchingLateral: l,
      touchingEntry: u,
      stackCnt: d,
      levelCoord: a,
      level: f,
      lateral: h
    };
  }
  // sorted by levelCoord (lowest to highest)
  toRects() {
    let { entriesByLevel: e, levelCoords: r } = this, n = e.length, i = [];
    for (let s = 0; s < n; s += 1) {
      let o = e[s], a = r[s];
      for (let c of o)
        i.push(Object.assign(Object.assign({}, c), { levelCoord: a }));
    }
    return i;
  }
}
function Ds(t) {
  return t.span.end;
}
function Gt(t) {
  return t.index + ":" + t.span.start;
}
function Uh(t) {
  let e = [];
  for (let r of t) {
    let n = [], i = {
      span: r.span,
      entries: [r]
    };
    for (let s of e)
      go(s.span, i.span) ? i = {
        entries: s.entries.concat(i.entries),
        span: Wh(s.span, i.span)
      } : n.push(s);
    n.push(i), e = n;
  }
  return e;
}
function Wh(t, e) {
  return {
    start: Math.min(t.start, e.start),
    end: Math.max(t.end, e.end)
  };
}
function go(t, e) {
  let r = Math.max(t.start, e.start), n = Math.min(t.end, e.end);
  return r < n ? { start: r, end: n } : null;
}
function hs(t, e, r) {
  t.splice(e, 0, r);
}
function Rs(t, e, r) {
  let n = 0, i = t.length;
  if (!i || e < r(t[n]))
    return [0, 0];
  if (e > r(t[i - 1]))
    return [i, 0];
  for (; n < i; ) {
    let s = Math.floor(n + (i - n) / 2), o = r(t[s]);
    if (e < o)
      i = s;
    else if (e > o)
      n = s + 1;
    else
      return [s, 1];
  }
  return [n, 0];
}
class br {
  constructor(e) {
    this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
  }
  destroy() {
  }
}
function jh(t, e) {
  return {
    component: t,
    el: e.el,
    useEventCenter: e.useEventCenter != null ? e.useEventCenter : !0,
    isHitComboAllowed: e.isHitComboAllowed || null
  };
}
function vo(t) {
  return {
    [t.component.uid]: t
  };
}
const Ts = {};
class Vh {
  constructor(e, r) {
    this.emitter = new Ii();
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
const mo = {};
class qh extends me {
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
    let { props: e } = this, { options: r } = e, { forPrint: n } = this.state, i = n || r.height === "auto" || r.contentHeight === "auto", s = !i && r.height != null ? r.height : "", o = [
      "fc",
      n ? "fc-media-print" : "fc-media-screen",
      `fc-direction-${r.direction}`,
      e.theme.getClass("root")
    ];
    return Sc() || o.push("fc-liquid-hack"), e.children(o, s, i, n);
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
function Yh(t, e) {
  return !t || e > 10 ? _e({ weekday: "short" }) : e > 1 ? _e({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : _e({ weekday: "long" });
}
const Uc = "fc-col-header-cell";
function Wc(t) {
  return t.text;
}
class bo extends me {
  constructor() {
    super(...arguments), this.id = Xt(), this.queuedDomNodes = [], this.currentDomNodes = [], this.handleEl = (e) => {
      this.props.elRef && wt(this.props.elRef, e);
    };
  }
  render() {
    const { props: e, context: r } = this, { options: n } = r, { customGenerator: i, defaultGenerator: s, renderProps: o } = e, a = Vc(e);
    let c = !1, l, u = [], d;
    if (i != null) {
      const f = typeof i == "function" ? i(o, D) : i;
      if (f === !0)
        c = !0;
      else {
        const h = f && typeof f == "object";
        h && "html" in f ? a.dangerouslySetInnerHTML = { __html: f.html } : h && "domNodes" in f ? u = Array.prototype.slice.call(f.domNodes) : !h && typeof f != "function" ? l = f : d = f;
      }
    } else
      c = !jc(e.generatorName, n);
    return c && s && (l = s(o)), this.queuedDomNodes = u, this.currentGeneratorMeta = d, D(e.elTag, a, l);
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
    var r;
    const { props: n, context: i } = this, { handleCustomRendering: s, customRenderingMetaMap: o } = i.options;
    if (s) {
      const a = (r = this.currentGeneratorMeta) !== null && r !== void 0 ? r : o == null ? void 0 : o[n.generatorName];
      a && s(Object.assign(Object.assign({
        id: this.id,
        isActive: e,
        containerEl: this.base,
        reportNewContainerEl: this.handleEl,
        // for customRenderingReplacesEl
        generatorMeta: a
      }, n), { elClasses: (n.elClasses || []).filter(Gh) }));
    }
  }
  applyQueueudDomNodes() {
    const { queuedDomNodes: e, currentDomNodes: r } = this, n = this.base;
    if (!Ot(e, r)) {
      r.forEach(Qs);
      for (let i of e)
        n.appendChild(i);
      this.currentDomNodes = e;
    }
  }
}
bo.addPropsEquality({
  elClasses: Ot,
  elStyle: lt,
  elAttrs: Qd,
  renderProps: lt
});
function jc(t, e) {
  var r;
  return !!(e.handleCustomRendering && t && (!((r = e.customRenderingMetaMap) === null || r === void 0) && r[t]));
}
function Vc(t, e) {
  const r = Object.assign(Object.assign({}, t.elAttrs), { ref: t.elRef });
  return (t.elClasses || e) && (r.className = (t.elClasses || []).concat(e || []).concat(r.className || []).filter(Boolean).join(" ")), t.elStyle && (r.style = t.elStyle), r;
}
function Gh(t) {
  return !!t;
}
const qc = Rc(0);
class $e extends Ye {
  constructor() {
    super(...arguments), this.InnerContent = $h.bind(void 0, this), this.handleRootEl = (e) => {
      this.rootEl = e, this.props.elRef && wt(this.props.elRef, e);
    };
  }
  render() {
    const { props: e } = this, r = Qh(e.classNameGenerator, e.renderProps);
    if (e.children) {
      const n = Vc(e, r), i = e.children(this.InnerContent, e.renderProps, n);
      return e.elTag ? D(e.elTag, n, i) : i;
    } else
      return D(bo, Object.assign(Object.assign({}, e), { elRef: this.handleRootEl, elTag: e.elTag || "div", elClasses: (e.elClasses || []).concat(r), renderId: this.context }));
  }
  componentDidMount() {
    var e, r;
    (r = (e = this.props).didMount) === null || r === void 0 || r.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.rootEl || this.base }));
  }
  componentWillUnmount() {
    var e, r;
    (r = (e = this.props).willUnmount) === null || r === void 0 || r.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.rootEl || this.base }));
  }
}
$e.contextType = qc;
function $h(t, e) {
  const r = t.props;
  return D(bo, Object.assign({ renderProps: r.renderProps, generatorName: r.generatorName, customGenerator: r.customGenerator, defaultGenerator: r.defaultGenerator, renderId: t.context }, e));
}
function Qh(t, e) {
  const r = typeof t == "function" ? t(e) : t || [];
  return typeof r == "string" ? [r] : r;
}
class Zh extends me {
  render() {
    let { dateEnv: e, options: r, theme: n, viewApi: i } = this.context, { props: s } = this, { date: o, dateProfile: a } = s, c = Ac(o, s.todayRange, null, a), l = [Uc].concat(co(c, n)), u = e.format(o, s.dayHeaderFormat), d = !c.isDisabled && s.colCnt > 1 ? Pn(this.context, o) : {}, f = Object.assign(Object.assign(Object.assign({ date: e.toDate(o), view: i }, s.extraRenderProps), { text: u }), c);
    return D($e, { elTag: "th", elClasses: l, elAttrs: Object.assign({ role: "columnheader", colSpan: s.colSpan, "data-date": c.isDisabled ? void 0 : to(o) }, s.extraDataAttrs), renderProps: f, generatorName: "dayHeaderContent", customGenerator: r.dayHeaderContent, defaultGenerator: Wc, classNameGenerator: r.dayHeaderClassNames, didMount: r.dayHeaderDidMount, willUnmount: r.dayHeaderWillUnmount }, (h) => D("div", { className: "fc-scrollgrid-sync-inner" }, !c.isDisabled && D(h, { elTag: "a", elAttrs: d, elClasses: [
      "fc-col-header-cell-cushion",
      s.isSticky && "fc-sticky"
    ] })));
  }
}
const Xh = _e({ weekday: "long" });
class Kh extends me {
  render() {
    let { props: e } = this, { dateEnv: r, theme: n, viewApi: i, options: s } = this.context, o = Be(/* @__PURE__ */ new Date(2592e5), e.dow), a = {
      dow: e.dow,
      isDisabled: !1,
      isFuture: !1,
      isPast: !1,
      isToday: !1,
      isOther: !1
    }, c = r.format(o, e.dayHeaderFormat), l = Object.assign(Object.assign(Object.assign(Object.assign({
      // TODO: make this public?
      date: o
    }, a), { view: i }), e.extraRenderProps), { text: c });
    return D($e, { elTag: "th", elClasses: [
      Uc,
      ...co(a, n),
      ...e.extraClassNames || []
    ], elAttrs: Object.assign({ role: "columnheader", colSpan: e.colSpan }, e.extraDataAttrs), renderProps: l, generatorName: "dayHeaderContent", customGenerator: s.dayHeaderContent, defaultGenerator: Wc, classNameGenerator: s.dayHeaderClassNames, didMount: s.dayHeaderDidMount, willUnmount: s.dayHeaderWillUnmount }, (u) => D(
      "div",
      { className: "fc-scrollgrid-sync-inner" },
      D(u, { elTag: "a", elClasses: [
        "fc-col-header-cell-cushion",
        e.isSticky && "fc-sticky"
      ], elAttrs: {
        "aria-label": r.format(o, Xh)
      } })
    ));
  }
}
class Vr extends Ye {
  constructor(e, r) {
    super(e, r), this.initialNowDate = jr(r.options.now, r.dateEnv), this.initialNowQueriedMs = (/* @__PURE__ */ new Date()).valueOf(), this.state = this.computeTiming().currentState;
  }
  render() {
    let { props: e, state: r } = this;
    return e.children(r.nowDate, r.todayRange);
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
    let { props: e, context: r } = this, n = Bt(this.initialNowDate, (/* @__PURE__ */ new Date()).valueOf() - this.initialNowQueriedMs), i = r.dateEnv.startOf(n, e.unit), s = r.dateEnv.add(i, pe(1, e.unit)), o = s.valueOf() - n.valueOf();
    return o = Math.min(1e3 * 60 * 60 * 24, o), {
      currentState: { nowDate: i, todayRange: Sa(i) },
      nextState: { nowDate: s, todayRange: Sa(s) },
      waitMs: o
    };
  }
  setTimeout() {
    let { nextState: e, waitMs: r } = this.computeTiming();
    this.timeoutId = setTimeout(() => {
      this.setState(e, () => {
        this.setTimeout();
      });
    }, r);
  }
  clearTimeout() {
    this.timeoutId && clearTimeout(this.timeoutId);
  }
}
Vr.contextType = _t;
function Sa(t) {
  let e = xe(t), r = Be(e, 1);
  return { start: e, end: r };
}
class Yc extends me {
  constructor() {
    super(...arguments), this.createDayHeaderFormatter = se(Jh);
  }
  render() {
    let { context: e } = this, { dates: r, dateProfile: n, datesRepDistinctDays: i, renderIntro: s } = this.props, o = this.createDayHeaderFormatter(e.options.dayHeaderFormat, i, r.length);
    return D(Vr, { unit: "day" }, (a, c) => D(
      "tr",
      { role: "row" },
      s && s("day"),
      r.map((l) => i ? D(Zh, { key: l.toISOString(), date: l, dateProfile: n, todayRange: c, colCnt: r.length, dayHeaderFormat: o }) : D(Kh, { key: l.getUTCDay(), dow: l.getUTCDay(), dayHeaderFormat: o }))
    ));
  }
}
function Jh(t, e, r) {
  return t || Yh(e, r);
}
class Gc {
  constructor(e, r) {
    let n = e.start, { end: i } = e, s = [], o = [], a = -1;
    for (; n < i; )
      r.isHiddenDay(n) ? s.push(a + 0.5) : (a += 1, s.push(a), o.push(n)), n = Be(n, 1);
    this.dates = o, this.indices = s, this.cnt = o.length;
  }
  sliceRange(e) {
    let r = this.getDateDayIndex(e.start), n = this.getDateDayIndex(Be(e.end, -1)), i = Math.max(0, r), s = Math.min(this.cnt - 1, n);
    return i = Math.ceil(i), s = Math.floor(s), i <= s ? {
      firstIndex: i,
      lastIndex: s,
      isStart: r === i,
      isEnd: n === s
    } : null;
  }
  // Given a date, returns its chronolocial cell-index from the first cell of the grid.
  // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
  // If before the first offset, returns a negative number.
  // If after the last offset, returns an offset past the last cell offset.
  // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
  getDateDayIndex(e) {
    let { indices: r } = this, n = Math.floor(Kt(this.dates[0], e));
    return n < 0 ? r[0] - 1 : n >= r.length ? r[r.length - 1] + 1 : r[n];
  }
}
class $c {
  constructor(e, r) {
    let { dates: n } = e, i, s, o;
    if (r) {
      for (s = n[0].getUTCDay(), i = 1; i < n.length && n[i].getUTCDay() !== s; i += 1)
        ;
      o = Math.ceil(n.length / i);
    } else
      o = 1, i = n.length;
    this.rowCnt = o, this.colCnt = i, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
  }
  buildCells() {
    let e = [];
    for (let r = 0; r < this.rowCnt; r += 1) {
      let n = [];
      for (let i = 0; i < this.colCnt; i += 1)
        n.push(this.buildCell(r, i));
      e.push(n);
    }
    return e;
  }
  buildCell(e, r) {
    let n = this.daySeries.dates[e * this.colCnt + r];
    return {
      key: n.toISOString(),
      date: n
    };
  }
  buildHeaderDates() {
    let e = [];
    for (let r = 0; r < this.colCnt; r += 1)
      e.push(this.cells[0][r].date);
    return e;
  }
  sliceRange(e) {
    let { colCnt: r } = this, n = this.daySeries.sliceRange(e), i = [];
    if (n) {
      let { firstIndex: s, lastIndex: o } = n, a = s;
      for (; a <= o; ) {
        let c = Math.floor(a / r), l = Math.min((c + 1) * r, o + 1);
        i.push({
          row: c,
          firstCol: a % r,
          lastCol: (l - 1) % r,
          isStart: n.isStart && a === s,
          isEnd: n.isEnd && l - 1 === o
        }), a = l;
      }
    }
    return i;
  }
}
class Qc {
  constructor() {
    this.sliceBusinessHours = se(this._sliceBusinessHours), this.sliceDateSelection = se(this._sliceDateSpan), this.sliceEventStore = se(this._sliceEventStore), this.sliceEventDrag = se(this._sliceInteraction), this.sliceEventResize = se(this._sliceInteraction), this.forceDayIfListItem = !1;
  }
  sliceProps(e, r, n, i, ...s) {
    let { eventUiBases: o } = e, a = this.sliceEventStore(e.eventStore, o, r, n, ...s);
    return {
      dateSelectionSegs: this.sliceDateSelection(e.dateSelection, r, n, o, i, ...s),
      businessHourSegs: this.sliceBusinessHours(e.businessHours, r, n, i, ...s),
      fgEventSegs: a.fg,
      bgEventSegs: a.bg,
      eventDrag: this.sliceEventDrag(e.eventDrag, o, r, n, ...s),
      eventResize: this.sliceEventResize(e.eventResize, o, r, n, ...s),
      eventSelection: e.eventSelection
    };
  }
  sliceNowDate(e, r, n, i, ...s) {
    return this._sliceDateSpan(
      { range: { start: e, end: Bt(e, 1) }, allDay: !1 },
      // add 1 ms, protect against null range
      r,
      n,
      {},
      i,
      ...s
    );
  }
  _sliceBusinessHours(e, r, n, i, ...s) {
    return e ? this._sliceEventStore(Qt(e, fn(r, !!n), i), {}, r, n, ...s).bg : [];
  }
  _sliceEventStore(e, r, n, i, ...s) {
    if (e) {
      let o = wa(e, r, fn(n, !!i), i);
      return {
        bg: this.sliceEventRanges(o.bg, s),
        fg: this.sliceEventRanges(o.fg, s)
      };
    }
    return { bg: [], fg: [] };
  }
  _sliceInteraction(e, r, n, i, ...s) {
    if (!e)
      return null;
    let o = wa(e.mutatedEvents, r, fn(n, !!i), i);
    return {
      segs: this.sliceEventRanges(o.fg, s),
      affectedInstances: e.affectedEvents.instances,
      isEvent: e.isEvent
    };
  }
  _sliceDateSpan(e, r, n, i, s, ...o) {
    if (!e)
      return [];
    let a = fn(r, !!n), c = Zt(e.range, a);
    if (c) {
      e = Object.assign(Object.assign({}, e), { range: c });
      let l = Oh(e, i, s), u = this.sliceRange(e.range, ...o);
      for (let d of u)
        d.eventRange = l;
      return u;
    }
    return [];
  }
  /*
  "complete" seg means it has component and eventRange
  */
  sliceEventRanges(e, r) {
    let n = [];
    for (let i of e)
      n.push(...this.sliceEventRange(i, r));
    return n;
  }
  /*
  "complete" seg means it has component and eventRange
  */
  sliceEventRange(e, r) {
    let n = e.range;
    this.forceDayIfListItem && e.ui.display === "list-item" && (n = {
      start: n.start,
      end: Be(n.start, 1)
    });
    let i = this.sliceRange(n, ...r);
    for (let s of i)
      s.eventRange = e, s.isStart = e.isStart && s.isStart, s.isEnd = e.isEnd && s.isEnd;
    return i;
  }
}
function fn(t, e) {
  let r = t.activeRange;
  return e ? r : {
    start: Bt(r.start, t.slotMinTime.milliseconds),
    end: Bt(r.end, t.slotMaxTime.milliseconds - 864e5)
    // 864e5 = ms in a day
  };
}
function ep(t, e, r, n, i) {
  switch (e.type) {
    case "RECEIVE_EVENTS":
      return tp(t, r[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, i);
    case "RESET_RAW_EVENTS":
      return rp(t, r[e.sourceId], e.rawEvents, n.activeRange, i);
    case "ADD_EVENTS":
      return np(
        t,
        e.eventStore,
        // new ones
        n ? n.activeRange : null,
        i
      );
    case "RESET_EVENTS":
      return e.eventStore;
    case "MERGE_EVENTS":
      return oo(t, e.eventStore);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return n ? Qt(t, n.activeRange, i) : t;
    case "REMOVE_EVENTS":
      return I0(t, e.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return Xc(t, e.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return Ti(t, (s) => !s.sourceId);
    case "REMOVE_ALL_EVENTS":
      return Ge();
    default:
      return t;
  }
}
function tp(t, e, r, n, i, s) {
  if (e && // not already removed
  r === e.latestFetchId) {
    let o = Fr(Zc(i, e, s), e, s);
    return n && (o = Qt(o, n, s)), oo(Xc(t, e.sourceId), o);
  }
  return t;
}
function rp(t, e, r, n, i) {
  const { defIdMap: s, instanceIdMap: o } = sp(t);
  let a = Fr(Zc(r, e, i), e, i, !1, s, o);
  return Qt(a, n, i);
}
function Zc(t, e, r) {
  let n = r.options.eventDataTransform, i = e ? e.eventDataTransform : null;
  return i && (t = Aa(t, i)), n && (t = Aa(t, n)), t;
}
function Aa(t, e) {
  let r;
  if (!e)
    r = t;
  else {
    r = [];
    for (let n of t) {
      let i = e(n);
      i ? r.push(i) : i == null && r.push(n);
    }
  }
  return r;
}
function np(t, e, r, n) {
  return r && (e = Qt(e, r, n)), oo(t, e);
}
function Ca(t, e, r) {
  let { defs: n } = t, i = Et(t.instances, (s) => n[s.defId].allDay ? s : Object.assign(Object.assign({}, s), { range: {
    start: r.createMarker(e.toDate(s.range.start, s.forcedStartTzo)),
    end: r.createMarker(e.toDate(s.range.end, s.forcedEndTzo))
  }, forcedStartTzo: r.canComputeOffset ? null : s.forcedStartTzo, forcedEndTzo: r.canComputeOffset ? null : s.forcedEndTzo }));
  return { defs: n, instances: i };
}
function Xc(t, e) {
  return Ti(t, (r) => r.sourceId !== e);
}
function ip(t, e) {
  return {
    defs: t.defs,
    instances: $t(t.instances, (r) => !e[r.instanceId])
  };
}
function sp(t) {
  const { defs: e, instances: r } = t, n = {}, i = {};
  for (let s in e) {
    const o = e[s], { publicId: a } = o;
    a && (n[a] = s);
  }
  for (let s in r) {
    const o = r[s], a = e[o.defId], { publicId: c } = a;
    c && (i[c] = s);
  }
  return { defIdMap: n, instanceIdMap: i };
}
function Kc(t, e, r) {
  let { instances: n } = t.mutatedEvents;
  for (let i in n)
    if (!ki(e.validRange, n[i].range))
      return !1;
  return Jc({ eventDrag: t }, r);
}
function op(t, e, r) {
  return ki(e.validRange, t.range) ? Jc({ dateSelection: t }, r) : !1;
}
function Jc(t, e) {
  let r = e.getCurrentData(), n = Object.assign({ businessHours: r.businessHours, dateSelection: "", eventStore: r.eventStore, eventUiBases: r.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, t);
  return (e.pluginHooks.isPropsValid || ap)(n, e);
}
function ap(t, e, r = {}, n) {
  return !(t.eventDrag && !lp(t, e, r, n) || t.dateSelection && !cp(t, e, r, n));
}
function lp(t, e, r, n) {
  let i = e.getCurrentData(), s = t.eventDrag, o = s.mutatedEvents, a = o.defs, c = o.instances, l = Hn(a, s.isEvent ? t.eventUiBases : { "": i.selectionConfig });
  n && (l = Et(l, n));
  let u = ip(t.eventStore, s.affectedEvents.instances), d = u.defs, f = u.instances, h = Hn(d, t.eventUiBases);
  for (let p in c) {
    let v = c[p], b = v.range, w = l[v.defId], x = a[v.defId];
    if (!eu(w.constraints, b, u, t.businessHours, e))
      return !1;
    let { eventOverlap: g } = e.options, m = typeof g == "function" ? g : null;
    for (let S in f) {
      let C = f[S];
      if (lo(b, C.range) && (h[C.defId].overlap === !1 && s.isEvent || w.overlap === !1 || m && !m(
        new we(e, d[C.defId], C),
        // still event
        new we(e, x, v)
      )))
        return !1;
    }
    let E = i.eventStore;
    for (let S of w.allows) {
      let C = Object.assign(Object.assign({}, r), { range: v.range, allDay: x.allDay }), T = E.defs[x.defId], B = E.instances[p], A;
      if (T ? A = new we(e, T, B) : A = new we(e, x), !S(ho(C, e), A))
        return !1;
    }
  }
  return !0;
}
function cp(t, e, r, n) {
  let i = t.eventStore, s = i.defs, o = i.instances, a = t.dateSelection, c = a.range, { selectionConfig: l } = e.getCurrentData();
  if (n && (l = n(l)), !eu(l.constraints, c, i, t.businessHours, e))
    return !1;
  let { selectOverlap: u } = e.options, d = typeof u == "function" ? u : null;
  for (let f in o) {
    let h = o[f];
    if (lo(c, h.range) && (l.overlap === !1 || d && !d(new we(e, s[h.defId], h), null)))
      return !1;
  }
  for (let f of l.allows) {
    let h = Object.assign(Object.assign({}, r), a);
    if (!f(ho(h, e), null))
      return !1;
  }
  return !0;
}
function eu(t, e, r, n, i) {
  for (let s of t)
    if (!fp(up(s, e, r, n, i), e))
      return !1;
  return !0;
}
function up(t, e, r, n, i) {
  return t === "businessHours" ? ps(Qt(n, e, i)) : typeof t == "string" ? ps(Ti(r, (s) => s.groupId === t)) : typeof t == "object" && t ? ps(Qt(t, e, i)) : [];
}
function ps(t) {
  let { instances: e } = t, r = [];
  for (let n in e)
    r.push(e[n].range);
  return r;
}
function fp(t, e) {
  for (let r of t)
    if (ki(r, e))
      return !0;
  return !1;
}
class Da extends Error {
  constructor(e, r) {
    super(e), this.response = r;
  }
}
function dp(t, e, r) {
  t = t.toUpperCase();
  const n = {
    method: t
  };
  return t === "GET" ? e += (e.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(r) : (n.body = new URLSearchParams(r), n.headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  }), fetch(e, n).then((i) => {
    if (i.ok)
      return i.json().then((s) => [s, i], () => {
        throw new Da("Failure parsing JSON", i);
      });
    throw new Da("Request failed", i);
  });
}
class yo {
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
    let { pauseDepths: r } = this;
    r[e] = (r[e] || 0) + 1, this.clearTimeout();
  }
  resume(e = "", r) {
    let { pauseDepths: n } = this;
    e in n && (r ? delete n[e] : (n[e] -= 1, n[e] <= 0 && delete n[e]), this.tryDrain());
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
const dn = /^(visible|hidden)$/;
class hp extends me {
  constructor() {
    super(...arguments), this.handleEl = (e) => {
      this.el = e, wt(this.props.elRef, e);
    };
  }
  render() {
    let { props: e } = this, { liquid: r, liquidIsAbsolute: n } = e, i = r && n, s = ["fc-scroller"];
    return r && (n ? s.push("fc-scroller-liquid-absolute") : s.push("fc-scroller-liquid")), D("div", { ref: this.handleEl, className: s.join(" "), style: {
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
    if (dn.test(this.props.overflowX))
      return !1;
    let { el: e } = this, r = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), { children: n } = e;
    for (let i = 0; i < n.length; i += 1)
      if (n[i].getBoundingClientRect().width > r)
        return !0;
    return !1;
  }
  needsYScrolling() {
    if (dn.test(this.props.overflowY))
      return !1;
    let { el: e } = this, r = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), { children: n } = e;
    for (let i = 0; i < n.length; i += 1)
      if (n[i].getBoundingClientRect().height > r)
        return !0;
    return !1;
  }
  getXScrollbarWidth() {
    return dn.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
  }
  getYScrollbarWidth() {
    return dn.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
  }
}
class bt {
  constructor(e) {
    this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = (r, n) => {
      let { depths: i, currentMap: s } = this, o = !1, a = !1;
      r !== null ? (o = n in s, s[n] = r, i[n] = (i[n] || 0) + 1, a = !0) : (i[n] -= 1, i[n] || (delete s[n], delete this.callbackMap[n], o = !0)), this.masterCallback && (o && this.masterCallback(null, String(n)), a && this.masterCallback(r, String(n)));
    };
  }
  createRef(e) {
    let r = this.callbackMap[e];
    return r || (r = this.callbackMap[e] = (n) => {
      this.handleValue(n, String(e));
    }), r;
  }
  // TODO: check callers that don't care about order. should use getAll instead
  // NOTE: this method has become less valuable now that we are encouraged to map order by some other index
  // TODO: provide ONE array-export function, buildArray, which fails on non-numeric indexes. caller can manipulate and "collect"
  collect(e, r, n) {
    return Xd(this.currentMap, e, r, n);
  }
  getAll() {
    return eo(this.currentMap);
  }
}
function pp(t) {
  let e = Cd(t, ".fc-scrollgrid-shrink"), r = 0;
  for (let n of e)
    r = Math.max(r, zd(n));
  return Math.ceil(r);
}
function tu(t, e) {
  return t.liquid && e.liquid;
}
function gp(t, e) {
  return e.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
  tu(t, e);
}
function vp(t, e, r, n) {
  let { expandRows: i } = r;
  return typeof e.content == "function" ? e.content(r) : D("table", {
    role: "presentation",
    className: [
      e.tableClassName,
      t.syncRowHeights ? "fc-scrollgrid-sync-table" : ""
    ].join(" "),
    style: {
      minWidth: r.tableMinWidth,
      width: r.clientWidth,
      height: i ? r.clientHeight : ""
      // css `height` on a <table> serves as a min-height
    }
  }, r.tableColGroupNode, D(n ? "thead" : "tbody", {
    role: "presentation"
  }, typeof e.rowContent == "function" ? e.rowContent(r) : e.rowContent));
}
function mp(t, e) {
  return Ot(t, e, lt);
}
function bp(t, e) {
  let r = [];
  for (let n of t) {
    let i = n.span || 1;
    for (let s = 0; s < i; s += 1)
      r.push(D("col", { style: {
        width: n.width === "shrink" ? yp(e) : n.width || "",
        minWidth: n.minWidth || ""
      } }));
  }
  return D("colgroup", {}, ...r);
}
function yp(t) {
  return t ?? 4;
}
function xp(t) {
  for (let e of t)
    if (e.width === "shrink")
      return !0;
  return !1;
}
function Ep(t, e) {
  let r = [
    "fc-scrollgrid",
    e.theme.getClass("table")
  ];
  return t && r.push("fc-scrollgrid-liquid"), r;
}
function wp(t, e) {
  let r = [
    "fc-scrollgrid-section",
    `fc-scrollgrid-section-${t.type}`,
    t.className
    // used?
  ];
  return e && t.liquid && t.maxHeight == null && r.push("fc-scrollgrid-section-liquid"), t.isSticky && r.push("fc-scrollgrid-section-sticky"), r;
}
function ks(t) {
  return D("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: t.clientWidth,
    minWidth: t.tableMinWidth
  } });
}
function Ln(t) {
  let { stickyHeaderDates: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
function ru(t) {
  let { stickyFooterScrollbar: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
class xo extends me {
  constructor() {
    super(...arguments), this.processCols = se((e) => e, mp), this.renderMicroColGroup = se(bp), this.scrollerRefs = new bt(), this.scrollerElRefs = new bt(this._handleScrollerEl.bind(this)), this.state = {
      shrinkWidth: null,
      forceYScrollbars: !1,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }, this.handleSizing = () => {
      this.safeSetState(Object.assign({ shrinkWidth: this.computeShrinkWidth() }, this.computeScrollerDims()));
    };
  }
  render() {
    let { props: e, state: r, context: n } = this, i = e.sections || [], s = this.processCols(e.cols), o = this.renderMicroColGroup(s, r.shrinkWidth), a = Ep(e.liquid, n);
    e.collapsibleWidth && a.push("fc-scrollgrid-collapsible");
    let c = i.length, l = 0, u, d = [], f = [], h = [];
    for (; l < c && (u = i[l]).type === "header"; )
      d.push(this.renderSection(u, o, !0)), l += 1;
    for (; l < c && (u = i[l]).type === "body"; )
      f.push(this.renderSection(u, o, !1)), l += 1;
    for (; l < c && (u = i[l]).type === "footer"; )
      h.push(this.renderSection(u, o, !0)), l += 1;
    let p = !Sc();
    const v = { role: "rowgroup" };
    return D("table", {
      role: "grid",
      className: a.join(" "),
      style: { height: e.height }
    }, !!(!p && d.length) && D("thead", v, ...d), !!(!p && f.length) && D("tbody", v, ...f), !!(!p && h.length) && D("tfoot", v, ...h), p && D("tbody", v, ...d, ...f, ...h));
  }
  renderSection(e, r, n) {
    return "outerContent" in e ? D(Ee, { key: e.key }, e.outerContent) : D("tr", { key: e.key, role: "presentation", className: wp(e, this.props.liquid).join(" ") }, this.renderChunkTd(e, r, e.chunk, n));
  }
  renderChunkTd(e, r, n, i) {
    if ("outerContent" in n)
      return n.outerContent;
    let { props: s } = this, { forceYScrollbars: o, scrollerClientWidths: a, scrollerClientHeights: c } = this.state, l = gp(s, e), u = tu(s, e), d = s.liquid ? o ? "scroll" : l ? "auto" : "hidden" : "visible", f = e.key, h = vp(e, n, {
      tableColGroupNode: r,
      tableMinWidth: "",
      clientWidth: !s.collapsibleWidth && a[f] !== void 0 ? a[f] : null,
      clientHeight: c[f] !== void 0 ? c[f] : null,
      expandRows: e.expandRows,
      syncRowHeights: !1,
      rowSyncHeights: [],
      reportRowHeightChange: () => {
      }
    }, i);
    return D(i ? "th" : "td", {
      ref: n.elRef,
      role: "presentation"
    }, D(
      "div",
      { className: `fc-scroller-harness${u ? " fc-scroller-harness-liquid" : ""}` },
      D(hp, { ref: this.scrollerRefs.createRef(f), elRef: this.scrollerElRefs.createRef(f), overflowY: d, overflowX: s.liquid ? "hidden" : "visible", maxHeight: e.maxHeight, liquid: u, liquidIsAbsolute: !0 }, h)
    ));
  }
  _handleScrollerEl(e, r) {
    let n = _p(this.props.sections, r);
    n && wt(n.chunk.scrollerElRef, e);
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
    return xp(this.props.cols) ? pp(this.scrollerElRefs.getAll()) : 0;
  }
  computeScrollerDims() {
    let e = rh(), { scrollerRefs: r, scrollerElRefs: n } = this, i = !1, s = {}, o = {};
    for (let a in r.currentMap) {
      let c = r.currentMap[a];
      if (c && c.needsYScrolling()) {
        i = !0;
        break;
      }
    }
    for (let a of this.props.sections) {
      let c = a.key, l = n.currentMap[c];
      if (l) {
        let u = l.parentNode;
        s[c] = Math.floor(u.getBoundingClientRect().width - (i ? e.y : 0)), o[c] = Math.floor(u.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars: i, scrollerClientWidths: s, scrollerClientHeights: o };
  }
}
xo.addStateEquality({
  scrollerClientWidths: lt,
  scrollerClientHeights: lt
});
function _p(t, e) {
  for (let r of t)
    if (r.key === e)
      return r;
  return null;
}
class Eo extends me {
  constructor() {
    super(...arguments), this.handleEl = (e) => {
      this.el = e, e && _a(e, this.props.seg);
    };
  }
  render() {
    const { props: e, context: r } = this, { options: n } = r, { seg: i } = e, { eventRange: s } = i, { ui: o } = s, a = {
      event: new we(r, s.def, s.instance),
      view: r.viewApi,
      timeText: e.timeText,
      textColor: o.textColor,
      backgroundColor: o.backgroundColor,
      borderColor: o.borderColor,
      isDraggable: !e.disableDragging && Sh(i, r),
      isStartResizable: !e.disableResizing && Ah(i, r),
      isEndResizable: !e.disableResizing && Ch(i),
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
    return D($e, Object.assign({}, e, { elRef: this.handleEl, elClasses: [
      ...Dh(a),
      ...i.eventRange.ui.classNames,
      ...e.elClasses || []
    ], renderProps: a, generatorName: "eventContent", customGenerator: n.eventContent, defaultGenerator: e.defaultGenerator, classNameGenerator: n.eventClassNames, didMount: n.eventDidMount, willUnmount: n.eventWillUnmount }));
  }
  componentDidUpdate(e) {
    this.el && this.props.seg !== e.seg && _a(this.el, this.props.seg);
  }
}
class nu extends me {
  render() {
    let { props: e, context: r } = this, { options: n } = r, { seg: i } = e, { ui: s } = i.eventRange, o = n.eventTimeFormat || e.defaultTimeFormat, a = Oc(i, o, r, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
    return D(Eo, Object.assign({}, e, { elTag: "a", elStyle: {
      borderColor: s.borderColor,
      backgroundColor: s.backgroundColor
    }, elAttrs: Pc(i, r), defaultGenerator: Sp, timeText: a }), (c, l) => D(
      Ee,
      null,
      D(c, { elTag: "div", elClasses: ["fc-event-main"], elStyle: { color: l.textColor } }),
      !!l.isStartResizable && D("div", { className: "fc-event-resizer fc-event-resizer-start" }),
      !!l.isEndResizable && D("div", { className: "fc-event-resizer fc-event-resizer-end" })
    ));
  }
}
function Sp(t) {
  return D(
    "div",
    { className: "fc-event-main-frame" },
    t.timeText && D("div", { className: "fc-event-time" }, t.timeText),
    D(
      "div",
      { className: "fc-event-title-container" },
      D("div", { className: "fc-event-title fc-sticky" }, t.event.title || D(Ee, null, " "))
    )
  );
}
const wo = (t) => D(_t.Consumer, null, (e) => {
  let { options: r } = e, n = {
    isAxis: t.isAxis,
    date: e.dateEnv.toDate(t.date),
    view: e.viewApi
  };
  return D($e, Object.assign({}, t, { elTag: t.elTag || "div", renderProps: n, generatorName: "nowIndicatorContent", customGenerator: r.nowIndicatorContent, classNameGenerator: r.nowIndicatorClassNames, didMount: r.nowIndicatorDidMount, willUnmount: r.nowIndicatorWillUnmount }));
}), Ap = _e({ day: "numeric" });
class _o extends me {
  constructor() {
    super(...arguments), this.refineRenderProps = En(Cp);
  }
  render() {
    let { props: e, context: r } = this, { options: n } = r, i = this.refineRenderProps({
      date: e.date,
      dateProfile: e.dateProfile,
      todayRange: e.todayRange,
      isMonthStart: e.isMonthStart || !1,
      showDayNumber: e.showDayNumber,
      extraRenderProps: e.extraRenderProps,
      viewApi: r.viewApi,
      dateEnv: r.dateEnv,
      monthStartFormat: n.monthStartFormat
    });
    return D($e, Object.assign({}, e, { elClasses: [
      ...co(i, r.theme),
      ...e.elClasses || []
    ], elAttrs: Object.assign(Object.assign({}, e.elAttrs), i.isDisabled ? {} : { "data-date": to(e.date) }), renderProps: i, generatorName: "dayCellContent", customGenerator: n.dayCellContent, defaultGenerator: e.defaultGenerator, classNameGenerator: (
      // don't use custom classNames if disabled
      i.isDisabled ? void 0 : n.dayCellClassNames
    ), didMount: n.dayCellDidMount, willUnmount: n.dayCellWillUnmount }));
  }
}
function So(t) {
  return !!(t.dayCellContent || jc("dayCellContent", t));
}
function Cp(t) {
  let { date: e, dateEnv: r, dateProfile: n, isMonthStart: i } = t, s = Ac(e, t.todayRange, null, n), o = t.showDayNumber ? r.format(e, i ? t.monthStartFormat : Ap) : "";
  return Object.assign(Object.assign(Object.assign({ date: r.toDate(e), view: t.viewApi }, s), {
    isMonthStart: i,
    dayNumberText: o
  }), t.extraRenderProps);
}
class iu extends me {
  render() {
    let { props: e } = this, { seg: r } = e;
    return D(Eo, { elTag: "div", elClasses: ["fc-bg-event"], elStyle: { backgroundColor: r.eventRange.ui.backgroundColor }, defaultGenerator: Dp, seg: r, timeText: "", isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: e.isPast, isFuture: e.isFuture, isToday: e.isToday, disableDragging: !0, disableResizing: !0 });
  }
}
function Dp(t) {
  let { title: e } = t.event;
  return e && D("div", { className: "fc-event-title" }, t.event.title);
}
function su(t) {
  return D("div", { className: `fc-${t}` });
}
const ou = (t) => D(_t.Consumer, null, (e) => {
  let { dateEnv: r, options: n } = e, { date: i } = t, s = n.weekNumberFormat || t.defaultFormat, o = r.computeWeekNumber(i), a = r.format(i, s);
  return D(
    $e,
    Object.assign({}, t, { renderProps: { num: o, text: a, date: i }, generatorName: "weekNumberContent", customGenerator: n.weekNumberContent, defaultGenerator: Rp, classNameGenerator: n.weekNumberClassNames, didMount: n.weekNumberDidMount, willUnmount: n.weekNumberWillUnmount })
  );
});
function Rp(t) {
  return t.text;
}
const gs = 10;
class Tp extends me {
  constructor() {
    super(...arguments), this.state = {
      titleId: Di()
    }, this.handleRootEl = (e) => {
      this.rootEl = e, this.props.elRef && wt(this.props.elRef, e);
    }, this.handleDocumentMouseDown = (e) => {
      const r = uc(e);
      this.rootEl.contains(r) || this.handleCloseClick();
    }, this.handleDocumentKeyDown = (e) => {
      e.key === "Escape" && this.handleCloseClick();
    }, this.handleCloseClick = () => {
      let { onClose: e } = this.props;
      e && e();
    };
  }
  render() {
    let { theme: e, options: r } = this.context, { props: n, state: i } = this, s = [
      "fc-popover",
      e.getClass("popover")
    ].concat(n.extraClassNames || []);
    return dd(D(
      "div",
      Object.assign({}, n.extraAttrs, { id: n.id, className: s.join(" "), "aria-labelledby": i.titleId, ref: this.handleRootEl }),
      D(
        "div",
        { className: "fc-popover-header " + e.getClass("popoverHeader") },
        D("span", { className: "fc-popover-title", id: i.titleId }, n.title),
        D("span", { className: "fc-popover-close " + e.getIconClass("close"), title: r.closeHint, onClick: this.handleCloseClick })
      ),
      D("div", { className: "fc-popover-body " + e.getClass("popoverContent") }, n.children)
    ), n.parentEl);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  updateSize() {
    let { isRtl: e } = this.context, { alignmentEl: r, alignGridTop: n } = this.props, { rootEl: i } = this, s = oh(r);
    if (s) {
      let o = i.getBoundingClientRect(), a = n ? Oe(r, ".fc-scrollgrid").getBoundingClientRect().top : s.top, c = e ? s.right - o.width : s.left;
      a = Math.max(a, gs), c = Math.min(c, document.documentElement.clientWidth - gs - o.width), c = Math.max(c, gs);
      let l = i.offsetParent.getBoundingClientRect();
      Or(i, {
        top: a - l.top,
        left: c - l.left
      });
    }
  }
}
class kp extends ft {
  constructor() {
    super(...arguments), this.handleRootEl = (e) => {
      this.rootEl = e, e ? this.context.registerInteractiveComponent(this, {
        el: e,
        useEventCenter: !1
      }) : this.context.unregisterInteractiveComponent(this);
    };
  }
  render() {
    let { options: e, dateEnv: r } = this.context, { props: n } = this, { startDate: i, todayRange: s, dateProfile: o } = n, a = r.format(i, e.dayPopoverFormat);
    return D(_o, { elRef: this.handleRootEl, date: i, dateProfile: o, todayRange: s }, (c, l, u) => D(
      Tp,
      { elRef: u.ref, id: n.id, title: a, extraClassNames: ["fc-more-popover"].concat(u.className || []), extraAttrs: u, parentEl: n.parentEl, alignmentEl: n.alignmentEl, alignGridTop: n.alignGridTop, onClose: n.onClose },
      So(e) && D(c, { elTag: "div", elClasses: ["fc-more-popover-misc"] }),
      n.children
    ));
  }
  queryHit(e, r, n, i) {
    let { rootEl: s, props: o } = this;
    return e >= 0 && e < n && r >= 0 && r < i ? {
      dateProfile: o.dateProfile,
      dateSpan: Object.assign({ allDay: !o.forceTimed, range: {
        start: o.startDate,
        end: o.endDate
      } }, o.extraDateSpan),
      dayEl: s,
      rect: {
        left: 0,
        top: 0,
        right: n,
        bottom: i
      },
      layer: 1
      // important when comparing with hits from other components
    } : null;
  }
}
class au extends me {
  constructor() {
    super(...arguments), this.state = {
      isPopoverOpen: !1,
      popoverId: Di()
    }, this.handleLinkEl = (e) => {
      this.linkEl = e, this.props.elRef && wt(this.props.elRef, e);
    }, this.handleClick = (e) => {
      let { props: r, context: n } = this, { moreLinkClick: i } = n.options, s = Ra(r).start;
      function o(a) {
        let { def: c, instance: l, range: u } = a.eventRange;
        return {
          event: new we(n, c, l),
          start: n.dateEnv.toDate(u.start),
          end: n.dateEnv.toDate(u.end),
          isStart: a.isStart,
          isEnd: a.isEnd
        };
      }
      typeof i == "function" && (i = i({
        date: s,
        allDay: !!r.allDayDate,
        allSegs: r.allSegs.map(o),
        hiddenSegs: r.hiddenSegs.map(o),
        jsEvent: e,
        view: n.viewApi
      })), !i || i === "popover" ? this.setState({ isPopoverOpen: !0 }) : typeof i == "string" && n.calendarApi.zoomTo(s, i);
    }, this.handlePopoverClose = () => {
      this.setState({ isPopoverOpen: !1 });
    };
  }
  render() {
    let { props: e, state: r } = this;
    return D(_t.Consumer, null, (n) => {
      let { viewApi: i, options: s, calendarApi: o } = n, { moreLinkText: a } = s, { moreCnt: c } = e, l = Ra(e), u = typeof a == "function" ? a.call(o, c) : `+${c} ${a}`, d = Br(s.moreLinkHint, [c], u), f = {
        num: c,
        shortText: `+${c}`,
        text: u,
        view: i
      };
      return D(
        Ee,
        null,
        !!e.moreCnt && D($e, { elTag: e.elTag || "a", elRef: this.handleLinkEl, elClasses: [
          ...e.elClasses || [],
          "fc-more-link"
        ], elStyle: e.elStyle, elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), dc(this.handleClick)), { title: d, "aria-expanded": r.isPopoverOpen, "aria-controls": r.isPopoverOpen ? r.popoverId : "" }), renderProps: f, generatorName: "moreLinkContent", customGenerator: s.moreLinkContent, defaultGenerator: e.defaultGenerator || Ip, classNameGenerator: s.moreLinkClassNames, didMount: s.moreLinkDidMount, willUnmount: s.moreLinkWillUnmount }, e.children),
        r.isPopoverOpen && D(kp, { id: r.popoverId, startDate: l.start, endDate: l.end, dateProfile: e.dateProfile, todayRange: e.todayRange, extraDateSpan: e.extraDateSpan, parentEl: this.parentEl, alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : this.linkEl, alignGridTop: e.alignGridTop, forceTimed: e.forceTimed, onClose: this.handlePopoverClose }, e.popoverContent())
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
    this.linkEl && (this.parentEl = Oe(this.linkEl, ".fc-view-harness"));
  }
}
function Ip(t) {
  return t.text;
}
function Ra(t) {
  if (t.allDayDate)
    return {
      start: t.allDayDate,
      end: Be(t.allDayDate, 1)
    };
  let { hiddenSegs: e } = t;
  return {
    start: lu(e),
    end: Np(e)
  };
}
function lu(t) {
  return t.reduce(Mp).eventRange.range.start;
}
function Mp(t, e) {
  return t.eventRange.range.start < e.eventRange.range.start ? t : e;
}
function Np(t) {
  return t.reduce(Op).eventRange.range.end;
}
function Op(t, e) {
  return t.eventRange.range.end > e.eventRange.range.end ? t : e;
}
class Fn extends me {
  render() {
    let { props: e, context: r } = this, { options: n } = r, i = { view: r.viewApi };
    return D($e, Object.assign({}, e, { elTag: e.elTag || "div", elClasses: [
      ...cu(e.viewSpec),
      ...e.elClasses || []
    ], renderProps: i, classNameGenerator: n.viewClassNames, generatorName: void 0, didMount: n.viewDidMount, willUnmount: n.viewWillUnmount }), () => e.children);
  }
}
function cu(t) {
  return [
    `fc-${t.type}-view`,
    "fc-view"
  ];
}
const Bp = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: L,
  eventDataTransform: L,
  // for any network-related sources
  success: L,
  failure: L
};
function uu(t, e, r = fu(e)) {
  let n;
  if (typeof t == "string" ? n = { url: t } : typeof t == "function" || Array.isArray(t) ? n = { events: t } : typeof t == "object" && t && (n = t), n) {
    let { refined: i, extra: s } = no(n, r), o = Pp(i, e);
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
        sourceId: Xt(),
        sourceDefId: o.sourceDefId,
        meta: o.meta,
        ui: Bn(i, e),
        extendedProps: s
      };
  }
  return null;
}
function fu(t) {
  return Object.assign(Object.assign(Object.assign({}, On), Bp), t.pluginHooks.eventSourceRefiners);
}
function Pp(t, e) {
  let r = e.pluginHooks.eventSourceDefs;
  for (let n = r.length - 1; n >= 0; n -= 1) {
    let s = r[n].parseMeta(t);
    if (s)
      return { sourceDefId: n, meta: s };
  }
  return null;
}
class Hp {
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
  setOption(e, r) {
    this.dispatch({
      type: "SET_OPTION",
      optionName: e,
      rawOptionValue: r
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
  on(e, r) {
    let { currentDataManager: n } = this;
    n.currentCalendarOptionsRefiners[e] ? n.emitter.on(e, r) : console.warn(`Unknown listener name '${e}'`);
  }
  off(e, r) {
    this.currentDataManager.emitter.off(e, r);
  }
  // not meant for public use
  trigger(e, ...r) {
    this.currentDataManager.emitter.trigger(e, ...r);
  }
  // View
  // -----------------------------------------------------------------------------------------------------------------
  changeView(e, r) {
    this.batchRendering(() => {
      if (this.unselect(), r)
        if (r.start && r.end)
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e
          }), this.dispatch({
            type: "SET_OPTION",
            optionName: "visibleRange",
            rawOptionValue: r
          });
        else {
          let { dateEnv: n } = this.getCurrentData();
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e,
            dateMarker: n.createMarker(r)
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
  zoomTo(e, r) {
    let n = this.getCurrentData(), i;
    r = r || "day", i = n.viewSpecs[r] || this.getUnitViewSpec(r), this.unselect(), i ? this.dispatch({
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
    let { viewSpecs: r, toolbarConfig: n } = this.getCurrentData(), i = [].concat(n.header ? n.header.viewsWithButtons : [], n.footer ? n.footer.viewsWithButtons : []), s, o;
    for (let a in r)
      i.push(a);
    for (s = 0; s < i.length; s += 1)
      if (o = r[i[s]], o && o.singleUnit === e)
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
      dateMarker: jr(e.calendarOptions.now, e.dateEnv)
    });
  }
  gotoDate(e) {
    let r = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: r.dateEnv.createMarker(e)
    });
  }
  incrementDate(e) {
    let r = this.getCurrentData(), n = pe(e);
    n && (this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: r.dateEnv.add(r.currentDate, n)
    }));
  }
  getDate() {
    let e = this.getCurrentData();
    return e.dateEnv.toDate(e.currentDate);
  }
  // Date Formatting Utils
  // -----------------------------------------------------------------------------------------------------------------
  formatDate(e, r) {
    let { dateEnv: n } = this.getCurrentData();
    return n.format(n.createMarker(e), _e(r));
  }
  // `settings` is for formatter AND isEndExclusive
  formatRange(e, r, n) {
    let { dateEnv: i } = this.getCurrentData();
    return i.formatRange(i.createMarker(e), i.createMarker(r), _e(n), n);
  }
  formatIso(e, r) {
    let { dateEnv: n } = this.getCurrentData();
    return n.formatIso(n.createMarker(e), { omitTime: r });
  }
  // Date Selection / Event Selection / DayClick
  // -----------------------------------------------------------------------------------------------------------------
  select(e, r) {
    let n;
    r == null ? e.start != null ? n = e : n = {
      start: e,
      end: null
    } : n = {
      start: e,
      end: r
    };
    let i = this.getCurrentData(), s = Th(n, i.dateEnv, pe({ days: 1 }));
    s && (this.dispatch({ type: "SELECT_DATES", selection: s }), kc(s, null, i));
  }
  unselect(e) {
    let r = this.getCurrentData();
    r.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), yh(e, r));
  }
  // Public Events API
  // -----------------------------------------------------------------------------------------------------------------
  addEvent(e, r) {
    if (e instanceof we) {
      let o = e._def, a = e._instance;
      return this.getCurrentData().eventStore.defs[o.defId] || (this.dispatch({
        type: "ADD_EVENTS",
        eventStore: As({ def: o, instance: a })
        // TODO: better util for two args?
      }), this.triggerEventAdd(e)), e;
    }
    let n = this.getCurrentData(), i;
    if (r instanceof sr)
      i = r.internalEventSource;
    else if (typeof r == "boolean")
      r && ([i] = eo(n.eventSources));
    else if (r != null) {
      let o = this.getEventSourceById(r);
      if (!o)
        return console.warn(`Could not find an event source with ID "${r}"`), null;
      i = o.internalEventSource;
    }
    let s = yc(e, i, n, !1);
    if (s) {
      let o = new we(n, s.def, s.def.recurringDef ? null : s.instance);
      return this.dispatch({
        type: "ADD_EVENTS",
        eventStore: As(s)
      }), this.triggerEventAdd(o), o;
    }
    return null;
  }
  triggerEventAdd(e) {
    let { emitter: r } = this.getCurrentData();
    r.trigger("eventAdd", {
      event: e,
      relatedEvents: [],
      revert: () => {
        this.dispatch({
          type: "REMOVE_EVENTS",
          eventStore: Ic(e)
        });
      }
    });
  }
  // TODO: optimize
  getEventById(e) {
    let r = this.getCurrentData(), { defs: n, instances: i } = r.eventStore;
    e = String(e);
    for (let s in n) {
      let o = n[s];
      if (o.publicId === e) {
        if (o.recurringDef)
          return new we(r, o, null);
        for (let a in i) {
          let c = i[a];
          if (c.defId === o.defId)
            return new we(r, o, c);
        }
      }
    }
    return null;
  }
  getEvents() {
    let e = this.getCurrentData();
    return Yt(e.eventStore, e);
  }
  removeAllEvents() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }
  // Public Event Sources API
  // -----------------------------------------------------------------------------------------------------------------
  getEventSources() {
    let e = this.getCurrentData(), r = e.eventSources, n = [];
    for (let i in r)
      n.push(new sr(e, r[i]));
    return n;
  }
  getEventSourceById(e) {
    let r = this.getCurrentData(), n = r.eventSources;
    e = String(e);
    for (let i in n)
      if (n[i].publicId === e)
        return new sr(r, n[i]);
    return null;
  }
  addEventSource(e) {
    let r = this.getCurrentData();
    if (e instanceof sr)
      return r.eventSources[e.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [e.internalEventSource]
      }), e;
    let n = uu(e, r);
    return n ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [n] }), new sr(r, n)) : null;
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
    let r = pe(e);
    r && this.trigger("_scrollRequest", { time: r });
  }
}
class Lp {
  constructor() {
    this.handlers = [];
  }
  set(e) {
    this.currentValue = e;
    for (let r of this.handlers)
      r(e);
  }
  subscribe(e) {
    this.handlers.push(e), this.currentValue !== void 0 && e(this.currentValue);
  }
}
class Fp extends Lp {
  constructor() {
    super(...arguments), this.map = /* @__PURE__ */ new Map();
  }
  // for consistent order
  handle(e) {
    const { map: r } = this;
    let n = !1;
    e.isActive ? (r.set(e.id, e), n = !0) : r.has(e.id) && (r.delete(e.id), n = !0), n && this.set(r);
  }
}
const zp = [], du = {
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
}, hu = Object.assign(Object.assign({}, du), {
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
function Up(t) {
  let e = t.length > 0 ? t[0].code : "en", r = zp.concat(t), n = {
    en: hu
  };
  for (let i of r)
    n[i.code] = i;
  return {
    map: n,
    defaultCode: e
  };
}
function pu(t, e) {
  return typeof t == "object" && !Array.isArray(t) ? gu(t.code, [t.code], t) : Wp(t, e);
}
function Wp(t, e) {
  let r = [].concat(t || []), n = jp(r, e) || hu;
  return gu(t, r, n);
}
function jp(t, e) {
  for (let r = 0; r < t.length; r += 1) {
    let n = t[r].toLocaleLowerCase().split("-");
    for (let i = n.length; i > 0; i -= 1) {
      let s = n.slice(0, i).join("-");
      if (e[s])
        return e[s];
    }
  }
  return null;
}
function gu(t, e, r) {
  let n = Js([du, r], ["buttonText"]);
  delete n.code;
  let { week: i } = n;
  return delete n.week, {
    codeArg: t,
    codes: e,
    week: i,
    simpleNumberFormat: new Intl.NumberFormat(t),
    options: n
  };
}
function St(t) {
  return {
    id: Xt(),
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
function Vp(t, e) {
  let r = {}, n = {
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
      const a = o.name, c = r[a];
      c === void 0 ? (r[a] = o.id, i(o.deps), n = Yp(n, o)) : c !== o.id && console.warn(`Duplicate plugin '${a}'`);
    }
  }
  return t && i(t), i(e), n;
}
function qp() {
  let t = [], e = [], r;
  return (n, i) => ((!r || !Ot(n, t) || !Ot(i, e)) && (r = Vp(n, i)), t = n, e = i, r);
}
function Yp(t, e) {
  return {
    premiumReleaseDate: Gp(t.premiumReleaseDate, e.premiumReleaseDate),
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
function Gp(t, e) {
  return t === void 0 ? e : e === void 0 ? t : new Date(Math.max(t.valueOf(), e.valueOf()));
}
class Ht extends Wr {
}
Ht.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
Ht.prototype.baseIconClass = "fc-icon";
Ht.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
Ht.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
Ht.prototype.iconOverrideOption = "buttonIcons";
Ht.prototype.iconOverrideCustomButtonOption = "icon";
Ht.prototype.iconOverridePrefix = "fc-icon-";
function $p(t, e) {
  let r = {}, n;
  for (n in t)
    Is(n, r, t, e);
  for (n in e)
    Is(n, r, t, e);
  return r;
}
function Is(t, e, r, n) {
  if (e[t])
    return e[t];
  let i = Qp(t, e, r, n);
  return i && (e[t] = i), i;
}
function Qp(t, e, r, n) {
  let i = r[t], s = n[t], o = (u) => i && i[u] !== null ? i[u] : s && s[u] !== null ? s[u] : null, a = o("component"), c = o("superType"), l = null;
  if (c) {
    if (c === t)
      throw new Error("Can't have a custom view type that references itself");
    l = Is(c, e, r, n);
  }
  return !a && l && (a = l.component), a ? {
    type: t,
    component: a,
    defaults: Object.assign(Object.assign({}, l ? l.defaults : {}), i ? i.rawOptions : {}),
    overrides: Object.assign(Object.assign({}, l ? l.overrides : {}), s ? s.rawOptions : {})
  } : null;
}
function Ta(t) {
  return Et(t, Zp);
}
function Zp(t) {
  let e = typeof t == "function" ? { component: t } : t, { component: r } = e;
  return e.content ? r = ka(e) : r && !(r.prototype instanceof me) && (r = ka(Object.assign(Object.assign({}, e), { content: r }))), {
    superType: e.type,
    component: r,
    rawOptions: e
    // includes type and component too :(
  };
}
function ka(t) {
  return (e) => D(_t.Consumer, null, (r) => D($e, { elTag: "div", elClasses: cu(r.viewSpec), renderProps: Object.assign(Object.assign({}, e), { nextDayThreshold: r.options.nextDayThreshold }), generatorName: void 0, customGenerator: t.content, classNameGenerator: t.classNames, didMount: t.didMount, willUnmount: t.willUnmount }));
}
function Xp(t, e, r, n) {
  let i = Ta(t), s = Ta(e.views), o = $p(i, s);
  return Et(o, (a) => Kp(a, s, e, r, n));
}
function Kp(t, e, r, n, i) {
  let s = t.overrides.duration || t.defaults.duration || n.duration || r.duration, o = null, a = "", c = "", l = {};
  if (s && (o = Jp(s), o)) {
    let f = _s(o);
    a = f.unit, f.value === 1 && (c = a, l = e[a] ? e[a].rawOptions : {});
  }
  let u = (f) => {
    let h = f.buttonText || {}, p = t.defaults.buttonTextKey;
    return p != null && h[p] != null ? h[p] : h[t.type] != null ? h[t.type] : h[c] != null ? h[c] : null;
  }, d = (f) => {
    let h = f.buttonHints || {}, p = t.defaults.buttonTextKey;
    return p != null && h[p] != null ? h[p] : h[t.type] != null ? h[t.type] : h[c] != null ? h[c] : null;
  };
  return {
    type: t.type,
    component: t.component,
    duration: o,
    durationUnit: a,
    singleUnit: c,
    optionDefaults: t.defaults,
    optionOverrides: Object.assign(Object.assign({}, l), t.overrides),
    buttonTextOverride: u(n) || u(r) || // constructor-specified buttonText lookup hash takes precedence
    t.overrides.buttonText,
    buttonTextDefault: u(i) || t.defaults.buttonText || u(Pr) || t.type,
    // not DRY
    buttonTitleOverride: d(n) || d(r) || t.overrides.buttonHint,
    buttonTitleDefault: d(i) || t.defaults.buttonHint || d(Pr)
    // will eventually fall back to buttonText
  };
}
let Ia = {};
function Jp(t) {
  let e = JSON.stringify(t), r = Ia[e];
  return r === void 0 && (r = pe(t), Ia[e] = r), r;
}
function eg(t, e) {
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      t = e.viewType;
  }
  return t;
}
function tg(t, e) {
  switch (e.type) {
    case "SET_OPTION":
      return Object.assign(Object.assign({}, t), { [e.optionName]: e.rawOptionValue });
    default:
      return t;
  }
}
function rg(t, e, r, n) {
  let i;
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      return n.build(e.dateMarker || r);
    case "CHANGE_DATE":
      return n.build(e.dateMarker);
    case "PREV":
      if (i = n.buildPrev(t, r), i.isValid)
        return i;
      break;
    case "NEXT":
      if (i = n.buildNext(t, r), i.isValid)
        return i;
      break;
  }
  return t;
}
function ng(t, e, r) {
  let n = e ? e.activeRange : null;
  return mu({}, ug(t, r), n, r);
}
function ig(t, e, r, n) {
  let i = r ? r.activeRange : null;
  switch (e.type) {
    case "ADD_EVENT_SOURCES":
      return mu(t, e.sources, i, n);
    case "REMOVE_EVENT_SOURCE":
      return og(t, e.sourceId);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return r ? bu(t, i, n) : t;
    case "FETCH_EVENT_SOURCES":
      return Ao(t, e.sourceIds ? (
        // why no type?
        pc(e.sourceIds)
      ) : yu(t, n), i, e.isRefetch || !1, n);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return cg(t, e.sourceId, e.fetchId, e.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return t;
  }
}
function sg(t, e, r) {
  let n = e ? e.activeRange : null;
  return Ao(t, yu(t, r), n, !0, r);
}
function vu(t) {
  for (let e in t)
    if (t[e].isFetching)
      return !0;
  return !1;
}
function mu(t, e, r, n) {
  let i = {};
  for (let s of e)
    i[s.sourceId] = s;
  return r && (i = bu(i, r, n)), Object.assign(Object.assign({}, t), i);
}
function og(t, e) {
  return $t(t, (r) => r.sourceId !== e);
}
function bu(t, e, r) {
  return Ao(t, $t(t, (n) => ag(n, e, r)), e, !1, r);
}
function ag(t, e, r) {
  return xu(t, r) ? !r.options.lazyFetching || !t.fetchRange || t.isFetching || // always cancel outdated in-progress fetches
  e.start < t.fetchRange.start || e.end > t.fetchRange.end : !t.latestFetchId;
}
function Ao(t, e, r, n, i) {
  let s = {};
  for (let o in t) {
    let a = t[o];
    e[o] ? s[o] = lg(a, r, n, i) : s[o] = a;
  }
  return s;
}
function lg(t, e, r, n) {
  let { options: i, calendarApi: s } = n, o = n.pluginHooks.eventSourceDefs[t.sourceDefId], a = Xt();
  return o.fetch({
    eventSource: t,
    range: e,
    isRefetch: r,
    context: n
  }, (c) => {
    let { rawEvents: l } = c;
    i.eventSourceSuccess && (l = i.eventSourceSuccess.call(s, l, c.response) || l), t.success && (l = t.success.call(s, l, c.response) || l), n.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: t.sourceId,
      fetchId: a,
      fetchRange: e,
      rawEvents: l
    });
  }, (c) => {
    let l = !1;
    i.eventSourceFailure && (i.eventSourceFailure.call(s, c), l = !0), t.failure && (t.failure(c), l = !0), l || console.warn(c.message, c), n.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: t.sourceId,
      fetchId: a,
      fetchRange: e,
      error: c
    });
  }), Object.assign(Object.assign({}, t), { isFetching: !0, latestFetchId: a });
}
function cg(t, e, r, n) {
  let i = t[e];
  return i && // not already removed
  r === i.latestFetchId ? Object.assign(Object.assign({}, t), { [e]: Object.assign(Object.assign({}, i), { isFetching: !1, fetchRange: n }) }) : t;
}
function yu(t, e) {
  return $t(t, (r) => xu(r, e));
}
function ug(t, e) {
  let r = fu(e), n = [].concat(t.eventSources || []), i = [];
  t.initialEvents && n.unshift(t.initialEvents), t.events && n.unshift(t.events);
  for (let s of n) {
    let o = uu(s, e, r);
    o && i.push(o);
  }
  return i;
}
function xu(t, e) {
  return !e.pluginHooks.eventSourceDefs[t.sourceDefId].ignoreRange;
}
function fg(t, e) {
  switch (e.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return e.selection;
    default:
      return t;
  }
}
function dg(t, e) {
  switch (e.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return e.eventInstanceId;
    default:
      return t;
  }
}
function hg(t, e) {
  let r;
  switch (e.type) {
    case "UNSET_EVENT_DRAG":
      return null;
    case "SET_EVENT_DRAG":
      return r = e.state, {
        affectedEvents: r.affectedEvents,
        mutatedEvents: r.mutatedEvents,
        isEvent: r.isEvent
      };
    default:
      return t;
  }
}
function pg(t, e) {
  let r;
  switch (e.type) {
    case "UNSET_EVENT_RESIZE":
      return null;
    case "SET_EVENT_RESIZE":
      return r = e.state, {
        affectedEvents: r.affectedEvents,
        mutatedEvents: r.mutatedEvents,
        isEvent: r.isEvent
      };
    default:
      return t;
  }
}
function gg(t, e, r, n, i) {
  let s = t.headerToolbar ? Ma(t.headerToolbar, t, e, r, n, i) : null, o = t.footerToolbar ? Ma(t.footerToolbar, t, e, r, n, i) : null;
  return { header: s, footer: o };
}
function Ma(t, e, r, n, i, s) {
  let o = {}, a = [], c = !1;
  for (let l in t) {
    let u = t[l], d = vg(u, e, r, n, i, s);
    o[l] = d.widgets, a.push(...d.viewsWithButtons), c = c || d.hasTitle;
  }
  return { sectionWidgets: o, viewsWithButtons: a, hasTitle: c };
}
function vg(t, e, r, n, i, s) {
  let o = e.direction === "rtl", a = e.customButtons || {}, c = r.buttonText || {}, l = e.buttonText || {}, u = r.buttonHints || {}, d = e.buttonHints || {}, f = t ? t.split(" ") : [], h = [], p = !1;
  return { widgets: f.map((b) => b.split(",").map((w) => {
    if (w === "title")
      return p = !0, { buttonName: w };
    let x, g, m, E, S, C;
    if (x = a[w])
      m = (T) => {
        x.click && x.click.call(T.target, T, T.target);
      }, (E = n.getCustomButtonIconClass(x)) || (E = n.getIconClass(w, o)) || (S = x.text), C = x.hint || x.text;
    else if (g = i[w]) {
      h.push(w), m = () => {
        s.changeView(w);
      }, (S = g.buttonTextOverride) || (E = n.getIconClass(w, o)) || (S = g.buttonTextDefault);
      let T = g.buttonTextOverride || g.buttonTextDefault;
      C = Br(
        g.buttonTitleOverride || g.buttonTitleDefault || e.viewHint,
        [T, w],
        // view-name = buttonName
        T
      );
    } else if (s[w])
      if (m = () => {
        s[w]();
      }, (S = c[w]) || (E = n.getIconClass(w, o)) || (S = l[w]), w === "prevYear" || w === "nextYear") {
        let T = w === "prevYear" ? "prev" : "next";
        C = Br(u[T] || d[T], [
          l.year || "year",
          "year"
        ], l[w]);
      } else
        C = (T) => Br(u[w] || d[w], [
          l[T] || T,
          T
        ], l[w]);
    return { buttonName: w, buttonClick: m, buttonIcon: E, buttonText: S, buttonHint: C };
  })), viewsWithButtons: h, hasTitle: p };
}
class mg {
  constructor(e, r, n) {
    this.type = e, this.getCurrentData = r, this.dateEnv = n;
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
let bg = {
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
const yg = St({
  name: "array-event-source",
  eventSourceDefs: [bg]
});
let xg = {
  parseMeta(t) {
    return typeof t.events == "function" ? t.events : null;
  },
  fetch(t, e, r) {
    const { dateEnv: n } = t.context, i = t.eventSource.meta;
    ah(i.bind(null, Hc(t.range, n)), (s) => e({ rawEvents: s }), r);
  }
};
const Eg = St({
  name: "func-event-source",
  eventSourceDefs: [xg]
}), wg = {
  method: String,
  extraParams: L,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
let _g = {
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
  fetch(t, e, r) {
    const { meta: n } = t.eventSource, i = Ag(n, t.range, t.context);
    dp(n.method, n.url, i).then(([s, o]) => {
      e({ rawEvents: s, response: o });
    }, r);
  }
};
const Sg = St({
  name: "json-event-source",
  eventSourceRefiners: wg,
  eventSourceDefs: [_g]
});
function Ag(t, e, r) {
  let { dateEnv: n, options: i } = r, s, o, a, c, l = {};
  return s = t.startParam, s == null && (s = i.startParam), o = t.endParam, o == null && (o = i.endParam), a = t.timeZoneParam, a == null && (a = i.timeZoneParam), typeof t.extraParams == "function" ? c = t.extraParams() : c = t.extraParams || {}, Object.assign(l, c), l[s] = n.formatIso(e.start), l[o] = n.formatIso(e.end), n.timeZone !== "local" && (l[a] = n.timeZone), l;
}
const Cg = {
  daysOfWeek: L,
  startTime: pe,
  endTime: pe,
  duration: pe,
  startRecur: L,
  endRecur: L
};
let Dg = {
  parse(t, e) {
    if (t.daysOfWeek || t.startTime || t.endTime || t.startRecur || t.endRecur) {
      let r = {
        daysOfWeek: t.daysOfWeek || null,
        startTime: t.startTime || null,
        endTime: t.endTime || null,
        startRecur: t.startRecur ? e.createMarker(t.startRecur) : null,
        endRecur: t.endRecur ? e.createMarker(t.endRecur) : null
      }, n;
      return t.duration && (n = t.duration), !n && t.startTime && t.endTime && (n = Vd(t.endTime, t.startTime)), {
        allDayGuess: !t.startTime && !t.endTime,
        duration: n,
        typeData: r
        // doesn't need endTime anymore but oh well
      };
    }
    return null;
  },
  expand(t, e, r) {
    let n = Zt(e, { start: t.startRecur, end: t.endRecur });
    return n ? Tg(t.daysOfWeek, t.startTime, n, r) : [];
  }
};
const Rg = St({
  name: "simple-recurring-event",
  recurringTypes: [Dg],
  eventRefiners: Cg
});
function Tg(t, e, r, n) {
  let i = t ? pc(t) : null, s = xe(r.start), o = r.end, a = [];
  for (; s < o; ) {
    let c;
    (!i || i[s.getUTCDay()]) && (e ? c = n.add(s, e) : c = s, a.push(c)), s = Be(s, 1);
  }
  return a;
}
const kg = St({
  name: "change-handler",
  optionChangeHandlers: {
    events(t, e) {
      Na([t], e);
    },
    eventSources: Na
  }
});
function Na(t, e) {
  let r = eo(e.getCurrentData().eventSources);
  if (r.length === 1 && t.length === 1 && Array.isArray(r[0]._raw) && Array.isArray(t[0])) {
    e.dispatch({
      type: "RESET_RAW_EVENTS",
      sourceId: r[0].sourceId,
      rawEvents: t[0]
    });
    return;
  }
  let n = [];
  for (let i of t) {
    let s = !1;
    for (let o = 0; o < r.length; o += 1)
      if (r[o]._raw === i) {
        r.splice(o, 1), s = !0;
        break;
      }
    s || n.push(i);
  }
  for (let i of r)
    e.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: i.sourceId
    });
  for (let i of n)
    e.calendarApi.addEventSource(i);
}
function Ig(t, e) {
  e.emitter.trigger("datesSet", Object.assign(Object.assign({}, Hc(t.activeRange, e.dateEnv)), { view: e.viewApi }));
}
function Mg(t, e) {
  let { emitter: r } = e;
  r.hasHandlers("eventsSet") && r.trigger("eventsSet", Yt(t, e));
}
const Ng = [
  yg,
  Eg,
  Sg,
  Rg,
  kg,
  St({
    name: "misc",
    isLoadingFuncs: [
      (t) => vu(t.eventSources)
    ],
    propSetHandlers: {
      dateProfile: Ig,
      eventStore: Mg
    }
  })
];
class Og {
  constructor(e, r) {
    this.runTaskOption = e, this.drainedOption = r, this.queue = [], this.delayedRunner = new yo(this.drain.bind(this));
  }
  request(e, r) {
    this.queue.push(e), this.delayedRunner.request(r);
  }
  pause(e) {
    this.delayedRunner.pause(e);
  }
  resume(e, r) {
    this.delayedRunner.resume(e, r);
  }
  drain() {
    let { queue: e } = this;
    for (; e.length; ) {
      let r = [], n;
      for (; n = e.shift(); )
        this.runTask(n), r.push(n);
      this.drained(r);
    }
  }
  runTask(e) {
    this.runTaskOption && this.runTaskOption(e);
  }
  drained(e) {
    this.drainedOption && this.drainedOption(e);
  }
}
function Bg(t, e, r) {
  let n;
  return /^(year|month)$/.test(t.currentRangeUnit) ? n = t.currentRange : n = t.activeRange, r.formatRange(n.start, n.end, _e(e.titleFormat || Pg(t)), {
    isEndExclusive: t.isRangeAllDay,
    defaultSeparator: e.titleRangeSeparator
  });
}
function Pg(t) {
  let { currentRangeUnit: e } = t;
  if (e === "year")
    return { year: "numeric" };
  if (e === "month")
    return { year: "numeric", month: "long" };
  let r = In(t.currentRange.start, t.currentRange.end);
  return r !== null && r > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
class Hg {
  constructor(e) {
    this.computeCurrentViewData = se(this._computeCurrentViewData), this.organizeRawLocales = se(Up), this.buildLocale = se(pu), this.buildPluginHooks = qp(), this.buildDateEnv = se(Lg), this.buildTheme = se(Fg), this.parseToolbars = se(gg), this.buildViewSpecs = se(Xp), this.buildDateProfileGenerator = En(zg), this.buildViewApi = se(Ug), this.buildViewUiProps = En(Vg), this.buildEventUiBySource = se(Wg, lt), this.buildEventUiBases = se(jg), this.parseContextBusinessHours = En(qg), this.buildTitle = se(Bg), this.emitter = new Ii(), this.actionRunner = new Og(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.optionsForRefining = [], this.optionsForHandling = [], this.getCurrentData = () => this.data, this.dispatch = (f) => {
      this.actionRunner.request(f);
    }, this.props = e, this.actionRunner.pause();
    let r = {}, n = this.computeOptionsData(e.optionOverrides, r, e.calendarApi), i = n.calendarOptions.initialView || n.pluginHooks.initialView, s = this.computeCurrentViewData(i, n, e.optionOverrides, r);
    e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(s.options);
    let o = bh(n.calendarOptions, n.dateEnv), a = s.dateProfileGenerator.build(o);
    xt(a.activeRange, o) || (o = a.currentRange.start);
    let c = {
      dateEnv: n.dateEnv,
      options: n.calendarOptions,
      pluginHooks: n.pluginHooks,
      calendarApi: e.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    };
    for (let f of n.pluginHooks.contextInit)
      f(c);
    let l = ng(n.calendarOptions, a, c), u = {
      dynamicOptionOverrides: r,
      currentViewType: i,
      currentDate: o,
      dateProfile: a,
      businessHours: this.parseContextBusinessHours(c),
      eventSources: l,
      eventUiBases: {},
      eventStore: Ge(),
      renderableEventStore: Ge(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(c).selectionConfig
    }, d = Object.assign(Object.assign({}, c), u);
    for (let f of n.pluginHooks.reducers)
      Object.assign(u, f(null, null, d));
    vs(u, c) && this.emitter.trigger("loading", !0), this.state = u, this.updateData(), this.actionRunner.resume();
  }
  resetOptions(e, r) {
    let { props: n } = this;
    r === void 0 ? n.optionOverrides = e : (n.optionOverrides = Object.assign(Object.assign({}, n.optionOverrides || {}), e), this.optionsForRefining.push(...r)), (r === void 0 || r.length) && this.actionRunner.request({
      type: "NOTHING"
    });
  }
  _handleAction(e) {
    let { props: r, state: n, emitter: i } = this, s = tg(n.dynamicOptionOverrides, e), o = this.computeOptionsData(r.optionOverrides, s, r.calendarApi), a = eg(n.currentViewType, e), c = this.computeCurrentViewData(a, o, r.optionOverrides, s);
    r.calendarApi.currentDataManager = this, i.setThisContext(r.calendarApi), i.setOptions(c.options);
    let l = {
      dateEnv: o.dateEnv,
      options: o.calendarOptions,
      pluginHooks: o.pluginHooks,
      calendarApi: r.calendarApi,
      dispatch: this.dispatch,
      emitter: i,
      getCurrentData: this.getCurrentData
    }, { currentDate: u, dateProfile: d } = n;
    this.data && this.data.dateProfileGenerator !== c.dateProfileGenerator && (d = c.dateProfileGenerator.build(u)), u = mh(u, e), d = rg(d, e, u, c.dateProfileGenerator), (e.type === "PREV" || // TODO: move this logic into DateProfileGenerator
    e.type === "NEXT" || // "
    !xt(d.currentRange, u)) && (u = d.currentRange.start);
    let f = ig(n.eventSources, e, d, l), h = ep(n.eventStore, e, f, d, l), v = vu(f) && !c.options.progressiveEventRendering && n.renderableEventStore || h, { eventUiSingleBase: b, selectionConfig: w } = this.buildViewUiProps(l), x = this.buildEventUiBySource(f), g = this.buildEventUiBases(v.defs, b, x), m = {
      dynamicOptionOverrides: s,
      currentViewType: a,
      currentDate: u,
      dateProfile: d,
      eventSources: f,
      eventStore: h,
      renderableEventStore: v,
      selectionConfig: w,
      eventUiBases: g,
      businessHours: this.parseContextBusinessHours(l),
      dateSelection: fg(n.dateSelection, e),
      eventSelection: dg(n.eventSelection, e),
      eventDrag: hg(n.eventDrag, e),
      eventResize: pg(n.eventResize, e)
    }, E = Object.assign(Object.assign({}, l), m);
    for (let T of o.pluginHooks.reducers)
      Object.assign(m, T(n, e, E));
    let S = vs(n, l), C = vs(m, l);
    !S && C ? i.trigger("loading", !0) : S && !C && i.trigger("loading", !1), this.state = m, r.onAction && r.onAction(e);
  }
  updateData() {
    let { props: e, state: r } = this, n = this.data, i = this.computeOptionsData(e.optionOverrides, r.dynamicOptionOverrides, e.calendarApi), s = this.computeCurrentViewData(r.currentViewType, i, e.optionOverrides, r.dynamicOptionOverrides), o = this.data = Object.assign(Object.assign(Object.assign({ viewTitle: this.buildTitle(r.dateProfile, s.options, i.dateEnv), calendarApi: e.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, i), s), r), a = i.pluginHooks.optionChangeHandlers, c = n && n.calendarOptions, l = i.calendarOptions;
    if (c && c !== l) {
      c.timeZone !== l.timeZone && (r.eventSources = o.eventSources = sg(o.eventSources, r.dateProfile, o), r.eventStore = o.eventStore = Ca(o.eventStore, n.dateEnv, o.dateEnv), r.renderableEventStore = o.renderableEventStore = Ca(o.renderableEventStore, n.dateEnv, o.dateEnv));
      for (let u in a)
        (this.optionsForHandling.indexOf(u) !== -1 || c[u] !== l[u]) && a[u](l[u], o);
    }
    this.optionsForHandling = [], e.onData && e.onData(o);
  }
  computeOptionsData(e, r, n) {
    if (!this.optionsForRefining.length && e === this.stableOptionOverrides && r === this.stableDynamicOptionOverrides)
      return this.stableCalendarOptionsData;
    let { refinedOptions: i, pluginHooks: s, localeDefaults: o, availableLocaleData: a, extra: c } = this.processRawCalendarOptions(e, r);
    Oa(c);
    let l = this.buildDateEnv(i.timeZone, i.locale, i.weekNumberCalculation, i.firstDay, i.weekText, s, a, i.defaultRangeSeparator), u = this.buildViewSpecs(s.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides, o), d = this.buildTheme(i, s), f = this.parseToolbars(i, this.stableOptionOverrides, d, u, n);
    return this.stableCalendarOptionsData = {
      calendarOptions: i,
      pluginHooks: s,
      dateEnv: l,
      viewSpecs: u,
      theme: d,
      toolbarConfig: f,
      localeDefaults: o,
      availableRawLocales: a.map
    };
  }
  // always called from behind a memoizer
  processRawCalendarOptions(e, r) {
    let { locales: n, locale: i } = ls([
      Pr,
      e,
      r
    ]), s = this.organizeRawLocales(n), o = s.map, a = this.buildLocale(i || s.defaultCode, o).options, c = this.buildPluginHooks(e.plugins || [], Ng), l = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ga), va), ma), c.listenerRefiners), c.optionRefiners), u = {}, d = ls([
      Pr,
      a,
      e,
      r
    ]), f = {}, h = this.currentCalendarOptionsInput, p = this.currentCalendarOptionsRefined, v = !1;
    for (let b in d)
      this.optionsForRefining.indexOf(b) === -1 && (d[b] === h[b] || jt[b] && b in h && jt[b](h[b], d[b])) ? f[b] = p[b] : l[b] ? (f[b] = l[b](d[b]), v = !0) : u[b] = h[b];
    return v && (this.currentCalendarOptionsInput = d, this.currentCalendarOptionsRefined = f, this.stableOptionOverrides = e, this.stableDynamicOptionOverrides = r), this.optionsForHandling.push(...this.optionsForRefining), this.optionsForRefining = [], {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks: c,
      availableLocaleData: s,
      localeDefaults: a,
      extra: u
    };
  }
  _computeCurrentViewData(e, r, n, i) {
    let s = r.viewSpecs[e];
    if (!s)
      throw new Error(`viewType "${e}" is not available. Please make sure you've loaded all neccessary plugins`);
    let { refinedOptions: o, extra: a } = this.processRawViewOptions(s, r.pluginHooks, r.localeDefaults, n, i);
    Oa(a);
    let c = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: s.optionDefaults.dateProfileGeneratorClass,
      duration: s.duration,
      durationUnit: s.durationUnit,
      usesMinMaxTime: s.optionDefaults.usesMinMaxTime,
      dateEnv: r.dateEnv,
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
    }), l = this.buildViewApi(e, this.getCurrentData, r.dateEnv);
    return { viewSpec: s, options: o, dateProfileGenerator: c, viewApi: l };
  }
  processRawViewOptions(e, r, n, i, s) {
    let o = ls([
      Pr,
      e.optionDefaults,
      n,
      i,
      e.optionOverrides,
      s
    ]), a = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ga), va), ma), D0), r.listenerRefiners), r.optionRefiners), c = {}, l = this.currentViewOptionsInput, u = this.currentViewOptionsRefined, d = !1, f = {};
    for (let h in o)
      o[h] === l[h] || jt[h] && jt[h](o[h], l[h]) ? c[h] = u[h] : (o[h] === this.currentCalendarOptionsInput[h] || jt[h] && jt[h](o[h], this.currentCalendarOptionsInput[h]) ? h in this.currentCalendarOptionsRefined && (c[h] = this.currentCalendarOptionsRefined[h]) : a[h] ? c[h] = a[h](o[h]) : f[h] = o[h], d = !0);
    return d && (this.currentViewOptionsInput = o, this.currentViewOptionsRefined = c), {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: f
    };
  }
}
function Lg(t, e, r, n, i, s, o, a) {
  let c = pu(e || o.defaultCode, o.map);
  return new zh({
    calendarSystem: "gregory",
    timeZone: t,
    namedTimeZoneImpl: s.namedTimeZonedImpl,
    locale: c,
    weekNumberCalculation: r,
    firstDay: n,
    weekText: i,
    cmdFormatter: s.cmdFormatter,
    defaultSeparator: a
  });
}
function Fg(t, e) {
  let r = e.themeClasses[t.themeSystem] || Ht;
  return new r(t);
}
function zg(t) {
  let e = t.dateProfileGeneratorClass || Tc;
  return new e(t);
}
function Ug(t, e, r) {
  return new mg(t, e, r);
}
function Wg(t) {
  return Et(t, (e) => e.ui);
}
function jg(t, e, r) {
  let n = { "": e };
  for (let i in t) {
    let s = t[i];
    s.sourceId && r[s.sourceId] && (n[i] = r[s.sourceId]);
  }
  return n;
}
function Vg(t) {
  let { options: e } = t;
  return {
    eventUiSingleBase: Bn({
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
    selectionConfig: Bn({
      constraint: e.selectConstraint,
      overlap: typeof e.selectOverlap == "boolean" ? e.selectOverlap : void 0,
      allow: e.selectAllow
    }, t)
  };
}
function vs(t, e) {
  for (let r of e.pluginHooks.isLoadingFuncs)
    if (r(t))
      return !0;
  return !1;
}
function qg(t) {
  return F0(t.options.businessHours, t);
}
function Oa(t, e) {
  for (let r in t)
    console.warn(`Unknown option '${r}'` + (e ? ` for view '${e}'` : ""));
}
class Yg extends me {
  render() {
    let e = this.props.widgetGroups.map((r) => this.renderWidgetGroup(r));
    return D("div", { className: "fc-toolbar-chunk" }, ...e);
  }
  renderWidgetGroup(e) {
    let { props: r } = this, { theme: n } = this.context, i = [], s = !0;
    for (let o of e) {
      let { buttonName: a, buttonClick: c, buttonText: l, buttonIcon: u, buttonHint: d } = o;
      if (a === "title")
        s = !1, i.push(D("h2", { className: "fc-toolbar-title", id: r.titleId }, r.title));
      else {
        let f = a === r.activeButton, h = !r.isTodayEnabled && a === "today" || !r.isPrevEnabled && a === "prev" || !r.isNextEnabled && a === "next", p = [`fc-${a}-button`, n.getClass("button")];
        f && p.push(n.getClass("buttonActive")), i.push(D("button", { type: "button", title: typeof d == "function" ? d(r.navUnit) : d, disabled: h, "aria-pressed": f, className: p.join(" "), onClick: c }, l || (u ? D("span", { className: u }) : "")));
      }
    }
    if (i.length > 1) {
      let o = s && n.getClass("buttonGroup") || "";
      return D("div", { className: o }, ...i);
    }
    return i[0];
  }
}
class Ba extends me {
  render() {
    let { model: e, extraClassName: r } = this.props, n = !1, i, s, o = e.sectionWidgets, a = o.center;
    return o.left ? (n = !0, i = o.left) : i = o.start, o.right ? (n = !0, s = o.right) : s = o.end, D(
      "div",
      { className: [
        r || "",
        "fc-toolbar",
        n ? "fc-toolbar-ltr" : ""
      ].join(" ") },
      this.renderSection("start", i || []),
      this.renderSection("center", a || []),
      this.renderSection("end", s || [])
    );
  }
  renderSection(e, r) {
    let { props: n } = this;
    return D(Yg, { key: e, widgetGroups: r, title: n.title, navUnit: n.navUnit, activeButton: n.activeButton, isTodayEnabled: n.isTodayEnabled, isPrevEnabled: n.isPrevEnabled, isNextEnabled: n.isNextEnabled, titleId: n.titleId });
  }
}
class Gg extends me {
  constructor() {
    super(...arguments), this.state = {
      availableWidth: null
    }, this.handleEl = (e) => {
      this.el = e, wt(this.props.elRef, e), this.updateAvailableWidth();
    }, this.handleResize = () => {
      this.updateAvailableWidth();
    };
  }
  render() {
    let { props: e, state: r } = this, { aspectRatio: n } = e, i = [
      "fc-view-harness",
      n || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"
      // let the view do the height
    ], s = "", o = "";
    return n ? r.availableWidth !== null ? s = r.availableWidth / n : o = `${1 / n * 100}%` : s = e.height || "", D("div", { "aria-labelledby": e.labeledById, ref: this.handleEl, className: i.join(" "), style: { height: s, paddingBottom: o } }, e.children);
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
class $g extends br {
  constructor(e) {
    super(e), this.handleSegClick = (r, n) => {
      let { component: i } = this, { context: s } = i, o = gr(n);
      if (o && // might be the <div> surrounding the more link
      i.isValidSegDownEl(r.target)) {
        let a = Oe(r.target, ".fc-event-forced-url"), c = a ? a.querySelector("a[href]").href : "";
        s.emitter.trigger("eventClick", {
          el: n,
          event: new we(i.context, o.eventRange.def, o.eventRange.instance),
          jsEvent: r,
          view: s.viewApi
        }), c && !r.defaultPrevented && (window.location.href = c);
      }
    }, this.destroy = fc(
      e.el,
      "click",
      ".fc-event",
      // on both fg and bg events
      this.handleSegClick
    );
  }
}
class Qg extends br {
  constructor(e) {
    super(e), this.handleEventElRemove = (r) => {
      r === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl);
    }, this.handleSegEnter = (r, n) => {
      gr(n) && (this.currentSegEl = n, this.triggerEvent("eventMouseEnter", r, n));
    }, this.handleSegLeave = (r, n) => {
      this.currentSegEl && (this.currentSegEl = null, this.triggerEvent("eventMouseLeave", r, n));
    }, this.removeHoverListeners = Td(
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
  triggerEvent(e, r, n) {
    let { component: i } = this, { context: s } = i, o = gr(n);
    (!r || i.isValidSegDownEl(r.target)) && s.emitter.trigger(e, {
      el: n,
      event: new we(s, o.eventRange.def, o.eventRange.instance),
      jsEvent: r,
      view: s.viewApi
    });
  }
}
class Zg extends Jt {
  constructor() {
    super(...arguments), this.buildViewContext = se(ph), this.buildViewPropTransformers = se(Kg), this.buildToolbarProps = se(Xg), this.headerRef = Ue(), this.footerRef = Ue(), this.interactionsStore = {}, this.state = {
      viewLabelId: Di()
    }, this.registerInteractiveComponent = (e, r) => {
      let n = jh(e, r), o = [
        $g,
        Qg
      ].concat(this.props.pluginHooks.componentInteractions).map((a) => new a(n));
      this.interactionsStore[e.uid] = o, Ts[e.uid] = n;
    }, this.unregisterInteractiveComponent = (e) => {
      let r = this.interactionsStore[e.uid];
      if (r) {
        for (let n of r)
          n.destroy();
        delete this.interactionsStore[e.uid];
      }
      delete Ts[e.uid];
    }, this.resizeRunner = new yo(() => {
      this.props.emitter.trigger("_resize", !0), this.props.emitter.trigger("windowResize", { view: this.props.viewApi });
    }), this.handleWindowResize = (e) => {
      let { options: r } = this.props;
      r.handleWindowResize && e.target === window && this.resizeRunner.request(r.windowResizeDelay);
    };
  }
  /*
  renders INSIDE of an outer div
  */
  render() {
    let { props: e } = this, { toolbarConfig: r, options: n } = e, i = this.buildToolbarProps(
      e.viewSpec,
      e.dateProfile,
      e.dateProfileGenerator,
      e.currentDate,
      jr(e.options.now, e.dateEnv),
      // TODO: use NowTimer????
      e.viewTitle
    ), s = !1, o = "", a;
    e.isHeightAuto || e.forPrint ? o = "" : n.height != null ? s = !0 : n.contentHeight != null ? o = n.contentHeight : a = Math.max(n.aspectRatio, 0.5);
    let c = this.buildViewContext(e.viewSpec, e.viewApi, e.options, e.dateProfileGenerator, e.dateEnv, e.theme, e.pluginHooks, e.dispatch, e.getCurrentData, e.emitter, e.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), l = r.header && r.header.hasTitle ? this.state.viewLabelId : "";
    return D(
      _t.Provider,
      { value: c },
      r.header && D(Ba, Object.assign({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: r.header, titleId: l }, i)),
      D(
        Gg,
        { liquid: s, height: o, aspectRatio: a, labeledById: l },
        this.renderView(e),
        this.buildAppendContent()
      ),
      r.footer && D(Ba, Object.assign({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: r.footer, titleId: "" }, i))
    );
  }
  componentDidMount() {
    let { props: e } = this;
    this.calendarInteractions = e.pluginHooks.calendarInteractions.map((n) => new n(e)), window.addEventListener("resize", this.handleWindowResize);
    let { propSetHandlers: r } = e.pluginHooks;
    for (let n in r)
      r[n](e[n], e);
  }
  componentDidUpdate(e) {
    let { props: r } = this, { propSetHandlers: n } = r.pluginHooks;
    for (let i in n)
      r[i] !== e[i] && n[i](r[i], r);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
    for (let e of this.calendarInteractions)
      e.destroy();
    this.props.emitter.trigger("_unmount");
  }
  buildAppendContent() {
    let { props: e } = this, r = e.pluginHooks.viewContainerAppends.map((n) => n(e));
    return D(Ee, {}, ...r);
  }
  renderView(e) {
    let { pluginHooks: r } = e, { viewSpec: n } = e, i = {
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
    }, s = this.buildViewPropTransformers(r.viewPropsTransformers);
    for (let a of s)
      Object.assign(i, a.transform(i, e));
    let o = n.component;
    return D(o, Object.assign({}, i));
  }
}
function Xg(t, e, r, n, i, s) {
  let o = r.build(i, void 0, !1), a = r.buildPrev(e, n, !1), c = r.buildNext(e, n, !1);
  return {
    title: s,
    activeButton: t.type,
    navUnit: t.singleUnit,
    isTodayEnabled: o.isValid && !xt(e.currentRange, i),
    isPrevEnabled: a.isValid,
    isNextEnabled: c.isValid
  };
}
function Kg(t) {
  return t.map((e) => new e());
}
class Jg extends Hp {
  constructor(e, r = {}) {
    super(), this.isRendering = !1, this.isRendered = !1, this.currentClassNames = [], this.customContentRenderId = 0, this.handleAction = (n) => {
      switch (n.type) {
        case "SET_EVENT_DRAG":
        case "SET_EVENT_RESIZE":
          this.renderRunner.tryDrain();
      }
    }, this.handleData = (n) => {
      this.currentData = n, this.renderRunner.request(n.calendarOptions.rerenderDelay);
    }, this.handleRenderRequest = () => {
      if (this.isRendering) {
        this.isRendered = !0;
        let { currentData: n } = this;
        xa(() => {
          Lr(D(qh, { options: n.calendarOptions, theme: n.theme, emitter: n.emitter }, (i, s, o, a) => (this.setClassNames(i), this.setHeight(s), D(
            qc.Provider,
            { value: this.customContentRenderId },
            D(Zg, Object.assign({ isHeightAuto: o, forPrint: a }, n))
          ))), this.el);
        });
      } else
        this.isRendered && (this.isRendered = !1, Lr(null, this.el), this.setClassNames([]), this.setHeight(""));
    }, xd(e), this.el = e, this.renderRunner = new yo(this.handleRenderRequest), new Hg({
      optionOverrides: r,
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
    xa(() => {
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
  resetOptions(e, r) {
    this.currentDataManager.resetOptions(e, r);
  }
  setClassNames(e) {
    if (!Ot(e, this.currentClassNames)) {
      let { classList: r } = this.el;
      for (let n of this.currentClassNames)
        r.remove(n);
      for (let n of e)
        r.add(n);
      this.currentClassNames = e;
    }
  }
  setHeight(e) {
    cc(this.el, "height", e);
  }
}
const ev = {
  headerToolbar: !0,
  footerToolbar: !0,
  events: !0,
  eventSources: !0,
  resources: !0
}, tv = Ys({
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
        customRenderingMetaMap: sv(this.$slots),
        handleCustomRendering: this.handleCustomRendering
      };
    }
  },
  render() {
    const t = [];
    for (const e of this.customRenderingMap.values())
      t.push(mn(nv, {
        key: e.id,
        customRendering: e
      }));
    return mn("div", {
      // when renderId is changed, Vue will trigger a real-DOM async rerender, calling beforeUpdate/updated
      attrs: { "data-fc-render-id": this.renderId }
    }, mn(jf, t));
  },
  mounted() {
    const t = new Fp();
    this.handleCustomRendering = t.handle.bind(t);
    const e = this.buildOptions(this.options), r = new Jg(this.$el, e);
    this.calendar = r, r.render(), t.subscribe((n) => {
      this.customRenderingMap = n, this.renderId++, this.needCustomRenderingResize = !0;
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
  watch: iv()
}), rv = tv, nv = Ys({
  props: {
    customRendering: Object
  },
  render() {
    const t = this.customRendering, e = typeof t.generatorMeta == "function" ? t.generatorMeta(t.renderProps) : (
      // vue-normalized slot function
      t.generatorMeta
    );
    return mn(Vf, { to: t.containerEl }, e);
  }
});
function iv() {
  let t = {
    // watches changes of ALL options and their nested objects,
    // but this is only a means to be notified of top-level non-complex options changes.
    options: {
      deep: !0,
      handler(e) {
        let r = this.getApi();
        r.pauseRendering();
        let n = this.buildOptions(e);
        r.resetOptions(n), this.renderId++;
      }
    }
  };
  for (let e in ev)
    t[`options.${e}`] = {
      deep: !0,
      handler(r) {
        if (r !== void 0) {
          let n = this.getApi();
          n.pauseRendering(), n.resetOptions({
            [e]: r
          }, [e]), this.renderId++;
        }
      }
    };
  return t;
}
function sv(t) {
  const e = {};
  for (const r in t)
    e[ov(r)] = t[r];
  return e;
}
function ov(t) {
  return t.split("-").map((e, r) => r ? av(e) : e).join("");
}
function av(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
var lv = {
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
}, cv = ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';
$s(cv);
function hn(t, e) {
  let r = [];
  for (let n = 0; n < e; n += 1)
    r[n] = [];
  for (let n of t)
    r[n.row].push(n);
  return r;
}
function pn(t, e) {
  let r = [];
  for (let n = 0; n < e; n += 1)
    r[n] = [];
  for (let n of t)
    r[n.firstCol].push(n);
  return r;
}
function Pa(t, e) {
  let r = [];
  if (t) {
    for (let n = 0; n < e; n += 1)
      r[n] = {
        affectedInstances: t.affectedInstances,
        isEvent: t.isEvent,
        segs: []
      };
    for (let n of t.segs)
      r[n.row].segs.push(n);
  } else
    for (let n = 0; n < e; n += 1)
      r[n] = null;
  return r;
}
const Eu = _e({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function wu(t) {
  let { display: e } = t.eventRange.ui;
  return e === "list-item" || e === "auto" && !t.eventRange.def.allDay && t.firstCol === t.lastCol && // can't be multi-day
  t.isStart && // "
  t.isEnd;
}
class _u extends me {
  render() {
    let { props: e } = this;
    return D(nu, Object.assign({}, e, { elClasses: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: Eu, defaultDisplayEventEnd: e.defaultDisplayEventEnd, disableResizing: !e.seg.eventRange.def.allDay }));
  }
}
class Su extends me {
  render() {
    let { props: e, context: r } = this, { options: n } = r, { seg: i } = e, s = n.eventTimeFormat || Eu, o = Oc(i, s, r, !0, e.defaultDisplayEventEnd);
    return D(Eo, Object.assign({}, e, { elTag: "a", elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"], elAttrs: Pc(e.seg, r), defaultGenerator: uv, timeText: o, isResizing: !1, isDateSelecting: !1 }));
  }
}
function uv(t) {
  return D(
    Ee,
    null,
    D("div", { className: "fc-daygrid-event-dot", style: { borderColor: t.borderColor || t.backgroundColor } }),
    t.timeText && D("div", { className: "fc-event-time" }, t.timeText),
    D("div", { className: "fc-event-title" }, t.event.title || D(Ee, null, " "))
  );
}
class fv extends me {
  constructor() {
    super(...arguments), this.compileSegs = se(dv);
  }
  render() {
    let { props: e } = this, { allSegs: r, invisibleSegs: n } = this.compileSegs(e.singlePlacements);
    return D(au, { elClasses: ["fc-daygrid-more-link"], dateProfile: e.dateProfile, todayRange: e.todayRange, allDayDate: e.allDayDate, moreCnt: e.moreCnt, allSegs: r, hiddenSegs: n, alignmentElRef: e.alignmentElRef, alignGridTop: e.alignGridTop, extraDateSpan: e.extraDateSpan, popoverContent: () => {
      let i = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
      return D(Ee, null, r.map((s) => {
        let o = s.eventRange.instance.instanceId;
        return D("div", { className: "fc-daygrid-event-harness", key: o, style: {
          visibility: i[o] ? "hidden" : ""
        } }, wu(s) ? D(Su, Object.assign({ seg: s, isDragging: !1, isSelected: o === e.eventSelection, defaultDisplayEventEnd: !1 }, Nt(s, e.todayRange))) : D(_u, Object.assign({ seg: s, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: o === e.eventSelection, defaultDisplayEventEnd: !1 }, Nt(s, e.todayRange))));
      }));
    } });
  }
}
function dv(t) {
  let e = [], r = [];
  for (let n of t)
    e.push(n.seg), n.isVisible || r.push(n.seg);
  return { allSegs: e, invisibleSegs: r };
}
const hv = _e({ week: "narrow" });
class pv extends ft {
  constructor() {
    super(...arguments), this.rootElRef = Ue(), this.state = {
      dayNumberId: Di()
    }, this.handleRootEl = (e) => {
      wt(this.rootElRef, e), wt(this.props.elRef, e);
    };
  }
  render() {
    let { context: e, props: r, state: n, rootElRef: i } = this, { options: s, dateEnv: o } = e, { date: a, dateProfile: c } = r;
    const l = r.showDayNumber && vv(a, c.currentRange, o);
    return D(_o, { elTag: "td", elRef: this.handleRootEl, elClasses: [
      "fc-daygrid-day",
      ...r.extraClassNames || []
    ], elAttrs: Object.assign(Object.assign(Object.assign({}, r.extraDataAttrs), r.showDayNumber ? { "aria-labelledby": n.dayNumberId } : {}), { role: "gridcell" }), defaultGenerator: gv, date: a, dateProfile: c, todayRange: r.todayRange, showDayNumber: r.showDayNumber, isMonthStart: l, extraRenderProps: r.extraRenderProps }, (u, d) => D(
      "div",
      { ref: r.innerElRef, className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", style: { minHeight: r.minHeight } },
      r.showWeekNumber && D(ou, { elTag: "a", elClasses: ["fc-daygrid-week-number"], elAttrs: Pn(e, a, "week"), date: a, defaultFormat: hv }),
      !d.isDisabled && (r.showDayNumber || So(s) || r.forceDayTop) ? D(
        "div",
        { className: "fc-daygrid-day-top" },
        D(u, { elTag: "a", elClasses: [
          "fc-daygrid-day-number",
          l && "fc-daygrid-month-start"
        ], elAttrs: Object.assign(Object.assign({}, Pn(e, a)), { id: n.dayNumberId }) })
      ) : r.showDayNumber ? (
        // for creating correct amount of space (see issue #7162)
        D(
          "div",
          { className: "fc-daygrid-day-top", style: { visibility: "hidden" } },
          D("a", { className: "fc-daygrid-day-number" }, " ")
        )
      ) : void 0,
      D(
        "div",
        { className: "fc-daygrid-day-events", ref: r.fgContentElRef },
        r.fgContent,
        D(
          "div",
          { className: "fc-daygrid-day-bottom", style: { marginTop: r.moreMarginTop } },
          D(fv, { allDayDate: a, singlePlacements: r.singlePlacements, moreCnt: r.moreCnt, alignmentElRef: i, alignGridTop: !r.showDayNumber, extraDateSpan: r.extraDateSpan, dateProfile: r.dateProfile, eventSelection: r.eventSelection, eventDrag: r.eventDrag, eventResize: r.eventResize, todayRange: r.todayRange })
        )
      ),
      D("div", { className: "fc-daygrid-day-bg" }, r.bgContent)
    ));
  }
}
function gv(t) {
  return t.dayNumberText || D(Ee, null, " ");
}
function vv(t, e, r) {
  const { start: n, end: i } = e, s = Bt(i, -1), o = r.getYear(n), a = r.getMonth(n), c = r.getYear(s), l = r.getMonth(s);
  return !(o === c && a === l) && // first date in current view?
  (t.valueOf() === n.valueOf() || // a month-start that's within the current range?
  r.getDay(t) === 1 && t.valueOf() < i.valueOf());
}
function mv(t, e, r, n, i, s, o) {
  let a = new xv();
  a.allowReslicing = !0, a.strictOrder = n, e === !0 || r === !0 ? (a.maxCoord = s, a.hiddenConsumes = !0) : typeof e == "number" ? a.maxStackCnt = e : typeof r == "number" && (a.maxStackCnt = r, a.hiddenConsumes = !0);
  let c = [], l = [];
  for (let w = 0; w < t.length; w += 1) {
    let x = t[w], { instanceId: g } = x.eventRange.instance, m = i[g];
    m != null ? c.push({
      index: w,
      thickness: m,
      span: {
        start: x.firstCol,
        end: x.lastCol + 1
      }
    }) : l.push(x);
  }
  let u = a.addSegs(c), d = a.toRects(), { singleColPlacements: f, multiColPlacements: h, leftoverMargins: p } = bv(d, t, o), v = [], b = [];
  for (let w of l) {
    h[w.firstCol].push({
      seg: w,
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let x = w.firstCol; x <= w.lastCol; x += 1)
      f[x].push({
        seg: dr(w, x, x + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let w = 0; w < o.length; w += 1)
    v.push(0);
  for (let w of u) {
    let x = t[w.index], g = w.span;
    h[g.start].push({
      seg: dr(x, g.start, g.end, o),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let m = g.start; m < g.end; m += 1)
      v[m] += 1, f[m].push({
        seg: dr(x, m, m + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let w = 0; w < o.length; w += 1)
    b.push(p[w]);
  return { singleColPlacements: f, multiColPlacements: h, moreCnts: v, moreMarginTops: b };
}
function bv(t, e, r) {
  let n = yv(t, r.length), i = [], s = [], o = [];
  for (let a = 0; a < r.length; a += 1) {
    let c = n[a], l = [], u = 0, d = 0;
    for (let h of c) {
      let p = e[h.index];
      l.push({
        seg: dr(p, a, a + 1, r),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: h.levelCoord,
        marginTop: h.levelCoord - u
      }), u = h.levelCoord + h.thickness;
    }
    let f = [];
    u = 0, d = 0;
    for (let h of c) {
      let p = e[h.index], v = h.span.end - h.span.start > 1, b = h.span.start === a;
      d += h.levelCoord - u, u = h.levelCoord + h.thickness, v ? (d += h.thickness, b && f.push({
        seg: dr(p, h.span.start, h.span.end, r),
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: h.levelCoord,
        marginTop: 0
      })) : b && (f.push({
        seg: dr(p, h.span.start, h.span.end, r),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: h.levelCoord,
        marginTop: d
        // claim the margin
      }), d = 0);
    }
    i.push(l), s.push(f), o.push(d);
  }
  return { singleColPlacements: i, multiColPlacements: s, leftoverMargins: o };
}
function yv(t, e) {
  let r = [];
  for (let n = 0; n < e; n += 1)
    r.push([]);
  for (let n of t)
    for (let i = n.span.start; i < n.span.end; i += 1)
      r[i].push(n);
  return r;
}
function dr(t, e, r, n) {
  if (t.firstCol === e && t.lastCol === r - 1)
    return t;
  let i = t.eventRange, s = i.range, o = Zt(s, {
    start: n[e].date,
    end: Be(n[r - 1].date, 1)
  });
  return Object.assign(Object.assign({}, t), { firstCol: e, lastCol: r - 1, eventRange: {
    def: i.def,
    ui: Object.assign(Object.assign({}, i.ui), { durationEditable: !1 }),
    instance: i.instance,
    range: o
  }, isStart: t.isStart && o.start.valueOf() === s.start.valueOf(), isEnd: t.isEnd && o.end.valueOf() === s.end.valueOf() });
}
class xv extends zc {
  constructor() {
    super(...arguments), this.hiddenConsumes = !1, this.forceHidden = {};
  }
  addSegs(e) {
    const r = super.addSegs(e), { entriesByLevel: n } = this, i = (s) => !this.forceHidden[Gt(s)];
    for (let s = 0; s < n.length; s += 1)
      n[s] = n[s].filter(i);
    return r;
  }
  handleInvalidInsertion(e, r, n) {
    const { entriesByLevel: i, forceHidden: s } = this, { touchingEntry: o, touchingLevel: a, touchingLateral: c } = e;
    if (this.hiddenConsumes && o) {
      const l = Gt(o);
      if (!s[l])
        if (this.allowReslicing) {
          const u = Object.assign(Object.assign({}, o), { span: go(o.span, r.span) }), d = Gt(u);
          s[d] = !0, i[a][c] = u, this.splitEntry(o, r, n);
        } else
          s[l] = !0, n.push(o);
    }
    return super.handleInvalidInsertion(e, r, n);
  }
}
class Au extends ft {
  constructor() {
    super(...arguments), this.cellElRefs = new bt(), this.frameElRefs = new bt(), this.fgElRefs = new bt(), this.segHarnessRefs = new bt(), this.rootElRef = Ue(), this.state = {
      framePositions: null,
      maxContentHeight: null,
      eventInstanceHeights: {}
    }, this.handleResize = (e) => {
      e && this.updateSizing(!0);
    };
  }
  render() {
    let { props: e, state: r, context: n } = this, { options: i } = n, s = e.cells.length, o = pn(e.businessHourSegs, s), a = pn(e.bgEventSegs, s), c = pn(this.getHighlightSegs(), s), l = pn(this.getMirrorSegs(), s), { singleColPlacements: u, multiColPlacements: d, moreCnts: f, moreMarginTops: h } = mv(Nc(e.fgEventSegs, i.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, i.eventOrderStrict, r.eventInstanceHeights, r.maxContentHeight, e.cells), p = (
      // TODO: messy way to compute this
      e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}
    );
    return D(
      "tr",
      { ref: this.rootElRef, role: "row" },
      e.renderIntro && e.renderIntro(),
      e.cells.map((v, b) => {
        let w = this.renderFgSegs(b, e.forPrint ? u[b] : d[b], e.todayRange, p), x = this.renderFgSegs(b, Ev(l[b], d), e.todayRange, {}, !!e.eventDrag, !!e.eventResize, !1);
        return D(pv, { key: v.key, elRef: this.cellElRefs.createRef(v.key), innerElRef: this.frameElRefs.createRef(v.key), dateProfile: e.dateProfile, date: v.date, showDayNumber: e.showDayNumbers, showWeekNumber: e.showWeekNumbers && b === 0, forceDayTop: e.showWeekNumbers, todayRange: e.todayRange, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, extraRenderProps: v.extraRenderProps, extraDataAttrs: v.extraDataAttrs, extraClassNames: v.extraClassNames, extraDateSpan: v.extraDateSpan, moreCnt: f[b], moreMarginTop: h[b], singlePlacements: u[b], fgContentElRef: this.fgElRefs.createRef(v.key), fgContent: (
          // Fragment scopes the keys
          D(
            Ee,
            null,
            D(Ee, null, w),
            D(Ee, null, x)
          )
        ), bgContent: (
          // Fragment scopes the keys
          D(
            Ee,
            null,
            this.renderFillSegs(c[b], "highlight"),
            this.renderFillSegs(o[b], "non-business"),
            this.renderFillSegs(a[b], "bg-event")
          )
        ), minHeight: e.cellMinHeight });
      })
    );
  }
  componentDidMount() {
    this.updateSizing(!0), this.context.addResizeHandler(this.handleResize);
  }
  componentDidUpdate(e, r) {
    let n = this.props;
    this.updateSizing(!lt(e, n));
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
  renderFgSegs(e, r, n, i, s, o, a) {
    let { context: c } = this, { eventSelection: l } = this.props, { framePositions: u } = this.state, d = this.props.cells.length === 1, f = s || o || a, h = [];
    if (u)
      for (let p of r) {
        let { seg: v } = p, { instanceId: b } = v.eventRange.instance, w = b + ":" + e, x = p.isVisible && !i[b], g = p.isAbsolute, m = "", E = "";
        g && (c.isRtl ? (E = 0, m = u.lefts[v.lastCol] - u.lefts[v.firstCol]) : (m = 0, E = u.rights[v.firstCol] - u.rights[v.lastCol])), h.push(D("div", { className: "fc-daygrid-event-harness" + (g ? " fc-daygrid-event-harness-abs" : ""), key: w, ref: f ? null : this.segHarnessRefs.createRef(w), style: {
          visibility: x ? "" : "hidden",
          marginTop: g ? "" : p.marginTop,
          top: g ? p.absoluteTop : "",
          left: m,
          right: E
        } }, wu(v) ? D(Su, Object.assign({ seg: v, isDragging: s, isSelected: b === l, defaultDisplayEventEnd: d }, Nt(v, n))) : D(_u, Object.assign({ seg: v, isDragging: s, isResizing: o, isDateSelecting: a, isSelected: b === l, defaultDisplayEventEnd: d }, Nt(v, n)))));
      }
    return h;
  }
  renderFillSegs(e, r) {
    let { isRtl: n } = this.context, { todayRange: i } = this.props, { framePositions: s } = this.state, o = [];
    if (s)
      for (let a of e) {
        let c = n ? {
          right: 0,
          left: s.lefts[a.lastCol] - s.lefts[a.firstCol]
        } : {
          left: 0,
          right: s.rights[a.firstCol] - s.rights[a.lastCol]
        };
        o.push(D("div", { key: Bc(a.eventRange), className: "fc-daygrid-bg-harness", style: c }, r === "bg-event" ? D(iu, Object.assign({ seg: a }, Nt(a, i))) : su(r)));
      }
    return D(Ee, {}, ...o);
  }
  updateSizing(e) {
    let { props: r, state: n, frameElRefs: i } = this;
    if (!r.forPrint && r.clientWidth !== null) {
      if (e) {
        let c = r.cells.map((l) => i.currentMap[l.key]);
        if (c.length) {
          let l = this.rootElRef.current, u = new pr(
            l,
            c,
            !0,
            // isHorizontal
            !1
          );
          (!n.framePositions || !n.framePositions.similarTo(u)) && this.setState({
            framePositions: new pr(
              l,
              c,
              !0,
              // isHorizontal
              !1
            )
          });
        }
      }
      const s = this.state.eventInstanceHeights, o = this.queryEventInstanceHeights(), a = r.dayMaxEvents === !0 || r.dayMaxEventRows === !0;
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
    let e = this.segHarnessRefs.currentMap, r = {};
    for (let n in e) {
      let i = Math.round(e[n].getBoundingClientRect().height), s = n.split(":")[0];
      r[s] = Math.max(r[s] || 0, i);
    }
    return r;
  }
  computeMaxContentHeight() {
    let e = this.props.cells[0].key, r = this.cellElRefs.currentMap[e], n = this.fgElRefs.currentMap[e];
    return r.getBoundingClientRect().bottom - n.getBoundingClientRect().top;
  }
  getCellEls() {
    let e = this.cellElRefs.currentMap;
    return this.props.cells.map((r) => e[r.key]);
  }
}
Au.addStateEquality({
  eventInstanceHeights: lt
});
function Ev(t, e) {
  if (!t.length)
    return [];
  let r = wv(e);
  return t.map((n) => ({
    seg: n,
    isVisible: !0,
    isAbsolute: !0,
    absoluteTop: r[n.eventRange.instance.instanceId],
    marginTop: 0
  }));
}
function wv(t) {
  let e = {};
  for (let r of t)
    for (let n of r)
      e[n.seg.eventRange.instance.instanceId] = n.absoluteTop;
  return e;
}
class _v extends ft {
  constructor() {
    super(...arguments), this.splitBusinessHourSegs = se(hn), this.splitBgEventSegs = se(hn), this.splitFgEventSegs = se(hn), this.splitDateSelectionSegs = se(hn), this.splitEventDrag = se(Pa), this.splitEventResize = se(Pa), this.rowRefs = new bt();
  }
  render() {
    let { props: e, context: r } = this, n = e.cells.length, i = this.splitBusinessHourSegs(e.businessHourSegs, n), s = this.splitBgEventSegs(e.bgEventSegs, n), o = this.splitFgEventSegs(e.fgEventSegs, n), a = this.splitDateSelectionSegs(e.dateSelectionSegs, n), c = this.splitEventDrag(e.eventDrag, n), l = this.splitEventResize(e.eventResize, n), u = n >= 7 && e.clientWidth ? e.clientWidth / r.options.aspectRatio / 6 : null;
    return D(Vr, { unit: "day" }, (d, f) => D(Ee, null, e.cells.map((h, p) => D(Au, {
      ref: this.rowRefs.createRef(p),
      key: h.length ? h[0].date.toISOString() : p,
      showDayNumbers: n > 1,
      showWeekNumbers: e.showWeekNumbers,
      todayRange: f,
      dateProfile: e.dateProfile,
      cells: h,
      renderIntro: e.renderRowIntro,
      businessHourSegs: i[p],
      eventSelection: e.eventSelection,
      bgEventSegs: s[p].filter(Sv),
      fgEventSegs: o[p],
      dateSelectionSegs: a[p],
      eventDrag: c[p],
      eventResize: l[p],
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
    this.rowPositions = new pr(
      this.rootEl,
      this.rowRefs.collect().map((e) => e.getCellEls()[0]),
      // first cell el in each row. TODO: not optimal
      !1,
      !0
    ), this.colPositions = new pr(
      this.rootEl,
      this.rowRefs.currentMap[0].getCellEls(),
      // cell els in first row
      !0,
      // horizontal
      !1
    );
  }
  queryHit(e, r) {
    let { colPositions: n, rowPositions: i } = this, s = n.leftToIndex(e), o = i.topToIndex(r);
    if (o != null && s != null) {
      let a = this.props.cells[o][s];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: Object.assign({ range: this.getCellRange(o, s), allDay: !0 }, a.extraDateSpan),
        dayEl: this.getCellEl(o, s),
        rect: {
          left: n.lefts[s],
          right: n.rights[s],
          top: i.tops[o],
          bottom: i.bottoms[o]
        },
        layer: 0
      };
    }
    return null;
  }
  getCellEl(e, r) {
    return this.rowRefs.currentMap[e].getCellEls()[r];
  }
  getCellRange(e, r) {
    let n = this.props.cells[e][r].date, i = Be(n, 1);
    return { start: n, end: i };
  }
}
function Sv(t) {
  return t.eventRange.def.allDay;
}
class Av extends ft {
  constructor() {
    super(...arguments), this.elRef = Ue(), this.needsScrollReset = !1;
  }
  render() {
    let { props: e } = this, { dayMaxEventRows: r, dayMaxEvents: n, expandRows: i } = e, s = n === !0 || r === !0;
    s && !i && (s = !1, r = null, n = null);
    let o = [
      "fc-daygrid-body",
      s ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
      i ? "" : "fc-daygrid-body-natural"
      // will height of one row depend on the others?
    ];
    return D(
      "div",
      { ref: this.elRef, className: o.join(" "), style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: e.clientWidth,
        minWidth: e.tableMinWidth
      } },
      D(
        "table",
        { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
          width: e.clientWidth,
          minWidth: e.tableMinWidth,
          height: i ? e.clientHeight : ""
        } },
        e.colGroupNode,
        D(
          "tbody",
          { role: "presentation" },
          D(_v, { dateProfile: e.dateProfile, cells: e.cells, renderRowIntro: e.renderRowIntro, showWeekNumbers: e.showWeekNumbers, clientWidth: e.clientWidth, clientHeight: e.clientHeight, businessHourSegs: e.businessHourSegs, bgEventSegs: e.bgEventSegs, fgEventSegs: e.fgEventSegs, dateSelectionSegs: e.dateSelectionSegs, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, dayMaxEvents: n, dayMaxEventRows: r, forPrint: e.forPrint, isHitComboAllowed: e.isHitComboAllowed })
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
      const e = Cv(this.elRef.current, this.props.dateProfile);
      if (e) {
        const r = e.closest(".fc-daygrid-body"), n = r.closest(".fc-scroller"), i = e.getBoundingClientRect().top - r.getBoundingClientRect().top;
        n.scrollTop = i ? i + 1 : 0;
      }
      this.needsScrollReset = !1;
    }
  }
}
function Cv(t, e) {
  let r;
  return e.currentRangeUnit.match(/year|month/) && (r = t.querySelector(`[data-date="${u0(e.currentDate)}-01"]`)), r || (r = t.querySelector(`[data-date="${to(e.currentDate)}"]`)), r;
}
class Dv extends Qc {
  constructor() {
    super(...arguments), this.forceDayIfListItem = !0;
  }
  sliceRange(e, r) {
    return r.sliceRange(e);
  }
}
class Cu extends ft {
  constructor() {
    super(...arguments), this.slicer = new Dv(), this.tableRef = Ue();
  }
  render() {
    let { props: e, context: r } = this;
    return D(Av, Object.assign({ ref: this.tableRef }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, r, e.dayTableModel), { dateProfile: e.dateProfile, cells: e.dayTableModel.cells, colGroupNode: e.colGroupNode, tableMinWidth: e.tableMinWidth, renderRowIntro: e.renderRowIntro, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.showWeekNumbers, expandRows: e.expandRows, headerAlignElRef: e.headerAlignElRef, clientWidth: e.clientWidth, clientHeight: e.clientHeight, forPrint: e.forPrint }));
  }
}
class Rv extends Tc {
  // Computes the date range that will be rendered
  buildRenderRange(e, r, n) {
    let i = super.buildRenderRange(e, r, n), { props: s } = this;
    return Tv({
      currentRange: i,
      snapToWeek: /^(year|month)$/.test(r),
      fixedWeekCount: s.fixedWeekCount,
      dateEnv: s.dateEnv
    });
  }
}
function Tv(t) {
  let { dateEnv: e, currentRange: r } = t, { start: n, end: i } = r, s;
  if (t.snapToWeek && (n = e.startOfWeek(n), s = e.startOfWeek(i), s.valueOf() !== i.valueOf() && (i = ca(s, 1))), t.fixedWeekCount) {
    let o = e.startOfWeek(e.startOfMonth(Be(r.end, -1))), a = Math.ceil(
      // could be partial weeks due to hiddenDays
      Jd(o, i)
    );
    i = ca(i, 6 - a);
  }
  return { start: n, end: i };
}
class kv extends ft {
  constructor() {
    super(...arguments), this.headerElRef = Ue();
  }
  renderSimpleLayout(e, r) {
    let { props: n, context: i } = this, s = [], o = Ln(i.options);
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
      chunk: { content: r }
    }), D(
      Fn,
      { elClasses: ["fc-daygrid"], viewSpec: i.viewSpec },
      D(xo, { liquid: !n.isHeightAuto && !n.forPrint, collapsibleWidth: n.forPrint, cols: [], sections: s })
    );
  }
  renderHScrollLayout(e, r, n, i) {
    let s = this.context.pluginHooks.scrollGridImpl;
    if (!s)
      throw new Error("No ScrollGrid implementation");
    let { props: o, context: a } = this, c = !o.forPrint && Ln(a.options), l = !o.forPrint && ru(a.options), u = [];
    return e && u.push({
      type: "header",
      key: "header",
      isSticky: c,
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
        content: r
      }]
    }), l && u.push({
      type: "footer",
      key: "footer",
      isSticky: !0,
      chunks: [{
        key: "main",
        content: ks
      }]
    }), D(
      Fn,
      { elClasses: ["fc-daygrid"], viewSpec: a.viewSpec },
      D(s, { liquid: !o.isHeightAuto && !o.forPrint, forPrint: o.forPrint, collapsibleWidth: o.forPrint, colGroups: [{ cols: [{ span: n, minWidth: i }] }], sections: u })
    );
  }
}
class Iv extends kv {
  constructor() {
    super(...arguments), this.buildDayTableModel = se(Mv), this.headerRef = Ue(), this.tableRef = Ue();
  }
  render() {
    let { options: e, dateProfileGenerator: r } = this.context, { props: n } = this, i = this.buildDayTableModel(n.dateProfile, r), s = e.dayHeaders && D(Yc, { ref: this.headerRef, dateProfile: n.dateProfile, dates: i.headerDates, datesRepDistinctDays: i.rowCnt === 1 }), o = (a) => D(Cu, { ref: this.tableRef, dateProfile: n.dateProfile, dayTableModel: i, businessHours: n.businessHours, dateSelection: n.dateSelection, eventStore: n.eventStore, eventUiBases: n.eventUiBases, eventSelection: n.eventSelection, eventDrag: n.eventDrag, eventResize: n.eventResize, nextDayThreshold: e.nextDayThreshold, colGroupNode: a.tableColGroupNode, tableMinWidth: a.tableMinWidth, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.weekNumbers, expandRows: !n.isHeightAuto, headerAlignElRef: this.headerElRef, clientWidth: a.clientWidth, clientHeight: a.clientHeight, forPrint: n.forPrint });
    return e.dayMinWidth ? this.renderHScrollLayout(s, o, i.colCnt, e.dayMinWidth) : this.renderSimpleLayout(s, o);
  }
}
function Mv(t, e) {
  let r = new Gc(t.renderRange, e);
  return new $c(r, /year|month|week/.test(t.currentRangeUnit));
}
var Nv = St({
  name: "@fullcalendar/daygrid",
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: Iv,
      dateProfileGeneratorClass: Rv
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
}), Ov = '.fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:"\\00a0"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:"\\00a0-\\00a0"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}';
$s(Ov);
class Bv extends Y0 {
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
    return e.allDay ? wh(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"];
  }
}
const Pv = _e({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "short"
});
function Du(t) {
  let e = [
    "fc-timegrid-slot",
    "fc-timegrid-slot-label",
    t.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"
  ];
  return D(_t.Consumer, null, (r) => {
    if (!t.isLabeled)
      return D("td", { className: e.join(" "), "data-time": t.isoTimeStr });
    let { dateEnv: n, options: i, viewApi: s } = r, o = (
      // TODO: fully pre-parse
      i.slotLabelFormat == null ? Pv : Array.isArray(i.slotLabelFormat) ? _e(i.slotLabelFormat[0]) : _e(i.slotLabelFormat)
    ), a = {
      level: 0,
      time: t.time,
      date: n.toDate(t.date),
      view: s,
      text: n.format(t.date, o)
    };
    return D($e, { elTag: "td", elClasses: e, elAttrs: {
      "data-time": t.isoTimeStr
    }, renderProps: a, generatorName: "slotLabelContent", customGenerator: i.slotLabelContent, defaultGenerator: Hv, classNameGenerator: i.slotLabelClassNames, didMount: i.slotLabelDidMount, willUnmount: i.slotLabelWillUnmount }, (c) => D(
      "div",
      { className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame" },
      D(c, { elTag: "div", elClasses: [
        "fc-timegrid-slot-label-cushion",
        "fc-scrollgrid-shrink-cushion"
      ] })
    ));
  });
}
function Hv(t) {
  return t.text;
}
class Lv extends me {
  render() {
    return this.props.slatMetas.map((e) => D(
      "tr",
      { key: e.key },
      D(Du, Object.assign({}, e))
    ));
  }
}
const Fv = _e({ week: "short" }), zv = 5;
class Uv extends ft {
  constructor() {
    super(...arguments), this.allDaySplitter = new Bv(), this.headerElRef = Ue(), this.rootElRef = Ue(), this.scrollerElRef = Ue(), this.state = {
      slatCoords: null
    }, this.handleScrollTopRequest = (e) => {
      let r = this.scrollerElRef.current;
      r && (r.scrollTop = e);
    }, this.renderHeadAxis = (e, r = "") => {
      let { options: n } = this.context, { dateProfile: i } = this.props, s = i.renderRange, a = Kt(s.start, s.end) === 1 ? Pn(this.context, s.start, "week") : {};
      return n.weekNumbers && e === "day" ? D(ou, { elTag: "th", elClasses: [
        "fc-timegrid-axis",
        "fc-scrollgrid-shrink"
      ], elAttrs: {
        "aria-hidden": !0
      }, date: s.start, defaultFormat: Fv }, (c) => D(
        "div",
        { className: [
          "fc-timegrid-axis-frame",
          "fc-scrollgrid-shrink-frame",
          "fc-timegrid-axis-frame-liquid"
        ].join(" "), style: { height: r } },
        D(c, { elTag: "a", elClasses: [
          "fc-timegrid-axis-cushion",
          "fc-scrollgrid-shrink-cushion",
          "fc-scrollgrid-sync-inner"
        ], elAttrs: a })
      )) : D(
        "th",
        { "aria-hidden": !0, className: "fc-timegrid-axis" },
        D("div", { className: "fc-timegrid-axis-frame", style: { height: r } })
      );
    }, this.renderTableRowAxis = (e) => {
      let { options: r, viewApi: n } = this.context, i = {
        text: r.allDayText,
        view: n
      };
      return (
        // TODO: make reusable hook. used in list view too
        D($e, { elTag: "td", elClasses: [
          "fc-timegrid-axis",
          "fc-scrollgrid-shrink"
        ], elAttrs: {
          "aria-hidden": !0
        }, renderProps: i, generatorName: "allDayContent", customGenerator: r.allDayContent, defaultGenerator: Wv, classNameGenerator: r.allDayClassNames, didMount: r.allDayDidMount, willUnmount: r.allDayWillUnmount }, (s) => D(
          "div",
          { className: [
            "fc-timegrid-axis-frame",
            "fc-scrollgrid-shrink-frame",
            e == null ? " fc-timegrid-axis-frame-liquid" : ""
          ].join(" "), style: { height: e } },
          D(s, { elTag: "span", elClasses: [
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
  renderSimpleLayout(e, r, n) {
    let { context: i, props: s } = this, o = [], a = Ln(i.options);
    return e && o.push({
      type: "header",
      key: "header",
      isSticky: a,
      chunk: {
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: e
      }
    }), r && (o.push({
      type: "body",
      key: "all-day",
      chunk: { content: r }
    }), o.push({
      type: "body",
      key: "all-day-divider",
      outerContent: (
        // TODO: rename to cellContent so don't need to define <tr>?
        D(
          "tr",
          { role: "presentation", className: "fc-scrollgrid-section" },
          D("td", { className: "fc-timegrid-divider " + i.theme.getClass("tableCellShaded") })
        )
      )
    })), o.push({
      type: "body",
      key: "body",
      liquid: !0,
      expandRows: !!i.options.expandRows,
      chunk: {
        scrollerElRef: this.scrollerElRef,
        content: n
      }
    }), D(
      Fn,
      { elRef: this.rootElRef, elClasses: ["fc-timegrid"], viewSpec: i.viewSpec },
      D(xo, { liquid: !s.isHeightAuto && !s.forPrint, collapsibleWidth: s.forPrint, cols: [{ width: "shrink" }], sections: o })
    );
  }
  renderHScrollLayout(e, r, n, i, s, o, a) {
    let c = this.context.pluginHooks.scrollGridImpl;
    if (!c)
      throw new Error("No ScrollGrid implementation");
    let { context: l, props: u } = this, d = !u.forPrint && Ln(l.options), f = !u.forPrint && ru(l.options), h = [];
    e && h.push({
      type: "header",
      key: "header",
      isSticky: d,
      syncRowHeights: !0,
      chunks: [
        {
          key: "axis",
          rowContent: (v) => D("tr", { role: "presentation" }, this.renderHeadAxis("day", v.rowSyncHeights[0]))
        },
        {
          key: "cols",
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: e
        }
      ]
    }), r && (h.push({
      type: "body",
      key: "all-day",
      syncRowHeights: !0,
      chunks: [
        {
          key: "axis",
          rowContent: (v) => D("tr", { role: "presentation" }, this.renderTableRowAxis(v.rowSyncHeights[0]))
        },
        {
          key: "cols",
          content: r
        }
      ]
    }), h.push({
      key: "all-day-divider",
      type: "body",
      outerContent: (
        // TODO: rename to cellContent so don't need to define <tr>?
        D(
          "tr",
          { role: "presentation", className: "fc-scrollgrid-section" },
          D("td", { colSpan: 2, className: "fc-timegrid-divider " + l.theme.getClass("tableCellShaded") })
        )
      )
    }));
    let p = l.options.nowIndicator;
    return h.push({
      type: "body",
      key: "body",
      liquid: !0,
      expandRows: !!l.options.expandRows,
      chunks: [
        {
          key: "axis",
          content: (v) => (
            // TODO: make this now-indicator arrow more DRY with TimeColsContent
            D(
              "div",
              { className: "fc-timegrid-axis-chunk" },
              D(
                "table",
                { "aria-hidden": !0, style: { height: v.expandRows ? v.clientHeight : "" } },
                v.tableColGroupNode,
                D(
                  "tbody",
                  null,
                  D(Lv, { slatMetas: o })
                )
              ),
              D(
                "div",
                { className: "fc-timegrid-now-indicator-container" },
                D(Vr, {
                  unit: p ? "minute" : "day"
                  /* hacky */
                }, (b) => {
                  let w = p && a && a.safeComputeTop(b);
                  return typeof w == "number" ? D(wo, { elClasses: ["fc-timegrid-now-indicator-arrow"], elStyle: { top: w }, isAxis: !0, date: b }) : null;
                })
              )
            )
          )
        },
        {
          key: "cols",
          scrollerElRef: this.scrollerElRef,
          content: n
        }
      ]
    }), f && h.push({
      key: "footer",
      type: "footer",
      isSticky: !0,
      chunks: [
        {
          key: "axis",
          content: ks
        },
        {
          key: "cols",
          content: ks
        }
      ]
    }), D(
      Fn,
      { elRef: this.rootElRef, elClasses: ["fc-timegrid"], viewSpec: l.viewSpec },
      D(c, { liquid: !u.isHeightAuto && !u.forPrint, forPrint: u.forPrint, collapsibleWidth: !1, colGroups: [
        { width: "shrink", cols: [{ width: "shrink" }] },
        { cols: [{ span: i, minWidth: s }] }
      ], sections: h })
    );
  }
  /* Dimensions
  ------------------------------------------------------------------------------------------------------------------*/
  getAllDayMaxEventProps() {
    let { dayMaxEvents: e, dayMaxEventRows: r } = this.context.options;
    return (e === !0 || r === !0) && (e = void 0, r = zv), { dayMaxEvents: e, dayMaxEventRows: r };
  }
}
function Wv(t) {
  return t.text;
}
class jv {
  constructor(e, r, n) {
    this.positions = e, this.dateProfile = r, this.slotDuration = n;
  }
  safeComputeTop(e) {
    let { dateProfile: r } = this;
    if (xt(r.currentRange, e)) {
      let n = xe(e), i = e.valueOf() - n.valueOf();
      if (i >= tt(r.slotMinTime) && i < tt(r.slotMaxTime))
        return this.computeTimeTop(pe(i));
    }
    return null;
  }
  // Computes the top coordinate, relative to the bounds of the grid, of the given date.
  // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
  computeDateTop(e, r) {
    return r || (r = xe(e)), this.computeTimeTop(pe(e.valueOf() - r.valueOf()));
  }
  // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
  // This is a makeshify way to compute the time-top. Assumes all slatMetas dates are uniform.
  // Eventually allow computation with arbirary slat dates.
  computeTimeTop(e) {
    let { positions: r, dateProfile: n } = this, i = r.els.length, s = (e.milliseconds - tt(n.slotMinTime)) / tt(this.slotDuration), o, a;
    return s = Math.max(0, s), s = Math.min(i, s), o = Math.floor(s), o = Math.min(o, i - 1), a = s - o, r.tops[o] + r.getHeight(o) * a;
  }
}
class Vv extends me {
  render() {
    let { props: e, context: r } = this, { options: n } = r, { slatElRefs: i } = e;
    return D("tbody", null, e.slatMetas.map((s, o) => {
      let a = {
        time: s.time,
        date: r.dateEnv.toDate(s.date),
        view: r.viewApi
      };
      return D(
        "tr",
        { key: s.key, ref: i.createRef(s.key) },
        e.axis && D(Du, Object.assign({}, s)),
        D($e, { elTag: "td", elClasses: [
          "fc-timegrid-slot",
          "fc-timegrid-slot-lane",
          !s.isLabeled && "fc-timegrid-slot-minor"
        ], elAttrs: {
          "data-time": s.isoTimeStr
        }, renderProps: a, generatorName: "slotLaneContent", customGenerator: n.slotLaneContent, classNameGenerator: n.slotLaneClassNames, didMount: n.slotLaneDidMount, willUnmount: n.slotLaneWillUnmount })
      );
    }));
  }
}
class qv extends me {
  constructor() {
    super(...arguments), this.rootElRef = Ue(), this.slatElRefs = new bt();
  }
  render() {
    let { props: e, context: r } = this;
    return D(
      "div",
      { ref: this.rootElRef, className: "fc-timegrid-slots" },
      D(
        "table",
        { "aria-hidden": !0, className: r.theme.getClass("table"), style: {
          minWidth: e.tableMinWidth,
          width: e.clientWidth,
          height: e.minHeight
        } },
        e.tableColGroupNode,
        D(Vv, { slatElRefs: this.slatElRefs, axis: e.axis, slatMetas: e.slatMetas })
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
    let { context: e, props: r } = this;
    r.onCoords && r.clientWidth !== null && this.rootElRef.current.offsetHeight && r.onCoords(new jv(new pr(this.rootElRef.current, Yv(this.slatElRefs.currentMap, r.slatMetas), !1, !0), this.props.dateProfile, e.options.slotDuration));
  }
}
function Yv(t, e) {
  return e.map((r) => t[r.key]);
}
function kr(t, e) {
  let r = [], n;
  for (n = 0; n < e; n += 1)
    r.push([]);
  if (t)
    for (n = 0; n < t.length; n += 1)
      r[t[n].col].push(t[n]);
  return r;
}
function Ha(t, e) {
  let r = [];
  if (t) {
    for (let n = 0; n < e; n += 1)
      r[n] = {
        affectedInstances: t.affectedInstances,
        isEvent: t.isEvent,
        segs: []
      };
    for (let n of t.segs)
      r[n.col].segs.push(n);
  } else
    for (let n = 0; n < e; n += 1)
      r[n] = null;
  return r;
}
class Gv extends me {
  render() {
    let { props: e } = this;
    return D(au, { elClasses: ["fc-timegrid-more-link"], elStyle: {
      top: e.top,
      bottom: e.bottom
    }, allDayDate: null, moreCnt: e.hiddenSegs.length, allSegs: e.hiddenSegs, hiddenSegs: e.hiddenSegs, extraDateSpan: e.extraDateSpan, dateProfile: e.dateProfile, todayRange: e.todayRange, popoverContent: () => Tu(e.hiddenSegs, e), defaultGenerator: $v, forceTimed: !0 }, (r) => D(r, { elTag: "div", elClasses: ["fc-timegrid-more-link-inner", "fc-sticky"] }));
  }
}
function $v(t) {
  return t.shortText;
}
function Qv(t, e, r) {
  let n = new zc();
  e != null && (n.strictOrder = e), r != null && (n.maxStackCnt = r);
  let i = n.addSegs(t), s = Uh(i), o = Zv(n);
  return o = em(o, 1), { segRects: tm(o), hiddenGroups: s };
}
function Zv(t) {
  const { entriesByLevel: e } = t, r = Co((n, i) => n + ":" + i, (n, i) => {
    let s = Jv(t, n, i), o = La(s, r), a = e[n][i];
    return [
      Object.assign(Object.assign({}, a), { nextLevelNodes: o[0] }),
      a.thickness + o[1]
      // the pressure builds
    ];
  });
  return La(e.length ? { level: 0, lateralStart: 0, lateralEnd: e[0].length } : null, r)[0];
}
function La(t, e) {
  if (!t)
    return [[], 0];
  let { level: r, lateralStart: n, lateralEnd: i } = t, s = n, o = [];
  for (; s < i; )
    o.push(e(r, s)), s += 1;
  return o.sort(Xv), [
    o.map(Kv),
    o[0][1]
    // first item's pressure
  ];
}
function Xv(t, e) {
  return e[1] - t[1];
}
function Kv(t) {
  return t[0];
}
function Jv(t, e, r) {
  let { levelCoords: n, entriesByLevel: i } = t, s = i[e][r], o = n[e] + s.thickness, a = n.length, c = e;
  for (; c < a && n[c] < o; c += 1)
    ;
  for (; c < a; c += 1) {
    let l = i[c], u, d = Rs(l, s.span.start, Ds), f = d[0] + d[1], h = f;
    for (
      ;
      // loop through entries that horizontally intersect
      (u = l[h]) && // but not past the whole seg list
      u.span.start < s.span.end;
    )
      h += 1;
    if (f < h)
      return { level: c, lateralStart: f, lateralEnd: h };
  }
  return null;
}
function em(t, e) {
  const r = Co((n, i, s) => Gt(n), (n, i, s) => {
    let { nextLevelNodes: o, thickness: a } = n, c = a + s, l = a / c, u, d = [];
    if (!o.length)
      u = e;
    else
      for (let h of o)
        if (u === void 0) {
          let p = r(h, i, c);
          u = p[0], d.push(p[1]);
        } else {
          let p = r(h, u, 0);
          d.push(p[1]);
        }
    let f = (u - i) * l;
    return [u - f, Object.assign(Object.assign({}, n), { thickness: f, nextLevelNodes: d })];
  });
  return t.map((n) => r(n, 0, 0)[1]);
}
function tm(t) {
  let e = [];
  const r = Co((i, s, o) => Gt(i), (i, s, o) => {
    let a = Object.assign(Object.assign({}, i), {
      levelCoord: s,
      stackDepth: o,
      stackForward: 0
    });
    return e.push(a), a.stackForward = n(i.nextLevelNodes, s + i.thickness, o + 1) + 1;
  });
  function n(i, s, o) {
    let a = 0;
    for (let c of i)
      a = Math.max(r(c, s, o), a);
    return a;
  }
  return n(t, 0, 0), e;
}
function Co(t, e) {
  const r = {};
  return (...n) => {
    let i = t(...n);
    return i in r ? r[i] : r[i] = e(...n);
  };
}
function Fa(t, e, r = null, n = 0) {
  let i = [];
  if (r)
    for (let s = 0; s < t.length; s += 1) {
      let o = t[s], a = r.computeDateTop(o.start, e), c = Math.max(
        a + (n || 0),
        // :(
        r.computeDateTop(o.end, e)
      );
      i.push({
        start: Math.round(a),
        end: Math.round(c)
        //
      });
    }
  return i;
}
function rm(t, e, r, n) {
  let i = [], s = [];
  for (let l = 0; l < t.length; l += 1) {
    let u = e[l];
    u ? i.push({
      index: l,
      thickness: 1,
      span: u
    }) : s.push(t[l]);
  }
  let { segRects: o, hiddenGroups: a } = Qv(i, r, n), c = [];
  for (let l of o)
    c.push({
      seg: t[l.index],
      rect: l
    });
  for (let l of s)
    c.push({ seg: l, rect: null });
  return { segPlacements: c, hiddenGroups: a };
}
const nm = _e({
  hour: "numeric",
  minute: "2-digit",
  meridiem: !1
});
class Ru extends me {
  render() {
    return D(nu, Object.assign({}, this.props, { elClasses: [
      "fc-timegrid-event",
      "fc-v-event",
      this.props.isShort && "fc-timegrid-event-short"
    ], defaultTimeFormat: nm }));
  }
}
class im extends me {
  constructor() {
    super(...arguments), this.sortEventSegs = se(Nc);
  }
  // TODO: memoize event-placement?
  render() {
    let { props: e, context: r } = this, { options: n } = r, i = n.selectMirror, s = (
      // yuck
      e.eventDrag && e.eventDrag.segs || e.eventResize && e.eventResize.segs || i && e.dateSelectionSegs || []
    ), o = (
      // TODO: messy way to compute this
      e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}
    ), a = this.sortEventSegs(e.fgEventSegs, n.eventOrder);
    return D(_o, { elTag: "td", elRef: e.elRef, elClasses: [
      "fc-timegrid-col",
      ...e.extraClassNames || []
    ], elAttrs: Object.assign({ role: "gridcell" }, e.extraDataAttrs), date: e.date, dateProfile: e.dateProfile, todayRange: e.todayRange, extraRenderProps: e.extraRenderProps }, (c) => D(
      "div",
      { className: "fc-timegrid-col-frame" },
      D(
        "div",
        { className: "fc-timegrid-col-bg" },
        this.renderFillSegs(e.businessHourSegs, "non-business"),
        this.renderFillSegs(e.bgEventSegs, "bg-event"),
        this.renderFillSegs(e.dateSelectionSegs, "highlight")
      ),
      D("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(a, o, !1, !1, !1)),
      D("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(s, {}, !!e.eventDrag, !!e.eventResize, !!i, "mirror")),
      D("div", { className: "fc-timegrid-now-indicator-container" }, this.renderNowIndicator(e.nowIndicatorSegs)),
      So(n) && D(c, { elTag: "div", elClasses: ["fc-timegrid-col-misc"] })
    ));
  }
  renderFgSegs(e, r, n, i, s, o) {
    let { props: a } = this;
    return a.forPrint ? Tu(e, a) : this.renderPositionedFgSegs(e, r, n, i, s, o);
  }
  renderPositionedFgSegs(e, r, n, i, s, o) {
    let { eventMaxStack: a, eventShortHeight: c, eventOrderStrict: l, eventMinHeight: u } = this.context.options, { date: d, slatCoords: f, eventSelection: h, todayRange: p, nowDate: v } = this.props, b = n || i || s, w = Fa(e, d, f, u), { segPlacements: x, hiddenGroups: g } = rm(e, w, l, a);
    return D(
      Ee,
      null,
      this.renderHiddenGroups(g, e),
      x.map((m) => {
        let { seg: E, rect: S } = m, C = E.eventRange.instance.instanceId, T = b || !!(!r[C] && S), B = ms(S && S.span), A = !b && S ? this.computeSegHStyle(S) : { left: 0, right: 0 }, I = !!S && S.stackForward > 0, P = !!S && S.span.end - S.span.start < c;
        return D(
          "div",
          { className: "fc-timegrid-event-harness" + (I ? " fc-timegrid-event-harness-inset" : ""), key: o || C, style: Object.assign(Object.assign({ visibility: T ? "" : "hidden" }, B), A) },
          D(Ru, Object.assign({ seg: E, isDragging: n, isResizing: i, isDateSelecting: s, isSelected: C === h, isShort: P }, Nt(E, p, v)))
        );
      })
    );
  }
  // will already have eventMinHeight applied because segInputs already had it
  renderHiddenGroups(e, r) {
    let { extraDateSpan: n, dateProfile: i, todayRange: s, nowDate: o, eventSelection: a, eventDrag: c, eventResize: l } = this.props;
    return D(Ee, null, e.map((u) => {
      let d = ms(u.span), f = sm(u.entries, r);
      return D(Gv, { key: vc(lu(f)), hiddenSegs: f, top: d.top, bottom: d.bottom, extraDateSpan: n, dateProfile: i, todayRange: s, nowDate: o, eventSelection: a, eventDrag: c, eventResize: l });
    }));
  }
  renderFillSegs(e, r) {
    let { props: n, context: i } = this, o = Fa(e, n.date, n.slatCoords, i.options.eventMinHeight).map((a, c) => {
      let l = e[c];
      return D("div", { key: Bc(l.eventRange), className: "fc-timegrid-bg-harness", style: ms(a) }, r === "bg-event" ? D(iu, Object.assign({ seg: l }, Nt(l, n.todayRange, n.nowDate))) : su(r));
    });
    return D(Ee, null, o);
  }
  renderNowIndicator(e) {
    let { slatCoords: r, date: n } = this.props;
    return r ? e.map((i, s) => D(
      wo,
      {
        // key doesn't matter. will only ever be one
        key: s,
        elClasses: ["fc-timegrid-now-indicator-line"],
        elStyle: {
          top: r.computeDateTop(i.start, n)
        },
        isAxis: !1,
        date: n
      }
    )) : null;
  }
  computeSegHStyle(e) {
    let { isRtl: r, options: n } = this.context, i = n.slotEventOverlap, s = e.levelCoord, o = e.levelCoord + e.thickness, a, c;
    i && (o = Math.min(1, s + (o - s) * 2)), r ? (a = 1 - o, c = s) : (a = s, c = 1 - o);
    let l = {
      zIndex: e.stackDepth + 1,
      left: a * 100 + "%",
      right: c * 100 + "%"
    };
    return i && !e.stackForward && (l[r ? "marginLeft" : "marginRight"] = 10 * 2), l;
  }
}
function Tu(t, { todayRange: e, nowDate: r, eventSelection: n, eventDrag: i, eventResize: s }) {
  let o = (i ? i.affectedInstances : null) || (s ? s.affectedInstances : null) || {};
  return D(Ee, null, t.map((a) => {
    let c = a.eventRange.instance.instanceId;
    return D(
      "div",
      { key: c, style: { visibility: o[c] ? "hidden" : "" } },
      D(Ru, Object.assign({ seg: a, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: c === n, isShort: !1 }, Nt(a, e, r)))
    );
  }));
}
function ms(t) {
  return t ? {
    top: t.start,
    bottom: -t.end
  } : { top: "", bottom: "" };
}
function sm(t, e) {
  return t.map((r) => e[r.index]);
}
class om extends me {
  constructor() {
    super(...arguments), this.splitFgEventSegs = se(kr), this.splitBgEventSegs = se(kr), this.splitBusinessHourSegs = se(kr), this.splitNowIndicatorSegs = se(kr), this.splitDateSelectionSegs = se(kr), this.splitEventDrag = se(Ha), this.splitEventResize = se(Ha), this.rootElRef = Ue(), this.cellElRefs = new bt();
  }
  render() {
    let { props: e, context: r } = this, n = r.options.nowIndicator && e.slatCoords && e.slatCoords.safeComputeTop(e.nowDate), i = e.cells.length, s = this.splitFgEventSegs(e.fgEventSegs, i), o = this.splitBgEventSegs(e.bgEventSegs, i), a = this.splitBusinessHourSegs(e.businessHourSegs, i), c = this.splitNowIndicatorSegs(e.nowIndicatorSegs, i), l = this.splitDateSelectionSegs(e.dateSelectionSegs, i), u = this.splitEventDrag(e.eventDrag, i), d = this.splitEventResize(e.eventResize, i);
    return D(
      "div",
      { className: "fc-timegrid-cols", ref: this.rootElRef },
      D(
        "table",
        { role: "presentation", style: {
          minWidth: e.tableMinWidth,
          width: e.clientWidth
        } },
        e.tableColGroupNode,
        D(
          "tbody",
          { role: "presentation" },
          D(
            "tr",
            { role: "row" },
            e.axis && D(
              "td",
              { "aria-hidden": !0, className: "fc-timegrid-col fc-timegrid-axis" },
              D(
                "div",
                { className: "fc-timegrid-col-frame" },
                D("div", { className: "fc-timegrid-now-indicator-container" }, typeof n == "number" && D(wo, { elClasses: ["fc-timegrid-now-indicator-arrow"], elStyle: { top: n }, isAxis: !0, date: e.nowDate }))
              )
            ),
            e.cells.map((f, h) => D(im, { key: f.key, elRef: this.cellElRefs.createRef(f.key), dateProfile: e.dateProfile, date: f.date, nowDate: e.nowDate, todayRange: e.todayRange, extraRenderProps: f.extraRenderProps, extraDataAttrs: f.extraDataAttrs, extraClassNames: f.extraClassNames, extraDateSpan: f.extraDateSpan, fgEventSegs: s[h], bgEventSegs: o[h], businessHourSegs: a[h], nowIndicatorSegs: c[h], dateSelectionSegs: l[h], eventDrag: u[h], eventResize: d[h], slatCoords: e.slatCoords, eventSelection: e.eventSelection, forPrint: e.forPrint }))
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
    e.onColCoords && e.clientWidth !== null && e.onColCoords(new pr(
      this.rootElRef.current,
      am(this.cellElRefs.currentMap, e.cells),
      !0,
      // horizontal
      !1
    ));
  }
}
function am(t, e) {
  return e.map((r) => t[r.key]);
}
class lm extends ft {
  constructor() {
    super(...arguments), this.processSlotOptions = se(cm), this.state = {
      slatCoords: null
    }, this.handleRootEl = (e) => {
      e ? this.context.registerInteractiveComponent(this, {
        el: e,
        isHitComboAllowed: this.props.isHitComboAllowed
      }) : this.context.unregisterInteractiveComponent(this);
    }, this.handleScrollRequest = (e) => {
      let { onScrollTopRequest: r } = this.props, { slatCoords: n } = this.state;
      if (r && n) {
        if (e.time) {
          let i = n.computeTimeTop(e.time);
          i = Math.ceil(i), i && (i += 1), r(i);
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
    let { props: e, state: r } = this;
    return D(
      "div",
      { className: "fc-timegrid-body", ref: this.handleRootEl, style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: e.clientWidth,
        minWidth: e.tableMinWidth
      } },
      D(qv, { axis: e.axis, dateProfile: e.dateProfile, slatMetas: e.slatMetas, clientWidth: e.clientWidth, minHeight: e.expandRows ? e.clientHeight : "", tableMinWidth: e.tableMinWidth, tableColGroupNode: e.axis ? e.tableColGroupNode : null, onCoords: this.handleSlatCoords }),
      D(om, { cells: e.cells, axis: e.axis, dateProfile: e.dateProfile, businessHourSegs: e.businessHourSegs, bgEventSegs: e.bgEventSegs, fgEventSegs: e.fgEventSegs, dateSelectionSegs: e.dateSelectionSegs, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, todayRange: e.todayRange, nowDate: e.nowDate, nowIndicatorSegs: e.nowIndicatorSegs, clientWidth: e.clientWidth, tableMinWidth: e.tableMinWidth, tableColGroupNode: e.tableColGroupNode, slatCoords: r.slatCoords, onColCoords: this.handleColCoords, forPrint: e.forPrint })
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
  queryHit(e, r) {
    let { dateEnv: n, options: i } = this.context, { colCoords: s } = this, { dateProfile: o } = this.props, { slatCoords: a } = this.state, { snapDuration: c, snapsPerSlot: l } = this.processSlotOptions(this.props.slotDuration, i.snapDuration), u = s.leftToIndex(e), d = a.positions.topToIndex(r);
    if (u != null && d != null) {
      let f = this.props.cells[u], h = a.positions.tops[d], p = a.positions.getHeight(d), v = (r - h) / p, b = Math.floor(v * l), w = d * l + b, x = this.props.cells[u].date, g = ws(o.slotMinTime, qd(c, w)), m = n.add(x, g), E = n.add(m, c);
      return {
        dateProfile: o,
        dateSpan: Object.assign({ range: { start: m, end: E }, allDay: !1 }, f.extraDateSpan),
        dayEl: s.els[u],
        rect: {
          left: s.lefts[u],
          right: s.rights[u],
          top: h,
          bottom: h + p
        },
        layer: 0
      };
    }
    return null;
  }
}
function cm(t, e) {
  let r = e || t, n = Ks(t, r);
  return n === null && (r = t, n = 1), { snapDuration: r, snapsPerSlot: n };
}
class um extends Qc {
  sliceRange(e, r) {
    let n = [];
    for (let i = 0; i < r.length; i += 1) {
      let s = Zt(e, r[i]);
      s && n.push({
        start: s.start,
        end: s.end,
        isStart: s.start.valueOf() === e.start.valueOf(),
        isEnd: s.end.valueOf() === e.end.valueOf(),
        col: i
      });
    }
    return n;
  }
}
class fm extends ft {
  constructor() {
    super(...arguments), this.buildDayRanges = se(dm), this.slicer = new um(), this.timeColsRef = Ue();
  }
  render() {
    let { props: e, context: r } = this, { dateProfile: n, dayTableModel: i } = e, { nowIndicator: s, nextDayThreshold: o } = r.options, a = this.buildDayRanges(i, n, r.dateEnv);
    return D(Vr, { unit: s ? "minute" : "day" }, (c, l) => D(lm, Object.assign({ ref: this.timeColsRef }, this.slicer.sliceProps(e, n, null, r, a), { forPrint: e.forPrint, axis: e.axis, dateProfile: n, slatMetas: e.slatMetas, slotDuration: e.slotDuration, cells: i.cells[0], tableColGroupNode: e.tableColGroupNode, tableMinWidth: e.tableMinWidth, clientWidth: e.clientWidth, clientHeight: e.clientHeight, expandRows: e.expandRows, nowDate: c, nowIndicatorSegs: s && this.slicer.sliceNowDate(c, n, o, r, a), todayRange: l, onScrollTopRequest: e.onScrollTopRequest, onSlatCoords: e.onSlatCoords })));
  }
}
function dm(t, e, r) {
  let n = [];
  for (let i of t.headerDates)
    n.push({
      start: r.add(i, e.slotMinTime),
      end: r.add(i, e.slotMaxTime)
    });
  return n;
}
const za = [
  { hours: 1 },
  { minutes: 30 },
  { minutes: 15 },
  { seconds: 30 },
  { seconds: 15 }
];
function hm(t, e, r, n, i) {
  let s = /* @__PURE__ */ new Date(0), o = t, a = pe(0), c = r || pm(n), l = [];
  for (; tt(o) < tt(e); ) {
    let u = i.add(s, o), d = Ks(a, c) !== null;
    l.push({
      date: u,
      time: o,
      key: u.toISOString(),
      isoTimeStr: f0(u),
      isLabeled: d
    }), o = ws(o, n), a = ws(a, n);
  }
  return l;
}
function pm(t) {
  let e, r, n;
  for (e = za.length - 1; e >= 0; e -= 1)
    if (r = pe(za[e]), n = Ks(r, t), n !== null && n > 1)
      return r;
  return t;
}
class gm extends Uv {
  constructor() {
    super(...arguments), this.buildTimeColsModel = se(vm), this.buildSlatMetas = se(hm);
  }
  render() {
    let { options: e, dateEnv: r, dateProfileGenerator: n } = this.context, { props: i } = this, { dateProfile: s } = i, o = this.buildTimeColsModel(s, n), a = this.allDaySplitter.splitProps(i), c = this.buildSlatMetas(s.slotMinTime, s.slotMaxTime, e.slotLabelInterval, e.slotDuration, r), { dayMinWidth: l } = e, u = !l, d = l, f = e.dayHeaders && D(Yc, { dates: o.headerDates, dateProfile: s, datesRepDistinctDays: !0, renderIntro: u ? this.renderHeadAxis : null }), h = e.allDaySlot !== !1 && ((v) => D(Cu, Object.assign({}, a.allDay, { dateProfile: s, dayTableModel: o, nextDayThreshold: e.nextDayThreshold, tableMinWidth: v.tableMinWidth, colGroupNode: v.tableColGroupNode, renderRowIntro: u ? this.renderTableRowAxis : null, showWeekNumbers: !1, expandRows: !1, headerAlignElRef: this.headerElRef, clientWidth: v.clientWidth, clientHeight: v.clientHeight, forPrint: i.forPrint }, this.getAllDayMaxEventProps()))), p = (v) => D(fm, Object.assign({}, a.timed, { dayTableModel: o, dateProfile: s, axis: u, slotDuration: e.slotDuration, slatMetas: c, forPrint: i.forPrint, tableColGroupNode: v.tableColGroupNode, tableMinWidth: v.tableMinWidth, clientWidth: v.clientWidth, clientHeight: v.clientHeight, onSlatCoords: this.handleSlatCoords, expandRows: v.expandRows, onScrollTopRequest: this.handleScrollTopRequest }));
    return d ? this.renderHScrollLayout(f, h, p, o.colCnt, l, c, this.state.slatCoords) : this.renderSimpleLayout(f, h, p);
  }
}
function vm(t, e) {
  let r = new Gc(t.renderRange, e);
  return new $c(r, !1);
}
const mm = {
  allDaySlot: Boolean
};
var bm = St({
  name: "@fullcalendar/timegrid",
  initialView: "timeGridWeek",
  optionRefiners: mm,
  views: {
    timeGrid: {
      component: gm,
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
mo.touchMouseIgnoreWait = 500;
let Ms = 0, zn = 0, Ns = !1;
class ku {
  constructor(e) {
    this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = (r) => {
      if (!this.shouldIgnoreMouse() && ym(r) && this.tryStart(r)) {
        let n = this.createEventFromMouse(r, !0);
        this.emitter.trigger("pointerdown", n), this.initScrollWatch(n), this.shouldIgnoreMove || document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("mouseup", this.handleMouseUp);
      }
    }, this.handleMouseMove = (r) => {
      let n = this.createEventFromMouse(r);
      this.recordCoords(n), this.emitter.trigger("pointermove", n);
    }, this.handleMouseUp = (r) => {
      document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), this.emitter.trigger("pointerup", this.createEventFromMouse(r)), this.cleanup();
    }, this.handleTouchStart = (r) => {
      if (this.tryStart(r)) {
        this.isTouchDragging = !0;
        let n = this.createEventFromTouch(r, !0);
        this.emitter.trigger("pointerdown", n), this.initScrollWatch(n);
        let i = r.target;
        this.shouldIgnoreMove || i.addEventListener("touchmove", this.handleTouchMove), i.addEventListener("touchend", this.handleTouchEnd), i.addEventListener("touchcancel", this.handleTouchEnd), window.addEventListener("scroll", this.handleTouchScroll, !0);
      }
    }, this.handleTouchMove = (r) => {
      let n = this.createEventFromTouch(r);
      this.recordCoords(n), this.emitter.trigger("pointermove", n);
    }, this.handleTouchEnd = (r) => {
      if (this.isDragging) {
        let n = r.target;
        n.removeEventListener("touchmove", this.handleTouchMove), n.removeEventListener("touchend", this.handleTouchEnd), n.removeEventListener("touchcancel", this.handleTouchEnd), window.removeEventListener("scroll", this.handleTouchScroll, !0), this.emitter.trigger("pointerup", this.createEventFromTouch(r)), this.cleanup(), this.isTouchDragging = !1, xm();
      }
    }, this.handleTouchScroll = () => {
      this.wasTouchScroll = !0;
    }, this.handleScroll = (r) => {
      if (!this.shouldIgnoreMove) {
        let n = window.pageXOffset - this.prevScrollX + this.prevPageX, i = window.pageYOffset - this.prevScrollY + this.prevPageY;
        this.emitter.trigger("pointermove", {
          origEvent: r,
          isTouch: this.isTouchDragging,
          subjectEl: this.subjectEl,
          pageX: n,
          pageY: i,
          deltaX: n - this.origPageX,
          deltaY: i - this.origPageY
        });
      }
    }, this.containerEl = e, this.emitter = new Ii(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), Em();
  }
  destroy() {
    this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), wm();
  }
  tryStart(e) {
    let r = this.querySubjectEl(e), n = e.target;
    return r && (!this.handleSelector || Oe(n, this.handleSelector)) ? (this.subjectEl = r, this.isDragging = !0, this.wasTouchScroll = !1, !0) : !1;
  }
  cleanup() {
    Ns = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
  }
  querySubjectEl(e) {
    return this.selector ? Oe(e.target, this.selector) : this.containerEl;
  }
  shouldIgnoreMouse() {
    return Ms || this.isTouchDragging;
  }
  // can be called by user of this class, to cancel touch-based scrolling for the current drag
  cancelTouchScroll() {
    this.isDragging && (Ns = !0);
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
  createEventFromMouse(e, r) {
    let n = 0, i = 0;
    return r ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (n = e.pageX - this.origPageX, i = e.pageY - this.origPageY), {
      origEvent: e,
      isTouch: !1,
      subjectEl: this.subjectEl,
      pageX: e.pageX,
      pageY: e.pageY,
      deltaX: n,
      deltaY: i
    };
  }
  createEventFromTouch(e, r) {
    let n = e.touches, i, s, o = 0, a = 0;
    return n && n.length ? (i = n[0].pageX, s = n[0].pageY) : (i = e.pageX, s = e.pageY), r ? (this.origPageX = i, this.origPageY = s) : (o = i - this.origPageX, a = s - this.origPageY), {
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
function ym(t) {
  return t.button === 0 && !t.ctrlKey;
}
function xm() {
  Ms += 1, setTimeout(() => {
    Ms -= 1;
  }, mo.touchMouseIgnoreWait);
}
function Em() {
  zn += 1, zn === 1 && window.addEventListener("touchmove", Iu, { passive: !1 });
}
function wm() {
  zn -= 1, zn || window.removeEventListener("touchmove", Iu, { passive: !1 });
}
function Iu(t) {
  Ns && t.preventDefault();
}
class _m {
  constructor() {
    this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0;
  }
  start(e, r, n) {
    this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = r - window.pageXOffset, this.origScreenY = n - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition();
  }
  handleMove(e, r) {
    this.deltaX = e - window.pageXOffset - this.origScreenX, this.deltaY = r - window.pageYOffset - this.origScreenY, this.updateElPosition();
  }
  // can be called before start
  setIsVisible(e) {
    e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e);
  }
  // always async
  stop(e, r) {
    let n = () => {
      this.cleanup(), r();
    };
    e && this.mirrorEl && this.isVisible && this.revertDuration && // if 0, transition won't work
    (this.deltaX || this.deltaY) ? this.doRevertAnimation(n, this.revertDuration) : setTimeout(n, 0);
  }
  doRevertAnimation(e, r) {
    let n = this.mirrorEl, i = this.sourceEl.getBoundingClientRect();
    n.style.transition = "top " + r + "ms,left " + r + "ms", Or(n, {
      left: i.left,
      top: i.top
    }), kd(n, () => {
      n.style.transition = "", e();
    });
  }
  cleanup() {
    this.mirrorEl && (Qs(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null;
  }
  updateElPosition() {
    this.sourceEl && this.isVisible && Or(this.getMirrorEl(), {
      left: this.sourceElRect.left + this.deltaX,
      top: this.sourceElRect.top + this.deltaY
    });
  }
  getMirrorEl() {
    let e = this.sourceElRect, r = this.mirrorEl;
    return r || (r = this.mirrorEl = this.sourceEl.cloneNode(!0), r.style.userSelect = "none", r.classList.add("fc-event-dragging"), Or(r, {
      position: "fixed",
      zIndex: this.zIndex,
      visibility: "",
      boxSizing: "border-box",
      width: e.right - e.left,
      height: e.bottom - e.top,
      right: "auto",
      bottom: "auto",
      margin: 0
    }), this.parentNode.appendChild(r)), r;
  }
}
class Mu extends fo {
  constructor(e, r) {
    super(), this.handleScroll = () => {
      this.scrollTop = this.scrollController.getScrollTop(), this.scrollLeft = this.scrollController.getScrollLeft(), this.handleScrollChange();
    }, this.scrollController = e, this.doesListening = r, this.scrollTop = this.origScrollTop = e.getScrollTop(), this.scrollLeft = this.origScrollLeft = e.getScrollLeft(), this.scrollWidth = e.getScrollWidth(), this.scrollHeight = e.getScrollHeight(), this.clientWidth = e.getClientWidth(), this.clientHeight = e.getClientHeight(), this.clientRect = this.computeClientRect(), this.doesListening && this.getEventTarget().addEventListener("scroll", this.handleScroll);
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
class Nu extends Mu {
  constructor(e, r) {
    super(new uh(e), r);
  }
  getEventTarget() {
    return this.scrollController.el;
  }
  computeClientRect() {
    return sh(this.scrollController.el);
  }
}
class Sm extends Mu {
  constructor(e) {
    super(new fh(), e);
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
const Ua = typeof performance == "function" ? performance.now : Date.now;
class Am {
  constructor() {
    this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = () => {
      if (this.isAnimating) {
        let e = this.computeBestEdge(this.pointerScreenX + window.pageXOffset, this.pointerScreenY + window.pageYOffset);
        if (e) {
          let r = Ua();
          this.handleSide(e, (r - this.msSinceRequest) / 1e3), this.requestAnimation(r);
        } else
          this.isAnimating = !1;
      }
    };
  }
  start(e, r, n) {
    this.isEnabled && (this.scrollCaches = this.buildCaches(n), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, r));
  }
  handleMove(e, r) {
    if (this.isEnabled) {
      let n = e - window.pageXOffset, i = r - window.pageYOffset, s = this.pointerScreenY === null ? 0 : i - this.pointerScreenY, o = this.pointerScreenX === null ? 0 : n - this.pointerScreenX;
      s < 0 ? this.everMovedUp = !0 : s > 0 && (this.everMovedDown = !0), o < 0 ? this.everMovedLeft = !0 : o > 0 && (this.everMovedRight = !0), this.pointerScreenX = n, this.pointerScreenY = i, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(Ua()));
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
  handleSide(e, r) {
    let { scrollCache: n } = e, { edgeThreshold: i } = this, s = i - e.distance, o = (
      // the closer to the edge, the faster we scroll
      s * s / (i * i) * // quadratic
      this.maxVelocity * r
    ), a = 1;
    switch (e.name) {
      case "left":
        a = -1;
      case "right":
        n.setScrollLeft(n.getScrollLeft() + o * a);
        break;
      case "top":
        a = -1;
      case "bottom":
        n.setScrollTop(n.getScrollTop() + o * a);
        break;
    }
  }
  // left/top are relative to document topleft
  computeBestEdge(e, r) {
    let { edgeThreshold: n } = this, i = null, s = this.scrollCaches || [];
    for (let o of s) {
      let a = o.clientRect, c = e - a.left, l = a.right - e, u = r - a.top, d = a.bottom - r;
      c >= 0 && l >= 0 && u >= 0 && d >= 0 && (u <= n && this.everMovedUp && o.canScrollUp() && (!i || i.distance > u) && (i = { scrollCache: o, name: "top", distance: u }), d <= n && this.everMovedDown && o.canScrollDown() && (!i || i.distance > d) && (i = { scrollCache: o, name: "bottom", distance: d }), c <= n && this.everMovedLeft && o.canScrollLeft() && (!i || i.distance > c) && (i = { scrollCache: o, name: "left", distance: c }), l <= n && this.everMovedRight && o.canScrollRight() && (!i || i.distance > l) && (i = { scrollCache: o, name: "right", distance: l }));
    }
    return i;
  }
  buildCaches(e) {
    return this.queryScrollEls(e).map((r) => r === window ? new Sm(!1) : new Nu(r, !1));
  }
  queryScrollEls(e) {
    let r = [];
    for (let n of this.scrollQuery)
      typeof n == "object" ? r.push(n) : r.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(n)));
    return r;
  }
}
class qr extends Vh {
  constructor(e, r) {
    super(e), this.containerEl = e, this.delay = null, this.minDistance = 0, this.touchScrollAllowed = !0, this.mirrorNeedsRevert = !1, this.isInteracting = !1, this.isDragging = !1, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.delayTimeoutId = null, this.onPointerDown = (i) => {
      this.isDragging || (this.isInteracting = !0, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, Id(document.body), Nd(document.body), i.isTouch || i.origEvent.preventDefault(), this.emitter.trigger("pointerdown", i), this.isInteracting && // not destroyed via pointerdown handler
      !this.pointer.shouldIgnoreMove && (this.mirror.setIsVisible(!1), this.mirror.start(i.subjectEl, i.pageX, i.pageY), this.startDelay(i), this.minDistance || this.handleDistanceSurpassed(i)));
    }, this.onPointerMove = (i) => {
      if (this.isInteracting) {
        if (this.emitter.trigger("pointermove", i), !this.isDistanceSurpassed) {
          let s = this.minDistance, o, { deltaX: a, deltaY: c } = i;
          o = a * a + c * c, o >= s * s && this.handleDistanceSurpassed(i);
        }
        this.isDragging && (i.origEvent.type !== "scroll" && (this.mirror.handleMove(i.pageX, i.pageY), this.autoScroller.handleMove(i.pageX, i.pageY)), this.emitter.trigger("dragmove", i));
      }
    }, this.onPointerUp = (i) => {
      this.isInteracting && (this.isInteracting = !1, Md(document.body), Od(document.body), this.emitter.trigger("pointerup", i), this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(i)), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null));
    };
    let n = this.pointer = new ku(e);
    n.emitter.on("pointerdown", this.onPointerDown), n.emitter.on("pointermove", this.onPointerMove), n.emitter.on("pointerup", this.onPointerUp), r && (n.selector = r), this.mirror = new _m(), this.autoScroller = new Am();
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
class Cm {
  constructor(e) {
    this.origRect = uo(e), this.scrollCaches = Dc(e).map((r) => new Nu(r, !0));
  }
  destroy() {
    for (let e of this.scrollCaches)
      e.destroy();
  }
  computeLeft() {
    let e = this.origRect.left;
    for (let r of this.scrollCaches)
      e += r.origScrollLeft - r.getScrollLeft();
    return e;
  }
  computeTop() {
    let e = this.origRect.top;
    for (let r of this.scrollCaches)
      e += r.origScrollTop - r.getScrollTop();
    return e;
  }
  isWithinClipping(e, r) {
    let n = { left: e, top: r };
    for (let i of this.scrollCaches)
      if (!Dm(i.getEventTarget()) && !U0(n, i.clientRect))
        return !1;
    return !0;
  }
}
function Dm(t) {
  let e = t.tagName;
  return e === "HTML" || e === "BODY";
}
class Mi {
  constructor(e, r) {
    this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = (n) => {
      let { dragging: i } = this;
      this.initialHit = null, this.movingHit = null, this.finalHit = null, this.prepareHits(), this.processFirstCoord(n), this.initialHit || !this.requireInitial ? (i.setIgnoreMove(!1), this.emitter.trigger("pointerdown", n)) : i.setIgnoreMove(!0);
    }, this.handleDragStart = (n) => {
      this.emitter.trigger("dragstart", n), this.handleMove(n, !0);
    }, this.handleDragMove = (n) => {
      this.emitter.trigger("dragmove", n), this.handleMove(n);
    }, this.handlePointerUp = (n) => {
      this.releaseHits(), this.emitter.trigger("pointerup", n);
    }, this.handleDragEnd = (n) => {
      this.movingHit && this.emitter.trigger("hitupdate", null, !0, n), this.finalHit = this.movingHit, this.movingHit = null, this.emitter.trigger("dragend", n);
    }, this.droppableStore = r, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new Ii();
  }
  // sets initialHit
  // sets coordAdjust
  processFirstCoord(e) {
    let r = { left: e.pageX, top: e.pageY }, n = r, i = e.subjectEl, s;
    i instanceof HTMLElement && (s = uo(i), n = W0(n, s));
    let o = this.initialHit = this.queryHitForOffset(n.left, n.top);
    if (o) {
      if (this.useSubjectCenter && s) {
        let a = _c(s, o.rect);
        a && (n = j0(a));
      }
      this.coordAdjust = V0(n, r);
    } else
      this.coordAdjust = { left: 0, top: 0 };
  }
  handleMove(e, r) {
    let n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
    (r || !Ni(this.movingHit, n)) && (this.movingHit = n, this.emitter.trigger("hitupdate", n, !1, e));
  }
  prepareHits() {
    this.offsetTrackers = Et(this.droppableStore, (e) => (e.component.prepareHits(), new Cm(e.el)));
  }
  releaseHits() {
    let { offsetTrackers: e } = this;
    for (let r in e)
      e[r].destroy();
    this.offsetTrackers = {};
  }
  queryHitForOffset(e, r) {
    let { droppableStore: n, offsetTrackers: i } = this, s = null;
    for (let o in n) {
      let a = n[o].component, c = i[o];
      if (c && // wasn't destroyed mid-drag
      c.isWithinClipping(e, r)) {
        let l = c.computeLeft(), u = c.computeTop(), d = e - l, f = r - u, { origRect: h } = c, p = h.right - h.left, v = h.bottom - h.top;
        if (
          // must be within the element's bounds
          d >= 0 && d < p && f >= 0 && f < v
        ) {
          let b = a.queryHit(d, f, p, v);
          b && // make sure the hit is within activeRange, meaning it's not a dead cell
          ki(b.dateProfile.activeRange, b.dateSpan.range) && (!s || b.layer > s.layer) && (b.componentId = o, b.context = a.context, b.rect.left += l, b.rect.right += l, b.rect.top += u, b.rect.bottom += u, s = b);
        }
      }
    }
    return s;
  }
}
function Ni(t, e) {
  return !t && !e ? !0 : !!t != !!e ? !1 : Ih(t.dateSpan, e.dateSpan);
}
function Ou(t, e) {
  let r = {};
  for (let n of e.pluginHooks.datePointTransforms)
    Object.assign(r, n(t, e));
  return Object.assign(r, Rm(t, e.dateEnv)), r;
}
function Rm(t, e) {
  return {
    date: e.toDate(t.range.start),
    dateStr: e.formatIso(t.range.start, { omitTime: t.allDay }),
    allDay: t.allDay
  };
}
class Tm extends br {
  constructor(e) {
    super(e), this.handlePointerDown = (n) => {
      let { dragging: i } = this, s = n.origEvent.target;
      i.setIgnoreMove(!this.component.isValidDateDownEl(s));
    }, this.handleDragEnd = (n) => {
      let { component: i } = this, { pointer: s } = this.dragging;
      if (!s.wasTouchScroll) {
        let { initialHit: o, finalHit: a } = this.hitDragging;
        if (o && a && Ni(o, a)) {
          let { context: c } = i, l = Object.assign(Object.assign({}, Ou(o.dateSpan, c)), { dayEl: o.dayEl, jsEvent: n.origEvent, view: c.viewApi || c.calendarApi.view });
          c.emitter.trigger("dateClick", l);
        }
      }
    }, this.dragging = new qr(e.el), this.dragging.autoScroller.isEnabled = !1;
    let r = this.hitDragging = new Mi(this.dragging, vo(e));
    r.emitter.on("pointerdown", this.handlePointerDown), r.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
}
class km extends br {
  constructor(e) {
    super(e), this.dragSelection = null, this.handlePointerDown = (o) => {
      let { component: a, dragging: c } = this, { options: l } = a.context, u = l.selectable && a.isValidDateDownEl(o.origEvent.target);
      c.setIgnoreMove(!u), c.delay = o.isTouch ? Im(a) : null;
    }, this.handleDragStart = (o) => {
      this.component.context.calendarApi.unselect(o);
    }, this.handleHitUpdate = (o, a) => {
      let { context: c } = this.component, l = null, u = !1;
      if (o) {
        let d = this.hitDragging.initialHit;
        o.componentId === d.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(d, o) || (l = Mm(d, o, c.pluginHooks.dateSelectionTransformers)), (!l || !op(l, o.dateProfile, c)) && (u = !0, l = null);
      }
      l ? c.dispatch({ type: "SELECT_DATES", selection: l }) : a || c.dispatch({ type: "UNSELECT_DATES" }), u ? Zs() : Xs(), a || (this.dragSelection = l);
    }, this.handlePointerUp = (o) => {
      this.dragSelection && (kc(this.dragSelection, o, this.component.context), this.dragSelection = null);
    };
    let { component: r } = e, { options: n } = r.context, i = this.dragging = new qr(e.el);
    i.touchScrollAllowed = !1, i.minDistance = n.selectMinDistance || 0, i.autoScroller.isEnabled = n.dragScroll;
    let s = this.hitDragging = new Mi(this.dragging, vo(e));
    s.emitter.on("pointerdown", this.handlePointerDown), s.emitter.on("dragstart", this.handleDragStart), s.emitter.on("hitupdate", this.handleHitUpdate), s.emitter.on("pointerup", this.handlePointerUp);
  }
  destroy() {
    this.dragging.destroy();
  }
}
function Im(t) {
  let { options: e } = t.context, r = e.selectLongPressDelay;
  return r == null && (r = e.longPressDelay), r;
}
function Mm(t, e, r) {
  let n = t.dateSpan, i = e.dateSpan, s = [
    n.range.start,
    n.range.end,
    i.range.start,
    i.range.end
  ];
  s.sort(Fd);
  let o = {};
  for (let a of r) {
    let c = a(t, e);
    if (c === !1)
      return null;
    c && Object.assign(o, c);
  }
  return o.range = { start: s[0], end: s[3] }, o.allDay = n.allDay, o;
}
class Yr extends br {
  constructor(e) {
    super(e), this.subjectEl = null, this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (o) => {
      let a = o.origEvent.target, { component: c, dragging: l } = this, { mirror: u } = l, { options: d } = c.context, f = c.context;
      this.subjectEl = o.subjectEl;
      let h = this.subjectSeg = gr(o.subjectEl), v = (this.eventRange = h.eventRange).instance.instanceId;
      this.relevantEvents = so(f.getCurrentData().eventStore, v), l.minDistance = o.isTouch ? 0 : d.eventDragMinDistance, l.delay = // only do a touch delay if touch and this event hasn't been selected yet
      o.isTouch && v !== c.props.eventSelection ? Om(c) : null, d.fixedMirrorParent ? u.parentNode = d.fixedMirrorParent : u.parentNode = Oe(a, ".fc"), u.revertDuration = d.dragRevertDuration;
      let b = c.isValidSegDownEl(a) && !Oe(a, ".fc-event-resizer");
      l.setIgnoreMove(!b), this.isDragging = b && o.subjectEl.classList.contains("fc-event-draggable");
    }, this.handleDragStart = (o) => {
      let a = this.component.context, c = this.eventRange, l = c.instance.instanceId;
      o.isTouch ? l !== this.component.props.eventSelection && a.dispatch({ type: "SELECT_EVENT", eventInstanceId: l }) : a.dispatch({ type: "UNSELECT_EVENT" }), this.isDragging && (a.calendarApi.unselect(o), a.emitter.trigger("eventDragStart", {
        el: this.subjectEl,
        event: new we(a, c.def, c.instance),
        jsEvent: o.origEvent,
        view: a.viewApi
      }));
    }, this.handleHitUpdate = (o, a) => {
      if (!this.isDragging)
        return;
      let c = this.relevantEvents, l = this.hitDragging.initialHit, u = this.component.context, d = null, f = null, h = null, p = !1, v = {
        affectedEvents: c,
        mutatedEvents: Ge(),
        isEvent: !0
      };
      if (o) {
        d = o.context;
        let b = d.options;
        u === d || b.editable && b.droppable ? (f = Nm(l, o, d.getCurrentData().pluginHooks.eventDragMutationMassagers), f && (h = po(c, d.getCurrentData().eventUiBases, f, d), v.mutatedEvents = h, Kc(v, o.dateProfile, d) || (p = !0, f = null, h = null, v.mutatedEvents = Ge()))) : d = null;
      }
      this.displayDrag(d, v), p ? Zs() : Xs(), a || (u === d && // TODO: write test for this
      Ni(l, o) && (f = null), this.dragging.setMirrorNeedsRevert(!f), this.dragging.setMirrorIsVisible(!o || !this.subjectEl.getRootNode().querySelector(".fc-event-mirror")), this.receivingContext = d, this.validMutation = f, this.mutatedRelevantEvents = h);
    }, this.handlePointerUp = () => {
      this.isDragging || this.cleanup();
    }, this.handleDragEnd = (o) => {
      if (this.isDragging) {
        let a = this.component.context, c = a.viewApi, { receivingContext: l, validMutation: u } = this, d = this.eventRange.def, f = this.eventRange.instance, h = new we(a, d, f), p = this.relevantEvents, v = this.mutatedRelevantEvents, { finalHit: b } = this.hitDragging;
        if (this.clearDrag(), a.emitter.trigger("eventDragStop", {
          el: this.subjectEl,
          event: h,
          jsEvent: o.origEvent,
          view: c
        }), u) {
          if (l === a) {
            let w = new we(a, v.defs[d.defId], f ? v.instances[f.instanceId] : null);
            a.dispatch({
              type: "MERGE_EVENTS",
              eventStore: v
            });
            let x = {
              oldEvent: h,
              event: w,
              relatedEvents: Yt(v, a, f),
              revert() {
                a.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: p
                  // the pre-change data
                });
              }
            }, g = {};
            for (let m of a.getCurrentData().pluginHooks.eventDropTransformers)
              Object.assign(g, m(u, a));
            a.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, x), g), { el: o.subjectEl, delta: u.datesDelta, jsEvent: o.origEvent, view: c })), a.emitter.trigger("eventChange", x);
          } else if (l) {
            let w = {
              event: h,
              relatedEvents: Yt(p, a, f),
              revert() {
                a.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: p
                });
              }
            };
            a.emitter.trigger("eventLeave", Object.assign(Object.assign({}, w), { draggedEl: o.subjectEl, view: c })), a.dispatch({
              type: "REMOVE_EVENTS",
              eventStore: p
            }), a.emitter.trigger("eventRemove", w);
            let x = v.defs[d.defId], g = v.instances[f.instanceId], m = new we(l, x, g);
            l.dispatch({
              type: "MERGE_EVENTS",
              eventStore: v
            });
            let E = {
              event: m,
              relatedEvents: Yt(v, l, g),
              revert() {
                l.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: v
                });
              }
            };
            l.emitter.trigger("eventAdd", E), o.isTouch && l.dispatch({
              type: "SELECT_EVENT",
              eventInstanceId: f.instanceId
            }), l.emitter.trigger("drop", Object.assign(Object.assign({}, Ou(b.dateSpan, l)), { draggedEl: o.subjectEl, jsEvent: o.origEvent, view: b.context.viewApi })), l.emitter.trigger("eventReceive", Object.assign(Object.assign({}, E), { draggedEl: o.subjectEl, view: b.context.viewApi }));
          }
        } else
          a.emitter.trigger("_noEventDrop");
      }
      this.cleanup();
    };
    let { component: r } = this, { options: n } = r.context, i = this.dragging = new qr(e.el);
    i.pointer.selector = Yr.SELECTOR, i.touchScrollAllowed = !1, i.autoScroller.isEnabled = n.dragScroll;
    let s = this.hitDragging = new Mi(this.dragging, Ts);
    s.useSubjectCenter = e.useEventCenter, s.emitter.on("pointerdown", this.handlePointerDown), s.emitter.on("dragstart", this.handleDragStart), s.emitter.on("hitupdate", this.handleHitUpdate), s.emitter.on("pointerup", this.handlePointerUp), s.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  // render a drag state on the next receivingCalendar
  displayDrag(e, r) {
    let n = this.component.context, i = this.receivingContext;
    i && i !== e && (i === n ? i.dispatch({
      type: "SET_EVENT_DRAG",
      state: {
        affectedEvents: r.affectedEvents,
        mutatedEvents: Ge(),
        isEvent: !0
      }
    }) : i.dispatch({ type: "UNSET_EVENT_DRAG" })), e && e.dispatch({ type: "SET_EVENT_DRAG", state: r });
  }
  clearDrag() {
    let e = this.component.context, { receivingContext: r } = this;
    r && r.dispatch({ type: "UNSET_EVENT_DRAG" }), e !== r && e.dispatch({ type: "UNSET_EVENT_DRAG" });
  }
  cleanup() {
    this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null;
  }
}
Yr.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
function Nm(t, e, r) {
  let n = t.dateSpan, i = e.dateSpan, s = n.range.start, o = i.range.start, a = {};
  n.allDay !== i.allDay && (a.allDay = i.allDay, a.hasEnd = e.context.options.allDayMaintainDuration, i.allDay && (s = xe(s)));
  let c = lr(s, o, t.context.dateEnv, t.componentId === e.componentId ? t.largeUnit : null);
  c.milliseconds && (a.allDay = !1);
  let l = {
    datesDelta: c,
    standardProps: a
  };
  for (let u of r)
    u(l, t, e);
  return l;
}
function Om(t) {
  let { options: e } = t.context, r = e.eventLongPressDelay;
  return r == null && (r = e.longPressDelay), r;
}
class Bm extends br {
  constructor(e) {
    super(e), this.draggingSegEl = null, this.draggingSeg = null, this.eventRange = null, this.relevantEvents = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (s) => {
      let { component: o } = this, a = this.querySegEl(s), c = gr(a), l = this.eventRange = c.eventRange;
      this.dragging.minDistance = o.context.options.eventDragMinDistance, this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(s.origEvent.target) || s.isTouch && this.component.props.eventSelection !== l.instance.instanceId);
    }, this.handleDragStart = (s) => {
      let { context: o } = this.component, a = this.eventRange;
      this.relevantEvents = so(o.getCurrentData().eventStore, this.eventRange.instance.instanceId);
      let c = this.querySegEl(s);
      this.draggingSegEl = c, this.draggingSeg = gr(c), o.calendarApi.unselect(), o.emitter.trigger("eventResizeStart", {
        el: c,
        event: new we(o, a.def, a.instance),
        jsEvent: s.origEvent,
        view: o.viewApi
      });
    }, this.handleHitUpdate = (s, o, a) => {
      let { context: c } = this.component, l = this.relevantEvents, u = this.hitDragging.initialHit, d = this.eventRange.instance, f = null, h = null, p = !1, v = {
        affectedEvents: l,
        mutatedEvents: Ge(),
        isEvent: !0
      };
      s && (s.componentId === u.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(u, s) || (f = Pm(u, s, a.subjectEl.classList.contains("fc-event-resizer-start"), d.range))), f && (h = po(l, c.getCurrentData().eventUiBases, f, c), v.mutatedEvents = h, Kc(v, s.dateProfile, c) || (p = !0, f = null, h = null, v.mutatedEvents = null)), h ? c.dispatch({
        type: "SET_EVENT_RESIZE",
        state: v
      }) : c.dispatch({ type: "UNSET_EVENT_RESIZE" }), p ? Zs() : Xs(), o || (f && Ni(u, s) && (f = null), this.validMutation = f, this.mutatedRelevantEvents = h);
    }, this.handleDragEnd = (s) => {
      let { context: o } = this.component, a = this.eventRange.def, c = this.eventRange.instance, l = new we(o, a, c), u = this.relevantEvents, d = this.mutatedRelevantEvents;
      if (o.emitter.trigger("eventResizeStop", {
        el: this.draggingSegEl,
        event: l,
        jsEvent: s.origEvent,
        view: o.viewApi
      }), this.validMutation) {
        let f = new we(o, d.defs[a.defId], c ? d.instances[c.instanceId] : null);
        o.dispatch({
          type: "MERGE_EVENTS",
          eventStore: d
        });
        let h = {
          oldEvent: l,
          event: f,
          relatedEvents: Yt(d, o, c),
          revert() {
            o.dispatch({
              type: "MERGE_EVENTS",
              eventStore: u
              // the pre-change events
            });
          }
        };
        o.emitter.trigger("eventResize", Object.assign(Object.assign({}, h), { el: this.draggingSegEl, startDelta: this.validMutation.startDelta || pe(0), endDelta: this.validMutation.endDelta || pe(0), jsEvent: s.origEvent, view: o.viewApi })), o.emitter.trigger("eventChange", h);
      } else
        o.emitter.trigger("_noEventResize");
      this.draggingSeg = null, this.relevantEvents = null, this.validMutation = null;
    };
    let { component: r } = e, n = this.dragging = new qr(e.el);
    n.pointer.selector = ".fc-event-resizer", n.touchScrollAllowed = !1, n.autoScroller.isEnabled = r.context.options.dragScroll;
    let i = this.hitDragging = new Mi(this.dragging, vo(e));
    i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  querySegEl(e) {
    return Oe(e.subjectEl, ".fc-event");
  }
}
function Pm(t, e, r, n) {
  let i = t.context.dateEnv, s = t.dateSpan.range.start, o = e.dateSpan.range.start, a = lr(s, o, i, t.largeUnit);
  if (r) {
    if (i.add(n.start, a) < n.end)
      return { startDelta: a };
  } else if (i.add(n.end, a) > n.start)
    return { endDelta: a };
  return null;
}
class Hm {
  constructor(e) {
    this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = (n) => {
      n.jsEvent && (this.isRecentPointerDateSelect = !0);
    }, this.onDocumentPointerDown = (n) => {
      let i = this.context.options.unselectCancel, s = uc(n.origEvent);
      this.matchesCancel = !!Oe(s, i), this.matchesEvent = !!Oe(s, Yr.SELECTOR);
    }, this.onDocumentPointerUp = (n) => {
      let { context: i } = this, { documentPointer: s } = this, o = i.getCurrentData();
      if (!s.wasTouchScroll) {
        if (o.dateSelection && // an existing date selection?
        !this.isRecentPointerDateSelect) {
          let a = i.options.unselectAuto;
          a && (!a || !this.matchesCancel) && i.calendarApi.unselect(n);
        }
        o.eventSelection && // an existing event selected?
        !this.matchesEvent && i.dispatch({ type: "UNSELECT_EVENT" });
      }
      this.isRecentPointerDateSelect = !1;
    };
    let r = this.documentPointer = new ku(document);
    r.shouldIgnoreMove = !0, r.shouldWatchScroll = !1, r.emitter.on("pointerdown", this.onDocumentPointerDown), r.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
  }
  destroy() {
    this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
  }
}
const Lm = {
  fixedMirrorParent: L
}, Fm = {
  dateClick: L,
  eventDragStart: L,
  eventDragStop: L,
  eventDrop: L,
  eventResizeStart: L,
  eventResizeStop: L,
  eventResize: L,
  drop: L,
  eventReceive: L,
  eventLeave: L
};
mo.dataAttrPrefix = "";
var zm = St({
  name: "@fullcalendar/interaction",
  componentInteractions: [Tm, km, Yr, Bm],
  calendarInteractions: [Hm],
  elementDraggingImpl: qr,
  optionRefiners: Lm,
  listenerRefiners: Fm
}), ae = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Um(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      if (this instanceof n) {
        var i = [null];
        i.push.apply(i, arguments);
        var s = Function.bind.apply(e, i);
        return new s();
      }
      return e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var Wa = {}, Wm = {
  get exports() {
    return Wa;
  },
  set exports(t) {
    Wa = t;
  }
};
function Mr(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Un = {}, jm = {
  get exports() {
    return Un;
  },
  set exports(t) {
    Un = t;
  }
};
const Vm = {}, qm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vm
}, Symbol.toStringTag, { value: "Module" })), Ym = /* @__PURE__ */ Um(qm);
var ja;
function de() {
  return ja || (ja = 1, function(t, e) {
    (function(r, n) {
      t.exports = n();
    })(ae, function() {
      var r = r || function(n, i) {
        var s;
        if (typeof window < "u" && window.crypto && (s = window.crypto), typeof self < "u" && self.crypto && (s = self.crypto), typeof globalThis < "u" && globalThis.crypto && (s = globalThis.crypto), !s && typeof window < "u" && window.msCrypto && (s = window.msCrypto), !s && typeof ae < "u" && ae.crypto && (s = ae.crypto), !s && typeof Mr == "function")
          try {
            s = Ym;
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
          return function(g) {
            var m;
            return x.prototype = g, m = new x(), x.prototype = null, m;
          };
        }(), c = {}, l = c.lib = {}, u = l.Base = function() {
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
              var g = a(this);
              return x && g.mixIn(x), (!g.hasOwnProperty("init") || this.init === g.init) && (g.init = function() {
                g.$super.init.apply(this, arguments);
              }), g.init.prototype = g, g.$super = this, g;
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
              for (var g in x)
                x.hasOwnProperty(g) && (this[g] = x[g]);
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
        }(), d = l.WordArray = u.extend({
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
          init: function(x, g) {
            x = this.words = x || [], g != i ? this.sigBytes = g : this.sigBytes = x.length * 4;
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
            return (x || h).stringify(this);
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
            var g = this.words, m = x.words, E = this.sigBytes, S = x.sigBytes;
            if (this.clamp(), E % 4)
              for (var C = 0; C < S; C++) {
                var T = m[C >>> 2] >>> 24 - C % 4 * 8 & 255;
                g[E + C >>> 2] |= T << 24 - (E + C) % 4 * 8;
              }
            else
              for (var B = 0; B < S; B += 4)
                g[E + B >>> 2] = m[B >>> 2];
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
            var x = this.words, g = this.sigBytes;
            x[g >>> 2] &= 4294967295 << 32 - g % 4 * 8, x.length = n.ceil(g / 4);
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
            for (var g = [], m = 0; m < x; m += 4)
              g.push(o());
            return new d.init(g, x);
          }
        }), f = c.enc = {}, h = f.Hex = {
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
            for (var g = x.words, m = x.sigBytes, E = [], S = 0; S < m; S++) {
              var C = g[S >>> 2] >>> 24 - S % 4 * 8 & 255;
              E.push((C >>> 4).toString(16)), E.push((C & 15).toString(16));
            }
            return E.join("");
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
            for (var g = x.length, m = [], E = 0; E < g; E += 2)
              m[E >>> 3] |= parseInt(x.substr(E, 2), 16) << 24 - E % 8 * 4;
            return new d.init(m, g / 2);
          }
        }, p = f.Latin1 = {
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
            for (var g = x.words, m = x.sigBytes, E = [], S = 0; S < m; S++) {
              var C = g[S >>> 2] >>> 24 - S % 4 * 8 & 255;
              E.push(String.fromCharCode(C));
            }
            return E.join("");
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
            for (var g = x.length, m = [], E = 0; E < g; E++)
              m[E >>> 2] |= (x.charCodeAt(E) & 255) << 24 - E % 4 * 8;
            return new d.init(m, g);
          }
        }, v = f.Utf8 = {
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
              return decodeURIComponent(escape(p.stringify(x)));
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
            return p.parse(unescape(encodeURIComponent(x)));
          }
        }, b = l.BufferedBlockAlgorithm = u.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new d.init(), this._nDataBytes = 0;
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
            typeof x == "string" && (x = v.parse(x)), this._data.concat(x), this._nDataBytes += x.sigBytes;
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
            var g, m = this._data, E = m.words, S = m.sigBytes, C = this.blockSize, T = C * 4, B = S / T;
            x ? B = n.ceil(B) : B = n.max((B | 0) - this._minBufferSize, 0);
            var A = B * C, I = n.min(A * 4, S);
            if (A) {
              for (var P = 0; P < A; P += C)
                this._doProcessBlock(E, P);
              g = E.splice(0, A), m.sigBytes -= I;
            }
            return new d.init(g, I);
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
        l.Hasher = b.extend({
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
            b.reset.call(this), this._doReset();
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
            var g = this._doFinalize();
            return g;
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
            return function(g, m) {
              return new x.init(m).finalize(g);
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
            return function(g, m) {
              return new w.HMAC.init(x, m).finalize(g);
            };
          }
        });
        var w = c.algo = {};
        return c;
      }(Math);
      return r;
    });
  }(jm)), Un;
}
var Wn = {}, Gm = {
  get exports() {
    return Wn;
  },
  set exports(t) {
    Wn = t;
  }
}, Va;
function Oi() {
  return Va || (Va = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(de());
    })(ae, function(r) {
      return function(n) {
        var i = r, s = i.lib, o = s.Base, a = s.WordArray, c = i.x64 = {};
        c.Word = o.extend({
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
          init: function(l, u) {
            this.high = l, this.low = u;
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
        }), c.WordArray = o.extend({
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
          init: function(l, u) {
            l = this.words = l || [], u != n ? this.sigBytes = u : this.sigBytes = l.length * 8;
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
            for (var l = this.words, u = l.length, d = [], f = 0; f < u; f++) {
              var h = l[f];
              d.push(h.high), d.push(h.low);
            }
            return a.create(d, this.sigBytes);
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
            for (var l = o.clone.call(this), u = l.words = this.words.slice(0), d = u.length, f = 0; f < d; f++)
              u[f] = u[f].clone();
            return l;
          }
        });
      }(), r;
    });
  }(Gm)), Wn;
}
var jn = {}, $m = {
  get exports() {
    return jn;
  },
  set exports(t) {
    jn = t;
  }
}, qa;
function Qm() {
  return qa || (qa = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(de());
    })(ae, function(r) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var n = r, i = n.lib, s = i.WordArray, o = s.init, a = s.init = function(c) {
            if (c instanceof ArrayBuffer && (c = new Uint8Array(c)), (c instanceof Int8Array || typeof Uint8ClampedArray < "u" && c instanceof Uint8ClampedArray || c instanceof Int16Array || c instanceof Uint16Array || c instanceof Int32Array || c instanceof Uint32Array || c instanceof Float32Array || c instanceof Float64Array) && (c = new Uint8Array(c.buffer, c.byteOffset, c.byteLength)), c instanceof Uint8Array) {
              for (var l = c.byteLength, u = [], d = 0; d < l; d++)
                u[d >>> 2] |= c[d] << 24 - d % 4 * 8;
              o.call(this, u, l);
            } else
              o.apply(this, arguments);
          };
          a.prototype = s;
        }
      }(), r.lib.WordArray;
    });
  }($m)), jn;
}
var Vn = {}, Zm = {
  get exports() {
    return Vn;
  },
  set exports(t) {
    Vn = t;
  }
}, Ya;
function Xm() {
  return Ya || (Ya = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(de());
    })(ae, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.WordArray, o = n.enc;
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
          stringify: function(c) {
            for (var l = c.words, u = c.sigBytes, d = [], f = 0; f < u; f += 2) {
              var h = l[f >>> 2] >>> 16 - f % 4 * 8 & 65535;
              d.push(String.fromCharCode(h));
            }
            return d.join("");
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
          parse: function(c) {
            for (var l = c.length, u = [], d = 0; d < l; d++)
              u[d >>> 1] |= c.charCodeAt(d) << 16 - d % 2 * 16;
            return s.create(u, l * 2);
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
          stringify: function(c) {
            for (var l = c.words, u = c.sigBytes, d = [], f = 0; f < u; f += 2) {
              var h = a(l[f >>> 2] >>> 16 - f % 4 * 8 & 65535);
              d.push(String.fromCharCode(h));
            }
            return d.join("");
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
          parse: function(c) {
            for (var l = c.length, u = [], d = 0; d < l; d++)
              u[d >>> 1] |= a(c.charCodeAt(d) << 16 - d % 2 * 16);
            return s.create(u, l * 2);
          }
        };
        function a(c) {
          return c << 8 & 4278255360 | c >>> 8 & 16711935;
        }
      }(), r.enc.Utf16;
    });
  }(Zm)), Vn;
}
var qn = {}, Km = {
  get exports() {
    return qn;
  },
  set exports(t) {
    qn = t;
  }
}, Ga;
function er() {
  return Ga || (Ga = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(de());
    })(ae, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.WordArray, o = n.enc;
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
          stringify: function(c) {
            var l = c.words, u = c.sigBytes, d = this._map;
            c.clamp();
            for (var f = [], h = 0; h < u; h += 3)
              for (var p = l[h >>> 2] >>> 24 - h % 4 * 8 & 255, v = l[h + 1 >>> 2] >>> 24 - (h + 1) % 4 * 8 & 255, b = l[h + 2 >>> 2] >>> 24 - (h + 2) % 4 * 8 & 255, w = p << 16 | v << 8 | b, x = 0; x < 4 && h + x * 0.75 < u; x++)
                f.push(d.charAt(w >>> 6 * (3 - x) & 63));
            var g = d.charAt(64);
            if (g)
              for (; f.length % 4; )
                f.push(g);
            return f.join("");
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
          parse: function(c) {
            var l = c.length, u = this._map, d = this._reverseMap;
            if (!d) {
              d = this._reverseMap = [];
              for (var f = 0; f < u.length; f++)
                d[u.charCodeAt(f)] = f;
            }
            var h = u.charAt(64);
            if (h) {
              var p = c.indexOf(h);
              p !== -1 && (l = p);
            }
            return a(c, l, d);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function a(c, l, u) {
          for (var d = [], f = 0, h = 0; h < l; h++)
            if (h % 4) {
              var p = u[c.charCodeAt(h - 1)] << h % 4 * 2, v = u[c.charCodeAt(h)] >>> 6 - h % 4 * 2, b = p | v;
              d[f >>> 2] |= b << 24 - f % 4 * 8, f++;
            }
          return s.create(d, f);
        }
      }(), r.enc.Base64;
    });
  }(Km)), qn;
}
var Yn = {}, Jm = {
  get exports() {
    return Yn;
  },
  set exports(t) {
    Yn = t;
  }
}, $a;
function eb() {
  return $a || ($a = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(de());
    })(ae, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.WordArray, o = n.enc;
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
          stringify: function(c, l = !0) {
            var u = c.words, d = c.sigBytes, f = l ? this._safe_map : this._map;
            c.clamp();
            for (var h = [], p = 0; p < d; p += 3)
              for (var v = u[p >>> 2] >>> 24 - p % 4 * 8 & 255, b = u[p + 1 >>> 2] >>> 24 - (p + 1) % 4 * 8 & 255, w = u[p + 2 >>> 2] >>> 24 - (p + 2) % 4 * 8 & 255, x = v << 16 | b << 8 | w, g = 0; g < 4 && p + g * 0.75 < d; g++)
                h.push(f.charAt(x >>> 6 * (3 - g) & 63));
            var m = f.charAt(64);
            if (m)
              for (; h.length % 4; )
                h.push(m);
            return h.join("");
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
          parse: function(c, l = !0) {
            var u = c.length, d = l ? this._safe_map : this._map, f = this._reverseMap;
            if (!f) {
              f = this._reverseMap = [];
              for (var h = 0; h < d.length; h++)
                f[d.charCodeAt(h)] = h;
            }
            var p = d.charAt(64);
            if (p) {
              var v = c.indexOf(p);
              v !== -1 && (u = v);
            }
            return a(c, u, f);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function a(c, l, u) {
          for (var d = [], f = 0, h = 0; h < l; h++)
            if (h % 4) {
              var p = u[c.charCodeAt(h - 1)] << h % 4 * 2, v = u[c.charCodeAt(h)] >>> 6 - h % 4 * 2, b = p | v;
              d[f >>> 2] |= b << 24 - f % 4 * 8, f++;
            }
          return s.create(d, f);
        }
      }(), r.enc.Base64url;
    });
  }(Jm)), Yn;
}
var Gn = {}, tb = {
  get exports() {
    return Gn;
  },
  set exports(t) {
    Gn = t;
  }
}, Qa;
function tr() {
  return Qa || (Qa = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(de());
    })(ae, function(r) {
      return function(n) {
        var i = r, s = i.lib, o = s.WordArray, a = s.Hasher, c = i.algo, l = [];
        (function() {
          for (var v = 0; v < 64; v++)
            l[v] = n.abs(n.sin(v + 1)) * 4294967296 | 0;
        })();
        var u = c.MD5 = a.extend({
          _doReset: function() {
            this._hash = new o.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(v, b) {
            for (var w = 0; w < 16; w++) {
              var x = b + w, g = v[x];
              v[x] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360;
            }
            var m = this._hash.words, E = v[b + 0], S = v[b + 1], C = v[b + 2], T = v[b + 3], B = v[b + 4], A = v[b + 5], I = v[b + 6], P = v[b + 7], O = v[b + 8], z = v[b + 9], H = v[b + 10], j = v[b + 11], G = v[b + 12], K = v[b + 13], J = v[b + 14], te = v[b + 15], F = m[0], U = m[1], V = m[2], q = m[3];
            F = d(F, U, V, q, E, 7, l[0]), q = d(q, F, U, V, S, 12, l[1]), V = d(V, q, F, U, C, 17, l[2]), U = d(U, V, q, F, T, 22, l[3]), F = d(F, U, V, q, B, 7, l[4]), q = d(q, F, U, V, A, 12, l[5]), V = d(V, q, F, U, I, 17, l[6]), U = d(U, V, q, F, P, 22, l[7]), F = d(F, U, V, q, O, 7, l[8]), q = d(q, F, U, V, z, 12, l[9]), V = d(V, q, F, U, H, 17, l[10]), U = d(U, V, q, F, j, 22, l[11]), F = d(F, U, V, q, G, 7, l[12]), q = d(q, F, U, V, K, 12, l[13]), V = d(V, q, F, U, J, 17, l[14]), U = d(U, V, q, F, te, 22, l[15]), F = f(F, U, V, q, S, 5, l[16]), q = f(q, F, U, V, I, 9, l[17]), V = f(V, q, F, U, j, 14, l[18]), U = f(U, V, q, F, E, 20, l[19]), F = f(F, U, V, q, A, 5, l[20]), q = f(q, F, U, V, H, 9, l[21]), V = f(V, q, F, U, te, 14, l[22]), U = f(U, V, q, F, B, 20, l[23]), F = f(F, U, V, q, z, 5, l[24]), q = f(q, F, U, V, J, 9, l[25]), V = f(V, q, F, U, T, 14, l[26]), U = f(U, V, q, F, O, 20, l[27]), F = f(F, U, V, q, K, 5, l[28]), q = f(q, F, U, V, C, 9, l[29]), V = f(V, q, F, U, P, 14, l[30]), U = f(U, V, q, F, G, 20, l[31]), F = h(F, U, V, q, A, 4, l[32]), q = h(q, F, U, V, O, 11, l[33]), V = h(V, q, F, U, j, 16, l[34]), U = h(U, V, q, F, J, 23, l[35]), F = h(F, U, V, q, S, 4, l[36]), q = h(q, F, U, V, B, 11, l[37]), V = h(V, q, F, U, P, 16, l[38]), U = h(U, V, q, F, H, 23, l[39]), F = h(F, U, V, q, K, 4, l[40]), q = h(q, F, U, V, E, 11, l[41]), V = h(V, q, F, U, T, 16, l[42]), U = h(U, V, q, F, I, 23, l[43]), F = h(F, U, V, q, z, 4, l[44]), q = h(q, F, U, V, G, 11, l[45]), V = h(V, q, F, U, te, 16, l[46]), U = h(U, V, q, F, C, 23, l[47]), F = p(F, U, V, q, E, 6, l[48]), q = p(q, F, U, V, P, 10, l[49]), V = p(V, q, F, U, J, 15, l[50]), U = p(U, V, q, F, A, 21, l[51]), F = p(F, U, V, q, G, 6, l[52]), q = p(q, F, U, V, T, 10, l[53]), V = p(V, q, F, U, H, 15, l[54]), U = p(U, V, q, F, S, 21, l[55]), F = p(F, U, V, q, O, 6, l[56]), q = p(q, F, U, V, te, 10, l[57]), V = p(V, q, F, U, I, 15, l[58]), U = p(U, V, q, F, K, 21, l[59]), F = p(F, U, V, q, B, 6, l[60]), q = p(q, F, U, V, j, 10, l[61]), V = p(V, q, F, U, C, 15, l[62]), U = p(U, V, q, F, z, 21, l[63]), m[0] = m[0] + F | 0, m[1] = m[1] + U | 0, m[2] = m[2] + V | 0, m[3] = m[3] + q | 0;
          },
          _doFinalize: function() {
            var v = this._data, b = v.words, w = this._nDataBytes * 8, x = v.sigBytes * 8;
            b[x >>> 5] |= 128 << 24 - x % 32;
            var g = n.floor(w / 4294967296), m = w;
            b[(x + 64 >>> 9 << 4) + 15] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, b[(x + 64 >>> 9 << 4) + 14] = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360, v.sigBytes = (b.length + 1) * 4, this._process();
            for (var E = this._hash, S = E.words, C = 0; C < 4; C++) {
              var T = S[C];
              S[C] = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360;
            }
            return E;
          },
          clone: function() {
            var v = a.clone.call(this);
            return v._hash = this._hash.clone(), v;
          }
        });
        function d(v, b, w, x, g, m, E) {
          var S = v + (b & w | ~b & x) + g + E;
          return (S << m | S >>> 32 - m) + b;
        }
        function f(v, b, w, x, g, m, E) {
          var S = v + (b & x | w & ~x) + g + E;
          return (S << m | S >>> 32 - m) + b;
        }
        function h(v, b, w, x, g, m, E) {
          var S = v + (b ^ w ^ x) + g + E;
          return (S << m | S >>> 32 - m) + b;
        }
        function p(v, b, w, x, g, m, E) {
          var S = v + (w ^ (b | ~x)) + g + E;
          return (S << m | S >>> 32 - m) + b;
        }
        i.MD5 = a._createHelper(u), i.HmacMD5 = a._createHmacHelper(u);
      }(Math), r.MD5;
    });
  }(tb)), Gn;
}
var $n = {}, rb = {
  get exports() {
    return $n;
  },
  set exports(t) {
    $n = t;
  }
}, Za;
function Do() {
  return Za || (Za = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(de());
    })(ae, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.WordArray, o = i.Hasher, a = n.algo, c = [], l = a.SHA1 = o.extend({
          _doReset: function() {
            this._hash = new s.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(u, d) {
            for (var f = this._hash.words, h = f[0], p = f[1], v = f[2], b = f[3], w = f[4], x = 0; x < 80; x++) {
              if (x < 16)
                c[x] = u[d + x] | 0;
              else {
                var g = c[x - 3] ^ c[x - 8] ^ c[x - 14] ^ c[x - 16];
                c[x] = g << 1 | g >>> 31;
              }
              var m = (h << 5 | h >>> 27) + w + c[x];
              x < 20 ? m += (p & v | ~p & b) + 1518500249 : x < 40 ? m += (p ^ v ^ b) + 1859775393 : x < 60 ? m += (p & v | p & b | v & b) - 1894007588 : m += (p ^ v ^ b) - 899497514, w = b, b = v, v = p << 30 | p >>> 2, p = h, h = m;
            }
            f[0] = f[0] + h | 0, f[1] = f[1] + p | 0, f[2] = f[2] + v | 0, f[3] = f[3] + b | 0, f[4] = f[4] + w | 0;
          },
          _doFinalize: function() {
            var u = this._data, d = u.words, f = this._nDataBytes * 8, h = u.sigBytes * 8;
            return d[h >>> 5] |= 128 << 24 - h % 32, d[(h + 64 >>> 9 << 4) + 14] = Math.floor(f / 4294967296), d[(h + 64 >>> 9 << 4) + 15] = f, u.sigBytes = d.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var u = o.clone.call(this);
            return u._hash = this._hash.clone(), u;
          }
        });
        n.SHA1 = o._createHelper(l), n.HmacSHA1 = o._createHmacHelper(l);
      }(), r.SHA1;
    });
  }(rb)), $n;
}
var Qn = {}, nb = {
  get exports() {
    return Qn;
  },
  set exports(t) {
    Qn = t;
  }
}, Xa;
function Bu() {
  return Xa || (Xa = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(de());
    })(ae, function(r) {
      return function(n) {
        var i = r, s = i.lib, o = s.WordArray, a = s.Hasher, c = i.algo, l = [], u = [];
        (function() {
          function h(w) {
            for (var x = n.sqrt(w), g = 2; g <= x; g++)
              if (!(w % g))
                return !1;
            return !0;
          }
          function p(w) {
            return (w - (w | 0)) * 4294967296 | 0;
          }
          for (var v = 2, b = 0; b < 64; )
            h(v) && (b < 8 && (l[b] = p(n.pow(v, 1 / 2))), u[b] = p(n.pow(v, 1 / 3)), b++), v++;
        })();
        var d = [], f = c.SHA256 = a.extend({
          _doReset: function() {
            this._hash = new o.init(l.slice(0));
          },
          _doProcessBlock: function(h, p) {
            for (var v = this._hash.words, b = v[0], w = v[1], x = v[2], g = v[3], m = v[4], E = v[5], S = v[6], C = v[7], T = 0; T < 64; T++) {
              if (T < 16)
                d[T] = h[p + T] | 0;
              else {
                var B = d[T - 15], A = (B << 25 | B >>> 7) ^ (B << 14 | B >>> 18) ^ B >>> 3, I = d[T - 2], P = (I << 15 | I >>> 17) ^ (I << 13 | I >>> 19) ^ I >>> 10;
                d[T] = A + d[T - 7] + P + d[T - 16];
              }
              var O = m & E ^ ~m & S, z = b & w ^ b & x ^ w & x, H = (b << 30 | b >>> 2) ^ (b << 19 | b >>> 13) ^ (b << 10 | b >>> 22), j = (m << 26 | m >>> 6) ^ (m << 21 | m >>> 11) ^ (m << 7 | m >>> 25), G = C + j + O + u[T] + d[T], K = H + z;
              C = S, S = E, E = m, m = g + G | 0, g = x, x = w, w = b, b = G + K | 0;
            }
            v[0] = v[0] + b | 0, v[1] = v[1] + w | 0, v[2] = v[2] + x | 0, v[3] = v[3] + g | 0, v[4] = v[4] + m | 0, v[5] = v[5] + E | 0, v[6] = v[6] + S | 0, v[7] = v[7] + C | 0;
          },
          _doFinalize: function() {
            var h = this._data, p = h.words, v = this._nDataBytes * 8, b = h.sigBytes * 8;
            return p[b >>> 5] |= 128 << 24 - b % 32, p[(b + 64 >>> 9 << 4) + 14] = n.floor(v / 4294967296), p[(b + 64 >>> 9 << 4) + 15] = v, h.sigBytes = p.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var h = a.clone.call(this);
            return h._hash = this._hash.clone(), h;
          }
        });
        i.SHA256 = a._createHelper(f), i.HmacSHA256 = a._createHmacHelper(f);
      }(Math), r.SHA256;
    });
  }(nb)), Qn;
}
var Zn = {}, ib = {
  get exports() {
    return Zn;
  },
  set exports(t) {
    Zn = t;
  }
}, Ka;
function sb() {
  return Ka || (Ka = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), Bu());
    })(ae, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.WordArray, o = n.algo, a = o.SHA256, c = o.SHA224 = a.extend({
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
            var l = a._doFinalize.call(this);
            return l.sigBytes -= 4, l;
          }
        });
        n.SHA224 = a._createHelper(c), n.HmacSHA224 = a._createHmacHelper(c);
      }(), r.SHA224;
    });
  }(ib)), Zn;
}
var Xn = {}, ob = {
  get exports() {
    return Xn;
  },
  set exports(t) {
    Xn = t;
  }
}, Ja;
function Pu() {
  return Ja || (Ja = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), Oi());
    })(ae, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.Hasher, o = n.x64, a = o.Word, c = o.WordArray, l = n.algo;
        function u() {
          return a.create.apply(a, arguments);
        }
        var d = [
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
        ], f = [];
        (function() {
          for (var p = 0; p < 80; p++)
            f[p] = u();
        })();
        var h = l.SHA512 = s.extend({
          _doReset: function() {
            this._hash = new c.init([
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
          _doProcessBlock: function(p, v) {
            for (var b = this._hash.words, w = b[0], x = b[1], g = b[2], m = b[3], E = b[4], S = b[5], C = b[6], T = b[7], B = w.high, A = w.low, I = x.high, P = x.low, O = g.high, z = g.low, H = m.high, j = m.low, G = E.high, K = E.low, J = S.high, te = S.low, F = C.high, U = C.low, V = T.high, q = T.low, fe = B, ge = A, Se = I, le = P, Ae = O, Me = z, dt = H, Qe = j, Ve = G, He = K, qe = J, Ft = te, zt = F, it = U, Ut = V, ht = q, Le = 0; Le < 80; Le++) {
              var Fe, Ke, Wt = f[Le];
              if (Le < 16)
                Ke = Wt.high = p[v + Le * 2] | 0, Fe = Wt.low = p[v + Le * 2 + 1] | 0;
              else {
                var xr = f[Le - 15], pt = xr.high, At = xr.low, $r = (pt >>> 1 | At << 31) ^ (pt >>> 8 | At << 24) ^ pt >>> 7, Er = (At >>> 1 | pt << 31) ^ (At >>> 8 | pt << 24) ^ (At >>> 7 | pt << 25), wr = f[Le - 2], gt = wr.high, Ct = wr.low, Qr = (gt >>> 19 | Ct << 13) ^ (gt << 3 | Ct >>> 29) ^ gt >>> 6, nr = (Ct >>> 19 | gt << 13) ^ (Ct << 3 | gt >>> 29) ^ (Ct >>> 6 | gt << 26), Zr = f[Le - 7], zi = Zr.high, _r = Zr.low, Sr = f[Le - 16], Ui = Sr.high, Je = Sr.low;
                Fe = Er + _r, Ke = $r + zi + (Fe >>> 0 < Er >>> 0 ? 1 : 0), Fe = Fe + nr, Ke = Ke + Qr + (Fe >>> 0 < nr >>> 0 ? 1 : 0), Fe = Fe + Je, Ke = Ke + Ui + (Fe >>> 0 < Je >>> 0 ? 1 : 0), Wt.high = Ke, Wt.low = Fe;
              }
              var Wi = Ve & qe ^ ~Ve & zt, Xr = He & Ft ^ ~He & it, Kr = fe & Se ^ fe & Ae ^ Se & Ae, ji = ge & le ^ ge & Me ^ le & Me, Vi = (fe >>> 28 | ge << 4) ^ (fe << 30 | ge >>> 2) ^ (fe << 25 | ge >>> 7), Jr = (ge >>> 28 | fe << 4) ^ (ge << 30 | fe >>> 2) ^ (ge << 25 | fe >>> 7), qi = (Ve >>> 14 | He << 18) ^ (Ve >>> 18 | He << 14) ^ (Ve << 23 | He >>> 9), Yi = (He >>> 14 | Ve << 18) ^ (He >>> 18 | Ve << 14) ^ (He << 23 | Ve >>> 9), en = d[Le], Gi = en.high, tn = en.low, ze = ht + Yi, st = Ut + qi + (ze >>> 0 < ht >>> 0 ? 1 : 0), ze = ze + Xr, st = st + Wi + (ze >>> 0 < Xr >>> 0 ? 1 : 0), ze = ze + tn, st = st + Gi + (ze >>> 0 < tn >>> 0 ? 1 : 0), ze = ze + Fe, st = st + Ke + (ze >>> 0 < Fe >>> 0 ? 1 : 0), Ar = Jr + ji, $i = Vi + Kr + (Ar >>> 0 < Jr >>> 0 ? 1 : 0);
              Ut = zt, ht = it, zt = qe, it = Ft, qe = Ve, Ft = He, He = Qe + ze | 0, Ve = dt + st + (He >>> 0 < Qe >>> 0 ? 1 : 0) | 0, dt = Ae, Qe = Me, Ae = Se, Me = le, Se = fe, le = ge, ge = ze + Ar | 0, fe = st + $i + (ge >>> 0 < ze >>> 0 ? 1 : 0) | 0;
            }
            A = w.low = A + ge, w.high = B + fe + (A >>> 0 < ge >>> 0 ? 1 : 0), P = x.low = P + le, x.high = I + Se + (P >>> 0 < le >>> 0 ? 1 : 0), z = g.low = z + Me, g.high = O + Ae + (z >>> 0 < Me >>> 0 ? 1 : 0), j = m.low = j + Qe, m.high = H + dt + (j >>> 0 < Qe >>> 0 ? 1 : 0), K = E.low = K + He, E.high = G + Ve + (K >>> 0 < He >>> 0 ? 1 : 0), te = S.low = te + Ft, S.high = J + qe + (te >>> 0 < Ft >>> 0 ? 1 : 0), U = C.low = U + it, C.high = F + zt + (U >>> 0 < it >>> 0 ? 1 : 0), q = T.low = q + ht, T.high = V + Ut + (q >>> 0 < ht >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var p = this._data, v = p.words, b = this._nDataBytes * 8, w = p.sigBytes * 8;
            v[w >>> 5] |= 128 << 24 - w % 32, v[(w + 128 >>> 10 << 5) + 30] = Math.floor(b / 4294967296), v[(w + 128 >>> 10 << 5) + 31] = b, p.sigBytes = v.length * 4, this._process();
            var x = this._hash.toX32();
            return x;
          },
          clone: function() {
            var p = s.clone.call(this);
            return p._hash = this._hash.clone(), p;
          },
          blockSize: 1024 / 32
        });
        n.SHA512 = s._createHelper(h), n.HmacSHA512 = s._createHmacHelper(h);
      }(), r.SHA512;
    });
  }(ob)), Xn;
}
var Kn = {}, ab = {
  get exports() {
    return Kn;
  },
  set exports(t) {
    Kn = t;
  }
}, el;
function lb() {
  return el || (el = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), Oi(), Pu());
    })(ae, function(r) {
      return function() {
        var n = r, i = n.x64, s = i.Word, o = i.WordArray, a = n.algo, c = a.SHA512, l = a.SHA384 = c.extend({
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
            var u = c._doFinalize.call(this);
            return u.sigBytes -= 16, u;
          }
        });
        n.SHA384 = c._createHelper(l), n.HmacSHA384 = c._createHmacHelper(l);
      }(), r.SHA384;
    });
  }(ab)), Kn;
}
var Jn = {}, cb = {
  get exports() {
    return Jn;
  },
  set exports(t) {
    Jn = t;
  }
}, tl;
function ub() {
  return tl || (tl = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), Oi());
    })(ae, function(r) {
      return function(n) {
        var i = r, s = i.lib, o = s.WordArray, a = s.Hasher, c = i.x64, l = c.Word, u = i.algo, d = [], f = [], h = [];
        (function() {
          for (var b = 1, w = 0, x = 0; x < 24; x++) {
            d[b + 5 * w] = (x + 1) * (x + 2) / 2 % 64;
            var g = w % 5, m = (2 * b + 3 * w) % 5;
            b = g, w = m;
          }
          for (var b = 0; b < 5; b++)
            for (var w = 0; w < 5; w++)
              f[b + 5 * w] = w + (2 * b + 3 * w) % 5 * 5;
          for (var E = 1, S = 0; S < 24; S++) {
            for (var C = 0, T = 0, B = 0; B < 7; B++) {
              if (E & 1) {
                var A = (1 << B) - 1;
                A < 32 ? T ^= 1 << A : C ^= 1 << A - 32;
              }
              E & 128 ? E = E << 1 ^ 113 : E <<= 1;
            }
            h[S] = l.create(C, T);
          }
        })();
        var p = [];
        (function() {
          for (var b = 0; b < 25; b++)
            p[b] = l.create();
        })();
        var v = u.SHA3 = a.extend({
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
            for (var b = this._state = [], w = 0; w < 25; w++)
              b[w] = new l.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(b, w) {
            for (var x = this._state, g = this.blockSize / 2, m = 0; m < g; m++) {
              var E = b[w + 2 * m], S = b[w + 2 * m + 1];
              E = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, S = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360;
              var C = x[m];
              C.high ^= S, C.low ^= E;
            }
            for (var T = 0; T < 24; T++) {
              for (var B = 0; B < 5; B++) {
                for (var A = 0, I = 0, P = 0; P < 5; P++) {
                  var C = x[B + 5 * P];
                  A ^= C.high, I ^= C.low;
                }
                var O = p[B];
                O.high = A, O.low = I;
              }
              for (var B = 0; B < 5; B++)
                for (var z = p[(B + 4) % 5], H = p[(B + 1) % 5], j = H.high, G = H.low, A = z.high ^ (j << 1 | G >>> 31), I = z.low ^ (G << 1 | j >>> 31), P = 0; P < 5; P++) {
                  var C = x[B + 5 * P];
                  C.high ^= A, C.low ^= I;
                }
              for (var K = 1; K < 25; K++) {
                var A, I, C = x[K], J = C.high, te = C.low, F = d[K];
                F < 32 ? (A = J << F | te >>> 32 - F, I = te << F | J >>> 32 - F) : (A = te << F - 32 | J >>> 64 - F, I = J << F - 32 | te >>> 64 - F);
                var U = p[f[K]];
                U.high = A, U.low = I;
              }
              var V = p[0], q = x[0];
              V.high = q.high, V.low = q.low;
              for (var B = 0; B < 5; B++)
                for (var P = 0; P < 5; P++) {
                  var K = B + 5 * P, C = x[K], fe = p[K], ge = p[(B + 1) % 5 + 5 * P], Se = p[(B + 2) % 5 + 5 * P];
                  C.high = fe.high ^ ~ge.high & Se.high, C.low = fe.low ^ ~ge.low & Se.low;
                }
              var C = x[0], le = h[T];
              C.high ^= le.high, C.low ^= le.low;
            }
          },
          _doFinalize: function() {
            var b = this._data, w = b.words;
            this._nDataBytes * 8;
            var x = b.sigBytes * 8, g = this.blockSize * 32;
            w[x >>> 5] |= 1 << 24 - x % 32, w[(n.ceil((x + 1) / g) * g >>> 5) - 1] |= 128, b.sigBytes = w.length * 4, this._process();
            for (var m = this._state, E = this.cfg.outputLength / 8, S = E / 8, C = [], T = 0; T < S; T++) {
              var B = m[T], A = B.high, I = B.low;
              A = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360, I = (I << 8 | I >>> 24) & 16711935 | (I << 24 | I >>> 8) & 4278255360, C.push(I), C.push(A);
            }
            return new o.init(C, E);
          },
          clone: function() {
            for (var b = a.clone.call(this), w = b._state = this._state.slice(0), x = 0; x < 25; x++)
              w[x] = w[x].clone();
            return b;
          }
        });
        i.SHA3 = a._createHelper(v), i.HmacSHA3 = a._createHmacHelper(v);
      }(Math), r.SHA3;
    });
  }(cb)), Jn;
}
var ei = {}, fb = {
  get exports() {
    return ei;
  },
  set exports(t) {
    ei = t;
  }
}, rl;
function db() {
  return rl || (rl = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(de());
    })(ae, function(r) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(n) {
        var i = r, s = i.lib, o = s.WordArray, a = s.Hasher, c = i.algo, l = o.create([
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
        ]), d = o.create([
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
        ]), f = o.create([
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
        ]), h = o.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), p = o.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), v = c.RIPEMD160 = a.extend({
          _doReset: function() {
            this._hash = o.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(S, C) {
            for (var T = 0; T < 16; T++) {
              var B = C + T, A = S[B];
              S[B] = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360;
            }
            var I = this._hash.words, P = h.words, O = p.words, z = l.words, H = u.words, j = d.words, G = f.words, K, J, te, F, U, V, q, fe, ge, Se;
            V = K = I[0], q = J = I[1], fe = te = I[2], ge = F = I[3], Se = U = I[4];
            for (var le, T = 0; T < 80; T += 1)
              le = K + S[C + z[T]] | 0, T < 16 ? le += b(J, te, F) + P[0] : T < 32 ? le += w(J, te, F) + P[1] : T < 48 ? le += x(J, te, F) + P[2] : T < 64 ? le += g(J, te, F) + P[3] : le += m(J, te, F) + P[4], le = le | 0, le = E(le, j[T]), le = le + U | 0, K = U, U = F, F = E(te, 10), te = J, J = le, le = V + S[C + H[T]] | 0, T < 16 ? le += m(q, fe, ge) + O[0] : T < 32 ? le += g(q, fe, ge) + O[1] : T < 48 ? le += x(q, fe, ge) + O[2] : T < 64 ? le += w(q, fe, ge) + O[3] : le += b(q, fe, ge) + O[4], le = le | 0, le = E(le, G[T]), le = le + Se | 0, V = Se, Se = ge, ge = E(fe, 10), fe = q, q = le;
            le = I[1] + te + ge | 0, I[1] = I[2] + F + Se | 0, I[2] = I[3] + U + V | 0, I[3] = I[4] + K + q | 0, I[4] = I[0] + J + fe | 0, I[0] = le;
          },
          _doFinalize: function() {
            var S = this._data, C = S.words, T = this._nDataBytes * 8, B = S.sigBytes * 8;
            C[B >>> 5] |= 128 << 24 - B % 32, C[(B + 64 >>> 9 << 4) + 14] = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360, S.sigBytes = (C.length + 1) * 4, this._process();
            for (var A = this._hash, I = A.words, P = 0; P < 5; P++) {
              var O = I[P];
              I[P] = (O << 8 | O >>> 24) & 16711935 | (O << 24 | O >>> 8) & 4278255360;
            }
            return A;
          },
          clone: function() {
            var S = a.clone.call(this);
            return S._hash = this._hash.clone(), S;
          }
        });
        function b(S, C, T) {
          return S ^ C ^ T;
        }
        function w(S, C, T) {
          return S & C | ~S & T;
        }
        function x(S, C, T) {
          return (S | ~C) ^ T;
        }
        function g(S, C, T) {
          return S & T | C & ~T;
        }
        function m(S, C, T) {
          return S ^ (C | ~T);
        }
        function E(S, C) {
          return S << C | S >>> 32 - C;
        }
        i.RIPEMD160 = a._createHelper(v), i.HmacRIPEMD160 = a._createHmacHelper(v);
      }(), r.RIPEMD160;
    });
  }(fb)), ei;
}
var ti = {}, hb = {
  get exports() {
    return ti;
  },
  set exports(t) {
    ti = t;
  }
}, nl;
function Ro() {
  return nl || (nl = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(de());
    })(ae, function(r) {
      (function() {
        var n = r, i = n.lib, s = i.Base, o = n.enc, a = o.Utf8, c = n.algo;
        c.HMAC = s.extend({
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
          init: function(l, u) {
            l = this._hasher = new l.init(), typeof u == "string" && (u = a.parse(u));
            var d = l.blockSize, f = d * 4;
            u.sigBytes > f && (u = l.finalize(u)), u.clamp();
            for (var h = this._oKey = u.clone(), p = this._iKey = u.clone(), v = h.words, b = p.words, w = 0; w < d; w++)
              v[w] ^= 1549556828, b[w] ^= 909522486;
            h.sigBytes = p.sigBytes = f, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var l = this._hasher;
            l.reset(), l.update(this._iKey);
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
          update: function(l) {
            return this._hasher.update(l), this;
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
          finalize: function(l) {
            var u = this._hasher, d = u.finalize(l);
            u.reset();
            var f = u.finalize(this._oKey.clone().concat(d));
            return f;
          }
        });
      })();
    });
  }(hb)), ti;
}
var ri = {}, pb = {
  get exports() {
    return ri;
  },
  set exports(t) {
    ri = t;
  }
}, il;
function gb() {
  return il || (il = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), Do(), Ro());
    })(ae, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.Base, o = i.WordArray, a = n.algo, c = a.SHA1, l = a.HMAC, u = a.PBKDF2 = s.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA1
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: s.extend({
            keySize: 128 / 32,
            hasher: c,
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
          init: function(d) {
            this.cfg = this.cfg.extend(d);
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
          compute: function(d, f) {
            for (var h = this.cfg, p = l.create(h.hasher, d), v = o.create(), b = o.create([1]), w = v.words, x = b.words, g = h.keySize, m = h.iterations; w.length < g; ) {
              var E = p.update(f).finalize(b);
              p.reset();
              for (var S = E.words, C = S.length, T = E, B = 1; B < m; B++) {
                T = p.finalize(T), p.reset();
                for (var A = T.words, I = 0; I < C; I++)
                  S[I] ^= A[I];
              }
              v.concat(E), x[0]++;
            }
            return v.sigBytes = g * 4, v;
          }
        });
        n.PBKDF2 = function(d, f, h) {
          return u.create(h).compute(d, f);
        };
      }(), r.PBKDF2;
    });
  }(pb)), ri;
}
var ni = {}, vb = {
  get exports() {
    return ni;
  },
  set exports(t) {
    ni = t;
  }
}, sl;
function rr() {
  return sl || (sl = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), Do(), Ro());
    })(ae, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.Base, o = i.WordArray, a = n.algo, c = a.MD5, l = a.EvpKDF = s.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: s.extend({
            keySize: 128 / 32,
            hasher: c,
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
          compute: function(u, d) {
            for (var f, h = this.cfg, p = h.hasher.create(), v = o.create(), b = v.words, w = h.keySize, x = h.iterations; b.length < w; ) {
              f && p.update(f), f = p.update(u).finalize(d), p.reset();
              for (var g = 1; g < x; g++)
                f = p.finalize(f), p.reset();
              v.concat(f);
            }
            return v.sigBytes = w * 4, v;
          }
        });
        n.EvpKDF = function(u, d, f) {
          return l.create(f).compute(u, d);
        };
      }(), r.EvpKDF;
    });
  }(vb)), ni;
}
var ii = {}, mb = {
  get exports() {
    return ii;
  },
  set exports(t) {
    ii = t;
  }
}, ol;
function Ie() {
  return ol || (ol = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), rr());
    })(ae, function(r) {
      r.lib.Cipher || function(n) {
        var i = r, s = i.lib, o = s.Base, a = s.WordArray, c = s.BufferedBlockAlgorithm, l = i.enc;
        l.Utf8;
        var u = l.Base64, d = i.algo, f = d.EvpKDF, h = s.Cipher = c.extend({
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
          createEncryptor: function(A, I) {
            return this.create(this._ENC_XFORM_MODE, A, I);
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
          createDecryptor: function(A, I) {
            return this.create(this._DEC_XFORM_MODE, A, I);
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
          init: function(A, I, P) {
            this.cfg = this.cfg.extend(P), this._xformMode = A, this._key = I, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            c.reset.call(this), this._doReset();
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
            var I = this._doFinalize();
            return I;
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
            function A(I) {
              return typeof I == "string" ? B : S;
            }
            return function(I) {
              return {
                encrypt: function(P, O, z) {
                  return A(O).encrypt(I, P, O, z);
                },
                decrypt: function(P, O, z) {
                  return A(O).decrypt(I, P, O, z);
                }
              };
            };
          }()
        });
        s.StreamCipher = h.extend({
          _doFinalize: function() {
            var A = this._process(!0);
            return A;
          },
          blockSize: 1
        });
        var p = i.mode = {}, v = s.BlockCipherMode = o.extend({
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
          createEncryptor: function(A, I) {
            return this.Encryptor.create(A, I);
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
          createDecryptor: function(A, I) {
            return this.Decryptor.create(A, I);
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
          init: function(A, I) {
            this._cipher = A, this._iv = I;
          }
        }), b = p.CBC = function() {
          var A = v.extend();
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
            processBlock: function(P, O) {
              var z = this._cipher, H = z.blockSize;
              I.call(this, P, O, H), z.encryptBlock(P, O), this._prevBlock = P.slice(O, O + H);
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
            processBlock: function(P, O) {
              var z = this._cipher, H = z.blockSize, j = P.slice(O, O + H);
              z.decryptBlock(P, O), I.call(this, P, O, H), this._prevBlock = j;
            }
          });
          function I(P, O, z) {
            var H, j = this._iv;
            j ? (H = j, this._iv = n) : H = this._prevBlock;
            for (var G = 0; G < z; G++)
              P[O + G] ^= H[G];
          }
          return A;
        }(), w = i.pad = {}, x = w.Pkcs7 = {
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
          pad: function(A, I) {
            for (var P = I * 4, O = P - A.sigBytes % P, z = O << 24 | O << 16 | O << 8 | O, H = [], j = 0; j < O; j += 4)
              H.push(z);
            var G = a.create(H, O);
            A.concat(G);
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
            var I = A.words[A.sigBytes - 1 >>> 2] & 255;
            A.sigBytes -= I;
          }
        };
        s.BlockCipher = h.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: h.cfg.extend({
            mode: b,
            padding: x
          }),
          reset: function() {
            var A;
            h.reset.call(this);
            var I = this.cfg, P = I.iv, O = I.mode;
            this._xformMode == this._ENC_XFORM_MODE ? A = O.createEncryptor : (A = O.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == A ? this._mode.init(this, P && P.words) : (this._mode = A.call(O, this, P && P.words), this._mode.__creator = A);
          },
          _doProcessBlock: function(A, I) {
            this._mode.processBlock(A, I);
          },
          _doFinalize: function() {
            var A, I = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (I.pad(this._data, this.blockSize), A = this._process(!0)) : (A = this._process(!0), I.unpad(A)), A;
          },
          blockSize: 128 / 32
        });
        var g = s.CipherParams = o.extend({
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
        }), m = i.format = {}, E = m.OpenSSL = {
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
            var I, P = A.ciphertext, O = A.salt;
            return O ? I = a.create([1398893684, 1701076831]).concat(O).concat(P) : I = P, I.toString(u);
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
            var I, P = u.parse(A), O = P.words;
            return O[0] == 1398893684 && O[1] == 1701076831 && (I = a.create(O.slice(2, 4)), O.splice(0, 4), P.sigBytes -= 16), g.create({ ciphertext: P, salt: I });
          }
        }, S = s.SerializableCipher = o.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: o.extend({
            format: E
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
          encrypt: function(A, I, P, O) {
            O = this.cfg.extend(O);
            var z = A.createEncryptor(P, O), H = z.finalize(I), j = z.cfg;
            return g.create({
              ciphertext: H,
              key: P,
              iv: j.iv,
              algorithm: A,
              mode: j.mode,
              padding: j.padding,
              blockSize: A.blockSize,
              formatter: O.format
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
          decrypt: function(A, I, P, O) {
            O = this.cfg.extend(O), I = this._parse(I, O.format);
            var z = A.createDecryptor(P, O).finalize(I.ciphertext);
            return z;
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
          _parse: function(A, I) {
            return typeof A == "string" ? I.parse(A, this) : A;
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
          execute: function(A, I, P, O) {
            O || (O = a.random(64 / 8));
            var z = f.create({ keySize: I + P }).compute(A, O), H = a.create(z.words.slice(I), P * 4);
            return z.sigBytes = I * 4, g.create({ key: z, iv: H, salt: O });
          }
        }, B = s.PasswordBasedCipher = S.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: S.cfg.extend({
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
          encrypt: function(A, I, P, O) {
            O = this.cfg.extend(O);
            var z = O.kdf.execute(P, A.keySize, A.ivSize);
            O.iv = z.iv;
            var H = S.encrypt.call(this, A, I, z.key, O);
            return H.mixIn(z), H;
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
          decrypt: function(A, I, P, O) {
            O = this.cfg.extend(O), I = this._parse(I, O.format);
            var z = O.kdf.execute(P, A.keySize, A.ivSize, I.salt);
            O.iv = z.iv;
            var H = S.decrypt.call(this, A, I, z.key, O);
            return H;
          }
        });
      }();
    });
  }(mb)), ii;
}
var si = {}, bb = {
  get exports() {
    return si;
  },
  set exports(t) {
    si = t;
  }
}, al;
function yb() {
  return al || (al = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), Ie());
    })(ae, function(r) {
      return r.mode.CFB = function() {
        var n = r.lib.BlockCipherMode.extend();
        n.Encryptor = n.extend({
          processBlock: function(s, o) {
            var a = this._cipher, c = a.blockSize;
            i.call(this, s, o, c, a), this._prevBlock = s.slice(o, o + c);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(s, o) {
            var a = this._cipher, c = a.blockSize, l = s.slice(o, o + c);
            i.call(this, s, o, c, a), this._prevBlock = l;
          }
        });
        function i(s, o, a, c) {
          var l, u = this._iv;
          u ? (l = u.slice(0), this._iv = void 0) : l = this._prevBlock, c.encryptBlock(l, 0);
          for (var d = 0; d < a; d++)
            s[o + d] ^= l[d];
        }
        return n;
      }(), r.mode.CFB;
    });
  }(bb)), si;
}
var oi = {}, xb = {
  get exports() {
    return oi;
  },
  set exports(t) {
    oi = t;
  }
}, ll;
function Eb() {
  return ll || (ll = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), Ie());
    })(ae, function(r) {
      return r.mode.CTR = function() {
        var n = r.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(s, o) {
            var a = this._cipher, c = a.blockSize, l = this._iv, u = this._counter;
            l && (u = this._counter = l.slice(0), this._iv = void 0);
            var d = u.slice(0);
            a.encryptBlock(d, 0), u[c - 1] = u[c - 1] + 1 | 0;
            for (var f = 0; f < c; f++)
              s[o + f] ^= d[f];
          }
        });
        return n.Decryptor = i, n;
      }(), r.mode.CTR;
    });
  }(xb)), oi;
}
var ai = {}, wb = {
  get exports() {
    return ai;
  },
  set exports(t) {
    ai = t;
  }
}, cl;
function _b() {
  return cl || (cl = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), Ie());
    })(ae, function(r) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return r.mode.CTRGladman = function() {
        var n = r.lib.BlockCipherMode.extend();
        function i(a) {
          if ((a >> 24 & 255) === 255) {
            var c = a >> 16 & 255, l = a >> 8 & 255, u = a & 255;
            c === 255 ? (c = 0, l === 255 ? (l = 0, u === 255 ? u = 0 : ++u) : ++l) : ++c, a = 0, a += c << 16, a += l << 8, a += u;
          } else
            a += 1 << 24;
          return a;
        }
        function s(a) {
          return (a[0] = i(a[0])) === 0 && (a[1] = i(a[1])), a;
        }
        var o = n.Encryptor = n.extend({
          processBlock: function(a, c) {
            var l = this._cipher, u = l.blockSize, d = this._iv, f = this._counter;
            d && (f = this._counter = d.slice(0), this._iv = void 0), s(f);
            var h = f.slice(0);
            l.encryptBlock(h, 0);
            for (var p = 0; p < u; p++)
              a[c + p] ^= h[p];
          }
        });
        return n.Decryptor = o, n;
      }(), r.mode.CTRGladman;
    });
  }(wb)), ai;
}
var li = {}, Sb = {
  get exports() {
    return li;
  },
  set exports(t) {
    li = t;
  }
}, ul;
function Ab() {
  return ul || (ul = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), Ie());
    })(ae, function(r) {
      return r.mode.OFB = function() {
        var n = r.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(s, o) {
            var a = this._cipher, c = a.blockSize, l = this._iv, u = this._keystream;
            l && (u = this._keystream = l.slice(0), this._iv = void 0), a.encryptBlock(u, 0);
            for (var d = 0; d < c; d++)
              s[o + d] ^= u[d];
          }
        });
        return n.Decryptor = i, n;
      }(), r.mode.OFB;
    });
  }(Sb)), li;
}
var ci = {}, Cb = {
  get exports() {
    return ci;
  },
  set exports(t) {
    ci = t;
  }
}, fl;
function Hu() {
  return fl || (fl = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), Ie());
    })(ae, function(r) {
      return r.mode.ECB = function() {
        var n = r.lib.BlockCipherMode.extend();
        return n.Encryptor = n.extend({
          processBlock: function(i, s) {
            this._cipher.encryptBlock(i, s);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(i, s) {
            this._cipher.decryptBlock(i, s);
          }
        }), n;
      }(), r.mode.ECB;
    });
  }(Cb)), ci;
}
var ui = {}, Db = {
  get exports() {
    return ui;
  },
  set exports(t) {
    ui = t;
  }
}, dl;
function Rb() {
  return dl || (dl = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), Ie());
    })(ae, function(r) {
      return r.pad.AnsiX923 = {
        pad: function(n, i) {
          var s = n.sigBytes, o = i * 4, a = o - s % o, c = s + a - 1;
          n.clamp(), n.words[c >>> 2] |= a << 24 - c % 4 * 8, n.sigBytes += a;
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, r.pad.Ansix923;
    });
  }(Db)), ui;
}
var fi = {}, Tb = {
  get exports() {
    return fi;
  },
  set exports(t) {
    fi = t;
  }
}, hl;
function kb() {
  return hl || (hl = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), Ie());
    })(ae, function(r) {
      return r.pad.Iso10126 = {
        pad: function(n, i) {
          var s = i * 4, o = s - n.sigBytes % s;
          n.concat(r.lib.WordArray.random(o - 1)).concat(r.lib.WordArray.create([o << 24], 1));
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, r.pad.Iso10126;
    });
  }(Tb)), fi;
}
var di = {}, Ib = {
  get exports() {
    return di;
  },
  set exports(t) {
    di = t;
  }
}, pl;
function Mb() {
  return pl || (pl = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), Ie());
    })(ae, function(r) {
      return r.pad.Iso97971 = {
        pad: function(n, i) {
          n.concat(r.lib.WordArray.create([2147483648], 1)), r.pad.ZeroPadding.pad(n, i);
        },
        unpad: function(n) {
          r.pad.ZeroPadding.unpad(n), n.sigBytes--;
        }
      }, r.pad.Iso97971;
    });
  }(Ib)), di;
}
var hi = {}, Nb = {
  get exports() {
    return hi;
  },
  set exports(t) {
    hi = t;
  }
}, gl;
function Ob() {
  return gl || (gl = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), Ie());
    })(ae, function(r) {
      return r.pad.ZeroPadding = {
        pad: function(n, i) {
          var s = i * 4;
          n.clamp(), n.sigBytes += s - (n.sigBytes % s || s);
        },
        unpad: function(n) {
          for (var i = n.words, s = n.sigBytes - 1, s = n.sigBytes - 1; s >= 0; s--)
            if (i[s >>> 2] >>> 24 - s % 4 * 8 & 255) {
              n.sigBytes = s + 1;
              break;
            }
        }
      }, r.pad.ZeroPadding;
    });
  }(Nb)), hi;
}
var pi = {}, Bb = {
  get exports() {
    return pi;
  },
  set exports(t) {
    pi = t;
  }
}, vl;
function Pb() {
  return vl || (vl = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), Ie());
    })(ae, function(r) {
      return r.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, r.pad.NoPadding;
    });
  }(Bb)), pi;
}
var gi = {}, Hb = {
  get exports() {
    return gi;
  },
  set exports(t) {
    gi = t;
  }
}, ml;
function Lb() {
  return ml || (ml = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), Ie());
    })(ae, function(r) {
      return function(n) {
        var i = r, s = i.lib, o = s.CipherParams, a = i.enc, c = a.Hex, l = i.format;
        l.Hex = {
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
            return u.ciphertext.toString(c);
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
            var d = c.parse(u);
            return o.create({ ciphertext: d });
          }
        };
      }(), r.format.Hex;
    });
  }(Hb)), gi;
}
var vi = {}, Fb = {
  get exports() {
    return vi;
  },
  set exports(t) {
    vi = t;
  }
}, bl;
function Lu() {
  return bl || (bl = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), er(), tr(), rr(), Ie());
    })(ae, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.BlockCipher, o = n.algo, a = [], c = [], l = [], u = [], d = [], f = [], h = [], p = [], v = [], b = [];
        (function() {
          for (var g = [], m = 0; m < 256; m++)
            m < 128 ? g[m] = m << 1 : g[m] = m << 1 ^ 283;
          for (var E = 0, S = 0, m = 0; m < 256; m++) {
            var C = S ^ S << 1 ^ S << 2 ^ S << 3 ^ S << 4;
            C = C >>> 8 ^ C & 255 ^ 99, a[E] = C, c[C] = E;
            var T = g[E], B = g[T], A = g[B], I = g[C] * 257 ^ C * 16843008;
            l[E] = I << 24 | I >>> 8, u[E] = I << 16 | I >>> 16, d[E] = I << 8 | I >>> 24, f[E] = I;
            var I = A * 16843009 ^ B * 65537 ^ T * 257 ^ E * 16843008;
            h[C] = I << 24 | I >>> 8, p[C] = I << 16 | I >>> 16, v[C] = I << 8 | I >>> 24, b[C] = I, E ? (E = T ^ g[g[g[A ^ T]]], S ^= g[g[S]]) : E = S = 1;
          }
        })();
        var w = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], x = o.AES = s.extend({
          _doReset: function() {
            var g;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var m = this._keyPriorReset = this._key, E = m.words, S = m.sigBytes / 4, C = this._nRounds = S + 6, T = (C + 1) * 4, B = this._keySchedule = [], A = 0; A < T; A++)
                A < S ? B[A] = E[A] : (g = B[A - 1], A % S ? S > 6 && A % S == 4 && (g = a[g >>> 24] << 24 | a[g >>> 16 & 255] << 16 | a[g >>> 8 & 255] << 8 | a[g & 255]) : (g = g << 8 | g >>> 24, g = a[g >>> 24] << 24 | a[g >>> 16 & 255] << 16 | a[g >>> 8 & 255] << 8 | a[g & 255], g ^= w[A / S | 0] << 24), B[A] = B[A - S] ^ g);
              for (var I = this._invKeySchedule = [], P = 0; P < T; P++) {
                var A = T - P;
                if (P % 4)
                  var g = B[A];
                else
                  var g = B[A - 4];
                P < 4 || A <= 4 ? I[P] = g : I[P] = h[a[g >>> 24]] ^ p[a[g >>> 16 & 255]] ^ v[a[g >>> 8 & 255]] ^ b[a[g & 255]];
              }
            }
          },
          encryptBlock: function(g, m) {
            this._doCryptBlock(g, m, this._keySchedule, l, u, d, f, a);
          },
          decryptBlock: function(g, m) {
            var E = g[m + 1];
            g[m + 1] = g[m + 3], g[m + 3] = E, this._doCryptBlock(g, m, this._invKeySchedule, h, p, v, b, c);
            var E = g[m + 1];
            g[m + 1] = g[m + 3], g[m + 3] = E;
          },
          _doCryptBlock: function(g, m, E, S, C, T, B, A) {
            for (var I = this._nRounds, P = g[m] ^ E[0], O = g[m + 1] ^ E[1], z = g[m + 2] ^ E[2], H = g[m + 3] ^ E[3], j = 4, G = 1; G < I; G++) {
              var K = S[P >>> 24] ^ C[O >>> 16 & 255] ^ T[z >>> 8 & 255] ^ B[H & 255] ^ E[j++], J = S[O >>> 24] ^ C[z >>> 16 & 255] ^ T[H >>> 8 & 255] ^ B[P & 255] ^ E[j++], te = S[z >>> 24] ^ C[H >>> 16 & 255] ^ T[P >>> 8 & 255] ^ B[O & 255] ^ E[j++], F = S[H >>> 24] ^ C[P >>> 16 & 255] ^ T[O >>> 8 & 255] ^ B[z & 255] ^ E[j++];
              P = K, O = J, z = te, H = F;
            }
            var K = (A[P >>> 24] << 24 | A[O >>> 16 & 255] << 16 | A[z >>> 8 & 255] << 8 | A[H & 255]) ^ E[j++], J = (A[O >>> 24] << 24 | A[z >>> 16 & 255] << 16 | A[H >>> 8 & 255] << 8 | A[P & 255]) ^ E[j++], te = (A[z >>> 24] << 24 | A[H >>> 16 & 255] << 16 | A[P >>> 8 & 255] << 8 | A[O & 255]) ^ E[j++], F = (A[H >>> 24] << 24 | A[P >>> 16 & 255] << 16 | A[O >>> 8 & 255] << 8 | A[z & 255]) ^ E[j++];
            g[m] = K, g[m + 1] = J, g[m + 2] = te, g[m + 3] = F;
          },
          keySize: 256 / 32
        });
        n.AES = s._createHelper(x);
      }(), r.AES;
    });
  }(Fb)), vi;
}
var mi = {}, zb = {
  get exports() {
    return mi;
  },
  set exports(t) {
    mi = t;
  }
}, yl;
function Ub() {
  return yl || (yl = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), er(), tr(), rr(), Ie());
    })(ae, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.WordArray, o = i.BlockCipher, a = n.algo, c = [
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
        ], l = [
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
        ], u = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], d = [
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
        ], f = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], h = a.DES = o.extend({
          _doReset: function() {
            for (var w = this._key, x = w.words, g = [], m = 0; m < 56; m++) {
              var E = c[m] - 1;
              g[m] = x[E >>> 5] >>> 31 - E % 32 & 1;
            }
            for (var S = this._subKeys = [], C = 0; C < 16; C++) {
              for (var T = S[C] = [], B = u[C], m = 0; m < 24; m++)
                T[m / 6 | 0] |= g[(l[m] - 1 + B) % 28] << 31 - m % 6, T[4 + (m / 6 | 0)] |= g[28 + (l[m + 24] - 1 + B) % 28] << 31 - m % 6;
              T[0] = T[0] << 1 | T[0] >>> 31;
              for (var m = 1; m < 7; m++)
                T[m] = T[m] >>> (m - 1) * 4 + 3;
              T[7] = T[7] << 5 | T[7] >>> 27;
            }
            for (var A = this._invSubKeys = [], m = 0; m < 16; m++)
              A[m] = S[15 - m];
          },
          encryptBlock: function(w, x) {
            this._doCryptBlock(w, x, this._subKeys);
          },
          decryptBlock: function(w, x) {
            this._doCryptBlock(w, x, this._invSubKeys);
          },
          _doCryptBlock: function(w, x, g) {
            this._lBlock = w[x], this._rBlock = w[x + 1], p.call(this, 4, 252645135), p.call(this, 16, 65535), v.call(this, 2, 858993459), v.call(this, 8, 16711935), p.call(this, 1, 1431655765);
            for (var m = 0; m < 16; m++) {
              for (var E = g[m], S = this._lBlock, C = this._rBlock, T = 0, B = 0; B < 8; B++)
                T |= d[B][((C ^ E[B]) & f[B]) >>> 0];
              this._lBlock = C, this._rBlock = S ^ T;
            }
            var A = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = A, p.call(this, 1, 1431655765), v.call(this, 8, 16711935), v.call(this, 2, 858993459), p.call(this, 16, 65535), p.call(this, 4, 252645135), w[x] = this._lBlock, w[x + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function p(w, x) {
          var g = (this._lBlock >>> w ^ this._rBlock) & x;
          this._rBlock ^= g, this._lBlock ^= g << w;
        }
        function v(w, x) {
          var g = (this._rBlock >>> w ^ this._lBlock) & x;
          this._lBlock ^= g, this._rBlock ^= g << w;
        }
        n.DES = o._createHelper(h);
        var b = a.TripleDES = o.extend({
          _doReset: function() {
            var w = this._key, x = w.words;
            if (x.length !== 2 && x.length !== 4 && x.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var g = x.slice(0, 2), m = x.length < 4 ? x.slice(0, 2) : x.slice(2, 4), E = x.length < 6 ? x.slice(0, 2) : x.slice(4, 6);
            this._des1 = h.createEncryptor(s.create(g)), this._des2 = h.createEncryptor(s.create(m)), this._des3 = h.createEncryptor(s.create(E));
          },
          encryptBlock: function(w, x) {
            this._des1.encryptBlock(w, x), this._des2.decryptBlock(w, x), this._des3.encryptBlock(w, x);
          },
          decryptBlock: function(w, x) {
            this._des3.decryptBlock(w, x), this._des2.encryptBlock(w, x), this._des1.decryptBlock(w, x);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        n.TripleDES = o._createHelper(b);
      }(), r.TripleDES;
    });
  }(zb)), mi;
}
var bi = {}, Wb = {
  get exports() {
    return bi;
  },
  set exports(t) {
    bi = t;
  }
}, xl;
function jb() {
  return xl || (xl = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), er(), tr(), rr(), Ie());
    })(ae, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.StreamCipher, o = n.algo, a = o.RC4 = s.extend({
          _doReset: function() {
            for (var u = this._key, d = u.words, f = u.sigBytes, h = this._S = [], p = 0; p < 256; p++)
              h[p] = p;
            for (var p = 0, v = 0; p < 256; p++) {
              var b = p % f, w = d[b >>> 2] >>> 24 - b % 4 * 8 & 255;
              v = (v + h[p] + w) % 256;
              var x = h[p];
              h[p] = h[v], h[v] = x;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(u, d) {
            u[d] ^= c.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function c() {
          for (var u = this._S, d = this._i, f = this._j, h = 0, p = 0; p < 4; p++) {
            d = (d + 1) % 256, f = (f + u[d]) % 256;
            var v = u[d];
            u[d] = u[f], u[f] = v, h |= u[(u[d] + u[f]) % 256] << 24 - p * 8;
          }
          return this._i = d, this._j = f, h;
        }
        n.RC4 = s._createHelper(a);
        var l = o.RC4Drop = a.extend({
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
              c.call(this);
          }
        });
        n.RC4Drop = s._createHelper(l);
      }(), r.RC4;
    });
  }(Wb)), bi;
}
var yi = {}, Vb = {
  get exports() {
    return yi;
  },
  set exports(t) {
    yi = t;
  }
}, El;
function qb() {
  return El || (El = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), er(), tr(), rr(), Ie());
    })(ae, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.StreamCipher, o = n.algo, a = [], c = [], l = [], u = o.Rabbit = s.extend({
          _doReset: function() {
            for (var f = this._key.words, h = this.cfg.iv, p = 0; p < 4; p++)
              f[p] = (f[p] << 8 | f[p] >>> 24) & 16711935 | (f[p] << 24 | f[p] >>> 8) & 4278255360;
            var v = this._X = [
              f[0],
              f[3] << 16 | f[2] >>> 16,
              f[1],
              f[0] << 16 | f[3] >>> 16,
              f[2],
              f[1] << 16 | f[0] >>> 16,
              f[3],
              f[2] << 16 | f[1] >>> 16
            ], b = this._C = [
              f[2] << 16 | f[2] >>> 16,
              f[0] & 4294901760 | f[1] & 65535,
              f[3] << 16 | f[3] >>> 16,
              f[1] & 4294901760 | f[2] & 65535,
              f[0] << 16 | f[0] >>> 16,
              f[2] & 4294901760 | f[3] & 65535,
              f[1] << 16 | f[1] >>> 16,
              f[3] & 4294901760 | f[0] & 65535
            ];
            this._b = 0;
            for (var p = 0; p < 4; p++)
              d.call(this);
            for (var p = 0; p < 8; p++)
              b[p] ^= v[p + 4 & 7];
            if (h) {
              var w = h.words, x = w[0], g = w[1], m = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, E = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, S = m >>> 16 | E & 4294901760, C = E << 16 | m & 65535;
              b[0] ^= m, b[1] ^= S, b[2] ^= E, b[3] ^= C, b[4] ^= m, b[5] ^= S, b[6] ^= E, b[7] ^= C;
              for (var p = 0; p < 4; p++)
                d.call(this);
            }
          },
          _doProcessBlock: function(f, h) {
            var p = this._X;
            d.call(this), a[0] = p[0] ^ p[5] >>> 16 ^ p[3] << 16, a[1] = p[2] ^ p[7] >>> 16 ^ p[5] << 16, a[2] = p[4] ^ p[1] >>> 16 ^ p[7] << 16, a[3] = p[6] ^ p[3] >>> 16 ^ p[1] << 16;
            for (var v = 0; v < 4; v++)
              a[v] = (a[v] << 8 | a[v] >>> 24) & 16711935 | (a[v] << 24 | a[v] >>> 8) & 4278255360, f[h + v] ^= a[v];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function d() {
          for (var f = this._X, h = this._C, p = 0; p < 8; p++)
            c[p] = h[p];
          h[0] = h[0] + 1295307597 + this._b | 0, h[1] = h[1] + 3545052371 + (h[0] >>> 0 < c[0] >>> 0 ? 1 : 0) | 0, h[2] = h[2] + 886263092 + (h[1] >>> 0 < c[1] >>> 0 ? 1 : 0) | 0, h[3] = h[3] + 1295307597 + (h[2] >>> 0 < c[2] >>> 0 ? 1 : 0) | 0, h[4] = h[4] + 3545052371 + (h[3] >>> 0 < c[3] >>> 0 ? 1 : 0) | 0, h[5] = h[5] + 886263092 + (h[4] >>> 0 < c[4] >>> 0 ? 1 : 0) | 0, h[6] = h[6] + 1295307597 + (h[5] >>> 0 < c[5] >>> 0 ? 1 : 0) | 0, h[7] = h[7] + 3545052371 + (h[6] >>> 0 < c[6] >>> 0 ? 1 : 0) | 0, this._b = h[7] >>> 0 < c[7] >>> 0 ? 1 : 0;
          for (var p = 0; p < 8; p++) {
            var v = f[p] + h[p], b = v & 65535, w = v >>> 16, x = ((b * b >>> 17) + b * w >>> 15) + w * w, g = ((v & 4294901760) * v | 0) + ((v & 65535) * v | 0);
            l[p] = x ^ g;
          }
          f[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0, f[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0, f[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0, f[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0, f[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0, f[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0, f[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0, f[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0;
        }
        n.Rabbit = s._createHelper(u);
      }(), r.Rabbit;
    });
  }(Vb)), yi;
}
var xi = {}, Yb = {
  get exports() {
    return xi;
  },
  set exports(t) {
    xi = t;
  }
}, wl;
function Gb() {
  return wl || (wl = 1, function(t, e) {
    (function(r, n, i) {
      t.exports = n(de(), er(), tr(), rr(), Ie());
    })(ae, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.StreamCipher, o = n.algo, a = [], c = [], l = [], u = o.RabbitLegacy = s.extend({
          _doReset: function() {
            var f = this._key.words, h = this.cfg.iv, p = this._X = [
              f[0],
              f[3] << 16 | f[2] >>> 16,
              f[1],
              f[0] << 16 | f[3] >>> 16,
              f[2],
              f[1] << 16 | f[0] >>> 16,
              f[3],
              f[2] << 16 | f[1] >>> 16
            ], v = this._C = [
              f[2] << 16 | f[2] >>> 16,
              f[0] & 4294901760 | f[1] & 65535,
              f[3] << 16 | f[3] >>> 16,
              f[1] & 4294901760 | f[2] & 65535,
              f[0] << 16 | f[0] >>> 16,
              f[2] & 4294901760 | f[3] & 65535,
              f[1] << 16 | f[1] >>> 16,
              f[3] & 4294901760 | f[0] & 65535
            ];
            this._b = 0;
            for (var b = 0; b < 4; b++)
              d.call(this);
            for (var b = 0; b < 8; b++)
              v[b] ^= p[b + 4 & 7];
            if (h) {
              var w = h.words, x = w[0], g = w[1], m = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, E = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, S = m >>> 16 | E & 4294901760, C = E << 16 | m & 65535;
              v[0] ^= m, v[1] ^= S, v[2] ^= E, v[3] ^= C, v[4] ^= m, v[5] ^= S, v[6] ^= E, v[7] ^= C;
              for (var b = 0; b < 4; b++)
                d.call(this);
            }
          },
          _doProcessBlock: function(f, h) {
            var p = this._X;
            d.call(this), a[0] = p[0] ^ p[5] >>> 16 ^ p[3] << 16, a[1] = p[2] ^ p[7] >>> 16 ^ p[5] << 16, a[2] = p[4] ^ p[1] >>> 16 ^ p[7] << 16, a[3] = p[6] ^ p[3] >>> 16 ^ p[1] << 16;
            for (var v = 0; v < 4; v++)
              a[v] = (a[v] << 8 | a[v] >>> 24) & 16711935 | (a[v] << 24 | a[v] >>> 8) & 4278255360, f[h + v] ^= a[v];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function d() {
          for (var f = this._X, h = this._C, p = 0; p < 8; p++)
            c[p] = h[p];
          h[0] = h[0] + 1295307597 + this._b | 0, h[1] = h[1] + 3545052371 + (h[0] >>> 0 < c[0] >>> 0 ? 1 : 0) | 0, h[2] = h[2] + 886263092 + (h[1] >>> 0 < c[1] >>> 0 ? 1 : 0) | 0, h[3] = h[3] + 1295307597 + (h[2] >>> 0 < c[2] >>> 0 ? 1 : 0) | 0, h[4] = h[4] + 3545052371 + (h[3] >>> 0 < c[3] >>> 0 ? 1 : 0) | 0, h[5] = h[5] + 886263092 + (h[4] >>> 0 < c[4] >>> 0 ? 1 : 0) | 0, h[6] = h[6] + 1295307597 + (h[5] >>> 0 < c[5] >>> 0 ? 1 : 0) | 0, h[7] = h[7] + 3545052371 + (h[6] >>> 0 < c[6] >>> 0 ? 1 : 0) | 0, this._b = h[7] >>> 0 < c[7] >>> 0 ? 1 : 0;
          for (var p = 0; p < 8; p++) {
            var v = f[p] + h[p], b = v & 65535, w = v >>> 16, x = ((b * b >>> 17) + b * w >>> 15) + w * w, g = ((v & 4294901760) * v | 0) + ((v & 65535) * v | 0);
            l[p] = x ^ g;
          }
          f[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0, f[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0, f[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0, f[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0, f[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0, f[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0, f[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0, f[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0;
        }
        n.RabbitLegacy = s._createHelper(u);
      }(), r.RabbitLegacy;
    });
  }(Yb)), xi;
}
(function(t, e) {
  (function(r, n, i) {
    t.exports = n(de(), Oi(), Qm(), Xm(), er(), eb(), tr(), Do(), Bu(), sb(), Pu(), lb(), ub(), db(), Ro(), gb(), rr(), Ie(), yb(), Eb(), _b(), Ab(), Hu(), Rb(), kb(), Mb(), Ob(), Pb(), Lb(), Lu(), Ub(), jb(), qb(), Gb());
  })(ae, function(r) {
    return r;
  });
})(Wm);
var Os = {}, $b = {
  get exports() {
    return Os;
  },
  set exports(t) {
    Os = t;
  }
};
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(ae, function() {
    var r = 1e3, n = 6e4, i = 36e5, s = "millisecond", o = "second", a = "minute", c = "hour", l = "day", u = "week", d = "month", f = "quarter", h = "year", p = "date", v = "Invalid Date", b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, x = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(O) {
      var z = ["th", "st", "nd", "rd"], H = O % 100;
      return "[" + O + (z[(H - 20) % 10] || z[H] || z[0]) + "]";
    } }, g = function(O, z, H) {
      var j = String(O);
      return !j || j.length >= z ? O : "" + Array(z + 1 - j.length).join(H) + O;
    }, m = { s: g, z: function(O) {
      var z = -O.utcOffset(), H = Math.abs(z), j = Math.floor(H / 60), G = H % 60;
      return (z <= 0 ? "+" : "-") + g(j, 2, "0") + ":" + g(G, 2, "0");
    }, m: function O(z, H) {
      if (z.date() < H.date())
        return -O(H, z);
      var j = 12 * (H.year() - z.year()) + (H.month() - z.month()), G = z.clone().add(j, d), K = H - G < 0, J = z.clone().add(j + (K ? -1 : 1), d);
      return +(-(j + (H - G) / (K ? G - J : J - G)) || 0);
    }, a: function(O) {
      return O < 0 ? Math.ceil(O) || 0 : Math.floor(O);
    }, p: function(O) {
      return { M: d, y: h, w: u, d: l, D: p, h: c, m: a, s: o, ms: s, Q: f }[O] || String(O || "").toLowerCase().replace(/s$/, "");
    }, u: function(O) {
      return O === void 0;
    } }, E = "en", S = {};
    S[E] = x;
    var C = function(O) {
      return O instanceof I;
    }, T = function O(z, H, j) {
      var G;
      if (!z)
        return E;
      if (typeof z == "string") {
        var K = z.toLowerCase();
        S[K] && (G = K), H && (S[K] = H, G = K);
        var J = z.split("-");
        if (!G && J.length > 1)
          return O(J[0]);
      } else {
        var te = z.name;
        S[te] = z, G = te;
      }
      return !j && G && (E = G), G || !j && E;
    }, B = function(O, z) {
      if (C(O))
        return O.clone();
      var H = typeof z == "object" ? z : {};
      return H.date = O, H.args = arguments, new I(H);
    }, A = m;
    A.l = T, A.i = C, A.w = function(O, z) {
      return B(O, { locale: z.$L, utc: z.$u, x: z.$x, $offset: z.$offset });
    };
    var I = function() {
      function O(H) {
        this.$L = T(H.locale, null, !0), this.parse(H);
      }
      var z = O.prototype;
      return z.parse = function(H) {
        this.$d = function(j) {
          var G = j.date, K = j.utc;
          if (G === null)
            return /* @__PURE__ */ new Date(NaN);
          if (A.u(G))
            return /* @__PURE__ */ new Date();
          if (G instanceof Date)
            return new Date(G);
          if (typeof G == "string" && !/Z$/i.test(G)) {
            var J = G.match(b);
            if (J) {
              var te = J[2] - 1 || 0, F = (J[7] || "0").substring(0, 3);
              return K ? new Date(Date.UTC(J[1], te, J[3] || 1, J[4] || 0, J[5] || 0, J[6] || 0, F)) : new Date(J[1], te, J[3] || 1, J[4] || 0, J[5] || 0, J[6] || 0, F);
            }
          }
          return new Date(G);
        }(H), this.$x = H.x || {}, this.init();
      }, z.init = function() {
        var H = this.$d;
        this.$y = H.getFullYear(), this.$M = H.getMonth(), this.$D = H.getDate(), this.$W = H.getDay(), this.$H = H.getHours(), this.$m = H.getMinutes(), this.$s = H.getSeconds(), this.$ms = H.getMilliseconds();
      }, z.$utils = function() {
        return A;
      }, z.isValid = function() {
        return this.$d.toString() !== v;
      }, z.isSame = function(H, j) {
        var G = B(H);
        return this.startOf(j) <= G && G <= this.endOf(j);
      }, z.isAfter = function(H, j) {
        return B(H) < this.startOf(j);
      }, z.isBefore = function(H, j) {
        return this.endOf(j) < B(H);
      }, z.$g = function(H, j, G) {
        return A.u(H) ? this[j] : this.set(G, H);
      }, z.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, z.valueOf = function() {
        return this.$d.getTime();
      }, z.startOf = function(H, j) {
        var G = this, K = !!A.u(j) || j, J = A.p(H), te = function(le, Ae) {
          var Me = A.w(G.$u ? Date.UTC(G.$y, Ae, le) : new Date(G.$y, Ae, le), G);
          return K ? Me : Me.endOf(l);
        }, F = function(le, Ae) {
          return A.w(G.toDate()[le].apply(G.toDate("s"), (K ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Ae)), G);
        }, U = this.$W, V = this.$M, q = this.$D, fe = "set" + (this.$u ? "UTC" : "");
        switch (J) {
          case h:
            return K ? te(1, 0) : te(31, 11);
          case d:
            return K ? te(1, V) : te(0, V + 1);
          case u:
            var ge = this.$locale().weekStart || 0, Se = (U < ge ? U + 7 : U) - ge;
            return te(K ? q - Se : q + (6 - Se), V);
          case l:
          case p:
            return F(fe + "Hours", 0);
          case c:
            return F(fe + "Minutes", 1);
          case a:
            return F(fe + "Seconds", 2);
          case o:
            return F(fe + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, z.endOf = function(H) {
        return this.startOf(H, !1);
      }, z.$set = function(H, j) {
        var G, K = A.p(H), J = "set" + (this.$u ? "UTC" : ""), te = (G = {}, G[l] = J + "Date", G[p] = J + "Date", G[d] = J + "Month", G[h] = J + "FullYear", G[c] = J + "Hours", G[a] = J + "Minutes", G[o] = J + "Seconds", G[s] = J + "Milliseconds", G)[K], F = K === l ? this.$D + (j - this.$W) : j;
        if (K === d || K === h) {
          var U = this.clone().set(p, 1);
          U.$d[te](F), U.init(), this.$d = U.set(p, Math.min(this.$D, U.daysInMonth())).$d;
        } else
          te && this.$d[te](F);
        return this.init(), this;
      }, z.set = function(H, j) {
        return this.clone().$set(H, j);
      }, z.get = function(H) {
        return this[A.p(H)]();
      }, z.add = function(H, j) {
        var G, K = this;
        H = Number(H);
        var J = A.p(j), te = function(V) {
          var q = B(K);
          return A.w(q.date(q.date() + Math.round(V * H)), K);
        };
        if (J === d)
          return this.set(d, this.$M + H);
        if (J === h)
          return this.set(h, this.$y + H);
        if (J === l)
          return te(1);
        if (J === u)
          return te(7);
        var F = (G = {}, G[a] = n, G[c] = i, G[o] = r, G)[J] || 1, U = this.$d.getTime() + H * F;
        return A.w(U, this);
      }, z.subtract = function(H, j) {
        return this.add(-1 * H, j);
      }, z.format = function(H) {
        var j = this, G = this.$locale();
        if (!this.isValid())
          return G.invalidDate || v;
        var K = H || "YYYY-MM-DDTHH:mm:ssZ", J = A.z(this), te = this.$H, F = this.$m, U = this.$M, V = G.weekdays, q = G.months, fe = function(Ae, Me, dt, Qe) {
          return Ae && (Ae[Me] || Ae(j, K)) || dt[Me].slice(0, Qe);
        }, ge = function(Ae) {
          return A.s(te % 12 || 12, Ae, "0");
        }, Se = G.meridiem || function(Ae, Me, dt) {
          var Qe = Ae < 12 ? "AM" : "PM";
          return dt ? Qe.toLowerCase() : Qe;
        }, le = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: U + 1, MM: A.s(U + 1, 2, "0"), MMM: fe(G.monthsShort, U, q, 3), MMMM: fe(q, U), D: this.$D, DD: A.s(this.$D, 2, "0"), d: String(this.$W), dd: fe(G.weekdaysMin, this.$W, V, 2), ddd: fe(G.weekdaysShort, this.$W, V, 3), dddd: V[this.$W], H: String(te), HH: A.s(te, 2, "0"), h: ge(1), hh: ge(2), a: Se(te, F, !0), A: Se(te, F, !1), m: String(F), mm: A.s(F, 2, "0"), s: String(this.$s), ss: A.s(this.$s, 2, "0"), SSS: A.s(this.$ms, 3, "0"), Z: J };
        return K.replace(w, function(Ae, Me) {
          return Me || le[Ae] || J.replace(":", "");
        });
      }, z.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, z.diff = function(H, j, G) {
        var K, J = A.p(j), te = B(H), F = (te.utcOffset() - this.utcOffset()) * n, U = this - te, V = A.m(this, te);
        return V = (K = {}, K[h] = V / 12, K[d] = V, K[f] = V / 3, K[u] = (U - F) / 6048e5, K[l] = (U - F) / 864e5, K[c] = U / i, K[a] = U / n, K[o] = U / r, K)[J] || U, G ? V : A.a(V);
      }, z.daysInMonth = function() {
        return this.endOf(d).$D;
      }, z.$locale = function() {
        return S[this.$L];
      }, z.locale = function(H, j) {
        if (!H)
          return this.$L;
        var G = this.clone(), K = T(H, j, !0);
        return K && (G.$L = K), G;
      }, z.clone = function() {
        return A.w(this.$d, this);
      }, z.toDate = function() {
        return new Date(this.valueOf());
      }, z.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, z.toISOString = function() {
        return this.$d.toISOString();
      }, z.toString = function() {
        return this.$d.toUTCString();
      }, O;
    }(), P = I.prototype;
    return B.prototype = P, [["$ms", s], ["$s", o], ["$m", a], ["$H", c], ["$W", l], ["$M", d], ["$y", h], ["$D", p]].forEach(function(O) {
      P[O[1]] = function(z) {
        return this.$g(z, O[0], O[1]);
      };
    }), B.extend = function(O, z) {
      return O.$i || (O(z, I, B), O.$i = !0), B;
    }, B.locale = T, B.isDayjs = C, B.unix = function(O) {
      return B(1e3 * O);
    }, B.en = S[E], B.Ls = S, B.p = {}, B;
  });
})($b);
const Re = Os;
var Fu = function() {
  if (typeof Map < "u")
    return Map;
  function t(e, r) {
    var n = -1;
    return e.some(function(i, s) {
      return i[0] === r ? (n = s, !0) : !1;
    }), n;
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
      }), e.prototype.get = function(r) {
        var n = t(this.__entries__, r), i = this.__entries__[n];
        return i && i[1];
      }, e.prototype.set = function(r, n) {
        var i = t(this.__entries__, r);
        ~i ? this.__entries__[i][1] = n : this.__entries__.push([r, n]);
      }, e.prototype.delete = function(r) {
        var n = this.__entries__, i = t(n, r);
        ~i && n.splice(i, 1);
      }, e.prototype.has = function(r) {
        return !!~t(this.__entries__, r);
      }, e.prototype.clear = function() {
        this.__entries__.splice(0);
      }, e.prototype.forEach = function(r, n) {
        n === void 0 && (n = null);
        for (var i = 0, s = this.__entries__; i < s.length; i++) {
          var o = s[i];
          r.call(n, o[1], o[0]);
        }
      }, e;
    }()
  );
}(), Bs = typeof window < "u" && typeof document < "u" && window.document === document, Ei = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Qb = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Ei) : function(t) {
    return setTimeout(function() {
      return t(Date.now());
    }, 1e3 / 60);
  };
}(), Zb = 2;
function Xb(t, e) {
  var r = !1, n = !1, i = 0;
  function s() {
    r && (r = !1, t()), n && a();
  }
  function o() {
    Qb(s);
  }
  function a() {
    var c = Date.now();
    if (r) {
      if (c - i < Zb)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(o, e);
    i = c;
  }
  return a;
}
var Kb = 20, Jb = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], e1 = typeof MutationObserver < "u", t1 = (
  /** @class */
  function() {
    function t() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Xb(this.refresh.bind(this), Kb);
    }
    return t.prototype.addObserver = function(e) {
      ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_();
    }, t.prototype.removeObserver = function(e) {
      var r = this.observers_, n = r.indexOf(e);
      ~n && r.splice(n, 1), !r.length && this.connected_ && this.disconnect_();
    }, t.prototype.refresh = function() {
      var e = this.updateObservers_();
      e && this.refresh();
    }, t.prototype.updateObservers_ = function() {
      var e = this.observers_.filter(function(r) {
        return r.gatherActive(), r.hasActive();
      });
      return e.forEach(function(r) {
        return r.broadcastActive();
      }), e.length > 0;
    }, t.prototype.connect_ = function() {
      !Bs || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), e1 ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, t.prototype.disconnect_ = function() {
      !Bs || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, t.prototype.onTransitionEnd_ = function(e) {
      var r = e.propertyName, n = r === void 0 ? "" : r, i = Jb.some(function(s) {
        return !!~n.indexOf(s);
      });
      i && this.refresh();
    }, t.getInstance = function() {
      return this.instance_ || (this.instance_ = new t()), this.instance_;
    }, t.instance_ = null, t;
  }()
), zu = function(t, e) {
  for (var r = 0, n = Object.keys(e); r < n.length; r++) {
    var i = n[r];
    Object.defineProperty(t, i, {
      value: e[i],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return t;
}, vr = function(t) {
  var e = t && t.ownerDocument && t.ownerDocument.defaultView;
  return e || Ei;
}, Uu = Bi(0, 0, 0, 0);
function wi(t) {
  return parseFloat(t) || 0;
}
function _l(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  return e.reduce(function(n, i) {
    var s = t["border-" + i + "-width"];
    return n + wi(s);
  }, 0);
}
function r1(t) {
  for (var e = ["top", "right", "bottom", "left"], r = {}, n = 0, i = e; n < i.length; n++) {
    var s = i[n], o = t["padding-" + s];
    r[s] = wi(o);
  }
  return r;
}
function n1(t) {
  var e = t.getBBox();
  return Bi(0, 0, e.width, e.height);
}
function i1(t) {
  var e = t.clientWidth, r = t.clientHeight;
  if (!e && !r)
    return Uu;
  var n = vr(t).getComputedStyle(t), i = r1(n), s = i.left + i.right, o = i.top + i.bottom, a = wi(n.width), c = wi(n.height);
  if (n.boxSizing === "border-box" && (Math.round(a + s) !== e && (a -= _l(n, "left", "right") + s), Math.round(c + o) !== r && (c -= _l(n, "top", "bottom") + o)), !o1(t)) {
    var l = Math.round(a + s) - e, u = Math.round(c + o) - r;
    Math.abs(l) !== 1 && (a -= l), Math.abs(u) !== 1 && (c -= u);
  }
  return Bi(i.left, i.top, a, c);
}
var s1 = function() {
  return typeof SVGGraphicsElement < "u" ? function(t) {
    return t instanceof vr(t).SVGGraphicsElement;
  } : function(t) {
    return t instanceof vr(t).SVGElement && typeof t.getBBox == "function";
  };
}();
function o1(t) {
  return t === vr(t).document.documentElement;
}
function a1(t) {
  return Bs ? s1(t) ? n1(t) : i1(t) : Uu;
}
function l1(t) {
  var e = t.x, r = t.y, n = t.width, i = t.height, s = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, o = Object.create(s.prototype);
  return zu(o, {
    x: e,
    y: r,
    width: n,
    height: i,
    top: r,
    right: e + n,
    bottom: i + r,
    left: e
  }), o;
}
function Bi(t, e, r, n) {
  return { x: t, y: e, width: r, height: n };
}
var c1 = (
  /** @class */
  function() {
    function t(e) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Bi(0, 0, 0, 0), this.target = e;
    }
    return t.prototype.isActive = function() {
      var e = a1(this.target);
      return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
    }, t.prototype.broadcastRect = function() {
      var e = this.contentRect_;
      return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e;
    }, t;
  }()
), u1 = (
  /** @class */
  function() {
    function t(e, r) {
      var n = l1(r);
      zu(this, { target: e, contentRect: n });
    }
    return t;
  }()
), f1 = (
  /** @class */
  function() {
    function t(e, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new Fu(), typeof e != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = e, this.controller_ = r, this.callbackCtx_ = n;
    }
    return t.prototype.observe = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof vr(e).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(e) || (r.set(e, new c1(e)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, t.prototype.unobserve = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof vr(e).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(e) && (r.delete(e), r.size || this.controller_.removeObserver(this));
      }
    }, t.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, t.prototype.gatherActive = function() {
      var e = this;
      this.clearActive(), this.observations_.forEach(function(r) {
        r.isActive() && e.activeObservations_.push(r);
      });
    }, t.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var e = this.callbackCtx_, r = this.activeObservations_.map(function(n) {
          return new u1(n.target, n.broadcastRect());
        });
        this.callback_.call(e, r, e), this.clearActive();
      }
    }, t.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, t.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, t;
  }()
), Wu = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Fu(), ju = (
  /** @class */
  function() {
    function t(e) {
      if (!(this instanceof t))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = t1.getInstance(), n = new f1(e, r, this);
      Wu.set(this, n);
    }
    return t;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(t) {
  ju.prototype[t] = function() {
    var e;
    return (e = Wu.get(this))[t].apply(e, arguments);
  };
});
(function() {
  return typeof Ei.ResizeObserver < "u" ? Ei.ResizeObserver : ju;
})();
Lu();
er();
var Sl = {}, d1 = {
  get exports() {
    return Sl;
  },
  set exports(t) {
    Sl = t;
  }
};
(function(t, e) {
  (function(r, n) {
    t.exports = n(de());
  })(ae, function(r) {
    return r.enc.Utf8;
  });
})(d1);
tr();
Hu();
var Al = {}, h1 = {
  get exports() {
    return Al;
  },
  set exports(t) {
    Al = t;
  }
};
(function(t, e) {
  (function(r, n, i) {
    t.exports = n(de(), Ie());
  })(ae, function(r) {
    return r.pad.Pkcs7;
  });
})(h1);
function p1(t) {
  var e = [], r = "";
  for (r in t)
    e.push(r);
  return e;
}
function Cl(t) {
  return t = JSON.stringify(t), !(typeof t != "string" || !/^\{[\s\S]*\}$/.test(t));
}
function g1(t) {
  return t instanceof Array;
}
function v1(t) {
  return Array.prototype.slice.call(t);
}
function zr() {
  if (!(this instanceof zr))
    return new zr();
}
zr.prototype = {
  get: function(t) {
    for (var e = t + "=", r = document.cookie.split(";"), n = 0; n < r.length; n++) {
      for (var i = r[n]; i.charAt(0) == " "; )
        i = i.substring(1, i.length);
      if (i.indexOf(e) == 0)
        return decodeURI(i.substring(e.length, i.length));
    }
    return !1;
  },
  set: function(t, e, r) {
    if (Cl(t))
      for (const n in t)
        this.set(n, t[n], e, r);
    else if (typeof t == "string") {
      const n = Cl(r) ? r : { expires: r }, i = n.path !== void 0 ? `;path=${n.path};path=/` : ";path=/", s = n.domain ? `;domain=${n.domain}` : "", o = n.secure ? ";secure" : "";
      let a = n.expires !== void 0 ? n.expires : "";
      typeof a == "string" && a !== "" ? a = new Date(a) : typeof a == "number" && (a = new Date(+/* @__PURE__ */ new Date() + 1e3 * 60 * 60 * 24 * a)), a !== "" && "toGMTString" in a && (a = `;expires=${a.toGMTString()}`);
      const c = n.sameSite ? `;SameSite=${n.sameSite}` : "";
      document.cookie = `${t}=${encodeURI(e) + a + i + s + o + c}`;
    }
  },
  remove: function(t) {
    t = g1(t) ? t : v1(arguments);
    for (var e = 0, r = t.length; e < r; e++)
      this.set(t[e], "", -1);
    return t;
  },
  clear: function(t) {
    return t ? this.remove(t) : this.remove(p1(this.all()));
  },
  all: function() {
    if (document.cookie === "")
      return {};
    for (var t = document.cookie.split("; "), e = {}, r = 0, n = t.length; r < n; r++) {
      var i = t[r].split("=");
      e[decodeURI(i[0])] = decodeURI(i[1]);
    }
    return e;
  }
};
for (const t in zr.prototype)
  zr.prototype[t];
var Dl = {}, m1 = {
  get exports() {
    return Dl;
  },
  set exports(t) {
    Dl = t;
  }
};
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(t, e) {
  (function(r) {
    t.exports = r();
  })(function() {
    return function r(n, i, s) {
      function o(l, u) {
        if (!i[l]) {
          if (!n[l]) {
            var d = typeof Mr == "function" && Mr;
            if (!u && d)
              return d(l, !0);
            if (a)
              return a(l, !0);
            var f = new Error("Cannot find module '" + l + "'");
            throw f.code = "MODULE_NOT_FOUND", f;
          }
          var h = i[l] = { exports: {} };
          n[l][0].call(h.exports, function(p) {
            var v = n[l][1][p];
            return o(v || p);
          }, h, h.exports, r, n, i, s);
        }
        return i[l].exports;
      }
      for (var a = typeof Mr == "function" && Mr, c = 0; c < s.length; c++)
        o(s[c]);
      return o;
    }({ 1: [function(r, n, i) {
      (function(s) {
        var o = s.MutationObserver || s.WebKitMutationObserver, a;
        if (o) {
          var c = 0, l = new o(p), u = s.document.createTextNode("");
          l.observe(u, {
            characterData: !0
          }), a = function() {
            u.data = c = ++c % 2;
          };
        } else if (!s.setImmediate && typeof s.MessageChannel < "u") {
          var d = new s.MessageChannel();
          d.port1.onmessage = p, a = function() {
            d.port2.postMessage(0);
          };
        } else
          "document" in s && "onreadystatechange" in s.document.createElement("script") ? a = function() {
            var b = s.document.createElement("script");
            b.onreadystatechange = function() {
              p(), b.onreadystatechange = null, b.parentNode.removeChild(b), b = null;
            }, s.document.documentElement.appendChild(b);
          } : a = function() {
            setTimeout(p, 0);
          };
        var f, h = [];
        function p() {
          f = !0;
          for (var b, w, x = h.length; x; ) {
            for (w = h, h = [], b = -1; ++b < x; )
              w[b]();
            x = h.length;
          }
          f = !1;
        }
        n.exports = v;
        function v(b) {
          h.push(b) === 1 && !f && a();
        }
      }).call(this, typeof ae < "u" ? ae : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(r, n, i) {
      var s = r(1);
      function o() {
      }
      var a = {}, c = ["REJECTED"], l = ["FULFILLED"], u = ["PENDING"];
      n.exports = d;
      function d(E) {
        if (typeof E != "function")
          throw new TypeError("resolver must be a function");
        this.state = u, this.queue = [], this.outcome = void 0, E !== o && v(this, E);
      }
      d.prototype.catch = function(E) {
        return this.then(null, E);
      }, d.prototype.then = function(E, S) {
        if (typeof E != "function" && this.state === l || typeof S != "function" && this.state === c)
          return this;
        var C = new this.constructor(o);
        if (this.state !== u) {
          var T = this.state === l ? E : S;
          h(C, T, this.outcome);
        } else
          this.queue.push(new f(C, E, S));
        return C;
      };
      function f(E, S, C) {
        this.promise = E, typeof S == "function" && (this.onFulfilled = S, this.callFulfilled = this.otherCallFulfilled), typeof C == "function" && (this.onRejected = C, this.callRejected = this.otherCallRejected);
      }
      f.prototype.callFulfilled = function(E) {
        a.resolve(this.promise, E);
      }, f.prototype.otherCallFulfilled = function(E) {
        h(this.promise, this.onFulfilled, E);
      }, f.prototype.callRejected = function(E) {
        a.reject(this.promise, E);
      }, f.prototype.otherCallRejected = function(E) {
        h(this.promise, this.onRejected, E);
      };
      function h(E, S, C) {
        s(function() {
          var T;
          try {
            T = S(C);
          } catch (B) {
            return a.reject(E, B);
          }
          T === E ? a.reject(E, new TypeError("Cannot resolve promise with itself")) : a.resolve(E, T);
        });
      }
      a.resolve = function(E, S) {
        var C = b(p, S);
        if (C.status === "error")
          return a.reject(E, C.value);
        var T = C.value;
        if (T)
          v(E, T);
        else {
          E.state = l, E.outcome = S;
          for (var B = -1, A = E.queue.length; ++B < A; )
            E.queue[B].callFulfilled(S);
        }
        return E;
      }, a.reject = function(E, S) {
        E.state = c, E.outcome = S;
        for (var C = -1, T = E.queue.length; ++C < T; )
          E.queue[C].callRejected(S);
        return E;
      };
      function p(E) {
        var S = E && E.then;
        if (E && (typeof E == "object" || typeof E == "function") && typeof S == "function")
          return function() {
            S.apply(E, arguments);
          };
      }
      function v(E, S) {
        var C = !1;
        function T(P) {
          C || (C = !0, a.reject(E, P));
        }
        function B(P) {
          C || (C = !0, a.resolve(E, P));
        }
        function A() {
          S(B, T);
        }
        var I = b(A);
        I.status === "error" && T(I.value);
      }
      function b(E, S) {
        var C = {};
        try {
          C.value = E(S), C.status = "success";
        } catch (T) {
          C.status = "error", C.value = T;
        }
        return C;
      }
      d.resolve = w;
      function w(E) {
        return E instanceof this ? E : a.resolve(new this(o), E);
      }
      d.reject = x;
      function x(E) {
        var S = new this(o);
        return a.reject(S, E);
      }
      d.all = g;
      function g(E) {
        var S = this;
        if (Object.prototype.toString.call(E) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var C = E.length, T = !1;
        if (!C)
          return this.resolve([]);
        for (var B = new Array(C), A = 0, I = -1, P = new this(o); ++I < C; )
          O(E[I], I);
        return P;
        function O(z, H) {
          S.resolve(z).then(j, function(G) {
            T || (T = !0, a.reject(P, G));
          });
          function j(G) {
            B[H] = G, ++A === C && !T && (T = !0, a.resolve(P, B));
          }
        }
      }
      d.race = m;
      function m(E) {
        var S = this;
        if (Object.prototype.toString.call(E) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var C = E.length, T = !1;
        if (!C)
          return this.resolve([]);
        for (var B = -1, A = new this(o); ++B < C; )
          I(E[B]);
        return A;
        function I(P) {
          S.resolve(P).then(function(O) {
            T || (T = !0, a.resolve(A, O));
          }, function(O) {
            T || (T = !0, a.reject(A, O));
          });
        }
      }
    }, { 1: 1 }], 3: [function(r, n, i) {
      (function(s) {
        typeof s.Promise != "function" && (s.Promise = r(2));
      }).call(this, typeof ae < "u" ? ae : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(r, n, i) {
      var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
        return typeof y;
      } : function(y) {
        return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
      };
      function o(y, R) {
        if (!(y instanceof R))
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
      var c = a();
      function l() {
        try {
          if (!c || !c.open)
            return !1;
          var y = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), R = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!y || R) && typeof indexedDB < "u" && // some outdated implementations of IDB that appear on Samsung
          // and HTC Android devices <4.4 are missing IDBKeyRange
          // See: https://github.com/mozilla/localForage/issues/128
          // See: https://github.com/mozilla/localForage/issues/272
          typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function u(y, R) {
        y = y || [], R = R || {};
        try {
          return new Blob(y, R);
        } catch (k) {
          if (k.name !== "TypeError")
            throw k;
          for (var _ = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, M = new _(), N = 0; N < y.length; N += 1)
            M.append(y[N]);
          return M.getBlob(R.type);
        }
      }
      typeof Promise > "u" && r(3);
      var d = Promise;
      function f(y, R) {
        R && y.then(function(_) {
          R(null, _);
        }, function(_) {
          R(_);
        });
      }
      function h(y, R, _) {
        typeof R == "function" && y.then(R), typeof _ == "function" && y.catch(_);
      }
      function p(y) {
        return typeof y != "string" && (console.warn(y + " used as a key, but it is not a string."), y = String(y)), y;
      }
      function v() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var b = "local-forage-detect-blob-support", w = void 0, x = {}, g = Object.prototype.toString, m = "readonly", E = "readwrite";
      function S(y) {
        for (var R = y.length, _ = new ArrayBuffer(R), M = new Uint8Array(_), N = 0; N < R; N++)
          M[N] = y.charCodeAt(N);
        return _;
      }
      function C(y) {
        return new d(function(R) {
          var _ = y.transaction(b, E), M = u([""]);
          _.objectStore(b).put(M, "key"), _.onabort = function(N) {
            N.preventDefault(), N.stopPropagation(), R(!1);
          }, _.oncomplete = function() {
            var N = navigator.userAgent.match(/Chrome\/(\d+)/), k = navigator.userAgent.match(/Edge\//);
            R(k || !N || parseInt(N[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function T(y) {
        return typeof w == "boolean" ? d.resolve(w) : C(y).then(function(R) {
          return w = R, w;
        });
      }
      function B(y) {
        var R = x[y.name], _ = {};
        _.promise = new d(function(M, N) {
          _.resolve = M, _.reject = N;
        }), R.deferredOperations.push(_), R.dbReady ? R.dbReady = R.dbReady.then(function() {
          return _.promise;
        }) : R.dbReady = _.promise;
      }
      function A(y) {
        var R = x[y.name], _ = R.deferredOperations.pop();
        if (_)
          return _.resolve(), _.promise;
      }
      function I(y, R) {
        var _ = x[y.name], M = _.deferredOperations.pop();
        if (M)
          return M.reject(R), M.promise;
      }
      function P(y, R) {
        return new d(function(_, M) {
          if (x[y.name] = x[y.name] || U(), y.db)
            if (R)
              B(y), y.db.close();
            else
              return _(y.db);
          var N = [y.name];
          R && N.push(y.version);
          var k = c.open.apply(c, N);
          R && (k.onupgradeneeded = function(W) {
            var $ = k.result;
            try {
              $.createObjectStore(y.storeName), W.oldVersion <= 1 && $.createObjectStore(b);
            } catch (Q) {
              if (Q.name === "ConstraintError")
                console.warn('The database "' + y.name + '" has been upgraded from version ' + W.oldVersion + " to version " + W.newVersion + ', but the storage "' + y.storeName + '" already exists.');
              else
                throw Q;
            }
          }), k.onerror = function(W) {
            W.preventDefault(), M(k.error);
          }, k.onsuccess = function() {
            var W = k.result;
            W.onversionchange = function($) {
              $.target.close();
            }, _(W), A(y);
          };
        });
      }
      function O(y) {
        return P(y, !1);
      }
      function z(y) {
        return P(y, !0);
      }
      function H(y, R) {
        if (!y.db)
          return !0;
        var _ = !y.db.objectStoreNames.contains(y.storeName), M = y.version < y.db.version, N = y.version > y.db.version;
        if (M && (y.version !== R && console.warn('The database "' + y.name + `" can't be downgraded from version ` + y.db.version + " to version " + y.version + "."), y.version = y.db.version), N || _) {
          if (_) {
            var k = y.db.version + 1;
            k > y.version && (y.version = k);
          }
          return !0;
        }
        return !1;
      }
      function j(y) {
        return new d(function(R, _) {
          var M = new FileReader();
          M.onerror = _, M.onloadend = function(N) {
            var k = btoa(N.target.result || "");
            R({
              __local_forage_encoded_blob: !0,
              data: k,
              type: y.type
            });
          }, M.readAsBinaryString(y);
        });
      }
      function G(y) {
        var R = S(atob(y.data));
        return u([R], { type: y.type });
      }
      function K(y) {
        return y && y.__local_forage_encoded_blob;
      }
      function J(y) {
        var R = this, _ = R._initReady().then(function() {
          var M = x[R._dbInfo.name];
          if (M && M.dbReady)
            return M.dbReady;
        });
        return h(_, y, y), _;
      }
      function te(y) {
        B(y);
        for (var R = x[y.name], _ = R.forages, M = 0; M < _.length; M++) {
          var N = _[M];
          N._dbInfo.db && (N._dbInfo.db.close(), N._dbInfo.db = null);
        }
        return y.db = null, O(y).then(function(k) {
          return y.db = k, H(y) ? z(y) : k;
        }).then(function(k) {
          y.db = R.db = k;
          for (var W = 0; W < _.length; W++)
            _[W]._dbInfo.db = k;
        }).catch(function(k) {
          throw I(y, k), k;
        });
      }
      function F(y, R, _, M) {
        M === void 0 && (M = 1);
        try {
          var N = y.db.transaction(y.storeName, R);
          _(null, N);
        } catch (k) {
          if (M > 0 && (!y.db || k.name === "InvalidStateError" || k.name === "NotFoundError"))
            return d.resolve().then(function() {
              if (!y.db || k.name === "NotFoundError" && !y.db.objectStoreNames.contains(y.storeName) && y.version <= y.db.version)
                return y.db && (y.version = y.db.version + 1), z(y);
            }).then(function() {
              return te(y).then(function() {
                F(y, R, _, M - 1);
              });
            }).catch(_);
          _(k);
        }
      }
      function U() {
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
      function V(y) {
        var R = this, _ = {
          db: null
        };
        if (y)
          for (var M in y)
            _[M] = y[M];
        var N = x[_.name];
        N || (N = U(), x[_.name] = N), N.forages.push(R), R._initReady || (R._initReady = R.ready, R.ready = J);
        var k = [];
        function W() {
          return d.resolve();
        }
        for (var $ = 0; $ < N.forages.length; $++) {
          var Q = N.forages[$];
          Q !== R && k.push(Q._initReady().catch(W));
        }
        var Z = N.forages.slice(0);
        return d.all(k).then(function() {
          return _.db = N.db, O(_);
        }).then(function(X) {
          return _.db = X, H(_, R._defaultConfig.version) ? z(_) : X;
        }).then(function(X) {
          _.db = N.db = X, R._dbInfo = _;
          for (var ee = 0; ee < Z.length; ee++) {
            var ue = Z[ee];
            ue !== R && (ue._dbInfo.db = _.db, ue._dbInfo.version = _.version);
          }
        });
      }
      function q(y, R) {
        var _ = this;
        y = p(y);
        var M = new d(function(N, k) {
          _.ready().then(function() {
            F(_._dbInfo, m, function(W, $) {
              if (W)
                return k(W);
              try {
                var Q = $.objectStore(_._dbInfo.storeName), Z = Q.get(y);
                Z.onsuccess = function() {
                  var X = Z.result;
                  X === void 0 && (X = null), K(X) && (X = G(X)), N(X);
                }, Z.onerror = function() {
                  k(Z.error);
                };
              } catch (X) {
                k(X);
              }
            });
          }).catch(k);
        });
        return f(M, R), M;
      }
      function fe(y, R) {
        var _ = this, M = new d(function(N, k) {
          _.ready().then(function() {
            F(_._dbInfo, m, function(W, $) {
              if (W)
                return k(W);
              try {
                var Q = $.objectStore(_._dbInfo.storeName), Z = Q.openCursor(), X = 1;
                Z.onsuccess = function() {
                  var ee = Z.result;
                  if (ee) {
                    var ue = ee.value;
                    K(ue) && (ue = G(ue));
                    var ve = y(ue, ee.key, X++);
                    ve !== void 0 ? N(ve) : ee.continue();
                  } else
                    N();
                }, Z.onerror = function() {
                  k(Z.error);
                };
              } catch (ee) {
                k(ee);
              }
            });
          }).catch(k);
        });
        return f(M, R), M;
      }
      function ge(y, R, _) {
        var M = this;
        y = p(y);
        var N = new d(function(k, W) {
          var $;
          M.ready().then(function() {
            return $ = M._dbInfo, g.call(R) === "[object Blob]" ? T($.db).then(function(Q) {
              return Q ? R : j(R);
            }) : R;
          }).then(function(Q) {
            F(M._dbInfo, E, function(Z, X) {
              if (Z)
                return W(Z);
              try {
                var ee = X.objectStore(M._dbInfo.storeName);
                Q === null && (Q = void 0);
                var ue = ee.put(Q, y);
                X.oncomplete = function() {
                  Q === void 0 && (Q = null), k(Q);
                }, X.onabort = X.onerror = function() {
                  var ve = ue.error ? ue.error : ue.transaction.error;
                  W(ve);
                };
              } catch (ve) {
                W(ve);
              }
            });
          }).catch(W);
        });
        return f(N, _), N;
      }
      function Se(y, R) {
        var _ = this;
        y = p(y);
        var M = new d(function(N, k) {
          _.ready().then(function() {
            F(_._dbInfo, E, function(W, $) {
              if (W)
                return k(W);
              try {
                var Q = $.objectStore(_._dbInfo.storeName), Z = Q.delete(y);
                $.oncomplete = function() {
                  N();
                }, $.onerror = function() {
                  k(Z.error);
                }, $.onabort = function() {
                  var X = Z.error ? Z.error : Z.transaction.error;
                  k(X);
                };
              } catch (X) {
                k(X);
              }
            });
          }).catch(k);
        });
        return f(M, R), M;
      }
      function le(y) {
        var R = this, _ = new d(function(M, N) {
          R.ready().then(function() {
            F(R._dbInfo, E, function(k, W) {
              if (k)
                return N(k);
              try {
                var $ = W.objectStore(R._dbInfo.storeName), Q = $.clear();
                W.oncomplete = function() {
                  M();
                }, W.onabort = W.onerror = function() {
                  var Z = Q.error ? Q.error : Q.transaction.error;
                  N(Z);
                };
              } catch (Z) {
                N(Z);
              }
            });
          }).catch(N);
        });
        return f(_, y), _;
      }
      function Ae(y) {
        var R = this, _ = new d(function(M, N) {
          R.ready().then(function() {
            F(R._dbInfo, m, function(k, W) {
              if (k)
                return N(k);
              try {
                var $ = W.objectStore(R._dbInfo.storeName), Q = $.count();
                Q.onsuccess = function() {
                  M(Q.result);
                }, Q.onerror = function() {
                  N(Q.error);
                };
              } catch (Z) {
                N(Z);
              }
            });
          }).catch(N);
        });
        return f(_, y), _;
      }
      function Me(y, R) {
        var _ = this, M = new d(function(N, k) {
          if (y < 0) {
            N(null);
            return;
          }
          _.ready().then(function() {
            F(_._dbInfo, m, function(W, $) {
              if (W)
                return k(W);
              try {
                var Q = $.objectStore(_._dbInfo.storeName), Z = !1, X = Q.openKeyCursor();
                X.onsuccess = function() {
                  var ee = X.result;
                  if (!ee) {
                    N(null);
                    return;
                  }
                  y === 0 || Z ? N(ee.key) : (Z = !0, ee.advance(y));
                }, X.onerror = function() {
                  k(X.error);
                };
              } catch (ee) {
                k(ee);
              }
            });
          }).catch(k);
        });
        return f(M, R), M;
      }
      function dt(y) {
        var R = this, _ = new d(function(M, N) {
          R.ready().then(function() {
            F(R._dbInfo, m, function(k, W) {
              if (k)
                return N(k);
              try {
                var $ = W.objectStore(R._dbInfo.storeName), Q = $.openKeyCursor(), Z = [];
                Q.onsuccess = function() {
                  var X = Q.result;
                  if (!X) {
                    M(Z);
                    return;
                  }
                  Z.push(X.key), X.continue();
                }, Q.onerror = function() {
                  N(Q.error);
                };
              } catch (X) {
                N(X);
              }
            });
          }).catch(N);
        });
        return f(_, y), _;
      }
      function Qe(y, R) {
        R = v.apply(this, arguments);
        var _ = this.config();
        y = typeof y != "function" && y || {}, y.name || (y.name = y.name || _.name, y.storeName = y.storeName || _.storeName);
        var M = this, N;
        if (!y.name)
          N = d.reject("Invalid arguments");
        else {
          var k = y.name === _.name && M._dbInfo.db, W = k ? d.resolve(M._dbInfo.db) : O(y).then(function($) {
            var Q = x[y.name], Z = Q.forages;
            Q.db = $;
            for (var X = 0; X < Z.length; X++)
              Z[X]._dbInfo.db = $;
            return $;
          });
          y.storeName ? N = W.then(function($) {
            if ($.objectStoreNames.contains(y.storeName)) {
              var Q = $.version + 1;
              B(y);
              var Z = x[y.name], X = Z.forages;
              $.close();
              for (var ee = 0; ee < X.length; ee++) {
                var ue = X[ee];
                ue._dbInfo.db = null, ue._dbInfo.version = Q;
              }
              var ve = new d(function(be, De) {
                var Ce = c.open(y.name, Q);
                Ce.onerror = function(Ze) {
                  var Dr = Ce.result;
                  Dr.close(), De(Ze);
                }, Ce.onupgradeneeded = function() {
                  var Ze = Ce.result;
                  Ze.deleteObjectStore(y.storeName);
                }, Ce.onsuccess = function() {
                  var Ze = Ce.result;
                  Ze.close(), be(Ze);
                };
              });
              return ve.then(function(be) {
                Z.db = be;
                for (var De = 0; De < X.length; De++) {
                  var Ce = X[De];
                  Ce._dbInfo.db = be, A(Ce._dbInfo);
                }
              }).catch(function(be) {
                throw (I(y, be) || d.resolve()).catch(function() {
                }), be;
              });
            }
          }) : N = W.then(function($) {
            B(y);
            var Q = x[y.name], Z = Q.forages;
            $.close();
            for (var X = 0; X < Z.length; X++) {
              var ee = Z[X];
              ee._dbInfo.db = null;
            }
            var ue = new d(function(ve, be) {
              var De = c.deleteDatabase(y.name);
              De.onerror = function() {
                var Ce = De.result;
                Ce && Ce.close(), be(De.error);
              }, De.onblocked = function() {
                console.warn('dropInstance blocked for database "' + y.name + '" until all open connections are closed');
              }, De.onsuccess = function() {
                var Ce = De.result;
                Ce && Ce.close(), ve(Ce);
              };
            });
            return ue.then(function(ve) {
              Q.db = ve;
              for (var be = 0; be < Z.length; be++) {
                var De = Z[be];
                A(De._dbInfo);
              }
            }).catch(function(ve) {
              throw (I(y, ve) || d.resolve()).catch(function() {
              }), ve;
            });
          });
        }
        return f(N, R), N;
      }
      var Ve = {
        _driver: "asyncStorage",
        _initStorage: V,
        _support: l(),
        iterate: fe,
        getItem: q,
        setItem: ge,
        removeItem: Se,
        clear: le,
        length: Ae,
        key: Me,
        keys: dt,
        dropInstance: Qe
      };
      function He() {
        return typeof openDatabase == "function";
      }
      var qe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ft = "~~local_forage_type~", zt = /^~~local_forage_type~([^~]+)~/, it = "__lfsc__:", Ut = it.length, ht = "arbf", Le = "blob", Fe = "si08", Ke = "ui08", Wt = "uic8", xr = "si16", pt = "si32", At = "ur16", $r = "ui32", Er = "fl32", wr = "fl64", gt = Ut + ht.length, Ct = Object.prototype.toString;
      function Qr(y) {
        var R = y.length * 0.75, _ = y.length, M, N = 0, k, W, $, Q;
        y[y.length - 1] === "=" && (R--, y[y.length - 2] === "=" && R--);
        var Z = new ArrayBuffer(R), X = new Uint8Array(Z);
        for (M = 0; M < _; M += 4)
          k = qe.indexOf(y[M]), W = qe.indexOf(y[M + 1]), $ = qe.indexOf(y[M + 2]), Q = qe.indexOf(y[M + 3]), X[N++] = k << 2 | W >> 4, X[N++] = (W & 15) << 4 | $ >> 2, X[N++] = ($ & 3) << 6 | Q & 63;
        return Z;
      }
      function nr(y) {
        var R = new Uint8Array(y), _ = "", M;
        for (M = 0; M < R.length; M += 3)
          _ += qe[R[M] >> 2], _ += qe[(R[M] & 3) << 4 | R[M + 1] >> 4], _ += qe[(R[M + 1] & 15) << 2 | R[M + 2] >> 6], _ += qe[R[M + 2] & 63];
        return R.length % 3 === 2 ? _ = _.substring(0, _.length - 1) + "=" : R.length % 3 === 1 && (_ = _.substring(0, _.length - 2) + "=="), _;
      }
      function Zr(y, R) {
        var _ = "";
        if (y && (_ = Ct.call(y)), y && (_ === "[object ArrayBuffer]" || y.buffer && Ct.call(y.buffer) === "[object ArrayBuffer]")) {
          var M, N = it;
          y instanceof ArrayBuffer ? (M = y, N += ht) : (M = y.buffer, _ === "[object Int8Array]" ? N += Fe : _ === "[object Uint8Array]" ? N += Ke : _ === "[object Uint8ClampedArray]" ? N += Wt : _ === "[object Int16Array]" ? N += xr : _ === "[object Uint16Array]" ? N += At : _ === "[object Int32Array]" ? N += pt : _ === "[object Uint32Array]" ? N += $r : _ === "[object Float32Array]" ? N += Er : _ === "[object Float64Array]" ? N += wr : R(new Error("Failed to get type for BinaryArray"))), R(N + nr(M));
        } else if (_ === "[object Blob]") {
          var k = new FileReader();
          k.onload = function() {
            var W = Ft + y.type + "~" + nr(this.result);
            R(it + Le + W);
          }, k.readAsArrayBuffer(y);
        } else
          try {
            R(JSON.stringify(y));
          } catch (W) {
            console.error("Couldn't convert value into a JSON string: ", y), R(null, W);
          }
      }
      function zi(y) {
        if (y.substring(0, Ut) !== it)
          return JSON.parse(y);
        var R = y.substring(gt), _ = y.substring(Ut, gt), M;
        if (_ === Le && zt.test(R)) {
          var N = R.match(zt);
          M = N[1], R = R.substring(N[0].length);
        }
        var k = Qr(R);
        switch (_) {
          case ht:
            return k;
          case Le:
            return u([k], { type: M });
          case Fe:
            return new Int8Array(k);
          case Ke:
            return new Uint8Array(k);
          case Wt:
            return new Uint8ClampedArray(k);
          case xr:
            return new Int16Array(k);
          case At:
            return new Uint16Array(k);
          case pt:
            return new Int32Array(k);
          case $r:
            return new Uint32Array(k);
          case Er:
            return new Float32Array(k);
          case wr:
            return new Float64Array(k);
          default:
            throw new Error("Unkown type: " + _);
        }
      }
      var _r = {
        serialize: Zr,
        deserialize: zi,
        stringToBuffer: Qr,
        bufferToString: nr
      };
      function Sr(y, R, _, M) {
        y.executeSql("CREATE TABLE IF NOT EXISTS " + R.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], _, M);
      }
      function Ui(y) {
        var R = this, _ = {
          db: null
        };
        if (y)
          for (var M in y)
            _[M] = typeof y[M] != "string" ? y[M].toString() : y[M];
        var N = new d(function(k, W) {
          try {
            _.db = openDatabase(_.name, String(_.version), _.description, _.size);
          } catch ($) {
            return W($);
          }
          _.db.transaction(function($) {
            Sr($, _, function() {
              R._dbInfo = _, k();
            }, function(Q, Z) {
              W(Z);
            });
          }, W);
        });
        return _.serializer = _r, N;
      }
      function Je(y, R, _, M, N, k) {
        y.executeSql(_, M, N, function(W, $) {
          $.code === $.SYNTAX_ERR ? W.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [R.storeName], function(Q, Z) {
            Z.rows.length ? k(Q, $) : Sr(Q, R, function() {
              Q.executeSql(_, M, N, k);
            }, k);
          }, k) : k(W, $);
        }, k);
      }
      function Wi(y, R) {
        var _ = this;
        y = p(y);
        var M = new d(function(N, k) {
          _.ready().then(function() {
            var W = _._dbInfo;
            W.db.transaction(function($) {
              Je($, W, "SELECT * FROM " + W.storeName + " WHERE key = ? LIMIT 1", [y], function(Q, Z) {
                var X = Z.rows.length ? Z.rows.item(0).value : null;
                X && (X = W.serializer.deserialize(X)), N(X);
              }, function(Q, Z) {
                k(Z);
              });
            });
          }).catch(k);
        });
        return f(M, R), M;
      }
      function Xr(y, R) {
        var _ = this, M = new d(function(N, k) {
          _.ready().then(function() {
            var W = _._dbInfo;
            W.db.transaction(function($) {
              Je($, W, "SELECT * FROM " + W.storeName, [], function(Q, Z) {
                for (var X = Z.rows, ee = X.length, ue = 0; ue < ee; ue++) {
                  var ve = X.item(ue), be = ve.value;
                  if (be && (be = W.serializer.deserialize(be)), be = y(be, ve.key, ue + 1), be !== void 0) {
                    N(be);
                    return;
                  }
                }
                N();
              }, function(Q, Z) {
                k(Z);
              });
            });
          }).catch(k);
        });
        return f(M, R), M;
      }
      function Kr(y, R, _, M) {
        var N = this;
        y = p(y);
        var k = new d(function(W, $) {
          N.ready().then(function() {
            R === void 0 && (R = null);
            var Q = R, Z = N._dbInfo;
            Z.serializer.serialize(R, function(X, ee) {
              ee ? $(ee) : Z.db.transaction(function(ue) {
                Je(ue, Z, "INSERT OR REPLACE INTO " + Z.storeName + " (key, value) VALUES (?, ?)", [y, X], function() {
                  W(Q);
                }, function(ve, be) {
                  $(be);
                });
              }, function(ue) {
                if (ue.code === ue.QUOTA_ERR) {
                  if (M > 0) {
                    W(Kr.apply(N, [y, Q, _, M - 1]));
                    return;
                  }
                  $(ue);
                }
              });
            });
          }).catch($);
        });
        return f(k, _), k;
      }
      function ji(y, R, _) {
        return Kr.apply(this, [y, R, _, 1]);
      }
      function Vi(y, R) {
        var _ = this;
        y = p(y);
        var M = new d(function(N, k) {
          _.ready().then(function() {
            var W = _._dbInfo;
            W.db.transaction(function($) {
              Je($, W, "DELETE FROM " + W.storeName + " WHERE key = ?", [y], function() {
                N();
              }, function(Q, Z) {
                k(Z);
              });
            });
          }).catch(k);
        });
        return f(M, R), M;
      }
      function Jr(y) {
        var R = this, _ = new d(function(M, N) {
          R.ready().then(function() {
            var k = R._dbInfo;
            k.db.transaction(function(W) {
              Je(W, k, "DELETE FROM " + k.storeName, [], function() {
                M();
              }, function($, Q) {
                N(Q);
              });
            });
          }).catch(N);
        });
        return f(_, y), _;
      }
      function qi(y) {
        var R = this, _ = new d(function(M, N) {
          R.ready().then(function() {
            var k = R._dbInfo;
            k.db.transaction(function(W) {
              Je(W, k, "SELECT COUNT(key) as c FROM " + k.storeName, [], function($, Q) {
                var Z = Q.rows.item(0).c;
                M(Z);
              }, function($, Q) {
                N(Q);
              });
            });
          }).catch(N);
        });
        return f(_, y), _;
      }
      function Yi(y, R) {
        var _ = this, M = new d(function(N, k) {
          _.ready().then(function() {
            var W = _._dbInfo;
            W.db.transaction(function($) {
              Je($, W, "SELECT key FROM " + W.storeName + " WHERE id = ? LIMIT 1", [y + 1], function(Q, Z) {
                var X = Z.rows.length ? Z.rows.item(0).key : null;
                N(X);
              }, function(Q, Z) {
                k(Z);
              });
            });
          }).catch(k);
        });
        return f(M, R), M;
      }
      function en(y) {
        var R = this, _ = new d(function(M, N) {
          R.ready().then(function() {
            var k = R._dbInfo;
            k.db.transaction(function(W) {
              Je(W, k, "SELECT key FROM " + k.storeName, [], function($, Q) {
                for (var Z = [], X = 0; X < Q.rows.length; X++)
                  Z.push(Q.rows.item(X).key);
                M(Z);
              }, function($, Q) {
                N(Q);
              });
            });
          }).catch(N);
        });
        return f(_, y), _;
      }
      function Gi(y) {
        return new d(function(R, _) {
          y.transaction(function(M) {
            M.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(N, k) {
              for (var W = [], $ = 0; $ < k.rows.length; $++)
                W.push(k.rows.item($).name);
              R({
                db: y,
                storeNames: W
              });
            }, function(N, k) {
              _(k);
            });
          }, function(M) {
            _(M);
          });
        });
      }
      function tn(y, R) {
        R = v.apply(this, arguments);
        var _ = this.config();
        y = typeof y != "function" && y || {}, y.name || (y.name = y.name || _.name, y.storeName = y.storeName || _.storeName);
        var M = this, N;
        return y.name ? N = new d(function(k) {
          var W;
          y.name === _.name ? W = M._dbInfo.db : W = openDatabase(y.name, "", "", 0), y.storeName ? k({
            db: W,
            storeNames: [y.storeName]
          }) : k(Gi(W));
        }).then(function(k) {
          return new d(function(W, $) {
            k.db.transaction(function(Q) {
              function Z(ve) {
                return new d(function(be, De) {
                  Q.executeSql("DROP TABLE IF EXISTS " + ve, [], function() {
                    be();
                  }, function(Ce, Ze) {
                    De(Ze);
                  });
                });
              }
              for (var X = [], ee = 0, ue = k.storeNames.length; ee < ue; ee++)
                X.push(Z(k.storeNames[ee]));
              d.all(X).then(function() {
                W();
              }).catch(function(ve) {
                $(ve);
              });
            }, function(Q) {
              $(Q);
            });
          });
        }) : N = d.reject("Invalid arguments"), f(N, R), N;
      }
      var ze = {
        _driver: "webSQLStorage",
        _initStorage: Ui,
        _support: He(),
        iterate: Xr,
        getItem: Wi,
        setItem: ji,
        removeItem: Vi,
        clear: Jr,
        length: qi,
        key: Yi,
        keys: en,
        dropInstance: tn
      };
      function st() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function Ar(y, R) {
        var _ = y.name + "/";
        return y.storeName !== R.storeName && (_ += y.storeName + "/"), _;
      }
      function $i() {
        var y = "_localforage_support_test";
        try {
          return localStorage.setItem(y, !0), localStorage.removeItem(y), !1;
        } catch {
          return !0;
        }
      }
      function yf() {
        return !$i() || localStorage.length > 0;
      }
      function xf(y) {
        var R = this, _ = {};
        if (y)
          for (var M in y)
            _[M] = y[M];
        return _.keyPrefix = Ar(y, R._defaultConfig), yf() ? (R._dbInfo = _, _.serializer = _r, d.resolve()) : d.reject();
      }
      function Ef(y) {
        var R = this, _ = R.ready().then(function() {
          for (var M = R._dbInfo.keyPrefix, N = localStorage.length - 1; N >= 0; N--) {
            var k = localStorage.key(N);
            k.indexOf(M) === 0 && localStorage.removeItem(k);
          }
        });
        return f(_, y), _;
      }
      function wf(y, R) {
        var _ = this;
        y = p(y);
        var M = _.ready().then(function() {
          var N = _._dbInfo, k = localStorage.getItem(N.keyPrefix + y);
          return k && (k = N.serializer.deserialize(k)), k;
        });
        return f(M, R), M;
      }
      function _f(y, R) {
        var _ = this, M = _.ready().then(function() {
          for (var N = _._dbInfo, k = N.keyPrefix, W = k.length, $ = localStorage.length, Q = 1, Z = 0; Z < $; Z++) {
            var X = localStorage.key(Z);
            if (X.indexOf(k) === 0) {
              var ee = localStorage.getItem(X);
              if (ee && (ee = N.serializer.deserialize(ee)), ee = y(ee, X.substring(W), Q++), ee !== void 0)
                return ee;
            }
          }
        });
        return f(M, R), M;
      }
      function Sf(y, R) {
        var _ = this, M = _.ready().then(function() {
          var N = _._dbInfo, k;
          try {
            k = localStorage.key(y);
          } catch {
            k = null;
          }
          return k && (k = k.substring(N.keyPrefix.length)), k;
        });
        return f(M, R), M;
      }
      function Af(y) {
        var R = this, _ = R.ready().then(function() {
          for (var M = R._dbInfo, N = localStorage.length, k = [], W = 0; W < N; W++) {
            var $ = localStorage.key(W);
            $.indexOf(M.keyPrefix) === 0 && k.push($.substring(M.keyPrefix.length));
          }
          return k;
        });
        return f(_, y), _;
      }
      function Cf(y) {
        var R = this, _ = R.keys().then(function(M) {
          return M.length;
        });
        return f(_, y), _;
      }
      function Df(y, R) {
        var _ = this;
        y = p(y);
        var M = _.ready().then(function() {
          var N = _._dbInfo;
          localStorage.removeItem(N.keyPrefix + y);
        });
        return f(M, R), M;
      }
      function Rf(y, R, _) {
        var M = this;
        y = p(y);
        var N = M.ready().then(function() {
          R === void 0 && (R = null);
          var k = R;
          return new d(function(W, $) {
            var Q = M._dbInfo;
            Q.serializer.serialize(R, function(Z, X) {
              if (X)
                $(X);
              else
                try {
                  localStorage.setItem(Q.keyPrefix + y, Z), W(k);
                } catch (ee) {
                  (ee.name === "QuotaExceededError" || ee.name === "NS_ERROR_DOM_QUOTA_REACHED") && $(ee), $(ee);
                }
            });
          });
        });
        return f(N, _), N;
      }
      function Tf(y, R) {
        if (R = v.apply(this, arguments), y = typeof y != "function" && y || {}, !y.name) {
          var _ = this.config();
          y.name = y.name || _.name, y.storeName = y.storeName || _.storeName;
        }
        var M = this, N;
        return y.name ? N = new d(function(k) {
          y.storeName ? k(Ar(y, M._defaultConfig)) : k(y.name + "/");
        }).then(function(k) {
          for (var W = localStorage.length - 1; W >= 0; W--) {
            var $ = localStorage.key(W);
            $.indexOf(k) === 0 && localStorage.removeItem($);
          }
        }) : N = d.reject("Invalid arguments"), f(N, R), N;
      }
      var kf = {
        _driver: "localStorageWrapper",
        _initStorage: xf,
        _support: st(),
        iterate: _f,
        getItem: wf,
        setItem: Rf,
        removeItem: Df,
        clear: Ef,
        length: Cf,
        key: Sf,
        keys: Af,
        dropInstance: Tf
      }, If = function(R, _) {
        return R === _ || typeof R == "number" && typeof _ == "number" && isNaN(R) && isNaN(_);
      }, Mf = function(R, _) {
        for (var M = R.length, N = 0; N < M; ) {
          if (If(R[N], _))
            return !0;
          N++;
        }
        return !1;
      }, No = Array.isArray || function(y) {
        return Object.prototype.toString.call(y) === "[object Array]";
      }, Cr = {}, Oo = {}, ir = {
        INDEXEDDB: Ve,
        WEBSQL: ze,
        LOCALSTORAGE: kf
      }, Nf = [ir.INDEXEDDB._driver, ir.WEBSQL._driver, ir.LOCALSTORAGE._driver], rn = ["dropInstance"], Qi = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(rn), Of = {
        description: "",
        driver: Nf.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function Bf(y, R) {
        y[R] = function() {
          var _ = arguments;
          return y.ready().then(function() {
            return y[R].apply(y, _);
          });
        };
      }
      function Zi() {
        for (var y = 1; y < arguments.length; y++) {
          var R = arguments[y];
          if (R)
            for (var _ in R)
              R.hasOwnProperty(_) && (No(R[_]) ? arguments[0][_] = R[_].slice() : arguments[0][_] = R[_]);
        }
        return arguments[0];
      }
      var Pf = function() {
        function y(R) {
          o(this, y);
          for (var _ in ir)
            if (ir.hasOwnProperty(_)) {
              var M = ir[_], N = M._driver;
              this[_] = N, Cr[N] || this.defineDriver(M);
            }
          this._defaultConfig = Zi({}, Of), this._config = Zi({}, this._defaultConfig, R), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return y.prototype.config = function(_) {
          if ((typeof _ > "u" ? "undefined" : s(_)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var M in _) {
              if (M === "storeName" && (_[M] = _[M].replace(/\W/g, "_")), M === "version" && typeof _[M] != "number")
                return new Error("Database version must be a number.");
              this._config[M] = _[M];
            }
            return "driver" in _ && _.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof _ == "string" ? this._config[_] : this._config;
        }, y.prototype.defineDriver = function(_, M, N) {
          var k = new d(function(W, $) {
            try {
              var Q = _._driver, Z = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!_._driver) {
                $(Z);
                return;
              }
              for (var X = Qi.concat("_initStorage"), ee = 0, ue = X.length; ee < ue; ee++) {
                var ve = X[ee], be = !Mf(rn, ve);
                if ((be || _[ve]) && typeof _[ve] != "function") {
                  $(Z);
                  return;
                }
              }
              var De = function() {
                for (var Dr = function(Ff) {
                  return function() {
                    var zf = new Error("Method " + Ff + " is not implemented by the current driver"), Bo = d.reject(zf);
                    return f(Bo, arguments[arguments.length - 1]), Bo;
                  };
                }, Xi = 0, Lf = rn.length; Xi < Lf; Xi++) {
                  var Ki = rn[Xi];
                  _[Ki] || (_[Ki] = Dr(Ki));
                }
              };
              De();
              var Ce = function(Dr) {
                Cr[Q] && console.info("Redefining LocalForage driver: " + Q), Cr[Q] = _, Oo[Q] = Dr, W();
              };
              "_support" in _ ? _._support && typeof _._support == "function" ? _._support().then(Ce, $) : Ce(!!_._support) : Ce(!0);
            } catch (Ze) {
              $(Ze);
            }
          });
          return h(k, M, N), k;
        }, y.prototype.driver = function() {
          return this._driver || null;
        }, y.prototype.getDriver = function(_, M, N) {
          var k = Cr[_] ? d.resolve(Cr[_]) : d.reject(new Error("Driver not found."));
          return h(k, M, N), k;
        }, y.prototype.getSerializer = function(_) {
          var M = d.resolve(_r);
          return h(M, _), M;
        }, y.prototype.ready = function(_) {
          var M = this, N = M._driverSet.then(function() {
            return M._ready === null && (M._ready = M._initDriver()), M._ready;
          });
          return h(N, _, _), N;
        }, y.prototype.setDriver = function(_, M, N) {
          var k = this;
          No(_) || (_ = [_]);
          var W = this._getSupportedDrivers(_);
          function $() {
            k._config.driver = k.driver();
          }
          function Q(ee) {
            return k._extend(ee), $(), k._ready = k._initStorage(k._config), k._ready;
          }
          function Z(ee) {
            return function() {
              var ue = 0;
              function ve() {
                for (; ue < ee.length; ) {
                  var be = ee[ue];
                  return ue++, k._dbInfo = null, k._ready = null, k.getDriver(be).then(Q).catch(ve);
                }
                $();
                var De = new Error("No available storage method found.");
                return k._driverSet = d.reject(De), k._driverSet;
              }
              return ve();
            };
          }
          var X = this._driverSet !== null ? this._driverSet.catch(function() {
            return d.resolve();
          }) : d.resolve();
          return this._driverSet = X.then(function() {
            var ee = W[0];
            return k._dbInfo = null, k._ready = null, k.getDriver(ee).then(function(ue) {
              k._driver = ue._driver, $(), k._wrapLibraryMethodsWithReady(), k._initDriver = Z(W);
            });
          }).catch(function() {
            $();
            var ee = new Error("No available storage method found.");
            return k._driverSet = d.reject(ee), k._driverSet;
          }), h(this._driverSet, M, N), this._driverSet;
        }, y.prototype.supports = function(_) {
          return !!Oo[_];
        }, y.prototype._extend = function(_) {
          Zi(this, _);
        }, y.prototype._getSupportedDrivers = function(_) {
          for (var M = [], N = 0, k = _.length; N < k; N++) {
            var W = _[N];
            this.supports(W) && M.push(W);
          }
          return M;
        }, y.prototype._wrapLibraryMethodsWithReady = function() {
          for (var _ = 0, M = Qi.length; _ < M; _++)
            Bf(this, Qi[_]);
        }, y.prototype.createInstance = function(_) {
          return new y(_);
        }, y;
      }(), Hf = new Pf();
      n.exports = Hf;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(m1);
const ct = /* @__PURE__ */ Object.create(null);
ct.open = "0";
ct.close = "1";
ct.ping = "2";
ct.pong = "3";
ct.message = "4";
ct.upgrade = "5";
ct.noop = "6";
const _n = /* @__PURE__ */ Object.create(null);
Object.keys(ct).forEach((t) => {
  _n[ct[t]] = t;
});
const b1 = { type: "error", data: "parser error" }, y1 = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", x1 = typeof ArrayBuffer == "function", E1 = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, Vu = ({ type: t, data: e }, r, n) => y1 && e instanceof Blob ? r ? n(e) : Rl(e, n) : x1 && (e instanceof ArrayBuffer || E1(e)) ? r ? n(e) : Rl(new Blob([e]), n) : n(ct[t] + (e || "")), Rl = (t, e) => {
  const r = new FileReader();
  return r.onload = function() {
    const n = r.result.split(",")[1];
    e("b" + (n || ""));
  }, r.readAsDataURL(t);
}, Tl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Nr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < Tl.length; t++)
  Nr[Tl.charCodeAt(t)] = t;
const w1 = (t) => {
  let e = t.length * 0.75, r = t.length, n, i = 0, s, o, a, c;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const l = new ArrayBuffer(e), u = new Uint8Array(l);
  for (n = 0; n < r; n += 4)
    s = Nr[t.charCodeAt(n)], o = Nr[t.charCodeAt(n + 1)], a = Nr[t.charCodeAt(n + 2)], c = Nr[t.charCodeAt(n + 3)], u[i++] = s << 2 | o >> 4, u[i++] = (o & 15) << 4 | a >> 2, u[i++] = (a & 3) << 6 | c & 63;
  return l;
}, _1 = typeof ArrayBuffer == "function", qu = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: Yu(t, e)
    };
  const r = t.charAt(0);
  return r === "b" ? {
    type: "message",
    data: S1(t.substring(1), e)
  } : _n[r] ? t.length > 1 ? {
    type: _n[r],
    data: t.substring(1)
  } : {
    type: _n[r]
  } : b1;
}, S1 = (t, e) => {
  if (_1) {
    const r = w1(t);
    return Yu(r, e);
  } else
    return { base64: !0, data: t };
}, Yu = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof ArrayBuffer ? new Blob([t]) : t;
    case "arraybuffer":
    default:
      return t;
  }
}, Gu = String.fromCharCode(30), A1 = (t, e) => {
  const r = t.length, n = new Array(r);
  let i = 0;
  t.forEach((s, o) => {
    Vu(s, !1, (a) => {
      n[o] = a, ++i === r && e(n.join(Gu));
    });
  });
}, C1 = (t, e) => {
  const r = t.split(Gu), n = [];
  for (let i = 0; i < r.length; i++) {
    const s = qu(r[i], e);
    if (n.push(s), s.type === "error")
      break;
  }
  return n;
}, $u = 4;
function Te(t) {
  if (t)
    return D1(t);
}
function D1(t) {
  for (var e in Te.prototype)
    t[e] = Te.prototype[e];
  return t;
}
Te.prototype.on = Te.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
Te.prototype.once = function(t, e) {
  function r() {
    this.off(t, r), e.apply(this, arguments);
  }
  return r.fn = e, this.on(t, r), this;
};
Te.prototype.off = Te.prototype.removeListener = Te.prototype.removeAllListeners = Te.prototype.removeEventListener = function(t, e) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var r = this._callbacks["$" + t];
  if (!r)
    return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + t], this;
  for (var n, i = 0; i < r.length; i++)
    if (n = r[i], n === e || n.fn === e) {
      r.splice(i, 1);
      break;
    }
  return r.length === 0 && delete this._callbacks["$" + t], this;
};
Te.prototype.emit = function(t) {
  this._callbacks = this._callbacks || {};
  for (var e = new Array(arguments.length - 1), r = this._callbacks["$" + t], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  if (r) {
    r = r.slice(0);
    for (var n = 0, i = r.length; n < i; ++n)
      r[n].apply(this, e);
  }
  return this;
};
Te.prototype.emitReserved = Te.prototype.emit;
Te.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
Te.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const Xe = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();
function Qu(t, ...e) {
  return e.reduce((r, n) => (t.hasOwnProperty(n) && (r[n] = t[n]), r), {});
}
const R1 = Xe.setTimeout, T1 = Xe.clearTimeout;
function Pi(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = R1.bind(Xe), t.clearTimeoutFn = T1.bind(Xe)) : (t.setTimeoutFn = Xe.setTimeout.bind(Xe), t.clearTimeoutFn = Xe.clearTimeout.bind(Xe));
}
const k1 = 1.33;
function I1(t) {
  return typeof t == "string" ? M1(t) : Math.ceil((t.byteLength || t.size) * k1);
}
function M1(t) {
  let e = 0, r = 0;
  for (let n = 0, i = t.length; n < i; n++)
    e = t.charCodeAt(n), e < 128 ? r += 1 : e < 2048 ? r += 2 : e < 55296 || e >= 57344 ? r += 3 : (n++, r += 4);
  return r;
}
class N1 extends Error {
  constructor(e, r, n) {
    super(e), this.description = r, this.context = n, this.type = "TransportError";
  }
}
class Zu extends Te {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, Pi(this, e), this.opts = e, this.query = e.query, this.socket = e.socket;
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
  onError(e, r, n) {
    return super.emitReserved("error", new N1(e, r, n)), this;
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
    const r = qu(e, this.socket.binaryType);
    this.onPacket(r);
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
const Xu = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), Ps = 64, O1 = {};
let kl = 0, gn = 0, Il;
function Ml(t) {
  let e = "";
  do
    e = Xu[t % Ps] + e, t = Math.floor(t / Ps);
  while (t > 0);
  return e;
}
function Ku() {
  const t = Ml(+/* @__PURE__ */ new Date());
  return t !== Il ? (kl = 0, Il = t) : t + "." + Ml(kl++);
}
for (; gn < Ps; gn++)
  O1[Xu[gn]] = gn;
function Ju(t) {
  let e = "";
  for (let r in t)
    t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
  return e;
}
function B1(t) {
  let e = {}, r = t.split("&");
  for (let n = 0, i = r.length; n < i; n++) {
    let s = r[n].split("=");
    e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return e;
}
let ef = !1;
try {
  ef = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const P1 = ef;
function tf(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || P1))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new Xe[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function H1() {
}
const L1 = function() {
  return new tf({
    xdomain: !1
  }).responseType != null;
}();
class F1 extends Zu {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(e) {
    if (super(e), this.polling = !1, typeof location < "u") {
      const n = location.protocol === "https:";
      let i = location.port;
      i || (i = n ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || i !== e.port, this.xs = e.secure !== n;
    }
    const r = e && e.forceBase64;
    this.supportsBinary = L1 && !r;
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
    const r = () => {
      this.readyState = "paused", e();
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
  onData(e) {
    const r = (n) => {
      if (this.readyState === "opening" && n.type === "open" && this.onOpen(), n.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(n);
    };
    C1(e, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
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
    this.writable = !1, A1(e, (r) => {
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
    let e = this.query || {};
    const r = this.opts.secure ? "https" : "http";
    let n = "";
    this.opts.timestampRequests !== !1 && (e[this.opts.timestampParam] = Ku()), !this.supportsBinary && !e.sid && (e.b64 = 1), this.opts.port && (r === "https" && Number(this.opts.port) !== 443 || r === "http" && Number(this.opts.port) !== 80) && (n = ":" + this.opts.port);
    const i = Ju(e), s = this.opts.hostname.indexOf(":") !== -1;
    return r + "://" + (s ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(e = {}) {
    return Object.assign(e, { xd: this.xd, xs: this.xs }, this.opts), new at(this.uri(), e);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(e, r) {
    const n = this.request({
      method: "POST",
      data: e
    });
    n.on("success", r), n.on("error", (i, s) => {
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
    e.on("data", this.onData.bind(this)), e.on("error", (r, n) => {
      this.onError("xhr poll error", r, n);
    }), this.pollXhr = e;
  }
}
class at extends Te {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, r) {
    super(), Pi(this, r), this.opts = r, this.method = r.method || "GET", this.uri = e, this.async = r.async !== !1, this.data = r.data !== void 0 ? r.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    const e = Qu(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    e.xdomain = !!this.opts.xd, e.xscheme = !!this.opts.xs;
    const r = this.xhr = new tf(e);
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
    typeof document < "u" && (this.index = at.requestsCount++, at.requests[this.index] = this);
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
      if (this.xhr.onreadystatechange = H1, e)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete at.requests[this.index], this.xhr = null;
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
at.requestsCount = 0;
at.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Nl);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in Xe ? "pagehide" : "unload";
    addEventListener(t, Nl, !1);
  }
}
function Nl() {
  for (let t in at.requests)
    at.requests.hasOwnProperty(t) && at.requests[t].abort();
}
const rf = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, r) => r(e, 0))(), vn = Xe.WebSocket || Xe.MozWebSocket, Ol = !0, z1 = "arraybuffer", Bl = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class U1 extends Zu {
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
    const e = this.uri(), r = this.opts.protocols, n = Bl ? {} : Qu(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = Ol && !Bl ? r ? new vn(e, r) : new vn(e) : new vn(e, r, n);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this.ws.binaryType = this.socket.binaryType || z1, this.addEventListeners();
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
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = r === e.length - 1;
      Vu(n, this.supportsBinary, (s) => {
        const o = {};
        try {
          Ol && this.ws.send(s);
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
    const r = this.opts.secure ? "wss" : "ws";
    let n = "";
    this.opts.port && (r === "wss" && Number(this.opts.port) !== 443 || r === "ws" && Number(this.opts.port) !== 80) && (n = ":" + this.opts.port), this.opts.timestampRequests && (e[this.opts.timestampParam] = Ku()), this.supportsBinary || (e.b64 = 1);
    const i = Ju(e), s = this.opts.hostname.indexOf(":") !== -1;
    return r + "://" + (s ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!vn;
  }
}
const W1 = {
  websocket: U1,
  polling: F1
}, j1 = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, V1 = [
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
function Hs(t) {
  const e = t, r = t.indexOf("["), n = t.indexOf("]");
  r != -1 && n != -1 && (t = t.substring(0, r) + t.substring(r, n).replace(/:/g, ";") + t.substring(n, t.length));
  let i = j1.exec(t || ""), s = {}, o = 14;
  for (; o--; )
    s[V1[o]] = i[o] || "";
  return r != -1 && n != -1 && (s.source = e, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = q1(s, s.path), s.queryKey = Y1(s, s.query), s;
}
function q1(t, e) {
  const r = /\/{2,9}/g, n = e.replace(r, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && n.splice(0, 1), e.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function Y1(t, e) {
  const r = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, i, s) {
    i && (r[i] = s);
  }), r;
}
let nf = class or extends Te {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, r = {}) {
    super(), this.writeBuffer = [], e && typeof e == "object" && (r = e, e = null), e ? (e = Hs(e), r.hostname = e.host, r.secure = e.protocol === "https" || e.protocol === "wss", r.port = e.port, e.query && (r.query = e.query)) : r.host && (r.hostname = Hs(r.host).host), Pi(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = r.transports || ["polling", "websocket"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
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
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = B1(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
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
    const r = Object.assign({}, this.opts.query);
    r.EIO = $u, r.transport = e, this.id && (r.sid = this.id);
    const n = Object.assign({}, this.opts.transportOptions[e], this.opts, {
      query: r,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new W1[e](n);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let e;
    if (this.opts.rememberUpgrade && or.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
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
    this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (r) => this.onClose("transport close", r));
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  probe(e) {
    let r = this.createTransport(e), n = !1;
    or.priorWebsocketSuccess = !1;
    const i = () => {
      n || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (d) => {
        if (!n)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            or.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (u(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush());
            });
          } else {
            const f = new Error("probe error");
            f.transport = r.name, this.emitReserved("upgradeError", f);
          }
      }));
    };
    function s() {
      n || (n = !0, u(), r.close(), r = null);
    }
    const o = (d) => {
      const f = new Error("probe error: " + d);
      f.transport = r.name, s(), this.emitReserved("upgradeError", f);
    };
    function a() {
      o("transport closed");
    }
    function c() {
      o("socket closed");
    }
    function l(d) {
      r && d.name !== r.name && s();
    }
    const u = () => {
      r.removeListener("open", i), r.removeListener("error", o), r.removeListener("close", a), this.off("close", c), this.off("upgrading", l);
    };
    r.once("open", i), r.once("error", o), r.once("close", a), this.once("close", c), this.once("upgrading", l), r.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", or.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
      let e = 0;
      const r = this.upgrades.length;
      for (; e < r; e++)
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
          const r = new Error("server error");
          r.code = e.data, this.onError(r);
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
    let r = 1;
    for (let n = 0; n < this.writeBuffer.length; n++) {
      const i = this.writeBuffer[n].data;
      if (i && (r += I1(i)), n > 0 && r > this.maxPayload)
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
  write(e, r, n) {
    return this.sendPacket("message", e, r, n), this;
  }
  send(e, r, n) {
    return this.sendPacket("message", e, r, n), this;
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
  sendPacket(e, r, n, i) {
    if (typeof r == "function" && (i = r, r = void 0), typeof n == "function" && (i = n, n = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    n = n || {}, n.compress = n.compress !== !1;
    const s = {
      type: e,
      data: r,
      options: n
    };
    this.emitReserved("packetCreate", s), this.writeBuffer.push(s), i && this.once("flush", i), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const e = () => {
      this.onClose("forced close"), this.transport.close();
    }, r = () => {
      this.off("upgrade", r), this.off("upgradeError", r), e();
    }, n = () => {
      this.once("upgrade", r), this.once("upgradeError", r);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? n() : e();
    }) : this.upgrading ? n() : e()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  onError(e) {
    or.priorWebsocketSuccess = !1, this.emitReserved("error", e), this.onClose("transport error", e);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  onClose(e, r) {
    (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", e, r), this.writeBuffer = [], this.prevBufferLen = 0);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  filterUpgrades(e) {
    const r = [];
    let n = 0;
    const i = e.length;
    for (; n < i; n++)
      ~this.transports.indexOf(e[n]) && r.push(e[n]);
    return r;
  }
};
nf.protocol = $u;
function G1(t, e = "", r) {
  let n = t;
  r = r || typeof location < "u" && location, t == null && (t = r.protocol + "//" + r.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = r.protocol + t : t = r.host + t), /^(https?|wss?):\/\//.test(t) || (typeof r < "u" ? t = r.protocol + "//" + t : t = "https://" + t), n = Hs(t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const s = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + s + ":" + n.port + e, n.href = n.protocol + "://" + s + (r && r.port === n.port ? "" : ":" + n.port), n;
}
const $1 = typeof ArrayBuffer == "function", Q1 = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, sf = Object.prototype.toString, Z1 = typeof Blob == "function" || typeof Blob < "u" && sf.call(Blob) === "[object BlobConstructor]", X1 = typeof File == "function" || typeof File < "u" && sf.call(File) === "[object FileConstructor]";
function To(t) {
  return $1 && (t instanceof ArrayBuffer || Q1(t)) || Z1 && t instanceof Blob || X1 && t instanceof File;
}
function Sn(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let r = 0, n = t.length; r < n; r++)
      if (Sn(t[r]))
        return !0;
    return !1;
  }
  if (To(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return Sn(t.toJSON(), !0);
  for (const r in t)
    if (Object.prototype.hasOwnProperty.call(t, r) && Sn(t[r]))
      return !0;
  return !1;
}
function K1(t) {
  const e = [], r = t.data, n = t;
  return n.data = Ls(r, e), n.attachments = e.length, { packet: n, buffers: e };
}
function Ls(t, e) {
  if (!t)
    return t;
  if (To(t)) {
    const r = { _placeholder: !0, num: e.length };
    return e.push(t), r;
  } else if (Array.isArray(t)) {
    const r = new Array(t.length);
    for (let n = 0; n < t.length; n++)
      r[n] = Ls(t[n], e);
    return r;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const r = {};
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (r[n] = Ls(t[n], e));
    return r;
  }
  return t;
}
function J1(t, e) {
  return t.data = Fs(t.data, e), delete t.attachments, t;
}
function Fs(t, e) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
      return e[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let r = 0; r < t.length; r++)
      t[r] = Fs(t[r], e);
  else if (typeof t == "object")
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (t[r] = Fs(t[r], e));
  return t;
}
const ey = 5;
var he;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(he || (he = {}));
class ty {
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
    return (e.type === he.EVENT || e.type === he.ACK) && Sn(e) ? this.encodeAsBinary({
      type: e.type === he.EVENT ? he.BINARY_EVENT : he.BINARY_ACK,
      nsp: e.nsp,
      data: e.data,
      id: e.id
    }) : [this.encodeAsString(e)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(e) {
    let r = "" + e.type;
    return (e.type === he.BINARY_EVENT || e.type === he.BINARY_ACK) && (r += e.attachments + "-"), e.nsp && e.nsp !== "/" && (r += e.nsp + ","), e.id != null && (r += e.id), e.data != null && (r += JSON.stringify(e.data, this.replacer)), r;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const r = K1(e), n = this.encodeAsString(r.packet), i = r.buffers;
    return i.unshift(n), i;
  }
}
class ko extends Te {
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
    let r;
    if (typeof e == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      r = this.decodeString(e);
      const n = r.type === he.BINARY_EVENT;
      n || r.type === he.BINARY_ACK ? (r.type = n ? he.EVENT : he.ACK, this.reconstructor = new ry(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (To(e) || e.base64)
      if (this.reconstructor)
        r = this.reconstructor.takeBinaryData(e), r && (this.reconstructor = null, super.emitReserved("decoded", r));
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
    let r = 0;
    const n = {
      type: Number(e.charAt(0))
    };
    if (he[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === he.BINARY_EVENT || n.type === he.BINARY_ACK) {
      const s = r + 1;
      for (; e.charAt(++r) !== "-" && r != e.length; )
        ;
      const o = e.substring(s, r);
      if (o != Number(o) || e.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(o);
    }
    if (e.charAt(r + 1) === "/") {
      const s = r + 1;
      for (; ++r && !(e.charAt(r) === "," || r === e.length); )
        ;
      n.nsp = e.substring(s, r);
    } else
      n.nsp = "/";
    const i = e.charAt(r + 1);
    if (i !== "" && Number(i) == i) {
      const s = r + 1;
      for (; ++r; ) {
        const o = e.charAt(r);
        if (o == null || Number(o) != o) {
          --r;
          break;
        }
        if (r === e.length)
          break;
      }
      n.id = Number(e.substring(s, r + 1));
    }
    if (e.charAt(++r)) {
      const s = this.tryParse(e.substr(r));
      if (ko.isPayloadValid(n.type, s))
        n.data = s;
      else
        throw new Error("invalid payload");
    }
    return n;
  }
  tryParse(e) {
    try {
      return JSON.parse(e, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(e, r) {
    switch (e) {
      case he.CONNECT:
        return typeof r == "object";
      case he.DISCONNECT:
        return r === void 0;
      case he.CONNECT_ERROR:
        return typeof r == "string" || typeof r == "object";
      case he.EVENT:
      case he.BINARY_EVENT:
        return Array.isArray(r) && r.length > 0;
      case he.ACK:
      case he.BINARY_ACK:
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
class ry {
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
      const r = J1(this.reconPack, this.buffers);
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
const ny = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: ko,
  Encoder: ty,
  get PacketType() {
    return he;
  },
  protocol: ey
}, Symbol.toStringTag, { value: "Module" }));
function et(t, e, r) {
  return t.on(e, r), function() {
    t.off(e, r);
  };
}
const iy = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class of extends Te {
  /**
   * `Socket` constructor.
   */
  constructor(e, r, n) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = r, n && n.auth && (this.auth = n.auth), this._opts = Object.assign({}, n), this.io._autoConnect && this.open();
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
      et(e, "open", this.onopen.bind(this)),
      et(e, "packet", this.onpacket.bind(this)),
      et(e, "error", this.onerror.bind(this)),
      et(e, "close", this.onclose.bind(this))
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
  emit(e, ...r) {
    if (iy.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (r.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(r), this;
    const n = {
      type: he.EVENT,
      data: r
    };
    if (n.options = {}, n.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
      const o = this.ids++, a = r.pop();
      this._registerAckCallback(o, a), n.id = o;
    }
    const i = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    return this.flags.volatile && (!i || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(n), this.packet(n)) : this.sendBuffer.push(n)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(e, r) {
    var n;
    const i = (n = this.flags.timeout) !== null && n !== void 0 ? n : this._opts.ackTimeout;
    if (i === void 0) {
      this.acks[e] = r;
      return;
    }
    const s = this.io.setTimeoutFn(() => {
      delete this.acks[e];
      for (let o = 0; o < this.sendBuffer.length; o++)
        this.sendBuffer[o].id === e && this.sendBuffer.splice(o, 1);
      r.call(this, new Error("operation has timed out"));
    }, i);
    this.acks[e] = (...o) => {
      this.io.clearTimeoutFn(s), r.apply(this, [null, ...o]);
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
  emitWithAck(e, ...r) {
    const n = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
    return new Promise((i, s) => {
      r.push((o, a) => n ? o ? s(o) : i(a) : i(o)), this.emit(e, ...r);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(e) {
    let r;
    typeof e[e.length - 1] == "function" && (r = e.pop());
    const n = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    e.push((i, ...s) => n !== this._queue[0] ? void 0 : (i !== null ? n.tryCount > this._opts.retries && (this._queue.shift(), r && r(i)) : (this._queue.shift(), r && r(null, ...s)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue();
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
    const r = this._queue[0];
    r.pending && !e || (r.pending = !0, r.tryCount++, this.flags = r.flags, this.emit.apply(this, r.args));
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
      type: he.CONNECT,
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
  onclose(e, r) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", e, r);
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
        case he.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case he.EVENT:
        case he.BINARY_EVENT:
          this.onevent(e);
          break;
        case he.ACK:
        case he.BINARY_ACK:
          this.onack(e);
          break;
        case he.DISCONNECT:
          this.ondisconnect();
          break;
        case he.CONNECT_ERROR:
          this.destroy();
          const n = new Error(e.data.message);
          n.data = e.data.data, this.emitReserved("connect_error", n);
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
    const r = e.data || [];
    e.id != null && r.push(this.ack(e.id)), this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r));
  }
  emitEvent(e) {
    if (this._anyListeners && this._anyListeners.length) {
      const r = this._anyListeners.slice();
      for (const n of r)
        n.apply(this, e);
    }
    super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(e) {
    const r = this;
    let n = !1;
    return function(...i) {
      n || (n = !0, r.packet({
        type: he.ACK,
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
    const r = this.acks[e.id];
    typeof r == "function" && (r.apply(this, e.data), delete this.acks[e.id]);
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(e, r) {
    this.id = e, this.recovered = r && this._pid === r, this._pid = r, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
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
    return this.connected && this.packet({ type: he.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
      const r = this._anyListeners;
      for (let n = 0; n < r.length; n++)
        if (e === r[n])
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
      const r = this._anyOutgoingListeners;
      for (let n = 0; n < r.length; n++)
        if (e === r[n])
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
  notifyOutgoingListeners(e) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const r = this._anyOutgoingListeners.slice();
      for (const n of r)
        n.apply(this, e.data);
    }
  }
}
function yr(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
yr.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), r = Math.floor(e * this.jitter * t);
    t = Math.floor(e * 10) & 1 ? t + r : t - r;
  }
  return Math.min(t, this.max) | 0;
};
yr.prototype.reset = function() {
  this.attempts = 0;
};
yr.prototype.setMin = function(t) {
  this.ms = t;
};
yr.prototype.setMax = function(t) {
  this.max = t;
};
yr.prototype.setJitter = function(t) {
  this.jitter = t;
};
class zs extends Te {
  constructor(e, r) {
    var n;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (r = e, e = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, Pi(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((n = r.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new yr({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = e;
    const i = r.parser || ny;
    this.encoder = new i.Encoder(), this.decoder = new i.Decoder(), this._autoConnect = r.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(e) {
    return arguments.length ? (this._reconnection = !!e, this) : this._reconnection;
  }
  reconnectionAttempts(e) {
    return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this);
  }
  reconnectionDelay(e) {
    var r;
    return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (r = this.backoff) === null || r === void 0 || r.setMin(e), this);
  }
  randomizationFactor(e) {
    var r;
    return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (r = this.backoff) === null || r === void 0 || r.setJitter(e), this);
  }
  reconnectionDelayMax(e) {
    var r;
    return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (r = this.backoff) === null || r === void 0 || r.setMax(e), this);
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
    this.engine = new nf(this.uri, this.opts);
    const r = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = et(r, "open", function() {
      n.onopen(), e && e();
    }), s = et(r, "error", (o) => {
      n.cleanup(), n._readyState = "closed", this.emitReserved("error", o), e ? e(o) : n.maybeReconnectOnOpen();
    });
    if (this._timeout !== !1) {
      const o = this._timeout;
      o === 0 && i();
      const a = this.setTimeoutFn(() => {
        i(), r.close(), r.emit("error", new Error("timeout"));
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
    this.subs.push(et(e, "ping", this.onping.bind(this)), et(e, "data", this.ondata.bind(this)), et(e, "error", this.onerror.bind(this)), et(e, "close", this.onclose.bind(this)), et(this.decoder, "decoded", this.ondecoded.bind(this)));
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
    } catch (r) {
      this.onclose("parse error", r);
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
  socket(e, r) {
    let n = this.nsps[e];
    return n ? this._autoConnect && !n.active && n.connect() : (n = new of(this, e, r), this.nsps[e] = n), n;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(e) {
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
  _packet(e) {
    const r = this.encoder.encode(e);
    for (let n = 0; n < r.length; n++)
      this.engine.write(r[n], e.options);
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
  onclose(e, r) {
    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, r), this._reconnection && !this.skipReconnect && this.reconnect();
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
      const r = this.backoff.duration();
      this._reconnecting = !0;
      const n = this.setTimeoutFn(() => {
        e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((i) => {
          i ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", i)) : e.onreconnect();
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
    const e = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e);
  }
}
const Ir = {};
function bs(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const r = G1(t, e.path || "/socket.io"), n = r.source, i = r.id, s = r.path, o = Ir[i] && s in Ir[i].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let c;
  return a ? c = new zs(n, e) : (Ir[i] || (Ir[i] = new zs(n, e)), c = Ir[i]), r.query && !e.query && (e.query = r.queryKey), c.socket(r.path, e);
}
Object.assign(bs, {
  Manager: zs,
  Socket: of,
  io: bs,
  connect: bs
});
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var cr = 9e15, Lt = 1e9, Us = "0123456789abcdef", _i = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Si = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Ws = {
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
  minE: -cr,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: cr,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, af, yt, ce = !0, Hi = "[DecimalError] ", Pt = Hi + "Invalid argument: ", lf = Hi + "Precision limit exceeded", cf = Hi + "crypto unavailable", uf = "[object Decimal]", Pe = Math.floor, ke = Math.pow, sy = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, oy = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, ay = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, ff = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, nt = 1e7, ie = 7, ly = 9007199254740991, cy = _i.length - 1, js = Si.length - 1, Y = { toStringTag: uf };
Y.absoluteValue = Y.abs = function() {
  var t = new this.constructor(this);
  return t.s < 0 && (t.s = 1), re(t);
};
Y.ceil = function() {
  return re(new this.constructor(this), this.e + 1, 2);
};
Y.clampedTo = Y.clamp = function(t, e) {
  var r, n = this, i = n.constructor;
  if (t = new i(t), e = new i(e), !t.s || !e.s)
    return new i(NaN);
  if (t.gt(e))
    throw Error(Pt + e);
  return r = n.cmp(t), r < 0 ? t : n.cmp(e) > 0 ? e : new i(n);
};
Y.comparedTo = Y.cmp = function(t) {
  var e, r, n, i, s = this, o = s.d, a = (t = new s.constructor(t)).d, c = s.s, l = t.s;
  if (!o || !a)
    return !c || !l ? NaN : c !== l ? c : o === a ? 0 : !o ^ c < 0 ? 1 : -1;
  if (!o[0] || !a[0])
    return o[0] ? c : a[0] ? -l : 0;
  if (c !== l)
    return c;
  if (s.e !== t.e)
    return s.e > t.e ^ c < 0 ? 1 : -1;
  for (n = o.length, i = a.length, e = 0, r = n < i ? n : i; e < r; ++e)
    if (o[e] !== a[e])
      return o[e] > a[e] ^ c < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ c < 0 ? 1 : -1;
};
Y.cosine = Y.cos = function() {
  var t, e, r = this, n = r.constructor;
  return r.d ? r.d[0] ? (t = n.precision, e = n.rounding, n.precision = t + Math.max(r.e, r.sd()) + ie, n.rounding = 1, r = uy(n, vf(n, r)), n.precision = t, n.rounding = e, re(yt == 2 || yt == 3 ? r.neg() : r, t, e, !0)) : new n(1) : new n(NaN);
};
Y.cubeRoot = Y.cbrt = function() {
  var t, e, r, n, i, s, o, a, c, l, u = this, d = u.constructor;
  if (!u.isFinite() || u.isZero())
    return new d(u);
  for (ce = !1, s = u.s * ke(u.s * u, 1 / 3), !s || Math.abs(s) == 1 / 0 ? (r = Ne(u.d), t = u.e, (s = (t - r.length + 1) % 3) && (r += s == 1 || s == -2 ? "0" : "00"), s = ke(r, 1 / 3), t = Pe((t + 1) / 3) - (t % 3 == (t < 0 ? -1 : 2)), s == 1 / 0 ? r = "5e" + t : (r = s.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + t), n = new d(r), n.s = u.s) : n = new d(s.toString()), o = (t = d.precision) + 3; ; )
    if (a = n, c = a.times(a).times(a), l = c.plus(u), n = ye(l.plus(u).times(a), l.plus(c), o + 2, 1), Ne(a.d).slice(0, o) === (r = Ne(n.d)).slice(0, o))
      if (r = r.slice(o - 3, o + 1), r == "9999" || !i && r == "4999") {
        if (!i && (re(a, t + 1, 0), a.times(a).times(a).eq(u))) {
          n = a;
          break;
        }
        o += 4, i = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (re(n, t + 1, 1), e = !n.times(n).times(n).eq(u));
        break;
      }
  return ce = !0, re(n, t, d.rounding, e);
};
Y.decimalPlaces = Y.dp = function() {
  var t, e = this.d, r = NaN;
  if (e) {
    if (t = e.length - 1, r = (t - Pe(this.e / ie)) * ie, t = e[t], t)
      for (; t % 10 == 0; t /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
Y.dividedBy = Y.div = function(t) {
  return ye(this, new this.constructor(t));
};
Y.dividedToIntegerBy = Y.divToInt = function(t) {
  var e = this, r = e.constructor;
  return re(ye(e, new r(t), 0, 1, 1), r.precision, r.rounding);
};
Y.equals = Y.eq = function(t) {
  return this.cmp(t) === 0;
};
Y.floor = function() {
  return re(new this.constructor(this), this.e + 1, 3);
};
Y.greaterThan = Y.gt = function(t) {
  return this.cmp(t) > 0;
};
Y.greaterThanOrEqualTo = Y.gte = function(t) {
  var e = this.cmp(t);
  return e == 1 || e === 0;
};
Y.hyperbolicCosine = Y.cosh = function() {
  var t, e, r, n, i, s = this, o = s.constructor, a = new o(1);
  if (!s.isFinite())
    return new o(s.s ? 1 / 0 : NaN);
  if (s.isZero())
    return a;
  r = o.precision, n = o.rounding, o.precision = r + Math.max(s.e, s.sd()) + 4, o.rounding = 1, i = s.d.length, i < 32 ? (t = Math.ceil(i / 3), e = (1 / Fi(4, t)).toString()) : (t = 16, e = "2.3283064365386962890625e-10"), s = mr(o, 1, s.times(e), new o(1), !0);
  for (var c, l = t, u = new o(8); l--; )
    c = s.times(s), s = a.minus(c.times(u.minus(c.times(u))));
  return re(s, o.precision = r, o.rounding = n, !0);
};
Y.hyperbolicSine = Y.sinh = function() {
  var t, e, r, n, i = this, s = i.constructor;
  if (!i.isFinite() || i.isZero())
    return new s(i);
  if (e = s.precision, r = s.rounding, s.precision = e + Math.max(i.e, i.sd()) + 4, s.rounding = 1, n = i.d.length, n < 3)
    i = mr(s, 2, i, i, !0);
  else {
    t = 1.4 * Math.sqrt(n), t = t > 16 ? 16 : t | 0, i = i.times(1 / Fi(5, t)), i = mr(s, 2, i, i, !0);
    for (var o, a = new s(5), c = new s(16), l = new s(20); t--; )
      o = i.times(i), i = i.times(a.plus(o.times(c.times(o).plus(l))));
  }
  return s.precision = e, s.rounding = r, re(i, e, r, !0);
};
Y.hyperbolicTangent = Y.tanh = function() {
  var t, e, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (t = n.precision, e = n.rounding, n.precision = t + 7, n.rounding = 1, ye(r.sinh(), r.cosh(), n.precision = t, n.rounding = e)) : new n(r.s);
};
Y.inverseCosine = Y.acos = function() {
  var t, e = this, r = e.constructor, n = e.abs().cmp(1), i = r.precision, s = r.rounding;
  return n !== -1 ? n === 0 ? e.isNeg() ? rt(r, i, s) : new r(0) : new r(NaN) : e.isZero() ? rt(r, i + 4, s).times(0.5) : (r.precision = i + 6, r.rounding = 1, e = e.asin(), t = rt(r, i + 4, s).times(0.5), r.precision = i, r.rounding = s, t.minus(e));
};
Y.inverseHyperbolicCosine = Y.acosh = function() {
  var t, e, r = this, n = r.constructor;
  return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (t = n.precision, e = n.rounding, n.precision = t + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, ce = !1, r = r.times(r).minus(1).sqrt().plus(r), ce = !0, n.precision = t, n.rounding = e, r.ln()) : new n(r);
};
Y.inverseHyperbolicSine = Y.asinh = function() {
  var t, e, r = this, n = r.constructor;
  return !r.isFinite() || r.isZero() ? new n(r) : (t = n.precision, e = n.rounding, n.precision = t + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, ce = !1, r = r.times(r).plus(1).sqrt().plus(r), ce = !0, n.precision = t, n.rounding = e, r.ln());
};
Y.inverseHyperbolicTangent = Y.atanh = function() {
  var t, e, r, n, i = this, s = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (t = s.precision, e = s.rounding, n = i.sd(), Math.max(n, t) < 2 * -i.e - 1 ? re(new s(i), t, e, !0) : (s.precision = r = n - i.e, i = ye(i.plus(1), new s(1).minus(i), r + t, 1), s.precision = t + 4, s.rounding = 1, i = i.ln(), s.precision = t, s.rounding = e, i.times(0.5))) : new s(NaN);
};
Y.inverseSine = Y.asin = function() {
  var t, e, r, n, i = this, s = i.constructor;
  return i.isZero() ? new s(i) : (e = i.abs().cmp(1), r = s.precision, n = s.rounding, e !== -1 ? e === 0 ? (t = rt(s, r + 4, n).times(0.5), t.s = i.s, t) : new s(NaN) : (s.precision = r + 6, s.rounding = 1, i = i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan(), s.precision = r, s.rounding = n, i.times(2)));
};
Y.inverseTangent = Y.atan = function() {
  var t, e, r, n, i, s, o, a, c, l = this, u = l.constructor, d = u.precision, f = u.rounding;
  if (l.isFinite()) {
    if (l.isZero())
      return new u(l);
    if (l.abs().eq(1) && d + 4 <= js)
      return o = rt(u, d + 4, f).times(0.25), o.s = l.s, o;
  } else {
    if (!l.s)
      return new u(NaN);
    if (d + 4 <= js)
      return o = rt(u, d + 4, f).times(0.5), o.s = l.s, o;
  }
  for (u.precision = a = d + 10, u.rounding = 1, r = Math.min(28, a / ie + 2 | 0), t = r; t; --t)
    l = l.div(l.times(l).plus(1).sqrt().plus(1));
  for (ce = !1, e = Math.ceil(a / ie), n = 1, c = l.times(l), o = new u(l), i = l; t !== -1; )
    if (i = i.times(c), s = o.minus(i.div(n += 2)), i = i.times(c), o = s.plus(i.div(n += 2)), o.d[e] !== void 0)
      for (t = e; o.d[t] === s.d[t] && t--; )
        ;
  return r && (o = o.times(2 << r - 1)), ce = !0, re(o, u.precision = d, u.rounding = f, !0);
};
Y.isFinite = function() {
  return !!this.d;
};
Y.isInteger = Y.isInt = function() {
  return !!this.d && Pe(this.e / ie) > this.d.length - 2;
};
Y.isNaN = function() {
  return !this.s;
};
Y.isNegative = Y.isNeg = function() {
  return this.s < 0;
};
Y.isPositive = Y.isPos = function() {
  return this.s > 0;
};
Y.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
Y.lessThan = Y.lt = function(t) {
  return this.cmp(t) < 0;
};
Y.lessThanOrEqualTo = Y.lte = function(t) {
  return this.cmp(t) < 1;
};
Y.logarithm = Y.log = function(t) {
  var e, r, n, i, s, o, a, c, l = this, u = l.constructor, d = u.precision, f = u.rounding, h = 5;
  if (t == null)
    t = new u(10), e = !0;
  else {
    if (t = new u(t), r = t.d, t.s < 0 || !r || !r[0] || t.eq(1))
      return new u(NaN);
    e = t.eq(10);
  }
  if (r = l.d, l.s < 0 || !r || !r[0] || l.eq(1))
    return new u(r && !r[0] ? -1 / 0 : l.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (e)
    if (r.length > 1)
      s = !0;
    else {
      for (i = r[0]; i % 10 === 0; )
        i /= 10;
      s = i !== 1;
    }
  if (ce = !1, a = d + h, o = It(l, a), n = e ? Ai(u, a + 10) : It(t, a), c = ye(o, n, a, 1), Ur(c.d, i = d, f))
    do
      if (a += 10, o = It(l, a), n = e ? Ai(u, a + 10) : It(t, a), c = ye(o, n, a, 1), !s) {
        +Ne(c.d).slice(i + 1, i + 15) + 1 == 1e14 && (c = re(c, d + 1, 0));
        break;
      }
    while (Ur(c.d, i += 10, f));
  return ce = !0, re(c, d, f);
};
Y.minus = Y.sub = function(t) {
  var e, r, n, i, s, o, a, c, l, u, d, f, h = this, p = h.constructor;
  if (t = new p(t), !h.d || !t.d)
    return !h.s || !t.s ? t = new p(NaN) : h.d ? t.s = -t.s : t = new p(t.d || h.s !== t.s ? h : NaN), t;
  if (h.s != t.s)
    return t.s = -t.s, h.plus(t);
  if (l = h.d, f = t.d, a = p.precision, c = p.rounding, !l[0] || !f[0]) {
    if (f[0])
      t.s = -t.s;
    else if (l[0])
      t = new p(h);
    else
      return new p(c === 3 ? -0 : 0);
    return ce ? re(t, a, c) : t;
  }
  if (r = Pe(t.e / ie), u = Pe(h.e / ie), l = l.slice(), s = u - r, s) {
    for (d = s < 0, d ? (e = l, s = -s, o = f.length) : (e = f, r = u, o = l.length), n = Math.max(Math.ceil(a / ie), o) + 2, s > n && (s = n, e.length = 1), e.reverse(), n = s; n--; )
      e.push(0);
    e.reverse();
  } else {
    for (n = l.length, o = f.length, d = n < o, d && (o = n), n = 0; n < o; n++)
      if (l[n] != f[n]) {
        d = l[n] < f[n];
        break;
      }
    s = 0;
  }
  for (d && (e = l, l = f, f = e, t.s = -t.s), o = l.length, n = f.length - o; n > 0; --n)
    l[o++] = 0;
  for (n = f.length; n > s; ) {
    if (l[--n] < f[n]) {
      for (i = n; i && l[--i] === 0; )
        l[i] = nt - 1;
      --l[i], l[n] += nt;
    }
    l[n] -= f[n];
  }
  for (; l[--o] === 0; )
    l.pop();
  for (; l[0] === 0; l.shift())
    --r;
  return l[0] ? (t.d = l, t.e = Li(l, r), ce ? re(t, a, c) : t) : new p(c === 3 ? -0 : 0);
};
Y.modulo = Y.mod = function(t) {
  var e, r = this, n = r.constructor;
  return t = new n(t), !r.d || !t.s || t.d && !t.d[0] ? new n(NaN) : !t.d || r.d && !r.d[0] ? re(new n(r), n.precision, n.rounding) : (ce = !1, n.modulo == 9 ? (e = ye(r, t.abs(), 0, 3, 1), e.s *= t.s) : e = ye(r, t, 0, n.modulo, 1), e = e.times(t), ce = !0, r.minus(e));
};
Y.naturalExponential = Y.exp = function() {
  return Vs(this);
};
Y.naturalLogarithm = Y.ln = function() {
  return It(this);
};
Y.negated = Y.neg = function() {
  var t = new this.constructor(this);
  return t.s = -t.s, re(t);
};
Y.plus = Y.add = function(t) {
  var e, r, n, i, s, o, a, c, l, u, d = this, f = d.constructor;
  if (t = new f(t), !d.d || !t.d)
    return !d.s || !t.s ? t = new f(NaN) : d.d || (t = new f(t.d || d.s === t.s ? d : NaN)), t;
  if (d.s != t.s)
    return t.s = -t.s, d.minus(t);
  if (l = d.d, u = t.d, a = f.precision, c = f.rounding, !l[0] || !u[0])
    return u[0] || (t = new f(d)), ce ? re(t, a, c) : t;
  if (s = Pe(d.e / ie), n = Pe(t.e / ie), l = l.slice(), i = s - n, i) {
    for (i < 0 ? (r = l, i = -i, o = u.length) : (r = u, n = s, o = l.length), s = Math.ceil(a / ie), o = s > o ? s + 1 : o + 1, i > o && (i = o, r.length = 1), r.reverse(); i--; )
      r.push(0);
    r.reverse();
  }
  for (o = l.length, i = u.length, o - i < 0 && (i = o, r = u, u = l, l = r), e = 0; i; )
    e = (l[--i] = l[i] + u[i] + e) / nt | 0, l[i] %= nt;
  for (e && (l.unshift(e), ++n), o = l.length; l[--o] == 0; )
    l.pop();
  return t.d = l, t.e = Li(l, n), ce ? re(t, a, c) : t;
};
Y.precision = Y.sd = function(t) {
  var e, r = this;
  if (t !== void 0 && t !== !!t && t !== 1 && t !== 0)
    throw Error(Pt + t);
  return r.d ? (e = df(r.d), t && r.e + 1 > e && (e = r.e + 1)) : e = NaN, e;
};
Y.round = function() {
  var t = this, e = t.constructor;
  return re(new e(t), t.e + 1, e.rounding);
};
Y.sine = Y.sin = function() {
  var t, e, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (t = n.precision, e = n.rounding, n.precision = t + Math.max(r.e, r.sd()) + ie, n.rounding = 1, r = dy(n, vf(n, r)), n.precision = t, n.rounding = e, re(yt > 2 ? r.neg() : r, t, e, !0)) : new n(NaN);
};
Y.squareRoot = Y.sqrt = function() {
  var t, e, r, n, i, s, o = this, a = o.d, c = o.e, l = o.s, u = o.constructor;
  if (l !== 1 || !a || !a[0])
    return new u(!l || l < 0 && (!a || a[0]) ? NaN : a ? o : 1 / 0);
  for (ce = !1, l = Math.sqrt(+o), l == 0 || l == 1 / 0 ? (e = Ne(a), (e.length + c) % 2 == 0 && (e += "0"), l = Math.sqrt(e), c = Pe((c + 1) / 2) - (c < 0 || c % 2), l == 1 / 0 ? e = "5e" + c : (e = l.toExponential(), e = e.slice(0, e.indexOf("e") + 1) + c), n = new u(e)) : n = new u(l.toString()), r = (c = u.precision) + 3; ; )
    if (s = n, n = s.plus(ye(o, s, r + 2, 1)).times(0.5), Ne(s.d).slice(0, r) === (e = Ne(n.d)).slice(0, r))
      if (e = e.slice(r - 3, r + 1), e == "9999" || !i && e == "4999") {
        if (!i && (re(s, c + 1, 0), s.times(s).eq(o))) {
          n = s;
          break;
        }
        r += 4, i = 1;
      } else {
        (!+e || !+e.slice(1) && e.charAt(0) == "5") && (re(n, c + 1, 1), t = !n.times(n).eq(o));
        break;
      }
  return ce = !0, re(n, c, u.rounding, t);
};
Y.tangent = Y.tan = function() {
  var t, e, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (t = n.precision, e = n.rounding, n.precision = t + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = ye(r, new n(1).minus(r.times(r)).sqrt(), t + 10, 0), n.precision = t, n.rounding = e, re(yt == 2 || yt == 4 ? r.neg() : r, t, e, !0)) : new n(NaN);
};
Y.times = Y.mul = function(t) {
  var e, r, n, i, s, o, a, c, l, u = this, d = u.constructor, f = u.d, h = (t = new d(t)).d;
  if (t.s *= u.s, !f || !f[0] || !h || !h[0])
    return new d(!t.s || f && !f[0] && !h || h && !h[0] && !f ? NaN : !f || !h ? t.s / 0 : t.s * 0);
  for (r = Pe(u.e / ie) + Pe(t.e / ie), c = f.length, l = h.length, c < l && (s = f, f = h, h = s, o = c, c = l, l = o), s = [], o = c + l, n = o; n--; )
    s.push(0);
  for (n = l; --n >= 0; ) {
    for (e = 0, i = c + n; i > n; )
      a = s[i] + h[n] * f[i - n - 1] + e, s[i--] = a % nt | 0, e = a / nt | 0;
    s[i] = (s[i] + e) % nt | 0;
  }
  for (; !s[--o]; )
    s.pop();
  return e ? ++r : s.shift(), t.d = s, t.e = Li(s, r), ce ? re(t, d.precision, d.rounding) : t;
};
Y.toBinary = function(t, e) {
  return Io(this, 2, t, e);
};
Y.toDecimalPlaces = Y.toDP = function(t, e) {
  var r = this, n = r.constructor;
  return r = new n(r), t === void 0 ? r : (je(t, 0, Lt), e === void 0 ? e = n.rounding : je(e, 0, 8), re(r, t + r.e + 1, e));
};
Y.toExponential = function(t, e) {
  var r, n = this, i = n.constructor;
  return t === void 0 ? r = ut(n, !0) : (je(t, 0, Lt), e === void 0 ? e = i.rounding : je(e, 0, 8), n = re(new i(n), t + 1, e), r = ut(n, !0, t + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
};
Y.toFixed = function(t, e) {
  var r, n, i = this, s = i.constructor;
  return t === void 0 ? r = ut(i) : (je(t, 0, Lt), e === void 0 ? e = s.rounding : je(e, 0, 8), n = re(new s(i), t + i.e + 1, e), r = ut(n, !1, t + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
};
Y.toFraction = function(t) {
  var e, r, n, i, s, o, a, c, l, u, d, f, h = this, p = h.d, v = h.constructor;
  if (!p)
    return new v(h);
  if (l = r = new v(1), n = c = new v(0), e = new v(n), s = e.e = df(p) - h.e - 1, o = s % ie, e.d[0] = ke(10, o < 0 ? ie + o : o), t == null)
    t = s > 0 ? e : l;
  else {
    if (a = new v(t), !a.isInt() || a.lt(l))
      throw Error(Pt + a);
    t = a.gt(e) ? s > 0 ? e : l : a;
  }
  for (ce = !1, a = new v(Ne(p)), u = v.precision, v.precision = s = p.length * ie * 2; d = ye(a, e, 0, 1, 1), i = r.plus(d.times(n)), i.cmp(t) != 1; )
    r = n, n = i, i = l, l = c.plus(d.times(i)), c = i, i = e, e = a.minus(d.times(i)), a = i;
  return i = ye(t.minus(r), n, 0, 1, 1), c = c.plus(i.times(l)), r = r.plus(i.times(n)), c.s = l.s = h.s, f = ye(l, n, s, 1).minus(h).abs().cmp(ye(c, r, s, 1).minus(h).abs()) < 1 ? [l, n] : [c, r], v.precision = u, ce = !0, f;
};
Y.toHexadecimal = Y.toHex = function(t, e) {
  return Io(this, 16, t, e);
};
Y.toNearest = function(t, e) {
  var r = this, n = r.constructor;
  if (r = new n(r), t == null) {
    if (!r.d)
      return r;
    t = new n(1), e = n.rounding;
  } else {
    if (t = new n(t), e === void 0 ? e = n.rounding : je(e, 0, 8), !r.d)
      return t.s ? r : t;
    if (!t.d)
      return t.s && (t.s = r.s), t;
  }
  return t.d[0] ? (ce = !1, r = ye(r, t, 0, e, 1).times(t), ce = !0, re(r)) : (t.s = r.s, r = t), r;
};
Y.toNumber = function() {
  return +this;
};
Y.toOctal = function(t, e) {
  return Io(this, 8, t, e);
};
Y.toPower = Y.pow = function(t) {
  var e, r, n, i, s, o, a = this, c = a.constructor, l = +(t = new c(t));
  if (!a.d || !t.d || !a.d[0] || !t.d[0])
    return new c(ke(+a, l));
  if (a = new c(a), a.eq(1))
    return a;
  if (n = c.precision, s = c.rounding, t.eq(1))
    return re(a, n, s);
  if (e = Pe(t.e / ie), e >= t.d.length - 1 && (r = l < 0 ? -l : l) <= ly)
    return i = hf(c, a, r, n), t.s < 0 ? new c(1).div(i) : re(i, n, s);
  if (o = a.s, o < 0) {
    if (e < t.d.length - 1)
      return new c(NaN);
    if (t.d[e] & 1 || (o = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
      return a.s = o, a;
  }
  return r = ke(+a, l), e = r == 0 || !isFinite(r) ? Pe(l * (Math.log("0." + Ne(a.d)) / Math.LN10 + a.e + 1)) : new c(r + "").e, e > c.maxE + 1 || e < c.minE - 1 ? new c(e > 0 ? o / 0 : 0) : (ce = !1, c.rounding = a.s = 1, r = Math.min(12, (e + "").length), i = Vs(t.times(It(a, n + r)), n), i.d && (i = re(i, n + 5, 1), Ur(i.d, n, s) && (e = n + 10, i = re(Vs(t.times(It(a, e + r)), e), e + 5, 1), +Ne(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = re(i, n + 1, 0)))), i.s = o, ce = !0, c.rounding = s, re(i, n, s));
};
Y.toPrecision = function(t, e) {
  var r, n = this, i = n.constructor;
  return t === void 0 ? r = ut(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (je(t, 1, Lt), e === void 0 ? e = i.rounding : je(e, 0, 8), n = re(new i(n), t, e), r = ut(n, t <= n.e || n.e <= i.toExpNeg, t)), n.isNeg() && !n.isZero() ? "-" + r : r;
};
Y.toSignificantDigits = Y.toSD = function(t, e) {
  var r = this, n = r.constructor;
  return t === void 0 ? (t = n.precision, e = n.rounding) : (je(t, 1, Lt), e === void 0 ? e = n.rounding : je(e, 0, 8)), re(new n(r), t, e);
};
Y.toString = function() {
  var t = this, e = t.constructor, r = ut(t, t.e <= e.toExpNeg || t.e >= e.toExpPos);
  return t.isNeg() && !t.isZero() ? "-" + r : r;
};
Y.truncated = Y.trunc = function() {
  return re(new this.constructor(this), this.e + 1, 1);
};
Y.valueOf = Y.toJSON = function() {
  var t = this, e = t.constructor, r = ut(t, t.e <= e.toExpNeg || t.e >= e.toExpPos);
  return t.isNeg() ? "-" + r : r;
};
function Ne(t) {
  var e, r, n, i = t.length - 1, s = "", o = t[0];
  if (i > 0) {
    for (s += o, e = 1; e < i; e++)
      n = t[e] + "", r = ie - n.length, r && (s += Dt(r)), s += n;
    o = t[e], n = o + "", r = ie - n.length, r && (s += Dt(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; )
    o /= 10;
  return s + o;
}
function je(t, e, r) {
  if (t !== ~~t || t < e || t > r)
    throw Error(Pt + t);
}
function Ur(t, e, r, n) {
  var i, s, o, a;
  for (s = t[0]; s >= 10; s /= 10)
    --e;
  return --e < 0 ? (e += ie, i = 0) : (i = Math.ceil((e + 1) / ie), e %= ie), s = ke(10, ie - e), a = t[i] % s | 0, n == null ? e < 3 ? (e == 0 ? a = a / 100 | 0 : e == 1 && (a = a / 10 | 0), o = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0) : o = (r < 4 && a + 1 == s || r > 3 && a + 1 == s / 2) && (t[i + 1] / s / 100 | 0) == ke(10, e - 2) - 1 || (a == s / 2 || a == 0) && (t[i + 1] / s / 100 | 0) == 0 : e < 4 ? (e == 0 ? a = a / 1e3 | 0 : e == 1 ? a = a / 100 | 0 : e == 2 && (a = a / 10 | 0), o = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : o = ((n || r < 4) && a + 1 == s || !n && r > 3 && a + 1 == s / 2) && (t[i + 1] / s / 1e3 | 0) == ke(10, e - 3) - 1, o;
}
function An(t, e, r) {
  for (var n, i = [0], s, o = 0, a = t.length; o < a; ) {
    for (s = i.length; s--; )
      i[s] *= e;
    for (i[0] += Us.indexOf(t.charAt(o++)), n = 0; n < i.length; n++)
      i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
  }
  return i.reverse();
}
function uy(t, e) {
  var r, n, i;
  if (e.isZero())
    return e;
  n = e.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / Fi(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), t.precision += r, e = mr(t, 1, e.times(i), new t(1));
  for (var s = r; s--; ) {
    var o = e.times(e);
    e = o.times(o).minus(o).times(8).plus(1);
  }
  return t.precision -= r, e;
}
var ye = function() {
  function t(n, i, s) {
    var o, a = 0, c = n.length;
    for (n = n.slice(); c--; )
      o = n[c] * i + a, n[c] = o % s | 0, a = o / s | 0;
    return a && n.unshift(a), n;
  }
  function e(n, i, s, o) {
    var a, c;
    if (s != o)
      c = s > o ? 1 : -1;
    else
      for (a = c = 0; a < s; a++)
        if (n[a] != i[a]) {
          c = n[a] > i[a] ? 1 : -1;
          break;
        }
    return c;
  }
  function r(n, i, s, o) {
    for (var a = 0; s--; )
      n[s] -= a, a = n[s] < i[s] ? 1 : 0, n[s] = a * o + n[s] - i[s];
    for (; !n[0] && n.length > 1; )
      n.shift();
  }
  return function(n, i, s, o, a, c) {
    var l, u, d, f, h, p, v, b, w, x, g, m, E, S, C, T, B, A, I, P, O = n.constructor, z = n.s == i.s ? 1 : -1, H = n.d, j = i.d;
    if (!H || !H[0] || !j || !j[0])
      return new O(
        // Return NaN if either NaN, or both Infinity or 0.
        !n.s || !i.s || (H ? j && H[0] == j[0] : !j) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          H && H[0] == 0 || !j ? z * 0 : z / 0
        )
      );
    for (c ? (h = 1, u = n.e - i.e) : (c = nt, h = ie, u = Pe(n.e / h) - Pe(i.e / h)), I = j.length, B = H.length, w = new O(z), x = w.d = [], d = 0; j[d] == (H[d] || 0); d++)
      ;
    if (j[d] > (H[d] || 0) && u--, s == null ? (S = s = O.precision, o = O.rounding) : a ? S = s + (n.e - i.e) + 1 : S = s, S < 0)
      x.push(1), p = !0;
    else {
      if (S = S / h + 2 | 0, d = 0, I == 1) {
        for (f = 0, j = j[0], S++; (d < B || f) && S--; d++)
          C = f * c + (H[d] || 0), x[d] = C / j | 0, f = C % j | 0;
        p = f || d < B;
      } else {
        for (f = c / (j[0] + 1) | 0, f > 1 && (j = t(j, f, c), H = t(H, f, c), I = j.length, B = H.length), T = I, g = H.slice(0, I), m = g.length; m < I; )
          g[m++] = 0;
        P = j.slice(), P.unshift(0), A = j[0], j[1] >= c / 2 && ++A;
        do
          f = 0, l = e(j, g, I, m), l < 0 ? (E = g[0], I != m && (E = E * c + (g[1] || 0)), f = E / A | 0, f > 1 ? (f >= c && (f = c - 1), v = t(j, f, c), b = v.length, m = g.length, l = e(v, g, b, m), l == 1 && (f--, r(v, I < b ? P : j, b, c))) : (f == 0 && (l = f = 1), v = j.slice()), b = v.length, b < m && v.unshift(0), r(g, v, m, c), l == -1 && (m = g.length, l = e(j, g, I, m), l < 1 && (f++, r(g, I < m ? P : j, m, c))), m = g.length) : l === 0 && (f++, g = [0]), x[d++] = f, l && g[0] ? g[m++] = H[T] || 0 : (g = [H[T]], m = 1);
        while ((T++ < B || g[0] !== void 0) && S--);
        p = g[0] !== void 0;
      }
      x[0] || x.shift();
    }
    if (h == 1)
      w.e = u, af = p;
    else {
      for (d = 1, f = x[0]; f >= 10; f /= 10)
        d++;
      w.e = d + u * h - 1, re(w, a ? s + w.e + 1 : s, o, p);
    }
    return w;
  };
}();
function re(t, e, r, n) {
  var i, s, o, a, c, l, u, d, f, h = t.constructor;
  e:
    if (e != null) {
      if (d = t.d, !d)
        return t;
      for (i = 1, a = d[0]; a >= 10; a /= 10)
        i++;
      if (s = e - i, s < 0)
        s += ie, o = e, u = d[f = 0], c = u / ke(10, i - o - 1) % 10 | 0;
      else if (f = Math.ceil((s + 1) / ie), a = d.length, f >= a)
        if (n) {
          for (; a++ <= f; )
            d.push(0);
          u = c = 0, i = 1, s %= ie, o = s - ie + 1;
        } else
          break e;
      else {
        for (u = a = d[f], i = 1; a >= 10; a /= 10)
          i++;
        s %= ie, o = s - ie + i, c = o < 0 ? 0 : u / ke(10, i - o - 1) % 10 | 0;
      }
      if (n = n || e < 0 || d[f + 1] !== void 0 || (o < 0 ? u : u % ke(10, i - o - 1)), l = r < 4 ? (c || n) && (r == 0 || r == (t.s < 0 ? 3 : 2)) : c > 5 || c == 5 && (r == 4 || n || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (s > 0 ? o > 0 ? u / ke(10, i - o) : 0 : d[f - 1]) % 10 & 1 || r == (t.s < 0 ? 8 : 7)), e < 1 || !d[0])
        return d.length = 0, l ? (e -= t.e + 1, d[0] = ke(10, (ie - e % ie) % ie), t.e = -e || 0) : d[0] = t.e = 0, t;
      if (s == 0 ? (d.length = f, a = 1, f--) : (d.length = f + 1, a = ke(10, ie - s), d[f] = o > 0 ? (u / ke(10, i - o) % ke(10, o) | 0) * a : 0), l)
        for (; ; )
          if (f == 0) {
            for (s = 1, o = d[0]; o >= 10; o /= 10)
              s++;
            for (o = d[0] += a, a = 1; o >= 10; o /= 10)
              a++;
            s != a && (t.e++, d[0] == nt && (d[0] = 1));
            break;
          } else {
            if (d[f] += a, d[f] != nt)
              break;
            d[f--] = 0, a = 1;
          }
      for (s = d.length; d[--s] === 0; )
        d.pop();
    }
  return ce && (t.e > h.maxE ? (t.d = null, t.e = NaN) : t.e < h.minE && (t.e = 0, t.d = [0])), t;
}
function ut(t, e, r) {
  if (!t.isFinite())
    return gf(t);
  var n, i = t.e, s = Ne(t.d), o = s.length;
  return e ? (r && (n = r - o) > 0 ? s = s.charAt(0) + "." + s.slice(1) + Dt(n) : o > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (t.e < 0 ? "e" : "e+") + t.e) : i < 0 ? (s = "0." + Dt(-i - 1) + s, r && (n = r - o) > 0 && (s += Dt(n))) : i >= o ? (s += Dt(i + 1 - o), r && (n = r - i - 1) > 0 && (s = s + "." + Dt(n))) : ((n = i + 1) < o && (s = s.slice(0, n) + "." + s.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (s += "."), s += Dt(n))), s;
}
function Li(t, e) {
  var r = t[0];
  for (e *= ie; r >= 10; r /= 10)
    e++;
  return e;
}
function Ai(t, e, r) {
  if (e > cy)
    throw ce = !0, r && (t.precision = r), Error(lf);
  return re(new t(_i), e, 1, !0);
}
function rt(t, e, r) {
  if (e > js)
    throw Error(lf);
  return re(new t(Si), e, r, !0);
}
function df(t) {
  var e = t.length - 1, r = e * ie + 1;
  if (e = t[e], e) {
    for (; e % 10 == 0; e /= 10)
      r--;
    for (e = t[0]; e >= 10; e /= 10)
      r++;
  }
  return r;
}
function Dt(t) {
  for (var e = ""; t--; )
    e += "0";
  return e;
}
function hf(t, e, r, n) {
  var i, s = new t(1), o = Math.ceil(n / ie + 4);
  for (ce = !1; ; ) {
    if (r % 2 && (s = s.times(e), Hl(s.d, o) && (i = !0)), r = Pe(r / 2), r === 0) {
      r = s.d.length - 1, i && s.d[r] === 0 && ++s.d[r];
      break;
    }
    e = e.times(e), Hl(e.d, o);
  }
  return ce = !0, s;
}
function Pl(t) {
  return t.d[t.d.length - 1] & 1;
}
function pf(t, e, r) {
  for (var n, i = new t(e[0]), s = 0; ++s < e.length; )
    if (n = new t(e[s]), n.s)
      i[r](n) && (i = n);
    else {
      i = n;
      break;
    }
  return i;
}
function Vs(t, e) {
  var r, n, i, s, o, a, c, l = 0, u = 0, d = 0, f = t.constructor, h = f.rounding, p = f.precision;
  if (!t.d || !t.d[0] || t.e > 17)
    return new f(t.d ? t.d[0] ? t.s < 0 ? 0 : 1 / 0 : 1 : t.s ? t.s < 0 ? 0 : t : 0 / 0);
  for (e == null ? (ce = !1, c = p) : c = e, a = new f(0.03125); t.e > -2; )
    t = t.times(a), d += 5;
  for (n = Math.log(ke(2, d)) / Math.LN10 * 2 + 5 | 0, c += n, r = s = o = new f(1), f.precision = c; ; ) {
    if (s = re(s.times(t), c, 1), r = r.times(++u), a = o.plus(ye(s, r, c, 1)), Ne(a.d).slice(0, c) === Ne(o.d).slice(0, c)) {
      for (i = d; i--; )
        o = re(o.times(o), c, 1);
      if (e == null)
        if (l < 3 && Ur(o.d, c - n, h, l))
          f.precision = c += 10, r = s = a = new f(1), u = 0, l++;
        else
          return re(o, f.precision = p, h, ce = !0);
      else
        return f.precision = p, o;
    }
    o = a;
  }
}
function It(t, e) {
  var r, n, i, s, o, a, c, l, u, d, f, h = 1, p = 10, v = t, b = v.d, w = v.constructor, x = w.rounding, g = w.precision;
  if (v.s < 0 || !b || !b[0] || !v.e && b[0] == 1 && b.length == 1)
    return new w(b && !b[0] ? -1 / 0 : v.s != 1 ? NaN : b ? 0 : v);
  if (e == null ? (ce = !1, u = g) : u = e, w.precision = u += p, r = Ne(b), n = r.charAt(0), Math.abs(s = v.e) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      v = v.times(t), r = Ne(v.d), n = r.charAt(0), h++;
    s = v.e, n > 1 ? (v = new w("0." + r), s++) : v = new w(n + "." + r.slice(1));
  } else
    return l = Ai(w, u + 2, g).times(s + ""), v = It(new w(n + "." + r.slice(1)), u - p).plus(l), w.precision = g, e == null ? re(v, g, x, ce = !0) : v;
  for (d = v, c = o = v = ye(v.minus(1), v.plus(1), u, 1), f = re(v.times(v), u, 1), i = 3; ; ) {
    if (o = re(o.times(f), u, 1), l = c.plus(ye(o, new w(i), u, 1)), Ne(l.d).slice(0, u) === Ne(c.d).slice(0, u))
      if (c = c.times(2), s !== 0 && (c = c.plus(Ai(w, u + 2, g).times(s + ""))), c = ye(c, new w(h), u, 1), e == null)
        if (Ur(c.d, u - p, x, a))
          w.precision = u += p, l = o = v = ye(d.minus(1), d.plus(1), u, 1), f = re(v.times(v), u, 1), i = a = 1;
        else
          return re(c, w.precision = g, x, ce = !0);
      else
        return w.precision = g, c;
    c = l, i += 2;
  }
}
function gf(t) {
  return String(t.s * t.s / 0);
}
function qs(t, e) {
  var r, n, i;
  for ((r = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (n = e.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +e.slice(n + 1), e = e.substring(0, n)) : r < 0 && (r = e.length), n = 0; e.charCodeAt(n) === 48; n++)
    ;
  for (i = e.length; e.charCodeAt(i - 1) === 48; --i)
    ;
  if (e = e.slice(n, i), e) {
    if (i -= n, t.e = r = r - n - 1, t.d = [], n = (r + 1) % ie, r < 0 && (n += ie), n < i) {
      for (n && t.d.push(+e.slice(0, n)), i -= ie; n < i; )
        t.d.push(+e.slice(n, n += ie));
      e = e.slice(n), n = ie - e.length;
    } else
      n -= i;
    for (; n--; )
      e += "0";
    t.d.push(+e), ce && (t.e > t.constructor.maxE ? (t.d = null, t.e = NaN) : t.e < t.constructor.minE && (t.e = 0, t.d = [0]));
  } else
    t.e = 0, t.d = [0];
  return t;
}
function fy(t, e) {
  var r, n, i, s, o, a, c, l, u;
  if (e.indexOf("_") > -1) {
    if (e = e.replace(/(\d)_(?=\d)/g, "$1"), ff.test(e))
      return qs(t, e);
  } else if (e === "Infinity" || e === "NaN")
    return +e || (t.s = NaN), t.e = NaN, t.d = null, t;
  if (oy.test(e))
    r = 16, e = e.toLowerCase();
  else if (sy.test(e))
    r = 2;
  else if (ay.test(e))
    r = 8;
  else
    throw Error(Pt + e);
  for (s = e.search(/p/i), s > 0 ? (c = +e.slice(s + 1), e = e.substring(2, s)) : e = e.slice(2), s = e.indexOf("."), o = s >= 0, n = t.constructor, o && (e = e.replace(".", ""), a = e.length, s = a - s, i = hf(n, new n(r), s, s * 2)), l = An(e, r, nt), u = l.length - 1, s = u; l[s] === 0; --s)
    l.pop();
  return s < 0 ? new n(t.s * 0) : (t.e = Li(l, u), t.d = l, ce = !1, o && (t = ye(t, i, a * 4)), c && (t = t.times(Math.abs(c) < 54 ? ke(2, c) : Gr.pow(2, c))), ce = !0, t);
}
function dy(t, e) {
  var r, n = e.d.length;
  if (n < 3)
    return e.isZero() ? e : mr(t, 2, e, e);
  r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, e = e.times(1 / Fi(5, r)), e = mr(t, 2, e, e);
  for (var i, s = new t(5), o = new t(16), a = new t(20); r--; )
    i = e.times(e), e = e.times(s.plus(i.times(o.times(i).minus(a))));
  return e;
}
function mr(t, e, r, n, i) {
  var s, o, a, c, l = t.precision, u = Math.ceil(l / ie);
  for (ce = !1, c = r.times(r), a = new t(n); ; ) {
    if (o = ye(a.times(c), new t(e++ * e++), l, 1), a = i ? n.plus(o) : n.minus(o), n = ye(o.times(c), new t(e++ * e++), l, 1), o = a.plus(n), o.d[u] !== void 0) {
      for (s = u; o.d[s] === a.d[s] && s--; )
        ;
      if (s == -1)
        break;
    }
    s = a, a = n, n = o, o = s;
  }
  return ce = !0, o.d.length = u + 1, o;
}
function Fi(t, e) {
  for (var r = t; --e; )
    r *= t;
  return r;
}
function vf(t, e) {
  var r, n = e.s < 0, i = rt(t, t.precision, 1), s = i.times(0.5);
  if (e = e.abs(), e.lte(s))
    return yt = n ? 4 : 1, e;
  if (r = e.divToInt(i), r.isZero())
    yt = n ? 3 : 2;
  else {
    if (e = e.minus(r.times(i)), e.lte(s))
      return yt = Pl(r) ? n ? 2 : 3 : n ? 4 : 1, e;
    yt = Pl(r) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return e.minus(i).abs();
}
function Io(t, e, r, n) {
  var i, s, o, a, c, l, u, d, f, h = t.constructor, p = r !== void 0;
  if (p ? (je(r, 1, Lt), n === void 0 ? n = h.rounding : je(n, 0, 8)) : (r = h.precision, n = h.rounding), !t.isFinite())
    u = gf(t);
  else {
    for (u = ut(t), o = u.indexOf("."), p ? (i = 2, e == 16 ? r = r * 4 - 3 : e == 8 && (r = r * 3 - 2)) : i = e, o >= 0 && (u = u.replace(".", ""), f = new h(1), f.e = u.length - o, f.d = An(ut(f), 10, i), f.e = f.d.length), d = An(u, 10, i), s = c = d.length; d[--c] == 0; )
      d.pop();
    if (!d[0])
      u = p ? "0p+0" : "0";
    else {
      if (o < 0 ? s-- : (t = new h(t), t.d = d, t.e = s, t = ye(t, f, r, n, 0, i), d = t.d, s = t.e, l = af), o = d[r], a = i / 2, l = l || d[r + 1] !== void 0, l = n < 4 ? (o !== void 0 || l) && (n === 0 || n === (t.s < 0 ? 3 : 2)) : o > a || o === a && (n === 4 || l || n === 6 && d[r - 1] & 1 || n === (t.s < 0 ? 8 : 7)), d.length = r, l)
        for (; ++d[--r] > i - 1; )
          d[r] = 0, r || (++s, d.unshift(1));
      for (c = d.length; !d[c - 1]; --c)
        ;
      for (o = 0, u = ""; o < c; o++)
        u += Us.charAt(d[o]);
      if (p) {
        if (c > 1)
          if (e == 16 || e == 8) {
            for (o = e == 16 ? 4 : 3, --c; c % o; c++)
              u += "0";
            for (d = An(u, i, e), c = d.length; !d[c - 1]; --c)
              ;
            for (o = 1, u = "1."; o < c; o++)
              u += Us.charAt(d[o]);
          } else
            u = u.charAt(0) + "." + u.slice(1);
        u = u + (s < 0 ? "p" : "p+") + s;
      } else if (s < 0) {
        for (; ++s; )
          u = "0" + u;
        u = "0." + u;
      } else if (++s > c)
        for (s -= c; s--; )
          u += "0";
      else
        s < c && (u = u.slice(0, s) + "." + u.slice(s));
    }
    u = (e == 16 ? "0x" : e == 2 ? "0b" : e == 8 ? "0o" : "") + u;
  }
  return t.s < 0 ? "-" + u : u;
}
function Hl(t, e) {
  if (t.length > e)
    return t.length = e, !0;
}
function hy(t) {
  return new this(t).abs();
}
function py(t) {
  return new this(t).acos();
}
function gy(t) {
  return new this(t).acosh();
}
function vy(t, e) {
  return new this(t).plus(e);
}
function my(t) {
  return new this(t).asin();
}
function by(t) {
  return new this(t).asinh();
}
function yy(t) {
  return new this(t).atan();
}
function xy(t) {
  return new this(t).atanh();
}
function Ey(t, e) {
  t = new this(t), e = new this(e);
  var r, n = this.precision, i = this.rounding, s = n + 4;
  return !t.s || !e.s ? r = new this(NaN) : !t.d && !e.d ? (r = rt(this, s, 1).times(e.s > 0 ? 0.25 : 0.75), r.s = t.s) : !e.d || t.isZero() ? (r = e.s < 0 ? rt(this, n, i) : new this(0), r.s = t.s) : !t.d || e.isZero() ? (r = rt(this, s, 1).times(0.5), r.s = t.s) : e.s < 0 ? (this.precision = s, this.rounding = 1, r = this.atan(ye(t, e, s, 1)), e = rt(this, s, 1), this.precision = n, this.rounding = i, r = t.s < 0 ? r.minus(e) : r.plus(e)) : r = this.atan(ye(t, e, s, 1)), r;
}
function wy(t) {
  return new this(t).cbrt();
}
function _y(t) {
  return re(t = new this(t), t.e + 1, 2);
}
function Sy(t, e, r) {
  return new this(t).clamp(e, r);
}
function Ay(t) {
  if (!t || typeof t != "object")
    throw Error(Hi + "Object expected");
  var e, r, n, i = t.defaults === !0, s = [
    "precision",
    1,
    Lt,
    "rounding",
    0,
    8,
    "toExpNeg",
    -cr,
    0,
    "toExpPos",
    0,
    cr,
    "maxE",
    0,
    cr,
    "minE",
    -cr,
    0,
    "modulo",
    0,
    9
  ];
  for (e = 0; e < s.length; e += 3)
    if (r = s[e], i && (this[r] = Ws[r]), (n = t[r]) !== void 0)
      if (Pe(n) === n && n >= s[e + 1] && n <= s[e + 2])
        this[r] = n;
      else
        throw Error(Pt + r + ": " + n);
  if (r = "crypto", i && (this[r] = Ws[r]), (n = t[r]) !== void 0)
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(cf);
      else
        this[r] = !1;
    else
      throw Error(Pt + r + ": " + n);
  return this;
}
function Cy(t) {
  return new this(t).cos();
}
function Dy(t) {
  return new this(t).cosh();
}
function mf(t) {
  var e, r, n;
  function i(s) {
    var o, a, c, l = this;
    if (!(l instanceof i))
      return new i(s);
    if (l.constructor = i, Ll(s)) {
      l.s = s.s, ce ? !s.d || s.e > i.maxE ? (l.e = NaN, l.d = null) : s.e < i.minE ? (l.e = 0, l.d = [0]) : (l.e = s.e, l.d = s.d.slice()) : (l.e = s.e, l.d = s.d ? s.d.slice() : s.d);
      return;
    }
    if (c = typeof s, c === "number") {
      if (s === 0) {
        l.s = 1 / s < 0 ? -1 : 1, l.e = 0, l.d = [0];
        return;
      }
      if (s < 0 ? (s = -s, l.s = -1) : l.s = 1, s === ~~s && s < 1e7) {
        for (o = 0, a = s; a >= 10; a /= 10)
          o++;
        ce ? o > i.maxE ? (l.e = NaN, l.d = null) : o < i.minE ? (l.e = 0, l.d = [0]) : (l.e = o, l.d = [s]) : (l.e = o, l.d = [s]);
        return;
      } else if (s * 0 !== 0) {
        s || (l.s = NaN), l.e = NaN, l.d = null;
        return;
      }
      return qs(l, s.toString());
    } else if (c !== "string")
      throw Error(Pt + s);
    return (a = s.charCodeAt(0)) === 45 ? (s = s.slice(1), l.s = -1) : (a === 43 && (s = s.slice(1)), l.s = 1), ff.test(s) ? qs(l, s) : fy(l, s);
  }
  if (i.prototype = Y, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Ay, i.clone = mf, i.isDecimal = Ll, i.abs = hy, i.acos = py, i.acosh = gy, i.add = vy, i.asin = my, i.asinh = by, i.atan = yy, i.atanh = xy, i.atan2 = Ey, i.cbrt = wy, i.ceil = _y, i.clamp = Sy, i.cos = Cy, i.cosh = Dy, i.div = Ry, i.exp = Ty, i.floor = ky, i.hypot = Iy, i.ln = My, i.log = Ny, i.log10 = By, i.log2 = Oy, i.max = Py, i.min = Hy, i.mod = Ly, i.mul = Fy, i.pow = zy, i.random = Uy, i.round = Wy, i.sign = jy, i.sin = Vy, i.sinh = qy, i.sqrt = Yy, i.sub = Gy, i.sum = $y, i.tan = Qy, i.tanh = Zy, i.trunc = Xy, t === void 0 && (t = {}), t && t.defaults !== !0)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], e = 0; e < n.length; )
      t.hasOwnProperty(r = n[e++]) || (t[r] = this[r]);
  return i.config(t), i;
}
function Ry(t, e) {
  return new this(t).div(e);
}
function Ty(t) {
  return new this(t).exp();
}
function ky(t) {
  return re(t = new this(t), t.e + 1, 3);
}
function Iy() {
  var t, e, r = new this(0);
  for (ce = !1, t = 0; t < arguments.length; )
    if (e = new this(arguments[t++]), e.d)
      r.d && (r = r.plus(e.times(e)));
    else {
      if (e.s)
        return ce = !0, new this(1 / 0);
      r = e;
    }
  return ce = !0, r.sqrt();
}
function Ll(t) {
  return t instanceof Gr || t && t.toStringTag === uf || !1;
}
function My(t) {
  return new this(t).ln();
}
function Ny(t, e) {
  return new this(t).log(e);
}
function Oy(t) {
  return new this(t).log(2);
}
function By(t) {
  return new this(t).log(10);
}
function Py() {
  return pf(this, arguments, "lt");
}
function Hy() {
  return pf(this, arguments, "gt");
}
function Ly(t, e) {
  return new this(t).mod(e);
}
function Fy(t, e) {
  return new this(t).mul(e);
}
function zy(t, e) {
  return new this(t).pow(e);
}
function Uy(t) {
  var e, r, n, i, s = 0, o = new this(1), a = [];
  if (t === void 0 ? t = this.precision : je(t, 1, Lt), n = Math.ceil(t / ie), this.crypto)
    if (crypto.getRandomValues)
      for (e = crypto.getRandomValues(new Uint32Array(n)); s < n; )
        i = e[s], i >= 429e7 ? e[s] = crypto.getRandomValues(new Uint32Array(1))[0] : a[s++] = i % 1e7;
    else if (crypto.randomBytes) {
      for (e = crypto.randomBytes(n *= 4); s < n; )
        i = e[s] + (e[s + 1] << 8) + (e[s + 2] << 16) + ((e[s + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(e, s) : (a.push(i % 1e7), s += 4);
      s = n / 4;
    } else
      throw Error(cf);
  else
    for (; s < n; )
      a[s++] = Math.random() * 1e7 | 0;
  for (n = a[--s], t %= ie, n && t && (i = ke(10, ie - t), a[s] = (n / i | 0) * i); a[s] === 0; s--)
    a.pop();
  if (s < 0)
    r = 0, a = [0];
  else {
    for (r = -1; a[0] === 0; r -= ie)
      a.shift();
    for (n = 1, i = a[0]; i >= 10; i /= 10)
      n++;
    n < ie && (r -= ie - n);
  }
  return o.e = r, o.d = a, o;
}
function Wy(t) {
  return re(t = new this(t), t.e + 1, this.rounding);
}
function jy(t) {
  return t = new this(t), t.d ? t.d[0] ? t.s : 0 * t.s : t.s || NaN;
}
function Vy(t) {
  return new this(t).sin();
}
function qy(t) {
  return new this(t).sinh();
}
function Yy(t) {
  return new this(t).sqrt();
}
function Gy(t, e) {
  return new this(t).sub(e);
}
function $y() {
  var t = 0, e = arguments, r = new this(e[t]);
  for (ce = !1; r.s && ++t < e.length; )
    r = r.plus(e[t]);
  return ce = !0, re(r, this.precision, this.rounding);
}
function Qy(t) {
  return new this(t).tan();
}
function Zy(t) {
  return new this(t).tanh();
}
function Xy(t) {
  return re(t = new this(t), t.e + 1, 1);
}
Y[Symbol.for("nodejs.util.inspect.custom")] = Y.toString;
Y[Symbol.toStringTag] = "Decimal";
var Gr = Y.constructor = mf(Ws);
_i = new Gr(_i);
Si = new Gr(Si);
var Fl = {}, Ky = {
  get exports() {
    return Fl;
  },
  set exports(t) {
    Fl = t;
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
  (function(r, n) {
    t.exports = n.call(r);
  })(ae, function() {
    var r = r || {}, n = document.querySelectorAll.bind(document), i = Object.prototype.toString, s = "ontouchstart" in window;
    function o(g) {
      return g !== null && g === g.window;
    }
    function a(g) {
      return o(g) ? g : g.nodeType === 9 && g.defaultView;
    }
    function c(g) {
      var m = typeof g;
      return m === "function" || m === "object" && !!g;
    }
    function l(g) {
      return c(g) && g.nodeType > 0;
    }
    function u(g) {
      var m = i.call(g);
      return m === "[object String]" ? n(g) : c(g) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(m) && g.hasOwnProperty("length") ? g : l(g) ? [g] : [];
    }
    function d(g) {
      var m, E, S = { top: 0, left: 0 }, C = g && g.ownerDocument;
      return m = C.documentElement, typeof g.getBoundingClientRect < "u" && (S = g.getBoundingClientRect()), E = a(C), {
        top: S.top + E.pageYOffset - m.clientTop,
        left: S.left + E.pageXOffset - m.clientLeft
      };
    }
    function f(g) {
      var m = "";
      for (var E in g)
        g.hasOwnProperty(E) && (m += E + ":" + g[E] + ";");
      return m;
    }
    var h = {
      // Effect duration
      duration: 750,
      // Effect delay (check for scroll before showing effect)
      delay: 200,
      show: function(g, m, E) {
        if (g.button === 2)
          return !1;
        m = m || this;
        var S = document.createElement("div");
        S.className = "waves-ripple waves-rippling", m.appendChild(S);
        var C = d(m), T = 0, B = 0;
        "touches" in g && g.touches.length ? (T = g.touches[0].pageY - C.top, B = g.touches[0].pageX - C.left) : (T = g.pageY - C.top, B = g.pageX - C.left), B = B >= 0 ? B : 0, T = T >= 0 ? T : 0;
        var A = "scale(" + m.clientWidth / 100 * 3 + ")", I = "translate(0,0)";
        E && (I = "translate(" + E.x + "px, " + E.y + "px)"), S.setAttribute("data-hold", Date.now()), S.setAttribute("data-x", B), S.setAttribute("data-y", T), S.setAttribute("data-scale", A), S.setAttribute("data-translate", I);
        var P = {
          top: T + "px",
          left: B + "px"
        };
        S.classList.add("waves-notransition"), S.setAttribute("style", f(P)), S.classList.remove("waves-notransition"), P["-webkit-transform"] = A + " " + I, P["-moz-transform"] = A + " " + I, P["-ms-transform"] = A + " " + I, P["-o-transform"] = A + " " + I, P.transform = A + " " + I, P.opacity = "1";
        var O = g.type === "mousemove" ? 2500 : h.duration;
        P["-webkit-transition-duration"] = O + "ms", P["-moz-transition-duration"] = O + "ms", P["-o-transition-duration"] = O + "ms", P["transition-duration"] = O + "ms", S.setAttribute("style", f(P));
      },
      hide: function(g, m) {
        m = m || this;
        for (var E = m.getElementsByClassName("waves-rippling"), S = 0, C = E.length; S < C; S++)
          v(g, m, E[S]);
        s && (m.removeEventListener("touchend", h.hide), m.removeEventListener("touchcancel", h.hide)), m.removeEventListener("mouseup", h.hide), m.removeEventListener("mouseleave", h.hide);
      }
    }, p = {
      // Wrap <input> tag so it can perform the effect
      input: function(g) {
        var m = g.parentNode;
        if (!(m.tagName.toLowerCase() === "i" && m.classList.contains("waves-effect"))) {
          var E = document.createElement("i");
          E.className = g.className + " waves-input-wrapper", g.className = "waves-button-input", m.replaceChild(E, g), E.appendChild(g);
          var S = window.getComputedStyle(g, null), C = S.color, T = S.backgroundColor;
          E.setAttribute("style", "color:" + C + ";background:" + T), g.setAttribute("style", "background-color:rgba(0,0,0,0);");
        }
      },
      // Wrap <img> tag so it can perform the effect
      img: function(g) {
        var m = g.parentNode;
        if (!(m.tagName.toLowerCase() === "i" && m.classList.contains("waves-effect"))) {
          var E = document.createElement("i");
          m.replaceChild(E, g), E.appendChild(g);
        }
      }
    };
    function v(g, m, E) {
      if (E) {
        E.classList.remove("waves-rippling");
        var S = E.getAttribute("data-x"), C = E.getAttribute("data-y"), T = E.getAttribute("data-scale"), B = E.getAttribute("data-translate"), A = Date.now() - Number(E.getAttribute("data-hold")), I = 350 - A;
        I < 0 && (I = 0), g.type === "mousemove" && (I = 150);
        var P = g.type === "mousemove" ? 2500 : h.duration;
        setTimeout(function() {
          var O = {
            top: C + "px",
            left: S + "px",
            opacity: "0",
            // Duration
            "-webkit-transition-duration": P + "ms",
            "-moz-transition-duration": P + "ms",
            "-o-transition-duration": P + "ms",
            "transition-duration": P + "ms",
            "-webkit-transform": T + " " + B,
            "-moz-transform": T + " " + B,
            "-ms-transform": T + " " + B,
            "-o-transform": T + " " + B,
            transform: T + " " + B
          };
          E.setAttribute("style", f(O)), setTimeout(function() {
            try {
              m.removeChild(E);
            } catch {
              return !1;
            }
          }, P);
        }, I);
      }
    }
    var b = {
      /* uses an integer rather than bool so there's no issues with
       * needing to clear timeouts if another touch event occurred
       * within the 500ms. Cannot mouseup between touchstart and
       * touchend, nor in the 500ms after touchend. */
      touches: 0,
      allowEvent: function(g) {
        var m = !0;
        return /^(mousedown|mousemove)$/.test(g.type) && b.touches && (m = !1), m;
      },
      registerEvent: function(g) {
        var m = g.type;
        m === "touchstart" ? b.touches += 1 : /^(touchend|touchcancel)$/.test(m) && setTimeout(function() {
          b.touches && (b.touches -= 1);
        }, 500);
      }
    };
    function w(g) {
      if (b.allowEvent(g) === !1)
        return null;
      for (var m = null, E = g.target || g.srcElement; E.parentElement; ) {
        if (!(E instanceof SVGElement) && E.classList.contains("waves-effect")) {
          m = E;
          break;
        }
        E = E.parentElement;
      }
      return m;
    }
    function x(g) {
      var m = w(g);
      if (m !== null) {
        if (m.disabled || m.getAttribute("disabled") || m.classList.contains("disabled"))
          return;
        if (b.registerEvent(g), g.type === "touchstart" && h.delay) {
          var E = !1, S = setTimeout(function() {
            S = null, h.show(g, m);
          }, h.delay), C = function(A) {
            S && (clearTimeout(S), S = null, h.show(g, m)), E || (E = !0, h.hide(A, m)), B();
          }, T = function(A) {
            S && (clearTimeout(S), S = null), C(A), B();
          };
          m.addEventListener("touchmove", T, !1), m.addEventListener("touchend", C, !1), m.addEventListener("touchcancel", C, !1);
          var B = function() {
            m.removeEventListener("touchmove", T), m.removeEventListener("touchend", C), m.removeEventListener("touchcancel", C);
          };
        } else
          h.show(g, m), s && (m.addEventListener("touchend", h.hide, !1), m.addEventListener("touchcancel", h.hide, !1)), m.addEventListener("mouseup", h.hide, !1), m.addEventListener("mouseleave", h.hide, !1);
      }
    }
    return r.init = function(g) {
      var m = document.body;
      g = g || {}, "duration" in g && (h.duration = g.duration), "delay" in g && (h.delay = g.delay), s && (m.addEventListener("touchstart", x, !1), m.addEventListener("touchcancel", b.registerEvent, !1), m.addEventListener("touchend", b.registerEvent, !1)), m.addEventListener("mousedown", x, !1);
    }, r.attach = function(g, m) {
      g = u(g), i.call(m) === "[object Array]" && (m = m.join(" ")), m = m ? " " + m : "";
      for (var E, S, C = 0, T = g.length; C < T; C++)
        E = g[C], S = E.tagName.toLowerCase(), ["input", "img"].indexOf(S) !== -1 && (p[S](E), E = E.parentElement), E.className.indexOf("waves-effect") === -1 && (E.className += " waves-effect" + m);
    }, r.ripple = function(g, m) {
      g = u(g);
      var E = g.length;
      if (m = m || {}, m.wait = m.wait || 0, m.position = m.position || null, E) {
        for (var S, C, T, B = {}, A = 0, I = {
          type: "mousedown",
          button: 1
        }, P = function(z, H) {
          return function() {
            h.hide(z, H);
          };
        }; A < E; A++)
          if (S = g[A], C = m.position || {
            x: S.clientWidth / 2,
            y: S.clientHeight / 2
          }, T = d(S), B.x = T.left + C.x, B.y = T.top + C.y, I.pageX = B.x, I.pageY = B.y, h.show(I, S), m.wait >= 0 && m.wait !== null) {
            var O = {
              type: "mouseup",
              button: 1
            };
            setTimeout(P(O, S), m.wait);
          }
      }
    }, r.calm = function(g) {
      g = u(g);
      for (var m = {
        type: "mouseup",
        button: 1
      }, E = 0, S = g.length; E < S; E++)
        h.hide(m, g[E]);
    }, r.displayEffect = function(g) {
      console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), r.init(g);
    }, r;
  });
})(Ky);
const oe = { lunarInfo: [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560], solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"], Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"], Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"], solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"], sTermInfo: ["9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722"], nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"], nStr2: ["初", "十", "廿", "卅"], nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"], lunarFestival: [{ month: "正", day: "初一", name: "春节" }, { month: "正", day: "十五", name: "元宵节" }, { month: "二", day: "初二", name: "龙抬头" }, { month: "五", day: "初五", name: "端午节" }, { month: "七", day: "初七", name: "七夕节" }, { month: "七", day: "十五", name: "中元节" }, { month: "八", day: "十五", name: "中秋节" }, { month: "九", day: "初九", name: "重阳节" }, { month: "腊", day: "除夕", name: "除夕" }], solarFestival: [{ month: 1, day: 1, name: "元旦节" }, { month: 3, day: 8, name: "妇女节" }, { month: 3, day: 12, name: "植树节" }, { month: 4, day: 5, name: "清明节" }, { month: 5, day: 1, name: "劳动节" }, { month: 5, day: 4, name: "青年节" }, { month: 6, day: 1, name: "儿童节" }, { month: 7, day: 1, name: "建党节" }, { month: 8, day: 1, name: "建军节" }, { month: 9, day: 10, name: "教师节" }, { month: 10, day: 1, name: "国庆节" }], lYearDays: function(t) {
  var e, r = 348;
  for (e = 32768; e > 8; e >>= 1)
    r += oe.lunarInfo[t - 1900] & e ? 1 : 0;
  return r + oe.leapDays(t);
}, leapMonth: function(t) {
  return 15 & oe.lunarInfo[t - 1900];
}, leapDays: function(t) {
  return oe.leapMonth(t) ? 65536 & oe.lunarInfo[t - 1900] ? 30 : 29 : 0;
}, monthDays: function(t, e) {
  return e > 12 || e < 1 ? -1 : oe.lunarInfo[t - 1900] & 65536 >> e ? 30 : 29;
}, solarDays: function(t, e) {
  if (e > 12 || e < 1)
    return -1;
  var r = e - 1;
  return r == 1 ? t % 4 == 0 && t % 100 != 0 || t % 400 == 0 ? 29 : 28 : oe.solarMonth[r];
}, toGanZhiYear: function(t) {
  var e = (t - 3) % 10, r = (t - 3) % 12;
  return e == 0 && (e = 10), r == 0 && (r = 12), oe.Gan[e - 1] + oe.Zhi[r - 1];
}, toAstro: function(t, e) {
  return "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2 * t - (e < [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22][t - 1] ? 2 : 0), 2) + "座";
}, toGanZhi: function(t) {
  return oe.Gan[t % 10] + oe.Zhi[t % 12];
}, getTerm: function(t, e) {
  if (t < 1900 || t > 2100 || e < 1 || e > 24)
    return -1;
  var r = oe.sTermInfo[t - 1900], n = [parseInt("0x" + r.substr(0, 5)).toString(), parseInt("0x" + r.substr(5, 5)).toString(), parseInt("0x" + r.substr(10, 5)).toString(), parseInt("0x" + r.substr(15, 5)).toString(), parseInt("0x" + r.substr(20, 5)).toString(), parseInt("0x" + r.substr(25, 5)).toString()], i = [n[0].substr(0, 1), n[0].substr(1, 2), n[0].substr(3, 1), n[0].substr(4, 2), n[1].substr(0, 1), n[1].substr(1, 2), n[1].substr(3, 1), n[1].substr(4, 2), n[2].substr(0, 1), n[2].substr(1, 2), n[2].substr(3, 1), n[2].substr(4, 2), n[3].substr(0, 1), n[3].substr(1, 2), n[3].substr(3, 1), n[3].substr(4, 2), n[4].substr(0, 1), n[4].substr(1, 2), n[4].substr(3, 1), n[4].substr(4, 2), n[5].substr(0, 1), n[5].substr(1, 2), n[5].substr(3, 1), n[5].substr(4, 2)];
  return parseInt(i[e - 1]);
}, toChinaMonth: function(t) {
  if (t > 12 || t < 1)
    return -1;
  var e = oe.nStr3[t - 1];
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
      e = oe.nStr2[Math.floor(t / 10)], e += oe.nStr1[t % 10];
  }
  return e;
}, getAnimal: function(t) {
  return oe.Animals[(t - 4) % 12];
}, getFestival: (t, e, r, n) => {
  let i = null;
  const s = parseInt(t + "");
  return i = s ? oe.solarFestival.find((o) => o.month === s && o.day == e) : oe.lunarFestival.find((o) => `${o.month}月` === t && o.day === e), i;
}, solar2lunar: function(t, e, r) {
  if (t < 1900 || t > 2100 || t == 1900 && e == 1 && r < 31)
    return -1;
  if (t)
    n = new Date(t, parseInt(e + "") - 1, r);
  else
    var n = /* @__PURE__ */ new Date();
  var i, s = 0, o = (t = n.getFullYear(), e = n.getMonth() + 1, r = n.getDate(), (Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()) - Date.UTC(1900, 0, 31)) / 864e5);
  for (i = 1900; i < 2101 && o > 0; i++)
    o -= s = oe.lYearDays(i);
  o < 0 && (o += s, i--);
  var a = /* @__PURE__ */ new Date(), c = !1;
  a.getFullYear() == t && a.getMonth() + 1 == e && a.getDate() == r && (c = !0);
  var l = n.getDay(), u = oe.nStr1[l];
  l == 0 && (l = 7);
  var d = i, f = oe.leapMonth(i), h = !1;
  for (i = 1; i < 13 && o > 0; i++)
    f > 0 && i == f + 1 && h == 0 ? (--i, h = !0, s = oe.leapDays(d)) : s = oe.monthDays(d, i), h == 1 && i == f + 1 && (h = !1), o -= s;
  o == 0 && f > 0 && i == f + 1 && (h ? h = !1 : (h = !0, --i)), o < 0 && (o += s, --i);
  var p = i, v = o + 1, b = e - 1, w = oe.toGanZhiYear(d), x = oe.getTerm(d, 2 * e - 1), g = oe.getTerm(d, 2 * e), m = oe.toGanZhi(12 * (t - 1900) + e + 11);
  r >= x && (m = oe.toGanZhi(12 * (t - 1900) + e + 12));
  var E = !1, S = null;
  x == r && (E = !0, S = oe.solarTerm[2 * e - 2]), g == r && (E = !0, S = oe.solarTerm[2 * e - 1]);
  var C = Date.UTC(t, b, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, T = oe.toGanZhi(C + r - 1), B = oe.toAstro(e, r);
  const A = oe.toChinaMonth(p), I = oe.toChinaDay(v);
  return { lYear: d, lMonth: p, lDay: v, Animal: oe.getAnimal(d), IMonthCn: (h ? "闰" : "") + A, IDayCn: I, cYear: t, cMonth: e, cDay: r, gzYear: w, gzMonth: m, gzDay: T, isToday: c, isLeap: h, nWeek: l, ncWeek: "星期" + u, isTerm: E, Term: S, astro: B, festcn: oe.getFestival(A, I, t, e), fest: oe.getFestival(e, r, t) };
}, lunar2solar: function(t, e, r, n = !0) {
  n = !!n;
  var i = oe.leapMonth(t);
  if (oe.leapDays(t), n && i != e || t == 2100 && e == 12 && r > 1 || t == 1900 && e == 1 && r < 31)
    return -1;
  var s = oe.monthDays(t, e), o = s;
  if (n && (o = oe.leapDays(t)), t < 1900 || t > 2100 || r > o)
    return -1;
  for (var a = 0, c = 1900; c < t; c++)
    a += oe.lYearDays(c);
  var l = 0, u = !1;
  for (c = 1; c < e; c++)
    l = oe.leapMonth(t), u || l <= c && l > 0 && (a += oe.leapDays(t), u = !0), a += oe.monthDays(t, c);
  n && (a += s);
  var d = Date.UTC(1900, 1, 30, 0, 0, 0), f = new Date(864e5 * (a + r - 31) + d), h = f.getUTCFullYear(), p = f.getUTCMonth() + 1, v = f.getUTCDate();
  return oe.solar2lunar(h, p, v);
} }, Jy = oe.lunar2solar, ar = (t, e = !0) => {
  t = t || /* @__PURE__ */ new Date();
  const r = new Date(t).getDay(), n = { 0: "日", 1: "一", 2: "二", 3: "三", 4: "四", 5: "五", 6: "六" }[r];
  return e ? [n, `星期${n}`, `周${n}`, r] : n;
}, zl = ["number", "string"], bf = (t, e) => (zl.includes(typeof t) && zl.includes(typeof e) || (t = (/* @__PURE__ */ new Date()).getFullYear(), e = (/* @__PURE__ */ new Date()).getMonth() + 1), new Date(t, e, 0).getDate()), Ul = (t) => {
  const e = [], r = Re(t).format("YYYY"), n = Re(t).format("MM"), i = bf(Number.parseInt(r), Number.parseInt(n));
  let s = 1;
  for (; s <= i; ) {
    const o = `${n}-${("00" + s).substr(`${s}`.length)}`, a = `${r}-${o}`, c = ar(a);
    e.push({ date: a, datemon: o, dateday: Re(a).format("DD"), week: c[0], week1: c[1], week2: c[2], week3: c[3], isnow: !0 }), s++;
  }
  return e;
};
function mt(t, e) {
  return Object.prototype.toString.call(t) === `[object ${e}]`;
}
function Wl(t) {
  return Object.prototype.toString.call(t);
}
const Mo = class {
  static getTypeLong(e) {
    return Wl(e);
  }
  static getType(e) {
    const r = Wl(e);
    return r.substring(8, r.length - 1).toLocaleLowerCase();
  }
  static isDef(e) {
    return e !== void 0;
  }
  static isUnDef(e) {
    return !this.isDef(e);
  }
  static isObject(e) {
    return e !== null && mt(e, "Object");
  }
  static isEmpty(e) {
    return this.isArray(e) || this.isString(e) ? e.length === 0 : e instanceof Map || e instanceof Set ? e.size === 0 : !!this.isObject(e) && Object.keys(e).length === 0;
  }
  static isDate(e) {
    return mt(e, "Date");
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
    return mt(e, "Number");
  }
  static isPromise(e) {
    return mt(e, "Promise") && this.isObject(e) && this.isFunction(e.then) && this.isFunction(e.catch);
  }
  static isString(e) {
    return mt(e, "String");
  }
  static isFunction(e) {
    return typeof e == "function";
  }
  static isBoolean(e) {
    return mt(e, "Boolean");
  }
  static isRegExp(e) {
    return mt(e, "RegExp");
  }
  static isArray(e) {
    return e && Array.isArray(e);
  }
  static isWindow(e) {
    return typeof window < "u" && mt(e, "Window");
  }
  static isElement(e) {
    return this.isObject(e) && !!e.tagName;
  }
  static isMap(e) {
    return mt(e, "Map");
  }
  static isUrl(e) {
    return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(e);
  }
};
let Mt = Mo;
vt(Mt, "isServer", typeof window > "u"), vt(Mt, "isClient", !Mo.isServer);
var ex = Object.freeze({ __proto__: null, toDateTime: function(t, e = "YYYY-MM-DD HH:mm:ss") {
  return Re(t).format(e);
}, toDate: function(t, e = "YYYY-MM-DD") {
  return Re(t).format(e);
}, toY: function(t, e = "YYYY") {
  return Re(t).format(e);
}, toYM: function(t, e = "YYYY-MM") {
  return Re(t).format(e);
}, toMD: function(t, e = "MM-DD") {
  return Re(t).format(e);
}, toYMD: function(t, e = "YYYY-MM-DD") {
  return Re(t).format(e);
}, toYMDHM: function(t, e = "YYYY-MM-DD HH:mm") {
  return Re(t).format(e);
}, convertDate: oe, dayDetail: Jy, formatWeek: ar, getWeek: (t) => {
  t = t || /* @__PURE__ */ new Date();
  const e = [], r = new Date(t).getDay() || 7, n = new Date(t).getTime();
  let i = 1, s = 1;
  for (; r >= i; ) {
    let o = n - 864e5 * (r - i);
    const a = ar(o);
    e.push({ date: Re(o).format("YYYY-MM-DD"), datemon: Re(o).format("MM-DD"), week: a[0], week1: a[1], week2: a[2], week3: a[3] }), i++;
  }
  for (; s <= 7 - r; ) {
    let o = n + 864e5 * s;
    const a = ar(o);
    e.push({ date: Re(o).format("YYYY-MM-DD"), datemon: Re(o).format("MM-DD"), week: a[0], week1: a[1], week2: a[2], week3: a[3] }), s++;
  }
  return e;
}, getMonth: Ul, getMonthComple: (t) => {
  const e = Ul(t), r = e[0].week3;
  let n = 1;
  for (; n < r; ) {
    const s = new Date(e[0].date).getTime() - 864e5, o = ar(s);
    e.unshift({ date: Re(s).format("YYYY-MM-DD"), datemon: Re(s).format("MM-DD"), dateday: Re(s).format("DD"), week: o[0], week1: o[1], week2: o[2], week3: o[3], isback: !0 }), n++;
  }
  let i = e.length;
  for (; i < 42; ) {
    const s = new Date(e[i - 1].date).getTime() + 864e5, o = ar(s);
    e.push({ date: Re(s).format("YYYY-MM-DD"), datemon: Re(s).format("MM-DD"), dateday: Re(s).format("DD"), week: o[0], week1: o[1], week2: o[2], week3: o[3], isnext: !0 }), i++;
  }
  return e.forEach((s) => {
    const o = s.date.split("-"), a = oe.solar2lunar(o[0], o[1], o[2]);
    s.nl = a, typeof a != "number" && (s.monthcn = a.IMonthCn, s.daycn = a.IDayCn);
  }), e;
}, getMonthDay: bf, daysBetweenDates: (t, e) => {
  if (Mt.isNullOrUnDef(t) || Mt.isNullOrUnDef(e))
    throw new TypeError("params must both be not empty or null or undefined");
  let r = null;
  return r = Mt.isDate(t) && Mt.isDate(e) ? Math.abs(t.getTime() - e.getTime()) : Math.abs(new Date(t).getTime() - new Date(e).getTime()), Math.floor(r / 864e5);
} });
for (let t = 0; t <= 15; t++)
  t.toString(16);
let tx = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof globalThis == "object" && globalThis.globalThis === globalThis ? globalThis : void 0;
tx.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && /Safari/.test(navigator.userAgent);
window.socketMap = /* @__PURE__ */ new Map();
Gr.set({ precision: 14 });
const rx = { class: "ik-full-calendar" }, nx = ["onClick"], ix = {
  key: 0,
  class: "event-title allday"
}, sx = {
  key: 0,
  class: "event-title-time"
}, ox = {
  key: 1,
  class: "event-title no-allday"
}, ax = { class: "event-title-time" }, lx = { class: "event-title-text" }, cx = {
  name: "IkFullCalendar"
}, ux = /* @__PURE__ */ Ys({
  ...cx,
  props: {
    options: { default: {} },
    removable: { type: Boolean, default: !0 },
    modelValue: { default: [] },
    tooltipFieldName: { default: "remark" }
  },
  emits: ["added", "deleted", "update:modelValue", "eventClick", "deleteClick", "dateSelect"],
  setup(t, { expose: e, emit: r }) {
    const n = t, i = qf({
      get: () => n.modelValue,
      set: (w) => r("update:modelValue", w)
    }), s = Ji(null), o = (w) => {
    }, a = Ji("dayGridMonth"), c = (w) => {
      r("dateSelect", w);
    }, l = (w) => {
      r("eventClick", w);
    }, u = (w) => {
      r("deleteClick", w);
    }, d = () => ({
      locale: lv,
      plugins: [Nv, zm, bm],
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
      select: c,
      ...n.options,
      events: i.value
    }), f = Yf({
      timeType: "month",
      options: d()
    }), h = Ji(null), p = () => {
      var w;
      f.options = d(), (w = s.value) == null || w.buildOptions(f.options);
    };
    e({
      ...{
        // 
        prev: () => {
          var w;
          (w = h.value) == null || w.prev();
        },
        next: () => {
          var w;
          (w = h.value) == null || w.next();
        },
        today: () => {
          var w;
          (w = h.value) == null || w.today();
        },
        changeView: (w) => {
          var x;
          (x = h.value) == null || x.changeView(w), a.value = w;
        },
        getDate: () => {
          var w;
          return (w = h.value) == null ? void 0 : w.getDate();
        },
        getView: () => {
          var w;
          return (w = h.value) == null ? void 0 : w.view;
        },
        unselect: () => {
          var w;
          return (w = h.value) == null ? void 0 : w.unselect();
        }
      }
    }), Gf(() => i.value, () => {
      p();
    });
    const b = () => {
      var w;
      h.value = (w = s.value) == null ? void 0 : w.getApi();
    };
    return $f(() => {
      b();
    }), (w, x) => {
      const g = Po("el-tooltip"), m = Po("el-icon");
      return Rr(), nn("div", rx, [
        es(ts(rv), {
          ref_key: "_ref",
          ref: s,
          options: f.options,
          style: { height: "100%" }
        }, {
          eventContent: sn((E) => [
            on("div", {
              class: "title-line",
              onClick: (S) => l(E)
            }, [
              es(g, null, {
                content: sn(() => {
                  var S, C;
                  return [
                    Qf(Tr((C = (S = E.event) == null ? void 0 : S.extendedProps) == null ? void 0 : C[n.tooltipFieldName]), 1)
                  ];
                }),
                default: sn(() => [
                  E.event.allDay ? (Rr(), nn("span", ix, [
                    a.value === "dayGridMonth" ? (Rr(), nn("span", sx, Tr("(全天)"))) : Ho("", !0),
                    on("span", null, Tr(E.event.title), 1)
                  ])) : (Rr(), nn("span", ox, [
                    on("span", ax, Tr(ts(ex).toDateTime(E.event.startStr, "HH:mm")), 1),
                    on("span", lx, Tr(E.event.title), 1)
                  ]))
                ]),
                _: 2
              }, 1024),
              n.removable ? (Rr(), Zf(m, {
                key: 0,
                size: 16,
                onClick: Xf((S) => u(E), ["stop"])
              }, {
                default: sn(() => [
                  es(ts(Kf))
                ]),
                _: 2
              }, 1032, ["onClick"])) : Ho("", !0)
            ], 8, nx)
          ]),
          _: 1
        }, 8, ["options"])
      ]);
    };
  }
});
const fx = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, dx = /* @__PURE__ */ fx(ux, [["__scopeId", "data-v-421b620c"]]);
class yx {
  constructor() {
    // 唯一标识
    vt(this, "id", (/* @__PURE__ */ new Date()).getTime());
    // 日程标题
    vt(this, "title", "");
    // 开始时间
    vt(this, "start", "");
    // 结束时间
    vt(this, "end", "");
    // 是否全天
    vt(this, "allDay", !1);
    // 详情
    vt(this, "extendedProps", {});
  }
}
const xx = Jf(dx);
export {
  yx as Event,
  xx as IkFullCalendar,
  xx as default
};
