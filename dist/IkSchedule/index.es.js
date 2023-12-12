var m0 = Object.defineProperty;
var b0 = (t, e, n) => e in t ? m0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Ds = (t, e, n) => (b0(t, typeof e != "symbol" ? e + "" : e, n), n);
import { defineComponent as Pn, h as Cn, Fragment as tu, Teleport as y0, computed as ft, ref as Kn, reactive as Xs, watch as x0, onMounted as nu, resolveComponent as ze, openBlock as pe, createElementBlock as ke, createVNode as ue, unref as Be, withCtx as fe, createElementVNode as Ne, createTextVNode as at, toDisplayString as ht, createCommentVNode as rr, createBlock as Qe, withModifiers as w0, mergeProps as xn, normalizeStyle as Fe, normalizeClass as Ar, useSlots as E0, renderSlot as Na, nextTick as _0, pushScopeId as S0, popScopeId as A0 } from "vue";
import "lodash-es";
import { DeleteFilled as C0, ArrowLeft as D0, ArrowRight as R0, Calendar as T0, Clock as k0, Document as I0 } from "@element-plus/icons-vue";
import { ElMessage as Oa, ElMessageBox as M0 } from "element-plus";
const Po = (t, e) => {
  if (t.install = (n) => {
    for (const r of [t, ...Object.values(e ?? {})])
      n.component(r.name, r);
  }, e)
    for (const [n, r] of Object.entries(e))
      t[n] = r;
  return t;
}, N0 = Object.prototype.toString, Ks = (t) => N0.call(t) === "[object Object]", O0 = (t, e) => {
  if (!Ks(t) || !Ks(e))
    throw new Error("参数异常");
  return Object.keys(t).forEach((n) => {
    Reflect.has(e, n) && (t[n] = e[n]);
  }), t;
}, B0 = {
  copyValue: O0,
  isObject: Ks
};
var Xi, re, ru, kn, sn, Ba, iu, su, Zr = {}, ou = [], P0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ut(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function au(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function R(t, e, n) {
  var r, i, s, o = {};
  for (s in e)
    s == "key" ? r = e[s] : s == "ref" ? i = e[s] : o[s] = e[s];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Xi.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (s in t.defaultProps)
      o[s] === void 0 && (o[s] = t.defaultProps[s]);
  return Lr(t, o, r, i, null);
}
function Lr(t, e, n, r, i) {
  var s = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++ru };
  return i == null && re.vnode != null && re.vnode(s), s;
}
function Ze() {
  return { current: null };
}
function Se(t) {
  return t.children;
}
function H0(t, e, n, r, i) {
  var s;
  for (s in n)
    s === "children" || s === "key" || s in e || Xr(t, s, null, n[s], r);
  for (s in e)
    i && typeof e[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || n[s] === e[s] || Xr(t, s, e[s], n[s], r);
}
function Pa(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || P0.test(e) ? n : n + "px";
}
function Xr(t, e, n, r, i) {
  var s;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || Pa(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || Pa(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      s = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + s] = n, n ? r || t.addEventListener(e, s ? La : Ha, s) : t.removeEventListener(e, s ? La : Ha, s);
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
function Ha(t) {
  kn = !0;
  try {
    return this.l[t.type + !1](re.event ? re.event(t) : t);
  } finally {
    kn = !1;
  }
}
function La(t) {
  kn = !0;
  try {
    return this.l[t.type + !0](re.event ? re.event(t) : t);
  } finally {
    kn = !1;
  }
}
function tt(t, e) {
  this.props = t, this.context = e;
}
function ir(t, e) {
  if (e == null)
    return t.__ ? ir(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? ir(t) : null;
}
function lu(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return lu(t);
  }
}
function L0(t) {
  kn ? setTimeout(t) : iu(t);
}
function Js(t) {
  (!t.__d && (t.__d = !0) && sn.push(t) && !Kr.__r++ || Ba !== re.debounceRendering) && ((Ba = re.debounceRendering) || L0)(Kr);
}
function Kr() {
  var t, e, n, r, i, s, o, a;
  for (sn.sort(function(c, l) {
    return c.__v.__b - l.__v.__b;
  }); t = sn.shift(); )
    t.__d && (e = sn.length, r = void 0, i = void 0, o = (s = (n = t).__v).__e, (a = n.__P) && (r = [], (i = Ut({}, s)).__v = s.__v + 1, Ho(a, s, i, n.__n, a.ownerSVGElement !== void 0, s.__h != null ? [o] : null, r, o ?? ir(s), s.__h), hu(r, s), s.__e != o && lu(s)), sn.length > e && sn.sort(function(c, l) {
      return c.__v.__b - l.__v.__b;
    }));
  Kr.__r = 0;
}
function cu(t, e, n, r, i, s, o, a, c, l) {
  var u, d, f, h, p, v, b, m = r && r.__k || ou, x = m.length;
  for (n.__k = [], u = 0; u < e.length; u++)
    if ((h = n.__k[u] = (h = e[u]) == null || typeof h == "boolean" ? null : typeof h == "string" || typeof h == "number" || typeof h == "bigint" ? Lr(null, h, null, null, h) : Array.isArray(h) ? Lr(Se, { children: h }, null, null, null) : h.__b > 0 ? Lr(h.type, h.props, h.key, h.ref ? h.ref : null, h.__v) : h) != null) {
      if (h.__ = n, h.__b = n.__b + 1, (f = m[u]) === null || f && h.key == f.key && h.type === f.type)
        m[u] = void 0;
      else
        for (d = 0; d < x; d++) {
          if ((f = m[d]) && h.key == f.key && h.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Ho(t, h, f = f || Zr, i, s, o, a, c, l), p = h.__e, (d = h.ref) && f.ref != d && (b || (b = []), f.ref && b.push(f.ref, null, h), b.push(d, h.__c || p, h)), p != null ? (v == null && (v = p), typeof h.type == "function" && h.__k === f.__k ? h.__d = c = uu(h, c, t) : c = fu(t, h, f, m, p, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != t && (c = ir(f));
    }
  for (n.__e = v, u = x; u--; )
    m[u] != null && (typeof n.type == "function" && m[u].__e != null && m[u].__e == n.__d && (n.__d = du(r).nextSibling), gu(m[u], m[u]));
  if (b)
    for (u = 0; u < b.length; u++)
      pu(b[u], b[++u], b[++u]);
}
function uu(t, e, n) {
  for (var r, i = t.__k, s = 0; i && s < i.length; s++)
    (r = i[s]) && (r.__ = t, e = typeof r.type == "function" ? uu(r, e, n) : fu(n, r, r, i, r.__e, e));
  return e;
}
function Jr(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(n) {
    Jr(n, e);
  }) : e.push(t)), e;
}
function fu(t, e, n, r, i, s) {
  var o, a, c;
  if (e.__d !== void 0)
    o = e.__d, e.__d = void 0;
  else if (n == null || i != s || i.parentNode == null)
    e:
      if (s == null || s.parentNode !== t)
        t.appendChild(i), o = null;
      else {
        for (a = s, c = 0; (a = a.nextSibling) && c < r.length; c += 1)
          if (a == i)
            break e;
        t.insertBefore(i, s), o = s;
      }
  return o !== void 0 ? o : i.nextSibling;
}
function du(t) {
  var e, n, r;
  if (t.type == null || typeof t.type == "string")
    return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--)
      if ((n = t.__k[e]) && (r = du(n)))
        return r;
  }
  return null;
}
function Ho(t, e, n, r, i, s, o, a, c) {
  var l, u, d, f, h, p, v, b, m, x, g, y, E, S, _, C = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, a = e.__e = n.__e, e.__h = null, s = [a]), (l = re.__b) && l(e);
  try {
    e:
      if (typeof C == "function") {
        if (b = e.props, m = (l = C.contextType) && r[l.__c], x = l ? m ? m.props.value : l.__ : r, n.__c ? v = (u = e.__c = n.__c).__ = u.__E : ("prototype" in C && C.prototype.render ? e.__c = u = new C(b, x) : (e.__c = u = new tt(b, x), u.constructor = C, u.render = z0), m && m.sub(u), u.props = b, u.state || (u.state = {}), u.context = x, u.__n = r, d = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), C.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = Ut({}, u.__s)), Ut(u.__s, C.getDerivedStateFromProps(b, u.__s))), f = u.props, h = u.state, u.__v = e, d)
          C.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (C.getDerivedStateFromProps == null && b !== f && u.componentWillReceiveProps != null && u.componentWillReceiveProps(b, x), !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(b, u.__s, x) === !1 || e.__v === n.__v) {
            for (e.__v !== n.__v && (u.props = b, u.state = u.__s, u.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(N) {
              N && (N.__ = e);
            }), g = 0; g < u._sb.length; g++)
              u.__h.push(u._sb[g]);
            u._sb = [], u.__h.length && o.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(b, u.__s, x), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(f, h, p);
          });
        }
        if (u.context = x, u.props = b, u.__P = t, y = re.__r, E = 0, "prototype" in C && C.prototype.render) {
          for (u.state = u.__s, u.__d = !1, y && y(e), l = u.render(u.props, u.state, u.context), S = 0; S < u._sb.length; S++)
            u.__h.push(u._sb[S]);
          u._sb = [];
        } else
          do
            u.__d = !1, y && y(e), l = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++E < 25);
        u.state = u.__s, u.getChildContext != null && (r = Ut(Ut({}, r), u.getChildContext())), d || u.getSnapshotBeforeUpdate == null || (p = u.getSnapshotBeforeUpdate(f, h)), _ = l != null && l.type === Se && l.key == null ? l.props.children : l, cu(t, Array.isArray(_) ? _ : [_], e, n, r, i, s, o, a, c), u.base = e.__e, e.__h = null, u.__h.length && o.push(u), v && (u.__E = u.__ = null), u.__e = !1;
      } else
        s == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = F0(n.__e, e, n, r, i, s, o, c);
    (l = re.diffed) && l(e);
  } catch (N) {
    e.__v = null, (c || s != null) && (e.__e = a, e.__h = !!c, s[s.indexOf(a)] = null), re.__e(N, e, n);
  }
}
function hu(t, e) {
  re.__c && re.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      re.__e(r, n.__v);
    }
  });
}
function F0(t, e, n, r, i, s, o, a) {
  var c, l, u, d = n.props, f = e.props, h = e.type, p = 0;
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
    if (s = s && Xi.call(t.childNodes), l = (d = n.props || Zr).dangerouslySetInnerHTML, u = f.dangerouslySetInnerHTML, !a) {
      if (s != null)
        for (d = {}, p = 0; p < t.attributes.length; p++)
          d[t.attributes[p].name] = t.attributes[p].value;
      (u || l) && (u && (l && u.__html == l.__html || u.__html === t.innerHTML) || (t.innerHTML = u && u.__html || ""));
    }
    if (H0(t, f, d, i, a), u)
      e.__k = [];
    else if (p = e.props.children, cu(t, Array.isArray(p) ? p : [p], e, n, r, i && h !== "foreignObject", s, o, s ? s[0] : n.__k && ir(n, 0), a), s != null)
      for (p = s.length; p--; )
        s[p] != null && au(s[p]);
    a || ("value" in f && (p = f.value) !== void 0 && (p !== t.value || h === "progress" && !p || h === "option" && p !== d.value) && Xr(t, "value", p, d.value, !1), "checked" in f && (p = f.checked) !== void 0 && p !== t.checked && Xr(t, "checked", p, d.checked, !1));
  }
  return t;
}
function pu(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    re.__e(r, n);
  }
}
function gu(t, e, n) {
  var r, i;
  if (re.unmount && re.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || pu(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (s) {
        re.__e(s, e);
      }
    r.base = r.__P = null, t.__c = void 0;
  }
  if (r = t.__k)
    for (i = 0; i < r.length; i++)
      r[i] && gu(r[i], e, n || typeof t.type != "function");
  n || t.__e == null || au(t.__e), t.__ = t.__e = t.__d = void 0;
}
function z0(t, e, n) {
  return this.constructor(t, n);
}
function sr(t, e, n) {
  var r, i, s;
  re.__ && re.__(t, e), i = (r = typeof n == "function") ? null : n && n.__k || e.__k, s = [], Ho(e, t = (!r && n || e).__k = R(Se, null, [t]), i || Zr, Zr, e.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : e.firstChild ? Xi.call(e.childNodes) : null, s, !r && n ? n : i ? i.__e : e.firstChild, r), hu(s, t);
}
function U0(t, e) {
  var n = { __c: e = "__cC" + su++, __: t, Consumer: function(r, i) {
    return r.children(i);
  }, Provider: function(r) {
    var i, s;
    return this.getChildContext || (i = [], (s = {})[e] = this, this.getChildContext = function() {
      return s;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value !== o.value && i.some(function(a) {
        a.__e = !0, Js(a);
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
Xi = ou.slice, re = { __e: function(t, e, n, r) {
  for (var i, s, o; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((s = i.constructor) && s.getDerivedStateFromError != null && (i.setState(s.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        t = a;
      }
  throw t;
} }, ru = 0, kn = !1, tt.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ut({}, this.state), typeof t == "function" && (t = t(Ut({}, n), this.props)), t && Ut(n, t), t != null && this.__v && (e && this._sb.push(e), Js(this));
}, tt.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Js(this));
}, tt.prototype.render = Se, sn = [], iu = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Kr.__r = 0, su = 0;
var yt, Rs, Fa, vu = [], Ts = [], za = re.__b, Ua = re.__r, Wa = re.diffed, ja = re.__c, Va = re.unmount;
function W0() {
  for (var t; t = vu.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(Fr), t.__H.__h.forEach(eo), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], re.__e(e, t.__v);
      }
}
re.__b = function(t) {
  yt = null, za && za(t);
}, re.__r = function(t) {
  Ua && Ua(t);
  var e = (yt = t.__c).__H;
  e && (Rs === yt ? (e.__h = [], yt.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Ts, n.__N = n.i = void 0;
  })) : (e.__h.forEach(Fr), e.__h.forEach(eo), e.__h = [])), Rs = yt;
}, re.diffed = function(t) {
  Wa && Wa(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (vu.push(e) !== 1 && Fa === re.requestAnimationFrame || ((Fa = re.requestAnimationFrame) || j0)(W0)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Ts && (n.__ = n.__V), n.i = void 0, n.__V = Ts;
  })), Rs = yt = null;
}, re.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(Fr), n.__h = n.__h.filter(function(r) {
        return !r.__ || eo(r);
      });
    } catch (r) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], re.__e(r, n.__v);
    }
  }), ja && ja(t, e);
}, re.unmount = function(t) {
  Va && Va(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Fr(r);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && re.__e(e, n.__v));
};
var $a = typeof requestAnimationFrame == "function";
function j0(t) {
  var e, n = function() {
    clearTimeout(r), $a && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 100);
  $a && (e = requestAnimationFrame(n));
}
function Fr(t) {
  var e = yt, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), yt = e;
}
function eo(t) {
  var e = yt;
  t.__c = t.__(), yt = e;
}
function V0(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function qa(t, e) {
  for (var n in t)
    if (n !== "__source" && !(n in e))
      return !0;
  for (var r in e)
    if (r !== "__source" && t[r] !== e[r])
      return !0;
  return !1;
}
function Ga(t) {
  this.props = t;
}
(Ga.prototype = new tt()).isPureReactComponent = !0, Ga.prototype.shouldComponentUpdate = function(t, e) {
  return qa(this.props, t) || qa(this.state, e);
};
var Ya = re.__b;
re.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Ya && Ya(t);
};
var $0 = re.__e;
re.__e = function(t, e, n, r) {
  if (t.then) {
    for (var i, s = e; s = s.__; )
      if ((i = s.__c) && i.__c)
        return e.__e == null && (e.__e = n.__e, e.__k = n.__k), i.__c(t, e);
  }
  $0(t, e, n, r);
};
var Qa = re.unmount;
function mu(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), t.__c.__H = null), (t = V0({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
    return mu(r, e, n);
  })), t;
}
function bu(t, e, n) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
    return bu(r, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t;
}
function ks() {
  this.__u = 0, this.t = null, this.__b = null;
}
function yu(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function Cr() {
  this.u = null, this.o = null;
}
re.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), Qa && Qa(t);
}, (ks.prototype = new tt()).__c = function(t, e) {
  var n = e.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var i = yu(r.__v), s = !1, o = function() {
    s || (s = !0, n.__R = null, i ? i(a) : a());
  };
  n.__R = o;
  var a = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var l = r.state.__a;
        r.__v.__k[0] = bu(l, l.__c.__P, l.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.t.pop(); )
        u.forceUpdate();
    }
  }, c = e.__h === !0;
  r.__u++ || c || r.setState({ __a: r.__b = r.__v.__k[0] }), t.then(o, o);
}, ks.prototype.componentWillUnmount = function() {
  this.t = [];
}, ks.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = mu(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var i = e.__a && R(Se, null, t.fallback);
  return i && (i.__h = null), [R(Se, null, e.__a ? null : t.children), i];
};
var Za = function(t, e, n) {
  if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
    for (n = t.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      t.u = n = n[2];
    }
};
function q0(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function G0(t) {
  var e = this, n = t.i;
  e.componentWillUnmount = function() {
    sr(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== n && e.componentWillUnmount(), t.__v ? (e.l || (e.i = n, e.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, insertBefore: function(r, i) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), e.i.removeChild(r);
  } }), sr(R(q0, { context: e.context }, t.__v), e.l)) : e.l && e.componentWillUnmount();
}
function Y0(t, e) {
  var n = R(G0, { __v: t, i: e });
  return n.containerInfo = e, n;
}
(Cr.prototype = new tt()).__a = function(t) {
  var e = this, n = yu(e.__v), r = e.o.get(t);
  return r[0]++, function(i) {
    var s = function() {
      e.props.revealOrder ? (r.push(i), Za(e, t, r)) : i();
    };
    n ? n(s) : s();
  };
}, Cr.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = Jr(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; )
    this.o.set(e[n], this.u = [1, 0, this.u]);
  return t.children;
}, Cr.prototype.componentDidUpdate = Cr.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, n) {
    Za(t, n, e);
  });
};
var Q0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Z0 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, X0 = typeof document < "u", K0 = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
};
tt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(tt.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var Xa = re.event;
function J0() {
}
function eh() {
  return this.cancelBubble;
}
function th() {
  return this.defaultPrevented;
}
re.event = function(t) {
  return Xa && (t = Xa(t)), t.persist = J0, t.isPropagationStopped = eh, t.isDefaultPrevented = th, t.nativeEvent = t;
};
var Ka = { configurable: !0, get: function() {
  return this.class;
} }, Ja = re.vnode;
re.vnode = function(t) {
  var e = t.type, n = t.props, r = n;
  if (typeof e == "string") {
    var i = e.indexOf("-") === -1;
    for (var s in r = {}, n) {
      var o = n[s];
      X0 && s === "children" && e === "noscript" || s === "value" && "defaultValue" in n && o == null || (s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && o === !0 ? o = "" : /ondoubleclick/i.test(s) ? s = "ondblclick" : /^onchange(textarea|input)/i.test(s + e) && !K0(n.type) ? s = "oninput" : /^onfocus$/i.test(s) ? s = "onfocusin" : /^onblur$/i.test(s) ? s = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s) ? s = s.toLowerCase() : i && Z0.test(s) ? s = s.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : o === null && (o = void 0), /^oninput$/i.test(s) && (s = s.toLowerCase(), r[s] && (s = "oninputCapture")), r[s] = o);
    }
    e == "select" && r.multiple && Array.isArray(r.value) && (r.value = Jr(n.children).forEach(function(a) {
      a.props.selected = r.value.indexOf(a.props.value) != -1;
    })), e == "select" && r.defaultValue != null && (r.value = Jr(n.children).forEach(function(a) {
      a.props.selected = r.multiple ? r.defaultValue.indexOf(a.props.value) != -1 : r.defaultValue == a.props.value;
    })), t.props = r, n.class != n.className && (Ka.enumerable = "className" in n, n.className != null && (r.class = n.className), Object.defineProperty(r, "className", Ka));
  }
  t.$$typeof = Q0, Ja && Ja(t);
};
var el = re.__r;
re.__r = function(t) {
  el && el(t), t.__c;
};
const xu = [], to = /* @__PURE__ */ new Map();
function Lo(t) {
  xu.push(t), to.forEach((e) => {
    Eu(e, t);
  });
}
function nh(t) {
  t.isConnected && wu(t.getRootNode());
}
function wu(t) {
  let e = to.get(t);
  if (!e || !e.isConnected) {
    if (e = t.querySelector("style[data-fullcalendar]"), !e) {
      e = document.createElement("style"), e.setAttribute("data-fullcalendar", "");
      const n = ih();
      n && (e.nonce = n);
      const r = t === document ? document.head : t, i = t === document ? r.querySelector("script,link[rel=stylesheet],link[as=style],style") : r.firstChild;
      r.insertBefore(e, i);
    }
    to.set(t, e), rh(e);
  }
}
function rh(t) {
  for (const e of xu)
    Eu(t, e);
}
function Eu(t, e) {
  const { sheet: n } = t, r = n.cssRules.length;
  e.split("}").forEach((i, s) => {
    i = i.trim(), i && n.insertRule(i + "}", r + s);
  });
}
let Is;
function ih() {
  return Is === void 0 && (Is = sh()), Is;
}
function sh() {
  const t = document.querySelector('meta[name="csp-nonce"]');
  if (t && t.hasAttribute("content"))
    return t.getAttribute("content");
  const e = document.querySelector("script[nonce]");
  return e && e.nonce || "";
}
typeof document < "u" && wu(document);
var oh = ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}';
Lo(oh);
function Fo(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function We(t, e) {
  if (t.closest)
    return t.closest(e);
  if (!document.documentElement.contains(t))
    return null;
  do {
    if (ah(t, e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === 1);
  return null;
}
function ah(t, e) {
  return (t.matches || t.matchesSelector || t.msMatchesSelector).call(t, e);
}
function lh(t, e) {
  let n = t instanceof HTMLElement ? [t] : t, r = [];
  for (let i = 0; i < n.length; i += 1) {
    let s = n[i].querySelectorAll(e);
    for (let o = 0; o < s.length; o += 1)
      r.push(s[o]);
  }
  return r;
}
const ch = /(top|left|right|bottom|width|height)$/i;
function Jn(t, e) {
  for (let n in e)
    _u(t, n, e[n]);
}
function _u(t, e, n) {
  n == null ? t.style[e] = "" : typeof n == "number" && ch.test(e) ? t.style[e] = `${n}px` : t.style[e] = n;
}
function Su(t) {
  var e, n;
  return (n = (e = t.composedPath) === null || e === void 0 ? void 0 : e.call(t)[0]) !== null && n !== void 0 ? n : t.target;
}
let tl = 0;
function Ki() {
  return tl += 1, "fc-dom-" + tl;
}
function Ji(t) {
  t.preventDefault();
}
function uh(t, e) {
  return (n) => {
    let r = We(n.target, t);
    r && e.call(r, n, r);
  };
}
function Au(t, e, n, r) {
  let i = uh(n, r);
  return t.addEventListener(e, i), () => {
    t.removeEventListener(e, i);
  };
}
function fh(t, e, n, r) {
  let i;
  return Au(t, "mouseover", e, (s, o) => {
    if (o !== i) {
      i = o, n(s, o);
      let a = (c) => {
        i = null, r(c, o), o.removeEventListener("mouseleave", a);
      };
      o.addEventListener("mouseleave", a);
    }
  });
}
const nl = [
  "webkitTransitionEnd",
  "otransitionend",
  "oTransitionEnd",
  "msTransitionEnd",
  "transitionend"
];
function dh(t, e) {
  let n = (r) => {
    e(r), nl.forEach((i) => {
      t.removeEventListener(i, n);
    });
  };
  nl.forEach((r) => {
    t.addEventListener(r, n);
  });
}
function Cu(t) {
  return Object.assign({ onClick: t }, Du(t));
}
function Du(t) {
  return {
    tabIndex: 0,
    onKeyDown(e) {
      (e.key === "Enter" || e.key === " ") && (t(e), e.preventDefault());
    }
  };
}
let rl = 0;
function dn() {
  return rl += 1, String(rl);
}
function zo() {
  document.body.classList.add("fc-not-allowed");
}
function Uo() {
  document.body.classList.remove("fc-not-allowed");
}
function hh(t) {
  t.style.userSelect = "none", t.addEventListener("selectstart", Ji);
}
function ph(t) {
  t.style.userSelect = "", t.removeEventListener("selectstart", Ji);
}
function gh(t) {
  t.addEventListener("contextmenu", Ji);
}
function vh(t) {
  t.removeEventListener("contextmenu", Ji);
}
function mh(t) {
  let e = [], n = [], r, i;
  for (typeof t == "string" ? n = t.split(/\s*,\s*/) : typeof t == "function" ? n = [t] : Array.isArray(t) && (n = t), r = 0; r < n.length; r += 1)
    i = n[r], typeof i == "string" ? e.push(i.charAt(0) === "-" ? { field: i.substring(1), order: -1 } : { field: i, order: 1 }) : typeof i == "function" && e.push({ func: i });
  return e;
}
function bh(t, e, n) {
  let r, i;
  for (r = 0; r < n.length; r += 1)
    if (i = yh(t, e, n[r]), i)
      return i;
  return 0;
}
function yh(t, e, n) {
  return n.func ? n.func(t, e) : xh(t[n.field], e[n.field]) * (n.order || 1);
}
function xh(t, e) {
  return !t && !e ? 0 : e == null ? -1 : t == null ? 1 : typeof t == "string" || typeof e == "string" ? String(t).localeCompare(String(e)) : t - e;
}
function Dn(t, e) {
  let n = String(t);
  return "000".substr(0, e - n.length) + n;
}
function er(t, e, n) {
  return typeof t == "function" ? t(...e) : typeof t == "string" ? e.reduce((r, i, s) => r.replace("$" + s, i || ""), t) : n;
}
function wh(t, e) {
  return t - e;
}
function zr(t) {
  return t % 1 === 0;
}
function Eh(t) {
  let e = t.querySelector(".fc-scrollgrid-shrink-frame"), n = t.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!e)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!n)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return t.getBoundingClientRect().width - e.getBoundingClientRect().width + // the cell padding+border
  n.getBoundingClientRect().width;
}
const il = ["years", "months", "days", "milliseconds"], _h = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function me(t, e) {
  return typeof t == "string" ? Sh(t) : typeof t == "object" && t ? sl(t) : typeof t == "number" ? sl({ [e || "milliseconds"]: t }) : null;
}
function Sh(t) {
  let e = _h.exec(t);
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
function sl(t) {
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
function Ah(t, e) {
  return t.years === e.years && t.months === e.months && t.days === e.days && t.milliseconds === e.milliseconds;
}
function no(t, e) {
  return {
    years: t.years + e.years,
    months: t.months + e.months,
    days: t.days + e.days,
    milliseconds: t.milliseconds + e.milliseconds
  };
}
function Ch(t, e) {
  return {
    years: t.years - e.years,
    months: t.months - e.months,
    days: t.days - e.days,
    milliseconds: t.milliseconds - e.milliseconds
  };
}
function Dh(t, e) {
  return {
    years: t.years * e,
    months: t.months * e,
    days: t.days * e,
    milliseconds: t.milliseconds * e
  };
}
function Rh(t) {
  return Rn(t) / 365;
}
function Th(t) {
  return Rn(t) / 30;
}
function Rn(t) {
  return pt(t) / 864e5;
}
function pt(t) {
  return t.years * (365 * 864e5) + t.months * (30 * 864e5) + t.days * 864e5 + t.milliseconds;
}
function Wo(t, e) {
  let n = null;
  for (let r = 0; r < il.length; r += 1) {
    let i = il[r];
    if (e[i]) {
      let s = t[i] / e[i];
      if (!zr(s) || n !== null && n !== s)
        return null;
      n = s;
    } else if (t[i])
      return null;
  }
  return n;
}
function ro(t) {
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
const { hasOwnProperty: ei } = Object.prototype;
function jo(t, e) {
  let n = {};
  if (e) {
    for (let r in e)
      if (e[r] === rn) {
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
        i.length && (n[r] = jo(i));
      }
  }
  for (let r = t.length - 1; r >= 0; r -= 1) {
    let i = t[r];
    for (let s in i)
      s in n || (n[s] = i[s]);
  }
  return n;
}
function ln(t, e) {
  let n = {};
  for (let r in t)
    e(t[r], r) && (n[r] = t[r]);
  return n;
}
function Ot(t, e) {
  let n = {};
  for (let r in t)
    n[r] = e(t[r], r);
  return n;
}
function Ru(t) {
  let e = {};
  for (let n of t)
    e[n] = !0;
  return e;
}
function Vo(t) {
  let e = [];
  for (let n in t)
    e.push(t[n]);
  return e;
}
function wt(t, e) {
  if (t === e)
    return !0;
  for (let n in t)
    if (ei.call(t, n) && !(n in e))
      return !1;
  for (let n in e)
    if (ei.call(e, n) && t[n] !== e[n])
      return !1;
  return !0;
}
const kh = /^on[A-Z]/;
function Ih(t, e) {
  const n = io(t, e);
  for (let r of n)
    if (!kh.test(r))
      return !1;
  return !0;
}
function io(t, e) {
  let n = [];
  for (let r in t)
    ei.call(t, r) && (r in e || n.push(r));
  for (let r in e)
    ei.call(e, r) && t[r] !== e[r] && n.push(r);
  return n;
}
function Ms(t, e, n = {}) {
  if (t === e)
    return !0;
  for (let r in e)
    if (!(r in t && Mh(t[r], e[r], n[r])))
      return !1;
  for (let r in t)
    if (!(r in e))
      return !1;
  return !0;
}
function Mh(t, e, n) {
  return t === e || n === !0 ? !0 : n ? n(t, e) : !1;
}
function Nh(t, e = 0, n, r = 1) {
  let i = [];
  n == null && (n = Object.keys(t).length);
  for (let s = e; s < n; s += r) {
    let o = t[s];
    o !== void 0 && i.push(o);
  }
  return i;
}
function qt(t, e, n) {
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
const Oh = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function ol(t, e) {
  let n = Wt(t);
  return n[2] += e * 7, Xe(n);
}
function je(t, e) {
  let n = Wt(t);
  return n[2] += e, Xe(n);
}
function Gt(t, e) {
  let n = Wt(t);
  return n[6] += e, Xe(n);
}
function Bh(t, e) {
  return hn(t, e) / 7;
}
function hn(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60 * 24);
}
function Ph(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60);
}
function Hh(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60);
}
function Lh(t, e) {
  return (e.valueOf() - t.valueOf()) / 1e3;
}
function Fh(t, e) {
  let n = _e(t), r = _e(e);
  return {
    years: 0,
    months: 0,
    days: Math.round(hn(n, r)),
    milliseconds: e.valueOf() - r.valueOf() - (t.valueOf() - n.valueOf())
  };
}
function zh(t, e) {
  let n = ti(t, e);
  return n !== null && n % 7 === 0 ? n / 7 : null;
}
function ti(t, e) {
  return jt(t) === jt(e) ? Math.round(hn(t, e)) : null;
}
function _e(t) {
  return Xe([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ]);
}
function Uh(t) {
  return Xe([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours()
  ]);
}
function Wh(t) {
  return Xe([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes()
  ]);
}
function jh(t) {
  return Xe([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds()
  ]);
}
function Vh(t, e, n) {
  let r = t.getUTCFullYear(), i = Ns(t, r, e, n);
  if (i < 1)
    return Ns(t, r - 1, e, n);
  let s = Ns(t, r + 1, e, n);
  return s >= 1 ? Math.min(i, s) : i;
}
function Ns(t, e, n, r) {
  let i = Xe([e, 0, 1 + $h(e, n, r)]), s = _e(t), o = Math.round(hn(i, s));
  return Math.floor(o / 7) + 1;
}
function $h(t, e, n) {
  let r = 7 + e - n;
  return -((7 + Xe([t, 0, r]).getUTCDay() - e) % 7) + r - 1;
}
function al(t) {
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
function ll(t) {
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
function Wt(t) {
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
function Xe(t) {
  return t.length === 1 && (t = t.concat([0])), new Date(Date.UTC(...t));
}
function Tu(t) {
  return !isNaN(t.valueOf());
}
function jt(t) {
  return t.getUTCHours() * 1e3 * 60 * 60 + t.getUTCMinutes() * 1e3 * 60 + t.getUTCSeconds() * 1e3 + t.getUTCMilliseconds();
}
function ku(t, e, n = !1) {
  let r = t.toISOString();
  return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (e == null ? r = r.replace("Z", "") : e !== 0 && (r = r.replace("Z", qo(e, !0)))), r;
}
function $o(t) {
  return t.toISOString().replace(/T.*$/, "");
}
function qh(t) {
  return t.toISOString().match(/^\d{4}-\d{2}/)[0];
}
function Gh(t) {
  return Dn(t.getUTCHours(), 2) + ":" + Dn(t.getUTCMinutes(), 2) + ":" + Dn(t.getUTCSeconds(), 2);
}
function qo(t, e = !1) {
  let n = t < 0 ? "-" : "+", r = Math.abs(t), i = Math.floor(r / 60), s = Math.round(r % 60);
  return e ? `${n + Dn(i, 2)}:${Dn(s, 2)}` : `GMT${n}${i}${s ? `:${Dn(s, 2)}` : ""}`;
}
function se(t, e, n) {
  let r, i;
  return function(...s) {
    if (!r)
      i = t.apply(this, s);
    else if (!qt(r, s)) {
      n && n(i);
      let o = t.apply(this, s);
      (!e || !e(o, i)) && (i = o);
    }
    return r = s, i;
  };
}
function Ur(t, e, n) {
  let r, i;
  return (s) => {
    if (!r)
      i = t.call(this, s);
    else if (!wt(r, s)) {
      n && n(i);
      let o = t.call(this, s);
      (!e || !e(o, i)) && (i = o);
    }
    return r = s, i;
  };
}
const cl = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
}, ni = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, Dr = /\s*([ap])\.?m\.?/i, Yh = /,/g, Qh = /\s+/g, Zh = /\u200e/g, Xh = /UTC|GMT/;
class Kh {
  constructor(e) {
    let n = {}, r = {}, i = 0;
    for (let s in e)
      s in cl ? (r[s] = e[s], i = Math.max(cl[s], i)) : (n[s] = e[s], s in ni && (i = Math.max(ni[s], i)));
    this.standardDateProps = n, this.extendedSettings = r, this.severity = i, this.buildFormattingFunc = se(ul);
  }
  format(e, n) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, n)(e);
  }
  formatRange(e, n, r, i) {
    let { standardDateProps: s, extendedSettings: o } = this, a = ip(e.marker, n.marker, r.calendarSystem);
    if (!a)
      return this.format(e, r);
    let c = a;
    c > 1 && // the two dates are different in a way that's larger scale than time
    (s.year === "numeric" || s.year === "2-digit") && (s.month === "numeric" || s.month === "2-digit") && (s.day === "numeric" || s.day === "2-digit") && (c = 1);
    let l = this.format(e, r), u = this.format(n, r);
    if (l === u)
      return l;
    let d = sp(s, c), f = ul(d, o, r), h = f(e), p = f(n), v = op(l, h, u, p), b = o.separator || i || r.defaultSeparator || "";
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
function ul(t, e, n) {
  let r = Object.keys(t).length;
  return r === 1 && t.timeZoneName === "short" ? (i) => qo(i.timeZoneOffset) : r === 0 && e.week ? (i) => rp(n.computeWeekNumber(i.marker), n.weekText, n.weekTextLong, n.locale, e.week) : Jh(t, e, n);
}
function Jh(t, e, n) {
  t = Object.assign({}, t), e = Object.assign({}, e), ep(t, e), t.timeZone = "UTC";
  let r = new Intl.DateTimeFormat(n.locale.codes, t), i;
  if (e.omitZeroMinute) {
    let s = Object.assign({}, t);
    delete s.minute, i = new Intl.DateTimeFormat(n.locale.codes, s);
  }
  return (s) => {
    let { marker: o } = s, a;
    i && !o.getUTCMinutes() ? a = i : a = r;
    let c = a.format(o);
    return tp(c, s, t, e, n);
  };
}
function ep(t, e) {
  t.timeZoneName && (t.hour || (t.hour = "2-digit"), t.minute || (t.minute = "2-digit")), t.timeZoneName === "long" && (t.timeZoneName = "short"), e.omitZeroMinute && (t.second || t.millisecond) && delete e.omitZeroMinute;
}
function tp(t, e, n, r, i) {
  return t = t.replace(Zh, ""), n.timeZoneName === "short" && (t = np(t, i.timeZone === "UTC" || e.timeZoneOffset == null ? "UTC" : (
    // important to normalize for IE, which does "GMT"
    qo(e.timeZoneOffset)
  ))), r.omitCommas && (t = t.replace(Yh, "").trim()), r.omitZeroMinute && (t = t.replace(":00", "")), r.meridiem === !1 ? t = t.replace(Dr, "").trim() : r.meridiem === "narrow" ? t = t.replace(Dr, (s, o) => o.toLocaleLowerCase()) : r.meridiem === "short" ? t = t.replace(Dr, (s, o) => `${o.toLocaleLowerCase()}m`) : r.meridiem === "lowercase" && (t = t.replace(Dr, (s) => s.toLocaleLowerCase())), t = t.replace(Qh, " "), t = t.trim(), t;
}
function np(t, e) {
  let n = !1;
  return t = t.replace(Xh, () => (n = !0, e)), n || (t += ` ${e}`), t;
}
function rp(t, e, n, r, i) {
  let s = [];
  return i === "long" ? s.push(n) : (i === "short" || i === "narrow") && s.push(e), (i === "long" || i === "short") && s.push(" "), s.push(r.simpleNumberFormat.format(t)), r.options.direction === "rtl" && s.reverse(), s.join("");
}
function ip(t, e, n) {
  return n.getMarkerYear(t) !== n.getMarkerYear(e) ? 5 : n.getMarkerMonth(t) !== n.getMarkerMonth(e) ? 4 : n.getMarkerDay(t) !== n.getMarkerDay(e) ? 2 : jt(t) !== jt(e) ? 1 : 0;
}
function sp(t, e) {
  let n = {};
  for (let r in t)
    (!(r in ni) || // not a date part prop (like timeZone)
    ni[r] <= e) && (n[r] = t[r]);
  return n;
}
function op(t, e, n, r) {
  let i = 0;
  for (; i < t.length; ) {
    let s = t.indexOf(e, i);
    if (s === -1)
      break;
    let o = t.substr(0, s);
    i = s + e.length;
    let a = t.substr(i), c = 0;
    for (; c < n.length; ) {
      let l = n.indexOf(r, c);
      if (l === -1)
        break;
      let u = n.substr(0, l);
      c = l + r.length;
      let d = n.substr(c);
      if (o === u && a === d)
        return {
          before: o,
          after: a
        };
    }
  }
  return null;
}
function fl(t, e) {
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
function ri(t, e, n, r) {
  let i = fl(t, n.calendarSystem), s = e ? fl(e, n.calendarSystem) : null;
  return {
    date: i,
    start: i,
    end: s,
    timeZone: n.timeZone,
    localeCodes: n.locale.codes,
    defaultSeparator: r || n.defaultSeparator
  };
}
class ap {
  constructor(e) {
    this.cmdStr = e;
  }
  format(e, n, r) {
    return n.cmdFormatter(this.cmdStr, ri(e, null, n, r));
  }
  formatRange(e, n, r, i) {
    return r.cmdFormatter(this.cmdStr, ri(e, n, r, i));
  }
}
class lp {
  constructor(e) {
    this.func = e;
  }
  format(e, n, r) {
    return this.func(ri(e, null, n, r));
  }
  formatRange(e, n, r, i) {
    return this.func(ri(e, n, r, i));
  }
}
function Ce(t) {
  return typeof t == "object" && t ? new Kh(t) : typeof t == "string" ? new ap(t) : typeof t == "function" ? new lp(t) : null;
}
const dl = {
  navLinkDayClick: L,
  navLinkWeekClick: L,
  duration: me,
  bootstrapFontAwesome: L,
  buttonIcons: L,
  customButtons: L,
  defaultAllDayEventDuration: me,
  defaultTimedEventDuration: me,
  nextDayThreshold: me,
  scrollTime: me,
  scrollTimeReset: Boolean,
  slotMinTime: me,
  slotMaxTime: me,
  dayPopoverFormat: Ce,
  slotDuration: me,
  snapDuration: me,
  headerToolbar: L,
  footerToolbar: L,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: Ce,
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
  eventOrder: mh,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: L,
  contentHeight: L,
  direction: String,
  weekNumberFormat: Ce,
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
  slotLabelInterval: me,
  allDayText: String,
  allDayClassNames: L,
  allDayContent: L,
  allDayDidMount: L,
  allDayWillUnmount: L,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: Ce,
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
  dateIncrement: me,
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
  monthStartFormat: Ce,
  // for connectors
  // (can't be part of plugin system b/c must be provided at runtime)
  handleCustomRendering: L,
  customRenderingMetaMap: L,
  customRenderingReplacesEl: Boolean
}, tr = {
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
}, hl = {
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
}, pl = {
  buttonText: L,
  buttonHints: L,
  views: L,
  plugins: L,
  initialEvents: L,
  events: L,
  eventSources: L
}, nn = {
  headerToolbar: rn,
  footerToolbar: rn,
  buttonText: rn,
  buttonHints: rn,
  buttonIcons: rn,
  dateIncrement: rn,
  plugins: Rr,
  events: Rr,
  eventSources: Rr,
  resources: Rr
};
function rn(t, e) {
  return typeof t == "object" && typeof e == "object" && t && e ? wt(t, e) : t === e;
}
function Rr(t, e) {
  return Array.isArray(t) && Array.isArray(e) ? qt(t, e) : t === e;
}
const cp = {
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
function Os(t) {
  return jo(t, nn);
}
function Go(t, e) {
  let n = {}, r = {};
  for (let i in e)
    i in t && (n[i] = e[i](t[i]));
  for (let i in t)
    i in e || (r[i] = t[i]);
  return { refined: n, extra: r };
}
function L(t) {
  return t;
}
function Yo(t, e, n, r) {
  return {
    instanceId: dn(),
    defId: t,
    range: e,
    forcedStartTzo: n ?? null,
    forcedEndTzo: r ?? null
  };
}
function up(t, e, n, r) {
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
function cn(t, e, n) {
  let { dateEnv: r, pluginHooks: i, options: s } = n, { defs: o, instances: a } = t;
  a = ln(a, (c) => !o[c.defId].recurringDef);
  for (let c in o) {
    let l = o[c];
    if (l.recurringDef) {
      let { duration: u } = l.recurringDef;
      u || (u = l.allDay ? s.defaultAllDayEventDuration : s.defaultTimedEventDuration);
      let d = fp(l, u, e, r, i.recurringTypes);
      for (let f of d) {
        let h = Yo(c, {
          start: f,
          end: r.add(f, u)
        });
        a[h.instanceId] = h;
      }
    }
  }
  return { defs: o, instances: a };
}
function fp(t, e, n, r, i) {
  let o = i[t.recurringDef.typeId].expand(t.recurringDef.typeData, {
    start: r.subtract(n.start, e),
    end: n.end
  }, r);
  return t.allDay && (o = o.map(_e)), o;
}
function or(t, e, n, r, i, s) {
  let o = nt(), a = Xo(n);
  for (let c of t) {
    let l = Nu(c, e, n, r, a, i, s);
    l && so(l, o);
  }
  return o;
}
function so(t, e = nt()) {
  return e.defs[t.def.defId] = t.def, t.instance && (e.instances[t.instance.instanceId] = t.instance), e;
}
function Qo(t, e) {
  let n = t.instances[e];
  if (n) {
    let r = t.defs[n.defId], i = es(t, (s) => dp(r, s));
    return i.defs[r.defId] = r, i.instances[n.instanceId] = n, i;
  }
  return nt();
}
function dp(t, e) {
  return !!(t.groupId && t.groupId === e.groupId);
}
function nt() {
  return { defs: {}, instances: {} };
}
function Zo(t, e) {
  return {
    defs: Object.assign(Object.assign({}, t.defs), e.defs),
    instances: Object.assign(Object.assign({}, t.instances), e.instances)
  };
}
function es(t, e) {
  let n = ln(t.defs, e), r = ln(t.instances, (i) => n[i.defId]);
  return { defs: n, instances: r };
}
function hp(t, e) {
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
function pp(t, e) {
  return Array.isArray(t) ? or(t, null, e, !0) : typeof t == "object" && t ? or([t], null, e, !0) : t != null ? String(t) : null;
}
function gl(t) {
  return Array.isArray(t) ? t : typeof t == "string" ? t.split(/\s+/) : [];
}
const ii = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: L,
  overlap: L,
  allow: L,
  className: gl,
  classNames: gl,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, gp = {
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
function si(t, e) {
  let n = pp(t.constraint, e);
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
function Iu(t) {
  return t.reduce(vp, gp);
}
function vp(t, e) {
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
const Wr = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, Mu = {
  start: L,
  end: L,
  date: L,
  allDay: Boolean
}, mp = Object.assign(Object.assign(Object.assign({}, Wr), Mu), { extendedProps: L });
function Nu(t, e, n, r, i = Xo(n), s, o) {
  let { refined: a, extra: c } = Ou(t, n, i), l = yp(e, n), u = up(a, l, n.dateEnv, n.pluginHooks.recurringTypes);
  if (u) {
    let f = oo(a, c, e ? e.sourceId : "", u.allDay, !!u.duration, n, s);
    return f.recurringDef = {
      typeId: u.typeId,
      typeData: u.typeData,
      duration: u.duration
    }, { def: f, instance: null };
  }
  let d = bp(a, l, n, r);
  if (d) {
    let f = oo(a, c, e ? e.sourceId : "", d.allDay, d.hasEnd, n, s), h = Yo(f.defId, d.range, d.forcedStartTzo, d.forcedEndTzo);
    return o && f.publicId && o[f.publicId] && (h.instanceId = o[f.publicId]), { def: f, instance: h };
  }
  return null;
}
function Ou(t, e, n = Xo(e)) {
  return Go(t, n);
}
function Xo(t) {
  return Object.assign(Object.assign(Object.assign({}, ii), mp), t.pluginHooks.eventRefiners);
}
function oo(t, e, n, r, i, s, o) {
  let a = {
    title: t.title || "",
    groupId: t.groupId || "",
    publicId: t.id || "",
    url: t.url || "",
    recurringDef: null,
    defId: (o && t.id ? o[t.id] : "") || dn(),
    sourceId: n,
    allDay: r,
    hasEnd: i,
    interactive: t.interactive,
    ui: si(t, s),
    extendedProps: Object.assign(Object.assign({}, t.extendedProps || {}), e)
  };
  for (let c of s.pluginHooks.eventDefMemberAdders)
    Object.assign(a, c(t));
  return Object.freeze(a.ui.classNames), Object.freeze(a.extendedProps), a;
}
function bp(t, e, n, r) {
  let { allDay: i } = t, s, o = null, a = !1, c, l = null, u = t.start != null ? t.start : t.date;
  if (s = n.dateEnv.createMarkerMeta(u), s)
    o = s.marker;
  else if (!r)
    return null;
  return t.end != null && (c = n.dateEnv.createMarkerMeta(t.end)), i == null && (e != null ? i = e : i = (!s || s.isTimeUnspecified) && (!c || c.isTimeUnspecified)), i && o && (o = _e(o)), c && (l = c.marker, i && (l = _e(l)), o && l <= o && (l = null)), l ? a = !0 : r || (a = n.options.forceEventDuration || !1, l = n.dateEnv.add(o, i ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration)), {
    allDay: i,
    hasEnd: a,
    range: { start: o, end: l },
    forcedStartTzo: s ? s.forcedTzo : null,
    forcedEndTzo: c ? c.forcedTzo : null
  };
}
function yp(t, e) {
  let n = null;
  return t && (n = t.defaultAllDay), n == null && (n = e.options.defaultAllDay), n;
}
const xp = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
  // so multiple defs get grouped
};
function wp(t, e) {
  return or(Ep(t), null, e);
}
function Ep(t) {
  let e;
  return t === !0 ? e = [{}] : Array.isArray(t) ? e = t.filter((n) => n.daysOfWeek) : typeof t == "object" && t ? e = [t] : e = [], e = e.map((n) => Object.assign(Object.assign({}, xp), n)), e;
}
function Bu(t) {
  let e = Math.floor(hn(t.start, t.end)) || 1, n = _e(t.start), r = je(n, e);
  return { start: n, end: r };
}
function Pu(t, e = me(0)) {
  let n = null, r = null;
  if (t.end) {
    r = _e(t.end);
    let i = t.end.valueOf() - r.valueOf();
    i && i >= pt(e) && (r = je(r, 1));
  }
  return t.start && (n = _e(t.start), r && r <= n && (r = je(n, 1))), { start: n, end: r };
}
function Sn(t, e, n, r) {
  return r === "year" ? me(n.diffWholeYears(t, e), "year") : r === "month" ? me(n.diffWholeMonths(t, e), "month") : Fh(t, e);
}
function _p(t, e) {
  return t.left >= e.left && t.left < e.right && t.top >= e.top && t.top < e.bottom;
}
function Hu(t, e) {
  let n = {
    left: Math.max(t.left, e.left),
    right: Math.min(t.right, e.right),
    top: Math.max(t.top, e.top),
    bottom: Math.min(t.bottom, e.bottom)
  };
  return n.left < n.right && n.top < n.bottom ? n : !1;
}
function Sp(t, e) {
  return {
    left: Math.min(Math.max(t.left, e.left), e.right),
    top: Math.min(Math.max(t.top, e.top), e.bottom)
  };
}
function Ap(t) {
  return {
    left: (t.left + t.right) / 2,
    top: (t.top + t.bottom) / 2
  };
}
function Cp(t, e) {
  return {
    left: t.left - e.left,
    top: t.top - e.top
  };
}
let Bs;
function Lu() {
  return Bs == null && (Bs = Dp()), Bs;
}
function Dp() {
  if (typeof document > "u")
    return !0;
  let t = document.createElement("div");
  t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.innerHTML = "<table><tr><td><div></div></td></tr></table>", t.querySelector("table").style.height = "100px", t.querySelector("div").style.height = "100%", document.body.appendChild(t);
  let n = t.querySelector("div").offsetHeight > 0;
  return document.body.removeChild(t), n;
}
const Ps = nt();
class Rp {
  constructor() {
    this.getKeysForEventDefs = se(this._getKeysForEventDefs), this.splitDateSelection = se(this._splitDateSpan), this.splitEventStore = se(this._splitEventStore), this.splitIndividualUi = se(this._splitIndividualUi), this.splitEventDrag = se(this._splitInteraction), this.splitEventResize = se(this._splitInteraction), this.eventUiBuilders = {};
  }
  splitProps(e) {
    let n = this.getKeyInfo(e), r = this.getKeysForEventDefs(e.eventStore), i = this.splitDateSelection(e.dateSelection), s = this.splitIndividualUi(e.eventUiBases, r), o = this.splitEventStore(e.eventStore, r), a = this.splitEventDrag(e.eventDrag), c = this.splitEventResize(e.eventResize), l = {};
    this.eventUiBuilders = Ot(n, (u, d) => this.eventUiBuilders[d] || se(Tp));
    for (let u in n) {
      let d = n[u], f = o[u] || Ps, h = this.eventUiBuilders[u];
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
    let n = {};
    if (e) {
      let r = this.getKeysForDateSpan(e);
      for (let i of r)
        n[i] = e;
    }
    return n;
  }
  _getKeysForEventDefs(e) {
    return Ot(e.defs, (n) => this.getKeysForEventDef(n));
  }
  _splitEventStore(e, n) {
    let { defs: r, instances: i } = e, s = {};
    for (let o in r)
      for (let a of n[o])
        s[a] || (s[a] = nt()), s[a].defs[o] = r[o];
    for (let o in i) {
      let a = i[o];
      for (let c of n[a.defId])
        s[c] && (s[c].instances[o] = a);
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
          affectedEvents: r[a] || Ps,
          mutatedEvents: s[a] || Ps,
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
function Tp(t, e, n) {
  let r = [];
  t && r.push(t), e && r.push(e);
  let i = {
    "": Iu(r)
  };
  return n && Object.assign(i, n), i;
}
function kp(t, e) {
  let n = null, r = null;
  return t.start && (n = e.createMarker(t.start)), t.end && (r = e.createMarker(t.end)), !n && !r || n && r && r < n ? null : { start: n, end: r };
}
function vl(t, e) {
  let n = [], { start: r } = e, i, s;
  for (t.sort(Ip), i = 0; i < t.length; i += 1)
    s = t[i], s.start > r && n.push({ start: r, end: s.start }), s.end > r && (r = s.end);
  return r < e.end && n.push({ start: r, end: e.end }), n;
}
function Ip(t, e) {
  return t.start.valueOf() - e.start.valueOf();
}
function un(t, e) {
  let { start: n, end: r } = t, i = null;
  return e.start !== null && (n === null ? n = e.start : n = new Date(Math.max(n.valueOf(), e.start.valueOf()))), e.end != null && (r === null ? r = e.end : r = new Date(Math.min(r.valueOf(), e.end.valueOf()))), (n === null || r === null || n < r) && (i = { start: n, end: r }), i;
}
function Mp(t, e) {
  return (t.start === null ? null : t.start.valueOf()) === (e.start === null ? null : e.start.valueOf()) && (t.end === null ? null : t.end.valueOf()) === (e.end === null ? null : e.end.valueOf());
}
function Ko(t, e) {
  return (t.end === null || e.start === null || t.end > e.start) && (t.start === null || e.end === null || t.start < e.end);
}
function ts(t, e) {
  return (t.start === null || e.start !== null && e.start >= t.start) && (t.end === null || e.end !== null && e.end <= t.end);
}
function Nt(t, e) {
  return (t.start === null || e >= t.start) && (t.end === null || e < t.end);
}
function Np(t, e) {
  return e.start != null && t < e.start ? e.start : e.end != null && t >= e.end ? new Date(e.end.valueOf() - 1) : t;
}
function Fu(t, e, n, r) {
  return {
    dow: t.getUTCDay(),
    isDisabled: !!(r && !Nt(r.activeRange, t)),
    isOther: !!(r && !Nt(r.currentRange, t)),
    isToday: !!(e && Nt(e, t)),
    isPast: !!(n ? t < n : e && t < e.start),
    isFuture: !!(n ? t > n : e && t >= e.end)
  };
}
function Jo(t, e) {
  let n = [
    "fc-day",
    `fc-day-${Oh[t.dow]}`
  ];
  return t.isDisabled ? n.push("fc-day-disabled") : (t.isToday && (n.push("fc-day-today"), n.push(e.getClass("today"))), t.isPast && n.push("fc-day-past"), t.isFuture && n.push("fc-day-future"), t.isOther && n.push("fc-day-other")), n;
}
const Op = Ce({ year: "numeric", month: "long", day: "numeric" }), Bp = Ce({ week: "long" });
function oi(t, e, n = "day", r = !0) {
  const { dateEnv: i, options: s, calendarApi: o } = t;
  let a = i.format(e, n === "week" ? Bp : Op);
  if (s.navLinks) {
    let c = i.toDate(e);
    const l = (u) => {
      let d = n === "day" ? s.navLinkDayClick : n === "week" ? s.navLinkWeekClick : null;
      typeof d == "function" ? d.call(o, i.toDate(e), u) : (typeof d == "string" && (n = d), o.zoomTo(e, n));
    };
    return Object.assign({ title: er(s.navLinkHint, [a, c], a), "data-navlink": "" }, r ? Cu(l) : { onClick: l });
  }
  return { "aria-label": a };
}
let Hs = null;
function Pp() {
  return Hs === null && (Hs = Hp()), Hs;
}
function Hp() {
  let t = document.createElement("div");
  Jn(t, {
    position: "absolute",
    top: -1e3,
    left: 0,
    border: 0,
    padding: 0,
    overflow: "scroll",
    direction: "rtl"
  }), t.innerHTML = "<div></div>", document.body.appendChild(t);
  let n = t.firstChild.getBoundingClientRect().left > t.getBoundingClientRect().left;
  return Fo(t), n;
}
let Ls;
function Lp() {
  return Ls || (Ls = Fp()), Ls;
}
function Fp() {
  let t = document.createElement("div");
  t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-9999px", t.style.left = "-9999px", document.body.appendChild(t);
  let e = zu(t);
  return document.body.removeChild(t), e;
}
function zu(t) {
  return {
    x: t.offsetHeight - t.clientHeight,
    y: t.offsetWidth - t.clientWidth
  };
}
function zp(t, e = !1) {
  let n = window.getComputedStyle(t), r = parseInt(n.borderLeftWidth, 10) || 0, i = parseInt(n.borderRightWidth, 10) || 0, s = parseInt(n.borderTopWidth, 10) || 0, o = parseInt(n.borderBottomWidth, 10) || 0, a = zu(t), c = a.y - r - i, l = a.x - s - o, u = {
    borderLeft: r,
    borderRight: i,
    borderTop: s,
    borderBottom: o,
    scrollbarBottom: l,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };
  return Pp() && n.direction === "rtl" ? u.scrollbarLeft = c : u.scrollbarRight = c, e && (u.paddingLeft = parseInt(n.paddingLeft, 10) || 0, u.paddingRight = parseInt(n.paddingRight, 10) || 0, u.paddingTop = parseInt(n.paddingTop, 10) || 0, u.paddingBottom = parseInt(n.paddingBottom, 10) || 0), u;
}
function Up(t, e = !1, n) {
  let r = n ? t.getBoundingClientRect() : ea(t), i = zp(t, e), s = {
    left: r.left + i.borderLeft + i.scrollbarLeft,
    right: r.right - i.borderRight - i.scrollbarRight,
    top: r.top + i.borderTop,
    bottom: r.bottom - i.borderBottom - i.scrollbarBottom
  };
  return e && (s.left += i.paddingLeft, s.right -= i.paddingRight, s.top += i.paddingTop, s.bottom -= i.paddingBottom), s;
}
function ea(t) {
  let e = t.getBoundingClientRect();
  return {
    left: e.left + window.pageXOffset,
    top: e.top + window.pageYOffset,
    right: e.right + window.pageXOffset,
    bottom: e.bottom + window.pageYOffset
  };
}
function Wp(t) {
  let e = Uu(t), n = t.getBoundingClientRect();
  for (let r of e) {
    let i = Hu(n, r.getBoundingClientRect());
    if (i)
      n = i;
    else
      return null;
  }
  return n;
}
function Uu(t) {
  let e = [];
  for (; t instanceof HTMLElement; ) {
    let n = window.getComputedStyle(t);
    if (n.position === "fixed")
      break;
    /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && e.push(t), t = t.parentNode;
  }
  return e;
}
function jp(t, e, n) {
  let r = !1, i = function(a) {
    r || (r = !0, e(a));
  }, s = function(a) {
    r || (r = !0, n(a));
  }, o = t(i, s);
  o && typeof o.then == "function" && o.then(i, s);
}
let ns = class {
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
    Vp(this.handlers, e, n);
  }
  off(e, n) {
    $p(this.handlers, e, n);
  }
  trigger(e, ...n) {
    let r = this.handlers[e] || [], i = this.options && this.options[e], s = [].concat(i || [], r);
    for (let o of s)
      o.apply(this.thisContext, n);
  }
  hasHandlers(e) {
    return !!(this.handlers[e] && this.handlers[e].length || this.options && this.options[e]);
  }
};
function Vp(t, e, n) {
  (t[e] || (t[e] = [])).push(n);
}
function $p(t, e, n) {
  n ? t[e] && (t[e] = t[e].filter((r) => r !== n)) : delete t[e];
}
class In {
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
    return Tr(this.tops || [], e.tops || []) && Tr(this.bottoms || [], e.bottoms || []) && Tr(this.lefts || [], e.lefts || []) && Tr(this.rights || [], e.rights || []);
  }
}
function Tr(t, e) {
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (Math.round(t[r]) !== Math.round(e[r]))
      return !1;
  return !0;
}
class ta {
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
class qp extends ta {
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
class Gp extends ta {
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
class ur {
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
ur.prototype.classes = {};
ur.prototype.iconClasses = {};
ur.prototype.baseIconClass = "";
ur.prototype.iconOverridePrefix = "";
function ml(t) {
  t();
  let e = re.debounceRendering, n = [];
  function r(i) {
    n.push(i);
  }
  for (re.debounceRendering = r, sr(R(Yp, {}), document.createElement("div")); n.length; )
    n.shift()();
  re.debounceRendering = e;
}
class Yp extends tt {
  render() {
    return R("div", {});
  }
  componentDidMount() {
    this.setState({});
  }
}
function Wu(t) {
  let e = U0(t), n = e.Provider;
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
class Qp {
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
const Pt = Wu({});
function Zp(t, e, n, r, i, s, o, a, c, l, u, d, f) {
  return {
    dateEnv: i,
    options: n,
    pluginHooks: o,
    emitter: l,
    dispatch: a,
    getCurrentData: c,
    calendarApi: u,
    viewSpec: t,
    viewApi: e,
    dateProfileGenerator: r,
    theme: s,
    isRtl: n.direction === "rtl",
    addResizeHandler(h) {
      l.on("_resize", h);
    },
    removeResizeHandler(h) {
      l.off("_resize", h);
    },
    createScrollResponder(h) {
      return new Qp(h, l, me(n.scrollTime), n.scrollTimeReset);
    },
    registerInteractiveComponent: d,
    unregisterInteractiveComponent: f
  };
}
class pn extends tt {
  shouldComponentUpdate(e, n) {
    return this.debug && console.log(io(e, this.props), io(n, this.state)), !Ms(this.props, e, this.propEquality) || !Ms(this.state, n, this.stateEquality);
  }
  // HACK for freakin' React StrictMode
  safeSetState(e) {
    Ms(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e);
  }
}
pn.addPropsEquality = Xp;
pn.addStateEquality = Kp;
pn.contextType = Pt;
pn.prototype.propEquality = {};
pn.prototype.stateEquality = {};
class xe extends pn {
}
xe.contextType = Pt;
function Xp(t) {
  let e = Object.create(this.prototype.propEquality);
  Object.assign(e, t), this.prototype.propEquality = e;
}
function Kp(t) {
  let e = Object.create(this.prototype.stateEquality);
  Object.assign(e, t), this.prototype.stateEquality = e;
}
function Bt(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
class St extends xe {
  constructor() {
    super(...arguments), this.uid = dn();
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
    !We(e, ".fc-event-mirror");
  }
  isValidDateDownEl(e) {
    return !We(e, ".fc-event:not(.fc-bg-event)") && !We(e, ".fc-more-link") && // a "more.." link
    !We(e, "a[data-navlink]") && // a clickable nav link
    !We(e, ".fc-popover");
  }
}
function Jp(t, e) {
  switch (e.type) {
    case "CHANGE_DATE":
      return e.dateMarker;
    default:
      return t;
  }
}
function eg(t, e) {
  let n = t.initialDate;
  return n != null ? e.createMarker(n) : fr(t.now, e);
}
function fr(t, e) {
  return typeof t == "function" && (t = t()), t == null ? e.createNowMarker() : e.createMarker(t);
}
class ju {
  constructor(e) {
    this.props = e, this.nowDate = fr(e.nowInput, e.dateEnv), this.initHiddenDays();
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
    let { props: i } = this, s, o, a, c, l, u;
    return s = this.buildValidRange(), s = this.trimHiddenDays(s), r && (e = Np(e, s)), o = this.buildCurrentRangeInfo(e, n), a = /^(year|month|week|day)$/.test(o.unit), c = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, a), c = this.trimHiddenDays(c), l = c, i.showNonCurrentDates || (l = un(l, o.range)), l = this.adjustActiveRange(l), l = un(l, s), u = Ko(o.range, s), Nt(c, e) || (e = c.start), {
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
    let e = this.props.validRangeInput, n = typeof e == "function" ? e.call(this.props.calendarApi, this.nowDate) : e;
    return this.refineRange(n) || { start: null, end: null };
  }
  // Builds a structure with info about the "current" range, the range that is
  // highlighted as being the current month for example.
  // See build() for a description of `direction`.
  // Guaranteed to have `range` and `unit` properties. `duration` is optional.
  buildCurrentRangeInfo(e, n) {
    let { props: r } = this, i = null, s = null, o = null, a;
    return r.duration ? (i = r.duration, s = r.durationUnit, o = this.buildRangeFromDuration(e, n, i, s)) : (a = this.props.dayCount) ? (s = "day", o = this.buildRangeFromDayCount(e, n, a)) : (o = this.buildCustomVisibleRange(e)) ? s = r.dateEnv.greatestWholeUnit(o.start, o.end).unit : (i = this.getFallbackDuration(), s = ro(i).unit, o = this.buildRangeFromDuration(e, n, i, s)), { duration: i, unit: s, range: o };
  }
  getFallbackDuration() {
    return me({ day: 1 });
  }
  // Returns a new activeRange to have time values (un-ambiguate)
  // slotMinTime or slotMaxTime causes the range to expand.
  adjustActiveRange(e) {
    let { dateEnv: n, usesMinMaxTime: r, slotMinTime: i, slotMaxTime: s } = this.props, { start: o, end: a } = e;
    return r && (Rn(i) < 0 && (o = _e(o), o = n.add(o, i)), Rn(s) > 1 && (a = _e(a), a = je(a, -1), a = n.add(a, s))), { start: o, end: a };
  }
  // Builds the "current" range when it is specified as an explicit duration.
  // `unit` is the already-computed greatestDurationDenominator unit of duration.
  buildRangeFromDuration(e, n, r, i) {
    let { dateEnv: s, dateAlignment: o } = this.props, a, c, l;
    if (!o) {
      let { dateIncrement: d } = this.props;
      d && pt(d) < pt(r) ? o = ro(d).unit : o = i;
    }
    Rn(r) <= 1 && this.isHiddenDay(a) && (a = this.skipHiddenDays(a, n), a = _e(a));
    function u() {
      a = s.startOf(e, o), c = s.add(a, r), l = { start: a, end: c };
    }
    return u(), this.trimHiddenDays(l) || (e = this.skipHiddenDays(e, n), u()), l;
  }
  // Builds the "current" range when a dayCount is specified.
  buildRangeFromDayCount(e, n, r) {
    let { dateEnv: i, dateAlignment: s } = this.props, o = 0, a = e, c;
    s && (a = i.startOf(a, s)), a = _e(a), a = this.skipHiddenDays(a, n), c = a;
    do
      c = je(c, 1), this.isHiddenDay(c) || (o += 1);
    while (o < r);
    return { start: a, end: c };
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
    return n || ((r = this.props.dateAlignment) ? me(1, r) : e || me({ days: 1 }));
  }
  refineRange(e) {
    if (e) {
      let n = kp(e, this.props.dateEnv);
      return n && (n = Pu(n)), n;
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
      e = je(e, n);
    return e;
  }
}
function Vu(t, e, n) {
  n.emitter.trigger("select", Object.assign(Object.assign({}, na(t, n)), { jsEvent: e ? e.origEvent : null, view: n.viewApi || n.calendarApi.view }));
}
function tg(t, e) {
  e.emitter.trigger("unselect", {
    jsEvent: t ? t.origEvent : null,
    view: e.viewApi || e.calendarApi.view
  });
}
function na(t, e) {
  let n = {};
  for (let r of e.pluginHooks.dateSpanTransforms)
    Object.assign(n, r(t, e));
  return Object.assign(n, gg(t, e.dateEnv)), n;
}
function bl(t, e, n) {
  let { dateEnv: r, options: i } = n, s = e;
  return t ? (s = _e(s), s = r.add(s, i.defaultAllDayEventDuration)) : s = r.add(s, i.defaultTimedEventDuration), s;
}
function ra(t, e, n, r) {
  let i = ai(t.defs, e), s = nt();
  for (let o in t.defs) {
    let a = t.defs[o];
    s.defs[o] = ng(a, i[o], n, r);
  }
  for (let o in t.instances) {
    let a = t.instances[o], c = s.defs[a.defId];
    s.instances[o] = rg(a, c, i[a.defId], n, r);
  }
  return s;
}
function ng(t, e, n, r) {
  let i = n.standardProps || {};
  i.hasEnd == null && e.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
  let s = Object.assign(Object.assign(Object.assign({}, t), i), { ui: Object.assign(Object.assign({}, t.ui), i.ui) });
  n.extendedProps && (s.extendedProps = Object.assign(Object.assign({}, s.extendedProps), n.extendedProps));
  for (let o of r.pluginHooks.eventDefMutationAppliers)
    o(s, n, r);
  return !s.hasEnd && r.options.forceEventDuration && (s.hasEnd = !0), s;
}
function rg(t, e, n, r, i) {
  let { dateEnv: s } = i, o = r.standardProps && r.standardProps.allDay === !0, a = r.standardProps && r.standardProps.hasEnd === !1, c = Object.assign({}, t);
  return o && (c.range = Bu(c.range)), r.datesDelta && n.startEditable && (c.range = {
    start: s.add(c.range.start, r.datesDelta),
    end: s.add(c.range.end, r.datesDelta)
  }), r.startDelta && n.durationEditable && (c.range = {
    start: s.add(c.range.start, r.startDelta),
    end: c.range.end
  }), r.endDelta && n.durationEditable && (c.range = {
    start: c.range.start,
    end: s.add(c.range.end, r.endDelta)
  }), a && (c.range = {
    start: c.range.start,
    end: bl(e.allDay, c.range.start, i)
  }), e.allDay && (c.range = {
    start: _e(c.range.start),
    end: _e(c.range.end)
  }), c.range.end < c.range.start && (c.range.end = bl(e.allDay, c.range.start, i)), c;
}
class wn {
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
class Ae {
  // instance will be null if expressing a recurring event that has no current instances,
  // OR if trying to validate an incoming external event that has no dates assigned
  constructor(e, n, r) {
    this._context = e, this._def = n, this._instance = r || null;
  }
  /*
  TODO: make event struct more responsible for this
  */
  setProp(e, n) {
    if (e in Mu)
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    else if (e === "id")
      n = Wr[e](n), this.mutate({
        standardProps: { publicId: n }
        // hardcoded internal name
      });
    else if (e in Wr)
      n = Wr[e](n), this.mutate({
        standardProps: { [e]: n }
      });
    else if (e in ii) {
      let r = ii[e](n);
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
      let s = this._instance.range, o = Sn(s.start, i, r, n.granularity);
      n.maintainDuration ? this.mutate({ datesDelta: o }) : this.mutate({ startDelta: o });
    }
  }
  setEnd(e, n = {}) {
    let { dateEnv: r } = this._context, i;
    if (!(e != null && (i = r.createMarker(e), !i)) && this._instance)
      if (i) {
        let s = Sn(this._instance.range.end, i, r, n.granularity);
        this.mutate({ endDelta: s });
      } else
        this.mutate({ standardProps: { hasEnd: !1 } });
  }
  setDates(e, n, r = {}) {
    let { dateEnv: i } = this._context, s = { allDay: r.allDay }, o = i.createMarker(e), a;
    if (o && !(n != null && (a = i.createMarker(n), !a)) && this._instance) {
      let c = this._instance.range;
      r.allDay === !0 && (c = Bu(c));
      let l = Sn(c.start, o, i, r.granularity);
      if (a) {
        let u = Sn(c.end, a, i, r.granularity);
        Ah(l, u) ? this.mutate({ datesDelta: l, standardProps: s }) : this.mutate({ startDelta: l, endDelta: u, standardProps: s });
      } else
        s.hasEnd = !1, this.mutate({ datesDelta: l, standardProps: s });
    }
  }
  moveStart(e) {
    let n = me(e);
    n && this.mutate({ startDelta: n });
  }
  moveEnd(e) {
    let n = me(e);
    n && this.mutate({ endDelta: n });
  }
  moveDates(e) {
    let n = me(e);
    n && this.mutate({ datesDelta: n });
  }
  setAllDay(e, n = {}) {
    let r = { allDay: e }, { maintainDuration: i } = n;
    i == null && (i = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (r.hasEnd = i), this.mutate({ standardProps: r });
  }
  formatRange(e) {
    let { dateEnv: n } = this._context, r = this._instance, i = Ce(e);
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
      let r = this._def, i = this._context, { eventStore: s } = i.getCurrentData(), o = Qo(s, n.instanceId);
      o = ra(o, {
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
      let c = new Ae(i, r, n);
      this._def = o.defs[r.defId], this._instance = o.instances[n.instanceId], i.dispatch({
        type: "MERGE_EVENTS",
        eventStore: o
      }), i.emitter.trigger("eventChange", {
        oldEvent: c,
        event: this,
        relatedEvents: on(o, i, n),
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
    let e = this._context, n = $u(this);
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
    return e ? new wn(this._context, this._context.getCurrentData().eventSources[e]) : null;
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
function $u(t) {
  let e = t._def, n = t._instance;
  return {
    defs: { [e.defId]: e },
    instances: n ? { [n.instanceId]: n } : {}
  };
}
function on(t, e, n) {
  let { defs: r, instances: i } = t, s = [], o = n ? n.instanceId : "";
  for (let a in i) {
    let c = i[a], l = r[c.defId];
    c.instanceId !== o && s.push(new Ae(e, l, c));
  }
  return s;
}
function yl(t, e, n, r) {
  let i = {}, s = {}, o = {}, a = [], c = [], l = ai(t.defs, e);
  for (let u in t.defs) {
    let d = t.defs[u];
    l[d.defId].display === "inverse-background" && (d.groupId ? (i[d.groupId] = [], o[d.groupId] || (o[d.groupId] = d)) : s[u] = []);
  }
  for (let u in t.instances) {
    let d = t.instances[u], f = t.defs[d.defId], h = l[f.defId], p = d.range, v = !f.allDay && r ? Pu(p, r) : p, b = un(v, n);
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
    let d = i[u], f = vl(d, n);
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
    let d = s[u], f = vl(d, n);
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
function ig(t) {
  return t.ui.display === "background" || t.ui.display === "inverse-background";
}
function xl(t, e) {
  t.fcSeg = e;
}
function Mn(t) {
  return t.fcSeg || t.parentNode.fcSeg || // for the harness
  null;
}
function ai(t, e) {
  return Ot(t, (n) => qu(n, e));
}
function qu(t, e) {
  let n = [];
  return e[""] && n.push(e[""]), e[t.defId] && n.push(e[t.defId]), n.push(t.ui), Iu(n);
}
function Gu(t, e) {
  let n = t.map(sg);
  return n.sort((r, i) => bh(r, i, e)), n.map((r) => r._seg);
}
function sg(t) {
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
function og(t, e) {
  let { pluginHooks: n } = e, r = n.isDraggableTransformers, { def: i, ui: s } = t.eventRange, o = s.startEditable;
  for (let a of r)
    o = a(o, i, s, e);
  return o;
}
function ag(t, e) {
  return t.isStart && t.eventRange.ui.durationEditable && e.options.eventResizableFromStart;
}
function lg(t, e) {
  return t.isEnd && t.eventRange.ui.durationEditable;
}
function Yu(t, e, n, r, i, s, o) {
  let { dateEnv: a, options: c } = n, { displayEventTime: l, displayEventEnd: u } = c, d = t.eventRange.def, f = t.eventRange.instance;
  l == null && (l = r !== !1), u == null && (u = i !== !1);
  let h = f.range.start, p = f.range.end, v = s || t.start || t.eventRange.range.start, b = o || t.end || t.eventRange.range.end, m = _e(h).valueOf() === _e(v).valueOf(), x = _e(Gt(p, -1)).valueOf() === _e(Gt(b, -1)).valueOf();
  return l && !d.allDay && (m || x) ? (v = m ? h : v, b = x ? p : b, u && d.hasEnd ? a.formatRange(v, b, e, {
    forcedStartTzo: s ? null : f.forcedStartTzo,
    forcedEndTzo: o ? null : f.forcedEndTzo
  }) : a.format(v, e, {
    forcedTzo: s ? null : f.forcedStartTzo
    // nooooo, same
  })) : "";
}
function $t(t, e, n) {
  let r = t.eventRange.range;
  return {
    isPast: r.end < (n || e.start),
    isFuture: r.start >= (n || e.end),
    isToday: e && Nt(e, r.start)
  };
}
function cg(t) {
  let e = ["fc-event"];
  return t.isMirror && e.push("fc-event-mirror"), t.isDraggable && e.push("fc-event-draggable"), (t.isStartResizable || t.isEndResizable) && e.push("fc-event-resizable"), t.isDragging && e.push("fc-event-dragging"), t.isResizing && e.push("fc-event-resizing"), t.isSelected && e.push("fc-event-selected"), t.isStart && e.push("fc-event-start"), t.isEnd && e.push("fc-event-end"), t.isPast && e.push("fc-event-past"), t.isToday && e.push("fc-event-today"), t.isFuture && e.push("fc-event-future"), e;
}
function Qu(t) {
  return t.instance ? t.instance.instanceId : `${t.def.defId}:${t.range.start.toISOString()}`;
}
function Zu(t, e) {
  let { def: n, instance: r } = t.eventRange, { url: i } = n;
  if (i)
    return { href: i };
  let { emitter: s, options: o } = e, { eventInteractive: a } = o;
  return a == null && (a = n.interactive, a == null && (a = !!s.hasHandlers("eventClick"))), a ? Du((c) => {
    s.trigger("eventClick", {
      el: c.target,
      event: new Ae(e, n, r),
      jsEvent: c,
      view: e.viewApi
    });
  }) : {};
}
const ug = {
  start: L,
  end: L,
  allDay: Boolean
};
function fg(t, e, n) {
  let r = dg(t, e), { range: i } = r;
  if (!i.start)
    return null;
  if (!i.end) {
    if (n == null)
      return null;
    i.end = e.add(i.start, n);
  }
  return r;
}
function dg(t, e) {
  let { refined: n, extra: r } = Go(t, ug), i = n.start ? e.createMarkerMeta(n.start) : null, s = n.end ? e.createMarkerMeta(n.end) : null, { allDay: o } = n;
  return o == null && (o = i && i.isTimeUnspecified && (!s || s.isTimeUnspecified)), Object.assign({ range: {
    start: i ? i.marker : null,
    end: s ? s.marker : null
  }, allDay: o }, r);
}
function hg(t, e) {
  return Mp(t.range, e.range) && t.allDay === e.allDay && pg(t, e);
}
function pg(t, e) {
  for (let n in e)
    if (n !== "range" && n !== "allDay" && t[n] !== e[n])
      return !1;
  for (let n in t)
    if (!(n in e))
      return !1;
  return !0;
}
function gg(t, e) {
  return Object.assign(Object.assign({}, Ku(t.range, e, t.allDay)), { allDay: t.allDay });
}
function Xu(t, e, n) {
  return Object.assign(Object.assign({}, Ku(t, e, n)), { timeZone: e.timeZone });
}
function Ku(t, e, n) {
  return {
    start: e.toDate(t.start),
    end: e.toDate(t.end),
    startStr: e.formatIso(t.start, { omitTime: n }),
    endStr: e.formatIso(t.end, { omitTime: n })
  };
}
function vg(t, e, n) {
  let r = Ou({ editable: !1 }, n), i = oo(
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
    ui: qu(i, e),
    instance: Yo(i.defId, t.range),
    range: t.range,
    isStart: !0,
    isEnd: !0
  };
}
let Ju = {};
function mg(t, e) {
  Ju[t] = e;
}
function bg(t) {
  return new Ju[t]();
}
class yg {
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
    return Xe(e);
  }
  markerToArray(e) {
    return Wt(e);
  }
}
mg("gregory", yg);
const xg = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function wg(t) {
  let e = xg.exec(t);
  if (e) {
    let n = new Date(Date.UTC(Number(e[1]), e[3] ? Number(e[3]) - 1 : 0, Number(e[5] || 1), Number(e[7] || 0), Number(e[8] || 0), Number(e[10] || 0), e[12] ? +`0.${e[12]}` * 1e3 : 0));
    if (Tu(n)) {
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
class Eg {
  constructor(e) {
    let n = this.timeZone = e.timeZone, r = n !== "local" && n !== "UTC";
    e.namedTimeZoneImpl && r && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(n)), this.canComputeOffset = !!(!r || this.namedTimeZoneImpl), this.calendarSystem = bg(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, e.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof e.firstDay == "number" && (this.weekDow = e.firstDay), typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = e.weekText != null ? e.weekText : e.locale.options.weekText, this.weekTextLong = (e.weekTextLong != null ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
  }
  // Creating / Parsing
  createMarker(e) {
    let n = this.createMarkerMeta(e);
    return n === null ? null : n.marker;
  }
  createNowMarker() {
    return this.canComputeOffset ? this.timestampToMarker((/* @__PURE__ */ new Date()).valueOf()) : Xe(al(/* @__PURE__ */ new Date()));
  }
  createMarkerMeta(e) {
    if (typeof e == "string")
      return this.parse(e);
    let n = null;
    return typeof e == "number" ? n = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (n = this.timestampToMarker(e))) : Array.isArray(e) && (n = Xe(e)), n === null || !Tu(n) ? null : { marker: n, isTimeUnspecified: !1, forcedTzo: null };
  }
  parse(e) {
    let n = wg(e);
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
    return jt(e) === jt(n) && r.getMarkerDay(e) === r.getMarkerDay(n) && r.getMarkerMonth(e) === r.getMarkerMonth(n) ? r.getMarkerYear(n) - r.getMarkerYear(e) : null;
  }
  diffWholeMonths(e, n) {
    let { calendarSystem: r } = this;
    return jt(e) === jt(n) && r.getMarkerDay(e) === r.getMarkerDay(n) ? r.getMarkerMonth(n) - r.getMarkerMonth(e) + (r.getMarkerYear(n) - r.getMarkerYear(e)) * 12 : null;
  }
  // Range / Duration
  greatestWholeUnit(e, n) {
    let r = this.diffWholeYears(e, n);
    return r !== null ? { unit: "year", value: r } : (r = this.diffWholeMonths(e, n), r !== null ? { unit: "month", value: r } : (r = zh(e, n), r !== null ? { unit: "week", value: r } : (r = ti(e, n), r !== null ? { unit: "day", value: r } : (r = Ph(e, n), zr(r) ? { unit: "hour", value: r } : (r = Hh(e, n), zr(r) ? { unit: "minute", value: r } : (r = Lh(e, n), zr(r) ? { unit: "second", value: r } : { unit: "millisecond", value: n.valueOf() - e.valueOf() }))))));
  }
  countDurationsBetween(e, n, r) {
    let i;
    return r.years && (i = this.diffWholeYears(e, n), i !== null) ? i / Rh(r) : r.months && (i = this.diffWholeMonths(e, n), i !== null) ? i / Th(r) : r.days && (i = ti(e, n), i !== null) ? i / Rn(r) : (n.valueOf() - e.valueOf()) / pt(r);
  }
  // Start-Of
  // these DON'T return zoned-dates. only UTC start-of dates
  startOf(e, n) {
    return n === "year" ? this.startOfYear(e) : n === "month" ? this.startOfMonth(e) : n === "week" ? this.startOfWeek(e) : n === "day" ? _e(e) : n === "hour" ? Uh(e) : n === "minute" ? Wh(e) : n === "second" ? jh(e) : null;
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
    return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : Vh(e, this.weekDow, this.weekDoy);
  }
  // TODO: choke on timeZoneName: long
  format(e, n, r = {}) {
    return n.format({
      marker: e,
      timeZoneOffset: r.forcedTzo != null ? r.forcedTzo : this.offsetForMarker(e)
    }, this);
  }
  formatRange(e, n, r, i = {}) {
    return i.isEndExclusive && (n = Gt(n, -1)), r.formatRange({
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
    return n.omitTimeZoneOffset || (n.forcedTzo != null ? r = n.forcedTzo : r = this.offsetForMarker(e)), ku(e, r, n.omitTime);
  }
  // TimeZone
  timestampToMarker(e) {
    return this.timeZone === "local" ? Xe(al(new Date(e))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(e) : Xe(this.namedTimeZoneImpl.timestampToArray(e));
  }
  offsetForMarker(e) {
    return this.timeZone === "local" ? -ll(Wt(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(Wt(e)) : null;
  }
  // Conversion
  toDate(e, n) {
    return this.timeZone === "local" ? ll(Wt(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(Wt(e)) * 1e3 * 60) : new Date(e.valueOf() - (n || 0));
  }
}
class ef {
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
      span: ia(a, o)
      // guaranteed to intersect
    }, ...s), i) : (r.push(e), 0);
  }
  insertEntryAt(e, n) {
    let { entriesByLevel: r, levelCoords: i } = this;
    n.lateral === -1 ? (Fs(i, n.level, n.levelCoord), Fs(r, n.level, [e])) : Fs(r[n.level], n.lateral, e), this.stackCnts[an(e)] = n.stackCnt;
  }
  findInsertion(e) {
    let { levelCoords: n, entriesByLevel: r, strictOrder: i, stackCnts: s } = this, o = n.length, a = 0, c = -1, l = -1, u = null, d = 0;
    for (let p = 0; p < o; p += 1) {
      let v = n[p];
      if (!i && v >= a + e.thickness)
        break;
      let b = r[p], m, x = lo(b, e.span.start, ao), g = x[0] + x[1];
      for (
        ;
        // loop through entries that horizontally intersect
        (m = b[g]) && // but not past the whole entry list
        m.span.start < e.span.end;
      ) {
        let y = v + m.thickness;
        y > a && (a = y, u = m, c = p, l = g), y === a && (d = Math.max(d, s[an(m)] + 1)), g += 1;
      }
    }
    let f = 0;
    if (u)
      for (f = c + 1; f < o && n[f] < a; )
        f += 1;
    let h = -1;
    return f < o && n[f] === a && (h = lo(r[f], e.span.end, ao)[0]), {
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
    let { entriesByLevel: e, levelCoords: n } = this, r = e.length, i = [];
    for (let s = 0; s < r; s += 1) {
      let o = e[s], a = n[s];
      for (let c of o)
        i.push(Object.assign(Object.assign({}, c), { levelCoord: a }));
    }
    return i;
  }
}
function ao(t) {
  return t.span.end;
}
function an(t) {
  return t.index + ":" + t.span.start;
}
function _g(t) {
  let e = [];
  for (let n of t) {
    let r = [], i = {
      span: n.span,
      entries: [n]
    };
    for (let s of e)
      ia(s.span, i.span) ? i = {
        entries: s.entries.concat(i.entries),
        span: Sg(s.span, i.span)
      } : r.push(s);
    r.push(i), e = r;
  }
  return e;
}
function Sg(t, e) {
  return {
    start: Math.min(t.start, e.start),
    end: Math.max(t.end, e.end)
  };
}
function ia(t, e) {
  let n = Math.max(t.start, e.start), r = Math.min(t.end, e.end);
  return n < r ? { start: n, end: r } : null;
}
function Fs(t, e, n) {
  t.splice(e, 0, n);
}
function lo(t, e, n) {
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
class Hn {
  constructor(e) {
    this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
  }
  destroy() {
  }
}
function Ag(t, e) {
  return {
    component: t,
    el: e.el,
    useEventCenter: e.useEventCenter != null ? e.useEventCenter : !0,
    isHitComboAllowed: e.isHitComboAllowed || null
  };
}
function sa(t) {
  return {
    [t.component.uid]: t
  };
}
const co = {};
class Cg {
  constructor(e, n) {
    this.emitter = new ns();
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
const oa = {};
class Dg extends xe {
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
    return Lu() || o.push("fc-liquid-hack"), e.children(o, s, i, r);
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
function Rg(t, e) {
  return !t || e > 10 ? Ce({ weekday: "short" }) : e > 1 ? Ce({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : Ce({ weekday: "long" });
}
const tf = "fc-col-header-cell";
function nf(t) {
  return t.text;
}
class aa extends xe {
  constructor() {
    super(...arguments), this.id = dn(), this.queuedDomNodes = [], this.currentDomNodes = [], this.handleEl = (e) => {
      this.props.elRef && Bt(this.props.elRef, e);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: r } = n, { customGenerator: i, defaultGenerator: s, renderProps: o } = e, a = sf(e);
    let c = !1, l, u = [], d;
    if (i != null) {
      const f = typeof i == "function" ? i(o, R) : i;
      if (f === !0)
        c = !0;
      else {
        const h = f && typeof f == "object";
        h && "html" in f ? a.dangerouslySetInnerHTML = { __html: f.html } : h && "domNodes" in f ? u = Array.prototype.slice.call(f.domNodes) : !h && typeof f != "function" ? l = f : d = f;
      }
    } else
      c = !rf(e.generatorName, r);
    return c && s && (l = s(o)), this.queuedDomNodes = u, this.currentGeneratorMeta = d, R(e.elTag, a, l);
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
      }, r), { elClasses: (r.elClasses || []).filter(Tg) }));
    }
  }
  applyQueueudDomNodes() {
    const { queuedDomNodes: e, currentDomNodes: n } = this, r = this.base;
    if (!qt(e, n)) {
      n.forEach(Fo);
      for (let i of e)
        r.appendChild(i);
      this.currentDomNodes = e;
    }
  }
}
aa.addPropsEquality({
  elClasses: qt,
  elStyle: wt,
  elAttrs: Ih,
  renderProps: wt
});
function rf(t, e) {
  var n;
  return !!(e.handleCustomRendering && t && (!((n = e.customRenderingMetaMap) === null || n === void 0) && n[t]));
}
function sf(t, e) {
  const n = Object.assign(Object.assign({}, t.elAttrs), { ref: t.elRef });
  return (t.elClasses || e) && (n.className = (t.elClasses || []).concat(e || []).concat(n.className || []).filter(Boolean).join(" ")), t.elStyle && (n.style = t.elStyle), n;
}
function Tg(t) {
  return !!t;
}
const of = Wu(0);
class rt extends tt {
  constructor() {
    super(...arguments), this.InnerContent = kg.bind(void 0, this), this.handleRootEl = (e) => {
      this.rootEl = e, this.props.elRef && Bt(this.props.elRef, e);
    };
  }
  render() {
    const { props: e } = this, n = Ig(e.classNameGenerator, e.renderProps);
    if (e.children) {
      const r = sf(e, n), i = e.children(this.InnerContent, e.renderProps, r);
      return e.elTag ? R(e.elTag, r, i) : i;
    } else
      return R(aa, Object.assign(Object.assign({}, e), { elRef: this.handleRootEl, elTag: e.elTag || "div", elClasses: (e.elClasses || []).concat(n), renderId: this.context }));
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
rt.contextType = of;
function kg(t, e) {
  const n = t.props;
  return R(aa, Object.assign({ renderProps: n.renderProps, generatorName: n.generatorName, customGenerator: n.customGenerator, defaultGenerator: n.defaultGenerator, renderId: t.context }, e));
}
function Ig(t, e) {
  const n = typeof t == "function" ? t(e) : t || [];
  return typeof n == "string" ? [n] : n;
}
class Mg extends xe {
  render() {
    let { dateEnv: e, options: n, theme: r, viewApi: i } = this.context, { props: s } = this, { date: o, dateProfile: a } = s, c = Fu(o, s.todayRange, null, a), l = [tf].concat(Jo(c, r)), u = e.format(o, s.dayHeaderFormat), d = !c.isDisabled && s.colCnt > 1 ? oi(this.context, o) : {}, f = Object.assign(Object.assign(Object.assign({ date: e.toDate(o), view: i }, s.extraRenderProps), { text: u }), c);
    return R(rt, { elTag: "th", elClasses: l, elAttrs: Object.assign({ role: "columnheader", colSpan: s.colSpan, "data-date": c.isDisabled ? void 0 : $o(o) }, s.extraDataAttrs), renderProps: f, generatorName: "dayHeaderContent", customGenerator: n.dayHeaderContent, defaultGenerator: nf, classNameGenerator: n.dayHeaderClassNames, didMount: n.dayHeaderDidMount, willUnmount: n.dayHeaderWillUnmount }, (h) => R("div", { className: "fc-scrollgrid-sync-inner" }, !c.isDisabled && R(h, { elTag: "a", elAttrs: d, elClasses: [
      "fc-col-header-cell-cushion",
      s.isSticky && "fc-sticky"
    ] })));
  }
}
const Ng = Ce({ weekday: "long" });
class Og extends xe {
  render() {
    let { props: e } = this, { dateEnv: n, theme: r, viewApi: i, options: s } = this.context, o = je(/* @__PURE__ */ new Date(2592e5), e.dow), a = {
      dow: e.dow,
      isDisabled: !1,
      isFuture: !1,
      isPast: !1,
      isToday: !1,
      isOther: !1
    }, c = n.format(o, e.dayHeaderFormat), l = Object.assign(Object.assign(Object.assign(Object.assign({
      // TODO: make this public?
      date: o
    }, a), { view: i }), e.extraRenderProps), { text: c });
    return R(rt, { elTag: "th", elClasses: [
      tf,
      ...Jo(a, r),
      ...e.extraClassNames || []
    ], elAttrs: Object.assign({ role: "columnheader", colSpan: e.colSpan }, e.extraDataAttrs), renderProps: l, generatorName: "dayHeaderContent", customGenerator: s.dayHeaderContent, defaultGenerator: nf, classNameGenerator: s.dayHeaderClassNames, didMount: s.dayHeaderDidMount, willUnmount: s.dayHeaderWillUnmount }, (u) => R(
      "div",
      { className: "fc-scrollgrid-sync-inner" },
      R(u, { elTag: "a", elClasses: [
        "fc-col-header-cell-cushion",
        e.isSticky && "fc-sticky"
      ], elAttrs: {
        "aria-label": n.format(o, Ng)
      } })
    ));
  }
}
class dr extends tt {
  constructor(e, n) {
    super(e, n), this.initialNowDate = fr(n.options.now, n.dateEnv), this.initialNowQueriedMs = (/* @__PURE__ */ new Date()).valueOf(), this.state = this.computeTiming().currentState;
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
    let { props: e, context: n } = this, r = Gt(this.initialNowDate, (/* @__PURE__ */ new Date()).valueOf() - this.initialNowQueriedMs), i = n.dateEnv.startOf(r, e.unit), s = n.dateEnv.add(i, me(1, e.unit)), o = s.valueOf() - r.valueOf();
    return o = Math.min(1e3 * 60 * 60 * 24, o), {
      currentState: { nowDate: i, todayRange: wl(i) },
      nextState: { nowDate: s, todayRange: wl(s) },
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
dr.contextType = Pt;
function wl(t) {
  let e = _e(t), n = je(e, 1);
  return { start: e, end: n };
}
class af extends xe {
  constructor() {
    super(...arguments), this.createDayHeaderFormatter = se(Bg);
  }
  render() {
    let { context: e } = this, { dates: n, dateProfile: r, datesRepDistinctDays: i, renderIntro: s } = this.props, o = this.createDayHeaderFormatter(e.options.dayHeaderFormat, i, n.length);
    return R(dr, { unit: "day" }, (a, c) => R(
      "tr",
      { role: "row" },
      s && s("day"),
      n.map((l) => i ? R(Mg, { key: l.toISOString(), date: l, dateProfile: r, todayRange: c, colCnt: n.length, dayHeaderFormat: o }) : R(Og, { key: l.getUTCDay(), dow: l.getUTCDay(), dayHeaderFormat: o }))
    ));
  }
}
function Bg(t, e, n) {
  return t || Rg(e, n);
}
class lf {
  constructor(e, n) {
    let r = e.start, { end: i } = e, s = [], o = [], a = -1;
    for (; r < i; )
      n.isHiddenDay(r) ? s.push(a + 0.5) : (a += 1, s.push(a), o.push(r)), r = je(r, 1);
    this.dates = o, this.indices = s, this.cnt = o.length;
  }
  sliceRange(e) {
    let n = this.getDateDayIndex(e.start), r = this.getDateDayIndex(je(e.end, -1)), i = Math.max(0, n), s = Math.min(this.cnt - 1, r);
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
    let { indices: n } = this, r = Math.floor(hn(this.dates[0], e));
    return r < 0 ? n[0] - 1 : r >= n.length ? n[n.length - 1] + 1 : n[r];
  }
}
class cf {
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
        let c = Math.floor(a / n), l = Math.min((c + 1) * n, o + 1);
        i.push({
          row: c,
          firstCol: a % n,
          lastCol: (l - 1) % n,
          isStart: r.isStart && a === s,
          isEnd: r.isEnd && l - 1 === o
        }), a = l;
      }
    }
    return i;
  }
}
class uf {
  constructor() {
    this.sliceBusinessHours = se(this._sliceBusinessHours), this.sliceDateSelection = se(this._sliceDateSpan), this.sliceEventStore = se(this._sliceEventStore), this.sliceEventDrag = se(this._sliceInteraction), this.sliceEventResize = se(this._sliceInteraction), this.forceDayIfListItem = !1;
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
      { range: { start: e, end: Gt(e, 1) }, allDay: !1 },
      // add 1 ms, protect against null range
      n,
      r,
      {},
      i,
      ...s
    );
  }
  _sliceBusinessHours(e, n, r, i, ...s) {
    return e ? this._sliceEventStore(cn(e, kr(n, !!r), i), {}, n, r, ...s).bg : [];
  }
  _sliceEventStore(e, n, r, i, ...s) {
    if (e) {
      let o = yl(e, n, kr(r, !!i), i);
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
    let o = yl(e.mutatedEvents, n, kr(r, !!i), i);
    return {
      segs: this.sliceEventRanges(o.fg, s),
      affectedInstances: e.affectedEvents.instances,
      isEvent: e.isEvent
    };
  }
  _sliceDateSpan(e, n, r, i, s, ...o) {
    if (!e)
      return [];
    let a = kr(n, !!r), c = un(e.range, a);
    if (c) {
      e = Object.assign(Object.assign({}, e), { range: c });
      let l = vg(e, i, s), u = this.sliceRange(e.range, ...o);
      for (let d of u)
        d.eventRange = l;
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
      end: je(r.start, 1)
    });
    let i = this.sliceRange(r, ...n);
    for (let s of i)
      s.eventRange = e, s.isStart = e.isStart && s.isStart, s.isEnd = e.isEnd && s.isEnd;
    return i;
  }
}
function kr(t, e) {
  let n = t.activeRange;
  return e ? n : {
    start: Gt(n.start, t.slotMinTime.milliseconds),
    end: Gt(n.end, t.slotMaxTime.milliseconds - 864e5)
    // 864e5 = ms in a day
  };
}
function Pg(t, e, n, r, i) {
  switch (e.type) {
    case "RECEIVE_EVENTS":
      return Hg(t, n[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, i);
    case "RESET_RAW_EVENTS":
      return Lg(t, n[e.sourceId], e.rawEvents, r.activeRange, i);
    case "ADD_EVENTS":
      return Fg(
        t,
        e.eventStore,
        // new ones
        r ? r.activeRange : null,
        i
      );
    case "RESET_EVENTS":
      return e.eventStore;
    case "MERGE_EVENTS":
      return Zo(t, e.eventStore);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return r ? cn(t, r.activeRange, i) : t;
    case "REMOVE_EVENTS":
      return hp(t, e.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return df(t, e.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return es(t, (s) => !s.sourceId);
    case "REMOVE_ALL_EVENTS":
      return nt();
    default:
      return t;
  }
}
function Hg(t, e, n, r, i, s) {
  if (e && // not already removed
  n === e.latestFetchId) {
    let o = or(ff(i, e, s), e, s);
    return r && (o = cn(o, r, s)), Zo(df(t, e.sourceId), o);
  }
  return t;
}
function Lg(t, e, n, r, i) {
  const { defIdMap: s, instanceIdMap: o } = Ug(t);
  let a = or(ff(n, e, i), e, i, !1, s, o);
  return cn(a, r, i);
}
function ff(t, e, n) {
  let r = n.options.eventDataTransform, i = e ? e.eventDataTransform : null;
  return i && (t = El(t, i)), r && (t = El(t, r)), t;
}
function El(t, e) {
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
function Fg(t, e, n, r) {
  return n && (e = cn(e, n, r)), Zo(t, e);
}
function _l(t, e, n) {
  let { defs: r } = t, i = Ot(t.instances, (s) => r[s.defId].allDay ? s : Object.assign(Object.assign({}, s), { range: {
    start: n.createMarker(e.toDate(s.range.start, s.forcedStartTzo)),
    end: n.createMarker(e.toDate(s.range.end, s.forcedEndTzo))
  }, forcedStartTzo: n.canComputeOffset ? null : s.forcedStartTzo, forcedEndTzo: n.canComputeOffset ? null : s.forcedEndTzo }));
  return { defs: r, instances: i };
}
function df(t, e) {
  return es(t, (n) => n.sourceId !== e);
}
function zg(t, e) {
  return {
    defs: t.defs,
    instances: ln(t.instances, (n) => !e[n.instanceId])
  };
}
function Ug(t) {
  const { defs: e, instances: n } = t, r = {}, i = {};
  for (let s in e) {
    const o = e[s], { publicId: a } = o;
    a && (r[a] = s);
  }
  for (let s in n) {
    const o = n[s], a = e[o.defId], { publicId: c } = a;
    c && (i[c] = s);
  }
  return { defIdMap: r, instanceIdMap: i };
}
function hf(t, e, n) {
  let { instances: r } = t.mutatedEvents;
  for (let i in r)
    if (!ts(e.validRange, r[i].range))
      return !1;
  return pf({ eventDrag: t }, n);
}
function Wg(t, e, n) {
  return ts(e.validRange, t.range) ? pf({ dateSelection: t }, n) : !1;
}
function pf(t, e) {
  let n = e.getCurrentData(), r = Object.assign({ businessHours: n.businessHours, dateSelection: "", eventStore: n.eventStore, eventUiBases: n.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, t);
  return (e.pluginHooks.isPropsValid || jg)(r, e);
}
function jg(t, e, n = {}, r) {
  return !(t.eventDrag && !Vg(t, e, n, r) || t.dateSelection && !$g(t, e, n, r));
}
function Vg(t, e, n, r) {
  let i = e.getCurrentData(), s = t.eventDrag, o = s.mutatedEvents, a = o.defs, c = o.instances, l = ai(a, s.isEvent ? t.eventUiBases : { "": i.selectionConfig });
  r && (l = Ot(l, r));
  let u = zg(t.eventStore, s.affectedEvents.instances), d = u.defs, f = u.instances, h = ai(d, t.eventUiBases);
  for (let p in c) {
    let v = c[p], b = v.range, m = l[v.defId], x = a[v.defId];
    if (!gf(m.constraints, b, u, t.businessHours, e))
      return !1;
    let { eventOverlap: g } = e.options, y = typeof g == "function" ? g : null;
    for (let S in f) {
      let _ = f[S];
      if (Ko(b, _.range) && (h[_.defId].overlap === !1 && s.isEvent || m.overlap === !1 || y && !y(
        new Ae(e, d[_.defId], _),
        // still event
        new Ae(e, x, v)
      )))
        return !1;
    }
    let E = i.eventStore;
    for (let S of m.allows) {
      let _ = Object.assign(Object.assign({}, n), { range: v.range, allDay: x.allDay }), C = E.defs[x.defId], N = E.instances[p], D;
      if (C ? D = new Ae(e, C, N) : D = new Ae(e, x), !S(na(_, e), D))
        return !1;
    }
  }
  return !0;
}
function $g(t, e, n, r) {
  let i = t.eventStore, s = i.defs, o = i.instances, a = t.dateSelection, c = a.range, { selectionConfig: l } = e.getCurrentData();
  if (r && (l = r(l)), !gf(l.constraints, c, i, t.businessHours, e))
    return !1;
  let { selectOverlap: u } = e.options, d = typeof u == "function" ? u : null;
  for (let f in o) {
    let h = o[f];
    if (Ko(c, h.range) && (l.overlap === !1 || d && !d(new Ae(e, s[h.defId], h), null)))
      return !1;
  }
  for (let f of l.allows) {
    let h = Object.assign(Object.assign({}, n), a);
    if (!f(na(h, e), null))
      return !1;
  }
  return !0;
}
function gf(t, e, n, r, i) {
  for (let s of t)
    if (!Gg(qg(s, e, n, r, i), e))
      return !1;
  return !0;
}
function qg(t, e, n, r, i) {
  return t === "businessHours" ? zs(cn(r, e, i)) : typeof t == "string" ? zs(es(n, (s) => s.groupId === t)) : typeof t == "object" && t ? zs(cn(t, e, i)) : [];
}
function zs(t) {
  let { instances: e } = t, n = [];
  for (let r in e)
    n.push(e[r].range);
  return n;
}
function Gg(t, e) {
  for (let n of t)
    if (ts(n, e))
      return !0;
  return !1;
}
class Sl extends Error {
  constructor(e, n) {
    super(e), this.response = n;
  }
}
function Yg(t, e, n) {
  t = t.toUpperCase();
  const r = {
    method: t
  };
  return t === "GET" ? e += (e.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(n) : (r.body = new URLSearchParams(n), r.headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  }), fetch(e, r).then((i) => {
    if (i.ok)
      return i.json().then((s) => [s, i], () => {
        throw new Sl("Failure parsing JSON", i);
      });
    throw new Sl("Request failed", i);
  });
}
class la {
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
const Ir = /^(visible|hidden)$/;
class Qg extends xe {
  constructor() {
    super(...arguments), this.handleEl = (e) => {
      this.el = e, Bt(this.props.elRef, e);
    };
  }
  render() {
    let { props: e } = this, { liquid: n, liquidIsAbsolute: r } = e, i = n && r, s = ["fc-scroller"];
    return n && (r ? s.push("fc-scroller-liquid-absolute") : s.push("fc-scroller-liquid")), R("div", { ref: this.handleEl, className: s.join(" "), style: {
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
    if (Ir.test(this.props.overflowX))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), { children: r } = e;
    for (let i = 0; i < r.length; i += 1)
      if (r[i].getBoundingClientRect().width > n)
        return !0;
    return !1;
  }
  needsYScrolling() {
    if (Ir.test(this.props.overflowY))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), { children: r } = e;
    for (let i = 0; i < r.length; i += 1)
      if (r[i].getBoundingClientRect().height > n)
        return !0;
    return !1;
  }
  getXScrollbarWidth() {
    return Ir.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
  }
  getYScrollbarWidth() {
    return Ir.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
  }
}
class kt {
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
    return Nh(this.currentMap, e, n, r);
  }
  getAll() {
    return Vo(this.currentMap);
  }
}
function Zg(t) {
  let e = lh(t, ".fc-scrollgrid-shrink"), n = 0;
  for (let r of e)
    n = Math.max(n, Eh(r));
  return Math.ceil(n);
}
function vf(t, e) {
  return t.liquid && e.liquid;
}
function Xg(t, e) {
  return e.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
  vf(t, e);
}
function Kg(t, e, n, r) {
  let { expandRows: i } = n;
  return typeof e.content == "function" ? e.content(n) : R("table", {
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
  }, n.tableColGroupNode, R(r ? "thead" : "tbody", {
    role: "presentation"
  }, typeof e.rowContent == "function" ? e.rowContent(n) : e.rowContent));
}
function Jg(t, e) {
  return qt(t, e, wt);
}
function ev(t, e) {
  let n = [];
  for (let r of t) {
    let i = r.span || 1;
    for (let s = 0; s < i; s += 1)
      n.push(R("col", { style: {
        width: r.width === "shrink" ? tv(e) : r.width || "",
        minWidth: r.minWidth || ""
      } }));
  }
  return R("colgroup", {}, ...n);
}
function tv(t) {
  return t ?? 4;
}
function nv(t) {
  for (let e of t)
    if (e.width === "shrink")
      return !0;
  return !1;
}
function rv(t, e) {
  let n = [
    "fc-scrollgrid",
    e.theme.getClass("table")
  ];
  return t && n.push("fc-scrollgrid-liquid"), n;
}
function iv(t, e) {
  let n = [
    "fc-scrollgrid-section",
    `fc-scrollgrid-section-${t.type}`,
    t.className
    // used?
  ];
  return e && t.liquid && t.maxHeight == null && n.push("fc-scrollgrid-section-liquid"), t.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
}
function uo(t) {
  return R("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: t.clientWidth,
    minWidth: t.tableMinWidth
  } });
}
function li(t) {
  let { stickyHeaderDates: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
function mf(t) {
  let { stickyFooterScrollbar: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
class ca extends xe {
  constructor() {
    super(...arguments), this.processCols = se((e) => e, Jg), this.renderMicroColGroup = se(ev), this.scrollerRefs = new kt(), this.scrollerElRefs = new kt(this._handleScrollerEl.bind(this)), this.state = {
      shrinkWidth: null,
      forceYScrollbars: !1,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }, this.handleSizing = () => {
      this.safeSetState(Object.assign({ shrinkWidth: this.computeShrinkWidth() }, this.computeScrollerDims()));
    };
  }
  render() {
    let { props: e, state: n, context: r } = this, i = e.sections || [], s = this.processCols(e.cols), o = this.renderMicroColGroup(s, n.shrinkWidth), a = rv(e.liquid, r);
    e.collapsibleWidth && a.push("fc-scrollgrid-collapsible");
    let c = i.length, l = 0, u, d = [], f = [], h = [];
    for (; l < c && (u = i[l]).type === "header"; )
      d.push(this.renderSection(u, o, !0)), l += 1;
    for (; l < c && (u = i[l]).type === "body"; )
      f.push(this.renderSection(u, o, !1)), l += 1;
    for (; l < c && (u = i[l]).type === "footer"; )
      h.push(this.renderSection(u, o, !0)), l += 1;
    let p = !Lu();
    const v = { role: "rowgroup" };
    return R("table", {
      role: "grid",
      className: a.join(" "),
      style: { height: e.height }
    }, !!(!p && d.length) && R("thead", v, ...d), !!(!p && f.length) && R("tbody", v, ...f), !!(!p && h.length) && R("tfoot", v, ...h), p && R("tbody", v, ...d, ...f, ...h));
  }
  renderSection(e, n, r) {
    return "outerContent" in e ? R(Se, { key: e.key }, e.outerContent) : R("tr", { key: e.key, role: "presentation", className: iv(e, this.props.liquid).join(" ") }, this.renderChunkTd(e, n, e.chunk, r));
  }
  renderChunkTd(e, n, r, i) {
    if ("outerContent" in r)
      return r.outerContent;
    let { props: s } = this, { forceYScrollbars: o, scrollerClientWidths: a, scrollerClientHeights: c } = this.state, l = Xg(s, e), u = vf(s, e), d = s.liquid ? o ? "scroll" : l ? "auto" : "hidden" : "visible", f = e.key, h = Kg(e, r, {
      tableColGroupNode: n,
      tableMinWidth: "",
      clientWidth: !s.collapsibleWidth && a[f] !== void 0 ? a[f] : null,
      clientHeight: c[f] !== void 0 ? c[f] : null,
      expandRows: e.expandRows,
      syncRowHeights: !1,
      rowSyncHeights: [],
      reportRowHeightChange: () => {
      }
    }, i);
    return R(i ? "th" : "td", {
      ref: r.elRef,
      role: "presentation"
    }, R(
      "div",
      { className: `fc-scroller-harness${u ? " fc-scroller-harness-liquid" : ""}` },
      R(Qg, { ref: this.scrollerRefs.createRef(f), elRef: this.scrollerElRefs.createRef(f), overflowY: d, overflowX: s.liquid ? "hidden" : "visible", maxHeight: e.maxHeight, liquid: u, liquidIsAbsolute: !0 }, h)
    ));
  }
  _handleScrollerEl(e, n) {
    let r = sv(this.props.sections, n);
    r && Bt(r.chunk.scrollerElRef, e);
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
    return nv(this.props.cols) ? Zg(this.scrollerElRefs.getAll()) : 0;
  }
  computeScrollerDims() {
    let e = Lp(), { scrollerRefs: n, scrollerElRefs: r } = this, i = !1, s = {}, o = {};
    for (let a in n.currentMap) {
      let c = n.currentMap[a];
      if (c && c.needsYScrolling()) {
        i = !0;
        break;
      }
    }
    for (let a of this.props.sections) {
      let c = a.key, l = r.currentMap[c];
      if (l) {
        let u = l.parentNode;
        s[c] = Math.floor(u.getBoundingClientRect().width - (i ? e.y : 0)), o[c] = Math.floor(u.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars: i, scrollerClientWidths: s, scrollerClientHeights: o };
  }
}
ca.addStateEquality({
  scrollerClientWidths: wt,
  scrollerClientHeights: wt
});
function sv(t, e) {
  for (let n of t)
    if (n.key === e)
      return n;
  return null;
}
class ua extends xe {
  constructor() {
    super(...arguments), this.handleEl = (e) => {
      this.el = e, e && xl(e, this.props.seg);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: r } = n, { seg: i } = e, { eventRange: s } = i, { ui: o } = s, a = {
      event: new Ae(n, s.def, s.instance),
      view: n.viewApi,
      timeText: e.timeText,
      textColor: o.textColor,
      backgroundColor: o.backgroundColor,
      borderColor: o.borderColor,
      isDraggable: !e.disableDragging && og(i, n),
      isStartResizable: !e.disableResizing && ag(i, n),
      isEndResizable: !e.disableResizing && lg(i),
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
    return R(rt, Object.assign({}, e, { elRef: this.handleEl, elClasses: [
      ...cg(a),
      ...i.eventRange.ui.classNames,
      ...e.elClasses || []
    ], renderProps: a, generatorName: "eventContent", customGenerator: r.eventContent, defaultGenerator: e.defaultGenerator, classNameGenerator: r.eventClassNames, didMount: r.eventDidMount, willUnmount: r.eventWillUnmount }));
  }
  componentDidUpdate(e) {
    this.el && this.props.seg !== e.seg && xl(this.el, this.props.seg);
  }
}
class bf extends xe {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { seg: i } = e, { ui: s } = i.eventRange, o = r.eventTimeFormat || e.defaultTimeFormat, a = Yu(i, o, n, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
    return R(ua, Object.assign({}, e, { elTag: "a", elStyle: {
      borderColor: s.borderColor,
      backgroundColor: s.backgroundColor
    }, elAttrs: Zu(i, n), defaultGenerator: ov, timeText: a }), (c, l) => R(
      Se,
      null,
      R(c, { elTag: "div", elClasses: ["fc-event-main"], elStyle: { color: l.textColor } }),
      !!l.isStartResizable && R("div", { className: "fc-event-resizer fc-event-resizer-start" }),
      !!l.isEndResizable && R("div", { className: "fc-event-resizer fc-event-resizer-end" })
    ));
  }
}
function ov(t) {
  return R(
    "div",
    { className: "fc-event-main-frame" },
    t.timeText && R("div", { className: "fc-event-time" }, t.timeText),
    R(
      "div",
      { className: "fc-event-title-container" },
      R("div", { className: "fc-event-title fc-sticky" }, t.event.title || R(Se, null, " "))
    )
  );
}
const fa = (t) => R(Pt.Consumer, null, (e) => {
  let { options: n } = e, r = {
    isAxis: t.isAxis,
    date: e.dateEnv.toDate(t.date),
    view: e.viewApi
  };
  return R(rt, Object.assign({}, t, { elTag: t.elTag || "div", renderProps: r, generatorName: "nowIndicatorContent", customGenerator: n.nowIndicatorContent, classNameGenerator: n.nowIndicatorClassNames, didMount: n.nowIndicatorDidMount, willUnmount: n.nowIndicatorWillUnmount }));
}), av = Ce({ day: "numeric" });
class da extends xe {
  constructor() {
    super(...arguments), this.refineRenderProps = Ur(lv);
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
    return R(rt, Object.assign({}, e, { elClasses: [
      ...Jo(i, n.theme),
      ...e.elClasses || []
    ], elAttrs: Object.assign(Object.assign({}, e.elAttrs), i.isDisabled ? {} : { "data-date": $o(e.date) }), renderProps: i, generatorName: "dayCellContent", customGenerator: r.dayCellContent, defaultGenerator: e.defaultGenerator, classNameGenerator: (
      // don't use custom classNames if disabled
      i.isDisabled ? void 0 : r.dayCellClassNames
    ), didMount: r.dayCellDidMount, willUnmount: r.dayCellWillUnmount }));
  }
}
function ha(t) {
  return !!(t.dayCellContent || rf("dayCellContent", t));
}
function lv(t) {
  let { date: e, dateEnv: n, dateProfile: r, isMonthStart: i } = t, s = Fu(e, t.todayRange, null, r), o = t.showDayNumber ? n.format(e, i ? t.monthStartFormat : av) : "";
  return Object.assign(Object.assign(Object.assign({ date: n.toDate(e), view: t.viewApi }, s), {
    isMonthStart: i,
    dayNumberText: o
  }), t.extraRenderProps);
}
class yf extends xe {
  render() {
    let { props: e } = this, { seg: n } = e;
    return R(ua, { elTag: "div", elClasses: ["fc-bg-event"], elStyle: { backgroundColor: n.eventRange.ui.backgroundColor }, defaultGenerator: cv, seg: n, timeText: "", isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: e.isPast, isFuture: e.isFuture, isToday: e.isToday, disableDragging: !0, disableResizing: !0 });
  }
}
function cv(t) {
  let { title: e } = t.event;
  return e && R("div", { className: "fc-event-title" }, t.event.title);
}
function xf(t) {
  return R("div", { className: `fc-${t}` });
}
const wf = (t) => R(Pt.Consumer, null, (e) => {
  let { dateEnv: n, options: r } = e, { date: i } = t, s = r.weekNumberFormat || t.defaultFormat, o = n.computeWeekNumber(i), a = n.format(i, s);
  return R(
    rt,
    Object.assign({}, t, { renderProps: { num: o, text: a, date: i }, generatorName: "weekNumberContent", customGenerator: r.weekNumberContent, defaultGenerator: uv, classNameGenerator: r.weekNumberClassNames, didMount: r.weekNumberDidMount, willUnmount: r.weekNumberWillUnmount })
  );
});
function uv(t) {
  return t.text;
}
const Us = 10;
class fv extends xe {
  constructor() {
    super(...arguments), this.state = {
      titleId: Ki()
    }, this.handleRootEl = (e) => {
      this.rootEl = e, this.props.elRef && Bt(this.props.elRef, e);
    }, this.handleDocumentMouseDown = (e) => {
      const n = Su(e);
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
    return Y0(R(
      "div",
      Object.assign({}, r.extraAttrs, { id: r.id, className: s.join(" "), "aria-labelledby": i.titleId, ref: this.handleRootEl }),
      R(
        "div",
        { className: "fc-popover-header " + e.getClass("popoverHeader") },
        R("span", { className: "fc-popover-title", id: i.titleId }, r.title),
        R("span", { className: "fc-popover-close " + e.getIconClass("close"), title: n.closeHint, onClick: this.handleCloseClick })
      ),
      R("div", { className: "fc-popover-body " + e.getClass("popoverContent") }, r.children)
    ), r.parentEl);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  updateSize() {
    let { isRtl: e } = this.context, { alignmentEl: n, alignGridTop: r } = this.props, { rootEl: i } = this, s = Wp(n);
    if (s) {
      let o = i.getBoundingClientRect(), a = r ? We(n, ".fc-scrollgrid").getBoundingClientRect().top : s.top, c = e ? s.right - o.width : s.left;
      a = Math.max(a, Us), c = Math.min(c, document.documentElement.clientWidth - Us - o.width), c = Math.max(c, Us);
      let l = i.offsetParent.getBoundingClientRect();
      Jn(i, {
        top: a - l.top,
        left: c - l.left
      });
    }
  }
}
class dv extends St {
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
    return R(da, { elRef: this.handleRootEl, date: i, dateProfile: o, todayRange: s }, (c, l, u) => R(
      fv,
      { elRef: u.ref, id: r.id, title: a, extraClassNames: ["fc-more-popover"].concat(u.className || []), extraAttrs: u, parentEl: r.parentEl, alignmentEl: r.alignmentEl, alignGridTop: r.alignGridTop, onClose: r.onClose },
      ha(e) && R(c, { elTag: "div", elClasses: ["fc-more-popover-misc"] }),
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
class Ef extends xe {
  constructor() {
    super(...arguments), this.state = {
      isPopoverOpen: !1,
      popoverId: Ki()
    }, this.handleLinkEl = (e) => {
      this.linkEl = e, this.props.elRef && Bt(this.props.elRef, e);
    }, this.handleClick = (e) => {
      let { props: n, context: r } = this, { moreLinkClick: i } = r.options, s = Al(n).start;
      function o(a) {
        let { def: c, instance: l, range: u } = a.eventRange;
        return {
          event: new Ae(r, c, l),
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
    return R(Pt.Consumer, null, (r) => {
      let { viewApi: i, options: s, calendarApi: o } = r, { moreLinkText: a } = s, { moreCnt: c } = e, l = Al(e), u = typeof a == "function" ? a.call(o, c) : `+${c} ${a}`, d = er(s.moreLinkHint, [c], u), f = {
        num: c,
        shortText: `+${c}`,
        text: u,
        view: i
      };
      return R(
        Se,
        null,
        !!e.moreCnt && R(rt, { elTag: e.elTag || "a", elRef: this.handleLinkEl, elClasses: [
          ...e.elClasses || [],
          "fc-more-link"
        ], elStyle: e.elStyle, elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), Cu(this.handleClick)), { title: d, "aria-expanded": n.isPopoverOpen, "aria-controls": n.isPopoverOpen ? n.popoverId : "" }), renderProps: f, generatorName: "moreLinkContent", customGenerator: s.moreLinkContent, defaultGenerator: e.defaultGenerator || hv, classNameGenerator: s.moreLinkClassNames, didMount: s.moreLinkDidMount, willUnmount: s.moreLinkWillUnmount }, e.children),
        n.isPopoverOpen && R(dv, { id: n.popoverId, startDate: l.start, endDate: l.end, dateProfile: e.dateProfile, todayRange: e.todayRange, extraDateSpan: e.extraDateSpan, parentEl: this.parentEl, alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : this.linkEl, alignGridTop: e.alignGridTop, forceTimed: e.forceTimed, onClose: this.handlePopoverClose }, e.popoverContent())
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
    this.linkEl && (this.parentEl = We(this.linkEl, ".fc-view-harness"));
  }
}
function hv(t) {
  return t.text;
}
function Al(t) {
  if (t.allDayDate)
    return {
      start: t.allDayDate,
      end: je(t.allDayDate, 1)
    };
  let { hiddenSegs: e } = t;
  return {
    start: _f(e),
    end: gv(e)
  };
}
function _f(t) {
  return t.reduce(pv).eventRange.range.start;
}
function pv(t, e) {
  return t.eventRange.range.start < e.eventRange.range.start ? t : e;
}
function gv(t) {
  return t.reduce(vv).eventRange.range.end;
}
function vv(t, e) {
  return t.eventRange.range.end > e.eventRange.range.end ? t : e;
}
class ci extends xe {
  render() {
    let { props: e, context: n } = this, { options: r } = n, i = { view: n.viewApi };
    return R(rt, Object.assign({}, e, { elTag: e.elTag || "div", elClasses: [
      ...Sf(e.viewSpec),
      ...e.elClasses || []
    ], renderProps: i, classNameGenerator: r.viewClassNames, generatorName: void 0, didMount: r.viewDidMount, willUnmount: r.viewWillUnmount }), () => e.children);
  }
}
function Sf(t) {
  return [
    `fc-${t.type}-view`,
    "fc-view"
  ];
}
const mv = {
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
function Af(t, e, n = Cf(e)) {
  let r;
  if (typeof t == "string" ? r = { url: t } : typeof t == "function" || Array.isArray(t) ? r = { events: t } : typeof t == "object" && t && (r = t), r) {
    let { refined: i, extra: s } = Go(r, n), o = bv(i, e);
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
        sourceId: dn(),
        sourceDefId: o.sourceDefId,
        meta: o.meta,
        ui: si(i, e),
        extendedProps: s
      };
  }
  return null;
}
function Cf(t) {
  return Object.assign(Object.assign(Object.assign({}, ii), mv), t.pluginHooks.eventSourceRefiners);
}
function bv(t, e) {
  let n = e.pluginHooks.eventSourceDefs;
  for (let r = n.length - 1; r >= 0; r -= 1) {
    let s = n[r].parseMeta(t);
    if (s)
      return { sourceDefId: r, meta: s };
  }
  return null;
}
class yv {
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
      dateMarker: fr(e.calendarOptions.now, e.dateEnv)
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
    let n = this.getCurrentData(), r = me(e);
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
    return r.format(r.createMarker(e), Ce(n));
  }
  // `settings` is for formatter AND isEndExclusive
  formatRange(e, n, r) {
    let { dateEnv: i } = this.getCurrentData();
    return i.formatRange(i.createMarker(e), i.createMarker(n), Ce(r), r);
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
    let i = this.getCurrentData(), s = fg(r, i.dateEnv, me({ days: 1 }));
    s && (this.dispatch({ type: "SELECT_DATES", selection: s }), Vu(s, null, i));
  }
  unselect(e) {
    let n = this.getCurrentData();
    n.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), tg(e, n));
  }
  // Public Events API
  // -----------------------------------------------------------------------------------------------------------------
  addEvent(e, n) {
    if (e instanceof Ae) {
      let o = e._def, a = e._instance;
      return this.getCurrentData().eventStore.defs[o.defId] || (this.dispatch({
        type: "ADD_EVENTS",
        eventStore: so({ def: o, instance: a })
        // TODO: better util for two args?
      }), this.triggerEventAdd(e)), e;
    }
    let r = this.getCurrentData(), i;
    if (n instanceof wn)
      i = n.internalEventSource;
    else if (typeof n == "boolean")
      n && ([i] = Vo(r.eventSources));
    else if (n != null) {
      let o = this.getEventSourceById(n);
      if (!o)
        return console.warn(`Could not find an event source with ID "${n}"`), null;
      i = o.internalEventSource;
    }
    let s = Nu(e, i, r, !1);
    if (s) {
      let o = new Ae(r, s.def, s.def.recurringDef ? null : s.instance);
      return this.dispatch({
        type: "ADD_EVENTS",
        eventStore: so(s)
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
          eventStore: $u(e)
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
          return new Ae(n, o, null);
        for (let a in i) {
          let c = i[a];
          if (c.defId === o.defId)
            return new Ae(n, o, c);
        }
      }
    }
    return null;
  }
  getEvents() {
    let e = this.getCurrentData();
    return on(e.eventStore, e);
  }
  removeAllEvents() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }
  // Public Event Sources API
  // -----------------------------------------------------------------------------------------------------------------
  getEventSources() {
    let e = this.getCurrentData(), n = e.eventSources, r = [];
    for (let i in n)
      r.push(new wn(e, n[i]));
    return r;
  }
  getEventSourceById(e) {
    let n = this.getCurrentData(), r = n.eventSources;
    e = String(e);
    for (let i in r)
      if (r[i].publicId === e)
        return new wn(n, r[i]);
    return null;
  }
  addEventSource(e) {
    let n = this.getCurrentData();
    if (e instanceof wn)
      return n.eventSources[e.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [e.internalEventSource]
      }), e;
    let r = Af(e, n);
    return r ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [r] }), new wn(n, r)) : null;
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
    let n = me(e);
    n && this.trigger("_scrollRequest", { time: n });
  }
}
class xv {
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
class wv extends xv {
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
const Ev = [], Df = {
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
}, Rf = Object.assign(Object.assign({}, Df), {
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
function _v(t) {
  let e = t.length > 0 ? t[0].code : "en", n = Ev.concat(t), r = {
    en: Rf
  };
  for (let i of n)
    r[i.code] = i;
  return {
    map: r,
    defaultCode: e
  };
}
function Tf(t, e) {
  return typeof t == "object" && !Array.isArray(t) ? kf(t.code, [t.code], t) : Sv(t, e);
}
function Sv(t, e) {
  let n = [].concat(t || []), r = Av(n, e) || Rf;
  return kf(t, n, r);
}
function Av(t, e) {
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
function kf(t, e, n) {
  let r = jo([Df, n], ["buttonText"]);
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
function Ht(t) {
  return {
    id: dn(),
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
function Cv(t, e) {
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
      const a = o.name, c = n[a];
      c === void 0 ? (n[a] = o.id, i(o.deps), r = Rv(r, o)) : c !== o.id && console.warn(`Duplicate plugin '${a}'`);
    }
  }
  return t && i(t), i(e), r;
}
function Dv() {
  let t = [], e = [], n;
  return (r, i) => ((!n || !qt(r, t) || !qt(i, e)) && (n = Cv(r, i)), t = r, e = i, n);
}
function Rv(t, e) {
  return {
    premiumReleaseDate: Tv(t.premiumReleaseDate, e.premiumReleaseDate),
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
function Tv(t, e) {
  return t === void 0 ? e : e === void 0 ? t : new Date(Math.max(t.valueOf(), e.valueOf()));
}
class Qt extends ur {
}
Qt.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
Qt.prototype.baseIconClass = "fc-icon";
Qt.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
Qt.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
Qt.prototype.iconOverrideOption = "buttonIcons";
Qt.prototype.iconOverrideCustomButtonOption = "icon";
Qt.prototype.iconOverridePrefix = "fc-icon-";
function kv(t, e) {
  let n = {}, r;
  for (r in t)
    fo(r, n, t, e);
  for (r in e)
    fo(r, n, t, e);
  return n;
}
function fo(t, e, n, r) {
  if (e[t])
    return e[t];
  let i = Iv(t, e, n, r);
  return i && (e[t] = i), i;
}
function Iv(t, e, n, r) {
  let i = n[t], s = r[t], o = (u) => i && i[u] !== null ? i[u] : s && s[u] !== null ? s[u] : null, a = o("component"), c = o("superType"), l = null;
  if (c) {
    if (c === t)
      throw new Error("Can't have a custom view type that references itself");
    l = fo(c, e, n, r);
  }
  return !a && l && (a = l.component), a ? {
    type: t,
    component: a,
    defaults: Object.assign(Object.assign({}, l ? l.defaults : {}), i ? i.rawOptions : {}),
    overrides: Object.assign(Object.assign({}, l ? l.overrides : {}), s ? s.rawOptions : {})
  } : null;
}
function Cl(t) {
  return Ot(t, Mv);
}
function Mv(t) {
  let e = typeof t == "function" ? { component: t } : t, { component: n } = e;
  return e.content ? n = Dl(e) : n && !(n.prototype instanceof xe) && (n = Dl(Object.assign(Object.assign({}, e), { content: n }))), {
    superType: e.type,
    component: n,
    rawOptions: e
    // includes type and component too :(
  };
}
function Dl(t) {
  return (e) => R(Pt.Consumer, null, (n) => R(rt, { elTag: "div", elClasses: Sf(n.viewSpec), renderProps: Object.assign(Object.assign({}, e), { nextDayThreshold: n.options.nextDayThreshold }), generatorName: void 0, customGenerator: t.content, classNameGenerator: t.classNames, didMount: t.didMount, willUnmount: t.willUnmount }));
}
function Nv(t, e, n, r) {
  let i = Cl(t), s = Cl(e.views), o = kv(i, s);
  return Ot(o, (a) => Ov(a, s, e, n, r));
}
function Ov(t, e, n, r, i) {
  let s = t.overrides.duration || t.defaults.duration || r.duration || n.duration, o = null, a = "", c = "", l = {};
  if (s && (o = Bv(s), o)) {
    let f = ro(o);
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
    buttonTextOverride: u(r) || u(n) || // constructor-specified buttonText lookup hash takes precedence
    t.overrides.buttonText,
    buttonTextDefault: u(i) || t.defaults.buttonText || u(tr) || t.type,
    // not DRY
    buttonTitleOverride: d(r) || d(n) || t.overrides.buttonHint,
    buttonTitleDefault: d(i) || t.defaults.buttonHint || d(tr)
    // will eventually fall back to buttonText
  };
}
let Rl = {};
function Bv(t) {
  let e = JSON.stringify(t), n = Rl[e];
  return n === void 0 && (n = me(t), Rl[e] = n), n;
}
function Pv(t, e) {
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      t = e.viewType;
  }
  return t;
}
function Hv(t, e) {
  switch (e.type) {
    case "SET_OPTION":
      return Object.assign(Object.assign({}, t), { [e.optionName]: e.rawOptionValue });
    default:
      return t;
  }
}
function Lv(t, e, n, r) {
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
function Fv(t, e, n) {
  let r = e ? e.activeRange : null;
  return Mf({}, qv(t, n), r, n);
}
function zv(t, e, n, r) {
  let i = n ? n.activeRange : null;
  switch (e.type) {
    case "ADD_EVENT_SOURCES":
      return Mf(t, e.sources, i, r);
    case "REMOVE_EVENT_SOURCE":
      return Wv(t, e.sourceId);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return n ? Nf(t, i, r) : t;
    case "FETCH_EVENT_SOURCES":
      return pa(t, e.sourceIds ? (
        // why no type?
        Ru(e.sourceIds)
      ) : Of(t, r), i, e.isRefetch || !1, r);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return $v(t, e.sourceId, e.fetchId, e.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return t;
  }
}
function Uv(t, e, n) {
  let r = e ? e.activeRange : null;
  return pa(t, Of(t, n), r, !0, n);
}
function If(t) {
  for (let e in t)
    if (t[e].isFetching)
      return !0;
  return !1;
}
function Mf(t, e, n, r) {
  let i = {};
  for (let s of e)
    i[s.sourceId] = s;
  return n && (i = Nf(i, n, r)), Object.assign(Object.assign({}, t), i);
}
function Wv(t, e) {
  return ln(t, (n) => n.sourceId !== e);
}
function Nf(t, e, n) {
  return pa(t, ln(t, (r) => jv(r, e, n)), e, !1, n);
}
function jv(t, e, n) {
  return Bf(t, n) ? !n.options.lazyFetching || !t.fetchRange || t.isFetching || // always cancel outdated in-progress fetches
  e.start < t.fetchRange.start || e.end > t.fetchRange.end : !t.latestFetchId;
}
function pa(t, e, n, r, i) {
  let s = {};
  for (let o in t) {
    let a = t[o];
    e[o] ? s[o] = Vv(a, n, r, i) : s[o] = a;
  }
  return s;
}
function Vv(t, e, n, r) {
  let { options: i, calendarApi: s } = r, o = r.pluginHooks.eventSourceDefs[t.sourceDefId], a = dn();
  return o.fetch({
    eventSource: t,
    range: e,
    isRefetch: n,
    context: r
  }, (c) => {
    let { rawEvents: l } = c;
    i.eventSourceSuccess && (l = i.eventSourceSuccess.call(s, l, c.response) || l), t.success && (l = t.success.call(s, l, c.response) || l), r.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: t.sourceId,
      fetchId: a,
      fetchRange: e,
      rawEvents: l
    });
  }, (c) => {
    let l = !1;
    i.eventSourceFailure && (i.eventSourceFailure.call(s, c), l = !0), t.failure && (t.failure(c), l = !0), l || console.warn(c.message, c), r.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: t.sourceId,
      fetchId: a,
      fetchRange: e,
      error: c
    });
  }), Object.assign(Object.assign({}, t), { isFetching: !0, latestFetchId: a });
}
function $v(t, e, n, r) {
  let i = t[e];
  return i && // not already removed
  n === i.latestFetchId ? Object.assign(Object.assign({}, t), { [e]: Object.assign(Object.assign({}, i), { isFetching: !1, fetchRange: r }) }) : t;
}
function Of(t, e) {
  return ln(t, (n) => Bf(n, e));
}
function qv(t, e) {
  let n = Cf(e), r = [].concat(t.eventSources || []), i = [];
  t.initialEvents && r.unshift(t.initialEvents), t.events && r.unshift(t.events);
  for (let s of r) {
    let o = Af(s, e, n);
    o && i.push(o);
  }
  return i;
}
function Bf(t, e) {
  return !e.pluginHooks.eventSourceDefs[t.sourceDefId].ignoreRange;
}
function Gv(t, e) {
  switch (e.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return e.selection;
    default:
      return t;
  }
}
function Yv(t, e) {
  switch (e.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return e.eventInstanceId;
    default:
      return t;
  }
}
function Qv(t, e) {
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
function Zv(t, e) {
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
function Xv(t, e, n, r, i) {
  let s = t.headerToolbar ? Tl(t.headerToolbar, t, e, n, r, i) : null, o = t.footerToolbar ? Tl(t.footerToolbar, t, e, n, r, i) : null;
  return { header: s, footer: o };
}
function Tl(t, e, n, r, i, s) {
  let o = {}, a = [], c = !1;
  for (let l in t) {
    let u = t[l], d = Kv(u, e, n, r, i, s);
    o[l] = d.widgets, a.push(...d.viewsWithButtons), c = c || d.hasTitle;
  }
  return { sectionWidgets: o, viewsWithButtons: a, hasTitle: c };
}
function Kv(t, e, n, r, i, s) {
  let o = e.direction === "rtl", a = e.customButtons || {}, c = n.buttonText || {}, l = e.buttonText || {}, u = n.buttonHints || {}, d = e.buttonHints || {}, f = t ? t.split(" ") : [], h = [], p = !1;
  return { widgets: f.map((b) => b.split(",").map((m) => {
    if (m === "title")
      return p = !0, { buttonName: m };
    let x, g, y, E, S, _;
    if (x = a[m])
      y = (C) => {
        x.click && x.click.call(C.target, C, C.target);
      }, (E = r.getCustomButtonIconClass(x)) || (E = r.getIconClass(m, o)) || (S = x.text), _ = x.hint || x.text;
    else if (g = i[m]) {
      h.push(m), y = () => {
        s.changeView(m);
      }, (S = g.buttonTextOverride) || (E = r.getIconClass(m, o)) || (S = g.buttonTextDefault);
      let C = g.buttonTextOverride || g.buttonTextDefault;
      _ = er(
        g.buttonTitleOverride || g.buttonTitleDefault || e.viewHint,
        [C, m],
        // view-name = buttonName
        C
      );
    } else if (s[m])
      if (y = () => {
        s[m]();
      }, (S = c[m]) || (E = r.getIconClass(m, o)) || (S = l[m]), m === "prevYear" || m === "nextYear") {
        let C = m === "prevYear" ? "prev" : "next";
        _ = er(u[C] || d[C], [
          l.year || "year",
          "year"
        ], l[m]);
      } else
        _ = (C) => er(u[m] || d[m], [
          l[C] || C,
          C
        ], l[m]);
    return { buttonName: m, buttonClick: y, buttonIcon: E, buttonText: S, buttonHint: _ };
  })), viewsWithButtons: h, hasTitle: p };
}
class Jv {
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
let em = {
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
const tm = Ht({
  name: "array-event-source",
  eventSourceDefs: [em]
});
let nm = {
  parseMeta(t) {
    return typeof t.events == "function" ? t.events : null;
  },
  fetch(t, e, n) {
    const { dateEnv: r } = t.context, i = t.eventSource.meta;
    jp(i.bind(null, Xu(t.range, r)), (s) => e({ rawEvents: s }), n);
  }
};
const rm = Ht({
  name: "func-event-source",
  eventSourceDefs: [nm]
}), im = {
  method: String,
  extraParams: L,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
let sm = {
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
    const { meta: r } = t.eventSource, i = am(r, t.range, t.context);
    Yg(r.method, r.url, i).then(([s, o]) => {
      e({ rawEvents: s, response: o });
    }, n);
  }
};
const om = Ht({
  name: "json-event-source",
  eventSourceRefiners: im,
  eventSourceDefs: [sm]
});
function am(t, e, n) {
  let { dateEnv: r, options: i } = n, s, o, a, c, l = {};
  return s = t.startParam, s == null && (s = i.startParam), o = t.endParam, o == null && (o = i.endParam), a = t.timeZoneParam, a == null && (a = i.timeZoneParam), typeof t.extraParams == "function" ? c = t.extraParams() : c = t.extraParams || {}, Object.assign(l, c), l[s] = r.formatIso(e.start), l[o] = r.formatIso(e.end), r.timeZone !== "local" && (l[a] = r.timeZone), l;
}
const lm = {
  daysOfWeek: L,
  startTime: me,
  endTime: me,
  duration: me,
  startRecur: L,
  endRecur: L
};
let cm = {
  parse(t, e) {
    if (t.daysOfWeek || t.startTime || t.endTime || t.startRecur || t.endRecur) {
      let n = {
        daysOfWeek: t.daysOfWeek || null,
        startTime: t.startTime || null,
        endTime: t.endTime || null,
        startRecur: t.startRecur ? e.createMarker(t.startRecur) : null,
        endRecur: t.endRecur ? e.createMarker(t.endRecur) : null
      }, r;
      return t.duration && (r = t.duration), !r && t.startTime && t.endTime && (r = Ch(t.endTime, t.startTime)), {
        allDayGuess: !t.startTime && !t.endTime,
        duration: r,
        typeData: n
        // doesn't need endTime anymore but oh well
      };
    }
    return null;
  },
  expand(t, e, n) {
    let r = un(e, { start: t.startRecur, end: t.endRecur });
    return r ? fm(t.daysOfWeek, t.startTime, r, n) : [];
  }
};
const um = Ht({
  name: "simple-recurring-event",
  recurringTypes: [cm],
  eventRefiners: lm
});
function fm(t, e, n, r) {
  let i = t ? Ru(t) : null, s = _e(n.start), o = n.end, a = [];
  for (; s < o; ) {
    let c;
    (!i || i[s.getUTCDay()]) && (e ? c = r.add(s, e) : c = s, a.push(c)), s = je(s, 1);
  }
  return a;
}
const dm = Ht({
  name: "change-handler",
  optionChangeHandlers: {
    events(t, e) {
      kl([t], e);
    },
    eventSources: kl
  }
});
function kl(t, e) {
  let n = Vo(e.getCurrentData().eventSources);
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
function hm(t, e) {
  e.emitter.trigger("datesSet", Object.assign(Object.assign({}, Xu(t.activeRange, e.dateEnv)), { view: e.viewApi }));
}
function pm(t, e) {
  let { emitter: n } = e;
  n.hasHandlers("eventsSet") && n.trigger("eventsSet", on(t, e));
}
const gm = [
  tm,
  rm,
  om,
  um,
  dm,
  Ht({
    name: "misc",
    isLoadingFuncs: [
      (t) => If(t.eventSources)
    ],
    propSetHandlers: {
      dateProfile: hm,
      eventStore: pm
    }
  })
];
class vm {
  constructor(e, n) {
    this.runTaskOption = e, this.drainedOption = n, this.queue = [], this.delayedRunner = new la(this.drain.bind(this));
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
function mm(t, e, n) {
  let r;
  return /^(year|month)$/.test(t.currentRangeUnit) ? r = t.currentRange : r = t.activeRange, n.formatRange(r.start, r.end, Ce(e.titleFormat || bm(t)), {
    isEndExclusive: t.isRangeAllDay,
    defaultSeparator: e.titleRangeSeparator
  });
}
function bm(t) {
  let { currentRangeUnit: e } = t;
  if (e === "year")
    return { year: "numeric" };
  if (e === "month")
    return { year: "numeric", month: "long" };
  let n = ti(t.currentRange.start, t.currentRange.end);
  return n !== null && n > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
class ym {
  constructor(e) {
    this.computeCurrentViewData = se(this._computeCurrentViewData), this.organizeRawLocales = se(_v), this.buildLocale = se(Tf), this.buildPluginHooks = Dv(), this.buildDateEnv = se(xm), this.buildTheme = se(wm), this.parseToolbars = se(Xv), this.buildViewSpecs = se(Nv), this.buildDateProfileGenerator = Ur(Em), this.buildViewApi = se(_m), this.buildViewUiProps = Ur(Cm), this.buildEventUiBySource = se(Sm, wt), this.buildEventUiBases = se(Am), this.parseContextBusinessHours = Ur(Dm), this.buildTitle = se(mm), this.emitter = new ns(), this.actionRunner = new vm(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.optionsForRefining = [], this.optionsForHandling = [], this.getCurrentData = () => this.data, this.dispatch = (f) => {
      this.actionRunner.request(f);
    }, this.props = e, this.actionRunner.pause();
    let n = {}, r = this.computeOptionsData(e.optionOverrides, n, e.calendarApi), i = r.calendarOptions.initialView || r.pluginHooks.initialView, s = this.computeCurrentViewData(i, r, e.optionOverrides, n);
    e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(s.options);
    let o = eg(r.calendarOptions, r.dateEnv), a = s.dateProfileGenerator.build(o);
    Nt(a.activeRange, o) || (o = a.currentRange.start);
    let c = {
      dateEnv: r.dateEnv,
      options: r.calendarOptions,
      pluginHooks: r.pluginHooks,
      calendarApi: e.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    };
    for (let f of r.pluginHooks.contextInit)
      f(c);
    let l = Fv(r.calendarOptions, a, c), u = {
      dynamicOptionOverrides: n,
      currentViewType: i,
      currentDate: o,
      dateProfile: a,
      businessHours: this.parseContextBusinessHours(c),
      eventSources: l,
      eventUiBases: {},
      eventStore: nt(),
      renderableEventStore: nt(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(c).selectionConfig
    }, d = Object.assign(Object.assign({}, c), u);
    for (let f of r.pluginHooks.reducers)
      Object.assign(u, f(null, null, d));
    Ws(u, c) && this.emitter.trigger("loading", !0), this.state = u, this.updateData(), this.actionRunner.resume();
  }
  resetOptions(e, n) {
    let { props: r } = this;
    n === void 0 ? r.optionOverrides = e : (r.optionOverrides = Object.assign(Object.assign({}, r.optionOverrides || {}), e), this.optionsForRefining.push(...n)), (n === void 0 || n.length) && this.actionRunner.request({
      type: "NOTHING"
    });
  }
  _handleAction(e) {
    let { props: n, state: r, emitter: i } = this, s = Hv(r.dynamicOptionOverrides, e), o = this.computeOptionsData(n.optionOverrides, s, n.calendarApi), a = Pv(r.currentViewType, e), c = this.computeCurrentViewData(a, o, n.optionOverrides, s);
    n.calendarApi.currentDataManager = this, i.setThisContext(n.calendarApi), i.setOptions(c.options);
    let l = {
      dateEnv: o.dateEnv,
      options: o.calendarOptions,
      pluginHooks: o.pluginHooks,
      calendarApi: n.calendarApi,
      dispatch: this.dispatch,
      emitter: i,
      getCurrentData: this.getCurrentData
    }, { currentDate: u, dateProfile: d } = r;
    this.data && this.data.dateProfileGenerator !== c.dateProfileGenerator && (d = c.dateProfileGenerator.build(u)), u = Jp(u, e), d = Lv(d, e, u, c.dateProfileGenerator), (e.type === "PREV" || // TODO: move this logic into DateProfileGenerator
    e.type === "NEXT" || // "
    !Nt(d.currentRange, u)) && (u = d.currentRange.start);
    let f = zv(r.eventSources, e, d, l), h = Pg(r.eventStore, e, f, d, l), v = If(f) && !c.options.progressiveEventRendering && r.renderableEventStore || h, { eventUiSingleBase: b, selectionConfig: m } = this.buildViewUiProps(l), x = this.buildEventUiBySource(f), g = this.buildEventUiBases(v.defs, b, x), y = {
      dynamicOptionOverrides: s,
      currentViewType: a,
      currentDate: u,
      dateProfile: d,
      eventSources: f,
      eventStore: h,
      renderableEventStore: v,
      selectionConfig: m,
      eventUiBases: g,
      businessHours: this.parseContextBusinessHours(l),
      dateSelection: Gv(r.dateSelection, e),
      eventSelection: Yv(r.eventSelection, e),
      eventDrag: Qv(r.eventDrag, e),
      eventResize: Zv(r.eventResize, e)
    }, E = Object.assign(Object.assign({}, l), y);
    for (let C of o.pluginHooks.reducers)
      Object.assign(y, C(r, e, E));
    let S = Ws(r, l), _ = Ws(y, l);
    !S && _ ? i.trigger("loading", !0) : S && !_ && i.trigger("loading", !1), this.state = y, n.onAction && n.onAction(e);
  }
  updateData() {
    let { props: e, state: n } = this, r = this.data, i = this.computeOptionsData(e.optionOverrides, n.dynamicOptionOverrides, e.calendarApi), s = this.computeCurrentViewData(n.currentViewType, i, e.optionOverrides, n.dynamicOptionOverrides), o = this.data = Object.assign(Object.assign(Object.assign({ viewTitle: this.buildTitle(n.dateProfile, s.options, i.dateEnv), calendarApi: e.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, i), s), n), a = i.pluginHooks.optionChangeHandlers, c = r && r.calendarOptions, l = i.calendarOptions;
    if (c && c !== l) {
      c.timeZone !== l.timeZone && (n.eventSources = o.eventSources = Uv(o.eventSources, n.dateProfile, o), n.eventStore = o.eventStore = _l(o.eventStore, r.dateEnv, o.dateEnv), n.renderableEventStore = o.renderableEventStore = _l(o.renderableEventStore, r.dateEnv, o.dateEnv));
      for (let u in a)
        (this.optionsForHandling.indexOf(u) !== -1 || c[u] !== l[u]) && a[u](l[u], o);
    }
    this.optionsForHandling = [], e.onData && e.onData(o);
  }
  computeOptionsData(e, n, r) {
    if (!this.optionsForRefining.length && e === this.stableOptionOverrides && n === this.stableDynamicOptionOverrides)
      return this.stableCalendarOptionsData;
    let { refinedOptions: i, pluginHooks: s, localeDefaults: o, availableLocaleData: a, extra: c } = this.processRawCalendarOptions(e, n);
    Il(c);
    let l = this.buildDateEnv(i.timeZone, i.locale, i.weekNumberCalculation, i.firstDay, i.weekText, s, a, i.defaultRangeSeparator), u = this.buildViewSpecs(s.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides, o), d = this.buildTheme(i, s), f = this.parseToolbars(i, this.stableOptionOverrides, d, u, r);
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
  processRawCalendarOptions(e, n) {
    let { locales: r, locale: i } = Os([
      tr,
      e,
      n
    ]), s = this.organizeRawLocales(r), o = s.map, a = this.buildLocale(i || s.defaultCode, o).options, c = this.buildPluginHooks(e.plugins || [], gm), l = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, dl), hl), pl), c.listenerRefiners), c.optionRefiners), u = {}, d = Os([
      tr,
      a,
      e,
      n
    ]), f = {}, h = this.currentCalendarOptionsInput, p = this.currentCalendarOptionsRefined, v = !1;
    for (let b in d)
      this.optionsForRefining.indexOf(b) === -1 && (d[b] === h[b] || nn[b] && b in h && nn[b](h[b], d[b])) ? f[b] = p[b] : l[b] ? (f[b] = l[b](d[b]), v = !0) : u[b] = h[b];
    return v && (this.currentCalendarOptionsInput = d, this.currentCalendarOptionsRefined = f, this.stableOptionOverrides = e, this.stableDynamicOptionOverrides = n), this.optionsForHandling.push(...this.optionsForRefining), this.optionsForRefining = [], {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks: c,
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
    Il(a);
    let c = this.buildDateProfileGenerator({
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
    }), l = this.buildViewApi(e, this.getCurrentData, n.dateEnv);
    return { viewSpec: s, options: o, dateProfileGenerator: c, viewApi: l };
  }
  processRawViewOptions(e, n, r, i, s) {
    let o = Os([
      tr,
      e.optionDefaults,
      r,
      i,
      e.optionOverrides,
      s
    ]), a = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, dl), hl), pl), cp), n.listenerRefiners), n.optionRefiners), c = {}, l = this.currentViewOptionsInput, u = this.currentViewOptionsRefined, d = !1, f = {};
    for (let h in o)
      o[h] === l[h] || nn[h] && nn[h](o[h], l[h]) ? c[h] = u[h] : (o[h] === this.currentCalendarOptionsInput[h] || nn[h] && nn[h](o[h], this.currentCalendarOptionsInput[h]) ? h in this.currentCalendarOptionsRefined && (c[h] = this.currentCalendarOptionsRefined[h]) : a[h] ? c[h] = a[h](o[h]) : f[h] = o[h], d = !0);
    return d && (this.currentViewOptionsInput = o, this.currentViewOptionsRefined = c), {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: f
    };
  }
}
function xm(t, e, n, r, i, s, o, a) {
  let c = Tf(e || o.defaultCode, o.map);
  return new Eg({
    calendarSystem: "gregory",
    timeZone: t,
    namedTimeZoneImpl: s.namedTimeZonedImpl,
    locale: c,
    weekNumberCalculation: n,
    firstDay: r,
    weekText: i,
    cmdFormatter: s.cmdFormatter,
    defaultSeparator: a
  });
}
function wm(t, e) {
  let n = e.themeClasses[t.themeSystem] || Qt;
  return new n(t);
}
function Em(t) {
  let e = t.dateProfileGeneratorClass || ju;
  return new e(t);
}
function _m(t, e, n) {
  return new Jv(t, e, n);
}
function Sm(t) {
  return Ot(t, (e) => e.ui);
}
function Am(t, e, n) {
  let r = { "": e };
  for (let i in t) {
    let s = t[i];
    s.sourceId && n[s.sourceId] && (r[i] = n[s.sourceId]);
  }
  return r;
}
function Cm(t) {
  let { options: e } = t;
  return {
    eventUiSingleBase: si({
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
    selectionConfig: si({
      constraint: e.selectConstraint,
      overlap: typeof e.selectOverlap == "boolean" ? e.selectOverlap : void 0,
      allow: e.selectAllow
    }, t)
  };
}
function Ws(t, e) {
  for (let n of e.pluginHooks.isLoadingFuncs)
    if (n(t))
      return !0;
  return !1;
}
function Dm(t) {
  return wp(t.options.businessHours, t);
}
function Il(t, e) {
  for (let n in t)
    console.warn(`Unknown option '${n}'` + (e ? ` for view '${e}'` : ""));
}
class Rm extends xe {
  render() {
    let e = this.props.widgetGroups.map((n) => this.renderWidgetGroup(n));
    return R("div", { className: "fc-toolbar-chunk" }, ...e);
  }
  renderWidgetGroup(e) {
    let { props: n } = this, { theme: r } = this.context, i = [], s = !0;
    for (let o of e) {
      let { buttonName: a, buttonClick: c, buttonText: l, buttonIcon: u, buttonHint: d } = o;
      if (a === "title")
        s = !1, i.push(R("h2", { className: "fc-toolbar-title", id: n.titleId }, n.title));
      else {
        let f = a === n.activeButton, h = !n.isTodayEnabled && a === "today" || !n.isPrevEnabled && a === "prev" || !n.isNextEnabled && a === "next", p = [`fc-${a}-button`, r.getClass("button")];
        f && p.push(r.getClass("buttonActive")), i.push(R("button", { type: "button", title: typeof d == "function" ? d(n.navUnit) : d, disabled: h, "aria-pressed": f, className: p.join(" "), onClick: c }, l || (u ? R("span", { className: u }) : "")));
      }
    }
    if (i.length > 1) {
      let o = s && r.getClass("buttonGroup") || "";
      return R("div", { className: o }, ...i);
    }
    return i[0];
  }
}
class Ml extends xe {
  render() {
    let { model: e, extraClassName: n } = this.props, r = !1, i, s, o = e.sectionWidgets, a = o.center;
    return o.left ? (r = !0, i = o.left) : i = o.start, o.right ? (r = !0, s = o.right) : s = o.end, R(
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
    return R(Rm, { key: e, widgetGroups: n, title: r.title, navUnit: r.navUnit, activeButton: r.activeButton, isTodayEnabled: r.isTodayEnabled, isPrevEnabled: r.isPrevEnabled, isNextEnabled: r.isNextEnabled, titleId: r.titleId });
  }
}
class Tm extends xe {
  constructor() {
    super(...arguments), this.state = {
      availableWidth: null
    }, this.handleEl = (e) => {
      this.el = e, Bt(this.props.elRef, e), this.updateAvailableWidth();
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
    return r ? n.availableWidth !== null ? s = n.availableWidth / r : o = `${1 / r * 100}%` : s = e.height || "", R("div", { "aria-labelledby": e.labeledById, ref: this.handleEl, className: i.join(" "), style: { height: s, paddingBottom: o } }, e.children);
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
class km extends Hn {
  constructor(e) {
    super(e), this.handleSegClick = (n, r) => {
      let { component: i } = this, { context: s } = i, o = Mn(r);
      if (o && // might be the <div> surrounding the more link
      i.isValidSegDownEl(n.target)) {
        let a = We(n.target, ".fc-event-forced-url"), c = a ? a.querySelector("a[href]").href : "";
        s.emitter.trigger("eventClick", {
          el: r,
          event: new Ae(i.context, o.eventRange.def, o.eventRange.instance),
          jsEvent: n,
          view: s.viewApi
        }), c && !n.defaultPrevented && (window.location.href = c);
      }
    }, this.destroy = Au(
      e.el,
      "click",
      ".fc-event",
      // on both fg and bg events
      this.handleSegClick
    );
  }
}
class Im extends Hn {
  constructor(e) {
    super(e), this.handleEventElRemove = (n) => {
      n === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl);
    }, this.handleSegEnter = (n, r) => {
      Mn(r) && (this.currentSegEl = r, this.triggerEvent("eventMouseEnter", n, r));
    }, this.handleSegLeave = (n, r) => {
      this.currentSegEl && (this.currentSegEl = null, this.triggerEvent("eventMouseLeave", n, r));
    }, this.removeHoverListeners = fh(
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
    let { component: i } = this, { context: s } = i, o = Mn(r);
    (!n || i.isValidSegDownEl(n.target)) && s.emitter.trigger(e, {
      el: r,
      event: new Ae(s, o.eventRange.def, o.eventRange.instance),
      jsEvent: n,
      view: s.viewApi
    });
  }
}
class Mm extends pn {
  constructor() {
    super(...arguments), this.buildViewContext = se(Zp), this.buildViewPropTransformers = se(Om), this.buildToolbarProps = se(Nm), this.headerRef = Ze(), this.footerRef = Ze(), this.interactionsStore = {}, this.state = {
      viewLabelId: Ki()
    }, this.registerInteractiveComponent = (e, n) => {
      let r = Ag(e, n), o = [
        km,
        Im
      ].concat(this.props.pluginHooks.componentInteractions).map((a) => new a(r));
      this.interactionsStore[e.uid] = o, co[e.uid] = r;
    }, this.unregisterInteractiveComponent = (e) => {
      let n = this.interactionsStore[e.uid];
      if (n) {
        for (let r of n)
          r.destroy();
        delete this.interactionsStore[e.uid];
      }
      delete co[e.uid];
    }, this.resizeRunner = new la(() => {
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
      fr(e.options.now, e.dateEnv),
      // TODO: use NowTimer????
      e.viewTitle
    ), s = !1, o = "", a;
    e.isHeightAuto || e.forPrint ? o = "" : r.height != null ? s = !0 : r.contentHeight != null ? o = r.contentHeight : a = Math.max(r.aspectRatio, 0.5);
    let c = this.buildViewContext(e.viewSpec, e.viewApi, e.options, e.dateProfileGenerator, e.dateEnv, e.theme, e.pluginHooks, e.dispatch, e.getCurrentData, e.emitter, e.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), l = n.header && n.header.hasTitle ? this.state.viewLabelId : "";
    return R(
      Pt.Provider,
      { value: c },
      n.header && R(Ml, Object.assign({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: n.header, titleId: l }, i)),
      R(
        Tm,
        { liquid: s, height: o, aspectRatio: a, labeledById: l },
        this.renderView(e),
        this.buildAppendContent()
      ),
      n.footer && R(Ml, Object.assign({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: n.footer, titleId: "" }, i))
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
    return R(Se, {}, ...n);
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
    return R(o, Object.assign({}, i));
  }
}
function Nm(t, e, n, r, i, s) {
  let o = n.build(i, void 0, !1), a = n.buildPrev(e, r, !1), c = n.buildNext(e, r, !1);
  return {
    title: s,
    activeButton: t.type,
    navUnit: t.singleUnit,
    isTodayEnabled: o.isValid && !Nt(e.currentRange, i),
    isPrevEnabled: a.isValid,
    isNextEnabled: c.isValid
  };
}
function Om(t) {
  return t.map((e) => new e());
}
class Bm extends yv {
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
        ml(() => {
          sr(R(Dg, { options: r.calendarOptions, theme: r.theme, emitter: r.emitter }, (i, s, o, a) => (this.setClassNames(i), this.setHeight(s), R(
            of.Provider,
            { value: this.customContentRenderId },
            R(Mm, Object.assign({ isHeightAuto: o, forPrint: a }, r))
          ))), this.el);
        });
      } else
        this.isRendered && (this.isRendered = !1, sr(null, this.el), this.setClassNames([]), this.setHeight(""));
    }, nh(e), this.el = e, this.renderRunner = new la(this.handleRenderRequest), new ym({
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
    ml(() => {
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
    if (!qt(e, this.currentClassNames)) {
      let { classList: n } = this.el;
      for (let r of this.currentClassNames)
        n.remove(r);
      for (let r of e)
        n.add(r);
      this.currentClassNames = e;
    }
  }
  setHeight(e) {
    _u(this.el, "height", e);
  }
}
const Pm = {
  headerToolbar: !0,
  footerToolbar: !0,
  events: !0,
  eventSources: !0,
  resources: !0
}, Hm = Pn({
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
        customRenderingMetaMap: Um(this.$slots),
        handleCustomRendering: this.handleCustomRendering
      };
    }
  },
  render() {
    const t = [];
    for (const e of this.customRenderingMap.values())
      t.push(Cn(Fm, {
        key: e.id,
        customRendering: e
      }));
    return Cn("div", {
      // when renderId is changed, Vue will trigger a real-DOM async rerender, calling beforeUpdate/updated
      attrs: { "data-fc-render-id": this.renderId }
    }, Cn(tu, t));
  },
  mounted() {
    const t = new wv();
    this.handleCustomRendering = t.handle.bind(t);
    const e = this.buildOptions(this.options), n = new Bm(this.$el, e);
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
  watch: zm()
}), Lm = Hm, Fm = Pn({
  props: {
    customRendering: Object
  },
  render() {
    const t = this.customRendering, e = typeof t.generatorMeta == "function" ? t.generatorMeta(t.renderProps) : (
      // vue-normalized slot function
      t.generatorMeta
    );
    return Cn(y0, { to: t.containerEl }, e);
  }
});
function zm() {
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
  for (let e in Pm)
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
function Um(t) {
  const e = {};
  for (const n in t)
    e[Wm(n)] = t[n];
  return e;
}
function Wm(t) {
  return t.split("-").map((e, n) => n ? jm(e) : e).join("");
}
function jm(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
var Vm = {
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
}, $m = ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';
Lo($m);
function Mr(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n[r] = [];
  for (let r of t)
    n[r.row].push(r);
  return n;
}
function Nr(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n[r] = [];
  for (let r of t)
    n[r.firstCol].push(r);
  return n;
}
function Nl(t, e) {
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
const Pf = Ce({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function Hf(t) {
  let { display: e } = t.eventRange.ui;
  return e === "list-item" || e === "auto" && !t.eventRange.def.allDay && t.firstCol === t.lastCol && // can't be multi-day
  t.isStart && // "
  t.isEnd;
}
class Lf extends xe {
  render() {
    let { props: e } = this;
    return R(bf, Object.assign({}, e, { elClasses: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: Pf, defaultDisplayEventEnd: e.defaultDisplayEventEnd, disableResizing: !e.seg.eventRange.def.allDay }));
  }
}
class Ff extends xe {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { seg: i } = e, s = r.eventTimeFormat || Pf, o = Yu(i, s, n, !0, e.defaultDisplayEventEnd);
    return R(ua, Object.assign({}, e, { elTag: "a", elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"], elAttrs: Zu(e.seg, n), defaultGenerator: qm, timeText: o, isResizing: !1, isDateSelecting: !1 }));
  }
}
function qm(t) {
  return R(
    Se,
    null,
    R("div", { className: "fc-daygrid-event-dot", style: { borderColor: t.borderColor || t.backgroundColor } }),
    t.timeText && R("div", { className: "fc-event-time" }, t.timeText),
    R("div", { className: "fc-event-title" }, t.event.title || R(Se, null, " "))
  );
}
class Gm extends xe {
  constructor() {
    super(...arguments), this.compileSegs = se(Ym);
  }
  render() {
    let { props: e } = this, { allSegs: n, invisibleSegs: r } = this.compileSegs(e.singlePlacements);
    return R(Ef, { elClasses: ["fc-daygrid-more-link"], dateProfile: e.dateProfile, todayRange: e.todayRange, allDayDate: e.allDayDate, moreCnt: e.moreCnt, allSegs: n, hiddenSegs: r, alignmentElRef: e.alignmentElRef, alignGridTop: e.alignGridTop, extraDateSpan: e.extraDateSpan, popoverContent: () => {
      let i = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
      return R(Se, null, n.map((s) => {
        let o = s.eventRange.instance.instanceId;
        return R("div", { className: "fc-daygrid-event-harness", key: o, style: {
          visibility: i[o] ? "hidden" : ""
        } }, Hf(s) ? R(Ff, Object.assign({ seg: s, isDragging: !1, isSelected: o === e.eventSelection, defaultDisplayEventEnd: !1 }, $t(s, e.todayRange))) : R(Lf, Object.assign({ seg: s, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: o === e.eventSelection, defaultDisplayEventEnd: !1 }, $t(s, e.todayRange))));
      }));
    } });
  }
}
function Ym(t) {
  let e = [], n = [];
  for (let r of t)
    e.push(r.seg), r.isVisible || n.push(r.seg);
  return { allSegs: e, invisibleSegs: n };
}
const Qm = Ce({ week: "narrow" });
class Zm extends St {
  constructor() {
    super(...arguments), this.rootElRef = Ze(), this.state = {
      dayNumberId: Ki()
    }, this.handleRootEl = (e) => {
      Bt(this.rootElRef, e), Bt(this.props.elRef, e);
    };
  }
  render() {
    let { context: e, props: n, state: r, rootElRef: i } = this, { options: s, dateEnv: o } = e, { date: a, dateProfile: c } = n;
    const l = n.showDayNumber && Km(a, c.currentRange, o);
    return R(da, { elTag: "td", elRef: this.handleRootEl, elClasses: [
      "fc-daygrid-day",
      ...n.extraClassNames || []
    ], elAttrs: Object.assign(Object.assign(Object.assign({}, n.extraDataAttrs), n.showDayNumber ? { "aria-labelledby": r.dayNumberId } : {}), { role: "gridcell" }), defaultGenerator: Xm, date: a, dateProfile: c, todayRange: n.todayRange, showDayNumber: n.showDayNumber, isMonthStart: l, extraRenderProps: n.extraRenderProps }, (u, d) => R(
      "div",
      { ref: n.innerElRef, className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", style: { minHeight: n.minHeight } },
      n.showWeekNumber && R(wf, { elTag: "a", elClasses: ["fc-daygrid-week-number"], elAttrs: oi(e, a, "week"), date: a, defaultFormat: Qm }),
      !d.isDisabled && (n.showDayNumber || ha(s) || n.forceDayTop) ? R(
        "div",
        { className: "fc-daygrid-day-top" },
        R(u, { elTag: "a", elClasses: [
          "fc-daygrid-day-number",
          l && "fc-daygrid-month-start"
        ], elAttrs: Object.assign(Object.assign({}, oi(e, a)), { id: r.dayNumberId }) })
      ) : n.showDayNumber ? (
        // for creating correct amount of space (see issue #7162)
        R(
          "div",
          { className: "fc-daygrid-day-top", style: { visibility: "hidden" } },
          R("a", { className: "fc-daygrid-day-number" }, " ")
        )
      ) : void 0,
      R(
        "div",
        { className: "fc-daygrid-day-events", ref: n.fgContentElRef },
        n.fgContent,
        R(
          "div",
          { className: "fc-daygrid-day-bottom", style: { marginTop: n.moreMarginTop } },
          R(Gm, { allDayDate: a, singlePlacements: n.singlePlacements, moreCnt: n.moreCnt, alignmentElRef: i, alignGridTop: !n.showDayNumber, extraDateSpan: n.extraDateSpan, dateProfile: n.dateProfile, eventSelection: n.eventSelection, eventDrag: n.eventDrag, eventResize: n.eventResize, todayRange: n.todayRange })
        )
      ),
      R("div", { className: "fc-daygrid-day-bg" }, n.bgContent)
    ));
  }
}
function Xm(t) {
  return t.dayNumberText || R(Se, null, " ");
}
function Km(t, e, n) {
  const { start: r, end: i } = e, s = Gt(i, -1), o = n.getYear(r), a = n.getMonth(r), c = n.getYear(s), l = n.getMonth(s);
  return !(o === c && a === l) && // first date in current view?
  (t.valueOf() === r.valueOf() || // a month-start that's within the current range?
  n.getDay(t) === 1 && t.valueOf() < i.valueOf());
}
function Jm(t, e, n, r, i, s, o) {
  let a = new nb();
  a.allowReslicing = !0, a.strictOrder = r, e === !0 || n === !0 ? (a.maxCoord = s, a.hiddenConsumes = !0) : typeof e == "number" ? a.maxStackCnt = e : typeof n == "number" && (a.maxStackCnt = n, a.hiddenConsumes = !0);
  let c = [], l = [];
  for (let m = 0; m < t.length; m += 1) {
    let x = t[m], { instanceId: g } = x.eventRange.instance, y = i[g];
    y != null ? c.push({
      index: m,
      thickness: y,
      span: {
        start: x.firstCol,
        end: x.lastCol + 1
      }
    }) : l.push(x);
  }
  let u = a.addSegs(c), d = a.toRects(), { singleColPlacements: f, multiColPlacements: h, leftoverMargins: p } = eb(d, t, o), v = [], b = [];
  for (let m of l) {
    h[m.firstCol].push({
      seg: m,
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let x = m.firstCol; x <= m.lastCol; x += 1)
      f[x].push({
        seg: Tn(m, x, x + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let m = 0; m < o.length; m += 1)
    v.push(0);
  for (let m of u) {
    let x = t[m.index], g = m.span;
    h[g.start].push({
      seg: Tn(x, g.start, g.end, o),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let y = g.start; y < g.end; y += 1)
      v[y] += 1, f[y].push({
        seg: Tn(x, y, y + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let m = 0; m < o.length; m += 1)
    b.push(p[m]);
  return { singleColPlacements: f, multiColPlacements: h, moreCnts: v, moreMarginTops: b };
}
function eb(t, e, n) {
  let r = tb(t, n.length), i = [], s = [], o = [];
  for (let a = 0; a < n.length; a += 1) {
    let c = r[a], l = [], u = 0, d = 0;
    for (let h of c) {
      let p = e[h.index];
      l.push({
        seg: Tn(p, a, a + 1, n),
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
        seg: Tn(p, h.span.start, h.span.end, n),
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: h.levelCoord,
        marginTop: 0
      })) : b && (f.push({
        seg: Tn(p, h.span.start, h.span.end, n),
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
function tb(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n.push([]);
  for (let r of t)
    for (let i = r.span.start; i < r.span.end; i += 1)
      n[i].push(r);
  return n;
}
function Tn(t, e, n, r) {
  if (t.firstCol === e && t.lastCol === n - 1)
    return t;
  let i = t.eventRange, s = i.range, o = un(s, {
    start: r[e].date,
    end: je(r[n - 1].date, 1)
  });
  return Object.assign(Object.assign({}, t), { firstCol: e, lastCol: n - 1, eventRange: {
    def: i.def,
    ui: Object.assign(Object.assign({}, i.ui), { durationEditable: !1 }),
    instance: i.instance,
    range: o
  }, isStart: t.isStart && o.start.valueOf() === s.start.valueOf(), isEnd: t.isEnd && o.end.valueOf() === s.end.valueOf() });
}
class nb extends ef {
  constructor() {
    super(...arguments), this.hiddenConsumes = !1, this.forceHidden = {};
  }
  addSegs(e) {
    const n = super.addSegs(e), { entriesByLevel: r } = this, i = (s) => !this.forceHidden[an(s)];
    for (let s = 0; s < r.length; s += 1)
      r[s] = r[s].filter(i);
    return n;
  }
  handleInvalidInsertion(e, n, r) {
    const { entriesByLevel: i, forceHidden: s } = this, { touchingEntry: o, touchingLevel: a, touchingLateral: c } = e;
    if (this.hiddenConsumes && o) {
      const l = an(o);
      if (!s[l])
        if (this.allowReslicing) {
          const u = Object.assign(Object.assign({}, o), { span: ia(o.span, n.span) }), d = an(u);
          s[d] = !0, i[a][c] = u, this.splitEntry(o, n, r);
        } else
          s[l] = !0, r.push(o);
    }
    return super.handleInvalidInsertion(e, n, r);
  }
}
class zf extends St {
  constructor() {
    super(...arguments), this.cellElRefs = new kt(), this.frameElRefs = new kt(), this.fgElRefs = new kt(), this.segHarnessRefs = new kt(), this.rootElRef = Ze(), this.state = {
      framePositions: null,
      maxContentHeight: null,
      eventInstanceHeights: {}
    }, this.handleResize = (e) => {
      e && this.updateSizing(!0);
    };
  }
  render() {
    let { props: e, state: n, context: r } = this, { options: i } = r, s = e.cells.length, o = Nr(e.businessHourSegs, s), a = Nr(e.bgEventSegs, s), c = Nr(this.getHighlightSegs(), s), l = Nr(this.getMirrorSegs(), s), { singleColPlacements: u, multiColPlacements: d, moreCnts: f, moreMarginTops: h } = Jm(Gu(e.fgEventSegs, i.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, i.eventOrderStrict, n.eventInstanceHeights, n.maxContentHeight, e.cells), p = (
      // TODO: messy way to compute this
      e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}
    );
    return R(
      "tr",
      { ref: this.rootElRef, role: "row" },
      e.renderIntro && e.renderIntro(),
      e.cells.map((v, b) => {
        let m = this.renderFgSegs(b, e.forPrint ? u[b] : d[b], e.todayRange, p), x = this.renderFgSegs(b, rb(l[b], d), e.todayRange, {}, !!e.eventDrag, !!e.eventResize, !1);
        return R(Zm, { key: v.key, elRef: this.cellElRefs.createRef(v.key), innerElRef: this.frameElRefs.createRef(v.key), dateProfile: e.dateProfile, date: v.date, showDayNumber: e.showDayNumbers, showWeekNumber: e.showWeekNumbers && b === 0, forceDayTop: e.showWeekNumbers, todayRange: e.todayRange, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, extraRenderProps: v.extraRenderProps, extraDataAttrs: v.extraDataAttrs, extraClassNames: v.extraClassNames, extraDateSpan: v.extraDateSpan, moreCnt: f[b], moreMarginTop: h[b], singlePlacements: u[b], fgContentElRef: this.fgElRefs.createRef(v.key), fgContent: (
          // Fragment scopes the keys
          R(
            Se,
            null,
            R(Se, null, m),
            R(Se, null, x)
          )
        ), bgContent: (
          // Fragment scopes the keys
          R(
            Se,
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
  componentDidUpdate(e, n) {
    let r = this.props;
    this.updateSizing(!wt(e, r));
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
    let { context: c } = this, { eventSelection: l } = this.props, { framePositions: u } = this.state, d = this.props.cells.length === 1, f = s || o || a, h = [];
    if (u)
      for (let p of n) {
        let { seg: v } = p, { instanceId: b } = v.eventRange.instance, m = b + ":" + e, x = p.isVisible && !i[b], g = p.isAbsolute, y = "", E = "";
        g && (c.isRtl ? (E = 0, y = u.lefts[v.lastCol] - u.lefts[v.firstCol]) : (y = 0, E = u.rights[v.firstCol] - u.rights[v.lastCol])), h.push(R("div", { className: "fc-daygrid-event-harness" + (g ? " fc-daygrid-event-harness-abs" : ""), key: m, ref: f ? null : this.segHarnessRefs.createRef(m), style: {
          visibility: x ? "" : "hidden",
          marginTop: g ? "" : p.marginTop,
          top: g ? p.absoluteTop : "",
          left: y,
          right: E
        } }, Hf(v) ? R(Ff, Object.assign({ seg: v, isDragging: s, isSelected: b === l, defaultDisplayEventEnd: d }, $t(v, r))) : R(Lf, Object.assign({ seg: v, isDragging: s, isResizing: o, isDateSelecting: a, isSelected: b === l, defaultDisplayEventEnd: d }, $t(v, r)))));
      }
    return h;
  }
  renderFillSegs(e, n) {
    let { isRtl: r } = this.context, { todayRange: i } = this.props, { framePositions: s } = this.state, o = [];
    if (s)
      for (let a of e) {
        let c = r ? {
          right: 0,
          left: s.lefts[a.lastCol] - s.lefts[a.firstCol]
        } : {
          left: 0,
          right: s.rights[a.firstCol] - s.rights[a.lastCol]
        };
        o.push(R("div", { key: Qu(a.eventRange), className: "fc-daygrid-bg-harness", style: c }, n === "bg-event" ? R(yf, Object.assign({ seg: a }, $t(a, i))) : xf(n)));
      }
    return R(Se, {}, ...o);
  }
  updateSizing(e) {
    let { props: n, state: r, frameElRefs: i } = this;
    if (!n.forPrint && n.clientWidth !== null) {
      if (e) {
        let c = n.cells.map((l) => i.currentMap[l.key]);
        if (c.length) {
          let l = this.rootElRef.current, u = new In(
            l,
            c,
            !0,
            // isHorizontal
            !1
          );
          (!r.framePositions || !r.framePositions.similarTo(u)) && this.setState({
            framePositions: new In(
              l,
              c,
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
zf.addStateEquality({
  eventInstanceHeights: wt
});
function rb(t, e) {
  if (!t.length)
    return [];
  let n = ib(e);
  return t.map((r) => ({
    seg: r,
    isVisible: !0,
    isAbsolute: !0,
    absoluteTop: n[r.eventRange.instance.instanceId],
    marginTop: 0
  }));
}
function ib(t) {
  let e = {};
  for (let n of t)
    for (let r of n)
      e[r.seg.eventRange.instance.instanceId] = r.absoluteTop;
  return e;
}
class sb extends St {
  constructor() {
    super(...arguments), this.splitBusinessHourSegs = se(Mr), this.splitBgEventSegs = se(Mr), this.splitFgEventSegs = se(Mr), this.splitDateSelectionSegs = se(Mr), this.splitEventDrag = se(Nl), this.splitEventResize = se(Nl), this.rowRefs = new kt();
  }
  render() {
    let { props: e, context: n } = this, r = e.cells.length, i = this.splitBusinessHourSegs(e.businessHourSegs, r), s = this.splitBgEventSegs(e.bgEventSegs, r), o = this.splitFgEventSegs(e.fgEventSegs, r), a = this.splitDateSelectionSegs(e.dateSelectionSegs, r), c = this.splitEventDrag(e.eventDrag, r), l = this.splitEventResize(e.eventResize, r), u = r >= 7 && e.clientWidth ? e.clientWidth / n.options.aspectRatio / 6 : null;
    return R(dr, { unit: "day" }, (d, f) => R(Se, null, e.cells.map((h, p) => R(zf, {
      ref: this.rowRefs.createRef(p),
      key: h.length ? h[0].date.toISOString() : p,
      showDayNumbers: r > 1,
      showWeekNumbers: e.showWeekNumbers,
      todayRange: f,
      dateProfile: e.dateProfile,
      cells: h,
      renderIntro: e.renderRowIntro,
      businessHourSegs: i[p],
      eventSelection: e.eventSelection,
      bgEventSegs: s[p].filter(ob),
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
    this.rowPositions = new In(
      this.rootEl,
      this.rowRefs.collect().map((e) => e.getCellEls()[0]),
      // first cell el in each row. TODO: not optimal
      !1,
      !0
    ), this.colPositions = new In(
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
    let r = this.props.cells[e][n].date, i = je(r, 1);
    return { start: r, end: i };
  }
}
function ob(t) {
  return t.eventRange.def.allDay;
}
class ab extends St {
  constructor() {
    super(...arguments), this.elRef = Ze(), this.needsScrollReset = !1;
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
    return R(
      "div",
      { ref: this.elRef, className: o.join(" "), style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: e.clientWidth,
        minWidth: e.tableMinWidth
      } },
      R(
        "table",
        { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
          width: e.clientWidth,
          minWidth: e.tableMinWidth,
          height: i ? e.clientHeight : ""
        } },
        e.colGroupNode,
        R(
          "tbody",
          { role: "presentation" },
          R(sb, { dateProfile: e.dateProfile, cells: e.cells, renderRowIntro: e.renderRowIntro, showWeekNumbers: e.showWeekNumbers, clientWidth: e.clientWidth, clientHeight: e.clientHeight, businessHourSegs: e.businessHourSegs, bgEventSegs: e.bgEventSegs, fgEventSegs: e.fgEventSegs, dateSelectionSegs: e.dateSelectionSegs, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, dayMaxEvents: r, dayMaxEventRows: n, forPrint: e.forPrint, isHitComboAllowed: e.isHitComboAllowed })
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
      const e = lb(this.elRef.current, this.props.dateProfile);
      if (e) {
        const n = e.closest(".fc-daygrid-body"), r = n.closest(".fc-scroller"), i = e.getBoundingClientRect().top - n.getBoundingClientRect().top;
        r.scrollTop = i ? i + 1 : 0;
      }
      this.needsScrollReset = !1;
    }
  }
}
function lb(t, e) {
  let n;
  return e.currentRangeUnit.match(/year|month/) && (n = t.querySelector(`[data-date="${qh(e.currentDate)}-01"]`)), n || (n = t.querySelector(`[data-date="${$o(e.currentDate)}"]`)), n;
}
class cb extends uf {
  constructor() {
    super(...arguments), this.forceDayIfListItem = !0;
  }
  sliceRange(e, n) {
    return n.sliceRange(e);
  }
}
class Uf extends St {
  constructor() {
    super(...arguments), this.slicer = new cb(), this.tableRef = Ze();
  }
  render() {
    let { props: e, context: n } = this;
    return R(ab, Object.assign({ ref: this.tableRef }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, n, e.dayTableModel), { dateProfile: e.dateProfile, cells: e.dayTableModel.cells, colGroupNode: e.colGroupNode, tableMinWidth: e.tableMinWidth, renderRowIntro: e.renderRowIntro, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.showWeekNumbers, expandRows: e.expandRows, headerAlignElRef: e.headerAlignElRef, clientWidth: e.clientWidth, clientHeight: e.clientHeight, forPrint: e.forPrint }));
  }
}
class ub extends ju {
  // Computes the date range that will be rendered
  buildRenderRange(e, n, r) {
    let i = super.buildRenderRange(e, n, r), { props: s } = this;
    return fb({
      currentRange: i,
      snapToWeek: /^(year|month)$/.test(n),
      fixedWeekCount: s.fixedWeekCount,
      dateEnv: s.dateEnv
    });
  }
}
function fb(t) {
  let { dateEnv: e, currentRange: n } = t, { start: r, end: i } = n, s;
  if (t.snapToWeek && (r = e.startOfWeek(r), s = e.startOfWeek(i), s.valueOf() !== i.valueOf() && (i = ol(s, 1))), t.fixedWeekCount) {
    let o = e.startOfWeek(e.startOfMonth(je(n.end, -1))), a = Math.ceil(
      // could be partial weeks due to hiddenDays
      Bh(o, i)
    );
    i = ol(i, 6 - a);
  }
  return { start: r, end: i };
}
class db extends St {
  constructor() {
    super(...arguments), this.headerElRef = Ze();
  }
  renderSimpleLayout(e, n) {
    let { props: r, context: i } = this, s = [], o = li(i.options);
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
    }), R(
      ci,
      { elClasses: ["fc-daygrid"], viewSpec: i.viewSpec },
      R(ca, { liquid: !r.isHeightAuto && !r.forPrint, collapsibleWidth: r.forPrint, cols: [], sections: s })
    );
  }
  renderHScrollLayout(e, n, r, i) {
    let s = this.context.pluginHooks.scrollGridImpl;
    if (!s)
      throw new Error("No ScrollGrid implementation");
    let { props: o, context: a } = this, c = !o.forPrint && li(a.options), l = !o.forPrint && mf(a.options), u = [];
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
        content: n
      }]
    }), l && u.push({
      type: "footer",
      key: "footer",
      isSticky: !0,
      chunks: [{
        key: "main",
        content: uo
      }]
    }), R(
      ci,
      { elClasses: ["fc-daygrid"], viewSpec: a.viewSpec },
      R(s, { liquid: !o.isHeightAuto && !o.forPrint, forPrint: o.forPrint, collapsibleWidth: o.forPrint, colGroups: [{ cols: [{ span: r, minWidth: i }] }], sections: u })
    );
  }
}
class hb extends db {
  constructor() {
    super(...arguments), this.buildDayTableModel = se(pb), this.headerRef = Ze(), this.tableRef = Ze();
  }
  render() {
    let { options: e, dateProfileGenerator: n } = this.context, { props: r } = this, i = this.buildDayTableModel(r.dateProfile, n), s = e.dayHeaders && R(af, { ref: this.headerRef, dateProfile: r.dateProfile, dates: i.headerDates, datesRepDistinctDays: i.rowCnt === 1 }), o = (a) => R(Uf, { ref: this.tableRef, dateProfile: r.dateProfile, dayTableModel: i, businessHours: r.businessHours, dateSelection: r.dateSelection, eventStore: r.eventStore, eventUiBases: r.eventUiBases, eventSelection: r.eventSelection, eventDrag: r.eventDrag, eventResize: r.eventResize, nextDayThreshold: e.nextDayThreshold, colGroupNode: a.tableColGroupNode, tableMinWidth: a.tableMinWidth, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.weekNumbers, expandRows: !r.isHeightAuto, headerAlignElRef: this.headerElRef, clientWidth: a.clientWidth, clientHeight: a.clientHeight, forPrint: r.forPrint });
    return e.dayMinWidth ? this.renderHScrollLayout(s, o, i.colCnt, e.dayMinWidth) : this.renderSimpleLayout(s, o);
  }
}
function pb(t, e) {
  let n = new lf(t.renderRange, e);
  return new cf(n, /year|month|week/.test(t.currentRangeUnit));
}
var gb = Ht({
  name: "@fullcalendar/daygrid",
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: hb,
      dateProfileGeneratorClass: ub
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
}), vb = '.fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:"\\00a0"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:"\\00a0-\\00a0"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}';
Lo(vb);
class mb extends Rp {
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
    return e.allDay ? ig(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"];
  }
}
const bb = Ce({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "short"
});
function Wf(t) {
  let e = [
    "fc-timegrid-slot",
    "fc-timegrid-slot-label",
    t.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"
  ];
  return R(Pt.Consumer, null, (n) => {
    if (!t.isLabeled)
      return R("td", { className: e.join(" "), "data-time": t.isoTimeStr });
    let { dateEnv: r, options: i, viewApi: s } = n, o = (
      // TODO: fully pre-parse
      i.slotLabelFormat == null ? bb : Array.isArray(i.slotLabelFormat) ? Ce(i.slotLabelFormat[0]) : Ce(i.slotLabelFormat)
    ), a = {
      level: 0,
      time: t.time,
      date: r.toDate(t.date),
      view: s,
      text: r.format(t.date, o)
    };
    return R(rt, { elTag: "td", elClasses: e, elAttrs: {
      "data-time": t.isoTimeStr
    }, renderProps: a, generatorName: "slotLabelContent", customGenerator: i.slotLabelContent, defaultGenerator: yb, classNameGenerator: i.slotLabelClassNames, didMount: i.slotLabelDidMount, willUnmount: i.slotLabelWillUnmount }, (c) => R(
      "div",
      { className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame" },
      R(c, { elTag: "div", elClasses: [
        "fc-timegrid-slot-label-cushion",
        "fc-scrollgrid-shrink-cushion"
      ] })
    ));
  });
}
function yb(t) {
  return t.text;
}
class xb extends xe {
  render() {
    return this.props.slatMetas.map((e) => R(
      "tr",
      { key: e.key },
      R(Wf, Object.assign({}, e))
    ));
  }
}
const wb = Ce({ week: "short" }), Eb = 5;
class _b extends St {
  constructor() {
    super(...arguments), this.allDaySplitter = new mb(), this.headerElRef = Ze(), this.rootElRef = Ze(), this.scrollerElRef = Ze(), this.state = {
      slatCoords: null
    }, this.handleScrollTopRequest = (e) => {
      let n = this.scrollerElRef.current;
      n && (n.scrollTop = e);
    }, this.renderHeadAxis = (e, n = "") => {
      let { options: r } = this.context, { dateProfile: i } = this.props, s = i.renderRange, a = hn(s.start, s.end) === 1 ? oi(this.context, s.start, "week") : {};
      return r.weekNumbers && e === "day" ? R(wf, { elTag: "th", elClasses: [
        "fc-timegrid-axis",
        "fc-scrollgrid-shrink"
      ], elAttrs: {
        "aria-hidden": !0
      }, date: s.start, defaultFormat: wb }, (c) => R(
        "div",
        { className: [
          "fc-timegrid-axis-frame",
          "fc-scrollgrid-shrink-frame",
          "fc-timegrid-axis-frame-liquid"
        ].join(" "), style: { height: n } },
        R(c, { elTag: "a", elClasses: [
          "fc-timegrid-axis-cushion",
          "fc-scrollgrid-shrink-cushion",
          "fc-scrollgrid-sync-inner"
        ], elAttrs: a })
      )) : R(
        "th",
        { "aria-hidden": !0, className: "fc-timegrid-axis" },
        R("div", { className: "fc-timegrid-axis-frame", style: { height: n } })
      );
    }, this.renderTableRowAxis = (e) => {
      let { options: n, viewApi: r } = this.context, i = {
        text: n.allDayText,
        view: r
      };
      return (
        // TODO: make reusable hook. used in list view too
        R(rt, { elTag: "td", elClasses: [
          "fc-timegrid-axis",
          "fc-scrollgrid-shrink"
        ], elAttrs: {
          "aria-hidden": !0
        }, renderProps: i, generatorName: "allDayContent", customGenerator: n.allDayContent, defaultGenerator: Sb, classNameGenerator: n.allDayClassNames, didMount: n.allDayDidMount, willUnmount: n.allDayWillUnmount }, (s) => R(
          "div",
          { className: [
            "fc-timegrid-axis-frame",
            "fc-scrollgrid-shrink-frame",
            e == null ? " fc-timegrid-axis-frame-liquid" : ""
          ].join(" "), style: { height: e } },
          R(s, { elTag: "span", elClasses: [
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
    let { context: i, props: s } = this, o = [], a = li(i.options);
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
        R(
          "tr",
          { role: "presentation", className: "fc-scrollgrid-section" },
          R("td", { className: "fc-timegrid-divider " + i.theme.getClass("tableCellShaded") })
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
    }), R(
      ci,
      { elRef: this.rootElRef, elClasses: ["fc-timegrid"], viewSpec: i.viewSpec },
      R(ca, { liquid: !s.isHeightAuto && !s.forPrint, collapsibleWidth: s.forPrint, cols: [{ width: "shrink" }], sections: o })
    );
  }
  renderHScrollLayout(e, n, r, i, s, o, a) {
    let c = this.context.pluginHooks.scrollGridImpl;
    if (!c)
      throw new Error("No ScrollGrid implementation");
    let { context: l, props: u } = this, d = !u.forPrint && li(l.options), f = !u.forPrint && mf(l.options), h = [];
    e && h.push({
      type: "header",
      key: "header",
      isSticky: d,
      syncRowHeights: !0,
      chunks: [
        {
          key: "axis",
          rowContent: (v) => R("tr", { role: "presentation" }, this.renderHeadAxis("day", v.rowSyncHeights[0]))
        },
        {
          key: "cols",
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: e
        }
      ]
    }), n && (h.push({
      type: "body",
      key: "all-day",
      syncRowHeights: !0,
      chunks: [
        {
          key: "axis",
          rowContent: (v) => R("tr", { role: "presentation" }, this.renderTableRowAxis(v.rowSyncHeights[0]))
        },
        {
          key: "cols",
          content: n
        }
      ]
    }), h.push({
      key: "all-day-divider",
      type: "body",
      outerContent: (
        // TODO: rename to cellContent so don't need to define <tr>?
        R(
          "tr",
          { role: "presentation", className: "fc-scrollgrid-section" },
          R("td", { colSpan: 2, className: "fc-timegrid-divider " + l.theme.getClass("tableCellShaded") })
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
            R(
              "div",
              { className: "fc-timegrid-axis-chunk" },
              R(
                "table",
                { "aria-hidden": !0, style: { height: v.expandRows ? v.clientHeight : "" } },
                v.tableColGroupNode,
                R(
                  "tbody",
                  null,
                  R(xb, { slatMetas: o })
                )
              ),
              R(
                "div",
                { className: "fc-timegrid-now-indicator-container" },
                R(dr, {
                  unit: p ? "minute" : "day"
                  /* hacky */
                }, (b) => {
                  let m = p && a && a.safeComputeTop(b);
                  return typeof m == "number" ? R(fa, { elClasses: ["fc-timegrid-now-indicator-arrow"], elStyle: { top: m }, isAxis: !0, date: b }) : null;
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
    }), f && h.push({
      key: "footer",
      type: "footer",
      isSticky: !0,
      chunks: [
        {
          key: "axis",
          content: uo
        },
        {
          key: "cols",
          content: uo
        }
      ]
    }), R(
      ci,
      { elRef: this.rootElRef, elClasses: ["fc-timegrid"], viewSpec: l.viewSpec },
      R(c, { liquid: !u.isHeightAuto && !u.forPrint, forPrint: u.forPrint, collapsibleWidth: !1, colGroups: [
        { width: "shrink", cols: [{ width: "shrink" }] },
        { cols: [{ span: i, minWidth: s }] }
      ], sections: h })
    );
  }
  /* Dimensions
  ------------------------------------------------------------------------------------------------------------------*/
  getAllDayMaxEventProps() {
    let { dayMaxEvents: e, dayMaxEventRows: n } = this.context.options;
    return (e === !0 || n === !0) && (e = void 0, n = Eb), { dayMaxEvents: e, dayMaxEventRows: n };
  }
}
function Sb(t) {
  return t.text;
}
class Ab {
  constructor(e, n, r) {
    this.positions = e, this.dateProfile = n, this.slotDuration = r;
  }
  safeComputeTop(e) {
    let { dateProfile: n } = this;
    if (Nt(n.currentRange, e)) {
      let r = _e(e), i = e.valueOf() - r.valueOf();
      if (i >= pt(n.slotMinTime) && i < pt(n.slotMaxTime))
        return this.computeTimeTop(me(i));
    }
    return null;
  }
  // Computes the top coordinate, relative to the bounds of the grid, of the given date.
  // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
  computeDateTop(e, n) {
    return n || (n = _e(e)), this.computeTimeTop(me(e.valueOf() - n.valueOf()));
  }
  // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
  // This is a makeshify way to compute the time-top. Assumes all slatMetas dates are uniform.
  // Eventually allow computation with arbirary slat dates.
  computeTimeTop(e) {
    let { positions: n, dateProfile: r } = this, i = n.els.length, s = (e.milliseconds - pt(r.slotMinTime)) / pt(this.slotDuration), o, a;
    return s = Math.max(0, s), s = Math.min(i, s), o = Math.floor(s), o = Math.min(o, i - 1), a = s - o, n.tops[o] + n.getHeight(o) * a;
  }
}
class Cb extends xe {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { slatElRefs: i } = e;
    return R("tbody", null, e.slatMetas.map((s, o) => {
      let a = {
        time: s.time,
        date: n.dateEnv.toDate(s.date),
        view: n.viewApi
      };
      return R(
        "tr",
        { key: s.key, ref: i.createRef(s.key) },
        e.axis && R(Wf, Object.assign({}, s)),
        R(rt, { elTag: "td", elClasses: [
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
class Db extends xe {
  constructor() {
    super(...arguments), this.rootElRef = Ze(), this.slatElRefs = new kt();
  }
  render() {
    let { props: e, context: n } = this;
    return R(
      "div",
      { ref: this.rootElRef, className: "fc-timegrid-slots" },
      R(
        "table",
        { "aria-hidden": !0, className: n.theme.getClass("table"), style: {
          minWidth: e.tableMinWidth,
          width: e.clientWidth,
          height: e.minHeight
        } },
        e.tableColGroupNode,
        R(Cb, { slatElRefs: this.slatElRefs, axis: e.axis, slatMetas: e.slatMetas })
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
    n.onCoords && n.clientWidth !== null && this.rootElRef.current.offsetHeight && n.onCoords(new Ab(new In(this.rootElRef.current, Rb(this.slatElRefs.currentMap, n.slatMetas), !1, !0), this.props.dateProfile, e.options.slotDuration));
  }
}
function Rb(t, e) {
  return e.map((n) => t[n.key]);
}
function Gn(t, e) {
  let n = [], r;
  for (r = 0; r < e; r += 1)
    n.push([]);
  if (t)
    for (r = 0; r < t.length; r += 1)
      n[t[r].col].push(t[r]);
  return n;
}
function Ol(t, e) {
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
class Tb extends xe {
  render() {
    let { props: e } = this;
    return R(Ef, { elClasses: ["fc-timegrid-more-link"], elStyle: {
      top: e.top,
      bottom: e.bottom
    }, allDayDate: null, moreCnt: e.hiddenSegs.length, allSegs: e.hiddenSegs, hiddenSegs: e.hiddenSegs, extraDateSpan: e.extraDateSpan, dateProfile: e.dateProfile, todayRange: e.todayRange, popoverContent: () => Vf(e.hiddenSegs, e), defaultGenerator: kb, forceTimed: !0 }, (n) => R(n, { elTag: "div", elClasses: ["fc-timegrid-more-link-inner", "fc-sticky"] }));
  }
}
function kb(t) {
  return t.shortText;
}
function Ib(t, e, n) {
  let r = new ef();
  e != null && (r.strictOrder = e), n != null && (r.maxStackCnt = n);
  let i = r.addSegs(t), s = _g(i), o = Mb(r);
  return o = Pb(o, 1), { segRects: Hb(o), hiddenGroups: s };
}
function Mb(t) {
  const { entriesByLevel: e } = t, n = ga((r, i) => r + ":" + i, (r, i) => {
    let s = Bb(t, r, i), o = Bl(s, n), a = e[r][i];
    return [
      Object.assign(Object.assign({}, a), { nextLevelNodes: o[0] }),
      a.thickness + o[1]
      // the pressure builds
    ];
  });
  return Bl(e.length ? { level: 0, lateralStart: 0, lateralEnd: e[0].length } : null, n)[0];
}
function Bl(t, e) {
  if (!t)
    return [[], 0];
  let { level: n, lateralStart: r, lateralEnd: i } = t, s = r, o = [];
  for (; s < i; )
    o.push(e(n, s)), s += 1;
  return o.sort(Nb), [
    o.map(Ob),
    o[0][1]
    // first item's pressure
  ];
}
function Nb(t, e) {
  return e[1] - t[1];
}
function Ob(t) {
  return t[0];
}
function Bb(t, e, n) {
  let { levelCoords: r, entriesByLevel: i } = t, s = i[e][n], o = r[e] + s.thickness, a = r.length, c = e;
  for (; c < a && r[c] < o; c += 1)
    ;
  for (; c < a; c += 1) {
    let l = i[c], u, d = lo(l, s.span.start, ao), f = d[0] + d[1], h = f;
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
function Pb(t, e) {
  const n = ga((r, i, s) => an(r), (r, i, s) => {
    let { nextLevelNodes: o, thickness: a } = r, c = a + s, l = a / c, u, d = [];
    if (!o.length)
      u = e;
    else
      for (let h of o)
        if (u === void 0) {
          let p = n(h, i, c);
          u = p[0], d.push(p[1]);
        } else {
          let p = n(h, u, 0);
          d.push(p[1]);
        }
    let f = (u - i) * l;
    return [u - f, Object.assign(Object.assign({}, r), { thickness: f, nextLevelNodes: d })];
  });
  return t.map((r) => n(r, 0, 0)[1]);
}
function Hb(t) {
  let e = [];
  const n = ga((i, s, o) => an(i), (i, s, o) => {
    let a = Object.assign(Object.assign({}, i), {
      levelCoord: s,
      stackDepth: o,
      stackForward: 0
    });
    return e.push(a), a.stackForward = r(i.nextLevelNodes, s + i.thickness, o + 1) + 1;
  });
  function r(i, s, o) {
    let a = 0;
    for (let c of i)
      a = Math.max(n(c, s, o), a);
    return a;
  }
  return r(t, 0, 0), e;
}
function ga(t, e) {
  const n = {};
  return (...r) => {
    let i = t(...r);
    return i in n ? n[i] : n[i] = e(...r);
  };
}
function Pl(t, e, n = null, r = 0) {
  let i = [];
  if (n)
    for (let s = 0; s < t.length; s += 1) {
      let o = t[s], a = n.computeDateTop(o.start, e), c = Math.max(
        a + (r || 0),
        // :(
        n.computeDateTop(o.end, e)
      );
      i.push({
        start: Math.round(a),
        end: Math.round(c)
        //
      });
    }
  return i;
}
function Lb(t, e, n, r) {
  let i = [], s = [];
  for (let l = 0; l < t.length; l += 1) {
    let u = e[l];
    u ? i.push({
      index: l,
      thickness: 1,
      span: u
    }) : s.push(t[l]);
  }
  let { segRects: o, hiddenGroups: a } = Ib(i, n, r), c = [];
  for (let l of o)
    c.push({
      seg: t[l.index],
      rect: l
    });
  for (let l of s)
    c.push({ seg: l, rect: null });
  return { segPlacements: c, hiddenGroups: a };
}
const Fb = Ce({
  hour: "numeric",
  minute: "2-digit",
  meridiem: !1
});
class jf extends xe {
  render() {
    return R(bf, Object.assign({}, this.props, { elClasses: [
      "fc-timegrid-event",
      "fc-v-event",
      this.props.isShort && "fc-timegrid-event-short"
    ], defaultTimeFormat: Fb }));
  }
}
class zb extends xe {
  constructor() {
    super(...arguments), this.sortEventSegs = se(Gu);
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
    return R(da, { elTag: "td", elRef: e.elRef, elClasses: [
      "fc-timegrid-col",
      ...e.extraClassNames || []
    ], elAttrs: Object.assign({ role: "gridcell" }, e.extraDataAttrs), date: e.date, dateProfile: e.dateProfile, todayRange: e.todayRange, extraRenderProps: e.extraRenderProps }, (c) => R(
      "div",
      { className: "fc-timegrid-col-frame" },
      R(
        "div",
        { className: "fc-timegrid-col-bg" },
        this.renderFillSegs(e.businessHourSegs, "non-business"),
        this.renderFillSegs(e.bgEventSegs, "bg-event"),
        this.renderFillSegs(e.dateSelectionSegs, "highlight")
      ),
      R("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(a, o, !1, !1, !1)),
      R("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(s, {}, !!e.eventDrag, !!e.eventResize, !!i, "mirror")),
      R("div", { className: "fc-timegrid-now-indicator-container" }, this.renderNowIndicator(e.nowIndicatorSegs)),
      ha(r) && R(c, { elTag: "div", elClasses: ["fc-timegrid-col-misc"] })
    ));
  }
  renderFgSegs(e, n, r, i, s, o) {
    let { props: a } = this;
    return a.forPrint ? Vf(e, a) : this.renderPositionedFgSegs(e, n, r, i, s, o);
  }
  renderPositionedFgSegs(e, n, r, i, s, o) {
    let { eventMaxStack: a, eventShortHeight: c, eventOrderStrict: l, eventMinHeight: u } = this.context.options, { date: d, slatCoords: f, eventSelection: h, todayRange: p, nowDate: v } = this.props, b = r || i || s, m = Pl(e, d, f, u), { segPlacements: x, hiddenGroups: g } = Lb(e, m, l, a);
    return R(
      Se,
      null,
      this.renderHiddenGroups(g, e),
      x.map((y) => {
        let { seg: E, rect: S } = y, _ = E.eventRange.instance.instanceId, C = b || !!(!n[_] && S), N = js(S && S.span), D = !b && S ? this.computeSegHStyle(S) : { left: 0, right: 0 }, k = !!S && S.stackForward > 0, P = !!S && S.span.end - S.span.start < c;
        return R(
          "div",
          { className: "fc-timegrid-event-harness" + (k ? " fc-timegrid-event-harness-inset" : ""), key: o || _, style: Object.assign(Object.assign({ visibility: C ? "" : "hidden" }, N), D) },
          R(jf, Object.assign({ seg: E, isDragging: r, isResizing: i, isDateSelecting: s, isSelected: _ === h, isShort: P }, $t(E, p, v)))
        );
      })
    );
  }
  // will already have eventMinHeight applied because segInputs already had it
  renderHiddenGroups(e, n) {
    let { extraDateSpan: r, dateProfile: i, todayRange: s, nowDate: o, eventSelection: a, eventDrag: c, eventResize: l } = this.props;
    return R(Se, null, e.map((u) => {
      let d = js(u.span), f = Ub(u.entries, n);
      return R(Tb, { key: ku(_f(f)), hiddenSegs: f, top: d.top, bottom: d.bottom, extraDateSpan: r, dateProfile: i, todayRange: s, nowDate: o, eventSelection: a, eventDrag: c, eventResize: l });
    }));
  }
  renderFillSegs(e, n) {
    let { props: r, context: i } = this, o = Pl(e, r.date, r.slatCoords, i.options.eventMinHeight).map((a, c) => {
      let l = e[c];
      return R("div", { key: Qu(l.eventRange), className: "fc-timegrid-bg-harness", style: js(a) }, n === "bg-event" ? R(yf, Object.assign({ seg: l }, $t(l, r.todayRange, r.nowDate))) : xf(n));
    });
    return R(Se, null, o);
  }
  renderNowIndicator(e) {
    let { slatCoords: n, date: r } = this.props;
    return n ? e.map((i, s) => R(
      fa,
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
    let { isRtl: n, options: r } = this.context, i = r.slotEventOverlap, s = e.levelCoord, o = e.levelCoord + e.thickness, a, c;
    i && (o = Math.min(1, s + (o - s) * 2)), n ? (a = 1 - o, c = s) : (a = s, c = 1 - o);
    let l = {
      zIndex: e.stackDepth + 1,
      left: a * 100 + "%",
      right: c * 100 + "%"
    };
    return i && !e.stackForward && (l[n ? "marginLeft" : "marginRight"] = 10 * 2), l;
  }
}
function Vf(t, { todayRange: e, nowDate: n, eventSelection: r, eventDrag: i, eventResize: s }) {
  let o = (i ? i.affectedInstances : null) || (s ? s.affectedInstances : null) || {};
  return R(Se, null, t.map((a) => {
    let c = a.eventRange.instance.instanceId;
    return R(
      "div",
      { key: c, style: { visibility: o[c] ? "hidden" : "" } },
      R(jf, Object.assign({ seg: a, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: c === r, isShort: !1 }, $t(a, e, n)))
    );
  }));
}
function js(t) {
  return t ? {
    top: t.start,
    bottom: -t.end
  } : { top: "", bottom: "" };
}
function Ub(t, e) {
  return t.map((n) => e[n.index]);
}
class Wb extends xe {
  constructor() {
    super(...arguments), this.splitFgEventSegs = se(Gn), this.splitBgEventSegs = se(Gn), this.splitBusinessHourSegs = se(Gn), this.splitNowIndicatorSegs = se(Gn), this.splitDateSelectionSegs = se(Gn), this.splitEventDrag = se(Ol), this.splitEventResize = se(Ol), this.rootElRef = Ze(), this.cellElRefs = new kt();
  }
  render() {
    let { props: e, context: n } = this, r = n.options.nowIndicator && e.slatCoords && e.slatCoords.safeComputeTop(e.nowDate), i = e.cells.length, s = this.splitFgEventSegs(e.fgEventSegs, i), o = this.splitBgEventSegs(e.bgEventSegs, i), a = this.splitBusinessHourSegs(e.businessHourSegs, i), c = this.splitNowIndicatorSegs(e.nowIndicatorSegs, i), l = this.splitDateSelectionSegs(e.dateSelectionSegs, i), u = this.splitEventDrag(e.eventDrag, i), d = this.splitEventResize(e.eventResize, i);
    return R(
      "div",
      { className: "fc-timegrid-cols", ref: this.rootElRef },
      R(
        "table",
        { role: "presentation", style: {
          minWidth: e.tableMinWidth,
          width: e.clientWidth
        } },
        e.tableColGroupNode,
        R(
          "tbody",
          { role: "presentation" },
          R(
            "tr",
            { role: "row" },
            e.axis && R(
              "td",
              { "aria-hidden": !0, className: "fc-timegrid-col fc-timegrid-axis" },
              R(
                "div",
                { className: "fc-timegrid-col-frame" },
                R("div", { className: "fc-timegrid-now-indicator-container" }, typeof r == "number" && R(fa, { elClasses: ["fc-timegrid-now-indicator-arrow"], elStyle: { top: r }, isAxis: !0, date: e.nowDate }))
              )
            ),
            e.cells.map((f, h) => R(zb, { key: f.key, elRef: this.cellElRefs.createRef(f.key), dateProfile: e.dateProfile, date: f.date, nowDate: e.nowDate, todayRange: e.todayRange, extraRenderProps: f.extraRenderProps, extraDataAttrs: f.extraDataAttrs, extraClassNames: f.extraClassNames, extraDateSpan: f.extraDateSpan, fgEventSegs: s[h], bgEventSegs: o[h], businessHourSegs: a[h], nowIndicatorSegs: c[h], dateSelectionSegs: l[h], eventDrag: u[h], eventResize: d[h], slatCoords: e.slatCoords, eventSelection: e.eventSelection, forPrint: e.forPrint }))
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
    e.onColCoords && e.clientWidth !== null && e.onColCoords(new In(
      this.rootElRef.current,
      jb(this.cellElRefs.currentMap, e.cells),
      !0,
      // horizontal
      !1
    ));
  }
}
function jb(t, e) {
  return e.map((n) => t[n.key]);
}
class Vb extends St {
  constructor() {
    super(...arguments), this.processSlotOptions = se($b), this.state = {
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
    return R(
      "div",
      { className: "fc-timegrid-body", ref: this.handleRootEl, style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: e.clientWidth,
        minWidth: e.tableMinWidth
      } },
      R(Db, { axis: e.axis, dateProfile: e.dateProfile, slatMetas: e.slatMetas, clientWidth: e.clientWidth, minHeight: e.expandRows ? e.clientHeight : "", tableMinWidth: e.tableMinWidth, tableColGroupNode: e.axis ? e.tableColGroupNode : null, onCoords: this.handleSlatCoords }),
      R(Wb, { cells: e.cells, axis: e.axis, dateProfile: e.dateProfile, businessHourSegs: e.businessHourSegs, bgEventSegs: e.bgEventSegs, fgEventSegs: e.fgEventSegs, dateSelectionSegs: e.dateSelectionSegs, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, todayRange: e.todayRange, nowDate: e.nowDate, nowIndicatorSegs: e.nowIndicatorSegs, clientWidth: e.clientWidth, tableMinWidth: e.tableMinWidth, tableColGroupNode: e.tableColGroupNode, slatCoords: n.slatCoords, onColCoords: this.handleColCoords, forPrint: e.forPrint })
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
    let { dateEnv: r, options: i } = this.context, { colCoords: s } = this, { dateProfile: o } = this.props, { slatCoords: a } = this.state, { snapDuration: c, snapsPerSlot: l } = this.processSlotOptions(this.props.slotDuration, i.snapDuration), u = s.leftToIndex(e), d = a.positions.topToIndex(n);
    if (u != null && d != null) {
      let f = this.props.cells[u], h = a.positions.tops[d], p = a.positions.getHeight(d), v = (n - h) / p, b = Math.floor(v * l), m = d * l + b, x = this.props.cells[u].date, g = no(o.slotMinTime, Dh(c, m)), y = r.add(x, g), E = r.add(y, c);
      return {
        dateProfile: o,
        dateSpan: Object.assign({ range: { start: y, end: E }, allDay: !1 }, f.extraDateSpan),
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
function $b(t, e) {
  let n = e || t, r = Wo(t, n);
  return r === null && (n = t, r = 1), { snapDuration: n, snapsPerSlot: r };
}
class qb extends uf {
  sliceRange(e, n) {
    let r = [];
    for (let i = 0; i < n.length; i += 1) {
      let s = un(e, n[i]);
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
class Gb extends St {
  constructor() {
    super(...arguments), this.buildDayRanges = se(Yb), this.slicer = new qb(), this.timeColsRef = Ze();
  }
  render() {
    let { props: e, context: n } = this, { dateProfile: r, dayTableModel: i } = e, { nowIndicator: s, nextDayThreshold: o } = n.options, a = this.buildDayRanges(i, r, n.dateEnv);
    return R(dr, { unit: s ? "minute" : "day" }, (c, l) => R(Vb, Object.assign({ ref: this.timeColsRef }, this.slicer.sliceProps(e, r, null, n, a), { forPrint: e.forPrint, axis: e.axis, dateProfile: r, slatMetas: e.slatMetas, slotDuration: e.slotDuration, cells: i.cells[0], tableColGroupNode: e.tableColGroupNode, tableMinWidth: e.tableMinWidth, clientWidth: e.clientWidth, clientHeight: e.clientHeight, expandRows: e.expandRows, nowDate: c, nowIndicatorSegs: s && this.slicer.sliceNowDate(c, r, o, n, a), todayRange: l, onScrollTopRequest: e.onScrollTopRequest, onSlatCoords: e.onSlatCoords })));
  }
}
function Yb(t, e, n) {
  let r = [];
  for (let i of t.headerDates)
    r.push({
      start: n.add(i, e.slotMinTime),
      end: n.add(i, e.slotMaxTime)
    });
  return r;
}
const Hl = [
  { hours: 1 },
  { minutes: 30 },
  { minutes: 15 },
  { seconds: 30 },
  { seconds: 15 }
];
function Qb(t, e, n, r, i) {
  let s = /* @__PURE__ */ new Date(0), o = t, a = me(0), c = n || Zb(r), l = [];
  for (; pt(o) < pt(e); ) {
    let u = i.add(s, o), d = Wo(a, c) !== null;
    l.push({
      date: u,
      time: o,
      key: u.toISOString(),
      isoTimeStr: Gh(u),
      isLabeled: d
    }), o = no(o, r), a = no(a, r);
  }
  return l;
}
function Zb(t) {
  let e, n, r;
  for (e = Hl.length - 1; e >= 0; e -= 1)
    if (n = me(Hl[e]), r = Wo(n, t), r !== null && r > 1)
      return n;
  return t;
}
class Xb extends _b {
  constructor() {
    super(...arguments), this.buildTimeColsModel = se(Kb), this.buildSlatMetas = se(Qb);
  }
  render() {
    let { options: e, dateEnv: n, dateProfileGenerator: r } = this.context, { props: i } = this, { dateProfile: s } = i, o = this.buildTimeColsModel(s, r), a = this.allDaySplitter.splitProps(i), c = this.buildSlatMetas(s.slotMinTime, s.slotMaxTime, e.slotLabelInterval, e.slotDuration, n), { dayMinWidth: l } = e, u = !l, d = l, f = e.dayHeaders && R(af, { dates: o.headerDates, dateProfile: s, datesRepDistinctDays: !0, renderIntro: u ? this.renderHeadAxis : null }), h = e.allDaySlot !== !1 && ((v) => R(Uf, Object.assign({}, a.allDay, { dateProfile: s, dayTableModel: o, nextDayThreshold: e.nextDayThreshold, tableMinWidth: v.tableMinWidth, colGroupNode: v.tableColGroupNode, renderRowIntro: u ? this.renderTableRowAxis : null, showWeekNumbers: !1, expandRows: !1, headerAlignElRef: this.headerElRef, clientWidth: v.clientWidth, clientHeight: v.clientHeight, forPrint: i.forPrint }, this.getAllDayMaxEventProps()))), p = (v) => R(Gb, Object.assign({}, a.timed, { dayTableModel: o, dateProfile: s, axis: u, slotDuration: e.slotDuration, slatMetas: c, forPrint: i.forPrint, tableColGroupNode: v.tableColGroupNode, tableMinWidth: v.tableMinWidth, clientWidth: v.clientWidth, clientHeight: v.clientHeight, onSlatCoords: this.handleSlatCoords, expandRows: v.expandRows, onScrollTopRequest: this.handleScrollTopRequest }));
    return d ? this.renderHScrollLayout(f, h, p, o.colCnt, l, c, this.state.slatCoords) : this.renderSimpleLayout(f, h, p);
  }
}
function Kb(t, e) {
  let n = new lf(t.renderRange, e);
  return new cf(n, !1);
}
const Jb = {
  allDaySlot: Boolean
};
var e1 = Ht({
  name: "@fullcalendar/timegrid",
  initialView: "timeGridWeek",
  optionRefiners: Jb,
  views: {
    timeGrid: {
      component: Xb,
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
oa.touchMouseIgnoreWait = 500;
let ho = 0, ui = 0, po = !1;
class $f {
  constructor(e) {
    this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = (n) => {
      if (!this.shouldIgnoreMouse() && t1(n) && this.tryStart(n)) {
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
        r.removeEventListener("touchmove", this.handleTouchMove), r.removeEventListener("touchend", this.handleTouchEnd), r.removeEventListener("touchcancel", this.handleTouchEnd), window.removeEventListener("scroll", this.handleTouchScroll, !0), this.emitter.trigger("pointerup", this.createEventFromTouch(n)), this.cleanup(), this.isTouchDragging = !1, n1();
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
    }, this.containerEl = e, this.emitter = new ns(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), r1();
  }
  destroy() {
    this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), i1();
  }
  tryStart(e) {
    let n = this.querySubjectEl(e), r = e.target;
    return n && (!this.handleSelector || We(r, this.handleSelector)) ? (this.subjectEl = n, this.isDragging = !0, this.wasTouchScroll = !1, !0) : !1;
  }
  cleanup() {
    po = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
  }
  querySubjectEl(e) {
    return this.selector ? We(e.target, this.selector) : this.containerEl;
  }
  shouldIgnoreMouse() {
    return ho || this.isTouchDragging;
  }
  // can be called by user of this class, to cancel touch-based scrolling for the current drag
  cancelTouchScroll() {
    this.isDragging && (po = !0);
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
function t1(t) {
  return t.button === 0 && !t.ctrlKey;
}
function n1() {
  ho += 1, setTimeout(() => {
    ho -= 1;
  }, oa.touchMouseIgnoreWait);
}
function r1() {
  ui += 1, ui === 1 && window.addEventListener("touchmove", qf, { passive: !1 });
}
function i1() {
  ui -= 1, ui || window.removeEventListener("touchmove", qf, { passive: !1 });
}
function qf(t) {
  po && t.preventDefault();
}
class s1 {
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
    r.style.transition = "top " + n + "ms,left " + n + "ms", Jn(r, {
      left: i.left,
      top: i.top
    }), dh(r, () => {
      r.style.transition = "", e();
    });
  }
  cleanup() {
    this.mirrorEl && (Fo(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null;
  }
  updateElPosition() {
    this.sourceEl && this.isVisible && Jn(this.getMirrorEl(), {
      left: this.sourceElRect.left + this.deltaX,
      top: this.sourceElRect.top + this.deltaY
    });
  }
  getMirrorEl() {
    let e = this.sourceElRect, n = this.mirrorEl;
    return n || (n = this.mirrorEl = this.sourceEl.cloneNode(!0), n.style.userSelect = "none", n.classList.add("fc-event-dragging"), Jn(n, {
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
class Gf extends ta {
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
class Yf extends Gf {
  constructor(e, n) {
    super(new qp(e), n);
  }
  getEventTarget() {
    return this.scrollController.el;
  }
  computeClientRect() {
    return Up(this.scrollController.el);
  }
}
class o1 extends Gf {
  constructor(e) {
    super(new Gp(), e);
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
const Ll = typeof performance == "function" ? performance.now : Date.now;
class a1 {
  constructor() {
    this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = () => {
      if (this.isAnimating) {
        let e = this.computeBestEdge(this.pointerScreenX + window.pageXOffset, this.pointerScreenY + window.pageYOffset);
        if (e) {
          let n = Ll();
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
      s < 0 ? this.everMovedUp = !0 : s > 0 && (this.everMovedDown = !0), o < 0 ? this.everMovedLeft = !0 : o > 0 && (this.everMovedRight = !0), this.pointerScreenX = r, this.pointerScreenY = i, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(Ll()));
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
      let a = o.clientRect, c = e - a.left, l = a.right - e, u = n - a.top, d = a.bottom - n;
      c >= 0 && l >= 0 && u >= 0 && d >= 0 && (u <= r && this.everMovedUp && o.canScrollUp() && (!i || i.distance > u) && (i = { scrollCache: o, name: "top", distance: u }), d <= r && this.everMovedDown && o.canScrollDown() && (!i || i.distance > d) && (i = { scrollCache: o, name: "bottom", distance: d }), c <= r && this.everMovedLeft && o.canScrollLeft() && (!i || i.distance > c) && (i = { scrollCache: o, name: "left", distance: c }), l <= r && this.everMovedRight && o.canScrollRight() && (!i || i.distance > l) && (i = { scrollCache: o, name: "right", distance: l }));
    }
    return i;
  }
  buildCaches(e) {
    return this.queryScrollEls(e).map((n) => n === window ? new o1(!1) : new Yf(n, !1));
  }
  queryScrollEls(e) {
    let n = [];
    for (let r of this.scrollQuery)
      typeof r == "object" ? n.push(r) : n.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(r)));
    return n;
  }
}
class hr extends Cg {
  constructor(e, n) {
    super(e), this.containerEl = e, this.delay = null, this.minDistance = 0, this.touchScrollAllowed = !0, this.mirrorNeedsRevert = !1, this.isInteracting = !1, this.isDragging = !1, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.delayTimeoutId = null, this.onPointerDown = (i) => {
      this.isDragging || (this.isInteracting = !0, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, hh(document.body), gh(document.body), i.isTouch || i.origEvent.preventDefault(), this.emitter.trigger("pointerdown", i), this.isInteracting && // not destroyed via pointerdown handler
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
      this.isInteracting && (this.isInteracting = !1, ph(document.body), vh(document.body), this.emitter.trigger("pointerup", i), this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(i)), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null));
    };
    let r = this.pointer = new $f(e);
    r.emitter.on("pointerdown", this.onPointerDown), r.emitter.on("pointermove", this.onPointerMove), r.emitter.on("pointerup", this.onPointerUp), n && (r.selector = n), this.mirror = new s1(), this.autoScroller = new a1();
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
class l1 {
  constructor(e) {
    this.origRect = ea(e), this.scrollCaches = Uu(e).map((n) => new Yf(n, !0));
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
      if (!c1(i.getEventTarget()) && !_p(r, i.clientRect))
        return !1;
    return !0;
  }
}
function c1(t) {
  let e = t.tagName;
  return e === "HTML" || e === "BODY";
}
class rs {
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
    }, this.droppableStore = n, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new ns();
  }
  // sets initialHit
  // sets coordAdjust
  processFirstCoord(e) {
    let n = { left: e.pageX, top: e.pageY }, r = n, i = e.subjectEl, s;
    i instanceof HTMLElement && (s = ea(i), r = Sp(r, s));
    let o = this.initialHit = this.queryHitForOffset(r.left, r.top);
    if (o) {
      if (this.useSubjectCenter && s) {
        let a = Hu(s, o.rect);
        a && (r = Ap(a));
      }
      this.coordAdjust = Cp(r, n);
    } else
      this.coordAdjust = { left: 0, top: 0 };
  }
  handleMove(e, n) {
    let r = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
    (n || !is(this.movingHit, r)) && (this.movingHit = r, this.emitter.trigger("hitupdate", r, !1, e));
  }
  prepareHits() {
    this.offsetTrackers = Ot(this.droppableStore, (e) => (e.component.prepareHits(), new l1(e.el)));
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
      let a = r[o].component, c = i[o];
      if (c && // wasn't destroyed mid-drag
      c.isWithinClipping(e, n)) {
        let l = c.computeLeft(), u = c.computeTop(), d = e - l, f = n - u, { origRect: h } = c, p = h.right - h.left, v = h.bottom - h.top;
        if (
          // must be within the element's bounds
          d >= 0 && d < p && f >= 0 && f < v
        ) {
          let b = a.queryHit(d, f, p, v);
          b && // make sure the hit is within activeRange, meaning it's not a dead cell
          ts(b.dateProfile.activeRange, b.dateSpan.range) && (!s || b.layer > s.layer) && (b.componentId = o, b.context = a.context, b.rect.left += l, b.rect.right += l, b.rect.top += u, b.rect.bottom += u, s = b);
        }
      }
    }
    return s;
  }
}
function is(t, e) {
  return !t && !e ? !0 : !!t != !!e ? !1 : hg(t.dateSpan, e.dateSpan);
}
function Qf(t, e) {
  let n = {};
  for (let r of e.pluginHooks.datePointTransforms)
    Object.assign(n, r(t, e));
  return Object.assign(n, u1(t, e.dateEnv)), n;
}
function u1(t, e) {
  return {
    date: e.toDate(t.range.start),
    dateStr: e.formatIso(t.range.start, { omitTime: t.allDay }),
    allDay: t.allDay
  };
}
class f1 extends Hn {
  constructor(e) {
    super(e), this.handlePointerDown = (r) => {
      let { dragging: i } = this, s = r.origEvent.target;
      i.setIgnoreMove(!this.component.isValidDateDownEl(s));
    }, this.handleDragEnd = (r) => {
      let { component: i } = this, { pointer: s } = this.dragging;
      if (!s.wasTouchScroll) {
        let { initialHit: o, finalHit: a } = this.hitDragging;
        if (o && a && is(o, a)) {
          let { context: c } = i, l = Object.assign(Object.assign({}, Qf(o.dateSpan, c)), { dayEl: o.dayEl, jsEvent: r.origEvent, view: c.viewApi || c.calendarApi.view });
          c.emitter.trigger("dateClick", l);
        }
      }
    }, this.dragging = new hr(e.el), this.dragging.autoScroller.isEnabled = !1;
    let n = this.hitDragging = new rs(this.dragging, sa(e));
    n.emitter.on("pointerdown", this.handlePointerDown), n.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
}
class d1 extends Hn {
  constructor(e) {
    super(e), this.dragSelection = null, this.handlePointerDown = (o) => {
      let { component: a, dragging: c } = this, { options: l } = a.context, u = l.selectable && a.isValidDateDownEl(o.origEvent.target);
      c.setIgnoreMove(!u), c.delay = o.isTouch ? h1(a) : null;
    }, this.handleDragStart = (o) => {
      this.component.context.calendarApi.unselect(o);
    }, this.handleHitUpdate = (o, a) => {
      let { context: c } = this.component, l = null, u = !1;
      if (o) {
        let d = this.hitDragging.initialHit;
        o.componentId === d.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(d, o) || (l = p1(d, o, c.pluginHooks.dateSelectionTransformers)), (!l || !Wg(l, o.dateProfile, c)) && (u = !0, l = null);
      }
      l ? c.dispatch({ type: "SELECT_DATES", selection: l }) : a || c.dispatch({ type: "UNSELECT_DATES" }), u ? zo() : Uo(), a || (this.dragSelection = l);
    }, this.handlePointerUp = (o) => {
      this.dragSelection && (Vu(this.dragSelection, o, this.component.context), this.dragSelection = null);
    };
    let { component: n } = e, { options: r } = n.context, i = this.dragging = new hr(e.el);
    i.touchScrollAllowed = !1, i.minDistance = r.selectMinDistance || 0, i.autoScroller.isEnabled = r.dragScroll;
    let s = this.hitDragging = new rs(this.dragging, sa(e));
    s.emitter.on("pointerdown", this.handlePointerDown), s.emitter.on("dragstart", this.handleDragStart), s.emitter.on("hitupdate", this.handleHitUpdate), s.emitter.on("pointerup", this.handlePointerUp);
  }
  destroy() {
    this.dragging.destroy();
  }
}
function h1(t) {
  let { options: e } = t.context, n = e.selectLongPressDelay;
  return n == null && (n = e.longPressDelay), n;
}
function p1(t, e, n) {
  let r = t.dateSpan, i = e.dateSpan, s = [
    r.range.start,
    r.range.end,
    i.range.start,
    i.range.end
  ];
  s.sort(wh);
  let o = {};
  for (let a of n) {
    let c = a(t, e);
    if (c === !1)
      return null;
    c && Object.assign(o, c);
  }
  return o.range = { start: s[0], end: s[3] }, o.allDay = r.allDay, o;
}
class pr extends Hn {
  constructor(e) {
    super(e), this.subjectEl = null, this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (o) => {
      let a = o.origEvent.target, { component: c, dragging: l } = this, { mirror: u } = l, { options: d } = c.context, f = c.context;
      this.subjectEl = o.subjectEl;
      let h = this.subjectSeg = Mn(o.subjectEl), v = (this.eventRange = h.eventRange).instance.instanceId;
      this.relevantEvents = Qo(f.getCurrentData().eventStore, v), l.minDistance = o.isTouch ? 0 : d.eventDragMinDistance, l.delay = // only do a touch delay if touch and this event hasn't been selected yet
      o.isTouch && v !== c.props.eventSelection ? v1(c) : null, d.fixedMirrorParent ? u.parentNode = d.fixedMirrorParent : u.parentNode = We(a, ".fc"), u.revertDuration = d.dragRevertDuration;
      let b = c.isValidSegDownEl(a) && !We(a, ".fc-event-resizer");
      l.setIgnoreMove(!b), this.isDragging = b && o.subjectEl.classList.contains("fc-event-draggable");
    }, this.handleDragStart = (o) => {
      let a = this.component.context, c = this.eventRange, l = c.instance.instanceId;
      o.isTouch ? l !== this.component.props.eventSelection && a.dispatch({ type: "SELECT_EVENT", eventInstanceId: l }) : a.dispatch({ type: "UNSELECT_EVENT" }), this.isDragging && (a.calendarApi.unselect(o), a.emitter.trigger("eventDragStart", {
        el: this.subjectEl,
        event: new Ae(a, c.def, c.instance),
        jsEvent: o.origEvent,
        view: a.viewApi
      }));
    }, this.handleHitUpdate = (o, a) => {
      if (!this.isDragging)
        return;
      let c = this.relevantEvents, l = this.hitDragging.initialHit, u = this.component.context, d = null, f = null, h = null, p = !1, v = {
        affectedEvents: c,
        mutatedEvents: nt(),
        isEvent: !0
      };
      if (o) {
        d = o.context;
        let b = d.options;
        u === d || b.editable && b.droppable ? (f = g1(l, o, d.getCurrentData().pluginHooks.eventDragMutationMassagers), f && (h = ra(c, d.getCurrentData().eventUiBases, f, d), v.mutatedEvents = h, hf(v, o.dateProfile, d) || (p = !0, f = null, h = null, v.mutatedEvents = nt()))) : d = null;
      }
      this.displayDrag(d, v), p ? zo() : Uo(), a || (u === d && // TODO: write test for this
      is(l, o) && (f = null), this.dragging.setMirrorNeedsRevert(!f), this.dragging.setMirrorIsVisible(!o || !this.subjectEl.getRootNode().querySelector(".fc-event-mirror")), this.receivingContext = d, this.validMutation = f, this.mutatedRelevantEvents = h);
    }, this.handlePointerUp = () => {
      this.isDragging || this.cleanup();
    }, this.handleDragEnd = (o) => {
      if (this.isDragging) {
        let a = this.component.context, c = a.viewApi, { receivingContext: l, validMutation: u } = this, d = this.eventRange.def, f = this.eventRange.instance, h = new Ae(a, d, f), p = this.relevantEvents, v = this.mutatedRelevantEvents, { finalHit: b } = this.hitDragging;
        if (this.clearDrag(), a.emitter.trigger("eventDragStop", {
          el: this.subjectEl,
          event: h,
          jsEvent: o.origEvent,
          view: c
        }), u) {
          if (l === a) {
            let m = new Ae(a, v.defs[d.defId], f ? v.instances[f.instanceId] : null);
            a.dispatch({
              type: "MERGE_EVENTS",
              eventStore: v
            });
            let x = {
              oldEvent: h,
              event: m,
              relatedEvents: on(v, a, f),
              revert() {
                a.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: p
                  // the pre-change data
                });
              }
            }, g = {};
            for (let y of a.getCurrentData().pluginHooks.eventDropTransformers)
              Object.assign(g, y(u, a));
            a.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, x), g), { el: o.subjectEl, delta: u.datesDelta, jsEvent: o.origEvent, view: c })), a.emitter.trigger("eventChange", x);
          } else if (l) {
            let m = {
              event: h,
              relatedEvents: on(p, a, f),
              revert() {
                a.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: p
                });
              }
            };
            a.emitter.trigger("eventLeave", Object.assign(Object.assign({}, m), { draggedEl: o.subjectEl, view: c })), a.dispatch({
              type: "REMOVE_EVENTS",
              eventStore: p
            }), a.emitter.trigger("eventRemove", m);
            let x = v.defs[d.defId], g = v.instances[f.instanceId], y = new Ae(l, x, g);
            l.dispatch({
              type: "MERGE_EVENTS",
              eventStore: v
            });
            let E = {
              event: y,
              relatedEvents: on(v, l, g),
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
            }), l.emitter.trigger("drop", Object.assign(Object.assign({}, Qf(b.dateSpan, l)), { draggedEl: o.subjectEl, jsEvent: o.origEvent, view: b.context.viewApi })), l.emitter.trigger("eventReceive", Object.assign(Object.assign({}, E), { draggedEl: o.subjectEl, view: b.context.viewApi }));
          }
        } else
          a.emitter.trigger("_noEventDrop");
      }
      this.cleanup();
    };
    let { component: n } = this, { options: r } = n.context, i = this.dragging = new hr(e.el);
    i.pointer.selector = pr.SELECTOR, i.touchScrollAllowed = !1, i.autoScroller.isEnabled = r.dragScroll;
    let s = this.hitDragging = new rs(this.dragging, co);
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
        mutatedEvents: nt(),
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
pr.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
function g1(t, e, n) {
  let r = t.dateSpan, i = e.dateSpan, s = r.range.start, o = i.range.start, a = {};
  r.allDay !== i.allDay && (a.allDay = i.allDay, a.hasEnd = e.context.options.allDayMaintainDuration, i.allDay && (s = _e(s)));
  let c = Sn(s, o, t.context.dateEnv, t.componentId === e.componentId ? t.largeUnit : null);
  c.milliseconds && (a.allDay = !1);
  let l = {
    datesDelta: c,
    standardProps: a
  };
  for (let u of n)
    u(l, t, e);
  return l;
}
function v1(t) {
  let { options: e } = t.context, n = e.eventLongPressDelay;
  return n == null && (n = e.longPressDelay), n;
}
class m1 extends Hn {
  constructor(e) {
    super(e), this.draggingSegEl = null, this.draggingSeg = null, this.eventRange = null, this.relevantEvents = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (s) => {
      let { component: o } = this, a = this.querySegEl(s), c = Mn(a), l = this.eventRange = c.eventRange;
      this.dragging.minDistance = o.context.options.eventDragMinDistance, this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(s.origEvent.target) || s.isTouch && this.component.props.eventSelection !== l.instance.instanceId);
    }, this.handleDragStart = (s) => {
      let { context: o } = this.component, a = this.eventRange;
      this.relevantEvents = Qo(o.getCurrentData().eventStore, this.eventRange.instance.instanceId);
      let c = this.querySegEl(s);
      this.draggingSegEl = c, this.draggingSeg = Mn(c), o.calendarApi.unselect(), o.emitter.trigger("eventResizeStart", {
        el: c,
        event: new Ae(o, a.def, a.instance),
        jsEvent: s.origEvent,
        view: o.viewApi
      });
    }, this.handleHitUpdate = (s, o, a) => {
      let { context: c } = this.component, l = this.relevantEvents, u = this.hitDragging.initialHit, d = this.eventRange.instance, f = null, h = null, p = !1, v = {
        affectedEvents: l,
        mutatedEvents: nt(),
        isEvent: !0
      };
      s && (s.componentId === u.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(u, s) || (f = b1(u, s, a.subjectEl.classList.contains("fc-event-resizer-start"), d.range))), f && (h = ra(l, c.getCurrentData().eventUiBases, f, c), v.mutatedEvents = h, hf(v, s.dateProfile, c) || (p = !0, f = null, h = null, v.mutatedEvents = null)), h ? c.dispatch({
        type: "SET_EVENT_RESIZE",
        state: v
      }) : c.dispatch({ type: "UNSET_EVENT_RESIZE" }), p ? zo() : Uo(), o || (f && is(u, s) && (f = null), this.validMutation = f, this.mutatedRelevantEvents = h);
    }, this.handleDragEnd = (s) => {
      let { context: o } = this.component, a = this.eventRange.def, c = this.eventRange.instance, l = new Ae(o, a, c), u = this.relevantEvents, d = this.mutatedRelevantEvents;
      if (o.emitter.trigger("eventResizeStop", {
        el: this.draggingSegEl,
        event: l,
        jsEvent: s.origEvent,
        view: o.viewApi
      }), this.validMutation) {
        let f = new Ae(o, d.defs[a.defId], c ? d.instances[c.instanceId] : null);
        o.dispatch({
          type: "MERGE_EVENTS",
          eventStore: d
        });
        let h = {
          oldEvent: l,
          event: f,
          relatedEvents: on(d, o, c),
          revert() {
            o.dispatch({
              type: "MERGE_EVENTS",
              eventStore: u
              // the pre-change events
            });
          }
        };
        o.emitter.trigger("eventResize", Object.assign(Object.assign({}, h), { el: this.draggingSegEl, startDelta: this.validMutation.startDelta || me(0), endDelta: this.validMutation.endDelta || me(0), jsEvent: s.origEvent, view: o.viewApi })), o.emitter.trigger("eventChange", h);
      } else
        o.emitter.trigger("_noEventResize");
      this.draggingSeg = null, this.relevantEvents = null, this.validMutation = null;
    };
    let { component: n } = e, r = this.dragging = new hr(e.el);
    r.pointer.selector = ".fc-event-resizer", r.touchScrollAllowed = !1, r.autoScroller.isEnabled = n.context.options.dragScroll;
    let i = this.hitDragging = new rs(this.dragging, sa(e));
    i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  querySegEl(e) {
    return We(e.subjectEl, ".fc-event");
  }
}
function b1(t, e, n, r) {
  let i = t.context.dateEnv, s = t.dateSpan.range.start, o = e.dateSpan.range.start, a = Sn(s, o, i, t.largeUnit);
  if (n) {
    if (i.add(r.start, a) < r.end)
      return { startDelta: a };
  } else if (i.add(r.end, a) > r.start)
    return { endDelta: a };
  return null;
}
class y1 {
  constructor(e) {
    this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = (r) => {
      r.jsEvent && (this.isRecentPointerDateSelect = !0);
    }, this.onDocumentPointerDown = (r) => {
      let i = this.context.options.unselectCancel, s = Su(r.origEvent);
      this.matchesCancel = !!We(s, i), this.matchesEvent = !!We(s, pr.SELECTOR);
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
    let n = this.documentPointer = new $f(document);
    n.shouldIgnoreMove = !0, n.shouldWatchScroll = !1, n.emitter.on("pointerdown", this.onDocumentPointerDown), n.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
  }
  destroy() {
    this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
  }
}
const x1 = {
  fixedMirrorParent: L
}, w1 = {
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
oa.dataAttrPrefix = "";
var E1 = Ht({
  name: "@fullcalendar/interaction",
  componentInteractions: [f1, d1, pr, m1],
  calendarInteractions: [y1],
  elementDraggingImpl: hr,
  optionRefiners: x1,
  listenerRefiners: w1
}), ae = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _1(t) {
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
var Fl = {}, S1 = {
  get exports() {
    return Fl;
  },
  set exports(t) {
    Fl = t;
  }
};
function Zn(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var fi = {}, A1 = {
  get exports() {
    return fi;
  },
  set exports(t) {
    fi = t;
  }
};
const C1 = {}, D1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: C1
}, Symbol.toStringTag, { value: "Module" })), R1 = /* @__PURE__ */ _1(D1);
var zl;
function ge() {
  return zl || (zl = 1, function(t, e) {
    (function(n, r) {
      t.exports = r();
    })(ae, function() {
      var n = n || function(r, i) {
        var s;
        if (typeof window < "u" && window.crypto && (s = window.crypto), typeof self < "u" && self.crypto && (s = self.crypto), typeof globalThis < "u" && globalThis.crypto && (s = globalThis.crypto), !s && typeof window < "u" && window.msCrypto && (s = window.msCrypto), !s && typeof ae < "u" && ae.crypto && (s = ae.crypto), !s && typeof Zn == "function")
          try {
            s = R1;
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
            var y;
            return x.prototype = g, y = new x(), x.prototype = null, y;
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
            var g = this.words, y = x.words, E = this.sigBytes, S = x.sigBytes;
            if (this.clamp(), E % 4)
              for (var _ = 0; _ < S; _++) {
                var C = y[_ >>> 2] >>> 24 - _ % 4 * 8 & 255;
                g[E + _ >>> 2] |= C << 24 - (E + _) % 4 * 8;
              }
            else
              for (var N = 0; N < S; N += 4)
                g[E + N >>> 2] = y[N >>> 2];
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
            x[g >>> 2] &= 4294967295 << 32 - g % 4 * 8, x.length = r.ceil(g / 4);
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
            for (var g = [], y = 0; y < x; y += 4)
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
            for (var g = x.words, y = x.sigBytes, E = [], S = 0; S < y; S++) {
              var _ = g[S >>> 2] >>> 24 - S % 4 * 8 & 255;
              E.push((_ >>> 4).toString(16)), E.push((_ & 15).toString(16));
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
            for (var g = x.length, y = [], E = 0; E < g; E += 2)
              y[E >>> 3] |= parseInt(x.substr(E, 2), 16) << 24 - E % 8 * 4;
            return new d.init(y, g / 2);
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
            for (var g = x.words, y = x.sigBytes, E = [], S = 0; S < y; S++) {
              var _ = g[S >>> 2] >>> 24 - S % 4 * 8 & 255;
              E.push(String.fromCharCode(_));
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
            for (var g = x.length, y = [], E = 0; E < g; E++)
              y[E >>> 2] |= (x.charCodeAt(E) & 255) << 24 - E % 4 * 8;
            return new d.init(y, g);
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
            var g, y = this._data, E = y.words, S = y.sigBytes, _ = this.blockSize, C = _ * 4, N = S / C;
            x ? N = r.ceil(N) : N = r.max((N | 0) - this._minBufferSize, 0);
            var D = N * _, k = r.min(D * 4, S);
            if (D) {
              for (var P = 0; P < D; P += _)
                this._doProcessBlock(E, P);
              g = E.splice(0, D), y.sigBytes -= k;
            }
            return new d.init(g, k);
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
            return function(g, y) {
              return new x.init(y).finalize(g);
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
            return function(g, y) {
              return new m.HMAC.init(x, y).finalize(g);
            };
          }
        });
        var m = c.algo = {};
        return c;
      }(Math);
      return n;
    });
  }(A1)), fi;
}
var di = {}, T1 = {
  get exports() {
    return di;
  },
  set exports(t) {
    di = t;
  }
}, Ul;
function ss() {
  return Ul || (Ul = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(ge());
    })(ae, function(n) {
      return function(r) {
        var i = n, s = i.lib, o = s.Base, a = s.WordArray, c = i.x64 = {};
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
            l = this.words = l || [], u != r ? this.sigBytes = u : this.sigBytes = l.length * 8;
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
      }(), n;
    });
  }(T1)), di;
}
var hi = {}, k1 = {
  get exports() {
    return hi;
  },
  set exports(t) {
    hi = t;
  }
}, Wl;
function I1() {
  return Wl || (Wl = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(ge());
    })(ae, function(n) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var r = n, i = r.lib, s = i.WordArray, o = s.init, a = s.init = function(c) {
            if (c instanceof ArrayBuffer && (c = new Uint8Array(c)), (c instanceof Int8Array || typeof Uint8ClampedArray < "u" && c instanceof Uint8ClampedArray || c instanceof Int16Array || c instanceof Uint16Array || c instanceof Int32Array || c instanceof Uint32Array || c instanceof Float32Array || c instanceof Float64Array) && (c = new Uint8Array(c.buffer, c.byteOffset, c.byteLength)), c instanceof Uint8Array) {
              for (var l = c.byteLength, u = [], d = 0; d < l; d++)
                u[d >>> 2] |= c[d] << 24 - d % 4 * 8;
              o.call(this, u, l);
            } else
              o.apply(this, arguments);
          };
          a.prototype = s;
        }
      }(), n.lib.WordArray;
    });
  }(k1)), hi;
}
var pi = {}, M1 = {
  get exports() {
    return pi;
  },
  set exports(t) {
    pi = t;
  }
}, jl;
function N1() {
  return jl || (jl = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(ge());
    })(ae, function(n) {
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
      }(), n.enc.Utf16;
    });
  }(M1)), pi;
}
var gi = {}, O1 = {
  get exports() {
    return gi;
  },
  set exports(t) {
    gi = t;
  }
}, Vl;
function gn() {
  return Vl || (Vl = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(ge());
    })(ae, function(n) {
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
          stringify: function(c) {
            var l = c.words, u = c.sigBytes, d = this._map;
            c.clamp();
            for (var f = [], h = 0; h < u; h += 3)
              for (var p = l[h >>> 2] >>> 24 - h % 4 * 8 & 255, v = l[h + 1 >>> 2] >>> 24 - (h + 1) % 4 * 8 & 255, b = l[h + 2 >>> 2] >>> 24 - (h + 2) % 4 * 8 & 255, m = p << 16 | v << 8 | b, x = 0; x < 4 && h + x * 0.75 < u; x++)
                f.push(d.charAt(m >>> 6 * (3 - x) & 63));
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
      }(), n.enc.Base64;
    });
  }(O1)), gi;
}
var vi = {}, B1 = {
  get exports() {
    return vi;
  },
  set exports(t) {
    vi = t;
  }
}, $l;
function P1() {
  return $l || ($l = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(ge());
    })(ae, function(n) {
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
          stringify: function(c, l = !0) {
            var u = c.words, d = c.sigBytes, f = l ? this._safe_map : this._map;
            c.clamp();
            for (var h = [], p = 0; p < d; p += 3)
              for (var v = u[p >>> 2] >>> 24 - p % 4 * 8 & 255, b = u[p + 1 >>> 2] >>> 24 - (p + 1) % 4 * 8 & 255, m = u[p + 2 >>> 2] >>> 24 - (p + 2) % 4 * 8 & 255, x = v << 16 | b << 8 | m, g = 0; g < 4 && p + g * 0.75 < d; g++)
                h.push(f.charAt(x >>> 6 * (3 - g) & 63));
            var y = f.charAt(64);
            if (y)
              for (; h.length % 4; )
                h.push(y);
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
      }(), n.enc.Base64url;
    });
  }(B1)), vi;
}
var mi = {}, H1 = {
  get exports() {
    return mi;
  },
  set exports(t) {
    mi = t;
  }
}, ql;
function vn() {
  return ql || (ql = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(ge());
    })(ae, function(n) {
      return function(r) {
        var i = n, s = i.lib, o = s.WordArray, a = s.Hasher, c = i.algo, l = [];
        (function() {
          for (var v = 0; v < 64; v++)
            l[v] = r.abs(r.sin(v + 1)) * 4294967296 | 0;
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
            for (var m = 0; m < 16; m++) {
              var x = b + m, g = v[x];
              v[x] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360;
            }
            var y = this._hash.words, E = v[b + 0], S = v[b + 1], _ = v[b + 2], C = v[b + 3], N = v[b + 4], D = v[b + 5], k = v[b + 6], P = v[b + 7], B = v[b + 8], z = v[b + 9], H = v[b + 10], j = v[b + 11], G = v[b + 12], J = v[b + 13], ee = v[b + 14], K = v[b + 15], F = y[0], U = y[1], V = y[2], $ = y[3];
            F = d(F, U, V, $, E, 7, l[0]), $ = d($, F, U, V, S, 12, l[1]), V = d(V, $, F, U, _, 17, l[2]), U = d(U, V, $, F, C, 22, l[3]), F = d(F, U, V, $, N, 7, l[4]), $ = d($, F, U, V, D, 12, l[5]), V = d(V, $, F, U, k, 17, l[6]), U = d(U, V, $, F, P, 22, l[7]), F = d(F, U, V, $, B, 7, l[8]), $ = d($, F, U, V, z, 12, l[9]), V = d(V, $, F, U, H, 17, l[10]), U = d(U, V, $, F, j, 22, l[11]), F = d(F, U, V, $, G, 7, l[12]), $ = d($, F, U, V, J, 12, l[13]), V = d(V, $, F, U, ee, 17, l[14]), U = d(U, V, $, F, K, 22, l[15]), F = f(F, U, V, $, S, 5, l[16]), $ = f($, F, U, V, k, 9, l[17]), V = f(V, $, F, U, j, 14, l[18]), U = f(U, V, $, F, E, 20, l[19]), F = f(F, U, V, $, D, 5, l[20]), $ = f($, F, U, V, H, 9, l[21]), V = f(V, $, F, U, K, 14, l[22]), U = f(U, V, $, F, N, 20, l[23]), F = f(F, U, V, $, z, 5, l[24]), $ = f($, F, U, V, ee, 9, l[25]), V = f(V, $, F, U, C, 14, l[26]), U = f(U, V, $, F, B, 20, l[27]), F = f(F, U, V, $, J, 5, l[28]), $ = f($, F, U, V, _, 9, l[29]), V = f(V, $, F, U, P, 14, l[30]), U = f(U, V, $, F, G, 20, l[31]), F = h(F, U, V, $, D, 4, l[32]), $ = h($, F, U, V, B, 11, l[33]), V = h(V, $, F, U, j, 16, l[34]), U = h(U, V, $, F, ee, 23, l[35]), F = h(F, U, V, $, S, 4, l[36]), $ = h($, F, U, V, N, 11, l[37]), V = h(V, $, F, U, P, 16, l[38]), U = h(U, V, $, F, H, 23, l[39]), F = h(F, U, V, $, J, 4, l[40]), $ = h($, F, U, V, E, 11, l[41]), V = h(V, $, F, U, C, 16, l[42]), U = h(U, V, $, F, k, 23, l[43]), F = h(F, U, V, $, z, 4, l[44]), $ = h($, F, U, V, G, 11, l[45]), V = h(V, $, F, U, K, 16, l[46]), U = h(U, V, $, F, _, 23, l[47]), F = p(F, U, V, $, E, 6, l[48]), $ = p($, F, U, V, P, 10, l[49]), V = p(V, $, F, U, ee, 15, l[50]), U = p(U, V, $, F, D, 21, l[51]), F = p(F, U, V, $, G, 6, l[52]), $ = p($, F, U, V, C, 10, l[53]), V = p(V, $, F, U, H, 15, l[54]), U = p(U, V, $, F, S, 21, l[55]), F = p(F, U, V, $, B, 6, l[56]), $ = p($, F, U, V, K, 10, l[57]), V = p(V, $, F, U, k, 15, l[58]), U = p(U, V, $, F, J, 21, l[59]), F = p(F, U, V, $, N, 6, l[60]), $ = p($, F, U, V, j, 10, l[61]), V = p(V, $, F, U, _, 15, l[62]), U = p(U, V, $, F, z, 21, l[63]), y[0] = y[0] + F | 0, y[1] = y[1] + U | 0, y[2] = y[2] + V | 0, y[3] = y[3] + $ | 0;
          },
          _doFinalize: function() {
            var v = this._data, b = v.words, m = this._nDataBytes * 8, x = v.sigBytes * 8;
            b[x >>> 5] |= 128 << 24 - x % 32;
            var g = r.floor(m / 4294967296), y = m;
            b[(x + 64 >>> 9 << 4) + 15] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, b[(x + 64 >>> 9 << 4) + 14] = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, v.sigBytes = (b.length + 1) * 4, this._process();
            for (var E = this._hash, S = E.words, _ = 0; _ < 4; _++) {
              var C = S[_];
              S[_] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360;
            }
            return E;
          },
          clone: function() {
            var v = a.clone.call(this);
            return v._hash = this._hash.clone(), v;
          }
        });
        function d(v, b, m, x, g, y, E) {
          var S = v + (b & m | ~b & x) + g + E;
          return (S << y | S >>> 32 - y) + b;
        }
        function f(v, b, m, x, g, y, E) {
          var S = v + (b & x | m & ~x) + g + E;
          return (S << y | S >>> 32 - y) + b;
        }
        function h(v, b, m, x, g, y, E) {
          var S = v + (b ^ m ^ x) + g + E;
          return (S << y | S >>> 32 - y) + b;
        }
        function p(v, b, m, x, g, y, E) {
          var S = v + (m ^ (b | ~x)) + g + E;
          return (S << y | S >>> 32 - y) + b;
        }
        i.MD5 = a._createHelper(u), i.HmacMD5 = a._createHmacHelper(u);
      }(Math), n.MD5;
    });
  }(H1)), mi;
}
var bi = {}, L1 = {
  get exports() {
    return bi;
  },
  set exports(t) {
    bi = t;
  }
}, Gl;
function va() {
  return Gl || (Gl = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(ge());
    })(ae, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.WordArray, o = i.Hasher, a = r.algo, c = [], l = a.SHA1 = o.extend({
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
            for (var f = this._hash.words, h = f[0], p = f[1], v = f[2], b = f[3], m = f[4], x = 0; x < 80; x++) {
              if (x < 16)
                c[x] = u[d + x] | 0;
              else {
                var g = c[x - 3] ^ c[x - 8] ^ c[x - 14] ^ c[x - 16];
                c[x] = g << 1 | g >>> 31;
              }
              var y = (h << 5 | h >>> 27) + m + c[x];
              x < 20 ? y += (p & v | ~p & b) + 1518500249 : x < 40 ? y += (p ^ v ^ b) + 1859775393 : x < 60 ? y += (p & v | p & b | v & b) - 1894007588 : y += (p ^ v ^ b) - 899497514, m = b, b = v, v = p << 30 | p >>> 2, p = h, h = y;
            }
            f[0] = f[0] + h | 0, f[1] = f[1] + p | 0, f[2] = f[2] + v | 0, f[3] = f[3] + b | 0, f[4] = f[4] + m | 0;
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
        r.SHA1 = o._createHelper(l), r.HmacSHA1 = o._createHmacHelper(l);
      }(), n.SHA1;
    });
  }(L1)), bi;
}
var yi = {}, F1 = {
  get exports() {
    return yi;
  },
  set exports(t) {
    yi = t;
  }
}, Yl;
function Zf() {
  return Yl || (Yl = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(ge());
    })(ae, function(n) {
      return function(r) {
        var i = n, s = i.lib, o = s.WordArray, a = s.Hasher, c = i.algo, l = [], u = [];
        (function() {
          function h(m) {
            for (var x = r.sqrt(m), g = 2; g <= x; g++)
              if (!(m % g))
                return !1;
            return !0;
          }
          function p(m) {
            return (m - (m | 0)) * 4294967296 | 0;
          }
          for (var v = 2, b = 0; b < 64; )
            h(v) && (b < 8 && (l[b] = p(r.pow(v, 1 / 2))), u[b] = p(r.pow(v, 1 / 3)), b++), v++;
        })();
        var d = [], f = c.SHA256 = a.extend({
          _doReset: function() {
            this._hash = new o.init(l.slice(0));
          },
          _doProcessBlock: function(h, p) {
            for (var v = this._hash.words, b = v[0], m = v[1], x = v[2], g = v[3], y = v[4], E = v[5], S = v[6], _ = v[7], C = 0; C < 64; C++) {
              if (C < 16)
                d[C] = h[p + C] | 0;
              else {
                var N = d[C - 15], D = (N << 25 | N >>> 7) ^ (N << 14 | N >>> 18) ^ N >>> 3, k = d[C - 2], P = (k << 15 | k >>> 17) ^ (k << 13 | k >>> 19) ^ k >>> 10;
                d[C] = D + d[C - 7] + P + d[C - 16];
              }
              var B = y & E ^ ~y & S, z = b & m ^ b & x ^ m & x, H = (b << 30 | b >>> 2) ^ (b << 19 | b >>> 13) ^ (b << 10 | b >>> 22), j = (y << 26 | y >>> 6) ^ (y << 21 | y >>> 11) ^ (y << 7 | y >>> 25), G = _ + j + B + u[C] + d[C], J = H + z;
              _ = S, S = E, E = y, y = g + G | 0, g = x, x = m, m = b, b = G + J | 0;
            }
            v[0] = v[0] + b | 0, v[1] = v[1] + m | 0, v[2] = v[2] + x | 0, v[3] = v[3] + g | 0, v[4] = v[4] + y | 0, v[5] = v[5] + E | 0, v[6] = v[6] + S | 0, v[7] = v[7] + _ | 0;
          },
          _doFinalize: function() {
            var h = this._data, p = h.words, v = this._nDataBytes * 8, b = h.sigBytes * 8;
            return p[b >>> 5] |= 128 << 24 - b % 32, p[(b + 64 >>> 9 << 4) + 14] = r.floor(v / 4294967296), p[(b + 64 >>> 9 << 4) + 15] = v, h.sigBytes = p.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var h = a.clone.call(this);
            return h._hash = this._hash.clone(), h;
          }
        });
        i.SHA256 = a._createHelper(f), i.HmacSHA256 = a._createHmacHelper(f);
      }(Math), n.SHA256;
    });
  }(F1)), yi;
}
var xi = {}, z1 = {
  get exports() {
    return xi;
  },
  set exports(t) {
    xi = t;
  }
}, Ql;
function U1() {
  return Ql || (Ql = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), Zf());
    })(ae, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.WordArray, o = r.algo, a = o.SHA256, c = o.SHA224 = a.extend({
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
        r.SHA224 = a._createHelper(c), r.HmacSHA224 = a._createHmacHelper(c);
      }(), n.SHA224;
    });
  }(z1)), xi;
}
var wi = {}, W1 = {
  get exports() {
    return wi;
  },
  set exports(t) {
    wi = t;
  }
}, Zl;
function Xf() {
  return Zl || (Zl = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), ss());
    })(ae, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.Hasher, o = r.x64, a = o.Word, c = o.WordArray, l = r.algo;
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
            for (var b = this._hash.words, m = b[0], x = b[1], g = b[2], y = b[3], E = b[4], S = b[5], _ = b[6], C = b[7], N = m.high, D = m.low, k = x.high, P = x.low, B = g.high, z = g.low, H = y.high, j = y.low, G = E.high, J = E.low, ee = S.high, K = S.low, F = _.high, U = _.low, V = C.high, $ = C.low, he = N, be = D, De = k, le = P, Re = B, Le = z, At = H, it = j, Je = G, $e = J, et = ee, Xt = K, Kt = F, mt = U, Jt = V, Ct = $, qe = 0; qe < 80; qe++) {
              var Ge, ct, en = f[qe];
              if (qe < 16)
                ct = en.high = p[v + qe * 2] | 0, Ge = en.low = p[v + qe * 2 + 1] | 0;
              else {
                var Fn = f[qe - 15], Dt = Fn.high, Lt = Fn.low, vr = (Dt >>> 1 | Lt << 31) ^ (Dt >>> 8 | Lt << 24) ^ Dt >>> 7, zn = (Lt >>> 1 | Dt << 31) ^ (Lt >>> 8 | Dt << 24) ^ (Lt >>> 7 | Dt << 25), Un = f[qe - 2], Rt = Un.high, Ft = Un.low, mr = (Rt >>> 19 | Ft << 13) ^ (Rt << 3 | Ft >>> 29) ^ Rt >>> 6, bn = (Ft >>> 19 | Rt << 13) ^ (Ft << 3 | Rt >>> 29) ^ (Ft >>> 6 | Rt << 26), br = f[qe - 7], ps = br.high, Wn = br.low, jn = f[qe - 16], gs = jn.high, ut = jn.low;
                Ge = zn + Wn, ct = vr + ps + (Ge >>> 0 < zn >>> 0 ? 1 : 0), Ge = Ge + bn, ct = ct + mr + (Ge >>> 0 < bn >>> 0 ? 1 : 0), Ge = Ge + ut, ct = ct + gs + (Ge >>> 0 < ut >>> 0 ? 1 : 0), en.high = ct, en.low = Ge;
              }
              var vs = Je & et ^ ~Je & Kt, yr = $e & Xt ^ ~$e & mt, xr = he & De ^ he & Re ^ De & Re, ms = be & le ^ be & Le ^ le & Le, bs = (he >>> 28 | be << 4) ^ (he << 30 | be >>> 2) ^ (he << 25 | be >>> 7), wr = (be >>> 28 | he << 4) ^ (be << 30 | he >>> 2) ^ (be << 25 | he >>> 7), ys = (Je >>> 14 | $e << 18) ^ (Je >>> 18 | $e << 14) ^ (Je << 23 | $e >>> 9), xs = ($e >>> 14 | Je << 18) ^ ($e >>> 18 | Je << 14) ^ ($e << 23 | Je >>> 9), Er = d[qe], ws = Er.high, _r = Er.low, Ye = Ct + xs, bt = Jt + ys + (Ye >>> 0 < Ct >>> 0 ? 1 : 0), Ye = Ye + yr, bt = bt + vs + (Ye >>> 0 < yr >>> 0 ? 1 : 0), Ye = Ye + _r, bt = bt + ws + (Ye >>> 0 < _r >>> 0 ? 1 : 0), Ye = Ye + Ge, bt = bt + ct + (Ye >>> 0 < Ge >>> 0 ? 1 : 0), Vn = wr + ms, Es = bs + xr + (Vn >>> 0 < wr >>> 0 ? 1 : 0);
              Jt = Kt, Ct = mt, Kt = et, mt = Xt, et = Je, Xt = $e, $e = it + Ye | 0, Je = At + bt + ($e >>> 0 < it >>> 0 ? 1 : 0) | 0, At = Re, it = Le, Re = De, Le = le, De = he, le = be, be = Ye + Vn | 0, he = bt + Es + (be >>> 0 < Ye >>> 0 ? 1 : 0) | 0;
            }
            D = m.low = D + be, m.high = N + he + (D >>> 0 < be >>> 0 ? 1 : 0), P = x.low = P + le, x.high = k + De + (P >>> 0 < le >>> 0 ? 1 : 0), z = g.low = z + Le, g.high = B + Re + (z >>> 0 < Le >>> 0 ? 1 : 0), j = y.low = j + it, y.high = H + At + (j >>> 0 < it >>> 0 ? 1 : 0), J = E.low = J + $e, E.high = G + Je + (J >>> 0 < $e >>> 0 ? 1 : 0), K = S.low = K + Xt, S.high = ee + et + (K >>> 0 < Xt >>> 0 ? 1 : 0), U = _.low = U + mt, _.high = F + Kt + (U >>> 0 < mt >>> 0 ? 1 : 0), $ = C.low = $ + Ct, C.high = V + Jt + ($ >>> 0 < Ct >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var p = this._data, v = p.words, b = this._nDataBytes * 8, m = p.sigBytes * 8;
            v[m >>> 5] |= 128 << 24 - m % 32, v[(m + 128 >>> 10 << 5) + 30] = Math.floor(b / 4294967296), v[(m + 128 >>> 10 << 5) + 31] = b, p.sigBytes = v.length * 4, this._process();
            var x = this._hash.toX32();
            return x;
          },
          clone: function() {
            var p = s.clone.call(this);
            return p._hash = this._hash.clone(), p;
          },
          blockSize: 1024 / 32
        });
        r.SHA512 = s._createHelper(h), r.HmacSHA512 = s._createHmacHelper(h);
      }(), n.SHA512;
    });
  }(W1)), wi;
}
var Ei = {}, j1 = {
  get exports() {
    return Ei;
  },
  set exports(t) {
    Ei = t;
  }
}, Xl;
function V1() {
  return Xl || (Xl = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), ss(), Xf());
    })(ae, function(n) {
      return function() {
        var r = n, i = r.x64, s = i.Word, o = i.WordArray, a = r.algo, c = a.SHA512, l = a.SHA384 = c.extend({
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
        r.SHA384 = c._createHelper(l), r.HmacSHA384 = c._createHmacHelper(l);
      }(), n.SHA384;
    });
  }(j1)), Ei;
}
var _i = {}, $1 = {
  get exports() {
    return _i;
  },
  set exports(t) {
    _i = t;
  }
}, Kl;
function q1() {
  return Kl || (Kl = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), ss());
    })(ae, function(n) {
      return function(r) {
        var i = n, s = i.lib, o = s.WordArray, a = s.Hasher, c = i.x64, l = c.Word, u = i.algo, d = [], f = [], h = [];
        (function() {
          for (var b = 1, m = 0, x = 0; x < 24; x++) {
            d[b + 5 * m] = (x + 1) * (x + 2) / 2 % 64;
            var g = m % 5, y = (2 * b + 3 * m) % 5;
            b = g, m = y;
          }
          for (var b = 0; b < 5; b++)
            for (var m = 0; m < 5; m++)
              f[b + 5 * m] = m + (2 * b + 3 * m) % 5 * 5;
          for (var E = 1, S = 0; S < 24; S++) {
            for (var _ = 0, C = 0, N = 0; N < 7; N++) {
              if (E & 1) {
                var D = (1 << N) - 1;
                D < 32 ? C ^= 1 << D : _ ^= 1 << D - 32;
              }
              E & 128 ? E = E << 1 ^ 113 : E <<= 1;
            }
            h[S] = l.create(_, C);
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
            for (var b = this._state = [], m = 0; m < 25; m++)
              b[m] = new l.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(b, m) {
            for (var x = this._state, g = this.blockSize / 2, y = 0; y < g; y++) {
              var E = b[m + 2 * y], S = b[m + 2 * y + 1];
              E = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, S = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360;
              var _ = x[y];
              _.high ^= S, _.low ^= E;
            }
            for (var C = 0; C < 24; C++) {
              for (var N = 0; N < 5; N++) {
                for (var D = 0, k = 0, P = 0; P < 5; P++) {
                  var _ = x[N + 5 * P];
                  D ^= _.high, k ^= _.low;
                }
                var B = p[N];
                B.high = D, B.low = k;
              }
              for (var N = 0; N < 5; N++)
                for (var z = p[(N + 4) % 5], H = p[(N + 1) % 5], j = H.high, G = H.low, D = z.high ^ (j << 1 | G >>> 31), k = z.low ^ (G << 1 | j >>> 31), P = 0; P < 5; P++) {
                  var _ = x[N + 5 * P];
                  _.high ^= D, _.low ^= k;
                }
              for (var J = 1; J < 25; J++) {
                var D, k, _ = x[J], ee = _.high, K = _.low, F = d[J];
                F < 32 ? (D = ee << F | K >>> 32 - F, k = K << F | ee >>> 32 - F) : (D = K << F - 32 | ee >>> 64 - F, k = ee << F - 32 | K >>> 64 - F);
                var U = p[f[J]];
                U.high = D, U.low = k;
              }
              var V = p[0], $ = x[0];
              V.high = $.high, V.low = $.low;
              for (var N = 0; N < 5; N++)
                for (var P = 0; P < 5; P++) {
                  var J = N + 5 * P, _ = x[J], he = p[J], be = p[(N + 1) % 5 + 5 * P], De = p[(N + 2) % 5 + 5 * P];
                  _.high = he.high ^ ~be.high & De.high, _.low = he.low ^ ~be.low & De.low;
                }
              var _ = x[0], le = h[C];
              _.high ^= le.high, _.low ^= le.low;
            }
          },
          _doFinalize: function() {
            var b = this._data, m = b.words;
            this._nDataBytes * 8;
            var x = b.sigBytes * 8, g = this.blockSize * 32;
            m[x >>> 5] |= 1 << 24 - x % 32, m[(r.ceil((x + 1) / g) * g >>> 5) - 1] |= 128, b.sigBytes = m.length * 4, this._process();
            for (var y = this._state, E = this.cfg.outputLength / 8, S = E / 8, _ = [], C = 0; C < S; C++) {
              var N = y[C], D = N.high, k = N.low;
              D = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360, k = (k << 8 | k >>> 24) & 16711935 | (k << 24 | k >>> 8) & 4278255360, _.push(k), _.push(D);
            }
            return new o.init(_, E);
          },
          clone: function() {
            for (var b = a.clone.call(this), m = b._state = this._state.slice(0), x = 0; x < 25; x++)
              m[x] = m[x].clone();
            return b;
          }
        });
        i.SHA3 = a._createHelper(v), i.HmacSHA3 = a._createHmacHelper(v);
      }(Math), n.SHA3;
    });
  }($1)), _i;
}
var Si = {}, G1 = {
  get exports() {
    return Si;
  },
  set exports(t) {
    Si = t;
  }
}, Jl;
function Y1() {
  return Jl || (Jl = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(ge());
    })(ae, function(n) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(r) {
        var i = n, s = i.lib, o = s.WordArray, a = s.Hasher, c = i.algo, l = o.create([
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
          _doProcessBlock: function(S, _) {
            for (var C = 0; C < 16; C++) {
              var N = _ + C, D = S[N];
              S[N] = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360;
            }
            var k = this._hash.words, P = h.words, B = p.words, z = l.words, H = u.words, j = d.words, G = f.words, J, ee, K, F, U, V, $, he, be, De;
            V = J = k[0], $ = ee = k[1], he = K = k[2], be = F = k[3], De = U = k[4];
            for (var le, C = 0; C < 80; C += 1)
              le = J + S[_ + z[C]] | 0, C < 16 ? le += b(ee, K, F) + P[0] : C < 32 ? le += m(ee, K, F) + P[1] : C < 48 ? le += x(ee, K, F) + P[2] : C < 64 ? le += g(ee, K, F) + P[3] : le += y(ee, K, F) + P[4], le = le | 0, le = E(le, j[C]), le = le + U | 0, J = U, U = F, F = E(K, 10), K = ee, ee = le, le = V + S[_ + H[C]] | 0, C < 16 ? le += y($, he, be) + B[0] : C < 32 ? le += g($, he, be) + B[1] : C < 48 ? le += x($, he, be) + B[2] : C < 64 ? le += m($, he, be) + B[3] : le += b($, he, be) + B[4], le = le | 0, le = E(le, G[C]), le = le + De | 0, V = De, De = be, be = E(he, 10), he = $, $ = le;
            le = k[1] + K + be | 0, k[1] = k[2] + F + De | 0, k[2] = k[3] + U + V | 0, k[3] = k[4] + J + $ | 0, k[4] = k[0] + ee + he | 0, k[0] = le;
          },
          _doFinalize: function() {
            var S = this._data, _ = S.words, C = this._nDataBytes * 8, N = S.sigBytes * 8;
            _[N >>> 5] |= 128 << 24 - N % 32, _[(N + 64 >>> 9 << 4) + 14] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, S.sigBytes = (_.length + 1) * 4, this._process();
            for (var D = this._hash, k = D.words, P = 0; P < 5; P++) {
              var B = k[P];
              k[P] = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360;
            }
            return D;
          },
          clone: function() {
            var S = a.clone.call(this);
            return S._hash = this._hash.clone(), S;
          }
        });
        function b(S, _, C) {
          return S ^ _ ^ C;
        }
        function m(S, _, C) {
          return S & _ | ~S & C;
        }
        function x(S, _, C) {
          return (S | ~_) ^ C;
        }
        function g(S, _, C) {
          return S & C | _ & ~C;
        }
        function y(S, _, C) {
          return S ^ (_ | ~C);
        }
        function E(S, _) {
          return S << _ | S >>> 32 - _;
        }
        i.RIPEMD160 = a._createHelper(v), i.HmacRIPEMD160 = a._createHmacHelper(v);
      }(), n.RIPEMD160;
    });
  }(G1)), Si;
}
var Ai = {}, Q1 = {
  get exports() {
    return Ai;
  },
  set exports(t) {
    Ai = t;
  }
}, ec;
function ma() {
  return ec || (ec = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(ge());
    })(ae, function(n) {
      (function() {
        var r = n, i = r.lib, s = i.Base, o = r.enc, a = o.Utf8, c = r.algo;
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
            for (var h = this._oKey = u.clone(), p = this._iKey = u.clone(), v = h.words, b = p.words, m = 0; m < d; m++)
              v[m] ^= 1549556828, b[m] ^= 909522486;
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
  }(Q1)), Ai;
}
var Ci = {}, Z1 = {
  get exports() {
    return Ci;
  },
  set exports(t) {
    Ci = t;
  }
}, tc;
function X1() {
  return tc || (tc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), va(), ma());
    })(ae, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.Base, o = i.WordArray, a = r.algo, c = a.SHA1, l = a.HMAC, u = a.PBKDF2 = s.extend({
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
            for (var h = this.cfg, p = l.create(h.hasher, d), v = o.create(), b = o.create([1]), m = v.words, x = b.words, g = h.keySize, y = h.iterations; m.length < g; ) {
              var E = p.update(f).finalize(b);
              p.reset();
              for (var S = E.words, _ = S.length, C = E, N = 1; N < y; N++) {
                C = p.finalize(C), p.reset();
                for (var D = C.words, k = 0; k < _; k++)
                  S[k] ^= D[k];
              }
              v.concat(E), x[0]++;
            }
            return v.sigBytes = g * 4, v;
          }
        });
        r.PBKDF2 = function(d, f, h) {
          return u.create(h).compute(d, f);
        };
      }(), n.PBKDF2;
    });
  }(Z1)), Ci;
}
var Di = {}, K1 = {
  get exports() {
    return Di;
  },
  set exports(t) {
    Di = t;
  }
}, nc;
function mn() {
  return nc || (nc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), va(), ma());
    })(ae, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.Base, o = i.WordArray, a = r.algo, c = a.MD5, l = a.EvpKDF = s.extend({
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
            for (var f, h = this.cfg, p = h.hasher.create(), v = o.create(), b = v.words, m = h.keySize, x = h.iterations; b.length < m; ) {
              f && p.update(f), f = p.update(u).finalize(d), p.reset();
              for (var g = 1; g < x; g++)
                f = p.finalize(f), p.reset();
              v.concat(f);
            }
            return v.sigBytes = m * 4, v;
          }
        });
        r.EvpKDF = function(u, d, f) {
          return l.create(f).compute(u, d);
        };
      }(), n.EvpKDF;
    });
  }(K1)), Di;
}
var Ri = {}, J1 = {
  get exports() {
    return Ri;
  },
  set exports(t) {
    Ri = t;
  }
}, rc;
function He() {
  return rc || (rc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), mn());
    })(ae, function(n) {
      n.lib.Cipher || function(r) {
        var i = n, s = i.lib, o = s.Base, a = s.WordArray, c = s.BufferedBlockAlgorithm, l = i.enc;
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
          createEncryptor: function(D, k) {
            return this.create(this._ENC_XFORM_MODE, D, k);
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
          createDecryptor: function(D, k) {
            return this.create(this._DEC_XFORM_MODE, D, k);
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
          init: function(D, k, P) {
            this.cfg = this.cfg.extend(P), this._xformMode = D, this._key = k, this.reset();
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
          process: function(D) {
            return this._append(D), this._process();
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
          finalize: function(D) {
            D && this._append(D);
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
            function D(k) {
              return typeof k == "string" ? N : S;
            }
            return function(k) {
              return {
                encrypt: function(P, B, z) {
                  return D(B).encrypt(k, P, B, z);
                },
                decrypt: function(P, B, z) {
                  return D(B).decrypt(k, P, B, z);
                }
              };
            };
          }()
        });
        s.StreamCipher = h.extend({
          _doFinalize: function() {
            var D = this._process(!0);
            return D;
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
          createEncryptor: function(D, k) {
            return this.Encryptor.create(D, k);
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
          createDecryptor: function(D, k) {
            return this.Decryptor.create(D, k);
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
          init: function(D, k) {
            this._cipher = D, this._iv = k;
          }
        }), b = p.CBC = function() {
          var D = v.extend();
          D.Encryptor = D.extend({
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
            processBlock: function(P, B) {
              var z = this._cipher, H = z.blockSize;
              k.call(this, P, B, H), z.encryptBlock(P, B), this._prevBlock = P.slice(B, B + H);
            }
          }), D.Decryptor = D.extend({
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
            processBlock: function(P, B) {
              var z = this._cipher, H = z.blockSize, j = P.slice(B, B + H);
              z.decryptBlock(P, B), k.call(this, P, B, H), this._prevBlock = j;
            }
          });
          function k(P, B, z) {
            var H, j = this._iv;
            j ? (H = j, this._iv = r) : H = this._prevBlock;
            for (var G = 0; G < z; G++)
              P[B + G] ^= H[G];
          }
          return D;
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
          pad: function(D, k) {
            for (var P = k * 4, B = P - D.sigBytes % P, z = B << 24 | B << 16 | B << 8 | B, H = [], j = 0; j < B; j += 4)
              H.push(z);
            var G = a.create(H, B);
            D.concat(G);
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
          unpad: function(D) {
            var k = D.words[D.sigBytes - 1 >>> 2] & 255;
            D.sigBytes -= k;
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
            var D;
            h.reset.call(this);
            var k = this.cfg, P = k.iv, B = k.mode;
            this._xformMode == this._ENC_XFORM_MODE ? D = B.createEncryptor : (D = B.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == D ? this._mode.init(this, P && P.words) : (this._mode = D.call(B, this, P && P.words), this._mode.__creator = D);
          },
          _doProcessBlock: function(D, k) {
            this._mode.processBlock(D, k);
          },
          _doFinalize: function() {
            var D, k = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (k.pad(this._data, this.blockSize), D = this._process(!0)) : (D = this._process(!0), k.unpad(D)), D;
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
          init: function(D) {
            this.mixIn(D);
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
          toString: function(D) {
            return (D || this.formatter).stringify(this);
          }
        }), y = i.format = {}, E = y.OpenSSL = {
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
          stringify: function(D) {
            var k, P = D.ciphertext, B = D.salt;
            return B ? k = a.create([1398893684, 1701076831]).concat(B).concat(P) : k = P, k.toString(u);
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
          parse: function(D) {
            var k, P = u.parse(D), B = P.words;
            return B[0] == 1398893684 && B[1] == 1701076831 && (k = a.create(B.slice(2, 4)), B.splice(0, 4), P.sigBytes -= 16), g.create({ ciphertext: P, salt: k });
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
          encrypt: function(D, k, P, B) {
            B = this.cfg.extend(B);
            var z = D.createEncryptor(P, B), H = z.finalize(k), j = z.cfg;
            return g.create({
              ciphertext: H,
              key: P,
              iv: j.iv,
              algorithm: D,
              mode: j.mode,
              padding: j.padding,
              blockSize: D.blockSize,
              formatter: B.format
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
          decrypt: function(D, k, P, B) {
            B = this.cfg.extend(B), k = this._parse(k, B.format);
            var z = D.createDecryptor(P, B).finalize(k.ciphertext);
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
          _parse: function(D, k) {
            return typeof D == "string" ? k.parse(D, this) : D;
          }
        }), _ = i.kdf = {}, C = _.OpenSSL = {
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
          execute: function(D, k, P, B) {
            B || (B = a.random(64 / 8));
            var z = f.create({ keySize: k + P }).compute(D, B), H = a.create(z.words.slice(k), P * 4);
            return z.sigBytes = k * 4, g.create({ key: z, iv: H, salt: B });
          }
        }, N = s.PasswordBasedCipher = S.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: S.cfg.extend({
            kdf: C
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
          encrypt: function(D, k, P, B) {
            B = this.cfg.extend(B);
            var z = B.kdf.execute(P, D.keySize, D.ivSize);
            B.iv = z.iv;
            var H = S.encrypt.call(this, D, k, z.key, B);
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
          decrypt: function(D, k, P, B) {
            B = this.cfg.extend(B), k = this._parse(k, B.format);
            var z = B.kdf.execute(P, D.keySize, D.ivSize, k.salt);
            B.iv = z.iv;
            var H = S.decrypt.call(this, D, k, z.key, B);
            return H;
          }
        });
      }();
    });
  }(J1)), Ri;
}
var Ti = {}, ey = {
  get exports() {
    return Ti;
  },
  set exports(t) {
    Ti = t;
  }
}, ic;
function ty() {
  return ic || (ic = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), He());
    })(ae, function(n) {
      return n.mode.CFB = function() {
        var r = n.lib.BlockCipherMode.extend();
        r.Encryptor = r.extend({
          processBlock: function(s, o) {
            var a = this._cipher, c = a.blockSize;
            i.call(this, s, o, c, a), this._prevBlock = s.slice(o, o + c);
          }
        }), r.Decryptor = r.extend({
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
        return r;
      }(), n.mode.CFB;
    });
  }(ey)), Ti;
}
var ki = {}, ny = {
  get exports() {
    return ki;
  },
  set exports(t) {
    ki = t;
  }
}, sc;
function ry() {
  return sc || (sc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), He());
    })(ae, function(n) {
      return n.mode.CTR = function() {
        var r = n.lib.BlockCipherMode.extend(), i = r.Encryptor = r.extend({
          processBlock: function(s, o) {
            var a = this._cipher, c = a.blockSize, l = this._iv, u = this._counter;
            l && (u = this._counter = l.slice(0), this._iv = void 0);
            var d = u.slice(0);
            a.encryptBlock(d, 0), u[c - 1] = u[c - 1] + 1 | 0;
            for (var f = 0; f < c; f++)
              s[o + f] ^= d[f];
          }
        });
        return r.Decryptor = i, r;
      }(), n.mode.CTR;
    });
  }(ny)), ki;
}
var Ii = {}, iy = {
  get exports() {
    return Ii;
  },
  set exports(t) {
    Ii = t;
  }
}, oc;
function sy() {
  return oc || (oc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), He());
    })(ae, function(n) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return n.mode.CTRGladman = function() {
        var r = n.lib.BlockCipherMode.extend();
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
        var o = r.Encryptor = r.extend({
          processBlock: function(a, c) {
            var l = this._cipher, u = l.blockSize, d = this._iv, f = this._counter;
            d && (f = this._counter = d.slice(0), this._iv = void 0), s(f);
            var h = f.slice(0);
            l.encryptBlock(h, 0);
            for (var p = 0; p < u; p++)
              a[c + p] ^= h[p];
          }
        });
        return r.Decryptor = o, r;
      }(), n.mode.CTRGladman;
    });
  }(iy)), Ii;
}
var Mi = {}, oy = {
  get exports() {
    return Mi;
  },
  set exports(t) {
    Mi = t;
  }
}, ac;
function ay() {
  return ac || (ac = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), He());
    })(ae, function(n) {
      return n.mode.OFB = function() {
        var r = n.lib.BlockCipherMode.extend(), i = r.Encryptor = r.extend({
          processBlock: function(s, o) {
            var a = this._cipher, c = a.blockSize, l = this._iv, u = this._keystream;
            l && (u = this._keystream = l.slice(0), this._iv = void 0), a.encryptBlock(u, 0);
            for (var d = 0; d < c; d++)
              s[o + d] ^= u[d];
          }
        });
        return r.Decryptor = i, r;
      }(), n.mode.OFB;
    });
  }(oy)), Mi;
}
var Ni = {}, ly = {
  get exports() {
    return Ni;
  },
  set exports(t) {
    Ni = t;
  }
}, lc;
function Kf() {
  return lc || (lc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), He());
    })(ae, function(n) {
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
  }(ly)), Ni;
}
var Oi = {}, cy = {
  get exports() {
    return Oi;
  },
  set exports(t) {
    Oi = t;
  }
}, cc;
function uy() {
  return cc || (cc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), He());
    })(ae, function(n) {
      return n.pad.AnsiX923 = {
        pad: function(r, i) {
          var s = r.sigBytes, o = i * 4, a = o - s % o, c = s + a - 1;
          r.clamp(), r.words[c >>> 2] |= a << 24 - c % 4 * 8, r.sigBytes += a;
        },
        unpad: function(r) {
          var i = r.words[r.sigBytes - 1 >>> 2] & 255;
          r.sigBytes -= i;
        }
      }, n.pad.Ansix923;
    });
  }(cy)), Oi;
}
var Bi = {}, fy = {
  get exports() {
    return Bi;
  },
  set exports(t) {
    Bi = t;
  }
}, uc;
function dy() {
  return uc || (uc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), He());
    })(ae, function(n) {
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
  }(fy)), Bi;
}
var Pi = {}, hy = {
  get exports() {
    return Pi;
  },
  set exports(t) {
    Pi = t;
  }
}, fc;
function py() {
  return fc || (fc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), He());
    })(ae, function(n) {
      return n.pad.Iso97971 = {
        pad: function(r, i) {
          r.concat(n.lib.WordArray.create([2147483648], 1)), n.pad.ZeroPadding.pad(r, i);
        },
        unpad: function(r) {
          n.pad.ZeroPadding.unpad(r), r.sigBytes--;
        }
      }, n.pad.Iso97971;
    });
  }(hy)), Pi;
}
var Hi = {}, gy = {
  get exports() {
    return Hi;
  },
  set exports(t) {
    Hi = t;
  }
}, dc;
function vy() {
  return dc || (dc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), He());
    })(ae, function(n) {
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
  }(gy)), Hi;
}
var Li = {}, my = {
  get exports() {
    return Li;
  },
  set exports(t) {
    Li = t;
  }
}, hc;
function by() {
  return hc || (hc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), He());
    })(ae, function(n) {
      return n.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, n.pad.NoPadding;
    });
  }(my)), Li;
}
var Fi = {}, yy = {
  get exports() {
    return Fi;
  },
  set exports(t) {
    Fi = t;
  }
}, pc;
function xy() {
  return pc || (pc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), He());
    })(ae, function(n) {
      return function(r) {
        var i = n, s = i.lib, o = s.CipherParams, a = i.enc, c = a.Hex, l = i.format;
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
      }(), n.format.Hex;
    });
  }(yy)), Fi;
}
var zi = {}, wy = {
  get exports() {
    return zi;
  },
  set exports(t) {
    zi = t;
  }
}, gc;
function Jf() {
  return gc || (gc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), gn(), vn(), mn(), He());
    })(ae, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.BlockCipher, o = r.algo, a = [], c = [], l = [], u = [], d = [], f = [], h = [], p = [], v = [], b = [];
        (function() {
          for (var g = [], y = 0; y < 256; y++)
            y < 128 ? g[y] = y << 1 : g[y] = y << 1 ^ 283;
          for (var E = 0, S = 0, y = 0; y < 256; y++) {
            var _ = S ^ S << 1 ^ S << 2 ^ S << 3 ^ S << 4;
            _ = _ >>> 8 ^ _ & 255 ^ 99, a[E] = _, c[_] = E;
            var C = g[E], N = g[C], D = g[N], k = g[_] * 257 ^ _ * 16843008;
            l[E] = k << 24 | k >>> 8, u[E] = k << 16 | k >>> 16, d[E] = k << 8 | k >>> 24, f[E] = k;
            var k = D * 16843009 ^ N * 65537 ^ C * 257 ^ E * 16843008;
            h[_] = k << 24 | k >>> 8, p[_] = k << 16 | k >>> 16, v[_] = k << 8 | k >>> 24, b[_] = k, E ? (E = C ^ g[g[g[D ^ C]]], S ^= g[g[S]]) : E = S = 1;
          }
        })();
        var m = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], x = o.AES = s.extend({
          _doReset: function() {
            var g;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var y = this._keyPriorReset = this._key, E = y.words, S = y.sigBytes / 4, _ = this._nRounds = S + 6, C = (_ + 1) * 4, N = this._keySchedule = [], D = 0; D < C; D++)
                D < S ? N[D] = E[D] : (g = N[D - 1], D % S ? S > 6 && D % S == 4 && (g = a[g >>> 24] << 24 | a[g >>> 16 & 255] << 16 | a[g >>> 8 & 255] << 8 | a[g & 255]) : (g = g << 8 | g >>> 24, g = a[g >>> 24] << 24 | a[g >>> 16 & 255] << 16 | a[g >>> 8 & 255] << 8 | a[g & 255], g ^= m[D / S | 0] << 24), N[D] = N[D - S] ^ g);
              for (var k = this._invKeySchedule = [], P = 0; P < C; P++) {
                var D = C - P;
                if (P % 4)
                  var g = N[D];
                else
                  var g = N[D - 4];
                P < 4 || D <= 4 ? k[P] = g : k[P] = h[a[g >>> 24]] ^ p[a[g >>> 16 & 255]] ^ v[a[g >>> 8 & 255]] ^ b[a[g & 255]];
              }
            }
          },
          encryptBlock: function(g, y) {
            this._doCryptBlock(g, y, this._keySchedule, l, u, d, f, a);
          },
          decryptBlock: function(g, y) {
            var E = g[y + 1];
            g[y + 1] = g[y + 3], g[y + 3] = E, this._doCryptBlock(g, y, this._invKeySchedule, h, p, v, b, c);
            var E = g[y + 1];
            g[y + 1] = g[y + 3], g[y + 3] = E;
          },
          _doCryptBlock: function(g, y, E, S, _, C, N, D) {
            for (var k = this._nRounds, P = g[y] ^ E[0], B = g[y + 1] ^ E[1], z = g[y + 2] ^ E[2], H = g[y + 3] ^ E[3], j = 4, G = 1; G < k; G++) {
              var J = S[P >>> 24] ^ _[B >>> 16 & 255] ^ C[z >>> 8 & 255] ^ N[H & 255] ^ E[j++], ee = S[B >>> 24] ^ _[z >>> 16 & 255] ^ C[H >>> 8 & 255] ^ N[P & 255] ^ E[j++], K = S[z >>> 24] ^ _[H >>> 16 & 255] ^ C[P >>> 8 & 255] ^ N[B & 255] ^ E[j++], F = S[H >>> 24] ^ _[P >>> 16 & 255] ^ C[B >>> 8 & 255] ^ N[z & 255] ^ E[j++];
              P = J, B = ee, z = K, H = F;
            }
            var J = (D[P >>> 24] << 24 | D[B >>> 16 & 255] << 16 | D[z >>> 8 & 255] << 8 | D[H & 255]) ^ E[j++], ee = (D[B >>> 24] << 24 | D[z >>> 16 & 255] << 16 | D[H >>> 8 & 255] << 8 | D[P & 255]) ^ E[j++], K = (D[z >>> 24] << 24 | D[H >>> 16 & 255] << 16 | D[P >>> 8 & 255] << 8 | D[B & 255]) ^ E[j++], F = (D[H >>> 24] << 24 | D[P >>> 16 & 255] << 16 | D[B >>> 8 & 255] << 8 | D[z & 255]) ^ E[j++];
            g[y] = J, g[y + 1] = ee, g[y + 2] = K, g[y + 3] = F;
          },
          keySize: 256 / 32
        });
        r.AES = s._createHelper(x);
      }(), n.AES;
    });
  }(wy)), zi;
}
var Ui = {}, Ey = {
  get exports() {
    return Ui;
  },
  set exports(t) {
    Ui = t;
  }
}, vc;
function _y() {
  return vc || (vc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), gn(), vn(), mn(), He());
    })(ae, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.WordArray, o = i.BlockCipher, a = r.algo, c = [
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
            for (var m = this._key, x = m.words, g = [], y = 0; y < 56; y++) {
              var E = c[y] - 1;
              g[y] = x[E >>> 5] >>> 31 - E % 32 & 1;
            }
            for (var S = this._subKeys = [], _ = 0; _ < 16; _++) {
              for (var C = S[_] = [], N = u[_], y = 0; y < 24; y++)
                C[y / 6 | 0] |= g[(l[y] - 1 + N) % 28] << 31 - y % 6, C[4 + (y / 6 | 0)] |= g[28 + (l[y + 24] - 1 + N) % 28] << 31 - y % 6;
              C[0] = C[0] << 1 | C[0] >>> 31;
              for (var y = 1; y < 7; y++)
                C[y] = C[y] >>> (y - 1) * 4 + 3;
              C[7] = C[7] << 5 | C[7] >>> 27;
            }
            for (var D = this._invSubKeys = [], y = 0; y < 16; y++)
              D[y] = S[15 - y];
          },
          encryptBlock: function(m, x) {
            this._doCryptBlock(m, x, this._subKeys);
          },
          decryptBlock: function(m, x) {
            this._doCryptBlock(m, x, this._invSubKeys);
          },
          _doCryptBlock: function(m, x, g) {
            this._lBlock = m[x], this._rBlock = m[x + 1], p.call(this, 4, 252645135), p.call(this, 16, 65535), v.call(this, 2, 858993459), v.call(this, 8, 16711935), p.call(this, 1, 1431655765);
            for (var y = 0; y < 16; y++) {
              for (var E = g[y], S = this._lBlock, _ = this._rBlock, C = 0, N = 0; N < 8; N++)
                C |= d[N][((_ ^ E[N]) & f[N]) >>> 0];
              this._lBlock = _, this._rBlock = S ^ C;
            }
            var D = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = D, p.call(this, 1, 1431655765), v.call(this, 8, 16711935), v.call(this, 2, 858993459), p.call(this, 16, 65535), p.call(this, 4, 252645135), m[x] = this._lBlock, m[x + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function p(m, x) {
          var g = (this._lBlock >>> m ^ this._rBlock) & x;
          this._rBlock ^= g, this._lBlock ^= g << m;
        }
        function v(m, x) {
          var g = (this._rBlock >>> m ^ this._lBlock) & x;
          this._lBlock ^= g, this._rBlock ^= g << m;
        }
        r.DES = o._createHelper(h);
        var b = a.TripleDES = o.extend({
          _doReset: function() {
            var m = this._key, x = m.words;
            if (x.length !== 2 && x.length !== 4 && x.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var g = x.slice(0, 2), y = x.length < 4 ? x.slice(0, 2) : x.slice(2, 4), E = x.length < 6 ? x.slice(0, 2) : x.slice(4, 6);
            this._des1 = h.createEncryptor(s.create(g)), this._des2 = h.createEncryptor(s.create(y)), this._des3 = h.createEncryptor(s.create(E));
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
        r.TripleDES = o._createHelper(b);
      }(), n.TripleDES;
    });
  }(Ey)), Ui;
}
var Wi = {}, Sy = {
  get exports() {
    return Wi;
  },
  set exports(t) {
    Wi = t;
  }
}, mc;
function Ay() {
  return mc || (mc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), gn(), vn(), mn(), He());
    })(ae, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.StreamCipher, o = r.algo, a = o.RC4 = s.extend({
          _doReset: function() {
            for (var u = this._key, d = u.words, f = u.sigBytes, h = this._S = [], p = 0; p < 256; p++)
              h[p] = p;
            for (var p = 0, v = 0; p < 256; p++) {
              var b = p % f, m = d[b >>> 2] >>> 24 - b % 4 * 8 & 255;
              v = (v + h[p] + m) % 256;
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
        r.RC4 = s._createHelper(a);
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
        r.RC4Drop = s._createHelper(l);
      }(), n.RC4;
    });
  }(Sy)), Wi;
}
var ji = {}, Cy = {
  get exports() {
    return ji;
  },
  set exports(t) {
    ji = t;
  }
}, bc;
function Dy() {
  return bc || (bc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), gn(), vn(), mn(), He());
    })(ae, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.StreamCipher, o = r.algo, a = [], c = [], l = [], u = o.Rabbit = s.extend({
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
              var m = h.words, x = m[0], g = m[1], y = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, E = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, S = y >>> 16 | E & 4294901760, _ = E << 16 | y & 65535;
              b[0] ^= y, b[1] ^= S, b[2] ^= E, b[3] ^= _, b[4] ^= y, b[5] ^= S, b[6] ^= E, b[7] ^= _;
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
            var v = f[p] + h[p], b = v & 65535, m = v >>> 16, x = ((b * b >>> 17) + b * m >>> 15) + m * m, g = ((v & 4294901760) * v | 0) + ((v & 65535) * v | 0);
            l[p] = x ^ g;
          }
          f[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0, f[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0, f[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0, f[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0, f[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0, f[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0, f[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0, f[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0;
        }
        r.Rabbit = s._createHelper(u);
      }(), n.Rabbit;
    });
  }(Cy)), ji;
}
var Vi = {}, Ry = {
  get exports() {
    return Vi;
  },
  set exports(t) {
    Vi = t;
  }
}, yc;
function Ty() {
  return yc || (yc = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(ge(), gn(), vn(), mn(), He());
    })(ae, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.StreamCipher, o = r.algo, a = [], c = [], l = [], u = o.RabbitLegacy = s.extend({
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
              var m = h.words, x = m[0], g = m[1], y = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, E = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, S = y >>> 16 | E & 4294901760, _ = E << 16 | y & 65535;
              v[0] ^= y, v[1] ^= S, v[2] ^= E, v[3] ^= _, v[4] ^= y, v[5] ^= S, v[6] ^= E, v[7] ^= _;
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
            var v = f[p] + h[p], b = v & 65535, m = v >>> 16, x = ((b * b >>> 17) + b * m >>> 15) + m * m, g = ((v & 4294901760) * v | 0) + ((v & 65535) * v | 0);
            l[p] = x ^ g;
          }
          f[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0, f[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0, f[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0, f[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0, f[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0, f[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0, f[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0, f[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0;
        }
        r.RabbitLegacy = s._createHelper(u);
      }(), n.RabbitLegacy;
    });
  }(Ry)), Vi;
}
(function(t, e) {
  (function(n, r, i) {
    t.exports = r(ge(), ss(), I1(), N1(), gn(), P1(), vn(), va(), Zf(), U1(), Xf(), V1(), q1(), Y1(), ma(), X1(), mn(), He(), ty(), ry(), sy(), ay(), Kf(), uy(), dy(), py(), vy(), by(), xy(), Jf(), _y(), Ay(), Dy(), Ty());
  })(ae, function(n) {
    return n;
  });
})(S1);
var go = {}, ky = {
  get exports() {
    return go;
  },
  set exports(t) {
    go = t;
  }
};
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(ae, function() {
    var n = 1e3, r = 6e4, i = 36e5, s = "millisecond", o = "second", a = "minute", c = "hour", l = "day", u = "week", d = "month", f = "quarter", h = "year", p = "date", v = "Invalid Date", b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, x = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(B) {
      var z = ["th", "st", "nd", "rd"], H = B % 100;
      return "[" + B + (z[(H - 20) % 10] || z[H] || z[0]) + "]";
    } }, g = function(B, z, H) {
      var j = String(B);
      return !j || j.length >= z ? B : "" + Array(z + 1 - j.length).join(H) + B;
    }, y = { s: g, z: function(B) {
      var z = -B.utcOffset(), H = Math.abs(z), j = Math.floor(H / 60), G = H % 60;
      return (z <= 0 ? "+" : "-") + g(j, 2, "0") + ":" + g(G, 2, "0");
    }, m: function B(z, H) {
      if (z.date() < H.date())
        return -B(H, z);
      var j = 12 * (H.year() - z.year()) + (H.month() - z.month()), G = z.clone().add(j, d), J = H - G < 0, ee = z.clone().add(j + (J ? -1 : 1), d);
      return +(-(j + (H - G) / (J ? G - ee : ee - G)) || 0);
    }, a: function(B) {
      return B < 0 ? Math.ceil(B) || 0 : Math.floor(B);
    }, p: function(B) {
      return { M: d, y: h, w: u, d: l, D: p, h: c, m: a, s: o, ms: s, Q: f }[B] || String(B || "").toLowerCase().replace(/s$/, "");
    }, u: function(B) {
      return B === void 0;
    } }, E = "en", S = {};
    S[E] = x;
    var _ = function(B) {
      return B instanceof k;
    }, C = function B(z, H, j) {
      var G;
      if (!z)
        return E;
      if (typeof z == "string") {
        var J = z.toLowerCase();
        S[J] && (G = J), H && (S[J] = H, G = J);
        var ee = z.split("-");
        if (!G && ee.length > 1)
          return B(ee[0]);
      } else {
        var K = z.name;
        S[K] = z, G = K;
      }
      return !j && G && (E = G), G || !j && E;
    }, N = function(B, z) {
      if (_(B))
        return B.clone();
      var H = typeof z == "object" ? z : {};
      return H.date = B, H.args = arguments, new k(H);
    }, D = y;
    D.l = C, D.i = _, D.w = function(B, z) {
      return N(B, { locale: z.$L, utc: z.$u, x: z.$x, $offset: z.$offset });
    };
    var k = function() {
      function B(H) {
        this.$L = C(H.locale, null, !0), this.parse(H);
      }
      var z = B.prototype;
      return z.parse = function(H) {
        this.$d = function(j) {
          var G = j.date, J = j.utc;
          if (G === null)
            return /* @__PURE__ */ new Date(NaN);
          if (D.u(G))
            return /* @__PURE__ */ new Date();
          if (G instanceof Date)
            return new Date(G);
          if (typeof G == "string" && !/Z$/i.test(G)) {
            var ee = G.match(b);
            if (ee) {
              var K = ee[2] - 1 || 0, F = (ee[7] || "0").substring(0, 3);
              return J ? new Date(Date.UTC(ee[1], K, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, F)) : new Date(ee[1], K, ee[3] || 1, ee[4] || 0, ee[5] || 0, ee[6] || 0, F);
            }
          }
          return new Date(G);
        }(H), this.$x = H.x || {}, this.init();
      }, z.init = function() {
        var H = this.$d;
        this.$y = H.getFullYear(), this.$M = H.getMonth(), this.$D = H.getDate(), this.$W = H.getDay(), this.$H = H.getHours(), this.$m = H.getMinutes(), this.$s = H.getSeconds(), this.$ms = H.getMilliseconds();
      }, z.$utils = function() {
        return D;
      }, z.isValid = function() {
        return this.$d.toString() !== v;
      }, z.isSame = function(H, j) {
        var G = N(H);
        return this.startOf(j) <= G && G <= this.endOf(j);
      }, z.isAfter = function(H, j) {
        return N(H) < this.startOf(j);
      }, z.isBefore = function(H, j) {
        return this.endOf(j) < N(H);
      }, z.$g = function(H, j, G) {
        return D.u(H) ? this[j] : this.set(G, H);
      }, z.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, z.valueOf = function() {
        return this.$d.getTime();
      }, z.startOf = function(H, j) {
        var G = this, J = !!D.u(j) || j, ee = D.p(H), K = function(le, Re) {
          var Le = D.w(G.$u ? Date.UTC(G.$y, Re, le) : new Date(G.$y, Re, le), G);
          return J ? Le : Le.endOf(l);
        }, F = function(le, Re) {
          return D.w(G.toDate()[le].apply(G.toDate("s"), (J ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Re)), G);
        }, U = this.$W, V = this.$M, $ = this.$D, he = "set" + (this.$u ? "UTC" : "");
        switch (ee) {
          case h:
            return J ? K(1, 0) : K(31, 11);
          case d:
            return J ? K(1, V) : K(0, V + 1);
          case u:
            var be = this.$locale().weekStart || 0, De = (U < be ? U + 7 : U) - be;
            return K(J ? $ - De : $ + (6 - De), V);
          case l:
          case p:
            return F(he + "Hours", 0);
          case c:
            return F(he + "Minutes", 1);
          case a:
            return F(he + "Seconds", 2);
          case o:
            return F(he + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, z.endOf = function(H) {
        return this.startOf(H, !1);
      }, z.$set = function(H, j) {
        var G, J = D.p(H), ee = "set" + (this.$u ? "UTC" : ""), K = (G = {}, G[l] = ee + "Date", G[p] = ee + "Date", G[d] = ee + "Month", G[h] = ee + "FullYear", G[c] = ee + "Hours", G[a] = ee + "Minutes", G[o] = ee + "Seconds", G[s] = ee + "Milliseconds", G)[J], F = J === l ? this.$D + (j - this.$W) : j;
        if (J === d || J === h) {
          var U = this.clone().set(p, 1);
          U.$d[K](F), U.init(), this.$d = U.set(p, Math.min(this.$D, U.daysInMonth())).$d;
        } else
          K && this.$d[K](F);
        return this.init(), this;
      }, z.set = function(H, j) {
        return this.clone().$set(H, j);
      }, z.get = function(H) {
        return this[D.p(H)]();
      }, z.add = function(H, j) {
        var G, J = this;
        H = Number(H);
        var ee = D.p(j), K = function(V) {
          var $ = N(J);
          return D.w($.date($.date() + Math.round(V * H)), J);
        };
        if (ee === d)
          return this.set(d, this.$M + H);
        if (ee === h)
          return this.set(h, this.$y + H);
        if (ee === l)
          return K(1);
        if (ee === u)
          return K(7);
        var F = (G = {}, G[a] = r, G[c] = i, G[o] = n, G)[ee] || 1, U = this.$d.getTime() + H * F;
        return D.w(U, this);
      }, z.subtract = function(H, j) {
        return this.add(-1 * H, j);
      }, z.format = function(H) {
        var j = this, G = this.$locale();
        if (!this.isValid())
          return G.invalidDate || v;
        var J = H || "YYYY-MM-DDTHH:mm:ssZ", ee = D.z(this), K = this.$H, F = this.$m, U = this.$M, V = G.weekdays, $ = G.months, he = function(Re, Le, At, it) {
          return Re && (Re[Le] || Re(j, J)) || At[Le].slice(0, it);
        }, be = function(Re) {
          return D.s(K % 12 || 12, Re, "0");
        }, De = G.meridiem || function(Re, Le, At) {
          var it = Re < 12 ? "AM" : "PM";
          return At ? it.toLowerCase() : it;
        }, le = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: U + 1, MM: D.s(U + 1, 2, "0"), MMM: he(G.monthsShort, U, $, 3), MMMM: he($, U), D: this.$D, DD: D.s(this.$D, 2, "0"), d: String(this.$W), dd: he(G.weekdaysMin, this.$W, V, 2), ddd: he(G.weekdaysShort, this.$W, V, 3), dddd: V[this.$W], H: String(K), HH: D.s(K, 2, "0"), h: be(1), hh: be(2), a: De(K, F, !0), A: De(K, F, !1), m: String(F), mm: D.s(F, 2, "0"), s: String(this.$s), ss: D.s(this.$s, 2, "0"), SSS: D.s(this.$ms, 3, "0"), Z: ee };
        return J.replace(m, function(Re, Le) {
          return Le || le[Re] || ee.replace(":", "");
        });
      }, z.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, z.diff = function(H, j, G) {
        var J, ee = D.p(j), K = N(H), F = (K.utcOffset() - this.utcOffset()) * r, U = this - K, V = D.m(this, K);
        return V = (J = {}, J[h] = V / 12, J[d] = V, J[f] = V / 3, J[u] = (U - F) / 6048e5, J[l] = (U - F) / 864e5, J[c] = U / i, J[a] = U / r, J[o] = U / n, J)[ee] || U, G ? V : D.a(V);
      }, z.daysInMonth = function() {
        return this.endOf(d).$D;
      }, z.$locale = function() {
        return S[this.$L];
      }, z.locale = function(H, j) {
        if (!H)
          return this.$L;
        var G = this.clone(), J = C(H, j, !0);
        return J && (G.$L = J), G;
      }, z.clone = function() {
        return D.w(this.$d, this);
      }, z.toDate = function() {
        return new Date(this.valueOf());
      }, z.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, z.toISOString = function() {
        return this.$d.toISOString();
      }, z.toString = function() {
        return this.$d.toUTCString();
      }, B;
    }(), P = k.prototype;
    return N.prototype = P, [["$ms", s], ["$s", o], ["$m", a], ["$H", c], ["$W", l], ["$M", d], ["$y", h], ["$D", p]].forEach(function(B) {
      P[B[1]] = function(z) {
        return this.$g(z, B[0], B[1]);
      };
    }), N.extend = function(B, z) {
      return B.$i || (B(z, k, N), B.$i = !0), N;
    }, N.locale = C, N.isDayjs = _, N.unix = function(B) {
      return N(1e3 * B);
    }, N.en = S[E], N.Ls = S, N.p = {}, N;
  });
})(ky);
const Me = go;
var ed = function() {
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
}(), vo = typeof window < "u" && typeof document < "u" && window.document === document, $i = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Iy = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind($i) : function(t) {
    return setTimeout(function() {
      return t(Date.now());
    }, 1e3 / 60);
  };
}(), My = 2;
function Ny(t, e) {
  var n = !1, r = !1, i = 0;
  function s() {
    n && (n = !1, t()), r && a();
  }
  function o() {
    Iy(s);
  }
  function a() {
    var c = Date.now();
    if (n) {
      if (c - i < My)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(o, e);
    i = c;
  }
  return a;
}
var Oy = 20, By = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Py = typeof MutationObserver < "u", Hy = (
  /** @class */
  function() {
    function t() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Ny(this.refresh.bind(this), Oy);
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
      !vo || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Py ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, t.prototype.disconnect_ = function() {
      !vo || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, t.prototype.onTransitionEnd_ = function(e) {
      var n = e.propertyName, r = n === void 0 ? "" : n, i = By.some(function(s) {
        return !!~r.indexOf(s);
      });
      i && this.refresh();
    }, t.getInstance = function() {
      return this.instance_ || (this.instance_ = new t()), this.instance_;
    }, t.instance_ = null, t;
  }()
), td = function(t, e) {
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
}, Nn = function(t) {
  var e = t && t.ownerDocument && t.ownerDocument.defaultView;
  return e || $i;
}, nd = os(0, 0, 0, 0);
function qi(t) {
  return parseFloat(t) || 0;
}
function xc(t) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  return e.reduce(function(r, i) {
    var s = t["border-" + i + "-width"];
    return r + qi(s);
  }, 0);
}
function Ly(t) {
  for (var e = ["top", "right", "bottom", "left"], n = {}, r = 0, i = e; r < i.length; r++) {
    var s = i[r], o = t["padding-" + s];
    n[s] = qi(o);
  }
  return n;
}
function Fy(t) {
  var e = t.getBBox();
  return os(0, 0, e.width, e.height);
}
function zy(t) {
  var e = t.clientWidth, n = t.clientHeight;
  if (!e && !n)
    return nd;
  var r = Nn(t).getComputedStyle(t), i = Ly(r), s = i.left + i.right, o = i.top + i.bottom, a = qi(r.width), c = qi(r.height);
  if (r.boxSizing === "border-box" && (Math.round(a + s) !== e && (a -= xc(r, "left", "right") + s), Math.round(c + o) !== n && (c -= xc(r, "top", "bottom") + o)), !Wy(t)) {
    var l = Math.round(a + s) - e, u = Math.round(c + o) - n;
    Math.abs(l) !== 1 && (a -= l), Math.abs(u) !== 1 && (c -= u);
  }
  return os(i.left, i.top, a, c);
}
var Uy = function() {
  return typeof SVGGraphicsElement < "u" ? function(t) {
    return t instanceof Nn(t).SVGGraphicsElement;
  } : function(t) {
    return t instanceof Nn(t).SVGElement && typeof t.getBBox == "function";
  };
}();
function Wy(t) {
  return t === Nn(t).document.documentElement;
}
function jy(t) {
  return vo ? Uy(t) ? Fy(t) : zy(t) : nd;
}
function Vy(t) {
  var e = t.x, n = t.y, r = t.width, i = t.height, s = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, o = Object.create(s.prototype);
  return td(o, {
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
function os(t, e, n, r) {
  return { x: t, y: e, width: n, height: r };
}
var $y = (
  /** @class */
  function() {
    function t(e) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = os(0, 0, 0, 0), this.target = e;
    }
    return t.prototype.isActive = function() {
      var e = jy(this.target);
      return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
    }, t.prototype.broadcastRect = function() {
      var e = this.contentRect_;
      return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e;
    }, t;
  }()
), qy = (
  /** @class */
  function() {
    function t(e, n) {
      var r = Vy(n);
      td(this, { target: e, contentRect: r });
    }
    return t;
  }()
), Gy = (
  /** @class */
  function() {
    function t(e, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new ed(), typeof e != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = e, this.controller_ = n, this.callbackCtx_ = r;
    }
    return t.prototype.observe = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof Nn(e).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(e) || (n.set(e, new $y(e)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, t.prototype.unobserve = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof Nn(e).Element))
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
          return new qy(r.target, r.broadcastRect());
        });
        this.callback_.call(e, n, e), this.clearActive();
      }
    }, t.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, t.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, t;
  }()
), rd = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new ed(), id = (
  /** @class */
  function() {
    function t(e) {
      if (!(this instanceof t))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = Hy.getInstance(), r = new Gy(e, n, this);
      rd.set(this, r);
    }
    return t;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(t) {
  id.prototype[t] = function() {
    var e;
    return (e = rd.get(this))[t].apply(e, arguments);
  };
});
(function() {
  return typeof $i.ResizeObserver < "u" ? $i.ResizeObserver : id;
})();
Jf();
gn();
var wc = {}, Yy = {
  get exports() {
    return wc;
  },
  set exports(t) {
    wc = t;
  }
};
(function(t, e) {
  (function(n, r) {
    t.exports = r(ge());
  })(ae, function(n) {
    return n.enc.Utf8;
  });
})(Yy);
vn();
Kf();
var Ec = {}, Qy = {
  get exports() {
    return Ec;
  },
  set exports(t) {
    Ec = t;
  }
};
(function(t, e) {
  (function(n, r, i) {
    t.exports = r(ge(), He());
  })(ae, function(n) {
    return n.pad.Pkcs7;
  });
})(Qy);
function Zy(t) {
  var e = [], n = "";
  for (n in t)
    e.push(n);
  return e;
}
function mo(t) {
  return t = JSON.stringify(t), !(typeof t != "string" || !/^\{[\s\S]*\}$/.test(t));
}
function Xy(t) {
  return t instanceof Array;
}
function Ky(t) {
  return Array.prototype.slice.call(t);
}
function On() {
  if (!(this instanceof On))
    return new On();
}
On.prototype = {
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
    if (mo(t))
      for (const r in t)
        this.set(r, t[r], e, n);
    else if (typeof t == "string") {
      const r = mo(n) ? n : { expires: n }, i = r.path !== void 0 ? `;path=${r.path};path=/` : ";path=/", s = r.domain ? `;domain=${r.domain}` : "", o = r.secure ? ";secure" : "";
      let a = r.expires !== void 0 ? r.expires : "";
      typeof a == "string" && a !== "" ? a = new Date(a) : typeof a == "number" && (a = new Date(+/* @__PURE__ */ new Date() + 1e3 * 60 * 60 * 24 * a)), a !== "" && "toGMTString" in a && (a = `;expires=${a.toGMTString()}`);
      const c = r.sameSite ? `;SameSite=${r.sameSite}` : "";
      document.cookie = `${t}=${encodeURI(e) + a + i + s + o + c}`;
    }
  },
  remove: function(t) {
    t = Xy(t) ? t : Ky(arguments);
    for (var e = 0, n = t.length; e < n; e++)
      this.set(t[e], "", -1);
    return t;
  },
  clear: function(t) {
    return t ? this.remove(t) : this.remove(Zy(this.all()));
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
let tn = null;
const sd = function(t, e, n) {
  const r = arguments;
  if (tn || (tn = On()), r.length === 0)
    return tn.all();
  if (r.length === 1 && t === null)
    return tn.clear();
  if (r.length === 2 && !e)
    return tn.clear(t);
  if (typeof t == "string" && !e)
    return tn.get(t);
  if (typeof t == "string" && e || mo(t))
    return tn.set(t, e, n);
};
for (const t in On.prototype)
  sd[t] = On.prototype[t];
var bo = {}, Jy = {
  get exports() {
    return bo;
  },
  set exports(t) {
    bo = t;
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
      function o(l, u) {
        if (!i[l]) {
          if (!r[l]) {
            var d = typeof Zn == "function" && Zn;
            if (!u && d)
              return d(l, !0);
            if (a)
              return a(l, !0);
            var f = new Error("Cannot find module '" + l + "'");
            throw f.code = "MODULE_NOT_FOUND", f;
          }
          var h = i[l] = { exports: {} };
          r[l][0].call(h.exports, function(p) {
            var v = r[l][1][p];
            return o(v || p);
          }, h, h.exports, n, r, i, s);
        }
        return i[l].exports;
      }
      for (var a = typeof Zn == "function" && Zn, c = 0; c < s.length; c++)
        o(s[c]);
      return o;
    }({ 1: [function(n, r, i) {
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
          for (var b, m, x = h.length; x; ) {
            for (m = h, h = [], b = -1; ++b < x; )
              m[b]();
            x = h.length;
          }
          f = !1;
        }
        r.exports = v;
        function v(b) {
          h.push(b) === 1 && !f && a();
        }
      }).call(this, typeof ae < "u" ? ae : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(n, r, i) {
      var s = n(1);
      function o() {
      }
      var a = {}, c = ["REJECTED"], l = ["FULFILLED"], u = ["PENDING"];
      r.exports = d;
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
        var _ = new this.constructor(o);
        if (this.state !== u) {
          var C = this.state === l ? E : S;
          h(_, C, this.outcome);
        } else
          this.queue.push(new f(_, E, S));
        return _;
      };
      function f(E, S, _) {
        this.promise = E, typeof S == "function" && (this.onFulfilled = S, this.callFulfilled = this.otherCallFulfilled), typeof _ == "function" && (this.onRejected = _, this.callRejected = this.otherCallRejected);
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
      function h(E, S, _) {
        s(function() {
          var C;
          try {
            C = S(_);
          } catch (N) {
            return a.reject(E, N);
          }
          C === E ? a.reject(E, new TypeError("Cannot resolve promise with itself")) : a.resolve(E, C);
        });
      }
      a.resolve = function(E, S) {
        var _ = b(p, S);
        if (_.status === "error")
          return a.reject(E, _.value);
        var C = _.value;
        if (C)
          v(E, C);
        else {
          E.state = l, E.outcome = S;
          for (var N = -1, D = E.queue.length; ++N < D; )
            E.queue[N].callFulfilled(S);
        }
        return E;
      }, a.reject = function(E, S) {
        E.state = c, E.outcome = S;
        for (var _ = -1, C = E.queue.length; ++_ < C; )
          E.queue[_].callRejected(S);
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
        var _ = !1;
        function C(P) {
          _ || (_ = !0, a.reject(E, P));
        }
        function N(P) {
          _ || (_ = !0, a.resolve(E, P));
        }
        function D() {
          S(N, C);
        }
        var k = b(D);
        k.status === "error" && C(k.value);
      }
      function b(E, S) {
        var _ = {};
        try {
          _.value = E(S), _.status = "success";
        } catch (C) {
          _.status = "error", _.value = C;
        }
        return _;
      }
      d.resolve = m;
      function m(E) {
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
        var _ = E.length, C = !1;
        if (!_)
          return this.resolve([]);
        for (var N = new Array(_), D = 0, k = -1, P = new this(o); ++k < _; )
          B(E[k], k);
        return P;
        function B(z, H) {
          S.resolve(z).then(j, function(G) {
            C || (C = !0, a.reject(P, G));
          });
          function j(G) {
            N[H] = G, ++D === _ && !C && (C = !0, a.resolve(P, N));
          }
        }
      }
      d.race = y;
      function y(E) {
        var S = this;
        if (Object.prototype.toString.call(E) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var _ = E.length, C = !1;
        if (!_)
          return this.resolve([]);
        for (var N = -1, D = new this(o); ++N < _; )
          k(E[N]);
        return D;
        function k(P) {
          S.resolve(P).then(function(B) {
            C || (C = !0, a.resolve(D, B));
          }, function(B) {
            C || (C = !0, a.reject(D, B));
          });
        }
      }
    }, { 1: 1 }], 3: [function(n, r, i) {
      (function(s) {
        typeof s.Promise != "function" && (s.Promise = n(2));
      }).call(this, typeof ae < "u" ? ae : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(n, r, i) {
      var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
        return typeof w;
      } : function(w) {
        return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w;
      };
      function o(w, T) {
        if (!(w instanceof T))
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
          var w = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), T = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!w || T) && typeof indexedDB < "u" && // some outdated implementations of IDB that appear on Samsung
          // and HTC Android devices <4.4 are missing IDBKeyRange
          // See: https://github.com/mozilla/localForage/issues/128
          // See: https://github.com/mozilla/localForage/issues/272
          typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function u(w, T) {
        w = w || [], T = T || {};
        try {
          return new Blob(w, T);
        } catch (I) {
          if (I.name !== "TypeError")
            throw I;
          for (var A = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, M = new A(), O = 0; O < w.length; O += 1)
            M.append(w[O]);
          return M.getBlob(T.type);
        }
      }
      typeof Promise > "u" && n(3);
      var d = Promise;
      function f(w, T) {
        T && w.then(function(A) {
          T(null, A);
        }, function(A) {
          T(A);
        });
      }
      function h(w, T, A) {
        typeof T == "function" && w.then(T), typeof A == "function" && w.catch(A);
      }
      function p(w) {
        return typeof w != "string" && (console.warn(w + " used as a key, but it is not a string."), w = String(w)), w;
      }
      function v() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var b = "local-forage-detect-blob-support", m = void 0, x = {}, g = Object.prototype.toString, y = "readonly", E = "readwrite";
      function S(w) {
        for (var T = w.length, A = new ArrayBuffer(T), M = new Uint8Array(A), O = 0; O < T; O++)
          M[O] = w.charCodeAt(O);
        return A;
      }
      function _(w) {
        return new d(function(T) {
          var A = w.transaction(b, E), M = u([""]);
          A.objectStore(b).put(M, "key"), A.onabort = function(O) {
            O.preventDefault(), O.stopPropagation(), T(!1);
          }, A.oncomplete = function() {
            var O = navigator.userAgent.match(/Chrome\/(\d+)/), I = navigator.userAgent.match(/Edge\//);
            T(I || !O || parseInt(O[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function C(w) {
        return typeof m == "boolean" ? d.resolve(m) : _(w).then(function(T) {
          return m = T, m;
        });
      }
      function N(w) {
        var T = x[w.name], A = {};
        A.promise = new d(function(M, O) {
          A.resolve = M, A.reject = O;
        }), T.deferredOperations.push(A), T.dbReady ? T.dbReady = T.dbReady.then(function() {
          return A.promise;
        }) : T.dbReady = A.promise;
      }
      function D(w) {
        var T = x[w.name], A = T.deferredOperations.pop();
        if (A)
          return A.resolve(), A.promise;
      }
      function k(w, T) {
        var A = x[w.name], M = A.deferredOperations.pop();
        if (M)
          return M.reject(T), M.promise;
      }
      function P(w, T) {
        return new d(function(A, M) {
          if (x[w.name] = x[w.name] || U(), w.db)
            if (T)
              N(w), w.db.close();
            else
              return A(w.db);
          var O = [w.name];
          T && O.push(w.version);
          var I = c.open.apply(c, O);
          T && (I.onupgradeneeded = function(W) {
            var Y = I.result;
            try {
              Y.createObjectStore(w.storeName), W.oldVersion <= 1 && Y.createObjectStore(b);
            } catch (Q) {
              if (Q.name === "ConstraintError")
                console.warn('The database "' + w.name + '" has been upgraded from version ' + W.oldVersion + " to version " + W.newVersion + ', but the storage "' + w.storeName + '" already exists.');
              else
                throw Q;
            }
          }), I.onerror = function(W) {
            W.preventDefault(), M(I.error);
          }, I.onsuccess = function() {
            var W = I.result;
            W.onversionchange = function(Y) {
              Y.target.close();
            }, A(W), D(w);
          };
        });
      }
      function B(w) {
        return P(w, !1);
      }
      function z(w) {
        return P(w, !0);
      }
      function H(w, T) {
        if (!w.db)
          return !0;
        var A = !w.db.objectStoreNames.contains(w.storeName), M = w.version < w.db.version, O = w.version > w.db.version;
        if (M && (w.version !== T && console.warn('The database "' + w.name + `" can't be downgraded from version ` + w.db.version + " to version " + w.version + "."), w.version = w.db.version), O || A) {
          if (A) {
            var I = w.db.version + 1;
            I > w.version && (w.version = I);
          }
          return !0;
        }
        return !1;
      }
      function j(w) {
        return new d(function(T, A) {
          var M = new FileReader();
          M.onerror = A, M.onloadend = function(O) {
            var I = btoa(O.target.result || "");
            T({
              __local_forage_encoded_blob: !0,
              data: I,
              type: w.type
            });
          }, M.readAsBinaryString(w);
        });
      }
      function G(w) {
        var T = S(atob(w.data));
        return u([T], { type: w.type });
      }
      function J(w) {
        return w && w.__local_forage_encoded_blob;
      }
      function ee(w) {
        var T = this, A = T._initReady().then(function() {
          var M = x[T._dbInfo.name];
          if (M && M.dbReady)
            return M.dbReady;
        });
        return h(A, w, w), A;
      }
      function K(w) {
        N(w);
        for (var T = x[w.name], A = T.forages, M = 0; M < A.length; M++) {
          var O = A[M];
          O._dbInfo.db && (O._dbInfo.db.close(), O._dbInfo.db = null);
        }
        return w.db = null, B(w).then(function(I) {
          return w.db = I, H(w) ? z(w) : I;
        }).then(function(I) {
          w.db = T.db = I;
          for (var W = 0; W < A.length; W++)
            A[W]._dbInfo.db = I;
        }).catch(function(I) {
          throw k(w, I), I;
        });
      }
      function F(w, T, A, M) {
        M === void 0 && (M = 1);
        try {
          var O = w.db.transaction(w.storeName, T);
          A(null, O);
        } catch (I) {
          if (M > 0 && (!w.db || I.name === "InvalidStateError" || I.name === "NotFoundError"))
            return d.resolve().then(function() {
              if (!w.db || I.name === "NotFoundError" && !w.db.objectStoreNames.contains(w.storeName) && w.version <= w.db.version)
                return w.db && (w.version = w.db.version + 1), z(w);
            }).then(function() {
              return K(w).then(function() {
                F(w, T, A, M - 1);
              });
            }).catch(A);
          A(I);
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
      function V(w) {
        var T = this, A = {
          db: null
        };
        if (w)
          for (var M in w)
            A[M] = w[M];
        var O = x[A.name];
        O || (O = U(), x[A.name] = O), O.forages.push(T), T._initReady || (T._initReady = T.ready, T.ready = ee);
        var I = [];
        function W() {
          return d.resolve();
        }
        for (var Y = 0; Y < O.forages.length; Y++) {
          var Q = O.forages[Y];
          Q !== T && I.push(Q._initReady().catch(W));
        }
        var Z = O.forages.slice(0);
        return d.all(I).then(function() {
          return A.db = O.db, B(A);
        }).then(function(X) {
          return A.db = X, H(A, T._defaultConfig.version) ? z(A) : X;
        }).then(function(X) {
          A.db = O.db = X, T._dbInfo = A;
          for (var te = 0; te < Z.length; te++) {
            var de = Z[te];
            de !== T && (de._dbInfo.db = A.db, de._dbInfo.version = A.version);
          }
        });
      }
      function $(w, T) {
        var A = this;
        w = p(w);
        var M = new d(function(O, I) {
          A.ready().then(function() {
            F(A._dbInfo, y, function(W, Y) {
              if (W)
                return I(W);
              try {
                var Q = Y.objectStore(A._dbInfo.storeName), Z = Q.get(w);
                Z.onsuccess = function() {
                  var X = Z.result;
                  X === void 0 && (X = null), J(X) && (X = G(X)), O(X);
                }, Z.onerror = function() {
                  I(Z.error);
                };
              } catch (X) {
                I(X);
              }
            });
          }).catch(I);
        });
        return f(M, T), M;
      }
      function he(w, T) {
        var A = this, M = new d(function(O, I) {
          A.ready().then(function() {
            F(A._dbInfo, y, function(W, Y) {
              if (W)
                return I(W);
              try {
                var Q = Y.objectStore(A._dbInfo.storeName), Z = Q.openCursor(), X = 1;
                Z.onsuccess = function() {
                  var te = Z.result;
                  if (te) {
                    var de = te.value;
                    J(de) && (de = G(de));
                    var ye = w(de, te.key, X++);
                    ye !== void 0 ? O(ye) : te.continue();
                  } else
                    O();
                }, Z.onerror = function() {
                  I(Z.error);
                };
              } catch (te) {
                I(te);
              }
            });
          }).catch(I);
        });
        return f(M, T), M;
      }
      function be(w, T, A) {
        var M = this;
        w = p(w);
        var O = new d(function(I, W) {
          var Y;
          M.ready().then(function() {
            return Y = M._dbInfo, g.call(T) === "[object Blob]" ? C(Y.db).then(function(Q) {
              return Q ? T : j(T);
            }) : T;
          }).then(function(Q) {
            F(M._dbInfo, E, function(Z, X) {
              if (Z)
                return W(Z);
              try {
                var te = X.objectStore(M._dbInfo.storeName);
                Q === null && (Q = void 0);
                var de = te.put(Q, w);
                X.oncomplete = function() {
                  Q === void 0 && (Q = null), I(Q);
                }, X.onabort = X.onerror = function() {
                  var ye = de.error ? de.error : de.transaction.error;
                  W(ye);
                };
              } catch (ye) {
                W(ye);
              }
            });
          }).catch(W);
        });
        return f(O, A), O;
      }
      function De(w, T) {
        var A = this;
        w = p(w);
        var M = new d(function(O, I) {
          A.ready().then(function() {
            F(A._dbInfo, E, function(W, Y) {
              if (W)
                return I(W);
              try {
                var Q = Y.objectStore(A._dbInfo.storeName), Z = Q.delete(w);
                Y.oncomplete = function() {
                  O();
                }, Y.onerror = function() {
                  I(Z.error);
                }, Y.onabort = function() {
                  var X = Z.error ? Z.error : Z.transaction.error;
                  I(X);
                };
              } catch (X) {
                I(X);
              }
            });
          }).catch(I);
        });
        return f(M, T), M;
      }
      function le(w) {
        var T = this, A = new d(function(M, O) {
          T.ready().then(function() {
            F(T._dbInfo, E, function(I, W) {
              if (I)
                return O(I);
              try {
                var Y = W.objectStore(T._dbInfo.storeName), Q = Y.clear();
                W.oncomplete = function() {
                  M();
                }, W.onabort = W.onerror = function() {
                  var Z = Q.error ? Q.error : Q.transaction.error;
                  O(Z);
                };
              } catch (Z) {
                O(Z);
              }
            });
          }).catch(O);
        });
        return f(A, w), A;
      }
      function Re(w) {
        var T = this, A = new d(function(M, O) {
          T.ready().then(function() {
            F(T._dbInfo, y, function(I, W) {
              if (I)
                return O(I);
              try {
                var Y = W.objectStore(T._dbInfo.storeName), Q = Y.count();
                Q.onsuccess = function() {
                  M(Q.result);
                }, Q.onerror = function() {
                  O(Q.error);
                };
              } catch (Z) {
                O(Z);
              }
            });
          }).catch(O);
        });
        return f(A, w), A;
      }
      function Le(w, T) {
        var A = this, M = new d(function(O, I) {
          if (w < 0) {
            O(null);
            return;
          }
          A.ready().then(function() {
            F(A._dbInfo, y, function(W, Y) {
              if (W)
                return I(W);
              try {
                var Q = Y.objectStore(A._dbInfo.storeName), Z = !1, X = Q.openKeyCursor();
                X.onsuccess = function() {
                  var te = X.result;
                  if (!te) {
                    O(null);
                    return;
                  }
                  w === 0 || Z ? O(te.key) : (Z = !0, te.advance(w));
                }, X.onerror = function() {
                  I(X.error);
                };
              } catch (te) {
                I(te);
              }
            });
          }).catch(I);
        });
        return f(M, T), M;
      }
      function At(w) {
        var T = this, A = new d(function(M, O) {
          T.ready().then(function() {
            F(T._dbInfo, y, function(I, W) {
              if (I)
                return O(I);
              try {
                var Y = W.objectStore(T._dbInfo.storeName), Q = Y.openKeyCursor(), Z = [];
                Q.onsuccess = function() {
                  var X = Q.result;
                  if (!X) {
                    M(Z);
                    return;
                  }
                  Z.push(X.key), X.continue();
                }, Q.onerror = function() {
                  O(Q.error);
                };
              } catch (X) {
                O(X);
              }
            });
          }).catch(O);
        });
        return f(A, w), A;
      }
      function it(w, T) {
        T = v.apply(this, arguments);
        var A = this.config();
        w = typeof w != "function" && w || {}, w.name || (w.name = w.name || A.name, w.storeName = w.storeName || A.storeName);
        var M = this, O;
        if (!w.name)
          O = d.reject("Invalid arguments");
        else {
          var I = w.name === A.name && M._dbInfo.db, W = I ? d.resolve(M._dbInfo.db) : B(w).then(function(Y) {
            var Q = x[w.name], Z = Q.forages;
            Q.db = Y;
            for (var X = 0; X < Z.length; X++)
              Z[X]._dbInfo.db = Y;
            return Y;
          });
          w.storeName ? O = W.then(function(Y) {
            if (Y.objectStoreNames.contains(w.storeName)) {
              var Q = Y.version + 1;
              N(w);
              var Z = x[w.name], X = Z.forages;
              Y.close();
              for (var te = 0; te < X.length; te++) {
                var de = X[te];
                de._dbInfo.db = null, de._dbInfo.version = Q;
              }
              var ye = new d(function(we, Ie) {
                var Te = c.open(w.name, Q);
                Te.onerror = function(st) {
                  var qn = Te.result;
                  qn.close(), Ie(st);
                }, Te.onupgradeneeded = function() {
                  var st = Te.result;
                  st.deleteObjectStore(w.storeName);
                }, Te.onsuccess = function() {
                  var st = Te.result;
                  st.close(), we(st);
                };
              });
              return ye.then(function(we) {
                Z.db = we;
                for (var Ie = 0; Ie < X.length; Ie++) {
                  var Te = X[Ie];
                  Te._dbInfo.db = we, D(Te._dbInfo);
                }
              }).catch(function(we) {
                throw (k(w, we) || d.resolve()).catch(function() {
                }), we;
              });
            }
          }) : O = W.then(function(Y) {
            N(w);
            var Q = x[w.name], Z = Q.forages;
            Y.close();
            for (var X = 0; X < Z.length; X++) {
              var te = Z[X];
              te._dbInfo.db = null;
            }
            var de = new d(function(ye, we) {
              var Ie = c.deleteDatabase(w.name);
              Ie.onerror = function() {
                var Te = Ie.result;
                Te && Te.close(), we(Ie.error);
              }, Ie.onblocked = function() {
                console.warn('dropInstance blocked for database "' + w.name + '" until all open connections are closed');
              }, Ie.onsuccess = function() {
                var Te = Ie.result;
                Te && Te.close(), ye(Te);
              };
            });
            return de.then(function(ye) {
              Q.db = ye;
              for (var we = 0; we < Z.length; we++) {
                var Ie = Z[we];
                D(Ie._dbInfo);
              }
            }).catch(function(ye) {
              throw (k(w, ye) || d.resolve()).catch(function() {
              }), ye;
            });
          });
        }
        return f(O, T), O;
      }
      var Je = {
        _driver: "asyncStorage",
        _initStorage: V,
        _support: l(),
        iterate: he,
        getItem: $,
        setItem: be,
        removeItem: De,
        clear: le,
        length: Re,
        key: Le,
        keys: At,
        dropInstance: it
      };
      function $e() {
        return typeof openDatabase == "function";
      }
      var et = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Xt = "~~local_forage_type~", Kt = /^~~local_forage_type~([^~]+)~/, mt = "__lfsc__:", Jt = mt.length, Ct = "arbf", qe = "blob", Ge = "si08", ct = "ui08", en = "uic8", Fn = "si16", Dt = "si32", Lt = "ur16", vr = "ui32", zn = "fl32", Un = "fl64", Rt = Jt + Ct.length, Ft = Object.prototype.toString;
      function mr(w) {
        var T = w.length * 0.75, A = w.length, M, O = 0, I, W, Y, Q;
        w[w.length - 1] === "=" && (T--, w[w.length - 2] === "=" && T--);
        var Z = new ArrayBuffer(T), X = new Uint8Array(Z);
        for (M = 0; M < A; M += 4)
          I = et.indexOf(w[M]), W = et.indexOf(w[M + 1]), Y = et.indexOf(w[M + 2]), Q = et.indexOf(w[M + 3]), X[O++] = I << 2 | W >> 4, X[O++] = (W & 15) << 4 | Y >> 2, X[O++] = (Y & 3) << 6 | Q & 63;
        return Z;
      }
      function bn(w) {
        var T = new Uint8Array(w), A = "", M;
        for (M = 0; M < T.length; M += 3)
          A += et[T[M] >> 2], A += et[(T[M] & 3) << 4 | T[M + 1] >> 4], A += et[(T[M + 1] & 15) << 2 | T[M + 2] >> 6], A += et[T[M + 2] & 63];
        return T.length % 3 === 2 ? A = A.substring(0, A.length - 1) + "=" : T.length % 3 === 1 && (A = A.substring(0, A.length - 2) + "=="), A;
      }
      function br(w, T) {
        var A = "";
        if (w && (A = Ft.call(w)), w && (A === "[object ArrayBuffer]" || w.buffer && Ft.call(w.buffer) === "[object ArrayBuffer]")) {
          var M, O = mt;
          w instanceof ArrayBuffer ? (M = w, O += Ct) : (M = w.buffer, A === "[object Int8Array]" ? O += Ge : A === "[object Uint8Array]" ? O += ct : A === "[object Uint8ClampedArray]" ? O += en : A === "[object Int16Array]" ? O += Fn : A === "[object Uint16Array]" ? O += Lt : A === "[object Int32Array]" ? O += Dt : A === "[object Uint32Array]" ? O += vr : A === "[object Float32Array]" ? O += zn : A === "[object Float64Array]" ? O += Un : T(new Error("Failed to get type for BinaryArray"))), T(O + bn(M));
        } else if (A === "[object Blob]") {
          var I = new FileReader();
          I.onload = function() {
            var W = Xt + w.type + "~" + bn(this.result);
            T(mt + qe + W);
          }, I.readAsArrayBuffer(w);
        } else
          try {
            T(JSON.stringify(w));
          } catch (W) {
            console.error("Couldn't convert value into a JSON string: ", w), T(null, W);
          }
      }
      function ps(w) {
        if (w.substring(0, Jt) !== mt)
          return JSON.parse(w);
        var T = w.substring(Rt), A = w.substring(Jt, Rt), M;
        if (A === qe && Kt.test(T)) {
          var O = T.match(Kt);
          M = O[1], T = T.substring(O[0].length);
        }
        var I = mr(T);
        switch (A) {
          case Ct:
            return I;
          case qe:
            return u([I], { type: M });
          case Ge:
            return new Int8Array(I);
          case ct:
            return new Uint8Array(I);
          case en:
            return new Uint8ClampedArray(I);
          case Fn:
            return new Int16Array(I);
          case Lt:
            return new Uint16Array(I);
          case Dt:
            return new Int32Array(I);
          case vr:
            return new Uint32Array(I);
          case zn:
            return new Float32Array(I);
          case Un:
            return new Float64Array(I);
          default:
            throw new Error("Unkown type: " + A);
        }
      }
      var Wn = {
        serialize: br,
        deserialize: ps,
        stringToBuffer: mr,
        bufferToString: bn
      };
      function jn(w, T, A, M) {
        w.executeSql("CREATE TABLE IF NOT EXISTS " + T.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], A, M);
      }
      function gs(w) {
        var T = this, A = {
          db: null
        };
        if (w)
          for (var M in w)
            A[M] = typeof w[M] != "string" ? w[M].toString() : w[M];
        var O = new d(function(I, W) {
          try {
            A.db = openDatabase(A.name, String(A.version), A.description, A.size);
          } catch (Y) {
            return W(Y);
          }
          A.db.transaction(function(Y) {
            jn(Y, A, function() {
              T._dbInfo = A, I();
            }, function(Q, Z) {
              W(Z);
            });
          }, W);
        });
        return A.serializer = Wn, O;
      }
      function ut(w, T, A, M, O, I) {
        w.executeSql(A, M, O, function(W, Y) {
          Y.code === Y.SYNTAX_ERR ? W.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [T.storeName], function(Q, Z) {
            Z.rows.length ? I(Q, Y) : jn(Q, T, function() {
              Q.executeSql(A, M, O, I);
            }, I);
          }, I) : I(W, Y);
        }, I);
      }
      function vs(w, T) {
        var A = this;
        w = p(w);
        var M = new d(function(O, I) {
          A.ready().then(function() {
            var W = A._dbInfo;
            W.db.transaction(function(Y) {
              ut(Y, W, "SELECT * FROM " + W.storeName + " WHERE key = ? LIMIT 1", [w], function(Q, Z) {
                var X = Z.rows.length ? Z.rows.item(0).value : null;
                X && (X = W.serializer.deserialize(X)), O(X);
              }, function(Q, Z) {
                I(Z);
              });
            });
          }).catch(I);
        });
        return f(M, T), M;
      }
      function yr(w, T) {
        var A = this, M = new d(function(O, I) {
          A.ready().then(function() {
            var W = A._dbInfo;
            W.db.transaction(function(Y) {
              ut(Y, W, "SELECT * FROM " + W.storeName, [], function(Q, Z) {
                for (var X = Z.rows, te = X.length, de = 0; de < te; de++) {
                  var ye = X.item(de), we = ye.value;
                  if (we && (we = W.serializer.deserialize(we)), we = w(we, ye.key, de + 1), we !== void 0) {
                    O(we);
                    return;
                  }
                }
                O();
              }, function(Q, Z) {
                I(Z);
              });
            });
          }).catch(I);
        });
        return f(M, T), M;
      }
      function xr(w, T, A, M) {
        var O = this;
        w = p(w);
        var I = new d(function(W, Y) {
          O.ready().then(function() {
            T === void 0 && (T = null);
            var Q = T, Z = O._dbInfo;
            Z.serializer.serialize(T, function(X, te) {
              te ? Y(te) : Z.db.transaction(function(de) {
                ut(de, Z, "INSERT OR REPLACE INTO " + Z.storeName + " (key, value) VALUES (?, ?)", [w, X], function() {
                  W(Q);
                }, function(ye, we) {
                  Y(we);
                });
              }, function(de) {
                if (de.code === de.QUOTA_ERR) {
                  if (M > 0) {
                    W(xr.apply(O, [w, Q, A, M - 1]));
                    return;
                  }
                  Y(de);
                }
              });
            });
          }).catch(Y);
        });
        return f(I, A), I;
      }
      function ms(w, T, A) {
        return xr.apply(this, [w, T, A, 1]);
      }
      function bs(w, T) {
        var A = this;
        w = p(w);
        var M = new d(function(O, I) {
          A.ready().then(function() {
            var W = A._dbInfo;
            W.db.transaction(function(Y) {
              ut(Y, W, "DELETE FROM " + W.storeName + " WHERE key = ?", [w], function() {
                O();
              }, function(Q, Z) {
                I(Z);
              });
            });
          }).catch(I);
        });
        return f(M, T), M;
      }
      function wr(w) {
        var T = this, A = new d(function(M, O) {
          T.ready().then(function() {
            var I = T._dbInfo;
            I.db.transaction(function(W) {
              ut(W, I, "DELETE FROM " + I.storeName, [], function() {
                M();
              }, function(Y, Q) {
                O(Q);
              });
            });
          }).catch(O);
        });
        return f(A, w), A;
      }
      function ys(w) {
        var T = this, A = new d(function(M, O) {
          T.ready().then(function() {
            var I = T._dbInfo;
            I.db.transaction(function(W) {
              ut(W, I, "SELECT COUNT(key) as c FROM " + I.storeName, [], function(Y, Q) {
                var Z = Q.rows.item(0).c;
                M(Z);
              }, function(Y, Q) {
                O(Q);
              });
            });
          }).catch(O);
        });
        return f(A, w), A;
      }
      function xs(w, T) {
        var A = this, M = new d(function(O, I) {
          A.ready().then(function() {
            var W = A._dbInfo;
            W.db.transaction(function(Y) {
              ut(Y, W, "SELECT key FROM " + W.storeName + " WHERE id = ? LIMIT 1", [w + 1], function(Q, Z) {
                var X = Z.rows.length ? Z.rows.item(0).key : null;
                O(X);
              }, function(Q, Z) {
                I(Z);
              });
            });
          }).catch(I);
        });
        return f(M, T), M;
      }
      function Er(w) {
        var T = this, A = new d(function(M, O) {
          T.ready().then(function() {
            var I = T._dbInfo;
            I.db.transaction(function(W) {
              ut(W, I, "SELECT key FROM " + I.storeName, [], function(Y, Q) {
                for (var Z = [], X = 0; X < Q.rows.length; X++)
                  Z.push(Q.rows.item(X).key);
                M(Z);
              }, function(Y, Q) {
                O(Q);
              });
            });
          }).catch(O);
        });
        return f(A, w), A;
      }
      function ws(w) {
        return new d(function(T, A) {
          w.transaction(function(M) {
            M.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(O, I) {
              for (var W = [], Y = 0; Y < I.rows.length; Y++)
                W.push(I.rows.item(Y).name);
              T({
                db: w,
                storeNames: W
              });
            }, function(O, I) {
              A(I);
            });
          }, function(M) {
            A(M);
          });
        });
      }
      function _r(w, T) {
        T = v.apply(this, arguments);
        var A = this.config();
        w = typeof w != "function" && w || {}, w.name || (w.name = w.name || A.name, w.storeName = w.storeName || A.storeName);
        var M = this, O;
        return w.name ? O = new d(function(I) {
          var W;
          w.name === A.name ? W = M._dbInfo.db : W = openDatabase(w.name, "", "", 0), w.storeName ? I({
            db: W,
            storeNames: [w.storeName]
          }) : I(ws(W));
        }).then(function(I) {
          return new d(function(W, Y) {
            I.db.transaction(function(Q) {
              function Z(ye) {
                return new d(function(we, Ie) {
                  Q.executeSql("DROP TABLE IF EXISTS " + ye, [], function() {
                    we();
                  }, function(Te, st) {
                    Ie(st);
                  });
                });
              }
              for (var X = [], te = 0, de = I.storeNames.length; te < de; te++)
                X.push(Z(I.storeNames[te]));
              d.all(X).then(function() {
                W();
              }).catch(function(ye) {
                Y(ye);
              });
            }, function(Q) {
              Y(Q);
            });
          });
        }) : O = d.reject("Invalid arguments"), f(O, T), O;
      }
      var Ye = {
        _driver: "webSQLStorage",
        _initStorage: gs,
        _support: $e(),
        iterate: yr,
        getItem: vs,
        setItem: ms,
        removeItem: bs,
        clear: wr,
        length: ys,
        key: xs,
        keys: Er,
        dropInstance: _r
      };
      function bt() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function Vn(w, T) {
        var A = w.name + "/";
        return w.storeName !== T.storeName && (A += w.storeName + "/"), A;
      }
      function Es() {
        var w = "_localforage_support_test";
        try {
          return localStorage.setItem(w, !0), localStorage.removeItem(w), !1;
        } catch {
          return !0;
        }
      }
      function Qd() {
        return !Es() || localStorage.length > 0;
      }
      function Zd(w) {
        var T = this, A = {};
        if (w)
          for (var M in w)
            A[M] = w[M];
        return A.keyPrefix = Vn(w, T._defaultConfig), Qd() ? (T._dbInfo = A, A.serializer = Wn, d.resolve()) : d.reject();
      }
      function Xd(w) {
        var T = this, A = T.ready().then(function() {
          for (var M = T._dbInfo.keyPrefix, O = localStorage.length - 1; O >= 0; O--) {
            var I = localStorage.key(O);
            I.indexOf(M) === 0 && localStorage.removeItem(I);
          }
        });
        return f(A, w), A;
      }
      function Kd(w, T) {
        var A = this;
        w = p(w);
        var M = A.ready().then(function() {
          var O = A._dbInfo, I = localStorage.getItem(O.keyPrefix + w);
          return I && (I = O.serializer.deserialize(I)), I;
        });
        return f(M, T), M;
      }
      function Jd(w, T) {
        var A = this, M = A.ready().then(function() {
          for (var O = A._dbInfo, I = O.keyPrefix, W = I.length, Y = localStorage.length, Q = 1, Z = 0; Z < Y; Z++) {
            var X = localStorage.key(Z);
            if (X.indexOf(I) === 0) {
              var te = localStorage.getItem(X);
              if (te && (te = O.serializer.deserialize(te)), te = w(te, X.substring(W), Q++), te !== void 0)
                return te;
            }
          }
        });
        return f(M, T), M;
      }
      function e0(w, T) {
        var A = this, M = A.ready().then(function() {
          var O = A._dbInfo, I;
          try {
            I = localStorage.key(w);
          } catch {
            I = null;
          }
          return I && (I = I.substring(O.keyPrefix.length)), I;
        });
        return f(M, T), M;
      }
      function t0(w) {
        var T = this, A = T.ready().then(function() {
          for (var M = T._dbInfo, O = localStorage.length, I = [], W = 0; W < O; W++) {
            var Y = localStorage.key(W);
            Y.indexOf(M.keyPrefix) === 0 && I.push(Y.substring(M.keyPrefix.length));
          }
          return I;
        });
        return f(A, w), A;
      }
      function n0(w) {
        var T = this, A = T.keys().then(function(M) {
          return M.length;
        });
        return f(A, w), A;
      }
      function r0(w, T) {
        var A = this;
        w = p(w);
        var M = A.ready().then(function() {
          var O = A._dbInfo;
          localStorage.removeItem(O.keyPrefix + w);
        });
        return f(M, T), M;
      }
      function i0(w, T, A) {
        var M = this;
        w = p(w);
        var O = M.ready().then(function() {
          T === void 0 && (T = null);
          var I = T;
          return new d(function(W, Y) {
            var Q = M._dbInfo;
            Q.serializer.serialize(T, function(Z, X) {
              if (X)
                Y(X);
              else
                try {
                  localStorage.setItem(Q.keyPrefix + w, Z), W(I);
                } catch (te) {
                  (te.name === "QuotaExceededError" || te.name === "NS_ERROR_DOM_QUOTA_REACHED") && Y(te), Y(te);
                }
            });
          });
        });
        return f(O, A), O;
      }
      function s0(w, T) {
        if (T = v.apply(this, arguments), w = typeof w != "function" && w || {}, !w.name) {
          var A = this.config();
          w.name = w.name || A.name, w.storeName = w.storeName || A.storeName;
        }
        var M = this, O;
        return w.name ? O = new d(function(I) {
          w.storeName ? I(Vn(w, M._defaultConfig)) : I(w.name + "/");
        }).then(function(I) {
          for (var W = localStorage.length - 1; W >= 0; W--) {
            var Y = localStorage.key(W);
            Y.indexOf(I) === 0 && localStorage.removeItem(Y);
          }
        }) : O = d.reject("Invalid arguments"), f(O, T), O;
      }
      var o0 = {
        _driver: "localStorageWrapper",
        _initStorage: Zd,
        _support: bt(),
        iterate: Jd,
        getItem: Kd,
        setItem: i0,
        removeItem: r0,
        clear: Xd,
        length: n0,
        key: e0,
        keys: t0,
        dropInstance: s0
      }, a0 = function(T, A) {
        return T === A || typeof T == "number" && typeof A == "number" && isNaN(T) && isNaN(A);
      }, l0 = function(T, A) {
        for (var M = T.length, O = 0; O < M; ) {
          if (a0(T[O], A))
            return !0;
          O++;
        }
        return !1;
      }, ka = Array.isArray || function(w) {
        return Object.prototype.toString.call(w) === "[object Array]";
      }, $n = {}, Ia = {}, yn = {
        INDEXEDDB: Je,
        WEBSQL: Ye,
        LOCALSTORAGE: o0
      }, c0 = [yn.INDEXEDDB._driver, yn.WEBSQL._driver, yn.LOCALSTORAGE._driver], Sr = ["dropInstance"], _s = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Sr), u0 = {
        description: "",
        driver: c0.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function f0(w, T) {
        w[T] = function() {
          var A = arguments;
          return w.ready().then(function() {
            return w[T].apply(w, A);
          });
        };
      }
      function Ss() {
        for (var w = 1; w < arguments.length; w++) {
          var T = arguments[w];
          if (T)
            for (var A in T)
              T.hasOwnProperty(A) && (ka(T[A]) ? arguments[0][A] = T[A].slice() : arguments[0][A] = T[A]);
        }
        return arguments[0];
      }
      var d0 = function() {
        function w(T) {
          o(this, w);
          for (var A in yn)
            if (yn.hasOwnProperty(A)) {
              var M = yn[A], O = M._driver;
              this[A] = O, $n[O] || this.defineDriver(M);
            }
          this._defaultConfig = Ss({}, u0), this._config = Ss({}, this._defaultConfig, T), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return w.prototype.config = function(A) {
          if ((typeof A > "u" ? "undefined" : s(A)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var M in A) {
              if (M === "storeName" && (A[M] = A[M].replace(/\W/g, "_")), M === "version" && typeof A[M] != "number")
                return new Error("Database version must be a number.");
              this._config[M] = A[M];
            }
            return "driver" in A && A.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof A == "string" ? this._config[A] : this._config;
        }, w.prototype.defineDriver = function(A, M, O) {
          var I = new d(function(W, Y) {
            try {
              var Q = A._driver, Z = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!A._driver) {
                Y(Z);
                return;
              }
              for (var X = _s.concat("_initStorage"), te = 0, de = X.length; te < de; te++) {
                var ye = X[te], we = !l0(Sr, ye);
                if ((we || A[ye]) && typeof A[ye] != "function") {
                  Y(Z);
                  return;
                }
              }
              var Ie = function() {
                for (var qn = function(g0) {
                  return function() {
                    var v0 = new Error("Method " + g0 + " is not implemented by the current driver"), Ma = d.reject(v0);
                    return f(Ma, arguments[arguments.length - 1]), Ma;
                  };
                }, As = 0, p0 = Sr.length; As < p0; As++) {
                  var Cs = Sr[As];
                  A[Cs] || (A[Cs] = qn(Cs));
                }
              };
              Ie();
              var Te = function(qn) {
                $n[Q] && console.info("Redefining LocalForage driver: " + Q), $n[Q] = A, Ia[Q] = qn, W();
              };
              "_support" in A ? A._support && typeof A._support == "function" ? A._support().then(Te, Y) : Te(!!A._support) : Te(!0);
            } catch (st) {
              Y(st);
            }
          });
          return h(I, M, O), I;
        }, w.prototype.driver = function() {
          return this._driver || null;
        }, w.prototype.getDriver = function(A, M, O) {
          var I = $n[A] ? d.resolve($n[A]) : d.reject(new Error("Driver not found."));
          return h(I, M, O), I;
        }, w.prototype.getSerializer = function(A) {
          var M = d.resolve(Wn);
          return h(M, A), M;
        }, w.prototype.ready = function(A) {
          var M = this, O = M._driverSet.then(function() {
            return M._ready === null && (M._ready = M._initDriver()), M._ready;
          });
          return h(O, A, A), O;
        }, w.prototype.setDriver = function(A, M, O) {
          var I = this;
          ka(A) || (A = [A]);
          var W = this._getSupportedDrivers(A);
          function Y() {
            I._config.driver = I.driver();
          }
          function Q(te) {
            return I._extend(te), Y(), I._ready = I._initStorage(I._config), I._ready;
          }
          function Z(te) {
            return function() {
              var de = 0;
              function ye() {
                for (; de < te.length; ) {
                  var we = te[de];
                  return de++, I._dbInfo = null, I._ready = null, I.getDriver(we).then(Q).catch(ye);
                }
                Y();
                var Ie = new Error("No available storage method found.");
                return I._driverSet = d.reject(Ie), I._driverSet;
              }
              return ye();
            };
          }
          var X = this._driverSet !== null ? this._driverSet.catch(function() {
            return d.resolve();
          }) : d.resolve();
          return this._driverSet = X.then(function() {
            var te = W[0];
            return I._dbInfo = null, I._ready = null, I.getDriver(te).then(function(de) {
              I._driver = de._driver, Y(), I._wrapLibraryMethodsWithReady(), I._initDriver = Z(W);
            });
          }).catch(function() {
            Y();
            var te = new Error("No available storage method found.");
            return I._driverSet = d.reject(te), I._driverSet;
          }), h(this._driverSet, M, O), this._driverSet;
        }, w.prototype.supports = function(A) {
          return !!Ia[A];
        }, w.prototype._extend = function(A) {
          Ss(this, A);
        }, w.prototype._getSupportedDrivers = function(A) {
          for (var M = [], O = 0, I = A.length; O < I; O++) {
            var W = A[O];
            this.supports(W) && M.push(W);
          }
          return M;
        }, w.prototype._wrapLibraryMethodsWithReady = function() {
          for (var A = 0, M = _s.length; A < M; A++)
            f0(this, _s[A]);
        }, w.prototype.createInstance = function(A) {
          return new w(A);
        }, w;
      }(), h0 = new d0();
      r.exports = h0;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(Jy);
const ex = bo, Et = /* @__PURE__ */ Object.create(null);
Et.open = "0";
Et.close = "1";
Et.ping = "2";
Et.pong = "3";
Et.message = "4";
Et.upgrade = "5";
Et.noop = "6";
const jr = /* @__PURE__ */ Object.create(null);
Object.keys(Et).forEach((t) => {
  jr[Et[t]] = t;
});
const tx = { type: "error", data: "parser error" }, nx = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", rx = typeof ArrayBuffer == "function", ix = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, od = ({ type: t, data: e }, n, r) => nx && e instanceof Blob ? n ? r(e) : _c(e, r) : rx && (e instanceof ArrayBuffer || ix(e)) ? n ? r(e) : _c(new Blob([e]), r) : r(Et[t] + (e || "")), _c = (t, e) => {
  const n = new FileReader();
  return n.onload = function() {
    const r = n.result.split(",")[1];
    e("b" + (r || ""));
  }, n.readAsDataURL(t);
}, Sc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Xn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < Sc.length; t++)
  Xn[Sc.charCodeAt(t)] = t;
const sx = (t) => {
  let e = t.length * 0.75, n = t.length, r, i = 0, s, o, a, c;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const l = new ArrayBuffer(e), u = new Uint8Array(l);
  for (r = 0; r < n; r += 4)
    s = Xn[t.charCodeAt(r)], o = Xn[t.charCodeAt(r + 1)], a = Xn[t.charCodeAt(r + 2)], c = Xn[t.charCodeAt(r + 3)], u[i++] = s << 2 | o >> 4, u[i++] = (o & 15) << 4 | a >> 2, u[i++] = (a & 3) << 6 | c & 63;
  return l;
}, ox = typeof ArrayBuffer == "function", ad = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: ld(t, e)
    };
  const n = t.charAt(0);
  return n === "b" ? {
    type: "message",
    data: ax(t.substring(1), e)
  } : jr[n] ? t.length > 1 ? {
    type: jr[n],
    data: t.substring(1)
  } : {
    type: jr[n]
  } : tx;
}, ax = (t, e) => {
  if (ox) {
    const n = sx(t);
    return ld(n, e);
  } else
    return { base64: !0, data: t };
}, ld = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof ArrayBuffer ? new Blob([t]) : t;
    case "arraybuffer":
    default:
      return t;
  }
}, cd = String.fromCharCode(30), lx = (t, e) => {
  const n = t.length, r = new Array(n);
  let i = 0;
  t.forEach((s, o) => {
    od(s, !1, (a) => {
      r[o] = a, ++i === n && e(r.join(cd));
    });
  });
}, cx = (t, e) => {
  const n = t.split(cd), r = [];
  for (let i = 0; i < n.length; i++) {
    const s = ad(n[i], e);
    if (r.push(s), s.type === "error")
      break;
  }
  return r;
}, ud = 4;
function Oe(t) {
  if (t)
    return ux(t);
}
function ux(t) {
  for (var e in Oe.prototype)
    t[e] = Oe.prototype[e];
  return t;
}
Oe.prototype.on = Oe.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
Oe.prototype.once = function(t, e) {
  function n() {
    this.off(t, n), e.apply(this, arguments);
  }
  return n.fn = e, this.on(t, n), this;
};
Oe.prototype.off = Oe.prototype.removeListener = Oe.prototype.removeAllListeners = Oe.prototype.removeEventListener = function(t, e) {
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
Oe.prototype.emit = function(t) {
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
Oe.prototype.emitReserved = Oe.prototype.emit;
Oe.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
Oe.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const lt = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();
function fd(t, ...e) {
  return e.reduce((n, r) => (t.hasOwnProperty(r) && (n[r] = t[r]), n), {});
}
const fx = lt.setTimeout, dx = lt.clearTimeout;
function as(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = fx.bind(lt), t.clearTimeoutFn = dx.bind(lt)) : (t.setTimeoutFn = lt.setTimeout.bind(lt), t.clearTimeoutFn = lt.clearTimeout.bind(lt));
}
const hx = 1.33;
function px(t) {
  return typeof t == "string" ? gx(t) : Math.ceil((t.byteLength || t.size) * hx);
}
function gx(t) {
  let e = 0, n = 0;
  for (let r = 0, i = t.length; r < i; r++)
    e = t.charCodeAt(r), e < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (r++, n += 4);
  return n;
}
class vx extends Error {
  constructor(e, n, r) {
    super(e), this.description = n, this.context = r, this.type = "TransportError";
  }
}
class dd extends Oe {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, as(this, e), this.opts = e, this.query = e.query, this.socket = e.socket;
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
    return super.emitReserved("error", new vx(e, n, r)), this;
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
    const n = ad(e, this.socket.binaryType);
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
const hd = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), yo = 64, mx = {};
let Ac = 0, Or = 0, Cc;
function Dc(t) {
  let e = "";
  do
    e = hd[t % yo] + e, t = Math.floor(t / yo);
  while (t > 0);
  return e;
}
function pd() {
  const t = Dc(+/* @__PURE__ */ new Date());
  return t !== Cc ? (Ac = 0, Cc = t) : t + "." + Dc(Ac++);
}
for (; Or < yo; Or++)
  mx[hd[Or]] = Or;
function gd(t) {
  let e = "";
  for (let n in t)
    t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
  return e;
}
function bx(t) {
  let e = {}, n = t.split("&");
  for (let r = 0, i = n.length; r < i; r++) {
    let s = n[r].split("=");
    e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return e;
}
let vd = !1;
try {
  vd = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const yx = vd;
function md(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || yx))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new lt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function xx() {
}
const wx = function() {
  return new md({
    xdomain: !1
  }).responseType != null;
}();
class Ex extends dd {
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
    this.supportsBinary = wx && !n;
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
    cx(e, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
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
    this.writable = !1, lx(e, (n) => {
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
    this.opts.timestampRequests !== !1 && (e[this.opts.timestampParam] = pd()), !this.supportsBinary && !e.sid && (e.b64 = 1), this.opts.port && (n === "https" && Number(this.opts.port) !== 443 || n === "http" && Number(this.opts.port) !== 80) && (r = ":" + this.opts.port);
    const i = gd(e), s = this.opts.hostname.indexOf(":") !== -1;
    return n + "://" + (s ? "[" + this.opts.hostname + "]" : this.opts.hostname) + r + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(e = {}) {
    return Object.assign(e, { xd: this.xd, xs: this.xs }, this.opts), new xt(this.uri(), e);
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
class xt extends Oe {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, n) {
    super(), as(this, n), this.opts = n, this.method = n.method || "GET", this.uri = e, this.async = n.async !== !1, this.data = n.data !== void 0 ? n.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    const e = fd(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    e.xdomain = !!this.opts.xd, e.xscheme = !!this.opts.xs;
    const n = this.xhr = new md(e);
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
    typeof document < "u" && (this.index = xt.requestsCount++, xt.requests[this.index] = this);
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
      if (this.xhr.onreadystatechange = xx, e)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete xt.requests[this.index], this.xhr = null;
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
xt.requestsCount = 0;
xt.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Rc);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in lt ? "pagehide" : "unload";
    addEventListener(t, Rc, !1);
  }
}
function Rc() {
  for (let t in xt.requests)
    xt.requests.hasOwnProperty(t) && xt.requests[t].abort();
}
const bd = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, n) => n(e, 0))(), Br = lt.WebSocket || lt.MozWebSocket, Tc = !0, _x = "arraybuffer", kc = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Sx extends dd {
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
    const e = this.uri(), n = this.opts.protocols, r = kc ? {} : fd(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = Tc && !kc ? n ? new Br(e, n) : new Br(e) : new Br(e, n, r);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this.ws.binaryType = this.socket.binaryType || _x, this.addEventListeners();
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
      od(r, this.supportsBinary, (s) => {
        const o = {};
        try {
          Tc && this.ws.send(s);
        } catch {
        }
        i && bd(() => {
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
    this.opts.port && (n === "wss" && Number(this.opts.port) !== 443 || n === "ws" && Number(this.opts.port) !== 80) && (r = ":" + this.opts.port), this.opts.timestampRequests && (e[this.opts.timestampParam] = pd()), this.supportsBinary || (e.b64 = 1);
    const i = gd(e), s = this.opts.hostname.indexOf(":") !== -1;
    return n + "://" + (s ? "[" + this.opts.hostname + "]" : this.opts.hostname) + r + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!Br;
  }
}
const Ax = {
  websocket: Sx,
  polling: Ex
}, Cx = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Dx = [
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
function xo(t) {
  const e = t, n = t.indexOf("["), r = t.indexOf("]");
  n != -1 && r != -1 && (t = t.substring(0, n) + t.substring(n, r).replace(/:/g, ";") + t.substring(r, t.length));
  let i = Cx.exec(t || ""), s = {}, o = 14;
  for (; o--; )
    s[Dx[o]] = i[o] || "";
  return n != -1 && r != -1 && (s.source = e, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = Rx(s, s.path), s.queryKey = Tx(s, s.query), s;
}
function Rx(t, e) {
  const n = /\/{2,9}/g, r = e.replace(n, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && r.splice(0, 1), e.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function Tx(t, e) {
  const n = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, i, s) {
    i && (n[i] = s);
  }), n;
}
let yd = class En extends Oe {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, n = {}) {
    super(), this.writeBuffer = [], e && typeof e == "object" && (n = e, e = null), e ? (e = xo(e), n.hostname = e.host, n.secure = e.protocol === "https" || e.protocol === "wss", n.port = e.port, e.query && (n.query = e.query)) : n.host && (n.hostname = xo(n.host).host), as(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = n.transports || ["polling", "websocket"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
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
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = bx(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
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
    n.EIO = ud, n.transport = e, this.id && (n.sid = this.id);
    const r = Object.assign({}, this.opts.transportOptions[e], this.opts, {
      query: n,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new Ax[e](r);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let e;
    if (this.opts.rememberUpgrade && En.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
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
    En.priorWebsocketSuccess = !1;
    const i = () => {
      r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (d) => {
        if (!r)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            En.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (u(), this.setTransport(n), n.send([{ type: "upgrade" }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush());
            });
          } else {
            const f = new Error("probe error");
            f.transport = n.name, this.emitReserved("upgradeError", f);
          }
      }));
    };
    function s() {
      r || (r = !0, u(), n.close(), n = null);
    }
    const o = (d) => {
      const f = new Error("probe error: " + d);
      f.transport = n.name, s(), this.emitReserved("upgradeError", f);
    };
    function a() {
      o("transport closed");
    }
    function c() {
      o("socket closed");
    }
    function l(d) {
      n && d.name !== n.name && s();
    }
    const u = () => {
      n.removeListener("open", i), n.removeListener("error", o), n.removeListener("close", a), this.off("close", c), this.off("upgrading", l);
    };
    n.once("open", i), n.once("error", o), n.once("close", a), this.once("close", c), this.once("upgrading", l), n.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", En.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
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
      if (i && (n += px(i)), r > 0 && n > this.maxPayload)
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
    En.priorWebsocketSuccess = !1, this.emitReserved("error", e), this.onClose("transport error", e);
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
yd.protocol = ud;
function kx(t, e = "", n) {
  let r = t;
  n = n || typeof location < "u" && location, t == null && (t = n.protocol + "//" + n.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = n.protocol + t : t = n.host + t), /^(https?|wss?):\/\//.test(t) || (typeof n < "u" ? t = n.protocol + "//" + t : t = "https://" + t), r = xo(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const s = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + s + ":" + r.port + e, r.href = r.protocol + "://" + s + (n && n.port === r.port ? "" : ":" + r.port), r;
}
const Ix = typeof ArrayBuffer == "function", Mx = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, xd = Object.prototype.toString, Nx = typeof Blob == "function" || typeof Blob < "u" && xd.call(Blob) === "[object BlobConstructor]", Ox = typeof File == "function" || typeof File < "u" && xd.call(File) === "[object FileConstructor]";
function ba(t) {
  return Ix && (t instanceof ArrayBuffer || Mx(t)) || Nx && t instanceof Blob || Ox && t instanceof File;
}
function Vr(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let n = 0, r = t.length; n < r; n++)
      if (Vr(t[n]))
        return !0;
    return !1;
  }
  if (ba(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return Vr(t.toJSON(), !0);
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && Vr(t[n]))
      return !0;
  return !1;
}
function Bx(t) {
  const e = [], n = t.data, r = t;
  return r.data = wo(n, e), r.attachments = e.length, { packet: r, buffers: e };
}
function wo(t, e) {
  if (!t)
    return t;
  if (ba(t)) {
    const n = { _placeholder: !0, num: e.length };
    return e.push(t), n;
  } else if (Array.isArray(t)) {
    const n = new Array(t.length);
    for (let r = 0; r < t.length; r++)
      n[r] = wo(t[r], e);
    return n;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const n = {};
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (n[r] = wo(t[r], e));
    return n;
  }
  return t;
}
function Px(t, e) {
  return t.data = Eo(t.data, e), delete t.attachments, t;
}
function Eo(t, e) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
      return e[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let n = 0; n < t.length; n++)
      t[n] = Eo(t[n], e);
  else if (typeof t == "object")
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (t[n] = Eo(t[n], e));
  return t;
}
const Hx = 5;
var ve;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(ve || (ve = {}));
class Lx {
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
    return (e.type === ve.EVENT || e.type === ve.ACK) && Vr(e) ? this.encodeAsBinary({
      type: e.type === ve.EVENT ? ve.BINARY_EVENT : ve.BINARY_ACK,
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
    return (e.type === ve.BINARY_EVENT || e.type === ve.BINARY_ACK) && (n += e.attachments + "-"), e.nsp && e.nsp !== "/" && (n += e.nsp + ","), e.id != null && (n += e.id), e.data != null && (n += JSON.stringify(e.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const n = Bx(e), r = this.encodeAsString(n.packet), i = n.buffers;
    return i.unshift(r), i;
  }
}
class ya extends Oe {
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
      const r = n.type === ve.BINARY_EVENT;
      r || n.type === ve.BINARY_ACK ? (n.type = r ? ve.EVENT : ve.ACK, this.reconstructor = new Fx(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (ba(e) || e.base64)
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
    if (ve[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === ve.BINARY_EVENT || r.type === ve.BINARY_ACK) {
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
      if (ya.isPayloadValid(r.type, s))
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
      case ve.CONNECT:
        return typeof n == "object";
      case ve.DISCONNECT:
        return n === void 0;
      case ve.CONNECT_ERROR:
        return typeof n == "string" || typeof n == "object";
      case ve.EVENT:
      case ve.BINARY_EVENT:
        return Array.isArray(n) && n.length > 0;
      case ve.ACK:
      case ve.BINARY_ACK:
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
class Fx {
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
      const n = Px(this.reconPack, this.buffers);
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
const zx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: ya,
  Encoder: Lx,
  get PacketType() {
    return ve;
  },
  protocol: Hx
}, Symbol.toStringTag, { value: "Module" }));
function dt(t, e, n) {
  return t.on(e, n), function() {
    t.off(e, n);
  };
}
const Ux = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class wd extends Oe {
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
      dt(e, "open", this.onopen.bind(this)),
      dt(e, "packet", this.onpacket.bind(this)),
      dt(e, "error", this.onerror.bind(this)),
      dt(e, "close", this.onclose.bind(this))
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
    if (Ux.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (n.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const r = {
      type: ve.EVENT,
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
      type: ve.CONNECT,
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
        case ve.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case ve.EVENT:
        case ve.BINARY_EVENT:
          this.onevent(e);
          break;
        case ve.ACK:
        case ve.BINARY_ACK:
          this.onack(e);
          break;
        case ve.DISCONNECT:
          this.ondisconnect();
          break;
        case ve.CONNECT_ERROR:
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
        type: ve.ACK,
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
    return this.connected && this.packet({ type: ve.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function Ln(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
Ln.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), n = Math.floor(e * this.jitter * t);
    t = Math.floor(e * 10) & 1 ? t + n : t - n;
  }
  return Math.min(t, this.max) | 0;
};
Ln.prototype.reset = function() {
  this.attempts = 0;
};
Ln.prototype.setMin = function(t) {
  this.ms = t;
};
Ln.prototype.setMax = function(t) {
  this.max = t;
};
Ln.prototype.setJitter = function(t) {
  this.jitter = t;
};
class _o extends Oe {
  constructor(e, n) {
    var r;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (n = e, e = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, as(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Ln({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = e;
    const i = n.parser || zx;
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
    this.engine = new yd(this.uri, this.opts);
    const n = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = dt(n, "open", function() {
      r.onopen(), e && e();
    }), s = dt(n, "error", (o) => {
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
    this.subs.push(dt(e, "ping", this.onping.bind(this)), dt(e, "data", this.ondata.bind(this)), dt(e, "error", this.onerror.bind(this)), dt(e, "close", this.onclose.bind(this)), dt(this.decoder, "decoded", this.ondecoded.bind(this)));
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
    bd(() => {
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
    return r ? this._autoConnect && !r.active && r.connect() : (r = new wd(this, e, n), this.nsps[e] = r), r;
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
const Yn = {};
function Vs(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const n = kx(t, e.path || "/socket.io"), r = n.source, i = n.id, s = n.path, o = Yn[i] && s in Yn[i].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let c;
  return a ? c = new _o(r, e) : (Yn[i] || (Yn[i] = new _o(r, e)), c = Yn[i]), n.query && !e.query && (e.query = n.queryKey), c.socket(n.path, e);
}
Object.assign(Vs, {
  Manager: _o,
  Socket: wd,
  io: Vs,
  connect: Vs
});
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var An = 9e15, Zt = 1e9, So = "0123456789abcdef", Gi = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Yi = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Ao = {
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
  minE: -An,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: An,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Ed, It, ce = !0, ls = "[DecimalError] ", Yt = ls + "Invalid argument: ", _d = ls + "Precision limit exceeded", Sd = ls + "crypto unavailable", Ad = "[object Decimal]", Ve = Math.floor, Pe = Math.pow, Wx = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, jx = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Vx = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Cd = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, vt = 1e7, ie = 7, $x = 9007199254740991, qx = Gi.length - 1, Co = Yi.length - 1, q = { toStringTag: Ad };
q.absoluteValue = q.abs = function() {
  var t = new this.constructor(this);
  return t.s < 0 && (t.s = 1), ne(t);
};
q.ceil = function() {
  return ne(new this.constructor(this), this.e + 1, 2);
};
q.clampedTo = q.clamp = function(t, e) {
  var n, r = this, i = r.constructor;
  if (t = new i(t), e = new i(e), !t.s || !e.s)
    return new i(NaN);
  if (t.gt(e))
    throw Error(Yt + e);
  return n = r.cmp(t), n < 0 ? t : r.cmp(e) > 0 ? e : new i(r);
};
q.comparedTo = q.cmp = function(t) {
  var e, n, r, i, s = this, o = s.d, a = (t = new s.constructor(t)).d, c = s.s, l = t.s;
  if (!o || !a)
    return !c || !l ? NaN : c !== l ? c : o === a ? 0 : !o ^ c < 0 ? 1 : -1;
  if (!o[0] || !a[0])
    return o[0] ? c : a[0] ? -l : 0;
  if (c !== l)
    return c;
  if (s.e !== t.e)
    return s.e > t.e ^ c < 0 ? 1 : -1;
  for (r = o.length, i = a.length, e = 0, n = r < i ? r : i; e < n; ++e)
    if (o[e] !== a[e])
      return o[e] > a[e] ^ c < 0 ? 1 : -1;
  return r === i ? 0 : r > i ^ c < 0 ? 1 : -1;
};
q.cosine = q.cos = function() {
  var t, e, n = this, r = n.constructor;
  return n.d ? n.d[0] ? (t = r.precision, e = r.rounding, r.precision = t + Math.max(n.e, n.sd()) + ie, r.rounding = 1, n = Gx(r, Id(r, n)), r.precision = t, r.rounding = e, ne(It == 2 || It == 3 ? n.neg() : n, t, e, !0)) : new r(1) : new r(NaN);
};
q.cubeRoot = q.cbrt = function() {
  var t, e, n, r, i, s, o, a, c, l, u = this, d = u.constructor;
  if (!u.isFinite() || u.isZero())
    return new d(u);
  for (ce = !1, s = u.s * Pe(u.s * u, 1 / 3), !s || Math.abs(s) == 1 / 0 ? (n = Ue(u.d), t = u.e, (s = (t - n.length + 1) % 3) && (n += s == 1 || s == -2 ? "0" : "00"), s = Pe(n, 1 / 3), t = Ve((t + 1) / 3) - (t % 3 == (t < 0 ? -1 : 2)), s == 1 / 0 ? n = "5e" + t : (n = s.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + t), r = new d(n), r.s = u.s) : r = new d(s.toString()), o = (t = d.precision) + 3; ; )
    if (a = r, c = a.times(a).times(a), l = c.plus(u), r = Ee(l.plus(u).times(a), l.plus(c), o + 2, 1), Ue(a.d).slice(0, o) === (n = Ue(r.d)).slice(0, o))
      if (n = n.slice(o - 3, o + 1), n == "9999" || !i && n == "4999") {
        if (!i && (ne(a, t + 1, 0), a.times(a).times(a).eq(u))) {
          r = a;
          break;
        }
        o += 4, i = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (ne(r, t + 1, 1), e = !r.times(r).times(r).eq(u));
        break;
      }
  return ce = !0, ne(r, t, d.rounding, e);
};
q.decimalPlaces = q.dp = function() {
  var t, e = this.d, n = NaN;
  if (e) {
    if (t = e.length - 1, n = (t - Ve(this.e / ie)) * ie, t = e[t], t)
      for (; t % 10 == 0; t /= 10)
        n--;
    n < 0 && (n = 0);
  }
  return n;
};
q.dividedBy = q.div = function(t) {
  return Ee(this, new this.constructor(t));
};
q.dividedToIntegerBy = q.divToInt = function(t) {
  var e = this, n = e.constructor;
  return ne(Ee(e, new n(t), 0, 1, 1), n.precision, n.rounding);
};
q.equals = q.eq = function(t) {
  return this.cmp(t) === 0;
};
q.floor = function() {
  return ne(new this.constructor(this), this.e + 1, 3);
};
q.greaterThan = q.gt = function(t) {
  return this.cmp(t) > 0;
};
q.greaterThanOrEqualTo = q.gte = function(t) {
  var e = this.cmp(t);
  return e == 1 || e === 0;
};
q.hyperbolicCosine = q.cosh = function() {
  var t, e, n, r, i, s = this, o = s.constructor, a = new o(1);
  if (!s.isFinite())
    return new o(s.s ? 1 / 0 : NaN);
  if (s.isZero())
    return a;
  n = o.precision, r = o.rounding, o.precision = n + Math.max(s.e, s.sd()) + 4, o.rounding = 1, i = s.d.length, i < 32 ? (t = Math.ceil(i / 3), e = (1 / us(4, t)).toString()) : (t = 16, e = "2.3283064365386962890625e-10"), s = Bn(o, 1, s.times(e), new o(1), !0);
  for (var c, l = t, u = new o(8); l--; )
    c = s.times(s), s = a.minus(c.times(u.minus(c.times(u))));
  return ne(s, o.precision = n, o.rounding = r, !0);
};
q.hyperbolicSine = q.sinh = function() {
  var t, e, n, r, i = this, s = i.constructor;
  if (!i.isFinite() || i.isZero())
    return new s(i);
  if (e = s.precision, n = s.rounding, s.precision = e + Math.max(i.e, i.sd()) + 4, s.rounding = 1, r = i.d.length, r < 3)
    i = Bn(s, 2, i, i, !0);
  else {
    t = 1.4 * Math.sqrt(r), t = t > 16 ? 16 : t | 0, i = i.times(1 / us(5, t)), i = Bn(s, 2, i, i, !0);
    for (var o, a = new s(5), c = new s(16), l = new s(20); t--; )
      o = i.times(i), i = i.times(a.plus(o.times(c.times(o).plus(l))));
  }
  return s.precision = e, s.rounding = n, ne(i, e, n, !0);
};
q.hyperbolicTangent = q.tanh = function() {
  var t, e, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (t = r.precision, e = r.rounding, r.precision = t + 7, r.rounding = 1, Ee(n.sinh(), n.cosh(), r.precision = t, r.rounding = e)) : new r(n.s);
};
q.inverseCosine = q.acos = function() {
  var t, e = this, n = e.constructor, r = e.abs().cmp(1), i = n.precision, s = n.rounding;
  return r !== -1 ? r === 0 ? e.isNeg() ? gt(n, i, s) : new n(0) : new n(NaN) : e.isZero() ? gt(n, i + 4, s).times(0.5) : (n.precision = i + 6, n.rounding = 1, e = e.asin(), t = gt(n, i + 4, s).times(0.5), n.precision = i, n.rounding = s, t.minus(e));
};
q.inverseHyperbolicCosine = q.acosh = function() {
  var t, e, n = this, r = n.constructor;
  return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (t = r.precision, e = r.rounding, r.precision = t + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, ce = !1, n = n.times(n).minus(1).sqrt().plus(n), ce = !0, r.precision = t, r.rounding = e, n.ln()) : new r(n);
};
q.inverseHyperbolicSine = q.asinh = function() {
  var t, e, n = this, r = n.constructor;
  return !n.isFinite() || n.isZero() ? new r(n) : (t = r.precision, e = r.rounding, r.precision = t + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, ce = !1, n = n.times(n).plus(1).sqrt().plus(n), ce = !0, r.precision = t, r.rounding = e, n.ln());
};
q.inverseHyperbolicTangent = q.atanh = function() {
  var t, e, n, r, i = this, s = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (t = s.precision, e = s.rounding, r = i.sd(), Math.max(r, t) < 2 * -i.e - 1 ? ne(new s(i), t, e, !0) : (s.precision = n = r - i.e, i = Ee(i.plus(1), new s(1).minus(i), n + t, 1), s.precision = t + 4, s.rounding = 1, i = i.ln(), s.precision = t, s.rounding = e, i.times(0.5))) : new s(NaN);
};
q.inverseSine = q.asin = function() {
  var t, e, n, r, i = this, s = i.constructor;
  return i.isZero() ? new s(i) : (e = i.abs().cmp(1), n = s.precision, r = s.rounding, e !== -1 ? e === 0 ? (t = gt(s, n + 4, r).times(0.5), t.s = i.s, t) : new s(NaN) : (s.precision = n + 6, s.rounding = 1, i = i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan(), s.precision = n, s.rounding = r, i.times(2)));
};
q.inverseTangent = q.atan = function() {
  var t, e, n, r, i, s, o, a, c, l = this, u = l.constructor, d = u.precision, f = u.rounding;
  if (l.isFinite()) {
    if (l.isZero())
      return new u(l);
    if (l.abs().eq(1) && d + 4 <= Co)
      return o = gt(u, d + 4, f).times(0.25), o.s = l.s, o;
  } else {
    if (!l.s)
      return new u(NaN);
    if (d + 4 <= Co)
      return o = gt(u, d + 4, f).times(0.5), o.s = l.s, o;
  }
  for (u.precision = a = d + 10, u.rounding = 1, n = Math.min(28, a / ie + 2 | 0), t = n; t; --t)
    l = l.div(l.times(l).plus(1).sqrt().plus(1));
  for (ce = !1, e = Math.ceil(a / ie), r = 1, c = l.times(l), o = new u(l), i = l; t !== -1; )
    if (i = i.times(c), s = o.minus(i.div(r += 2)), i = i.times(c), o = s.plus(i.div(r += 2)), o.d[e] !== void 0)
      for (t = e; o.d[t] === s.d[t] && t--; )
        ;
  return n && (o = o.times(2 << n - 1)), ce = !0, ne(o, u.precision = d, u.rounding = f, !0);
};
q.isFinite = function() {
  return !!this.d;
};
q.isInteger = q.isInt = function() {
  return !!this.d && Ve(this.e / ie) > this.d.length - 2;
};
q.isNaN = function() {
  return !this.s;
};
q.isNegative = q.isNeg = function() {
  return this.s < 0;
};
q.isPositive = q.isPos = function() {
  return this.s > 0;
};
q.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
q.lessThan = q.lt = function(t) {
  return this.cmp(t) < 0;
};
q.lessThanOrEqualTo = q.lte = function(t) {
  return this.cmp(t) < 1;
};
q.logarithm = q.log = function(t) {
  var e, n, r, i, s, o, a, c, l = this, u = l.constructor, d = u.precision, f = u.rounding, h = 5;
  if (t == null)
    t = new u(10), e = !0;
  else {
    if (t = new u(t), n = t.d, t.s < 0 || !n || !n[0] || t.eq(1))
      return new u(NaN);
    e = t.eq(10);
  }
  if (n = l.d, l.s < 0 || !n || !n[0] || l.eq(1))
    return new u(n && !n[0] ? -1 / 0 : l.s != 1 ? NaN : n ? 0 : 1 / 0);
  if (e)
    if (n.length > 1)
      s = !0;
    else {
      for (i = n[0]; i % 10 === 0; )
        i /= 10;
      s = i !== 1;
    }
  if (ce = !1, a = d + h, o = Vt(l, a), r = e ? Qi(u, a + 10) : Vt(t, a), c = Ee(o, r, a, 1), ar(c.d, i = d, f))
    do
      if (a += 10, o = Vt(l, a), r = e ? Qi(u, a + 10) : Vt(t, a), c = Ee(o, r, a, 1), !s) {
        +Ue(c.d).slice(i + 1, i + 15) + 1 == 1e14 && (c = ne(c, d + 1, 0));
        break;
      }
    while (ar(c.d, i += 10, f));
  return ce = !0, ne(c, d, f);
};
q.minus = q.sub = function(t) {
  var e, n, r, i, s, o, a, c, l, u, d, f, h = this, p = h.constructor;
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
    return ce ? ne(t, a, c) : t;
  }
  if (n = Ve(t.e / ie), u = Ve(h.e / ie), l = l.slice(), s = u - n, s) {
    for (d = s < 0, d ? (e = l, s = -s, o = f.length) : (e = f, n = u, o = l.length), r = Math.max(Math.ceil(a / ie), o) + 2, s > r && (s = r, e.length = 1), e.reverse(), r = s; r--; )
      e.push(0);
    e.reverse();
  } else {
    for (r = l.length, o = f.length, d = r < o, d && (o = r), r = 0; r < o; r++)
      if (l[r] != f[r]) {
        d = l[r] < f[r];
        break;
      }
    s = 0;
  }
  for (d && (e = l, l = f, f = e, t.s = -t.s), o = l.length, r = f.length - o; r > 0; --r)
    l[o++] = 0;
  for (r = f.length; r > s; ) {
    if (l[--r] < f[r]) {
      for (i = r; i && l[--i] === 0; )
        l[i] = vt - 1;
      --l[i], l[r] += vt;
    }
    l[r] -= f[r];
  }
  for (; l[--o] === 0; )
    l.pop();
  for (; l[0] === 0; l.shift())
    --n;
  return l[0] ? (t.d = l, t.e = cs(l, n), ce ? ne(t, a, c) : t) : new p(c === 3 ? -0 : 0);
};
q.modulo = q.mod = function(t) {
  var e, n = this, r = n.constructor;
  return t = new r(t), !n.d || !t.s || t.d && !t.d[0] ? new r(NaN) : !t.d || n.d && !n.d[0] ? ne(new r(n), r.precision, r.rounding) : (ce = !1, r.modulo == 9 ? (e = Ee(n, t.abs(), 0, 3, 1), e.s *= t.s) : e = Ee(n, t, 0, r.modulo, 1), e = e.times(t), ce = !0, n.minus(e));
};
q.naturalExponential = q.exp = function() {
  return Do(this);
};
q.naturalLogarithm = q.ln = function() {
  return Vt(this);
};
q.negated = q.neg = function() {
  var t = new this.constructor(this);
  return t.s = -t.s, ne(t);
};
q.plus = q.add = function(t) {
  var e, n, r, i, s, o, a, c, l, u, d = this, f = d.constructor;
  if (t = new f(t), !d.d || !t.d)
    return !d.s || !t.s ? t = new f(NaN) : d.d || (t = new f(t.d || d.s === t.s ? d : NaN)), t;
  if (d.s != t.s)
    return t.s = -t.s, d.minus(t);
  if (l = d.d, u = t.d, a = f.precision, c = f.rounding, !l[0] || !u[0])
    return u[0] || (t = new f(d)), ce ? ne(t, a, c) : t;
  if (s = Ve(d.e / ie), r = Ve(t.e / ie), l = l.slice(), i = s - r, i) {
    for (i < 0 ? (n = l, i = -i, o = u.length) : (n = u, r = s, o = l.length), s = Math.ceil(a / ie), o = s > o ? s + 1 : o + 1, i > o && (i = o, n.length = 1), n.reverse(); i--; )
      n.push(0);
    n.reverse();
  }
  for (o = l.length, i = u.length, o - i < 0 && (i = o, n = u, u = l, l = n), e = 0; i; )
    e = (l[--i] = l[i] + u[i] + e) / vt | 0, l[i] %= vt;
  for (e && (l.unshift(e), ++r), o = l.length; l[--o] == 0; )
    l.pop();
  return t.d = l, t.e = cs(l, r), ce ? ne(t, a, c) : t;
};
q.precision = q.sd = function(t) {
  var e, n = this;
  if (t !== void 0 && t !== !!t && t !== 1 && t !== 0)
    throw Error(Yt + t);
  return n.d ? (e = Dd(n.d), t && n.e + 1 > e && (e = n.e + 1)) : e = NaN, e;
};
q.round = function() {
  var t = this, e = t.constructor;
  return ne(new e(t), t.e + 1, e.rounding);
};
q.sine = q.sin = function() {
  var t, e, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (t = r.precision, e = r.rounding, r.precision = t + Math.max(n.e, n.sd()) + ie, r.rounding = 1, n = Qx(r, Id(r, n)), r.precision = t, r.rounding = e, ne(It > 2 ? n.neg() : n, t, e, !0)) : new r(NaN);
};
q.squareRoot = q.sqrt = function() {
  var t, e, n, r, i, s, o = this, a = o.d, c = o.e, l = o.s, u = o.constructor;
  if (l !== 1 || !a || !a[0])
    return new u(!l || l < 0 && (!a || a[0]) ? NaN : a ? o : 1 / 0);
  for (ce = !1, l = Math.sqrt(+o), l == 0 || l == 1 / 0 ? (e = Ue(a), (e.length + c) % 2 == 0 && (e += "0"), l = Math.sqrt(e), c = Ve((c + 1) / 2) - (c < 0 || c % 2), l == 1 / 0 ? e = "5e" + c : (e = l.toExponential(), e = e.slice(0, e.indexOf("e") + 1) + c), r = new u(e)) : r = new u(l.toString()), n = (c = u.precision) + 3; ; )
    if (s = r, r = s.plus(Ee(o, s, n + 2, 1)).times(0.5), Ue(s.d).slice(0, n) === (e = Ue(r.d)).slice(0, n))
      if (e = e.slice(n - 3, n + 1), e == "9999" || !i && e == "4999") {
        if (!i && (ne(s, c + 1, 0), s.times(s).eq(o))) {
          r = s;
          break;
        }
        n += 4, i = 1;
      } else {
        (!+e || !+e.slice(1) && e.charAt(0) == "5") && (ne(r, c + 1, 1), t = !r.times(r).eq(o));
        break;
      }
  return ce = !0, ne(r, c, u.rounding, t);
};
q.tangent = q.tan = function() {
  var t, e, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (t = r.precision, e = r.rounding, r.precision = t + 10, r.rounding = 1, n = n.sin(), n.s = 1, n = Ee(n, new r(1).minus(n.times(n)).sqrt(), t + 10, 0), r.precision = t, r.rounding = e, ne(It == 2 || It == 4 ? n.neg() : n, t, e, !0)) : new r(NaN);
};
q.times = q.mul = function(t) {
  var e, n, r, i, s, o, a, c, l, u = this, d = u.constructor, f = u.d, h = (t = new d(t)).d;
  if (t.s *= u.s, !f || !f[0] || !h || !h[0])
    return new d(!t.s || f && !f[0] && !h || h && !h[0] && !f ? NaN : !f || !h ? t.s / 0 : t.s * 0);
  for (n = Ve(u.e / ie) + Ve(t.e / ie), c = f.length, l = h.length, c < l && (s = f, f = h, h = s, o = c, c = l, l = o), s = [], o = c + l, r = o; r--; )
    s.push(0);
  for (r = l; --r >= 0; ) {
    for (e = 0, i = c + r; i > r; )
      a = s[i] + h[r] * f[i - r - 1] + e, s[i--] = a % vt | 0, e = a / vt | 0;
    s[i] = (s[i] + e) % vt | 0;
  }
  for (; !s[--o]; )
    s.pop();
  return e ? ++n : s.shift(), t.d = s, t.e = cs(s, n), ce ? ne(t, d.precision, d.rounding) : t;
};
q.toBinary = function(t, e) {
  return xa(this, 2, t, e);
};
q.toDecimalPlaces = q.toDP = function(t, e) {
  var n = this, r = n.constructor;
  return n = new r(n), t === void 0 ? n : (Ke(t, 0, Zt), e === void 0 ? e = r.rounding : Ke(e, 0, 8), ne(n, t + n.e + 1, e));
};
q.toExponential = function(t, e) {
  var n, r = this, i = r.constructor;
  return t === void 0 ? n = _t(r, !0) : (Ke(t, 0, Zt), e === void 0 ? e = i.rounding : Ke(e, 0, 8), r = ne(new i(r), t + 1, e), n = _t(r, !0, t + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
q.toFixed = function(t, e) {
  var n, r, i = this, s = i.constructor;
  return t === void 0 ? n = _t(i) : (Ke(t, 0, Zt), e === void 0 ? e = s.rounding : Ke(e, 0, 8), r = ne(new s(i), t + i.e + 1, e), n = _t(r, !1, t + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
};
q.toFraction = function(t) {
  var e, n, r, i, s, o, a, c, l, u, d, f, h = this, p = h.d, v = h.constructor;
  if (!p)
    return new v(h);
  if (l = n = new v(1), r = c = new v(0), e = new v(r), s = e.e = Dd(p) - h.e - 1, o = s % ie, e.d[0] = Pe(10, o < 0 ? ie + o : o), t == null)
    t = s > 0 ? e : l;
  else {
    if (a = new v(t), !a.isInt() || a.lt(l))
      throw Error(Yt + a);
    t = a.gt(e) ? s > 0 ? e : l : a;
  }
  for (ce = !1, a = new v(Ue(p)), u = v.precision, v.precision = s = p.length * ie * 2; d = Ee(a, e, 0, 1, 1), i = n.plus(d.times(r)), i.cmp(t) != 1; )
    n = r, r = i, i = l, l = c.plus(d.times(i)), c = i, i = e, e = a.minus(d.times(i)), a = i;
  return i = Ee(t.minus(n), r, 0, 1, 1), c = c.plus(i.times(l)), n = n.plus(i.times(r)), c.s = l.s = h.s, f = Ee(l, r, s, 1).minus(h).abs().cmp(Ee(c, n, s, 1).minus(h).abs()) < 1 ? [l, r] : [c, n], v.precision = u, ce = !0, f;
};
q.toHexadecimal = q.toHex = function(t, e) {
  return xa(this, 16, t, e);
};
q.toNearest = function(t, e) {
  var n = this, r = n.constructor;
  if (n = new r(n), t == null) {
    if (!n.d)
      return n;
    t = new r(1), e = r.rounding;
  } else {
    if (t = new r(t), e === void 0 ? e = r.rounding : Ke(e, 0, 8), !n.d)
      return t.s ? n : t;
    if (!t.d)
      return t.s && (t.s = n.s), t;
  }
  return t.d[0] ? (ce = !1, n = Ee(n, t, 0, e, 1).times(t), ce = !0, ne(n)) : (t.s = n.s, n = t), n;
};
q.toNumber = function() {
  return +this;
};
q.toOctal = function(t, e) {
  return xa(this, 8, t, e);
};
q.toPower = q.pow = function(t) {
  var e, n, r, i, s, o, a = this, c = a.constructor, l = +(t = new c(t));
  if (!a.d || !t.d || !a.d[0] || !t.d[0])
    return new c(Pe(+a, l));
  if (a = new c(a), a.eq(1))
    return a;
  if (r = c.precision, s = c.rounding, t.eq(1))
    return ne(a, r, s);
  if (e = Ve(t.e / ie), e >= t.d.length - 1 && (n = l < 0 ? -l : l) <= $x)
    return i = Rd(c, a, n, r), t.s < 0 ? new c(1).div(i) : ne(i, r, s);
  if (o = a.s, o < 0) {
    if (e < t.d.length - 1)
      return new c(NaN);
    if (t.d[e] & 1 || (o = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
      return a.s = o, a;
  }
  return n = Pe(+a, l), e = n == 0 || !isFinite(n) ? Ve(l * (Math.log("0." + Ue(a.d)) / Math.LN10 + a.e + 1)) : new c(n + "").e, e > c.maxE + 1 || e < c.minE - 1 ? new c(e > 0 ? o / 0 : 0) : (ce = !1, c.rounding = a.s = 1, n = Math.min(12, (e + "").length), i = Do(t.times(Vt(a, r + n)), r), i.d && (i = ne(i, r + 5, 1), ar(i.d, r, s) && (e = r + 10, i = ne(Do(t.times(Vt(a, e + n)), e), e + 5, 1), +Ue(i.d).slice(r + 1, r + 15) + 1 == 1e14 && (i = ne(i, r + 1, 0)))), i.s = o, ce = !0, c.rounding = s, ne(i, r, s));
};
q.toPrecision = function(t, e) {
  var n, r = this, i = r.constructor;
  return t === void 0 ? n = _t(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (Ke(t, 1, Zt), e === void 0 ? e = i.rounding : Ke(e, 0, 8), r = ne(new i(r), t, e), n = _t(r, t <= r.e || r.e <= i.toExpNeg, t)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
q.toSignificantDigits = q.toSD = function(t, e) {
  var n = this, r = n.constructor;
  return t === void 0 ? (t = r.precision, e = r.rounding) : (Ke(t, 1, Zt), e === void 0 ? e = r.rounding : Ke(e, 0, 8)), ne(new r(n), t, e);
};
q.toString = function() {
  var t = this, e = t.constructor, n = _t(t, t.e <= e.toExpNeg || t.e >= e.toExpPos);
  return t.isNeg() && !t.isZero() ? "-" + n : n;
};
q.truncated = q.trunc = function() {
  return ne(new this.constructor(this), this.e + 1, 1);
};
q.valueOf = q.toJSON = function() {
  var t = this, e = t.constructor, n = _t(t, t.e <= e.toExpNeg || t.e >= e.toExpPos);
  return t.isNeg() ? "-" + n : n;
};
function Ue(t) {
  var e, n, r, i = t.length - 1, s = "", o = t[0];
  if (i > 0) {
    for (s += o, e = 1; e < i; e++)
      r = t[e] + "", n = ie - r.length, n && (s += zt(n)), s += r;
    o = t[e], r = o + "", n = ie - r.length, n && (s += zt(n));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; )
    o /= 10;
  return s + o;
}
function Ke(t, e, n) {
  if (t !== ~~t || t < e || t > n)
    throw Error(Yt + t);
}
function ar(t, e, n, r) {
  var i, s, o, a;
  for (s = t[0]; s >= 10; s /= 10)
    --e;
  return --e < 0 ? (e += ie, i = 0) : (i = Math.ceil((e + 1) / ie), e %= ie), s = Pe(10, ie - e), a = t[i] % s | 0, r == null ? e < 3 ? (e == 0 ? a = a / 100 | 0 : e == 1 && (a = a / 10 | 0), o = n < 4 && a == 99999 || n > 3 && a == 49999 || a == 5e4 || a == 0) : o = (n < 4 && a + 1 == s || n > 3 && a + 1 == s / 2) && (t[i + 1] / s / 100 | 0) == Pe(10, e - 2) - 1 || (a == s / 2 || a == 0) && (t[i + 1] / s / 100 | 0) == 0 : e < 4 ? (e == 0 ? a = a / 1e3 | 0 : e == 1 ? a = a / 100 | 0 : e == 2 && (a = a / 10 | 0), o = (r || n < 4) && a == 9999 || !r && n > 3 && a == 4999) : o = ((r || n < 4) && a + 1 == s || !r && n > 3 && a + 1 == s / 2) && (t[i + 1] / s / 1e3 | 0) == Pe(10, e - 3) - 1, o;
}
function $r(t, e, n) {
  for (var r, i = [0], s, o = 0, a = t.length; o < a; ) {
    for (s = i.length; s--; )
      i[s] *= e;
    for (i[0] += So.indexOf(t.charAt(o++)), r = 0; r < i.length; r++)
      i[r] > n - 1 && (i[r + 1] === void 0 && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n);
  }
  return i.reverse();
}
function Gx(t, e) {
  var n, r, i;
  if (e.isZero())
    return e;
  r = e.d.length, r < 32 ? (n = Math.ceil(r / 3), i = (1 / us(4, n)).toString()) : (n = 16, i = "2.3283064365386962890625e-10"), t.precision += n, e = Bn(t, 1, e.times(i), new t(1));
  for (var s = n; s--; ) {
    var o = e.times(e);
    e = o.times(o).minus(o).times(8).plus(1);
  }
  return t.precision -= n, e;
}
var Ee = function() {
  function t(r, i, s) {
    var o, a = 0, c = r.length;
    for (r = r.slice(); c--; )
      o = r[c] * i + a, r[c] = o % s | 0, a = o / s | 0;
    return a && r.unshift(a), r;
  }
  function e(r, i, s, o) {
    var a, c;
    if (s != o)
      c = s > o ? 1 : -1;
    else
      for (a = c = 0; a < s; a++)
        if (r[a] != i[a]) {
          c = r[a] > i[a] ? 1 : -1;
          break;
        }
    return c;
  }
  function n(r, i, s, o) {
    for (var a = 0; s--; )
      r[s] -= a, a = r[s] < i[s] ? 1 : 0, r[s] = a * o + r[s] - i[s];
    for (; !r[0] && r.length > 1; )
      r.shift();
  }
  return function(r, i, s, o, a, c) {
    var l, u, d, f, h, p, v, b, m, x, g, y, E, S, _, C, N, D, k, P, B = r.constructor, z = r.s == i.s ? 1 : -1, H = r.d, j = i.d;
    if (!H || !H[0] || !j || !j[0])
      return new B(
        // Return NaN if either NaN, or both Infinity or 0.
        !r.s || !i.s || (H ? j && H[0] == j[0] : !j) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          H && H[0] == 0 || !j ? z * 0 : z / 0
        )
      );
    for (c ? (h = 1, u = r.e - i.e) : (c = vt, h = ie, u = Ve(r.e / h) - Ve(i.e / h)), k = j.length, N = H.length, m = new B(z), x = m.d = [], d = 0; j[d] == (H[d] || 0); d++)
      ;
    if (j[d] > (H[d] || 0) && u--, s == null ? (S = s = B.precision, o = B.rounding) : a ? S = s + (r.e - i.e) + 1 : S = s, S < 0)
      x.push(1), p = !0;
    else {
      if (S = S / h + 2 | 0, d = 0, k == 1) {
        for (f = 0, j = j[0], S++; (d < N || f) && S--; d++)
          _ = f * c + (H[d] || 0), x[d] = _ / j | 0, f = _ % j | 0;
        p = f || d < N;
      } else {
        for (f = c / (j[0] + 1) | 0, f > 1 && (j = t(j, f, c), H = t(H, f, c), k = j.length, N = H.length), C = k, g = H.slice(0, k), y = g.length; y < k; )
          g[y++] = 0;
        P = j.slice(), P.unshift(0), D = j[0], j[1] >= c / 2 && ++D;
        do
          f = 0, l = e(j, g, k, y), l < 0 ? (E = g[0], k != y && (E = E * c + (g[1] || 0)), f = E / D | 0, f > 1 ? (f >= c && (f = c - 1), v = t(j, f, c), b = v.length, y = g.length, l = e(v, g, b, y), l == 1 && (f--, n(v, k < b ? P : j, b, c))) : (f == 0 && (l = f = 1), v = j.slice()), b = v.length, b < y && v.unshift(0), n(g, v, y, c), l == -1 && (y = g.length, l = e(j, g, k, y), l < 1 && (f++, n(g, k < y ? P : j, y, c))), y = g.length) : l === 0 && (f++, g = [0]), x[d++] = f, l && g[0] ? g[y++] = H[C] || 0 : (g = [H[C]], y = 1);
        while ((C++ < N || g[0] !== void 0) && S--);
        p = g[0] !== void 0;
      }
      x[0] || x.shift();
    }
    if (h == 1)
      m.e = u, Ed = p;
    else {
      for (d = 1, f = x[0]; f >= 10; f /= 10)
        d++;
      m.e = d + u * h - 1, ne(m, a ? s + m.e + 1 : s, o, p);
    }
    return m;
  };
}();
function ne(t, e, n, r) {
  var i, s, o, a, c, l, u, d, f, h = t.constructor;
  e:
    if (e != null) {
      if (d = t.d, !d)
        return t;
      for (i = 1, a = d[0]; a >= 10; a /= 10)
        i++;
      if (s = e - i, s < 0)
        s += ie, o = e, u = d[f = 0], c = u / Pe(10, i - o - 1) % 10 | 0;
      else if (f = Math.ceil((s + 1) / ie), a = d.length, f >= a)
        if (r) {
          for (; a++ <= f; )
            d.push(0);
          u = c = 0, i = 1, s %= ie, o = s - ie + 1;
        } else
          break e;
      else {
        for (u = a = d[f], i = 1; a >= 10; a /= 10)
          i++;
        s %= ie, o = s - ie + i, c = o < 0 ? 0 : u / Pe(10, i - o - 1) % 10 | 0;
      }
      if (r = r || e < 0 || d[f + 1] !== void 0 || (o < 0 ? u : u % Pe(10, i - o - 1)), l = n < 4 ? (c || r) && (n == 0 || n == (t.s < 0 ? 3 : 2)) : c > 5 || c == 5 && (n == 4 || r || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (s > 0 ? o > 0 ? u / Pe(10, i - o) : 0 : d[f - 1]) % 10 & 1 || n == (t.s < 0 ? 8 : 7)), e < 1 || !d[0])
        return d.length = 0, l ? (e -= t.e + 1, d[0] = Pe(10, (ie - e % ie) % ie), t.e = -e || 0) : d[0] = t.e = 0, t;
      if (s == 0 ? (d.length = f, a = 1, f--) : (d.length = f + 1, a = Pe(10, ie - s), d[f] = o > 0 ? (u / Pe(10, i - o) % Pe(10, o) | 0) * a : 0), l)
        for (; ; )
          if (f == 0) {
            for (s = 1, o = d[0]; o >= 10; o /= 10)
              s++;
            for (o = d[0] += a, a = 1; o >= 10; o /= 10)
              a++;
            s != a && (t.e++, d[0] == vt && (d[0] = 1));
            break;
          } else {
            if (d[f] += a, d[f] != vt)
              break;
            d[f--] = 0, a = 1;
          }
      for (s = d.length; d[--s] === 0; )
        d.pop();
    }
  return ce && (t.e > h.maxE ? (t.d = null, t.e = NaN) : t.e < h.minE && (t.e = 0, t.d = [0])), t;
}
function _t(t, e, n) {
  if (!t.isFinite())
    return kd(t);
  var r, i = t.e, s = Ue(t.d), o = s.length;
  return e ? (n && (r = n - o) > 0 ? s = s.charAt(0) + "." + s.slice(1) + zt(r) : o > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (t.e < 0 ? "e" : "e+") + t.e) : i < 0 ? (s = "0." + zt(-i - 1) + s, n && (r = n - o) > 0 && (s += zt(r))) : i >= o ? (s += zt(i + 1 - o), n && (r = n - i - 1) > 0 && (s = s + "." + zt(r))) : ((r = i + 1) < o && (s = s.slice(0, r) + "." + s.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (s += "."), s += zt(r))), s;
}
function cs(t, e) {
  var n = t[0];
  for (e *= ie; n >= 10; n /= 10)
    e++;
  return e;
}
function Qi(t, e, n) {
  if (e > qx)
    throw ce = !0, n && (t.precision = n), Error(_d);
  return ne(new t(Gi), e, 1, !0);
}
function gt(t, e, n) {
  if (e > Co)
    throw Error(_d);
  return ne(new t(Yi), e, n, !0);
}
function Dd(t) {
  var e = t.length - 1, n = e * ie + 1;
  if (e = t[e], e) {
    for (; e % 10 == 0; e /= 10)
      n--;
    for (e = t[0]; e >= 10; e /= 10)
      n++;
  }
  return n;
}
function zt(t) {
  for (var e = ""; t--; )
    e += "0";
  return e;
}
function Rd(t, e, n, r) {
  var i, s = new t(1), o = Math.ceil(r / ie + 4);
  for (ce = !1; ; ) {
    if (n % 2 && (s = s.times(e), Mc(s.d, o) && (i = !0)), n = Ve(n / 2), n === 0) {
      n = s.d.length - 1, i && s.d[n] === 0 && ++s.d[n];
      break;
    }
    e = e.times(e), Mc(e.d, o);
  }
  return ce = !0, s;
}
function Ic(t) {
  return t.d[t.d.length - 1] & 1;
}
function Td(t, e, n) {
  for (var r, i = new t(e[0]), s = 0; ++s < e.length; )
    if (r = new t(e[s]), r.s)
      i[n](r) && (i = r);
    else {
      i = r;
      break;
    }
  return i;
}
function Do(t, e) {
  var n, r, i, s, o, a, c, l = 0, u = 0, d = 0, f = t.constructor, h = f.rounding, p = f.precision;
  if (!t.d || !t.d[0] || t.e > 17)
    return new f(t.d ? t.d[0] ? t.s < 0 ? 0 : 1 / 0 : 1 : t.s ? t.s < 0 ? 0 : t : 0 / 0);
  for (e == null ? (ce = !1, c = p) : c = e, a = new f(0.03125); t.e > -2; )
    t = t.times(a), d += 5;
  for (r = Math.log(Pe(2, d)) / Math.LN10 * 2 + 5 | 0, c += r, n = s = o = new f(1), f.precision = c; ; ) {
    if (s = ne(s.times(t), c, 1), n = n.times(++u), a = o.plus(Ee(s, n, c, 1)), Ue(a.d).slice(0, c) === Ue(o.d).slice(0, c)) {
      for (i = d; i--; )
        o = ne(o.times(o), c, 1);
      if (e == null)
        if (l < 3 && ar(o.d, c - r, h, l))
          f.precision = c += 10, n = s = a = new f(1), u = 0, l++;
        else
          return ne(o, f.precision = p, h, ce = !0);
      else
        return f.precision = p, o;
    }
    o = a;
  }
}
function Vt(t, e) {
  var n, r, i, s, o, a, c, l, u, d, f, h = 1, p = 10, v = t, b = v.d, m = v.constructor, x = m.rounding, g = m.precision;
  if (v.s < 0 || !b || !b[0] || !v.e && b[0] == 1 && b.length == 1)
    return new m(b && !b[0] ? -1 / 0 : v.s != 1 ? NaN : b ? 0 : v);
  if (e == null ? (ce = !1, u = g) : u = e, m.precision = u += p, n = Ue(b), r = n.charAt(0), Math.abs(s = v.e) < 15e14) {
    for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3; )
      v = v.times(t), n = Ue(v.d), r = n.charAt(0), h++;
    s = v.e, r > 1 ? (v = new m("0." + n), s++) : v = new m(r + "." + n.slice(1));
  } else
    return l = Qi(m, u + 2, g).times(s + ""), v = Vt(new m(r + "." + n.slice(1)), u - p).plus(l), m.precision = g, e == null ? ne(v, g, x, ce = !0) : v;
  for (d = v, c = o = v = Ee(v.minus(1), v.plus(1), u, 1), f = ne(v.times(v), u, 1), i = 3; ; ) {
    if (o = ne(o.times(f), u, 1), l = c.plus(Ee(o, new m(i), u, 1)), Ue(l.d).slice(0, u) === Ue(c.d).slice(0, u))
      if (c = c.times(2), s !== 0 && (c = c.plus(Qi(m, u + 2, g).times(s + ""))), c = Ee(c, new m(h), u, 1), e == null)
        if (ar(c.d, u - p, x, a))
          m.precision = u += p, l = o = v = Ee(d.minus(1), d.plus(1), u, 1), f = ne(v.times(v), u, 1), i = a = 1;
        else
          return ne(c, m.precision = g, x, ce = !0);
      else
        return m.precision = g, c;
    c = l, i += 2;
  }
}
function kd(t) {
  return String(t.s * t.s / 0);
}
function Ro(t, e) {
  var n, r, i;
  for ((n = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (r = e.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +e.slice(r + 1), e = e.substring(0, r)) : n < 0 && (n = e.length), r = 0; e.charCodeAt(r) === 48; r++)
    ;
  for (i = e.length; e.charCodeAt(i - 1) === 48; --i)
    ;
  if (e = e.slice(r, i), e) {
    if (i -= r, t.e = n = n - r - 1, t.d = [], r = (n + 1) % ie, n < 0 && (r += ie), r < i) {
      for (r && t.d.push(+e.slice(0, r)), i -= ie; r < i; )
        t.d.push(+e.slice(r, r += ie));
      e = e.slice(r), r = ie - e.length;
    } else
      r -= i;
    for (; r--; )
      e += "0";
    t.d.push(+e), ce && (t.e > t.constructor.maxE ? (t.d = null, t.e = NaN) : t.e < t.constructor.minE && (t.e = 0, t.d = [0]));
  } else
    t.e = 0, t.d = [0];
  return t;
}
function Yx(t, e) {
  var n, r, i, s, o, a, c, l, u;
  if (e.indexOf("_") > -1) {
    if (e = e.replace(/(\d)_(?=\d)/g, "$1"), Cd.test(e))
      return Ro(t, e);
  } else if (e === "Infinity" || e === "NaN")
    return +e || (t.s = NaN), t.e = NaN, t.d = null, t;
  if (jx.test(e))
    n = 16, e = e.toLowerCase();
  else if (Wx.test(e))
    n = 2;
  else if (Vx.test(e))
    n = 8;
  else
    throw Error(Yt + e);
  for (s = e.search(/p/i), s > 0 ? (c = +e.slice(s + 1), e = e.substring(2, s)) : e = e.slice(2), s = e.indexOf("."), o = s >= 0, r = t.constructor, o && (e = e.replace(".", ""), a = e.length, s = a - s, i = Rd(r, new r(n), s, s * 2)), l = $r(e, n, vt), u = l.length - 1, s = u; l[s] === 0; --s)
    l.pop();
  return s < 0 ? new r(t.s * 0) : (t.e = cs(l, u), t.d = l, ce = !1, o && (t = Ee(t, i, a * 4)), c && (t = t.times(Math.abs(c) < 54 ? Pe(2, c) : gr.pow(2, c))), ce = !0, t);
}
function Qx(t, e) {
  var n, r = e.d.length;
  if (r < 3)
    return e.isZero() ? e : Bn(t, 2, e, e);
  n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : n | 0, e = e.times(1 / us(5, n)), e = Bn(t, 2, e, e);
  for (var i, s = new t(5), o = new t(16), a = new t(20); n--; )
    i = e.times(e), e = e.times(s.plus(i.times(o.times(i).minus(a))));
  return e;
}
function Bn(t, e, n, r, i) {
  var s, o, a, c, l = t.precision, u = Math.ceil(l / ie);
  for (ce = !1, c = n.times(n), a = new t(r); ; ) {
    if (o = Ee(a.times(c), new t(e++ * e++), l, 1), a = i ? r.plus(o) : r.minus(o), r = Ee(o.times(c), new t(e++ * e++), l, 1), o = a.plus(r), o.d[u] !== void 0) {
      for (s = u; o.d[s] === a.d[s] && s--; )
        ;
      if (s == -1)
        break;
    }
    s = a, a = r, r = o, o = s;
  }
  return ce = !0, o.d.length = u + 1, o;
}
function us(t, e) {
  for (var n = t; --e; )
    n *= t;
  return n;
}
function Id(t, e) {
  var n, r = e.s < 0, i = gt(t, t.precision, 1), s = i.times(0.5);
  if (e = e.abs(), e.lte(s))
    return It = r ? 4 : 1, e;
  if (n = e.divToInt(i), n.isZero())
    It = r ? 3 : 2;
  else {
    if (e = e.minus(n.times(i)), e.lte(s))
      return It = Ic(n) ? r ? 2 : 3 : r ? 4 : 1, e;
    It = Ic(n) ? r ? 1 : 4 : r ? 3 : 2;
  }
  return e.minus(i).abs();
}
function xa(t, e, n, r) {
  var i, s, o, a, c, l, u, d, f, h = t.constructor, p = n !== void 0;
  if (p ? (Ke(n, 1, Zt), r === void 0 ? r = h.rounding : Ke(r, 0, 8)) : (n = h.precision, r = h.rounding), !t.isFinite())
    u = kd(t);
  else {
    for (u = _t(t), o = u.indexOf("."), p ? (i = 2, e == 16 ? n = n * 4 - 3 : e == 8 && (n = n * 3 - 2)) : i = e, o >= 0 && (u = u.replace(".", ""), f = new h(1), f.e = u.length - o, f.d = $r(_t(f), 10, i), f.e = f.d.length), d = $r(u, 10, i), s = c = d.length; d[--c] == 0; )
      d.pop();
    if (!d[0])
      u = p ? "0p+0" : "0";
    else {
      if (o < 0 ? s-- : (t = new h(t), t.d = d, t.e = s, t = Ee(t, f, n, r, 0, i), d = t.d, s = t.e, l = Ed), o = d[n], a = i / 2, l = l || d[n + 1] !== void 0, l = r < 4 ? (o !== void 0 || l) && (r === 0 || r === (t.s < 0 ? 3 : 2)) : o > a || o === a && (r === 4 || l || r === 6 && d[n - 1] & 1 || r === (t.s < 0 ? 8 : 7)), d.length = n, l)
        for (; ++d[--n] > i - 1; )
          d[n] = 0, n || (++s, d.unshift(1));
      for (c = d.length; !d[c - 1]; --c)
        ;
      for (o = 0, u = ""; o < c; o++)
        u += So.charAt(d[o]);
      if (p) {
        if (c > 1)
          if (e == 16 || e == 8) {
            for (o = e == 16 ? 4 : 3, --c; c % o; c++)
              u += "0";
            for (d = $r(u, i, e), c = d.length; !d[c - 1]; --c)
              ;
            for (o = 1, u = "1."; o < c; o++)
              u += So.charAt(d[o]);
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
function Mc(t, e) {
  if (t.length > e)
    return t.length = e, !0;
}
function Zx(t) {
  return new this(t).abs();
}
function Xx(t) {
  return new this(t).acos();
}
function Kx(t) {
  return new this(t).acosh();
}
function Jx(t, e) {
  return new this(t).plus(e);
}
function ew(t) {
  return new this(t).asin();
}
function tw(t) {
  return new this(t).asinh();
}
function nw(t) {
  return new this(t).atan();
}
function rw(t) {
  return new this(t).atanh();
}
function iw(t, e) {
  t = new this(t), e = new this(e);
  var n, r = this.precision, i = this.rounding, s = r + 4;
  return !t.s || !e.s ? n = new this(NaN) : !t.d && !e.d ? (n = gt(this, s, 1).times(e.s > 0 ? 0.25 : 0.75), n.s = t.s) : !e.d || t.isZero() ? (n = e.s < 0 ? gt(this, r, i) : new this(0), n.s = t.s) : !t.d || e.isZero() ? (n = gt(this, s, 1).times(0.5), n.s = t.s) : e.s < 0 ? (this.precision = s, this.rounding = 1, n = this.atan(Ee(t, e, s, 1)), e = gt(this, s, 1), this.precision = r, this.rounding = i, n = t.s < 0 ? n.minus(e) : n.plus(e)) : n = this.atan(Ee(t, e, s, 1)), n;
}
function sw(t) {
  return new this(t).cbrt();
}
function ow(t) {
  return ne(t = new this(t), t.e + 1, 2);
}
function aw(t, e, n) {
  return new this(t).clamp(e, n);
}
function lw(t) {
  if (!t || typeof t != "object")
    throw Error(ls + "Object expected");
  var e, n, r, i = t.defaults === !0, s = [
    "precision",
    1,
    Zt,
    "rounding",
    0,
    8,
    "toExpNeg",
    -An,
    0,
    "toExpPos",
    0,
    An,
    "maxE",
    0,
    An,
    "minE",
    -An,
    0,
    "modulo",
    0,
    9
  ];
  for (e = 0; e < s.length; e += 3)
    if (n = s[e], i && (this[n] = Ao[n]), (r = t[n]) !== void 0)
      if (Ve(r) === r && r >= s[e + 1] && r <= s[e + 2])
        this[n] = r;
      else
        throw Error(Yt + n + ": " + r);
  if (n = "crypto", i && (this[n] = Ao[n]), (r = t[n]) !== void 0)
    if (r === !0 || r === !1 || r === 0 || r === 1)
      if (r)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error(Sd);
      else
        this[n] = !1;
    else
      throw Error(Yt + n + ": " + r);
  return this;
}
function cw(t) {
  return new this(t).cos();
}
function uw(t) {
  return new this(t).cosh();
}
function Md(t) {
  var e, n, r;
  function i(s) {
    var o, a, c, l = this;
    if (!(l instanceof i))
      return new i(s);
    if (l.constructor = i, Nc(s)) {
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
      return Ro(l, s.toString());
    } else if (c !== "string")
      throw Error(Yt + s);
    return (a = s.charCodeAt(0)) === 45 ? (s = s.slice(1), l.s = -1) : (a === 43 && (s = s.slice(1)), l.s = 1), Cd.test(s) ? Ro(l, s) : Yx(l, s);
  }
  if (i.prototype = q, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = lw, i.clone = Md, i.isDecimal = Nc, i.abs = Zx, i.acos = Xx, i.acosh = Kx, i.add = Jx, i.asin = ew, i.asinh = tw, i.atan = nw, i.atanh = rw, i.atan2 = iw, i.cbrt = sw, i.ceil = ow, i.clamp = aw, i.cos = cw, i.cosh = uw, i.div = fw, i.exp = dw, i.floor = hw, i.hypot = pw, i.ln = gw, i.log = vw, i.log10 = bw, i.log2 = mw, i.max = yw, i.min = xw, i.mod = ww, i.mul = Ew, i.pow = _w, i.random = Sw, i.round = Aw, i.sign = Cw, i.sin = Dw, i.sinh = Rw, i.sqrt = Tw, i.sub = kw, i.sum = Iw, i.tan = Mw, i.tanh = Nw, i.trunc = Ow, t === void 0 && (t = {}), t && t.defaults !== !0)
    for (r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], e = 0; e < r.length; )
      t.hasOwnProperty(n = r[e++]) || (t[n] = this[n]);
  return i.config(t), i;
}
function fw(t, e) {
  return new this(t).div(e);
}
function dw(t) {
  return new this(t).exp();
}
function hw(t) {
  return ne(t = new this(t), t.e + 1, 3);
}
function pw() {
  var t, e, n = new this(0);
  for (ce = !1, t = 0; t < arguments.length; )
    if (e = new this(arguments[t++]), e.d)
      n.d && (n = n.plus(e.times(e)));
    else {
      if (e.s)
        return ce = !0, new this(1 / 0);
      n = e;
    }
  return ce = !0, n.sqrt();
}
function Nc(t) {
  return t instanceof gr || t && t.toStringTag === Ad || !1;
}
function gw(t) {
  return new this(t).ln();
}
function vw(t, e) {
  return new this(t).log(e);
}
function mw(t) {
  return new this(t).log(2);
}
function bw(t) {
  return new this(t).log(10);
}
function yw() {
  return Td(this, arguments, "lt");
}
function xw() {
  return Td(this, arguments, "gt");
}
function ww(t, e) {
  return new this(t).mod(e);
}
function Ew(t, e) {
  return new this(t).mul(e);
}
function _w(t, e) {
  return new this(t).pow(e);
}
function Sw(t) {
  var e, n, r, i, s = 0, o = new this(1), a = [];
  if (t === void 0 ? t = this.precision : Ke(t, 1, Zt), r = Math.ceil(t / ie), this.crypto)
    if (crypto.getRandomValues)
      for (e = crypto.getRandomValues(new Uint32Array(r)); s < r; )
        i = e[s], i >= 429e7 ? e[s] = crypto.getRandomValues(new Uint32Array(1))[0] : a[s++] = i % 1e7;
    else if (crypto.randomBytes) {
      for (e = crypto.randomBytes(r *= 4); s < r; )
        i = e[s] + (e[s + 1] << 8) + (e[s + 2] << 16) + ((e[s + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(e, s) : (a.push(i % 1e7), s += 4);
      s = r / 4;
    } else
      throw Error(Sd);
  else
    for (; s < r; )
      a[s++] = Math.random() * 1e7 | 0;
  for (r = a[--s], t %= ie, r && t && (i = Pe(10, ie - t), a[s] = (r / i | 0) * i); a[s] === 0; s--)
    a.pop();
  if (s < 0)
    n = 0, a = [0];
  else {
    for (n = -1; a[0] === 0; n -= ie)
      a.shift();
    for (r = 1, i = a[0]; i >= 10; i /= 10)
      r++;
    r < ie && (n -= ie - r);
  }
  return o.e = n, o.d = a, o;
}
function Aw(t) {
  return ne(t = new this(t), t.e + 1, this.rounding);
}
function Cw(t) {
  return t = new this(t), t.d ? t.d[0] ? t.s : 0 * t.s : t.s || NaN;
}
function Dw(t) {
  return new this(t).sin();
}
function Rw(t) {
  return new this(t).sinh();
}
function Tw(t) {
  return new this(t).sqrt();
}
function kw(t, e) {
  return new this(t).sub(e);
}
function Iw() {
  var t = 0, e = arguments, n = new this(e[t]);
  for (ce = !1; n.s && ++t < e.length; )
    n = n.plus(e[t]);
  return ce = !0, ne(n, this.precision, this.rounding);
}
function Mw(t) {
  return new this(t).tan();
}
function Nw(t) {
  return new this(t).tanh();
}
function Ow(t) {
  return ne(t = new this(t), t.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var gr = q.constructor = Md(Ao);
Gi = new gr(Gi);
Yi = new gr(Yi);
var Oc = {}, Bw = {
  get exports() {
    return Oc;
  },
  set exports(t) {
    Oc = t;
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
  })(ae, function() {
    var n = n || {}, r = document.querySelectorAll.bind(document), i = Object.prototype.toString, s = "ontouchstart" in window;
    function o(g) {
      return g !== null && g === g.window;
    }
    function a(g) {
      return o(g) ? g : g.nodeType === 9 && g.defaultView;
    }
    function c(g) {
      var y = typeof g;
      return y === "function" || y === "object" && !!g;
    }
    function l(g) {
      return c(g) && g.nodeType > 0;
    }
    function u(g) {
      var y = i.call(g);
      return y === "[object String]" ? r(g) : c(g) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(y) && g.hasOwnProperty("length") ? g : l(g) ? [g] : [];
    }
    function d(g) {
      var y, E, S = { top: 0, left: 0 }, _ = g && g.ownerDocument;
      return y = _.documentElement, typeof g.getBoundingClientRect < "u" && (S = g.getBoundingClientRect()), E = a(_), {
        top: S.top + E.pageYOffset - y.clientTop,
        left: S.left + E.pageXOffset - y.clientLeft
      };
    }
    function f(g) {
      var y = "";
      for (var E in g)
        g.hasOwnProperty(E) && (y += E + ":" + g[E] + ";");
      return y;
    }
    var h = {
      // Effect duration
      duration: 750,
      // Effect delay (check for scroll before showing effect)
      delay: 200,
      show: function(g, y, E) {
        if (g.button === 2)
          return !1;
        y = y || this;
        var S = document.createElement("div");
        S.className = "waves-ripple waves-rippling", y.appendChild(S);
        var _ = d(y), C = 0, N = 0;
        "touches" in g && g.touches.length ? (C = g.touches[0].pageY - _.top, N = g.touches[0].pageX - _.left) : (C = g.pageY - _.top, N = g.pageX - _.left), N = N >= 0 ? N : 0, C = C >= 0 ? C : 0;
        var D = "scale(" + y.clientWidth / 100 * 3 + ")", k = "translate(0,0)";
        E && (k = "translate(" + E.x + "px, " + E.y + "px)"), S.setAttribute("data-hold", Date.now()), S.setAttribute("data-x", N), S.setAttribute("data-y", C), S.setAttribute("data-scale", D), S.setAttribute("data-translate", k);
        var P = {
          top: C + "px",
          left: N + "px"
        };
        S.classList.add("waves-notransition"), S.setAttribute("style", f(P)), S.classList.remove("waves-notransition"), P["-webkit-transform"] = D + " " + k, P["-moz-transform"] = D + " " + k, P["-ms-transform"] = D + " " + k, P["-o-transform"] = D + " " + k, P.transform = D + " " + k, P.opacity = "1";
        var B = g.type === "mousemove" ? 2500 : h.duration;
        P["-webkit-transition-duration"] = B + "ms", P["-moz-transition-duration"] = B + "ms", P["-o-transition-duration"] = B + "ms", P["transition-duration"] = B + "ms", S.setAttribute("style", f(P));
      },
      hide: function(g, y) {
        y = y || this;
        for (var E = y.getElementsByClassName("waves-rippling"), S = 0, _ = E.length; S < _; S++)
          v(g, y, E[S]);
        s && (y.removeEventListener("touchend", h.hide), y.removeEventListener("touchcancel", h.hide)), y.removeEventListener("mouseup", h.hide), y.removeEventListener("mouseleave", h.hide);
      }
    }, p = {
      // Wrap <input> tag so it can perform the effect
      input: function(g) {
        var y = g.parentNode;
        if (!(y.tagName.toLowerCase() === "i" && y.classList.contains("waves-effect"))) {
          var E = document.createElement("i");
          E.className = g.className + " waves-input-wrapper", g.className = "waves-button-input", y.replaceChild(E, g), E.appendChild(g);
          var S = window.getComputedStyle(g, null), _ = S.color, C = S.backgroundColor;
          E.setAttribute("style", "color:" + _ + ";background:" + C), g.setAttribute("style", "background-color:rgba(0,0,0,0);");
        }
      },
      // Wrap <img> tag so it can perform the effect
      img: function(g) {
        var y = g.parentNode;
        if (!(y.tagName.toLowerCase() === "i" && y.classList.contains("waves-effect"))) {
          var E = document.createElement("i");
          y.replaceChild(E, g), E.appendChild(g);
        }
      }
    };
    function v(g, y, E) {
      if (E) {
        E.classList.remove("waves-rippling");
        var S = E.getAttribute("data-x"), _ = E.getAttribute("data-y"), C = E.getAttribute("data-scale"), N = E.getAttribute("data-translate"), D = Date.now() - Number(E.getAttribute("data-hold")), k = 350 - D;
        k < 0 && (k = 0), g.type === "mousemove" && (k = 150);
        var P = g.type === "mousemove" ? 2500 : h.duration;
        setTimeout(function() {
          var B = {
            top: _ + "px",
            left: S + "px",
            opacity: "0",
            // Duration
            "-webkit-transition-duration": P + "ms",
            "-moz-transition-duration": P + "ms",
            "-o-transition-duration": P + "ms",
            "transition-duration": P + "ms",
            "-webkit-transform": C + " " + N,
            "-moz-transform": C + " " + N,
            "-ms-transform": C + " " + N,
            "-o-transform": C + " " + N,
            transform: C + " " + N
          };
          E.setAttribute("style", f(B)), setTimeout(function() {
            try {
              y.removeChild(E);
            } catch {
              return !1;
            }
          }, P);
        }, k);
      }
    }
    var b = {
      /* uses an integer rather than bool so there's no issues with
       * needing to clear timeouts if another touch event occurred
       * within the 500ms. Cannot mouseup between touchstart and
       * touchend, nor in the 500ms after touchend. */
      touches: 0,
      allowEvent: function(g) {
        var y = !0;
        return /^(mousedown|mousemove)$/.test(g.type) && b.touches && (y = !1), y;
      },
      registerEvent: function(g) {
        var y = g.type;
        y === "touchstart" ? b.touches += 1 : /^(touchend|touchcancel)$/.test(y) && setTimeout(function() {
          b.touches && (b.touches -= 1);
        }, 500);
      }
    };
    function m(g) {
      if (b.allowEvent(g) === !1)
        return null;
      for (var y = null, E = g.target || g.srcElement; E.parentElement; ) {
        if (!(E instanceof SVGElement) && E.classList.contains("waves-effect")) {
          y = E;
          break;
        }
        E = E.parentElement;
      }
      return y;
    }
    function x(g) {
      var y = m(g);
      if (y !== null) {
        if (y.disabled || y.getAttribute("disabled") || y.classList.contains("disabled"))
          return;
        if (b.registerEvent(g), g.type === "touchstart" && h.delay) {
          var E = !1, S = setTimeout(function() {
            S = null, h.show(g, y);
          }, h.delay), _ = function(D) {
            S && (clearTimeout(S), S = null, h.show(g, y)), E || (E = !0, h.hide(D, y)), N();
          }, C = function(D) {
            S && (clearTimeout(S), S = null), _(D), N();
          };
          y.addEventListener("touchmove", C, !1), y.addEventListener("touchend", _, !1), y.addEventListener("touchcancel", _, !1);
          var N = function() {
            y.removeEventListener("touchmove", C), y.removeEventListener("touchend", _), y.removeEventListener("touchcancel", _);
          };
        } else
          h.show(g, y), s && (y.addEventListener("touchend", h.hide, !1), y.addEventListener("touchcancel", h.hide, !1)), y.addEventListener("mouseup", h.hide, !1), y.addEventListener("mouseleave", h.hide, !1);
      }
    }
    return n.init = function(g) {
      var y = document.body;
      g = g || {}, "duration" in g && (h.duration = g.duration), "delay" in g && (h.delay = g.delay), s && (y.addEventListener("touchstart", x, !1), y.addEventListener("touchcancel", b.registerEvent, !1), y.addEventListener("touchend", b.registerEvent, !1)), y.addEventListener("mousedown", x, !1);
    }, n.attach = function(g, y) {
      g = u(g), i.call(y) === "[object Array]" && (y = y.join(" ")), y = y ? " " + y : "";
      for (var E, S, _ = 0, C = g.length; _ < C; _++)
        E = g[_], S = E.tagName.toLowerCase(), ["input", "img"].indexOf(S) !== -1 && (p[S](E), E = E.parentElement), E.className.indexOf("waves-effect") === -1 && (E.className += " waves-effect" + y);
    }, n.ripple = function(g, y) {
      g = u(g);
      var E = g.length;
      if (y = y || {}, y.wait = y.wait || 0, y.position = y.position || null, E) {
        for (var S, _, C, N = {}, D = 0, k = {
          type: "mousedown",
          button: 1
        }, P = function(z, H) {
          return function() {
            h.hide(z, H);
          };
        }; D < E; D++)
          if (S = g[D], _ = y.position || {
            x: S.clientWidth / 2,
            y: S.clientHeight / 2
          }, C = d(S), N.x = C.left + _.x, N.y = C.top + _.y, k.pageX = N.x, k.pageY = N.y, h.show(k, S), y.wait >= 0 && y.wait !== null) {
            var B = {
              type: "mouseup",
              button: 1
            };
            setTimeout(P(B, S), y.wait);
          }
      }
    }, n.calm = function(g) {
      g = u(g);
      for (var y = {
        type: "mouseup",
        button: 1
      }, E = 0, S = g.length; E < S; E++)
        h.hide(y, g[E]);
    }, n.displayEffect = function(g) {
      console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), n.init(g);
    }, n;
  });
})(Bw);
const oe = { lunarInfo: [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560], solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"], Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"], Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"], solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"], sTermInfo: ["9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722"], nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"], nStr2: ["初", "十", "廿", "卅"], nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"], lunarFestival: [{ month: "正", day: "初一", name: "春节" }, { month: "正", day: "十五", name: "元宵节" }, { month: "二", day: "初二", name: "龙抬头" }, { month: "五", day: "初五", name: "端午节" }, { month: "七", day: "初七", name: "七夕节" }, { month: "七", day: "十五", name: "中元节" }, { month: "八", day: "十五", name: "中秋节" }, { month: "九", day: "初九", name: "重阳节" }, { month: "腊", day: "除夕", name: "除夕" }], solarFestival: [{ month: 1, day: 1, name: "元旦节" }, { month: 3, day: 8, name: "妇女节" }, { month: 3, day: 12, name: "植树节" }, { month: 4, day: 5, name: "清明节" }, { month: 5, day: 1, name: "劳动节" }, { month: 5, day: 4, name: "青年节" }, { month: 6, day: 1, name: "儿童节" }, { month: 7, day: 1, name: "建党节" }, { month: 8, day: 1, name: "建军节" }, { month: 9, day: 10, name: "教师节" }, { month: 10, day: 1, name: "国庆节" }], lYearDays: function(t) {
  var e, n = 348;
  for (e = 32768; e > 8; e >>= 1)
    n += oe.lunarInfo[t - 1900] & e ? 1 : 0;
  return n + oe.leapDays(t);
}, leapMonth: function(t) {
  return 15 & oe.lunarInfo[t - 1900];
}, leapDays: function(t) {
  return oe.leapMonth(t) ? 65536 & oe.lunarInfo[t - 1900] ? 30 : 29 : 0;
}, monthDays: function(t, e) {
  return e > 12 || e < 1 ? -1 : oe.lunarInfo[t - 1900] & 65536 >> e ? 30 : 29;
}, solarDays: function(t, e) {
  if (e > 12 || e < 1)
    return -1;
  var n = e - 1;
  return n == 1 ? t % 4 == 0 && t % 100 != 0 || t % 400 == 0 ? 29 : 28 : oe.solarMonth[n];
}, toGanZhiYear: function(t) {
  var e = (t - 3) % 10, n = (t - 3) % 12;
  return e == 0 && (e = 10), n == 0 && (n = 12), oe.Gan[e - 1] + oe.Zhi[n - 1];
}, toAstro: function(t, e) {
  return "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2 * t - (e < [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22][t - 1] ? 2 : 0), 2) + "座";
}, toGanZhi: function(t) {
  return oe.Gan[t % 10] + oe.Zhi[t % 12];
}, getTerm: function(t, e) {
  if (t < 1900 || t > 2100 || e < 1 || e > 24)
    return -1;
  var n = oe.sTermInfo[t - 1900], r = [parseInt("0x" + n.substr(0, 5)).toString(), parseInt("0x" + n.substr(5, 5)).toString(), parseInt("0x" + n.substr(10, 5)).toString(), parseInt("0x" + n.substr(15, 5)).toString(), parseInt("0x" + n.substr(20, 5)).toString(), parseInt("0x" + n.substr(25, 5)).toString()], i = [r[0].substr(0, 1), r[0].substr(1, 2), r[0].substr(3, 1), r[0].substr(4, 2), r[1].substr(0, 1), r[1].substr(1, 2), r[1].substr(3, 1), r[1].substr(4, 2), r[2].substr(0, 1), r[2].substr(1, 2), r[2].substr(3, 1), r[2].substr(4, 2), r[3].substr(0, 1), r[3].substr(1, 2), r[3].substr(3, 1), r[3].substr(4, 2), r[4].substr(0, 1), r[4].substr(1, 2), r[4].substr(3, 1), r[4].substr(4, 2), r[5].substr(0, 1), r[5].substr(1, 2), r[5].substr(3, 1), r[5].substr(4, 2)];
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
}, getFestival: (t, e, n, r) => {
  let i = null;
  const s = parseInt(t + "");
  return i = s ? oe.solarFestival.find((o) => o.month === s && o.day == e) : oe.lunarFestival.find((o) => `${o.month}月` === t && o.day === e), i;
}, solar2lunar: function(t, e, n) {
  if (t < 1900 || t > 2100 || t == 1900 && e == 1 && n < 31)
    return -1;
  if (t)
    r = new Date(t, parseInt(e + "") - 1, n);
  else
    var r = /* @__PURE__ */ new Date();
  var i, s = 0, o = (t = r.getFullYear(), e = r.getMonth() + 1, n = r.getDate(), (Date.UTC(r.getFullYear(), r.getMonth(), r.getDate()) - Date.UTC(1900, 0, 31)) / 864e5);
  for (i = 1900; i < 2101 && o > 0; i++)
    o -= s = oe.lYearDays(i);
  o < 0 && (o += s, i--);
  var a = /* @__PURE__ */ new Date(), c = !1;
  a.getFullYear() == t && a.getMonth() + 1 == e && a.getDate() == n && (c = !0);
  var l = r.getDay(), u = oe.nStr1[l];
  l == 0 && (l = 7);
  var d = i, f = oe.leapMonth(i), h = !1;
  for (i = 1; i < 13 && o > 0; i++)
    f > 0 && i == f + 1 && h == 0 ? (--i, h = !0, s = oe.leapDays(d)) : s = oe.monthDays(d, i), h == 1 && i == f + 1 && (h = !1), o -= s;
  o == 0 && f > 0 && i == f + 1 && (h ? h = !1 : (h = !0, --i)), o < 0 && (o += s, --i);
  var p = i, v = o + 1, b = e - 1, m = oe.toGanZhiYear(d), x = oe.getTerm(d, 2 * e - 1), g = oe.getTerm(d, 2 * e), y = oe.toGanZhi(12 * (t - 1900) + e + 11);
  n >= x && (y = oe.toGanZhi(12 * (t - 1900) + e + 12));
  var E = !1, S = null;
  x == n && (E = !0, S = oe.solarTerm[2 * e - 2]), g == n && (E = !0, S = oe.solarTerm[2 * e - 1]);
  var _ = Date.UTC(t, b, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, C = oe.toGanZhi(_ + n - 1), N = oe.toAstro(e, n);
  const D = oe.toChinaMonth(p), k = oe.toChinaDay(v);
  return { lYear: d, lMonth: p, lDay: v, Animal: oe.getAnimal(d), IMonthCn: (h ? "闰" : "") + D, IDayCn: k, cYear: t, cMonth: e, cDay: n, gzYear: m, gzMonth: y, gzDay: C, isToday: c, isLeap: h, nWeek: l, ncWeek: "星期" + u, isTerm: E, Term: S, astro: N, festcn: oe.getFestival(D, k, t, e), fest: oe.getFestival(e, n, t) };
}, lunar2solar: function(t, e, n, r = !0) {
  r = !!r;
  var i = oe.leapMonth(t);
  if (oe.leapDays(t), r && i != e || t == 2100 && e == 12 && n > 1 || t == 1900 && e == 1 && n < 31)
    return -1;
  var s = oe.monthDays(t, e), o = s;
  if (r && (o = oe.leapDays(t)), t < 1900 || t > 2100 || n > o)
    return -1;
  for (var a = 0, c = 1900; c < t; c++)
    a += oe.lYearDays(c);
  var l = 0, u = !1;
  for (c = 1; c < e; c++)
    l = oe.leapMonth(t), u || l <= c && l > 0 && (a += oe.leapDays(t), u = !0), a += oe.monthDays(t, c);
  r && (a += s);
  var d = Date.UTC(1900, 1, 30, 0, 0, 0), f = new Date(864e5 * (a + n - 31) + d), h = f.getUTCFullYear(), p = f.getUTCMonth() + 1, v = f.getUTCDate();
  return oe.solar2lunar(h, p, v);
} }, Pw = oe.lunar2solar, _n = (t, e = !0) => {
  t = t || /* @__PURE__ */ new Date();
  const n = new Date(t).getDay(), r = { 0: "日", 1: "一", 2: "二", 3: "三", 4: "四", 5: "五", 6: "六" }[n];
  return e ? [r, `星期${r}`, `周${r}`, n] : r;
}, Bc = ["number", "string"], Nd = (t, e) => (Bc.includes(typeof t) && Bc.includes(typeof e) || (t = (/* @__PURE__ */ new Date()).getFullYear(), e = (/* @__PURE__ */ new Date()).getMonth() + 1), new Date(t, e, 0).getDate()), Pc = (t) => {
  const e = [], n = Me(t).format("YYYY"), r = Me(t).format("MM"), i = Nd(Number.parseInt(n), Number.parseInt(r));
  let s = 1;
  for (; s <= i; ) {
    const o = `${r}-${("00" + s).substr(`${s}`.length)}`, a = `${n}-${o}`, c = _n(a);
    e.push({ date: a, datemon: o, dateday: Me(a).format("DD"), week: c[0], week1: c[1], week2: c[2], week3: c[3], isnow: !0 }), s++;
  }
  return e;
};
function Tt(t, e) {
  return Object.prototype.toString.call(t) === `[object ${e}]`;
}
function Hc(t) {
  return Object.prototype.toString.call(t);
}
const Ta = class {
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
    return e !== null && Tt(e, "Object");
  }
  static isEmpty(e) {
    return this.isArray(e) || this.isString(e) ? e.length === 0 : e instanceof Map || e instanceof Set ? e.size === 0 : !!this.isObject(e) && Object.keys(e).length === 0;
  }
  static isDate(e) {
    return Tt(e, "Date");
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
    return Tt(e, "Number");
  }
  static isPromise(e) {
    return Tt(e, "Promise") && this.isObject(e) && this.isFunction(e.then) && this.isFunction(e.catch);
  }
  static isString(e) {
    return Tt(e, "String");
  }
  static isFunction(e) {
    return typeof e == "function";
  }
  static isBoolean(e) {
    return Tt(e, "Boolean");
  }
  static isRegExp(e) {
    return Tt(e, "RegExp");
  }
  static isArray(e) {
    return e && Array.isArray(e);
  }
  static isWindow(e) {
    return typeof window < "u" && Tt(e, "Window");
  }
  static isElement(e) {
    return this.isObject(e) && !!e.tagName;
  }
  static isMap(e) {
    return Tt(e, "Map");
  }
  static isUrl(e) {
    return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(e);
  }
};
let Mt = Ta;
Ds(Mt, "isServer", typeof window > "u"), Ds(Mt, "isClient", !Ta.isServer);
var ot = Object.freeze({ __proto__: null, toDateTime: function(t, e = "YYYY-MM-DD HH:mm:ss") {
  return Me(t).format(e);
}, toDate: function(t, e = "YYYY-MM-DD") {
  return Me(t).format(e);
}, toY: function(t, e = "YYYY") {
  return Me(t).format(e);
}, toYM: function(t, e = "YYYY-MM") {
  return Me(t).format(e);
}, toMD: function(t, e = "MM-DD") {
  return Me(t).format(e);
}, toYMD: function(t, e = "YYYY-MM-DD") {
  return Me(t).format(e);
}, toYMDHM: function(t, e = "YYYY-MM-DD HH:mm") {
  return Me(t).format(e);
}, convertDate: oe, dayDetail: Pw, formatWeek: _n, getWeek: (t) => {
  t = t || /* @__PURE__ */ new Date();
  const e = [], n = new Date(t).getDay() || 7, r = new Date(t).getTime();
  let i = 1, s = 1;
  for (; n >= i; ) {
    let o = r - 864e5 * (n - i);
    const a = _n(o);
    e.push({ date: Me(o).format("YYYY-MM-DD"), datemon: Me(o).format("MM-DD"), week: a[0], week1: a[1], week2: a[2], week3: a[3] }), i++;
  }
  for (; s <= 7 - n; ) {
    let o = r + 864e5 * s;
    const a = _n(o);
    e.push({ date: Me(o).format("YYYY-MM-DD"), datemon: Me(o).format("MM-DD"), week: a[0], week1: a[1], week2: a[2], week3: a[3] }), s++;
  }
  return e;
}, getMonth: Pc, getMonthComple: (t) => {
  const e = Pc(t), n = e[0].week3;
  let r = 1;
  for (; r < n; ) {
    const s = new Date(e[0].date).getTime() - 864e5, o = _n(s);
    e.unshift({ date: Me(s).format("YYYY-MM-DD"), datemon: Me(s).format("MM-DD"), dateday: Me(s).format("DD"), week: o[0], week1: o[1], week2: o[2], week3: o[3], isback: !0 }), r++;
  }
  let i = e.length;
  for (; i < 42; ) {
    const s = new Date(e[i - 1].date).getTime() + 864e5, o = _n(s);
    e.push({ date: Me(s).format("YYYY-MM-DD"), datemon: Me(s).format("MM-DD"), dateday: Me(s).format("DD"), week: o[0], week1: o[1], week2: o[2], week3: o[3], isnext: !0 }), i++;
  }
  return e.forEach((s) => {
    const o = s.date.split("-"), a = oe.solar2lunar(o[0], o[1], o[2]);
    s.nl = a, typeof a != "number" && (s.monthcn = a.IMonthCn, s.daycn = a.IDayCn);
  }), e;
}, getMonthDay: Nd, daysBetweenDates: (t, e) => {
  if (Mt.isNullOrUnDef(t) || Mt.isNullOrUnDef(e))
    throw new TypeError("params must both be not empty or null or undefined");
  let n = null;
  return n = Mt.isDate(t) && Mt.isDate(e) ? Math.abs(t.getTime() - e.getTime()) : Math.abs(new Date(t).getTime() - new Date(e).getTime()), Math.floor(n / 864e5);
} });
function qr(t) {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-f]{6})$/.test(t);
}
function $s(t) {
  let e = t.toLowerCase();
  if (qr(t)) {
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
function qs(t, e) {
  const n = parseInt(t, 16) + e, r = n > 255 ? 255 : n;
  return r.toString(16).length > 1 ? r.toString(16) : `0${r.toString(16)}`;
}
function Lc(t, e, n) {
  const r = [t, e, n].map((i) => (i /= 255) <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
  return 0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2];
}
function Gs(t, e) {
  const n = parseInt(t, 16) - e, r = n < 0 ? 0 : n;
  return r.toString(16).length > 1 ? r.toString(16) : `0${r.toString(16)}`;
}
var Fc = Object.freeze({ __proto__: null, isHexColor: qr, rgbToHex: function(t, e, n) {
  const r = (t << 16 | e << 8 | n).toString(16);
  return "#" + new Array(Math.abs(r.length - 7)).join("0") + r;
}, hexToRGB: $s, hexToRGBA: function(t, e) {
  let n = t.toLowerCase();
  if (qr(t)) {
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
  if (!qr(t))
    return;
  const [e, n, r] = $s(t).replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",").map((i) => Number(i));
  return 0.299 * e + 0.578 * n + 0.114 * r < 192;
}, darken: function(t, e) {
  return t = t.indexOf("#") >= 0 ? t.substring(1, t.length) : t, e = Math.trunc(255 * e / 100), `#${Gs(t.substring(0, 2), e)}${Gs(t.substring(2, 4), e)}${Gs(t.substring(4, 6), e)}`;
}, lighten: function(t, e) {
  return t = t.indexOf("#") >= 0 ? t.substring(1, t.length) : t, e = Math.trunc(255 * e / 100), `#${qs(t.substring(0, 2), e)}${qs(t.substring(2, 4), e)}${qs(t.substring(4, 6), e)}`;
}, calculateBestTextColor: function(t) {
  const e = $s(t.substring(1));
  var n, r;
  return n = e.split(","), r = [0, 0, 0], (Lc(~~n[0], ~~n[1], ~~n[2]) + 0.05) / (Lc(r[0], r[1], r[2]) + 0.05) >= 12 ? "#000000" : "#FFFFFF";
} });
for (let t = 0; t <= 15; t++)
  t.toString(16);
let Hw = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof globalThis == "object" && globalThis.globalThis === globalThis ? globalThis : void 0;
Hw.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && /Safari/.test(navigator.userAgent);
var Ys = { local: { has: (t) => Object.prototype.hasOwnProperty.call(localStorage, t), setItem: (t, e, n = 0) => {
  const r = (/* @__PURE__ */ new Date()).getTime(), i = Mt.isDate(n) ? r + 1e3 * n : 0;
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
} }, forage: ex, cookie: sd };
window.socketMap = /* @__PURE__ */ new Map();
gr.set({ precision: 14 });
const Lw = { class: "ik-full-calendar" }, Fw = ["onClick"], zw = {
  key: 0,
  class: "event-title allday"
}, Uw = {
  key: 0,
  class: "event-title-time"
}, Ww = {
  key: 1,
  class: "event-title no-allday"
}, jw = { class: "event-title-time" }, Vw = { class: "event-title-text" }, $w = {
  name: "IkFullCalendar"
}, qw = /* @__PURE__ */ Pn({
  ...$w,
  props: {
    options: { default: {} },
    removable: { type: Boolean, default: !0 },
    modelValue: { default: [] },
    tooltipFieldName: { default: "remark" }
  },
  emits: ["added", "deleted", "update:modelValue", "eventClick", "deleteClick", "dateSelect"],
  setup(t, { expose: e, emit: n }) {
    const r = t, i = ft({
      get: () => r.modelValue,
      set: (m) => n("update:modelValue", m)
    }), s = Kn(null), o = (m) => {
    }, a = Kn("dayGridMonth"), c = (m) => {
      n("dateSelect", m);
    }, l = (m) => {
      n("eventClick", m);
    }, u = (m) => {
      n("deleteClick", m);
    }, d = () => ({
      locale: Vm,
      plugins: [gb, E1, e1],
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
      ...r.options,
      events: i.value
    }), f = Xs({
      timeType: "month",
      options: d()
    }), h = Kn(null), p = () => {
      var m;
      f.options = d(), (m = s.value) == null || m.buildOptions(f.options);
    };
    e({
      ...{
        // 
        prev: () => {
          var m;
          (m = h.value) == null || m.prev();
        },
        next: () => {
          var m;
          (m = h.value) == null || m.next();
        },
        today: () => {
          var m;
          (m = h.value) == null || m.today();
        },
        changeView: (m) => {
          var x;
          (x = h.value) == null || x.changeView(m), a.value = m;
        },
        getDate: () => {
          var m;
          return (m = h.value) == null ? void 0 : m.getDate();
        },
        getView: () => {
          var m;
          return (m = h.value) == null ? void 0 : m.view;
        },
        unselect: () => {
          var m;
          return (m = h.value) == null ? void 0 : m.unselect();
        }
      }
    }), x0(() => i.value, () => {
      p();
    });
    const b = () => {
      var m;
      h.value = (m = s.value) == null ? void 0 : m.getApi();
    };
    return nu(() => {
      b();
    }), (m, x) => {
      const g = ze("el-tooltip"), y = ze("el-icon");
      return pe(), ke("div", Lw, [
        ue(Be(Lm), {
          ref_key: "_ref",
          ref: s,
          options: f.options,
          style: { height: "100%" }
        }, {
          eventContent: fe((E) => [
            Ne("div", {
              class: "title-line",
              onClick: (S) => l(E)
            }, [
              ue(g, null, {
                content: fe(() => {
                  var S, _;
                  return [
                    at(ht((_ = (S = E.event) == null ? void 0 : S.extendedProps) == null ? void 0 : _[r.tooltipFieldName]), 1)
                  ];
                }),
                default: fe(() => [
                  E.event.allDay ? (pe(), ke("span", zw, [
                    a.value === "dayGridMonth" ? (pe(), ke("span", Uw, ht("(全天)"))) : rr("", !0),
                    Ne("span", null, ht(E.event.title), 1)
                  ])) : (pe(), ke("span", Ww, [
                    Ne("span", jw, ht(Be(ot).toDateTime(E.event.startStr, "HH:mm")), 1),
                    Ne("span", Vw, ht(E.event.title), 1)
                  ]))
                ]),
                _: 2
              }, 1024),
              r.removable ? (pe(), Qe(y, {
                key: 0,
                size: 16,
                onClick: w0((S) => u(E), ["stop"])
              }, {
                default: fe(() => [
                  ue(Be(C0))
                ]),
                _: 2
              }, 1032, ["onClick"])) : rr("", !0)
            ], 8, Fw)
          ]),
          _: 1
        }, 8, ["options"])
      ]);
    };
  }
});
const wa = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, i] of e)
    n[r] = i;
  return n;
}, Gw = /* @__PURE__ */ wa(qw, [["__scopeId", "data-v-421b620c"]]), Yw = Po(Gw), nr = /^[a-z0-9]+(-[a-z0-9]+)*$/, fs = (t, e, n, r = "") => {
  const i = t.split(":");
  if (t.slice(0, 1) === "@") {
    if (i.length < 2 || i.length > 3)
      return null;
    r = i.shift().slice(1);
  }
  if (i.length > 3 || !i.length)
    return null;
  if (i.length > 1) {
    const a = i.pop(), c = i.pop(), l = {
      // Allow provider without '@': "provider:prefix:name"
      provider: i.length > 0 ? i[0] : r,
      prefix: c,
      name: a
    };
    return e && !Gr(l) ? null : l;
  }
  const s = i[0], o = s.split("-");
  if (o.length > 1) {
    const a = {
      provider: r,
      prefix: o.shift(),
      name: o.join("-")
    };
    return e && !Gr(a) ? null : a;
  }
  if (n && r === "") {
    const a = {
      provider: r,
      prefix: "",
      name: s
    };
    return e && !Gr(a, n) ? null : a;
  }
  return null;
}, Gr = (t, e) => t ? !!((t.provider === "" || t.provider.match(nr)) && (e && t.prefix === "" || t.prefix.match(nr)) && t.name.match(nr)) : !1, Od = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Zi = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), ds = Object.freeze({
  ...Od,
  ...Zi
}), To = Object.freeze({
  ...ds,
  body: "",
  hidden: !1
});
function Qw(t, e) {
  const n = {};
  !t.hFlip != !e.hFlip && (n.hFlip = !0), !t.vFlip != !e.vFlip && (n.vFlip = !0);
  const r = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function zc(t, e) {
  const n = Qw(t, e);
  for (const r in To)
    r in Zi ? r in t && !(r in n) && (n[r] = Zi[r]) : r in e ? n[r] = e[r] : r in t && (n[r] = t[r]);
  return n;
}
function Zw(t, e) {
  const n = t.icons, r = t.aliases || /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  function s(o) {
    if (n[o])
      return i[o] = [];
    if (!(o in i)) {
      i[o] = null;
      const a = r[o] && r[o].parent, c = a && s(a);
      c && (i[o] = [a].concat(c));
    }
    return i[o];
  }
  return (e || Object.keys(n).concat(Object.keys(r))).forEach(s), i;
}
function Xw(t, e, n) {
  const r = t.icons, i = t.aliases || /* @__PURE__ */ Object.create(null);
  let s = {};
  function o(a) {
    s = zc(
      r[a] || i[a],
      s
    );
  }
  return o(e), n.forEach(o), zc(t, s);
}
function Bd(t, e) {
  const n = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return n;
  t.not_found instanceof Array && t.not_found.forEach((i) => {
    e(i, null), n.push(i);
  });
  const r = Zw(t);
  for (const i in r) {
    const s = r[i];
    s && (e(i, Xw(t, i, s)), n.push(i));
  }
  return n;
}
const Kw = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Od
};
function Qs(t, e) {
  for (const n in e)
    if (n in t && typeof t[n] != typeof e[n])
      return !1;
  return !0;
}
function Pd(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !Qs(t, Kw))
    return null;
  const n = e.icons;
  for (const i in n) {
    const s = n[i];
    if (!i.match(nr) || typeof s.body != "string" || !Qs(
      s,
      To
    ))
      return null;
  }
  const r = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const i in r) {
    const s = r[i], o = s.parent;
    if (!i.match(nr) || typeof o != "string" || !n[o] && !r[o] || !Qs(
      s,
      To
    ))
      return null;
  }
  return e;
}
const Uc = /* @__PURE__ */ Object.create(null);
function Jw(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function fn(t, e) {
  const n = Uc[t] || (Uc[t] = /* @__PURE__ */ Object.create(null));
  return n[e] || (n[e] = Jw(t, e));
}
function Ea(t, e) {
  return Pd(e) ? Bd(e, (n, r) => {
    r ? t.icons[n] = r : t.missing.add(n);
  }) : [];
}
function eE(t, e, n) {
  try {
    if (typeof n.body == "string")
      return t.icons[e] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let lr = !1;
function Hd(t) {
  return typeof t == "boolean" && (lr = t), lr;
}
function tE(t) {
  const e = typeof t == "string" ? fs(t, !0, lr) : t;
  if (e) {
    const n = fn(e.provider, e.prefix), r = e.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function nE(t, e) {
  const n = fs(t, !0, lr);
  if (!n)
    return !1;
  const r = fn(n.provider, n.prefix);
  return eE(r, n.name, e);
}
function rE(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), lr && !e && !t.prefix) {
    let i = !1;
    return Pd(t) && (t.prefix = "", Bd(t, (s, o) => {
      o && nE(s, o) && (i = !0);
    })), i;
  }
  const n = t.prefix;
  if (!Gr({
    provider: e,
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = fn(e, n);
  return !!Ea(r, t);
}
const Ld = Object.freeze({
  width: null,
  height: null
}), Fd = Object.freeze({
  // Dimensions
  ...Ld,
  // Transformations
  ...Zi
}), iE = /(-?[0-9.]*[0-9]+[0-9.]*)/g, sE = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Wc(t, e, n) {
  if (e === 1)
    return t;
  if (n = n || 100, typeof t == "number")
    return Math.ceil(t * e * n) / n;
  if (typeof t != "string")
    return t;
  const r = t.split(iE);
  if (r === null || !r.length)
    return t;
  const i = [];
  let s = r.shift(), o = sE.test(s);
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
const oE = (t) => t === "unset" || t === "undefined" || t === "none";
function aE(t, e) {
  const n = {
    ...ds,
    ...t
  }, r = {
    ...Fd,
    ...e
  }, i = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let s = n.body;
  [n, r].forEach((p) => {
    const v = [], b = p.hFlip, m = p.vFlip;
    let x = p.rotate;
    b ? m ? x += 2 : (v.push(
      "translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"
    ), v.push("scale(-1 1)"), i.top = i.left = 0) : m && (v.push(
      "translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"
    ), v.push("scale(1 -1)"), i.top = i.left = 0);
    let g;
    switch (x < 0 && (x -= Math.floor(x / 4) * 4), x = x % 4, x) {
      case 1:
        g = i.height / 2 + i.top, v.unshift(
          "rotate(90 " + g.toString() + " " + g.toString() + ")"
        );
        break;
      case 2:
        v.unshift(
          "rotate(180 " + (i.width / 2 + i.left).toString() + " " + (i.height / 2 + i.top).toString() + ")"
        );
        break;
      case 3:
        g = i.width / 2 + i.left, v.unshift(
          "rotate(-90 " + g.toString() + " " + g.toString() + ")"
        );
        break;
    }
    x % 2 === 1 && (i.left !== i.top && (g = i.left, i.left = i.top, i.top = g), i.width !== i.height && (g = i.width, i.width = i.height, i.height = g)), v.length && (s = '<g transform="' + v.join(" ") + '">' + s + "</g>");
  });
  const o = r.width, a = r.height, c = i.width, l = i.height;
  let u, d;
  o === null ? (d = a === null ? "1em" : a === "auto" ? l : a, u = Wc(d, c / l)) : (u = o === "auto" ? c : o, d = a === null ? Wc(u, l / c) : a === "auto" ? l : a);
  const f = {}, h = (p, v) => {
    oE(v) || (f[p] = v.toString());
  };
  return h("width", u), h("height", d), f.viewBox = i.left.toString() + " " + i.top.toString() + " " + c.toString() + " " + l.toString(), {
    attributes: f,
    body: s
  };
}
const lE = /\sid="(\S+)"/g, cE = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let uE = 0;
function fE(t, e = cE) {
  const n = [];
  let r;
  for (; r = lE.exec(t); )
    n.push(r[1]);
  if (!n.length)
    return t;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((s) => {
    const o = typeof e == "function" ? e(s) : e + (uE++).toString(), a = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"),
      "$1" + o + i + "$3"
    );
  }), t = t.replace(new RegExp(i, "g"), ""), t;
}
const ko = /* @__PURE__ */ Object.create(null);
function dE(t, e) {
  ko[t] = e;
}
function Io(t) {
  return ko[t] || ko[""];
}
function _a(t) {
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
const Sa = /* @__PURE__ */ Object.create(null), Qn = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Yr = [];
for (; Qn.length > 0; )
  Qn.length === 1 || Math.random() > 0.5 ? Yr.push(Qn.shift()) : Yr.push(Qn.pop());
Sa[""] = _a({
  resources: ["https://api.iconify.design"].concat(Yr)
});
function hE(t, e) {
  const n = _a(e);
  return n === null ? !1 : (Sa[t] = n, !0);
}
function Aa(t) {
  return Sa[t];
}
const pE = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let jc = pE();
function gE(t, e) {
  const n = Aa(t);
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
function vE(t) {
  return t === 404;
}
const mE = (t, e, n) => {
  const r = [], i = gE(t, e), s = "icons";
  let o = {
    type: s,
    provider: t,
    prefix: e,
    icons: []
  }, a = 0;
  return n.forEach((c, l) => {
    a += c.length + 1, a >= i && l > 0 && (r.push(o), o = {
      type: s,
      provider: t,
      prefix: e,
      icons: []
    }, a = c.length), o.icons.push(c);
  }), r.push(o), r;
};
function bE(t) {
  if (typeof t == "string") {
    const e = Aa(t);
    if (e)
      return e.path;
  }
  return "/";
}
const yE = (t, e, n) => {
  if (!jc) {
    n("abort", 424);
    return;
  }
  let r = bE(e.provider);
  switch (e.type) {
    case "icons": {
      const s = e.prefix, a = e.icons.join(","), c = new URLSearchParams({
        icons: a
      });
      r += s + ".json?" + c.toString();
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
  jc(t + r).then((s) => {
    const o = s.status;
    if (o !== 200) {
      setTimeout(() => {
        n(vE(o) ? "abort" : "next", o);
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
}, xE = {
  prepare: mE,
  send: yE
};
function wE(t) {
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
    const s = i.provider, o = i.prefix, a = i.name, c = n[s] || (n[s] = /* @__PURE__ */ Object.create(null)), l = c[o] || (c[o] = fn(s, o));
    let u;
    a in l.icons ? u = e.loaded : o === "" || l.missing.has(a) ? u = e.missing : u = e.pending;
    const d = {
      provider: s,
      prefix: o,
      name: a
    };
    u.push(d);
  }), e;
}
function zd(t, e) {
  t.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((i) => i.id !== e));
  });
}
function EE(t) {
  t.pendingCallbacksFlag || (t.pendingCallbacksFlag = !0, setTimeout(() => {
    t.pendingCallbacksFlag = !1;
    const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
    if (!e.length)
      return;
    let n = !1;
    const r = t.provider, i = t.prefix;
    e.forEach((s) => {
      const o = s.icons, a = o.pending.length;
      o.pending = o.pending.filter((c) => {
        if (c.prefix !== i)
          return !0;
        const l = c.name;
        if (t.icons[l])
          o.loaded.push({
            provider: r,
            prefix: i,
            name: l
          });
        else if (t.missing.has(l))
          o.missing.push({
            provider: r,
            prefix: i,
            name: l
          });
        else
          return n = !0, !0;
        return !1;
      }), o.pending.length !== a && (n || zd([t], s.id), s.callback(
        o.loaded.slice(0),
        o.missing.slice(0),
        o.pending.slice(0),
        s.abort
      ));
    });
  }));
}
let _E = 0;
function SE(t, e, n) {
  const r = _E++, i = zd.bind(null, n, r);
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
function AE(t, e = !0, n = !1) {
  const r = [];
  return t.forEach((i) => {
    const s = typeof i == "string" ? fs(i, e, n) : i;
    s && r.push(s);
  }), r;
}
var CE = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function DE(t, e, n, r) {
  const i = t.resources.length, s = t.random ? Math.floor(Math.random() * i) : t.index;
  let o;
  if (t.random) {
    let S = t.resources.slice(0);
    for (o = []; S.length > 1; ) {
      const _ = Math.floor(Math.random() * S.length);
      o.push(S[_]), S = S.slice(0, _).concat(S.slice(_ + 1));
    }
    o = o.concat(S);
  } else
    o = t.resources.slice(s).concat(t.resources.slice(0, s));
  const a = Date.now();
  let c = "pending", l = 0, u, d = null, f = [], h = [];
  typeof r == "function" && h.push(r);
  function p() {
    d && (clearTimeout(d), d = null);
  }
  function v() {
    c === "pending" && (c = "aborted"), p(), f.forEach((S) => {
      S.status === "pending" && (S.status = "aborted");
    }), f = [];
  }
  function b(S, _) {
    _ && (h = []), typeof S == "function" && h.push(S);
  }
  function m() {
    return {
      startTime: a,
      payload: e,
      status: c,
      queriesSent: l,
      queriesPending: f.length,
      subscribe: b,
      abort: v
    };
  }
  function x() {
    c = "failed", h.forEach((S) => {
      S(void 0, u);
    });
  }
  function g() {
    f.forEach((S) => {
      S.status === "pending" && (S.status = "aborted");
    }), f = [];
  }
  function y(S, _, C) {
    const N = _ !== "success";
    switch (f = f.filter((D) => D !== S), c) {
      case "pending":
        break;
      case "failed":
        if (N || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (_ === "abort") {
      u = C, x();
      return;
    }
    if (N) {
      u = C, f.length || (o.length ? E() : x());
      return;
    }
    if (p(), g(), !t.random) {
      const D = t.resources.indexOf(S.resource);
      D !== -1 && D !== t.index && (t.index = D);
    }
    c = "completed", h.forEach((D) => {
      D(C);
    });
  }
  function E() {
    if (c !== "pending")
      return;
    p();
    const S = o.shift();
    if (S === void 0) {
      if (f.length) {
        d = setTimeout(() => {
          p(), c === "pending" && (g(), x());
        }, t.timeout);
        return;
      }
      x();
      return;
    }
    const _ = {
      status: "pending",
      resource: S,
      callback: (C, N) => {
        y(_, C, N);
      }
    };
    f.push(_), l++, d = setTimeout(E, t.rotate), n(S, e, _.callback);
  }
  return setTimeout(E), m;
}
function Ud(t) {
  const e = {
    ...CE,
    ...t
  };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === "pending");
  }
  function i(a, c, l) {
    const u = DE(
      e,
      a,
      c,
      (d, f) => {
        r(), l && l(d, f);
      }
    );
    return n.push(u), u;
  }
  function s(a) {
    return n.find((c) => a(c)) || null;
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
function Vc() {
}
const Zs = /* @__PURE__ */ Object.create(null);
function RE(t) {
  if (!Zs[t]) {
    const e = Aa(t);
    if (!e)
      return;
    const n = Ud(e), r = {
      config: e,
      redundancy: n
    };
    Zs[t] = r;
  }
  return Zs[t];
}
function TE(t, e, n) {
  let r, i;
  if (typeof t == "string") {
    const s = Io(t);
    if (!s)
      return n(void 0, 424), Vc;
    i = s.send;
    const o = RE(t);
    o && (r = o.redundancy);
  } else {
    const s = _a(t);
    if (s) {
      r = Ud(s);
      const o = t.resources ? t.resources[0] : "", a = Io(o);
      a && (i = a.send);
    }
  }
  return !r || !i ? (n(void 0, 424), Vc) : r.query(e, i, n)().abort;
}
const $c = "iconify2", cr = "iconify", Wd = cr + "-count", qc = cr + "-version", jd = 36e5, kE = 168;
function Mo(t, e) {
  try {
    return t.getItem(e);
  } catch {
  }
}
function Ca(t, e, n) {
  try {
    return t.setItem(e, n), !0;
  } catch {
  }
}
function Gc(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function No(t, e) {
  return Ca(t, Wd, e.toString());
}
function Oo(t) {
  return parseInt(Mo(t, Wd)) || 0;
}
const hs = {
  local: !0,
  session: !0
}, Vd = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Da = !1;
function IE(t) {
  Da = t;
}
let Pr = typeof window > "u" ? {} : window;
function $d(t) {
  const e = t + "Storage";
  try {
    if (Pr && Pr[e] && typeof Pr[e].length == "number")
      return Pr[e];
  } catch {
  }
  hs[t] = !1;
}
function qd(t, e) {
  const n = $d(t);
  if (!n)
    return;
  const r = Mo(n, qc);
  if (r !== $c) {
    if (r) {
      const a = Oo(n);
      for (let c = 0; c < a; c++)
        Gc(n, cr + c.toString());
    }
    Ca(n, qc, $c), No(n, 0);
    return;
  }
  const i = Math.floor(Date.now() / jd) - kE, s = (a) => {
    const c = cr + a.toString(), l = Mo(n, c);
    if (typeof l == "string") {
      try {
        const u = JSON.parse(l);
        if (typeof u == "object" && typeof u.cached == "number" && u.cached > i && typeof u.provider == "string" && typeof u.data == "object" && typeof u.data.prefix == "string" && // Valid item: run callback
        e(u, a))
          return !0;
      } catch {
      }
      Gc(n, c);
    }
  };
  let o = Oo(n);
  for (let a = o - 1; a >= 0; a--)
    s(a) || (a === o - 1 ? (o--, No(n, o)) : Vd[t].add(a));
}
function Gd() {
  if (!Da) {
    IE(!0);
    for (const t in hs)
      qd(t, (e) => {
        const n = e.data, r = e.provider, i = n.prefix, s = fn(
          r,
          i
        );
        if (!Ea(s, n).length)
          return !1;
        const o = n.lastModified || -1;
        return s.lastModifiedCached = s.lastModifiedCached ? Math.min(s.lastModifiedCached, o) : o, !0;
      });
  }
}
function ME(t, e) {
  const n = t.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= e
  )
    return n === e;
  if (t.lastModifiedCached = e, n)
    for (const r in hs)
      qd(r, (i) => {
        const s = i.data;
        return i.provider !== t.provider || s.prefix !== t.prefix || s.lastModified === e;
      });
  return !0;
}
function NE(t, e) {
  Da || Gd();
  function n(r) {
    let i;
    if (!hs[r] || !(i = $d(r)))
      return;
    const s = Vd[r];
    let o;
    if (s.size)
      s.delete(o = Array.from(s).shift());
    else if (o = Oo(i), !No(i, o + 1))
      return;
    const a = {
      cached: Math.floor(Date.now() / jd),
      provider: t.provider,
      data: e
    };
    return Ca(
      i,
      cr + o.toString(),
      JSON.stringify(a)
    );
  }
  e.lastModified && !ME(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), n("local") || n("session"));
}
function Yc() {
}
function OE(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, EE(t);
  }));
}
function BE(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = t, i = t.iconsToLoad;
    delete t.iconsToLoad;
    let s;
    if (!i || !(s = Io(n)))
      return;
    s.prepare(n, r, i).forEach((a) => {
      TE(n, a, (c) => {
        if (typeof c != "object")
          a.icons.forEach((l) => {
            t.missing.add(l);
          });
        else
          try {
            const l = Ea(
              t,
              c
            );
            if (!l.length)
              return;
            const u = t.pendingIcons;
            u && l.forEach((d) => {
              u.delete(d);
            }), NE(t, c);
          } catch (l) {
            console.error(l);
          }
        OE(t);
      });
    });
  }));
}
const PE = (t, e) => {
  const n = AE(t, !0, Hd()), r = wE(n);
  if (!r.pending.length) {
    let c = !0;
    return e && setTimeout(() => {
      c && e(
        r.loaded,
        r.missing,
        r.pending,
        Yc
      );
    }), () => {
      c = !1;
    };
  }
  const i = /* @__PURE__ */ Object.create(null), s = [];
  let o, a;
  return r.pending.forEach((c) => {
    const { provider: l, prefix: u } = c;
    if (u === a && l === o)
      return;
    o = l, a = u, s.push(fn(l, u));
    const d = i[l] || (i[l] = /* @__PURE__ */ Object.create(null));
    d[u] || (d[u] = []);
  }), r.pending.forEach((c) => {
    const { provider: l, prefix: u, name: d } = c, f = fn(l, u), h = f.pendingIcons || (f.pendingIcons = /* @__PURE__ */ new Set());
    h.has(d) || (h.add(d), i[l][u].push(d));
  }), s.forEach((c) => {
    const { provider: l, prefix: u } = c;
    i[l][u].length && BE(c, i[l][u]);
  }), e ? SE(e, r, s) : Yc;
};
function HE(t, e) {
  const n = {
    ...t
  };
  for (const r in e) {
    const i = e[r], s = typeof i;
    r in Ld ? (i === null || i && (s === "string" || s === "number")) && (n[r] = i) : s === typeof n[r] && (n[r] = r === "rotate" ? i % 4 : i);
  }
  return n;
}
const LE = /[\s,]+/;
function FE(t, e) {
  e.split(LE).forEach((n) => {
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
function zE(t, e = 0) {
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
function UE(t, e) {
  let n = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in e)
    n += " " + r + '="' + e[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
}
function WE(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function jE(t) {
  return "data:image/svg+xml," + WE(t);
}
function VE(t) {
  return 'url("' + jE(t) + '")';
}
const Qc = {
  ...Fd,
  inline: !1
}, $E = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, qE = {
  display: "inline-block"
}, Bo = {
  backgroundColor: "currentColor"
}, Yd = {
  backgroundColor: "transparent"
}, Zc = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, Xc = {
  webkitMask: Bo,
  mask: Bo,
  background: Yd
};
for (const t in Xc) {
  const e = Xc[t];
  for (const n in Zc)
    e[t + n] = Zc[n];
}
const Qr = {};
["horizontal", "vertical"].forEach((t) => {
  const e = t.slice(0, 1) + "Flip";
  Qr[t + "-flip"] = e, Qr[t.slice(0, 1) + "-flip"] = e, Qr[t + "Flip"] = e;
});
function Kc(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
const Jc = (t, e) => {
  const n = HE(Qc, e), r = { ...$E }, i = e.mode || "svg", s = {}, o = e.style, a = typeof o == "object" && !(o instanceof Array) ? o : {};
  for (let v in e) {
    const b = e[v];
    if (b !== void 0)
      switch (v) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          n[v] = b === !0 || b === "true" || b === 1;
          break;
        case "flip":
          typeof b == "string" && FE(n, b);
          break;
        case "color":
          s.color = b;
          break;
        case "rotate":
          typeof b == "string" ? n[v] = zE(b) : typeof b == "number" && (n[v] = b);
          break;
        case "ariaHidden":
        case "aria-hidden":
          b !== !0 && b !== "true" && delete r["aria-hidden"];
          break;
        default: {
          const m = Qr[v];
          m ? (b === !0 || b === "true" || b === 1) && (n[m] = !0) : Qc[v] === void 0 && (r[v] = b);
        }
      }
  }
  const c = aE(t, n), l = c.attributes;
  if (n.inline && (s.verticalAlign = "-0.125em"), i === "svg") {
    r.style = {
      ...s,
      ...a
    }, Object.assign(r, l);
    let v = 0, b = e.id;
    return typeof b == "string" && (b = b.replace(/-/g, "_")), r.innerHTML = fE(c.body, b ? () => b + "ID" + v++ : "iconifyVue"), Cn("svg", r);
  }
  const { body: u, width: d, height: f } = t, h = i === "mask" || (i === "bg" ? !1 : u.indexOf("currentColor") !== -1), p = UE(u, {
    ...l,
    width: d + "",
    height: f + ""
  });
  return r.style = {
    ...s,
    "--svg": VE(p),
    width: Kc(l.width),
    height: Kc(l.height),
    ...qE,
    ...h ? Bo : Yd,
    ...a
  }, Cn("span", r);
};
Hd(!0);
dE("", xE);
if (typeof document < "u" && typeof window < "u") {
  Gd();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((r) => {
      try {
        // Check if item is an object and not null/array
        (typeof r != "object" || r === null || r instanceof Array || // Check for 'icons' and 'prefix'
        typeof r.icons != "object" || typeof r.prefix != "string" || // Add icon set
        !rE(r)) && console.error(n);
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
          hE(n, i) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
const GE = {
  ...ds,
  body: ""
}, Hr = Pn({
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
      if (typeof t != "string" || (n = fs(t, !1, !0)) === null)
        return this.abortLoading(), null;
      const r = tE(n);
      if (!r)
        return (!this._loadingIcon || this._loadingIcon.name !== t) && (this.abortLoading(), this._name = "", r !== null && (this._loadingIcon = {
          name: t,
          abort: PE([n], () => {
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
      return Jc(GE, t);
    let n = t;
    return e.classes && (n = {
      ...t,
      class: (typeof t.class == "string" ? t.class + " " : "") + e.classes.join(" ")
    }), Jc({
      ...ds,
      ...e.data
    }, n);
  }
}), YE = (t) => {
  const e = "--ik-main-icon-deep-color", n = "--ik-main-icon-color", r = /fill="([^"]*)"/g;
  let i, s = 0, o = t;
  for (o = o.replaceAll('fill="#71778D"', `fill="var(${e})"`), o = o.replaceAll('fill="#A1A5B7"', `fill="var(${e})"`), o = o.replaceAll('fill="#E3E4E9"', `fill="var(${n})"`), o = o.replaceAll('fill="#B9BAC5"', `fill="var(${n})"`); (i = r.exec(t)) !== null; ) {
    const a = i[1];
    s === 0 ? o = o.replace(`fill="${a}"`, `fill="var(${Fc.colorIsDark(a) ? e : n})"`) : o = o.replace(`fill="${a}"`, `fill="var(${Fc.colorIsDark(a) ? e : n})"`), s++;
  }
  return o;
}, QE = (t) => {
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
    const c = s.replace(/<symbol[^>]*>|<\/symbol>/gi, ""), l = YE(c);
    r[a] = l;
  }
  return r;
}, ZE = QE, XE = ["innerHTML"], KE = ["xlink:href"], JE = ["innerHTML"], e2 = ["xlink:href"], t2 = ["innerHTML"], n2 = ["xlink:href"], r2 = ["innerHTML"], i2 = ["xlink:href"], s2 = /* @__PURE__ */ Pn({
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
    const n = t, r = Ys.local.has("ik-svg"), i = r ? Ys.local.getItem("ik-svg") : ZE(window._iconfont_svg_string);
    r || Ys.local.setItem("ik-svg", i);
    const s = {}.VITE_ICON_SUFFIX, o = ft(() => {
      var h, p, v, b;
      return (h = n.name) != null && h.includes("iksvg") ? "svg" : ((p = n == null ? void 0 : n.name) == null ? void 0 : p.indexOf("-")) > 0 || ((v = n == null ? void 0 : n.name) == null ? void 0 : v.indexOf(s)) === 0 ? n.runtime ? "svg" : "css" : (b = n.name) != null && b.includes(":") ? "svg" : "custom";
    }), a = ft(() => {
      var h;
      if (((h = n.name) == null ? void 0 : h.indexOf("i-")) === 0) {
        let p = n.name;
        return n.runtime && (p = p.replace("i-", "")), p;
      } else
        return n.name;
    }), c = ft(() => {
      const h = [];
      if (n.flip !== "")
        switch (n.flip) {
          case "horizontal":
            h.push("rotateY(180deg)");
            break;
          case "vertical":
            h.push("rotateX(180deg)");
            break;
          case "both":
            h.push("rotateX(180deg)"), h.push("rotateY(180deg)");
            break;
        }
      return n.rotate !== 0 && h.push(`rotate(${n.rotate % 360}deg)`), `transform: ${h.join(" ")};`;
    }), l = ft(
      () => n.showBg ? `width: ${n.width}px; height: ${n.width}px;background-color: ${n.type === "primary" ? n.background : ""};` : ""
    ), u = ft(() => {
      var h;
      if (i[a.value])
        return i[a.value];
      {
        const p = (h = n.name) == null ? void 0 : h.replace("icon-", "iksvg_");
        return i[p] ? i[p] : "";
      }
    }), d = ft(() => ["all", "label"].includes(n.showType)), f = ft(
      () => ["big", "default", "small"].includes(n.size) ? n.size === "big" ? 20 : n.size === "default" ? 16 : 14 : n.size
    );
    return (h, p) => {
      const v = ze("el-icon"), b = ze("el-button"), m = ze("el-tooltip"), x = ze("iksvg");
      return pe(), Qe(x, { class: "inline-flex" }, {
        default: fe(() => [
          n.pop && !d.value ? (pe(), Qe(m, {
            key: 0,
            placement: "top",
            title: "",
            "popper-class": "ik-svg-icon-popover",
            trigger: "hover",
            enterable: !1,
            content: t.title
          }, {
            default: fe(() => [
              t.showType === "icon" ? (pe(), Qe(v, xn({
                key: 0,
                style: l.value,
                class: ["ik-icon-btn", [
                  n.showBg ? "show-bg" : null,
                  t.type,
                  t.disabled ? "disabled" : null,
                  t.startMargin ? "start-margin" : null,
                  `ik-${a.value}`
                ]],
                size: f.value
              }, h.$attrs, {
                onClick: p[0] || (p[0] = (g) => e("click", g))
              }), {
                default: fe(() => {
                  var g, y;
                  return [
                    u.value ? (pe(), ke("svg", {
                      key: 0,
                      style: Fe(c.value),
                      viewBox: "0 0 1024 1024",
                      innerHTML: u.value
                    }, null, 12, XE)) : o.value === "css" ? (pe(), ke("i", {
                      key: 1,
                      class: Ar(`${Be(s)} ${a.value} ${(g = t.name) == null ? void 0 : g.split("-")[0]} ${(y = t.name) != null && y.startsWith("ik") ? "ik iksvg" : "iconfont"}`),
                      style: Fe(`${c.value};fontSize:${f.value}px;`)
                    }, null, 6)) : o.value === "svg" ? (pe(), Qe(Be(Hr), {
                      key: 2,
                      icon: a.value,
                      style: Fe(c.value)
                    }, null, 8, ["icon", "style"])) : (pe(), ke("svg", {
                      key: 3,
                      style: Fe(c.value),
                      "aria-hidden": "true"
                    }, [
                      Ne("use", {
                        "xlink:href": `#icon-${a.value}`
                      }, null, 8, KE)
                    ], 4))
                  ];
                }),
                _: 1
              }, 16, ["style", "size", "class"])) : t.showType === "label" ? (pe(), Qe(b, {
                key: 1,
                text: ""
              }, {
                default: fe(() => [
                  at(ht(t.label), 1)
                ]),
                _: 1
              })) : t.showType === "all" ? (pe(), Qe(b, { key: 2 }, {
                icon: fe(() => [
                  ue(v, xn({
                    style: l.value,
                    class: ["ik-icon-btn", [
                      n.showBg ? "show-bg" : null,
                      t.type,
                      t.disabled ? "disabled" : null,
                      t.startMargin ? "start-margin" : null,
                      `ik-${a.value}`
                    ]],
                    size: f.value
                  }, h.$attrs, {
                    onClick: p[1] || (p[1] = (g) => e("click", g))
                  }), {
                    default: fe(() => {
                      var g, y;
                      return [
                        u.value ? (pe(), ke("svg", {
                          key: 0,
                          style: Fe(c.value),
                          viewBox: "0 0 1024 1024",
                          innerHTML: u.value
                        }, null, 12, JE)) : o.value === "css" ? (pe(), ke("i", {
                          key: 1,
                          class: Ar(`${Be(s)} ${a.value} ${(g = t.name) == null ? void 0 : g.split("-")[0]} ${(y = t.name) != null && y.startsWith("ik") ? "ik iksvg" : "iconfont"}`),
                          style: Fe(`${c.value};fontSize:${f.value}px;`)
                        }, null, 6)) : o.value === "svg" ? (pe(), Qe(Be(Hr), {
                          key: 2,
                          icon: a.value,
                          style: Fe(c.value)
                        }, null, 8, ["icon", "style"])) : (pe(), ke("svg", {
                          key: 3,
                          style: Fe(c.value),
                          "aria-hidden": "true"
                        }, [
                          Ne("use", {
                            "xlink:href": `#icon-${a.value}`
                          }, null, 8, e2)
                        ], 4))
                      ];
                    }),
                    _: 1
                  }, 16, ["style", "size", "class"])
                ]),
                default: fe(() => [
                  at(" " + ht(t.label), 1)
                ]),
                _: 1
              })) : rr("", !0)
            ]),
            _: 1
          }, 8, ["content"])) : (pe(), ke(tu, { key: 1 }, [
            t.showType === "icon" ? (pe(), Qe(v, xn({
              key: 0,
              style: l.value,
              class: ["ik-icon-btn", [
                n.showBg ? "show-bg" : null,
                t.type,
                t.disabled ? "disabled" : null,
                t.startMargin ? "start-margin" : null,
                `ik-${a.value}`
              ]],
              size: f.value
            }, h.$attrs, {
              onClick: p[2] || (p[2] = (g) => e("click", g))
            }), {
              default: fe(() => {
                var g, y;
                return [
                  u.value ? (pe(), ke("svg", {
                    key: 0,
                    style: Fe(c.value),
                    viewBox: "0 0 1024 1024",
                    innerHTML: u.value
                  }, null, 12, t2)) : o.value === "css" ? (pe(), ke("i", {
                    key: 1,
                    class: Ar(`${Be(s)} ${a.value} ${(g = t.name) == null ? void 0 : g.split("-")[0]} ${(y = t.name) != null && y.startsWith("ik") ? "ik iksvg" : "iconfont"}`),
                    style: Fe(`${c.value};fontSize:${f.value}px;`)
                  }, null, 6)) : o.value === "svg" ? (pe(), Qe(Be(Hr), {
                    key: 2,
                    icon: a.value,
                    style: Fe(c.value)
                  }, null, 8, ["icon", "style"])) : (pe(), ke("svg", {
                    key: 3,
                    style: Fe(c.value),
                    "aria-hidden": "true"
                  }, [
                    Ne("use", {
                      "xlink:href": `#icon-${a.value}`
                    }, null, 8, n2)
                  ], 4))
                ];
              }),
              _: 1
            }, 16, ["style", "size", "class"])) : t.showType === "label" ? (pe(), Qe(b, xn({
              key: 1,
              text: ""
            }, h.$attrs), {
              default: fe(() => [
                at(ht(t.label), 1)
              ]),
              _: 1
            }, 16)) : t.showType === "all" ? (pe(), Qe(b, xn({
              key: 2,
              text: "",
              type: "primary"
            }, h.$attrs), {
              icon: fe(() => [
                ue(v, xn({
                  style: l.value,
                  class: ["ik-icon-btn hover", [t.type, `ik-${a.value}`]]
                }, h.$attrs, {
                  onClick: p[3] || (p[3] = (g) => e("click", g))
                }), {
                  default: fe(() => {
                    var g, y;
                    return [
                      u.value ? (pe(), ke("svg", {
                        key: 0,
                        style: Fe(c.value),
                        viewBox: "0 0 1024 1024",
                        innerHTML: u.value
                      }, null, 12, r2)) : o.value === "css" ? (pe(), ke("i", {
                        key: 1,
                        class: Ar(`${Be(s)} ${a.value} ${(g = t.name) == null ? void 0 : g.split("-")[0]} ${(y = t.name) != null && y.startsWith("ik") ? "ik iksvg" : "iconfont"}`),
                        style: Fe(`${c.value};fontSize:${f.value}px;`)
                      }, null, 6)) : o.value === "svg" ? (pe(), Qe(Be(Hr), {
                        key: 2,
                        icon: a.value,
                        style: Fe(c.value)
                      }, null, 8, ["icon", "style"])) : (pe(), ke("svg", {
                        key: 3,
                        style: Fe(c.value),
                        "aria-hidden": "true"
                      }, [
                        Ne("use", {
                          "xlink:href": `#icon-${a.value}`
                        }, null, 8, i2)
                      ], 4))
                    ];
                  }),
                  _: 1
                }, 16, ["style", "class"])
              ]),
              default: fe(() => [
                at(" " + ht(t.label), 1)
              ]),
              _: 1
            }, 16)) : rr("", !0)
          ], 64))
        ]),
        _: 1
      });
    };
  }
});
const o2 = /* @__PURE__ */ wa(s2, [["__scopeId", "data-v-3d0fc4c6"]]), a2 = Po(o2), eu = a2, Ra = (t) => (S0("data-v-600ed17b"), t = t(), A0(), t), l2 = { class: "ik-schedule" }, c2 = { class: "ik-schedule__left" }, u2 = { class: "ik-schedule__header" }, f2 = { class: "ik-schedule__title" }, d2 = /* @__PURE__ */ Ra(() => /* @__PURE__ */ Ne("div", { class: "ik-schedule__header-right" }, null, -1)), h2 = { class: "ik-schedule__body" }, p2 = { style: { "font-size": "18px" } }, g2 = { key: 0 }, v2 = { style: { width: "90%", display: "flex", "align-items": "center", "justify-content": "space-between" } }, m2 = {
  key: 0,
  style: { "margin-left": "2%" }
}, b2 = /* @__PURE__ */ Ra(() => /* @__PURE__ */ Ne("span", {
  class: "to",
  style: { width: "10% !important" }
}, "至", -1)), y2 = { key: 1 }, x2 = /* @__PURE__ */ Ra(() => /* @__PURE__ */ Ne("span", {
  class: "to",
  style: { width: "10% !important" }
}, "至", -1)), w2 = { class: "dialog-footer" }, E2 = {
  name: "IkSchedule"
}, _2 = /* @__PURE__ */ Pn({
  ...E2,
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
    const r = t, i = !!E0().form, s = ft({
      get: () => r.modelValue,
      set: (_) => {
        n("update:modelValue", _);
      }
    }), o = ft(() => ({
      ...r.options,
      headerToolbar: !1
    })), a = Xs({
      currentView: (S = r.options) == null ? void 0 : S.initialView,
      viewTitle: "",
      rightLabel: "今日",
      timeType: "month",
      currentDate: null
    }), c = Kn(null), l = (_) => {
      var C;
      (C = c.value) == null || C.changeView(_), a.currentView = _, u();
    }, u = () => {
      var C;
      const _ = (C = c.value) == null ? void 0 : C.getView();
      a.viewTitle = _ == null ? void 0 : _.title;
    }, d = () => {
      var _;
      (_ = c.value) == null || _.prev(), u();
    }, f = () => {
      var _;
      (_ = c.value) == null || _.next(), u();
    }, h = () => {
      var _;
      (_ = c.value) == null || _.today(), u();
    }, p = (_) => a.currentView === _, v = Kn(null), b = {
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
      customSubmit: (_) => {
        var N, D;
        let C = {
          ..._,
          id: void 0,
          allDay: m.form.allDay,
          start: (N = m.selectInfo) == null ? void 0 : N.startStr,
          end: (D = m.selectInfo) == null ? void 0 : D.endStr
        };
        b.operation(C), b.close();
      },
      operation: (_) => {
        var C;
        m.operation === "add" ? n("submitAdd", _) : (_.id = (C = m.editEvent) == null ? void 0 : C.id, n("submitUpdate", _));
      },
      submit: async () => {
        var C, N;
        if (i) {
          n("submit");
          return;
        }
        if (!m.form.title) {
          Oa.info("标题不能为空");
          return;
        }
        if (!m.form.allDay && (!m.form.startTime || !m.form.endTime)) {
          Oa.info("时间不能为空");
          return;
        }
        let _ = {
          id: void 0,
          title: m.form.title,
          allDay: m.form.allDay,
          start: (C = m.selectInfo) == null ? void 0 : C.startStr,
          end: (N = m.selectInfo) == null ? void 0 : N.endStr,
          extendedProps: {
            ...m.form
          }
        };
        if (_.allDay)
          _.start = ot.toDate(m.form.startDate), _.end = ot.toDate(m.form.endDate);
        else {
          const D = ot.toDate(m.form.startDate), k = ot.toDateTime(m.form.startTime).substring(10), P = ot.toDateTime(m.form.endTime).substring(10);
          _.start = `${D}${k}`, _.end = `${D}${P}`, _.extendedProps.startTime = _.start, _.extendedProps.endTime = _.end;
        }
        b.operation(_), b.close();
      },
      reset: () => {
        var _;
        m.form = b.createDefaultForm(), (_ = v.value) == null || _.clearValidate();
      },
      edit: () => {
        m.editable = !0, m.title = "编辑日程";
      },
      cancelEdit: () => {
        m.editable = !1, m.title = "日程信息";
      },
      del: () => {
        E(m.clickInfo);
      }
    }, m = Xs({
      operation: "update",
      selectInfo: {},
      editEvent: void 0,
      title: "",
      visible: !1,
      allDay: !1,
      form: b.createDefaultForm(),
      // 可编辑状态
      editable: !1,
      //
      clickInfo: null
    }), x = ft({
      get: () => m.visible,
      set: (_) => {
        m.visible = _;
      }
    }), g = (_) => {
      var C;
      if (m.form.allDay = _.allDay, m.selectInfo = _, b.reset(), _.view.type == "dayGridMonth") {
        let N = _.end.getTime() - 864e5;
        a.timeType = "month", m.form.startDate = ot.toYMD(_.start), m.form.endDate = ot.toYMD(new Date(N)), m.form.allDay = !0;
      } else
        _.view.type == "timeGridWeek" ? a.timeType = "week" : _.view.type == "timeGridDay" && (a.timeType = "day"), m.form.startDate = ot.toYMD(_.start), m.form.endDate = ot.toYMD(_.start), m.form.startTime = ot.toDateTime(_.start), m.form.endTime = ot.toDateTime(_.end);
      (C = c.value) == null || C.unselect(), _0(() => {
        m.title = "新建日程", m.operation = "add", m.editable = !0, x.value = !0, n("editOpen", JSON.parse(JSON.stringify(m)));
      });
    }, y = (_) => {
      m.title = "日程信息", m.operation = "update", m.clickInfo = _, m.editEvent = _.event;
      debugger;
      m.editEvent.allDay ? (m.form.startDate = m.editEvent.startStr, m.form.endDate = m.editEvent.startStr) : (m.form.startDate = m.editEvent.startStr, m.form.startTime = m.editEvent.start, m.form.endTime = m.editEvent.end), m.form.title = m.editEvent.title, m.form.allDay = m.editEvent.allDay, B0.copyValue(m.form, m.editEvent.extendedProps), b.cancelEdit(), x.value = !0, n("editOpen", JSON.parse(JSON.stringify(m)));
    }, E = (_) => {
      M0.confirm(`你确定删除事件 ${_.event.title} ?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        b.close(), n("submitDelete", _.event.id);
      });
    };
    return e({
      customSubmit: (_) => b.customSubmit(_)
    }), nu(() => {
      u();
    }), (_, C) => {
      const N = ze("el-button"), D = ze("el-button-group"), k = ze("el-icon"), P = ze("el-space"), B = ze("el-input"), z = ze("el-form-item"), H = ze("el-date-picker"), j = ze("el-time-picker"), G = ze("el-checkbox"), J = ze("el-form"), ee = ze("el-dialog");
      return pe(), ke("div", l2, [
        Ne("div", c2, [
          Ne("div", u2, [
            ue(P, {
              style: { "flex-shrink": "0" },
              size: 24
            }, {
              default: fe(() => [
                ue(D, null, {
                  default: fe(() => [
                    ue(N, {
                      onClick: C[0] || (C[0] = (K) => l("dayGridMonth")),
                      type: p("dayGridMonth") ? "primary" : ""
                    }, {
                      default: fe(() => [
                        at("月")
                      ]),
                      _: 1
                    }, 8, ["type"]),
                    ue(N, {
                      onClick: C[1] || (C[1] = (K) => l("timeGridWeek")),
                      type: p("timeGridWeek") ? "primary" : ""
                    }, {
                      default: fe(() => [
                        at("周")
                      ]),
                      _: 1
                    }, 8, ["type"]),
                    ue(N, {
                      onClick: C[2] || (C[2] = (K) => l("timeGridDay")),
                      type: p("timeGridDay") ? "primary" : ""
                    }, {
                      default: fe(() => [
                        at("日")
                      ]),
                      _: 1
                    }, 8, ["type"])
                  ]),
                  _: 1
                }),
                Ne("span", f2, ht(a.viewTitle), 1),
                ue(D, { style: { "flex-shrink": "0" } }, {
                  default: fe(() => [
                    ue(N, { onClick: d }, {
                      default: fe(() => [
                        ue(k, null, {
                          default: fe(() => [
                            ue(Be(D0))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    ue(N, { onClick: h }, {
                      default: fe(() => [
                        at("今天")
                      ]),
                      _: 1
                    }),
                    ue(N, { onClick: f }, {
                      default: fe(() => [
                        ue(k, null, {
                          default: fe(() => [
                            ue(Be(R0))
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
            d2
          ]),
          Ne("div", h2, [
            ue(Be(Yw), {
              removable: _.removable,
              onDateSelect: g,
              onDeleteClick: E,
              onEventClick: y,
              ref_key: "_refCalendar",
              ref: c,
              options: o.value,
              modelValue: s.value,
              "onUpdate:modelValue": C[3] || (C[3] = (K) => s.value = K)
            }, null, 8, ["removable", "options", "modelValue"])
          ])
        ]),
        ue(ee, {
          width: "700px",
          modelValue: x.value,
          "onUpdate:modelValue": C[11] || (C[11] = (K) => x.value = K)
        }, {
          header: fe(() => [
            Ne("div", null, [
              Ne("span", p2, ht(m.title), 1),
              m.operation === "update" ? (pe(), ke("span", g2, [
                m.editable ? (pe(), Qe(Be(eu), {
                  key: 1,
                  style: { "margin-left": "4px" },
                  name: "iksvg_qiehuan-daohang",
                  onClick: b.cancelEdit
                }, null, 8, ["onClick"])) : (pe(), Qe(Be(eu), {
                  key: 0,
                  style: { "margin-left": "4px" },
                  name: "iksvg_xiugai",
                  onClick: b.edit
                }, null, 8, ["onClick"]))
              ])) : rr("", !0)
            ])
          ]),
          footer: fe(() => [
            Ne("span", w2, [
              Na(_.$slots, "form-footer", {}, () => [
                Ne("span", null, [
                  ue(N, {
                    onClick: b.close
                  }, {
                    default: fe(() => [
                      at("取消")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  ue(N, {
                    onClick: b.del
                  }, {
                    default: fe(() => [
                      at("删除")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  ue(N, {
                    type: "primary",
                    onClick: b.submit
                  }, {
                    default: fe(() => [
                      at("确定")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ], !0)
            ])
          ]),
          default: fe(() => [
            Na(_.$slots, "form", {}, () => [
              ue(J, {
                ref_key: "_editFormRef",
                ref: v,
                model: m.form,
                disabled: !m.editable
              }, {
                default: fe(() => [
                  ue(z, null, {
                    default: fe(() => [
                      ue(k, { class: "icon" }, {
                        default: fe(() => [
                          ue(Be(T0))
                        ]),
                        _: 1
                      }),
                      ue(B, {
                        modelValue: m.form.title,
                        "onUpdate:modelValue": C[4] || (C[4] = (K) => m.form.title = K),
                        placeholder: "请输入标题",
                        style: { width: "90%" },
                        clearable: ""
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  ue(z, null, {
                    default: fe(() => [
                      ue(k, { class: "icon" }, {
                        default: fe(() => [
                          ue(Be(k0))
                        ]),
                        _: 1
                      }),
                      Ne("div", v2, [
                        ue(H, {
                          disabled: "",
                          modelValue: m.form.startDate,
                          "onUpdate:modelValue": C[5] || (C[5] = (K) => m.form.startDate = K),
                          type: "date",
                          placeholder: "开始日期",
                          style: Fe({ width: m.form.allDay ? "45%" : "90%" })
                        }, null, 8, ["modelValue", "style"]),
                        m.form.allDay ? (pe(), ke("div", y2, [
                          x2,
                          ue(H, {
                            disabled: "",
                            modelValue: m.form.endDate,
                            "onUpdate:modelValue": C[8] || (C[8] = (K) => m.form.endDate = K),
                            type: "date",
                            placeholder: "结束日期",
                            style: { width: "90%" }
                          }, null, 8, ["modelValue"])
                        ])) : (pe(), ke("div", m2, [
                          ue(j, {
                            modelValue: m.form.startTime,
                            "onUpdate:modelValue": C[6] || (C[6] = (K) => m.form.startTime = K),
                            type: "datetime",
                            placeholder: "开始时间",
                            style: { width: "45%" },
                            format: "HH:mm"
                          }, null, 8, ["modelValue"]),
                          b2,
                          ue(j, {
                            modelValue: m.form.endTime,
                            "onUpdate:modelValue": C[7] || (C[7] = (K) => m.form.endTime = K),
                            type: "datetime",
                            placeholder: "结束时间",
                            style: { width: "45%" },
                            format: "HH:mm"
                          }, null, 8, ["modelValue"])
                        ])),
                        ue(G, {
                          modelValue: m.form.allDay,
                          "onUpdate:modelValue": C[9] || (C[9] = (K) => m.form.allDay = K),
                          label: "全天",
                          style: { "margin-left": "2%" }
                        }, null, 8, ["modelValue"])
                      ])
                    ]),
                    _: 1
                  }),
                  ue(z, null, {
                    default: fe(() => [
                      ue(k, { class: "icon" }, {
                        default: fe(() => [
                          ue(Be(I0))
                        ]),
                        _: 1
                      }),
                      ue(B, {
                        type: "textarea",
                        modelValue: m.form.remark,
                        "onUpdate:modelValue": C[10] || (C[10] = (K) => m.form.remark = K),
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
const S2 = /* @__PURE__ */ wa(_2, [["__scopeId", "data-v-600ed17b"]]), M2 = Po(S2);
export {
  M2 as IkSchedule,
  M2 as default
};
