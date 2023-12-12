var ps = Object.defineProperty;
var vs = (e, t, r) => t in e ? ps(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Rn = (e, t, r) => (vs(e, typeof t != "symbol" ? t + "" : t, r), r);
import { openBlock as Z, createElementBlock as ie, createElementVNode as ce, defineComponent as ln, computed as Pe, ref as Oe, createBlock as be, unref as ae, withCtx as ye, createTextVNode as et, createCommentVNode as ke, Fragment as Xe, renderList as st, createVNode as Be, toDisplayString as Te, useCssVars as xs, watch as It, toRef as bs, reactive as Dn, nextTick as In, watchEffect as a0, withModifiers as St, normalizeStyle as qt, normalizeClass as cr, withDirectives as er, vShow as c0, Transition as gs, pushScopeId as ys, popScopeId as ms } from "vue";
import * as _s from "lodash-es";
import { ElCheckbox as Rt, ElCheckboxGroup as jn, ElRadioGroup as kr, ElRadio as Xn, ElDialog as ws, ElButton as Pt, ElInput as Es, ElRadioButton as ks, ElBreadcrumb as Ss, ElBreadcrumbItem as Cs, ElAvatar as br, vLoading as Ln } from "element-plus";
import As from "vuedraggable";
const ai = (e, t) => {
  if (e.install = (r) => {
    for (const n of [e, ...Object.values(t ?? {})])
      r.component(n.name, n);
  }, t)
    for (const [r, n] of Object.entries(t))
      e[r] = n;
  return e;
}, pt = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
};
var le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bs(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      if (this instanceof n) {
        var i = [null];
        i.push.apply(i, arguments);
        var s = Function.bind.apply(t, i);
        return new s();
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
var f0 = {}, Ts = {
  get exports() {
    return f0;
  },
  set exports(e) {
    f0 = e;
  }
};
function ir(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Sr = {}, Rs = {
  get exports() {
    return Sr;
  },
  set exports(e) {
    Sr = e;
  }
};
const Ls = {}, Os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ls
}, Symbol.toStringTag, { value: "Module" })), Ns = /* @__PURE__ */ Bs(Os);
var u0;
function ge() {
  return u0 || (u0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(le, function() {
      var r = r || function(n, i) {
        var s;
        if (typeof window < "u" && window.crypto && (s = window.crypto), typeof self < "u" && self.crypto && (s = self.crypto), typeof globalThis < "u" && globalThis.crypto && (s = globalThis.crypto), !s && typeof window < "u" && window.msCrypto && (s = window.msCrypto), !s && typeof le < "u" && le.crypto && (s = le.crypto), !s && typeof ir == "function")
          try {
            s = Ns;
          } catch {
          }
        var c = function() {
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
        }, f = Object.create || function() {
          function w() {
          }
          return function(v) {
            var g;
            return w.prototype = v, g = new w(), w.prototype = null, g;
          };
        }(), h = {}, o = h.lib = {}, d = o.Base = function() {
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
              var v = f(this);
              return w && v.mixIn(w), (!v.hasOwnProperty("init") || this.init === v.init) && (v.init = function() {
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
              for (var v in w)
                w.hasOwnProperty(v) && (this[v] = w[v]);
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
        }(), l = o.WordArray = d.extend({
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
          init: function(w, v) {
            w = this.words = w || [], v != i ? this.sigBytes = v : this.sigBytes = w.length * 4;
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
            return (w || u).stringify(this);
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
            var v = this.words, g = w.words, y = this.sigBytes, k = w.sigBytes;
            if (this.clamp(), y % 4)
              for (var E = 0; E < k; E++) {
                var T = g[E >>> 2] >>> 24 - E % 4 * 8 & 255;
                v[y + E >>> 2] |= T << 24 - (y + E) % 4 * 8;
              }
            else
              for (var P = 0; P < k; P += 4)
                v[y + P >>> 2] = g[P >>> 2];
            return this.sigBytes += k, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var w = this.words, v = this.sigBytes;
            w[v >>> 2] &= 4294967295 << 32 - v % 4 * 8, w.length = n.ceil(v / 4);
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
            var w = d.clone.call(this);
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
            for (var v = [], g = 0; g < w; g += 4)
              v.push(c());
            return new l.init(v, w);
          }
        }), a = h.enc = {}, u = a.Hex = {
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
            for (var v = w.words, g = w.sigBytes, y = [], k = 0; k < g; k++) {
              var E = v[k >>> 2] >>> 24 - k % 4 * 8 & 255;
              y.push((E >>> 4).toString(16)), y.push((E & 15).toString(16));
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
            for (var v = w.length, g = [], y = 0; y < v; y += 2)
              g[y >>> 3] |= parseInt(w.substr(y, 2), 16) << 24 - y % 8 * 4;
            return new l.init(g, v / 2);
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
          stringify: function(w) {
            for (var v = w.words, g = w.sigBytes, y = [], k = 0; k < g; k++) {
              var E = v[k >>> 2] >>> 24 - k % 4 * 8 & 255;
              y.push(String.fromCharCode(E));
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
            for (var v = w.length, g = [], y = 0; y < v; y++)
              g[y >>> 2] |= (w.charCodeAt(y) & 255) << 24 - y % 4 * 8;
            return new l.init(g, v);
          }
        }, p = a.Utf8 = {
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
              return decodeURIComponent(escape(x.stringify(w)));
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
            return x.parse(unescape(encodeURIComponent(w)));
          }
        }, _ = o.BufferedBlockAlgorithm = d.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new l.init(), this._nDataBytes = 0;
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
            typeof w == "string" && (w = p.parse(w)), this._data.concat(w), this._nDataBytes += w.sigBytes;
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
            var v, g = this._data, y = g.words, k = g.sigBytes, E = this.blockSize, T = E * 4, P = k / T;
            w ? P = n.ceil(P) : P = n.max((P | 0) - this._minBufferSize, 0);
            var S = P * E, A = n.min(S * 4, k);
            if (S) {
              for (var D = 0; D < S; D += E)
                this._doProcessBlock(y, D);
              v = y.splice(0, S), g.sigBytes -= A;
            }
            return new l.init(v, A);
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
            var w = d.clone.call(this);
            return w._data = this._data.clone(), w;
          },
          _minBufferSize: 0
        });
        o.Hasher = _.extend({
          /**
           * Configuration options.
           */
          cfg: d.extend(),
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
            _.reset.call(this), this._doReset();
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
          _createHelper: function(w) {
            return function(v, g) {
              return new w.init(g).finalize(v);
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
            return function(v, g) {
              return new R.HMAC.init(w, g).finalize(v);
            };
          }
        });
        var R = h.algo = {};
        return h;
      }(Math);
      return r;
    });
  }(Rs)), Sr;
}
var Cr = {}, Ds = {
  get exports() {
    return Cr;
  },
  set exports(e) {
    Cr = e;
  }
}, l0;
function dn() {
  return l0 || (l0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ge());
    })(le, function(r) {
      return function(n) {
        var i = r, s = i.lib, c = s.Base, f = s.WordArray, h = i.x64 = {};
        h.Word = c.extend({
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
          init: function(o, d) {
            this.high = o, this.low = d;
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
        }), h.WordArray = c.extend({
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
          init: function(o, d) {
            o = this.words = o || [], d != n ? this.sigBytes = d : this.sigBytes = o.length * 8;
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
            for (var o = this.words, d = o.length, l = [], a = 0; a < d; a++) {
              var u = o[a];
              l.push(u.high), l.push(u.low);
            }
            return f.create(l, this.sigBytes);
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
            for (var o = c.clone.call(this), d = o.words = this.words.slice(0), l = d.length, a = 0; a < l; a++)
              d[a] = d[a].clone();
            return o;
          }
        });
      }(), r;
    });
  }(Ds)), Cr;
}
var Ar = {}, Is = {
  get exports() {
    return Ar;
  },
  set exports(e) {
    Ar = e;
  }
}, d0;
function Ps() {
  return d0 || (d0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ge());
    })(le, function(r) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var n = r, i = n.lib, s = i.WordArray, c = s.init, f = s.init = function(h) {
            if (h instanceof ArrayBuffer && (h = new Uint8Array(h)), (h instanceof Int8Array || typeof Uint8ClampedArray < "u" && h instanceof Uint8ClampedArray || h instanceof Int16Array || h instanceof Uint16Array || h instanceof Int32Array || h instanceof Uint32Array || h instanceof Float32Array || h instanceof Float64Array) && (h = new Uint8Array(h.buffer, h.byteOffset, h.byteLength)), h instanceof Uint8Array) {
              for (var o = h.byteLength, d = [], l = 0; l < o; l++)
                d[l >>> 2] |= h[l] << 24 - l % 4 * 8;
              c.call(this, d, o);
            } else
              c.apply(this, arguments);
          };
          f.prototype = s;
        }
      }(), r.lib.WordArray;
    });
  }(Is)), Ar;
}
var Br = {}, $s = {
  get exports() {
    return Br;
  },
  set exports(e) {
    Br = e;
  }
}, h0;
function Ms() {
  return h0 || (h0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ge());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.WordArray, c = n.enc;
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
          stringify: function(h) {
            for (var o = h.words, d = h.sigBytes, l = [], a = 0; a < d; a += 2) {
              var u = o[a >>> 2] >>> 16 - a % 4 * 8 & 65535;
              l.push(String.fromCharCode(u));
            }
            return l.join("");
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
          parse: function(h) {
            for (var o = h.length, d = [], l = 0; l < o; l++)
              d[l >>> 1] |= h.charCodeAt(l) << 16 - l % 2 * 16;
            return s.create(d, o * 2);
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
          stringify: function(h) {
            for (var o = h.words, d = h.sigBytes, l = [], a = 0; a < d; a += 2) {
              var u = f(o[a >>> 2] >>> 16 - a % 4 * 8 & 65535);
              l.push(String.fromCharCode(u));
            }
            return l.join("");
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
          parse: function(h) {
            for (var o = h.length, d = [], l = 0; l < o; l++)
              d[l >>> 1] |= f(h.charCodeAt(l) << 16 - l % 2 * 16);
            return s.create(d, o * 2);
          }
        };
        function f(h) {
          return h << 8 & 4278255360 | h >>> 8 & 16711935;
        }
      }(), r.enc.Utf16;
    });
  }($s)), Br;
}
var Tr = {}, zs = {
  get exports() {
    return Tr;
  },
  set exports(e) {
    Tr = e;
  }
}, p0;
function Mt() {
  return p0 || (p0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ge());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.WordArray, c = n.enc;
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
          stringify: function(h) {
            var o = h.words, d = h.sigBytes, l = this._map;
            h.clamp();
            for (var a = [], u = 0; u < d; u += 3)
              for (var x = o[u >>> 2] >>> 24 - u % 4 * 8 & 255, p = o[u + 1 >>> 2] >>> 24 - (u + 1) % 4 * 8 & 255, _ = o[u + 2 >>> 2] >>> 24 - (u + 2) % 4 * 8 & 255, R = x << 16 | p << 8 | _, w = 0; w < 4 && u + w * 0.75 < d; w++)
                a.push(l.charAt(R >>> 6 * (3 - w) & 63));
            var v = l.charAt(64);
            if (v)
              for (; a.length % 4; )
                a.push(v);
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
          parse: function(h) {
            var o = h.length, d = this._map, l = this._reverseMap;
            if (!l) {
              l = this._reverseMap = [];
              for (var a = 0; a < d.length; a++)
                l[d.charCodeAt(a)] = a;
            }
            var u = d.charAt(64);
            if (u) {
              var x = h.indexOf(u);
              x !== -1 && (o = x);
            }
            return f(h, o, l);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function f(h, o, d) {
          for (var l = [], a = 0, u = 0; u < o; u++)
            if (u % 4) {
              var x = d[h.charCodeAt(u - 1)] << u % 4 * 2, p = d[h.charCodeAt(u)] >>> 6 - u % 4 * 2, _ = x | p;
              l[a >>> 2] |= _ << 24 - a % 4 * 8, a++;
            }
          return s.create(l, a);
        }
      }(), r.enc.Base64;
    });
  }(zs)), Tr;
}
var Rr = {}, Fs = {
  get exports() {
    return Rr;
  },
  set exports(e) {
    Rr = e;
  }
}, v0;
function Hs() {
  return v0 || (v0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ge());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.WordArray, c = n.enc;
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
          stringify: function(h, o = !0) {
            var d = h.words, l = h.sigBytes, a = o ? this._safe_map : this._map;
            h.clamp();
            for (var u = [], x = 0; x < l; x += 3)
              for (var p = d[x >>> 2] >>> 24 - x % 4 * 8 & 255, _ = d[x + 1 >>> 2] >>> 24 - (x + 1) % 4 * 8 & 255, R = d[x + 2 >>> 2] >>> 24 - (x + 2) % 4 * 8 & 255, w = p << 16 | _ << 8 | R, v = 0; v < 4 && x + v * 0.75 < l; v++)
                u.push(a.charAt(w >>> 6 * (3 - v) & 63));
            var g = a.charAt(64);
            if (g)
              for (; u.length % 4; )
                u.push(g);
            return u.join("");
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
          parse: function(h, o = !0) {
            var d = h.length, l = o ? this._safe_map : this._map, a = this._reverseMap;
            if (!a) {
              a = this._reverseMap = [];
              for (var u = 0; u < l.length; u++)
                a[l.charCodeAt(u)] = u;
            }
            var x = l.charAt(64);
            if (x) {
              var p = h.indexOf(x);
              p !== -1 && (d = p);
            }
            return f(h, d, a);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function f(h, o, d) {
          for (var l = [], a = 0, u = 0; u < o; u++)
            if (u % 4) {
              var x = d[h.charCodeAt(u - 1)] << u % 4 * 2, p = d[h.charCodeAt(u)] >>> 6 - u % 4 * 2, _ = x | p;
              l[a >>> 2] |= _ << 24 - a % 4 * 8, a++;
            }
          return s.create(l, a);
        }
      }(), r.enc.Base64url;
    });
  }(Fs)), Rr;
}
var Lr = {}, qs = {
  get exports() {
    return Lr;
  },
  set exports(e) {
    Lr = e;
  }
}, x0;
function zt() {
  return x0 || (x0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ge());
    })(le, function(r) {
      return function(n) {
        var i = r, s = i.lib, c = s.WordArray, f = s.Hasher, h = i.algo, o = [];
        (function() {
          for (var p = 0; p < 64; p++)
            o[p] = n.abs(n.sin(p + 1)) * 4294967296 | 0;
        })();
        var d = h.MD5 = f.extend({
          _doReset: function() {
            this._hash = new c.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(p, _) {
            for (var R = 0; R < 16; R++) {
              var w = _ + R, v = p[w];
              p[w] = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360;
            }
            var g = this._hash.words, y = p[_ + 0], k = p[_ + 1], E = p[_ + 2], T = p[_ + 3], P = p[_ + 4], S = p[_ + 5], A = p[_ + 6], D = p[_ + 7], N = p[_ + 8], F = p[_ + 9], M = p[_ + 10], W = p[_ + 11], K = p[_ + 12], te = p[_ + 13], J = p[_ + 14], re = p[_ + 15], z = g[0], H = g[1], q = g[2], V = g[3];
            z = l(z, H, q, V, y, 7, o[0]), V = l(V, z, H, q, k, 12, o[1]), q = l(q, V, z, H, E, 17, o[2]), H = l(H, q, V, z, T, 22, o[3]), z = l(z, H, q, V, P, 7, o[4]), V = l(V, z, H, q, S, 12, o[5]), q = l(q, V, z, H, A, 17, o[6]), H = l(H, q, V, z, D, 22, o[7]), z = l(z, H, q, V, N, 7, o[8]), V = l(V, z, H, q, F, 12, o[9]), q = l(q, V, z, H, M, 17, o[10]), H = l(H, q, V, z, W, 22, o[11]), z = l(z, H, q, V, K, 7, o[12]), V = l(V, z, H, q, te, 12, o[13]), q = l(q, V, z, H, J, 17, o[14]), H = l(H, q, V, z, re, 22, o[15]), z = a(z, H, q, V, k, 5, o[16]), V = a(V, z, H, q, A, 9, o[17]), q = a(q, V, z, H, W, 14, o[18]), H = a(H, q, V, z, y, 20, o[19]), z = a(z, H, q, V, S, 5, o[20]), V = a(V, z, H, q, M, 9, o[21]), q = a(q, V, z, H, re, 14, o[22]), H = a(H, q, V, z, P, 20, o[23]), z = a(z, H, q, V, F, 5, o[24]), V = a(V, z, H, q, J, 9, o[25]), q = a(q, V, z, H, T, 14, o[26]), H = a(H, q, V, z, N, 20, o[27]), z = a(z, H, q, V, te, 5, o[28]), V = a(V, z, H, q, E, 9, o[29]), q = a(q, V, z, H, D, 14, o[30]), H = a(H, q, V, z, K, 20, o[31]), z = u(z, H, q, V, S, 4, o[32]), V = u(V, z, H, q, N, 11, o[33]), q = u(q, V, z, H, W, 16, o[34]), H = u(H, q, V, z, J, 23, o[35]), z = u(z, H, q, V, k, 4, o[36]), V = u(V, z, H, q, P, 11, o[37]), q = u(q, V, z, H, D, 16, o[38]), H = u(H, q, V, z, M, 23, o[39]), z = u(z, H, q, V, te, 4, o[40]), V = u(V, z, H, q, y, 11, o[41]), q = u(q, V, z, H, T, 16, o[42]), H = u(H, q, V, z, A, 23, o[43]), z = u(z, H, q, V, F, 4, o[44]), V = u(V, z, H, q, K, 11, o[45]), q = u(q, V, z, H, re, 16, o[46]), H = u(H, q, V, z, E, 23, o[47]), z = x(z, H, q, V, y, 6, o[48]), V = x(V, z, H, q, D, 10, o[49]), q = x(q, V, z, H, J, 15, o[50]), H = x(H, q, V, z, S, 21, o[51]), z = x(z, H, q, V, K, 6, o[52]), V = x(V, z, H, q, T, 10, o[53]), q = x(q, V, z, H, M, 15, o[54]), H = x(H, q, V, z, k, 21, o[55]), z = x(z, H, q, V, N, 6, o[56]), V = x(V, z, H, q, re, 10, o[57]), q = x(q, V, z, H, A, 15, o[58]), H = x(H, q, V, z, te, 21, o[59]), z = x(z, H, q, V, P, 6, o[60]), V = x(V, z, H, q, W, 10, o[61]), q = x(q, V, z, H, E, 15, o[62]), H = x(H, q, V, z, F, 21, o[63]), g[0] = g[0] + z | 0, g[1] = g[1] + H | 0, g[2] = g[2] + q | 0, g[3] = g[3] + V | 0;
          },
          _doFinalize: function() {
            var p = this._data, _ = p.words, R = this._nDataBytes * 8, w = p.sigBytes * 8;
            _[w >>> 5] |= 128 << 24 - w % 32;
            var v = n.floor(R / 4294967296), g = R;
            _[(w + 64 >>> 9 << 4) + 15] = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360, _[(w + 64 >>> 9 << 4) + 14] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, p.sigBytes = (_.length + 1) * 4, this._process();
            for (var y = this._hash, k = y.words, E = 0; E < 4; E++) {
              var T = k[E];
              k[E] = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360;
            }
            return y;
          },
          clone: function() {
            var p = f.clone.call(this);
            return p._hash = this._hash.clone(), p;
          }
        });
        function l(p, _, R, w, v, g, y) {
          var k = p + (_ & R | ~_ & w) + v + y;
          return (k << g | k >>> 32 - g) + _;
        }
        function a(p, _, R, w, v, g, y) {
          var k = p + (_ & w | R & ~w) + v + y;
          return (k << g | k >>> 32 - g) + _;
        }
        function u(p, _, R, w, v, g, y) {
          var k = p + (_ ^ R ^ w) + v + y;
          return (k << g | k >>> 32 - g) + _;
        }
        function x(p, _, R, w, v, g, y) {
          var k = p + (R ^ (_ | ~w)) + v + y;
          return (k << g | k >>> 32 - g) + _;
        }
        i.MD5 = f._createHelper(d), i.HmacMD5 = f._createHmacHelper(d);
      }(Math), r.MD5;
    });
  }(qs)), Lr;
}
var Or = {}, Us = {
  get exports() {
    return Or;
  },
  set exports(e) {
    Or = e;
  }
}, b0;
function Qn() {
  return b0 || (b0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ge());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.WordArray, c = i.Hasher, f = n.algo, h = [], o = f.SHA1 = c.extend({
          _doReset: function() {
            this._hash = new s.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(d, l) {
            for (var a = this._hash.words, u = a[0], x = a[1], p = a[2], _ = a[3], R = a[4], w = 0; w < 80; w++) {
              if (w < 16)
                h[w] = d[l + w] | 0;
              else {
                var v = h[w - 3] ^ h[w - 8] ^ h[w - 14] ^ h[w - 16];
                h[w] = v << 1 | v >>> 31;
              }
              var g = (u << 5 | u >>> 27) + R + h[w];
              w < 20 ? g += (x & p | ~x & _) + 1518500249 : w < 40 ? g += (x ^ p ^ _) + 1859775393 : w < 60 ? g += (x & p | x & _ | p & _) - 1894007588 : g += (x ^ p ^ _) - 899497514, R = _, _ = p, p = x << 30 | x >>> 2, x = u, u = g;
            }
            a[0] = a[0] + u | 0, a[1] = a[1] + x | 0, a[2] = a[2] + p | 0, a[3] = a[3] + _ | 0, a[4] = a[4] + R | 0;
          },
          _doFinalize: function() {
            var d = this._data, l = d.words, a = this._nDataBytes * 8, u = d.sigBytes * 8;
            return l[u >>> 5] |= 128 << 24 - u % 32, l[(u + 64 >>> 9 << 4) + 14] = Math.floor(a / 4294967296), l[(u + 64 >>> 9 << 4) + 15] = a, d.sigBytes = l.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var d = c.clone.call(this);
            return d._hash = this._hash.clone(), d;
          }
        });
        n.SHA1 = c._createHelper(o), n.HmacSHA1 = c._createHmacHelper(o);
      }(), r.SHA1;
    });
  }(Us)), Or;
}
var Nr = {}, Ws = {
  get exports() {
    return Nr;
  },
  set exports(e) {
    Nr = e;
  }
}, g0;
function ci() {
  return g0 || (g0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ge());
    })(le, function(r) {
      return function(n) {
        var i = r, s = i.lib, c = s.WordArray, f = s.Hasher, h = i.algo, o = [], d = [];
        (function() {
          function u(R) {
            for (var w = n.sqrt(R), v = 2; v <= w; v++)
              if (!(R % v))
                return !1;
            return !0;
          }
          function x(R) {
            return (R - (R | 0)) * 4294967296 | 0;
          }
          for (var p = 2, _ = 0; _ < 64; )
            u(p) && (_ < 8 && (o[_] = x(n.pow(p, 1 / 2))), d[_] = x(n.pow(p, 1 / 3)), _++), p++;
        })();
        var l = [], a = h.SHA256 = f.extend({
          _doReset: function() {
            this._hash = new c.init(o.slice(0));
          },
          _doProcessBlock: function(u, x) {
            for (var p = this._hash.words, _ = p[0], R = p[1], w = p[2], v = p[3], g = p[4], y = p[5], k = p[6], E = p[7], T = 0; T < 64; T++) {
              if (T < 16)
                l[T] = u[x + T] | 0;
              else {
                var P = l[T - 15], S = (P << 25 | P >>> 7) ^ (P << 14 | P >>> 18) ^ P >>> 3, A = l[T - 2], D = (A << 15 | A >>> 17) ^ (A << 13 | A >>> 19) ^ A >>> 10;
                l[T] = S + l[T - 7] + D + l[T - 16];
              }
              var N = g & y ^ ~g & k, F = _ & R ^ _ & w ^ R & w, M = (_ << 30 | _ >>> 2) ^ (_ << 19 | _ >>> 13) ^ (_ << 10 | _ >>> 22), W = (g << 26 | g >>> 6) ^ (g << 21 | g >>> 11) ^ (g << 7 | g >>> 25), K = E + W + N + d[T] + l[T], te = M + F;
              E = k, k = y, y = g, g = v + K | 0, v = w, w = R, R = _, _ = K + te | 0;
            }
            p[0] = p[0] + _ | 0, p[1] = p[1] + R | 0, p[2] = p[2] + w | 0, p[3] = p[3] + v | 0, p[4] = p[4] + g | 0, p[5] = p[5] + y | 0, p[6] = p[6] + k | 0, p[7] = p[7] + E | 0;
          },
          _doFinalize: function() {
            var u = this._data, x = u.words, p = this._nDataBytes * 8, _ = u.sigBytes * 8;
            return x[_ >>> 5] |= 128 << 24 - _ % 32, x[(_ + 64 >>> 9 << 4) + 14] = n.floor(p / 4294967296), x[(_ + 64 >>> 9 << 4) + 15] = p, u.sigBytes = x.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var u = f.clone.call(this);
            return u._hash = this._hash.clone(), u;
          }
        });
        i.SHA256 = f._createHelper(a), i.HmacSHA256 = f._createHmacHelper(a);
      }(Math), r.SHA256;
    });
  }(Ws)), Nr;
}
var Dr = {}, Vs = {
  get exports() {
    return Dr;
  },
  set exports(e) {
    Dr = e;
  }
}, y0;
function Ys() {
  return y0 || (y0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), ci());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.WordArray, c = n.algo, f = c.SHA256, h = c.SHA224 = f.extend({
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
            var o = f._doFinalize.call(this);
            return o.sigBytes -= 4, o;
          }
        });
        n.SHA224 = f._createHelper(h), n.HmacSHA224 = f._createHmacHelper(h);
      }(), r.SHA224;
    });
  }(Vs)), Dr;
}
var Ir = {}, Ks = {
  get exports() {
    return Ir;
  },
  set exports(e) {
    Ir = e;
  }
}, m0;
function fi() {
  return m0 || (m0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), dn());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.Hasher, c = n.x64, f = c.Word, h = c.WordArray, o = n.algo;
        function d() {
          return f.create.apply(f, arguments);
        }
        var l = [
          d(1116352408, 3609767458),
          d(1899447441, 602891725),
          d(3049323471, 3964484399),
          d(3921009573, 2173295548),
          d(961987163, 4081628472),
          d(1508970993, 3053834265),
          d(2453635748, 2937671579),
          d(2870763221, 3664609560),
          d(3624381080, 2734883394),
          d(310598401, 1164996542),
          d(607225278, 1323610764),
          d(1426881987, 3590304994),
          d(1925078388, 4068182383),
          d(2162078206, 991336113),
          d(2614888103, 633803317),
          d(3248222580, 3479774868),
          d(3835390401, 2666613458),
          d(4022224774, 944711139),
          d(264347078, 2341262773),
          d(604807628, 2007800933),
          d(770255983, 1495990901),
          d(1249150122, 1856431235),
          d(1555081692, 3175218132),
          d(1996064986, 2198950837),
          d(2554220882, 3999719339),
          d(2821834349, 766784016),
          d(2952996808, 2566594879),
          d(3210313671, 3203337956),
          d(3336571891, 1034457026),
          d(3584528711, 2466948901),
          d(113926993, 3758326383),
          d(338241895, 168717936),
          d(666307205, 1188179964),
          d(773529912, 1546045734),
          d(1294757372, 1522805485),
          d(1396182291, 2643833823),
          d(1695183700, 2343527390),
          d(1986661051, 1014477480),
          d(2177026350, 1206759142),
          d(2456956037, 344077627),
          d(2730485921, 1290863460),
          d(2820302411, 3158454273),
          d(3259730800, 3505952657),
          d(3345764771, 106217008),
          d(3516065817, 3606008344),
          d(3600352804, 1432725776),
          d(4094571909, 1467031594),
          d(275423344, 851169720),
          d(430227734, 3100823752),
          d(506948616, 1363258195),
          d(659060556, 3750685593),
          d(883997877, 3785050280),
          d(958139571, 3318307427),
          d(1322822218, 3812723403),
          d(1537002063, 2003034995),
          d(1747873779, 3602036899),
          d(1955562222, 1575990012),
          d(2024104815, 1125592928),
          d(2227730452, 2716904306),
          d(2361852424, 442776044),
          d(2428436474, 593698344),
          d(2756734187, 3733110249),
          d(3204031479, 2999351573),
          d(3329325298, 3815920427),
          d(3391569614, 3928383900),
          d(3515267271, 566280711),
          d(3940187606, 3454069534),
          d(4118630271, 4000239992),
          d(116418474, 1914138554),
          d(174292421, 2731055270),
          d(289380356, 3203993006),
          d(460393269, 320620315),
          d(685471733, 587496836),
          d(852142971, 1086792851),
          d(1017036298, 365543100),
          d(1126000580, 2618297676),
          d(1288033470, 3409855158),
          d(1501505948, 4234509866),
          d(1607167915, 987167468),
          d(1816402316, 1246189591)
        ], a = [];
        (function() {
          for (var x = 0; x < 80; x++)
            a[x] = d();
        })();
        var u = o.SHA512 = s.extend({
          _doReset: function() {
            this._hash = new h.init([
              new f.init(1779033703, 4089235720),
              new f.init(3144134277, 2227873595),
              new f.init(1013904242, 4271175723),
              new f.init(2773480762, 1595750129),
              new f.init(1359893119, 2917565137),
              new f.init(2600822924, 725511199),
              new f.init(528734635, 4215389547),
              new f.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(x, p) {
            for (var _ = this._hash.words, R = _[0], w = _[1], v = _[2], g = _[3], y = _[4], k = _[5], E = _[6], T = _[7], P = R.high, S = R.low, A = w.high, D = w.low, N = v.high, F = v.low, M = g.high, W = g.low, K = y.high, te = y.low, J = k.high, re = k.low, z = E.high, H = E.low, q = T.high, V = T.low, pe = P, xe = S, Ce = A, ue = D, Ae = N, Me = F, at = M, je = W, He = K, Re = te, Ne = J, _t = re, vt = z, tt = H, wt = q, rt = V, ze = 0; ze < 80; ze++) {
              var qe, Ge, Et = a[ze];
              if (ze < 16)
                Ge = Et.high = x[p + ze * 2] | 0, qe = Et.low = x[p + ze * 2 + 1] | 0;
              else {
                var kt = a[ze - 15], ct = kt.high, $ = kt.low, X = (ct >>> 1 | $ << 31) ^ (ct >>> 8 | $ << 24) ^ ct >>> 7, I = ($ >>> 1 | ct << 31) ^ ($ >>> 8 | ct << 24) ^ ($ >>> 7 | ct << 25), se = a[ze - 2], _e = se.high, Ue = se.low, ft = (_e >>> 19 | Ue << 13) ^ (_e << 3 | Ue >>> 29) ^ _e >>> 6, nt = (Ue >>> 19 | _e << 13) ^ (Ue << 3 | _e >>> 29) ^ (Ue >>> 6 | _e << 26), Dt = a[ze - 7], De = Dt.high, Ve = Dt.low, jt = a[ze - 16], gn = jt.high, ut = jt.low;
                qe = I + Ve, Ge = X + De + (qe >>> 0 < I >>> 0 ? 1 : 0), qe = qe + nt, Ge = Ge + ft + (qe >>> 0 < nt >>> 0 ? 1 : 0), qe = qe + ut, Ge = Ge + gn + (qe >>> 0 < ut >>> 0 ? 1 : 0), Et.high = Ge, Et.low = qe;
              }
              var yn = He & Ne ^ ~He & vt, lr = Re & _t ^ ~Re & tt, dr = pe & Ce ^ pe & Ae ^ Ce & Ae, mn = xe & ue ^ xe & Me ^ ue & Me, _n = (pe >>> 28 | xe << 4) ^ (pe << 30 | xe >>> 2) ^ (pe << 25 | xe >>> 7), hr = (xe >>> 28 | pe << 4) ^ (xe << 30 | pe >>> 2) ^ (xe << 25 | pe >>> 7), wn = (He >>> 14 | Re << 18) ^ (He >>> 18 | Re << 14) ^ (He << 23 | Re >>> 9), En = (Re >>> 14 | He << 18) ^ (Re >>> 18 | He << 14) ^ (Re << 23 | He >>> 9), pr = l[ze], kn = pr.high, vr = pr.low, Ze = rt + En, xt = wt + wn + (Ze >>> 0 < rt >>> 0 ? 1 : 0), Ze = Ze + lr, xt = xt + yn + (Ze >>> 0 < lr >>> 0 ? 1 : 0), Ze = Ze + vr, xt = xt + kn + (Ze >>> 0 < vr >>> 0 ? 1 : 0), Ze = Ze + qe, xt = xt + Ge + (Ze >>> 0 < qe >>> 0 ? 1 : 0), Xt = hr + mn, Sn = _n + dr + (Xt >>> 0 < hr >>> 0 ? 1 : 0);
              wt = vt, rt = tt, vt = Ne, tt = _t, Ne = He, _t = Re, Re = je + Ze | 0, He = at + xt + (Re >>> 0 < je >>> 0 ? 1 : 0) | 0, at = Ae, je = Me, Ae = Ce, Me = ue, Ce = pe, ue = xe, xe = Ze + Xt | 0, pe = xt + Sn + (xe >>> 0 < Ze >>> 0 ? 1 : 0) | 0;
            }
            S = R.low = S + xe, R.high = P + pe + (S >>> 0 < xe >>> 0 ? 1 : 0), D = w.low = D + ue, w.high = A + Ce + (D >>> 0 < ue >>> 0 ? 1 : 0), F = v.low = F + Me, v.high = N + Ae + (F >>> 0 < Me >>> 0 ? 1 : 0), W = g.low = W + je, g.high = M + at + (W >>> 0 < je >>> 0 ? 1 : 0), te = y.low = te + Re, y.high = K + He + (te >>> 0 < Re >>> 0 ? 1 : 0), re = k.low = re + _t, k.high = J + Ne + (re >>> 0 < _t >>> 0 ? 1 : 0), H = E.low = H + tt, E.high = z + vt + (H >>> 0 < tt >>> 0 ? 1 : 0), V = T.low = V + rt, T.high = q + wt + (V >>> 0 < rt >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var x = this._data, p = x.words, _ = this._nDataBytes * 8, R = x.sigBytes * 8;
            p[R >>> 5] |= 128 << 24 - R % 32, p[(R + 128 >>> 10 << 5) + 30] = Math.floor(_ / 4294967296), p[(R + 128 >>> 10 << 5) + 31] = _, x.sigBytes = p.length * 4, this._process();
            var w = this._hash.toX32();
            return w;
          },
          clone: function() {
            var x = s.clone.call(this);
            return x._hash = this._hash.clone(), x;
          },
          blockSize: 1024 / 32
        });
        n.SHA512 = s._createHelper(u), n.HmacSHA512 = s._createHmacHelper(u);
      }(), r.SHA512;
    });
  }(Ks)), Ir;
}
var Pr = {}, Gs = {
  get exports() {
    return Pr;
  },
  set exports(e) {
    Pr = e;
  }
}, _0;
function Zs() {
  return _0 || (_0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), dn(), fi());
    })(le, function(r) {
      return function() {
        var n = r, i = n.x64, s = i.Word, c = i.WordArray, f = n.algo, h = f.SHA512, o = f.SHA384 = h.extend({
          _doReset: function() {
            this._hash = new c.init([
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
            var d = h._doFinalize.call(this);
            return d.sigBytes -= 16, d;
          }
        });
        n.SHA384 = h._createHelper(o), n.HmacSHA384 = h._createHmacHelper(o);
      }(), r.SHA384;
    });
  }(Gs)), Pr;
}
var $r = {}, js = {
  get exports() {
    return $r;
  },
  set exports(e) {
    $r = e;
  }
}, w0;
function Xs() {
  return w0 || (w0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), dn());
    })(le, function(r) {
      return function(n) {
        var i = r, s = i.lib, c = s.WordArray, f = s.Hasher, h = i.x64, o = h.Word, d = i.algo, l = [], a = [], u = [];
        (function() {
          for (var _ = 1, R = 0, w = 0; w < 24; w++) {
            l[_ + 5 * R] = (w + 1) * (w + 2) / 2 % 64;
            var v = R % 5, g = (2 * _ + 3 * R) % 5;
            _ = v, R = g;
          }
          for (var _ = 0; _ < 5; _++)
            for (var R = 0; R < 5; R++)
              a[_ + 5 * R] = R + (2 * _ + 3 * R) % 5 * 5;
          for (var y = 1, k = 0; k < 24; k++) {
            for (var E = 0, T = 0, P = 0; P < 7; P++) {
              if (y & 1) {
                var S = (1 << P) - 1;
                S < 32 ? T ^= 1 << S : E ^= 1 << S - 32;
              }
              y & 128 ? y = y << 1 ^ 113 : y <<= 1;
            }
            u[k] = o.create(E, T);
          }
        })();
        var x = [];
        (function() {
          for (var _ = 0; _ < 25; _++)
            x[_] = o.create();
        })();
        var p = d.SHA3 = f.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: f.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var _ = this._state = [], R = 0; R < 25; R++)
              _[R] = new o.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(_, R) {
            for (var w = this._state, v = this.blockSize / 2, g = 0; g < v; g++) {
              var y = _[R + 2 * g], k = _[R + 2 * g + 1];
              y = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, k = (k << 8 | k >>> 24) & 16711935 | (k << 24 | k >>> 8) & 4278255360;
              var E = w[g];
              E.high ^= k, E.low ^= y;
            }
            for (var T = 0; T < 24; T++) {
              for (var P = 0; P < 5; P++) {
                for (var S = 0, A = 0, D = 0; D < 5; D++) {
                  var E = w[P + 5 * D];
                  S ^= E.high, A ^= E.low;
                }
                var N = x[P];
                N.high = S, N.low = A;
              }
              for (var P = 0; P < 5; P++)
                for (var F = x[(P + 4) % 5], M = x[(P + 1) % 5], W = M.high, K = M.low, S = F.high ^ (W << 1 | K >>> 31), A = F.low ^ (K << 1 | W >>> 31), D = 0; D < 5; D++) {
                  var E = w[P + 5 * D];
                  E.high ^= S, E.low ^= A;
                }
              for (var te = 1; te < 25; te++) {
                var S, A, E = w[te], J = E.high, re = E.low, z = l[te];
                z < 32 ? (S = J << z | re >>> 32 - z, A = re << z | J >>> 32 - z) : (S = re << z - 32 | J >>> 64 - z, A = J << z - 32 | re >>> 64 - z);
                var H = x[a[te]];
                H.high = S, H.low = A;
              }
              var q = x[0], V = w[0];
              q.high = V.high, q.low = V.low;
              for (var P = 0; P < 5; P++)
                for (var D = 0; D < 5; D++) {
                  var te = P + 5 * D, E = w[te], pe = x[te], xe = x[(P + 1) % 5 + 5 * D], Ce = x[(P + 2) % 5 + 5 * D];
                  E.high = pe.high ^ ~xe.high & Ce.high, E.low = pe.low ^ ~xe.low & Ce.low;
                }
              var E = w[0], ue = u[T];
              E.high ^= ue.high, E.low ^= ue.low;
            }
          },
          _doFinalize: function() {
            var _ = this._data, R = _.words;
            this._nDataBytes * 8;
            var w = _.sigBytes * 8, v = this.blockSize * 32;
            R[w >>> 5] |= 1 << 24 - w % 32, R[(n.ceil((w + 1) / v) * v >>> 5) - 1] |= 128, _.sigBytes = R.length * 4, this._process();
            for (var g = this._state, y = this.cfg.outputLength / 8, k = y / 8, E = [], T = 0; T < k; T++) {
              var P = g[T], S = P.high, A = P.low;
              S = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360, A = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360, E.push(A), E.push(S);
            }
            return new c.init(E, y);
          },
          clone: function() {
            for (var _ = f.clone.call(this), R = _._state = this._state.slice(0), w = 0; w < 25; w++)
              R[w] = R[w].clone();
            return _;
          }
        });
        i.SHA3 = f._createHelper(p), i.HmacSHA3 = f._createHmacHelper(p);
      }(Math), r.SHA3;
    });
  }(js)), $r;
}
var Mr = {}, Qs = {
  get exports() {
    return Mr;
  },
  set exports(e) {
    Mr = e;
  }
}, E0;
function Js() {
  return E0 || (E0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ge());
    })(le, function(r) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(n) {
        var i = r, s = i.lib, c = s.WordArray, f = s.Hasher, h = i.algo, o = c.create([
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
        ]), d = c.create([
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
        ]), l = c.create([
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
        ]), u = c.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), x = c.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), p = h.RIPEMD160 = f.extend({
          _doReset: function() {
            this._hash = c.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(k, E) {
            for (var T = 0; T < 16; T++) {
              var P = E + T, S = k[P];
              k[P] = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360;
            }
            var A = this._hash.words, D = u.words, N = x.words, F = o.words, M = d.words, W = l.words, K = a.words, te, J, re, z, H, q, V, pe, xe, Ce;
            q = te = A[0], V = J = A[1], pe = re = A[2], xe = z = A[3], Ce = H = A[4];
            for (var ue, T = 0; T < 80; T += 1)
              ue = te + k[E + F[T]] | 0, T < 16 ? ue += _(J, re, z) + D[0] : T < 32 ? ue += R(J, re, z) + D[1] : T < 48 ? ue += w(J, re, z) + D[2] : T < 64 ? ue += v(J, re, z) + D[3] : ue += g(J, re, z) + D[4], ue = ue | 0, ue = y(ue, W[T]), ue = ue + H | 0, te = H, H = z, z = y(re, 10), re = J, J = ue, ue = q + k[E + M[T]] | 0, T < 16 ? ue += g(V, pe, xe) + N[0] : T < 32 ? ue += v(V, pe, xe) + N[1] : T < 48 ? ue += w(V, pe, xe) + N[2] : T < 64 ? ue += R(V, pe, xe) + N[3] : ue += _(V, pe, xe) + N[4], ue = ue | 0, ue = y(ue, K[T]), ue = ue + Ce | 0, q = Ce, Ce = xe, xe = y(pe, 10), pe = V, V = ue;
            ue = A[1] + re + xe | 0, A[1] = A[2] + z + Ce | 0, A[2] = A[3] + H + q | 0, A[3] = A[4] + te + V | 0, A[4] = A[0] + J + pe | 0, A[0] = ue;
          },
          _doFinalize: function() {
            var k = this._data, E = k.words, T = this._nDataBytes * 8, P = k.sigBytes * 8;
            E[P >>> 5] |= 128 << 24 - P % 32, E[(P + 64 >>> 9 << 4) + 14] = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360, k.sigBytes = (E.length + 1) * 4, this._process();
            for (var S = this._hash, A = S.words, D = 0; D < 5; D++) {
              var N = A[D];
              A[D] = (N << 8 | N >>> 24) & 16711935 | (N << 24 | N >>> 8) & 4278255360;
            }
            return S;
          },
          clone: function() {
            var k = f.clone.call(this);
            return k._hash = this._hash.clone(), k;
          }
        });
        function _(k, E, T) {
          return k ^ E ^ T;
        }
        function R(k, E, T) {
          return k & E | ~k & T;
        }
        function w(k, E, T) {
          return (k | ~E) ^ T;
        }
        function v(k, E, T) {
          return k & T | E & ~T;
        }
        function g(k, E, T) {
          return k ^ (E | ~T);
        }
        function y(k, E) {
          return k << E | k >>> 32 - E;
        }
        i.RIPEMD160 = f._createHelper(p), i.HmacRIPEMD160 = f._createHmacHelper(p);
      }(), r.RIPEMD160;
    });
  }(Qs)), Mr;
}
var zr = {}, eo = {
  get exports() {
    return zr;
  },
  set exports(e) {
    zr = e;
  }
}, k0;
function Jn() {
  return k0 || (k0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ge());
    })(le, function(r) {
      (function() {
        var n = r, i = n.lib, s = i.Base, c = n.enc, f = c.Utf8, h = n.algo;
        h.HMAC = s.extend({
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
          init: function(o, d) {
            o = this._hasher = new o.init(), typeof d == "string" && (d = f.parse(d));
            var l = o.blockSize, a = l * 4;
            d.sigBytes > a && (d = o.finalize(d)), d.clamp();
            for (var u = this._oKey = d.clone(), x = this._iKey = d.clone(), p = u.words, _ = x.words, R = 0; R < l; R++)
              p[R] ^= 1549556828, _[R] ^= 909522486;
            u.sigBytes = x.sigBytes = a, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var o = this._hasher;
            o.reset(), o.update(this._iKey);
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
          update: function(o) {
            return this._hasher.update(o), this;
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
          finalize: function(o) {
            var d = this._hasher, l = d.finalize(o);
            d.reset();
            var a = d.finalize(this._oKey.clone().concat(l));
            return a;
          }
        });
      })();
    });
  }(eo)), zr;
}
var Fr = {}, to = {
  get exports() {
    return Fr;
  },
  set exports(e) {
    Fr = e;
  }
}, S0;
function ro() {
  return S0 || (S0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), Qn(), Jn());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.Base, c = i.WordArray, f = n.algo, h = f.SHA1, o = f.HMAC, d = f.PBKDF2 = s.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA1
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: s.extend({
            keySize: 128 / 32,
            hasher: h,
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
          init: function(l) {
            this.cfg = this.cfg.extend(l);
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
          compute: function(l, a) {
            for (var u = this.cfg, x = o.create(u.hasher, l), p = c.create(), _ = c.create([1]), R = p.words, w = _.words, v = u.keySize, g = u.iterations; R.length < v; ) {
              var y = x.update(a).finalize(_);
              x.reset();
              for (var k = y.words, E = k.length, T = y, P = 1; P < g; P++) {
                T = x.finalize(T), x.reset();
                for (var S = T.words, A = 0; A < E; A++)
                  k[A] ^= S[A];
              }
              p.concat(y), w[0]++;
            }
            return p.sigBytes = v * 4, p;
          }
        });
        n.PBKDF2 = function(l, a, u) {
          return d.create(u).compute(l, a);
        };
      }(), r.PBKDF2;
    });
  }(to)), Fr;
}
var Hr = {}, no = {
  get exports() {
    return Hr;
  },
  set exports(e) {
    Hr = e;
  }
}, C0;
function Ft() {
  return C0 || (C0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), Qn(), Jn());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.Base, c = i.WordArray, f = n.algo, h = f.MD5, o = f.EvpKDF = s.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: s.extend({
            keySize: 128 / 32,
            hasher: h,
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
          init: function(d) {
            this.cfg = this.cfg.extend(d);
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
          compute: function(d, l) {
            for (var a, u = this.cfg, x = u.hasher.create(), p = c.create(), _ = p.words, R = u.keySize, w = u.iterations; _.length < R; ) {
              a && x.update(a), a = x.update(d).finalize(l), x.reset();
              for (var v = 1; v < w; v++)
                a = x.finalize(a), x.reset();
              p.concat(a);
            }
            return p.sigBytes = R * 4, p;
          }
        });
        n.EvpKDF = function(d, l, a) {
          return o.create(a).compute(d, l);
        };
      }(), r.EvpKDF;
    });
  }(no)), Hr;
}
var qr = {}, io = {
  get exports() {
    return qr;
  },
  set exports(e) {
    qr = e;
  }
}, A0;
function We() {
  return A0 || (A0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), Ft());
    })(le, function(r) {
      r.lib.Cipher || function(n) {
        var i = r, s = i.lib, c = s.Base, f = s.WordArray, h = s.BufferedBlockAlgorithm, o = i.enc;
        o.Utf8;
        var d = o.Base64, l = i.algo, a = l.EvpKDF, u = s.Cipher = h.extend({
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
          init: function(S, A, D) {
            this.cfg = this.cfg.extend(D), this._xformMode = S, this._key = A, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            h.reset.call(this), this._doReset();
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
              return typeof A == "string" ? P : k;
            }
            return function(A) {
              return {
                encrypt: function(D, N, F) {
                  return S(N).encrypt(A, D, N, F);
                },
                decrypt: function(D, N, F) {
                  return S(N).decrypt(A, D, N, F);
                }
              };
            };
          }()
        });
        s.StreamCipher = u.extend({
          _doFinalize: function() {
            var S = this._process(!0);
            return S;
          },
          blockSize: 1
        });
        var x = i.mode = {}, p = s.BlockCipherMode = c.extend({
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
        }), _ = x.CBC = function() {
          var S = p.extend();
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
            processBlock: function(D, N) {
              var F = this._cipher, M = F.blockSize;
              A.call(this, D, N, M), F.encryptBlock(D, N), this._prevBlock = D.slice(N, N + M);
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
            processBlock: function(D, N) {
              var F = this._cipher, M = F.blockSize, W = D.slice(N, N + M);
              F.decryptBlock(D, N), A.call(this, D, N, M), this._prevBlock = W;
            }
          });
          function A(D, N, F) {
            var M, W = this._iv;
            W ? (M = W, this._iv = n) : M = this._prevBlock;
            for (var K = 0; K < F; K++)
              D[N + K] ^= M[K];
          }
          return S;
        }(), R = i.pad = {}, w = R.Pkcs7 = {
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
            for (var D = A * 4, N = D - S.sigBytes % D, F = N << 24 | N << 16 | N << 8 | N, M = [], W = 0; W < N; W += 4)
              M.push(F);
            var K = f.create(M, N);
            S.concat(K);
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
        s.BlockCipher = u.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: u.cfg.extend({
            mode: _,
            padding: w
          }),
          reset: function() {
            var S;
            u.reset.call(this);
            var A = this.cfg, D = A.iv, N = A.mode;
            this._xformMode == this._ENC_XFORM_MODE ? S = N.createEncryptor : (S = N.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == S ? this._mode.init(this, D && D.words) : (this._mode = S.call(N, this, D && D.words), this._mode.__creator = S);
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
        var v = s.CipherParams = c.extend({
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
          stringify: function(S) {
            var A, D = S.ciphertext, N = S.salt;
            return N ? A = f.create([1398893684, 1701076831]).concat(N).concat(D) : A = D, A.toString(d);
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
            var A, D = d.parse(S), N = D.words;
            return N[0] == 1398893684 && N[1] == 1701076831 && (A = f.create(N.slice(2, 4)), N.splice(0, 4), D.sigBytes -= 16), v.create({ ciphertext: D, salt: A });
          }
        }, k = s.SerializableCipher = c.extend({
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
          encrypt: function(S, A, D, N) {
            N = this.cfg.extend(N);
            var F = S.createEncryptor(D, N), M = F.finalize(A), W = F.cfg;
            return v.create({
              ciphertext: M,
              key: D,
              iv: W.iv,
              algorithm: S,
              mode: W.mode,
              padding: W.padding,
              blockSize: S.blockSize,
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
          decrypt: function(S, A, D, N) {
            N = this.cfg.extend(N), A = this._parse(A, N.format);
            var F = S.createDecryptor(D, N).finalize(A.ciphertext);
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
        }), E = i.kdf = {}, T = E.OpenSSL = {
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
          execute: function(S, A, D, N) {
            N || (N = f.random(64 / 8));
            var F = a.create({ keySize: A + D }).compute(S, N), M = f.create(F.words.slice(A), D * 4);
            return F.sigBytes = A * 4, v.create({ key: F, iv: M, salt: N });
          }
        }, P = s.PasswordBasedCipher = k.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: k.cfg.extend({
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
          encrypt: function(S, A, D, N) {
            N = this.cfg.extend(N);
            var F = N.kdf.execute(D, S.keySize, S.ivSize);
            N.iv = F.iv;
            var M = k.encrypt.call(this, S, A, F.key, N);
            return M.mixIn(F), M;
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
          decrypt: function(S, A, D, N) {
            N = this.cfg.extend(N), A = this._parse(A, N.format);
            var F = N.kdf.execute(D, S.keySize, S.ivSize, A.salt);
            N.iv = F.iv;
            var M = k.decrypt.call(this, S, A, F.key, N);
            return M;
          }
        });
      }();
    });
  }(io)), qr;
}
var Ur = {}, so = {
  get exports() {
    return Ur;
  },
  set exports(e) {
    Ur = e;
  }
}, B0;
function oo() {
  return B0 || (B0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), We());
    })(le, function(r) {
      return r.mode.CFB = function() {
        var n = r.lib.BlockCipherMode.extend();
        n.Encryptor = n.extend({
          processBlock: function(s, c) {
            var f = this._cipher, h = f.blockSize;
            i.call(this, s, c, h, f), this._prevBlock = s.slice(c, c + h);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(s, c) {
            var f = this._cipher, h = f.blockSize, o = s.slice(c, c + h);
            i.call(this, s, c, h, f), this._prevBlock = o;
          }
        });
        function i(s, c, f, h) {
          var o, d = this._iv;
          d ? (o = d.slice(0), this._iv = void 0) : o = this._prevBlock, h.encryptBlock(o, 0);
          for (var l = 0; l < f; l++)
            s[c + l] ^= o[l];
        }
        return n;
      }(), r.mode.CFB;
    });
  }(so)), Ur;
}
var Wr = {}, ao = {
  get exports() {
    return Wr;
  },
  set exports(e) {
    Wr = e;
  }
}, T0;
function co() {
  return T0 || (T0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), We());
    })(le, function(r) {
      return r.mode.CTR = function() {
        var n = r.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(s, c) {
            var f = this._cipher, h = f.blockSize, o = this._iv, d = this._counter;
            o && (d = this._counter = o.slice(0), this._iv = void 0);
            var l = d.slice(0);
            f.encryptBlock(l, 0), d[h - 1] = d[h - 1] + 1 | 0;
            for (var a = 0; a < h; a++)
              s[c + a] ^= l[a];
          }
        });
        return n.Decryptor = i, n;
      }(), r.mode.CTR;
    });
  }(ao)), Wr;
}
var Vr = {}, fo = {
  get exports() {
    return Vr;
  },
  set exports(e) {
    Vr = e;
  }
}, R0;
function uo() {
  return R0 || (R0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), We());
    })(le, function(r) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return r.mode.CTRGladman = function() {
        var n = r.lib.BlockCipherMode.extend();
        function i(f) {
          if ((f >> 24 & 255) === 255) {
            var h = f >> 16 & 255, o = f >> 8 & 255, d = f & 255;
            h === 255 ? (h = 0, o === 255 ? (o = 0, d === 255 ? d = 0 : ++d) : ++o) : ++h, f = 0, f += h << 16, f += o << 8, f += d;
          } else
            f += 1 << 24;
          return f;
        }
        function s(f) {
          return (f[0] = i(f[0])) === 0 && (f[1] = i(f[1])), f;
        }
        var c = n.Encryptor = n.extend({
          processBlock: function(f, h) {
            var o = this._cipher, d = o.blockSize, l = this._iv, a = this._counter;
            l && (a = this._counter = l.slice(0), this._iv = void 0), s(a);
            var u = a.slice(0);
            o.encryptBlock(u, 0);
            for (var x = 0; x < d; x++)
              f[h + x] ^= u[x];
          }
        });
        return n.Decryptor = c, n;
      }(), r.mode.CTRGladman;
    });
  }(fo)), Vr;
}
var Yr = {}, lo = {
  get exports() {
    return Yr;
  },
  set exports(e) {
    Yr = e;
  }
}, L0;
function ho() {
  return L0 || (L0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), We());
    })(le, function(r) {
      return r.mode.OFB = function() {
        var n = r.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(s, c) {
            var f = this._cipher, h = f.blockSize, o = this._iv, d = this._keystream;
            o && (d = this._keystream = o.slice(0), this._iv = void 0), f.encryptBlock(d, 0);
            for (var l = 0; l < h; l++)
              s[c + l] ^= d[l];
          }
        });
        return n.Decryptor = i, n;
      }(), r.mode.OFB;
    });
  }(lo)), Yr;
}
var Kr = {}, po = {
  get exports() {
    return Kr;
  },
  set exports(e) {
    Kr = e;
  }
}, O0;
function ui() {
  return O0 || (O0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), We());
    })(le, function(r) {
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
  }(po)), Kr;
}
var Gr = {}, vo = {
  get exports() {
    return Gr;
  },
  set exports(e) {
    Gr = e;
  }
}, N0;
function xo() {
  return N0 || (N0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), We());
    })(le, function(r) {
      return r.pad.AnsiX923 = {
        pad: function(n, i) {
          var s = n.sigBytes, c = i * 4, f = c - s % c, h = s + f - 1;
          n.clamp(), n.words[h >>> 2] |= f << 24 - h % 4 * 8, n.sigBytes += f;
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, r.pad.Ansix923;
    });
  }(vo)), Gr;
}
var Zr = {}, bo = {
  get exports() {
    return Zr;
  },
  set exports(e) {
    Zr = e;
  }
}, D0;
function go() {
  return D0 || (D0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), We());
    })(le, function(r) {
      return r.pad.Iso10126 = {
        pad: function(n, i) {
          var s = i * 4, c = s - n.sigBytes % s;
          n.concat(r.lib.WordArray.random(c - 1)).concat(r.lib.WordArray.create([c << 24], 1));
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, r.pad.Iso10126;
    });
  }(bo)), Zr;
}
var jr = {}, yo = {
  get exports() {
    return jr;
  },
  set exports(e) {
    jr = e;
  }
}, I0;
function mo() {
  return I0 || (I0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), We());
    })(le, function(r) {
      return r.pad.Iso97971 = {
        pad: function(n, i) {
          n.concat(r.lib.WordArray.create([2147483648], 1)), r.pad.ZeroPadding.pad(n, i);
        },
        unpad: function(n) {
          r.pad.ZeroPadding.unpad(n), n.sigBytes--;
        }
      }, r.pad.Iso97971;
    });
  }(yo)), jr;
}
var Xr = {}, _o = {
  get exports() {
    return Xr;
  },
  set exports(e) {
    Xr = e;
  }
}, P0;
function wo() {
  return P0 || (P0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), We());
    })(le, function(r) {
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
  }(_o)), Xr;
}
var Qr = {}, Eo = {
  get exports() {
    return Qr;
  },
  set exports(e) {
    Qr = e;
  }
}, $0;
function ko() {
  return $0 || ($0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), We());
    })(le, function(r) {
      return r.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, r.pad.NoPadding;
    });
  }(Eo)), Qr;
}
var Jr = {}, So = {
  get exports() {
    return Jr;
  },
  set exports(e) {
    Jr = e;
  }
}, M0;
function Co() {
  return M0 || (M0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), We());
    })(le, function(r) {
      return function(n) {
        var i = r, s = i.lib, c = s.CipherParams, f = i.enc, h = f.Hex, o = i.format;
        o.Hex = {
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
          stringify: function(d) {
            return d.ciphertext.toString(h);
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
          parse: function(d) {
            var l = h.parse(d);
            return c.create({ ciphertext: l });
          }
        };
      }(), r.format.Hex;
    });
  }(So)), Jr;
}
var en = {}, Ao = {
  get exports() {
    return en;
  },
  set exports(e) {
    en = e;
  }
}, z0;
function li() {
  return z0 || (z0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), Mt(), zt(), Ft(), We());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.BlockCipher, c = n.algo, f = [], h = [], o = [], d = [], l = [], a = [], u = [], x = [], p = [], _ = [];
        (function() {
          for (var v = [], g = 0; g < 256; g++)
            g < 128 ? v[g] = g << 1 : v[g] = g << 1 ^ 283;
          for (var y = 0, k = 0, g = 0; g < 256; g++) {
            var E = k ^ k << 1 ^ k << 2 ^ k << 3 ^ k << 4;
            E = E >>> 8 ^ E & 255 ^ 99, f[y] = E, h[E] = y;
            var T = v[y], P = v[T], S = v[P], A = v[E] * 257 ^ E * 16843008;
            o[y] = A << 24 | A >>> 8, d[y] = A << 16 | A >>> 16, l[y] = A << 8 | A >>> 24, a[y] = A;
            var A = S * 16843009 ^ P * 65537 ^ T * 257 ^ y * 16843008;
            u[E] = A << 24 | A >>> 8, x[E] = A << 16 | A >>> 16, p[E] = A << 8 | A >>> 24, _[E] = A, y ? (y = T ^ v[v[v[S ^ T]]], k ^= v[v[k]]) : y = k = 1;
          }
        })();
        var R = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], w = c.AES = s.extend({
          _doReset: function() {
            var v;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var g = this._keyPriorReset = this._key, y = g.words, k = g.sigBytes / 4, E = this._nRounds = k + 6, T = (E + 1) * 4, P = this._keySchedule = [], S = 0; S < T; S++)
                S < k ? P[S] = y[S] : (v = P[S - 1], S % k ? k > 6 && S % k == 4 && (v = f[v >>> 24] << 24 | f[v >>> 16 & 255] << 16 | f[v >>> 8 & 255] << 8 | f[v & 255]) : (v = v << 8 | v >>> 24, v = f[v >>> 24] << 24 | f[v >>> 16 & 255] << 16 | f[v >>> 8 & 255] << 8 | f[v & 255], v ^= R[S / k | 0] << 24), P[S] = P[S - k] ^ v);
              for (var A = this._invKeySchedule = [], D = 0; D < T; D++) {
                var S = T - D;
                if (D % 4)
                  var v = P[S];
                else
                  var v = P[S - 4];
                D < 4 || S <= 4 ? A[D] = v : A[D] = u[f[v >>> 24]] ^ x[f[v >>> 16 & 255]] ^ p[f[v >>> 8 & 255]] ^ _[f[v & 255]];
              }
            }
          },
          encryptBlock: function(v, g) {
            this._doCryptBlock(v, g, this._keySchedule, o, d, l, a, f);
          },
          decryptBlock: function(v, g) {
            var y = v[g + 1];
            v[g + 1] = v[g + 3], v[g + 3] = y, this._doCryptBlock(v, g, this._invKeySchedule, u, x, p, _, h);
            var y = v[g + 1];
            v[g + 1] = v[g + 3], v[g + 3] = y;
          },
          _doCryptBlock: function(v, g, y, k, E, T, P, S) {
            for (var A = this._nRounds, D = v[g] ^ y[0], N = v[g + 1] ^ y[1], F = v[g + 2] ^ y[2], M = v[g + 3] ^ y[3], W = 4, K = 1; K < A; K++) {
              var te = k[D >>> 24] ^ E[N >>> 16 & 255] ^ T[F >>> 8 & 255] ^ P[M & 255] ^ y[W++], J = k[N >>> 24] ^ E[F >>> 16 & 255] ^ T[M >>> 8 & 255] ^ P[D & 255] ^ y[W++], re = k[F >>> 24] ^ E[M >>> 16 & 255] ^ T[D >>> 8 & 255] ^ P[N & 255] ^ y[W++], z = k[M >>> 24] ^ E[D >>> 16 & 255] ^ T[N >>> 8 & 255] ^ P[F & 255] ^ y[W++];
              D = te, N = J, F = re, M = z;
            }
            var te = (S[D >>> 24] << 24 | S[N >>> 16 & 255] << 16 | S[F >>> 8 & 255] << 8 | S[M & 255]) ^ y[W++], J = (S[N >>> 24] << 24 | S[F >>> 16 & 255] << 16 | S[M >>> 8 & 255] << 8 | S[D & 255]) ^ y[W++], re = (S[F >>> 24] << 24 | S[M >>> 16 & 255] << 16 | S[D >>> 8 & 255] << 8 | S[N & 255]) ^ y[W++], z = (S[M >>> 24] << 24 | S[D >>> 16 & 255] << 16 | S[N >>> 8 & 255] << 8 | S[F & 255]) ^ y[W++];
            v[g] = te, v[g + 1] = J, v[g + 2] = re, v[g + 3] = z;
          },
          keySize: 256 / 32
        });
        n.AES = s._createHelper(w);
      }(), r.AES;
    });
  }(Ao)), en;
}
var tn = {}, Bo = {
  get exports() {
    return tn;
  },
  set exports(e) {
    tn = e;
  }
}, F0;
function To() {
  return F0 || (F0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), Mt(), zt(), Ft(), We());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.WordArray, c = i.BlockCipher, f = n.algo, h = [
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
        ], o = [
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
        ], d = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], l = [
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
        ], u = f.DES = c.extend({
          _doReset: function() {
            for (var R = this._key, w = R.words, v = [], g = 0; g < 56; g++) {
              var y = h[g] - 1;
              v[g] = w[y >>> 5] >>> 31 - y % 32 & 1;
            }
            for (var k = this._subKeys = [], E = 0; E < 16; E++) {
              for (var T = k[E] = [], P = d[E], g = 0; g < 24; g++)
                T[g / 6 | 0] |= v[(o[g] - 1 + P) % 28] << 31 - g % 6, T[4 + (g / 6 | 0)] |= v[28 + (o[g + 24] - 1 + P) % 28] << 31 - g % 6;
              T[0] = T[0] << 1 | T[0] >>> 31;
              for (var g = 1; g < 7; g++)
                T[g] = T[g] >>> (g - 1) * 4 + 3;
              T[7] = T[7] << 5 | T[7] >>> 27;
            }
            for (var S = this._invSubKeys = [], g = 0; g < 16; g++)
              S[g] = k[15 - g];
          },
          encryptBlock: function(R, w) {
            this._doCryptBlock(R, w, this._subKeys);
          },
          decryptBlock: function(R, w) {
            this._doCryptBlock(R, w, this._invSubKeys);
          },
          _doCryptBlock: function(R, w, v) {
            this._lBlock = R[w], this._rBlock = R[w + 1], x.call(this, 4, 252645135), x.call(this, 16, 65535), p.call(this, 2, 858993459), p.call(this, 8, 16711935), x.call(this, 1, 1431655765);
            for (var g = 0; g < 16; g++) {
              for (var y = v[g], k = this._lBlock, E = this._rBlock, T = 0, P = 0; P < 8; P++)
                T |= l[P][((E ^ y[P]) & a[P]) >>> 0];
              this._lBlock = E, this._rBlock = k ^ T;
            }
            var S = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = S, x.call(this, 1, 1431655765), p.call(this, 8, 16711935), p.call(this, 2, 858993459), x.call(this, 16, 65535), x.call(this, 4, 252645135), R[w] = this._lBlock, R[w + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function x(R, w) {
          var v = (this._lBlock >>> R ^ this._rBlock) & w;
          this._rBlock ^= v, this._lBlock ^= v << R;
        }
        function p(R, w) {
          var v = (this._rBlock >>> R ^ this._lBlock) & w;
          this._lBlock ^= v, this._rBlock ^= v << R;
        }
        n.DES = c._createHelper(u);
        var _ = f.TripleDES = c.extend({
          _doReset: function() {
            var R = this._key, w = R.words;
            if (w.length !== 2 && w.length !== 4 && w.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var v = w.slice(0, 2), g = w.length < 4 ? w.slice(0, 2) : w.slice(2, 4), y = w.length < 6 ? w.slice(0, 2) : w.slice(4, 6);
            this._des1 = u.createEncryptor(s.create(v)), this._des2 = u.createEncryptor(s.create(g)), this._des3 = u.createEncryptor(s.create(y));
          },
          encryptBlock: function(R, w) {
            this._des1.encryptBlock(R, w), this._des2.decryptBlock(R, w), this._des3.encryptBlock(R, w);
          },
          decryptBlock: function(R, w) {
            this._des3.decryptBlock(R, w), this._des2.encryptBlock(R, w), this._des1.decryptBlock(R, w);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        n.TripleDES = c._createHelper(_);
      }(), r.TripleDES;
    });
  }(Bo)), tn;
}
var rn = {}, Ro = {
  get exports() {
    return rn;
  },
  set exports(e) {
    rn = e;
  }
}, H0;
function Lo() {
  return H0 || (H0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), Mt(), zt(), Ft(), We());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.StreamCipher, c = n.algo, f = c.RC4 = s.extend({
          _doReset: function() {
            for (var d = this._key, l = d.words, a = d.sigBytes, u = this._S = [], x = 0; x < 256; x++)
              u[x] = x;
            for (var x = 0, p = 0; x < 256; x++) {
              var _ = x % a, R = l[_ >>> 2] >>> 24 - _ % 4 * 8 & 255;
              p = (p + u[x] + R) % 256;
              var w = u[x];
              u[x] = u[p], u[p] = w;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(d, l) {
            d[l] ^= h.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function h() {
          for (var d = this._S, l = this._i, a = this._j, u = 0, x = 0; x < 4; x++) {
            l = (l + 1) % 256, a = (a + d[l]) % 256;
            var p = d[l];
            d[l] = d[a], d[a] = p, u |= d[(d[l] + d[a]) % 256] << 24 - x * 8;
          }
          return this._i = l, this._j = a, u;
        }
        n.RC4 = s._createHelper(f);
        var o = c.RC4Drop = f.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: f.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            f._doReset.call(this);
            for (var d = this.cfg.drop; d > 0; d--)
              h.call(this);
          }
        });
        n.RC4Drop = s._createHelper(o);
      }(), r.RC4;
    });
  }(Ro)), rn;
}
var nn = {}, Oo = {
  get exports() {
    return nn;
  },
  set exports(e) {
    nn = e;
  }
}, q0;
function No() {
  return q0 || (q0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), Mt(), zt(), Ft(), We());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.StreamCipher, c = n.algo, f = [], h = [], o = [], d = c.Rabbit = s.extend({
          _doReset: function() {
            for (var a = this._key.words, u = this.cfg.iv, x = 0; x < 4; x++)
              a[x] = (a[x] << 8 | a[x] >>> 24) & 16711935 | (a[x] << 24 | a[x] >>> 8) & 4278255360;
            var p = this._X = [
              a[0],
              a[3] << 16 | a[2] >>> 16,
              a[1],
              a[0] << 16 | a[3] >>> 16,
              a[2],
              a[1] << 16 | a[0] >>> 16,
              a[3],
              a[2] << 16 | a[1] >>> 16
            ], _ = this._C = [
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
              l.call(this);
            for (var x = 0; x < 8; x++)
              _[x] ^= p[x + 4 & 7];
            if (u) {
              var R = u.words, w = R[0], v = R[1], g = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, y = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360, k = g >>> 16 | y & 4294901760, E = y << 16 | g & 65535;
              _[0] ^= g, _[1] ^= k, _[2] ^= y, _[3] ^= E, _[4] ^= g, _[5] ^= k, _[6] ^= y, _[7] ^= E;
              for (var x = 0; x < 4; x++)
                l.call(this);
            }
          },
          _doProcessBlock: function(a, u) {
            var x = this._X;
            l.call(this), f[0] = x[0] ^ x[5] >>> 16 ^ x[3] << 16, f[1] = x[2] ^ x[7] >>> 16 ^ x[5] << 16, f[2] = x[4] ^ x[1] >>> 16 ^ x[7] << 16, f[3] = x[6] ^ x[3] >>> 16 ^ x[1] << 16;
            for (var p = 0; p < 4; p++)
              f[p] = (f[p] << 8 | f[p] >>> 24) & 16711935 | (f[p] << 24 | f[p] >>> 8) & 4278255360, a[u + p] ^= f[p];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function l() {
          for (var a = this._X, u = this._C, x = 0; x < 8; x++)
            h[x] = u[x];
          u[0] = u[0] + 1295307597 + this._b | 0, u[1] = u[1] + 3545052371 + (u[0] >>> 0 < h[0] >>> 0 ? 1 : 0) | 0, u[2] = u[2] + 886263092 + (u[1] >>> 0 < h[1] >>> 0 ? 1 : 0) | 0, u[3] = u[3] + 1295307597 + (u[2] >>> 0 < h[2] >>> 0 ? 1 : 0) | 0, u[4] = u[4] + 3545052371 + (u[3] >>> 0 < h[3] >>> 0 ? 1 : 0) | 0, u[5] = u[5] + 886263092 + (u[4] >>> 0 < h[4] >>> 0 ? 1 : 0) | 0, u[6] = u[6] + 1295307597 + (u[5] >>> 0 < h[5] >>> 0 ? 1 : 0) | 0, u[7] = u[7] + 3545052371 + (u[6] >>> 0 < h[6] >>> 0 ? 1 : 0) | 0, this._b = u[7] >>> 0 < h[7] >>> 0 ? 1 : 0;
          for (var x = 0; x < 8; x++) {
            var p = a[x] + u[x], _ = p & 65535, R = p >>> 16, w = ((_ * _ >>> 17) + _ * R >>> 15) + R * R, v = ((p & 4294901760) * p | 0) + ((p & 65535) * p | 0);
            o[x] = w ^ v;
          }
          a[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0, a[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0, a[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0, a[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0, a[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0, a[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0, a[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0, a[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0;
        }
        n.Rabbit = s._createHelper(d);
      }(), r.Rabbit;
    });
  }(Oo)), nn;
}
var sn = {}, Do = {
  get exports() {
    return sn;
  },
  set exports(e) {
    sn = e;
  }
}, U0;
function Io() {
  return U0 || (U0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ge(), Mt(), zt(), Ft(), We());
    })(le, function(r) {
      return function() {
        var n = r, i = n.lib, s = i.StreamCipher, c = n.algo, f = [], h = [], o = [], d = c.RabbitLegacy = s.extend({
          _doReset: function() {
            var a = this._key.words, u = this.cfg.iv, x = this._X = [
              a[0],
              a[3] << 16 | a[2] >>> 16,
              a[1],
              a[0] << 16 | a[3] >>> 16,
              a[2],
              a[1] << 16 | a[0] >>> 16,
              a[3],
              a[2] << 16 | a[1] >>> 16
            ], p = this._C = [
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
            for (var _ = 0; _ < 4; _++)
              l.call(this);
            for (var _ = 0; _ < 8; _++)
              p[_] ^= x[_ + 4 & 7];
            if (u) {
              var R = u.words, w = R[0], v = R[1], g = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, y = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360, k = g >>> 16 | y & 4294901760, E = y << 16 | g & 65535;
              p[0] ^= g, p[1] ^= k, p[2] ^= y, p[3] ^= E, p[4] ^= g, p[5] ^= k, p[6] ^= y, p[7] ^= E;
              for (var _ = 0; _ < 4; _++)
                l.call(this);
            }
          },
          _doProcessBlock: function(a, u) {
            var x = this._X;
            l.call(this), f[0] = x[0] ^ x[5] >>> 16 ^ x[3] << 16, f[1] = x[2] ^ x[7] >>> 16 ^ x[5] << 16, f[2] = x[4] ^ x[1] >>> 16 ^ x[7] << 16, f[3] = x[6] ^ x[3] >>> 16 ^ x[1] << 16;
            for (var p = 0; p < 4; p++)
              f[p] = (f[p] << 8 | f[p] >>> 24) & 16711935 | (f[p] << 24 | f[p] >>> 8) & 4278255360, a[u + p] ^= f[p];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function l() {
          for (var a = this._X, u = this._C, x = 0; x < 8; x++)
            h[x] = u[x];
          u[0] = u[0] + 1295307597 + this._b | 0, u[1] = u[1] + 3545052371 + (u[0] >>> 0 < h[0] >>> 0 ? 1 : 0) | 0, u[2] = u[2] + 886263092 + (u[1] >>> 0 < h[1] >>> 0 ? 1 : 0) | 0, u[3] = u[3] + 1295307597 + (u[2] >>> 0 < h[2] >>> 0 ? 1 : 0) | 0, u[4] = u[4] + 3545052371 + (u[3] >>> 0 < h[3] >>> 0 ? 1 : 0) | 0, u[5] = u[5] + 886263092 + (u[4] >>> 0 < h[4] >>> 0 ? 1 : 0) | 0, u[6] = u[6] + 1295307597 + (u[5] >>> 0 < h[5] >>> 0 ? 1 : 0) | 0, u[7] = u[7] + 3545052371 + (u[6] >>> 0 < h[6] >>> 0 ? 1 : 0) | 0, this._b = u[7] >>> 0 < h[7] >>> 0 ? 1 : 0;
          for (var x = 0; x < 8; x++) {
            var p = a[x] + u[x], _ = p & 65535, R = p >>> 16, w = ((_ * _ >>> 17) + _ * R >>> 15) + R * R, v = ((p & 4294901760) * p | 0) + ((p & 65535) * p | 0);
            o[x] = w ^ v;
          }
          a[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0, a[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0, a[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0, a[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0, a[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0, a[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0, a[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0, a[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0;
        }
        n.RabbitLegacy = s._createHelper(d);
      }(), r.RabbitLegacy;
    });
  }(Do)), sn;
}
(function(e, t) {
  (function(r, n, i) {
    e.exports = n(ge(), dn(), Ps(), Ms(), Mt(), Hs(), zt(), Qn(), ci(), Ys(), fi(), Zs(), Xs(), Js(), Jn(), ro(), Ft(), We(), oo(), co(), uo(), ho(), ui(), xo(), go(), mo(), wo(), ko(), Co(), li(), To(), Lo(), No(), Io());
  })(le, function(r) {
    return r;
  });
})(Ts);
var W0 = {}, Po = {
  get exports() {
    return W0;
  },
  set exports(e) {
    W0 = e;
  }
};
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(le, function() {
    var r = 1e3, n = 6e4, i = 36e5, s = "millisecond", c = "second", f = "minute", h = "hour", o = "day", d = "week", l = "month", a = "quarter", u = "year", x = "date", p = "Invalid Date", _ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, R = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, w = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
      var F = ["th", "st", "nd", "rd"], M = N % 100;
      return "[" + N + (F[(M - 20) % 10] || F[M] || F[0]) + "]";
    } }, v = function(N, F, M) {
      var W = String(N);
      return !W || W.length >= F ? N : "" + Array(F + 1 - W.length).join(M) + N;
    }, g = { s: v, z: function(N) {
      var F = -N.utcOffset(), M = Math.abs(F), W = Math.floor(M / 60), K = M % 60;
      return (F <= 0 ? "+" : "-") + v(W, 2, "0") + ":" + v(K, 2, "0");
    }, m: function N(F, M) {
      if (F.date() < M.date())
        return -N(M, F);
      var W = 12 * (M.year() - F.year()) + (M.month() - F.month()), K = F.clone().add(W, l), te = M - K < 0, J = F.clone().add(W + (te ? -1 : 1), l);
      return +(-(W + (M - K) / (te ? K - J : J - K)) || 0);
    }, a: function(N) {
      return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
    }, p: function(N) {
      return { M: l, y: u, w: d, d: o, D: x, h, m: f, s: c, ms: s, Q: a }[N] || String(N || "").toLowerCase().replace(/s$/, "");
    }, u: function(N) {
      return N === void 0;
    } }, y = "en", k = {};
    k[y] = w;
    var E = function(N) {
      return N instanceof A;
    }, T = function N(F, M, W) {
      var K;
      if (!F)
        return y;
      if (typeof F == "string") {
        var te = F.toLowerCase();
        k[te] && (K = te), M && (k[te] = M, K = te);
        var J = F.split("-");
        if (!K && J.length > 1)
          return N(J[0]);
      } else {
        var re = F.name;
        k[re] = F, K = re;
      }
      return !W && K && (y = K), K || !W && y;
    }, P = function(N, F) {
      if (E(N))
        return N.clone();
      var M = typeof F == "object" ? F : {};
      return M.date = N, M.args = arguments, new A(M);
    }, S = g;
    S.l = T, S.i = E, S.w = function(N, F) {
      return P(N, { locale: F.$L, utc: F.$u, x: F.$x, $offset: F.$offset });
    };
    var A = function() {
      function N(M) {
        this.$L = T(M.locale, null, !0), this.parse(M);
      }
      var F = N.prototype;
      return F.parse = function(M) {
        this.$d = function(W) {
          var K = W.date, te = W.utc;
          if (K === null)
            return /* @__PURE__ */ new Date(NaN);
          if (S.u(K))
            return /* @__PURE__ */ new Date();
          if (K instanceof Date)
            return new Date(K);
          if (typeof K == "string" && !/Z$/i.test(K)) {
            var J = K.match(_);
            if (J) {
              var re = J[2] - 1 || 0, z = (J[7] || "0").substring(0, 3);
              return te ? new Date(Date.UTC(J[1], re, J[3] || 1, J[4] || 0, J[5] || 0, J[6] || 0, z)) : new Date(J[1], re, J[3] || 1, J[4] || 0, J[5] || 0, J[6] || 0, z);
            }
          }
          return new Date(K);
        }(M), this.$x = M.x || {}, this.init();
      }, F.init = function() {
        var M = this.$d;
        this.$y = M.getFullYear(), this.$M = M.getMonth(), this.$D = M.getDate(), this.$W = M.getDay(), this.$H = M.getHours(), this.$m = M.getMinutes(), this.$s = M.getSeconds(), this.$ms = M.getMilliseconds();
      }, F.$utils = function() {
        return S;
      }, F.isValid = function() {
        return this.$d.toString() !== p;
      }, F.isSame = function(M, W) {
        var K = P(M);
        return this.startOf(W) <= K && K <= this.endOf(W);
      }, F.isAfter = function(M, W) {
        return P(M) < this.startOf(W);
      }, F.isBefore = function(M, W) {
        return this.endOf(W) < P(M);
      }, F.$g = function(M, W, K) {
        return S.u(M) ? this[W] : this.set(K, M);
      }, F.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, F.valueOf = function() {
        return this.$d.getTime();
      }, F.startOf = function(M, W) {
        var K = this, te = !!S.u(W) || W, J = S.p(M), re = function(ue, Ae) {
          var Me = S.w(K.$u ? Date.UTC(K.$y, Ae, ue) : new Date(K.$y, Ae, ue), K);
          return te ? Me : Me.endOf(o);
        }, z = function(ue, Ae) {
          return S.w(K.toDate()[ue].apply(K.toDate("s"), (te ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Ae)), K);
        }, H = this.$W, q = this.$M, V = this.$D, pe = "set" + (this.$u ? "UTC" : "");
        switch (J) {
          case u:
            return te ? re(1, 0) : re(31, 11);
          case l:
            return te ? re(1, q) : re(0, q + 1);
          case d:
            var xe = this.$locale().weekStart || 0, Ce = (H < xe ? H + 7 : H) - xe;
            return re(te ? V - Ce : V + (6 - Ce), q);
          case o:
          case x:
            return z(pe + "Hours", 0);
          case h:
            return z(pe + "Minutes", 1);
          case f:
            return z(pe + "Seconds", 2);
          case c:
            return z(pe + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, F.endOf = function(M) {
        return this.startOf(M, !1);
      }, F.$set = function(M, W) {
        var K, te = S.p(M), J = "set" + (this.$u ? "UTC" : ""), re = (K = {}, K[o] = J + "Date", K[x] = J + "Date", K[l] = J + "Month", K[u] = J + "FullYear", K[h] = J + "Hours", K[f] = J + "Minutes", K[c] = J + "Seconds", K[s] = J + "Milliseconds", K)[te], z = te === o ? this.$D + (W - this.$W) : W;
        if (te === l || te === u) {
          var H = this.clone().set(x, 1);
          H.$d[re](z), H.init(), this.$d = H.set(x, Math.min(this.$D, H.daysInMonth())).$d;
        } else
          re && this.$d[re](z);
        return this.init(), this;
      }, F.set = function(M, W) {
        return this.clone().$set(M, W);
      }, F.get = function(M) {
        return this[S.p(M)]();
      }, F.add = function(M, W) {
        var K, te = this;
        M = Number(M);
        var J = S.p(W), re = function(q) {
          var V = P(te);
          return S.w(V.date(V.date() + Math.round(q * M)), te);
        };
        if (J === l)
          return this.set(l, this.$M + M);
        if (J === u)
          return this.set(u, this.$y + M);
        if (J === o)
          return re(1);
        if (J === d)
          return re(7);
        var z = (K = {}, K[f] = n, K[h] = i, K[c] = r, K)[J] || 1, H = this.$d.getTime() + M * z;
        return S.w(H, this);
      }, F.subtract = function(M, W) {
        return this.add(-1 * M, W);
      }, F.format = function(M) {
        var W = this, K = this.$locale();
        if (!this.isValid())
          return K.invalidDate || p;
        var te = M || "YYYY-MM-DDTHH:mm:ssZ", J = S.z(this), re = this.$H, z = this.$m, H = this.$M, q = K.weekdays, V = K.months, pe = function(Ae, Me, at, je) {
          return Ae && (Ae[Me] || Ae(W, te)) || at[Me].slice(0, je);
        }, xe = function(Ae) {
          return S.s(re % 12 || 12, Ae, "0");
        }, Ce = K.meridiem || function(Ae, Me, at) {
          var je = Ae < 12 ? "AM" : "PM";
          return at ? je.toLowerCase() : je;
        }, ue = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: H + 1, MM: S.s(H + 1, 2, "0"), MMM: pe(K.monthsShort, H, V, 3), MMMM: pe(V, H), D: this.$D, DD: S.s(this.$D, 2, "0"), d: String(this.$W), dd: pe(K.weekdaysMin, this.$W, q, 2), ddd: pe(K.weekdaysShort, this.$W, q, 3), dddd: q[this.$W], H: String(re), HH: S.s(re, 2, "0"), h: xe(1), hh: xe(2), a: Ce(re, z, !0), A: Ce(re, z, !1), m: String(z), mm: S.s(z, 2, "0"), s: String(this.$s), ss: S.s(this.$s, 2, "0"), SSS: S.s(this.$ms, 3, "0"), Z: J };
        return te.replace(R, function(Ae, Me) {
          return Me || ue[Ae] || J.replace(":", "");
        });
      }, F.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, F.diff = function(M, W, K) {
        var te, J = S.p(W), re = P(M), z = (re.utcOffset() - this.utcOffset()) * n, H = this - re, q = S.m(this, re);
        return q = (te = {}, te[u] = q / 12, te[l] = q, te[a] = q / 3, te[d] = (H - z) / 6048e5, te[o] = (H - z) / 864e5, te[h] = H / i, te[f] = H / n, te[c] = H / r, te)[J] || H, K ? q : S.a(q);
      }, F.daysInMonth = function() {
        return this.endOf(l).$D;
      }, F.$locale = function() {
        return k[this.$L];
      }, F.locale = function(M, W) {
        if (!M)
          return this.$L;
        var K = this.clone(), te = T(M, W, !0);
        return te && (K.$L = te), K;
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
      }, N;
    }(), D = A.prototype;
    return P.prototype = D, [["$ms", s], ["$s", c], ["$m", f], ["$H", h], ["$W", o], ["$M", l], ["$y", u], ["$D", x]].forEach(function(N) {
      D[N[1]] = function(F) {
        return this.$g(F, N[0], N[1]);
      };
    }), P.extend = function(N, F) {
      return N.$i || (N(F, A, P), N.$i = !0), P;
    }, P.locale = T, P.isDayjs = E, P.unix = function(N) {
      return P(1e3 * N);
    }, P.en = k[y], P.Ls = k, P.p = {}, P;
  });
})(Po);
var di = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, r) {
    var n = -1;
    return t.some(function(i, s) {
      return i[0] === r ? (n = s, !0) : !1;
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
        for (var i = 0, s = this.__entries__; i < s.length; i++) {
          var c = s[i];
          r.call(n, c[1], c[0]);
        }
      }, t;
    }()
  );
}(), Pn = typeof window < "u" && typeof document < "u" && window.document === document, on = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), $o = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(on) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Mo = 2;
function zo(e, t) {
  var r = !1, n = !1, i = 0;
  function s() {
    r && (r = !1, e()), n && f();
  }
  function c() {
    $o(s);
  }
  function f() {
    var h = Date.now();
    if (r) {
      if (h - i < Mo)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(c, t);
    i = h;
  }
  return f;
}
var Fo = 20, Ho = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], qo = typeof MutationObserver < "u", Uo = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = zo(this.refresh.bind(this), Fo);
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
      !Pn || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), qo ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Pn || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, i = Ho.some(function(s) {
        return !!~n.indexOf(s);
      });
      i && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), hi = function(e, t) {
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
}, Yt = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || on;
}, pi = hn(0, 0, 0, 0);
function an(e) {
  return parseFloat(e) || 0;
}
function V0(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, i) {
    var s = e["border-" + i + "-width"];
    return n + an(s);
  }, 0);
}
function Wo(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, i = t; n < i.length; n++) {
    var s = i[n], c = e["padding-" + s];
    r[s] = an(c);
  }
  return r;
}
function Vo(e) {
  var t = e.getBBox();
  return hn(0, 0, t.width, t.height);
}
function Yo(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return pi;
  var n = Yt(e).getComputedStyle(e), i = Wo(n), s = i.left + i.right, c = i.top + i.bottom, f = an(n.width), h = an(n.height);
  if (n.boxSizing === "border-box" && (Math.round(f + s) !== t && (f -= V0(n, "left", "right") + s), Math.round(h + c) !== r && (h -= V0(n, "top", "bottom") + c)), !Go(e)) {
    var o = Math.round(f + s) - t, d = Math.round(h + c) - r;
    Math.abs(o) !== 1 && (f -= o), Math.abs(d) !== 1 && (h -= d);
  }
  return hn(i.left, i.top, f, h);
}
var Ko = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Yt(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Yt(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Go(e) {
  return e === Yt(e).document.documentElement;
}
function Zo(e) {
  return Pn ? Ko(e) ? Vo(e) : Yo(e) : pi;
}
function jo(e) {
  var t = e.x, r = e.y, n = e.width, i = e.height, s = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, c = Object.create(s.prototype);
  return hi(c, {
    x: t,
    y: r,
    width: n,
    height: i,
    top: r,
    right: t + n,
    bottom: i + r,
    left: t
  }), c;
}
function hn(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var Xo = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = hn(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Zo(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Qo = (
  /** @class */
  function() {
    function e(t, r) {
      var n = jo(r);
      hi(this, { target: t, contentRect: n });
    }
    return e;
  }()
), Jo = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new di(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Yt(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new Xo(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Yt(t).Element))
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
          return new Qo(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), vi = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new di(), xi = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = Uo.getInstance(), n = new Jo(t, r, this);
      vi.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  xi.prototype[e] = function() {
    var t;
    return (t = vi.get(this))[e].apply(t, arguments);
  };
});
(function() {
  return typeof on.ResizeObserver < "u" ? on.ResizeObserver : xi;
})();
li();
Mt();
var Y0 = {}, ea = {
  get exports() {
    return Y0;
  },
  set exports(e) {
    Y0 = e;
  }
};
(function(e, t) {
  (function(r, n) {
    e.exports = n(ge());
  })(le, function(r) {
    return r.enc.Utf8;
  });
})(ea);
zt();
ui();
var K0 = {}, ta = {
  get exports() {
    return K0;
  },
  set exports(e) {
    K0 = e;
  }
};
(function(e, t) {
  (function(r, n, i) {
    e.exports = n(ge(), We());
  })(le, function(r) {
    return r.pad.Pkcs7;
  });
})(ta);
function ra(e) {
  var t = [], r = "";
  for (r in e)
    t.push(r);
  return t;
}
function $n(e) {
  return e = JSON.stringify(e), !(typeof e != "string" || !/^\{[\s\S]*\}$/.test(e));
}
function na(e) {
  return e instanceof Array;
}
function ia(e) {
  return Array.prototype.slice.call(e);
}
function Kt() {
  if (!(this instanceof Kt))
    return new Kt();
}
Kt.prototype = {
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
    if ($n(e))
      for (const n in e)
        this.set(n, e[n], t, r);
    else if (typeof e == "string") {
      const n = $n(r) ? r : { expires: r }, i = n.path !== void 0 ? `;path=${n.path};path=/` : ";path=/", s = n.domain ? `;domain=${n.domain}` : "", c = n.secure ? ";secure" : "";
      let f = n.expires !== void 0 ? n.expires : "";
      typeof f == "string" && f !== "" ? f = new Date(f) : typeof f == "number" && (f = new Date(+/* @__PURE__ */ new Date() + 1e3 * 60 * 60 * 24 * f)), f !== "" && "toGMTString" in f && (f = `;expires=${f.toGMTString()}`);
      const h = n.sameSite ? `;SameSite=${n.sameSite}` : "";
      document.cookie = `${e}=${encodeURI(t) + f + i + s + c + h}`;
    }
  },
  remove: function(e) {
    e = na(e) ? e : ia(arguments);
    for (var t = 0, r = e.length; t < r; t++)
      this.set(e[t], "", -1);
    return e;
  },
  clear: function(e) {
    return e ? this.remove(e) : this.remove(ra(this.all()));
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
let $t = null;
const bi = function(e, t, r) {
  const n = arguments;
  if ($t || ($t = Kt()), n.length === 0)
    return $t.all();
  if (n.length === 1 && e === null)
    return $t.clear();
  if (n.length === 2 && !t)
    return $t.clear(e);
  if (typeof e == "string" && !t)
    return $t.get(e);
  if (typeof e == "string" && t || $n(e))
    return $t.set(e, t, r);
};
for (const e in Kt.prototype)
  bi[e] = Kt.prototype[e];
var Mn = {}, sa = {
  get exports() {
    return Mn;
  },
  set exports(e) {
    Mn = e;
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
    return function r(n, i, s) {
      function c(o, d) {
        if (!i[o]) {
          if (!n[o]) {
            var l = typeof ir == "function" && ir;
            if (!d && l)
              return l(o, !0);
            if (f)
              return f(o, !0);
            var a = new Error("Cannot find module '" + o + "'");
            throw a.code = "MODULE_NOT_FOUND", a;
          }
          var u = i[o] = { exports: {} };
          n[o][0].call(u.exports, function(x) {
            var p = n[o][1][x];
            return c(p || x);
          }, u, u.exports, r, n, i, s);
        }
        return i[o].exports;
      }
      for (var f = typeof ir == "function" && ir, h = 0; h < s.length; h++)
        c(s[h]);
      return c;
    }({ 1: [function(r, n, i) {
      (function(s) {
        var c = s.MutationObserver || s.WebKitMutationObserver, f;
        if (c) {
          var h = 0, o = new c(x), d = s.document.createTextNode("");
          o.observe(d, {
            characterData: !0
          }), f = function() {
            d.data = h = ++h % 2;
          };
        } else if (!s.setImmediate && typeof s.MessageChannel < "u") {
          var l = new s.MessageChannel();
          l.port1.onmessage = x, f = function() {
            l.port2.postMessage(0);
          };
        } else
          "document" in s && "onreadystatechange" in s.document.createElement("script") ? f = function() {
            var _ = s.document.createElement("script");
            _.onreadystatechange = function() {
              x(), _.onreadystatechange = null, _.parentNode.removeChild(_), _ = null;
            }, s.document.documentElement.appendChild(_);
          } : f = function() {
            setTimeout(x, 0);
          };
        var a, u = [];
        function x() {
          a = !0;
          for (var _, R, w = u.length; w; ) {
            for (R = u, u = [], _ = -1; ++_ < w; )
              R[_]();
            w = u.length;
          }
          a = !1;
        }
        n.exports = p;
        function p(_) {
          u.push(_) === 1 && !a && f();
        }
      }).call(this, typeof le < "u" ? le : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(r, n, i) {
      var s = r(1);
      function c() {
      }
      var f = {}, h = ["REJECTED"], o = ["FULFILLED"], d = ["PENDING"];
      n.exports = l;
      function l(y) {
        if (typeof y != "function")
          throw new TypeError("resolver must be a function");
        this.state = d, this.queue = [], this.outcome = void 0, y !== c && p(this, y);
      }
      l.prototype.catch = function(y) {
        return this.then(null, y);
      }, l.prototype.then = function(y, k) {
        if (typeof y != "function" && this.state === o || typeof k != "function" && this.state === h)
          return this;
        var E = new this.constructor(c);
        if (this.state !== d) {
          var T = this.state === o ? y : k;
          u(E, T, this.outcome);
        } else
          this.queue.push(new a(E, y, k));
        return E;
      };
      function a(y, k, E) {
        this.promise = y, typeof k == "function" && (this.onFulfilled = k, this.callFulfilled = this.otherCallFulfilled), typeof E == "function" && (this.onRejected = E, this.callRejected = this.otherCallRejected);
      }
      a.prototype.callFulfilled = function(y) {
        f.resolve(this.promise, y);
      }, a.prototype.otherCallFulfilled = function(y) {
        u(this.promise, this.onFulfilled, y);
      }, a.prototype.callRejected = function(y) {
        f.reject(this.promise, y);
      }, a.prototype.otherCallRejected = function(y) {
        u(this.promise, this.onRejected, y);
      };
      function u(y, k, E) {
        s(function() {
          var T;
          try {
            T = k(E);
          } catch (P) {
            return f.reject(y, P);
          }
          T === y ? f.reject(y, new TypeError("Cannot resolve promise with itself")) : f.resolve(y, T);
        });
      }
      f.resolve = function(y, k) {
        var E = _(x, k);
        if (E.status === "error")
          return f.reject(y, E.value);
        var T = E.value;
        if (T)
          p(y, T);
        else {
          y.state = o, y.outcome = k;
          for (var P = -1, S = y.queue.length; ++P < S; )
            y.queue[P].callFulfilled(k);
        }
        return y;
      }, f.reject = function(y, k) {
        y.state = h, y.outcome = k;
        for (var E = -1, T = y.queue.length; ++E < T; )
          y.queue[E].callRejected(k);
        return y;
      };
      function x(y) {
        var k = y && y.then;
        if (y && (typeof y == "object" || typeof y == "function") && typeof k == "function")
          return function() {
            k.apply(y, arguments);
          };
      }
      function p(y, k) {
        var E = !1;
        function T(D) {
          E || (E = !0, f.reject(y, D));
        }
        function P(D) {
          E || (E = !0, f.resolve(y, D));
        }
        function S() {
          k(P, T);
        }
        var A = _(S);
        A.status === "error" && T(A.value);
      }
      function _(y, k) {
        var E = {};
        try {
          E.value = y(k), E.status = "success";
        } catch (T) {
          E.status = "error", E.value = T;
        }
        return E;
      }
      l.resolve = R;
      function R(y) {
        return y instanceof this ? y : f.resolve(new this(c), y);
      }
      l.reject = w;
      function w(y) {
        var k = new this(c);
        return f.reject(k, y);
      }
      l.all = v;
      function v(y) {
        var k = this;
        if (Object.prototype.toString.call(y) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var E = y.length, T = !1;
        if (!E)
          return this.resolve([]);
        for (var P = new Array(E), S = 0, A = -1, D = new this(c); ++A < E; )
          N(y[A], A);
        return D;
        function N(F, M) {
          k.resolve(F).then(W, function(K) {
            T || (T = !0, f.reject(D, K));
          });
          function W(K) {
            P[M] = K, ++S === E && !T && (T = !0, f.resolve(D, P));
          }
        }
      }
      l.race = g;
      function g(y) {
        var k = this;
        if (Object.prototype.toString.call(y) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var E = y.length, T = !1;
        if (!E)
          return this.resolve([]);
        for (var P = -1, S = new this(c); ++P < E; )
          A(y[P]);
        return S;
        function A(D) {
          k.resolve(D).then(function(N) {
            T || (T = !0, f.resolve(S, N));
          }, function(N) {
            T || (T = !0, f.reject(S, N));
          });
        }
      }
    }, { 1: 1 }], 3: [function(r, n, i) {
      (function(s) {
        typeof s.Promise != "function" && (s.Promise = r(2));
      }).call(this, typeof le < "u" ? le : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(r, n, i) {
      var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(b) {
        return typeof b;
      } : function(b) {
        return b && typeof Symbol == "function" && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b;
      };
      function c(b, C) {
        if (!(b instanceof C))
          throw new TypeError("Cannot call a class as a function");
      }
      function f() {
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
      var h = f();
      function o() {
        try {
          if (!h || !h.open)
            return !1;
          var b = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), C = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!b || C) && typeof indexedDB < "u" && // some outdated implementations of IDB that appear on Samsung
          // and HTC Android devices <4.4 are missing IDBKeyRange
          // See: https://github.com/mozilla/localForage/issues/128
          // See: https://github.com/mozilla/localForage/issues/272
          typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function d(b, C) {
        b = b || [], C = C || {};
        try {
          return new Blob(b, C);
        } catch (B) {
          if (B.name !== "TypeError")
            throw B;
          for (var m = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, L = new m(), O = 0; O < b.length; O += 1)
            L.append(b[O]);
          return L.getBlob(C.type);
        }
      }
      typeof Promise > "u" && r(3);
      var l = Promise;
      function a(b, C) {
        C && b.then(function(m) {
          C(null, m);
        }, function(m) {
          C(m);
        });
      }
      function u(b, C, m) {
        typeof C == "function" && b.then(C), typeof m == "function" && b.catch(m);
      }
      function x(b) {
        return typeof b != "string" && (console.warn(b + " used as a key, but it is not a string."), b = String(b)), b;
      }
      function p() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var _ = "local-forage-detect-blob-support", R = void 0, w = {}, v = Object.prototype.toString, g = "readonly", y = "readwrite";
      function k(b) {
        for (var C = b.length, m = new ArrayBuffer(C), L = new Uint8Array(m), O = 0; O < C; O++)
          L[O] = b.charCodeAt(O);
        return m;
      }
      function E(b) {
        return new l(function(C) {
          var m = b.transaction(_, y), L = d([""]);
          m.objectStore(_).put(L, "key"), m.onabort = function(O) {
            O.preventDefault(), O.stopPropagation(), C(!1);
          }, m.oncomplete = function() {
            var O = navigator.userAgent.match(/Chrome\/(\d+)/), B = navigator.userAgent.match(/Edge\//);
            C(B || !O || parseInt(O[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function T(b) {
        return typeof R == "boolean" ? l.resolve(R) : E(b).then(function(C) {
          return R = C, R;
        });
      }
      function P(b) {
        var C = w[b.name], m = {};
        m.promise = new l(function(L, O) {
          m.resolve = L, m.reject = O;
        }), C.deferredOperations.push(m), C.dbReady ? C.dbReady = C.dbReady.then(function() {
          return m.promise;
        }) : C.dbReady = m.promise;
      }
      function S(b) {
        var C = w[b.name], m = C.deferredOperations.pop();
        if (m)
          return m.resolve(), m.promise;
      }
      function A(b, C) {
        var m = w[b.name], L = m.deferredOperations.pop();
        if (L)
          return L.reject(C), L.promise;
      }
      function D(b, C) {
        return new l(function(m, L) {
          if (w[b.name] = w[b.name] || H(), b.db)
            if (C)
              P(b), b.db.close();
            else
              return m(b.db);
          var O = [b.name];
          C && O.push(b.version);
          var B = h.open.apply(h, O);
          C && (B.onupgradeneeded = function(U) {
            var G = B.result;
            try {
              G.createObjectStore(b.storeName), U.oldVersion <= 1 && G.createObjectStore(_);
            } catch (j) {
              if (j.name === "ConstraintError")
                console.warn('The database "' + b.name + '" has been upgraded from version ' + U.oldVersion + " to version " + U.newVersion + ', but the storage "' + b.storeName + '" already exists.');
              else
                throw j;
            }
          }), B.onerror = function(U) {
            U.preventDefault(), L(B.error);
          }, B.onsuccess = function() {
            var U = B.result;
            U.onversionchange = function(G) {
              G.target.close();
            }, m(U), S(b);
          };
        });
      }
      function N(b) {
        return D(b, !1);
      }
      function F(b) {
        return D(b, !0);
      }
      function M(b, C) {
        if (!b.db)
          return !0;
        var m = !b.db.objectStoreNames.contains(b.storeName), L = b.version < b.db.version, O = b.version > b.db.version;
        if (L && (b.version !== C && console.warn('The database "' + b.name + `" can't be downgraded from version ` + b.db.version + " to version " + b.version + "."), b.version = b.db.version), O || m) {
          if (m) {
            var B = b.db.version + 1;
            B > b.version && (b.version = B);
          }
          return !0;
        }
        return !1;
      }
      function W(b) {
        return new l(function(C, m) {
          var L = new FileReader();
          L.onerror = m, L.onloadend = function(O) {
            var B = btoa(O.target.result || "");
            C({
              __local_forage_encoded_blob: !0,
              data: B,
              type: b.type
            });
          }, L.readAsBinaryString(b);
        });
      }
      function K(b) {
        var C = k(atob(b.data));
        return d([C], { type: b.type });
      }
      function te(b) {
        return b && b.__local_forage_encoded_blob;
      }
      function J(b) {
        var C = this, m = C._initReady().then(function() {
          var L = w[C._dbInfo.name];
          if (L && L.dbReady)
            return L.dbReady;
        });
        return u(m, b, b), m;
      }
      function re(b) {
        P(b);
        for (var C = w[b.name], m = C.forages, L = 0; L < m.length; L++) {
          var O = m[L];
          O._dbInfo.db && (O._dbInfo.db.close(), O._dbInfo.db = null);
        }
        return b.db = null, N(b).then(function(B) {
          return b.db = B, M(b) ? F(b) : B;
        }).then(function(B) {
          b.db = C.db = B;
          for (var U = 0; U < m.length; U++)
            m[U]._dbInfo.db = B;
        }).catch(function(B) {
          throw A(b, B), B;
        });
      }
      function z(b, C, m, L) {
        L === void 0 && (L = 1);
        try {
          var O = b.db.transaction(b.storeName, C);
          m(null, O);
        } catch (B) {
          if (L > 0 && (!b.db || B.name === "InvalidStateError" || B.name === "NotFoundError"))
            return l.resolve().then(function() {
              if (!b.db || B.name === "NotFoundError" && !b.db.objectStoreNames.contains(b.storeName) && b.version <= b.db.version)
                return b.db && (b.version = b.db.version + 1), F(b);
            }).then(function() {
              return re(b).then(function() {
                z(b, C, m, L - 1);
              });
            }).catch(m);
          m(B);
        }
      }
      function H() {
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
      function q(b) {
        var C = this, m = {
          db: null
        };
        if (b)
          for (var L in b)
            m[L] = b[L];
        var O = w[m.name];
        O || (O = H(), w[m.name] = O), O.forages.push(C), C._initReady || (C._initReady = C.ready, C.ready = J);
        var B = [];
        function U() {
          return l.resolve();
        }
        for (var G = 0; G < O.forages.length; G++) {
          var j = O.forages[G];
          j !== C && B.push(j._initReady().catch(U));
        }
        var Q = O.forages.slice(0);
        return l.all(B).then(function() {
          return m.db = O.db, N(m);
        }).then(function(ee) {
          return m.db = ee, M(m, C._defaultConfig.version) ? F(m) : ee;
        }).then(function(ee) {
          m.db = O.db = ee, C._dbInfo = m;
          for (var ne = 0; ne < Q.length; ne++) {
            var ve = Q[ne];
            ve !== C && (ve._dbInfo.db = m.db, ve._dbInfo.version = m.version);
          }
        });
      }
      function V(b, C) {
        var m = this;
        b = x(b);
        var L = new l(function(O, B) {
          m.ready().then(function() {
            z(m._dbInfo, g, function(U, G) {
              if (U)
                return B(U);
              try {
                var j = G.objectStore(m._dbInfo.storeName), Q = j.get(b);
                Q.onsuccess = function() {
                  var ee = Q.result;
                  ee === void 0 && (ee = null), te(ee) && (ee = K(ee)), O(ee);
                }, Q.onerror = function() {
                  B(Q.error);
                };
              } catch (ee) {
                B(ee);
              }
            });
          }).catch(B);
        });
        return a(L, C), L;
      }
      function pe(b, C) {
        var m = this, L = new l(function(O, B) {
          m.ready().then(function() {
            z(m._dbInfo, g, function(U, G) {
              if (U)
                return B(U);
              try {
                var j = G.objectStore(m._dbInfo.storeName), Q = j.openCursor(), ee = 1;
                Q.onsuccess = function() {
                  var ne = Q.result;
                  if (ne) {
                    var ve = ne.value;
                    te(ve) && (ve = K(ve));
                    var we = b(ve, ne.key, ee++);
                    we !== void 0 ? O(we) : ne.continue();
                  } else
                    O();
                }, Q.onerror = function() {
                  B(Q.error);
                };
              } catch (ne) {
                B(ne);
              }
            });
          }).catch(B);
        });
        return a(L, C), L;
      }
      function xe(b, C, m) {
        var L = this;
        b = x(b);
        var O = new l(function(B, U) {
          var G;
          L.ready().then(function() {
            return G = L._dbInfo, v.call(C) === "[object Blob]" ? T(G.db).then(function(j) {
              return j ? C : W(C);
            }) : C;
          }).then(function(j) {
            z(L._dbInfo, y, function(Q, ee) {
              if (Q)
                return U(Q);
              try {
                var ne = ee.objectStore(L._dbInfo.storeName);
                j === null && (j = void 0);
                var ve = ne.put(j, b);
                ee.oncomplete = function() {
                  j === void 0 && (j = null), B(j);
                }, ee.onabort = ee.onerror = function() {
                  var we = ve.error ? ve.error : ve.transaction.error;
                  U(we);
                };
              } catch (we) {
                U(we);
              }
            });
          }).catch(U);
        });
        return a(O, m), O;
      }
      function Ce(b, C) {
        var m = this;
        b = x(b);
        var L = new l(function(O, B) {
          m.ready().then(function() {
            z(m._dbInfo, y, function(U, G) {
              if (U)
                return B(U);
              try {
                var j = G.objectStore(m._dbInfo.storeName), Q = j.delete(b);
                G.oncomplete = function() {
                  O();
                }, G.onerror = function() {
                  B(Q.error);
                }, G.onabort = function() {
                  var ee = Q.error ? Q.error : Q.transaction.error;
                  B(ee);
                };
              } catch (ee) {
                B(ee);
              }
            });
          }).catch(B);
        });
        return a(L, C), L;
      }
      function ue(b) {
        var C = this, m = new l(function(L, O) {
          C.ready().then(function() {
            z(C._dbInfo, y, function(B, U) {
              if (B)
                return O(B);
              try {
                var G = U.objectStore(C._dbInfo.storeName), j = G.clear();
                U.oncomplete = function() {
                  L();
                }, U.onabort = U.onerror = function() {
                  var Q = j.error ? j.error : j.transaction.error;
                  O(Q);
                };
              } catch (Q) {
                O(Q);
              }
            });
          }).catch(O);
        });
        return a(m, b), m;
      }
      function Ae(b) {
        var C = this, m = new l(function(L, O) {
          C.ready().then(function() {
            z(C._dbInfo, g, function(B, U) {
              if (B)
                return O(B);
              try {
                var G = U.objectStore(C._dbInfo.storeName), j = G.count();
                j.onsuccess = function() {
                  L(j.result);
                }, j.onerror = function() {
                  O(j.error);
                };
              } catch (Q) {
                O(Q);
              }
            });
          }).catch(O);
        });
        return a(m, b), m;
      }
      function Me(b, C) {
        var m = this, L = new l(function(O, B) {
          if (b < 0) {
            O(null);
            return;
          }
          m.ready().then(function() {
            z(m._dbInfo, g, function(U, G) {
              if (U)
                return B(U);
              try {
                var j = G.objectStore(m._dbInfo.storeName), Q = !1, ee = j.openKeyCursor();
                ee.onsuccess = function() {
                  var ne = ee.result;
                  if (!ne) {
                    O(null);
                    return;
                  }
                  b === 0 || Q ? O(ne.key) : (Q = !0, ne.advance(b));
                }, ee.onerror = function() {
                  B(ee.error);
                };
              } catch (ne) {
                B(ne);
              }
            });
          }).catch(B);
        });
        return a(L, C), L;
      }
      function at(b) {
        var C = this, m = new l(function(L, O) {
          C.ready().then(function() {
            z(C._dbInfo, g, function(B, U) {
              if (B)
                return O(B);
              try {
                var G = U.objectStore(C._dbInfo.storeName), j = G.openKeyCursor(), Q = [];
                j.onsuccess = function() {
                  var ee = j.result;
                  if (!ee) {
                    L(Q);
                    return;
                  }
                  Q.push(ee.key), ee.continue();
                }, j.onerror = function() {
                  O(j.error);
                };
              } catch (ee) {
                O(ee);
              }
            });
          }).catch(O);
        });
        return a(m, b), m;
      }
      function je(b, C) {
        C = p.apply(this, arguments);
        var m = this.config();
        b = typeof b != "function" && b || {}, b.name || (b.name = b.name || m.name, b.storeName = b.storeName || m.storeName);
        var L = this, O;
        if (!b.name)
          O = l.reject("Invalid arguments");
        else {
          var B = b.name === m.name && L._dbInfo.db, U = B ? l.resolve(L._dbInfo.db) : N(b).then(function(G) {
            var j = w[b.name], Q = j.forages;
            j.db = G;
            for (var ee = 0; ee < Q.length; ee++)
              Q[ee]._dbInfo.db = G;
            return G;
          });
          b.storeName ? O = U.then(function(G) {
            if (G.objectStoreNames.contains(b.storeName)) {
              var j = G.version + 1;
              P(b);
              var Q = w[b.name], ee = Q.forages;
              G.close();
              for (var ne = 0; ne < ee.length; ne++) {
                var ve = ee[ne];
                ve._dbInfo.db = null, ve._dbInfo.version = j;
              }
              var we = new l(function(Ee, Ie) {
                var Le = h.open(b.name, j);
                Le.onerror = function(it) {
                  var Jt = Le.result;
                  Jt.close(), Ie(it);
                }, Le.onupgradeneeded = function() {
                  var it = Le.result;
                  it.deleteObjectStore(b.storeName);
                }, Le.onsuccess = function() {
                  var it = Le.result;
                  it.close(), Ee(it);
                };
              });
              return we.then(function(Ee) {
                Q.db = Ee;
                for (var Ie = 0; Ie < ee.length; Ie++) {
                  var Le = ee[Ie];
                  Le._dbInfo.db = Ee, S(Le._dbInfo);
                }
              }).catch(function(Ee) {
                throw (A(b, Ee) || l.resolve()).catch(function() {
                }), Ee;
              });
            }
          }) : O = U.then(function(G) {
            P(b);
            var j = w[b.name], Q = j.forages;
            G.close();
            for (var ee = 0; ee < Q.length; ee++) {
              var ne = Q[ee];
              ne._dbInfo.db = null;
            }
            var ve = new l(function(we, Ee) {
              var Ie = h.deleteDatabase(b.name);
              Ie.onerror = function() {
                var Le = Ie.result;
                Le && Le.close(), Ee(Ie.error);
              }, Ie.onblocked = function() {
                console.warn('dropInstance blocked for database "' + b.name + '" until all open connections are closed');
              }, Ie.onsuccess = function() {
                var Le = Ie.result;
                Le && Le.close(), we(Le);
              };
            });
            return ve.then(function(we) {
              j.db = we;
              for (var Ee = 0; Ee < Q.length; Ee++) {
                var Ie = Q[Ee];
                S(Ie._dbInfo);
              }
            }).catch(function(we) {
              throw (A(b, we) || l.resolve()).catch(function() {
              }), we;
            });
          });
        }
        return a(O, C), O;
      }
      var He = {
        _driver: "asyncStorage",
        _initStorage: q,
        _support: o(),
        iterate: pe,
        getItem: V,
        setItem: xe,
        removeItem: Ce,
        clear: ue,
        length: Ae,
        key: Me,
        keys: at,
        dropInstance: je
      };
      function Re() {
        return typeof openDatabase == "function";
      }
      var Ne = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _t = "~~local_forage_type~", vt = /^~~local_forage_type~([^~]+)~/, tt = "__lfsc__:", wt = tt.length, rt = "arbf", ze = "blob", qe = "si08", Ge = "ui08", Et = "uic8", kt = "si16", ct = "si32", $ = "ur16", X = "ui32", I = "fl32", se = "fl64", _e = wt + rt.length, Ue = Object.prototype.toString;
      function ft(b) {
        var C = b.length * 0.75, m = b.length, L, O = 0, B, U, G, j;
        b[b.length - 1] === "=" && (C--, b[b.length - 2] === "=" && C--);
        var Q = new ArrayBuffer(C), ee = new Uint8Array(Q);
        for (L = 0; L < m; L += 4)
          B = Ne.indexOf(b[L]), U = Ne.indexOf(b[L + 1]), G = Ne.indexOf(b[L + 2]), j = Ne.indexOf(b[L + 3]), ee[O++] = B << 2 | U >> 4, ee[O++] = (U & 15) << 4 | G >> 2, ee[O++] = (G & 3) << 6 | j & 63;
        return Q;
      }
      function nt(b) {
        var C = new Uint8Array(b), m = "", L;
        for (L = 0; L < C.length; L += 3)
          m += Ne[C[L] >> 2], m += Ne[(C[L] & 3) << 4 | C[L + 1] >> 4], m += Ne[(C[L + 1] & 15) << 2 | C[L + 2] >> 6], m += Ne[C[L + 2] & 63];
        return C.length % 3 === 2 ? m = m.substring(0, m.length - 1) + "=" : C.length % 3 === 1 && (m = m.substring(0, m.length - 2) + "=="), m;
      }
      function Dt(b, C) {
        var m = "";
        if (b && (m = Ue.call(b)), b && (m === "[object ArrayBuffer]" || b.buffer && Ue.call(b.buffer) === "[object ArrayBuffer]")) {
          var L, O = tt;
          b instanceof ArrayBuffer ? (L = b, O += rt) : (L = b.buffer, m === "[object Int8Array]" ? O += qe : m === "[object Uint8Array]" ? O += Ge : m === "[object Uint8ClampedArray]" ? O += Et : m === "[object Int16Array]" ? O += kt : m === "[object Uint16Array]" ? O += $ : m === "[object Int32Array]" ? O += ct : m === "[object Uint32Array]" ? O += X : m === "[object Float32Array]" ? O += I : m === "[object Float64Array]" ? O += se : C(new Error("Failed to get type for BinaryArray"))), C(O + nt(L));
        } else if (m === "[object Blob]") {
          var B = new FileReader();
          B.onload = function() {
            var U = _t + b.type + "~" + nt(this.result);
            C(tt + ze + U);
          }, B.readAsArrayBuffer(b);
        } else
          try {
            C(JSON.stringify(b));
          } catch (U) {
            console.error("Couldn't convert value into a JSON string: ", b), C(null, U);
          }
      }
      function De(b) {
        if (b.substring(0, wt) !== tt)
          return JSON.parse(b);
        var C = b.substring(_e), m = b.substring(wt, _e), L;
        if (m === ze && vt.test(C)) {
          var O = C.match(vt);
          L = O[1], C = C.substring(O[0].length);
        }
        var B = ft(C);
        switch (m) {
          case rt:
            return B;
          case ze:
            return d([B], { type: L });
          case qe:
            return new Int8Array(B);
          case Ge:
            return new Uint8Array(B);
          case Et:
            return new Uint8ClampedArray(B);
          case kt:
            return new Int16Array(B);
          case $:
            return new Uint16Array(B);
          case ct:
            return new Int32Array(B);
          case X:
            return new Uint32Array(B);
          case I:
            return new Float32Array(B);
          case se:
            return new Float64Array(B);
          default:
            throw new Error("Unkown type: " + m);
        }
      }
      var Ve = {
        serialize: Dt,
        deserialize: De,
        stringToBuffer: ft,
        bufferToString: nt
      };
      function jt(b, C, m, L) {
        b.executeSql("CREATE TABLE IF NOT EXISTS " + C.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], m, L);
      }
      function gn(b) {
        var C = this, m = {
          db: null
        };
        if (b)
          for (var L in b)
            m[L] = typeof b[L] != "string" ? b[L].toString() : b[L];
        var O = new l(function(B, U) {
          try {
            m.db = openDatabase(m.name, String(m.version), m.description, m.size);
          } catch (G) {
            return U(G);
          }
          m.db.transaction(function(G) {
            jt(G, m, function() {
              C._dbInfo = m, B();
            }, function(j, Q) {
              U(Q);
            });
          }, U);
        });
        return m.serializer = Ve, O;
      }
      function ut(b, C, m, L, O, B) {
        b.executeSql(m, L, O, function(U, G) {
          G.code === G.SYNTAX_ERR ? U.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [C.storeName], function(j, Q) {
            Q.rows.length ? B(j, G) : jt(j, C, function() {
              j.executeSql(m, L, O, B);
            }, B);
          }, B) : B(U, G);
        }, B);
      }
      function yn(b, C) {
        var m = this;
        b = x(b);
        var L = new l(function(O, B) {
          m.ready().then(function() {
            var U = m._dbInfo;
            U.db.transaction(function(G) {
              ut(G, U, "SELECT * FROM " + U.storeName + " WHERE key = ? LIMIT 1", [b], function(j, Q) {
                var ee = Q.rows.length ? Q.rows.item(0).value : null;
                ee && (ee = U.serializer.deserialize(ee)), O(ee);
              }, function(j, Q) {
                B(Q);
              });
            });
          }).catch(B);
        });
        return a(L, C), L;
      }
      function lr(b, C) {
        var m = this, L = new l(function(O, B) {
          m.ready().then(function() {
            var U = m._dbInfo;
            U.db.transaction(function(G) {
              ut(G, U, "SELECT * FROM " + U.storeName, [], function(j, Q) {
                for (var ee = Q.rows, ne = ee.length, ve = 0; ve < ne; ve++) {
                  var we = ee.item(ve), Ee = we.value;
                  if (Ee && (Ee = U.serializer.deserialize(Ee)), Ee = b(Ee, we.key, ve + 1), Ee !== void 0) {
                    O(Ee);
                    return;
                  }
                }
                O();
              }, function(j, Q) {
                B(Q);
              });
            });
          }).catch(B);
        });
        return a(L, C), L;
      }
      function dr(b, C, m, L) {
        var O = this;
        b = x(b);
        var B = new l(function(U, G) {
          O.ready().then(function() {
            C === void 0 && (C = null);
            var j = C, Q = O._dbInfo;
            Q.serializer.serialize(C, function(ee, ne) {
              ne ? G(ne) : Q.db.transaction(function(ve) {
                ut(ve, Q, "INSERT OR REPLACE INTO " + Q.storeName + " (key, value) VALUES (?, ?)", [b, ee], function() {
                  U(j);
                }, function(we, Ee) {
                  G(Ee);
                });
              }, function(ve) {
                if (ve.code === ve.QUOTA_ERR) {
                  if (L > 0) {
                    U(dr.apply(O, [b, j, m, L - 1]));
                    return;
                  }
                  G(ve);
                }
              });
            });
          }).catch(G);
        });
        return a(B, m), B;
      }
      function mn(b, C, m) {
        return dr.apply(this, [b, C, m, 1]);
      }
      function _n(b, C) {
        var m = this;
        b = x(b);
        var L = new l(function(O, B) {
          m.ready().then(function() {
            var U = m._dbInfo;
            U.db.transaction(function(G) {
              ut(G, U, "DELETE FROM " + U.storeName + " WHERE key = ?", [b], function() {
                O();
              }, function(j, Q) {
                B(Q);
              });
            });
          }).catch(B);
        });
        return a(L, C), L;
      }
      function hr(b) {
        var C = this, m = new l(function(L, O) {
          C.ready().then(function() {
            var B = C._dbInfo;
            B.db.transaction(function(U) {
              ut(U, B, "DELETE FROM " + B.storeName, [], function() {
                L();
              }, function(G, j) {
                O(j);
              });
            });
          }).catch(O);
        });
        return a(m, b), m;
      }
      function wn(b) {
        var C = this, m = new l(function(L, O) {
          C.ready().then(function() {
            var B = C._dbInfo;
            B.db.transaction(function(U) {
              ut(U, B, "SELECT COUNT(key) as c FROM " + B.storeName, [], function(G, j) {
                var Q = j.rows.item(0).c;
                L(Q);
              }, function(G, j) {
                O(j);
              });
            });
          }).catch(O);
        });
        return a(m, b), m;
      }
      function En(b, C) {
        var m = this, L = new l(function(O, B) {
          m.ready().then(function() {
            var U = m._dbInfo;
            U.db.transaction(function(G) {
              ut(G, U, "SELECT key FROM " + U.storeName + " WHERE id = ? LIMIT 1", [b + 1], function(j, Q) {
                var ee = Q.rows.length ? Q.rows.item(0).key : null;
                O(ee);
              }, function(j, Q) {
                B(Q);
              });
            });
          }).catch(B);
        });
        return a(L, C), L;
      }
      function pr(b) {
        var C = this, m = new l(function(L, O) {
          C.ready().then(function() {
            var B = C._dbInfo;
            B.db.transaction(function(U) {
              ut(U, B, "SELECT key FROM " + B.storeName, [], function(G, j) {
                for (var Q = [], ee = 0; ee < j.rows.length; ee++)
                  Q.push(j.rows.item(ee).key);
                L(Q);
              }, function(G, j) {
                O(j);
              });
            });
          }).catch(O);
        });
        return a(m, b), m;
      }
      function kn(b) {
        return new l(function(C, m) {
          b.transaction(function(L) {
            L.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(O, B) {
              for (var U = [], G = 0; G < B.rows.length; G++)
                U.push(B.rows.item(G).name);
              C({
                db: b,
                storeNames: U
              });
            }, function(O, B) {
              m(B);
            });
          }, function(L) {
            m(L);
          });
        });
      }
      function vr(b, C) {
        C = p.apply(this, arguments);
        var m = this.config();
        b = typeof b != "function" && b || {}, b.name || (b.name = b.name || m.name, b.storeName = b.storeName || m.storeName);
        var L = this, O;
        return b.name ? O = new l(function(B) {
          var U;
          b.name === m.name ? U = L._dbInfo.db : U = openDatabase(b.name, "", "", 0), b.storeName ? B({
            db: U,
            storeNames: [b.storeName]
          }) : B(kn(U));
        }).then(function(B) {
          return new l(function(U, G) {
            B.db.transaction(function(j) {
              function Q(we) {
                return new l(function(Ee, Ie) {
                  j.executeSql("DROP TABLE IF EXISTS " + we, [], function() {
                    Ee();
                  }, function(Le, it) {
                    Ie(it);
                  });
                });
              }
              for (var ee = [], ne = 0, ve = B.storeNames.length; ne < ve; ne++)
                ee.push(Q(B.storeNames[ne]));
              l.all(ee).then(function() {
                U();
              }).catch(function(we) {
                G(we);
              });
            }, function(j) {
              G(j);
            });
          });
        }) : O = l.reject("Invalid arguments"), a(O, C), O;
      }
      var Ze = {
        _driver: "webSQLStorage",
        _initStorage: gn,
        _support: Re(),
        iterate: lr,
        getItem: yn,
        setItem: mn,
        removeItem: _n,
        clear: hr,
        length: wn,
        key: En,
        keys: pr,
        dropInstance: vr
      };
      function xt() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function Xt(b, C) {
        var m = b.name + "/";
        return b.storeName !== C.storeName && (m += b.storeName + "/"), m;
      }
      function Sn() {
        var b = "_localforage_support_test";
        try {
          return localStorage.setItem(b, !0), localStorage.removeItem(b), !1;
        } catch {
          return !0;
        }
      }
      function Yi() {
        return !Sn() || localStorage.length > 0;
      }
      function Ki(b) {
        var C = this, m = {};
        if (b)
          for (var L in b)
            m[L] = b[L];
        return m.keyPrefix = Xt(b, C._defaultConfig), Yi() ? (C._dbInfo = m, m.serializer = Ve, l.resolve()) : l.reject();
      }
      function Gi(b) {
        var C = this, m = C.ready().then(function() {
          for (var L = C._dbInfo.keyPrefix, O = localStorage.length - 1; O >= 0; O--) {
            var B = localStorage.key(O);
            B.indexOf(L) === 0 && localStorage.removeItem(B);
          }
        });
        return a(m, b), m;
      }
      function Zi(b, C) {
        var m = this;
        b = x(b);
        var L = m.ready().then(function() {
          var O = m._dbInfo, B = localStorage.getItem(O.keyPrefix + b);
          return B && (B = O.serializer.deserialize(B)), B;
        });
        return a(L, C), L;
      }
      function ji(b, C) {
        var m = this, L = m.ready().then(function() {
          for (var O = m._dbInfo, B = O.keyPrefix, U = B.length, G = localStorage.length, j = 1, Q = 0; Q < G; Q++) {
            var ee = localStorage.key(Q);
            if (ee.indexOf(B) === 0) {
              var ne = localStorage.getItem(ee);
              if (ne && (ne = O.serializer.deserialize(ne)), ne = b(ne, ee.substring(U), j++), ne !== void 0)
                return ne;
            }
          }
        });
        return a(L, C), L;
      }
      function Xi(b, C) {
        var m = this, L = m.ready().then(function() {
          var O = m._dbInfo, B;
          try {
            B = localStorage.key(b);
          } catch {
            B = null;
          }
          return B && (B = B.substring(O.keyPrefix.length)), B;
        });
        return a(L, C), L;
      }
      function Qi(b) {
        var C = this, m = C.ready().then(function() {
          for (var L = C._dbInfo, O = localStorage.length, B = [], U = 0; U < O; U++) {
            var G = localStorage.key(U);
            G.indexOf(L.keyPrefix) === 0 && B.push(G.substring(L.keyPrefix.length));
          }
          return B;
        });
        return a(m, b), m;
      }
      function Ji(b) {
        var C = this, m = C.keys().then(function(L) {
          return L.length;
        });
        return a(m, b), m;
      }
      function es(b, C) {
        var m = this;
        b = x(b);
        var L = m.ready().then(function() {
          var O = m._dbInfo;
          localStorage.removeItem(O.keyPrefix + b);
        });
        return a(L, C), L;
      }
      function ts(b, C, m) {
        var L = this;
        b = x(b);
        var O = L.ready().then(function() {
          C === void 0 && (C = null);
          var B = C;
          return new l(function(U, G) {
            var j = L._dbInfo;
            j.serializer.serialize(C, function(Q, ee) {
              if (ee)
                G(ee);
              else
                try {
                  localStorage.setItem(j.keyPrefix + b, Q), U(B);
                } catch (ne) {
                  (ne.name === "QuotaExceededError" || ne.name === "NS_ERROR_DOM_QUOTA_REACHED") && G(ne), G(ne);
                }
            });
          });
        });
        return a(O, m), O;
      }
      function rs(b, C) {
        if (C = p.apply(this, arguments), b = typeof b != "function" && b || {}, !b.name) {
          var m = this.config();
          b.name = b.name || m.name, b.storeName = b.storeName || m.storeName;
        }
        var L = this, O;
        return b.name ? O = new l(function(B) {
          b.storeName ? B(Xt(b, L._defaultConfig)) : B(b.name + "/");
        }).then(function(B) {
          for (var U = localStorage.length - 1; U >= 0; U--) {
            var G = localStorage.key(U);
            G.indexOf(B) === 0 && localStorage.removeItem(G);
          }
        }) : O = l.reject("Invalid arguments"), a(O, C), O;
      }
      var ns = {
        _driver: "localStorageWrapper",
        _initStorage: Ki,
        _support: xt(),
        iterate: ji,
        getItem: Zi,
        setItem: ts,
        removeItem: es,
        clear: Gi,
        length: Ji,
        key: Xi,
        keys: Qi,
        dropInstance: rs
      }, is = function(C, m) {
        return C === m || typeof C == "number" && typeof m == "number" && isNaN(C) && isNaN(m);
      }, ss = function(C, m) {
        for (var L = C.length, O = 0; O < L; ) {
          if (is(C[O], m))
            return !0;
          O++;
        }
        return !1;
      }, i0 = Array.isArray || function(b) {
        return Object.prototype.toString.call(b) === "[object Array]";
      }, Qt = {}, s0 = {}, Ht = {
        INDEXEDDB: He,
        WEBSQL: Ze,
        LOCALSTORAGE: ns
      }, os = [Ht.INDEXEDDB._driver, Ht.WEBSQL._driver, Ht.LOCALSTORAGE._driver], xr = ["dropInstance"], Cn = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(xr), as = {
        description: "",
        driver: os.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function cs(b, C) {
        b[C] = function() {
          var m = arguments;
          return b.ready().then(function() {
            return b[C].apply(b, m);
          });
        };
      }
      function An() {
        for (var b = 1; b < arguments.length; b++) {
          var C = arguments[b];
          if (C)
            for (var m in C)
              C.hasOwnProperty(m) && (i0(C[m]) ? arguments[0][m] = C[m].slice() : arguments[0][m] = C[m]);
        }
        return arguments[0];
      }
      var fs = function() {
        function b(C) {
          c(this, b);
          for (var m in Ht)
            if (Ht.hasOwnProperty(m)) {
              var L = Ht[m], O = L._driver;
              this[m] = O, Qt[O] || this.defineDriver(L);
            }
          this._defaultConfig = An({}, as), this._config = An({}, this._defaultConfig, C), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return b.prototype.config = function(m) {
          if ((typeof m > "u" ? "undefined" : s(m)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var L in m) {
              if (L === "storeName" && (m[L] = m[L].replace(/\W/g, "_")), L === "version" && typeof m[L] != "number")
                return new Error("Database version must be a number.");
              this._config[L] = m[L];
            }
            return "driver" in m && m.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof m == "string" ? this._config[m] : this._config;
        }, b.prototype.defineDriver = function(m, L, O) {
          var B = new l(function(U, G) {
            try {
              var j = m._driver, Q = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!m._driver) {
                G(Q);
                return;
              }
              for (var ee = Cn.concat("_initStorage"), ne = 0, ve = ee.length; ne < ve; ne++) {
                var we = ee[ne], Ee = !ss(xr, we);
                if ((Ee || m[we]) && typeof m[we] != "function") {
                  G(Q);
                  return;
                }
              }
              var Ie = function() {
                for (var Jt = function(ds) {
                  return function() {
                    var hs = new Error("Method " + ds + " is not implemented by the current driver"), o0 = l.reject(hs);
                    return a(o0, arguments[arguments.length - 1]), o0;
                  };
                }, Bn = 0, ls = xr.length; Bn < ls; Bn++) {
                  var Tn = xr[Bn];
                  m[Tn] || (m[Tn] = Jt(Tn));
                }
              };
              Ie();
              var Le = function(Jt) {
                Qt[j] && console.info("Redefining LocalForage driver: " + j), Qt[j] = m, s0[j] = Jt, U();
              };
              "_support" in m ? m._support && typeof m._support == "function" ? m._support().then(Le, G) : Le(!!m._support) : Le(!0);
            } catch (it) {
              G(it);
            }
          });
          return u(B, L, O), B;
        }, b.prototype.driver = function() {
          return this._driver || null;
        }, b.prototype.getDriver = function(m, L, O) {
          var B = Qt[m] ? l.resolve(Qt[m]) : l.reject(new Error("Driver not found."));
          return u(B, L, O), B;
        }, b.prototype.getSerializer = function(m) {
          var L = l.resolve(Ve);
          return u(L, m), L;
        }, b.prototype.ready = function(m) {
          var L = this, O = L._driverSet.then(function() {
            return L._ready === null && (L._ready = L._initDriver()), L._ready;
          });
          return u(O, m, m), O;
        }, b.prototype.setDriver = function(m, L, O) {
          var B = this;
          i0(m) || (m = [m]);
          var U = this._getSupportedDrivers(m);
          function G() {
            B._config.driver = B.driver();
          }
          function j(ne) {
            return B._extend(ne), G(), B._ready = B._initStorage(B._config), B._ready;
          }
          function Q(ne) {
            return function() {
              var ve = 0;
              function we() {
                for (; ve < ne.length; ) {
                  var Ee = ne[ve];
                  return ve++, B._dbInfo = null, B._ready = null, B.getDriver(Ee).then(j).catch(we);
                }
                G();
                var Ie = new Error("No available storage method found.");
                return B._driverSet = l.reject(Ie), B._driverSet;
              }
              return we();
            };
          }
          var ee = this._driverSet !== null ? this._driverSet.catch(function() {
            return l.resolve();
          }) : l.resolve();
          return this._driverSet = ee.then(function() {
            var ne = U[0];
            return B._dbInfo = null, B._ready = null, B.getDriver(ne).then(function(ve) {
              B._driver = ve._driver, G(), B._wrapLibraryMethodsWithReady(), B._initDriver = Q(U);
            });
          }).catch(function() {
            G();
            var ne = new Error("No available storage method found.");
            return B._driverSet = l.reject(ne), B._driverSet;
          }), u(this._driverSet, L, O), this._driverSet;
        }, b.prototype.supports = function(m) {
          return !!s0[m];
        }, b.prototype._extend = function(m) {
          An(this, m);
        }, b.prototype._getSupportedDrivers = function(m) {
          for (var L = [], O = 0, B = m.length; O < B; O++) {
            var U = m[O];
            this.supports(U) && L.push(U);
          }
          return L;
        }, b.prototype._wrapLibraryMethodsWithReady = function() {
          for (var m = 0, L = Cn.length; m < L; m++)
            cs(this, Cn[m]);
        }, b.prototype.createInstance = function(m) {
          return new b(m);
        }, b;
      }(), us = new fs();
      n.exports = us;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(sa);
const oa = Mn, yt = /* @__PURE__ */ Object.create(null);
yt.open = "0";
yt.close = "1";
yt.ping = "2";
yt.pong = "3";
yt.message = "4";
yt.upgrade = "5";
yt.noop = "6";
const _r = /* @__PURE__ */ Object.create(null);
Object.keys(yt).forEach((e) => {
  _r[yt[e]] = e;
});
const aa = { type: "error", data: "parser error" }, ca = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", fa = typeof ArrayBuffer == "function", ua = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, gi = ({ type: e, data: t }, r, n) => ca && t instanceof Blob ? r ? n(t) : G0(t, n) : fa && (t instanceof ArrayBuffer || ua(t)) ? r ? n(t) : G0(new Blob([t]), n) : n(yt[e] + (t || "")), G0 = (e, t) => {
  const r = new FileReader();
  return r.onload = function() {
    const n = r.result.split(",")[1];
    t("b" + (n || ""));
  }, r.readAsDataURL(e);
}, Z0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", sr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Z0.length; e++)
  sr[Z0.charCodeAt(e)] = e;
const la = (e) => {
  let t = e.length * 0.75, r = e.length, n, i = 0, s, c, f, h;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const o = new ArrayBuffer(t), d = new Uint8Array(o);
  for (n = 0; n < r; n += 4)
    s = sr[e.charCodeAt(n)], c = sr[e.charCodeAt(n + 1)], f = sr[e.charCodeAt(n + 2)], h = sr[e.charCodeAt(n + 3)], d[i++] = s << 2 | c >> 4, d[i++] = (c & 15) << 4 | f >> 2, d[i++] = (f & 3) << 6 | h & 63;
  return o;
}, da = typeof ArrayBuffer == "function", yi = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: mi(e, t)
    };
  const r = e.charAt(0);
  return r === "b" ? {
    type: "message",
    data: ha(e.substring(1), t)
  } : _r[r] ? e.length > 1 ? {
    type: _r[r],
    data: e.substring(1)
  } : {
    type: _r[r]
  } : aa;
}, ha = (e, t) => {
  if (da) {
    const r = la(e);
    return mi(r, t);
  } else
    return { base64: !0, data: e };
}, mi = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof ArrayBuffer ? new Blob([e]) : e;
    case "arraybuffer":
    default:
      return e;
  }
}, _i = String.fromCharCode(30), pa = (e, t) => {
  const r = e.length, n = new Array(r);
  let i = 0;
  e.forEach((s, c) => {
    gi(s, !1, (f) => {
      n[c] = f, ++i === r && t(n.join(_i));
    });
  });
}, va = (e, t) => {
  const r = e.split(_i), n = [];
  for (let i = 0; i < r.length; i++) {
    const s = yi(r[i], t);
    if (n.push(s), s.type === "error")
      break;
  }
  return n;
}, wi = 4;
function $e(e) {
  if (e)
    return xa(e);
}
function xa(e) {
  for (var t in $e.prototype)
    e[t] = $e.prototype[t];
  return e;
}
$e.prototype.on = $e.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
$e.prototype.once = function(e, t) {
  function r() {
    this.off(e, r), t.apply(this, arguments);
  }
  return r.fn = t, this.on(e, r), this;
};
$e.prototype.off = $e.prototype.removeListener = $e.prototype.removeAllListeners = $e.prototype.removeEventListener = function(e, t) {
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
$e.prototype.emit = function(e) {
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
$e.prototype.emitReserved = $e.prototype.emit;
$e.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
$e.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const ot = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();
function Ei(e, ...t) {
  return t.reduce((r, n) => (e.hasOwnProperty(n) && (r[n] = e[n]), r), {});
}
const ba = ot.setTimeout, ga = ot.clearTimeout;
function pn(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = ba.bind(ot), e.clearTimeoutFn = ga.bind(ot)) : (e.setTimeoutFn = ot.setTimeout.bind(ot), e.clearTimeoutFn = ot.clearTimeout.bind(ot));
}
const ya = 1.33;
function ma(e) {
  return typeof e == "string" ? _a(e) : Math.ceil((e.byteLength || e.size) * ya);
}
function _a(e) {
  let t = 0, r = 0;
  for (let n = 0, i = e.length; n < i; n++)
    t = e.charCodeAt(n), t < 128 ? r += 1 : t < 2048 ? r += 2 : t < 55296 || t >= 57344 ? r += 3 : (n++, r += 4);
  return r;
}
class wa extends Error {
  constructor(t, r, n) {
    super(t), this.description = r, this.context = n, this.type = "TransportError";
  }
}
class ki extends $e {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, pn(this, t), this.opts = t, this.query = t.query, this.socket = t.socket;
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
    return super.emitReserved("error", new wa(t, r, n)), this;
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
    const r = yi(t, this.socket.binaryType);
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
const Si = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), zn = 64, Ea = {};
let j0 = 0, gr = 0, X0;
function Q0(e) {
  let t = "";
  do
    t = Si[e % zn] + t, e = Math.floor(e / zn);
  while (e > 0);
  return t;
}
function Ci() {
  const e = Q0(+/* @__PURE__ */ new Date());
  return e !== X0 ? (j0 = 0, X0 = e) : e + "." + Q0(j0++);
}
for (; gr < zn; gr++)
  Ea[Si[gr]] = gr;
function Ai(e) {
  let t = "";
  for (let r in e)
    e.hasOwnProperty(r) && (t.length && (t += "&"), t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
  return t;
}
function ka(e) {
  let t = {}, r = e.split("&");
  for (let n = 0, i = r.length; n < i; n++) {
    let s = r[n].split("=");
    t[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return t;
}
let Bi = !1;
try {
  Bi = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Sa = Bi;
function Ti(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || Sa))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new ot[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function Ca() {
}
const Aa = function() {
  return new Ti({
    xdomain: !1
  }).responseType != null;
}();
class Ba extends ki {
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
    this.supportsBinary = Aa && !r;
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
    va(t, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
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
    this.writable = !1, pa(t, (r) => {
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
    this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = Ci()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.opts.port && (r === "https" && Number(this.opts.port) !== 443 || r === "http" && Number(this.opts.port) !== 80) && (n = ":" + this.opts.port);
    const i = Ai(t), s = this.opts.hostname.indexOf(":") !== -1;
    return r + "://" + (s ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(t = {}) {
    return Object.assign(t, { xd: this.xd, xs: this.xs }, this.opts), new gt(this.uri(), t);
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
    const t = this.request();
    t.on("data", this.onData.bind(this)), t.on("error", (r, n) => {
      this.onError("xhr poll error", r, n);
    }), this.pollXhr = t;
  }
}
class gt extends $e {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, r) {
    super(), pn(this, r), this.opts = r, this.method = r.method || "GET", this.uri = t, this.async = r.async !== !1, this.data = r.data !== void 0 ? r.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    const t = Ei(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    t.xdomain = !!this.opts.xd, t.xscheme = !!this.opts.xs;
    const r = this.xhr = new Ti(t);
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
    typeof document < "u" && (this.index = gt.requestsCount++, gt.requests[this.index] = this);
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
      if (this.xhr.onreadystatechange = Ca, t)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete gt.requests[this.index], this.xhr = null;
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
gt.requestsCount = 0;
gt.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", J0);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in ot ? "pagehide" : "unload";
    addEventListener(e, J0, !1);
  }
}
function J0() {
  for (let e in gt.requests)
    gt.requests.hasOwnProperty(e) && gt.requests[e].abort();
}
const Ri = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, r) => r(t, 0))(), yr = ot.WebSocket || ot.MozWebSocket, ei = !0, Ta = "arraybuffer", ti = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Ra extends ki {
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
    const t = this.uri(), r = this.opts.protocols, n = ti ? {} : Ei(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = ei && !ti ? r ? new yr(t, r) : new yr(t) : new yr(t, r, n);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this.ws.binaryType = this.socket.binaryType || Ta, this.addEventListeners();
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
      gi(n, this.supportsBinary, (s) => {
        const c = {};
        try {
          ei && this.ws.send(s);
        } catch {
        }
        i && Ri(() => {
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
    this.opts.port && (r === "wss" && Number(this.opts.port) !== 443 || r === "ws" && Number(this.opts.port) !== 80) && (n = ":" + this.opts.port), this.opts.timestampRequests && (t[this.opts.timestampParam] = Ci()), this.supportsBinary || (t.b64 = 1);
    const i = Ai(t), s = this.opts.hostname.indexOf(":") !== -1;
    return r + "://" + (s ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (i.length ? "?" + i : "");
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
const La = {
  websocket: Ra,
  polling: Ba
}, Oa = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Na = [
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
function Fn(e) {
  const t = e, r = e.indexOf("["), n = e.indexOf("]");
  r != -1 && n != -1 && (e = e.substring(0, r) + e.substring(r, n).replace(/:/g, ";") + e.substring(n, e.length));
  let i = Oa.exec(e || ""), s = {}, c = 14;
  for (; c--; )
    s[Na[c]] = i[c] || "";
  return r != -1 && n != -1 && (s.source = t, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = Da(s, s.path), s.queryKey = Ia(s, s.query), s;
}
function Da(e, t) {
  const r = /\/{2,9}/g, n = t.replace(r, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && n.splice(0, 1), t.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function Ia(e, t) {
  const r = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, i, s) {
    i && (r[i] = s);
  }), r;
}
let Li = class Ut extends $e {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, r = {}) {
    super(), this.writeBuffer = [], t && typeof t == "object" && (r = t, t = null), t ? (t = Fn(t), r.hostname = t.host, r.secure = t.protocol === "https" || t.protocol === "wss", r.port = t.port, t.query && (r.query = t.query)) : r.host && (r.hostname = Fn(r.host).host), pn(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = r.transports || ["polling", "websocket"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
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
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = ka(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
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
    r.EIO = wi, r.transport = t, this.id && (r.sid = this.id);
    const n = Object.assign({}, this.opts.transportOptions[t], this.opts, {
      query: r,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new La[t](n);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let t;
    if (this.opts.rememberUpgrade && Ut.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
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
    Ut.priorWebsocketSuccess = !1;
    const i = () => {
      n || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (l) => {
        if (!n)
          if (l.type === "pong" && l.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            Ut.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (d(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush());
            });
          } else {
            const a = new Error("probe error");
            a.transport = r.name, this.emitReserved("upgradeError", a);
          }
      }));
    };
    function s() {
      n || (n = !0, d(), r.close(), r = null);
    }
    const c = (l) => {
      const a = new Error("probe error: " + l);
      a.transport = r.name, s(), this.emitReserved("upgradeError", a);
    };
    function f() {
      c("transport closed");
    }
    function h() {
      c("socket closed");
    }
    function o(l) {
      r && l.name !== r.name && s();
    }
    const d = () => {
      r.removeListener("open", i), r.removeListener("error", c), r.removeListener("close", f), this.off("close", h), this.off("upgrading", o);
    };
    r.once("open", i), r.once("error", c), r.once("close", f), this.once("close", h), this.once("upgrading", o), r.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", Ut.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
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
      if (i && (r += ma(i)), n > 0 && r > this.maxPayload)
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
    const s = {
      type: t,
      data: r,
      options: n
    };
    this.emitReserved("packetCreate", s), this.writeBuffer.push(s), i && this.once("flush", i), this.flush();
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
    Ut.priorWebsocketSuccess = !1, this.emitReserved("error", t), this.onClose("transport error", t);
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
Li.protocol = wi;
function Pa(e, t = "", r) {
  let n = e;
  r = r || typeof location < "u" && location, e == null && (e = r.protocol + "//" + r.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = r.protocol + e : e = r.host + e), /^(https?|wss?):\/\//.test(e) || (typeof r < "u" ? e = r.protocol + "//" + e : e = "https://" + e), n = Fn(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const s = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + s + ":" + n.port + t, n.href = n.protocol + "://" + s + (r && r.port === n.port ? "" : ":" + n.port), n;
}
const $a = typeof ArrayBuffer == "function", Ma = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Oi = Object.prototype.toString, za = typeof Blob == "function" || typeof Blob < "u" && Oi.call(Blob) === "[object BlobConstructor]", Fa = typeof File == "function" || typeof File < "u" && Oi.call(File) === "[object FileConstructor]";
function e0(e) {
  return $a && (e instanceof ArrayBuffer || Ma(e)) || za && e instanceof Blob || Fa && e instanceof File;
}
function wr(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let r = 0, n = e.length; r < n; r++)
      if (wr(e[r]))
        return !0;
    return !1;
  }
  if (e0(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return wr(e.toJSON(), !0);
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && wr(e[r]))
      return !0;
  return !1;
}
function Ha(e) {
  const t = [], r = e.data, n = e;
  return n.data = Hn(r, t), n.attachments = t.length, { packet: n, buffers: t };
}
function Hn(e, t) {
  if (!e)
    return e;
  if (e0(e)) {
    const r = { _placeholder: !0, num: t.length };
    return t.push(e), r;
  } else if (Array.isArray(e)) {
    const r = new Array(e.length);
    for (let n = 0; n < e.length; n++)
      r[n] = Hn(e[n], t);
    return r;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const r = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (r[n] = Hn(e[n], t));
    return r;
  }
  return e;
}
function qa(e, t) {
  return e.data = qn(e.data, t), delete e.attachments, e;
}
function qn(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let r = 0; r < e.length; r++)
      e[r] = qn(e[r], t);
  else if (typeof e == "object")
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (e[r] = qn(e[r], t));
  return e;
}
const Ua = 5;
var me;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(me || (me = {}));
class Wa {
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
    return (t.type === me.EVENT || t.type === me.ACK) && wr(t) ? this.encodeAsBinary({
      type: t.type === me.EVENT ? me.BINARY_EVENT : me.BINARY_ACK,
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
    return (t.type === me.BINARY_EVENT || t.type === me.BINARY_ACK) && (r += t.attachments + "-"), t.nsp && t.nsp !== "/" && (r += t.nsp + ","), t.id != null && (r += t.id), t.data != null && (r += JSON.stringify(t.data, this.replacer)), r;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const r = Ha(t), n = this.encodeAsString(r.packet), i = r.buffers;
    return i.unshift(n), i;
  }
}
class t0 extends $e {
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
      const n = r.type === me.BINARY_EVENT;
      n || r.type === me.BINARY_ACK ? (r.type = n ? me.EVENT : me.ACK, this.reconstructor = new Va(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (e0(t) || t.base64)
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
    if (me[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === me.BINARY_EVENT || n.type === me.BINARY_ACK) {
      const s = r + 1;
      for (; t.charAt(++r) !== "-" && r != t.length; )
        ;
      const c = t.substring(s, r);
      if (c != Number(c) || t.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(c);
    }
    if (t.charAt(r + 1) === "/") {
      const s = r + 1;
      for (; ++r && !(t.charAt(r) === "," || r === t.length); )
        ;
      n.nsp = t.substring(s, r);
    } else
      n.nsp = "/";
    const i = t.charAt(r + 1);
    if (i !== "" && Number(i) == i) {
      const s = r + 1;
      for (; ++r; ) {
        const c = t.charAt(r);
        if (c == null || Number(c) != c) {
          --r;
          break;
        }
        if (r === t.length)
          break;
      }
      n.id = Number(t.substring(s, r + 1));
    }
    if (t.charAt(++r)) {
      const s = this.tryParse(t.substr(r));
      if (t0.isPayloadValid(n.type, s))
        n.data = s;
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
      case me.CONNECT:
        return typeof r == "object";
      case me.DISCONNECT:
        return r === void 0;
      case me.CONNECT_ERROR:
        return typeof r == "string" || typeof r == "object";
      case me.EVENT:
      case me.BINARY_EVENT:
        return Array.isArray(r) && r.length > 0;
      case me.ACK:
      case me.BINARY_ACK:
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
class Va {
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
      const r = qa(this.reconPack, this.buffers);
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
const Ya = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: t0,
  Encoder: Wa,
  get PacketType() {
    return me;
  },
  protocol: Ua
}, Symbol.toStringTag, { value: "Module" }));
function lt(e, t, r) {
  return e.on(t, r), function() {
    e.off(t, r);
  };
}
const Ka = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Ni extends $e {
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
      lt(t, "open", this.onopen.bind(this)),
      lt(t, "packet", this.onpacket.bind(this)),
      lt(t, "error", this.onerror.bind(this)),
      lt(t, "close", this.onclose.bind(this))
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
    if (Ka.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (r.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(r), this;
    const n = {
      type: me.EVENT,
      data: r
    };
    if (n.options = {}, n.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
      const c = this.ids++, f = r.pop();
      this._registerAckCallback(c, f), n.id = c;
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
    const s = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let c = 0; c < this.sendBuffer.length; c++)
        this.sendBuffer[c].id === t && this.sendBuffer.splice(c, 1);
      r.call(this, new Error("operation has timed out"));
    }, i);
    this.acks[t] = (...c) => {
      this.io.clearTimeoutFn(s), r.apply(this, [null, ...c]);
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
    return new Promise((i, s) => {
      r.push((c, f) => n ? c ? s(c) : i(f) : i(c)), this.emit(t, ...r);
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
    t.push((i, ...s) => n !== this._queue[0] ? void 0 : (i !== null ? n.tryCount > this._opts.retries && (this._queue.shift(), r && r(i)) : (this._queue.shift(), r && r(null, ...s)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue();
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
      type: me.CONNECT,
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
        case me.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case me.EVENT:
        case me.BINARY_EVENT:
          this.onevent(t);
          break;
        case me.ACK:
        case me.BINARY_ACK:
          this.onack(t);
          break;
        case me.DISCONNECT:
          this.ondisconnect();
          break;
        case me.CONNECT_ERROR:
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
        type: me.ACK,
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
    return this.connected && this.packet({ type: me.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function Zt(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
Zt.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), r = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + r : e - r;
  }
  return Math.min(e, this.max) | 0;
};
Zt.prototype.reset = function() {
  this.attempts = 0;
};
Zt.prototype.setMin = function(e) {
  this.ms = e;
};
Zt.prototype.setMax = function(e) {
  this.max = e;
};
Zt.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Un extends $e {
  constructor(t, r) {
    var n;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (r = t, t = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, pn(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((n = r.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new Zt({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = t;
    const i = r.parser || Ya;
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
    this.engine = new Li(this.uri, this.opts);
    const r = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = lt(r, "open", function() {
      n.onopen(), t && t();
    }), s = lt(r, "error", (c) => {
      n.cleanup(), n._readyState = "closed", this.emitReserved("error", c), t ? t(c) : n.maybeReconnectOnOpen();
    });
    if (this._timeout !== !1) {
      const c = this._timeout;
      c === 0 && i();
      const f = this.setTimeoutFn(() => {
        i(), r.close(), r.emit("error", new Error("timeout"));
      }, c);
      this.opts.autoUnref && f.unref(), this.subs.push(function() {
        clearTimeout(f);
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
    this.subs.push(lt(t, "ping", this.onping.bind(this)), lt(t, "data", this.ondata.bind(this)), lt(t, "error", this.onerror.bind(this)), lt(t, "close", this.onclose.bind(this)), lt(this.decoder, "decoded", this.ondecoded.bind(this)));
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
    Ri(() => {
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
    return n ? this._autoConnect && !n.active && n.connect() : (n = new Ni(this, t, r), this.nsps[t] = n), n;
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
const tr = {};
function On(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const r = Pa(e, t.path || "/socket.io"), n = r.source, i = r.id, s = r.path, c = tr[i] && s in tr[i].nsps, f = t.forceNew || t["force new connection"] || t.multiplex === !1 || c;
  let h;
  return f ? h = new Un(n, t) : (tr[i] || (tr[i] = new Un(n, t)), h = tr[i]), r.query && !t.query && (t.query = r.queryKey), h.socket(r.path, t);
}
Object.assign(On, {
  Manager: Un,
  Socket: Ni,
  io: On,
  connect: On
});
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Wt = 9e15, Nt = 1e9, Wn = "0123456789abcdef", cn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", fn = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Vn = {
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
  minE: -Wt,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Wt,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Di, At, he = !0, vn = "[DecimalError] ", Ot = vn + "Invalid argument: ", Ii = vn + "Precision limit exceeded", Pi = vn + "crypto unavailable", $i = "[object Decimal]", Ke = Math.floor, Fe = Math.pow, Ga = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Za = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, ja = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Mi = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, ht = 1e7, fe = 7, Xa = 9007199254740991, Qa = cn.length - 1, Yn = fn.length - 1, Y = { toStringTag: $i };
Y.absoluteValue = Y.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), oe(e);
};
Y.ceil = function() {
  return oe(new this.constructor(this), this.e + 1, 2);
};
Y.clampedTo = Y.clamp = function(e, t) {
  var r, n = this, i = n.constructor;
  if (e = new i(e), t = new i(t), !e.s || !t.s)
    return new i(NaN);
  if (e.gt(t))
    throw Error(Ot + t);
  return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
};
Y.comparedTo = Y.cmp = function(e) {
  var t, r, n, i, s = this, c = s.d, f = (e = new s.constructor(e)).d, h = s.s, o = e.s;
  if (!c || !f)
    return !h || !o ? NaN : h !== o ? h : c === f ? 0 : !c ^ h < 0 ? 1 : -1;
  if (!c[0] || !f[0])
    return c[0] ? h : f[0] ? -o : 0;
  if (h !== o)
    return h;
  if (s.e !== e.e)
    return s.e > e.e ^ h < 0 ? 1 : -1;
  for (n = c.length, i = f.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (c[t] !== f[t])
      return c[t] > f[t] ^ h < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ h < 0 ? 1 : -1;
};
Y.cosine = Y.cos = function() {
  var e, t, r = this, n = r.constructor;
  return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + fe, n.rounding = 1, r = Ja(n, Ui(n, r)), n.precision = e, n.rounding = t, oe(At == 2 || At == 3 ? r.neg() : r, e, t, !0)) : new n(1) : new n(NaN);
};
Y.cubeRoot = Y.cbrt = function() {
  var e, t, r, n, i, s, c, f, h, o, d = this, l = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new l(d);
  for (he = !1, s = d.s * Fe(d.s * d, 1 / 3), !s || Math.abs(s) == 1 / 0 ? (r = Ye(d.d), e = d.e, (s = (e - r.length + 1) % 3) && (r += s == 1 || s == -2 ? "0" : "00"), s = Fe(r, 1 / 3), e = Ke((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), s == 1 / 0 ? r = "5e" + e : (r = s.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new l(r), n.s = d.s) : n = new l(s.toString()), c = (e = l.precision) + 3; ; )
    if (f = n, h = f.times(f).times(f), o = h.plus(d), n = Se(o.plus(d).times(f), o.plus(h), c + 2, 1), Ye(f.d).slice(0, c) === (r = Ye(n.d)).slice(0, c))
      if (r = r.slice(c - 3, c + 1), r == "9999" || !i && r == "4999") {
        if (!i && (oe(f, e + 1, 0), f.times(f).times(f).eq(d))) {
          n = f;
          break;
        }
        c += 4, i = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (oe(n, e + 1, 1), t = !n.times(n).times(n).eq(d));
        break;
      }
  return he = !0, oe(n, e, l.rounding, t);
};
Y.decimalPlaces = Y.dp = function() {
  var e, t = this.d, r = NaN;
  if (t) {
    if (e = t.length - 1, r = (e - Ke(this.e / fe)) * fe, e = t[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
Y.dividedBy = Y.div = function(e) {
  return Se(this, new this.constructor(e));
};
Y.dividedToIntegerBy = Y.divToInt = function(e) {
  var t = this, r = t.constructor;
  return oe(Se(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
Y.equals = Y.eq = function(e) {
  return this.cmp(e) === 0;
};
Y.floor = function() {
  return oe(new this.constructor(this), this.e + 1, 3);
};
Y.greaterThan = Y.gt = function(e) {
  return this.cmp(e) > 0;
};
Y.greaterThanOrEqualTo = Y.gte = function(e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
Y.hyperbolicCosine = Y.cosh = function() {
  var e, t, r, n, i, s = this, c = s.constructor, f = new c(1);
  if (!s.isFinite())
    return new c(s.s ? 1 / 0 : NaN);
  if (s.isZero())
    return f;
  r = c.precision, n = c.rounding, c.precision = r + Math.max(s.e, s.sd()) + 4, c.rounding = 1, i = s.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / bn(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), s = Gt(c, 1, s.times(t), new c(1), !0);
  for (var h, o = e, d = new c(8); o--; )
    h = s.times(s), s = f.minus(h.times(d.minus(h.times(d))));
  return oe(s, c.precision = r, c.rounding = n, !0);
};
Y.hyperbolicSine = Y.sinh = function() {
  var e, t, r, n, i = this, s = i.constructor;
  if (!i.isFinite() || i.isZero())
    return new s(i);
  if (t = s.precision, r = s.rounding, s.precision = t + Math.max(i.e, i.sd()) + 4, s.rounding = 1, n = i.d.length, n < 3)
    i = Gt(s, 2, i, i, !0);
  else {
    e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / bn(5, e)), i = Gt(s, 2, i, i, !0);
    for (var c, f = new s(5), h = new s(16), o = new s(20); e--; )
      c = i.times(i), i = i.times(f.plus(c.times(h.times(c).plus(o))));
  }
  return s.precision = t, s.rounding = r, oe(i, t, r, !0);
};
Y.hyperbolicTangent = Y.tanh = function() {
  var e, t, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, Se(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
};
Y.inverseCosine = Y.acos = function() {
  var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, s = r.rounding;
  return n !== -1 ? n === 0 ? t.isNeg() ? dt(r, i, s) : new r(0) : new r(NaN) : t.isZero() ? dt(r, i + 4, s).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = dt(r, i + 4, s).times(0.5), r.precision = i, r.rounding = s, e.minus(t));
};
Y.inverseHyperbolicCosine = Y.acosh = function() {
  var e, t, r = this, n = r.constructor;
  return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, he = !1, r = r.times(r).minus(1).sqrt().plus(r), he = !0, n.precision = e, n.rounding = t, r.ln()) : new n(r);
};
Y.inverseHyperbolicSine = Y.asinh = function() {
  var e, t, r = this, n = r.constructor;
  return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, he = !1, r = r.times(r).plus(1).sqrt().plus(r), he = !0, n.precision = e, n.rounding = t, r.ln());
};
Y.inverseHyperbolicTangent = Y.atanh = function() {
  var e, t, r, n, i = this, s = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = s.precision, t = s.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? oe(new s(i), e, t, !0) : (s.precision = r = n - i.e, i = Se(i.plus(1), new s(1).minus(i), r + e, 1), s.precision = e + 4, s.rounding = 1, i = i.ln(), s.precision = e, s.rounding = t, i.times(0.5))) : new s(NaN);
};
Y.inverseSine = Y.asin = function() {
  var e, t, r, n, i = this, s = i.constructor;
  return i.isZero() ? new s(i) : (t = i.abs().cmp(1), r = s.precision, n = s.rounding, t !== -1 ? t === 0 ? (e = dt(s, r + 4, n).times(0.5), e.s = i.s, e) : new s(NaN) : (s.precision = r + 6, s.rounding = 1, i = i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan(), s.precision = r, s.rounding = n, i.times(2)));
};
Y.inverseTangent = Y.atan = function() {
  var e, t, r, n, i, s, c, f, h, o = this, d = o.constructor, l = d.precision, a = d.rounding;
  if (o.isFinite()) {
    if (o.isZero())
      return new d(o);
    if (o.abs().eq(1) && l + 4 <= Yn)
      return c = dt(d, l + 4, a).times(0.25), c.s = o.s, c;
  } else {
    if (!o.s)
      return new d(NaN);
    if (l + 4 <= Yn)
      return c = dt(d, l + 4, a).times(0.5), c.s = o.s, c;
  }
  for (d.precision = f = l + 10, d.rounding = 1, r = Math.min(28, f / fe + 2 | 0), e = r; e; --e)
    o = o.div(o.times(o).plus(1).sqrt().plus(1));
  for (he = !1, t = Math.ceil(f / fe), n = 1, h = o.times(o), c = new d(o), i = o; e !== -1; )
    if (i = i.times(h), s = c.minus(i.div(n += 2)), i = i.times(h), c = s.plus(i.div(n += 2)), c.d[t] !== void 0)
      for (e = t; c.d[e] === s.d[e] && e--; )
        ;
  return r && (c = c.times(2 << r - 1)), he = !0, oe(c, d.precision = l, d.rounding = a, !0);
};
Y.isFinite = function() {
  return !!this.d;
};
Y.isInteger = Y.isInt = function() {
  return !!this.d && Ke(this.e / fe) > this.d.length - 2;
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
  var t, r, n, i, s, c, f, h, o = this, d = o.constructor, l = d.precision, a = d.rounding, u = 5;
  if (e == null)
    e = new d(10), t = !0;
  else {
    if (e = new d(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
      return new d(NaN);
    t = e.eq(10);
  }
  if (r = o.d, o.s < 0 || !r || !r[0] || o.eq(1))
    return new d(r && !r[0] ? -1 / 0 : o.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (t)
    if (r.length > 1)
      s = !0;
    else {
      for (i = r[0]; i % 10 === 0; )
        i /= 10;
      s = i !== 1;
    }
  if (he = !1, f = l + u, c = Lt(o, f), n = t ? un(d, f + 10) : Lt(e, f), h = Se(c, n, f, 1), fr(h.d, i = l, a))
    do
      if (f += 10, c = Lt(o, f), n = t ? un(d, f + 10) : Lt(e, f), h = Se(c, n, f, 1), !s) {
        +Ye(h.d).slice(i + 1, i + 15) + 1 == 1e14 && (h = oe(h, l + 1, 0));
        break;
      }
    while (fr(h.d, i += 10, a));
  return he = !0, oe(h, l, a);
};
Y.minus = Y.sub = function(e) {
  var t, r, n, i, s, c, f, h, o, d, l, a, u = this, x = u.constructor;
  if (e = new x(e), !u.d || !e.d)
    return !u.s || !e.s ? e = new x(NaN) : u.d ? e.s = -e.s : e = new x(e.d || u.s !== e.s ? u : NaN), e;
  if (u.s != e.s)
    return e.s = -e.s, u.plus(e);
  if (o = u.d, a = e.d, f = x.precision, h = x.rounding, !o[0] || !a[0]) {
    if (a[0])
      e.s = -e.s;
    else if (o[0])
      e = new x(u);
    else
      return new x(h === 3 ? -0 : 0);
    return he ? oe(e, f, h) : e;
  }
  if (r = Ke(e.e / fe), d = Ke(u.e / fe), o = o.slice(), s = d - r, s) {
    for (l = s < 0, l ? (t = o, s = -s, c = a.length) : (t = a, r = d, c = o.length), n = Math.max(Math.ceil(f / fe), c) + 2, s > n && (s = n, t.length = 1), t.reverse(), n = s; n--; )
      t.push(0);
    t.reverse();
  } else {
    for (n = o.length, c = a.length, l = n < c, l && (c = n), n = 0; n < c; n++)
      if (o[n] != a[n]) {
        l = o[n] < a[n];
        break;
      }
    s = 0;
  }
  for (l && (t = o, o = a, a = t, e.s = -e.s), c = o.length, n = a.length - c; n > 0; --n)
    o[c++] = 0;
  for (n = a.length; n > s; ) {
    if (o[--n] < a[n]) {
      for (i = n; i && o[--i] === 0; )
        o[i] = ht - 1;
      --o[i], o[n] += ht;
    }
    o[n] -= a[n];
  }
  for (; o[--c] === 0; )
    o.pop();
  for (; o[0] === 0; o.shift())
    --r;
  return o[0] ? (e.d = o, e.e = xn(o, r), he ? oe(e, f, h) : e) : new x(h === 3 ? -0 : 0);
};
Y.modulo = Y.mod = function(e) {
  var t, r = this, n = r.constructor;
  return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? oe(new n(r), n.precision, n.rounding) : (he = !1, n.modulo == 9 ? (t = Se(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = Se(r, e, 0, n.modulo, 1), t = t.times(e), he = !0, r.minus(t));
};
Y.naturalExponential = Y.exp = function() {
  return Kn(this);
};
Y.naturalLogarithm = Y.ln = function() {
  return Lt(this);
};
Y.negated = Y.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, oe(e);
};
Y.plus = Y.add = function(e) {
  var t, r, n, i, s, c, f, h, o, d, l = this, a = l.constructor;
  if (e = new a(e), !l.d || !e.d)
    return !l.s || !e.s ? e = new a(NaN) : l.d || (e = new a(e.d || l.s === e.s ? l : NaN)), e;
  if (l.s != e.s)
    return e.s = -e.s, l.minus(e);
  if (o = l.d, d = e.d, f = a.precision, h = a.rounding, !o[0] || !d[0])
    return d[0] || (e = new a(l)), he ? oe(e, f, h) : e;
  if (s = Ke(l.e / fe), n = Ke(e.e / fe), o = o.slice(), i = s - n, i) {
    for (i < 0 ? (r = o, i = -i, c = d.length) : (r = d, n = s, c = o.length), s = Math.ceil(f / fe), c = s > c ? s + 1 : c + 1, i > c && (i = c, r.length = 1), r.reverse(); i--; )
      r.push(0);
    r.reverse();
  }
  for (c = o.length, i = d.length, c - i < 0 && (i = c, r = d, d = o, o = r), t = 0; i; )
    t = (o[--i] = o[i] + d[i] + t) / ht | 0, o[i] %= ht;
  for (t && (o.unshift(t), ++n), c = o.length; o[--c] == 0; )
    o.pop();
  return e.d = o, e.e = xn(o, n), he ? oe(e, f, h) : e;
};
Y.precision = Y.sd = function(e) {
  var t, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Ot + e);
  return r.d ? (t = zi(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
};
Y.round = function() {
  var e = this, t = e.constructor;
  return oe(new t(e), e.e + 1, t.rounding);
};
Y.sine = Y.sin = function() {
  var e, t, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + fe, n.rounding = 1, r = tc(n, Ui(n, r)), n.precision = e, n.rounding = t, oe(At > 2 ? r.neg() : r, e, t, !0)) : new n(NaN);
};
Y.squareRoot = Y.sqrt = function() {
  var e, t, r, n, i, s, c = this, f = c.d, h = c.e, o = c.s, d = c.constructor;
  if (o !== 1 || !f || !f[0])
    return new d(!o || o < 0 && (!f || f[0]) ? NaN : f ? c : 1 / 0);
  for (he = !1, o = Math.sqrt(+c), o == 0 || o == 1 / 0 ? (t = Ye(f), (t.length + h) % 2 == 0 && (t += "0"), o = Math.sqrt(t), h = Ke((h + 1) / 2) - (h < 0 || h % 2), o == 1 / 0 ? t = "5e" + h : (t = o.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + h), n = new d(t)) : n = new d(o.toString()), r = (h = d.precision) + 3; ; )
    if (s = n, n = s.plus(Se(c, s, r + 2, 1)).times(0.5), Ye(s.d).slice(0, r) === (t = Ye(n.d)).slice(0, r))
      if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
        if (!i && (oe(s, h + 1, 0), s.times(s).eq(c))) {
          n = s;
          break;
        }
        r += 4, i = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (oe(n, h + 1, 1), e = !n.times(n).eq(c));
        break;
      }
  return he = !0, oe(n, h, d.rounding, e);
};
Y.tangent = Y.tan = function() {
  var e, t, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = Se(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, oe(At == 2 || At == 4 ? r.neg() : r, e, t, !0)) : new n(NaN);
};
Y.times = Y.mul = function(e) {
  var t, r, n, i, s, c, f, h, o, d = this, l = d.constructor, a = d.d, u = (e = new l(e)).d;
  if (e.s *= d.s, !a || !a[0] || !u || !u[0])
    return new l(!e.s || a && !a[0] && !u || u && !u[0] && !a ? NaN : !a || !u ? e.s / 0 : e.s * 0);
  for (r = Ke(d.e / fe) + Ke(e.e / fe), h = a.length, o = u.length, h < o && (s = a, a = u, u = s, c = h, h = o, o = c), s = [], c = h + o, n = c; n--; )
    s.push(0);
  for (n = o; --n >= 0; ) {
    for (t = 0, i = h + n; i > n; )
      f = s[i] + u[n] * a[i - n - 1] + t, s[i--] = f % ht | 0, t = f / ht | 0;
    s[i] = (s[i] + t) % ht | 0;
  }
  for (; !s[--c]; )
    s.pop();
  return t ? ++r : s.shift(), e.d = s, e.e = xn(s, r), he ? oe(e, l.precision, l.rounding) : e;
};
Y.toBinary = function(e, t) {
  return r0(this, 2, e, t);
};
Y.toDecimalPlaces = Y.toDP = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (Qe(e, 0, Nt), t === void 0 ? t = n.rounding : Qe(t, 0, 8), oe(r, e + r.e + 1, t));
};
Y.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = mt(n, !0) : (Qe(e, 0, Nt), t === void 0 ? t = i.rounding : Qe(t, 0, 8), n = oe(new i(n), e + 1, t), r = mt(n, !0, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
};
Y.toFixed = function(e, t) {
  var r, n, i = this, s = i.constructor;
  return e === void 0 ? r = mt(i) : (Qe(e, 0, Nt), t === void 0 ? t = s.rounding : Qe(t, 0, 8), n = oe(new s(i), e + i.e + 1, t), r = mt(n, !1, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
};
Y.toFraction = function(e) {
  var t, r, n, i, s, c, f, h, o, d, l, a, u = this, x = u.d, p = u.constructor;
  if (!x)
    return new p(u);
  if (o = r = new p(1), n = h = new p(0), t = new p(n), s = t.e = zi(x) - u.e - 1, c = s % fe, t.d[0] = Fe(10, c < 0 ? fe + c : c), e == null)
    e = s > 0 ? t : o;
  else {
    if (f = new p(e), !f.isInt() || f.lt(o))
      throw Error(Ot + f);
    e = f.gt(t) ? s > 0 ? t : o : f;
  }
  for (he = !1, f = new p(Ye(x)), d = p.precision, p.precision = s = x.length * fe * 2; l = Se(f, t, 0, 1, 1), i = r.plus(l.times(n)), i.cmp(e) != 1; )
    r = n, n = i, i = o, o = h.plus(l.times(i)), h = i, i = t, t = f.minus(l.times(i)), f = i;
  return i = Se(e.minus(r), n, 0, 1, 1), h = h.plus(i.times(o)), r = r.plus(i.times(n)), h.s = o.s = u.s, a = Se(o, n, s, 1).minus(u).abs().cmp(Se(h, r, s, 1).minus(u).abs()) < 1 ? [o, n] : [h, r], p.precision = d, he = !0, a;
};
Y.toHexadecimal = Y.toHex = function(e, t) {
  return r0(this, 16, e, t);
};
Y.toNearest = function(e, t) {
  var r = this, n = r.constructor;
  if (r = new n(r), e == null) {
    if (!r.d)
      return r;
    e = new n(1), t = n.rounding;
  } else {
    if (e = new n(e), t === void 0 ? t = n.rounding : Qe(t, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (he = !1, r = Se(r, e, 0, t, 1).times(e), he = !0, oe(r)) : (e.s = r.s, r = e), r;
};
Y.toNumber = function() {
  return +this;
};
Y.toOctal = function(e, t) {
  return r0(this, 8, e, t);
};
Y.toPower = Y.pow = function(e) {
  var t, r, n, i, s, c, f = this, h = f.constructor, o = +(e = new h(e));
  if (!f.d || !e.d || !f.d[0] || !e.d[0])
    return new h(Fe(+f, o));
  if (f = new h(f), f.eq(1))
    return f;
  if (n = h.precision, s = h.rounding, e.eq(1))
    return oe(f, n, s);
  if (t = Ke(e.e / fe), t >= e.d.length - 1 && (r = o < 0 ? -o : o) <= Xa)
    return i = Fi(h, f, r, n), e.s < 0 ? new h(1).div(i) : oe(i, n, s);
  if (c = f.s, c < 0) {
    if (t < e.d.length - 1)
      return new h(NaN);
    if (e.d[t] & 1 || (c = 1), f.e == 0 && f.d[0] == 1 && f.d.length == 1)
      return f.s = c, f;
  }
  return r = Fe(+f, o), t = r == 0 || !isFinite(r) ? Ke(o * (Math.log("0." + Ye(f.d)) / Math.LN10 + f.e + 1)) : new h(r + "").e, t > h.maxE + 1 || t < h.minE - 1 ? new h(t > 0 ? c / 0 : 0) : (he = !1, h.rounding = f.s = 1, r = Math.min(12, (t + "").length), i = Kn(e.times(Lt(f, n + r)), n), i.d && (i = oe(i, n + 5, 1), fr(i.d, n, s) && (t = n + 10, i = oe(Kn(e.times(Lt(f, t + r)), t), t + 5, 1), +Ye(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = oe(i, n + 1, 0)))), i.s = c, he = !0, h.rounding = s, oe(i, n, s));
};
Y.toPrecision = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = mt(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (Qe(e, 1, Nt), t === void 0 ? t = i.rounding : Qe(t, 0, 8), n = oe(new i(n), e, t), r = mt(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
};
Y.toSignificantDigits = Y.toSD = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (Qe(e, 1, Nt), t === void 0 ? t = n.rounding : Qe(t, 0, 8)), oe(new n(r), e, t);
};
Y.toString = function() {
  var e = this, t = e.constructor, r = mt(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
Y.truncated = Y.trunc = function() {
  return oe(new this.constructor(this), this.e + 1, 1);
};
Y.valueOf = Y.toJSON = function() {
  var e = this, t = e.constructor, r = mt(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Ye(e) {
  var t, r, n, i = e.length - 1, s = "", c = e[0];
  if (i > 0) {
    for (s += c, t = 1; t < i; t++)
      n = e[t] + "", r = fe - n.length, r && (s += Tt(r)), s += n;
    c = e[t], n = c + "", r = fe - n.length, r && (s += Tt(r));
  } else if (c === 0)
    return "0";
  for (; c % 10 === 0; )
    c /= 10;
  return s + c;
}
function Qe(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Ot + e);
}
function fr(e, t, r, n) {
  var i, s, c, f;
  for (s = e[0]; s >= 10; s /= 10)
    --t;
  return --t < 0 ? (t += fe, i = 0) : (i = Math.ceil((t + 1) / fe), t %= fe), s = Fe(10, fe - t), f = e[i] % s | 0, n == null ? t < 3 ? (t == 0 ? f = f / 100 | 0 : t == 1 && (f = f / 10 | 0), c = r < 4 && f == 99999 || r > 3 && f == 49999 || f == 5e4 || f == 0) : c = (r < 4 && f + 1 == s || r > 3 && f + 1 == s / 2) && (e[i + 1] / s / 100 | 0) == Fe(10, t - 2) - 1 || (f == s / 2 || f == 0) && (e[i + 1] / s / 100 | 0) == 0 : t < 4 ? (t == 0 ? f = f / 1e3 | 0 : t == 1 ? f = f / 100 | 0 : t == 2 && (f = f / 10 | 0), c = (n || r < 4) && f == 9999 || !n && r > 3 && f == 4999) : c = ((n || r < 4) && f + 1 == s || !n && r > 3 && f + 1 == s / 2) && (e[i + 1] / s / 1e3 | 0) == Fe(10, t - 3) - 1, c;
}
function Er(e, t, r) {
  for (var n, i = [0], s, c = 0, f = e.length; c < f; ) {
    for (s = i.length; s--; )
      i[s] *= t;
    for (i[0] += Wn.indexOf(e.charAt(c++)), n = 0; n < i.length; n++)
      i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
  }
  return i.reverse();
}
function Ja(e, t) {
  var r, n, i;
  if (t.isZero())
    return t;
  n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / bn(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = Gt(e, 1, t.times(i), new e(1));
  for (var s = r; s--; ) {
    var c = t.times(t);
    t = c.times(c).minus(c).times(8).plus(1);
  }
  return e.precision -= r, t;
}
var Se = function() {
  function e(n, i, s) {
    var c, f = 0, h = n.length;
    for (n = n.slice(); h--; )
      c = n[h] * i + f, n[h] = c % s | 0, f = c / s | 0;
    return f && n.unshift(f), n;
  }
  function t(n, i, s, c) {
    var f, h;
    if (s != c)
      h = s > c ? 1 : -1;
    else
      for (f = h = 0; f < s; f++)
        if (n[f] != i[f]) {
          h = n[f] > i[f] ? 1 : -1;
          break;
        }
    return h;
  }
  function r(n, i, s, c) {
    for (var f = 0; s--; )
      n[s] -= f, f = n[s] < i[s] ? 1 : 0, n[s] = f * c + n[s] - i[s];
    for (; !n[0] && n.length > 1; )
      n.shift();
  }
  return function(n, i, s, c, f, h) {
    var o, d, l, a, u, x, p, _, R, w, v, g, y, k, E, T, P, S, A, D, N = n.constructor, F = n.s == i.s ? 1 : -1, M = n.d, W = i.d;
    if (!M || !M[0] || !W || !W[0])
      return new N(
        // Return NaN if either NaN, or both Infinity or 0.
        !n.s || !i.s || (M ? W && M[0] == W[0] : !W) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          M && M[0] == 0 || !W ? F * 0 : F / 0
        )
      );
    for (h ? (u = 1, d = n.e - i.e) : (h = ht, u = fe, d = Ke(n.e / u) - Ke(i.e / u)), A = W.length, P = M.length, R = new N(F), w = R.d = [], l = 0; W[l] == (M[l] || 0); l++)
      ;
    if (W[l] > (M[l] || 0) && d--, s == null ? (k = s = N.precision, c = N.rounding) : f ? k = s + (n.e - i.e) + 1 : k = s, k < 0)
      w.push(1), x = !0;
    else {
      if (k = k / u + 2 | 0, l = 0, A == 1) {
        for (a = 0, W = W[0], k++; (l < P || a) && k--; l++)
          E = a * h + (M[l] || 0), w[l] = E / W | 0, a = E % W | 0;
        x = a || l < P;
      } else {
        for (a = h / (W[0] + 1) | 0, a > 1 && (W = e(W, a, h), M = e(M, a, h), A = W.length, P = M.length), T = A, v = M.slice(0, A), g = v.length; g < A; )
          v[g++] = 0;
        D = W.slice(), D.unshift(0), S = W[0], W[1] >= h / 2 && ++S;
        do
          a = 0, o = t(W, v, A, g), o < 0 ? (y = v[0], A != g && (y = y * h + (v[1] || 0)), a = y / S | 0, a > 1 ? (a >= h && (a = h - 1), p = e(W, a, h), _ = p.length, g = v.length, o = t(p, v, _, g), o == 1 && (a--, r(p, A < _ ? D : W, _, h))) : (a == 0 && (o = a = 1), p = W.slice()), _ = p.length, _ < g && p.unshift(0), r(v, p, g, h), o == -1 && (g = v.length, o = t(W, v, A, g), o < 1 && (a++, r(v, A < g ? D : W, g, h))), g = v.length) : o === 0 && (a++, v = [0]), w[l++] = a, o && v[0] ? v[g++] = M[T] || 0 : (v = [M[T]], g = 1);
        while ((T++ < P || v[0] !== void 0) && k--);
        x = v[0] !== void 0;
      }
      w[0] || w.shift();
    }
    if (u == 1)
      R.e = d, Di = x;
    else {
      for (l = 1, a = w[0]; a >= 10; a /= 10)
        l++;
      R.e = l + d * u - 1, oe(R, f ? s + R.e + 1 : s, c, x);
    }
    return R;
  };
}();
function oe(e, t, r, n) {
  var i, s, c, f, h, o, d, l, a, u = e.constructor;
  e:
    if (t != null) {
      if (l = e.d, !l)
        return e;
      for (i = 1, f = l[0]; f >= 10; f /= 10)
        i++;
      if (s = t - i, s < 0)
        s += fe, c = t, d = l[a = 0], h = d / Fe(10, i - c - 1) % 10 | 0;
      else if (a = Math.ceil((s + 1) / fe), f = l.length, a >= f)
        if (n) {
          for (; f++ <= a; )
            l.push(0);
          d = h = 0, i = 1, s %= fe, c = s - fe + 1;
        } else
          break e;
      else {
        for (d = f = l[a], i = 1; f >= 10; f /= 10)
          i++;
        s %= fe, c = s - fe + i, h = c < 0 ? 0 : d / Fe(10, i - c - 1) % 10 | 0;
      }
      if (n = n || t < 0 || l[a + 1] !== void 0 || (c < 0 ? d : d % Fe(10, i - c - 1)), o = r < 4 ? (h || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : h > 5 || h == 5 && (r == 4 || n || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (s > 0 ? c > 0 ? d / Fe(10, i - c) : 0 : l[a - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !l[0])
        return l.length = 0, o ? (t -= e.e + 1, l[0] = Fe(10, (fe - t % fe) % fe), e.e = -t || 0) : l[0] = e.e = 0, e;
      if (s == 0 ? (l.length = a, f = 1, a--) : (l.length = a + 1, f = Fe(10, fe - s), l[a] = c > 0 ? (d / Fe(10, i - c) % Fe(10, c) | 0) * f : 0), o)
        for (; ; )
          if (a == 0) {
            for (s = 1, c = l[0]; c >= 10; c /= 10)
              s++;
            for (c = l[0] += f, f = 1; c >= 10; c /= 10)
              f++;
            s != f && (e.e++, l[0] == ht && (l[0] = 1));
            break;
          } else {
            if (l[a] += f, l[a] != ht)
              break;
            l[a--] = 0, f = 1;
          }
      for (s = l.length; l[--s] === 0; )
        l.pop();
    }
  return he && (e.e > u.maxE ? (e.d = null, e.e = NaN) : e.e < u.minE && (e.e = 0, e.d = [0])), e;
}
function mt(e, t, r) {
  if (!e.isFinite())
    return qi(e);
  var n, i = e.e, s = Ye(e.d), c = s.length;
  return t ? (r && (n = r - c) > 0 ? s = s.charAt(0) + "." + s.slice(1) + Tt(n) : c > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (s = "0." + Tt(-i - 1) + s, r && (n = r - c) > 0 && (s += Tt(n))) : i >= c ? (s += Tt(i + 1 - c), r && (n = r - i - 1) > 0 && (s = s + "." + Tt(n))) : ((n = i + 1) < c && (s = s.slice(0, n) + "." + s.slice(n)), r && (n = r - c) > 0 && (i + 1 === c && (s += "."), s += Tt(n))), s;
}
function xn(e, t) {
  var r = e[0];
  for (t *= fe; r >= 10; r /= 10)
    t++;
  return t;
}
function un(e, t, r) {
  if (t > Qa)
    throw he = !0, r && (e.precision = r), Error(Ii);
  return oe(new e(cn), t, 1, !0);
}
function dt(e, t, r) {
  if (t > Yn)
    throw Error(Ii);
  return oe(new e(fn), t, r, !0);
}
function zi(e) {
  var t = e.length - 1, r = t * fe + 1;
  if (t = e[t], t) {
    for (; t % 10 == 0; t /= 10)
      r--;
    for (t = e[0]; t >= 10; t /= 10)
      r++;
  }
  return r;
}
function Tt(e) {
  for (var t = ""; e--; )
    t += "0";
  return t;
}
function Fi(e, t, r, n) {
  var i, s = new e(1), c = Math.ceil(n / fe + 4);
  for (he = !1; ; ) {
    if (r % 2 && (s = s.times(t), ni(s.d, c) && (i = !0)), r = Ke(r / 2), r === 0) {
      r = s.d.length - 1, i && s.d[r] === 0 && ++s.d[r];
      break;
    }
    t = t.times(t), ni(t.d, c);
  }
  return he = !0, s;
}
function ri(e) {
  return e.d[e.d.length - 1] & 1;
}
function Hi(e, t, r) {
  for (var n, i = new e(t[0]), s = 0; ++s < t.length; )
    if (n = new e(t[s]), n.s)
      i[r](n) && (i = n);
    else {
      i = n;
      break;
    }
  return i;
}
function Kn(e, t) {
  var r, n, i, s, c, f, h, o = 0, d = 0, l = 0, a = e.constructor, u = a.rounding, x = a.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new a(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (t == null ? (he = !1, h = x) : h = t, f = new a(0.03125); e.e > -2; )
    e = e.times(f), l += 5;
  for (n = Math.log(Fe(2, l)) / Math.LN10 * 2 + 5 | 0, h += n, r = s = c = new a(1), a.precision = h; ; ) {
    if (s = oe(s.times(e), h, 1), r = r.times(++d), f = c.plus(Se(s, r, h, 1)), Ye(f.d).slice(0, h) === Ye(c.d).slice(0, h)) {
      for (i = l; i--; )
        c = oe(c.times(c), h, 1);
      if (t == null)
        if (o < 3 && fr(c.d, h - n, u, o))
          a.precision = h += 10, r = s = f = new a(1), d = 0, o++;
        else
          return oe(c, a.precision = x, u, he = !0);
      else
        return a.precision = x, c;
    }
    c = f;
  }
}
function Lt(e, t) {
  var r, n, i, s, c, f, h, o, d, l, a, u = 1, x = 10, p = e, _ = p.d, R = p.constructor, w = R.rounding, v = R.precision;
  if (p.s < 0 || !_ || !_[0] || !p.e && _[0] == 1 && _.length == 1)
    return new R(_ && !_[0] ? -1 / 0 : p.s != 1 ? NaN : _ ? 0 : p);
  if (t == null ? (he = !1, d = v) : d = t, R.precision = d += x, r = Ye(_), n = r.charAt(0), Math.abs(s = p.e) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      p = p.times(e), r = Ye(p.d), n = r.charAt(0), u++;
    s = p.e, n > 1 ? (p = new R("0." + r), s++) : p = new R(n + "." + r.slice(1));
  } else
    return o = un(R, d + 2, v).times(s + ""), p = Lt(new R(n + "." + r.slice(1)), d - x).plus(o), R.precision = v, t == null ? oe(p, v, w, he = !0) : p;
  for (l = p, h = c = p = Se(p.minus(1), p.plus(1), d, 1), a = oe(p.times(p), d, 1), i = 3; ; ) {
    if (c = oe(c.times(a), d, 1), o = h.plus(Se(c, new R(i), d, 1)), Ye(o.d).slice(0, d) === Ye(h.d).slice(0, d))
      if (h = h.times(2), s !== 0 && (h = h.plus(un(R, d + 2, v).times(s + ""))), h = Se(h, new R(u), d, 1), t == null)
        if (fr(h.d, d - x, w, f))
          R.precision = d += x, o = c = p = Se(l.minus(1), l.plus(1), d, 1), a = oe(p.times(p), d, 1), i = f = 1;
        else
          return oe(h, R.precision = v, w, he = !0);
      else
        return R.precision = v, h;
    h = o, i += 2;
  }
}
function qi(e) {
  return String(e.s * e.s / 0);
}
function Gn(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++)
    ;
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i)
    ;
  if (t = t.slice(n, i), t) {
    if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % fe, r < 0 && (n += fe), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= fe; n < i; )
        e.d.push(+t.slice(n, n += fe));
      t = t.slice(n), n = fe - t.length;
    } else
      n -= i;
    for (; n--; )
      t += "0";
    e.d.push(+t), he && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function ec(e, t) {
  var r, n, i, s, c, f, h, o, d;
  if (t.indexOf("_") > -1) {
    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), Mi.test(t))
      return Gn(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Za.test(t))
    r = 16, t = t.toLowerCase();
  else if (Ga.test(t))
    r = 2;
  else if (ja.test(t))
    r = 8;
  else
    throw Error(Ot + t);
  for (s = t.search(/p/i), s > 0 ? (h = +t.slice(s + 1), t = t.substring(2, s)) : t = t.slice(2), s = t.indexOf("."), c = s >= 0, n = e.constructor, c && (t = t.replace(".", ""), f = t.length, s = f - s, i = Fi(n, new n(r), s, s * 2)), o = Er(t, r, ht), d = o.length - 1, s = d; o[s] === 0; --s)
    o.pop();
  return s < 0 ? new n(e.s * 0) : (e.e = xn(o, d), e.d = o, he = !1, c && (e = Se(e, i, f * 4)), h && (e = e.times(Math.abs(h) < 54 ? Fe(2, h) : ur.pow(2, h))), he = !0, e);
}
function tc(e, t) {
  var r, n = t.d.length;
  if (n < 3)
    return t.isZero() ? t : Gt(e, 2, t, t);
  r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / bn(5, r)), t = Gt(e, 2, t, t);
  for (var i, s = new e(5), c = new e(16), f = new e(20); r--; )
    i = t.times(t), t = t.times(s.plus(i.times(c.times(i).minus(f))));
  return t;
}
function Gt(e, t, r, n, i) {
  var s, c, f, h, o = e.precision, d = Math.ceil(o / fe);
  for (he = !1, h = r.times(r), f = new e(n); ; ) {
    if (c = Se(f.times(h), new e(t++ * t++), o, 1), f = i ? n.plus(c) : n.minus(c), n = Se(c.times(h), new e(t++ * t++), o, 1), c = f.plus(n), c.d[d] !== void 0) {
      for (s = d; c.d[s] === f.d[s] && s--; )
        ;
      if (s == -1)
        break;
    }
    s = f, f = n, n = c, c = s;
  }
  return he = !0, c.d.length = d + 1, c;
}
function bn(e, t) {
  for (var r = e; --t; )
    r *= e;
  return r;
}
function Ui(e, t) {
  var r, n = t.s < 0, i = dt(e, e.precision, 1), s = i.times(0.5);
  if (t = t.abs(), t.lte(s))
    return At = n ? 4 : 1, t;
  if (r = t.divToInt(i), r.isZero())
    At = n ? 3 : 2;
  else {
    if (t = t.minus(r.times(i)), t.lte(s))
      return At = ri(r) ? n ? 2 : 3 : n ? 4 : 1, t;
    At = ri(r) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return t.minus(i).abs();
}
function r0(e, t, r, n) {
  var i, s, c, f, h, o, d, l, a, u = e.constructor, x = r !== void 0;
  if (x ? (Qe(r, 1, Nt), n === void 0 ? n = u.rounding : Qe(n, 0, 8)) : (r = u.precision, n = u.rounding), !e.isFinite())
    d = qi(e);
  else {
    for (d = mt(e), c = d.indexOf("."), x ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, c >= 0 && (d = d.replace(".", ""), a = new u(1), a.e = d.length - c, a.d = Er(mt(a), 10, i), a.e = a.d.length), l = Er(d, 10, i), s = h = l.length; l[--h] == 0; )
      l.pop();
    if (!l[0])
      d = x ? "0p+0" : "0";
    else {
      if (c < 0 ? s-- : (e = new u(e), e.d = l, e.e = s, e = Se(e, a, r, n, 0, i), l = e.d, s = e.e, o = Di), c = l[r], f = i / 2, o = o || l[r + 1] !== void 0, o = n < 4 ? (c !== void 0 || o) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : c > f || c === f && (n === 4 || o || n === 6 && l[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), l.length = r, o)
        for (; ++l[--r] > i - 1; )
          l[r] = 0, r || (++s, l.unshift(1));
      for (h = l.length; !l[h - 1]; --h)
        ;
      for (c = 0, d = ""; c < h; c++)
        d += Wn.charAt(l[c]);
      if (x) {
        if (h > 1)
          if (t == 16 || t == 8) {
            for (c = t == 16 ? 4 : 3, --h; h % c; h++)
              d += "0";
            for (l = Er(d, i, t), h = l.length; !l[h - 1]; --h)
              ;
            for (c = 1, d = "1."; c < h; c++)
              d += Wn.charAt(l[c]);
          } else
            d = d.charAt(0) + "." + d.slice(1);
        d = d + (s < 0 ? "p" : "p+") + s;
      } else if (s < 0) {
        for (; ++s; )
          d = "0" + d;
        d = "0." + d;
      } else if (++s > h)
        for (s -= h; s--; )
          d += "0";
      else
        s < h && (d = d.slice(0, s) + "." + d.slice(s));
    }
    d = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + d;
  }
  return e.s < 0 ? "-" + d : d;
}
function ni(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function rc(e) {
  return new this(e).abs();
}
function nc(e) {
  return new this(e).acos();
}
function ic(e) {
  return new this(e).acosh();
}
function sc(e, t) {
  return new this(e).plus(t);
}
function oc(e) {
  return new this(e).asin();
}
function ac(e) {
  return new this(e).asinh();
}
function cc(e) {
  return new this(e).atan();
}
function fc(e) {
  return new this(e).atanh();
}
function uc(e, t) {
  e = new this(e), t = new this(t);
  var r, n = this.precision, i = this.rounding, s = n + 4;
  return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = dt(this, s, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? dt(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = dt(this, s, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = s, this.rounding = 1, r = this.atan(Se(e, t, s, 1)), t = dt(this, s, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(Se(e, t, s, 1)), r;
}
function lc(e) {
  return new this(e).cbrt();
}
function dc(e) {
  return oe(e = new this(e), e.e + 1, 2);
}
function hc(e, t, r) {
  return new this(e).clamp(t, r);
}
function pc(e) {
  if (!e || typeof e != "object")
    throw Error(vn + "Object expected");
  var t, r, n, i = e.defaults === !0, s = [
    "precision",
    1,
    Nt,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Wt,
    0,
    "toExpPos",
    0,
    Wt,
    "maxE",
    0,
    Wt,
    "minE",
    -Wt,
    0,
    "modulo",
    0,
    9
  ];
  for (t = 0; t < s.length; t += 3)
    if (r = s[t], i && (this[r] = Vn[r]), (n = e[r]) !== void 0)
      if (Ke(n) === n && n >= s[t + 1] && n <= s[t + 2])
        this[r] = n;
      else
        throw Error(Ot + r + ": " + n);
  if (r = "crypto", i && (this[r] = Vn[r]), (n = e[r]) !== void 0)
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Pi);
      else
        this[r] = !1;
    else
      throw Error(Ot + r + ": " + n);
  return this;
}
function vc(e) {
  return new this(e).cos();
}
function xc(e) {
  return new this(e).cosh();
}
function Wi(e) {
  var t, r, n;
  function i(s) {
    var c, f, h, o = this;
    if (!(o instanceof i))
      return new i(s);
    if (o.constructor = i, ii(s)) {
      o.s = s.s, he ? !s.d || s.e > i.maxE ? (o.e = NaN, o.d = null) : s.e < i.minE ? (o.e = 0, o.d = [0]) : (o.e = s.e, o.d = s.d.slice()) : (o.e = s.e, o.d = s.d ? s.d.slice() : s.d);
      return;
    }
    if (h = typeof s, h === "number") {
      if (s === 0) {
        o.s = 1 / s < 0 ? -1 : 1, o.e = 0, o.d = [0];
        return;
      }
      if (s < 0 ? (s = -s, o.s = -1) : o.s = 1, s === ~~s && s < 1e7) {
        for (c = 0, f = s; f >= 10; f /= 10)
          c++;
        he ? c > i.maxE ? (o.e = NaN, o.d = null) : c < i.minE ? (o.e = 0, o.d = [0]) : (o.e = c, o.d = [s]) : (o.e = c, o.d = [s]);
        return;
      } else if (s * 0 !== 0) {
        s || (o.s = NaN), o.e = NaN, o.d = null;
        return;
      }
      return Gn(o, s.toString());
    } else if (h !== "string")
      throw Error(Ot + s);
    return (f = s.charCodeAt(0)) === 45 ? (s = s.slice(1), o.s = -1) : (f === 43 && (s = s.slice(1)), o.s = 1), Mi.test(s) ? Gn(o, s) : ec(o, s);
  }
  if (i.prototype = Y, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = pc, i.clone = Wi, i.isDecimal = ii, i.abs = rc, i.acos = nc, i.acosh = ic, i.add = sc, i.asin = oc, i.asinh = ac, i.atan = cc, i.atanh = fc, i.atan2 = uc, i.cbrt = lc, i.ceil = dc, i.clamp = hc, i.cos = vc, i.cosh = xc, i.div = bc, i.exp = gc, i.floor = yc, i.hypot = mc, i.ln = _c, i.log = wc, i.log10 = kc, i.log2 = Ec, i.max = Sc, i.min = Cc, i.mod = Ac, i.mul = Bc, i.pow = Tc, i.random = Rc, i.round = Lc, i.sign = Oc, i.sin = Nc, i.sinh = Dc, i.sqrt = Ic, i.sub = Pc, i.sum = $c, i.tan = Mc, i.tanh = zc, i.trunc = Fc, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; )
      e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function bc(e, t) {
  return new this(e).div(t);
}
function gc(e) {
  return new this(e).exp();
}
function yc(e) {
  return oe(e = new this(e), e.e + 1, 3);
}
function mc() {
  var e, t, r = new this(0);
  for (he = !1, e = 0; e < arguments.length; )
    if (t = new this(arguments[e++]), t.d)
      r.d && (r = r.plus(t.times(t)));
    else {
      if (t.s)
        return he = !0, new this(1 / 0);
      r = t;
    }
  return he = !0, r.sqrt();
}
function ii(e) {
  return e instanceof ur || e && e.toStringTag === $i || !1;
}
function _c(e) {
  return new this(e).ln();
}
function wc(e, t) {
  return new this(e).log(t);
}
function Ec(e) {
  return new this(e).log(2);
}
function kc(e) {
  return new this(e).log(10);
}
function Sc() {
  return Hi(this, arguments, "lt");
}
function Cc() {
  return Hi(this, arguments, "gt");
}
function Ac(e, t) {
  return new this(e).mod(t);
}
function Bc(e, t) {
  return new this(e).mul(t);
}
function Tc(e, t) {
  return new this(e).pow(t);
}
function Rc(e) {
  var t, r, n, i, s = 0, c = new this(1), f = [];
  if (e === void 0 ? e = this.precision : Qe(e, 1, Nt), n = Math.ceil(e / fe), this.crypto)
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(n)); s < n; )
        i = t[s], i >= 429e7 ? t[s] = crypto.getRandomValues(new Uint32Array(1))[0] : f[s++] = i % 1e7;
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes(n *= 4); s < n; )
        i = t[s] + (t[s + 1] << 8) + (t[s + 2] << 16) + ((t[s + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, s) : (f.push(i % 1e7), s += 4);
      s = n / 4;
    } else
      throw Error(Pi);
  else
    for (; s < n; )
      f[s++] = Math.random() * 1e7 | 0;
  for (n = f[--s], e %= fe, n && e && (i = Fe(10, fe - e), f[s] = (n / i | 0) * i); f[s] === 0; s--)
    f.pop();
  if (s < 0)
    r = 0, f = [0];
  else {
    for (r = -1; f[0] === 0; r -= fe)
      f.shift();
    for (n = 1, i = f[0]; i >= 10; i /= 10)
      n++;
    n < fe && (r -= fe - n);
  }
  return c.e = r, c.d = f, c;
}
function Lc(e) {
  return oe(e = new this(e), e.e + 1, this.rounding);
}
function Oc(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Nc(e) {
  return new this(e).sin();
}
function Dc(e) {
  return new this(e).sinh();
}
function Ic(e) {
  return new this(e).sqrt();
}
function Pc(e, t) {
  return new this(e).sub(t);
}
function $c() {
  var e = 0, t = arguments, r = new this(t[e]);
  for (he = !1; r.s && ++e < t.length; )
    r = r.plus(t[e]);
  return he = !0, oe(r, this.precision, this.rounding);
}
function Mc(e) {
  return new this(e).tan();
}
function zc(e) {
  return new this(e).tanh();
}
function Fc(e) {
  return oe(e = new this(e), e.e + 1, 1);
}
Y[Symbol.for("nodejs.util.inspect.custom")] = Y.toString;
Y[Symbol.toStringTag] = "Decimal";
var ur = Y.constructor = Wi(Vn);
cn = new ur(cn);
fn = new ur(fn);
var si = {}, Hc = {
  get exports() {
    return si;
  },
  set exports(e) {
    si = e;
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
  })(le, function() {
    var r = r || {}, n = document.querySelectorAll.bind(document), i = Object.prototype.toString, s = "ontouchstart" in window;
    function c(v) {
      return v !== null && v === v.window;
    }
    function f(v) {
      return c(v) ? v : v.nodeType === 9 && v.defaultView;
    }
    function h(v) {
      var g = typeof v;
      return g === "function" || g === "object" && !!v;
    }
    function o(v) {
      return h(v) && v.nodeType > 0;
    }
    function d(v) {
      var g = i.call(v);
      return g === "[object String]" ? n(v) : h(v) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(g) && v.hasOwnProperty("length") ? v : o(v) ? [v] : [];
    }
    function l(v) {
      var g, y, k = { top: 0, left: 0 }, E = v && v.ownerDocument;
      return g = E.documentElement, typeof v.getBoundingClientRect < "u" && (k = v.getBoundingClientRect()), y = f(E), {
        top: k.top + y.pageYOffset - g.clientTop,
        left: k.left + y.pageXOffset - g.clientLeft
      };
    }
    function a(v) {
      var g = "";
      for (var y in v)
        v.hasOwnProperty(y) && (g += y + ":" + v[y] + ";");
      return g;
    }
    var u = {
      // Effect duration
      duration: 750,
      // Effect delay (check for scroll before showing effect)
      delay: 200,
      show: function(v, g, y) {
        if (v.button === 2)
          return !1;
        g = g || this;
        var k = document.createElement("div");
        k.className = "waves-ripple waves-rippling", g.appendChild(k);
        var E = l(g), T = 0, P = 0;
        "touches" in v && v.touches.length ? (T = v.touches[0].pageY - E.top, P = v.touches[0].pageX - E.left) : (T = v.pageY - E.top, P = v.pageX - E.left), P = P >= 0 ? P : 0, T = T >= 0 ? T : 0;
        var S = "scale(" + g.clientWidth / 100 * 3 + ")", A = "translate(0,0)";
        y && (A = "translate(" + y.x + "px, " + y.y + "px)"), k.setAttribute("data-hold", Date.now()), k.setAttribute("data-x", P), k.setAttribute("data-y", T), k.setAttribute("data-scale", S), k.setAttribute("data-translate", A);
        var D = {
          top: T + "px",
          left: P + "px"
        };
        k.classList.add("waves-notransition"), k.setAttribute("style", a(D)), k.classList.remove("waves-notransition"), D["-webkit-transform"] = S + " " + A, D["-moz-transform"] = S + " " + A, D["-ms-transform"] = S + " " + A, D["-o-transform"] = S + " " + A, D.transform = S + " " + A, D.opacity = "1";
        var N = v.type === "mousemove" ? 2500 : u.duration;
        D["-webkit-transition-duration"] = N + "ms", D["-moz-transition-duration"] = N + "ms", D["-o-transition-duration"] = N + "ms", D["transition-duration"] = N + "ms", k.setAttribute("style", a(D));
      },
      hide: function(v, g) {
        g = g || this;
        for (var y = g.getElementsByClassName("waves-rippling"), k = 0, E = y.length; k < E; k++)
          p(v, g, y[k]);
        s && (g.removeEventListener("touchend", u.hide), g.removeEventListener("touchcancel", u.hide)), g.removeEventListener("mouseup", u.hide), g.removeEventListener("mouseleave", u.hide);
      }
    }, x = {
      // Wrap <input> tag so it can perform the effect
      input: function(v) {
        var g = v.parentNode;
        if (!(g.tagName.toLowerCase() === "i" && g.classList.contains("waves-effect"))) {
          var y = document.createElement("i");
          y.className = v.className + " waves-input-wrapper", v.className = "waves-button-input", g.replaceChild(y, v), y.appendChild(v);
          var k = window.getComputedStyle(v, null), E = k.color, T = k.backgroundColor;
          y.setAttribute("style", "color:" + E + ";background:" + T), v.setAttribute("style", "background-color:rgba(0,0,0,0);");
        }
      },
      // Wrap <img> tag so it can perform the effect
      img: function(v) {
        var g = v.parentNode;
        if (!(g.tagName.toLowerCase() === "i" && g.classList.contains("waves-effect"))) {
          var y = document.createElement("i");
          g.replaceChild(y, v), y.appendChild(v);
        }
      }
    };
    function p(v, g, y) {
      if (y) {
        y.classList.remove("waves-rippling");
        var k = y.getAttribute("data-x"), E = y.getAttribute("data-y"), T = y.getAttribute("data-scale"), P = y.getAttribute("data-translate"), S = Date.now() - Number(y.getAttribute("data-hold")), A = 350 - S;
        A < 0 && (A = 0), v.type === "mousemove" && (A = 150);
        var D = v.type === "mousemove" ? 2500 : u.duration;
        setTimeout(function() {
          var N = {
            top: E + "px",
            left: k + "px",
            opacity: "0",
            // Duration
            "-webkit-transition-duration": D + "ms",
            "-moz-transition-duration": D + "ms",
            "-o-transition-duration": D + "ms",
            "transition-duration": D + "ms",
            "-webkit-transform": T + " " + P,
            "-moz-transform": T + " " + P,
            "-ms-transform": T + " " + P,
            "-o-transform": T + " " + P,
            transform: T + " " + P
          };
          y.setAttribute("style", a(N)), setTimeout(function() {
            try {
              g.removeChild(y);
            } catch {
              return !1;
            }
          }, D);
        }, A);
      }
    }
    var _ = {
      /* uses an integer rather than bool so there's no issues with
       * needing to clear timeouts if another touch event occurred
       * within the 500ms. Cannot mouseup between touchstart and
       * touchend, nor in the 500ms after touchend. */
      touches: 0,
      allowEvent: function(v) {
        var g = !0;
        return /^(mousedown|mousemove)$/.test(v.type) && _.touches && (g = !1), g;
      },
      registerEvent: function(v) {
        var g = v.type;
        g === "touchstart" ? _.touches += 1 : /^(touchend|touchcancel)$/.test(g) && setTimeout(function() {
          _.touches && (_.touches -= 1);
        }, 500);
      }
    };
    function R(v) {
      if (_.allowEvent(v) === !1)
        return null;
      for (var g = null, y = v.target || v.srcElement; y.parentElement; ) {
        if (!(y instanceof SVGElement) && y.classList.contains("waves-effect")) {
          g = y;
          break;
        }
        y = y.parentElement;
      }
      return g;
    }
    function w(v) {
      var g = R(v);
      if (g !== null) {
        if (g.disabled || g.getAttribute("disabled") || g.classList.contains("disabled"))
          return;
        if (_.registerEvent(v), v.type === "touchstart" && u.delay) {
          var y = !1, k = setTimeout(function() {
            k = null, u.show(v, g);
          }, u.delay), E = function(S) {
            k && (clearTimeout(k), k = null, u.show(v, g)), y || (y = !0, u.hide(S, g)), P();
          }, T = function(S) {
            k && (clearTimeout(k), k = null), E(S), P();
          };
          g.addEventListener("touchmove", T, !1), g.addEventListener("touchend", E, !1), g.addEventListener("touchcancel", E, !1);
          var P = function() {
            g.removeEventListener("touchmove", T), g.removeEventListener("touchend", E), g.removeEventListener("touchcancel", E);
          };
        } else
          u.show(v, g), s && (g.addEventListener("touchend", u.hide, !1), g.addEventListener("touchcancel", u.hide, !1)), g.addEventListener("mouseup", u.hide, !1), g.addEventListener("mouseleave", u.hide, !1);
      }
    }
    return r.init = function(v) {
      var g = document.body;
      v = v || {}, "duration" in v && (u.duration = v.duration), "delay" in v && (u.delay = v.delay), s && (g.addEventListener("touchstart", w, !1), g.addEventListener("touchcancel", _.registerEvent, !1), g.addEventListener("touchend", _.registerEvent, !1)), g.addEventListener("mousedown", w, !1);
    }, r.attach = function(v, g) {
      v = d(v), i.call(g) === "[object Array]" && (g = g.join(" ")), g = g ? " " + g : "";
      for (var y, k, E = 0, T = v.length; E < T; E++)
        y = v[E], k = y.tagName.toLowerCase(), ["input", "img"].indexOf(k) !== -1 && (x[k](y), y = y.parentElement), y.className.indexOf("waves-effect") === -1 && (y.className += " waves-effect" + g);
    }, r.ripple = function(v, g) {
      v = d(v);
      var y = v.length;
      if (g = g || {}, g.wait = g.wait || 0, g.position = g.position || null, y) {
        for (var k, E, T, P = {}, S = 0, A = {
          type: "mousedown",
          button: 1
        }, D = function(F, M) {
          return function() {
            u.hide(F, M);
          };
        }; S < y; S++)
          if (k = v[S], E = g.position || {
            x: k.clientWidth / 2,
            y: k.clientHeight / 2
          }, T = l(k), P.x = T.left + E.x, P.y = T.top + E.y, A.pageX = P.x, A.pageY = P.y, u.show(A, k), g.wait >= 0 && g.wait !== null) {
            var N = {
              type: "mouseup",
              button: 1
            };
            setTimeout(D(N, k), g.wait);
          }
      }
    }, r.calm = function(v) {
      v = d(v);
      for (var g = {
        type: "mouseup",
        button: 1
      }, y = 0, k = v.length; y < k; y++)
        u.hide(g, v[y]);
    }, r.displayEffect = function(v) {
      console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), r.init(v);
    }, r;
  });
})(Hc);
const de = { lunarInfo: [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560], solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"], Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"], Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"], solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"], sTermInfo: ["9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722"], nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"], nStr2: ["初", "十", "廿", "卅"], nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"], lunarFestival: [{ month: "正", day: "初一", name: "春节" }, { month: "正", day: "十五", name: "元宵节" }, { month: "二", day: "初二", name: "龙抬头" }, { month: "五", day: "初五", name: "端午节" }, { month: "七", day: "初七", name: "七夕节" }, { month: "七", day: "十五", name: "中元节" }, { month: "八", day: "十五", name: "中秋节" }, { month: "九", day: "初九", name: "重阳节" }, { month: "腊", day: "除夕", name: "除夕" }], solarFestival: [{ month: 1, day: 1, name: "元旦节" }, { month: 3, day: 8, name: "妇女节" }, { month: 3, day: 12, name: "植树节" }, { month: 4, day: 5, name: "清明节" }, { month: 5, day: 1, name: "劳动节" }, { month: 5, day: 4, name: "青年节" }, { month: 6, day: 1, name: "儿童节" }, { month: 7, day: 1, name: "建党节" }, { month: 8, day: 1, name: "建军节" }, { month: 9, day: 10, name: "教师节" }, { month: 10, day: 1, name: "国庆节" }], lYearDays: function(e) {
  var t, r = 348;
  for (t = 32768; t > 8; t >>= 1)
    r += de.lunarInfo[e - 1900] & t ? 1 : 0;
  return r + de.leapDays(e);
}, leapMonth: function(e) {
  return 15 & de.lunarInfo[e - 1900];
}, leapDays: function(e) {
  return de.leapMonth(e) ? 65536 & de.lunarInfo[e - 1900] ? 30 : 29 : 0;
}, monthDays: function(e, t) {
  return t > 12 || t < 1 ? -1 : de.lunarInfo[e - 1900] & 65536 >> t ? 30 : 29;
}, solarDays: function(e, t) {
  if (t > 12 || t < 1)
    return -1;
  var r = t - 1;
  return r == 1 ? e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 29 : 28 : de.solarMonth[r];
}, toGanZhiYear: function(e) {
  var t = (e - 3) % 10, r = (e - 3) % 12;
  return t == 0 && (t = 10), r == 0 && (r = 12), de.Gan[t - 1] + de.Zhi[r - 1];
}, toAstro: function(e, t) {
  return "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2 * e - (t < [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22][e - 1] ? 2 : 0), 2) + "座";
}, toGanZhi: function(e) {
  return de.Gan[e % 10] + de.Zhi[e % 12];
}, getTerm: function(e, t) {
  if (e < 1900 || e > 2100 || t < 1 || t > 24)
    return -1;
  var r = de.sTermInfo[e - 1900], n = [parseInt("0x" + r.substr(0, 5)).toString(), parseInt("0x" + r.substr(5, 5)).toString(), parseInt("0x" + r.substr(10, 5)).toString(), parseInt("0x" + r.substr(15, 5)).toString(), parseInt("0x" + r.substr(20, 5)).toString(), parseInt("0x" + r.substr(25, 5)).toString()], i = [n[0].substr(0, 1), n[0].substr(1, 2), n[0].substr(3, 1), n[0].substr(4, 2), n[1].substr(0, 1), n[1].substr(1, 2), n[1].substr(3, 1), n[1].substr(4, 2), n[2].substr(0, 1), n[2].substr(1, 2), n[2].substr(3, 1), n[2].substr(4, 2), n[3].substr(0, 1), n[3].substr(1, 2), n[3].substr(3, 1), n[3].substr(4, 2), n[4].substr(0, 1), n[4].substr(1, 2), n[4].substr(3, 1), n[4].substr(4, 2), n[5].substr(0, 1), n[5].substr(1, 2), n[5].substr(3, 1), n[5].substr(4, 2)];
  return parseInt(i[t - 1]);
}, toChinaMonth: function(e) {
  if (e > 12 || e < 1)
    return -1;
  var t = de.nStr3[e - 1];
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
      t = de.nStr2[Math.floor(e / 10)], t += de.nStr1[e % 10];
  }
  return t;
}, getAnimal: function(e) {
  return de.Animals[(e - 4) % 12];
}, getFestival: (e, t, r, n) => {
  let i = null;
  const s = parseInt(e + "");
  return i = s ? de.solarFestival.find((c) => c.month === s && c.day == t) : de.lunarFestival.find((c) => `${c.month}月` === e && c.day === t), i;
}, solar2lunar: function(e, t, r) {
  if (e < 1900 || e > 2100 || e == 1900 && t == 1 && r < 31)
    return -1;
  if (e)
    n = new Date(e, parseInt(t + "") - 1, r);
  else
    var n = /* @__PURE__ */ new Date();
  var i, s = 0, c = (e = n.getFullYear(), t = n.getMonth() + 1, r = n.getDate(), (Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()) - Date.UTC(1900, 0, 31)) / 864e5);
  for (i = 1900; i < 2101 && c > 0; i++)
    c -= s = de.lYearDays(i);
  c < 0 && (c += s, i--);
  var f = /* @__PURE__ */ new Date(), h = !1;
  f.getFullYear() == e && f.getMonth() + 1 == t && f.getDate() == r && (h = !0);
  var o = n.getDay(), d = de.nStr1[o];
  o == 0 && (o = 7);
  var l = i, a = de.leapMonth(i), u = !1;
  for (i = 1; i < 13 && c > 0; i++)
    a > 0 && i == a + 1 && u == 0 ? (--i, u = !0, s = de.leapDays(l)) : s = de.monthDays(l, i), u == 1 && i == a + 1 && (u = !1), c -= s;
  c == 0 && a > 0 && i == a + 1 && (u ? u = !1 : (u = !0, --i)), c < 0 && (c += s, --i);
  var x = i, p = c + 1, _ = t - 1, R = de.toGanZhiYear(l), w = de.getTerm(l, 2 * t - 1), v = de.getTerm(l, 2 * t), g = de.toGanZhi(12 * (e - 1900) + t + 11);
  r >= w && (g = de.toGanZhi(12 * (e - 1900) + t + 12));
  var y = !1, k = null;
  w == r && (y = !0, k = de.solarTerm[2 * t - 2]), v == r && (y = !0, k = de.solarTerm[2 * t - 1]);
  var E = Date.UTC(e, _, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, T = de.toGanZhi(E + r - 1), P = de.toAstro(t, r);
  const S = de.toChinaMonth(x), A = de.toChinaDay(p);
  return { lYear: l, lMonth: x, lDay: p, Animal: de.getAnimal(l), IMonthCn: (u ? "闰" : "") + S, IDayCn: A, cYear: e, cMonth: t, cDay: r, gzYear: R, gzMonth: g, gzDay: T, isToday: h, isLeap: u, nWeek: o, ncWeek: "星期" + d, isTerm: y, Term: k, astro: P, festcn: de.getFestival(S, A, e, t), fest: de.getFestival(t, r, e) };
}, lunar2solar: function(e, t, r, n = !0) {
  n = !!n;
  var i = de.leapMonth(e);
  if (de.leapDays(e), n && i != t || e == 2100 && t == 12 && r > 1 || e == 1900 && t == 1 && r < 31)
    return -1;
  var s = de.monthDays(e, t), c = s;
  if (n && (c = de.leapDays(e)), e < 1900 || e > 2100 || r > c)
    return -1;
  for (var f = 0, h = 1900; h < e; h++)
    f += de.lYearDays(h);
  var o = 0, d = !1;
  for (h = 1; h < t; h++)
    o = de.leapMonth(e), d || o <= h && o > 0 && (f += de.leapDays(e), d = !0), f += de.monthDays(e, h);
  n && (f += s);
  var l = Date.UTC(1900, 1, 30, 0, 0, 0), a = new Date(864e5 * (f + r - 31) + l), u = a.getUTCFullYear(), x = a.getUTCMonth() + 1, p = a.getUTCDate();
  return de.solar2lunar(u, x, p);
} };
de.lunar2solar;
function Ct(e, t) {
  return Object.prototype.toString.call(e) === `[object ${t}]`;
}
function oi(e) {
  return Object.prototype.toString.call(e);
}
const n0 = class {
  static getTypeLong(t) {
    return oi(t);
  }
  static getType(t) {
    const r = oi(t);
    return r.substring(8, r.length - 1).toLocaleLowerCase();
  }
  static isDef(t) {
    return t !== void 0;
  }
  static isUnDef(t) {
    return !this.isDef(t);
  }
  static isObject(t) {
    return t !== null && Ct(t, "Object");
  }
  static isEmpty(t) {
    return this.isArray(t) || this.isString(t) ? t.length === 0 : t instanceof Map || t instanceof Set ? t.size === 0 : !!this.isObject(t) && Object.keys(t).length === 0;
  }
  static isDate(t) {
    return Ct(t, "Date");
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
    return Ct(t, "Number");
  }
  static isPromise(t) {
    return Ct(t, "Promise") && this.isObject(t) && this.isFunction(t.then) && this.isFunction(t.catch);
  }
  static isString(t) {
    return Ct(t, "String");
  }
  static isFunction(t) {
    return typeof t == "function";
  }
  static isBoolean(t) {
    return Ct(t, "Boolean");
  }
  static isRegExp(t) {
    return Ct(t, "RegExp");
  }
  static isArray(t) {
    return t && Array.isArray(t);
  }
  static isWindow(t) {
    return typeof window < "u" && Ct(t, "Window");
  }
  static isElement(t) {
    return this.isObject(t) && !!t.tagName;
  }
  static isMap(t) {
    return Ct(t, "Map");
  }
  static isUrl(t) {
    return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(t);
  }
};
let or = n0;
Rn(or, "isServer", typeof window > "u"), Rn(or, "isClient", !n0.isServer);
for (let e = 0; e <= 15; e++)
  e.toString(16);
let qc = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof globalThis == "object" && globalThis.globalThis === globalThis ? globalThis : void 0;
qc.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && /Safari/.test(navigator.userAgent);
var Uc = { local: { has: (e) => Object.prototype.hasOwnProperty.call(localStorage, e), setItem: (e, t, r = 0) => {
  const n = (/* @__PURE__ */ new Date()).getTime(), i = or.isDate(r) ? n + 1e3 * r : 0;
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
} }, forage: oa, cookie: bi };
window.socketMap = /* @__PURE__ */ new Map();
ur.set({ precision: 14 });
var Wc = Object.freeze({ __proto__: null, debounce: function(e, t) {
  let r;
  return (n) => {
    clearTimeout(r), r = setTimeout(() => {
      e(n);
    }, t);
  };
}, throttle: function(e, t) {
  let r = 0;
  return (n) => {
    const i = (/* @__PURE__ */ new Date()).getTime();
    i - r > t && (e(n), r = i);
  };
} });
const bt = _s, Vc = {}, Yc = {
  t: "1672196428320",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3618",
  width: "200",
  height: "200"
}, Kc = /* @__PURE__ */ ce("path", {
  d: "M384 250V134a70 70 0 0 0-70-70H134a70 70 0 0 0-70 70v116a70 70 0 0 0 70 70h180a70 70 0 0 0 70-70z m-80-10H144v-96h160zM890 704H710a70 70 0 0 0-70 70v116a70 70 0 0 0 70 70h180a70 70 0 0 0 70-70V774a70 70 0 0 0-70-70z m-10 176H720v-96h160zM890 384H710a70 70 0 0 0-70 70v116a70 70 0 0 0 70 70h180a70 70 0 0 0 70-70V454a70 70 0 0 0-70-70z m-10 176H720v-96h160zM536 504H264v-80a40 40 0 0 0-40-40 40 40 0 0 0-40 40v432a40 40 0 0 0 40 40h312a40 40 0 0 0 40-40 40 40 0 0 0-40-40H264V584h272a40 40 0 0 0 40-40 40 40 0 0 0-40-40z",
  "p-id": "3619",
  "data-spm-anchor-id": "a313x.7781069.0.i2",
  class: "selected"
}, null, -1), Gc = [
  Kc
];
function Zc(e, t) {
  return Z(), ie("svg", Yc, Gc);
}
const Nn = /* @__PURE__ */ pt(Vc, [["render", Zc]]), jc = {}, Xc = {
  t: "1672197639916",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "19012"
}, Qc = /* @__PURE__ */ ce("path", {
  d: "M863.1 255.1H551.3c-25.1 0-49.2-9.8-67.1-27.4l-75-73.4c-17.9-17.5-42-27.4-67.1-27.4H161c-53 0-96 43-96 96v512.8c0 53 43 96 96 96h702c53 0 96-43 96-96V351.1c0.1-53-42.9-96-95.9-96z m-31 161.1c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32v-0.1c0-17.7 14.3-32 32-32h576.1c17.7 0 32 14.3 32 32v0.1z",
  "p-id": "19013"
}, null, -1), Jc = [
  Qc
];
function ef(e, t) {
  return Z(), ie("svg", Xc, Jc);
}
const rr = /* @__PURE__ */ pt(jc, [["render", ef]]), tf = {}, rf = {
  t: "1672197222005",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "14755"
}, nf = /* @__PURE__ */ ce("path", {
  d: "M959.68 921.024c-15.232-181.696-139.648-331.968-307.84-386.624 70.464-45.632 117.248-124.48 117.248-214.464C769.152 178.624 654.208 64 512.512 64 370.752 64 255.808 178.624 255.808 319.936c0 89.984 46.784 168.832 117.248 214.528-168.192 54.592-292.544 204.864-307.84 386.56-0.192 3.456-0.64 5.44 0 10.176C66.496 947.2 80.64 960 96.704 960c17.92 0 32.064-14.656 32.064-32 16.704-197.76 182.272-351.936 383.744-351.936 201.408 0 366.976 154.176 383.68 351.936 0 17.344 14.144 32 32.064 32 16.064 0 30.208-12.8 31.424-28.8C960.32 926.464 959.936 924.416 959.68 921.024zM320 319.936C320 213.952 406.208 128 512.512 128s192.448 85.952 192.448 191.936c0 106.048-86.144 192-192.448 192S320 425.984 320 319.936z",
  "p-id": "14756"
}, null, -1), sf = [
  nf
];
function of(e, t) {
  return Z(), ie("svg", rf, sf);
}
const mr = /* @__PURE__ */ pt(tf, [["render", of]]), af = {}, cf = {
  t: "1672194715727",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  "p-id": "2667"
}, ff = /* @__PURE__ */ ce("path", {
  d: "M809.246403 771.926938 777.737782 803.458071 924.965961 950.667831 956.476629 919.157163Z",
  fill: "#5D5D5D",
  "p-id": "2668"
}, null, -1), uf = /* @__PURE__ */ ce("path", {
  d: "M454.878536 70.285786C239.51556 70.285786 64.93236 244.847497 64.93236 460.231963c0 215.341486 174.583201 389.945153 389.945153 389.945153 215.362976 0 389.9472-174.603667 389.9472-389.945153C844.825736 244.847497 670.241512 70.285786 454.878536 70.285786zM454.878536 805.611108c-190.750415 0-345.381192-154.626683-345.381192-345.379145 0-190.751439 154.629753-345.380168 345.381192-345.380168 190.752462 0 345.382215 154.62873 345.382215 345.380168C800.259728 650.983401 645.630998 805.611108 454.878536 805.611108z",
  fill: "#5D5D5D",
  "p-id": "2669"
}, null, -1), lf = [
  ff,
  uf
];
function df(e, t) {
  return Z(), ie("svg", cf, lf);
}
const hf = /* @__PURE__ */ pt(af, [["render", df]]), pf = {}, vf = {
  t: "1672212880079",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "19924"
}, xf = /* @__PURE__ */ ce("path", {
  d: "M806.4 263.2l-45.6-45.6L512 467.2 263.2 217.6l-45.6 45.6L467.2 512 217.6 760.8l45.6 45.6L512 557.6l248.8 248.8 45.6-45.6L557.6 512z",
  "p-id": "19925"
}, null, -1), bf = [
  xf
];
function gf(e, t) {
  return Z(), ie("svg", vf, bf);
}
const yf = /* @__PURE__ */ pt(pf, [["render", gf]]), mf = {}, _f = {
  t: "1672216076738",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "28376"
}, wf = /* @__PURE__ */ ce("path", {
  d: "M501.937582 545.097053c147.891962 0 268.231366-118.534055 268.223274-264.288929 0-145.746783-120.330301-264.28994-268.222263-264.28994-147.890951 0-268.221252 118.584625-268.221252 264.28994C233.71633 426.520519 354.046631 545.097053 501.937582 545.097053zM612.471463 570.546911 411.497184 570.546911c-186.760063 0-338.664249 149.569875-338.664249 333.472733l0 19.794109c0 96.139636 149.47278 96.139636 338.664249 96.139636l200.974278 0c181.747565 0 338.694591 0 338.694591-96.139636l0-19.794109C951.164031 720.158252 799.235571 570.546911 612.471463 570.546911z",
  "p-id": "28377"
}, null, -1), Ef = [
  wf
];
function kf(e, t) {
  return Z(), ie("svg", _f, Ef);
}
const Vt = /* @__PURE__ */ pt(mf, [["render", kf]]), Sf = {}, Cf = {
  t: "1680231254898",
  class: "icon",
  viewBox: "0 0 1154 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "9556"
}, Af = /* @__PURE__ */ ce("path", {
  d: "M1015.808 64.512q62.464 0 99.84 31.744t37.376 96.256l0 568.32q0 27.648-10.24 52.224t-28.16 43.008-41.984 29.184-50.688 10.752l-892.928 0q-26.624 0-50.176-10.24t-40.96-27.136-27.648-39.424-10.24-48.128l0-580.608q0-55.296 33.792-90.624t95.232-35.328l886.784 0zM287.744 253.952q-19.456 0-36.864 7.168t-30.72 19.968-20.992 30.72-7.68 38.4 7.68 37.888 20.992 30.72 30.72 20.992 36.864 7.68q21.504 0 39.424-7.68t30.72-20.992 20.48-30.72 7.68-37.888q0-41.984-27.648-69.12t-70.656-27.136zM448.512 608.256q0-19.456-7.68-37.376t-20.48-30.72-30.72-20.48-37.376-7.68l-128 0q-39.936 0-67.584 28.16t-27.648 68.096l0 4.096 0 92.16 319.488 0 0-92.16 0-4.096zM923.648 709.632q20.48 0 30.208-10.24t9.728-24.576-11.264-25.088-31.744-10.752l-305.152 0q-20.48 0-30.72 10.752t-10.24 25.088 10.24 24.576 29.696 10.24l309.248 0zM924.672 577.536q20.48 0 29.696-10.24t9.216-24.576q0-15.36-8.704-25.6t-29.184-10.24l-313.344 0q-20.48 0-29.696 10.24t-9.216 25.6q0 14.336 8.704 24.576t29.184 10.24l313.344 0zM925.696 447.488q15.36 0 26.624-10.24t11.264-24.576-11.264-23.04-26.624-8.704l-207.872 0q-15.36 0-26.112 8.704t-10.752 23.04 10.752 24.576 26.112 10.24l207.872 0z",
  "p-id": "9557"
}, null, -1), Bf = [
  Af
];
function Tf(e, t) {
  return Z(), ie("svg", Cf, Bf);
}
const Zn = /* @__PURE__ */ pt(Sf, [["render", Tf]]), Rf = {}, Lf = {
  t: "1698719360533",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "15490",
  width: "200",
  height: "200"
}, Of = /* @__PURE__ */ ce("path", {
  d: "M960 704h-63.616v-167.392a32 32 0 0 0-32-32H544V416h160a32 32 0 0 0 32-32V96a32 32 0 0 0-32-32H320a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h160v88.608H161.984a32 32 0 0 0-32 31.968L129.792 704H64a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-192a32 32 0 0 0-32-32H193.792l0.16-135.392H480V704h-64a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-192a32 32 0 0 0-32-32h-64v-135.392h288.384V704H768a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-192a32 32 0 0 0-32-32zM352 128h320v224H352V128zM224 896H96v-128h128v128z m352 0h-128v-128h128v128z m352 0h-128v-128h128v128z",
  "p-id": "15491"
}, null, -1), Nf = [
  Of
];
function Df(e, t) {
  return Z(), ie("svg", Lf, Nf);
}
const nr = /* @__PURE__ */ pt(Rf, [["render", Df]]), Vi = {
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
}, If = { class: "left-pick-list" }, Pf = { class: "post-view-list" }, $f = { class: "ik-picker-single" }, Mf = /* @__PURE__ */ ln({
  __name: "PostList",
  props: Vi,
  emits: ["change", "check"],
  setup(e, { emit: t }) {
    var d, l;
    const r = e, n = Pe(() => {
      var a, u;
      return ((a = r.handList) == null ? void 0 : a.length) === ((u = r.list) == null ? void 0 : u.length);
    }), i = Pe(() => {
      var x, p, _, R;
      const a = (x = r.handList) == null ? void 0 : x.length, u = (p = r.list) == null ? void 0 : p.length;
      return r.multiple ? s.value = r.handList.map((w) => w[r.fixPropOpt.id]) : c.value = (R = (_ = r.handList) == null ? void 0 : _[0]) == null ? void 0 : R[r.fixPropOpt.id], a > 0 && a < u;
    }), s = Oe(
      r.handList.map((a) => a[r.fixPropOpt.id])
    ), c = Oe((l = (d = r.handList) == null ? void 0 : d[0]) == null ? void 0 : l[r.fixPropOpt.id]), f = (a) => {
      const u = a ? r.list.map((x) => x[r.fixPropOpt.id]) : [];
      t("change", u, a ? r.list : []);
    }, h = (a) => {
      t("change", a, r.list);
    }, o = (a) => {
      t("change", a, r.list);
    };
    return (a, u) => (Z(), ie("div", If, [
      a.multiple ? (Z(), be(ae(Rt), {
        key: 0,
        modelValue: n.value,
        "onUpdate:modelValue": u[0] || (u[0] = (x) => n.value = x),
        indeterminate: i.value,
        onChange: f
      }, {
        default: ye(() => [
          et("全选")
        ]),
        _: 1
      }, 8, ["modelValue", "indeterminate"])) : ke("", !0),
      ce("ul", Pf, [
        a.multiple ? (Z(), be(ae(jn), {
          key: 0,
          modelValue: s.value,
          "onUpdate:modelValue": u[1] || (u[1] = (x) => s.value = x),
          onChange: h
        }, {
          default: ye(() => [
            (Z(!0), ie(Xe, null, st(a.list, (x) => (Z(), ie("li", {
              key: x[r.fixPropOpt.id]
            }, [
              Be(ae(Rt), {
                label: x[r.fixPropOpt.id]
              }, {
                default: ye(() => [
                  Be(Zn),
                  ce("p", null, Te(x[r.fixPropOpt.name]), 1)
                ]),
                _: 2
              }, 1032, ["label"])
            ]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])) : (Z(), be(ae(kr), {
          key: 1,
          isIndeterminate: i.value,
          modelValue: c.value,
          "onUpdate:modelValue": u[2] || (u[2] = (x) => c.value = x),
          onChange: o
        }, {
          default: ye(() => [
            (Z(!0), ie(Xe, null, st(a.list, (x) => (Z(), ie("li", {
              class: "w-full",
              key: x[r.fixPropOpt.id]
            }, [
              Be(ae(Xn), {
                label: x[r.fixPropOpt.id]
              }, {
                default: ye(() => [
                  ce("div", $f, [
                    Be(Zn),
                    ce("p", null, Te(x[r.fixPropOpt.name]), 1)
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
const zf = /* @__PURE__ */ pt(Mf, [["__scopeId", "data-v-c47c3e50"]]), Ff = { class: "left-pick-list" }, Hf = { class: "role-view-list" }, qf = ["title"], Uf = { class: "ik-picker-single" }, Wf = ["title"], Vf = /* @__PURE__ */ ln({
  __name: "RoleList",
  props: Vi,
  emits: ["change", "check"],
  setup(e, { emit: t }) {
    var d, l;
    const r = e, n = Pe(() => {
      var a, u;
      return ((a = r.handList) == null ? void 0 : a.length) === ((u = r.list) == null ? void 0 : u.length);
    }), i = Pe(() => {
      var x, p, _, R;
      const a = (x = r.handList) == null ? void 0 : x.length, u = (p = r.list) == null ? void 0 : p.length;
      return r.multiple ? s.value = r.handList.map((w) => w[r.fixPropOpt.id]) : c.value = (R = (_ = r.handList) == null ? void 0 : _[0]) == null ? void 0 : R[r.fixPropOpt.id], a > 0 && a < u;
    }), s = Oe(
      r.handList.map((a) => a[r.fixPropOpt.id])
    ), c = Oe((l = (d = r.handList) == null ? void 0 : d[0]) == null ? void 0 : l[r.fixPropOpt.id]), f = (a) => {
      const u = a ? r.list.map((x) => x[r.fixPropOpt.id]) : [];
      t("change", u, a ? r.list : []);
    }, h = (a) => {
      t("change", a, r.list);
    }, o = (a) => {
      t("change", a, r.list);
    };
    return (a, u) => (Z(), ie("div", Ff, [
      a.multiple ? (Z(), be(ae(Rt), {
        key: 0,
        modelValue: n.value,
        "onUpdate:modelValue": u[0] || (u[0] = (x) => n.value = x),
        indeterminate: i.value,
        onChange: f
      }, {
        default: ye(() => [
          et("全选")
        ]),
        _: 1
      }, 8, ["modelValue", "indeterminate"])) : ke("", !0),
      ce("ul", Hf, [
        a.multiple ? (Z(), be(ae(jn), {
          key: 0,
          modelValue: s.value,
          "onUpdate:modelValue": u[1] || (u[1] = (x) => s.value = x),
          onChange: h
        }, {
          default: ye(() => [
            (Z(!0), ie(Xe, null, st(a.list, (x) => (Z(), ie("li", {
              key: x[a.fixPropOpt.id]
            }, [
              Be(ae(Rt), {
                label: x[a.fixPropOpt.id],
                value: x[a.fixPropOpt.id],
                disabled: x.disabled
              }, {
                default: ye(() => [
                  Be(Vt),
                  ce("p", {
                    title: x[a.fixPropOpt.name]
                  }, Te(x[a.fixPropOpt.name]), 9, qf)
                ]),
                _: 2
              }, 1032, ["label", "value", "disabled"])
            ]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])) : (Z(), be(ae(kr), {
          key: 1,
          indeterminate: i.value,
          modelValue: c.value,
          "onUpdate:modelValue": u[2] || (u[2] = (x) => c.value = x),
          onChange: o
        }, {
          default: ye(() => [
            (Z(!0), ie(Xe, null, st(a.list, (x) => (Z(), ie("li", {
              class: "w-full",
              key: x[a.fixPropOpt.id]
            }, [
              Be(ae(Xn), {
                label: x[a.fixPropOpt.id],
                value: x[a.fixPropOpt.id],
                disabled: x.disabled
              }, {
                default: ye(() => [
                  ce("div", Uf, [
                    Be(Vt),
                    ce("p", {
                      title: x[a.fixPropOpt.name]
                    }, Te(x[a.fixPropOpt.name]), 9, Wf)
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
const Yf = /* @__PURE__ */ pt(Vf, [["__scopeId", "data-v-a51e0920"]]);
var Je = /* @__PURE__ */ ((e) => (e.org = "organization", e.dep = "dep", e.user = "user", e.role = "role", e.post = "post", e.dep_user = "dep_user", e))(Je || {}), ar = /* @__PURE__ */ ((e) => (e.group = "group", e.role = "role", e.post = "post", e))(ar || {});
const Bt = {
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
}, Kf = {
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
}, Gf = (e, t) => {
  const r = Oe([]), n = async (s, c, f) => {
    var T, P;
    const { url: h, methods: o, headers: d, param: l } = e.value || {}, a = {
      parentOrgId: s,
      ...l || {},
      parentDepartmentId: c || "",
      name: f || ""
    }, u = await fetch(h, {
      method: o,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        ...d
      },
      body: JSON.stringify(a)
    }), { success: x, data: p } = await u.json();
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
    const { departments: _, roles: R, posts: w, users: v, organizations: g, rootOrganization: y, rootDepartment: k } = p, E = y || k;
    return r.value[0] = t.org ? {
      ...t.org,
      id: t.elementId,
      elementType: (P = (T = t.org) == null ? void 0 : T.elementType) == null ? void 0 : P.toLocaleUpperCase()
    } : {
      ...E,
      id: E.elementId
    }, {
      depList: bt.cloneDeep(_),
      roleList: bt.cloneDeep(R),
      postList: bt.cloneDeep(w),
      userList: bt.cloneDeep(v),
      organizationList: bt.cloneDeep(g),
      rootOrganization: y,
      rootDepartment: k
    };
  };
  return {
    handData: n,
    handSetChild: (s, c) => {
      n(s == null ? void 0 : s.elementId, c);
    },
    bannerList: r
  };
}, Zf = {
  shadow: "hover",
  class: "sel-list"
}, jf = { key: 0 }, Xf = {
  key: 0,
  class: "check-all"
}, Qf = {
  key: 0,
  class: "view-list"
}, Jf = {
  key: 0,
  class: "filter-user"
}, eu = { class: "filter-user" }, tu = {
  key: 2,
  class: "next-child"
}, ru = { class: "filter-user" }, nu = {
  key: 1,
  class: "filter-user"
}, iu = {
  key: 2,
  class: "next-child"
}, su = { class: "text-over-flow" }, ou = { class: "text-over-flow" }, au = { class: "text-over-flow" }, cu = {
  key: 2,
  class: "next-child"
}, fu = {
  key: 1,
  class: "empty"
}, uu = /* @__PURE__ */ ce("div", { class: "split-div" }, null, -1), lu = { class: "choose-list" }, du = { class: "choose-item" }, hu = /* @__PURE__ */ ce("div", null, "已选", -1), pu = { class: "dialog-footer" }, vu = /* @__PURE__ */ ln({
  __name: "picker",
  props: Kf,
  emits: ["handChild", "update:show", "update:modelValue", "ok", "search"],
  setup(e, { expose: t, emit: r }) {
    const n = e;
    xs(($) => ({
      "3e125c61": ze.value
    }));
    const i = Oe(""), s = Oe(""), c = Oe(""), f = Oe([]), h = Oe([]), o = Oe([]), d = Oe([]), l = Oe([]), a = Oe(!1), u = n.imageBaseUrl || `${location.origin}/server/oss/download?fileUrl=`, x = ($) => $ ? $.startsWith("http") ? $ : `${u}${$}` : "";
    It(() => n.api, () => {
      n.show && S("");
    });
    const p = Pe(() => ({
      name: "name",
      type: "type",
      id: "id",
      avatar: "avatar",
      ...n.propOption
    })), _ = Pe(() => ({
      dep: "DEPT",
      user: "USER",
      role: "ROLE",
      post: "POST",
      organization: "ORGANIZATION",
      ...n.typeOption
    })), R = Oe([]), w = Gf(bs(n, "api"), n), v = w.handData, g = w.bannerList;
    n.immediate && v(c.value, s.value, i.value);
    const y = ($) => ($.forEach((X) => {
      var I, se;
      X.disabled = ((se = (I = n.modelValue) == null ? void 0 : I.find((_e) => _e[p.value.id] === X[p.value.id])) == null ? void 0 : se.disabled) || !1;
    }), $), k = async () => {
      var $, X, I, se, _e, Ue, ft, nt, Dt;
      a.value = !0;
      try {
        if (($ = n.depList) != null && $.length || (X = n.userList) != null && X.length || (I = n.roleList) != null && I.length || (se = n.postList) != null && se.length) {
          f.value = (_e = n.userList) == null ? void 0 : _e.filter((Ve) => Ve[p.value.name].includes(i.value)), h.value = (Ue = n.depList) == null ? void 0 : Ue.filter((Ve) => Ve[p.value.name].includes(i.value)), o.value = (ft = n.roleList) == null ? void 0 : ft.filter((Ve) => Ve[p.value.name].includes(i.value)), d.value = (nt = n.postList) == null ? void 0 : nt.filter((Ve) => Ve[p.value.name].includes(i.value)), l.value = (Dt = n.organizationList) == null ? void 0 : Dt.filter((Ve) => Ve[p.value.name].includes(i.value)), H(), a.value = !1;
          return;
        }
        const De = await v(c.value, s.value, i.value);
        try {
          f.value = y((De == null ? void 0 : De.userList) || []), h.value = y((De == null ? void 0 : De.depList) || []), o.value = y((De == null ? void 0 : De.roleList) || []), d.value = y((De == null ? void 0 : De.postList) || []), l.value = y((De == null ? void 0 : De.organizationList) || []);
        } catch (Ve) {
          a.value = !1, console.info("error: ", Ve);
        }
        H(), a.value = !1;
      } catch {
        a.value = !1;
      }
    }, E = Dn({
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
    }), T = Dn({
      indeterminate: !1,
      checkAll: 0
    }), P = ($) => E.org.has($) || E.dep.has($) || E.user.has($) || E.role.has($) || E.post.has($), S = Wc.debounce(k, 300), A = Pe(() => {
      const $ = Array.from(E.org.values()), X = Array.from(E.dep.values()), I = Array.from(E.role.values()), se = Array.from(E.user.values()), _e = Array.from(E.post.values());
      return R.value = [...$, ...X, ...I, ..._e, ...se], {
        list: [...$, ...X, ...I, ...se, ..._e],
        org: {
          list: $,
          len: $.length,
          deps: $
        },
        dep: {
          list: X,
          len: X.length,
          deps: X
        },
        role: {
          list: I,
          len: I.length
        },
        user: {
          list: se,
          len: se.length
        },
        post: {
          list: _e,
          len: _e.length
        }
      };
    }), D = Pe(
      () => {
        const $ = n.chooseType.map((I) => I.toLocaleLowerCase());
        let X = [...$];
        return $.includes("dep") && (X = [...X, "organization", "dept"]), $.includes("dep_user") && (X = [...X, "user"]), X;
      }
    ), N = Pe(
      () => D.value.includes(Je.dep) && !D.value.includes(Je.user) && !D.value.includes(Je.org)
    ), F = Pe(
      () => D.value.includes(Je.user) && !D.value.includes(Je.dep) && !D.value.includes(Je.org)
    ), M = Pe(() => D.value.includes(Je.org) && !D.value.includes(Je.dep) && !D.value.includes(Je.user)), W = Pe(() => !g.value.length), K = Pe(
      () => !n.max || A.value.list.length < n.max
    ), te = ($) => [_.value.dep, _.value.organization].includes($[p.value.type]) ? $.hasOwnProperty("disabled") : !1, J = Oe([]), re = ($) => {
      J.value = $, J.value.forEach((X) => {
        X.readonly = X == null ? void 0 : X.disabled;
      });
    }, z = Oe(!1), H = ($ = !1) => {
      var I;
      const X = (I = n == null ? void 0 : n.userList) != null && I.length ? bt.cloneDeep([...n == null ? void 0 : n.organizationList, ...n == null ? void 0 : n.userList, ...n == null ? void 0 : n.depList]) : [...l.value, ...h.value, ...f.value];
      return !$ && re(X), X;
    };
    It(
      () => n.show,
      async ($) => {
        var X;
        if (z.value = $, $) {
          s.value = n.pid, c.value = ((X = n.org) == null ? void 0 : X.elementId) || n.orgPid, !n.userList.length && !n.depList.length && !n.roleList.length && !n.postList.length && !n.organizationList.length ? await k() : (f.value = n.userList, h.value = n.depList, o.value = n.roleList, d.value = n.postList, l.value = n.organizationList), E.trans = [], T.checkAll = 0, T.indeterminate = !1;
          const I = H(!0);
          for (const _e of I)
            P(_e[p.value.id]) && E.trans.push(_e[p.value.id]);
          const se = I.length === E.trans.length;
          T.indeterminate = !!(I.length && !se), T.checkAll = Number(I.length && se), In(() => {
            var _e;
            (_e = n.modelValue) != null && _e.length ? n.modelValue.forEach((Ue) => {
              pe(Ue), n.multiple ? E.trans.push(Ue[p.value.id]) : E.single = Ue[p.value.id];
            }) : Ne();
          });
        } else
          Ne();
      }
    ), a0(() => {
      let $;
      if (N.value || F.value) {
        const I = f.value.length, se = h.value.length;
        $ = N.value ? se : F.value ? I : I + I;
      } else
        $ = J.value.length;
      const X = E.trans.length;
      T.indeterminate = E.trans.length ? X !== $ : !1, T.checkAll = +($ !== 0 && X === $);
    });
    const q = ($) => {
      if ($) {
        if (E.single = "", $[p.value.id]) {
          const X = E.trans.findIndex(
            (I) => I === $[p.value.id]
          );
          X !== -1 && E.trans.splice(X, 1);
        }
        switch ($[p.value.type]) {
          case _.value.dep:
            return E.dep.delete($[p.value.id]);
          case _.value.user:
            return E.user.delete($[p.value.id]);
          case _.value.role:
            return E.role.delete($[p.value.id]);
          case _.value.post:
            return E.post.delete($[p.value.id]);
          case _.value.organization:
            return E.org.delete($[p.value.id]);
          default:
            return;
        }
      }
    }, V = ($) => {
      q($);
    }, pe = ($) => {
      if (!P($[p.value.id])) {
        const X = {
          ...$
          // readonly: item.disabled
        };
        switch ($[p.value.type]) {
          case _.value.dep:
            return E.dep.set($[p.value.id], X);
          case _.value.user:
            return E.user.set($[p.value.id], X);
          case _.value.role:
            return E.role.set($[p.value.id], X);
          case _.value.post:
            return E.post.set($[p.value.id], X);
          case _.value.organization:
            return E.org.set($[p.value.id], X);
          default:
            return;
        }
      }
    };
    It(
      () => E.trans,
      ($) => {
        if (!$.length)
          J.value.forEach((X) => {
            X.disabled = !1;
            try {
              n.multiple && q(X);
            } catch {
            }
          });
        else {
          const X = J.value.filter(
            (se) => !$.includes(se[p.value.id])
          );
          for (const se of X)
            se.disabled = !1, n.multiple && q(se);
          const I = J.value.filter(
            (se) => $.includes(se[p.value.id])
          );
          for (const se of I)
            se.disabled = te(se), pe(se);
        }
      },
      { deep: !0 }
    ), It(
      () => E.single,
      ($) => {
        if ($) {
          const X = J.value.find((I) => I[p.value.id] === $);
          X && (E.dep.clear(), E.user.clear(), E.role.clear(), E.post.clear(), E.org.clear(), E.trans = [], In(() => {
            pe(X);
          }));
        }
      }
    );
    const xe = ($) => {
      if ($) {
        let X = [];
        if (D.value.includes("dep") || D.value.includes("dep_user")) {
          const I = J.value.filter(
            (se) => se[p.value.type].toLocaleUpperCase() === _.value[Je.dep].toLocaleUpperCase()
          );
          X = [...X, ...I];
        }
        if (D.value.includes("user") || D.value.includes("dep_user")) {
          const I = J.value.filter(
            (se) => se[p.value.type].toLocaleUpperCase() === _.value[Je.user].toLocaleUpperCase()
          );
          X = [...X, ...I];
        }
        if (D.value.includes("organization")) {
          const I = J.value.filter(
            (se) => se[p.value.type].toLocaleUpperCase() === _.value[Je.org].toLocaleUpperCase()
          );
          X = [...X, ...I];
        }
        X.forEach((I) => {
          !E.trans.includes(I[p.value.id]) && E.trans.push(I[p.value.id]);
        });
      } else
        J.value.forEach((X) => {
          const I = E.trans.findIndex((se) => se === X[p.value.id]);
          I >= 0 && E.trans.splice(I, 1);
        });
    }, Ce = ($) => {
      $[p.value.type] === _.value.organization ? (c.value = $ == null ? void 0 : $.elementId, s.value = "") : (c.value = "", s.value = $ == null ? void 0 : $.elementId), k(), g.value.push($);
    }, ue = () => {
      const $ = g.value.length - 2, X = $ < 0 ? 0 : $, I = g.value[X];
      I[p.value.type] === _.value.organization ? (c.value = $ < 0 ? "root" : (I == null ? void 0 : I.elementId) || (I == null ? void 0 : I.id), s.value = "") : (c.value = "", s.value = $ < 0 ? "" : (I == null ? void 0 : I.elementId) || (I == null ? void 0 : I.id)), k(), g.value.pop();
    }, Ae = Pe(() => g.value.length), Me = ($, X) => {
      !X && !n.topLink || X !== Ae.value - 1 && ($[p.value.type] === _.value.organization ? (c.value = $ == null ? void 0 : $.elementId, s.value = "") : (c.value = "", s.value = $ == null ? void 0 : $.elementId), k(), g.value.splice(X + 1));
    }, at = Pe(() => n.chooseType.includes("role") && n.chooseType.length === 1), je = Pe(() => n.chooseType.includes("post") && n.chooseType.length === 1), He = Oe(n.tabs[0]), Re = Oe(n.tabs[0]);
    a0(() => (Re.value = at.value ? n.tabs[1] : je.value ? n.tabs[2] : He.value, Re.value));
    const Ne = () => {
      E.dep.clear(), E.user.clear(), E.role.clear(), E.post.clear(), E.org.clear(), E.trans = [], Ge.value = [], kt.value = [], He.value = n.tabs[0], Re.value = n.tabs[0], i.value = "", s.value = n.pid, c.value = n.orgPid, g.value.splice(1, g.value.length), E.single = "", R.value = [];
    }, _t = () => {
      var $;
      r(
        "ok",
        bt.cloneDeep({
          // 所有选项、部门、人员、角色分别列出
          ...A.value,
          // 排序后的列表
          sort: R.value
        })
      ), r("update:modelValue", bt.cloneDeep((($ = A.value) == null ? void 0 : $.list) || [])), r("update:show", !1), Ne();
    }, vt = () => {
      r("update:show", !1), Ne();
    };
    t({ handClear: Ne, handRomeve: V, handDelete: q });
    const tt = Pe(() => {
      const $ = D.value;
      return !!(($.includes("post") || $.includes("role")) && $.length > 1);
    }), wt = Pe(() => [
      { label: "group", name: "组织架构" },
      { label: "role", name: "角色列表" },
      { label: "post", name: "岗位列表" }
    ].filter(($) => n.tabs.includes($.label))), rt = Pe(
      () => `${(typeof n.width == "string" ? Number.parseInt(n.width) : n.width) / 2 - 30}px`
    ), ze = Pe(
      () => `${typeof n.height == "string" ? Number.parseInt(n.height) : n.height}px`
    ), qe = () => {
      n.multiple || (E.post.clear(), E.role.clear(), E.user.clear(), E.dep.clear(), E.single = "");
    }, Ge = Oe([]), Et = ($, X) => {
      n.multiple || (E.single = "");
      const I = n.multiple ? $ : [$];
      if (!I.length) {
        E.role.clear();
        return;
      }
      qe(), X.forEach((se) => {
        I != null && I.includes(se[p.value.id]) ? pe(se) : q(se);
      });
    };
    It(
      () => A.value.role.len,
      ($) => {
        Ge.value = bt.cloneDeep(A.value.role.list);
      }
    );
    const kt = Oe([]), ct = ($, X) => {
      n.multiple || (E.single = "");
      const I = n.multiple ? $ : [$];
      if (!I.length) {
        E.post.clear();
        return;
      }
      qe(), X.forEach((se) => {
        I != null && I.includes(se[p.value.id]) ? pe(se) : q(se);
      });
    };
    return It(
      () => A.value.post.len,
      ($) => {
        kt.value = bt.cloneDeep(A.value.post.list);
      }
    ), It(
      () => i.value,
      ($) => {
        S("");
      }
    ), ($, X) => (Z(), be(ae(ws), {
      modelValue: z.value,
      "onUpdate:modelValue": X[6] || (X[6] = (I) => z.value = I),
      title: $.title,
      "destroy-on-close": "",
      "close-on-click-modal": !1,
      "close-on-click-escape": !1,
      draggable: "",
      "align-center": "",
      width: typeof $.width == "string" ? $.width : `${$.width}%`,
      class: "p_p_picker-dialog",
      "modal-class": "p_p_picker-dialog-modal",
      onClose: vt
    }, {
      footer: ye(() => [
        ce("span", pu, [
          Be(ae(Pt), {
            onClick: St(vt, ["stop"])
          }, {
            default: ye(() => [
              et("取消")
            ]),
            _: 1
          }, 8, ["onClick"]),
          Be(ae(Pt), {
            type: "primary",
            onClick: St(_t, ["stop"])
          }, {
            default: ye(() => [
              et(" 确定 ")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: ye(() => [
        ce("div", {
          class: "dep-use-picker",
          style: qt({ height: ze.value })
        }, [
          ce("div", Zf, [
            ce("div", null, [
              Be(ae(Es), {
                modelValue: i.value,
                "onUpdate:modelValue": X[0] || (X[0] = (I) => i.value = I),
                clearable: "",
                placeholder: $.placeholder,
                "prefix-icon": hf,
                style: qt({ width: rt.value })
              }, null, 8, ["modelValue", "placeholder", "style"]),
              tt.value ? (Z(), be(ae(kr), {
                key: 0,
                modelValue: He.value,
                "onUpdate:modelValue": X[1] || (X[1] = (I) => He.value = I),
                class: "ik-picker-tab",
                style: qt({ width: rt.value })
              }, {
                default: ye(() => [
                  (Z(!0), ie(Xe, null, st(wt.value, (I) => (Z(), be(ae(ks), {
                    label: I.label,
                    key: I.label
                  }, {
                    default: ye(() => [
                      et(Te(I.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "style"])) : ke("", !0)
            ]),
            Re.value === ae(ar).group ? (Z(), ie("div", jf, [
              Be(ae(Ss), {
                separator: ">",
                class: cr(["banner", { "top-unlink": !$.topLink }])
              }, {
                default: ye(() => [
                  Ae.value ? (Z(!0), ie(Xe, { key: 0 }, st(ae(g), (I, se) => (Z(), be(ae(Cs), {
                    key: I[p.value.id],
                    onClick: St((_e) => Me(I, se), ["stop"])
                  }, {
                    default: ye(() => [
                      et(Te(I[p.value.name]), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 128)) : ke("", !0)
                ]),
                _: 1
              }, 8, ["class"]),
              $.multiple ? (Z(), ie("div", Xf, [
                Be(ae(Rt), {
                  modelValue: T.checkAll,
                  "onUpdate:modelValue": X[2] || (X[2] = (I) => T.checkAll = I),
                  indeterminate: T.indeterminate,
                  "true-label": 1,
                  "false-label": 0,
                  disabled: !$.multiple,
                  onChange: xe,
                  onInput: xe
                }, {
                  default: ye(() => [
                    et("全选")
                  ]),
                  _: 1
                }, 8, ["modelValue", "indeterminate", "disabled"]),
                Ae.value > 1 ? er((Z(), be(ae(Pt), {
                  key: 0,
                  link: "",
                  type: "primary",
                  onClick: St(ue, ["stop"])
                }, {
                  default: ye(() => [
                    et("上一级")
                  ]),
                  _: 1
                }, 8, ["onClick"])), [
                  [c0, !W.value]
                ]) : ke("", !0)
              ])) : ke("", !0)
            ])) : ke("", !0),
            Re.value === ae(ar).group ? (Z(), ie(Xe, { key: 1 }, [
              J.value.length ? er((Z(), ie("ul", Qf, [
                $.multiple ? (Z(), be(ae(jn), {
                  key: 0,
                  modelValue: E.trans,
                  "onUpdate:modelValue": X[3] || (X[3] = (I) => E.trans = I)
                }, {
                  default: ye(() => [
                    (Z(!0), ie(Xe, null, st(l.value, (I) => (Z(), ie("li", {
                      key: I[p.value.id]
                    }, [
                      $.chooseType.includes("org") ? (Z(), ie("div", Jf, [
                        Be(nr),
                        ce("p", null, Te(I[p.value.name]), 1)
                      ])) : (Z(), be(ae(Rt), {
                        key: 1,
                        label: I[p.value.id],
                        disabled: !K.value || (I == null ? void 0 : I.readonly)
                      }, {
                        default: ye(() => [
                          ce("div", eu, [
                            Be(nr),
                            ce("p", null, Te(I[p.value.name]), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["label", "disabled"])),
                      $.children ? (Z(), ie("div", tu, [
                        [_.value.organization, _.value.dep, _.value.role].includes(
                          I[p.value.type]
                        ) ? (Z(), be(ae(Pt), {
                          key: 0,
                          link: "",
                          type: "primary",
                          onClick: St((se) => Ce(I), ["stop"]),
                          disabled: I.disabled
                        }, {
                          icon: ye(() => [
                            Be(Nn)
                          ]),
                          default: ye(() => [
                            et(" 下级 ")
                          ]),
                          _: 2
                        }, 1032, ["onClick", "disabled"])) : ke("", !0)
                      ])) : ke("", !0)
                    ]))), 128)),
                    (!F.value || $.showDep) && !M.value ? (Z(!0), ie(Xe, { key: 0 }, st(h.value, (I) => (Z(), ie("li", {
                      key: I[p.value.id]
                    }, [
                      $.chooseType.includes("dep") || $.chooseType.includes("dep_user") ? (Z(), be(ae(Rt), {
                        key: 0,
                        label: I[p.value.id],
                        disabled: !K.value || (I == null ? void 0 : I.readonly)
                      }, {
                        default: ye(() => [
                          ce("div", ru, [
                            Be(rr),
                            ce("p", null, Te(I[p.value.name]), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["label", "disabled"])) : (Z(), ie("div", nu, [
                        Be(rr),
                        ce("p", null, Te(I[p.value.name]), 1)
                      ])),
                      $.children ? (Z(), ie("div", iu, [
                        [_.value.dep, _.value.role].includes(
                          I[p.value.type]
                        ) ? (Z(), be(ae(Pt), {
                          key: 0,
                          link: "",
                          type: "primary",
                          onClick: St((se) => Ce(I), ["stop"]),
                          disabled: I.disabled
                        }, {
                          icon: ye(() => [
                            Be(Nn)
                          ]),
                          default: ye(() => [
                            et(" 下级 ")
                          ]),
                          _: 2
                        }, 1032, ["onClick", "disabled"])) : ke("", !0)
                      ])) : ke("", !0)
                    ]))), 128)) : ke("", !0),
                    $.chooseType.includes("user") || $.chooseType.includes("dep_user") ? (Z(!0), ie(Xe, { key: 1 }, st(f.value, (I) => (Z(), ie("li", {
                      key: I[p.value.id]
                    }, [
                      Be(ae(Rt), {
                        label: I[p.value.id],
                        disabled: !K.value || (I == null ? void 0 : I.readonly)
                      }, {
                        default: ye(() => {
                          var se, _e;
                          return [
                            _.value.dep === I[p.value.type] ? (Z(), be(Vt, { key: 0 })) : _.value.user === I[p.value.type] ? (Z(), be(ae(br), {
                              key: 1,
                              size: 30,
                              src: x((se = p.value) != null && se.avatar ? I[(_e = p.value) == null ? void 0 : _e.avatar] : ""),
                              icon: mr
                            }, null, 8, ["src"])) : ke("", !0),
                            ce("span", su, Te(I[p.value.name]), 1)
                          ];
                        }),
                        _: 2
                      }, 1032, ["label", "disabled"])
                    ]))), 128)) : ke("", !0)
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : (Z(), be(ae(kr), {
                  key: 1,
                  modelValue: E.single,
                  "onUpdate:modelValue": X[4] || (X[4] = (I) => E.single = I)
                }, {
                  default: ye(() => [
                    (Z(!0), ie(Xe, null, st(J.value, (I) => {
                      var se, _e, Ue;
                      return Z(), ie("li", {
                        key: I[p.value.id]
                      }, [
                        D.value.includes((se = I[p.value.type]) == null ? void 0 : se.toLocaleLowerCase()) ? (Z(), be(ae(Xn), {
                          key: 0,
                          label: I[p.value.id],
                          class: cr({
                            readonly: ![_.value.organization, _.value.dep, _.value.user].includes(
                              I[p.value.type]
                            ),
                            "w-full": !0
                          }),
                          disabled: I.readonly
                        }, {
                          default: ye(() => {
                            var ft, nt;
                            return [
                              _.value.organization === I[p.value.type] ? (Z(), be(nr, { key: 0 })) : _.value.dep === I[p.value.type] ? (Z(), be(rr, { key: 1 })) : _.value.role === I[p.value.type] ? (Z(), be(Vt, { key: 2 })) : _.value.user === I[p.value.type] ? (Z(), be(ae(br), {
                                key: 3,
                                size: 30,
                                src: x((ft = p.value) != null && ft.avatar ? I[(nt = p.value) == null ? void 0 : nt.avatar] : ""),
                                icon: mr
                              }, null, 8, ["src"])) : ke("", !0),
                              ce("span", ou, Te(I[p.value.name]), 1)
                            ];
                          }),
                          _: 2
                        }, 1032, ["label", "class", "disabled"])) : (Z(), ie(Xe, { key: 1 }, [
                          _.value.organization === I[p.value.type] ? (Z(), be(nr, { key: 0 })) : _.value.dep === I[p.value.type] ? (Z(), be(rr, { key: 1 })) : _.value.role === I[p.value.type] ? (Z(), be(Vt, { key: 2 })) : _.value.user === I[p.value.type] ? (Z(), be(ae(br), {
                            key: 3,
                            size: 30,
                            src: x((_e = p.value) != null && _e.avatar ? I[(Ue = p.value) == null ? void 0 : Ue.avatar] : ""),
                            icon: mr
                          }, null, 8, ["src"])) : ke("", !0),
                          ce("span", au, Te(I[p.value.name]), 1)
                        ], 64)),
                        $.children ? (Z(), ie("div", cu, [
                          [_.value.organization, _.value.dep, _.value.role].includes(
                            I[p.value.type]
                          ) ? (Z(), be(ae(Pt), {
                            key: 0,
                            link: "",
                            type: "primary",
                            onClick: St((ft) => Ce(I), ["stop"])
                          }, {
                            icon: ye(() => [
                              Be(Nn)
                            ]),
                            default: ye(() => [
                              et(" 下级 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : ke("", !0)
                        ])) : ke("", !0)
                      ]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"]))
              ])), [
                [ae(Ln), a.value]
              ]) : (Z(), ie("div", fu, Te($.emptyText), 1))
            ], 64)) : Re.value === ae(ar).role ? er((Z(), be(Yf, {
              key: 2,
              fixPropOpt: p.value,
              list: o.value,
              max: $.max,
              multiple: $.multiple,
              "hand-list": Ge.value,
              onChange: Et
            }, null, 8, ["fixPropOpt", "list", "max", "multiple", "hand-list"])), [
              [ae(Ln), a.value]
            ]) : Re.value === ae(ar).post ? er((Z(), be(zf, {
              key: 3,
              fixPropOpt: p.value,
              list: d.value,
              max: $.max,
              multiple: $.multiple,
              "hand-list": kt.value,
              onChange: ct
            }, null, 8, ["fixPropOpt", "list", "max", "multiple", "hand-list"])), [
              [ae(Ln), a.value]
            ]) : ke("", !0)
          ]),
          uu,
          ce("div", lu, [
            ce("div", du, [
              hu,
              Be(ae(Pt), {
                type: "primary",
                link: "",
                onClick: St(Ne, ["stop"])
              }, {
                default: ye(() => [
                  et("清空")
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            Be(ae(As), {
              tag: "ul",
              name: "fade",
              "item-key": "elementId",
              modelValue: R.value,
              "onUpdate:modelValue": X[5] || (X[5] = (I) => R.value = I),
              style: qt({ height: `calc(${ze.value} + 21px)` }),
              animation: ae(Bt).animation,
              group: ae(Bt).group,
              disabled: ae(Bt).disabled,
              ghostClass: ae(Bt).ghostClass,
              forceFallback: ae(Bt).ghostClass
            }, {
              item: ye(({ element: I }) => [
                Be(gs, {
                  type: "transition",
                  name: "flip-list"
                }, {
                  default: ye(() => [
                    ce("li", {
                      class: cr(["list-group-item"]),
                      style: qt({
                        borderRadius: `${ae(Bt).itemStyle.radius}px`,
                        marginBottom: `${ae(Bt).itemStyle.bottom}px`,
                        backgroundColor: `${ae(Bt).itemStyle.background}`
                      })
                    }, [
                      ce("div", null, [
                        _.value.organization === I[p.value.type] ? (Z(), be(nr, { key: 0 })) : ke("", !0),
                        _.value.dep === I[p.value.type] ? (Z(), be(rr, { key: 1 })) : _.value.role === I[p.value.type] ? (Z(), be(Vt, { key: 2 })) : _.value.post === I[p.value.type] ? (Z(), be(Zn, { key: 3 })) : _.value.user === I[p.value.type] ? (Z(), be(ae(br), {
                          key: 4,
                          size: 30,
                          src: x(p.value.avatar ? I[p.value.avatar] : ""),
                          icon: mr
                        }, null, 8, ["src"])) : ke("", !0),
                        ce("span", null, Te(I[p.value.name]), 1)
                      ]),
                      er(Be(yf, {
                        class: "close",
                        onClick: St((se) => V(I), ["stop"])
                      }, null, 8, ["onClick"]), [
                        [c0, !(I != null && I.readonly)]
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
const xu = ai(vu), bu = (e) => (ys("data-v-cfb7ded0"), e = e(), ms(), e), gu = {
  class: "approveProcess",
  id: "approveProcess"
}, yu = { class: "node" }, mu = { class: "nodeBg" }, _u = { class: "info" }, wu = { class: "explain" }, Eu = { key: 0 }, ku = { key: 0 }, Su = { key: 1 }, Cu = { key: 1 }, Au = { key: 0 }, Bu = { key: 1 }, Tu = { key: 2 }, Ru = { class: "personlist" }, Lu = { class: "avatar" }, Ou = ["src"], Nu = {
  key: 1,
  class: "nodeBg"
}, Du = ["onClick"], Iu = { class: "name" }, Pu = {
  key: 0,
  class: "sign"
}, $u = { key: 0 }, Mu = { key: 1 }, zu = ["onClick"], Fu = {
  key: 0,
  class: "required"
}, Hu = /* @__PURE__ */ bu(() => /* @__PURE__ */ ce("i", { class: "ikapprove ikapprove-xinzeng" }, null, -1)), qu = {
  name: "IkApprovalProcess"
}, Uu = /* @__PURE__ */ ln({
  ...qu,
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
  setup(e, { expose: t }) {
    const r = e, n = Uc.local.getItem("token") || "Bearer iking", i = Dn({
      nodeType: {
        发起人节点: "INITIATOR",
        审批节点: "APPROVE",
        抄送节点: "CARBON_COPY",
        办理节点: "DISPOSE",
        分支节点: "BRANCH",
        条件节点: "CONDITION",
        结束节点: "END",
        ...r.defaultNodeType
      },
      statusWithoutApprover: {
        自动通过: "AUTO_PASS",
        自动拒绝: "AUTO_REJECT",
        自动转交管理员: "TRANSMIT_TO_MANAGER",
        指定人员审批: "SPECIFIED_USER",
        ...r.statusWithoutApprover
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
        ...r.defaultFieldMap
      },
      multiple: !1,
      chooseType: []
    }), s = async (l) => {
      var a;
      if (l.multiple = !l[i.defaultFile.singleApproval] || l[i.defaultFile.isShowAddCopy], l.handList = l[i.defaultFile.approvePersonList] ? l[i.defaultFile.approvePersonList] : [], l[i.defaultFile.nodeType] === i.nodeType.抄送节点)
        l.handList.forEach((u) => {
          u.elementName = u.userName, u.elementId = u.userId, u.elementType = "USER", u.avatar = u.userAvatar, u.disabled = !0;
        }), l.chooseType = ["dep_user,", "dep", "user", "organization"], l.userList = [], l.depList = [];
      else
        switch (l[i.defaultFile.initiatorSpecifiedScopeType]) {
          case "ALL":
            l.chooseType = ["dep_user"], l.userList = [], l.depList = [];
            break;
          default:
            l.chooseType = ["user"], l.userList = l.userList ? l.userList : (a = l[i.defaultFile.initiatorSpecifiedScope]) == null ? void 0 : a.map((u) => ({
              ...u,
              elementName: (u == null ? void 0 : u.executorName) || (u == null ? void 0 : u.userName),
              elementId: (u == null ? void 0 : u.executorId) || (u == null ? void 0 : u.userId),
              avatar: ((u == null ? void 0 : u.executorAvatar) || (u == null ? void 0 : u.userAvatar)) && c((u == null ? void 0 : u.executorAvatar) || (u == null ? void 0 : u.userAvatar)) || "",
              elementType: "USER"
            }));
        }
      In(() => {
        l.isShow = !0;
      });
    }, c = (l) => {
      let a = "";
      return l.includes("http") || l.includes("https") ? a = l : a = r.loadUrl ? `${r.loadUrl}${l}` : `${location.origin + location.pathname}server/oss/download?fileUrl=${l}`, a;
    }, f = (l) => {
      let a = "";
      switch (l) {
        case i.nodeType.审批节点:
          a = "ikapprove-shenpi";
          break;
        case i.nodeType.办理节点:
          a = "ikapprove-bianji";
          break;
        case i.nodeType.抄送节点:
          a = "ikapprove-chaosong";
          break;
        default:
          a = "ikapprove-ziyuan";
      }
      return `ikapprove ${a}`;
    }, h = (l, a) => {
      r.dataList[a].handList = l.list;
      let x = (r.dataList[a][i.defaultFile.approvePersonList] || []).filter((_) => !_.canDele), p = l.list.map((_) => ({
        ..._,
        userName: _.elementName,
        userAvatar: _.avatar,
        canDele: !0
      }));
      r.dataList[a][i.defaultFile.approvePersonList] = x.concat(p);
    }, o = (l, a) => {
      r.dataList[l][i.defaultFile.approvePersonList].splice(a, 1), r.dataList[l].handList = r.dataList[l][i.defaultFile.approvePersonList];
    };
    return t({ requiredVerification: () => {
      let l = !0;
      return r.dataList.forEach((a) => {
        var u;
        a.required = !1, a[i.defaultFile.nodeType] == i.nodeType.审批节点 && a[i.defaultFile.isShowAdd] && ((u = a[i.defaultFile.approvePersonList]) != null && u.length || (l = !1, a.required = !0));
      }), l;
    } }), (l, a) => (Z(), ie("div", gu, [
      (Z(!0), ie(Xe, null, st(r.dataList, (u, x) => {
        var p, _, R, w;
        return Z(), ie("div", {
          class: "content",
          key: u.id
        }, [
          ce("div", yu, [
            ce("span", mu, [
              ce("i", {
                class: cr(f(u[i.defaultFile.nodeType]))
              }, null, 2)
            ]),
            ce("div", {
              class: "line",
              style: qt({
                "border-left": x === r.dataList.length - 1 ? "" : "2px solid var(--el-border-color)"
              })
            }, null, 4)
          ]),
          ce("div", _u, [
            ce("div", null, [
              ce("div", null, Te(u[i.defaultFile.nodeTypeName]), 1),
              ce("div", wu, [
                u[i.defaultFile.nodeType] == i.nodeType.抄送节点 ? (Z(), ie("span", Eu, [
                  u[i.defaultFile.approvePersonList].length ? (Z(), ie("span", ku, Te(`抄送${u[i.defaultFile.approvePersonList].length}人`), 1)) : ke("", !0),
                  u[i.defaultFile.isShowAdd] ? (Z(), ie("span", Su, ",可添加抄送人")) : ke("", !0)
                ])) : (Z(), ie("span", Cu, [
                  (p = u[i.defaultFile.approvePersonList]) != null && p.length ? (Z(), ie("span", Au, Te(((_ = u[i.defaultFile.approvePersonList]) == null ? void 0 : _.length) == 1 ? "1人审批" : `${(R = u[i.defaultFile.approvePersonList]) == null ? void 0 : R.length}人${u[i.defaultFile.multiExecutorTypeName]}`), 1)) : [i.statusWithoutApprover.自动通过, i.statusWithoutApprover.自动拒绝].includes(u[i.defaultFile.approveType]) ? (Z(), ie("span", Bu, Te(u[i.defaultFile.approveTypeName]), 1)) : u[i.defaultFile.executorEmptyStrategy] && u[i.defaultFile.executorEmpty] ? (Z(), ie("span", Tu, [
                    et(" 未找到审批人，"),
                    ce("span", null, Te(u[i.defaultFile.executorEmptyStrategy] == i.statusWithoutApprover.自动通过 ? "将自动通过" : u[i.defaultFile.executorEmptyStrategy] == i.statusWithoutApprover.自动转交管理员 ? "自动转交给管理员" : u[i.defaultFile.executorEmptyStrategy] == i.statusWithoutApprover.指定人员审批 ? `将自动转给指定成员${u[i.defaultFile.reserveExecutorUsers] && u[i.defaultFile.reserveExecutorUsers][0].userName}` : ""), 1)
                  ])) : (Z(), ie("span", {
                    key: 3,
                    class: cr(u.required ? "warn" : "")
                  }, "请选择" + Te(u[i.defaultFile.nodeType] === i.nodeType.办理节点 ? "办理人" : "审批人"), 3))
                ]))
              ])
            ]),
            ce("div", Ru, [
              (Z(!0), ie(Xe, null, st(u[i.defaultFile.approvePersonList], (v, g) => {
                var y;
                return Z(), ie("div", {
                  class: "list",
                  key: v.userId
                }, [
                  ce("div", null, [
                    ce("div", Lu, [
                      v.userAvatar ? (Z(), ie("img", {
                        key: 0,
                        src: c(v.userAvatar),
                        alt: ""
                      }, null, 8, Ou)) : (Z(), ie("div", Nu, [
                        ce("span", null, Te(v.userName.slice(-2)), 1)
                      ])),
                      v.canDele ? (Z(), ie("i", {
                        key: 2,
                        onClick: (k) => o(x, g),
                        class: "ikapprove ikapprove-shanchu1"
                      }, null, 8, Du)) : ke("", !0)
                    ]),
                    ce("div", Iu, Te(v.userName), 1)
                  ]),
                  u[i.defaultFile.isShowAdd] && !(u[i.defaultFile.singleApproval] && ((y = u[i.defaultFile.approvePersonList]) == null ? void 0 : y.length) == 1) ? (Z(), ie("span", Pu, [
                    u[i.defaultFile.nodeType] == i.nodeType.抄送节点 ? (Z(), ie("span", $u, "+")) : (Z(), ie("span", Mu, Te(u[i.defaultFile.multiExecutorType] == "ANY" ? "/" : u[i.defaultFile.multiExecutorType] == "ALL" ? "+" : ">"), 1))
                  ])) : ke("", !0)
                ]);
              }), 128)),
              u[i.defaultFile.isShowAdd] && !(u[i.defaultFile.singleApproval] && ((w = u[i.defaultFile.approvePersonList]) == null ? void 0 : w.length) == 1) || u[i.defaultFile.isShowAddCopy] ? (Z(), ie("span", {
                key: 0,
                class: "addBg",
                onClick: (v) => s(u)
              }, [
                u[i.defaultFile.nodeType] == i.nodeType.审批节点 ? (Z(), ie("span", Fu)) : ke("", !0),
                Hu
              ], 8, zu)) : ke("", !0),
              Be(ae(xu), {
                modelValue: u.handList,
                "onUpdate:modelValue": (v) => u.handList = v,
                show: u.isShow,
                "onUpdate:show": (v) => u.isShow = v,
                onOk: (v) => h(v, x),
                multiple: u.multiple,
                "type-option": {
                  dep: "DEPT",
                  user: "USER",
                  role: "ROLE",
                  post: "POST"
                },
                api: {
                  methods: "post",
                  url: e.pickerUrl,
                  headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    Authorization: ae(n)
                  }
                },
                "dep-list": u.depList,
                "user-list": u.userList,
                "organization-list": u.organizationList,
                "prop-option": {
                  name: "elementName",
                  id: "elementId",
                  type: "elementType",
                  avatar: "avatar"
                },
                chooseType: u.chooseType
              }, null, 8, ["modelValue", "onUpdate:modelValue", "show", "onUpdate:show", "onOk", "multiple", "api", "dep-list", "user-list", "organization-list", "chooseType"])
            ])
          ])
        ]);
      }), 128))
    ]));
  }
});
const Wu = /* @__PURE__ */ pt(Uu, [["__scopeId", "data-v-cfb7ded0"]]), ju = ai(Wu);
export {
  ju as IKApprovalProcess,
  ju as default
};
