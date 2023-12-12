import { openBlock as te, createElementBlock as he, createElementVNode as xe, defineComponent as qn, computed as Pe, ref as Le, createBlock as be, unref as oe, withCtx as me, createTextVNode as nt, createCommentVNode as Oe, Fragment as it, renderList as pt, createVNode as Be, toDisplayString as Ze, useCssVars as os, watch as Tt, toRef as as, reactive as Qn, nextTick as Jn, watchEffect as e0, withModifiers as Ct, normalizeStyle as Xt, normalizeClass as Cn, withDirectives as jt, vShow as t0, Transition as cs } from "vue";
import { ElCheckbox as Rt, ElCheckboxGroup as Fn, ElRadioGroup as yr, ElRadio as Un, ElDialog as fs, ElButton as Pt, ElInput as us, ElRadioButton as ls, ElBreadcrumb as ds, ElBreadcrumbItem as hs, ElAvatar as hr, vLoading as Sn } from "element-plus";
import vs from "vuedraggable";
import * as ps from "lodash-es";
const xs = (e, r) => {
  if (e.install = (t) => {
    for (const n of [e, ...Object.values(r ?? {})])
      t.component(n.name, n);
  }, r)
    for (const [t, n] of Object.entries(r))
      e[t] = n;
  return e;
};
var fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bs(e) {
  if (e.__esModule)
    return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      if (this instanceof n) {
        var i = [null];
        i.push.apply(i, arguments);
        var s = Function.bind.apply(r, i);
        return new s();
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
var r0 = {}, gs = {
  get exports() {
    return r0;
  },
  set exports(e) {
    r0 = e;
  }
};
function tr(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var _r = {}, ms = {
  get exports() {
    return _r;
  },
  set exports(e) {
    _r = e;
  }
};
const ys = {}, _s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ys
}, Symbol.toStringTag, { value: "Module" })), ws = /* @__PURE__ */ bs(_s);
var n0;
function ge() {
  return n0 || (n0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n();
    })(fe, function() {
      var t = t || function(n, i) {
        var s;
        if (typeof window < "u" && window.crypto && (s = window.crypto), typeof self < "u" && self.crypto && (s = self.crypto), typeof globalThis < "u" && globalThis.crypto && (s = globalThis.crypto), !s && typeof window < "u" && window.msCrypto && (s = window.msCrypto), !s && typeof fe < "u" && fe.crypto && (s = fe.crypto), !s && typeof tr == "function")
          try {
            s = ws;
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
          return function(p) {
            var g;
            return w.prototype = p, g = new w(), w.prototype = null, g;
          };
        }(), l = {}, o = l.lib = {}, u = o.Base = function() {
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
              var p = f(this);
              return w && p.mixIn(w), (!p.hasOwnProperty("init") || this.init === p.init) && (p.init = function() {
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
              for (var p in w)
                w.hasOwnProperty(p) && (this[p] = w[p]);
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
        }(), d = o.WordArray = u.extend({
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
          init: function(w, p) {
            w = this.words = w || [], p != i ? this.sigBytes = p : this.sigBytes = w.length * 4;
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
            return (w || h).stringify(this);
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
            var p = this.words, g = w.words, m = this.sigBytes, k = w.sigBytes;
            if (this.clamp(), m % 4)
              for (var E = 0; E < k; E++) {
                var R = g[E >>> 2] >>> 24 - E % 4 * 8 & 255;
                p[m + E >>> 2] |= R << 24 - (m + E) % 4 * 8;
              }
            else
              for (var I = 0; I < k; I += 4)
                p[m + I >>> 2] = g[I >>> 2];
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
            var w = this.words, p = this.sigBytes;
            w[p >>> 2] &= 4294967295 << 32 - p % 4 * 8, w.length = n.ceil(p / 4);
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
            for (var p = [], g = 0; g < w; g += 4)
              p.push(c());
            return new d.init(p, w);
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
          stringify: function(w) {
            for (var p = w.words, g = w.sigBytes, m = [], k = 0; k < g; k++) {
              var E = p[k >>> 2] >>> 24 - k % 4 * 8 & 255;
              m.push((E >>> 4).toString(16)), m.push((E & 15).toString(16));
            }
            return m.join("");
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
            for (var p = w.length, g = [], m = 0; m < p; m += 2)
              g[m >>> 3] |= parseInt(w.substr(m, 2), 16) << 24 - m % 8 * 4;
            return new d.init(g, p / 2);
          }
        }, b = a.Latin1 = {
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
            for (var p = w.words, g = w.sigBytes, m = [], k = 0; k < g; k++) {
              var E = p[k >>> 2] >>> 24 - k % 4 * 8 & 255;
              m.push(String.fromCharCode(E));
            }
            return m.join("");
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
            for (var p = w.length, g = [], m = 0; m < p; m++)
              g[m >>> 2] |= (w.charCodeAt(m) & 255) << 24 - m % 4 * 8;
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
        }, _ = o.BufferedBlockAlgorithm = u.extend({
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
          _append: function(w) {
            typeof w == "string" && (w = v.parse(w)), this._data.concat(w), this._nDataBytes += w.sigBytes;
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
            var p, g = this._data, m = g.words, k = g.sigBytes, E = this.blockSize, R = E * 4, I = k / R;
            w ? I = n.ceil(I) : I = n.max((I | 0) - this._minBufferSize, 0);
            var C = I * E, B = n.min(C * 4, k);
            if (C) {
              for (var T = 0; T < C; T += E)
                this._doProcessBlock(m, T);
              p = m.splice(0, C), g.sigBytes -= B;
            }
            return new d.init(p, B);
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
        o.Hasher = _.extend({
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
          _createHelper: function(w) {
            return function(p, g) {
              return new w.init(g).finalize(p);
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
            return function(p, g) {
              return new O.HMAC.init(w, g).finalize(p);
            };
          }
        });
        var O = l.algo = {};
        return l;
      }(Math);
      return t;
    });
  }(ms)), _r;
}
var wr = {}, Es = {
  get exports() {
    return wr;
  },
  set exports(e) {
    wr = e;
  }
}, i0;
function an() {
  return i0 || (i0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ge());
    })(fe, function(t) {
      return function(n) {
        var i = t, s = i.lib, c = s.Base, f = s.WordArray, l = i.x64 = {};
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
          init: function(o, u) {
            this.high = o, this.low = u;
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
          init: function(o, u) {
            o = this.words = o || [], u != n ? this.sigBytes = u : this.sigBytes = o.length * 8;
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
            for (var o = this.words, u = o.length, d = [], a = 0; a < u; a++) {
              var h = o[a];
              d.push(h.high), d.push(h.low);
            }
            return f.create(d, this.sigBytes);
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
            for (var o = c.clone.call(this), u = o.words = this.words.slice(0), d = u.length, a = 0; a < d; a++)
              u[a] = u[a].clone();
            return o;
          }
        });
      }(), t;
    });
  }(Es)), wr;
}
var Er = {}, ks = {
  get exports() {
    return Er;
  },
  set exports(e) {
    Er = e;
  }
}, s0;
function Cs() {
  return s0 || (s0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ge());
    })(fe, function(t) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var n = t, i = n.lib, s = i.WordArray, c = s.init, f = s.init = function(l) {
            if (l instanceof ArrayBuffer && (l = new Uint8Array(l)), (l instanceof Int8Array || typeof Uint8ClampedArray < "u" && l instanceof Uint8ClampedArray || l instanceof Int16Array || l instanceof Uint16Array || l instanceof Int32Array || l instanceof Uint32Array || l instanceof Float32Array || l instanceof Float64Array) && (l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength)), l instanceof Uint8Array) {
              for (var o = l.byteLength, u = [], d = 0; d < o; d++)
                u[d >>> 2] |= l[d] << 24 - d % 4 * 8;
              c.call(this, u, o);
            } else
              c.apply(this, arguments);
          };
          f.prototype = s;
        }
      }(), t.lib.WordArray;
    });
  }(ks)), Er;
}
var kr = {}, Ss = {
  get exports() {
    return kr;
  },
  set exports(e) {
    kr = e;
  }
}, o0;
function Bs() {
  return o0 || (o0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ge());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, s = i.WordArray, c = n.enc;
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
            for (var o = l.words, u = l.sigBytes, d = [], a = 0; a < u; a += 2) {
              var h = o[a >>> 2] >>> 16 - a % 4 * 8 & 65535;
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
            for (var o = l.length, u = [], d = 0; d < o; d++)
              u[d >>> 1] |= l.charCodeAt(d) << 16 - d % 2 * 16;
            return s.create(u, o * 2);
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
            for (var o = l.words, u = l.sigBytes, d = [], a = 0; a < u; a += 2) {
              var h = f(o[a >>> 2] >>> 16 - a % 4 * 8 & 65535);
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
            for (var o = l.length, u = [], d = 0; d < o; d++)
              u[d >>> 1] |= f(l.charCodeAt(d) << 16 - d % 2 * 16);
            return s.create(u, o * 2);
          }
        };
        function f(l) {
          return l << 8 & 4278255360 | l >>> 8 & 16711935;
        }
      }(), t.enc.Utf16;
    });
  }(Ss)), kr;
}
var Cr = {}, As = {
  get exports() {
    return Cr;
  },
  set exports(e) {
    Cr = e;
  }
}, a0;
function It() {
  return a0 || (a0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ge());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, s = i.WordArray, c = n.enc;
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
            var o = l.words, u = l.sigBytes, d = this._map;
            l.clamp();
            for (var a = [], h = 0; h < u; h += 3)
              for (var b = o[h >>> 2] >>> 24 - h % 4 * 8 & 255, v = o[h + 1 >>> 2] >>> 24 - (h + 1) % 4 * 8 & 255, _ = o[h + 2 >>> 2] >>> 24 - (h + 2) % 4 * 8 & 255, O = b << 16 | v << 8 | _, w = 0; w < 4 && h + w * 0.75 < u; w++)
                a.push(d.charAt(O >>> 6 * (3 - w) & 63));
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
            var o = l.length, u = this._map, d = this._reverseMap;
            if (!d) {
              d = this._reverseMap = [];
              for (var a = 0; a < u.length; a++)
                d[u.charCodeAt(a)] = a;
            }
            var h = u.charAt(64);
            if (h) {
              var b = l.indexOf(h);
              b !== -1 && (o = b);
            }
            return f(l, o, d);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function f(l, o, u) {
          for (var d = [], a = 0, h = 0; h < o; h++)
            if (h % 4) {
              var b = u[l.charCodeAt(h - 1)] << h % 4 * 2, v = u[l.charCodeAt(h)] >>> 6 - h % 4 * 2, _ = b | v;
              d[a >>> 2] |= _ << 24 - a % 4 * 8, a++;
            }
          return s.create(d, a);
        }
      }(), t.enc.Base64;
    });
  }(As)), Cr;
}
var Sr = {}, Rs = {
  get exports() {
    return Sr;
  },
  set exports(e) {
    Sr = e;
  }
}, c0;
function Os() {
  return c0 || (c0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ge());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, s = i.WordArray, c = n.enc;
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
          stringify: function(l, o = !0) {
            var u = l.words, d = l.sigBytes, a = o ? this._safe_map : this._map;
            l.clamp();
            for (var h = [], b = 0; b < d; b += 3)
              for (var v = u[b >>> 2] >>> 24 - b % 4 * 8 & 255, _ = u[b + 1 >>> 2] >>> 24 - (b + 1) % 4 * 8 & 255, O = u[b + 2 >>> 2] >>> 24 - (b + 2) % 4 * 8 & 255, w = v << 16 | _ << 8 | O, p = 0; p < 4 && b + p * 0.75 < d; p++)
                h.push(a.charAt(w >>> 6 * (3 - p) & 63));
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
          parse: function(l, o = !0) {
            var u = l.length, d = o ? this._safe_map : this._map, a = this._reverseMap;
            if (!a) {
              a = this._reverseMap = [];
              for (var h = 0; h < d.length; h++)
                a[d.charCodeAt(h)] = h;
            }
            var b = d.charAt(64);
            if (b) {
              var v = l.indexOf(b);
              v !== -1 && (u = v);
            }
            return f(l, u, a);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function f(l, o, u) {
          for (var d = [], a = 0, h = 0; h < o; h++)
            if (h % 4) {
              var b = u[l.charCodeAt(h - 1)] << h % 4 * 2, v = u[l.charCodeAt(h)] >>> 6 - h % 4 * 2, _ = b | v;
              d[a >>> 2] |= _ << 24 - a % 4 * 8, a++;
            }
          return s.create(d, a);
        }
      }(), t.enc.Base64url;
    });
  }(Rs)), Sr;
}
var Br = {}, Ls = {
  get exports() {
    return Br;
  },
  set exports(e) {
    Br = e;
  }
}, f0;
function Mt() {
  return f0 || (f0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ge());
    })(fe, function(t) {
      return function(n) {
        var i = t, s = i.lib, c = s.WordArray, f = s.Hasher, l = i.algo, o = [];
        (function() {
          for (var v = 0; v < 64; v++)
            o[v] = n.abs(n.sin(v + 1)) * 4294967296 | 0;
        })();
        var u = l.MD5 = f.extend({
          _doReset: function() {
            this._hash = new c.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(v, _) {
            for (var O = 0; O < 16; O++) {
              var w = _ + O, p = v[w];
              v[w] = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360;
            }
            var g = this._hash.words, m = v[_ + 0], k = v[_ + 1], E = v[_ + 2], R = v[_ + 3], I = v[_ + 4], C = v[_ + 5], B = v[_ + 6], T = v[_ + 7], D = v[_ + 8], $ = v[_ + 9], H = v[_ + 10], W = v[_ + 11], K = v[_ + 12], ee = v[_ + 13], Q = v[_ + 14], re = v[_ + 15], z = g[0], q = g[1], F = g[2], V = g[3];
            z = d(z, q, F, V, m, 7, o[0]), V = d(V, z, q, F, k, 12, o[1]), F = d(F, V, z, q, E, 17, o[2]), q = d(q, F, V, z, R, 22, o[3]), z = d(z, q, F, V, I, 7, o[4]), V = d(V, z, q, F, C, 12, o[5]), F = d(F, V, z, q, B, 17, o[6]), q = d(q, F, V, z, T, 22, o[7]), z = d(z, q, F, V, D, 7, o[8]), V = d(V, z, q, F, $, 12, o[9]), F = d(F, V, z, q, H, 17, o[10]), q = d(q, F, V, z, W, 22, o[11]), z = d(z, q, F, V, K, 7, o[12]), V = d(V, z, q, F, ee, 12, o[13]), F = d(F, V, z, q, Q, 17, o[14]), q = d(q, F, V, z, re, 22, o[15]), z = a(z, q, F, V, k, 5, o[16]), V = a(V, z, q, F, B, 9, o[17]), F = a(F, V, z, q, W, 14, o[18]), q = a(q, F, V, z, m, 20, o[19]), z = a(z, q, F, V, C, 5, o[20]), V = a(V, z, q, F, H, 9, o[21]), F = a(F, V, z, q, re, 14, o[22]), q = a(q, F, V, z, I, 20, o[23]), z = a(z, q, F, V, $, 5, o[24]), V = a(V, z, q, F, Q, 9, o[25]), F = a(F, V, z, q, R, 14, o[26]), q = a(q, F, V, z, D, 20, o[27]), z = a(z, q, F, V, ee, 5, o[28]), V = a(V, z, q, F, E, 9, o[29]), F = a(F, V, z, q, T, 14, o[30]), q = a(q, F, V, z, K, 20, o[31]), z = h(z, q, F, V, C, 4, o[32]), V = h(V, z, q, F, D, 11, o[33]), F = h(F, V, z, q, W, 16, o[34]), q = h(q, F, V, z, Q, 23, o[35]), z = h(z, q, F, V, k, 4, o[36]), V = h(V, z, q, F, I, 11, o[37]), F = h(F, V, z, q, T, 16, o[38]), q = h(q, F, V, z, H, 23, o[39]), z = h(z, q, F, V, ee, 4, o[40]), V = h(V, z, q, F, m, 11, o[41]), F = h(F, V, z, q, R, 16, o[42]), q = h(q, F, V, z, B, 23, o[43]), z = h(z, q, F, V, $, 4, o[44]), V = h(V, z, q, F, K, 11, o[45]), F = h(F, V, z, q, re, 16, o[46]), q = h(q, F, V, z, E, 23, o[47]), z = b(z, q, F, V, m, 6, o[48]), V = b(V, z, q, F, T, 10, o[49]), F = b(F, V, z, q, Q, 15, o[50]), q = b(q, F, V, z, C, 21, o[51]), z = b(z, q, F, V, K, 6, o[52]), V = b(V, z, q, F, R, 10, o[53]), F = b(F, V, z, q, H, 15, o[54]), q = b(q, F, V, z, k, 21, o[55]), z = b(z, q, F, V, D, 6, o[56]), V = b(V, z, q, F, re, 10, o[57]), F = b(F, V, z, q, B, 15, o[58]), q = b(q, F, V, z, ee, 21, o[59]), z = b(z, q, F, V, I, 6, o[60]), V = b(V, z, q, F, W, 10, o[61]), F = b(F, V, z, q, E, 15, o[62]), q = b(q, F, V, z, $, 21, o[63]), g[0] = g[0] + z | 0, g[1] = g[1] + q | 0, g[2] = g[2] + F | 0, g[3] = g[3] + V | 0;
          },
          _doFinalize: function() {
            var v = this._data, _ = v.words, O = this._nDataBytes * 8, w = v.sigBytes * 8;
            _[w >>> 5] |= 128 << 24 - w % 32;
            var p = n.floor(O / 4294967296), g = O;
            _[(w + 64 >>> 9 << 4) + 15] = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360, _[(w + 64 >>> 9 << 4) + 14] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, v.sigBytes = (_.length + 1) * 4, this._process();
            for (var m = this._hash, k = m.words, E = 0; E < 4; E++) {
              var R = k[E];
              k[E] = (R << 8 | R >>> 24) & 16711935 | (R << 24 | R >>> 8) & 4278255360;
            }
            return m;
          },
          clone: function() {
            var v = f.clone.call(this);
            return v._hash = this._hash.clone(), v;
          }
        });
        function d(v, _, O, w, p, g, m) {
          var k = v + (_ & O | ~_ & w) + p + m;
          return (k << g | k >>> 32 - g) + _;
        }
        function a(v, _, O, w, p, g, m) {
          var k = v + (_ & w | O & ~w) + p + m;
          return (k << g | k >>> 32 - g) + _;
        }
        function h(v, _, O, w, p, g, m) {
          var k = v + (_ ^ O ^ w) + p + m;
          return (k << g | k >>> 32 - g) + _;
        }
        function b(v, _, O, w, p, g, m) {
          var k = v + (O ^ (_ | ~w)) + p + m;
          return (k << g | k >>> 32 - g) + _;
        }
        i.MD5 = f._createHelper(u), i.HmacMD5 = f._createHmacHelper(u);
      }(Math), t.MD5;
    });
  }(Ls)), Br;
}
var Ar = {}, Ns = {
  get exports() {
    return Ar;
  },
  set exports(e) {
    Ar = e;
  }
}, u0;
function Wn() {
  return u0 || (u0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ge());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, s = i.WordArray, c = i.Hasher, f = n.algo, l = [], o = f.SHA1 = c.extend({
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
            for (var a = this._hash.words, h = a[0], b = a[1], v = a[2], _ = a[3], O = a[4], w = 0; w < 80; w++) {
              if (w < 16)
                l[w] = u[d + w] | 0;
              else {
                var p = l[w - 3] ^ l[w - 8] ^ l[w - 14] ^ l[w - 16];
                l[w] = p << 1 | p >>> 31;
              }
              var g = (h << 5 | h >>> 27) + O + l[w];
              w < 20 ? g += (b & v | ~b & _) + 1518500249 : w < 40 ? g += (b ^ v ^ _) + 1859775393 : w < 60 ? g += (b & v | b & _ | v & _) - 1894007588 : g += (b ^ v ^ _) - 899497514, O = _, _ = v, v = b << 30 | b >>> 2, b = h, h = g;
            }
            a[0] = a[0] + h | 0, a[1] = a[1] + b | 0, a[2] = a[2] + v | 0, a[3] = a[3] + _ | 0, a[4] = a[4] + O | 0;
          },
          _doFinalize: function() {
            var u = this._data, d = u.words, a = this._nDataBytes * 8, h = u.sigBytes * 8;
            return d[h >>> 5] |= 128 << 24 - h % 32, d[(h + 64 >>> 9 << 4) + 14] = Math.floor(a / 4294967296), d[(h + 64 >>> 9 << 4) + 15] = a, u.sigBytes = d.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var u = c.clone.call(this);
            return u._hash = this._hash.clone(), u;
          }
        });
        n.SHA1 = c._createHelper(o), n.HmacSHA1 = c._createHmacHelper(o);
      }(), t.SHA1;
    });
  }(Ns)), Ar;
}
var Rr = {}, Ds = {
  get exports() {
    return Rr;
  },
  set exports(e) {
    Rr = e;
  }
}, l0;
function ti() {
  return l0 || (l0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ge());
    })(fe, function(t) {
      return function(n) {
        var i = t, s = i.lib, c = s.WordArray, f = s.Hasher, l = i.algo, o = [], u = [];
        (function() {
          function h(O) {
            for (var w = n.sqrt(O), p = 2; p <= w; p++)
              if (!(O % p))
                return !1;
            return !0;
          }
          function b(O) {
            return (O - (O | 0)) * 4294967296 | 0;
          }
          for (var v = 2, _ = 0; _ < 64; )
            h(v) && (_ < 8 && (o[_] = b(n.pow(v, 1 / 2))), u[_] = b(n.pow(v, 1 / 3)), _++), v++;
        })();
        var d = [], a = l.SHA256 = f.extend({
          _doReset: function() {
            this._hash = new c.init(o.slice(0));
          },
          _doProcessBlock: function(h, b) {
            for (var v = this._hash.words, _ = v[0], O = v[1], w = v[2], p = v[3], g = v[4], m = v[5], k = v[6], E = v[7], R = 0; R < 64; R++) {
              if (R < 16)
                d[R] = h[b + R] | 0;
              else {
                var I = d[R - 15], C = (I << 25 | I >>> 7) ^ (I << 14 | I >>> 18) ^ I >>> 3, B = d[R - 2], T = (B << 15 | B >>> 17) ^ (B << 13 | B >>> 19) ^ B >>> 10;
                d[R] = C + d[R - 7] + T + d[R - 16];
              }
              var D = g & m ^ ~g & k, $ = _ & O ^ _ & w ^ O & w, H = (_ << 30 | _ >>> 2) ^ (_ << 19 | _ >>> 13) ^ (_ << 10 | _ >>> 22), W = (g << 26 | g >>> 6) ^ (g << 21 | g >>> 11) ^ (g << 7 | g >>> 25), K = E + W + D + u[R] + d[R], ee = H + $;
              E = k, k = m, m = g, g = p + K | 0, p = w, w = O, O = _, _ = K + ee | 0;
            }
            v[0] = v[0] + _ | 0, v[1] = v[1] + O | 0, v[2] = v[2] + w | 0, v[3] = v[3] + p | 0, v[4] = v[4] + g | 0, v[5] = v[5] + m | 0, v[6] = v[6] + k | 0, v[7] = v[7] + E | 0;
          },
          _doFinalize: function() {
            var h = this._data, b = h.words, v = this._nDataBytes * 8, _ = h.sigBytes * 8;
            return b[_ >>> 5] |= 128 << 24 - _ % 32, b[(_ + 64 >>> 9 << 4) + 14] = n.floor(v / 4294967296), b[(_ + 64 >>> 9 << 4) + 15] = v, h.sigBytes = b.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var h = f.clone.call(this);
            return h._hash = this._hash.clone(), h;
          }
        });
        i.SHA256 = f._createHelper(a), i.HmacSHA256 = f._createHmacHelper(a);
      }(Math), t.SHA256;
    });
  }(Ds)), Rr;
}
var Or = {}, Ts = {
  get exports() {
    return Or;
  },
  set exports(e) {
    Or = e;
  }
}, d0;
function Ps() {
  return d0 || (d0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), ti());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, s = i.WordArray, c = n.algo, f = c.SHA256, l = c.SHA224 = f.extend({
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
        n.SHA224 = f._createHelper(l), n.HmacSHA224 = f._createHmacHelper(l);
      }(), t.SHA224;
    });
  }(Ts)), Or;
}
var Lr = {}, Is = {
  get exports() {
    return Lr;
  },
  set exports(e) {
    Lr = e;
  }
}, h0;
function ri() {
  return h0 || (h0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), an());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, s = i.Hasher, c = n.x64, f = c.Word, l = c.WordArray, o = n.algo;
        function u() {
          return f.create.apply(f, arguments);
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
        ], a = [];
        (function() {
          for (var b = 0; b < 80; b++)
            a[b] = u();
        })();
        var h = o.SHA512 = s.extend({
          _doReset: function() {
            this._hash = new l.init([
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
          _doProcessBlock: function(b, v) {
            for (var _ = this._hash.words, O = _[0], w = _[1], p = _[2], g = _[3], m = _[4], k = _[5], E = _[6], R = _[7], I = O.high, C = O.low, B = w.high, T = w.low, D = p.high, $ = p.low, H = g.high, W = g.low, K = m.high, ee = m.low, Q = k.high, re = k.low, z = E.high, q = E.low, F = R.high, V = R.low, de = I, pe = C, Ce = B, ce = T, Se = D, Me = $, ot = H, Xe = W, $e = K, Ae = ee, Ne = Q, _t = re, ht = z, Je = q, wt = F, et = V, He = 0; He < 80; He++) {
              var qe, Ke, Et = a[He];
              if (He < 16)
                Ke = Et.high = b[v + He * 2] | 0, qe = Et.low = b[v + He * 2 + 1] | 0;
              else {
                var kt = a[He - 15], at = kt.high, M = kt.low, X = (at >>> 1 | M << 31) ^ (at >>> 8 | M << 24) ^ at >>> 7, P = (M >>> 1 | at << 31) ^ (M >>> 8 | at << 24) ^ (M >>> 7 | at << 25), ie = a[He - 2], _e = ie.high, Fe = ie.low, ct = (_e >>> 19 | Fe << 13) ^ (_e << 3 | Fe >>> 29) ^ _e >>> 6, tt = (Fe >>> 19 | _e << 13) ^ (Fe << 3 | _e >>> 29) ^ (Fe >>> 6 | _e << 26), Dt = a[He - 7], De = Dt.high, We = Dt.low, Yt = a[He - 16], hn = Yt.high, ft = Yt.low;
                qe = P + We, Ke = X + De + (qe >>> 0 < P >>> 0 ? 1 : 0), qe = qe + tt, Ke = Ke + ct + (qe >>> 0 < tt >>> 0 ? 1 : 0), qe = qe + ft, Ke = Ke + hn + (qe >>> 0 < ft >>> 0 ? 1 : 0), Et.high = Ke, Et.low = qe;
              }
              var vn = $e & Ne ^ ~$e & ht, ar = Ae & _t ^ ~Ae & Je, cr = de & Ce ^ de & Se ^ Ce & Se, pn = pe & ce ^ pe & Me ^ ce & Me, xn = (de >>> 28 | pe << 4) ^ (de << 30 | pe >>> 2) ^ (de << 25 | pe >>> 7), fr = (pe >>> 28 | de << 4) ^ (pe << 30 | de >>> 2) ^ (pe << 25 | de >>> 7), bn = ($e >>> 14 | Ae << 18) ^ ($e >>> 18 | Ae << 14) ^ ($e << 23 | Ae >>> 9), gn = (Ae >>> 14 | $e << 18) ^ (Ae >>> 18 | $e << 14) ^ (Ae << 23 | $e >>> 9), ur = d[He], mn = ur.high, lr = ur.low, Ge = et + gn, vt = wt + bn + (Ge >>> 0 < et >>> 0 ? 1 : 0), Ge = Ge + ar, vt = vt + vn + (Ge >>> 0 < ar >>> 0 ? 1 : 0), Ge = Ge + lr, vt = vt + mn + (Ge >>> 0 < lr >>> 0 ? 1 : 0), Ge = Ge + qe, vt = vt + Ke + (Ge >>> 0 < qe >>> 0 ? 1 : 0), Kt = fr + pn, yn = xn + cr + (Kt >>> 0 < fr >>> 0 ? 1 : 0);
              wt = ht, et = Je, ht = Ne, Je = _t, Ne = $e, _t = Ae, Ae = Xe + Ge | 0, $e = ot + vt + (Ae >>> 0 < Xe >>> 0 ? 1 : 0) | 0, ot = Se, Xe = Me, Se = Ce, Me = ce, Ce = de, ce = pe, pe = Ge + Kt | 0, de = vt + yn + (pe >>> 0 < Ge >>> 0 ? 1 : 0) | 0;
            }
            C = O.low = C + pe, O.high = I + de + (C >>> 0 < pe >>> 0 ? 1 : 0), T = w.low = T + ce, w.high = B + Ce + (T >>> 0 < ce >>> 0 ? 1 : 0), $ = p.low = $ + Me, p.high = D + Se + ($ >>> 0 < Me >>> 0 ? 1 : 0), W = g.low = W + Xe, g.high = H + ot + (W >>> 0 < Xe >>> 0 ? 1 : 0), ee = m.low = ee + Ae, m.high = K + $e + (ee >>> 0 < Ae >>> 0 ? 1 : 0), re = k.low = re + _t, k.high = Q + Ne + (re >>> 0 < _t >>> 0 ? 1 : 0), q = E.low = q + Je, E.high = z + ht + (q >>> 0 < Je >>> 0 ? 1 : 0), V = R.low = V + et, R.high = F + wt + (V >>> 0 < et >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var b = this._data, v = b.words, _ = this._nDataBytes * 8, O = b.sigBytes * 8;
            v[O >>> 5] |= 128 << 24 - O % 32, v[(O + 128 >>> 10 << 5) + 30] = Math.floor(_ / 4294967296), v[(O + 128 >>> 10 << 5) + 31] = _, b.sigBytes = v.length * 4, this._process();
            var w = this._hash.toX32();
            return w;
          },
          clone: function() {
            var b = s.clone.call(this);
            return b._hash = this._hash.clone(), b;
          },
          blockSize: 1024 / 32
        });
        n.SHA512 = s._createHelper(h), n.HmacSHA512 = s._createHmacHelper(h);
      }(), t.SHA512;
    });
  }(Is)), Lr;
}
var Nr = {}, Ms = {
  get exports() {
    return Nr;
  },
  set exports(e) {
    Nr = e;
  }
}, v0;
function Hs() {
  return v0 || (v0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), an(), ri());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.x64, s = i.Word, c = i.WordArray, f = n.algo, l = f.SHA512, o = f.SHA384 = l.extend({
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
            var u = l._doFinalize.call(this);
            return u.sigBytes -= 16, u;
          }
        });
        n.SHA384 = l._createHelper(o), n.HmacSHA384 = l._createHmacHelper(o);
      }(), t.SHA384;
    });
  }(Ms)), Nr;
}
var Dr = {}, zs = {
  get exports() {
    return Dr;
  },
  set exports(e) {
    Dr = e;
  }
}, p0;
function $s() {
  return p0 || (p0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), an());
    })(fe, function(t) {
      return function(n) {
        var i = t, s = i.lib, c = s.WordArray, f = s.Hasher, l = i.x64, o = l.Word, u = i.algo, d = [], a = [], h = [];
        (function() {
          for (var _ = 1, O = 0, w = 0; w < 24; w++) {
            d[_ + 5 * O] = (w + 1) * (w + 2) / 2 % 64;
            var p = O % 5, g = (2 * _ + 3 * O) % 5;
            _ = p, O = g;
          }
          for (var _ = 0; _ < 5; _++)
            for (var O = 0; O < 5; O++)
              a[_ + 5 * O] = O + (2 * _ + 3 * O) % 5 * 5;
          for (var m = 1, k = 0; k < 24; k++) {
            for (var E = 0, R = 0, I = 0; I < 7; I++) {
              if (m & 1) {
                var C = (1 << I) - 1;
                C < 32 ? R ^= 1 << C : E ^= 1 << C - 32;
              }
              m & 128 ? m = m << 1 ^ 113 : m <<= 1;
            }
            h[k] = o.create(E, R);
          }
        })();
        var b = [];
        (function() {
          for (var _ = 0; _ < 25; _++)
            b[_] = o.create();
        })();
        var v = u.SHA3 = f.extend({
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
            for (var _ = this._state = [], O = 0; O < 25; O++)
              _[O] = new o.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(_, O) {
            for (var w = this._state, p = this.blockSize / 2, g = 0; g < p; g++) {
              var m = _[O + 2 * g], k = _[O + 2 * g + 1];
              m = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360, k = (k << 8 | k >>> 24) & 16711935 | (k << 24 | k >>> 8) & 4278255360;
              var E = w[g];
              E.high ^= k, E.low ^= m;
            }
            for (var R = 0; R < 24; R++) {
              for (var I = 0; I < 5; I++) {
                for (var C = 0, B = 0, T = 0; T < 5; T++) {
                  var E = w[I + 5 * T];
                  C ^= E.high, B ^= E.low;
                }
                var D = b[I];
                D.high = C, D.low = B;
              }
              for (var I = 0; I < 5; I++)
                for (var $ = b[(I + 4) % 5], H = b[(I + 1) % 5], W = H.high, K = H.low, C = $.high ^ (W << 1 | K >>> 31), B = $.low ^ (K << 1 | W >>> 31), T = 0; T < 5; T++) {
                  var E = w[I + 5 * T];
                  E.high ^= C, E.low ^= B;
                }
              for (var ee = 1; ee < 25; ee++) {
                var C, B, E = w[ee], Q = E.high, re = E.low, z = d[ee];
                z < 32 ? (C = Q << z | re >>> 32 - z, B = re << z | Q >>> 32 - z) : (C = re << z - 32 | Q >>> 64 - z, B = Q << z - 32 | re >>> 64 - z);
                var q = b[a[ee]];
                q.high = C, q.low = B;
              }
              var F = b[0], V = w[0];
              F.high = V.high, F.low = V.low;
              for (var I = 0; I < 5; I++)
                for (var T = 0; T < 5; T++) {
                  var ee = I + 5 * T, E = w[ee], de = b[ee], pe = b[(I + 1) % 5 + 5 * T], Ce = b[(I + 2) % 5 + 5 * T];
                  E.high = de.high ^ ~pe.high & Ce.high, E.low = de.low ^ ~pe.low & Ce.low;
                }
              var E = w[0], ce = h[R];
              E.high ^= ce.high, E.low ^= ce.low;
            }
          },
          _doFinalize: function() {
            var _ = this._data, O = _.words;
            this._nDataBytes * 8;
            var w = _.sigBytes * 8, p = this.blockSize * 32;
            O[w >>> 5] |= 1 << 24 - w % 32, O[(n.ceil((w + 1) / p) * p >>> 5) - 1] |= 128, _.sigBytes = O.length * 4, this._process();
            for (var g = this._state, m = this.cfg.outputLength / 8, k = m / 8, E = [], R = 0; R < k; R++) {
              var I = g[R], C = I.high, B = I.low;
              C = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, B = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360, E.push(B), E.push(C);
            }
            return new c.init(E, m);
          },
          clone: function() {
            for (var _ = f.clone.call(this), O = _._state = this._state.slice(0), w = 0; w < 25; w++)
              O[w] = O[w].clone();
            return _;
          }
        });
        i.SHA3 = f._createHelper(v), i.HmacSHA3 = f._createHmacHelper(v);
      }(Math), t.SHA3;
    });
  }(zs)), Dr;
}
var Tr = {}, qs = {
  get exports() {
    return Tr;
  },
  set exports(e) {
    Tr = e;
  }
}, x0;
function Fs() {
  return x0 || (x0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ge());
    })(fe, function(t) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(n) {
        var i = t, s = i.lib, c = s.WordArray, f = s.Hasher, l = i.algo, o = c.create([
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
        ]), u = c.create([
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
        ]), h = c.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), b = c.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), v = l.RIPEMD160 = f.extend({
          _doReset: function() {
            this._hash = c.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(k, E) {
            for (var R = 0; R < 16; R++) {
              var I = E + R, C = k[I];
              k[I] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360;
            }
            var B = this._hash.words, T = h.words, D = b.words, $ = o.words, H = u.words, W = d.words, K = a.words, ee, Q, re, z, q, F, V, de, pe, Ce;
            F = ee = B[0], V = Q = B[1], de = re = B[2], pe = z = B[3], Ce = q = B[4];
            for (var ce, R = 0; R < 80; R += 1)
              ce = ee + k[E + $[R]] | 0, R < 16 ? ce += _(Q, re, z) + T[0] : R < 32 ? ce += O(Q, re, z) + T[1] : R < 48 ? ce += w(Q, re, z) + T[2] : R < 64 ? ce += p(Q, re, z) + T[3] : ce += g(Q, re, z) + T[4], ce = ce | 0, ce = m(ce, W[R]), ce = ce + q | 0, ee = q, q = z, z = m(re, 10), re = Q, Q = ce, ce = F + k[E + H[R]] | 0, R < 16 ? ce += g(V, de, pe) + D[0] : R < 32 ? ce += p(V, de, pe) + D[1] : R < 48 ? ce += w(V, de, pe) + D[2] : R < 64 ? ce += O(V, de, pe) + D[3] : ce += _(V, de, pe) + D[4], ce = ce | 0, ce = m(ce, K[R]), ce = ce + Ce | 0, F = Ce, Ce = pe, pe = m(de, 10), de = V, V = ce;
            ce = B[1] + re + pe | 0, B[1] = B[2] + z + Ce | 0, B[2] = B[3] + q + F | 0, B[3] = B[4] + ee + V | 0, B[4] = B[0] + Q + de | 0, B[0] = ce;
          },
          _doFinalize: function() {
            var k = this._data, E = k.words, R = this._nDataBytes * 8, I = k.sigBytes * 8;
            E[I >>> 5] |= 128 << 24 - I % 32, E[(I + 64 >>> 9 << 4) + 14] = (R << 8 | R >>> 24) & 16711935 | (R << 24 | R >>> 8) & 4278255360, k.sigBytes = (E.length + 1) * 4, this._process();
            for (var C = this._hash, B = C.words, T = 0; T < 5; T++) {
              var D = B[T];
              B[T] = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360;
            }
            return C;
          },
          clone: function() {
            var k = f.clone.call(this);
            return k._hash = this._hash.clone(), k;
          }
        });
        function _(k, E, R) {
          return k ^ E ^ R;
        }
        function O(k, E, R) {
          return k & E | ~k & R;
        }
        function w(k, E, R) {
          return (k | ~E) ^ R;
        }
        function p(k, E, R) {
          return k & R | E & ~R;
        }
        function g(k, E, R) {
          return k ^ (E | ~R);
        }
        function m(k, E) {
          return k << E | k >>> 32 - E;
        }
        i.RIPEMD160 = f._createHelper(v), i.HmacRIPEMD160 = f._createHmacHelper(v);
      }(), t.RIPEMD160;
    });
  }(qs)), Tr;
}
var Pr = {}, Us = {
  get exports() {
    return Pr;
  },
  set exports(e) {
    Pr = e;
  }
}, b0;
function Vn() {
  return b0 || (b0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ge());
    })(fe, function(t) {
      (function() {
        var n = t, i = n.lib, s = i.Base, c = n.enc, f = c.Utf8, l = n.algo;
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
          init: function(o, u) {
            o = this._hasher = new o.init(), typeof u == "string" && (u = f.parse(u));
            var d = o.blockSize, a = d * 4;
            u.sigBytes > a && (u = o.finalize(u)), u.clamp();
            for (var h = this._oKey = u.clone(), b = this._iKey = u.clone(), v = h.words, _ = b.words, O = 0; O < d; O++)
              v[O] ^= 1549556828, _[O] ^= 909522486;
            h.sigBytes = b.sigBytes = a, this.reset();
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
            var u = this._hasher, d = u.finalize(o);
            u.reset();
            var a = u.finalize(this._oKey.clone().concat(d));
            return a;
          }
        });
      })();
    });
  }(Us)), Pr;
}
var Ir = {}, Ws = {
  get exports() {
    return Ir;
  },
  set exports(e) {
    Ir = e;
  }
}, g0;
function Vs() {
  return g0 || (g0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), Wn(), Vn());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, s = i.Base, c = i.WordArray, f = n.algo, l = f.SHA1, o = f.HMAC, u = f.PBKDF2 = s.extend({
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
            for (var h = this.cfg, b = o.create(h.hasher, d), v = c.create(), _ = c.create([1]), O = v.words, w = _.words, p = h.keySize, g = h.iterations; O.length < p; ) {
              var m = b.update(a).finalize(_);
              b.reset();
              for (var k = m.words, E = k.length, R = m, I = 1; I < g; I++) {
                R = b.finalize(R), b.reset();
                for (var C = R.words, B = 0; B < E; B++)
                  k[B] ^= C[B];
              }
              v.concat(m), w[0]++;
            }
            return v.sigBytes = p * 4, v;
          }
        });
        n.PBKDF2 = function(d, a, h) {
          return u.create(h).compute(d, a);
        };
      }(), t.PBKDF2;
    });
  }(Ws)), Ir;
}
var Mr = {}, Ys = {
  get exports() {
    return Mr;
  },
  set exports(e) {
    Mr = e;
  }
}, m0;
function Ht() {
  return m0 || (m0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), Wn(), Vn());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, s = i.Base, c = i.WordArray, f = n.algo, l = f.MD5, o = f.EvpKDF = s.extend({
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
          compute: function(u, d) {
            for (var a, h = this.cfg, b = h.hasher.create(), v = c.create(), _ = v.words, O = h.keySize, w = h.iterations; _.length < O; ) {
              a && b.update(a), a = b.update(u).finalize(d), b.reset();
              for (var p = 1; p < w; p++)
                a = b.finalize(a), b.reset();
              v.concat(a);
            }
            return v.sigBytes = O * 4, v;
          }
        });
        n.EvpKDF = function(u, d, a) {
          return o.create(a).compute(u, d);
        };
      }(), t.EvpKDF;
    });
  }(Ys)), Mr;
}
var Hr = {}, Ks = {
  get exports() {
    return Hr;
  },
  set exports(e) {
    Hr = e;
  }
}, y0;
function Ue() {
  return y0 || (y0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), Ht());
    })(fe, function(t) {
      t.lib.Cipher || function(n) {
        var i = t, s = i.lib, c = s.Base, f = s.WordArray, l = s.BufferedBlockAlgorithm, o = i.enc;
        o.Utf8;
        var u = o.Base64, d = i.algo, a = d.EvpKDF, h = s.Cipher = l.extend({
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
          createEncryptor: function(C, B) {
            return this.create(this._ENC_XFORM_MODE, C, B);
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
          createDecryptor: function(C, B) {
            return this.create(this._DEC_XFORM_MODE, C, B);
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
          init: function(C, B, T) {
            this.cfg = this.cfg.extend(T), this._xformMode = C, this._key = B, this.reset();
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
            var B = this._doFinalize();
            return B;
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
            function C(B) {
              return typeof B == "string" ? I : k;
            }
            return function(B) {
              return {
                encrypt: function(T, D, $) {
                  return C(D).encrypt(B, T, D, $);
                },
                decrypt: function(T, D, $) {
                  return C(D).decrypt(B, T, D, $);
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
        var b = i.mode = {}, v = s.BlockCipherMode = c.extend({
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
          createEncryptor: function(C, B) {
            return this.Encryptor.create(C, B);
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
          createDecryptor: function(C, B) {
            return this.Decryptor.create(C, B);
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
          init: function(C, B) {
            this._cipher = C, this._iv = B;
          }
        }), _ = b.CBC = function() {
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
            processBlock: function(T, D) {
              var $ = this._cipher, H = $.blockSize;
              B.call(this, T, D, H), $.encryptBlock(T, D), this._prevBlock = T.slice(D, D + H);
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
            processBlock: function(T, D) {
              var $ = this._cipher, H = $.blockSize, W = T.slice(D, D + H);
              $.decryptBlock(T, D), B.call(this, T, D, H), this._prevBlock = W;
            }
          });
          function B(T, D, $) {
            var H, W = this._iv;
            W ? (H = W, this._iv = n) : H = this._prevBlock;
            for (var K = 0; K < $; K++)
              T[D + K] ^= H[K];
          }
          return C;
        }(), O = i.pad = {}, w = O.Pkcs7 = {
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
          pad: function(C, B) {
            for (var T = B * 4, D = T - C.sigBytes % T, $ = D << 24 | D << 16 | D << 8 | D, H = [], W = 0; W < D; W += 4)
              H.push($);
            var K = f.create(H, D);
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
            var B = C.words[C.sigBytes - 1 >>> 2] & 255;
            C.sigBytes -= B;
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
            mode: _,
            padding: w
          }),
          reset: function() {
            var C;
            h.reset.call(this);
            var B = this.cfg, T = B.iv, D = B.mode;
            this._xformMode == this._ENC_XFORM_MODE ? C = D.createEncryptor : (C = D.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == C ? this._mode.init(this, T && T.words) : (this._mode = C.call(D, this, T && T.words), this._mode.__creator = C);
          },
          _doProcessBlock: function(C, B) {
            this._mode.processBlock(C, B);
          },
          _doFinalize: function() {
            var C, B = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (B.pad(this._data, this.blockSize), C = this._process(!0)) : (C = this._process(!0), B.unpad(C)), C;
          },
          blockSize: 128 / 32
        });
        var p = s.CipherParams = c.extend({
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
        }), g = i.format = {}, m = g.OpenSSL = {
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
            var B, T = C.ciphertext, D = C.salt;
            return D ? B = f.create([1398893684, 1701076831]).concat(D).concat(T) : B = T, B.toString(u);
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
            var B, T = u.parse(C), D = T.words;
            return D[0] == 1398893684 && D[1] == 1701076831 && (B = f.create(D.slice(2, 4)), D.splice(0, 4), T.sigBytes -= 16), p.create({ ciphertext: T, salt: B });
          }
        }, k = s.SerializableCipher = c.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: c.extend({
            format: m
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
          encrypt: function(C, B, T, D) {
            D = this.cfg.extend(D);
            var $ = C.createEncryptor(T, D), H = $.finalize(B), W = $.cfg;
            return p.create({
              ciphertext: H,
              key: T,
              iv: W.iv,
              algorithm: C,
              mode: W.mode,
              padding: W.padding,
              blockSize: C.blockSize,
              formatter: D.format
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
          decrypt: function(C, B, T, D) {
            D = this.cfg.extend(D), B = this._parse(B, D.format);
            var $ = C.createDecryptor(T, D).finalize(B.ciphertext);
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
          _parse: function(C, B) {
            return typeof C == "string" ? B.parse(C, this) : C;
          }
        }), E = i.kdf = {}, R = E.OpenSSL = {
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
          execute: function(C, B, T, D) {
            D || (D = f.random(64 / 8));
            var $ = a.create({ keySize: B + T }).compute(C, D), H = f.create($.words.slice(B), T * 4);
            return $.sigBytes = B * 4, p.create({ key: $, iv: H, salt: D });
          }
        }, I = s.PasswordBasedCipher = k.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: k.cfg.extend({
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
          encrypt: function(C, B, T, D) {
            D = this.cfg.extend(D);
            var $ = D.kdf.execute(T, C.keySize, C.ivSize);
            D.iv = $.iv;
            var H = k.encrypt.call(this, C, B, $.key, D);
            return H.mixIn($), H;
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
          decrypt: function(C, B, T, D) {
            D = this.cfg.extend(D), B = this._parse(B, D.format);
            var $ = D.kdf.execute(T, C.keySize, C.ivSize, B.salt);
            D.iv = $.iv;
            var H = k.decrypt.call(this, C, B, $.key, D);
            return H;
          }
        });
      }();
    });
  }(Ks)), Hr;
}
var zr = {}, Gs = {
  get exports() {
    return zr;
  },
  set exports(e) {
    zr = e;
  }
}, _0;
function Zs() {
  return _0 || (_0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), Ue());
    })(fe, function(t) {
      return t.mode.CFB = function() {
        var n = t.lib.BlockCipherMode.extend();
        n.Encryptor = n.extend({
          processBlock: function(s, c) {
            var f = this._cipher, l = f.blockSize;
            i.call(this, s, c, l, f), this._prevBlock = s.slice(c, c + l);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(s, c) {
            var f = this._cipher, l = f.blockSize, o = s.slice(c, c + l);
            i.call(this, s, c, l, f), this._prevBlock = o;
          }
        });
        function i(s, c, f, l) {
          var o, u = this._iv;
          u ? (o = u.slice(0), this._iv = void 0) : o = this._prevBlock, l.encryptBlock(o, 0);
          for (var d = 0; d < f; d++)
            s[c + d] ^= o[d];
        }
        return n;
      }(), t.mode.CFB;
    });
  }(Gs)), zr;
}
var $r = {}, Xs = {
  get exports() {
    return $r;
  },
  set exports(e) {
    $r = e;
  }
}, w0;
function js() {
  return w0 || (w0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), Ue());
    })(fe, function(t) {
      return t.mode.CTR = function() {
        var n = t.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(s, c) {
            var f = this._cipher, l = f.blockSize, o = this._iv, u = this._counter;
            o && (u = this._counter = o.slice(0), this._iv = void 0);
            var d = u.slice(0);
            f.encryptBlock(d, 0), u[l - 1] = u[l - 1] + 1 | 0;
            for (var a = 0; a < l; a++)
              s[c + a] ^= d[a];
          }
        });
        return n.Decryptor = i, n;
      }(), t.mode.CTR;
    });
  }(Xs)), $r;
}
var qr = {}, Qs = {
  get exports() {
    return qr;
  },
  set exports(e) {
    qr = e;
  }
}, E0;
function Js() {
  return E0 || (E0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), Ue());
    })(fe, function(t) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return t.mode.CTRGladman = function() {
        var n = t.lib.BlockCipherMode.extend();
        function i(f) {
          if ((f >> 24 & 255) === 255) {
            var l = f >> 16 & 255, o = f >> 8 & 255, u = f & 255;
            l === 255 ? (l = 0, o === 255 ? (o = 0, u === 255 ? u = 0 : ++u) : ++o) : ++l, f = 0, f += l << 16, f += o << 8, f += u;
          } else
            f += 1 << 24;
          return f;
        }
        function s(f) {
          return (f[0] = i(f[0])) === 0 && (f[1] = i(f[1])), f;
        }
        var c = n.Encryptor = n.extend({
          processBlock: function(f, l) {
            var o = this._cipher, u = o.blockSize, d = this._iv, a = this._counter;
            d && (a = this._counter = d.slice(0), this._iv = void 0), s(a);
            var h = a.slice(0);
            o.encryptBlock(h, 0);
            for (var b = 0; b < u; b++)
              f[l + b] ^= h[b];
          }
        });
        return n.Decryptor = c, n;
      }(), t.mode.CTRGladman;
    });
  }(Qs)), qr;
}
var Fr = {}, eo = {
  get exports() {
    return Fr;
  },
  set exports(e) {
    Fr = e;
  }
}, k0;
function to() {
  return k0 || (k0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), Ue());
    })(fe, function(t) {
      return t.mode.OFB = function() {
        var n = t.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(s, c) {
            var f = this._cipher, l = f.blockSize, o = this._iv, u = this._keystream;
            o && (u = this._keystream = o.slice(0), this._iv = void 0), f.encryptBlock(u, 0);
            for (var d = 0; d < l; d++)
              s[c + d] ^= u[d];
          }
        });
        return n.Decryptor = i, n;
      }(), t.mode.OFB;
    });
  }(eo)), Fr;
}
var Ur = {}, ro = {
  get exports() {
    return Ur;
  },
  set exports(e) {
    Ur = e;
  }
}, C0;
function ni() {
  return C0 || (C0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), Ue());
    })(fe, function(t) {
      return t.mode.ECB = function() {
        var n = t.lib.BlockCipherMode.extend();
        return n.Encryptor = n.extend({
          processBlock: function(i, s) {
            this._cipher.encryptBlock(i, s);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(i, s) {
            this._cipher.decryptBlock(i, s);
          }
        }), n;
      }(), t.mode.ECB;
    });
  }(ro)), Ur;
}
var Wr = {}, no = {
  get exports() {
    return Wr;
  },
  set exports(e) {
    Wr = e;
  }
}, S0;
function io() {
  return S0 || (S0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), Ue());
    })(fe, function(t) {
      return t.pad.AnsiX923 = {
        pad: function(n, i) {
          var s = n.sigBytes, c = i * 4, f = c - s % c, l = s + f - 1;
          n.clamp(), n.words[l >>> 2] |= f << 24 - l % 4 * 8, n.sigBytes += f;
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, t.pad.Ansix923;
    });
  }(no)), Wr;
}
var Vr = {}, so = {
  get exports() {
    return Vr;
  },
  set exports(e) {
    Vr = e;
  }
}, B0;
function oo() {
  return B0 || (B0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), Ue());
    })(fe, function(t) {
      return t.pad.Iso10126 = {
        pad: function(n, i) {
          var s = i * 4, c = s - n.sigBytes % s;
          n.concat(t.lib.WordArray.random(c - 1)).concat(t.lib.WordArray.create([c << 24], 1));
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, t.pad.Iso10126;
    });
  }(so)), Vr;
}
var Yr = {}, ao = {
  get exports() {
    return Yr;
  },
  set exports(e) {
    Yr = e;
  }
}, A0;
function co() {
  return A0 || (A0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), Ue());
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
  }(ao)), Yr;
}
var Kr = {}, fo = {
  get exports() {
    return Kr;
  },
  set exports(e) {
    Kr = e;
  }
}, R0;
function uo() {
  return R0 || (R0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), Ue());
    })(fe, function(t) {
      return t.pad.ZeroPadding = {
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
      }, t.pad.ZeroPadding;
    });
  }(fo)), Kr;
}
var Gr = {}, lo = {
  get exports() {
    return Gr;
  },
  set exports(e) {
    Gr = e;
  }
}, O0;
function ho() {
  return O0 || (O0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), Ue());
    })(fe, function(t) {
      return t.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, t.pad.NoPadding;
    });
  }(lo)), Gr;
}
var Zr = {}, vo = {
  get exports() {
    return Zr;
  },
  set exports(e) {
    Zr = e;
  }
}, L0;
function po() {
  return L0 || (L0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), Ue());
    })(fe, function(t) {
      return function(n) {
        var i = t, s = i.lib, c = s.CipherParams, f = i.enc, l = f.Hex, o = i.format;
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
            var d = l.parse(u);
            return c.create({ ciphertext: d });
          }
        };
      }(), t.format.Hex;
    });
  }(vo)), Zr;
}
var Xr = {}, xo = {
  get exports() {
    return Xr;
  },
  set exports(e) {
    Xr = e;
  }
}, N0;
function ii() {
  return N0 || (N0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), It(), Mt(), Ht(), Ue());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, s = i.BlockCipher, c = n.algo, f = [], l = [], o = [], u = [], d = [], a = [], h = [], b = [], v = [], _ = [];
        (function() {
          for (var p = [], g = 0; g < 256; g++)
            g < 128 ? p[g] = g << 1 : p[g] = g << 1 ^ 283;
          for (var m = 0, k = 0, g = 0; g < 256; g++) {
            var E = k ^ k << 1 ^ k << 2 ^ k << 3 ^ k << 4;
            E = E >>> 8 ^ E & 255 ^ 99, f[m] = E, l[E] = m;
            var R = p[m], I = p[R], C = p[I], B = p[E] * 257 ^ E * 16843008;
            o[m] = B << 24 | B >>> 8, u[m] = B << 16 | B >>> 16, d[m] = B << 8 | B >>> 24, a[m] = B;
            var B = C * 16843009 ^ I * 65537 ^ R * 257 ^ m * 16843008;
            h[E] = B << 24 | B >>> 8, b[E] = B << 16 | B >>> 16, v[E] = B << 8 | B >>> 24, _[E] = B, m ? (m = R ^ p[p[p[C ^ R]]], k ^= p[p[k]]) : m = k = 1;
          }
        })();
        var O = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], w = c.AES = s.extend({
          _doReset: function() {
            var p;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var g = this._keyPriorReset = this._key, m = g.words, k = g.sigBytes / 4, E = this._nRounds = k + 6, R = (E + 1) * 4, I = this._keySchedule = [], C = 0; C < R; C++)
                C < k ? I[C] = m[C] : (p = I[C - 1], C % k ? k > 6 && C % k == 4 && (p = f[p >>> 24] << 24 | f[p >>> 16 & 255] << 16 | f[p >>> 8 & 255] << 8 | f[p & 255]) : (p = p << 8 | p >>> 24, p = f[p >>> 24] << 24 | f[p >>> 16 & 255] << 16 | f[p >>> 8 & 255] << 8 | f[p & 255], p ^= O[C / k | 0] << 24), I[C] = I[C - k] ^ p);
              for (var B = this._invKeySchedule = [], T = 0; T < R; T++) {
                var C = R - T;
                if (T % 4)
                  var p = I[C];
                else
                  var p = I[C - 4];
                T < 4 || C <= 4 ? B[T] = p : B[T] = h[f[p >>> 24]] ^ b[f[p >>> 16 & 255]] ^ v[f[p >>> 8 & 255]] ^ _[f[p & 255]];
              }
            }
          },
          encryptBlock: function(p, g) {
            this._doCryptBlock(p, g, this._keySchedule, o, u, d, a, f);
          },
          decryptBlock: function(p, g) {
            var m = p[g + 1];
            p[g + 1] = p[g + 3], p[g + 3] = m, this._doCryptBlock(p, g, this._invKeySchedule, h, b, v, _, l);
            var m = p[g + 1];
            p[g + 1] = p[g + 3], p[g + 3] = m;
          },
          _doCryptBlock: function(p, g, m, k, E, R, I, C) {
            for (var B = this._nRounds, T = p[g] ^ m[0], D = p[g + 1] ^ m[1], $ = p[g + 2] ^ m[2], H = p[g + 3] ^ m[3], W = 4, K = 1; K < B; K++) {
              var ee = k[T >>> 24] ^ E[D >>> 16 & 255] ^ R[$ >>> 8 & 255] ^ I[H & 255] ^ m[W++], Q = k[D >>> 24] ^ E[$ >>> 16 & 255] ^ R[H >>> 8 & 255] ^ I[T & 255] ^ m[W++], re = k[$ >>> 24] ^ E[H >>> 16 & 255] ^ R[T >>> 8 & 255] ^ I[D & 255] ^ m[W++], z = k[H >>> 24] ^ E[T >>> 16 & 255] ^ R[D >>> 8 & 255] ^ I[$ & 255] ^ m[W++];
              T = ee, D = Q, $ = re, H = z;
            }
            var ee = (C[T >>> 24] << 24 | C[D >>> 16 & 255] << 16 | C[$ >>> 8 & 255] << 8 | C[H & 255]) ^ m[W++], Q = (C[D >>> 24] << 24 | C[$ >>> 16 & 255] << 16 | C[H >>> 8 & 255] << 8 | C[T & 255]) ^ m[W++], re = (C[$ >>> 24] << 24 | C[H >>> 16 & 255] << 16 | C[T >>> 8 & 255] << 8 | C[D & 255]) ^ m[W++], z = (C[H >>> 24] << 24 | C[T >>> 16 & 255] << 16 | C[D >>> 8 & 255] << 8 | C[$ & 255]) ^ m[W++];
            p[g] = ee, p[g + 1] = Q, p[g + 2] = re, p[g + 3] = z;
          },
          keySize: 256 / 32
        });
        n.AES = s._createHelper(w);
      }(), t.AES;
    });
  }(xo)), Xr;
}
var jr = {}, bo = {
  get exports() {
    return jr;
  },
  set exports(e) {
    jr = e;
  }
}, D0;
function go() {
  return D0 || (D0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), It(), Mt(), Ht(), Ue());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, s = i.WordArray, c = i.BlockCipher, f = n.algo, l = [
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
        ], a = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], h = f.DES = c.extend({
          _doReset: function() {
            for (var O = this._key, w = O.words, p = [], g = 0; g < 56; g++) {
              var m = l[g] - 1;
              p[g] = w[m >>> 5] >>> 31 - m % 32 & 1;
            }
            for (var k = this._subKeys = [], E = 0; E < 16; E++) {
              for (var R = k[E] = [], I = u[E], g = 0; g < 24; g++)
                R[g / 6 | 0] |= p[(o[g] - 1 + I) % 28] << 31 - g % 6, R[4 + (g / 6 | 0)] |= p[28 + (o[g + 24] - 1 + I) % 28] << 31 - g % 6;
              R[0] = R[0] << 1 | R[0] >>> 31;
              for (var g = 1; g < 7; g++)
                R[g] = R[g] >>> (g - 1) * 4 + 3;
              R[7] = R[7] << 5 | R[7] >>> 27;
            }
            for (var C = this._invSubKeys = [], g = 0; g < 16; g++)
              C[g] = k[15 - g];
          },
          encryptBlock: function(O, w) {
            this._doCryptBlock(O, w, this._subKeys);
          },
          decryptBlock: function(O, w) {
            this._doCryptBlock(O, w, this._invSubKeys);
          },
          _doCryptBlock: function(O, w, p) {
            this._lBlock = O[w], this._rBlock = O[w + 1], b.call(this, 4, 252645135), b.call(this, 16, 65535), v.call(this, 2, 858993459), v.call(this, 8, 16711935), b.call(this, 1, 1431655765);
            for (var g = 0; g < 16; g++) {
              for (var m = p[g], k = this._lBlock, E = this._rBlock, R = 0, I = 0; I < 8; I++)
                R |= d[I][((E ^ m[I]) & a[I]) >>> 0];
              this._lBlock = E, this._rBlock = k ^ R;
            }
            var C = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = C, b.call(this, 1, 1431655765), v.call(this, 8, 16711935), v.call(this, 2, 858993459), b.call(this, 16, 65535), b.call(this, 4, 252645135), O[w] = this._lBlock, O[w + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function b(O, w) {
          var p = (this._lBlock >>> O ^ this._rBlock) & w;
          this._rBlock ^= p, this._lBlock ^= p << O;
        }
        function v(O, w) {
          var p = (this._rBlock >>> O ^ this._lBlock) & w;
          this._lBlock ^= p, this._rBlock ^= p << O;
        }
        n.DES = c._createHelper(h);
        var _ = f.TripleDES = c.extend({
          _doReset: function() {
            var O = this._key, w = O.words;
            if (w.length !== 2 && w.length !== 4 && w.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var p = w.slice(0, 2), g = w.length < 4 ? w.slice(0, 2) : w.slice(2, 4), m = w.length < 6 ? w.slice(0, 2) : w.slice(4, 6);
            this._des1 = h.createEncryptor(s.create(p)), this._des2 = h.createEncryptor(s.create(g)), this._des3 = h.createEncryptor(s.create(m));
          },
          encryptBlock: function(O, w) {
            this._des1.encryptBlock(O, w), this._des2.decryptBlock(O, w), this._des3.encryptBlock(O, w);
          },
          decryptBlock: function(O, w) {
            this._des3.decryptBlock(O, w), this._des2.encryptBlock(O, w), this._des1.decryptBlock(O, w);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        n.TripleDES = c._createHelper(_);
      }(), t.TripleDES;
    });
  }(bo)), jr;
}
var Qr = {}, mo = {
  get exports() {
    return Qr;
  },
  set exports(e) {
    Qr = e;
  }
}, T0;
function yo() {
  return T0 || (T0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), It(), Mt(), Ht(), Ue());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, s = i.StreamCipher, c = n.algo, f = c.RC4 = s.extend({
          _doReset: function() {
            for (var u = this._key, d = u.words, a = u.sigBytes, h = this._S = [], b = 0; b < 256; b++)
              h[b] = b;
            for (var b = 0, v = 0; b < 256; b++) {
              var _ = b % a, O = d[_ >>> 2] >>> 24 - _ % 4 * 8 & 255;
              v = (v + h[b] + O) % 256;
              var w = h[b];
              h[b] = h[v], h[v] = w;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(u, d) {
            u[d] ^= l.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function l() {
          for (var u = this._S, d = this._i, a = this._j, h = 0, b = 0; b < 4; b++) {
            d = (d + 1) % 256, a = (a + u[d]) % 256;
            var v = u[d];
            u[d] = u[a], u[a] = v, h |= u[(u[d] + u[a]) % 256] << 24 - b * 8;
          }
          return this._i = d, this._j = a, h;
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
            for (var u = this.cfg.drop; u > 0; u--)
              l.call(this);
          }
        });
        n.RC4Drop = s._createHelper(o);
      }(), t.RC4;
    });
  }(mo)), Qr;
}
var Jr = {}, _o = {
  get exports() {
    return Jr;
  },
  set exports(e) {
    Jr = e;
  }
}, P0;
function wo() {
  return P0 || (P0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), It(), Mt(), Ht(), Ue());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, s = i.StreamCipher, c = n.algo, f = [], l = [], o = [], u = c.Rabbit = s.extend({
          _doReset: function() {
            for (var a = this._key.words, h = this.cfg.iv, b = 0; b < 4; b++)
              a[b] = (a[b] << 8 | a[b] >>> 24) & 16711935 | (a[b] << 24 | a[b] >>> 8) & 4278255360;
            var v = this._X = [
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
            for (var b = 0; b < 4; b++)
              d.call(this);
            for (var b = 0; b < 8; b++)
              _[b] ^= v[b + 4 & 7];
            if (h) {
              var O = h.words, w = O[0], p = O[1], g = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, m = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360, k = g >>> 16 | m & 4294901760, E = m << 16 | g & 65535;
              _[0] ^= g, _[1] ^= k, _[2] ^= m, _[3] ^= E, _[4] ^= g, _[5] ^= k, _[6] ^= m, _[7] ^= E;
              for (var b = 0; b < 4; b++)
                d.call(this);
            }
          },
          _doProcessBlock: function(a, h) {
            var b = this._X;
            d.call(this), f[0] = b[0] ^ b[5] >>> 16 ^ b[3] << 16, f[1] = b[2] ^ b[7] >>> 16 ^ b[5] << 16, f[2] = b[4] ^ b[1] >>> 16 ^ b[7] << 16, f[3] = b[6] ^ b[3] >>> 16 ^ b[1] << 16;
            for (var v = 0; v < 4; v++)
              f[v] = (f[v] << 8 | f[v] >>> 24) & 16711935 | (f[v] << 24 | f[v] >>> 8) & 4278255360, a[h + v] ^= f[v];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function d() {
          for (var a = this._X, h = this._C, b = 0; b < 8; b++)
            l[b] = h[b];
          h[0] = h[0] + 1295307597 + this._b | 0, h[1] = h[1] + 3545052371 + (h[0] >>> 0 < l[0] >>> 0 ? 1 : 0) | 0, h[2] = h[2] + 886263092 + (h[1] >>> 0 < l[1] >>> 0 ? 1 : 0) | 0, h[3] = h[3] + 1295307597 + (h[2] >>> 0 < l[2] >>> 0 ? 1 : 0) | 0, h[4] = h[4] + 3545052371 + (h[3] >>> 0 < l[3] >>> 0 ? 1 : 0) | 0, h[5] = h[5] + 886263092 + (h[4] >>> 0 < l[4] >>> 0 ? 1 : 0) | 0, h[6] = h[6] + 1295307597 + (h[5] >>> 0 < l[5] >>> 0 ? 1 : 0) | 0, h[7] = h[7] + 3545052371 + (h[6] >>> 0 < l[6] >>> 0 ? 1 : 0) | 0, this._b = h[7] >>> 0 < l[7] >>> 0 ? 1 : 0;
          for (var b = 0; b < 8; b++) {
            var v = a[b] + h[b], _ = v & 65535, O = v >>> 16, w = ((_ * _ >>> 17) + _ * O >>> 15) + O * O, p = ((v & 4294901760) * v | 0) + ((v & 65535) * v | 0);
            o[b] = w ^ p;
          }
          a[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0, a[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0, a[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0, a[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0, a[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0, a[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0, a[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0, a[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0;
        }
        n.Rabbit = s._createHelper(u);
      }(), t.Rabbit;
    });
  }(_o)), Jr;
}
var en = {}, Eo = {
  get exports() {
    return en;
  },
  set exports(e) {
    en = e;
  }
}, I0;
function ko() {
  return I0 || (I0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ge(), It(), Mt(), Ht(), Ue());
    })(fe, function(t) {
      return function() {
        var n = t, i = n.lib, s = i.StreamCipher, c = n.algo, f = [], l = [], o = [], u = c.RabbitLegacy = s.extend({
          _doReset: function() {
            var a = this._key.words, h = this.cfg.iv, b = this._X = [
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
            for (var _ = 0; _ < 4; _++)
              d.call(this);
            for (var _ = 0; _ < 8; _++)
              v[_] ^= b[_ + 4 & 7];
            if (h) {
              var O = h.words, w = O[0], p = O[1], g = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, m = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360, k = g >>> 16 | m & 4294901760, E = m << 16 | g & 65535;
              v[0] ^= g, v[1] ^= k, v[2] ^= m, v[3] ^= E, v[4] ^= g, v[5] ^= k, v[6] ^= m, v[7] ^= E;
              for (var _ = 0; _ < 4; _++)
                d.call(this);
            }
          },
          _doProcessBlock: function(a, h) {
            var b = this._X;
            d.call(this), f[0] = b[0] ^ b[5] >>> 16 ^ b[3] << 16, f[1] = b[2] ^ b[7] >>> 16 ^ b[5] << 16, f[2] = b[4] ^ b[1] >>> 16 ^ b[7] << 16, f[3] = b[6] ^ b[3] >>> 16 ^ b[1] << 16;
            for (var v = 0; v < 4; v++)
              f[v] = (f[v] << 8 | f[v] >>> 24) & 16711935 | (f[v] << 24 | f[v] >>> 8) & 4278255360, a[h + v] ^= f[v];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function d() {
          for (var a = this._X, h = this._C, b = 0; b < 8; b++)
            l[b] = h[b];
          h[0] = h[0] + 1295307597 + this._b | 0, h[1] = h[1] + 3545052371 + (h[0] >>> 0 < l[0] >>> 0 ? 1 : 0) | 0, h[2] = h[2] + 886263092 + (h[1] >>> 0 < l[1] >>> 0 ? 1 : 0) | 0, h[3] = h[3] + 1295307597 + (h[2] >>> 0 < l[2] >>> 0 ? 1 : 0) | 0, h[4] = h[4] + 3545052371 + (h[3] >>> 0 < l[3] >>> 0 ? 1 : 0) | 0, h[5] = h[5] + 886263092 + (h[4] >>> 0 < l[4] >>> 0 ? 1 : 0) | 0, h[6] = h[6] + 1295307597 + (h[5] >>> 0 < l[5] >>> 0 ? 1 : 0) | 0, h[7] = h[7] + 3545052371 + (h[6] >>> 0 < l[6] >>> 0 ? 1 : 0) | 0, this._b = h[7] >>> 0 < l[7] >>> 0 ? 1 : 0;
          for (var b = 0; b < 8; b++) {
            var v = a[b] + h[b], _ = v & 65535, O = v >>> 16, w = ((_ * _ >>> 17) + _ * O >>> 15) + O * O, p = ((v & 4294901760) * v | 0) + ((v & 65535) * v | 0);
            o[b] = w ^ p;
          }
          a[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0, a[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0, a[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0, a[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0, a[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0, a[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0, a[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0, a[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0;
        }
        n.RabbitLegacy = s._createHelper(u);
      }(), t.RabbitLegacy;
    });
  }(Eo)), en;
}
(function(e, r) {
  (function(t, n, i) {
    e.exports = n(ge(), an(), Cs(), Bs(), It(), Os(), Mt(), Wn(), ti(), Ps(), ri(), Hs(), $s(), Fs(), Vn(), Vs(), Ht(), Ue(), Zs(), js(), Js(), to(), ni(), io(), oo(), co(), uo(), ho(), po(), ii(), go(), yo(), wo(), ko());
  })(fe, function(t) {
    return t;
  });
})(gs);
var M0 = {}, Co = {
  get exports() {
    return M0;
  },
  set exports(e) {
    M0 = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(fe, function() {
    var t = 1e3, n = 6e4, i = 36e5, s = "millisecond", c = "second", f = "minute", l = "hour", o = "day", u = "week", d = "month", a = "quarter", h = "year", b = "date", v = "Invalid Date", _ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, O = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, w = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(D) {
      var $ = ["th", "st", "nd", "rd"], H = D % 100;
      return "[" + D + ($[(H - 20) % 10] || $[H] || $[0]) + "]";
    } }, p = function(D, $, H) {
      var W = String(D);
      return !W || W.length >= $ ? D : "" + Array($ + 1 - W.length).join(H) + D;
    }, g = { s: p, z: function(D) {
      var $ = -D.utcOffset(), H = Math.abs($), W = Math.floor(H / 60), K = H % 60;
      return ($ <= 0 ? "+" : "-") + p(W, 2, "0") + ":" + p(K, 2, "0");
    }, m: function D($, H) {
      if ($.date() < H.date())
        return -D(H, $);
      var W = 12 * (H.year() - $.year()) + (H.month() - $.month()), K = $.clone().add(W, d), ee = H - K < 0, Q = $.clone().add(W + (ee ? -1 : 1), d);
      return +(-(W + (H - K) / (ee ? K - Q : Q - K)) || 0);
    }, a: function(D) {
      return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
    }, p: function(D) {
      return { M: d, y: h, w: u, d: o, D: b, h: l, m: f, s: c, ms: s, Q: a }[D] || String(D || "").toLowerCase().replace(/s$/, "");
    }, u: function(D) {
      return D === void 0;
    } }, m = "en", k = {};
    k[m] = w;
    var E = function(D) {
      return D instanceof B;
    }, R = function D($, H, W) {
      var K;
      if (!$)
        return m;
      if (typeof $ == "string") {
        var ee = $.toLowerCase();
        k[ee] && (K = ee), H && (k[ee] = H, K = ee);
        var Q = $.split("-");
        if (!K && Q.length > 1)
          return D(Q[0]);
      } else {
        var re = $.name;
        k[re] = $, K = re;
      }
      return !W && K && (m = K), K || !W && m;
    }, I = function(D, $) {
      if (E(D))
        return D.clone();
      var H = typeof $ == "object" ? $ : {};
      return H.date = D, H.args = arguments, new B(H);
    }, C = g;
    C.l = R, C.i = E, C.w = function(D, $) {
      return I(D, { locale: $.$L, utc: $.$u, x: $.$x, $offset: $.$offset });
    };
    var B = function() {
      function D(H) {
        this.$L = R(H.locale, null, !0), this.parse(H);
      }
      var $ = D.prototype;
      return $.parse = function(H) {
        this.$d = function(W) {
          var K = W.date, ee = W.utc;
          if (K === null)
            return /* @__PURE__ */ new Date(NaN);
          if (C.u(K))
            return /* @__PURE__ */ new Date();
          if (K instanceof Date)
            return new Date(K);
          if (typeof K == "string" && !/Z$/i.test(K)) {
            var Q = K.match(_);
            if (Q) {
              var re = Q[2] - 1 || 0, z = (Q[7] || "0").substring(0, 3);
              return ee ? new Date(Date.UTC(Q[1], re, Q[3] || 1, Q[4] || 0, Q[5] || 0, Q[6] || 0, z)) : new Date(Q[1], re, Q[3] || 1, Q[4] || 0, Q[5] || 0, Q[6] || 0, z);
            }
          }
          return new Date(K);
        }(H), this.$x = H.x || {}, this.init();
      }, $.init = function() {
        var H = this.$d;
        this.$y = H.getFullYear(), this.$M = H.getMonth(), this.$D = H.getDate(), this.$W = H.getDay(), this.$H = H.getHours(), this.$m = H.getMinutes(), this.$s = H.getSeconds(), this.$ms = H.getMilliseconds();
      }, $.$utils = function() {
        return C;
      }, $.isValid = function() {
        return this.$d.toString() !== v;
      }, $.isSame = function(H, W) {
        var K = I(H);
        return this.startOf(W) <= K && K <= this.endOf(W);
      }, $.isAfter = function(H, W) {
        return I(H) < this.startOf(W);
      }, $.isBefore = function(H, W) {
        return this.endOf(W) < I(H);
      }, $.$g = function(H, W, K) {
        return C.u(H) ? this[W] : this.set(K, H);
      }, $.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, $.valueOf = function() {
        return this.$d.getTime();
      }, $.startOf = function(H, W) {
        var K = this, ee = !!C.u(W) || W, Q = C.p(H), re = function(ce, Se) {
          var Me = C.w(K.$u ? Date.UTC(K.$y, Se, ce) : new Date(K.$y, Se, ce), K);
          return ee ? Me : Me.endOf(o);
        }, z = function(ce, Se) {
          return C.w(K.toDate()[ce].apply(K.toDate("s"), (ee ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Se)), K);
        }, q = this.$W, F = this.$M, V = this.$D, de = "set" + (this.$u ? "UTC" : "");
        switch (Q) {
          case h:
            return ee ? re(1, 0) : re(31, 11);
          case d:
            return ee ? re(1, F) : re(0, F + 1);
          case u:
            var pe = this.$locale().weekStart || 0, Ce = (q < pe ? q + 7 : q) - pe;
            return re(ee ? V - Ce : V + (6 - Ce), F);
          case o:
          case b:
            return z(de + "Hours", 0);
          case l:
            return z(de + "Minutes", 1);
          case f:
            return z(de + "Seconds", 2);
          case c:
            return z(de + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, $.endOf = function(H) {
        return this.startOf(H, !1);
      }, $.$set = function(H, W) {
        var K, ee = C.p(H), Q = "set" + (this.$u ? "UTC" : ""), re = (K = {}, K[o] = Q + "Date", K[b] = Q + "Date", K[d] = Q + "Month", K[h] = Q + "FullYear", K[l] = Q + "Hours", K[f] = Q + "Minutes", K[c] = Q + "Seconds", K[s] = Q + "Milliseconds", K)[ee], z = ee === o ? this.$D + (W - this.$W) : W;
        if (ee === d || ee === h) {
          var q = this.clone().set(b, 1);
          q.$d[re](z), q.init(), this.$d = q.set(b, Math.min(this.$D, q.daysInMonth())).$d;
        } else
          re && this.$d[re](z);
        return this.init(), this;
      }, $.set = function(H, W) {
        return this.clone().$set(H, W);
      }, $.get = function(H) {
        return this[C.p(H)]();
      }, $.add = function(H, W) {
        var K, ee = this;
        H = Number(H);
        var Q = C.p(W), re = function(F) {
          var V = I(ee);
          return C.w(V.date(V.date() + Math.round(F * H)), ee);
        };
        if (Q === d)
          return this.set(d, this.$M + H);
        if (Q === h)
          return this.set(h, this.$y + H);
        if (Q === o)
          return re(1);
        if (Q === u)
          return re(7);
        var z = (K = {}, K[f] = n, K[l] = i, K[c] = t, K)[Q] || 1, q = this.$d.getTime() + H * z;
        return C.w(q, this);
      }, $.subtract = function(H, W) {
        return this.add(-1 * H, W);
      }, $.format = function(H) {
        var W = this, K = this.$locale();
        if (!this.isValid())
          return K.invalidDate || v;
        var ee = H || "YYYY-MM-DDTHH:mm:ssZ", Q = C.z(this), re = this.$H, z = this.$m, q = this.$M, F = K.weekdays, V = K.months, de = function(Se, Me, ot, Xe) {
          return Se && (Se[Me] || Se(W, ee)) || ot[Me].slice(0, Xe);
        }, pe = function(Se) {
          return C.s(re % 12 || 12, Se, "0");
        }, Ce = K.meridiem || function(Se, Me, ot) {
          var Xe = Se < 12 ? "AM" : "PM";
          return ot ? Xe.toLowerCase() : Xe;
        }, ce = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: q + 1, MM: C.s(q + 1, 2, "0"), MMM: de(K.monthsShort, q, V, 3), MMMM: de(V, q), D: this.$D, DD: C.s(this.$D, 2, "0"), d: String(this.$W), dd: de(K.weekdaysMin, this.$W, F, 2), ddd: de(K.weekdaysShort, this.$W, F, 3), dddd: F[this.$W], H: String(re), HH: C.s(re, 2, "0"), h: pe(1), hh: pe(2), a: Ce(re, z, !0), A: Ce(re, z, !1), m: String(z), mm: C.s(z, 2, "0"), s: String(this.$s), ss: C.s(this.$s, 2, "0"), SSS: C.s(this.$ms, 3, "0"), Z: Q };
        return ee.replace(O, function(Se, Me) {
          return Me || ce[Se] || Q.replace(":", "");
        });
      }, $.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, $.diff = function(H, W, K) {
        var ee, Q = C.p(W), re = I(H), z = (re.utcOffset() - this.utcOffset()) * n, q = this - re, F = C.m(this, re);
        return F = (ee = {}, ee[h] = F / 12, ee[d] = F, ee[a] = F / 3, ee[u] = (q - z) / 6048e5, ee[o] = (q - z) / 864e5, ee[l] = q / i, ee[f] = q / n, ee[c] = q / t, ee)[Q] || q, K ? F : C.a(F);
      }, $.daysInMonth = function() {
        return this.endOf(d).$D;
      }, $.$locale = function() {
        return k[this.$L];
      }, $.locale = function(H, W) {
        if (!H)
          return this.$L;
        var K = this.clone(), ee = R(H, W, !0);
        return ee && (K.$L = ee), K;
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
      }, D;
    }(), T = B.prototype;
    return I.prototype = T, [["$ms", s], ["$s", c], ["$m", f], ["$H", l], ["$W", o], ["$M", d], ["$y", h], ["$D", b]].forEach(function(D) {
      T[D[1]] = function($) {
        return this.$g($, D[0], D[1]);
      };
    }), I.extend = function(D, $) {
      return D.$i || (D($, B, I), D.$i = !0), I;
    }, I.locale = R, I.isDayjs = E, I.unix = function(D) {
      return I(1e3 * D);
    }, I.en = k[m], I.Ls = k, I.p = {}, I;
  });
})(Co);
var si = function() {
  if (typeof Map < "u")
    return Map;
  function e(r, t) {
    var n = -1;
    return r.some(function(i, s) {
      return i[0] === t ? (n = s, !0) : !1;
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
        for (var i = 0, s = this.__entries__; i < s.length; i++) {
          var c = s[i];
          t.call(n, c[1], c[0]);
        }
      }, r;
    }()
  );
}(), Rn = typeof window < "u" && typeof document < "u" && window.document === document, tn = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), So = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(tn) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Bo = 2;
function Ao(e, r) {
  var t = !1, n = !1, i = 0;
  function s() {
    t && (t = !1, e()), n && f();
  }
  function c() {
    So(s);
  }
  function f() {
    var l = Date.now();
    if (t) {
      if (l - i < Bo)
        return;
      n = !0;
    } else
      t = !0, n = !1, setTimeout(c, r);
    i = l;
  }
  return f;
}
var Ro = 20, Oo = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Lo = typeof MutationObserver < "u", No = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Ao(this.refresh.bind(this), Ro);
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
      !Rn || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Lo ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Rn || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(r) {
      var t = r.propertyName, n = t === void 0 ? "" : t, i = Oo.some(function(s) {
        return !!~n.indexOf(s);
      });
      i && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), oi = function(e, r) {
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
}, Ut = function(e) {
  var r = e && e.ownerDocument && e.ownerDocument.defaultView;
  return r || tn;
}, ai = cn(0, 0, 0, 0);
function rn(e) {
  return parseFloat(e) || 0;
}
function H0(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  return r.reduce(function(n, i) {
    var s = e["border-" + i + "-width"];
    return n + rn(s);
  }, 0);
}
function Do(e) {
  for (var r = ["top", "right", "bottom", "left"], t = {}, n = 0, i = r; n < i.length; n++) {
    var s = i[n], c = e["padding-" + s];
    t[s] = rn(c);
  }
  return t;
}
function To(e) {
  var r = e.getBBox();
  return cn(0, 0, r.width, r.height);
}
function Po(e) {
  var r = e.clientWidth, t = e.clientHeight;
  if (!r && !t)
    return ai;
  var n = Ut(e).getComputedStyle(e), i = Do(n), s = i.left + i.right, c = i.top + i.bottom, f = rn(n.width), l = rn(n.height);
  if (n.boxSizing === "border-box" && (Math.round(f + s) !== r && (f -= H0(n, "left", "right") + s), Math.round(l + c) !== t && (l -= H0(n, "top", "bottom") + c)), !Mo(e)) {
    var o = Math.round(f + s) - r, u = Math.round(l + c) - t;
    Math.abs(o) !== 1 && (f -= o), Math.abs(u) !== 1 && (l -= u);
  }
  return cn(i.left, i.top, f, l);
}
var Io = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Ut(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Ut(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Mo(e) {
  return e === Ut(e).document.documentElement;
}
function Ho(e) {
  return Rn ? Io(e) ? To(e) : Po(e) : ai;
}
function zo(e) {
  var r = e.x, t = e.y, n = e.width, i = e.height, s = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, c = Object.create(s.prototype);
  return oi(c, {
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
function cn(e, r, t, n) {
  return { x: e, y: r, width: t, height: n };
}
var $o = (
  /** @class */
  function() {
    function e(r) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = cn(0, 0, 0, 0), this.target = r;
    }
    return e.prototype.isActive = function() {
      var r = Ho(this.target);
      return this.contentRect_ = r, r.width !== this.broadcastWidth || r.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var r = this.contentRect_;
      return this.broadcastWidth = r.width, this.broadcastHeight = r.height, r;
    }, e;
  }()
), qo = (
  /** @class */
  function() {
    function e(r, t) {
      var n = zo(t);
      oi(this, { target: r, contentRect: n });
    }
    return e;
  }()
), Fo = (
  /** @class */
  function() {
    function e(r, t, n) {
      if (this.activeObservations_ = [], this.observations_ = new si(), typeof r != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = r, this.controller_ = t, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(r) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(r instanceof Ut(r).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var t = this.observations_;
        t.has(r) || (t.set(r, new $o(r)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(r) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(r instanceof Ut(r).Element))
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
          return new qo(n.target, n.broadcastRect());
        });
        this.callback_.call(r, t, r), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), ci = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new si(), fi = (
  /** @class */
  function() {
    function e(r) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var t = No.getInstance(), n = new Fo(r, t, this);
      ci.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  fi.prototype[e] = function() {
    var r;
    return (r = ci.get(this))[e].apply(r, arguments);
  };
});
(function() {
  return typeof tn.ResizeObserver < "u" ? tn.ResizeObserver : fi;
})();
ii();
It();
var z0 = {}, Uo = {
  get exports() {
    return z0;
  },
  set exports(e) {
    z0 = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(ge());
  })(fe, function(t) {
    return t.enc.Utf8;
  });
})(Uo);
Mt();
ni();
var $0 = {}, Wo = {
  get exports() {
    return $0;
  },
  set exports(e) {
    $0 = e;
  }
};
(function(e, r) {
  (function(t, n, i) {
    e.exports = n(ge(), Ue());
  })(fe, function(t) {
    return t.pad.Pkcs7;
  });
})(Wo);
function Vo(e) {
  var r = [], t = "";
  for (t in e)
    r.push(t);
  return r;
}
function q0(e) {
  return e = JSON.stringify(e), !(typeof e != "string" || !/^\{[\s\S]*\}$/.test(e));
}
function Yo(e) {
  return e instanceof Array;
}
function Ko(e) {
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
    if (q0(e))
      for (const n in e)
        this.set(n, e[n], r, t);
    else if (typeof e == "string") {
      const n = q0(t) ? t : { expires: t }, i = n.path !== void 0 ? `;path=${n.path};path=/` : ";path=/", s = n.domain ? `;domain=${n.domain}` : "", c = n.secure ? ";secure" : "";
      let f = n.expires !== void 0 ? n.expires : "";
      typeof f == "string" && f !== "" ? f = new Date(f) : typeof f == "number" && (f = new Date(+/* @__PURE__ */ new Date() + 1e3 * 60 * 60 * 24 * f)), f !== "" && "toGMTString" in f && (f = `;expires=${f.toGMTString()}`);
      const l = n.sameSite ? `;SameSite=${n.sameSite}` : "";
      document.cookie = `${e}=${encodeURI(r) + f + i + s + c + l}`;
    }
  },
  remove: function(e) {
    e = Yo(e) ? e : Ko(arguments);
    for (var r = 0, t = e.length; r < t; r++)
      this.set(e[r], "", -1);
    return e;
  },
  clear: function(e) {
    return e ? this.remove(e) : this.remove(Vo(this.all()));
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
for (const e in ir.prototype)
  ir.prototype[e];
var F0 = {}, Go = {
  get exports() {
    return F0;
  },
  set exports(e) {
    F0 = e;
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
    return function t(n, i, s) {
      function c(o, u) {
        if (!i[o]) {
          if (!n[o]) {
            var d = typeof tr == "function" && tr;
            if (!u && d)
              return d(o, !0);
            if (f)
              return f(o, !0);
            var a = new Error("Cannot find module '" + o + "'");
            throw a.code = "MODULE_NOT_FOUND", a;
          }
          var h = i[o] = { exports: {} };
          n[o][0].call(h.exports, function(b) {
            var v = n[o][1][b];
            return c(v || b);
          }, h, h.exports, t, n, i, s);
        }
        return i[o].exports;
      }
      for (var f = typeof tr == "function" && tr, l = 0; l < s.length; l++)
        c(s[l]);
      return c;
    }({ 1: [function(t, n, i) {
      (function(s) {
        var c = s.MutationObserver || s.WebKitMutationObserver, f;
        if (c) {
          var l = 0, o = new c(b), u = s.document.createTextNode("");
          o.observe(u, {
            characterData: !0
          }), f = function() {
            u.data = l = ++l % 2;
          };
        } else if (!s.setImmediate && typeof s.MessageChannel < "u") {
          var d = new s.MessageChannel();
          d.port1.onmessage = b, f = function() {
            d.port2.postMessage(0);
          };
        } else
          "document" in s && "onreadystatechange" in s.document.createElement("script") ? f = function() {
            var _ = s.document.createElement("script");
            _.onreadystatechange = function() {
              b(), _.onreadystatechange = null, _.parentNode.removeChild(_), _ = null;
            }, s.document.documentElement.appendChild(_);
          } : f = function() {
            setTimeout(b, 0);
          };
        var a, h = [];
        function b() {
          a = !0;
          for (var _, O, w = h.length; w; ) {
            for (O = h, h = [], _ = -1; ++_ < w; )
              O[_]();
            w = h.length;
          }
          a = !1;
        }
        n.exports = v;
        function v(_) {
          h.push(_) === 1 && !a && f();
        }
      }).call(this, typeof fe < "u" ? fe : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(t, n, i) {
      var s = t(1);
      function c() {
      }
      var f = {}, l = ["REJECTED"], o = ["FULFILLED"], u = ["PENDING"];
      n.exports = d;
      function d(m) {
        if (typeof m != "function")
          throw new TypeError("resolver must be a function");
        this.state = u, this.queue = [], this.outcome = void 0, m !== c && v(this, m);
      }
      d.prototype.catch = function(m) {
        return this.then(null, m);
      }, d.prototype.then = function(m, k) {
        if (typeof m != "function" && this.state === o || typeof k != "function" && this.state === l)
          return this;
        var E = new this.constructor(c);
        if (this.state !== u) {
          var R = this.state === o ? m : k;
          h(E, R, this.outcome);
        } else
          this.queue.push(new a(E, m, k));
        return E;
      };
      function a(m, k, E) {
        this.promise = m, typeof k == "function" && (this.onFulfilled = k, this.callFulfilled = this.otherCallFulfilled), typeof E == "function" && (this.onRejected = E, this.callRejected = this.otherCallRejected);
      }
      a.prototype.callFulfilled = function(m) {
        f.resolve(this.promise, m);
      }, a.prototype.otherCallFulfilled = function(m) {
        h(this.promise, this.onFulfilled, m);
      }, a.prototype.callRejected = function(m) {
        f.reject(this.promise, m);
      }, a.prototype.otherCallRejected = function(m) {
        h(this.promise, this.onRejected, m);
      };
      function h(m, k, E) {
        s(function() {
          var R;
          try {
            R = k(E);
          } catch (I) {
            return f.reject(m, I);
          }
          R === m ? f.reject(m, new TypeError("Cannot resolve promise with itself")) : f.resolve(m, R);
        });
      }
      f.resolve = function(m, k) {
        var E = _(b, k);
        if (E.status === "error")
          return f.reject(m, E.value);
        var R = E.value;
        if (R)
          v(m, R);
        else {
          m.state = o, m.outcome = k;
          for (var I = -1, C = m.queue.length; ++I < C; )
            m.queue[I].callFulfilled(k);
        }
        return m;
      }, f.reject = function(m, k) {
        m.state = l, m.outcome = k;
        for (var E = -1, R = m.queue.length; ++E < R; )
          m.queue[E].callRejected(k);
        return m;
      };
      function b(m) {
        var k = m && m.then;
        if (m && (typeof m == "object" || typeof m == "function") && typeof k == "function")
          return function() {
            k.apply(m, arguments);
          };
      }
      function v(m, k) {
        var E = !1;
        function R(T) {
          E || (E = !0, f.reject(m, T));
        }
        function I(T) {
          E || (E = !0, f.resolve(m, T));
        }
        function C() {
          k(I, R);
        }
        var B = _(C);
        B.status === "error" && R(B.value);
      }
      function _(m, k) {
        var E = {};
        try {
          E.value = m(k), E.status = "success";
        } catch (R) {
          E.status = "error", E.value = R;
        }
        return E;
      }
      d.resolve = O;
      function O(m) {
        return m instanceof this ? m : f.resolve(new this(c), m);
      }
      d.reject = w;
      function w(m) {
        var k = new this(c);
        return f.reject(k, m);
      }
      d.all = p;
      function p(m) {
        var k = this;
        if (Object.prototype.toString.call(m) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var E = m.length, R = !1;
        if (!E)
          return this.resolve([]);
        for (var I = new Array(E), C = 0, B = -1, T = new this(c); ++B < E; )
          D(m[B], B);
        return T;
        function D($, H) {
          k.resolve($).then(W, function(K) {
            R || (R = !0, f.reject(T, K));
          });
          function W(K) {
            I[H] = K, ++C === E && !R && (R = !0, f.resolve(T, I));
          }
        }
      }
      d.race = g;
      function g(m) {
        var k = this;
        if (Object.prototype.toString.call(m) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var E = m.length, R = !1;
        if (!E)
          return this.resolve([]);
        for (var I = -1, C = new this(c); ++I < E; )
          B(m[I]);
        return C;
        function B(T) {
          k.resolve(T).then(function(D) {
            R || (R = !0, f.resolve(C, D));
          }, function(D) {
            R || (R = !0, f.reject(C, D));
          });
        }
      }
    }, { 1: 1 }], 3: [function(t, n, i) {
      (function(s) {
        typeof s.Promise != "function" && (s.Promise = t(2));
      }).call(this, typeof fe < "u" ? fe : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(t, n, i) {
      var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(x) {
        return typeof x;
      } : function(x) {
        return x && typeof Symbol == "function" && x.constructor === Symbol && x !== Symbol.prototype ? "symbol" : typeof x;
      };
      function c(x, S) {
        if (!(x instanceof S))
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
      var l = f();
      function o() {
        try {
          if (!l || !l.open)
            return !1;
          var x = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), S = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!x || S) && typeof indexedDB < "u" && // some outdated implementations of IDB that appear on Samsung
          // and HTC Android devices <4.4 are missing IDBKeyRange
          // See: https://github.com/mozilla/localForage/issues/128
          // See: https://github.com/mozilla/localForage/issues/272
          typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function u(x, S) {
        x = x || [], S = S || {};
        try {
          return new Blob(x, S);
        } catch (A) {
          if (A.name !== "TypeError")
            throw A;
          for (var y = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, L = new y(), N = 0; N < x.length; N += 1)
            L.append(x[N]);
          return L.getBlob(S.type);
        }
      }
      typeof Promise > "u" && t(3);
      var d = Promise;
      function a(x, S) {
        S && x.then(function(y) {
          S(null, y);
        }, function(y) {
          S(y);
        });
      }
      function h(x, S, y) {
        typeof S == "function" && x.then(S), typeof y == "function" && x.catch(y);
      }
      function b(x) {
        return typeof x != "string" && (console.warn(x + " used as a key, but it is not a string."), x = String(x)), x;
      }
      function v() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var _ = "local-forage-detect-blob-support", O = void 0, w = {}, p = Object.prototype.toString, g = "readonly", m = "readwrite";
      function k(x) {
        for (var S = x.length, y = new ArrayBuffer(S), L = new Uint8Array(y), N = 0; N < S; N++)
          L[N] = x.charCodeAt(N);
        return y;
      }
      function E(x) {
        return new d(function(S) {
          var y = x.transaction(_, m), L = u([""]);
          y.objectStore(_).put(L, "key"), y.onabort = function(N) {
            N.preventDefault(), N.stopPropagation(), S(!1);
          }, y.oncomplete = function() {
            var N = navigator.userAgent.match(/Chrome\/(\d+)/), A = navigator.userAgent.match(/Edge\//);
            S(A || !N || parseInt(N[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function R(x) {
        return typeof O == "boolean" ? d.resolve(O) : E(x).then(function(S) {
          return O = S, O;
        });
      }
      function I(x) {
        var S = w[x.name], y = {};
        y.promise = new d(function(L, N) {
          y.resolve = L, y.reject = N;
        }), S.deferredOperations.push(y), S.dbReady ? S.dbReady = S.dbReady.then(function() {
          return y.promise;
        }) : S.dbReady = y.promise;
      }
      function C(x) {
        var S = w[x.name], y = S.deferredOperations.pop();
        if (y)
          return y.resolve(), y.promise;
      }
      function B(x, S) {
        var y = w[x.name], L = y.deferredOperations.pop();
        if (L)
          return L.reject(S), L.promise;
      }
      function T(x, S) {
        return new d(function(y, L) {
          if (w[x.name] = w[x.name] || q(), x.db)
            if (S)
              I(x), x.db.close();
            else
              return y(x.db);
          var N = [x.name];
          S && N.push(x.version);
          var A = l.open.apply(l, N);
          S && (A.onupgradeneeded = function(U) {
            var G = A.result;
            try {
              G.createObjectStore(x.storeName), U.oldVersion <= 1 && G.createObjectStore(_);
            } catch (Z) {
              if (Z.name === "ConstraintError")
                console.warn('The database "' + x.name + '" has been upgraded from version ' + U.oldVersion + " to version " + U.newVersion + ', but the storage "' + x.storeName + '" already exists.');
              else
                throw Z;
            }
          }), A.onerror = function(U) {
            U.preventDefault(), L(A.error);
          }, A.onsuccess = function() {
            var U = A.result;
            U.onversionchange = function(G) {
              G.target.close();
            }, y(U), C(x);
          };
        });
      }
      function D(x) {
        return T(x, !1);
      }
      function $(x) {
        return T(x, !0);
      }
      function H(x, S) {
        if (!x.db)
          return !0;
        var y = !x.db.objectStoreNames.contains(x.storeName), L = x.version < x.db.version, N = x.version > x.db.version;
        if (L && (x.version !== S && console.warn('The database "' + x.name + `" can't be downgraded from version ` + x.db.version + " to version " + x.version + "."), x.version = x.db.version), N || y) {
          if (y) {
            var A = x.db.version + 1;
            A > x.version && (x.version = A);
          }
          return !0;
        }
        return !1;
      }
      function W(x) {
        return new d(function(S, y) {
          var L = new FileReader();
          L.onerror = y, L.onloadend = function(N) {
            var A = btoa(N.target.result || "");
            S({
              __local_forage_encoded_blob: !0,
              data: A,
              type: x.type
            });
          }, L.readAsBinaryString(x);
        });
      }
      function K(x) {
        var S = k(atob(x.data));
        return u([S], { type: x.type });
      }
      function ee(x) {
        return x && x.__local_forage_encoded_blob;
      }
      function Q(x) {
        var S = this, y = S._initReady().then(function() {
          var L = w[S._dbInfo.name];
          if (L && L.dbReady)
            return L.dbReady;
        });
        return h(y, x, x), y;
      }
      function re(x) {
        I(x);
        for (var S = w[x.name], y = S.forages, L = 0; L < y.length; L++) {
          var N = y[L];
          N._dbInfo.db && (N._dbInfo.db.close(), N._dbInfo.db = null);
        }
        return x.db = null, D(x).then(function(A) {
          return x.db = A, H(x) ? $(x) : A;
        }).then(function(A) {
          x.db = S.db = A;
          for (var U = 0; U < y.length; U++)
            y[U]._dbInfo.db = A;
        }).catch(function(A) {
          throw B(x, A), A;
        });
      }
      function z(x, S, y, L) {
        L === void 0 && (L = 1);
        try {
          var N = x.db.transaction(x.storeName, S);
          y(null, N);
        } catch (A) {
          if (L > 0 && (!x.db || A.name === "InvalidStateError" || A.name === "NotFoundError"))
            return d.resolve().then(function() {
              if (!x.db || A.name === "NotFoundError" && !x.db.objectStoreNames.contains(x.storeName) && x.version <= x.db.version)
                return x.db && (x.version = x.db.version + 1), $(x);
            }).then(function() {
              return re(x).then(function() {
                z(x, S, y, L - 1);
              });
            }).catch(y);
          y(A);
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
      function F(x) {
        var S = this, y = {
          db: null
        };
        if (x)
          for (var L in x)
            y[L] = x[L];
        var N = w[y.name];
        N || (N = q(), w[y.name] = N), N.forages.push(S), S._initReady || (S._initReady = S.ready, S.ready = Q);
        var A = [];
        function U() {
          return d.resolve();
        }
        for (var G = 0; G < N.forages.length; G++) {
          var Z = N.forages[G];
          Z !== S && A.push(Z._initReady().catch(U));
        }
        var j = N.forages.slice(0);
        return d.all(A).then(function() {
          return y.db = N.db, D(y);
        }).then(function(J) {
          return y.db = J, H(y, S._defaultConfig.version) ? $(y) : J;
        }).then(function(J) {
          y.db = N.db = J, S._dbInfo = y;
          for (var ne = 0; ne < j.length; ne++) {
            var ve = j[ne];
            ve !== S && (ve._dbInfo.db = y.db, ve._dbInfo.version = y.version);
          }
        });
      }
      function V(x, S) {
        var y = this;
        x = b(x);
        var L = new d(function(N, A) {
          y.ready().then(function() {
            z(y._dbInfo, g, function(U, G) {
              if (U)
                return A(U);
              try {
                var Z = G.objectStore(y._dbInfo.storeName), j = Z.get(x);
                j.onsuccess = function() {
                  var J = j.result;
                  J === void 0 && (J = null), ee(J) && (J = K(J)), N(J);
                }, j.onerror = function() {
                  A(j.error);
                };
              } catch (J) {
                A(J);
              }
            });
          }).catch(A);
        });
        return a(L, S), L;
      }
      function de(x, S) {
        var y = this, L = new d(function(N, A) {
          y.ready().then(function() {
            z(y._dbInfo, g, function(U, G) {
              if (U)
                return A(U);
              try {
                var Z = G.objectStore(y._dbInfo.storeName), j = Z.openCursor(), J = 1;
                j.onsuccess = function() {
                  var ne = j.result;
                  if (ne) {
                    var ve = ne.value;
                    ee(ve) && (ve = K(ve));
                    var we = x(ve, ne.key, J++);
                    we !== void 0 ? N(we) : ne.continue();
                  } else
                    N();
                }, j.onerror = function() {
                  A(j.error);
                };
              } catch (ne) {
                A(ne);
              }
            });
          }).catch(A);
        });
        return a(L, S), L;
      }
      function pe(x, S, y) {
        var L = this;
        x = b(x);
        var N = new d(function(A, U) {
          var G;
          L.ready().then(function() {
            return G = L._dbInfo, p.call(S) === "[object Blob]" ? R(G.db).then(function(Z) {
              return Z ? S : W(S);
            }) : S;
          }).then(function(Z) {
            z(L._dbInfo, m, function(j, J) {
              if (j)
                return U(j);
              try {
                var ne = J.objectStore(L._dbInfo.storeName);
                Z === null && (Z = void 0);
                var ve = ne.put(Z, x);
                J.oncomplete = function() {
                  Z === void 0 && (Z = null), A(Z);
                }, J.onabort = J.onerror = function() {
                  var we = ve.error ? ve.error : ve.transaction.error;
                  U(we);
                };
              } catch (we) {
                U(we);
              }
            });
          }).catch(U);
        });
        return a(N, y), N;
      }
      function Ce(x, S) {
        var y = this;
        x = b(x);
        var L = new d(function(N, A) {
          y.ready().then(function() {
            z(y._dbInfo, m, function(U, G) {
              if (U)
                return A(U);
              try {
                var Z = G.objectStore(y._dbInfo.storeName), j = Z.delete(x);
                G.oncomplete = function() {
                  N();
                }, G.onerror = function() {
                  A(j.error);
                }, G.onabort = function() {
                  var J = j.error ? j.error : j.transaction.error;
                  A(J);
                };
              } catch (J) {
                A(J);
              }
            });
          }).catch(A);
        });
        return a(L, S), L;
      }
      function ce(x) {
        var S = this, y = new d(function(L, N) {
          S.ready().then(function() {
            z(S._dbInfo, m, function(A, U) {
              if (A)
                return N(A);
              try {
                var G = U.objectStore(S._dbInfo.storeName), Z = G.clear();
                U.oncomplete = function() {
                  L();
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
        return a(y, x), y;
      }
      function Se(x) {
        var S = this, y = new d(function(L, N) {
          S.ready().then(function() {
            z(S._dbInfo, g, function(A, U) {
              if (A)
                return N(A);
              try {
                var G = U.objectStore(S._dbInfo.storeName), Z = G.count();
                Z.onsuccess = function() {
                  L(Z.result);
                }, Z.onerror = function() {
                  N(Z.error);
                };
              } catch (j) {
                N(j);
              }
            });
          }).catch(N);
        });
        return a(y, x), y;
      }
      function Me(x, S) {
        var y = this, L = new d(function(N, A) {
          if (x < 0) {
            N(null);
            return;
          }
          y.ready().then(function() {
            z(y._dbInfo, g, function(U, G) {
              if (U)
                return A(U);
              try {
                var Z = G.objectStore(y._dbInfo.storeName), j = !1, J = Z.openKeyCursor();
                J.onsuccess = function() {
                  var ne = J.result;
                  if (!ne) {
                    N(null);
                    return;
                  }
                  x === 0 || j ? N(ne.key) : (j = !0, ne.advance(x));
                }, J.onerror = function() {
                  A(J.error);
                };
              } catch (ne) {
                A(ne);
              }
            });
          }).catch(A);
        });
        return a(L, S), L;
      }
      function ot(x) {
        var S = this, y = new d(function(L, N) {
          S.ready().then(function() {
            z(S._dbInfo, g, function(A, U) {
              if (A)
                return N(A);
              try {
                var G = U.objectStore(S._dbInfo.storeName), Z = G.openKeyCursor(), j = [];
                Z.onsuccess = function() {
                  var J = Z.result;
                  if (!J) {
                    L(j);
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
        return a(y, x), y;
      }
      function Xe(x, S) {
        S = v.apply(this, arguments);
        var y = this.config();
        x = typeof x != "function" && x || {}, x.name || (x.name = x.name || y.name, x.storeName = x.storeName || y.storeName);
        var L = this, N;
        if (!x.name)
          N = d.reject("Invalid arguments");
        else {
          var A = x.name === y.name && L._dbInfo.db, U = A ? d.resolve(L._dbInfo.db) : D(x).then(function(G) {
            var Z = w[x.name], j = Z.forages;
            Z.db = G;
            for (var J = 0; J < j.length; J++)
              j[J]._dbInfo.db = G;
            return G;
          });
          x.storeName ? N = U.then(function(G) {
            if (G.objectStoreNames.contains(x.storeName)) {
              var Z = G.version + 1;
              I(x);
              var j = w[x.name], J = j.forages;
              G.close();
              for (var ne = 0; ne < J.length; ne++) {
                var ve = J[ne];
                ve._dbInfo.db = null, ve._dbInfo.version = Z;
              }
              var we = new d(function(Ee, Te) {
                var Re = l.open(x.name, Z);
                Re.onerror = function(rt) {
                  var Zt = Re.result;
                  Zt.close(), Te(rt);
                }, Re.onupgradeneeded = function() {
                  var rt = Re.result;
                  rt.deleteObjectStore(x.storeName);
                }, Re.onsuccess = function() {
                  var rt = Re.result;
                  rt.close(), Ee(rt);
                };
              });
              return we.then(function(Ee) {
                j.db = Ee;
                for (var Te = 0; Te < J.length; Te++) {
                  var Re = J[Te];
                  Re._dbInfo.db = Ee, C(Re._dbInfo);
                }
              }).catch(function(Ee) {
                throw (B(x, Ee) || d.resolve()).catch(function() {
                }), Ee;
              });
            }
          }) : N = U.then(function(G) {
            I(x);
            var Z = w[x.name], j = Z.forages;
            G.close();
            for (var J = 0; J < j.length; J++) {
              var ne = j[J];
              ne._dbInfo.db = null;
            }
            var ve = new d(function(we, Ee) {
              var Te = l.deleteDatabase(x.name);
              Te.onerror = function() {
                var Re = Te.result;
                Re && Re.close(), Ee(Te.error);
              }, Te.onblocked = function() {
                console.warn('dropInstance blocked for database "' + x.name + '" until all open connections are closed');
              }, Te.onsuccess = function() {
                var Re = Te.result;
                Re && Re.close(), we(Re);
              };
            });
            return ve.then(function(we) {
              Z.db = we;
              for (var Ee = 0; Ee < j.length; Ee++) {
                var Te = j[Ee];
                C(Te._dbInfo);
              }
            }).catch(function(we) {
              throw (B(x, we) || d.resolve()).catch(function() {
              }), we;
            });
          });
        }
        return a(N, S), N;
      }
      var $e = {
        _driver: "asyncStorage",
        _initStorage: F,
        _support: o(),
        iterate: de,
        getItem: V,
        setItem: pe,
        removeItem: Ce,
        clear: ce,
        length: Se,
        key: Me,
        keys: ot,
        dropInstance: Xe
      };
      function Ae() {
        return typeof openDatabase == "function";
      }
      var Ne = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _t = "~~local_forage_type~", ht = /^~~local_forage_type~([^~]+)~/, Je = "__lfsc__:", wt = Je.length, et = "arbf", He = "blob", qe = "si08", Ke = "ui08", Et = "uic8", kt = "si16", at = "si32", M = "ur16", X = "ui32", P = "fl32", ie = "fl64", _e = wt + et.length, Fe = Object.prototype.toString;
      function ct(x) {
        var S = x.length * 0.75, y = x.length, L, N = 0, A, U, G, Z;
        x[x.length - 1] === "=" && (S--, x[x.length - 2] === "=" && S--);
        var j = new ArrayBuffer(S), J = new Uint8Array(j);
        for (L = 0; L < y; L += 4)
          A = Ne.indexOf(x[L]), U = Ne.indexOf(x[L + 1]), G = Ne.indexOf(x[L + 2]), Z = Ne.indexOf(x[L + 3]), J[N++] = A << 2 | U >> 4, J[N++] = (U & 15) << 4 | G >> 2, J[N++] = (G & 3) << 6 | Z & 63;
        return j;
      }
      function tt(x) {
        var S = new Uint8Array(x), y = "", L;
        for (L = 0; L < S.length; L += 3)
          y += Ne[S[L] >> 2], y += Ne[(S[L] & 3) << 4 | S[L + 1] >> 4], y += Ne[(S[L + 1] & 15) << 2 | S[L + 2] >> 6], y += Ne[S[L + 2] & 63];
        return S.length % 3 === 2 ? y = y.substring(0, y.length - 1) + "=" : S.length % 3 === 1 && (y = y.substring(0, y.length - 2) + "=="), y;
      }
      function Dt(x, S) {
        var y = "";
        if (x && (y = Fe.call(x)), x && (y === "[object ArrayBuffer]" || x.buffer && Fe.call(x.buffer) === "[object ArrayBuffer]")) {
          var L, N = Je;
          x instanceof ArrayBuffer ? (L = x, N += et) : (L = x.buffer, y === "[object Int8Array]" ? N += qe : y === "[object Uint8Array]" ? N += Ke : y === "[object Uint8ClampedArray]" ? N += Et : y === "[object Int16Array]" ? N += kt : y === "[object Uint16Array]" ? N += M : y === "[object Int32Array]" ? N += at : y === "[object Uint32Array]" ? N += X : y === "[object Float32Array]" ? N += P : y === "[object Float64Array]" ? N += ie : S(new Error("Failed to get type for BinaryArray"))), S(N + tt(L));
        } else if (y === "[object Blob]") {
          var A = new FileReader();
          A.onload = function() {
            var U = _t + x.type + "~" + tt(this.result);
            S(Je + He + U);
          }, A.readAsArrayBuffer(x);
        } else
          try {
            S(JSON.stringify(x));
          } catch (U) {
            console.error("Couldn't convert value into a JSON string: ", x), S(null, U);
          }
      }
      function De(x) {
        if (x.substring(0, wt) !== Je)
          return JSON.parse(x);
        var S = x.substring(_e), y = x.substring(wt, _e), L;
        if (y === He && ht.test(S)) {
          var N = S.match(ht);
          L = N[1], S = S.substring(N[0].length);
        }
        var A = ct(S);
        switch (y) {
          case et:
            return A;
          case He:
            return u([A], { type: L });
          case qe:
            return new Int8Array(A);
          case Ke:
            return new Uint8Array(A);
          case Et:
            return new Uint8ClampedArray(A);
          case kt:
            return new Int16Array(A);
          case M:
            return new Uint16Array(A);
          case at:
            return new Int32Array(A);
          case X:
            return new Uint32Array(A);
          case P:
            return new Float32Array(A);
          case ie:
            return new Float64Array(A);
          default:
            throw new Error("Unkown type: " + y);
        }
      }
      var We = {
        serialize: Dt,
        deserialize: De,
        stringToBuffer: ct,
        bufferToString: tt
      };
      function Yt(x, S, y, L) {
        x.executeSql("CREATE TABLE IF NOT EXISTS " + S.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], y, L);
      }
      function hn(x) {
        var S = this, y = {
          db: null
        };
        if (x)
          for (var L in x)
            y[L] = typeof x[L] != "string" ? x[L].toString() : x[L];
        var N = new d(function(A, U) {
          try {
            y.db = openDatabase(y.name, String(y.version), y.description, y.size);
          } catch (G) {
            return U(G);
          }
          y.db.transaction(function(G) {
            Yt(G, y, function() {
              S._dbInfo = y, A();
            }, function(Z, j) {
              U(j);
            });
          }, U);
        });
        return y.serializer = We, N;
      }
      function ft(x, S, y, L, N, A) {
        x.executeSql(y, L, N, function(U, G) {
          G.code === G.SYNTAX_ERR ? U.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [S.storeName], function(Z, j) {
            j.rows.length ? A(Z, G) : Yt(Z, S, function() {
              Z.executeSql(y, L, N, A);
            }, A);
          }, A) : A(U, G);
        }, A);
      }
      function vn(x, S) {
        var y = this;
        x = b(x);
        var L = new d(function(N, A) {
          y.ready().then(function() {
            var U = y._dbInfo;
            U.db.transaction(function(G) {
              ft(G, U, "SELECT * FROM " + U.storeName + " WHERE key = ? LIMIT 1", [x], function(Z, j) {
                var J = j.rows.length ? j.rows.item(0).value : null;
                J && (J = U.serializer.deserialize(J)), N(J);
              }, function(Z, j) {
                A(j);
              });
            });
          }).catch(A);
        });
        return a(L, S), L;
      }
      function ar(x, S) {
        var y = this, L = new d(function(N, A) {
          y.ready().then(function() {
            var U = y._dbInfo;
            U.db.transaction(function(G) {
              ft(G, U, "SELECT * FROM " + U.storeName, [], function(Z, j) {
                for (var J = j.rows, ne = J.length, ve = 0; ve < ne; ve++) {
                  var we = J.item(ve), Ee = we.value;
                  if (Ee && (Ee = U.serializer.deserialize(Ee)), Ee = x(Ee, we.key, ve + 1), Ee !== void 0) {
                    N(Ee);
                    return;
                  }
                }
                N();
              }, function(Z, j) {
                A(j);
              });
            });
          }).catch(A);
        });
        return a(L, S), L;
      }
      function cr(x, S, y, L) {
        var N = this;
        x = b(x);
        var A = new d(function(U, G) {
          N.ready().then(function() {
            S === void 0 && (S = null);
            var Z = S, j = N._dbInfo;
            j.serializer.serialize(S, function(J, ne) {
              ne ? G(ne) : j.db.transaction(function(ve) {
                ft(ve, j, "INSERT OR REPLACE INTO " + j.storeName + " (key, value) VALUES (?, ?)", [x, J], function() {
                  U(Z);
                }, function(we, Ee) {
                  G(Ee);
                });
              }, function(ve) {
                if (ve.code === ve.QUOTA_ERR) {
                  if (L > 0) {
                    U(cr.apply(N, [x, Z, y, L - 1]));
                    return;
                  }
                  G(ve);
                }
              });
            });
          }).catch(G);
        });
        return a(A, y), A;
      }
      function pn(x, S, y) {
        return cr.apply(this, [x, S, y, 1]);
      }
      function xn(x, S) {
        var y = this;
        x = b(x);
        var L = new d(function(N, A) {
          y.ready().then(function() {
            var U = y._dbInfo;
            U.db.transaction(function(G) {
              ft(G, U, "DELETE FROM " + U.storeName + " WHERE key = ?", [x], function() {
                N();
              }, function(Z, j) {
                A(j);
              });
            });
          }).catch(A);
        });
        return a(L, S), L;
      }
      function fr(x) {
        var S = this, y = new d(function(L, N) {
          S.ready().then(function() {
            var A = S._dbInfo;
            A.db.transaction(function(U) {
              ft(U, A, "DELETE FROM " + A.storeName, [], function() {
                L();
              }, function(G, Z) {
                N(Z);
              });
            });
          }).catch(N);
        });
        return a(y, x), y;
      }
      function bn(x) {
        var S = this, y = new d(function(L, N) {
          S.ready().then(function() {
            var A = S._dbInfo;
            A.db.transaction(function(U) {
              ft(U, A, "SELECT COUNT(key) as c FROM " + A.storeName, [], function(G, Z) {
                var j = Z.rows.item(0).c;
                L(j);
              }, function(G, Z) {
                N(Z);
              });
            });
          }).catch(N);
        });
        return a(y, x), y;
      }
      function gn(x, S) {
        var y = this, L = new d(function(N, A) {
          y.ready().then(function() {
            var U = y._dbInfo;
            U.db.transaction(function(G) {
              ft(G, U, "SELECT key FROM " + U.storeName + " WHERE id = ? LIMIT 1", [x + 1], function(Z, j) {
                var J = j.rows.length ? j.rows.item(0).key : null;
                N(J);
              }, function(Z, j) {
                A(j);
              });
            });
          }).catch(A);
        });
        return a(L, S), L;
      }
      function ur(x) {
        var S = this, y = new d(function(L, N) {
          S.ready().then(function() {
            var A = S._dbInfo;
            A.db.transaction(function(U) {
              ft(U, A, "SELECT key FROM " + A.storeName, [], function(G, Z) {
                for (var j = [], J = 0; J < Z.rows.length; J++)
                  j.push(Z.rows.item(J).key);
                L(j);
              }, function(G, Z) {
                N(Z);
              });
            });
          }).catch(N);
        });
        return a(y, x), y;
      }
      function mn(x) {
        return new d(function(S, y) {
          x.transaction(function(L) {
            L.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(N, A) {
              for (var U = [], G = 0; G < A.rows.length; G++)
                U.push(A.rows.item(G).name);
              S({
                db: x,
                storeNames: U
              });
            }, function(N, A) {
              y(A);
            });
          }, function(L) {
            y(L);
          });
        });
      }
      function lr(x, S) {
        S = v.apply(this, arguments);
        var y = this.config();
        x = typeof x != "function" && x || {}, x.name || (x.name = x.name || y.name, x.storeName = x.storeName || y.storeName);
        var L = this, N;
        return x.name ? N = new d(function(A) {
          var U;
          x.name === y.name ? U = L._dbInfo.db : U = openDatabase(x.name, "", "", 0), x.storeName ? A({
            db: U,
            storeNames: [x.storeName]
          }) : A(mn(U));
        }).then(function(A) {
          return new d(function(U, G) {
            A.db.transaction(function(Z) {
              function j(we) {
                return new d(function(Ee, Te) {
                  Z.executeSql("DROP TABLE IF EXISTS " + we, [], function() {
                    Ee();
                  }, function(Re, rt) {
                    Te(rt);
                  });
                });
              }
              for (var J = [], ne = 0, ve = A.storeNames.length; ne < ve; ne++)
                J.push(j(A.storeNames[ne]));
              d.all(J).then(function() {
                U();
              }).catch(function(we) {
                G(we);
              });
            }, function(Z) {
              G(Z);
            });
          });
        }) : N = d.reject("Invalid arguments"), a(N, S), N;
      }
      var Ge = {
        _driver: "webSQLStorage",
        _initStorage: hn,
        _support: Ae(),
        iterate: ar,
        getItem: vn,
        setItem: pn,
        removeItem: xn,
        clear: fr,
        length: bn,
        key: gn,
        keys: ur,
        dropInstance: lr
      };
      function vt() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function Kt(x, S) {
        var y = x.name + "/";
        return x.storeName !== S.storeName && (y += x.storeName + "/"), y;
      }
      function yn() {
        var x = "_localforage_support_test";
        try {
          return localStorage.setItem(x, !0), localStorage.removeItem(x), !1;
        } catch {
          return !0;
        }
      }
      function Hi() {
        return !yn() || localStorage.length > 0;
      }
      function zi(x) {
        var S = this, y = {};
        if (x)
          for (var L in x)
            y[L] = x[L];
        return y.keyPrefix = Kt(x, S._defaultConfig), Hi() ? (S._dbInfo = y, y.serializer = We, d.resolve()) : d.reject();
      }
      function $i(x) {
        var S = this, y = S.ready().then(function() {
          for (var L = S._dbInfo.keyPrefix, N = localStorage.length - 1; N >= 0; N--) {
            var A = localStorage.key(N);
            A.indexOf(L) === 0 && localStorage.removeItem(A);
          }
        });
        return a(y, x), y;
      }
      function qi(x, S) {
        var y = this;
        x = b(x);
        var L = y.ready().then(function() {
          var N = y._dbInfo, A = localStorage.getItem(N.keyPrefix + x);
          return A && (A = N.serializer.deserialize(A)), A;
        });
        return a(L, S), L;
      }
      function Fi(x, S) {
        var y = this, L = y.ready().then(function() {
          for (var N = y._dbInfo, A = N.keyPrefix, U = A.length, G = localStorage.length, Z = 1, j = 0; j < G; j++) {
            var J = localStorage.key(j);
            if (J.indexOf(A) === 0) {
              var ne = localStorage.getItem(J);
              if (ne && (ne = N.serializer.deserialize(ne)), ne = x(ne, J.substring(U), Z++), ne !== void 0)
                return ne;
            }
          }
        });
        return a(L, S), L;
      }
      function Ui(x, S) {
        var y = this, L = y.ready().then(function() {
          var N = y._dbInfo, A;
          try {
            A = localStorage.key(x);
          } catch {
            A = null;
          }
          return A && (A = A.substring(N.keyPrefix.length)), A;
        });
        return a(L, S), L;
      }
      function Wi(x) {
        var S = this, y = S.ready().then(function() {
          for (var L = S._dbInfo, N = localStorage.length, A = [], U = 0; U < N; U++) {
            var G = localStorage.key(U);
            G.indexOf(L.keyPrefix) === 0 && A.push(G.substring(L.keyPrefix.length));
          }
          return A;
        });
        return a(y, x), y;
      }
      function Vi(x) {
        var S = this, y = S.keys().then(function(L) {
          return L.length;
        });
        return a(y, x), y;
      }
      function Yi(x, S) {
        var y = this;
        x = b(x);
        var L = y.ready().then(function() {
          var N = y._dbInfo;
          localStorage.removeItem(N.keyPrefix + x);
        });
        return a(L, S), L;
      }
      function Ki(x, S, y) {
        var L = this;
        x = b(x);
        var N = L.ready().then(function() {
          S === void 0 && (S = null);
          var A = S;
          return new d(function(U, G) {
            var Z = L._dbInfo;
            Z.serializer.serialize(S, function(j, J) {
              if (J)
                G(J);
              else
                try {
                  localStorage.setItem(Z.keyPrefix + x, j), U(A);
                } catch (ne) {
                  (ne.name === "QuotaExceededError" || ne.name === "NS_ERROR_DOM_QUOTA_REACHED") && G(ne), G(ne);
                }
            });
          });
        });
        return a(N, y), N;
      }
      function Gi(x, S) {
        if (S = v.apply(this, arguments), x = typeof x != "function" && x || {}, !x.name) {
          var y = this.config();
          x.name = x.name || y.name, x.storeName = x.storeName || y.storeName;
        }
        var L = this, N;
        return x.name ? N = new d(function(A) {
          x.storeName ? A(Kt(x, L._defaultConfig)) : A(x.name + "/");
        }).then(function(A) {
          for (var U = localStorage.length - 1; U >= 0; U--) {
            var G = localStorage.key(U);
            G.indexOf(A) === 0 && localStorage.removeItem(G);
          }
        }) : N = d.reject("Invalid arguments"), a(N, S), N;
      }
      var Zi = {
        _driver: "localStorageWrapper",
        _initStorage: zi,
        _support: vt(),
        iterate: Fi,
        getItem: qi,
        setItem: Ki,
        removeItem: Yi,
        clear: $i,
        length: Vi,
        key: Ui,
        keys: Wi,
        dropInstance: Gi
      }, Xi = function(S, y) {
        return S === y || typeof S == "number" && typeof y == "number" && isNaN(S) && isNaN(y);
      }, ji = function(S, y) {
        for (var L = S.length, N = 0; N < L; ) {
          if (Xi(S[N], y))
            return !0;
          N++;
        }
        return !1;
      }, Zn = Array.isArray || function(x) {
        return Object.prototype.toString.call(x) === "[object Array]";
      }, Gt = {}, Xn = {}, zt = {
        INDEXEDDB: $e,
        WEBSQL: Ge,
        LOCALSTORAGE: Zi
      }, Qi = [zt.INDEXEDDB._driver, zt.WEBSQL._driver, zt.LOCALSTORAGE._driver], dr = ["dropInstance"], _n = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(dr), Ji = {
        description: "",
        driver: Qi.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function es(x, S) {
        x[S] = function() {
          var y = arguments;
          return x.ready().then(function() {
            return x[S].apply(x, y);
          });
        };
      }
      function wn() {
        for (var x = 1; x < arguments.length; x++) {
          var S = arguments[x];
          if (S)
            for (var y in S)
              S.hasOwnProperty(y) && (Zn(S[y]) ? arguments[0][y] = S[y].slice() : arguments[0][y] = S[y]);
        }
        return arguments[0];
      }
      var ts = function() {
        function x(S) {
          c(this, x);
          for (var y in zt)
            if (zt.hasOwnProperty(y)) {
              var L = zt[y], N = L._driver;
              this[y] = N, Gt[N] || this.defineDriver(L);
            }
          this._defaultConfig = wn({}, Ji), this._config = wn({}, this._defaultConfig, S), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return x.prototype.config = function(y) {
          if ((typeof y > "u" ? "undefined" : s(y)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var L in y) {
              if (L === "storeName" && (y[L] = y[L].replace(/\W/g, "_")), L === "version" && typeof y[L] != "number")
                return new Error("Database version must be a number.");
              this._config[L] = y[L];
            }
            return "driver" in y && y.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof y == "string" ? this._config[y] : this._config;
        }, x.prototype.defineDriver = function(y, L, N) {
          var A = new d(function(U, G) {
            try {
              var Z = y._driver, j = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!y._driver) {
                G(j);
                return;
              }
              for (var J = _n.concat("_initStorage"), ne = 0, ve = J.length; ne < ve; ne++) {
                var we = J[ne], Ee = !ji(dr, we);
                if ((Ee || y[we]) && typeof y[we] != "function") {
                  G(j);
                  return;
                }
              }
              var Te = function() {
                for (var Zt = function(is) {
                  return function() {
                    var ss = new Error("Method " + is + " is not implemented by the current driver"), jn = d.reject(ss);
                    return a(jn, arguments[arguments.length - 1]), jn;
                  };
                }, En = 0, ns = dr.length; En < ns; En++) {
                  var kn = dr[En];
                  y[kn] || (y[kn] = Zt(kn));
                }
              };
              Te();
              var Re = function(Zt) {
                Gt[Z] && console.info("Redefining LocalForage driver: " + Z), Gt[Z] = y, Xn[Z] = Zt, U();
              };
              "_support" in y ? y._support && typeof y._support == "function" ? y._support().then(Re, G) : Re(!!y._support) : Re(!0);
            } catch (rt) {
              G(rt);
            }
          });
          return h(A, L, N), A;
        }, x.prototype.driver = function() {
          return this._driver || null;
        }, x.prototype.getDriver = function(y, L, N) {
          var A = Gt[y] ? d.resolve(Gt[y]) : d.reject(new Error("Driver not found."));
          return h(A, L, N), A;
        }, x.prototype.getSerializer = function(y) {
          var L = d.resolve(We);
          return h(L, y), L;
        }, x.prototype.ready = function(y) {
          var L = this, N = L._driverSet.then(function() {
            return L._ready === null && (L._ready = L._initDriver()), L._ready;
          });
          return h(N, y, y), N;
        }, x.prototype.setDriver = function(y, L, N) {
          var A = this;
          Zn(y) || (y = [y]);
          var U = this._getSupportedDrivers(y);
          function G() {
            A._config.driver = A.driver();
          }
          function Z(ne) {
            return A._extend(ne), G(), A._ready = A._initStorage(A._config), A._ready;
          }
          function j(ne) {
            return function() {
              var ve = 0;
              function we() {
                for (; ve < ne.length; ) {
                  var Ee = ne[ve];
                  return ve++, A._dbInfo = null, A._ready = null, A.getDriver(Ee).then(Z).catch(we);
                }
                G();
                var Te = new Error("No available storage method found.");
                return A._driverSet = d.reject(Te), A._driverSet;
              }
              return we();
            };
          }
          var J = this._driverSet !== null ? this._driverSet.catch(function() {
            return d.resolve();
          }) : d.resolve();
          return this._driverSet = J.then(function() {
            var ne = U[0];
            return A._dbInfo = null, A._ready = null, A.getDriver(ne).then(function(ve) {
              A._driver = ve._driver, G(), A._wrapLibraryMethodsWithReady(), A._initDriver = j(U);
            });
          }).catch(function() {
            G();
            var ne = new Error("No available storage method found.");
            return A._driverSet = d.reject(ne), A._driverSet;
          }), h(this._driverSet, L, N), this._driverSet;
        }, x.prototype.supports = function(y) {
          return !!Xn[y];
        }, x.prototype._extend = function(y) {
          wn(this, y);
        }, x.prototype._getSupportedDrivers = function(y) {
          for (var L = [], N = 0, A = y.length; N < A; N++) {
            var U = y[N];
            this.supports(U) && L.push(U);
          }
          return L;
        }, x.prototype._wrapLibraryMethodsWithReady = function() {
          for (var y = 0, L = _n.length; y < L; y++)
            es(this, _n[y]);
        }, x.prototype.createInstance = function(y) {
          return new x(y);
        }, x;
      }(), rs = new ts();
      n.exports = rs;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(Go);
const gt = /* @__PURE__ */ Object.create(null);
gt.open = "0";
gt.close = "1";
gt.ping = "2";
gt.pong = "3";
gt.message = "4";
gt.upgrade = "5";
gt.noop = "6";
const br = /* @__PURE__ */ Object.create(null);
Object.keys(gt).forEach((e) => {
  br[gt[e]] = e;
});
const Zo = { type: "error", data: "parser error" }, Xo = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", jo = typeof ArrayBuffer == "function", Qo = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, ui = ({ type: e, data: r }, t, n) => Xo && r instanceof Blob ? t ? n(r) : U0(r, n) : jo && (r instanceof ArrayBuffer || Qo(r)) ? t ? n(r) : U0(new Blob([r]), n) : n(gt[e] + (r || "")), U0 = (e, r) => {
  const t = new FileReader();
  return t.onload = function() {
    const n = t.result.split(",")[1];
    r("b" + (n || ""));
  }, t.readAsDataURL(e);
}, W0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", rr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < W0.length; e++)
  rr[W0.charCodeAt(e)] = e;
const Jo = (e) => {
  let r = e.length * 0.75, t = e.length, n, i = 0, s, c, f, l;
  e[e.length - 1] === "=" && (r--, e[e.length - 2] === "=" && r--);
  const o = new ArrayBuffer(r), u = new Uint8Array(o);
  for (n = 0; n < t; n += 4)
    s = rr[e.charCodeAt(n)], c = rr[e.charCodeAt(n + 1)], f = rr[e.charCodeAt(n + 2)], l = rr[e.charCodeAt(n + 3)], u[i++] = s << 2 | c >> 4, u[i++] = (c & 15) << 4 | f >> 2, u[i++] = (f & 3) << 6 | l & 63;
  return o;
}, ea = typeof ArrayBuffer == "function", li = (e, r) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: di(e, r)
    };
  const t = e.charAt(0);
  return t === "b" ? {
    type: "message",
    data: ta(e.substring(1), r)
  } : br[t] ? e.length > 1 ? {
    type: br[t],
    data: e.substring(1)
  } : {
    type: br[t]
  } : Zo;
}, ta = (e, r) => {
  if (ea) {
    const t = Jo(e);
    return di(t, r);
  } else
    return { base64: !0, data: e };
}, di = (e, r) => {
  switch (r) {
    case "blob":
      return e instanceof ArrayBuffer ? new Blob([e]) : e;
    case "arraybuffer":
    default:
      return e;
  }
}, hi = String.fromCharCode(30), ra = (e, r) => {
  const t = e.length, n = new Array(t);
  let i = 0;
  e.forEach((s, c) => {
    ui(s, !1, (f) => {
      n[c] = f, ++i === t && r(n.join(hi));
    });
  });
}, na = (e, r) => {
  const t = e.split(hi), n = [];
  for (let i = 0; i < t.length; i++) {
    const s = li(t[i], r);
    if (n.push(s), s.type === "error")
      break;
  }
  return n;
}, vi = 4;
function Ie(e) {
  if (e)
    return ia(e);
}
function ia(e) {
  for (var r in Ie.prototype)
    e[r] = Ie.prototype[r];
  return e;
}
Ie.prototype.on = Ie.prototype.addEventListener = function(e, r) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(r), this;
};
Ie.prototype.once = function(e, r) {
  function t() {
    this.off(e, t), r.apply(this, arguments);
  }
  return t.fn = r, this.on(e, t), this;
};
Ie.prototype.off = Ie.prototype.removeListener = Ie.prototype.removeAllListeners = Ie.prototype.removeEventListener = function(e, r) {
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
Ie.prototype.emit = function(e) {
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
Ie.prototype.emitReserved = Ie.prototype.emit;
Ie.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
Ie.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const st = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();
function pi(e, ...r) {
  return r.reduce((t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t), {});
}
const sa = st.setTimeout, oa = st.clearTimeout;
function fn(e, r) {
  r.useNativeTimers ? (e.setTimeoutFn = sa.bind(st), e.clearTimeoutFn = oa.bind(st)) : (e.setTimeoutFn = st.setTimeout.bind(st), e.clearTimeoutFn = st.clearTimeout.bind(st));
}
const aa = 1.33;
function ca(e) {
  return typeof e == "string" ? fa(e) : Math.ceil((e.byteLength || e.size) * aa);
}
function fa(e) {
  let r = 0, t = 0;
  for (let n = 0, i = e.length; n < i; n++)
    r = e.charCodeAt(n), r < 128 ? t += 1 : r < 2048 ? t += 2 : r < 55296 || r >= 57344 ? t += 3 : (n++, t += 4);
  return t;
}
class ua extends Error {
  constructor(r, t, n) {
    super(r), this.description = t, this.context = n, this.type = "TransportError";
  }
}
class xi extends Ie {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(r) {
    super(), this.writable = !1, fn(this, r), this.opts = r, this.query = r.query, this.socket = r.socket;
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
    return super.emitReserved("error", new ua(r, t, n)), this;
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
    const t = li(r, this.socket.binaryType);
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
const bi = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), On = 64, la = {};
let V0 = 0, vr = 0, Y0;
function K0(e) {
  let r = "";
  do
    r = bi[e % On] + r, e = Math.floor(e / On);
  while (e > 0);
  return r;
}
function gi() {
  const e = K0(+/* @__PURE__ */ new Date());
  return e !== Y0 ? (V0 = 0, Y0 = e) : e + "." + K0(V0++);
}
for (; vr < On; vr++)
  la[bi[vr]] = vr;
function mi(e) {
  let r = "";
  for (let t in e)
    e.hasOwnProperty(t) && (r.length && (r += "&"), r += encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
  return r;
}
function da(e) {
  let r = {}, t = e.split("&");
  for (let n = 0, i = t.length; n < i; n++) {
    let s = t[n].split("=");
    r[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return r;
}
let yi = !1;
try {
  yi = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const ha = yi;
function _i(e) {
  const r = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!r || ha))
      return new XMLHttpRequest();
  } catch {
  }
  if (!r)
    try {
      return new st[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function va() {
}
const pa = function() {
  return new _i({
    xdomain: !1
  }).responseType != null;
}();
class xa extends xi {
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
    this.supportsBinary = pa && !t;
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
    na(r, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
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
    this.writable = !1, ra(r, (t) => {
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
    this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = gi()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.opts.port && (t === "https" && Number(this.opts.port) !== 443 || t === "http" && Number(this.opts.port) !== 80) && (n = ":" + this.opts.port);
    const i = mi(r), s = this.opts.hostname.indexOf(":") !== -1;
    return t + "://" + (s ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(r = {}) {
    return Object.assign(r, { xd: this.xd, xs: this.xs }, this.opts), new bt(this.uri(), r);
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
    n.on("success", t), n.on("error", (i, s) => {
      this.onError("xhr post error", i, s);
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
class bt extends Ie {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(r, t) {
    super(), fn(this, t), this.opts = t, this.method = t.method || "GET", this.uri = r, this.async = t.async !== !1, this.data = t.data !== void 0 ? t.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    const r = pi(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    r.xdomain = !!this.opts.xd, r.xscheme = !!this.opts.xs;
    const t = this.xhr = new _i(r);
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
    typeof document < "u" && (this.index = bt.requestsCount++, bt.requests[this.index] = this);
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
      if (this.xhr.onreadystatechange = va, r)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete bt.requests[this.index], this.xhr = null;
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
bt.requestsCount = 0;
bt.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", G0);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in st ? "pagehide" : "unload";
    addEventListener(e, G0, !1);
  }
}
function G0() {
  for (let e in bt.requests)
    bt.requests.hasOwnProperty(e) && bt.requests[e].abort();
}
const wi = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? (r) => Promise.resolve().then(r) : (r, t) => t(r, 0))(), pr = st.WebSocket || st.MozWebSocket, Z0 = !0, ba = "arraybuffer", X0 = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class ga extends xi {
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
    const r = this.uri(), t = this.opts.protocols, n = X0 ? {} : pi(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = Z0 && !X0 ? t ? new pr(r, t) : new pr(r) : new pr(r, t, n);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this.ws.binaryType = this.socket.binaryType || ba, this.addEventListeners();
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
      ui(n, this.supportsBinary, (s) => {
        const c = {};
        try {
          Z0 && this.ws.send(s);
        } catch {
        }
        i && wi(() => {
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
    this.opts.port && (t === "wss" && Number(this.opts.port) !== 443 || t === "ws" && Number(this.opts.port) !== 80) && (n = ":" + this.opts.port), this.opts.timestampRequests && (r[this.opts.timestampParam] = gi()), this.supportsBinary || (r.b64 = 1);
    const i = mi(r), s = this.opts.hostname.indexOf(":") !== -1;
    return t + "://" + (s ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!pr;
  }
}
const ma = {
  websocket: ga,
  polling: xa
}, ya = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, _a = [
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
function Ln(e) {
  const r = e, t = e.indexOf("["), n = e.indexOf("]");
  t != -1 && n != -1 && (e = e.substring(0, t) + e.substring(t, n).replace(/:/g, ";") + e.substring(n, e.length));
  let i = ya.exec(e || ""), s = {}, c = 14;
  for (; c--; )
    s[_a[c]] = i[c] || "";
  return t != -1 && n != -1 && (s.source = r, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = wa(s, s.path), s.queryKey = Ea(s, s.query), s;
}
function wa(e, r) {
  const t = /\/{2,9}/g, n = r.replace(t, "/").split("/");
  return (r.slice(0, 1) == "/" || r.length === 0) && n.splice(0, 1), r.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function Ea(e, r) {
  const t = {};
  return r.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, i, s) {
    i && (t[i] = s);
  }), t;
}
let Ei = class $t extends Ie {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(r, t = {}) {
    super(), this.writeBuffer = [], r && typeof r == "object" && (t = r, r = null), r ? (r = Ln(r), t.hostname = r.host, t.secure = r.protocol === "https" || r.protocol === "wss", t.port = r.port, r.query && (t.query = r.query)) : t.host && (t.hostname = Ln(t.host).host), fn(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = t.transports || ["polling", "websocket"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
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
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = da(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
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
    t.EIO = vi, t.transport = r, this.id && (t.sid = this.id);
    const n = Object.assign({}, this.opts.transportOptions[r], this.opts, {
      query: t,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new ma[r](n);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let r;
    if (this.opts.rememberUpgrade && $t.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
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
    $t.priorWebsocketSuccess = !1;
    const i = () => {
      n || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (d) => {
        if (!n)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            $t.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (u(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
            });
          } else {
            const a = new Error("probe error");
            a.transport = t.name, this.emitReserved("upgradeError", a);
          }
      }));
    };
    function s() {
      n || (n = !0, u(), t.close(), t = null);
    }
    const c = (d) => {
      const a = new Error("probe error: " + d);
      a.transport = t.name, s(), this.emitReserved("upgradeError", a);
    };
    function f() {
      c("transport closed");
    }
    function l() {
      c("socket closed");
    }
    function o(d) {
      t && d.name !== t.name && s();
    }
    const u = () => {
      t.removeListener("open", i), t.removeListener("error", c), t.removeListener("close", f), this.off("close", l), this.off("upgrading", o);
    };
    t.once("open", i), t.once("error", c), t.once("close", f), this.once("close", l), this.once("upgrading", o), t.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", $t.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
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
      if (i && (t += ca(i)), n > 0 && t > this.maxPayload)
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
    const s = {
      type: r,
      data: t,
      options: n
    };
    this.emitReserved("packetCreate", s), this.writeBuffer.push(s), i && this.once("flush", i), this.flush();
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
    $t.priorWebsocketSuccess = !1, this.emitReserved("error", r), this.onClose("transport error", r);
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
Ei.protocol = vi;
function ka(e, r = "", t) {
  let n = e;
  t = t || typeof location < "u" && location, e == null && (e = t.protocol + "//" + t.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = t.protocol + e : e = t.host + e), /^(https?|wss?):\/\//.test(e) || (typeof t < "u" ? e = t.protocol + "//" + e : e = "https://" + e), n = Ln(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const s = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + s + ":" + n.port + r, n.href = n.protocol + "://" + s + (t && t.port === n.port ? "" : ":" + n.port), n;
}
const Ca = typeof ArrayBuffer == "function", Sa = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, ki = Object.prototype.toString, Ba = typeof Blob == "function" || typeof Blob < "u" && ki.call(Blob) === "[object BlobConstructor]", Aa = typeof File == "function" || typeof File < "u" && ki.call(File) === "[object FileConstructor]";
function Yn(e) {
  return Ca && (e instanceof ArrayBuffer || Sa(e)) || Ba && e instanceof Blob || Aa && e instanceof File;
}
function gr(e, r) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let t = 0, n = e.length; t < n; t++)
      if (gr(e[t]))
        return !0;
    return !1;
  }
  if (Yn(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return gr(e.toJSON(), !0);
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && gr(e[t]))
      return !0;
  return !1;
}
function Ra(e) {
  const r = [], t = e.data, n = e;
  return n.data = Nn(t, r), n.attachments = r.length, { packet: n, buffers: r };
}
function Nn(e, r) {
  if (!e)
    return e;
  if (Yn(e)) {
    const t = { _placeholder: !0, num: r.length };
    return r.push(e), t;
  } else if (Array.isArray(e)) {
    const t = new Array(e.length);
    for (let n = 0; n < e.length; n++)
      t[n] = Nn(e[n], r);
    return t;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const t = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = Nn(e[n], r));
    return t;
  }
  return e;
}
function Oa(e, r) {
  return e.data = Dn(e.data, r), delete e.attachments, e;
}
function Dn(e, r) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < r.length)
      return r[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let t = 0; t < e.length; t++)
      e[t] = Dn(e[t], r);
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && (e[t] = Dn(e[t], r));
  return e;
}
const La = 5;
var ye;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(ye || (ye = {}));
class Na {
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
    return (r.type === ye.EVENT || r.type === ye.ACK) && gr(r) ? this.encodeAsBinary({
      type: r.type === ye.EVENT ? ye.BINARY_EVENT : ye.BINARY_ACK,
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
    return (r.type === ye.BINARY_EVENT || r.type === ye.BINARY_ACK) && (t += r.attachments + "-"), r.nsp && r.nsp !== "/" && (t += r.nsp + ","), r.id != null && (t += r.id), r.data != null && (t += JSON.stringify(r.data, this.replacer)), t;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(r) {
    const t = Ra(r), n = this.encodeAsString(t.packet), i = t.buffers;
    return i.unshift(n), i;
  }
}
class Kn extends Ie {
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
      const n = t.type === ye.BINARY_EVENT;
      n || t.type === ye.BINARY_ACK ? (t.type = n ? ye.EVENT : ye.ACK, this.reconstructor = new Da(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (Yn(r) || r.base64)
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
    if (ye[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === ye.BINARY_EVENT || n.type === ye.BINARY_ACK) {
      const s = t + 1;
      for (; r.charAt(++t) !== "-" && t != r.length; )
        ;
      const c = r.substring(s, t);
      if (c != Number(c) || r.charAt(t) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(c);
    }
    if (r.charAt(t + 1) === "/") {
      const s = t + 1;
      for (; ++t && !(r.charAt(t) === "," || t === r.length); )
        ;
      n.nsp = r.substring(s, t);
    } else
      n.nsp = "/";
    const i = r.charAt(t + 1);
    if (i !== "" && Number(i) == i) {
      const s = t + 1;
      for (; ++t; ) {
        const c = r.charAt(t);
        if (c == null || Number(c) != c) {
          --t;
          break;
        }
        if (t === r.length)
          break;
      }
      n.id = Number(r.substring(s, t + 1));
    }
    if (r.charAt(++t)) {
      const s = this.tryParse(r.substr(t));
      if (Kn.isPayloadValid(n.type, s))
        n.data = s;
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
      case ye.CONNECT:
        return typeof t == "object";
      case ye.DISCONNECT:
        return t === void 0;
      case ye.CONNECT_ERROR:
        return typeof t == "string" || typeof t == "object";
      case ye.EVENT:
      case ye.BINARY_EVENT:
        return Array.isArray(t) && t.length > 0;
      case ye.ACK:
      case ye.BINARY_ACK:
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
class Da {
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
      const t = Oa(this.reconPack, this.buffers);
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
const Ta = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Kn,
  Encoder: Na,
  get PacketType() {
    return ye;
  },
  protocol: La
}, Symbol.toStringTag, { value: "Module" }));
function ut(e, r, t) {
  return e.on(r, t), function() {
    e.off(r, t);
  };
}
const Pa = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Ci extends Ie {
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
      ut(r, "open", this.onopen.bind(this)),
      ut(r, "packet", this.onpacket.bind(this)),
      ut(r, "error", this.onerror.bind(this)),
      ut(r, "close", this.onclose.bind(this))
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
    if (Pa.hasOwnProperty(r))
      throw new Error('"' + r.toString() + '" is a reserved event name');
    if (t.unshift(r), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(t), this;
    const n = {
      type: ye.EVENT,
      data: t
    };
    if (n.options = {}, n.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
      const c = this.ids++, f = t.pop();
      this._registerAckCallback(c, f), n.id = c;
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
    const s = this.io.setTimeoutFn(() => {
      delete this.acks[r];
      for (let c = 0; c < this.sendBuffer.length; c++)
        this.sendBuffer[c].id === r && this.sendBuffer.splice(c, 1);
      t.call(this, new Error("operation has timed out"));
    }, i);
    this.acks[r] = (...c) => {
      this.io.clearTimeoutFn(s), t.apply(this, [null, ...c]);
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
    return new Promise((i, s) => {
      t.push((c, f) => n ? c ? s(c) : i(f) : i(c)), this.emit(r, ...t);
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
    r.push((i, ...s) => n !== this._queue[0] ? void 0 : (i !== null ? n.tryCount > this._opts.retries && (this._queue.shift(), t && t(i)) : (this._queue.shift(), t && t(null, ...s)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue();
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
      type: ye.CONNECT,
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
        case ye.CONNECT:
          r.data && r.data.sid ? this.onconnect(r.data.sid, r.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case ye.EVENT:
        case ye.BINARY_EVENT:
          this.onevent(r);
          break;
        case ye.ACK:
        case ye.BINARY_ACK:
          this.onack(r);
          break;
        case ye.DISCONNECT:
          this.ondisconnect();
          break;
        case ye.CONNECT_ERROR:
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
        type: ye.ACK,
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
    return this.connected && this.packet({ type: ye.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function Vt(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
Vt.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var r = Math.random(), t = Math.floor(r * this.jitter * e);
    e = Math.floor(r * 10) & 1 ? e + t : e - t;
  }
  return Math.min(e, this.max) | 0;
};
Vt.prototype.reset = function() {
  this.attempts = 0;
};
Vt.prototype.setMin = function(e) {
  this.ms = e;
};
Vt.prototype.setMax = function(e) {
  this.max = e;
};
Vt.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Tn extends Ie {
  constructor(r, t) {
    var n;
    super(), this.nsps = {}, this.subs = [], r && typeof r == "object" && (t = r, r = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, fn(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((n = t.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new Vt({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = r;
    const i = t.parser || Ta;
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
    this.engine = new Ei(this.uri, this.opts);
    const t = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = ut(t, "open", function() {
      n.onopen(), r && r();
    }), s = ut(t, "error", (c) => {
      n.cleanup(), n._readyState = "closed", this.emitReserved("error", c), r ? r(c) : n.maybeReconnectOnOpen();
    });
    if (this._timeout !== !1) {
      const c = this._timeout;
      c === 0 && i();
      const f = this.setTimeoutFn(() => {
        i(), t.close(), t.emit("error", new Error("timeout"));
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
    this.subs.push(ut(r, "ping", this.onping.bind(this)), ut(r, "data", this.ondata.bind(this)), ut(r, "error", this.onerror.bind(this)), ut(r, "close", this.onclose.bind(this)), ut(this.decoder, "decoded", this.ondecoded.bind(this)));
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
    wi(() => {
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
    return n ? this._autoConnect && !n.active && n.connect() : (n = new Ci(this, r, t), this.nsps[r] = n), n;
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
const Qt = {};
function Bn(e, r) {
  typeof e == "object" && (r = e, e = void 0), r = r || {};
  const t = ka(e, r.path || "/socket.io"), n = t.source, i = t.id, s = t.path, c = Qt[i] && s in Qt[i].nsps, f = r.forceNew || r["force new connection"] || r.multiplex === !1 || c;
  let l;
  return f ? l = new Tn(n, r) : (Qt[i] || (Qt[i] = new Tn(n, r)), l = Qt[i]), t.query && !r.query && (r.query = t.queryKey), l.socket(t.path, r);
}
Object.assign(Bn, {
  Manager: Tn,
  Socket: Ci,
  io: Bn,
  connect: Bn
});
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var qt = 9e15, Nt = 1e9, Pn = "0123456789abcdef", nn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", sn = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", In = {
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
  minE: -qt,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: qt,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Si, St, le = !0, un = "[DecimalError] ", Lt = un + "Invalid argument: ", Bi = un + "Precision limit exceeded", Ai = un + "crypto unavailable", Ri = "[object Decimal]", Ye = Math.floor, ze = Math.pow, Ia = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Ma = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Ha = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Oi = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, dt = 1e7, ae = 7, za = 9007199254740991, $a = nn.length - 1, Mn = sn.length - 1, Y = { toStringTag: Ri };
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
    throw Error(Lt + r);
  return t = n.cmp(e), t < 0 ? e : n.cmp(r) > 0 ? r : new i(n);
};
Y.comparedTo = Y.cmp = function(e) {
  var r, t, n, i, s = this, c = s.d, f = (e = new s.constructor(e)).d, l = s.s, o = e.s;
  if (!c || !f)
    return !l || !o ? NaN : l !== o ? l : c === f ? 0 : !c ^ l < 0 ? 1 : -1;
  if (!c[0] || !f[0])
    return c[0] ? l : f[0] ? -o : 0;
  if (l !== o)
    return l;
  if (s.e !== e.e)
    return s.e > e.e ^ l < 0 ? 1 : -1;
  for (n = c.length, i = f.length, r = 0, t = n < i ? n : i; r < t; ++r)
    if (c[r] !== f[r])
      return c[r] > f[r] ^ l < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
};
Y.cosine = Y.cos = function() {
  var e, r, t = this, n = t.constructor;
  return t.d ? t.d[0] ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + ae, n.rounding = 1, t = qa(n, Pi(n, t)), n.precision = e, n.rounding = r, se(St == 2 || St == 3 ? t.neg() : t, e, r, !0)) : new n(1) : new n(NaN);
};
Y.cubeRoot = Y.cbrt = function() {
  var e, r, t, n, i, s, c, f, l, o, u = this, d = u.constructor;
  if (!u.isFinite() || u.isZero())
    return new d(u);
  for (le = !1, s = u.s * ze(u.s * u, 1 / 3), !s || Math.abs(s) == 1 / 0 ? (t = Ve(u.d), e = u.e, (s = (e - t.length + 1) % 3) && (t += s == 1 || s == -2 ? "0" : "00"), s = ze(t, 1 / 3), e = Ye((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), s == 1 / 0 ? t = "5e" + e : (t = s.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new d(t), n.s = u.s) : n = new d(s.toString()), c = (e = d.precision) + 3; ; )
    if (f = n, l = f.times(f).times(f), o = l.plus(u), n = ke(o.plus(u).times(f), o.plus(l), c + 2, 1), Ve(f.d).slice(0, c) === (t = Ve(n.d)).slice(0, c))
      if (t = t.slice(c - 3, c + 1), t == "9999" || !i && t == "4999") {
        if (!i && (se(f, e + 1, 0), f.times(f).times(f).eq(u))) {
          n = f;
          break;
        }
        c += 4, i = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (se(n, e + 1, 1), r = !n.times(n).times(n).eq(u));
        break;
      }
  return le = !0, se(n, e, d.rounding, r);
};
Y.decimalPlaces = Y.dp = function() {
  var e, r = this.d, t = NaN;
  if (r) {
    if (e = r.length - 1, t = (e - Ye(this.e / ae)) * ae, e = r[e], e)
      for (; e % 10 == 0; e /= 10)
        t--;
    t < 0 && (t = 0);
  }
  return t;
};
Y.dividedBy = Y.div = function(e) {
  return ke(this, new this.constructor(e));
};
Y.dividedToIntegerBy = Y.divToInt = function(e) {
  var r = this, t = r.constructor;
  return se(ke(r, new t(e), 0, 1, 1), t.precision, t.rounding);
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
  var e, r, t, n, i, s = this, c = s.constructor, f = new c(1);
  if (!s.isFinite())
    return new c(s.s ? 1 / 0 : NaN);
  if (s.isZero())
    return f;
  t = c.precision, n = c.rounding, c.precision = t + Math.max(s.e, s.sd()) + 4, c.rounding = 1, i = s.d.length, i < 32 ? (e = Math.ceil(i / 3), r = (1 / dn(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), s = Wt(c, 1, s.times(r), new c(1), !0);
  for (var l, o = e, u = new c(8); o--; )
    l = s.times(s), s = f.minus(l.times(u.minus(l.times(u))));
  return se(s, c.precision = t, c.rounding = n, !0);
};
Y.hyperbolicSine = Y.sinh = function() {
  var e, r, t, n, i = this, s = i.constructor;
  if (!i.isFinite() || i.isZero())
    return new s(i);
  if (r = s.precision, t = s.rounding, s.precision = r + Math.max(i.e, i.sd()) + 4, s.rounding = 1, n = i.d.length, n < 3)
    i = Wt(s, 2, i, i, !0);
  else {
    e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / dn(5, e)), i = Wt(s, 2, i, i, !0);
    for (var c, f = new s(5), l = new s(16), o = new s(20); e--; )
      c = i.times(i), i = i.times(f.plus(c.times(l.times(c).plus(o))));
  }
  return s.precision = r, s.rounding = t, se(i, r, t, !0);
};
Y.hyperbolicTangent = Y.tanh = function() {
  var e, r, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 7, n.rounding = 1, ke(t.sinh(), t.cosh(), n.precision = e, n.rounding = r)) : new n(t.s);
};
Y.inverseCosine = Y.acos = function() {
  var e, r = this, t = r.constructor, n = r.abs().cmp(1), i = t.precision, s = t.rounding;
  return n !== -1 ? n === 0 ? r.isNeg() ? lt(t, i, s) : new t(0) : new t(NaN) : r.isZero() ? lt(t, i + 4, s).times(0.5) : (t.precision = i + 6, t.rounding = 1, r = r.asin(), e = lt(t, i + 4, s).times(0.5), t.precision = i, t.rounding = s, e.minus(r));
};
Y.inverseHyperbolicCosine = Y.acosh = function() {
  var e, r, t = this, n = t.constructor;
  return t.lte(1) ? new n(t.eq(1) ? 0 : NaN) : t.isFinite() ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(Math.abs(t.e), t.sd()) + 4, n.rounding = 1, le = !1, t = t.times(t).minus(1).sqrt().plus(t), le = !0, n.precision = e, n.rounding = r, t.ln()) : new n(t);
};
Y.inverseHyperbolicSine = Y.asinh = function() {
  var e, r, t = this, n = t.constructor;
  return !t.isFinite() || t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 2 * Math.max(Math.abs(t.e), t.sd()) + 6, n.rounding = 1, le = !1, t = t.times(t).plus(1).sqrt().plus(t), le = !0, n.precision = e, n.rounding = r, t.ln());
};
Y.inverseHyperbolicTangent = Y.atanh = function() {
  var e, r, t, n, i = this, s = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = s.precision, r = s.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? se(new s(i), e, r, !0) : (s.precision = t = n - i.e, i = ke(i.plus(1), new s(1).minus(i), t + e, 1), s.precision = e + 4, s.rounding = 1, i = i.ln(), s.precision = e, s.rounding = r, i.times(0.5))) : new s(NaN);
};
Y.inverseSine = Y.asin = function() {
  var e, r, t, n, i = this, s = i.constructor;
  return i.isZero() ? new s(i) : (r = i.abs().cmp(1), t = s.precision, n = s.rounding, r !== -1 ? r === 0 ? (e = lt(s, t + 4, n).times(0.5), e.s = i.s, e) : new s(NaN) : (s.precision = t + 6, s.rounding = 1, i = i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan(), s.precision = t, s.rounding = n, i.times(2)));
};
Y.inverseTangent = Y.atan = function() {
  var e, r, t, n, i, s, c, f, l, o = this, u = o.constructor, d = u.precision, a = u.rounding;
  if (o.isFinite()) {
    if (o.isZero())
      return new u(o);
    if (o.abs().eq(1) && d + 4 <= Mn)
      return c = lt(u, d + 4, a).times(0.25), c.s = o.s, c;
  } else {
    if (!o.s)
      return new u(NaN);
    if (d + 4 <= Mn)
      return c = lt(u, d + 4, a).times(0.5), c.s = o.s, c;
  }
  for (u.precision = f = d + 10, u.rounding = 1, t = Math.min(28, f / ae + 2 | 0), e = t; e; --e)
    o = o.div(o.times(o).plus(1).sqrt().plus(1));
  for (le = !1, r = Math.ceil(f / ae), n = 1, l = o.times(o), c = new u(o), i = o; e !== -1; )
    if (i = i.times(l), s = c.minus(i.div(n += 2)), i = i.times(l), c = s.plus(i.div(n += 2)), c.d[r] !== void 0)
      for (e = r; c.d[e] === s.d[e] && e--; )
        ;
  return t && (c = c.times(2 << t - 1)), le = !0, se(c, u.precision = d, u.rounding = a, !0);
};
Y.isFinite = function() {
  return !!this.d;
};
Y.isInteger = Y.isInt = function() {
  return !!this.d && Ye(this.e / ae) > this.d.length - 2;
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
  var r, t, n, i, s, c, f, l, o = this, u = o.constructor, d = u.precision, a = u.rounding, h = 5;
  if (e == null)
    e = new u(10), r = !0;
  else {
    if (e = new u(e), t = e.d, e.s < 0 || !t || !t[0] || e.eq(1))
      return new u(NaN);
    r = e.eq(10);
  }
  if (t = o.d, o.s < 0 || !t || !t[0] || o.eq(1))
    return new u(t && !t[0] ? -1 / 0 : o.s != 1 ? NaN : t ? 0 : 1 / 0);
  if (r)
    if (t.length > 1)
      s = !0;
    else {
      for (i = t[0]; i % 10 === 0; )
        i /= 10;
      s = i !== 1;
    }
  if (le = !1, f = d + h, c = Ot(o, f), n = r ? on(u, f + 10) : Ot(e, f), l = ke(c, n, f, 1), sr(l.d, i = d, a))
    do
      if (f += 10, c = Ot(o, f), n = r ? on(u, f + 10) : Ot(e, f), l = ke(c, n, f, 1), !s) {
        +Ve(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = se(l, d + 1, 0));
        break;
      }
    while (sr(l.d, i += 10, a));
  return le = !0, se(l, d, a);
};
Y.minus = Y.sub = function(e) {
  var r, t, n, i, s, c, f, l, o, u, d, a, h = this, b = h.constructor;
  if (e = new b(e), !h.d || !e.d)
    return !h.s || !e.s ? e = new b(NaN) : h.d ? e.s = -e.s : e = new b(e.d || h.s !== e.s ? h : NaN), e;
  if (h.s != e.s)
    return e.s = -e.s, h.plus(e);
  if (o = h.d, a = e.d, f = b.precision, l = b.rounding, !o[0] || !a[0]) {
    if (a[0])
      e.s = -e.s;
    else if (o[0])
      e = new b(h);
    else
      return new b(l === 3 ? -0 : 0);
    return le ? se(e, f, l) : e;
  }
  if (t = Ye(e.e / ae), u = Ye(h.e / ae), o = o.slice(), s = u - t, s) {
    for (d = s < 0, d ? (r = o, s = -s, c = a.length) : (r = a, t = u, c = o.length), n = Math.max(Math.ceil(f / ae), c) + 2, s > n && (s = n, r.length = 1), r.reverse(), n = s; n--; )
      r.push(0);
    r.reverse();
  } else {
    for (n = o.length, c = a.length, d = n < c, d && (c = n), n = 0; n < c; n++)
      if (o[n] != a[n]) {
        d = o[n] < a[n];
        break;
      }
    s = 0;
  }
  for (d && (r = o, o = a, a = r, e.s = -e.s), c = o.length, n = a.length - c; n > 0; --n)
    o[c++] = 0;
  for (n = a.length; n > s; ) {
    if (o[--n] < a[n]) {
      for (i = n; i && o[--i] === 0; )
        o[i] = dt - 1;
      --o[i], o[n] += dt;
    }
    o[n] -= a[n];
  }
  for (; o[--c] === 0; )
    o.pop();
  for (; o[0] === 0; o.shift())
    --t;
  return o[0] ? (e.d = o, e.e = ln(o, t), le ? se(e, f, l) : e) : new b(l === 3 ? -0 : 0);
};
Y.modulo = Y.mod = function(e) {
  var r, t = this, n = t.constructor;
  return e = new n(e), !t.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || t.d && !t.d[0] ? se(new n(t), n.precision, n.rounding) : (le = !1, n.modulo == 9 ? (r = ke(t, e.abs(), 0, 3, 1), r.s *= e.s) : r = ke(t, e, 0, n.modulo, 1), r = r.times(e), le = !0, t.minus(r));
};
Y.naturalExponential = Y.exp = function() {
  return Hn(this);
};
Y.naturalLogarithm = Y.ln = function() {
  return Ot(this);
};
Y.negated = Y.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, se(e);
};
Y.plus = Y.add = function(e) {
  var r, t, n, i, s, c, f, l, o, u, d = this, a = d.constructor;
  if (e = new a(e), !d.d || !e.d)
    return !d.s || !e.s ? e = new a(NaN) : d.d || (e = new a(e.d || d.s === e.s ? d : NaN)), e;
  if (d.s != e.s)
    return e.s = -e.s, d.minus(e);
  if (o = d.d, u = e.d, f = a.precision, l = a.rounding, !o[0] || !u[0])
    return u[0] || (e = new a(d)), le ? se(e, f, l) : e;
  if (s = Ye(d.e / ae), n = Ye(e.e / ae), o = o.slice(), i = s - n, i) {
    for (i < 0 ? (t = o, i = -i, c = u.length) : (t = u, n = s, c = o.length), s = Math.ceil(f / ae), c = s > c ? s + 1 : c + 1, i > c && (i = c, t.length = 1), t.reverse(); i--; )
      t.push(0);
    t.reverse();
  }
  for (c = o.length, i = u.length, c - i < 0 && (i = c, t = u, u = o, o = t), r = 0; i; )
    r = (o[--i] = o[i] + u[i] + r) / dt | 0, o[i] %= dt;
  for (r && (o.unshift(r), ++n), c = o.length; o[--c] == 0; )
    o.pop();
  return e.d = o, e.e = ln(o, n), le ? se(e, f, l) : e;
};
Y.precision = Y.sd = function(e) {
  var r, t = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Lt + e);
  return t.d ? (r = Li(t.d), e && t.e + 1 > r && (r = t.e + 1)) : r = NaN, r;
};
Y.round = function() {
  var e = this, r = e.constructor;
  return se(new r(e), e.e + 1, r.rounding);
};
Y.sine = Y.sin = function() {
  var e, r, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + ae, n.rounding = 1, t = Ua(n, Pi(n, t)), n.precision = e, n.rounding = r, se(St > 2 ? t.neg() : t, e, r, !0)) : new n(NaN);
};
Y.squareRoot = Y.sqrt = function() {
  var e, r, t, n, i, s, c = this, f = c.d, l = c.e, o = c.s, u = c.constructor;
  if (o !== 1 || !f || !f[0])
    return new u(!o || o < 0 && (!f || f[0]) ? NaN : f ? c : 1 / 0);
  for (le = !1, o = Math.sqrt(+c), o == 0 || o == 1 / 0 ? (r = Ve(f), (r.length + l) % 2 == 0 && (r += "0"), o = Math.sqrt(r), l = Ye((l + 1) / 2) - (l < 0 || l % 2), o == 1 / 0 ? r = "5e" + l : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + l), n = new u(r)) : n = new u(o.toString()), t = (l = u.precision) + 3; ; )
    if (s = n, n = s.plus(ke(c, s, t + 2, 1)).times(0.5), Ve(s.d).slice(0, t) === (r = Ve(n.d)).slice(0, t))
      if (r = r.slice(t - 3, t + 1), r == "9999" || !i && r == "4999") {
        if (!i && (se(s, l + 1, 0), s.times(s).eq(c))) {
          n = s;
          break;
        }
        t += 4, i = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (se(n, l + 1, 1), e = !n.times(n).eq(c));
        break;
      }
  return le = !0, se(n, l, u.rounding, e);
};
Y.tangent = Y.tan = function() {
  var e, r, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 10, n.rounding = 1, t = t.sin(), t.s = 1, t = ke(t, new n(1).minus(t.times(t)).sqrt(), e + 10, 0), n.precision = e, n.rounding = r, se(St == 2 || St == 4 ? t.neg() : t, e, r, !0)) : new n(NaN);
};
Y.times = Y.mul = function(e) {
  var r, t, n, i, s, c, f, l, o, u = this, d = u.constructor, a = u.d, h = (e = new d(e)).d;
  if (e.s *= u.s, !a || !a[0] || !h || !h[0])
    return new d(!e.s || a && !a[0] && !h || h && !h[0] && !a ? NaN : !a || !h ? e.s / 0 : e.s * 0);
  for (t = Ye(u.e / ae) + Ye(e.e / ae), l = a.length, o = h.length, l < o && (s = a, a = h, h = s, c = l, l = o, o = c), s = [], c = l + o, n = c; n--; )
    s.push(0);
  for (n = o; --n >= 0; ) {
    for (r = 0, i = l + n; i > n; )
      f = s[i] + h[n] * a[i - n - 1] + r, s[i--] = f % dt | 0, r = f / dt | 0;
    s[i] = (s[i] + r) % dt | 0;
  }
  for (; !s[--c]; )
    s.pop();
  return r ? ++t : s.shift(), e.d = s, e.e = ln(s, t), le ? se(e, d.precision, d.rounding) : e;
};
Y.toBinary = function(e, r) {
  return Gn(this, 2, e, r);
};
Y.toDecimalPlaces = Y.toDP = function(e, r) {
  var t = this, n = t.constructor;
  return t = new n(t), e === void 0 ? t : (je(e, 0, Nt), r === void 0 ? r = n.rounding : je(r, 0, 8), se(t, e + t.e + 1, r));
};
Y.toExponential = function(e, r) {
  var t, n = this, i = n.constructor;
  return e === void 0 ? t = mt(n, !0) : (je(e, 0, Nt), r === void 0 ? r = i.rounding : je(r, 0, 8), n = se(new i(n), e + 1, r), t = mt(n, !0, e + 1)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
Y.toFixed = function(e, r) {
  var t, n, i = this, s = i.constructor;
  return e === void 0 ? t = mt(i) : (je(e, 0, Nt), r === void 0 ? r = s.rounding : je(r, 0, 8), n = se(new s(i), e + i.e + 1, r), t = mt(n, !1, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + t : t;
};
Y.toFraction = function(e) {
  var r, t, n, i, s, c, f, l, o, u, d, a, h = this, b = h.d, v = h.constructor;
  if (!b)
    return new v(h);
  if (o = t = new v(1), n = l = new v(0), r = new v(n), s = r.e = Li(b) - h.e - 1, c = s % ae, r.d[0] = ze(10, c < 0 ? ae + c : c), e == null)
    e = s > 0 ? r : o;
  else {
    if (f = new v(e), !f.isInt() || f.lt(o))
      throw Error(Lt + f);
    e = f.gt(r) ? s > 0 ? r : o : f;
  }
  for (le = !1, f = new v(Ve(b)), u = v.precision, v.precision = s = b.length * ae * 2; d = ke(f, r, 0, 1, 1), i = t.plus(d.times(n)), i.cmp(e) != 1; )
    t = n, n = i, i = o, o = l.plus(d.times(i)), l = i, i = r, r = f.minus(d.times(i)), f = i;
  return i = ke(e.minus(t), n, 0, 1, 1), l = l.plus(i.times(o)), t = t.plus(i.times(n)), l.s = o.s = h.s, a = ke(o, n, s, 1).minus(h).abs().cmp(ke(l, t, s, 1).minus(h).abs()) < 1 ? [o, n] : [l, t], v.precision = u, le = !0, a;
};
Y.toHexadecimal = Y.toHex = function(e, r) {
  return Gn(this, 16, e, r);
};
Y.toNearest = function(e, r) {
  var t = this, n = t.constructor;
  if (t = new n(t), e == null) {
    if (!t.d)
      return t;
    e = new n(1), r = n.rounding;
  } else {
    if (e = new n(e), r === void 0 ? r = n.rounding : je(r, 0, 8), !t.d)
      return e.s ? t : e;
    if (!e.d)
      return e.s && (e.s = t.s), e;
  }
  return e.d[0] ? (le = !1, t = ke(t, e, 0, r, 1).times(e), le = !0, se(t)) : (e.s = t.s, t = e), t;
};
Y.toNumber = function() {
  return +this;
};
Y.toOctal = function(e, r) {
  return Gn(this, 8, e, r);
};
Y.toPower = Y.pow = function(e) {
  var r, t, n, i, s, c, f = this, l = f.constructor, o = +(e = new l(e));
  if (!f.d || !e.d || !f.d[0] || !e.d[0])
    return new l(ze(+f, o));
  if (f = new l(f), f.eq(1))
    return f;
  if (n = l.precision, s = l.rounding, e.eq(1))
    return se(f, n, s);
  if (r = Ye(e.e / ae), r >= e.d.length - 1 && (t = o < 0 ? -o : o) <= za)
    return i = Ni(l, f, t, n), e.s < 0 ? new l(1).div(i) : se(i, n, s);
  if (c = f.s, c < 0) {
    if (r < e.d.length - 1)
      return new l(NaN);
    if (e.d[r] & 1 || (c = 1), f.e == 0 && f.d[0] == 1 && f.d.length == 1)
      return f.s = c, f;
  }
  return t = ze(+f, o), r = t == 0 || !isFinite(t) ? Ye(o * (Math.log("0." + Ve(f.d)) / Math.LN10 + f.e + 1)) : new l(t + "").e, r > l.maxE + 1 || r < l.minE - 1 ? new l(r > 0 ? c / 0 : 0) : (le = !1, l.rounding = f.s = 1, t = Math.min(12, (r + "").length), i = Hn(e.times(Ot(f, n + t)), n), i.d && (i = se(i, n + 5, 1), sr(i.d, n, s) && (r = n + 10, i = se(Hn(e.times(Ot(f, r + t)), r), r + 5, 1), +Ve(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = se(i, n + 1, 0)))), i.s = c, le = !0, l.rounding = s, se(i, n, s));
};
Y.toPrecision = function(e, r) {
  var t, n = this, i = n.constructor;
  return e === void 0 ? t = mt(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (je(e, 1, Nt), r === void 0 ? r = i.rounding : je(r, 0, 8), n = se(new i(n), e, r), t = mt(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
Y.toSignificantDigits = Y.toSD = function(e, r) {
  var t = this, n = t.constructor;
  return e === void 0 ? (e = n.precision, r = n.rounding) : (je(e, 1, Nt), r === void 0 ? r = n.rounding : je(r, 0, 8)), se(new n(t), e, r);
};
Y.toString = function() {
  var e = this, r = e.constructor, t = mt(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + t : t;
};
Y.truncated = Y.trunc = function() {
  return se(new this.constructor(this), this.e + 1, 1);
};
Y.valueOf = Y.toJSON = function() {
  var e = this, r = e.constructor, t = mt(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() ? "-" + t : t;
};
function Ve(e) {
  var r, t, n, i = e.length - 1, s = "", c = e[0];
  if (i > 0) {
    for (s += c, r = 1; r < i; r++)
      n = e[r] + "", t = ae - n.length, t && (s += At(t)), s += n;
    c = e[r], n = c + "", t = ae - n.length, t && (s += At(t));
  } else if (c === 0)
    return "0";
  for (; c % 10 === 0; )
    c /= 10;
  return s + c;
}
function je(e, r, t) {
  if (e !== ~~e || e < r || e > t)
    throw Error(Lt + e);
}
function sr(e, r, t, n) {
  var i, s, c, f;
  for (s = e[0]; s >= 10; s /= 10)
    --r;
  return --r < 0 ? (r += ae, i = 0) : (i = Math.ceil((r + 1) / ae), r %= ae), s = ze(10, ae - r), f = e[i] % s | 0, n == null ? r < 3 ? (r == 0 ? f = f / 100 | 0 : r == 1 && (f = f / 10 | 0), c = t < 4 && f == 99999 || t > 3 && f == 49999 || f == 5e4 || f == 0) : c = (t < 4 && f + 1 == s || t > 3 && f + 1 == s / 2) && (e[i + 1] / s / 100 | 0) == ze(10, r - 2) - 1 || (f == s / 2 || f == 0) && (e[i + 1] / s / 100 | 0) == 0 : r < 4 ? (r == 0 ? f = f / 1e3 | 0 : r == 1 ? f = f / 100 | 0 : r == 2 && (f = f / 10 | 0), c = (n || t < 4) && f == 9999 || !n && t > 3 && f == 4999) : c = ((n || t < 4) && f + 1 == s || !n && t > 3 && f + 1 == s / 2) && (e[i + 1] / s / 1e3 | 0) == ze(10, r - 3) - 1, c;
}
function mr(e, r, t) {
  for (var n, i = [0], s, c = 0, f = e.length; c < f; ) {
    for (s = i.length; s--; )
      i[s] *= r;
    for (i[0] += Pn.indexOf(e.charAt(c++)), n = 0; n < i.length; n++)
      i[n] > t - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / t | 0, i[n] %= t);
  }
  return i.reverse();
}
function qa(e, r) {
  var t, n, i;
  if (r.isZero())
    return r;
  n = r.d.length, n < 32 ? (t = Math.ceil(n / 3), i = (1 / dn(4, t)).toString()) : (t = 16, i = "2.3283064365386962890625e-10"), e.precision += t, r = Wt(e, 1, r.times(i), new e(1));
  for (var s = t; s--; ) {
    var c = r.times(r);
    r = c.times(c).minus(c).times(8).plus(1);
  }
  return e.precision -= t, r;
}
var ke = function() {
  function e(n, i, s) {
    var c, f = 0, l = n.length;
    for (n = n.slice(); l--; )
      c = n[l] * i + f, n[l] = c % s | 0, f = c / s | 0;
    return f && n.unshift(f), n;
  }
  function r(n, i, s, c) {
    var f, l;
    if (s != c)
      l = s > c ? 1 : -1;
    else
      for (f = l = 0; f < s; f++)
        if (n[f] != i[f]) {
          l = n[f] > i[f] ? 1 : -1;
          break;
        }
    return l;
  }
  function t(n, i, s, c) {
    for (var f = 0; s--; )
      n[s] -= f, f = n[s] < i[s] ? 1 : 0, n[s] = f * c + n[s] - i[s];
    for (; !n[0] && n.length > 1; )
      n.shift();
  }
  return function(n, i, s, c, f, l) {
    var o, u, d, a, h, b, v, _, O, w, p, g, m, k, E, R, I, C, B, T, D = n.constructor, $ = n.s == i.s ? 1 : -1, H = n.d, W = i.d;
    if (!H || !H[0] || !W || !W[0])
      return new D(
        // Return NaN if either NaN, or both Infinity or 0.
        !n.s || !i.s || (H ? W && H[0] == W[0] : !W) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          H && H[0] == 0 || !W ? $ * 0 : $ / 0
        )
      );
    for (l ? (h = 1, u = n.e - i.e) : (l = dt, h = ae, u = Ye(n.e / h) - Ye(i.e / h)), B = W.length, I = H.length, O = new D($), w = O.d = [], d = 0; W[d] == (H[d] || 0); d++)
      ;
    if (W[d] > (H[d] || 0) && u--, s == null ? (k = s = D.precision, c = D.rounding) : f ? k = s + (n.e - i.e) + 1 : k = s, k < 0)
      w.push(1), b = !0;
    else {
      if (k = k / h + 2 | 0, d = 0, B == 1) {
        for (a = 0, W = W[0], k++; (d < I || a) && k--; d++)
          E = a * l + (H[d] || 0), w[d] = E / W | 0, a = E % W | 0;
        b = a || d < I;
      } else {
        for (a = l / (W[0] + 1) | 0, a > 1 && (W = e(W, a, l), H = e(H, a, l), B = W.length, I = H.length), R = B, p = H.slice(0, B), g = p.length; g < B; )
          p[g++] = 0;
        T = W.slice(), T.unshift(0), C = W[0], W[1] >= l / 2 && ++C;
        do
          a = 0, o = r(W, p, B, g), o < 0 ? (m = p[0], B != g && (m = m * l + (p[1] || 0)), a = m / C | 0, a > 1 ? (a >= l && (a = l - 1), v = e(W, a, l), _ = v.length, g = p.length, o = r(v, p, _, g), o == 1 && (a--, t(v, B < _ ? T : W, _, l))) : (a == 0 && (o = a = 1), v = W.slice()), _ = v.length, _ < g && v.unshift(0), t(p, v, g, l), o == -1 && (g = p.length, o = r(W, p, B, g), o < 1 && (a++, t(p, B < g ? T : W, g, l))), g = p.length) : o === 0 && (a++, p = [0]), w[d++] = a, o && p[0] ? p[g++] = H[R] || 0 : (p = [H[R]], g = 1);
        while ((R++ < I || p[0] !== void 0) && k--);
        b = p[0] !== void 0;
      }
      w[0] || w.shift();
    }
    if (h == 1)
      O.e = u, Si = b;
    else {
      for (d = 1, a = w[0]; a >= 10; a /= 10)
        d++;
      O.e = d + u * h - 1, se(O, f ? s + O.e + 1 : s, c, b);
    }
    return O;
  };
}();
function se(e, r, t, n) {
  var i, s, c, f, l, o, u, d, a, h = e.constructor;
  e:
    if (r != null) {
      if (d = e.d, !d)
        return e;
      for (i = 1, f = d[0]; f >= 10; f /= 10)
        i++;
      if (s = r - i, s < 0)
        s += ae, c = r, u = d[a = 0], l = u / ze(10, i - c - 1) % 10 | 0;
      else if (a = Math.ceil((s + 1) / ae), f = d.length, a >= f)
        if (n) {
          for (; f++ <= a; )
            d.push(0);
          u = l = 0, i = 1, s %= ae, c = s - ae + 1;
        } else
          break e;
      else {
        for (u = f = d[a], i = 1; f >= 10; f /= 10)
          i++;
        s %= ae, c = s - ae + i, l = c < 0 ? 0 : u / ze(10, i - c - 1) % 10 | 0;
      }
      if (n = n || r < 0 || d[a + 1] !== void 0 || (c < 0 ? u : u % ze(10, i - c - 1)), o = t < 4 ? (l || n) && (t == 0 || t == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (t == 4 || n || t == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (s > 0 ? c > 0 ? u / ze(10, i - c) : 0 : d[a - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), r < 1 || !d[0])
        return d.length = 0, o ? (r -= e.e + 1, d[0] = ze(10, (ae - r % ae) % ae), e.e = -r || 0) : d[0] = e.e = 0, e;
      if (s == 0 ? (d.length = a, f = 1, a--) : (d.length = a + 1, f = ze(10, ae - s), d[a] = c > 0 ? (u / ze(10, i - c) % ze(10, c) | 0) * f : 0), o)
        for (; ; )
          if (a == 0) {
            for (s = 1, c = d[0]; c >= 10; c /= 10)
              s++;
            for (c = d[0] += f, f = 1; c >= 10; c /= 10)
              f++;
            s != f && (e.e++, d[0] == dt && (d[0] = 1));
            break;
          } else {
            if (d[a] += f, d[a] != dt)
              break;
            d[a--] = 0, f = 1;
          }
      for (s = d.length; d[--s] === 0; )
        d.pop();
    }
  return le && (e.e > h.maxE ? (e.d = null, e.e = NaN) : e.e < h.minE && (e.e = 0, e.d = [0])), e;
}
function mt(e, r, t) {
  if (!e.isFinite())
    return Ti(e);
  var n, i = e.e, s = Ve(e.d), c = s.length;
  return r ? (t && (n = t - c) > 0 ? s = s.charAt(0) + "." + s.slice(1) + At(n) : c > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (s = "0." + At(-i - 1) + s, t && (n = t - c) > 0 && (s += At(n))) : i >= c ? (s += At(i + 1 - c), t && (n = t - i - 1) > 0 && (s = s + "." + At(n))) : ((n = i + 1) < c && (s = s.slice(0, n) + "." + s.slice(n)), t && (n = t - c) > 0 && (i + 1 === c && (s += "."), s += At(n))), s;
}
function ln(e, r) {
  var t = e[0];
  for (r *= ae; t >= 10; t /= 10)
    r++;
  return r;
}
function on(e, r, t) {
  if (r > $a)
    throw le = !0, t && (e.precision = t), Error(Bi);
  return se(new e(nn), r, 1, !0);
}
function lt(e, r, t) {
  if (r > Mn)
    throw Error(Bi);
  return se(new e(sn), r, t, !0);
}
function Li(e) {
  var r = e.length - 1, t = r * ae + 1;
  if (r = e[r], r) {
    for (; r % 10 == 0; r /= 10)
      t--;
    for (r = e[0]; r >= 10; r /= 10)
      t++;
  }
  return t;
}
function At(e) {
  for (var r = ""; e--; )
    r += "0";
  return r;
}
function Ni(e, r, t, n) {
  var i, s = new e(1), c = Math.ceil(n / ae + 4);
  for (le = !1; ; ) {
    if (t % 2 && (s = s.times(r), Q0(s.d, c) && (i = !0)), t = Ye(t / 2), t === 0) {
      t = s.d.length - 1, i && s.d[t] === 0 && ++s.d[t];
      break;
    }
    r = r.times(r), Q0(r.d, c);
  }
  return le = !0, s;
}
function j0(e) {
  return e.d[e.d.length - 1] & 1;
}
function Di(e, r, t) {
  for (var n, i = new e(r[0]), s = 0; ++s < r.length; )
    if (n = new e(r[s]), n.s)
      i[t](n) && (i = n);
    else {
      i = n;
      break;
    }
  return i;
}
function Hn(e, r) {
  var t, n, i, s, c, f, l, o = 0, u = 0, d = 0, a = e.constructor, h = a.rounding, b = a.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new a(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (r == null ? (le = !1, l = b) : l = r, f = new a(0.03125); e.e > -2; )
    e = e.times(f), d += 5;
  for (n = Math.log(ze(2, d)) / Math.LN10 * 2 + 5 | 0, l += n, t = s = c = new a(1), a.precision = l; ; ) {
    if (s = se(s.times(e), l, 1), t = t.times(++u), f = c.plus(ke(s, t, l, 1)), Ve(f.d).slice(0, l) === Ve(c.d).slice(0, l)) {
      for (i = d; i--; )
        c = se(c.times(c), l, 1);
      if (r == null)
        if (o < 3 && sr(c.d, l - n, h, o))
          a.precision = l += 10, t = s = f = new a(1), u = 0, o++;
        else
          return se(c, a.precision = b, h, le = !0);
      else
        return a.precision = b, c;
    }
    c = f;
  }
}
function Ot(e, r) {
  var t, n, i, s, c, f, l, o, u, d, a, h = 1, b = 10, v = e, _ = v.d, O = v.constructor, w = O.rounding, p = O.precision;
  if (v.s < 0 || !_ || !_[0] || !v.e && _[0] == 1 && _.length == 1)
    return new O(_ && !_[0] ? -1 / 0 : v.s != 1 ? NaN : _ ? 0 : v);
  if (r == null ? (le = !1, u = p) : u = r, O.precision = u += b, t = Ve(_), n = t.charAt(0), Math.abs(s = v.e) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && t.charAt(1) > 3; )
      v = v.times(e), t = Ve(v.d), n = t.charAt(0), h++;
    s = v.e, n > 1 ? (v = new O("0." + t), s++) : v = new O(n + "." + t.slice(1));
  } else
    return o = on(O, u + 2, p).times(s + ""), v = Ot(new O(n + "." + t.slice(1)), u - b).plus(o), O.precision = p, r == null ? se(v, p, w, le = !0) : v;
  for (d = v, l = c = v = ke(v.minus(1), v.plus(1), u, 1), a = se(v.times(v), u, 1), i = 3; ; ) {
    if (c = se(c.times(a), u, 1), o = l.plus(ke(c, new O(i), u, 1)), Ve(o.d).slice(0, u) === Ve(l.d).slice(0, u))
      if (l = l.times(2), s !== 0 && (l = l.plus(on(O, u + 2, p).times(s + ""))), l = ke(l, new O(h), u, 1), r == null)
        if (sr(l.d, u - b, w, f))
          O.precision = u += b, o = c = v = ke(d.minus(1), d.plus(1), u, 1), a = se(v.times(v), u, 1), i = f = 1;
        else
          return se(l, O.precision = p, w, le = !0);
      else
        return O.precision = p, l;
    l = o, i += 2;
  }
}
function Ti(e) {
  return String(e.s * e.s / 0);
}
function zn(e, r) {
  var t, n, i;
  for ((t = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (n = r.search(/e/i)) > 0 ? (t < 0 && (t = n), t += +r.slice(n + 1), r = r.substring(0, n)) : t < 0 && (t = r.length), n = 0; r.charCodeAt(n) === 48; n++)
    ;
  for (i = r.length; r.charCodeAt(i - 1) === 48; --i)
    ;
  if (r = r.slice(n, i), r) {
    if (i -= n, e.e = t = t - n - 1, e.d = [], n = (t + 1) % ae, t < 0 && (n += ae), n < i) {
      for (n && e.d.push(+r.slice(0, n)), i -= ae; n < i; )
        e.d.push(+r.slice(n, n += ae));
      r = r.slice(n), n = ae - r.length;
    } else
      n -= i;
    for (; n--; )
      r += "0";
    e.d.push(+r), le && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function Fa(e, r) {
  var t, n, i, s, c, f, l, o, u;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), Oi.test(r))
      return zn(e, r);
  } else if (r === "Infinity" || r === "NaN")
    return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Ma.test(r))
    t = 16, r = r.toLowerCase();
  else if (Ia.test(r))
    t = 2;
  else if (Ha.test(r))
    t = 8;
  else
    throw Error(Lt + r);
  for (s = r.search(/p/i), s > 0 ? (l = +r.slice(s + 1), r = r.substring(2, s)) : r = r.slice(2), s = r.indexOf("."), c = s >= 0, n = e.constructor, c && (r = r.replace(".", ""), f = r.length, s = f - s, i = Ni(n, new n(t), s, s * 2)), o = mr(r, t, dt), u = o.length - 1, s = u; o[s] === 0; --s)
    o.pop();
  return s < 0 ? new n(e.s * 0) : (e.e = ln(o, u), e.d = o, le = !1, c && (e = ke(e, i, f * 4)), l && (e = e.times(Math.abs(l) < 54 ? ze(2, l) : or.pow(2, l))), le = !0, e);
}
function Ua(e, r) {
  var t, n = r.d.length;
  if (n < 3)
    return r.isZero() ? r : Wt(e, 2, r, r);
  t = 1.4 * Math.sqrt(n), t = t > 16 ? 16 : t | 0, r = r.times(1 / dn(5, t)), r = Wt(e, 2, r, r);
  for (var i, s = new e(5), c = new e(16), f = new e(20); t--; )
    i = r.times(r), r = r.times(s.plus(i.times(c.times(i).minus(f))));
  return r;
}
function Wt(e, r, t, n, i) {
  var s, c, f, l, o = e.precision, u = Math.ceil(o / ae);
  for (le = !1, l = t.times(t), f = new e(n); ; ) {
    if (c = ke(f.times(l), new e(r++ * r++), o, 1), f = i ? n.plus(c) : n.minus(c), n = ke(c.times(l), new e(r++ * r++), o, 1), c = f.plus(n), c.d[u] !== void 0) {
      for (s = u; c.d[s] === f.d[s] && s--; )
        ;
      if (s == -1)
        break;
    }
    s = f, f = n, n = c, c = s;
  }
  return le = !0, c.d.length = u + 1, c;
}
function dn(e, r) {
  for (var t = e; --r; )
    t *= e;
  return t;
}
function Pi(e, r) {
  var t, n = r.s < 0, i = lt(e, e.precision, 1), s = i.times(0.5);
  if (r = r.abs(), r.lte(s))
    return St = n ? 4 : 1, r;
  if (t = r.divToInt(i), t.isZero())
    St = n ? 3 : 2;
  else {
    if (r = r.minus(t.times(i)), r.lte(s))
      return St = j0(t) ? n ? 2 : 3 : n ? 4 : 1, r;
    St = j0(t) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return r.minus(i).abs();
}
function Gn(e, r, t, n) {
  var i, s, c, f, l, o, u, d, a, h = e.constructor, b = t !== void 0;
  if (b ? (je(t, 1, Nt), n === void 0 ? n = h.rounding : je(n, 0, 8)) : (t = h.precision, n = h.rounding), !e.isFinite())
    u = Ti(e);
  else {
    for (u = mt(e), c = u.indexOf("."), b ? (i = 2, r == 16 ? t = t * 4 - 3 : r == 8 && (t = t * 3 - 2)) : i = r, c >= 0 && (u = u.replace(".", ""), a = new h(1), a.e = u.length - c, a.d = mr(mt(a), 10, i), a.e = a.d.length), d = mr(u, 10, i), s = l = d.length; d[--l] == 0; )
      d.pop();
    if (!d[0])
      u = b ? "0p+0" : "0";
    else {
      if (c < 0 ? s-- : (e = new h(e), e.d = d, e.e = s, e = ke(e, a, t, n, 0, i), d = e.d, s = e.e, o = Si), c = d[t], f = i / 2, o = o || d[t + 1] !== void 0, o = n < 4 ? (c !== void 0 || o) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : c > f || c === f && (n === 4 || o || n === 6 && d[t - 1] & 1 || n === (e.s < 0 ? 8 : 7)), d.length = t, o)
        for (; ++d[--t] > i - 1; )
          d[t] = 0, t || (++s, d.unshift(1));
      for (l = d.length; !d[l - 1]; --l)
        ;
      for (c = 0, u = ""; c < l; c++)
        u += Pn.charAt(d[c]);
      if (b) {
        if (l > 1)
          if (r == 16 || r == 8) {
            for (c = r == 16 ? 4 : 3, --l; l % c; l++)
              u += "0";
            for (d = mr(u, i, r), l = d.length; !d[l - 1]; --l)
              ;
            for (c = 1, u = "1."; c < l; c++)
              u += Pn.charAt(d[c]);
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
    u = (r == 16 ? "0x" : r == 2 ? "0b" : r == 8 ? "0o" : "") + u;
  }
  return e.s < 0 ? "-" + u : u;
}
function Q0(e, r) {
  if (e.length > r)
    return e.length = r, !0;
}
function Wa(e) {
  return new this(e).abs();
}
function Va(e) {
  return new this(e).acos();
}
function Ya(e) {
  return new this(e).acosh();
}
function Ka(e, r) {
  return new this(e).plus(r);
}
function Ga(e) {
  return new this(e).asin();
}
function Za(e) {
  return new this(e).asinh();
}
function Xa(e) {
  return new this(e).atan();
}
function ja(e) {
  return new this(e).atanh();
}
function Qa(e, r) {
  e = new this(e), r = new this(r);
  var t, n = this.precision, i = this.rounding, s = n + 4;
  return !e.s || !r.s ? t = new this(NaN) : !e.d && !r.d ? (t = lt(this, s, 1).times(r.s > 0 ? 0.25 : 0.75), t.s = e.s) : !r.d || e.isZero() ? (t = r.s < 0 ? lt(this, n, i) : new this(0), t.s = e.s) : !e.d || r.isZero() ? (t = lt(this, s, 1).times(0.5), t.s = e.s) : r.s < 0 ? (this.precision = s, this.rounding = 1, t = this.atan(ke(e, r, s, 1)), r = lt(this, s, 1), this.precision = n, this.rounding = i, t = e.s < 0 ? t.minus(r) : t.plus(r)) : t = this.atan(ke(e, r, s, 1)), t;
}
function Ja(e) {
  return new this(e).cbrt();
}
function ec(e) {
  return se(e = new this(e), e.e + 1, 2);
}
function tc(e, r, t) {
  return new this(e).clamp(r, t);
}
function rc(e) {
  if (!e || typeof e != "object")
    throw Error(un + "Object expected");
  var r, t, n, i = e.defaults === !0, s = [
    "precision",
    1,
    Nt,
    "rounding",
    0,
    8,
    "toExpNeg",
    -qt,
    0,
    "toExpPos",
    0,
    qt,
    "maxE",
    0,
    qt,
    "minE",
    -qt,
    0,
    "modulo",
    0,
    9
  ];
  for (r = 0; r < s.length; r += 3)
    if (t = s[r], i && (this[t] = In[t]), (n = e[t]) !== void 0)
      if (Ye(n) === n && n >= s[r + 1] && n <= s[r + 2])
        this[t] = n;
      else
        throw Error(Lt + t + ": " + n);
  if (t = "crypto", i && (this[t] = In[t]), (n = e[t]) !== void 0)
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[t] = !0;
        else
          throw Error(Ai);
      else
        this[t] = !1;
    else
      throw Error(Lt + t + ": " + n);
  return this;
}
function nc(e) {
  return new this(e).cos();
}
function ic(e) {
  return new this(e).cosh();
}
function Ii(e) {
  var r, t, n;
  function i(s) {
    var c, f, l, o = this;
    if (!(o instanceof i))
      return new i(s);
    if (o.constructor = i, J0(s)) {
      o.s = s.s, le ? !s.d || s.e > i.maxE ? (o.e = NaN, o.d = null) : s.e < i.minE ? (o.e = 0, o.d = [0]) : (o.e = s.e, o.d = s.d.slice()) : (o.e = s.e, o.d = s.d ? s.d.slice() : s.d);
      return;
    }
    if (l = typeof s, l === "number") {
      if (s === 0) {
        o.s = 1 / s < 0 ? -1 : 1, o.e = 0, o.d = [0];
        return;
      }
      if (s < 0 ? (s = -s, o.s = -1) : o.s = 1, s === ~~s && s < 1e7) {
        for (c = 0, f = s; f >= 10; f /= 10)
          c++;
        le ? c > i.maxE ? (o.e = NaN, o.d = null) : c < i.minE ? (o.e = 0, o.d = [0]) : (o.e = c, o.d = [s]) : (o.e = c, o.d = [s]);
        return;
      } else if (s * 0 !== 0) {
        s || (o.s = NaN), o.e = NaN, o.d = null;
        return;
      }
      return zn(o, s.toString());
    } else if (l !== "string")
      throw Error(Lt + s);
    return (f = s.charCodeAt(0)) === 45 ? (s = s.slice(1), o.s = -1) : (f === 43 && (s = s.slice(1)), o.s = 1), Oi.test(s) ? zn(o, s) : Fa(o, s);
  }
  if (i.prototype = Y, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = rc, i.clone = Ii, i.isDecimal = J0, i.abs = Wa, i.acos = Va, i.acosh = Ya, i.add = Ka, i.asin = Ga, i.asinh = Za, i.atan = Xa, i.atanh = ja, i.atan2 = Qa, i.cbrt = Ja, i.ceil = ec, i.clamp = tc, i.cos = nc, i.cosh = ic, i.div = sc, i.exp = oc, i.floor = ac, i.hypot = cc, i.ln = fc, i.log = uc, i.log10 = dc, i.log2 = lc, i.max = hc, i.min = vc, i.mod = pc, i.mul = xc, i.pow = bc, i.random = gc, i.round = mc, i.sign = yc, i.sin = _c, i.sinh = wc, i.sqrt = Ec, i.sub = kc, i.sum = Cc, i.tan = Sc, i.tanh = Bc, i.trunc = Ac, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < n.length; )
      e.hasOwnProperty(t = n[r++]) || (e[t] = this[t]);
  return i.config(e), i;
}
function sc(e, r) {
  return new this(e).div(r);
}
function oc(e) {
  return new this(e).exp();
}
function ac(e) {
  return se(e = new this(e), e.e + 1, 3);
}
function cc() {
  var e, r, t = new this(0);
  for (le = !1, e = 0; e < arguments.length; )
    if (r = new this(arguments[e++]), r.d)
      t.d && (t = t.plus(r.times(r)));
    else {
      if (r.s)
        return le = !0, new this(1 / 0);
      t = r;
    }
  return le = !0, t.sqrt();
}
function J0(e) {
  return e instanceof or || e && e.toStringTag === Ri || !1;
}
function fc(e) {
  return new this(e).ln();
}
function uc(e, r) {
  return new this(e).log(r);
}
function lc(e) {
  return new this(e).log(2);
}
function dc(e) {
  return new this(e).log(10);
}
function hc() {
  return Di(this, arguments, "lt");
}
function vc() {
  return Di(this, arguments, "gt");
}
function pc(e, r) {
  return new this(e).mod(r);
}
function xc(e, r) {
  return new this(e).mul(r);
}
function bc(e, r) {
  return new this(e).pow(r);
}
function gc(e) {
  var r, t, n, i, s = 0, c = new this(1), f = [];
  if (e === void 0 ? e = this.precision : je(e, 1, Nt), n = Math.ceil(e / ae), this.crypto)
    if (crypto.getRandomValues)
      for (r = crypto.getRandomValues(new Uint32Array(n)); s < n; )
        i = r[s], i >= 429e7 ? r[s] = crypto.getRandomValues(new Uint32Array(1))[0] : f[s++] = i % 1e7;
    else if (crypto.randomBytes) {
      for (r = crypto.randomBytes(n *= 4); s < n; )
        i = r[s] + (r[s + 1] << 8) + (r[s + 2] << 16) + ((r[s + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(r, s) : (f.push(i % 1e7), s += 4);
      s = n / 4;
    } else
      throw Error(Ai);
  else
    for (; s < n; )
      f[s++] = Math.random() * 1e7 | 0;
  for (n = f[--s], e %= ae, n && e && (i = ze(10, ae - e), f[s] = (n / i | 0) * i); f[s] === 0; s--)
    f.pop();
  if (s < 0)
    t = 0, f = [0];
  else {
    for (t = -1; f[0] === 0; t -= ae)
      f.shift();
    for (n = 1, i = f[0]; i >= 10; i /= 10)
      n++;
    n < ae && (t -= ae - n);
  }
  return c.e = t, c.d = f, c;
}
function mc(e) {
  return se(e = new this(e), e.e + 1, this.rounding);
}
function yc(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function _c(e) {
  return new this(e).sin();
}
function wc(e) {
  return new this(e).sinh();
}
function Ec(e) {
  return new this(e).sqrt();
}
function kc(e, r) {
  return new this(e).sub(r);
}
function Cc() {
  var e = 0, r = arguments, t = new this(r[e]);
  for (le = !1; t.s && ++e < r.length; )
    t = t.plus(r[e]);
  return le = !0, se(t, this.precision, this.rounding);
}
function Sc(e) {
  return new this(e).tan();
}
function Bc(e) {
  return new this(e).tanh();
}
function Ac(e) {
  return se(e = new this(e), e.e + 1, 1);
}
Y[Symbol.for("nodejs.util.inspect.custom")] = Y.toString;
Y[Symbol.toStringTag] = "Decimal";
var or = Y.constructor = Ii(In);
nn = new or(nn);
sn = new or(sn);
var ei = {}, Rc = {
  get exports() {
    return ei;
  },
  set exports(e) {
    ei = e;
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
    var t = t || {}, n = document.querySelectorAll.bind(document), i = Object.prototype.toString, s = "ontouchstart" in window;
    function c(p) {
      return p !== null && p === p.window;
    }
    function f(p) {
      return c(p) ? p : p.nodeType === 9 && p.defaultView;
    }
    function l(p) {
      var g = typeof p;
      return g === "function" || g === "object" && !!p;
    }
    function o(p) {
      return l(p) && p.nodeType > 0;
    }
    function u(p) {
      var g = i.call(p);
      return g === "[object String]" ? n(p) : l(p) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(g) && p.hasOwnProperty("length") ? p : o(p) ? [p] : [];
    }
    function d(p) {
      var g, m, k = { top: 0, left: 0 }, E = p && p.ownerDocument;
      return g = E.documentElement, typeof p.getBoundingClientRect < "u" && (k = p.getBoundingClientRect()), m = f(E), {
        top: k.top + m.pageYOffset - g.clientTop,
        left: k.left + m.pageXOffset - g.clientLeft
      };
    }
    function a(p) {
      var g = "";
      for (var m in p)
        p.hasOwnProperty(m) && (g += m + ":" + p[m] + ";");
      return g;
    }
    var h = {
      // Effect duration
      duration: 750,
      // Effect delay (check for scroll before showing effect)
      delay: 200,
      show: function(p, g, m) {
        if (p.button === 2)
          return !1;
        g = g || this;
        var k = document.createElement("div");
        k.className = "waves-ripple waves-rippling", g.appendChild(k);
        var E = d(g), R = 0, I = 0;
        "touches" in p && p.touches.length ? (R = p.touches[0].pageY - E.top, I = p.touches[0].pageX - E.left) : (R = p.pageY - E.top, I = p.pageX - E.left), I = I >= 0 ? I : 0, R = R >= 0 ? R : 0;
        var C = "scale(" + g.clientWidth / 100 * 3 + ")", B = "translate(0,0)";
        m && (B = "translate(" + m.x + "px, " + m.y + "px)"), k.setAttribute("data-hold", Date.now()), k.setAttribute("data-x", I), k.setAttribute("data-y", R), k.setAttribute("data-scale", C), k.setAttribute("data-translate", B);
        var T = {
          top: R + "px",
          left: I + "px"
        };
        k.classList.add("waves-notransition"), k.setAttribute("style", a(T)), k.classList.remove("waves-notransition"), T["-webkit-transform"] = C + " " + B, T["-moz-transform"] = C + " " + B, T["-ms-transform"] = C + " " + B, T["-o-transform"] = C + " " + B, T.transform = C + " " + B, T.opacity = "1";
        var D = p.type === "mousemove" ? 2500 : h.duration;
        T["-webkit-transition-duration"] = D + "ms", T["-moz-transition-duration"] = D + "ms", T["-o-transition-duration"] = D + "ms", T["transition-duration"] = D + "ms", k.setAttribute("style", a(T));
      },
      hide: function(p, g) {
        g = g || this;
        for (var m = g.getElementsByClassName("waves-rippling"), k = 0, E = m.length; k < E; k++)
          v(p, g, m[k]);
        s && (g.removeEventListener("touchend", h.hide), g.removeEventListener("touchcancel", h.hide)), g.removeEventListener("mouseup", h.hide), g.removeEventListener("mouseleave", h.hide);
      }
    }, b = {
      // Wrap <input> tag so it can perform the effect
      input: function(p) {
        var g = p.parentNode;
        if (!(g.tagName.toLowerCase() === "i" && g.classList.contains("waves-effect"))) {
          var m = document.createElement("i");
          m.className = p.className + " waves-input-wrapper", p.className = "waves-button-input", g.replaceChild(m, p), m.appendChild(p);
          var k = window.getComputedStyle(p, null), E = k.color, R = k.backgroundColor;
          m.setAttribute("style", "color:" + E + ";background:" + R), p.setAttribute("style", "background-color:rgba(0,0,0,0);");
        }
      },
      // Wrap <img> tag so it can perform the effect
      img: function(p) {
        var g = p.parentNode;
        if (!(g.tagName.toLowerCase() === "i" && g.classList.contains("waves-effect"))) {
          var m = document.createElement("i");
          g.replaceChild(m, p), m.appendChild(p);
        }
      }
    };
    function v(p, g, m) {
      if (m) {
        m.classList.remove("waves-rippling");
        var k = m.getAttribute("data-x"), E = m.getAttribute("data-y"), R = m.getAttribute("data-scale"), I = m.getAttribute("data-translate"), C = Date.now() - Number(m.getAttribute("data-hold")), B = 350 - C;
        B < 0 && (B = 0), p.type === "mousemove" && (B = 150);
        var T = p.type === "mousemove" ? 2500 : h.duration;
        setTimeout(function() {
          var D = {
            top: E + "px",
            left: k + "px",
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
          m.setAttribute("style", a(D)), setTimeout(function() {
            try {
              g.removeChild(m);
            } catch {
              return !1;
            }
          }, T);
        }, B);
      }
    }
    var _ = {
      /* uses an integer rather than bool so there's no issues with
       * needing to clear timeouts if another touch event occurred
       * within the 500ms. Cannot mouseup between touchstart and
       * touchend, nor in the 500ms after touchend. */
      touches: 0,
      allowEvent: function(p) {
        var g = !0;
        return /^(mousedown|mousemove)$/.test(p.type) && _.touches && (g = !1), g;
      },
      registerEvent: function(p) {
        var g = p.type;
        g === "touchstart" ? _.touches += 1 : /^(touchend|touchcancel)$/.test(g) && setTimeout(function() {
          _.touches && (_.touches -= 1);
        }, 500);
      }
    };
    function O(p) {
      if (_.allowEvent(p) === !1)
        return null;
      for (var g = null, m = p.target || p.srcElement; m.parentElement; ) {
        if (!(m instanceof SVGElement) && m.classList.contains("waves-effect")) {
          g = m;
          break;
        }
        m = m.parentElement;
      }
      return g;
    }
    function w(p) {
      var g = O(p);
      if (g !== null) {
        if (g.disabled || g.getAttribute("disabled") || g.classList.contains("disabled"))
          return;
        if (_.registerEvent(p), p.type === "touchstart" && h.delay) {
          var m = !1, k = setTimeout(function() {
            k = null, h.show(p, g);
          }, h.delay), E = function(C) {
            k && (clearTimeout(k), k = null, h.show(p, g)), m || (m = !0, h.hide(C, g)), I();
          }, R = function(C) {
            k && (clearTimeout(k), k = null), E(C), I();
          };
          g.addEventListener("touchmove", R, !1), g.addEventListener("touchend", E, !1), g.addEventListener("touchcancel", E, !1);
          var I = function() {
            g.removeEventListener("touchmove", R), g.removeEventListener("touchend", E), g.removeEventListener("touchcancel", E);
          };
        } else
          h.show(p, g), s && (g.addEventListener("touchend", h.hide, !1), g.addEventListener("touchcancel", h.hide, !1)), g.addEventListener("mouseup", h.hide, !1), g.addEventListener("mouseleave", h.hide, !1);
      }
    }
    return t.init = function(p) {
      var g = document.body;
      p = p || {}, "duration" in p && (h.duration = p.duration), "delay" in p && (h.delay = p.delay), s && (g.addEventListener("touchstart", w, !1), g.addEventListener("touchcancel", _.registerEvent, !1), g.addEventListener("touchend", _.registerEvent, !1)), g.addEventListener("mousedown", w, !1);
    }, t.attach = function(p, g) {
      p = u(p), i.call(g) === "[object Array]" && (g = g.join(" ")), g = g ? " " + g : "";
      for (var m, k, E = 0, R = p.length; E < R; E++)
        m = p[E], k = m.tagName.toLowerCase(), ["input", "img"].indexOf(k) !== -1 && (b[k](m), m = m.parentElement), m.className.indexOf("waves-effect") === -1 && (m.className += " waves-effect" + g);
    }, t.ripple = function(p, g) {
      p = u(p);
      var m = p.length;
      if (g = g || {}, g.wait = g.wait || 0, g.position = g.position || null, m) {
        for (var k, E, R, I = {}, C = 0, B = {
          type: "mousedown",
          button: 1
        }, T = function($, H) {
          return function() {
            h.hide($, H);
          };
        }; C < m; C++)
          if (k = p[C], E = g.position || {
            x: k.clientWidth / 2,
            y: k.clientHeight / 2
          }, R = d(k), I.x = R.left + E.x, I.y = R.top + E.y, B.pageX = I.x, B.pageY = I.y, h.show(B, k), g.wait >= 0 && g.wait !== null) {
            var D = {
              type: "mouseup",
              button: 1
            };
            setTimeout(T(D, k), g.wait);
          }
      }
    }, t.calm = function(p) {
      p = u(p);
      for (var g = {
        type: "mouseup",
        button: 1
      }, m = 0, k = p.length; m < k; m++)
        h.hide(g, p[m]);
    }, t.displayEffect = function(p) {
      console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), t.init(p);
    }, t;
  });
})(Rc);
const ue = { lunarInfo: [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560], solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"], Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"], Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"], solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"], sTermInfo: ["9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722"], nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"], nStr2: ["初", "十", "廿", "卅"], nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"], lunarFestival: [{ month: "正", day: "初一", name: "春节" }, { month: "正", day: "十五", name: "元宵节" }, { month: "二", day: "初二", name: "龙抬头" }, { month: "五", day: "初五", name: "端午节" }, { month: "七", day: "初七", name: "七夕节" }, { month: "七", day: "十五", name: "中元节" }, { month: "八", day: "十五", name: "中秋节" }, { month: "九", day: "初九", name: "重阳节" }, { month: "腊", day: "除夕", name: "除夕" }], solarFestival: [{ month: 1, day: 1, name: "元旦节" }, { month: 3, day: 8, name: "妇女节" }, { month: 3, day: 12, name: "植树节" }, { month: 4, day: 5, name: "清明节" }, { month: 5, day: 1, name: "劳动节" }, { month: 5, day: 4, name: "青年节" }, { month: 6, day: 1, name: "儿童节" }, { month: 7, day: 1, name: "建党节" }, { month: 8, day: 1, name: "建军节" }, { month: 9, day: 10, name: "教师节" }, { month: 10, day: 1, name: "国庆节" }], lYearDays: function(e) {
  var r, t = 348;
  for (r = 32768; r > 8; r >>= 1)
    t += ue.lunarInfo[e - 1900] & r ? 1 : 0;
  return t + ue.leapDays(e);
}, leapMonth: function(e) {
  return 15 & ue.lunarInfo[e - 1900];
}, leapDays: function(e) {
  return ue.leapMonth(e) ? 65536 & ue.lunarInfo[e - 1900] ? 30 : 29 : 0;
}, monthDays: function(e, r) {
  return r > 12 || r < 1 ? -1 : ue.lunarInfo[e - 1900] & 65536 >> r ? 30 : 29;
}, solarDays: function(e, r) {
  if (r > 12 || r < 1)
    return -1;
  var t = r - 1;
  return t == 1 ? e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 29 : 28 : ue.solarMonth[t];
}, toGanZhiYear: function(e) {
  var r = (e - 3) % 10, t = (e - 3) % 12;
  return r == 0 && (r = 10), t == 0 && (t = 12), ue.Gan[r - 1] + ue.Zhi[t - 1];
}, toAstro: function(e, r) {
  return "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2 * e - (r < [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22][e - 1] ? 2 : 0), 2) + "座";
}, toGanZhi: function(e) {
  return ue.Gan[e % 10] + ue.Zhi[e % 12];
}, getTerm: function(e, r) {
  if (e < 1900 || e > 2100 || r < 1 || r > 24)
    return -1;
  var t = ue.sTermInfo[e - 1900], n = [parseInt("0x" + t.substr(0, 5)).toString(), parseInt("0x" + t.substr(5, 5)).toString(), parseInt("0x" + t.substr(10, 5)).toString(), parseInt("0x" + t.substr(15, 5)).toString(), parseInt("0x" + t.substr(20, 5)).toString(), parseInt("0x" + t.substr(25, 5)).toString()], i = [n[0].substr(0, 1), n[0].substr(1, 2), n[0].substr(3, 1), n[0].substr(4, 2), n[1].substr(0, 1), n[1].substr(1, 2), n[1].substr(3, 1), n[1].substr(4, 2), n[2].substr(0, 1), n[2].substr(1, 2), n[2].substr(3, 1), n[2].substr(4, 2), n[3].substr(0, 1), n[3].substr(1, 2), n[3].substr(3, 1), n[3].substr(4, 2), n[4].substr(0, 1), n[4].substr(1, 2), n[4].substr(3, 1), n[4].substr(4, 2), n[5].substr(0, 1), n[5].substr(1, 2), n[5].substr(3, 1), n[5].substr(4, 2)];
  return parseInt(i[r - 1]);
}, toChinaMonth: function(e) {
  if (e > 12 || e < 1)
    return -1;
  var r = ue.nStr3[e - 1];
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
      r = ue.nStr2[Math.floor(e / 10)], r += ue.nStr1[e % 10];
  }
  return r;
}, getAnimal: function(e) {
  return ue.Animals[(e - 4) % 12];
}, getFestival: (e, r, t, n) => {
  let i = null;
  const s = parseInt(e + "");
  return i = s ? ue.solarFestival.find((c) => c.month === s && c.day == r) : ue.lunarFestival.find((c) => `${c.month}月` === e && c.day === r), i;
}, solar2lunar: function(e, r, t) {
  if (e < 1900 || e > 2100 || e == 1900 && r == 1 && t < 31)
    return -1;
  if (e)
    n = new Date(e, parseInt(r + "") - 1, t);
  else
    var n = /* @__PURE__ */ new Date();
  var i, s = 0, c = (e = n.getFullYear(), r = n.getMonth() + 1, t = n.getDate(), (Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()) - Date.UTC(1900, 0, 31)) / 864e5);
  for (i = 1900; i < 2101 && c > 0; i++)
    c -= s = ue.lYearDays(i);
  c < 0 && (c += s, i--);
  var f = /* @__PURE__ */ new Date(), l = !1;
  f.getFullYear() == e && f.getMonth() + 1 == r && f.getDate() == t && (l = !0);
  var o = n.getDay(), u = ue.nStr1[o];
  o == 0 && (o = 7);
  var d = i, a = ue.leapMonth(i), h = !1;
  for (i = 1; i < 13 && c > 0; i++)
    a > 0 && i == a + 1 && h == 0 ? (--i, h = !0, s = ue.leapDays(d)) : s = ue.monthDays(d, i), h == 1 && i == a + 1 && (h = !1), c -= s;
  c == 0 && a > 0 && i == a + 1 && (h ? h = !1 : (h = !0, --i)), c < 0 && (c += s, --i);
  var b = i, v = c + 1, _ = r - 1, O = ue.toGanZhiYear(d), w = ue.getTerm(d, 2 * r - 1), p = ue.getTerm(d, 2 * r), g = ue.toGanZhi(12 * (e - 1900) + r + 11);
  t >= w && (g = ue.toGanZhi(12 * (e - 1900) + r + 12));
  var m = !1, k = null;
  w == t && (m = !0, k = ue.solarTerm[2 * r - 2]), p == t && (m = !0, k = ue.solarTerm[2 * r - 1]);
  var E = Date.UTC(e, _, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, R = ue.toGanZhi(E + t - 1), I = ue.toAstro(r, t);
  const C = ue.toChinaMonth(b), B = ue.toChinaDay(v);
  return { lYear: d, lMonth: b, lDay: v, Animal: ue.getAnimal(d), IMonthCn: (h ? "闰" : "") + C, IDayCn: B, cYear: e, cMonth: r, cDay: t, gzYear: O, gzMonth: g, gzDay: R, isToday: l, isLeap: h, nWeek: o, ncWeek: "星期" + u, isTerm: m, Term: k, astro: I, festcn: ue.getFestival(C, B, e, r), fest: ue.getFestival(r, t, e) };
}, lunar2solar: function(e, r, t, n = !0) {
  n = !!n;
  var i = ue.leapMonth(e);
  if (ue.leapDays(e), n && i != r || e == 2100 && r == 12 && t > 1 || e == 1900 && r == 1 && t < 31)
    return -1;
  var s = ue.monthDays(e, r), c = s;
  if (n && (c = ue.leapDays(e)), e < 1900 || e > 2100 || t > c)
    return -1;
  for (var f = 0, l = 1900; l < e; l++)
    f += ue.lYearDays(l);
  var o = 0, u = !1;
  for (l = 1; l < r; l++)
    o = ue.leapMonth(e), u || o <= l && o > 0 && (f += ue.leapDays(e), u = !0), f += ue.monthDays(e, l);
  n && (f += s);
  var d = Date.UTC(1900, 1, 30, 0, 0, 0), a = new Date(864e5 * (f + t - 31) + d), h = a.getUTCFullYear(), b = a.getUTCMonth() + 1, v = a.getUTCDate();
  return ue.solar2lunar(h, b, v);
} };
ue.lunar2solar;
for (let e = 0; e <= 15; e++)
  e.toString(16);
let Oc = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof globalThis == "object" && globalThis.globalThis === globalThis ? globalThis : void 0;
Oc.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && /Safari/.test(navigator.userAgent);
window.socketMap = /* @__PURE__ */ new Map();
or.set({ precision: 14 });
var Lc = Object.freeze({ __proto__: null, debounce: function(e, r) {
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
const xt = ps, yt = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, i] of r)
    t[n] = i;
  return t;
}, Nc = {}, Dc = {
  t: "1672196428320",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3618",
  width: "200",
  height: "200"
}, Tc = /* @__PURE__ */ xe("path", {
  d: "M384 250V134a70 70 0 0 0-70-70H134a70 70 0 0 0-70 70v116a70 70 0 0 0 70 70h180a70 70 0 0 0 70-70z m-80-10H144v-96h160zM890 704H710a70 70 0 0 0-70 70v116a70 70 0 0 0 70 70h180a70 70 0 0 0 70-70V774a70 70 0 0 0-70-70z m-10 176H720v-96h160zM890 384H710a70 70 0 0 0-70 70v116a70 70 0 0 0 70 70h180a70 70 0 0 0 70-70V454a70 70 0 0 0-70-70z m-10 176H720v-96h160zM536 504H264v-80a40 40 0 0 0-40-40 40 40 0 0 0-40 40v432a40 40 0 0 0 40 40h312a40 40 0 0 0 40-40 40 40 0 0 0-40-40H264V584h272a40 40 0 0 0 40-40 40 40 0 0 0-40-40z",
  "p-id": "3619",
  "data-spm-anchor-id": "a313x.7781069.0.i2",
  class: "selected"
}, null, -1), Pc = [
  Tc
];
function Ic(e, r) {
  return te(), he("svg", Dc, Pc);
}
const An = /* @__PURE__ */ yt(Nc, [["render", Ic]]), Mc = {}, Hc = {
  t: "1672197639916",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "19012"
}, zc = /* @__PURE__ */ xe("path", {
  d: "M863.1 255.1H551.3c-25.1 0-49.2-9.8-67.1-27.4l-75-73.4c-17.9-17.5-42-27.4-67.1-27.4H161c-53 0-96 43-96 96v512.8c0 53 43 96 96 96h702c53 0 96-43 96-96V351.1c0.1-53-42.9-96-95.9-96z m-31 161.1c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32v-0.1c0-17.7 14.3-32 32-32h576.1c17.7 0 32 14.3 32 32v0.1z",
  "p-id": "19013"
}, null, -1), $c = [
  zc
];
function qc(e, r) {
  return te(), he("svg", Hc, $c);
}
const Jt = /* @__PURE__ */ yt(Mc, [["render", qc]]), Fc = {}, Uc = {
  t: "1672197222005",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "14755"
}, Wc = /* @__PURE__ */ xe("path", {
  d: "M959.68 921.024c-15.232-181.696-139.648-331.968-307.84-386.624 70.464-45.632 117.248-124.48 117.248-214.464C769.152 178.624 654.208 64 512.512 64 370.752 64 255.808 178.624 255.808 319.936c0 89.984 46.784 168.832 117.248 214.528-168.192 54.592-292.544 204.864-307.84 386.56-0.192 3.456-0.64 5.44 0 10.176C66.496 947.2 80.64 960 96.704 960c17.92 0 32.064-14.656 32.064-32 16.704-197.76 182.272-351.936 383.744-351.936 201.408 0 366.976 154.176 383.68 351.936 0 17.344 14.144 32 32.064 32 16.064 0 30.208-12.8 31.424-28.8C960.32 926.464 959.936 924.416 959.68 921.024zM320 319.936C320 213.952 406.208 128 512.512 128s192.448 85.952 192.448 191.936c0 106.048-86.144 192-192.448 192S320 425.984 320 319.936z",
  "p-id": "14756"
}, null, -1), Vc = [
  Wc
];
function Yc(e, r) {
  return te(), he("svg", Uc, Vc);
}
const xr = /* @__PURE__ */ yt(Fc, [["render", Yc]]), Kc = {}, Gc = {
  t: "1672194715727",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  "p-id": "2667"
}, Zc = /* @__PURE__ */ xe("path", {
  d: "M809.246403 771.926938 777.737782 803.458071 924.965961 950.667831 956.476629 919.157163Z",
  fill: "#5D5D5D",
  "p-id": "2668"
}, null, -1), Xc = /* @__PURE__ */ xe("path", {
  d: "M454.878536 70.285786C239.51556 70.285786 64.93236 244.847497 64.93236 460.231963c0 215.341486 174.583201 389.945153 389.945153 389.945153 215.362976 0 389.9472-174.603667 389.9472-389.945153C844.825736 244.847497 670.241512 70.285786 454.878536 70.285786zM454.878536 805.611108c-190.750415 0-345.381192-154.626683-345.381192-345.379145 0-190.751439 154.629753-345.380168 345.381192-345.380168 190.752462 0 345.382215 154.62873 345.382215 345.380168C800.259728 650.983401 645.630998 805.611108 454.878536 805.611108z",
  fill: "#5D5D5D",
  "p-id": "2669"
}, null, -1), jc = [
  Zc,
  Xc
];
function Qc(e, r) {
  return te(), he("svg", Gc, jc);
}
const Jc = /* @__PURE__ */ yt(Kc, [["render", Qc]]), ef = {}, tf = {
  t: "1672212880079",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "19924"
}, rf = /* @__PURE__ */ xe("path", {
  d: "M806.4 263.2l-45.6-45.6L512 467.2 263.2 217.6l-45.6 45.6L467.2 512 217.6 760.8l45.6 45.6L512 557.6l248.8 248.8 45.6-45.6L557.6 512z",
  "p-id": "19925"
}, null, -1), nf = [
  rf
];
function sf(e, r) {
  return te(), he("svg", tf, nf);
}
const of = /* @__PURE__ */ yt(ef, [["render", sf]]), af = {}, cf = {
  t: "1672216076738",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "28376"
}, ff = /* @__PURE__ */ xe("path", {
  d: "M501.937582 545.097053c147.891962 0 268.231366-118.534055 268.223274-264.288929 0-145.746783-120.330301-264.28994-268.222263-264.28994-147.890951 0-268.221252 118.584625-268.221252 264.28994C233.71633 426.520519 354.046631 545.097053 501.937582 545.097053zM612.471463 570.546911 411.497184 570.546911c-186.760063 0-338.664249 149.569875-338.664249 333.472733l0 19.794109c0 96.139636 149.47278 96.139636 338.664249 96.139636l200.974278 0c181.747565 0 338.694591 0 338.694591-96.139636l0-19.794109C951.164031 720.158252 799.235571 570.546911 612.471463 570.546911z",
  "p-id": "28377"
}, null, -1), uf = [
  ff
];
function lf(e, r) {
  return te(), he("svg", cf, uf);
}
const Ft = /* @__PURE__ */ yt(af, [["render", lf]]), df = {}, hf = {
  t: "1680231254898",
  class: "icon",
  viewBox: "0 0 1154 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "9556"
}, vf = /* @__PURE__ */ xe("path", {
  d: "M1015.808 64.512q62.464 0 99.84 31.744t37.376 96.256l0 568.32q0 27.648-10.24 52.224t-28.16 43.008-41.984 29.184-50.688 10.752l-892.928 0q-26.624 0-50.176-10.24t-40.96-27.136-27.648-39.424-10.24-48.128l0-580.608q0-55.296 33.792-90.624t95.232-35.328l886.784 0zM287.744 253.952q-19.456 0-36.864 7.168t-30.72 19.968-20.992 30.72-7.68 38.4 7.68 37.888 20.992 30.72 30.72 20.992 36.864 7.68q21.504 0 39.424-7.68t30.72-20.992 20.48-30.72 7.68-37.888q0-41.984-27.648-69.12t-70.656-27.136zM448.512 608.256q0-19.456-7.68-37.376t-20.48-30.72-30.72-20.48-37.376-7.68l-128 0q-39.936 0-67.584 28.16t-27.648 68.096l0 4.096 0 92.16 319.488 0 0-92.16 0-4.096zM923.648 709.632q20.48 0 30.208-10.24t9.728-24.576-11.264-25.088-31.744-10.752l-305.152 0q-20.48 0-30.72 10.752t-10.24 25.088 10.24 24.576 29.696 10.24l309.248 0zM924.672 577.536q20.48 0 29.696-10.24t9.216-24.576q0-15.36-8.704-25.6t-29.184-10.24l-313.344 0q-20.48 0-29.696 10.24t-9.216 25.6q0 14.336 8.704 24.576t29.184 10.24l313.344 0zM925.696 447.488q15.36 0 26.624-10.24t11.264-24.576-11.264-23.04-26.624-8.704l-207.872 0q-15.36 0-26.112 8.704t-10.752 23.04 10.752 24.576 26.112 10.24l207.872 0z",
  "p-id": "9557"
}, null, -1), pf = [
  vf
];
function xf(e, r) {
  return te(), he("svg", hf, pf);
}
const $n = /* @__PURE__ */ yt(df, [["render", xf]]), bf = {}, gf = {
  t: "1698719360533",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "15490",
  width: "200",
  height: "200"
}, mf = /* @__PURE__ */ xe("path", {
  d: "M960 704h-63.616v-167.392a32 32 0 0 0-32-32H544V416h160a32 32 0 0 0 32-32V96a32 32 0 0 0-32-32H320a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h160v88.608H161.984a32 32 0 0 0-32 31.968L129.792 704H64a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-192a32 32 0 0 0-32-32H193.792l0.16-135.392H480V704h-64a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-192a32 32 0 0 0-32-32h-64v-135.392h288.384V704H768a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-192a32 32 0 0 0-32-32zM352 128h320v224H352V128zM224 896H96v-128h128v128z m352 0h-128v-128h128v128z m352 0h-128v-128h128v128z",
  "p-id": "15491"
}, null, -1), yf = [
  mf
];
function _f(e, r) {
  return te(), he("svg", gf, yf);
}
const er = /* @__PURE__ */ yt(bf, [["render", _f]]), Mi = {
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
}, wf = { class: "left-pick-list" }, Ef = { class: "post-view-list" }, kf = { class: "ik-picker-single" }, Cf = /* @__PURE__ */ qn({
  __name: "PostList",
  props: Mi,
  emits: ["change", "check"],
  setup(e, { emit: r }) {
    var u, d;
    const t = e, n = Pe(() => {
      var a, h;
      return ((a = t.handList) == null ? void 0 : a.length) === ((h = t.list) == null ? void 0 : h.length);
    }), i = Pe(() => {
      var b, v, _, O;
      const a = (b = t.handList) == null ? void 0 : b.length, h = (v = t.list) == null ? void 0 : v.length;
      return t.multiple ? s.value = t.handList.map((w) => w[t.fixPropOpt.id]) : c.value = (O = (_ = t.handList) == null ? void 0 : _[0]) == null ? void 0 : O[t.fixPropOpt.id], a > 0 && a < h;
    }), s = Le(
      t.handList.map((a) => a[t.fixPropOpt.id])
    ), c = Le((d = (u = t.handList) == null ? void 0 : u[0]) == null ? void 0 : d[t.fixPropOpt.id]), f = (a) => {
      const h = a ? t.list.map((b) => b[t.fixPropOpt.id]) : [];
      r("change", h, a ? t.list : []);
    }, l = (a) => {
      r("change", a, t.list);
    }, o = (a) => {
      r("change", a, t.list);
    };
    return (a, h) => (te(), he("div", wf, [
      a.multiple ? (te(), be(oe(Rt), {
        key: 0,
        modelValue: n.value,
        "onUpdate:modelValue": h[0] || (h[0] = (b) => n.value = b),
        indeterminate: i.value,
        onChange: f
      }, {
        default: me(() => [
          nt("全选")
        ]),
        _: 1
      }, 8, ["modelValue", "indeterminate"])) : Oe("", !0),
      xe("ul", Ef, [
        a.multiple ? (te(), be(oe(Fn), {
          key: 0,
          modelValue: s.value,
          "onUpdate:modelValue": h[1] || (h[1] = (b) => s.value = b),
          onChange: l
        }, {
          default: me(() => [
            (te(!0), he(it, null, pt(a.list, (b) => (te(), he("li", {
              key: b[t.fixPropOpt.id]
            }, [
              Be(oe(Rt), {
                label: b[t.fixPropOpt.id]
              }, {
                default: me(() => [
                  Be($n),
                  xe("p", null, Ze(b[t.fixPropOpt.name]), 1)
                ]),
                _: 2
              }, 1032, ["label"])
            ]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])) : (te(), be(oe(yr), {
          key: 1,
          isIndeterminate: i.value,
          modelValue: c.value,
          "onUpdate:modelValue": h[2] || (h[2] = (b) => c.value = b),
          onChange: o
        }, {
          default: me(() => [
            (te(!0), he(it, null, pt(a.list, (b) => (te(), he("li", {
              class: "w-full",
              key: b[t.fixPropOpt.id]
            }, [
              Be(oe(Un), {
                label: b[t.fixPropOpt.id]
              }, {
                default: me(() => [
                  xe("div", kf, [
                    Be($n),
                    xe("p", null, Ze(b[t.fixPropOpt.name]), 1)
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
const Sf = /* @__PURE__ */ yt(Cf, [["__scopeId", "data-v-c47c3e50"]]), Bf = { class: "left-pick-list" }, Af = { class: "role-view-list" }, Rf = ["title"], Of = { class: "ik-picker-single" }, Lf = ["title"], Nf = /* @__PURE__ */ qn({
  __name: "RoleList",
  props: Mi,
  emits: ["change", "check"],
  setup(e, { emit: r }) {
    var u, d;
    const t = e, n = Pe(() => {
      var a, h;
      return ((a = t.handList) == null ? void 0 : a.length) === ((h = t.list) == null ? void 0 : h.length);
    }), i = Pe(() => {
      var b, v, _, O;
      const a = (b = t.handList) == null ? void 0 : b.length, h = (v = t.list) == null ? void 0 : v.length;
      return t.multiple ? s.value = t.handList.map((w) => w[t.fixPropOpt.id]) : c.value = (O = (_ = t.handList) == null ? void 0 : _[0]) == null ? void 0 : O[t.fixPropOpt.id], a > 0 && a < h;
    }), s = Le(
      t.handList.map((a) => a[t.fixPropOpt.id])
    ), c = Le((d = (u = t.handList) == null ? void 0 : u[0]) == null ? void 0 : d[t.fixPropOpt.id]), f = (a) => {
      const h = a ? t.list.map((b) => b[t.fixPropOpt.id]) : [];
      r("change", h, a ? t.list : []);
    }, l = (a) => {
      r("change", a, t.list);
    }, o = (a) => {
      r("change", a, t.list);
    };
    return (a, h) => (te(), he("div", Bf, [
      a.multiple ? (te(), be(oe(Rt), {
        key: 0,
        modelValue: n.value,
        "onUpdate:modelValue": h[0] || (h[0] = (b) => n.value = b),
        indeterminate: i.value,
        onChange: f
      }, {
        default: me(() => [
          nt("全选")
        ]),
        _: 1
      }, 8, ["modelValue", "indeterminate"])) : Oe("", !0),
      xe("ul", Af, [
        a.multiple ? (te(), be(oe(Fn), {
          key: 0,
          modelValue: s.value,
          "onUpdate:modelValue": h[1] || (h[1] = (b) => s.value = b),
          onChange: l
        }, {
          default: me(() => [
            (te(!0), he(it, null, pt(a.list, (b) => (te(), he("li", {
              key: b[a.fixPropOpt.id]
            }, [
              Be(oe(Rt), {
                label: b[a.fixPropOpt.id],
                value: b[a.fixPropOpt.id],
                disabled: b.disabled
              }, {
                default: me(() => [
                  Be(Ft),
                  xe("p", {
                    title: b[a.fixPropOpt.name]
                  }, Ze(b[a.fixPropOpt.name]), 9, Rf)
                ]),
                _: 2
              }, 1032, ["label", "value", "disabled"])
            ]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])) : (te(), be(oe(yr), {
          key: 1,
          indeterminate: i.value,
          modelValue: c.value,
          "onUpdate:modelValue": h[2] || (h[2] = (b) => c.value = b),
          onChange: o
        }, {
          default: me(() => [
            (te(!0), he(it, null, pt(a.list, (b) => (te(), he("li", {
              class: "w-full",
              key: b[a.fixPropOpt.id]
            }, [
              Be(oe(Un), {
                label: b[a.fixPropOpt.id],
                value: b[a.fixPropOpt.id],
                disabled: b.disabled
              }, {
                default: me(() => [
                  xe("div", Of, [
                    Be(Ft),
                    xe("p", {
                      title: b[a.fixPropOpt.name]
                    }, Ze(b[a.fixPropOpt.name]), 9, Lf)
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
const Df = /* @__PURE__ */ yt(Nf, [["__scopeId", "data-v-a51e0920"]]);
var Qe = /* @__PURE__ */ ((e) => (e.org = "organization", e.dep = "dep", e.user = "user", e.role = "role", e.post = "post", e.dep_user = "dep_user", e))(Qe || {}), nr = /* @__PURE__ */ ((e) => (e.group = "group", e.role = "role", e.post = "post", e))(nr || {});
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
}, Tf = {
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
}, Pf = (e, r) => {
  const t = Le([]), n = async (s, c, f) => {
    var R, I;
    const { url: l, methods: o, headers: u, param: d } = e.value || {}, a = {
      parentOrgId: s,
      ...d || {},
      parentDepartmentId: c || "",
      name: f || ""
    }, h = await fetch(l, {
      method: o,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        ...u
      },
      body: JSON.stringify(a)
    }), { success: b, data: v } = await h.json();
    if (!b)
      return {
        depList: [],
        roleList: [],
        postList: [],
        userList: [],
        organizationList: [],
        rootOrganization: {},
        rootDepartment: {}
      };
    const { departments: _, roles: O, posts: w, users: p, organizations: g, rootOrganization: m, rootDepartment: k } = v, E = m || k;
    return t.value[0] = r.org ? {
      ...r.org,
      id: r.elementId,
      elementType: (I = (R = r.org) == null ? void 0 : R.elementType) == null ? void 0 : I.toLocaleUpperCase()
    } : {
      ...E,
      id: E.elementId
    }, {
      depList: xt.cloneDeep(_),
      roleList: xt.cloneDeep(O),
      postList: xt.cloneDeep(w),
      userList: xt.cloneDeep(p),
      organizationList: xt.cloneDeep(g),
      rootOrganization: m,
      rootDepartment: k
    };
  };
  return {
    handData: n,
    handSetChild: (s, c) => {
      n(s == null ? void 0 : s.elementId, c);
    },
    bannerList: t
  };
}, If = {
  shadow: "hover",
  class: "sel-list"
}, Mf = { key: 0 }, Hf = {
  key: 0,
  class: "check-all"
}, zf = {
  key: 0,
  class: "view-list"
}, $f = {
  key: 0,
  class: "filter-user"
}, qf = { class: "filter-user" }, Ff = {
  key: 2,
  class: "next-child"
}, Uf = { class: "filter-user" }, Wf = {
  key: 1,
  class: "filter-user"
}, Vf = {
  key: 2,
  class: "next-child"
}, Yf = { class: "text-over-flow" }, Kf = { class: "text-over-flow" }, Gf = { class: "text-over-flow" }, Zf = {
  key: 2,
  class: "next-child"
}, Xf = {
  key: 1,
  class: "empty"
}, jf = /* @__PURE__ */ xe("div", { class: "split-div" }, null, -1), Qf = { class: "choose-list" }, Jf = { class: "choose-item" }, eu = /* @__PURE__ */ xe("div", null, "已选", -1), tu = { class: "dialog-footer" }, ru = /* @__PURE__ */ qn({
  __name: "picker",
  props: Tf,
  emits: ["handChild", "update:show", "update:modelValue", "ok", "search"],
  setup(e, { expose: r, emit: t }) {
    const n = e;
    os((M) => ({
      "3e125c61": He.value
    }));
    const i = Le(""), s = Le(""), c = Le(""), f = Le([]), l = Le([]), o = Le([]), u = Le([]), d = Le([]), a = Le(!1), h = n.imageBaseUrl || `${location.origin}/server/oss/download?fileUrl=`, b = (M) => M ? M.startsWith("http") ? M : `${h}${M}` : "";
    Tt(() => n.api, () => {
      n.show && C("");
    });
    const v = Pe(() => ({
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
    })), O = Le([]), w = Pf(as(n, "api"), n), p = w.handData, g = w.bannerList;
    n.immediate && p(c.value, s.value, i.value);
    const m = (M) => (M.forEach((X) => {
      var P, ie;
      X.disabled = ((ie = (P = n.modelValue) == null ? void 0 : P.find((_e) => _e[v.value.id] === X[v.value.id])) == null ? void 0 : ie.disabled) || !1;
    }), M), k = async () => {
      var M, X, P, ie, _e, Fe, ct, tt, Dt;
      a.value = !0;
      try {
        if ((M = n.depList) != null && M.length || (X = n.userList) != null && X.length || (P = n.roleList) != null && P.length || (ie = n.postList) != null && ie.length) {
          f.value = (_e = n.userList) == null ? void 0 : _e.filter((We) => We[v.value.name].includes(i.value)), l.value = (Fe = n.depList) == null ? void 0 : Fe.filter((We) => We[v.value.name].includes(i.value)), o.value = (ct = n.roleList) == null ? void 0 : ct.filter((We) => We[v.value.name].includes(i.value)), u.value = (tt = n.postList) == null ? void 0 : tt.filter((We) => We[v.value.name].includes(i.value)), d.value = (Dt = n.organizationList) == null ? void 0 : Dt.filter((We) => We[v.value.name].includes(i.value)), q(), a.value = !1;
          return;
        }
        const De = await p(c.value, s.value, i.value);
        try {
          f.value = m((De == null ? void 0 : De.userList) || []), l.value = m((De == null ? void 0 : De.depList) || []), o.value = m((De == null ? void 0 : De.roleList) || []), u.value = m((De == null ? void 0 : De.postList) || []), d.value = m((De == null ? void 0 : De.organizationList) || []);
        } catch (We) {
          a.value = !1, console.info("error: ", We);
        }
        q(), a.value = !1;
      } catch {
        a.value = !1;
      }
    }, E = Qn({
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
    }), R = Qn({
      indeterminate: !1,
      checkAll: 0
    }), I = (M) => E.org.has(M) || E.dep.has(M) || E.user.has(M) || E.role.has(M) || E.post.has(M), C = Lc.debounce(k, 300), B = Pe(() => {
      const M = Array.from(E.org.values()), X = Array.from(E.dep.values()), P = Array.from(E.role.values()), ie = Array.from(E.user.values()), _e = Array.from(E.post.values());
      return O.value = [...M, ...X, ...P, ..._e, ...ie], {
        list: [...M, ...X, ...P, ...ie, ..._e],
        org: {
          list: M,
          len: M.length,
          deps: M
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
          list: ie,
          len: ie.length
        },
        post: {
          list: _e,
          len: _e.length
        }
      };
    }), T = Pe(
      () => {
        const M = n.chooseType.map((P) => P.toLocaleLowerCase());
        let X = [...M];
        return M.includes("dep") && (X = [...X, "organization", "dept"]), M.includes("dep_user") && (X = [...X, "user"]), X;
      }
    ), D = Pe(
      () => T.value.includes(Qe.dep) && !T.value.includes(Qe.user) && !T.value.includes(Qe.org)
    ), $ = Pe(
      () => T.value.includes(Qe.user) && !T.value.includes(Qe.dep) && !T.value.includes(Qe.org)
    ), H = Pe(() => T.value.includes(Qe.org) && !T.value.includes(Qe.dep) && !T.value.includes(Qe.user)), W = Pe(() => !g.value.length), K = Pe(
      () => !n.max || B.value.list.length < n.max
    ), ee = (M) => [_.value.dep, _.value.organization].includes(M[v.value.type]) ? M.hasOwnProperty("disabled") : !1, Q = Le([]), re = (M) => {
      Q.value = M, Q.value.forEach((X) => {
        X.readonly = X == null ? void 0 : X.disabled;
      });
    }, z = Le(!1), q = (M = !1) => {
      var P;
      const X = (P = n == null ? void 0 : n.userList) != null && P.length ? xt.cloneDeep([...n == null ? void 0 : n.organizationList, ...n == null ? void 0 : n.userList, ...n == null ? void 0 : n.depList]) : [...d.value, ...l.value, ...f.value];
      return !M && re(X), X;
    };
    Tt(
      () => n.show,
      async (M) => {
        var X;
        if (z.value = M, M) {
          s.value = n.pid, c.value = ((X = n.org) == null ? void 0 : X.elementId) || n.orgPid, !n.userList.length && !n.depList.length && !n.roleList.length && !n.postList.length && !n.organizationList.length ? await k() : (f.value = n.userList, l.value = n.depList, o.value = n.roleList, u.value = n.postList, d.value = n.organizationList), E.trans = [], R.checkAll = 0, R.indeterminate = !1;
          const P = q(!0);
          for (const _e of P)
            I(_e[v.value.id]) && E.trans.push(_e[v.value.id]);
          const ie = P.length === E.trans.length;
          R.indeterminate = !!(P.length && !ie), R.checkAll = Number(P.length && ie), Jn(() => {
            var _e;
            (_e = n.modelValue) != null && _e.length ? n.modelValue.forEach((Fe) => {
              de(Fe), n.multiple ? E.trans.push(Fe[v.value.id]) : E.single = Fe[v.value.id];
            }) : Ne();
          });
        } else
          Ne();
      }
    ), e0(() => {
      let M;
      if (D.value || $.value) {
        const P = f.value.length, ie = l.value.length;
        M = D.value ? ie : $.value ? P : P + P;
      } else
        M = Q.value.length;
      const X = E.trans.length;
      R.indeterminate = E.trans.length ? X !== M : !1, R.checkAll = +(M !== 0 && X === M);
    });
    const F = (M) => {
      if (M) {
        if (E.single = "", M[v.value.id]) {
          const X = E.trans.findIndex(
            (P) => P === M[v.value.id]
          );
          X !== -1 && E.trans.splice(X, 1);
        }
        switch (M[v.value.type]) {
          case _.value.dep:
            return E.dep.delete(M[v.value.id]);
          case _.value.user:
            return E.user.delete(M[v.value.id]);
          case _.value.role:
            return E.role.delete(M[v.value.id]);
          case _.value.post:
            return E.post.delete(M[v.value.id]);
          case _.value.organization:
            return E.org.delete(M[v.value.id]);
          default:
            return;
        }
      }
    }, V = (M) => {
      F(M);
    }, de = (M) => {
      if (!I(M[v.value.id])) {
        const X = {
          ...M
          // readonly: item.disabled
        };
        switch (M[v.value.type]) {
          case _.value.dep:
            return E.dep.set(M[v.value.id], X);
          case _.value.user:
            return E.user.set(M[v.value.id], X);
          case _.value.role:
            return E.role.set(M[v.value.id], X);
          case _.value.post:
            return E.post.set(M[v.value.id], X);
          case _.value.organization:
            return E.org.set(M[v.value.id], X);
          default:
            return;
        }
      }
    };
    Tt(
      () => E.trans,
      (M) => {
        if (!M.length)
          Q.value.forEach((X) => {
            X.disabled = !1;
            try {
              n.multiple && F(X);
            } catch {
            }
          });
        else {
          const X = Q.value.filter(
            (ie) => !M.includes(ie[v.value.id])
          );
          for (const ie of X)
            ie.disabled = !1, n.multiple && F(ie);
          const P = Q.value.filter(
            (ie) => M.includes(ie[v.value.id])
          );
          for (const ie of P)
            ie.disabled = ee(ie), de(ie);
        }
      },
      { deep: !0 }
    ), Tt(
      () => E.single,
      (M) => {
        if (M) {
          const X = Q.value.find((P) => P[v.value.id] === M);
          X && (E.dep.clear(), E.user.clear(), E.role.clear(), E.post.clear(), E.org.clear(), E.trans = [], Jn(() => {
            de(X);
          }));
        }
      }
    );
    const pe = (M) => {
      if (M) {
        let X = [];
        if (T.value.includes("dep") || T.value.includes("dep_user")) {
          const P = Q.value.filter(
            (ie) => ie[v.value.type].toLocaleUpperCase() === _.value[Qe.dep].toLocaleUpperCase()
          );
          X = [...X, ...P];
        }
        if (T.value.includes("user") || T.value.includes("dep_user")) {
          const P = Q.value.filter(
            (ie) => ie[v.value.type].toLocaleUpperCase() === _.value[Qe.user].toLocaleUpperCase()
          );
          X = [...X, ...P];
        }
        if (T.value.includes("organization")) {
          const P = Q.value.filter(
            (ie) => ie[v.value.type].toLocaleUpperCase() === _.value[Qe.org].toLocaleUpperCase()
          );
          X = [...X, ...P];
        }
        X.forEach((P) => {
          !E.trans.includes(P[v.value.id]) && E.trans.push(P[v.value.id]);
        });
      } else
        Q.value.forEach((X) => {
          const P = E.trans.findIndex((ie) => ie === X[v.value.id]);
          P >= 0 && E.trans.splice(P, 1);
        });
    }, Ce = (M) => {
      M[v.value.type] === _.value.organization ? (c.value = M == null ? void 0 : M.elementId, s.value = "") : (c.value = "", s.value = M == null ? void 0 : M.elementId), k(), g.value.push(M);
    }, ce = () => {
      const M = g.value.length - 2, X = M < 0 ? 0 : M, P = g.value[X];
      P[v.value.type] === _.value.organization ? (c.value = M < 0 ? "root" : (P == null ? void 0 : P.elementId) || (P == null ? void 0 : P.id), s.value = "") : (c.value = "", s.value = M < 0 ? "" : (P == null ? void 0 : P.elementId) || (P == null ? void 0 : P.id)), k(), g.value.pop();
    }, Se = Pe(() => g.value.length), Me = (M, X) => {
      !X && !n.topLink || X !== Se.value - 1 && (M[v.value.type] === _.value.organization ? (c.value = M == null ? void 0 : M.elementId, s.value = "") : (c.value = "", s.value = M == null ? void 0 : M.elementId), k(), g.value.splice(X + 1));
    }, ot = Pe(() => n.chooseType.includes("role") && n.chooseType.length === 1), Xe = Pe(() => n.chooseType.includes("post") && n.chooseType.length === 1), $e = Le(n.tabs[0]), Ae = Le(n.tabs[0]);
    e0(() => (Ae.value = ot.value ? n.tabs[1] : Xe.value ? n.tabs[2] : $e.value, Ae.value));
    const Ne = () => {
      E.dep.clear(), E.user.clear(), E.role.clear(), E.post.clear(), E.org.clear(), E.trans = [], Ke.value = [], kt.value = [], $e.value = n.tabs[0], Ae.value = n.tabs[0], i.value = "", s.value = n.pid, c.value = n.orgPid, g.value.splice(1, g.value.length), E.single = "", O.value = [];
    }, _t = () => {
      var M;
      t(
        "ok",
        xt.cloneDeep({
          // 所有选项、部门、人员、角色分别列出
          ...B.value,
          // 排序后的列表
          sort: O.value
        })
      ), t("update:modelValue", xt.cloneDeep(((M = B.value) == null ? void 0 : M.list) || [])), t("update:show", !1), Ne();
    }, ht = () => {
      t("update:show", !1), Ne();
    };
    r({ handClear: Ne, handRomeve: V, handDelete: F });
    const Je = Pe(() => {
      const M = T.value;
      return !!((M.includes("post") || M.includes("role")) && M.length > 1);
    }), wt = Pe(() => [
      { label: "group", name: "组织架构" },
      { label: "role", name: "角色列表" },
      { label: "post", name: "岗位列表" }
    ].filter((M) => n.tabs.includes(M.label))), et = Pe(
      () => `${(typeof n.width == "string" ? Number.parseInt(n.width) : n.width) / 2 - 30}px`
    ), He = Pe(
      () => `${typeof n.height == "string" ? Number.parseInt(n.height) : n.height}px`
    ), qe = () => {
      n.multiple || (E.post.clear(), E.role.clear(), E.user.clear(), E.dep.clear(), E.single = "");
    }, Ke = Le([]), Et = (M, X) => {
      n.multiple || (E.single = "");
      const P = n.multiple ? M : [M];
      if (!P.length) {
        E.role.clear();
        return;
      }
      qe(), X.forEach((ie) => {
        P != null && P.includes(ie[v.value.id]) ? de(ie) : F(ie);
      });
    };
    Tt(
      () => B.value.role.len,
      (M) => {
        Ke.value = xt.cloneDeep(B.value.role.list);
      }
    );
    const kt = Le([]), at = (M, X) => {
      n.multiple || (E.single = "");
      const P = n.multiple ? M : [M];
      if (!P.length) {
        E.post.clear();
        return;
      }
      qe(), X.forEach((ie) => {
        P != null && P.includes(ie[v.value.id]) ? de(ie) : F(ie);
      });
    };
    return Tt(
      () => B.value.post.len,
      (M) => {
        kt.value = xt.cloneDeep(B.value.post.list);
      }
    ), Tt(
      () => i.value,
      (M) => {
        C("");
      }
    ), (M, X) => (te(), be(oe(fs), {
      modelValue: z.value,
      "onUpdate:modelValue": X[6] || (X[6] = (P) => z.value = P),
      title: M.title,
      "destroy-on-close": "",
      "close-on-click-modal": !1,
      "close-on-click-escape": !1,
      draggable: "",
      "align-center": "",
      width: typeof M.width == "string" ? M.width : `${M.width}%`,
      class: "p_p_picker-dialog",
      "modal-class": "p_p_picker-dialog-modal",
      onClose: ht
    }, {
      footer: me(() => [
        xe("span", tu, [
          Be(oe(Pt), {
            onClick: Ct(ht, ["stop"])
          }, {
            default: me(() => [
              nt("取消")
            ]),
            _: 1
          }, 8, ["onClick"]),
          Be(oe(Pt), {
            type: "primary",
            onClick: Ct(_t, ["stop"])
          }, {
            default: me(() => [
              nt(" 确定 ")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: me(() => [
        xe("div", {
          class: "dep-use-picker",
          style: Xt({ height: He.value })
        }, [
          xe("div", If, [
            xe("div", null, [
              Be(oe(us), {
                modelValue: i.value,
                "onUpdate:modelValue": X[0] || (X[0] = (P) => i.value = P),
                clearable: "",
                placeholder: M.placeholder,
                "prefix-icon": Jc,
                style: Xt({ width: et.value })
              }, null, 8, ["modelValue", "placeholder", "style"]),
              Je.value ? (te(), be(oe(yr), {
                key: 0,
                modelValue: $e.value,
                "onUpdate:modelValue": X[1] || (X[1] = (P) => $e.value = P),
                class: "ik-picker-tab",
                style: Xt({ width: et.value })
              }, {
                default: me(() => [
                  (te(!0), he(it, null, pt(wt.value, (P) => (te(), be(oe(ls), {
                    label: P.label,
                    key: P.label
                  }, {
                    default: me(() => [
                      nt(Ze(P.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "style"])) : Oe("", !0)
            ]),
            Ae.value === oe(nr).group ? (te(), he("div", Mf, [
              Be(oe(ds), {
                separator: ">",
                class: Cn(["banner", { "top-unlink": !M.topLink }])
              }, {
                default: me(() => [
                  Se.value ? (te(!0), he(it, { key: 0 }, pt(oe(g), (P, ie) => (te(), be(oe(hs), {
                    key: P[v.value.id],
                    onClick: Ct((_e) => Me(P, ie), ["stop"])
                  }, {
                    default: me(() => [
                      nt(Ze(P[v.value.name]), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 128)) : Oe("", !0)
                ]),
                _: 1
              }, 8, ["class"]),
              M.multiple ? (te(), he("div", Hf, [
                Be(oe(Rt), {
                  modelValue: R.checkAll,
                  "onUpdate:modelValue": X[2] || (X[2] = (P) => R.checkAll = P),
                  indeterminate: R.indeterminate,
                  "true-label": 1,
                  "false-label": 0,
                  disabled: !M.multiple,
                  onChange: pe,
                  onInput: pe
                }, {
                  default: me(() => [
                    nt("全选")
                  ]),
                  _: 1
                }, 8, ["modelValue", "indeterminate", "disabled"]),
                Se.value > 1 ? jt((te(), be(oe(Pt), {
                  key: 0,
                  link: "",
                  type: "primary",
                  onClick: Ct(ce, ["stop"])
                }, {
                  default: me(() => [
                    nt("上一级")
                  ]),
                  _: 1
                }, 8, ["onClick"])), [
                  [t0, !W.value]
                ]) : Oe("", !0)
              ])) : Oe("", !0)
            ])) : Oe("", !0),
            Ae.value === oe(nr).group ? (te(), he(it, { key: 1 }, [
              Q.value.length ? jt((te(), he("ul", zf, [
                M.multiple ? (te(), be(oe(Fn), {
                  key: 0,
                  modelValue: E.trans,
                  "onUpdate:modelValue": X[3] || (X[3] = (P) => E.trans = P)
                }, {
                  default: me(() => [
                    (te(!0), he(it, null, pt(d.value, (P) => (te(), he("li", {
                      key: P[v.value.id]
                    }, [
                      M.chooseType.includes("org") ? (te(), he("div", $f, [
                        Be(er),
                        xe("p", null, Ze(P[v.value.name]), 1)
                      ])) : (te(), be(oe(Rt), {
                        key: 1,
                        label: P[v.value.id],
                        disabled: !K.value || (P == null ? void 0 : P.readonly)
                      }, {
                        default: me(() => [
                          xe("div", qf, [
                            Be(er),
                            xe("p", null, Ze(P[v.value.name]), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["label", "disabled"])),
                      M.children ? (te(), he("div", Ff, [
                        [_.value.organization, _.value.dep, _.value.role].includes(
                          P[v.value.type]
                        ) ? (te(), be(oe(Pt), {
                          key: 0,
                          link: "",
                          type: "primary",
                          onClick: Ct((ie) => Ce(P), ["stop"]),
                          disabled: P.disabled
                        }, {
                          icon: me(() => [
                            Be(An)
                          ]),
                          default: me(() => [
                            nt(" 下级 ")
                          ]),
                          _: 2
                        }, 1032, ["onClick", "disabled"])) : Oe("", !0)
                      ])) : Oe("", !0)
                    ]))), 128)),
                    (!$.value || M.showDep) && !H.value ? (te(!0), he(it, { key: 0 }, pt(l.value, (P) => (te(), he("li", {
                      key: P[v.value.id]
                    }, [
                      M.chooseType.includes("dep") || M.chooseType.includes("dep_user") ? (te(), be(oe(Rt), {
                        key: 0,
                        label: P[v.value.id],
                        disabled: !K.value || (P == null ? void 0 : P.readonly)
                      }, {
                        default: me(() => [
                          xe("div", Uf, [
                            Be(Jt),
                            xe("p", null, Ze(P[v.value.name]), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["label", "disabled"])) : (te(), he("div", Wf, [
                        Be(Jt),
                        xe("p", null, Ze(P[v.value.name]), 1)
                      ])),
                      M.children ? (te(), he("div", Vf, [
                        [_.value.dep, _.value.role].includes(
                          P[v.value.type]
                        ) ? (te(), be(oe(Pt), {
                          key: 0,
                          link: "",
                          type: "primary",
                          onClick: Ct((ie) => Ce(P), ["stop"]),
                          disabled: P.disabled
                        }, {
                          icon: me(() => [
                            Be(An)
                          ]),
                          default: me(() => [
                            nt(" 下级 ")
                          ]),
                          _: 2
                        }, 1032, ["onClick", "disabled"])) : Oe("", !0)
                      ])) : Oe("", !0)
                    ]))), 128)) : Oe("", !0),
                    M.chooseType.includes("user") || M.chooseType.includes("dep_user") ? (te(!0), he(it, { key: 1 }, pt(f.value, (P) => (te(), he("li", {
                      key: P[v.value.id]
                    }, [
                      Be(oe(Rt), {
                        label: P[v.value.id],
                        disabled: !K.value || (P == null ? void 0 : P.readonly)
                      }, {
                        default: me(() => {
                          var ie, _e;
                          return [
                            _.value.dep === P[v.value.type] ? (te(), be(Ft, { key: 0 })) : _.value.user === P[v.value.type] ? (te(), be(oe(hr), {
                              key: 1,
                              size: 30,
                              src: b((ie = v.value) != null && ie.avatar ? P[(_e = v.value) == null ? void 0 : _e.avatar] : ""),
                              icon: xr
                            }, null, 8, ["src"])) : Oe("", !0),
                            xe("span", Yf, Ze(P[v.value.name]), 1)
                          ];
                        }),
                        _: 2
                      }, 1032, ["label", "disabled"])
                    ]))), 128)) : Oe("", !0)
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : (te(), be(oe(yr), {
                  key: 1,
                  modelValue: E.single,
                  "onUpdate:modelValue": X[4] || (X[4] = (P) => E.single = P)
                }, {
                  default: me(() => [
                    (te(!0), he(it, null, pt(Q.value, (P) => {
                      var ie, _e, Fe;
                      return te(), he("li", {
                        key: P[v.value.id]
                      }, [
                        T.value.includes((ie = P[v.value.type]) == null ? void 0 : ie.toLocaleLowerCase()) ? (te(), be(oe(Un), {
                          key: 0,
                          label: P[v.value.id],
                          class: Cn({
                            readonly: ![_.value.organization, _.value.dep, _.value.user].includes(
                              P[v.value.type]
                            ),
                            "w-full": !0
                          }),
                          disabled: P.readonly
                        }, {
                          default: me(() => {
                            var ct, tt;
                            return [
                              _.value.organization === P[v.value.type] ? (te(), be(er, { key: 0 })) : _.value.dep === P[v.value.type] ? (te(), be(Jt, { key: 1 })) : _.value.role === P[v.value.type] ? (te(), be(Ft, { key: 2 })) : _.value.user === P[v.value.type] ? (te(), be(oe(hr), {
                                key: 3,
                                size: 30,
                                src: b((ct = v.value) != null && ct.avatar ? P[(tt = v.value) == null ? void 0 : tt.avatar] : ""),
                                icon: xr
                              }, null, 8, ["src"])) : Oe("", !0),
                              xe("span", Kf, Ze(P[v.value.name]), 1)
                            ];
                          }),
                          _: 2
                        }, 1032, ["label", "class", "disabled"])) : (te(), he(it, { key: 1 }, [
                          _.value.organization === P[v.value.type] ? (te(), be(er, { key: 0 })) : _.value.dep === P[v.value.type] ? (te(), be(Jt, { key: 1 })) : _.value.role === P[v.value.type] ? (te(), be(Ft, { key: 2 })) : _.value.user === P[v.value.type] ? (te(), be(oe(hr), {
                            key: 3,
                            size: 30,
                            src: b((_e = v.value) != null && _e.avatar ? P[(Fe = v.value) == null ? void 0 : Fe.avatar] : ""),
                            icon: xr
                          }, null, 8, ["src"])) : Oe("", !0),
                          xe("span", Gf, Ze(P[v.value.name]), 1)
                        ], 64)),
                        M.children ? (te(), he("div", Zf, [
                          [_.value.organization, _.value.dep, _.value.role].includes(
                            P[v.value.type]
                          ) ? (te(), be(oe(Pt), {
                            key: 0,
                            link: "",
                            type: "primary",
                            onClick: Ct((ct) => Ce(P), ["stop"])
                          }, {
                            icon: me(() => [
                              Be(An)
                            ]),
                            default: me(() => [
                              nt(" 下级 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : Oe("", !0)
                        ])) : Oe("", !0)
                      ]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"]))
              ])), [
                [oe(Sn), a.value]
              ]) : (te(), he("div", Xf, Ze(M.emptyText), 1))
            ], 64)) : Ae.value === oe(nr).role ? jt((te(), be(Df, {
              key: 2,
              fixPropOpt: v.value,
              list: o.value,
              max: M.max,
              multiple: M.multiple,
              "hand-list": Ke.value,
              onChange: Et
            }, null, 8, ["fixPropOpt", "list", "max", "multiple", "hand-list"])), [
              [oe(Sn), a.value]
            ]) : Ae.value === oe(nr).post ? jt((te(), be(Sf, {
              key: 3,
              fixPropOpt: v.value,
              list: u.value,
              max: M.max,
              multiple: M.multiple,
              "hand-list": kt.value,
              onChange: at
            }, null, 8, ["fixPropOpt", "list", "max", "multiple", "hand-list"])), [
              [oe(Sn), a.value]
            ]) : Oe("", !0)
          ]),
          jf,
          xe("div", Qf, [
            xe("div", Jf, [
              eu,
              Be(oe(Pt), {
                type: "primary",
                link: "",
                onClick: Ct(Ne, ["stop"])
              }, {
                default: me(() => [
                  nt("清空")
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            Be(oe(vs), {
              tag: "ul",
              name: "fade",
              "item-key": "elementId",
              modelValue: O.value,
              "onUpdate:modelValue": X[5] || (X[5] = (P) => O.value = P),
              style: Xt({ height: `calc(${He.value} + 21px)` }),
              animation: oe(Bt).animation,
              group: oe(Bt).group,
              disabled: oe(Bt).disabled,
              ghostClass: oe(Bt).ghostClass,
              forceFallback: oe(Bt).ghostClass
            }, {
              item: me(({ element: P }) => [
                Be(cs, {
                  type: "transition",
                  name: "flip-list"
                }, {
                  default: me(() => [
                    xe("li", {
                      class: Cn(["list-group-item"]),
                      style: Xt({
                        borderRadius: `${oe(Bt).itemStyle.radius}px`,
                        marginBottom: `${oe(Bt).itemStyle.bottom}px`,
                        backgroundColor: `${oe(Bt).itemStyle.background}`
                      })
                    }, [
                      xe("div", null, [
                        _.value.organization === P[v.value.type] ? (te(), be(er, { key: 0 })) : Oe("", !0),
                        _.value.dep === P[v.value.type] ? (te(), be(Jt, { key: 1 })) : _.value.role === P[v.value.type] ? (te(), be(Ft, { key: 2 })) : _.value.post === P[v.value.type] ? (te(), be($n, { key: 3 })) : _.value.user === P[v.value.type] ? (te(), be(oe(hr), {
                          key: 4,
                          size: 30,
                          src: b(v.value.avatar ? P[v.value.avatar] : ""),
                          icon: xr
                        }, null, 8, ["src"])) : Oe("", !0),
                        xe("span", null, Ze(P[v.value.name]), 1)
                      ]),
                      jt(Be(of, {
                        class: "close",
                        onClick: Ct((ie) => V(P), ["stop"])
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
const au = xs(ru);
export {
  au as IkingPicker,
  au as default
};
