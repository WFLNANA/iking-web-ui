import { defineComponent as Ht, openBlock as ee, createElementBlock as he, normalizeClass as Mt, createElementVNode as pe, toDisplayString as We, createVNode as ae, unref as re, computed as De, ref as Ee, createBlock as be, withCtx as ve, createTextVNode as ot, createCommentVNode as Re, Fragment as Ye, renderList as ht, useCssVars as lo, watch as Dt, toRef as ho, reactive as t0, nextTick as r0, watchEffect as n0, withModifiers as gt, normalizeStyle as tr, withDirectives as Vt, vShow as Tn, Transition as vo, resolveComponent as i0, isVNode as po, createSlots as xo, withKeys as bo, renderSlot as go } from "vue";
import { Delete as mo, Top as yo, Bottom as _o, Plus as wo, Search as ko, Refresh as Eo, ArrowUp as Co } from "@element-plus/icons-vue";
import { ElButton as st, ElCheckbox as At, ElCheckboxGroup as ln, ElRadioGroup as cr, ElRadio as dn, ElDialog as So, ElInput as ii, ElRadioButton as Bo, ElBreadcrumb as Ao, ElBreadcrumbItem as Ro, ElAvatar as gr, vLoading as Dn, ElFormItem as Oo, ElInputNumber as Do, ElSelect as Lo, ElOption as No, ElDatePicker as To, ElTreeSelect as Io, ElCard as Po, ElForm as $o, ElRow as Mo, ElCol as Ho, ElIcon as zo } from "element-plus";
import qo from "vuedraggable";
import * as Fo from "lodash-es";
const oi = (e, r) => {
  if (e.install = (t) => {
    for (const n of [e, ...Object.values(r ?? {})])
      t.component(n.name, n);
  }, r)
    for (const [t, n] of Object.entries(r))
      e[t] = n;
  return e;
};
var Bt = /* @__PURE__ */ ((e) => (e.input = "input", e.area = "area", e.number = "number", e.select = "select", e.date = "date", e.datetime = "datetime", e.checkbox = "checkbox", e.radio = "radio", e.treeselect = "treeselect", e.choosePerson = "choosePerson", e))(Bt || {}), $t = /* @__PURE__ */ ((e) => (e.year = "year", e.month = "month", e.date = "date", e.dates = "dates", e.datetime = "datetime", e.week = "week", e.datetimerange = "datetimerange", e.daterange = "daterange", e.monthrange = "monthrange", e))($t || {}), Uo = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Uo || {});
const Vo = { class: "ik-head-left" }, Wo = { class: "ik-head-right" }, Yo = /* @__PURE__ */ Ht({
  __name: "IKSearchHead",
  props: {
    //表格展示头部几条数据
    rowData: {
      type: Array,
      default: () => []
    }
  },
  emits: ["import", "export", "delete"],
  setup(e, { emit: r }) {
    return (t, n) => (ee(), he("div", {
      class: Mt(["ik-head", e.rowData.length === 0 ? "pack-up" : "ik-unfold"])
    }, [
      pe("div", Vo, We(`已选${e.rowData.length}条数据`), 1),
      pe("div", Wo, [
        ae(re(st), {
          class: "ik-head-icon",
          title: "查询",
          icon: re(mo),
          onClick: n[0] || (n[0] = (i) => r("delete", e.rowData))
        }, null, 8, ["icon"]),
        ae(re(st), {
          class: "ik-head-icon",
          title: "导入",
          icon: re(yo),
          onClick: n[1] || (n[1] = (i) => r("import", e.rowData))
        }, null, 8, ["icon"]),
        ae(re(st), {
          class: "ik-head-icon",
          title: "导出",
          icon: re(_o),
          onClick: n[2] || (n[2] = (i) => r("export", e.rowData))
        }, null, 8, ["icon"])
      ])
    ], 2));
  }
});
const et = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, i] of r)
    t[n] = i;
  return t;
}, Ko = /* @__PURE__ */ et(Yo, [["__scopeId", "data-v-c8e3b9d9"]]);
var fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Go(e) {
  if (e.__esModule)
    return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      if (this instanceof n) {
        var i = [null];
        i.push.apply(i, arguments);
        var o = Function.bind.apply(r, i);
        return new o();
      }
      return r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
var o0 = {}, Zo = {
  get exports() {
    return o0;
  },
  set exports(e) {
    o0 = e;
  }
};
function or(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Cr = {}, Xo = {
  get exports() {
    return Cr;
  },
  set exports(e) {
    Cr = e;
  }
};
const jo = {}, Qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jo
}, Symbol.toStringTag, { value: "Module" })), Jo = /* @__PURE__ */ Go(Qo);
var s0;
function ye() {
  return s0 || (s0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n();
    })(fe, function() {
      var t = t || function(n, i) {
        var o;
        if (typeof window < "u" && window.crypto && (o = window.crypto), typeof self < "u" && self.crypto && (o = self.crypto), typeof globalThis < "u" && globalThis.crypto && (o = globalThis.crypto), !o && typeof window < "u" && window.msCrypto && (o = window.msCrypto), !o && typeof fe < "u" && fe.crypto && (o = fe.crypto), !o && typeof or == "function")
          try {
            o = Jo;
          } catch {
          }
        var c = function() {
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
        }, u = Object.create || function() {
          function _() {
          }
          return function(p) {
            var g;
            return _.prototype = p, g = new _(), _.prototype = null, g;
          };
        }(), l = {}, s = l.lib = {}, f = s.Base = function() {
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
            extend: function(_) {
              var p = u(this);
              return _ && p.mixIn(_), (!p.hasOwnProperty("init") || this.init === p.init) && (p.init = function() {
                p.$super.init.apply(this, arguments);
              }), p.init.prototype = p, p.$super = this, p;
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
              var _ = this.extend();
              return _.init.apply(_, arguments), _;
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
            mixIn: function(_) {
              for (var p in _)
                _.hasOwnProperty(p) && (this[p] = _[p]);
              _.hasOwnProperty("toString") && (this.toString = _.toString);
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
        }(), d = s.WordArray = f.extend({
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
          init: function(_, p) {
            _ = this.words = _ || [], p != i ? this.sigBytes = p : this.sigBytes = _.length * 4;
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
          toString: function(_) {
            return (_ || h).stringify(this);
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
          concat: function(_) {
            var p = this.words, g = _.words, y = this.sigBytes, E = _.sigBytes;
            if (this.clamp(), y % 4)
              for (var k = 0; k < E; k++) {
                var R = g[k >>> 2] >>> 24 - k % 4 * 8 & 255;
                p[y + k >>> 2] |= R << 24 - (y + k) % 4 * 8;
              }
            else
              for (var I = 0; I < E; I += 4)
                p[y + I >>> 2] = g[I >>> 2];
            return this.sigBytes += E, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var _ = this.words, p = this.sigBytes;
            _[p >>> 2] &= 4294967295 << 32 - p % 4 * 8, _.length = n.ceil(p / 4);
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
            var _ = f.clone.call(this);
            return _.words = this.words.slice(0), _;
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
          random: function(_) {
            for (var p = [], g = 0; g < _; g += 4)
              p.push(c());
            return new d.init(p, _);
          }
        }), a = l.enc = {}, h = a.Hex = {
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
          stringify: function(_) {
            for (var p = _.words, g = _.sigBytes, y = [], E = 0; E < g; E++) {
              var k = p[E >>> 2] >>> 24 - E % 4 * 8 & 255;
              y.push((k >>> 4).toString(16)), y.push((k & 15).toString(16));
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
          parse: function(_) {
            for (var p = _.length, g = [], y = 0; y < p; y += 2)
              g[y >>> 3] |= parseInt(_.substr(y, 2), 16) << 24 - y % 8 * 4;
            return new d.init(g, p / 2);
          }
        }, x = a.Latin1 = {
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
          stringify: function(_) {
            for (var p = _.words, g = _.sigBytes, y = [], E = 0; E < g; E++) {
              var k = p[E >>> 2] >>> 24 - E % 4 * 8 & 255;
              y.push(String.fromCharCode(k));
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
          parse: function(_) {
            for (var p = _.length, g = [], y = 0; y < p; y++)
              g[y >>> 2] |= (_.charCodeAt(y) & 255) << 24 - y % 4 * 8;
            return new d.init(g, p);
          }
        }, v = a.Utf8 = {
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
          stringify: function(_) {
            try {
              return decodeURIComponent(escape(x.stringify(_)));
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
          parse: function(_) {
            return x.parse(unescape(encodeURIComponent(_)));
          }
        }, m = s.BufferedBlockAlgorithm = f.extend({
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
          _append: function(_) {
            typeof _ == "string" && (_ = v.parse(_)), this._data.concat(_), this._nDataBytes += _.sigBytes;
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
          _process: function(_) {
            var p, g = this._data, y = g.words, E = g.sigBytes, k = this.blockSize, R = k * 4, I = E / R;
            _ ? I = n.ceil(I) : I = n.max((I | 0) - this._minBufferSize, 0);
            var C = I * k, A = n.min(C * 4, E);
            if (C) {
              for (var T = 0; T < C; T += k)
                this._doProcessBlock(y, T);
              p = y.splice(0, C), g.sigBytes -= A;
            }
            return new d.init(p, A);
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
            var _ = f.clone.call(this);
            return _._data = this._data.clone(), _;
          },
          _minBufferSize: 0
        });
        s.Hasher = m.extend({
          /**
           * Configuration options.
           */
          cfg: f.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(_) {
            this.cfg = this.cfg.extend(_), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            m.reset.call(this), this._doReset();
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
          update: function(_) {
            return this._append(_), this._process(), this;
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
          finalize: function(_) {
            _ && this._append(_);
            var p = this._doFinalize();
            return p;
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
          _createHelper: function(_) {
            return function(p, g) {
              return new _.init(g).finalize(p);
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
          _createHmacHelper: function(_) {
            return function(p, g) {
              return new B.HMAC.init(_, g).finalize(p);
            };
          }
        });
        var B = l.algo = {};
        return l;
      }(Math);
      return t;
    });
  }(Xo)), Cr;
}
var Sr = {}, es = {
  get exports() {
    return Sr;
  },
  set exports(e) {
    Sr = e;
  }
}, a0;
function hn() {
  return a0 || (a0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ye());
    })(fe, function(t) {
      return function(n) {
        var i = t, o = i.lib, c = o.Base, u = o.WordArray, l = i.x64 = {};
        l.Word = c.extend({
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
          init: function(s, f) {
            this.high = s, this.low = f;
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
        }), l.WordArray = c.extend({
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
          init: function(s, f) {
            s = this.words = s || [], f != n ? this.sigBytes = f : this.sigBytes = s.length * 8;
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
            for (var s = this.words, f = s.length, d = [], a = 0; a < f; a++) {
              var h = s[a];
              d.push(h.high), d.push(h.low);
            }
            return u.create(d, this.sigBytes);
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
            for (var s = c.clone.call(this), f = s.words = this.words.slice(0), d = f.length, a = 0; a < d; a++)
              f[a] = f[a].clone();
            return s;
          }
        });
      }(), t;
    });
  }(es)), Sr;
}
var Br = {}, ts = {
  get exports() {
    return Br;
  },
  set exports(e) {
    Br = e;
  }
}, c0;
function rs() {
  return c0 || (c0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ye());
    })(fe, function(t) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var n = t, i = n.lib, o = i.WordArray, c = o.init, u = o.init = function(l) {
            if (l instanceof ArrayBuffer && (l = new Uint8Array(l)), (l instanceof Int8Array || typeof Uint8ClampedArray < "u" && l instanceof Uint8ClampedArray || l instanceof Int16Array || l instanceof Uint16Array || l instanceof Int32Array || l instanceof Uint32Array || l instanceof Float32Array || l instanceof Float64Array) && (l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength)), l instanceof Uint8Array) {
              for (var s = l.byteLength, f = [], d = 0; d < s; d++)
                f[d >>> 2] |= l[d] << 24 - d % 4 * 8;
              c.call(this, f, s);
            } else
              c.apply(this, arguments);
          };
          u.prototype = o;
        }
      }(), t.lib.WordArray;
    });
  }(ts)), Br;
}
var Ar = {}, ns = {
  get exports() {
    return Ar;
  },
  set exports(e) {
    Ar = e;
  }
}, u0;
function is() {
  return u0 || (u0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ye());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.WordArray, c = n.enc;
        c.Utf16 = c.Utf16BE = {
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
            for (var s = l.words, f = l.sigBytes, d = [], a = 0; a < f; a += 2) {
              var h = s[a >>> 2] >>> 16 - a % 4 * 8 & 65535;
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
          parse: function(l) {
            for (var s = l.length, f = [], d = 0; d < s; d++)
              f[d >>> 1] |= l.charCodeAt(d) << 16 - d % 2 * 16;
            return o.create(f, s * 2);
          }
        }, c.Utf16LE = {
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
            for (var s = l.words, f = l.sigBytes, d = [], a = 0; a < f; a += 2) {
              var h = u(s[a >>> 2] >>> 16 - a % 4 * 8 & 65535);
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
          parse: function(l) {
            for (var s = l.length, f = [], d = 0; d < s; d++)
              f[d >>> 1] |= u(l.charCodeAt(d) << 16 - d % 2 * 16);
            return o.create(f, s * 2);
          }
        };
        function u(l) {
          return l << 8 & 4278255360 | l >>> 8 & 16711935;
        }
      }(), t.enc.Utf16;
    });
  }(ns)), Ar;
}
var Rr = {}, os = {
  get exports() {
    return Rr;
  },
  set exports(e) {
    Rr = e;
  }
}, f0;
function zt() {
  return f0 || (f0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ye());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.WordArray, c = n.enc;
        c.Base64 = {
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
            var s = l.words, f = l.sigBytes, d = this._map;
            l.clamp();
            for (var a = [], h = 0; h < f; h += 3)
              for (var x = s[h >>> 2] >>> 24 - h % 4 * 8 & 255, v = s[h + 1 >>> 2] >>> 24 - (h + 1) % 4 * 8 & 255, m = s[h + 2 >>> 2] >>> 24 - (h + 2) % 4 * 8 & 255, B = x << 16 | v << 8 | m, _ = 0; _ < 4 && h + _ * 0.75 < f; _++)
                a.push(d.charAt(B >>> 6 * (3 - _) & 63));
            var p = d.charAt(64);
            if (p)
              for (; a.length % 4; )
                a.push(p);
            return a.join("");
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
            var s = l.length, f = this._map, d = this._reverseMap;
            if (!d) {
              d = this._reverseMap = [];
              for (var a = 0; a < f.length; a++)
                d[f.charCodeAt(a)] = a;
            }
            var h = f.charAt(64);
            if (h) {
              var x = l.indexOf(h);
              x !== -1 && (s = x);
            }
            return u(l, s, d);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function u(l, s, f) {
          for (var d = [], a = 0, h = 0; h < s; h++)
            if (h % 4) {
              var x = f[l.charCodeAt(h - 1)] << h % 4 * 2, v = f[l.charCodeAt(h)] >>> 6 - h % 4 * 2, m = x | v;
              d[a >>> 2] |= m << 24 - a % 4 * 8, a++;
            }
          return o.create(d, a);
        }
      }(), t.enc.Base64;
    });
  }(os)), Rr;
}
var Or = {}, ss = {
  get exports() {
    return Or;
  },
  set exports(e) {
    Or = e;
  }
}, l0;
function as() {
  return l0 || (l0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ye());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.WordArray, c = n.enc;
        c.Base64url = {
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
          stringify: function(l, s = !0) {
            var f = l.words, d = l.sigBytes, a = s ? this._safe_map : this._map;
            l.clamp();
            for (var h = [], x = 0; x < d; x += 3)
              for (var v = f[x >>> 2] >>> 24 - x % 4 * 8 & 255, m = f[x + 1 >>> 2] >>> 24 - (x + 1) % 4 * 8 & 255, B = f[x + 2 >>> 2] >>> 24 - (x + 2) % 4 * 8 & 255, _ = v << 16 | m << 8 | B, p = 0; p < 4 && x + p * 0.75 < d; p++)
                h.push(a.charAt(_ >>> 6 * (3 - p) & 63));
            var g = a.charAt(64);
            if (g)
              for (; h.length % 4; )
                h.push(g);
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
          parse: function(l, s = !0) {
            var f = l.length, d = s ? this._safe_map : this._map, a = this._reverseMap;
            if (!a) {
              a = this._reverseMap = [];
              for (var h = 0; h < d.length; h++)
                a[d.charCodeAt(h)] = h;
            }
            var x = d.charAt(64);
            if (x) {
              var v = l.indexOf(x);
              v !== -1 && (f = v);
            }
            return u(l, f, a);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function u(l, s, f) {
          for (var d = [], a = 0, h = 0; h < s; h++)
            if (h % 4) {
              var x = f[l.charCodeAt(h - 1)] << h % 4 * 2, v = f[l.charCodeAt(h)] >>> 6 - h % 4 * 2, m = x | v;
              d[a >>> 2] |= m << 24 - a % 4 * 8, a++;
            }
          return o.create(d, a);
        }
      }(), t.enc.Base64url;
    });
  }(ss)), Or;
}
var Dr = {}, cs = {
  get exports() {
    return Dr;
  },
  set exports(e) {
    Dr = e;
  }
}, d0;
function qt() {
  return d0 || (d0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ye());
    })(fe, function(t) {
      return function(n) {
        var i = t, o = i.lib, c = o.WordArray, u = o.Hasher, l = i.algo, s = [];
        (function() {
          for (var v = 0; v < 64; v++)
            s[v] = n.abs(n.sin(v + 1)) * 4294967296 | 0;
        })();
        var f = l.MD5 = u.extend({
          _doReset: function() {
            this._hash = new c.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(v, m) {
            for (var B = 0; B < 16; B++) {
              var _ = m + B, p = v[_];
              v[_] = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360;
            }
            var g = this._hash.words, y = v[m + 0], E = v[m + 1], k = v[m + 2], R = v[m + 3], I = v[m + 4], C = v[m + 5], A = v[m + 6], T = v[m + 7], L = v[m + 8], $ = v[m + 9], M = v[m + 10], V = v[m + 11], K = v[m + 12], te = v[m + 13], Q = v[m + 14], ne = v[m + 15], z = g[0], q = g[1], F = g[2], W = g[3];
            z = d(z, q, F, W, y, 7, s[0]), W = d(W, z, q, F, E, 12, s[1]), F = d(F, W, z, q, k, 17, s[2]), q = d(q, F, W, z, R, 22, s[3]), z = d(z, q, F, W, I, 7, s[4]), W = d(W, z, q, F, C, 12, s[5]), F = d(F, W, z, q, A, 17, s[6]), q = d(q, F, W, z, T, 22, s[7]), z = d(z, q, F, W, L, 7, s[8]), W = d(W, z, q, F, $, 12, s[9]), F = d(F, W, z, q, M, 17, s[10]), q = d(q, F, W, z, V, 22, s[11]), z = d(z, q, F, W, K, 7, s[12]), W = d(W, z, q, F, te, 12, s[13]), F = d(F, W, z, q, Q, 17, s[14]), q = d(q, F, W, z, ne, 22, s[15]), z = a(z, q, F, W, E, 5, s[16]), W = a(W, z, q, F, A, 9, s[17]), F = a(F, W, z, q, V, 14, s[18]), q = a(q, F, W, z, y, 20, s[19]), z = a(z, q, F, W, C, 5, s[20]), W = a(W, z, q, F, M, 9, s[21]), F = a(F, W, z, q, ne, 14, s[22]), q = a(q, F, W, z, I, 20, s[23]), z = a(z, q, F, W, $, 5, s[24]), W = a(W, z, q, F, Q, 9, s[25]), F = a(F, W, z, q, R, 14, s[26]), q = a(q, F, W, z, L, 20, s[27]), z = a(z, q, F, W, te, 5, s[28]), W = a(W, z, q, F, k, 9, s[29]), F = a(F, W, z, q, T, 14, s[30]), q = a(q, F, W, z, K, 20, s[31]), z = h(z, q, F, W, C, 4, s[32]), W = h(W, z, q, F, L, 11, s[33]), F = h(F, W, z, q, V, 16, s[34]), q = h(q, F, W, z, Q, 23, s[35]), z = h(z, q, F, W, E, 4, s[36]), W = h(W, z, q, F, I, 11, s[37]), F = h(F, W, z, q, T, 16, s[38]), q = h(q, F, W, z, M, 23, s[39]), z = h(z, q, F, W, te, 4, s[40]), W = h(W, z, q, F, y, 11, s[41]), F = h(F, W, z, q, R, 16, s[42]), q = h(q, F, W, z, A, 23, s[43]), z = h(z, q, F, W, $, 4, s[44]), W = h(W, z, q, F, K, 11, s[45]), F = h(F, W, z, q, ne, 16, s[46]), q = h(q, F, W, z, k, 23, s[47]), z = x(z, q, F, W, y, 6, s[48]), W = x(W, z, q, F, T, 10, s[49]), F = x(F, W, z, q, Q, 15, s[50]), q = x(q, F, W, z, C, 21, s[51]), z = x(z, q, F, W, K, 6, s[52]), W = x(W, z, q, F, R, 10, s[53]), F = x(F, W, z, q, M, 15, s[54]), q = x(q, F, W, z, E, 21, s[55]), z = x(z, q, F, W, L, 6, s[56]), W = x(W, z, q, F, ne, 10, s[57]), F = x(F, W, z, q, A, 15, s[58]), q = x(q, F, W, z, te, 21, s[59]), z = x(z, q, F, W, I, 6, s[60]), W = x(W, z, q, F, V, 10, s[61]), F = x(F, W, z, q, k, 15, s[62]), q = x(q, F, W, z, $, 21, s[63]), g[0] = g[0] + z | 0, g[1] = g[1] + q | 0, g[2] = g[2] + F | 0, g[3] = g[3] + W | 0;
          },
          _doFinalize: function() {
            var v = this._data, m = v.words, B = this._nDataBytes * 8, _ = v.sigBytes * 8;
            m[_ >>> 5] |= 128 << 24 - _ % 32;
            var p = n.floor(B / 4294967296), g = B;
            m[(_ + 64 >>> 9 << 4) + 15] = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360, m[(_ + 64 >>> 9 << 4) + 14] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, v.sigBytes = (m.length + 1) * 4, this._process();
            for (var y = this._hash, E = y.words, k = 0; k < 4; k++) {
              var R = E[k];
              E[k] = (R << 8 | R >>> 24) & 16711935 | (R << 24 | R >>> 8) & 4278255360;
            }
            return y;
          },
          clone: function() {
            var v = u.clone.call(this);
            return v._hash = this._hash.clone(), v;
          }
        });
        function d(v, m, B, _, p, g, y) {
          var E = v + (m & B | ~m & _) + p + y;
          return (E << g | E >>> 32 - g) + m;
        }
        function a(v, m, B, _, p, g, y) {
          var E = v + (m & _ | B & ~_) + p + y;
          return (E << g | E >>> 32 - g) + m;
        }
        function h(v, m, B, _, p, g, y) {
          var E = v + (m ^ B ^ _) + p + y;
          return (E << g | E >>> 32 - g) + m;
        }
        function x(v, m, B, _, p, g, y) {
          var E = v + (B ^ (m | ~_)) + p + y;
          return (E << g | E >>> 32 - g) + m;
        }
        i.MD5 = u._createHelper(f), i.HmacMD5 = u._createHmacHelper(f);
      }(Math), t.MD5;
    });
  }(cs)), Dr;
}
var Lr = {}, us = {
  get exports() {
    return Lr;
  },
  set exports(e) {
    Lr = e;
  }
}, h0;
function Kn() {
  return h0 || (h0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ye());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.WordArray, c = i.Hasher, u = n.algo, l = [], s = u.SHA1 = c.extend({
          _doReset: function() {
            this._hash = new o.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(f, d) {
            for (var a = this._hash.words, h = a[0], x = a[1], v = a[2], m = a[3], B = a[4], _ = 0; _ < 80; _++) {
              if (_ < 16)
                l[_] = f[d + _] | 0;
              else {
                var p = l[_ - 3] ^ l[_ - 8] ^ l[_ - 14] ^ l[_ - 16];
                l[_] = p << 1 | p >>> 31;
              }
              var g = (h << 5 | h >>> 27) + B + l[_];
              _ < 20 ? g += (x & v | ~x & m) + 1518500249 : _ < 40 ? g += (x ^ v ^ m) + 1859775393 : _ < 60 ? g += (x & v | x & m | v & m) - 1894007588 : g += (x ^ v ^ m) - 899497514, B = m, m = v, v = x << 30 | x >>> 2, x = h, h = g;
            }
            a[0] = a[0] + h | 0, a[1] = a[1] + x | 0, a[2] = a[2] + v | 0, a[3] = a[3] + m | 0, a[4] = a[4] + B | 0;
          },
          _doFinalize: function() {
            var f = this._data, d = f.words, a = this._nDataBytes * 8, h = f.sigBytes * 8;
            return d[h >>> 5] |= 128 << 24 - h % 32, d[(h + 64 >>> 9 << 4) + 14] = Math.floor(a / 4294967296), d[(h + 64 >>> 9 << 4) + 15] = a, f.sigBytes = d.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var f = c.clone.call(this);
            return f._hash = this._hash.clone(), f;
          }
        });
        n.SHA1 = c._createHelper(s), n.HmacSHA1 = c._createHmacHelper(s);
      }(), t.SHA1;
    });
  }(us)), Lr;
}
var Nr = {}, fs = {
  get exports() {
    return Nr;
  },
  set exports(e) {
    Nr = e;
  }
}, v0;
function si() {
  return v0 || (v0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ye());
    })(fe, function(t) {
      return function(n) {
        var i = t, o = i.lib, c = o.WordArray, u = o.Hasher, l = i.algo, s = [], f = [];
        (function() {
          function h(B) {
            for (var _ = n.sqrt(B), p = 2; p <= _; p++)
              if (!(B % p))
                return !1;
            return !0;
          }
          function x(B) {
            return (B - (B | 0)) * 4294967296 | 0;
          }
          for (var v = 2, m = 0; m < 64; )
            h(v) && (m < 8 && (s[m] = x(n.pow(v, 1 / 2))), f[m] = x(n.pow(v, 1 / 3)), m++), v++;
        })();
        var d = [], a = l.SHA256 = u.extend({
          _doReset: function() {
            this._hash = new c.init(s.slice(0));
          },
          _doProcessBlock: function(h, x) {
            for (var v = this._hash.words, m = v[0], B = v[1], _ = v[2], p = v[3], g = v[4], y = v[5], E = v[6], k = v[7], R = 0; R < 64; R++) {
              if (R < 16)
                d[R] = h[x + R] | 0;
              else {
                var I = d[R - 15], C = (I << 25 | I >>> 7) ^ (I << 14 | I >>> 18) ^ I >>> 3, A = d[R - 2], T = (A << 15 | A >>> 17) ^ (A << 13 | A >>> 19) ^ A >>> 10;
                d[R] = C + d[R - 7] + T + d[R - 16];
              }
              var L = g & y ^ ~g & E, $ = m & B ^ m & _ ^ B & _, M = (m << 30 | m >>> 2) ^ (m << 19 | m >>> 13) ^ (m << 10 | m >>> 22), V = (g << 26 | g >>> 6) ^ (g << 21 | g >>> 11) ^ (g << 7 | g >>> 25), K = k + V + L + f[R] + d[R], te = M + $;
              k = E, E = y, y = g, g = p + K | 0, p = _, _ = B, B = m, m = K + te | 0;
            }
            v[0] = v[0] + m | 0, v[1] = v[1] + B | 0, v[2] = v[2] + _ | 0, v[3] = v[3] + p | 0, v[4] = v[4] + g | 0, v[5] = v[5] + y | 0, v[6] = v[6] + E | 0, v[7] = v[7] + k | 0;
          },
          _doFinalize: function() {
            var h = this._data, x = h.words, v = this._nDataBytes * 8, m = h.sigBytes * 8;
            return x[m >>> 5] |= 128 << 24 - m % 32, x[(m + 64 >>> 9 << 4) + 14] = n.floor(v / 4294967296), x[(m + 64 >>> 9 << 4) + 15] = v, h.sigBytes = x.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var h = u.clone.call(this);
            return h._hash = this._hash.clone(), h;
          }
        });
        i.SHA256 = u._createHelper(a), i.HmacSHA256 = u._createHmacHelper(a);
      }(Math), t.SHA256;
    });
  }(fs)), Nr;
}
var Tr = {}, ls = {
  get exports() {
    return Tr;
  },
  set exports(e) {
    Tr = e;
  }
}, p0;
function ds() {
  return p0 || (p0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), si());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.WordArray, c = n.algo, u = c.SHA256, l = c.SHA224 = u.extend({
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
            var s = u._doFinalize.call(this);
            return s.sigBytes -= 4, s;
          }
        });
        n.SHA224 = u._createHelper(l), n.HmacSHA224 = u._createHmacHelper(l);
      }(), t.SHA224;
    });
  }(ls)), Tr;
}
var Ir = {}, hs = {
  get exports() {
    return Ir;
  },
  set exports(e) {
    Ir = e;
  }
}, x0;
function ai() {
  return x0 || (x0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), hn());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.Hasher, c = n.x64, u = c.Word, l = c.WordArray, s = n.algo;
        function f() {
          return u.create.apply(u, arguments);
        }
        var d = [
          f(1116352408, 3609767458),
          f(1899447441, 602891725),
          f(3049323471, 3964484399),
          f(3921009573, 2173295548),
          f(961987163, 4081628472),
          f(1508970993, 3053834265),
          f(2453635748, 2937671579),
          f(2870763221, 3664609560),
          f(3624381080, 2734883394),
          f(310598401, 1164996542),
          f(607225278, 1323610764),
          f(1426881987, 3590304994),
          f(1925078388, 4068182383),
          f(2162078206, 991336113),
          f(2614888103, 633803317),
          f(3248222580, 3479774868),
          f(3835390401, 2666613458),
          f(4022224774, 944711139),
          f(264347078, 2341262773),
          f(604807628, 2007800933),
          f(770255983, 1495990901),
          f(1249150122, 1856431235),
          f(1555081692, 3175218132),
          f(1996064986, 2198950837),
          f(2554220882, 3999719339),
          f(2821834349, 766784016),
          f(2952996808, 2566594879),
          f(3210313671, 3203337956),
          f(3336571891, 1034457026),
          f(3584528711, 2466948901),
          f(113926993, 3758326383),
          f(338241895, 168717936),
          f(666307205, 1188179964),
          f(773529912, 1546045734),
          f(1294757372, 1522805485),
          f(1396182291, 2643833823),
          f(1695183700, 2343527390),
          f(1986661051, 1014477480),
          f(2177026350, 1206759142),
          f(2456956037, 344077627),
          f(2730485921, 1290863460),
          f(2820302411, 3158454273),
          f(3259730800, 3505952657),
          f(3345764771, 106217008),
          f(3516065817, 3606008344),
          f(3600352804, 1432725776),
          f(4094571909, 1467031594),
          f(275423344, 851169720),
          f(430227734, 3100823752),
          f(506948616, 1363258195),
          f(659060556, 3750685593),
          f(883997877, 3785050280),
          f(958139571, 3318307427),
          f(1322822218, 3812723403),
          f(1537002063, 2003034995),
          f(1747873779, 3602036899),
          f(1955562222, 1575990012),
          f(2024104815, 1125592928),
          f(2227730452, 2716904306),
          f(2361852424, 442776044),
          f(2428436474, 593698344),
          f(2756734187, 3733110249),
          f(3204031479, 2999351573),
          f(3329325298, 3815920427),
          f(3391569614, 3928383900),
          f(3515267271, 566280711),
          f(3940187606, 3454069534),
          f(4118630271, 4000239992),
          f(116418474, 1914138554),
          f(174292421, 2731055270),
          f(289380356, 3203993006),
          f(460393269, 320620315),
          f(685471733, 587496836),
          f(852142971, 1086792851),
          f(1017036298, 365543100),
          f(1126000580, 2618297676),
          f(1288033470, 3409855158),
          f(1501505948, 4234509866),
          f(1607167915, 987167468),
          f(1816402316, 1246189591)
        ], a = [];
        (function() {
          for (var x = 0; x < 80; x++)
            a[x] = f();
        })();
        var h = s.SHA512 = o.extend({
          _doReset: function() {
            this._hash = new l.init([
              new u.init(1779033703, 4089235720),
              new u.init(3144134277, 2227873595),
              new u.init(1013904242, 4271175723),
              new u.init(2773480762, 1595750129),
              new u.init(1359893119, 2917565137),
              new u.init(2600822924, 725511199),
              new u.init(528734635, 4215389547),
              new u.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(x, v) {
            for (var m = this._hash.words, B = m[0], _ = m[1], p = m[2], g = m[3], y = m[4], E = m[5], k = m[6], R = m[7], I = B.high, C = B.low, A = _.high, T = _.low, L = p.high, $ = p.low, M = g.high, V = g.low, K = y.high, te = y.low, Q = E.high, ne = E.low, z = k.high, q = k.low, F = R.high, W = R.low, xe = I, me = C, Be = A, ue = T, Ae = L, $e = $, ct = M, je = V, ze = K, Oe = te, Ne = Q, kt = ne, xt = z, tt = q, Et = F, rt = W, Me = 0; Me < 80; Me++) {
              var qe, Ze, Ct = a[Me];
              if (Me < 16)
                Ze = Ct.high = x[v + Me * 2] | 0, qe = Ct.low = x[v + Me * 2 + 1] | 0;
              else {
                var St = a[Me - 15], ut = St.high, H = St.low, X = (ut >>> 1 | H << 31) ^ (ut >>> 8 | H << 24) ^ ut >>> 7, P = (H >>> 1 | ut << 31) ^ (H >>> 8 | ut << 24) ^ (H >>> 7 | ut << 25), oe = a[Me - 2], we = oe.high, Fe = oe.low, ft = (we >>> 19 | Fe << 13) ^ (we << 3 | Fe >>> 29) ^ we >>> 6, nt = (Fe >>> 19 | we << 13) ^ (Fe << 3 | we >>> 29) ^ (Fe >>> 6 | we << 26), Pt = a[Me - 7], Te = Pt.high, Ve = Pt.low, jt = a[Me - 16], mn = jt.high, lt = jt.low;
                qe = P + Ve, Ze = X + Te + (qe >>> 0 < P >>> 0 ? 1 : 0), qe = qe + nt, Ze = Ze + ft + (qe >>> 0 < nt >>> 0 ? 1 : 0), qe = qe + lt, Ze = Ze + mn + (qe >>> 0 < lt >>> 0 ? 1 : 0), Ct.high = Ze, Ct.low = qe;
              }
              var yn = ze & Ne ^ ~ze & xt, dr = Oe & kt ^ ~Oe & tt, hr = xe & Be ^ xe & Ae ^ Be & Ae, _n = me & ue ^ me & $e ^ ue & $e, wn = (xe >>> 28 | me << 4) ^ (xe << 30 | me >>> 2) ^ (xe << 25 | me >>> 7), vr = (me >>> 28 | xe << 4) ^ (me << 30 | xe >>> 2) ^ (me << 25 | xe >>> 7), kn = (ze >>> 14 | Oe << 18) ^ (ze >>> 18 | Oe << 14) ^ (ze << 23 | Oe >>> 9), En = (Oe >>> 14 | ze << 18) ^ (Oe >>> 18 | ze << 14) ^ (Oe << 23 | ze >>> 9), pr = d[Me], Cn = pr.high, xr = pr.low, Xe = rt + En, bt = Et + kn + (Xe >>> 0 < rt >>> 0 ? 1 : 0), Xe = Xe + dr, bt = bt + yn + (Xe >>> 0 < dr >>> 0 ? 1 : 0), Xe = Xe + xr, bt = bt + Cn + (Xe >>> 0 < xr >>> 0 ? 1 : 0), Xe = Xe + qe, bt = bt + Ze + (Xe >>> 0 < qe >>> 0 ? 1 : 0), Qt = vr + _n, Sn = wn + hr + (Qt >>> 0 < vr >>> 0 ? 1 : 0);
              Et = xt, rt = tt, xt = Ne, tt = kt, Ne = ze, kt = Oe, Oe = je + Xe | 0, ze = ct + bt + (Oe >>> 0 < je >>> 0 ? 1 : 0) | 0, ct = Ae, je = $e, Ae = Be, $e = ue, Be = xe, ue = me, me = Xe + Qt | 0, xe = bt + Sn + (me >>> 0 < Xe >>> 0 ? 1 : 0) | 0;
            }
            C = B.low = C + me, B.high = I + xe + (C >>> 0 < me >>> 0 ? 1 : 0), T = _.low = T + ue, _.high = A + Be + (T >>> 0 < ue >>> 0 ? 1 : 0), $ = p.low = $ + $e, p.high = L + Ae + ($ >>> 0 < $e >>> 0 ? 1 : 0), V = g.low = V + je, g.high = M + ct + (V >>> 0 < je >>> 0 ? 1 : 0), te = y.low = te + Oe, y.high = K + ze + (te >>> 0 < Oe >>> 0 ? 1 : 0), ne = E.low = ne + kt, E.high = Q + Ne + (ne >>> 0 < kt >>> 0 ? 1 : 0), q = k.low = q + tt, k.high = z + xt + (q >>> 0 < tt >>> 0 ? 1 : 0), W = R.low = W + rt, R.high = F + Et + (W >>> 0 < rt >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var x = this._data, v = x.words, m = this._nDataBytes * 8, B = x.sigBytes * 8;
            v[B >>> 5] |= 128 << 24 - B % 32, v[(B + 128 >>> 10 << 5) + 30] = Math.floor(m / 4294967296), v[(B + 128 >>> 10 << 5) + 31] = m, x.sigBytes = v.length * 4, this._process();
            var _ = this._hash.toX32();
            return _;
          },
          clone: function() {
            var x = o.clone.call(this);
            return x._hash = this._hash.clone(), x;
          },
          blockSize: 1024 / 32
        });
        n.SHA512 = o._createHelper(h), n.HmacSHA512 = o._createHmacHelper(h);
      }(), t.SHA512;
    });
  }(hs)), Ir;
}
var Pr = {}, vs = {
  get exports() {
    return Pr;
  },
  set exports(e) {
    Pr = e;
  }
}, b0;
function ps() {
  return b0 || (b0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), hn(), ai());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.x64, o = i.Word, c = i.WordArray, u = n.algo, l = u.SHA512, s = u.SHA384 = l.extend({
          _doReset: function() {
            this._hash = new c.init([
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
            var f = l._doFinalize.call(this);
            return f.sigBytes -= 16, f;
          }
        });
        n.SHA384 = l._createHelper(s), n.HmacSHA384 = l._createHmacHelper(s);
      }(), t.SHA384;
    });
  }(vs)), Pr;
}
var $r = {}, xs = {
  get exports() {
    return $r;
  },
  set exports(e) {
    $r = e;
  }
}, g0;
function bs() {
  return g0 || (g0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), hn());
    })(fe, function(t) {
      return function(n) {
        var i = t, o = i.lib, c = o.WordArray, u = o.Hasher, l = i.x64, s = l.Word, f = i.algo, d = [], a = [], h = [];
        (function() {
          for (var m = 1, B = 0, _ = 0; _ < 24; _++) {
            d[m + 5 * B] = (_ + 1) * (_ + 2) / 2 % 64;
            var p = B % 5, g = (2 * m + 3 * B) % 5;
            m = p, B = g;
          }
          for (var m = 0; m < 5; m++)
            for (var B = 0; B < 5; B++)
              a[m + 5 * B] = B + (2 * m + 3 * B) % 5 * 5;
          for (var y = 1, E = 0; E < 24; E++) {
            for (var k = 0, R = 0, I = 0; I < 7; I++) {
              if (y & 1) {
                var C = (1 << I) - 1;
                C < 32 ? R ^= 1 << C : k ^= 1 << C - 32;
              }
              y & 128 ? y = y << 1 ^ 113 : y <<= 1;
            }
            h[E] = s.create(k, R);
          }
        })();
        var x = [];
        (function() {
          for (var m = 0; m < 25; m++)
            x[m] = s.create();
        })();
        var v = f.SHA3 = u.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: u.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var m = this._state = [], B = 0; B < 25; B++)
              m[B] = new s.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(m, B) {
            for (var _ = this._state, p = this.blockSize / 2, g = 0; g < p; g++) {
              var y = m[B + 2 * g], E = m[B + 2 * g + 1];
              y = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, E = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360;
              var k = _[g];
              k.high ^= E, k.low ^= y;
            }
            for (var R = 0; R < 24; R++) {
              for (var I = 0; I < 5; I++) {
                for (var C = 0, A = 0, T = 0; T < 5; T++) {
                  var k = _[I + 5 * T];
                  C ^= k.high, A ^= k.low;
                }
                var L = x[I];
                L.high = C, L.low = A;
              }
              for (var I = 0; I < 5; I++)
                for (var $ = x[(I + 4) % 5], M = x[(I + 1) % 5], V = M.high, K = M.low, C = $.high ^ (V << 1 | K >>> 31), A = $.low ^ (K << 1 | V >>> 31), T = 0; T < 5; T++) {
                  var k = _[I + 5 * T];
                  k.high ^= C, k.low ^= A;
                }
              for (var te = 1; te < 25; te++) {
                var C, A, k = _[te], Q = k.high, ne = k.low, z = d[te];
                z < 32 ? (C = Q << z | ne >>> 32 - z, A = ne << z | Q >>> 32 - z) : (C = ne << z - 32 | Q >>> 64 - z, A = Q << z - 32 | ne >>> 64 - z);
                var q = x[a[te]];
                q.high = C, q.low = A;
              }
              var F = x[0], W = _[0];
              F.high = W.high, F.low = W.low;
              for (var I = 0; I < 5; I++)
                for (var T = 0; T < 5; T++) {
                  var te = I + 5 * T, k = _[te], xe = x[te], me = x[(I + 1) % 5 + 5 * T], Be = x[(I + 2) % 5 + 5 * T];
                  k.high = xe.high ^ ~me.high & Be.high, k.low = xe.low ^ ~me.low & Be.low;
                }
              var k = _[0], ue = h[R];
              k.high ^= ue.high, k.low ^= ue.low;
            }
          },
          _doFinalize: function() {
            var m = this._data, B = m.words;
            this._nDataBytes * 8;
            var _ = m.sigBytes * 8, p = this.blockSize * 32;
            B[_ >>> 5] |= 1 << 24 - _ % 32, B[(n.ceil((_ + 1) / p) * p >>> 5) - 1] |= 128, m.sigBytes = B.length * 4, this._process();
            for (var g = this._state, y = this.cfg.outputLength / 8, E = y / 8, k = [], R = 0; R < E; R++) {
              var I = g[R], C = I.high, A = I.low;
              C = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, A = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360, k.push(A), k.push(C);
            }
            return new c.init(k, y);
          },
          clone: function() {
            for (var m = u.clone.call(this), B = m._state = this._state.slice(0), _ = 0; _ < 25; _++)
              B[_] = B[_].clone();
            return m;
          }
        });
        i.SHA3 = u._createHelper(v), i.HmacSHA3 = u._createHmacHelper(v);
      }(Math), t.SHA3;
    });
  }(xs)), $r;
}
var Mr = {}, gs = {
  get exports() {
    return Mr;
  },
  set exports(e) {
    Mr = e;
  }
}, m0;
function ms() {
  return m0 || (m0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ye());
    })(fe, function(t) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(n) {
        var i = t, o = i.lib, c = o.WordArray, u = o.Hasher, l = i.algo, s = c.create([
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
        ]), f = c.create([
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
        ]), d = c.create([
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
        ]), a = c.create([
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
        ]), h = c.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), x = c.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), v = l.RIPEMD160 = u.extend({
          _doReset: function() {
            this._hash = c.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(E, k) {
            for (var R = 0; R < 16; R++) {
              var I = k + R, C = E[I];
              E[I] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360;
            }
            var A = this._hash.words, T = h.words, L = x.words, $ = s.words, M = f.words, V = d.words, K = a.words, te, Q, ne, z, q, F, W, xe, me, Be;
            F = te = A[0], W = Q = A[1], xe = ne = A[2], me = z = A[3], Be = q = A[4];
            for (var ue, R = 0; R < 80; R += 1)
              ue = te + E[k + $[R]] | 0, R < 16 ? ue += m(Q, ne, z) + T[0] : R < 32 ? ue += B(Q, ne, z) + T[1] : R < 48 ? ue += _(Q, ne, z) + T[2] : R < 64 ? ue += p(Q, ne, z) + T[3] : ue += g(Q, ne, z) + T[4], ue = ue | 0, ue = y(ue, V[R]), ue = ue + q | 0, te = q, q = z, z = y(ne, 10), ne = Q, Q = ue, ue = F + E[k + M[R]] | 0, R < 16 ? ue += g(W, xe, me) + L[0] : R < 32 ? ue += p(W, xe, me) + L[1] : R < 48 ? ue += _(W, xe, me) + L[2] : R < 64 ? ue += B(W, xe, me) + L[3] : ue += m(W, xe, me) + L[4], ue = ue | 0, ue = y(ue, K[R]), ue = ue + Be | 0, F = Be, Be = me, me = y(xe, 10), xe = W, W = ue;
            ue = A[1] + ne + me | 0, A[1] = A[2] + z + Be | 0, A[2] = A[3] + q + F | 0, A[3] = A[4] + te + W | 0, A[4] = A[0] + Q + xe | 0, A[0] = ue;
          },
          _doFinalize: function() {
            var E = this._data, k = E.words, R = this._nDataBytes * 8, I = E.sigBytes * 8;
            k[I >>> 5] |= 128 << 24 - I % 32, k[(I + 64 >>> 9 << 4) + 14] = (R << 8 | R >>> 24) & 16711935 | (R << 24 | R >>> 8) & 4278255360, E.sigBytes = (k.length + 1) * 4, this._process();
            for (var C = this._hash, A = C.words, T = 0; T < 5; T++) {
              var L = A[T];
              A[T] = (L << 8 | L >>> 24) & 16711935 | (L << 24 | L >>> 8) & 4278255360;
            }
            return C;
          },
          clone: function() {
            var E = u.clone.call(this);
            return E._hash = this._hash.clone(), E;
          }
        });
        function m(E, k, R) {
          return E ^ k ^ R;
        }
        function B(E, k, R) {
          return E & k | ~E & R;
        }
        function _(E, k, R) {
          return (E | ~k) ^ R;
        }
        function p(E, k, R) {
          return E & R | k & ~R;
        }
        function g(E, k, R) {
          return E ^ (k | ~R);
        }
        function y(E, k) {
          return E << k | E >>> 32 - k;
        }
        i.RIPEMD160 = u._createHelper(v), i.HmacRIPEMD160 = u._createHmacHelper(v);
      }(), t.RIPEMD160;
    });
  }(gs)), Mr;
}
var Hr = {}, ys = {
  get exports() {
    return Hr;
  },
  set exports(e) {
    Hr = e;
  }
}, y0;
function Gn() {
  return y0 || (y0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ye());
    })(fe, function(t) {
      (function() {
        var n = t, i = n.lib, o = i.Base, c = n.enc, u = c.Utf8, l = n.algo;
        l.HMAC = o.extend({
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
          init: function(s, f) {
            s = this._hasher = new s.init(), typeof f == "string" && (f = u.parse(f));
            var d = s.blockSize, a = d * 4;
            f.sigBytes > a && (f = s.finalize(f)), f.clamp();
            for (var h = this._oKey = f.clone(), x = this._iKey = f.clone(), v = h.words, m = x.words, B = 0; B < d; B++)
              v[B] ^= 1549556828, m[B] ^= 909522486;
            h.sigBytes = x.sigBytes = a, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var s = this._hasher;
            s.reset(), s.update(this._iKey);
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
          update: function(s) {
            return this._hasher.update(s), this;
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
          finalize: function(s) {
            var f = this._hasher, d = f.finalize(s);
            f.reset();
            var a = f.finalize(this._oKey.clone().concat(d));
            return a;
          }
        });
      })();
    });
  }(ys)), Hr;
}
var zr = {}, _s = {
  get exports() {
    return zr;
  },
  set exports(e) {
    zr = e;
  }
}, _0;
function ws() {
  return _0 || (_0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), Kn(), Gn());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.Base, c = i.WordArray, u = n.algo, l = u.SHA1, s = u.HMAC, f = u.PBKDF2 = o.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA1
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: o.extend({
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
          compute: function(d, a) {
            for (var h = this.cfg, x = s.create(h.hasher, d), v = c.create(), m = c.create([1]), B = v.words, _ = m.words, p = h.keySize, g = h.iterations; B.length < p; ) {
              var y = x.update(a).finalize(m);
              x.reset();
              for (var E = y.words, k = E.length, R = y, I = 1; I < g; I++) {
                R = x.finalize(R), x.reset();
                for (var C = R.words, A = 0; A < k; A++)
                  E[A] ^= C[A];
              }
              v.concat(y), _[0]++;
            }
            return v.sigBytes = p * 4, v;
          }
        });
        n.PBKDF2 = function(d, a, h) {
          return f.create(h).compute(d, a);
        };
      }(), t.PBKDF2;
    });
  }(_s)), zr;
}
var qr = {}, ks = {
  get exports() {
    return qr;
  },
  set exports(e) {
    qr = e;
  }
}, w0;
function Ft() {
  return w0 || (w0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), Kn(), Gn());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.Base, c = i.WordArray, u = n.algo, l = u.MD5, s = u.EvpKDF = o.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: o.extend({
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
          init: function(f) {
            this.cfg = this.cfg.extend(f);
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
          compute: function(f, d) {
            for (var a, h = this.cfg, x = h.hasher.create(), v = c.create(), m = v.words, B = h.keySize, _ = h.iterations; m.length < B; ) {
              a && x.update(a), a = x.update(f).finalize(d), x.reset();
              for (var p = 1; p < _; p++)
                a = x.finalize(a), x.reset();
              v.concat(a);
            }
            return v.sigBytes = B * 4, v;
          }
        });
        n.EvpKDF = function(f, d, a) {
          return s.create(a).compute(f, d);
        };
      }(), t.EvpKDF;
    });
  }(ks)), qr;
}
var Fr = {}, Es = {
  get exports() {
    return Fr;
  },
  set exports(e) {
    Fr = e;
  }
}, k0;
function Ue() {
  return k0 || (k0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), Ft());
    })(fe, function(t) {
      t.lib.Cipher || function(n) {
        var i = t, o = i.lib, c = o.Base, u = o.WordArray, l = o.BufferedBlockAlgorithm, s = i.enc;
        s.Utf8;
        var f = s.Base64, d = i.algo, a = d.EvpKDF, h = o.Cipher = l.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: c.extend(),
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
          createEncryptor: function(C, A) {
            return this.create(this._ENC_XFORM_MODE, C, A);
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
          createDecryptor: function(C, A) {
            return this.create(this._DEC_XFORM_MODE, C, A);
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
          init: function(C, A, T) {
            this.cfg = this.cfg.extend(T), this._xformMode = C, this._key = A, this.reset();
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
          process: function(C) {
            return this._append(C), this._process();
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
          finalize: function(C) {
            C && this._append(C);
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
            function C(A) {
              return typeof A == "string" ? I : E;
            }
            return function(A) {
              return {
                encrypt: function(T, L, $) {
                  return C(L).encrypt(A, T, L, $);
                },
                decrypt: function(T, L, $) {
                  return C(L).decrypt(A, T, L, $);
                }
              };
            };
          }()
        });
        o.StreamCipher = h.extend({
          _doFinalize: function() {
            var C = this._process(!0);
            return C;
          },
          blockSize: 1
        });
        var x = i.mode = {}, v = o.BlockCipherMode = c.extend({
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
          createEncryptor: function(C, A) {
            return this.Encryptor.create(C, A);
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
          createDecryptor: function(C, A) {
            return this.Decryptor.create(C, A);
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
          init: function(C, A) {
            this._cipher = C, this._iv = A;
          }
        }), m = x.CBC = function() {
          var C = v.extend();
          C.Encryptor = C.extend({
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
            processBlock: function(T, L) {
              var $ = this._cipher, M = $.blockSize;
              A.call(this, T, L, M), $.encryptBlock(T, L), this._prevBlock = T.slice(L, L + M);
            }
          }), C.Decryptor = C.extend({
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
            processBlock: function(T, L) {
              var $ = this._cipher, M = $.blockSize, V = T.slice(L, L + M);
              $.decryptBlock(T, L), A.call(this, T, L, M), this._prevBlock = V;
            }
          });
          function A(T, L, $) {
            var M, V = this._iv;
            V ? (M = V, this._iv = n) : M = this._prevBlock;
            for (var K = 0; K < $; K++)
              T[L + K] ^= M[K];
          }
          return C;
        }(), B = i.pad = {}, _ = B.Pkcs7 = {
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
          pad: function(C, A) {
            for (var T = A * 4, L = T - C.sigBytes % T, $ = L << 24 | L << 16 | L << 8 | L, M = [], V = 0; V < L; V += 4)
              M.push($);
            var K = u.create(M, L);
            C.concat(K);
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
          unpad: function(C) {
            var A = C.words[C.sigBytes - 1 >>> 2] & 255;
            C.sigBytes -= A;
          }
        };
        o.BlockCipher = h.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: h.cfg.extend({
            mode: m,
            padding: _
          }),
          reset: function() {
            var C;
            h.reset.call(this);
            var A = this.cfg, T = A.iv, L = A.mode;
            this._xformMode == this._ENC_XFORM_MODE ? C = L.createEncryptor : (C = L.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == C ? this._mode.init(this, T && T.words) : (this._mode = C.call(L, this, T && T.words), this._mode.__creator = C);
          },
          _doProcessBlock: function(C, A) {
            this._mode.processBlock(C, A);
          },
          _doFinalize: function() {
            var C, A = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (A.pad(this._data, this.blockSize), C = this._process(!0)) : (C = this._process(!0), A.unpad(C)), C;
          },
          blockSize: 128 / 32
        });
        var p = o.CipherParams = c.extend({
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
          init: function(C) {
            this.mixIn(C);
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
          toString: function(C) {
            return (C || this.formatter).stringify(this);
          }
        }), g = i.format = {}, y = g.OpenSSL = {
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
          stringify: function(C) {
            var A, T = C.ciphertext, L = C.salt;
            return L ? A = u.create([1398893684, 1701076831]).concat(L).concat(T) : A = T, A.toString(f);
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
          parse: function(C) {
            var A, T = f.parse(C), L = T.words;
            return L[0] == 1398893684 && L[1] == 1701076831 && (A = u.create(L.slice(2, 4)), L.splice(0, 4), T.sigBytes -= 16), p.create({ ciphertext: T, salt: A });
          }
        }, E = o.SerializableCipher = c.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: c.extend({
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
          encrypt: function(C, A, T, L) {
            L = this.cfg.extend(L);
            var $ = C.createEncryptor(T, L), M = $.finalize(A), V = $.cfg;
            return p.create({
              ciphertext: M,
              key: T,
              iv: V.iv,
              algorithm: C,
              mode: V.mode,
              padding: V.padding,
              blockSize: C.blockSize,
              formatter: L.format
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
          decrypt: function(C, A, T, L) {
            L = this.cfg.extend(L), A = this._parse(A, L.format);
            var $ = C.createDecryptor(T, L).finalize(A.ciphertext);
            return $;
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
          _parse: function(C, A) {
            return typeof C == "string" ? A.parse(C, this) : C;
          }
        }), k = i.kdf = {}, R = k.OpenSSL = {
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
          execute: function(C, A, T, L) {
            L || (L = u.random(64 / 8));
            var $ = a.create({ keySize: A + T }).compute(C, L), M = u.create($.words.slice(A), T * 4);
            return $.sigBytes = A * 4, p.create({ key: $, iv: M, salt: L });
          }
        }, I = o.PasswordBasedCipher = E.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: E.cfg.extend({
            kdf: R
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
          encrypt: function(C, A, T, L) {
            L = this.cfg.extend(L);
            var $ = L.kdf.execute(T, C.keySize, C.ivSize);
            L.iv = $.iv;
            var M = E.encrypt.call(this, C, A, $.key, L);
            return M.mixIn($), M;
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
          decrypt: function(C, A, T, L) {
            L = this.cfg.extend(L), A = this._parse(A, L.format);
            var $ = L.kdf.execute(T, C.keySize, C.ivSize, A.salt);
            L.iv = $.iv;
            var M = E.decrypt.call(this, C, A, $.key, L);
            return M;
          }
        });
      }();
    });
  }(Es)), Fr;
}
var Ur = {}, Cs = {
  get exports() {
    return Ur;
  },
  set exports(e) {
    Ur = e;
  }
}, E0;
function Ss() {
  return E0 || (E0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), Ue());
    })(fe, function(t) {
      return t.mode.CFB = function() {
        var n = t.lib.BlockCipherMode.extend();
        n.Encryptor = n.extend({
          processBlock: function(o, c) {
            var u = this._cipher, l = u.blockSize;
            i.call(this, o, c, l, u), this._prevBlock = o.slice(c, c + l);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(o, c) {
            var u = this._cipher, l = u.blockSize, s = o.slice(c, c + l);
            i.call(this, o, c, l, u), this._prevBlock = s;
          }
        });
        function i(o, c, u, l) {
          var s, f = this._iv;
          f ? (s = f.slice(0), this._iv = void 0) : s = this._prevBlock, l.encryptBlock(s, 0);
          for (var d = 0; d < u; d++)
            o[c + d] ^= s[d];
        }
        return n;
      }(), t.mode.CFB;
    });
  }(Cs)), Ur;
}
var Vr = {}, Bs = {
  get exports() {
    return Vr;
  },
  set exports(e) {
    Vr = e;
  }
}, C0;
function As() {
  return C0 || (C0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), Ue());
    })(fe, function(t) {
      return t.mode.CTR = function() {
        var n = t.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(o, c) {
            var u = this._cipher, l = u.blockSize, s = this._iv, f = this._counter;
            s && (f = this._counter = s.slice(0), this._iv = void 0);
            var d = f.slice(0);
            u.encryptBlock(d, 0), f[l - 1] = f[l - 1] + 1 | 0;
            for (var a = 0; a < l; a++)
              o[c + a] ^= d[a];
          }
        });
        return n.Decryptor = i, n;
      }(), t.mode.CTR;
    });
  }(Bs)), Vr;
}
var Wr = {}, Rs = {
  get exports() {
    return Wr;
  },
  set exports(e) {
    Wr = e;
  }
}, S0;
function Os() {
  return S0 || (S0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), Ue());
    })(fe, function(t) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return t.mode.CTRGladman = function() {
        var n = t.lib.BlockCipherMode.extend();
        function i(u) {
          if ((u >> 24 & 255) === 255) {
            var l = u >> 16 & 255, s = u >> 8 & 255, f = u & 255;
            l === 255 ? (l = 0, s === 255 ? (s = 0, f === 255 ? f = 0 : ++f) : ++s) : ++l, u = 0, u += l << 16, u += s << 8, u += f;
          } else
            u += 1 << 24;
          return u;
        }
        function o(u) {
          return (u[0] = i(u[0])) === 0 && (u[1] = i(u[1])), u;
        }
        var c = n.Encryptor = n.extend({
          processBlock: function(u, l) {
            var s = this._cipher, f = s.blockSize, d = this._iv, a = this._counter;
            d && (a = this._counter = d.slice(0), this._iv = void 0), o(a);
            var h = a.slice(0);
            s.encryptBlock(h, 0);
            for (var x = 0; x < f; x++)
              u[l + x] ^= h[x];
          }
        });
        return n.Decryptor = c, n;
      }(), t.mode.CTRGladman;
    });
  }(Rs)), Wr;
}
var Yr = {}, Ds = {
  get exports() {
    return Yr;
  },
  set exports(e) {
    Yr = e;
  }
}, B0;
function Ls() {
  return B0 || (B0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), Ue());
    })(fe, function(t) {
      return t.mode.OFB = function() {
        var n = t.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(o, c) {
            var u = this._cipher, l = u.blockSize, s = this._iv, f = this._keystream;
            s && (f = this._keystream = s.slice(0), this._iv = void 0), u.encryptBlock(f, 0);
            for (var d = 0; d < l; d++)
              o[c + d] ^= f[d];
          }
        });
        return n.Decryptor = i, n;
      }(), t.mode.OFB;
    });
  }(Ds)), Yr;
}
var Kr = {}, Ns = {
  get exports() {
    return Kr;
  },
  set exports(e) {
    Kr = e;
  }
}, A0;
function ci() {
  return A0 || (A0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), Ue());
    })(fe, function(t) {
      return t.mode.ECB = function() {
        var n = t.lib.BlockCipherMode.extend();
        return n.Encryptor = n.extend({
          processBlock: function(i, o) {
            this._cipher.encryptBlock(i, o);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(i, o) {
            this._cipher.decryptBlock(i, o);
          }
        }), n;
      }(), t.mode.ECB;
    });
  }(Ns)), Kr;
}
var Gr = {}, Ts = {
  get exports() {
    return Gr;
  },
  set exports(e) {
    Gr = e;
  }
}, R0;
function Is() {
  return R0 || (R0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), Ue());
    })(fe, function(t) {
      return t.pad.AnsiX923 = {
        pad: function(n, i) {
          var o = n.sigBytes, c = i * 4, u = c - o % c, l = o + u - 1;
          n.clamp(), n.words[l >>> 2] |= u << 24 - l % 4 * 8, n.sigBytes += u;
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, t.pad.Ansix923;
    });
  }(Ts)), Gr;
}
var Zr = {}, Ps = {
  get exports() {
    return Zr;
  },
  set exports(e) {
    Zr = e;
  }
}, O0;
function $s() {
  return O0 || (O0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), Ue());
    })(fe, function(t) {
      return t.pad.Iso10126 = {
        pad: function(n, i) {
          var o = i * 4, c = o - n.sigBytes % o;
          n.concat(t.lib.WordArray.random(c - 1)).concat(t.lib.WordArray.create([c << 24], 1));
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, t.pad.Iso10126;
    });
  }(Ps)), Zr;
}
var Xr = {}, Ms = {
  get exports() {
    return Xr;
  },
  set exports(e) {
    Xr = e;
  }
}, D0;
function Hs() {
  return D0 || (D0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), Ue());
    })(fe, function(t) {
      return t.pad.Iso97971 = {
        pad: function(n, i) {
          n.concat(t.lib.WordArray.create([2147483648], 1)), t.pad.ZeroPadding.pad(n, i);
        },
        unpad: function(n) {
          t.pad.ZeroPadding.unpad(n), n.sigBytes--;
        }
      }, t.pad.Iso97971;
    });
  }(Ms)), Xr;
}
var jr = {}, zs = {
  get exports() {
    return jr;
  },
  set exports(e) {
    jr = e;
  }
}, L0;
function qs() {
  return L0 || (L0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), Ue());
    })(fe, function(t) {
      return t.pad.ZeroPadding = {
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
      }, t.pad.ZeroPadding;
    });
  }(zs)), jr;
}
var Qr = {}, Fs = {
  get exports() {
    return Qr;
  },
  set exports(e) {
    Qr = e;
  }
}, N0;
function Us() {
  return N0 || (N0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), Ue());
    })(fe, function(t) {
      return t.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, t.pad.NoPadding;
    });
  }(Fs)), Qr;
}
var Jr = {}, Vs = {
  get exports() {
    return Jr;
  },
  set exports(e) {
    Jr = e;
  }
}, T0;
function Ws() {
  return T0 || (T0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), Ue());
    })(fe, function(t) {
      return function(n) {
        var i = t, o = i.lib, c = o.CipherParams, u = i.enc, l = u.Hex, s = i.format;
        s.Hex = {
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
          stringify: function(f) {
            return f.ciphertext.toString(l);
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
          parse: function(f) {
            var d = l.parse(f);
            return c.create({ ciphertext: d });
          }
        };
      }(), t.format.Hex;
    });
  }(Vs)), Jr;
}
var en = {}, Ys = {
  get exports() {
    return en;
  },
  set exports(e) {
    en = e;
  }
}, I0;
function ui() {
  return I0 || (I0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), zt(), qt(), Ft(), Ue());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.BlockCipher, c = n.algo, u = [], l = [], s = [], f = [], d = [], a = [], h = [], x = [], v = [], m = [];
        (function() {
          for (var p = [], g = 0; g < 256; g++)
            g < 128 ? p[g] = g << 1 : p[g] = g << 1 ^ 283;
          for (var y = 0, E = 0, g = 0; g < 256; g++) {
            var k = E ^ E << 1 ^ E << 2 ^ E << 3 ^ E << 4;
            k = k >>> 8 ^ k & 255 ^ 99, u[y] = k, l[k] = y;
            var R = p[y], I = p[R], C = p[I], A = p[k] * 257 ^ k * 16843008;
            s[y] = A << 24 | A >>> 8, f[y] = A << 16 | A >>> 16, d[y] = A << 8 | A >>> 24, a[y] = A;
            var A = C * 16843009 ^ I * 65537 ^ R * 257 ^ y * 16843008;
            h[k] = A << 24 | A >>> 8, x[k] = A << 16 | A >>> 16, v[k] = A << 8 | A >>> 24, m[k] = A, y ? (y = R ^ p[p[p[C ^ R]]], E ^= p[p[E]]) : y = E = 1;
          }
        })();
        var B = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], _ = c.AES = o.extend({
          _doReset: function() {
            var p;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var g = this._keyPriorReset = this._key, y = g.words, E = g.sigBytes / 4, k = this._nRounds = E + 6, R = (k + 1) * 4, I = this._keySchedule = [], C = 0; C < R; C++)
                C < E ? I[C] = y[C] : (p = I[C - 1], C % E ? E > 6 && C % E == 4 && (p = u[p >>> 24] << 24 | u[p >>> 16 & 255] << 16 | u[p >>> 8 & 255] << 8 | u[p & 255]) : (p = p << 8 | p >>> 24, p = u[p >>> 24] << 24 | u[p >>> 16 & 255] << 16 | u[p >>> 8 & 255] << 8 | u[p & 255], p ^= B[C / E | 0] << 24), I[C] = I[C - E] ^ p);
              for (var A = this._invKeySchedule = [], T = 0; T < R; T++) {
                var C = R - T;
                if (T % 4)
                  var p = I[C];
                else
                  var p = I[C - 4];
                T < 4 || C <= 4 ? A[T] = p : A[T] = h[u[p >>> 24]] ^ x[u[p >>> 16 & 255]] ^ v[u[p >>> 8 & 255]] ^ m[u[p & 255]];
              }
            }
          },
          encryptBlock: function(p, g) {
            this._doCryptBlock(p, g, this._keySchedule, s, f, d, a, u);
          },
          decryptBlock: function(p, g) {
            var y = p[g + 1];
            p[g + 1] = p[g + 3], p[g + 3] = y, this._doCryptBlock(p, g, this._invKeySchedule, h, x, v, m, l);
            var y = p[g + 1];
            p[g + 1] = p[g + 3], p[g + 3] = y;
          },
          _doCryptBlock: function(p, g, y, E, k, R, I, C) {
            for (var A = this._nRounds, T = p[g] ^ y[0], L = p[g + 1] ^ y[1], $ = p[g + 2] ^ y[2], M = p[g + 3] ^ y[3], V = 4, K = 1; K < A; K++) {
              var te = E[T >>> 24] ^ k[L >>> 16 & 255] ^ R[$ >>> 8 & 255] ^ I[M & 255] ^ y[V++], Q = E[L >>> 24] ^ k[$ >>> 16 & 255] ^ R[M >>> 8 & 255] ^ I[T & 255] ^ y[V++], ne = E[$ >>> 24] ^ k[M >>> 16 & 255] ^ R[T >>> 8 & 255] ^ I[L & 255] ^ y[V++], z = E[M >>> 24] ^ k[T >>> 16 & 255] ^ R[L >>> 8 & 255] ^ I[$ & 255] ^ y[V++];
              T = te, L = Q, $ = ne, M = z;
            }
            var te = (C[T >>> 24] << 24 | C[L >>> 16 & 255] << 16 | C[$ >>> 8 & 255] << 8 | C[M & 255]) ^ y[V++], Q = (C[L >>> 24] << 24 | C[$ >>> 16 & 255] << 16 | C[M >>> 8 & 255] << 8 | C[T & 255]) ^ y[V++], ne = (C[$ >>> 24] << 24 | C[M >>> 16 & 255] << 16 | C[T >>> 8 & 255] << 8 | C[L & 255]) ^ y[V++], z = (C[M >>> 24] << 24 | C[T >>> 16 & 255] << 16 | C[L >>> 8 & 255] << 8 | C[$ & 255]) ^ y[V++];
            p[g] = te, p[g + 1] = Q, p[g + 2] = ne, p[g + 3] = z;
          },
          keySize: 256 / 32
        });
        n.AES = o._createHelper(_);
      }(), t.AES;
    });
  }(Ys)), en;
}
var tn = {}, Ks = {
  get exports() {
    return tn;
  },
  set exports(e) {
    tn = e;
  }
}, P0;
function Gs() {
  return P0 || (P0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), zt(), qt(), Ft(), Ue());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.WordArray, c = i.BlockCipher, u = n.algo, l = [
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
        ], s = [
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
        ], f = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], d = [
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
        ], a = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], h = u.DES = c.extend({
          _doReset: function() {
            for (var B = this._key, _ = B.words, p = [], g = 0; g < 56; g++) {
              var y = l[g] - 1;
              p[g] = _[y >>> 5] >>> 31 - y % 32 & 1;
            }
            for (var E = this._subKeys = [], k = 0; k < 16; k++) {
              for (var R = E[k] = [], I = f[k], g = 0; g < 24; g++)
                R[g / 6 | 0] |= p[(s[g] - 1 + I) % 28] << 31 - g % 6, R[4 + (g / 6 | 0)] |= p[28 + (s[g + 24] - 1 + I) % 28] << 31 - g % 6;
              R[0] = R[0] << 1 | R[0] >>> 31;
              for (var g = 1; g < 7; g++)
                R[g] = R[g] >>> (g - 1) * 4 + 3;
              R[7] = R[7] << 5 | R[7] >>> 27;
            }
            for (var C = this._invSubKeys = [], g = 0; g < 16; g++)
              C[g] = E[15 - g];
          },
          encryptBlock: function(B, _) {
            this._doCryptBlock(B, _, this._subKeys);
          },
          decryptBlock: function(B, _) {
            this._doCryptBlock(B, _, this._invSubKeys);
          },
          _doCryptBlock: function(B, _, p) {
            this._lBlock = B[_], this._rBlock = B[_ + 1], x.call(this, 4, 252645135), x.call(this, 16, 65535), v.call(this, 2, 858993459), v.call(this, 8, 16711935), x.call(this, 1, 1431655765);
            for (var g = 0; g < 16; g++) {
              for (var y = p[g], E = this._lBlock, k = this._rBlock, R = 0, I = 0; I < 8; I++)
                R |= d[I][((k ^ y[I]) & a[I]) >>> 0];
              this._lBlock = k, this._rBlock = E ^ R;
            }
            var C = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = C, x.call(this, 1, 1431655765), v.call(this, 8, 16711935), v.call(this, 2, 858993459), x.call(this, 16, 65535), x.call(this, 4, 252645135), B[_] = this._lBlock, B[_ + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function x(B, _) {
          var p = (this._lBlock >>> B ^ this._rBlock) & _;
          this._rBlock ^= p, this._lBlock ^= p << B;
        }
        function v(B, _) {
          var p = (this._rBlock >>> B ^ this._lBlock) & _;
          this._lBlock ^= p, this._rBlock ^= p << B;
        }
        n.DES = c._createHelper(h);
        var m = u.TripleDES = c.extend({
          _doReset: function() {
            var B = this._key, _ = B.words;
            if (_.length !== 2 && _.length !== 4 && _.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var p = _.slice(0, 2), g = _.length < 4 ? _.slice(0, 2) : _.slice(2, 4), y = _.length < 6 ? _.slice(0, 2) : _.slice(4, 6);
            this._des1 = h.createEncryptor(o.create(p)), this._des2 = h.createEncryptor(o.create(g)), this._des3 = h.createEncryptor(o.create(y));
          },
          encryptBlock: function(B, _) {
            this._des1.encryptBlock(B, _), this._des2.decryptBlock(B, _), this._des3.encryptBlock(B, _);
          },
          decryptBlock: function(B, _) {
            this._des3.decryptBlock(B, _), this._des2.encryptBlock(B, _), this._des1.decryptBlock(B, _);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        n.TripleDES = c._createHelper(m);
      }(), t.TripleDES;
    });
  }(Ks)), tn;
}
var rn = {}, Zs = {
  get exports() {
    return rn;
  },
  set exports(e) {
    rn = e;
  }
}, $0;
function Xs() {
  return $0 || ($0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), zt(), qt(), Ft(), Ue());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.StreamCipher, c = n.algo, u = c.RC4 = o.extend({
          _doReset: function() {
            for (var f = this._key, d = f.words, a = f.sigBytes, h = this._S = [], x = 0; x < 256; x++)
              h[x] = x;
            for (var x = 0, v = 0; x < 256; x++) {
              var m = x % a, B = d[m >>> 2] >>> 24 - m % 4 * 8 & 255;
              v = (v + h[x] + B) % 256;
              var _ = h[x];
              h[x] = h[v], h[v] = _;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(f, d) {
            f[d] ^= l.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function l() {
          for (var f = this._S, d = this._i, a = this._j, h = 0, x = 0; x < 4; x++) {
            d = (d + 1) % 256, a = (a + f[d]) % 256;
            var v = f[d];
            f[d] = f[a], f[a] = v, h |= f[(f[d] + f[a]) % 256] << 24 - x * 8;
          }
          return this._i = d, this._j = a, h;
        }
        n.RC4 = o._createHelper(u);
        var s = c.RC4Drop = u.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: u.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            u._doReset.call(this);
            for (var f = this.cfg.drop; f > 0; f--)
              l.call(this);
          }
        });
        n.RC4Drop = o._createHelper(s);
      }(), t.RC4;
    });
  }(Zs)), rn;
}
var nn = {}, js = {
  get exports() {
    return nn;
  },
  set exports(e) {
    nn = e;
  }
}, M0;
function Qs() {
  return M0 || (M0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), zt(), qt(), Ft(), Ue());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.StreamCipher, c = n.algo, u = [], l = [], s = [], f = c.Rabbit = o.extend({
          _doReset: function() {
            for (var a = this._key.words, h = this.cfg.iv, x = 0; x < 4; x++)
              a[x] = (a[x] << 8 | a[x] >>> 24) & 16711935 | (a[x] << 24 | a[x] >>> 8) & 4278255360;
            var v = this._X = [
              a[0],
              a[3] << 16 | a[2] >>> 16,
              a[1],
              a[0] << 16 | a[3] >>> 16,
              a[2],
              a[1] << 16 | a[0] >>> 16,
              a[3],
              a[2] << 16 | a[1] >>> 16
            ], m = this._C = [
              a[2] << 16 | a[2] >>> 16,
              a[0] & 4294901760 | a[1] & 65535,
              a[3] << 16 | a[3] >>> 16,
              a[1] & 4294901760 | a[2] & 65535,
              a[0] << 16 | a[0] >>> 16,
              a[2] & 4294901760 | a[3] & 65535,
              a[1] << 16 | a[1] >>> 16,
              a[3] & 4294901760 | a[0] & 65535
            ];
            this._b = 0;
            for (var x = 0; x < 4; x++)
              d.call(this);
            for (var x = 0; x < 8; x++)
              m[x] ^= v[x + 4 & 7];
            if (h) {
              var B = h.words, _ = B[0], p = B[1], g = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360, y = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360, E = g >>> 16 | y & 4294901760, k = y << 16 | g & 65535;
              m[0] ^= g, m[1] ^= E, m[2] ^= y, m[3] ^= k, m[4] ^= g, m[5] ^= E, m[6] ^= y, m[7] ^= k;
              for (var x = 0; x < 4; x++)
                d.call(this);
            }
          },
          _doProcessBlock: function(a, h) {
            var x = this._X;
            d.call(this), u[0] = x[0] ^ x[5] >>> 16 ^ x[3] << 16, u[1] = x[2] ^ x[7] >>> 16 ^ x[5] << 16, u[2] = x[4] ^ x[1] >>> 16 ^ x[7] << 16, u[3] = x[6] ^ x[3] >>> 16 ^ x[1] << 16;
            for (var v = 0; v < 4; v++)
              u[v] = (u[v] << 8 | u[v] >>> 24) & 16711935 | (u[v] << 24 | u[v] >>> 8) & 4278255360, a[h + v] ^= u[v];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function d() {
          for (var a = this._X, h = this._C, x = 0; x < 8; x++)
            l[x] = h[x];
          h[0] = h[0] + 1295307597 + this._b | 0, h[1] = h[1] + 3545052371 + (h[0] >>> 0 < l[0] >>> 0 ? 1 : 0) | 0, h[2] = h[2] + 886263092 + (h[1] >>> 0 < l[1] >>> 0 ? 1 : 0) | 0, h[3] = h[3] + 1295307597 + (h[2] >>> 0 < l[2] >>> 0 ? 1 : 0) | 0, h[4] = h[4] + 3545052371 + (h[3] >>> 0 < l[3] >>> 0 ? 1 : 0) | 0, h[5] = h[5] + 886263092 + (h[4] >>> 0 < l[4] >>> 0 ? 1 : 0) | 0, h[6] = h[6] + 1295307597 + (h[5] >>> 0 < l[5] >>> 0 ? 1 : 0) | 0, h[7] = h[7] + 3545052371 + (h[6] >>> 0 < l[6] >>> 0 ? 1 : 0) | 0, this._b = h[7] >>> 0 < l[7] >>> 0 ? 1 : 0;
          for (var x = 0; x < 8; x++) {
            var v = a[x] + h[x], m = v & 65535, B = v >>> 16, _ = ((m * m >>> 17) + m * B >>> 15) + B * B, p = ((v & 4294901760) * v | 0) + ((v & 65535) * v | 0);
            s[x] = _ ^ p;
          }
          a[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, a[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, a[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, a[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, a[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, a[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, a[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, a[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0;
        }
        n.Rabbit = o._createHelper(f);
      }(), t.Rabbit;
    });
  }(js)), nn;
}
var on = {}, Js = {
  get exports() {
    return on;
  },
  set exports(e) {
    on = e;
  }
}, H0;
function ea() {
  return H0 || (H0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ye(), zt(), qt(), Ft(), Ue());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.StreamCipher, c = n.algo, u = [], l = [], s = [], f = c.RabbitLegacy = o.extend({
          _doReset: function() {
            var a = this._key.words, h = this.cfg.iv, x = this._X = [
              a[0],
              a[3] << 16 | a[2] >>> 16,
              a[1],
              a[0] << 16 | a[3] >>> 16,
              a[2],
              a[1] << 16 | a[0] >>> 16,
              a[3],
              a[2] << 16 | a[1] >>> 16
            ], v = this._C = [
              a[2] << 16 | a[2] >>> 16,
              a[0] & 4294901760 | a[1] & 65535,
              a[3] << 16 | a[3] >>> 16,
              a[1] & 4294901760 | a[2] & 65535,
              a[0] << 16 | a[0] >>> 16,
              a[2] & 4294901760 | a[3] & 65535,
              a[1] << 16 | a[1] >>> 16,
              a[3] & 4294901760 | a[0] & 65535
            ];
            this._b = 0;
            for (var m = 0; m < 4; m++)
              d.call(this);
            for (var m = 0; m < 8; m++)
              v[m] ^= x[m + 4 & 7];
            if (h) {
              var B = h.words, _ = B[0], p = B[1], g = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360, y = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360, E = g >>> 16 | y & 4294901760, k = y << 16 | g & 65535;
              v[0] ^= g, v[1] ^= E, v[2] ^= y, v[3] ^= k, v[4] ^= g, v[5] ^= E, v[6] ^= y, v[7] ^= k;
              for (var m = 0; m < 4; m++)
                d.call(this);
            }
          },
          _doProcessBlock: function(a, h) {
            var x = this._X;
            d.call(this), u[0] = x[0] ^ x[5] >>> 16 ^ x[3] << 16, u[1] = x[2] ^ x[7] >>> 16 ^ x[5] << 16, u[2] = x[4] ^ x[1] >>> 16 ^ x[7] << 16, u[3] = x[6] ^ x[3] >>> 16 ^ x[1] << 16;
            for (var v = 0; v < 4; v++)
              u[v] = (u[v] << 8 | u[v] >>> 24) & 16711935 | (u[v] << 24 | u[v] >>> 8) & 4278255360, a[h + v] ^= u[v];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function d() {
          for (var a = this._X, h = this._C, x = 0; x < 8; x++)
            l[x] = h[x];
          h[0] = h[0] + 1295307597 + this._b | 0, h[1] = h[1] + 3545052371 + (h[0] >>> 0 < l[0] >>> 0 ? 1 : 0) | 0, h[2] = h[2] + 886263092 + (h[1] >>> 0 < l[1] >>> 0 ? 1 : 0) | 0, h[3] = h[3] + 1295307597 + (h[2] >>> 0 < l[2] >>> 0 ? 1 : 0) | 0, h[4] = h[4] + 3545052371 + (h[3] >>> 0 < l[3] >>> 0 ? 1 : 0) | 0, h[5] = h[5] + 886263092 + (h[4] >>> 0 < l[4] >>> 0 ? 1 : 0) | 0, h[6] = h[6] + 1295307597 + (h[5] >>> 0 < l[5] >>> 0 ? 1 : 0) | 0, h[7] = h[7] + 3545052371 + (h[6] >>> 0 < l[6] >>> 0 ? 1 : 0) | 0, this._b = h[7] >>> 0 < l[7] >>> 0 ? 1 : 0;
          for (var x = 0; x < 8; x++) {
            var v = a[x] + h[x], m = v & 65535, B = v >>> 16, _ = ((m * m >>> 17) + m * B >>> 15) + B * B, p = ((v & 4294901760) * v | 0) + ((v & 65535) * v | 0);
            s[x] = _ ^ p;
          }
          a[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, a[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, a[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, a[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, a[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, a[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, a[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, a[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0;
        }
        n.RabbitLegacy = o._createHelper(f);
      }(), t.RabbitLegacy;
    });
  }(Js)), on;
}
(function(e, r) {
  (function(t, n, i) {
    e.exports = n(ye(), hn(), rs(), is(), zt(), as(), qt(), Kn(), si(), ds(), ai(), ps(), bs(), ms(), Gn(), ws(), Ft(), Ue(), Ss(), As(), Os(), Ls(), ci(), Is(), $s(), Hs(), qs(), Us(), Ws(), ui(), Gs(), Xs(), Qs(), ea());
  })(fe, function(t) {
    return t;
  });
})(Zo);
var z0 = {}, ta = {
  get exports() {
    return z0;
  },
  set exports(e) {
    z0 = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(fe, function() {
    var t = 1e3, n = 6e4, i = 36e5, o = "millisecond", c = "second", u = "minute", l = "hour", s = "day", f = "week", d = "month", a = "quarter", h = "year", x = "date", v = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, B = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, _ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(L) {
      var $ = ["th", "st", "nd", "rd"], M = L % 100;
      return "[" + L + ($[(M - 20) % 10] || $[M] || $[0]) + "]";
    } }, p = function(L, $, M) {
      var V = String(L);
      return !V || V.length >= $ ? L : "" + Array($ + 1 - V.length).join(M) + L;
    }, g = { s: p, z: function(L) {
      var $ = -L.utcOffset(), M = Math.abs($), V = Math.floor(M / 60), K = M % 60;
      return ($ <= 0 ? "+" : "-") + p(V, 2, "0") + ":" + p(K, 2, "0");
    }, m: function L($, M) {
      if ($.date() < M.date())
        return -L(M, $);
      var V = 12 * (M.year() - $.year()) + (M.month() - $.month()), K = $.clone().add(V, d), te = M - K < 0, Q = $.clone().add(V + (te ? -1 : 1), d);
      return +(-(V + (M - K) / (te ? K - Q : Q - K)) || 0);
    }, a: function(L) {
      return L < 0 ? Math.ceil(L) || 0 : Math.floor(L);
    }, p: function(L) {
      return { M: d, y: h, w: f, d: s, D: x, h: l, m: u, s: c, ms: o, Q: a }[L] || String(L || "").toLowerCase().replace(/s$/, "");
    }, u: function(L) {
      return L === void 0;
    } }, y = "en", E = {};
    E[y] = _;
    var k = function(L) {
      return L instanceof A;
    }, R = function L($, M, V) {
      var K;
      if (!$)
        return y;
      if (typeof $ == "string") {
        var te = $.toLowerCase();
        E[te] && (K = te), M && (E[te] = M, K = te);
        var Q = $.split("-");
        if (!K && Q.length > 1)
          return L(Q[0]);
      } else {
        var ne = $.name;
        E[ne] = $, K = ne;
      }
      return !V && K && (y = K), K || !V && y;
    }, I = function(L, $) {
      if (k(L))
        return L.clone();
      var M = typeof $ == "object" ? $ : {};
      return M.date = L, M.args = arguments, new A(M);
    }, C = g;
    C.l = R, C.i = k, C.w = function(L, $) {
      return I(L, { locale: $.$L, utc: $.$u, x: $.$x, $offset: $.$offset });
    };
    var A = function() {
      function L(M) {
        this.$L = R(M.locale, null, !0), this.parse(M);
      }
      var $ = L.prototype;
      return $.parse = function(M) {
        this.$d = function(V) {
          var K = V.date, te = V.utc;
          if (K === null)
            return /* @__PURE__ */ new Date(NaN);
          if (C.u(K))
            return /* @__PURE__ */ new Date();
          if (K instanceof Date)
            return new Date(K);
          if (typeof K == "string" && !/Z$/i.test(K)) {
            var Q = K.match(m);
            if (Q) {
              var ne = Q[2] - 1 || 0, z = (Q[7] || "0").substring(0, 3);
              return te ? new Date(Date.UTC(Q[1], ne, Q[3] || 1, Q[4] || 0, Q[5] || 0, Q[6] || 0, z)) : new Date(Q[1], ne, Q[3] || 1, Q[4] || 0, Q[5] || 0, Q[6] || 0, z);
            }
          }
          return new Date(K);
        }(M), this.$x = M.x || {}, this.init();
      }, $.init = function() {
        var M = this.$d;
        this.$y = M.getFullYear(), this.$M = M.getMonth(), this.$D = M.getDate(), this.$W = M.getDay(), this.$H = M.getHours(), this.$m = M.getMinutes(), this.$s = M.getSeconds(), this.$ms = M.getMilliseconds();
      }, $.$utils = function() {
        return C;
      }, $.isValid = function() {
        return this.$d.toString() !== v;
      }, $.isSame = function(M, V) {
        var K = I(M);
        return this.startOf(V) <= K && K <= this.endOf(V);
      }, $.isAfter = function(M, V) {
        return I(M) < this.startOf(V);
      }, $.isBefore = function(M, V) {
        return this.endOf(V) < I(M);
      }, $.$g = function(M, V, K) {
        return C.u(M) ? this[V] : this.set(K, M);
      }, $.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, $.valueOf = function() {
        return this.$d.getTime();
      }, $.startOf = function(M, V) {
        var K = this, te = !!C.u(V) || V, Q = C.p(M), ne = function(ue, Ae) {
          var $e = C.w(K.$u ? Date.UTC(K.$y, Ae, ue) : new Date(K.$y, Ae, ue), K);
          return te ? $e : $e.endOf(s);
        }, z = function(ue, Ae) {
          return C.w(K.toDate()[ue].apply(K.toDate("s"), (te ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Ae)), K);
        }, q = this.$W, F = this.$M, W = this.$D, xe = "set" + (this.$u ? "UTC" : "");
        switch (Q) {
          case h:
            return te ? ne(1, 0) : ne(31, 11);
          case d:
            return te ? ne(1, F) : ne(0, F + 1);
          case f:
            var me = this.$locale().weekStart || 0, Be = (q < me ? q + 7 : q) - me;
            return ne(te ? W - Be : W + (6 - Be), F);
          case s:
          case x:
            return z(xe + "Hours", 0);
          case l:
            return z(xe + "Minutes", 1);
          case u:
            return z(xe + "Seconds", 2);
          case c:
            return z(xe + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, $.endOf = function(M) {
        return this.startOf(M, !1);
      }, $.$set = function(M, V) {
        var K, te = C.p(M), Q = "set" + (this.$u ? "UTC" : ""), ne = (K = {}, K[s] = Q + "Date", K[x] = Q + "Date", K[d] = Q + "Month", K[h] = Q + "FullYear", K[l] = Q + "Hours", K[u] = Q + "Minutes", K[c] = Q + "Seconds", K[o] = Q + "Milliseconds", K)[te], z = te === s ? this.$D + (V - this.$W) : V;
        if (te === d || te === h) {
          var q = this.clone().set(x, 1);
          q.$d[ne](z), q.init(), this.$d = q.set(x, Math.min(this.$D, q.daysInMonth())).$d;
        } else
          ne && this.$d[ne](z);
        return this.init(), this;
      }, $.set = function(M, V) {
        return this.clone().$set(M, V);
      }, $.get = function(M) {
        return this[C.p(M)]();
      }, $.add = function(M, V) {
        var K, te = this;
        M = Number(M);
        var Q = C.p(V), ne = function(F) {
          var W = I(te);
          return C.w(W.date(W.date() + Math.round(F * M)), te);
        };
        if (Q === d)
          return this.set(d, this.$M + M);
        if (Q === h)
          return this.set(h, this.$y + M);
        if (Q === s)
          return ne(1);
        if (Q === f)
          return ne(7);
        var z = (K = {}, K[u] = n, K[l] = i, K[c] = t, K)[Q] || 1, q = this.$d.getTime() + M * z;
        return C.w(q, this);
      }, $.subtract = function(M, V) {
        return this.add(-1 * M, V);
      }, $.format = function(M) {
        var V = this, K = this.$locale();
        if (!this.isValid())
          return K.invalidDate || v;
        var te = M || "YYYY-MM-DDTHH:mm:ssZ", Q = C.z(this), ne = this.$H, z = this.$m, q = this.$M, F = K.weekdays, W = K.months, xe = function(Ae, $e, ct, je) {
          return Ae && (Ae[$e] || Ae(V, te)) || ct[$e].slice(0, je);
        }, me = function(Ae) {
          return C.s(ne % 12 || 12, Ae, "0");
        }, Be = K.meridiem || function(Ae, $e, ct) {
          var je = Ae < 12 ? "AM" : "PM";
          return ct ? je.toLowerCase() : je;
        }, ue = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: q + 1, MM: C.s(q + 1, 2, "0"), MMM: xe(K.monthsShort, q, W, 3), MMMM: xe(W, q), D: this.$D, DD: C.s(this.$D, 2, "0"), d: String(this.$W), dd: xe(K.weekdaysMin, this.$W, F, 2), ddd: xe(K.weekdaysShort, this.$W, F, 3), dddd: F[this.$W], H: String(ne), HH: C.s(ne, 2, "0"), h: me(1), hh: me(2), a: Be(ne, z, !0), A: Be(ne, z, !1), m: String(z), mm: C.s(z, 2, "0"), s: String(this.$s), ss: C.s(this.$s, 2, "0"), SSS: C.s(this.$ms, 3, "0"), Z: Q };
        return te.replace(B, function(Ae, $e) {
          return $e || ue[Ae] || Q.replace(":", "");
        });
      }, $.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, $.diff = function(M, V, K) {
        var te, Q = C.p(V), ne = I(M), z = (ne.utcOffset() - this.utcOffset()) * n, q = this - ne, F = C.m(this, ne);
        return F = (te = {}, te[h] = F / 12, te[d] = F, te[a] = F / 3, te[f] = (q - z) / 6048e5, te[s] = (q - z) / 864e5, te[l] = q / i, te[u] = q / n, te[c] = q / t, te)[Q] || q, K ? F : C.a(F);
      }, $.daysInMonth = function() {
        return this.endOf(d).$D;
      }, $.$locale = function() {
        return E[this.$L];
      }, $.locale = function(M, V) {
        if (!M)
          return this.$L;
        var K = this.clone(), te = R(M, V, !0);
        return te && (K.$L = te), K;
      }, $.clone = function() {
        return C.w(this.$d, this);
      }, $.toDate = function() {
        return new Date(this.valueOf());
      }, $.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, $.toISOString = function() {
        return this.$d.toISOString();
      }, $.toString = function() {
        return this.$d.toUTCString();
      }, L;
    }(), T = A.prototype;
    return I.prototype = T, [["$ms", o], ["$s", c], ["$m", u], ["$H", l], ["$W", s], ["$M", d], ["$y", h], ["$D", x]].forEach(function(L) {
      T[L[1]] = function($) {
        return this.$g($, L[0], L[1]);
      };
    }), I.extend = function(L, $) {
      return L.$i || (L($, A, I), L.$i = !0), I;
    }, I.locale = R, I.isDayjs = k, I.unix = function(L) {
      return I(1e3 * L);
    }, I.en = E[y], I.Ls = E, I.p = {}, I;
  });
})(ta);
var fi = function() {
  if (typeof Map < "u")
    return Map;
  function e(r, t) {
    var n = -1;
    return r.some(function(i, o) {
      return i[0] === t ? (n = o, !0) : !1;
    }), n;
  }
  return (
    /** @class */
    function() {
      function r() {
        this.__entries__ = [];
      }
      return Object.defineProperty(r.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), r.prototype.get = function(t) {
        var n = e(this.__entries__, t), i = this.__entries__[n];
        return i && i[1];
      }, r.prototype.set = function(t, n) {
        var i = e(this.__entries__, t);
        ~i ? this.__entries__[i][1] = n : this.__entries__.push([t, n]);
      }, r.prototype.delete = function(t) {
        var n = this.__entries__, i = e(n, t);
        ~i && n.splice(i, 1);
      }, r.prototype.has = function(t) {
        return !!~e(this.__entries__, t);
      }, r.prototype.clear = function() {
        this.__entries__.splice(0);
      }, r.prototype.forEach = function(t, n) {
        n === void 0 && (n = null);
        for (var i = 0, o = this.__entries__; i < o.length; i++) {
          var c = o[i];
          t.call(n, c[1], c[0]);
        }
      }, r;
    }()
  );
}(), In = typeof window < "u" && typeof document < "u" && window.document === document, sn = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), ra = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(sn) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), na = 2;
function ia(e, r) {
  var t = !1, n = !1, i = 0;
  function o() {
    t && (t = !1, e()), n && u();
  }
  function c() {
    ra(o);
  }
  function u() {
    var l = Date.now();
    if (t) {
      if (l - i < na)
        return;
      n = !0;
    } else
      t = !0, n = !1, setTimeout(c, r);
    i = l;
  }
  return u;
}
var oa = 20, sa = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], aa = typeof MutationObserver < "u", ca = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = ia(this.refresh.bind(this), oa);
    }
    return e.prototype.addObserver = function(r) {
      ~this.observers_.indexOf(r) || this.observers_.push(r), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(r) {
      var t = this.observers_, n = t.indexOf(r);
      ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var r = this.updateObservers_();
      r && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var r = this.observers_.filter(function(t) {
        return t.gatherActive(), t.hasActive();
      });
      return r.forEach(function(t) {
        return t.broadcastActive();
      }), r.length > 0;
    }, e.prototype.connect_ = function() {
      !In || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), aa ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !In || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(r) {
      var t = r.propertyName, n = t === void 0 ? "" : t, i = sa.some(function(o) {
        return !!~n.indexOf(o);
      });
      i && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), li = function(e, r) {
  for (var t = 0, n = Object.keys(r); t < n.length; t++) {
    var i = n[t];
    Object.defineProperty(e, i, {
      value: r[i],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, Gt = function(e) {
  var r = e && e.ownerDocument && e.ownerDocument.defaultView;
  return r || sn;
}, di = vn(0, 0, 0, 0);
function an(e) {
  return parseFloat(e) || 0;
}
function q0(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  return r.reduce(function(n, i) {
    var o = e["border-" + i + "-width"];
    return n + an(o);
  }, 0);
}
function ua(e) {
  for (var r = ["top", "right", "bottom", "left"], t = {}, n = 0, i = r; n < i.length; n++) {
    var o = i[n], c = e["padding-" + o];
    t[o] = an(c);
  }
  return t;
}
function fa(e) {
  var r = e.getBBox();
  return vn(0, 0, r.width, r.height);
}
function la(e) {
  var r = e.clientWidth, t = e.clientHeight;
  if (!r && !t)
    return di;
  var n = Gt(e).getComputedStyle(e), i = ua(n), o = i.left + i.right, c = i.top + i.bottom, u = an(n.width), l = an(n.height);
  if (n.boxSizing === "border-box" && (Math.round(u + o) !== r && (u -= q0(n, "left", "right") + o), Math.round(l + c) !== t && (l -= q0(n, "top", "bottom") + c)), !ha(e)) {
    var s = Math.round(u + o) - r, f = Math.round(l + c) - t;
    Math.abs(s) !== 1 && (u -= s), Math.abs(f) !== 1 && (l -= f);
  }
  return vn(i.left, i.top, u, l);
}
var da = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Gt(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Gt(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function ha(e) {
  return e === Gt(e).document.documentElement;
}
function va(e) {
  return In ? da(e) ? fa(e) : la(e) : di;
}
function pa(e) {
  var r = e.x, t = e.y, n = e.width, i = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, c = Object.create(o.prototype);
  return li(c, {
    x: r,
    y: t,
    width: n,
    height: i,
    top: t,
    right: r + n,
    bottom: i + t,
    left: r
  }), c;
}
function vn(e, r, t, n) {
  return { x: e, y: r, width: t, height: n };
}
var xa = (
  /** @class */
  function() {
    function e(r) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = vn(0, 0, 0, 0), this.target = r;
    }
    return e.prototype.isActive = function() {
      var r = va(this.target);
      return this.contentRect_ = r, r.width !== this.broadcastWidth || r.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var r = this.contentRect_;
      return this.broadcastWidth = r.width, this.broadcastHeight = r.height, r;
    }, e;
  }()
), ba = (
  /** @class */
  function() {
    function e(r, t) {
      var n = pa(t);
      li(this, { target: r, contentRect: n });
    }
    return e;
  }()
), ga = (
  /** @class */
  function() {
    function e(r, t, n) {
      if (this.activeObservations_ = [], this.observations_ = new fi(), typeof r != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = r, this.controller_ = t, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(r) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(r instanceof Gt(r).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var t = this.observations_;
        t.has(r) || (t.set(r, new xa(r)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(r) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(r instanceof Gt(r).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var t = this.observations_;
        t.has(r) && (t.delete(r), t.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var r = this;
      this.clearActive(), this.observations_.forEach(function(t) {
        t.isActive() && r.activeObservations_.push(t);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var r = this.callbackCtx_, t = this.activeObservations_.map(function(n) {
          return new ba(n.target, n.broadcastRect());
        });
        this.callback_.call(r, t, r), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), hi = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new fi(), vi = (
  /** @class */
  function() {
    function e(r) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var t = ca.getInstance(), n = new ga(r, t, this);
      hi.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  vi.prototype[e] = function() {
    var r;
    return (r = hi.get(this))[e].apply(r, arguments);
  };
});
(function() {
  return typeof sn.ResizeObserver < "u" ? sn.ResizeObserver : vi;
})();
ui();
zt();
var F0 = {}, ma = {
  get exports() {
    return F0;
  },
  set exports(e) {
    F0 = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(ye());
  })(fe, function(t) {
    return t.enc.Utf8;
  });
})(ma);
qt();
ci();
var U0 = {}, ya = {
  get exports() {
    return U0;
  },
  set exports(e) {
    U0 = e;
  }
};
(function(e, r) {
  (function(t, n, i) {
    e.exports = n(ye(), Ue());
  })(fe, function(t) {
    return t.pad.Pkcs7;
  });
})(ya);
function _a(e) {
  var r = [], t = "";
  for (t in e)
    r.push(t);
  return r;
}
function V0(e) {
  return e = JSON.stringify(e), !(typeof e != "string" || !/^\{[\s\S]*\}$/.test(e));
}
function wa(e) {
  return e instanceof Array;
}
function ka(e) {
  return Array.prototype.slice.call(e);
}
function ur() {
  if (!(this instanceof ur))
    return new ur();
}
ur.prototype = {
  get: function(e) {
    for (var r = e + "=", t = document.cookie.split(";"), n = 0; n < t.length; n++) {
      for (var i = t[n]; i.charAt(0) == " "; )
        i = i.substring(1, i.length);
      if (i.indexOf(r) == 0)
        return decodeURI(i.substring(r.length, i.length));
    }
    return !1;
  },
  set: function(e, r, t) {
    if (V0(e))
      for (const n in e)
        this.set(n, e[n], r, t);
    else if (typeof e == "string") {
      const n = V0(t) ? t : { expires: t }, i = n.path !== void 0 ? `;path=${n.path};path=/` : ";path=/", o = n.domain ? `;domain=${n.domain}` : "", c = n.secure ? ";secure" : "";
      let u = n.expires !== void 0 ? n.expires : "";
      typeof u == "string" && u !== "" ? u = new Date(u) : typeof u == "number" && (u = new Date(+/* @__PURE__ */ new Date() + 1e3 * 60 * 60 * 24 * u)), u !== "" && "toGMTString" in u && (u = `;expires=${u.toGMTString()}`);
      const l = n.sameSite ? `;SameSite=${n.sameSite}` : "";
      document.cookie = `${e}=${encodeURI(r) + u + i + o + c + l}`;
    }
  },
  remove: function(e) {
    e = wa(e) ? e : ka(arguments);
    for (var r = 0, t = e.length; r < t; r++)
      this.set(e[r], "", -1);
    return e;
  },
  clear: function(e) {
    return e ? this.remove(e) : this.remove(_a(this.all()));
  },
  all: function() {
    if (document.cookie === "")
      return {};
    for (var e = document.cookie.split("; "), r = {}, t = 0, n = e.length; t < n; t++) {
      var i = e[t].split("=");
      r[decodeURI(i[0])] = decodeURI(i[1]);
    }
    return r;
  }
};
for (const e in ur.prototype)
  ur.prototype[e];
var W0 = {}, Ea = {
  get exports() {
    return W0;
  },
  set exports(e) {
    W0 = e;
  }
};
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(e, r) {
  (function(t) {
    e.exports = t();
  })(function() {
    return function t(n, i, o) {
      function c(s, f) {
        if (!i[s]) {
          if (!n[s]) {
            var d = typeof or == "function" && or;
            if (!f && d)
              return d(s, !0);
            if (u)
              return u(s, !0);
            var a = new Error("Cannot find module '" + s + "'");
            throw a.code = "MODULE_NOT_FOUND", a;
          }
          var h = i[s] = { exports: {} };
          n[s][0].call(h.exports, function(x) {
            var v = n[s][1][x];
            return c(v || x);
          }, h, h.exports, t, n, i, o);
        }
        return i[s].exports;
      }
      for (var u = typeof or == "function" && or, l = 0; l < o.length; l++)
        c(o[l]);
      return c;
    }({ 1: [function(t, n, i) {
      (function(o) {
        var c = o.MutationObserver || o.WebKitMutationObserver, u;
        if (c) {
          var l = 0, s = new c(x), f = o.document.createTextNode("");
          s.observe(f, {
            characterData: !0
          }), u = function() {
            f.data = l = ++l % 2;
          };
        } else if (!o.setImmediate && typeof o.MessageChannel < "u") {
          var d = new o.MessageChannel();
          d.port1.onmessage = x, u = function() {
            d.port2.postMessage(0);
          };
        } else
          "document" in o && "onreadystatechange" in o.document.createElement("script") ? u = function() {
            var m = o.document.createElement("script");
            m.onreadystatechange = function() {
              x(), m.onreadystatechange = null, m.parentNode.removeChild(m), m = null;
            }, o.document.documentElement.appendChild(m);
          } : u = function() {
            setTimeout(x, 0);
          };
        var a, h = [];
        function x() {
          a = !0;
          for (var m, B, _ = h.length; _; ) {
            for (B = h, h = [], m = -1; ++m < _; )
              B[m]();
            _ = h.length;
          }
          a = !1;
        }
        n.exports = v;
        function v(m) {
          h.push(m) === 1 && !a && u();
        }
      }).call(this, typeof fe < "u" ? fe : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(t, n, i) {
      var o = t(1);
      function c() {
      }
      var u = {}, l = ["REJECTED"], s = ["FULFILLED"], f = ["PENDING"];
      n.exports = d;
      function d(y) {
        if (typeof y != "function")
          throw new TypeError("resolver must be a function");
        this.state = f, this.queue = [], this.outcome = void 0, y !== c && v(this, y);
      }
      d.prototype.catch = function(y) {
        return this.then(null, y);
      }, d.prototype.then = function(y, E) {
        if (typeof y != "function" && this.state === s || typeof E != "function" && this.state === l)
          return this;
        var k = new this.constructor(c);
        if (this.state !== f) {
          var R = this.state === s ? y : E;
          h(k, R, this.outcome);
        } else
          this.queue.push(new a(k, y, E));
        return k;
      };
      function a(y, E, k) {
        this.promise = y, typeof E == "function" && (this.onFulfilled = E, this.callFulfilled = this.otherCallFulfilled), typeof k == "function" && (this.onRejected = k, this.callRejected = this.otherCallRejected);
      }
      a.prototype.callFulfilled = function(y) {
        u.resolve(this.promise, y);
      }, a.prototype.otherCallFulfilled = function(y) {
        h(this.promise, this.onFulfilled, y);
      }, a.prototype.callRejected = function(y) {
        u.reject(this.promise, y);
      }, a.prototype.otherCallRejected = function(y) {
        h(this.promise, this.onRejected, y);
      };
      function h(y, E, k) {
        o(function() {
          var R;
          try {
            R = E(k);
          } catch (I) {
            return u.reject(y, I);
          }
          R === y ? u.reject(y, new TypeError("Cannot resolve promise with itself")) : u.resolve(y, R);
        });
      }
      u.resolve = function(y, E) {
        var k = m(x, E);
        if (k.status === "error")
          return u.reject(y, k.value);
        var R = k.value;
        if (R)
          v(y, R);
        else {
          y.state = s, y.outcome = E;
          for (var I = -1, C = y.queue.length; ++I < C; )
            y.queue[I].callFulfilled(E);
        }
        return y;
      }, u.reject = function(y, E) {
        y.state = l, y.outcome = E;
        for (var k = -1, R = y.queue.length; ++k < R; )
          y.queue[k].callRejected(E);
        return y;
      };
      function x(y) {
        var E = y && y.then;
        if (y && (typeof y == "object" || typeof y == "function") && typeof E == "function")
          return function() {
            E.apply(y, arguments);
          };
      }
      function v(y, E) {
        var k = !1;
        function R(T) {
          k || (k = !0, u.reject(y, T));
        }
        function I(T) {
          k || (k = !0, u.resolve(y, T));
        }
        function C() {
          E(I, R);
        }
        var A = m(C);
        A.status === "error" && R(A.value);
      }
      function m(y, E) {
        var k = {};
        try {
          k.value = y(E), k.status = "success";
        } catch (R) {
          k.status = "error", k.value = R;
        }
        return k;
      }
      d.resolve = B;
      function B(y) {
        return y instanceof this ? y : u.resolve(new this(c), y);
      }
      d.reject = _;
      function _(y) {
        var E = new this(c);
        return u.reject(E, y);
      }
      d.all = p;
      function p(y) {
        var E = this;
        if (Object.prototype.toString.call(y) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var k = y.length, R = !1;
        if (!k)
          return this.resolve([]);
        for (var I = new Array(k), C = 0, A = -1, T = new this(c); ++A < k; )
          L(y[A], A);
        return T;
        function L($, M) {
          E.resolve($).then(V, function(K) {
            R || (R = !0, u.reject(T, K));
          });
          function V(K) {
            I[M] = K, ++C === k && !R && (R = !0, u.resolve(T, I));
          }
        }
      }
      d.race = g;
      function g(y) {
        var E = this;
        if (Object.prototype.toString.call(y) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var k = y.length, R = !1;
        if (!k)
          return this.resolve([]);
        for (var I = -1, C = new this(c); ++I < k; )
          A(y[I]);
        return C;
        function A(T) {
          E.resolve(T).then(function(L) {
            R || (R = !0, u.resolve(C, L));
          }, function(L) {
            R || (R = !0, u.reject(C, L));
          });
        }
      }
    }, { 1: 1 }], 3: [function(t, n, i) {
      (function(o) {
        typeof o.Promise != "function" && (o.Promise = t(2));
      }).call(this, typeof fe < "u" ? fe : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(t, n, i) {
      var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(b) {
        return typeof b;
      } : function(b) {
        return b && typeof Symbol == "function" && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b;
      };
      function c(b, S) {
        if (!(b instanceof S))
          throw new TypeError("Cannot call a class as a function");
      }
      function u() {
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
      var l = u();
      function s() {
        try {
          if (!l || !l.open)
            return !1;
          var b = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), S = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!b || S) && typeof indexedDB < "u" && // some outdated implementations of IDB that appear on Samsung
          // and HTC Android devices <4.4 are missing IDBKeyRange
          // See: https://github.com/mozilla/localForage/issues/128
          // See: https://github.com/mozilla/localForage/issues/272
          typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function f(b, S) {
        b = b || [], S = S || {};
        try {
          return new Blob(b, S);
        } catch (O) {
          if (O.name !== "TypeError")
            throw O;
          for (var w = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, D = new w(), N = 0; N < b.length; N += 1)
            D.append(b[N]);
          return D.getBlob(S.type);
        }
      }
      typeof Promise > "u" && t(3);
      var d = Promise;
      function a(b, S) {
        S && b.then(function(w) {
          S(null, w);
        }, function(w) {
          S(w);
        });
      }
      function h(b, S, w) {
        typeof S == "function" && b.then(S), typeof w == "function" && b.catch(w);
      }
      function x(b) {
        return typeof b != "string" && (console.warn(b + " used as a key, but it is not a string."), b = String(b)), b;
      }
      function v() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var m = "local-forage-detect-blob-support", B = void 0, _ = {}, p = Object.prototype.toString, g = "readonly", y = "readwrite";
      function E(b) {
        for (var S = b.length, w = new ArrayBuffer(S), D = new Uint8Array(w), N = 0; N < S; N++)
          D[N] = b.charCodeAt(N);
        return w;
      }
      function k(b) {
        return new d(function(S) {
          var w = b.transaction(m, y), D = f([""]);
          w.objectStore(m).put(D, "key"), w.onabort = function(N) {
            N.preventDefault(), N.stopPropagation(), S(!1);
          }, w.oncomplete = function() {
            var N = navigator.userAgent.match(/Chrome\/(\d+)/), O = navigator.userAgent.match(/Edge\//);
            S(O || !N || parseInt(N[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function R(b) {
        return typeof B == "boolean" ? d.resolve(B) : k(b).then(function(S) {
          return B = S, B;
        });
      }
      function I(b) {
        var S = _[b.name], w = {};
        w.promise = new d(function(D, N) {
          w.resolve = D, w.reject = N;
        }), S.deferredOperations.push(w), S.dbReady ? S.dbReady = S.dbReady.then(function() {
          return w.promise;
        }) : S.dbReady = w.promise;
      }
      function C(b) {
        var S = _[b.name], w = S.deferredOperations.pop();
        if (w)
          return w.resolve(), w.promise;
      }
      function A(b, S) {
        var w = _[b.name], D = w.deferredOperations.pop();
        if (D)
          return D.reject(S), D.promise;
      }
      function T(b, S) {
        return new d(function(w, D) {
          if (_[b.name] = _[b.name] || q(), b.db)
            if (S)
              I(b), b.db.close();
            else
              return w(b.db);
          var N = [b.name];
          S && N.push(b.version);
          var O = l.open.apply(l, N);
          S && (O.onupgradeneeded = function(U) {
            var G = O.result;
            try {
              G.createObjectStore(b.storeName), U.oldVersion <= 1 && G.createObjectStore(m);
            } catch (Z) {
              if (Z.name === "ConstraintError")
                console.warn('The database "' + b.name + '" has been upgraded from version ' + U.oldVersion + " to version " + U.newVersion + ', but the storage "' + b.storeName + '" already exists.');
              else
                throw Z;
            }
          }), O.onerror = function(U) {
            U.preventDefault(), D(O.error);
          }, O.onsuccess = function() {
            var U = O.result;
            U.onversionchange = function(G) {
              G.target.close();
            }, w(U), C(b);
          };
        });
      }
      function L(b) {
        return T(b, !1);
      }
      function $(b) {
        return T(b, !0);
      }
      function M(b, S) {
        if (!b.db)
          return !0;
        var w = !b.db.objectStoreNames.contains(b.storeName), D = b.version < b.db.version, N = b.version > b.db.version;
        if (D && (b.version !== S && console.warn('The database "' + b.name + `" can't be downgraded from version ` + b.db.version + " to version " + b.version + "."), b.version = b.db.version), N || w) {
          if (w) {
            var O = b.db.version + 1;
            O > b.version && (b.version = O);
          }
          return !0;
        }
        return !1;
      }
      function V(b) {
        return new d(function(S, w) {
          var D = new FileReader();
          D.onerror = w, D.onloadend = function(N) {
            var O = btoa(N.target.result || "");
            S({
              __local_forage_encoded_blob: !0,
              data: O,
              type: b.type
            });
          }, D.readAsBinaryString(b);
        });
      }
      function K(b) {
        var S = E(atob(b.data));
        return f([S], { type: b.type });
      }
      function te(b) {
        return b && b.__local_forage_encoded_blob;
      }
      function Q(b) {
        var S = this, w = S._initReady().then(function() {
          var D = _[S._dbInfo.name];
          if (D && D.dbReady)
            return D.dbReady;
        });
        return h(w, b, b), w;
      }
      function ne(b) {
        I(b);
        for (var S = _[b.name], w = S.forages, D = 0; D < w.length; D++) {
          var N = w[D];
          N._dbInfo.db && (N._dbInfo.db.close(), N._dbInfo.db = null);
        }
        return b.db = null, L(b).then(function(O) {
          return b.db = O, M(b) ? $(b) : O;
        }).then(function(O) {
          b.db = S.db = O;
          for (var U = 0; U < w.length; U++)
            w[U]._dbInfo.db = O;
        }).catch(function(O) {
          throw A(b, O), O;
        });
      }
      function z(b, S, w, D) {
        D === void 0 && (D = 1);
        try {
          var N = b.db.transaction(b.storeName, S);
          w(null, N);
        } catch (O) {
          if (D > 0 && (!b.db || O.name === "InvalidStateError" || O.name === "NotFoundError"))
            return d.resolve().then(function() {
              if (!b.db || O.name === "NotFoundError" && !b.db.objectStoreNames.contains(b.storeName) && b.version <= b.db.version)
                return b.db && (b.version = b.db.version + 1), $(b);
            }).then(function() {
              return ne(b).then(function() {
                z(b, S, w, D - 1);
              });
            }).catch(w);
          w(O);
        }
      }
      function q() {
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
      function F(b) {
        var S = this, w = {
          db: null
        };
        if (b)
          for (var D in b)
            w[D] = b[D];
        var N = _[w.name];
        N || (N = q(), _[w.name] = N), N.forages.push(S), S._initReady || (S._initReady = S.ready, S.ready = Q);
        var O = [];
        function U() {
          return d.resolve();
        }
        for (var G = 0; G < N.forages.length; G++) {
          var Z = N.forages[G];
          Z !== S && O.push(Z._initReady().catch(U));
        }
        var j = N.forages.slice(0);
        return d.all(O).then(function() {
          return w.db = N.db, L(w);
        }).then(function(J) {
          return w.db = J, M(w, S._defaultConfig.version) ? $(w) : J;
        }).then(function(J) {
          w.db = N.db = J, S._dbInfo = w;
          for (var ie = 0; ie < j.length; ie++) {
            var ge = j[ie];
            ge !== S && (ge._dbInfo.db = w.db, ge._dbInfo.version = w.version);
          }
        });
      }
      function W(b, S) {
        var w = this;
        b = x(b);
        var D = new d(function(N, O) {
          w.ready().then(function() {
            z(w._dbInfo, g, function(U, G) {
              if (U)
                return O(U);
              try {
                var Z = G.objectStore(w._dbInfo.storeName), j = Z.get(b);
                j.onsuccess = function() {
                  var J = j.result;
                  J === void 0 && (J = null), te(J) && (J = K(J)), N(J);
                }, j.onerror = function() {
                  O(j.error);
                };
              } catch (J) {
                O(J);
              }
            });
          }).catch(O);
        });
        return a(D, S), D;
      }
      function xe(b, S) {
        var w = this, D = new d(function(N, O) {
          w.ready().then(function() {
            z(w._dbInfo, g, function(U, G) {
              if (U)
                return O(U);
              try {
                var Z = G.objectStore(w._dbInfo.storeName), j = Z.openCursor(), J = 1;
                j.onsuccess = function() {
                  var ie = j.result;
                  if (ie) {
                    var ge = ie.value;
                    te(ge) && (ge = K(ge));
                    var ke = b(ge, ie.key, J++);
                    ke !== void 0 ? N(ke) : ie.continue();
                  } else
                    N();
                }, j.onerror = function() {
                  O(j.error);
                };
              } catch (ie) {
                O(ie);
              }
            });
          }).catch(O);
        });
        return a(D, S), D;
      }
      function me(b, S, w) {
        var D = this;
        b = x(b);
        var N = new d(function(O, U) {
          var G;
          D.ready().then(function() {
            return G = D._dbInfo, p.call(S) === "[object Blob]" ? R(G.db).then(function(Z) {
              return Z ? S : V(S);
            }) : S;
          }).then(function(Z) {
            z(D._dbInfo, y, function(j, J) {
              if (j)
                return U(j);
              try {
                var ie = J.objectStore(D._dbInfo.storeName);
                Z === null && (Z = void 0);
                var ge = ie.put(Z, b);
                J.oncomplete = function() {
                  Z === void 0 && (Z = null), O(Z);
                }, J.onabort = J.onerror = function() {
                  var ke = ge.error ? ge.error : ge.transaction.error;
                  U(ke);
                };
              } catch (ke) {
                U(ke);
              }
            });
          }).catch(U);
        });
        return a(N, w), N;
      }
      function Be(b, S) {
        var w = this;
        b = x(b);
        var D = new d(function(N, O) {
          w.ready().then(function() {
            z(w._dbInfo, y, function(U, G) {
              if (U)
                return O(U);
              try {
                var Z = G.objectStore(w._dbInfo.storeName), j = Z.delete(b);
                G.oncomplete = function() {
                  N();
                }, G.onerror = function() {
                  O(j.error);
                }, G.onabort = function() {
                  var J = j.error ? j.error : j.transaction.error;
                  O(J);
                };
              } catch (J) {
                O(J);
              }
            });
          }).catch(O);
        });
        return a(D, S), D;
      }
      function ue(b) {
        var S = this, w = new d(function(D, N) {
          S.ready().then(function() {
            z(S._dbInfo, y, function(O, U) {
              if (O)
                return N(O);
              try {
                var G = U.objectStore(S._dbInfo.storeName), Z = G.clear();
                U.oncomplete = function() {
                  D();
                }, U.onabort = U.onerror = function() {
                  var j = Z.error ? Z.error : Z.transaction.error;
                  N(j);
                };
              } catch (j) {
                N(j);
              }
            });
          }).catch(N);
        });
        return a(w, b), w;
      }
      function Ae(b) {
        var S = this, w = new d(function(D, N) {
          S.ready().then(function() {
            z(S._dbInfo, g, function(O, U) {
              if (O)
                return N(O);
              try {
                var G = U.objectStore(S._dbInfo.storeName), Z = G.count();
                Z.onsuccess = function() {
                  D(Z.result);
                }, Z.onerror = function() {
                  N(Z.error);
                };
              } catch (j) {
                N(j);
              }
            });
          }).catch(N);
        });
        return a(w, b), w;
      }
      function $e(b, S) {
        var w = this, D = new d(function(N, O) {
          if (b < 0) {
            N(null);
            return;
          }
          w.ready().then(function() {
            z(w._dbInfo, g, function(U, G) {
              if (U)
                return O(U);
              try {
                var Z = G.objectStore(w._dbInfo.storeName), j = !1, J = Z.openKeyCursor();
                J.onsuccess = function() {
                  var ie = J.result;
                  if (!ie) {
                    N(null);
                    return;
                  }
                  b === 0 || j ? N(ie.key) : (j = !0, ie.advance(b));
                }, J.onerror = function() {
                  O(J.error);
                };
              } catch (ie) {
                O(ie);
              }
            });
          }).catch(O);
        });
        return a(D, S), D;
      }
      function ct(b) {
        var S = this, w = new d(function(D, N) {
          S.ready().then(function() {
            z(S._dbInfo, g, function(O, U) {
              if (O)
                return N(O);
              try {
                var G = U.objectStore(S._dbInfo.storeName), Z = G.openKeyCursor(), j = [];
                Z.onsuccess = function() {
                  var J = Z.result;
                  if (!J) {
                    D(j);
                    return;
                  }
                  j.push(J.key), J.continue();
                }, Z.onerror = function() {
                  N(Z.error);
                };
              } catch (J) {
                N(J);
              }
            });
          }).catch(N);
        });
        return a(w, b), w;
      }
      function je(b, S) {
        S = v.apply(this, arguments);
        var w = this.config();
        b = typeof b != "function" && b || {}, b.name || (b.name = b.name || w.name, b.storeName = b.storeName || w.storeName);
        var D = this, N;
        if (!b.name)
          N = d.reject("Invalid arguments");
        else {
          var O = b.name === w.name && D._dbInfo.db, U = O ? d.resolve(D._dbInfo.db) : L(b).then(function(G) {
            var Z = _[b.name], j = Z.forages;
            Z.db = G;
            for (var J = 0; J < j.length; J++)
              j[J]._dbInfo.db = G;
            return G;
          });
          b.storeName ? N = U.then(function(G) {
            if (G.objectStoreNames.contains(b.storeName)) {
              var Z = G.version + 1;
              I(b);
              var j = _[b.name], J = j.forages;
              G.close();
              for (var ie = 0; ie < J.length; ie++) {
                var ge = J[ie];
                ge._dbInfo.db = null, ge._dbInfo.version = Z;
              }
              var ke = new d(function(Ce, Ie) {
                var Le = l.open(b.name, Z);
                Le.onerror = function(it) {
                  var er = Le.result;
                  er.close(), Ie(it);
                }, Le.onupgradeneeded = function() {
                  var it = Le.result;
                  it.deleteObjectStore(b.storeName);
                }, Le.onsuccess = function() {
                  var it = Le.result;
                  it.close(), Ce(it);
                };
              });
              return ke.then(function(Ce) {
                j.db = Ce;
                for (var Ie = 0; Ie < J.length; Ie++) {
                  var Le = J[Ie];
                  Le._dbInfo.db = Ce, C(Le._dbInfo);
                }
              }).catch(function(Ce) {
                throw (A(b, Ce) || d.resolve()).catch(function() {
                }), Ce;
              });
            }
          }) : N = U.then(function(G) {
            I(b);
            var Z = _[b.name], j = Z.forages;
            G.close();
            for (var J = 0; J < j.length; J++) {
              var ie = j[J];
              ie._dbInfo.db = null;
            }
            var ge = new d(function(ke, Ce) {
              var Ie = l.deleteDatabase(b.name);
              Ie.onerror = function() {
                var Le = Ie.result;
                Le && Le.close(), Ce(Ie.error);
              }, Ie.onblocked = function() {
                console.warn('dropInstance blocked for database "' + b.name + '" until all open connections are closed');
              }, Ie.onsuccess = function() {
                var Le = Ie.result;
                Le && Le.close(), ke(Le);
              };
            });
            return ge.then(function(ke) {
              Z.db = ke;
              for (var Ce = 0; Ce < j.length; Ce++) {
                var Ie = j[Ce];
                C(Ie._dbInfo);
              }
            }).catch(function(ke) {
              throw (A(b, ke) || d.resolve()).catch(function() {
              }), ke;
            });
          });
        }
        return a(N, S), N;
      }
      var ze = {
        _driver: "asyncStorage",
        _initStorage: F,
        _support: s(),
        iterate: xe,
        getItem: W,
        setItem: me,
        removeItem: Be,
        clear: ue,
        length: Ae,
        key: $e,
        keys: ct,
        dropInstance: je
      };
      function Oe() {
        return typeof openDatabase == "function";
      }
      var Ne = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", kt = "~~local_forage_type~", xt = /^~~local_forage_type~([^~]+)~/, tt = "__lfsc__:", Et = tt.length, rt = "arbf", Me = "blob", qe = "si08", Ze = "ui08", Ct = "uic8", St = "si16", ut = "si32", H = "ur16", X = "ui32", P = "fl32", oe = "fl64", we = Et + rt.length, Fe = Object.prototype.toString;
      function ft(b) {
        var S = b.length * 0.75, w = b.length, D, N = 0, O, U, G, Z;
        b[b.length - 1] === "=" && (S--, b[b.length - 2] === "=" && S--);
        var j = new ArrayBuffer(S), J = new Uint8Array(j);
        for (D = 0; D < w; D += 4)
          O = Ne.indexOf(b[D]), U = Ne.indexOf(b[D + 1]), G = Ne.indexOf(b[D + 2]), Z = Ne.indexOf(b[D + 3]), J[N++] = O << 2 | U >> 4, J[N++] = (U & 15) << 4 | G >> 2, J[N++] = (G & 3) << 6 | Z & 63;
        return j;
      }
      function nt(b) {
        var S = new Uint8Array(b), w = "", D;
        for (D = 0; D < S.length; D += 3)
          w += Ne[S[D] >> 2], w += Ne[(S[D] & 3) << 4 | S[D + 1] >> 4], w += Ne[(S[D + 1] & 15) << 2 | S[D + 2] >> 6], w += Ne[S[D + 2] & 63];
        return S.length % 3 === 2 ? w = w.substring(0, w.length - 1) + "=" : S.length % 3 === 1 && (w = w.substring(0, w.length - 2) + "=="), w;
      }
      function Pt(b, S) {
        var w = "";
        if (b && (w = Fe.call(b)), b && (w === "[object ArrayBuffer]" || b.buffer && Fe.call(b.buffer) === "[object ArrayBuffer]")) {
          var D, N = tt;
          b instanceof ArrayBuffer ? (D = b, N += rt) : (D = b.buffer, w === "[object Int8Array]" ? N += qe : w === "[object Uint8Array]" ? N += Ze : w === "[object Uint8ClampedArray]" ? N += Ct : w === "[object Int16Array]" ? N += St : w === "[object Uint16Array]" ? N += H : w === "[object Int32Array]" ? N += ut : w === "[object Uint32Array]" ? N += X : w === "[object Float32Array]" ? N += P : w === "[object Float64Array]" ? N += oe : S(new Error("Failed to get type for BinaryArray"))), S(N + nt(D));
        } else if (w === "[object Blob]") {
          var O = new FileReader();
          O.onload = function() {
            var U = kt + b.type + "~" + nt(this.result);
            S(tt + Me + U);
          }, O.readAsArrayBuffer(b);
        } else
          try {
            S(JSON.stringify(b));
          } catch (U) {
            console.error("Couldn't convert value into a JSON string: ", b), S(null, U);
          }
      }
      function Te(b) {
        if (b.substring(0, Et) !== tt)
          return JSON.parse(b);
        var S = b.substring(we), w = b.substring(Et, we), D;
        if (w === Me && xt.test(S)) {
          var N = S.match(xt);
          D = N[1], S = S.substring(N[0].length);
        }
        var O = ft(S);
        switch (w) {
          case rt:
            return O;
          case Me:
            return f([O], { type: D });
          case qe:
            return new Int8Array(O);
          case Ze:
            return new Uint8Array(O);
          case Ct:
            return new Uint8ClampedArray(O);
          case St:
            return new Int16Array(O);
          case H:
            return new Uint16Array(O);
          case ut:
            return new Int32Array(O);
          case X:
            return new Uint32Array(O);
          case P:
            return new Float32Array(O);
          case oe:
            return new Float64Array(O);
          default:
            throw new Error("Unkown type: " + w);
        }
      }
      var Ve = {
        serialize: Pt,
        deserialize: Te,
        stringToBuffer: ft,
        bufferToString: nt
      };
      function jt(b, S, w, D) {
        b.executeSql("CREATE TABLE IF NOT EXISTS " + S.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], w, D);
      }
      function mn(b) {
        var S = this, w = {
          db: null
        };
        if (b)
          for (var D in b)
            w[D] = typeof b[D] != "string" ? b[D].toString() : b[D];
        var N = new d(function(O, U) {
          try {
            w.db = openDatabase(w.name, String(w.version), w.description, w.size);
          } catch (G) {
            return U(G);
          }
          w.db.transaction(function(G) {
            jt(G, w, function() {
              S._dbInfo = w, O();
            }, function(Z, j) {
              U(j);
            });
          }, U);
        });
        return w.serializer = Ve, N;
      }
      function lt(b, S, w, D, N, O) {
        b.executeSql(w, D, N, function(U, G) {
          G.code === G.SYNTAX_ERR ? U.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [S.storeName], function(Z, j) {
            j.rows.length ? O(Z, G) : jt(Z, S, function() {
              Z.executeSql(w, D, N, O);
            }, O);
          }, O) : O(U, G);
        }, O);
      }
      function yn(b, S) {
        var w = this;
        b = x(b);
        var D = new d(function(N, O) {
          w.ready().then(function() {
            var U = w._dbInfo;
            U.db.transaction(function(G) {
              lt(G, U, "SELECT * FROM " + U.storeName + " WHERE key = ? LIMIT 1", [b], function(Z, j) {
                var J = j.rows.length ? j.rows.item(0).value : null;
                J && (J = U.serializer.deserialize(J)), N(J);
              }, function(Z, j) {
                O(j);
              });
            });
          }).catch(O);
        });
        return a(D, S), D;
      }
      function dr(b, S) {
        var w = this, D = new d(function(N, O) {
          w.ready().then(function() {
            var U = w._dbInfo;
            U.db.transaction(function(G) {
              lt(G, U, "SELECT * FROM " + U.storeName, [], function(Z, j) {
                for (var J = j.rows, ie = J.length, ge = 0; ge < ie; ge++) {
                  var ke = J.item(ge), Ce = ke.value;
                  if (Ce && (Ce = U.serializer.deserialize(Ce)), Ce = b(Ce, ke.key, ge + 1), Ce !== void 0) {
                    N(Ce);
                    return;
                  }
                }
                N();
              }, function(Z, j) {
                O(j);
              });
            });
          }).catch(O);
        });
        return a(D, S), D;
      }
      function hr(b, S, w, D) {
        var N = this;
        b = x(b);
        var O = new d(function(U, G) {
          N.ready().then(function() {
            S === void 0 && (S = null);
            var Z = S, j = N._dbInfo;
            j.serializer.serialize(S, function(J, ie) {
              ie ? G(ie) : j.db.transaction(function(ge) {
                lt(ge, j, "INSERT OR REPLACE INTO " + j.storeName + " (key, value) VALUES (?, ?)", [b, J], function() {
                  U(Z);
                }, function(ke, Ce) {
                  G(Ce);
                });
              }, function(ge) {
                if (ge.code === ge.QUOTA_ERR) {
                  if (D > 0) {
                    U(hr.apply(N, [b, Z, w, D - 1]));
                    return;
                  }
                  G(ge);
                }
              });
            });
          }).catch(G);
        });
        return a(O, w), O;
      }
      function _n(b, S, w) {
        return hr.apply(this, [b, S, w, 1]);
      }
      function wn(b, S) {
        var w = this;
        b = x(b);
        var D = new d(function(N, O) {
          w.ready().then(function() {
            var U = w._dbInfo;
            U.db.transaction(function(G) {
              lt(G, U, "DELETE FROM " + U.storeName + " WHERE key = ?", [b], function() {
                N();
              }, function(Z, j) {
                O(j);
              });
            });
          }).catch(O);
        });
        return a(D, S), D;
      }
      function vr(b) {
        var S = this, w = new d(function(D, N) {
          S.ready().then(function() {
            var O = S._dbInfo;
            O.db.transaction(function(U) {
              lt(U, O, "DELETE FROM " + O.storeName, [], function() {
                D();
              }, function(G, Z) {
                N(Z);
              });
            });
          }).catch(N);
        });
        return a(w, b), w;
      }
      function kn(b) {
        var S = this, w = new d(function(D, N) {
          S.ready().then(function() {
            var O = S._dbInfo;
            O.db.transaction(function(U) {
              lt(U, O, "SELECT COUNT(key) as c FROM " + O.storeName, [], function(G, Z) {
                var j = Z.rows.item(0).c;
                D(j);
              }, function(G, Z) {
                N(Z);
              });
            });
          }).catch(N);
        });
        return a(w, b), w;
      }
      function En(b, S) {
        var w = this, D = new d(function(N, O) {
          w.ready().then(function() {
            var U = w._dbInfo;
            U.db.transaction(function(G) {
              lt(G, U, "SELECT key FROM " + U.storeName + " WHERE id = ? LIMIT 1", [b + 1], function(Z, j) {
                var J = j.rows.length ? j.rows.item(0).key : null;
                N(J);
              }, function(Z, j) {
                O(j);
              });
            });
          }).catch(O);
        });
        return a(D, S), D;
      }
      function pr(b) {
        var S = this, w = new d(function(D, N) {
          S.ready().then(function() {
            var O = S._dbInfo;
            O.db.transaction(function(U) {
              lt(U, O, "SELECT key FROM " + O.storeName, [], function(G, Z) {
                for (var j = [], J = 0; J < Z.rows.length; J++)
                  j.push(Z.rows.item(J).key);
                D(j);
              }, function(G, Z) {
                N(Z);
              });
            });
          }).catch(N);
        });
        return a(w, b), w;
      }
      function Cn(b) {
        return new d(function(S, w) {
          b.transaction(function(D) {
            D.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(N, O) {
              for (var U = [], G = 0; G < O.rows.length; G++)
                U.push(O.rows.item(G).name);
              S({
                db: b,
                storeNames: U
              });
            }, function(N, O) {
              w(O);
            });
          }, function(D) {
            w(D);
          });
        });
      }
      function xr(b, S) {
        S = v.apply(this, arguments);
        var w = this.config();
        b = typeof b != "function" && b || {}, b.name || (b.name = b.name || w.name, b.storeName = b.storeName || w.storeName);
        var D = this, N;
        return b.name ? N = new d(function(O) {
          var U;
          b.name === w.name ? U = D._dbInfo.db : U = openDatabase(b.name, "", "", 0), b.storeName ? O({
            db: U,
            storeNames: [b.storeName]
          }) : O(Cn(U));
        }).then(function(O) {
          return new d(function(U, G) {
            O.db.transaction(function(Z) {
              function j(ke) {
                return new d(function(Ce, Ie) {
                  Z.executeSql("DROP TABLE IF EXISTS " + ke, [], function() {
                    Ce();
                  }, function(Le, it) {
                    Ie(it);
                  });
                });
              }
              for (var J = [], ie = 0, ge = O.storeNames.length; ie < ge; ie++)
                J.push(j(O.storeNames[ie]));
              d.all(J).then(function() {
                U();
              }).catch(function(ke) {
                G(ke);
              });
            }, function(Z) {
              G(Z);
            });
          });
        }) : N = d.reject("Invalid arguments"), a(N, S), N;
      }
      var Xe = {
        _driver: "webSQLStorage",
        _initStorage: mn,
        _support: Oe(),
        iterate: dr,
        getItem: yn,
        setItem: _n,
        removeItem: wn,
        clear: vr,
        length: kn,
        key: En,
        keys: pr,
        dropInstance: xr
      };
      function bt() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function Qt(b, S) {
        var w = b.name + "/";
        return b.storeName !== S.storeName && (w += b.storeName + "/"), w;
      }
      function Sn() {
        var b = "_localforage_support_test";
        try {
          return localStorage.setItem(b, !0), localStorage.removeItem(b), !1;
        } catch {
          return !0;
        }
      }
      function Ui() {
        return !Sn() || localStorage.length > 0;
      }
      function Vi(b) {
        var S = this, w = {};
        if (b)
          for (var D in b)
            w[D] = b[D];
        return w.keyPrefix = Qt(b, S._defaultConfig), Ui() ? (S._dbInfo = w, w.serializer = Ve, d.resolve()) : d.reject();
      }
      function Wi(b) {
        var S = this, w = S.ready().then(function() {
          for (var D = S._dbInfo.keyPrefix, N = localStorage.length - 1; N >= 0; N--) {
            var O = localStorage.key(N);
            O.indexOf(D) === 0 && localStorage.removeItem(O);
          }
        });
        return a(w, b), w;
      }
      function Yi(b, S) {
        var w = this;
        b = x(b);
        var D = w.ready().then(function() {
          var N = w._dbInfo, O = localStorage.getItem(N.keyPrefix + b);
          return O && (O = N.serializer.deserialize(O)), O;
        });
        return a(D, S), D;
      }
      function Ki(b, S) {
        var w = this, D = w.ready().then(function() {
          for (var N = w._dbInfo, O = N.keyPrefix, U = O.length, G = localStorage.length, Z = 1, j = 0; j < G; j++) {
            var J = localStorage.key(j);
            if (J.indexOf(O) === 0) {
              var ie = localStorage.getItem(J);
              if (ie && (ie = N.serializer.deserialize(ie)), ie = b(ie, J.substring(U), Z++), ie !== void 0)
                return ie;
            }
          }
        });
        return a(D, S), D;
      }
      function Gi(b, S) {
        var w = this, D = w.ready().then(function() {
          var N = w._dbInfo, O;
          try {
            O = localStorage.key(b);
          } catch {
            O = null;
          }
          return O && (O = O.substring(N.keyPrefix.length)), O;
        });
        return a(D, S), D;
      }
      function Zi(b) {
        var S = this, w = S.ready().then(function() {
          for (var D = S._dbInfo, N = localStorage.length, O = [], U = 0; U < N; U++) {
            var G = localStorage.key(U);
            G.indexOf(D.keyPrefix) === 0 && O.push(G.substring(D.keyPrefix.length));
          }
          return O;
        });
        return a(w, b), w;
      }
      function Xi(b) {
        var S = this, w = S.keys().then(function(D) {
          return D.length;
        });
        return a(w, b), w;
      }
      function ji(b, S) {
        var w = this;
        b = x(b);
        var D = w.ready().then(function() {
          var N = w._dbInfo;
          localStorage.removeItem(N.keyPrefix + b);
        });
        return a(D, S), D;
      }
      function Qi(b, S, w) {
        var D = this;
        b = x(b);
        var N = D.ready().then(function() {
          S === void 0 && (S = null);
          var O = S;
          return new d(function(U, G) {
            var Z = D._dbInfo;
            Z.serializer.serialize(S, function(j, J) {
              if (J)
                G(J);
              else
                try {
                  localStorage.setItem(Z.keyPrefix + b, j), U(O);
                } catch (ie) {
                  (ie.name === "QuotaExceededError" || ie.name === "NS_ERROR_DOM_QUOTA_REACHED") && G(ie), G(ie);
                }
            });
          });
        });
        return a(N, w), N;
      }
      function Ji(b, S) {
        if (S = v.apply(this, arguments), b = typeof b != "function" && b || {}, !b.name) {
          var w = this.config();
          b.name = b.name || w.name, b.storeName = b.storeName || w.storeName;
        }
        var D = this, N;
        return b.name ? N = new d(function(O) {
          b.storeName ? O(Qt(b, D._defaultConfig)) : O(b.name + "/");
        }).then(function(O) {
          for (var U = localStorage.length - 1; U >= 0; U--) {
            var G = localStorage.key(U);
            G.indexOf(O) === 0 && localStorage.removeItem(G);
          }
        }) : N = d.reject("Invalid arguments"), a(N, S), N;
      }
      var eo = {
        _driver: "localStorageWrapper",
        _initStorage: Vi,
        _support: bt(),
        iterate: Ki,
        getItem: Yi,
        setItem: Qi,
        removeItem: ji,
        clear: Wi,
        length: Xi,
        key: Gi,
        keys: Zi,
        dropInstance: Ji
      }, to = function(S, w) {
        return S === w || typeof S == "number" && typeof w == "number" && isNaN(S) && isNaN(w);
      }, ro = function(S, w) {
        for (var D = S.length, N = 0; N < D; ) {
          if (to(S[N], w))
            return !0;
          N++;
        }
        return !1;
      }, Qn = Array.isArray || function(b) {
        return Object.prototype.toString.call(b) === "[object Array]";
      }, Jt = {}, Jn = {}, Ut = {
        INDEXEDDB: ze,
        WEBSQL: Xe,
        LOCALSTORAGE: eo
      }, no = [Ut.INDEXEDDB._driver, Ut.WEBSQL._driver, Ut.LOCALSTORAGE._driver], br = ["dropInstance"], Bn = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(br), io = {
        description: "",
        driver: no.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function oo(b, S) {
        b[S] = function() {
          var w = arguments;
          return b.ready().then(function() {
            return b[S].apply(b, w);
          });
        };
      }
      function An() {
        for (var b = 1; b < arguments.length; b++) {
          var S = arguments[b];
          if (S)
            for (var w in S)
              S.hasOwnProperty(w) && (Qn(S[w]) ? arguments[0][w] = S[w].slice() : arguments[0][w] = S[w]);
        }
        return arguments[0];
      }
      var so = function() {
        function b(S) {
          c(this, b);
          for (var w in Ut)
            if (Ut.hasOwnProperty(w)) {
              var D = Ut[w], N = D._driver;
              this[w] = N, Jt[N] || this.defineDriver(D);
            }
          this._defaultConfig = An({}, io), this._config = An({}, this._defaultConfig, S), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return b.prototype.config = function(w) {
          if ((typeof w > "u" ? "undefined" : o(w)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var D in w) {
              if (D === "storeName" && (w[D] = w[D].replace(/\W/g, "_")), D === "version" && typeof w[D] != "number")
                return new Error("Database version must be a number.");
              this._config[D] = w[D];
            }
            return "driver" in w && w.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof w == "string" ? this._config[w] : this._config;
        }, b.prototype.defineDriver = function(w, D, N) {
          var O = new d(function(U, G) {
            try {
              var Z = w._driver, j = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!w._driver) {
                G(j);
                return;
              }
              for (var J = Bn.concat("_initStorage"), ie = 0, ge = J.length; ie < ge; ie++) {
                var ke = J[ie], Ce = !ro(br, ke);
                if ((Ce || w[ke]) && typeof w[ke] != "function") {
                  G(j);
                  return;
                }
              }
              var Ie = function() {
                for (var er = function(uo) {
                  return function() {
                    var fo = new Error("Method " + uo + " is not implemented by the current driver"), e0 = d.reject(fo);
                    return a(e0, arguments[arguments.length - 1]), e0;
                  };
                }, Rn = 0, co = br.length; Rn < co; Rn++) {
                  var On = br[Rn];
                  w[On] || (w[On] = er(On));
                }
              };
              Ie();
              var Le = function(er) {
                Jt[Z] && console.info("Redefining LocalForage driver: " + Z), Jt[Z] = w, Jn[Z] = er, U();
              };
              "_support" in w ? w._support && typeof w._support == "function" ? w._support().then(Le, G) : Le(!!w._support) : Le(!0);
            } catch (it) {
              G(it);
            }
          });
          return h(O, D, N), O;
        }, b.prototype.driver = function() {
          return this._driver || null;
        }, b.prototype.getDriver = function(w, D, N) {
          var O = Jt[w] ? d.resolve(Jt[w]) : d.reject(new Error("Driver not found."));
          return h(O, D, N), O;
        }, b.prototype.getSerializer = function(w) {
          var D = d.resolve(Ve);
          return h(D, w), D;
        }, b.prototype.ready = function(w) {
          var D = this, N = D._driverSet.then(function() {
            return D._ready === null && (D._ready = D._initDriver()), D._ready;
          });
          return h(N, w, w), N;
        }, b.prototype.setDriver = function(w, D, N) {
          var O = this;
          Qn(w) || (w = [w]);
          var U = this._getSupportedDrivers(w);
          function G() {
            O._config.driver = O.driver();
          }
          function Z(ie) {
            return O._extend(ie), G(), O._ready = O._initStorage(O._config), O._ready;
          }
          function j(ie) {
            return function() {
              var ge = 0;
              function ke() {
                for (; ge < ie.length; ) {
                  var Ce = ie[ge];
                  return ge++, O._dbInfo = null, O._ready = null, O.getDriver(Ce).then(Z).catch(ke);
                }
                G();
                var Ie = new Error("No available storage method found.");
                return O._driverSet = d.reject(Ie), O._driverSet;
              }
              return ke();
            };
          }
          var J = this._driverSet !== null ? this._driverSet.catch(function() {
            return d.resolve();
          }) : d.resolve();
          return this._driverSet = J.then(function() {
            var ie = U[0];
            return O._dbInfo = null, O._ready = null, O.getDriver(ie).then(function(ge) {
              O._driver = ge._driver, G(), O._wrapLibraryMethodsWithReady(), O._initDriver = j(U);
            });
          }).catch(function() {
            G();
            var ie = new Error("No available storage method found.");
            return O._driverSet = d.reject(ie), O._driverSet;
          }), h(this._driverSet, D, N), this._driverSet;
        }, b.prototype.supports = function(w) {
          return !!Jn[w];
        }, b.prototype._extend = function(w) {
          An(this, w);
        }, b.prototype._getSupportedDrivers = function(w) {
          for (var D = [], N = 0, O = w.length; N < O; N++) {
            var U = w[N];
            this.supports(U) && D.push(U);
          }
          return D;
        }, b.prototype._wrapLibraryMethodsWithReady = function() {
          for (var w = 0, D = Bn.length; w < D; w++)
            oo(this, Bn[w]);
        }, b.prototype.createInstance = function(w) {
          return new b(w);
        }, b;
      }(), ao = new so();
      n.exports = ao;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(Ea);
const _t = /* @__PURE__ */ Object.create(null);
_t.open = "0";
_t.close = "1";
_t.ping = "2";
_t.pong = "3";
_t.message = "4";
_t.upgrade = "5";
_t.noop = "6";
const wr = /* @__PURE__ */ Object.create(null);
Object.keys(_t).forEach((e) => {
  wr[_t[e]] = e;
});
const Ca = { type: "error", data: "parser error" }, Sa = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Ba = typeof ArrayBuffer == "function", Aa = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, pi = ({ type: e, data: r }, t, n) => Sa && r instanceof Blob ? t ? n(r) : Y0(r, n) : Ba && (r instanceof ArrayBuffer || Aa(r)) ? t ? n(r) : Y0(new Blob([r]), n) : n(_t[e] + (r || "")), Y0 = (e, r) => {
  const t = new FileReader();
  return t.onload = function() {
    const n = t.result.split(",")[1];
    r("b" + (n || ""));
  }, t.readAsDataURL(e);
}, K0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", sr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < K0.length; e++)
  sr[K0.charCodeAt(e)] = e;
const Ra = (e) => {
  let r = e.length * 0.75, t = e.length, n, i = 0, o, c, u, l;
  e[e.length - 1] === "=" && (r--, e[e.length - 2] === "=" && r--);
  const s = new ArrayBuffer(r), f = new Uint8Array(s);
  for (n = 0; n < t; n += 4)
    o = sr[e.charCodeAt(n)], c = sr[e.charCodeAt(n + 1)], u = sr[e.charCodeAt(n + 2)], l = sr[e.charCodeAt(n + 3)], f[i++] = o << 2 | c >> 4, f[i++] = (c & 15) << 4 | u >> 2, f[i++] = (u & 3) << 6 | l & 63;
  return s;
}, Oa = typeof ArrayBuffer == "function", xi = (e, r) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: bi(e, r)
    };
  const t = e.charAt(0);
  return t === "b" ? {
    type: "message",
    data: Da(e.substring(1), r)
  } : wr[t] ? e.length > 1 ? {
    type: wr[t],
    data: e.substring(1)
  } : {
    type: wr[t]
  } : Ca;
}, Da = (e, r) => {
  if (Oa) {
    const t = Ra(e);
    return bi(t, r);
  } else
    return { base64: !0, data: e };
}, bi = (e, r) => {
  switch (r) {
    case "blob":
      return e instanceof ArrayBuffer ? new Blob([e]) : e;
    case "arraybuffer":
    default:
      return e;
  }
}, gi = String.fromCharCode(30), La = (e, r) => {
  const t = e.length, n = new Array(t);
  let i = 0;
  e.forEach((o, c) => {
    pi(o, !1, (u) => {
      n[c] = u, ++i === t && r(n.join(gi));
    });
  });
}, Na = (e, r) => {
  const t = e.split(gi), n = [];
  for (let i = 0; i < t.length; i++) {
    const o = xi(t[i], r);
    if (n.push(o), o.type === "error")
      break;
  }
  return n;
}, mi = 4;
function Pe(e) {
  if (e)
    return Ta(e);
}
function Ta(e) {
  for (var r in Pe.prototype)
    e[r] = Pe.prototype[r];
  return e;
}
Pe.prototype.on = Pe.prototype.addEventListener = function(e, r) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(r), this;
};
Pe.prototype.once = function(e, r) {
  function t() {
    this.off(e, t), r.apply(this, arguments);
  }
  return t.fn = r, this.on(e, t), this;
};
Pe.prototype.off = Pe.prototype.removeListener = Pe.prototype.removeAllListeners = Pe.prototype.removeEventListener = function(e, r) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var t = this._callbacks["$" + e];
  if (!t)
    return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var n, i = 0; i < t.length; i++)
    if (n = t[i], n === r || n.fn === r) {
      t.splice(i, 1);
      break;
    }
  return t.length === 0 && delete this._callbacks["$" + e], this;
};
Pe.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var r = new Array(arguments.length - 1), t = this._callbacks["$" + e], n = 1; n < arguments.length; n++)
    r[n - 1] = arguments[n];
  if (t) {
    t = t.slice(0);
    for (var n = 0, i = t.length; n < i; ++n)
      t[n].apply(this, r);
  }
  return this;
};
Pe.prototype.emitReserved = Pe.prototype.emit;
Pe.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
Pe.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const at = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();
function yi(e, ...r) {
  return r.reduce((t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t), {});
}
const Ia = at.setTimeout, Pa = at.clearTimeout;
function pn(e, r) {
  r.useNativeTimers ? (e.setTimeoutFn = Ia.bind(at), e.clearTimeoutFn = Pa.bind(at)) : (e.setTimeoutFn = at.setTimeout.bind(at), e.clearTimeoutFn = at.clearTimeout.bind(at));
}
const $a = 1.33;
function Ma(e) {
  return typeof e == "string" ? Ha(e) : Math.ceil((e.byteLength || e.size) * $a);
}
function Ha(e) {
  let r = 0, t = 0;
  for (let n = 0, i = e.length; n < i; n++)
    r = e.charCodeAt(n), r < 128 ? t += 1 : r < 2048 ? t += 2 : r < 55296 || r >= 57344 ? t += 3 : (n++, t += 4);
  return t;
}
class za extends Error {
  constructor(r, t, n) {
    super(r), this.description = t, this.context = n, this.type = "TransportError";
  }
}
class _i extends Pe {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(r) {
    super(), this.writable = !1, pn(this, r), this.opts = r, this.query = r.query, this.socket = r.socket;
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
  onError(r, t, n) {
    return super.emitReserved("error", new za(r, t, n)), this;
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
  send(r) {
    this.readyState === "open" && this.write(r);
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
  onData(r) {
    const t = xi(r, this.socket.binaryType);
    this.onPacket(t);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(r) {
    super.emitReserved("packet", r);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(r) {
    this.readyState = "closed", super.emitReserved("close", r);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(r) {
  }
}
const wi = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), Pn = 64, qa = {};
let G0 = 0, mr = 0, Z0;
function X0(e) {
  let r = "";
  do
    r = wi[e % Pn] + r, e = Math.floor(e / Pn);
  while (e > 0);
  return r;
}
function ki() {
  const e = X0(+/* @__PURE__ */ new Date());
  return e !== Z0 ? (G0 = 0, Z0 = e) : e + "." + X0(G0++);
}
for (; mr < Pn; mr++)
  qa[wi[mr]] = mr;
function Ei(e) {
  let r = "";
  for (let t in e)
    e.hasOwnProperty(t) && (r.length && (r += "&"), r += encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
  return r;
}
function Fa(e) {
  let r = {}, t = e.split("&");
  for (let n = 0, i = t.length; n < i; n++) {
    let o = t[n].split("=");
    r[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return r;
}
let Ci = !1;
try {
  Ci = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Ua = Ci;
function Si(e) {
  const r = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!r || Ua))
      return new XMLHttpRequest();
  } catch {
  }
  if (!r)
    try {
      return new at[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function Va() {
}
const Wa = function() {
  return new Si({
    xdomain: !1
  }).responseType != null;
}();
class Ya extends _i {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(r) {
    if (super(r), this.polling = !1, typeof location < "u") {
      const n = location.protocol === "https:";
      let i = location.port;
      i || (i = n ? "443" : "80"), this.xd = typeof location < "u" && r.hostname !== location.hostname || i !== r.port, this.xs = r.secure !== n;
    }
    const t = r && r.forceBase64;
    this.supportsBinary = Wa && !t;
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
  pause(r) {
    this.readyState = "pausing";
    const t = () => {
      this.readyState = "paused", r();
    };
    if (this.polling || !this.writable) {
      let n = 0;
      this.polling && (n++, this.once("pollComplete", function() {
        --n || t();
      })), this.writable || (n++, this.once("drain", function() {
        --n || t();
      }));
    } else
      t();
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
  onData(r) {
    const t = (n) => {
      if (this.readyState === "opening" && n.type === "open" && this.onOpen(), n.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(n);
    };
    Na(r, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const r = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? r() : this.once("open", r);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(r) {
    this.writable = !1, La(r, (t) => {
      this.doWrite(t, () => {
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
    let r = this.query || {};
    const t = this.opts.secure ? "https" : "http";
    let n = "";
    this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = ki()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.opts.port && (t === "https" && Number(this.opts.port) !== 443 || t === "http" && Number(this.opts.port) !== 80) && (n = ":" + this.opts.port);
    const i = Ei(r), o = this.opts.hostname.indexOf(":") !== -1;
    return t + "://" + (o ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(r = {}) {
    return Object.assign(r, { xd: this.xd, xs: this.xs }, this.opts), new yt(this.uri(), r);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(r, t) {
    const n = this.request({
      method: "POST",
      data: r
    });
    n.on("success", t), n.on("error", (i, o) => {
      this.onError("xhr post error", i, o);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const r = this.request();
    r.on("data", this.onData.bind(this)), r.on("error", (t, n) => {
      this.onError("xhr poll error", t, n);
    }), this.pollXhr = r;
  }
}
class yt extends Pe {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(r, t) {
    super(), pn(this, t), this.opts = t, this.method = t.method || "GET", this.uri = r, this.async = t.async !== !1, this.data = t.data !== void 0 ? t.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    const r = yi(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    r.xdomain = !!this.opts.xd, r.xscheme = !!this.opts.xs;
    const t = this.xhr = new Si(r);
    try {
      t.open(this.method, this.uri, this.async);
      try {
        if (this.opts.extraHeaders) {
          t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0);
          for (let n in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(n) && t.setRequestHeader(n, this.opts.extraHeaders[n]);
        }
      } catch {
      }
      if (this.method === "POST")
        try {
          t.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        t.setRequestHeader("Accept", "*/*");
      } catch {
      }
      "withCredentials" in t && (t.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (t.timeout = this.opts.requestTimeout), t.onreadystatechange = () => {
        t.readyState === 4 && (t.status === 200 || t.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
          this.onError(typeof t.status == "number" ? t.status : 0);
        }, 0));
      }, t.send(this.data);
    } catch (n) {
      this.setTimeoutFn(() => {
        this.onError(n);
      }, 0);
      return;
    }
    typeof document < "u" && (this.index = yt.requestsCount++, yt.requests[this.index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  onError(r) {
    this.emitReserved("error", r, this.xhr), this.cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  cleanup(r) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (this.xhr.onreadystatechange = Va, r)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete yt.requests[this.index], this.xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  onLoad() {
    const r = this.xhr.responseText;
    r !== null && (this.emitReserved("data", r), this.emitReserved("success"), this.cleanup());
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
yt.requestsCount = 0;
yt.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", j0);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in at ? "pagehide" : "unload";
    addEventListener(e, j0, !1);
  }
}
function j0() {
  for (let e in yt.requests)
    yt.requests.hasOwnProperty(e) && yt.requests[e].abort();
}
const Bi = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? (r) => Promise.resolve().then(r) : (r, t) => t(r, 0))(), yr = at.WebSocket || at.MozWebSocket, Q0 = !0, Ka = "arraybuffer", J0 = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Ga extends _i {
  /**
   * WebSocket transport constructor.
   *
   * @param {Object} opts - connection options
   * @protected
   */
  constructor(r) {
    super(r), this.supportsBinary = !r.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check())
      return;
    const r = this.uri(), t = this.opts.protocols, n = J0 ? {} : yi(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = Q0 && !J0 ? t ? new yr(r, t) : new yr(r) : new yr(r, t, n);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this.ws.binaryType = this.socket.binaryType || Ka, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (r) => this.onClose({
      description: "websocket connection closed",
      context: r
    }), this.ws.onmessage = (r) => this.onData(r.data), this.ws.onerror = (r) => this.onError("websocket error", r);
  }
  write(r) {
    this.writable = !1;
    for (let t = 0; t < r.length; t++) {
      const n = r[t], i = t === r.length - 1;
      pi(n, this.supportsBinary, (o) => {
        const c = {};
        try {
          Q0 && this.ws.send(o);
        } catch {
        }
        i && Bi(() => {
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
    let r = this.query || {};
    const t = this.opts.secure ? "wss" : "ws";
    let n = "";
    this.opts.port && (t === "wss" && Number(this.opts.port) !== 443 || t === "ws" && Number(this.opts.port) !== 80) && (n = ":" + this.opts.port), this.opts.timestampRequests && (r[this.opts.timestampParam] = ki()), this.supportsBinary || (r.b64 = 1);
    const i = Ei(r), o = this.opts.hostname.indexOf(":") !== -1;
    return t + "://" + (o ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!yr;
  }
}
const Za = {
  websocket: Ga,
  polling: Ya
}, Xa = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, ja = [
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
function $n(e) {
  const r = e, t = e.indexOf("["), n = e.indexOf("]");
  t != -1 && n != -1 && (e = e.substring(0, t) + e.substring(t, n).replace(/:/g, ";") + e.substring(n, e.length));
  let i = Xa.exec(e || ""), o = {}, c = 14;
  for (; c--; )
    o[ja[c]] = i[c] || "";
  return t != -1 && n != -1 && (o.source = r, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"), o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o.ipv6uri = !0), o.pathNames = Qa(o, o.path), o.queryKey = Ja(o, o.query), o;
}
function Qa(e, r) {
  const t = /\/{2,9}/g, n = r.replace(t, "/").split("/");
  return (r.slice(0, 1) == "/" || r.length === 0) && n.splice(0, 1), r.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function Ja(e, r) {
  const t = {};
  return r.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, i, o) {
    i && (t[i] = o);
  }), t;
}
let Ai = class Wt extends Pe {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(r, t = {}) {
    super(), this.writeBuffer = [], r && typeof r == "object" && (t = r, r = null), r ? (r = $n(r), t.hostname = r.host, t.secure = r.protocol === "https" || r.protocol === "wss", t.port = r.port, r.query && (t.query = r.query)) : t.host && (t.hostname = $n(t.host).host), pn(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = t.transports || ["polling", "websocket"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
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
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Fa(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
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
  createTransport(r) {
    const t = Object.assign({}, this.opts.query);
    t.EIO = mi, t.transport = r, this.id && (t.sid = this.id);
    const n = Object.assign({}, this.opts.transportOptions[r], this.opts, {
      query: t,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new Za[r](n);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let r;
    if (this.opts.rememberUpgrade && Wt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
      r = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else
      r = this.transports[0];
    this.readyState = "opening";
    try {
      r = this.createTransport(r);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    r.open(), this.setTransport(r);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(r) {
    this.transport && this.transport.removeAllListeners(), this.transport = r, r.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (t) => this.onClose("transport close", t));
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  probe(r) {
    let t = this.createTransport(r), n = !1;
    Wt.priorWebsocketSuccess = !1;
    const i = () => {
      n || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (d) => {
        if (!n)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            Wt.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (f(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
            });
          } else {
            const a = new Error("probe error");
            a.transport = t.name, this.emitReserved("upgradeError", a);
          }
      }));
    };
    function o() {
      n || (n = !0, f(), t.close(), t = null);
    }
    const c = (d) => {
      const a = new Error("probe error: " + d);
      a.transport = t.name, o(), this.emitReserved("upgradeError", a);
    };
    function u() {
      c("transport closed");
    }
    function l() {
      c("socket closed");
    }
    function s(d) {
      t && d.name !== t.name && o();
    }
    const f = () => {
      t.removeListener("open", i), t.removeListener("error", c), t.removeListener("close", u), this.off("close", l), this.off("upgrading", s);
    };
    t.once("open", i), t.once("error", c), t.once("close", u), this.once("close", l), this.once("upgrading", s), t.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", Wt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
      let r = 0;
      const t = this.upgrades.length;
      for (; r < t; r++)
        this.probe(this.upgrades[r]);
    }
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  onPacket(r) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", r), this.emitReserved("heartbeat"), r.type) {
        case "open":
          this.onHandshake(JSON.parse(r.data));
          break;
        case "ping":
          this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
          break;
        case "error":
          const t = new Error("server error");
          t.code = r.data, this.onError(t);
          break;
        case "message":
          this.emitReserved("data", r.data), this.emitReserved("message", r.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(r) {
    this.emitReserved("handshake", r), this.id = r.sid, this.transport.query.sid = r.sid, this.upgrades = this.filterUpgrades(r.upgrades), this.pingInterval = r.pingInterval, this.pingTimeout = r.pingTimeout, this.maxPayload = r.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout();
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
      const r = this.getWritablePackets();
      this.transport.send(r), this.prevBufferLen = r.length, this.emitReserved("flush");
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
    let t = 1;
    for (let n = 0; n < this.writeBuffer.length; n++) {
      const i = this.writeBuffer[n].data;
      if (i && (t += Ma(i)), n > 0 && t > this.maxPayload)
        return this.writeBuffer.slice(0, n);
      t += 2;
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
  write(r, t, n) {
    return this.sendPacket("message", r, t, n), this;
  }
  send(r, t, n) {
    return this.sendPacket("message", r, t, n), this;
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
  sendPacket(r, t, n, i) {
    if (typeof t == "function" && (i = t, t = void 0), typeof n == "function" && (i = n, n = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    n = n || {}, n.compress = n.compress !== !1;
    const o = {
      type: r,
      data: t,
      options: n
    };
    this.emitReserved("packetCreate", o), this.writeBuffer.push(o), i && this.once("flush", i), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const r = () => {
      this.onClose("forced close"), this.transport.close();
    }, t = () => {
      this.off("upgrade", t), this.off("upgradeError", t), r();
    }, n = () => {
      this.once("upgrade", t), this.once("upgradeError", t);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? n() : r();
    }) : this.upgrading ? n() : r()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  onError(r) {
    Wt.priorWebsocketSuccess = !1, this.emitReserved("error", r), this.onClose("transport error", r);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  onClose(r, t) {
    (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", r, t), this.writeBuffer = [], this.prevBufferLen = 0);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  filterUpgrades(r) {
    const t = [];
    let n = 0;
    const i = r.length;
    for (; n < i; n++)
      ~this.transports.indexOf(r[n]) && t.push(r[n]);
    return t;
  }
};
Ai.protocol = mi;
function ec(e, r = "", t) {
  let n = e;
  t = t || typeof location < "u" && location, e == null && (e = t.protocol + "//" + t.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = t.protocol + e : e = t.host + e), /^(https?|wss?):\/\//.test(e) || (typeof t < "u" ? e = t.protocol + "//" + e : e = "https://" + e), n = $n(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const o = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + o + ":" + n.port + r, n.href = n.protocol + "://" + o + (t && t.port === n.port ? "" : ":" + n.port), n;
}
const tc = typeof ArrayBuffer == "function", rc = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Ri = Object.prototype.toString, nc = typeof Blob == "function" || typeof Blob < "u" && Ri.call(Blob) === "[object BlobConstructor]", ic = typeof File == "function" || typeof File < "u" && Ri.call(File) === "[object FileConstructor]";
function Zn(e) {
  return tc && (e instanceof ArrayBuffer || rc(e)) || nc && e instanceof Blob || ic && e instanceof File;
}
function kr(e, r) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let t = 0, n = e.length; t < n; t++)
      if (kr(e[t]))
        return !0;
    return !1;
  }
  if (Zn(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return kr(e.toJSON(), !0);
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && kr(e[t]))
      return !0;
  return !1;
}
function oc(e) {
  const r = [], t = e.data, n = e;
  return n.data = Mn(t, r), n.attachments = r.length, { packet: n, buffers: r };
}
function Mn(e, r) {
  if (!e)
    return e;
  if (Zn(e)) {
    const t = { _placeholder: !0, num: r.length };
    return r.push(e), t;
  } else if (Array.isArray(e)) {
    const t = new Array(e.length);
    for (let n = 0; n < e.length; n++)
      t[n] = Mn(e[n], r);
    return t;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const t = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = Mn(e[n], r));
    return t;
  }
  return e;
}
function sc(e, r) {
  return e.data = Hn(e.data, r), delete e.attachments, e;
}
function Hn(e, r) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < r.length)
      return r[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let t = 0; t < e.length; t++)
      e[t] = Hn(e[t], r);
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && (e[t] = Hn(e[t], r));
  return e;
}
const ac = 5;
var _e;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(_e || (_e = {}));
class cc {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(r) {
    this.replacer = r;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(r) {
    return (r.type === _e.EVENT || r.type === _e.ACK) && kr(r) ? this.encodeAsBinary({
      type: r.type === _e.EVENT ? _e.BINARY_EVENT : _e.BINARY_ACK,
      nsp: r.nsp,
      data: r.data,
      id: r.id
    }) : [this.encodeAsString(r)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(r) {
    let t = "" + r.type;
    return (r.type === _e.BINARY_EVENT || r.type === _e.BINARY_ACK) && (t += r.attachments + "-"), r.nsp && r.nsp !== "/" && (t += r.nsp + ","), r.id != null && (t += r.id), r.data != null && (t += JSON.stringify(r.data, this.replacer)), t;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(r) {
    const t = oc(r), n = this.encodeAsString(t.packet), i = t.buffers;
    return i.unshift(n), i;
  }
}
class Xn extends Pe {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(r) {
    super(), this.reviver = r;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(r) {
    let t;
    if (typeof r == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      t = this.decodeString(r);
      const n = t.type === _e.BINARY_EVENT;
      n || t.type === _e.BINARY_ACK ? (t.type = n ? _e.EVENT : _e.ACK, this.reconstructor = new uc(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (Zn(r) || r.base64)
      if (this.reconstructor)
        t = this.reconstructor.takeBinaryData(r), t && (this.reconstructor = null, super.emitReserved("decoded", t));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + r);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(r) {
    let t = 0;
    const n = {
      type: Number(r.charAt(0))
    };
    if (_e[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === _e.BINARY_EVENT || n.type === _e.BINARY_ACK) {
      const o = t + 1;
      for (; r.charAt(++t) !== "-" && t != r.length; )
        ;
      const c = r.substring(o, t);
      if (c != Number(c) || r.charAt(t) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(c);
    }
    if (r.charAt(t + 1) === "/") {
      const o = t + 1;
      for (; ++t && !(r.charAt(t) === "," || t === r.length); )
        ;
      n.nsp = r.substring(o, t);
    } else
      n.nsp = "/";
    const i = r.charAt(t + 1);
    if (i !== "" && Number(i) == i) {
      const o = t + 1;
      for (; ++t; ) {
        const c = r.charAt(t);
        if (c == null || Number(c) != c) {
          --t;
          break;
        }
        if (t === r.length)
          break;
      }
      n.id = Number(r.substring(o, t + 1));
    }
    if (r.charAt(++t)) {
      const o = this.tryParse(r.substr(t));
      if (Xn.isPayloadValid(n.type, o))
        n.data = o;
      else
        throw new Error("invalid payload");
    }
    return n;
  }
  tryParse(r) {
    try {
      return JSON.parse(r, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(r, t) {
    switch (r) {
      case _e.CONNECT:
        return typeof t == "object";
      case _e.DISCONNECT:
        return t === void 0;
      case _e.CONNECT_ERROR:
        return typeof t == "string" || typeof t == "object";
      case _e.EVENT:
      case _e.BINARY_EVENT:
        return Array.isArray(t) && t.length > 0;
      case _e.ACK:
      case _e.BINARY_ACK:
        return Array.isArray(t);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class uc {
  constructor(r) {
    this.packet = r, this.buffers = [], this.reconPack = r;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(r) {
    if (this.buffers.push(r), this.buffers.length === this.reconPack.attachments) {
      const t = sc(this.reconPack, this.buffers);
      return this.finishedReconstruction(), t;
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
const fc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Xn,
  Encoder: cc,
  get PacketType() {
    return _e;
  },
  protocol: ac
}, Symbol.toStringTag, { value: "Module" }));
function dt(e, r, t) {
  return e.on(r, t), function() {
    e.off(r, t);
  };
}
const lc = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Oi extends Pe {
  /**
   * `Socket` constructor.
   */
  constructor(r, t, n) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = r, this.nsp = t, n && n.auth && (this.auth = n.auth), this._opts = Object.assign({}, n), this.io._autoConnect && this.open();
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
    const r = this.io;
    this.subs = [
      dt(r, "open", this.onopen.bind(this)),
      dt(r, "packet", this.onpacket.bind(this)),
      dt(r, "error", this.onerror.bind(this)),
      dt(r, "close", this.onclose.bind(this))
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
  send(...r) {
    return r.unshift("message"), this.emit.apply(this, r), this;
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
  emit(r, ...t) {
    if (lc.hasOwnProperty(r))
      throw new Error('"' + r.toString() + '" is a reserved event name');
    if (t.unshift(r), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(t), this;
    const n = {
      type: _e.EVENT,
      data: t
    };
    if (n.options = {}, n.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
      const c = this.ids++, u = t.pop();
      this._registerAckCallback(c, u), n.id = c;
    }
    const i = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    return this.flags.volatile && (!i || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(n), this.packet(n)) : this.sendBuffer.push(n)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(r, t) {
    var n;
    const i = (n = this.flags.timeout) !== null && n !== void 0 ? n : this._opts.ackTimeout;
    if (i === void 0) {
      this.acks[r] = t;
      return;
    }
    const o = this.io.setTimeoutFn(() => {
      delete this.acks[r];
      for (let c = 0; c < this.sendBuffer.length; c++)
        this.sendBuffer[c].id === r && this.sendBuffer.splice(c, 1);
      t.call(this, new Error("operation has timed out"));
    }, i);
    this.acks[r] = (...c) => {
      this.io.clearTimeoutFn(o), t.apply(this, [null, ...c]);
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
  emitWithAck(r, ...t) {
    const n = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
    return new Promise((i, o) => {
      t.push((c, u) => n ? c ? o(c) : i(u) : i(c)), this.emit(r, ...t);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(r) {
    let t;
    typeof r[r.length - 1] == "function" && (t = r.pop());
    const n = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: r,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    r.push((i, ...o) => n !== this._queue[0] ? void 0 : (i !== null ? n.tryCount > this._opts.retries && (this._queue.shift(), t && t(i)) : (this._queue.shift(), t && t(null, ...o)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(r = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const t = this._queue[0];
    t.pending && !r || (t.pending = !0, t.tryCount++, this.flags = t.flags, this.emit.apply(this, t.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(r) {
    r.nsp = this.nsp, this.io._packet(r);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((r) => {
      this._sendConnectPacket(r);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(r) {
    this.packet({
      type: _e.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, r) : r
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(r) {
    this.connected || this.emitReserved("connect_error", r);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(r, t) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", r, t);
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(r) {
    if (r.nsp === this.nsp)
      switch (r.type) {
        case _e.CONNECT:
          r.data && r.data.sid ? this.onconnect(r.data.sid, r.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case _e.EVENT:
        case _e.BINARY_EVENT:
          this.onevent(r);
          break;
        case _e.ACK:
        case _e.BINARY_ACK:
          this.onack(r);
          break;
        case _e.DISCONNECT:
          this.ondisconnect();
          break;
        case _e.CONNECT_ERROR:
          this.destroy();
          const n = new Error(r.data.message);
          n.data = r.data.data, this.emitReserved("connect_error", n);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(r) {
    const t = r.data || [];
    r.id != null && t.push(this.ack(r.id)), this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t));
  }
  emitEvent(r) {
    if (this._anyListeners && this._anyListeners.length) {
      const t = this._anyListeners.slice();
      for (const n of t)
        n.apply(this, r);
    }
    super.emit.apply(this, r), this._pid && r.length && typeof r[r.length - 1] == "string" && (this._lastOffset = r[r.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(r) {
    const t = this;
    let n = !1;
    return function(...i) {
      n || (n = !0, t.packet({
        type: _e.ACK,
        id: r,
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
  onack(r) {
    const t = this.acks[r.id];
    typeof t == "function" && (t.apply(this, r.data), delete this.acks[r.id]);
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(r, t) {
    this.id = r, this.recovered = t && this._pid === t, this._pid = t, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((r) => this.emitEvent(r)), this.receiveBuffer = [], this.sendBuffer.forEach((r) => {
      this.notifyOutgoingListeners(r), this.packet(r);
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
    this.subs && (this.subs.forEach((r) => r()), this.subs = void 0), this.io._destroy(this);
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
    return this.connected && this.packet({ type: _e.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
  compress(r) {
    return this.flags.compress = r, this;
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
  timeout(r) {
    return this.flags.timeout = r, this;
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
  onAny(r) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(r), this;
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
  prependAny(r) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(r), this;
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
  offAny(r) {
    if (!this._anyListeners)
      return this;
    if (r) {
      const t = this._anyListeners;
      for (let n = 0; n < t.length; n++)
        if (r === t[n])
          return t.splice(n, 1), this;
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
  onAnyOutgoing(r) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(r), this;
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
  prependAnyOutgoing(r) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(r), this;
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
  offAnyOutgoing(r) {
    if (!this._anyOutgoingListeners)
      return this;
    if (r) {
      const t = this._anyOutgoingListeners;
      for (let n = 0; n < t.length; n++)
        if (r === t[n])
          return t.splice(n, 1), this;
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
  notifyOutgoingListeners(r) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const t = this._anyOutgoingListeners.slice();
      for (const n of t)
        n.apply(this, r.data);
    }
  }
}
function Xt(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
Xt.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var r = Math.random(), t = Math.floor(r * this.jitter * e);
    e = Math.floor(r * 10) & 1 ? e + t : e - t;
  }
  return Math.min(e, this.max) | 0;
};
Xt.prototype.reset = function() {
  this.attempts = 0;
};
Xt.prototype.setMin = function(e) {
  this.ms = e;
};
Xt.prototype.setMax = function(e) {
  this.max = e;
};
Xt.prototype.setJitter = function(e) {
  this.jitter = e;
};
class zn extends Pe {
  constructor(r, t) {
    var n;
    super(), this.nsps = {}, this.subs = [], r && typeof r == "object" && (t = r, r = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, pn(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((n = t.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new Xt({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = r;
    const i = t.parser || fc;
    this.encoder = new i.Encoder(), this.decoder = new i.Decoder(), this._autoConnect = t.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(r) {
    return arguments.length ? (this._reconnection = !!r, this) : this._reconnection;
  }
  reconnectionAttempts(r) {
    return r === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = r, this);
  }
  reconnectionDelay(r) {
    var t;
    return r === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = r, (t = this.backoff) === null || t === void 0 || t.setMin(r), this);
  }
  randomizationFactor(r) {
    var t;
    return r === void 0 ? this._randomizationFactor : (this._randomizationFactor = r, (t = this.backoff) === null || t === void 0 || t.setJitter(r), this);
  }
  reconnectionDelayMax(r) {
    var t;
    return r === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = r, (t = this.backoff) === null || t === void 0 || t.setMax(r), this);
  }
  timeout(r) {
    return arguments.length ? (this._timeout = r, this) : this._timeout;
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
  open(r) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Ai(this.uri, this.opts);
    const t = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = dt(t, "open", function() {
      n.onopen(), r && r();
    }), o = dt(t, "error", (c) => {
      n.cleanup(), n._readyState = "closed", this.emitReserved("error", c), r ? r(c) : n.maybeReconnectOnOpen();
    });
    if (this._timeout !== !1) {
      const c = this._timeout;
      c === 0 && i();
      const u = this.setTimeoutFn(() => {
        i(), t.close(), t.emit("error", new Error("timeout"));
      }, c);
      this.opts.autoUnref && u.unref(), this.subs.push(function() {
        clearTimeout(u);
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
  connect(r) {
    return this.open(r);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const r = this.engine;
    this.subs.push(dt(r, "ping", this.onping.bind(this)), dt(r, "data", this.ondata.bind(this)), dt(r, "error", this.onerror.bind(this)), dt(r, "close", this.onclose.bind(this)), dt(this.decoder, "decoded", this.ondecoded.bind(this)));
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
  ondata(r) {
    try {
      this.decoder.add(r);
    } catch (t) {
      this.onclose("parse error", t);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(r) {
    Bi(() => {
      this.emitReserved("packet", r);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(r) {
    this.emitReserved("error", r);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(r, t) {
    let n = this.nsps[r];
    return n ? this._autoConnect && !n.active && n.connect() : (n = new Oi(this, r, t), this.nsps[r] = n), n;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(r) {
    const t = Object.keys(this.nsps);
    for (const n of t)
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
  _packet(r) {
    const t = this.encoder.encode(r);
    for (let n = 0; n < t.length; n++)
      this.engine.write(t[n], r.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((r) => r()), this.subs.length = 0, this.decoder.destroy();
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
  onclose(r, t) {
    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", r, t), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const r = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const t = this.backoff.duration();
      this._reconnecting = !0;
      const n = this.setTimeoutFn(() => {
        r.skipReconnect || (this.emitReserved("reconnect_attempt", r.backoff.attempts), !r.skipReconnect && r.open((i) => {
          i ? (r._reconnecting = !1, r.reconnect(), this.emitReserved("reconnect_error", i)) : r.onreconnect();
        }));
      }, t);
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
    const r = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", r);
  }
}
const rr = {};
function Ln(e, r) {
  typeof e == "object" && (r = e, e = void 0), r = r || {};
  const t = ec(e, r.path || "/socket.io"), n = t.source, i = t.id, o = t.path, c = rr[i] && o in rr[i].nsps, u = r.forceNew || r["force new connection"] || r.multiplex === !1 || c;
  let l;
  return u ? l = new zn(n, r) : (rr[i] || (rr[i] = new zn(n, r)), l = rr[i]), t.query && !r.query && (r.query = t.queryKey), l.socket(t.path, r);
}
Object.assign(Ln, {
  Manager: zn,
  Socket: Oi,
  io: Ln,
  connect: Ln
});
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Yt = 9e15, It = 1e9, qn = "0123456789abcdef", cn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", un = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Fn = {
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
  minE: -Yt,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Yt,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Di, Rt, de = !0, xn = "[DecimalError] ", Tt = xn + "Invalid argument: ", Li = xn + "Precision limit exceeded", Ni = xn + "crypto unavailable", Ti = "[object Decimal]", Ge = Math.floor, He = Math.pow, dc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, hc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, vc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Ii = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, pt = 1e7, ce = 7, pc = 9007199254740991, xc = cn.length - 1, Un = un.length - 1, Y = { toStringTag: Ti };
Y.absoluteValue = Y.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), se(e);
};
Y.ceil = function() {
  return se(new this.constructor(this), this.e + 1, 2);
};
Y.clampedTo = Y.clamp = function(e, r) {
  var t, n = this, i = n.constructor;
  if (e = new i(e), r = new i(r), !e.s || !r.s)
    return new i(NaN);
  if (e.gt(r))
    throw Error(Tt + r);
  return t = n.cmp(e), t < 0 ? e : n.cmp(r) > 0 ? r : new i(n);
};
Y.comparedTo = Y.cmp = function(e) {
  var r, t, n, i, o = this, c = o.d, u = (e = new o.constructor(e)).d, l = o.s, s = e.s;
  if (!c || !u)
    return !l || !s ? NaN : l !== s ? l : c === u ? 0 : !c ^ l < 0 ? 1 : -1;
  if (!c[0] || !u[0])
    return c[0] ? l : u[0] ? -s : 0;
  if (l !== s)
    return l;
  if (o.e !== e.e)
    return o.e > e.e ^ l < 0 ? 1 : -1;
  for (n = c.length, i = u.length, r = 0, t = n < i ? n : i; r < t; ++r)
    if (c[r] !== u[r])
      return c[r] > u[r] ^ l < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
};
Y.cosine = Y.cos = function() {
  var e, r, t = this, n = t.constructor;
  return t.d ? t.d[0] ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + ce, n.rounding = 1, t = bc(n, zi(n, t)), n.precision = e, n.rounding = r, se(Rt == 2 || Rt == 3 ? t.neg() : t, e, r, !0)) : new n(1) : new n(NaN);
};
Y.cubeRoot = Y.cbrt = function() {
  var e, r, t, n, i, o, c, u, l, s, f = this, d = f.constructor;
  if (!f.isFinite() || f.isZero())
    return new d(f);
  for (de = !1, o = f.s * He(f.s * f, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (t = Ke(f.d), e = f.e, (o = (e - t.length + 1) % 3) && (t += o == 1 || o == -2 ? "0" : "00"), o = He(t, 1 / 3), e = Ge((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? t = "5e" + e : (t = o.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new d(t), n.s = f.s) : n = new d(o.toString()), c = (e = d.precision) + 3; ; )
    if (u = n, l = u.times(u).times(u), s = l.plus(f), n = Se(s.plus(f).times(u), s.plus(l), c + 2, 1), Ke(u.d).slice(0, c) === (t = Ke(n.d)).slice(0, c))
      if (t = t.slice(c - 3, c + 1), t == "9999" || !i && t == "4999") {
        if (!i && (se(u, e + 1, 0), u.times(u).times(u).eq(f))) {
          n = u;
          break;
        }
        c += 4, i = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (se(n, e + 1, 1), r = !n.times(n).times(n).eq(f));
        break;
      }
  return de = !0, se(n, e, d.rounding, r);
};
Y.decimalPlaces = Y.dp = function() {
  var e, r = this.d, t = NaN;
  if (r) {
    if (e = r.length - 1, t = (e - Ge(this.e / ce)) * ce, e = r[e], e)
      for (; e % 10 == 0; e /= 10)
        t--;
    t < 0 && (t = 0);
  }
  return t;
};
Y.dividedBy = Y.div = function(e) {
  return Se(this, new this.constructor(e));
};
Y.dividedToIntegerBy = Y.divToInt = function(e) {
  var r = this, t = r.constructor;
  return se(Se(r, new t(e), 0, 1, 1), t.precision, t.rounding);
};
Y.equals = Y.eq = function(e) {
  return this.cmp(e) === 0;
};
Y.floor = function() {
  return se(new this.constructor(this), this.e + 1, 3);
};
Y.greaterThan = Y.gt = function(e) {
  return this.cmp(e) > 0;
};
Y.greaterThanOrEqualTo = Y.gte = function(e) {
  var r = this.cmp(e);
  return r == 1 || r === 0;
};
Y.hyperbolicCosine = Y.cosh = function() {
  var e, r, t, n, i, o = this, c = o.constructor, u = new c(1);
  if (!o.isFinite())
    return new c(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return u;
  t = c.precision, n = c.rounding, c.precision = t + Math.max(o.e, o.sd()) + 4, c.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), r = (1 / gn(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = Zt(c, 1, o.times(r), new c(1), !0);
  for (var l, s = e, f = new c(8); s--; )
    l = o.times(o), o = u.minus(l.times(f.minus(l.times(f))));
  return se(o, c.precision = t, c.rounding = n, !0);
};
Y.hyperbolicSine = Y.sinh = function() {
  var e, r, t, n, i = this, o = i.constructor;
  if (!i.isFinite() || i.isZero())
    return new o(i);
  if (r = o.precision, t = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
    i = Zt(o, 2, i, i, !0);
  else {
    e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / gn(5, e)), i = Zt(o, 2, i, i, !0);
    for (var c, u = new o(5), l = new o(16), s = new o(20); e--; )
      c = i.times(i), i = i.times(u.plus(c.times(l.times(c).plus(s))));
  }
  return o.precision = r, o.rounding = t, se(i, r, t, !0);
};
Y.hyperbolicTangent = Y.tanh = function() {
  var e, r, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 7, n.rounding = 1, Se(t.sinh(), t.cosh(), n.precision = e, n.rounding = r)) : new n(t.s);
};
Y.inverseCosine = Y.acos = function() {
  var e, r = this, t = r.constructor, n = r.abs().cmp(1), i = t.precision, o = t.rounding;
  return n !== -1 ? n === 0 ? r.isNeg() ? vt(t, i, o) : new t(0) : new t(NaN) : r.isZero() ? vt(t, i + 4, o).times(0.5) : (t.precision = i + 6, t.rounding = 1, r = r.asin(), e = vt(t, i + 4, o).times(0.5), t.precision = i, t.rounding = o, e.minus(r));
};
Y.inverseHyperbolicCosine = Y.acosh = function() {
  var e, r, t = this, n = t.constructor;
  return t.lte(1) ? new n(t.eq(1) ? 0 : NaN) : t.isFinite() ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(Math.abs(t.e), t.sd()) + 4, n.rounding = 1, de = !1, t = t.times(t).minus(1).sqrt().plus(t), de = !0, n.precision = e, n.rounding = r, t.ln()) : new n(t);
};
Y.inverseHyperbolicSine = Y.asinh = function() {
  var e, r, t = this, n = t.constructor;
  return !t.isFinite() || t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 2 * Math.max(Math.abs(t.e), t.sd()) + 6, n.rounding = 1, de = !1, t = t.times(t).plus(1).sqrt().plus(t), de = !0, n.precision = e, n.rounding = r, t.ln());
};
Y.inverseHyperbolicTangent = Y.atanh = function() {
  var e, r, t, n, i = this, o = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, r = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? se(new o(i), e, r, !0) : (o.precision = t = n - i.e, i = Se(i.plus(1), new o(1).minus(i), t + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = r, i.times(0.5))) : new o(NaN);
};
Y.inverseSine = Y.asin = function() {
  var e, r, t, n, i = this, o = i.constructor;
  return i.isZero() ? new o(i) : (r = i.abs().cmp(1), t = o.precision, n = o.rounding, r !== -1 ? r === 0 ? (e = vt(o, t + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = t + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = t, o.rounding = n, i.times(2)));
};
Y.inverseTangent = Y.atan = function() {
  var e, r, t, n, i, o, c, u, l, s = this, f = s.constructor, d = f.precision, a = f.rounding;
  if (s.isFinite()) {
    if (s.isZero())
      return new f(s);
    if (s.abs().eq(1) && d + 4 <= Un)
      return c = vt(f, d + 4, a).times(0.25), c.s = s.s, c;
  } else {
    if (!s.s)
      return new f(NaN);
    if (d + 4 <= Un)
      return c = vt(f, d + 4, a).times(0.5), c.s = s.s, c;
  }
  for (f.precision = u = d + 10, f.rounding = 1, t = Math.min(28, u / ce + 2 | 0), e = t; e; --e)
    s = s.div(s.times(s).plus(1).sqrt().plus(1));
  for (de = !1, r = Math.ceil(u / ce), n = 1, l = s.times(s), c = new f(s), i = s; e !== -1; )
    if (i = i.times(l), o = c.minus(i.div(n += 2)), i = i.times(l), c = o.plus(i.div(n += 2)), c.d[r] !== void 0)
      for (e = r; c.d[e] === o.d[e] && e--; )
        ;
  return t && (c = c.times(2 << t - 1)), de = !0, se(c, f.precision = d, f.rounding = a, !0);
};
Y.isFinite = function() {
  return !!this.d;
};
Y.isInteger = Y.isInt = function() {
  return !!this.d && Ge(this.e / ce) > this.d.length - 2;
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
Y.lessThan = Y.lt = function(e) {
  return this.cmp(e) < 0;
};
Y.lessThanOrEqualTo = Y.lte = function(e) {
  return this.cmp(e) < 1;
};
Y.logarithm = Y.log = function(e) {
  var r, t, n, i, o, c, u, l, s = this, f = s.constructor, d = f.precision, a = f.rounding, h = 5;
  if (e == null)
    e = new f(10), r = !0;
  else {
    if (e = new f(e), t = e.d, e.s < 0 || !t || !t[0] || e.eq(1))
      return new f(NaN);
    r = e.eq(10);
  }
  if (t = s.d, s.s < 0 || !t || !t[0] || s.eq(1))
    return new f(t && !t[0] ? -1 / 0 : s.s != 1 ? NaN : t ? 0 : 1 / 0);
  if (r)
    if (t.length > 1)
      o = !0;
    else {
      for (i = t[0]; i % 10 === 0; )
        i /= 10;
      o = i !== 1;
    }
  if (de = !1, u = d + h, c = Nt(s, u), n = r ? fn(f, u + 10) : Nt(e, u), l = Se(c, n, u, 1), fr(l.d, i = d, a))
    do
      if (u += 10, c = Nt(s, u), n = r ? fn(f, u + 10) : Nt(e, u), l = Se(c, n, u, 1), !o) {
        +Ke(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = se(l, d + 1, 0));
        break;
      }
    while (fr(l.d, i += 10, a));
  return de = !0, se(l, d, a);
};
Y.minus = Y.sub = function(e) {
  var r, t, n, i, o, c, u, l, s, f, d, a, h = this, x = h.constructor;
  if (e = new x(e), !h.d || !e.d)
    return !h.s || !e.s ? e = new x(NaN) : h.d ? e.s = -e.s : e = new x(e.d || h.s !== e.s ? h : NaN), e;
  if (h.s != e.s)
    return e.s = -e.s, h.plus(e);
  if (s = h.d, a = e.d, u = x.precision, l = x.rounding, !s[0] || !a[0]) {
    if (a[0])
      e.s = -e.s;
    else if (s[0])
      e = new x(h);
    else
      return new x(l === 3 ? -0 : 0);
    return de ? se(e, u, l) : e;
  }
  if (t = Ge(e.e / ce), f = Ge(h.e / ce), s = s.slice(), o = f - t, o) {
    for (d = o < 0, d ? (r = s, o = -o, c = a.length) : (r = a, t = f, c = s.length), n = Math.max(Math.ceil(u / ce), c) + 2, o > n && (o = n, r.length = 1), r.reverse(), n = o; n--; )
      r.push(0);
    r.reverse();
  } else {
    for (n = s.length, c = a.length, d = n < c, d && (c = n), n = 0; n < c; n++)
      if (s[n] != a[n]) {
        d = s[n] < a[n];
        break;
      }
    o = 0;
  }
  for (d && (r = s, s = a, a = r, e.s = -e.s), c = s.length, n = a.length - c; n > 0; --n)
    s[c++] = 0;
  for (n = a.length; n > o; ) {
    if (s[--n] < a[n]) {
      for (i = n; i && s[--i] === 0; )
        s[i] = pt - 1;
      --s[i], s[n] += pt;
    }
    s[n] -= a[n];
  }
  for (; s[--c] === 0; )
    s.pop();
  for (; s[0] === 0; s.shift())
    --t;
  return s[0] ? (e.d = s, e.e = bn(s, t), de ? se(e, u, l) : e) : new x(l === 3 ? -0 : 0);
};
Y.modulo = Y.mod = function(e) {
  var r, t = this, n = t.constructor;
  return e = new n(e), !t.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || t.d && !t.d[0] ? se(new n(t), n.precision, n.rounding) : (de = !1, n.modulo == 9 ? (r = Se(t, e.abs(), 0, 3, 1), r.s *= e.s) : r = Se(t, e, 0, n.modulo, 1), r = r.times(e), de = !0, t.minus(r));
};
Y.naturalExponential = Y.exp = function() {
  return Vn(this);
};
Y.naturalLogarithm = Y.ln = function() {
  return Nt(this);
};
Y.negated = Y.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, se(e);
};
Y.plus = Y.add = function(e) {
  var r, t, n, i, o, c, u, l, s, f, d = this, a = d.constructor;
  if (e = new a(e), !d.d || !e.d)
    return !d.s || !e.s ? e = new a(NaN) : d.d || (e = new a(e.d || d.s === e.s ? d : NaN)), e;
  if (d.s != e.s)
    return e.s = -e.s, d.minus(e);
  if (s = d.d, f = e.d, u = a.precision, l = a.rounding, !s[0] || !f[0])
    return f[0] || (e = new a(d)), de ? se(e, u, l) : e;
  if (o = Ge(d.e / ce), n = Ge(e.e / ce), s = s.slice(), i = o - n, i) {
    for (i < 0 ? (t = s, i = -i, c = f.length) : (t = f, n = o, c = s.length), o = Math.ceil(u / ce), c = o > c ? o + 1 : c + 1, i > c && (i = c, t.length = 1), t.reverse(); i--; )
      t.push(0);
    t.reverse();
  }
  for (c = s.length, i = f.length, c - i < 0 && (i = c, t = f, f = s, s = t), r = 0; i; )
    r = (s[--i] = s[i] + f[i] + r) / pt | 0, s[i] %= pt;
  for (r && (s.unshift(r), ++n), c = s.length; s[--c] == 0; )
    s.pop();
  return e.d = s, e.e = bn(s, n), de ? se(e, u, l) : e;
};
Y.precision = Y.sd = function(e) {
  var r, t = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Tt + e);
  return t.d ? (r = Pi(t.d), e && t.e + 1 > r && (r = t.e + 1)) : r = NaN, r;
};
Y.round = function() {
  var e = this, r = e.constructor;
  return se(new r(e), e.e + 1, r.rounding);
};
Y.sine = Y.sin = function() {
  var e, r, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + ce, n.rounding = 1, t = mc(n, zi(n, t)), n.precision = e, n.rounding = r, se(Rt > 2 ? t.neg() : t, e, r, !0)) : new n(NaN);
};
Y.squareRoot = Y.sqrt = function() {
  var e, r, t, n, i, o, c = this, u = c.d, l = c.e, s = c.s, f = c.constructor;
  if (s !== 1 || !u || !u[0])
    return new f(!s || s < 0 && (!u || u[0]) ? NaN : u ? c : 1 / 0);
  for (de = !1, s = Math.sqrt(+c), s == 0 || s == 1 / 0 ? (r = Ke(u), (r.length + l) % 2 == 0 && (r += "0"), s = Math.sqrt(r), l = Ge((l + 1) / 2) - (l < 0 || l % 2), s == 1 / 0 ? r = "5e" + l : (r = s.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + l), n = new f(r)) : n = new f(s.toString()), t = (l = f.precision) + 3; ; )
    if (o = n, n = o.plus(Se(c, o, t + 2, 1)).times(0.5), Ke(o.d).slice(0, t) === (r = Ke(n.d)).slice(0, t))
      if (r = r.slice(t - 3, t + 1), r == "9999" || !i && r == "4999") {
        if (!i && (se(o, l + 1, 0), o.times(o).eq(c))) {
          n = o;
          break;
        }
        t += 4, i = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (se(n, l + 1, 1), e = !n.times(n).eq(c));
        break;
      }
  return de = !0, se(n, l, f.rounding, e);
};
Y.tangent = Y.tan = function() {
  var e, r, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 10, n.rounding = 1, t = t.sin(), t.s = 1, t = Se(t, new n(1).minus(t.times(t)).sqrt(), e + 10, 0), n.precision = e, n.rounding = r, se(Rt == 2 || Rt == 4 ? t.neg() : t, e, r, !0)) : new n(NaN);
};
Y.times = Y.mul = function(e) {
  var r, t, n, i, o, c, u, l, s, f = this, d = f.constructor, a = f.d, h = (e = new d(e)).d;
  if (e.s *= f.s, !a || !a[0] || !h || !h[0])
    return new d(!e.s || a && !a[0] && !h || h && !h[0] && !a ? NaN : !a || !h ? e.s / 0 : e.s * 0);
  for (t = Ge(f.e / ce) + Ge(e.e / ce), l = a.length, s = h.length, l < s && (o = a, a = h, h = o, c = l, l = s, s = c), o = [], c = l + s, n = c; n--; )
    o.push(0);
  for (n = s; --n >= 0; ) {
    for (r = 0, i = l + n; i > n; )
      u = o[i] + h[n] * a[i - n - 1] + r, o[i--] = u % pt | 0, r = u / pt | 0;
    o[i] = (o[i] + r) % pt | 0;
  }
  for (; !o[--c]; )
    o.pop();
  return r ? ++t : o.shift(), e.d = o, e.e = bn(o, t), de ? se(e, d.precision, d.rounding) : e;
};
Y.toBinary = function(e, r) {
  return jn(this, 2, e, r);
};
Y.toDecimalPlaces = Y.toDP = function(e, r) {
  var t = this, n = t.constructor;
  return t = new n(t), e === void 0 ? t : (Qe(e, 0, It), r === void 0 ? r = n.rounding : Qe(r, 0, 8), se(t, e + t.e + 1, r));
};
Y.toExponential = function(e, r) {
  var t, n = this, i = n.constructor;
  return e === void 0 ? t = wt(n, !0) : (Qe(e, 0, It), r === void 0 ? r = i.rounding : Qe(r, 0, 8), n = se(new i(n), e + 1, r), t = wt(n, !0, e + 1)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
Y.toFixed = function(e, r) {
  var t, n, i = this, o = i.constructor;
  return e === void 0 ? t = wt(i) : (Qe(e, 0, It), r === void 0 ? r = o.rounding : Qe(r, 0, 8), n = se(new o(i), e + i.e + 1, r), t = wt(n, !1, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + t : t;
};
Y.toFraction = function(e) {
  var r, t, n, i, o, c, u, l, s, f, d, a, h = this, x = h.d, v = h.constructor;
  if (!x)
    return new v(h);
  if (s = t = new v(1), n = l = new v(0), r = new v(n), o = r.e = Pi(x) - h.e - 1, c = o % ce, r.d[0] = He(10, c < 0 ? ce + c : c), e == null)
    e = o > 0 ? r : s;
  else {
    if (u = new v(e), !u.isInt() || u.lt(s))
      throw Error(Tt + u);
    e = u.gt(r) ? o > 0 ? r : s : u;
  }
  for (de = !1, u = new v(Ke(x)), f = v.precision, v.precision = o = x.length * ce * 2; d = Se(u, r, 0, 1, 1), i = t.plus(d.times(n)), i.cmp(e) != 1; )
    t = n, n = i, i = s, s = l.plus(d.times(i)), l = i, i = r, r = u.minus(d.times(i)), u = i;
  return i = Se(e.minus(t), n, 0, 1, 1), l = l.plus(i.times(s)), t = t.plus(i.times(n)), l.s = s.s = h.s, a = Se(s, n, o, 1).minus(h).abs().cmp(Se(l, t, o, 1).minus(h).abs()) < 1 ? [s, n] : [l, t], v.precision = f, de = !0, a;
};
Y.toHexadecimal = Y.toHex = function(e, r) {
  return jn(this, 16, e, r);
};
Y.toNearest = function(e, r) {
  var t = this, n = t.constructor;
  if (t = new n(t), e == null) {
    if (!t.d)
      return t;
    e = new n(1), r = n.rounding;
  } else {
    if (e = new n(e), r === void 0 ? r = n.rounding : Qe(r, 0, 8), !t.d)
      return e.s ? t : e;
    if (!e.d)
      return e.s && (e.s = t.s), e;
  }
  return e.d[0] ? (de = !1, t = Se(t, e, 0, r, 1).times(e), de = !0, se(t)) : (e.s = t.s, t = e), t;
};
Y.toNumber = function() {
  return +this;
};
Y.toOctal = function(e, r) {
  return jn(this, 8, e, r);
};
Y.toPower = Y.pow = function(e) {
  var r, t, n, i, o, c, u = this, l = u.constructor, s = +(e = new l(e));
  if (!u.d || !e.d || !u.d[0] || !e.d[0])
    return new l(He(+u, s));
  if (u = new l(u), u.eq(1))
    return u;
  if (n = l.precision, o = l.rounding, e.eq(1))
    return se(u, n, o);
  if (r = Ge(e.e / ce), r >= e.d.length - 1 && (t = s < 0 ? -s : s) <= pc)
    return i = $i(l, u, t, n), e.s < 0 ? new l(1).div(i) : se(i, n, o);
  if (c = u.s, c < 0) {
    if (r < e.d.length - 1)
      return new l(NaN);
    if (e.d[r] & 1 || (c = 1), u.e == 0 && u.d[0] == 1 && u.d.length == 1)
      return u.s = c, u;
  }
  return t = He(+u, s), r = t == 0 || !isFinite(t) ? Ge(s * (Math.log("0." + Ke(u.d)) / Math.LN10 + u.e + 1)) : new l(t + "").e, r > l.maxE + 1 || r < l.minE - 1 ? new l(r > 0 ? c / 0 : 0) : (de = !1, l.rounding = u.s = 1, t = Math.min(12, (r + "").length), i = Vn(e.times(Nt(u, n + t)), n), i.d && (i = se(i, n + 5, 1), fr(i.d, n, o) && (r = n + 10, i = se(Vn(e.times(Nt(u, r + t)), r), r + 5, 1), +Ke(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = se(i, n + 1, 0)))), i.s = c, de = !0, l.rounding = o, se(i, n, o));
};
Y.toPrecision = function(e, r) {
  var t, n = this, i = n.constructor;
  return e === void 0 ? t = wt(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (Qe(e, 1, It), r === void 0 ? r = i.rounding : Qe(r, 0, 8), n = se(new i(n), e, r), t = wt(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
Y.toSignificantDigits = Y.toSD = function(e, r) {
  var t = this, n = t.constructor;
  return e === void 0 ? (e = n.precision, r = n.rounding) : (Qe(e, 1, It), r === void 0 ? r = n.rounding : Qe(r, 0, 8)), se(new n(t), e, r);
};
Y.toString = function() {
  var e = this, r = e.constructor, t = wt(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + t : t;
};
Y.truncated = Y.trunc = function() {
  return se(new this.constructor(this), this.e + 1, 1);
};
Y.valueOf = Y.toJSON = function() {
  var e = this, r = e.constructor, t = wt(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() ? "-" + t : t;
};
function Ke(e) {
  var r, t, n, i = e.length - 1, o = "", c = e[0];
  if (i > 0) {
    for (o += c, r = 1; r < i; r++)
      n = e[r] + "", t = ce - n.length, t && (o += Lt(t)), o += n;
    c = e[r], n = c + "", t = ce - n.length, t && (o += Lt(t));
  } else if (c === 0)
    return "0";
  for (; c % 10 === 0; )
    c /= 10;
  return o + c;
}
function Qe(e, r, t) {
  if (e !== ~~e || e < r || e > t)
    throw Error(Tt + e);
}
function fr(e, r, t, n) {
  var i, o, c, u;
  for (o = e[0]; o >= 10; o /= 10)
    --r;
  return --r < 0 ? (r += ce, i = 0) : (i = Math.ceil((r + 1) / ce), r %= ce), o = He(10, ce - r), u = e[i] % o | 0, n == null ? r < 3 ? (r == 0 ? u = u / 100 | 0 : r == 1 && (u = u / 10 | 0), c = t < 4 && u == 99999 || t > 3 && u == 49999 || u == 5e4 || u == 0) : c = (t < 4 && u + 1 == o || t > 3 && u + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == He(10, r - 2) - 1 || (u == o / 2 || u == 0) && (e[i + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? u = u / 1e3 | 0 : r == 1 ? u = u / 100 | 0 : r == 2 && (u = u / 10 | 0), c = (n || t < 4) && u == 9999 || !n && t > 3 && u == 4999) : c = ((n || t < 4) && u + 1 == o || !n && t > 3 && u + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == He(10, r - 3) - 1, c;
}
function Er(e, r, t) {
  for (var n, i = [0], o, c = 0, u = e.length; c < u; ) {
    for (o = i.length; o--; )
      i[o] *= r;
    for (i[0] += qn.indexOf(e.charAt(c++)), n = 0; n < i.length; n++)
      i[n] > t - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / t | 0, i[n] %= t);
  }
  return i.reverse();
}
function bc(e, r) {
  var t, n, i;
  if (r.isZero())
    return r;
  n = r.d.length, n < 32 ? (t = Math.ceil(n / 3), i = (1 / gn(4, t)).toString()) : (t = 16, i = "2.3283064365386962890625e-10"), e.precision += t, r = Zt(e, 1, r.times(i), new e(1));
  for (var o = t; o--; ) {
    var c = r.times(r);
    r = c.times(c).minus(c).times(8).plus(1);
  }
  return e.precision -= t, r;
}
var Se = function() {
  function e(n, i, o) {
    var c, u = 0, l = n.length;
    for (n = n.slice(); l--; )
      c = n[l] * i + u, n[l] = c % o | 0, u = c / o | 0;
    return u && n.unshift(u), n;
  }
  function r(n, i, o, c) {
    var u, l;
    if (o != c)
      l = o > c ? 1 : -1;
    else
      for (u = l = 0; u < o; u++)
        if (n[u] != i[u]) {
          l = n[u] > i[u] ? 1 : -1;
          break;
        }
    return l;
  }
  function t(n, i, o, c) {
    for (var u = 0; o--; )
      n[o] -= u, u = n[o] < i[o] ? 1 : 0, n[o] = u * c + n[o] - i[o];
    for (; !n[0] && n.length > 1; )
      n.shift();
  }
  return function(n, i, o, c, u, l) {
    var s, f, d, a, h, x, v, m, B, _, p, g, y, E, k, R, I, C, A, T, L = n.constructor, $ = n.s == i.s ? 1 : -1, M = n.d, V = i.d;
    if (!M || !M[0] || !V || !V[0])
      return new L(
        // Return NaN if either NaN, or both Infinity or 0.
        !n.s || !i.s || (M ? V && M[0] == V[0] : !V) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          M && M[0] == 0 || !V ? $ * 0 : $ / 0
        )
      );
    for (l ? (h = 1, f = n.e - i.e) : (l = pt, h = ce, f = Ge(n.e / h) - Ge(i.e / h)), A = V.length, I = M.length, B = new L($), _ = B.d = [], d = 0; V[d] == (M[d] || 0); d++)
      ;
    if (V[d] > (M[d] || 0) && f--, o == null ? (E = o = L.precision, c = L.rounding) : u ? E = o + (n.e - i.e) + 1 : E = o, E < 0)
      _.push(1), x = !0;
    else {
      if (E = E / h + 2 | 0, d = 0, A == 1) {
        for (a = 0, V = V[0], E++; (d < I || a) && E--; d++)
          k = a * l + (M[d] || 0), _[d] = k / V | 0, a = k % V | 0;
        x = a || d < I;
      } else {
        for (a = l / (V[0] + 1) | 0, a > 1 && (V = e(V, a, l), M = e(M, a, l), A = V.length, I = M.length), R = A, p = M.slice(0, A), g = p.length; g < A; )
          p[g++] = 0;
        T = V.slice(), T.unshift(0), C = V[0], V[1] >= l / 2 && ++C;
        do
          a = 0, s = r(V, p, A, g), s < 0 ? (y = p[0], A != g && (y = y * l + (p[1] || 0)), a = y / C | 0, a > 1 ? (a >= l && (a = l - 1), v = e(V, a, l), m = v.length, g = p.length, s = r(v, p, m, g), s == 1 && (a--, t(v, A < m ? T : V, m, l))) : (a == 0 && (s = a = 1), v = V.slice()), m = v.length, m < g && v.unshift(0), t(p, v, g, l), s == -1 && (g = p.length, s = r(V, p, A, g), s < 1 && (a++, t(p, A < g ? T : V, g, l))), g = p.length) : s === 0 && (a++, p = [0]), _[d++] = a, s && p[0] ? p[g++] = M[R] || 0 : (p = [M[R]], g = 1);
        while ((R++ < I || p[0] !== void 0) && E--);
        x = p[0] !== void 0;
      }
      _[0] || _.shift();
    }
    if (h == 1)
      B.e = f, Di = x;
    else {
      for (d = 1, a = _[0]; a >= 10; a /= 10)
        d++;
      B.e = d + f * h - 1, se(B, u ? o + B.e + 1 : o, c, x);
    }
    return B;
  };
}();
function se(e, r, t, n) {
  var i, o, c, u, l, s, f, d, a, h = e.constructor;
  e:
    if (r != null) {
      if (d = e.d, !d)
        return e;
      for (i = 1, u = d[0]; u >= 10; u /= 10)
        i++;
      if (o = r - i, o < 0)
        o += ce, c = r, f = d[a = 0], l = f / He(10, i - c - 1) % 10 | 0;
      else if (a = Math.ceil((o + 1) / ce), u = d.length, a >= u)
        if (n) {
          for (; u++ <= a; )
            d.push(0);
          f = l = 0, i = 1, o %= ce, c = o - ce + 1;
        } else
          break e;
      else {
        for (f = u = d[a], i = 1; u >= 10; u /= 10)
          i++;
        o %= ce, c = o - ce + i, l = c < 0 ? 0 : f / He(10, i - c - 1) % 10 | 0;
      }
      if (n = n || r < 0 || d[a + 1] !== void 0 || (c < 0 ? f : f % He(10, i - c - 1)), s = t < 4 ? (l || n) && (t == 0 || t == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (t == 4 || n || t == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? c > 0 ? f / He(10, i - c) : 0 : d[a - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), r < 1 || !d[0])
        return d.length = 0, s ? (r -= e.e + 1, d[0] = He(10, (ce - r % ce) % ce), e.e = -r || 0) : d[0] = e.e = 0, e;
      if (o == 0 ? (d.length = a, u = 1, a--) : (d.length = a + 1, u = He(10, ce - o), d[a] = c > 0 ? (f / He(10, i - c) % He(10, c) | 0) * u : 0), s)
        for (; ; )
          if (a == 0) {
            for (o = 1, c = d[0]; c >= 10; c /= 10)
              o++;
            for (c = d[0] += u, u = 1; c >= 10; c /= 10)
              u++;
            o != u && (e.e++, d[0] == pt && (d[0] = 1));
            break;
          } else {
            if (d[a] += u, d[a] != pt)
              break;
            d[a--] = 0, u = 1;
          }
      for (o = d.length; d[--o] === 0; )
        d.pop();
    }
  return de && (e.e > h.maxE ? (e.d = null, e.e = NaN) : e.e < h.minE && (e.e = 0, e.d = [0])), e;
}
function wt(e, r, t) {
  if (!e.isFinite())
    return Hi(e);
  var n, i = e.e, o = Ke(e.d), c = o.length;
  return r ? (t && (n = t - c) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Lt(n) : c > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + Lt(-i - 1) + o, t && (n = t - c) > 0 && (o += Lt(n))) : i >= c ? (o += Lt(i + 1 - c), t && (n = t - i - 1) > 0 && (o = o + "." + Lt(n))) : ((n = i + 1) < c && (o = o.slice(0, n) + "." + o.slice(n)), t && (n = t - c) > 0 && (i + 1 === c && (o += "."), o += Lt(n))), o;
}
function bn(e, r) {
  var t = e[0];
  for (r *= ce; t >= 10; t /= 10)
    r++;
  return r;
}
function fn(e, r, t) {
  if (r > xc)
    throw de = !0, t && (e.precision = t), Error(Li);
  return se(new e(cn), r, 1, !0);
}
function vt(e, r, t) {
  if (r > Un)
    throw Error(Li);
  return se(new e(un), r, t, !0);
}
function Pi(e) {
  var r = e.length - 1, t = r * ce + 1;
  if (r = e[r], r) {
    for (; r % 10 == 0; r /= 10)
      t--;
    for (r = e[0]; r >= 10; r /= 10)
      t++;
  }
  return t;
}
function Lt(e) {
  for (var r = ""; e--; )
    r += "0";
  return r;
}
function $i(e, r, t, n) {
  var i, o = new e(1), c = Math.ceil(n / ce + 4);
  for (de = !1; ; ) {
    if (t % 2 && (o = o.times(r), ti(o.d, c) && (i = !0)), t = Ge(t / 2), t === 0) {
      t = o.d.length - 1, i && o.d[t] === 0 && ++o.d[t];
      break;
    }
    r = r.times(r), ti(r.d, c);
  }
  return de = !0, o;
}
function ei(e) {
  return e.d[e.d.length - 1] & 1;
}
function Mi(e, r, t) {
  for (var n, i = new e(r[0]), o = 0; ++o < r.length; )
    if (n = new e(r[o]), n.s)
      i[t](n) && (i = n);
    else {
      i = n;
      break;
    }
  return i;
}
function Vn(e, r) {
  var t, n, i, o, c, u, l, s = 0, f = 0, d = 0, a = e.constructor, h = a.rounding, x = a.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new a(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (r == null ? (de = !1, l = x) : l = r, u = new a(0.03125); e.e > -2; )
    e = e.times(u), d += 5;
  for (n = Math.log(He(2, d)) / Math.LN10 * 2 + 5 | 0, l += n, t = o = c = new a(1), a.precision = l; ; ) {
    if (o = se(o.times(e), l, 1), t = t.times(++f), u = c.plus(Se(o, t, l, 1)), Ke(u.d).slice(0, l) === Ke(c.d).slice(0, l)) {
      for (i = d; i--; )
        c = se(c.times(c), l, 1);
      if (r == null)
        if (s < 3 && fr(c.d, l - n, h, s))
          a.precision = l += 10, t = o = u = new a(1), f = 0, s++;
        else
          return se(c, a.precision = x, h, de = !0);
      else
        return a.precision = x, c;
    }
    c = u;
  }
}
function Nt(e, r) {
  var t, n, i, o, c, u, l, s, f, d, a, h = 1, x = 10, v = e, m = v.d, B = v.constructor, _ = B.rounding, p = B.precision;
  if (v.s < 0 || !m || !m[0] || !v.e && m[0] == 1 && m.length == 1)
    return new B(m && !m[0] ? -1 / 0 : v.s != 1 ? NaN : m ? 0 : v);
  if (r == null ? (de = !1, f = p) : f = r, B.precision = f += x, t = Ke(m), n = t.charAt(0), Math.abs(o = v.e) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && t.charAt(1) > 3; )
      v = v.times(e), t = Ke(v.d), n = t.charAt(0), h++;
    o = v.e, n > 1 ? (v = new B("0." + t), o++) : v = new B(n + "." + t.slice(1));
  } else
    return s = fn(B, f + 2, p).times(o + ""), v = Nt(new B(n + "." + t.slice(1)), f - x).plus(s), B.precision = p, r == null ? se(v, p, _, de = !0) : v;
  for (d = v, l = c = v = Se(v.minus(1), v.plus(1), f, 1), a = se(v.times(v), f, 1), i = 3; ; ) {
    if (c = se(c.times(a), f, 1), s = l.plus(Se(c, new B(i), f, 1)), Ke(s.d).slice(0, f) === Ke(l.d).slice(0, f))
      if (l = l.times(2), o !== 0 && (l = l.plus(fn(B, f + 2, p).times(o + ""))), l = Se(l, new B(h), f, 1), r == null)
        if (fr(l.d, f - x, _, u))
          B.precision = f += x, s = c = v = Se(d.minus(1), d.plus(1), f, 1), a = se(v.times(v), f, 1), i = u = 1;
        else
          return se(l, B.precision = p, _, de = !0);
      else
        return B.precision = p, l;
    l = s, i += 2;
  }
}
function Hi(e) {
  return String(e.s * e.s / 0);
}
function Wn(e, r) {
  var t, n, i;
  for ((t = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (n = r.search(/e/i)) > 0 ? (t < 0 && (t = n), t += +r.slice(n + 1), r = r.substring(0, n)) : t < 0 && (t = r.length), n = 0; r.charCodeAt(n) === 48; n++)
    ;
  for (i = r.length; r.charCodeAt(i - 1) === 48; --i)
    ;
  if (r = r.slice(n, i), r) {
    if (i -= n, e.e = t = t - n - 1, e.d = [], n = (t + 1) % ce, t < 0 && (n += ce), n < i) {
      for (n && e.d.push(+r.slice(0, n)), i -= ce; n < i; )
        e.d.push(+r.slice(n, n += ce));
      r = r.slice(n), n = ce - r.length;
    } else
      n -= i;
    for (; n--; )
      r += "0";
    e.d.push(+r), de && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function gc(e, r) {
  var t, n, i, o, c, u, l, s, f;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), Ii.test(r))
      return Wn(e, r);
  } else if (r === "Infinity" || r === "NaN")
    return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (hc.test(r))
    t = 16, r = r.toLowerCase();
  else if (dc.test(r))
    t = 2;
  else if (vc.test(r))
    t = 8;
  else
    throw Error(Tt + r);
  for (o = r.search(/p/i), o > 0 ? (l = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), c = o >= 0, n = e.constructor, c && (r = r.replace(".", ""), u = r.length, o = u - o, i = $i(n, new n(t), o, o * 2)), s = Er(r, t, pt), f = s.length - 1, o = f; s[o] === 0; --o)
    s.pop();
  return o < 0 ? new n(e.s * 0) : (e.e = bn(s, f), e.d = s, de = !1, c && (e = Se(e, i, u * 4)), l && (e = e.times(Math.abs(l) < 54 ? He(2, l) : lr.pow(2, l))), de = !0, e);
}
function mc(e, r) {
  var t, n = r.d.length;
  if (n < 3)
    return r.isZero() ? r : Zt(e, 2, r, r);
  t = 1.4 * Math.sqrt(n), t = t > 16 ? 16 : t | 0, r = r.times(1 / gn(5, t)), r = Zt(e, 2, r, r);
  for (var i, o = new e(5), c = new e(16), u = new e(20); t--; )
    i = r.times(r), r = r.times(o.plus(i.times(c.times(i).minus(u))));
  return r;
}
function Zt(e, r, t, n, i) {
  var o, c, u, l, s = e.precision, f = Math.ceil(s / ce);
  for (de = !1, l = t.times(t), u = new e(n); ; ) {
    if (c = Se(u.times(l), new e(r++ * r++), s, 1), u = i ? n.plus(c) : n.minus(c), n = Se(c.times(l), new e(r++ * r++), s, 1), c = u.plus(n), c.d[f] !== void 0) {
      for (o = f; c.d[o] === u.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = u, u = n, n = c, c = o;
  }
  return de = !0, c.d.length = f + 1, c;
}
function gn(e, r) {
  for (var t = e; --r; )
    t *= e;
  return t;
}
function zi(e, r) {
  var t, n = r.s < 0, i = vt(e, e.precision, 1), o = i.times(0.5);
  if (r = r.abs(), r.lte(o))
    return Rt = n ? 4 : 1, r;
  if (t = r.divToInt(i), t.isZero())
    Rt = n ? 3 : 2;
  else {
    if (r = r.minus(t.times(i)), r.lte(o))
      return Rt = ei(t) ? n ? 2 : 3 : n ? 4 : 1, r;
    Rt = ei(t) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return r.minus(i).abs();
}
function jn(e, r, t, n) {
  var i, o, c, u, l, s, f, d, a, h = e.constructor, x = t !== void 0;
  if (x ? (Qe(t, 1, It), n === void 0 ? n = h.rounding : Qe(n, 0, 8)) : (t = h.precision, n = h.rounding), !e.isFinite())
    f = Hi(e);
  else {
    for (f = wt(e), c = f.indexOf("."), x ? (i = 2, r == 16 ? t = t * 4 - 3 : r == 8 && (t = t * 3 - 2)) : i = r, c >= 0 && (f = f.replace(".", ""), a = new h(1), a.e = f.length - c, a.d = Er(wt(a), 10, i), a.e = a.d.length), d = Er(f, 10, i), o = l = d.length; d[--l] == 0; )
      d.pop();
    if (!d[0])
      f = x ? "0p+0" : "0";
    else {
      if (c < 0 ? o-- : (e = new h(e), e.d = d, e.e = o, e = Se(e, a, t, n, 0, i), d = e.d, o = e.e, s = Di), c = d[t], u = i / 2, s = s || d[t + 1] !== void 0, s = n < 4 ? (c !== void 0 || s) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : c > u || c === u && (n === 4 || s || n === 6 && d[t - 1] & 1 || n === (e.s < 0 ? 8 : 7)), d.length = t, s)
        for (; ++d[--t] > i - 1; )
          d[t] = 0, t || (++o, d.unshift(1));
      for (l = d.length; !d[l - 1]; --l)
        ;
      for (c = 0, f = ""; c < l; c++)
        f += qn.charAt(d[c]);
      if (x) {
        if (l > 1)
          if (r == 16 || r == 8) {
            for (c = r == 16 ? 4 : 3, --l; l % c; l++)
              f += "0";
            for (d = Er(f, i, r), l = d.length; !d[l - 1]; --l)
              ;
            for (c = 1, f = "1."; c < l; c++)
              f += qn.charAt(d[c]);
          } else
            f = f.charAt(0) + "." + f.slice(1);
        f = f + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; )
          f = "0" + f;
        f = "0." + f;
      } else if (++o > l)
        for (o -= l; o--; )
          f += "0";
      else
        o < l && (f = f.slice(0, o) + "." + f.slice(o));
    }
    f = (r == 16 ? "0x" : r == 2 ? "0b" : r == 8 ? "0o" : "") + f;
  }
  return e.s < 0 ? "-" + f : f;
}
function ti(e, r) {
  if (e.length > r)
    return e.length = r, !0;
}
function yc(e) {
  return new this(e).abs();
}
function _c(e) {
  return new this(e).acos();
}
function wc(e) {
  return new this(e).acosh();
}
function kc(e, r) {
  return new this(e).plus(r);
}
function Ec(e) {
  return new this(e).asin();
}
function Cc(e) {
  return new this(e).asinh();
}
function Sc(e) {
  return new this(e).atan();
}
function Bc(e) {
  return new this(e).atanh();
}
function Ac(e, r) {
  e = new this(e), r = new this(r);
  var t, n = this.precision, i = this.rounding, o = n + 4;
  return !e.s || !r.s ? t = new this(NaN) : !e.d && !r.d ? (t = vt(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), t.s = e.s) : !r.d || e.isZero() ? (t = r.s < 0 ? vt(this, n, i) : new this(0), t.s = e.s) : !e.d || r.isZero() ? (t = vt(this, o, 1).times(0.5), t.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, t = this.atan(Se(e, r, o, 1)), r = vt(this, o, 1), this.precision = n, this.rounding = i, t = e.s < 0 ? t.minus(r) : t.plus(r)) : t = this.atan(Se(e, r, o, 1)), t;
}
function Rc(e) {
  return new this(e).cbrt();
}
function Oc(e) {
  return se(e = new this(e), e.e + 1, 2);
}
function Dc(e, r, t) {
  return new this(e).clamp(r, t);
}
function Lc(e) {
  if (!e || typeof e != "object")
    throw Error(xn + "Object expected");
  var r, t, n, i = e.defaults === !0, o = [
    "precision",
    1,
    It,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Yt,
    0,
    "toExpPos",
    0,
    Yt,
    "maxE",
    0,
    Yt,
    "minE",
    -Yt,
    0,
    "modulo",
    0,
    9
  ];
  for (r = 0; r < o.length; r += 3)
    if (t = o[r], i && (this[t] = Fn[t]), (n = e[t]) !== void 0)
      if (Ge(n) === n && n >= o[r + 1] && n <= o[r + 2])
        this[t] = n;
      else
        throw Error(Tt + t + ": " + n);
  if (t = "crypto", i && (this[t] = Fn[t]), (n = e[t]) !== void 0)
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[t] = !0;
        else
          throw Error(Ni);
      else
        this[t] = !1;
    else
      throw Error(Tt + t + ": " + n);
  return this;
}
function Nc(e) {
  return new this(e).cos();
}
function Tc(e) {
  return new this(e).cosh();
}
function qi(e) {
  var r, t, n;
  function i(o) {
    var c, u, l, s = this;
    if (!(s instanceof i))
      return new i(o);
    if (s.constructor = i, ri(o)) {
      s.s = o.s, de ? !o.d || o.e > i.maxE ? (s.e = NaN, s.d = null) : o.e < i.minE ? (s.e = 0, s.d = [0]) : (s.e = o.e, s.d = o.d.slice()) : (s.e = o.e, s.d = o.d ? o.d.slice() : o.d);
      return;
    }
    if (l = typeof o, l === "number") {
      if (o === 0) {
        s.s = 1 / o < 0 ? -1 : 1, s.e = 0, s.d = [0];
        return;
      }
      if (o < 0 ? (o = -o, s.s = -1) : s.s = 1, o === ~~o && o < 1e7) {
        for (c = 0, u = o; u >= 10; u /= 10)
          c++;
        de ? c > i.maxE ? (s.e = NaN, s.d = null) : c < i.minE ? (s.e = 0, s.d = [0]) : (s.e = c, s.d = [o]) : (s.e = c, s.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (s.s = NaN), s.e = NaN, s.d = null;
        return;
      }
      return Wn(s, o.toString());
    } else if (l !== "string")
      throw Error(Tt + o);
    return (u = o.charCodeAt(0)) === 45 ? (o = o.slice(1), s.s = -1) : (u === 43 && (o = o.slice(1)), s.s = 1), Ii.test(o) ? Wn(s, o) : gc(s, o);
  }
  if (i.prototype = Y, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Lc, i.clone = qi, i.isDecimal = ri, i.abs = yc, i.acos = _c, i.acosh = wc, i.add = kc, i.asin = Ec, i.asinh = Cc, i.atan = Sc, i.atanh = Bc, i.atan2 = Ac, i.cbrt = Rc, i.ceil = Oc, i.clamp = Dc, i.cos = Nc, i.cosh = Tc, i.div = Ic, i.exp = Pc, i.floor = $c, i.hypot = Mc, i.ln = Hc, i.log = zc, i.log10 = Fc, i.log2 = qc, i.max = Uc, i.min = Vc, i.mod = Wc, i.mul = Yc, i.pow = Kc, i.random = Gc, i.round = Zc, i.sign = Xc, i.sin = jc, i.sinh = Qc, i.sqrt = Jc, i.sub = eu, i.sum = tu, i.tan = ru, i.tanh = nu, i.trunc = iu, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < n.length; )
      e.hasOwnProperty(t = n[r++]) || (e[t] = this[t]);
  return i.config(e), i;
}
function Ic(e, r) {
  return new this(e).div(r);
}
function Pc(e) {
  return new this(e).exp();
}
function $c(e) {
  return se(e = new this(e), e.e + 1, 3);
}
function Mc() {
  var e, r, t = new this(0);
  for (de = !1, e = 0; e < arguments.length; )
    if (r = new this(arguments[e++]), r.d)
      t.d && (t = t.plus(r.times(r)));
    else {
      if (r.s)
        return de = !0, new this(1 / 0);
      t = r;
    }
  return de = !0, t.sqrt();
}
function ri(e) {
  return e instanceof lr || e && e.toStringTag === Ti || !1;
}
function Hc(e) {
  return new this(e).ln();
}
function zc(e, r) {
  return new this(e).log(r);
}
function qc(e) {
  return new this(e).log(2);
}
function Fc(e) {
  return new this(e).log(10);
}
function Uc() {
  return Mi(this, arguments, "lt");
}
function Vc() {
  return Mi(this, arguments, "gt");
}
function Wc(e, r) {
  return new this(e).mod(r);
}
function Yc(e, r) {
  return new this(e).mul(r);
}
function Kc(e, r) {
  return new this(e).pow(r);
}
function Gc(e) {
  var r, t, n, i, o = 0, c = new this(1), u = [];
  if (e === void 0 ? e = this.precision : Qe(e, 1, It), n = Math.ceil(e / ce), this.crypto)
    if (crypto.getRandomValues)
      for (r = crypto.getRandomValues(new Uint32Array(n)); o < n; )
        i = r[o], i >= 429e7 ? r[o] = crypto.getRandomValues(new Uint32Array(1))[0] : u[o++] = i % 1e7;
    else if (crypto.randomBytes) {
      for (r = crypto.randomBytes(n *= 4); o < n; )
        i = r[o] + (r[o + 1] << 8) + (r[o + 2] << 16) + ((r[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(r, o) : (u.push(i % 1e7), o += 4);
      o = n / 4;
    } else
      throw Error(Ni);
  else
    for (; o < n; )
      u[o++] = Math.random() * 1e7 | 0;
  for (n = u[--o], e %= ce, n && e && (i = He(10, ce - e), u[o] = (n / i | 0) * i); u[o] === 0; o--)
    u.pop();
  if (o < 0)
    t = 0, u = [0];
  else {
    for (t = -1; u[0] === 0; t -= ce)
      u.shift();
    for (n = 1, i = u[0]; i >= 10; i /= 10)
      n++;
    n < ce && (t -= ce - n);
  }
  return c.e = t, c.d = u, c;
}
function Zc(e) {
  return se(e = new this(e), e.e + 1, this.rounding);
}
function Xc(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function jc(e) {
  return new this(e).sin();
}
function Qc(e) {
  return new this(e).sinh();
}
function Jc(e) {
  return new this(e).sqrt();
}
function eu(e, r) {
  return new this(e).sub(r);
}
function tu() {
  var e = 0, r = arguments, t = new this(r[e]);
  for (de = !1; t.s && ++e < r.length; )
    t = t.plus(r[e]);
  return de = !0, se(t, this.precision, this.rounding);
}
function ru(e) {
  return new this(e).tan();
}
function nu(e) {
  return new this(e).tanh();
}
function iu(e) {
  return se(e = new this(e), e.e + 1, 1);
}
Y[Symbol.for("nodejs.util.inspect.custom")] = Y.toString;
Y[Symbol.toStringTag] = "Decimal";
var lr = Y.constructor = qi(Fn);
cn = new lr(cn);
un = new lr(un);
var ni = {}, ou = {
  get exports() {
    return ni;
  },
  set exports(e) {
    ni = e;
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
(function(e, r) {
  (function(t, n) {
    e.exports = n.call(t);
  })(fe, function() {
    var t = t || {}, n = document.querySelectorAll.bind(document), i = Object.prototype.toString, o = "ontouchstart" in window;
    function c(p) {
      return p !== null && p === p.window;
    }
    function u(p) {
      return c(p) ? p : p.nodeType === 9 && p.defaultView;
    }
    function l(p) {
      var g = typeof p;
      return g === "function" || g === "object" && !!p;
    }
    function s(p) {
      return l(p) && p.nodeType > 0;
    }
    function f(p) {
      var g = i.call(p);
      return g === "[object String]" ? n(p) : l(p) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(g) && p.hasOwnProperty("length") ? p : s(p) ? [p] : [];
    }
    function d(p) {
      var g, y, E = { top: 0, left: 0 }, k = p && p.ownerDocument;
      return g = k.documentElement, typeof p.getBoundingClientRect < "u" && (E = p.getBoundingClientRect()), y = u(k), {
        top: E.top + y.pageYOffset - g.clientTop,
        left: E.left + y.pageXOffset - g.clientLeft
      };
    }
    function a(p) {
      var g = "";
      for (var y in p)
        p.hasOwnProperty(y) && (g += y + ":" + p[y] + ";");
      return g;
    }
    var h = {
      // Effect duration
      duration: 750,
      // Effect delay (check for scroll before showing effect)
      delay: 200,
      show: function(p, g, y) {
        if (p.button === 2)
          return !1;
        g = g || this;
        var E = document.createElement("div");
        E.className = "waves-ripple waves-rippling", g.appendChild(E);
        var k = d(g), R = 0, I = 0;
        "touches" in p && p.touches.length ? (R = p.touches[0].pageY - k.top, I = p.touches[0].pageX - k.left) : (R = p.pageY - k.top, I = p.pageX - k.left), I = I >= 0 ? I : 0, R = R >= 0 ? R : 0;
        var C = "scale(" + g.clientWidth / 100 * 3 + ")", A = "translate(0,0)";
        y && (A = "translate(" + y.x + "px, " + y.y + "px)"), E.setAttribute("data-hold", Date.now()), E.setAttribute("data-x", I), E.setAttribute("data-y", R), E.setAttribute("data-scale", C), E.setAttribute("data-translate", A);
        var T = {
          top: R + "px",
          left: I + "px"
        };
        E.classList.add("waves-notransition"), E.setAttribute("style", a(T)), E.classList.remove("waves-notransition"), T["-webkit-transform"] = C + " " + A, T["-moz-transform"] = C + " " + A, T["-ms-transform"] = C + " " + A, T["-o-transform"] = C + " " + A, T.transform = C + " " + A, T.opacity = "1";
        var L = p.type === "mousemove" ? 2500 : h.duration;
        T["-webkit-transition-duration"] = L + "ms", T["-moz-transition-duration"] = L + "ms", T["-o-transition-duration"] = L + "ms", T["transition-duration"] = L + "ms", E.setAttribute("style", a(T));
      },
      hide: function(p, g) {
        g = g || this;
        for (var y = g.getElementsByClassName("waves-rippling"), E = 0, k = y.length; E < k; E++)
          v(p, g, y[E]);
        o && (g.removeEventListener("touchend", h.hide), g.removeEventListener("touchcancel", h.hide)), g.removeEventListener("mouseup", h.hide), g.removeEventListener("mouseleave", h.hide);
      }
    }, x = {
      // Wrap <input> tag so it can perform the effect
      input: function(p) {
        var g = p.parentNode;
        if (!(g.tagName.toLowerCase() === "i" && g.classList.contains("waves-effect"))) {
          var y = document.createElement("i");
          y.className = p.className + " waves-input-wrapper", p.className = "waves-button-input", g.replaceChild(y, p), y.appendChild(p);
          var E = window.getComputedStyle(p, null), k = E.color, R = E.backgroundColor;
          y.setAttribute("style", "color:" + k + ";background:" + R), p.setAttribute("style", "background-color:rgba(0,0,0,0);");
        }
      },
      // Wrap <img> tag so it can perform the effect
      img: function(p) {
        var g = p.parentNode;
        if (!(g.tagName.toLowerCase() === "i" && g.classList.contains("waves-effect"))) {
          var y = document.createElement("i");
          g.replaceChild(y, p), y.appendChild(p);
        }
      }
    };
    function v(p, g, y) {
      if (y) {
        y.classList.remove("waves-rippling");
        var E = y.getAttribute("data-x"), k = y.getAttribute("data-y"), R = y.getAttribute("data-scale"), I = y.getAttribute("data-translate"), C = Date.now() - Number(y.getAttribute("data-hold")), A = 350 - C;
        A < 0 && (A = 0), p.type === "mousemove" && (A = 150);
        var T = p.type === "mousemove" ? 2500 : h.duration;
        setTimeout(function() {
          var L = {
            top: k + "px",
            left: E + "px",
            opacity: "0",
            // Duration
            "-webkit-transition-duration": T + "ms",
            "-moz-transition-duration": T + "ms",
            "-o-transition-duration": T + "ms",
            "transition-duration": T + "ms",
            "-webkit-transform": R + " " + I,
            "-moz-transform": R + " " + I,
            "-ms-transform": R + " " + I,
            "-o-transform": R + " " + I,
            transform: R + " " + I
          };
          y.setAttribute("style", a(L)), setTimeout(function() {
            try {
              g.removeChild(y);
            } catch {
              return !1;
            }
          }, T);
        }, A);
      }
    }
    var m = {
      /* uses an integer rather than bool so there's no issues with
       * needing to clear timeouts if another touch event occurred
       * within the 500ms. Cannot mouseup between touchstart and
       * touchend, nor in the 500ms after touchend. */
      touches: 0,
      allowEvent: function(p) {
        var g = !0;
        return /^(mousedown|mousemove)$/.test(p.type) && m.touches && (g = !1), g;
      },
      registerEvent: function(p) {
        var g = p.type;
        g === "touchstart" ? m.touches += 1 : /^(touchend|touchcancel)$/.test(g) && setTimeout(function() {
          m.touches && (m.touches -= 1);
        }, 500);
      }
    };
    function B(p) {
      if (m.allowEvent(p) === !1)
        return null;
      for (var g = null, y = p.target || p.srcElement; y.parentElement; ) {
        if (!(y instanceof SVGElement) && y.classList.contains("waves-effect")) {
          g = y;
          break;
        }
        y = y.parentElement;
      }
      return g;
    }
    function _(p) {
      var g = B(p);
      if (g !== null) {
        if (g.disabled || g.getAttribute("disabled") || g.classList.contains("disabled"))
          return;
        if (m.registerEvent(p), p.type === "touchstart" && h.delay) {
          var y = !1, E = setTimeout(function() {
            E = null, h.show(p, g);
          }, h.delay), k = function(C) {
            E && (clearTimeout(E), E = null, h.show(p, g)), y || (y = !0, h.hide(C, g)), I();
          }, R = function(C) {
            E && (clearTimeout(E), E = null), k(C), I();
          };
          g.addEventListener("touchmove", R, !1), g.addEventListener("touchend", k, !1), g.addEventListener("touchcancel", k, !1);
          var I = function() {
            g.removeEventListener("touchmove", R), g.removeEventListener("touchend", k), g.removeEventListener("touchcancel", k);
          };
        } else
          h.show(p, g), o && (g.addEventListener("touchend", h.hide, !1), g.addEventListener("touchcancel", h.hide, !1)), g.addEventListener("mouseup", h.hide, !1), g.addEventListener("mouseleave", h.hide, !1);
      }
    }
    return t.init = function(p) {
      var g = document.body;
      p = p || {}, "duration" in p && (h.duration = p.duration), "delay" in p && (h.delay = p.delay), o && (g.addEventListener("touchstart", _, !1), g.addEventListener("touchcancel", m.registerEvent, !1), g.addEventListener("touchend", m.registerEvent, !1)), g.addEventListener("mousedown", _, !1);
    }, t.attach = function(p, g) {
      p = f(p), i.call(g) === "[object Array]" && (g = g.join(" ")), g = g ? " " + g : "";
      for (var y, E, k = 0, R = p.length; k < R; k++)
        y = p[k], E = y.tagName.toLowerCase(), ["input", "img"].indexOf(E) !== -1 && (x[E](y), y = y.parentElement), y.className.indexOf("waves-effect") === -1 && (y.className += " waves-effect" + g);
    }, t.ripple = function(p, g) {
      p = f(p);
      var y = p.length;
      if (g = g || {}, g.wait = g.wait || 0, g.position = g.position || null, y) {
        for (var E, k, R, I = {}, C = 0, A = {
          type: "mousedown",
          button: 1
        }, T = function($, M) {
          return function() {
            h.hide($, M);
          };
        }; C < y; C++)
          if (E = p[C], k = g.position || {
            x: E.clientWidth / 2,
            y: E.clientHeight / 2
          }, R = d(E), I.x = R.left + k.x, I.y = R.top + k.y, A.pageX = I.x, A.pageY = I.y, h.show(A, E), g.wait >= 0 && g.wait !== null) {
            var L = {
              type: "mouseup",
              button: 1
            };
            setTimeout(T(L, E), g.wait);
          }
      }
    }, t.calm = function(p) {
      p = f(p);
      for (var g = {
        type: "mouseup",
        button: 1
      }, y = 0, E = p.length; y < E; y++)
        h.hide(g, p[y]);
    }, t.displayEffect = function(p) {
      console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), t.init(p);
    }, t;
  });
})(ou);
const le = { lunarInfo: [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560], solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"], Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"], Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"], solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"], sTermInfo: ["9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722"], nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"], nStr2: ["初", "十", "廿", "卅"], nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"], lunarFestival: [{ month: "正", day: "初一", name: "春节" }, { month: "正", day: "十五", name: "元宵节" }, { month: "二", day: "初二", name: "龙抬头" }, { month: "五", day: "初五", name: "端午节" }, { month: "七", day: "初七", name: "七夕节" }, { month: "七", day: "十五", name: "中元节" }, { month: "八", day: "十五", name: "中秋节" }, { month: "九", day: "初九", name: "重阳节" }, { month: "腊", day: "除夕", name: "除夕" }], solarFestival: [{ month: 1, day: 1, name: "元旦节" }, { month: 3, day: 8, name: "妇女节" }, { month: 3, day: 12, name: "植树节" }, { month: 4, day: 5, name: "清明节" }, { month: 5, day: 1, name: "劳动节" }, { month: 5, day: 4, name: "青年节" }, { month: 6, day: 1, name: "儿童节" }, { month: 7, day: 1, name: "建党节" }, { month: 8, day: 1, name: "建军节" }, { month: 9, day: 10, name: "教师节" }, { month: 10, day: 1, name: "国庆节" }], lYearDays: function(e) {
  var r, t = 348;
  for (r = 32768; r > 8; r >>= 1)
    t += le.lunarInfo[e - 1900] & r ? 1 : 0;
  return t + le.leapDays(e);
}, leapMonth: function(e) {
  return 15 & le.lunarInfo[e - 1900];
}, leapDays: function(e) {
  return le.leapMonth(e) ? 65536 & le.lunarInfo[e - 1900] ? 30 : 29 : 0;
}, monthDays: function(e, r) {
  return r > 12 || r < 1 ? -1 : le.lunarInfo[e - 1900] & 65536 >> r ? 30 : 29;
}, solarDays: function(e, r) {
  if (r > 12 || r < 1)
    return -1;
  var t = r - 1;
  return t == 1 ? e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 29 : 28 : le.solarMonth[t];
}, toGanZhiYear: function(e) {
  var r = (e - 3) % 10, t = (e - 3) % 12;
  return r == 0 && (r = 10), t == 0 && (t = 12), le.Gan[r - 1] + le.Zhi[t - 1];
}, toAstro: function(e, r) {
  return "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2 * e - (r < [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22][e - 1] ? 2 : 0), 2) + "座";
}, toGanZhi: function(e) {
  return le.Gan[e % 10] + le.Zhi[e % 12];
}, getTerm: function(e, r) {
  if (e < 1900 || e > 2100 || r < 1 || r > 24)
    return -1;
  var t = le.sTermInfo[e - 1900], n = [parseInt("0x" + t.substr(0, 5)).toString(), parseInt("0x" + t.substr(5, 5)).toString(), parseInt("0x" + t.substr(10, 5)).toString(), parseInt("0x" + t.substr(15, 5)).toString(), parseInt("0x" + t.substr(20, 5)).toString(), parseInt("0x" + t.substr(25, 5)).toString()], i = [n[0].substr(0, 1), n[0].substr(1, 2), n[0].substr(3, 1), n[0].substr(4, 2), n[1].substr(0, 1), n[1].substr(1, 2), n[1].substr(3, 1), n[1].substr(4, 2), n[2].substr(0, 1), n[2].substr(1, 2), n[2].substr(3, 1), n[2].substr(4, 2), n[3].substr(0, 1), n[3].substr(1, 2), n[3].substr(3, 1), n[3].substr(4, 2), n[4].substr(0, 1), n[4].substr(1, 2), n[4].substr(3, 1), n[4].substr(4, 2), n[5].substr(0, 1), n[5].substr(1, 2), n[5].substr(3, 1), n[5].substr(4, 2)];
  return parseInt(i[r - 1]);
}, toChinaMonth: function(e) {
  if (e > 12 || e < 1)
    return -1;
  var r = le.nStr3[e - 1];
  return r += "月";
}, toChinaDay: function(e) {
  var r;
  switch (e) {
    case 10:
      r = "初十";
      break;
    case 20:
      r = "二十";
      break;
    case 30:
      r = "三十";
      break;
    default:
      r = le.nStr2[Math.floor(e / 10)], r += le.nStr1[e % 10];
  }
  return r;
}, getAnimal: function(e) {
  return le.Animals[(e - 4) % 12];
}, getFestival: (e, r, t, n) => {
  let i = null;
  const o = parseInt(e + "");
  return i = o ? le.solarFestival.find((c) => c.month === o && c.day == r) : le.lunarFestival.find((c) => `${c.month}月` === e && c.day === r), i;
}, solar2lunar: function(e, r, t) {
  if (e < 1900 || e > 2100 || e == 1900 && r == 1 && t < 31)
    return -1;
  if (e)
    n = new Date(e, parseInt(r + "") - 1, t);
  else
    var n = /* @__PURE__ */ new Date();
  var i, o = 0, c = (e = n.getFullYear(), r = n.getMonth() + 1, t = n.getDate(), (Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()) - Date.UTC(1900, 0, 31)) / 864e5);
  for (i = 1900; i < 2101 && c > 0; i++)
    c -= o = le.lYearDays(i);
  c < 0 && (c += o, i--);
  var u = /* @__PURE__ */ new Date(), l = !1;
  u.getFullYear() == e && u.getMonth() + 1 == r && u.getDate() == t && (l = !0);
  var s = n.getDay(), f = le.nStr1[s];
  s == 0 && (s = 7);
  var d = i, a = le.leapMonth(i), h = !1;
  for (i = 1; i < 13 && c > 0; i++)
    a > 0 && i == a + 1 && h == 0 ? (--i, h = !0, o = le.leapDays(d)) : o = le.monthDays(d, i), h == 1 && i == a + 1 && (h = !1), c -= o;
  c == 0 && a > 0 && i == a + 1 && (h ? h = !1 : (h = !0, --i)), c < 0 && (c += o, --i);
  var x = i, v = c + 1, m = r - 1, B = le.toGanZhiYear(d), _ = le.getTerm(d, 2 * r - 1), p = le.getTerm(d, 2 * r), g = le.toGanZhi(12 * (e - 1900) + r + 11);
  t >= _ && (g = le.toGanZhi(12 * (e - 1900) + r + 12));
  var y = !1, E = null;
  _ == t && (y = !0, E = le.solarTerm[2 * r - 2]), p == t && (y = !0, E = le.solarTerm[2 * r - 1]);
  var k = Date.UTC(e, m, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, R = le.toGanZhi(k + t - 1), I = le.toAstro(r, t);
  const C = le.toChinaMonth(x), A = le.toChinaDay(v);
  return { lYear: d, lMonth: x, lDay: v, Animal: le.getAnimal(d), IMonthCn: (h ? "闰" : "") + C, IDayCn: A, cYear: e, cMonth: r, cDay: t, gzYear: B, gzMonth: g, gzDay: R, isToday: l, isLeap: h, nWeek: s, ncWeek: "星期" + f, isTerm: y, Term: E, astro: I, festcn: le.getFestival(C, A, e, r), fest: le.getFestival(r, t, e) };
}, lunar2solar: function(e, r, t, n = !0) {
  n = !!n;
  var i = le.leapMonth(e);
  if (le.leapDays(e), n && i != r || e == 2100 && r == 12 && t > 1 || e == 1900 && r == 1 && t < 31)
    return -1;
  var o = le.monthDays(e, r), c = o;
  if (n && (c = le.leapDays(e)), e < 1900 || e > 2100 || t > c)
    return -1;
  for (var u = 0, l = 1900; l < e; l++)
    u += le.lYearDays(l);
  var s = 0, f = !1;
  for (l = 1; l < r; l++)
    s = le.leapMonth(e), f || s <= l && s > 0 && (u += le.leapDays(e), f = !0), u += le.monthDays(e, l);
  n && (u += o);
  var d = Date.UTC(1900, 1, 30, 0, 0, 0), a = new Date(864e5 * (u + t - 31) + d), h = a.getUTCFullYear(), x = a.getUTCMonth() + 1, v = a.getUTCDate();
  return le.solar2lunar(h, x, v);
} };
le.lunar2solar;
for (let e = 0; e <= 15; e++)
  e.toString(16);
let su = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof globalThis == "object" && globalThis.globalThis === globalThis ? globalThis : void 0;
su.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && /Safari/.test(navigator.userAgent);
window.socketMap = /* @__PURE__ */ new Map();
lr.set({ precision: 14 });
var au = Object.freeze({ __proto__: null, debounce: function(e, r) {
  let t;
  return (n) => {
    clearTimeout(t), t = setTimeout(() => {
      e(n);
    }, r);
  };
}, throttle: function(e, r) {
  let t = 0;
  return (n) => {
    const i = (/* @__PURE__ */ new Date()).getTime();
    i - t > r && (e(n), t = i);
  };
} });
const mt = Fo, cu = {}, uu = {
  t: "1672196428320",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3618",
  width: "200",
  height: "200"
}, fu = /* @__PURE__ */ pe("path", {
  d: "M384 250V134a70 70 0 0 0-70-70H134a70 70 0 0 0-70 70v116a70 70 0 0 0 70 70h180a70 70 0 0 0 70-70z m-80-10H144v-96h160zM890 704H710a70 70 0 0 0-70 70v116a70 70 0 0 0 70 70h180a70 70 0 0 0 70-70V774a70 70 0 0 0-70-70z m-10 176H720v-96h160zM890 384H710a70 70 0 0 0-70 70v116a70 70 0 0 0 70 70h180a70 70 0 0 0 70-70V454a70 70 0 0 0-70-70z m-10 176H720v-96h160zM536 504H264v-80a40 40 0 0 0-40-40 40 40 0 0 0-40 40v432a40 40 0 0 0 40 40h312a40 40 0 0 0 40-40 40 40 0 0 0-40-40H264V584h272a40 40 0 0 0 40-40 40 40 0 0 0-40-40z",
  "p-id": "3619",
  "data-spm-anchor-id": "a313x.7781069.0.i2",
  class: "selected"
}, null, -1), lu = [
  fu
];
function du(e, r) {
  return ee(), he("svg", uu, lu);
}
const Nn = /* @__PURE__ */ et(cu, [["render", du]]), hu = {}, vu = {
  t: "1672197639916",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "19012"
}, pu = /* @__PURE__ */ pe("path", {
  d: "M863.1 255.1H551.3c-25.1 0-49.2-9.8-67.1-27.4l-75-73.4c-17.9-17.5-42-27.4-67.1-27.4H161c-53 0-96 43-96 96v512.8c0 53 43 96 96 96h702c53 0 96-43 96-96V351.1c0.1-53-42.9-96-95.9-96z m-31 161.1c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32v-0.1c0-17.7 14.3-32 32-32h576.1c17.7 0 32 14.3 32 32v0.1z",
  "p-id": "19013"
}, null, -1), xu = [
  pu
];
function bu(e, r) {
  return ee(), he("svg", vu, xu);
}
const nr = /* @__PURE__ */ et(hu, [["render", bu]]), gu = {}, mu = {
  t: "1672197222005",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "14755"
}, yu = /* @__PURE__ */ pe("path", {
  d: "M959.68 921.024c-15.232-181.696-139.648-331.968-307.84-386.624 70.464-45.632 117.248-124.48 117.248-214.464C769.152 178.624 654.208 64 512.512 64 370.752 64 255.808 178.624 255.808 319.936c0 89.984 46.784 168.832 117.248 214.528-168.192 54.592-292.544 204.864-307.84 386.56-0.192 3.456-0.64 5.44 0 10.176C66.496 947.2 80.64 960 96.704 960c17.92 0 32.064-14.656 32.064-32 16.704-197.76 182.272-351.936 383.744-351.936 201.408 0 366.976 154.176 383.68 351.936 0 17.344 14.144 32 32.064 32 16.064 0 30.208-12.8 31.424-28.8C960.32 926.464 959.936 924.416 959.68 921.024zM320 319.936C320 213.952 406.208 128 512.512 128s192.448 85.952 192.448 191.936c0 106.048-86.144 192-192.448 192S320 425.984 320 319.936z",
  "p-id": "14756"
}, null, -1), _u = [
  yu
];
function wu(e, r) {
  return ee(), he("svg", mu, _u);
}
const _r = /* @__PURE__ */ et(gu, [["render", wu]]), ku = {}, Eu = {
  t: "1672194715727",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  "p-id": "2667"
}, Cu = /* @__PURE__ */ pe("path", {
  d: "M809.246403 771.926938 777.737782 803.458071 924.965961 950.667831 956.476629 919.157163Z",
  fill: "#5D5D5D",
  "p-id": "2668"
}, null, -1), Su = /* @__PURE__ */ pe("path", {
  d: "M454.878536 70.285786C239.51556 70.285786 64.93236 244.847497 64.93236 460.231963c0 215.341486 174.583201 389.945153 389.945153 389.945153 215.362976 0 389.9472-174.603667 389.9472-389.945153C844.825736 244.847497 670.241512 70.285786 454.878536 70.285786zM454.878536 805.611108c-190.750415 0-345.381192-154.626683-345.381192-345.379145 0-190.751439 154.629753-345.380168 345.381192-345.380168 190.752462 0 345.382215 154.62873 345.382215 345.380168C800.259728 650.983401 645.630998 805.611108 454.878536 805.611108z",
  fill: "#5D5D5D",
  "p-id": "2669"
}, null, -1), Bu = [
  Cu,
  Su
];
function Au(e, r) {
  return ee(), he("svg", Eu, Bu);
}
const Ru = /* @__PURE__ */ et(ku, [["render", Au]]), Ou = {}, Du = {
  t: "1672212880079",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "19924"
}, Lu = /* @__PURE__ */ pe("path", {
  d: "M806.4 263.2l-45.6-45.6L512 467.2 263.2 217.6l-45.6 45.6L467.2 512 217.6 760.8l45.6 45.6L512 557.6l248.8 248.8 45.6-45.6L557.6 512z",
  "p-id": "19925"
}, null, -1), Nu = [
  Lu
];
function Tu(e, r) {
  return ee(), he("svg", Du, Nu);
}
const Iu = /* @__PURE__ */ et(Ou, [["render", Tu]]), Pu = {}, $u = {
  t: "1672216076738",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "28376"
}, Mu = /* @__PURE__ */ pe("path", {
  d: "M501.937582 545.097053c147.891962 0 268.231366-118.534055 268.223274-264.288929 0-145.746783-120.330301-264.28994-268.222263-264.28994-147.890951 0-268.221252 118.584625-268.221252 264.28994C233.71633 426.520519 354.046631 545.097053 501.937582 545.097053zM612.471463 570.546911 411.497184 570.546911c-186.760063 0-338.664249 149.569875-338.664249 333.472733l0 19.794109c0 96.139636 149.47278 96.139636 338.664249 96.139636l200.974278 0c181.747565 0 338.694591 0 338.694591-96.139636l0-19.794109C951.164031 720.158252 799.235571 570.546911 612.471463 570.546911z",
  "p-id": "28377"
}, null, -1), Hu = [
  Mu
];
function zu(e, r) {
  return ee(), he("svg", $u, Hu);
}
const Kt = /* @__PURE__ */ et(Pu, [["render", zu]]), qu = {}, Fu = {
  t: "1680231254898",
  class: "icon",
  viewBox: "0 0 1154 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "9556"
}, Uu = /* @__PURE__ */ pe("path", {
  d: "M1015.808 64.512q62.464 0 99.84 31.744t37.376 96.256l0 568.32q0 27.648-10.24 52.224t-28.16 43.008-41.984 29.184-50.688 10.752l-892.928 0q-26.624 0-50.176-10.24t-40.96-27.136-27.648-39.424-10.24-48.128l0-580.608q0-55.296 33.792-90.624t95.232-35.328l886.784 0zM287.744 253.952q-19.456 0-36.864 7.168t-30.72 19.968-20.992 30.72-7.68 38.4 7.68 37.888 20.992 30.72 30.72 20.992 36.864 7.68q21.504 0 39.424-7.68t30.72-20.992 20.48-30.72 7.68-37.888q0-41.984-27.648-69.12t-70.656-27.136zM448.512 608.256q0-19.456-7.68-37.376t-20.48-30.72-30.72-20.48-37.376-7.68l-128 0q-39.936 0-67.584 28.16t-27.648 68.096l0 4.096 0 92.16 319.488 0 0-92.16 0-4.096zM923.648 709.632q20.48 0 30.208-10.24t9.728-24.576-11.264-25.088-31.744-10.752l-305.152 0q-20.48 0-30.72 10.752t-10.24 25.088 10.24 24.576 29.696 10.24l309.248 0zM924.672 577.536q20.48 0 29.696-10.24t9.216-24.576q0-15.36-8.704-25.6t-29.184-10.24l-313.344 0q-20.48 0-29.696 10.24t-9.216 25.6q0 14.336 8.704 24.576t29.184 10.24l313.344 0zM925.696 447.488q15.36 0 26.624-10.24t11.264-24.576-11.264-23.04-26.624-8.704l-207.872 0q-15.36 0-26.112 8.704t-10.752 23.04 10.752 24.576 26.112 10.24l207.872 0z",
  "p-id": "9557"
}, null, -1), Vu = [
  Uu
];
function Wu(e, r) {
  return ee(), he("svg", Fu, Vu);
}
const Yn = /* @__PURE__ */ et(qu, [["render", Wu]]), Yu = {}, Ku = {
  t: "1698719360533",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "15490",
  width: "200",
  height: "200"
}, Gu = /* @__PURE__ */ pe("path", {
  d: "M960 704h-63.616v-167.392a32 32 0 0 0-32-32H544V416h160a32 32 0 0 0 32-32V96a32 32 0 0 0-32-32H320a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h160v88.608H161.984a32 32 0 0 0-32 31.968L129.792 704H64a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-192a32 32 0 0 0-32-32H193.792l0.16-135.392H480V704h-64a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-192a32 32 0 0 0-32-32h-64v-135.392h288.384V704H768a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-192a32 32 0 0 0-32-32zM352 128h320v224H352V128zM224 896H96v-128h128v128z m352 0h-128v-128h128v128z m352 0h-128v-128h128v128z",
  "p-id": "15491"
}, null, -1), Zu = [
  Gu
];
function Xu(e, r) {
  return ee(), he("svg", Ku, Zu);
}
const ir = /* @__PURE__ */ et(Yu, [["render", Xu]]), Fi = {
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
}, ju = { class: "left-pick-list" }, Qu = { class: "post-view-list" }, Ju = { class: "ik-picker-single" }, ef = /* @__PURE__ */ Ht({
  __name: "PostList",
  props: Fi,
  emits: ["change", "check"],
  setup(e, { emit: r }) {
    var f, d;
    const t = e, n = De(() => {
      var a, h;
      return ((a = t.handList) == null ? void 0 : a.length) === ((h = t.list) == null ? void 0 : h.length);
    }), i = De(() => {
      var x, v, m, B;
      const a = (x = t.handList) == null ? void 0 : x.length, h = (v = t.list) == null ? void 0 : v.length;
      return t.multiple ? o.value = t.handList.map((_) => _[t.fixPropOpt.id]) : c.value = (B = (m = t.handList) == null ? void 0 : m[0]) == null ? void 0 : B[t.fixPropOpt.id], a > 0 && a < h;
    }), o = Ee(
      t.handList.map((a) => a[t.fixPropOpt.id])
    ), c = Ee((d = (f = t.handList) == null ? void 0 : f[0]) == null ? void 0 : d[t.fixPropOpt.id]), u = (a) => {
      const h = a ? t.list.map((x) => x[t.fixPropOpt.id]) : [];
      r("change", h, a ? t.list : []);
    }, l = (a) => {
      r("change", a, t.list);
    }, s = (a) => {
      r("change", a, t.list);
    };
    return (a, h) => (ee(), he("div", ju, [
      a.multiple ? (ee(), be(re(At), {
        key: 0,
        modelValue: n.value,
        "onUpdate:modelValue": h[0] || (h[0] = (x) => n.value = x),
        indeterminate: i.value,
        onChange: u
      }, {
        default: ve(() => [
          ot("全选")
        ]),
        _: 1
      }, 8, ["modelValue", "indeterminate"])) : Re("", !0),
      pe("ul", Qu, [
        a.multiple ? (ee(), be(re(ln), {
          key: 0,
          modelValue: o.value,
          "onUpdate:modelValue": h[1] || (h[1] = (x) => o.value = x),
          onChange: l
        }, {
          default: ve(() => [
            (ee(!0), he(Ye, null, ht(a.list, (x) => (ee(), he("li", {
              key: x[t.fixPropOpt.id]
            }, [
              ae(re(At), {
                label: x[t.fixPropOpt.id]
              }, {
                default: ve(() => [
                  ae(Yn),
                  pe("p", null, We(x[t.fixPropOpt.name]), 1)
                ]),
                _: 2
              }, 1032, ["label"])
            ]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])) : (ee(), be(re(cr), {
          key: 1,
          isIndeterminate: i.value,
          modelValue: c.value,
          "onUpdate:modelValue": h[2] || (h[2] = (x) => c.value = x),
          onChange: s
        }, {
          default: ve(() => [
            (ee(!0), he(Ye, null, ht(a.list, (x) => (ee(), he("li", {
              class: "w-full",
              key: x[t.fixPropOpt.id]
            }, [
              ae(re(dn), {
                label: x[t.fixPropOpt.id]
              }, {
                default: ve(() => [
                  pe("div", Ju, [
                    ae(Yn),
                    pe("p", null, We(x[t.fixPropOpt.name]), 1)
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
const tf = /* @__PURE__ */ et(ef, [["__scopeId", "data-v-c47c3e50"]]), rf = { class: "left-pick-list" }, nf = { class: "role-view-list" }, of = ["title"], sf = { class: "ik-picker-single" }, af = ["title"], cf = /* @__PURE__ */ Ht({
  __name: "RoleList",
  props: Fi,
  emits: ["change", "check"],
  setup(e, { emit: r }) {
    var f, d;
    const t = e, n = De(() => {
      var a, h;
      return ((a = t.handList) == null ? void 0 : a.length) === ((h = t.list) == null ? void 0 : h.length);
    }), i = De(() => {
      var x, v, m, B;
      const a = (x = t.handList) == null ? void 0 : x.length, h = (v = t.list) == null ? void 0 : v.length;
      return t.multiple ? o.value = t.handList.map((_) => _[t.fixPropOpt.id]) : c.value = (B = (m = t.handList) == null ? void 0 : m[0]) == null ? void 0 : B[t.fixPropOpt.id], a > 0 && a < h;
    }), o = Ee(
      t.handList.map((a) => a[t.fixPropOpt.id])
    ), c = Ee((d = (f = t.handList) == null ? void 0 : f[0]) == null ? void 0 : d[t.fixPropOpt.id]), u = (a) => {
      const h = a ? t.list.map((x) => x[t.fixPropOpt.id]) : [];
      r("change", h, a ? t.list : []);
    }, l = (a) => {
      r("change", a, t.list);
    }, s = (a) => {
      r("change", a, t.list);
    };
    return (a, h) => (ee(), he("div", rf, [
      a.multiple ? (ee(), be(re(At), {
        key: 0,
        modelValue: n.value,
        "onUpdate:modelValue": h[0] || (h[0] = (x) => n.value = x),
        indeterminate: i.value,
        onChange: u
      }, {
        default: ve(() => [
          ot("全选")
        ]),
        _: 1
      }, 8, ["modelValue", "indeterminate"])) : Re("", !0),
      pe("ul", nf, [
        a.multiple ? (ee(), be(re(ln), {
          key: 0,
          modelValue: o.value,
          "onUpdate:modelValue": h[1] || (h[1] = (x) => o.value = x),
          onChange: l
        }, {
          default: ve(() => [
            (ee(!0), he(Ye, null, ht(a.list, (x) => (ee(), he("li", {
              key: x[a.fixPropOpt.id]
            }, [
              ae(re(At), {
                label: x[a.fixPropOpt.id],
                value: x[a.fixPropOpt.id],
                disabled: x.disabled
              }, {
                default: ve(() => [
                  ae(Kt),
                  pe("p", {
                    title: x[a.fixPropOpt.name]
                  }, We(x[a.fixPropOpt.name]), 9, of)
                ]),
                _: 2
              }, 1032, ["label", "value", "disabled"])
            ]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])) : (ee(), be(re(cr), {
          key: 1,
          indeterminate: i.value,
          modelValue: c.value,
          "onUpdate:modelValue": h[2] || (h[2] = (x) => c.value = x),
          onChange: s
        }, {
          default: ve(() => [
            (ee(!0), he(Ye, null, ht(a.list, (x) => (ee(), he("li", {
              class: "w-full",
              key: x[a.fixPropOpt.id]
            }, [
              ae(re(dn), {
                label: x[a.fixPropOpt.id],
                value: x[a.fixPropOpt.id],
                disabled: x.disabled
              }, {
                default: ve(() => [
                  pe("div", sf, [
                    ae(Kt),
                    pe("p", {
                      title: x[a.fixPropOpt.name]
                    }, We(x[a.fixPropOpt.name]), 9, af)
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
const uf = /* @__PURE__ */ et(cf, [["__scopeId", "data-v-a51e0920"]]);
var Je = /* @__PURE__ */ ((e) => (e.org = "organization", e.dep = "dep", e.user = "user", e.role = "role", e.post = "post", e.dep_user = "dep_user", e))(Je || {}), ar = /* @__PURE__ */ ((e) => (e.group = "group", e.role = "role", e.post = "post", e))(ar || {});
const Ot = {
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
}, ff = {
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
    validator: (e) => {
      if (e === void 0)
        return !0;
      if (Array.isArray(e)) {
        if (!(e != null && e.length))
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
}, lf = (e, r) => {
  const t = Ee([]), n = async (o, c, u) => {
    var R, I;
    const { url: l, methods: s, headers: f, param: d } = e.value || {}, a = {
      parentOrgId: o,
      ...d || {},
      parentDepartmentId: c || "",
      name: u || ""
    }, h = await fetch(l, {
      method: s,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        ...f
      },
      body: JSON.stringify(a)
    }), { success: x, data: v } = await h.json();
    if (!x)
      return {
        depList: [],
        roleList: [],
        postList: [],
        userList: [],
        organizationList: [],
        rootOrganization: {},
        rootDepartment: {}
      };
    const { departments: m, roles: B, posts: _, users: p, organizations: g, rootOrganization: y, rootDepartment: E } = v, k = y || E;
    return t.value[0] = r.org ? {
      ...r.org,
      id: r.elementId,
      elementType: (I = (R = r.org) == null ? void 0 : R.elementType) == null ? void 0 : I.toLocaleUpperCase()
    } : {
      ...k,
      id: k.elementId
    }, {
      depList: mt.cloneDeep(m),
      roleList: mt.cloneDeep(B),
      postList: mt.cloneDeep(_),
      userList: mt.cloneDeep(p),
      organizationList: mt.cloneDeep(g),
      rootOrganization: y,
      rootDepartment: E
    };
  };
  return {
    handData: n,
    handSetChild: (o, c) => {
      n(o == null ? void 0 : o.elementId, c);
    },
    bannerList: t
  };
}, df = {
  shadow: "hover",
  class: "sel-list"
}, hf = { key: 0 }, vf = {
  key: 0,
  class: "check-all"
}, pf = {
  key: 0,
  class: "view-list"
}, xf = {
  key: 0,
  class: "filter-user"
}, bf = { class: "filter-user" }, gf = {
  key: 2,
  class: "next-child"
}, mf = { class: "filter-user" }, yf = {
  key: 1,
  class: "filter-user"
}, _f = {
  key: 2,
  class: "next-child"
}, wf = { class: "text-over-flow" }, kf = { class: "text-over-flow" }, Ef = { class: "text-over-flow" }, Cf = {
  key: 2,
  class: "next-child"
}, Sf = {
  key: 1,
  class: "empty"
}, Bf = /* @__PURE__ */ pe("div", { class: "split-div" }, null, -1), Af = { class: "choose-list" }, Rf = { class: "choose-item" }, Of = /* @__PURE__ */ pe("div", null, "已选", -1), Df = { class: "dialog-footer" }, Lf = /* @__PURE__ */ Ht({
  __name: "picker",
  props: ff,
  emits: ["handChild", "update:show", "update:modelValue", "ok", "search"],
  setup(e, { expose: r, emit: t }) {
    const n = e;
    lo((H) => ({
      "3e125c61": Me.value
    }));
    const i = Ee(""), o = Ee(""), c = Ee(""), u = Ee([]), l = Ee([]), s = Ee([]), f = Ee([]), d = Ee([]), a = Ee(!1), h = n.imageBaseUrl || `${location.origin}/server/oss/download?fileUrl=`, x = (H) => H ? H.startsWith("http") ? H : `${h}${H}` : "";
    Dt(() => n.api, () => {
      n.show && C("");
    });
    const v = De(() => ({
      name: "name",
      type: "type",
      id: "id",
      avatar: "avatar",
      ...n.propOption
    })), m = De(() => ({
      dep: "DEPT",
      user: "USER",
      role: "ROLE",
      post: "POST",
      organization: "ORGANIZATION",
      ...n.typeOption
    })), B = Ee([]), _ = lf(ho(n, "api"), n), p = _.handData, g = _.bannerList;
    n.immediate && p(c.value, o.value, i.value);
    const y = (H) => (H.forEach((X) => {
      var P, oe;
      X.disabled = ((oe = (P = n.modelValue) == null ? void 0 : P.find((we) => we[v.value.id] === X[v.value.id])) == null ? void 0 : oe.disabled) || !1;
    }), H), E = async () => {
      var H, X, P, oe, we, Fe, ft, nt, Pt;
      a.value = !0;
      try {
        if ((H = n.depList) != null && H.length || (X = n.userList) != null && X.length || (P = n.roleList) != null && P.length || (oe = n.postList) != null && oe.length) {
          u.value = (we = n.userList) == null ? void 0 : we.filter((Ve) => Ve[v.value.name].includes(i.value)), l.value = (Fe = n.depList) == null ? void 0 : Fe.filter((Ve) => Ve[v.value.name].includes(i.value)), s.value = (ft = n.roleList) == null ? void 0 : ft.filter((Ve) => Ve[v.value.name].includes(i.value)), f.value = (nt = n.postList) == null ? void 0 : nt.filter((Ve) => Ve[v.value.name].includes(i.value)), d.value = (Pt = n.organizationList) == null ? void 0 : Pt.filter((Ve) => Ve[v.value.name].includes(i.value)), q(), a.value = !1;
          return;
        }
        const Te = await p(c.value, o.value, i.value);
        try {
          u.value = y((Te == null ? void 0 : Te.userList) || []), l.value = y((Te == null ? void 0 : Te.depList) || []), s.value = y((Te == null ? void 0 : Te.roleList) || []), f.value = y((Te == null ? void 0 : Te.postList) || []), d.value = y((Te == null ? void 0 : Te.organizationList) || []);
        } catch (Ve) {
          a.value = !1, console.info("error: ", Ve);
        }
        q(), a.value = !1;
      } catch {
        a.value = !1;
      }
    }, k = t0({
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
    }), R = t0({
      indeterminate: !1,
      checkAll: 0
    }), I = (H) => k.org.has(H) || k.dep.has(H) || k.user.has(H) || k.role.has(H) || k.post.has(H), C = au.debounce(E, 300), A = De(() => {
      const H = Array.from(k.org.values()), X = Array.from(k.dep.values()), P = Array.from(k.role.values()), oe = Array.from(k.user.values()), we = Array.from(k.post.values());
      return B.value = [...H, ...X, ...P, ...we, ...oe], {
        list: [...H, ...X, ...P, ...oe, ...we],
        org: {
          list: H,
          len: H.length,
          deps: H
        },
        dep: {
          list: X,
          len: X.length,
          deps: X
        },
        role: {
          list: P,
          len: P.length
        },
        user: {
          list: oe,
          len: oe.length
        },
        post: {
          list: we,
          len: we.length
        }
      };
    }), T = De(
      () => {
        const H = n.chooseType.map((P) => P.toLocaleLowerCase());
        let X = [...H];
        return H.includes("dep") && (X = [...X, "organization", "dept"]), H.includes("dep_user") && (X = [...X, "user"]), X;
      }
    ), L = De(
      () => T.value.includes(Je.dep) && !T.value.includes(Je.user) && !T.value.includes(Je.org)
    ), $ = De(
      () => T.value.includes(Je.user) && !T.value.includes(Je.dep) && !T.value.includes(Je.org)
    ), M = De(() => T.value.includes(Je.org) && !T.value.includes(Je.dep) && !T.value.includes(Je.user)), V = De(() => !g.value.length), K = De(
      () => !n.max || A.value.list.length < n.max
    ), te = (H) => [m.value.dep, m.value.organization].includes(H[v.value.type]) ? H.hasOwnProperty("disabled") : !1, Q = Ee([]), ne = (H) => {
      Q.value = H, Q.value.forEach((X) => {
        X.readonly = X == null ? void 0 : X.disabled;
      });
    }, z = Ee(!1), q = (H = !1) => {
      var P;
      const X = (P = n == null ? void 0 : n.userList) != null && P.length ? mt.cloneDeep([...n == null ? void 0 : n.organizationList, ...n == null ? void 0 : n.userList, ...n == null ? void 0 : n.depList]) : [...d.value, ...l.value, ...u.value];
      return !H && ne(X), X;
    };
    Dt(
      () => n.show,
      async (H) => {
        var X;
        if (z.value = H, H) {
          o.value = n.pid, c.value = ((X = n.org) == null ? void 0 : X.elementId) || n.orgPid, !n.userList.length && !n.depList.length && !n.roleList.length && !n.postList.length && !n.organizationList.length ? await E() : (u.value = n.userList, l.value = n.depList, s.value = n.roleList, f.value = n.postList, d.value = n.organizationList), k.trans = [], R.checkAll = 0, R.indeterminate = !1;
          const P = q(!0);
          for (const we of P)
            I(we[v.value.id]) && k.trans.push(we[v.value.id]);
          const oe = P.length === k.trans.length;
          R.indeterminate = !!(P.length && !oe), R.checkAll = Number(P.length && oe), r0(() => {
            var we;
            (we = n.modelValue) != null && we.length ? n.modelValue.forEach((Fe) => {
              xe(Fe), n.multiple ? k.trans.push(Fe[v.value.id]) : k.single = Fe[v.value.id];
            }) : Ne();
          });
        } else
          Ne();
      }
    ), n0(() => {
      let H;
      if (L.value || $.value) {
        const P = u.value.length, oe = l.value.length;
        H = L.value ? oe : $.value ? P : P + P;
      } else
        H = Q.value.length;
      const X = k.trans.length;
      R.indeterminate = k.trans.length ? X !== H : !1, R.checkAll = +(H !== 0 && X === H);
    });
    const F = (H) => {
      if (H) {
        if (k.single = "", H[v.value.id]) {
          const X = k.trans.findIndex(
            (P) => P === H[v.value.id]
          );
          X !== -1 && k.trans.splice(X, 1);
        }
        switch (H[v.value.type]) {
          case m.value.dep:
            return k.dep.delete(H[v.value.id]);
          case m.value.user:
            return k.user.delete(H[v.value.id]);
          case m.value.role:
            return k.role.delete(H[v.value.id]);
          case m.value.post:
            return k.post.delete(H[v.value.id]);
          case m.value.organization:
            return k.org.delete(H[v.value.id]);
          default:
            return;
        }
      }
    }, W = (H) => {
      F(H);
    }, xe = (H) => {
      if (!I(H[v.value.id])) {
        const X = {
          ...H
          // readonly: item.disabled
        };
        switch (H[v.value.type]) {
          case m.value.dep:
            return k.dep.set(H[v.value.id], X);
          case m.value.user:
            return k.user.set(H[v.value.id], X);
          case m.value.role:
            return k.role.set(H[v.value.id], X);
          case m.value.post:
            return k.post.set(H[v.value.id], X);
          case m.value.organization:
            return k.org.set(H[v.value.id], X);
          default:
            return;
        }
      }
    };
    Dt(
      () => k.trans,
      (H) => {
        if (!H.length)
          Q.value.forEach((X) => {
            X.disabled = !1;
            try {
              n.multiple && F(X);
            } catch {
            }
          });
        else {
          const X = Q.value.filter(
            (oe) => !H.includes(oe[v.value.id])
          );
          for (const oe of X)
            oe.disabled = !1, n.multiple && F(oe);
          const P = Q.value.filter(
            (oe) => H.includes(oe[v.value.id])
          );
          for (const oe of P)
            oe.disabled = te(oe), xe(oe);
        }
      },
      { deep: !0 }
    ), Dt(
      () => k.single,
      (H) => {
        if (H) {
          const X = Q.value.find((P) => P[v.value.id] === H);
          X && (k.dep.clear(), k.user.clear(), k.role.clear(), k.post.clear(), k.org.clear(), k.trans = [], r0(() => {
            xe(X);
          }));
        }
      }
    );
    const me = (H) => {
      if (H) {
        let X = [];
        if (T.value.includes("dep") || T.value.includes("dep_user")) {
          const P = Q.value.filter(
            (oe) => oe[v.value.type].toLocaleUpperCase() === m.value[Je.dep].toLocaleUpperCase()
          );
          X = [...X, ...P];
        }
        if (T.value.includes("user") || T.value.includes("dep_user")) {
          const P = Q.value.filter(
            (oe) => oe[v.value.type].toLocaleUpperCase() === m.value[Je.user].toLocaleUpperCase()
          );
          X = [...X, ...P];
        }
        if (T.value.includes("organization")) {
          const P = Q.value.filter(
            (oe) => oe[v.value.type].toLocaleUpperCase() === m.value[Je.org].toLocaleUpperCase()
          );
          X = [...X, ...P];
        }
        X.forEach((P) => {
          !k.trans.includes(P[v.value.id]) && k.trans.push(P[v.value.id]);
        });
      } else
        Q.value.forEach((X) => {
          const P = k.trans.findIndex((oe) => oe === X[v.value.id]);
          P >= 0 && k.trans.splice(P, 1);
        });
    }, Be = (H) => {
      H[v.value.type] === m.value.organization ? (c.value = H == null ? void 0 : H.elementId, o.value = "") : (c.value = "", o.value = H == null ? void 0 : H.elementId), E(), g.value.push(H);
    }, ue = () => {
      const H = g.value.length - 2, X = H < 0 ? 0 : H, P = g.value[X];
      P[v.value.type] === m.value.organization ? (c.value = H < 0 ? "root" : (P == null ? void 0 : P.elementId) || (P == null ? void 0 : P.id), o.value = "") : (c.value = "", o.value = H < 0 ? "" : (P == null ? void 0 : P.elementId) || (P == null ? void 0 : P.id)), E(), g.value.pop();
    }, Ae = De(() => g.value.length), $e = (H, X) => {
      !X && !n.topLink || X !== Ae.value - 1 && (H[v.value.type] === m.value.organization ? (c.value = H == null ? void 0 : H.elementId, o.value = "") : (c.value = "", o.value = H == null ? void 0 : H.elementId), E(), g.value.splice(X + 1));
    }, ct = De(() => n.chooseType.includes("role") && n.chooseType.length === 1), je = De(() => n.chooseType.includes("post") && n.chooseType.length === 1), ze = Ee(n.tabs[0]), Oe = Ee(n.tabs[0]);
    n0(() => (Oe.value = ct.value ? n.tabs[1] : je.value ? n.tabs[2] : ze.value, Oe.value));
    const Ne = () => {
      k.dep.clear(), k.user.clear(), k.role.clear(), k.post.clear(), k.org.clear(), k.trans = [], Ze.value = [], St.value = [], ze.value = n.tabs[0], Oe.value = n.tabs[0], i.value = "", o.value = n.pid, c.value = n.orgPid, g.value.splice(1, g.value.length), k.single = "", B.value = [];
    }, kt = () => {
      var H;
      t(
        "ok",
        mt.cloneDeep({
          // 所有选项、部门、人员、角色分别列出
          ...A.value,
          // 排序后的列表
          sort: B.value
        })
      ), t("update:modelValue", mt.cloneDeep(((H = A.value) == null ? void 0 : H.list) || [])), t("update:show", !1), Ne();
    }, xt = () => {
      t("update:show", !1), Ne();
    };
    r({ handClear: Ne, handRomeve: W, handDelete: F });
    const tt = De(() => {
      const H = T.value;
      return !!((H.includes("post") || H.includes("role")) && H.length > 1);
    }), Et = De(() => [
      { label: "group", name: "组织架构" },
      { label: "role", name: "角色列表" },
      { label: "post", name: "岗位列表" }
    ].filter((H) => n.tabs.includes(H.label))), rt = De(
      () => `${(typeof n.width == "string" ? Number.parseInt(n.width) : n.width) / 2 - 30}px`
    ), Me = De(
      () => `${typeof n.height == "string" ? Number.parseInt(n.height) : n.height}px`
    ), qe = () => {
      n.multiple || (k.post.clear(), k.role.clear(), k.user.clear(), k.dep.clear(), k.single = "");
    }, Ze = Ee([]), Ct = (H, X) => {
      n.multiple || (k.single = "");
      const P = n.multiple ? H : [H];
      if (!P.length) {
        k.role.clear();
        return;
      }
      qe(), X.forEach((oe) => {
        P != null && P.includes(oe[v.value.id]) ? xe(oe) : F(oe);
      });
    };
    Dt(
      () => A.value.role.len,
      (H) => {
        Ze.value = mt.cloneDeep(A.value.role.list);
      }
    );
    const St = Ee([]), ut = (H, X) => {
      n.multiple || (k.single = "");
      const P = n.multiple ? H : [H];
      if (!P.length) {
        k.post.clear();
        return;
      }
      qe(), X.forEach((oe) => {
        P != null && P.includes(oe[v.value.id]) ? xe(oe) : F(oe);
      });
    };
    return Dt(
      () => A.value.post.len,
      (H) => {
        St.value = mt.cloneDeep(A.value.post.list);
      }
    ), Dt(
      () => i.value,
      (H) => {
        C("");
      }
    ), (H, X) => (ee(), be(re(So), {
      modelValue: z.value,
      "onUpdate:modelValue": X[6] || (X[6] = (P) => z.value = P),
      title: H.title,
      "destroy-on-close": "",
      "close-on-click-modal": !1,
      "close-on-click-escape": !1,
      draggable: "",
      "align-center": "",
      width: typeof H.width == "string" ? H.width : `${H.width}%`,
      class: "p_p_picker-dialog",
      "modal-class": "p_p_picker-dialog-modal",
      onClose: xt
    }, {
      footer: ve(() => [
        pe("span", Df, [
          ae(re(st), {
            onClick: gt(xt, ["stop"])
          }, {
            default: ve(() => [
              ot("取消")
            ]),
            _: 1
          }, 8, ["onClick"]),
          ae(re(st), {
            type: "primary",
            onClick: gt(kt, ["stop"])
          }, {
            default: ve(() => [
              ot(" 确定 ")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: ve(() => [
        pe("div", {
          class: "dep-use-picker",
          style: tr({ height: Me.value })
        }, [
          pe("div", df, [
            pe("div", null, [
              ae(re(ii), {
                modelValue: i.value,
                "onUpdate:modelValue": X[0] || (X[0] = (P) => i.value = P),
                clearable: "",
                placeholder: H.placeholder,
                "prefix-icon": Ru,
                style: tr({ width: rt.value })
              }, null, 8, ["modelValue", "placeholder", "style"]),
              tt.value ? (ee(), be(re(cr), {
                key: 0,
                modelValue: ze.value,
                "onUpdate:modelValue": X[1] || (X[1] = (P) => ze.value = P),
                class: "ik-picker-tab",
                style: tr({ width: rt.value })
              }, {
                default: ve(() => [
                  (ee(!0), he(Ye, null, ht(Et.value, (P) => (ee(), be(re(Bo), {
                    label: P.label,
                    key: P.label
                  }, {
                    default: ve(() => [
                      ot(We(P.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "style"])) : Re("", !0)
            ]),
            Oe.value === re(ar).group ? (ee(), he("div", hf, [
              ae(re(Ao), {
                separator: ">",
                class: Mt(["banner", { "top-unlink": !H.topLink }])
              }, {
                default: ve(() => [
                  Ae.value ? (ee(!0), he(Ye, { key: 0 }, ht(re(g), (P, oe) => (ee(), be(re(Ro), {
                    key: P[v.value.id],
                    onClick: gt((we) => $e(P, oe), ["stop"])
                  }, {
                    default: ve(() => [
                      ot(We(P[v.value.name]), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 128)) : Re("", !0)
                ]),
                _: 1
              }, 8, ["class"]),
              H.multiple ? (ee(), he("div", vf, [
                ae(re(At), {
                  modelValue: R.checkAll,
                  "onUpdate:modelValue": X[2] || (X[2] = (P) => R.checkAll = P),
                  indeterminate: R.indeterminate,
                  "true-label": 1,
                  "false-label": 0,
                  disabled: !H.multiple,
                  onChange: me,
                  onInput: me
                }, {
                  default: ve(() => [
                    ot("全选")
                  ]),
                  _: 1
                }, 8, ["modelValue", "indeterminate", "disabled"]),
                Ae.value > 1 ? Vt((ee(), be(re(st), {
                  key: 0,
                  link: "",
                  type: "primary",
                  onClick: gt(ue, ["stop"])
                }, {
                  default: ve(() => [
                    ot("上一级")
                  ]),
                  _: 1
                }, 8, ["onClick"])), [
                  [Tn, !V.value]
                ]) : Re("", !0)
              ])) : Re("", !0)
            ])) : Re("", !0),
            Oe.value === re(ar).group ? (ee(), he(Ye, { key: 1 }, [
              Q.value.length ? Vt((ee(), he("ul", pf, [
                H.multiple ? (ee(), be(re(ln), {
                  key: 0,
                  modelValue: k.trans,
                  "onUpdate:modelValue": X[3] || (X[3] = (P) => k.trans = P)
                }, {
                  default: ve(() => [
                    (ee(!0), he(Ye, null, ht(d.value, (P) => (ee(), he("li", {
                      key: P[v.value.id]
                    }, [
                      H.chooseType.includes("org") ? (ee(), he("div", xf, [
                        ae(ir),
                        pe("p", null, We(P[v.value.name]), 1)
                      ])) : (ee(), be(re(At), {
                        key: 1,
                        label: P[v.value.id],
                        disabled: !K.value || (P == null ? void 0 : P.readonly)
                      }, {
                        default: ve(() => [
                          pe("div", bf, [
                            ae(ir),
                            pe("p", null, We(P[v.value.name]), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["label", "disabled"])),
                      H.children ? (ee(), he("div", gf, [
                        [m.value.organization, m.value.dep, m.value.role].includes(
                          P[v.value.type]
                        ) ? (ee(), be(re(st), {
                          key: 0,
                          link: "",
                          type: "primary",
                          onClick: gt((oe) => Be(P), ["stop"]),
                          disabled: P.disabled
                        }, {
                          icon: ve(() => [
                            ae(Nn)
                          ]),
                          default: ve(() => [
                            ot(" 下级 ")
                          ]),
                          _: 2
                        }, 1032, ["onClick", "disabled"])) : Re("", !0)
                      ])) : Re("", !0)
                    ]))), 128)),
                    (!$.value || H.showDep) && !M.value ? (ee(!0), he(Ye, { key: 0 }, ht(l.value, (P) => (ee(), he("li", {
                      key: P[v.value.id]
                    }, [
                      H.chooseType.includes("dep") || H.chooseType.includes("dep_user") ? (ee(), be(re(At), {
                        key: 0,
                        label: P[v.value.id],
                        disabled: !K.value || (P == null ? void 0 : P.readonly)
                      }, {
                        default: ve(() => [
                          pe("div", mf, [
                            ae(nr),
                            pe("p", null, We(P[v.value.name]), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["label", "disabled"])) : (ee(), he("div", yf, [
                        ae(nr),
                        pe("p", null, We(P[v.value.name]), 1)
                      ])),
                      H.children ? (ee(), he("div", _f, [
                        [m.value.dep, m.value.role].includes(
                          P[v.value.type]
                        ) ? (ee(), be(re(st), {
                          key: 0,
                          link: "",
                          type: "primary",
                          onClick: gt((oe) => Be(P), ["stop"]),
                          disabled: P.disabled
                        }, {
                          icon: ve(() => [
                            ae(Nn)
                          ]),
                          default: ve(() => [
                            ot(" 下级 ")
                          ]),
                          _: 2
                        }, 1032, ["onClick", "disabled"])) : Re("", !0)
                      ])) : Re("", !0)
                    ]))), 128)) : Re("", !0),
                    H.chooseType.includes("user") || H.chooseType.includes("dep_user") ? (ee(!0), he(Ye, { key: 1 }, ht(u.value, (P) => (ee(), he("li", {
                      key: P[v.value.id]
                    }, [
                      ae(re(At), {
                        label: P[v.value.id],
                        disabled: !K.value || (P == null ? void 0 : P.readonly)
                      }, {
                        default: ve(() => {
                          var oe, we;
                          return [
                            m.value.dep === P[v.value.type] ? (ee(), be(Kt, { key: 0 })) : m.value.user === P[v.value.type] ? (ee(), be(re(gr), {
                              key: 1,
                              size: 30,
                              src: x((oe = v.value) != null && oe.avatar ? P[(we = v.value) == null ? void 0 : we.avatar] : ""),
                              icon: _r
                            }, null, 8, ["src"])) : Re("", !0),
                            pe("span", wf, We(P[v.value.name]), 1)
                          ];
                        }),
                        _: 2
                      }, 1032, ["label", "disabled"])
                    ]))), 128)) : Re("", !0)
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : (ee(), be(re(cr), {
                  key: 1,
                  modelValue: k.single,
                  "onUpdate:modelValue": X[4] || (X[4] = (P) => k.single = P)
                }, {
                  default: ve(() => [
                    (ee(!0), he(Ye, null, ht(Q.value, (P) => {
                      var oe, we, Fe;
                      return ee(), he("li", {
                        key: P[v.value.id]
                      }, [
                        T.value.includes((oe = P[v.value.type]) == null ? void 0 : oe.toLocaleLowerCase()) ? (ee(), be(re(dn), {
                          key: 0,
                          label: P[v.value.id],
                          class: Mt({
                            readonly: ![m.value.organization, m.value.dep, m.value.user].includes(
                              P[v.value.type]
                            ),
                            "w-full": !0
                          }),
                          disabled: P.readonly
                        }, {
                          default: ve(() => {
                            var ft, nt;
                            return [
                              m.value.organization === P[v.value.type] ? (ee(), be(ir, { key: 0 })) : m.value.dep === P[v.value.type] ? (ee(), be(nr, { key: 1 })) : m.value.role === P[v.value.type] ? (ee(), be(Kt, { key: 2 })) : m.value.user === P[v.value.type] ? (ee(), be(re(gr), {
                                key: 3,
                                size: 30,
                                src: x((ft = v.value) != null && ft.avatar ? P[(nt = v.value) == null ? void 0 : nt.avatar] : ""),
                                icon: _r
                              }, null, 8, ["src"])) : Re("", !0),
                              pe("span", kf, We(P[v.value.name]), 1)
                            ];
                          }),
                          _: 2
                        }, 1032, ["label", "class", "disabled"])) : (ee(), he(Ye, { key: 1 }, [
                          m.value.organization === P[v.value.type] ? (ee(), be(ir, { key: 0 })) : m.value.dep === P[v.value.type] ? (ee(), be(nr, { key: 1 })) : m.value.role === P[v.value.type] ? (ee(), be(Kt, { key: 2 })) : m.value.user === P[v.value.type] ? (ee(), be(re(gr), {
                            key: 3,
                            size: 30,
                            src: x((we = v.value) != null && we.avatar ? P[(Fe = v.value) == null ? void 0 : Fe.avatar] : ""),
                            icon: _r
                          }, null, 8, ["src"])) : Re("", !0),
                          pe("span", Ef, We(P[v.value.name]), 1)
                        ], 64)),
                        H.children ? (ee(), he("div", Cf, [
                          [m.value.organization, m.value.dep, m.value.role].includes(
                            P[v.value.type]
                          ) ? (ee(), be(re(st), {
                            key: 0,
                            link: "",
                            type: "primary",
                            onClick: gt((ft) => Be(P), ["stop"])
                          }, {
                            icon: ve(() => [
                              ae(Nn)
                            ]),
                            default: ve(() => [
                              ot(" 下级 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : Re("", !0)
                        ])) : Re("", !0)
                      ]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"]))
              ])), [
                [re(Dn), a.value]
              ]) : (ee(), he("div", Sf, We(H.emptyText), 1))
            ], 64)) : Oe.value === re(ar).role ? Vt((ee(), be(uf, {
              key: 2,
              fixPropOpt: v.value,
              list: s.value,
              max: H.max,
              multiple: H.multiple,
              "hand-list": Ze.value,
              onChange: Ct
            }, null, 8, ["fixPropOpt", "list", "max", "multiple", "hand-list"])), [
              [re(Dn), a.value]
            ]) : Oe.value === re(ar).post ? Vt((ee(), be(tf, {
              key: 3,
              fixPropOpt: v.value,
              list: f.value,
              max: H.max,
              multiple: H.multiple,
              "hand-list": St.value,
              onChange: ut
            }, null, 8, ["fixPropOpt", "list", "max", "multiple", "hand-list"])), [
              [re(Dn), a.value]
            ]) : Re("", !0)
          ]),
          Bf,
          pe("div", Af, [
            pe("div", Rf, [
              Of,
              ae(re(st), {
                type: "primary",
                link: "",
                onClick: gt(Ne, ["stop"])
              }, {
                default: ve(() => [
                  ot("清空")
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            ae(re(qo), {
              tag: "ul",
              name: "fade",
              "item-key": "elementId",
              modelValue: B.value,
              "onUpdate:modelValue": X[5] || (X[5] = (P) => B.value = P),
              style: tr({ height: `calc(${Me.value} + 21px)` }),
              animation: re(Ot).animation,
              group: re(Ot).group,
              disabled: re(Ot).disabled,
              ghostClass: re(Ot).ghostClass,
              forceFallback: re(Ot).ghostClass
            }, {
              item: ve(({ element: P }) => [
                ae(vo, {
                  type: "transition",
                  name: "flip-list"
                }, {
                  default: ve(() => [
                    pe("li", {
                      class: Mt(["list-group-item"]),
                      style: tr({
                        borderRadius: `${re(Ot).itemStyle.radius}px`,
                        marginBottom: `${re(Ot).itemStyle.bottom}px`,
                        backgroundColor: `${re(Ot).itemStyle.background}`
                      })
                    }, [
                      pe("div", null, [
                        m.value.organization === P[v.value.type] ? (ee(), be(ir, { key: 0 })) : Re("", !0),
                        m.value.dep === P[v.value.type] ? (ee(), be(nr, { key: 1 })) : m.value.role === P[v.value.type] ? (ee(), be(Kt, { key: 2 })) : m.value.post === P[v.value.type] ? (ee(), be(Yn, { key: 3 })) : m.value.user === P[v.value.type] ? (ee(), be(re(gr), {
                          key: 4,
                          size: 30,
                          src: x(v.value.avatar ? P[v.value.avatar] : ""),
                          icon: _r
                        }, null, 8, ["src"])) : Re("", !0),
                        pe("span", null, We(P[v.value.name]), 1)
                      ]),
                      Vt(ae(Iu, {
                        class: "close",
                        onClick: gt((oe) => W(P), ["stop"])
                      }, null, 8, ["onClick"]), [
                        [Tn, !(P != null && P.readonly)]
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
const Nf = oi(Lf), Tf = /* @__PURE__ */ Ht({
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
  setup(e) {
    const r = Ee(!1), t = Ee([]), { userList: n, depList: i, roleList: o, postList: c } = Ee(data), u = (f) => {
      t.value = f.list;
    }, l = Ee(""), s = () => {
    };
    return (f, d) => {
      const a = i0("el-icon"), h = i0("el-input");
      return ee(), he(Ye, null, [
        ae(h, {
          modelValue: l.value,
          "onUpdate:modelValue": d[1] || (d[1] = (x) => l.value = x),
          placeholder: "请选择部门/人员/角色",
          onClick: d[2] || (d[2] = (x) => r.value = !0)
        }, {
          suffix: ve(() => [
            ae(a, {
              onClick: d[0] || (d[0] = (x) => r.value = !0)
            }, {
              default: ve(() => [
                ae(re(wo))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        ae(re(Nf), {
          modelValue: t.value,
          "onUpdate:modelValue": d[3] || (d[3] = (x) => t.value = x),
          show: r.value,
          "onUpdate:show": d[4] || (d[4] = (x) => r.value = x),
          "dep-list": re(i),
          "user-list": re(n),
          "role-list": re(o),
          "post-list": re(c),
          "choose-type": ["user"],
          tabs: ["group"],
          "type-option": { dep: "DEPT", user: "USER", role: "ROLE", post: "POST" },
          "prop-option": {
            name: "elementName",
            id: "elementId",
            type: "elementType"
          },
          "empty-text": "暂无数据",
          onHandChild: s,
          onOk: u
        }, null, 8, ["modelValue", "show", "dep-list", "user-list", "role-list", "post-list"])
      ], 64);
    };
  }
});
const If = /* @__PURE__ */ et(Tf, [["__scopeId", "data-v-78a7b3d9"]]);
function Pf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !po(e);
}
const $f = /* @__PURE__ */ Ht({
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
  setup(e, {
    emit: r,
    expose: t
  }) {
    const n = Ee(e.list), {
      list: i
    } = e, o = () => {
      r("handleChange", n);
    }, c = ({
      key: m,
      placeholder: B,
      maxlength: _,
      minlength: p,
      disabled: g
    }) => ae(ii, {
      modelValue: n.value[m],
      "onUpdate:modelValue": (y) => n.value[m] = y,
      clearable: !0,
      maxlength: _,
      minlength: p,
      disabled: g,
      onChange: () => o(),
      placeholder: B || "全部"
    }, null), u = ({
      key: m,
      placeholder: B,
      max: _,
      min: p,
      disabled: g,
      precision: y,
      step: E = 1
    }) => ae(Do, {
      modelValue: n.value[m],
      "onUpdate:modelValue": (k) => n.value[m] = k,
      clearable: !0,
      max: _,
      min: p,
      disabled: g,
      precision: y,
      step: E,
      onChange: () => o(),
      placeholder: B || "全部"
    }, null), l = ({
      key: m,
      placeholder: B,
      disabled: _,
      options: p,
      multiple: g = !1,
      filterable: y = !0
    }) => ae(Lo, {
      modelValue: n.value[m],
      "onUpdate:modelValue": (E) => n.value[m] = E,
      clearable: !0,
      disabled: _,
      multiple: g,
      filterable: y,
      onChange: () => o(),
      placeholder: B || "全部"
    }, {
      default: () => [p == null ? void 0 : p.map((E) => ae(No, {
        key: E.value,
        label: E.label,
        value: E.value
      }, null))]
    }), s = ({
      key: m,
      disabled: B,
      options: _
    }) => ae(cr, {
      modelValue: n.value[m],
      "onUpdate:modelValue": (p) => n.value[m] = p,
      disabled: B,
      onChange: () => o()
    }, {
      default: () => [_ == null ? void 0 : _.map((p) => ae(dn, {
        key: p.value,
        label: p.label,
        value: p.value
      }, null))]
    }), f = ({
      key: m,
      disabled: B,
      options: _,
      min: p,
      max: g
    }) => ae(ln, {
      modelValue: n.value[m],
      "onUpdate:modelValue": (y) => n.value[m] = y,
      disabled: B,
      max: g,
      min: p,
      onChange: () => o()
    }, {
      default: () => [_ == null ? void 0 : _.map((y) => ae(At, {
        key: y.value,
        label: y.label,
        value: y.value
      }, null))]
    }), d = ({
      key: m,
      disabled: B,
      editable: _ = !0,
      startPlaceholder: p = "开始日期",
      endplaceholder: g = "结束日期",
      dateType: y = $t.date,
      format: E,
      placeholder: k = "请选择日期",
      popperclass: R,
      rangeSeparator: I = "-",
      defaultValue: C,
      defaultTime: A,
      valueFormat: T,
      disabledDate: L = () => !1
    }) => {
      let $ = E;
      if (!$)
        switch (y) {
          case $t.date:
          case $t.dates:
            $ = "YYYY-MM-DD";
            break;
          case $t.year:
            $ = "YYYY";
            break;
          case $t.month:
            $ = "YYYY-MM";
            break;
          case $t.week:
            $ = "YYYY-MM-DD";
            break;
          default:
            $ = "YYYY-MM-DD";
        }
      return ae(To, {
        modelValue: n.value[m],
        "onUpdate:modelValue": (M) => n.value[m] = M,
        onChange: () => o(),
        placeholder: k,
        disabled: B,
        type: y,
        editable: _,
        startPlaceholder: p,
        endPlaceholder: g,
        rangeSeparator: I,
        format: $,
        popperClass: R,
        defaultValue: C,
        defaultTime: A,
        valueFormat: T,
        disabledDate: L
      }, null);
    }, a = ({
      key: m,
      options: B,
      multiple: _ = !1,
      filterable: p = !0,
      nodeKey: g = "id",
      props: y,
      highlightCurrent: E = !0,
      defaultExpandAll: k = !1,
      expandOnClickNode: R = !1,
      placeholder: I = "全部",
      checkOnClickNode: C = !1,
      showCheckbox: A = !1,
      checkStrictly: T = !0,
      defaultCheckedKeys: L = [],
      currentNodeKey: $ = "",
      accordion: M = !1
    }) => ae(Io, {
      modelValue: n.value[m],
      "onUpdate:modelValue": (V) => n.value[m] = V,
      data: B,
      onChange: () => o(),
      clearable: !0,
      multiple: _,
      props: y,
      placeholder: I,
      filterable: p,
      nodeKey: g,
      highlightCurrent: E,
      defaultExpandAll: k,
      expandOnClickNode: R,
      checkOnClickNode: C,
      showCheckbox: A,
      checkStrictly: T,
      defaultCheckedKeys: L,
      currentNodeKey: $,
      accordion: M
    }, null), h = ({
      key: m,
      placeholder: B,
      typeOption: _,
      _list: p,
      data: g,
      handSetChild: y
    }) => ae(If, {
      typeOption: _,
      list: p,
      key: m,
      props: e,
      data: g,
      handSetChild: y,
      placeholder: B
    }, null), x = (m) => {
      switch (m.type) {
        case "":
        case void 0:
        case Bt.input:
          return c(m);
        case Bt.number:
          return u(m);
        case Bt.select:
          return l(m);
        case Bt.checkbox:
          return f(m);
        case Bt.radio:
          return s(m);
        case Bt.date:
          return d(m);
        case Bt.treeselect:
          return a(m);
        case Bt.choosePerson:
          return h(m);
        default:
          return ae(Ye, null, null);
      }
    }, v = De(() => {
      const m = [];
      return i.forEach((B, _) => {
        let p;
        if (!B)
          return [];
        m.push(ae(Oo, {
          label: B.label,
          prop: B.key
        }, Pf(p = x(B)) ? p : {
          default: () => [p]
        }));
      }), m;
    });
    return () => ae(Ye, null, [v.value]);
  }
}), Mf = { class: "ik-pack" }, Hf = /* @__PURE__ */ Ht({
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
  setup(e, { emit: r }) {
    const t = e, n = {}, i = {}, o = Ee([]), c = Ee({ ...i }), u = Ee(null), l = Ee(!1);
    Dt(o, (a, h) => {
      const x = h.filter((v) => !a.includes(v));
      if (x.length) {
        let v = !1;
        x.forEach((m) => {
          c.value[m] !== void 0 && (v = !0), c.value[m] = void 0;
        }), v && r("search", c.value);
      }
    }), t.list.forEach((a, h) => {
      i[a.key] = i[a.value], h < t.num && (n[a.key] = n[a.value], o.value.push(a.key));
    });
    const s = De(
      () => o.value.map((a) => t.list.find((h) => h.key === a))
    );
    De(() => {
      const { minSpan: a } = t;
      return s.value.length < 4 ? a > 8 || a > 6 ? a : 6 : a;
    });
    const f = () => {
      var a;
      try {
        (a = u.value) == null || a.resetFields(), r("refresh"), r("search", c.value);
      } catch {
      }
    }, d = () => {
      l.value = !l.value;
    };
    return (a, h) => (ee(), he("div", null, [
      ae(Ko, {
        rowData: t.rowData,
        onDelete: h[0] || (h[0] = (x) => r("delete", e.rowData)),
        onImport: h[1] || (h[1] = (x) => r("import", e.rowData)),
        onExport: h[2] || (h[2] = (x) => r("export", e.rowData))
      }, null, 8, ["rowData"]),
      ae(re(Po), {
        class: Mt(["gl-search-card", l.value ? "pack-up-search" : "ik-unfold-search"]),
        shadow: e.shadow
      }, xo({
        default: ve(() => [
          ae(re($o), {
            ref_key: "_formRef",
            ref: u,
            inline: e.inline,
            model: c.value,
            "status-icon": e.statusIcon,
            "label-width": `${e.labelWidth}px`,
            class: "in-label",
            onKeydown: h[5] || (h[5] = bo(gt((x) => r("search", c.value), ["prevent"]), ["enter"]))
          }, {
            default: ve(() => [
              ae(re(Mo), { gutter: 10 }, {
                default: ve(() => [
                  (ee(!0), he(Ye, null, ht(s.value, (x, v) => (ee(), be(re(Ho), {
                    key: v,
                    class: Mt(
                      [
                        "el-col",
                        "el-col-24",
                        `el-col-sm-${12 * (x.col || 1) * (v === s.value.length - 1 ? 2 : 1)}`,
                        `el-col-md-${8 * (x.col || 1) * (v === s.value.length - 1 ? 2 : 1)}`,
                        `el-col-lg-${6 * (x.col || 1) * (v === s.value.length - 1 ? 2 : 1)}`,
                        `el-col-xl-${4 * (x.col || 1) * (v === s.value.length - 1 ? 2 : 1)}`,
                        "is-guttered",
                        "el-col-4",
                        `el-col-l-${4 * (x.col || 1) * (v === s.value.length - 1 ? 2 : 1)}`,
                        `el-col-sl-${5 * (x.col || 1) * (v === s.value.length - 1 ? 2 : 1)}`,
                        `${v === s.value.length - 1 ? "last-col" : ""}`
                      ].join(" ")
                    )
                  }, {
                    default: ve(() => [
                      pe("div", {
                        class: Mt(["last-with-btn", v === s.value.length - 1 ? "last-form" : ""])
                      }, [
                        x != null && x.slot ? go(a.$slots, x == null ? void 0 : x.slot, { key: 0 }, void 0, !0) : Re("", !0),
                        x != null && x.slot ? Re("", !0) : (ee(), be(re($f), {
                          key: 1,
                          onHandleChange: h[3] || (h[3] = (m) => r("search", c.value)),
                          list: [e.list[v]]
                        }, null, 8, ["list"])),
                        v + 1 === s.value.length ? (ee(), he(Ye, { key: 2 }, [
                          e.showSearch ? (ee(), be(re(st), {
                            key: 0,
                            class: "icon-more el-icon ml",
                            title: "查询",
                            icon: re(ko),
                            onClick: h[4] || (h[4] = (m) => r("search", c.value))
                          }, null, 8, ["icon"])) : Re("", !0),
                          ae(re(st), {
                            icon: re(Eo),
                            class: "icon-more el-icon ml",
                            title: "重置",
                            onClick: f
                          }, null, 8, ["icon"])
                        ], 64)) : Re("", !0)
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
        e.title ? {
          name: "header",
          fn: ve(() => [
            pe("h2", null, We(e.title), 1)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["class", "shadow"]),
      pe("div", Mf, [
        pe("div", {
          class: "ik-pack-up",
          onClick: d
        }, [
          ae(re(zo), { size: "16" }, {
            default: ve(() => [
              Vt(ae(re(Co), null, null, 512), [
                [Tn, !l.value]
              ])
            ]),
            _: 1
          })
        ])
      ])
    ]));
  }
});
const zf = /* @__PURE__ */ et(Hf, [["__scopeId", "data-v-58bf3841"]]), Yf = oi(zf);
export {
  Uo as EAlign,
  $t as EDateType,
  Bt as EType,
  Yf as IKSearch,
  Yf as default
};
