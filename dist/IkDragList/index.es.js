import { defineComponent as Bi, ref as p0, watch as ki, computed as Ai, resolveComponent as Ri, openBlock as Kr, createBlock as x0, unref as b0, normalizeClass as g0, withCtx as Zr, createVNode as m0, Transition as Ni, renderSlot as y0, createElementBlock as Di, normalizeStyle as Ti, createTextVNode as Oi, toDisplayString as Ii } from "vue";
import { DCaret as Li } from "@element-plus/icons-vue";
import Pi from "vuedraggable";
import * as Hi from "lodash-es";
const Mi = (e, r) => {
  if (e.install = (t) => {
    for (const n of [e, ...Object.values(r ?? {})])
      t.component(n.name, n);
  }, r)
    for (const [t, n] of Object.entries(r))
      e[t] = n;
  return e;
};
var re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Fi(e) {
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
var _0 = {}, qi = {
  get exports() {
    return _0;
  },
  set exports(e) {
    _0 = e;
  }
};
function St(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Wt = {}, zi = {
  get exports() {
    return Wt;
  },
  set exports(e) {
    Wt = e;
  }
};
const $i = {}, Wi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $i
}, Symbol.toStringTag, { value: "Module" })), Ui = /* @__PURE__ */ Fi(Wi);
var w0;
function fe() {
  return w0 || (w0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n();
    })(re, function() {
      var t = t || function(n, i) {
        var o;
        if (typeof window < "u" && window.crypto && (o = window.crypto), typeof self < "u" && self.crypto && (o = self.crypto), typeof globalThis < "u" && globalThis.crypto && (o = globalThis.crypto), !o && typeof window < "u" && window.msCrypto && (o = window.msCrypto), !o && typeof re < "u" && re.crypto && (o = re.crypto), !o && typeof St == "function")
          try {
            o = Ui;
          } catch {
          }
        var f = function() {
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
        }, a = Object.create || function() {
          function y() {
          }
          return function(d) {
            var x;
            return y.prototype = d, x = new y(), y.prototype = null, x;
          };
        }(), h = {}, s = h.lib = {}, c = s.Base = function() {
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
              var d = a(this);
              return y && d.mixIn(y), (!d.hasOwnProperty("init") || this.init === d.init) && (d.init = function() {
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
              for (var d in y)
                y.hasOwnProperty(d) && (this[d] = y[d]);
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
        }(), l = s.WordArray = c.extend({
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
          init: function(y, d) {
            y = this.words = y || [], d != i ? this.sigBytes = d : this.sigBytes = y.length * 4;
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
            return (y || p).stringify(this);
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
            var d = this.words, x = y.words, m = this.sigBytes, E = y.sigBytes;
            if (this.clamp(), m % 4)
              for (var B = 0; B < E; B++) {
                var N = x[B >>> 2] >>> 24 - B % 4 * 8 & 255;
                d[m + B >>> 2] |= N << 24 - (m + B) % 4 * 8;
              }
            else
              for (var I = 0; I < E; I += 4)
                d[m + I >>> 2] = x[I >>> 2];
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
            var y = this.words, d = this.sigBytes;
            y[d >>> 2] &= 4294967295 << 32 - d % 4 * 8, y.length = n.ceil(d / 4);
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
            var y = c.clone.call(this);
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
            for (var d = [], x = 0; x < y; x += 4)
              d.push(f());
            return new l.init(d, y);
          }
        }), u = h.enc = {}, p = u.Hex = {
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
            for (var d = y.words, x = y.sigBytes, m = [], E = 0; E < x; E++) {
              var B = d[E >>> 2] >>> 24 - E % 4 * 8 & 255;
              m.push((B >>> 4).toString(16)), m.push((B & 15).toString(16));
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
          parse: function(y) {
            for (var d = y.length, x = [], m = 0; m < d; m += 2)
              x[m >>> 3] |= parseInt(y.substr(m, 2), 16) << 24 - m % 8 * 4;
            return new l.init(x, d / 2);
          }
        }, g = u.Latin1 = {
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
            for (var d = y.words, x = y.sigBytes, m = [], E = 0; E < x; E++) {
              var B = d[E >>> 2] >>> 24 - E % 4 * 8 & 255;
              m.push(String.fromCharCode(B));
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
          parse: function(y) {
            for (var d = y.length, x = [], m = 0; m < d; m++)
              x[m >>> 2] |= (y.charCodeAt(m) & 255) << 24 - m % 4 * 8;
            return new l.init(x, d);
          }
        }, _ = u.Utf8 = {
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
        }, S = s.BufferedBlockAlgorithm = c.extend({
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
          _append: function(y) {
            typeof y == "string" && (y = _.parse(y)), this._data.concat(y), this._nDataBytes += y.sigBytes;
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
            var d, x = this._data, m = x.words, E = x.sigBytes, B = this.blockSize, N = B * 4, I = E / N;
            y ? I = n.ceil(I) : I = n.max((I | 0) - this._minBufferSize, 0);
            var w = I * B, A = n.min(w * 4, E);
            if (w) {
              for (var L = 0; L < w; L += B)
                this._doProcessBlock(m, L);
              d = m.splice(0, w), x.sigBytes -= A;
            }
            return new l.init(d, A);
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
            var y = c.clone.call(this);
            return y._data = this._data.clone(), y;
          },
          _minBufferSize: 0
        });
        s.Hasher = S.extend({
          /**
           * Configuration options.
           */
          cfg: c.extend(),
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
            S.reset.call(this), this._doReset();
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
          _createHelper: function(y) {
            return function(d, x) {
              return new y.init(x).finalize(d);
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
            return function(d, x) {
              return new T.HMAC.init(y, x).finalize(d);
            };
          }
        });
        var T = h.algo = {};
        return h;
      }(Math);
      return t;
    });
  }(zi)), Wt;
}
var Ut = {}, Yi = {
  get exports() {
    return Ut;
  },
  set exports(e) {
    Ut = e;
  }
}, E0;
function Ar() {
  return E0 || (E0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(fe());
    })(re, function(t) {
      return function(n) {
        var i = t, o = i.lib, f = o.Base, a = o.WordArray, h = i.x64 = {};
        h.Word = f.extend({
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
          init: function(s, c) {
            this.high = s, this.low = c;
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
        }), h.WordArray = f.extend({
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
          init: function(s, c) {
            s = this.words = s || [], c != n ? this.sigBytes = c : this.sigBytes = s.length * 8;
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
            for (var s = this.words, c = s.length, l = [], u = 0; u < c; u++) {
              var p = s[u];
              l.push(p.high), l.push(p.low);
            }
            return a.create(l, this.sigBytes);
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
            for (var s = f.clone.call(this), c = s.words = this.words.slice(0), l = c.length, u = 0; u < l; u++)
              c[u] = c[u].clone();
            return s;
          }
        });
      }(), t;
    });
  }(Yi)), Ut;
}
var Yt = {}, Vi = {
  get exports() {
    return Yt;
  },
  set exports(e) {
    Yt = e;
  }
}, S0;
function Ki() {
  return S0 || (S0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(fe());
    })(re, function(t) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var n = t, i = n.lib, o = i.WordArray, f = o.init, a = o.init = function(h) {
            if (h instanceof ArrayBuffer && (h = new Uint8Array(h)), (h instanceof Int8Array || typeof Uint8ClampedArray < "u" && h instanceof Uint8ClampedArray || h instanceof Int16Array || h instanceof Uint16Array || h instanceof Int32Array || h instanceof Uint32Array || h instanceof Float32Array || h instanceof Float64Array) && (h = new Uint8Array(h.buffer, h.byteOffset, h.byteLength)), h instanceof Uint8Array) {
              for (var s = h.byteLength, c = [], l = 0; l < s; l++)
                c[l >>> 2] |= h[l] << 24 - l % 4 * 8;
              f.call(this, c, s);
            } else
              f.apply(this, arguments);
          };
          a.prototype = o;
        }
      }(), t.lib.WordArray;
    });
  }(Vi)), Yt;
}
var Vt = {}, Zi = {
  get exports() {
    return Vt;
  },
  set exports(e) {
    Vt = e;
  }
}, C0;
function Gi() {
  return C0 || (C0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(fe());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.WordArray, f = n.enc;
        f.Utf16 = f.Utf16BE = {
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
            for (var s = h.words, c = h.sigBytes, l = [], u = 0; u < c; u += 2) {
              var p = s[u >>> 2] >>> 16 - u % 4 * 8 & 65535;
              l.push(String.fromCharCode(p));
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
            for (var s = h.length, c = [], l = 0; l < s; l++)
              c[l >>> 1] |= h.charCodeAt(l) << 16 - l % 2 * 16;
            return o.create(c, s * 2);
          }
        }, f.Utf16LE = {
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
            for (var s = h.words, c = h.sigBytes, l = [], u = 0; u < c; u += 2) {
              var p = a(s[u >>> 2] >>> 16 - u % 4 * 8 & 65535);
              l.push(String.fromCharCode(p));
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
            for (var s = h.length, c = [], l = 0; l < s; l++)
              c[l >>> 1] |= a(h.charCodeAt(l) << 16 - l % 2 * 16);
            return o.create(c, s * 2);
          }
        };
        function a(h) {
          return h << 8 & 4278255360 | h >>> 8 & 16711935;
        }
      }(), t.enc.Utf16;
    });
  }(Zi)), Vt;
}
var Kt = {}, Xi = {
  get exports() {
    return Kt;
  },
  set exports(e) {
    Kt = e;
  }
}, B0;
function ot() {
  return B0 || (B0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(fe());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.WordArray, f = n.enc;
        f.Base64 = {
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
            var s = h.words, c = h.sigBytes, l = this._map;
            h.clamp();
            for (var u = [], p = 0; p < c; p += 3)
              for (var g = s[p >>> 2] >>> 24 - p % 4 * 8 & 255, _ = s[p + 1 >>> 2] >>> 24 - (p + 1) % 4 * 8 & 255, S = s[p + 2 >>> 2] >>> 24 - (p + 2) % 4 * 8 & 255, T = g << 16 | _ << 8 | S, y = 0; y < 4 && p + y * 0.75 < c; y++)
                u.push(l.charAt(T >>> 6 * (3 - y) & 63));
            var d = l.charAt(64);
            if (d)
              for (; u.length % 4; )
                u.push(d);
            return u.join("");
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
            var s = h.length, c = this._map, l = this._reverseMap;
            if (!l) {
              l = this._reverseMap = [];
              for (var u = 0; u < c.length; u++)
                l[c.charCodeAt(u)] = u;
            }
            var p = c.charAt(64);
            if (p) {
              var g = h.indexOf(p);
              g !== -1 && (s = g);
            }
            return a(h, s, l);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function a(h, s, c) {
          for (var l = [], u = 0, p = 0; p < s; p++)
            if (p % 4) {
              var g = c[h.charCodeAt(p - 1)] << p % 4 * 2, _ = c[h.charCodeAt(p)] >>> 6 - p % 4 * 2, S = g | _;
              l[u >>> 2] |= S << 24 - u % 4 * 8, u++;
            }
          return o.create(l, u);
        }
      }(), t.enc.Base64;
    });
  }(Xi)), Kt;
}
var Zt = {}, Qi = {
  get exports() {
    return Zt;
  },
  set exports(e) {
    Zt = e;
  }
}, k0;
function ji() {
  return k0 || (k0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(fe());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.WordArray, f = n.enc;
        f.Base64url = {
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
          stringify: function(h, s = !0) {
            var c = h.words, l = h.sigBytes, u = s ? this._safe_map : this._map;
            h.clamp();
            for (var p = [], g = 0; g < l; g += 3)
              for (var _ = c[g >>> 2] >>> 24 - g % 4 * 8 & 255, S = c[g + 1 >>> 2] >>> 24 - (g + 1) % 4 * 8 & 255, T = c[g + 2 >>> 2] >>> 24 - (g + 2) % 4 * 8 & 255, y = _ << 16 | S << 8 | T, d = 0; d < 4 && g + d * 0.75 < l; d++)
                p.push(u.charAt(y >>> 6 * (3 - d) & 63));
            var x = u.charAt(64);
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
          parse: function(h, s = !0) {
            var c = h.length, l = s ? this._safe_map : this._map, u = this._reverseMap;
            if (!u) {
              u = this._reverseMap = [];
              for (var p = 0; p < l.length; p++)
                u[l.charCodeAt(p)] = p;
            }
            var g = l.charAt(64);
            if (g) {
              var _ = h.indexOf(g);
              _ !== -1 && (c = _);
            }
            return a(h, c, u);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function a(h, s, c) {
          for (var l = [], u = 0, p = 0; p < s; p++)
            if (p % 4) {
              var g = c[h.charCodeAt(p - 1)] << p % 4 * 2, _ = c[h.charCodeAt(p)] >>> 6 - p % 4 * 2, S = g | _;
              l[u >>> 2] |= S << 24 - u % 4 * 8, u++;
            }
          return o.create(l, u);
        }
      }(), t.enc.Base64url;
    });
  }(Qi)), Zt;
}
var Gt = {}, Ji = {
  get exports() {
    return Gt;
  },
  set exports(e) {
    Gt = e;
  }
}, A0;
function st() {
  return A0 || (A0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(fe());
    })(re, function(t) {
      return function(n) {
        var i = t, o = i.lib, f = o.WordArray, a = o.Hasher, h = i.algo, s = [];
        (function() {
          for (var _ = 0; _ < 64; _++)
            s[_] = n.abs(n.sin(_ + 1)) * 4294967296 | 0;
        })();
        var c = h.MD5 = a.extend({
          _doReset: function() {
            this._hash = new f.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(_, S) {
            for (var T = 0; T < 16; T++) {
              var y = S + T, d = _[y];
              _[y] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360;
            }
            var x = this._hash.words, m = _[S + 0], E = _[S + 1], B = _[S + 2], N = _[S + 3], I = _[S + 4], w = _[S + 5], A = _[S + 6], L = _[S + 7], O = _[S + 8], M = _[S + 9], P = _[S + 10], z = _[S + 11], Y = _[S + 12], X = _[S + 13], Q = _[S + 14], J = _[S + 15], H = x[0], F = x[1], $ = x[2], W = x[3];
            H = l(H, F, $, W, m, 7, s[0]), W = l(W, H, F, $, E, 12, s[1]), $ = l($, W, H, F, B, 17, s[2]), F = l(F, $, W, H, N, 22, s[3]), H = l(H, F, $, W, I, 7, s[4]), W = l(W, H, F, $, w, 12, s[5]), $ = l($, W, H, F, A, 17, s[6]), F = l(F, $, W, H, L, 22, s[7]), H = l(H, F, $, W, O, 7, s[8]), W = l(W, H, F, $, M, 12, s[9]), $ = l($, W, H, F, P, 17, s[10]), F = l(F, $, W, H, z, 22, s[11]), H = l(H, F, $, W, Y, 7, s[12]), W = l(W, H, F, $, X, 12, s[13]), $ = l($, W, H, F, Q, 17, s[14]), F = l(F, $, W, H, J, 22, s[15]), H = u(H, F, $, W, E, 5, s[16]), W = u(W, H, F, $, A, 9, s[17]), $ = u($, W, H, F, z, 14, s[18]), F = u(F, $, W, H, m, 20, s[19]), H = u(H, F, $, W, w, 5, s[20]), W = u(W, H, F, $, P, 9, s[21]), $ = u($, W, H, F, J, 14, s[22]), F = u(F, $, W, H, I, 20, s[23]), H = u(H, F, $, W, M, 5, s[24]), W = u(W, H, F, $, Q, 9, s[25]), $ = u($, W, H, F, N, 14, s[26]), F = u(F, $, W, H, O, 20, s[27]), H = u(H, F, $, W, X, 5, s[28]), W = u(W, H, F, $, B, 9, s[29]), $ = u($, W, H, F, L, 14, s[30]), F = u(F, $, W, H, Y, 20, s[31]), H = p(H, F, $, W, w, 4, s[32]), W = p(W, H, F, $, O, 11, s[33]), $ = p($, W, H, F, z, 16, s[34]), F = p(F, $, W, H, Q, 23, s[35]), H = p(H, F, $, W, E, 4, s[36]), W = p(W, H, F, $, I, 11, s[37]), $ = p($, W, H, F, L, 16, s[38]), F = p(F, $, W, H, P, 23, s[39]), H = p(H, F, $, W, X, 4, s[40]), W = p(W, H, F, $, m, 11, s[41]), $ = p($, W, H, F, N, 16, s[42]), F = p(F, $, W, H, A, 23, s[43]), H = p(H, F, $, W, M, 4, s[44]), W = p(W, H, F, $, Y, 11, s[45]), $ = p($, W, H, F, J, 16, s[46]), F = p(F, $, W, H, B, 23, s[47]), H = g(H, F, $, W, m, 6, s[48]), W = g(W, H, F, $, L, 10, s[49]), $ = g($, W, H, F, Q, 15, s[50]), F = g(F, $, W, H, w, 21, s[51]), H = g(H, F, $, W, Y, 6, s[52]), W = g(W, H, F, $, N, 10, s[53]), $ = g($, W, H, F, P, 15, s[54]), F = g(F, $, W, H, E, 21, s[55]), H = g(H, F, $, W, O, 6, s[56]), W = g(W, H, F, $, J, 10, s[57]), $ = g($, W, H, F, A, 15, s[58]), F = g(F, $, W, H, X, 21, s[59]), H = g(H, F, $, W, I, 6, s[60]), W = g(W, H, F, $, z, 10, s[61]), $ = g($, W, H, F, B, 15, s[62]), F = g(F, $, W, H, M, 21, s[63]), x[0] = x[0] + H | 0, x[1] = x[1] + F | 0, x[2] = x[2] + $ | 0, x[3] = x[3] + W | 0;
          },
          _doFinalize: function() {
            var _ = this._data, S = _.words, T = this._nDataBytes * 8, y = _.sigBytes * 8;
            S[y >>> 5] |= 128 << 24 - y % 32;
            var d = n.floor(T / 4294967296), x = T;
            S[(y + 64 >>> 9 << 4) + 15] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, S[(y + 64 >>> 9 << 4) + 14] = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, _.sigBytes = (S.length + 1) * 4, this._process();
            for (var m = this._hash, E = m.words, B = 0; B < 4; B++) {
              var N = E[B];
              E[B] = (N << 8 | N >>> 24) & 16711935 | (N << 24 | N >>> 8) & 4278255360;
            }
            return m;
          },
          clone: function() {
            var _ = a.clone.call(this);
            return _._hash = this._hash.clone(), _;
          }
        });
        function l(_, S, T, y, d, x, m) {
          var E = _ + (S & T | ~S & y) + d + m;
          return (E << x | E >>> 32 - x) + S;
        }
        function u(_, S, T, y, d, x, m) {
          var E = _ + (S & y | T & ~y) + d + m;
          return (E << x | E >>> 32 - x) + S;
        }
        function p(_, S, T, y, d, x, m) {
          var E = _ + (S ^ T ^ y) + d + m;
          return (E << x | E >>> 32 - x) + S;
        }
        function g(_, S, T, y, d, x, m) {
          var E = _ + (T ^ (S | ~y)) + d + m;
          return (E << x | E >>> 32 - x) + S;
        }
        i.MD5 = a._createHelper(c), i.HmacMD5 = a._createHmacHelper(c);
      }(Math), t.MD5;
    });
  }(Ji)), Gt;
}
var Xt = {}, eo = {
  get exports() {
    return Xt;
  },
  set exports(e) {
    Xt = e;
  }
}, R0;
function a0() {
  return R0 || (R0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(fe());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.WordArray, f = i.Hasher, a = n.algo, h = [], s = a.SHA1 = f.extend({
          _doReset: function() {
            this._hash = new o.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(c, l) {
            for (var u = this._hash.words, p = u[0], g = u[1], _ = u[2], S = u[3], T = u[4], y = 0; y < 80; y++) {
              if (y < 16)
                h[y] = c[l + y] | 0;
              else {
                var d = h[y - 3] ^ h[y - 8] ^ h[y - 14] ^ h[y - 16];
                h[y] = d << 1 | d >>> 31;
              }
              var x = (p << 5 | p >>> 27) + T + h[y];
              y < 20 ? x += (g & _ | ~g & S) + 1518500249 : y < 40 ? x += (g ^ _ ^ S) + 1859775393 : y < 60 ? x += (g & _ | g & S | _ & S) - 1894007588 : x += (g ^ _ ^ S) - 899497514, T = S, S = _, _ = g << 30 | g >>> 2, g = p, p = x;
            }
            u[0] = u[0] + p | 0, u[1] = u[1] + g | 0, u[2] = u[2] + _ | 0, u[3] = u[3] + S | 0, u[4] = u[4] + T | 0;
          },
          _doFinalize: function() {
            var c = this._data, l = c.words, u = this._nDataBytes * 8, p = c.sigBytes * 8;
            return l[p >>> 5] |= 128 << 24 - p % 32, l[(p + 64 >>> 9 << 4) + 14] = Math.floor(u / 4294967296), l[(p + 64 >>> 9 << 4) + 15] = u, c.sigBytes = l.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var c = f.clone.call(this);
            return c._hash = this._hash.clone(), c;
          }
        });
        n.SHA1 = f._createHelper(s), n.HmacSHA1 = f._createHmacHelper(s);
      }(), t.SHA1;
    });
  }(eo)), Xt;
}
var Qt = {}, to = {
  get exports() {
    return Qt;
  },
  set exports(e) {
    Qt = e;
  }
}, N0;
function wn() {
  return N0 || (N0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(fe());
    })(re, function(t) {
      return function(n) {
        var i = t, o = i.lib, f = o.WordArray, a = o.Hasher, h = i.algo, s = [], c = [];
        (function() {
          function p(T) {
            for (var y = n.sqrt(T), d = 2; d <= y; d++)
              if (!(T % d))
                return !1;
            return !0;
          }
          function g(T) {
            return (T - (T | 0)) * 4294967296 | 0;
          }
          for (var _ = 2, S = 0; S < 64; )
            p(_) && (S < 8 && (s[S] = g(n.pow(_, 1 / 2))), c[S] = g(n.pow(_, 1 / 3)), S++), _++;
        })();
        var l = [], u = h.SHA256 = a.extend({
          _doReset: function() {
            this._hash = new f.init(s.slice(0));
          },
          _doProcessBlock: function(p, g) {
            for (var _ = this._hash.words, S = _[0], T = _[1], y = _[2], d = _[3], x = _[4], m = _[5], E = _[6], B = _[7], N = 0; N < 64; N++) {
              if (N < 16)
                l[N] = p[g + N] | 0;
              else {
                var I = l[N - 15], w = (I << 25 | I >>> 7) ^ (I << 14 | I >>> 18) ^ I >>> 3, A = l[N - 2], L = (A << 15 | A >>> 17) ^ (A << 13 | A >>> 19) ^ A >>> 10;
                l[N] = w + l[N - 7] + L + l[N - 16];
              }
              var O = x & m ^ ~x & E, M = S & T ^ S & y ^ T & y, P = (S << 30 | S >>> 2) ^ (S << 19 | S >>> 13) ^ (S << 10 | S >>> 22), z = (x << 26 | x >>> 6) ^ (x << 21 | x >>> 11) ^ (x << 7 | x >>> 25), Y = B + z + O + c[N] + l[N], X = P + M;
              B = E, E = m, m = x, x = d + Y | 0, d = y, y = T, T = S, S = Y + X | 0;
            }
            _[0] = _[0] + S | 0, _[1] = _[1] + T | 0, _[2] = _[2] + y | 0, _[3] = _[3] + d | 0, _[4] = _[4] + x | 0, _[5] = _[5] + m | 0, _[6] = _[6] + E | 0, _[7] = _[7] + B | 0;
          },
          _doFinalize: function() {
            var p = this._data, g = p.words, _ = this._nDataBytes * 8, S = p.sigBytes * 8;
            return g[S >>> 5] |= 128 << 24 - S % 32, g[(S + 64 >>> 9 << 4) + 14] = n.floor(_ / 4294967296), g[(S + 64 >>> 9 << 4) + 15] = _, p.sigBytes = g.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var p = a.clone.call(this);
            return p._hash = this._hash.clone(), p;
          }
        });
        i.SHA256 = a._createHelper(u), i.HmacSHA256 = a._createHmacHelper(u);
      }(Math), t.SHA256;
    });
  }(to)), Qt;
}
var jt = {}, ro = {
  get exports() {
    return jt;
  },
  set exports(e) {
    jt = e;
  }
}, D0;
function no() {
  return D0 || (D0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), wn());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.WordArray, f = n.algo, a = f.SHA256, h = f.SHA224 = a.extend({
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
            var s = a._doFinalize.call(this);
            return s.sigBytes -= 4, s;
          }
        });
        n.SHA224 = a._createHelper(h), n.HmacSHA224 = a._createHmacHelper(h);
      }(), t.SHA224;
    });
  }(ro)), jt;
}
var Jt = {}, io = {
  get exports() {
    return Jt;
  },
  set exports(e) {
    Jt = e;
  }
}, T0;
function En() {
  return T0 || (T0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), Ar());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.Hasher, f = n.x64, a = f.Word, h = f.WordArray, s = n.algo;
        function c() {
          return a.create.apply(a, arguments);
        }
        var l = [
          c(1116352408, 3609767458),
          c(1899447441, 602891725),
          c(3049323471, 3964484399),
          c(3921009573, 2173295548),
          c(961987163, 4081628472),
          c(1508970993, 3053834265),
          c(2453635748, 2937671579),
          c(2870763221, 3664609560),
          c(3624381080, 2734883394),
          c(310598401, 1164996542),
          c(607225278, 1323610764),
          c(1426881987, 3590304994),
          c(1925078388, 4068182383),
          c(2162078206, 991336113),
          c(2614888103, 633803317),
          c(3248222580, 3479774868),
          c(3835390401, 2666613458),
          c(4022224774, 944711139),
          c(264347078, 2341262773),
          c(604807628, 2007800933),
          c(770255983, 1495990901),
          c(1249150122, 1856431235),
          c(1555081692, 3175218132),
          c(1996064986, 2198950837),
          c(2554220882, 3999719339),
          c(2821834349, 766784016),
          c(2952996808, 2566594879),
          c(3210313671, 3203337956),
          c(3336571891, 1034457026),
          c(3584528711, 2466948901),
          c(113926993, 3758326383),
          c(338241895, 168717936),
          c(666307205, 1188179964),
          c(773529912, 1546045734),
          c(1294757372, 1522805485),
          c(1396182291, 2643833823),
          c(1695183700, 2343527390),
          c(1986661051, 1014477480),
          c(2177026350, 1206759142),
          c(2456956037, 344077627),
          c(2730485921, 1290863460),
          c(2820302411, 3158454273),
          c(3259730800, 3505952657),
          c(3345764771, 106217008),
          c(3516065817, 3606008344),
          c(3600352804, 1432725776),
          c(4094571909, 1467031594),
          c(275423344, 851169720),
          c(430227734, 3100823752),
          c(506948616, 1363258195),
          c(659060556, 3750685593),
          c(883997877, 3785050280),
          c(958139571, 3318307427),
          c(1322822218, 3812723403),
          c(1537002063, 2003034995),
          c(1747873779, 3602036899),
          c(1955562222, 1575990012),
          c(2024104815, 1125592928),
          c(2227730452, 2716904306),
          c(2361852424, 442776044),
          c(2428436474, 593698344),
          c(2756734187, 3733110249),
          c(3204031479, 2999351573),
          c(3329325298, 3815920427),
          c(3391569614, 3928383900),
          c(3515267271, 566280711),
          c(3940187606, 3454069534),
          c(4118630271, 4000239992),
          c(116418474, 1914138554),
          c(174292421, 2731055270),
          c(289380356, 3203993006),
          c(460393269, 320620315),
          c(685471733, 587496836),
          c(852142971, 1086792851),
          c(1017036298, 365543100),
          c(1126000580, 2618297676),
          c(1288033470, 3409855158),
          c(1501505948, 4234509866),
          c(1607167915, 987167468),
          c(1816402316, 1246189591)
        ], u = [];
        (function() {
          for (var g = 0; g < 80; g++)
            u[g] = c();
        })();
        var p = s.SHA512 = o.extend({
          _doReset: function() {
            this._hash = new h.init([
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
          _doProcessBlock: function(g, _) {
            for (var S = this._hash.words, T = S[0], y = S[1], d = S[2], x = S[3], m = S[4], E = S[5], B = S[6], N = S[7], I = T.high, w = T.low, A = y.high, L = y.low, O = d.high, M = d.low, P = x.high, z = x.low, Y = m.high, X = m.low, Q = E.high, J = E.low, H = B.high, F = B.low, $ = N.high, W = N.low, ae = I, ue = w, ve = A, ne = L, pe = O, _e = M, Ue = P, De = z, Re = Y, Se = X, Ne = Q, tt = J, rt = H, Fe = F, nt = $, Ye = W, Ce = 0; Ce < 80; Ce++) {
              var Be, Ie, it = u[Ce];
              if (Ce < 16)
                Ie = it.high = g[_ + Ce * 2] | 0, Be = it.low = g[_ + Ce * 2 + 1] | 0;
              else {
                var pt = u[Ce - 15], Ve = pt.high, Ge = pt.low, Rt = (Ve >>> 1 | Ge << 31) ^ (Ve >>> 8 | Ge << 24) ^ Ve >>> 7, xt = (Ge >>> 1 | Ve << 31) ^ (Ge >>> 8 | Ve << 24) ^ (Ge >>> 7 | Ve << 25), bt = u[Ce - 2], Ke = bt.high, Xe = bt.low, Nt = (Ke >>> 19 | Xe << 13) ^ (Ke << 3 | Xe >>> 29) ^ Ke >>> 6, ft = (Xe >>> 19 | Ke << 13) ^ (Xe << 3 | Ke >>> 29) ^ (Xe >>> 6 | Ke << 26), Dt = u[Ce - 7], Ir = Dt.high, gt = Dt.low, mt = u[Ce - 16], Lr = mt.high, Le = mt.low;
                Be = xt + gt, Ie = Rt + Ir + (Be >>> 0 < xt >>> 0 ? 1 : 0), Be = Be + ft, Ie = Ie + Nt + (Be >>> 0 < ft >>> 0 ? 1 : 0), Be = Be + Le, Ie = Ie + Lr + (Be >>> 0 < Le >>> 0 ? 1 : 0), it.high = Ie, it.low = Be;
              }
              var Pr = Re & Ne ^ ~Re & rt, Tt = Se & tt ^ ~Se & Fe, Ot = ae & ve ^ ae & pe ^ ve & pe, Hr = ue & ne ^ ue & _e ^ ne & _e, Mr = (ae >>> 28 | ue << 4) ^ (ae << 30 | ue >>> 2) ^ (ae << 25 | ue >>> 7), It = (ue >>> 28 | ae << 4) ^ (ue << 30 | ae >>> 2) ^ (ue << 25 | ae >>> 7), Fr = (Re >>> 14 | Se << 18) ^ (Re >>> 18 | Se << 14) ^ (Re << 23 | Se >>> 9), qr = (Se >>> 14 | Re << 18) ^ (Se >>> 18 | Re << 14) ^ (Se << 23 | Re >>> 9), Lt = l[Ce], zr = Lt.high, Pt = Lt.low, ke = Ye + qr, qe = nt + Fr + (ke >>> 0 < Ye >>> 0 ? 1 : 0), ke = ke + Tt, qe = qe + Pr + (ke >>> 0 < Tt >>> 0 ? 1 : 0), ke = ke + Pt, qe = qe + zr + (ke >>> 0 < Pt >>> 0 ? 1 : 0), ke = ke + Be, qe = qe + Ie + (ke >>> 0 < Be >>> 0 ? 1 : 0), yt = It + Hr, $r = Mr + Ot + (yt >>> 0 < It >>> 0 ? 1 : 0);
              nt = rt, Ye = Fe, rt = Ne, Fe = tt, Ne = Re, tt = Se, Se = De + ke | 0, Re = Ue + qe + (Se >>> 0 < De >>> 0 ? 1 : 0) | 0, Ue = pe, De = _e, pe = ve, _e = ne, ve = ae, ne = ue, ue = ke + yt | 0, ae = qe + $r + (ue >>> 0 < ke >>> 0 ? 1 : 0) | 0;
            }
            w = T.low = w + ue, T.high = I + ae + (w >>> 0 < ue >>> 0 ? 1 : 0), L = y.low = L + ne, y.high = A + ve + (L >>> 0 < ne >>> 0 ? 1 : 0), M = d.low = M + _e, d.high = O + pe + (M >>> 0 < _e >>> 0 ? 1 : 0), z = x.low = z + De, x.high = P + Ue + (z >>> 0 < De >>> 0 ? 1 : 0), X = m.low = X + Se, m.high = Y + Re + (X >>> 0 < Se >>> 0 ? 1 : 0), J = E.low = J + tt, E.high = Q + Ne + (J >>> 0 < tt >>> 0 ? 1 : 0), F = B.low = F + Fe, B.high = H + rt + (F >>> 0 < Fe >>> 0 ? 1 : 0), W = N.low = W + Ye, N.high = $ + nt + (W >>> 0 < Ye >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var g = this._data, _ = g.words, S = this._nDataBytes * 8, T = g.sigBytes * 8;
            _[T >>> 5] |= 128 << 24 - T % 32, _[(T + 128 >>> 10 << 5) + 30] = Math.floor(S / 4294967296), _[(T + 128 >>> 10 << 5) + 31] = S, g.sigBytes = _.length * 4, this._process();
            var y = this._hash.toX32();
            return y;
          },
          clone: function() {
            var g = o.clone.call(this);
            return g._hash = this._hash.clone(), g;
          },
          blockSize: 1024 / 32
        });
        n.SHA512 = o._createHelper(p), n.HmacSHA512 = o._createHmacHelper(p);
      }(), t.SHA512;
    });
  }(io)), Jt;
}
var er = {}, oo = {
  get exports() {
    return er;
  },
  set exports(e) {
    er = e;
  }
}, O0;
function so() {
  return O0 || (O0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), Ar(), En());
    })(re, function(t) {
      return function() {
        var n = t, i = n.x64, o = i.Word, f = i.WordArray, a = n.algo, h = a.SHA512, s = a.SHA384 = h.extend({
          _doReset: function() {
            this._hash = new f.init([
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
            var c = h._doFinalize.call(this);
            return c.sigBytes -= 16, c;
          }
        });
        n.SHA384 = h._createHelper(s), n.HmacSHA384 = h._createHmacHelper(s);
      }(), t.SHA384;
    });
  }(oo)), er;
}
var tr = {}, ao = {
  get exports() {
    return tr;
  },
  set exports(e) {
    tr = e;
  }
}, I0;
function fo() {
  return I0 || (I0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), Ar());
    })(re, function(t) {
      return function(n) {
        var i = t, o = i.lib, f = o.WordArray, a = o.Hasher, h = i.x64, s = h.Word, c = i.algo, l = [], u = [], p = [];
        (function() {
          for (var S = 1, T = 0, y = 0; y < 24; y++) {
            l[S + 5 * T] = (y + 1) * (y + 2) / 2 % 64;
            var d = T % 5, x = (2 * S + 3 * T) % 5;
            S = d, T = x;
          }
          for (var S = 0; S < 5; S++)
            for (var T = 0; T < 5; T++)
              u[S + 5 * T] = T + (2 * S + 3 * T) % 5 * 5;
          for (var m = 1, E = 0; E < 24; E++) {
            for (var B = 0, N = 0, I = 0; I < 7; I++) {
              if (m & 1) {
                var w = (1 << I) - 1;
                w < 32 ? N ^= 1 << w : B ^= 1 << w - 32;
              }
              m & 128 ? m = m << 1 ^ 113 : m <<= 1;
            }
            p[E] = s.create(B, N);
          }
        })();
        var g = [];
        (function() {
          for (var S = 0; S < 25; S++)
            g[S] = s.create();
        })();
        var _ = c.SHA3 = a.extend({
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
            for (var S = this._state = [], T = 0; T < 25; T++)
              S[T] = new s.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(S, T) {
            for (var y = this._state, d = this.blockSize / 2, x = 0; x < d; x++) {
              var m = S[T + 2 * x], E = S[T + 2 * x + 1];
              m = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360, E = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360;
              var B = y[x];
              B.high ^= E, B.low ^= m;
            }
            for (var N = 0; N < 24; N++) {
              for (var I = 0; I < 5; I++) {
                for (var w = 0, A = 0, L = 0; L < 5; L++) {
                  var B = y[I + 5 * L];
                  w ^= B.high, A ^= B.low;
                }
                var O = g[I];
                O.high = w, O.low = A;
              }
              for (var I = 0; I < 5; I++)
                for (var M = g[(I + 4) % 5], P = g[(I + 1) % 5], z = P.high, Y = P.low, w = M.high ^ (z << 1 | Y >>> 31), A = M.low ^ (Y << 1 | z >>> 31), L = 0; L < 5; L++) {
                  var B = y[I + 5 * L];
                  B.high ^= w, B.low ^= A;
                }
              for (var X = 1; X < 25; X++) {
                var w, A, B = y[X], Q = B.high, J = B.low, H = l[X];
                H < 32 ? (w = Q << H | J >>> 32 - H, A = J << H | Q >>> 32 - H) : (w = J << H - 32 | Q >>> 64 - H, A = Q << H - 32 | J >>> 64 - H);
                var F = g[u[X]];
                F.high = w, F.low = A;
              }
              var $ = g[0], W = y[0];
              $.high = W.high, $.low = W.low;
              for (var I = 0; I < 5; I++)
                for (var L = 0; L < 5; L++) {
                  var X = I + 5 * L, B = y[X], ae = g[X], ue = g[(I + 1) % 5 + 5 * L], ve = g[(I + 2) % 5 + 5 * L];
                  B.high = ae.high ^ ~ue.high & ve.high, B.low = ae.low ^ ~ue.low & ve.low;
                }
              var B = y[0], ne = p[N];
              B.high ^= ne.high, B.low ^= ne.low;
            }
          },
          _doFinalize: function() {
            var S = this._data, T = S.words;
            this._nDataBytes * 8;
            var y = S.sigBytes * 8, d = this.blockSize * 32;
            T[y >>> 5] |= 1 << 24 - y % 32, T[(n.ceil((y + 1) / d) * d >>> 5) - 1] |= 128, S.sigBytes = T.length * 4, this._process();
            for (var x = this._state, m = this.cfg.outputLength / 8, E = m / 8, B = [], N = 0; N < E; N++) {
              var I = x[N], w = I.high, A = I.low;
              w = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, A = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360, B.push(A), B.push(w);
            }
            return new f.init(B, m);
          },
          clone: function() {
            for (var S = a.clone.call(this), T = S._state = this._state.slice(0), y = 0; y < 25; y++)
              T[y] = T[y].clone();
            return S;
          }
        });
        i.SHA3 = a._createHelper(_), i.HmacSHA3 = a._createHmacHelper(_);
      }(Math), t.SHA3;
    });
  }(ao)), tr;
}
var rr = {}, co = {
  get exports() {
    return rr;
  },
  set exports(e) {
    rr = e;
  }
}, L0;
function uo() {
  return L0 || (L0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(fe());
    })(re, function(t) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(n) {
        var i = t, o = i.lib, f = o.WordArray, a = o.Hasher, h = i.algo, s = f.create([
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
        ]), c = f.create([
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
        ]), l = f.create([
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
        ]), u = f.create([
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
        ]), p = f.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), g = f.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), _ = h.RIPEMD160 = a.extend({
          _doReset: function() {
            this._hash = f.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(E, B) {
            for (var N = 0; N < 16; N++) {
              var I = B + N, w = E[I];
              E[I] = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360;
            }
            var A = this._hash.words, L = p.words, O = g.words, M = s.words, P = c.words, z = l.words, Y = u.words, X, Q, J, H, F, $, W, ae, ue, ve;
            $ = X = A[0], W = Q = A[1], ae = J = A[2], ue = H = A[3], ve = F = A[4];
            for (var ne, N = 0; N < 80; N += 1)
              ne = X + E[B + M[N]] | 0, N < 16 ? ne += S(Q, J, H) + L[0] : N < 32 ? ne += T(Q, J, H) + L[1] : N < 48 ? ne += y(Q, J, H) + L[2] : N < 64 ? ne += d(Q, J, H) + L[3] : ne += x(Q, J, H) + L[4], ne = ne | 0, ne = m(ne, z[N]), ne = ne + F | 0, X = F, F = H, H = m(J, 10), J = Q, Q = ne, ne = $ + E[B + P[N]] | 0, N < 16 ? ne += x(W, ae, ue) + O[0] : N < 32 ? ne += d(W, ae, ue) + O[1] : N < 48 ? ne += y(W, ae, ue) + O[2] : N < 64 ? ne += T(W, ae, ue) + O[3] : ne += S(W, ae, ue) + O[4], ne = ne | 0, ne = m(ne, Y[N]), ne = ne + ve | 0, $ = ve, ve = ue, ue = m(ae, 10), ae = W, W = ne;
            ne = A[1] + J + ue | 0, A[1] = A[2] + H + ve | 0, A[2] = A[3] + F + $ | 0, A[3] = A[4] + X + W | 0, A[4] = A[0] + Q + ae | 0, A[0] = ne;
          },
          _doFinalize: function() {
            var E = this._data, B = E.words, N = this._nDataBytes * 8, I = E.sigBytes * 8;
            B[I >>> 5] |= 128 << 24 - I % 32, B[(I + 64 >>> 9 << 4) + 14] = (N << 8 | N >>> 24) & 16711935 | (N << 24 | N >>> 8) & 4278255360, E.sigBytes = (B.length + 1) * 4, this._process();
            for (var w = this._hash, A = w.words, L = 0; L < 5; L++) {
              var O = A[L];
              A[L] = (O << 8 | O >>> 24) & 16711935 | (O << 24 | O >>> 8) & 4278255360;
            }
            return w;
          },
          clone: function() {
            var E = a.clone.call(this);
            return E._hash = this._hash.clone(), E;
          }
        });
        function S(E, B, N) {
          return E ^ B ^ N;
        }
        function T(E, B, N) {
          return E & B | ~E & N;
        }
        function y(E, B, N) {
          return (E | ~B) ^ N;
        }
        function d(E, B, N) {
          return E & N | B & ~N;
        }
        function x(E, B, N) {
          return E ^ (B | ~N);
        }
        function m(E, B) {
          return E << B | E >>> 32 - B;
        }
        i.RIPEMD160 = a._createHelper(_), i.HmacRIPEMD160 = a._createHmacHelper(_);
      }(), t.RIPEMD160;
    });
  }(co)), rr;
}
var nr = {}, ho = {
  get exports() {
    return nr;
  },
  set exports(e) {
    nr = e;
  }
}, P0;
function f0() {
  return P0 || (P0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(fe());
    })(re, function(t) {
      (function() {
        var n = t, i = n.lib, o = i.Base, f = n.enc, a = f.Utf8, h = n.algo;
        h.HMAC = o.extend({
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
          init: function(s, c) {
            s = this._hasher = new s.init(), typeof c == "string" && (c = a.parse(c));
            var l = s.blockSize, u = l * 4;
            c.sigBytes > u && (c = s.finalize(c)), c.clamp();
            for (var p = this._oKey = c.clone(), g = this._iKey = c.clone(), _ = p.words, S = g.words, T = 0; T < l; T++)
              _[T] ^= 1549556828, S[T] ^= 909522486;
            p.sigBytes = g.sigBytes = u, this.reset();
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
            var c = this._hasher, l = c.finalize(s);
            c.reset();
            var u = c.finalize(this._oKey.clone().concat(l));
            return u;
          }
        });
      })();
    });
  }(ho)), nr;
}
var ir = {}, lo = {
  get exports() {
    return ir;
  },
  set exports(e) {
    ir = e;
  }
}, H0;
function vo() {
  return H0 || (H0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), a0(), f0());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.Base, f = i.WordArray, a = n.algo, h = a.SHA1, s = a.HMAC, c = a.PBKDF2 = o.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA1
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: o.extend({
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
          compute: function(l, u) {
            for (var p = this.cfg, g = s.create(p.hasher, l), _ = f.create(), S = f.create([1]), T = _.words, y = S.words, d = p.keySize, x = p.iterations; T.length < d; ) {
              var m = g.update(u).finalize(S);
              g.reset();
              for (var E = m.words, B = E.length, N = m, I = 1; I < x; I++) {
                N = g.finalize(N), g.reset();
                for (var w = N.words, A = 0; A < B; A++)
                  E[A] ^= w[A];
              }
              _.concat(m), y[0]++;
            }
            return _.sigBytes = d * 4, _;
          }
        });
        n.PBKDF2 = function(l, u, p) {
          return c.create(p).compute(l, u);
        };
      }(), t.PBKDF2;
    });
  }(lo)), ir;
}
var or = {}, po = {
  get exports() {
    return or;
  },
  set exports(e) {
    or = e;
  }
}, M0;
function at() {
  return M0 || (M0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), a0(), f0());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.Base, f = i.WordArray, a = n.algo, h = a.MD5, s = a.EvpKDF = o.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: o.extend({
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
          init: function(c) {
            this.cfg = this.cfg.extend(c);
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
          compute: function(c, l) {
            for (var u, p = this.cfg, g = p.hasher.create(), _ = f.create(), S = _.words, T = p.keySize, y = p.iterations; S.length < T; ) {
              u && g.update(u), u = g.update(c).finalize(l), g.reset();
              for (var d = 1; d < y; d++)
                u = g.finalize(u), g.reset();
              _.concat(u);
            }
            return _.sigBytes = T * 4, _;
          }
        });
        n.EvpKDF = function(c, l, u) {
          return s.create(u).compute(c, l);
        };
      }(), t.EvpKDF;
    });
  }(po)), or;
}
var sr = {}, xo = {
  get exports() {
    return sr;
  },
  set exports(e) {
    sr = e;
  }
}, F0;
function ye() {
  return F0 || (F0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), at());
    })(re, function(t) {
      t.lib.Cipher || function(n) {
        var i = t, o = i.lib, f = o.Base, a = o.WordArray, h = o.BufferedBlockAlgorithm, s = i.enc;
        s.Utf8;
        var c = s.Base64, l = i.algo, u = l.EvpKDF, p = o.Cipher = h.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: f.extend(),
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
          createEncryptor: function(w, A) {
            return this.create(this._ENC_XFORM_MODE, w, A);
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
          createDecryptor: function(w, A) {
            return this.create(this._DEC_XFORM_MODE, w, A);
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
          init: function(w, A, L) {
            this.cfg = this.cfg.extend(L), this._xformMode = w, this._key = A, this.reset();
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
          process: function(w) {
            return this._append(w), this._process();
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
          finalize: function(w) {
            w && this._append(w);
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
            function w(A) {
              return typeof A == "string" ? I : E;
            }
            return function(A) {
              return {
                encrypt: function(L, O, M) {
                  return w(O).encrypt(A, L, O, M);
                },
                decrypt: function(L, O, M) {
                  return w(O).decrypt(A, L, O, M);
                }
              };
            };
          }()
        });
        o.StreamCipher = p.extend({
          _doFinalize: function() {
            var w = this._process(!0);
            return w;
          },
          blockSize: 1
        });
        var g = i.mode = {}, _ = o.BlockCipherMode = f.extend({
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
          createEncryptor: function(w, A) {
            return this.Encryptor.create(w, A);
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
          createDecryptor: function(w, A) {
            return this.Decryptor.create(w, A);
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
          init: function(w, A) {
            this._cipher = w, this._iv = A;
          }
        }), S = g.CBC = function() {
          var w = _.extend();
          w.Encryptor = w.extend({
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
            processBlock: function(L, O) {
              var M = this._cipher, P = M.blockSize;
              A.call(this, L, O, P), M.encryptBlock(L, O), this._prevBlock = L.slice(O, O + P);
            }
          }), w.Decryptor = w.extend({
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
            processBlock: function(L, O) {
              var M = this._cipher, P = M.blockSize, z = L.slice(O, O + P);
              M.decryptBlock(L, O), A.call(this, L, O, P), this._prevBlock = z;
            }
          });
          function A(L, O, M) {
            var P, z = this._iv;
            z ? (P = z, this._iv = n) : P = this._prevBlock;
            for (var Y = 0; Y < M; Y++)
              L[O + Y] ^= P[Y];
          }
          return w;
        }(), T = i.pad = {}, y = T.Pkcs7 = {
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
          pad: function(w, A) {
            for (var L = A * 4, O = L - w.sigBytes % L, M = O << 24 | O << 16 | O << 8 | O, P = [], z = 0; z < O; z += 4)
              P.push(M);
            var Y = a.create(P, O);
            w.concat(Y);
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
          unpad: function(w) {
            var A = w.words[w.sigBytes - 1 >>> 2] & 255;
            w.sigBytes -= A;
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
            mode: S,
            padding: y
          }),
          reset: function() {
            var w;
            p.reset.call(this);
            var A = this.cfg, L = A.iv, O = A.mode;
            this._xformMode == this._ENC_XFORM_MODE ? w = O.createEncryptor : (w = O.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == w ? this._mode.init(this, L && L.words) : (this._mode = w.call(O, this, L && L.words), this._mode.__creator = w);
          },
          _doProcessBlock: function(w, A) {
            this._mode.processBlock(w, A);
          },
          _doFinalize: function() {
            var w, A = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (A.pad(this._data, this.blockSize), w = this._process(!0)) : (w = this._process(!0), A.unpad(w)), w;
          },
          blockSize: 128 / 32
        });
        var d = o.CipherParams = f.extend({
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
          init: function(w) {
            this.mixIn(w);
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
          toString: function(w) {
            return (w || this.formatter).stringify(this);
          }
        }), x = i.format = {}, m = x.OpenSSL = {
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
          stringify: function(w) {
            var A, L = w.ciphertext, O = w.salt;
            return O ? A = a.create([1398893684, 1701076831]).concat(O).concat(L) : A = L, A.toString(c);
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
          parse: function(w) {
            var A, L = c.parse(w), O = L.words;
            return O[0] == 1398893684 && O[1] == 1701076831 && (A = a.create(O.slice(2, 4)), O.splice(0, 4), L.sigBytes -= 16), d.create({ ciphertext: L, salt: A });
          }
        }, E = o.SerializableCipher = f.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: f.extend({
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
          encrypt: function(w, A, L, O) {
            O = this.cfg.extend(O);
            var M = w.createEncryptor(L, O), P = M.finalize(A), z = M.cfg;
            return d.create({
              ciphertext: P,
              key: L,
              iv: z.iv,
              algorithm: w,
              mode: z.mode,
              padding: z.padding,
              blockSize: w.blockSize,
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
          decrypt: function(w, A, L, O) {
            O = this.cfg.extend(O), A = this._parse(A, O.format);
            var M = w.createDecryptor(L, O).finalize(A.ciphertext);
            return M;
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
          _parse: function(w, A) {
            return typeof w == "string" ? A.parse(w, this) : w;
          }
        }), B = i.kdf = {}, N = B.OpenSSL = {
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
          execute: function(w, A, L, O) {
            O || (O = a.random(64 / 8));
            var M = u.create({ keySize: A + L }).compute(w, O), P = a.create(M.words.slice(A), L * 4);
            return M.sigBytes = A * 4, d.create({ key: M, iv: P, salt: O });
          }
        }, I = o.PasswordBasedCipher = E.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: E.cfg.extend({
            kdf: N
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
          encrypt: function(w, A, L, O) {
            O = this.cfg.extend(O);
            var M = O.kdf.execute(L, w.keySize, w.ivSize);
            O.iv = M.iv;
            var P = E.encrypt.call(this, w, A, M.key, O);
            return P.mixIn(M), P;
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
          decrypt: function(w, A, L, O) {
            O = this.cfg.extend(O), A = this._parse(A, O.format);
            var M = O.kdf.execute(L, w.keySize, w.ivSize, A.salt);
            O.iv = M.iv;
            var P = E.decrypt.call(this, w, A, M.key, O);
            return P;
          }
        });
      }();
    });
  }(xo)), sr;
}
var ar = {}, bo = {
  get exports() {
    return ar;
  },
  set exports(e) {
    ar = e;
  }
}, q0;
function go() {
  return q0 || (q0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), ye());
    })(re, function(t) {
      return t.mode.CFB = function() {
        var n = t.lib.BlockCipherMode.extend();
        n.Encryptor = n.extend({
          processBlock: function(o, f) {
            var a = this._cipher, h = a.blockSize;
            i.call(this, o, f, h, a), this._prevBlock = o.slice(f, f + h);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(o, f) {
            var a = this._cipher, h = a.blockSize, s = o.slice(f, f + h);
            i.call(this, o, f, h, a), this._prevBlock = s;
          }
        });
        function i(o, f, a, h) {
          var s, c = this._iv;
          c ? (s = c.slice(0), this._iv = void 0) : s = this._prevBlock, h.encryptBlock(s, 0);
          for (var l = 0; l < a; l++)
            o[f + l] ^= s[l];
        }
        return n;
      }(), t.mode.CFB;
    });
  }(bo)), ar;
}
var fr = {}, mo = {
  get exports() {
    return fr;
  },
  set exports(e) {
    fr = e;
  }
}, z0;
function yo() {
  return z0 || (z0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), ye());
    })(re, function(t) {
      return t.mode.CTR = function() {
        var n = t.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(o, f) {
            var a = this._cipher, h = a.blockSize, s = this._iv, c = this._counter;
            s && (c = this._counter = s.slice(0), this._iv = void 0);
            var l = c.slice(0);
            a.encryptBlock(l, 0), c[h - 1] = c[h - 1] + 1 | 0;
            for (var u = 0; u < h; u++)
              o[f + u] ^= l[u];
          }
        });
        return n.Decryptor = i, n;
      }(), t.mode.CTR;
    });
  }(mo)), fr;
}
var cr = {}, _o = {
  get exports() {
    return cr;
  },
  set exports(e) {
    cr = e;
  }
}, $0;
function wo() {
  return $0 || ($0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), ye());
    })(re, function(t) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return t.mode.CTRGladman = function() {
        var n = t.lib.BlockCipherMode.extend();
        function i(a) {
          if ((a >> 24 & 255) === 255) {
            var h = a >> 16 & 255, s = a >> 8 & 255, c = a & 255;
            h === 255 ? (h = 0, s === 255 ? (s = 0, c === 255 ? c = 0 : ++c) : ++s) : ++h, a = 0, a += h << 16, a += s << 8, a += c;
          } else
            a += 1 << 24;
          return a;
        }
        function o(a) {
          return (a[0] = i(a[0])) === 0 && (a[1] = i(a[1])), a;
        }
        var f = n.Encryptor = n.extend({
          processBlock: function(a, h) {
            var s = this._cipher, c = s.blockSize, l = this._iv, u = this._counter;
            l && (u = this._counter = l.slice(0), this._iv = void 0), o(u);
            var p = u.slice(0);
            s.encryptBlock(p, 0);
            for (var g = 0; g < c; g++)
              a[h + g] ^= p[g];
          }
        });
        return n.Decryptor = f, n;
      }(), t.mode.CTRGladman;
    });
  }(_o)), cr;
}
var ur = {}, Eo = {
  get exports() {
    return ur;
  },
  set exports(e) {
    ur = e;
  }
}, W0;
function So() {
  return W0 || (W0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), ye());
    })(re, function(t) {
      return t.mode.OFB = function() {
        var n = t.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(o, f) {
            var a = this._cipher, h = a.blockSize, s = this._iv, c = this._keystream;
            s && (c = this._keystream = s.slice(0), this._iv = void 0), a.encryptBlock(c, 0);
            for (var l = 0; l < h; l++)
              o[f + l] ^= c[l];
          }
        });
        return n.Decryptor = i, n;
      }(), t.mode.OFB;
    });
  }(Eo)), ur;
}
var hr = {}, Co = {
  get exports() {
    return hr;
  },
  set exports(e) {
    hr = e;
  }
}, U0;
function Sn() {
  return U0 || (U0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), ye());
    })(re, function(t) {
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
  }(Co)), hr;
}
var lr = {}, Bo = {
  get exports() {
    return lr;
  },
  set exports(e) {
    lr = e;
  }
}, Y0;
function ko() {
  return Y0 || (Y0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), ye());
    })(re, function(t) {
      return t.pad.AnsiX923 = {
        pad: function(n, i) {
          var o = n.sigBytes, f = i * 4, a = f - o % f, h = o + a - 1;
          n.clamp(), n.words[h >>> 2] |= a << 24 - h % 4 * 8, n.sigBytes += a;
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, t.pad.Ansix923;
    });
  }(Bo)), lr;
}
var dr = {}, Ao = {
  get exports() {
    return dr;
  },
  set exports(e) {
    dr = e;
  }
}, V0;
function Ro() {
  return V0 || (V0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), ye());
    })(re, function(t) {
      return t.pad.Iso10126 = {
        pad: function(n, i) {
          var o = i * 4, f = o - n.sigBytes % o;
          n.concat(t.lib.WordArray.random(f - 1)).concat(t.lib.WordArray.create([f << 24], 1));
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, t.pad.Iso10126;
    });
  }(Ao)), dr;
}
var vr = {}, No = {
  get exports() {
    return vr;
  },
  set exports(e) {
    vr = e;
  }
}, K0;
function Do() {
  return K0 || (K0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), ye());
    })(re, function(t) {
      return t.pad.Iso97971 = {
        pad: function(n, i) {
          n.concat(t.lib.WordArray.create([2147483648], 1)), t.pad.ZeroPadding.pad(n, i);
        },
        unpad: function(n) {
          t.pad.ZeroPadding.unpad(n), n.sigBytes--;
        }
      }, t.pad.Iso97971;
    });
  }(No)), vr;
}
var pr = {}, To = {
  get exports() {
    return pr;
  },
  set exports(e) {
    pr = e;
  }
}, Z0;
function Oo() {
  return Z0 || (Z0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), ye());
    })(re, function(t) {
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
  }(To)), pr;
}
var xr = {}, Io = {
  get exports() {
    return xr;
  },
  set exports(e) {
    xr = e;
  }
}, G0;
function Lo() {
  return G0 || (G0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), ye());
    })(re, function(t) {
      return t.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, t.pad.NoPadding;
    });
  }(Io)), xr;
}
var br = {}, Po = {
  get exports() {
    return br;
  },
  set exports(e) {
    br = e;
  }
}, X0;
function Ho() {
  return X0 || (X0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), ye());
    })(re, function(t) {
      return function(n) {
        var i = t, o = i.lib, f = o.CipherParams, a = i.enc, h = a.Hex, s = i.format;
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
          stringify: function(c) {
            return c.ciphertext.toString(h);
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
          parse: function(c) {
            var l = h.parse(c);
            return f.create({ ciphertext: l });
          }
        };
      }(), t.format.Hex;
    });
  }(Po)), br;
}
var gr = {}, Mo = {
  get exports() {
    return gr;
  },
  set exports(e) {
    gr = e;
  }
}, Q0;
function Cn() {
  return Q0 || (Q0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), ot(), st(), at(), ye());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.BlockCipher, f = n.algo, a = [], h = [], s = [], c = [], l = [], u = [], p = [], g = [], _ = [], S = [];
        (function() {
          for (var d = [], x = 0; x < 256; x++)
            x < 128 ? d[x] = x << 1 : d[x] = x << 1 ^ 283;
          for (var m = 0, E = 0, x = 0; x < 256; x++) {
            var B = E ^ E << 1 ^ E << 2 ^ E << 3 ^ E << 4;
            B = B >>> 8 ^ B & 255 ^ 99, a[m] = B, h[B] = m;
            var N = d[m], I = d[N], w = d[I], A = d[B] * 257 ^ B * 16843008;
            s[m] = A << 24 | A >>> 8, c[m] = A << 16 | A >>> 16, l[m] = A << 8 | A >>> 24, u[m] = A;
            var A = w * 16843009 ^ I * 65537 ^ N * 257 ^ m * 16843008;
            p[B] = A << 24 | A >>> 8, g[B] = A << 16 | A >>> 16, _[B] = A << 8 | A >>> 24, S[B] = A, m ? (m = N ^ d[d[d[w ^ N]]], E ^= d[d[E]]) : m = E = 1;
          }
        })();
        var T = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], y = f.AES = o.extend({
          _doReset: function() {
            var d;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var x = this._keyPriorReset = this._key, m = x.words, E = x.sigBytes / 4, B = this._nRounds = E + 6, N = (B + 1) * 4, I = this._keySchedule = [], w = 0; w < N; w++)
                w < E ? I[w] = m[w] : (d = I[w - 1], w % E ? E > 6 && w % E == 4 && (d = a[d >>> 24] << 24 | a[d >>> 16 & 255] << 16 | a[d >>> 8 & 255] << 8 | a[d & 255]) : (d = d << 8 | d >>> 24, d = a[d >>> 24] << 24 | a[d >>> 16 & 255] << 16 | a[d >>> 8 & 255] << 8 | a[d & 255], d ^= T[w / E | 0] << 24), I[w] = I[w - E] ^ d);
              for (var A = this._invKeySchedule = [], L = 0; L < N; L++) {
                var w = N - L;
                if (L % 4)
                  var d = I[w];
                else
                  var d = I[w - 4];
                L < 4 || w <= 4 ? A[L] = d : A[L] = p[a[d >>> 24]] ^ g[a[d >>> 16 & 255]] ^ _[a[d >>> 8 & 255]] ^ S[a[d & 255]];
              }
            }
          },
          encryptBlock: function(d, x) {
            this._doCryptBlock(d, x, this._keySchedule, s, c, l, u, a);
          },
          decryptBlock: function(d, x) {
            var m = d[x + 1];
            d[x + 1] = d[x + 3], d[x + 3] = m, this._doCryptBlock(d, x, this._invKeySchedule, p, g, _, S, h);
            var m = d[x + 1];
            d[x + 1] = d[x + 3], d[x + 3] = m;
          },
          _doCryptBlock: function(d, x, m, E, B, N, I, w) {
            for (var A = this._nRounds, L = d[x] ^ m[0], O = d[x + 1] ^ m[1], M = d[x + 2] ^ m[2], P = d[x + 3] ^ m[3], z = 4, Y = 1; Y < A; Y++) {
              var X = E[L >>> 24] ^ B[O >>> 16 & 255] ^ N[M >>> 8 & 255] ^ I[P & 255] ^ m[z++], Q = E[O >>> 24] ^ B[M >>> 16 & 255] ^ N[P >>> 8 & 255] ^ I[L & 255] ^ m[z++], J = E[M >>> 24] ^ B[P >>> 16 & 255] ^ N[L >>> 8 & 255] ^ I[O & 255] ^ m[z++], H = E[P >>> 24] ^ B[L >>> 16 & 255] ^ N[O >>> 8 & 255] ^ I[M & 255] ^ m[z++];
              L = X, O = Q, M = J, P = H;
            }
            var X = (w[L >>> 24] << 24 | w[O >>> 16 & 255] << 16 | w[M >>> 8 & 255] << 8 | w[P & 255]) ^ m[z++], Q = (w[O >>> 24] << 24 | w[M >>> 16 & 255] << 16 | w[P >>> 8 & 255] << 8 | w[L & 255]) ^ m[z++], J = (w[M >>> 24] << 24 | w[P >>> 16 & 255] << 16 | w[L >>> 8 & 255] << 8 | w[O & 255]) ^ m[z++], H = (w[P >>> 24] << 24 | w[L >>> 16 & 255] << 16 | w[O >>> 8 & 255] << 8 | w[M & 255]) ^ m[z++];
            d[x] = X, d[x + 1] = Q, d[x + 2] = J, d[x + 3] = H;
          },
          keySize: 256 / 32
        });
        n.AES = o._createHelper(y);
      }(), t.AES;
    });
  }(Mo)), gr;
}
var mr = {}, Fo = {
  get exports() {
    return mr;
  },
  set exports(e) {
    mr = e;
  }
}, j0;
function qo() {
  return j0 || (j0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), ot(), st(), at(), ye());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.WordArray, f = i.BlockCipher, a = n.algo, h = [
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
        ], c = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], l = [
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
        ], u = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], p = a.DES = f.extend({
          _doReset: function() {
            for (var T = this._key, y = T.words, d = [], x = 0; x < 56; x++) {
              var m = h[x] - 1;
              d[x] = y[m >>> 5] >>> 31 - m % 32 & 1;
            }
            for (var E = this._subKeys = [], B = 0; B < 16; B++) {
              for (var N = E[B] = [], I = c[B], x = 0; x < 24; x++)
                N[x / 6 | 0] |= d[(s[x] - 1 + I) % 28] << 31 - x % 6, N[4 + (x / 6 | 0)] |= d[28 + (s[x + 24] - 1 + I) % 28] << 31 - x % 6;
              N[0] = N[0] << 1 | N[0] >>> 31;
              for (var x = 1; x < 7; x++)
                N[x] = N[x] >>> (x - 1) * 4 + 3;
              N[7] = N[7] << 5 | N[7] >>> 27;
            }
            for (var w = this._invSubKeys = [], x = 0; x < 16; x++)
              w[x] = E[15 - x];
          },
          encryptBlock: function(T, y) {
            this._doCryptBlock(T, y, this._subKeys);
          },
          decryptBlock: function(T, y) {
            this._doCryptBlock(T, y, this._invSubKeys);
          },
          _doCryptBlock: function(T, y, d) {
            this._lBlock = T[y], this._rBlock = T[y + 1], g.call(this, 4, 252645135), g.call(this, 16, 65535), _.call(this, 2, 858993459), _.call(this, 8, 16711935), g.call(this, 1, 1431655765);
            for (var x = 0; x < 16; x++) {
              for (var m = d[x], E = this._lBlock, B = this._rBlock, N = 0, I = 0; I < 8; I++)
                N |= l[I][((B ^ m[I]) & u[I]) >>> 0];
              this._lBlock = B, this._rBlock = E ^ N;
            }
            var w = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = w, g.call(this, 1, 1431655765), _.call(this, 8, 16711935), _.call(this, 2, 858993459), g.call(this, 16, 65535), g.call(this, 4, 252645135), T[y] = this._lBlock, T[y + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function g(T, y) {
          var d = (this._lBlock >>> T ^ this._rBlock) & y;
          this._rBlock ^= d, this._lBlock ^= d << T;
        }
        function _(T, y) {
          var d = (this._rBlock >>> T ^ this._lBlock) & y;
          this._lBlock ^= d, this._rBlock ^= d << T;
        }
        n.DES = f._createHelper(p);
        var S = a.TripleDES = f.extend({
          _doReset: function() {
            var T = this._key, y = T.words;
            if (y.length !== 2 && y.length !== 4 && y.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var d = y.slice(0, 2), x = y.length < 4 ? y.slice(0, 2) : y.slice(2, 4), m = y.length < 6 ? y.slice(0, 2) : y.slice(4, 6);
            this._des1 = p.createEncryptor(o.create(d)), this._des2 = p.createEncryptor(o.create(x)), this._des3 = p.createEncryptor(o.create(m));
          },
          encryptBlock: function(T, y) {
            this._des1.encryptBlock(T, y), this._des2.decryptBlock(T, y), this._des3.encryptBlock(T, y);
          },
          decryptBlock: function(T, y) {
            this._des3.decryptBlock(T, y), this._des2.encryptBlock(T, y), this._des1.decryptBlock(T, y);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        n.TripleDES = f._createHelper(S);
      }(), t.TripleDES;
    });
  }(Fo)), mr;
}
var yr = {}, zo = {
  get exports() {
    return yr;
  },
  set exports(e) {
    yr = e;
  }
}, J0;
function $o() {
  return J0 || (J0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), ot(), st(), at(), ye());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.StreamCipher, f = n.algo, a = f.RC4 = o.extend({
          _doReset: function() {
            for (var c = this._key, l = c.words, u = c.sigBytes, p = this._S = [], g = 0; g < 256; g++)
              p[g] = g;
            for (var g = 0, _ = 0; g < 256; g++) {
              var S = g % u, T = l[S >>> 2] >>> 24 - S % 4 * 8 & 255;
              _ = (_ + p[g] + T) % 256;
              var y = p[g];
              p[g] = p[_], p[_] = y;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(c, l) {
            c[l] ^= h.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function h() {
          for (var c = this._S, l = this._i, u = this._j, p = 0, g = 0; g < 4; g++) {
            l = (l + 1) % 256, u = (u + c[l]) % 256;
            var _ = c[l];
            c[l] = c[u], c[u] = _, p |= c[(c[l] + c[u]) % 256] << 24 - g * 8;
          }
          return this._i = l, this._j = u, p;
        }
        n.RC4 = o._createHelper(a);
        var s = f.RC4Drop = a.extend({
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
            for (var c = this.cfg.drop; c > 0; c--)
              h.call(this);
          }
        });
        n.RC4Drop = o._createHelper(s);
      }(), t.RC4;
    });
  }(zo)), yr;
}
var _r = {}, Wo = {
  get exports() {
    return _r;
  },
  set exports(e) {
    _r = e;
  }
}, en;
function Uo() {
  return en || (en = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), ot(), st(), at(), ye());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.StreamCipher, f = n.algo, a = [], h = [], s = [], c = f.Rabbit = o.extend({
          _doReset: function() {
            for (var u = this._key.words, p = this.cfg.iv, g = 0; g < 4; g++)
              u[g] = (u[g] << 8 | u[g] >>> 24) & 16711935 | (u[g] << 24 | u[g] >>> 8) & 4278255360;
            var _ = this._X = [
              u[0],
              u[3] << 16 | u[2] >>> 16,
              u[1],
              u[0] << 16 | u[3] >>> 16,
              u[2],
              u[1] << 16 | u[0] >>> 16,
              u[3],
              u[2] << 16 | u[1] >>> 16
            ], S = this._C = [
              u[2] << 16 | u[2] >>> 16,
              u[0] & 4294901760 | u[1] & 65535,
              u[3] << 16 | u[3] >>> 16,
              u[1] & 4294901760 | u[2] & 65535,
              u[0] << 16 | u[0] >>> 16,
              u[2] & 4294901760 | u[3] & 65535,
              u[1] << 16 | u[1] >>> 16,
              u[3] & 4294901760 | u[0] & 65535
            ];
            this._b = 0;
            for (var g = 0; g < 4; g++)
              l.call(this);
            for (var g = 0; g < 8; g++)
              S[g] ^= _[g + 4 & 7];
            if (p) {
              var T = p.words, y = T[0], d = T[1], x = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, m = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, E = x >>> 16 | m & 4294901760, B = m << 16 | x & 65535;
              S[0] ^= x, S[1] ^= E, S[2] ^= m, S[3] ^= B, S[4] ^= x, S[5] ^= E, S[6] ^= m, S[7] ^= B;
              for (var g = 0; g < 4; g++)
                l.call(this);
            }
          },
          _doProcessBlock: function(u, p) {
            var g = this._X;
            l.call(this), a[0] = g[0] ^ g[5] >>> 16 ^ g[3] << 16, a[1] = g[2] ^ g[7] >>> 16 ^ g[5] << 16, a[2] = g[4] ^ g[1] >>> 16 ^ g[7] << 16, a[3] = g[6] ^ g[3] >>> 16 ^ g[1] << 16;
            for (var _ = 0; _ < 4; _++)
              a[_] = (a[_] << 8 | a[_] >>> 24) & 16711935 | (a[_] << 24 | a[_] >>> 8) & 4278255360, u[p + _] ^= a[_];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function l() {
          for (var u = this._X, p = this._C, g = 0; g < 8; g++)
            h[g] = p[g];
          p[0] = p[0] + 1295307597 + this._b | 0, p[1] = p[1] + 3545052371 + (p[0] >>> 0 < h[0] >>> 0 ? 1 : 0) | 0, p[2] = p[2] + 886263092 + (p[1] >>> 0 < h[1] >>> 0 ? 1 : 0) | 0, p[3] = p[3] + 1295307597 + (p[2] >>> 0 < h[2] >>> 0 ? 1 : 0) | 0, p[4] = p[4] + 3545052371 + (p[3] >>> 0 < h[3] >>> 0 ? 1 : 0) | 0, p[5] = p[5] + 886263092 + (p[4] >>> 0 < h[4] >>> 0 ? 1 : 0) | 0, p[6] = p[6] + 1295307597 + (p[5] >>> 0 < h[5] >>> 0 ? 1 : 0) | 0, p[7] = p[7] + 3545052371 + (p[6] >>> 0 < h[6] >>> 0 ? 1 : 0) | 0, this._b = p[7] >>> 0 < h[7] >>> 0 ? 1 : 0;
          for (var g = 0; g < 8; g++) {
            var _ = u[g] + p[g], S = _ & 65535, T = _ >>> 16, y = ((S * S >>> 17) + S * T >>> 15) + T * T, d = ((_ & 4294901760) * _ | 0) + ((_ & 65535) * _ | 0);
            s[g] = y ^ d;
          }
          u[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, u[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, u[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, u[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, u[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, u[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, u[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, u[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0;
        }
        n.Rabbit = o._createHelper(c);
      }(), t.Rabbit;
    });
  }(Wo)), _r;
}
var wr = {}, Yo = {
  get exports() {
    return wr;
  },
  set exports(e) {
    wr = e;
  }
}, tn;
function Vo() {
  return tn || (tn = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(fe(), ot(), st(), at(), ye());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.StreamCipher, f = n.algo, a = [], h = [], s = [], c = f.RabbitLegacy = o.extend({
          _doReset: function() {
            var u = this._key.words, p = this.cfg.iv, g = this._X = [
              u[0],
              u[3] << 16 | u[2] >>> 16,
              u[1],
              u[0] << 16 | u[3] >>> 16,
              u[2],
              u[1] << 16 | u[0] >>> 16,
              u[3],
              u[2] << 16 | u[1] >>> 16
            ], _ = this._C = [
              u[2] << 16 | u[2] >>> 16,
              u[0] & 4294901760 | u[1] & 65535,
              u[3] << 16 | u[3] >>> 16,
              u[1] & 4294901760 | u[2] & 65535,
              u[0] << 16 | u[0] >>> 16,
              u[2] & 4294901760 | u[3] & 65535,
              u[1] << 16 | u[1] >>> 16,
              u[3] & 4294901760 | u[0] & 65535
            ];
            this._b = 0;
            for (var S = 0; S < 4; S++)
              l.call(this);
            for (var S = 0; S < 8; S++)
              _[S] ^= g[S + 4 & 7];
            if (p) {
              var T = p.words, y = T[0], d = T[1], x = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, m = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, E = x >>> 16 | m & 4294901760, B = m << 16 | x & 65535;
              _[0] ^= x, _[1] ^= E, _[2] ^= m, _[3] ^= B, _[4] ^= x, _[5] ^= E, _[6] ^= m, _[7] ^= B;
              for (var S = 0; S < 4; S++)
                l.call(this);
            }
          },
          _doProcessBlock: function(u, p) {
            var g = this._X;
            l.call(this), a[0] = g[0] ^ g[5] >>> 16 ^ g[3] << 16, a[1] = g[2] ^ g[7] >>> 16 ^ g[5] << 16, a[2] = g[4] ^ g[1] >>> 16 ^ g[7] << 16, a[3] = g[6] ^ g[3] >>> 16 ^ g[1] << 16;
            for (var _ = 0; _ < 4; _++)
              a[_] = (a[_] << 8 | a[_] >>> 24) & 16711935 | (a[_] << 24 | a[_] >>> 8) & 4278255360, u[p + _] ^= a[_];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function l() {
          for (var u = this._X, p = this._C, g = 0; g < 8; g++)
            h[g] = p[g];
          p[0] = p[0] + 1295307597 + this._b | 0, p[1] = p[1] + 3545052371 + (p[0] >>> 0 < h[0] >>> 0 ? 1 : 0) | 0, p[2] = p[2] + 886263092 + (p[1] >>> 0 < h[1] >>> 0 ? 1 : 0) | 0, p[3] = p[3] + 1295307597 + (p[2] >>> 0 < h[2] >>> 0 ? 1 : 0) | 0, p[4] = p[4] + 3545052371 + (p[3] >>> 0 < h[3] >>> 0 ? 1 : 0) | 0, p[5] = p[5] + 886263092 + (p[4] >>> 0 < h[4] >>> 0 ? 1 : 0) | 0, p[6] = p[6] + 1295307597 + (p[5] >>> 0 < h[5] >>> 0 ? 1 : 0) | 0, p[7] = p[7] + 3545052371 + (p[6] >>> 0 < h[6] >>> 0 ? 1 : 0) | 0, this._b = p[7] >>> 0 < h[7] >>> 0 ? 1 : 0;
          for (var g = 0; g < 8; g++) {
            var _ = u[g] + p[g], S = _ & 65535, T = _ >>> 16, y = ((S * S >>> 17) + S * T >>> 15) + T * T, d = ((_ & 4294901760) * _ | 0) + ((_ & 65535) * _ | 0);
            s[g] = y ^ d;
          }
          u[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, u[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, u[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, u[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, u[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, u[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, u[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, u[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0;
        }
        n.RabbitLegacy = o._createHelper(c);
      }(), t.RabbitLegacy;
    });
  }(Yo)), wr;
}
(function(e, r) {
  (function(t, n, i) {
    e.exports = n(fe(), Ar(), Ki(), Gi(), ot(), ji(), st(), a0(), wn(), no(), En(), so(), fo(), uo(), f0(), vo(), at(), ye(), go(), yo(), wo(), So(), Sn(), ko(), Ro(), Do(), Oo(), Lo(), Ho(), Cn(), qo(), $o(), Uo(), Vo());
  })(re, function(t) {
    return t;
  });
})(qi);
var rn = {}, Ko = {
  get exports() {
    return rn;
  },
  set exports(e) {
    rn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(re, function() {
    var t = 1e3, n = 6e4, i = 36e5, o = "millisecond", f = "second", a = "minute", h = "hour", s = "day", c = "week", l = "month", u = "quarter", p = "year", g = "date", _ = "Invalid Date", S = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, T = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(O) {
      var M = ["th", "st", "nd", "rd"], P = O % 100;
      return "[" + O + (M[(P - 20) % 10] || M[P] || M[0]) + "]";
    } }, d = function(O, M, P) {
      var z = String(O);
      return !z || z.length >= M ? O : "" + Array(M + 1 - z.length).join(P) + O;
    }, x = { s: d, z: function(O) {
      var M = -O.utcOffset(), P = Math.abs(M), z = Math.floor(P / 60), Y = P % 60;
      return (M <= 0 ? "+" : "-") + d(z, 2, "0") + ":" + d(Y, 2, "0");
    }, m: function O(M, P) {
      if (M.date() < P.date())
        return -O(P, M);
      var z = 12 * (P.year() - M.year()) + (P.month() - M.month()), Y = M.clone().add(z, l), X = P - Y < 0, Q = M.clone().add(z + (X ? -1 : 1), l);
      return +(-(z + (P - Y) / (X ? Y - Q : Q - Y)) || 0);
    }, a: function(O) {
      return O < 0 ? Math.ceil(O) || 0 : Math.floor(O);
    }, p: function(O) {
      return { M: l, y: p, w: c, d: s, D: g, h, m: a, s: f, ms: o, Q: u }[O] || String(O || "").toLowerCase().replace(/s$/, "");
    }, u: function(O) {
      return O === void 0;
    } }, m = "en", E = {};
    E[m] = y;
    var B = function(O) {
      return O instanceof A;
    }, N = function O(M, P, z) {
      var Y;
      if (!M)
        return m;
      if (typeof M == "string") {
        var X = M.toLowerCase();
        E[X] && (Y = X), P && (E[X] = P, Y = X);
        var Q = M.split("-");
        if (!Y && Q.length > 1)
          return O(Q[0]);
      } else {
        var J = M.name;
        E[J] = M, Y = J;
      }
      return !z && Y && (m = Y), Y || !z && m;
    }, I = function(O, M) {
      if (B(O))
        return O.clone();
      var P = typeof M == "object" ? M : {};
      return P.date = O, P.args = arguments, new A(P);
    }, w = x;
    w.l = N, w.i = B, w.w = function(O, M) {
      return I(O, { locale: M.$L, utc: M.$u, x: M.$x, $offset: M.$offset });
    };
    var A = function() {
      function O(P) {
        this.$L = N(P.locale, null, !0), this.parse(P);
      }
      var M = O.prototype;
      return M.parse = function(P) {
        this.$d = function(z) {
          var Y = z.date, X = z.utc;
          if (Y === null)
            return /* @__PURE__ */ new Date(NaN);
          if (w.u(Y))
            return /* @__PURE__ */ new Date();
          if (Y instanceof Date)
            return new Date(Y);
          if (typeof Y == "string" && !/Z$/i.test(Y)) {
            var Q = Y.match(S);
            if (Q) {
              var J = Q[2] - 1 || 0, H = (Q[7] || "0").substring(0, 3);
              return X ? new Date(Date.UTC(Q[1], J, Q[3] || 1, Q[4] || 0, Q[5] || 0, Q[6] || 0, H)) : new Date(Q[1], J, Q[3] || 1, Q[4] || 0, Q[5] || 0, Q[6] || 0, H);
            }
          }
          return new Date(Y);
        }(P), this.$x = P.x || {}, this.init();
      }, M.init = function() {
        var P = this.$d;
        this.$y = P.getFullYear(), this.$M = P.getMonth(), this.$D = P.getDate(), this.$W = P.getDay(), this.$H = P.getHours(), this.$m = P.getMinutes(), this.$s = P.getSeconds(), this.$ms = P.getMilliseconds();
      }, M.$utils = function() {
        return w;
      }, M.isValid = function() {
        return this.$d.toString() !== _;
      }, M.isSame = function(P, z) {
        var Y = I(P);
        return this.startOf(z) <= Y && Y <= this.endOf(z);
      }, M.isAfter = function(P, z) {
        return I(P) < this.startOf(z);
      }, M.isBefore = function(P, z) {
        return this.endOf(z) < I(P);
      }, M.$g = function(P, z, Y) {
        return w.u(P) ? this[z] : this.set(Y, P);
      }, M.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, M.valueOf = function() {
        return this.$d.getTime();
      }, M.startOf = function(P, z) {
        var Y = this, X = !!w.u(z) || z, Q = w.p(P), J = function(ne, pe) {
          var _e = w.w(Y.$u ? Date.UTC(Y.$y, pe, ne) : new Date(Y.$y, pe, ne), Y);
          return X ? _e : _e.endOf(s);
        }, H = function(ne, pe) {
          return w.w(Y.toDate()[ne].apply(Y.toDate("s"), (X ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(pe)), Y);
        }, F = this.$W, $ = this.$M, W = this.$D, ae = "set" + (this.$u ? "UTC" : "");
        switch (Q) {
          case p:
            return X ? J(1, 0) : J(31, 11);
          case l:
            return X ? J(1, $) : J(0, $ + 1);
          case c:
            var ue = this.$locale().weekStart || 0, ve = (F < ue ? F + 7 : F) - ue;
            return J(X ? W - ve : W + (6 - ve), $);
          case s:
          case g:
            return H(ae + "Hours", 0);
          case h:
            return H(ae + "Minutes", 1);
          case a:
            return H(ae + "Seconds", 2);
          case f:
            return H(ae + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, M.endOf = function(P) {
        return this.startOf(P, !1);
      }, M.$set = function(P, z) {
        var Y, X = w.p(P), Q = "set" + (this.$u ? "UTC" : ""), J = (Y = {}, Y[s] = Q + "Date", Y[g] = Q + "Date", Y[l] = Q + "Month", Y[p] = Q + "FullYear", Y[h] = Q + "Hours", Y[a] = Q + "Minutes", Y[f] = Q + "Seconds", Y[o] = Q + "Milliseconds", Y)[X], H = X === s ? this.$D + (z - this.$W) : z;
        if (X === l || X === p) {
          var F = this.clone().set(g, 1);
          F.$d[J](H), F.init(), this.$d = F.set(g, Math.min(this.$D, F.daysInMonth())).$d;
        } else
          J && this.$d[J](H);
        return this.init(), this;
      }, M.set = function(P, z) {
        return this.clone().$set(P, z);
      }, M.get = function(P) {
        return this[w.p(P)]();
      }, M.add = function(P, z) {
        var Y, X = this;
        P = Number(P);
        var Q = w.p(z), J = function($) {
          var W = I(X);
          return w.w(W.date(W.date() + Math.round($ * P)), X);
        };
        if (Q === l)
          return this.set(l, this.$M + P);
        if (Q === p)
          return this.set(p, this.$y + P);
        if (Q === s)
          return J(1);
        if (Q === c)
          return J(7);
        var H = (Y = {}, Y[a] = n, Y[h] = i, Y[f] = t, Y)[Q] || 1, F = this.$d.getTime() + P * H;
        return w.w(F, this);
      }, M.subtract = function(P, z) {
        return this.add(-1 * P, z);
      }, M.format = function(P) {
        var z = this, Y = this.$locale();
        if (!this.isValid())
          return Y.invalidDate || _;
        var X = P || "YYYY-MM-DDTHH:mm:ssZ", Q = w.z(this), J = this.$H, H = this.$m, F = this.$M, $ = Y.weekdays, W = Y.months, ae = function(pe, _e, Ue, De) {
          return pe && (pe[_e] || pe(z, X)) || Ue[_e].slice(0, De);
        }, ue = function(pe) {
          return w.s(J % 12 || 12, pe, "0");
        }, ve = Y.meridiem || function(pe, _e, Ue) {
          var De = pe < 12 ? "AM" : "PM";
          return Ue ? De.toLowerCase() : De;
        }, ne = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: F + 1, MM: w.s(F + 1, 2, "0"), MMM: ae(Y.monthsShort, F, W, 3), MMMM: ae(W, F), D: this.$D, DD: w.s(this.$D, 2, "0"), d: String(this.$W), dd: ae(Y.weekdaysMin, this.$W, $, 2), ddd: ae(Y.weekdaysShort, this.$W, $, 3), dddd: $[this.$W], H: String(J), HH: w.s(J, 2, "0"), h: ue(1), hh: ue(2), a: ve(J, H, !0), A: ve(J, H, !1), m: String(H), mm: w.s(H, 2, "0"), s: String(this.$s), ss: w.s(this.$s, 2, "0"), SSS: w.s(this.$ms, 3, "0"), Z: Q };
        return X.replace(T, function(pe, _e) {
          return _e || ne[pe] || Q.replace(":", "");
        });
      }, M.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, M.diff = function(P, z, Y) {
        var X, Q = w.p(z), J = I(P), H = (J.utcOffset() - this.utcOffset()) * n, F = this - J, $ = w.m(this, J);
        return $ = (X = {}, X[p] = $ / 12, X[l] = $, X[u] = $ / 3, X[c] = (F - H) / 6048e5, X[s] = (F - H) / 864e5, X[h] = F / i, X[a] = F / n, X[f] = F / t, X)[Q] || F, Y ? $ : w.a($);
      }, M.daysInMonth = function() {
        return this.endOf(l).$D;
      }, M.$locale = function() {
        return E[this.$L];
      }, M.locale = function(P, z) {
        if (!P)
          return this.$L;
        var Y = this.clone(), X = N(P, z, !0);
        return X && (Y.$L = X), Y;
      }, M.clone = function() {
        return w.w(this.$d, this);
      }, M.toDate = function() {
        return new Date(this.valueOf());
      }, M.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, M.toISOString = function() {
        return this.$d.toISOString();
      }, M.toString = function() {
        return this.$d.toUTCString();
      }, O;
    }(), L = A.prototype;
    return I.prototype = L, [["$ms", o], ["$s", f], ["$m", a], ["$H", h], ["$W", s], ["$M", l], ["$y", p], ["$D", g]].forEach(function(O) {
      L[O[1]] = function(M) {
        return this.$g(M, O[0], O[1]);
      };
    }), I.extend = function(O, M) {
      return O.$i || (O(M, A, I), O.$i = !0), I;
    }, I.locale = N, I.isDayjs = B, I.unix = function(O) {
      return I(1e3 * O);
    }, I.en = E[m], I.Ls = E, I.p = {}, I;
  });
})(Ko);
var Bn = function() {
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
          var f = o[i];
          t.call(n, f[1], f[0]);
        }
      }, r;
    }()
  );
}(), Xr = typeof window < "u" && typeof document < "u" && window.document === document, Er = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Zo = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Er) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Go = 2;
function Xo(e, r) {
  var t = !1, n = !1, i = 0;
  function o() {
    t && (t = !1, e()), n && a();
  }
  function f() {
    Zo(o);
  }
  function a() {
    var h = Date.now();
    if (t) {
      if (h - i < Go)
        return;
      n = !0;
    } else
      t = !0, n = !1, setTimeout(f, r);
    i = h;
  }
  return a;
}
var Qo = 20, jo = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Jo = typeof MutationObserver < "u", es = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Xo(this.refresh.bind(this), Qo);
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
      !Xr || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Jo ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Xr || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(r) {
      var t = r.propertyName, n = t === void 0 ? "" : t, i = jo.some(function(o) {
        return !!~n.indexOf(o);
      });
      i && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), kn = function(e, r) {
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
}, lt = function(e) {
  var r = e && e.ownerDocument && e.ownerDocument.defaultView;
  return r || Er;
}, An = Rr(0, 0, 0, 0);
function Sr(e) {
  return parseFloat(e) || 0;
}
function nn(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  return r.reduce(function(n, i) {
    var o = e["border-" + i + "-width"];
    return n + Sr(o);
  }, 0);
}
function ts(e) {
  for (var r = ["top", "right", "bottom", "left"], t = {}, n = 0, i = r; n < i.length; n++) {
    var o = i[n], f = e["padding-" + o];
    t[o] = Sr(f);
  }
  return t;
}
function rs(e) {
  var r = e.getBBox();
  return Rr(0, 0, r.width, r.height);
}
function ns(e) {
  var r = e.clientWidth, t = e.clientHeight;
  if (!r && !t)
    return An;
  var n = lt(e).getComputedStyle(e), i = ts(n), o = i.left + i.right, f = i.top + i.bottom, a = Sr(n.width), h = Sr(n.height);
  if (n.boxSizing === "border-box" && (Math.round(a + o) !== r && (a -= nn(n, "left", "right") + o), Math.round(h + f) !== t && (h -= nn(n, "top", "bottom") + f)), !os(e)) {
    var s = Math.round(a + o) - r, c = Math.round(h + f) - t;
    Math.abs(s) !== 1 && (a -= s), Math.abs(c) !== 1 && (h -= c);
  }
  return Rr(i.left, i.top, a, h);
}
var is = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof lt(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof lt(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function os(e) {
  return e === lt(e).document.documentElement;
}
function ss(e) {
  return Xr ? is(e) ? rs(e) : ns(e) : An;
}
function as(e) {
  var r = e.x, t = e.y, n = e.width, i = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, f = Object.create(o.prototype);
  return kn(f, {
    x: r,
    y: t,
    width: n,
    height: i,
    top: t,
    right: r + n,
    bottom: i + t,
    left: r
  }), f;
}
function Rr(e, r, t, n) {
  return { x: e, y: r, width: t, height: n };
}
var fs = (
  /** @class */
  function() {
    function e(r) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Rr(0, 0, 0, 0), this.target = r;
    }
    return e.prototype.isActive = function() {
      var r = ss(this.target);
      return this.contentRect_ = r, r.width !== this.broadcastWidth || r.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var r = this.contentRect_;
      return this.broadcastWidth = r.width, this.broadcastHeight = r.height, r;
    }, e;
  }()
), cs = (
  /** @class */
  function() {
    function e(r, t) {
      var n = as(t);
      kn(this, { target: r, contentRect: n });
    }
    return e;
  }()
), us = (
  /** @class */
  function() {
    function e(r, t, n) {
      if (this.activeObservations_ = [], this.observations_ = new Bn(), typeof r != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = r, this.controller_ = t, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(r) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(r instanceof lt(r).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var t = this.observations_;
        t.has(r) || (t.set(r, new fs(r)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(r) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(r instanceof lt(r).Element))
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
          return new cs(n.target, n.broadcastRect());
        });
        this.callback_.call(r, t, r), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Rn = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Bn(), Nn = (
  /** @class */
  function() {
    function e(r) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var t = es.getInstance(), n = new us(r, t, this);
      Rn.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Nn.prototype[e] = function() {
    var r;
    return (r = Rn.get(this))[e].apply(r, arguments);
  };
});
(function() {
  return typeof Er.ResizeObserver < "u" ? Er.ResizeObserver : Nn;
})();
Cn();
ot();
var on = {}, hs = {
  get exports() {
    return on;
  },
  set exports(e) {
    on = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(fe());
  })(re, function(t) {
    return t.enc.Utf8;
  });
})(hs);
st();
Sn();
var sn = {}, ls = {
  get exports() {
    return sn;
  },
  set exports(e) {
    sn = e;
  }
};
(function(e, r) {
  (function(t, n, i) {
    e.exports = n(fe(), ye());
  })(re, function(t) {
    return t.pad.Pkcs7;
  });
})(ls);
function ds(e) {
  var r = [], t = "";
  for (t in e)
    r.push(t);
  return r;
}
function an(e) {
  return e = JSON.stringify(e), !(typeof e != "string" || !/^\{[\s\S]*\}$/.test(e));
}
function vs(e) {
  return e instanceof Array;
}
function ps(e) {
  return Array.prototype.slice.call(e);
}
function Bt() {
  if (!(this instanceof Bt))
    return new Bt();
}
Bt.prototype = {
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
    if (an(e))
      for (const n in e)
        this.set(n, e[n], r, t);
    else if (typeof e == "string") {
      const n = an(t) ? t : { expires: t }, i = n.path !== void 0 ? `;path=${n.path};path=/` : ";path=/", o = n.domain ? `;domain=${n.domain}` : "", f = n.secure ? ";secure" : "";
      let a = n.expires !== void 0 ? n.expires : "";
      typeof a == "string" && a !== "" ? a = new Date(a) : typeof a == "number" && (a = new Date(+/* @__PURE__ */ new Date() + 1e3 * 60 * 60 * 24 * a)), a !== "" && "toGMTString" in a && (a = `;expires=${a.toGMTString()}`);
      const h = n.sameSite ? `;SameSite=${n.sameSite}` : "";
      document.cookie = `${e}=${encodeURI(r) + a + i + o + f + h}`;
    }
  },
  remove: function(e) {
    e = vs(e) ? e : ps(arguments);
    for (var r = 0, t = e.length; r < t; r++)
      this.set(e[r], "", -1);
    return e;
  },
  clear: function(e) {
    return e ? this.remove(e) : this.remove(ds(this.all()));
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
for (const e in Bt.prototype)
  Bt.prototype[e];
var fn = {}, xs = {
  get exports() {
    return fn;
  },
  set exports(e) {
    fn = e;
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
      function f(s, c) {
        if (!i[s]) {
          if (!n[s]) {
            var l = typeof St == "function" && St;
            if (!c && l)
              return l(s, !0);
            if (a)
              return a(s, !0);
            var u = new Error("Cannot find module '" + s + "'");
            throw u.code = "MODULE_NOT_FOUND", u;
          }
          var p = i[s] = { exports: {} };
          n[s][0].call(p.exports, function(g) {
            var _ = n[s][1][g];
            return f(_ || g);
          }, p, p.exports, t, n, i, o);
        }
        return i[s].exports;
      }
      for (var a = typeof St == "function" && St, h = 0; h < o.length; h++)
        f(o[h]);
      return f;
    }({ 1: [function(t, n, i) {
      (function(o) {
        var f = o.MutationObserver || o.WebKitMutationObserver, a;
        if (f) {
          var h = 0, s = new f(g), c = o.document.createTextNode("");
          s.observe(c, {
            characterData: !0
          }), a = function() {
            c.data = h = ++h % 2;
          };
        } else if (!o.setImmediate && typeof o.MessageChannel < "u") {
          var l = new o.MessageChannel();
          l.port1.onmessage = g, a = function() {
            l.port2.postMessage(0);
          };
        } else
          "document" in o && "onreadystatechange" in o.document.createElement("script") ? a = function() {
            var S = o.document.createElement("script");
            S.onreadystatechange = function() {
              g(), S.onreadystatechange = null, S.parentNode.removeChild(S), S = null;
            }, o.document.documentElement.appendChild(S);
          } : a = function() {
            setTimeout(g, 0);
          };
        var u, p = [];
        function g() {
          u = !0;
          for (var S, T, y = p.length; y; ) {
            for (T = p, p = [], S = -1; ++S < y; )
              T[S]();
            y = p.length;
          }
          u = !1;
        }
        n.exports = _;
        function _(S) {
          p.push(S) === 1 && !u && a();
        }
      }).call(this, typeof re < "u" ? re : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(t, n, i) {
      var o = t(1);
      function f() {
      }
      var a = {}, h = ["REJECTED"], s = ["FULFILLED"], c = ["PENDING"];
      n.exports = l;
      function l(m) {
        if (typeof m != "function")
          throw new TypeError("resolver must be a function");
        this.state = c, this.queue = [], this.outcome = void 0, m !== f && _(this, m);
      }
      l.prototype.catch = function(m) {
        return this.then(null, m);
      }, l.prototype.then = function(m, E) {
        if (typeof m != "function" && this.state === s || typeof E != "function" && this.state === h)
          return this;
        var B = new this.constructor(f);
        if (this.state !== c) {
          var N = this.state === s ? m : E;
          p(B, N, this.outcome);
        } else
          this.queue.push(new u(B, m, E));
        return B;
      };
      function u(m, E, B) {
        this.promise = m, typeof E == "function" && (this.onFulfilled = E, this.callFulfilled = this.otherCallFulfilled), typeof B == "function" && (this.onRejected = B, this.callRejected = this.otherCallRejected);
      }
      u.prototype.callFulfilled = function(m) {
        a.resolve(this.promise, m);
      }, u.prototype.otherCallFulfilled = function(m) {
        p(this.promise, this.onFulfilled, m);
      }, u.prototype.callRejected = function(m) {
        a.reject(this.promise, m);
      }, u.prototype.otherCallRejected = function(m) {
        p(this.promise, this.onRejected, m);
      };
      function p(m, E, B) {
        o(function() {
          var N;
          try {
            N = E(B);
          } catch (I) {
            return a.reject(m, I);
          }
          N === m ? a.reject(m, new TypeError("Cannot resolve promise with itself")) : a.resolve(m, N);
        });
      }
      a.resolve = function(m, E) {
        var B = S(g, E);
        if (B.status === "error")
          return a.reject(m, B.value);
        var N = B.value;
        if (N)
          _(m, N);
        else {
          m.state = s, m.outcome = E;
          for (var I = -1, w = m.queue.length; ++I < w; )
            m.queue[I].callFulfilled(E);
        }
        return m;
      }, a.reject = function(m, E) {
        m.state = h, m.outcome = E;
        for (var B = -1, N = m.queue.length; ++B < N; )
          m.queue[B].callRejected(E);
        return m;
      };
      function g(m) {
        var E = m && m.then;
        if (m && (typeof m == "object" || typeof m == "function") && typeof E == "function")
          return function() {
            E.apply(m, arguments);
          };
      }
      function _(m, E) {
        var B = !1;
        function N(L) {
          B || (B = !0, a.reject(m, L));
        }
        function I(L) {
          B || (B = !0, a.resolve(m, L));
        }
        function w() {
          E(I, N);
        }
        var A = S(w);
        A.status === "error" && N(A.value);
      }
      function S(m, E) {
        var B = {};
        try {
          B.value = m(E), B.status = "success";
        } catch (N) {
          B.status = "error", B.value = N;
        }
        return B;
      }
      l.resolve = T;
      function T(m) {
        return m instanceof this ? m : a.resolve(new this(f), m);
      }
      l.reject = y;
      function y(m) {
        var E = new this(f);
        return a.reject(E, m);
      }
      l.all = d;
      function d(m) {
        var E = this;
        if (Object.prototype.toString.call(m) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var B = m.length, N = !1;
        if (!B)
          return this.resolve([]);
        for (var I = new Array(B), w = 0, A = -1, L = new this(f); ++A < B; )
          O(m[A], A);
        return L;
        function O(M, P) {
          E.resolve(M).then(z, function(Y) {
            N || (N = !0, a.reject(L, Y));
          });
          function z(Y) {
            I[P] = Y, ++w === B && !N && (N = !0, a.resolve(L, I));
          }
        }
      }
      l.race = x;
      function x(m) {
        var E = this;
        if (Object.prototype.toString.call(m) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var B = m.length, N = !1;
        if (!B)
          return this.resolve([]);
        for (var I = -1, w = new this(f); ++I < B; )
          A(m[I]);
        return w;
        function A(L) {
          E.resolve(L).then(function(O) {
            N || (N = !0, a.resolve(w, O));
          }, function(O) {
            N || (N = !0, a.reject(w, O));
          });
        }
      }
    }, { 1: 1 }], 3: [function(t, n, i) {
      (function(o) {
        typeof o.Promise != "function" && (o.Promise = t(2));
      }).call(this, typeof re < "u" ? re : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(t, n, i) {
      var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
        return typeof v;
      } : function(v) {
        return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
      };
      function f(v, C) {
        if (!(v instanceof C))
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
      var h = a();
      function s() {
        try {
          if (!h || !h.open)
            return !1;
          var v = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), C = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!v || C) && typeof indexedDB < "u" && // some outdated implementations of IDB that appear on Samsung
          // and HTC Android devices <4.4 are missing IDBKeyRange
          // See: https://github.com/mozilla/localForage/issues/128
          // See: https://github.com/mozilla/localForage/issues/272
          typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function c(v, C) {
        v = v || [], C = C || {};
        try {
          return new Blob(v, C);
        } catch (k) {
          if (k.name !== "TypeError")
            throw k;
          for (var b = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, R = new b(), D = 0; D < v.length; D += 1)
            R.append(v[D]);
          return R.getBlob(C.type);
        }
      }
      typeof Promise > "u" && t(3);
      var l = Promise;
      function u(v, C) {
        C && v.then(function(b) {
          C(null, b);
        }, function(b) {
          C(b);
        });
      }
      function p(v, C, b) {
        typeof C == "function" && v.then(C), typeof b == "function" && v.catch(b);
      }
      function g(v) {
        return typeof v != "string" && (console.warn(v + " used as a key, but it is not a string."), v = String(v)), v;
      }
      function _() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var S = "local-forage-detect-blob-support", T = void 0, y = {}, d = Object.prototype.toString, x = "readonly", m = "readwrite";
      function E(v) {
        for (var C = v.length, b = new ArrayBuffer(C), R = new Uint8Array(b), D = 0; D < C; D++)
          R[D] = v.charCodeAt(D);
        return b;
      }
      function B(v) {
        return new l(function(C) {
          var b = v.transaction(S, m), R = c([""]);
          b.objectStore(S).put(R, "key"), b.onabort = function(D) {
            D.preventDefault(), D.stopPropagation(), C(!1);
          }, b.oncomplete = function() {
            var D = navigator.userAgent.match(/Chrome\/(\d+)/), k = navigator.userAgent.match(/Edge\//);
            C(k || !D || parseInt(D[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function N(v) {
        return typeof T == "boolean" ? l.resolve(T) : B(v).then(function(C) {
          return T = C, T;
        });
      }
      function I(v) {
        var C = y[v.name], b = {};
        b.promise = new l(function(R, D) {
          b.resolve = R, b.reject = D;
        }), C.deferredOperations.push(b), C.dbReady ? C.dbReady = C.dbReady.then(function() {
          return b.promise;
        }) : C.dbReady = b.promise;
      }
      function w(v) {
        var C = y[v.name], b = C.deferredOperations.pop();
        if (b)
          return b.resolve(), b.promise;
      }
      function A(v, C) {
        var b = y[v.name], R = b.deferredOperations.pop();
        if (R)
          return R.reject(C), R.promise;
      }
      function L(v, C) {
        return new l(function(b, R) {
          if (y[v.name] = y[v.name] || F(), v.db)
            if (C)
              I(v), v.db.close();
            else
              return b(v.db);
          var D = [v.name];
          C && D.push(v.version);
          var k = h.open.apply(h, D);
          C && (k.onupgradeneeded = function(q) {
            var V = k.result;
            try {
              V.createObjectStore(v.storeName), q.oldVersion <= 1 && V.createObjectStore(S);
            } catch (K) {
              if (K.name === "ConstraintError")
                console.warn('The database "' + v.name + '" has been upgraded from version ' + q.oldVersion + " to version " + q.newVersion + ', but the storage "' + v.storeName + '" already exists.');
              else
                throw K;
            }
          }), k.onerror = function(q) {
            q.preventDefault(), R(k.error);
          }, k.onsuccess = function() {
            var q = k.result;
            q.onversionchange = function(V) {
              V.target.close();
            }, b(q), w(v);
          };
        });
      }
      function O(v) {
        return L(v, !1);
      }
      function M(v) {
        return L(v, !0);
      }
      function P(v, C) {
        if (!v.db)
          return !0;
        var b = !v.db.objectStoreNames.contains(v.storeName), R = v.version < v.db.version, D = v.version > v.db.version;
        if (R && (v.version !== C && console.warn('The database "' + v.name + `" can't be downgraded from version ` + v.db.version + " to version " + v.version + "."), v.version = v.db.version), D || b) {
          if (b) {
            var k = v.db.version + 1;
            k > v.version && (v.version = k);
          }
          return !0;
        }
        return !1;
      }
      function z(v) {
        return new l(function(C, b) {
          var R = new FileReader();
          R.onerror = b, R.onloadend = function(D) {
            var k = btoa(D.target.result || "");
            C({
              __local_forage_encoded_blob: !0,
              data: k,
              type: v.type
            });
          }, R.readAsBinaryString(v);
        });
      }
      function Y(v) {
        var C = E(atob(v.data));
        return c([C], { type: v.type });
      }
      function X(v) {
        return v && v.__local_forage_encoded_blob;
      }
      function Q(v) {
        var C = this, b = C._initReady().then(function() {
          var R = y[C._dbInfo.name];
          if (R && R.dbReady)
            return R.dbReady;
        });
        return p(b, v, v), b;
      }
      function J(v) {
        I(v);
        for (var C = y[v.name], b = C.forages, R = 0; R < b.length; R++) {
          var D = b[R];
          D._dbInfo.db && (D._dbInfo.db.close(), D._dbInfo.db = null);
        }
        return v.db = null, O(v).then(function(k) {
          return v.db = k, P(v) ? M(v) : k;
        }).then(function(k) {
          v.db = C.db = k;
          for (var q = 0; q < b.length; q++)
            b[q]._dbInfo.db = k;
        }).catch(function(k) {
          throw A(v, k), k;
        });
      }
      function H(v, C, b, R) {
        R === void 0 && (R = 1);
        try {
          var D = v.db.transaction(v.storeName, C);
          b(null, D);
        } catch (k) {
          if (R > 0 && (!v.db || k.name === "InvalidStateError" || k.name === "NotFoundError"))
            return l.resolve().then(function() {
              if (!v.db || k.name === "NotFoundError" && !v.db.objectStoreNames.contains(v.storeName) && v.version <= v.db.version)
                return v.db && (v.version = v.db.version + 1), M(v);
            }).then(function() {
              return J(v).then(function() {
                H(v, C, b, R - 1);
              });
            }).catch(b);
          b(k);
        }
      }
      function F() {
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
      function $(v) {
        var C = this, b = {
          db: null
        };
        if (v)
          for (var R in v)
            b[R] = v[R];
        var D = y[b.name];
        D || (D = F(), y[b.name] = D), D.forages.push(C), C._initReady || (C._initReady = C.ready, C.ready = Q);
        var k = [];
        function q() {
          return l.resolve();
        }
        for (var V = 0; V < D.forages.length; V++) {
          var K = D.forages[V];
          K !== C && k.push(K._initReady().catch(q));
        }
        var Z = D.forages.slice(0);
        return l.all(k).then(function() {
          return b.db = D.db, O(b);
        }).then(function(G) {
          return b.db = G, P(b, C._defaultConfig.version) ? M(b) : G;
        }).then(function(G) {
          b.db = D.db = G, C._dbInfo = b;
          for (var j = 0; j < Z.length; j++) {
            var se = Z[j];
            se !== C && (se._dbInfo.db = b.db, se._dbInfo.version = b.version);
          }
        });
      }
      function W(v, C) {
        var b = this;
        v = g(v);
        var R = new l(function(D, k) {
          b.ready().then(function() {
            H(b._dbInfo, x, function(q, V) {
              if (q)
                return k(q);
              try {
                var K = V.objectStore(b._dbInfo.storeName), Z = K.get(v);
                Z.onsuccess = function() {
                  var G = Z.result;
                  G === void 0 && (G = null), X(G) && (G = Y(G)), D(G);
                }, Z.onerror = function() {
                  k(Z.error);
                };
              } catch (G) {
                k(G);
              }
            });
          }).catch(k);
        });
        return u(R, C), R;
      }
      function ae(v, C) {
        var b = this, R = new l(function(D, k) {
          b.ready().then(function() {
            H(b._dbInfo, x, function(q, V) {
              if (q)
                return k(q);
              try {
                var K = V.objectStore(b._dbInfo.storeName), Z = K.openCursor(), G = 1;
                Z.onsuccess = function() {
                  var j = Z.result;
                  if (j) {
                    var se = j.value;
                    X(se) && (se = Y(se));
                    var he = v(se, j.key, G++);
                    he !== void 0 ? D(he) : j.continue();
                  } else
                    D();
                }, Z.onerror = function() {
                  k(Z.error);
                };
              } catch (j) {
                k(j);
              }
            });
          }).catch(k);
        });
        return u(R, C), R;
      }
      function ue(v, C, b) {
        var R = this;
        v = g(v);
        var D = new l(function(k, q) {
          var V;
          R.ready().then(function() {
            return V = R._dbInfo, d.call(C) === "[object Blob]" ? N(V.db).then(function(K) {
              return K ? C : z(C);
            }) : C;
          }).then(function(K) {
            H(R._dbInfo, m, function(Z, G) {
              if (Z)
                return q(Z);
              try {
                var j = G.objectStore(R._dbInfo.storeName);
                K === null && (K = void 0);
                var se = j.put(K, v);
                G.oncomplete = function() {
                  K === void 0 && (K = null), k(K);
                }, G.onabort = G.onerror = function() {
                  var he = se.error ? se.error : se.transaction.error;
                  q(he);
                };
              } catch (he) {
                q(he);
              }
            });
          }).catch(q);
        });
        return u(D, b), D;
      }
      function ve(v, C) {
        var b = this;
        v = g(v);
        var R = new l(function(D, k) {
          b.ready().then(function() {
            H(b._dbInfo, m, function(q, V) {
              if (q)
                return k(q);
              try {
                var K = V.objectStore(b._dbInfo.storeName), Z = K.delete(v);
                V.oncomplete = function() {
                  D();
                }, V.onerror = function() {
                  k(Z.error);
                }, V.onabort = function() {
                  var G = Z.error ? Z.error : Z.transaction.error;
                  k(G);
                };
              } catch (G) {
                k(G);
              }
            });
          }).catch(k);
        });
        return u(R, C), R;
      }
      function ne(v) {
        var C = this, b = new l(function(R, D) {
          C.ready().then(function() {
            H(C._dbInfo, m, function(k, q) {
              if (k)
                return D(k);
              try {
                var V = q.objectStore(C._dbInfo.storeName), K = V.clear();
                q.oncomplete = function() {
                  R();
                }, q.onabort = q.onerror = function() {
                  var Z = K.error ? K.error : K.transaction.error;
                  D(Z);
                };
              } catch (Z) {
                D(Z);
              }
            });
          }).catch(D);
        });
        return u(b, v), b;
      }
      function pe(v) {
        var C = this, b = new l(function(R, D) {
          C.ready().then(function() {
            H(C._dbInfo, x, function(k, q) {
              if (k)
                return D(k);
              try {
                var V = q.objectStore(C._dbInfo.storeName), K = V.count();
                K.onsuccess = function() {
                  R(K.result);
                }, K.onerror = function() {
                  D(K.error);
                };
              } catch (Z) {
                D(Z);
              }
            });
          }).catch(D);
        });
        return u(b, v), b;
      }
      function _e(v, C) {
        var b = this, R = new l(function(D, k) {
          if (v < 0) {
            D(null);
            return;
          }
          b.ready().then(function() {
            H(b._dbInfo, x, function(q, V) {
              if (q)
                return k(q);
              try {
                var K = V.objectStore(b._dbInfo.storeName), Z = !1, G = K.openKeyCursor();
                G.onsuccess = function() {
                  var j = G.result;
                  if (!j) {
                    D(null);
                    return;
                  }
                  v === 0 || Z ? D(j.key) : (Z = !0, j.advance(v));
                }, G.onerror = function() {
                  k(G.error);
                };
              } catch (j) {
                k(j);
              }
            });
          }).catch(k);
        });
        return u(R, C), R;
      }
      function Ue(v) {
        var C = this, b = new l(function(R, D) {
          C.ready().then(function() {
            H(C._dbInfo, x, function(k, q) {
              if (k)
                return D(k);
              try {
                var V = q.objectStore(C._dbInfo.storeName), K = V.openKeyCursor(), Z = [];
                K.onsuccess = function() {
                  var G = K.result;
                  if (!G) {
                    R(Z);
                    return;
                  }
                  Z.push(G.key), G.continue();
                }, K.onerror = function() {
                  D(K.error);
                };
              } catch (G) {
                D(G);
              }
            });
          }).catch(D);
        });
        return u(b, v), b;
      }
      function De(v, C) {
        C = _.apply(this, arguments);
        var b = this.config();
        v = typeof v != "function" && v || {}, v.name || (v.name = v.name || b.name, v.storeName = v.storeName || b.storeName);
        var R = this, D;
        if (!v.name)
          D = l.reject("Invalid arguments");
        else {
          var k = v.name === b.name && R._dbInfo.db, q = k ? l.resolve(R._dbInfo.db) : O(v).then(function(V) {
            var K = y[v.name], Z = K.forages;
            K.db = V;
            for (var G = 0; G < Z.length; G++)
              Z[G]._dbInfo.db = V;
            return V;
          });
          v.storeName ? D = q.then(function(V) {
            if (V.objectStoreNames.contains(v.storeName)) {
              var K = V.version + 1;
              I(v);
              var Z = y[v.name], G = Z.forages;
              V.close();
              for (var j = 0; j < G.length; j++) {
                var se = G[j];
                se._dbInfo.db = null, se._dbInfo.version = K;
              }
              var he = new l(function(le, be) {
                var xe = h.open(v.name, K);
                xe.onerror = function(Te) {
                  var wt = xe.result;
                  wt.close(), be(Te);
                }, xe.onupgradeneeded = function() {
                  var Te = xe.result;
                  Te.deleteObjectStore(v.storeName);
                }, xe.onsuccess = function() {
                  var Te = xe.result;
                  Te.close(), le(Te);
                };
              });
              return he.then(function(le) {
                Z.db = le;
                for (var be = 0; be < G.length; be++) {
                  var xe = G[be];
                  xe._dbInfo.db = le, w(xe._dbInfo);
                }
              }).catch(function(le) {
                throw (A(v, le) || l.resolve()).catch(function() {
                }), le;
              });
            }
          }) : D = q.then(function(V) {
            I(v);
            var K = y[v.name], Z = K.forages;
            V.close();
            for (var G = 0; G < Z.length; G++) {
              var j = Z[G];
              j._dbInfo.db = null;
            }
            var se = new l(function(he, le) {
              var be = h.deleteDatabase(v.name);
              be.onerror = function() {
                var xe = be.result;
                xe && xe.close(), le(be.error);
              }, be.onblocked = function() {
                console.warn('dropInstance blocked for database "' + v.name + '" until all open connections are closed');
              }, be.onsuccess = function() {
                var xe = be.result;
                xe && xe.close(), he(xe);
              };
            });
            return se.then(function(he) {
              K.db = he;
              for (var le = 0; le < Z.length; le++) {
                var be = Z[le];
                w(be._dbInfo);
              }
            }).catch(function(he) {
              throw (A(v, he) || l.resolve()).catch(function() {
              }), he;
            });
          });
        }
        return u(D, C), D;
      }
      var Re = {
        _driver: "asyncStorage",
        _initStorage: $,
        _support: s(),
        iterate: ae,
        getItem: W,
        setItem: ue,
        removeItem: ve,
        clear: ne,
        length: pe,
        key: _e,
        keys: Ue,
        dropInstance: De
      };
      function Se() {
        return typeof openDatabase == "function";
      }
      var Ne = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tt = "~~local_forage_type~", rt = /^~~local_forage_type~([^~]+)~/, Fe = "__lfsc__:", nt = Fe.length, Ye = "arbf", Ce = "blob", Be = "si08", Ie = "ui08", it = "uic8", pt = "si16", Ve = "si32", Ge = "ur16", Rt = "ui32", xt = "fl32", bt = "fl64", Ke = nt + Ye.length, Xe = Object.prototype.toString;
      function Nt(v) {
        var C = v.length * 0.75, b = v.length, R, D = 0, k, q, V, K;
        v[v.length - 1] === "=" && (C--, v[v.length - 2] === "=" && C--);
        var Z = new ArrayBuffer(C), G = new Uint8Array(Z);
        for (R = 0; R < b; R += 4)
          k = Ne.indexOf(v[R]), q = Ne.indexOf(v[R + 1]), V = Ne.indexOf(v[R + 2]), K = Ne.indexOf(v[R + 3]), G[D++] = k << 2 | q >> 4, G[D++] = (q & 15) << 4 | V >> 2, G[D++] = (V & 3) << 6 | K & 63;
        return Z;
      }
      function ft(v) {
        var C = new Uint8Array(v), b = "", R;
        for (R = 0; R < C.length; R += 3)
          b += Ne[C[R] >> 2], b += Ne[(C[R] & 3) << 4 | C[R + 1] >> 4], b += Ne[(C[R + 1] & 15) << 2 | C[R + 2] >> 6], b += Ne[C[R + 2] & 63];
        return C.length % 3 === 2 ? b = b.substring(0, b.length - 1) + "=" : C.length % 3 === 1 && (b = b.substring(0, b.length - 2) + "=="), b;
      }
      function Dt(v, C) {
        var b = "";
        if (v && (b = Xe.call(v)), v && (b === "[object ArrayBuffer]" || v.buffer && Xe.call(v.buffer) === "[object ArrayBuffer]")) {
          var R, D = Fe;
          v instanceof ArrayBuffer ? (R = v, D += Ye) : (R = v.buffer, b === "[object Int8Array]" ? D += Be : b === "[object Uint8Array]" ? D += Ie : b === "[object Uint8ClampedArray]" ? D += it : b === "[object Int16Array]" ? D += pt : b === "[object Uint16Array]" ? D += Ge : b === "[object Int32Array]" ? D += Ve : b === "[object Uint32Array]" ? D += Rt : b === "[object Float32Array]" ? D += xt : b === "[object Float64Array]" ? D += bt : C(new Error("Failed to get type for BinaryArray"))), C(D + ft(R));
        } else if (b === "[object Blob]") {
          var k = new FileReader();
          k.onload = function() {
            var q = tt + v.type + "~" + ft(this.result);
            C(Fe + Ce + q);
          }, k.readAsArrayBuffer(v);
        } else
          try {
            C(JSON.stringify(v));
          } catch (q) {
            console.error("Couldn't convert value into a JSON string: ", v), C(null, q);
          }
      }
      function Ir(v) {
        if (v.substring(0, nt) !== Fe)
          return JSON.parse(v);
        var C = v.substring(Ke), b = v.substring(nt, Ke), R;
        if (b === Ce && rt.test(C)) {
          var D = C.match(rt);
          R = D[1], C = C.substring(D[0].length);
        }
        var k = Nt(C);
        switch (b) {
          case Ye:
            return k;
          case Ce:
            return c([k], { type: R });
          case Be:
            return new Int8Array(k);
          case Ie:
            return new Uint8Array(k);
          case it:
            return new Uint8ClampedArray(k);
          case pt:
            return new Int16Array(k);
          case Ge:
            return new Uint16Array(k);
          case Ve:
            return new Int32Array(k);
          case Rt:
            return new Uint32Array(k);
          case xt:
            return new Float32Array(k);
          case bt:
            return new Float64Array(k);
          default:
            throw new Error("Unkown type: " + b);
        }
      }
      var gt = {
        serialize: Dt,
        deserialize: Ir,
        stringToBuffer: Nt,
        bufferToString: ft
      };
      function mt(v, C, b, R) {
        v.executeSql("CREATE TABLE IF NOT EXISTS " + C.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], b, R);
      }
      function Lr(v) {
        var C = this, b = {
          db: null
        };
        if (v)
          for (var R in v)
            b[R] = typeof v[R] != "string" ? v[R].toString() : v[R];
        var D = new l(function(k, q) {
          try {
            b.db = openDatabase(b.name, String(b.version), b.description, b.size);
          } catch (V) {
            return q(V);
          }
          b.db.transaction(function(V) {
            mt(V, b, function() {
              C._dbInfo = b, k();
            }, function(K, Z) {
              q(Z);
            });
          }, q);
        });
        return b.serializer = gt, D;
      }
      function Le(v, C, b, R, D, k) {
        v.executeSql(b, R, D, function(q, V) {
          V.code === V.SYNTAX_ERR ? q.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [C.storeName], function(K, Z) {
            Z.rows.length ? k(K, V) : mt(K, C, function() {
              K.executeSql(b, R, D, k);
            }, k);
          }, k) : k(q, V);
        }, k);
      }
      function Pr(v, C) {
        var b = this;
        v = g(v);
        var R = new l(function(D, k) {
          b.ready().then(function() {
            var q = b._dbInfo;
            q.db.transaction(function(V) {
              Le(V, q, "SELECT * FROM " + q.storeName + " WHERE key = ? LIMIT 1", [v], function(K, Z) {
                var G = Z.rows.length ? Z.rows.item(0).value : null;
                G && (G = q.serializer.deserialize(G)), D(G);
              }, function(K, Z) {
                k(Z);
              });
            });
          }).catch(k);
        });
        return u(R, C), R;
      }
      function Tt(v, C) {
        var b = this, R = new l(function(D, k) {
          b.ready().then(function() {
            var q = b._dbInfo;
            q.db.transaction(function(V) {
              Le(V, q, "SELECT * FROM " + q.storeName, [], function(K, Z) {
                for (var G = Z.rows, j = G.length, se = 0; se < j; se++) {
                  var he = G.item(se), le = he.value;
                  if (le && (le = q.serializer.deserialize(le)), le = v(le, he.key, se + 1), le !== void 0) {
                    D(le);
                    return;
                  }
                }
                D();
              }, function(K, Z) {
                k(Z);
              });
            });
          }).catch(k);
        });
        return u(R, C), R;
      }
      function Ot(v, C, b, R) {
        var D = this;
        v = g(v);
        var k = new l(function(q, V) {
          D.ready().then(function() {
            C === void 0 && (C = null);
            var K = C, Z = D._dbInfo;
            Z.serializer.serialize(C, function(G, j) {
              j ? V(j) : Z.db.transaction(function(se) {
                Le(se, Z, "INSERT OR REPLACE INTO " + Z.storeName + " (key, value) VALUES (?, ?)", [v, G], function() {
                  q(K);
                }, function(he, le) {
                  V(le);
                });
              }, function(se) {
                if (se.code === se.QUOTA_ERR) {
                  if (R > 0) {
                    q(Ot.apply(D, [v, K, b, R - 1]));
                    return;
                  }
                  V(se);
                }
              });
            });
          }).catch(V);
        });
        return u(k, b), k;
      }
      function Hr(v, C, b) {
        return Ot.apply(this, [v, C, b, 1]);
      }
      function Mr(v, C) {
        var b = this;
        v = g(v);
        var R = new l(function(D, k) {
          b.ready().then(function() {
            var q = b._dbInfo;
            q.db.transaction(function(V) {
              Le(V, q, "DELETE FROM " + q.storeName + " WHERE key = ?", [v], function() {
                D();
              }, function(K, Z) {
                k(Z);
              });
            });
          }).catch(k);
        });
        return u(R, C), R;
      }
      function It(v) {
        var C = this, b = new l(function(R, D) {
          C.ready().then(function() {
            var k = C._dbInfo;
            k.db.transaction(function(q) {
              Le(q, k, "DELETE FROM " + k.storeName, [], function() {
                R();
              }, function(V, K) {
                D(K);
              });
            });
          }).catch(D);
        });
        return u(b, v), b;
      }
      function Fr(v) {
        var C = this, b = new l(function(R, D) {
          C.ready().then(function() {
            var k = C._dbInfo;
            k.db.transaction(function(q) {
              Le(q, k, "SELECT COUNT(key) as c FROM " + k.storeName, [], function(V, K) {
                var Z = K.rows.item(0).c;
                R(Z);
              }, function(V, K) {
                D(K);
              });
            });
          }).catch(D);
        });
        return u(b, v), b;
      }
      function qr(v, C) {
        var b = this, R = new l(function(D, k) {
          b.ready().then(function() {
            var q = b._dbInfo;
            q.db.transaction(function(V) {
              Le(V, q, "SELECT key FROM " + q.storeName + " WHERE id = ? LIMIT 1", [v + 1], function(K, Z) {
                var G = Z.rows.length ? Z.rows.item(0).key : null;
                D(G);
              }, function(K, Z) {
                k(Z);
              });
            });
          }).catch(k);
        });
        return u(R, C), R;
      }
      function Lt(v) {
        var C = this, b = new l(function(R, D) {
          C.ready().then(function() {
            var k = C._dbInfo;
            k.db.transaction(function(q) {
              Le(q, k, "SELECT key FROM " + k.storeName, [], function(V, K) {
                for (var Z = [], G = 0; G < K.rows.length; G++)
                  Z.push(K.rows.item(G).key);
                R(Z);
              }, function(V, K) {
                D(K);
              });
            });
          }).catch(D);
        });
        return u(b, v), b;
      }
      function zr(v) {
        return new l(function(C, b) {
          v.transaction(function(R) {
            R.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(D, k) {
              for (var q = [], V = 0; V < k.rows.length; V++)
                q.push(k.rows.item(V).name);
              C({
                db: v,
                storeNames: q
              });
            }, function(D, k) {
              b(k);
            });
          }, function(R) {
            b(R);
          });
        });
      }
      function Pt(v, C) {
        C = _.apply(this, arguments);
        var b = this.config();
        v = typeof v != "function" && v || {}, v.name || (v.name = v.name || b.name, v.storeName = v.storeName || b.storeName);
        var R = this, D;
        return v.name ? D = new l(function(k) {
          var q;
          v.name === b.name ? q = R._dbInfo.db : q = openDatabase(v.name, "", "", 0), v.storeName ? k({
            db: q,
            storeNames: [v.storeName]
          }) : k(zr(q));
        }).then(function(k) {
          return new l(function(q, V) {
            k.db.transaction(function(K) {
              function Z(he) {
                return new l(function(le, be) {
                  K.executeSql("DROP TABLE IF EXISTS " + he, [], function() {
                    le();
                  }, function(xe, Te) {
                    be(Te);
                  });
                });
              }
              for (var G = [], j = 0, se = k.storeNames.length; j < se; j++)
                G.push(Z(k.storeNames[j]));
              l.all(G).then(function() {
                q();
              }).catch(function(he) {
                V(he);
              });
            }, function(K) {
              V(K);
            });
          });
        }) : D = l.reject("Invalid arguments"), u(D, C), D;
      }
      var ke = {
        _driver: "webSQLStorage",
        _initStorage: Lr,
        _support: Se(),
        iterate: Tt,
        getItem: Pr,
        setItem: Hr,
        removeItem: Mr,
        clear: It,
        length: Fr,
        key: qr,
        keys: Lt,
        dropInstance: Pt
      };
      function qe() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function yt(v, C) {
        var b = v.name + "/";
        return v.storeName !== C.storeName && (b += v.storeName + "/"), b;
      }
      function $r() {
        var v = "_localforage_support_test";
        try {
          return localStorage.setItem(v, !0), localStorage.removeItem(v), !1;
        } catch {
          return !0;
        }
      }
      function ii() {
        return !$r() || localStorage.length > 0;
      }
      function oi(v) {
        var C = this, b = {};
        if (v)
          for (var R in v)
            b[R] = v[R];
        return b.keyPrefix = yt(v, C._defaultConfig), ii() ? (C._dbInfo = b, b.serializer = gt, l.resolve()) : l.reject();
      }
      function si(v) {
        var C = this, b = C.ready().then(function() {
          for (var R = C._dbInfo.keyPrefix, D = localStorage.length - 1; D >= 0; D--) {
            var k = localStorage.key(D);
            k.indexOf(R) === 0 && localStorage.removeItem(k);
          }
        });
        return u(b, v), b;
      }
      function ai(v, C) {
        var b = this;
        v = g(v);
        var R = b.ready().then(function() {
          var D = b._dbInfo, k = localStorage.getItem(D.keyPrefix + v);
          return k && (k = D.serializer.deserialize(k)), k;
        });
        return u(R, C), R;
      }
      function fi(v, C) {
        var b = this, R = b.ready().then(function() {
          for (var D = b._dbInfo, k = D.keyPrefix, q = k.length, V = localStorage.length, K = 1, Z = 0; Z < V; Z++) {
            var G = localStorage.key(Z);
            if (G.indexOf(k) === 0) {
              var j = localStorage.getItem(G);
              if (j && (j = D.serializer.deserialize(j)), j = v(j, G.substring(q), K++), j !== void 0)
                return j;
            }
          }
        });
        return u(R, C), R;
      }
      function ci(v, C) {
        var b = this, R = b.ready().then(function() {
          var D = b._dbInfo, k;
          try {
            k = localStorage.key(v);
          } catch {
            k = null;
          }
          return k && (k = k.substring(D.keyPrefix.length)), k;
        });
        return u(R, C), R;
      }
      function ui(v) {
        var C = this, b = C.ready().then(function() {
          for (var R = C._dbInfo, D = localStorage.length, k = [], q = 0; q < D; q++) {
            var V = localStorage.key(q);
            V.indexOf(R.keyPrefix) === 0 && k.push(V.substring(R.keyPrefix.length));
          }
          return k;
        });
        return u(b, v), b;
      }
      function hi(v) {
        var C = this, b = C.keys().then(function(R) {
          return R.length;
        });
        return u(b, v), b;
      }
      function li(v, C) {
        var b = this;
        v = g(v);
        var R = b.ready().then(function() {
          var D = b._dbInfo;
          localStorage.removeItem(D.keyPrefix + v);
        });
        return u(R, C), R;
      }
      function di(v, C, b) {
        var R = this;
        v = g(v);
        var D = R.ready().then(function() {
          C === void 0 && (C = null);
          var k = C;
          return new l(function(q, V) {
            var K = R._dbInfo;
            K.serializer.serialize(C, function(Z, G) {
              if (G)
                V(G);
              else
                try {
                  localStorage.setItem(K.keyPrefix + v, Z), q(k);
                } catch (j) {
                  (j.name === "QuotaExceededError" || j.name === "NS_ERROR_DOM_QUOTA_REACHED") && V(j), V(j);
                }
            });
          });
        });
        return u(D, b), D;
      }
      function vi(v, C) {
        if (C = _.apply(this, arguments), v = typeof v != "function" && v || {}, !v.name) {
          var b = this.config();
          v.name = v.name || b.name, v.storeName = v.storeName || b.storeName;
        }
        var R = this, D;
        return v.name ? D = new l(function(k) {
          v.storeName ? k(yt(v, R._defaultConfig)) : k(v.name + "/");
        }).then(function(k) {
          for (var q = localStorage.length - 1; q >= 0; q--) {
            var V = localStorage.key(q);
            V.indexOf(k) === 0 && localStorage.removeItem(V);
          }
        }) : D = l.reject("Invalid arguments"), u(D, C), D;
      }
      var pi = {
        _driver: "localStorageWrapper",
        _initStorage: oi,
        _support: qe(),
        iterate: fi,
        getItem: ai,
        setItem: di,
        removeItem: li,
        clear: si,
        length: hi,
        key: ci,
        keys: ui,
        dropInstance: vi
      }, xi = function(C, b) {
        return C === b || typeof C == "number" && typeof b == "number" && isNaN(C) && isNaN(b);
      }, bi = function(C, b) {
        for (var R = C.length, D = 0; D < R; ) {
          if (xi(C[D], b))
            return !0;
          D++;
        }
        return !1;
      }, l0 = Array.isArray || function(v) {
        return Object.prototype.toString.call(v) === "[object Array]";
      }, _t = {}, d0 = {}, ct = {
        INDEXEDDB: Re,
        WEBSQL: ke,
        LOCALSTORAGE: pi
      }, gi = [ct.INDEXEDDB._driver, ct.WEBSQL._driver, ct.LOCALSTORAGE._driver], Ht = ["dropInstance"], Wr = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Ht), mi = {
        description: "",
        driver: gi.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function yi(v, C) {
        v[C] = function() {
          var b = arguments;
          return v.ready().then(function() {
            return v[C].apply(v, b);
          });
        };
      }
      function Ur() {
        for (var v = 1; v < arguments.length; v++) {
          var C = arguments[v];
          if (C)
            for (var b in C)
              C.hasOwnProperty(b) && (l0(C[b]) ? arguments[0][b] = C[b].slice() : arguments[0][b] = C[b]);
        }
        return arguments[0];
      }
      var _i = function() {
        function v(C) {
          f(this, v);
          for (var b in ct)
            if (ct.hasOwnProperty(b)) {
              var R = ct[b], D = R._driver;
              this[b] = D, _t[D] || this.defineDriver(R);
            }
          this._defaultConfig = Ur({}, mi), this._config = Ur({}, this._defaultConfig, C), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return v.prototype.config = function(b) {
          if ((typeof b > "u" ? "undefined" : o(b)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var R in b) {
              if (R === "storeName" && (b[R] = b[R].replace(/\W/g, "_")), R === "version" && typeof b[R] != "number")
                return new Error("Database version must be a number.");
              this._config[R] = b[R];
            }
            return "driver" in b && b.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof b == "string" ? this._config[b] : this._config;
        }, v.prototype.defineDriver = function(b, R, D) {
          var k = new l(function(q, V) {
            try {
              var K = b._driver, Z = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!b._driver) {
                V(Z);
                return;
              }
              for (var G = Wr.concat("_initStorage"), j = 0, se = G.length; j < se; j++) {
                var he = G[j], le = !bi(Ht, he);
                if ((le || b[he]) && typeof b[he] != "function") {
                  V(Z);
                  return;
                }
              }
              var be = function() {
                for (var wt = function(Si) {
                  return function() {
                    var Ci = new Error("Method " + Si + " is not implemented by the current driver"), v0 = l.reject(Ci);
                    return u(v0, arguments[arguments.length - 1]), v0;
                  };
                }, Yr = 0, Ei = Ht.length; Yr < Ei; Yr++) {
                  var Vr = Ht[Yr];
                  b[Vr] || (b[Vr] = wt(Vr));
                }
              };
              be();
              var xe = function(wt) {
                _t[K] && console.info("Redefining LocalForage driver: " + K), _t[K] = b, d0[K] = wt, q();
              };
              "_support" in b ? b._support && typeof b._support == "function" ? b._support().then(xe, V) : xe(!!b._support) : xe(!0);
            } catch (Te) {
              V(Te);
            }
          });
          return p(k, R, D), k;
        }, v.prototype.driver = function() {
          return this._driver || null;
        }, v.prototype.getDriver = function(b, R, D) {
          var k = _t[b] ? l.resolve(_t[b]) : l.reject(new Error("Driver not found."));
          return p(k, R, D), k;
        }, v.prototype.getSerializer = function(b) {
          var R = l.resolve(gt);
          return p(R, b), R;
        }, v.prototype.ready = function(b) {
          var R = this, D = R._driverSet.then(function() {
            return R._ready === null && (R._ready = R._initDriver()), R._ready;
          });
          return p(D, b, b), D;
        }, v.prototype.setDriver = function(b, R, D) {
          var k = this;
          l0(b) || (b = [b]);
          var q = this._getSupportedDrivers(b);
          function V() {
            k._config.driver = k.driver();
          }
          function K(j) {
            return k._extend(j), V(), k._ready = k._initStorage(k._config), k._ready;
          }
          function Z(j) {
            return function() {
              var se = 0;
              function he() {
                for (; se < j.length; ) {
                  var le = j[se];
                  return se++, k._dbInfo = null, k._ready = null, k.getDriver(le).then(K).catch(he);
                }
                V();
                var be = new Error("No available storage method found.");
                return k._driverSet = l.reject(be), k._driverSet;
              }
              return he();
            };
          }
          var G = this._driverSet !== null ? this._driverSet.catch(function() {
            return l.resolve();
          }) : l.resolve();
          return this._driverSet = G.then(function() {
            var j = q[0];
            return k._dbInfo = null, k._ready = null, k.getDriver(j).then(function(se) {
              k._driver = se._driver, V(), k._wrapLibraryMethodsWithReady(), k._initDriver = Z(q);
            });
          }).catch(function() {
            V();
            var j = new Error("No available storage method found.");
            return k._driverSet = l.reject(j), k._driverSet;
          }), p(this._driverSet, R, D), this._driverSet;
        }, v.prototype.supports = function(b) {
          return !!d0[b];
        }, v.prototype._extend = function(b) {
          Ur(this, b);
        }, v.prototype._getSupportedDrivers = function(b) {
          for (var R = [], D = 0, k = b.length; D < k; D++) {
            var q = b[D];
            this.supports(q) && R.push(q);
          }
          return R;
        }, v.prototype._wrapLibraryMethodsWithReady = function() {
          for (var b = 0, R = Wr.length; b < R; b++)
            yi(this, Wr[b]);
        }, v.prototype.createInstance = function(b) {
          return new v(b);
        }, v;
      }(), wi = new _i();
      n.exports = wi;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(xs);
const $e = /* @__PURE__ */ Object.create(null);
$e.open = "0";
$e.close = "1";
$e.ping = "2";
$e.pong = "3";
$e.message = "4";
$e.upgrade = "5";
$e.noop = "6";
const qt = /* @__PURE__ */ Object.create(null);
Object.keys($e).forEach((e) => {
  qt[$e[e]] = e;
});
const bs = { type: "error", data: "parser error" }, gs = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", ms = typeof ArrayBuffer == "function", ys = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Dn = ({ type: e, data: r }, t, n) => gs && r instanceof Blob ? t ? n(r) : cn(r, n) : ms && (r instanceof ArrayBuffer || ys(r)) ? t ? n(r) : cn(new Blob([r]), n) : n($e[e] + (r || "")), cn = (e, r) => {
  const t = new FileReader();
  return t.onload = function() {
    const n = t.result.split(",")[1];
    r("b" + (n || ""));
  }, t.readAsDataURL(e);
}, un = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ct = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < un.length; e++)
  Ct[un.charCodeAt(e)] = e;
const _s = (e) => {
  let r = e.length * 0.75, t = e.length, n, i = 0, o, f, a, h;
  e[e.length - 1] === "=" && (r--, e[e.length - 2] === "=" && r--);
  const s = new ArrayBuffer(r), c = new Uint8Array(s);
  for (n = 0; n < t; n += 4)
    o = Ct[e.charCodeAt(n)], f = Ct[e.charCodeAt(n + 1)], a = Ct[e.charCodeAt(n + 2)], h = Ct[e.charCodeAt(n + 3)], c[i++] = o << 2 | f >> 4, c[i++] = (f & 15) << 4 | a >> 2, c[i++] = (a & 3) << 6 | h & 63;
  return s;
}, ws = typeof ArrayBuffer == "function", Tn = (e, r) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: On(e, r)
    };
  const t = e.charAt(0);
  return t === "b" ? {
    type: "message",
    data: Es(e.substring(1), r)
  } : qt[t] ? e.length > 1 ? {
    type: qt[t],
    data: e.substring(1)
  } : {
    type: qt[t]
  } : bs;
}, Es = (e, r) => {
  if (ws) {
    const t = _s(e);
    return On(t, r);
  } else
    return { base64: !0, data: e };
}, On = (e, r) => {
  switch (r) {
    case "blob":
      return e instanceof ArrayBuffer ? new Blob([e]) : e;
    case "arraybuffer":
    default:
      return e;
  }
}, In = String.fromCharCode(30), Ss = (e, r) => {
  const t = e.length, n = new Array(t);
  let i = 0;
  e.forEach((o, f) => {
    Dn(o, !1, (a) => {
      n[f] = a, ++i === t && r(n.join(In));
    });
  });
}, Cs = (e, r) => {
  const t = e.split(In), n = [];
  for (let i = 0; i < t.length; i++) {
    const o = Tn(t[i], r);
    if (n.push(o), o.type === "error")
      break;
  }
  return n;
}, Ln = 4;
function ge(e) {
  if (e)
    return Bs(e);
}
function Bs(e) {
  for (var r in ge.prototype)
    e[r] = ge.prototype[r];
  return e;
}
ge.prototype.on = ge.prototype.addEventListener = function(e, r) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(r), this;
};
ge.prototype.once = function(e, r) {
  function t() {
    this.off(e, t), r.apply(this, arguments);
  }
  return t.fn = r, this.on(e, t), this;
};
ge.prototype.off = ge.prototype.removeListener = ge.prototype.removeAllListeners = ge.prototype.removeEventListener = function(e, r) {
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
ge.prototype.emit = function(e) {
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
ge.prototype.emitReserved = ge.prototype.emit;
ge.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
ge.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const Oe = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();
function Pn(e, ...r) {
  return r.reduce((t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t), {});
}
const ks = Oe.setTimeout, As = Oe.clearTimeout;
function Nr(e, r) {
  r.useNativeTimers ? (e.setTimeoutFn = ks.bind(Oe), e.clearTimeoutFn = As.bind(Oe)) : (e.setTimeoutFn = Oe.setTimeout.bind(Oe), e.clearTimeoutFn = Oe.clearTimeout.bind(Oe));
}
const Rs = 1.33;
function Ns(e) {
  return typeof e == "string" ? Ds(e) : Math.ceil((e.byteLength || e.size) * Rs);
}
function Ds(e) {
  let r = 0, t = 0;
  for (let n = 0, i = e.length; n < i; n++)
    r = e.charCodeAt(n), r < 128 ? t += 1 : r < 2048 ? t += 2 : r < 55296 || r >= 57344 ? t += 3 : (n++, t += 4);
  return t;
}
class Ts extends Error {
  constructor(r, t, n) {
    super(r), this.description = t, this.context = n, this.type = "TransportError";
  }
}
class Hn extends ge {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(r) {
    super(), this.writable = !1, Nr(this, r), this.opts = r, this.query = r.query, this.socket = r.socket;
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
    return super.emitReserved("error", new Ts(r, t, n)), this;
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
    const t = Tn(r, this.socket.binaryType);
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
const Mn = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), Qr = 64, Os = {};
let hn = 0, Mt = 0, ln;
function dn(e) {
  let r = "";
  do
    r = Mn[e % Qr] + r, e = Math.floor(e / Qr);
  while (e > 0);
  return r;
}
function Fn() {
  const e = dn(+/* @__PURE__ */ new Date());
  return e !== ln ? (hn = 0, ln = e) : e + "." + dn(hn++);
}
for (; Mt < Qr; Mt++)
  Os[Mn[Mt]] = Mt;
function qn(e) {
  let r = "";
  for (let t in e)
    e.hasOwnProperty(t) && (r.length && (r += "&"), r += encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
  return r;
}
function Is(e) {
  let r = {}, t = e.split("&");
  for (let n = 0, i = t.length; n < i; n++) {
    let o = t[n].split("=");
    r[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return r;
}
let zn = !1;
try {
  zn = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Ls = zn;
function $n(e) {
  const r = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!r || Ls))
      return new XMLHttpRequest();
  } catch {
  }
  if (!r)
    try {
      return new Oe[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function Ps() {
}
const Hs = function() {
  return new $n({
    xdomain: !1
  }).responseType != null;
}();
class Ms extends Hn {
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
    this.supportsBinary = Hs && !t;
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
    Cs(r, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
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
    this.writable = !1, Ss(r, (t) => {
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
    this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = Fn()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.opts.port && (t === "https" && Number(this.opts.port) !== 443 || t === "http" && Number(this.opts.port) !== 80) && (n = ":" + this.opts.port);
    const i = qn(r), o = this.opts.hostname.indexOf(":") !== -1;
    return t + "://" + (o ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(r = {}) {
    return Object.assign(r, { xd: this.xd, xs: this.xs }, this.opts), new ze(this.uri(), r);
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
class ze extends ge {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(r, t) {
    super(), Nr(this, t), this.opts = t, this.method = t.method || "GET", this.uri = r, this.async = t.async !== !1, this.data = t.data !== void 0 ? t.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    const r = Pn(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    r.xdomain = !!this.opts.xd, r.xscheme = !!this.opts.xs;
    const t = this.xhr = new $n(r);
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
    typeof document < "u" && (this.index = ze.requestsCount++, ze.requests[this.index] = this);
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
      if (this.xhr.onreadystatechange = Ps, r)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete ze.requests[this.index], this.xhr = null;
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
ze.requestsCount = 0;
ze.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", vn);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in Oe ? "pagehide" : "unload";
    addEventListener(e, vn, !1);
  }
}
function vn() {
  for (let e in ze.requests)
    ze.requests.hasOwnProperty(e) && ze.requests[e].abort();
}
const Wn = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? (r) => Promise.resolve().then(r) : (r, t) => t(r, 0))(), Ft = Oe.WebSocket || Oe.MozWebSocket, pn = !0, Fs = "arraybuffer", xn = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class qs extends Hn {
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
    const r = this.uri(), t = this.opts.protocols, n = xn ? {} : Pn(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = pn && !xn ? t ? new Ft(r, t) : new Ft(r) : new Ft(r, t, n);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this.ws.binaryType = this.socket.binaryType || Fs, this.addEventListeners();
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
      Dn(n, this.supportsBinary, (o) => {
        const f = {};
        try {
          pn && this.ws.send(o);
        } catch {
        }
        i && Wn(() => {
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
    this.opts.port && (t === "wss" && Number(this.opts.port) !== 443 || t === "ws" && Number(this.opts.port) !== 80) && (n = ":" + this.opts.port), this.opts.timestampRequests && (r[this.opts.timestampParam] = Fn()), this.supportsBinary || (r.b64 = 1);
    const i = qn(r), o = this.opts.hostname.indexOf(":") !== -1;
    return t + "://" + (o ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!Ft;
  }
}
const zs = {
  websocket: qs,
  polling: Ms
}, $s = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Ws = [
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
function jr(e) {
  const r = e, t = e.indexOf("["), n = e.indexOf("]");
  t != -1 && n != -1 && (e = e.substring(0, t) + e.substring(t, n).replace(/:/g, ";") + e.substring(n, e.length));
  let i = $s.exec(e || ""), o = {}, f = 14;
  for (; f--; )
    o[Ws[f]] = i[f] || "";
  return t != -1 && n != -1 && (o.source = r, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"), o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o.ipv6uri = !0), o.pathNames = Us(o, o.path), o.queryKey = Ys(o, o.query), o;
}
function Us(e, r) {
  const t = /\/{2,9}/g, n = r.replace(t, "/").split("/");
  return (r.slice(0, 1) == "/" || r.length === 0) && n.splice(0, 1), r.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function Ys(e, r) {
  const t = {};
  return r.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, i, o) {
    i && (t[i] = o);
  }), t;
}
let Un = class ut extends ge {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(r, t = {}) {
    super(), this.writeBuffer = [], r && typeof r == "object" && (t = r, r = null), r ? (r = jr(r), t.hostname = r.host, t.secure = r.protocol === "https" || r.protocol === "wss", t.port = r.port, r.query && (t.query = r.query)) : t.host && (t.hostname = jr(t.host).host), Nr(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = t.transports || ["polling", "websocket"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
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
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Is(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
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
    t.EIO = Ln, t.transport = r, this.id && (t.sid = this.id);
    const n = Object.assign({}, this.opts.transportOptions[r], this.opts, {
      query: t,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new zs[r](n);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let r;
    if (this.opts.rememberUpgrade && ut.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
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
    ut.priorWebsocketSuccess = !1;
    const i = () => {
      n || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (l) => {
        if (!n)
          if (l.type === "pong" && l.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            ut.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (c(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
            });
          } else {
            const u = new Error("probe error");
            u.transport = t.name, this.emitReserved("upgradeError", u);
          }
      }));
    };
    function o() {
      n || (n = !0, c(), t.close(), t = null);
    }
    const f = (l) => {
      const u = new Error("probe error: " + l);
      u.transport = t.name, o(), this.emitReserved("upgradeError", u);
    };
    function a() {
      f("transport closed");
    }
    function h() {
      f("socket closed");
    }
    function s(l) {
      t && l.name !== t.name && o();
    }
    const c = () => {
      t.removeListener("open", i), t.removeListener("error", f), t.removeListener("close", a), this.off("close", h), this.off("upgrading", s);
    };
    t.once("open", i), t.once("error", f), t.once("close", a), this.once("close", h), this.once("upgrading", s), t.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", ut.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
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
      if (i && (t += Ns(i)), n > 0 && t > this.maxPayload)
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
    ut.priorWebsocketSuccess = !1, this.emitReserved("error", r), this.onClose("transport error", r);
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
Un.protocol = Ln;
function Vs(e, r = "", t) {
  let n = e;
  t = t || typeof location < "u" && location, e == null && (e = t.protocol + "//" + t.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = t.protocol + e : e = t.host + e), /^(https?|wss?):\/\//.test(e) || (typeof t < "u" ? e = t.protocol + "//" + e : e = "https://" + e), n = jr(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const o = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + o + ":" + n.port + r, n.href = n.protocol + "://" + o + (t && t.port === n.port ? "" : ":" + n.port), n;
}
const Ks = typeof ArrayBuffer == "function", Zs = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Yn = Object.prototype.toString, Gs = typeof Blob == "function" || typeof Blob < "u" && Yn.call(Blob) === "[object BlobConstructor]", Xs = typeof File == "function" || typeof File < "u" && Yn.call(File) === "[object FileConstructor]";
function c0(e) {
  return Ks && (e instanceof ArrayBuffer || Zs(e)) || Gs && e instanceof Blob || Xs && e instanceof File;
}
function zt(e, r) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let t = 0, n = e.length; t < n; t++)
      if (zt(e[t]))
        return !0;
    return !1;
  }
  if (c0(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return zt(e.toJSON(), !0);
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && zt(e[t]))
      return !0;
  return !1;
}
function Qs(e) {
  const r = [], t = e.data, n = e;
  return n.data = Jr(t, r), n.attachments = r.length, { packet: n, buffers: r };
}
function Jr(e, r) {
  if (!e)
    return e;
  if (c0(e)) {
    const t = { _placeholder: !0, num: r.length };
    return r.push(e), t;
  } else if (Array.isArray(e)) {
    const t = new Array(e.length);
    for (let n = 0; n < e.length; n++)
      t[n] = Jr(e[n], r);
    return t;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const t = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = Jr(e[n], r));
    return t;
  }
  return e;
}
function js(e, r) {
  return e.data = e0(e.data, r), delete e.attachments, e;
}
function e0(e, r) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < r.length)
      return r[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let t = 0; t < e.length; t++)
      e[t] = e0(e[t], r);
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && (e[t] = e0(e[t], r));
  return e;
}
const Js = 5;
var ce;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(ce || (ce = {}));
class ea {
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
    return (r.type === ce.EVENT || r.type === ce.ACK) && zt(r) ? this.encodeAsBinary({
      type: r.type === ce.EVENT ? ce.BINARY_EVENT : ce.BINARY_ACK,
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
    return (r.type === ce.BINARY_EVENT || r.type === ce.BINARY_ACK) && (t += r.attachments + "-"), r.nsp && r.nsp !== "/" && (t += r.nsp + ","), r.id != null && (t += r.id), r.data != null && (t += JSON.stringify(r.data, this.replacer)), t;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(r) {
    const t = Qs(r), n = this.encodeAsString(t.packet), i = t.buffers;
    return i.unshift(n), i;
  }
}
class u0 extends ge {
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
      const n = t.type === ce.BINARY_EVENT;
      n || t.type === ce.BINARY_ACK ? (t.type = n ? ce.EVENT : ce.ACK, this.reconstructor = new ta(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (c0(r) || r.base64)
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
    if (ce[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === ce.BINARY_EVENT || n.type === ce.BINARY_ACK) {
      const o = t + 1;
      for (; r.charAt(++t) !== "-" && t != r.length; )
        ;
      const f = r.substring(o, t);
      if (f != Number(f) || r.charAt(t) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(f);
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
        const f = r.charAt(t);
        if (f == null || Number(f) != f) {
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
      if (u0.isPayloadValid(n.type, o))
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
      case ce.CONNECT:
        return typeof t == "object";
      case ce.DISCONNECT:
        return t === void 0;
      case ce.CONNECT_ERROR:
        return typeof t == "string" || typeof t == "object";
      case ce.EVENT:
      case ce.BINARY_EVENT:
        return Array.isArray(t) && t.length > 0;
      case ce.ACK:
      case ce.BINARY_ACK:
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
class ta {
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
      const t = js(this.reconPack, this.buffers);
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
const ra = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: u0,
  Encoder: ea,
  get PacketType() {
    return ce;
  },
  protocol: Js
}, Symbol.toStringTag, { value: "Module" }));
function Pe(e, r, t) {
  return e.on(r, t), function() {
    e.off(r, t);
  };
}
const na = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Vn extends ge {
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
      Pe(r, "open", this.onopen.bind(this)),
      Pe(r, "packet", this.onpacket.bind(this)),
      Pe(r, "error", this.onerror.bind(this)),
      Pe(r, "close", this.onclose.bind(this))
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
    if (na.hasOwnProperty(r))
      throw new Error('"' + r.toString() + '" is a reserved event name');
    if (t.unshift(r), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(t), this;
    const n = {
      type: ce.EVENT,
      data: t
    };
    if (n.options = {}, n.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
      const f = this.ids++, a = t.pop();
      this._registerAckCallback(f, a), n.id = f;
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
      for (let f = 0; f < this.sendBuffer.length; f++)
        this.sendBuffer[f].id === r && this.sendBuffer.splice(f, 1);
      t.call(this, new Error("operation has timed out"));
    }, i);
    this.acks[r] = (...f) => {
      this.io.clearTimeoutFn(o), t.apply(this, [null, ...f]);
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
      t.push((f, a) => n ? f ? o(f) : i(a) : i(f)), this.emit(r, ...t);
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
      type: ce.CONNECT,
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
        case ce.CONNECT:
          r.data && r.data.sid ? this.onconnect(r.data.sid, r.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case ce.EVENT:
        case ce.BINARY_EVENT:
          this.onevent(r);
          break;
        case ce.ACK:
        case ce.BINARY_ACK:
          this.onack(r);
          break;
        case ce.DISCONNECT:
          this.ondisconnect();
          break;
        case ce.CONNECT_ERROR:
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
        type: ce.ACK,
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
    return this.connected && this.packet({ type: ce.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function vt(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
vt.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var r = Math.random(), t = Math.floor(r * this.jitter * e);
    e = Math.floor(r * 10) & 1 ? e + t : e - t;
  }
  return Math.min(e, this.max) | 0;
};
vt.prototype.reset = function() {
  this.attempts = 0;
};
vt.prototype.setMin = function(e) {
  this.ms = e;
};
vt.prototype.setMax = function(e) {
  this.max = e;
};
vt.prototype.setJitter = function(e) {
  this.jitter = e;
};
class t0 extends ge {
  constructor(r, t) {
    var n;
    super(), this.nsps = {}, this.subs = [], r && typeof r == "object" && (t = r, r = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, Nr(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((n = t.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new vt({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = r;
    const i = t.parser || ra;
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
    this.engine = new Un(this.uri, this.opts);
    const t = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = Pe(t, "open", function() {
      n.onopen(), r && r();
    }), o = Pe(t, "error", (f) => {
      n.cleanup(), n._readyState = "closed", this.emitReserved("error", f), r ? r(f) : n.maybeReconnectOnOpen();
    });
    if (this._timeout !== !1) {
      const f = this._timeout;
      f === 0 && i();
      const a = this.setTimeoutFn(() => {
        i(), t.close(), t.emit("error", new Error("timeout"));
      }, f);
      this.opts.autoUnref && a.unref(), this.subs.push(function() {
        clearTimeout(a);
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
    this.subs.push(Pe(r, "ping", this.onping.bind(this)), Pe(r, "data", this.ondata.bind(this)), Pe(r, "error", this.onerror.bind(this)), Pe(r, "close", this.onclose.bind(this)), Pe(this.decoder, "decoded", this.ondecoded.bind(this)));
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
    Wn(() => {
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
    return n ? this._autoConnect && !n.active && n.connect() : (n = new Vn(this, r, t), this.nsps[r] = n), n;
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
const Et = {};
function Gr(e, r) {
  typeof e == "object" && (r = e, e = void 0), r = r || {};
  const t = Vs(e, r.path || "/socket.io"), n = t.source, i = t.id, o = t.path, f = Et[i] && o in Et[i].nsps, a = r.forceNew || r["force new connection"] || r.multiplex === !1 || f;
  let h;
  return a ? h = new t0(n, r) : (Et[i] || (Et[i] = new t0(n, r)), h = Et[i]), t.query && !r.query && (r.query = t.queryKey), h.socket(t.path, r);
}
Object.assign(Gr, {
  Manager: t0,
  Socket: Vn,
  io: Gr,
  connect: Gr
});
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var ht = 9e15, et = 1e9, r0 = "0123456789abcdef", Cr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Br = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", n0 = {
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
  minE: -ht,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: ht,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Kn, Ze, oe = !0, Dr = "[DecimalError] ", Je = Dr + "Invalid argument: ", Zn = Dr + "Precision limit exceeded", Gn = Dr + "crypto unavailable", Xn = "[object Decimal]", Ee = Math.floor, me = Math.pow, ia = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, oa = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, sa = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Qn = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Me = 1e7, te = 7, aa = 9007199254740991, fa = Cr.length - 1, i0 = Br.length - 1, U = { toStringTag: Xn };
U.absoluteValue = U.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ee(e);
};
U.ceil = function() {
  return ee(new this.constructor(this), this.e + 1, 2);
};
U.clampedTo = U.clamp = function(e, r) {
  var t, n = this, i = n.constructor;
  if (e = new i(e), r = new i(r), !e.s || !r.s)
    return new i(NaN);
  if (e.gt(r))
    throw Error(Je + r);
  return t = n.cmp(e), t < 0 ? e : n.cmp(r) > 0 ? r : new i(n);
};
U.comparedTo = U.cmp = function(e) {
  var r, t, n, i, o = this, f = o.d, a = (e = new o.constructor(e)).d, h = o.s, s = e.s;
  if (!f || !a)
    return !h || !s ? NaN : h !== s ? h : f === a ? 0 : !f ^ h < 0 ? 1 : -1;
  if (!f[0] || !a[0])
    return f[0] ? h : a[0] ? -s : 0;
  if (h !== s)
    return h;
  if (o.e !== e.e)
    return o.e > e.e ^ h < 0 ? 1 : -1;
  for (n = f.length, i = a.length, r = 0, t = n < i ? n : i; r < t; ++r)
    if (f[r] !== a[r])
      return f[r] > a[r] ^ h < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ h < 0 ? 1 : -1;
};
U.cosine = U.cos = function() {
  var e, r, t = this, n = t.constructor;
  return t.d ? t.d[0] ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + te, n.rounding = 1, t = ca(n, ri(n, t)), n.precision = e, n.rounding = r, ee(Ze == 2 || Ze == 3 ? t.neg() : t, e, r, !0)) : new n(1) : new n(NaN);
};
U.cubeRoot = U.cbrt = function() {
  var e, r, t, n, i, o, f, a, h, s, c = this, l = c.constructor;
  if (!c.isFinite() || c.isZero())
    return new l(c);
  for (oe = !1, o = c.s * me(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (t = we(c.d), e = c.e, (o = (e - t.length + 1) % 3) && (t += o == 1 || o == -2 ? "0" : "00"), o = me(t, 1 / 3), e = Ee((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? t = "5e" + e : (t = o.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new l(t), n.s = c.s) : n = new l(o.toString()), f = (e = l.precision) + 3; ; )
    if (a = n, h = a.times(a).times(a), s = h.plus(c), n = de(s.plus(c).times(a), s.plus(h), f + 2, 1), we(a.d).slice(0, f) === (t = we(n.d)).slice(0, f))
      if (t = t.slice(f - 3, f + 1), t == "9999" || !i && t == "4999") {
        if (!i && (ee(a, e + 1, 0), a.times(a).times(a).eq(c))) {
          n = a;
          break;
        }
        f += 4, i = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (ee(n, e + 1, 1), r = !n.times(n).times(n).eq(c));
        break;
      }
  return oe = !0, ee(n, e, l.rounding, r);
};
U.decimalPlaces = U.dp = function() {
  var e, r = this.d, t = NaN;
  if (r) {
    if (e = r.length - 1, t = (e - Ee(this.e / te)) * te, e = r[e], e)
      for (; e % 10 == 0; e /= 10)
        t--;
    t < 0 && (t = 0);
  }
  return t;
};
U.dividedBy = U.div = function(e) {
  return de(this, new this.constructor(e));
};
U.dividedToIntegerBy = U.divToInt = function(e) {
  var r = this, t = r.constructor;
  return ee(de(r, new t(e), 0, 1, 1), t.precision, t.rounding);
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
  var r = this.cmp(e);
  return r == 1 || r === 0;
};
U.hyperbolicCosine = U.cosh = function() {
  var e, r, t, n, i, o = this, f = o.constructor, a = new f(1);
  if (!o.isFinite())
    return new f(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return a;
  t = f.precision, n = f.rounding, f.precision = t + Math.max(o.e, o.sd()) + 4, f.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), r = (1 / Or(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = dt(f, 1, o.times(r), new f(1), !0);
  for (var h, s = e, c = new f(8); s--; )
    h = o.times(o), o = a.minus(h.times(c.minus(h.times(c))));
  return ee(o, f.precision = t, f.rounding = n, !0);
};
U.hyperbolicSine = U.sinh = function() {
  var e, r, t, n, i = this, o = i.constructor;
  if (!i.isFinite() || i.isZero())
    return new o(i);
  if (r = o.precision, t = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
    i = dt(o, 2, i, i, !0);
  else {
    e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / Or(5, e)), i = dt(o, 2, i, i, !0);
    for (var f, a = new o(5), h = new o(16), s = new o(20); e--; )
      f = i.times(i), i = i.times(a.plus(f.times(h.times(f).plus(s))));
  }
  return o.precision = r, o.rounding = t, ee(i, r, t, !0);
};
U.hyperbolicTangent = U.tanh = function() {
  var e, r, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 7, n.rounding = 1, de(t.sinh(), t.cosh(), n.precision = e, n.rounding = r)) : new n(t.s);
};
U.inverseCosine = U.acos = function() {
  var e, r = this, t = r.constructor, n = r.abs().cmp(1), i = t.precision, o = t.rounding;
  return n !== -1 ? n === 0 ? r.isNeg() ? He(t, i, o) : new t(0) : new t(NaN) : r.isZero() ? He(t, i + 4, o).times(0.5) : (t.precision = i + 6, t.rounding = 1, r = r.asin(), e = He(t, i + 4, o).times(0.5), t.precision = i, t.rounding = o, e.minus(r));
};
U.inverseHyperbolicCosine = U.acosh = function() {
  var e, r, t = this, n = t.constructor;
  return t.lte(1) ? new n(t.eq(1) ? 0 : NaN) : t.isFinite() ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(Math.abs(t.e), t.sd()) + 4, n.rounding = 1, oe = !1, t = t.times(t).minus(1).sqrt().plus(t), oe = !0, n.precision = e, n.rounding = r, t.ln()) : new n(t);
};
U.inverseHyperbolicSine = U.asinh = function() {
  var e, r, t = this, n = t.constructor;
  return !t.isFinite() || t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 2 * Math.max(Math.abs(t.e), t.sd()) + 6, n.rounding = 1, oe = !1, t = t.times(t).plus(1).sqrt().plus(t), oe = !0, n.precision = e, n.rounding = r, t.ln());
};
U.inverseHyperbolicTangent = U.atanh = function() {
  var e, r, t, n, i = this, o = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, r = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? ee(new o(i), e, r, !0) : (o.precision = t = n - i.e, i = de(i.plus(1), new o(1).minus(i), t + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = r, i.times(0.5))) : new o(NaN);
};
U.inverseSine = U.asin = function() {
  var e, r, t, n, i = this, o = i.constructor;
  return i.isZero() ? new o(i) : (r = i.abs().cmp(1), t = o.precision, n = o.rounding, r !== -1 ? r === 0 ? (e = He(o, t + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = t + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = t, o.rounding = n, i.times(2)));
};
U.inverseTangent = U.atan = function() {
  var e, r, t, n, i, o, f, a, h, s = this, c = s.constructor, l = c.precision, u = c.rounding;
  if (s.isFinite()) {
    if (s.isZero())
      return new c(s);
    if (s.abs().eq(1) && l + 4 <= i0)
      return f = He(c, l + 4, u).times(0.25), f.s = s.s, f;
  } else {
    if (!s.s)
      return new c(NaN);
    if (l + 4 <= i0)
      return f = He(c, l + 4, u).times(0.5), f.s = s.s, f;
  }
  for (c.precision = a = l + 10, c.rounding = 1, t = Math.min(28, a / te + 2 | 0), e = t; e; --e)
    s = s.div(s.times(s).plus(1).sqrt().plus(1));
  for (oe = !1, r = Math.ceil(a / te), n = 1, h = s.times(s), f = new c(s), i = s; e !== -1; )
    if (i = i.times(h), o = f.minus(i.div(n += 2)), i = i.times(h), f = o.plus(i.div(n += 2)), f.d[r] !== void 0)
      for (e = r; f.d[e] === o.d[e] && e--; )
        ;
  return t && (f = f.times(2 << t - 1)), oe = !0, ee(f, c.precision = l, c.rounding = u, !0);
};
U.isFinite = function() {
  return !!this.d;
};
U.isInteger = U.isInt = function() {
  return !!this.d && Ee(this.e / te) > this.d.length - 2;
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
  var r, t, n, i, o, f, a, h, s = this, c = s.constructor, l = c.precision, u = c.rounding, p = 5;
  if (e == null)
    e = new c(10), r = !0;
  else {
    if (e = new c(e), t = e.d, e.s < 0 || !t || !t[0] || e.eq(1))
      return new c(NaN);
    r = e.eq(10);
  }
  if (t = s.d, s.s < 0 || !t || !t[0] || s.eq(1))
    return new c(t && !t[0] ? -1 / 0 : s.s != 1 ? NaN : t ? 0 : 1 / 0);
  if (r)
    if (t.length > 1)
      o = !0;
    else {
      for (i = t[0]; i % 10 === 0; )
        i /= 10;
      o = i !== 1;
    }
  if (oe = !1, a = l + p, f = je(s, a), n = r ? kr(c, a + 10) : je(e, a), h = de(f, n, a, 1), kt(h.d, i = l, u))
    do
      if (a += 10, f = je(s, a), n = r ? kr(c, a + 10) : je(e, a), h = de(f, n, a, 1), !o) {
        +we(h.d).slice(i + 1, i + 15) + 1 == 1e14 && (h = ee(h, l + 1, 0));
        break;
      }
    while (kt(h.d, i += 10, u));
  return oe = !0, ee(h, l, u);
};
U.minus = U.sub = function(e) {
  var r, t, n, i, o, f, a, h, s, c, l, u, p = this, g = p.constructor;
  if (e = new g(e), !p.d || !e.d)
    return !p.s || !e.s ? e = new g(NaN) : p.d ? e.s = -e.s : e = new g(e.d || p.s !== e.s ? p : NaN), e;
  if (p.s != e.s)
    return e.s = -e.s, p.plus(e);
  if (s = p.d, u = e.d, a = g.precision, h = g.rounding, !s[0] || !u[0]) {
    if (u[0])
      e.s = -e.s;
    else if (s[0])
      e = new g(p);
    else
      return new g(h === 3 ? -0 : 0);
    return oe ? ee(e, a, h) : e;
  }
  if (t = Ee(e.e / te), c = Ee(p.e / te), s = s.slice(), o = c - t, o) {
    for (l = o < 0, l ? (r = s, o = -o, f = u.length) : (r = u, t = c, f = s.length), n = Math.max(Math.ceil(a / te), f) + 2, o > n && (o = n, r.length = 1), r.reverse(), n = o; n--; )
      r.push(0);
    r.reverse();
  } else {
    for (n = s.length, f = u.length, l = n < f, l && (f = n), n = 0; n < f; n++)
      if (s[n] != u[n]) {
        l = s[n] < u[n];
        break;
      }
    o = 0;
  }
  for (l && (r = s, s = u, u = r, e.s = -e.s), f = s.length, n = u.length - f; n > 0; --n)
    s[f++] = 0;
  for (n = u.length; n > o; ) {
    if (s[--n] < u[n]) {
      for (i = n; i && s[--i] === 0; )
        s[i] = Me - 1;
      --s[i], s[n] += Me;
    }
    s[n] -= u[n];
  }
  for (; s[--f] === 0; )
    s.pop();
  for (; s[0] === 0; s.shift())
    --t;
  return s[0] ? (e.d = s, e.e = Tr(s, t), oe ? ee(e, a, h) : e) : new g(h === 3 ? -0 : 0);
};
U.modulo = U.mod = function(e) {
  var r, t = this, n = t.constructor;
  return e = new n(e), !t.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || t.d && !t.d[0] ? ee(new n(t), n.precision, n.rounding) : (oe = !1, n.modulo == 9 ? (r = de(t, e.abs(), 0, 3, 1), r.s *= e.s) : r = de(t, e, 0, n.modulo, 1), r = r.times(e), oe = !0, t.minus(r));
};
U.naturalExponential = U.exp = function() {
  return o0(this);
};
U.naturalLogarithm = U.ln = function() {
  return je(this);
};
U.negated = U.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ee(e);
};
U.plus = U.add = function(e) {
  var r, t, n, i, o, f, a, h, s, c, l = this, u = l.constructor;
  if (e = new u(e), !l.d || !e.d)
    return !l.s || !e.s ? e = new u(NaN) : l.d || (e = new u(e.d || l.s === e.s ? l : NaN)), e;
  if (l.s != e.s)
    return e.s = -e.s, l.minus(e);
  if (s = l.d, c = e.d, a = u.precision, h = u.rounding, !s[0] || !c[0])
    return c[0] || (e = new u(l)), oe ? ee(e, a, h) : e;
  if (o = Ee(l.e / te), n = Ee(e.e / te), s = s.slice(), i = o - n, i) {
    for (i < 0 ? (t = s, i = -i, f = c.length) : (t = c, n = o, f = s.length), o = Math.ceil(a / te), f = o > f ? o + 1 : f + 1, i > f && (i = f, t.length = 1), t.reverse(); i--; )
      t.push(0);
    t.reverse();
  }
  for (f = s.length, i = c.length, f - i < 0 && (i = f, t = c, c = s, s = t), r = 0; i; )
    r = (s[--i] = s[i] + c[i] + r) / Me | 0, s[i] %= Me;
  for (r && (s.unshift(r), ++n), f = s.length; s[--f] == 0; )
    s.pop();
  return e.d = s, e.e = Tr(s, n), oe ? ee(e, a, h) : e;
};
U.precision = U.sd = function(e) {
  var r, t = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Je + e);
  return t.d ? (r = jn(t.d), e && t.e + 1 > r && (r = t.e + 1)) : r = NaN, r;
};
U.round = function() {
  var e = this, r = e.constructor;
  return ee(new r(e), e.e + 1, r.rounding);
};
U.sine = U.sin = function() {
  var e, r, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + te, n.rounding = 1, t = ha(n, ri(n, t)), n.precision = e, n.rounding = r, ee(Ze > 2 ? t.neg() : t, e, r, !0)) : new n(NaN);
};
U.squareRoot = U.sqrt = function() {
  var e, r, t, n, i, o, f = this, a = f.d, h = f.e, s = f.s, c = f.constructor;
  if (s !== 1 || !a || !a[0])
    return new c(!s || s < 0 && (!a || a[0]) ? NaN : a ? f : 1 / 0);
  for (oe = !1, s = Math.sqrt(+f), s == 0 || s == 1 / 0 ? (r = we(a), (r.length + h) % 2 == 0 && (r += "0"), s = Math.sqrt(r), h = Ee((h + 1) / 2) - (h < 0 || h % 2), s == 1 / 0 ? r = "5e" + h : (r = s.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + h), n = new c(r)) : n = new c(s.toString()), t = (h = c.precision) + 3; ; )
    if (o = n, n = o.plus(de(f, o, t + 2, 1)).times(0.5), we(o.d).slice(0, t) === (r = we(n.d)).slice(0, t))
      if (r = r.slice(t - 3, t + 1), r == "9999" || !i && r == "4999") {
        if (!i && (ee(o, h + 1, 0), o.times(o).eq(f))) {
          n = o;
          break;
        }
        t += 4, i = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (ee(n, h + 1, 1), e = !n.times(n).eq(f));
        break;
      }
  return oe = !0, ee(n, h, c.rounding, e);
};
U.tangent = U.tan = function() {
  var e, r, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 10, n.rounding = 1, t = t.sin(), t.s = 1, t = de(t, new n(1).minus(t.times(t)).sqrt(), e + 10, 0), n.precision = e, n.rounding = r, ee(Ze == 2 || Ze == 4 ? t.neg() : t, e, r, !0)) : new n(NaN);
};
U.times = U.mul = function(e) {
  var r, t, n, i, o, f, a, h, s, c = this, l = c.constructor, u = c.d, p = (e = new l(e)).d;
  if (e.s *= c.s, !u || !u[0] || !p || !p[0])
    return new l(!e.s || u && !u[0] && !p || p && !p[0] && !u ? NaN : !u || !p ? e.s / 0 : e.s * 0);
  for (t = Ee(c.e / te) + Ee(e.e / te), h = u.length, s = p.length, h < s && (o = u, u = p, p = o, f = h, h = s, s = f), o = [], f = h + s, n = f; n--; )
    o.push(0);
  for (n = s; --n >= 0; ) {
    for (r = 0, i = h + n; i > n; )
      a = o[i] + p[n] * u[i - n - 1] + r, o[i--] = a % Me | 0, r = a / Me | 0;
    o[i] = (o[i] + r) % Me | 0;
  }
  for (; !o[--f]; )
    o.pop();
  return r ? ++t : o.shift(), e.d = o, e.e = Tr(o, t), oe ? ee(e, l.precision, l.rounding) : e;
};
U.toBinary = function(e, r) {
  return h0(this, 2, e, r);
};
U.toDecimalPlaces = U.toDP = function(e, r) {
  var t = this, n = t.constructor;
  return t = new n(t), e === void 0 ? t : (Ae(e, 0, et), r === void 0 ? r = n.rounding : Ae(r, 0, 8), ee(t, e + t.e + 1, r));
};
U.toExponential = function(e, r) {
  var t, n = this, i = n.constructor;
  return e === void 0 ? t = We(n, !0) : (Ae(e, 0, et), r === void 0 ? r = i.rounding : Ae(r, 0, 8), n = ee(new i(n), e + 1, r), t = We(n, !0, e + 1)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
U.toFixed = function(e, r) {
  var t, n, i = this, o = i.constructor;
  return e === void 0 ? t = We(i) : (Ae(e, 0, et), r === void 0 ? r = o.rounding : Ae(r, 0, 8), n = ee(new o(i), e + i.e + 1, r), t = We(n, !1, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + t : t;
};
U.toFraction = function(e) {
  var r, t, n, i, o, f, a, h, s, c, l, u, p = this, g = p.d, _ = p.constructor;
  if (!g)
    return new _(p);
  if (s = t = new _(1), n = h = new _(0), r = new _(n), o = r.e = jn(g) - p.e - 1, f = o % te, r.d[0] = me(10, f < 0 ? te + f : f), e == null)
    e = o > 0 ? r : s;
  else {
    if (a = new _(e), !a.isInt() || a.lt(s))
      throw Error(Je + a);
    e = a.gt(r) ? o > 0 ? r : s : a;
  }
  for (oe = !1, a = new _(we(g)), c = _.precision, _.precision = o = g.length * te * 2; l = de(a, r, 0, 1, 1), i = t.plus(l.times(n)), i.cmp(e) != 1; )
    t = n, n = i, i = s, s = h.plus(l.times(i)), h = i, i = r, r = a.minus(l.times(i)), a = i;
  return i = de(e.minus(t), n, 0, 1, 1), h = h.plus(i.times(s)), t = t.plus(i.times(n)), h.s = s.s = p.s, u = de(s, n, o, 1).minus(p).abs().cmp(de(h, t, o, 1).minus(p).abs()) < 1 ? [s, n] : [h, t], _.precision = c, oe = !0, u;
};
U.toHexadecimal = U.toHex = function(e, r) {
  return h0(this, 16, e, r);
};
U.toNearest = function(e, r) {
  var t = this, n = t.constructor;
  if (t = new n(t), e == null) {
    if (!t.d)
      return t;
    e = new n(1), r = n.rounding;
  } else {
    if (e = new n(e), r === void 0 ? r = n.rounding : Ae(r, 0, 8), !t.d)
      return e.s ? t : e;
    if (!e.d)
      return e.s && (e.s = t.s), e;
  }
  return e.d[0] ? (oe = !1, t = de(t, e, 0, r, 1).times(e), oe = !0, ee(t)) : (e.s = t.s, t = e), t;
};
U.toNumber = function() {
  return +this;
};
U.toOctal = function(e, r) {
  return h0(this, 8, e, r);
};
U.toPower = U.pow = function(e) {
  var r, t, n, i, o, f, a = this, h = a.constructor, s = +(e = new h(e));
  if (!a.d || !e.d || !a.d[0] || !e.d[0])
    return new h(me(+a, s));
  if (a = new h(a), a.eq(1))
    return a;
  if (n = h.precision, o = h.rounding, e.eq(1))
    return ee(a, n, o);
  if (r = Ee(e.e / te), r >= e.d.length - 1 && (t = s < 0 ? -s : s) <= aa)
    return i = Jn(h, a, t, n), e.s < 0 ? new h(1).div(i) : ee(i, n, o);
  if (f = a.s, f < 0) {
    if (r < e.d.length - 1)
      return new h(NaN);
    if (e.d[r] & 1 || (f = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
      return a.s = f, a;
  }
  return t = me(+a, s), r = t == 0 || !isFinite(t) ? Ee(s * (Math.log("0." + we(a.d)) / Math.LN10 + a.e + 1)) : new h(t + "").e, r > h.maxE + 1 || r < h.minE - 1 ? new h(r > 0 ? f / 0 : 0) : (oe = !1, h.rounding = a.s = 1, t = Math.min(12, (r + "").length), i = o0(e.times(je(a, n + t)), n), i.d && (i = ee(i, n + 5, 1), kt(i.d, n, o) && (r = n + 10, i = ee(o0(e.times(je(a, r + t)), r), r + 5, 1), +we(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = ee(i, n + 1, 0)))), i.s = f, oe = !0, h.rounding = o, ee(i, n, o));
};
U.toPrecision = function(e, r) {
  var t, n = this, i = n.constructor;
  return e === void 0 ? t = We(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (Ae(e, 1, et), r === void 0 ? r = i.rounding : Ae(r, 0, 8), n = ee(new i(n), e, r), t = We(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
U.toSignificantDigits = U.toSD = function(e, r) {
  var t = this, n = t.constructor;
  return e === void 0 ? (e = n.precision, r = n.rounding) : (Ae(e, 1, et), r === void 0 ? r = n.rounding : Ae(r, 0, 8)), ee(new n(t), e, r);
};
U.toString = function() {
  var e = this, r = e.constructor, t = We(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + t : t;
};
U.truncated = U.trunc = function() {
  return ee(new this.constructor(this), this.e + 1, 1);
};
U.valueOf = U.toJSON = function() {
  var e = this, r = e.constructor, t = We(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() ? "-" + t : t;
};
function we(e) {
  var r, t, n, i = e.length - 1, o = "", f = e[0];
  if (i > 0) {
    for (o += f, r = 1; r < i; r++)
      n = e[r] + "", t = te - n.length, t && (o += Qe(t)), o += n;
    f = e[r], n = f + "", t = te - n.length, t && (o += Qe(t));
  } else if (f === 0)
    return "0";
  for (; f % 10 === 0; )
    f /= 10;
  return o + f;
}
function Ae(e, r, t) {
  if (e !== ~~e || e < r || e > t)
    throw Error(Je + e);
}
function kt(e, r, t, n) {
  var i, o, f, a;
  for (o = e[0]; o >= 10; o /= 10)
    --r;
  return --r < 0 ? (r += te, i = 0) : (i = Math.ceil((r + 1) / te), r %= te), o = me(10, te - r), a = e[i] % o | 0, n == null ? r < 3 ? (r == 0 ? a = a / 100 | 0 : r == 1 && (a = a / 10 | 0), f = t < 4 && a == 99999 || t > 3 && a == 49999 || a == 5e4 || a == 0) : f = (t < 4 && a + 1 == o || t > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == me(10, r - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? a = a / 1e3 | 0 : r == 1 ? a = a / 100 | 0 : r == 2 && (a = a / 10 | 0), f = (n || t < 4) && a == 9999 || !n && t > 3 && a == 4999) : f = ((n || t < 4) && a + 1 == o || !n && t > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == me(10, r - 3) - 1, f;
}
function $t(e, r, t) {
  for (var n, i = [0], o, f = 0, a = e.length; f < a; ) {
    for (o = i.length; o--; )
      i[o] *= r;
    for (i[0] += r0.indexOf(e.charAt(f++)), n = 0; n < i.length; n++)
      i[n] > t - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / t | 0, i[n] %= t);
  }
  return i.reverse();
}
function ca(e, r) {
  var t, n, i;
  if (r.isZero())
    return r;
  n = r.d.length, n < 32 ? (t = Math.ceil(n / 3), i = (1 / Or(4, t)).toString()) : (t = 16, i = "2.3283064365386962890625e-10"), e.precision += t, r = dt(e, 1, r.times(i), new e(1));
  for (var o = t; o--; ) {
    var f = r.times(r);
    r = f.times(f).minus(f).times(8).plus(1);
  }
  return e.precision -= t, r;
}
var de = function() {
  function e(n, i, o) {
    var f, a = 0, h = n.length;
    for (n = n.slice(); h--; )
      f = n[h] * i + a, n[h] = f % o | 0, a = f / o | 0;
    return a && n.unshift(a), n;
  }
  function r(n, i, o, f) {
    var a, h;
    if (o != f)
      h = o > f ? 1 : -1;
    else
      for (a = h = 0; a < o; a++)
        if (n[a] != i[a]) {
          h = n[a] > i[a] ? 1 : -1;
          break;
        }
    return h;
  }
  function t(n, i, o, f) {
    for (var a = 0; o--; )
      n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * f + n[o] - i[o];
    for (; !n[0] && n.length > 1; )
      n.shift();
  }
  return function(n, i, o, f, a, h) {
    var s, c, l, u, p, g, _, S, T, y, d, x, m, E, B, N, I, w, A, L, O = n.constructor, M = n.s == i.s ? 1 : -1, P = n.d, z = i.d;
    if (!P || !P[0] || !z || !z[0])
      return new O(
        // Return NaN if either NaN, or both Infinity or 0.
        !n.s || !i.s || (P ? z && P[0] == z[0] : !z) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          P && P[0] == 0 || !z ? M * 0 : M / 0
        )
      );
    for (h ? (p = 1, c = n.e - i.e) : (h = Me, p = te, c = Ee(n.e / p) - Ee(i.e / p)), A = z.length, I = P.length, T = new O(M), y = T.d = [], l = 0; z[l] == (P[l] || 0); l++)
      ;
    if (z[l] > (P[l] || 0) && c--, o == null ? (E = o = O.precision, f = O.rounding) : a ? E = o + (n.e - i.e) + 1 : E = o, E < 0)
      y.push(1), g = !0;
    else {
      if (E = E / p + 2 | 0, l = 0, A == 1) {
        for (u = 0, z = z[0], E++; (l < I || u) && E--; l++)
          B = u * h + (P[l] || 0), y[l] = B / z | 0, u = B % z | 0;
        g = u || l < I;
      } else {
        for (u = h / (z[0] + 1) | 0, u > 1 && (z = e(z, u, h), P = e(P, u, h), A = z.length, I = P.length), N = A, d = P.slice(0, A), x = d.length; x < A; )
          d[x++] = 0;
        L = z.slice(), L.unshift(0), w = z[0], z[1] >= h / 2 && ++w;
        do
          u = 0, s = r(z, d, A, x), s < 0 ? (m = d[0], A != x && (m = m * h + (d[1] || 0)), u = m / w | 0, u > 1 ? (u >= h && (u = h - 1), _ = e(z, u, h), S = _.length, x = d.length, s = r(_, d, S, x), s == 1 && (u--, t(_, A < S ? L : z, S, h))) : (u == 0 && (s = u = 1), _ = z.slice()), S = _.length, S < x && _.unshift(0), t(d, _, x, h), s == -1 && (x = d.length, s = r(z, d, A, x), s < 1 && (u++, t(d, A < x ? L : z, x, h))), x = d.length) : s === 0 && (u++, d = [0]), y[l++] = u, s && d[0] ? d[x++] = P[N] || 0 : (d = [P[N]], x = 1);
        while ((N++ < I || d[0] !== void 0) && E--);
        g = d[0] !== void 0;
      }
      y[0] || y.shift();
    }
    if (p == 1)
      T.e = c, Kn = g;
    else {
      for (l = 1, u = y[0]; u >= 10; u /= 10)
        l++;
      T.e = l + c * p - 1, ee(T, a ? o + T.e + 1 : o, f, g);
    }
    return T;
  };
}();
function ee(e, r, t, n) {
  var i, o, f, a, h, s, c, l, u, p = e.constructor;
  e:
    if (r != null) {
      if (l = e.d, !l)
        return e;
      for (i = 1, a = l[0]; a >= 10; a /= 10)
        i++;
      if (o = r - i, o < 0)
        o += te, f = r, c = l[u = 0], h = c / me(10, i - f - 1) % 10 | 0;
      else if (u = Math.ceil((o + 1) / te), a = l.length, u >= a)
        if (n) {
          for (; a++ <= u; )
            l.push(0);
          c = h = 0, i = 1, o %= te, f = o - te + 1;
        } else
          break e;
      else {
        for (c = a = l[u], i = 1; a >= 10; a /= 10)
          i++;
        o %= te, f = o - te + i, h = f < 0 ? 0 : c / me(10, i - f - 1) % 10 | 0;
      }
      if (n = n || r < 0 || l[u + 1] !== void 0 || (f < 0 ? c : c % me(10, i - f - 1)), s = t < 4 ? (h || n) && (t == 0 || t == (e.s < 0 ? 3 : 2)) : h > 5 || h == 5 && (t == 4 || n || t == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? f > 0 ? c / me(10, i - f) : 0 : l[u - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), r < 1 || !l[0])
        return l.length = 0, s ? (r -= e.e + 1, l[0] = me(10, (te - r % te) % te), e.e = -r || 0) : l[0] = e.e = 0, e;
      if (o == 0 ? (l.length = u, a = 1, u--) : (l.length = u + 1, a = me(10, te - o), l[u] = f > 0 ? (c / me(10, i - f) % me(10, f) | 0) * a : 0), s)
        for (; ; )
          if (u == 0) {
            for (o = 1, f = l[0]; f >= 10; f /= 10)
              o++;
            for (f = l[0] += a, a = 1; f >= 10; f /= 10)
              a++;
            o != a && (e.e++, l[0] == Me && (l[0] = 1));
            break;
          } else {
            if (l[u] += a, l[u] != Me)
              break;
            l[u--] = 0, a = 1;
          }
      for (o = l.length; l[--o] === 0; )
        l.pop();
    }
  return oe && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e;
}
function We(e, r, t) {
  if (!e.isFinite())
    return ti(e);
  var n, i = e.e, o = we(e.d), f = o.length;
  return r ? (t && (n = t - f) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Qe(n) : f > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + Qe(-i - 1) + o, t && (n = t - f) > 0 && (o += Qe(n))) : i >= f ? (o += Qe(i + 1 - f), t && (n = t - i - 1) > 0 && (o = o + "." + Qe(n))) : ((n = i + 1) < f && (o = o.slice(0, n) + "." + o.slice(n)), t && (n = t - f) > 0 && (i + 1 === f && (o += "."), o += Qe(n))), o;
}
function Tr(e, r) {
  var t = e[0];
  for (r *= te; t >= 10; t /= 10)
    r++;
  return r;
}
function kr(e, r, t) {
  if (r > fa)
    throw oe = !0, t && (e.precision = t), Error(Zn);
  return ee(new e(Cr), r, 1, !0);
}
function He(e, r, t) {
  if (r > i0)
    throw Error(Zn);
  return ee(new e(Br), r, t, !0);
}
function jn(e) {
  var r = e.length - 1, t = r * te + 1;
  if (r = e[r], r) {
    for (; r % 10 == 0; r /= 10)
      t--;
    for (r = e[0]; r >= 10; r /= 10)
      t++;
  }
  return t;
}
function Qe(e) {
  for (var r = ""; e--; )
    r += "0";
  return r;
}
function Jn(e, r, t, n) {
  var i, o = new e(1), f = Math.ceil(n / te + 4);
  for (oe = !1; ; ) {
    if (t % 2 && (o = o.times(r), gn(o.d, f) && (i = !0)), t = Ee(t / 2), t === 0) {
      t = o.d.length - 1, i && o.d[t] === 0 && ++o.d[t];
      break;
    }
    r = r.times(r), gn(r.d, f);
  }
  return oe = !0, o;
}
function bn(e) {
  return e.d[e.d.length - 1] & 1;
}
function ei(e, r, t) {
  for (var n, i = new e(r[0]), o = 0; ++o < r.length; )
    if (n = new e(r[o]), n.s)
      i[t](n) && (i = n);
    else {
      i = n;
      break;
    }
  return i;
}
function o0(e, r) {
  var t, n, i, o, f, a, h, s = 0, c = 0, l = 0, u = e.constructor, p = u.rounding, g = u.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new u(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (r == null ? (oe = !1, h = g) : h = r, a = new u(0.03125); e.e > -2; )
    e = e.times(a), l += 5;
  for (n = Math.log(me(2, l)) / Math.LN10 * 2 + 5 | 0, h += n, t = o = f = new u(1), u.precision = h; ; ) {
    if (o = ee(o.times(e), h, 1), t = t.times(++c), a = f.plus(de(o, t, h, 1)), we(a.d).slice(0, h) === we(f.d).slice(0, h)) {
      for (i = l; i--; )
        f = ee(f.times(f), h, 1);
      if (r == null)
        if (s < 3 && kt(f.d, h - n, p, s))
          u.precision = h += 10, t = o = a = new u(1), c = 0, s++;
        else
          return ee(f, u.precision = g, p, oe = !0);
      else
        return u.precision = g, f;
    }
    f = a;
  }
}
function je(e, r) {
  var t, n, i, o, f, a, h, s, c, l, u, p = 1, g = 10, _ = e, S = _.d, T = _.constructor, y = T.rounding, d = T.precision;
  if (_.s < 0 || !S || !S[0] || !_.e && S[0] == 1 && S.length == 1)
    return new T(S && !S[0] ? -1 / 0 : _.s != 1 ? NaN : S ? 0 : _);
  if (r == null ? (oe = !1, c = d) : c = r, T.precision = c += g, t = we(S), n = t.charAt(0), Math.abs(o = _.e) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && t.charAt(1) > 3; )
      _ = _.times(e), t = we(_.d), n = t.charAt(0), p++;
    o = _.e, n > 1 ? (_ = new T("0." + t), o++) : _ = new T(n + "." + t.slice(1));
  } else
    return s = kr(T, c + 2, d).times(o + ""), _ = je(new T(n + "." + t.slice(1)), c - g).plus(s), T.precision = d, r == null ? ee(_, d, y, oe = !0) : _;
  for (l = _, h = f = _ = de(_.minus(1), _.plus(1), c, 1), u = ee(_.times(_), c, 1), i = 3; ; ) {
    if (f = ee(f.times(u), c, 1), s = h.plus(de(f, new T(i), c, 1)), we(s.d).slice(0, c) === we(h.d).slice(0, c))
      if (h = h.times(2), o !== 0 && (h = h.plus(kr(T, c + 2, d).times(o + ""))), h = de(h, new T(p), c, 1), r == null)
        if (kt(h.d, c - g, y, a))
          T.precision = c += g, s = f = _ = de(l.minus(1), l.plus(1), c, 1), u = ee(_.times(_), c, 1), i = a = 1;
        else
          return ee(h, T.precision = d, y, oe = !0);
      else
        return T.precision = d, h;
    h = s, i += 2;
  }
}
function ti(e) {
  return String(e.s * e.s / 0);
}
function s0(e, r) {
  var t, n, i;
  for ((t = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (n = r.search(/e/i)) > 0 ? (t < 0 && (t = n), t += +r.slice(n + 1), r = r.substring(0, n)) : t < 0 && (t = r.length), n = 0; r.charCodeAt(n) === 48; n++)
    ;
  for (i = r.length; r.charCodeAt(i - 1) === 48; --i)
    ;
  if (r = r.slice(n, i), r) {
    if (i -= n, e.e = t = t - n - 1, e.d = [], n = (t + 1) % te, t < 0 && (n += te), n < i) {
      for (n && e.d.push(+r.slice(0, n)), i -= te; n < i; )
        e.d.push(+r.slice(n, n += te));
      r = r.slice(n), n = te - r.length;
    } else
      n -= i;
    for (; n--; )
      r += "0";
    e.d.push(+r), oe && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function ua(e, r) {
  var t, n, i, o, f, a, h, s, c;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), Qn.test(r))
      return s0(e, r);
  } else if (r === "Infinity" || r === "NaN")
    return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (oa.test(r))
    t = 16, r = r.toLowerCase();
  else if (ia.test(r))
    t = 2;
  else if (sa.test(r))
    t = 8;
  else
    throw Error(Je + r);
  for (o = r.search(/p/i), o > 0 ? (h = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), f = o >= 0, n = e.constructor, f && (r = r.replace(".", ""), a = r.length, o = a - o, i = Jn(n, new n(t), o, o * 2)), s = $t(r, t, Me), c = s.length - 1, o = c; s[o] === 0; --o)
    s.pop();
  return o < 0 ? new n(e.s * 0) : (e.e = Tr(s, c), e.d = s, oe = !1, f && (e = de(e, i, a * 4)), h && (e = e.times(Math.abs(h) < 54 ? me(2, h) : At.pow(2, h))), oe = !0, e);
}
function ha(e, r) {
  var t, n = r.d.length;
  if (n < 3)
    return r.isZero() ? r : dt(e, 2, r, r);
  t = 1.4 * Math.sqrt(n), t = t > 16 ? 16 : t | 0, r = r.times(1 / Or(5, t)), r = dt(e, 2, r, r);
  for (var i, o = new e(5), f = new e(16), a = new e(20); t--; )
    i = r.times(r), r = r.times(o.plus(i.times(f.times(i).minus(a))));
  return r;
}
function dt(e, r, t, n, i) {
  var o, f, a, h, s = e.precision, c = Math.ceil(s / te);
  for (oe = !1, h = t.times(t), a = new e(n); ; ) {
    if (f = de(a.times(h), new e(r++ * r++), s, 1), a = i ? n.plus(f) : n.minus(f), n = de(f.times(h), new e(r++ * r++), s, 1), f = a.plus(n), f.d[c] !== void 0) {
      for (o = c; f.d[o] === a.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = a, a = n, n = f, f = o;
  }
  return oe = !0, f.d.length = c + 1, f;
}
function Or(e, r) {
  for (var t = e; --r; )
    t *= e;
  return t;
}
function ri(e, r) {
  var t, n = r.s < 0, i = He(e, e.precision, 1), o = i.times(0.5);
  if (r = r.abs(), r.lte(o))
    return Ze = n ? 4 : 1, r;
  if (t = r.divToInt(i), t.isZero())
    Ze = n ? 3 : 2;
  else {
    if (r = r.minus(t.times(i)), r.lte(o))
      return Ze = bn(t) ? n ? 2 : 3 : n ? 4 : 1, r;
    Ze = bn(t) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return r.minus(i).abs();
}
function h0(e, r, t, n) {
  var i, o, f, a, h, s, c, l, u, p = e.constructor, g = t !== void 0;
  if (g ? (Ae(t, 1, et), n === void 0 ? n = p.rounding : Ae(n, 0, 8)) : (t = p.precision, n = p.rounding), !e.isFinite())
    c = ti(e);
  else {
    for (c = We(e), f = c.indexOf("."), g ? (i = 2, r == 16 ? t = t * 4 - 3 : r == 8 && (t = t * 3 - 2)) : i = r, f >= 0 && (c = c.replace(".", ""), u = new p(1), u.e = c.length - f, u.d = $t(We(u), 10, i), u.e = u.d.length), l = $t(c, 10, i), o = h = l.length; l[--h] == 0; )
      l.pop();
    if (!l[0])
      c = g ? "0p+0" : "0";
    else {
      if (f < 0 ? o-- : (e = new p(e), e.d = l, e.e = o, e = de(e, u, t, n, 0, i), l = e.d, o = e.e, s = Kn), f = l[t], a = i / 2, s = s || l[t + 1] !== void 0, s = n < 4 ? (f !== void 0 || s) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : f > a || f === a && (n === 4 || s || n === 6 && l[t - 1] & 1 || n === (e.s < 0 ? 8 : 7)), l.length = t, s)
        for (; ++l[--t] > i - 1; )
          l[t] = 0, t || (++o, l.unshift(1));
      for (h = l.length; !l[h - 1]; --h)
        ;
      for (f = 0, c = ""; f < h; f++)
        c += r0.charAt(l[f]);
      if (g) {
        if (h > 1)
          if (r == 16 || r == 8) {
            for (f = r == 16 ? 4 : 3, --h; h % f; h++)
              c += "0";
            for (l = $t(c, i, r), h = l.length; !l[h - 1]; --h)
              ;
            for (f = 1, c = "1."; f < h; f++)
              c += r0.charAt(l[f]);
          } else
            c = c.charAt(0) + "." + c.slice(1);
        c = c + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; )
          c = "0" + c;
        c = "0." + c;
      } else if (++o > h)
        for (o -= h; o--; )
          c += "0";
      else
        o < h && (c = c.slice(0, o) + "." + c.slice(o));
    }
    c = (r == 16 ? "0x" : r == 2 ? "0b" : r == 8 ? "0o" : "") + c;
  }
  return e.s < 0 ? "-" + c : c;
}
function gn(e, r) {
  if (e.length > r)
    return e.length = r, !0;
}
function la(e) {
  return new this(e).abs();
}
function da(e) {
  return new this(e).acos();
}
function va(e) {
  return new this(e).acosh();
}
function pa(e, r) {
  return new this(e).plus(r);
}
function xa(e) {
  return new this(e).asin();
}
function ba(e) {
  return new this(e).asinh();
}
function ga(e) {
  return new this(e).atan();
}
function ma(e) {
  return new this(e).atanh();
}
function ya(e, r) {
  e = new this(e), r = new this(r);
  var t, n = this.precision, i = this.rounding, o = n + 4;
  return !e.s || !r.s ? t = new this(NaN) : !e.d && !r.d ? (t = He(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), t.s = e.s) : !r.d || e.isZero() ? (t = r.s < 0 ? He(this, n, i) : new this(0), t.s = e.s) : !e.d || r.isZero() ? (t = He(this, o, 1).times(0.5), t.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, t = this.atan(de(e, r, o, 1)), r = He(this, o, 1), this.precision = n, this.rounding = i, t = e.s < 0 ? t.minus(r) : t.plus(r)) : t = this.atan(de(e, r, o, 1)), t;
}
function _a(e) {
  return new this(e).cbrt();
}
function wa(e) {
  return ee(e = new this(e), e.e + 1, 2);
}
function Ea(e, r, t) {
  return new this(e).clamp(r, t);
}
function Sa(e) {
  if (!e || typeof e != "object")
    throw Error(Dr + "Object expected");
  var r, t, n, i = e.defaults === !0, o = [
    "precision",
    1,
    et,
    "rounding",
    0,
    8,
    "toExpNeg",
    -ht,
    0,
    "toExpPos",
    0,
    ht,
    "maxE",
    0,
    ht,
    "minE",
    -ht,
    0,
    "modulo",
    0,
    9
  ];
  for (r = 0; r < o.length; r += 3)
    if (t = o[r], i && (this[t] = n0[t]), (n = e[t]) !== void 0)
      if (Ee(n) === n && n >= o[r + 1] && n <= o[r + 2])
        this[t] = n;
      else
        throw Error(Je + t + ": " + n);
  if (t = "crypto", i && (this[t] = n0[t]), (n = e[t]) !== void 0)
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[t] = !0;
        else
          throw Error(Gn);
      else
        this[t] = !1;
    else
      throw Error(Je + t + ": " + n);
  return this;
}
function Ca(e) {
  return new this(e).cos();
}
function Ba(e) {
  return new this(e).cosh();
}
function ni(e) {
  var r, t, n;
  function i(o) {
    var f, a, h, s = this;
    if (!(s instanceof i))
      return new i(o);
    if (s.constructor = i, mn(o)) {
      s.s = o.s, oe ? !o.d || o.e > i.maxE ? (s.e = NaN, s.d = null) : o.e < i.minE ? (s.e = 0, s.d = [0]) : (s.e = o.e, s.d = o.d.slice()) : (s.e = o.e, s.d = o.d ? o.d.slice() : o.d);
      return;
    }
    if (h = typeof o, h === "number") {
      if (o === 0) {
        s.s = 1 / o < 0 ? -1 : 1, s.e = 0, s.d = [0];
        return;
      }
      if (o < 0 ? (o = -o, s.s = -1) : s.s = 1, o === ~~o && o < 1e7) {
        for (f = 0, a = o; a >= 10; a /= 10)
          f++;
        oe ? f > i.maxE ? (s.e = NaN, s.d = null) : f < i.minE ? (s.e = 0, s.d = [0]) : (s.e = f, s.d = [o]) : (s.e = f, s.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (s.s = NaN), s.e = NaN, s.d = null;
        return;
      }
      return s0(s, o.toString());
    } else if (h !== "string")
      throw Error(Je + o);
    return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), s.s = -1) : (a === 43 && (o = o.slice(1)), s.s = 1), Qn.test(o) ? s0(s, o) : ua(s, o);
  }
  if (i.prototype = U, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Sa, i.clone = ni, i.isDecimal = mn, i.abs = la, i.acos = da, i.acosh = va, i.add = pa, i.asin = xa, i.asinh = ba, i.atan = ga, i.atanh = ma, i.atan2 = ya, i.cbrt = _a, i.ceil = wa, i.clamp = Ea, i.cos = Ca, i.cosh = Ba, i.div = ka, i.exp = Aa, i.floor = Ra, i.hypot = Na, i.ln = Da, i.log = Ta, i.log10 = Ia, i.log2 = Oa, i.max = La, i.min = Pa, i.mod = Ha, i.mul = Ma, i.pow = Fa, i.random = qa, i.round = za, i.sign = $a, i.sin = Wa, i.sinh = Ua, i.sqrt = Ya, i.sub = Va, i.sum = Ka, i.tan = Za, i.tanh = Ga, i.trunc = Xa, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < n.length; )
      e.hasOwnProperty(t = n[r++]) || (e[t] = this[t]);
  return i.config(e), i;
}
function ka(e, r) {
  return new this(e).div(r);
}
function Aa(e) {
  return new this(e).exp();
}
function Ra(e) {
  return ee(e = new this(e), e.e + 1, 3);
}
function Na() {
  var e, r, t = new this(0);
  for (oe = !1, e = 0; e < arguments.length; )
    if (r = new this(arguments[e++]), r.d)
      t.d && (t = t.plus(r.times(r)));
    else {
      if (r.s)
        return oe = !0, new this(1 / 0);
      t = r;
    }
  return oe = !0, t.sqrt();
}
function mn(e) {
  return e instanceof At || e && e.toStringTag === Xn || !1;
}
function Da(e) {
  return new this(e).ln();
}
function Ta(e, r) {
  return new this(e).log(r);
}
function Oa(e) {
  return new this(e).log(2);
}
function Ia(e) {
  return new this(e).log(10);
}
function La() {
  return ei(this, arguments, "lt");
}
function Pa() {
  return ei(this, arguments, "gt");
}
function Ha(e, r) {
  return new this(e).mod(r);
}
function Ma(e, r) {
  return new this(e).mul(r);
}
function Fa(e, r) {
  return new this(e).pow(r);
}
function qa(e) {
  var r, t, n, i, o = 0, f = new this(1), a = [];
  if (e === void 0 ? e = this.precision : Ae(e, 1, et), n = Math.ceil(e / te), this.crypto)
    if (crypto.getRandomValues)
      for (r = crypto.getRandomValues(new Uint32Array(n)); o < n; )
        i = r[o], i >= 429e7 ? r[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
    else if (crypto.randomBytes) {
      for (r = crypto.randomBytes(n *= 4); o < n; )
        i = r[o] + (r[o + 1] << 8) + (r[o + 2] << 16) + ((r[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(r, o) : (a.push(i % 1e7), o += 4);
      o = n / 4;
    } else
      throw Error(Gn);
  else
    for (; o < n; )
      a[o++] = Math.random() * 1e7 | 0;
  for (n = a[--o], e %= te, n && e && (i = me(10, te - e), a[o] = (n / i | 0) * i); a[o] === 0; o--)
    a.pop();
  if (o < 0)
    t = 0, a = [0];
  else {
    for (t = -1; a[0] === 0; t -= te)
      a.shift();
    for (n = 1, i = a[0]; i >= 10; i /= 10)
      n++;
    n < te && (t -= te - n);
  }
  return f.e = t, f.d = a, f;
}
function za(e) {
  return ee(e = new this(e), e.e + 1, this.rounding);
}
function $a(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Wa(e) {
  return new this(e).sin();
}
function Ua(e) {
  return new this(e).sinh();
}
function Ya(e) {
  return new this(e).sqrt();
}
function Va(e, r) {
  return new this(e).sub(r);
}
function Ka() {
  var e = 0, r = arguments, t = new this(r[e]);
  for (oe = !1; t.s && ++e < r.length; )
    t = t.plus(r[e]);
  return oe = !0, ee(t, this.precision, this.rounding);
}
function Za(e) {
  return new this(e).tan();
}
function Ga(e) {
  return new this(e).tanh();
}
function Xa(e) {
  return ee(e = new this(e), e.e + 1, 1);
}
U[Symbol.for("nodejs.util.inspect.custom")] = U.toString;
U[Symbol.toStringTag] = "Decimal";
var At = U.constructor = ni(n0);
Cr = new At(Cr);
Br = new At(Br);
var yn = {}, Qa = {
  get exports() {
    return yn;
  },
  set exports(e) {
    yn = e;
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
  })(re, function() {
    var t = t || {}, n = document.querySelectorAll.bind(document), i = Object.prototype.toString, o = "ontouchstart" in window;
    function f(d) {
      return d !== null && d === d.window;
    }
    function a(d) {
      return f(d) ? d : d.nodeType === 9 && d.defaultView;
    }
    function h(d) {
      var x = typeof d;
      return x === "function" || x === "object" && !!d;
    }
    function s(d) {
      return h(d) && d.nodeType > 0;
    }
    function c(d) {
      var x = i.call(d);
      return x === "[object String]" ? n(d) : h(d) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(x) && d.hasOwnProperty("length") ? d : s(d) ? [d] : [];
    }
    function l(d) {
      var x, m, E = { top: 0, left: 0 }, B = d && d.ownerDocument;
      return x = B.documentElement, typeof d.getBoundingClientRect < "u" && (E = d.getBoundingClientRect()), m = a(B), {
        top: E.top + m.pageYOffset - x.clientTop,
        left: E.left + m.pageXOffset - x.clientLeft
      };
    }
    function u(d) {
      var x = "";
      for (var m in d)
        d.hasOwnProperty(m) && (x += m + ":" + d[m] + ";");
      return x;
    }
    var p = {
      // Effect duration
      duration: 750,
      // Effect delay (check for scroll before showing effect)
      delay: 200,
      show: function(d, x, m) {
        if (d.button === 2)
          return !1;
        x = x || this;
        var E = document.createElement("div");
        E.className = "waves-ripple waves-rippling", x.appendChild(E);
        var B = l(x), N = 0, I = 0;
        "touches" in d && d.touches.length ? (N = d.touches[0].pageY - B.top, I = d.touches[0].pageX - B.left) : (N = d.pageY - B.top, I = d.pageX - B.left), I = I >= 0 ? I : 0, N = N >= 0 ? N : 0;
        var w = "scale(" + x.clientWidth / 100 * 3 + ")", A = "translate(0,0)";
        m && (A = "translate(" + m.x + "px, " + m.y + "px)"), E.setAttribute("data-hold", Date.now()), E.setAttribute("data-x", I), E.setAttribute("data-y", N), E.setAttribute("data-scale", w), E.setAttribute("data-translate", A);
        var L = {
          top: N + "px",
          left: I + "px"
        };
        E.classList.add("waves-notransition"), E.setAttribute("style", u(L)), E.classList.remove("waves-notransition"), L["-webkit-transform"] = w + " " + A, L["-moz-transform"] = w + " " + A, L["-ms-transform"] = w + " " + A, L["-o-transform"] = w + " " + A, L.transform = w + " " + A, L.opacity = "1";
        var O = d.type === "mousemove" ? 2500 : p.duration;
        L["-webkit-transition-duration"] = O + "ms", L["-moz-transition-duration"] = O + "ms", L["-o-transition-duration"] = O + "ms", L["transition-duration"] = O + "ms", E.setAttribute("style", u(L));
      },
      hide: function(d, x) {
        x = x || this;
        for (var m = x.getElementsByClassName("waves-rippling"), E = 0, B = m.length; E < B; E++)
          _(d, x, m[E]);
        o && (x.removeEventListener("touchend", p.hide), x.removeEventListener("touchcancel", p.hide)), x.removeEventListener("mouseup", p.hide), x.removeEventListener("mouseleave", p.hide);
      }
    }, g = {
      // Wrap <input> tag so it can perform the effect
      input: function(d) {
        var x = d.parentNode;
        if (!(x.tagName.toLowerCase() === "i" && x.classList.contains("waves-effect"))) {
          var m = document.createElement("i");
          m.className = d.className + " waves-input-wrapper", d.className = "waves-button-input", x.replaceChild(m, d), m.appendChild(d);
          var E = window.getComputedStyle(d, null), B = E.color, N = E.backgroundColor;
          m.setAttribute("style", "color:" + B + ";background:" + N), d.setAttribute("style", "background-color:rgba(0,0,0,0);");
        }
      },
      // Wrap <img> tag so it can perform the effect
      img: function(d) {
        var x = d.parentNode;
        if (!(x.tagName.toLowerCase() === "i" && x.classList.contains("waves-effect"))) {
          var m = document.createElement("i");
          x.replaceChild(m, d), m.appendChild(d);
        }
      }
    };
    function _(d, x, m) {
      if (m) {
        m.classList.remove("waves-rippling");
        var E = m.getAttribute("data-x"), B = m.getAttribute("data-y"), N = m.getAttribute("data-scale"), I = m.getAttribute("data-translate"), w = Date.now() - Number(m.getAttribute("data-hold")), A = 350 - w;
        A < 0 && (A = 0), d.type === "mousemove" && (A = 150);
        var L = d.type === "mousemove" ? 2500 : p.duration;
        setTimeout(function() {
          var O = {
            top: B + "px",
            left: E + "px",
            opacity: "0",
            // Duration
            "-webkit-transition-duration": L + "ms",
            "-moz-transition-duration": L + "ms",
            "-o-transition-duration": L + "ms",
            "transition-duration": L + "ms",
            "-webkit-transform": N + " " + I,
            "-moz-transform": N + " " + I,
            "-ms-transform": N + " " + I,
            "-o-transform": N + " " + I,
            transform: N + " " + I
          };
          m.setAttribute("style", u(O)), setTimeout(function() {
            try {
              x.removeChild(m);
            } catch {
              return !1;
            }
          }, L);
        }, A);
      }
    }
    var S = {
      /* uses an integer rather than bool so there's no issues with
       * needing to clear timeouts if another touch event occurred
       * within the 500ms. Cannot mouseup between touchstart and
       * touchend, nor in the 500ms after touchend. */
      touches: 0,
      allowEvent: function(d) {
        var x = !0;
        return /^(mousedown|mousemove)$/.test(d.type) && S.touches && (x = !1), x;
      },
      registerEvent: function(d) {
        var x = d.type;
        x === "touchstart" ? S.touches += 1 : /^(touchend|touchcancel)$/.test(x) && setTimeout(function() {
          S.touches && (S.touches -= 1);
        }, 500);
      }
    };
    function T(d) {
      if (S.allowEvent(d) === !1)
        return null;
      for (var x = null, m = d.target || d.srcElement; m.parentElement; ) {
        if (!(m instanceof SVGElement) && m.classList.contains("waves-effect")) {
          x = m;
          break;
        }
        m = m.parentElement;
      }
      return x;
    }
    function y(d) {
      var x = T(d);
      if (x !== null) {
        if (x.disabled || x.getAttribute("disabled") || x.classList.contains("disabled"))
          return;
        if (S.registerEvent(d), d.type === "touchstart" && p.delay) {
          var m = !1, E = setTimeout(function() {
            E = null, p.show(d, x);
          }, p.delay), B = function(w) {
            E && (clearTimeout(E), E = null, p.show(d, x)), m || (m = !0, p.hide(w, x)), I();
          }, N = function(w) {
            E && (clearTimeout(E), E = null), B(w), I();
          };
          x.addEventListener("touchmove", N, !1), x.addEventListener("touchend", B, !1), x.addEventListener("touchcancel", B, !1);
          var I = function() {
            x.removeEventListener("touchmove", N), x.removeEventListener("touchend", B), x.removeEventListener("touchcancel", B);
          };
        } else
          p.show(d, x), o && (x.addEventListener("touchend", p.hide, !1), x.addEventListener("touchcancel", p.hide, !1)), x.addEventListener("mouseup", p.hide, !1), x.addEventListener("mouseleave", p.hide, !1);
      }
    }
    return t.init = function(d) {
      var x = document.body;
      d = d || {}, "duration" in d && (p.duration = d.duration), "delay" in d && (p.delay = d.delay), o && (x.addEventListener("touchstart", y, !1), x.addEventListener("touchcancel", S.registerEvent, !1), x.addEventListener("touchend", S.registerEvent, !1)), x.addEventListener("mousedown", y, !1);
    }, t.attach = function(d, x) {
      d = c(d), i.call(x) === "[object Array]" && (x = x.join(" ")), x = x ? " " + x : "";
      for (var m, E, B = 0, N = d.length; B < N; B++)
        m = d[B], E = m.tagName.toLowerCase(), ["input", "img"].indexOf(E) !== -1 && (g[E](m), m = m.parentElement), m.className.indexOf("waves-effect") === -1 && (m.className += " waves-effect" + x);
    }, t.ripple = function(d, x) {
      d = c(d);
      var m = d.length;
      if (x = x || {}, x.wait = x.wait || 0, x.position = x.position || null, m) {
        for (var E, B, N, I = {}, w = 0, A = {
          type: "mousedown",
          button: 1
        }, L = function(M, P) {
          return function() {
            p.hide(M, P);
          };
        }; w < m; w++)
          if (E = d[w], B = x.position || {
            x: E.clientWidth / 2,
            y: E.clientHeight / 2
          }, N = l(E), I.x = N.left + B.x, I.y = N.top + B.y, A.pageX = I.x, A.pageY = I.y, p.show(A, E), x.wait >= 0 && x.wait !== null) {
            var O = {
              type: "mouseup",
              button: 1
            };
            setTimeout(L(O, E), x.wait);
          }
      }
    }, t.calm = function(d) {
      d = c(d);
      for (var x = {
        type: "mouseup",
        button: 1
      }, m = 0, E = d.length; m < E; m++)
        p.hide(x, d[m]);
    }, t.displayEffect = function(d) {
      console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), t.init(d);
    }, t;
  });
})(Qa);
const ie = { lunarInfo: [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560], solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"], Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"], Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"], solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"], sTermInfo: ["9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722"], nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"], nStr2: ["初", "十", "廿", "卅"], nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"], lunarFestival: [{ month: "正", day: "初一", name: "春节" }, { month: "正", day: "十五", name: "元宵节" }, { month: "二", day: "初二", name: "龙抬头" }, { month: "五", day: "初五", name: "端午节" }, { month: "七", day: "初七", name: "七夕节" }, { month: "七", day: "十五", name: "中元节" }, { month: "八", day: "十五", name: "中秋节" }, { month: "九", day: "初九", name: "重阳节" }, { month: "腊", day: "除夕", name: "除夕" }], solarFestival: [{ month: 1, day: 1, name: "元旦节" }, { month: 3, day: 8, name: "妇女节" }, { month: 3, day: 12, name: "植树节" }, { month: 4, day: 5, name: "清明节" }, { month: 5, day: 1, name: "劳动节" }, { month: 5, day: 4, name: "青年节" }, { month: 6, day: 1, name: "儿童节" }, { month: 7, day: 1, name: "建党节" }, { month: 8, day: 1, name: "建军节" }, { month: 9, day: 10, name: "教师节" }, { month: 10, day: 1, name: "国庆节" }], lYearDays: function(e) {
  var r, t = 348;
  for (r = 32768; r > 8; r >>= 1)
    t += ie.lunarInfo[e - 1900] & r ? 1 : 0;
  return t + ie.leapDays(e);
}, leapMonth: function(e) {
  return 15 & ie.lunarInfo[e - 1900];
}, leapDays: function(e) {
  return ie.leapMonth(e) ? 65536 & ie.lunarInfo[e - 1900] ? 30 : 29 : 0;
}, monthDays: function(e, r) {
  return r > 12 || r < 1 ? -1 : ie.lunarInfo[e - 1900] & 65536 >> r ? 30 : 29;
}, solarDays: function(e, r) {
  if (r > 12 || r < 1)
    return -1;
  var t = r - 1;
  return t == 1 ? e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 29 : 28 : ie.solarMonth[t];
}, toGanZhiYear: function(e) {
  var r = (e - 3) % 10, t = (e - 3) % 12;
  return r == 0 && (r = 10), t == 0 && (t = 12), ie.Gan[r - 1] + ie.Zhi[t - 1];
}, toAstro: function(e, r) {
  return "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2 * e - (r < [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22][e - 1] ? 2 : 0), 2) + "座";
}, toGanZhi: function(e) {
  return ie.Gan[e % 10] + ie.Zhi[e % 12];
}, getTerm: function(e, r) {
  if (e < 1900 || e > 2100 || r < 1 || r > 24)
    return -1;
  var t = ie.sTermInfo[e - 1900], n = [parseInt("0x" + t.substr(0, 5)).toString(), parseInt("0x" + t.substr(5, 5)).toString(), parseInt("0x" + t.substr(10, 5)).toString(), parseInt("0x" + t.substr(15, 5)).toString(), parseInt("0x" + t.substr(20, 5)).toString(), parseInt("0x" + t.substr(25, 5)).toString()], i = [n[0].substr(0, 1), n[0].substr(1, 2), n[0].substr(3, 1), n[0].substr(4, 2), n[1].substr(0, 1), n[1].substr(1, 2), n[1].substr(3, 1), n[1].substr(4, 2), n[2].substr(0, 1), n[2].substr(1, 2), n[2].substr(3, 1), n[2].substr(4, 2), n[3].substr(0, 1), n[3].substr(1, 2), n[3].substr(3, 1), n[3].substr(4, 2), n[4].substr(0, 1), n[4].substr(1, 2), n[4].substr(3, 1), n[4].substr(4, 2), n[5].substr(0, 1), n[5].substr(1, 2), n[5].substr(3, 1), n[5].substr(4, 2)];
  return parseInt(i[r - 1]);
}, toChinaMonth: function(e) {
  if (e > 12 || e < 1)
    return -1;
  var r = ie.nStr3[e - 1];
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
      r = ie.nStr2[Math.floor(e / 10)], r += ie.nStr1[e % 10];
  }
  return r;
}, getAnimal: function(e) {
  return ie.Animals[(e - 4) % 12];
}, getFestival: (e, r, t, n) => {
  let i = null;
  const o = parseInt(e + "");
  return i = o ? ie.solarFestival.find((f) => f.month === o && f.day == r) : ie.lunarFestival.find((f) => `${f.month}月` === e && f.day === r), i;
}, solar2lunar: function(e, r, t) {
  if (e < 1900 || e > 2100 || e == 1900 && r == 1 && t < 31)
    return -1;
  if (e)
    n = new Date(e, parseInt(r + "") - 1, t);
  else
    var n = /* @__PURE__ */ new Date();
  var i, o = 0, f = (e = n.getFullYear(), r = n.getMonth() + 1, t = n.getDate(), (Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()) - Date.UTC(1900, 0, 31)) / 864e5);
  for (i = 1900; i < 2101 && f > 0; i++)
    f -= o = ie.lYearDays(i);
  f < 0 && (f += o, i--);
  var a = /* @__PURE__ */ new Date(), h = !1;
  a.getFullYear() == e && a.getMonth() + 1 == r && a.getDate() == t && (h = !0);
  var s = n.getDay(), c = ie.nStr1[s];
  s == 0 && (s = 7);
  var l = i, u = ie.leapMonth(i), p = !1;
  for (i = 1; i < 13 && f > 0; i++)
    u > 0 && i == u + 1 && p == 0 ? (--i, p = !0, o = ie.leapDays(l)) : o = ie.monthDays(l, i), p == 1 && i == u + 1 && (p = !1), f -= o;
  f == 0 && u > 0 && i == u + 1 && (p ? p = !1 : (p = !0, --i)), f < 0 && (f += o, --i);
  var g = i, _ = f + 1, S = r - 1, T = ie.toGanZhiYear(l), y = ie.getTerm(l, 2 * r - 1), d = ie.getTerm(l, 2 * r), x = ie.toGanZhi(12 * (e - 1900) + r + 11);
  t >= y && (x = ie.toGanZhi(12 * (e - 1900) + r + 12));
  var m = !1, E = null;
  y == t && (m = !0, E = ie.solarTerm[2 * r - 2]), d == t && (m = !0, E = ie.solarTerm[2 * r - 1]);
  var B = Date.UTC(e, S, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, N = ie.toGanZhi(B + t - 1), I = ie.toAstro(r, t);
  const w = ie.toChinaMonth(g), A = ie.toChinaDay(_);
  return { lYear: l, lMonth: g, lDay: _, Animal: ie.getAnimal(l), IMonthCn: (p ? "闰" : "") + w, IDayCn: A, cYear: e, cMonth: r, cDay: t, gzYear: T, gzMonth: x, gzDay: N, isToday: h, isLeap: p, nWeek: s, ncWeek: "星期" + c, isTerm: m, Term: E, astro: I, festcn: ie.getFestival(w, A, e, r), fest: ie.getFestival(r, t, e) };
}, lunar2solar: function(e, r, t, n = !0) {
  n = !!n;
  var i = ie.leapMonth(e);
  if (ie.leapDays(e), n && i != r || e == 2100 && r == 12 && t > 1 || e == 1900 && r == 1 && t < 31)
    return -1;
  var o = ie.monthDays(e, r), f = o;
  if (n && (f = ie.leapDays(e)), e < 1900 || e > 2100 || t > f)
    return -1;
  for (var a = 0, h = 1900; h < e; h++)
    a += ie.lYearDays(h);
  var s = 0, c = !1;
  for (h = 1; h < r; h++)
    s = ie.leapMonth(e), c || s <= h && s > 0 && (a += ie.leapDays(e), c = !0), a += ie.monthDays(e, h);
  n && (a += o);
  var l = Date.UTC(1900, 1, 30, 0, 0, 0), u = new Date(864e5 * (a + t - 31) + l), p = u.getUTCFullYear(), g = u.getUTCMonth() + 1, _ = u.getUTCDate();
  return ie.solar2lunar(p, g, _);
} };
ie.lunar2solar;
for (let e = 0; e <= 15; e++)
  e.toString(16);
let ja = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof globalThis == "object" && globalThis.globalThis === globalThis ? globalThis : void 0;
ja.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && /Safari/.test(navigator.userAgent);
window.socketMap = /* @__PURE__ */ new Map();
At.set({ precision: 14 });
const Ja = Hi, _n = {
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
}, ef = {
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
}, tf = /* @__PURE__ */ Bi({
  __name: "IkDragList",
  props: ef,
  emits: ["change"],
  setup(e, { emit: r }) {
    const t = e, n = p0([]);
    ki(
      () => t.list,
      (h) => {
        n.value = Ja.cloneDeep(h);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    const i = Ai(() => ({
      ..._n,
      ...t,
      itemStyle: {
        ..._n.itemStyle,
        ...t.itemStyle
      }
    })), o = p0(!1), f = () => {
      o.value = !0;
    }, a = (h) => {
      o.value = !1;
      const s = t.list[h.oldIndex];
      r("change", n.value, {
        ...s,
        oldIndex: h.oldIndex,
        newIndex: h.newIndex
      });
    };
    return (h, s) => {
      const c = Ri("el-icon");
      return Kr(), x0(b0(Pi), {
        modelValue: n.value,
        "onUpdate:modelValue": s[0] || (s[0] = (l) => n.value = l),
        class: g0(["list-group", [i.value.groupClass]]),
        tag: "ul",
        attrs: i.value,
        animation: i.value.animation,
        group: i.value.group,
        disabled: i.value.disabled,
        "ghost-class": i.value.ghostClass,
        "force-fallback": i.value.ghostClass,
        "item-key": "order",
        onStart: f,
        onEnd: a
      }, {
        item: Zr(({ element: l }) => [
          m0(Ni, {
            type: "transition",
            name: "flip-list"
          }, {
            default: Zr(() => [
              h.$slots.item ? y0(h.$slots, "item", {
                key: 0,
                item: l
              }, void 0, !0) : (Kr(), Di("li", {
                key: 1,
                class: g0(["list-group-item", [i.value.itemClass]]),
                style: Ti({
                  borderRadius: `${i.value.itemStyle.radius}px`,
                  marginBottom: `${i.value.itemStyle.bottom}px`,
                  backgroundColor: `${i.value.itemStyle.background}`
                })
              }, [
                i.value.showIcon && !h.$slots.icon ? (Kr(), x0(c, { key: 0 }, {
                  default: Zr(() => [
                    m0(b0(Li))
                  ]),
                  _: 1
                })) : y0(h.$slots, "icon", { key: 1 }, void 0, !0),
                Oi(" " + Ii(l.label), 1)
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
const rf = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, i] of r)
    t[n] = i;
  return t;
}, nf = /* @__PURE__ */ rf(tf, [["__scopeId", "data-v-d2a34939"]]), cf = Mi(nf);
export {
  cf as IkDragList,
  cf as default
};
