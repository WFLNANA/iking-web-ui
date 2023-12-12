var Td = Object.defineProperty;
var kd = (t, e, n) => e in t ? Td(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var ks = (t, e, n) => (kd(t, typeof e != "symbol" ? e + "" : e, n), n);
import { defineComponent as Jn, h as Gr, Fragment as dt, Teleport as Id, openBlock as ne, createElementBlock as me, createElementVNode as ve, computed as qe, ref as Ue, createBlock as we, unref as ee, withCtx as ue, createTextVNode as ft, createCommentVNode as Pe, renderList as kt, createVNode as oe, toDisplayString as nt, useCssVars as Md, watch as xn, toRef as Od, reactive as Xs, nextTick as Ks, watchEffect as ya, withModifiers as vt, normalizeStyle as Hn, normalizeClass as Is, withDirectives as or, vShow as xa, Transition as Nd, resolveComponent as Bd, pushScopeId as Pd, popScopeId as Ld } from "vue";
import * as Hd from "lodash-es";
import { DeleteFilled as zd, Calendar as Fd, Clock as Ud, User as Wd, Close as Vd, Location as jd } from "@element-plus/icons-vue";
import { ElCheckbox as an, ElCheckboxGroup as To, ElRadioGroup as ri, ElRadio as ko, ElDialog as Rc, ElButton as Qt, ElInput as Js, ElRadioButton as $d, ElBreadcrumb as qd, ElBreadcrumbItem as Yd, ElAvatar as Br, vLoading as Ms, ElIcon as Pn, ElForm as Gd, ElFormItem as Pr, ElSelect as Qd, ElOption as _a, ElDatePicker as Ln, ElTimePicker as Ea, ElMessageBox as Zd, ElMessage as Xd } from "element-plus";
import Kd from "vuedraggable";
const Tc = (t, e) => {
  if (t.install = (n) => {
    for (const r of [t, ...Object.values(e ?? {})])
      n.component(r.name, r);
  }, e)
    for (const [n, r] of Object.entries(e))
      t[n] = r;
  return t;
};
var be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Jd(t) {
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
var wa = {}, e0 = {
  get exports() {
    return wa;
  },
  set exports(t) {
    wa = t;
  }
};
function fr(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ii = {}, t0 = {
  get exports() {
    return ii;
  },
  set exports(t) {
    ii = t;
  }
};
const n0 = {}, r0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: n0
}, Symbol.toStringTag, { value: "Module" })), i0 = /* @__PURE__ */ Jd(r0);
var Sa;
function Se() {
  return Sa || (Sa = 1, function(t, e) {
    (function(n, r) {
      t.exports = r();
    })(be, function() {
      var n = n || function(r, i) {
        var s;
        if (typeof window < "u" && window.crypto && (s = window.crypto), typeof self < "u" && self.crypto && (s = self.crypto), typeof globalThis < "u" && globalThis.crypto && (s = globalThis.crypto), !s && typeof window < "u" && window.msCrypto && (s = window.msCrypto), !s && typeof be < "u" && be.crypto && (s = be.crypto), !s && typeof fr == "function")
          try {
            s = i0;
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
          function y() {
          }
          return function(m) {
            var b;
            return y.prototype = m, b = new y(), y.prototype = null, b;
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
            extend: function(y) {
              var m = a(this);
              return y && m.mixIn(y), (!m.hasOwnProperty("init") || this.init === m.init) && (m.init = function() {
                m.$super.init.apply(this, arguments);
              }), m.init.prototype = m, m.$super = this, m;
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
              var y = this.extend();
              return y.init.apply(y, arguments), y;
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
            mixIn: function(y) {
              for (var m in y)
                y.hasOwnProperty(m) && (this[m] = y[m]);
              y.hasOwnProperty("toString") && (this.toString = y.toString);
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
          init: function(y, m) {
            y = this.words = y || [], m != i ? this.sigBytes = m : this.sigBytes = y.length * 4;
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
          toString: function(y) {
            return (y || h).stringify(this);
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
          concat: function(y) {
            var m = this.words, b = y.words, E = this.sigBytes, A = y.sigBytes;
            if (this.clamp(), E % 4)
              for (var w = 0; w < A; w++) {
                var D = b[w >>> 2] >>> 24 - w % 4 * 8 & 255;
                m[E + w >>> 2] |= D << 24 - (E + w) % 4 * 8;
              }
            else
              for (var B = 0; B < A; B += 4)
                m[E + B >>> 2] = b[B >>> 2];
            return this.sigBytes += A, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var y = this.words, m = this.sigBytes;
            y[m >>> 2] &= 4294967295 << 32 - m % 4 * 8, y.length = r.ceil(m / 4);
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
            var y = u.clone.call(this);
            return y.words = this.words.slice(0), y;
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
          random: function(y) {
            for (var m = [], b = 0; b < y; b += 4)
              m.push(o());
            return new d.init(m, y);
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
          stringify: function(y) {
            for (var m = y.words, b = y.sigBytes, E = [], A = 0; A < b; A++) {
              var w = m[A >>> 2] >>> 24 - A % 4 * 8 & 255;
              E.push((w >>> 4).toString(16)), E.push((w & 15).toString(16));
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
          parse: function(y) {
            for (var m = y.length, b = [], E = 0; E < m; E += 2)
              b[E >>> 3] |= parseInt(y.substr(E, 2), 16) << 24 - E % 8 * 4;
            return new d.init(b, m / 2);
          }
        }, g = f.Latin1 = {
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
          stringify: function(y) {
            for (var m = y.words, b = y.sigBytes, E = [], A = 0; A < b; A++) {
              var w = m[A >>> 2] >>> 24 - A % 4 * 8 & 255;
              E.push(String.fromCharCode(w));
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
          parse: function(y) {
            for (var m = y.length, b = [], E = 0; E < m; E++)
              b[E >>> 2] |= (y.charCodeAt(E) & 255) << 24 - E % 4 * 8;
            return new d.init(b, m);
          }
        }, p = f.Utf8 = {
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
          stringify: function(y) {
            try {
              return decodeURIComponent(escape(g.stringify(y)));
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
          parse: function(y) {
            return g.parse(unescape(encodeURIComponent(y)));
          }
        }, v = l.BufferedBlockAlgorithm = u.extend({
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
          _append: function(y) {
            typeof y == "string" && (y = p.parse(y)), this._data.concat(y), this._nDataBytes += y.sigBytes;
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
          _process: function(y) {
            var m, b = this._data, E = b.words, A = b.sigBytes, w = this.blockSize, D = w * 4, B = A / D;
            y ? B = r.ceil(B) : B = r.max((B | 0) - this._minBufferSize, 0);
            var C = B * w, k = r.min(C * 4, A);
            if (C) {
              for (var P = 0; P < C; P += w)
                this._doProcessBlock(E, P);
              m = E.splice(0, C), b.sigBytes -= k;
            }
            return new d.init(m, k);
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
            var y = u.clone.call(this);
            return y._data = this._data.clone(), y;
          },
          _minBufferSize: 0
        });
        l.Hasher = v.extend({
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
          init: function(y) {
            this.cfg = this.cfg.extend(y), this.reset();
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
          update: function(y) {
            return this._append(y), this._process(), this;
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
          finalize: function(y) {
            y && this._append(y);
            var m = this._doFinalize();
            return m;
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
          _createHelper: function(y) {
            return function(m, b) {
              return new y.init(b).finalize(m);
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
          _createHmacHelper: function(y) {
            return function(m, b) {
              return new _.HMAC.init(y, b).finalize(m);
            };
          }
        });
        var _ = c.algo = {};
        return c;
      }(Math);
      return n;
    });
  }(t0)), ii;
}
var si = {}, s0 = {
  get exports() {
    return si;
  },
  set exports(t) {
    si = t;
  }
}, Aa;
function is() {
  return Aa || (Aa = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(Se());
    })(be, function(n) {
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
  }(s0)), si;
}
var oi = {}, o0 = {
  get exports() {
    return oi;
  },
  set exports(t) {
    oi = t;
  }
}, Ca;
function a0() {
  return Ca || (Ca = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(Se());
    })(be, function(n) {
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
  }(o0)), oi;
}
var ai = {}, l0 = {
  get exports() {
    return ai;
  },
  set exports(t) {
    ai = t;
  }
}, Da;
function c0() {
  return Da || (Da = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(Se());
    })(be, function(n) {
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
  }(l0)), ai;
}
var li = {}, u0 = {
  get exports() {
    return li;
  },
  set exports(t) {
    li = t;
  }
}, Ra;
function Tn() {
  return Ra || (Ra = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(Se());
    })(be, function(n) {
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
              for (var g = l[h >>> 2] >>> 24 - h % 4 * 8 & 255, p = l[h + 1 >>> 2] >>> 24 - (h + 1) % 4 * 8 & 255, v = l[h + 2 >>> 2] >>> 24 - (h + 2) % 4 * 8 & 255, _ = g << 16 | p << 8 | v, y = 0; y < 4 && h + y * 0.75 < u; y++)
                f.push(d.charAt(_ >>> 6 * (3 - y) & 63));
            var m = d.charAt(64);
            if (m)
              for (; f.length % 4; )
                f.push(m);
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
              var g = c.indexOf(h);
              g !== -1 && (l = g);
            }
            return a(c, l, d);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function a(c, l, u) {
          for (var d = [], f = 0, h = 0; h < l; h++)
            if (h % 4) {
              var g = u[c.charCodeAt(h - 1)] << h % 4 * 2, p = u[c.charCodeAt(h)] >>> 6 - h % 4 * 2, v = g | p;
              d[f >>> 2] |= v << 24 - f % 4 * 8, f++;
            }
          return s.create(d, f);
        }
      }(), n.enc.Base64;
    });
  }(u0)), li;
}
var ci = {}, f0 = {
  get exports() {
    return ci;
  },
  set exports(t) {
    ci = t;
  }
}, Ta;
function d0() {
  return Ta || (Ta = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(Se());
    })(be, function(n) {
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
            for (var h = [], g = 0; g < d; g += 3)
              for (var p = u[g >>> 2] >>> 24 - g % 4 * 8 & 255, v = u[g + 1 >>> 2] >>> 24 - (g + 1) % 4 * 8 & 255, _ = u[g + 2 >>> 2] >>> 24 - (g + 2) % 4 * 8 & 255, y = p << 16 | v << 8 | _, m = 0; m < 4 && g + m * 0.75 < d; m++)
                h.push(f.charAt(y >>> 6 * (3 - m) & 63));
            var b = f.charAt(64);
            if (b)
              for (; h.length % 4; )
                h.push(b);
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
            var g = d.charAt(64);
            if (g) {
              var p = c.indexOf(g);
              p !== -1 && (u = p);
            }
            return a(c, u, f);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function a(c, l, u) {
          for (var d = [], f = 0, h = 0; h < l; h++)
            if (h % 4) {
              var g = u[c.charCodeAt(h - 1)] << h % 4 * 2, p = u[c.charCodeAt(h)] >>> 6 - h % 4 * 2, v = g | p;
              d[f >>> 2] |= v << 24 - f % 4 * 8, f++;
            }
          return s.create(d, f);
        }
      }(), n.enc.Base64url;
    });
  }(f0)), ci;
}
var ui = {}, h0 = {
  get exports() {
    return ui;
  },
  set exports(t) {
    ui = t;
  }
}, ka;
function kn() {
  return ka || (ka = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(Se());
    })(be, function(n) {
      return function(r) {
        var i = n, s = i.lib, o = s.WordArray, a = s.Hasher, c = i.algo, l = [];
        (function() {
          for (var p = 0; p < 64; p++)
            l[p] = r.abs(r.sin(p + 1)) * 4294967296 | 0;
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
          _doProcessBlock: function(p, v) {
            for (var _ = 0; _ < 16; _++) {
              var y = v + _, m = p[y];
              p[y] = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360;
            }
            var b = this._hash.words, E = p[v + 0], A = p[v + 1], w = p[v + 2], D = p[v + 3], B = p[v + 4], C = p[v + 5], k = p[v + 6], P = p[v + 7], N = p[v + 8], W = p[v + 9], z = p[v + 10], q = p[v + 11], Q = p[v + 12], ie = p[v + 13], te = p[v + 14], se = p[v + 15], F = b[0], V = b[1], j = b[2], Y = b[3];
            F = d(F, V, j, Y, E, 7, l[0]), Y = d(Y, F, V, j, A, 12, l[1]), j = d(j, Y, F, V, w, 17, l[2]), V = d(V, j, Y, F, D, 22, l[3]), F = d(F, V, j, Y, B, 7, l[4]), Y = d(Y, F, V, j, C, 12, l[5]), j = d(j, Y, F, V, k, 17, l[6]), V = d(V, j, Y, F, P, 22, l[7]), F = d(F, V, j, Y, N, 7, l[8]), Y = d(Y, F, V, j, W, 12, l[9]), j = d(j, Y, F, V, z, 17, l[10]), V = d(V, j, Y, F, q, 22, l[11]), F = d(F, V, j, Y, Q, 7, l[12]), Y = d(Y, F, V, j, ie, 12, l[13]), j = d(j, Y, F, V, te, 17, l[14]), V = d(V, j, Y, F, se, 22, l[15]), F = f(F, V, j, Y, A, 5, l[16]), Y = f(Y, F, V, j, k, 9, l[17]), j = f(j, Y, F, V, q, 14, l[18]), V = f(V, j, Y, F, E, 20, l[19]), F = f(F, V, j, Y, C, 5, l[20]), Y = f(Y, F, V, j, z, 9, l[21]), j = f(j, Y, F, V, se, 14, l[22]), V = f(V, j, Y, F, B, 20, l[23]), F = f(F, V, j, Y, W, 5, l[24]), Y = f(Y, F, V, j, te, 9, l[25]), j = f(j, Y, F, V, D, 14, l[26]), V = f(V, j, Y, F, N, 20, l[27]), F = f(F, V, j, Y, ie, 5, l[28]), Y = f(Y, F, V, j, w, 9, l[29]), j = f(j, Y, F, V, P, 14, l[30]), V = f(V, j, Y, F, Q, 20, l[31]), F = h(F, V, j, Y, C, 4, l[32]), Y = h(Y, F, V, j, N, 11, l[33]), j = h(j, Y, F, V, q, 16, l[34]), V = h(V, j, Y, F, te, 23, l[35]), F = h(F, V, j, Y, A, 4, l[36]), Y = h(Y, F, V, j, B, 11, l[37]), j = h(j, Y, F, V, P, 16, l[38]), V = h(V, j, Y, F, z, 23, l[39]), F = h(F, V, j, Y, ie, 4, l[40]), Y = h(Y, F, V, j, E, 11, l[41]), j = h(j, Y, F, V, D, 16, l[42]), V = h(V, j, Y, F, k, 23, l[43]), F = h(F, V, j, Y, W, 4, l[44]), Y = h(Y, F, V, j, Q, 11, l[45]), j = h(j, Y, F, V, se, 16, l[46]), V = h(V, j, Y, F, w, 23, l[47]), F = g(F, V, j, Y, E, 6, l[48]), Y = g(Y, F, V, j, P, 10, l[49]), j = g(j, Y, F, V, te, 15, l[50]), V = g(V, j, Y, F, C, 21, l[51]), F = g(F, V, j, Y, Q, 6, l[52]), Y = g(Y, F, V, j, D, 10, l[53]), j = g(j, Y, F, V, z, 15, l[54]), V = g(V, j, Y, F, A, 21, l[55]), F = g(F, V, j, Y, N, 6, l[56]), Y = g(Y, F, V, j, se, 10, l[57]), j = g(j, Y, F, V, k, 15, l[58]), V = g(V, j, Y, F, ie, 21, l[59]), F = g(F, V, j, Y, B, 6, l[60]), Y = g(Y, F, V, j, q, 10, l[61]), j = g(j, Y, F, V, w, 15, l[62]), V = g(V, j, Y, F, W, 21, l[63]), b[0] = b[0] + F | 0, b[1] = b[1] + V | 0, b[2] = b[2] + j | 0, b[3] = b[3] + Y | 0;
          },
          _doFinalize: function() {
            var p = this._data, v = p.words, _ = this._nDataBytes * 8, y = p.sigBytes * 8;
            v[y >>> 5] |= 128 << 24 - y % 32;
            var m = r.floor(_ / 4294967296), b = _;
            v[(y + 64 >>> 9 << 4) + 15] = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360, v[(y + 64 >>> 9 << 4) + 14] = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360, p.sigBytes = (v.length + 1) * 4, this._process();
            for (var E = this._hash, A = E.words, w = 0; w < 4; w++) {
              var D = A[w];
              A[w] = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360;
            }
            return E;
          },
          clone: function() {
            var p = a.clone.call(this);
            return p._hash = this._hash.clone(), p;
          }
        });
        function d(p, v, _, y, m, b, E) {
          var A = p + (v & _ | ~v & y) + m + E;
          return (A << b | A >>> 32 - b) + v;
        }
        function f(p, v, _, y, m, b, E) {
          var A = p + (v & y | _ & ~y) + m + E;
          return (A << b | A >>> 32 - b) + v;
        }
        function h(p, v, _, y, m, b, E) {
          var A = p + (v ^ _ ^ y) + m + E;
          return (A << b | A >>> 32 - b) + v;
        }
        function g(p, v, _, y, m, b, E) {
          var A = p + (_ ^ (v | ~y)) + m + E;
          return (A << b | A >>> 32 - b) + v;
        }
        i.MD5 = a._createHelper(u), i.HmacMD5 = a._createHmacHelper(u);
      }(Math), n.MD5;
    });
  }(h0)), ui;
}
var fi = {}, p0 = {
  get exports() {
    return fi;
  },
  set exports(t) {
    fi = t;
  }
}, Ia;
function Io() {
  return Ia || (Ia = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(Se());
    })(be, function(n) {
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
            for (var f = this._hash.words, h = f[0], g = f[1], p = f[2], v = f[3], _ = f[4], y = 0; y < 80; y++) {
              if (y < 16)
                c[y] = u[d + y] | 0;
              else {
                var m = c[y - 3] ^ c[y - 8] ^ c[y - 14] ^ c[y - 16];
                c[y] = m << 1 | m >>> 31;
              }
              var b = (h << 5 | h >>> 27) + _ + c[y];
              y < 20 ? b += (g & p | ~g & v) + 1518500249 : y < 40 ? b += (g ^ p ^ v) + 1859775393 : y < 60 ? b += (g & p | g & v | p & v) - 1894007588 : b += (g ^ p ^ v) - 899497514, _ = v, v = p, p = g << 30 | g >>> 2, g = h, h = b;
            }
            f[0] = f[0] + h | 0, f[1] = f[1] + g | 0, f[2] = f[2] + p | 0, f[3] = f[3] + v | 0, f[4] = f[4] + _ | 0;
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
  }(p0)), fi;
}
var di = {}, g0 = {
  get exports() {
    return di;
  },
  set exports(t) {
    di = t;
  }
}, Ma;
function kc() {
  return Ma || (Ma = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(Se());
    })(be, function(n) {
      return function(r) {
        var i = n, s = i.lib, o = s.WordArray, a = s.Hasher, c = i.algo, l = [], u = [];
        (function() {
          function h(_) {
            for (var y = r.sqrt(_), m = 2; m <= y; m++)
              if (!(_ % m))
                return !1;
            return !0;
          }
          function g(_) {
            return (_ - (_ | 0)) * 4294967296 | 0;
          }
          for (var p = 2, v = 0; v < 64; )
            h(p) && (v < 8 && (l[v] = g(r.pow(p, 1 / 2))), u[v] = g(r.pow(p, 1 / 3)), v++), p++;
        })();
        var d = [], f = c.SHA256 = a.extend({
          _doReset: function() {
            this._hash = new o.init(l.slice(0));
          },
          _doProcessBlock: function(h, g) {
            for (var p = this._hash.words, v = p[0], _ = p[1], y = p[2], m = p[3], b = p[4], E = p[5], A = p[6], w = p[7], D = 0; D < 64; D++) {
              if (D < 16)
                d[D] = h[g + D] | 0;
              else {
                var B = d[D - 15], C = (B << 25 | B >>> 7) ^ (B << 14 | B >>> 18) ^ B >>> 3, k = d[D - 2], P = (k << 15 | k >>> 17) ^ (k << 13 | k >>> 19) ^ k >>> 10;
                d[D] = C + d[D - 7] + P + d[D - 16];
              }
              var N = b & E ^ ~b & A, W = v & _ ^ v & y ^ _ & y, z = (v << 30 | v >>> 2) ^ (v << 19 | v >>> 13) ^ (v << 10 | v >>> 22), q = (b << 26 | b >>> 6) ^ (b << 21 | b >>> 11) ^ (b << 7 | b >>> 25), Q = w + q + N + u[D] + d[D], ie = z + W;
              w = A, A = E, E = b, b = m + Q | 0, m = y, y = _, _ = v, v = Q + ie | 0;
            }
            p[0] = p[0] + v | 0, p[1] = p[1] + _ | 0, p[2] = p[2] + y | 0, p[3] = p[3] + m | 0, p[4] = p[4] + b | 0, p[5] = p[5] + E | 0, p[6] = p[6] + A | 0, p[7] = p[7] + w | 0;
          },
          _doFinalize: function() {
            var h = this._data, g = h.words, p = this._nDataBytes * 8, v = h.sigBytes * 8;
            return g[v >>> 5] |= 128 << 24 - v % 32, g[(v + 64 >>> 9 << 4) + 14] = r.floor(p / 4294967296), g[(v + 64 >>> 9 << 4) + 15] = p, h.sigBytes = g.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var h = a.clone.call(this);
            return h._hash = this._hash.clone(), h;
          }
        });
        i.SHA256 = a._createHelper(f), i.HmacSHA256 = a._createHmacHelper(f);
      }(Math), n.SHA256;
    });
  }(g0)), di;
}
var hi = {}, v0 = {
  get exports() {
    return hi;
  },
  set exports(t) {
    hi = t;
  }
}, Oa;
function m0() {
  return Oa || (Oa = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), kc());
    })(be, function(n) {
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
  }(v0)), hi;
}
var pi = {}, b0 = {
  get exports() {
    return pi;
  },
  set exports(t) {
    pi = t;
  }
}, Na;
function Ic() {
  return Na || (Na = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), is());
    })(be, function(n) {
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
          for (var g = 0; g < 80; g++)
            f[g] = u();
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
          _doProcessBlock: function(g, p) {
            for (var v = this._hash.words, _ = v[0], y = v[1], m = v[2], b = v[3], E = v[4], A = v[5], w = v[6], D = v[7], B = _.high, C = _.low, k = y.high, P = y.low, N = m.high, W = m.low, z = b.high, q = b.low, Q = E.high, ie = E.low, te = A.high, se = A.low, F = w.high, V = w.low, j = D.high, Y = D.low, xe = B, Ee = C, Me = k, pe = P, Oe = N, Ge = W, At = z, ut = q, Xe = Q, He = ie, We = te, jt = se, Bt = F, xt = V, $t = j, _t = Y, Qe = 0; Qe < 80; Qe++) {
              var Ke, at, qt = f[Qe];
              if (Qe < 16)
                at = qt.high = g[p + Qe * 2] | 0, Ke = qt.low = g[p + Qe * 2 + 1] | 0;
              else {
                var Yt = f[Qe - 15], Ct = Yt.high, H = Yt.low, K = (Ct >>> 1 | H << 31) ^ (Ct >>> 8 | H << 24) ^ Ct >>> 7, L = (H >>> 1 | Ct << 31) ^ (H >>> 8 | Ct << 24) ^ (H >>> 7 | Ct << 25), le = f[Qe - 2], De = le.high, Je = le.low, Dt = (De >>> 19 | Je << 13) ^ (De << 3 | Je >>> 29) ^ De >>> 6, Et = (Je >>> 19 | De << 13) ^ (Je << 3 | De >>> 29) ^ (Je >>> 6 | De << 26), yn = f[Qe - 7], Ve = yn.high, tt = yn.low, nr = f[Qe - 16], bs = nr.high, Rt = nr.low;
                Ke = L + tt, at = K + Ve + (Ke >>> 0 < L >>> 0 ? 1 : 0), Ke = Ke + Et, at = at + Dt + (Ke >>> 0 < Et >>> 0 ? 1 : 0), Ke = Ke + Rt, at = at + bs + (Ke >>> 0 < Rt >>> 0 ? 1 : 0), qt.high = at, qt.low = Ke;
              }
              var ys = Xe & We ^ ~Xe & Bt, Tr = He & jt ^ ~He & xt, kr = xe & Me ^ xe & Oe ^ Me & Oe, xs = Ee & pe ^ Ee & Ge ^ pe & Ge, _s = (xe >>> 28 | Ee << 4) ^ (xe << 30 | Ee >>> 2) ^ (xe << 25 | Ee >>> 7), Ir = (Ee >>> 28 | xe << 4) ^ (Ee << 30 | xe >>> 2) ^ (Ee << 25 | xe >>> 7), Es = (Xe >>> 14 | He << 18) ^ (Xe >>> 18 | He << 14) ^ (Xe << 23 | He >>> 9), ws = (He >>> 14 | Xe << 18) ^ (He >>> 18 | Xe << 14) ^ (He << 23 | Xe >>> 9), Mr = d[Qe], Ss = Mr.high, Or = Mr.low, lt = _t + ws, Pt = $t + Es + (lt >>> 0 < _t >>> 0 ? 1 : 0), lt = lt + Tr, Pt = Pt + ys + (lt >>> 0 < Tr >>> 0 ? 1 : 0), lt = lt + Or, Pt = Pt + Ss + (lt >>> 0 < Or >>> 0 ? 1 : 0), lt = lt + Ke, Pt = Pt + at + (lt >>> 0 < Ke >>> 0 ? 1 : 0), rr = Ir + xs, As = _s + kr + (rr >>> 0 < Ir >>> 0 ? 1 : 0);
              $t = Bt, _t = xt, Bt = We, xt = jt, We = Xe, jt = He, He = ut + lt | 0, Xe = At + Pt + (He >>> 0 < ut >>> 0 ? 1 : 0) | 0, At = Oe, ut = Ge, Oe = Me, Ge = pe, Me = xe, pe = Ee, Ee = lt + rr | 0, xe = Pt + As + (Ee >>> 0 < lt >>> 0 ? 1 : 0) | 0;
            }
            C = _.low = C + Ee, _.high = B + xe + (C >>> 0 < Ee >>> 0 ? 1 : 0), P = y.low = P + pe, y.high = k + Me + (P >>> 0 < pe >>> 0 ? 1 : 0), W = m.low = W + Ge, m.high = N + Oe + (W >>> 0 < Ge >>> 0 ? 1 : 0), q = b.low = q + ut, b.high = z + At + (q >>> 0 < ut >>> 0 ? 1 : 0), ie = E.low = ie + He, E.high = Q + Xe + (ie >>> 0 < He >>> 0 ? 1 : 0), se = A.low = se + jt, A.high = te + We + (se >>> 0 < jt >>> 0 ? 1 : 0), V = w.low = V + xt, w.high = F + Bt + (V >>> 0 < xt >>> 0 ? 1 : 0), Y = D.low = Y + _t, D.high = j + $t + (Y >>> 0 < _t >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var g = this._data, p = g.words, v = this._nDataBytes * 8, _ = g.sigBytes * 8;
            p[_ >>> 5] |= 128 << 24 - _ % 32, p[(_ + 128 >>> 10 << 5) + 30] = Math.floor(v / 4294967296), p[(_ + 128 >>> 10 << 5) + 31] = v, g.sigBytes = p.length * 4, this._process();
            var y = this._hash.toX32();
            return y;
          },
          clone: function() {
            var g = s.clone.call(this);
            return g._hash = this._hash.clone(), g;
          },
          blockSize: 1024 / 32
        });
        r.SHA512 = s._createHelper(h), r.HmacSHA512 = s._createHmacHelper(h);
      }(), n.SHA512;
    });
  }(b0)), pi;
}
var gi = {}, y0 = {
  get exports() {
    return gi;
  },
  set exports(t) {
    gi = t;
  }
}, Ba;
function x0() {
  return Ba || (Ba = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), is(), Ic());
    })(be, function(n) {
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
  }(y0)), gi;
}
var vi = {}, _0 = {
  get exports() {
    return vi;
  },
  set exports(t) {
    vi = t;
  }
}, Pa;
function E0() {
  return Pa || (Pa = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), is());
    })(be, function(n) {
      return function(r) {
        var i = n, s = i.lib, o = s.WordArray, a = s.Hasher, c = i.x64, l = c.Word, u = i.algo, d = [], f = [], h = [];
        (function() {
          for (var v = 1, _ = 0, y = 0; y < 24; y++) {
            d[v + 5 * _] = (y + 1) * (y + 2) / 2 % 64;
            var m = _ % 5, b = (2 * v + 3 * _) % 5;
            v = m, _ = b;
          }
          for (var v = 0; v < 5; v++)
            for (var _ = 0; _ < 5; _++)
              f[v + 5 * _] = _ + (2 * v + 3 * _) % 5 * 5;
          for (var E = 1, A = 0; A < 24; A++) {
            for (var w = 0, D = 0, B = 0; B < 7; B++) {
              if (E & 1) {
                var C = (1 << B) - 1;
                C < 32 ? D ^= 1 << C : w ^= 1 << C - 32;
              }
              E & 128 ? E = E << 1 ^ 113 : E <<= 1;
            }
            h[A] = l.create(w, D);
          }
        })();
        var g = [];
        (function() {
          for (var v = 0; v < 25; v++)
            g[v] = l.create();
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
            for (var v = this._state = [], _ = 0; _ < 25; _++)
              v[_] = new l.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(v, _) {
            for (var y = this._state, m = this.blockSize / 2, b = 0; b < m; b++) {
              var E = v[_ + 2 * b], A = v[_ + 2 * b + 1];
              E = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, A = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360;
              var w = y[b];
              w.high ^= A, w.low ^= E;
            }
            for (var D = 0; D < 24; D++) {
              for (var B = 0; B < 5; B++) {
                for (var C = 0, k = 0, P = 0; P < 5; P++) {
                  var w = y[B + 5 * P];
                  C ^= w.high, k ^= w.low;
                }
                var N = g[B];
                N.high = C, N.low = k;
              }
              for (var B = 0; B < 5; B++)
                for (var W = g[(B + 4) % 5], z = g[(B + 1) % 5], q = z.high, Q = z.low, C = W.high ^ (q << 1 | Q >>> 31), k = W.low ^ (Q << 1 | q >>> 31), P = 0; P < 5; P++) {
                  var w = y[B + 5 * P];
                  w.high ^= C, w.low ^= k;
                }
              for (var ie = 1; ie < 25; ie++) {
                var C, k, w = y[ie], te = w.high, se = w.low, F = d[ie];
                F < 32 ? (C = te << F | se >>> 32 - F, k = se << F | te >>> 32 - F) : (C = se << F - 32 | te >>> 64 - F, k = te << F - 32 | se >>> 64 - F);
                var V = g[f[ie]];
                V.high = C, V.low = k;
              }
              var j = g[0], Y = y[0];
              j.high = Y.high, j.low = Y.low;
              for (var B = 0; B < 5; B++)
                for (var P = 0; P < 5; P++) {
                  var ie = B + 5 * P, w = y[ie], xe = g[ie], Ee = g[(B + 1) % 5 + 5 * P], Me = g[(B + 2) % 5 + 5 * P];
                  w.high = xe.high ^ ~Ee.high & Me.high, w.low = xe.low ^ ~Ee.low & Me.low;
                }
              var w = y[0], pe = h[D];
              w.high ^= pe.high, w.low ^= pe.low;
            }
          },
          _doFinalize: function() {
            var v = this._data, _ = v.words;
            this._nDataBytes * 8;
            var y = v.sigBytes * 8, m = this.blockSize * 32;
            _[y >>> 5] |= 1 << 24 - y % 32, _[(r.ceil((y + 1) / m) * m >>> 5) - 1] |= 128, v.sigBytes = _.length * 4, this._process();
            for (var b = this._state, E = this.cfg.outputLength / 8, A = E / 8, w = [], D = 0; D < A; D++) {
              var B = b[D], C = B.high, k = B.low;
              C = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, k = (k << 8 | k >>> 24) & 16711935 | (k << 24 | k >>> 8) & 4278255360, w.push(k), w.push(C);
            }
            return new o.init(w, E);
          },
          clone: function() {
            for (var v = a.clone.call(this), _ = v._state = this._state.slice(0), y = 0; y < 25; y++)
              _[y] = _[y].clone();
            return v;
          }
        });
        i.SHA3 = a._createHelper(p), i.HmacSHA3 = a._createHmacHelper(p);
      }(Math), n.SHA3;
    });
  }(_0)), vi;
}
var mi = {}, w0 = {
  get exports() {
    return mi;
  },
  set exports(t) {
    mi = t;
  }
}, La;
function S0() {
  return La || (La = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(Se());
    })(be, function(n) {
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
        ]), h = o.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), g = o.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), p = c.RIPEMD160 = a.extend({
          _doReset: function() {
            this._hash = o.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(A, w) {
            for (var D = 0; D < 16; D++) {
              var B = w + D, C = A[B];
              A[B] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360;
            }
            var k = this._hash.words, P = h.words, N = g.words, W = l.words, z = u.words, q = d.words, Q = f.words, ie, te, se, F, V, j, Y, xe, Ee, Me;
            j = ie = k[0], Y = te = k[1], xe = se = k[2], Ee = F = k[3], Me = V = k[4];
            for (var pe, D = 0; D < 80; D += 1)
              pe = ie + A[w + W[D]] | 0, D < 16 ? pe += v(te, se, F) + P[0] : D < 32 ? pe += _(te, se, F) + P[1] : D < 48 ? pe += y(te, se, F) + P[2] : D < 64 ? pe += m(te, se, F) + P[3] : pe += b(te, se, F) + P[4], pe = pe | 0, pe = E(pe, q[D]), pe = pe + V | 0, ie = V, V = F, F = E(se, 10), se = te, te = pe, pe = j + A[w + z[D]] | 0, D < 16 ? pe += b(Y, xe, Ee) + N[0] : D < 32 ? pe += m(Y, xe, Ee) + N[1] : D < 48 ? pe += y(Y, xe, Ee) + N[2] : D < 64 ? pe += _(Y, xe, Ee) + N[3] : pe += v(Y, xe, Ee) + N[4], pe = pe | 0, pe = E(pe, Q[D]), pe = pe + Me | 0, j = Me, Me = Ee, Ee = E(xe, 10), xe = Y, Y = pe;
            pe = k[1] + se + Ee | 0, k[1] = k[2] + F + Me | 0, k[2] = k[3] + V + j | 0, k[3] = k[4] + ie + Y | 0, k[4] = k[0] + te + xe | 0, k[0] = pe;
          },
          _doFinalize: function() {
            var A = this._data, w = A.words, D = this._nDataBytes * 8, B = A.sigBytes * 8;
            w[B >>> 5] |= 128 << 24 - B % 32, w[(B + 64 >>> 9 << 4) + 14] = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360, A.sigBytes = (w.length + 1) * 4, this._process();
            for (var C = this._hash, k = C.words, P = 0; P < 5; P++) {
              var N = k[P];
              k[P] = (N << 8 | N >>> 24) & 16711935 | (N << 24 | N >>> 8) & 4278255360;
            }
            return C;
          },
          clone: function() {
            var A = a.clone.call(this);
            return A._hash = this._hash.clone(), A;
          }
        });
        function v(A, w, D) {
          return A ^ w ^ D;
        }
        function _(A, w, D) {
          return A & w | ~A & D;
        }
        function y(A, w, D) {
          return (A | ~w) ^ D;
        }
        function m(A, w, D) {
          return A & D | w & ~D;
        }
        function b(A, w, D) {
          return A ^ (w | ~D);
        }
        function E(A, w) {
          return A << w | A >>> 32 - w;
        }
        i.RIPEMD160 = a._createHelper(p), i.HmacRIPEMD160 = a._createHmacHelper(p);
      }(), n.RIPEMD160;
    });
  }(w0)), mi;
}
var bi = {}, A0 = {
  get exports() {
    return bi;
  },
  set exports(t) {
    bi = t;
  }
}, Ha;
function Mo() {
  return Ha || (Ha = 1, function(t, e) {
    (function(n, r) {
      t.exports = r(Se());
    })(be, function(n) {
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
            for (var h = this._oKey = u.clone(), g = this._iKey = u.clone(), p = h.words, v = g.words, _ = 0; _ < d; _++)
              p[_] ^= 1549556828, v[_] ^= 909522486;
            h.sigBytes = g.sigBytes = f, this.reset();
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
  }(A0)), bi;
}
var yi = {}, C0 = {
  get exports() {
    return yi;
  },
  set exports(t) {
    yi = t;
  }
}, za;
function D0() {
  return za || (za = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), Io(), Mo());
    })(be, function(n) {
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
            for (var h = this.cfg, g = l.create(h.hasher, d), p = o.create(), v = o.create([1]), _ = p.words, y = v.words, m = h.keySize, b = h.iterations; _.length < m; ) {
              var E = g.update(f).finalize(v);
              g.reset();
              for (var A = E.words, w = A.length, D = E, B = 1; B < b; B++) {
                D = g.finalize(D), g.reset();
                for (var C = D.words, k = 0; k < w; k++)
                  A[k] ^= C[k];
              }
              p.concat(E), y[0]++;
            }
            return p.sigBytes = m * 4, p;
          }
        });
        r.PBKDF2 = function(d, f, h) {
          return u.create(h).compute(d, f);
        };
      }(), n.PBKDF2;
    });
  }(C0)), yi;
}
var xi = {}, R0 = {
  get exports() {
    return xi;
  },
  set exports(t) {
    xi = t;
  }
}, Fa;
function In() {
  return Fa || (Fa = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), Io(), Mo());
    })(be, function(n) {
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
            for (var f, h = this.cfg, g = h.hasher.create(), p = o.create(), v = p.words, _ = h.keySize, y = h.iterations; v.length < _; ) {
              f && g.update(f), f = g.update(u).finalize(d), g.reset();
              for (var m = 1; m < y; m++)
                f = g.finalize(f), g.reset();
              p.concat(f);
            }
            return p.sigBytes = _ * 4, p;
          }
        });
        r.EvpKDF = function(u, d, f) {
          return l.create(f).compute(u, d);
        };
      }(), n.EvpKDF;
    });
  }(R0)), xi;
}
var _i = {}, T0 = {
  get exports() {
    return _i;
  },
  set exports(t) {
    _i = t;
  }
}, Ua;
function et() {
  return Ua || (Ua = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), In());
    })(be, function(n) {
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
          createEncryptor: function(C, k) {
            return this.create(this._ENC_XFORM_MODE, C, k);
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
          createDecryptor: function(C, k) {
            return this.create(this._DEC_XFORM_MODE, C, k);
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
          init: function(C, k, P) {
            this.cfg = this.cfg.extend(P), this._xformMode = C, this._key = k, this.reset();
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
            function C(k) {
              return typeof k == "string" ? B : A;
            }
            return function(k) {
              return {
                encrypt: function(P, N, W) {
                  return C(N).encrypt(k, P, N, W);
                },
                decrypt: function(P, N, W) {
                  return C(N).decrypt(k, P, N, W);
                }
              };
            };
          }()
        });
        s.StreamCipher = h.extend({
          _doFinalize: function() {
            var C = this._process(!0);
            return C;
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
          createEncryptor: function(C, k) {
            return this.Encryptor.create(C, k);
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
          createDecryptor: function(C, k) {
            return this.Decryptor.create(C, k);
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
          init: function(C, k) {
            this._cipher = C, this._iv = k;
          }
        }), v = g.CBC = function() {
          var C = p.extend();
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
            processBlock: function(P, N) {
              var W = this._cipher, z = W.blockSize;
              k.call(this, P, N, z), W.encryptBlock(P, N), this._prevBlock = P.slice(N, N + z);
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
            processBlock: function(P, N) {
              var W = this._cipher, z = W.blockSize, q = P.slice(N, N + z);
              W.decryptBlock(P, N), k.call(this, P, N, z), this._prevBlock = q;
            }
          });
          function k(P, N, W) {
            var z, q = this._iv;
            q ? (z = q, this._iv = r) : z = this._prevBlock;
            for (var Q = 0; Q < W; Q++)
              P[N + Q] ^= z[Q];
          }
          return C;
        }(), _ = i.pad = {}, y = _.Pkcs7 = {
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
          pad: function(C, k) {
            for (var P = k * 4, N = P - C.sigBytes % P, W = N << 24 | N << 16 | N << 8 | N, z = [], q = 0; q < N; q += 4)
              z.push(W);
            var Q = a.create(z, N);
            C.concat(Q);
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
            var k = C.words[C.sigBytes - 1 >>> 2] & 255;
            C.sigBytes -= k;
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
            mode: v,
            padding: y
          }),
          reset: function() {
            var C;
            h.reset.call(this);
            var k = this.cfg, P = k.iv, N = k.mode;
            this._xformMode == this._ENC_XFORM_MODE ? C = N.createEncryptor : (C = N.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == C ? this._mode.init(this, P && P.words) : (this._mode = C.call(N, this, P && P.words), this._mode.__creator = C);
          },
          _doProcessBlock: function(C, k) {
            this._mode.processBlock(C, k);
          },
          _doFinalize: function() {
            var C, k = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (k.pad(this._data, this.blockSize), C = this._process(!0)) : (C = this._process(!0), k.unpad(C)), C;
          },
          blockSize: 128 / 32
        });
        var m = s.CipherParams = o.extend({
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
        }), b = i.format = {}, E = b.OpenSSL = {
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
            var k, P = C.ciphertext, N = C.salt;
            return N ? k = a.create([1398893684, 1701076831]).concat(N).concat(P) : k = P, k.toString(u);
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
            var k, P = u.parse(C), N = P.words;
            return N[0] == 1398893684 && N[1] == 1701076831 && (k = a.create(N.slice(2, 4)), N.splice(0, 4), P.sigBytes -= 16), m.create({ ciphertext: P, salt: k });
          }
        }, A = s.SerializableCipher = o.extend({
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
          encrypt: function(C, k, P, N) {
            N = this.cfg.extend(N);
            var W = C.createEncryptor(P, N), z = W.finalize(k), q = W.cfg;
            return m.create({
              ciphertext: z,
              key: P,
              iv: q.iv,
              algorithm: C,
              mode: q.mode,
              padding: q.padding,
              blockSize: C.blockSize,
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
          decrypt: function(C, k, P, N) {
            N = this.cfg.extend(N), k = this._parse(k, N.format);
            var W = C.createDecryptor(P, N).finalize(k.ciphertext);
            return W;
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
          _parse: function(C, k) {
            return typeof C == "string" ? k.parse(C, this) : C;
          }
        }), w = i.kdf = {}, D = w.OpenSSL = {
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
          execute: function(C, k, P, N) {
            N || (N = a.random(64 / 8));
            var W = f.create({ keySize: k + P }).compute(C, N), z = a.create(W.words.slice(k), P * 4);
            return W.sigBytes = k * 4, m.create({ key: W, iv: z, salt: N });
          }
        }, B = s.PasswordBasedCipher = A.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: A.cfg.extend({
            kdf: D
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
          encrypt: function(C, k, P, N) {
            N = this.cfg.extend(N);
            var W = N.kdf.execute(P, C.keySize, C.ivSize);
            N.iv = W.iv;
            var z = A.encrypt.call(this, C, k, W.key, N);
            return z.mixIn(W), z;
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
          decrypt: function(C, k, P, N) {
            N = this.cfg.extend(N), k = this._parse(k, N.format);
            var W = N.kdf.execute(P, C.keySize, C.ivSize, k.salt);
            N.iv = W.iv;
            var z = A.decrypt.call(this, C, k, W.key, N);
            return z;
          }
        });
      }();
    });
  }(T0)), _i;
}
var Ei = {}, k0 = {
  get exports() {
    return Ei;
  },
  set exports(t) {
    Ei = t;
  }
}, Wa;
function I0() {
  return Wa || (Wa = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), et());
    })(be, function(n) {
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
  }(k0)), Ei;
}
var wi = {}, M0 = {
  get exports() {
    return wi;
  },
  set exports(t) {
    wi = t;
  }
}, Va;
function O0() {
  return Va || (Va = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), et());
    })(be, function(n) {
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
  }(M0)), wi;
}
var Si = {}, N0 = {
  get exports() {
    return Si;
  },
  set exports(t) {
    Si = t;
  }
}, ja;
function B0() {
  return ja || (ja = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), et());
    })(be, function(n) {
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
            for (var g = 0; g < u; g++)
              a[c + g] ^= h[g];
          }
        });
        return r.Decryptor = o, r;
      }(), n.mode.CTRGladman;
    });
  }(N0)), Si;
}
var Ai = {}, P0 = {
  get exports() {
    return Ai;
  },
  set exports(t) {
    Ai = t;
  }
}, $a;
function L0() {
  return $a || ($a = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), et());
    })(be, function(n) {
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
  }(P0)), Ai;
}
var Ci = {}, H0 = {
  get exports() {
    return Ci;
  },
  set exports(t) {
    Ci = t;
  }
}, qa;
function Mc() {
  return qa || (qa = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), et());
    })(be, function(n) {
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
  }(H0)), Ci;
}
var Di = {}, z0 = {
  get exports() {
    return Di;
  },
  set exports(t) {
    Di = t;
  }
}, Ya;
function F0() {
  return Ya || (Ya = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), et());
    })(be, function(n) {
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
  }(z0)), Di;
}
var Ri = {}, U0 = {
  get exports() {
    return Ri;
  },
  set exports(t) {
    Ri = t;
  }
}, Ga;
function W0() {
  return Ga || (Ga = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), et());
    })(be, function(n) {
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
  }(U0)), Ri;
}
var Ti = {}, V0 = {
  get exports() {
    return Ti;
  },
  set exports(t) {
    Ti = t;
  }
}, Qa;
function j0() {
  return Qa || (Qa = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), et());
    })(be, function(n) {
      return n.pad.Iso97971 = {
        pad: function(r, i) {
          r.concat(n.lib.WordArray.create([2147483648], 1)), n.pad.ZeroPadding.pad(r, i);
        },
        unpad: function(r) {
          n.pad.ZeroPadding.unpad(r), r.sigBytes--;
        }
      }, n.pad.Iso97971;
    });
  }(V0)), Ti;
}
var ki = {}, $0 = {
  get exports() {
    return ki;
  },
  set exports(t) {
    ki = t;
  }
}, Za;
function q0() {
  return Za || (Za = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), et());
    })(be, function(n) {
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
  }($0)), ki;
}
var Ii = {}, Y0 = {
  get exports() {
    return Ii;
  },
  set exports(t) {
    Ii = t;
  }
}, Xa;
function G0() {
  return Xa || (Xa = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), et());
    })(be, function(n) {
      return n.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, n.pad.NoPadding;
    });
  }(Y0)), Ii;
}
var Mi = {}, Q0 = {
  get exports() {
    return Mi;
  },
  set exports(t) {
    Mi = t;
  }
}, Ka;
function Z0() {
  return Ka || (Ka = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), et());
    })(be, function(n) {
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
  }(Q0)), Mi;
}
var Oi = {}, X0 = {
  get exports() {
    return Oi;
  },
  set exports(t) {
    Oi = t;
  }
}, Ja;
function Oc() {
  return Ja || (Ja = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), Tn(), kn(), In(), et());
    })(be, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.BlockCipher, o = r.algo, a = [], c = [], l = [], u = [], d = [], f = [], h = [], g = [], p = [], v = [];
        (function() {
          for (var m = [], b = 0; b < 256; b++)
            b < 128 ? m[b] = b << 1 : m[b] = b << 1 ^ 283;
          for (var E = 0, A = 0, b = 0; b < 256; b++) {
            var w = A ^ A << 1 ^ A << 2 ^ A << 3 ^ A << 4;
            w = w >>> 8 ^ w & 255 ^ 99, a[E] = w, c[w] = E;
            var D = m[E], B = m[D], C = m[B], k = m[w] * 257 ^ w * 16843008;
            l[E] = k << 24 | k >>> 8, u[E] = k << 16 | k >>> 16, d[E] = k << 8 | k >>> 24, f[E] = k;
            var k = C * 16843009 ^ B * 65537 ^ D * 257 ^ E * 16843008;
            h[w] = k << 24 | k >>> 8, g[w] = k << 16 | k >>> 16, p[w] = k << 8 | k >>> 24, v[w] = k, E ? (E = D ^ m[m[m[C ^ D]]], A ^= m[m[A]]) : E = A = 1;
          }
        })();
        var _ = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], y = o.AES = s.extend({
          _doReset: function() {
            var m;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var b = this._keyPriorReset = this._key, E = b.words, A = b.sigBytes / 4, w = this._nRounds = A + 6, D = (w + 1) * 4, B = this._keySchedule = [], C = 0; C < D; C++)
                C < A ? B[C] = E[C] : (m = B[C - 1], C % A ? A > 6 && C % A == 4 && (m = a[m >>> 24] << 24 | a[m >>> 16 & 255] << 16 | a[m >>> 8 & 255] << 8 | a[m & 255]) : (m = m << 8 | m >>> 24, m = a[m >>> 24] << 24 | a[m >>> 16 & 255] << 16 | a[m >>> 8 & 255] << 8 | a[m & 255], m ^= _[C / A | 0] << 24), B[C] = B[C - A] ^ m);
              for (var k = this._invKeySchedule = [], P = 0; P < D; P++) {
                var C = D - P;
                if (P % 4)
                  var m = B[C];
                else
                  var m = B[C - 4];
                P < 4 || C <= 4 ? k[P] = m : k[P] = h[a[m >>> 24]] ^ g[a[m >>> 16 & 255]] ^ p[a[m >>> 8 & 255]] ^ v[a[m & 255]];
              }
            }
          },
          encryptBlock: function(m, b) {
            this._doCryptBlock(m, b, this._keySchedule, l, u, d, f, a);
          },
          decryptBlock: function(m, b) {
            var E = m[b + 1];
            m[b + 1] = m[b + 3], m[b + 3] = E, this._doCryptBlock(m, b, this._invKeySchedule, h, g, p, v, c);
            var E = m[b + 1];
            m[b + 1] = m[b + 3], m[b + 3] = E;
          },
          _doCryptBlock: function(m, b, E, A, w, D, B, C) {
            for (var k = this._nRounds, P = m[b] ^ E[0], N = m[b + 1] ^ E[1], W = m[b + 2] ^ E[2], z = m[b + 3] ^ E[3], q = 4, Q = 1; Q < k; Q++) {
              var ie = A[P >>> 24] ^ w[N >>> 16 & 255] ^ D[W >>> 8 & 255] ^ B[z & 255] ^ E[q++], te = A[N >>> 24] ^ w[W >>> 16 & 255] ^ D[z >>> 8 & 255] ^ B[P & 255] ^ E[q++], se = A[W >>> 24] ^ w[z >>> 16 & 255] ^ D[P >>> 8 & 255] ^ B[N & 255] ^ E[q++], F = A[z >>> 24] ^ w[P >>> 16 & 255] ^ D[N >>> 8 & 255] ^ B[W & 255] ^ E[q++];
              P = ie, N = te, W = se, z = F;
            }
            var ie = (C[P >>> 24] << 24 | C[N >>> 16 & 255] << 16 | C[W >>> 8 & 255] << 8 | C[z & 255]) ^ E[q++], te = (C[N >>> 24] << 24 | C[W >>> 16 & 255] << 16 | C[z >>> 8 & 255] << 8 | C[P & 255]) ^ E[q++], se = (C[W >>> 24] << 24 | C[z >>> 16 & 255] << 16 | C[P >>> 8 & 255] << 8 | C[N & 255]) ^ E[q++], F = (C[z >>> 24] << 24 | C[P >>> 16 & 255] << 16 | C[N >>> 8 & 255] << 8 | C[W & 255]) ^ E[q++];
            m[b] = ie, m[b + 1] = te, m[b + 2] = se, m[b + 3] = F;
          },
          keySize: 256 / 32
        });
        r.AES = s._createHelper(y);
      }(), n.AES;
    });
  }(X0)), Oi;
}
var Ni = {}, K0 = {
  get exports() {
    return Ni;
  },
  set exports(t) {
    Ni = t;
  }
}, el;
function J0() {
  return el || (el = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), Tn(), kn(), In(), et());
    })(be, function(n) {
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
            for (var _ = this._key, y = _.words, m = [], b = 0; b < 56; b++) {
              var E = c[b] - 1;
              m[b] = y[E >>> 5] >>> 31 - E % 32 & 1;
            }
            for (var A = this._subKeys = [], w = 0; w < 16; w++) {
              for (var D = A[w] = [], B = u[w], b = 0; b < 24; b++)
                D[b / 6 | 0] |= m[(l[b] - 1 + B) % 28] << 31 - b % 6, D[4 + (b / 6 | 0)] |= m[28 + (l[b + 24] - 1 + B) % 28] << 31 - b % 6;
              D[0] = D[0] << 1 | D[0] >>> 31;
              for (var b = 1; b < 7; b++)
                D[b] = D[b] >>> (b - 1) * 4 + 3;
              D[7] = D[7] << 5 | D[7] >>> 27;
            }
            for (var C = this._invSubKeys = [], b = 0; b < 16; b++)
              C[b] = A[15 - b];
          },
          encryptBlock: function(_, y) {
            this._doCryptBlock(_, y, this._subKeys);
          },
          decryptBlock: function(_, y) {
            this._doCryptBlock(_, y, this._invSubKeys);
          },
          _doCryptBlock: function(_, y, m) {
            this._lBlock = _[y], this._rBlock = _[y + 1], g.call(this, 4, 252645135), g.call(this, 16, 65535), p.call(this, 2, 858993459), p.call(this, 8, 16711935), g.call(this, 1, 1431655765);
            for (var b = 0; b < 16; b++) {
              for (var E = m[b], A = this._lBlock, w = this._rBlock, D = 0, B = 0; B < 8; B++)
                D |= d[B][((w ^ E[B]) & f[B]) >>> 0];
              this._lBlock = w, this._rBlock = A ^ D;
            }
            var C = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = C, g.call(this, 1, 1431655765), p.call(this, 8, 16711935), p.call(this, 2, 858993459), g.call(this, 16, 65535), g.call(this, 4, 252645135), _[y] = this._lBlock, _[y + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function g(_, y) {
          var m = (this._lBlock >>> _ ^ this._rBlock) & y;
          this._rBlock ^= m, this._lBlock ^= m << _;
        }
        function p(_, y) {
          var m = (this._rBlock >>> _ ^ this._lBlock) & y;
          this._lBlock ^= m, this._rBlock ^= m << _;
        }
        r.DES = o._createHelper(h);
        var v = a.TripleDES = o.extend({
          _doReset: function() {
            var _ = this._key, y = _.words;
            if (y.length !== 2 && y.length !== 4 && y.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var m = y.slice(0, 2), b = y.length < 4 ? y.slice(0, 2) : y.slice(2, 4), E = y.length < 6 ? y.slice(0, 2) : y.slice(4, 6);
            this._des1 = h.createEncryptor(s.create(m)), this._des2 = h.createEncryptor(s.create(b)), this._des3 = h.createEncryptor(s.create(E));
          },
          encryptBlock: function(_, y) {
            this._des1.encryptBlock(_, y), this._des2.decryptBlock(_, y), this._des3.encryptBlock(_, y);
          },
          decryptBlock: function(_, y) {
            this._des3.decryptBlock(_, y), this._des2.encryptBlock(_, y), this._des1.decryptBlock(_, y);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        r.TripleDES = o._createHelper(v);
      }(), n.TripleDES;
    });
  }(K0)), Ni;
}
var Bi = {}, eh = {
  get exports() {
    return Bi;
  },
  set exports(t) {
    Bi = t;
  }
}, tl;
function th() {
  return tl || (tl = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), Tn(), kn(), In(), et());
    })(be, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.StreamCipher, o = r.algo, a = o.RC4 = s.extend({
          _doReset: function() {
            for (var u = this._key, d = u.words, f = u.sigBytes, h = this._S = [], g = 0; g < 256; g++)
              h[g] = g;
            for (var g = 0, p = 0; g < 256; g++) {
              var v = g % f, _ = d[v >>> 2] >>> 24 - v % 4 * 8 & 255;
              p = (p + h[g] + _) % 256;
              var y = h[g];
              h[g] = h[p], h[p] = y;
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
          for (var u = this._S, d = this._i, f = this._j, h = 0, g = 0; g < 4; g++) {
            d = (d + 1) % 256, f = (f + u[d]) % 256;
            var p = u[d];
            u[d] = u[f], u[f] = p, h |= u[(u[d] + u[f]) % 256] << 24 - g * 8;
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
  }(eh)), Bi;
}
var Pi = {}, nh = {
  get exports() {
    return Pi;
  },
  set exports(t) {
    Pi = t;
  }
}, nl;
function rh() {
  return nl || (nl = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), Tn(), kn(), In(), et());
    })(be, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.StreamCipher, o = r.algo, a = [], c = [], l = [], u = o.Rabbit = s.extend({
          _doReset: function() {
            for (var f = this._key.words, h = this.cfg.iv, g = 0; g < 4; g++)
              f[g] = (f[g] << 8 | f[g] >>> 24) & 16711935 | (f[g] << 24 | f[g] >>> 8) & 4278255360;
            var p = this._X = [
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
            for (var g = 0; g < 4; g++)
              d.call(this);
            for (var g = 0; g < 8; g++)
              v[g] ^= p[g + 4 & 7];
            if (h) {
              var _ = h.words, y = _[0], m = _[1], b = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, E = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360, A = b >>> 16 | E & 4294901760, w = E << 16 | b & 65535;
              v[0] ^= b, v[1] ^= A, v[2] ^= E, v[3] ^= w, v[4] ^= b, v[5] ^= A, v[6] ^= E, v[7] ^= w;
              for (var g = 0; g < 4; g++)
                d.call(this);
            }
          },
          _doProcessBlock: function(f, h) {
            var g = this._X;
            d.call(this), a[0] = g[0] ^ g[5] >>> 16 ^ g[3] << 16, a[1] = g[2] ^ g[7] >>> 16 ^ g[5] << 16, a[2] = g[4] ^ g[1] >>> 16 ^ g[7] << 16, a[3] = g[6] ^ g[3] >>> 16 ^ g[1] << 16;
            for (var p = 0; p < 4; p++)
              a[p] = (a[p] << 8 | a[p] >>> 24) & 16711935 | (a[p] << 24 | a[p] >>> 8) & 4278255360, f[h + p] ^= a[p];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function d() {
          for (var f = this._X, h = this._C, g = 0; g < 8; g++)
            c[g] = h[g];
          h[0] = h[0] + 1295307597 + this._b | 0, h[1] = h[1] + 3545052371 + (h[0] >>> 0 < c[0] >>> 0 ? 1 : 0) | 0, h[2] = h[2] + 886263092 + (h[1] >>> 0 < c[1] >>> 0 ? 1 : 0) | 0, h[3] = h[3] + 1295307597 + (h[2] >>> 0 < c[2] >>> 0 ? 1 : 0) | 0, h[4] = h[4] + 3545052371 + (h[3] >>> 0 < c[3] >>> 0 ? 1 : 0) | 0, h[5] = h[5] + 886263092 + (h[4] >>> 0 < c[4] >>> 0 ? 1 : 0) | 0, h[6] = h[6] + 1295307597 + (h[5] >>> 0 < c[5] >>> 0 ? 1 : 0) | 0, h[7] = h[7] + 3545052371 + (h[6] >>> 0 < c[6] >>> 0 ? 1 : 0) | 0, this._b = h[7] >>> 0 < c[7] >>> 0 ? 1 : 0;
          for (var g = 0; g < 8; g++) {
            var p = f[g] + h[g], v = p & 65535, _ = p >>> 16, y = ((v * v >>> 17) + v * _ >>> 15) + _ * _, m = ((p & 4294901760) * p | 0) + ((p & 65535) * p | 0);
            l[g] = y ^ m;
          }
          f[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0, f[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0, f[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0, f[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0, f[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0, f[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0, f[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0, f[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0;
        }
        r.Rabbit = s._createHelper(u);
      }(), n.Rabbit;
    });
  }(nh)), Pi;
}
var Li = {}, ih = {
  get exports() {
    return Li;
  },
  set exports(t) {
    Li = t;
  }
}, rl;
function sh() {
  return rl || (rl = 1, function(t, e) {
    (function(n, r, i) {
      t.exports = r(Se(), Tn(), kn(), In(), et());
    })(be, function(n) {
      return function() {
        var r = n, i = r.lib, s = i.StreamCipher, o = r.algo, a = [], c = [], l = [], u = o.RabbitLegacy = s.extend({
          _doReset: function() {
            var f = this._key.words, h = this.cfg.iv, g = this._X = [
              f[0],
              f[3] << 16 | f[2] >>> 16,
              f[1],
              f[0] << 16 | f[3] >>> 16,
              f[2],
              f[1] << 16 | f[0] >>> 16,
              f[3],
              f[2] << 16 | f[1] >>> 16
            ], p = this._C = [
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
            for (var v = 0; v < 4; v++)
              d.call(this);
            for (var v = 0; v < 8; v++)
              p[v] ^= g[v + 4 & 7];
            if (h) {
              var _ = h.words, y = _[0], m = _[1], b = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, E = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360, A = b >>> 16 | E & 4294901760, w = E << 16 | b & 65535;
              p[0] ^= b, p[1] ^= A, p[2] ^= E, p[3] ^= w, p[4] ^= b, p[5] ^= A, p[6] ^= E, p[7] ^= w;
              for (var v = 0; v < 4; v++)
                d.call(this);
            }
          },
          _doProcessBlock: function(f, h) {
            var g = this._X;
            d.call(this), a[0] = g[0] ^ g[5] >>> 16 ^ g[3] << 16, a[1] = g[2] ^ g[7] >>> 16 ^ g[5] << 16, a[2] = g[4] ^ g[1] >>> 16 ^ g[7] << 16, a[3] = g[6] ^ g[3] >>> 16 ^ g[1] << 16;
            for (var p = 0; p < 4; p++)
              a[p] = (a[p] << 8 | a[p] >>> 24) & 16711935 | (a[p] << 24 | a[p] >>> 8) & 4278255360, f[h + p] ^= a[p];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function d() {
          for (var f = this._X, h = this._C, g = 0; g < 8; g++)
            c[g] = h[g];
          h[0] = h[0] + 1295307597 + this._b | 0, h[1] = h[1] + 3545052371 + (h[0] >>> 0 < c[0] >>> 0 ? 1 : 0) | 0, h[2] = h[2] + 886263092 + (h[1] >>> 0 < c[1] >>> 0 ? 1 : 0) | 0, h[3] = h[3] + 1295307597 + (h[2] >>> 0 < c[2] >>> 0 ? 1 : 0) | 0, h[4] = h[4] + 3545052371 + (h[3] >>> 0 < c[3] >>> 0 ? 1 : 0) | 0, h[5] = h[5] + 886263092 + (h[4] >>> 0 < c[4] >>> 0 ? 1 : 0) | 0, h[6] = h[6] + 1295307597 + (h[5] >>> 0 < c[5] >>> 0 ? 1 : 0) | 0, h[7] = h[7] + 3545052371 + (h[6] >>> 0 < c[6] >>> 0 ? 1 : 0) | 0, this._b = h[7] >>> 0 < c[7] >>> 0 ? 1 : 0;
          for (var g = 0; g < 8; g++) {
            var p = f[g] + h[g], v = p & 65535, _ = p >>> 16, y = ((v * v >>> 17) + v * _ >>> 15) + _ * _, m = ((p & 4294901760) * p | 0) + ((p & 65535) * p | 0);
            l[g] = y ^ m;
          }
          f[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0, f[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0, f[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0, f[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0, f[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0, f[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0, f[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0, f[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0;
        }
        r.RabbitLegacy = s._createHelper(u);
      }(), n.RabbitLegacy;
    });
  }(ih)), Li;
}
(function(t, e) {
  (function(n, r, i) {
    t.exports = r(Se(), is(), a0(), c0(), Tn(), d0(), kn(), Io(), kc(), m0(), Ic(), x0(), E0(), S0(), Mo(), D0(), In(), et(), I0(), O0(), B0(), L0(), Mc(), F0(), W0(), j0(), q0(), G0(), Z0(), Oc(), J0(), th(), rh(), sh());
  })(be, function(n) {
    return n;
  });
})(e0);
var eo = {}, oh = {
  get exports() {
    return eo;
  },
  set exports(t) {
    eo = t;
  }
};
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(be, function() {
    var n = 1e3, r = 6e4, i = 36e5, s = "millisecond", o = "second", a = "minute", c = "hour", l = "day", u = "week", d = "month", f = "quarter", h = "year", g = "date", p = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, _ = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
      var W = ["th", "st", "nd", "rd"], z = N % 100;
      return "[" + N + (W[(z - 20) % 10] || W[z] || W[0]) + "]";
    } }, m = function(N, W, z) {
      var q = String(N);
      return !q || q.length >= W ? N : "" + Array(W + 1 - q.length).join(z) + N;
    }, b = { s: m, z: function(N) {
      var W = -N.utcOffset(), z = Math.abs(W), q = Math.floor(z / 60), Q = z % 60;
      return (W <= 0 ? "+" : "-") + m(q, 2, "0") + ":" + m(Q, 2, "0");
    }, m: function N(W, z) {
      if (W.date() < z.date())
        return -N(z, W);
      var q = 12 * (z.year() - W.year()) + (z.month() - W.month()), Q = W.clone().add(q, d), ie = z - Q < 0, te = W.clone().add(q + (ie ? -1 : 1), d);
      return +(-(q + (z - Q) / (ie ? Q - te : te - Q)) || 0);
    }, a: function(N) {
      return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
    }, p: function(N) {
      return { M: d, y: h, w: u, d: l, D: g, h: c, m: a, s: o, ms: s, Q: f }[N] || String(N || "").toLowerCase().replace(/s$/, "");
    }, u: function(N) {
      return N === void 0;
    } }, E = "en", A = {};
    A[E] = y;
    var w = function(N) {
      return N instanceof k;
    }, D = function N(W, z, q) {
      var Q;
      if (!W)
        return E;
      if (typeof W == "string") {
        var ie = W.toLowerCase();
        A[ie] && (Q = ie), z && (A[ie] = z, Q = ie);
        var te = W.split("-");
        if (!Q && te.length > 1)
          return N(te[0]);
      } else {
        var se = W.name;
        A[se] = W, Q = se;
      }
      return !q && Q && (E = Q), Q || !q && E;
    }, B = function(N, W) {
      if (w(N))
        return N.clone();
      var z = typeof W == "object" ? W : {};
      return z.date = N, z.args = arguments, new k(z);
    }, C = b;
    C.l = D, C.i = w, C.w = function(N, W) {
      return B(N, { locale: W.$L, utc: W.$u, x: W.$x, $offset: W.$offset });
    };
    var k = function() {
      function N(z) {
        this.$L = D(z.locale, null, !0), this.parse(z);
      }
      var W = N.prototype;
      return W.parse = function(z) {
        this.$d = function(q) {
          var Q = q.date, ie = q.utc;
          if (Q === null)
            return /* @__PURE__ */ new Date(NaN);
          if (C.u(Q))
            return /* @__PURE__ */ new Date();
          if (Q instanceof Date)
            return new Date(Q);
          if (typeof Q == "string" && !/Z$/i.test(Q)) {
            var te = Q.match(v);
            if (te) {
              var se = te[2] - 1 || 0, F = (te[7] || "0").substring(0, 3);
              return ie ? new Date(Date.UTC(te[1], se, te[3] || 1, te[4] || 0, te[5] || 0, te[6] || 0, F)) : new Date(te[1], se, te[3] || 1, te[4] || 0, te[5] || 0, te[6] || 0, F);
            }
          }
          return new Date(Q);
        }(z), this.$x = z.x || {}, this.init();
      }, W.init = function() {
        var z = this.$d;
        this.$y = z.getFullYear(), this.$M = z.getMonth(), this.$D = z.getDate(), this.$W = z.getDay(), this.$H = z.getHours(), this.$m = z.getMinutes(), this.$s = z.getSeconds(), this.$ms = z.getMilliseconds();
      }, W.$utils = function() {
        return C;
      }, W.isValid = function() {
        return this.$d.toString() !== p;
      }, W.isSame = function(z, q) {
        var Q = B(z);
        return this.startOf(q) <= Q && Q <= this.endOf(q);
      }, W.isAfter = function(z, q) {
        return B(z) < this.startOf(q);
      }, W.isBefore = function(z, q) {
        return this.endOf(q) < B(z);
      }, W.$g = function(z, q, Q) {
        return C.u(z) ? this[q] : this.set(Q, z);
      }, W.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, W.valueOf = function() {
        return this.$d.getTime();
      }, W.startOf = function(z, q) {
        var Q = this, ie = !!C.u(q) || q, te = C.p(z), se = function(pe, Oe) {
          var Ge = C.w(Q.$u ? Date.UTC(Q.$y, Oe, pe) : new Date(Q.$y, Oe, pe), Q);
          return ie ? Ge : Ge.endOf(l);
        }, F = function(pe, Oe) {
          return C.w(Q.toDate()[pe].apply(Q.toDate("s"), (ie ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Oe)), Q);
        }, V = this.$W, j = this.$M, Y = this.$D, xe = "set" + (this.$u ? "UTC" : "");
        switch (te) {
          case h:
            return ie ? se(1, 0) : se(31, 11);
          case d:
            return ie ? se(1, j) : se(0, j + 1);
          case u:
            var Ee = this.$locale().weekStart || 0, Me = (V < Ee ? V + 7 : V) - Ee;
            return se(ie ? Y - Me : Y + (6 - Me), j);
          case l:
          case g:
            return F(xe + "Hours", 0);
          case c:
            return F(xe + "Minutes", 1);
          case a:
            return F(xe + "Seconds", 2);
          case o:
            return F(xe + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, W.endOf = function(z) {
        return this.startOf(z, !1);
      }, W.$set = function(z, q) {
        var Q, ie = C.p(z), te = "set" + (this.$u ? "UTC" : ""), se = (Q = {}, Q[l] = te + "Date", Q[g] = te + "Date", Q[d] = te + "Month", Q[h] = te + "FullYear", Q[c] = te + "Hours", Q[a] = te + "Minutes", Q[o] = te + "Seconds", Q[s] = te + "Milliseconds", Q)[ie], F = ie === l ? this.$D + (q - this.$W) : q;
        if (ie === d || ie === h) {
          var V = this.clone().set(g, 1);
          V.$d[se](F), V.init(), this.$d = V.set(g, Math.min(this.$D, V.daysInMonth())).$d;
        } else
          se && this.$d[se](F);
        return this.init(), this;
      }, W.set = function(z, q) {
        return this.clone().$set(z, q);
      }, W.get = function(z) {
        return this[C.p(z)]();
      }, W.add = function(z, q) {
        var Q, ie = this;
        z = Number(z);
        var te = C.p(q), se = function(j) {
          var Y = B(ie);
          return C.w(Y.date(Y.date() + Math.round(j * z)), ie);
        };
        if (te === d)
          return this.set(d, this.$M + z);
        if (te === h)
          return this.set(h, this.$y + z);
        if (te === l)
          return se(1);
        if (te === u)
          return se(7);
        var F = (Q = {}, Q[a] = r, Q[c] = i, Q[o] = n, Q)[te] || 1, V = this.$d.getTime() + z * F;
        return C.w(V, this);
      }, W.subtract = function(z, q) {
        return this.add(-1 * z, q);
      }, W.format = function(z) {
        var q = this, Q = this.$locale();
        if (!this.isValid())
          return Q.invalidDate || p;
        var ie = z || "YYYY-MM-DDTHH:mm:ssZ", te = C.z(this), se = this.$H, F = this.$m, V = this.$M, j = Q.weekdays, Y = Q.months, xe = function(Oe, Ge, At, ut) {
          return Oe && (Oe[Ge] || Oe(q, ie)) || At[Ge].slice(0, ut);
        }, Ee = function(Oe) {
          return C.s(se % 12 || 12, Oe, "0");
        }, Me = Q.meridiem || function(Oe, Ge, At) {
          var ut = Oe < 12 ? "AM" : "PM";
          return At ? ut.toLowerCase() : ut;
        }, pe = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: V + 1, MM: C.s(V + 1, 2, "0"), MMM: xe(Q.monthsShort, V, Y, 3), MMMM: xe(Y, V), D: this.$D, DD: C.s(this.$D, 2, "0"), d: String(this.$W), dd: xe(Q.weekdaysMin, this.$W, j, 2), ddd: xe(Q.weekdaysShort, this.$W, j, 3), dddd: j[this.$W], H: String(se), HH: C.s(se, 2, "0"), h: Ee(1), hh: Ee(2), a: Me(se, F, !0), A: Me(se, F, !1), m: String(F), mm: C.s(F, 2, "0"), s: String(this.$s), ss: C.s(this.$s, 2, "0"), SSS: C.s(this.$ms, 3, "0"), Z: te };
        return ie.replace(_, function(Oe, Ge) {
          return Ge || pe[Oe] || te.replace(":", "");
        });
      }, W.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, W.diff = function(z, q, Q) {
        var ie, te = C.p(q), se = B(z), F = (se.utcOffset() - this.utcOffset()) * r, V = this - se, j = C.m(this, se);
        return j = (ie = {}, ie[h] = j / 12, ie[d] = j, ie[f] = j / 3, ie[u] = (V - F) / 6048e5, ie[l] = (V - F) / 864e5, ie[c] = V / i, ie[a] = V / r, ie[o] = V / n, ie)[te] || V, Q ? j : C.a(j);
      }, W.daysInMonth = function() {
        return this.endOf(d).$D;
      }, W.$locale = function() {
        return A[this.$L];
      }, W.locale = function(z, q) {
        if (!z)
          return this.$L;
        var Q = this.clone(), ie = D(z, q, !0);
        return ie && (Q.$L = ie), Q;
      }, W.clone = function() {
        return C.w(this.$d, this);
      }, W.toDate = function() {
        return new Date(this.valueOf());
      }, W.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, W.toISOString = function() {
        return this.$d.toISOString();
      }, W.toString = function() {
        return this.$d.toUTCString();
      }, N;
    }(), P = k.prototype;
    return B.prototype = P, [["$ms", s], ["$s", o], ["$m", a], ["$H", c], ["$W", l], ["$M", d], ["$y", h], ["$D", g]].forEach(function(N) {
      P[N[1]] = function(W) {
        return this.$g(W, N[0], N[1]);
      };
    }), B.extend = function(N, W) {
      return N.$i || (N(W, k, B), N.$i = !0), B;
    }, B.locale = D, B.isDayjs = w, B.unix = function(N) {
      return B(1e3 * N);
    }, B.en = A[E], B.Ls = A, B.p = {}, B;
  });
})(oh);
const $e = eo;
var Nc = function() {
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
}(), to = typeof window < "u" && typeof document < "u" && window.document === document, Hi = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), ah = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Hi) : function(t) {
    return setTimeout(function() {
      return t(Date.now());
    }, 1e3 / 60);
  };
}(), lh = 2;
function ch(t, e) {
  var n = !1, r = !1, i = 0;
  function s() {
    n && (n = !1, t()), r && a();
  }
  function o() {
    ah(s);
  }
  function a() {
    var c = Date.now();
    if (n) {
      if (c - i < lh)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(o, e);
    i = c;
  }
  return a;
}
var uh = 20, fh = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], dh = typeof MutationObserver < "u", hh = (
  /** @class */
  function() {
    function t() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = ch(this.refresh.bind(this), uh);
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
      !to || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), dh ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, t.prototype.disconnect_ = function() {
      !to || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, t.prototype.onTransitionEnd_ = function(e) {
      var n = e.propertyName, r = n === void 0 ? "" : n, i = fh.some(function(s) {
        return !!~r.indexOf(s);
      });
      i && this.refresh();
    }, t.getInstance = function() {
      return this.instance_ || (this.instance_ = new t()), this.instance_;
    }, t.instance_ = null, t;
  }()
), Bc = function(t, e) {
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
}, Gn = function(t) {
  var e = t && t.ownerDocument && t.ownerDocument.defaultView;
  return e || Hi;
}, Pc = ss(0, 0, 0, 0);
function zi(t) {
  return parseFloat(t) || 0;
}
function il(t) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  return e.reduce(function(r, i) {
    var s = t["border-" + i + "-width"];
    return r + zi(s);
  }, 0);
}
function ph(t) {
  for (var e = ["top", "right", "bottom", "left"], n = {}, r = 0, i = e; r < i.length; r++) {
    var s = i[r], o = t["padding-" + s];
    n[s] = zi(o);
  }
  return n;
}
function gh(t) {
  var e = t.getBBox();
  return ss(0, 0, e.width, e.height);
}
function vh(t) {
  var e = t.clientWidth, n = t.clientHeight;
  if (!e && !n)
    return Pc;
  var r = Gn(t).getComputedStyle(t), i = ph(r), s = i.left + i.right, o = i.top + i.bottom, a = zi(r.width), c = zi(r.height);
  if (r.boxSizing === "border-box" && (Math.round(a + s) !== e && (a -= il(r, "left", "right") + s), Math.round(c + o) !== n && (c -= il(r, "top", "bottom") + o)), !bh(t)) {
    var l = Math.round(a + s) - e, u = Math.round(c + o) - n;
    Math.abs(l) !== 1 && (a -= l), Math.abs(u) !== 1 && (c -= u);
  }
  return ss(i.left, i.top, a, c);
}
var mh = function() {
  return typeof SVGGraphicsElement < "u" ? function(t) {
    return t instanceof Gn(t).SVGGraphicsElement;
  } : function(t) {
    return t instanceof Gn(t).SVGElement && typeof t.getBBox == "function";
  };
}();
function bh(t) {
  return t === Gn(t).document.documentElement;
}
function yh(t) {
  return to ? mh(t) ? gh(t) : vh(t) : Pc;
}
function xh(t) {
  var e = t.x, n = t.y, r = t.width, i = t.height, s = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, o = Object.create(s.prototype);
  return Bc(o, {
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
function ss(t, e, n, r) {
  return { x: t, y: e, width: n, height: r };
}
var _h = (
  /** @class */
  function() {
    function t(e) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ss(0, 0, 0, 0), this.target = e;
    }
    return t.prototype.isActive = function() {
      var e = yh(this.target);
      return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
    }, t.prototype.broadcastRect = function() {
      var e = this.contentRect_;
      return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e;
    }, t;
  }()
), Eh = (
  /** @class */
  function() {
    function t(e, n) {
      var r = xh(n);
      Bc(this, { target: e, contentRect: r });
    }
    return t;
  }()
), wh = (
  /** @class */
  function() {
    function t(e, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new Nc(), typeof e != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = e, this.controller_ = n, this.callbackCtx_ = r;
    }
    return t.prototype.observe = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof Gn(e).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(e) || (n.set(e, new _h(e)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, t.prototype.unobserve = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof Gn(e).Element))
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
          return new Eh(r.target, r.broadcastRect());
        });
        this.callback_.call(e, n, e), this.clearActive();
      }
    }, t.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, t.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, t;
  }()
), Lc = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Nc(), Hc = (
  /** @class */
  function() {
    function t(e) {
      if (!(this instanceof t))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = hh.getInstance(), r = new wh(e, n, this);
      Lc.set(this, r);
    }
    return t;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(t) {
  Hc.prototype[t] = function() {
    var e;
    return (e = Lc.get(this))[t].apply(e, arguments);
  };
});
(function() {
  return typeof Hi.ResizeObserver < "u" ? Hi.ResizeObserver : Hc;
})();
Oc();
Tn();
var sl = {}, Sh = {
  get exports() {
    return sl;
  },
  set exports(t) {
    sl = t;
  }
};
(function(t, e) {
  (function(n, r) {
    t.exports = r(Se());
  })(be, function(n) {
    return n.enc.Utf8;
  });
})(Sh);
kn();
Mc();
var ol = {}, Ah = {
  get exports() {
    return ol;
  },
  set exports(t) {
    ol = t;
  }
};
(function(t, e) {
  (function(n, r, i) {
    t.exports = r(Se(), et());
  })(be, function(n) {
    return n.pad.Pkcs7;
  });
})(Ah);
function Ch(t) {
  var e = [], n = "";
  for (n in t)
    e.push(n);
  return e;
}
function al(t) {
  return t = JSON.stringify(t), !(typeof t != "string" || !/^\{[\s\S]*\}$/.test(t));
}
function Dh(t) {
  return t instanceof Array;
}
function Rh(t) {
  return Array.prototype.slice.call(t);
}
function mr() {
  if (!(this instanceof mr))
    return new mr();
}
mr.prototype = {
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
    if (al(t))
      for (const r in t)
        this.set(r, t[r], e, n);
    else if (typeof t == "string") {
      const r = al(n) ? n : { expires: n }, i = r.path !== void 0 ? `;path=${r.path};path=/` : ";path=/", s = r.domain ? `;domain=${r.domain}` : "", o = r.secure ? ";secure" : "";
      let a = r.expires !== void 0 ? r.expires : "";
      typeof a == "string" && a !== "" ? a = new Date(a) : typeof a == "number" && (a = new Date(+/* @__PURE__ */ new Date() + 1e3 * 60 * 60 * 24 * a)), a !== "" && "toGMTString" in a && (a = `;expires=${a.toGMTString()}`);
      const c = r.sameSite ? `;SameSite=${r.sameSite}` : "";
      document.cookie = `${t}=${encodeURI(e) + a + i + s + o + c}`;
    }
  },
  remove: function(t) {
    t = Dh(t) ? t : Rh(arguments);
    for (var e = 0, n = t.length; e < n; e++)
      this.set(t[e], "", -1);
    return t;
  },
  clear: function(t) {
    return t ? this.remove(t) : this.remove(Ch(this.all()));
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
for (const t in mr.prototype)
  mr.prototype[t];
var ll = {}, Th = {
  get exports() {
    return ll;
  },
  set exports(t) {
    ll = t;
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
            var d = typeof fr == "function" && fr;
            if (!u && d)
              return d(l, !0);
            if (a)
              return a(l, !0);
            var f = new Error("Cannot find module '" + l + "'");
            throw f.code = "MODULE_NOT_FOUND", f;
          }
          var h = i[l] = { exports: {} };
          r[l][0].call(h.exports, function(g) {
            var p = r[l][1][g];
            return o(p || g);
          }, h, h.exports, n, r, i, s);
        }
        return i[l].exports;
      }
      for (var a = typeof fr == "function" && fr, c = 0; c < s.length; c++)
        o(s[c]);
      return o;
    }({ 1: [function(n, r, i) {
      (function(s) {
        var o = s.MutationObserver || s.WebKitMutationObserver, a;
        if (o) {
          var c = 0, l = new o(g), u = s.document.createTextNode("");
          l.observe(u, {
            characterData: !0
          }), a = function() {
            u.data = c = ++c % 2;
          };
        } else if (!s.setImmediate && typeof s.MessageChannel < "u") {
          var d = new s.MessageChannel();
          d.port1.onmessage = g, a = function() {
            d.port2.postMessage(0);
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
        var f, h = [];
        function g() {
          f = !0;
          for (var v, _, y = h.length; y; ) {
            for (_ = h, h = [], v = -1; ++v < y; )
              _[v]();
            y = h.length;
          }
          f = !1;
        }
        r.exports = p;
        function p(v) {
          h.push(v) === 1 && !f && a();
        }
      }).call(this, typeof be < "u" ? be : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(n, r, i) {
      var s = n(1);
      function o() {
      }
      var a = {}, c = ["REJECTED"], l = ["FULFILLED"], u = ["PENDING"];
      r.exports = d;
      function d(E) {
        if (typeof E != "function")
          throw new TypeError("resolver must be a function");
        this.state = u, this.queue = [], this.outcome = void 0, E !== o && p(this, E);
      }
      d.prototype.catch = function(E) {
        return this.then(null, E);
      }, d.prototype.then = function(E, A) {
        if (typeof E != "function" && this.state === l || typeof A != "function" && this.state === c)
          return this;
        var w = new this.constructor(o);
        if (this.state !== u) {
          var D = this.state === l ? E : A;
          h(w, D, this.outcome);
        } else
          this.queue.push(new f(w, E, A));
        return w;
      };
      function f(E, A, w) {
        this.promise = E, typeof A == "function" && (this.onFulfilled = A, this.callFulfilled = this.otherCallFulfilled), typeof w == "function" && (this.onRejected = w, this.callRejected = this.otherCallRejected);
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
      function h(E, A, w) {
        s(function() {
          var D;
          try {
            D = A(w);
          } catch (B) {
            return a.reject(E, B);
          }
          D === E ? a.reject(E, new TypeError("Cannot resolve promise with itself")) : a.resolve(E, D);
        });
      }
      a.resolve = function(E, A) {
        var w = v(g, A);
        if (w.status === "error")
          return a.reject(E, w.value);
        var D = w.value;
        if (D)
          p(E, D);
        else {
          E.state = l, E.outcome = A;
          for (var B = -1, C = E.queue.length; ++B < C; )
            E.queue[B].callFulfilled(A);
        }
        return E;
      }, a.reject = function(E, A) {
        E.state = c, E.outcome = A;
        for (var w = -1, D = E.queue.length; ++w < D; )
          E.queue[w].callRejected(A);
        return E;
      };
      function g(E) {
        var A = E && E.then;
        if (E && (typeof E == "object" || typeof E == "function") && typeof A == "function")
          return function() {
            A.apply(E, arguments);
          };
      }
      function p(E, A) {
        var w = !1;
        function D(P) {
          w || (w = !0, a.reject(E, P));
        }
        function B(P) {
          w || (w = !0, a.resolve(E, P));
        }
        function C() {
          A(B, D);
        }
        var k = v(C);
        k.status === "error" && D(k.value);
      }
      function v(E, A) {
        var w = {};
        try {
          w.value = E(A), w.status = "success";
        } catch (D) {
          w.status = "error", w.value = D;
        }
        return w;
      }
      d.resolve = _;
      function _(E) {
        return E instanceof this ? E : a.resolve(new this(o), E);
      }
      d.reject = y;
      function y(E) {
        var A = new this(o);
        return a.reject(A, E);
      }
      d.all = m;
      function m(E) {
        var A = this;
        if (Object.prototype.toString.call(E) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var w = E.length, D = !1;
        if (!w)
          return this.resolve([]);
        for (var B = new Array(w), C = 0, k = -1, P = new this(o); ++k < w; )
          N(E[k], k);
        return P;
        function N(W, z) {
          A.resolve(W).then(q, function(Q) {
            D || (D = !0, a.reject(P, Q));
          });
          function q(Q) {
            B[z] = Q, ++C === w && !D && (D = !0, a.resolve(P, B));
          }
        }
      }
      d.race = b;
      function b(E) {
        var A = this;
        if (Object.prototype.toString.call(E) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var w = E.length, D = !1;
        if (!w)
          return this.resolve([]);
        for (var B = -1, C = new this(o); ++B < w; )
          k(E[B]);
        return C;
        function k(P) {
          A.resolve(P).then(function(N) {
            D || (D = !0, a.resolve(C, N));
          }, function(N) {
            D || (D = !0, a.reject(C, N));
          });
        }
      }
    }, { 1: 1 }], 3: [function(n, r, i) {
      (function(s) {
        typeof s.Promise != "function" && (s.Promise = n(2));
      }).call(this, typeof be < "u" ? be : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(n, r, i) {
      var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(x) {
        return typeof x;
      } : function(x) {
        return x && typeof Symbol == "function" && x.constructor === Symbol && x !== Symbol.prototype ? "symbol" : typeof x;
      };
      function o(x, T) {
        if (!(x instanceof T))
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
          var x = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), T = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!x || T) && typeof indexedDB < "u" && // some outdated implementations of IDB that appear on Samsung
          // and HTC Android devices <4.4 are missing IDBKeyRange
          // See: https://github.com/mozilla/localForage/issues/128
          // See: https://github.com/mozilla/localForage/issues/272
          typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function u(x, T) {
        x = x || [], T = T || {};
        try {
          return new Blob(x, T);
        } catch (I) {
          if (I.name !== "TypeError")
            throw I;
          for (var S = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, M = new S(), O = 0; O < x.length; O += 1)
            M.append(x[O]);
          return M.getBlob(T.type);
        }
      }
      typeof Promise > "u" && n(3);
      var d = Promise;
      function f(x, T) {
        T && x.then(function(S) {
          T(null, S);
        }, function(S) {
          T(S);
        });
      }
      function h(x, T, S) {
        typeof T == "function" && x.then(T), typeof S == "function" && x.catch(S);
      }
      function g(x) {
        return typeof x != "string" && (console.warn(x + " used as a key, but it is not a string."), x = String(x)), x;
      }
      function p() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var v = "local-forage-detect-blob-support", _ = void 0, y = {}, m = Object.prototype.toString, b = "readonly", E = "readwrite";
      function A(x) {
        for (var T = x.length, S = new ArrayBuffer(T), M = new Uint8Array(S), O = 0; O < T; O++)
          M[O] = x.charCodeAt(O);
        return S;
      }
      function w(x) {
        return new d(function(T) {
          var S = x.transaction(v, E), M = u([""]);
          S.objectStore(v).put(M, "key"), S.onabort = function(O) {
            O.preventDefault(), O.stopPropagation(), T(!1);
          }, S.oncomplete = function() {
            var O = navigator.userAgent.match(/Chrome\/(\d+)/), I = navigator.userAgent.match(/Edge\//);
            T(I || !O || parseInt(O[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function D(x) {
        return typeof _ == "boolean" ? d.resolve(_) : w(x).then(function(T) {
          return _ = T, _;
        });
      }
      function B(x) {
        var T = y[x.name], S = {};
        S.promise = new d(function(M, O) {
          S.resolve = M, S.reject = O;
        }), T.deferredOperations.push(S), T.dbReady ? T.dbReady = T.dbReady.then(function() {
          return S.promise;
        }) : T.dbReady = S.promise;
      }
      function C(x) {
        var T = y[x.name], S = T.deferredOperations.pop();
        if (S)
          return S.resolve(), S.promise;
      }
      function k(x, T) {
        var S = y[x.name], M = S.deferredOperations.pop();
        if (M)
          return M.reject(T), M.promise;
      }
      function P(x, T) {
        return new d(function(S, M) {
          if (y[x.name] = y[x.name] || V(), x.db)
            if (T)
              B(x), x.db.close();
            else
              return S(x.db);
          var O = [x.name];
          T && O.push(x.version);
          var I = c.open.apply(c, O);
          T && (I.onupgradeneeded = function($) {
            var Z = I.result;
            try {
              Z.createObjectStore(x.storeName), $.oldVersion <= 1 && Z.createObjectStore(v);
            } catch (X) {
              if (X.name === "ConstraintError")
                console.warn('The database "' + x.name + '" has been upgraded from version ' + $.oldVersion + " to version " + $.newVersion + ', but the storage "' + x.storeName + '" already exists.');
              else
                throw X;
            }
          }), I.onerror = function($) {
            $.preventDefault(), M(I.error);
          }, I.onsuccess = function() {
            var $ = I.result;
            $.onversionchange = function(Z) {
              Z.target.close();
            }, S($), C(x);
          };
        });
      }
      function N(x) {
        return P(x, !1);
      }
      function W(x) {
        return P(x, !0);
      }
      function z(x, T) {
        if (!x.db)
          return !0;
        var S = !x.db.objectStoreNames.contains(x.storeName), M = x.version < x.db.version, O = x.version > x.db.version;
        if (M && (x.version !== T && console.warn('The database "' + x.name + `" can't be downgraded from version ` + x.db.version + " to version " + x.version + "."), x.version = x.db.version), O || S) {
          if (S) {
            var I = x.db.version + 1;
            I > x.version && (x.version = I);
          }
          return !0;
        }
        return !1;
      }
      function q(x) {
        return new d(function(T, S) {
          var M = new FileReader();
          M.onerror = S, M.onloadend = function(O) {
            var I = btoa(O.target.result || "");
            T({
              __local_forage_encoded_blob: !0,
              data: I,
              type: x.type
            });
          }, M.readAsBinaryString(x);
        });
      }
      function Q(x) {
        var T = A(atob(x.data));
        return u([T], { type: x.type });
      }
      function ie(x) {
        return x && x.__local_forage_encoded_blob;
      }
      function te(x) {
        var T = this, S = T._initReady().then(function() {
          var M = y[T._dbInfo.name];
          if (M && M.dbReady)
            return M.dbReady;
        });
        return h(S, x, x), S;
      }
      function se(x) {
        B(x);
        for (var T = y[x.name], S = T.forages, M = 0; M < S.length; M++) {
          var O = S[M];
          O._dbInfo.db && (O._dbInfo.db.close(), O._dbInfo.db = null);
        }
        return x.db = null, N(x).then(function(I) {
          return x.db = I, z(x) ? W(x) : I;
        }).then(function(I) {
          x.db = T.db = I;
          for (var $ = 0; $ < S.length; $++)
            S[$]._dbInfo.db = I;
        }).catch(function(I) {
          throw k(x, I), I;
        });
      }
      function F(x, T, S, M) {
        M === void 0 && (M = 1);
        try {
          var O = x.db.transaction(x.storeName, T);
          S(null, O);
        } catch (I) {
          if (M > 0 && (!x.db || I.name === "InvalidStateError" || I.name === "NotFoundError"))
            return d.resolve().then(function() {
              if (!x.db || I.name === "NotFoundError" && !x.db.objectStoreNames.contains(x.storeName) && x.version <= x.db.version)
                return x.db && (x.version = x.db.version + 1), W(x);
            }).then(function() {
              return se(x).then(function() {
                F(x, T, S, M - 1);
              });
            }).catch(S);
          S(I);
        }
      }
      function V() {
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
      function j(x) {
        var T = this, S = {
          db: null
        };
        if (x)
          for (var M in x)
            S[M] = x[M];
        var O = y[S.name];
        O || (O = V(), y[S.name] = O), O.forages.push(T), T._initReady || (T._initReady = T.ready, T.ready = te);
        var I = [];
        function $() {
          return d.resolve();
        }
        for (var Z = 0; Z < O.forages.length; Z++) {
          var X = O.forages[Z];
          X !== T && I.push(X._initReady().catch($));
        }
        var J = O.forages.slice(0);
        return d.all(I).then(function() {
          return S.db = O.db, N(S);
        }).then(function(re) {
          return S.db = re, z(S, T._defaultConfig.version) ? W(S) : re;
        }).then(function(re) {
          S.db = O.db = re, T._dbInfo = S;
          for (var ae = 0; ae < J.length; ae++) {
            var _e = J[ae];
            _e !== T && (_e._dbInfo.db = S.db, _e._dbInfo.version = S.version);
          }
        });
      }
      function Y(x, T) {
        var S = this;
        x = g(x);
        var M = new d(function(O, I) {
          S.ready().then(function() {
            F(S._dbInfo, b, function($, Z) {
              if ($)
                return I($);
              try {
                var X = Z.objectStore(S._dbInfo.storeName), J = X.get(x);
                J.onsuccess = function() {
                  var re = J.result;
                  re === void 0 && (re = null), ie(re) && (re = Q(re)), O(re);
                }, J.onerror = function() {
                  I(J.error);
                };
              } catch (re) {
                I(re);
              }
            });
          }).catch(I);
        });
        return f(M, T), M;
      }
      function xe(x, T) {
        var S = this, M = new d(function(O, I) {
          S.ready().then(function() {
            F(S._dbInfo, b, function($, Z) {
              if ($)
                return I($);
              try {
                var X = Z.objectStore(S._dbInfo.storeName), J = X.openCursor(), re = 1;
                J.onsuccess = function() {
                  var ae = J.result;
                  if (ae) {
                    var _e = ae.value;
                    ie(_e) && (_e = Q(_e));
                    var Re = x(_e, ae.key, re++);
                    Re !== void 0 ? O(Re) : ae.continue();
                  } else
                    O();
                }, J.onerror = function() {
                  I(J.error);
                };
              } catch (ae) {
                I(ae);
              }
            });
          }).catch(I);
        });
        return f(M, T), M;
      }
      function Ee(x, T, S) {
        var M = this;
        x = g(x);
        var O = new d(function(I, $) {
          var Z;
          M.ready().then(function() {
            return Z = M._dbInfo, m.call(T) === "[object Blob]" ? D(Z.db).then(function(X) {
              return X ? T : q(T);
            }) : T;
          }).then(function(X) {
            F(M._dbInfo, E, function(J, re) {
              if (J)
                return $(J);
              try {
                var ae = re.objectStore(M._dbInfo.storeName);
                X === null && (X = void 0);
                var _e = ae.put(X, x);
                re.oncomplete = function() {
                  X === void 0 && (X = null), I(X);
                }, re.onabort = re.onerror = function() {
                  var Re = _e.error ? _e.error : _e.transaction.error;
                  $(Re);
                };
              } catch (Re) {
                $(Re);
              }
            });
          }).catch($);
        });
        return f(O, S), O;
      }
      function Me(x, T) {
        var S = this;
        x = g(x);
        var M = new d(function(O, I) {
          S.ready().then(function() {
            F(S._dbInfo, E, function($, Z) {
              if ($)
                return I($);
              try {
                var X = Z.objectStore(S._dbInfo.storeName), J = X.delete(x);
                Z.oncomplete = function() {
                  O();
                }, Z.onerror = function() {
                  I(J.error);
                }, Z.onabort = function() {
                  var re = J.error ? J.error : J.transaction.error;
                  I(re);
                };
              } catch (re) {
                I(re);
              }
            });
          }).catch(I);
        });
        return f(M, T), M;
      }
      function pe(x) {
        var T = this, S = new d(function(M, O) {
          T.ready().then(function() {
            F(T._dbInfo, E, function(I, $) {
              if (I)
                return O(I);
              try {
                var Z = $.objectStore(T._dbInfo.storeName), X = Z.clear();
                $.oncomplete = function() {
                  M();
                }, $.onabort = $.onerror = function() {
                  var J = X.error ? X.error : X.transaction.error;
                  O(J);
                };
              } catch (J) {
                O(J);
              }
            });
          }).catch(O);
        });
        return f(S, x), S;
      }
      function Oe(x) {
        var T = this, S = new d(function(M, O) {
          T.ready().then(function() {
            F(T._dbInfo, b, function(I, $) {
              if (I)
                return O(I);
              try {
                var Z = $.objectStore(T._dbInfo.storeName), X = Z.count();
                X.onsuccess = function() {
                  M(X.result);
                }, X.onerror = function() {
                  O(X.error);
                };
              } catch (J) {
                O(J);
              }
            });
          }).catch(O);
        });
        return f(S, x), S;
      }
      function Ge(x, T) {
        var S = this, M = new d(function(O, I) {
          if (x < 0) {
            O(null);
            return;
          }
          S.ready().then(function() {
            F(S._dbInfo, b, function($, Z) {
              if ($)
                return I($);
              try {
                var X = Z.objectStore(S._dbInfo.storeName), J = !1, re = X.openKeyCursor();
                re.onsuccess = function() {
                  var ae = re.result;
                  if (!ae) {
                    O(null);
                    return;
                  }
                  x === 0 || J ? O(ae.key) : (J = !0, ae.advance(x));
                }, re.onerror = function() {
                  I(re.error);
                };
              } catch (ae) {
                I(ae);
              }
            });
          }).catch(I);
        });
        return f(M, T), M;
      }
      function At(x) {
        var T = this, S = new d(function(M, O) {
          T.ready().then(function() {
            F(T._dbInfo, b, function(I, $) {
              if (I)
                return O(I);
              try {
                var Z = $.objectStore(T._dbInfo.storeName), X = Z.openKeyCursor(), J = [];
                X.onsuccess = function() {
                  var re = X.result;
                  if (!re) {
                    M(J);
                    return;
                  }
                  J.push(re.key), re.continue();
                }, X.onerror = function() {
                  O(X.error);
                };
              } catch (re) {
                O(re);
              }
            });
          }).catch(O);
        });
        return f(S, x), S;
      }
      function ut(x, T) {
        T = p.apply(this, arguments);
        var S = this.config();
        x = typeof x != "function" && x || {}, x.name || (x.name = x.name || S.name, x.storeName = x.storeName || S.storeName);
        var M = this, O;
        if (!x.name)
          O = d.reject("Invalid arguments");
        else {
          var I = x.name === S.name && M._dbInfo.db, $ = I ? d.resolve(M._dbInfo.db) : N(x).then(function(Z) {
            var X = y[x.name], J = X.forages;
            X.db = Z;
            for (var re = 0; re < J.length; re++)
              J[re]._dbInfo.db = Z;
            return Z;
          });
          x.storeName ? O = $.then(function(Z) {
            if (Z.objectStoreNames.contains(x.storeName)) {
              var X = Z.version + 1;
              B(x);
              var J = y[x.name], re = J.forages;
              Z.close();
              for (var ae = 0; ae < re.length; ae++) {
                var _e = re[ae];
                _e._dbInfo.db = null, _e._dbInfo.version = X;
              }
              var Re = new d(function(ke, je) {
                var Fe = c.open(x.name, X);
                Fe.onerror = function(wt) {
                  var sr = Fe.result;
                  sr.close(), je(wt);
                }, Fe.onupgradeneeded = function() {
                  var wt = Fe.result;
                  wt.deleteObjectStore(x.storeName);
                }, Fe.onsuccess = function() {
                  var wt = Fe.result;
                  wt.close(), ke(wt);
                };
              });
              return Re.then(function(ke) {
                J.db = ke;
                for (var je = 0; je < re.length; je++) {
                  var Fe = re[je];
                  Fe._dbInfo.db = ke, C(Fe._dbInfo);
                }
              }).catch(function(ke) {
                throw (k(x, ke) || d.resolve()).catch(function() {
                }), ke;
              });
            }
          }) : O = $.then(function(Z) {
            B(x);
            var X = y[x.name], J = X.forages;
            Z.close();
            for (var re = 0; re < J.length; re++) {
              var ae = J[re];
              ae._dbInfo.db = null;
            }
            var _e = new d(function(Re, ke) {
              var je = c.deleteDatabase(x.name);
              je.onerror = function() {
                var Fe = je.result;
                Fe && Fe.close(), ke(je.error);
              }, je.onblocked = function() {
                console.warn('dropInstance blocked for database "' + x.name + '" until all open connections are closed');
              }, je.onsuccess = function() {
                var Fe = je.result;
                Fe && Fe.close(), Re(Fe);
              };
            });
            return _e.then(function(Re) {
              X.db = Re;
              for (var ke = 0; ke < J.length; ke++) {
                var je = J[ke];
                C(je._dbInfo);
              }
            }).catch(function(Re) {
              throw (k(x, Re) || d.resolve()).catch(function() {
              }), Re;
            });
          });
        }
        return f(O, T), O;
      }
      var Xe = {
        _driver: "asyncStorage",
        _initStorage: j,
        _support: l(),
        iterate: xe,
        getItem: Y,
        setItem: Ee,
        removeItem: Me,
        clear: pe,
        length: Oe,
        key: Ge,
        keys: At,
        dropInstance: ut
      };
      function He() {
        return typeof openDatabase == "function";
      }
      var We = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", jt = "~~local_forage_type~", Bt = /^~~local_forage_type~([^~]+)~/, xt = "__lfsc__:", $t = xt.length, _t = "arbf", Qe = "blob", Ke = "si08", at = "ui08", qt = "uic8", Yt = "si16", Ct = "si32", H = "ur16", K = "ui32", L = "fl32", le = "fl64", De = $t + _t.length, Je = Object.prototype.toString;
      function Dt(x) {
        var T = x.length * 0.75, S = x.length, M, O = 0, I, $, Z, X;
        x[x.length - 1] === "=" && (T--, x[x.length - 2] === "=" && T--);
        var J = new ArrayBuffer(T), re = new Uint8Array(J);
        for (M = 0; M < S; M += 4)
          I = We.indexOf(x[M]), $ = We.indexOf(x[M + 1]), Z = We.indexOf(x[M + 2]), X = We.indexOf(x[M + 3]), re[O++] = I << 2 | $ >> 4, re[O++] = ($ & 15) << 4 | Z >> 2, re[O++] = (Z & 3) << 6 | X & 63;
        return J;
      }
      function Et(x) {
        var T = new Uint8Array(x), S = "", M;
        for (M = 0; M < T.length; M += 3)
          S += We[T[M] >> 2], S += We[(T[M] & 3) << 4 | T[M + 1] >> 4], S += We[(T[M + 1] & 15) << 2 | T[M + 2] >> 6], S += We[T[M + 2] & 63];
        return T.length % 3 === 2 ? S = S.substring(0, S.length - 1) + "=" : T.length % 3 === 1 && (S = S.substring(0, S.length - 2) + "=="), S;
      }
      function yn(x, T) {
        var S = "";
        if (x && (S = Je.call(x)), x && (S === "[object ArrayBuffer]" || x.buffer && Je.call(x.buffer) === "[object ArrayBuffer]")) {
          var M, O = xt;
          x instanceof ArrayBuffer ? (M = x, O += _t) : (M = x.buffer, S === "[object Int8Array]" ? O += Ke : S === "[object Uint8Array]" ? O += at : S === "[object Uint8ClampedArray]" ? O += qt : S === "[object Int16Array]" ? O += Yt : S === "[object Uint16Array]" ? O += H : S === "[object Int32Array]" ? O += Ct : S === "[object Uint32Array]" ? O += K : S === "[object Float32Array]" ? O += L : S === "[object Float64Array]" ? O += le : T(new Error("Failed to get type for BinaryArray"))), T(O + Et(M));
        } else if (S === "[object Blob]") {
          var I = new FileReader();
          I.onload = function() {
            var $ = jt + x.type + "~" + Et(this.result);
            T(xt + Qe + $);
          }, I.readAsArrayBuffer(x);
        } else
          try {
            T(JSON.stringify(x));
          } catch ($) {
            console.error("Couldn't convert value into a JSON string: ", x), T(null, $);
          }
      }
      function Ve(x) {
        if (x.substring(0, $t) !== xt)
          return JSON.parse(x);
        var T = x.substring(De), S = x.substring($t, De), M;
        if (S === Qe && Bt.test(T)) {
          var O = T.match(Bt);
          M = O[1], T = T.substring(O[0].length);
        }
        var I = Dt(T);
        switch (S) {
          case _t:
            return I;
          case Qe:
            return u([I], { type: M });
          case Ke:
            return new Int8Array(I);
          case at:
            return new Uint8Array(I);
          case qt:
            return new Uint8ClampedArray(I);
          case Yt:
            return new Int16Array(I);
          case H:
            return new Uint16Array(I);
          case Ct:
            return new Int32Array(I);
          case K:
            return new Uint32Array(I);
          case L:
            return new Float32Array(I);
          case le:
            return new Float64Array(I);
          default:
            throw new Error("Unkown type: " + S);
        }
      }
      var tt = {
        serialize: yn,
        deserialize: Ve,
        stringToBuffer: Dt,
        bufferToString: Et
      };
      function nr(x, T, S, M) {
        x.executeSql("CREATE TABLE IF NOT EXISTS " + T.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], S, M);
      }
      function bs(x) {
        var T = this, S = {
          db: null
        };
        if (x)
          for (var M in x)
            S[M] = typeof x[M] != "string" ? x[M].toString() : x[M];
        var O = new d(function(I, $) {
          try {
            S.db = openDatabase(S.name, String(S.version), S.description, S.size);
          } catch (Z) {
            return $(Z);
          }
          S.db.transaction(function(Z) {
            nr(Z, S, function() {
              T._dbInfo = S, I();
            }, function(X, J) {
              $(J);
            });
          }, $);
        });
        return S.serializer = tt, O;
      }
      function Rt(x, T, S, M, O, I) {
        x.executeSql(S, M, O, function($, Z) {
          Z.code === Z.SYNTAX_ERR ? $.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [T.storeName], function(X, J) {
            J.rows.length ? I(X, Z) : nr(X, T, function() {
              X.executeSql(S, M, O, I);
            }, I);
          }, I) : I($, Z);
        }, I);
      }
      function ys(x, T) {
        var S = this;
        x = g(x);
        var M = new d(function(O, I) {
          S.ready().then(function() {
            var $ = S._dbInfo;
            $.db.transaction(function(Z) {
              Rt(Z, $, "SELECT * FROM " + $.storeName + " WHERE key = ? LIMIT 1", [x], function(X, J) {
                var re = J.rows.length ? J.rows.item(0).value : null;
                re && (re = $.serializer.deserialize(re)), O(re);
              }, function(X, J) {
                I(J);
              });
            });
          }).catch(I);
        });
        return f(M, T), M;
      }
      function Tr(x, T) {
        var S = this, M = new d(function(O, I) {
          S.ready().then(function() {
            var $ = S._dbInfo;
            $.db.transaction(function(Z) {
              Rt(Z, $, "SELECT * FROM " + $.storeName, [], function(X, J) {
                for (var re = J.rows, ae = re.length, _e = 0; _e < ae; _e++) {
                  var Re = re.item(_e), ke = Re.value;
                  if (ke && (ke = $.serializer.deserialize(ke)), ke = x(ke, Re.key, _e + 1), ke !== void 0) {
                    O(ke);
                    return;
                  }
                }
                O();
              }, function(X, J) {
                I(J);
              });
            });
          }).catch(I);
        });
        return f(M, T), M;
      }
      function kr(x, T, S, M) {
        var O = this;
        x = g(x);
        var I = new d(function($, Z) {
          O.ready().then(function() {
            T === void 0 && (T = null);
            var X = T, J = O._dbInfo;
            J.serializer.serialize(T, function(re, ae) {
              ae ? Z(ae) : J.db.transaction(function(_e) {
                Rt(_e, J, "INSERT OR REPLACE INTO " + J.storeName + " (key, value) VALUES (?, ?)", [x, re], function() {
                  $(X);
                }, function(Re, ke) {
                  Z(ke);
                });
              }, function(_e) {
                if (_e.code === _e.QUOTA_ERR) {
                  if (M > 0) {
                    $(kr.apply(O, [x, X, S, M - 1]));
                    return;
                  }
                  Z(_e);
                }
              });
            });
          }).catch(Z);
        });
        return f(I, S), I;
      }
      function xs(x, T, S) {
        return kr.apply(this, [x, T, S, 1]);
      }
      function _s(x, T) {
        var S = this;
        x = g(x);
        var M = new d(function(O, I) {
          S.ready().then(function() {
            var $ = S._dbInfo;
            $.db.transaction(function(Z) {
              Rt(Z, $, "DELETE FROM " + $.storeName + " WHERE key = ?", [x], function() {
                O();
              }, function(X, J) {
                I(J);
              });
            });
          }).catch(I);
        });
        return f(M, T), M;
      }
      function Ir(x) {
        var T = this, S = new d(function(M, O) {
          T.ready().then(function() {
            var I = T._dbInfo;
            I.db.transaction(function($) {
              Rt($, I, "DELETE FROM " + I.storeName, [], function() {
                M();
              }, function(Z, X) {
                O(X);
              });
            });
          }).catch(O);
        });
        return f(S, x), S;
      }
      function Es(x) {
        var T = this, S = new d(function(M, O) {
          T.ready().then(function() {
            var I = T._dbInfo;
            I.db.transaction(function($) {
              Rt($, I, "SELECT COUNT(key) as c FROM " + I.storeName, [], function(Z, X) {
                var J = X.rows.item(0).c;
                M(J);
              }, function(Z, X) {
                O(X);
              });
            });
          }).catch(O);
        });
        return f(S, x), S;
      }
      function ws(x, T) {
        var S = this, M = new d(function(O, I) {
          S.ready().then(function() {
            var $ = S._dbInfo;
            $.db.transaction(function(Z) {
              Rt(Z, $, "SELECT key FROM " + $.storeName + " WHERE id = ? LIMIT 1", [x + 1], function(X, J) {
                var re = J.rows.length ? J.rows.item(0).key : null;
                O(re);
              }, function(X, J) {
                I(J);
              });
            });
          }).catch(I);
        });
        return f(M, T), M;
      }
      function Mr(x) {
        var T = this, S = new d(function(M, O) {
          T.ready().then(function() {
            var I = T._dbInfo;
            I.db.transaction(function($) {
              Rt($, I, "SELECT key FROM " + I.storeName, [], function(Z, X) {
                for (var J = [], re = 0; re < X.rows.length; re++)
                  J.push(X.rows.item(re).key);
                M(J);
              }, function(Z, X) {
                O(X);
              });
            });
          }).catch(O);
        });
        return f(S, x), S;
      }
      function Ss(x) {
        return new d(function(T, S) {
          x.transaction(function(M) {
            M.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(O, I) {
              for (var $ = [], Z = 0; Z < I.rows.length; Z++)
                $.push(I.rows.item(Z).name);
              T({
                db: x,
                storeNames: $
              });
            }, function(O, I) {
              S(I);
            });
          }, function(M) {
            S(M);
          });
        });
      }
      function Or(x, T) {
        T = p.apply(this, arguments);
        var S = this.config();
        x = typeof x != "function" && x || {}, x.name || (x.name = x.name || S.name, x.storeName = x.storeName || S.storeName);
        var M = this, O;
        return x.name ? O = new d(function(I) {
          var $;
          x.name === S.name ? $ = M._dbInfo.db : $ = openDatabase(x.name, "", "", 0), x.storeName ? I({
            db: $,
            storeNames: [x.storeName]
          }) : I(Ss($));
        }).then(function(I) {
          return new d(function($, Z) {
            I.db.transaction(function(X) {
              function J(Re) {
                return new d(function(ke, je) {
                  X.executeSql("DROP TABLE IF EXISTS " + Re, [], function() {
                    ke();
                  }, function(Fe, wt) {
                    je(wt);
                  });
                });
              }
              for (var re = [], ae = 0, _e = I.storeNames.length; ae < _e; ae++)
                re.push(J(I.storeNames[ae]));
              d.all(re).then(function() {
                $();
              }).catch(function(Re) {
                Z(Re);
              });
            }, function(X) {
              Z(X);
            });
          });
        }) : O = d.reject("Invalid arguments"), f(O, T), O;
      }
      var lt = {
        _driver: "webSQLStorage",
        _initStorage: bs,
        _support: He(),
        iterate: Tr,
        getItem: ys,
        setItem: xs,
        removeItem: _s,
        clear: Ir,
        length: Es,
        key: ws,
        keys: Mr,
        dropInstance: Or
      };
      function Pt() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function rr(x, T) {
        var S = x.name + "/";
        return x.storeName !== T.storeName && (S += x.storeName + "/"), S;
      }
      function As() {
        var x = "_localforage_support_test";
        try {
          return localStorage.setItem(x, !0), localStorage.removeItem(x), !1;
        } catch {
          return !0;
        }
      }
      function ad() {
        return !As() || localStorage.length > 0;
      }
      function ld(x) {
        var T = this, S = {};
        if (x)
          for (var M in x)
            S[M] = x[M];
        return S.keyPrefix = rr(x, T._defaultConfig), ad() ? (T._dbInfo = S, S.serializer = tt, d.resolve()) : d.reject();
      }
      function cd(x) {
        var T = this, S = T.ready().then(function() {
          for (var M = T._dbInfo.keyPrefix, O = localStorage.length - 1; O >= 0; O--) {
            var I = localStorage.key(O);
            I.indexOf(M) === 0 && localStorage.removeItem(I);
          }
        });
        return f(S, x), S;
      }
      function ud(x, T) {
        var S = this;
        x = g(x);
        var M = S.ready().then(function() {
          var O = S._dbInfo, I = localStorage.getItem(O.keyPrefix + x);
          return I && (I = O.serializer.deserialize(I)), I;
        });
        return f(M, T), M;
      }
      function fd(x, T) {
        var S = this, M = S.ready().then(function() {
          for (var O = S._dbInfo, I = O.keyPrefix, $ = I.length, Z = localStorage.length, X = 1, J = 0; J < Z; J++) {
            var re = localStorage.key(J);
            if (re.indexOf(I) === 0) {
              var ae = localStorage.getItem(re);
              if (ae && (ae = O.serializer.deserialize(ae)), ae = x(ae, re.substring($), X++), ae !== void 0)
                return ae;
            }
          }
        });
        return f(M, T), M;
      }
      function dd(x, T) {
        var S = this, M = S.ready().then(function() {
          var O = S._dbInfo, I;
          try {
            I = localStorage.key(x);
          } catch {
            I = null;
          }
          return I && (I = I.substring(O.keyPrefix.length)), I;
        });
        return f(M, T), M;
      }
      function hd(x) {
        var T = this, S = T.ready().then(function() {
          for (var M = T._dbInfo, O = localStorage.length, I = [], $ = 0; $ < O; $++) {
            var Z = localStorage.key($);
            Z.indexOf(M.keyPrefix) === 0 && I.push(Z.substring(M.keyPrefix.length));
          }
          return I;
        });
        return f(S, x), S;
      }
      function pd(x) {
        var T = this, S = T.keys().then(function(M) {
          return M.length;
        });
        return f(S, x), S;
      }
      function gd(x, T) {
        var S = this;
        x = g(x);
        var M = S.ready().then(function() {
          var O = S._dbInfo;
          localStorage.removeItem(O.keyPrefix + x);
        });
        return f(M, T), M;
      }
      function vd(x, T, S) {
        var M = this;
        x = g(x);
        var O = M.ready().then(function() {
          T === void 0 && (T = null);
          var I = T;
          return new d(function($, Z) {
            var X = M._dbInfo;
            X.serializer.serialize(T, function(J, re) {
              if (re)
                Z(re);
              else
                try {
                  localStorage.setItem(X.keyPrefix + x, J), $(I);
                } catch (ae) {
                  (ae.name === "QuotaExceededError" || ae.name === "NS_ERROR_DOM_QUOTA_REACHED") && Z(ae), Z(ae);
                }
            });
          });
        });
        return f(O, S), O;
      }
      function md(x, T) {
        if (T = p.apply(this, arguments), x = typeof x != "function" && x || {}, !x.name) {
          var S = this.config();
          x.name = x.name || S.name, x.storeName = x.storeName || S.storeName;
        }
        var M = this, O;
        return x.name ? O = new d(function(I) {
          x.storeName ? I(rr(x, M._defaultConfig)) : I(x.name + "/");
        }).then(function(I) {
          for (var $ = localStorage.length - 1; $ >= 0; $--) {
            var Z = localStorage.key($);
            Z.indexOf(I) === 0 && localStorage.removeItem(Z);
          }
        }) : O = d.reject("Invalid arguments"), f(O, T), O;
      }
      var bd = {
        _driver: "localStorageWrapper",
        _initStorage: ld,
        _support: Pt(),
        iterate: fd,
        getItem: ud,
        setItem: vd,
        removeItem: gd,
        clear: cd,
        length: pd,
        key: dd,
        keys: hd,
        dropInstance: md
      }, yd = function(T, S) {
        return T === S || typeof T == "number" && typeof S == "number" && isNaN(T) && isNaN(S);
      }, xd = function(T, S) {
        for (var M = T.length, O = 0; O < M; ) {
          if (yd(T[O], S))
            return !0;
          O++;
        }
        return !1;
      }, va = Array.isArray || function(x) {
        return Object.prototype.toString.call(x) === "[object Array]";
      }, ir = {}, ma = {}, Bn = {
        INDEXEDDB: Xe,
        WEBSQL: lt,
        LOCALSTORAGE: bd
      }, _d = [Bn.INDEXEDDB._driver, Bn.WEBSQL._driver, Bn.LOCALSTORAGE._driver], Nr = ["dropInstance"], Cs = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Nr), Ed = {
        description: "",
        driver: _d.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function wd(x, T) {
        x[T] = function() {
          var S = arguments;
          return x.ready().then(function() {
            return x[T].apply(x, S);
          });
        };
      }
      function Ds() {
        for (var x = 1; x < arguments.length; x++) {
          var T = arguments[x];
          if (T)
            for (var S in T)
              T.hasOwnProperty(S) && (va(T[S]) ? arguments[0][S] = T[S].slice() : arguments[0][S] = T[S]);
        }
        return arguments[0];
      }
      var Sd = function() {
        function x(T) {
          o(this, x);
          for (var S in Bn)
            if (Bn.hasOwnProperty(S)) {
              var M = Bn[S], O = M._driver;
              this[S] = O, ir[O] || this.defineDriver(M);
            }
          this._defaultConfig = Ds({}, Ed), this._config = Ds({}, this._defaultConfig, T), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return x.prototype.config = function(S) {
          if ((typeof S > "u" ? "undefined" : s(S)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var M in S) {
              if (M === "storeName" && (S[M] = S[M].replace(/\W/g, "_")), M === "version" && typeof S[M] != "number")
                return new Error("Database version must be a number.");
              this._config[M] = S[M];
            }
            return "driver" in S && S.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof S == "string" ? this._config[S] : this._config;
        }, x.prototype.defineDriver = function(S, M, O) {
          var I = new d(function($, Z) {
            try {
              var X = S._driver, J = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!S._driver) {
                Z(J);
                return;
              }
              for (var re = Cs.concat("_initStorage"), ae = 0, _e = re.length; ae < _e; ae++) {
                var Re = re[ae], ke = !xd(Nr, Re);
                if ((ke || S[Re]) && typeof S[Re] != "function") {
                  Z(J);
                  return;
                }
              }
              var je = function() {
                for (var sr = function(Dd) {
                  return function() {
                    var Rd = new Error("Method " + Dd + " is not implemented by the current driver"), ba = d.reject(Rd);
                    return f(ba, arguments[arguments.length - 1]), ba;
                  };
                }, Rs = 0, Cd = Nr.length; Rs < Cd; Rs++) {
                  var Ts = Nr[Rs];
                  S[Ts] || (S[Ts] = sr(Ts));
                }
              };
              je();
              var Fe = function(sr) {
                ir[X] && console.info("Redefining LocalForage driver: " + X), ir[X] = S, ma[X] = sr, $();
              };
              "_support" in S ? S._support && typeof S._support == "function" ? S._support().then(Fe, Z) : Fe(!!S._support) : Fe(!0);
            } catch (wt) {
              Z(wt);
            }
          });
          return h(I, M, O), I;
        }, x.prototype.driver = function() {
          return this._driver || null;
        }, x.prototype.getDriver = function(S, M, O) {
          var I = ir[S] ? d.resolve(ir[S]) : d.reject(new Error("Driver not found."));
          return h(I, M, O), I;
        }, x.prototype.getSerializer = function(S) {
          var M = d.resolve(tt);
          return h(M, S), M;
        }, x.prototype.ready = function(S) {
          var M = this, O = M._driverSet.then(function() {
            return M._ready === null && (M._ready = M._initDriver()), M._ready;
          });
          return h(O, S, S), O;
        }, x.prototype.setDriver = function(S, M, O) {
          var I = this;
          va(S) || (S = [S]);
          var $ = this._getSupportedDrivers(S);
          function Z() {
            I._config.driver = I.driver();
          }
          function X(ae) {
            return I._extend(ae), Z(), I._ready = I._initStorage(I._config), I._ready;
          }
          function J(ae) {
            return function() {
              var _e = 0;
              function Re() {
                for (; _e < ae.length; ) {
                  var ke = ae[_e];
                  return _e++, I._dbInfo = null, I._ready = null, I.getDriver(ke).then(X).catch(Re);
                }
                Z();
                var je = new Error("No available storage method found.");
                return I._driverSet = d.reject(je), I._driverSet;
              }
              return Re();
            };
          }
          var re = this._driverSet !== null ? this._driverSet.catch(function() {
            return d.resolve();
          }) : d.resolve();
          return this._driverSet = re.then(function() {
            var ae = $[0];
            return I._dbInfo = null, I._ready = null, I.getDriver(ae).then(function(_e) {
              I._driver = _e._driver, Z(), I._wrapLibraryMethodsWithReady(), I._initDriver = J($);
            });
          }).catch(function() {
            Z();
            var ae = new Error("No available storage method found.");
            return I._driverSet = d.reject(ae), I._driverSet;
          }), h(this._driverSet, M, O), this._driverSet;
        }, x.prototype.supports = function(S) {
          return !!ma[S];
        }, x.prototype._extend = function(S) {
          Ds(this, S);
        }, x.prototype._getSupportedDrivers = function(S) {
          for (var M = [], O = 0, I = S.length; O < I; O++) {
            var $ = S[O];
            this.supports($) && M.push($);
          }
          return M;
        }, x.prototype._wrapLibraryMethodsWithReady = function() {
          for (var S = 0, M = Cs.length; S < M; S++)
            wd(this, Cs[S]);
        }, x.prototype.createInstance = function(S) {
          return new x(S);
        }, x;
      }(), Ad = new Sd();
      r.exports = Ad;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(Th);
const Ft = /* @__PURE__ */ Object.create(null);
Ft.open = "0";
Ft.close = "1";
Ft.ping = "2";
Ft.pong = "3";
Ft.message = "4";
Ft.upgrade = "5";
Ft.noop = "6";
const Qr = /* @__PURE__ */ Object.create(null);
Object.keys(Ft).forEach((t) => {
  Qr[Ft[t]] = t;
});
const kh = { type: "error", data: "parser error" }, Ih = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Mh = typeof ArrayBuffer == "function", Oh = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, zc = ({ type: t, data: e }, n, r) => Ih && e instanceof Blob ? n ? r(e) : cl(e, r) : Mh && (e instanceof ArrayBuffer || Oh(e)) ? n ? r(e) : cl(new Blob([e]), r) : r(Ft[t] + (e || "")), cl = (t, e) => {
  const n = new FileReader();
  return n.onload = function() {
    const r = n.result.split(",")[1];
    e("b" + (r || ""));
  }, n.readAsDataURL(t);
}, ul = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", dr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < ul.length; t++)
  dr[ul.charCodeAt(t)] = t;
const Nh = (t) => {
  let e = t.length * 0.75, n = t.length, r, i = 0, s, o, a, c;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const l = new ArrayBuffer(e), u = new Uint8Array(l);
  for (r = 0; r < n; r += 4)
    s = dr[t.charCodeAt(r)], o = dr[t.charCodeAt(r + 1)], a = dr[t.charCodeAt(r + 2)], c = dr[t.charCodeAt(r + 3)], u[i++] = s << 2 | o >> 4, u[i++] = (o & 15) << 4 | a >> 2, u[i++] = (a & 3) << 6 | c & 63;
  return l;
}, Bh = typeof ArrayBuffer == "function", Fc = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: Uc(t, e)
    };
  const n = t.charAt(0);
  return n === "b" ? {
    type: "message",
    data: Ph(t.substring(1), e)
  } : Qr[n] ? t.length > 1 ? {
    type: Qr[n],
    data: t.substring(1)
  } : {
    type: Qr[n]
  } : kh;
}, Ph = (t, e) => {
  if (Bh) {
    const n = Nh(t);
    return Uc(n, e);
  } else
    return { base64: !0, data: t };
}, Uc = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof ArrayBuffer ? new Blob([t]) : t;
    case "arraybuffer":
    default:
      return t;
  }
}, Wc = String.fromCharCode(30), Lh = (t, e) => {
  const n = t.length, r = new Array(n);
  let i = 0;
  t.forEach((s, o) => {
    zc(s, !1, (a) => {
      r[o] = a, ++i === n && e(r.join(Wc));
    });
  });
}, Hh = (t, e) => {
  const n = t.split(Wc), r = [];
  for (let i = 0; i < n.length; i++) {
    const s = Fc(n[i], e);
    if (r.push(s), s.type === "error")
      break;
  }
  return r;
}, Vc = 4;
function Ye(t) {
  if (t)
    return zh(t);
}
function zh(t) {
  for (var e in Ye.prototype)
    t[e] = Ye.prototype[e];
  return t;
}
Ye.prototype.on = Ye.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
Ye.prototype.once = function(t, e) {
  function n() {
    this.off(t, n), e.apply(this, arguments);
  }
  return n.fn = e, this.on(t, n), this;
};
Ye.prototype.off = Ye.prototype.removeListener = Ye.prototype.removeAllListeners = Ye.prototype.removeEventListener = function(t, e) {
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
Ye.prototype.emit = function(t) {
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
Ye.prototype.emitReserved = Ye.prototype.emit;
Ye.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
Ye.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const St = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();
function jc(t, ...e) {
  return e.reduce((n, r) => (t.hasOwnProperty(r) && (n[r] = t[r]), n), {});
}
const Fh = St.setTimeout, Uh = St.clearTimeout;
function os(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = Fh.bind(St), t.clearTimeoutFn = Uh.bind(St)) : (t.setTimeoutFn = St.setTimeout.bind(St), t.clearTimeoutFn = St.clearTimeout.bind(St));
}
const Wh = 1.33;
function Vh(t) {
  return typeof t == "string" ? jh(t) : Math.ceil((t.byteLength || t.size) * Wh);
}
function jh(t) {
  let e = 0, n = 0;
  for (let r = 0, i = t.length; r < i; r++)
    e = t.charCodeAt(r), e < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (r++, n += 4);
  return n;
}
class $h extends Error {
  constructor(e, n, r) {
    super(e), this.description = n, this.context = r, this.type = "TransportError";
  }
}
class $c extends Ye {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, os(this, e), this.opts = e, this.query = e.query, this.socket = e.socket;
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
    return super.emitReserved("error", new $h(e, n, r)), this;
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
    const n = Fc(e, this.socket.binaryType);
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
const qc = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), no = 64, qh = {};
let fl = 0, Lr = 0, dl;
function hl(t) {
  let e = "";
  do
    e = qc[t % no] + e, t = Math.floor(t / no);
  while (t > 0);
  return e;
}
function Yc() {
  const t = hl(+/* @__PURE__ */ new Date());
  return t !== dl ? (fl = 0, dl = t) : t + "." + hl(fl++);
}
for (; Lr < no; Lr++)
  qh[qc[Lr]] = Lr;
function Gc(t) {
  let e = "";
  for (let n in t)
    t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
  return e;
}
function Yh(t) {
  let e = {}, n = t.split("&");
  for (let r = 0, i = n.length; r < i; r++) {
    let s = n[r].split("=");
    e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return e;
}
let Qc = !1;
try {
  Qc = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Gh = Qc;
function Zc(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || Gh))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new St[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function Qh() {
}
const Zh = function() {
  return new Zc({
    xdomain: !1
  }).responseType != null;
}();
class Xh extends $c {
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
    this.supportsBinary = Zh && !n;
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
    Hh(e, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
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
    this.writable = !1, Lh(e, (n) => {
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
    this.opts.timestampRequests !== !1 && (e[this.opts.timestampParam] = Yc()), !this.supportsBinary && !e.sid && (e.b64 = 1), this.opts.port && (n === "https" && Number(this.opts.port) !== 443 || n === "http" && Number(this.opts.port) !== 80) && (r = ":" + this.opts.port);
    const i = Gc(e), s = this.opts.hostname.indexOf(":") !== -1;
    return n + "://" + (s ? "[" + this.opts.hostname + "]" : this.opts.hostname) + r + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(e = {}) {
    return Object.assign(e, { xd: this.xd, xs: this.xs }, this.opts), new zt(this.uri(), e);
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
class zt extends Ye {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, n) {
    super(), os(this, n), this.opts = n, this.method = n.method || "GET", this.uri = e, this.async = n.async !== !1, this.data = n.data !== void 0 ? n.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    const e = jc(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    e.xdomain = !!this.opts.xd, e.xscheme = !!this.opts.xs;
    const n = this.xhr = new Zc(e);
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
    typeof document < "u" && (this.index = zt.requestsCount++, zt.requests[this.index] = this);
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
      if (this.xhr.onreadystatechange = Qh, e)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete zt.requests[this.index], this.xhr = null;
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
zt.requestsCount = 0;
zt.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", pl);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in St ? "pagehide" : "unload";
    addEventListener(t, pl, !1);
  }
}
function pl() {
  for (let t in zt.requests)
    zt.requests.hasOwnProperty(t) && zt.requests[t].abort();
}
const Xc = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, n) => n(e, 0))(), Hr = St.WebSocket || St.MozWebSocket, gl = !0, Kh = "arraybuffer", vl = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Jh extends $c {
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
    const e = this.uri(), n = this.opts.protocols, r = vl ? {} : jc(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = gl && !vl ? n ? new Hr(e, n) : new Hr(e) : new Hr(e, n, r);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this.ws.binaryType = this.socket.binaryType || Kh, this.addEventListeners();
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
      zc(r, this.supportsBinary, (s) => {
        const o = {};
        try {
          gl && this.ws.send(s);
        } catch {
        }
        i && Xc(() => {
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
    this.opts.port && (n === "wss" && Number(this.opts.port) !== 443 || n === "ws" && Number(this.opts.port) !== 80) && (r = ":" + this.opts.port), this.opts.timestampRequests && (e[this.opts.timestampParam] = Yc()), this.supportsBinary || (e.b64 = 1);
    const i = Gc(e), s = this.opts.hostname.indexOf(":") !== -1;
    return n + "://" + (s ? "[" + this.opts.hostname + "]" : this.opts.hostname) + r + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!Hr;
  }
}
const ep = {
  websocket: Jh,
  polling: Xh
}, tp = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, np = [
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
function ro(t) {
  const e = t, n = t.indexOf("["), r = t.indexOf("]");
  n != -1 && r != -1 && (t = t.substring(0, n) + t.substring(n, r).replace(/:/g, ";") + t.substring(r, t.length));
  let i = tp.exec(t || ""), s = {}, o = 14;
  for (; o--; )
    s[np[o]] = i[o] || "";
  return n != -1 && r != -1 && (s.source = e, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = rp(s, s.path), s.queryKey = ip(s, s.query), s;
}
function rp(t, e) {
  const n = /\/{2,9}/g, r = e.replace(n, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && r.splice(0, 1), e.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function ip(t, e) {
  const n = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, i, s) {
    i && (n[i] = s);
  }), n;
}
let Kc = class zn extends Ye {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, n = {}) {
    super(), this.writeBuffer = [], e && typeof e == "object" && (n = e, e = null), e ? (e = ro(e), n.hostname = e.host, n.secure = e.protocol === "https" || e.protocol === "wss", n.port = e.port, e.query && (n.query = e.query)) : n.host && (n.hostname = ro(n.host).host), os(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = n.transports || ["polling", "websocket"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
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
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Yh(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
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
    n.EIO = Vc, n.transport = e, this.id && (n.sid = this.id);
    const r = Object.assign({}, this.opts.transportOptions[e], this.opts, {
      query: n,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new ep[e](r);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let e;
    if (this.opts.rememberUpgrade && zn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
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
    zn.priorWebsocketSuccess = !1;
    const i = () => {
      r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (d) => {
        if (!r)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            zn.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
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
    if (this.readyState = "open", zn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
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
      if (i && (n += Vh(i)), r > 0 && n > this.maxPayload)
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
    zn.priorWebsocketSuccess = !1, this.emitReserved("error", e), this.onClose("transport error", e);
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
Kc.protocol = Vc;
function sp(t, e = "", n) {
  let r = t;
  n = n || typeof location < "u" && location, t == null && (t = n.protocol + "//" + n.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = n.protocol + t : t = n.host + t), /^(https?|wss?):\/\//.test(t) || (typeof n < "u" ? t = n.protocol + "//" + t : t = "https://" + t), r = ro(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const s = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + s + ":" + r.port + e, r.href = r.protocol + "://" + s + (n && n.port === r.port ? "" : ":" + r.port), r;
}
const op = typeof ArrayBuffer == "function", ap = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, Jc = Object.prototype.toString, lp = typeof Blob == "function" || typeof Blob < "u" && Jc.call(Blob) === "[object BlobConstructor]", cp = typeof File == "function" || typeof File < "u" && Jc.call(File) === "[object FileConstructor]";
function Oo(t) {
  return op && (t instanceof ArrayBuffer || ap(t)) || lp && t instanceof Blob || cp && t instanceof File;
}
function Zr(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let n = 0, r = t.length; n < r; n++)
      if (Zr(t[n]))
        return !0;
    return !1;
  }
  if (Oo(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return Zr(t.toJSON(), !0);
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && Zr(t[n]))
      return !0;
  return !1;
}
function up(t) {
  const e = [], n = t.data, r = t;
  return r.data = io(n, e), r.attachments = e.length, { packet: r, buffers: e };
}
function io(t, e) {
  if (!t)
    return t;
  if (Oo(t)) {
    const n = { _placeholder: !0, num: e.length };
    return e.push(t), n;
  } else if (Array.isArray(t)) {
    const n = new Array(t.length);
    for (let r = 0; r < t.length; r++)
      n[r] = io(t[r], e);
    return n;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const n = {};
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (n[r] = io(t[r], e));
    return n;
  }
  return t;
}
function fp(t, e) {
  return t.data = so(t.data, e), delete t.attachments, t;
}
function so(t, e) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
      return e[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let n = 0; n < t.length; n++)
      t[n] = so(t[n], e);
  else if (typeof t == "object")
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (t[n] = so(t[n], e));
  return t;
}
const dp = 5;
var Ae;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(Ae || (Ae = {}));
class hp {
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
    return (e.type === Ae.EVENT || e.type === Ae.ACK) && Zr(e) ? this.encodeAsBinary({
      type: e.type === Ae.EVENT ? Ae.BINARY_EVENT : Ae.BINARY_ACK,
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
    return (e.type === Ae.BINARY_EVENT || e.type === Ae.BINARY_ACK) && (n += e.attachments + "-"), e.nsp && e.nsp !== "/" && (n += e.nsp + ","), e.id != null && (n += e.id), e.data != null && (n += JSON.stringify(e.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const n = up(e), r = this.encodeAsString(n.packet), i = n.buffers;
    return i.unshift(r), i;
  }
}
class No extends Ye {
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
      const r = n.type === Ae.BINARY_EVENT;
      r || n.type === Ae.BINARY_ACK ? (n.type = r ? Ae.EVENT : Ae.ACK, this.reconstructor = new pp(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (Oo(e) || e.base64)
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
    if (Ae[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === Ae.BINARY_EVENT || r.type === Ae.BINARY_ACK) {
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
      if (No.isPayloadValid(r.type, s))
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
      case Ae.CONNECT:
        return typeof n == "object";
      case Ae.DISCONNECT:
        return n === void 0;
      case Ae.CONNECT_ERROR:
        return typeof n == "string" || typeof n == "object";
      case Ae.EVENT:
      case Ae.BINARY_EVENT:
        return Array.isArray(n) && n.length > 0;
      case Ae.ACK:
      case Ae.BINARY_ACK:
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
class pp {
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
      const n = fp(this.reconPack, this.buffers);
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
const gp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: No,
  Encoder: hp,
  get PacketType() {
    return Ae;
  },
  protocol: dp
}, Symbol.toStringTag, { value: "Module" }));
function Tt(t, e, n) {
  return t.on(e, n), function() {
    t.off(e, n);
  };
}
const vp = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class eu extends Ye {
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
      Tt(e, "open", this.onopen.bind(this)),
      Tt(e, "packet", this.onpacket.bind(this)),
      Tt(e, "error", this.onerror.bind(this)),
      Tt(e, "close", this.onclose.bind(this))
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
    if (vp.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (n.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const r = {
      type: Ae.EVENT,
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
      type: Ae.CONNECT,
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
        case Ae.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case Ae.EVENT:
        case Ae.BINARY_EVENT:
          this.onevent(e);
          break;
        case Ae.ACK:
        case Ae.BINARY_ACK:
          this.onack(e);
          break;
        case Ae.DISCONNECT:
          this.ondisconnect();
          break;
        case Ae.CONNECT_ERROR:
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
        type: Ae.ACK,
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
    return this.connected && this.packet({ type: Ae.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function er(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
er.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), n = Math.floor(e * this.jitter * t);
    t = Math.floor(e * 10) & 1 ? t + n : t - n;
  }
  return Math.min(t, this.max) | 0;
};
er.prototype.reset = function() {
  this.attempts = 0;
};
er.prototype.setMin = function(t) {
  this.ms = t;
};
er.prototype.setMax = function(t) {
  this.max = t;
};
er.prototype.setJitter = function(t) {
  this.jitter = t;
};
class oo extends Ye {
  constructor(e, n) {
    var r;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (n = e, e = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, os(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new er({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = e;
    const i = n.parser || gp;
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
    this.engine = new Kc(this.uri, this.opts);
    const n = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = Tt(n, "open", function() {
      r.onopen(), e && e();
    }), s = Tt(n, "error", (o) => {
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
    this.subs.push(Tt(e, "ping", this.onping.bind(this)), Tt(e, "data", this.ondata.bind(this)), Tt(e, "error", this.onerror.bind(this)), Tt(e, "close", this.onclose.bind(this)), Tt(this.decoder, "decoded", this.ondecoded.bind(this)));
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
    Xc(() => {
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
    return r ? this._autoConnect && !r.active && r.connect() : (r = new eu(this, e, n), this.nsps[e] = r), r;
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
const ar = {};
function Os(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const n = sp(t, e.path || "/socket.io"), r = n.source, i = n.id, s = n.path, o = ar[i] && s in ar[i].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let c;
  return a ? c = new oo(r, e) : (ar[i] || (ar[i] = new oo(r, e)), c = ar[i]), n.query && !e.query && (e.query = n.queryKey), c.socket(n.path, e);
}
Object.assign(Os, {
  Manager: oo,
  Socket: eu,
  io: Os,
  connect: Os
});
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Wn = 9e15, mn = 1e9, ao = "0123456789abcdef", Fi = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Ui = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", lo = {
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
  minE: -Wn,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Wn,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, tu, Zt, ye = !0, as = "[DecimalError] ", pn = as + "Invalid argument: ", nu = as + "Precision limit exceeded", ru = as + "crypto unavailable", iu = "[object Decimal]", ot = Math.floor, Ze = Math.pow, mp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, bp = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, yp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, su = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Ot = 1e7, de = 7, xp = 9007199254740991, _p = Fi.length - 1, co = Ui.length - 1, G = { toStringTag: iu };
G.absoluteValue = G.abs = function() {
  var t = new this.constructor(this);
  return t.s < 0 && (t.s = 1), ce(t);
};
G.ceil = function() {
  return ce(new this.constructor(this), this.e + 1, 2);
};
G.clampedTo = G.clamp = function(t, e) {
  var n, r = this, i = r.constructor;
  if (t = new i(t), e = new i(e), !t.s || !e.s)
    return new i(NaN);
  if (t.gt(e))
    throw Error(pn + e);
  return n = r.cmp(t), n < 0 ? t : r.cmp(e) > 0 ? e : new i(r);
};
G.comparedTo = G.cmp = function(t) {
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
G.cosine = G.cos = function() {
  var t, e, n = this, r = n.constructor;
  return n.d ? n.d[0] ? (t = r.precision, e = r.rounding, r.precision = t + Math.max(n.e, n.sd()) + de, r.rounding = 1, n = Ep(r, uu(r, n)), r.precision = t, r.rounding = e, ce(Zt == 2 || Zt == 3 ? n.neg() : n, t, e, !0)) : new r(1) : new r(NaN);
};
G.cubeRoot = G.cbrt = function() {
  var t, e, n, r, i, s, o, a, c, l, u = this, d = u.constructor;
  if (!u.isFinite() || u.isZero())
    return new d(u);
  for (ye = !1, s = u.s * Ze(u.s * u, 1 / 3), !s || Math.abs(s) == 1 / 0 ? (n = rt(u.d), t = u.e, (s = (t - n.length + 1) % 3) && (n += s == 1 || s == -2 ? "0" : "00"), s = Ze(n, 1 / 3), t = ot((t + 1) / 3) - (t % 3 == (t < 0 ? -1 : 2)), s == 1 / 0 ? n = "5e" + t : (n = s.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + t), r = new d(n), r.s = u.s) : r = new d(s.toString()), o = (t = d.precision) + 3; ; )
    if (a = r, c = a.times(a).times(a), l = c.plus(u), r = Ie(l.plus(u).times(a), l.plus(c), o + 2, 1), rt(a.d).slice(0, o) === (n = rt(r.d)).slice(0, o))
      if (n = n.slice(o - 3, o + 1), n == "9999" || !i && n == "4999") {
        if (!i && (ce(a, t + 1, 0), a.times(a).times(a).eq(u))) {
          r = a;
          break;
        }
        o += 4, i = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (ce(r, t + 1, 1), e = !r.times(r).times(r).eq(u));
        break;
      }
  return ye = !0, ce(r, t, d.rounding, e);
};
G.decimalPlaces = G.dp = function() {
  var t, e = this.d, n = NaN;
  if (e) {
    if (t = e.length - 1, n = (t - ot(this.e / de)) * de, t = e[t], t)
      for (; t % 10 == 0; t /= 10)
        n--;
    n < 0 && (n = 0);
  }
  return n;
};
G.dividedBy = G.div = function(t) {
  return Ie(this, new this.constructor(t));
};
G.dividedToIntegerBy = G.divToInt = function(t) {
  var e = this, n = e.constructor;
  return ce(Ie(e, new n(t), 0, 1, 1), n.precision, n.rounding);
};
G.equals = G.eq = function(t) {
  return this.cmp(t) === 0;
};
G.floor = function() {
  return ce(new this.constructor(this), this.e + 1, 3);
};
G.greaterThan = G.gt = function(t) {
  return this.cmp(t) > 0;
};
G.greaterThanOrEqualTo = G.gte = function(t) {
  var e = this.cmp(t);
  return e == 1 || e === 0;
};
G.hyperbolicCosine = G.cosh = function() {
  var t, e, n, r, i, s = this, o = s.constructor, a = new o(1);
  if (!s.isFinite())
    return new o(s.s ? 1 / 0 : NaN);
  if (s.isZero())
    return a;
  n = o.precision, r = o.rounding, o.precision = n + Math.max(s.e, s.sd()) + 4, o.rounding = 1, i = s.d.length, i < 32 ? (t = Math.ceil(i / 3), e = (1 / cs(4, t)).toString()) : (t = 16, e = "2.3283064365386962890625e-10"), s = Qn(o, 1, s.times(e), new o(1), !0);
  for (var c, l = t, u = new o(8); l--; )
    c = s.times(s), s = a.minus(c.times(u.minus(c.times(u))));
  return ce(s, o.precision = n, o.rounding = r, !0);
};
G.hyperbolicSine = G.sinh = function() {
  var t, e, n, r, i = this, s = i.constructor;
  if (!i.isFinite() || i.isZero())
    return new s(i);
  if (e = s.precision, n = s.rounding, s.precision = e + Math.max(i.e, i.sd()) + 4, s.rounding = 1, r = i.d.length, r < 3)
    i = Qn(s, 2, i, i, !0);
  else {
    t = 1.4 * Math.sqrt(r), t = t > 16 ? 16 : t | 0, i = i.times(1 / cs(5, t)), i = Qn(s, 2, i, i, !0);
    for (var o, a = new s(5), c = new s(16), l = new s(20); t--; )
      o = i.times(i), i = i.times(a.plus(o.times(c.times(o).plus(l))));
  }
  return s.precision = e, s.rounding = n, ce(i, e, n, !0);
};
G.hyperbolicTangent = G.tanh = function() {
  var t, e, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (t = r.precision, e = r.rounding, r.precision = t + 7, r.rounding = 1, Ie(n.sinh(), n.cosh(), r.precision = t, r.rounding = e)) : new r(n.s);
};
G.inverseCosine = G.acos = function() {
  var t, e = this, n = e.constructor, r = e.abs().cmp(1), i = n.precision, s = n.rounding;
  return r !== -1 ? r === 0 ? e.isNeg() ? It(n, i, s) : new n(0) : new n(NaN) : e.isZero() ? It(n, i + 4, s).times(0.5) : (n.precision = i + 6, n.rounding = 1, e = e.asin(), t = It(n, i + 4, s).times(0.5), n.precision = i, n.rounding = s, t.minus(e));
};
G.inverseHyperbolicCosine = G.acosh = function() {
  var t, e, n = this, r = n.constructor;
  return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (t = r.precision, e = r.rounding, r.precision = t + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, ye = !1, n = n.times(n).minus(1).sqrt().plus(n), ye = !0, r.precision = t, r.rounding = e, n.ln()) : new r(n);
};
G.inverseHyperbolicSine = G.asinh = function() {
  var t, e, n = this, r = n.constructor;
  return !n.isFinite() || n.isZero() ? new r(n) : (t = r.precision, e = r.rounding, r.precision = t + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, ye = !1, n = n.times(n).plus(1).sqrt().plus(n), ye = !0, r.precision = t, r.rounding = e, n.ln());
};
G.inverseHyperbolicTangent = G.atanh = function() {
  var t, e, n, r, i = this, s = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (t = s.precision, e = s.rounding, r = i.sd(), Math.max(r, t) < 2 * -i.e - 1 ? ce(new s(i), t, e, !0) : (s.precision = n = r - i.e, i = Ie(i.plus(1), new s(1).minus(i), n + t, 1), s.precision = t + 4, s.rounding = 1, i = i.ln(), s.precision = t, s.rounding = e, i.times(0.5))) : new s(NaN);
};
G.inverseSine = G.asin = function() {
  var t, e, n, r, i = this, s = i.constructor;
  return i.isZero() ? new s(i) : (e = i.abs().cmp(1), n = s.precision, r = s.rounding, e !== -1 ? e === 0 ? (t = It(s, n + 4, r).times(0.5), t.s = i.s, t) : new s(NaN) : (s.precision = n + 6, s.rounding = 1, i = i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan(), s.precision = n, s.rounding = r, i.times(2)));
};
G.inverseTangent = G.atan = function() {
  var t, e, n, r, i, s, o, a, c, l = this, u = l.constructor, d = u.precision, f = u.rounding;
  if (l.isFinite()) {
    if (l.isZero())
      return new u(l);
    if (l.abs().eq(1) && d + 4 <= co)
      return o = It(u, d + 4, f).times(0.25), o.s = l.s, o;
  } else {
    if (!l.s)
      return new u(NaN);
    if (d + 4 <= co)
      return o = It(u, d + 4, f).times(0.5), o.s = l.s, o;
  }
  for (u.precision = a = d + 10, u.rounding = 1, n = Math.min(28, a / de + 2 | 0), t = n; t; --t)
    l = l.div(l.times(l).plus(1).sqrt().plus(1));
  for (ye = !1, e = Math.ceil(a / de), r = 1, c = l.times(l), o = new u(l), i = l; t !== -1; )
    if (i = i.times(c), s = o.minus(i.div(r += 2)), i = i.times(c), o = s.plus(i.div(r += 2)), o.d[e] !== void 0)
      for (t = e; o.d[t] === s.d[t] && t--; )
        ;
  return n && (o = o.times(2 << n - 1)), ye = !0, ce(o, u.precision = d, u.rounding = f, !0);
};
G.isFinite = function() {
  return !!this.d;
};
G.isInteger = G.isInt = function() {
  return !!this.d && ot(this.e / de) > this.d.length - 2;
};
G.isNaN = function() {
  return !this.s;
};
G.isNegative = G.isNeg = function() {
  return this.s < 0;
};
G.isPositive = G.isPos = function() {
  return this.s > 0;
};
G.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
G.lessThan = G.lt = function(t) {
  return this.cmp(t) < 0;
};
G.lessThanOrEqualTo = G.lte = function(t) {
  return this.cmp(t) < 1;
};
G.logarithm = G.log = function(t) {
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
  if (ye = !1, a = d + h, o = ln(l, a), r = e ? Wi(u, a + 10) : ln(t, a), c = Ie(o, r, a, 1), br(c.d, i = d, f))
    do
      if (a += 10, o = ln(l, a), r = e ? Wi(u, a + 10) : ln(t, a), c = Ie(o, r, a, 1), !s) {
        +rt(c.d).slice(i + 1, i + 15) + 1 == 1e14 && (c = ce(c, d + 1, 0));
        break;
      }
    while (br(c.d, i += 10, f));
  return ye = !0, ce(c, d, f);
};
G.minus = G.sub = function(t) {
  var e, n, r, i, s, o, a, c, l, u, d, f, h = this, g = h.constructor;
  if (t = new g(t), !h.d || !t.d)
    return !h.s || !t.s ? t = new g(NaN) : h.d ? t.s = -t.s : t = new g(t.d || h.s !== t.s ? h : NaN), t;
  if (h.s != t.s)
    return t.s = -t.s, h.plus(t);
  if (l = h.d, f = t.d, a = g.precision, c = g.rounding, !l[0] || !f[0]) {
    if (f[0])
      t.s = -t.s;
    else if (l[0])
      t = new g(h);
    else
      return new g(c === 3 ? -0 : 0);
    return ye ? ce(t, a, c) : t;
  }
  if (n = ot(t.e / de), u = ot(h.e / de), l = l.slice(), s = u - n, s) {
    for (d = s < 0, d ? (e = l, s = -s, o = f.length) : (e = f, n = u, o = l.length), r = Math.max(Math.ceil(a / de), o) + 2, s > r && (s = r, e.length = 1), e.reverse(), r = s; r--; )
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
        l[i] = Ot - 1;
      --l[i], l[r] += Ot;
    }
    l[r] -= f[r];
  }
  for (; l[--o] === 0; )
    l.pop();
  for (; l[0] === 0; l.shift())
    --n;
  return l[0] ? (t.d = l, t.e = ls(l, n), ye ? ce(t, a, c) : t) : new g(c === 3 ? -0 : 0);
};
G.modulo = G.mod = function(t) {
  var e, n = this, r = n.constructor;
  return t = new r(t), !n.d || !t.s || t.d && !t.d[0] ? new r(NaN) : !t.d || n.d && !n.d[0] ? ce(new r(n), r.precision, r.rounding) : (ye = !1, r.modulo == 9 ? (e = Ie(n, t.abs(), 0, 3, 1), e.s *= t.s) : e = Ie(n, t, 0, r.modulo, 1), e = e.times(t), ye = !0, n.minus(e));
};
G.naturalExponential = G.exp = function() {
  return uo(this);
};
G.naturalLogarithm = G.ln = function() {
  return ln(this);
};
G.negated = G.neg = function() {
  var t = new this.constructor(this);
  return t.s = -t.s, ce(t);
};
G.plus = G.add = function(t) {
  var e, n, r, i, s, o, a, c, l, u, d = this, f = d.constructor;
  if (t = new f(t), !d.d || !t.d)
    return !d.s || !t.s ? t = new f(NaN) : d.d || (t = new f(t.d || d.s === t.s ? d : NaN)), t;
  if (d.s != t.s)
    return t.s = -t.s, d.minus(t);
  if (l = d.d, u = t.d, a = f.precision, c = f.rounding, !l[0] || !u[0])
    return u[0] || (t = new f(d)), ye ? ce(t, a, c) : t;
  if (s = ot(d.e / de), r = ot(t.e / de), l = l.slice(), i = s - r, i) {
    for (i < 0 ? (n = l, i = -i, o = u.length) : (n = u, r = s, o = l.length), s = Math.ceil(a / de), o = s > o ? s + 1 : o + 1, i > o && (i = o, n.length = 1), n.reverse(); i--; )
      n.push(0);
    n.reverse();
  }
  for (o = l.length, i = u.length, o - i < 0 && (i = o, n = u, u = l, l = n), e = 0; i; )
    e = (l[--i] = l[i] + u[i] + e) / Ot | 0, l[i] %= Ot;
  for (e && (l.unshift(e), ++r), o = l.length; l[--o] == 0; )
    l.pop();
  return t.d = l, t.e = ls(l, r), ye ? ce(t, a, c) : t;
};
G.precision = G.sd = function(t) {
  var e, n = this;
  if (t !== void 0 && t !== !!t && t !== 1 && t !== 0)
    throw Error(pn + t);
  return n.d ? (e = ou(n.d), t && n.e + 1 > e && (e = n.e + 1)) : e = NaN, e;
};
G.round = function() {
  var t = this, e = t.constructor;
  return ce(new e(t), t.e + 1, e.rounding);
};
G.sine = G.sin = function() {
  var t, e, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (t = r.precision, e = r.rounding, r.precision = t + Math.max(n.e, n.sd()) + de, r.rounding = 1, n = Sp(r, uu(r, n)), r.precision = t, r.rounding = e, ce(Zt > 2 ? n.neg() : n, t, e, !0)) : new r(NaN);
};
G.squareRoot = G.sqrt = function() {
  var t, e, n, r, i, s, o = this, a = o.d, c = o.e, l = o.s, u = o.constructor;
  if (l !== 1 || !a || !a[0])
    return new u(!l || l < 0 && (!a || a[0]) ? NaN : a ? o : 1 / 0);
  for (ye = !1, l = Math.sqrt(+o), l == 0 || l == 1 / 0 ? (e = rt(a), (e.length + c) % 2 == 0 && (e += "0"), l = Math.sqrt(e), c = ot((c + 1) / 2) - (c < 0 || c % 2), l == 1 / 0 ? e = "5e" + c : (e = l.toExponential(), e = e.slice(0, e.indexOf("e") + 1) + c), r = new u(e)) : r = new u(l.toString()), n = (c = u.precision) + 3; ; )
    if (s = r, r = s.plus(Ie(o, s, n + 2, 1)).times(0.5), rt(s.d).slice(0, n) === (e = rt(r.d)).slice(0, n))
      if (e = e.slice(n - 3, n + 1), e == "9999" || !i && e == "4999") {
        if (!i && (ce(s, c + 1, 0), s.times(s).eq(o))) {
          r = s;
          break;
        }
        n += 4, i = 1;
      } else {
        (!+e || !+e.slice(1) && e.charAt(0) == "5") && (ce(r, c + 1, 1), t = !r.times(r).eq(o));
        break;
      }
  return ye = !0, ce(r, c, u.rounding, t);
};
G.tangent = G.tan = function() {
  var t, e, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (t = r.precision, e = r.rounding, r.precision = t + 10, r.rounding = 1, n = n.sin(), n.s = 1, n = Ie(n, new r(1).minus(n.times(n)).sqrt(), t + 10, 0), r.precision = t, r.rounding = e, ce(Zt == 2 || Zt == 4 ? n.neg() : n, t, e, !0)) : new r(NaN);
};
G.times = G.mul = function(t) {
  var e, n, r, i, s, o, a, c, l, u = this, d = u.constructor, f = u.d, h = (t = new d(t)).d;
  if (t.s *= u.s, !f || !f[0] || !h || !h[0])
    return new d(!t.s || f && !f[0] && !h || h && !h[0] && !f ? NaN : !f || !h ? t.s / 0 : t.s * 0);
  for (n = ot(u.e / de) + ot(t.e / de), c = f.length, l = h.length, c < l && (s = f, f = h, h = s, o = c, c = l, l = o), s = [], o = c + l, r = o; r--; )
    s.push(0);
  for (r = l; --r >= 0; ) {
    for (e = 0, i = c + r; i > r; )
      a = s[i] + h[r] * f[i - r - 1] + e, s[i--] = a % Ot | 0, e = a / Ot | 0;
    s[i] = (s[i] + e) % Ot | 0;
  }
  for (; !s[--o]; )
    s.pop();
  return e ? ++n : s.shift(), t.d = s, t.e = ls(s, n), ye ? ce(t, d.precision, d.rounding) : t;
};
G.toBinary = function(t, e) {
  return Bo(this, 2, t, e);
};
G.toDecimalPlaces = G.toDP = function(t, e) {
  var n = this, r = n.constructor;
  return n = new r(n), t === void 0 ? n : (pt(t, 0, mn), e === void 0 ? e = r.rounding : pt(e, 0, 8), ce(n, t + n.e + 1, e));
};
G.toExponential = function(t, e) {
  var n, r = this, i = r.constructor;
  return t === void 0 ? n = Ut(r, !0) : (pt(t, 0, mn), e === void 0 ? e = i.rounding : pt(e, 0, 8), r = ce(new i(r), t + 1, e), n = Ut(r, !0, t + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
G.toFixed = function(t, e) {
  var n, r, i = this, s = i.constructor;
  return t === void 0 ? n = Ut(i) : (pt(t, 0, mn), e === void 0 ? e = s.rounding : pt(e, 0, 8), r = ce(new s(i), t + i.e + 1, e), n = Ut(r, !1, t + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
};
G.toFraction = function(t) {
  var e, n, r, i, s, o, a, c, l, u, d, f, h = this, g = h.d, p = h.constructor;
  if (!g)
    return new p(h);
  if (l = n = new p(1), r = c = new p(0), e = new p(r), s = e.e = ou(g) - h.e - 1, o = s % de, e.d[0] = Ze(10, o < 0 ? de + o : o), t == null)
    t = s > 0 ? e : l;
  else {
    if (a = new p(t), !a.isInt() || a.lt(l))
      throw Error(pn + a);
    t = a.gt(e) ? s > 0 ? e : l : a;
  }
  for (ye = !1, a = new p(rt(g)), u = p.precision, p.precision = s = g.length * de * 2; d = Ie(a, e, 0, 1, 1), i = n.plus(d.times(r)), i.cmp(t) != 1; )
    n = r, r = i, i = l, l = c.plus(d.times(i)), c = i, i = e, e = a.minus(d.times(i)), a = i;
  return i = Ie(t.minus(n), r, 0, 1, 1), c = c.plus(i.times(l)), n = n.plus(i.times(r)), c.s = l.s = h.s, f = Ie(l, r, s, 1).minus(h).abs().cmp(Ie(c, n, s, 1).minus(h).abs()) < 1 ? [l, r] : [c, n], p.precision = u, ye = !0, f;
};
G.toHexadecimal = G.toHex = function(t, e) {
  return Bo(this, 16, t, e);
};
G.toNearest = function(t, e) {
  var n = this, r = n.constructor;
  if (n = new r(n), t == null) {
    if (!n.d)
      return n;
    t = new r(1), e = r.rounding;
  } else {
    if (t = new r(t), e === void 0 ? e = r.rounding : pt(e, 0, 8), !n.d)
      return t.s ? n : t;
    if (!t.d)
      return t.s && (t.s = n.s), t;
  }
  return t.d[0] ? (ye = !1, n = Ie(n, t, 0, e, 1).times(t), ye = !0, ce(n)) : (t.s = n.s, n = t), n;
};
G.toNumber = function() {
  return +this;
};
G.toOctal = function(t, e) {
  return Bo(this, 8, t, e);
};
G.toPower = G.pow = function(t) {
  var e, n, r, i, s, o, a = this, c = a.constructor, l = +(t = new c(t));
  if (!a.d || !t.d || !a.d[0] || !t.d[0])
    return new c(Ze(+a, l));
  if (a = new c(a), a.eq(1))
    return a;
  if (r = c.precision, s = c.rounding, t.eq(1))
    return ce(a, r, s);
  if (e = ot(t.e / de), e >= t.d.length - 1 && (n = l < 0 ? -l : l) <= xp)
    return i = au(c, a, n, r), t.s < 0 ? new c(1).div(i) : ce(i, r, s);
  if (o = a.s, o < 0) {
    if (e < t.d.length - 1)
      return new c(NaN);
    if (t.d[e] & 1 || (o = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
      return a.s = o, a;
  }
  return n = Ze(+a, l), e = n == 0 || !isFinite(n) ? ot(l * (Math.log("0." + rt(a.d)) / Math.LN10 + a.e + 1)) : new c(n + "").e, e > c.maxE + 1 || e < c.minE - 1 ? new c(e > 0 ? o / 0 : 0) : (ye = !1, c.rounding = a.s = 1, n = Math.min(12, (e + "").length), i = uo(t.times(ln(a, r + n)), r), i.d && (i = ce(i, r + 5, 1), br(i.d, r, s) && (e = r + 10, i = ce(uo(t.times(ln(a, e + n)), e), e + 5, 1), +rt(i.d).slice(r + 1, r + 15) + 1 == 1e14 && (i = ce(i, r + 1, 0)))), i.s = o, ye = !0, c.rounding = s, ce(i, r, s));
};
G.toPrecision = function(t, e) {
  var n, r = this, i = r.constructor;
  return t === void 0 ? n = Ut(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (pt(t, 1, mn), e === void 0 ? e = i.rounding : pt(e, 0, 8), r = ce(new i(r), t, e), n = Ut(r, t <= r.e || r.e <= i.toExpNeg, t)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
G.toSignificantDigits = G.toSD = function(t, e) {
  var n = this, r = n.constructor;
  return t === void 0 ? (t = r.precision, e = r.rounding) : (pt(t, 1, mn), e === void 0 ? e = r.rounding : pt(e, 0, 8)), ce(new r(n), t, e);
};
G.toString = function() {
  var t = this, e = t.constructor, n = Ut(t, t.e <= e.toExpNeg || t.e >= e.toExpPos);
  return t.isNeg() && !t.isZero() ? "-" + n : n;
};
G.truncated = G.trunc = function() {
  return ce(new this.constructor(this), this.e + 1, 1);
};
G.valueOf = G.toJSON = function() {
  var t = this, e = t.constructor, n = Ut(t, t.e <= e.toExpNeg || t.e >= e.toExpPos);
  return t.isNeg() ? "-" + n : n;
};
function rt(t) {
  var e, n, r, i = t.length - 1, s = "", o = t[0];
  if (i > 0) {
    for (s += o, e = 1; e < i; e++)
      r = t[e] + "", n = de - r.length, n && (s += on(n)), s += r;
    o = t[e], r = o + "", n = de - r.length, n && (s += on(n));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; )
    o /= 10;
  return s + o;
}
function pt(t, e, n) {
  if (t !== ~~t || t < e || t > n)
    throw Error(pn + t);
}
function br(t, e, n, r) {
  var i, s, o, a;
  for (s = t[0]; s >= 10; s /= 10)
    --e;
  return --e < 0 ? (e += de, i = 0) : (i = Math.ceil((e + 1) / de), e %= de), s = Ze(10, de - e), a = t[i] % s | 0, r == null ? e < 3 ? (e == 0 ? a = a / 100 | 0 : e == 1 && (a = a / 10 | 0), o = n < 4 && a == 99999 || n > 3 && a == 49999 || a == 5e4 || a == 0) : o = (n < 4 && a + 1 == s || n > 3 && a + 1 == s / 2) && (t[i + 1] / s / 100 | 0) == Ze(10, e - 2) - 1 || (a == s / 2 || a == 0) && (t[i + 1] / s / 100 | 0) == 0 : e < 4 ? (e == 0 ? a = a / 1e3 | 0 : e == 1 ? a = a / 100 | 0 : e == 2 && (a = a / 10 | 0), o = (r || n < 4) && a == 9999 || !r && n > 3 && a == 4999) : o = ((r || n < 4) && a + 1 == s || !r && n > 3 && a + 1 == s / 2) && (t[i + 1] / s / 1e3 | 0) == Ze(10, e - 3) - 1, o;
}
function Xr(t, e, n) {
  for (var r, i = [0], s, o = 0, a = t.length; o < a; ) {
    for (s = i.length; s--; )
      i[s] *= e;
    for (i[0] += ao.indexOf(t.charAt(o++)), r = 0; r < i.length; r++)
      i[r] > n - 1 && (i[r + 1] === void 0 && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n);
  }
  return i.reverse();
}
function Ep(t, e) {
  var n, r, i;
  if (e.isZero())
    return e;
  r = e.d.length, r < 32 ? (n = Math.ceil(r / 3), i = (1 / cs(4, n)).toString()) : (n = 16, i = "2.3283064365386962890625e-10"), t.precision += n, e = Qn(t, 1, e.times(i), new t(1));
  for (var s = n; s--; ) {
    var o = e.times(e);
    e = o.times(o).minus(o).times(8).plus(1);
  }
  return t.precision -= n, e;
}
var Ie = function() {
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
    var l, u, d, f, h, g, p, v, _, y, m, b, E, A, w, D, B, C, k, P, N = r.constructor, W = r.s == i.s ? 1 : -1, z = r.d, q = i.d;
    if (!z || !z[0] || !q || !q[0])
      return new N(
        // Return NaN if either NaN, or both Infinity or 0.
        !r.s || !i.s || (z ? q && z[0] == q[0] : !q) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          z && z[0] == 0 || !q ? W * 0 : W / 0
        )
      );
    for (c ? (h = 1, u = r.e - i.e) : (c = Ot, h = de, u = ot(r.e / h) - ot(i.e / h)), k = q.length, B = z.length, _ = new N(W), y = _.d = [], d = 0; q[d] == (z[d] || 0); d++)
      ;
    if (q[d] > (z[d] || 0) && u--, s == null ? (A = s = N.precision, o = N.rounding) : a ? A = s + (r.e - i.e) + 1 : A = s, A < 0)
      y.push(1), g = !0;
    else {
      if (A = A / h + 2 | 0, d = 0, k == 1) {
        for (f = 0, q = q[0], A++; (d < B || f) && A--; d++)
          w = f * c + (z[d] || 0), y[d] = w / q | 0, f = w % q | 0;
        g = f || d < B;
      } else {
        for (f = c / (q[0] + 1) | 0, f > 1 && (q = t(q, f, c), z = t(z, f, c), k = q.length, B = z.length), D = k, m = z.slice(0, k), b = m.length; b < k; )
          m[b++] = 0;
        P = q.slice(), P.unshift(0), C = q[0], q[1] >= c / 2 && ++C;
        do
          f = 0, l = e(q, m, k, b), l < 0 ? (E = m[0], k != b && (E = E * c + (m[1] || 0)), f = E / C | 0, f > 1 ? (f >= c && (f = c - 1), p = t(q, f, c), v = p.length, b = m.length, l = e(p, m, v, b), l == 1 && (f--, n(p, k < v ? P : q, v, c))) : (f == 0 && (l = f = 1), p = q.slice()), v = p.length, v < b && p.unshift(0), n(m, p, b, c), l == -1 && (b = m.length, l = e(q, m, k, b), l < 1 && (f++, n(m, k < b ? P : q, b, c))), b = m.length) : l === 0 && (f++, m = [0]), y[d++] = f, l && m[0] ? m[b++] = z[D] || 0 : (m = [z[D]], b = 1);
        while ((D++ < B || m[0] !== void 0) && A--);
        g = m[0] !== void 0;
      }
      y[0] || y.shift();
    }
    if (h == 1)
      _.e = u, tu = g;
    else {
      for (d = 1, f = y[0]; f >= 10; f /= 10)
        d++;
      _.e = d + u * h - 1, ce(_, a ? s + _.e + 1 : s, o, g);
    }
    return _;
  };
}();
function ce(t, e, n, r) {
  var i, s, o, a, c, l, u, d, f, h = t.constructor;
  e:
    if (e != null) {
      if (d = t.d, !d)
        return t;
      for (i = 1, a = d[0]; a >= 10; a /= 10)
        i++;
      if (s = e - i, s < 0)
        s += de, o = e, u = d[f = 0], c = u / Ze(10, i - o - 1) % 10 | 0;
      else if (f = Math.ceil((s + 1) / de), a = d.length, f >= a)
        if (r) {
          for (; a++ <= f; )
            d.push(0);
          u = c = 0, i = 1, s %= de, o = s - de + 1;
        } else
          break e;
      else {
        for (u = a = d[f], i = 1; a >= 10; a /= 10)
          i++;
        s %= de, o = s - de + i, c = o < 0 ? 0 : u / Ze(10, i - o - 1) % 10 | 0;
      }
      if (r = r || e < 0 || d[f + 1] !== void 0 || (o < 0 ? u : u % Ze(10, i - o - 1)), l = n < 4 ? (c || r) && (n == 0 || n == (t.s < 0 ? 3 : 2)) : c > 5 || c == 5 && (n == 4 || r || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (s > 0 ? o > 0 ? u / Ze(10, i - o) : 0 : d[f - 1]) % 10 & 1 || n == (t.s < 0 ? 8 : 7)), e < 1 || !d[0])
        return d.length = 0, l ? (e -= t.e + 1, d[0] = Ze(10, (de - e % de) % de), t.e = -e || 0) : d[0] = t.e = 0, t;
      if (s == 0 ? (d.length = f, a = 1, f--) : (d.length = f + 1, a = Ze(10, de - s), d[f] = o > 0 ? (u / Ze(10, i - o) % Ze(10, o) | 0) * a : 0), l)
        for (; ; )
          if (f == 0) {
            for (s = 1, o = d[0]; o >= 10; o /= 10)
              s++;
            for (o = d[0] += a, a = 1; o >= 10; o /= 10)
              a++;
            s != a && (t.e++, d[0] == Ot && (d[0] = 1));
            break;
          } else {
            if (d[f] += a, d[f] != Ot)
              break;
            d[f--] = 0, a = 1;
          }
      for (s = d.length; d[--s] === 0; )
        d.pop();
    }
  return ye && (t.e > h.maxE ? (t.d = null, t.e = NaN) : t.e < h.minE && (t.e = 0, t.d = [0])), t;
}
function Ut(t, e, n) {
  if (!t.isFinite())
    return cu(t);
  var r, i = t.e, s = rt(t.d), o = s.length;
  return e ? (n && (r = n - o) > 0 ? s = s.charAt(0) + "." + s.slice(1) + on(r) : o > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (t.e < 0 ? "e" : "e+") + t.e) : i < 0 ? (s = "0." + on(-i - 1) + s, n && (r = n - o) > 0 && (s += on(r))) : i >= o ? (s += on(i + 1 - o), n && (r = n - i - 1) > 0 && (s = s + "." + on(r))) : ((r = i + 1) < o && (s = s.slice(0, r) + "." + s.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (s += "."), s += on(r))), s;
}
function ls(t, e) {
  var n = t[0];
  for (e *= de; n >= 10; n /= 10)
    e++;
  return e;
}
function Wi(t, e, n) {
  if (e > _p)
    throw ye = !0, n && (t.precision = n), Error(nu);
  return ce(new t(Fi), e, 1, !0);
}
function It(t, e, n) {
  if (e > co)
    throw Error(nu);
  return ce(new t(Ui), e, n, !0);
}
function ou(t) {
  var e = t.length - 1, n = e * de + 1;
  if (e = t[e], e) {
    for (; e % 10 == 0; e /= 10)
      n--;
    for (e = t[0]; e >= 10; e /= 10)
      n++;
  }
  return n;
}
function on(t) {
  for (var e = ""; t--; )
    e += "0";
  return e;
}
function au(t, e, n, r) {
  var i, s = new t(1), o = Math.ceil(r / de + 4);
  for (ye = !1; ; ) {
    if (n % 2 && (s = s.times(e), bl(s.d, o) && (i = !0)), n = ot(n / 2), n === 0) {
      n = s.d.length - 1, i && s.d[n] === 0 && ++s.d[n];
      break;
    }
    e = e.times(e), bl(e.d, o);
  }
  return ye = !0, s;
}
function ml(t) {
  return t.d[t.d.length - 1] & 1;
}
function lu(t, e, n) {
  for (var r, i = new t(e[0]), s = 0; ++s < e.length; )
    if (r = new t(e[s]), r.s)
      i[n](r) && (i = r);
    else {
      i = r;
      break;
    }
  return i;
}
function uo(t, e) {
  var n, r, i, s, o, a, c, l = 0, u = 0, d = 0, f = t.constructor, h = f.rounding, g = f.precision;
  if (!t.d || !t.d[0] || t.e > 17)
    return new f(t.d ? t.d[0] ? t.s < 0 ? 0 : 1 / 0 : 1 : t.s ? t.s < 0 ? 0 : t : 0 / 0);
  for (e == null ? (ye = !1, c = g) : c = e, a = new f(0.03125); t.e > -2; )
    t = t.times(a), d += 5;
  for (r = Math.log(Ze(2, d)) / Math.LN10 * 2 + 5 | 0, c += r, n = s = o = new f(1), f.precision = c; ; ) {
    if (s = ce(s.times(t), c, 1), n = n.times(++u), a = o.plus(Ie(s, n, c, 1)), rt(a.d).slice(0, c) === rt(o.d).slice(0, c)) {
      for (i = d; i--; )
        o = ce(o.times(o), c, 1);
      if (e == null)
        if (l < 3 && br(o.d, c - r, h, l))
          f.precision = c += 10, n = s = a = new f(1), u = 0, l++;
        else
          return ce(o, f.precision = g, h, ye = !0);
      else
        return f.precision = g, o;
    }
    o = a;
  }
}
function ln(t, e) {
  var n, r, i, s, o, a, c, l, u, d, f, h = 1, g = 10, p = t, v = p.d, _ = p.constructor, y = _.rounding, m = _.precision;
  if (p.s < 0 || !v || !v[0] || !p.e && v[0] == 1 && v.length == 1)
    return new _(v && !v[0] ? -1 / 0 : p.s != 1 ? NaN : v ? 0 : p);
  if (e == null ? (ye = !1, u = m) : u = e, _.precision = u += g, n = rt(v), r = n.charAt(0), Math.abs(s = p.e) < 15e14) {
    for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3; )
      p = p.times(t), n = rt(p.d), r = n.charAt(0), h++;
    s = p.e, r > 1 ? (p = new _("0." + n), s++) : p = new _(r + "." + n.slice(1));
  } else
    return l = Wi(_, u + 2, m).times(s + ""), p = ln(new _(r + "." + n.slice(1)), u - g).plus(l), _.precision = m, e == null ? ce(p, m, y, ye = !0) : p;
  for (d = p, c = o = p = Ie(p.minus(1), p.plus(1), u, 1), f = ce(p.times(p), u, 1), i = 3; ; ) {
    if (o = ce(o.times(f), u, 1), l = c.plus(Ie(o, new _(i), u, 1)), rt(l.d).slice(0, u) === rt(c.d).slice(0, u))
      if (c = c.times(2), s !== 0 && (c = c.plus(Wi(_, u + 2, m).times(s + ""))), c = Ie(c, new _(h), u, 1), e == null)
        if (br(c.d, u - g, y, a))
          _.precision = u += g, l = o = p = Ie(d.minus(1), d.plus(1), u, 1), f = ce(p.times(p), u, 1), i = a = 1;
        else
          return ce(c, _.precision = m, y, ye = !0);
      else
        return _.precision = m, c;
    c = l, i += 2;
  }
}
function cu(t) {
  return String(t.s * t.s / 0);
}
function fo(t, e) {
  var n, r, i;
  for ((n = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (r = e.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +e.slice(r + 1), e = e.substring(0, r)) : n < 0 && (n = e.length), r = 0; e.charCodeAt(r) === 48; r++)
    ;
  for (i = e.length; e.charCodeAt(i - 1) === 48; --i)
    ;
  if (e = e.slice(r, i), e) {
    if (i -= r, t.e = n = n - r - 1, t.d = [], r = (n + 1) % de, n < 0 && (r += de), r < i) {
      for (r && t.d.push(+e.slice(0, r)), i -= de; r < i; )
        t.d.push(+e.slice(r, r += de));
      e = e.slice(r), r = de - e.length;
    } else
      r -= i;
    for (; r--; )
      e += "0";
    t.d.push(+e), ye && (t.e > t.constructor.maxE ? (t.d = null, t.e = NaN) : t.e < t.constructor.minE && (t.e = 0, t.d = [0]));
  } else
    t.e = 0, t.d = [0];
  return t;
}
function wp(t, e) {
  var n, r, i, s, o, a, c, l, u;
  if (e.indexOf("_") > -1) {
    if (e = e.replace(/(\d)_(?=\d)/g, "$1"), su.test(e))
      return fo(t, e);
  } else if (e === "Infinity" || e === "NaN")
    return +e || (t.s = NaN), t.e = NaN, t.d = null, t;
  if (bp.test(e))
    n = 16, e = e.toLowerCase();
  else if (mp.test(e))
    n = 2;
  else if (yp.test(e))
    n = 8;
  else
    throw Error(pn + e);
  for (s = e.search(/p/i), s > 0 ? (c = +e.slice(s + 1), e = e.substring(2, s)) : e = e.slice(2), s = e.indexOf("."), o = s >= 0, r = t.constructor, o && (e = e.replace(".", ""), a = e.length, s = a - s, i = au(r, new r(n), s, s * 2)), l = Xr(e, n, Ot), u = l.length - 1, s = u; l[s] === 0; --s)
    l.pop();
  return s < 0 ? new r(t.s * 0) : (t.e = ls(l, u), t.d = l, ye = !1, o && (t = Ie(t, i, a * 4)), c && (t = t.times(Math.abs(c) < 54 ? Ze(2, c) : Er.pow(2, c))), ye = !0, t);
}
function Sp(t, e) {
  var n, r = e.d.length;
  if (r < 3)
    return e.isZero() ? e : Qn(t, 2, e, e);
  n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : n | 0, e = e.times(1 / cs(5, n)), e = Qn(t, 2, e, e);
  for (var i, s = new t(5), o = new t(16), a = new t(20); n--; )
    i = e.times(e), e = e.times(s.plus(i.times(o.times(i).minus(a))));
  return e;
}
function Qn(t, e, n, r, i) {
  var s, o, a, c, l = t.precision, u = Math.ceil(l / de);
  for (ye = !1, c = n.times(n), a = new t(r); ; ) {
    if (o = Ie(a.times(c), new t(e++ * e++), l, 1), a = i ? r.plus(o) : r.minus(o), r = Ie(o.times(c), new t(e++ * e++), l, 1), o = a.plus(r), o.d[u] !== void 0) {
      for (s = u; o.d[s] === a.d[s] && s--; )
        ;
      if (s == -1)
        break;
    }
    s = a, a = r, r = o, o = s;
  }
  return ye = !0, o.d.length = u + 1, o;
}
function cs(t, e) {
  for (var n = t; --e; )
    n *= t;
  return n;
}
function uu(t, e) {
  var n, r = e.s < 0, i = It(t, t.precision, 1), s = i.times(0.5);
  if (e = e.abs(), e.lte(s))
    return Zt = r ? 4 : 1, e;
  if (n = e.divToInt(i), n.isZero())
    Zt = r ? 3 : 2;
  else {
    if (e = e.minus(n.times(i)), e.lte(s))
      return Zt = ml(n) ? r ? 2 : 3 : r ? 4 : 1, e;
    Zt = ml(n) ? r ? 1 : 4 : r ? 3 : 2;
  }
  return e.minus(i).abs();
}
function Bo(t, e, n, r) {
  var i, s, o, a, c, l, u, d, f, h = t.constructor, g = n !== void 0;
  if (g ? (pt(n, 1, mn), r === void 0 ? r = h.rounding : pt(r, 0, 8)) : (n = h.precision, r = h.rounding), !t.isFinite())
    u = cu(t);
  else {
    for (u = Ut(t), o = u.indexOf("."), g ? (i = 2, e == 16 ? n = n * 4 - 3 : e == 8 && (n = n * 3 - 2)) : i = e, o >= 0 && (u = u.replace(".", ""), f = new h(1), f.e = u.length - o, f.d = Xr(Ut(f), 10, i), f.e = f.d.length), d = Xr(u, 10, i), s = c = d.length; d[--c] == 0; )
      d.pop();
    if (!d[0])
      u = g ? "0p+0" : "0";
    else {
      if (o < 0 ? s-- : (t = new h(t), t.d = d, t.e = s, t = Ie(t, f, n, r, 0, i), d = t.d, s = t.e, l = tu), o = d[n], a = i / 2, l = l || d[n + 1] !== void 0, l = r < 4 ? (o !== void 0 || l) && (r === 0 || r === (t.s < 0 ? 3 : 2)) : o > a || o === a && (r === 4 || l || r === 6 && d[n - 1] & 1 || r === (t.s < 0 ? 8 : 7)), d.length = n, l)
        for (; ++d[--n] > i - 1; )
          d[n] = 0, n || (++s, d.unshift(1));
      for (c = d.length; !d[c - 1]; --c)
        ;
      for (o = 0, u = ""; o < c; o++)
        u += ao.charAt(d[o]);
      if (g) {
        if (c > 1)
          if (e == 16 || e == 8) {
            for (o = e == 16 ? 4 : 3, --c; c % o; c++)
              u += "0";
            for (d = Xr(u, i, e), c = d.length; !d[c - 1]; --c)
              ;
            for (o = 1, u = "1."; o < c; o++)
              u += ao.charAt(d[o]);
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
function bl(t, e) {
  if (t.length > e)
    return t.length = e, !0;
}
function Ap(t) {
  return new this(t).abs();
}
function Cp(t) {
  return new this(t).acos();
}
function Dp(t) {
  return new this(t).acosh();
}
function Rp(t, e) {
  return new this(t).plus(e);
}
function Tp(t) {
  return new this(t).asin();
}
function kp(t) {
  return new this(t).asinh();
}
function Ip(t) {
  return new this(t).atan();
}
function Mp(t) {
  return new this(t).atanh();
}
function Op(t, e) {
  t = new this(t), e = new this(e);
  var n, r = this.precision, i = this.rounding, s = r + 4;
  return !t.s || !e.s ? n = new this(NaN) : !t.d && !e.d ? (n = It(this, s, 1).times(e.s > 0 ? 0.25 : 0.75), n.s = t.s) : !e.d || t.isZero() ? (n = e.s < 0 ? It(this, r, i) : new this(0), n.s = t.s) : !t.d || e.isZero() ? (n = It(this, s, 1).times(0.5), n.s = t.s) : e.s < 0 ? (this.precision = s, this.rounding = 1, n = this.atan(Ie(t, e, s, 1)), e = It(this, s, 1), this.precision = r, this.rounding = i, n = t.s < 0 ? n.minus(e) : n.plus(e)) : n = this.atan(Ie(t, e, s, 1)), n;
}
function Np(t) {
  return new this(t).cbrt();
}
function Bp(t) {
  return ce(t = new this(t), t.e + 1, 2);
}
function Pp(t, e, n) {
  return new this(t).clamp(e, n);
}
function Lp(t) {
  if (!t || typeof t != "object")
    throw Error(as + "Object expected");
  var e, n, r, i = t.defaults === !0, s = [
    "precision",
    1,
    mn,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Wn,
    0,
    "toExpPos",
    0,
    Wn,
    "maxE",
    0,
    Wn,
    "minE",
    -Wn,
    0,
    "modulo",
    0,
    9
  ];
  for (e = 0; e < s.length; e += 3)
    if (n = s[e], i && (this[n] = lo[n]), (r = t[n]) !== void 0)
      if (ot(r) === r && r >= s[e + 1] && r <= s[e + 2])
        this[n] = r;
      else
        throw Error(pn + n + ": " + r);
  if (n = "crypto", i && (this[n] = lo[n]), (r = t[n]) !== void 0)
    if (r === !0 || r === !1 || r === 0 || r === 1)
      if (r)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error(ru);
      else
        this[n] = !1;
    else
      throw Error(pn + n + ": " + r);
  return this;
}
function Hp(t) {
  return new this(t).cos();
}
function zp(t) {
  return new this(t).cosh();
}
function fu(t) {
  var e, n, r;
  function i(s) {
    var o, a, c, l = this;
    if (!(l instanceof i))
      return new i(s);
    if (l.constructor = i, yl(s)) {
      l.s = s.s, ye ? !s.d || s.e > i.maxE ? (l.e = NaN, l.d = null) : s.e < i.minE ? (l.e = 0, l.d = [0]) : (l.e = s.e, l.d = s.d.slice()) : (l.e = s.e, l.d = s.d ? s.d.slice() : s.d);
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
        ye ? o > i.maxE ? (l.e = NaN, l.d = null) : o < i.minE ? (l.e = 0, l.d = [0]) : (l.e = o, l.d = [s]) : (l.e = o, l.d = [s]);
        return;
      } else if (s * 0 !== 0) {
        s || (l.s = NaN), l.e = NaN, l.d = null;
        return;
      }
      return fo(l, s.toString());
    } else if (c !== "string")
      throw Error(pn + s);
    return (a = s.charCodeAt(0)) === 45 ? (s = s.slice(1), l.s = -1) : (a === 43 && (s = s.slice(1)), l.s = 1), su.test(s) ? fo(l, s) : wp(l, s);
  }
  if (i.prototype = G, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Lp, i.clone = fu, i.isDecimal = yl, i.abs = Ap, i.acos = Cp, i.acosh = Dp, i.add = Rp, i.asin = Tp, i.asinh = kp, i.atan = Ip, i.atanh = Mp, i.atan2 = Op, i.cbrt = Np, i.ceil = Bp, i.clamp = Pp, i.cos = Hp, i.cosh = zp, i.div = Fp, i.exp = Up, i.floor = Wp, i.hypot = Vp, i.ln = jp, i.log = $p, i.log10 = Yp, i.log2 = qp, i.max = Gp, i.min = Qp, i.mod = Zp, i.mul = Xp, i.pow = Kp, i.random = Jp, i.round = eg, i.sign = tg, i.sin = ng, i.sinh = rg, i.sqrt = ig, i.sub = sg, i.sum = og, i.tan = ag, i.tanh = lg, i.trunc = cg, t === void 0 && (t = {}), t && t.defaults !== !0)
    for (r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], e = 0; e < r.length; )
      t.hasOwnProperty(n = r[e++]) || (t[n] = this[n]);
  return i.config(t), i;
}
function Fp(t, e) {
  return new this(t).div(e);
}
function Up(t) {
  return new this(t).exp();
}
function Wp(t) {
  return ce(t = new this(t), t.e + 1, 3);
}
function Vp() {
  var t, e, n = new this(0);
  for (ye = !1, t = 0; t < arguments.length; )
    if (e = new this(arguments[t++]), e.d)
      n.d && (n = n.plus(e.times(e)));
    else {
      if (e.s)
        return ye = !0, new this(1 / 0);
      n = e;
    }
  return ye = !0, n.sqrt();
}
function yl(t) {
  return t instanceof Er || t && t.toStringTag === iu || !1;
}
function jp(t) {
  return new this(t).ln();
}
function $p(t, e) {
  return new this(t).log(e);
}
function qp(t) {
  return new this(t).log(2);
}
function Yp(t) {
  return new this(t).log(10);
}
function Gp() {
  return lu(this, arguments, "lt");
}
function Qp() {
  return lu(this, arguments, "gt");
}
function Zp(t, e) {
  return new this(t).mod(e);
}
function Xp(t, e) {
  return new this(t).mul(e);
}
function Kp(t, e) {
  return new this(t).pow(e);
}
function Jp(t) {
  var e, n, r, i, s = 0, o = new this(1), a = [];
  if (t === void 0 ? t = this.precision : pt(t, 1, mn), r = Math.ceil(t / de), this.crypto)
    if (crypto.getRandomValues)
      for (e = crypto.getRandomValues(new Uint32Array(r)); s < r; )
        i = e[s], i >= 429e7 ? e[s] = crypto.getRandomValues(new Uint32Array(1))[0] : a[s++] = i % 1e7;
    else if (crypto.randomBytes) {
      for (e = crypto.randomBytes(r *= 4); s < r; )
        i = e[s] + (e[s + 1] << 8) + (e[s + 2] << 16) + ((e[s + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(e, s) : (a.push(i % 1e7), s += 4);
      s = r / 4;
    } else
      throw Error(ru);
  else
    for (; s < r; )
      a[s++] = Math.random() * 1e7 | 0;
  for (r = a[--s], t %= de, r && t && (i = Ze(10, de - t), a[s] = (r / i | 0) * i); a[s] === 0; s--)
    a.pop();
  if (s < 0)
    n = 0, a = [0];
  else {
    for (n = -1; a[0] === 0; n -= de)
      a.shift();
    for (r = 1, i = a[0]; i >= 10; i /= 10)
      r++;
    r < de && (n -= de - r);
  }
  return o.e = n, o.d = a, o;
}
function eg(t) {
  return ce(t = new this(t), t.e + 1, this.rounding);
}
function tg(t) {
  return t = new this(t), t.d ? t.d[0] ? t.s : 0 * t.s : t.s || NaN;
}
function ng(t) {
  return new this(t).sin();
}
function rg(t) {
  return new this(t).sinh();
}
function ig(t) {
  return new this(t).sqrt();
}
function sg(t, e) {
  return new this(t).sub(e);
}
function og() {
  var t = 0, e = arguments, n = new this(e[t]);
  for (ye = !1; n.s && ++t < e.length; )
    n = n.plus(e[t]);
  return ye = !0, ce(n, this.precision, this.rounding);
}
function ag(t) {
  return new this(t).tan();
}
function lg(t) {
  return new this(t).tanh();
}
function cg(t) {
  return ce(t = new this(t), t.e + 1, 1);
}
G[Symbol.for("nodejs.util.inspect.custom")] = G.toString;
G[Symbol.toStringTag] = "Decimal";
var Er = G.constructor = fu(lo);
Fi = new Er(Fi);
Ui = new Er(Ui);
var xl = {}, ug = {
  get exports() {
    return xl;
  },
  set exports(t) {
    xl = t;
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
  })(be, function() {
    var n = n || {}, r = document.querySelectorAll.bind(document), i = Object.prototype.toString, s = "ontouchstart" in window;
    function o(m) {
      return m !== null && m === m.window;
    }
    function a(m) {
      return o(m) ? m : m.nodeType === 9 && m.defaultView;
    }
    function c(m) {
      var b = typeof m;
      return b === "function" || b === "object" && !!m;
    }
    function l(m) {
      return c(m) && m.nodeType > 0;
    }
    function u(m) {
      var b = i.call(m);
      return b === "[object String]" ? r(m) : c(m) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(b) && m.hasOwnProperty("length") ? m : l(m) ? [m] : [];
    }
    function d(m) {
      var b, E, A = { top: 0, left: 0 }, w = m && m.ownerDocument;
      return b = w.documentElement, typeof m.getBoundingClientRect < "u" && (A = m.getBoundingClientRect()), E = a(w), {
        top: A.top + E.pageYOffset - b.clientTop,
        left: A.left + E.pageXOffset - b.clientLeft
      };
    }
    function f(m) {
      var b = "";
      for (var E in m)
        m.hasOwnProperty(E) && (b += E + ":" + m[E] + ";");
      return b;
    }
    var h = {
      // Effect duration
      duration: 750,
      // Effect delay (check for scroll before showing effect)
      delay: 200,
      show: function(m, b, E) {
        if (m.button === 2)
          return !1;
        b = b || this;
        var A = document.createElement("div");
        A.className = "waves-ripple waves-rippling", b.appendChild(A);
        var w = d(b), D = 0, B = 0;
        "touches" in m && m.touches.length ? (D = m.touches[0].pageY - w.top, B = m.touches[0].pageX - w.left) : (D = m.pageY - w.top, B = m.pageX - w.left), B = B >= 0 ? B : 0, D = D >= 0 ? D : 0;
        var C = "scale(" + b.clientWidth / 100 * 3 + ")", k = "translate(0,0)";
        E && (k = "translate(" + E.x + "px, " + E.y + "px)"), A.setAttribute("data-hold", Date.now()), A.setAttribute("data-x", B), A.setAttribute("data-y", D), A.setAttribute("data-scale", C), A.setAttribute("data-translate", k);
        var P = {
          top: D + "px",
          left: B + "px"
        };
        A.classList.add("waves-notransition"), A.setAttribute("style", f(P)), A.classList.remove("waves-notransition"), P["-webkit-transform"] = C + " " + k, P["-moz-transform"] = C + " " + k, P["-ms-transform"] = C + " " + k, P["-o-transform"] = C + " " + k, P.transform = C + " " + k, P.opacity = "1";
        var N = m.type === "mousemove" ? 2500 : h.duration;
        P["-webkit-transition-duration"] = N + "ms", P["-moz-transition-duration"] = N + "ms", P["-o-transition-duration"] = N + "ms", P["transition-duration"] = N + "ms", A.setAttribute("style", f(P));
      },
      hide: function(m, b) {
        b = b || this;
        for (var E = b.getElementsByClassName("waves-rippling"), A = 0, w = E.length; A < w; A++)
          p(m, b, E[A]);
        s && (b.removeEventListener("touchend", h.hide), b.removeEventListener("touchcancel", h.hide)), b.removeEventListener("mouseup", h.hide), b.removeEventListener("mouseleave", h.hide);
      }
    }, g = {
      // Wrap <input> tag so it can perform the effect
      input: function(m) {
        var b = m.parentNode;
        if (!(b.tagName.toLowerCase() === "i" && b.classList.contains("waves-effect"))) {
          var E = document.createElement("i");
          E.className = m.className + " waves-input-wrapper", m.className = "waves-button-input", b.replaceChild(E, m), E.appendChild(m);
          var A = window.getComputedStyle(m, null), w = A.color, D = A.backgroundColor;
          E.setAttribute("style", "color:" + w + ";background:" + D), m.setAttribute("style", "background-color:rgba(0,0,0,0);");
        }
      },
      // Wrap <img> tag so it can perform the effect
      img: function(m) {
        var b = m.parentNode;
        if (!(b.tagName.toLowerCase() === "i" && b.classList.contains("waves-effect"))) {
          var E = document.createElement("i");
          b.replaceChild(E, m), E.appendChild(m);
        }
      }
    };
    function p(m, b, E) {
      if (E) {
        E.classList.remove("waves-rippling");
        var A = E.getAttribute("data-x"), w = E.getAttribute("data-y"), D = E.getAttribute("data-scale"), B = E.getAttribute("data-translate"), C = Date.now() - Number(E.getAttribute("data-hold")), k = 350 - C;
        k < 0 && (k = 0), m.type === "mousemove" && (k = 150);
        var P = m.type === "mousemove" ? 2500 : h.duration;
        setTimeout(function() {
          var N = {
            top: w + "px",
            left: A + "px",
            opacity: "0",
            // Duration
            "-webkit-transition-duration": P + "ms",
            "-moz-transition-duration": P + "ms",
            "-o-transition-duration": P + "ms",
            "transition-duration": P + "ms",
            "-webkit-transform": D + " " + B,
            "-moz-transform": D + " " + B,
            "-ms-transform": D + " " + B,
            "-o-transform": D + " " + B,
            transform: D + " " + B
          };
          E.setAttribute("style", f(N)), setTimeout(function() {
            try {
              b.removeChild(E);
            } catch {
              return !1;
            }
          }, P);
        }, k);
      }
    }
    var v = {
      /* uses an integer rather than bool so there's no issues with
       * needing to clear timeouts if another touch event occurred
       * within the 500ms. Cannot mouseup between touchstart and
       * touchend, nor in the 500ms after touchend. */
      touches: 0,
      allowEvent: function(m) {
        var b = !0;
        return /^(mousedown|mousemove)$/.test(m.type) && v.touches && (b = !1), b;
      },
      registerEvent: function(m) {
        var b = m.type;
        b === "touchstart" ? v.touches += 1 : /^(touchend|touchcancel)$/.test(b) && setTimeout(function() {
          v.touches && (v.touches -= 1);
        }, 500);
      }
    };
    function _(m) {
      if (v.allowEvent(m) === !1)
        return null;
      for (var b = null, E = m.target || m.srcElement; E.parentElement; ) {
        if (!(E instanceof SVGElement) && E.classList.contains("waves-effect")) {
          b = E;
          break;
        }
        E = E.parentElement;
      }
      return b;
    }
    function y(m) {
      var b = _(m);
      if (b !== null) {
        if (b.disabled || b.getAttribute("disabled") || b.classList.contains("disabled"))
          return;
        if (v.registerEvent(m), m.type === "touchstart" && h.delay) {
          var E = !1, A = setTimeout(function() {
            A = null, h.show(m, b);
          }, h.delay), w = function(C) {
            A && (clearTimeout(A), A = null, h.show(m, b)), E || (E = !0, h.hide(C, b)), B();
          }, D = function(C) {
            A && (clearTimeout(A), A = null), w(C), B();
          };
          b.addEventListener("touchmove", D, !1), b.addEventListener("touchend", w, !1), b.addEventListener("touchcancel", w, !1);
          var B = function() {
            b.removeEventListener("touchmove", D), b.removeEventListener("touchend", w), b.removeEventListener("touchcancel", w);
          };
        } else
          h.show(m, b), s && (b.addEventListener("touchend", h.hide, !1), b.addEventListener("touchcancel", h.hide, !1)), b.addEventListener("mouseup", h.hide, !1), b.addEventListener("mouseleave", h.hide, !1);
      }
    }
    return n.init = function(m) {
      var b = document.body;
      m = m || {}, "duration" in m && (h.duration = m.duration), "delay" in m && (h.delay = m.delay), s && (b.addEventListener("touchstart", y, !1), b.addEventListener("touchcancel", v.registerEvent, !1), b.addEventListener("touchend", v.registerEvent, !1)), b.addEventListener("mousedown", y, !1);
    }, n.attach = function(m, b) {
      m = u(m), i.call(b) === "[object Array]" && (b = b.join(" ")), b = b ? " " + b : "";
      for (var E, A, w = 0, D = m.length; w < D; w++)
        E = m[w], A = E.tagName.toLowerCase(), ["input", "img"].indexOf(A) !== -1 && (g[A](E), E = E.parentElement), E.className.indexOf("waves-effect") === -1 && (E.className += " waves-effect" + b);
    }, n.ripple = function(m, b) {
      m = u(m);
      var E = m.length;
      if (b = b || {}, b.wait = b.wait || 0, b.position = b.position || null, E) {
        for (var A, w, D, B = {}, C = 0, k = {
          type: "mousedown",
          button: 1
        }, P = function(W, z) {
          return function() {
            h.hide(W, z);
          };
        }; C < E; C++)
          if (A = m[C], w = b.position || {
            x: A.clientWidth / 2,
            y: A.clientHeight / 2
          }, D = d(A), B.x = D.left + w.x, B.y = D.top + w.y, k.pageX = B.x, k.pageY = B.y, h.show(k, A), b.wait >= 0 && b.wait !== null) {
            var N = {
              type: "mouseup",
              button: 1
            };
            setTimeout(P(N, A), b.wait);
          }
      }
    }, n.calm = function(m) {
      m = u(m);
      for (var b = {
        type: "mouseup",
        button: 1
      }, E = 0, A = m.length; E < A; E++)
        h.hide(b, m[E]);
    }, n.displayEffect = function(m) {
      console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), n.init(m);
    }, n;
  });
})(ug);
const ge = { lunarInfo: [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560], solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"], Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"], Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"], solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"], sTermInfo: ["9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722"], nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"], nStr2: ["初", "十", "廿", "卅"], nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"], lunarFestival: [{ month: "正", day: "初一", name: "春节" }, { month: "正", day: "十五", name: "元宵节" }, { month: "二", day: "初二", name: "龙抬头" }, { month: "五", day: "初五", name: "端午节" }, { month: "七", day: "初七", name: "七夕节" }, { month: "七", day: "十五", name: "中元节" }, { month: "八", day: "十五", name: "中秋节" }, { month: "九", day: "初九", name: "重阳节" }, { month: "腊", day: "除夕", name: "除夕" }], solarFestival: [{ month: 1, day: 1, name: "元旦节" }, { month: 3, day: 8, name: "妇女节" }, { month: 3, day: 12, name: "植树节" }, { month: 4, day: 5, name: "清明节" }, { month: 5, day: 1, name: "劳动节" }, { month: 5, day: 4, name: "青年节" }, { month: 6, day: 1, name: "儿童节" }, { month: 7, day: 1, name: "建党节" }, { month: 8, day: 1, name: "建军节" }, { month: 9, day: 10, name: "教师节" }, { month: 10, day: 1, name: "国庆节" }], lYearDays: function(t) {
  var e, n = 348;
  for (e = 32768; e > 8; e >>= 1)
    n += ge.lunarInfo[t - 1900] & e ? 1 : 0;
  return n + ge.leapDays(t);
}, leapMonth: function(t) {
  return 15 & ge.lunarInfo[t - 1900];
}, leapDays: function(t) {
  return ge.leapMonth(t) ? 65536 & ge.lunarInfo[t - 1900] ? 30 : 29 : 0;
}, monthDays: function(t, e) {
  return e > 12 || e < 1 ? -1 : ge.lunarInfo[t - 1900] & 65536 >> e ? 30 : 29;
}, solarDays: function(t, e) {
  if (e > 12 || e < 1)
    return -1;
  var n = e - 1;
  return n == 1 ? t % 4 == 0 && t % 100 != 0 || t % 400 == 0 ? 29 : 28 : ge.solarMonth[n];
}, toGanZhiYear: function(t) {
  var e = (t - 3) % 10, n = (t - 3) % 12;
  return e == 0 && (e = 10), n == 0 && (n = 12), ge.Gan[e - 1] + ge.Zhi[n - 1];
}, toAstro: function(t, e) {
  return "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2 * t - (e < [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22][t - 1] ? 2 : 0), 2) + "座";
}, toGanZhi: function(t) {
  return ge.Gan[t % 10] + ge.Zhi[t % 12];
}, getTerm: function(t, e) {
  if (t < 1900 || t > 2100 || e < 1 || e > 24)
    return -1;
  var n = ge.sTermInfo[t - 1900], r = [parseInt("0x" + n.substr(0, 5)).toString(), parseInt("0x" + n.substr(5, 5)).toString(), parseInt("0x" + n.substr(10, 5)).toString(), parseInt("0x" + n.substr(15, 5)).toString(), parseInt("0x" + n.substr(20, 5)).toString(), parseInt("0x" + n.substr(25, 5)).toString()], i = [r[0].substr(0, 1), r[0].substr(1, 2), r[0].substr(3, 1), r[0].substr(4, 2), r[1].substr(0, 1), r[1].substr(1, 2), r[1].substr(3, 1), r[1].substr(4, 2), r[2].substr(0, 1), r[2].substr(1, 2), r[2].substr(3, 1), r[2].substr(4, 2), r[3].substr(0, 1), r[3].substr(1, 2), r[3].substr(3, 1), r[3].substr(4, 2), r[4].substr(0, 1), r[4].substr(1, 2), r[4].substr(3, 1), r[4].substr(4, 2), r[5].substr(0, 1), r[5].substr(1, 2), r[5].substr(3, 1), r[5].substr(4, 2)];
  return parseInt(i[e - 1]);
}, toChinaMonth: function(t) {
  if (t > 12 || t < 1)
    return -1;
  var e = ge.nStr3[t - 1];
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
      e = ge.nStr2[Math.floor(t / 10)], e += ge.nStr1[t % 10];
  }
  return e;
}, getAnimal: function(t) {
  return ge.Animals[(t - 4) % 12];
}, getFestival: (t, e, n, r) => {
  let i = null;
  const s = parseInt(t + "");
  return i = s ? ge.solarFestival.find((o) => o.month === s && o.day == e) : ge.lunarFestival.find((o) => `${o.month}月` === t && o.day === e), i;
}, solar2lunar: function(t, e, n) {
  if (t < 1900 || t > 2100 || t == 1900 && e == 1 && n < 31)
    return -1;
  if (t)
    r = new Date(t, parseInt(e + "") - 1, n);
  else
    var r = /* @__PURE__ */ new Date();
  var i, s = 0, o = (t = r.getFullYear(), e = r.getMonth() + 1, n = r.getDate(), (Date.UTC(r.getFullYear(), r.getMonth(), r.getDate()) - Date.UTC(1900, 0, 31)) / 864e5);
  for (i = 1900; i < 2101 && o > 0; i++)
    o -= s = ge.lYearDays(i);
  o < 0 && (o += s, i--);
  var a = /* @__PURE__ */ new Date(), c = !1;
  a.getFullYear() == t && a.getMonth() + 1 == e && a.getDate() == n && (c = !0);
  var l = r.getDay(), u = ge.nStr1[l];
  l == 0 && (l = 7);
  var d = i, f = ge.leapMonth(i), h = !1;
  for (i = 1; i < 13 && o > 0; i++)
    f > 0 && i == f + 1 && h == 0 ? (--i, h = !0, s = ge.leapDays(d)) : s = ge.monthDays(d, i), h == 1 && i == f + 1 && (h = !1), o -= s;
  o == 0 && f > 0 && i == f + 1 && (h ? h = !1 : (h = !0, --i)), o < 0 && (o += s, --i);
  var g = i, p = o + 1, v = e - 1, _ = ge.toGanZhiYear(d), y = ge.getTerm(d, 2 * e - 1), m = ge.getTerm(d, 2 * e), b = ge.toGanZhi(12 * (t - 1900) + e + 11);
  n >= y && (b = ge.toGanZhi(12 * (t - 1900) + e + 12));
  var E = !1, A = null;
  y == n && (E = !0, A = ge.solarTerm[2 * e - 2]), m == n && (E = !0, A = ge.solarTerm[2 * e - 1]);
  var w = Date.UTC(t, v, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, D = ge.toGanZhi(w + n - 1), B = ge.toAstro(e, n);
  const C = ge.toChinaMonth(g), k = ge.toChinaDay(p);
  return { lYear: d, lMonth: g, lDay: p, Animal: ge.getAnimal(d), IMonthCn: (h ? "闰" : "") + C, IDayCn: k, cYear: t, cMonth: e, cDay: n, gzYear: _, gzMonth: b, gzDay: D, isToday: c, isLeap: h, nWeek: l, ncWeek: "星期" + u, isTerm: E, Term: A, astro: B, festcn: ge.getFestival(C, k, t, e), fest: ge.getFestival(e, n, t) };
}, lunar2solar: function(t, e, n, r = !0) {
  r = !!r;
  var i = ge.leapMonth(t);
  if (ge.leapDays(t), r && i != e || t == 2100 && e == 12 && n > 1 || t == 1900 && e == 1 && n < 31)
    return -1;
  var s = ge.monthDays(t, e), o = s;
  if (r && (o = ge.leapDays(t)), t < 1900 || t > 2100 || n > o)
    return -1;
  for (var a = 0, c = 1900; c < t; c++)
    a += ge.lYearDays(c);
  var l = 0, u = !1;
  for (c = 1; c < e; c++)
    l = ge.leapMonth(t), u || l <= c && l > 0 && (a += ge.leapDays(t), u = !0), a += ge.monthDays(t, c);
  r && (a += s);
  var d = Date.UTC(1900, 1, 30, 0, 0, 0), f = new Date(864e5 * (a + n - 31) + d), h = f.getUTCFullYear(), g = f.getUTCMonth() + 1, p = f.getUTCDate();
  return ge.solar2lunar(h, g, p);
} }, fg = ge.lunar2solar, Fn = (t, e = !0) => {
  t = t || /* @__PURE__ */ new Date();
  const n = new Date(t).getDay(), r = { 0: "日", 1: "一", 2: "二", 3: "三", 4: "四", 5: "五", 6: "六" }[n];
  return e ? [r, `星期${r}`, `周${r}`, n] : r;
}, _l = ["number", "string"], du = (t, e) => (_l.includes(typeof t) && _l.includes(typeof e) || (t = (/* @__PURE__ */ new Date()).getFullYear(), e = (/* @__PURE__ */ new Date()).getMonth() + 1), new Date(t, e, 0).getDate()), El = (t) => {
  const e = [], n = $e(t).format("YYYY"), r = $e(t).format("MM"), i = du(Number.parseInt(n), Number.parseInt(r));
  let s = 1;
  for (; s <= i; ) {
    const o = `${r}-${("00" + s).substr(`${s}`.length)}`, a = `${n}-${o}`, c = Fn(a);
    e.push({ date: a, datemon: o, dateday: $e(a).format("DD"), week: c[0], week1: c[1], week2: c[2], week3: c[3], isnow: !0 }), s++;
  }
  return e;
};
function Gt(t, e) {
  return Object.prototype.toString.call(t) === `[object ${e}]`;
}
function wl(t) {
  return Object.prototype.toString.call(t);
}
const ga = class {
  static getTypeLong(e) {
    return wl(e);
  }
  static getType(e) {
    const n = wl(e);
    return n.substring(8, n.length - 1).toLocaleLowerCase();
  }
  static isDef(e) {
    return e !== void 0;
  }
  static isUnDef(e) {
    return !this.isDef(e);
  }
  static isObject(e) {
    return e !== null && Gt(e, "Object");
  }
  static isEmpty(e) {
    return this.isArray(e) || this.isString(e) ? e.length === 0 : e instanceof Map || e instanceof Set ? e.size === 0 : !!this.isObject(e) && Object.keys(e).length === 0;
  }
  static isDate(e) {
    return Gt(e, "Date");
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
    return Gt(e, "Number");
  }
  static isPromise(e) {
    return Gt(e, "Promise") && this.isObject(e) && this.isFunction(e.then) && this.isFunction(e.catch);
  }
  static isString(e) {
    return Gt(e, "String");
  }
  static isFunction(e) {
    return typeof e == "function";
  }
  static isBoolean(e) {
    return Gt(e, "Boolean");
  }
  static isRegExp(e) {
    return Gt(e, "RegExp");
  }
  static isArray(e) {
    return e && Array.isArray(e);
  }
  static isWindow(e) {
    return typeof window < "u" && Gt(e, "Window");
  }
  static isElement(e) {
    return this.isObject(e) && !!e.tagName;
  }
  static isMap(e) {
    return Gt(e, "Map");
  }
  static isUrl(e) {
    return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(e);
  }
};
let cn = ga;
ks(cn, "isServer", typeof window > "u"), ks(cn, "isClient", !ga.isServer);
var rn = Object.freeze({ __proto__: null, toDateTime: function(t, e = "YYYY-MM-DD HH:mm:ss") {
  return $e(t).format(e);
}, toDate: function(t, e = "YYYY-MM-DD") {
  return $e(t).format(e);
}, toY: function(t, e = "YYYY") {
  return $e(t).format(e);
}, toYM: function(t, e = "YYYY-MM") {
  return $e(t).format(e);
}, toMD: function(t, e = "MM-DD") {
  return $e(t).format(e);
}, toYMD: function(t, e = "YYYY-MM-DD") {
  return $e(t).format(e);
}, toYMDHM: function(t, e = "YYYY-MM-DD HH:mm") {
  return $e(t).format(e);
}, convertDate: ge, dayDetail: fg, formatWeek: Fn, getWeek: (t) => {
  t = t || /* @__PURE__ */ new Date();
  const e = [], n = new Date(t).getDay() || 7, r = new Date(t).getTime();
  let i = 1, s = 1;
  for (; n >= i; ) {
    let o = r - 864e5 * (n - i);
    const a = Fn(o);
    e.push({ date: $e(o).format("YYYY-MM-DD"), datemon: $e(o).format("MM-DD"), week: a[0], week1: a[1], week2: a[2], week3: a[3] }), i++;
  }
  for (; s <= 7 - n; ) {
    let o = r + 864e5 * s;
    const a = Fn(o);
    e.push({ date: $e(o).format("YYYY-MM-DD"), datemon: $e(o).format("MM-DD"), week: a[0], week1: a[1], week2: a[2], week3: a[3] }), s++;
  }
  return e;
}, getMonth: El, getMonthComple: (t) => {
  const e = El(t), n = e[0].week3;
  let r = 1;
  for (; r < n; ) {
    const s = new Date(e[0].date).getTime() - 864e5, o = Fn(s);
    e.unshift({ date: $e(s).format("YYYY-MM-DD"), datemon: $e(s).format("MM-DD"), dateday: $e(s).format("DD"), week: o[0], week1: o[1], week2: o[2], week3: o[3], isback: !0 }), r++;
  }
  let i = e.length;
  for (; i < 42; ) {
    const s = new Date(e[i - 1].date).getTime() + 864e5, o = Fn(s);
    e.push({ date: $e(s).format("YYYY-MM-DD"), datemon: $e(s).format("MM-DD"), dateday: $e(s).format("DD"), week: o[0], week1: o[1], week2: o[2], week3: o[3], isnext: !0 }), i++;
  }
  return e.forEach((s) => {
    const o = s.date.split("-"), a = ge.solar2lunar(o[0], o[1], o[2]);
    s.nl = a, typeof a != "number" && (s.monthcn = a.IMonthCn, s.daycn = a.IDayCn);
  }), e;
}, getMonthDay: du, daysBetweenDates: (t, e) => {
  if (cn.isNullOrUnDef(t) || cn.isNullOrUnDef(e))
    throw new TypeError("params must both be not empty or null or undefined");
  let n = null;
  return n = cn.isDate(t) && cn.isDate(e) ? Math.abs(t.getTime() - e.getTime()) : Math.abs(new Date(t).getTime() - new Date(e).getTime()), Math.floor(n / 864e5);
} });
for (let t = 0; t <= 15; t++)
  t.toString(16);
let dg = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof globalThis == "object" && globalThis.globalThis === globalThis ? globalThis : void 0;
dg.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && /Safari/.test(navigator.userAgent);
window.socketMap = /* @__PURE__ */ new Map();
Er.set({ precision: 14 });
var hg = Object.freeze({ __proto__: null, debounce: function(t, e) {
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
const Ht = Hd, Nt = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, i] of e)
    n[r] = i;
  return n;
};
var us, fe, hu, Zn, wn, Sl, pu, gu, Vi = {}, vu = [], pg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function un(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function mu(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function R(t, e, n) {
  var r, i, s, o = {};
  for (s in e)
    s == "key" ? r = e[s] : s == "ref" ? i = e[s] : o[s] = e[s];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? us.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (s in t.defaultProps)
      o[s] === void 0 && (o[s] = t.defaultProps[s]);
  return Kr(t, o, r, i, null);
}
function Kr(t, e, n, r, i) {
  var s = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++hu };
  return i == null && fe.vnode != null && fe.vnode(s), s;
}
function ct() {
  return { current: null };
}
function Be(t) {
  return t.children;
}
function gg(t, e, n, r, i) {
  var s;
  for (s in n)
    s === "children" || s === "key" || s in e || ji(t, s, null, n[s], r);
  for (s in e)
    i && typeof e[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || n[s] === e[s] || ji(t, s, e[s], n[s], r);
}
function Al(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || pg.test(e) ? n : n + "px";
}
function ji(t, e, n, r, i) {
  var s;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || Al(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || Al(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      s = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + s] = n, n ? r || t.addEventListener(e, s ? Dl : Cl, s) : t.removeEventListener(e, s ? Dl : Cl, s);
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
function Cl(t) {
  Zn = !0;
  try {
    return this.l[t.type + !1](fe.event ? fe.event(t) : t);
  } finally {
    Zn = !1;
  }
}
function Dl(t) {
  Zn = !0;
  try {
    return this.l[t.type + !0](fe.event ? fe.event(t) : t);
  } finally {
    Zn = !1;
  }
}
function mt(t, e) {
  this.props = t, this.context = e;
}
function yr(t, e) {
  if (e == null)
    return t.__ ? yr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? yr(t) : null;
}
function bu(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return bu(t);
  }
}
function vg(t) {
  Zn ? setTimeout(t) : pu(t);
}
function ho(t) {
  (!t.__d && (t.__d = !0) && wn.push(t) && !$i.__r++ || Sl !== fe.debounceRendering) && ((Sl = fe.debounceRendering) || vg)($i);
}
function $i() {
  var t, e, n, r, i, s, o, a;
  for (wn.sort(function(c, l) {
    return c.__v.__b - l.__v.__b;
  }); t = wn.shift(); )
    t.__d && (e = wn.length, r = void 0, i = void 0, o = (s = (n = t).__v).__e, (a = n.__P) && (r = [], (i = un({}, s)).__v = s.__v + 1, Po(a, s, i, n.__n, a.ownerSVGElement !== void 0, s.__h != null ? [o] : null, r, o ?? yr(s), s.__h), wu(r, s), s.__e != o && bu(s)), wn.length > e && wn.sort(function(c, l) {
      return c.__v.__b - l.__v.__b;
    }));
  $i.__r = 0;
}
function yu(t, e, n, r, i, s, o, a, c, l) {
  var u, d, f, h, g, p, v, _ = r && r.__k || vu, y = _.length;
  for (n.__k = [], u = 0; u < e.length; u++)
    if ((h = n.__k[u] = (h = e[u]) == null || typeof h == "boolean" ? null : typeof h == "string" || typeof h == "number" || typeof h == "bigint" ? Kr(null, h, null, null, h) : Array.isArray(h) ? Kr(Be, { children: h }, null, null, null) : h.__b > 0 ? Kr(h.type, h.props, h.key, h.ref ? h.ref : null, h.__v) : h) != null) {
      if (h.__ = n, h.__b = n.__b + 1, (f = _[u]) === null || f && h.key == f.key && h.type === f.type)
        _[u] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((f = _[d]) && h.key == f.key && h.type === f.type) {
            _[d] = void 0;
            break;
          }
          f = null;
        }
      Po(t, h, f = f || Vi, i, s, o, a, c, l), g = h.__e, (d = h.ref) && f.ref != d && (v || (v = []), f.ref && v.push(f.ref, null, h), v.push(d, h.__c || g, h)), g != null ? (p == null && (p = g), typeof h.type == "function" && h.__k === f.__k ? h.__d = c = xu(h, c, t) : c = _u(t, h, f, _, g, c), typeof n.type == "function" && (n.__d = c)) : c && f.__e == c && c.parentNode != t && (c = yr(f));
    }
  for (n.__e = p, u = y; u--; )
    _[u] != null && (typeof n.type == "function" && _[u].__e != null && _[u].__e == n.__d && (n.__d = Eu(r).nextSibling), Au(_[u], _[u]));
  if (v)
    for (u = 0; u < v.length; u++)
      Su(v[u], v[++u], v[++u]);
}
function xu(t, e, n) {
  for (var r, i = t.__k, s = 0; i && s < i.length; s++)
    (r = i[s]) && (r.__ = t, e = typeof r.type == "function" ? xu(r, e, n) : _u(n, r, r, i, r.__e, e));
  return e;
}
function qi(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(n) {
    qi(n, e);
  }) : e.push(t)), e;
}
function _u(t, e, n, r, i, s) {
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
function Eu(t) {
  var e, n, r;
  if (t.type == null || typeof t.type == "string")
    return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--)
      if ((n = t.__k[e]) && (r = Eu(n)))
        return r;
  }
  return null;
}
function Po(t, e, n, r, i, s, o, a, c) {
  var l, u, d, f, h, g, p, v, _, y, m, b, E, A, w, D = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, a = e.__e = n.__e, e.__h = null, s = [a]), (l = fe.__b) && l(e);
  try {
    e:
      if (typeof D == "function") {
        if (v = e.props, _ = (l = D.contextType) && r[l.__c], y = l ? _ ? _.props.value : l.__ : r, n.__c ? p = (u = e.__c = n.__c).__ = u.__E : ("prototype" in D && D.prototype.render ? e.__c = u = new D(v, y) : (e.__c = u = new mt(v, y), u.constructor = D, u.render = bg), _ && _.sub(u), u.props = v, u.state || (u.state = {}), u.context = y, u.__n = r, d = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), D.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = un({}, u.__s)), un(u.__s, D.getDerivedStateFromProps(v, u.__s))), f = u.props, h = u.state, u.__v = e, d)
          D.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (D.getDerivedStateFromProps == null && v !== f && u.componentWillReceiveProps != null && u.componentWillReceiveProps(v, y), !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(v, u.__s, y) === !1 || e.__v === n.__v) {
            for (e.__v !== n.__v && (u.props = v, u.state = u.__s, u.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(B) {
              B && (B.__ = e);
            }), m = 0; m < u._sb.length; m++)
              u.__h.push(u._sb[m]);
            u._sb = [], u.__h.length && o.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(v, u.__s, y), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(f, h, g);
          });
        }
        if (u.context = y, u.props = v, u.__P = t, b = fe.__r, E = 0, "prototype" in D && D.prototype.render) {
          for (u.state = u.__s, u.__d = !1, b && b(e), l = u.render(u.props, u.state, u.context), A = 0; A < u._sb.length; A++)
            u.__h.push(u._sb[A]);
          u._sb = [];
        } else
          do
            u.__d = !1, b && b(e), l = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++E < 25);
        u.state = u.__s, u.getChildContext != null && (r = un(un({}, r), u.getChildContext())), d || u.getSnapshotBeforeUpdate == null || (g = u.getSnapshotBeforeUpdate(f, h)), w = l != null && l.type === Be && l.key == null ? l.props.children : l, yu(t, Array.isArray(w) ? w : [w], e, n, r, i, s, o, a, c), u.base = e.__e, e.__h = null, u.__h.length && o.push(u), p && (u.__E = u.__ = null), u.__e = !1;
      } else
        s == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = mg(n.__e, e, n, r, i, s, o, c);
    (l = fe.diffed) && l(e);
  } catch (B) {
    e.__v = null, (c || s != null) && (e.__e = a, e.__h = !!c, s[s.indexOf(a)] = null), fe.__e(B, e, n);
  }
}
function wu(t, e) {
  fe.__c && fe.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      fe.__e(r, n.__v);
    }
  });
}
function mg(t, e, n, r, i, s, o, a) {
  var c, l, u, d = n.props, f = e.props, h = e.type, g = 0;
  if (h === "svg" && (i = !0), s != null) {
    for (; g < s.length; g++)
      if ((c = s[g]) && "setAttribute" in c == !!h && (h ? c.localName === h : c.nodeType === 3)) {
        t = c, s[g] = null;
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
    if (s = s && us.call(t.childNodes), l = (d = n.props || Vi).dangerouslySetInnerHTML, u = f.dangerouslySetInnerHTML, !a) {
      if (s != null)
        for (d = {}, g = 0; g < t.attributes.length; g++)
          d[t.attributes[g].name] = t.attributes[g].value;
      (u || l) && (u && (l && u.__html == l.__html || u.__html === t.innerHTML) || (t.innerHTML = u && u.__html || ""));
    }
    if (gg(t, f, d, i, a), u)
      e.__k = [];
    else if (g = e.props.children, yu(t, Array.isArray(g) ? g : [g], e, n, r, i && h !== "foreignObject", s, o, s ? s[0] : n.__k && yr(n, 0), a), s != null)
      for (g = s.length; g--; )
        s[g] != null && mu(s[g]);
    a || ("value" in f && (g = f.value) !== void 0 && (g !== t.value || h === "progress" && !g || h === "option" && g !== d.value) && ji(t, "value", g, d.value, !1), "checked" in f && (g = f.checked) !== void 0 && g !== t.checked && ji(t, "checked", g, d.checked, !1));
  }
  return t;
}
function Su(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    fe.__e(r, n);
  }
}
function Au(t, e, n) {
  var r, i;
  if (fe.unmount && fe.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || Su(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (s) {
        fe.__e(s, e);
      }
    r.base = r.__P = null, t.__c = void 0;
  }
  if (r = t.__k)
    for (i = 0; i < r.length; i++)
      r[i] && Au(r[i], e, n || typeof t.type != "function");
  n || t.__e == null || mu(t.__e), t.__ = t.__e = t.__d = void 0;
}
function bg(t, e, n) {
  return this.constructor(t, n);
}
function xr(t, e, n) {
  var r, i, s;
  fe.__ && fe.__(t, e), i = (r = typeof n == "function") ? null : n && n.__k || e.__k, s = [], Po(e, t = (!r && n || e).__k = R(Be, null, [t]), i || Vi, Vi, e.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : e.firstChild ? us.call(e.childNodes) : null, s, !r && n ? n : i ? i.__e : e.firstChild, r), wu(s, t);
}
function yg(t, e) {
  var n = { __c: e = "__cC" + gu++, __: t, Consumer: function(r, i) {
    return r.children(i);
  }, Provider: function(r) {
    var i, s;
    return this.getChildContext || (i = [], (s = {})[e] = this, this.getChildContext = function() {
      return s;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value !== o.value && i.some(function(a) {
        a.__e = !0, ho(a);
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
us = vu.slice, fe = { __e: function(t, e, n, r) {
  for (var i, s, o; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((s = i.constructor) && s.getDerivedStateFromError != null && (i.setState(s.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        t = a;
      }
  throw t;
} }, hu = 0, Zn = !1, mt.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = un({}, this.state), typeof t == "function" && (t = t(un({}, n), this.props)), t && un(n, t), t != null && this.__v && (e && this._sb.push(e), ho(this));
}, mt.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ho(this));
}, mt.prototype.render = Be, wn = [], pu = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $i.__r = 0, gu = 0;
var Lt, Ns, Rl, Cu = [], Bs = [], Tl = fe.__b, kl = fe.__r, Il = fe.diffed, Ml = fe.__c, Ol = fe.unmount;
function xg() {
  for (var t; t = Cu.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(Jr), t.__H.__h.forEach(po), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], fe.__e(e, t.__v);
      }
}
fe.__b = function(t) {
  Lt = null, Tl && Tl(t);
}, fe.__r = function(t) {
  kl && kl(t);
  var e = (Lt = t.__c).__H;
  e && (Ns === Lt ? (e.__h = [], Lt.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Bs, n.__N = n.i = void 0;
  })) : (e.__h.forEach(Jr), e.__h.forEach(po), e.__h = [])), Ns = Lt;
}, fe.diffed = function(t) {
  Il && Il(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Cu.push(e) !== 1 && Rl === fe.requestAnimationFrame || ((Rl = fe.requestAnimationFrame) || _g)(xg)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Bs && (n.__ = n.__V), n.i = void 0, n.__V = Bs;
  })), Ns = Lt = null;
}, fe.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(Jr), n.__h = n.__h.filter(function(r) {
        return !r.__ || po(r);
      });
    } catch (r) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], fe.__e(r, n.__v);
    }
  }), Ml && Ml(t, e);
}, fe.unmount = function(t) {
  Ol && Ol(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Jr(r);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && fe.__e(e, n.__v));
};
var Nl = typeof requestAnimationFrame == "function";
function _g(t) {
  var e, n = function() {
    clearTimeout(r), Nl && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 100);
  Nl && (e = requestAnimationFrame(n));
}
function Jr(t) {
  var e = Lt, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), Lt = e;
}
function po(t) {
  var e = Lt;
  t.__c = t.__(), Lt = e;
}
function Eg(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Bl(t, e) {
  for (var n in t)
    if (n !== "__source" && !(n in e))
      return !0;
  for (var r in e)
    if (r !== "__source" && t[r] !== e[r])
      return !0;
  return !1;
}
function Pl(t) {
  this.props = t;
}
(Pl.prototype = new mt()).isPureReactComponent = !0, Pl.prototype.shouldComponentUpdate = function(t, e) {
  return Bl(this.props, t) || Bl(this.state, e);
};
var Ll = fe.__b;
fe.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Ll && Ll(t);
};
var wg = fe.__e;
fe.__e = function(t, e, n, r) {
  if (t.then) {
    for (var i, s = e; s = s.__; )
      if ((i = s.__c) && i.__c)
        return e.__e == null && (e.__e = n.__e, e.__k = n.__k), i.__c(t, e);
  }
  wg(t, e, n, r);
};
var Hl = fe.unmount;
function Du(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), t.__c.__H = null), (t = Eg({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
    return Du(r, e, n);
  })), t;
}
function Ru(t, e, n) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
    return Ru(r, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t;
}
function Ps() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Tu(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function zr() {
  this.u = null, this.o = null;
}
fe.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), Hl && Hl(t);
}, (Ps.prototype = new mt()).__c = function(t, e) {
  var n = e.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var i = Tu(r.__v), s = !1, o = function() {
    s || (s = !0, n.__R = null, i ? i(a) : a());
  };
  n.__R = o;
  var a = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var l = r.state.__a;
        r.__v.__k[0] = Ru(l, l.__c.__P, l.__c.__O);
      }
      var u;
      for (r.setState({ __a: r.__b = null }); u = r.t.pop(); )
        u.forceUpdate();
    }
  }, c = e.__h === !0;
  r.__u++ || c || r.setState({ __a: r.__b = r.__v.__k[0] }), t.then(o, o);
}, Ps.prototype.componentWillUnmount = function() {
  this.t = [];
}, Ps.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Du(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var i = e.__a && R(Be, null, t.fallback);
  return i && (i.__h = null), [R(Be, null, e.__a ? null : t.children), i];
};
var zl = function(t, e, n) {
  if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
    for (n = t.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      t.u = n = n[2];
    }
};
function Sg(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function Ag(t) {
  var e = this, n = t.i;
  e.componentWillUnmount = function() {
    xr(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== n && e.componentWillUnmount(), t.__v ? (e.l || (e.i = n, e.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, insertBefore: function(r, i) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), e.i.removeChild(r);
  } }), xr(R(Sg, { context: e.context }, t.__v), e.l)) : e.l && e.componentWillUnmount();
}
function Cg(t, e) {
  var n = R(Ag, { __v: t, i: e });
  return n.containerInfo = e, n;
}
(zr.prototype = new mt()).__a = function(t) {
  var e = this, n = Tu(e.__v), r = e.o.get(t);
  return r[0]++, function(i) {
    var s = function() {
      e.props.revealOrder ? (r.push(i), zl(e, t, r)) : i();
    };
    n ? n(s) : s();
  };
}, zr.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = qi(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; )
    this.o.set(e[n], this.u = [1, 0, this.u]);
  return t.children;
}, zr.prototype.componentDidUpdate = zr.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, n) {
    zl(t, n, e);
  });
};
var Dg = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Rg = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Tg = typeof document < "u", kg = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
};
mt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(mt.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var Fl = fe.event;
function Ig() {
}
function Mg() {
  return this.cancelBubble;
}
function Og() {
  return this.defaultPrevented;
}
fe.event = function(t) {
  return Fl && (t = Fl(t)), t.persist = Ig, t.isPropagationStopped = Mg, t.isDefaultPrevented = Og, t.nativeEvent = t;
};
var Ul = { configurable: !0, get: function() {
  return this.class;
} }, Wl = fe.vnode;
fe.vnode = function(t) {
  var e = t.type, n = t.props, r = n;
  if (typeof e == "string") {
    var i = e.indexOf("-") === -1;
    for (var s in r = {}, n) {
      var o = n[s];
      Tg && s === "children" && e === "noscript" || s === "value" && "defaultValue" in n && o == null || (s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && o === !0 ? o = "" : /ondoubleclick/i.test(s) ? s = "ondblclick" : /^onchange(textarea|input)/i.test(s + e) && !kg(n.type) ? s = "oninput" : /^onfocus$/i.test(s) ? s = "onfocusin" : /^onblur$/i.test(s) ? s = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s) ? s = s.toLowerCase() : i && Rg.test(s) ? s = s.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : o === null && (o = void 0), /^oninput$/i.test(s) && (s = s.toLowerCase(), r[s] && (s = "oninputCapture")), r[s] = o);
    }
    e == "select" && r.multiple && Array.isArray(r.value) && (r.value = qi(n.children).forEach(function(a) {
      a.props.selected = r.value.indexOf(a.props.value) != -1;
    })), e == "select" && r.defaultValue != null && (r.value = qi(n.children).forEach(function(a) {
      a.props.selected = r.multiple ? r.defaultValue.indexOf(a.props.value) != -1 : r.defaultValue == a.props.value;
    })), t.props = r, n.class != n.className && (Ul.enumerable = "className" in n, n.className != null && (r.class = n.className), Object.defineProperty(r, "className", Ul));
  }
  t.$$typeof = Dg, Wl && Wl(t);
};
var Vl = fe.__r;
fe.__r = function(t) {
  Vl && Vl(t), t.__c;
};
const ku = [], go = /* @__PURE__ */ new Map();
function Lo(t) {
  ku.push(t), go.forEach((e) => {
    Mu(e, t);
  });
}
function Ng(t) {
  t.isConnected && Iu(t.getRootNode());
}
function Iu(t) {
  let e = go.get(t);
  if (!e || !e.isConnected) {
    if (e = t.querySelector("style[data-fullcalendar]"), !e) {
      e = document.createElement("style"), e.setAttribute("data-fullcalendar", "");
      const n = Pg();
      n && (e.nonce = n);
      const r = t === document ? document.head : t, i = t === document ? r.querySelector("script,link[rel=stylesheet],link[as=style],style") : r.firstChild;
      r.insertBefore(e, i);
    }
    go.set(t, e), Bg(e);
  }
}
function Bg(t) {
  for (const e of ku)
    Mu(t, e);
}
function Mu(t, e) {
  const { sheet: n } = t, r = n.cssRules.length;
  e.split("}").forEach((i, s) => {
    i = i.trim(), i && n.insertRule(i + "}", r + s);
  });
}
let Ls;
function Pg() {
  return Ls === void 0 && (Ls = Lg()), Ls;
}
function Lg() {
  const t = document.querySelector('meta[name="csp-nonce"]');
  if (t && t.hasAttribute("content"))
    return t.getAttribute("content");
  const e = document.querySelector("script[nonce]");
  return e && e.nonce || "";
}
typeof document < "u" && Iu(document);
var Hg = ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}';
Lo(Hg);
function Ho(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function it(t, e) {
  if (t.closest)
    return t.closest(e);
  if (!document.documentElement.contains(t))
    return null;
  do {
    if (zg(t, e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === 1);
  return null;
}
function zg(t, e) {
  return (t.matches || t.matchesSelector || t.msMatchesSelector).call(t, e);
}
function Fg(t, e) {
  let n = t instanceof HTMLElement ? [t] : t, r = [];
  for (let i = 0; i < n.length; i += 1) {
    let s = n[i].querySelectorAll(e);
    for (let o = 0; o < s.length; o += 1)
      r.push(s[o]);
  }
  return r;
}
const Ug = /(top|left|right|bottom|width|height)$/i;
function pr(t, e) {
  for (let n in e)
    Ou(t, n, e[n]);
}
function Ou(t, e, n) {
  n == null ? t.style[e] = "" : typeof n == "number" && Ug.test(e) ? t.style[e] = `${n}px` : t.style[e] = n;
}
function Nu(t) {
  var e, n;
  return (n = (e = t.composedPath) === null || e === void 0 ? void 0 : e.call(t)[0]) !== null && n !== void 0 ? n : t.target;
}
let jl = 0;
function fs() {
  return jl += 1, "fc-dom-" + jl;
}
function ds(t) {
  t.preventDefault();
}
function Wg(t, e) {
  return (n) => {
    let r = it(n.target, t);
    r && e.call(r, n, r);
  };
}
function Bu(t, e, n, r) {
  let i = Wg(n, r);
  return t.addEventListener(e, i), () => {
    t.removeEventListener(e, i);
  };
}
function Vg(t, e, n, r) {
  let i;
  return Bu(t, "mouseover", e, (s, o) => {
    if (o !== i) {
      i = o, n(s, o);
      let a = (c) => {
        i = null, r(c, o), o.removeEventListener("mouseleave", a);
      };
      o.addEventListener("mouseleave", a);
    }
  });
}
const $l = [
  "webkitTransitionEnd",
  "otransitionend",
  "oTransitionEnd",
  "msTransitionEnd",
  "transitionend"
];
function jg(t, e) {
  let n = (r) => {
    e(r), $l.forEach((i) => {
      t.removeEventListener(i, n);
    });
  };
  $l.forEach((r) => {
    t.addEventListener(r, n);
  });
}
function Pu(t) {
  return Object.assign({ onClick: t }, Lu(t));
}
function Lu(t) {
  return {
    tabIndex: 0,
    onKeyDown(e) {
      (e.key === "Enter" || e.key === " ") && (t(e), e.preventDefault());
    }
  };
}
let ql = 0;
function Mn() {
  return ql += 1, String(ql);
}
function zo() {
  document.body.classList.add("fc-not-allowed");
}
function Fo() {
  document.body.classList.remove("fc-not-allowed");
}
function $g(t) {
  t.style.userSelect = "none", t.addEventListener("selectstart", ds);
}
function qg(t) {
  t.style.userSelect = "", t.removeEventListener("selectstart", ds);
}
function Yg(t) {
  t.addEventListener("contextmenu", ds);
}
function Gg(t) {
  t.removeEventListener("contextmenu", ds);
}
function Qg(t) {
  let e = [], n = [], r, i;
  for (typeof t == "string" ? n = t.split(/\s*,\s*/) : typeof t == "function" ? n = [t] : Array.isArray(t) && (n = t), r = 0; r < n.length; r += 1)
    i = n[r], typeof i == "string" ? e.push(i.charAt(0) === "-" ? { field: i.substring(1), order: -1 } : { field: i, order: 1 }) : typeof i == "function" && e.push({ func: i });
  return e;
}
function Zg(t, e, n) {
  let r, i;
  for (r = 0; r < n.length; r += 1)
    if (i = Xg(t, e, n[r]), i)
      return i;
  return 0;
}
function Xg(t, e, n) {
  return n.func ? n.func(t, e) : Kg(t[n.field], e[n.field]) * (n.order || 1);
}
function Kg(t, e) {
  return !t && !e ? 0 : e == null ? -1 : t == null ? 1 : typeof t == "string" || typeof e == "string" ? String(t).localeCompare(String(e)) : t - e;
}
function $n(t, e) {
  let n = String(t);
  return "000".substr(0, e - n.length) + n;
}
function gr(t, e, n) {
  return typeof t == "function" ? t(...e) : typeof t == "string" ? e.reduce((r, i, s) => r.replace("$" + s, i || ""), t) : n;
}
function Jg(t, e) {
  return t - e;
}
function ei(t) {
  return t % 1 === 0;
}
function ev(t) {
  let e = t.querySelector(".fc-scrollgrid-shrink-frame"), n = t.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!e)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!n)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return t.getBoundingClientRect().width - e.getBoundingClientRect().width + // the cell padding+border
  n.getBoundingClientRect().width;
}
const Yl = ["years", "months", "days", "milliseconds"], tv = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function Ce(t, e) {
  return typeof t == "string" ? nv(t) : typeof t == "object" && t ? Gl(t) : typeof t == "number" ? Gl({ [e || "milliseconds"]: t }) : null;
}
function nv(t) {
  let e = tv.exec(t);
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
function Gl(t) {
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
function rv(t, e) {
  return t.years === e.years && t.months === e.months && t.days === e.days && t.milliseconds === e.milliseconds;
}
function vo(t, e) {
  return {
    years: t.years + e.years,
    months: t.months + e.months,
    days: t.days + e.days,
    milliseconds: t.milliseconds + e.milliseconds
  };
}
function iv(t, e) {
  return {
    years: t.years - e.years,
    months: t.months - e.months,
    days: t.days - e.days,
    milliseconds: t.milliseconds - e.milliseconds
  };
}
function sv(t, e) {
  return {
    years: t.years * e,
    months: t.months * e,
    days: t.days * e,
    milliseconds: t.milliseconds * e
  };
}
function ov(t) {
  return qn(t) / 365;
}
function av(t) {
  return qn(t) / 30;
}
function qn(t) {
  return Mt(t) / 864e5;
}
function Mt(t) {
  return t.years * (365 * 864e5) + t.months * (30 * 864e5) + t.days * 864e5 + t.milliseconds;
}
function Uo(t, e) {
  let n = null;
  for (let r = 0; r < Yl.length; r += 1) {
    let i = Yl[r];
    if (e[i]) {
      let s = t[i] / e[i];
      if (!ei(s) || n !== null && n !== s)
        return null;
      n = s;
    } else if (t[i])
      return null;
  }
  return n;
}
function mo(t) {
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
const { hasOwnProperty: Yi } = Object.prototype;
function Wo(t, e) {
  let n = {};
  if (e) {
    for (let r in e)
      if (e[r] === En) {
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
        i.length && (n[r] = Wo(i));
      }
  }
  for (let r = t.length - 1; r >= 0; r -= 1) {
    let i = t[r];
    for (let s in i)
      s in n || (n[s] = i[s]);
  }
  return n;
}
function Cn(t, e) {
  let n = {};
  for (let r in t)
    e(t[r], r) && (n[r] = t[r]);
  return n;
}
function Jt(t, e) {
  let n = {};
  for (let r in t)
    n[r] = e(t[r], r);
  return n;
}
function Hu(t) {
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
function Wt(t, e) {
  if (t === e)
    return !0;
  for (let n in t)
    if (Yi.call(t, n) && !(n in e))
      return !1;
  for (let n in e)
    if (Yi.call(e, n) && t[n] !== e[n])
      return !1;
  return !0;
}
const lv = /^on[A-Z]/;
function cv(t, e) {
  const n = bo(t, e);
  for (let r of n)
    if (!lv.test(r))
      return !1;
  return !0;
}
function bo(t, e) {
  let n = [];
  for (let r in t)
    Yi.call(t, r) && (r in e || n.push(r));
  for (let r in e)
    Yi.call(e, r) && t[r] !== e[r] && n.push(r);
  return n;
}
function Hs(t, e, n = {}) {
  if (t === e)
    return !0;
  for (let r in e)
    if (!(r in t && uv(t[r], e[r], n[r])))
      return !1;
  for (let r in t)
    if (!(r in e))
      return !1;
  return !0;
}
function uv(t, e, n) {
  return t === e || n === !0 ? !0 : n ? n(t, e) : !1;
}
function fv(t, e = 0, n, r = 1) {
  let i = [];
  n == null && (n = Object.keys(t).length);
  for (let s = e; s < n; s += r) {
    let o = t[s];
    o !== void 0 && i.push(o);
  }
  return i;
}
function gn(t, e, n) {
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
const dv = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function Ql(t, e) {
  let n = fn(t);
  return n[2] += e * 7, ht(n);
}
function st(t, e) {
  let n = fn(t);
  return n[2] += e, ht(n);
}
function vn(t, e) {
  let n = fn(t);
  return n[6] += e, ht(n);
}
function hv(t, e) {
  return On(t, e) / 7;
}
function On(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60 * 24);
}
function pv(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60);
}
function gv(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60);
}
function vv(t, e) {
  return (e.valueOf() - t.valueOf()) / 1e3;
}
function mv(t, e) {
  let n = Ne(t), r = Ne(e);
  return {
    years: 0,
    months: 0,
    days: Math.round(On(n, r)),
    milliseconds: e.valueOf() - r.valueOf() - (t.valueOf() - n.valueOf())
  };
}
function bv(t, e) {
  let n = Gi(t, e);
  return n !== null && n % 7 === 0 ? n / 7 : null;
}
function Gi(t, e) {
  return dn(t) === dn(e) ? Math.round(On(t, e)) : null;
}
function Ne(t) {
  return ht([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ]);
}
function yv(t) {
  return ht([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours()
  ]);
}
function xv(t) {
  return ht([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes()
  ]);
}
function _v(t) {
  return ht([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds()
  ]);
}
function Ev(t, e, n) {
  let r = t.getUTCFullYear(), i = zs(t, r, e, n);
  if (i < 1)
    return zs(t, r - 1, e, n);
  let s = zs(t, r + 1, e, n);
  return s >= 1 ? Math.min(i, s) : i;
}
function zs(t, e, n, r) {
  let i = ht([e, 0, 1 + wv(e, n, r)]), s = Ne(t), o = Math.round(On(i, s));
  return Math.floor(o / 7) + 1;
}
function wv(t, e, n) {
  let r = 7 + e - n;
  return -((7 + ht([t, 0, r]).getUTCDay() - e) % 7) + r - 1;
}
function Zl(t) {
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
function Xl(t) {
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
function fn(t) {
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
function ht(t) {
  return t.length === 1 && (t = t.concat([0])), new Date(Date.UTC(...t));
}
function zu(t) {
  return !isNaN(t.valueOf());
}
function dn(t) {
  return t.getUTCHours() * 1e3 * 60 * 60 + t.getUTCMinutes() * 1e3 * 60 + t.getUTCSeconds() * 1e3 + t.getUTCMilliseconds();
}
function Fu(t, e, n = !1) {
  let r = t.toISOString();
  return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (e == null ? r = r.replace("Z", "") : e !== 0 && (r = r.replace("Z", $o(e, !0)))), r;
}
function jo(t) {
  return t.toISOString().replace(/T.*$/, "");
}
function Sv(t) {
  return t.toISOString().match(/^\d{4}-\d{2}/)[0];
}
function Av(t) {
  return $n(t.getUTCHours(), 2) + ":" + $n(t.getUTCMinutes(), 2) + ":" + $n(t.getUTCSeconds(), 2);
}
function $o(t, e = !1) {
  let n = t < 0 ? "-" : "+", r = Math.abs(t), i = Math.floor(r / 60), s = Math.round(r % 60);
  return e ? `${n + $n(i, 2)}:${$n(s, 2)}` : `GMT${n}${i}${s ? `:${$n(s, 2)}` : ""}`;
}
function he(t, e, n) {
  let r, i;
  return function(...s) {
    if (!r)
      i = t.apply(this, s);
    else if (!gn(r, s)) {
      n && n(i);
      let o = t.apply(this, s);
      (!e || !e(o, i)) && (i = o);
    }
    return r = s, i;
  };
}
function ti(t, e, n) {
  let r, i;
  return (s) => {
    if (!r)
      i = t.call(this, s);
    else if (!Wt(r, s)) {
      n && n(i);
      let o = t.call(this, s);
      (!e || !e(o, i)) && (i = o);
    }
    return r = s, i;
  };
}
const Kl = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
}, Qi = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, Fr = /\s*([ap])\.?m\.?/i, Cv = /,/g, Dv = /\s+/g, Rv = /\u200e/g, Tv = /UTC|GMT/;
class kv {
  constructor(e) {
    let n = {}, r = {}, i = 0;
    for (let s in e)
      s in Kl ? (r[s] = e[s], i = Math.max(Kl[s], i)) : (n[s] = e[s], s in Qi && (i = Math.max(Qi[s], i)));
    this.standardDateProps = n, this.extendedSettings = r, this.severity = i, this.buildFormattingFunc = he(Jl);
  }
  format(e, n) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, n)(e);
  }
  formatRange(e, n, r, i) {
    let { standardDateProps: s, extendedSettings: o } = this, a = Pv(e.marker, n.marker, r.calendarSystem);
    if (!a)
      return this.format(e, r);
    let c = a;
    c > 1 && // the two dates are different in a way that's larger scale than time
    (s.year === "numeric" || s.year === "2-digit") && (s.month === "numeric" || s.month === "2-digit") && (s.day === "numeric" || s.day === "2-digit") && (c = 1);
    let l = this.format(e, r), u = this.format(n, r);
    if (l === u)
      return l;
    let d = Lv(s, c), f = Jl(d, o, r), h = f(e), g = f(n), p = Hv(l, h, u, g), v = o.separator || i || r.defaultSeparator || "";
    return p ? p.before + h + v + g + p.after : l + v + u;
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
function Jl(t, e, n) {
  let r = Object.keys(t).length;
  return r === 1 && t.timeZoneName === "short" ? (i) => $o(i.timeZoneOffset) : r === 0 && e.week ? (i) => Bv(n.computeWeekNumber(i.marker), n.weekText, n.weekTextLong, n.locale, e.week) : Iv(t, e, n);
}
function Iv(t, e, n) {
  t = Object.assign({}, t), e = Object.assign({}, e), Mv(t, e), t.timeZone = "UTC";
  let r = new Intl.DateTimeFormat(n.locale.codes, t), i;
  if (e.omitZeroMinute) {
    let s = Object.assign({}, t);
    delete s.minute, i = new Intl.DateTimeFormat(n.locale.codes, s);
  }
  return (s) => {
    let { marker: o } = s, a;
    i && !o.getUTCMinutes() ? a = i : a = r;
    let c = a.format(o);
    return Ov(c, s, t, e, n);
  };
}
function Mv(t, e) {
  t.timeZoneName && (t.hour || (t.hour = "2-digit"), t.minute || (t.minute = "2-digit")), t.timeZoneName === "long" && (t.timeZoneName = "short"), e.omitZeroMinute && (t.second || t.millisecond) && delete e.omitZeroMinute;
}
function Ov(t, e, n, r, i) {
  return t = t.replace(Rv, ""), n.timeZoneName === "short" && (t = Nv(t, i.timeZone === "UTC" || e.timeZoneOffset == null ? "UTC" : (
    // important to normalize for IE, which does "GMT"
    $o(e.timeZoneOffset)
  ))), r.omitCommas && (t = t.replace(Cv, "").trim()), r.omitZeroMinute && (t = t.replace(":00", "")), r.meridiem === !1 ? t = t.replace(Fr, "").trim() : r.meridiem === "narrow" ? t = t.replace(Fr, (s, o) => o.toLocaleLowerCase()) : r.meridiem === "short" ? t = t.replace(Fr, (s, o) => `${o.toLocaleLowerCase()}m`) : r.meridiem === "lowercase" && (t = t.replace(Fr, (s) => s.toLocaleLowerCase())), t = t.replace(Dv, " "), t = t.trim(), t;
}
function Nv(t, e) {
  let n = !1;
  return t = t.replace(Tv, () => (n = !0, e)), n || (t += ` ${e}`), t;
}
function Bv(t, e, n, r, i) {
  let s = [];
  return i === "long" ? s.push(n) : (i === "short" || i === "narrow") && s.push(e), (i === "long" || i === "short") && s.push(" "), s.push(r.simpleNumberFormat.format(t)), r.options.direction === "rtl" && s.reverse(), s.join("");
}
function Pv(t, e, n) {
  return n.getMarkerYear(t) !== n.getMarkerYear(e) ? 5 : n.getMarkerMonth(t) !== n.getMarkerMonth(e) ? 4 : n.getMarkerDay(t) !== n.getMarkerDay(e) ? 2 : dn(t) !== dn(e) ? 1 : 0;
}
function Lv(t, e) {
  let n = {};
  for (let r in t)
    (!(r in Qi) || // not a date part prop (like timeZone)
    Qi[r] <= e) && (n[r] = t[r]);
  return n;
}
function Hv(t, e, n, r) {
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
function ec(t, e) {
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
function Zi(t, e, n, r) {
  let i = ec(t, n.calendarSystem), s = e ? ec(e, n.calendarSystem) : null;
  return {
    date: i,
    start: i,
    end: s,
    timeZone: n.timeZone,
    localeCodes: n.locale.codes,
    defaultSeparator: r || n.defaultSeparator
  };
}
class zv {
  constructor(e) {
    this.cmdStr = e;
  }
  format(e, n, r) {
    return n.cmdFormatter(this.cmdStr, Zi(e, null, n, r));
  }
  formatRange(e, n, r, i) {
    return r.cmdFormatter(this.cmdStr, Zi(e, n, r, i));
  }
}
class Fv {
  constructor(e) {
    this.func = e;
  }
  format(e, n, r) {
    return this.func(Zi(e, null, n, r));
  }
  formatRange(e, n, r, i) {
    return this.func(Zi(e, n, r, i));
  }
}
function ze(t) {
  return typeof t == "object" && t ? new kv(t) : typeof t == "string" ? new zv(t) : typeof t == "function" ? new Fv(t) : null;
}
const tc = {
  navLinkDayClick: U,
  navLinkWeekClick: U,
  duration: Ce,
  bootstrapFontAwesome: U,
  buttonIcons: U,
  customButtons: U,
  defaultAllDayEventDuration: Ce,
  defaultTimedEventDuration: Ce,
  nextDayThreshold: Ce,
  scrollTime: Ce,
  scrollTimeReset: Boolean,
  slotMinTime: Ce,
  slotMaxTime: Ce,
  dayPopoverFormat: ze,
  slotDuration: Ce,
  snapDuration: Ce,
  headerToolbar: U,
  footerToolbar: U,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: ze,
  dayHeaderClassNames: U,
  dayHeaderContent: U,
  dayHeaderDidMount: U,
  dayHeaderWillUnmount: U,
  dayCellClassNames: U,
  dayCellContent: U,
  dayCellDidMount: U,
  dayCellWillUnmount: U,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: U,
  weekNumbers: Boolean,
  weekNumberClassNames: U,
  weekNumberContent: U,
  weekNumberDidMount: U,
  weekNumberWillUnmount: U,
  editable: Boolean,
  viewClassNames: U,
  viewDidMount: U,
  viewWillUnmount: U,
  nowIndicator: Boolean,
  nowIndicatorClassNames: U,
  nowIndicatorContent: U,
  nowIndicatorDidMount: U,
  nowIndicatorWillUnmount: U,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: U,
  locale: U,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: U,
  eventOrder: Qg,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: U,
  contentHeight: U,
  direction: String,
  weekNumberFormat: ze,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: U,
  initialDate: U,
  now: U,
  eventDataTransform: U,
  stickyHeaderDates: U,
  stickyFooterScrollbar: U,
  viewHeight: U,
  defaultAllDay: Boolean,
  eventSourceFailure: U,
  eventSourceSuccess: U,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: U,
  eventConstraint: U,
  eventAllow: U,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: U,
  eventContent: U,
  eventDidMount: U,
  eventWillUnmount: U,
  selectConstraint: U,
  selectOverlap: U,
  selectAllow: U,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: U,
  slotLaneClassNames: U,
  slotLaneContent: U,
  slotLaneDidMount: U,
  slotLaneWillUnmount: U,
  slotLabelClassNames: U,
  slotLabelContent: U,
  slotLabelDidMount: U,
  slotLabelWillUnmount: U,
  dayMaxEvents: U,
  dayMaxEventRows: U,
  dayMinWidth: Number,
  slotLabelInterval: Ce,
  allDayText: String,
  allDayClassNames: U,
  allDayContent: U,
  allDayDidMount: U,
  allDayWillUnmount: U,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: ze,
  rerenderDelay: Number,
  moreLinkText: U,
  moreLinkHint: U,
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
  plugins: U,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: Ce,
  hiddenDays: U,
  fixedWeekCount: Boolean,
  validRange: U,
  visibleRange: U,
  titleFormat: U,
  eventInteractive: Boolean,
  // only used by list-view, but languages define the value, so we need it in base options
  noEventsText: String,
  viewHint: U,
  navLinkHint: U,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: U,
  moreLinkClassNames: U,
  moreLinkContent: U,
  moreLinkDidMount: U,
  moreLinkWillUnmount: U,
  monthStartFormat: ze,
  // for connectors
  // (can't be part of plugin system b/c must be provided at runtime)
  handleCustomRendering: U,
  customRenderingMetaMap: U,
  customRenderingReplacesEl: Boolean
}, vr = {
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
}, nc = {
  datesSet: U,
  eventsSet: U,
  eventAdd: U,
  eventChange: U,
  eventRemove: U,
  windowResize: U,
  eventClick: U,
  eventMouseEnter: U,
  eventMouseLeave: U,
  select: U,
  unselect: U,
  loading: U,
  // internal
  _unmount: U,
  _beforeprint: U,
  _afterprint: U,
  _noEventDrop: U,
  _noEventResize: U,
  _resize: U,
  _scrollRequest: U
}, rc = {
  buttonText: U,
  buttonHints: U,
  views: U,
  plugins: U,
  initialEvents: U,
  events: U,
  eventSources: U
}, _n = {
  headerToolbar: En,
  footerToolbar: En,
  buttonText: En,
  buttonHints: En,
  buttonIcons: En,
  dateIncrement: En,
  plugins: Ur,
  events: Ur,
  eventSources: Ur,
  resources: Ur
};
function En(t, e) {
  return typeof t == "object" && typeof e == "object" && t && e ? Wt(t, e) : t === e;
}
function Ur(t, e) {
  return Array.isArray(t) && Array.isArray(e) ? gn(t, e) : t === e;
}
const Uv = {
  type: String,
  component: U,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: U,
  usesMinMaxTime: Boolean,
  classNames: U,
  content: U,
  didMount: U,
  willUnmount: U
};
function Fs(t) {
  return Wo(t, _n);
}
function qo(t, e) {
  let n = {}, r = {};
  for (let i in e)
    i in t && (n[i] = e[i](t[i]));
  for (let i in t)
    i in e || (r[i] = t[i]);
  return { refined: n, extra: r };
}
function U(t) {
  return t;
}
function Yo(t, e, n, r) {
  return {
    instanceId: Mn(),
    defId: t,
    range: e,
    forcedStartTzo: n ?? null,
    forcedEndTzo: r ?? null
  };
}
function Wv(t, e, n, r) {
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
function Dn(t, e, n) {
  let { dateEnv: r, pluginHooks: i, options: s } = n, { defs: o, instances: a } = t;
  a = Cn(a, (c) => !o[c.defId].recurringDef);
  for (let c in o) {
    let l = o[c];
    if (l.recurringDef) {
      let { duration: u } = l.recurringDef;
      u || (u = l.allDay ? s.defaultAllDayEventDuration : s.defaultTimedEventDuration);
      let d = Vv(l, u, e, r, i.recurringTypes);
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
function Vv(t, e, n, r, i) {
  let o = i[t.recurringDef.typeId].expand(t.recurringDef.typeData, {
    start: r.subtract(n.start, e),
    end: n.end
  }, r);
  return t.allDay && (o = o.map(Ne)), o;
}
function _r(t, e, n, r, i, s) {
  let o = bt(), a = Zo(n);
  for (let c of t) {
    let l = Vu(c, e, n, r, a, i, s);
    l && yo(l, o);
  }
  return o;
}
function yo(t, e = bt()) {
  return e.defs[t.def.defId] = t.def, t.instance && (e.instances[t.instance.instanceId] = t.instance), e;
}
function Go(t, e) {
  let n = t.instances[e];
  if (n) {
    let r = t.defs[n.defId], i = hs(t, (s) => jv(r, s));
    return i.defs[r.defId] = r, i.instances[n.instanceId] = n, i;
  }
  return bt();
}
function jv(t, e) {
  return !!(t.groupId && t.groupId === e.groupId);
}
function bt() {
  return { defs: {}, instances: {} };
}
function Qo(t, e) {
  return {
    defs: Object.assign(Object.assign({}, t.defs), e.defs),
    instances: Object.assign(Object.assign({}, t.instances), e.instances)
  };
}
function hs(t, e) {
  let n = Cn(t.defs, e), r = Cn(t.instances, (i) => n[i.defId]);
  return { defs: n, instances: r };
}
function $v(t, e) {
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
function qv(t, e) {
  return Array.isArray(t) ? _r(t, null, e, !0) : typeof t == "object" && t ? _r([t], null, e, !0) : t != null ? String(t) : null;
}
function ic(t) {
  return Array.isArray(t) ? t : typeof t == "string" ? t.split(/\s+/) : [];
}
const Xi = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: U,
  overlap: U,
  allow: U,
  className: ic,
  classNames: ic,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, Yv = {
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
function Ki(t, e) {
  let n = qv(t.constraint, e);
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
function Uu(t) {
  return t.reduce(Gv, Yv);
}
function Gv(t, e) {
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
const ni = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, Wu = {
  start: U,
  end: U,
  date: U,
  allDay: Boolean
}, Qv = Object.assign(Object.assign(Object.assign({}, ni), Wu), { extendedProps: U });
function Vu(t, e, n, r, i = Zo(n), s, o) {
  let { refined: a, extra: c } = ju(t, n, i), l = Xv(e, n), u = Wv(a, l, n.dateEnv, n.pluginHooks.recurringTypes);
  if (u) {
    let f = xo(a, c, e ? e.sourceId : "", u.allDay, !!u.duration, n, s);
    return f.recurringDef = {
      typeId: u.typeId,
      typeData: u.typeData,
      duration: u.duration
    }, { def: f, instance: null };
  }
  let d = Zv(a, l, n, r);
  if (d) {
    let f = xo(a, c, e ? e.sourceId : "", d.allDay, d.hasEnd, n, s), h = Yo(f.defId, d.range, d.forcedStartTzo, d.forcedEndTzo);
    return o && f.publicId && o[f.publicId] && (h.instanceId = o[f.publicId]), { def: f, instance: h };
  }
  return null;
}
function ju(t, e, n = Zo(e)) {
  return qo(t, n);
}
function Zo(t) {
  return Object.assign(Object.assign(Object.assign({}, Xi), Qv), t.pluginHooks.eventRefiners);
}
function xo(t, e, n, r, i, s, o) {
  let a = {
    title: t.title || "",
    groupId: t.groupId || "",
    publicId: t.id || "",
    url: t.url || "",
    recurringDef: null,
    defId: (o && t.id ? o[t.id] : "") || Mn(),
    sourceId: n,
    allDay: r,
    hasEnd: i,
    interactive: t.interactive,
    ui: Ki(t, s),
    extendedProps: Object.assign(Object.assign({}, t.extendedProps || {}), e)
  };
  for (let c of s.pluginHooks.eventDefMemberAdders)
    Object.assign(a, c(t));
  return Object.freeze(a.ui.classNames), Object.freeze(a.extendedProps), a;
}
function Zv(t, e, n, r) {
  let { allDay: i } = t, s, o = null, a = !1, c, l = null, u = t.start != null ? t.start : t.date;
  if (s = n.dateEnv.createMarkerMeta(u), s)
    o = s.marker;
  else if (!r)
    return null;
  return t.end != null && (c = n.dateEnv.createMarkerMeta(t.end)), i == null && (e != null ? i = e : i = (!s || s.isTimeUnspecified) && (!c || c.isTimeUnspecified)), i && o && (o = Ne(o)), c && (l = c.marker, i && (l = Ne(l)), o && l <= o && (l = null)), l ? a = !0 : r || (a = n.options.forceEventDuration || !1, l = n.dateEnv.add(o, i ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration)), {
    allDay: i,
    hasEnd: a,
    range: { start: o, end: l },
    forcedStartTzo: s ? s.forcedTzo : null,
    forcedEndTzo: c ? c.forcedTzo : null
  };
}
function Xv(t, e) {
  let n = null;
  return t && (n = t.defaultAllDay), n == null && (n = e.options.defaultAllDay), n;
}
const Kv = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
  // so multiple defs get grouped
};
function Jv(t, e) {
  return _r(em(t), null, e);
}
function em(t) {
  let e;
  return t === !0 ? e = [{}] : Array.isArray(t) ? e = t.filter((n) => n.daysOfWeek) : typeof t == "object" && t ? e = [t] : e = [], e = e.map((n) => Object.assign(Object.assign({}, Kv), n)), e;
}
function $u(t) {
  let e = Math.floor(On(t.start, t.end)) || 1, n = Ne(t.start), r = st(n, e);
  return { start: n, end: r };
}
function qu(t, e = Ce(0)) {
  let n = null, r = null;
  if (t.end) {
    r = Ne(t.end);
    let i = t.end.valueOf() - r.valueOf();
    i && i >= Mt(e) && (r = st(r, 1));
  }
  return t.start && (n = Ne(t.start), r && r <= n && (r = st(n, 1))), { start: n, end: r };
}
function Vn(t, e, n, r) {
  return r === "year" ? Ce(n.diffWholeYears(t, e), "year") : r === "month" ? Ce(n.diffWholeMonths(t, e), "month") : mv(t, e);
}
function tm(t, e) {
  return t.left >= e.left && t.left < e.right && t.top >= e.top && t.top < e.bottom;
}
function Yu(t, e) {
  let n = {
    left: Math.max(t.left, e.left),
    right: Math.min(t.right, e.right),
    top: Math.max(t.top, e.top),
    bottom: Math.min(t.bottom, e.bottom)
  };
  return n.left < n.right && n.top < n.bottom ? n : !1;
}
function nm(t, e) {
  return {
    left: Math.min(Math.max(t.left, e.left), e.right),
    top: Math.min(Math.max(t.top, e.top), e.bottom)
  };
}
function rm(t) {
  return {
    left: (t.left + t.right) / 2,
    top: (t.top + t.bottom) / 2
  };
}
function im(t, e) {
  return {
    left: t.left - e.left,
    top: t.top - e.top
  };
}
let Us;
function Gu() {
  return Us == null && (Us = sm()), Us;
}
function sm() {
  if (typeof document > "u")
    return !0;
  let t = document.createElement("div");
  t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.innerHTML = "<table><tr><td><div></div></td></tr></table>", t.querySelector("table").style.height = "100px", t.querySelector("div").style.height = "100%", document.body.appendChild(t);
  let n = t.querySelector("div").offsetHeight > 0;
  return document.body.removeChild(t), n;
}
const Ws = bt();
class om {
  constructor() {
    this.getKeysForEventDefs = he(this._getKeysForEventDefs), this.splitDateSelection = he(this._splitDateSpan), this.splitEventStore = he(this._splitEventStore), this.splitIndividualUi = he(this._splitIndividualUi), this.splitEventDrag = he(this._splitInteraction), this.splitEventResize = he(this._splitInteraction), this.eventUiBuilders = {};
  }
  splitProps(e) {
    let n = this.getKeyInfo(e), r = this.getKeysForEventDefs(e.eventStore), i = this.splitDateSelection(e.dateSelection), s = this.splitIndividualUi(e.eventUiBases, r), o = this.splitEventStore(e.eventStore, r), a = this.splitEventDrag(e.eventDrag), c = this.splitEventResize(e.eventResize), l = {};
    this.eventUiBuilders = Jt(n, (u, d) => this.eventUiBuilders[d] || he(am));
    for (let u in n) {
      let d = n[u], f = o[u] || Ws, h = this.eventUiBuilders[u];
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
    return Jt(e.defs, (n) => this.getKeysForEventDef(n));
  }
  _splitEventStore(e, n) {
    let { defs: r, instances: i } = e, s = {};
    for (let o in r)
      for (let a of n[o])
        s[a] || (s[a] = bt()), s[a].defs[o] = r[o];
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
          affectedEvents: r[a] || Ws,
          mutatedEvents: s[a] || Ws,
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
function am(t, e, n) {
  let r = [];
  t && r.push(t), e && r.push(e);
  let i = {
    "": Uu(r)
  };
  return n && Object.assign(i, n), i;
}
function lm(t, e) {
  let n = null, r = null;
  return t.start && (n = e.createMarker(t.start)), t.end && (r = e.createMarker(t.end)), !n && !r || n && r && r < n ? null : { start: n, end: r };
}
function sc(t, e) {
  let n = [], { start: r } = e, i, s;
  for (t.sort(cm), i = 0; i < t.length; i += 1)
    s = t[i], s.start > r && n.push({ start: r, end: s.start }), s.end > r && (r = s.end);
  return r < e.end && n.push({ start: r, end: e.end }), n;
}
function cm(t, e) {
  return t.start.valueOf() - e.start.valueOf();
}
function Rn(t, e) {
  let { start: n, end: r } = t, i = null;
  return e.start !== null && (n === null ? n = e.start : n = new Date(Math.max(n.valueOf(), e.start.valueOf()))), e.end != null && (r === null ? r = e.end : r = new Date(Math.min(r.valueOf(), e.end.valueOf()))), (n === null || r === null || n < r) && (i = { start: n, end: r }), i;
}
function um(t, e) {
  return (t.start === null ? null : t.start.valueOf()) === (e.start === null ? null : e.start.valueOf()) && (t.end === null ? null : t.end.valueOf()) === (e.end === null ? null : e.end.valueOf());
}
function Xo(t, e) {
  return (t.end === null || e.start === null || t.end > e.start) && (t.start === null || e.end === null || t.start < e.end);
}
function ps(t, e) {
  return (t.start === null || e.start !== null && e.start >= t.start) && (t.end === null || e.end !== null && e.end <= t.end);
}
function Kt(t, e) {
  return (t.start === null || e >= t.start) && (t.end === null || e < t.end);
}
function fm(t, e) {
  return e.start != null && t < e.start ? e.start : e.end != null && t >= e.end ? new Date(e.end.valueOf() - 1) : t;
}
function Qu(t, e, n, r) {
  return {
    dow: t.getUTCDay(),
    isDisabled: !!(r && !Kt(r.activeRange, t)),
    isOther: !!(r && !Kt(r.currentRange, t)),
    isToday: !!(e && Kt(e, t)),
    isPast: !!(n ? t < n : e && t < e.start),
    isFuture: !!(n ? t > n : e && t >= e.end)
  };
}
function Ko(t, e) {
  let n = [
    "fc-day",
    `fc-day-${dv[t.dow]}`
  ];
  return t.isDisabled ? n.push("fc-day-disabled") : (t.isToday && (n.push("fc-day-today"), n.push(e.getClass("today"))), t.isPast && n.push("fc-day-past"), t.isFuture && n.push("fc-day-future"), t.isOther && n.push("fc-day-other")), n;
}
const dm = ze({ year: "numeric", month: "long", day: "numeric" }), hm = ze({ week: "long" });
function Ji(t, e, n = "day", r = !0) {
  const { dateEnv: i, options: s, calendarApi: o } = t;
  let a = i.format(e, n === "week" ? hm : dm);
  if (s.navLinks) {
    let c = i.toDate(e);
    const l = (u) => {
      let d = n === "day" ? s.navLinkDayClick : n === "week" ? s.navLinkWeekClick : null;
      typeof d == "function" ? d.call(o, i.toDate(e), u) : (typeof d == "string" && (n = d), o.zoomTo(e, n));
    };
    return Object.assign({ title: gr(s.navLinkHint, [a, c], a), "data-navlink": "" }, r ? Pu(l) : { onClick: l });
  }
  return { "aria-label": a };
}
let Vs = null;
function pm() {
  return Vs === null && (Vs = gm()), Vs;
}
function gm() {
  let t = document.createElement("div");
  pr(t, {
    position: "absolute",
    top: -1e3,
    left: 0,
    border: 0,
    padding: 0,
    overflow: "scroll",
    direction: "rtl"
  }), t.innerHTML = "<div></div>", document.body.appendChild(t);
  let n = t.firstChild.getBoundingClientRect().left > t.getBoundingClientRect().left;
  return Ho(t), n;
}
let js;
function vm() {
  return js || (js = mm()), js;
}
function mm() {
  let t = document.createElement("div");
  t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-9999px", t.style.left = "-9999px", document.body.appendChild(t);
  let e = Zu(t);
  return document.body.removeChild(t), e;
}
function Zu(t) {
  return {
    x: t.offsetHeight - t.clientHeight,
    y: t.offsetWidth - t.clientWidth
  };
}
function bm(t, e = !1) {
  let n = window.getComputedStyle(t), r = parseInt(n.borderLeftWidth, 10) || 0, i = parseInt(n.borderRightWidth, 10) || 0, s = parseInt(n.borderTopWidth, 10) || 0, o = parseInt(n.borderBottomWidth, 10) || 0, a = Zu(t), c = a.y - r - i, l = a.x - s - o, u = {
    borderLeft: r,
    borderRight: i,
    borderTop: s,
    borderBottom: o,
    scrollbarBottom: l,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };
  return pm() && n.direction === "rtl" ? u.scrollbarLeft = c : u.scrollbarRight = c, e && (u.paddingLeft = parseInt(n.paddingLeft, 10) || 0, u.paddingRight = parseInt(n.paddingRight, 10) || 0, u.paddingTop = parseInt(n.paddingTop, 10) || 0, u.paddingBottom = parseInt(n.paddingBottom, 10) || 0), u;
}
function ym(t, e = !1, n) {
  let r = n ? t.getBoundingClientRect() : Jo(t), i = bm(t, e), s = {
    left: r.left + i.borderLeft + i.scrollbarLeft,
    right: r.right - i.borderRight - i.scrollbarRight,
    top: r.top + i.borderTop,
    bottom: r.bottom - i.borderBottom - i.scrollbarBottom
  };
  return e && (s.left += i.paddingLeft, s.right -= i.paddingRight, s.top += i.paddingTop, s.bottom -= i.paddingBottom), s;
}
function Jo(t) {
  let e = t.getBoundingClientRect();
  return {
    left: e.left + window.pageXOffset,
    top: e.top + window.pageYOffset,
    right: e.right + window.pageXOffset,
    bottom: e.bottom + window.pageYOffset
  };
}
function xm(t) {
  let e = Xu(t), n = t.getBoundingClientRect();
  for (let r of e) {
    let i = Yu(n, r.getBoundingClientRect());
    if (i)
      n = i;
    else
      return null;
  }
  return n;
}
function Xu(t) {
  let e = [];
  for (; t instanceof HTMLElement; ) {
    let n = window.getComputedStyle(t);
    if (n.position === "fixed")
      break;
    /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && e.push(t), t = t.parentNode;
  }
  return e;
}
function _m(t, e, n) {
  let r = !1, i = function(a) {
    r || (r = !0, e(a));
  }, s = function(a) {
    r || (r = !0, n(a));
  }, o = t(i, s);
  o && typeof o.then == "function" && o.then(i, s);
}
class gs {
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
    Em(this.handlers, e, n);
  }
  off(e, n) {
    wm(this.handlers, e, n);
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
function Em(t, e, n) {
  (t[e] || (t[e] = [])).push(n);
}
function wm(t, e, n) {
  n ? t[e] && (t[e] = t[e].filter((r) => r !== n)) : delete t[e];
}
class Xn {
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
    return Wr(this.tops || [], e.tops || []) && Wr(this.bottoms || [], e.bottoms || []) && Wr(this.lefts || [], e.lefts || []) && Wr(this.rights || [], e.rights || []);
  }
}
function Wr(t, e) {
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (Math.round(t[r]) !== Math.round(e[r]))
      return !1;
  return !0;
}
class ea {
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
class Sm extends ea {
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
class Am extends ea {
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
class wr {
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
wr.prototype.classes = {};
wr.prototype.iconClasses = {};
wr.prototype.baseIconClass = "";
wr.prototype.iconOverridePrefix = "";
function oc(t) {
  t();
  let e = fe.debounceRendering, n = [];
  function r(i) {
    n.push(i);
  }
  for (fe.debounceRendering = r, xr(R(Cm, {}), document.createElement("div")); n.length; )
    n.shift()();
  fe.debounceRendering = e;
}
class Cm extends mt {
  render() {
    return R("div", {});
  }
  componentDidMount() {
    this.setState({});
  }
}
function Ku(t) {
  let e = yg(t), n = e.Provider;
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
class Dm {
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
const tn = Ku({});
function Rm(t, e, n, r, i, s, o, a, c, l, u, d, f) {
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
      return new Dm(h, l, Ce(n.scrollTime), n.scrollTimeReset);
    },
    registerInteractiveComponent: d,
    unregisterInteractiveComponent: f
  };
}
class Nn extends mt {
  shouldComponentUpdate(e, n) {
    return this.debug && console.log(bo(e, this.props), bo(n, this.state)), !Hs(this.props, e, this.propEquality) || !Hs(this.state, n, this.stateEquality);
  }
  // HACK for freakin' React StrictMode
  safeSetState(e) {
    Hs(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e);
  }
}
Nn.addPropsEquality = Tm;
Nn.addStateEquality = km;
Nn.contextType = tn;
Nn.prototype.propEquality = {};
Nn.prototype.stateEquality = {};
class Te extends Nn {
}
Te.contextType = tn;
function Tm(t) {
  let e = Object.create(this.prototype.propEquality);
  Object.assign(e, t), this.prototype.propEquality = e;
}
function km(t) {
  let e = Object.create(this.prototype.stateEquality);
  Object.assign(e, t), this.prototype.stateEquality = e;
}
function en(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
class Vt extends Te {
  constructor() {
    super(...arguments), this.uid = Mn();
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
    !it(e, ".fc-event-mirror");
  }
  isValidDateDownEl(e) {
    return !it(e, ".fc-event:not(.fc-bg-event)") && !it(e, ".fc-more-link") && // a "more.." link
    !it(e, "a[data-navlink]") && // a clickable nav link
    !it(e, ".fc-popover");
  }
}
function Im(t, e) {
  switch (e.type) {
    case "CHANGE_DATE":
      return e.dateMarker;
    default:
      return t;
  }
}
function Mm(t, e) {
  let n = t.initialDate;
  return n != null ? e.createMarker(n) : Sr(t.now, e);
}
function Sr(t, e) {
  return typeof t == "function" && (t = t()), t == null ? e.createNowMarker() : e.createMarker(t);
}
class Ju {
  constructor(e) {
    this.props = e, this.nowDate = Sr(e.nowInput, e.dateEnv), this.initHiddenDays();
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
    return s = this.buildValidRange(), s = this.trimHiddenDays(s), r && (e = fm(e, s)), o = this.buildCurrentRangeInfo(e, n), a = /^(year|month|week|day)$/.test(o.unit), c = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, a), c = this.trimHiddenDays(c), l = c, i.showNonCurrentDates || (l = Rn(l, o.range)), l = this.adjustActiveRange(l), l = Rn(l, s), u = Xo(o.range, s), Kt(c, e) || (e = c.start), {
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
    return r.duration ? (i = r.duration, s = r.durationUnit, o = this.buildRangeFromDuration(e, n, i, s)) : (a = this.props.dayCount) ? (s = "day", o = this.buildRangeFromDayCount(e, n, a)) : (o = this.buildCustomVisibleRange(e)) ? s = r.dateEnv.greatestWholeUnit(o.start, o.end).unit : (i = this.getFallbackDuration(), s = mo(i).unit, o = this.buildRangeFromDuration(e, n, i, s)), { duration: i, unit: s, range: o };
  }
  getFallbackDuration() {
    return Ce({ day: 1 });
  }
  // Returns a new activeRange to have time values (un-ambiguate)
  // slotMinTime or slotMaxTime causes the range to expand.
  adjustActiveRange(e) {
    let { dateEnv: n, usesMinMaxTime: r, slotMinTime: i, slotMaxTime: s } = this.props, { start: o, end: a } = e;
    return r && (qn(i) < 0 && (o = Ne(o), o = n.add(o, i)), qn(s) > 1 && (a = Ne(a), a = st(a, -1), a = n.add(a, s))), { start: o, end: a };
  }
  // Builds the "current" range when it is specified as an explicit duration.
  // `unit` is the already-computed greatestDurationDenominator unit of duration.
  buildRangeFromDuration(e, n, r, i) {
    let { dateEnv: s, dateAlignment: o } = this.props, a, c, l;
    if (!o) {
      let { dateIncrement: d } = this.props;
      d && Mt(d) < Mt(r) ? o = mo(d).unit : o = i;
    }
    qn(r) <= 1 && this.isHiddenDay(a) && (a = this.skipHiddenDays(a, n), a = Ne(a));
    function u() {
      a = s.startOf(e, o), c = s.add(a, r), l = { start: a, end: c };
    }
    return u(), this.trimHiddenDays(l) || (e = this.skipHiddenDays(e, n), u()), l;
  }
  // Builds the "current" range when a dayCount is specified.
  buildRangeFromDayCount(e, n, r) {
    let { dateEnv: i, dateAlignment: s } = this.props, o = 0, a = e, c;
    s && (a = i.startOf(a, s)), a = Ne(a), a = this.skipHiddenDays(a, n), c = a;
    do
      c = st(c, 1), this.isHiddenDay(c) || (o += 1);
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
    return n || ((r = this.props.dateAlignment) ? Ce(1, r) : e || Ce({ days: 1 }));
  }
  refineRange(e) {
    if (e) {
      let n = lm(e, this.props.dateEnv);
      return n && (n = qu(n)), n;
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
      e = st(e, n);
    return e;
  }
}
function ef(t, e, n) {
  n.emitter.trigger("select", Object.assign(Object.assign({}, ta(t, n)), { jsEvent: e ? e.origEvent : null, view: n.viewApi || n.calendarApi.view }));
}
function Om(t, e) {
  e.emitter.trigger("unselect", {
    jsEvent: t ? t.origEvent : null,
    view: e.viewApi || e.calendarApi.view
  });
}
function ta(t, e) {
  let n = {};
  for (let r of e.pluginHooks.dateSpanTransforms)
    Object.assign(n, r(t, e));
  return Object.assign(n, Ym(t, e.dateEnv)), n;
}
function ac(t, e, n) {
  let { dateEnv: r, options: i } = n, s = e;
  return t ? (s = Ne(s), s = r.add(s, i.defaultAllDayEventDuration)) : s = r.add(s, i.defaultTimedEventDuration), s;
}
function na(t, e, n, r) {
  let i = es(t.defs, e), s = bt();
  for (let o in t.defs) {
    let a = t.defs[o];
    s.defs[o] = Nm(a, i[o], n, r);
  }
  for (let o in t.instances) {
    let a = t.instances[o], c = s.defs[a.defId];
    s.instances[o] = Bm(a, c, i[a.defId], n, r);
  }
  return s;
}
function Nm(t, e, n, r) {
  let i = n.standardProps || {};
  i.hasEnd == null && e.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
  let s = Object.assign(Object.assign(Object.assign({}, t), i), { ui: Object.assign(Object.assign({}, t.ui), i.ui) });
  n.extendedProps && (s.extendedProps = Object.assign(Object.assign({}, s.extendedProps), n.extendedProps));
  for (let o of r.pluginHooks.eventDefMutationAppliers)
    o(s, n, r);
  return !s.hasEnd && r.options.forceEventDuration && (s.hasEnd = !0), s;
}
function Bm(t, e, n, r, i) {
  let { dateEnv: s } = i, o = r.standardProps && r.standardProps.allDay === !0, a = r.standardProps && r.standardProps.hasEnd === !1, c = Object.assign({}, t);
  return o && (c.range = $u(c.range)), r.datesDelta && n.startEditable && (c.range = {
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
    end: ac(e.allDay, c.range.start, i)
  }), e.allDay && (c.range = {
    start: Ne(c.range.start),
    end: Ne(c.range.end)
  }), c.range.end < c.range.start && (c.range.end = ac(e.allDay, c.range.start, i)), c;
}
class Un {
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
class Le {
  // instance will be null if expressing a recurring event that has no current instances,
  // OR if trying to validate an incoming external event that has no dates assigned
  constructor(e, n, r) {
    this._context = e, this._def = n, this._instance = r || null;
  }
  /*
  TODO: make event struct more responsible for this
  */
  setProp(e, n) {
    if (e in Wu)
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    else if (e === "id")
      n = ni[e](n), this.mutate({
        standardProps: { publicId: n }
        // hardcoded internal name
      });
    else if (e in ni)
      n = ni[e](n), this.mutate({
        standardProps: { [e]: n }
      });
    else if (e in Xi) {
      let r = Xi[e](n);
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
      let s = this._instance.range, o = Vn(s.start, i, r, n.granularity);
      n.maintainDuration ? this.mutate({ datesDelta: o }) : this.mutate({ startDelta: o });
    }
  }
  setEnd(e, n = {}) {
    let { dateEnv: r } = this._context, i;
    if (!(e != null && (i = r.createMarker(e), !i)) && this._instance)
      if (i) {
        let s = Vn(this._instance.range.end, i, r, n.granularity);
        this.mutate({ endDelta: s });
      } else
        this.mutate({ standardProps: { hasEnd: !1 } });
  }
  setDates(e, n, r = {}) {
    let { dateEnv: i } = this._context, s = { allDay: r.allDay }, o = i.createMarker(e), a;
    if (o && !(n != null && (a = i.createMarker(n), !a)) && this._instance) {
      let c = this._instance.range;
      r.allDay === !0 && (c = $u(c));
      let l = Vn(c.start, o, i, r.granularity);
      if (a) {
        let u = Vn(c.end, a, i, r.granularity);
        rv(l, u) ? this.mutate({ datesDelta: l, standardProps: s }) : this.mutate({ startDelta: l, endDelta: u, standardProps: s });
      } else
        s.hasEnd = !1, this.mutate({ datesDelta: l, standardProps: s });
    }
  }
  moveStart(e) {
    let n = Ce(e);
    n && this.mutate({ startDelta: n });
  }
  moveEnd(e) {
    let n = Ce(e);
    n && this.mutate({ endDelta: n });
  }
  moveDates(e) {
    let n = Ce(e);
    n && this.mutate({ datesDelta: n });
  }
  setAllDay(e, n = {}) {
    let r = { allDay: e }, { maintainDuration: i } = n;
    i == null && (i = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (r.hasEnd = i), this.mutate({ standardProps: r });
  }
  formatRange(e) {
    let { dateEnv: n } = this._context, r = this._instance, i = ze(e);
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
      let r = this._def, i = this._context, { eventStore: s } = i.getCurrentData(), o = Go(s, n.instanceId);
      o = na(o, {
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
      let c = new Le(i, r, n);
      this._def = o.defs[r.defId], this._instance = o.instances[n.instanceId], i.dispatch({
        type: "MERGE_EVENTS",
        eventStore: o
      }), i.emitter.trigger("eventChange", {
        oldEvent: c,
        event: this,
        relatedEvents: Sn(o, i, n),
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
    let e = this._context, n = tf(this);
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
    return e ? new Un(this._context, this._context.getCurrentData().eventSources[e]) : null;
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
function tf(t) {
  let e = t._def, n = t._instance;
  return {
    defs: { [e.defId]: e },
    instances: n ? { [n.instanceId]: n } : {}
  };
}
function Sn(t, e, n) {
  let { defs: r, instances: i } = t, s = [], o = n ? n.instanceId : "";
  for (let a in i) {
    let c = i[a], l = r[c.defId];
    c.instanceId !== o && s.push(new Le(e, l, c));
  }
  return s;
}
function lc(t, e, n, r) {
  let i = {}, s = {}, o = {}, a = [], c = [], l = es(t.defs, e);
  for (let u in t.defs) {
    let d = t.defs[u];
    l[d.defId].display === "inverse-background" && (d.groupId ? (i[d.groupId] = [], o[d.groupId] || (o[d.groupId] = d)) : s[u] = []);
  }
  for (let u in t.instances) {
    let d = t.instances[u], f = t.defs[d.defId], h = l[f.defId], g = d.range, p = !f.allDay && r ? qu(g, r) : g, v = Rn(p, n);
    v && (h.display === "inverse-background" ? f.groupId ? i[f.groupId].push(v) : s[d.defId].push(v) : h.display !== "none" && (h.display === "background" ? a : c).push({
      def: f,
      ui: h,
      instance: d,
      range: v,
      isStart: p.start && p.start.valueOf() === v.start.valueOf(),
      isEnd: p.end && p.end.valueOf() === v.end.valueOf()
    }));
  }
  for (let u in i) {
    let d = i[u], f = sc(d, n);
    for (let h of f) {
      let g = o[u], p = l[g.defId];
      a.push({
        def: g,
        ui: p,
        instance: null,
        range: h,
        isStart: !1,
        isEnd: !1
      });
    }
  }
  for (let u in s) {
    let d = s[u], f = sc(d, n);
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
function Pm(t) {
  return t.ui.display === "background" || t.ui.display === "inverse-background";
}
function cc(t, e) {
  t.fcSeg = e;
}
function Kn(t) {
  return t.fcSeg || t.parentNode.fcSeg || // for the harness
  null;
}
function es(t, e) {
  return Jt(t, (n) => nf(n, e));
}
function nf(t, e) {
  let n = [];
  return e[""] && n.push(e[""]), e[t.defId] && n.push(e[t.defId]), n.push(t.ui), Uu(n);
}
function rf(t, e) {
  let n = t.map(Lm);
  return n.sort((r, i) => Zg(r, i, e)), n.map((r) => r._seg);
}
function Lm(t) {
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
function Hm(t, e) {
  let { pluginHooks: n } = e, r = n.isDraggableTransformers, { def: i, ui: s } = t.eventRange, o = s.startEditable;
  for (let a of r)
    o = a(o, i, s, e);
  return o;
}
function zm(t, e) {
  return t.isStart && t.eventRange.ui.durationEditable && e.options.eventResizableFromStart;
}
function Fm(t, e) {
  return t.isEnd && t.eventRange.ui.durationEditable;
}
function sf(t, e, n, r, i, s, o) {
  let { dateEnv: a, options: c } = n, { displayEventTime: l, displayEventEnd: u } = c, d = t.eventRange.def, f = t.eventRange.instance;
  l == null && (l = r !== !1), u == null && (u = i !== !1);
  let h = f.range.start, g = f.range.end, p = s || t.start || t.eventRange.range.start, v = o || t.end || t.eventRange.range.end, _ = Ne(h).valueOf() === Ne(p).valueOf(), y = Ne(vn(g, -1)).valueOf() === Ne(vn(v, -1)).valueOf();
  return l && !d.allDay && (_ || y) ? (p = _ ? h : p, v = y ? g : v, u && d.hasEnd ? a.formatRange(p, v, e, {
    forcedStartTzo: s ? null : f.forcedStartTzo,
    forcedEndTzo: o ? null : f.forcedEndTzo
  }) : a.format(p, e, {
    forcedTzo: s ? null : f.forcedStartTzo
    // nooooo, same
  })) : "";
}
function hn(t, e, n) {
  let r = t.eventRange.range;
  return {
    isPast: r.end < (n || e.start),
    isFuture: r.start >= (n || e.end),
    isToday: e && Kt(e, r.start)
  };
}
function Um(t) {
  let e = ["fc-event"];
  return t.isMirror && e.push("fc-event-mirror"), t.isDraggable && e.push("fc-event-draggable"), (t.isStartResizable || t.isEndResizable) && e.push("fc-event-resizable"), t.isDragging && e.push("fc-event-dragging"), t.isResizing && e.push("fc-event-resizing"), t.isSelected && e.push("fc-event-selected"), t.isStart && e.push("fc-event-start"), t.isEnd && e.push("fc-event-end"), t.isPast && e.push("fc-event-past"), t.isToday && e.push("fc-event-today"), t.isFuture && e.push("fc-event-future"), e;
}
function of(t) {
  return t.instance ? t.instance.instanceId : `${t.def.defId}:${t.range.start.toISOString()}`;
}
function af(t, e) {
  let { def: n, instance: r } = t.eventRange, { url: i } = n;
  if (i)
    return { href: i };
  let { emitter: s, options: o } = e, { eventInteractive: a } = o;
  return a == null && (a = n.interactive, a == null && (a = !!s.hasHandlers("eventClick"))), a ? Lu((c) => {
    s.trigger("eventClick", {
      el: c.target,
      event: new Le(e, n, r),
      jsEvent: c,
      view: e.viewApi
    });
  }) : {};
}
const Wm = {
  start: U,
  end: U,
  allDay: Boolean
};
function Vm(t, e, n) {
  let r = jm(t, e), { range: i } = r;
  if (!i.start)
    return null;
  if (!i.end) {
    if (n == null)
      return null;
    i.end = e.add(i.start, n);
  }
  return r;
}
function jm(t, e) {
  let { refined: n, extra: r } = qo(t, Wm), i = n.start ? e.createMarkerMeta(n.start) : null, s = n.end ? e.createMarkerMeta(n.end) : null, { allDay: o } = n;
  return o == null && (o = i && i.isTimeUnspecified && (!s || s.isTimeUnspecified)), Object.assign({ range: {
    start: i ? i.marker : null,
    end: s ? s.marker : null
  }, allDay: o }, r);
}
function $m(t, e) {
  return um(t.range, e.range) && t.allDay === e.allDay && qm(t, e);
}
function qm(t, e) {
  for (let n in e)
    if (n !== "range" && n !== "allDay" && t[n] !== e[n])
      return !1;
  for (let n in t)
    if (!(n in e))
      return !1;
  return !0;
}
function Ym(t, e) {
  return Object.assign(Object.assign({}, cf(t.range, e, t.allDay)), { allDay: t.allDay });
}
function lf(t, e, n) {
  return Object.assign(Object.assign({}, cf(t, e, n)), { timeZone: e.timeZone });
}
function cf(t, e, n) {
  return {
    start: e.toDate(t.start),
    end: e.toDate(t.end),
    startStr: e.formatIso(t.start, { omitTime: n }),
    endStr: e.formatIso(t.end, { omitTime: n })
  };
}
function Gm(t, e, n) {
  let r = ju({ editable: !1 }, n), i = xo(
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
    ui: nf(i, e),
    instance: Yo(i.defId, t.range),
    range: t.range,
    isStart: !0,
    isEnd: !0
  };
}
let uf = {};
function Qm(t, e) {
  uf[t] = e;
}
function Zm(t) {
  return new uf[t]();
}
class Xm {
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
    return ht(e);
  }
  markerToArray(e) {
    return fn(e);
  }
}
Qm("gregory", Xm);
const Km = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function Jm(t) {
  let e = Km.exec(t);
  if (e) {
    let n = new Date(Date.UTC(Number(e[1]), e[3] ? Number(e[3]) - 1 : 0, Number(e[5] || 1), Number(e[7] || 0), Number(e[8] || 0), Number(e[10] || 0), e[12] ? +`0.${e[12]}` * 1e3 : 0));
    if (zu(n)) {
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
class e1 {
  constructor(e) {
    let n = this.timeZone = e.timeZone, r = n !== "local" && n !== "UTC";
    e.namedTimeZoneImpl && r && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(n)), this.canComputeOffset = !!(!r || this.namedTimeZoneImpl), this.calendarSystem = Zm(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, e.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof e.firstDay == "number" && (this.weekDow = e.firstDay), typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = e.weekText != null ? e.weekText : e.locale.options.weekText, this.weekTextLong = (e.weekTextLong != null ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
  }
  // Creating / Parsing
  createMarker(e) {
    let n = this.createMarkerMeta(e);
    return n === null ? null : n.marker;
  }
  createNowMarker() {
    return this.canComputeOffset ? this.timestampToMarker((/* @__PURE__ */ new Date()).valueOf()) : ht(Zl(/* @__PURE__ */ new Date()));
  }
  createMarkerMeta(e) {
    if (typeof e == "string")
      return this.parse(e);
    let n = null;
    return typeof e == "number" ? n = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (n = this.timestampToMarker(e))) : Array.isArray(e) && (n = ht(e)), n === null || !zu(n) ? null : { marker: n, isTimeUnspecified: !1, forcedTzo: null };
  }
  parse(e) {
    let n = Jm(e);
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
    return dn(e) === dn(n) && r.getMarkerDay(e) === r.getMarkerDay(n) && r.getMarkerMonth(e) === r.getMarkerMonth(n) ? r.getMarkerYear(n) - r.getMarkerYear(e) : null;
  }
  diffWholeMonths(e, n) {
    let { calendarSystem: r } = this;
    return dn(e) === dn(n) && r.getMarkerDay(e) === r.getMarkerDay(n) ? r.getMarkerMonth(n) - r.getMarkerMonth(e) + (r.getMarkerYear(n) - r.getMarkerYear(e)) * 12 : null;
  }
  // Range / Duration
  greatestWholeUnit(e, n) {
    let r = this.diffWholeYears(e, n);
    return r !== null ? { unit: "year", value: r } : (r = this.diffWholeMonths(e, n), r !== null ? { unit: "month", value: r } : (r = bv(e, n), r !== null ? { unit: "week", value: r } : (r = Gi(e, n), r !== null ? { unit: "day", value: r } : (r = pv(e, n), ei(r) ? { unit: "hour", value: r } : (r = gv(e, n), ei(r) ? { unit: "minute", value: r } : (r = vv(e, n), ei(r) ? { unit: "second", value: r } : { unit: "millisecond", value: n.valueOf() - e.valueOf() }))))));
  }
  countDurationsBetween(e, n, r) {
    let i;
    return r.years && (i = this.diffWholeYears(e, n), i !== null) ? i / ov(r) : r.months && (i = this.diffWholeMonths(e, n), i !== null) ? i / av(r) : r.days && (i = Gi(e, n), i !== null) ? i / qn(r) : (n.valueOf() - e.valueOf()) / Mt(r);
  }
  // Start-Of
  // these DON'T return zoned-dates. only UTC start-of dates
  startOf(e, n) {
    return n === "year" ? this.startOfYear(e) : n === "month" ? this.startOfMonth(e) : n === "week" ? this.startOfWeek(e) : n === "day" ? Ne(e) : n === "hour" ? yv(e) : n === "minute" ? xv(e) : n === "second" ? _v(e) : null;
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
    return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : Ev(e, this.weekDow, this.weekDoy);
  }
  // TODO: choke on timeZoneName: long
  format(e, n, r = {}) {
    return n.format({
      marker: e,
      timeZoneOffset: r.forcedTzo != null ? r.forcedTzo : this.offsetForMarker(e)
    }, this);
  }
  formatRange(e, n, r, i = {}) {
    return i.isEndExclusive && (n = vn(n, -1)), r.formatRange({
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
    return n.omitTimeZoneOffset || (n.forcedTzo != null ? r = n.forcedTzo : r = this.offsetForMarker(e)), Fu(e, r, n.omitTime);
  }
  // TimeZone
  timestampToMarker(e) {
    return this.timeZone === "local" ? ht(Zl(new Date(e))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(e) : ht(this.namedTimeZoneImpl.timestampToArray(e));
  }
  offsetForMarker(e) {
    return this.timeZone === "local" ? -Xl(fn(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(fn(e)) : null;
  }
  // Conversion
  toDate(e, n) {
    return this.timeZone === "local" ? Xl(fn(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(fn(e)) * 1e3 * 60) : new Date(e.valueOf() - (n || 0));
  }
}
class ff {
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
      span: ra(a, o)
      // guaranteed to intersect
    }, ...s), i) : (r.push(e), 0);
  }
  insertEntryAt(e, n) {
    let { entriesByLevel: r, levelCoords: i } = this;
    n.lateral === -1 ? ($s(i, n.level, n.levelCoord), $s(r, n.level, [e])) : $s(r[n.level], n.lateral, e), this.stackCnts[An(e)] = n.stackCnt;
  }
  findInsertion(e) {
    let { levelCoords: n, entriesByLevel: r, strictOrder: i, stackCnts: s } = this, o = n.length, a = 0, c = -1, l = -1, u = null, d = 0;
    for (let g = 0; g < o; g += 1) {
      let p = n[g];
      if (!i && p >= a + e.thickness)
        break;
      let v = r[g], _, y = Eo(v, e.span.start, _o), m = y[0] + y[1];
      for (
        ;
        // loop through entries that horizontally intersect
        (_ = v[m]) && // but not past the whole entry list
        _.span.start < e.span.end;
      ) {
        let b = p + _.thickness;
        b > a && (a = b, u = _, c = g, l = m), b === a && (d = Math.max(d, s[An(_)] + 1)), m += 1;
      }
    }
    let f = 0;
    if (u)
      for (f = c + 1; f < o && n[f] < a; )
        f += 1;
    let h = -1;
    return f < o && n[f] === a && (h = Eo(r[f], e.span.end, _o)[0]), {
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
function _o(t) {
  return t.span.end;
}
function An(t) {
  return t.index + ":" + t.span.start;
}
function t1(t) {
  let e = [];
  for (let n of t) {
    let r = [], i = {
      span: n.span,
      entries: [n]
    };
    for (let s of e)
      ra(s.span, i.span) ? i = {
        entries: s.entries.concat(i.entries),
        span: n1(s.span, i.span)
      } : r.push(s);
    r.push(i), e = r;
  }
  return e;
}
function n1(t, e) {
  return {
    start: Math.min(t.start, e.start),
    end: Math.max(t.end, e.end)
  };
}
function ra(t, e) {
  let n = Math.max(t.start, e.start), r = Math.min(t.end, e.end);
  return n < r ? { start: n, end: r } : null;
}
function $s(t, e, n) {
  t.splice(e, 0, n);
}
function Eo(t, e, n) {
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
class tr {
  constructor(e) {
    this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
  }
  destroy() {
  }
}
function r1(t, e) {
  return {
    component: t,
    el: e.el,
    useEventCenter: e.useEventCenter != null ? e.useEventCenter : !0,
    isHitComboAllowed: e.isHitComboAllowed || null
  };
}
function ia(t) {
  return {
    [t.component.uid]: t
  };
}
const wo = {};
class i1 {
  constructor(e, n) {
    this.emitter = new gs();
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
const sa = {};
class s1 extends Te {
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
    return Gu() || o.push("fc-liquid-hack"), e.children(o, s, i, r);
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
function o1(t, e) {
  return !t || e > 10 ? ze({ weekday: "short" }) : e > 1 ? ze({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : ze({ weekday: "long" });
}
const df = "fc-col-header-cell";
function hf(t) {
  return t.text;
}
class oa extends Te {
  constructor() {
    super(...arguments), this.id = Mn(), this.queuedDomNodes = [], this.currentDomNodes = [], this.handleEl = (e) => {
      this.props.elRef && en(this.props.elRef, e);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: r } = n, { customGenerator: i, defaultGenerator: s, renderProps: o } = e, a = gf(e);
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
      c = !pf(e.generatorName, r);
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
      }, r), { elClasses: (r.elClasses || []).filter(a1) }));
    }
  }
  applyQueueudDomNodes() {
    const { queuedDomNodes: e, currentDomNodes: n } = this, r = this.base;
    if (!gn(e, n)) {
      n.forEach(Ho);
      for (let i of e)
        r.appendChild(i);
      this.currentDomNodes = e;
    }
  }
}
oa.addPropsEquality({
  elClasses: gn,
  elStyle: Wt,
  elAttrs: cv,
  renderProps: Wt
});
function pf(t, e) {
  var n;
  return !!(e.handleCustomRendering && t && (!((n = e.customRenderingMetaMap) === null || n === void 0) && n[t]));
}
function gf(t, e) {
  const n = Object.assign(Object.assign({}, t.elAttrs), { ref: t.elRef });
  return (t.elClasses || e) && (n.className = (t.elClasses || []).concat(e || []).concat(n.className || []).filter(Boolean).join(" ")), t.elStyle && (n.style = t.elStyle), n;
}
function a1(t) {
  return !!t;
}
const vf = Ku(0);
class yt extends mt {
  constructor() {
    super(...arguments), this.InnerContent = l1.bind(void 0, this), this.handleRootEl = (e) => {
      this.rootEl = e, this.props.elRef && en(this.props.elRef, e);
    };
  }
  render() {
    const { props: e } = this, n = c1(e.classNameGenerator, e.renderProps);
    if (e.children) {
      const r = gf(e, n), i = e.children(this.InnerContent, e.renderProps, r);
      return e.elTag ? R(e.elTag, r, i) : i;
    } else
      return R(oa, Object.assign(Object.assign({}, e), { elRef: this.handleRootEl, elTag: e.elTag || "div", elClasses: (e.elClasses || []).concat(n), renderId: this.context }));
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
yt.contextType = vf;
function l1(t, e) {
  const n = t.props;
  return R(oa, Object.assign({ renderProps: n.renderProps, generatorName: n.generatorName, customGenerator: n.customGenerator, defaultGenerator: n.defaultGenerator, renderId: t.context }, e));
}
function c1(t, e) {
  const n = typeof t == "function" ? t(e) : t || [];
  return typeof n == "string" ? [n] : n;
}
class u1 extends Te {
  render() {
    let { dateEnv: e, options: n, theme: r, viewApi: i } = this.context, { props: s } = this, { date: o, dateProfile: a } = s, c = Qu(o, s.todayRange, null, a), l = [df].concat(Ko(c, r)), u = e.format(o, s.dayHeaderFormat), d = !c.isDisabled && s.colCnt > 1 ? Ji(this.context, o) : {}, f = Object.assign(Object.assign(Object.assign({ date: e.toDate(o), view: i }, s.extraRenderProps), { text: u }), c);
    return R(yt, { elTag: "th", elClasses: l, elAttrs: Object.assign({ role: "columnheader", colSpan: s.colSpan, "data-date": c.isDisabled ? void 0 : jo(o) }, s.extraDataAttrs), renderProps: f, generatorName: "dayHeaderContent", customGenerator: n.dayHeaderContent, defaultGenerator: hf, classNameGenerator: n.dayHeaderClassNames, didMount: n.dayHeaderDidMount, willUnmount: n.dayHeaderWillUnmount }, (h) => R("div", { className: "fc-scrollgrid-sync-inner" }, !c.isDisabled && R(h, { elTag: "a", elAttrs: d, elClasses: [
      "fc-col-header-cell-cushion",
      s.isSticky && "fc-sticky"
    ] })));
  }
}
const f1 = ze({ weekday: "long" });
class d1 extends Te {
  render() {
    let { props: e } = this, { dateEnv: n, theme: r, viewApi: i, options: s } = this.context, o = st(/* @__PURE__ */ new Date(2592e5), e.dow), a = {
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
    return R(yt, { elTag: "th", elClasses: [
      df,
      ...Ko(a, r),
      ...e.extraClassNames || []
    ], elAttrs: Object.assign({ role: "columnheader", colSpan: e.colSpan }, e.extraDataAttrs), renderProps: l, generatorName: "dayHeaderContent", customGenerator: s.dayHeaderContent, defaultGenerator: hf, classNameGenerator: s.dayHeaderClassNames, didMount: s.dayHeaderDidMount, willUnmount: s.dayHeaderWillUnmount }, (u) => R(
      "div",
      { className: "fc-scrollgrid-sync-inner" },
      R(u, { elTag: "a", elClasses: [
        "fc-col-header-cell-cushion",
        e.isSticky && "fc-sticky"
      ], elAttrs: {
        "aria-label": n.format(o, f1)
      } })
    ));
  }
}
class Ar extends mt {
  constructor(e, n) {
    super(e, n), this.initialNowDate = Sr(n.options.now, n.dateEnv), this.initialNowQueriedMs = (/* @__PURE__ */ new Date()).valueOf(), this.state = this.computeTiming().currentState;
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
    let { props: e, context: n } = this, r = vn(this.initialNowDate, (/* @__PURE__ */ new Date()).valueOf() - this.initialNowQueriedMs), i = n.dateEnv.startOf(r, e.unit), s = n.dateEnv.add(i, Ce(1, e.unit)), o = s.valueOf() - r.valueOf();
    return o = Math.min(1e3 * 60 * 60 * 24, o), {
      currentState: { nowDate: i, todayRange: uc(i) },
      nextState: { nowDate: s, todayRange: uc(s) },
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
Ar.contextType = tn;
function uc(t) {
  let e = Ne(t), n = st(e, 1);
  return { start: e, end: n };
}
class mf extends Te {
  constructor() {
    super(...arguments), this.createDayHeaderFormatter = he(h1);
  }
  render() {
    let { context: e } = this, { dates: n, dateProfile: r, datesRepDistinctDays: i, renderIntro: s } = this.props, o = this.createDayHeaderFormatter(e.options.dayHeaderFormat, i, n.length);
    return R(Ar, { unit: "day" }, (a, c) => R(
      "tr",
      { role: "row" },
      s && s("day"),
      n.map((l) => i ? R(u1, { key: l.toISOString(), date: l, dateProfile: r, todayRange: c, colCnt: n.length, dayHeaderFormat: o }) : R(d1, { key: l.getUTCDay(), dow: l.getUTCDay(), dayHeaderFormat: o }))
    ));
  }
}
function h1(t, e, n) {
  return t || o1(e, n);
}
class bf {
  constructor(e, n) {
    let r = e.start, { end: i } = e, s = [], o = [], a = -1;
    for (; r < i; )
      n.isHiddenDay(r) ? s.push(a + 0.5) : (a += 1, s.push(a), o.push(r)), r = st(r, 1);
    this.dates = o, this.indices = s, this.cnt = o.length;
  }
  sliceRange(e) {
    let n = this.getDateDayIndex(e.start), r = this.getDateDayIndex(st(e.end, -1)), i = Math.max(0, n), s = Math.min(this.cnt - 1, r);
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
    let { indices: n } = this, r = Math.floor(On(this.dates[0], e));
    return r < 0 ? n[0] - 1 : r >= n.length ? n[n.length - 1] + 1 : n[r];
  }
}
class yf {
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
class xf {
  constructor() {
    this.sliceBusinessHours = he(this._sliceBusinessHours), this.sliceDateSelection = he(this._sliceDateSpan), this.sliceEventStore = he(this._sliceEventStore), this.sliceEventDrag = he(this._sliceInteraction), this.sliceEventResize = he(this._sliceInteraction), this.forceDayIfListItem = !1;
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
      { range: { start: e, end: vn(e, 1) }, allDay: !1 },
      // add 1 ms, protect against null range
      n,
      r,
      {},
      i,
      ...s
    );
  }
  _sliceBusinessHours(e, n, r, i, ...s) {
    return e ? this._sliceEventStore(Dn(e, Vr(n, !!r), i), {}, n, r, ...s).bg : [];
  }
  _sliceEventStore(e, n, r, i, ...s) {
    if (e) {
      let o = lc(e, n, Vr(r, !!i), i);
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
    let o = lc(e.mutatedEvents, n, Vr(r, !!i), i);
    return {
      segs: this.sliceEventRanges(o.fg, s),
      affectedInstances: e.affectedEvents.instances,
      isEvent: e.isEvent
    };
  }
  _sliceDateSpan(e, n, r, i, s, ...o) {
    if (!e)
      return [];
    let a = Vr(n, !!r), c = Rn(e.range, a);
    if (c) {
      e = Object.assign(Object.assign({}, e), { range: c });
      let l = Gm(e, i, s), u = this.sliceRange(e.range, ...o);
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
      end: st(r.start, 1)
    });
    let i = this.sliceRange(r, ...n);
    for (let s of i)
      s.eventRange = e, s.isStart = e.isStart && s.isStart, s.isEnd = e.isEnd && s.isEnd;
    return i;
  }
}
function Vr(t, e) {
  let n = t.activeRange;
  return e ? n : {
    start: vn(n.start, t.slotMinTime.milliseconds),
    end: vn(n.end, t.slotMaxTime.milliseconds - 864e5)
    // 864e5 = ms in a day
  };
}
function p1(t, e, n, r, i) {
  switch (e.type) {
    case "RECEIVE_EVENTS":
      return g1(t, n[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, i);
    case "RESET_RAW_EVENTS":
      return v1(t, n[e.sourceId], e.rawEvents, r.activeRange, i);
    case "ADD_EVENTS":
      return m1(
        t,
        e.eventStore,
        // new ones
        r ? r.activeRange : null,
        i
      );
    case "RESET_EVENTS":
      return e.eventStore;
    case "MERGE_EVENTS":
      return Qo(t, e.eventStore);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return r ? Dn(t, r.activeRange, i) : t;
    case "REMOVE_EVENTS":
      return $v(t, e.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return Ef(t, e.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return hs(t, (s) => !s.sourceId);
    case "REMOVE_ALL_EVENTS":
      return bt();
    default:
      return t;
  }
}
function g1(t, e, n, r, i, s) {
  if (e && // not already removed
  n === e.latestFetchId) {
    let o = _r(_f(i, e, s), e, s);
    return r && (o = Dn(o, r, s)), Qo(Ef(t, e.sourceId), o);
  }
  return t;
}
function v1(t, e, n, r, i) {
  const { defIdMap: s, instanceIdMap: o } = y1(t);
  let a = _r(_f(n, e, i), e, i, !1, s, o);
  return Dn(a, r, i);
}
function _f(t, e, n) {
  let r = n.options.eventDataTransform, i = e ? e.eventDataTransform : null;
  return i && (t = fc(t, i)), r && (t = fc(t, r)), t;
}
function fc(t, e) {
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
function m1(t, e, n, r) {
  return n && (e = Dn(e, n, r)), Qo(t, e);
}
function dc(t, e, n) {
  let { defs: r } = t, i = Jt(t.instances, (s) => r[s.defId].allDay ? s : Object.assign(Object.assign({}, s), { range: {
    start: n.createMarker(e.toDate(s.range.start, s.forcedStartTzo)),
    end: n.createMarker(e.toDate(s.range.end, s.forcedEndTzo))
  }, forcedStartTzo: n.canComputeOffset ? null : s.forcedStartTzo, forcedEndTzo: n.canComputeOffset ? null : s.forcedEndTzo }));
  return { defs: r, instances: i };
}
function Ef(t, e) {
  return hs(t, (n) => n.sourceId !== e);
}
function b1(t, e) {
  return {
    defs: t.defs,
    instances: Cn(t.instances, (n) => !e[n.instanceId])
  };
}
function y1(t) {
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
function wf(t, e, n) {
  let { instances: r } = t.mutatedEvents;
  for (let i in r)
    if (!ps(e.validRange, r[i].range))
      return !1;
  return Sf({ eventDrag: t }, n);
}
function x1(t, e, n) {
  return ps(e.validRange, t.range) ? Sf({ dateSelection: t }, n) : !1;
}
function Sf(t, e) {
  let n = e.getCurrentData(), r = Object.assign({ businessHours: n.businessHours, dateSelection: "", eventStore: n.eventStore, eventUiBases: n.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, t);
  return (e.pluginHooks.isPropsValid || _1)(r, e);
}
function _1(t, e, n = {}, r) {
  return !(t.eventDrag && !E1(t, e, n, r) || t.dateSelection && !w1(t, e, n, r));
}
function E1(t, e, n, r) {
  let i = e.getCurrentData(), s = t.eventDrag, o = s.mutatedEvents, a = o.defs, c = o.instances, l = es(a, s.isEvent ? t.eventUiBases : { "": i.selectionConfig });
  r && (l = Jt(l, r));
  let u = b1(t.eventStore, s.affectedEvents.instances), d = u.defs, f = u.instances, h = es(d, t.eventUiBases);
  for (let g in c) {
    let p = c[g], v = p.range, _ = l[p.defId], y = a[p.defId];
    if (!Af(_.constraints, v, u, t.businessHours, e))
      return !1;
    let { eventOverlap: m } = e.options, b = typeof m == "function" ? m : null;
    for (let A in f) {
      let w = f[A];
      if (Xo(v, w.range) && (h[w.defId].overlap === !1 && s.isEvent || _.overlap === !1 || b && !b(
        new Le(e, d[w.defId], w),
        // still event
        new Le(e, y, p)
      )))
        return !1;
    }
    let E = i.eventStore;
    for (let A of _.allows) {
      let w = Object.assign(Object.assign({}, n), { range: p.range, allDay: y.allDay }), D = E.defs[y.defId], B = E.instances[g], C;
      if (D ? C = new Le(e, D, B) : C = new Le(e, y), !A(ta(w, e), C))
        return !1;
    }
  }
  return !0;
}
function w1(t, e, n, r) {
  let i = t.eventStore, s = i.defs, o = i.instances, a = t.dateSelection, c = a.range, { selectionConfig: l } = e.getCurrentData();
  if (r && (l = r(l)), !Af(l.constraints, c, i, t.businessHours, e))
    return !1;
  let { selectOverlap: u } = e.options, d = typeof u == "function" ? u : null;
  for (let f in o) {
    let h = o[f];
    if (Xo(c, h.range) && (l.overlap === !1 || d && !d(new Le(e, s[h.defId], h), null)))
      return !1;
  }
  for (let f of l.allows) {
    let h = Object.assign(Object.assign({}, n), a);
    if (!f(ta(h, e), null))
      return !1;
  }
  return !0;
}
function Af(t, e, n, r, i) {
  for (let s of t)
    if (!A1(S1(s, e, n, r, i), e))
      return !1;
  return !0;
}
function S1(t, e, n, r, i) {
  return t === "businessHours" ? qs(Dn(r, e, i)) : typeof t == "string" ? qs(hs(n, (s) => s.groupId === t)) : typeof t == "object" && t ? qs(Dn(t, e, i)) : [];
}
function qs(t) {
  let { instances: e } = t, n = [];
  for (let r in e)
    n.push(e[r].range);
  return n;
}
function A1(t, e) {
  for (let n of t)
    if (ps(n, e))
      return !0;
  return !1;
}
class hc extends Error {
  constructor(e, n) {
    super(e), this.response = n;
  }
}
function C1(t, e, n) {
  t = t.toUpperCase();
  const r = {
    method: t
  };
  return t === "GET" ? e += (e.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(n) : (r.body = new URLSearchParams(n), r.headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  }), fetch(e, r).then((i) => {
    if (i.ok)
      return i.json().then((s) => [s, i], () => {
        throw new hc("Failure parsing JSON", i);
      });
    throw new hc("Request failed", i);
  });
}
class aa {
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
const jr = /^(visible|hidden)$/;
class D1 extends Te {
  constructor() {
    super(...arguments), this.handleEl = (e) => {
      this.el = e, en(this.props.elRef, e);
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
    if (jr.test(this.props.overflowX))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), { children: r } = e;
    for (let i = 0; i < r.length; i += 1)
      if (r[i].getBoundingClientRect().width > n)
        return !0;
    return !1;
  }
  needsYScrolling() {
    if (jr.test(this.props.overflowY))
      return !1;
    let { el: e } = this, n = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), { children: r } = e;
    for (let i = 0; i < r.length; i += 1)
      if (r[i].getBoundingClientRect().height > n)
        return !0;
    return !1;
  }
  getXScrollbarWidth() {
    return jr.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
  }
  getYScrollbarWidth() {
    return jr.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
  }
}
class Xt {
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
    return fv(this.currentMap, e, n, r);
  }
  getAll() {
    return Vo(this.currentMap);
  }
}
function R1(t) {
  let e = Fg(t, ".fc-scrollgrid-shrink"), n = 0;
  for (let r of e)
    n = Math.max(n, ev(r));
  return Math.ceil(n);
}
function Cf(t, e) {
  return t.liquid && e.liquid;
}
function T1(t, e) {
  return e.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
  Cf(t, e);
}
function k1(t, e, n, r) {
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
function I1(t, e) {
  return gn(t, e, Wt);
}
function M1(t, e) {
  let n = [];
  for (let r of t) {
    let i = r.span || 1;
    for (let s = 0; s < i; s += 1)
      n.push(R("col", { style: {
        width: r.width === "shrink" ? O1(e) : r.width || "",
        minWidth: r.minWidth || ""
      } }));
  }
  return R("colgroup", {}, ...n);
}
function O1(t) {
  return t ?? 4;
}
function N1(t) {
  for (let e of t)
    if (e.width === "shrink")
      return !0;
  return !1;
}
function B1(t, e) {
  let n = [
    "fc-scrollgrid",
    e.theme.getClass("table")
  ];
  return t && n.push("fc-scrollgrid-liquid"), n;
}
function P1(t, e) {
  let n = [
    "fc-scrollgrid-section",
    `fc-scrollgrid-section-${t.type}`,
    t.className
    // used?
  ];
  return e && t.liquid && t.maxHeight == null && n.push("fc-scrollgrid-section-liquid"), t.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
}
function So(t) {
  return R("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: t.clientWidth,
    minWidth: t.tableMinWidth
  } });
}
function ts(t) {
  let { stickyHeaderDates: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
function Df(t) {
  let { stickyFooterScrollbar: e } = t;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
class la extends Te {
  constructor() {
    super(...arguments), this.processCols = he((e) => e, I1), this.renderMicroColGroup = he(M1), this.scrollerRefs = new Xt(), this.scrollerElRefs = new Xt(this._handleScrollerEl.bind(this)), this.state = {
      shrinkWidth: null,
      forceYScrollbars: !1,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }, this.handleSizing = () => {
      this.safeSetState(Object.assign({ shrinkWidth: this.computeShrinkWidth() }, this.computeScrollerDims()));
    };
  }
  render() {
    let { props: e, state: n, context: r } = this, i = e.sections || [], s = this.processCols(e.cols), o = this.renderMicroColGroup(s, n.shrinkWidth), a = B1(e.liquid, r);
    e.collapsibleWidth && a.push("fc-scrollgrid-collapsible");
    let c = i.length, l = 0, u, d = [], f = [], h = [];
    for (; l < c && (u = i[l]).type === "header"; )
      d.push(this.renderSection(u, o, !0)), l += 1;
    for (; l < c && (u = i[l]).type === "body"; )
      f.push(this.renderSection(u, o, !1)), l += 1;
    for (; l < c && (u = i[l]).type === "footer"; )
      h.push(this.renderSection(u, o, !0)), l += 1;
    let g = !Gu();
    const p = { role: "rowgroup" };
    return R("table", {
      role: "grid",
      className: a.join(" "),
      style: { height: e.height }
    }, !!(!g && d.length) && R("thead", p, ...d), !!(!g && f.length) && R("tbody", p, ...f), !!(!g && h.length) && R("tfoot", p, ...h), g && R("tbody", p, ...d, ...f, ...h));
  }
  renderSection(e, n, r) {
    return "outerContent" in e ? R(Be, { key: e.key }, e.outerContent) : R("tr", { key: e.key, role: "presentation", className: P1(e, this.props.liquid).join(" ") }, this.renderChunkTd(e, n, e.chunk, r));
  }
  renderChunkTd(e, n, r, i) {
    if ("outerContent" in r)
      return r.outerContent;
    let { props: s } = this, { forceYScrollbars: o, scrollerClientWidths: a, scrollerClientHeights: c } = this.state, l = T1(s, e), u = Cf(s, e), d = s.liquid ? o ? "scroll" : l ? "auto" : "hidden" : "visible", f = e.key, h = k1(e, r, {
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
      R(D1, { ref: this.scrollerRefs.createRef(f), elRef: this.scrollerElRefs.createRef(f), overflowY: d, overflowX: s.liquid ? "hidden" : "visible", maxHeight: e.maxHeight, liquid: u, liquidIsAbsolute: !0 }, h)
    ));
  }
  _handleScrollerEl(e, n) {
    let r = L1(this.props.sections, n);
    r && en(r.chunk.scrollerElRef, e);
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
    return N1(this.props.cols) ? R1(this.scrollerElRefs.getAll()) : 0;
  }
  computeScrollerDims() {
    let e = vm(), { scrollerRefs: n, scrollerElRefs: r } = this, i = !1, s = {}, o = {};
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
la.addStateEquality({
  scrollerClientWidths: Wt,
  scrollerClientHeights: Wt
});
function L1(t, e) {
  for (let n of t)
    if (n.key === e)
      return n;
  return null;
}
class ca extends Te {
  constructor() {
    super(...arguments), this.handleEl = (e) => {
      this.el = e, e && cc(e, this.props.seg);
    };
  }
  render() {
    const { props: e, context: n } = this, { options: r } = n, { seg: i } = e, { eventRange: s } = i, { ui: o } = s, a = {
      event: new Le(n, s.def, s.instance),
      view: n.viewApi,
      timeText: e.timeText,
      textColor: o.textColor,
      backgroundColor: o.backgroundColor,
      borderColor: o.borderColor,
      isDraggable: !e.disableDragging && Hm(i, n),
      isStartResizable: !e.disableResizing && zm(i, n),
      isEndResizable: !e.disableResizing && Fm(i),
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
    return R(yt, Object.assign({}, e, { elRef: this.handleEl, elClasses: [
      ...Um(a),
      ...i.eventRange.ui.classNames,
      ...e.elClasses || []
    ], renderProps: a, generatorName: "eventContent", customGenerator: r.eventContent, defaultGenerator: e.defaultGenerator, classNameGenerator: r.eventClassNames, didMount: r.eventDidMount, willUnmount: r.eventWillUnmount }));
  }
  componentDidUpdate(e) {
    this.el && this.props.seg !== e.seg && cc(this.el, this.props.seg);
  }
}
class Rf extends Te {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { seg: i } = e, { ui: s } = i.eventRange, o = r.eventTimeFormat || e.defaultTimeFormat, a = sf(i, o, n, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
    return R(ca, Object.assign({}, e, { elTag: "a", elStyle: {
      borderColor: s.borderColor,
      backgroundColor: s.backgroundColor
    }, elAttrs: af(i, n), defaultGenerator: H1, timeText: a }), (c, l) => R(
      Be,
      null,
      R(c, { elTag: "div", elClasses: ["fc-event-main"], elStyle: { color: l.textColor } }),
      !!l.isStartResizable && R("div", { className: "fc-event-resizer fc-event-resizer-start" }),
      !!l.isEndResizable && R("div", { className: "fc-event-resizer fc-event-resizer-end" })
    ));
  }
}
function H1(t) {
  return R(
    "div",
    { className: "fc-event-main-frame" },
    t.timeText && R("div", { className: "fc-event-time" }, t.timeText),
    R(
      "div",
      { className: "fc-event-title-container" },
      R("div", { className: "fc-event-title fc-sticky" }, t.event.title || R(Be, null, " "))
    )
  );
}
const ua = (t) => R(tn.Consumer, null, (e) => {
  let { options: n } = e, r = {
    isAxis: t.isAxis,
    date: e.dateEnv.toDate(t.date),
    view: e.viewApi
  };
  return R(yt, Object.assign({}, t, { elTag: t.elTag || "div", renderProps: r, generatorName: "nowIndicatorContent", customGenerator: n.nowIndicatorContent, classNameGenerator: n.nowIndicatorClassNames, didMount: n.nowIndicatorDidMount, willUnmount: n.nowIndicatorWillUnmount }));
}), z1 = ze({ day: "numeric" });
class fa extends Te {
  constructor() {
    super(...arguments), this.refineRenderProps = ti(F1);
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
    return R(yt, Object.assign({}, e, { elClasses: [
      ...Ko(i, n.theme),
      ...e.elClasses || []
    ], elAttrs: Object.assign(Object.assign({}, e.elAttrs), i.isDisabled ? {} : { "data-date": jo(e.date) }), renderProps: i, generatorName: "dayCellContent", customGenerator: r.dayCellContent, defaultGenerator: e.defaultGenerator, classNameGenerator: (
      // don't use custom classNames if disabled
      i.isDisabled ? void 0 : r.dayCellClassNames
    ), didMount: r.dayCellDidMount, willUnmount: r.dayCellWillUnmount }));
  }
}
function da(t) {
  return !!(t.dayCellContent || pf("dayCellContent", t));
}
function F1(t) {
  let { date: e, dateEnv: n, dateProfile: r, isMonthStart: i } = t, s = Qu(e, t.todayRange, null, r), o = t.showDayNumber ? n.format(e, i ? t.monthStartFormat : z1) : "";
  return Object.assign(Object.assign(Object.assign({ date: n.toDate(e), view: t.viewApi }, s), {
    isMonthStart: i,
    dayNumberText: o
  }), t.extraRenderProps);
}
class Tf extends Te {
  render() {
    let { props: e } = this, { seg: n } = e;
    return R(ca, { elTag: "div", elClasses: ["fc-bg-event"], elStyle: { backgroundColor: n.eventRange.ui.backgroundColor }, defaultGenerator: U1, seg: n, timeText: "", isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: e.isPast, isFuture: e.isFuture, isToday: e.isToday, disableDragging: !0, disableResizing: !0 });
  }
}
function U1(t) {
  let { title: e } = t.event;
  return e && R("div", { className: "fc-event-title" }, t.event.title);
}
function kf(t) {
  return R("div", { className: `fc-${t}` });
}
const If = (t) => R(tn.Consumer, null, (e) => {
  let { dateEnv: n, options: r } = e, { date: i } = t, s = r.weekNumberFormat || t.defaultFormat, o = n.computeWeekNumber(i), a = n.format(i, s);
  return R(
    yt,
    Object.assign({}, t, { renderProps: { num: o, text: a, date: i }, generatorName: "weekNumberContent", customGenerator: r.weekNumberContent, defaultGenerator: W1, classNameGenerator: r.weekNumberClassNames, didMount: r.weekNumberDidMount, willUnmount: r.weekNumberWillUnmount })
  );
});
function W1(t) {
  return t.text;
}
const Ys = 10;
class V1 extends Te {
  constructor() {
    super(...arguments), this.state = {
      titleId: fs()
    }, this.handleRootEl = (e) => {
      this.rootEl = e, this.props.elRef && en(this.props.elRef, e);
    }, this.handleDocumentMouseDown = (e) => {
      const n = Nu(e);
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
    return Cg(R(
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
    let { isRtl: e } = this.context, { alignmentEl: n, alignGridTop: r } = this.props, { rootEl: i } = this, s = xm(n);
    if (s) {
      let o = i.getBoundingClientRect(), a = r ? it(n, ".fc-scrollgrid").getBoundingClientRect().top : s.top, c = e ? s.right - o.width : s.left;
      a = Math.max(a, Ys), c = Math.min(c, document.documentElement.clientWidth - Ys - o.width), c = Math.max(c, Ys);
      let l = i.offsetParent.getBoundingClientRect();
      pr(i, {
        top: a - l.top,
        left: c - l.left
      });
    }
  }
}
class j1 extends Vt {
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
    return R(fa, { elRef: this.handleRootEl, date: i, dateProfile: o, todayRange: s }, (c, l, u) => R(
      V1,
      { elRef: u.ref, id: r.id, title: a, extraClassNames: ["fc-more-popover"].concat(u.className || []), extraAttrs: u, parentEl: r.parentEl, alignmentEl: r.alignmentEl, alignGridTop: r.alignGridTop, onClose: r.onClose },
      da(e) && R(c, { elTag: "div", elClasses: ["fc-more-popover-misc"] }),
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
class Mf extends Te {
  constructor() {
    super(...arguments), this.state = {
      isPopoverOpen: !1,
      popoverId: fs()
    }, this.handleLinkEl = (e) => {
      this.linkEl = e, this.props.elRef && en(this.props.elRef, e);
    }, this.handleClick = (e) => {
      let { props: n, context: r } = this, { moreLinkClick: i } = r.options, s = pc(n).start;
      function o(a) {
        let { def: c, instance: l, range: u } = a.eventRange;
        return {
          event: new Le(r, c, l),
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
    return R(tn.Consumer, null, (r) => {
      let { viewApi: i, options: s, calendarApi: o } = r, { moreLinkText: a } = s, { moreCnt: c } = e, l = pc(e), u = typeof a == "function" ? a.call(o, c) : `+${c} ${a}`, d = gr(s.moreLinkHint, [c], u), f = {
        num: c,
        shortText: `+${c}`,
        text: u,
        view: i
      };
      return R(
        Be,
        null,
        !!e.moreCnt && R(yt, { elTag: e.elTag || "a", elRef: this.handleLinkEl, elClasses: [
          ...e.elClasses || [],
          "fc-more-link"
        ], elStyle: e.elStyle, elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), Pu(this.handleClick)), { title: d, "aria-expanded": n.isPopoverOpen, "aria-controls": n.isPopoverOpen ? n.popoverId : "" }), renderProps: f, generatorName: "moreLinkContent", customGenerator: s.moreLinkContent, defaultGenerator: e.defaultGenerator || $1, classNameGenerator: s.moreLinkClassNames, didMount: s.moreLinkDidMount, willUnmount: s.moreLinkWillUnmount }, e.children),
        n.isPopoverOpen && R(j1, { id: n.popoverId, startDate: l.start, endDate: l.end, dateProfile: e.dateProfile, todayRange: e.todayRange, extraDateSpan: e.extraDateSpan, parentEl: this.parentEl, alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : this.linkEl, alignGridTop: e.alignGridTop, forceTimed: e.forceTimed, onClose: this.handlePopoverClose }, e.popoverContent())
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
    this.linkEl && (this.parentEl = it(this.linkEl, ".fc-view-harness"));
  }
}
function $1(t) {
  return t.text;
}
function pc(t) {
  if (t.allDayDate)
    return {
      start: t.allDayDate,
      end: st(t.allDayDate, 1)
    };
  let { hiddenSegs: e } = t;
  return {
    start: Of(e),
    end: Y1(e)
  };
}
function Of(t) {
  return t.reduce(q1).eventRange.range.start;
}
function q1(t, e) {
  return t.eventRange.range.start < e.eventRange.range.start ? t : e;
}
function Y1(t) {
  return t.reduce(G1).eventRange.range.end;
}
function G1(t, e) {
  return t.eventRange.range.end > e.eventRange.range.end ? t : e;
}
class ns extends Te {
  render() {
    let { props: e, context: n } = this, { options: r } = n, i = { view: n.viewApi };
    return R(yt, Object.assign({}, e, { elTag: e.elTag || "div", elClasses: [
      ...Nf(e.viewSpec),
      ...e.elClasses || []
    ], renderProps: i, classNameGenerator: r.viewClassNames, generatorName: void 0, didMount: r.viewDidMount, willUnmount: r.viewWillUnmount }), () => e.children);
  }
}
function Nf(t) {
  return [
    `fc-${t.type}-view`,
    "fc-view"
  ];
}
const Q1 = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: U,
  eventDataTransform: U,
  // for any network-related sources
  success: U,
  failure: U
};
function Bf(t, e, n = Pf(e)) {
  let r;
  if (typeof t == "string" ? r = { url: t } : typeof t == "function" || Array.isArray(t) ? r = { events: t } : typeof t == "object" && t && (r = t), r) {
    let { refined: i, extra: s } = qo(r, n), o = Z1(i, e);
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
        sourceId: Mn(),
        sourceDefId: o.sourceDefId,
        meta: o.meta,
        ui: Ki(i, e),
        extendedProps: s
      };
  }
  return null;
}
function Pf(t) {
  return Object.assign(Object.assign(Object.assign({}, Xi), Q1), t.pluginHooks.eventSourceRefiners);
}
function Z1(t, e) {
  let n = e.pluginHooks.eventSourceDefs;
  for (let r = n.length - 1; r >= 0; r -= 1) {
    let s = n[r].parseMeta(t);
    if (s)
      return { sourceDefId: r, meta: s };
  }
  return null;
}
class X1 {
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
      dateMarker: Sr(e.calendarOptions.now, e.dateEnv)
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
    let n = this.getCurrentData(), r = Ce(e);
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
    return r.format(r.createMarker(e), ze(n));
  }
  // `settings` is for formatter AND isEndExclusive
  formatRange(e, n, r) {
    let { dateEnv: i } = this.getCurrentData();
    return i.formatRange(i.createMarker(e), i.createMarker(n), ze(r), r);
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
    let i = this.getCurrentData(), s = Vm(r, i.dateEnv, Ce({ days: 1 }));
    s && (this.dispatch({ type: "SELECT_DATES", selection: s }), ef(s, null, i));
  }
  unselect(e) {
    let n = this.getCurrentData();
    n.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), Om(e, n));
  }
  // Public Events API
  // -----------------------------------------------------------------------------------------------------------------
  addEvent(e, n) {
    if (e instanceof Le) {
      let o = e._def, a = e._instance;
      return this.getCurrentData().eventStore.defs[o.defId] || (this.dispatch({
        type: "ADD_EVENTS",
        eventStore: yo({ def: o, instance: a })
        // TODO: better util for two args?
      }), this.triggerEventAdd(e)), e;
    }
    let r = this.getCurrentData(), i;
    if (n instanceof Un)
      i = n.internalEventSource;
    else if (typeof n == "boolean")
      n && ([i] = Vo(r.eventSources));
    else if (n != null) {
      let o = this.getEventSourceById(n);
      if (!o)
        return console.warn(`Could not find an event source with ID "${n}"`), null;
      i = o.internalEventSource;
    }
    let s = Vu(e, i, r, !1);
    if (s) {
      let o = new Le(r, s.def, s.def.recurringDef ? null : s.instance);
      return this.dispatch({
        type: "ADD_EVENTS",
        eventStore: yo(s)
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
          eventStore: tf(e)
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
          return new Le(n, o, null);
        for (let a in i) {
          let c = i[a];
          if (c.defId === o.defId)
            return new Le(n, o, c);
        }
      }
    }
    return null;
  }
  getEvents() {
    let e = this.getCurrentData();
    return Sn(e.eventStore, e);
  }
  removeAllEvents() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }
  // Public Event Sources API
  // -----------------------------------------------------------------------------------------------------------------
  getEventSources() {
    let e = this.getCurrentData(), n = e.eventSources, r = [];
    for (let i in n)
      r.push(new Un(e, n[i]));
    return r;
  }
  getEventSourceById(e) {
    let n = this.getCurrentData(), r = n.eventSources;
    e = String(e);
    for (let i in r)
      if (r[i].publicId === e)
        return new Un(n, r[i]);
    return null;
  }
  addEventSource(e) {
    let n = this.getCurrentData();
    if (e instanceof Un)
      return n.eventSources[e.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [e.internalEventSource]
      }), e;
    let r = Bf(e, n);
    return r ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [r] }), new Un(n, r)) : null;
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
    let n = Ce(e);
    n && this.trigger("_scrollRequest", { time: n });
  }
}
class K1 {
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
class J1 extends K1 {
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
const eb = [], Lf = {
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
}, Hf = Object.assign(Object.assign({}, Lf), {
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
function tb(t) {
  let e = t.length > 0 ? t[0].code : "en", n = eb.concat(t), r = {
    en: Hf
  };
  for (let i of n)
    r[i.code] = i;
  return {
    map: r,
    defaultCode: e
  };
}
function zf(t, e) {
  return typeof t == "object" && !Array.isArray(t) ? Ff(t.code, [t.code], t) : nb(t, e);
}
function nb(t, e) {
  let n = [].concat(t || []), r = rb(n, e) || Hf;
  return Ff(t, n, r);
}
function rb(t, e) {
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
function Ff(t, e, n) {
  let r = Wo([Lf, n], ["buttonText"]);
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
function nn(t) {
  return {
    id: Mn(),
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
function ib(t, e) {
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
      c === void 0 ? (n[a] = o.id, i(o.deps), r = ob(r, o)) : c !== o.id && console.warn(`Duplicate plugin '${a}'`);
    }
  }
  return t && i(t), i(e), r;
}
function sb() {
  let t = [], e = [], n;
  return (r, i) => ((!n || !gn(r, t) || !gn(i, e)) && (n = ib(r, i)), t = r, e = i, n);
}
function ob(t, e) {
  return {
    premiumReleaseDate: ab(t.premiumReleaseDate, e.premiumReleaseDate),
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
function ab(t, e) {
  return t === void 0 ? e : e === void 0 ? t : new Date(Math.max(t.valueOf(), e.valueOf()));
}
class bn extends wr {
}
bn.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
bn.prototype.baseIconClass = "fc-icon";
bn.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
bn.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
bn.prototype.iconOverrideOption = "buttonIcons";
bn.prototype.iconOverrideCustomButtonOption = "icon";
bn.prototype.iconOverridePrefix = "fc-icon-";
function lb(t, e) {
  let n = {}, r;
  for (r in t)
    Ao(r, n, t, e);
  for (r in e)
    Ao(r, n, t, e);
  return n;
}
function Ao(t, e, n, r) {
  if (e[t])
    return e[t];
  let i = cb(t, e, n, r);
  return i && (e[t] = i), i;
}
function cb(t, e, n, r) {
  let i = n[t], s = r[t], o = (u) => i && i[u] !== null ? i[u] : s && s[u] !== null ? s[u] : null, a = o("component"), c = o("superType"), l = null;
  if (c) {
    if (c === t)
      throw new Error("Can't have a custom view type that references itself");
    l = Ao(c, e, n, r);
  }
  return !a && l && (a = l.component), a ? {
    type: t,
    component: a,
    defaults: Object.assign(Object.assign({}, l ? l.defaults : {}), i ? i.rawOptions : {}),
    overrides: Object.assign(Object.assign({}, l ? l.overrides : {}), s ? s.rawOptions : {})
  } : null;
}
function gc(t) {
  return Jt(t, ub);
}
function ub(t) {
  let e = typeof t == "function" ? { component: t } : t, { component: n } = e;
  return e.content ? n = vc(e) : n && !(n.prototype instanceof Te) && (n = vc(Object.assign(Object.assign({}, e), { content: n }))), {
    superType: e.type,
    component: n,
    rawOptions: e
    // includes type and component too :(
  };
}
function vc(t) {
  return (e) => R(tn.Consumer, null, (n) => R(yt, { elTag: "div", elClasses: Nf(n.viewSpec), renderProps: Object.assign(Object.assign({}, e), { nextDayThreshold: n.options.nextDayThreshold }), generatorName: void 0, customGenerator: t.content, classNameGenerator: t.classNames, didMount: t.didMount, willUnmount: t.willUnmount }));
}
function fb(t, e, n, r) {
  let i = gc(t), s = gc(e.views), o = lb(i, s);
  return Jt(o, (a) => db(a, s, e, n, r));
}
function db(t, e, n, r, i) {
  let s = t.overrides.duration || t.defaults.duration || r.duration || n.duration, o = null, a = "", c = "", l = {};
  if (s && (o = hb(s), o)) {
    let f = mo(o);
    a = f.unit, f.value === 1 && (c = a, l = e[a] ? e[a].rawOptions : {});
  }
  let u = (f) => {
    let h = f.buttonText || {}, g = t.defaults.buttonTextKey;
    return g != null && h[g] != null ? h[g] : h[t.type] != null ? h[t.type] : h[c] != null ? h[c] : null;
  }, d = (f) => {
    let h = f.buttonHints || {}, g = t.defaults.buttonTextKey;
    return g != null && h[g] != null ? h[g] : h[t.type] != null ? h[t.type] : h[c] != null ? h[c] : null;
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
    buttonTextDefault: u(i) || t.defaults.buttonText || u(vr) || t.type,
    // not DRY
    buttonTitleOverride: d(r) || d(n) || t.overrides.buttonHint,
    buttonTitleDefault: d(i) || t.defaults.buttonHint || d(vr)
    // will eventually fall back to buttonText
  };
}
let mc = {};
function hb(t) {
  let e = JSON.stringify(t), n = mc[e];
  return n === void 0 && (n = Ce(t), mc[e] = n), n;
}
function pb(t, e) {
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      t = e.viewType;
  }
  return t;
}
function gb(t, e) {
  switch (e.type) {
    case "SET_OPTION":
      return Object.assign(Object.assign({}, t), { [e.optionName]: e.rawOptionValue });
    default:
      return t;
  }
}
function vb(t, e, n, r) {
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
function mb(t, e, n) {
  let r = e ? e.activeRange : null;
  return Wf({}, Sb(t, n), r, n);
}
function bb(t, e, n, r) {
  let i = n ? n.activeRange : null;
  switch (e.type) {
    case "ADD_EVENT_SOURCES":
      return Wf(t, e.sources, i, r);
    case "REMOVE_EVENT_SOURCE":
      return xb(t, e.sourceId);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return n ? Vf(t, i, r) : t;
    case "FETCH_EVENT_SOURCES":
      return ha(t, e.sourceIds ? (
        // why no type?
        Hu(e.sourceIds)
      ) : jf(t, r), i, e.isRefetch || !1, r);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return wb(t, e.sourceId, e.fetchId, e.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return t;
  }
}
function yb(t, e, n) {
  let r = e ? e.activeRange : null;
  return ha(t, jf(t, n), r, !0, n);
}
function Uf(t) {
  for (let e in t)
    if (t[e].isFetching)
      return !0;
  return !1;
}
function Wf(t, e, n, r) {
  let i = {};
  for (let s of e)
    i[s.sourceId] = s;
  return n && (i = Vf(i, n, r)), Object.assign(Object.assign({}, t), i);
}
function xb(t, e) {
  return Cn(t, (n) => n.sourceId !== e);
}
function Vf(t, e, n) {
  return ha(t, Cn(t, (r) => _b(r, e, n)), e, !1, n);
}
function _b(t, e, n) {
  return $f(t, n) ? !n.options.lazyFetching || !t.fetchRange || t.isFetching || // always cancel outdated in-progress fetches
  e.start < t.fetchRange.start || e.end > t.fetchRange.end : !t.latestFetchId;
}
function ha(t, e, n, r, i) {
  let s = {};
  for (let o in t) {
    let a = t[o];
    e[o] ? s[o] = Eb(a, n, r, i) : s[o] = a;
  }
  return s;
}
function Eb(t, e, n, r) {
  let { options: i, calendarApi: s } = r, o = r.pluginHooks.eventSourceDefs[t.sourceDefId], a = Mn();
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
function wb(t, e, n, r) {
  let i = t[e];
  return i && // not already removed
  n === i.latestFetchId ? Object.assign(Object.assign({}, t), { [e]: Object.assign(Object.assign({}, i), { isFetching: !1, fetchRange: r }) }) : t;
}
function jf(t, e) {
  return Cn(t, (n) => $f(n, e));
}
function Sb(t, e) {
  let n = Pf(e), r = [].concat(t.eventSources || []), i = [];
  t.initialEvents && r.unshift(t.initialEvents), t.events && r.unshift(t.events);
  for (let s of r) {
    let o = Bf(s, e, n);
    o && i.push(o);
  }
  return i;
}
function $f(t, e) {
  return !e.pluginHooks.eventSourceDefs[t.sourceDefId].ignoreRange;
}
function Ab(t, e) {
  switch (e.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return e.selection;
    default:
      return t;
  }
}
function Cb(t, e) {
  switch (e.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return e.eventInstanceId;
    default:
      return t;
  }
}
function Db(t, e) {
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
function Rb(t, e) {
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
function Tb(t, e, n, r, i) {
  let s = t.headerToolbar ? bc(t.headerToolbar, t, e, n, r, i) : null, o = t.footerToolbar ? bc(t.footerToolbar, t, e, n, r, i) : null;
  return { header: s, footer: o };
}
function bc(t, e, n, r, i, s) {
  let o = {}, a = [], c = !1;
  for (let l in t) {
    let u = t[l], d = kb(u, e, n, r, i, s);
    o[l] = d.widgets, a.push(...d.viewsWithButtons), c = c || d.hasTitle;
  }
  return { sectionWidgets: o, viewsWithButtons: a, hasTitle: c };
}
function kb(t, e, n, r, i, s) {
  let o = e.direction === "rtl", a = e.customButtons || {}, c = n.buttonText || {}, l = e.buttonText || {}, u = n.buttonHints || {}, d = e.buttonHints || {}, f = t ? t.split(" ") : [], h = [], g = !1;
  return { widgets: f.map((v) => v.split(",").map((_) => {
    if (_ === "title")
      return g = !0, { buttonName: _ };
    let y, m, b, E, A, w;
    if (y = a[_])
      b = (D) => {
        y.click && y.click.call(D.target, D, D.target);
      }, (E = r.getCustomButtonIconClass(y)) || (E = r.getIconClass(_, o)) || (A = y.text), w = y.hint || y.text;
    else if (m = i[_]) {
      h.push(_), b = () => {
        s.changeView(_);
      }, (A = m.buttonTextOverride) || (E = r.getIconClass(_, o)) || (A = m.buttonTextDefault);
      let D = m.buttonTextOverride || m.buttonTextDefault;
      w = gr(
        m.buttonTitleOverride || m.buttonTitleDefault || e.viewHint,
        [D, _],
        // view-name = buttonName
        D
      );
    } else if (s[_])
      if (b = () => {
        s[_]();
      }, (A = c[_]) || (E = r.getIconClass(_, o)) || (A = l[_]), _ === "prevYear" || _ === "nextYear") {
        let D = _ === "prevYear" ? "prev" : "next";
        w = gr(u[D] || d[D], [
          l.year || "year",
          "year"
        ], l[_]);
      } else
        w = (D) => gr(u[_] || d[_], [
          l[D] || D,
          D
        ], l[_]);
    return { buttonName: _, buttonClick: b, buttonIcon: E, buttonText: A, buttonHint: w };
  })), viewsWithButtons: h, hasTitle: g };
}
class Ib {
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
let Mb = {
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
const Ob = nn({
  name: "array-event-source",
  eventSourceDefs: [Mb]
});
let Nb = {
  parseMeta(t) {
    return typeof t.events == "function" ? t.events : null;
  },
  fetch(t, e, n) {
    const { dateEnv: r } = t.context, i = t.eventSource.meta;
    _m(i.bind(null, lf(t.range, r)), (s) => e({ rawEvents: s }), n);
  }
};
const Bb = nn({
  name: "func-event-source",
  eventSourceDefs: [Nb]
}), Pb = {
  method: String,
  extraParams: U,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
let Lb = {
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
    const { meta: r } = t.eventSource, i = zb(r, t.range, t.context);
    C1(r.method, r.url, i).then(([s, o]) => {
      e({ rawEvents: s, response: o });
    }, n);
  }
};
const Hb = nn({
  name: "json-event-source",
  eventSourceRefiners: Pb,
  eventSourceDefs: [Lb]
});
function zb(t, e, n) {
  let { dateEnv: r, options: i } = n, s, o, a, c, l = {};
  return s = t.startParam, s == null && (s = i.startParam), o = t.endParam, o == null && (o = i.endParam), a = t.timeZoneParam, a == null && (a = i.timeZoneParam), typeof t.extraParams == "function" ? c = t.extraParams() : c = t.extraParams || {}, Object.assign(l, c), l[s] = r.formatIso(e.start), l[o] = r.formatIso(e.end), r.timeZone !== "local" && (l[a] = r.timeZone), l;
}
const Fb = {
  daysOfWeek: U,
  startTime: Ce,
  endTime: Ce,
  duration: Ce,
  startRecur: U,
  endRecur: U
};
let Ub = {
  parse(t, e) {
    if (t.daysOfWeek || t.startTime || t.endTime || t.startRecur || t.endRecur) {
      let n = {
        daysOfWeek: t.daysOfWeek || null,
        startTime: t.startTime || null,
        endTime: t.endTime || null,
        startRecur: t.startRecur ? e.createMarker(t.startRecur) : null,
        endRecur: t.endRecur ? e.createMarker(t.endRecur) : null
      }, r;
      return t.duration && (r = t.duration), !r && t.startTime && t.endTime && (r = iv(t.endTime, t.startTime)), {
        allDayGuess: !t.startTime && !t.endTime,
        duration: r,
        typeData: n
        // doesn't need endTime anymore but oh well
      };
    }
    return null;
  },
  expand(t, e, n) {
    let r = Rn(e, { start: t.startRecur, end: t.endRecur });
    return r ? Vb(t.daysOfWeek, t.startTime, r, n) : [];
  }
};
const Wb = nn({
  name: "simple-recurring-event",
  recurringTypes: [Ub],
  eventRefiners: Fb
});
function Vb(t, e, n, r) {
  let i = t ? Hu(t) : null, s = Ne(n.start), o = n.end, a = [];
  for (; s < o; ) {
    let c;
    (!i || i[s.getUTCDay()]) && (e ? c = r.add(s, e) : c = s, a.push(c)), s = st(s, 1);
  }
  return a;
}
const jb = nn({
  name: "change-handler",
  optionChangeHandlers: {
    events(t, e) {
      yc([t], e);
    },
    eventSources: yc
  }
});
function yc(t, e) {
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
function $b(t, e) {
  e.emitter.trigger("datesSet", Object.assign(Object.assign({}, lf(t.activeRange, e.dateEnv)), { view: e.viewApi }));
}
function qb(t, e) {
  let { emitter: n } = e;
  n.hasHandlers("eventsSet") && n.trigger("eventsSet", Sn(t, e));
}
const Yb = [
  Ob,
  Bb,
  Hb,
  Wb,
  jb,
  nn({
    name: "misc",
    isLoadingFuncs: [
      (t) => Uf(t.eventSources)
    ],
    propSetHandlers: {
      dateProfile: $b,
      eventStore: qb
    }
  })
];
class Gb {
  constructor(e, n) {
    this.runTaskOption = e, this.drainedOption = n, this.queue = [], this.delayedRunner = new aa(this.drain.bind(this));
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
function Qb(t, e, n) {
  let r;
  return /^(year|month)$/.test(t.currentRangeUnit) ? r = t.currentRange : r = t.activeRange, n.formatRange(r.start, r.end, ze(e.titleFormat || Zb(t)), {
    isEndExclusive: t.isRangeAllDay,
    defaultSeparator: e.titleRangeSeparator
  });
}
function Zb(t) {
  let { currentRangeUnit: e } = t;
  if (e === "year")
    return { year: "numeric" };
  if (e === "month")
    return { year: "numeric", month: "long" };
  let n = Gi(t.currentRange.start, t.currentRange.end);
  return n !== null && n > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
class Xb {
  constructor(e) {
    this.computeCurrentViewData = he(this._computeCurrentViewData), this.organizeRawLocales = he(tb), this.buildLocale = he(zf), this.buildPluginHooks = sb(), this.buildDateEnv = he(Kb), this.buildTheme = he(Jb), this.parseToolbars = he(Tb), this.buildViewSpecs = he(fb), this.buildDateProfileGenerator = ti(ey), this.buildViewApi = he(ty), this.buildViewUiProps = ti(iy), this.buildEventUiBySource = he(ny, Wt), this.buildEventUiBases = he(ry), this.parseContextBusinessHours = ti(sy), this.buildTitle = he(Qb), this.emitter = new gs(), this.actionRunner = new Gb(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.optionsForRefining = [], this.optionsForHandling = [], this.getCurrentData = () => this.data, this.dispatch = (f) => {
      this.actionRunner.request(f);
    }, this.props = e, this.actionRunner.pause();
    let n = {}, r = this.computeOptionsData(e.optionOverrides, n, e.calendarApi), i = r.calendarOptions.initialView || r.pluginHooks.initialView, s = this.computeCurrentViewData(i, r, e.optionOverrides, n);
    e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(s.options);
    let o = Mm(r.calendarOptions, r.dateEnv), a = s.dateProfileGenerator.build(o);
    Kt(a.activeRange, o) || (o = a.currentRange.start);
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
    let l = mb(r.calendarOptions, a, c), u = {
      dynamicOptionOverrides: n,
      currentViewType: i,
      currentDate: o,
      dateProfile: a,
      businessHours: this.parseContextBusinessHours(c),
      eventSources: l,
      eventUiBases: {},
      eventStore: bt(),
      renderableEventStore: bt(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(c).selectionConfig
    }, d = Object.assign(Object.assign({}, c), u);
    for (let f of r.pluginHooks.reducers)
      Object.assign(u, f(null, null, d));
    Gs(u, c) && this.emitter.trigger("loading", !0), this.state = u, this.updateData(), this.actionRunner.resume();
  }
  resetOptions(e, n) {
    let { props: r } = this;
    n === void 0 ? r.optionOverrides = e : (r.optionOverrides = Object.assign(Object.assign({}, r.optionOverrides || {}), e), this.optionsForRefining.push(...n)), (n === void 0 || n.length) && this.actionRunner.request({
      type: "NOTHING"
    });
  }
  _handleAction(e) {
    let { props: n, state: r, emitter: i } = this, s = gb(r.dynamicOptionOverrides, e), o = this.computeOptionsData(n.optionOverrides, s, n.calendarApi), a = pb(r.currentViewType, e), c = this.computeCurrentViewData(a, o, n.optionOverrides, s);
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
    this.data && this.data.dateProfileGenerator !== c.dateProfileGenerator && (d = c.dateProfileGenerator.build(u)), u = Im(u, e), d = vb(d, e, u, c.dateProfileGenerator), (e.type === "PREV" || // TODO: move this logic into DateProfileGenerator
    e.type === "NEXT" || // "
    !Kt(d.currentRange, u)) && (u = d.currentRange.start);
    let f = bb(r.eventSources, e, d, l), h = p1(r.eventStore, e, f, d, l), p = Uf(f) && !c.options.progressiveEventRendering && r.renderableEventStore || h, { eventUiSingleBase: v, selectionConfig: _ } = this.buildViewUiProps(l), y = this.buildEventUiBySource(f), m = this.buildEventUiBases(p.defs, v, y), b = {
      dynamicOptionOverrides: s,
      currentViewType: a,
      currentDate: u,
      dateProfile: d,
      eventSources: f,
      eventStore: h,
      renderableEventStore: p,
      selectionConfig: _,
      eventUiBases: m,
      businessHours: this.parseContextBusinessHours(l),
      dateSelection: Ab(r.dateSelection, e),
      eventSelection: Cb(r.eventSelection, e),
      eventDrag: Db(r.eventDrag, e),
      eventResize: Rb(r.eventResize, e)
    }, E = Object.assign(Object.assign({}, l), b);
    for (let D of o.pluginHooks.reducers)
      Object.assign(b, D(r, e, E));
    let A = Gs(r, l), w = Gs(b, l);
    !A && w ? i.trigger("loading", !0) : A && !w && i.trigger("loading", !1), this.state = b, n.onAction && n.onAction(e);
  }
  updateData() {
    let { props: e, state: n } = this, r = this.data, i = this.computeOptionsData(e.optionOverrides, n.dynamicOptionOverrides, e.calendarApi), s = this.computeCurrentViewData(n.currentViewType, i, e.optionOverrides, n.dynamicOptionOverrides), o = this.data = Object.assign(Object.assign(Object.assign({ viewTitle: this.buildTitle(n.dateProfile, s.options, i.dateEnv), calendarApi: e.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, i), s), n), a = i.pluginHooks.optionChangeHandlers, c = r && r.calendarOptions, l = i.calendarOptions;
    if (c && c !== l) {
      c.timeZone !== l.timeZone && (n.eventSources = o.eventSources = yb(o.eventSources, n.dateProfile, o), n.eventStore = o.eventStore = dc(o.eventStore, r.dateEnv, o.dateEnv), n.renderableEventStore = o.renderableEventStore = dc(o.renderableEventStore, r.dateEnv, o.dateEnv));
      for (let u in a)
        (this.optionsForHandling.indexOf(u) !== -1 || c[u] !== l[u]) && a[u](l[u], o);
    }
    this.optionsForHandling = [], e.onData && e.onData(o);
  }
  computeOptionsData(e, n, r) {
    if (!this.optionsForRefining.length && e === this.stableOptionOverrides && n === this.stableDynamicOptionOverrides)
      return this.stableCalendarOptionsData;
    let { refinedOptions: i, pluginHooks: s, localeDefaults: o, availableLocaleData: a, extra: c } = this.processRawCalendarOptions(e, n);
    xc(c);
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
    let { locales: r, locale: i } = Fs([
      vr,
      e,
      n
    ]), s = this.organizeRawLocales(r), o = s.map, a = this.buildLocale(i || s.defaultCode, o).options, c = this.buildPluginHooks(e.plugins || [], Yb), l = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, tc), nc), rc), c.listenerRefiners), c.optionRefiners), u = {}, d = Fs([
      vr,
      a,
      e,
      n
    ]), f = {}, h = this.currentCalendarOptionsInput, g = this.currentCalendarOptionsRefined, p = !1;
    for (let v in d)
      this.optionsForRefining.indexOf(v) === -1 && (d[v] === h[v] || _n[v] && v in h && _n[v](h[v], d[v])) ? f[v] = g[v] : l[v] ? (f[v] = l[v](d[v]), p = !0) : u[v] = h[v];
    return p && (this.currentCalendarOptionsInput = d, this.currentCalendarOptionsRefined = f, this.stableOptionOverrides = e, this.stableDynamicOptionOverrides = n), this.optionsForHandling.push(...this.optionsForRefining), this.optionsForRefining = [], {
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
    xc(a);
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
    let o = Fs([
      vr,
      e.optionDefaults,
      r,
      i,
      e.optionOverrides,
      s
    ]), a = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, tc), nc), rc), Uv), n.listenerRefiners), n.optionRefiners), c = {}, l = this.currentViewOptionsInput, u = this.currentViewOptionsRefined, d = !1, f = {};
    for (let h in o)
      o[h] === l[h] || _n[h] && _n[h](o[h], l[h]) ? c[h] = u[h] : (o[h] === this.currentCalendarOptionsInput[h] || _n[h] && _n[h](o[h], this.currentCalendarOptionsInput[h]) ? h in this.currentCalendarOptionsRefined && (c[h] = this.currentCalendarOptionsRefined[h]) : a[h] ? c[h] = a[h](o[h]) : f[h] = o[h], d = !0);
    return d && (this.currentViewOptionsInput = o, this.currentViewOptionsRefined = c), {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: f
    };
  }
}
function Kb(t, e, n, r, i, s, o, a) {
  let c = zf(e || o.defaultCode, o.map);
  return new e1({
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
function Jb(t, e) {
  let n = e.themeClasses[t.themeSystem] || bn;
  return new n(t);
}
function ey(t) {
  let e = t.dateProfileGeneratorClass || Ju;
  return new e(t);
}
function ty(t, e, n) {
  return new Ib(t, e, n);
}
function ny(t) {
  return Jt(t, (e) => e.ui);
}
function ry(t, e, n) {
  let r = { "": e };
  for (let i in t) {
    let s = t[i];
    s.sourceId && n[s.sourceId] && (r[i] = n[s.sourceId]);
  }
  return r;
}
function iy(t) {
  let { options: e } = t;
  return {
    eventUiSingleBase: Ki({
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
    selectionConfig: Ki({
      constraint: e.selectConstraint,
      overlap: typeof e.selectOverlap == "boolean" ? e.selectOverlap : void 0,
      allow: e.selectAllow
    }, t)
  };
}
function Gs(t, e) {
  for (let n of e.pluginHooks.isLoadingFuncs)
    if (n(t))
      return !0;
  return !1;
}
function sy(t) {
  return Jv(t.options.businessHours, t);
}
function xc(t, e) {
  for (let n in t)
    console.warn(`Unknown option '${n}'` + (e ? ` for view '${e}'` : ""));
}
class oy extends Te {
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
        let f = a === n.activeButton, h = !n.isTodayEnabled && a === "today" || !n.isPrevEnabled && a === "prev" || !n.isNextEnabled && a === "next", g = [`fc-${a}-button`, r.getClass("button")];
        f && g.push(r.getClass("buttonActive")), i.push(R("button", { type: "button", title: typeof d == "function" ? d(n.navUnit) : d, disabled: h, "aria-pressed": f, className: g.join(" "), onClick: c }, l || (u ? R("span", { className: u }) : "")));
      }
    }
    if (i.length > 1) {
      let o = s && r.getClass("buttonGroup") || "";
      return R("div", { className: o }, ...i);
    }
    return i[0];
  }
}
class _c extends Te {
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
    return R(oy, { key: e, widgetGroups: n, title: r.title, navUnit: r.navUnit, activeButton: r.activeButton, isTodayEnabled: r.isTodayEnabled, isPrevEnabled: r.isPrevEnabled, isNextEnabled: r.isNextEnabled, titleId: r.titleId });
  }
}
class ay extends Te {
  constructor() {
    super(...arguments), this.state = {
      availableWidth: null
    }, this.handleEl = (e) => {
      this.el = e, en(this.props.elRef, e), this.updateAvailableWidth();
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
class ly extends tr {
  constructor(e) {
    super(e), this.handleSegClick = (n, r) => {
      let { component: i } = this, { context: s } = i, o = Kn(r);
      if (o && // might be the <div> surrounding the more link
      i.isValidSegDownEl(n.target)) {
        let a = it(n.target, ".fc-event-forced-url"), c = a ? a.querySelector("a[href]").href : "";
        s.emitter.trigger("eventClick", {
          el: r,
          event: new Le(i.context, o.eventRange.def, o.eventRange.instance),
          jsEvent: n,
          view: s.viewApi
        }), c && !n.defaultPrevented && (window.location.href = c);
      }
    }, this.destroy = Bu(
      e.el,
      "click",
      ".fc-event",
      // on both fg and bg events
      this.handleSegClick
    );
  }
}
class cy extends tr {
  constructor(e) {
    super(e), this.handleEventElRemove = (n) => {
      n === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl);
    }, this.handleSegEnter = (n, r) => {
      Kn(r) && (this.currentSegEl = r, this.triggerEvent("eventMouseEnter", n, r));
    }, this.handleSegLeave = (n, r) => {
      this.currentSegEl && (this.currentSegEl = null, this.triggerEvent("eventMouseLeave", n, r));
    }, this.removeHoverListeners = Vg(
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
    let { component: i } = this, { context: s } = i, o = Kn(r);
    (!n || i.isValidSegDownEl(n.target)) && s.emitter.trigger(e, {
      el: r,
      event: new Le(s, o.eventRange.def, o.eventRange.instance),
      jsEvent: n,
      view: s.viewApi
    });
  }
}
class uy extends Nn {
  constructor() {
    super(...arguments), this.buildViewContext = he(Rm), this.buildViewPropTransformers = he(dy), this.buildToolbarProps = he(fy), this.headerRef = ct(), this.footerRef = ct(), this.interactionsStore = {}, this.state = {
      viewLabelId: fs()
    }, this.registerInteractiveComponent = (e, n) => {
      let r = r1(e, n), o = [
        ly,
        cy
      ].concat(this.props.pluginHooks.componentInteractions).map((a) => new a(r));
      this.interactionsStore[e.uid] = o, wo[e.uid] = r;
    }, this.unregisterInteractiveComponent = (e) => {
      let n = this.interactionsStore[e.uid];
      if (n) {
        for (let r of n)
          r.destroy();
        delete this.interactionsStore[e.uid];
      }
      delete wo[e.uid];
    }, this.resizeRunner = new aa(() => {
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
      Sr(e.options.now, e.dateEnv),
      // TODO: use NowTimer????
      e.viewTitle
    ), s = !1, o = "", a;
    e.isHeightAuto || e.forPrint ? o = "" : r.height != null ? s = !0 : r.contentHeight != null ? o = r.contentHeight : a = Math.max(r.aspectRatio, 0.5);
    let c = this.buildViewContext(e.viewSpec, e.viewApi, e.options, e.dateProfileGenerator, e.dateEnv, e.theme, e.pluginHooks, e.dispatch, e.getCurrentData, e.emitter, e.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), l = n.header && n.header.hasTitle ? this.state.viewLabelId : "";
    return R(
      tn.Provider,
      { value: c },
      n.header && R(_c, Object.assign({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: n.header, titleId: l }, i)),
      R(
        ay,
        { liquid: s, height: o, aspectRatio: a, labeledById: l },
        this.renderView(e),
        this.buildAppendContent()
      ),
      n.footer && R(_c, Object.assign({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: n.footer, titleId: "" }, i))
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
    return R(Be, {}, ...n);
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
function fy(t, e, n, r, i, s) {
  let o = n.build(i, void 0, !1), a = n.buildPrev(e, r, !1), c = n.buildNext(e, r, !1);
  return {
    title: s,
    activeButton: t.type,
    navUnit: t.singleUnit,
    isTodayEnabled: o.isValid && !Kt(e.currentRange, i),
    isPrevEnabled: a.isValid,
    isNextEnabled: c.isValid
  };
}
function dy(t) {
  return t.map((e) => new e());
}
let hy = class extends X1 {
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
        oc(() => {
          xr(R(s1, { options: r.calendarOptions, theme: r.theme, emitter: r.emitter }, (i, s, o, a) => (this.setClassNames(i), this.setHeight(s), R(
            vf.Provider,
            { value: this.customContentRenderId },
            R(uy, Object.assign({ isHeightAuto: o, forPrint: a }, r))
          ))), this.el);
        });
      } else
        this.isRendered && (this.isRendered = !1, xr(null, this.el), this.setClassNames([]), this.setHeight(""));
    }, Ng(e), this.el = e, this.renderRunner = new aa(this.handleRenderRequest), new Xb({
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
    oc(() => {
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
    if (!gn(e, this.currentClassNames)) {
      let { classList: n } = this.el;
      for (let r of this.currentClassNames)
        n.remove(r);
      for (let r of e)
        n.add(r);
      this.currentClassNames = e;
    }
  }
  setHeight(e) {
    Ou(this.el, "height", e);
  }
};
const py = {
  headerToolbar: !0,
  footerToolbar: !0,
  events: !0,
  eventSources: !0,
  resources: !0
}, gy = Jn({
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
        customRenderingMetaMap: yy(this.$slots),
        handleCustomRendering: this.handleCustomRendering
      };
    }
  },
  render() {
    const t = [];
    for (const e of this.customRenderingMap.values())
      t.push(Gr(my, {
        key: e.id,
        customRendering: e
      }));
    return Gr("div", {
      // when renderId is changed, Vue will trigger a real-DOM async rerender, calling beforeUpdate/updated
      attrs: { "data-fc-render-id": this.renderId }
    }, Gr(dt, t));
  },
  mounted() {
    const t = new J1();
    this.handleCustomRendering = t.handle.bind(t);
    const e = this.buildOptions(this.options), n = new hy(this.$el, e);
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
  watch: by()
}), vy = gy, my = Jn({
  props: {
    customRendering: Object
  },
  render() {
    const t = this.customRendering, e = typeof t.generatorMeta == "function" ? t.generatorMeta(t.renderProps) : (
      // vue-normalized slot function
      t.generatorMeta
    );
    return Gr(Id, { to: t.containerEl }, e);
  }
});
function by() {
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
  for (let e in py)
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
function yy(t) {
  const e = {};
  for (const n in t)
    e[xy(n)] = t[n];
  return e;
}
function xy(t) {
  return t.split("-").map((e, n) => n ? _y(e) : e).join("");
}
function _y(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
var Ey = {
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
}, wy = ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';
Lo(wy);
function $r(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n[r] = [];
  for (let r of t)
    n[r.row].push(r);
  return n;
}
function qr(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n[r] = [];
  for (let r of t)
    n[r.firstCol].push(r);
  return n;
}
function Ec(t, e) {
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
const qf = ze({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function Yf(t) {
  let { display: e } = t.eventRange.ui;
  return e === "list-item" || e === "auto" && !t.eventRange.def.allDay && t.firstCol === t.lastCol && // can't be multi-day
  t.isStart && // "
  t.isEnd;
}
class Gf extends Te {
  render() {
    let { props: e } = this;
    return R(Rf, Object.assign({}, e, { elClasses: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: qf, defaultDisplayEventEnd: e.defaultDisplayEventEnd, disableResizing: !e.seg.eventRange.def.allDay }));
  }
}
class Qf extends Te {
  render() {
    let { props: e, context: n } = this, { options: r } = n, { seg: i } = e, s = r.eventTimeFormat || qf, o = sf(i, s, n, !0, e.defaultDisplayEventEnd);
    return R(ca, Object.assign({}, e, { elTag: "a", elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"], elAttrs: af(e.seg, n), defaultGenerator: Sy, timeText: o, isResizing: !1, isDateSelecting: !1 }));
  }
}
function Sy(t) {
  return R(
    Be,
    null,
    R("div", { className: "fc-daygrid-event-dot", style: { borderColor: t.borderColor || t.backgroundColor } }),
    t.timeText && R("div", { className: "fc-event-time" }, t.timeText),
    R("div", { className: "fc-event-title" }, t.event.title || R(Be, null, " "))
  );
}
class Ay extends Te {
  constructor() {
    super(...arguments), this.compileSegs = he(Cy);
  }
  render() {
    let { props: e } = this, { allSegs: n, invisibleSegs: r } = this.compileSegs(e.singlePlacements);
    return R(Mf, { elClasses: ["fc-daygrid-more-link"], dateProfile: e.dateProfile, todayRange: e.todayRange, allDayDate: e.allDayDate, moreCnt: e.moreCnt, allSegs: n, hiddenSegs: r, alignmentElRef: e.alignmentElRef, alignGridTop: e.alignGridTop, extraDateSpan: e.extraDateSpan, popoverContent: () => {
      let i = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
      return R(Be, null, n.map((s) => {
        let o = s.eventRange.instance.instanceId;
        return R("div", { className: "fc-daygrid-event-harness", key: o, style: {
          visibility: i[o] ? "hidden" : ""
        } }, Yf(s) ? R(Qf, Object.assign({ seg: s, isDragging: !1, isSelected: o === e.eventSelection, defaultDisplayEventEnd: !1 }, hn(s, e.todayRange))) : R(Gf, Object.assign({ seg: s, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: o === e.eventSelection, defaultDisplayEventEnd: !1 }, hn(s, e.todayRange))));
      }));
    } });
  }
}
function Cy(t) {
  let e = [], n = [];
  for (let r of t)
    e.push(r.seg), r.isVisible || n.push(r.seg);
  return { allSegs: e, invisibleSegs: n };
}
const Dy = ze({ week: "narrow" });
class Ry extends Vt {
  constructor() {
    super(...arguments), this.rootElRef = ct(), this.state = {
      dayNumberId: fs()
    }, this.handleRootEl = (e) => {
      en(this.rootElRef, e), en(this.props.elRef, e);
    };
  }
  render() {
    let { context: e, props: n, state: r, rootElRef: i } = this, { options: s, dateEnv: o } = e, { date: a, dateProfile: c } = n;
    const l = n.showDayNumber && ky(a, c.currentRange, o);
    return R(fa, { elTag: "td", elRef: this.handleRootEl, elClasses: [
      "fc-daygrid-day",
      ...n.extraClassNames || []
    ], elAttrs: Object.assign(Object.assign(Object.assign({}, n.extraDataAttrs), n.showDayNumber ? { "aria-labelledby": r.dayNumberId } : {}), { role: "gridcell" }), defaultGenerator: Ty, date: a, dateProfile: c, todayRange: n.todayRange, showDayNumber: n.showDayNumber, isMonthStart: l, extraRenderProps: n.extraRenderProps }, (u, d) => R(
      "div",
      { ref: n.innerElRef, className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", style: { minHeight: n.minHeight } },
      n.showWeekNumber && R(If, { elTag: "a", elClasses: ["fc-daygrid-week-number"], elAttrs: Ji(e, a, "week"), date: a, defaultFormat: Dy }),
      !d.isDisabled && (n.showDayNumber || da(s) || n.forceDayTop) ? R(
        "div",
        { className: "fc-daygrid-day-top" },
        R(u, { elTag: "a", elClasses: [
          "fc-daygrid-day-number",
          l && "fc-daygrid-month-start"
        ], elAttrs: Object.assign(Object.assign({}, Ji(e, a)), { id: r.dayNumberId }) })
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
          R(Ay, { allDayDate: a, singlePlacements: n.singlePlacements, moreCnt: n.moreCnt, alignmentElRef: i, alignGridTop: !n.showDayNumber, extraDateSpan: n.extraDateSpan, dateProfile: n.dateProfile, eventSelection: n.eventSelection, eventDrag: n.eventDrag, eventResize: n.eventResize, todayRange: n.todayRange })
        )
      ),
      R("div", { className: "fc-daygrid-day-bg" }, n.bgContent)
    ));
  }
}
function Ty(t) {
  return t.dayNumberText || R(Be, null, " ");
}
function ky(t, e, n) {
  const { start: r, end: i } = e, s = vn(i, -1), o = n.getYear(r), a = n.getMonth(r), c = n.getYear(s), l = n.getMonth(s);
  return !(o === c && a === l) && // first date in current view?
  (t.valueOf() === r.valueOf() || // a month-start that's within the current range?
  n.getDay(t) === 1 && t.valueOf() < i.valueOf());
}
function Iy(t, e, n, r, i, s, o) {
  let a = new Ny();
  a.allowReslicing = !0, a.strictOrder = r, e === !0 || n === !0 ? (a.maxCoord = s, a.hiddenConsumes = !0) : typeof e == "number" ? a.maxStackCnt = e : typeof n == "number" && (a.maxStackCnt = n, a.hiddenConsumes = !0);
  let c = [], l = [];
  for (let _ = 0; _ < t.length; _ += 1) {
    let y = t[_], { instanceId: m } = y.eventRange.instance, b = i[m];
    b != null ? c.push({
      index: _,
      thickness: b,
      span: {
        start: y.firstCol,
        end: y.lastCol + 1
      }
    }) : l.push(y);
  }
  let u = a.addSegs(c), d = a.toRects(), { singleColPlacements: f, multiColPlacements: h, leftoverMargins: g } = My(d, t, o), p = [], v = [];
  for (let _ of l) {
    h[_.firstCol].push({
      seg: _,
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let y = _.firstCol; y <= _.lastCol; y += 1)
      f[y].push({
        seg: Yn(_, y, y + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let _ = 0; _ < o.length; _ += 1)
    p.push(0);
  for (let _ of u) {
    let y = t[_.index], m = _.span;
    h[m.start].push({
      seg: Yn(y, m.start, m.end, o),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let b = m.start; b < m.end; b += 1)
      p[b] += 1, f[b].push({
        seg: Yn(y, b, b + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (let _ = 0; _ < o.length; _ += 1)
    v.push(g[_]);
  return { singleColPlacements: f, multiColPlacements: h, moreCnts: p, moreMarginTops: v };
}
function My(t, e, n) {
  let r = Oy(t, n.length), i = [], s = [], o = [];
  for (let a = 0; a < n.length; a += 1) {
    let c = r[a], l = [], u = 0, d = 0;
    for (let h of c) {
      let g = e[h.index];
      l.push({
        seg: Yn(g, a, a + 1, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: h.levelCoord,
        marginTop: h.levelCoord - u
      }), u = h.levelCoord + h.thickness;
    }
    let f = [];
    u = 0, d = 0;
    for (let h of c) {
      let g = e[h.index], p = h.span.end - h.span.start > 1, v = h.span.start === a;
      d += h.levelCoord - u, u = h.levelCoord + h.thickness, p ? (d += h.thickness, v && f.push({
        seg: Yn(g, h.span.start, h.span.end, n),
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: h.levelCoord,
        marginTop: 0
      })) : v && (f.push({
        seg: Yn(g, h.span.start, h.span.end, n),
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
function Oy(t, e) {
  let n = [];
  for (let r = 0; r < e; r += 1)
    n.push([]);
  for (let r of t)
    for (let i = r.span.start; i < r.span.end; i += 1)
      n[i].push(r);
  return n;
}
function Yn(t, e, n, r) {
  if (t.firstCol === e && t.lastCol === n - 1)
    return t;
  let i = t.eventRange, s = i.range, o = Rn(s, {
    start: r[e].date,
    end: st(r[n - 1].date, 1)
  });
  return Object.assign(Object.assign({}, t), { firstCol: e, lastCol: n - 1, eventRange: {
    def: i.def,
    ui: Object.assign(Object.assign({}, i.ui), { durationEditable: !1 }),
    instance: i.instance,
    range: o
  }, isStart: t.isStart && o.start.valueOf() === s.start.valueOf(), isEnd: t.isEnd && o.end.valueOf() === s.end.valueOf() });
}
class Ny extends ff {
  constructor() {
    super(...arguments), this.hiddenConsumes = !1, this.forceHidden = {};
  }
  addSegs(e) {
    const n = super.addSegs(e), { entriesByLevel: r } = this, i = (s) => !this.forceHidden[An(s)];
    for (let s = 0; s < r.length; s += 1)
      r[s] = r[s].filter(i);
    return n;
  }
  handleInvalidInsertion(e, n, r) {
    const { entriesByLevel: i, forceHidden: s } = this, { touchingEntry: o, touchingLevel: a, touchingLateral: c } = e;
    if (this.hiddenConsumes && o) {
      const l = An(o);
      if (!s[l])
        if (this.allowReslicing) {
          const u = Object.assign(Object.assign({}, o), { span: ra(o.span, n.span) }), d = An(u);
          s[d] = !0, i[a][c] = u, this.splitEntry(o, n, r);
        } else
          s[l] = !0, r.push(o);
    }
    return super.handleInvalidInsertion(e, n, r);
  }
}
class Zf extends Vt {
  constructor() {
    super(...arguments), this.cellElRefs = new Xt(), this.frameElRefs = new Xt(), this.fgElRefs = new Xt(), this.segHarnessRefs = new Xt(), this.rootElRef = ct(), this.state = {
      framePositions: null,
      maxContentHeight: null,
      eventInstanceHeights: {}
    }, this.handleResize = (e) => {
      e && this.updateSizing(!0);
    };
  }
  render() {
    let { props: e, state: n, context: r } = this, { options: i } = r, s = e.cells.length, o = qr(e.businessHourSegs, s), a = qr(e.bgEventSegs, s), c = qr(this.getHighlightSegs(), s), l = qr(this.getMirrorSegs(), s), { singleColPlacements: u, multiColPlacements: d, moreCnts: f, moreMarginTops: h } = Iy(rf(e.fgEventSegs, i.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, i.eventOrderStrict, n.eventInstanceHeights, n.maxContentHeight, e.cells), g = (
      // TODO: messy way to compute this
      e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}
    );
    return R(
      "tr",
      { ref: this.rootElRef, role: "row" },
      e.renderIntro && e.renderIntro(),
      e.cells.map((p, v) => {
        let _ = this.renderFgSegs(v, e.forPrint ? u[v] : d[v], e.todayRange, g), y = this.renderFgSegs(v, By(l[v], d), e.todayRange, {}, !!e.eventDrag, !!e.eventResize, !1);
        return R(Ry, { key: p.key, elRef: this.cellElRefs.createRef(p.key), innerElRef: this.frameElRefs.createRef(p.key), dateProfile: e.dateProfile, date: p.date, showDayNumber: e.showDayNumbers, showWeekNumber: e.showWeekNumbers && v === 0, forceDayTop: e.showWeekNumbers, todayRange: e.todayRange, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, extraRenderProps: p.extraRenderProps, extraDataAttrs: p.extraDataAttrs, extraClassNames: p.extraClassNames, extraDateSpan: p.extraDateSpan, moreCnt: f[v], moreMarginTop: h[v], singlePlacements: u[v], fgContentElRef: this.fgElRefs.createRef(p.key), fgContent: (
          // Fragment scopes the keys
          R(
            Be,
            null,
            R(Be, null, _),
            R(Be, null, y)
          )
        ), bgContent: (
          // Fragment scopes the keys
          R(
            Be,
            null,
            this.renderFillSegs(c[v], "highlight"),
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
    this.updateSizing(!Wt(e, r));
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
      for (let g of n) {
        let { seg: p } = g, { instanceId: v } = p.eventRange.instance, _ = v + ":" + e, y = g.isVisible && !i[v], m = g.isAbsolute, b = "", E = "";
        m && (c.isRtl ? (E = 0, b = u.lefts[p.lastCol] - u.lefts[p.firstCol]) : (b = 0, E = u.rights[p.firstCol] - u.rights[p.lastCol])), h.push(R("div", { className: "fc-daygrid-event-harness" + (m ? " fc-daygrid-event-harness-abs" : ""), key: _, ref: f ? null : this.segHarnessRefs.createRef(_), style: {
          visibility: y ? "" : "hidden",
          marginTop: m ? "" : g.marginTop,
          top: m ? g.absoluteTop : "",
          left: b,
          right: E
        } }, Yf(p) ? R(Qf, Object.assign({ seg: p, isDragging: s, isSelected: v === l, defaultDisplayEventEnd: d }, hn(p, r))) : R(Gf, Object.assign({ seg: p, isDragging: s, isResizing: o, isDateSelecting: a, isSelected: v === l, defaultDisplayEventEnd: d }, hn(p, r)))));
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
        o.push(R("div", { key: of(a.eventRange), className: "fc-daygrid-bg-harness", style: c }, n === "bg-event" ? R(Tf, Object.assign({ seg: a }, hn(a, i))) : kf(n)));
      }
    return R(Be, {}, ...o);
  }
  updateSizing(e) {
    let { props: n, state: r, frameElRefs: i } = this;
    if (!n.forPrint && n.clientWidth !== null) {
      if (e) {
        let c = n.cells.map((l) => i.currentMap[l.key]);
        if (c.length) {
          let l = this.rootElRef.current, u = new Xn(
            l,
            c,
            !0,
            // isHorizontal
            !1
          );
          (!r.framePositions || !r.framePositions.similarTo(u)) && this.setState({
            framePositions: new Xn(
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
Zf.addStateEquality({
  eventInstanceHeights: Wt
});
function By(t, e) {
  if (!t.length)
    return [];
  let n = Py(e);
  return t.map((r) => ({
    seg: r,
    isVisible: !0,
    isAbsolute: !0,
    absoluteTop: n[r.eventRange.instance.instanceId],
    marginTop: 0
  }));
}
function Py(t) {
  let e = {};
  for (let n of t)
    for (let r of n)
      e[r.seg.eventRange.instance.instanceId] = r.absoluteTop;
  return e;
}
class Ly extends Vt {
  constructor() {
    super(...arguments), this.splitBusinessHourSegs = he($r), this.splitBgEventSegs = he($r), this.splitFgEventSegs = he($r), this.splitDateSelectionSegs = he($r), this.splitEventDrag = he(Ec), this.splitEventResize = he(Ec), this.rowRefs = new Xt();
  }
  render() {
    let { props: e, context: n } = this, r = e.cells.length, i = this.splitBusinessHourSegs(e.businessHourSegs, r), s = this.splitBgEventSegs(e.bgEventSegs, r), o = this.splitFgEventSegs(e.fgEventSegs, r), a = this.splitDateSelectionSegs(e.dateSelectionSegs, r), c = this.splitEventDrag(e.eventDrag, r), l = this.splitEventResize(e.eventResize, r), u = r >= 7 && e.clientWidth ? e.clientWidth / n.options.aspectRatio / 6 : null;
    return R(Ar, { unit: "day" }, (d, f) => R(Be, null, e.cells.map((h, g) => R(Zf, {
      ref: this.rowRefs.createRef(g),
      key: h.length ? h[0].date.toISOString() : g,
      showDayNumbers: r > 1,
      showWeekNumbers: e.showWeekNumbers,
      todayRange: f,
      dateProfile: e.dateProfile,
      cells: h,
      renderIntro: e.renderRowIntro,
      businessHourSegs: i[g],
      eventSelection: e.eventSelection,
      bgEventSegs: s[g].filter(Hy),
      fgEventSegs: o[g],
      dateSelectionSegs: a[g],
      eventDrag: c[g],
      eventResize: l[g],
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
    this.rowPositions = new Xn(
      this.rootEl,
      this.rowRefs.collect().map((e) => e.getCellEls()[0]),
      // first cell el in each row. TODO: not optimal
      !1,
      !0
    ), this.colPositions = new Xn(
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
    let r = this.props.cells[e][n].date, i = st(r, 1);
    return { start: r, end: i };
  }
}
function Hy(t) {
  return t.eventRange.def.allDay;
}
class zy extends Vt {
  constructor() {
    super(...arguments), this.elRef = ct(), this.needsScrollReset = !1;
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
          R(Ly, { dateProfile: e.dateProfile, cells: e.cells, renderRowIntro: e.renderRowIntro, showWeekNumbers: e.showWeekNumbers, clientWidth: e.clientWidth, clientHeight: e.clientHeight, businessHourSegs: e.businessHourSegs, bgEventSegs: e.bgEventSegs, fgEventSegs: e.fgEventSegs, dateSelectionSegs: e.dateSelectionSegs, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, dayMaxEvents: r, dayMaxEventRows: n, forPrint: e.forPrint, isHitComboAllowed: e.isHitComboAllowed })
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
      const e = Fy(this.elRef.current, this.props.dateProfile);
      if (e) {
        const n = e.closest(".fc-daygrid-body"), r = n.closest(".fc-scroller"), i = e.getBoundingClientRect().top - n.getBoundingClientRect().top;
        r.scrollTop = i ? i + 1 : 0;
      }
      this.needsScrollReset = !1;
    }
  }
}
function Fy(t, e) {
  let n;
  return e.currentRangeUnit.match(/year|month/) && (n = t.querySelector(`[data-date="${Sv(e.currentDate)}-01"]`)), n || (n = t.querySelector(`[data-date="${jo(e.currentDate)}"]`)), n;
}
class Uy extends xf {
  constructor() {
    super(...arguments), this.forceDayIfListItem = !0;
  }
  sliceRange(e, n) {
    return n.sliceRange(e);
  }
}
class Xf extends Vt {
  constructor() {
    super(...arguments), this.slicer = new Uy(), this.tableRef = ct();
  }
  render() {
    let { props: e, context: n } = this;
    return R(zy, Object.assign({ ref: this.tableRef }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, n, e.dayTableModel), { dateProfile: e.dateProfile, cells: e.dayTableModel.cells, colGroupNode: e.colGroupNode, tableMinWidth: e.tableMinWidth, renderRowIntro: e.renderRowIntro, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.showWeekNumbers, expandRows: e.expandRows, headerAlignElRef: e.headerAlignElRef, clientWidth: e.clientWidth, clientHeight: e.clientHeight, forPrint: e.forPrint }));
  }
}
class Wy extends Ju {
  // Computes the date range that will be rendered
  buildRenderRange(e, n, r) {
    let i = super.buildRenderRange(e, n, r), { props: s } = this;
    return Vy({
      currentRange: i,
      snapToWeek: /^(year|month)$/.test(n),
      fixedWeekCount: s.fixedWeekCount,
      dateEnv: s.dateEnv
    });
  }
}
function Vy(t) {
  let { dateEnv: e, currentRange: n } = t, { start: r, end: i } = n, s;
  if (t.snapToWeek && (r = e.startOfWeek(r), s = e.startOfWeek(i), s.valueOf() !== i.valueOf() && (i = Ql(s, 1))), t.fixedWeekCount) {
    let o = e.startOfWeek(e.startOfMonth(st(n.end, -1))), a = Math.ceil(
      // could be partial weeks due to hiddenDays
      hv(o, i)
    );
    i = Ql(i, 6 - a);
  }
  return { start: r, end: i };
}
class jy extends Vt {
  constructor() {
    super(...arguments), this.headerElRef = ct();
  }
  renderSimpleLayout(e, n) {
    let { props: r, context: i } = this, s = [], o = ts(i.options);
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
      ns,
      { elClasses: ["fc-daygrid"], viewSpec: i.viewSpec },
      R(la, { liquid: !r.isHeightAuto && !r.forPrint, collapsibleWidth: r.forPrint, cols: [], sections: s })
    );
  }
  renderHScrollLayout(e, n, r, i) {
    let s = this.context.pluginHooks.scrollGridImpl;
    if (!s)
      throw new Error("No ScrollGrid implementation");
    let { props: o, context: a } = this, c = !o.forPrint && ts(a.options), l = !o.forPrint && Df(a.options), u = [];
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
        content: So
      }]
    }), R(
      ns,
      { elClasses: ["fc-daygrid"], viewSpec: a.viewSpec },
      R(s, { liquid: !o.isHeightAuto && !o.forPrint, forPrint: o.forPrint, collapsibleWidth: o.forPrint, colGroups: [{ cols: [{ span: r, minWidth: i }] }], sections: u })
    );
  }
}
class $y extends jy {
  constructor() {
    super(...arguments), this.buildDayTableModel = he(qy), this.headerRef = ct(), this.tableRef = ct();
  }
  render() {
    let { options: e, dateProfileGenerator: n } = this.context, { props: r } = this, i = this.buildDayTableModel(r.dateProfile, n), s = e.dayHeaders && R(mf, { ref: this.headerRef, dateProfile: r.dateProfile, dates: i.headerDates, datesRepDistinctDays: i.rowCnt === 1 }), o = (a) => R(Xf, { ref: this.tableRef, dateProfile: r.dateProfile, dayTableModel: i, businessHours: r.businessHours, dateSelection: r.dateSelection, eventStore: r.eventStore, eventUiBases: r.eventUiBases, eventSelection: r.eventSelection, eventDrag: r.eventDrag, eventResize: r.eventResize, nextDayThreshold: e.nextDayThreshold, colGroupNode: a.tableColGroupNode, tableMinWidth: a.tableMinWidth, dayMaxEvents: e.dayMaxEvents, dayMaxEventRows: e.dayMaxEventRows, showWeekNumbers: e.weekNumbers, expandRows: !r.isHeightAuto, headerAlignElRef: this.headerElRef, clientWidth: a.clientWidth, clientHeight: a.clientHeight, forPrint: r.forPrint });
    return e.dayMinWidth ? this.renderHScrollLayout(s, o, i.colCnt, e.dayMinWidth) : this.renderSimpleLayout(s, o);
  }
}
function qy(t, e) {
  let n = new bf(t.renderRange, e);
  return new yf(n, /year|month|week/.test(t.currentRangeUnit));
}
var Yy = nn({
  name: "@fullcalendar/daygrid",
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: $y,
      dateProfileGeneratorClass: Wy
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
}), Gy = '.fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:"\\00a0"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:"\\00a0-\\00a0"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}';
Lo(Gy);
class Qy extends om {
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
    return e.allDay ? Pm(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"];
  }
}
const Zy = ze({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "short"
});
function Kf(t) {
  let e = [
    "fc-timegrid-slot",
    "fc-timegrid-slot-label",
    t.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"
  ];
  return R(tn.Consumer, null, (n) => {
    if (!t.isLabeled)
      return R("td", { className: e.join(" "), "data-time": t.isoTimeStr });
    let { dateEnv: r, options: i, viewApi: s } = n, o = (
      // TODO: fully pre-parse
      i.slotLabelFormat == null ? Zy : Array.isArray(i.slotLabelFormat) ? ze(i.slotLabelFormat[0]) : ze(i.slotLabelFormat)
    ), a = {
      level: 0,
      time: t.time,
      date: r.toDate(t.date),
      view: s,
      text: r.format(t.date, o)
    };
    return R(yt, { elTag: "td", elClasses: e, elAttrs: {
      "data-time": t.isoTimeStr
    }, renderProps: a, generatorName: "slotLabelContent", customGenerator: i.slotLabelContent, defaultGenerator: Xy, classNameGenerator: i.slotLabelClassNames, didMount: i.slotLabelDidMount, willUnmount: i.slotLabelWillUnmount }, (c) => R(
      "div",
      { className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame" },
      R(c, { elTag: "div", elClasses: [
        "fc-timegrid-slot-label-cushion",
        "fc-scrollgrid-shrink-cushion"
      ] })
    ));
  });
}
function Xy(t) {
  return t.text;
}
class Ky extends Te {
  render() {
    return this.props.slatMetas.map((e) => R(
      "tr",
      { key: e.key },
      R(Kf, Object.assign({}, e))
    ));
  }
}
const Jy = ze({ week: "short" }), ex = 5;
class tx extends Vt {
  constructor() {
    super(...arguments), this.allDaySplitter = new Qy(), this.headerElRef = ct(), this.rootElRef = ct(), this.scrollerElRef = ct(), this.state = {
      slatCoords: null
    }, this.handleScrollTopRequest = (e) => {
      let n = this.scrollerElRef.current;
      n && (n.scrollTop = e);
    }, this.renderHeadAxis = (e, n = "") => {
      let { options: r } = this.context, { dateProfile: i } = this.props, s = i.renderRange, a = On(s.start, s.end) === 1 ? Ji(this.context, s.start, "week") : {};
      return r.weekNumbers && e === "day" ? R(If, { elTag: "th", elClasses: [
        "fc-timegrid-axis",
        "fc-scrollgrid-shrink"
      ], elAttrs: {
        "aria-hidden": !0
      }, date: s.start, defaultFormat: Jy }, (c) => R(
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
        R(yt, { elTag: "td", elClasses: [
          "fc-timegrid-axis",
          "fc-scrollgrid-shrink"
        ], elAttrs: {
          "aria-hidden": !0
        }, renderProps: i, generatorName: "allDayContent", customGenerator: n.allDayContent, defaultGenerator: nx, classNameGenerator: n.allDayClassNames, didMount: n.allDayDidMount, willUnmount: n.allDayWillUnmount }, (s) => R(
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
    let { context: i, props: s } = this, o = [], a = ts(i.options);
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
      ns,
      { elRef: this.rootElRef, elClasses: ["fc-timegrid"], viewSpec: i.viewSpec },
      R(la, { liquid: !s.isHeightAuto && !s.forPrint, collapsibleWidth: s.forPrint, cols: [{ width: "shrink" }], sections: o })
    );
  }
  renderHScrollLayout(e, n, r, i, s, o, a) {
    let c = this.context.pluginHooks.scrollGridImpl;
    if (!c)
      throw new Error("No ScrollGrid implementation");
    let { context: l, props: u } = this, d = !u.forPrint && ts(l.options), f = !u.forPrint && Df(l.options), h = [];
    e && h.push({
      type: "header",
      key: "header",
      isSticky: d,
      syncRowHeights: !0,
      chunks: [
        {
          key: "axis",
          rowContent: (p) => R("tr", { role: "presentation" }, this.renderHeadAxis("day", p.rowSyncHeights[0]))
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
          rowContent: (p) => R("tr", { role: "presentation" }, this.renderTableRowAxis(p.rowSyncHeights[0]))
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
    let g = l.options.nowIndicator;
    return h.push({
      type: "body",
      key: "body",
      liquid: !0,
      expandRows: !!l.options.expandRows,
      chunks: [
        {
          key: "axis",
          content: (p) => (
            // TODO: make this now-indicator arrow more DRY with TimeColsContent
            R(
              "div",
              { className: "fc-timegrid-axis-chunk" },
              R(
                "table",
                { "aria-hidden": !0, style: { height: p.expandRows ? p.clientHeight : "" } },
                p.tableColGroupNode,
                R(
                  "tbody",
                  null,
                  R(Ky, { slatMetas: o })
                )
              ),
              R(
                "div",
                { className: "fc-timegrid-now-indicator-container" },
                R(Ar, {
                  unit: g ? "minute" : "day"
                  /* hacky */
                }, (v) => {
                  let _ = g && a && a.safeComputeTop(v);
                  return typeof _ == "number" ? R(ua, { elClasses: ["fc-timegrid-now-indicator-arrow"], elStyle: { top: _ }, isAxis: !0, date: v }) : null;
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
          content: So
        },
        {
          key: "cols",
          content: So
        }
      ]
    }), R(
      ns,
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
    return (e === !0 || n === !0) && (e = void 0, n = ex), { dayMaxEvents: e, dayMaxEventRows: n };
  }
}
function nx(t) {
  return t.text;
}
class rx {
  constructor(e, n, r) {
    this.positions = e, this.dateProfile = n, this.slotDuration = r;
  }
  safeComputeTop(e) {
    let { dateProfile: n } = this;
    if (Kt(n.currentRange, e)) {
      let r = Ne(e), i = e.valueOf() - r.valueOf();
      if (i >= Mt(n.slotMinTime) && i < Mt(n.slotMaxTime))
        return this.computeTimeTop(Ce(i));
    }
    return null;
  }
  // Computes the top coordinate, relative to the bounds of the grid, of the given date.
  // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
  computeDateTop(e, n) {
    return n || (n = Ne(e)), this.computeTimeTop(Ce(e.valueOf() - n.valueOf()));
  }
  // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
  // This is a makeshify way to compute the time-top. Assumes all slatMetas dates are uniform.
  // Eventually allow computation with arbirary slat dates.
  computeTimeTop(e) {
    let { positions: n, dateProfile: r } = this, i = n.els.length, s = (e.milliseconds - Mt(r.slotMinTime)) / Mt(this.slotDuration), o, a;
    return s = Math.max(0, s), s = Math.min(i, s), o = Math.floor(s), o = Math.min(o, i - 1), a = s - o, n.tops[o] + n.getHeight(o) * a;
  }
}
class ix extends Te {
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
        e.axis && R(Kf, Object.assign({}, s)),
        R(yt, { elTag: "td", elClasses: [
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
class sx extends Te {
  constructor() {
    super(...arguments), this.rootElRef = ct(), this.slatElRefs = new Xt();
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
        R(ix, { slatElRefs: this.slatElRefs, axis: e.axis, slatMetas: e.slatMetas })
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
    n.onCoords && n.clientWidth !== null && this.rootElRef.current.offsetHeight && n.onCoords(new rx(new Xn(this.rootElRef.current, ox(this.slatElRefs.currentMap, n.slatMetas), !1, !0), this.props.dateProfile, e.options.slotDuration));
  }
}
function ox(t, e) {
  return e.map((n) => t[n.key]);
}
function lr(t, e) {
  let n = [], r;
  for (r = 0; r < e; r += 1)
    n.push([]);
  if (t)
    for (r = 0; r < t.length; r += 1)
      n[t[r].col].push(t[r]);
  return n;
}
function wc(t, e) {
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
class ax extends Te {
  render() {
    let { props: e } = this;
    return R(Mf, { elClasses: ["fc-timegrid-more-link"], elStyle: {
      top: e.top,
      bottom: e.bottom
    }, allDayDate: null, moreCnt: e.hiddenSegs.length, allSegs: e.hiddenSegs, hiddenSegs: e.hiddenSegs, extraDateSpan: e.extraDateSpan, dateProfile: e.dateProfile, todayRange: e.todayRange, popoverContent: () => ed(e.hiddenSegs, e), defaultGenerator: lx, forceTimed: !0 }, (n) => R(n, { elTag: "div", elClasses: ["fc-timegrid-more-link-inner", "fc-sticky"] }));
  }
}
function lx(t) {
  return t.shortText;
}
function cx(t, e, n) {
  let r = new ff();
  e != null && (r.strictOrder = e), n != null && (r.maxStackCnt = n);
  let i = r.addSegs(t), s = t1(i), o = ux(r);
  return o = px(o, 1), { segRects: gx(o), hiddenGroups: s };
}
function ux(t) {
  const { entriesByLevel: e } = t, n = pa((r, i) => r + ":" + i, (r, i) => {
    let s = hx(t, r, i), o = Sc(s, n), a = e[r][i];
    return [
      Object.assign(Object.assign({}, a), { nextLevelNodes: o[0] }),
      a.thickness + o[1]
      // the pressure builds
    ];
  });
  return Sc(e.length ? { level: 0, lateralStart: 0, lateralEnd: e[0].length } : null, n)[0];
}
function Sc(t, e) {
  if (!t)
    return [[], 0];
  let { level: n, lateralStart: r, lateralEnd: i } = t, s = r, o = [];
  for (; s < i; )
    o.push(e(n, s)), s += 1;
  return o.sort(fx), [
    o.map(dx),
    o[0][1]
    // first item's pressure
  ];
}
function fx(t, e) {
  return e[1] - t[1];
}
function dx(t) {
  return t[0];
}
function hx(t, e, n) {
  let { levelCoords: r, entriesByLevel: i } = t, s = i[e][n], o = r[e] + s.thickness, a = r.length, c = e;
  for (; c < a && r[c] < o; c += 1)
    ;
  for (; c < a; c += 1) {
    let l = i[c], u, d = Eo(l, s.span.start, _o), f = d[0] + d[1], h = f;
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
function px(t, e) {
  const n = pa((r, i, s) => An(r), (r, i, s) => {
    let { nextLevelNodes: o, thickness: a } = r, c = a + s, l = a / c, u, d = [];
    if (!o.length)
      u = e;
    else
      for (let h of o)
        if (u === void 0) {
          let g = n(h, i, c);
          u = g[0], d.push(g[1]);
        } else {
          let g = n(h, u, 0);
          d.push(g[1]);
        }
    let f = (u - i) * l;
    return [u - f, Object.assign(Object.assign({}, r), { thickness: f, nextLevelNodes: d })];
  });
  return t.map((r) => n(r, 0, 0)[1]);
}
function gx(t) {
  let e = [];
  const n = pa((i, s, o) => An(i), (i, s, o) => {
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
function pa(t, e) {
  const n = {};
  return (...r) => {
    let i = t(...r);
    return i in n ? n[i] : n[i] = e(...r);
  };
}
function Ac(t, e, n = null, r = 0) {
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
function vx(t, e, n, r) {
  let i = [], s = [];
  for (let l = 0; l < t.length; l += 1) {
    let u = e[l];
    u ? i.push({
      index: l,
      thickness: 1,
      span: u
    }) : s.push(t[l]);
  }
  let { segRects: o, hiddenGroups: a } = cx(i, n, r), c = [];
  for (let l of o)
    c.push({
      seg: t[l.index],
      rect: l
    });
  for (let l of s)
    c.push({ seg: l, rect: null });
  return { segPlacements: c, hiddenGroups: a };
}
const mx = ze({
  hour: "numeric",
  minute: "2-digit",
  meridiem: !1
});
class Jf extends Te {
  render() {
    return R(Rf, Object.assign({}, this.props, { elClasses: [
      "fc-timegrid-event",
      "fc-v-event",
      this.props.isShort && "fc-timegrid-event-short"
    ], defaultTimeFormat: mx }));
  }
}
class bx extends Te {
  constructor() {
    super(...arguments), this.sortEventSegs = he(rf);
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
    return R(fa, { elTag: "td", elRef: e.elRef, elClasses: [
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
      da(r) && R(c, { elTag: "div", elClasses: ["fc-timegrid-col-misc"] })
    ));
  }
  renderFgSegs(e, n, r, i, s, o) {
    let { props: a } = this;
    return a.forPrint ? ed(e, a) : this.renderPositionedFgSegs(e, n, r, i, s, o);
  }
  renderPositionedFgSegs(e, n, r, i, s, o) {
    let { eventMaxStack: a, eventShortHeight: c, eventOrderStrict: l, eventMinHeight: u } = this.context.options, { date: d, slatCoords: f, eventSelection: h, todayRange: g, nowDate: p } = this.props, v = r || i || s, _ = Ac(e, d, f, u), { segPlacements: y, hiddenGroups: m } = vx(e, _, l, a);
    return R(
      Be,
      null,
      this.renderHiddenGroups(m, e),
      y.map((b) => {
        let { seg: E, rect: A } = b, w = E.eventRange.instance.instanceId, D = v || !!(!n[w] && A), B = Qs(A && A.span), C = !v && A ? this.computeSegHStyle(A) : { left: 0, right: 0 }, k = !!A && A.stackForward > 0, P = !!A && A.span.end - A.span.start < c;
        return R(
          "div",
          { className: "fc-timegrid-event-harness" + (k ? " fc-timegrid-event-harness-inset" : ""), key: o || w, style: Object.assign(Object.assign({ visibility: D ? "" : "hidden" }, B), C) },
          R(Jf, Object.assign({ seg: E, isDragging: r, isResizing: i, isDateSelecting: s, isSelected: w === h, isShort: P }, hn(E, g, p)))
        );
      })
    );
  }
  // will already have eventMinHeight applied because segInputs already had it
  renderHiddenGroups(e, n) {
    let { extraDateSpan: r, dateProfile: i, todayRange: s, nowDate: o, eventSelection: a, eventDrag: c, eventResize: l } = this.props;
    return R(Be, null, e.map((u) => {
      let d = Qs(u.span), f = yx(u.entries, n);
      return R(ax, { key: Fu(Of(f)), hiddenSegs: f, top: d.top, bottom: d.bottom, extraDateSpan: r, dateProfile: i, todayRange: s, nowDate: o, eventSelection: a, eventDrag: c, eventResize: l });
    }));
  }
  renderFillSegs(e, n) {
    let { props: r, context: i } = this, o = Ac(e, r.date, r.slatCoords, i.options.eventMinHeight).map((a, c) => {
      let l = e[c];
      return R("div", { key: of(l.eventRange), className: "fc-timegrid-bg-harness", style: Qs(a) }, n === "bg-event" ? R(Tf, Object.assign({ seg: l }, hn(l, r.todayRange, r.nowDate))) : kf(n));
    });
    return R(Be, null, o);
  }
  renderNowIndicator(e) {
    let { slatCoords: n, date: r } = this.props;
    return n ? e.map((i, s) => R(
      ua,
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
function ed(t, { todayRange: e, nowDate: n, eventSelection: r, eventDrag: i, eventResize: s }) {
  let o = (i ? i.affectedInstances : null) || (s ? s.affectedInstances : null) || {};
  return R(Be, null, t.map((a) => {
    let c = a.eventRange.instance.instanceId;
    return R(
      "div",
      { key: c, style: { visibility: o[c] ? "hidden" : "" } },
      R(Jf, Object.assign({ seg: a, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: c === r, isShort: !1 }, hn(a, e, n)))
    );
  }));
}
function Qs(t) {
  return t ? {
    top: t.start,
    bottom: -t.end
  } : { top: "", bottom: "" };
}
function yx(t, e) {
  return t.map((n) => e[n.index]);
}
class xx extends Te {
  constructor() {
    super(...arguments), this.splitFgEventSegs = he(lr), this.splitBgEventSegs = he(lr), this.splitBusinessHourSegs = he(lr), this.splitNowIndicatorSegs = he(lr), this.splitDateSelectionSegs = he(lr), this.splitEventDrag = he(wc), this.splitEventResize = he(wc), this.rootElRef = ct(), this.cellElRefs = new Xt();
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
                R("div", { className: "fc-timegrid-now-indicator-container" }, typeof r == "number" && R(ua, { elClasses: ["fc-timegrid-now-indicator-arrow"], elStyle: { top: r }, isAxis: !0, date: e.nowDate }))
              )
            ),
            e.cells.map((f, h) => R(bx, { key: f.key, elRef: this.cellElRefs.createRef(f.key), dateProfile: e.dateProfile, date: f.date, nowDate: e.nowDate, todayRange: e.todayRange, extraRenderProps: f.extraRenderProps, extraDataAttrs: f.extraDataAttrs, extraClassNames: f.extraClassNames, extraDateSpan: f.extraDateSpan, fgEventSegs: s[h], bgEventSegs: o[h], businessHourSegs: a[h], nowIndicatorSegs: c[h], dateSelectionSegs: l[h], eventDrag: u[h], eventResize: d[h], slatCoords: e.slatCoords, eventSelection: e.eventSelection, forPrint: e.forPrint }))
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
    e.onColCoords && e.clientWidth !== null && e.onColCoords(new Xn(
      this.rootElRef.current,
      _x(this.cellElRefs.currentMap, e.cells),
      !0,
      // horizontal
      !1
    ));
  }
}
function _x(t, e) {
  return e.map((n) => t[n.key]);
}
class Ex extends Vt {
  constructor() {
    super(...arguments), this.processSlotOptions = he(wx), this.state = {
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
      R(sx, { axis: e.axis, dateProfile: e.dateProfile, slatMetas: e.slatMetas, clientWidth: e.clientWidth, minHeight: e.expandRows ? e.clientHeight : "", tableMinWidth: e.tableMinWidth, tableColGroupNode: e.axis ? e.tableColGroupNode : null, onCoords: this.handleSlatCoords }),
      R(xx, { cells: e.cells, axis: e.axis, dateProfile: e.dateProfile, businessHourSegs: e.businessHourSegs, bgEventSegs: e.bgEventSegs, fgEventSegs: e.fgEventSegs, dateSelectionSegs: e.dateSelectionSegs, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize, todayRange: e.todayRange, nowDate: e.nowDate, nowIndicatorSegs: e.nowIndicatorSegs, clientWidth: e.clientWidth, tableMinWidth: e.tableMinWidth, tableColGroupNode: e.tableColGroupNode, slatCoords: n.slatCoords, onColCoords: this.handleColCoords, forPrint: e.forPrint })
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
      let f = this.props.cells[u], h = a.positions.tops[d], g = a.positions.getHeight(d), p = (n - h) / g, v = Math.floor(p * l), _ = d * l + v, y = this.props.cells[u].date, m = vo(o.slotMinTime, sv(c, _)), b = r.add(y, m), E = r.add(b, c);
      return {
        dateProfile: o,
        dateSpan: Object.assign({ range: { start: b, end: E }, allDay: !1 }, f.extraDateSpan),
        dayEl: s.els[u],
        rect: {
          left: s.lefts[u],
          right: s.rights[u],
          top: h,
          bottom: h + g
        },
        layer: 0
      };
    }
    return null;
  }
}
function wx(t, e) {
  let n = e || t, r = Uo(t, n);
  return r === null && (n = t, r = 1), { snapDuration: n, snapsPerSlot: r };
}
class Sx extends xf {
  sliceRange(e, n) {
    let r = [];
    for (let i = 0; i < n.length; i += 1) {
      let s = Rn(e, n[i]);
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
class Ax extends Vt {
  constructor() {
    super(...arguments), this.buildDayRanges = he(Cx), this.slicer = new Sx(), this.timeColsRef = ct();
  }
  render() {
    let { props: e, context: n } = this, { dateProfile: r, dayTableModel: i } = e, { nowIndicator: s, nextDayThreshold: o } = n.options, a = this.buildDayRanges(i, r, n.dateEnv);
    return R(Ar, { unit: s ? "minute" : "day" }, (c, l) => R(Ex, Object.assign({ ref: this.timeColsRef }, this.slicer.sliceProps(e, r, null, n, a), { forPrint: e.forPrint, axis: e.axis, dateProfile: r, slatMetas: e.slatMetas, slotDuration: e.slotDuration, cells: i.cells[0], tableColGroupNode: e.tableColGroupNode, tableMinWidth: e.tableMinWidth, clientWidth: e.clientWidth, clientHeight: e.clientHeight, expandRows: e.expandRows, nowDate: c, nowIndicatorSegs: s && this.slicer.sliceNowDate(c, r, o, n, a), todayRange: l, onScrollTopRequest: e.onScrollTopRequest, onSlatCoords: e.onSlatCoords })));
  }
}
function Cx(t, e, n) {
  let r = [];
  for (let i of t.headerDates)
    r.push({
      start: n.add(i, e.slotMinTime),
      end: n.add(i, e.slotMaxTime)
    });
  return r;
}
const Cc = [
  { hours: 1 },
  { minutes: 30 },
  { minutes: 15 },
  { seconds: 30 },
  { seconds: 15 }
];
function Dx(t, e, n, r, i) {
  let s = /* @__PURE__ */ new Date(0), o = t, a = Ce(0), c = n || Rx(r), l = [];
  for (; Mt(o) < Mt(e); ) {
    let u = i.add(s, o), d = Uo(a, c) !== null;
    l.push({
      date: u,
      time: o,
      key: u.toISOString(),
      isoTimeStr: Av(u),
      isLabeled: d
    }), o = vo(o, r), a = vo(a, r);
  }
  return l;
}
function Rx(t) {
  let e, n, r;
  for (e = Cc.length - 1; e >= 0; e -= 1)
    if (n = Ce(Cc[e]), r = Uo(n, t), r !== null && r > 1)
      return n;
  return t;
}
class Tx extends tx {
  constructor() {
    super(...arguments), this.buildTimeColsModel = he(kx), this.buildSlatMetas = he(Dx);
  }
  render() {
    let { options: e, dateEnv: n, dateProfileGenerator: r } = this.context, { props: i } = this, { dateProfile: s } = i, o = this.buildTimeColsModel(s, r), a = this.allDaySplitter.splitProps(i), c = this.buildSlatMetas(s.slotMinTime, s.slotMaxTime, e.slotLabelInterval, e.slotDuration, n), { dayMinWidth: l } = e, u = !l, d = l, f = e.dayHeaders && R(mf, { dates: o.headerDates, dateProfile: s, datesRepDistinctDays: !0, renderIntro: u ? this.renderHeadAxis : null }), h = e.allDaySlot !== !1 && ((p) => R(Xf, Object.assign({}, a.allDay, { dateProfile: s, dayTableModel: o, nextDayThreshold: e.nextDayThreshold, tableMinWidth: p.tableMinWidth, colGroupNode: p.tableColGroupNode, renderRowIntro: u ? this.renderTableRowAxis : null, showWeekNumbers: !1, expandRows: !1, headerAlignElRef: this.headerElRef, clientWidth: p.clientWidth, clientHeight: p.clientHeight, forPrint: i.forPrint }, this.getAllDayMaxEventProps()))), g = (p) => R(Ax, Object.assign({}, a.timed, { dayTableModel: o, dateProfile: s, axis: u, slotDuration: e.slotDuration, slatMetas: c, forPrint: i.forPrint, tableColGroupNode: p.tableColGroupNode, tableMinWidth: p.tableMinWidth, clientWidth: p.clientWidth, clientHeight: p.clientHeight, onSlatCoords: this.handleSlatCoords, expandRows: p.expandRows, onScrollTopRequest: this.handleScrollTopRequest }));
    return d ? this.renderHScrollLayout(f, h, g, o.colCnt, l, c, this.state.slatCoords) : this.renderSimpleLayout(f, h, g);
  }
}
function kx(t, e) {
  let n = new bf(t.renderRange, e);
  return new yf(n, !1);
}
const Ix = {
  allDaySlot: Boolean
};
var Mx = nn({
  name: "@fullcalendar/timegrid",
  initialView: "timeGridWeek",
  optionRefiners: Ix,
  views: {
    timeGrid: {
      component: Tx,
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
sa.touchMouseIgnoreWait = 500;
let Co = 0, rs = 0, Do = !1;
class td {
  constructor(e) {
    this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = (n) => {
      if (!this.shouldIgnoreMouse() && Ox(n) && this.tryStart(n)) {
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
        r.removeEventListener("touchmove", this.handleTouchMove), r.removeEventListener("touchend", this.handleTouchEnd), r.removeEventListener("touchcancel", this.handleTouchEnd), window.removeEventListener("scroll", this.handleTouchScroll, !0), this.emitter.trigger("pointerup", this.createEventFromTouch(n)), this.cleanup(), this.isTouchDragging = !1, Nx();
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
    }, this.containerEl = e, this.emitter = new gs(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), Bx();
  }
  destroy() {
    this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), Px();
  }
  tryStart(e) {
    let n = this.querySubjectEl(e), r = e.target;
    return n && (!this.handleSelector || it(r, this.handleSelector)) ? (this.subjectEl = n, this.isDragging = !0, this.wasTouchScroll = !1, !0) : !1;
  }
  cleanup() {
    Do = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
  }
  querySubjectEl(e) {
    return this.selector ? it(e.target, this.selector) : this.containerEl;
  }
  shouldIgnoreMouse() {
    return Co || this.isTouchDragging;
  }
  // can be called by user of this class, to cancel touch-based scrolling for the current drag
  cancelTouchScroll() {
    this.isDragging && (Do = !0);
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
function Ox(t) {
  return t.button === 0 && !t.ctrlKey;
}
function Nx() {
  Co += 1, setTimeout(() => {
    Co -= 1;
  }, sa.touchMouseIgnoreWait);
}
function Bx() {
  rs += 1, rs === 1 && window.addEventListener("touchmove", nd, { passive: !1 });
}
function Px() {
  rs -= 1, rs || window.removeEventListener("touchmove", nd, { passive: !1 });
}
function nd(t) {
  Do && t.preventDefault();
}
class Lx {
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
    r.style.transition = "top " + n + "ms,left " + n + "ms", pr(r, {
      left: i.left,
      top: i.top
    }), jg(r, () => {
      r.style.transition = "", e();
    });
  }
  cleanup() {
    this.mirrorEl && (Ho(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null;
  }
  updateElPosition() {
    this.sourceEl && this.isVisible && pr(this.getMirrorEl(), {
      left: this.sourceElRect.left + this.deltaX,
      top: this.sourceElRect.top + this.deltaY
    });
  }
  getMirrorEl() {
    let e = this.sourceElRect, n = this.mirrorEl;
    return n || (n = this.mirrorEl = this.sourceEl.cloneNode(!0), n.style.userSelect = "none", n.classList.add("fc-event-dragging"), pr(n, {
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
class rd extends ea {
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
class id extends rd {
  constructor(e, n) {
    super(new Sm(e), n);
  }
  getEventTarget() {
    return this.scrollController.el;
  }
  computeClientRect() {
    return ym(this.scrollController.el);
  }
}
class Hx extends rd {
  constructor(e) {
    super(new Am(), e);
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
const Dc = typeof performance == "function" ? performance.now : Date.now;
class zx {
  constructor() {
    this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = () => {
      if (this.isAnimating) {
        let e = this.computeBestEdge(this.pointerScreenX + window.pageXOffset, this.pointerScreenY + window.pageYOffset);
        if (e) {
          let n = Dc();
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
      s < 0 ? this.everMovedUp = !0 : s > 0 && (this.everMovedDown = !0), o < 0 ? this.everMovedLeft = !0 : o > 0 && (this.everMovedRight = !0), this.pointerScreenX = r, this.pointerScreenY = i, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(Dc()));
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
    return this.queryScrollEls(e).map((n) => n === window ? new Hx(!1) : new id(n, !1));
  }
  queryScrollEls(e) {
    let n = [];
    for (let r of this.scrollQuery)
      typeof r == "object" ? n.push(r) : n.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(r)));
    return n;
  }
}
class Cr extends i1 {
  constructor(e, n) {
    super(e), this.containerEl = e, this.delay = null, this.minDistance = 0, this.touchScrollAllowed = !0, this.mirrorNeedsRevert = !1, this.isInteracting = !1, this.isDragging = !1, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.delayTimeoutId = null, this.onPointerDown = (i) => {
      this.isDragging || (this.isInteracting = !0, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, $g(document.body), Yg(document.body), i.isTouch || i.origEvent.preventDefault(), this.emitter.trigger("pointerdown", i), this.isInteracting && // not destroyed via pointerdown handler
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
      this.isInteracting && (this.isInteracting = !1, qg(document.body), Gg(document.body), this.emitter.trigger("pointerup", i), this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(i)), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null));
    };
    let r = this.pointer = new td(e);
    r.emitter.on("pointerdown", this.onPointerDown), r.emitter.on("pointermove", this.onPointerMove), r.emitter.on("pointerup", this.onPointerUp), n && (r.selector = n), this.mirror = new Lx(), this.autoScroller = new zx();
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
class Fx {
  constructor(e) {
    this.origRect = Jo(e), this.scrollCaches = Xu(e).map((n) => new id(n, !0));
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
      if (!Ux(i.getEventTarget()) && !tm(r, i.clientRect))
        return !1;
    return !0;
  }
}
function Ux(t) {
  let e = t.tagName;
  return e === "HTML" || e === "BODY";
}
class vs {
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
    }, this.droppableStore = n, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new gs();
  }
  // sets initialHit
  // sets coordAdjust
  processFirstCoord(e) {
    let n = { left: e.pageX, top: e.pageY }, r = n, i = e.subjectEl, s;
    i instanceof HTMLElement && (s = Jo(i), r = nm(r, s));
    let o = this.initialHit = this.queryHitForOffset(r.left, r.top);
    if (o) {
      if (this.useSubjectCenter && s) {
        let a = Yu(s, o.rect);
        a && (r = rm(a));
      }
      this.coordAdjust = im(r, n);
    } else
      this.coordAdjust = { left: 0, top: 0 };
  }
  handleMove(e, n) {
    let r = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
    (n || !ms(this.movingHit, r)) && (this.movingHit = r, this.emitter.trigger("hitupdate", r, !1, e));
  }
  prepareHits() {
    this.offsetTrackers = Jt(this.droppableStore, (e) => (e.component.prepareHits(), new Fx(e.el)));
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
        let l = c.computeLeft(), u = c.computeTop(), d = e - l, f = n - u, { origRect: h } = c, g = h.right - h.left, p = h.bottom - h.top;
        if (
          // must be within the element's bounds
          d >= 0 && d < g && f >= 0 && f < p
        ) {
          let v = a.queryHit(d, f, g, p);
          v && // make sure the hit is within activeRange, meaning it's not a dead cell
          ps(v.dateProfile.activeRange, v.dateSpan.range) && (!s || v.layer > s.layer) && (v.componentId = o, v.context = a.context, v.rect.left += l, v.rect.right += l, v.rect.top += u, v.rect.bottom += u, s = v);
        }
      }
    }
    return s;
  }
}
function ms(t, e) {
  return !t && !e ? !0 : !!t != !!e ? !1 : $m(t.dateSpan, e.dateSpan);
}
function sd(t, e) {
  let n = {};
  for (let r of e.pluginHooks.datePointTransforms)
    Object.assign(n, r(t, e));
  return Object.assign(n, Wx(t, e.dateEnv)), n;
}
function Wx(t, e) {
  return {
    date: e.toDate(t.range.start),
    dateStr: e.formatIso(t.range.start, { omitTime: t.allDay }),
    allDay: t.allDay
  };
}
class Vx extends tr {
  constructor(e) {
    super(e), this.handlePointerDown = (r) => {
      let { dragging: i } = this, s = r.origEvent.target;
      i.setIgnoreMove(!this.component.isValidDateDownEl(s));
    }, this.handleDragEnd = (r) => {
      let { component: i } = this, { pointer: s } = this.dragging;
      if (!s.wasTouchScroll) {
        let { initialHit: o, finalHit: a } = this.hitDragging;
        if (o && a && ms(o, a)) {
          let { context: c } = i, l = Object.assign(Object.assign({}, sd(o.dateSpan, c)), { dayEl: o.dayEl, jsEvent: r.origEvent, view: c.viewApi || c.calendarApi.view });
          c.emitter.trigger("dateClick", l);
        }
      }
    }, this.dragging = new Cr(e.el), this.dragging.autoScroller.isEnabled = !1;
    let n = this.hitDragging = new vs(this.dragging, ia(e));
    n.emitter.on("pointerdown", this.handlePointerDown), n.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
}
class jx extends tr {
  constructor(e) {
    super(e), this.dragSelection = null, this.handlePointerDown = (o) => {
      let { component: a, dragging: c } = this, { options: l } = a.context, u = l.selectable && a.isValidDateDownEl(o.origEvent.target);
      c.setIgnoreMove(!u), c.delay = o.isTouch ? $x(a) : null;
    }, this.handleDragStart = (o) => {
      this.component.context.calendarApi.unselect(o);
    }, this.handleHitUpdate = (o, a) => {
      let { context: c } = this.component, l = null, u = !1;
      if (o) {
        let d = this.hitDragging.initialHit;
        o.componentId === d.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(d, o) || (l = qx(d, o, c.pluginHooks.dateSelectionTransformers)), (!l || !x1(l, o.dateProfile, c)) && (u = !0, l = null);
      }
      l ? c.dispatch({ type: "SELECT_DATES", selection: l }) : a || c.dispatch({ type: "UNSELECT_DATES" }), u ? zo() : Fo(), a || (this.dragSelection = l);
    }, this.handlePointerUp = (o) => {
      this.dragSelection && (ef(this.dragSelection, o, this.component.context), this.dragSelection = null);
    };
    let { component: n } = e, { options: r } = n.context, i = this.dragging = new Cr(e.el);
    i.touchScrollAllowed = !1, i.minDistance = r.selectMinDistance || 0, i.autoScroller.isEnabled = r.dragScroll;
    let s = this.hitDragging = new vs(this.dragging, ia(e));
    s.emitter.on("pointerdown", this.handlePointerDown), s.emitter.on("dragstart", this.handleDragStart), s.emitter.on("hitupdate", this.handleHitUpdate), s.emitter.on("pointerup", this.handlePointerUp);
  }
  destroy() {
    this.dragging.destroy();
  }
}
function $x(t) {
  let { options: e } = t.context, n = e.selectLongPressDelay;
  return n == null && (n = e.longPressDelay), n;
}
function qx(t, e, n) {
  let r = t.dateSpan, i = e.dateSpan, s = [
    r.range.start,
    r.range.end,
    i.range.start,
    i.range.end
  ];
  s.sort(Jg);
  let o = {};
  for (let a of n) {
    let c = a(t, e);
    if (c === !1)
      return null;
    c && Object.assign(o, c);
  }
  return o.range = { start: s[0], end: s[3] }, o.allDay = r.allDay, o;
}
class Dr extends tr {
  constructor(e) {
    super(e), this.subjectEl = null, this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (o) => {
      let a = o.origEvent.target, { component: c, dragging: l } = this, { mirror: u } = l, { options: d } = c.context, f = c.context;
      this.subjectEl = o.subjectEl;
      let h = this.subjectSeg = Kn(o.subjectEl), p = (this.eventRange = h.eventRange).instance.instanceId;
      this.relevantEvents = Go(f.getCurrentData().eventStore, p), l.minDistance = o.isTouch ? 0 : d.eventDragMinDistance, l.delay = // only do a touch delay if touch and this event hasn't been selected yet
      o.isTouch && p !== c.props.eventSelection ? Gx(c) : null, d.fixedMirrorParent ? u.parentNode = d.fixedMirrorParent : u.parentNode = it(a, ".fc"), u.revertDuration = d.dragRevertDuration;
      let v = c.isValidSegDownEl(a) && !it(a, ".fc-event-resizer");
      l.setIgnoreMove(!v), this.isDragging = v && o.subjectEl.classList.contains("fc-event-draggable");
    }, this.handleDragStart = (o) => {
      let a = this.component.context, c = this.eventRange, l = c.instance.instanceId;
      o.isTouch ? l !== this.component.props.eventSelection && a.dispatch({ type: "SELECT_EVENT", eventInstanceId: l }) : a.dispatch({ type: "UNSELECT_EVENT" }), this.isDragging && (a.calendarApi.unselect(o), a.emitter.trigger("eventDragStart", {
        el: this.subjectEl,
        event: new Le(a, c.def, c.instance),
        jsEvent: o.origEvent,
        view: a.viewApi
      }));
    }, this.handleHitUpdate = (o, a) => {
      if (!this.isDragging)
        return;
      let c = this.relevantEvents, l = this.hitDragging.initialHit, u = this.component.context, d = null, f = null, h = null, g = !1, p = {
        affectedEvents: c,
        mutatedEvents: bt(),
        isEvent: !0
      };
      if (o) {
        d = o.context;
        let v = d.options;
        u === d || v.editable && v.droppable ? (f = Yx(l, o, d.getCurrentData().pluginHooks.eventDragMutationMassagers), f && (h = na(c, d.getCurrentData().eventUiBases, f, d), p.mutatedEvents = h, wf(p, o.dateProfile, d) || (g = !0, f = null, h = null, p.mutatedEvents = bt()))) : d = null;
      }
      this.displayDrag(d, p), g ? zo() : Fo(), a || (u === d && // TODO: write test for this
      ms(l, o) && (f = null), this.dragging.setMirrorNeedsRevert(!f), this.dragging.setMirrorIsVisible(!o || !this.subjectEl.getRootNode().querySelector(".fc-event-mirror")), this.receivingContext = d, this.validMutation = f, this.mutatedRelevantEvents = h);
    }, this.handlePointerUp = () => {
      this.isDragging || this.cleanup();
    }, this.handleDragEnd = (o) => {
      if (this.isDragging) {
        let a = this.component.context, c = a.viewApi, { receivingContext: l, validMutation: u } = this, d = this.eventRange.def, f = this.eventRange.instance, h = new Le(a, d, f), g = this.relevantEvents, p = this.mutatedRelevantEvents, { finalHit: v } = this.hitDragging;
        if (this.clearDrag(), a.emitter.trigger("eventDragStop", {
          el: this.subjectEl,
          event: h,
          jsEvent: o.origEvent,
          view: c
        }), u) {
          if (l === a) {
            let _ = new Le(a, p.defs[d.defId], f ? p.instances[f.instanceId] : null);
            a.dispatch({
              type: "MERGE_EVENTS",
              eventStore: p
            });
            let y = {
              oldEvent: h,
              event: _,
              relatedEvents: Sn(p, a, f),
              revert() {
                a.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: g
                  // the pre-change data
                });
              }
            }, m = {};
            for (let b of a.getCurrentData().pluginHooks.eventDropTransformers)
              Object.assign(m, b(u, a));
            a.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, y), m), { el: o.subjectEl, delta: u.datesDelta, jsEvent: o.origEvent, view: c })), a.emitter.trigger("eventChange", y);
          } else if (l) {
            let _ = {
              event: h,
              relatedEvents: Sn(g, a, f),
              revert() {
                a.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: g
                });
              }
            };
            a.emitter.trigger("eventLeave", Object.assign(Object.assign({}, _), { draggedEl: o.subjectEl, view: c })), a.dispatch({
              type: "REMOVE_EVENTS",
              eventStore: g
            }), a.emitter.trigger("eventRemove", _);
            let y = p.defs[d.defId], m = p.instances[f.instanceId], b = new Le(l, y, m);
            l.dispatch({
              type: "MERGE_EVENTS",
              eventStore: p
            });
            let E = {
              event: b,
              relatedEvents: Sn(p, l, m),
              revert() {
                l.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: p
                });
              }
            };
            l.emitter.trigger("eventAdd", E), o.isTouch && l.dispatch({
              type: "SELECT_EVENT",
              eventInstanceId: f.instanceId
            }), l.emitter.trigger("drop", Object.assign(Object.assign({}, sd(v.dateSpan, l)), { draggedEl: o.subjectEl, jsEvent: o.origEvent, view: v.context.viewApi })), l.emitter.trigger("eventReceive", Object.assign(Object.assign({}, E), { draggedEl: o.subjectEl, view: v.context.viewApi }));
          }
        } else
          a.emitter.trigger("_noEventDrop");
      }
      this.cleanup();
    };
    let { component: n } = this, { options: r } = n.context, i = this.dragging = new Cr(e.el);
    i.pointer.selector = Dr.SELECTOR, i.touchScrollAllowed = !1, i.autoScroller.isEnabled = r.dragScroll;
    let s = this.hitDragging = new vs(this.dragging, wo);
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
        mutatedEvents: bt(),
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
Dr.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
function Yx(t, e, n) {
  let r = t.dateSpan, i = e.dateSpan, s = r.range.start, o = i.range.start, a = {};
  r.allDay !== i.allDay && (a.allDay = i.allDay, a.hasEnd = e.context.options.allDayMaintainDuration, i.allDay && (s = Ne(s)));
  let c = Vn(s, o, t.context.dateEnv, t.componentId === e.componentId ? t.largeUnit : null);
  c.milliseconds && (a.allDay = !1);
  let l = {
    datesDelta: c,
    standardProps: a
  };
  for (let u of n)
    u(l, t, e);
  return l;
}
function Gx(t) {
  let { options: e } = t.context, n = e.eventLongPressDelay;
  return n == null && (n = e.longPressDelay), n;
}
class Qx extends tr {
  constructor(e) {
    super(e), this.draggingSegEl = null, this.draggingSeg = null, this.eventRange = null, this.relevantEvents = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (s) => {
      let { component: o } = this, a = this.querySegEl(s), c = Kn(a), l = this.eventRange = c.eventRange;
      this.dragging.minDistance = o.context.options.eventDragMinDistance, this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(s.origEvent.target) || s.isTouch && this.component.props.eventSelection !== l.instance.instanceId);
    }, this.handleDragStart = (s) => {
      let { context: o } = this.component, a = this.eventRange;
      this.relevantEvents = Go(o.getCurrentData().eventStore, this.eventRange.instance.instanceId);
      let c = this.querySegEl(s);
      this.draggingSegEl = c, this.draggingSeg = Kn(c), o.calendarApi.unselect(), o.emitter.trigger("eventResizeStart", {
        el: c,
        event: new Le(o, a.def, a.instance),
        jsEvent: s.origEvent,
        view: o.viewApi
      });
    }, this.handleHitUpdate = (s, o, a) => {
      let { context: c } = this.component, l = this.relevantEvents, u = this.hitDragging.initialHit, d = this.eventRange.instance, f = null, h = null, g = !1, p = {
        affectedEvents: l,
        mutatedEvents: bt(),
        isEvent: !0
      };
      s && (s.componentId === u.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(u, s) || (f = Zx(u, s, a.subjectEl.classList.contains("fc-event-resizer-start"), d.range))), f && (h = na(l, c.getCurrentData().eventUiBases, f, c), p.mutatedEvents = h, wf(p, s.dateProfile, c) || (g = !0, f = null, h = null, p.mutatedEvents = null)), h ? c.dispatch({
        type: "SET_EVENT_RESIZE",
        state: p
      }) : c.dispatch({ type: "UNSET_EVENT_RESIZE" }), g ? zo() : Fo(), o || (f && ms(u, s) && (f = null), this.validMutation = f, this.mutatedRelevantEvents = h);
    }, this.handleDragEnd = (s) => {
      let { context: o } = this.component, a = this.eventRange.def, c = this.eventRange.instance, l = new Le(o, a, c), u = this.relevantEvents, d = this.mutatedRelevantEvents;
      if (o.emitter.trigger("eventResizeStop", {
        el: this.draggingSegEl,
        event: l,
        jsEvent: s.origEvent,
        view: o.viewApi
      }), this.validMutation) {
        let f = new Le(o, d.defs[a.defId], c ? d.instances[c.instanceId] : null);
        o.dispatch({
          type: "MERGE_EVENTS",
          eventStore: d
        });
        let h = {
          oldEvent: l,
          event: f,
          relatedEvents: Sn(d, o, c),
          revert() {
            o.dispatch({
              type: "MERGE_EVENTS",
              eventStore: u
              // the pre-change events
            });
          }
        };
        o.emitter.trigger("eventResize", Object.assign(Object.assign({}, h), { el: this.draggingSegEl, startDelta: this.validMutation.startDelta || Ce(0), endDelta: this.validMutation.endDelta || Ce(0), jsEvent: s.origEvent, view: o.viewApi })), o.emitter.trigger("eventChange", h);
      } else
        o.emitter.trigger("_noEventResize");
      this.draggingSeg = null, this.relevantEvents = null, this.validMutation = null;
    };
    let { component: n } = e, r = this.dragging = new Cr(e.el);
    r.pointer.selector = ".fc-event-resizer", r.touchScrollAllowed = !1, r.autoScroller.isEnabled = n.context.options.dragScroll;
    let i = this.hitDragging = new vs(this.dragging, ia(e));
    i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("dragend", this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  querySegEl(e) {
    return it(e.subjectEl, ".fc-event");
  }
}
function Zx(t, e, n, r) {
  let i = t.context.dateEnv, s = t.dateSpan.range.start, o = e.dateSpan.range.start, a = Vn(s, o, i, t.largeUnit);
  if (n) {
    if (i.add(r.start, a) < r.end)
      return { startDelta: a };
  } else if (i.add(r.end, a) > r.start)
    return { endDelta: a };
  return null;
}
class Xx {
  constructor(e) {
    this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = (r) => {
      r.jsEvent && (this.isRecentPointerDateSelect = !0);
    }, this.onDocumentPointerDown = (r) => {
      let i = this.context.options.unselectCancel, s = Nu(r.origEvent);
      this.matchesCancel = !!it(s, i), this.matchesEvent = !!it(s, Dr.SELECTOR);
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
    let n = this.documentPointer = new td(document);
    n.shouldIgnoreMove = !0, n.shouldWatchScroll = !1, n.emitter.on("pointerdown", this.onDocumentPointerDown), n.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
  }
  destroy() {
    this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
  }
}
const Kx = {
  fixedMirrorParent: U
}, Jx = {
  dateClick: U,
  eventDragStart: U,
  eventDragStop: U,
  eventDrop: U,
  eventResizeStart: U,
  eventResizeStop: U,
  eventResize: U,
  drop: U,
  eventReceive: U,
  eventLeave: U
};
sa.dataAttrPrefix = "";
var e2 = nn({
  name: "@fullcalendar/interaction",
  componentInteractions: [Vx, jx, Dr, Qx],
  calendarInteractions: [Xx],
  elementDraggingImpl: Cr,
  optionRefiners: Kx,
  listenerRefiners: Jx
});
const t2 = {}, n2 = {
  t: "1672196428320",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3618",
  width: "200",
  height: "200"
}, r2 = /* @__PURE__ */ ve("path", {
  d: "M384 250V134a70 70 0 0 0-70-70H134a70 70 0 0 0-70 70v116a70 70 0 0 0 70 70h180a70 70 0 0 0 70-70z m-80-10H144v-96h160zM890 704H710a70 70 0 0 0-70 70v116a70 70 0 0 0 70 70h180a70 70 0 0 0 70-70V774a70 70 0 0 0-70-70z m-10 176H720v-96h160zM890 384H710a70 70 0 0 0-70 70v116a70 70 0 0 0 70 70h180a70 70 0 0 0 70-70V454a70 70 0 0 0-70-70z m-10 176H720v-96h160zM536 504H264v-80a40 40 0 0 0-40-40 40 40 0 0 0-40 40v432a40 40 0 0 0 40 40h312a40 40 0 0 0 40-40 40 40 0 0 0-40-40H264V584h272a40 40 0 0 0 40-40 40 40 0 0 0-40-40z",
  "p-id": "3619",
  "data-spm-anchor-id": "a313x.7781069.0.i2",
  class: "selected"
}, null, -1), i2 = [
  r2
];
function s2(t, e) {
  return ne(), me("svg", n2, i2);
}
const Zs = /* @__PURE__ */ Nt(t2, [["render", s2]]), o2 = {}, a2 = {
  t: "1672197639916",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "19012"
}, l2 = /* @__PURE__ */ ve("path", {
  d: "M863.1 255.1H551.3c-25.1 0-49.2-9.8-67.1-27.4l-75-73.4c-17.9-17.5-42-27.4-67.1-27.4H161c-53 0-96 43-96 96v512.8c0 53 43 96 96 96h702c53 0 96-43 96-96V351.1c0.1-53-42.9-96-95.9-96z m-31 161.1c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32v-0.1c0-17.7 14.3-32 32-32h576.1c17.7 0 32 14.3 32 32v0.1z",
  "p-id": "19013"
}, null, -1), c2 = [
  l2
];
function u2(t, e) {
  return ne(), me("svg", a2, c2);
}
const cr = /* @__PURE__ */ Nt(o2, [["render", u2]]), f2 = {}, d2 = {
  t: "1672197222005",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "14755"
}, h2 = /* @__PURE__ */ ve("path", {
  d: "M959.68 921.024c-15.232-181.696-139.648-331.968-307.84-386.624 70.464-45.632 117.248-124.48 117.248-214.464C769.152 178.624 654.208 64 512.512 64 370.752 64 255.808 178.624 255.808 319.936c0 89.984 46.784 168.832 117.248 214.528-168.192 54.592-292.544 204.864-307.84 386.56-0.192 3.456-0.64 5.44 0 10.176C66.496 947.2 80.64 960 96.704 960c17.92 0 32.064-14.656 32.064-32 16.704-197.76 182.272-351.936 383.744-351.936 201.408 0 366.976 154.176 383.68 351.936 0 17.344 14.144 32 32.064 32 16.064 0 30.208-12.8 31.424-28.8C960.32 926.464 959.936 924.416 959.68 921.024zM320 319.936C320 213.952 406.208 128 512.512 128s192.448 85.952 192.448 191.936c0 106.048-86.144 192-192.448 192S320 425.984 320 319.936z",
  "p-id": "14756"
}, null, -1), p2 = [
  h2
];
function g2(t, e) {
  return ne(), me("svg", d2, p2);
}
const Yr = /* @__PURE__ */ Nt(f2, [["render", g2]]), v2 = {}, m2 = {
  t: "1672194715727",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  "p-id": "2667"
}, b2 = /* @__PURE__ */ ve("path", {
  d: "M809.246403 771.926938 777.737782 803.458071 924.965961 950.667831 956.476629 919.157163Z",
  fill: "#5D5D5D",
  "p-id": "2668"
}, null, -1), y2 = /* @__PURE__ */ ve("path", {
  d: "M454.878536 70.285786C239.51556 70.285786 64.93236 244.847497 64.93236 460.231963c0 215.341486 174.583201 389.945153 389.945153 389.945153 215.362976 0 389.9472-174.603667 389.9472-389.945153C844.825736 244.847497 670.241512 70.285786 454.878536 70.285786zM454.878536 805.611108c-190.750415 0-345.381192-154.626683-345.381192-345.379145 0-190.751439 154.629753-345.380168 345.381192-345.380168 190.752462 0 345.382215 154.62873 345.382215 345.380168C800.259728 650.983401 645.630998 805.611108 454.878536 805.611108z",
  fill: "#5D5D5D",
  "p-id": "2669"
}, null, -1), x2 = [
  b2,
  y2
];
function _2(t, e) {
  return ne(), me("svg", m2, x2);
}
const E2 = /* @__PURE__ */ Nt(v2, [["render", _2]]), w2 = {}, S2 = {
  t: "1672212880079",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "19924"
}, A2 = /* @__PURE__ */ ve("path", {
  d: "M806.4 263.2l-45.6-45.6L512 467.2 263.2 217.6l-45.6 45.6L467.2 512 217.6 760.8l45.6 45.6L512 557.6l248.8 248.8 45.6-45.6L557.6 512z",
  "p-id": "19925"
}, null, -1), C2 = [
  A2
];
function D2(t, e) {
  return ne(), me("svg", S2, C2);
}
const R2 = /* @__PURE__ */ Nt(w2, [["render", D2]]), T2 = {}, k2 = {
  t: "1672216076738",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "28376"
}, I2 = /* @__PURE__ */ ve("path", {
  d: "M501.937582 545.097053c147.891962 0 268.231366-118.534055 268.223274-264.288929 0-145.746783-120.330301-264.28994-268.222263-264.28994-147.890951 0-268.221252 118.584625-268.221252 264.28994C233.71633 426.520519 354.046631 545.097053 501.937582 545.097053zM612.471463 570.546911 411.497184 570.546911c-186.760063 0-338.664249 149.569875-338.664249 333.472733l0 19.794109c0 96.139636 149.47278 96.139636 338.664249 96.139636l200.974278 0c181.747565 0 338.694591 0 338.694591-96.139636l0-19.794109C951.164031 720.158252 799.235571 570.546911 612.471463 570.546911z",
  "p-id": "28377"
}, null, -1), M2 = [
  I2
];
function O2(t, e) {
  return ne(), me("svg", k2, M2);
}
const jn = /* @__PURE__ */ Nt(T2, [["render", O2]]), N2 = {}, B2 = {
  t: "1680231254898",
  class: "icon",
  viewBox: "0 0 1154 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "9556"
}, P2 = /* @__PURE__ */ ve("path", {
  d: "M1015.808 64.512q62.464 0 99.84 31.744t37.376 96.256l0 568.32q0 27.648-10.24 52.224t-28.16 43.008-41.984 29.184-50.688 10.752l-892.928 0q-26.624 0-50.176-10.24t-40.96-27.136-27.648-39.424-10.24-48.128l0-580.608q0-55.296 33.792-90.624t95.232-35.328l886.784 0zM287.744 253.952q-19.456 0-36.864 7.168t-30.72 19.968-20.992 30.72-7.68 38.4 7.68 37.888 20.992 30.72 30.72 20.992 36.864 7.68q21.504 0 39.424-7.68t30.72-20.992 20.48-30.72 7.68-37.888q0-41.984-27.648-69.12t-70.656-27.136zM448.512 608.256q0-19.456-7.68-37.376t-20.48-30.72-30.72-20.48-37.376-7.68l-128 0q-39.936 0-67.584 28.16t-27.648 68.096l0 4.096 0 92.16 319.488 0 0-92.16 0-4.096zM923.648 709.632q20.48 0 30.208-10.24t9.728-24.576-11.264-25.088-31.744-10.752l-305.152 0q-20.48 0-30.72 10.752t-10.24 25.088 10.24 24.576 29.696 10.24l309.248 0zM924.672 577.536q20.48 0 29.696-10.24t9.216-24.576q0-15.36-8.704-25.6t-29.184-10.24l-313.344 0q-20.48 0-29.696 10.24t-9.216 25.6q0 14.336 8.704 24.576t29.184 10.24l313.344 0zM925.696 447.488q15.36 0 26.624-10.24t11.264-24.576-11.264-23.04-26.624-8.704l-207.872 0q-15.36 0-26.112 8.704t-10.752 23.04 10.752 24.576 26.112 10.24l207.872 0z",
  "p-id": "9557"
}, null, -1), L2 = [
  P2
];
function H2(t, e) {
  return ne(), me("svg", B2, L2);
}
const Ro = /* @__PURE__ */ Nt(N2, [["render", H2]]), z2 = {}, F2 = {
  t: "1698719360533",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "15490",
  width: "200",
  height: "200"
}, U2 = /* @__PURE__ */ ve("path", {
  d: "M960 704h-63.616v-167.392a32 32 0 0 0-32-32H544V416h160a32 32 0 0 0 32-32V96a32 32 0 0 0-32-32H320a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h160v88.608H161.984a32 32 0 0 0-32 31.968L129.792 704H64a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-192a32 32 0 0 0-32-32H193.792l0.16-135.392H480V704h-64a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-192a32 32 0 0 0-32-32h-64v-135.392h288.384V704H768a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-192a32 32 0 0 0-32-32zM352 128h320v224H352V128zM224 896H96v-128h128v128z m352 0h-128v-128h128v128z m352 0h-128v-128h128v128z",
  "p-id": "15491"
}, null, -1), W2 = [
  U2
];
function V2(t, e) {
  return ne(), me("svg", F2, W2);
}
const ur = /* @__PURE__ */ Nt(z2, [["render", V2]]), od = {
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
}, j2 = { class: "left-pick-list" }, $2 = { class: "post-view-list" }, q2 = { class: "ik-picker-single" }, Y2 = /* @__PURE__ */ Jn({
  __name: "PostList",
  props: od,
  emits: ["change", "check"],
  setup(t, { emit: e }) {
    var u, d;
    const n = t, r = qe(() => {
      var f, h;
      return ((f = n.handList) == null ? void 0 : f.length) === ((h = n.list) == null ? void 0 : h.length);
    }), i = qe(() => {
      var g, p, v, _;
      const f = (g = n.handList) == null ? void 0 : g.length, h = (p = n.list) == null ? void 0 : p.length;
      return n.multiple ? s.value = n.handList.map((y) => y[n.fixPropOpt.id]) : o.value = (_ = (v = n.handList) == null ? void 0 : v[0]) == null ? void 0 : _[n.fixPropOpt.id], f > 0 && f < h;
    }), s = Ue(
      n.handList.map((f) => f[n.fixPropOpt.id])
    ), o = Ue((d = (u = n.handList) == null ? void 0 : u[0]) == null ? void 0 : d[n.fixPropOpt.id]), a = (f) => {
      const h = f ? n.list.map((g) => g[n.fixPropOpt.id]) : [];
      e("change", h, f ? n.list : []);
    }, c = (f) => {
      e("change", f, n.list);
    }, l = (f) => {
      e("change", f, n.list);
    };
    return (f, h) => (ne(), me("div", j2, [
      f.multiple ? (ne(), we(ee(an), {
        key: 0,
        modelValue: r.value,
        "onUpdate:modelValue": h[0] || (h[0] = (g) => r.value = g),
        indeterminate: i.value,
        onChange: a
      }, {
        default: ue(() => [
          ft("全选")
        ]),
        _: 1
      }, 8, ["modelValue", "indeterminate"])) : Pe("", !0),
      ve("ul", $2, [
        f.multiple ? (ne(), we(ee(To), {
          key: 0,
          modelValue: s.value,
          "onUpdate:modelValue": h[1] || (h[1] = (g) => s.value = g),
          onChange: c
        }, {
          default: ue(() => [
            (ne(!0), me(dt, null, kt(f.list, (g) => (ne(), me("li", {
              key: g[n.fixPropOpt.id]
            }, [
              oe(ee(an), {
                label: g[n.fixPropOpt.id]
              }, {
                default: ue(() => [
                  oe(Ro),
                  ve("p", null, nt(g[n.fixPropOpt.name]), 1)
                ]),
                _: 2
              }, 1032, ["label"])
            ]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])) : (ne(), we(ee(ri), {
          key: 1,
          isIndeterminate: i.value,
          modelValue: o.value,
          "onUpdate:modelValue": h[2] || (h[2] = (g) => o.value = g),
          onChange: l
        }, {
          default: ue(() => [
            (ne(!0), me(dt, null, kt(f.list, (g) => (ne(), me("li", {
              class: "w-full",
              key: g[n.fixPropOpt.id]
            }, [
              oe(ee(ko), {
                label: g[n.fixPropOpt.id]
              }, {
                default: ue(() => [
                  ve("div", q2, [
                    oe(Ro),
                    ve("p", null, nt(g[n.fixPropOpt.name]), 1)
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
const G2 = /* @__PURE__ */ Nt(Y2, [["__scopeId", "data-v-c47c3e50"]]), Q2 = { class: "left-pick-list" }, Z2 = { class: "role-view-list" }, X2 = ["title"], K2 = { class: "ik-picker-single" }, J2 = ["title"], e_ = /* @__PURE__ */ Jn({
  __name: "RoleList",
  props: od,
  emits: ["change", "check"],
  setup(t, { emit: e }) {
    var u, d;
    const n = t, r = qe(() => {
      var f, h;
      return ((f = n.handList) == null ? void 0 : f.length) === ((h = n.list) == null ? void 0 : h.length);
    }), i = qe(() => {
      var g, p, v, _;
      const f = (g = n.handList) == null ? void 0 : g.length, h = (p = n.list) == null ? void 0 : p.length;
      return n.multiple ? s.value = n.handList.map((y) => y[n.fixPropOpt.id]) : o.value = (_ = (v = n.handList) == null ? void 0 : v[0]) == null ? void 0 : _[n.fixPropOpt.id], f > 0 && f < h;
    }), s = Ue(
      n.handList.map((f) => f[n.fixPropOpt.id])
    ), o = Ue((d = (u = n.handList) == null ? void 0 : u[0]) == null ? void 0 : d[n.fixPropOpt.id]), a = (f) => {
      const h = f ? n.list.map((g) => g[n.fixPropOpt.id]) : [];
      e("change", h, f ? n.list : []);
    }, c = (f) => {
      e("change", f, n.list);
    }, l = (f) => {
      e("change", f, n.list);
    };
    return (f, h) => (ne(), me("div", Q2, [
      f.multiple ? (ne(), we(ee(an), {
        key: 0,
        modelValue: r.value,
        "onUpdate:modelValue": h[0] || (h[0] = (g) => r.value = g),
        indeterminate: i.value,
        onChange: a
      }, {
        default: ue(() => [
          ft("全选")
        ]),
        _: 1
      }, 8, ["modelValue", "indeterminate"])) : Pe("", !0),
      ve("ul", Z2, [
        f.multiple ? (ne(), we(ee(To), {
          key: 0,
          modelValue: s.value,
          "onUpdate:modelValue": h[1] || (h[1] = (g) => s.value = g),
          onChange: c
        }, {
          default: ue(() => [
            (ne(!0), me(dt, null, kt(f.list, (g) => (ne(), me("li", {
              key: g[f.fixPropOpt.id]
            }, [
              oe(ee(an), {
                label: g[f.fixPropOpt.id],
                value: g[f.fixPropOpt.id],
                disabled: g.disabled
              }, {
                default: ue(() => [
                  oe(jn),
                  ve("p", {
                    title: g[f.fixPropOpt.name]
                  }, nt(g[f.fixPropOpt.name]), 9, X2)
                ]),
                _: 2
              }, 1032, ["label", "value", "disabled"])
            ]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])) : (ne(), we(ee(ri), {
          key: 1,
          indeterminate: i.value,
          modelValue: o.value,
          "onUpdate:modelValue": h[2] || (h[2] = (g) => o.value = g),
          onChange: l
        }, {
          default: ue(() => [
            (ne(!0), me(dt, null, kt(f.list, (g) => (ne(), me("li", {
              class: "w-full",
              key: g[f.fixPropOpt.id]
            }, [
              oe(ee(ko), {
                label: g[f.fixPropOpt.id],
                value: g[f.fixPropOpt.id],
                disabled: g.disabled
              }, {
                default: ue(() => [
                  ve("div", K2, [
                    oe(jn),
                    ve("p", {
                      title: g[f.fixPropOpt.name]
                    }, nt(g[f.fixPropOpt.name]), 9, J2)
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
const t_ = /* @__PURE__ */ Nt(e_, [["__scopeId", "data-v-a51e0920"]]);
var gt = /* @__PURE__ */ ((t) => (t.org = "organization", t.dep = "dep", t.user = "user", t.role = "role", t.post = "post", t.dep_user = "dep_user", t))(gt || {}), hr = /* @__PURE__ */ ((t) => (t.group = "group", t.role = "role", t.post = "post", t))(hr || {});
const sn = {
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
}, n_ = {
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
}, r_ = (t, e) => {
  const n = Ue([]), r = async (s, o, a) => {
    var D, B;
    const { url: c, methods: l, headers: u, param: d } = t.value || {}, f = {
      parentOrgId: s,
      ...d || {},
      parentDepartmentId: o || "",
      name: a || ""
    }, h = await fetch(c, {
      method: l,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        ...u
      },
      body: JSON.stringify(f)
    }), { success: g, data: p } = await h.json();
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
    const { departments: v, roles: _, posts: y, users: m, organizations: b, rootOrganization: E, rootDepartment: A } = p, w = E || A;
    return n.value[0] = e.org ? {
      ...e.org,
      id: e.elementId,
      elementType: (B = (D = e.org) == null ? void 0 : D.elementType) == null ? void 0 : B.toLocaleUpperCase()
    } : {
      ...w,
      id: w.elementId
    }, {
      depList: Ht.cloneDeep(v),
      roleList: Ht.cloneDeep(_),
      postList: Ht.cloneDeep(y),
      userList: Ht.cloneDeep(m),
      organizationList: Ht.cloneDeep(b),
      rootOrganization: E,
      rootDepartment: A
    };
  };
  return {
    handData: r,
    handSetChild: (s, o) => {
      r(s == null ? void 0 : s.elementId, o);
    },
    bannerList: n
  };
}, i_ = {
  shadow: "hover",
  class: "sel-list"
}, s_ = { key: 0 }, o_ = {
  key: 0,
  class: "check-all"
}, a_ = {
  key: 0,
  class: "view-list"
}, l_ = {
  key: 0,
  class: "filter-user"
}, c_ = { class: "filter-user" }, u_ = {
  key: 2,
  class: "next-child"
}, f_ = { class: "filter-user" }, d_ = {
  key: 1,
  class: "filter-user"
}, h_ = {
  key: 2,
  class: "next-child"
}, p_ = { class: "text-over-flow" }, g_ = { class: "text-over-flow" }, v_ = { class: "text-over-flow" }, m_ = {
  key: 2,
  class: "next-child"
}, b_ = {
  key: 1,
  class: "empty"
}, y_ = /* @__PURE__ */ ve("div", { class: "split-div" }, null, -1), x_ = { class: "choose-list" }, __ = { class: "choose-item" }, E_ = /* @__PURE__ */ ve("div", null, "已选", -1), w_ = { class: "dialog-footer" }, S_ = /* @__PURE__ */ Jn({
  __name: "picker",
  props: n_,
  emits: ["handChild", "update:show", "update:modelValue", "ok", "search"],
  setup(t, { expose: e, emit: n }) {
    const r = t;
    Md((H) => ({
      "3e125c61": Qe.value
    }));
    const i = Ue(""), s = Ue(""), o = Ue(""), a = Ue([]), c = Ue([]), l = Ue([]), u = Ue([]), d = Ue([]), f = Ue(!1), h = r.imageBaseUrl || `${location.origin}/server/oss/download?fileUrl=`, g = (H) => H ? H.startsWith("http") ? H : `${h}${H}` : "";
    xn(() => r.api, () => {
      r.show && C("");
    });
    const p = qe(() => ({
      name: "name",
      type: "type",
      id: "id",
      avatar: "avatar",
      ...r.propOption
    })), v = qe(() => ({
      dep: "DEPT",
      user: "USER",
      role: "ROLE",
      post: "POST",
      organization: "ORGANIZATION",
      ...r.typeOption
    })), _ = Ue([]), y = r_(Od(r, "api"), r), m = y.handData, b = y.bannerList;
    r.immediate && m(o.value, s.value, i.value);
    const E = (H) => (H.forEach((K) => {
      var L, le;
      K.disabled = ((le = (L = r.modelValue) == null ? void 0 : L.find((De) => De[p.value.id] === K[p.value.id])) == null ? void 0 : le.disabled) || !1;
    }), H), A = async () => {
      var H, K, L, le, De, Je, Dt, Et, yn;
      f.value = !0;
      try {
        if ((H = r.depList) != null && H.length || (K = r.userList) != null && K.length || (L = r.roleList) != null && L.length || (le = r.postList) != null && le.length) {
          a.value = (De = r.userList) == null ? void 0 : De.filter((tt) => tt[p.value.name].includes(i.value)), c.value = (Je = r.depList) == null ? void 0 : Je.filter((tt) => tt[p.value.name].includes(i.value)), l.value = (Dt = r.roleList) == null ? void 0 : Dt.filter((tt) => tt[p.value.name].includes(i.value)), u.value = (Et = r.postList) == null ? void 0 : Et.filter((tt) => tt[p.value.name].includes(i.value)), d.value = (yn = r.organizationList) == null ? void 0 : yn.filter((tt) => tt[p.value.name].includes(i.value)), V(), f.value = !1;
          return;
        }
        const Ve = await m(o.value, s.value, i.value);
        try {
          a.value = E((Ve == null ? void 0 : Ve.userList) || []), c.value = E((Ve == null ? void 0 : Ve.depList) || []), l.value = E((Ve == null ? void 0 : Ve.roleList) || []), u.value = E((Ve == null ? void 0 : Ve.postList) || []), d.value = E((Ve == null ? void 0 : Ve.organizationList) || []);
        } catch (tt) {
          f.value = !1, console.info("error: ", tt);
        }
        V(), f.value = !1;
      } catch {
        f.value = !1;
      }
    }, w = Xs({
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
    }), D = Xs({
      indeterminate: !1,
      checkAll: 0
    }), B = (H) => w.org.has(H) || w.dep.has(H) || w.user.has(H) || w.role.has(H) || w.post.has(H), C = hg.debounce(A, 300), k = qe(() => {
      const H = Array.from(w.org.values()), K = Array.from(w.dep.values()), L = Array.from(w.role.values()), le = Array.from(w.user.values()), De = Array.from(w.post.values());
      return _.value = [...H, ...K, ...L, ...De, ...le], {
        list: [...H, ...K, ...L, ...le, ...De],
        org: {
          list: H,
          len: H.length,
          deps: H
        },
        dep: {
          list: K,
          len: K.length,
          deps: K
        },
        role: {
          list: L,
          len: L.length
        },
        user: {
          list: le,
          len: le.length
        },
        post: {
          list: De,
          len: De.length
        }
      };
    }), P = qe(
      () => {
        const H = r.chooseType.map((L) => L.toLocaleLowerCase());
        let K = [...H];
        return H.includes("dep") && (K = [...K, "organization", "dept"]), H.includes("dep_user") && (K = [...K, "user"]), K;
      }
    ), N = qe(
      () => P.value.includes(gt.dep) && !P.value.includes(gt.user) && !P.value.includes(gt.org)
    ), W = qe(
      () => P.value.includes(gt.user) && !P.value.includes(gt.dep) && !P.value.includes(gt.org)
    ), z = qe(() => P.value.includes(gt.org) && !P.value.includes(gt.dep) && !P.value.includes(gt.user)), q = qe(() => !b.value.length), Q = qe(
      () => !r.max || k.value.list.length < r.max
    ), ie = (H) => [v.value.dep, v.value.organization].includes(H[p.value.type]) ? H.hasOwnProperty("disabled") : !1, te = Ue([]), se = (H) => {
      te.value = H, te.value.forEach((K) => {
        K.readonly = K == null ? void 0 : K.disabled;
      });
    }, F = Ue(!1), V = (H = !1) => {
      var L;
      const K = (L = r == null ? void 0 : r.userList) != null && L.length ? Ht.cloneDeep([...r == null ? void 0 : r.organizationList, ...r == null ? void 0 : r.userList, ...r == null ? void 0 : r.depList]) : [...d.value, ...c.value, ...a.value];
      return !H && se(K), K;
    };
    xn(
      () => r.show,
      async (H) => {
        var K;
        if (F.value = H, H) {
          s.value = r.pid, o.value = ((K = r.org) == null ? void 0 : K.elementId) || r.orgPid, !r.userList.length && !r.depList.length && !r.roleList.length && !r.postList.length && !r.organizationList.length ? await A() : (a.value = r.userList, c.value = r.depList, l.value = r.roleList, u.value = r.postList, d.value = r.organizationList), w.trans = [], D.checkAll = 0, D.indeterminate = !1;
          const L = V(!0);
          for (const De of L)
            B(De[p.value.id]) && w.trans.push(De[p.value.id]);
          const le = L.length === w.trans.length;
          D.indeterminate = !!(L.length && !le), D.checkAll = Number(L.length && le), Ks(() => {
            var De;
            (De = r.modelValue) != null && De.length ? r.modelValue.forEach((Je) => {
              xe(Je), r.multiple ? w.trans.push(Je[p.value.id]) : w.single = Je[p.value.id];
            }) : We();
          });
        } else
          We();
      }
    ), ya(() => {
      let H;
      if (N.value || W.value) {
        const L = a.value.length, le = c.value.length;
        H = N.value ? le : W.value ? L : L + L;
      } else
        H = te.value.length;
      const K = w.trans.length;
      D.indeterminate = w.trans.length ? K !== H : !1, D.checkAll = +(H !== 0 && K === H);
    });
    const j = (H) => {
      if (H) {
        if (w.single = "", H[p.value.id]) {
          const K = w.trans.findIndex(
            (L) => L === H[p.value.id]
          );
          K !== -1 && w.trans.splice(K, 1);
        }
        switch (H[p.value.type]) {
          case v.value.dep:
            return w.dep.delete(H[p.value.id]);
          case v.value.user:
            return w.user.delete(H[p.value.id]);
          case v.value.role:
            return w.role.delete(H[p.value.id]);
          case v.value.post:
            return w.post.delete(H[p.value.id]);
          case v.value.organization:
            return w.org.delete(H[p.value.id]);
          default:
            return;
        }
      }
    }, Y = (H) => {
      j(H);
    }, xe = (H) => {
      if (!B(H[p.value.id])) {
        const K = {
          ...H
          // readonly: item.disabled
        };
        switch (H[p.value.type]) {
          case v.value.dep:
            return w.dep.set(H[p.value.id], K);
          case v.value.user:
            return w.user.set(H[p.value.id], K);
          case v.value.role:
            return w.role.set(H[p.value.id], K);
          case v.value.post:
            return w.post.set(H[p.value.id], K);
          case v.value.organization:
            return w.org.set(H[p.value.id], K);
          default:
            return;
        }
      }
    };
    xn(
      () => w.trans,
      (H) => {
        if (!H.length)
          te.value.forEach((K) => {
            K.disabled = !1;
            try {
              r.multiple && j(K);
            } catch {
            }
          });
        else {
          const K = te.value.filter(
            (le) => !H.includes(le[p.value.id])
          );
          for (const le of K)
            le.disabled = !1, r.multiple && j(le);
          const L = te.value.filter(
            (le) => H.includes(le[p.value.id])
          );
          for (const le of L)
            le.disabled = ie(le), xe(le);
        }
      },
      { deep: !0 }
    ), xn(
      () => w.single,
      (H) => {
        if (H) {
          const K = te.value.find((L) => L[p.value.id] === H);
          K && (w.dep.clear(), w.user.clear(), w.role.clear(), w.post.clear(), w.org.clear(), w.trans = [], Ks(() => {
            xe(K);
          }));
        }
      }
    );
    const Ee = (H) => {
      if (H) {
        let K = [];
        if (P.value.includes("dep") || P.value.includes("dep_user")) {
          const L = te.value.filter(
            (le) => le[p.value.type].toLocaleUpperCase() === v.value[gt.dep].toLocaleUpperCase()
          );
          K = [...K, ...L];
        }
        if (P.value.includes("user") || P.value.includes("dep_user")) {
          const L = te.value.filter(
            (le) => le[p.value.type].toLocaleUpperCase() === v.value[gt.user].toLocaleUpperCase()
          );
          K = [...K, ...L];
        }
        if (P.value.includes("organization")) {
          const L = te.value.filter(
            (le) => le[p.value.type].toLocaleUpperCase() === v.value[gt.org].toLocaleUpperCase()
          );
          K = [...K, ...L];
        }
        K.forEach((L) => {
          !w.trans.includes(L[p.value.id]) && w.trans.push(L[p.value.id]);
        });
      } else
        te.value.forEach((K) => {
          const L = w.trans.findIndex((le) => le === K[p.value.id]);
          L >= 0 && w.trans.splice(L, 1);
        });
    }, Me = (H) => {
      H[p.value.type] === v.value.organization ? (o.value = H == null ? void 0 : H.elementId, s.value = "") : (o.value = "", s.value = H == null ? void 0 : H.elementId), A(), b.value.push(H);
    }, pe = () => {
      const H = b.value.length - 2, K = H < 0 ? 0 : H, L = b.value[K];
      L[p.value.type] === v.value.organization ? (o.value = H < 0 ? "root" : (L == null ? void 0 : L.elementId) || (L == null ? void 0 : L.id), s.value = "") : (o.value = "", s.value = H < 0 ? "" : (L == null ? void 0 : L.elementId) || (L == null ? void 0 : L.id)), A(), b.value.pop();
    }, Oe = qe(() => b.value.length), Ge = (H, K) => {
      !K && !r.topLink || K !== Oe.value - 1 && (H[p.value.type] === v.value.organization ? (o.value = H == null ? void 0 : H.elementId, s.value = "") : (o.value = "", s.value = H == null ? void 0 : H.elementId), A(), b.value.splice(K + 1));
    }, At = qe(() => r.chooseType.includes("role") && r.chooseType.length === 1), ut = qe(() => r.chooseType.includes("post") && r.chooseType.length === 1), Xe = Ue(r.tabs[0]), He = Ue(r.tabs[0]);
    ya(() => (He.value = At.value ? r.tabs[1] : ut.value ? r.tabs[2] : Xe.value, He.value));
    const We = () => {
      w.dep.clear(), w.user.clear(), w.role.clear(), w.post.clear(), w.org.clear(), w.trans = [], at.value = [], Yt.value = [], Xe.value = r.tabs[0], He.value = r.tabs[0], i.value = "", s.value = r.pid, o.value = r.orgPid, b.value.splice(1, b.value.length), w.single = "", _.value = [];
    }, jt = () => {
      var H;
      n(
        "ok",
        Ht.cloneDeep({
          // 所有选项、部门、人员、角色分别列出
          ...k.value,
          // 排序后的列表
          sort: _.value
        })
      ), n("update:modelValue", Ht.cloneDeep(((H = k.value) == null ? void 0 : H.list) || [])), n("update:show", !1), We();
    }, Bt = () => {
      n("update:show", !1), We();
    };
    e({ handClear: We, handRomeve: Y, handDelete: j });
    const xt = qe(() => {
      const H = P.value;
      return !!((H.includes("post") || H.includes("role")) && H.length > 1);
    }), $t = qe(() => [
      { label: "group", name: "组织架构" },
      { label: "role", name: "角色列表" },
      { label: "post", name: "岗位列表" }
    ].filter((H) => r.tabs.includes(H.label))), _t = qe(
      () => `${(typeof r.width == "string" ? Number.parseInt(r.width) : r.width) / 2 - 30}px`
    ), Qe = qe(
      () => `${typeof r.height == "string" ? Number.parseInt(r.height) : r.height}px`
    ), Ke = () => {
      r.multiple || (w.post.clear(), w.role.clear(), w.user.clear(), w.dep.clear(), w.single = "");
    }, at = Ue([]), qt = (H, K) => {
      r.multiple || (w.single = "");
      const L = r.multiple ? H : [H];
      if (!L.length) {
        w.role.clear();
        return;
      }
      Ke(), K.forEach((le) => {
        L != null && L.includes(le[p.value.id]) ? xe(le) : j(le);
      });
    };
    xn(
      () => k.value.role.len,
      (H) => {
        at.value = Ht.cloneDeep(k.value.role.list);
      }
    );
    const Yt = Ue([]), Ct = (H, K) => {
      r.multiple || (w.single = "");
      const L = r.multiple ? H : [H];
      if (!L.length) {
        w.post.clear();
        return;
      }
      Ke(), K.forEach((le) => {
        L != null && L.includes(le[p.value.id]) ? xe(le) : j(le);
      });
    };
    return xn(
      () => k.value.post.len,
      (H) => {
        Yt.value = Ht.cloneDeep(k.value.post.list);
      }
    ), xn(
      () => i.value,
      (H) => {
        C("");
      }
    ), (H, K) => (ne(), we(ee(Rc), {
      modelValue: F.value,
      "onUpdate:modelValue": K[6] || (K[6] = (L) => F.value = L),
      title: H.title,
      "destroy-on-close": "",
      "close-on-click-modal": !1,
      "close-on-click-escape": !1,
      draggable: "",
      "align-center": "",
      width: typeof H.width == "string" ? H.width : `${H.width}%`,
      class: "p_p_picker-dialog",
      "modal-class": "p_p_picker-dialog-modal",
      onClose: Bt
    }, {
      footer: ue(() => [
        ve("span", w_, [
          oe(ee(Qt), {
            onClick: vt(Bt, ["stop"])
          }, {
            default: ue(() => [
              ft("取消")
            ]),
            _: 1
          }, 8, ["onClick"]),
          oe(ee(Qt), {
            type: "primary",
            onClick: vt(jt, ["stop"])
          }, {
            default: ue(() => [
              ft(" 确定 ")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: ue(() => [
        ve("div", {
          class: "dep-use-picker",
          style: Hn({ height: Qe.value })
        }, [
          ve("div", i_, [
            ve("div", null, [
              oe(ee(Js), {
                modelValue: i.value,
                "onUpdate:modelValue": K[0] || (K[0] = (L) => i.value = L),
                clearable: "",
                placeholder: H.placeholder,
                "prefix-icon": E2,
                style: Hn({ width: _t.value })
              }, null, 8, ["modelValue", "placeholder", "style"]),
              xt.value ? (ne(), we(ee(ri), {
                key: 0,
                modelValue: Xe.value,
                "onUpdate:modelValue": K[1] || (K[1] = (L) => Xe.value = L),
                class: "ik-picker-tab",
                style: Hn({ width: _t.value })
              }, {
                default: ue(() => [
                  (ne(!0), me(dt, null, kt($t.value, (L) => (ne(), we(ee($d), {
                    label: L.label,
                    key: L.label
                  }, {
                    default: ue(() => [
                      ft(nt(L.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "style"])) : Pe("", !0)
            ]),
            He.value === ee(hr).group ? (ne(), me("div", s_, [
              oe(ee(qd), {
                separator: ">",
                class: Is(["banner", { "top-unlink": !H.topLink }])
              }, {
                default: ue(() => [
                  Oe.value ? (ne(!0), me(dt, { key: 0 }, kt(ee(b), (L, le) => (ne(), we(ee(Yd), {
                    key: L[p.value.id],
                    onClick: vt((De) => Ge(L, le), ["stop"])
                  }, {
                    default: ue(() => [
                      ft(nt(L[p.value.name]), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 128)) : Pe("", !0)
                ]),
                _: 1
              }, 8, ["class"]),
              H.multiple ? (ne(), me("div", o_, [
                oe(ee(an), {
                  modelValue: D.checkAll,
                  "onUpdate:modelValue": K[2] || (K[2] = (L) => D.checkAll = L),
                  indeterminate: D.indeterminate,
                  "true-label": 1,
                  "false-label": 0,
                  disabled: !H.multiple,
                  onChange: Ee,
                  onInput: Ee
                }, {
                  default: ue(() => [
                    ft("全选")
                  ]),
                  _: 1
                }, 8, ["modelValue", "indeterminate", "disabled"]),
                Oe.value > 1 ? or((ne(), we(ee(Qt), {
                  key: 0,
                  link: "",
                  type: "primary",
                  onClick: vt(pe, ["stop"])
                }, {
                  default: ue(() => [
                    ft("上一级")
                  ]),
                  _: 1
                }, 8, ["onClick"])), [
                  [xa, !q.value]
                ]) : Pe("", !0)
              ])) : Pe("", !0)
            ])) : Pe("", !0),
            He.value === ee(hr).group ? (ne(), me(dt, { key: 1 }, [
              te.value.length ? or((ne(), me("ul", a_, [
                H.multiple ? (ne(), we(ee(To), {
                  key: 0,
                  modelValue: w.trans,
                  "onUpdate:modelValue": K[3] || (K[3] = (L) => w.trans = L)
                }, {
                  default: ue(() => [
                    (ne(!0), me(dt, null, kt(d.value, (L) => (ne(), me("li", {
                      key: L[p.value.id]
                    }, [
                      H.chooseType.includes("org") ? (ne(), me("div", l_, [
                        oe(ur),
                        ve("p", null, nt(L[p.value.name]), 1)
                      ])) : (ne(), we(ee(an), {
                        key: 1,
                        label: L[p.value.id],
                        disabled: !Q.value || (L == null ? void 0 : L.readonly)
                      }, {
                        default: ue(() => [
                          ve("div", c_, [
                            oe(ur),
                            ve("p", null, nt(L[p.value.name]), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["label", "disabled"])),
                      H.children ? (ne(), me("div", u_, [
                        [v.value.organization, v.value.dep, v.value.role].includes(
                          L[p.value.type]
                        ) ? (ne(), we(ee(Qt), {
                          key: 0,
                          link: "",
                          type: "primary",
                          onClick: vt((le) => Me(L), ["stop"]),
                          disabled: L.disabled
                        }, {
                          icon: ue(() => [
                            oe(Zs)
                          ]),
                          default: ue(() => [
                            ft(" 下级 ")
                          ]),
                          _: 2
                        }, 1032, ["onClick", "disabled"])) : Pe("", !0)
                      ])) : Pe("", !0)
                    ]))), 128)),
                    (!W.value || H.showDep) && !z.value ? (ne(!0), me(dt, { key: 0 }, kt(c.value, (L) => (ne(), me("li", {
                      key: L[p.value.id]
                    }, [
                      H.chooseType.includes("dep") || H.chooseType.includes("dep_user") ? (ne(), we(ee(an), {
                        key: 0,
                        label: L[p.value.id],
                        disabled: !Q.value || (L == null ? void 0 : L.readonly)
                      }, {
                        default: ue(() => [
                          ve("div", f_, [
                            oe(cr),
                            ve("p", null, nt(L[p.value.name]), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["label", "disabled"])) : (ne(), me("div", d_, [
                        oe(cr),
                        ve("p", null, nt(L[p.value.name]), 1)
                      ])),
                      H.children ? (ne(), me("div", h_, [
                        [v.value.dep, v.value.role].includes(
                          L[p.value.type]
                        ) ? (ne(), we(ee(Qt), {
                          key: 0,
                          link: "",
                          type: "primary",
                          onClick: vt((le) => Me(L), ["stop"]),
                          disabled: L.disabled
                        }, {
                          icon: ue(() => [
                            oe(Zs)
                          ]),
                          default: ue(() => [
                            ft(" 下级 ")
                          ]),
                          _: 2
                        }, 1032, ["onClick", "disabled"])) : Pe("", !0)
                      ])) : Pe("", !0)
                    ]))), 128)) : Pe("", !0),
                    H.chooseType.includes("user") || H.chooseType.includes("dep_user") ? (ne(!0), me(dt, { key: 1 }, kt(a.value, (L) => (ne(), me("li", {
                      key: L[p.value.id]
                    }, [
                      oe(ee(an), {
                        label: L[p.value.id],
                        disabled: !Q.value || (L == null ? void 0 : L.readonly)
                      }, {
                        default: ue(() => {
                          var le, De;
                          return [
                            v.value.dep === L[p.value.type] ? (ne(), we(jn, { key: 0 })) : v.value.user === L[p.value.type] ? (ne(), we(ee(Br), {
                              key: 1,
                              size: 30,
                              src: g((le = p.value) != null && le.avatar ? L[(De = p.value) == null ? void 0 : De.avatar] : ""),
                              icon: Yr
                            }, null, 8, ["src"])) : Pe("", !0),
                            ve("span", p_, nt(L[p.value.name]), 1)
                          ];
                        }),
                        _: 2
                      }, 1032, ["label", "disabled"])
                    ]))), 128)) : Pe("", !0)
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : (ne(), we(ee(ri), {
                  key: 1,
                  modelValue: w.single,
                  "onUpdate:modelValue": K[4] || (K[4] = (L) => w.single = L)
                }, {
                  default: ue(() => [
                    (ne(!0), me(dt, null, kt(te.value, (L) => {
                      var le, De, Je;
                      return ne(), me("li", {
                        key: L[p.value.id]
                      }, [
                        P.value.includes((le = L[p.value.type]) == null ? void 0 : le.toLocaleLowerCase()) ? (ne(), we(ee(ko), {
                          key: 0,
                          label: L[p.value.id],
                          class: Is({
                            readonly: ![v.value.organization, v.value.dep, v.value.user].includes(
                              L[p.value.type]
                            ),
                            "w-full": !0
                          }),
                          disabled: L.readonly
                        }, {
                          default: ue(() => {
                            var Dt, Et;
                            return [
                              v.value.organization === L[p.value.type] ? (ne(), we(ur, { key: 0 })) : v.value.dep === L[p.value.type] ? (ne(), we(cr, { key: 1 })) : v.value.role === L[p.value.type] ? (ne(), we(jn, { key: 2 })) : v.value.user === L[p.value.type] ? (ne(), we(ee(Br), {
                                key: 3,
                                size: 30,
                                src: g((Dt = p.value) != null && Dt.avatar ? L[(Et = p.value) == null ? void 0 : Et.avatar] : ""),
                                icon: Yr
                              }, null, 8, ["src"])) : Pe("", !0),
                              ve("span", g_, nt(L[p.value.name]), 1)
                            ];
                          }),
                          _: 2
                        }, 1032, ["label", "class", "disabled"])) : (ne(), me(dt, { key: 1 }, [
                          v.value.organization === L[p.value.type] ? (ne(), we(ur, { key: 0 })) : v.value.dep === L[p.value.type] ? (ne(), we(cr, { key: 1 })) : v.value.role === L[p.value.type] ? (ne(), we(jn, { key: 2 })) : v.value.user === L[p.value.type] ? (ne(), we(ee(Br), {
                            key: 3,
                            size: 30,
                            src: g((De = p.value) != null && De.avatar ? L[(Je = p.value) == null ? void 0 : Je.avatar] : ""),
                            icon: Yr
                          }, null, 8, ["src"])) : Pe("", !0),
                          ve("span", v_, nt(L[p.value.name]), 1)
                        ], 64)),
                        H.children ? (ne(), me("div", m_, [
                          [v.value.organization, v.value.dep, v.value.role].includes(
                            L[p.value.type]
                          ) ? (ne(), we(ee(Qt), {
                            key: 0,
                            link: "",
                            type: "primary",
                            onClick: vt((Dt) => Me(L), ["stop"])
                          }, {
                            icon: ue(() => [
                              oe(Zs)
                            ]),
                            default: ue(() => [
                              ft(" 下级 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : Pe("", !0)
                        ])) : Pe("", !0)
                      ]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"]))
              ])), [
                [ee(Ms), f.value]
              ]) : (ne(), me("div", b_, nt(H.emptyText), 1))
            ], 64)) : He.value === ee(hr).role ? or((ne(), we(t_, {
              key: 2,
              fixPropOpt: p.value,
              list: l.value,
              max: H.max,
              multiple: H.multiple,
              "hand-list": at.value,
              onChange: qt
            }, null, 8, ["fixPropOpt", "list", "max", "multiple", "hand-list"])), [
              [ee(Ms), f.value]
            ]) : He.value === ee(hr).post ? or((ne(), we(G2, {
              key: 3,
              fixPropOpt: p.value,
              list: u.value,
              max: H.max,
              multiple: H.multiple,
              "hand-list": Yt.value,
              onChange: Ct
            }, null, 8, ["fixPropOpt", "list", "max", "multiple", "hand-list"])), [
              [ee(Ms), f.value]
            ]) : Pe("", !0)
          ]),
          y_,
          ve("div", x_, [
            ve("div", __, [
              E_,
              oe(ee(Qt), {
                type: "primary",
                link: "",
                onClick: vt(We, ["stop"])
              }, {
                default: ue(() => [
                  ft("清空")
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            oe(ee(Kd), {
              tag: "ul",
              name: "fade",
              "item-key": "elementId",
              modelValue: _.value,
              "onUpdate:modelValue": K[5] || (K[5] = (L) => _.value = L),
              style: Hn({ height: `calc(${Qe.value} + 21px)` }),
              animation: ee(sn).animation,
              group: ee(sn).group,
              disabled: ee(sn).disabled,
              ghostClass: ee(sn).ghostClass,
              forceFallback: ee(sn).ghostClass
            }, {
              item: ue(({ element: L }) => [
                oe(Nd, {
                  type: "transition",
                  name: "flip-list"
                }, {
                  default: ue(() => [
                    ve("li", {
                      class: Is(["list-group-item"]),
                      style: Hn({
                        borderRadius: `${ee(sn).itemStyle.radius}px`,
                        marginBottom: `${ee(sn).itemStyle.bottom}px`,
                        backgroundColor: `${ee(sn).itemStyle.background}`
                      })
                    }, [
                      ve("div", null, [
                        v.value.organization === L[p.value.type] ? (ne(), we(ur, { key: 0 })) : Pe("", !0),
                        v.value.dep === L[p.value.type] ? (ne(), we(cr, { key: 1 })) : v.value.role === L[p.value.type] ? (ne(), we(jn, { key: 2 })) : v.value.post === L[p.value.type] ? (ne(), we(Ro, { key: 3 })) : v.value.user === L[p.value.type] ? (ne(), we(ee(Br), {
                          key: 4,
                          size: 30,
                          src: g(p.value.avatar ? L[p.value.avatar] : ""),
                          icon: Yr
                        }, null, 8, ["src"])) : Pe("", !0),
                        ve("span", null, nt(L[p.value.name]), 1)
                      ]),
                      or(oe(R2, {
                        class: "close",
                        onClick: vt((le) => Y(L), ["stop"])
                      }, null, 8, ["onClick"]), [
                        [xa, !(L != null && L.readonly)]
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
const A_ = Tc(S_);
let C_ = 0, D_ = (/* @__PURE__ */ new Date()).toISOString().replace(/T.*$/, "");
const R_ = [
  {
    id: T_(),
    title: "All-day event",
    start: D_
  }
  // {
  //   id: createEventId(),
  //   title: 'Timed event',
  //   start: todayStr + 'T12:00:00'
  // }
];
function T_() {
  return String(C_++);
}
const Rr = (t) => (Pd("data-v-5b784b52"), t = t(), Ld(), t), k_ = { class: "demo-app" }, I_ = { class: "demo-app-main" }, M_ = { class: "title-line" }, O_ = ["title", "onClick"], N_ = {
  key: 0,
  style: { width: "90%" }
}, B_ = /* @__PURE__ */ Rr(() => /* @__PURE__ */ ve("span", { class: "to" }, "至", -1)), P_ = {
  key: 1,
  style: { width: "90%" }
}, L_ = /* @__PURE__ */ Rr(() => /* @__PURE__ */ ve("span", { class: "to" }, "至", -1)), H_ = {
  key: 2,
  style: { width: "90%", display: "flex", "align-items": "center", "justify-content": "space-between" }
}, z_ = {
  key: 0,
  style: { "margin-left": "2%" }
}, F_ = /* @__PURE__ */ Rr(() => /* @__PURE__ */ ve("span", {
  class: "to",
  style: { width: "10% !important" }
}, "至", -1)), U_ = { key: 1 }, W_ = /* @__PURE__ */ Rr(() => /* @__PURE__ */ ve("span", {
  class: "to",
  style: { width: "10% !important" }
}, "至", -1)), V_ = ["onClick"], j_ = {
  key: 0,
  class: "placeholder"
}, $_ = { class: "info" }, q_ = /* @__PURE__ */ Rr(() => /* @__PURE__ */ ve("img", {
  src: "https://img1.baidu.com/it/u=1960110688,1786190632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
  alt: ""
}, null, -1)), Y_ = { class: "dialog-footer" }, G_ = {
  name: "IkApprovalProcess"
}, Q_ = /* @__PURE__ */ Jn({
  ...G_,
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
        o.timeType = "month", o.form.startDate = rn.toYMD(g.start), o.form.endDate = rn.toYMD(new Date(v));
      } else
        g.view.type == "timeGridWeek" ? (o.timeType = "week", o.form.startDate = rn.toYMDHM(g.start), o.form.endDate = rn.toYMDHM(g.end)) : g.view.type == "timeGridDay" && (o.timeType = "day", o.form.startDate = rn.toYMD(g.start), o.form.endDate = rn.toYMD(g.start), o.form.startTime = rn.toDateTime(g.start), o.form.endTime = rn.toDateTime(g.end));
      g.view.calendar.unselect(), Ks(() => {
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
      }).then((_) => {
        _.json().then((y) => {
          const { success: m, data: b } = y;
          if (!m)
            return;
          const { departments: E, users: A, roles: w, posts: D } = b;
          o.depList = E, o.userList = A, o.roleList = w, o.postList = D;
        });
      }).catch((_) => {
        console.info("error: ", _);
      });
    }, o = Xs({
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
        locale: Ey,
        plugins: [
          Yy,
          Mx,
          e2
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
        initialEvents: R_,
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
    }, c = async () => {
      var v, _, y, m;
      let g = (_ = (v = o.selectInfo) == null ? void 0 : v.view) == null ? void 0 : _.calendar, p = {
        id: (/* @__PURE__ */ new Date()).getTime(),
        title: o.form.title,
        start: (y = o.selectInfo) == null ? void 0 : y.startStr,
        end: (m = o.selectInfo) == null ? void 0 : m.endStr,
        allDay: o.allDay
      };
      await g.addEvent(p), e("success", p), a();
    }, l = (g) => {
      Zd.confirm(`你确定删除事件'${g.event.title}'?`, "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(() => {
        Xd({
          type: "success",
          message: "删除成功"
        }), g.event.remove(), e("delete", g.event);
      });
    }, u = (g) => {
      o.handList = g.list, o.form.personList = g.list;
    }, d = () => {
      o.isShow = !0;
    }, f = (g) => {
      i(g == null ? void 0 : g.elementId);
    }, h = (g) => {
      o.form.personList.splice(g, 1), o.handList = o.form.personList;
    };
    return (g, p) => {
      const v = Bd("el-checkbox");
      return ne(), me("div", k_, [
        ve("div", I_, [
          oe(ee(vy), {
            class: "demo-app-calendar",
            options: o.calendarOptions
          }, {
            eventContent: ue((_) => [
              ve("div", M_, [
                ve("span", {
                  class: "title",
                  title: _.event.title,
                  onClick: vt((y) => r(), ["stop"])
                }, nt(_.event.title), 9, O_),
                oe(ee(Pn), {
                  size: 16,
                  onClick: vt((y) => l(_), ["stop"])
                }, {
                  default: ue(() => [
                    oe(ee(zd))
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ])
            ]),
            _: 1
          }, 8, ["options"])
        ]),
        oe(ee(Rc), {
          modelValue: o.dialogVisible,
          "onUpdate:modelValue": p[12] || (p[12] = (_) => o.dialogVisible = _),
          title: o.title,
          width: "30%",
          ref: "formRef",
          onClose: a
        }, {
          footer: ue(() => [
            ve("span", Y_, [
              oe(ee(Qt), { onClick: a }, {
                default: ue(() => [
                  ft("取消")
                ]),
                _: 1
              }),
              oe(ee(Qt), {
                type: "primary",
                onClick: c
              }, {
                default: ue(() => [
                  ft("确定")
                ]),
                _: 1
              })
            ])
          ]),
          default: ue(() => [
            oe(ee(Gd), {
              model: o.form
            }, {
              default: ue(() => [
                oe(ee(Pr), null, {
                  default: ue(() => [
                    oe(ee(Pn), { class: "icon" }, {
                      default: ue(() => [
                        oe(ee(Fd))
                      ]),
                      _: 1
                    }),
                    oe(ee(Js), {
                      modelValue: o.form.title,
                      "onUpdate:modelValue": p[0] || (p[0] = (_) => o.form.title = _),
                      placeholder: `添加${o.form.type == 1 ? "会议" : "活动"}标题`,
                      style: { width: "70%" },
                      clearable: ""
                    }, null, 8, ["modelValue", "placeholder"]),
                    oe(ee(Qd), {
                      modelValue: o.form.type,
                      "onUpdate:modelValue": p[1] || (p[1] = (_) => o.form.type = _),
                      style: { width: "20%" }
                    }, {
                      default: ue(() => [
                        oe(ee(_a), {
                          label: "会议",
                          value: 1
                        }),
                        oe(ee(_a), {
                          label: "活动",
                          value: 2
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                oe(ee(Pr), null, {
                  default: ue(() => [
                    oe(ee(Pn), { class: "icon" }, {
                      default: ue(() => [
                        oe(ee(Ud))
                      ]),
                      _: 1
                    }),
                    o.timeType == "month" ? (ne(), me("div", N_, [
                      oe(ee(Ln), {
                        modelValue: o.form.startDate,
                        "onUpdate:modelValue": p[2] || (p[2] = (_) => o.form.startDate = _),
                        type: "date",
                        placeholder: "开始日期",
                        style: { width: "48%" }
                      }, null, 8, ["modelValue"]),
                      B_,
                      oe(ee(Ln), {
                        modelValue: o.form.endDate,
                        "onUpdate:modelValue": p[3] || (p[3] = (_) => o.form.endDate = _),
                        type: "date",
                        placeholder: "结束日期",
                        style: { width: "48%" }
                      }, null, 8, ["modelValue"])
                    ])) : Pe("", !0),
                    o.timeType == "week" ? (ne(), me("div", P_, [
                      oe(ee(Ln), {
                        modelValue: o.form.startDate,
                        "onUpdate:modelValue": p[4] || (p[4] = (_) => o.form.startDate = _),
                        type: "datetime",
                        placeholder: "开始日期",
                        style: { width: "48%" },
                        format: "YYYY-MM-DD HH:mm"
                      }, null, 8, ["modelValue"]),
                      L_,
                      oe(ee(Ln), {
                        modelValue: o.form.endDate,
                        "onUpdate:modelValue": p[5] || (p[5] = (_) => o.form.endDate = _),
                        type: "datetime",
                        placeholder: "结束日期",
                        style: { width: "48%" },
                        format: "YYYY-MM-DD HH:mm"
                      }, null, 8, ["modelValue"])
                    ])) : Pe("", !0),
                    o.timeType == "day" ? (ne(), me("div", H_, [
                      oe(ee(Ln), {
                        modelValue: o.form.startDate,
                        "onUpdate:modelValue": p[6] || (p[6] = (_) => o.form.startDate = _),
                        type: "date",
                        placeholder: "开始日期",
                        style: Hn({ width: o.allDay ? "45%" : "90%" })
                      }, null, 8, ["modelValue", "style"]),
                      o.allDay ? (ne(), me("div", U_, [
                        W_,
                        oe(ee(Ln), {
                          modelValue: o.form.endDate,
                          "onUpdate:modelValue": p[9] || (p[9] = (_) => o.form.endDate = _),
                          type: "date",
                          placeholder: "结束日期",
                          style: { width: "90%" }
                        }, null, 8, ["modelValue"])
                      ])) : (ne(), me("div", z_, [
                        oe(ee(Ea), {
                          modelValue: o.form.startTime,
                          "onUpdate:modelValue": p[7] || (p[7] = (_) => o.form.startTime = _),
                          type: "datetime",
                          placeholder: "开始日期",
                          style: { width: "45%" },
                          format: "HH:mm"
                        }, null, 8, ["modelValue"]),
                        F_,
                        oe(ee(Ea), {
                          modelValue: o.form.endTime,
                          "onUpdate:modelValue": p[8] || (p[8] = (_) => o.form.endTime = _),
                          type: "datetime",
                          placeholder: "结束日期",
                          style: { width: "45%" },
                          format: "HH:mm"
                        }, null, 8, ["modelValue"])
                      ])),
                      oe(v, {
                        modelValue: o.allDay,
                        "onUpdate:modelValue": p[10] || (p[10] = (_) => o.allDay = _),
                        label: "全天",
                        style: { "margin-left": "2%" }
                      }, null, 8, ["modelValue"])
                    ])) : Pe("", !0)
                  ]),
                  _: 1
                }),
                oe(ee(Pr), null, {
                  default: ue(() => [
                    oe(ee(Pn), { class: "icon" }, {
                      default: ue(() => [
                        oe(ee(Wd))
                      ]),
                      _: 1
                    }),
                    ve("div", {
                      class: "personBlock",
                      onClick: vt(d, ["stop"])
                    }, [
                      o.form.personList.length ? (ne(!0), me(dt, { key: 1 }, kt(o.form.personList, (_, y) => (ne(), me("div", {
                        key: y,
                        class: "nameBlock"
                      }, [
                        ve("div", $_, [
                          q_,
                          ve("div", null, nt(_.elementName), 1)
                        ]),
                        oe(ee(Pn), {
                          class: "close",
                          onClick: vt((m) => h(y), ["stop"])
                        }, {
                          default: ue(() => [
                            oe(ee(Vd))
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]))), 128)) : (ne(), me("span", j_, "添加参与人"))
                    ], 8, V_)
                  ]),
                  _: 1
                }),
                oe(ee(Pr), null, {
                  default: ue(() => [
                    oe(ee(Pn), { class: "icon" }, {
                      default: ue(() => [
                        oe(ee(jd))
                      ]),
                      _: 1
                    }),
                    oe(ee(Js), {
                      modelValue: o.form.location,
                      "onUpdate:modelValue": p[11] || (p[11] = (_) => o.form.location = _),
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
        oe(ee(A_), {
          modelValue: o.handList,
          "onUpdate:modelValue": p[13] || (p[13] = (_) => o.handList = _),
          show: o.isShow,
          "onUpdate:show": p[14] || (p[14] = (_) => o.isShow = _),
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
          onHandChild: f
        }, null, 8, ["modelValue", "show", "dep-list", "user-list"])
      ]);
    };
  }
});
const Z_ = /* @__PURE__ */ Nt(Q_, [["__scopeId", "data-v-5b784b52"]]), iE = Tc(Z_);
export {
  iE as IKCalendar,
  iE as default
};
