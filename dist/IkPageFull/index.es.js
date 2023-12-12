var Gs = Object.defineProperty;
var Zs = (e, r, t) => r in e ? Gs(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var ni = (e, r, t) => (Zs(e, typeof r != "symbol" ? r + "" : r, t), t);
import { defineComponent as bt, h as Xi, computed as ke, resolveComponent as it, openBlock as V, createBlock as ce, withCtx as ae, mergeProps as De, createElementBlock as ue, normalizeStyle as Pe, normalizeClass as gt, unref as ne, createElementVNode as he, createTextVNode as Re, toDisplayString as Ne, createVNode as oe, createCommentVNode as Be, Fragment as Me, ref as xe, renderList as pt, useCssVars as So, watch as ht, toRef as Xs, reactive as Qi, nextTick as Ji, watchEffect as e0, withModifiers as Rt, withDirectives as Dt, vShow as t0, Transition as Li, mergeModels as mr, useModel as Ni, resolveDirective as Di, createSlots as Qs, pushScopeId as Js, popScopeId as ea, renderSlot as kt, isVNode as ta, getCurrentInstance as ra } from "vue";
import { ElCheckbox as $t, ElCheckboxGroup as Nn, ElRadioGroup as _r, ElRadio as Dn, ElDialog as na, ElButton as Wt, ElInput as zr, ElRadioButton as Co, ElBreadcrumb as ia, ElBreadcrumbItem as oa, ElAvatar as Lr, vLoading as ii, ElCol as sa, ElFormItem as r0, ElCard as aa, ElForm as ca, ElRow as la, ElInputNumber as ua, ElSelect as n0, ElOption as i0, ElDatePicker as o0, ElTreeSelect as fa } from "element-plus";
import * as da from "lodash-es";
import Eo from "vuedraggable";
import { DCaret as ha } from "@element-plus/icons-vue";
const Cr = (e, r) => {
  if (e.install = (t) => {
    for (const n of [e, ...Object.values(r ?? {})])
      t.component(n.name, n);
  }, r)
    for (const [t, n] of Object.entries(r))
      e[t] = n;
  return e;
}, rt = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, i] of r)
    t[n] = i;
  return t;
};
var me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pa(e) {
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
var s0 = {}, va = {
  get exports() {
    return s0;
  },
  set exports(e) {
    s0 = e;
  }
};
function vr(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Yr = {}, ga = {
  get exports() {
    return Yr;
  },
  set exports(e) {
    Yr = e;
  }
};
const ba = {}, xa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ba
}, Symbol.toStringTag, { value: "Module" })), ya = /* @__PURE__ */ pa(xa);
var a0;
function Ce() {
  return a0 || (a0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n();
    })(me, function() {
      var t = t || function(n, i) {
        var o;
        if (typeof window < "u" && window.crypto && (o = window.crypto), typeof self < "u" && self.crypto && (o = self.crypto), typeof globalThis < "u" && globalThis.crypto && (o = globalThis.crypto), !o && typeof window < "u" && window.msCrypto && (o = window.msCrypto), !o && typeof me < "u" && me.crypto && (o = me.crypto), !o && typeof vr == "function")
          try {
            o = ya;
          } catch {
          }
        var a = function() {
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
        }, s = Object.create || function() {
          function k() {
          }
          return function(v) {
            var b;
            return k.prototype = v, b = new k(), k.prototype = null, b;
          };
        }(), u = {}, c = u.lib = {}, f = c.Base = function() {
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
            extend: function(k) {
              var v = s(this);
              return k && v.mixIn(k), (!v.hasOwnProperty("init") || this.init === v.init) && (v.init = function() {
                v.$super.init.apply(this, arguments);
              }), v.init.prototype = v, v.$super = this, v;
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
              var k = this.extend();
              return k.init.apply(k, arguments), k;
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
            mixIn: function(k) {
              for (var v in k)
                k.hasOwnProperty(v) && (this[v] = k[v]);
              k.hasOwnProperty("toString") && (this.toString = k.toString);
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
        }(), d = c.WordArray = f.extend({
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
          init: function(k, v) {
            k = this.words = k || [], v != i ? this.sigBytes = v : this.sigBytes = k.length * 4;
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
          toString: function(k) {
            return (k || h).stringify(this);
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
          concat: function(k) {
            var v = this.words, b = k.words, x = this.sigBytes, w = k.sigBytes;
            if (this.clamp(), x % 4)
              for (var _ = 0; _ < w; _++) {
                var B = b[_ >>> 2] >>> 24 - _ % 4 * 8 & 255;
                v[x + _ >>> 2] |= B << 24 - (x + _) % 4 * 8;
              }
            else
              for (var T = 0; T < w; T += 4)
                v[x + T >>> 2] = b[T >>> 2];
            return this.sigBytes += w, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var k = this.words, v = this.sigBytes;
            k[v >>> 2] &= 4294967295 << 32 - v % 4 * 8, k.length = n.ceil(v / 4);
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
            var k = f.clone.call(this);
            return k.words = this.words.slice(0), k;
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
          random: function(k) {
            for (var v = [], b = 0; b < k; b += 4)
              v.push(a());
            return new d.init(v, k);
          }
        }), l = u.enc = {}, h = l.Hex = {
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
          stringify: function(k) {
            for (var v = k.words, b = k.sigBytes, x = [], w = 0; w < b; w++) {
              var _ = v[w >>> 2] >>> 24 - w % 4 * 8 & 255;
              x.push((_ >>> 4).toString(16)), x.push((_ & 15).toString(16));
            }
            return x.join("");
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
          parse: function(k) {
            for (var v = k.length, b = [], x = 0; x < v; x += 2)
              b[x >>> 3] |= parseInt(k.substr(x, 2), 16) << 24 - x % 8 * 4;
            return new d.init(b, v / 2);
          }
        }, g = l.Latin1 = {
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
          stringify: function(k) {
            for (var v = k.words, b = k.sigBytes, x = [], w = 0; w < b; w++) {
              var _ = v[w >>> 2] >>> 24 - w % 4 * 8 & 255;
              x.push(String.fromCharCode(_));
            }
            return x.join("");
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
          parse: function(k) {
            for (var v = k.length, b = [], x = 0; x < v; x++)
              b[x >>> 2] |= (k.charCodeAt(x) & 255) << 24 - x % 4 * 8;
            return new d.init(b, v);
          }
        }, p = l.Utf8 = {
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
          stringify: function(k) {
            try {
              return decodeURIComponent(escape(g.stringify(k)));
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
          parse: function(k) {
            return g.parse(unescape(encodeURIComponent(k)));
          }
        }, m = c.BufferedBlockAlgorithm = f.extend({
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
          _append: function(k) {
            typeof k == "string" && (k = p.parse(k)), this._data.concat(k), this._nDataBytes += k.sigBytes;
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
          _process: function(k) {
            var v, b = this._data, x = b.words, w = b.sigBytes, _ = this.blockSize, B = _ * 4, T = w / B;
            k ? T = n.ceil(T) : T = n.max((T | 0) - this._minBufferSize, 0);
            var C = T * _, E = n.min(C * 4, w);
            if (C) {
              for (var D = 0; D < C; D += _)
                this._doProcessBlock(x, D);
              v = x.splice(0, C), b.sigBytes -= E;
            }
            return new d.init(v, E);
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
            var k = f.clone.call(this);
            return k._data = this._data.clone(), k;
          },
          _minBufferSize: 0
        });
        c.Hasher = m.extend({
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
          init: function(k) {
            this.cfg = this.cfg.extend(k), this.reset();
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
          update: function(k) {
            return this._append(k), this._process(), this;
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
          finalize: function(k) {
            k && this._append(k);
            var v = this._doFinalize();
            return v;
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
          _createHelper: function(k) {
            return function(v, b) {
              return new k.init(b).finalize(v);
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
          _createHmacHelper: function(k) {
            return function(v, b) {
              return new O.HMAC.init(k, b).finalize(v);
            };
          }
        });
        var O = u.algo = {};
        return u;
      }(Math);
      return t;
    });
  }(ga)), Yr;
}
var Kr = {}, ma = {
  get exports() {
    return Kr;
  },
  set exports(e) {
    Kr = e;
  }
}, c0;
function $n() {
  return c0 || (c0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(Ce());
    })(me, function(t) {
      return function(n) {
        var i = t, o = i.lib, a = o.Base, s = o.WordArray, u = i.x64 = {};
        u.Word = a.extend({
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
          init: function(c, f) {
            this.high = c, this.low = f;
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
        }), u.WordArray = a.extend({
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
          init: function(c, f) {
            c = this.words = c || [], f != n ? this.sigBytes = f : this.sigBytes = c.length * 8;
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
            for (var c = this.words, f = c.length, d = [], l = 0; l < f; l++) {
              var h = c[l];
              d.push(h.high), d.push(h.low);
            }
            return s.create(d, this.sigBytes);
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
            for (var c = a.clone.call(this), f = c.words = this.words.slice(0), d = f.length, l = 0; l < d; l++)
              f[l] = f[l].clone();
            return c;
          }
        });
      }(), t;
    });
  }(ma)), Kr;
}
var Gr = {}, _a = {
  get exports() {
    return Gr;
  },
  set exports(e) {
    Gr = e;
  }
}, l0;
function wa() {
  return l0 || (l0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(Ce());
    })(me, function(t) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var n = t, i = n.lib, o = i.WordArray, a = o.init, s = o.init = function(u) {
            if (u instanceof ArrayBuffer && (u = new Uint8Array(u)), (u instanceof Int8Array || typeof Uint8ClampedArray < "u" && u instanceof Uint8ClampedArray || u instanceof Int16Array || u instanceof Uint16Array || u instanceof Int32Array || u instanceof Uint32Array || u instanceof Float32Array || u instanceof Float64Array) && (u = new Uint8Array(u.buffer, u.byteOffset, u.byteLength)), u instanceof Uint8Array) {
              for (var c = u.byteLength, f = [], d = 0; d < c; d++)
                f[d >>> 2] |= u[d] << 24 - d % 4 * 8;
              a.call(this, f, c);
            } else
              a.apply(this, arguments);
          };
          s.prototype = o;
        }
      }(), t.lib.WordArray;
    });
  }(_a)), Gr;
}
var Zr = {}, ka = {
  get exports() {
    return Zr;
  },
  set exports(e) {
    Zr = e;
  }
}, u0;
function Sa() {
  return u0 || (u0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(Ce());
    })(me, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.WordArray, a = n.enc;
        a.Utf16 = a.Utf16BE = {
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
          stringify: function(u) {
            for (var c = u.words, f = u.sigBytes, d = [], l = 0; l < f; l += 2) {
              var h = c[l >>> 2] >>> 16 - l % 4 * 8 & 65535;
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
          parse: function(u) {
            for (var c = u.length, f = [], d = 0; d < c; d++)
              f[d >>> 1] |= u.charCodeAt(d) << 16 - d % 2 * 16;
            return o.create(f, c * 2);
          }
        }, a.Utf16LE = {
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
          stringify: function(u) {
            for (var c = u.words, f = u.sigBytes, d = [], l = 0; l < f; l += 2) {
              var h = s(c[l >>> 2] >>> 16 - l % 4 * 8 & 65535);
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
          parse: function(u) {
            for (var c = u.length, f = [], d = 0; d < c; d++)
              f[d >>> 1] |= s(u.charCodeAt(d) << 16 - d % 2 * 16);
            return o.create(f, c * 2);
          }
        };
        function s(u) {
          return u << 8 & 4278255360 | u >>> 8 & 16711935;
        }
      }(), t.enc.Utf16;
    });
  }(ka)), Zr;
}
var Xr = {}, Ca = {
  get exports() {
    return Xr;
  },
  set exports(e) {
    Xr = e;
  }
}, f0;
function Gt() {
  return f0 || (f0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(Ce());
    })(me, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.WordArray, a = n.enc;
        a.Base64 = {
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
          stringify: function(u) {
            var c = u.words, f = u.sigBytes, d = this._map;
            u.clamp();
            for (var l = [], h = 0; h < f; h += 3)
              for (var g = c[h >>> 2] >>> 24 - h % 4 * 8 & 255, p = c[h + 1 >>> 2] >>> 24 - (h + 1) % 4 * 8 & 255, m = c[h + 2 >>> 2] >>> 24 - (h + 2) % 4 * 8 & 255, O = g << 16 | p << 8 | m, k = 0; k < 4 && h + k * 0.75 < f; k++)
                l.push(d.charAt(O >>> 6 * (3 - k) & 63));
            var v = d.charAt(64);
            if (v)
              for (; l.length % 4; )
                l.push(v);
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
          parse: function(u) {
            var c = u.length, f = this._map, d = this._reverseMap;
            if (!d) {
              d = this._reverseMap = [];
              for (var l = 0; l < f.length; l++)
                d[f.charCodeAt(l)] = l;
            }
            var h = f.charAt(64);
            if (h) {
              var g = u.indexOf(h);
              g !== -1 && (c = g);
            }
            return s(u, c, d);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function s(u, c, f) {
          for (var d = [], l = 0, h = 0; h < c; h++)
            if (h % 4) {
              var g = f[u.charCodeAt(h - 1)] << h % 4 * 2, p = f[u.charCodeAt(h)] >>> 6 - h % 4 * 2, m = g | p;
              d[l >>> 2] |= m << 24 - l % 4 * 8, l++;
            }
          return o.create(d, l);
        }
      }(), t.enc.Base64;
    });
  }(Ca)), Xr;
}
var Qr = {}, Ea = {
  get exports() {
    return Qr;
  },
  set exports(e) {
    Qr = e;
  }
}, d0;
function Ba() {
  return d0 || (d0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(Ce());
    })(me, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.WordArray, a = n.enc;
        a.Base64url = {
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
          stringify: function(u, c = !0) {
            var f = u.words, d = u.sigBytes, l = c ? this._safe_map : this._map;
            u.clamp();
            for (var h = [], g = 0; g < d; g += 3)
              for (var p = f[g >>> 2] >>> 24 - g % 4 * 8 & 255, m = f[g + 1 >>> 2] >>> 24 - (g + 1) % 4 * 8 & 255, O = f[g + 2 >>> 2] >>> 24 - (g + 2) % 4 * 8 & 255, k = p << 16 | m << 8 | O, v = 0; v < 4 && g + v * 0.75 < d; v++)
                h.push(l.charAt(k >>> 6 * (3 - v) & 63));
            var b = l.charAt(64);
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
          parse: function(u, c = !0) {
            var f = u.length, d = c ? this._safe_map : this._map, l = this._reverseMap;
            if (!l) {
              l = this._reverseMap = [];
              for (var h = 0; h < d.length; h++)
                l[d.charCodeAt(h)] = h;
            }
            var g = d.charAt(64);
            if (g) {
              var p = u.indexOf(g);
              p !== -1 && (f = p);
            }
            return s(u, f, l);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function s(u, c, f) {
          for (var d = [], l = 0, h = 0; h < c; h++)
            if (h % 4) {
              var g = f[u.charCodeAt(h - 1)] << h % 4 * 2, p = f[u.charCodeAt(h)] >>> 6 - h % 4 * 2, m = g | p;
              d[l >>> 2] |= m << 24 - l % 4 * 8, l++;
            }
          return o.create(d, l);
        }
      }(), t.enc.Base64url;
    });
  }(Ea)), Qr;
}
var Jr = {}, Aa = {
  get exports() {
    return Jr;
  },
  set exports(e) {
    Jr = e;
  }
}, h0;
function Zt() {
  return h0 || (h0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(Ce());
    })(me, function(t) {
      return function(n) {
        var i = t, o = i.lib, a = o.WordArray, s = o.Hasher, u = i.algo, c = [];
        (function() {
          for (var p = 0; p < 64; p++)
            c[p] = n.abs(n.sin(p + 1)) * 4294967296 | 0;
        })();
        var f = u.MD5 = s.extend({
          _doReset: function() {
            this._hash = new a.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(p, m) {
            for (var O = 0; O < 16; O++) {
              var k = m + O, v = p[k];
              p[k] = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360;
            }
            var b = this._hash.words, x = p[m + 0], w = p[m + 1], _ = p[m + 2], B = p[m + 3], T = p[m + 4], C = p[m + 5], E = p[m + 6], D = p[m + 7], L = p[m + 8], F = p[m + 9], H = p[m + 10], j = p[m + 11], K = p[m + 12], re = p[m + 13], J = p[m + 14], le = p[m + 15], U = b[0], A = b[1], M = b[2], z = b[3];
            U = d(U, A, M, z, x, 7, c[0]), z = d(z, U, A, M, w, 12, c[1]), M = d(M, z, U, A, _, 17, c[2]), A = d(A, M, z, U, B, 22, c[3]), U = d(U, A, M, z, T, 7, c[4]), z = d(z, U, A, M, C, 12, c[5]), M = d(M, z, U, A, E, 17, c[6]), A = d(A, M, z, U, D, 22, c[7]), U = d(U, A, M, z, L, 7, c[8]), z = d(z, U, A, M, F, 12, c[9]), M = d(M, z, U, A, H, 17, c[10]), A = d(A, M, z, U, j, 22, c[11]), U = d(U, A, M, z, K, 7, c[12]), z = d(z, U, A, M, re, 12, c[13]), M = d(M, z, U, A, J, 17, c[14]), A = d(A, M, z, U, le, 22, c[15]), U = l(U, A, M, z, w, 5, c[16]), z = l(z, U, A, M, E, 9, c[17]), M = l(M, z, U, A, j, 14, c[18]), A = l(A, M, z, U, x, 20, c[19]), U = l(U, A, M, z, C, 5, c[20]), z = l(z, U, A, M, H, 9, c[21]), M = l(M, z, U, A, le, 14, c[22]), A = l(A, M, z, U, T, 20, c[23]), U = l(U, A, M, z, F, 5, c[24]), z = l(z, U, A, M, J, 9, c[25]), M = l(M, z, U, A, B, 14, c[26]), A = l(A, M, z, U, L, 20, c[27]), U = l(U, A, M, z, re, 5, c[28]), z = l(z, U, A, M, _, 9, c[29]), M = l(M, z, U, A, D, 14, c[30]), A = l(A, M, z, U, K, 20, c[31]), U = h(U, A, M, z, C, 4, c[32]), z = h(z, U, A, M, L, 11, c[33]), M = h(M, z, U, A, j, 16, c[34]), A = h(A, M, z, U, J, 23, c[35]), U = h(U, A, M, z, w, 4, c[36]), z = h(z, U, A, M, T, 11, c[37]), M = h(M, z, U, A, D, 16, c[38]), A = h(A, M, z, U, H, 23, c[39]), U = h(U, A, M, z, re, 4, c[40]), z = h(z, U, A, M, x, 11, c[41]), M = h(M, z, U, A, B, 16, c[42]), A = h(A, M, z, U, E, 23, c[43]), U = h(U, A, M, z, F, 4, c[44]), z = h(z, U, A, M, K, 11, c[45]), M = h(M, z, U, A, le, 16, c[46]), A = h(A, M, z, U, _, 23, c[47]), U = g(U, A, M, z, x, 6, c[48]), z = g(z, U, A, M, D, 10, c[49]), M = g(M, z, U, A, J, 15, c[50]), A = g(A, M, z, U, C, 21, c[51]), U = g(U, A, M, z, K, 6, c[52]), z = g(z, U, A, M, B, 10, c[53]), M = g(M, z, U, A, H, 15, c[54]), A = g(A, M, z, U, w, 21, c[55]), U = g(U, A, M, z, L, 6, c[56]), z = g(z, U, A, M, le, 10, c[57]), M = g(M, z, U, A, E, 15, c[58]), A = g(A, M, z, U, re, 21, c[59]), U = g(U, A, M, z, T, 6, c[60]), z = g(z, U, A, M, j, 10, c[61]), M = g(M, z, U, A, _, 15, c[62]), A = g(A, M, z, U, F, 21, c[63]), b[0] = b[0] + U | 0, b[1] = b[1] + A | 0, b[2] = b[2] + M | 0, b[3] = b[3] + z | 0;
          },
          _doFinalize: function() {
            var p = this._data, m = p.words, O = this._nDataBytes * 8, k = p.sigBytes * 8;
            m[k >>> 5] |= 128 << 24 - k % 32;
            var v = n.floor(O / 4294967296), b = O;
            m[(k + 64 >>> 9 << 4) + 15] = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360, m[(k + 64 >>> 9 << 4) + 14] = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360, p.sigBytes = (m.length + 1) * 4, this._process();
            for (var x = this._hash, w = x.words, _ = 0; _ < 4; _++) {
              var B = w[_];
              w[_] = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360;
            }
            return x;
          },
          clone: function() {
            var p = s.clone.call(this);
            return p._hash = this._hash.clone(), p;
          }
        });
        function d(p, m, O, k, v, b, x) {
          var w = p + (m & O | ~m & k) + v + x;
          return (w << b | w >>> 32 - b) + m;
        }
        function l(p, m, O, k, v, b, x) {
          var w = p + (m & k | O & ~k) + v + x;
          return (w << b | w >>> 32 - b) + m;
        }
        function h(p, m, O, k, v, b, x) {
          var w = p + (m ^ O ^ k) + v + x;
          return (w << b | w >>> 32 - b) + m;
        }
        function g(p, m, O, k, v, b, x) {
          var w = p + (O ^ (m | ~k)) + v + x;
          return (w << b | w >>> 32 - b) + m;
        }
        i.MD5 = s._createHelper(f), i.HmacMD5 = s._createHmacHelper(f);
      }(Math), t.MD5;
    });
  }(Aa)), Jr;
}
var en = {}, Ia = {
  get exports() {
    return en;
  },
  set exports(e) {
    en = e;
  }
}, p0;
function $i() {
  return p0 || (p0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(Ce());
    })(me, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.WordArray, a = i.Hasher, s = n.algo, u = [], c = s.SHA1 = a.extend({
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
            for (var l = this._hash.words, h = l[0], g = l[1], p = l[2], m = l[3], O = l[4], k = 0; k < 80; k++) {
              if (k < 16)
                u[k] = f[d + k] | 0;
              else {
                var v = u[k - 3] ^ u[k - 8] ^ u[k - 14] ^ u[k - 16];
                u[k] = v << 1 | v >>> 31;
              }
              var b = (h << 5 | h >>> 27) + O + u[k];
              k < 20 ? b += (g & p | ~g & m) + 1518500249 : k < 40 ? b += (g ^ p ^ m) + 1859775393 : k < 60 ? b += (g & p | g & m | p & m) - 1894007588 : b += (g ^ p ^ m) - 899497514, O = m, m = p, p = g << 30 | g >>> 2, g = h, h = b;
            }
            l[0] = l[0] + h | 0, l[1] = l[1] + g | 0, l[2] = l[2] + p | 0, l[3] = l[3] + m | 0, l[4] = l[4] + O | 0;
          },
          _doFinalize: function() {
            var f = this._data, d = f.words, l = this._nDataBytes * 8, h = f.sigBytes * 8;
            return d[h >>> 5] |= 128 << 24 - h % 32, d[(h + 64 >>> 9 << 4) + 14] = Math.floor(l / 4294967296), d[(h + 64 >>> 9 << 4) + 15] = l, f.sigBytes = d.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var f = a.clone.call(this);
            return f._hash = this._hash.clone(), f;
          }
        });
        n.SHA1 = a._createHelper(c), n.HmacSHA1 = a._createHmacHelper(c);
      }(), t.SHA1;
    });
  }(Ia)), en;
}
var tn = {}, Oa = {
  get exports() {
    return tn;
  },
  set exports(e) {
    tn = e;
  }
}, v0;
function Bo() {
  return v0 || (v0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(Ce());
    })(me, function(t) {
      return function(n) {
        var i = t, o = i.lib, a = o.WordArray, s = o.Hasher, u = i.algo, c = [], f = [];
        (function() {
          function h(O) {
            for (var k = n.sqrt(O), v = 2; v <= k; v++)
              if (!(O % v))
                return !1;
            return !0;
          }
          function g(O) {
            return (O - (O | 0)) * 4294967296 | 0;
          }
          for (var p = 2, m = 0; m < 64; )
            h(p) && (m < 8 && (c[m] = g(n.pow(p, 1 / 2))), f[m] = g(n.pow(p, 1 / 3)), m++), p++;
        })();
        var d = [], l = u.SHA256 = s.extend({
          _doReset: function() {
            this._hash = new a.init(c.slice(0));
          },
          _doProcessBlock: function(h, g) {
            for (var p = this._hash.words, m = p[0], O = p[1], k = p[2], v = p[3], b = p[4], x = p[5], w = p[6], _ = p[7], B = 0; B < 64; B++) {
              if (B < 16)
                d[B] = h[g + B] | 0;
              else {
                var T = d[B - 15], C = (T << 25 | T >>> 7) ^ (T << 14 | T >>> 18) ^ T >>> 3, E = d[B - 2], D = (E << 15 | E >>> 17) ^ (E << 13 | E >>> 19) ^ E >>> 10;
                d[B] = C + d[B - 7] + D + d[B - 16];
              }
              var L = b & x ^ ~b & w, F = m & O ^ m & k ^ O & k, H = (m << 30 | m >>> 2) ^ (m << 19 | m >>> 13) ^ (m << 10 | m >>> 22), j = (b << 26 | b >>> 6) ^ (b << 21 | b >>> 11) ^ (b << 7 | b >>> 25), K = _ + j + L + f[B] + d[B], re = H + F;
              _ = w, w = x, x = b, b = v + K | 0, v = k, k = O, O = m, m = K + re | 0;
            }
            p[0] = p[0] + m | 0, p[1] = p[1] + O | 0, p[2] = p[2] + k | 0, p[3] = p[3] + v | 0, p[4] = p[4] + b | 0, p[5] = p[5] + x | 0, p[6] = p[6] + w | 0, p[7] = p[7] + _ | 0;
          },
          _doFinalize: function() {
            var h = this._data, g = h.words, p = this._nDataBytes * 8, m = h.sigBytes * 8;
            return g[m >>> 5] |= 128 << 24 - m % 32, g[(m + 64 >>> 9 << 4) + 14] = n.floor(p / 4294967296), g[(m + 64 >>> 9 << 4) + 15] = p, h.sigBytes = g.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var h = s.clone.call(this);
            return h._hash = this._hash.clone(), h;
          }
        });
        i.SHA256 = s._createHelper(l), i.HmacSHA256 = s._createHmacHelper(l);
      }(Math), t.SHA256;
    });
  }(Oa)), tn;
}
var rn = {}, Ta = {
  get exports() {
    return rn;
  },
  set exports(e) {
    rn = e;
  }
}, g0;
function Ra() {
  return g0 || (g0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), Bo());
    })(me, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.WordArray, a = n.algo, s = a.SHA256, u = a.SHA224 = s.extend({
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
            var c = s._doFinalize.call(this);
            return c.sigBytes -= 4, c;
          }
        });
        n.SHA224 = s._createHelper(u), n.HmacSHA224 = s._createHmacHelper(u);
      }(), t.SHA224;
    });
  }(Ta)), rn;
}
var nn = {}, La = {
  get exports() {
    return nn;
  },
  set exports(e) {
    nn = e;
  }
}, b0;
function Ao() {
  return b0 || (b0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), $n());
    })(me, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.Hasher, a = n.x64, s = a.Word, u = a.WordArray, c = n.algo;
        function f() {
          return s.create.apply(s, arguments);
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
        ], l = [];
        (function() {
          for (var g = 0; g < 80; g++)
            l[g] = f();
        })();
        var h = c.SHA512 = o.extend({
          _doReset: function() {
            this._hash = new u.init([
              new s.init(1779033703, 4089235720),
              new s.init(3144134277, 2227873595),
              new s.init(1013904242, 4271175723),
              new s.init(2773480762, 1595750129),
              new s.init(1359893119, 2917565137),
              new s.init(2600822924, 725511199),
              new s.init(528734635, 4215389547),
              new s.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(g, p) {
            for (var m = this._hash.words, O = m[0], k = m[1], v = m[2], b = m[3], x = m[4], w = m[5], _ = m[6], B = m[7], T = O.high, C = O.low, E = k.high, D = k.low, L = v.high, F = v.low, H = b.high, j = b.low, K = x.high, re = x.low, J = w.high, le = w.low, U = _.high, A = _.low, M = B.high, z = B.low, ee = T, se = C, be = E, ie = D, ve = L, ye = F, Ge = H, Ze = j, ze = K, Te = re, $e = J, nt = le, Fe = U, We = A, xt = M, ct = z, je = 0; je < 80; je++) {
              var Xe, st, Ot = l[je];
              if (je < 16)
                st = Ot.high = g[p + je * 2] | 0, Xe = Ot.low = g[p + je * 2 + 1] | 0;
              else {
                var Tt = l[je - 15], yt = Tt.high, q = Tt.low, X = (yt >>> 1 | q << 31) ^ (yt >>> 8 | q << 24) ^ yt >>> 7, P = (q >>> 1 | yt << 31) ^ (q >>> 8 | yt << 24) ^ (q >>> 7 | yt << 25), de = l[je - 2], Ae = de.high, Qe = de.low, mt = (Ae >>> 19 | Qe << 13) ^ (Ae << 3 | Qe >>> 29) ^ Ae >>> 6, ft = (Qe >>> 19 | Ae << 13) ^ (Qe << 3 | Ae >>> 29) ^ (Qe >>> 6 | Ae << 26), Vt = l[je - 7], qe = Vt.high, et = Vt.low, ar = l[je - 16], Wn = ar.high, _t = ar.low;
                Xe = P + et, st = X + qe + (Xe >>> 0 < P >>> 0 ? 1 : 0), Xe = Xe + ft, st = st + mt + (Xe >>> 0 < ft >>> 0 ? 1 : 0), Xe = Xe + _t, st = st + Wn + (Xe >>> 0 < _t >>> 0 ? 1 : 0), Ot.high = st, Ot.low = Xe;
              }
              var jn = ze & $e ^ ~ze & Fe, Br = Te & nt ^ ~Te & We, Ar = ee & be ^ ee & ve ^ be & ve, Yn = se & ie ^ se & ye ^ ie & ye, Kn = (ee >>> 28 | se << 4) ^ (ee << 30 | se >>> 2) ^ (ee << 25 | se >>> 7), Ir = (se >>> 28 | ee << 4) ^ (se << 30 | ee >>> 2) ^ (se << 25 | ee >>> 7), Gn = (ze >>> 14 | Te << 18) ^ (ze >>> 18 | Te << 14) ^ (ze << 23 | Te >>> 9), Zn = (Te >>> 14 | ze << 18) ^ (Te >>> 18 | ze << 14) ^ (Te << 23 | ze >>> 9), Or = d[je], Xn = Or.high, Tr = Or.low, at = ct + Zn, Et = xt + Gn + (at >>> 0 < ct >>> 0 ? 1 : 0), at = at + Br, Et = Et + jn + (at >>> 0 < Br >>> 0 ? 1 : 0), at = at + Tr, Et = Et + Xn + (at >>> 0 < Tr >>> 0 ? 1 : 0), at = at + Xe, Et = Et + st + (at >>> 0 < Xe >>> 0 ? 1 : 0), cr = Ir + Yn, Qn = Kn + Ar + (cr >>> 0 < Ir >>> 0 ? 1 : 0);
              xt = Fe, ct = We, Fe = $e, We = nt, $e = ze, nt = Te, Te = Ze + at | 0, ze = Ge + Et + (Te >>> 0 < Ze >>> 0 ? 1 : 0) | 0, Ge = ve, Ze = ye, ve = be, ye = ie, be = ee, ie = se, se = at + cr | 0, ee = Et + Qn + (se >>> 0 < at >>> 0 ? 1 : 0) | 0;
            }
            C = O.low = C + se, O.high = T + ee + (C >>> 0 < se >>> 0 ? 1 : 0), D = k.low = D + ie, k.high = E + be + (D >>> 0 < ie >>> 0 ? 1 : 0), F = v.low = F + ye, v.high = L + ve + (F >>> 0 < ye >>> 0 ? 1 : 0), j = b.low = j + Ze, b.high = H + Ge + (j >>> 0 < Ze >>> 0 ? 1 : 0), re = x.low = re + Te, x.high = K + ze + (re >>> 0 < Te >>> 0 ? 1 : 0), le = w.low = le + nt, w.high = J + $e + (le >>> 0 < nt >>> 0 ? 1 : 0), A = _.low = A + We, _.high = U + Fe + (A >>> 0 < We >>> 0 ? 1 : 0), z = B.low = z + ct, B.high = M + xt + (z >>> 0 < ct >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var g = this._data, p = g.words, m = this._nDataBytes * 8, O = g.sigBytes * 8;
            p[O >>> 5] |= 128 << 24 - O % 32, p[(O + 128 >>> 10 << 5) + 30] = Math.floor(m / 4294967296), p[(O + 128 >>> 10 << 5) + 31] = m, g.sigBytes = p.length * 4, this._process();
            var k = this._hash.toX32();
            return k;
          },
          clone: function() {
            var g = o.clone.call(this);
            return g._hash = this._hash.clone(), g;
          },
          blockSize: 1024 / 32
        });
        n.SHA512 = o._createHelper(h), n.HmacSHA512 = o._createHmacHelper(h);
      }(), t.SHA512;
    });
  }(La)), nn;
}
var on = {}, Na = {
  get exports() {
    return on;
  },
  set exports(e) {
    on = e;
  }
}, x0;
function Da() {
  return x0 || (x0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), $n(), Ao());
    })(me, function(t) {
      return function() {
        var n = t, i = n.x64, o = i.Word, a = i.WordArray, s = n.algo, u = s.SHA512, c = s.SHA384 = u.extend({
          _doReset: function() {
            this._hash = new a.init([
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
            var f = u._doFinalize.call(this);
            return f.sigBytes -= 16, f;
          }
        });
        n.SHA384 = u._createHelper(c), n.HmacSHA384 = u._createHmacHelper(c);
      }(), t.SHA384;
    });
  }(Na)), on;
}
var sn = {}, $a = {
  get exports() {
    return sn;
  },
  set exports(e) {
    sn = e;
  }
}, y0;
function Pa() {
  return y0 || (y0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), $n());
    })(me, function(t) {
      return function(n) {
        var i = t, o = i.lib, a = o.WordArray, s = o.Hasher, u = i.x64, c = u.Word, f = i.algo, d = [], l = [], h = [];
        (function() {
          for (var m = 1, O = 0, k = 0; k < 24; k++) {
            d[m + 5 * O] = (k + 1) * (k + 2) / 2 % 64;
            var v = O % 5, b = (2 * m + 3 * O) % 5;
            m = v, O = b;
          }
          for (var m = 0; m < 5; m++)
            for (var O = 0; O < 5; O++)
              l[m + 5 * O] = O + (2 * m + 3 * O) % 5 * 5;
          for (var x = 1, w = 0; w < 24; w++) {
            for (var _ = 0, B = 0, T = 0; T < 7; T++) {
              if (x & 1) {
                var C = (1 << T) - 1;
                C < 32 ? B ^= 1 << C : _ ^= 1 << C - 32;
              }
              x & 128 ? x = x << 1 ^ 113 : x <<= 1;
            }
            h[w] = c.create(_, B);
          }
        })();
        var g = [];
        (function() {
          for (var m = 0; m < 25; m++)
            g[m] = c.create();
        })();
        var p = f.SHA3 = s.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: s.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var m = this._state = [], O = 0; O < 25; O++)
              m[O] = new c.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(m, O) {
            for (var k = this._state, v = this.blockSize / 2, b = 0; b < v; b++) {
              var x = m[O + 2 * b], w = m[O + 2 * b + 1];
              x = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, w = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360;
              var _ = k[b];
              _.high ^= w, _.low ^= x;
            }
            for (var B = 0; B < 24; B++) {
              for (var T = 0; T < 5; T++) {
                for (var C = 0, E = 0, D = 0; D < 5; D++) {
                  var _ = k[T + 5 * D];
                  C ^= _.high, E ^= _.low;
                }
                var L = g[T];
                L.high = C, L.low = E;
              }
              for (var T = 0; T < 5; T++)
                for (var F = g[(T + 4) % 5], H = g[(T + 1) % 5], j = H.high, K = H.low, C = F.high ^ (j << 1 | K >>> 31), E = F.low ^ (K << 1 | j >>> 31), D = 0; D < 5; D++) {
                  var _ = k[T + 5 * D];
                  _.high ^= C, _.low ^= E;
                }
              for (var re = 1; re < 25; re++) {
                var C, E, _ = k[re], J = _.high, le = _.low, U = d[re];
                U < 32 ? (C = J << U | le >>> 32 - U, E = le << U | J >>> 32 - U) : (C = le << U - 32 | J >>> 64 - U, E = J << U - 32 | le >>> 64 - U);
                var A = g[l[re]];
                A.high = C, A.low = E;
              }
              var M = g[0], z = k[0];
              M.high = z.high, M.low = z.low;
              for (var T = 0; T < 5; T++)
                for (var D = 0; D < 5; D++) {
                  var re = T + 5 * D, _ = k[re], ee = g[re], se = g[(T + 1) % 5 + 5 * D], be = g[(T + 2) % 5 + 5 * D];
                  _.high = ee.high ^ ~se.high & be.high, _.low = ee.low ^ ~se.low & be.low;
                }
              var _ = k[0], ie = h[B];
              _.high ^= ie.high, _.low ^= ie.low;
            }
          },
          _doFinalize: function() {
            var m = this._data, O = m.words;
            this._nDataBytes * 8;
            var k = m.sigBytes * 8, v = this.blockSize * 32;
            O[k >>> 5] |= 1 << 24 - k % 32, O[(n.ceil((k + 1) / v) * v >>> 5) - 1] |= 128, m.sigBytes = O.length * 4, this._process();
            for (var b = this._state, x = this.cfg.outputLength / 8, w = x / 8, _ = [], B = 0; B < w; B++) {
              var T = b[B], C = T.high, E = T.low;
              C = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, E = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, _.push(E), _.push(C);
            }
            return new a.init(_, x);
          },
          clone: function() {
            for (var m = s.clone.call(this), O = m._state = this._state.slice(0), k = 0; k < 25; k++)
              O[k] = O[k].clone();
            return m;
          }
        });
        i.SHA3 = s._createHelper(p), i.HmacSHA3 = s._createHmacHelper(p);
      }(Math), t.SHA3;
    });
  }($a)), sn;
}
var an = {}, Ma = {
  get exports() {
    return an;
  },
  set exports(e) {
    an = e;
  }
}, m0;
function za() {
  return m0 || (m0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(Ce());
    })(me, function(t) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(n) {
        var i = t, o = i.lib, a = o.WordArray, s = o.Hasher, u = i.algo, c = a.create([
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
        ]), f = a.create([
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
        ]), d = a.create([
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
        ]), l = a.create([
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
        ]), h = a.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), g = a.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), p = u.RIPEMD160 = s.extend({
          _doReset: function() {
            this._hash = a.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(w, _) {
            for (var B = 0; B < 16; B++) {
              var T = _ + B, C = w[T];
              w[T] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360;
            }
            var E = this._hash.words, D = h.words, L = g.words, F = c.words, H = f.words, j = d.words, K = l.words, re, J, le, U, A, M, z, ee, se, be;
            M = re = E[0], z = J = E[1], ee = le = E[2], se = U = E[3], be = A = E[4];
            for (var ie, B = 0; B < 80; B += 1)
              ie = re + w[_ + F[B]] | 0, B < 16 ? ie += m(J, le, U) + D[0] : B < 32 ? ie += O(J, le, U) + D[1] : B < 48 ? ie += k(J, le, U) + D[2] : B < 64 ? ie += v(J, le, U) + D[3] : ie += b(J, le, U) + D[4], ie = ie | 0, ie = x(ie, j[B]), ie = ie + A | 0, re = A, A = U, U = x(le, 10), le = J, J = ie, ie = M + w[_ + H[B]] | 0, B < 16 ? ie += b(z, ee, se) + L[0] : B < 32 ? ie += v(z, ee, se) + L[1] : B < 48 ? ie += k(z, ee, se) + L[2] : B < 64 ? ie += O(z, ee, se) + L[3] : ie += m(z, ee, se) + L[4], ie = ie | 0, ie = x(ie, K[B]), ie = ie + be | 0, M = be, be = se, se = x(ee, 10), ee = z, z = ie;
            ie = E[1] + le + se | 0, E[1] = E[2] + U + be | 0, E[2] = E[3] + A + M | 0, E[3] = E[4] + re + z | 0, E[4] = E[0] + J + ee | 0, E[0] = ie;
          },
          _doFinalize: function() {
            var w = this._data, _ = w.words, B = this._nDataBytes * 8, T = w.sigBytes * 8;
            _[T >>> 5] |= 128 << 24 - T % 32, _[(T + 64 >>> 9 << 4) + 14] = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360, w.sigBytes = (_.length + 1) * 4, this._process();
            for (var C = this._hash, E = C.words, D = 0; D < 5; D++) {
              var L = E[D];
              E[D] = (L << 8 | L >>> 24) & 16711935 | (L << 24 | L >>> 8) & 4278255360;
            }
            return C;
          },
          clone: function() {
            var w = s.clone.call(this);
            return w._hash = this._hash.clone(), w;
          }
        });
        function m(w, _, B) {
          return w ^ _ ^ B;
        }
        function O(w, _, B) {
          return w & _ | ~w & B;
        }
        function k(w, _, B) {
          return (w | ~_) ^ B;
        }
        function v(w, _, B) {
          return w & B | _ & ~B;
        }
        function b(w, _, B) {
          return w ^ (_ | ~B);
        }
        function x(w, _) {
          return w << _ | w >>> 32 - _;
        }
        i.RIPEMD160 = s._createHelper(p), i.HmacRIPEMD160 = s._createHmacHelper(p);
      }(), t.RIPEMD160;
    });
  }(Ma)), an;
}
var cn = {}, Ha = {
  get exports() {
    return cn;
  },
  set exports(e) {
    cn = e;
  }
}, _0;
function Pi() {
  return _0 || (_0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(Ce());
    })(me, function(t) {
      (function() {
        var n = t, i = n.lib, o = i.Base, a = n.enc, s = a.Utf8, u = n.algo;
        u.HMAC = o.extend({
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
          init: function(c, f) {
            c = this._hasher = new c.init(), typeof f == "string" && (f = s.parse(f));
            var d = c.blockSize, l = d * 4;
            f.sigBytes > l && (f = c.finalize(f)), f.clamp();
            for (var h = this._oKey = f.clone(), g = this._iKey = f.clone(), p = h.words, m = g.words, O = 0; O < d; O++)
              p[O] ^= 1549556828, m[O] ^= 909522486;
            h.sigBytes = g.sigBytes = l, this.reset();
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
            var f = this._hasher, d = f.finalize(c);
            f.reset();
            var l = f.finalize(this._oKey.clone().concat(d));
            return l;
          }
        });
      })();
    });
  }(Ha)), cn;
}
var ln = {}, Fa = {
  get exports() {
    return ln;
  },
  set exports(e) {
    ln = e;
  }
}, w0;
function qa() {
  return w0 || (w0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), $i(), Pi());
    })(me, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.Base, a = i.WordArray, s = n.algo, u = s.SHA1, c = s.HMAC, f = s.PBKDF2 = o.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA1
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: o.extend({
            keySize: 128 / 32,
            hasher: u,
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
          compute: function(d, l) {
            for (var h = this.cfg, g = c.create(h.hasher, d), p = a.create(), m = a.create([1]), O = p.words, k = m.words, v = h.keySize, b = h.iterations; O.length < v; ) {
              var x = g.update(l).finalize(m);
              g.reset();
              for (var w = x.words, _ = w.length, B = x, T = 1; T < b; T++) {
                B = g.finalize(B), g.reset();
                for (var C = B.words, E = 0; E < _; E++)
                  w[E] ^= C[E];
              }
              p.concat(x), k[0]++;
            }
            return p.sigBytes = v * 4, p;
          }
        });
        n.PBKDF2 = function(d, l, h) {
          return f.create(h).compute(d, l);
        };
      }(), t.PBKDF2;
    });
  }(Fa)), ln;
}
var un = {}, Ua = {
  get exports() {
    return un;
  },
  set exports(e) {
    un = e;
  }
}, k0;
function Xt() {
  return k0 || (k0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), $i(), Pi());
    })(me, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.Base, a = i.WordArray, s = n.algo, u = s.MD5, c = s.EvpKDF = o.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: o.extend({
            keySize: 128 / 32,
            hasher: u,
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
            for (var l, h = this.cfg, g = h.hasher.create(), p = a.create(), m = p.words, O = h.keySize, k = h.iterations; m.length < O; ) {
              l && g.update(l), l = g.update(f).finalize(d), g.reset();
              for (var v = 1; v < k; v++)
                l = g.finalize(l), g.reset();
              p.concat(l);
            }
            return p.sigBytes = O * 4, p;
          }
        });
        n.EvpKDF = function(f, d, l) {
          return c.create(l).compute(f, d);
        };
      }(), t.EvpKDF;
    });
  }(Ua)), un;
}
var fn = {}, Va = {
  get exports() {
    return fn;
  },
  set exports(e) {
    fn = e;
  }
}, S0;
function Je() {
  return S0 || (S0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), Xt());
    })(me, function(t) {
      t.lib.Cipher || function(n) {
        var i = t, o = i.lib, a = o.Base, s = o.WordArray, u = o.BufferedBlockAlgorithm, c = i.enc;
        c.Utf8;
        var f = c.Base64, d = i.algo, l = d.EvpKDF, h = o.Cipher = u.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: a.extend(),
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
          createEncryptor: function(C, E) {
            return this.create(this._ENC_XFORM_MODE, C, E);
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
          createDecryptor: function(C, E) {
            return this.create(this._DEC_XFORM_MODE, C, E);
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
          init: function(C, E, D) {
            this.cfg = this.cfg.extend(D), this._xformMode = C, this._key = E, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            u.reset.call(this), this._doReset();
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
            var E = this._doFinalize();
            return E;
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
            function C(E) {
              return typeof E == "string" ? T : w;
            }
            return function(E) {
              return {
                encrypt: function(D, L, F) {
                  return C(L).encrypt(E, D, L, F);
                },
                decrypt: function(D, L, F) {
                  return C(L).decrypt(E, D, L, F);
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
        var g = i.mode = {}, p = o.BlockCipherMode = a.extend({
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
          createEncryptor: function(C, E) {
            return this.Encryptor.create(C, E);
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
          createDecryptor: function(C, E) {
            return this.Decryptor.create(C, E);
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
          init: function(C, E) {
            this._cipher = C, this._iv = E;
          }
        }), m = g.CBC = function() {
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
            processBlock: function(D, L) {
              var F = this._cipher, H = F.blockSize;
              E.call(this, D, L, H), F.encryptBlock(D, L), this._prevBlock = D.slice(L, L + H);
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
            processBlock: function(D, L) {
              var F = this._cipher, H = F.blockSize, j = D.slice(L, L + H);
              F.decryptBlock(D, L), E.call(this, D, L, H), this._prevBlock = j;
            }
          });
          function E(D, L, F) {
            var H, j = this._iv;
            j ? (H = j, this._iv = n) : H = this._prevBlock;
            for (var K = 0; K < F; K++)
              D[L + K] ^= H[K];
          }
          return C;
        }(), O = i.pad = {}, k = O.Pkcs7 = {
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
          pad: function(C, E) {
            for (var D = E * 4, L = D - C.sigBytes % D, F = L << 24 | L << 16 | L << 8 | L, H = [], j = 0; j < L; j += 4)
              H.push(F);
            var K = s.create(H, L);
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
            var E = C.words[C.sigBytes - 1 >>> 2] & 255;
            C.sigBytes -= E;
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
            padding: k
          }),
          reset: function() {
            var C;
            h.reset.call(this);
            var E = this.cfg, D = E.iv, L = E.mode;
            this._xformMode == this._ENC_XFORM_MODE ? C = L.createEncryptor : (C = L.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == C ? this._mode.init(this, D && D.words) : (this._mode = C.call(L, this, D && D.words), this._mode.__creator = C);
          },
          _doProcessBlock: function(C, E) {
            this._mode.processBlock(C, E);
          },
          _doFinalize: function() {
            var C, E = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (E.pad(this._data, this.blockSize), C = this._process(!0)) : (C = this._process(!0), E.unpad(C)), C;
          },
          blockSize: 128 / 32
        });
        var v = o.CipherParams = a.extend({
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
        }), b = i.format = {}, x = b.OpenSSL = {
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
            var E, D = C.ciphertext, L = C.salt;
            return L ? E = s.create([1398893684, 1701076831]).concat(L).concat(D) : E = D, E.toString(f);
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
            var E, D = f.parse(C), L = D.words;
            return L[0] == 1398893684 && L[1] == 1701076831 && (E = s.create(L.slice(2, 4)), L.splice(0, 4), D.sigBytes -= 16), v.create({ ciphertext: D, salt: E });
          }
        }, w = o.SerializableCipher = a.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: a.extend({
            format: x
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
          encrypt: function(C, E, D, L) {
            L = this.cfg.extend(L);
            var F = C.createEncryptor(D, L), H = F.finalize(E), j = F.cfg;
            return v.create({
              ciphertext: H,
              key: D,
              iv: j.iv,
              algorithm: C,
              mode: j.mode,
              padding: j.padding,
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
          decrypt: function(C, E, D, L) {
            L = this.cfg.extend(L), E = this._parse(E, L.format);
            var F = C.createDecryptor(D, L).finalize(E.ciphertext);
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
          _parse: function(C, E) {
            return typeof C == "string" ? E.parse(C, this) : C;
          }
        }), _ = i.kdf = {}, B = _.OpenSSL = {
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
          execute: function(C, E, D, L) {
            L || (L = s.random(64 / 8));
            var F = l.create({ keySize: E + D }).compute(C, L), H = s.create(F.words.slice(E), D * 4);
            return F.sigBytes = E * 4, v.create({ key: F, iv: H, salt: L });
          }
        }, T = o.PasswordBasedCipher = w.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: w.cfg.extend({
            kdf: B
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
          encrypt: function(C, E, D, L) {
            L = this.cfg.extend(L);
            var F = L.kdf.execute(D, C.keySize, C.ivSize);
            L.iv = F.iv;
            var H = w.encrypt.call(this, C, E, F.key, L);
            return H.mixIn(F), H;
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
          decrypt: function(C, E, D, L) {
            L = this.cfg.extend(L), E = this._parse(E, L.format);
            var F = L.kdf.execute(D, C.keySize, C.ivSize, E.salt);
            L.iv = F.iv;
            var H = w.decrypt.call(this, C, E, F.key, L);
            return H;
          }
        });
      }();
    });
  }(Va)), fn;
}
var dn = {}, Wa = {
  get exports() {
    return dn;
  },
  set exports(e) {
    dn = e;
  }
}, C0;
function ja() {
  return C0 || (C0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), Je());
    })(me, function(t) {
      return t.mode.CFB = function() {
        var n = t.lib.BlockCipherMode.extend();
        n.Encryptor = n.extend({
          processBlock: function(o, a) {
            var s = this._cipher, u = s.blockSize;
            i.call(this, o, a, u, s), this._prevBlock = o.slice(a, a + u);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(o, a) {
            var s = this._cipher, u = s.blockSize, c = o.slice(a, a + u);
            i.call(this, o, a, u, s), this._prevBlock = c;
          }
        });
        function i(o, a, s, u) {
          var c, f = this._iv;
          f ? (c = f.slice(0), this._iv = void 0) : c = this._prevBlock, u.encryptBlock(c, 0);
          for (var d = 0; d < s; d++)
            o[a + d] ^= c[d];
        }
        return n;
      }(), t.mode.CFB;
    });
  }(Wa)), dn;
}
var hn = {}, Ya = {
  get exports() {
    return hn;
  },
  set exports(e) {
    hn = e;
  }
}, E0;
function Ka() {
  return E0 || (E0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), Je());
    })(me, function(t) {
      return t.mode.CTR = function() {
        var n = t.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(o, a) {
            var s = this._cipher, u = s.blockSize, c = this._iv, f = this._counter;
            c && (f = this._counter = c.slice(0), this._iv = void 0);
            var d = f.slice(0);
            s.encryptBlock(d, 0), f[u - 1] = f[u - 1] + 1 | 0;
            for (var l = 0; l < u; l++)
              o[a + l] ^= d[l];
          }
        });
        return n.Decryptor = i, n;
      }(), t.mode.CTR;
    });
  }(Ya)), hn;
}
var pn = {}, Ga = {
  get exports() {
    return pn;
  },
  set exports(e) {
    pn = e;
  }
}, B0;
function Za() {
  return B0 || (B0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), Je());
    })(me, function(t) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return t.mode.CTRGladman = function() {
        var n = t.lib.BlockCipherMode.extend();
        function i(s) {
          if ((s >> 24 & 255) === 255) {
            var u = s >> 16 & 255, c = s >> 8 & 255, f = s & 255;
            u === 255 ? (u = 0, c === 255 ? (c = 0, f === 255 ? f = 0 : ++f) : ++c) : ++u, s = 0, s += u << 16, s += c << 8, s += f;
          } else
            s += 1 << 24;
          return s;
        }
        function o(s) {
          return (s[0] = i(s[0])) === 0 && (s[1] = i(s[1])), s;
        }
        var a = n.Encryptor = n.extend({
          processBlock: function(s, u) {
            var c = this._cipher, f = c.blockSize, d = this._iv, l = this._counter;
            d && (l = this._counter = d.slice(0), this._iv = void 0), o(l);
            var h = l.slice(0);
            c.encryptBlock(h, 0);
            for (var g = 0; g < f; g++)
              s[u + g] ^= h[g];
          }
        });
        return n.Decryptor = a, n;
      }(), t.mode.CTRGladman;
    });
  }(Ga)), pn;
}
var vn = {}, Xa = {
  get exports() {
    return vn;
  },
  set exports(e) {
    vn = e;
  }
}, A0;
function Qa() {
  return A0 || (A0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), Je());
    })(me, function(t) {
      return t.mode.OFB = function() {
        var n = t.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(o, a) {
            var s = this._cipher, u = s.blockSize, c = this._iv, f = this._keystream;
            c && (f = this._keystream = c.slice(0), this._iv = void 0), s.encryptBlock(f, 0);
            for (var d = 0; d < u; d++)
              o[a + d] ^= f[d];
          }
        });
        return n.Decryptor = i, n;
      }(), t.mode.OFB;
    });
  }(Xa)), vn;
}
var gn = {}, Ja = {
  get exports() {
    return gn;
  },
  set exports(e) {
    gn = e;
  }
}, I0;
function Io() {
  return I0 || (I0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), Je());
    })(me, function(t) {
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
  }(Ja)), gn;
}
var bn = {}, ec = {
  get exports() {
    return bn;
  },
  set exports(e) {
    bn = e;
  }
}, O0;
function tc() {
  return O0 || (O0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), Je());
    })(me, function(t) {
      return t.pad.AnsiX923 = {
        pad: function(n, i) {
          var o = n.sigBytes, a = i * 4, s = a - o % a, u = o + s - 1;
          n.clamp(), n.words[u >>> 2] |= s << 24 - u % 4 * 8, n.sigBytes += s;
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, t.pad.Ansix923;
    });
  }(ec)), bn;
}
var xn = {}, rc = {
  get exports() {
    return xn;
  },
  set exports(e) {
    xn = e;
  }
}, T0;
function nc() {
  return T0 || (T0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), Je());
    })(me, function(t) {
      return t.pad.Iso10126 = {
        pad: function(n, i) {
          var o = i * 4, a = o - n.sigBytes % o;
          n.concat(t.lib.WordArray.random(a - 1)).concat(t.lib.WordArray.create([a << 24], 1));
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, t.pad.Iso10126;
    });
  }(rc)), xn;
}
var yn = {}, ic = {
  get exports() {
    return yn;
  },
  set exports(e) {
    yn = e;
  }
}, R0;
function oc() {
  return R0 || (R0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), Je());
    })(me, function(t) {
      return t.pad.Iso97971 = {
        pad: function(n, i) {
          n.concat(t.lib.WordArray.create([2147483648], 1)), t.pad.ZeroPadding.pad(n, i);
        },
        unpad: function(n) {
          t.pad.ZeroPadding.unpad(n), n.sigBytes--;
        }
      }, t.pad.Iso97971;
    });
  }(ic)), yn;
}
var mn = {}, sc = {
  get exports() {
    return mn;
  },
  set exports(e) {
    mn = e;
  }
}, L0;
function ac() {
  return L0 || (L0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), Je());
    })(me, function(t) {
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
  }(sc)), mn;
}
var _n = {}, cc = {
  get exports() {
    return _n;
  },
  set exports(e) {
    _n = e;
  }
}, N0;
function lc() {
  return N0 || (N0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), Je());
    })(me, function(t) {
      return t.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, t.pad.NoPadding;
    });
  }(cc)), _n;
}
var wn = {}, uc = {
  get exports() {
    return wn;
  },
  set exports(e) {
    wn = e;
  }
}, D0;
function fc() {
  return D0 || (D0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), Je());
    })(me, function(t) {
      return function(n) {
        var i = t, o = i.lib, a = o.CipherParams, s = i.enc, u = s.Hex, c = i.format;
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
          stringify: function(f) {
            return f.ciphertext.toString(u);
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
            var d = u.parse(f);
            return a.create({ ciphertext: d });
          }
        };
      }(), t.format.Hex;
    });
  }(uc)), wn;
}
var kn = {}, dc = {
  get exports() {
    return kn;
  },
  set exports(e) {
    kn = e;
  }
}, $0;
function Oo() {
  return $0 || ($0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), Gt(), Zt(), Xt(), Je());
    })(me, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.BlockCipher, a = n.algo, s = [], u = [], c = [], f = [], d = [], l = [], h = [], g = [], p = [], m = [];
        (function() {
          for (var v = [], b = 0; b < 256; b++)
            b < 128 ? v[b] = b << 1 : v[b] = b << 1 ^ 283;
          for (var x = 0, w = 0, b = 0; b < 256; b++) {
            var _ = w ^ w << 1 ^ w << 2 ^ w << 3 ^ w << 4;
            _ = _ >>> 8 ^ _ & 255 ^ 99, s[x] = _, u[_] = x;
            var B = v[x], T = v[B], C = v[T], E = v[_] * 257 ^ _ * 16843008;
            c[x] = E << 24 | E >>> 8, f[x] = E << 16 | E >>> 16, d[x] = E << 8 | E >>> 24, l[x] = E;
            var E = C * 16843009 ^ T * 65537 ^ B * 257 ^ x * 16843008;
            h[_] = E << 24 | E >>> 8, g[_] = E << 16 | E >>> 16, p[_] = E << 8 | E >>> 24, m[_] = E, x ? (x = B ^ v[v[v[C ^ B]]], w ^= v[v[w]]) : x = w = 1;
          }
        })();
        var O = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], k = a.AES = o.extend({
          _doReset: function() {
            var v;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var b = this._keyPriorReset = this._key, x = b.words, w = b.sigBytes / 4, _ = this._nRounds = w + 6, B = (_ + 1) * 4, T = this._keySchedule = [], C = 0; C < B; C++)
                C < w ? T[C] = x[C] : (v = T[C - 1], C % w ? w > 6 && C % w == 4 && (v = s[v >>> 24] << 24 | s[v >>> 16 & 255] << 16 | s[v >>> 8 & 255] << 8 | s[v & 255]) : (v = v << 8 | v >>> 24, v = s[v >>> 24] << 24 | s[v >>> 16 & 255] << 16 | s[v >>> 8 & 255] << 8 | s[v & 255], v ^= O[C / w | 0] << 24), T[C] = T[C - w] ^ v);
              for (var E = this._invKeySchedule = [], D = 0; D < B; D++) {
                var C = B - D;
                if (D % 4)
                  var v = T[C];
                else
                  var v = T[C - 4];
                D < 4 || C <= 4 ? E[D] = v : E[D] = h[s[v >>> 24]] ^ g[s[v >>> 16 & 255]] ^ p[s[v >>> 8 & 255]] ^ m[s[v & 255]];
              }
            }
          },
          encryptBlock: function(v, b) {
            this._doCryptBlock(v, b, this._keySchedule, c, f, d, l, s);
          },
          decryptBlock: function(v, b) {
            var x = v[b + 1];
            v[b + 1] = v[b + 3], v[b + 3] = x, this._doCryptBlock(v, b, this._invKeySchedule, h, g, p, m, u);
            var x = v[b + 1];
            v[b + 1] = v[b + 3], v[b + 3] = x;
          },
          _doCryptBlock: function(v, b, x, w, _, B, T, C) {
            for (var E = this._nRounds, D = v[b] ^ x[0], L = v[b + 1] ^ x[1], F = v[b + 2] ^ x[2], H = v[b + 3] ^ x[3], j = 4, K = 1; K < E; K++) {
              var re = w[D >>> 24] ^ _[L >>> 16 & 255] ^ B[F >>> 8 & 255] ^ T[H & 255] ^ x[j++], J = w[L >>> 24] ^ _[F >>> 16 & 255] ^ B[H >>> 8 & 255] ^ T[D & 255] ^ x[j++], le = w[F >>> 24] ^ _[H >>> 16 & 255] ^ B[D >>> 8 & 255] ^ T[L & 255] ^ x[j++], U = w[H >>> 24] ^ _[D >>> 16 & 255] ^ B[L >>> 8 & 255] ^ T[F & 255] ^ x[j++];
              D = re, L = J, F = le, H = U;
            }
            var re = (C[D >>> 24] << 24 | C[L >>> 16 & 255] << 16 | C[F >>> 8 & 255] << 8 | C[H & 255]) ^ x[j++], J = (C[L >>> 24] << 24 | C[F >>> 16 & 255] << 16 | C[H >>> 8 & 255] << 8 | C[D & 255]) ^ x[j++], le = (C[F >>> 24] << 24 | C[H >>> 16 & 255] << 16 | C[D >>> 8 & 255] << 8 | C[L & 255]) ^ x[j++], U = (C[H >>> 24] << 24 | C[D >>> 16 & 255] << 16 | C[L >>> 8 & 255] << 8 | C[F & 255]) ^ x[j++];
            v[b] = re, v[b + 1] = J, v[b + 2] = le, v[b + 3] = U;
          },
          keySize: 256 / 32
        });
        n.AES = o._createHelper(k);
      }(), t.AES;
    });
  }(dc)), kn;
}
var Sn = {}, hc = {
  get exports() {
    return Sn;
  },
  set exports(e) {
    Sn = e;
  }
}, P0;
function pc() {
  return P0 || (P0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), Gt(), Zt(), Xt(), Je());
    })(me, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.WordArray, a = i.BlockCipher, s = n.algo, u = [
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
        ], l = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], h = s.DES = a.extend({
          _doReset: function() {
            for (var O = this._key, k = O.words, v = [], b = 0; b < 56; b++) {
              var x = u[b] - 1;
              v[b] = k[x >>> 5] >>> 31 - x % 32 & 1;
            }
            for (var w = this._subKeys = [], _ = 0; _ < 16; _++) {
              for (var B = w[_] = [], T = f[_], b = 0; b < 24; b++)
                B[b / 6 | 0] |= v[(c[b] - 1 + T) % 28] << 31 - b % 6, B[4 + (b / 6 | 0)] |= v[28 + (c[b + 24] - 1 + T) % 28] << 31 - b % 6;
              B[0] = B[0] << 1 | B[0] >>> 31;
              for (var b = 1; b < 7; b++)
                B[b] = B[b] >>> (b - 1) * 4 + 3;
              B[7] = B[7] << 5 | B[7] >>> 27;
            }
            for (var C = this._invSubKeys = [], b = 0; b < 16; b++)
              C[b] = w[15 - b];
          },
          encryptBlock: function(O, k) {
            this._doCryptBlock(O, k, this._subKeys);
          },
          decryptBlock: function(O, k) {
            this._doCryptBlock(O, k, this._invSubKeys);
          },
          _doCryptBlock: function(O, k, v) {
            this._lBlock = O[k], this._rBlock = O[k + 1], g.call(this, 4, 252645135), g.call(this, 16, 65535), p.call(this, 2, 858993459), p.call(this, 8, 16711935), g.call(this, 1, 1431655765);
            for (var b = 0; b < 16; b++) {
              for (var x = v[b], w = this._lBlock, _ = this._rBlock, B = 0, T = 0; T < 8; T++)
                B |= d[T][((_ ^ x[T]) & l[T]) >>> 0];
              this._lBlock = _, this._rBlock = w ^ B;
            }
            var C = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = C, g.call(this, 1, 1431655765), p.call(this, 8, 16711935), p.call(this, 2, 858993459), g.call(this, 16, 65535), g.call(this, 4, 252645135), O[k] = this._lBlock, O[k + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function g(O, k) {
          var v = (this._lBlock >>> O ^ this._rBlock) & k;
          this._rBlock ^= v, this._lBlock ^= v << O;
        }
        function p(O, k) {
          var v = (this._rBlock >>> O ^ this._lBlock) & k;
          this._lBlock ^= v, this._rBlock ^= v << O;
        }
        n.DES = a._createHelper(h);
        var m = s.TripleDES = a.extend({
          _doReset: function() {
            var O = this._key, k = O.words;
            if (k.length !== 2 && k.length !== 4 && k.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var v = k.slice(0, 2), b = k.length < 4 ? k.slice(0, 2) : k.slice(2, 4), x = k.length < 6 ? k.slice(0, 2) : k.slice(4, 6);
            this._des1 = h.createEncryptor(o.create(v)), this._des2 = h.createEncryptor(o.create(b)), this._des3 = h.createEncryptor(o.create(x));
          },
          encryptBlock: function(O, k) {
            this._des1.encryptBlock(O, k), this._des2.decryptBlock(O, k), this._des3.encryptBlock(O, k);
          },
          decryptBlock: function(O, k) {
            this._des3.decryptBlock(O, k), this._des2.encryptBlock(O, k), this._des1.decryptBlock(O, k);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        n.TripleDES = a._createHelper(m);
      }(), t.TripleDES;
    });
  }(hc)), Sn;
}
var Cn = {}, vc = {
  get exports() {
    return Cn;
  },
  set exports(e) {
    Cn = e;
  }
}, M0;
function gc() {
  return M0 || (M0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), Gt(), Zt(), Xt(), Je());
    })(me, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.StreamCipher, a = n.algo, s = a.RC4 = o.extend({
          _doReset: function() {
            for (var f = this._key, d = f.words, l = f.sigBytes, h = this._S = [], g = 0; g < 256; g++)
              h[g] = g;
            for (var g = 0, p = 0; g < 256; g++) {
              var m = g % l, O = d[m >>> 2] >>> 24 - m % 4 * 8 & 255;
              p = (p + h[g] + O) % 256;
              var k = h[g];
              h[g] = h[p], h[p] = k;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(f, d) {
            f[d] ^= u.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function u() {
          for (var f = this._S, d = this._i, l = this._j, h = 0, g = 0; g < 4; g++) {
            d = (d + 1) % 256, l = (l + f[d]) % 256;
            var p = f[d];
            f[d] = f[l], f[l] = p, h |= f[(f[d] + f[l]) % 256] << 24 - g * 8;
          }
          return this._i = d, this._j = l, h;
        }
        n.RC4 = o._createHelper(s);
        var c = a.RC4Drop = s.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: s.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            s._doReset.call(this);
            for (var f = this.cfg.drop; f > 0; f--)
              u.call(this);
          }
        });
        n.RC4Drop = o._createHelper(c);
      }(), t.RC4;
    });
  }(vc)), Cn;
}
var En = {}, bc = {
  get exports() {
    return En;
  },
  set exports(e) {
    En = e;
  }
}, z0;
function xc() {
  return z0 || (z0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), Gt(), Zt(), Xt(), Je());
    })(me, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.StreamCipher, a = n.algo, s = [], u = [], c = [], f = a.Rabbit = o.extend({
          _doReset: function() {
            for (var l = this._key.words, h = this.cfg.iv, g = 0; g < 4; g++)
              l[g] = (l[g] << 8 | l[g] >>> 24) & 16711935 | (l[g] << 24 | l[g] >>> 8) & 4278255360;
            var p = this._X = [
              l[0],
              l[3] << 16 | l[2] >>> 16,
              l[1],
              l[0] << 16 | l[3] >>> 16,
              l[2],
              l[1] << 16 | l[0] >>> 16,
              l[3],
              l[2] << 16 | l[1] >>> 16
            ], m = this._C = [
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
            for (var g = 0; g < 4; g++)
              d.call(this);
            for (var g = 0; g < 8; g++)
              m[g] ^= p[g + 4 & 7];
            if (h) {
              var O = h.words, k = O[0], v = O[1], b = (k << 8 | k >>> 24) & 16711935 | (k << 24 | k >>> 8) & 4278255360, x = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360, w = b >>> 16 | x & 4294901760, _ = x << 16 | b & 65535;
              m[0] ^= b, m[1] ^= w, m[2] ^= x, m[3] ^= _, m[4] ^= b, m[5] ^= w, m[6] ^= x, m[7] ^= _;
              for (var g = 0; g < 4; g++)
                d.call(this);
            }
          },
          _doProcessBlock: function(l, h) {
            var g = this._X;
            d.call(this), s[0] = g[0] ^ g[5] >>> 16 ^ g[3] << 16, s[1] = g[2] ^ g[7] >>> 16 ^ g[5] << 16, s[2] = g[4] ^ g[1] >>> 16 ^ g[7] << 16, s[3] = g[6] ^ g[3] >>> 16 ^ g[1] << 16;
            for (var p = 0; p < 4; p++)
              s[p] = (s[p] << 8 | s[p] >>> 24) & 16711935 | (s[p] << 24 | s[p] >>> 8) & 4278255360, l[h + p] ^= s[p];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function d() {
          for (var l = this._X, h = this._C, g = 0; g < 8; g++)
            u[g] = h[g];
          h[0] = h[0] + 1295307597 + this._b | 0, h[1] = h[1] + 3545052371 + (h[0] >>> 0 < u[0] >>> 0 ? 1 : 0) | 0, h[2] = h[2] + 886263092 + (h[1] >>> 0 < u[1] >>> 0 ? 1 : 0) | 0, h[3] = h[3] + 1295307597 + (h[2] >>> 0 < u[2] >>> 0 ? 1 : 0) | 0, h[4] = h[4] + 3545052371 + (h[3] >>> 0 < u[3] >>> 0 ? 1 : 0) | 0, h[5] = h[5] + 886263092 + (h[4] >>> 0 < u[4] >>> 0 ? 1 : 0) | 0, h[6] = h[6] + 1295307597 + (h[5] >>> 0 < u[5] >>> 0 ? 1 : 0) | 0, h[7] = h[7] + 3545052371 + (h[6] >>> 0 < u[6] >>> 0 ? 1 : 0) | 0, this._b = h[7] >>> 0 < u[7] >>> 0 ? 1 : 0;
          for (var g = 0; g < 8; g++) {
            var p = l[g] + h[g], m = p & 65535, O = p >>> 16, k = ((m * m >>> 17) + m * O >>> 15) + O * O, v = ((p & 4294901760) * p | 0) + ((p & 65535) * p | 0);
            c[g] = k ^ v;
          }
          l[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0, l[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, l[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0, l[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0, l[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0, l[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, l[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0, l[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0;
        }
        n.Rabbit = o._createHelper(f);
      }(), t.Rabbit;
    });
  }(bc)), En;
}
var Bn = {}, yc = {
  get exports() {
    return Bn;
  },
  set exports(e) {
    Bn = e;
  }
}, H0;
function mc() {
  return H0 || (H0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(Ce(), Gt(), Zt(), Xt(), Je());
    })(me, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.StreamCipher, a = n.algo, s = [], u = [], c = [], f = a.RabbitLegacy = o.extend({
          _doReset: function() {
            var l = this._key.words, h = this.cfg.iv, g = this._X = [
              l[0],
              l[3] << 16 | l[2] >>> 16,
              l[1],
              l[0] << 16 | l[3] >>> 16,
              l[2],
              l[1] << 16 | l[0] >>> 16,
              l[3],
              l[2] << 16 | l[1] >>> 16
            ], p = this._C = [
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
            for (var m = 0; m < 4; m++)
              d.call(this);
            for (var m = 0; m < 8; m++)
              p[m] ^= g[m + 4 & 7];
            if (h) {
              var O = h.words, k = O[0], v = O[1], b = (k << 8 | k >>> 24) & 16711935 | (k << 24 | k >>> 8) & 4278255360, x = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360, w = b >>> 16 | x & 4294901760, _ = x << 16 | b & 65535;
              p[0] ^= b, p[1] ^= w, p[2] ^= x, p[3] ^= _, p[4] ^= b, p[5] ^= w, p[6] ^= x, p[7] ^= _;
              for (var m = 0; m < 4; m++)
                d.call(this);
            }
          },
          _doProcessBlock: function(l, h) {
            var g = this._X;
            d.call(this), s[0] = g[0] ^ g[5] >>> 16 ^ g[3] << 16, s[1] = g[2] ^ g[7] >>> 16 ^ g[5] << 16, s[2] = g[4] ^ g[1] >>> 16 ^ g[7] << 16, s[3] = g[6] ^ g[3] >>> 16 ^ g[1] << 16;
            for (var p = 0; p < 4; p++)
              s[p] = (s[p] << 8 | s[p] >>> 24) & 16711935 | (s[p] << 24 | s[p] >>> 8) & 4278255360, l[h + p] ^= s[p];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function d() {
          for (var l = this._X, h = this._C, g = 0; g < 8; g++)
            u[g] = h[g];
          h[0] = h[0] + 1295307597 + this._b | 0, h[1] = h[1] + 3545052371 + (h[0] >>> 0 < u[0] >>> 0 ? 1 : 0) | 0, h[2] = h[2] + 886263092 + (h[1] >>> 0 < u[1] >>> 0 ? 1 : 0) | 0, h[3] = h[3] + 1295307597 + (h[2] >>> 0 < u[2] >>> 0 ? 1 : 0) | 0, h[4] = h[4] + 3545052371 + (h[3] >>> 0 < u[3] >>> 0 ? 1 : 0) | 0, h[5] = h[5] + 886263092 + (h[4] >>> 0 < u[4] >>> 0 ? 1 : 0) | 0, h[6] = h[6] + 1295307597 + (h[5] >>> 0 < u[5] >>> 0 ? 1 : 0) | 0, h[7] = h[7] + 3545052371 + (h[6] >>> 0 < u[6] >>> 0 ? 1 : 0) | 0, this._b = h[7] >>> 0 < u[7] >>> 0 ? 1 : 0;
          for (var g = 0; g < 8; g++) {
            var p = l[g] + h[g], m = p & 65535, O = p >>> 16, k = ((m * m >>> 17) + m * O >>> 15) + O * O, v = ((p & 4294901760) * p | 0) + ((p & 65535) * p | 0);
            c[g] = k ^ v;
          }
          l[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0, l[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, l[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0, l[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0, l[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0, l[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, l[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0, l[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0;
        }
        n.RabbitLegacy = o._createHelper(f);
      }(), t.RabbitLegacy;
    });
  }(yc)), Bn;
}
(function(e, r) {
  (function(t, n, i) {
    e.exports = n(Ce(), $n(), wa(), Sa(), Gt(), Ba(), Zt(), $i(), Bo(), Ra(), Ao(), Da(), Pa(), za(), Pi(), qa(), Xt(), Je(), ja(), Ka(), Za(), Qa(), Io(), tc(), nc(), oc(), ac(), lc(), fc(), Oo(), pc(), gc(), xc(), mc());
  })(me, function(t) {
    return t;
  });
})(va);
var F0 = {}, _c = {
  get exports() {
    return F0;
  },
  set exports(e) {
    F0 = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(me, function() {
    var t = 1e3, n = 6e4, i = 36e5, o = "millisecond", a = "second", s = "minute", u = "hour", c = "day", f = "week", d = "month", l = "quarter", h = "year", g = "date", p = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, O = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, k = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(L) {
      var F = ["th", "st", "nd", "rd"], H = L % 100;
      return "[" + L + (F[(H - 20) % 10] || F[H] || F[0]) + "]";
    } }, v = function(L, F, H) {
      var j = String(L);
      return !j || j.length >= F ? L : "" + Array(F + 1 - j.length).join(H) + L;
    }, b = { s: v, z: function(L) {
      var F = -L.utcOffset(), H = Math.abs(F), j = Math.floor(H / 60), K = H % 60;
      return (F <= 0 ? "+" : "-") + v(j, 2, "0") + ":" + v(K, 2, "0");
    }, m: function L(F, H) {
      if (F.date() < H.date())
        return -L(H, F);
      var j = 12 * (H.year() - F.year()) + (H.month() - F.month()), K = F.clone().add(j, d), re = H - K < 0, J = F.clone().add(j + (re ? -1 : 1), d);
      return +(-(j + (H - K) / (re ? K - J : J - K)) || 0);
    }, a: function(L) {
      return L < 0 ? Math.ceil(L) || 0 : Math.floor(L);
    }, p: function(L) {
      return { M: d, y: h, w: f, d: c, D: g, h: u, m: s, s: a, ms: o, Q: l }[L] || String(L || "").toLowerCase().replace(/s$/, "");
    }, u: function(L) {
      return L === void 0;
    } }, x = "en", w = {};
    w[x] = k;
    var _ = function(L) {
      return L instanceof E;
    }, B = function L(F, H, j) {
      var K;
      if (!F)
        return x;
      if (typeof F == "string") {
        var re = F.toLowerCase();
        w[re] && (K = re), H && (w[re] = H, K = re);
        var J = F.split("-");
        if (!K && J.length > 1)
          return L(J[0]);
      } else {
        var le = F.name;
        w[le] = F, K = le;
      }
      return !j && K && (x = K), K || !j && x;
    }, T = function(L, F) {
      if (_(L))
        return L.clone();
      var H = typeof F == "object" ? F : {};
      return H.date = L, H.args = arguments, new E(H);
    }, C = b;
    C.l = B, C.i = _, C.w = function(L, F) {
      return T(L, { locale: F.$L, utc: F.$u, x: F.$x, $offset: F.$offset });
    };
    var E = function() {
      function L(H) {
        this.$L = B(H.locale, null, !0), this.parse(H);
      }
      var F = L.prototype;
      return F.parse = function(H) {
        this.$d = function(j) {
          var K = j.date, re = j.utc;
          if (K === null)
            return /* @__PURE__ */ new Date(NaN);
          if (C.u(K))
            return /* @__PURE__ */ new Date();
          if (K instanceof Date)
            return new Date(K);
          if (typeof K == "string" && !/Z$/i.test(K)) {
            var J = K.match(m);
            if (J) {
              var le = J[2] - 1 || 0, U = (J[7] || "0").substring(0, 3);
              return re ? new Date(Date.UTC(J[1], le, J[3] || 1, J[4] || 0, J[5] || 0, J[6] || 0, U)) : new Date(J[1], le, J[3] || 1, J[4] || 0, J[5] || 0, J[6] || 0, U);
            }
          }
          return new Date(K);
        }(H), this.$x = H.x || {}, this.init();
      }, F.init = function() {
        var H = this.$d;
        this.$y = H.getFullYear(), this.$M = H.getMonth(), this.$D = H.getDate(), this.$W = H.getDay(), this.$H = H.getHours(), this.$m = H.getMinutes(), this.$s = H.getSeconds(), this.$ms = H.getMilliseconds();
      }, F.$utils = function() {
        return C;
      }, F.isValid = function() {
        return this.$d.toString() !== p;
      }, F.isSame = function(H, j) {
        var K = T(H);
        return this.startOf(j) <= K && K <= this.endOf(j);
      }, F.isAfter = function(H, j) {
        return T(H) < this.startOf(j);
      }, F.isBefore = function(H, j) {
        return this.endOf(j) < T(H);
      }, F.$g = function(H, j, K) {
        return C.u(H) ? this[j] : this.set(K, H);
      }, F.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, F.valueOf = function() {
        return this.$d.getTime();
      }, F.startOf = function(H, j) {
        var K = this, re = !!C.u(j) || j, J = C.p(H), le = function(ie, ve) {
          var ye = C.w(K.$u ? Date.UTC(K.$y, ve, ie) : new Date(K.$y, ve, ie), K);
          return re ? ye : ye.endOf(c);
        }, U = function(ie, ve) {
          return C.w(K.toDate()[ie].apply(K.toDate("s"), (re ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ve)), K);
        }, A = this.$W, M = this.$M, z = this.$D, ee = "set" + (this.$u ? "UTC" : "");
        switch (J) {
          case h:
            return re ? le(1, 0) : le(31, 11);
          case d:
            return re ? le(1, M) : le(0, M + 1);
          case f:
            var se = this.$locale().weekStart || 0, be = (A < se ? A + 7 : A) - se;
            return le(re ? z - be : z + (6 - be), M);
          case c:
          case g:
            return U(ee + "Hours", 0);
          case u:
            return U(ee + "Minutes", 1);
          case s:
            return U(ee + "Seconds", 2);
          case a:
            return U(ee + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, F.endOf = function(H) {
        return this.startOf(H, !1);
      }, F.$set = function(H, j) {
        var K, re = C.p(H), J = "set" + (this.$u ? "UTC" : ""), le = (K = {}, K[c] = J + "Date", K[g] = J + "Date", K[d] = J + "Month", K[h] = J + "FullYear", K[u] = J + "Hours", K[s] = J + "Minutes", K[a] = J + "Seconds", K[o] = J + "Milliseconds", K)[re], U = re === c ? this.$D + (j - this.$W) : j;
        if (re === d || re === h) {
          var A = this.clone().set(g, 1);
          A.$d[le](U), A.init(), this.$d = A.set(g, Math.min(this.$D, A.daysInMonth())).$d;
        } else
          le && this.$d[le](U);
        return this.init(), this;
      }, F.set = function(H, j) {
        return this.clone().$set(H, j);
      }, F.get = function(H) {
        return this[C.p(H)]();
      }, F.add = function(H, j) {
        var K, re = this;
        H = Number(H);
        var J = C.p(j), le = function(M) {
          var z = T(re);
          return C.w(z.date(z.date() + Math.round(M * H)), re);
        };
        if (J === d)
          return this.set(d, this.$M + H);
        if (J === h)
          return this.set(h, this.$y + H);
        if (J === c)
          return le(1);
        if (J === f)
          return le(7);
        var U = (K = {}, K[s] = n, K[u] = i, K[a] = t, K)[J] || 1, A = this.$d.getTime() + H * U;
        return C.w(A, this);
      }, F.subtract = function(H, j) {
        return this.add(-1 * H, j);
      }, F.format = function(H) {
        var j = this, K = this.$locale();
        if (!this.isValid())
          return K.invalidDate || p;
        var re = H || "YYYY-MM-DDTHH:mm:ssZ", J = C.z(this), le = this.$H, U = this.$m, A = this.$M, M = K.weekdays, z = K.months, ee = function(ve, ye, Ge, Ze) {
          return ve && (ve[ye] || ve(j, re)) || Ge[ye].slice(0, Ze);
        }, se = function(ve) {
          return C.s(le % 12 || 12, ve, "0");
        }, be = K.meridiem || function(ve, ye, Ge) {
          var Ze = ve < 12 ? "AM" : "PM";
          return Ge ? Ze.toLowerCase() : Ze;
        }, ie = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: A + 1, MM: C.s(A + 1, 2, "0"), MMM: ee(K.monthsShort, A, z, 3), MMMM: ee(z, A), D: this.$D, DD: C.s(this.$D, 2, "0"), d: String(this.$W), dd: ee(K.weekdaysMin, this.$W, M, 2), ddd: ee(K.weekdaysShort, this.$W, M, 3), dddd: M[this.$W], H: String(le), HH: C.s(le, 2, "0"), h: se(1), hh: se(2), a: be(le, U, !0), A: be(le, U, !1), m: String(U), mm: C.s(U, 2, "0"), s: String(this.$s), ss: C.s(this.$s, 2, "0"), SSS: C.s(this.$ms, 3, "0"), Z: J };
        return re.replace(O, function(ve, ye) {
          return ye || ie[ve] || J.replace(":", "");
        });
      }, F.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, F.diff = function(H, j, K) {
        var re, J = C.p(j), le = T(H), U = (le.utcOffset() - this.utcOffset()) * n, A = this - le, M = C.m(this, le);
        return M = (re = {}, re[h] = M / 12, re[d] = M, re[l] = M / 3, re[f] = (A - U) / 6048e5, re[c] = (A - U) / 864e5, re[u] = A / i, re[s] = A / n, re[a] = A / t, re)[J] || A, K ? M : C.a(M);
      }, F.daysInMonth = function() {
        return this.endOf(d).$D;
      }, F.$locale = function() {
        return w[this.$L];
      }, F.locale = function(H, j) {
        if (!H)
          return this.$L;
        var K = this.clone(), re = B(H, j, !0);
        return re && (K.$L = re), K;
      }, F.clone = function() {
        return C.w(this.$d, this);
      }, F.toDate = function() {
        return new Date(this.valueOf());
      }, F.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, F.toISOString = function() {
        return this.$d.toISOString();
      }, F.toString = function() {
        return this.$d.toUTCString();
      }, L;
    }(), D = E.prototype;
    return T.prototype = D, [["$ms", o], ["$s", a], ["$m", s], ["$H", u], ["$W", c], ["$M", d], ["$y", h], ["$D", g]].forEach(function(L) {
      D[L[1]] = function(F) {
        return this.$g(F, L[0], L[1]);
      };
    }), T.extend = function(L, F) {
      return L.$i || (L(F, E, T), L.$i = !0), T;
    }, T.locale = B, T.isDayjs = _, T.unix = function(L) {
      return T(1e3 * L);
    }, T.en = w[x], T.Ls = w, T.p = {}, T;
  });
})(_c);
var To = function() {
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
          var a = o[i];
          t.call(n, a[1], a[0]);
        }
      }, r;
    }()
  );
}(), di = typeof window < "u" && typeof document < "u" && window.document === document, An = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), wc = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(An) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), kc = 2;
function Sc(e, r) {
  var t = !1, n = !1, i = 0;
  function o() {
    t && (t = !1, e()), n && s();
  }
  function a() {
    wc(o);
  }
  function s() {
    var u = Date.now();
    if (t) {
      if (u - i < kc)
        return;
      n = !0;
    } else
      t = !0, n = !1, setTimeout(a, r);
    i = u;
  }
  return s;
}
var Cc = 20, Ec = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Bc = typeof MutationObserver < "u", Ac = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Sc(this.refresh.bind(this), Cc);
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
      !di || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Bc ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !di || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(r) {
      var t = r.propertyName, n = t === void 0 ? "" : t, i = Ec.some(function(o) {
        return !!~n.indexOf(o);
      });
      i && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Ro = function(e, r) {
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
}, nr = function(e) {
  var r = e && e.ownerDocument && e.ownerDocument.defaultView;
  return r || An;
}, Lo = Pn(0, 0, 0, 0);
function In(e) {
  return parseFloat(e) || 0;
}
function q0(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  return r.reduce(function(n, i) {
    var o = e["border-" + i + "-width"];
    return n + In(o);
  }, 0);
}
function Ic(e) {
  for (var r = ["top", "right", "bottom", "left"], t = {}, n = 0, i = r; n < i.length; n++) {
    var o = i[n], a = e["padding-" + o];
    t[o] = In(a);
  }
  return t;
}
function Oc(e) {
  var r = e.getBBox();
  return Pn(0, 0, r.width, r.height);
}
function Tc(e) {
  var r = e.clientWidth, t = e.clientHeight;
  if (!r && !t)
    return Lo;
  var n = nr(e).getComputedStyle(e), i = Ic(n), o = i.left + i.right, a = i.top + i.bottom, s = In(n.width), u = In(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + o) !== r && (s -= q0(n, "left", "right") + o), Math.round(u + a) !== t && (u -= q0(n, "top", "bottom") + a)), !Lc(e)) {
    var c = Math.round(s + o) - r, f = Math.round(u + a) - t;
    Math.abs(c) !== 1 && (s -= c), Math.abs(f) !== 1 && (u -= f);
  }
  return Pn(i.left, i.top, s, u);
}
var Rc = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof nr(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof nr(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Lc(e) {
  return e === nr(e).document.documentElement;
}
function Nc(e) {
  return di ? Rc(e) ? Oc(e) : Tc(e) : Lo;
}
function Dc(e) {
  var r = e.x, t = e.y, n = e.width, i = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(o.prototype);
  return Ro(a, {
    x: r,
    y: t,
    width: n,
    height: i,
    top: t,
    right: r + n,
    bottom: i + t,
    left: r
  }), a;
}
function Pn(e, r, t, n) {
  return { x: e, y: r, width: t, height: n };
}
var $c = (
  /** @class */
  function() {
    function e(r) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Pn(0, 0, 0, 0), this.target = r;
    }
    return e.prototype.isActive = function() {
      var r = Nc(this.target);
      return this.contentRect_ = r, r.width !== this.broadcastWidth || r.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var r = this.contentRect_;
      return this.broadcastWidth = r.width, this.broadcastHeight = r.height, r;
    }, e;
  }()
), Pc = (
  /** @class */
  function() {
    function e(r, t) {
      var n = Dc(t);
      Ro(this, { target: r, contentRect: n });
    }
    return e;
  }()
), Mc = (
  /** @class */
  function() {
    function e(r, t, n) {
      if (this.activeObservations_ = [], this.observations_ = new To(), typeof r != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = r, this.controller_ = t, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(r) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(r instanceof nr(r).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var t = this.observations_;
        t.has(r) || (t.set(r, new $c(r)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(r) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(r instanceof nr(r).Element))
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
          return new Pc(n.target, n.broadcastRect());
        });
        this.callback_.call(r, t, r), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), No = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new To(), Do = (
  /** @class */
  function() {
    function e(r) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var t = Ac.getInstance(), n = new Mc(r, t, this);
      No.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Do.prototype[e] = function() {
    var r;
    return (r = No.get(this))[e].apply(r, arguments);
  };
});
(function() {
  return typeof An.ResizeObserver < "u" ? An.ResizeObserver : Do;
})();
Oo();
Gt();
var U0 = {}, zc = {
  get exports() {
    return U0;
  },
  set exports(e) {
    U0 = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(Ce());
  })(me, function(t) {
    return t.enc.Utf8;
  });
})(zc);
Zt();
Io();
var V0 = {}, Hc = {
  get exports() {
    return V0;
  },
  set exports(e) {
    V0 = e;
  }
};
(function(e, r) {
  (function(t, n, i) {
    e.exports = n(Ce(), Je());
  })(me, function(t) {
    return t.pad.Pkcs7;
  });
})(Hc);
function Fc(e) {
  var r = [], t = "";
  for (t in e)
    r.push(t);
  return r;
}
function hi(e) {
  return e = JSON.stringify(e), !(typeof e != "string" || !/^\{[\s\S]*\}$/.test(e));
}
function qc(e) {
  return e instanceof Array;
}
function Uc(e) {
  return Array.prototype.slice.call(e);
}
function ir() {
  if (!(this instanceof ir))
    return new ir();
}
ir.prototype = {
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
    if (hi(e))
      for (const n in e)
        this.set(n, e[n], r, t);
    else if (typeof e == "string") {
      const n = hi(t) ? t : { expires: t }, i = n.path !== void 0 ? `;path=${n.path};path=/` : ";path=/", o = n.domain ? `;domain=${n.domain}` : "", a = n.secure ? ";secure" : "";
      let s = n.expires !== void 0 ? n.expires : "";
      typeof s == "string" && s !== "" ? s = new Date(s) : typeof s == "number" && (s = new Date(+/* @__PURE__ */ new Date() + 1e3 * 60 * 60 * 24 * s)), s !== "" && "toGMTString" in s && (s = `;expires=${s.toGMTString()}`);
      const u = n.sameSite ? `;SameSite=${n.sameSite}` : "";
      document.cookie = `${e}=${encodeURI(r) + s + i + o + a + u}`;
    }
  },
  remove: function(e) {
    e = qc(e) ? e : Uc(arguments);
    for (var r = 0, t = e.length; r < t; r++)
      this.set(e[r], "", -1);
    return e;
  },
  clear: function(e) {
    return e ? this.remove(e) : this.remove(Fc(this.all()));
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
let jt = null;
const $o = function(e, r, t) {
  const n = arguments;
  if (jt || (jt = ir()), n.length === 0)
    return jt.all();
  if (n.length === 1 && e === null)
    return jt.clear();
  if (n.length === 2 && !r)
    return jt.clear(e);
  if (typeof e == "string" && !r)
    return jt.get(e);
  if (typeof e == "string" && r || hi(e))
    return jt.set(e, r, t);
};
for (const e in ir.prototype)
  $o[e] = ir.prototype[e];
var pi = {}, Vc = {
  get exports() {
    return pi;
  },
  set exports(e) {
    pi = e;
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
      function a(c, f) {
        if (!i[c]) {
          if (!n[c]) {
            var d = typeof vr == "function" && vr;
            if (!f && d)
              return d(c, !0);
            if (s)
              return s(c, !0);
            var l = new Error("Cannot find module '" + c + "'");
            throw l.code = "MODULE_NOT_FOUND", l;
          }
          var h = i[c] = { exports: {} };
          n[c][0].call(h.exports, function(g) {
            var p = n[c][1][g];
            return a(p || g);
          }, h, h.exports, t, n, i, o);
        }
        return i[c].exports;
      }
      for (var s = typeof vr == "function" && vr, u = 0; u < o.length; u++)
        a(o[u]);
      return a;
    }({ 1: [function(t, n, i) {
      (function(o) {
        var a = o.MutationObserver || o.WebKitMutationObserver, s;
        if (a) {
          var u = 0, c = new a(g), f = o.document.createTextNode("");
          c.observe(f, {
            characterData: !0
          }), s = function() {
            f.data = u = ++u % 2;
          };
        } else if (!o.setImmediate && typeof o.MessageChannel < "u") {
          var d = new o.MessageChannel();
          d.port1.onmessage = g, s = function() {
            d.port2.postMessage(0);
          };
        } else
          "document" in o && "onreadystatechange" in o.document.createElement("script") ? s = function() {
            var m = o.document.createElement("script");
            m.onreadystatechange = function() {
              g(), m.onreadystatechange = null, m.parentNode.removeChild(m), m = null;
            }, o.document.documentElement.appendChild(m);
          } : s = function() {
            setTimeout(g, 0);
          };
        var l, h = [];
        function g() {
          l = !0;
          for (var m, O, k = h.length; k; ) {
            for (O = h, h = [], m = -1; ++m < k; )
              O[m]();
            k = h.length;
          }
          l = !1;
        }
        n.exports = p;
        function p(m) {
          h.push(m) === 1 && !l && s();
        }
      }).call(this, typeof me < "u" ? me : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(t, n, i) {
      var o = t(1);
      function a() {
      }
      var s = {}, u = ["REJECTED"], c = ["FULFILLED"], f = ["PENDING"];
      n.exports = d;
      function d(x) {
        if (typeof x != "function")
          throw new TypeError("resolver must be a function");
        this.state = f, this.queue = [], this.outcome = void 0, x !== a && p(this, x);
      }
      d.prototype.catch = function(x) {
        return this.then(null, x);
      }, d.prototype.then = function(x, w) {
        if (typeof x != "function" && this.state === c || typeof w != "function" && this.state === u)
          return this;
        var _ = new this.constructor(a);
        if (this.state !== f) {
          var B = this.state === c ? x : w;
          h(_, B, this.outcome);
        } else
          this.queue.push(new l(_, x, w));
        return _;
      };
      function l(x, w, _) {
        this.promise = x, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof _ == "function" && (this.onRejected = _, this.callRejected = this.otherCallRejected);
      }
      l.prototype.callFulfilled = function(x) {
        s.resolve(this.promise, x);
      }, l.prototype.otherCallFulfilled = function(x) {
        h(this.promise, this.onFulfilled, x);
      }, l.prototype.callRejected = function(x) {
        s.reject(this.promise, x);
      }, l.prototype.otherCallRejected = function(x) {
        h(this.promise, this.onRejected, x);
      };
      function h(x, w, _) {
        o(function() {
          var B;
          try {
            B = w(_);
          } catch (T) {
            return s.reject(x, T);
          }
          B === x ? s.reject(x, new TypeError("Cannot resolve promise with itself")) : s.resolve(x, B);
        });
      }
      s.resolve = function(x, w) {
        var _ = m(g, w);
        if (_.status === "error")
          return s.reject(x, _.value);
        var B = _.value;
        if (B)
          p(x, B);
        else {
          x.state = c, x.outcome = w;
          for (var T = -1, C = x.queue.length; ++T < C; )
            x.queue[T].callFulfilled(w);
        }
        return x;
      }, s.reject = function(x, w) {
        x.state = u, x.outcome = w;
        for (var _ = -1, B = x.queue.length; ++_ < B; )
          x.queue[_].callRejected(w);
        return x;
      };
      function g(x) {
        var w = x && x.then;
        if (x && (typeof x == "object" || typeof x == "function") && typeof w == "function")
          return function() {
            w.apply(x, arguments);
          };
      }
      function p(x, w) {
        var _ = !1;
        function B(D) {
          _ || (_ = !0, s.reject(x, D));
        }
        function T(D) {
          _ || (_ = !0, s.resolve(x, D));
        }
        function C() {
          w(T, B);
        }
        var E = m(C);
        E.status === "error" && B(E.value);
      }
      function m(x, w) {
        var _ = {};
        try {
          _.value = x(w), _.status = "success";
        } catch (B) {
          _.status = "error", _.value = B;
        }
        return _;
      }
      d.resolve = O;
      function O(x) {
        return x instanceof this ? x : s.resolve(new this(a), x);
      }
      d.reject = k;
      function k(x) {
        var w = new this(a);
        return s.reject(w, x);
      }
      d.all = v;
      function v(x) {
        var w = this;
        if (Object.prototype.toString.call(x) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var _ = x.length, B = !1;
        if (!_)
          return this.resolve([]);
        for (var T = new Array(_), C = 0, E = -1, D = new this(a); ++E < _; )
          L(x[E], E);
        return D;
        function L(F, H) {
          w.resolve(F).then(j, function(K) {
            B || (B = !0, s.reject(D, K));
          });
          function j(K) {
            T[H] = K, ++C === _ && !B && (B = !0, s.resolve(D, T));
          }
        }
      }
      d.race = b;
      function b(x) {
        var w = this;
        if (Object.prototype.toString.call(x) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var _ = x.length, B = !1;
        if (!_)
          return this.resolve([]);
        for (var T = -1, C = new this(a); ++T < _; )
          E(x[T]);
        return C;
        function E(D) {
          w.resolve(D).then(function(L) {
            B || (B = !0, s.resolve(C, L));
          }, function(L) {
            B || (B = !0, s.reject(C, L));
          });
        }
      }
    }, { 1: 1 }], 3: [function(t, n, i) {
      (function(o) {
        typeof o.Promise != "function" && (o.Promise = t(2));
      }).call(this, typeof me < "u" ? me : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(t, n, i) {
      var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
        return typeof y;
      } : function(y) {
        return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
      };
      function a(y, I) {
        if (!(y instanceof I))
          throw new TypeError("Cannot call a class as a function");
      }
      function s() {
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
      var u = s();
      function c() {
        try {
          if (!u || !u.open)
            return !1;
          var y = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), I = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!y || I) && typeof indexedDB < "u" && // some outdated implementations of IDB that appear on Samsung
          // and HTC Android devices <4.4 are missing IDBKeyRange
          // See: https://github.com/mozilla/localForage/issues/128
          // See: https://github.com/mozilla/localForage/issues/272
          typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function f(y, I) {
        y = y || [], I = I || {};
        try {
          return new Blob(y, I);
        } catch (R) {
          if (R.name !== "TypeError")
            throw R;
          for (var S = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, N = new S(), $ = 0; $ < y.length; $ += 1)
            N.append(y[$]);
          return N.getBlob(I.type);
        }
      }
      typeof Promise > "u" && t(3);
      var d = Promise;
      function l(y, I) {
        I && y.then(function(S) {
          I(null, S);
        }, function(S) {
          I(S);
        });
      }
      function h(y, I, S) {
        typeof I == "function" && y.then(I), typeof S == "function" && y.catch(S);
      }
      function g(y) {
        return typeof y != "string" && (console.warn(y + " used as a key, but it is not a string."), y = String(y)), y;
      }
      function p() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var m = "local-forage-detect-blob-support", O = void 0, k = {}, v = Object.prototype.toString, b = "readonly", x = "readwrite";
      function w(y) {
        for (var I = y.length, S = new ArrayBuffer(I), N = new Uint8Array(S), $ = 0; $ < I; $++)
          N[$] = y.charCodeAt($);
        return S;
      }
      function _(y) {
        return new d(function(I) {
          var S = y.transaction(m, x), N = f([""]);
          S.objectStore(m).put(N, "key"), S.onabort = function($) {
            $.preventDefault(), $.stopPropagation(), I(!1);
          }, S.oncomplete = function() {
            var $ = navigator.userAgent.match(/Chrome\/(\d+)/), R = navigator.userAgent.match(/Edge\//);
            I(R || !$ || parseInt($[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function B(y) {
        return typeof O == "boolean" ? d.resolve(O) : _(y).then(function(I) {
          return O = I, O;
        });
      }
      function T(y) {
        var I = k[y.name], S = {};
        S.promise = new d(function(N, $) {
          S.resolve = N, S.reject = $;
        }), I.deferredOperations.push(S), I.dbReady ? I.dbReady = I.dbReady.then(function() {
          return S.promise;
        }) : I.dbReady = S.promise;
      }
      function C(y) {
        var I = k[y.name], S = I.deferredOperations.pop();
        if (S)
          return S.resolve(), S.promise;
      }
      function E(y, I) {
        var S = k[y.name], N = S.deferredOperations.pop();
        if (N)
          return N.reject(I), N.promise;
      }
      function D(y, I) {
        return new d(function(S, N) {
          if (k[y.name] = k[y.name] || A(), y.db)
            if (I)
              T(y), y.db.close();
            else
              return S(y.db);
          var $ = [y.name];
          I && $.push(y.version);
          var R = u.open.apply(u, $);
          I && (R.onupgradeneeded = function(W) {
            var G = R.result;
            try {
              G.createObjectStore(y.storeName), W.oldVersion <= 1 && G.createObjectStore(m);
            } catch (Z) {
              if (Z.name === "ConstraintError")
                console.warn('The database "' + y.name + '" has been upgraded from version ' + W.oldVersion + " to version " + W.newVersion + ', but the storage "' + y.storeName + '" already exists.');
              else
                throw Z;
            }
          }), R.onerror = function(W) {
            W.preventDefault(), N(R.error);
          }, R.onsuccess = function() {
            var W = R.result;
            W.onversionchange = function(G) {
              G.target.close();
            }, S(W), C(y);
          };
        });
      }
      function L(y) {
        return D(y, !1);
      }
      function F(y) {
        return D(y, !0);
      }
      function H(y, I) {
        if (!y.db)
          return !0;
        var S = !y.db.objectStoreNames.contains(y.storeName), N = y.version < y.db.version, $ = y.version > y.db.version;
        if (N && (y.version !== I && console.warn('The database "' + y.name + `" can't be downgraded from version ` + y.db.version + " to version " + y.version + "."), y.version = y.db.version), $ || S) {
          if (S) {
            var R = y.db.version + 1;
            R > y.version && (y.version = R);
          }
          return !0;
        }
        return !1;
      }
      function j(y) {
        return new d(function(I, S) {
          var N = new FileReader();
          N.onerror = S, N.onloadend = function($) {
            var R = btoa($.target.result || "");
            I({
              __local_forage_encoded_blob: !0,
              data: R,
              type: y.type
            });
          }, N.readAsBinaryString(y);
        });
      }
      function K(y) {
        var I = w(atob(y.data));
        return f([I], { type: y.type });
      }
      function re(y) {
        return y && y.__local_forage_encoded_blob;
      }
      function J(y) {
        var I = this, S = I._initReady().then(function() {
          var N = k[I._dbInfo.name];
          if (N && N.dbReady)
            return N.dbReady;
        });
        return h(S, y, y), S;
      }
      function le(y) {
        T(y);
        for (var I = k[y.name], S = I.forages, N = 0; N < S.length; N++) {
          var $ = S[N];
          $._dbInfo.db && ($._dbInfo.db.close(), $._dbInfo.db = null);
        }
        return y.db = null, L(y).then(function(R) {
          return y.db = R, H(y) ? F(y) : R;
        }).then(function(R) {
          y.db = I.db = R;
          for (var W = 0; W < S.length; W++)
            S[W]._dbInfo.db = R;
        }).catch(function(R) {
          throw E(y, R), R;
        });
      }
      function U(y, I, S, N) {
        N === void 0 && (N = 1);
        try {
          var $ = y.db.transaction(y.storeName, I);
          S(null, $);
        } catch (R) {
          if (N > 0 && (!y.db || R.name === "InvalidStateError" || R.name === "NotFoundError"))
            return d.resolve().then(function() {
              if (!y.db || R.name === "NotFoundError" && !y.db.objectStoreNames.contains(y.storeName) && y.version <= y.db.version)
                return y.db && (y.version = y.db.version + 1), F(y);
            }).then(function() {
              return le(y).then(function() {
                U(y, I, S, N - 1);
              });
            }).catch(S);
          S(R);
        }
      }
      function A() {
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
      function M(y) {
        var I = this, S = {
          db: null
        };
        if (y)
          for (var N in y)
            S[N] = y[N];
        var $ = k[S.name];
        $ || ($ = A(), k[S.name] = $), $.forages.push(I), I._initReady || (I._initReady = I.ready, I.ready = J);
        var R = [];
        function W() {
          return d.resolve();
        }
        for (var G = 0; G < $.forages.length; G++) {
          var Z = $.forages[G];
          Z !== I && R.push(Z._initReady().catch(W));
        }
        var Q = $.forages.slice(0);
        return d.all(R).then(function() {
          return S.db = $.db, L(S);
        }).then(function(te) {
          return S.db = te, H(S, I._defaultConfig.version) ? F(S) : te;
        }).then(function(te) {
          S.db = $.db = te, I._dbInfo = S;
          for (var fe = 0; fe < Q.length; fe++) {
            var Se = Q[fe];
            Se !== I && (Se._dbInfo.db = S.db, Se._dbInfo.version = S.version);
          }
        });
      }
      function z(y, I) {
        var S = this;
        y = g(y);
        var N = new d(function($, R) {
          S.ready().then(function() {
            U(S._dbInfo, b, function(W, G) {
              if (W)
                return R(W);
              try {
                var Z = G.objectStore(S._dbInfo.storeName), Q = Z.get(y);
                Q.onsuccess = function() {
                  var te = Q.result;
                  te === void 0 && (te = null), re(te) && (te = K(te)), $(te);
                }, Q.onerror = function() {
                  R(Q.error);
                };
              } catch (te) {
                R(te);
              }
            });
          }).catch(R);
        });
        return l(N, I), N;
      }
      function ee(y, I) {
        var S = this, N = new d(function($, R) {
          S.ready().then(function() {
            U(S._dbInfo, b, function(W, G) {
              if (W)
                return R(W);
              try {
                var Z = G.objectStore(S._dbInfo.storeName), Q = Z.openCursor(), te = 1;
                Q.onsuccess = function() {
                  var fe = Q.result;
                  if (fe) {
                    var Se = fe.value;
                    re(Se) && (Se = K(Se));
                    var Ie = y(Se, fe.key, te++);
                    Ie !== void 0 ? $(Ie) : fe.continue();
                  } else
                    $();
                }, Q.onerror = function() {
                  R(Q.error);
                };
              } catch (fe) {
                R(fe);
              }
            });
          }).catch(R);
        });
        return l(N, I), N;
      }
      function se(y, I, S) {
        var N = this;
        y = g(y);
        var $ = new d(function(R, W) {
          var G;
          N.ready().then(function() {
            return G = N._dbInfo, v.call(I) === "[object Blob]" ? B(G.db).then(function(Z) {
              return Z ? I : j(I);
            }) : I;
          }).then(function(Z) {
            U(N._dbInfo, x, function(Q, te) {
              if (Q)
                return W(Q);
              try {
                var fe = te.objectStore(N._dbInfo.storeName);
                Z === null && (Z = void 0);
                var Se = fe.put(Z, y);
                te.oncomplete = function() {
                  Z === void 0 && (Z = null), R(Z);
                }, te.onabort = te.onerror = function() {
                  var Ie = Se.error ? Se.error : Se.transaction.error;
                  W(Ie);
                };
              } catch (Ie) {
                W(Ie);
              }
            });
          }).catch(W);
        });
        return l($, S), $;
      }
      function be(y, I) {
        var S = this;
        y = g(y);
        var N = new d(function($, R) {
          S.ready().then(function() {
            U(S._dbInfo, x, function(W, G) {
              if (W)
                return R(W);
              try {
                var Z = G.objectStore(S._dbInfo.storeName), Q = Z.delete(y);
                G.oncomplete = function() {
                  $();
                }, G.onerror = function() {
                  R(Q.error);
                }, G.onabort = function() {
                  var te = Q.error ? Q.error : Q.transaction.error;
                  R(te);
                };
              } catch (te) {
                R(te);
              }
            });
          }).catch(R);
        });
        return l(N, I), N;
      }
      function ie(y) {
        var I = this, S = new d(function(N, $) {
          I.ready().then(function() {
            U(I._dbInfo, x, function(R, W) {
              if (R)
                return $(R);
              try {
                var G = W.objectStore(I._dbInfo.storeName), Z = G.clear();
                W.oncomplete = function() {
                  N();
                }, W.onabort = W.onerror = function() {
                  var Q = Z.error ? Z.error : Z.transaction.error;
                  $(Q);
                };
              } catch (Q) {
                $(Q);
              }
            });
          }).catch($);
        });
        return l(S, y), S;
      }
      function ve(y) {
        var I = this, S = new d(function(N, $) {
          I.ready().then(function() {
            U(I._dbInfo, b, function(R, W) {
              if (R)
                return $(R);
              try {
                var G = W.objectStore(I._dbInfo.storeName), Z = G.count();
                Z.onsuccess = function() {
                  N(Z.result);
                }, Z.onerror = function() {
                  $(Z.error);
                };
              } catch (Q) {
                $(Q);
              }
            });
          }).catch($);
        });
        return l(S, y), S;
      }
      function ye(y, I) {
        var S = this, N = new d(function($, R) {
          if (y < 0) {
            $(null);
            return;
          }
          S.ready().then(function() {
            U(S._dbInfo, b, function(W, G) {
              if (W)
                return R(W);
              try {
                var Z = G.objectStore(S._dbInfo.storeName), Q = !1, te = Z.openKeyCursor();
                te.onsuccess = function() {
                  var fe = te.result;
                  if (!fe) {
                    $(null);
                    return;
                  }
                  y === 0 || Q ? $(fe.key) : (Q = !0, fe.advance(y));
                }, te.onerror = function() {
                  R(te.error);
                };
              } catch (fe) {
                R(fe);
              }
            });
          }).catch(R);
        });
        return l(N, I), N;
      }
      function Ge(y) {
        var I = this, S = new d(function(N, $) {
          I.ready().then(function() {
            U(I._dbInfo, b, function(R, W) {
              if (R)
                return $(R);
              try {
                var G = W.objectStore(I._dbInfo.storeName), Z = G.openKeyCursor(), Q = [];
                Z.onsuccess = function() {
                  var te = Z.result;
                  if (!te) {
                    N(Q);
                    return;
                  }
                  Q.push(te.key), te.continue();
                }, Z.onerror = function() {
                  $(Z.error);
                };
              } catch (te) {
                $(te);
              }
            });
          }).catch($);
        });
        return l(S, y), S;
      }
      function Ze(y, I) {
        I = p.apply(this, arguments);
        var S = this.config();
        y = typeof y != "function" && y || {}, y.name || (y.name = y.name || S.name, y.storeName = y.storeName || S.storeName);
        var N = this, $;
        if (!y.name)
          $ = d.reject("Invalid arguments");
        else {
          var R = y.name === S.name && N._dbInfo.db, W = R ? d.resolve(N._dbInfo.db) : L(y).then(function(G) {
            var Z = k[y.name], Q = Z.forages;
            Z.db = G;
            for (var te = 0; te < Q.length; te++)
              Q[te]._dbInfo.db = G;
            return G;
          });
          y.storeName ? $ = W.then(function(G) {
            if (G.objectStoreNames.contains(y.storeName)) {
              var Z = G.version + 1;
              T(y);
              var Q = k[y.name], te = Q.forages;
              G.close();
              for (var fe = 0; fe < te.length; fe++) {
                var Se = te[fe];
                Se._dbInfo.db = null, Se._dbInfo.version = Z;
              }
              var Ie = new d(function(Oe, Ue) {
                var He = u.open(y.name, Z);
                He.onerror = function(dt) {
                  var ur = He.result;
                  ur.close(), Ue(dt);
                }, He.onupgradeneeded = function() {
                  var dt = He.result;
                  dt.deleteObjectStore(y.storeName);
                }, He.onsuccess = function() {
                  var dt = He.result;
                  dt.close(), Oe(dt);
                };
              });
              return Ie.then(function(Oe) {
                Q.db = Oe;
                for (var Ue = 0; Ue < te.length; Ue++) {
                  var He = te[Ue];
                  He._dbInfo.db = Oe, C(He._dbInfo);
                }
              }).catch(function(Oe) {
                throw (E(y, Oe) || d.resolve()).catch(function() {
                }), Oe;
              });
            }
          }) : $ = W.then(function(G) {
            T(y);
            var Z = k[y.name], Q = Z.forages;
            G.close();
            for (var te = 0; te < Q.length; te++) {
              var fe = Q[te];
              fe._dbInfo.db = null;
            }
            var Se = new d(function(Ie, Oe) {
              var Ue = u.deleteDatabase(y.name);
              Ue.onerror = function() {
                var He = Ue.result;
                He && He.close(), Oe(Ue.error);
              }, Ue.onblocked = function() {
                console.warn('dropInstance blocked for database "' + y.name + '" until all open connections are closed');
              }, Ue.onsuccess = function() {
                var He = Ue.result;
                He && He.close(), Ie(He);
              };
            });
            return Se.then(function(Ie) {
              Z.db = Ie;
              for (var Oe = 0; Oe < Q.length; Oe++) {
                var Ue = Q[Oe];
                C(Ue._dbInfo);
              }
            }).catch(function(Ie) {
              throw (E(y, Ie) || d.resolve()).catch(function() {
              }), Ie;
            });
          });
        }
        return l($, I), $;
      }
      var ze = {
        _driver: "asyncStorage",
        _initStorage: M,
        _support: c(),
        iterate: ee,
        getItem: z,
        setItem: se,
        removeItem: be,
        clear: ie,
        length: ve,
        key: ye,
        keys: Ge,
        dropInstance: Ze
      };
      function Te() {
        return typeof openDatabase == "function";
      }
      var $e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", nt = "~~local_forage_type~", Fe = /^~~local_forage_type~([^~]+)~/, We = "__lfsc__:", xt = We.length, ct = "arbf", je = "blob", Xe = "si08", st = "ui08", Ot = "uic8", Tt = "si16", yt = "si32", q = "ur16", X = "ui32", P = "fl32", de = "fl64", Ae = xt + ct.length, Qe = Object.prototype.toString;
      function mt(y) {
        var I = y.length * 0.75, S = y.length, N, $ = 0, R, W, G, Z;
        y[y.length - 1] === "=" && (I--, y[y.length - 2] === "=" && I--);
        var Q = new ArrayBuffer(I), te = new Uint8Array(Q);
        for (N = 0; N < S; N += 4)
          R = $e.indexOf(y[N]), W = $e.indexOf(y[N + 1]), G = $e.indexOf(y[N + 2]), Z = $e.indexOf(y[N + 3]), te[$++] = R << 2 | W >> 4, te[$++] = (W & 15) << 4 | G >> 2, te[$++] = (G & 3) << 6 | Z & 63;
        return Q;
      }
      function ft(y) {
        var I = new Uint8Array(y), S = "", N;
        for (N = 0; N < I.length; N += 3)
          S += $e[I[N] >> 2], S += $e[(I[N] & 3) << 4 | I[N + 1] >> 4], S += $e[(I[N + 1] & 15) << 2 | I[N + 2] >> 6], S += $e[I[N + 2] & 63];
        return I.length % 3 === 2 ? S = S.substring(0, S.length - 1) + "=" : I.length % 3 === 1 && (S = S.substring(0, S.length - 2) + "=="), S;
      }
      function Vt(y, I) {
        var S = "";
        if (y && (S = Qe.call(y)), y && (S === "[object ArrayBuffer]" || y.buffer && Qe.call(y.buffer) === "[object ArrayBuffer]")) {
          var N, $ = We;
          y instanceof ArrayBuffer ? (N = y, $ += ct) : (N = y.buffer, S === "[object Int8Array]" ? $ += Xe : S === "[object Uint8Array]" ? $ += st : S === "[object Uint8ClampedArray]" ? $ += Ot : S === "[object Int16Array]" ? $ += Tt : S === "[object Uint16Array]" ? $ += q : S === "[object Int32Array]" ? $ += yt : S === "[object Uint32Array]" ? $ += X : S === "[object Float32Array]" ? $ += P : S === "[object Float64Array]" ? $ += de : I(new Error("Failed to get type for BinaryArray"))), I($ + ft(N));
        } else if (S === "[object Blob]") {
          var R = new FileReader();
          R.onload = function() {
            var W = nt + y.type + "~" + ft(this.result);
            I(We + je + W);
          }, R.readAsArrayBuffer(y);
        } else
          try {
            I(JSON.stringify(y));
          } catch (W) {
            console.error("Couldn't convert value into a JSON string: ", y), I(null, W);
          }
      }
      function qe(y) {
        if (y.substring(0, xt) !== We)
          return JSON.parse(y);
        var I = y.substring(Ae), S = y.substring(xt, Ae), N;
        if (S === je && Fe.test(I)) {
          var $ = I.match(Fe);
          N = $[1], I = I.substring($[0].length);
        }
        var R = mt(I);
        switch (S) {
          case ct:
            return R;
          case je:
            return f([R], { type: N });
          case Xe:
            return new Int8Array(R);
          case st:
            return new Uint8Array(R);
          case Ot:
            return new Uint8ClampedArray(R);
          case Tt:
            return new Int16Array(R);
          case q:
            return new Uint16Array(R);
          case yt:
            return new Int32Array(R);
          case X:
            return new Uint32Array(R);
          case P:
            return new Float32Array(R);
          case de:
            return new Float64Array(R);
          default:
            throw new Error("Unkown type: " + S);
        }
      }
      var et = {
        serialize: Vt,
        deserialize: qe,
        stringToBuffer: mt,
        bufferToString: ft
      };
      function ar(y, I, S, N) {
        y.executeSql("CREATE TABLE IF NOT EXISTS " + I.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], S, N);
      }
      function Wn(y) {
        var I = this, S = {
          db: null
        };
        if (y)
          for (var N in y)
            S[N] = typeof y[N] != "string" ? y[N].toString() : y[N];
        var $ = new d(function(R, W) {
          try {
            S.db = openDatabase(S.name, String(S.version), S.description, S.size);
          } catch (G) {
            return W(G);
          }
          S.db.transaction(function(G) {
            ar(G, S, function() {
              I._dbInfo = S, R();
            }, function(Z, Q) {
              W(Q);
            });
          }, W);
        });
        return S.serializer = et, $;
      }
      function _t(y, I, S, N, $, R) {
        y.executeSql(S, N, $, function(W, G) {
          G.code === G.SYNTAX_ERR ? W.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [I.storeName], function(Z, Q) {
            Q.rows.length ? R(Z, G) : ar(Z, I, function() {
              Z.executeSql(S, N, $, R);
            }, R);
          }, R) : R(W, G);
        }, R);
      }
      function jn(y, I) {
        var S = this;
        y = g(y);
        var N = new d(function($, R) {
          S.ready().then(function() {
            var W = S._dbInfo;
            W.db.transaction(function(G) {
              _t(G, W, "SELECT * FROM " + W.storeName + " WHERE key = ? LIMIT 1", [y], function(Z, Q) {
                var te = Q.rows.length ? Q.rows.item(0).value : null;
                te && (te = W.serializer.deserialize(te)), $(te);
              }, function(Z, Q) {
                R(Q);
              });
            });
          }).catch(R);
        });
        return l(N, I), N;
      }
      function Br(y, I) {
        var S = this, N = new d(function($, R) {
          S.ready().then(function() {
            var W = S._dbInfo;
            W.db.transaction(function(G) {
              _t(G, W, "SELECT * FROM " + W.storeName, [], function(Z, Q) {
                for (var te = Q.rows, fe = te.length, Se = 0; Se < fe; Se++) {
                  var Ie = te.item(Se), Oe = Ie.value;
                  if (Oe && (Oe = W.serializer.deserialize(Oe)), Oe = y(Oe, Ie.key, Se + 1), Oe !== void 0) {
                    $(Oe);
                    return;
                  }
                }
                $();
              }, function(Z, Q) {
                R(Q);
              });
            });
          }).catch(R);
        });
        return l(N, I), N;
      }
      function Ar(y, I, S, N) {
        var $ = this;
        y = g(y);
        var R = new d(function(W, G) {
          $.ready().then(function() {
            I === void 0 && (I = null);
            var Z = I, Q = $._dbInfo;
            Q.serializer.serialize(I, function(te, fe) {
              fe ? G(fe) : Q.db.transaction(function(Se) {
                _t(Se, Q, "INSERT OR REPLACE INTO " + Q.storeName + " (key, value) VALUES (?, ?)", [y, te], function() {
                  W(Z);
                }, function(Ie, Oe) {
                  G(Oe);
                });
              }, function(Se) {
                if (Se.code === Se.QUOTA_ERR) {
                  if (N > 0) {
                    W(Ar.apply($, [y, Z, S, N - 1]));
                    return;
                  }
                  G(Se);
                }
              });
            });
          }).catch(G);
        });
        return l(R, S), R;
      }
      function Yn(y, I, S) {
        return Ar.apply(this, [y, I, S, 1]);
      }
      function Kn(y, I) {
        var S = this;
        y = g(y);
        var N = new d(function($, R) {
          S.ready().then(function() {
            var W = S._dbInfo;
            W.db.transaction(function(G) {
              _t(G, W, "DELETE FROM " + W.storeName + " WHERE key = ?", [y], function() {
                $();
              }, function(Z, Q) {
                R(Q);
              });
            });
          }).catch(R);
        });
        return l(N, I), N;
      }
      function Ir(y) {
        var I = this, S = new d(function(N, $) {
          I.ready().then(function() {
            var R = I._dbInfo;
            R.db.transaction(function(W) {
              _t(W, R, "DELETE FROM " + R.storeName, [], function() {
                N();
              }, function(G, Z) {
                $(Z);
              });
            });
          }).catch($);
        });
        return l(S, y), S;
      }
      function Gn(y) {
        var I = this, S = new d(function(N, $) {
          I.ready().then(function() {
            var R = I._dbInfo;
            R.db.transaction(function(W) {
              _t(W, R, "SELECT COUNT(key) as c FROM " + R.storeName, [], function(G, Z) {
                var Q = Z.rows.item(0).c;
                N(Q);
              }, function(G, Z) {
                $(Z);
              });
            });
          }).catch($);
        });
        return l(S, y), S;
      }
      function Zn(y, I) {
        var S = this, N = new d(function($, R) {
          S.ready().then(function() {
            var W = S._dbInfo;
            W.db.transaction(function(G) {
              _t(G, W, "SELECT key FROM " + W.storeName + " WHERE id = ? LIMIT 1", [y + 1], function(Z, Q) {
                var te = Q.rows.length ? Q.rows.item(0).key : null;
                $(te);
              }, function(Z, Q) {
                R(Q);
              });
            });
          }).catch(R);
        });
        return l(N, I), N;
      }
      function Or(y) {
        var I = this, S = new d(function(N, $) {
          I.ready().then(function() {
            var R = I._dbInfo;
            R.db.transaction(function(W) {
              _t(W, R, "SELECT key FROM " + R.storeName, [], function(G, Z) {
                for (var Q = [], te = 0; te < Z.rows.length; te++)
                  Q.push(Z.rows.item(te).key);
                N(Q);
              }, function(G, Z) {
                $(Z);
              });
            });
          }).catch($);
        });
        return l(S, y), S;
      }
      function Xn(y) {
        return new d(function(I, S) {
          y.transaction(function(N) {
            N.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function($, R) {
              for (var W = [], G = 0; G < R.rows.length; G++)
                W.push(R.rows.item(G).name);
              I({
                db: y,
                storeNames: W
              });
            }, function($, R) {
              S(R);
            });
          }, function(N) {
            S(N);
          });
        });
      }
      function Tr(y, I) {
        I = p.apply(this, arguments);
        var S = this.config();
        y = typeof y != "function" && y || {}, y.name || (y.name = y.name || S.name, y.storeName = y.storeName || S.storeName);
        var N = this, $;
        return y.name ? $ = new d(function(R) {
          var W;
          y.name === S.name ? W = N._dbInfo.db : W = openDatabase(y.name, "", "", 0), y.storeName ? R({
            db: W,
            storeNames: [y.storeName]
          }) : R(Xn(W));
        }).then(function(R) {
          return new d(function(W, G) {
            R.db.transaction(function(Z) {
              function Q(Ie) {
                return new d(function(Oe, Ue) {
                  Z.executeSql("DROP TABLE IF EXISTS " + Ie, [], function() {
                    Oe();
                  }, function(He, dt) {
                    Ue(dt);
                  });
                });
              }
              for (var te = [], fe = 0, Se = R.storeNames.length; fe < Se; fe++)
                te.push(Q(R.storeNames[fe]));
              d.all(te).then(function() {
                W();
              }).catch(function(Ie) {
                G(Ie);
              });
            }, function(Z) {
              G(Z);
            });
          });
        }) : $ = d.reject("Invalid arguments"), l($, I), $;
      }
      var at = {
        _driver: "webSQLStorage",
        _initStorage: Wn,
        _support: Te(),
        iterate: Br,
        getItem: jn,
        setItem: Yn,
        removeItem: Kn,
        clear: Ir,
        length: Gn,
        key: Zn,
        keys: Or,
        dropInstance: Tr
      };
      function Et() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function cr(y, I) {
        var S = y.name + "/";
        return y.storeName !== I.storeName && (S += y.storeName + "/"), S;
      }
      function Qn() {
        var y = "_localforage_support_test";
        try {
          return localStorage.setItem(y, !0), localStorage.removeItem(y), !1;
        } catch {
          return !0;
        }
      }
      function Bs() {
        return !Qn() || localStorage.length > 0;
      }
      function As(y) {
        var I = this, S = {};
        if (y)
          for (var N in y)
            S[N] = y[N];
        return S.keyPrefix = cr(y, I._defaultConfig), Bs() ? (I._dbInfo = S, S.serializer = et, d.resolve()) : d.reject();
      }
      function Is(y) {
        var I = this, S = I.ready().then(function() {
          for (var N = I._dbInfo.keyPrefix, $ = localStorage.length - 1; $ >= 0; $--) {
            var R = localStorage.key($);
            R.indexOf(N) === 0 && localStorage.removeItem(R);
          }
        });
        return l(S, y), S;
      }
      function Os(y, I) {
        var S = this;
        y = g(y);
        var N = S.ready().then(function() {
          var $ = S._dbInfo, R = localStorage.getItem($.keyPrefix + y);
          return R && (R = $.serializer.deserialize(R)), R;
        });
        return l(N, I), N;
      }
      function Ts(y, I) {
        var S = this, N = S.ready().then(function() {
          for (var $ = S._dbInfo, R = $.keyPrefix, W = R.length, G = localStorage.length, Z = 1, Q = 0; Q < G; Q++) {
            var te = localStorage.key(Q);
            if (te.indexOf(R) === 0) {
              var fe = localStorage.getItem(te);
              if (fe && (fe = $.serializer.deserialize(fe)), fe = y(fe, te.substring(W), Z++), fe !== void 0)
                return fe;
            }
          }
        });
        return l(N, I), N;
      }
      function Rs(y, I) {
        var S = this, N = S.ready().then(function() {
          var $ = S._dbInfo, R;
          try {
            R = localStorage.key(y);
          } catch {
            R = null;
          }
          return R && (R = R.substring($.keyPrefix.length)), R;
        });
        return l(N, I), N;
      }
      function Ls(y) {
        var I = this, S = I.ready().then(function() {
          for (var N = I._dbInfo, $ = localStorage.length, R = [], W = 0; W < $; W++) {
            var G = localStorage.key(W);
            G.indexOf(N.keyPrefix) === 0 && R.push(G.substring(N.keyPrefix.length));
          }
          return R;
        });
        return l(S, y), S;
      }
      function Ns(y) {
        var I = this, S = I.keys().then(function(N) {
          return N.length;
        });
        return l(S, y), S;
      }
      function Ds(y, I) {
        var S = this;
        y = g(y);
        var N = S.ready().then(function() {
          var $ = S._dbInfo;
          localStorage.removeItem($.keyPrefix + y);
        });
        return l(N, I), N;
      }
      function $s(y, I, S) {
        var N = this;
        y = g(y);
        var $ = N.ready().then(function() {
          I === void 0 && (I = null);
          var R = I;
          return new d(function(W, G) {
            var Z = N._dbInfo;
            Z.serializer.serialize(I, function(Q, te) {
              if (te)
                G(te);
              else
                try {
                  localStorage.setItem(Z.keyPrefix + y, Q), W(R);
                } catch (fe) {
                  (fe.name === "QuotaExceededError" || fe.name === "NS_ERROR_DOM_QUOTA_REACHED") && G(fe), G(fe);
                }
            });
          });
        });
        return l($, S), $;
      }
      function Ps(y, I) {
        if (I = p.apply(this, arguments), y = typeof y != "function" && y || {}, !y.name) {
          var S = this.config();
          y.name = y.name || S.name, y.storeName = y.storeName || S.storeName;
        }
        var N = this, $;
        return y.name ? $ = new d(function(R) {
          y.storeName ? R(cr(y, N._defaultConfig)) : R(y.name + "/");
        }).then(function(R) {
          for (var W = localStorage.length - 1; W >= 0; W--) {
            var G = localStorage.key(W);
            G.indexOf(R) === 0 && localStorage.removeItem(G);
          }
        }) : $ = d.reject("Invalid arguments"), l($, I), $;
      }
      var Ms = {
        _driver: "localStorageWrapper",
        _initStorage: As,
        _support: Et(),
        iterate: Ts,
        getItem: Os,
        setItem: $s,
        removeItem: Ds,
        clear: Is,
        length: Ns,
        key: Rs,
        keys: Ls,
        dropInstance: Ps
      }, zs = function(I, S) {
        return I === S || typeof I == "number" && typeof S == "number" && isNaN(I) && isNaN(S);
      }, Hs = function(I, S) {
        for (var N = I.length, $ = 0; $ < N; ) {
          if (zs(I[$], S))
            return !0;
          $++;
        }
        return !1;
      }, Ki = Array.isArray || function(y) {
        return Object.prototype.toString.call(y) === "[object Array]";
      }, lr = {}, Gi = {}, Qt = {
        INDEXEDDB: ze,
        WEBSQL: at,
        LOCALSTORAGE: Ms
      }, Fs = [Qt.INDEXEDDB._driver, Qt.WEBSQL._driver, Qt.LOCALSTORAGE._driver], Rr = ["dropInstance"], Jn = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Rr), qs = {
        description: "",
        driver: Fs.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function Us(y, I) {
        y[I] = function() {
          var S = arguments;
          return y.ready().then(function() {
            return y[I].apply(y, S);
          });
        };
      }
      function ei() {
        for (var y = 1; y < arguments.length; y++) {
          var I = arguments[y];
          if (I)
            for (var S in I)
              I.hasOwnProperty(S) && (Ki(I[S]) ? arguments[0][S] = I[S].slice() : arguments[0][S] = I[S]);
        }
        return arguments[0];
      }
      var Vs = function() {
        function y(I) {
          a(this, y);
          for (var S in Qt)
            if (Qt.hasOwnProperty(S)) {
              var N = Qt[S], $ = N._driver;
              this[S] = $, lr[$] || this.defineDriver(N);
            }
          this._defaultConfig = ei({}, qs), this._config = ei({}, this._defaultConfig, I), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return y.prototype.config = function(S) {
          if ((typeof S > "u" ? "undefined" : o(S)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var N in S) {
              if (N === "storeName" && (S[N] = S[N].replace(/\W/g, "_")), N === "version" && typeof S[N] != "number")
                return new Error("Database version must be a number.");
              this._config[N] = S[N];
            }
            return "driver" in S && S.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof S == "string" ? this._config[S] : this._config;
        }, y.prototype.defineDriver = function(S, N, $) {
          var R = new d(function(W, G) {
            try {
              var Z = S._driver, Q = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!S._driver) {
                G(Q);
                return;
              }
              for (var te = Jn.concat("_initStorage"), fe = 0, Se = te.length; fe < Se; fe++) {
                var Ie = te[fe], Oe = !Hs(Rr, Ie);
                if ((Oe || S[Ie]) && typeof S[Ie] != "function") {
                  G(Q);
                  return;
                }
              }
              var Ue = function() {
                for (var ur = function(Ys) {
                  return function() {
                    var Ks = new Error("Method " + Ys + " is not implemented by the current driver"), Zi = d.reject(Ks);
                    return l(Zi, arguments[arguments.length - 1]), Zi;
                  };
                }, ti = 0, js = Rr.length; ti < js; ti++) {
                  var ri = Rr[ti];
                  S[ri] || (S[ri] = ur(ri));
                }
              };
              Ue();
              var He = function(ur) {
                lr[Z] && console.info("Redefining LocalForage driver: " + Z), lr[Z] = S, Gi[Z] = ur, W();
              };
              "_support" in S ? S._support && typeof S._support == "function" ? S._support().then(He, G) : He(!!S._support) : He(!0);
            } catch (dt) {
              G(dt);
            }
          });
          return h(R, N, $), R;
        }, y.prototype.driver = function() {
          return this._driver || null;
        }, y.prototype.getDriver = function(S, N, $) {
          var R = lr[S] ? d.resolve(lr[S]) : d.reject(new Error("Driver not found."));
          return h(R, N, $), R;
        }, y.prototype.getSerializer = function(S) {
          var N = d.resolve(et);
          return h(N, S), N;
        }, y.prototype.ready = function(S) {
          var N = this, $ = N._driverSet.then(function() {
            return N._ready === null && (N._ready = N._initDriver()), N._ready;
          });
          return h($, S, S), $;
        }, y.prototype.setDriver = function(S, N, $) {
          var R = this;
          Ki(S) || (S = [S]);
          var W = this._getSupportedDrivers(S);
          function G() {
            R._config.driver = R.driver();
          }
          function Z(fe) {
            return R._extend(fe), G(), R._ready = R._initStorage(R._config), R._ready;
          }
          function Q(fe) {
            return function() {
              var Se = 0;
              function Ie() {
                for (; Se < fe.length; ) {
                  var Oe = fe[Se];
                  return Se++, R._dbInfo = null, R._ready = null, R.getDriver(Oe).then(Z).catch(Ie);
                }
                G();
                var Ue = new Error("No available storage method found.");
                return R._driverSet = d.reject(Ue), R._driverSet;
              }
              return Ie();
            };
          }
          var te = this._driverSet !== null ? this._driverSet.catch(function() {
            return d.resolve();
          }) : d.resolve();
          return this._driverSet = te.then(function() {
            var fe = W[0];
            return R._dbInfo = null, R._ready = null, R.getDriver(fe).then(function(Se) {
              R._driver = Se._driver, G(), R._wrapLibraryMethodsWithReady(), R._initDriver = Q(W);
            });
          }).catch(function() {
            G();
            var fe = new Error("No available storage method found.");
            return R._driverSet = d.reject(fe), R._driverSet;
          }), h(this._driverSet, N, $), this._driverSet;
        }, y.prototype.supports = function(S) {
          return !!Gi[S];
        }, y.prototype._extend = function(S) {
          ei(this, S);
        }, y.prototype._getSupportedDrivers = function(S) {
          for (var N = [], $ = 0, R = S.length; $ < R; $++) {
            var W = S[$];
            this.supports(W) && N.push(W);
          }
          return N;
        }, y.prototype._wrapLibraryMethodsWithReady = function() {
          for (var S = 0, N = Jn.length; S < N; S++)
            Us(this, Jn[S]);
        }, y.prototype.createInstance = function(S) {
          return new y(S);
        }, y;
      }(), Ws = new Vs();
      n.exports = Ws;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(Vc);
const Wc = pi, At = /* @__PURE__ */ Object.create(null);
At.open = "0";
At.close = "1";
At.ping = "2";
At.pong = "3";
At.message = "4";
At.upgrade = "5";
At.noop = "6";
const Hr = /* @__PURE__ */ Object.create(null);
Object.keys(At).forEach((e) => {
  Hr[At[e]] = e;
});
const jc = { type: "error", data: "parser error" }, Yc = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Kc = typeof ArrayBuffer == "function", Gc = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Po = ({ type: e, data: r }, t, n) => Yc && r instanceof Blob ? t ? n(r) : W0(r, n) : Kc && (r instanceof ArrayBuffer || Gc(r)) ? t ? n(r) : W0(new Blob([r]), n) : n(At[e] + (r || "")), W0 = (e, r) => {
  const t = new FileReader();
  return t.onload = function() {
    const n = t.result.split(",")[1];
    r("b" + (n || ""));
  }, t.readAsDataURL(e);
}, j0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", gr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < j0.length; e++)
  gr[j0.charCodeAt(e)] = e;
const Zc = (e) => {
  let r = e.length * 0.75, t = e.length, n, i = 0, o, a, s, u;
  e[e.length - 1] === "=" && (r--, e[e.length - 2] === "=" && r--);
  const c = new ArrayBuffer(r), f = new Uint8Array(c);
  for (n = 0; n < t; n += 4)
    o = gr[e.charCodeAt(n)], a = gr[e.charCodeAt(n + 1)], s = gr[e.charCodeAt(n + 2)], u = gr[e.charCodeAt(n + 3)], f[i++] = o << 2 | a >> 4, f[i++] = (a & 15) << 4 | s >> 2, f[i++] = (s & 3) << 6 | u & 63;
  return c;
}, Xc = typeof ArrayBuffer == "function", Mo = (e, r) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: zo(e, r)
    };
  const t = e.charAt(0);
  return t === "b" ? {
    type: "message",
    data: Qc(e.substring(1), r)
  } : Hr[t] ? e.length > 1 ? {
    type: Hr[t],
    data: e.substring(1)
  } : {
    type: Hr[t]
  } : jc;
}, Qc = (e, r) => {
  if (Xc) {
    const t = Zc(e);
    return zo(t, r);
  } else
    return { base64: !0, data: e };
}, zo = (e, r) => {
  switch (r) {
    case "blob":
      return e instanceof ArrayBuffer ? new Blob([e]) : e;
    case "arraybuffer":
    default:
      return e;
  }
}, Ho = String.fromCharCode(30), Jc = (e, r) => {
  const t = e.length, n = new Array(t);
  let i = 0;
  e.forEach((o, a) => {
    Po(o, !1, (s) => {
      n[a] = s, ++i === t && r(n.join(Ho));
    });
  });
}, el = (e, r) => {
  const t = e.split(Ho), n = [];
  for (let i = 0; i < t.length; i++) {
    const o = Mo(t[i], r);
    if (n.push(o), o.type === "error")
      break;
  }
  return n;
}, Fo = 4;
function Ve(e) {
  if (e)
    return tl(e);
}
function tl(e) {
  for (var r in Ve.prototype)
    e[r] = Ve.prototype[r];
  return e;
}
Ve.prototype.on = Ve.prototype.addEventListener = function(e, r) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(r), this;
};
Ve.prototype.once = function(e, r) {
  function t() {
    this.off(e, t), r.apply(this, arguments);
  }
  return t.fn = r, this.on(e, t), this;
};
Ve.prototype.off = Ve.prototype.removeListener = Ve.prototype.removeAllListeners = Ve.prototype.removeEventListener = function(e, r) {
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
Ve.prototype.emit = function(e) {
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
Ve.prototype.emitReserved = Ve.prototype.emit;
Ve.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
Ve.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const vt = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();
function qo(e, ...r) {
  return r.reduce((t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t), {});
}
const rl = vt.setTimeout, nl = vt.clearTimeout;
function Mn(e, r) {
  r.useNativeTimers ? (e.setTimeoutFn = rl.bind(vt), e.clearTimeoutFn = nl.bind(vt)) : (e.setTimeoutFn = vt.setTimeout.bind(vt), e.clearTimeoutFn = vt.clearTimeout.bind(vt));
}
const il = 1.33;
function ol(e) {
  return typeof e == "string" ? sl(e) : Math.ceil((e.byteLength || e.size) * il);
}
function sl(e) {
  let r = 0, t = 0;
  for (let n = 0, i = e.length; n < i; n++)
    r = e.charCodeAt(n), r < 128 ? t += 1 : r < 2048 ? t += 2 : r < 55296 || r >= 57344 ? t += 3 : (n++, t += 4);
  return t;
}
class al extends Error {
  constructor(r, t, n) {
    super(r), this.description = t, this.context = n, this.type = "TransportError";
  }
}
class Uo extends Ve {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(r) {
    super(), this.writable = !1, Mn(this, r), this.opts = r, this.query = r.query, this.socket = r.socket;
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
    return super.emitReserved("error", new al(r, t, n)), this;
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
    const t = Mo(r, this.socket.binaryType);
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
const Vo = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), vi = 64, cl = {};
let Y0 = 0, Nr = 0, K0;
function G0(e) {
  let r = "";
  do
    r = Vo[e % vi] + r, e = Math.floor(e / vi);
  while (e > 0);
  return r;
}
function Wo() {
  const e = G0(+/* @__PURE__ */ new Date());
  return e !== K0 ? (Y0 = 0, K0 = e) : e + "." + G0(Y0++);
}
for (; Nr < vi; Nr++)
  cl[Vo[Nr]] = Nr;
function jo(e) {
  let r = "";
  for (let t in e)
    e.hasOwnProperty(t) && (r.length && (r += "&"), r += encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
  return r;
}
function ll(e) {
  let r = {}, t = e.split("&");
  for (let n = 0, i = t.length; n < i; n++) {
    let o = t[n].split("=");
    r[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return r;
}
let Yo = !1;
try {
  Yo = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const ul = Yo;
function Ko(e) {
  const r = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!r || ul))
      return new XMLHttpRequest();
  } catch {
  }
  if (!r)
    try {
      return new vt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function fl() {
}
const dl = function() {
  return new Ko({
    xdomain: !1
  }).responseType != null;
}();
class hl extends Uo {
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
    this.supportsBinary = dl && !t;
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
    el(r, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
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
    this.writable = !1, Jc(r, (t) => {
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
    this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = Wo()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.opts.port && (t === "https" && Number(this.opts.port) !== 443 || t === "http" && Number(this.opts.port) !== 80) && (n = ":" + this.opts.port);
    const i = jo(r), o = this.opts.hostname.indexOf(":") !== -1;
    return t + "://" + (o ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(r = {}) {
    return Object.assign(r, { xd: this.xd, xs: this.xs }, this.opts), new Bt(this.uri(), r);
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
class Bt extends Ve {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(r, t) {
    super(), Mn(this, t), this.opts = t, this.method = t.method || "GET", this.uri = r, this.async = t.async !== !1, this.data = t.data !== void 0 ? t.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    const r = qo(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    r.xdomain = !!this.opts.xd, r.xscheme = !!this.opts.xs;
    const t = this.xhr = new Ko(r);
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
    typeof document < "u" && (this.index = Bt.requestsCount++, Bt.requests[this.index] = this);
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
      if (this.xhr.onreadystatechange = fl, r)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Bt.requests[this.index], this.xhr = null;
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
Bt.requestsCount = 0;
Bt.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Z0);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in vt ? "pagehide" : "unload";
    addEventListener(e, Z0, !1);
  }
}
function Z0() {
  for (let e in Bt.requests)
    Bt.requests.hasOwnProperty(e) && Bt.requests[e].abort();
}
const Go = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? (r) => Promise.resolve().then(r) : (r, t) => t(r, 0))(), Dr = vt.WebSocket || vt.MozWebSocket, X0 = !0, pl = "arraybuffer", Q0 = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class vl extends Uo {
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
    const r = this.uri(), t = this.opts.protocols, n = Q0 ? {} : qo(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = X0 && !Q0 ? t ? new Dr(r, t) : new Dr(r) : new Dr(r, t, n);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this.ws.binaryType = this.socket.binaryType || pl, this.addEventListeners();
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
      Po(n, this.supportsBinary, (o) => {
        const a = {};
        try {
          X0 && this.ws.send(o);
        } catch {
        }
        i && Go(() => {
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
    this.opts.port && (t === "wss" && Number(this.opts.port) !== 443 || t === "ws" && Number(this.opts.port) !== 80) && (n = ":" + this.opts.port), this.opts.timestampRequests && (r[this.opts.timestampParam] = Wo()), this.supportsBinary || (r.b64 = 1);
    const i = jo(r), o = this.opts.hostname.indexOf(":") !== -1;
    return t + "://" + (o ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!Dr;
  }
}
const gl = {
  websocket: vl,
  polling: hl
}, bl = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, xl = [
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
function gi(e) {
  const r = e, t = e.indexOf("["), n = e.indexOf("]");
  t != -1 && n != -1 && (e = e.substring(0, t) + e.substring(t, n).replace(/:/g, ";") + e.substring(n, e.length));
  let i = bl.exec(e || ""), o = {}, a = 14;
  for (; a--; )
    o[xl[a]] = i[a] || "";
  return t != -1 && n != -1 && (o.source = r, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"), o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o.ipv6uri = !0), o.pathNames = yl(o, o.path), o.queryKey = ml(o, o.query), o;
}
function yl(e, r) {
  const t = /\/{2,9}/g, n = r.replace(t, "/").split("/");
  return (r.slice(0, 1) == "/" || r.length === 0) && n.splice(0, 1), r.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function ml(e, r) {
  const t = {};
  return r.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, i, o) {
    i && (t[i] = o);
  }), t;
}
let Zo = class Jt extends Ve {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(r, t = {}) {
    super(), this.writeBuffer = [], r && typeof r == "object" && (t = r, r = null), r ? (r = gi(r), t.hostname = r.host, t.secure = r.protocol === "https" || r.protocol === "wss", t.port = r.port, r.query && (t.query = r.query)) : t.host && (t.hostname = gi(t.host).host), Mn(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = t.transports || ["polling", "websocket"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
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
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = ll(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
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
    t.EIO = Fo, t.transport = r, this.id && (t.sid = this.id);
    const n = Object.assign({}, this.opts.transportOptions[r], this.opts, {
      query: t,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new gl[r](n);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let r;
    if (this.opts.rememberUpgrade && Jt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
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
    Jt.priorWebsocketSuccess = !1;
    const i = () => {
      n || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (d) => {
        if (!n)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            Jt.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (f(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
            });
          } else {
            const l = new Error("probe error");
            l.transport = t.name, this.emitReserved("upgradeError", l);
          }
      }));
    };
    function o() {
      n || (n = !0, f(), t.close(), t = null);
    }
    const a = (d) => {
      const l = new Error("probe error: " + d);
      l.transport = t.name, o(), this.emitReserved("upgradeError", l);
    };
    function s() {
      a("transport closed");
    }
    function u() {
      a("socket closed");
    }
    function c(d) {
      t && d.name !== t.name && o();
    }
    const f = () => {
      t.removeListener("open", i), t.removeListener("error", a), t.removeListener("close", s), this.off("close", u), this.off("upgrading", c);
    };
    t.once("open", i), t.once("error", a), t.once("close", s), this.once("close", u), this.once("upgrading", c), t.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", Jt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
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
      if (i && (t += ol(i)), n > 0 && t > this.maxPayload)
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
    Jt.priorWebsocketSuccess = !1, this.emitReserved("error", r), this.onClose("transport error", r);
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
Zo.protocol = Fo;
function _l(e, r = "", t) {
  let n = e;
  t = t || typeof location < "u" && location, e == null && (e = t.protocol + "//" + t.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = t.protocol + e : e = t.host + e), /^(https?|wss?):\/\//.test(e) || (typeof t < "u" ? e = t.protocol + "//" + e : e = "https://" + e), n = gi(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const o = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + o + ":" + n.port + r, n.href = n.protocol + "://" + o + (t && t.port === n.port ? "" : ":" + n.port), n;
}
const wl = typeof ArrayBuffer == "function", kl = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Xo = Object.prototype.toString, Sl = typeof Blob == "function" || typeof Blob < "u" && Xo.call(Blob) === "[object BlobConstructor]", Cl = typeof File == "function" || typeof File < "u" && Xo.call(File) === "[object FileConstructor]";
function Mi(e) {
  return wl && (e instanceof ArrayBuffer || kl(e)) || Sl && e instanceof Blob || Cl && e instanceof File;
}
function Fr(e, r) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let t = 0, n = e.length; t < n; t++)
      if (Fr(e[t]))
        return !0;
    return !1;
  }
  if (Mi(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Fr(e.toJSON(), !0);
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && Fr(e[t]))
      return !0;
  return !1;
}
function El(e) {
  const r = [], t = e.data, n = e;
  return n.data = bi(t, r), n.attachments = r.length, { packet: n, buffers: r };
}
function bi(e, r) {
  if (!e)
    return e;
  if (Mi(e)) {
    const t = { _placeholder: !0, num: r.length };
    return r.push(e), t;
  } else if (Array.isArray(e)) {
    const t = new Array(e.length);
    for (let n = 0; n < e.length; n++)
      t[n] = bi(e[n], r);
    return t;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const t = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = bi(e[n], r));
    return t;
  }
  return e;
}
function Bl(e, r) {
  return e.data = xi(e.data, r), delete e.attachments, e;
}
function xi(e, r) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < r.length)
      return r[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let t = 0; t < e.length; t++)
      e[t] = xi(e[t], r);
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && (e[t] = xi(e[t], r));
  return e;
}
const Al = 5;
var Ee;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(Ee || (Ee = {}));
class Il {
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
    return (r.type === Ee.EVENT || r.type === Ee.ACK) && Fr(r) ? this.encodeAsBinary({
      type: r.type === Ee.EVENT ? Ee.BINARY_EVENT : Ee.BINARY_ACK,
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
    return (r.type === Ee.BINARY_EVENT || r.type === Ee.BINARY_ACK) && (t += r.attachments + "-"), r.nsp && r.nsp !== "/" && (t += r.nsp + ","), r.id != null && (t += r.id), r.data != null && (t += JSON.stringify(r.data, this.replacer)), t;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(r) {
    const t = El(r), n = this.encodeAsString(t.packet), i = t.buffers;
    return i.unshift(n), i;
  }
}
class zi extends Ve {
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
      const n = t.type === Ee.BINARY_EVENT;
      n || t.type === Ee.BINARY_ACK ? (t.type = n ? Ee.EVENT : Ee.ACK, this.reconstructor = new Ol(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (Mi(r) || r.base64)
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
    if (Ee[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === Ee.BINARY_EVENT || n.type === Ee.BINARY_ACK) {
      const o = t + 1;
      for (; r.charAt(++t) !== "-" && t != r.length; )
        ;
      const a = r.substring(o, t);
      if (a != Number(a) || r.charAt(t) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(a);
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
        const a = r.charAt(t);
        if (a == null || Number(a) != a) {
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
      if (zi.isPayloadValid(n.type, o))
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
      case Ee.CONNECT:
        return typeof t == "object";
      case Ee.DISCONNECT:
        return t === void 0;
      case Ee.CONNECT_ERROR:
        return typeof t == "string" || typeof t == "object";
      case Ee.EVENT:
      case Ee.BINARY_EVENT:
        return Array.isArray(t) && t.length > 0;
      case Ee.ACK:
      case Ee.BINARY_ACK:
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
class Ol {
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
      const t = Bl(this.reconPack, this.buffers);
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
const Tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: zi,
  Encoder: Il,
  get PacketType() {
    return Ee;
  },
  protocol: Al
}, Symbol.toStringTag, { value: "Module" }));
function wt(e, r, t) {
  return e.on(r, t), function() {
    e.off(r, t);
  };
}
const Rl = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Qo extends Ve {
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
      wt(r, "open", this.onopen.bind(this)),
      wt(r, "packet", this.onpacket.bind(this)),
      wt(r, "error", this.onerror.bind(this)),
      wt(r, "close", this.onclose.bind(this))
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
    if (Rl.hasOwnProperty(r))
      throw new Error('"' + r.toString() + '" is a reserved event name');
    if (t.unshift(r), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(t), this;
    const n = {
      type: Ee.EVENT,
      data: t
    };
    if (n.options = {}, n.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
      const a = this.ids++, s = t.pop();
      this._registerAckCallback(a, s), n.id = a;
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
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === r && this.sendBuffer.splice(a, 1);
      t.call(this, new Error("operation has timed out"));
    }, i);
    this.acks[r] = (...a) => {
      this.io.clearTimeoutFn(o), t.apply(this, [null, ...a]);
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
      t.push((a, s) => n ? a ? o(a) : i(s) : i(a)), this.emit(r, ...t);
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
      type: Ee.CONNECT,
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
        case Ee.CONNECT:
          r.data && r.data.sid ? this.onconnect(r.data.sid, r.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case Ee.EVENT:
        case Ee.BINARY_EVENT:
          this.onevent(r);
          break;
        case Ee.ACK:
        case Ee.BINARY_ACK:
          this.onack(r);
          break;
        case Ee.DISCONNECT:
          this.ondisconnect();
          break;
        case Ee.CONNECT_ERROR:
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
        type: Ee.ACK,
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
    return this.connected && this.packet({ type: Ee.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function sr(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
sr.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var r = Math.random(), t = Math.floor(r * this.jitter * e);
    e = Math.floor(r * 10) & 1 ? e + t : e - t;
  }
  return Math.min(e, this.max) | 0;
};
sr.prototype.reset = function() {
  this.attempts = 0;
};
sr.prototype.setMin = function(e) {
  this.ms = e;
};
sr.prototype.setMax = function(e) {
  this.max = e;
};
sr.prototype.setJitter = function(e) {
  this.jitter = e;
};
class yi extends Ve {
  constructor(r, t) {
    var n;
    super(), this.nsps = {}, this.subs = [], r && typeof r == "object" && (t = r, r = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, Mn(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((n = t.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new sr({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = r;
    const i = t.parser || Tl;
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
    this.engine = new Zo(this.uri, this.opts);
    const t = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = wt(t, "open", function() {
      n.onopen(), r && r();
    }), o = wt(t, "error", (a) => {
      n.cleanup(), n._readyState = "closed", this.emitReserved("error", a), r ? r(a) : n.maybeReconnectOnOpen();
    });
    if (this._timeout !== !1) {
      const a = this._timeout;
      a === 0 && i();
      const s = this.setTimeoutFn(() => {
        i(), t.close(), t.emit("error", new Error("timeout"));
      }, a);
      this.opts.autoUnref && s.unref(), this.subs.push(function() {
        clearTimeout(s);
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
    this.subs.push(wt(r, "ping", this.onping.bind(this)), wt(r, "data", this.ondata.bind(this)), wt(r, "error", this.onerror.bind(this)), wt(r, "close", this.onclose.bind(this)), wt(this.decoder, "decoded", this.ondecoded.bind(this)));
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
    Go(() => {
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
    return n ? this._autoConnect && !n.active && n.connect() : (n = new Qo(this, r, t), this.nsps[r] = n), n;
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
const fr = {};
function oi(e, r) {
  typeof e == "object" && (r = e, e = void 0), r = r || {};
  const t = _l(e, r.path || "/socket.io"), n = t.source, i = t.id, o = t.path, a = fr[i] && o in fr[i].nsps, s = r.forceNew || r["force new connection"] || r.multiplex === !1 || a;
  let u;
  return s ? u = new yi(n, r) : (fr[i] || (fr[i] = new yi(n, r)), u = fr[i]), t.query && !r.query && (r.query = t.queryKey), u.socket(t.path, r);
}
Object.assign(oi, {
  Manager: yi,
  Socket: Qo,
  io: oi,
  connect: oi
});
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var er = 9e15, Ut = 1e9, mi = "0123456789abcdef", On = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Tn = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", _i = {
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
  minE: -er,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: er,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Jo, Pt, we = !0, zn = "[DecimalError] ", qt = zn + "Invalid argument: ", es = zn + "Precision limit exceeded", ts = zn + "crypto unavailable", rs = "[object Decimal]", ot = Math.floor, Ye = Math.pow, Ll = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Nl = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Dl = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, ns = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Ct = 1e7, ge = 7, $l = 9007199254740991, Pl = On.length - 1, wi = Tn.length - 1, Y = { toStringTag: rs };
Y.absoluteValue = Y.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), pe(e);
};
Y.ceil = function() {
  return pe(new this.constructor(this), this.e + 1, 2);
};
Y.clampedTo = Y.clamp = function(e, r) {
  var t, n = this, i = n.constructor;
  if (e = new i(e), r = new i(r), !e.s || !r.s)
    return new i(NaN);
  if (e.gt(r))
    throw Error(qt + r);
  return t = n.cmp(e), t < 0 ? e : n.cmp(r) > 0 ? r : new i(n);
};
Y.comparedTo = Y.cmp = function(e) {
  var r, t, n, i, o = this, a = o.d, s = (e = new o.constructor(e)).d, u = o.s, c = e.s;
  if (!a || !s)
    return !u || !c ? NaN : u !== c ? u : a === s ? 0 : !a ^ u < 0 ? 1 : -1;
  if (!a[0] || !s[0])
    return a[0] ? u : s[0] ? -c : 0;
  if (u !== c)
    return u;
  if (o.e !== e.e)
    return o.e > e.e ^ u < 0 ? 1 : -1;
  for (n = a.length, i = s.length, r = 0, t = n < i ? n : i; r < t; ++r)
    if (a[r] !== s[r])
      return a[r] > s[r] ^ u < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ u < 0 ? 1 : -1;
};
Y.cosine = Y.cos = function() {
  var e, r, t = this, n = t.constructor;
  return t.d ? t.d[0] ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + ge, n.rounding = 1, t = Ml(n, cs(n, t)), n.precision = e, n.rounding = r, pe(Pt == 2 || Pt == 3 ? t.neg() : t, e, r, !0)) : new n(1) : new n(NaN);
};
Y.cubeRoot = Y.cbrt = function() {
  var e, r, t, n, i, o, a, s, u, c, f = this, d = f.constructor;
  if (!f.isFinite() || f.isZero())
    return new d(f);
  for (we = !1, o = f.s * Ye(f.s * f, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (t = tt(f.d), e = f.e, (o = (e - t.length + 1) % 3) && (t += o == 1 || o == -2 ? "0" : "00"), o = Ye(t, 1 / 3), e = ot((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? t = "5e" + e : (t = o.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new d(t), n.s = f.s) : n = new d(o.toString()), a = (e = d.precision) + 3; ; )
    if (s = n, u = s.times(s).times(s), c = u.plus(f), n = Le(c.plus(f).times(s), c.plus(u), a + 2, 1), tt(s.d).slice(0, a) === (t = tt(n.d)).slice(0, a))
      if (t = t.slice(a - 3, a + 1), t == "9999" || !i && t == "4999") {
        if (!i && (pe(s, e + 1, 0), s.times(s).times(s).eq(f))) {
          n = s;
          break;
        }
        a += 4, i = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (pe(n, e + 1, 1), r = !n.times(n).times(n).eq(f));
        break;
      }
  return we = !0, pe(n, e, d.rounding, r);
};
Y.decimalPlaces = Y.dp = function() {
  var e, r = this.d, t = NaN;
  if (r) {
    if (e = r.length - 1, t = (e - ot(this.e / ge)) * ge, e = r[e], e)
      for (; e % 10 == 0; e /= 10)
        t--;
    t < 0 && (t = 0);
  }
  return t;
};
Y.dividedBy = Y.div = function(e) {
  return Le(this, new this.constructor(e));
};
Y.dividedToIntegerBy = Y.divToInt = function(e) {
  var r = this, t = r.constructor;
  return pe(Le(r, new t(e), 0, 1, 1), t.precision, t.rounding);
};
Y.equals = Y.eq = function(e) {
  return this.cmp(e) === 0;
};
Y.floor = function() {
  return pe(new this.constructor(this), this.e + 1, 3);
};
Y.greaterThan = Y.gt = function(e) {
  return this.cmp(e) > 0;
};
Y.greaterThanOrEqualTo = Y.gte = function(e) {
  var r = this.cmp(e);
  return r == 1 || r === 0;
};
Y.hyperbolicCosine = Y.cosh = function() {
  var e, r, t, n, i, o = this, a = o.constructor, s = new a(1);
  if (!o.isFinite())
    return new a(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return s;
  t = a.precision, n = a.rounding, a.precision = t + Math.max(o.e, o.sd()) + 4, a.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), r = (1 / Fn(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = or(a, 1, o.times(r), new a(1), !0);
  for (var u, c = e, f = new a(8); c--; )
    u = o.times(o), o = s.minus(u.times(f.minus(u.times(f))));
  return pe(o, a.precision = t, a.rounding = n, !0);
};
Y.hyperbolicSine = Y.sinh = function() {
  var e, r, t, n, i = this, o = i.constructor;
  if (!i.isFinite() || i.isZero())
    return new o(i);
  if (r = o.precision, t = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
    i = or(o, 2, i, i, !0);
  else {
    e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / Fn(5, e)), i = or(o, 2, i, i, !0);
    for (var a, s = new o(5), u = new o(16), c = new o(20); e--; )
      a = i.times(i), i = i.times(s.plus(a.times(u.times(a).plus(c))));
  }
  return o.precision = r, o.rounding = t, pe(i, r, t, !0);
};
Y.hyperbolicTangent = Y.tanh = function() {
  var e, r, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 7, n.rounding = 1, Le(t.sinh(), t.cosh(), n.precision = e, n.rounding = r)) : new n(t.s);
};
Y.inverseCosine = Y.acos = function() {
  var e, r = this, t = r.constructor, n = r.abs().cmp(1), i = t.precision, o = t.rounding;
  return n !== -1 ? n === 0 ? r.isNeg() ? St(t, i, o) : new t(0) : new t(NaN) : r.isZero() ? St(t, i + 4, o).times(0.5) : (t.precision = i + 6, t.rounding = 1, r = r.asin(), e = St(t, i + 4, o).times(0.5), t.precision = i, t.rounding = o, e.minus(r));
};
Y.inverseHyperbolicCosine = Y.acosh = function() {
  var e, r, t = this, n = t.constructor;
  return t.lte(1) ? new n(t.eq(1) ? 0 : NaN) : t.isFinite() ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(Math.abs(t.e), t.sd()) + 4, n.rounding = 1, we = !1, t = t.times(t).minus(1).sqrt().plus(t), we = !0, n.precision = e, n.rounding = r, t.ln()) : new n(t);
};
Y.inverseHyperbolicSine = Y.asinh = function() {
  var e, r, t = this, n = t.constructor;
  return !t.isFinite() || t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 2 * Math.max(Math.abs(t.e), t.sd()) + 6, n.rounding = 1, we = !1, t = t.times(t).plus(1).sqrt().plus(t), we = !0, n.precision = e, n.rounding = r, t.ln());
};
Y.inverseHyperbolicTangent = Y.atanh = function() {
  var e, r, t, n, i = this, o = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, r = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? pe(new o(i), e, r, !0) : (o.precision = t = n - i.e, i = Le(i.plus(1), new o(1).minus(i), t + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = r, i.times(0.5))) : new o(NaN);
};
Y.inverseSine = Y.asin = function() {
  var e, r, t, n, i = this, o = i.constructor;
  return i.isZero() ? new o(i) : (r = i.abs().cmp(1), t = o.precision, n = o.rounding, r !== -1 ? r === 0 ? (e = St(o, t + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = t + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = t, o.rounding = n, i.times(2)));
};
Y.inverseTangent = Y.atan = function() {
  var e, r, t, n, i, o, a, s, u, c = this, f = c.constructor, d = f.precision, l = f.rounding;
  if (c.isFinite()) {
    if (c.isZero())
      return new f(c);
    if (c.abs().eq(1) && d + 4 <= wi)
      return a = St(f, d + 4, l).times(0.25), a.s = c.s, a;
  } else {
    if (!c.s)
      return new f(NaN);
    if (d + 4 <= wi)
      return a = St(f, d + 4, l).times(0.5), a.s = c.s, a;
  }
  for (f.precision = s = d + 10, f.rounding = 1, t = Math.min(28, s / ge + 2 | 0), e = t; e; --e)
    c = c.div(c.times(c).plus(1).sqrt().plus(1));
  for (we = !1, r = Math.ceil(s / ge), n = 1, u = c.times(c), a = new f(c), i = c; e !== -1; )
    if (i = i.times(u), o = a.minus(i.div(n += 2)), i = i.times(u), a = o.plus(i.div(n += 2)), a.d[r] !== void 0)
      for (e = r; a.d[e] === o.d[e] && e--; )
        ;
  return t && (a = a.times(2 << t - 1)), we = !0, pe(a, f.precision = d, f.rounding = l, !0);
};
Y.isFinite = function() {
  return !!this.d;
};
Y.isInteger = Y.isInt = function() {
  return !!this.d && ot(this.e / ge) > this.d.length - 2;
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
  var r, t, n, i, o, a, s, u, c = this, f = c.constructor, d = f.precision, l = f.rounding, h = 5;
  if (e == null)
    e = new f(10), r = !0;
  else {
    if (e = new f(e), t = e.d, e.s < 0 || !t || !t[0] || e.eq(1))
      return new f(NaN);
    r = e.eq(10);
  }
  if (t = c.d, c.s < 0 || !t || !t[0] || c.eq(1))
    return new f(t && !t[0] ? -1 / 0 : c.s != 1 ? NaN : t ? 0 : 1 / 0);
  if (r)
    if (t.length > 1)
      o = !0;
    else {
      for (i = t[0]; i % 10 === 0; )
        i /= 10;
      o = i !== 1;
    }
  if (we = !1, s = d + h, a = Ft(c, s), n = r ? Rn(f, s + 10) : Ft(e, s), u = Le(a, n, s, 1), wr(u.d, i = d, l))
    do
      if (s += 10, a = Ft(c, s), n = r ? Rn(f, s + 10) : Ft(e, s), u = Le(a, n, s, 1), !o) {
        +tt(u.d).slice(i + 1, i + 15) + 1 == 1e14 && (u = pe(u, d + 1, 0));
        break;
      }
    while (wr(u.d, i += 10, l));
  return we = !0, pe(u, d, l);
};
Y.minus = Y.sub = function(e) {
  var r, t, n, i, o, a, s, u, c, f, d, l, h = this, g = h.constructor;
  if (e = new g(e), !h.d || !e.d)
    return !h.s || !e.s ? e = new g(NaN) : h.d ? e.s = -e.s : e = new g(e.d || h.s !== e.s ? h : NaN), e;
  if (h.s != e.s)
    return e.s = -e.s, h.plus(e);
  if (c = h.d, l = e.d, s = g.precision, u = g.rounding, !c[0] || !l[0]) {
    if (l[0])
      e.s = -e.s;
    else if (c[0])
      e = new g(h);
    else
      return new g(u === 3 ? -0 : 0);
    return we ? pe(e, s, u) : e;
  }
  if (t = ot(e.e / ge), f = ot(h.e / ge), c = c.slice(), o = f - t, o) {
    for (d = o < 0, d ? (r = c, o = -o, a = l.length) : (r = l, t = f, a = c.length), n = Math.max(Math.ceil(s / ge), a) + 2, o > n && (o = n, r.length = 1), r.reverse(), n = o; n--; )
      r.push(0);
    r.reverse();
  } else {
    for (n = c.length, a = l.length, d = n < a, d && (a = n), n = 0; n < a; n++)
      if (c[n] != l[n]) {
        d = c[n] < l[n];
        break;
      }
    o = 0;
  }
  for (d && (r = c, c = l, l = r, e.s = -e.s), a = c.length, n = l.length - a; n > 0; --n)
    c[a++] = 0;
  for (n = l.length; n > o; ) {
    if (c[--n] < l[n]) {
      for (i = n; i && c[--i] === 0; )
        c[i] = Ct - 1;
      --c[i], c[n] += Ct;
    }
    c[n] -= l[n];
  }
  for (; c[--a] === 0; )
    c.pop();
  for (; c[0] === 0; c.shift())
    --t;
  return c[0] ? (e.d = c, e.e = Hn(c, t), we ? pe(e, s, u) : e) : new g(u === 3 ? -0 : 0);
};
Y.modulo = Y.mod = function(e) {
  var r, t = this, n = t.constructor;
  return e = new n(e), !t.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || t.d && !t.d[0] ? pe(new n(t), n.precision, n.rounding) : (we = !1, n.modulo == 9 ? (r = Le(t, e.abs(), 0, 3, 1), r.s *= e.s) : r = Le(t, e, 0, n.modulo, 1), r = r.times(e), we = !0, t.minus(r));
};
Y.naturalExponential = Y.exp = function() {
  return ki(this);
};
Y.naturalLogarithm = Y.ln = function() {
  return Ft(this);
};
Y.negated = Y.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, pe(e);
};
Y.plus = Y.add = function(e) {
  var r, t, n, i, o, a, s, u, c, f, d = this, l = d.constructor;
  if (e = new l(e), !d.d || !e.d)
    return !d.s || !e.s ? e = new l(NaN) : d.d || (e = new l(e.d || d.s === e.s ? d : NaN)), e;
  if (d.s != e.s)
    return e.s = -e.s, d.minus(e);
  if (c = d.d, f = e.d, s = l.precision, u = l.rounding, !c[0] || !f[0])
    return f[0] || (e = new l(d)), we ? pe(e, s, u) : e;
  if (o = ot(d.e / ge), n = ot(e.e / ge), c = c.slice(), i = o - n, i) {
    for (i < 0 ? (t = c, i = -i, a = f.length) : (t = f, n = o, a = c.length), o = Math.ceil(s / ge), a = o > a ? o + 1 : a + 1, i > a && (i = a, t.length = 1), t.reverse(); i--; )
      t.push(0);
    t.reverse();
  }
  for (a = c.length, i = f.length, a - i < 0 && (i = a, t = f, f = c, c = t), r = 0; i; )
    r = (c[--i] = c[i] + f[i] + r) / Ct | 0, c[i] %= Ct;
  for (r && (c.unshift(r), ++n), a = c.length; c[--a] == 0; )
    c.pop();
  return e.d = c, e.e = Hn(c, n), we ? pe(e, s, u) : e;
};
Y.precision = Y.sd = function(e) {
  var r, t = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(qt + e);
  return t.d ? (r = is(t.d), e && t.e + 1 > r && (r = t.e + 1)) : r = NaN, r;
};
Y.round = function() {
  var e = this, r = e.constructor;
  return pe(new r(e), e.e + 1, r.rounding);
};
Y.sine = Y.sin = function() {
  var e, r, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + ge, n.rounding = 1, t = Hl(n, cs(n, t)), n.precision = e, n.rounding = r, pe(Pt > 2 ? t.neg() : t, e, r, !0)) : new n(NaN);
};
Y.squareRoot = Y.sqrt = function() {
  var e, r, t, n, i, o, a = this, s = a.d, u = a.e, c = a.s, f = a.constructor;
  if (c !== 1 || !s || !s[0])
    return new f(!c || c < 0 && (!s || s[0]) ? NaN : s ? a : 1 / 0);
  for (we = !1, c = Math.sqrt(+a), c == 0 || c == 1 / 0 ? (r = tt(s), (r.length + u) % 2 == 0 && (r += "0"), c = Math.sqrt(r), u = ot((u + 1) / 2) - (u < 0 || u % 2), c == 1 / 0 ? r = "5e" + u : (r = c.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + u), n = new f(r)) : n = new f(c.toString()), t = (u = f.precision) + 3; ; )
    if (o = n, n = o.plus(Le(a, o, t + 2, 1)).times(0.5), tt(o.d).slice(0, t) === (r = tt(n.d)).slice(0, t))
      if (r = r.slice(t - 3, t + 1), r == "9999" || !i && r == "4999") {
        if (!i && (pe(o, u + 1, 0), o.times(o).eq(a))) {
          n = o;
          break;
        }
        t += 4, i = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (pe(n, u + 1, 1), e = !n.times(n).eq(a));
        break;
      }
  return we = !0, pe(n, u, f.rounding, e);
};
Y.tangent = Y.tan = function() {
  var e, r, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 10, n.rounding = 1, t = t.sin(), t.s = 1, t = Le(t, new n(1).minus(t.times(t)).sqrt(), e + 10, 0), n.precision = e, n.rounding = r, pe(Pt == 2 || Pt == 4 ? t.neg() : t, e, r, !0)) : new n(NaN);
};
Y.times = Y.mul = function(e) {
  var r, t, n, i, o, a, s, u, c, f = this, d = f.constructor, l = f.d, h = (e = new d(e)).d;
  if (e.s *= f.s, !l || !l[0] || !h || !h[0])
    return new d(!e.s || l && !l[0] && !h || h && !h[0] && !l ? NaN : !l || !h ? e.s / 0 : e.s * 0);
  for (t = ot(f.e / ge) + ot(e.e / ge), u = l.length, c = h.length, u < c && (o = l, l = h, h = o, a = u, u = c, c = a), o = [], a = u + c, n = a; n--; )
    o.push(0);
  for (n = c; --n >= 0; ) {
    for (r = 0, i = u + n; i > n; )
      s = o[i] + h[n] * l[i - n - 1] + r, o[i--] = s % Ct | 0, r = s / Ct | 0;
    o[i] = (o[i] + r) % Ct | 0;
  }
  for (; !o[--a]; )
    o.pop();
  return r ? ++t : o.shift(), e.d = o, e.e = Hn(o, t), we ? pe(e, d.precision, d.rounding) : e;
};
Y.toBinary = function(e, r) {
  return Hi(this, 2, e, r);
};
Y.toDecimalPlaces = Y.toDP = function(e, r) {
  var t = this, n = t.constructor;
  return t = new n(t), e === void 0 ? t : (lt(e, 0, Ut), r === void 0 ? r = n.rounding : lt(r, 0, 8), pe(t, e + t.e + 1, r));
};
Y.toExponential = function(e, r) {
  var t, n = this, i = n.constructor;
  return e === void 0 ? t = It(n, !0) : (lt(e, 0, Ut), r === void 0 ? r = i.rounding : lt(r, 0, 8), n = pe(new i(n), e + 1, r), t = It(n, !0, e + 1)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
Y.toFixed = function(e, r) {
  var t, n, i = this, o = i.constructor;
  return e === void 0 ? t = It(i) : (lt(e, 0, Ut), r === void 0 ? r = o.rounding : lt(r, 0, 8), n = pe(new o(i), e + i.e + 1, r), t = It(n, !1, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + t : t;
};
Y.toFraction = function(e) {
  var r, t, n, i, o, a, s, u, c, f, d, l, h = this, g = h.d, p = h.constructor;
  if (!g)
    return new p(h);
  if (c = t = new p(1), n = u = new p(0), r = new p(n), o = r.e = is(g) - h.e - 1, a = o % ge, r.d[0] = Ye(10, a < 0 ? ge + a : a), e == null)
    e = o > 0 ? r : c;
  else {
    if (s = new p(e), !s.isInt() || s.lt(c))
      throw Error(qt + s);
    e = s.gt(r) ? o > 0 ? r : c : s;
  }
  for (we = !1, s = new p(tt(g)), f = p.precision, p.precision = o = g.length * ge * 2; d = Le(s, r, 0, 1, 1), i = t.plus(d.times(n)), i.cmp(e) != 1; )
    t = n, n = i, i = c, c = u.plus(d.times(i)), u = i, i = r, r = s.minus(d.times(i)), s = i;
  return i = Le(e.minus(t), n, 0, 1, 1), u = u.plus(i.times(c)), t = t.plus(i.times(n)), u.s = c.s = h.s, l = Le(c, n, o, 1).minus(h).abs().cmp(Le(u, t, o, 1).minus(h).abs()) < 1 ? [c, n] : [u, t], p.precision = f, we = !0, l;
};
Y.toHexadecimal = Y.toHex = function(e, r) {
  return Hi(this, 16, e, r);
};
Y.toNearest = function(e, r) {
  var t = this, n = t.constructor;
  if (t = new n(t), e == null) {
    if (!t.d)
      return t;
    e = new n(1), r = n.rounding;
  } else {
    if (e = new n(e), r === void 0 ? r = n.rounding : lt(r, 0, 8), !t.d)
      return e.s ? t : e;
    if (!e.d)
      return e.s && (e.s = t.s), e;
  }
  return e.d[0] ? (we = !1, t = Le(t, e, 0, r, 1).times(e), we = !0, pe(t)) : (e.s = t.s, t = e), t;
};
Y.toNumber = function() {
  return +this;
};
Y.toOctal = function(e, r) {
  return Hi(this, 8, e, r);
};
Y.toPower = Y.pow = function(e) {
  var r, t, n, i, o, a, s = this, u = s.constructor, c = +(e = new u(e));
  if (!s.d || !e.d || !s.d[0] || !e.d[0])
    return new u(Ye(+s, c));
  if (s = new u(s), s.eq(1))
    return s;
  if (n = u.precision, o = u.rounding, e.eq(1))
    return pe(s, n, o);
  if (r = ot(e.e / ge), r >= e.d.length - 1 && (t = c < 0 ? -c : c) <= $l)
    return i = os(u, s, t, n), e.s < 0 ? new u(1).div(i) : pe(i, n, o);
  if (a = s.s, a < 0) {
    if (r < e.d.length - 1)
      return new u(NaN);
    if (e.d[r] & 1 || (a = 1), s.e == 0 && s.d[0] == 1 && s.d.length == 1)
      return s.s = a, s;
  }
  return t = Ye(+s, c), r = t == 0 || !isFinite(t) ? ot(c * (Math.log("0." + tt(s.d)) / Math.LN10 + s.e + 1)) : new u(t + "").e, r > u.maxE + 1 || r < u.minE - 1 ? new u(r > 0 ? a / 0 : 0) : (we = !1, u.rounding = s.s = 1, t = Math.min(12, (r + "").length), i = ki(e.times(Ft(s, n + t)), n), i.d && (i = pe(i, n + 5, 1), wr(i.d, n, o) && (r = n + 10, i = pe(ki(e.times(Ft(s, r + t)), r), r + 5, 1), +tt(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = pe(i, n + 1, 0)))), i.s = a, we = !0, u.rounding = o, pe(i, n, o));
};
Y.toPrecision = function(e, r) {
  var t, n = this, i = n.constructor;
  return e === void 0 ? t = It(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (lt(e, 1, Ut), r === void 0 ? r = i.rounding : lt(r, 0, 8), n = pe(new i(n), e, r), t = It(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
Y.toSignificantDigits = Y.toSD = function(e, r) {
  var t = this, n = t.constructor;
  return e === void 0 ? (e = n.precision, r = n.rounding) : (lt(e, 1, Ut), r === void 0 ? r = n.rounding : lt(r, 0, 8)), pe(new n(t), e, r);
};
Y.toString = function() {
  var e = this, r = e.constructor, t = It(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + t : t;
};
Y.truncated = Y.trunc = function() {
  return pe(new this.constructor(this), this.e + 1, 1);
};
Y.valueOf = Y.toJSON = function() {
  var e = this, r = e.constructor, t = It(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() ? "-" + t : t;
};
function tt(e) {
  var r, t, n, i = e.length - 1, o = "", a = e[0];
  if (i > 0) {
    for (o += a, r = 1; r < i; r++)
      n = e[r] + "", t = ge - n.length, t && (o += Ht(t)), o += n;
    a = e[r], n = a + "", t = ge - n.length, t && (o += Ht(t));
  } else if (a === 0)
    return "0";
  for (; a % 10 === 0; )
    a /= 10;
  return o + a;
}
function lt(e, r, t) {
  if (e !== ~~e || e < r || e > t)
    throw Error(qt + e);
}
function wr(e, r, t, n) {
  var i, o, a, s;
  for (o = e[0]; o >= 10; o /= 10)
    --r;
  return --r < 0 ? (r += ge, i = 0) : (i = Math.ceil((r + 1) / ge), r %= ge), o = Ye(10, ge - r), s = e[i] % o | 0, n == null ? r < 3 ? (r == 0 ? s = s / 100 | 0 : r == 1 && (s = s / 10 | 0), a = t < 4 && s == 99999 || t > 3 && s == 49999 || s == 5e4 || s == 0) : a = (t < 4 && s + 1 == o || t > 3 && s + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == Ye(10, r - 2) - 1 || (s == o / 2 || s == 0) && (e[i + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? s = s / 1e3 | 0 : r == 1 ? s = s / 100 | 0 : r == 2 && (s = s / 10 | 0), a = (n || t < 4) && s == 9999 || !n && t > 3 && s == 4999) : a = ((n || t < 4) && s + 1 == o || !n && t > 3 && s + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == Ye(10, r - 3) - 1, a;
}
function qr(e, r, t) {
  for (var n, i = [0], o, a = 0, s = e.length; a < s; ) {
    for (o = i.length; o--; )
      i[o] *= r;
    for (i[0] += mi.indexOf(e.charAt(a++)), n = 0; n < i.length; n++)
      i[n] > t - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / t | 0, i[n] %= t);
  }
  return i.reverse();
}
function Ml(e, r) {
  var t, n, i;
  if (r.isZero())
    return r;
  n = r.d.length, n < 32 ? (t = Math.ceil(n / 3), i = (1 / Fn(4, t)).toString()) : (t = 16, i = "2.3283064365386962890625e-10"), e.precision += t, r = or(e, 1, r.times(i), new e(1));
  for (var o = t; o--; ) {
    var a = r.times(r);
    r = a.times(a).minus(a).times(8).plus(1);
  }
  return e.precision -= t, r;
}
var Le = function() {
  function e(n, i, o) {
    var a, s = 0, u = n.length;
    for (n = n.slice(); u--; )
      a = n[u] * i + s, n[u] = a % o | 0, s = a / o | 0;
    return s && n.unshift(s), n;
  }
  function r(n, i, o, a) {
    var s, u;
    if (o != a)
      u = o > a ? 1 : -1;
    else
      for (s = u = 0; s < o; s++)
        if (n[s] != i[s]) {
          u = n[s] > i[s] ? 1 : -1;
          break;
        }
    return u;
  }
  function t(n, i, o, a) {
    for (var s = 0; o--; )
      n[o] -= s, s = n[o] < i[o] ? 1 : 0, n[o] = s * a + n[o] - i[o];
    for (; !n[0] && n.length > 1; )
      n.shift();
  }
  return function(n, i, o, a, s, u) {
    var c, f, d, l, h, g, p, m, O, k, v, b, x, w, _, B, T, C, E, D, L = n.constructor, F = n.s == i.s ? 1 : -1, H = n.d, j = i.d;
    if (!H || !H[0] || !j || !j[0])
      return new L(
        // Return NaN if either NaN, or both Infinity or 0.
        !n.s || !i.s || (H ? j && H[0] == j[0] : !j) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          H && H[0] == 0 || !j ? F * 0 : F / 0
        )
      );
    for (u ? (h = 1, f = n.e - i.e) : (u = Ct, h = ge, f = ot(n.e / h) - ot(i.e / h)), E = j.length, T = H.length, O = new L(F), k = O.d = [], d = 0; j[d] == (H[d] || 0); d++)
      ;
    if (j[d] > (H[d] || 0) && f--, o == null ? (w = o = L.precision, a = L.rounding) : s ? w = o + (n.e - i.e) + 1 : w = o, w < 0)
      k.push(1), g = !0;
    else {
      if (w = w / h + 2 | 0, d = 0, E == 1) {
        for (l = 0, j = j[0], w++; (d < T || l) && w--; d++)
          _ = l * u + (H[d] || 0), k[d] = _ / j | 0, l = _ % j | 0;
        g = l || d < T;
      } else {
        for (l = u / (j[0] + 1) | 0, l > 1 && (j = e(j, l, u), H = e(H, l, u), E = j.length, T = H.length), B = E, v = H.slice(0, E), b = v.length; b < E; )
          v[b++] = 0;
        D = j.slice(), D.unshift(0), C = j[0], j[1] >= u / 2 && ++C;
        do
          l = 0, c = r(j, v, E, b), c < 0 ? (x = v[0], E != b && (x = x * u + (v[1] || 0)), l = x / C | 0, l > 1 ? (l >= u && (l = u - 1), p = e(j, l, u), m = p.length, b = v.length, c = r(p, v, m, b), c == 1 && (l--, t(p, E < m ? D : j, m, u))) : (l == 0 && (c = l = 1), p = j.slice()), m = p.length, m < b && p.unshift(0), t(v, p, b, u), c == -1 && (b = v.length, c = r(j, v, E, b), c < 1 && (l++, t(v, E < b ? D : j, b, u))), b = v.length) : c === 0 && (l++, v = [0]), k[d++] = l, c && v[0] ? v[b++] = H[B] || 0 : (v = [H[B]], b = 1);
        while ((B++ < T || v[0] !== void 0) && w--);
        g = v[0] !== void 0;
      }
      k[0] || k.shift();
    }
    if (h == 1)
      O.e = f, Jo = g;
    else {
      for (d = 1, l = k[0]; l >= 10; l /= 10)
        d++;
      O.e = d + f * h - 1, pe(O, s ? o + O.e + 1 : o, a, g);
    }
    return O;
  };
}();
function pe(e, r, t, n) {
  var i, o, a, s, u, c, f, d, l, h = e.constructor;
  e:
    if (r != null) {
      if (d = e.d, !d)
        return e;
      for (i = 1, s = d[0]; s >= 10; s /= 10)
        i++;
      if (o = r - i, o < 0)
        o += ge, a = r, f = d[l = 0], u = f / Ye(10, i - a - 1) % 10 | 0;
      else if (l = Math.ceil((o + 1) / ge), s = d.length, l >= s)
        if (n) {
          for (; s++ <= l; )
            d.push(0);
          f = u = 0, i = 1, o %= ge, a = o - ge + 1;
        } else
          break e;
      else {
        for (f = s = d[l], i = 1; s >= 10; s /= 10)
          i++;
        o %= ge, a = o - ge + i, u = a < 0 ? 0 : f / Ye(10, i - a - 1) % 10 | 0;
      }
      if (n = n || r < 0 || d[l + 1] !== void 0 || (a < 0 ? f : f % Ye(10, i - a - 1)), c = t < 4 ? (u || n) && (t == 0 || t == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (t == 4 || n || t == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? a > 0 ? f / Ye(10, i - a) : 0 : d[l - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), r < 1 || !d[0])
        return d.length = 0, c ? (r -= e.e + 1, d[0] = Ye(10, (ge - r % ge) % ge), e.e = -r || 0) : d[0] = e.e = 0, e;
      if (o == 0 ? (d.length = l, s = 1, l--) : (d.length = l + 1, s = Ye(10, ge - o), d[l] = a > 0 ? (f / Ye(10, i - a) % Ye(10, a) | 0) * s : 0), c)
        for (; ; )
          if (l == 0) {
            for (o = 1, a = d[0]; a >= 10; a /= 10)
              o++;
            for (a = d[0] += s, s = 1; a >= 10; a /= 10)
              s++;
            o != s && (e.e++, d[0] == Ct && (d[0] = 1));
            break;
          } else {
            if (d[l] += s, d[l] != Ct)
              break;
            d[l--] = 0, s = 1;
          }
      for (o = d.length; d[--o] === 0; )
        d.pop();
    }
  return we && (e.e > h.maxE ? (e.d = null, e.e = NaN) : e.e < h.minE && (e.e = 0, e.d = [0])), e;
}
function It(e, r, t) {
  if (!e.isFinite())
    return as(e);
  var n, i = e.e, o = tt(e.d), a = o.length;
  return r ? (t && (n = t - a) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Ht(n) : a > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + Ht(-i - 1) + o, t && (n = t - a) > 0 && (o += Ht(n))) : i >= a ? (o += Ht(i + 1 - a), t && (n = t - i - 1) > 0 && (o = o + "." + Ht(n))) : ((n = i + 1) < a && (o = o.slice(0, n) + "." + o.slice(n)), t && (n = t - a) > 0 && (i + 1 === a && (o += "."), o += Ht(n))), o;
}
function Hn(e, r) {
  var t = e[0];
  for (r *= ge; t >= 10; t /= 10)
    r++;
  return r;
}
function Rn(e, r, t) {
  if (r > Pl)
    throw we = !0, t && (e.precision = t), Error(es);
  return pe(new e(On), r, 1, !0);
}
function St(e, r, t) {
  if (r > wi)
    throw Error(es);
  return pe(new e(Tn), r, t, !0);
}
function is(e) {
  var r = e.length - 1, t = r * ge + 1;
  if (r = e[r], r) {
    for (; r % 10 == 0; r /= 10)
      t--;
    for (r = e[0]; r >= 10; r /= 10)
      t++;
  }
  return t;
}
function Ht(e) {
  for (var r = ""; e--; )
    r += "0";
  return r;
}
function os(e, r, t, n) {
  var i, o = new e(1), a = Math.ceil(n / ge + 4);
  for (we = !1; ; ) {
    if (t % 2 && (o = o.times(r), eo(o.d, a) && (i = !0)), t = ot(t / 2), t === 0) {
      t = o.d.length - 1, i && o.d[t] === 0 && ++o.d[t];
      break;
    }
    r = r.times(r), eo(r.d, a);
  }
  return we = !0, o;
}
function J0(e) {
  return e.d[e.d.length - 1] & 1;
}
function ss(e, r, t) {
  for (var n, i = new e(r[0]), o = 0; ++o < r.length; )
    if (n = new e(r[o]), n.s)
      i[t](n) && (i = n);
    else {
      i = n;
      break;
    }
  return i;
}
function ki(e, r) {
  var t, n, i, o, a, s, u, c = 0, f = 0, d = 0, l = e.constructor, h = l.rounding, g = l.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new l(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (r == null ? (we = !1, u = g) : u = r, s = new l(0.03125); e.e > -2; )
    e = e.times(s), d += 5;
  for (n = Math.log(Ye(2, d)) / Math.LN10 * 2 + 5 | 0, u += n, t = o = a = new l(1), l.precision = u; ; ) {
    if (o = pe(o.times(e), u, 1), t = t.times(++f), s = a.plus(Le(o, t, u, 1)), tt(s.d).slice(0, u) === tt(a.d).slice(0, u)) {
      for (i = d; i--; )
        a = pe(a.times(a), u, 1);
      if (r == null)
        if (c < 3 && wr(a.d, u - n, h, c))
          l.precision = u += 10, t = o = s = new l(1), f = 0, c++;
        else
          return pe(a, l.precision = g, h, we = !0);
      else
        return l.precision = g, a;
    }
    a = s;
  }
}
function Ft(e, r) {
  var t, n, i, o, a, s, u, c, f, d, l, h = 1, g = 10, p = e, m = p.d, O = p.constructor, k = O.rounding, v = O.precision;
  if (p.s < 0 || !m || !m[0] || !p.e && m[0] == 1 && m.length == 1)
    return new O(m && !m[0] ? -1 / 0 : p.s != 1 ? NaN : m ? 0 : p);
  if (r == null ? (we = !1, f = v) : f = r, O.precision = f += g, t = tt(m), n = t.charAt(0), Math.abs(o = p.e) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && t.charAt(1) > 3; )
      p = p.times(e), t = tt(p.d), n = t.charAt(0), h++;
    o = p.e, n > 1 ? (p = new O("0." + t), o++) : p = new O(n + "." + t.slice(1));
  } else
    return c = Rn(O, f + 2, v).times(o + ""), p = Ft(new O(n + "." + t.slice(1)), f - g).plus(c), O.precision = v, r == null ? pe(p, v, k, we = !0) : p;
  for (d = p, u = a = p = Le(p.minus(1), p.plus(1), f, 1), l = pe(p.times(p), f, 1), i = 3; ; ) {
    if (a = pe(a.times(l), f, 1), c = u.plus(Le(a, new O(i), f, 1)), tt(c.d).slice(0, f) === tt(u.d).slice(0, f))
      if (u = u.times(2), o !== 0 && (u = u.plus(Rn(O, f + 2, v).times(o + ""))), u = Le(u, new O(h), f, 1), r == null)
        if (wr(u.d, f - g, k, s))
          O.precision = f += g, c = a = p = Le(d.minus(1), d.plus(1), f, 1), l = pe(p.times(p), f, 1), i = s = 1;
        else
          return pe(u, O.precision = v, k, we = !0);
      else
        return O.precision = v, u;
    u = c, i += 2;
  }
}
function as(e) {
  return String(e.s * e.s / 0);
}
function Si(e, r) {
  var t, n, i;
  for ((t = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (n = r.search(/e/i)) > 0 ? (t < 0 && (t = n), t += +r.slice(n + 1), r = r.substring(0, n)) : t < 0 && (t = r.length), n = 0; r.charCodeAt(n) === 48; n++)
    ;
  for (i = r.length; r.charCodeAt(i - 1) === 48; --i)
    ;
  if (r = r.slice(n, i), r) {
    if (i -= n, e.e = t = t - n - 1, e.d = [], n = (t + 1) % ge, t < 0 && (n += ge), n < i) {
      for (n && e.d.push(+r.slice(0, n)), i -= ge; n < i; )
        e.d.push(+r.slice(n, n += ge));
      r = r.slice(n), n = ge - r.length;
    } else
      n -= i;
    for (; n--; )
      r += "0";
    e.d.push(+r), we && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function zl(e, r) {
  var t, n, i, o, a, s, u, c, f;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), ns.test(r))
      return Si(e, r);
  } else if (r === "Infinity" || r === "NaN")
    return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Nl.test(r))
    t = 16, r = r.toLowerCase();
  else if (Ll.test(r))
    t = 2;
  else if (Dl.test(r))
    t = 8;
  else
    throw Error(qt + r);
  for (o = r.search(/p/i), o > 0 ? (u = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), a = o >= 0, n = e.constructor, a && (r = r.replace(".", ""), s = r.length, o = s - o, i = os(n, new n(t), o, o * 2)), c = qr(r, t, Ct), f = c.length - 1, o = f; c[o] === 0; --o)
    c.pop();
  return o < 0 ? new n(e.s * 0) : (e.e = Hn(c, f), e.d = c, we = !1, a && (e = Le(e, i, s * 4)), u && (e = e.times(Math.abs(u) < 54 ? Ye(2, u) : Er.pow(2, u))), we = !0, e);
}
function Hl(e, r) {
  var t, n = r.d.length;
  if (n < 3)
    return r.isZero() ? r : or(e, 2, r, r);
  t = 1.4 * Math.sqrt(n), t = t > 16 ? 16 : t | 0, r = r.times(1 / Fn(5, t)), r = or(e, 2, r, r);
  for (var i, o = new e(5), a = new e(16), s = new e(20); t--; )
    i = r.times(r), r = r.times(o.plus(i.times(a.times(i).minus(s))));
  return r;
}
function or(e, r, t, n, i) {
  var o, a, s, u, c = e.precision, f = Math.ceil(c / ge);
  for (we = !1, u = t.times(t), s = new e(n); ; ) {
    if (a = Le(s.times(u), new e(r++ * r++), c, 1), s = i ? n.plus(a) : n.minus(a), n = Le(a.times(u), new e(r++ * r++), c, 1), a = s.plus(n), a.d[f] !== void 0) {
      for (o = f; a.d[o] === s.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = s, s = n, n = a, a = o;
  }
  return we = !0, a.d.length = f + 1, a;
}
function Fn(e, r) {
  for (var t = e; --r; )
    t *= e;
  return t;
}
function cs(e, r) {
  var t, n = r.s < 0, i = St(e, e.precision, 1), o = i.times(0.5);
  if (r = r.abs(), r.lte(o))
    return Pt = n ? 4 : 1, r;
  if (t = r.divToInt(i), t.isZero())
    Pt = n ? 3 : 2;
  else {
    if (r = r.minus(t.times(i)), r.lte(o))
      return Pt = J0(t) ? n ? 2 : 3 : n ? 4 : 1, r;
    Pt = J0(t) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return r.minus(i).abs();
}
function Hi(e, r, t, n) {
  var i, o, a, s, u, c, f, d, l, h = e.constructor, g = t !== void 0;
  if (g ? (lt(t, 1, Ut), n === void 0 ? n = h.rounding : lt(n, 0, 8)) : (t = h.precision, n = h.rounding), !e.isFinite())
    f = as(e);
  else {
    for (f = It(e), a = f.indexOf("."), g ? (i = 2, r == 16 ? t = t * 4 - 3 : r == 8 && (t = t * 3 - 2)) : i = r, a >= 0 && (f = f.replace(".", ""), l = new h(1), l.e = f.length - a, l.d = qr(It(l), 10, i), l.e = l.d.length), d = qr(f, 10, i), o = u = d.length; d[--u] == 0; )
      d.pop();
    if (!d[0])
      f = g ? "0p+0" : "0";
    else {
      if (a < 0 ? o-- : (e = new h(e), e.d = d, e.e = o, e = Le(e, l, t, n, 0, i), d = e.d, o = e.e, c = Jo), a = d[t], s = i / 2, c = c || d[t + 1] !== void 0, c = n < 4 ? (a !== void 0 || c) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : a > s || a === s && (n === 4 || c || n === 6 && d[t - 1] & 1 || n === (e.s < 0 ? 8 : 7)), d.length = t, c)
        for (; ++d[--t] > i - 1; )
          d[t] = 0, t || (++o, d.unshift(1));
      for (u = d.length; !d[u - 1]; --u)
        ;
      for (a = 0, f = ""; a < u; a++)
        f += mi.charAt(d[a]);
      if (g) {
        if (u > 1)
          if (r == 16 || r == 8) {
            for (a = r == 16 ? 4 : 3, --u; u % a; u++)
              f += "0";
            for (d = qr(f, i, r), u = d.length; !d[u - 1]; --u)
              ;
            for (a = 1, f = "1."; a < u; a++)
              f += mi.charAt(d[a]);
          } else
            f = f.charAt(0) + "." + f.slice(1);
        f = f + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; )
          f = "0" + f;
        f = "0." + f;
      } else if (++o > u)
        for (o -= u; o--; )
          f += "0";
      else
        o < u && (f = f.slice(0, o) + "." + f.slice(o));
    }
    f = (r == 16 ? "0x" : r == 2 ? "0b" : r == 8 ? "0o" : "") + f;
  }
  return e.s < 0 ? "-" + f : f;
}
function eo(e, r) {
  if (e.length > r)
    return e.length = r, !0;
}
function Fl(e) {
  return new this(e).abs();
}
function ql(e) {
  return new this(e).acos();
}
function Ul(e) {
  return new this(e).acosh();
}
function Vl(e, r) {
  return new this(e).plus(r);
}
function Wl(e) {
  return new this(e).asin();
}
function jl(e) {
  return new this(e).asinh();
}
function Yl(e) {
  return new this(e).atan();
}
function Kl(e) {
  return new this(e).atanh();
}
function Gl(e, r) {
  e = new this(e), r = new this(r);
  var t, n = this.precision, i = this.rounding, o = n + 4;
  return !e.s || !r.s ? t = new this(NaN) : !e.d && !r.d ? (t = St(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), t.s = e.s) : !r.d || e.isZero() ? (t = r.s < 0 ? St(this, n, i) : new this(0), t.s = e.s) : !e.d || r.isZero() ? (t = St(this, o, 1).times(0.5), t.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, t = this.atan(Le(e, r, o, 1)), r = St(this, o, 1), this.precision = n, this.rounding = i, t = e.s < 0 ? t.minus(r) : t.plus(r)) : t = this.atan(Le(e, r, o, 1)), t;
}
function Zl(e) {
  return new this(e).cbrt();
}
function Xl(e) {
  return pe(e = new this(e), e.e + 1, 2);
}
function Ql(e, r, t) {
  return new this(e).clamp(r, t);
}
function Jl(e) {
  if (!e || typeof e != "object")
    throw Error(zn + "Object expected");
  var r, t, n, i = e.defaults === !0, o = [
    "precision",
    1,
    Ut,
    "rounding",
    0,
    8,
    "toExpNeg",
    -er,
    0,
    "toExpPos",
    0,
    er,
    "maxE",
    0,
    er,
    "minE",
    -er,
    0,
    "modulo",
    0,
    9
  ];
  for (r = 0; r < o.length; r += 3)
    if (t = o[r], i && (this[t] = _i[t]), (n = e[t]) !== void 0)
      if (ot(n) === n && n >= o[r + 1] && n <= o[r + 2])
        this[t] = n;
      else
        throw Error(qt + t + ": " + n);
  if (t = "crypto", i && (this[t] = _i[t]), (n = e[t]) !== void 0)
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[t] = !0;
        else
          throw Error(ts);
      else
        this[t] = !1;
    else
      throw Error(qt + t + ": " + n);
  return this;
}
function eu(e) {
  return new this(e).cos();
}
function tu(e) {
  return new this(e).cosh();
}
function ls(e) {
  var r, t, n;
  function i(o) {
    var a, s, u, c = this;
    if (!(c instanceof i))
      return new i(o);
    if (c.constructor = i, to(o)) {
      c.s = o.s, we ? !o.d || o.e > i.maxE ? (c.e = NaN, c.d = null) : o.e < i.minE ? (c.e = 0, c.d = [0]) : (c.e = o.e, c.d = o.d.slice()) : (c.e = o.e, c.d = o.d ? o.d.slice() : o.d);
      return;
    }
    if (u = typeof o, u === "number") {
      if (o === 0) {
        c.s = 1 / o < 0 ? -1 : 1, c.e = 0, c.d = [0];
        return;
      }
      if (o < 0 ? (o = -o, c.s = -1) : c.s = 1, o === ~~o && o < 1e7) {
        for (a = 0, s = o; s >= 10; s /= 10)
          a++;
        we ? a > i.maxE ? (c.e = NaN, c.d = null) : a < i.minE ? (c.e = 0, c.d = [0]) : (c.e = a, c.d = [o]) : (c.e = a, c.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (c.s = NaN), c.e = NaN, c.d = null;
        return;
      }
      return Si(c, o.toString());
    } else if (u !== "string")
      throw Error(qt + o);
    return (s = o.charCodeAt(0)) === 45 ? (o = o.slice(1), c.s = -1) : (s === 43 && (o = o.slice(1)), c.s = 1), ns.test(o) ? Si(c, o) : zl(c, o);
  }
  if (i.prototype = Y, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Jl, i.clone = ls, i.isDecimal = to, i.abs = Fl, i.acos = ql, i.acosh = Ul, i.add = Vl, i.asin = Wl, i.asinh = jl, i.atan = Yl, i.atanh = Kl, i.atan2 = Gl, i.cbrt = Zl, i.ceil = Xl, i.clamp = Ql, i.cos = eu, i.cosh = tu, i.div = ru, i.exp = nu, i.floor = iu, i.hypot = ou, i.ln = su, i.log = au, i.log10 = lu, i.log2 = cu, i.max = uu, i.min = fu, i.mod = du, i.mul = hu, i.pow = pu, i.random = vu, i.round = gu, i.sign = bu, i.sin = xu, i.sinh = yu, i.sqrt = mu, i.sub = _u, i.sum = wu, i.tan = ku, i.tanh = Su, i.trunc = Cu, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < n.length; )
      e.hasOwnProperty(t = n[r++]) || (e[t] = this[t]);
  return i.config(e), i;
}
function ru(e, r) {
  return new this(e).div(r);
}
function nu(e) {
  return new this(e).exp();
}
function iu(e) {
  return pe(e = new this(e), e.e + 1, 3);
}
function ou() {
  var e, r, t = new this(0);
  for (we = !1, e = 0; e < arguments.length; )
    if (r = new this(arguments[e++]), r.d)
      t.d && (t = t.plus(r.times(r)));
    else {
      if (r.s)
        return we = !0, new this(1 / 0);
      t = r;
    }
  return we = !0, t.sqrt();
}
function to(e) {
  return e instanceof Er || e && e.toStringTag === rs || !1;
}
function su(e) {
  return new this(e).ln();
}
function au(e, r) {
  return new this(e).log(r);
}
function cu(e) {
  return new this(e).log(2);
}
function lu(e) {
  return new this(e).log(10);
}
function uu() {
  return ss(this, arguments, "lt");
}
function fu() {
  return ss(this, arguments, "gt");
}
function du(e, r) {
  return new this(e).mod(r);
}
function hu(e, r) {
  return new this(e).mul(r);
}
function pu(e, r) {
  return new this(e).pow(r);
}
function vu(e) {
  var r, t, n, i, o = 0, a = new this(1), s = [];
  if (e === void 0 ? e = this.precision : lt(e, 1, Ut), n = Math.ceil(e / ge), this.crypto)
    if (crypto.getRandomValues)
      for (r = crypto.getRandomValues(new Uint32Array(n)); o < n; )
        i = r[o], i >= 429e7 ? r[o] = crypto.getRandomValues(new Uint32Array(1))[0] : s[o++] = i % 1e7;
    else if (crypto.randomBytes) {
      for (r = crypto.randomBytes(n *= 4); o < n; )
        i = r[o] + (r[o + 1] << 8) + (r[o + 2] << 16) + ((r[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(r, o) : (s.push(i % 1e7), o += 4);
      o = n / 4;
    } else
      throw Error(ts);
  else
    for (; o < n; )
      s[o++] = Math.random() * 1e7 | 0;
  for (n = s[--o], e %= ge, n && e && (i = Ye(10, ge - e), s[o] = (n / i | 0) * i); s[o] === 0; o--)
    s.pop();
  if (o < 0)
    t = 0, s = [0];
  else {
    for (t = -1; s[0] === 0; t -= ge)
      s.shift();
    for (n = 1, i = s[0]; i >= 10; i /= 10)
      n++;
    n < ge && (t -= ge - n);
  }
  return a.e = t, a.d = s, a;
}
function gu(e) {
  return pe(e = new this(e), e.e + 1, this.rounding);
}
function bu(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function xu(e) {
  return new this(e).sin();
}
function yu(e) {
  return new this(e).sinh();
}
function mu(e) {
  return new this(e).sqrt();
}
function _u(e, r) {
  return new this(e).sub(r);
}
function wu() {
  var e = 0, r = arguments, t = new this(r[e]);
  for (we = !1; t.s && ++e < r.length; )
    t = t.plus(r[e]);
  return we = !0, pe(t, this.precision, this.rounding);
}
function ku(e) {
  return new this(e).tan();
}
function Su(e) {
  return new this(e).tanh();
}
function Cu(e) {
  return pe(e = new this(e), e.e + 1, 1);
}
Y[Symbol.for("nodejs.util.inspect.custom")] = Y.toString;
Y[Symbol.toStringTag] = "Decimal";
var Er = Y.constructor = ls(_i);
On = new Er(On);
Tn = new Er(Tn);
var ro = {}, Eu = {
  get exports() {
    return ro;
  },
  set exports(e) {
    ro = e;
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
  })(me, function() {
    var t = t || {}, n = document.querySelectorAll.bind(document), i = Object.prototype.toString, o = "ontouchstart" in window;
    function a(v) {
      return v !== null && v === v.window;
    }
    function s(v) {
      return a(v) ? v : v.nodeType === 9 && v.defaultView;
    }
    function u(v) {
      var b = typeof v;
      return b === "function" || b === "object" && !!v;
    }
    function c(v) {
      return u(v) && v.nodeType > 0;
    }
    function f(v) {
      var b = i.call(v);
      return b === "[object String]" ? n(v) : u(v) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(b) && v.hasOwnProperty("length") ? v : c(v) ? [v] : [];
    }
    function d(v) {
      var b, x, w = { top: 0, left: 0 }, _ = v && v.ownerDocument;
      return b = _.documentElement, typeof v.getBoundingClientRect < "u" && (w = v.getBoundingClientRect()), x = s(_), {
        top: w.top + x.pageYOffset - b.clientTop,
        left: w.left + x.pageXOffset - b.clientLeft
      };
    }
    function l(v) {
      var b = "";
      for (var x in v)
        v.hasOwnProperty(x) && (b += x + ":" + v[x] + ";");
      return b;
    }
    var h = {
      // Effect duration
      duration: 750,
      // Effect delay (check for scroll before showing effect)
      delay: 200,
      show: function(v, b, x) {
        if (v.button === 2)
          return !1;
        b = b || this;
        var w = document.createElement("div");
        w.className = "waves-ripple waves-rippling", b.appendChild(w);
        var _ = d(b), B = 0, T = 0;
        "touches" in v && v.touches.length ? (B = v.touches[0].pageY - _.top, T = v.touches[0].pageX - _.left) : (B = v.pageY - _.top, T = v.pageX - _.left), T = T >= 0 ? T : 0, B = B >= 0 ? B : 0;
        var C = "scale(" + b.clientWidth / 100 * 3 + ")", E = "translate(0,0)";
        x && (E = "translate(" + x.x + "px, " + x.y + "px)"), w.setAttribute("data-hold", Date.now()), w.setAttribute("data-x", T), w.setAttribute("data-y", B), w.setAttribute("data-scale", C), w.setAttribute("data-translate", E);
        var D = {
          top: B + "px",
          left: T + "px"
        };
        w.classList.add("waves-notransition"), w.setAttribute("style", l(D)), w.classList.remove("waves-notransition"), D["-webkit-transform"] = C + " " + E, D["-moz-transform"] = C + " " + E, D["-ms-transform"] = C + " " + E, D["-o-transform"] = C + " " + E, D.transform = C + " " + E, D.opacity = "1";
        var L = v.type === "mousemove" ? 2500 : h.duration;
        D["-webkit-transition-duration"] = L + "ms", D["-moz-transition-duration"] = L + "ms", D["-o-transition-duration"] = L + "ms", D["transition-duration"] = L + "ms", w.setAttribute("style", l(D));
      },
      hide: function(v, b) {
        b = b || this;
        for (var x = b.getElementsByClassName("waves-rippling"), w = 0, _ = x.length; w < _; w++)
          p(v, b, x[w]);
        o && (b.removeEventListener("touchend", h.hide), b.removeEventListener("touchcancel", h.hide)), b.removeEventListener("mouseup", h.hide), b.removeEventListener("mouseleave", h.hide);
      }
    }, g = {
      // Wrap <input> tag so it can perform the effect
      input: function(v) {
        var b = v.parentNode;
        if (!(b.tagName.toLowerCase() === "i" && b.classList.contains("waves-effect"))) {
          var x = document.createElement("i");
          x.className = v.className + " waves-input-wrapper", v.className = "waves-button-input", b.replaceChild(x, v), x.appendChild(v);
          var w = window.getComputedStyle(v, null), _ = w.color, B = w.backgroundColor;
          x.setAttribute("style", "color:" + _ + ";background:" + B), v.setAttribute("style", "background-color:rgba(0,0,0,0);");
        }
      },
      // Wrap <img> tag so it can perform the effect
      img: function(v) {
        var b = v.parentNode;
        if (!(b.tagName.toLowerCase() === "i" && b.classList.contains("waves-effect"))) {
          var x = document.createElement("i");
          b.replaceChild(x, v), x.appendChild(v);
        }
      }
    };
    function p(v, b, x) {
      if (x) {
        x.classList.remove("waves-rippling");
        var w = x.getAttribute("data-x"), _ = x.getAttribute("data-y"), B = x.getAttribute("data-scale"), T = x.getAttribute("data-translate"), C = Date.now() - Number(x.getAttribute("data-hold")), E = 350 - C;
        E < 0 && (E = 0), v.type === "mousemove" && (E = 150);
        var D = v.type === "mousemove" ? 2500 : h.duration;
        setTimeout(function() {
          var L = {
            top: _ + "px",
            left: w + "px",
            opacity: "0",
            // Duration
            "-webkit-transition-duration": D + "ms",
            "-moz-transition-duration": D + "ms",
            "-o-transition-duration": D + "ms",
            "transition-duration": D + "ms",
            "-webkit-transform": B + " " + T,
            "-moz-transform": B + " " + T,
            "-ms-transform": B + " " + T,
            "-o-transform": B + " " + T,
            transform: B + " " + T
          };
          x.setAttribute("style", l(L)), setTimeout(function() {
            try {
              b.removeChild(x);
            } catch {
              return !1;
            }
          }, D);
        }, E);
      }
    }
    var m = {
      /* uses an integer rather than bool so there's no issues with
       * needing to clear timeouts if another touch event occurred
       * within the 500ms. Cannot mouseup between touchstart and
       * touchend, nor in the 500ms after touchend. */
      touches: 0,
      allowEvent: function(v) {
        var b = !0;
        return /^(mousedown|mousemove)$/.test(v.type) && m.touches && (b = !1), b;
      },
      registerEvent: function(v) {
        var b = v.type;
        b === "touchstart" ? m.touches += 1 : /^(touchend|touchcancel)$/.test(b) && setTimeout(function() {
          m.touches && (m.touches -= 1);
        }, 500);
      }
    };
    function O(v) {
      if (m.allowEvent(v) === !1)
        return null;
      for (var b = null, x = v.target || v.srcElement; x.parentElement; ) {
        if (!(x instanceof SVGElement) && x.classList.contains("waves-effect")) {
          b = x;
          break;
        }
        x = x.parentElement;
      }
      return b;
    }
    function k(v) {
      var b = O(v);
      if (b !== null) {
        if (b.disabled || b.getAttribute("disabled") || b.classList.contains("disabled"))
          return;
        if (m.registerEvent(v), v.type === "touchstart" && h.delay) {
          var x = !1, w = setTimeout(function() {
            w = null, h.show(v, b);
          }, h.delay), _ = function(C) {
            w && (clearTimeout(w), w = null, h.show(v, b)), x || (x = !0, h.hide(C, b)), T();
          }, B = function(C) {
            w && (clearTimeout(w), w = null), _(C), T();
          };
          b.addEventListener("touchmove", B, !1), b.addEventListener("touchend", _, !1), b.addEventListener("touchcancel", _, !1);
          var T = function() {
            b.removeEventListener("touchmove", B), b.removeEventListener("touchend", _), b.removeEventListener("touchcancel", _);
          };
        } else
          h.show(v, b), o && (b.addEventListener("touchend", h.hide, !1), b.addEventListener("touchcancel", h.hide, !1)), b.addEventListener("mouseup", h.hide, !1), b.addEventListener("mouseleave", h.hide, !1);
      }
    }
    return t.init = function(v) {
      var b = document.body;
      v = v || {}, "duration" in v && (h.duration = v.duration), "delay" in v && (h.delay = v.delay), o && (b.addEventListener("touchstart", k, !1), b.addEventListener("touchcancel", m.registerEvent, !1), b.addEventListener("touchend", m.registerEvent, !1)), b.addEventListener("mousedown", k, !1);
    }, t.attach = function(v, b) {
      v = f(v), i.call(b) === "[object Array]" && (b = b.join(" ")), b = b ? " " + b : "";
      for (var x, w, _ = 0, B = v.length; _ < B; _++)
        x = v[_], w = x.tagName.toLowerCase(), ["input", "img"].indexOf(w) !== -1 && (g[w](x), x = x.parentElement), x.className.indexOf("waves-effect") === -1 && (x.className += " waves-effect" + b);
    }, t.ripple = function(v, b) {
      v = f(v);
      var x = v.length;
      if (b = b || {}, b.wait = b.wait || 0, b.position = b.position || null, x) {
        for (var w, _, B, T = {}, C = 0, E = {
          type: "mousedown",
          button: 1
        }, D = function(F, H) {
          return function() {
            h.hide(F, H);
          };
        }; C < x; C++)
          if (w = v[C], _ = b.position || {
            x: w.clientWidth / 2,
            y: w.clientHeight / 2
          }, B = d(w), T.x = B.left + _.x, T.y = B.top + _.y, E.pageX = T.x, E.pageY = T.y, h.show(E, w), b.wait >= 0 && b.wait !== null) {
            var L = {
              type: "mouseup",
              button: 1
            };
            setTimeout(D(L, w), b.wait);
          }
      }
    }, t.calm = function(v) {
      v = f(v);
      for (var b = {
        type: "mouseup",
        button: 1
      }, x = 0, w = v.length; x < w; x++)
        h.hide(b, v[x]);
    }, t.displayEffect = function(v) {
      console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), t.init(v);
    }, t;
  });
})(Eu);
const _e = { lunarInfo: [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560], solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"], Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"], Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"], solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"], sTermInfo: ["9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722"], nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"], nStr2: ["初", "十", "廿", "卅"], nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"], lunarFestival: [{ month: "正", day: "初一", name: "春节" }, { month: "正", day: "十五", name: "元宵节" }, { month: "二", day: "初二", name: "龙抬头" }, { month: "五", day: "初五", name: "端午节" }, { month: "七", day: "初七", name: "七夕节" }, { month: "七", day: "十五", name: "中元节" }, { month: "八", day: "十五", name: "中秋节" }, { month: "九", day: "初九", name: "重阳节" }, { month: "腊", day: "除夕", name: "除夕" }], solarFestival: [{ month: 1, day: 1, name: "元旦节" }, { month: 3, day: 8, name: "妇女节" }, { month: 3, day: 12, name: "植树节" }, { month: 4, day: 5, name: "清明节" }, { month: 5, day: 1, name: "劳动节" }, { month: 5, day: 4, name: "青年节" }, { month: 6, day: 1, name: "儿童节" }, { month: 7, day: 1, name: "建党节" }, { month: 8, day: 1, name: "建军节" }, { month: 9, day: 10, name: "教师节" }, { month: 10, day: 1, name: "国庆节" }], lYearDays: function(e) {
  var r, t = 348;
  for (r = 32768; r > 8; r >>= 1)
    t += _e.lunarInfo[e - 1900] & r ? 1 : 0;
  return t + _e.leapDays(e);
}, leapMonth: function(e) {
  return 15 & _e.lunarInfo[e - 1900];
}, leapDays: function(e) {
  return _e.leapMonth(e) ? 65536 & _e.lunarInfo[e - 1900] ? 30 : 29 : 0;
}, monthDays: function(e, r) {
  return r > 12 || r < 1 ? -1 : _e.lunarInfo[e - 1900] & 65536 >> r ? 30 : 29;
}, solarDays: function(e, r) {
  if (r > 12 || r < 1)
    return -1;
  var t = r - 1;
  return t == 1 ? e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 29 : 28 : _e.solarMonth[t];
}, toGanZhiYear: function(e) {
  var r = (e - 3) % 10, t = (e - 3) % 12;
  return r == 0 && (r = 10), t == 0 && (t = 12), _e.Gan[r - 1] + _e.Zhi[t - 1];
}, toAstro: function(e, r) {
  return "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2 * e - (r < [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22][e - 1] ? 2 : 0), 2) + "座";
}, toGanZhi: function(e) {
  return _e.Gan[e % 10] + _e.Zhi[e % 12];
}, getTerm: function(e, r) {
  if (e < 1900 || e > 2100 || r < 1 || r > 24)
    return -1;
  var t = _e.sTermInfo[e - 1900], n = [parseInt("0x" + t.substr(0, 5)).toString(), parseInt("0x" + t.substr(5, 5)).toString(), parseInt("0x" + t.substr(10, 5)).toString(), parseInt("0x" + t.substr(15, 5)).toString(), parseInt("0x" + t.substr(20, 5)).toString(), parseInt("0x" + t.substr(25, 5)).toString()], i = [n[0].substr(0, 1), n[0].substr(1, 2), n[0].substr(3, 1), n[0].substr(4, 2), n[1].substr(0, 1), n[1].substr(1, 2), n[1].substr(3, 1), n[1].substr(4, 2), n[2].substr(0, 1), n[2].substr(1, 2), n[2].substr(3, 1), n[2].substr(4, 2), n[3].substr(0, 1), n[3].substr(1, 2), n[3].substr(3, 1), n[3].substr(4, 2), n[4].substr(0, 1), n[4].substr(1, 2), n[4].substr(3, 1), n[4].substr(4, 2), n[5].substr(0, 1), n[5].substr(1, 2), n[5].substr(3, 1), n[5].substr(4, 2)];
  return parseInt(i[r - 1]);
}, toChinaMonth: function(e) {
  if (e > 12 || e < 1)
    return -1;
  var r = _e.nStr3[e - 1];
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
      r = _e.nStr2[Math.floor(e / 10)], r += _e.nStr1[e % 10];
  }
  return r;
}, getAnimal: function(e) {
  return _e.Animals[(e - 4) % 12];
}, getFestival: (e, r, t, n) => {
  let i = null;
  const o = parseInt(e + "");
  return i = o ? _e.solarFestival.find((a) => a.month === o && a.day == r) : _e.lunarFestival.find((a) => `${a.month}月` === e && a.day === r), i;
}, solar2lunar: function(e, r, t) {
  if (e < 1900 || e > 2100 || e == 1900 && r == 1 && t < 31)
    return -1;
  if (e)
    n = new Date(e, parseInt(r + "") - 1, t);
  else
    var n = /* @__PURE__ */ new Date();
  var i, o = 0, a = (e = n.getFullYear(), r = n.getMonth() + 1, t = n.getDate(), (Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()) - Date.UTC(1900, 0, 31)) / 864e5);
  for (i = 1900; i < 2101 && a > 0; i++)
    a -= o = _e.lYearDays(i);
  a < 0 && (a += o, i--);
  var s = /* @__PURE__ */ new Date(), u = !1;
  s.getFullYear() == e && s.getMonth() + 1 == r && s.getDate() == t && (u = !0);
  var c = n.getDay(), f = _e.nStr1[c];
  c == 0 && (c = 7);
  var d = i, l = _e.leapMonth(i), h = !1;
  for (i = 1; i < 13 && a > 0; i++)
    l > 0 && i == l + 1 && h == 0 ? (--i, h = !0, o = _e.leapDays(d)) : o = _e.monthDays(d, i), h == 1 && i == l + 1 && (h = !1), a -= o;
  a == 0 && l > 0 && i == l + 1 && (h ? h = !1 : (h = !0, --i)), a < 0 && (a += o, --i);
  var g = i, p = a + 1, m = r - 1, O = _e.toGanZhiYear(d), k = _e.getTerm(d, 2 * r - 1), v = _e.getTerm(d, 2 * r), b = _e.toGanZhi(12 * (e - 1900) + r + 11);
  t >= k && (b = _e.toGanZhi(12 * (e - 1900) + r + 12));
  var x = !1, w = null;
  k == t && (x = !0, w = _e.solarTerm[2 * r - 2]), v == t && (x = !0, w = _e.solarTerm[2 * r - 1]);
  var _ = Date.UTC(e, m, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, B = _e.toGanZhi(_ + t - 1), T = _e.toAstro(r, t);
  const C = _e.toChinaMonth(g), E = _e.toChinaDay(p);
  return { lYear: d, lMonth: g, lDay: p, Animal: _e.getAnimal(d), IMonthCn: (h ? "闰" : "") + C, IDayCn: E, cYear: e, cMonth: r, cDay: t, gzYear: O, gzMonth: b, gzDay: B, isToday: u, isLeap: h, nWeek: c, ncWeek: "星期" + f, isTerm: x, Term: w, astro: T, festcn: _e.getFestival(C, E, e, r), fest: _e.getFestival(r, t, e) };
}, lunar2solar: function(e, r, t, n = !0) {
  n = !!n;
  var i = _e.leapMonth(e);
  if (_e.leapDays(e), n && i != r || e == 2100 && r == 12 && t > 1 || e == 1900 && r == 1 && t < 31)
    return -1;
  var o = _e.monthDays(e, r), a = o;
  if (n && (a = _e.leapDays(e)), e < 1900 || e > 2100 || t > a)
    return -1;
  for (var s = 0, u = 1900; u < e; u++)
    s += _e.lYearDays(u);
  var c = 0, f = !1;
  for (u = 1; u < r; u++)
    c = _e.leapMonth(e), f || c <= u && c > 0 && (s += _e.leapDays(e), f = !0), s += _e.monthDays(e, u);
  n && (s += o);
  var d = Date.UTC(1900, 1, 30, 0, 0, 0), l = new Date(864e5 * (s + t - 31) + d), h = l.getUTCFullYear(), g = l.getUTCMonth() + 1, p = l.getUTCDate();
  return _e.solar2lunar(h, g, p);
} };
_e.lunar2solar;
function Lt(e, r) {
  return Object.prototype.toString.call(e) === `[object ${r}]`;
}
function no(e) {
  return Object.prototype.toString.call(e);
}
const Yi = class {
  static getTypeLong(r) {
    return no(r);
  }
  static getType(r) {
    const t = no(r);
    return t.substring(8, t.length - 1).toLocaleLowerCase();
  }
  static isDef(r) {
    return r !== void 0;
  }
  static isUnDef(r) {
    return !this.isDef(r);
  }
  static isObject(r) {
    return r !== null && Lt(r, "Object");
  }
  static isEmpty(r) {
    return this.isArray(r) || this.isString(r) ? r.length === 0 : r instanceof Map || r instanceof Set ? r.size === 0 : !!this.isObject(r) && Object.keys(r).length === 0;
  }
  static isDate(r) {
    return Lt(r, "Date");
  }
  static isNull(r) {
    return r === null;
  }
  static isNullAndUnDef(r) {
    return this.isUnDef(r) && this.isNull(r);
  }
  static isNullOrUnDef(r) {
    return this.isUnDef(r) || this.isNull(r);
  }
  static isNumber(r) {
    return Lt(r, "Number");
  }
  static isPromise(r) {
    return Lt(r, "Promise") && this.isObject(r) && this.isFunction(r.then) && this.isFunction(r.catch);
  }
  static isString(r) {
    return Lt(r, "String");
  }
  static isFunction(r) {
    return typeof r == "function";
  }
  static isBoolean(r) {
    return Lt(r, "Boolean");
  }
  static isRegExp(r) {
    return Lt(r, "RegExp");
  }
  static isArray(r) {
    return r && Array.isArray(r);
  }
  static isWindow(r) {
    return typeof window < "u" && Lt(r, "Window");
  }
  static isElement(r) {
    return this.isObject(r) && !!r.tagName;
  }
  static isMap(r) {
    return Lt(r, "Map");
  }
  static isUrl(r) {
    return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(r);
  }
};
let br = Yi;
ni(br, "isServer", typeof window > "u"), ni(br, "isClient", !Yi.isServer);
function Ur(e) {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-f]{6})$/.test(e);
}
function si(e) {
  let r = e.toLowerCase();
  if (Ur(e)) {
    if (r.length === 4) {
      let n = "#";
      for (let i = 1; i < 4; i += 1)
        n += r.slice(i, i + 1).concat(r.slice(i, i + 1));
      r = n;
    }
    const t = [];
    for (let n = 1; n < 7; n += 2)
      t.push(parseInt("0x" + r.slice(n, n + 2)));
    return "RGB(" + t.join(",") + ")";
  }
  return r;
}
function ai(e, r) {
  const t = parseInt(e, 16) + r, n = t > 255 ? 255 : t;
  return n.toString(16).length > 1 ? n.toString(16) : `0${n.toString(16)}`;
}
function io(e, r, t) {
  const n = [e, r, t].map((i) => (i /= 255) <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
  return 0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2];
}
function ci(e, r) {
  const t = parseInt(e, 16) - r, n = t < 0 ? 0 : t;
  return n.toString(16).length > 1 ? n.toString(16) : `0${n.toString(16)}`;
}
var oo = Object.freeze({ __proto__: null, isHexColor: Ur, rgbToHex: function(e, r, t) {
  const n = (e << 16 | r << 8 | t).toString(16);
  return "#" + new Array(Math.abs(n.length - 7)).join("0") + n;
}, hexToRGB: si, hexToRGBA: function(e, r) {
  let t = e.toLowerCase();
  if (Ur(e)) {
    if (t.length === 4) {
      let i = "#";
      for (let o = 1; o < 4; o += 1)
        i += t.slice(o, o + 1).concat(t.slice(o, o + 1));
      t = i;
    }
    const n = [];
    for (let i = 1; i < 7; i += 2)
      n.push(parseInt("0x" + t.slice(i, i + 2)));
    return `RGBA(${n.join(",")},${r})`;
  }
  return t;
}, colorIsDark: function(e) {
  if (!Ur(e))
    return;
  const [r, t, n] = si(e).replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",").map((i) => Number(i));
  return 0.299 * r + 0.578 * t + 0.114 * n < 192;
}, darken: function(e, r) {
  return e = e.indexOf("#") >= 0 ? e.substring(1, e.length) : e, r = Math.trunc(255 * r / 100), `#${ci(e.substring(0, 2), r)}${ci(e.substring(2, 4), r)}${ci(e.substring(4, 6), r)}`;
}, lighten: function(e, r) {
  return e = e.indexOf("#") >= 0 ? e.substring(1, e.length) : e, r = Math.trunc(255 * r / 100), `#${ai(e.substring(0, 2), r)}${ai(e.substring(2, 4), r)}${ai(e.substring(4, 6), r)}`;
}, calculateBestTextColor: function(e) {
  const r = si(e.substring(1));
  var t, n;
  return t = r.split(","), n = [0, 0, 0], (io(~~t[0], ~~t[1], ~~t[2]) + 0.05) / (io(n[0], n[1], n[2]) + 0.05) >= 12 ? "#000000" : "#FFFFFF";
} });
for (let e = 0; e <= 15; e++)
  e.toString(16);
let Bu = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof globalThis == "object" && globalThis.globalThis === globalThis ? globalThis : void 0;
Bu.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && /Safari/.test(navigator.userAgent);
var rr = { local: { has: (e) => Object.prototype.hasOwnProperty.call(localStorage, e), setItem: (e, r, t = 0) => {
  const n = (/* @__PURE__ */ new Date()).getTime(), i = br.isDate(t) ? n + 1e3 * t : 0;
  localStorage.setItem(e, JSON.stringify({ value: r, overTime: i }));
}, getItem: (e) => {
  const r = localStorage.getItem(e);
  if (!r)
    return null;
  const t = JSON.parse(r);
  return (/* @__PURE__ */ new Date()).getTime() > t.overTime && t.overTime !== 0 ? (localStorage.removeItem(e), null) : t.value;
}, removeItem: (e) => {
  e && localStorage.removeItem(e);
}, clear: (e) => {
  e ? localStorage.removeItem(e) : localStorage.clear();
}, size: () => {
  const e = Object.keys(localStorage);
  let r = 0;
  for (let t = 0; t < e.length; t++) {
    const n = e[t], i = localStorage.getItem(n) || "";
    r += 2 * (n.length + i.length);
  }
  return Math.round(r / 1024);
} }, session: { has: (e) => Object.prototype.hasOwnProperty.call(sessionStorage, e), setItem: (e, r, t = 0) => {
  const n = (/* @__PURE__ */ new Date()).getTime(), i = t ? n + 1e3 * t : 0;
  sessionStorage.setItem(e, JSON.stringify({ value: r, overTime: i }));
}, getItem: (e) => {
  const r = sessionStorage.getItem(e);
  if (!r)
    return null;
  const t = JSON.parse(r);
  return (/* @__PURE__ */ new Date()).getTime() > t.overTime && t.overTime !== 0 ? (sessionStorage.removeItem(e), null) : t.value;
}, removeItem: (e) => {
  e && sessionStorage.removeItem(e);
}, clear: (e) => {
  e ? sessionStorage.removeItem(e) : sessionStorage.clear();
}, size: () => {
  const e = Object.keys(sessionStorage);
  let r = 0;
  for (let t = 0; t < e.length; t++) {
    const n = e[t], i = sessionStorage.getItem(n) || "";
    r += 2 * (n.length + i.length);
  }
  return Math.round(r / 1024);
} }, forage: Wc, cookie: $o };
window.socketMap = /* @__PURE__ */ new Map();
Er.set({ precision: 14 });
var Au = Object.freeze({ __proto__: null, debounce: function(e, r) {
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
const Ke = da, yr = /^[a-z0-9]+(-[a-z0-9]+)*$/, qn = (e, r, t, n = "") => {
  const i = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (i.length < 2 || i.length > 3)
      return null;
    n = i.shift().slice(1);
  }
  if (i.length > 3 || !i.length)
    return null;
  if (i.length > 1) {
    const s = i.pop(), u = i.pop(), c = {
      // Allow provider without '@': "provider:prefix:name"
      provider: i.length > 0 ? i[0] : n,
      prefix: u,
      name: s
    };
    return r && !Vr(c) ? null : c;
  }
  const o = i[0], a = o.split("-");
  if (a.length > 1) {
    const s = {
      provider: n,
      prefix: a.shift(),
      name: a.join("-")
    };
    return r && !Vr(s) ? null : s;
  }
  if (t && n === "") {
    const s = {
      provider: n,
      prefix: "",
      name: o
    };
    return r && !Vr(s, t) ? null : s;
  }
  return null;
}, Vr = (e, r) => e ? !!((e.provider === "" || e.provider.match(yr)) && (r && e.prefix === "" || e.prefix.match(yr)) && e.name.match(yr)) : !1, us = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Ln = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Un = Object.freeze({
  ...us,
  ...Ln
}), Ci = Object.freeze({
  ...Un,
  body: "",
  hidden: !1
});
function Iu(e, r) {
  const t = {};
  !e.hFlip != !r.hFlip && (t.hFlip = !0), !e.vFlip != !r.vFlip && (t.vFlip = !0);
  const n = ((e.rotate || 0) + (r.rotate || 0)) % 4;
  return n && (t.rotate = n), t;
}
function so(e, r) {
  const t = Iu(e, r);
  for (const n in Ci)
    n in Ln ? n in e && !(n in t) && (t[n] = Ln[n]) : n in r ? t[n] = r[n] : n in e && (t[n] = e[n]);
  return t;
}
function Ou(e, r) {
  const t = e.icons, n = e.aliases || /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  function o(a) {
    if (t[a])
      return i[a] = [];
    if (!(a in i)) {
      i[a] = null;
      const s = n[a] && n[a].parent, u = s && o(s);
      u && (i[a] = [s].concat(u));
    }
    return i[a];
  }
  return (r || Object.keys(t).concat(Object.keys(n))).forEach(o), i;
}
function Tu(e, r, t) {
  const n = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function a(s) {
    o = so(
      n[s] || i[s],
      o
    );
  }
  return a(r), t.forEach(a), so(e, o);
}
function fs(e, r) {
  const t = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return t;
  e.not_found instanceof Array && e.not_found.forEach((i) => {
    r(i, null), t.push(i);
  });
  const n = Ou(e);
  for (const i in n) {
    const o = n[i];
    o && (r(i, Tu(e, i, o)), t.push(i));
  }
  return t;
}
const Ru = {
  provider: "",
  aliases: {},
  not_found: {},
  ...us
};
function li(e, r) {
  for (const t in r)
    if (t in e && typeof e[t] != typeof r[t])
      return !1;
  return !0;
}
function ds(e) {
  if (typeof e != "object" || e === null)
    return null;
  const r = e;
  if (typeof r.prefix != "string" || !e.icons || typeof e.icons != "object" || !li(e, Ru))
    return null;
  const t = r.icons;
  for (const i in t) {
    const o = t[i];
    if (!i.match(yr) || typeof o.body != "string" || !li(
      o,
      Ci
    ))
      return null;
  }
  const n = r.aliases || /* @__PURE__ */ Object.create(null);
  for (const i in n) {
    const o = n[i], a = o.parent;
    if (!i.match(yr) || typeof a != "string" || !t[a] && !n[a] || !li(
      o,
      Ci
    ))
      return null;
  }
  return r;
}
const ao = /* @__PURE__ */ Object.create(null);
function Lu(e, r) {
  return {
    provider: e,
    prefix: r,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function Kt(e, r) {
  const t = ao[e] || (ao[e] = /* @__PURE__ */ Object.create(null));
  return t[r] || (t[r] = Lu(e, r));
}
function Fi(e, r) {
  return ds(r) ? fs(r, (t, n) => {
    n ? e.icons[t] = n : e.missing.add(t);
  }) : [];
}
function Nu(e, r, t) {
  try {
    if (typeof t.body == "string")
      return e.icons[r] = { ...t }, !0;
  } catch {
  }
  return !1;
}
let kr = !1;
function hs(e) {
  return typeof e == "boolean" && (kr = e), kr;
}
function Du(e) {
  const r = typeof e == "string" ? qn(e, !0, kr) : e;
  if (r) {
    const t = Kt(r.provider, r.prefix), n = r.name;
    return t.icons[n] || (t.missing.has(n) ? null : void 0);
  }
}
function $u(e, r) {
  const t = qn(e, !0, kr);
  if (!t)
    return !1;
  const n = Kt(t.provider, t.prefix);
  return Nu(n, t.name, r);
}
function Pu(e, r) {
  if (typeof e != "object")
    return !1;
  if (typeof r != "string" && (r = e.provider || ""), kr && !r && !e.prefix) {
    let i = !1;
    return ds(e) && (e.prefix = "", fs(e, (o, a) => {
      a && $u(o, a) && (i = !0);
    })), i;
  }
  const t = e.prefix;
  if (!Vr({
    provider: r,
    prefix: t,
    name: "a"
  }))
    return !1;
  const n = Kt(r, t);
  return !!Fi(n, e);
}
const ps = Object.freeze({
  width: null,
  height: null
}), vs = Object.freeze({
  // Dimensions
  ...ps,
  // Transformations
  ...Ln
}), Mu = /(-?[0-9.]*[0-9]+[0-9.]*)/g, zu = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function co(e, r, t) {
  if (r === 1)
    return e;
  if (t = t || 100, typeof e == "number")
    return Math.ceil(e * r * t) / t;
  if (typeof e != "string")
    return e;
  const n = e.split(Mu);
  if (n === null || !n.length)
    return e;
  const i = [];
  let o = n.shift(), a = zu.test(o);
  for (; ; ) {
    if (a) {
      const s = parseFloat(o);
      isNaN(s) ? i.push(o) : i.push(Math.ceil(s * r * t) / t);
    } else
      i.push(o);
    if (o = n.shift(), o === void 0)
      return i.join("");
    a = !a;
  }
}
const Hu = (e) => e === "unset" || e === "undefined" || e === "none";
function Fu(e, r) {
  const t = {
    ...Un,
    ...e
  }, n = {
    ...vs,
    ...r
  }, i = {
    left: t.left,
    top: t.top,
    width: t.width,
    height: t.height
  };
  let o = t.body;
  [t, n].forEach((g) => {
    const p = [], m = g.hFlip, O = g.vFlip;
    let k = g.rotate;
    m ? O ? k += 2 : (p.push(
      "translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"
    ), p.push("scale(-1 1)"), i.top = i.left = 0) : O && (p.push(
      "translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"
    ), p.push("scale(1 -1)"), i.top = i.left = 0);
    let v;
    switch (k < 0 && (k -= Math.floor(k / 4) * 4), k = k % 4, k) {
      case 1:
        v = i.height / 2 + i.top, p.unshift(
          "rotate(90 " + v.toString() + " " + v.toString() + ")"
        );
        break;
      case 2:
        p.unshift(
          "rotate(180 " + (i.width / 2 + i.left).toString() + " " + (i.height / 2 + i.top).toString() + ")"
        );
        break;
      case 3:
        v = i.width / 2 + i.left, p.unshift(
          "rotate(-90 " + v.toString() + " " + v.toString() + ")"
        );
        break;
    }
    k % 2 === 1 && (i.left !== i.top && (v = i.left, i.left = i.top, i.top = v), i.width !== i.height && (v = i.width, i.width = i.height, i.height = v)), p.length && (o = '<g transform="' + p.join(" ") + '">' + o + "</g>");
  });
  const a = n.width, s = n.height, u = i.width, c = i.height;
  let f, d;
  a === null ? (d = s === null ? "1em" : s === "auto" ? c : s, f = co(d, u / c)) : (f = a === "auto" ? u : a, d = s === null ? co(f, c / u) : s === "auto" ? c : s);
  const l = {}, h = (g, p) => {
    Hu(p) || (l[g] = p.toString());
  };
  return h("width", f), h("height", d), l.viewBox = i.left.toString() + " " + i.top.toString() + " " + u.toString() + " " + c.toString(), {
    attributes: l,
    body: o
  };
}
const qu = /\sid="(\S+)"/g, Uu = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Vu = 0;
function Wu(e, r = Uu) {
  const t = [];
  let n;
  for (; n = qu.exec(e); )
    t.push(n[1]);
  if (!t.length)
    return e;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return t.forEach((o) => {
    const a = typeof r == "function" ? r(o) : r + (Vu++).toString(), s = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + s + ')([")]|\\.[a-z])', "g"),
      "$1" + a + i + "$3"
    );
  }), e = e.replace(new RegExp(i, "g"), ""), e;
}
const Ei = /* @__PURE__ */ Object.create(null);
function ju(e, r) {
  Ei[e] = r;
}
function Bi(e) {
  return Ei[e] || Ei[""];
}
function qi(e) {
  let r;
  if (typeof e.resources == "string")
    r = [e.resources];
  else if (r = e.resources, !(r instanceof Array) || !r.length)
    return null;
  return {
    // API hosts
    resources: r,
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
const Ui = /* @__PURE__ */ Object.create(null), dr = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Wr = [];
for (; dr.length > 0; )
  dr.length === 1 || Math.random() > 0.5 ? Wr.push(dr.shift()) : Wr.push(dr.pop());
Ui[""] = qi({
  resources: ["https://api.iconify.design"].concat(Wr)
});
function Yu(e, r) {
  const t = qi(r);
  return t === null ? !1 : (Ui[e] = t, !0);
}
function Vi(e) {
  return Ui[e];
}
const Ku = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let lo = Ku();
function Gu(e, r) {
  const t = Vi(e);
  if (!t)
    return 0;
  let n;
  if (!t.maxURL)
    n = 0;
  else {
    let i = 0;
    t.resources.forEach((a) => {
      i = Math.max(i, a.length);
    });
    const o = r + ".json?icons=";
    n = t.maxURL - i - t.path.length - o.length;
  }
  return n;
}
function Zu(e) {
  return e === 404;
}
const Xu = (e, r, t) => {
  const n = [], i = Gu(e, r), o = "icons";
  let a = {
    type: o,
    provider: e,
    prefix: r,
    icons: []
  }, s = 0;
  return t.forEach((u, c) => {
    s += u.length + 1, s >= i && c > 0 && (n.push(a), a = {
      type: o,
      provider: e,
      prefix: r,
      icons: []
    }, s = u.length), a.icons.push(u);
  }), n.push(a), n;
};
function Qu(e) {
  if (typeof e == "string") {
    const r = Vi(e);
    if (r)
      return r.path;
  }
  return "/";
}
const Ju = (e, r, t) => {
  if (!lo) {
    t("abort", 424);
    return;
  }
  let n = Qu(r.provider);
  switch (r.type) {
    case "icons": {
      const o = r.prefix, s = r.icons.join(","), u = new URLSearchParams({
        icons: s
      });
      n += o + ".json?" + u.toString();
      break;
    }
    case "custom": {
      const o = r.uri;
      n += o.slice(0, 1) === "/" ? o.slice(1) : o;
      break;
    }
    default:
      t("abort", 400);
      return;
  }
  let i = 503;
  lo(e + n).then((o) => {
    const a = o.status;
    if (a !== 200) {
      setTimeout(() => {
        t(Zu(a) ? "abort" : "next", a);
      });
      return;
    }
    return i = 501, o.json();
  }).then((o) => {
    if (typeof o != "object" || o === null) {
      setTimeout(() => {
        o === 404 ? t("abort", o) : t("next", i);
      });
      return;
    }
    setTimeout(() => {
      t("success", o);
    });
  }).catch(() => {
    t("next", i);
  });
}, ef = {
  prepare: Xu,
  send: Ju
};
function tf(e) {
  const r = {
    loaded: [],
    missing: [],
    pending: []
  }, t = /* @__PURE__ */ Object.create(null);
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
    const o = i.provider, a = i.prefix, s = i.name, u = t[o] || (t[o] = /* @__PURE__ */ Object.create(null)), c = u[a] || (u[a] = Kt(o, a));
    let f;
    s in c.icons ? f = r.loaded : a === "" || c.missing.has(s) ? f = r.missing : f = r.pending;
    const d = {
      provider: o,
      prefix: a,
      name: s
    };
    f.push(d);
  }), r;
}
function gs(e, r) {
  e.forEach((t) => {
    const n = t.loaderCallbacks;
    n && (t.loaderCallbacks = n.filter((i) => i.id !== r));
  });
}
function rf(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const r = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!r.length)
      return;
    let t = !1;
    const n = e.provider, i = e.prefix;
    r.forEach((o) => {
      const a = o.icons, s = a.pending.length;
      a.pending = a.pending.filter((u) => {
        if (u.prefix !== i)
          return !0;
        const c = u.name;
        if (e.icons[c])
          a.loaded.push({
            provider: n,
            prefix: i,
            name: c
          });
        else if (e.missing.has(c))
          a.missing.push({
            provider: n,
            prefix: i,
            name: c
          });
        else
          return t = !0, !0;
        return !1;
      }), a.pending.length !== s && (t || gs([e], o.id), o.callback(
        a.loaded.slice(0),
        a.missing.slice(0),
        a.pending.slice(0),
        o.abort
      ));
    });
  }));
}
let nf = 0;
function of(e, r, t) {
  const n = nf++, i = gs.bind(null, t, n);
  if (!r.pending.length)
    return i;
  const o = {
    id: n,
    icons: r,
    callback: e,
    abort: i
  };
  return t.forEach((a) => {
    (a.loaderCallbacks || (a.loaderCallbacks = [])).push(o);
  }), i;
}
function sf(e, r = !0, t = !1) {
  const n = [];
  return e.forEach((i) => {
    const o = typeof i == "string" ? qn(i, r, t) : i;
    o && n.push(o);
  }), n;
}
var af = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function cf(e, r, t, n) {
  const i = e.resources.length, o = e.random ? Math.floor(Math.random() * i) : e.index;
  let a;
  if (e.random) {
    let w = e.resources.slice(0);
    for (a = []; w.length > 1; ) {
      const _ = Math.floor(Math.random() * w.length);
      a.push(w[_]), w = w.slice(0, _).concat(w.slice(_ + 1));
    }
    a = a.concat(w);
  } else
    a = e.resources.slice(o).concat(e.resources.slice(0, o));
  const s = Date.now();
  let u = "pending", c = 0, f, d = null, l = [], h = [];
  typeof n == "function" && h.push(n);
  function g() {
    d && (clearTimeout(d), d = null);
  }
  function p() {
    u === "pending" && (u = "aborted"), g(), l.forEach((w) => {
      w.status === "pending" && (w.status = "aborted");
    }), l = [];
  }
  function m(w, _) {
    _ && (h = []), typeof w == "function" && h.push(w);
  }
  function O() {
    return {
      startTime: s,
      payload: r,
      status: u,
      queriesSent: c,
      queriesPending: l.length,
      subscribe: m,
      abort: p
    };
  }
  function k() {
    u = "failed", h.forEach((w) => {
      w(void 0, f);
    });
  }
  function v() {
    l.forEach((w) => {
      w.status === "pending" && (w.status = "aborted");
    }), l = [];
  }
  function b(w, _, B) {
    const T = _ !== "success";
    switch (l = l.filter((C) => C !== w), u) {
      case "pending":
        break;
      case "failed":
        if (T || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (_ === "abort") {
      f = B, k();
      return;
    }
    if (T) {
      f = B, l.length || (a.length ? x() : k());
      return;
    }
    if (g(), v(), !e.random) {
      const C = e.resources.indexOf(w.resource);
      C !== -1 && C !== e.index && (e.index = C);
    }
    u = "completed", h.forEach((C) => {
      C(B);
    });
  }
  function x() {
    if (u !== "pending")
      return;
    g();
    const w = a.shift();
    if (w === void 0) {
      if (l.length) {
        d = setTimeout(() => {
          g(), u === "pending" && (v(), k());
        }, e.timeout);
        return;
      }
      k();
      return;
    }
    const _ = {
      status: "pending",
      resource: w,
      callback: (B, T) => {
        b(_, B, T);
      }
    };
    l.push(_), c++, d = setTimeout(x, e.rotate), t(w, r, _.callback);
  }
  return setTimeout(x), O;
}
function bs(e) {
  const r = {
    ...af,
    ...e
  };
  let t = [];
  function n() {
    t = t.filter((s) => s().status === "pending");
  }
  function i(s, u, c) {
    const f = cf(
      r,
      s,
      u,
      (d, l) => {
        n(), c && c(d, l);
      }
    );
    return t.push(f), f;
  }
  function o(s) {
    return t.find((u) => s(u)) || null;
  }
  return {
    query: i,
    find: o,
    setIndex: (s) => {
      r.index = s;
    },
    getIndex: () => r.index,
    cleanup: n
  };
}
function uo() {
}
const ui = /* @__PURE__ */ Object.create(null);
function lf(e) {
  if (!ui[e]) {
    const r = Vi(e);
    if (!r)
      return;
    const t = bs(r), n = {
      config: r,
      redundancy: t
    };
    ui[e] = n;
  }
  return ui[e];
}
function uf(e, r, t) {
  let n, i;
  if (typeof e == "string") {
    const o = Bi(e);
    if (!o)
      return t(void 0, 424), uo;
    i = o.send;
    const a = lf(e);
    a && (n = a.redundancy);
  } else {
    const o = qi(e);
    if (o) {
      n = bs(o);
      const a = e.resources ? e.resources[0] : "", s = Bi(a);
      s && (i = s.send);
    }
  }
  return !n || !i ? (t(void 0, 424), uo) : n.query(r, i, t)().abort;
}
const fo = "iconify2", Sr = "iconify", xs = Sr + "-count", ho = Sr + "-version", ys = 36e5, ff = 168;
function Ai(e, r) {
  try {
    return e.getItem(r);
  } catch {
  }
}
function Wi(e, r, t) {
  try {
    return e.setItem(r, t), !0;
  } catch {
  }
}
function po(e, r) {
  try {
    e.removeItem(r);
  } catch {
  }
}
function Ii(e, r) {
  return Wi(e, xs, r.toString());
}
function Oi(e) {
  return parseInt(Ai(e, xs)) || 0;
}
const Vn = {
  local: !0,
  session: !0
}, ms = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let ji = !1;
function df(e) {
  ji = e;
}
let $r = typeof window > "u" ? {} : window;
function _s(e) {
  const r = e + "Storage";
  try {
    if ($r && $r[r] && typeof $r[r].length == "number")
      return $r[r];
  } catch {
  }
  Vn[e] = !1;
}
function ws(e, r) {
  const t = _s(e);
  if (!t)
    return;
  const n = Ai(t, ho);
  if (n !== fo) {
    if (n) {
      const s = Oi(t);
      for (let u = 0; u < s; u++)
        po(t, Sr + u.toString());
    }
    Wi(t, ho, fo), Ii(t, 0);
    return;
  }
  const i = Math.floor(Date.now() / ys) - ff, o = (s) => {
    const u = Sr + s.toString(), c = Ai(t, u);
    if (typeof c == "string") {
      try {
        const f = JSON.parse(c);
        if (typeof f == "object" && typeof f.cached == "number" && f.cached > i && typeof f.provider == "string" && typeof f.data == "object" && typeof f.data.prefix == "string" && // Valid item: run callback
        r(f, s))
          return !0;
      } catch {
      }
      po(t, u);
    }
  };
  let a = Oi(t);
  for (let s = a - 1; s >= 0; s--)
    o(s) || (s === a - 1 ? (a--, Ii(t, a)) : ms[e].add(s));
}
function ks() {
  if (!ji) {
    df(!0);
    for (const e in Vn)
      ws(e, (r) => {
        const t = r.data, n = r.provider, i = t.prefix, o = Kt(
          n,
          i
        );
        if (!Fi(o, t).length)
          return !1;
        const a = t.lastModified || -1;
        return o.lastModifiedCached = o.lastModifiedCached ? Math.min(o.lastModifiedCached, a) : a, !0;
      });
  }
}
function hf(e, r) {
  const t = e.lastModifiedCached;
  if (
    // Matches or newer
    t && t >= r
  )
    return t === r;
  if (e.lastModifiedCached = r, t)
    for (const n in Vn)
      ws(n, (i) => {
        const o = i.data;
        return i.provider !== e.provider || o.prefix !== e.prefix || o.lastModified === r;
      });
  return !0;
}
function pf(e, r) {
  ji || ks();
  function t(n) {
    let i;
    if (!Vn[n] || !(i = _s(n)))
      return;
    const o = ms[n];
    let a;
    if (o.size)
      o.delete(a = Array.from(o).shift());
    else if (a = Oi(i), !Ii(i, a + 1))
      return;
    const s = {
      cached: Math.floor(Date.now() / ys),
      provider: e.provider,
      data: r
    };
    return Wi(
      i,
      Sr + a.toString(),
      JSON.stringify(s)
    );
  }
  r.lastModified && !hf(e, r.lastModified) || Object.keys(r.icons).length && (r.not_found && (r = Object.assign({}, r), delete r.not_found), t("local") || t("session"));
}
function vo() {
}
function vf(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, rf(e);
  }));
}
function gf(e, r) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(r).sort() : e.iconsToLoad = r, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: t, prefix: n } = e, i = e.iconsToLoad;
    delete e.iconsToLoad;
    let o;
    if (!i || !(o = Bi(t)))
      return;
    o.prepare(t, n, i).forEach((s) => {
      uf(t, s, (u) => {
        if (typeof u != "object")
          s.icons.forEach((c) => {
            e.missing.add(c);
          });
        else
          try {
            const c = Fi(
              e,
              u
            );
            if (!c.length)
              return;
            const f = e.pendingIcons;
            f && c.forEach((d) => {
              f.delete(d);
            }), pf(e, u);
          } catch (c) {
            console.error(c);
          }
        vf(e);
      });
    });
  }));
}
const bf = (e, r) => {
  const t = sf(e, !0, hs()), n = tf(t);
  if (!n.pending.length) {
    let u = !0;
    return r && setTimeout(() => {
      u && r(
        n.loaded,
        n.missing,
        n.pending,
        vo
      );
    }), () => {
      u = !1;
    };
  }
  const i = /* @__PURE__ */ Object.create(null), o = [];
  let a, s;
  return n.pending.forEach((u) => {
    const { provider: c, prefix: f } = u;
    if (f === s && c === a)
      return;
    a = c, s = f, o.push(Kt(c, f));
    const d = i[c] || (i[c] = /* @__PURE__ */ Object.create(null));
    d[f] || (d[f] = []);
  }), n.pending.forEach((u) => {
    const { provider: c, prefix: f, name: d } = u, l = Kt(c, f), h = l.pendingIcons || (l.pendingIcons = /* @__PURE__ */ new Set());
    h.has(d) || (h.add(d), i[c][f].push(d));
  }), o.forEach((u) => {
    const { provider: c, prefix: f } = u;
    i[c][f].length && gf(u, i[c][f]);
  }), r ? of(r, n, o) : vo;
};
function xf(e, r) {
  const t = {
    ...e
  };
  for (const n in r) {
    const i = r[n], o = typeof i;
    n in ps ? (i === null || i && (o === "string" || o === "number")) && (t[n] = i) : o === typeof t[n] && (t[n] = n === "rotate" ? i % 4 : i);
  }
  return t;
}
const yf = /[\s,]+/;
function mf(e, r) {
  r.split(yf).forEach((t) => {
    switch (t.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function _f(e, r = 0) {
  const t = e.replace(/^-?[0-9.]*/, "");
  function n(i) {
    for (; i < 0; )
      i += 4;
    return i % 4;
  }
  if (t === "") {
    const i = parseInt(e);
    return isNaN(i) ? 0 : n(i);
  } else if (t !== e) {
    let i = 0;
    switch (t) {
      case "%":
        i = 25;
        break;
      case "deg":
        i = 90;
    }
    if (i) {
      let o = parseFloat(e.slice(0, e.length - t.length));
      return isNaN(o) ? 0 : (o = o / i, o % 1 === 0 ? n(o) : 0);
    }
  }
  return r;
}
function wf(e, r) {
  let t = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const n in r)
    t += " " + n + '="' + r[n] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + t + ">" + e + "</svg>";
}
function kf(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Sf(e) {
  return "data:image/svg+xml," + kf(e);
}
function Cf(e) {
  return 'url("' + Sf(e) + '")';
}
const go = {
  ...vs,
  inline: !1
}, Ef = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Bf = {
  display: "inline-block"
}, Ti = {
  backgroundColor: "currentColor"
}, Ss = {
  backgroundColor: "transparent"
}, bo = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, xo = {
  webkitMask: Ti,
  mask: Ti,
  background: Ss
};
for (const e in xo) {
  const r = xo[e];
  for (const t in bo)
    r[e + t] = bo[t];
}
const jr = {};
["horizontal", "vertical"].forEach((e) => {
  const r = e.slice(0, 1) + "Flip";
  jr[e + "-flip"] = r, jr[e.slice(0, 1) + "-flip"] = r, jr[e + "Flip"] = r;
});
function yo(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const mo = (e, r) => {
  const t = xf(go, r), n = { ...Ef }, i = r.mode || "svg", o = {}, a = r.style, s = typeof a == "object" && !(a instanceof Array) ? a : {};
  for (let p in r) {
    const m = r[p];
    if (m !== void 0)
      switch (p) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          t[p] = m === !0 || m === "true" || m === 1;
          break;
        case "flip":
          typeof m == "string" && mf(t, m);
          break;
        case "color":
          o.color = m;
          break;
        case "rotate":
          typeof m == "string" ? t[p] = _f(m) : typeof m == "number" && (t[p] = m);
          break;
        case "ariaHidden":
        case "aria-hidden":
          m !== !0 && m !== "true" && delete n["aria-hidden"];
          break;
        default: {
          const O = jr[p];
          O ? (m === !0 || m === "true" || m === 1) && (t[O] = !0) : go[p] === void 0 && (n[p] = m);
        }
      }
  }
  const u = Fu(e, t), c = u.attributes;
  if (t.inline && (o.verticalAlign = "-0.125em"), i === "svg") {
    n.style = {
      ...o,
      ...s
    }, Object.assign(n, c);
    let p = 0, m = r.id;
    return typeof m == "string" && (m = m.replace(/-/g, "_")), n.innerHTML = Wu(u.body, m ? () => m + "ID" + p++ : "iconifyVue"), Xi("svg", n);
  }
  const { body: f, width: d, height: l } = e, h = i === "mask" || (i === "bg" ? !1 : f.indexOf("currentColor") !== -1), g = wf(f, {
    ...c,
    width: d + "",
    height: l + ""
  });
  return n.style = {
    ...o,
    "--svg": Cf(g),
    width: yo(c.width),
    height: yo(c.height),
    ...Bf,
    ...h ? Ti : Ss,
    ...s
  }, Xi("span", n);
};
hs(!0);
ju("", ef);
if (typeof document < "u" && typeof window < "u") {
  ks();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const r = e.IconifyPreload, t = "Invalid IconifyPreload syntax.";
    typeof r == "object" && r !== null && (r instanceof Array ? r : [r]).forEach((n) => {
      try {
        // Check if item is an object and not null/array
        (typeof n != "object" || n === null || n instanceof Array || // Check for 'icons' and 'prefix'
        typeof n.icons != "object" || typeof n.prefix != "string" || // Add icon set
        !Pu(n)) && console.error(t);
      } catch {
        console.error(t);
      }
    });
  }
  if (e.IconifyProviders !== void 0) {
    const r = e.IconifyProviders;
    if (typeof r == "object" && r !== null)
      for (let t in r) {
        const n = "IconifyProviders[" + t + "] is invalid.";
        try {
          const i = r[t];
          if (typeof i != "object" || !i || i.resources === void 0)
            continue;
          Yu(t, i) || console.error(n);
        } catch {
          console.error(n);
        }
      }
  }
}
const Af = {
  ...Un,
  body: ""
}, Pr = bt({
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
    getIcon(e, r) {
      if (typeof e == "object" && e !== null && typeof e.body == "string")
        return this._name = "", this.abortLoading(), {
          data: e
        };
      let t;
      if (typeof e != "string" || (t = qn(e, !1, !0)) === null)
        return this.abortLoading(), null;
      const n = Du(t);
      if (!n)
        return (!this._loadingIcon || this._loadingIcon.name !== e) && (this.abortLoading(), this._name = "", n !== null && (this._loadingIcon = {
          name: e,
          abort: bf([t], () => {
            this.counter++;
          })
        })), null;
      this.abortLoading(), this._name !== e && (this._name = e, r && r(e));
      const i = ["iconify"];
      return t.prefix !== "" && i.push("iconify--" + t.prefix), t.provider !== "" && i.push("iconify--" + t.provider), { data: n, classes: i };
    }
  },
  // Render icon
  render() {
    this.counter;
    const e = this.$attrs, r = this.iconMounted ? this.getIcon(e.icon, e.onLoad) : null;
    if (!r)
      return mo(Af, e);
    let t = e;
    return r.classes && (t = {
      ...e,
      class: (typeof e.class == "string" ? e.class + " " : "") + r.classes.join(" ")
    }), mo({
      ...Un,
      ...r.data
    }, t);
  }
}), If = (e) => {
  const r = "--ik-main-icon-deep-color", t = "--ik-main-icon-color", n = /fill="([^"]*)"/g;
  let i, o = 0, a = e;
  for (a = a.replaceAll('fill="#71778D"', `fill="var(${r})"`), a = a.replaceAll('fill="#A1A5B7"', `fill="var(${r})"`), a = a.replaceAll('fill="#E3E4E9"', `fill="var(${t})"`), a = a.replaceAll('fill="#B9BAC5"', `fill="var(${t})"`); (i = n.exec(e)) !== null; ) {
    const s = i[1];
    o === 0 ? a = a.replace(`fill="${s}"`, `fill="var(${oo.colorIsDark(s) ? r : t})"`) : a = a.replace(`fill="${s}"`, `fill="var(${oo.colorIsDark(s) ? r : t})"`), o++;
  }
  return a;
}, Of = (e) => {
  const r = /<symbol(.|\n)*?<\/symbol>/g, t = e == null ? void 0 : e.match(r);
  if (!t)
    return {};
  const n = {}, i = new DOMParser();
  for (const o of t) {
    const a = i.parseFromString(o, "text/xml").firstChild;
    if (!a || a.nodeName !== "symbol")
      continue;
    const s = a.getAttribute("id");
    if (!s)
      continue;
    const u = o.replace(/<symbol[^>]*>|<\/symbol>/gi, ""), c = If(u);
    n[s] = c;
  }
  return n;
}, Tf = Of, Rf = ["innerHTML"], Lf = ["xlink:href"], Nf = ["innerHTML"], Df = ["xlink:href"], $f = ["innerHTML"], Pf = ["xlink:href"], Mf = ["innerHTML"], zf = ["xlink:href"], Hf = /* @__PURE__ */ bt({
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
  setup(e, { emit: r }) {
    const t = e, n = rr.local.has("ik-svg"), i = n ? rr.local.getItem("ik-svg") : Tf(window._iconfont_svg_string);
    n || rr.local.setItem("ik-svg", i);
    const o = {}.VITE_ICON_SUFFIX, a = ke(() => {
      var h, g, p, m;
      return (h = t.name) != null && h.includes("iksvg") ? "svg" : ((g = t == null ? void 0 : t.name) == null ? void 0 : g.indexOf("-")) > 0 || ((p = t == null ? void 0 : t.name) == null ? void 0 : p.indexOf(o)) === 0 ? t.runtime ? "svg" : "css" : (m = t.name) != null && m.includes(":") ? "svg" : "custom";
    }), s = ke(() => {
      var h;
      if (((h = t.name) == null ? void 0 : h.indexOf("i-")) === 0) {
        let g = t.name;
        return t.runtime && (g = g.replace("i-", "")), g;
      } else
        return t.name;
    }), u = ke(() => {
      const h = [];
      if (t.flip !== "")
        switch (t.flip) {
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
      return t.rotate !== 0 && h.push(`rotate(${t.rotate % 360}deg)`), `transform: ${h.join(" ")};`;
    }), c = ke(
      () => t.showBg ? `width: ${t.width}px; height: ${t.width}px;background-color: ${t.type === "primary" ? t.background : ""};` : ""
    ), f = ke(() => {
      var h;
      if (i[s.value])
        return i[s.value];
      {
        const g = (h = t.name) == null ? void 0 : h.replace("icon-", "iksvg_");
        return i[g] ? i[g] : "";
      }
    }), d = ke(() => ["all", "label"].includes(t.showType)), l = ke(
      () => ["big", "default", "small"].includes(t.size) ? t.size === "big" ? 20 : t.size === "default" ? 16 : 14 : t.size
    );
    return (h, g) => {
      const p = it("el-icon"), m = it("el-button"), O = it("el-tooltip"), k = it("iksvg");
      return V(), ce(k, { class: "inline-flex" }, {
        default: ae(() => [
          t.pop && !d.value ? (V(), ce(O, {
            key: 0,
            placement: "top",
            title: "",
            "popper-class": "ik-svg-icon-popover",
            trigger: "hover",
            enterable: !1,
            content: e.title
          }, {
            default: ae(() => [
              e.showType === "icon" ? (V(), ce(p, De({
                key: 0,
                style: c.value,
                class: ["ik-icon-btn", [
                  t.showBg ? "show-bg" : null,
                  e.type,
                  e.disabled ? "disabled" : null,
                  e.startMargin ? "start-margin" : null,
                  `ik-${s.value}`
                ]],
                size: l.value
              }, h.$attrs, {
                onClick: g[0] || (g[0] = (v) => r("click", v))
              }), {
                default: ae(() => {
                  var v, b;
                  return [
                    f.value ? (V(), ue("svg", {
                      key: 0,
                      style: Pe(u.value),
                      viewBox: "0 0 1024 1024",
                      innerHTML: f.value
                    }, null, 12, Rf)) : a.value === "css" ? (V(), ue("i", {
                      key: 1,
                      class: gt(`${ne(o)} ${s.value} ${(v = e.name) == null ? void 0 : v.split("-")[0]} ${(b = e.name) != null && b.startsWith("ik") ? "ik iksvg" : "iconfont"}`),
                      style: Pe(`${u.value};fontSize:${l.value}px;`)
                    }, null, 6)) : a.value === "svg" ? (V(), ce(ne(Pr), {
                      key: 2,
                      icon: s.value,
                      style: Pe(u.value)
                    }, null, 8, ["icon", "style"])) : (V(), ue("svg", {
                      key: 3,
                      style: Pe(u.value),
                      "aria-hidden": "true"
                    }, [
                      he("use", {
                        "xlink:href": `#icon-${s.value}`
                      }, null, 8, Lf)
                    ], 4))
                  ];
                }),
                _: 1
              }, 16, ["style", "size", "class"])) : e.showType === "label" ? (V(), ce(m, {
                key: 1,
                text: ""
              }, {
                default: ae(() => [
                  Re(Ne(e.label), 1)
                ]),
                _: 1
              })) : e.showType === "all" ? (V(), ce(m, { key: 2 }, {
                icon: ae(() => [
                  oe(p, De({
                    style: c.value,
                    class: ["ik-icon-btn", [
                      t.showBg ? "show-bg" : null,
                      e.type,
                      e.disabled ? "disabled" : null,
                      e.startMargin ? "start-margin" : null,
                      `ik-${s.value}`
                    ]],
                    size: l.value
                  }, h.$attrs, {
                    onClick: g[1] || (g[1] = (v) => r("click", v))
                  }), {
                    default: ae(() => {
                      var v, b;
                      return [
                        f.value ? (V(), ue("svg", {
                          key: 0,
                          style: Pe(u.value),
                          viewBox: "0 0 1024 1024",
                          innerHTML: f.value
                        }, null, 12, Nf)) : a.value === "css" ? (V(), ue("i", {
                          key: 1,
                          class: gt(`${ne(o)} ${s.value} ${(v = e.name) == null ? void 0 : v.split("-")[0]} ${(b = e.name) != null && b.startsWith("ik") ? "ik iksvg" : "iconfont"}`),
                          style: Pe(`${u.value};fontSize:${l.value}px;`)
                        }, null, 6)) : a.value === "svg" ? (V(), ce(ne(Pr), {
                          key: 2,
                          icon: s.value,
                          style: Pe(u.value)
                        }, null, 8, ["icon", "style"])) : (V(), ue("svg", {
                          key: 3,
                          style: Pe(u.value),
                          "aria-hidden": "true"
                        }, [
                          he("use", {
                            "xlink:href": `#icon-${s.value}`
                          }, null, 8, Df)
                        ], 4))
                      ];
                    }),
                    _: 1
                  }, 16, ["style", "size", "class"])
                ]),
                default: ae(() => [
                  Re(" " + Ne(e.label), 1)
                ]),
                _: 1
              })) : Be("", !0)
            ]),
            _: 1
          }, 8, ["content"])) : (V(), ue(Me, { key: 1 }, [
            e.showType === "icon" ? (V(), ce(p, De({
              key: 0,
              style: c.value,
              class: ["ik-icon-btn", [
                t.showBg ? "show-bg" : null,
                e.type,
                e.disabled ? "disabled" : null,
                e.startMargin ? "start-margin" : null,
                `ik-${s.value}`
              ]],
              size: l.value
            }, h.$attrs, {
              onClick: g[2] || (g[2] = (v) => r("click", v))
            }), {
              default: ae(() => {
                var v, b;
                return [
                  f.value ? (V(), ue("svg", {
                    key: 0,
                    style: Pe(u.value),
                    viewBox: "0 0 1024 1024",
                    innerHTML: f.value
                  }, null, 12, $f)) : a.value === "css" ? (V(), ue("i", {
                    key: 1,
                    class: gt(`${ne(o)} ${s.value} ${(v = e.name) == null ? void 0 : v.split("-")[0]} ${(b = e.name) != null && b.startsWith("ik") ? "ik iksvg" : "iconfont"}`),
                    style: Pe(`${u.value};fontSize:${l.value}px;`)
                  }, null, 6)) : a.value === "svg" ? (V(), ce(ne(Pr), {
                    key: 2,
                    icon: s.value,
                    style: Pe(u.value)
                  }, null, 8, ["icon", "style"])) : (V(), ue("svg", {
                    key: 3,
                    style: Pe(u.value),
                    "aria-hidden": "true"
                  }, [
                    he("use", {
                      "xlink:href": `#icon-${s.value}`
                    }, null, 8, Pf)
                  ], 4))
                ];
              }),
              _: 1
            }, 16, ["style", "size", "class"])) : e.showType === "label" ? (V(), ce(m, De({
              key: 1,
              text: ""
            }, h.$attrs), {
              default: ae(() => [
                Re(Ne(e.label), 1)
              ]),
              _: 1
            }, 16)) : e.showType === "all" ? (V(), ce(m, De({
              key: 2,
              text: "",
              type: "primary"
            }, h.$attrs), {
              icon: ae(() => [
                oe(p, De({
                  style: c.value,
                  class: ["ik-icon-btn hover", [e.type, `ik-${s.value}`]]
                }, h.$attrs, {
                  onClick: g[3] || (g[3] = (v) => r("click", v))
                }), {
                  default: ae(() => {
                    var v, b;
                    return [
                      f.value ? (V(), ue("svg", {
                        key: 0,
                        style: Pe(u.value),
                        viewBox: "0 0 1024 1024",
                        innerHTML: f.value
                      }, null, 12, Mf)) : a.value === "css" ? (V(), ue("i", {
                        key: 1,
                        class: gt(`${ne(o)} ${s.value} ${(v = e.name) == null ? void 0 : v.split("-")[0]} ${(b = e.name) != null && b.startsWith("ik") ? "ik iksvg" : "iconfont"}`),
                        style: Pe(`${u.value};fontSize:${l.value}px;`)
                      }, null, 6)) : a.value === "svg" ? (V(), ce(ne(Pr), {
                        key: 2,
                        icon: s.value,
                        style: Pe(u.value)
                      }, null, 8, ["icon", "style"])) : (V(), ue("svg", {
                        key: 3,
                        style: Pe(u.value),
                        "aria-hidden": "true"
                      }, [
                        he("use", {
                          "xlink:href": `#icon-${s.value}`
                        }, null, 8, zf)
                      ], 4))
                    ];
                  }),
                  _: 1
                }, 16, ["style", "class"])
              ]),
              default: ae(() => [
                Re(" " + Ne(e.label), 1)
              ]),
              _: 1
            }, 16)) : Be("", !0)
          ], 64))
        ]),
        _: 1
      });
    };
  }
});
const Ff = /* @__PURE__ */ rt(Hf, [["__scopeId", "data-v-3d0fc4c6"]]), Mt = Cr(Ff), qf = {}, Uf = {
  t: "1672196428320",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3618",
  width: "200",
  height: "200"
}, Vf = /* @__PURE__ */ he("path", {
  d: "M384 250V134a70 70 0 0 0-70-70H134a70 70 0 0 0-70 70v116a70 70 0 0 0 70 70h180a70 70 0 0 0 70-70z m-80-10H144v-96h160zM890 704H710a70 70 0 0 0-70 70v116a70 70 0 0 0 70 70h180a70 70 0 0 0 70-70V774a70 70 0 0 0-70-70z m-10 176H720v-96h160zM890 384H710a70 70 0 0 0-70 70v116a70 70 0 0 0 70 70h180a70 70 0 0 0 70-70V454a70 70 0 0 0-70-70z m-10 176H720v-96h160zM536 504H264v-80a40 40 0 0 0-40-40 40 40 0 0 0-40 40v432a40 40 0 0 0 40 40h312a40 40 0 0 0 40-40 40 40 0 0 0-40-40H264V584h272a40 40 0 0 0 40-40 40 40 0 0 0-40-40z",
  "p-id": "3619",
  "data-spm-anchor-id": "a313x.7781069.0.i2",
  class: "selected"
}, null, -1), Wf = [
  Vf
];
function jf(e, r) {
  return V(), ue("svg", Uf, Wf);
}
const fi = /* @__PURE__ */ rt(qf, [["render", jf]]), Yf = {}, Kf = {
  t: "1672197639916",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "19012"
}, Gf = /* @__PURE__ */ he("path", {
  d: "M863.1 255.1H551.3c-25.1 0-49.2-9.8-67.1-27.4l-75-73.4c-17.9-17.5-42-27.4-67.1-27.4H161c-53 0-96 43-96 96v512.8c0 53 43 96 96 96h702c53 0 96-43 96-96V351.1c0.1-53-42.9-96-95.9-96z m-31 161.1c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32v-0.1c0-17.7 14.3-32 32-32h576.1c17.7 0 32 14.3 32 32v0.1z",
  "p-id": "19013"
}, null, -1), Zf = [
  Gf
];
function Xf(e, r) {
  return V(), ue("svg", Kf, Zf);
}
const hr = /* @__PURE__ */ rt(Yf, [["render", Xf]]), Qf = {}, Jf = {
  t: "1672197222005",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "14755"
}, ed = /* @__PURE__ */ he("path", {
  d: "M959.68 921.024c-15.232-181.696-139.648-331.968-307.84-386.624 70.464-45.632 117.248-124.48 117.248-214.464C769.152 178.624 654.208 64 512.512 64 370.752 64 255.808 178.624 255.808 319.936c0 89.984 46.784 168.832 117.248 214.528-168.192 54.592-292.544 204.864-307.84 386.56-0.192 3.456-0.64 5.44 0 10.176C66.496 947.2 80.64 960 96.704 960c17.92 0 32.064-14.656 32.064-32 16.704-197.76 182.272-351.936 383.744-351.936 201.408 0 366.976 154.176 383.68 351.936 0 17.344 14.144 32 32.064 32 16.064 0 30.208-12.8 31.424-28.8C960.32 926.464 959.936 924.416 959.68 921.024zM320 319.936C320 213.952 406.208 128 512.512 128s192.448 85.952 192.448 191.936c0 106.048-86.144 192-192.448 192S320 425.984 320 319.936z",
  "p-id": "14756"
}, null, -1), td = [
  ed
];
function rd(e, r) {
  return V(), ue("svg", Jf, td);
}
const Mr = /* @__PURE__ */ rt(Qf, [["render", rd]]), nd = {}, id = {
  t: "1672194715727",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  "p-id": "2667"
}, od = /* @__PURE__ */ he("path", {
  d: "M809.246403 771.926938 777.737782 803.458071 924.965961 950.667831 956.476629 919.157163Z",
  fill: "#5D5D5D",
  "p-id": "2668"
}, null, -1), sd = /* @__PURE__ */ he("path", {
  d: "M454.878536 70.285786C239.51556 70.285786 64.93236 244.847497 64.93236 460.231963c0 215.341486 174.583201 389.945153 389.945153 389.945153 215.362976 0 389.9472-174.603667 389.9472-389.945153C844.825736 244.847497 670.241512 70.285786 454.878536 70.285786zM454.878536 805.611108c-190.750415 0-345.381192-154.626683-345.381192-345.379145 0-190.751439 154.629753-345.380168 345.381192-345.380168 190.752462 0 345.382215 154.62873 345.382215 345.380168C800.259728 650.983401 645.630998 805.611108 454.878536 805.611108z",
  fill: "#5D5D5D",
  "p-id": "2669"
}, null, -1), ad = [
  od,
  sd
];
function cd(e, r) {
  return V(), ue("svg", id, ad);
}
const ld = /* @__PURE__ */ rt(nd, [["render", cd]]), ud = {}, fd = {
  t: "1672212880079",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "19924"
}, dd = /* @__PURE__ */ he("path", {
  d: "M806.4 263.2l-45.6-45.6L512 467.2 263.2 217.6l-45.6 45.6L467.2 512 217.6 760.8l45.6 45.6L512 557.6l248.8 248.8 45.6-45.6L557.6 512z",
  "p-id": "19925"
}, null, -1), hd = [
  dd
];
function pd(e, r) {
  return V(), ue("svg", fd, hd);
}
const vd = /* @__PURE__ */ rt(ud, [["render", pd]]), gd = {}, bd = {
  t: "1672216076738",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "28376"
}, xd = /* @__PURE__ */ he("path", {
  d: "M501.937582 545.097053c147.891962 0 268.231366-118.534055 268.223274-264.288929 0-145.746783-120.330301-264.28994-268.222263-264.28994-147.890951 0-268.221252 118.584625-268.221252 264.28994C233.71633 426.520519 354.046631 545.097053 501.937582 545.097053zM612.471463 570.546911 411.497184 570.546911c-186.760063 0-338.664249 149.569875-338.664249 333.472733l0 19.794109c0 96.139636 149.47278 96.139636 338.664249 96.139636l200.974278 0c181.747565 0 338.694591 0 338.694591-96.139636l0-19.794109C951.164031 720.158252 799.235571 570.546911 612.471463 570.546911z",
  "p-id": "28377"
}, null, -1), yd = [
  xd
];
function md(e, r) {
  return V(), ue("svg", bd, yd);
}
const tr = /* @__PURE__ */ rt(gd, [["render", md]]), _d = {}, wd = {
  t: "1680231254898",
  class: "icon",
  viewBox: "0 0 1154 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "9556"
}, kd = /* @__PURE__ */ he("path", {
  d: "M1015.808 64.512q62.464 0 99.84 31.744t37.376 96.256l0 568.32q0 27.648-10.24 52.224t-28.16 43.008-41.984 29.184-50.688 10.752l-892.928 0q-26.624 0-50.176-10.24t-40.96-27.136-27.648-39.424-10.24-48.128l0-580.608q0-55.296 33.792-90.624t95.232-35.328l886.784 0zM287.744 253.952q-19.456 0-36.864 7.168t-30.72 19.968-20.992 30.72-7.68 38.4 7.68 37.888 20.992 30.72 30.72 20.992 36.864 7.68q21.504 0 39.424-7.68t30.72-20.992 20.48-30.72 7.68-37.888q0-41.984-27.648-69.12t-70.656-27.136zM448.512 608.256q0-19.456-7.68-37.376t-20.48-30.72-30.72-20.48-37.376-7.68l-128 0q-39.936 0-67.584 28.16t-27.648 68.096l0 4.096 0 92.16 319.488 0 0-92.16 0-4.096zM923.648 709.632q20.48 0 30.208-10.24t9.728-24.576-11.264-25.088-31.744-10.752l-305.152 0q-20.48 0-30.72 10.752t-10.24 25.088 10.24 24.576 29.696 10.24l309.248 0zM924.672 577.536q20.48 0 29.696-10.24t9.216-24.576q0-15.36-8.704-25.6t-29.184-10.24l-313.344 0q-20.48 0-29.696 10.24t-9.216 25.6q0 14.336 8.704 24.576t29.184 10.24l313.344 0zM925.696 447.488q15.36 0 26.624-10.24t11.264-24.576-11.264-23.04-26.624-8.704l-207.872 0q-15.36 0-26.112 8.704t-10.752 23.04 10.752 24.576 26.112 10.24l207.872 0z",
  "p-id": "9557"
}, null, -1), Sd = [
  kd
];
function Cd(e, r) {
  return V(), ue("svg", wd, Sd);
}
const Ri = /* @__PURE__ */ rt(_d, [["render", Cd]]), Ed = {}, Bd = {
  t: "1698719360533",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "15490",
  width: "200",
  height: "200"
}, Ad = /* @__PURE__ */ he("path", {
  d: "M960 704h-63.616v-167.392a32 32 0 0 0-32-32H544V416h160a32 32 0 0 0 32-32V96a32 32 0 0 0-32-32H320a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h160v88.608H161.984a32 32 0 0 0-32 31.968L129.792 704H64a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-192a32 32 0 0 0-32-32H193.792l0.16-135.392H480V704h-64a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-192a32 32 0 0 0-32-32h-64v-135.392h288.384V704H768a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-192a32 32 0 0 0-32-32zM352 128h320v224H352V128zM224 896H96v-128h128v128z m352 0h-128v-128h128v128z m352 0h-128v-128h128v128z",
  "p-id": "15491"
}, null, -1), Id = [
  Ad
];
function Od(e, r) {
  return V(), ue("svg", Bd, Id);
}
const pr = /* @__PURE__ */ rt(Ed, [["render", Od]]), Cs = {
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
}, Td = { class: "left-pick-list" }, Rd = { class: "post-view-list" }, Ld = { class: "ik-picker-single" }, Nd = /* @__PURE__ */ bt({
  __name: "PostList",
  props: Cs,
  emits: ["change", "check"],
  setup(e, { emit: r }) {
    var f, d;
    const t = e, n = ke(() => {
      var l, h;
      return ((l = t.handList) == null ? void 0 : l.length) === ((h = t.list) == null ? void 0 : h.length);
    }), i = ke(() => {
      var g, p, m, O;
      const l = (g = t.handList) == null ? void 0 : g.length, h = (p = t.list) == null ? void 0 : p.length;
      return t.multiple ? o.value = t.handList.map((k) => k[t.fixPropOpt.id]) : a.value = (O = (m = t.handList) == null ? void 0 : m[0]) == null ? void 0 : O[t.fixPropOpt.id], l > 0 && l < h;
    }), o = xe(
      t.handList.map((l) => l[t.fixPropOpt.id])
    ), a = xe((d = (f = t.handList) == null ? void 0 : f[0]) == null ? void 0 : d[t.fixPropOpt.id]), s = (l) => {
      const h = l ? t.list.map((g) => g[t.fixPropOpt.id]) : [];
      r("change", h, l ? t.list : []);
    }, u = (l) => {
      r("change", l, t.list);
    }, c = (l) => {
      r("change", l, t.list);
    };
    return (l, h) => (V(), ue("div", Td, [
      l.multiple ? (V(), ce(ne($t), {
        key: 0,
        modelValue: n.value,
        "onUpdate:modelValue": h[0] || (h[0] = (g) => n.value = g),
        indeterminate: i.value,
        onChange: s
      }, {
        default: ae(() => [
          Re("全选")
        ]),
        _: 1
      }, 8, ["modelValue", "indeterminate"])) : Be("", !0),
      he("ul", Rd, [
        l.multiple ? (V(), ce(ne(Nn), {
          key: 0,
          modelValue: o.value,
          "onUpdate:modelValue": h[1] || (h[1] = (g) => o.value = g),
          onChange: u
        }, {
          default: ae(() => [
            (V(!0), ue(Me, null, pt(l.list, (g) => (V(), ue("li", {
              key: g[t.fixPropOpt.id]
            }, [
              oe(ne($t), {
                label: g[t.fixPropOpt.id]
              }, {
                default: ae(() => [
                  oe(Ri),
                  he("p", null, Ne(g[t.fixPropOpt.name]), 1)
                ]),
                _: 2
              }, 1032, ["label"])
            ]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])) : (V(), ce(ne(_r), {
          key: 1,
          isIndeterminate: i.value,
          modelValue: a.value,
          "onUpdate:modelValue": h[2] || (h[2] = (g) => a.value = g),
          onChange: c
        }, {
          default: ae(() => [
            (V(!0), ue(Me, null, pt(l.list, (g) => (V(), ue("li", {
              class: "w-full",
              key: g[t.fixPropOpt.id]
            }, [
              oe(ne(Dn), {
                label: g[t.fixPropOpt.id]
              }, {
                default: ae(() => [
                  he("div", Ld, [
                    oe(Ri),
                    he("p", null, Ne(g[t.fixPropOpt.name]), 1)
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
const Dd = /* @__PURE__ */ rt(Nd, [["__scopeId", "data-v-c47c3e50"]]), $d = { class: "left-pick-list" }, Pd = { class: "role-view-list" }, Md = ["title"], zd = { class: "ik-picker-single" }, Hd = ["title"], Fd = /* @__PURE__ */ bt({
  __name: "RoleList",
  props: Cs,
  emits: ["change", "check"],
  setup(e, { emit: r }) {
    var f, d;
    const t = e, n = ke(() => {
      var l, h;
      return ((l = t.handList) == null ? void 0 : l.length) === ((h = t.list) == null ? void 0 : h.length);
    }), i = ke(() => {
      var g, p, m, O;
      const l = (g = t.handList) == null ? void 0 : g.length, h = (p = t.list) == null ? void 0 : p.length;
      return t.multiple ? o.value = t.handList.map((k) => k[t.fixPropOpt.id]) : a.value = (O = (m = t.handList) == null ? void 0 : m[0]) == null ? void 0 : O[t.fixPropOpt.id], l > 0 && l < h;
    }), o = xe(
      t.handList.map((l) => l[t.fixPropOpt.id])
    ), a = xe((d = (f = t.handList) == null ? void 0 : f[0]) == null ? void 0 : d[t.fixPropOpt.id]), s = (l) => {
      const h = l ? t.list.map((g) => g[t.fixPropOpt.id]) : [];
      r("change", h, l ? t.list : []);
    }, u = (l) => {
      r("change", l, t.list);
    }, c = (l) => {
      r("change", l, t.list);
    };
    return (l, h) => (V(), ue("div", $d, [
      l.multiple ? (V(), ce(ne($t), {
        key: 0,
        modelValue: n.value,
        "onUpdate:modelValue": h[0] || (h[0] = (g) => n.value = g),
        indeterminate: i.value,
        onChange: s
      }, {
        default: ae(() => [
          Re("全选")
        ]),
        _: 1
      }, 8, ["modelValue", "indeterminate"])) : Be("", !0),
      he("ul", Pd, [
        l.multiple ? (V(), ce(ne(Nn), {
          key: 0,
          modelValue: o.value,
          "onUpdate:modelValue": h[1] || (h[1] = (g) => o.value = g),
          onChange: u
        }, {
          default: ae(() => [
            (V(!0), ue(Me, null, pt(l.list, (g) => (V(), ue("li", {
              key: g[l.fixPropOpt.id]
            }, [
              oe(ne($t), {
                label: g[l.fixPropOpt.id],
                value: g[l.fixPropOpt.id],
                disabled: g.disabled
              }, {
                default: ae(() => [
                  oe(tr),
                  he("p", {
                    title: g[l.fixPropOpt.name]
                  }, Ne(g[l.fixPropOpt.name]), 9, Md)
                ]),
                _: 2
              }, 1032, ["label", "value", "disabled"])
            ]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])) : (V(), ce(ne(_r), {
          key: 1,
          indeterminate: i.value,
          modelValue: a.value,
          "onUpdate:modelValue": h[2] || (h[2] = (g) => a.value = g),
          onChange: c
        }, {
          default: ae(() => [
            (V(!0), ue(Me, null, pt(l.list, (g) => (V(), ue("li", {
              class: "w-full",
              key: g[l.fixPropOpt.id]
            }, [
              oe(ne(Dn), {
                label: g[l.fixPropOpt.id],
                value: g[l.fixPropOpt.id],
                disabled: g.disabled
              }, {
                default: ae(() => [
                  he("div", zd, [
                    oe(tr),
                    he("p", {
                      title: g[l.fixPropOpt.name]
                    }, Ne(g[l.fixPropOpt.name]), 9, Hd)
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
const qd = /* @__PURE__ */ rt(Fd, [["__scopeId", "data-v-a51e0920"]]);
var ut = /* @__PURE__ */ ((e) => (e.org = "organization", e.dep = "dep", e.user = "user", e.role = "role", e.post = "post", e.dep_user = "dep_user", e))(ut || {}), xr = /* @__PURE__ */ ((e) => (e.group = "group", e.role = "role", e.post = "post", e))(xr || {});
const zt = {
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
}, Ud = {
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
}, Vd = (e, r) => {
  const t = xe([]), n = async (o, a, s) => {
    var B, T;
    const { url: u, methods: c, headers: f, param: d } = e.value || {}, l = {
      parentOrgId: o,
      ...d || {},
      parentDepartmentId: a || "",
      name: s || ""
    }, h = await fetch(u, {
      method: c,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        ...f
      },
      body: JSON.stringify(l)
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
    const { departments: m, roles: O, posts: k, users: v, organizations: b, rootOrganization: x, rootDepartment: w } = p, _ = x || w;
    return t.value[0] = r.org ? {
      ...r.org,
      id: r.elementId,
      elementType: (T = (B = r.org) == null ? void 0 : B.elementType) == null ? void 0 : T.toLocaleUpperCase()
    } : {
      ..._,
      id: _.elementId
    }, {
      depList: Ke.cloneDeep(m),
      roleList: Ke.cloneDeep(O),
      postList: Ke.cloneDeep(k),
      userList: Ke.cloneDeep(v),
      organizationList: Ke.cloneDeep(b),
      rootOrganization: x,
      rootDepartment: w
    };
  };
  return {
    handData: n,
    handSetChild: (o, a) => {
      n(o == null ? void 0 : o.elementId, a);
    },
    bannerList: t
  };
}, Wd = {
  shadow: "hover",
  class: "sel-list"
}, jd = { key: 0 }, Yd = {
  key: 0,
  class: "check-all"
}, Kd = {
  key: 0,
  class: "view-list"
}, Gd = {
  key: 0,
  class: "filter-user"
}, Zd = { class: "filter-user" }, Xd = {
  key: 2,
  class: "next-child"
}, Qd = { class: "filter-user" }, Jd = {
  key: 1,
  class: "filter-user"
}, eh = {
  key: 2,
  class: "next-child"
}, th = { class: "text-over-flow" }, rh = { class: "text-over-flow" }, nh = { class: "text-over-flow" }, ih = {
  key: 2,
  class: "next-child"
}, oh = {
  key: 1,
  class: "empty"
}, sh = /* @__PURE__ */ he("div", { class: "split-div" }, null, -1), ah = { class: "choose-list" }, ch = { class: "choose-item" }, lh = /* @__PURE__ */ he("div", null, "已选", -1), uh = { class: "dialog-footer" }, fh = /* @__PURE__ */ bt({
  __name: "picker",
  props: Ud,
  emits: ["handChild", "update:show", "update:modelValue", "ok", "search"],
  setup(e, { expose: r, emit: t }) {
    const n = e;
    So((q) => ({
      "3e125c61": je.value
    }));
    const i = xe(""), o = xe(""), a = xe(""), s = xe([]), u = xe([]), c = xe([]), f = xe([]), d = xe([]), l = xe(!1), h = n.imageBaseUrl || `${location.origin}/server/oss/download?fileUrl=`, g = (q) => q ? q.startsWith("http") ? q : `${h}${q}` : "";
    ht(() => n.api, () => {
      n.show && C("");
    });
    const p = ke(() => ({
      name: "name",
      type: "type",
      id: "id",
      avatar: "avatar",
      ...n.propOption
    })), m = ke(() => ({
      dep: "DEPT",
      user: "USER",
      role: "ROLE",
      post: "POST",
      organization: "ORGANIZATION",
      ...n.typeOption
    })), O = xe([]), k = Vd(Xs(n, "api"), n), v = k.handData, b = k.bannerList;
    n.immediate && v(a.value, o.value, i.value);
    const x = (q) => (q.forEach((X) => {
      var P, de;
      X.disabled = ((de = (P = n.modelValue) == null ? void 0 : P.find((Ae) => Ae[p.value.id] === X[p.value.id])) == null ? void 0 : de.disabled) || !1;
    }), q), w = async () => {
      var q, X, P, de, Ae, Qe, mt, ft, Vt;
      l.value = !0;
      try {
        if ((q = n.depList) != null && q.length || (X = n.userList) != null && X.length || (P = n.roleList) != null && P.length || (de = n.postList) != null && de.length) {
          s.value = (Ae = n.userList) == null ? void 0 : Ae.filter((et) => et[p.value.name].includes(i.value)), u.value = (Qe = n.depList) == null ? void 0 : Qe.filter((et) => et[p.value.name].includes(i.value)), c.value = (mt = n.roleList) == null ? void 0 : mt.filter((et) => et[p.value.name].includes(i.value)), f.value = (ft = n.postList) == null ? void 0 : ft.filter((et) => et[p.value.name].includes(i.value)), d.value = (Vt = n.organizationList) == null ? void 0 : Vt.filter((et) => et[p.value.name].includes(i.value)), A(), l.value = !1;
          return;
        }
        const qe = await v(a.value, o.value, i.value);
        try {
          s.value = x((qe == null ? void 0 : qe.userList) || []), u.value = x((qe == null ? void 0 : qe.depList) || []), c.value = x((qe == null ? void 0 : qe.roleList) || []), f.value = x((qe == null ? void 0 : qe.postList) || []), d.value = x((qe == null ? void 0 : qe.organizationList) || []);
        } catch (et) {
          l.value = !1, console.info("error: ", et);
        }
        A(), l.value = !1;
      } catch {
        l.value = !1;
      }
    }, _ = Qi({
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
    }), B = Qi({
      indeterminate: !1,
      checkAll: 0
    }), T = (q) => _.org.has(q) || _.dep.has(q) || _.user.has(q) || _.role.has(q) || _.post.has(q), C = Au.debounce(w, 300), E = ke(() => {
      const q = Array.from(_.org.values()), X = Array.from(_.dep.values()), P = Array.from(_.role.values()), de = Array.from(_.user.values()), Ae = Array.from(_.post.values());
      return O.value = [...q, ...X, ...P, ...Ae, ...de], {
        list: [...q, ...X, ...P, ...de, ...Ae],
        org: {
          list: q,
          len: q.length,
          deps: q
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
          list: de,
          len: de.length
        },
        post: {
          list: Ae,
          len: Ae.length
        }
      };
    }), D = ke(
      () => {
        const q = n.chooseType.map((P) => P.toLocaleLowerCase());
        let X = [...q];
        return q.includes("dep") && (X = [...X, "organization", "dept"]), q.includes("dep_user") && (X = [...X, "user"]), X;
      }
    ), L = ke(
      () => D.value.includes(ut.dep) && !D.value.includes(ut.user) && !D.value.includes(ut.org)
    ), F = ke(
      () => D.value.includes(ut.user) && !D.value.includes(ut.dep) && !D.value.includes(ut.org)
    ), H = ke(() => D.value.includes(ut.org) && !D.value.includes(ut.dep) && !D.value.includes(ut.user)), j = ke(() => !b.value.length), K = ke(
      () => !n.max || E.value.list.length < n.max
    ), re = (q) => [m.value.dep, m.value.organization].includes(q[p.value.type]) ? q.hasOwnProperty("disabled") : !1, J = xe([]), le = (q) => {
      J.value = q, J.value.forEach((X) => {
        X.readonly = X == null ? void 0 : X.disabled;
      });
    }, U = xe(!1), A = (q = !1) => {
      var P;
      const X = (P = n == null ? void 0 : n.userList) != null && P.length ? Ke.cloneDeep([...n == null ? void 0 : n.organizationList, ...n == null ? void 0 : n.userList, ...n == null ? void 0 : n.depList]) : [...d.value, ...u.value, ...s.value];
      return !q && le(X), X;
    };
    ht(
      () => n.show,
      async (q) => {
        var X;
        if (U.value = q, q) {
          o.value = n.pid, a.value = ((X = n.org) == null ? void 0 : X.elementId) || n.orgPid, !n.userList.length && !n.depList.length && !n.roleList.length && !n.postList.length && !n.organizationList.length ? await w() : (s.value = n.userList, u.value = n.depList, c.value = n.roleList, f.value = n.postList, d.value = n.organizationList), _.trans = [], B.checkAll = 0, B.indeterminate = !1;
          const P = A(!0);
          for (const Ae of P)
            T(Ae[p.value.id]) && _.trans.push(Ae[p.value.id]);
          const de = P.length === _.trans.length;
          B.indeterminate = !!(P.length && !de), B.checkAll = Number(P.length && de), Ji(() => {
            var Ae;
            (Ae = n.modelValue) != null && Ae.length ? n.modelValue.forEach((Qe) => {
              ee(Qe), n.multiple ? _.trans.push(Qe[p.value.id]) : _.single = Qe[p.value.id];
            }) : $e();
          });
        } else
          $e();
      }
    ), e0(() => {
      let q;
      if (L.value || F.value) {
        const P = s.value.length, de = u.value.length;
        q = L.value ? de : F.value ? P : P + P;
      } else
        q = J.value.length;
      const X = _.trans.length;
      B.indeterminate = _.trans.length ? X !== q : !1, B.checkAll = +(q !== 0 && X === q);
    });
    const M = (q) => {
      if (q) {
        if (_.single = "", q[p.value.id]) {
          const X = _.trans.findIndex(
            (P) => P === q[p.value.id]
          );
          X !== -1 && _.trans.splice(X, 1);
        }
        switch (q[p.value.type]) {
          case m.value.dep:
            return _.dep.delete(q[p.value.id]);
          case m.value.user:
            return _.user.delete(q[p.value.id]);
          case m.value.role:
            return _.role.delete(q[p.value.id]);
          case m.value.post:
            return _.post.delete(q[p.value.id]);
          case m.value.organization:
            return _.org.delete(q[p.value.id]);
          default:
            return;
        }
      }
    }, z = (q) => {
      M(q);
    }, ee = (q) => {
      if (!T(q[p.value.id])) {
        const X = {
          ...q
          // readonly: item.disabled
        };
        switch (q[p.value.type]) {
          case m.value.dep:
            return _.dep.set(q[p.value.id], X);
          case m.value.user:
            return _.user.set(q[p.value.id], X);
          case m.value.role:
            return _.role.set(q[p.value.id], X);
          case m.value.post:
            return _.post.set(q[p.value.id], X);
          case m.value.organization:
            return _.org.set(q[p.value.id], X);
          default:
            return;
        }
      }
    };
    ht(
      () => _.trans,
      (q) => {
        if (!q.length)
          J.value.forEach((X) => {
            X.disabled = !1;
            try {
              n.multiple && M(X);
            } catch {
            }
          });
        else {
          const X = J.value.filter(
            (de) => !q.includes(de[p.value.id])
          );
          for (const de of X)
            de.disabled = !1, n.multiple && M(de);
          const P = J.value.filter(
            (de) => q.includes(de[p.value.id])
          );
          for (const de of P)
            de.disabled = re(de), ee(de);
        }
      },
      { deep: !0 }
    ), ht(
      () => _.single,
      (q) => {
        if (q) {
          const X = J.value.find((P) => P[p.value.id] === q);
          X && (_.dep.clear(), _.user.clear(), _.role.clear(), _.post.clear(), _.org.clear(), _.trans = [], Ji(() => {
            ee(X);
          }));
        }
      }
    );
    const se = (q) => {
      if (q) {
        let X = [];
        if (D.value.includes("dep") || D.value.includes("dep_user")) {
          const P = J.value.filter(
            (de) => de[p.value.type].toLocaleUpperCase() === m.value[ut.dep].toLocaleUpperCase()
          );
          X = [...X, ...P];
        }
        if (D.value.includes("user") || D.value.includes("dep_user")) {
          const P = J.value.filter(
            (de) => de[p.value.type].toLocaleUpperCase() === m.value[ut.user].toLocaleUpperCase()
          );
          X = [...X, ...P];
        }
        if (D.value.includes("organization")) {
          const P = J.value.filter(
            (de) => de[p.value.type].toLocaleUpperCase() === m.value[ut.org].toLocaleUpperCase()
          );
          X = [...X, ...P];
        }
        X.forEach((P) => {
          !_.trans.includes(P[p.value.id]) && _.trans.push(P[p.value.id]);
        });
      } else
        J.value.forEach((X) => {
          const P = _.trans.findIndex((de) => de === X[p.value.id]);
          P >= 0 && _.trans.splice(P, 1);
        });
    }, be = (q) => {
      q[p.value.type] === m.value.organization ? (a.value = q == null ? void 0 : q.elementId, o.value = "") : (a.value = "", o.value = q == null ? void 0 : q.elementId), w(), b.value.push(q);
    }, ie = () => {
      const q = b.value.length - 2, X = q < 0 ? 0 : q, P = b.value[X];
      P[p.value.type] === m.value.organization ? (a.value = q < 0 ? "root" : (P == null ? void 0 : P.elementId) || (P == null ? void 0 : P.id), o.value = "") : (a.value = "", o.value = q < 0 ? "" : (P == null ? void 0 : P.elementId) || (P == null ? void 0 : P.id)), w(), b.value.pop();
    }, ve = ke(() => b.value.length), ye = (q, X) => {
      !X && !n.topLink || X !== ve.value - 1 && (q[p.value.type] === m.value.organization ? (a.value = q == null ? void 0 : q.elementId, o.value = "") : (a.value = "", o.value = q == null ? void 0 : q.elementId), w(), b.value.splice(X + 1));
    }, Ge = ke(() => n.chooseType.includes("role") && n.chooseType.length === 1), Ze = ke(() => n.chooseType.includes("post") && n.chooseType.length === 1), ze = xe(n.tabs[0]), Te = xe(n.tabs[0]);
    e0(() => (Te.value = Ge.value ? n.tabs[1] : Ze.value ? n.tabs[2] : ze.value, Te.value));
    const $e = () => {
      _.dep.clear(), _.user.clear(), _.role.clear(), _.post.clear(), _.org.clear(), _.trans = [], st.value = [], Tt.value = [], ze.value = n.tabs[0], Te.value = n.tabs[0], i.value = "", o.value = n.pid, a.value = n.orgPid, b.value.splice(1, b.value.length), _.single = "", O.value = [];
    }, nt = () => {
      var q;
      t(
        "ok",
        Ke.cloneDeep({
          // 所有选项、部门、人员、角色分别列出
          ...E.value,
          // 排序后的列表
          sort: O.value
        })
      ), t("update:modelValue", Ke.cloneDeep(((q = E.value) == null ? void 0 : q.list) || [])), t("update:show", !1), $e();
    }, Fe = () => {
      t("update:show", !1), $e();
    };
    r({ handClear: $e, handRomeve: z, handDelete: M });
    const We = ke(() => {
      const q = D.value;
      return !!((q.includes("post") || q.includes("role")) && q.length > 1);
    }), xt = ke(() => [
      { label: "group", name: "组织架构" },
      { label: "role", name: "角色列表" },
      { label: "post", name: "岗位列表" }
    ].filter((q) => n.tabs.includes(q.label))), ct = ke(
      () => `${(typeof n.width == "string" ? Number.parseInt(n.width) : n.width) / 2 - 30}px`
    ), je = ke(
      () => `${typeof n.height == "string" ? Number.parseInt(n.height) : n.height}px`
    ), Xe = () => {
      n.multiple || (_.post.clear(), _.role.clear(), _.user.clear(), _.dep.clear(), _.single = "");
    }, st = xe([]), Ot = (q, X) => {
      n.multiple || (_.single = "");
      const P = n.multiple ? q : [q];
      if (!P.length) {
        _.role.clear();
        return;
      }
      Xe(), X.forEach((de) => {
        P != null && P.includes(de[p.value.id]) ? ee(de) : M(de);
      });
    };
    ht(
      () => E.value.role.len,
      (q) => {
        st.value = Ke.cloneDeep(E.value.role.list);
      }
    );
    const Tt = xe([]), yt = (q, X) => {
      n.multiple || (_.single = "");
      const P = n.multiple ? q : [q];
      if (!P.length) {
        _.post.clear();
        return;
      }
      Xe(), X.forEach((de) => {
        P != null && P.includes(de[p.value.id]) ? ee(de) : M(de);
      });
    };
    return ht(
      () => E.value.post.len,
      (q) => {
        Tt.value = Ke.cloneDeep(E.value.post.list);
      }
    ), ht(
      () => i.value,
      (q) => {
        C("");
      }
    ), (q, X) => (V(), ce(ne(na), {
      modelValue: U.value,
      "onUpdate:modelValue": X[6] || (X[6] = (P) => U.value = P),
      title: q.title,
      "destroy-on-close": "",
      "close-on-click-modal": !1,
      "close-on-click-escape": !1,
      draggable: "",
      "align-center": "",
      width: typeof q.width == "string" ? q.width : `${q.width}%`,
      class: "p_p_picker-dialog",
      "modal-class": "p_p_picker-dialog-modal",
      onClose: Fe
    }, {
      footer: ae(() => [
        he("span", uh, [
          oe(ne(Wt), {
            onClick: Rt(Fe, ["stop"])
          }, {
            default: ae(() => [
              Re("取消")
            ]),
            _: 1
          }, 8, ["onClick"]),
          oe(ne(Wt), {
            type: "primary",
            onClick: Rt(nt, ["stop"])
          }, {
            default: ae(() => [
              Re(" 确定 ")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: ae(() => [
        he("div", {
          class: "dep-use-picker",
          style: Pe({ height: je.value })
        }, [
          he("div", Wd, [
            he("div", null, [
              oe(ne(zr), {
                modelValue: i.value,
                "onUpdate:modelValue": X[0] || (X[0] = (P) => i.value = P),
                clearable: "",
                placeholder: q.placeholder,
                "prefix-icon": ld,
                style: Pe({ width: ct.value })
              }, null, 8, ["modelValue", "placeholder", "style"]),
              We.value ? (V(), ce(ne(_r), {
                key: 0,
                modelValue: ze.value,
                "onUpdate:modelValue": X[1] || (X[1] = (P) => ze.value = P),
                class: "ik-picker-tab",
                style: Pe({ width: ct.value })
              }, {
                default: ae(() => [
                  (V(!0), ue(Me, null, pt(xt.value, (P) => (V(), ce(ne(Co), {
                    label: P.label,
                    key: P.label
                  }, {
                    default: ae(() => [
                      Re(Ne(P.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "style"])) : Be("", !0)
            ]),
            Te.value === ne(xr).group ? (V(), ue("div", jd, [
              oe(ne(ia), {
                separator: ">",
                class: gt(["banner", { "top-unlink": !q.topLink }])
              }, {
                default: ae(() => [
                  ve.value ? (V(!0), ue(Me, { key: 0 }, pt(ne(b), (P, de) => (V(), ce(ne(oa), {
                    key: P[p.value.id],
                    onClick: Rt((Ae) => ye(P, de), ["stop"])
                  }, {
                    default: ae(() => [
                      Re(Ne(P[p.value.name]), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 128)) : Be("", !0)
                ]),
                _: 1
              }, 8, ["class"]),
              q.multiple ? (V(), ue("div", Yd, [
                oe(ne($t), {
                  modelValue: B.checkAll,
                  "onUpdate:modelValue": X[2] || (X[2] = (P) => B.checkAll = P),
                  indeterminate: B.indeterminate,
                  "true-label": 1,
                  "false-label": 0,
                  disabled: !q.multiple,
                  onChange: se,
                  onInput: se
                }, {
                  default: ae(() => [
                    Re("全选")
                  ]),
                  _: 1
                }, 8, ["modelValue", "indeterminate", "disabled"]),
                ve.value > 1 ? Dt((V(), ce(ne(Wt), {
                  key: 0,
                  link: "",
                  type: "primary",
                  onClick: Rt(ie, ["stop"])
                }, {
                  default: ae(() => [
                    Re("上一级")
                  ]),
                  _: 1
                }, 8, ["onClick"])), [
                  [t0, !j.value]
                ]) : Be("", !0)
              ])) : Be("", !0)
            ])) : Be("", !0),
            Te.value === ne(xr).group ? (V(), ue(Me, { key: 1 }, [
              J.value.length ? Dt((V(), ue("ul", Kd, [
                q.multiple ? (V(), ce(ne(Nn), {
                  key: 0,
                  modelValue: _.trans,
                  "onUpdate:modelValue": X[3] || (X[3] = (P) => _.trans = P)
                }, {
                  default: ae(() => [
                    (V(!0), ue(Me, null, pt(d.value, (P) => (V(), ue("li", {
                      key: P[p.value.id]
                    }, [
                      q.chooseType.includes("org") ? (V(), ue("div", Gd, [
                        oe(pr),
                        he("p", null, Ne(P[p.value.name]), 1)
                      ])) : (V(), ce(ne($t), {
                        key: 1,
                        label: P[p.value.id],
                        disabled: !K.value || (P == null ? void 0 : P.readonly)
                      }, {
                        default: ae(() => [
                          he("div", Zd, [
                            oe(pr),
                            he("p", null, Ne(P[p.value.name]), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["label", "disabled"])),
                      q.children ? (V(), ue("div", Xd, [
                        [m.value.organization, m.value.dep, m.value.role].includes(
                          P[p.value.type]
                        ) ? (V(), ce(ne(Wt), {
                          key: 0,
                          link: "",
                          type: "primary",
                          onClick: Rt((de) => be(P), ["stop"]),
                          disabled: P.disabled
                        }, {
                          icon: ae(() => [
                            oe(fi)
                          ]),
                          default: ae(() => [
                            Re(" 下级 ")
                          ]),
                          _: 2
                        }, 1032, ["onClick", "disabled"])) : Be("", !0)
                      ])) : Be("", !0)
                    ]))), 128)),
                    (!F.value || q.showDep) && !H.value ? (V(!0), ue(Me, { key: 0 }, pt(u.value, (P) => (V(), ue("li", {
                      key: P[p.value.id]
                    }, [
                      q.chooseType.includes("dep") || q.chooseType.includes("dep_user") ? (V(), ce(ne($t), {
                        key: 0,
                        label: P[p.value.id],
                        disabled: !K.value || (P == null ? void 0 : P.readonly)
                      }, {
                        default: ae(() => [
                          he("div", Qd, [
                            oe(hr),
                            he("p", null, Ne(P[p.value.name]), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["label", "disabled"])) : (V(), ue("div", Jd, [
                        oe(hr),
                        he("p", null, Ne(P[p.value.name]), 1)
                      ])),
                      q.children ? (V(), ue("div", eh, [
                        [m.value.dep, m.value.role].includes(
                          P[p.value.type]
                        ) ? (V(), ce(ne(Wt), {
                          key: 0,
                          link: "",
                          type: "primary",
                          onClick: Rt((de) => be(P), ["stop"]),
                          disabled: P.disabled
                        }, {
                          icon: ae(() => [
                            oe(fi)
                          ]),
                          default: ae(() => [
                            Re(" 下级 ")
                          ]),
                          _: 2
                        }, 1032, ["onClick", "disabled"])) : Be("", !0)
                      ])) : Be("", !0)
                    ]))), 128)) : Be("", !0),
                    q.chooseType.includes("user") || q.chooseType.includes("dep_user") ? (V(!0), ue(Me, { key: 1 }, pt(s.value, (P) => (V(), ue("li", {
                      key: P[p.value.id]
                    }, [
                      oe(ne($t), {
                        label: P[p.value.id],
                        disabled: !K.value || (P == null ? void 0 : P.readonly)
                      }, {
                        default: ae(() => {
                          var de, Ae;
                          return [
                            m.value.dep === P[p.value.type] ? (V(), ce(tr, { key: 0 })) : m.value.user === P[p.value.type] ? (V(), ce(ne(Lr), {
                              key: 1,
                              size: 30,
                              src: g((de = p.value) != null && de.avatar ? P[(Ae = p.value) == null ? void 0 : Ae.avatar] : ""),
                              icon: Mr
                            }, null, 8, ["src"])) : Be("", !0),
                            he("span", th, Ne(P[p.value.name]), 1)
                          ];
                        }),
                        _: 2
                      }, 1032, ["label", "disabled"])
                    ]))), 128)) : Be("", !0)
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : (V(), ce(ne(_r), {
                  key: 1,
                  modelValue: _.single,
                  "onUpdate:modelValue": X[4] || (X[4] = (P) => _.single = P)
                }, {
                  default: ae(() => [
                    (V(!0), ue(Me, null, pt(J.value, (P) => {
                      var de, Ae, Qe;
                      return V(), ue("li", {
                        key: P[p.value.id]
                      }, [
                        D.value.includes((de = P[p.value.type]) == null ? void 0 : de.toLocaleLowerCase()) ? (V(), ce(ne(Dn), {
                          key: 0,
                          label: P[p.value.id],
                          class: gt({
                            readonly: ![m.value.organization, m.value.dep, m.value.user].includes(
                              P[p.value.type]
                            ),
                            "w-full": !0
                          }),
                          disabled: P.readonly
                        }, {
                          default: ae(() => {
                            var mt, ft;
                            return [
                              m.value.organization === P[p.value.type] ? (V(), ce(pr, { key: 0 })) : m.value.dep === P[p.value.type] ? (V(), ce(hr, { key: 1 })) : m.value.role === P[p.value.type] ? (V(), ce(tr, { key: 2 })) : m.value.user === P[p.value.type] ? (V(), ce(ne(Lr), {
                                key: 3,
                                size: 30,
                                src: g((mt = p.value) != null && mt.avatar ? P[(ft = p.value) == null ? void 0 : ft.avatar] : ""),
                                icon: Mr
                              }, null, 8, ["src"])) : Be("", !0),
                              he("span", rh, Ne(P[p.value.name]), 1)
                            ];
                          }),
                          _: 2
                        }, 1032, ["label", "class", "disabled"])) : (V(), ue(Me, { key: 1 }, [
                          m.value.organization === P[p.value.type] ? (V(), ce(pr, { key: 0 })) : m.value.dep === P[p.value.type] ? (V(), ce(hr, { key: 1 })) : m.value.role === P[p.value.type] ? (V(), ce(tr, { key: 2 })) : m.value.user === P[p.value.type] ? (V(), ce(ne(Lr), {
                            key: 3,
                            size: 30,
                            src: g((Ae = p.value) != null && Ae.avatar ? P[(Qe = p.value) == null ? void 0 : Qe.avatar] : ""),
                            icon: Mr
                          }, null, 8, ["src"])) : Be("", !0),
                          he("span", nh, Ne(P[p.value.name]), 1)
                        ], 64)),
                        q.children ? (V(), ue("div", ih, [
                          [m.value.organization, m.value.dep, m.value.role].includes(
                            P[p.value.type]
                          ) ? (V(), ce(ne(Wt), {
                            key: 0,
                            link: "",
                            type: "primary",
                            onClick: Rt((mt) => be(P), ["stop"])
                          }, {
                            icon: ae(() => [
                              oe(fi)
                            ]),
                            default: ae(() => [
                              Re(" 下级 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : Be("", !0)
                        ])) : Be("", !0)
                      ]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"]))
              ])), [
                [ne(ii), l.value]
              ]) : (V(), ue("div", oh, Ne(q.emptyText), 1))
            ], 64)) : Te.value === ne(xr).role ? Dt((V(), ce(qd, {
              key: 2,
              fixPropOpt: p.value,
              list: c.value,
              max: q.max,
              multiple: q.multiple,
              "hand-list": st.value,
              onChange: Ot
            }, null, 8, ["fixPropOpt", "list", "max", "multiple", "hand-list"])), [
              [ne(ii), l.value]
            ]) : Te.value === ne(xr).post ? Dt((V(), ce(Dd, {
              key: 3,
              fixPropOpt: p.value,
              list: f.value,
              max: q.max,
              multiple: q.multiple,
              "hand-list": Tt.value,
              onChange: yt
            }, null, 8, ["fixPropOpt", "list", "max", "multiple", "hand-list"])), [
              [ne(ii), l.value]
            ]) : Be("", !0)
          ]),
          sh,
          he("div", ah, [
            he("div", ch, [
              lh,
              oe(ne(Wt), {
                type: "primary",
                link: "",
                onClick: Rt($e, ["stop"])
              }, {
                default: ae(() => [
                  Re("清空")
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            oe(ne(Eo), {
              tag: "ul",
              name: "fade",
              "item-key": "elementId",
              modelValue: O.value,
              "onUpdate:modelValue": X[5] || (X[5] = (P) => O.value = P),
              style: Pe({ height: `calc(${je.value} + 21px)` }),
              animation: ne(zt).animation,
              group: ne(zt).group,
              disabled: ne(zt).disabled,
              ghostClass: ne(zt).ghostClass,
              forceFallback: ne(zt).ghostClass
            }, {
              item: ae(({ element: P }) => [
                oe(Li, {
                  type: "transition",
                  name: "flip-list"
                }, {
                  default: ae(() => [
                    he("li", {
                      class: gt(["list-group-item"]),
                      style: Pe({
                        borderRadius: `${ne(zt).itemStyle.radius}px`,
                        marginBottom: `${ne(zt).itemStyle.bottom}px`,
                        backgroundColor: `${ne(zt).itemStyle.background}`
                      })
                    }, [
                      he("div", null, [
                        m.value.organization === P[p.value.type] ? (V(), ce(pr, { key: 0 })) : Be("", !0),
                        m.value.dep === P[p.value.type] ? (V(), ce(hr, { key: 1 })) : m.value.role === P[p.value.type] ? (V(), ce(tr, { key: 2 })) : m.value.post === P[p.value.type] ? (V(), ce(Ri, { key: 3 })) : m.value.user === P[p.value.type] ? (V(), ce(ne(Lr), {
                          key: 4,
                          size: 30,
                          src: g(p.value.avatar ? P[p.value.avatar] : ""),
                          icon: Mr
                        }, null, 8, ["src"])) : Be("", !0),
                        he("span", null, Ne(P[p.value.name]), 1)
                      ]),
                      Dt(oe(vd, {
                        class: "close",
                        onClick: Rt((de) => z(P), ["stop"])
                      }, null, 8, ["onClick"]), [
                        [t0, !(P != null && P.readonly)]
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
const dh = Cr(fh), hh = (e) => (Js("data-v-d488f4ef"), e = e(), ea(), e), ph = /* @__PURE__ */ hh(() => /* @__PURE__ */ he("i", { class: "ik ik-shezhi" }, null, -1)), vh = { class: "check-right" }, gh = { class: "dialog-footer" }, bh = /* @__PURE__ */ bt({
  __name: "IkBtnSetting",
  props: mr({
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
        t: (e) => e,
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
  emits: mr(["sort"], ["update:modelValue"]),
  setup(e, { emit: r }) {
    const t = e, n = Ni(e, "modelValue"), { t: i, dialog: o, path: a, user: s } = t.config, u = ke(() => `${s == null ? void 0 : s.id}_${a}${t.tab !== "" ? `_${t.tab}` : ""}`), c = xe([]), f = xe([]), d = xe([]), l = /* @__PURE__ */ new Map(), h = xe(!1), g = ke(() => {
      const w = f.value.length && f.value.length !== t.list.length;
      return !w && f.value.length && (h.value = !0), !!w;
    }), p = (w) => {
      var B;
      const _ = Ke.cloneDeep(d.value);
      _ == null || _.forEach((T) => {
        var C;
        if (!f.value.length)
          d.value = [];
        else if (!f.value.includes(T == null ? void 0 : T.key)) {
          const E = (C = d.value) == null ? void 0 : C.findIndex((D) => D.key === T.key);
          E !== -1 && d.value.splice(E, 1), T.show = !1, l.set(T.key, T);
        }
      }), f.value.forEach((T) => {
        var E;
        if (((E = d.value) == null ? void 0 : E.findIndex((D) => (D == null ? void 0 : D.key) === T)) === -1) {
          const D = l.get(T);
          D && (D.show = !0, d.value.push(D));
        }
      }), (B = d.value) != null && B.length || (d.value = Ke.cloneDeep(t.list)), w === !0 && (r("sort", Ke.cloneDeep(d.value)), n.value = Ke.cloneDeep(d.value));
    }, m = (w) => {
      if (w)
        f.value = t.list.map((_) => _.key);
      else {
        const _ = t.list.find((B) => !B.key || B.label === "操作");
        f.value = _ ? [_.key] : [];
      }
      p();
    }, O = () => {
      const w = rr.local.getItem(u.value);
      try {
        const _ = Ke.cloneDeep(t == null ? void 0 : t.list);
        if ((!w || !(w != null && w.length)) && rr.local.setItem(
          u.value,
          _.map(({ show: B, type: T, key: C, label: E, width: D, minWidth: L, align: F }) => ({
            show: B,
            key: C,
            type: T,
            label: E,
            width: D,
            minWidth: L,
            align: F
          }))
        ), c.value = [
          ...(_ == null ? void 0 : _.map((B) => (l.set(B.key, B), {
            ...B,
            show: B.show || !1
          }))) || []
        ], w) {
          const B = w.filter((T) => T.show).map((T) => T.key);
          f.value = [...B];
        } else {
          const B = c.value.filter((T) => T.show);
          f.value = B.map((T) => T.key);
        }
        p(!0);
      } catch (_) {
        console.info("error: ", _);
      }
    };
    O(), ht(() => t.list, () => {
      O();
    }, { deep: !0 });
    const k = xe(!1), v = () => {
      k.value = !0;
    }, b = (w) => {
      d.value = w;
    }, x = () => {
      k.value = !1, rr.local.setItem(
        u.value,
        d.value.map(({ show: w, key: _, label: B, value: T, width: C, minWidth: E, align: D }) => ({
          show: w,
          key: _,
          label: B,
          value: T,
          width: C,
          minWidth: E,
          align: D
        }))
      ), console.log("sortList ", d), r("sort", Ke.cloneDeep(d.value)), n.value = Ke.cloneDeep(d.value);
    };
    return (w, _) => {
      const B = it("el-button"), T = it("el-checkbox"), C = it("el-checkbox-group"), E = it("el-dialog"), D = Di("role");
      return V(), ue(Me, null, [
        e.btnType === "button" ? Dt((V(), ce(B, De({ key: 0 }, w.$attrs, {
          circle: e.circle,
          type: e.type,
          style: { minWidth: e.circle ? "40px" : "", minHeight: e.circle ? "40px" : "" },
          onClick: v
        }), Qs({
          icon: ae(() => [
            ph
          ]),
          _: 2
        }, [
          e.circle ? void 0 : {
            name: "default",
            fn: ae(() => [
              Re(Ne(ne(i)("设置")), 1)
            ]),
            key: "0"
          }
        ]), 1040, ["circle", "type", "style"])), [
          [D, w.$props.role]
        ]) : Be("", !0),
        e.btnType === "icon" ? Dt((V(), ce(ne(Mt), De({
          key: 1,
          name: "iksvg_shezhi2",
          "show-bg": "",
          pop: "",
          width: 40,
          size: "big"
        }, w.$attrs, { onClick: v }), null, 16)), [
          [D, w.$props.role]
        ]) : Be("", !0),
        oe(E, {
          modelValue: k.value,
          "onUpdate:modelValue": _[3] || (_[3] = (L) => k.value = L),
          draggable: "",
          width: e.inline ? ne(o).l : ne(o).sl,
          "close-on-click-modal": !1,
          "close-on-press-escape": !1,
          title: "显示字段",
          "append-to-body": "",
          onOpen: O
        }, {
          footer: ae(() => [
            he("div", gh, [
              oe(B, {
                onClick: _[2] || (_[2] = (L) => k.value = !1)
              }, {
                default: ae(() => [
                  Re(Ne(ne(i)("关闭")) + " ", 1)
                ]),
                _: 1
              }),
              oe(B, {
                type: "primary",
                disabled: d.value.length < 2,
                onClick: x
              }, {
                default: ae(() => [
                  Re(Ne(d.value.length < 2 ? "至少选择一个字段" : ne(i)("确定")), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          default: ae(() => [
            he("div", {
              class: gt(["view-fields", [e.inline ? null : "un-inline"]])
            }, [
              he("div", {
                style: Pe({ flex: e.inline ? 2 : 1 })
              }, [
                oe(T, {
                  modelValue: h.value,
                  "onUpdate:modelValue": _[0] || (_[0] = (L) => h.value = L),
                  class: "single-line",
                  indeterminate: g.value,
                  onChange: m
                }, {
                  default: ae(() => [
                    Re(" 全选 ")
                  ]),
                  _: 1
                }, 8, ["modelValue", "indeterminate"]),
                oe(C, {
                  modelValue: f.value,
                  "onUpdate:modelValue": _[1] || (_[1] = (L) => f.value = L),
                  onChange: p
                }, {
                  default: ae(() => [
                    (V(!0), ue(Me, null, pt(c.value, (L) => (V(), ce(T, {
                      key: L.key,
                      disabled: !L.key,
                      label: L.key
                    }, {
                      default: ae(() => [
                        Re(Ne(L.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["disabled", "label"]))), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ], 4),
              he("div", vh, [
                oe(ne(wh), {
                  list: d.value,
                  "item-style": { bottom: 4 },
                  onChange: b
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
const xh = /* @__PURE__ */ rt(bh, [["__scopeId", "data-v-d488f4ef"]]), _o = Cr(xh), wo = {
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
}, yh = {
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
}, mh = /* @__PURE__ */ bt({
  __name: "IkDragList",
  props: yh,
  emits: ["change"],
  setup(e, { emit: r }) {
    const t = e, n = xe([]);
    ht(
      () => t.list,
      (u) => {
        n.value = Ke.cloneDeep(u);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    const i = ke(() => ({
      ...wo,
      ...t,
      itemStyle: {
        ...wo.itemStyle,
        ...t.itemStyle
      }
    })), o = xe(!1), a = () => {
      o.value = !0;
    }, s = (u) => {
      o.value = !1;
      const c = t.list[u.oldIndex];
      r("change", n.value, {
        ...c,
        oldIndex: u.oldIndex,
        newIndex: u.newIndex
      });
    };
    return (u, c) => {
      const f = it("el-icon");
      return V(), ce(ne(Eo), {
        modelValue: n.value,
        "onUpdate:modelValue": c[0] || (c[0] = (d) => n.value = d),
        class: gt(["list-group", [i.value.groupClass]]),
        tag: "ul",
        attrs: i.value,
        animation: i.value.animation,
        group: i.value.group,
        disabled: i.value.disabled,
        "ghost-class": i.value.ghostClass,
        "force-fallback": i.value.ghostClass,
        "item-key": "order",
        onStart: a,
        onEnd: s
      }, {
        item: ae(({ element: d }) => [
          oe(Li, {
            type: "transition",
            name: "flip-list"
          }, {
            default: ae(() => [
              u.$slots.item ? kt(u.$slots, "item", {
                key: 0,
                item: d
              }, void 0, !0) : (V(), ue("li", {
                key: 1,
                class: gt(["list-group-item", [i.value.itemClass]]),
                style: Pe({
                  borderRadius: `${i.value.itemStyle.radius}px`,
                  marginBottom: `${i.value.itemStyle.bottom}px`,
                  backgroundColor: `${i.value.itemStyle.background}`
                })
              }, [
                i.value.showIcon && !u.$slots.icon ? (V(), ce(f, { key: 0 }, {
                  default: ae(() => [
                    oe(ne(ha))
                  ]),
                  _: 1
                })) : kt(u.$slots, "icon", { key: 1 }, void 0, !0),
                Re(" " + Ne(d.label), 1)
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
const _h = /* @__PURE__ */ rt(mh, [["__scopeId", "data-v-d2a34939"]]), wh = Cr(_h);
var Nt = /* @__PURE__ */ ((e) => (e.input = "input", e.area = "area", e.number = "number", e.select = "select", e.date = "date", e.datetime = "datetime", e.checkbox = "checkbox", e.radio = "radio", e.treeselect = "treeselect", e.choosePerson = "choosePerson", e))(Nt || {}), Yt = /* @__PURE__ */ ((e) => (e.year = "year", e.month = "month", e.date = "date", e.dates = "dates", e.datetime = "datetime", e.week = "week", e.datetimerange = "datetimerange", e.daterange = "daterange", e.monthrange = "monthrange", e))(Yt || {});
function ko(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ta(e);
}
const kh = /* @__PURE__ */ bt({
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
  setup(e, {
    emit: r,
    expose: t
  }) {
    const n = xe(), i = {}, o = xe({}), a = xe([]), s = xe({
      ...o.value
    });
    ht(a, (A, M) => {
      const z = M.filter((ee) => !A.includes(ee));
      if (z.length) {
        let ee = !1;
        z.forEach((se) => {
          s.value[se] !== void 0 && (ee = !0), s.value[se] = void 0;
        }), ee && r("search", s.value);
      }
    });
    const u = () => {
      a.value = [], e.list.forEach((A) => {
        var M, z;
        o.value[A.key] = o.value[A.value], i[A.key] = i[A.value], a.value.push(A.key), (M = s.value)[z = A.key] ?? (M[z] = A.value || null);
      });
    };
    u(), ht(() => e.list, () => {
      u();
    });
    const c = ke(() => a.value.map((A) => e.list.find((M) => M.key === A))), f = () => {
      var A;
      s.value.page = 1, (A = e.search) == null || A.call(e, s.value), r("search", s.value);
    };
    t({
      resetForm: () => {
        var A, M;
        (M = (A = n.value) == null ? void 0 : A.resetFields) == null || M.call(A), f();
      },
      reRequest: () => {
        f();
      }
    });
    const h = () => {
      var A;
      r("search", s.value), (A = e.search) == null || A.call(e, s.value);
    }, g = (A) => {
      A.key === "Enter" && f();
    }, p = () => {
      var A;
      (A = n.value) == null || A.resetFields(), f();
    };
    e.immediate && f();
    const m = ({
      maxlength: A,
      minlength: M,
      key: z,
      disabled: ee,
      placeholder: se,
      formProp: be = {},
      value: ie,
      label: ve
    }) => oe(zr, De({
      modelValue: s.value[z],
      "onUpdate:modelValue": [(ye) => s.value[z] = ye, (ye) => s.value[z] = ye],
      clearable: !0,
      maxlength: A,
      minlength: M,
      disabled: ee,
      onBlur: () => h()
    }, be, {
      placeholder: (be == null ? void 0 : be.placeholder) || se || `请输入${ve || ""}`
    }), null), O = ({
      key: A,
      placeholder: M,
      max: z,
      min: ee,
      disabled: se,
      precision: be,
      step: ie = 1,
      label: ve,
      formProp: ye = {}
    }) => oe(ua, De({
      modelValue: s.value[A],
      "onUpdate:modelValue": (Ge) => s.value[A] = Ge,
      clearable: !0,
      max: z,
      min: ee,
      disabled: se,
      precision: be,
      step: ie,
      onChange: () => h()
    }, ye, {
      placeholder: (ye == null ? void 0 : ye.placeholder) || M || `请输入${ve || ""}`
    }), null), k = ({
      key: A,
      placeholder: M,
      disabled: z,
      options: ee,
      label: se,
      multiple: be = !1,
      filterable: ie = !0,
      formProp: ve = {}
    }) => oe(n0, De({
      modelValue: s.value[A],
      "onUpdate:modelValue": (ye) => s.value[A] = ye,
      clearable: !0,
      disabled: z,
      multiple: be,
      filterable: ie,
      onChange: () => h()
    }, ve, {
      placeholder: (ve == null ? void 0 : ve.placeholder) || M || `请选择${se || ""}`
    }), {
      default: () => [ee == null ? void 0 : ee.map((ye) => oe(i0, {
        key: ye.value,
        label: ye.label,
        value: ye.value
      }, null))]
    }), v = ({
      key: A,
      disabled: M,
      options: z,
      formProp: ee = {}
    }) => oe(_r, De({
      modelValue: s.value[A],
      "onUpdate:modelValue": (se) => s.value[A] = se,
      disabled: M,
      onChange: () => h()
    }, ee), {
      default: () => [z == null ? void 0 : z.map((se) => (ee == null ? void 0 : ee.radioType) === "button" ? oe(Co, {
        key: se.value,
        label: se.value,
        name: se.label
      }, null) : oe(Dn, {
        key: se.value,
        label: se.value,
        name: se.label
      }, null))]
    }), b = ({
      key: A,
      disabled: M,
      options: z,
      min: ee,
      max: se,
      formProp: be = {}
    }) => oe(Nn, De({
      modelValue: s.value[A],
      "onUpdate:modelValue": (ie) => s.value[A] = ie,
      disabled: M,
      max: se,
      min: ee,
      onChange: () => h()
    }, be), {
      default: () => [z == null ? void 0 : z.map((ie) => oe($t, {
        key: ie.value,
        label: ie.label,
        value: ie.value
      }, null))]
    }), x = ({
      key: A,
      label: M,
      formProp: z = {},
      placeholder: ee
    }) => oe(o0, De({
      modelValue: s.value[A],
      "onUpdate:modelValue": (se) => s.value[A] = se,
      onChange: () => h()
    }, z, {
      placeholder: (z == null ? void 0 : z.placeholder) || ee || `请选择${M}时间`
    }), null), w = ({
      key: A,
      disabled: M,
      editable: z = !0,
      startPlaceholder: ee = "开始日期",
      endplaceholder: se = "结束日期",
      dateType: be = Yt.date,
      format: ie,
      placeholder: ve = "请选择日期",
      popperclass: ye,
      rangeSeparator: Ge = "-",
      defaultValue: Ze,
      defaultTime: ze,
      valueFormat: Te,
      disabledDate: $e = () => !1,
      formProp: nt = {}
    }) => {
      let Fe = ie;
      if (Fe)
        switch (be) {
          case Yt.date:
          case Yt.dates:
            Fe = "YYYY-MM-DD";
            break;
          case Yt.year:
            Fe = "YYYY";
            break;
          case Yt.month:
            Fe = "YYYY-MM";
            break;
          case Yt.week:
            Fe = "YYYY-MM-DD";
            break;
          default:
            Fe = "";
        }
      return oe(o0, De({
        modelValue: s.value[A],
        "onUpdate:modelValue": (We) => s.value[A] = We,
        onChange: () => h(),
        disabled: M,
        type: be,
        editable: z,
        startPlaceholder: ee,
        endPlaceholder: se,
        rangeSeparator: Ge,
        format: Fe,
        popperClass: ye,
        defaultValue: Ze,
        defaultTime: ze,
        valueFormat: Te,
        disabledDate: $e
      }, nt, {
        placeholder: (nt == null ? void 0 : nt.placeholder) || ve || "请选择日期"
      }), null);
    }, _ = ({
      key: A,
      options: M,
      multiple: z = !1,
      filterable: ee = !0,
      nodeKey: se = "id",
      props: be,
      highlightCurrent: ie = !0,
      defaultExpandAll: ve = !1,
      expandOnClickNode: ye = !1,
      placeholder: Ge = "全部",
      checkOnClickNode: Ze = !1,
      showCheckbox: ze = !1,
      checkStrictly: Te = !0,
      defaultCheckedKeys: $e = [],
      currentNodeKey: nt = "",
      accordion: Fe = !1,
      formProp: We = {},
      label: xt
    }) => oe(fa, De({
      modelValue: s.value[A],
      "onUpdate:modelValue": (ct) => s.value[A] = ct,
      data: M,
      onChange: () => h(),
      clearable: !0,
      multiple: z,
      props: be,
      placeholder: Ge,
      filterable: ee,
      nodeKey: se,
      highlightCurrent: ie,
      defaultExpandAll: ve,
      expandOnClickNode: ye,
      checkOnClickNode: Ze,
      showCheckbox: ze,
      checkStrictly: Te,
      defaultCheckedKeys: $e,
      currentNodeKey: nt,
      accordion: Fe
    }, We, {
      placeholder: (We == null ? void 0 : We.placeholder) || Ge || `请选择${xt || ""}`
    }), null), B = ({
      key: A,
      selectKey: M,
      placeholder: z,
      disabled: ee,
      options: se,
      multiple: be = !1,
      filterable: ie = !0,
      formProp: ve = {}
    }) => oe(zr, De({
      disabled: ee,
      modelValue: s.value[A],
      "onUpdate:modelValue": (ye) => s.value[A] = ye,
      onBlur: () => h()
    }, ve, {
      placeholder: (ve == null ? void 0 : ve.placeholder) || z || "全部"
    }), {
      prepend: () => oe(n0, De({
        disabled: ee,
        multiple: be,
        filterable: ie,
        modelValue: s.value[M],
        "onUpdate:modelValue": (ye) => s.value[M] = ye,
        onChange: () => h()
      }, ve), {
        default: () => [se == null ? void 0 : se.map((ye) => oe(i0, {
          key: ye.value,
          label: ye.label,
          value: ye.value
        }, null))]
      })
    }), T = "", C = "iking", E = xe(null), D = xe([]), L = xe(!1), F = xe(""), H = /* @__PURE__ */ new Map(), j = (A) => {
      L.value = !0, D.value = H.has(A) ? H.get(A) : s.value[A], F.value = A;
    }, K = () => {
      H.set(F.value, []), F.value = "", h();
    }, re = (A) => {
      var M, z;
      s.value[F.value] = (M = A.list.map((ee) => ee.elementName)) == null ? void 0 : M.join(","), H.set(F.value, A.list), r("search", s.value), r("pickerChange", A), (z = e.search) == null || z.call(e, s.value);
    }, J = ({
      key: A,
      placeholder: M,
      typeOption: z,
      _list: ee,
      maxlength: se,
      minlength: be,
      disabled: ie,
      formProp: ve
    }) => oe(zr, De({
      modelValue: s.value[A],
      "onUpdate:modelValue": (ye) => s.value[A] = ye,
      clearable: !0,
      maxlength: se,
      minlength: be,
      disabled: ie
    }, ve, {
      onClick: () => j(A),
      onClear: () => K(),
      placeholder: (ve == null ? void 0 : ve.placeholder) || M || `点击选择${label || "人员"}`
    }), null), le = (A) => {
      switch (A.type) {
        case "":
        case void 0:
        case Nt.input:
        case "el-input":
          return m(A);
        case Nt.number:
        case "el-input-number":
          return O(A);
        case Nt.select:
        case "el-select":
          return k(A);
        case Nt.checkbox:
        case "el-checkbox":
          return b(A);
        case Nt.radio:
        case "el-radio-group":
        case "el-radio":
          return v(A);
        case Nt.date:
        case "el-date-picker":
          return w(A);
        case "el-time-select":
          return x(A);
        case Nt.treeselect:
        case "el-tree-select":
          return _(A);
        case Nt.choosePerson:
          return J(A);
        case "select-input":
          return B(A);
        default:
          return oe(Me, null, null);
      }
    }, U = ke(() => {
      var z;
      const A = [], M = c.value.length - 1;
      return (z = c.value) == null || z.forEach((ee, se) => {
        let be, ie;
        if (!ee)
          return [];
        const ve = ee.col || 1;
        A.push(oe(sa, {
          xl: {
            span: ve * 6
          },
          lg: {
            span: ve * 6
          },
          md: {
            span: ve * 12
          },
          sm: {
            span: ve * 24
          }
        }, {
          default: () => [se === M ? (
            // 最后一个form后跟上选项className="last-form"
            oe("div", {
              class: "last-form"
            }, [oe(r0, {
              label: ee.type === "select-input" ? "" : ee.label,
              prop: ee.key
            }, ko(be = le(ee)) ? be : {
              default: () => [be]
            }), oe(Mt, {
              name: "icon-sousuo1",
              pop: !0,
              title: "搜索",
              size: "big",
              "show-bg": !0,
              width: 40,
              onClick: () => h()
            }, null), oe(Mt, {
              name: "icon-zhongzhi",
              pop: !0,
              title: "重置并搜索",
              size: "big",
              "show-bg": !0,
              width: 40,
              onClick: () => p()
            }, null)])
          ) : oe(r0, {
            label: ee.type === "select-input" ? "" : ee.label,
            prop: ee.key
          }, ko(ie = le(ee)) ? ie : {
            default: () => [ie]
          })]
        }));
      }), A;
    });
    return () => oe(Me, null, [oe(aa, {
      class: "gl-search-card",
      shadow: e.shadow
    }, {
      default: () => [oe(ca, {
        class: "auto-search-form",
        onKeyup: g,
        ref: n,
        model: s.value
      }, {
        default: () => [oe(la, {
          gutter: 16
        }, {
          default: () => [U.value]
        })]
      })]
    }), oe(dh, {
      ref: E.value,
      modelValue: D.value,
      "onUpdate:modelValue": (A) => D.value = A,
      show: L.value,
      "onUpdate:show": (A) => L.value = A,
      "append-to-body": !0,
      api: {
        methods: "post",
        url: `${T}/server/component/pick/mix`,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: C
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
      onOk: (A) => re(A)
    }, null)]);
  }
}), Sh = kh, Ch = { class: "header-left" }, Eh = { class: "title" }, Bh = { class: "flex items-center" }, Ah = /* @__PURE__ */ bt({
  __name: "IkPageHead",
  props: mr({
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
  setup(e) {
    const r = e;
    So((c) => ({
      ad902706: u
    })), console.log("IkBtnSetting 111", _o);
    const t = Ni(e, "modelValue"), n = xe(r.defaultShow), i = () => {
      n.value = !n.value;
    }, o = ke(() => r.fields.filter((c) => !c.onlyForm)), a = ke(() => {
      var c;
      return (c = r.fields) == null ? void 0 : c.filter((f) => f.search);
    }), s = ke(() => a.value.length), u = `${r.headerHeight}px`;
    return (c, f) => {
      const d = it("el-card");
      return V(), ue("div", {
        class: gt(["ik-page-header", { "show-search": n.value }])
      }, [
        he("div", {
          class: "header",
          style: Pe({
            borderColor: e.headerBorder ? "var(--ik-border-color)" : "transparent",
            marginBottom: e.headerBorder ? "8px" : "0"
          })
        }, [
          he("div", Ch, [
            he("span", Eh, Ne(e.headerTitle), 1),
            kt(c.$slots, "headerLeft", {}, void 0, !0)
          ]),
          he("div", Bh, [
            kt(c.$slots, "headerRight", {}, void 0, !0),
            e.exportBtn ? (V(), ce(ne(Mt), {
              key: 0,
              name: "iksvg_xiazai",
              width: 40,
              type: "primary",
              title: "导出",
              "show-bg": "",
              pop: "",
              size: "big"
            })) : Be("", !0),
            s.value ? (V(), ce(ne(Mt), {
              key: 1,
              name: "iksvg_shaixuan1",
              width: 40,
              title: n.value ? "收起筛选条件" : "展开筛选条件",
              "show-bg": "",
              pop: "",
              size: "big",
              onClick: i
            }, null, 8, ["title"])) : Be("", !0),
            e.refreshBtn ? (V(), ce(ne(Mt), {
              key: 2,
              name: "iksvg_zhongzhi",
              title: "保留搜索条件刷新",
              "show-bg": "",
              width: 40,
              pop: "",
              size: "big",
              onClick: e.search
            }, null, 8, ["onClick"])) : Be("", !0),
            oe(ne(_o), {
              modelValue: t.value,
              "onUpdate:modelValue": f[0] || (f[0] = (l) => t.value = l),
              title: "设置表格字段",
              list: o.value,
              tab: e.tabId
            }, null, 8, ["modelValue", "list", "tab"])
          ])
        ], 4),
        oe(d, {
          shadow: "always",
          class: "search-form"
        }, {
          default: ae(() => [
            oe(ne(Sh), {
              list: a.value,
              search: e.search,
              loading: e.loading
            }, null, 8, ["list", "search", "loading"]),
            he("span", {
              class: "hide-serch",
              onClick: i
            }, [
              oe(ne(Mt), {
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
const Ih = /* @__PURE__ */ rt(Ah, [["__scopeId", "data-v-ed2dd2b6"]]), Es = {
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
}, Oh = { class: "total" }, Th = { class: "num" }, Rh = /* @__PURE__ */ bt({
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
  setup(e, { emit: r }) {
    const t = e, n = xe(1);
    ht(() => t.current, (u) => {
      n.value = u;
    });
    const i = [15, 30, 60, 100, 200, 500], o = xe(i[0]), a = (u) => {
      r("sizeChange", u), t == null || t.search({
        page: n.value,
        rows: o.value
      });
    }, s = (u) => {
      r("currentChange", u), t == null || t.search({
        page: n.value,
        rows: o.value
      });
    };
    return (u, c) => {
      const f = it("el-pagination");
      return V(), ce(f, De({
        "current-page": n.value,
        "onUpdate:currentPage": c[0] || (c[0] = (d) => n.value = d),
        "page-size": o.value,
        "onUpdate:pageSize": c[1] || (c[1] = (d) => o.value = d)
      }, u.$attrs, {
        layout: "slot, ->, sizes, prev, pager, next,  jumper",
        small: e.mini,
        total: e.total,
        "page-sizes": i,
        class: "ik-pagin-action",
        onSizeChange: a,
        onCurrentChange: s
      }), {
        default: ae(() => [
          he("span", Oh, [
            Re(" 共"),
            he("span", Th, Ne(e.total), 1),
            Re(" 项数据 ")
          ])
        ]),
        _: 1
      }, 16, ["current-page", "page-size", "small", "total"]);
    };
  }
});
const Lh = /* @__PURE__ */ rt(Rh, [["__scopeId", "data-v-e7b4fc6e"]]), Nh = /* @__PURE__ */ bt({
  __name: "IkPageTable",
  props: Es,
  emits: ["selection-change", "page-change"],
  setup(e, { expose: r, emit: t }) {
    var d;
    const n = e, { attrs: i } = ra(), o = xe({
      page: ((d = i.page) == null ? void 0 : d.page) || 1,
      rows: 15
    }), a = ke(() => {
      const { page: l, rows: h } = (i == null ? void 0 : i.page) || o.value, g = Ke.cloneDeep(n.tableData);
      return g.forEach((p, m) => {
        p.__index = l === 1 ? m + 1 : (l - 1) * h + m + 1;
      }), g;
    }), s = (l) => {
      o.value = l, t("page-change", l), n.search();
    }, u = xe([]), c = (l) => {
      u.value = l, t("selection-change", l);
    }, f = xe();
    return r({ table: f }), (l, h) => {
      var O, k, v;
      const g = it("el-table-column"), p = it("el-table"), m = Di("loading");
      return V(), ue(Me, null, [
        (O = l.$slots) != null && O.table ? kt(l.$slots, "table", { key: 0 }, void 0, !0) : (V(), ce(Li, {
          key: 1,
          name: "el-zoom-in-center"
        }, {
          default: ae(() => [
            Dt((V(), ce(p, De({
              ref_key: "refTable",
              ref: f
            }, { ...l.$attrs, ...n }, {
              data: a.value,
              style: { width: "100%" },
              onSelectionChange: c
            }), {
              default: ae(() => [
                l.selection ? (V(), ce(g, {
                  key: 0,
                  type: "selection",
                  align: "center",
                  width: "56"
                })) : Be("", !0),
                l.serial ? (V(), ce(g, {
                  key: 1,
                  prop: "__index",
                  label: "序号",
                  width: 60,
                  align: "center"
                })) : Be("", !0),
                kt(l.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 16, ["data"])), [
              [m, l.loading]
            ])
          ]),
          _: 3
        })),
        l.total ? (V(), ce(Lh, {
          key: 2,
          current: ((v = (k = l.$attrs) == null ? void 0 : k.page) == null ? void 0 : v.page) || 1,
          total: l.total,
          search: s
        }, null, 8, ["current", "total"])) : Be("", !0)
      ], 64);
    };
  }
});
const Dh = /* @__PURE__ */ rt(Nh, [["__scopeId", "data-v-41391707"]]), $h = { class: "choose" }, Ph = { class: "btn" }, Mh = /* @__PURE__ */ bt({
  __name: "index",
  props: mr(Es, {
    modelValue: {
      type: Object,
      default: () => ({
        page: 1,
        rows: 15
      })
    }
  }),
  emits: mr(["selection-change", "delete", "download", "addFunction"], ["update:modelValue"]),
  setup(e, { expose: r, emit: t }) {
    const n = e, i = Ni(e, "modelValue"), o = () => {
      var x;
      (x = i == null ? void 0 : i.value) != null && x.page && (i.value = {
        page: 1,
        rows: 15
      });
    };
    o();
    const a = (x) => {
      i.value = {
        ...i.value,
        ...x
      };
    }, s = (x) => {
      var _;
      o();
      const w = (x == null ? void 0 : x.type) === "click" ? {} : x;
      i.value = {
        ...i.value,
        ...w
      }, (_ = n == null ? void 0 : n.search) == null || _.call(n, {
        ...i.value
      });
    }, u = xe([]), c = (x) => {
      u.value = x, t("selection-change", x);
    }, f = ke(() => u.value.length || n.chooseLen), d = xe(n.fields), l = ke(() => "light"), h = xe(), g = xe(), p = xe(), m = xe(!1), O = xe(void 0), k = xe(n.title || ""), v = (x) => {
      O.value = x ? { ...x } : null, n.title ? n.title.includes("新增") || n.title.includes("修改") ? k.value = x ? n.title.replace(/新增/g, "修改") : n.title.replace(/修改/g, "新增") : k.value = x ? `修改${n.title}` : `新增${n.title}` : k.value = x ? "修改" : "新增", m.value = !0;
    }, b = ke(() => n.fields.find((x) => x.isEdit));
    return r({
      table: h,
      header: g,
      chooseList: u,
      srotFields: d,
      pageData: i,
      dialog: p,
      handAdd: v
    }), (x, w) => {
      const _ = it("el-button"), B = it("IkNumberDuration"), T = it("el-table-column"), C = Di("role");
      return V(), ue(Me, null, [
        oe(Ih, De({
          ref_key: "refHeader",
          ref: g
        }, { ...x.$attrs, ...n }, {
          modelValue: d.value,
          "onUpdate:modelValue": w[1] || (w[1] = (E) => d.value = E),
          loading: x.loading,
          search: s,
          "tab-id": x.tabId
        }), {
          headerLeft: ae(() => [
            kt(x.$slots, "headerLeft", {}, void 0, !0)
          ]),
          headerRight: ae(() => [
            kt(x.$slots, "headerRight", {}, () => [
              b.value ? Dt((V(), ce(_, {
                key: 0,
                type: "primary",
                onClick: w[0] || (w[0] = (E) => v(null))
              }, {
                default: ae(() => [
                  Re(" 新增 ")
                ]),
                _: 1
              })), [
                [C, x.role]
              ]) : Be("", !0)
            ], !0)
          ]),
          _: 3
        }, 16, ["modelValue", "loading", "tab-id"]),
        x.selection ? (V(), ue("div", {
          key: 0,
          class: gt(["hand-selection", { select: f.value }])
        }, [
          he("p", $h, [
            Re(" 已选 "),
            he("span", null, [
              oe(B, { value: f.value }, null, 8, ["value"])
            ]),
            Re(" 条 ")
          ]),
          he("div", Ph, [
            x.$slots.selectionRight ? kt(x.$slots, "selectionRight", { key: 1 }, void 0, !0) : (V(), ue(Me, { key: 0 }, [
              oe(ne(Mt), {
                name: "icon-shanchu",
                "show-bg": "",
                background: "var(--el-bg-color)",
                width: 40,
                type: "primary",
                onClick: w[2] || (w[2] = (E) => x.$emit("delete", u.value))
              }),
              oe(ne(Mt), {
                name: "icon-xiazai",
                "show-bg": "",
                background: "var(--el-bg-color)",
                width: 40,
                type: "primary",
                onClick: w[3] || (w[3] = (E) => x.$emit("download", u.value))
              })
            ], 64))
          ])
        ], 2)) : Be("", !0),
        kt(x.$slots, "table", {}, () => [
          oe(Dh, De({
            ref_key: "refTable",
            ref: h,
            page: i.value
          }, { ...x.$attrs, ...n }, {
            onPageChange: a,
            onSelectionChange: c
          }), {
            default: ae(() => [
              (V(!0), ue(Me, null, pt(d.value, (E) => (V(), ue(Me, {
                key: E.key
              }, [
                E.show ? (V(), ue(Me, { key: 0 }, [
                  E.tableSlot ? (V(), ce(T, De({
                    key: 1,
                    align: E.align,
                    width: E.width,
                    "min-width": E.minWidth,
                    "show-overflow-tooltip": {
                      effect: l.value ?? "light"
                    }
                  }, { ...E, ...x.$attrs, ...n }), {
                    default: ae((D) => [
                      kt(x.$slots, E.tableSlot, { data: D }, void 0, !0)
                    ]),
                    _: 2
                  }, 1040, ["align", "width", "min-width", "show-overflow-tooltip"])) : (V(), ce(T, De({
                    key: 0,
                    prop: E.key,
                    width: E.width,
                    "min-width": E.minWidth,
                    align: E.align,
                    "show-overflow-tooltip": {
                      effect: l.value ?? "light"
                    },
                    "show-arrow": !1
                  }, { ...E, ...x.$attrs, ...n }), null, 16, ["prop", "width", "min-width", "align", "show-overflow-tooltip"]))
                ], 64)) : Be("", !0)
              ], 64))), 128))
            ]),
            _: 3
          }, 16, ["page"])
        ], !0)
      ], 64);
    };
  }
});
const zh = /* @__PURE__ */ rt(Mh, [["__scopeId", "data-v-e345a12f"]]), jh = Cr(zh);
export {
  jh as IkPageFull,
  jh as default
};
