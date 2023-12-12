var fs = Object.defineProperty;
var us = (e, t, r) => t in e ? fs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Nn = (e, t, r) => (us(e, typeof t != "symbol" ? t + "" : t, r), r);
import { defineComponent as cn, h as _0, computed as je, resolveComponent as it, openBlock as le, createBlock as ke, withCtx as ve, mergeProps as lt, createElementBlock as Ae, normalizeStyle as _e, normalizeClass as _t, unref as Ce, createElementVNode as ot, createTextVNode as Ge, toDisplayString as st, createVNode as Ke, createCommentVNode as yr, Fragment as $n, ref as wt, watch as zi, Transition as ls, renderSlot as S0, mergeModels as E0, useModel as hs, resolveDirective as ds, withDirectives as k0, createSlots as ps, renderList as vs, pushScopeId as xs, popScopeId as bs } from "vue";
import * as gs from "lodash-es";
import { DCaret as ms } from "@element-plus/icons-vue";
import ys from "vuedraggable";
const o0 = (e, t) => {
  if (e.install = (r) => {
    for (const n of [e, ...Object.values(t ?? {})])
      r.component(n.name, n);
  }, t)
    for (const [r, n] of Object.entries(t))
      e[r] = n;
  return e;
};
var re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ws(e) {
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
var C0 = {}, _s = {
  get exports() {
    return C0;
  },
  set exports(e) {
    C0 = e;
  }
};
function Yt(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var wr = {}, Ss = {
  get exports() {
    return wr;
  },
  set exports(e) {
    wr = e;
  }
};
const Es = {}, ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Es
}, Symbol.toStringTag, { value: "Module" })), Cs = /* @__PURE__ */ ws(ks);
var B0;
function ce() {
  return B0 || (B0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(re, function() {
      var r = r || function(n, i) {
        var o;
        if (typeof window < "u" && window.crypto && (o = window.crypto), typeof self < "u" && self.crypto && (o = self.crypto), typeof globalThis < "u" && globalThis.crypto && (o = globalThis.crypto), !o && typeof window < "u" && window.msCrypto && (o = window.msCrypto), !o && typeof re < "u" && re.crypto && (o = re.crypto), !o && typeof Yt == "function")
          try {
            o = Cs;
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
        }, c = Object.create || function() {
          function _() {
          }
          return function(d) {
            var x;
            return _.prototype = d, x = new _(), _.prototype = null, x;
          };
        }(), f = {}, s = f.lib = {}, u = s.Base = function() {
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
              var d = c(this);
              return _ && d.mixIn(_), (!d.hasOwnProperty("init") || this.init === d.init) && (d.init = function() {
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
              for (var d in _)
                _.hasOwnProperty(d) && (this[d] = _[d]);
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
        }(), h = s.WordArray = u.extend({
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
          init: function(_, d) {
            _ = this.words = _ || [], d != i ? this.sigBytes = d : this.sigBytes = _.length * 4;
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
            return (_ || p).stringify(this);
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
            var d = this.words, x = _.words, y = this.sigBytes, w = _.sigBytes;
            if (this.clamp(), y % 4)
              for (var k = 0; k < w; k++) {
                var B = x[k >>> 2] >>> 24 - k % 4 * 8 & 255;
                d[y + k >>> 2] |= B << 24 - (y + k) % 4 * 8;
              }
            else
              for (var I = 0; I < w; I += 4)
                d[y + I >>> 2] = x[I >>> 2];
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
            var _ = this.words, d = this.sigBytes;
            _[d >>> 2] &= 4294967295 << 32 - d % 4 * 8, _.length = n.ceil(d / 4);
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
            var _ = u.clone.call(this);
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
            for (var d = [], x = 0; x < _; x += 4)
              d.push(a());
            return new h.init(d, _);
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
          stringify: function(_) {
            for (var d = _.words, x = _.sigBytes, y = [], w = 0; w < x; w++) {
              var k = d[w >>> 2] >>> 24 - w % 4 * 8 & 255;
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
            for (var d = _.length, x = [], y = 0; y < d; y += 2)
              x[y >>> 3] |= parseInt(_.substr(y, 2), 16) << 24 - y % 8 * 4;
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
          stringify: function(_) {
            for (var d = _.words, x = _.sigBytes, y = [], w = 0; w < x; w++) {
              var k = d[w >>> 2] >>> 24 - w % 4 * 8 & 255;
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
            for (var d = _.length, x = [], y = 0; y < d; y++)
              x[y >>> 2] |= (_.charCodeAt(y) & 255) << 24 - y % 4 * 8;
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
          stringify: function(_) {
            try {
              return decodeURIComponent(escape(b.stringify(_)));
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
            return b.parse(unescape(encodeURIComponent(_)));
          }
        }, S = s.BufferedBlockAlgorithm = u.extend({
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
          _append: function(_) {
            typeof _ == "string" && (_ = g.parse(_)), this._data.concat(_), this._nDataBytes += _.sigBytes;
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
            var d, x = this._data, y = x.words, w = x.sigBytes, k = this.blockSize, B = k * 4, I = w / B;
            _ ? I = n.ceil(I) : I = n.max((I | 0) - this._minBufferSize, 0);
            var E = I * k, A = n.min(E * 4, w);
            if (E) {
              for (var L = 0; L < E; L += k)
                this._doProcessBlock(y, L);
              d = y.splice(0, E), x.sigBytes -= A;
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
            var _ = u.clone.call(this);
            return _._data = this._data.clone(), _;
          },
          _minBufferSize: 0
        });
        s.Hasher = S.extend({
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
          _createHelper: function(_) {
            return function(d, x) {
              return new _.init(x).finalize(d);
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
            return function(d, x) {
              return new T.HMAC.init(_, x).finalize(d);
            };
          }
        });
        var T = f.algo = {};
        return f;
      }(Math);
      return r;
    });
  }(Ss)), wr;
}
var _r = {}, Bs = {
  get exports() {
    return _r;
  },
  set exports(e) {
    _r = e;
  }
}, A0;
function fn() {
  return A0 || (A0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function(n) {
        var i = r, o = i.lib, a = o.Base, c = o.WordArray, f = i.x64 = {};
        f.Word = a.extend({
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
          init: function(s, u) {
            this.high = s, this.low = u;
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
        }), f.WordArray = a.extend({
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
          init: function(s, u) {
            s = this.words = s || [], u != n ? this.sigBytes = u : this.sigBytes = s.length * 8;
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
            for (var s = this.words, u = s.length, h = [], l = 0; l < u; l++) {
              var p = s[l];
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
            for (var s = a.clone.call(this), u = s.words = this.words.slice(0), h = u.length, l = 0; l < h; l++)
              u[l] = u[l].clone();
            return s;
          }
        });
      }(), r;
    });
  }(Bs)), _r;
}
var Sr = {}, As = {
  get exports() {
    return Sr;
  },
  set exports(e) {
    Sr = e;
  }
}, R0;
function Rs() {
  return R0 || (R0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var n = r, i = n.lib, o = i.WordArray, a = o.init, c = o.init = function(f) {
            if (f instanceof ArrayBuffer && (f = new Uint8Array(f)), (f instanceof Int8Array || typeof Uint8ClampedArray < "u" && f instanceof Uint8ClampedArray || f instanceof Int16Array || f instanceof Uint16Array || f instanceof Int32Array || f instanceof Uint32Array || f instanceof Float32Array || f instanceof Float64Array) && (f = new Uint8Array(f.buffer, f.byteOffset, f.byteLength)), f instanceof Uint8Array) {
              for (var s = f.byteLength, u = [], h = 0; h < s; h++)
                u[h >>> 2] |= f[h] << 24 - h % 4 * 8;
              a.call(this, u, s);
            } else
              a.apply(this, arguments);
          };
          c.prototype = o;
        }
      }(), r.lib.WordArray;
    });
  }(As)), Sr;
}
var Er = {}, Ts = {
  get exports() {
    return Er;
  },
  set exports(e) {
    Er = e;
  }
}, T0;
function Ns() {
  return T0 || (T0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, a = n.enc;
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
          stringify: function(f) {
            for (var s = f.words, u = f.sigBytes, h = [], l = 0; l < u; l += 2) {
              var p = s[l >>> 2] >>> 16 - l % 4 * 8 & 65535;
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
            for (var s = f.length, u = [], h = 0; h < s; h++)
              u[h >>> 1] |= f.charCodeAt(h) << 16 - h % 2 * 16;
            return o.create(u, s * 2);
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
          stringify: function(f) {
            for (var s = f.words, u = f.sigBytes, h = [], l = 0; l < u; l += 2) {
              var p = c(s[l >>> 2] >>> 16 - l % 4 * 8 & 65535);
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
            for (var s = f.length, u = [], h = 0; h < s; h++)
              u[h >>> 1] |= c(f.charCodeAt(h) << 16 - h % 2 * 16);
            return o.create(u, s * 2);
          }
        };
        function c(f) {
          return f << 8 & 4278255360 | f >>> 8 & 16711935;
        }
      }(), r.enc.Utf16;
    });
  }(Ts)), Er;
}
var kr = {}, Is = {
  get exports() {
    return kr;
  },
  set exports(e) {
    kr = e;
  }
}, N0;
function Et() {
  return N0 || (N0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, a = n.enc;
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
          stringify: function(f) {
            var s = f.words, u = f.sigBytes, h = this._map;
            f.clamp();
            for (var l = [], p = 0; p < u; p += 3)
              for (var b = s[p >>> 2] >>> 24 - p % 4 * 8 & 255, g = s[p + 1 >>> 2] >>> 24 - (p + 1) % 4 * 8 & 255, S = s[p + 2 >>> 2] >>> 24 - (p + 2) % 4 * 8 & 255, T = b << 16 | g << 8 | S, _ = 0; _ < 4 && p + _ * 0.75 < u; _++)
                l.push(h.charAt(T >>> 6 * (3 - _) & 63));
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
            var s = f.length, u = this._map, h = this._reverseMap;
            if (!h) {
              h = this._reverseMap = [];
              for (var l = 0; l < u.length; l++)
                h[u.charCodeAt(l)] = l;
            }
            var p = u.charAt(64);
            if (p) {
              var b = f.indexOf(p);
              b !== -1 && (s = b);
            }
            return c(f, s, h);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function c(f, s, u) {
          for (var h = [], l = 0, p = 0; p < s; p++)
            if (p % 4) {
              var b = u[f.charCodeAt(p - 1)] << p % 4 * 2, g = u[f.charCodeAt(p)] >>> 6 - p % 4 * 2, S = b | g;
              h[l >>> 2] |= S << 24 - l % 4 * 8, l++;
            }
          return o.create(h, l);
        }
      }(), r.enc.Base64;
    });
  }(Is)), kr;
}
var Cr = {}, Os = {
  get exports() {
    return Cr;
  },
  set exports(e) {
    Cr = e;
  }
}, I0;
function Ds() {
  return I0 || (I0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, a = n.enc;
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
          stringify: function(f, s = !0) {
            var u = f.words, h = f.sigBytes, l = s ? this._safe_map : this._map;
            f.clamp();
            for (var p = [], b = 0; b < h; b += 3)
              for (var g = u[b >>> 2] >>> 24 - b % 4 * 8 & 255, S = u[b + 1 >>> 2] >>> 24 - (b + 1) % 4 * 8 & 255, T = u[b + 2 >>> 2] >>> 24 - (b + 2) % 4 * 8 & 255, _ = g << 16 | S << 8 | T, d = 0; d < 4 && b + d * 0.75 < h; d++)
                p.push(l.charAt(_ >>> 6 * (3 - d) & 63));
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
          parse: function(f, s = !0) {
            var u = f.length, h = s ? this._safe_map : this._map, l = this._reverseMap;
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
        function c(f, s, u) {
          for (var h = [], l = 0, p = 0; p < s; p++)
            if (p % 4) {
              var b = u[f.charCodeAt(p - 1)] << p % 4 * 2, g = u[f.charCodeAt(p)] >>> 6 - p % 4 * 2, S = b | g;
              h[l >>> 2] |= S << 24 - l % 4 * 8, l++;
            }
          return o.create(h, l);
        }
      }(), r.enc.Base64url;
    });
  }(Os)), Cr;
}
var Br = {}, Ls = {
  get exports() {
    return Br;
  },
  set exports(e) {
    Br = e;
  }
}, O0;
function kt() {
  return O0 || (O0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function(n) {
        var i = r, o = i.lib, a = o.WordArray, c = o.Hasher, f = i.algo, s = [];
        (function() {
          for (var g = 0; g < 64; g++)
            s[g] = n.abs(n.sin(g + 1)) * 4294967296 | 0;
        })();
        var u = f.MD5 = c.extend({
          _doReset: function() {
            this._hash = new a.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(g, S) {
            for (var T = 0; T < 16; T++) {
              var _ = S + T, d = g[_];
              g[_] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360;
            }
            var x = this._hash.words, y = g[S + 0], w = g[S + 1], k = g[S + 2], B = g[S + 3], I = g[S + 4], E = g[S + 5], A = g[S + 6], L = g[S + 7], O = g[S + 8], $ = g[S + 9], P = g[S + 10], z = g[S + 11], V = g[S + 12], Z = g[S + 13], X = g[S + 14], J = g[S + 15], M = x[0], F = x[1], q = x[2], W = x[3];
            M = h(M, F, q, W, y, 7, s[0]), W = h(W, M, F, q, w, 12, s[1]), q = h(q, W, M, F, k, 17, s[2]), F = h(F, q, W, M, B, 22, s[3]), M = h(M, F, q, W, I, 7, s[4]), W = h(W, M, F, q, E, 12, s[5]), q = h(q, W, M, F, A, 17, s[6]), F = h(F, q, W, M, L, 22, s[7]), M = h(M, F, q, W, O, 7, s[8]), W = h(W, M, F, q, $, 12, s[9]), q = h(q, W, M, F, P, 17, s[10]), F = h(F, q, W, M, z, 22, s[11]), M = h(M, F, q, W, V, 7, s[12]), W = h(W, M, F, q, Z, 12, s[13]), q = h(q, W, M, F, X, 17, s[14]), F = h(F, q, W, M, J, 22, s[15]), M = l(M, F, q, W, w, 5, s[16]), W = l(W, M, F, q, A, 9, s[17]), q = l(q, W, M, F, z, 14, s[18]), F = l(F, q, W, M, y, 20, s[19]), M = l(M, F, q, W, E, 5, s[20]), W = l(W, M, F, q, P, 9, s[21]), q = l(q, W, M, F, J, 14, s[22]), F = l(F, q, W, M, I, 20, s[23]), M = l(M, F, q, W, $, 5, s[24]), W = l(W, M, F, q, X, 9, s[25]), q = l(q, W, M, F, B, 14, s[26]), F = l(F, q, W, M, O, 20, s[27]), M = l(M, F, q, W, Z, 5, s[28]), W = l(W, M, F, q, k, 9, s[29]), q = l(q, W, M, F, L, 14, s[30]), F = l(F, q, W, M, V, 20, s[31]), M = p(M, F, q, W, E, 4, s[32]), W = p(W, M, F, q, O, 11, s[33]), q = p(q, W, M, F, z, 16, s[34]), F = p(F, q, W, M, X, 23, s[35]), M = p(M, F, q, W, w, 4, s[36]), W = p(W, M, F, q, I, 11, s[37]), q = p(q, W, M, F, L, 16, s[38]), F = p(F, q, W, M, P, 23, s[39]), M = p(M, F, q, W, Z, 4, s[40]), W = p(W, M, F, q, y, 11, s[41]), q = p(q, W, M, F, B, 16, s[42]), F = p(F, q, W, M, A, 23, s[43]), M = p(M, F, q, W, $, 4, s[44]), W = p(W, M, F, q, V, 11, s[45]), q = p(q, W, M, F, J, 16, s[46]), F = p(F, q, W, M, k, 23, s[47]), M = b(M, F, q, W, y, 6, s[48]), W = b(W, M, F, q, L, 10, s[49]), q = b(q, W, M, F, X, 15, s[50]), F = b(F, q, W, M, E, 21, s[51]), M = b(M, F, q, W, V, 6, s[52]), W = b(W, M, F, q, B, 10, s[53]), q = b(q, W, M, F, P, 15, s[54]), F = b(F, q, W, M, w, 21, s[55]), M = b(M, F, q, W, O, 6, s[56]), W = b(W, M, F, q, J, 10, s[57]), q = b(q, W, M, F, A, 15, s[58]), F = b(F, q, W, M, Z, 21, s[59]), M = b(M, F, q, W, I, 6, s[60]), W = b(W, M, F, q, z, 10, s[61]), q = b(q, W, M, F, k, 15, s[62]), F = b(F, q, W, M, $, 21, s[63]), x[0] = x[0] + M | 0, x[1] = x[1] + F | 0, x[2] = x[2] + q | 0, x[3] = x[3] + W | 0;
          },
          _doFinalize: function() {
            var g = this._data, S = g.words, T = this._nDataBytes * 8, _ = g.sigBytes * 8;
            S[_ >>> 5] |= 128 << 24 - _ % 32;
            var d = n.floor(T / 4294967296), x = T;
            S[(_ + 64 >>> 9 << 4) + 15] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, S[(_ + 64 >>> 9 << 4) + 14] = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, g.sigBytes = (S.length + 1) * 4, this._process();
            for (var y = this._hash, w = y.words, k = 0; k < 4; k++) {
              var B = w[k];
              w[k] = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360;
            }
            return y;
          },
          clone: function() {
            var g = c.clone.call(this);
            return g._hash = this._hash.clone(), g;
          }
        });
        function h(g, S, T, _, d, x, y) {
          var w = g + (S & T | ~S & _) + d + y;
          return (w << x | w >>> 32 - x) + S;
        }
        function l(g, S, T, _, d, x, y) {
          var w = g + (S & _ | T & ~_) + d + y;
          return (w << x | w >>> 32 - x) + S;
        }
        function p(g, S, T, _, d, x, y) {
          var w = g + (S ^ T ^ _) + d + y;
          return (w << x | w >>> 32 - x) + S;
        }
        function b(g, S, T, _, d, x, y) {
          var w = g + (T ^ (S | ~_)) + d + y;
          return (w << x | w >>> 32 - x) + S;
        }
        i.MD5 = c._createHelper(u), i.HmacMD5 = c._createHmacHelper(u);
      }(Math), r.MD5;
    });
  }(Ls)), Br;
}
var Ar = {}, Ps = {
  get exports() {
    return Ar;
  },
  set exports(e) {
    Ar = e;
  }
}, D0;
function s0() {
  return D0 || (D0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, a = i.Hasher, c = n.algo, f = [], s = c.SHA1 = a.extend({
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
            for (var l = this._hash.words, p = l[0], b = l[1], g = l[2], S = l[3], T = l[4], _ = 0; _ < 80; _++) {
              if (_ < 16)
                f[_] = u[h + _] | 0;
              else {
                var d = f[_ - 3] ^ f[_ - 8] ^ f[_ - 14] ^ f[_ - 16];
                f[_] = d << 1 | d >>> 31;
              }
              var x = (p << 5 | p >>> 27) + T + f[_];
              _ < 20 ? x += (b & g | ~b & S) + 1518500249 : _ < 40 ? x += (b ^ g ^ S) + 1859775393 : _ < 60 ? x += (b & g | b & S | g & S) - 1894007588 : x += (b ^ g ^ S) - 899497514, T = S, S = g, g = b << 30 | b >>> 2, b = p, p = x;
            }
            l[0] = l[0] + p | 0, l[1] = l[1] + b | 0, l[2] = l[2] + g | 0, l[3] = l[3] + S | 0, l[4] = l[4] + T | 0;
          },
          _doFinalize: function() {
            var u = this._data, h = u.words, l = this._nDataBytes * 8, p = u.sigBytes * 8;
            return h[p >>> 5] |= 128 << 24 - p % 32, h[(p + 64 >>> 9 << 4) + 14] = Math.floor(l / 4294967296), h[(p + 64 >>> 9 << 4) + 15] = l, u.sigBytes = h.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var u = a.clone.call(this);
            return u._hash = this._hash.clone(), u;
          }
        });
        n.SHA1 = a._createHelper(s), n.HmacSHA1 = a._createHmacHelper(s);
      }(), r.SHA1;
    });
  }(Ps)), Ar;
}
var Rr = {}, Ms = {
  get exports() {
    return Rr;
  },
  set exports(e) {
    Rr = e;
  }
}, L0;
function qi() {
  return L0 || (L0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      return function(n) {
        var i = r, o = i.lib, a = o.WordArray, c = o.Hasher, f = i.algo, s = [], u = [];
        (function() {
          function p(T) {
            for (var _ = n.sqrt(T), d = 2; d <= _; d++)
              if (!(T % d))
                return !1;
            return !0;
          }
          function b(T) {
            return (T - (T | 0)) * 4294967296 | 0;
          }
          for (var g = 2, S = 0; S < 64; )
            p(g) && (S < 8 && (s[S] = b(n.pow(g, 1 / 2))), u[S] = b(n.pow(g, 1 / 3)), S++), g++;
        })();
        var h = [], l = f.SHA256 = c.extend({
          _doReset: function() {
            this._hash = new a.init(s.slice(0));
          },
          _doProcessBlock: function(p, b) {
            for (var g = this._hash.words, S = g[0], T = g[1], _ = g[2], d = g[3], x = g[4], y = g[5], w = g[6], k = g[7], B = 0; B < 64; B++) {
              if (B < 16)
                h[B] = p[b + B] | 0;
              else {
                var I = h[B - 15], E = (I << 25 | I >>> 7) ^ (I << 14 | I >>> 18) ^ I >>> 3, A = h[B - 2], L = (A << 15 | A >>> 17) ^ (A << 13 | A >>> 19) ^ A >>> 10;
                h[B] = E + h[B - 7] + L + h[B - 16];
              }
              var O = x & y ^ ~x & w, $ = S & T ^ S & _ ^ T & _, P = (S << 30 | S >>> 2) ^ (S << 19 | S >>> 13) ^ (S << 10 | S >>> 22), z = (x << 26 | x >>> 6) ^ (x << 21 | x >>> 11) ^ (x << 7 | x >>> 25), V = k + z + O + u[B] + h[B], Z = P + $;
              k = w, w = y, y = x, x = d + V | 0, d = _, _ = T, T = S, S = V + Z | 0;
            }
            g[0] = g[0] + S | 0, g[1] = g[1] + T | 0, g[2] = g[2] + _ | 0, g[3] = g[3] + d | 0, g[4] = g[4] + x | 0, g[5] = g[5] + y | 0, g[6] = g[6] + w | 0, g[7] = g[7] + k | 0;
          },
          _doFinalize: function() {
            var p = this._data, b = p.words, g = this._nDataBytes * 8, S = p.sigBytes * 8;
            return b[S >>> 5] |= 128 << 24 - S % 32, b[(S + 64 >>> 9 << 4) + 14] = n.floor(g / 4294967296), b[(S + 64 >>> 9 << 4) + 15] = g, p.sigBytes = b.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var p = c.clone.call(this);
            return p._hash = this._hash.clone(), p;
          }
        });
        i.SHA256 = c._createHelper(l), i.HmacSHA256 = c._createHmacHelper(l);
      }(Math), r.SHA256;
    });
  }(Ms)), Rr;
}
var Tr = {}, $s = {
  get exports() {
    return Tr;
  },
  set exports(e) {
    Tr = e;
  }
}, P0;
function Fs() {
  return P0 || (P0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), qi());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, a = n.algo, c = a.SHA256, f = a.SHA224 = c.extend({
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
            var s = c._doFinalize.call(this);
            return s.sigBytes -= 4, s;
          }
        });
        n.SHA224 = c._createHelper(f), n.HmacSHA224 = c._createHmacHelper(f);
      }(), r.SHA224;
    });
  }($s)), Tr;
}
var Nr = {}, Hs = {
  get exports() {
    return Nr;
  },
  set exports(e) {
    Nr = e;
  }
}, M0;
function Wi() {
  return M0 || (M0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), fn());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.Hasher, a = n.x64, c = a.Word, f = a.WordArray, s = n.algo;
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
        var p = s.SHA512 = o.extend({
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
            for (var S = this._hash.words, T = S[0], _ = S[1], d = S[2], x = S[3], y = S[4], w = S[5], k = S[6], B = S[7], I = T.high, E = T.low, A = _.high, L = _.low, O = d.high, $ = d.low, P = x.high, z = x.low, V = y.high, Z = y.low, X = w.high, J = w.low, M = k.high, F = k.low, q = B.high, W = B.low, ae = I, ue = E, xe = A, ne = L, be = O, Ee = $, Je = P, Me = z, Le = V, Te = Z, Pe = X, xt = J, bt = M, Ve = F, gt = q, et = W, Ne = 0; Ne < 80; Ne++) {
              var Ie, He, mt = l[Ne];
              if (Ne < 16)
                He = mt.high = b[g + Ne * 2] | 0, Ie = mt.low = b[g + Ne * 2 + 1] | 0;
              else {
                var Pt = l[Ne - 15], tt = Pt.high, ct = Pt.low, er = (tt >>> 1 | ct << 31) ^ (tt >>> 8 | ct << 24) ^ tt >>> 7, Mt = (ct >>> 1 | tt << 31) ^ (ct >>> 8 | tt << 24) ^ (ct >>> 7 | tt << 25), $t = l[Ne - 2], rt = $t.high, ft = $t.low, tr = (rt >>> 19 | ft << 13) ^ (rt << 3 | ft >>> 29) ^ rt >>> 6, Bt = (ft >>> 19 | rt << 13) ^ (ft << 3 | rt >>> 29) ^ (ft >>> 6 | rt << 26), rr = l[Ne - 7], gn = rr.high, Ft = rr.low, Ht = l[Ne - 16], mn = Ht.high, ze = Ht.low;
                Ie = Mt + Ft, He = er + gn + (Ie >>> 0 < Mt >>> 0 ? 1 : 0), Ie = Ie + Bt, He = He + tr + (Ie >>> 0 < Bt >>> 0 ? 1 : 0), Ie = Ie + ze, He = He + mn + (Ie >>> 0 < ze >>> 0 ? 1 : 0), mt.high = He, mt.low = Ie;
              }
              var yn = Le & Pe ^ ~Le & bt, nr = Te & xt ^ ~Te & Ve, ir = ae & xe ^ ae & be ^ xe & be, wn = ue & ne ^ ue & Ee ^ ne & Ee, _n = (ae >>> 28 | ue << 4) ^ (ae << 30 | ue >>> 2) ^ (ae << 25 | ue >>> 7), or = (ue >>> 28 | ae << 4) ^ (ue << 30 | ae >>> 2) ^ (ue << 25 | ae >>> 7), Sn = (Le >>> 14 | Te << 18) ^ (Le >>> 18 | Te << 14) ^ (Le << 23 | Te >>> 9), En = (Te >>> 14 | Le << 18) ^ (Te >>> 18 | Le << 14) ^ (Te << 23 | Le >>> 9), sr = h[Ne], kn = sr.high, ar = sr.low, Oe = et + En, Ye = gt + Sn + (Oe >>> 0 < et >>> 0 ? 1 : 0), Oe = Oe + nr, Ye = Ye + yn + (Oe >>> 0 < nr >>> 0 ? 1 : 0), Oe = Oe + ar, Ye = Ye + kn + (Oe >>> 0 < ar >>> 0 ? 1 : 0), Oe = Oe + Ie, Ye = Ye + He + (Oe >>> 0 < Ie >>> 0 ? 1 : 0), zt = or + wn, Cn = _n + ir + (zt >>> 0 < or >>> 0 ? 1 : 0);
              gt = bt, et = Ve, bt = Pe, Ve = xt, Pe = Le, xt = Te, Te = Me + Oe | 0, Le = Je + Ye + (Te >>> 0 < Me >>> 0 ? 1 : 0) | 0, Je = be, Me = Ee, be = xe, Ee = ne, xe = ae, ne = ue, ue = Oe + zt | 0, ae = Ye + Cn + (ue >>> 0 < Oe >>> 0 ? 1 : 0) | 0;
            }
            E = T.low = E + ue, T.high = I + ae + (E >>> 0 < ue >>> 0 ? 1 : 0), L = _.low = L + ne, _.high = A + xe + (L >>> 0 < ne >>> 0 ? 1 : 0), $ = d.low = $ + Ee, d.high = O + be + ($ >>> 0 < Ee >>> 0 ? 1 : 0), z = x.low = z + Me, x.high = P + Je + (z >>> 0 < Me >>> 0 ? 1 : 0), Z = y.low = Z + Te, y.high = V + Le + (Z >>> 0 < Te >>> 0 ? 1 : 0), J = w.low = J + xt, w.high = X + Pe + (J >>> 0 < xt >>> 0 ? 1 : 0), F = k.low = F + Ve, k.high = M + bt + (F >>> 0 < Ve >>> 0 ? 1 : 0), W = B.low = W + et, B.high = q + gt + (W >>> 0 < et >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var b = this._data, g = b.words, S = this._nDataBytes * 8, T = b.sigBytes * 8;
            g[T >>> 5] |= 128 << 24 - T % 32, g[(T + 128 >>> 10 << 5) + 30] = Math.floor(S / 4294967296), g[(T + 128 >>> 10 << 5) + 31] = S, b.sigBytes = g.length * 4, this._process();
            var _ = this._hash.toX32();
            return _;
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
  }(Hs)), Nr;
}
var Ir = {}, zs = {
  get exports() {
    return Ir;
  },
  set exports(e) {
    Ir = e;
  }
}, $0;
function qs() {
  return $0 || ($0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), fn(), Wi());
    })(re, function(r) {
      return function() {
        var n = r, i = n.x64, o = i.Word, a = i.WordArray, c = n.algo, f = c.SHA512, s = c.SHA384 = f.extend({
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
            var u = f._doFinalize.call(this);
            return u.sigBytes -= 16, u;
          }
        });
        n.SHA384 = f._createHelper(s), n.HmacSHA384 = f._createHmacHelper(s);
      }(), r.SHA384;
    });
  }(zs)), Ir;
}
var Or = {}, Ws = {
  get exports() {
    return Or;
  },
  set exports(e) {
    Or = e;
  }
}, F0;
function Us() {
  return F0 || (F0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), fn());
    })(re, function(r) {
      return function(n) {
        var i = r, o = i.lib, a = o.WordArray, c = o.Hasher, f = i.x64, s = f.Word, u = i.algo, h = [], l = [], p = [];
        (function() {
          for (var S = 1, T = 0, _ = 0; _ < 24; _++) {
            h[S + 5 * T] = (_ + 1) * (_ + 2) / 2 % 64;
            var d = T % 5, x = (2 * S + 3 * T) % 5;
            S = d, T = x;
          }
          for (var S = 0; S < 5; S++)
            for (var T = 0; T < 5; T++)
              l[S + 5 * T] = T + (2 * S + 3 * T) % 5 * 5;
          for (var y = 1, w = 0; w < 24; w++) {
            for (var k = 0, B = 0, I = 0; I < 7; I++) {
              if (y & 1) {
                var E = (1 << I) - 1;
                E < 32 ? B ^= 1 << E : k ^= 1 << E - 32;
              }
              y & 128 ? y = y << 1 ^ 113 : y <<= 1;
            }
            p[w] = s.create(k, B);
          }
        })();
        var b = [];
        (function() {
          for (var S = 0; S < 25; S++)
            b[S] = s.create();
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
            for (var S = this._state = [], T = 0; T < 25; T++)
              S[T] = new s.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(S, T) {
            for (var _ = this._state, d = this.blockSize / 2, x = 0; x < d; x++) {
              var y = S[T + 2 * x], w = S[T + 2 * x + 1];
              y = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, w = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360;
              var k = _[x];
              k.high ^= w, k.low ^= y;
            }
            for (var B = 0; B < 24; B++) {
              for (var I = 0; I < 5; I++) {
                for (var E = 0, A = 0, L = 0; L < 5; L++) {
                  var k = _[I + 5 * L];
                  E ^= k.high, A ^= k.low;
                }
                var O = b[I];
                O.high = E, O.low = A;
              }
              for (var I = 0; I < 5; I++)
                for (var $ = b[(I + 4) % 5], P = b[(I + 1) % 5], z = P.high, V = P.low, E = $.high ^ (z << 1 | V >>> 31), A = $.low ^ (V << 1 | z >>> 31), L = 0; L < 5; L++) {
                  var k = _[I + 5 * L];
                  k.high ^= E, k.low ^= A;
                }
              for (var Z = 1; Z < 25; Z++) {
                var E, A, k = _[Z], X = k.high, J = k.low, M = h[Z];
                M < 32 ? (E = X << M | J >>> 32 - M, A = J << M | X >>> 32 - M) : (E = J << M - 32 | X >>> 64 - M, A = X << M - 32 | J >>> 64 - M);
                var F = b[l[Z]];
                F.high = E, F.low = A;
              }
              var q = b[0], W = _[0];
              q.high = W.high, q.low = W.low;
              for (var I = 0; I < 5; I++)
                for (var L = 0; L < 5; L++) {
                  var Z = I + 5 * L, k = _[Z], ae = b[Z], ue = b[(I + 1) % 5 + 5 * L], xe = b[(I + 2) % 5 + 5 * L];
                  k.high = ae.high ^ ~ue.high & xe.high, k.low = ae.low ^ ~ue.low & xe.low;
                }
              var k = _[0], ne = p[B];
              k.high ^= ne.high, k.low ^= ne.low;
            }
          },
          _doFinalize: function() {
            var S = this._data, T = S.words;
            this._nDataBytes * 8;
            var _ = S.sigBytes * 8, d = this.blockSize * 32;
            T[_ >>> 5] |= 1 << 24 - _ % 32, T[(n.ceil((_ + 1) / d) * d >>> 5) - 1] |= 128, S.sigBytes = T.length * 4, this._process();
            for (var x = this._state, y = this.cfg.outputLength / 8, w = y / 8, k = [], B = 0; B < w; B++) {
              var I = x[B], E = I.high, A = I.low;
              E = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, A = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360, k.push(A), k.push(E);
            }
            return new a.init(k, y);
          },
          clone: function() {
            for (var S = c.clone.call(this), T = S._state = this._state.slice(0), _ = 0; _ < 25; _++)
              T[_] = T[_].clone();
            return S;
          }
        });
        i.SHA3 = c._createHelper(g), i.HmacSHA3 = c._createHmacHelper(g);
      }(Math), r.SHA3;
    });
  }(Ws)), Or;
}
var Dr = {}, Vs = {
  get exports() {
    return Dr;
  },
  set exports(e) {
    Dr = e;
  }
}, H0;
function Ys() {
  return H0 || (H0 = 1, function(e, t) {
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
        var i = r, o = i.lib, a = o.WordArray, c = o.Hasher, f = i.algo, s = a.create([
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
        ]), u = a.create([
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
        ]), h = a.create([
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
        ]), p = a.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), b = a.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), g = f.RIPEMD160 = c.extend({
          _doReset: function() {
            this._hash = a.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(w, k) {
            for (var B = 0; B < 16; B++) {
              var I = k + B, E = w[I];
              w[I] = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360;
            }
            var A = this._hash.words, L = p.words, O = b.words, $ = s.words, P = u.words, z = h.words, V = l.words, Z, X, J, M, F, q, W, ae, ue, xe;
            q = Z = A[0], W = X = A[1], ae = J = A[2], ue = M = A[3], xe = F = A[4];
            for (var ne, B = 0; B < 80; B += 1)
              ne = Z + w[k + $[B]] | 0, B < 16 ? ne += S(X, J, M) + L[0] : B < 32 ? ne += T(X, J, M) + L[1] : B < 48 ? ne += _(X, J, M) + L[2] : B < 64 ? ne += d(X, J, M) + L[3] : ne += x(X, J, M) + L[4], ne = ne | 0, ne = y(ne, z[B]), ne = ne + F | 0, Z = F, F = M, M = y(J, 10), J = X, X = ne, ne = q + w[k + P[B]] | 0, B < 16 ? ne += x(W, ae, ue) + O[0] : B < 32 ? ne += d(W, ae, ue) + O[1] : B < 48 ? ne += _(W, ae, ue) + O[2] : B < 64 ? ne += T(W, ae, ue) + O[3] : ne += S(W, ae, ue) + O[4], ne = ne | 0, ne = y(ne, V[B]), ne = ne + xe | 0, q = xe, xe = ue, ue = y(ae, 10), ae = W, W = ne;
            ne = A[1] + J + ue | 0, A[1] = A[2] + M + xe | 0, A[2] = A[3] + F + q | 0, A[3] = A[4] + Z + W | 0, A[4] = A[0] + X + ae | 0, A[0] = ne;
          },
          _doFinalize: function() {
            var w = this._data, k = w.words, B = this._nDataBytes * 8, I = w.sigBytes * 8;
            k[I >>> 5] |= 128 << 24 - I % 32, k[(I + 64 >>> 9 << 4) + 14] = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360, w.sigBytes = (k.length + 1) * 4, this._process();
            for (var E = this._hash, A = E.words, L = 0; L < 5; L++) {
              var O = A[L];
              A[L] = (O << 8 | O >>> 24) & 16711935 | (O << 24 | O >>> 8) & 4278255360;
            }
            return E;
          },
          clone: function() {
            var w = c.clone.call(this);
            return w._hash = this._hash.clone(), w;
          }
        });
        function S(w, k, B) {
          return w ^ k ^ B;
        }
        function T(w, k, B) {
          return w & k | ~w & B;
        }
        function _(w, k, B) {
          return (w | ~k) ^ B;
        }
        function d(w, k, B) {
          return w & B | k & ~B;
        }
        function x(w, k, B) {
          return w ^ (k | ~B);
        }
        function y(w, k) {
          return w << k | w >>> 32 - k;
        }
        i.RIPEMD160 = c._createHelper(g), i.HmacRIPEMD160 = c._createHmacHelper(g);
      }(), r.RIPEMD160;
    });
  }(Vs)), Dr;
}
var Lr = {}, js = {
  get exports() {
    return Lr;
  },
  set exports(e) {
    Lr = e;
  }
}, z0;
function a0() {
  return z0 || (z0 = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(ce());
    })(re, function(r) {
      (function() {
        var n = r, i = n.lib, o = i.Base, a = n.enc, c = a.Utf8, f = n.algo;
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
          init: function(s, u) {
            s = this._hasher = new s.init(), typeof u == "string" && (u = c.parse(u));
            var h = s.blockSize, l = h * 4;
            u.sigBytes > l && (u = s.finalize(u)), u.clamp();
            for (var p = this._oKey = u.clone(), b = this._iKey = u.clone(), g = p.words, S = b.words, T = 0; T < h; T++)
              g[T] ^= 1549556828, S[T] ^= 909522486;
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
            var u = this._hasher, h = u.finalize(s);
            u.reset();
            var l = u.finalize(this._oKey.clone().concat(h));
            return l;
          }
        });
      })();
    });
  }(js)), Lr;
}
var Pr = {}, Ks = {
  get exports() {
    return Pr;
  },
  set exports(e) {
    Pr = e;
  }
}, q0;
function Gs() {
  return q0 || (q0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), s0(), a0());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.Base, a = i.WordArray, c = n.algo, f = c.SHA1, s = c.HMAC, u = c.PBKDF2 = o.extend({
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
            for (var p = this.cfg, b = s.create(p.hasher, h), g = a.create(), S = a.create([1]), T = g.words, _ = S.words, d = p.keySize, x = p.iterations; T.length < d; ) {
              var y = b.update(l).finalize(S);
              b.reset();
              for (var w = y.words, k = w.length, B = y, I = 1; I < x; I++) {
                B = b.finalize(B), b.reset();
                for (var E = B.words, A = 0; A < k; A++)
                  w[A] ^= E[A];
              }
              g.concat(y), _[0]++;
            }
            return g.sigBytes = d * 4, g;
          }
        });
        n.PBKDF2 = function(h, l, p) {
          return u.create(p).compute(h, l);
        };
      }(), r.PBKDF2;
    });
  }(Ks)), Pr;
}
var Mr = {}, Zs = {
  get exports() {
    return Mr;
  },
  set exports(e) {
    Mr = e;
  }
}, W0;
function Ct() {
  return W0 || (W0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), s0(), a0());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.Base, a = i.WordArray, c = n.algo, f = c.MD5, s = c.EvpKDF = o.extend({
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
            for (var l, p = this.cfg, b = p.hasher.create(), g = a.create(), S = g.words, T = p.keySize, _ = p.iterations; S.length < T; ) {
              l && b.update(l), l = b.update(u).finalize(h), b.reset();
              for (var d = 1; d < _; d++)
                l = b.finalize(l), b.reset();
              g.concat(l);
            }
            return g.sigBytes = T * 4, g;
          }
        });
        n.EvpKDF = function(u, h, l) {
          return s.create(l).compute(u, h);
        };
      }(), r.EvpKDF;
    });
  }(Zs)), Mr;
}
var $r = {}, Xs = {
  get exports() {
    return $r;
  },
  set exports(e) {
    $r = e;
  }
}, U0;
function Se() {
  return U0 || (U0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Ct());
    })(re, function(r) {
      r.lib.Cipher || function(n) {
        var i = r, o = i.lib, a = o.Base, c = o.WordArray, f = o.BufferedBlockAlgorithm, s = i.enc;
        s.Utf8;
        var u = s.Base64, h = i.algo, l = h.EvpKDF, p = o.Cipher = f.extend({
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
          createEncryptor: function(E, A) {
            return this.create(this._ENC_XFORM_MODE, E, A);
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
          createDecryptor: function(E, A) {
            return this.create(this._DEC_XFORM_MODE, E, A);
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
          init: function(E, A, L) {
            this.cfg = this.cfg.extend(L), this._xformMode = E, this._key = A, this.reset();
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
          process: function(E) {
            return this._append(E), this._process();
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
          finalize: function(E) {
            E && this._append(E);
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
            function E(A) {
              return typeof A == "string" ? I : w;
            }
            return function(A) {
              return {
                encrypt: function(L, O, $) {
                  return E(O).encrypt(A, L, O, $);
                },
                decrypt: function(L, O, $) {
                  return E(O).decrypt(A, L, O, $);
                }
              };
            };
          }()
        });
        o.StreamCipher = p.extend({
          _doFinalize: function() {
            var E = this._process(!0);
            return E;
          },
          blockSize: 1
        });
        var b = i.mode = {}, g = o.BlockCipherMode = a.extend({
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
          createEncryptor: function(E, A) {
            return this.Encryptor.create(E, A);
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
          createDecryptor: function(E, A) {
            return this.Decryptor.create(E, A);
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
          init: function(E, A) {
            this._cipher = E, this._iv = A;
          }
        }), S = b.CBC = function() {
          var E = g.extend();
          E.Encryptor = E.extend({
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
              var $ = this._cipher, P = $.blockSize;
              A.call(this, L, O, P), $.encryptBlock(L, O), this._prevBlock = L.slice(O, O + P);
            }
          }), E.Decryptor = E.extend({
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
              var $ = this._cipher, P = $.blockSize, z = L.slice(O, O + P);
              $.decryptBlock(L, O), A.call(this, L, O, P), this._prevBlock = z;
            }
          });
          function A(L, O, $) {
            var P, z = this._iv;
            z ? (P = z, this._iv = n) : P = this._prevBlock;
            for (var V = 0; V < $; V++)
              L[O + V] ^= P[V];
          }
          return E;
        }(), T = i.pad = {}, _ = T.Pkcs7 = {
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
          pad: function(E, A) {
            for (var L = A * 4, O = L - E.sigBytes % L, $ = O << 24 | O << 16 | O << 8 | O, P = [], z = 0; z < O; z += 4)
              P.push($);
            var V = c.create(P, O);
            E.concat(V);
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
          unpad: function(E) {
            var A = E.words[E.sigBytes - 1 >>> 2] & 255;
            E.sigBytes -= A;
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
            padding: _
          }),
          reset: function() {
            var E;
            p.reset.call(this);
            var A = this.cfg, L = A.iv, O = A.mode;
            this._xformMode == this._ENC_XFORM_MODE ? E = O.createEncryptor : (E = O.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == E ? this._mode.init(this, L && L.words) : (this._mode = E.call(O, this, L && L.words), this._mode.__creator = E);
          },
          _doProcessBlock: function(E, A) {
            this._mode.processBlock(E, A);
          },
          _doFinalize: function() {
            var E, A = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (A.pad(this._data, this.blockSize), E = this._process(!0)) : (E = this._process(!0), A.unpad(E)), E;
          },
          blockSize: 128 / 32
        });
        var d = o.CipherParams = a.extend({
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
          init: function(E) {
            this.mixIn(E);
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
          toString: function(E) {
            return (E || this.formatter).stringify(this);
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
          stringify: function(E) {
            var A, L = E.ciphertext, O = E.salt;
            return O ? A = c.create([1398893684, 1701076831]).concat(O).concat(L) : A = L, A.toString(u);
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
          parse: function(E) {
            var A, L = u.parse(E), O = L.words;
            return O[0] == 1398893684 && O[1] == 1701076831 && (A = c.create(O.slice(2, 4)), O.splice(0, 4), L.sigBytes -= 16), d.create({ ciphertext: L, salt: A });
          }
        }, w = o.SerializableCipher = a.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: a.extend({
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
          encrypt: function(E, A, L, O) {
            O = this.cfg.extend(O);
            var $ = E.createEncryptor(L, O), P = $.finalize(A), z = $.cfg;
            return d.create({
              ciphertext: P,
              key: L,
              iv: z.iv,
              algorithm: E,
              mode: z.mode,
              padding: z.padding,
              blockSize: E.blockSize,
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
          decrypt: function(E, A, L, O) {
            O = this.cfg.extend(O), A = this._parse(A, O.format);
            var $ = E.createDecryptor(L, O).finalize(A.ciphertext);
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
          _parse: function(E, A) {
            return typeof E == "string" ? A.parse(E, this) : E;
          }
        }), k = i.kdf = {}, B = k.OpenSSL = {
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
          execute: function(E, A, L, O) {
            O || (O = c.random(64 / 8));
            var $ = l.create({ keySize: A + L }).compute(E, O), P = c.create($.words.slice(A), L * 4);
            return $.sigBytes = A * 4, d.create({ key: $, iv: P, salt: O });
          }
        }, I = o.PasswordBasedCipher = w.extend({
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
          encrypt: function(E, A, L, O) {
            O = this.cfg.extend(O);
            var $ = O.kdf.execute(L, E.keySize, E.ivSize);
            O.iv = $.iv;
            var P = w.encrypt.call(this, E, A, $.key, O);
            return P.mixIn($), P;
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
          decrypt: function(E, A, L, O) {
            O = this.cfg.extend(O), A = this._parse(A, O.format);
            var $ = O.kdf.execute(L, E.keySize, E.ivSize, A.salt);
            O.iv = $.iv;
            var P = w.decrypt.call(this, E, A, $.key, O);
            return P;
          }
        });
      }();
    });
  }(Xs)), $r;
}
var Fr = {}, Qs = {
  get exports() {
    return Fr;
  },
  set exports(e) {
    Fr = e;
  }
}, V0;
function Js() {
  return V0 || (V0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Se());
    })(re, function(r) {
      return r.mode.CFB = function() {
        var n = r.lib.BlockCipherMode.extend();
        n.Encryptor = n.extend({
          processBlock: function(o, a) {
            var c = this._cipher, f = c.blockSize;
            i.call(this, o, a, f, c), this._prevBlock = o.slice(a, a + f);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(o, a) {
            var c = this._cipher, f = c.blockSize, s = o.slice(a, a + f);
            i.call(this, o, a, f, c), this._prevBlock = s;
          }
        });
        function i(o, a, c, f) {
          var s, u = this._iv;
          u ? (s = u.slice(0), this._iv = void 0) : s = this._prevBlock, f.encryptBlock(s, 0);
          for (var h = 0; h < c; h++)
            o[a + h] ^= s[h];
        }
        return n;
      }(), r.mode.CFB;
    });
  }(Qs)), Fr;
}
var Hr = {}, ea = {
  get exports() {
    return Hr;
  },
  set exports(e) {
    Hr = e;
  }
}, Y0;
function ta() {
  return Y0 || (Y0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Se());
    })(re, function(r) {
      return r.mode.CTR = function() {
        var n = r.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(o, a) {
            var c = this._cipher, f = c.blockSize, s = this._iv, u = this._counter;
            s && (u = this._counter = s.slice(0), this._iv = void 0);
            var h = u.slice(0);
            c.encryptBlock(h, 0), u[f - 1] = u[f - 1] + 1 | 0;
            for (var l = 0; l < f; l++)
              o[a + l] ^= h[l];
          }
        });
        return n.Decryptor = i, n;
      }(), r.mode.CTR;
    });
  }(ea)), Hr;
}
var zr = {}, ra = {
  get exports() {
    return zr;
  },
  set exports(e) {
    zr = e;
  }
}, j0;
function na() {
  return j0 || (j0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Se());
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
            var f = c >> 16 & 255, s = c >> 8 & 255, u = c & 255;
            f === 255 ? (f = 0, s === 255 ? (s = 0, u === 255 ? u = 0 : ++u) : ++s) : ++f, c = 0, c += f << 16, c += s << 8, c += u;
          } else
            c += 1 << 24;
          return c;
        }
        function o(c) {
          return (c[0] = i(c[0])) === 0 && (c[1] = i(c[1])), c;
        }
        var a = n.Encryptor = n.extend({
          processBlock: function(c, f) {
            var s = this._cipher, u = s.blockSize, h = this._iv, l = this._counter;
            h && (l = this._counter = h.slice(0), this._iv = void 0), o(l);
            var p = l.slice(0);
            s.encryptBlock(p, 0);
            for (var b = 0; b < u; b++)
              c[f + b] ^= p[b];
          }
        });
        return n.Decryptor = a, n;
      }(), r.mode.CTRGladman;
    });
  }(ra)), zr;
}
var qr = {}, ia = {
  get exports() {
    return qr;
  },
  set exports(e) {
    qr = e;
  }
}, K0;
function oa() {
  return K0 || (K0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Se());
    })(re, function(r) {
      return r.mode.OFB = function() {
        var n = r.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(o, a) {
            var c = this._cipher, f = c.blockSize, s = this._iv, u = this._keystream;
            s && (u = this._keystream = s.slice(0), this._iv = void 0), c.encryptBlock(u, 0);
            for (var h = 0; h < f; h++)
              o[a + h] ^= u[h];
          }
        });
        return n.Decryptor = i, n;
      }(), r.mode.OFB;
    });
  }(ia)), qr;
}
var Wr = {}, sa = {
  get exports() {
    return Wr;
  },
  set exports(e) {
    Wr = e;
  }
}, G0;
function Ui() {
  return G0 || (G0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Se());
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
  }(sa)), Wr;
}
var Ur = {}, aa = {
  get exports() {
    return Ur;
  },
  set exports(e) {
    Ur = e;
  }
}, Z0;
function ca() {
  return Z0 || (Z0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Se());
    })(re, function(r) {
      return r.pad.AnsiX923 = {
        pad: function(n, i) {
          var o = n.sigBytes, a = i * 4, c = a - o % a, f = o + c - 1;
          n.clamp(), n.words[f >>> 2] |= c << 24 - f % 4 * 8, n.sigBytes += c;
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, r.pad.Ansix923;
    });
  }(aa)), Ur;
}
var Vr = {}, fa = {
  get exports() {
    return Vr;
  },
  set exports(e) {
    Vr = e;
  }
}, X0;
function ua() {
  return X0 || (X0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Se());
    })(re, function(r) {
      return r.pad.Iso10126 = {
        pad: function(n, i) {
          var o = i * 4, a = o - n.sigBytes % o;
          n.concat(r.lib.WordArray.random(a - 1)).concat(r.lib.WordArray.create([a << 24], 1));
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, r.pad.Iso10126;
    });
  }(fa)), Vr;
}
var Yr = {}, la = {
  get exports() {
    return Yr;
  },
  set exports(e) {
    Yr = e;
  }
}, Q0;
function ha() {
  return Q0 || (Q0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Se());
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
  }(la)), Yr;
}
var jr = {}, da = {
  get exports() {
    return jr;
  },
  set exports(e) {
    jr = e;
  }
}, J0;
function pa() {
  return J0 || (J0 = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Se());
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
  }(da)), jr;
}
var Kr = {}, va = {
  get exports() {
    return Kr;
  },
  set exports(e) {
    Kr = e;
  }
}, ei;
function xa() {
  return ei || (ei = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Se());
    })(re, function(r) {
      return r.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, r.pad.NoPadding;
    });
  }(va)), Kr;
}
var Gr = {}, ba = {
  get exports() {
    return Gr;
  },
  set exports(e) {
    Gr = e;
  }
}, ti;
function ga() {
  return ti || (ti = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Se());
    })(re, function(r) {
      return function(n) {
        var i = r, o = i.lib, a = o.CipherParams, c = i.enc, f = c.Hex, s = i.format;
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
            return a.create({ ciphertext: h });
          }
        };
      }(), r.format.Hex;
    });
  }(ba)), Gr;
}
var Zr = {}, ma = {
  get exports() {
    return Zr;
  },
  set exports(e) {
    Zr = e;
  }
}, ri;
function Vi() {
  return ri || (ri = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Et(), kt(), Ct(), Se());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.BlockCipher, a = n.algo, c = [], f = [], s = [], u = [], h = [], l = [], p = [], b = [], g = [], S = [];
        (function() {
          for (var d = [], x = 0; x < 256; x++)
            x < 128 ? d[x] = x << 1 : d[x] = x << 1 ^ 283;
          for (var y = 0, w = 0, x = 0; x < 256; x++) {
            var k = w ^ w << 1 ^ w << 2 ^ w << 3 ^ w << 4;
            k = k >>> 8 ^ k & 255 ^ 99, c[y] = k, f[k] = y;
            var B = d[y], I = d[B], E = d[I], A = d[k] * 257 ^ k * 16843008;
            s[y] = A << 24 | A >>> 8, u[y] = A << 16 | A >>> 16, h[y] = A << 8 | A >>> 24, l[y] = A;
            var A = E * 16843009 ^ I * 65537 ^ B * 257 ^ y * 16843008;
            p[k] = A << 24 | A >>> 8, b[k] = A << 16 | A >>> 16, g[k] = A << 8 | A >>> 24, S[k] = A, y ? (y = B ^ d[d[d[E ^ B]]], w ^= d[d[w]]) : y = w = 1;
          }
        })();
        var T = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], _ = a.AES = o.extend({
          _doReset: function() {
            var d;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var x = this._keyPriorReset = this._key, y = x.words, w = x.sigBytes / 4, k = this._nRounds = w + 6, B = (k + 1) * 4, I = this._keySchedule = [], E = 0; E < B; E++)
                E < w ? I[E] = y[E] : (d = I[E - 1], E % w ? w > 6 && E % w == 4 && (d = c[d >>> 24] << 24 | c[d >>> 16 & 255] << 16 | c[d >>> 8 & 255] << 8 | c[d & 255]) : (d = d << 8 | d >>> 24, d = c[d >>> 24] << 24 | c[d >>> 16 & 255] << 16 | c[d >>> 8 & 255] << 8 | c[d & 255], d ^= T[E / w | 0] << 24), I[E] = I[E - w] ^ d);
              for (var A = this._invKeySchedule = [], L = 0; L < B; L++) {
                var E = B - L;
                if (L % 4)
                  var d = I[E];
                else
                  var d = I[E - 4];
                L < 4 || E <= 4 ? A[L] = d : A[L] = p[c[d >>> 24]] ^ b[c[d >>> 16 & 255]] ^ g[c[d >>> 8 & 255]] ^ S[c[d & 255]];
              }
            }
          },
          encryptBlock: function(d, x) {
            this._doCryptBlock(d, x, this._keySchedule, s, u, h, l, c);
          },
          decryptBlock: function(d, x) {
            var y = d[x + 1];
            d[x + 1] = d[x + 3], d[x + 3] = y, this._doCryptBlock(d, x, this._invKeySchedule, p, b, g, S, f);
            var y = d[x + 1];
            d[x + 1] = d[x + 3], d[x + 3] = y;
          },
          _doCryptBlock: function(d, x, y, w, k, B, I, E) {
            for (var A = this._nRounds, L = d[x] ^ y[0], O = d[x + 1] ^ y[1], $ = d[x + 2] ^ y[2], P = d[x + 3] ^ y[3], z = 4, V = 1; V < A; V++) {
              var Z = w[L >>> 24] ^ k[O >>> 16 & 255] ^ B[$ >>> 8 & 255] ^ I[P & 255] ^ y[z++], X = w[O >>> 24] ^ k[$ >>> 16 & 255] ^ B[P >>> 8 & 255] ^ I[L & 255] ^ y[z++], J = w[$ >>> 24] ^ k[P >>> 16 & 255] ^ B[L >>> 8 & 255] ^ I[O & 255] ^ y[z++], M = w[P >>> 24] ^ k[L >>> 16 & 255] ^ B[O >>> 8 & 255] ^ I[$ & 255] ^ y[z++];
              L = Z, O = X, $ = J, P = M;
            }
            var Z = (E[L >>> 24] << 24 | E[O >>> 16 & 255] << 16 | E[$ >>> 8 & 255] << 8 | E[P & 255]) ^ y[z++], X = (E[O >>> 24] << 24 | E[$ >>> 16 & 255] << 16 | E[P >>> 8 & 255] << 8 | E[L & 255]) ^ y[z++], J = (E[$ >>> 24] << 24 | E[P >>> 16 & 255] << 16 | E[L >>> 8 & 255] << 8 | E[O & 255]) ^ y[z++], M = (E[P >>> 24] << 24 | E[L >>> 16 & 255] << 16 | E[O >>> 8 & 255] << 8 | E[$ & 255]) ^ y[z++];
            d[x] = Z, d[x + 1] = X, d[x + 2] = J, d[x + 3] = M;
          },
          keySize: 256 / 32
        });
        n.AES = o._createHelper(_);
      }(), r.AES;
    });
  }(ma)), Zr;
}
var Xr = {}, ya = {
  get exports() {
    return Xr;
  },
  set exports(e) {
    Xr = e;
  }
}, ni;
function wa() {
  return ni || (ni = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Et(), kt(), Ct(), Se());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.WordArray, a = i.BlockCipher, c = n.algo, f = [
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
        ], p = c.DES = a.extend({
          _doReset: function() {
            for (var T = this._key, _ = T.words, d = [], x = 0; x < 56; x++) {
              var y = f[x] - 1;
              d[x] = _[y >>> 5] >>> 31 - y % 32 & 1;
            }
            for (var w = this._subKeys = [], k = 0; k < 16; k++) {
              for (var B = w[k] = [], I = u[k], x = 0; x < 24; x++)
                B[x / 6 | 0] |= d[(s[x] - 1 + I) % 28] << 31 - x % 6, B[4 + (x / 6 | 0)] |= d[28 + (s[x + 24] - 1 + I) % 28] << 31 - x % 6;
              B[0] = B[0] << 1 | B[0] >>> 31;
              for (var x = 1; x < 7; x++)
                B[x] = B[x] >>> (x - 1) * 4 + 3;
              B[7] = B[7] << 5 | B[7] >>> 27;
            }
            for (var E = this._invSubKeys = [], x = 0; x < 16; x++)
              E[x] = w[15 - x];
          },
          encryptBlock: function(T, _) {
            this._doCryptBlock(T, _, this._subKeys);
          },
          decryptBlock: function(T, _) {
            this._doCryptBlock(T, _, this._invSubKeys);
          },
          _doCryptBlock: function(T, _, d) {
            this._lBlock = T[_], this._rBlock = T[_ + 1], b.call(this, 4, 252645135), b.call(this, 16, 65535), g.call(this, 2, 858993459), g.call(this, 8, 16711935), b.call(this, 1, 1431655765);
            for (var x = 0; x < 16; x++) {
              for (var y = d[x], w = this._lBlock, k = this._rBlock, B = 0, I = 0; I < 8; I++)
                B |= h[I][((k ^ y[I]) & l[I]) >>> 0];
              this._lBlock = k, this._rBlock = w ^ B;
            }
            var E = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = E, b.call(this, 1, 1431655765), g.call(this, 8, 16711935), g.call(this, 2, 858993459), b.call(this, 16, 65535), b.call(this, 4, 252645135), T[_] = this._lBlock, T[_ + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function b(T, _) {
          var d = (this._lBlock >>> T ^ this._rBlock) & _;
          this._rBlock ^= d, this._lBlock ^= d << T;
        }
        function g(T, _) {
          var d = (this._rBlock >>> T ^ this._lBlock) & _;
          this._lBlock ^= d, this._rBlock ^= d << T;
        }
        n.DES = a._createHelper(p);
        var S = c.TripleDES = a.extend({
          _doReset: function() {
            var T = this._key, _ = T.words;
            if (_.length !== 2 && _.length !== 4 && _.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var d = _.slice(0, 2), x = _.length < 4 ? _.slice(0, 2) : _.slice(2, 4), y = _.length < 6 ? _.slice(0, 2) : _.slice(4, 6);
            this._des1 = p.createEncryptor(o.create(d)), this._des2 = p.createEncryptor(o.create(x)), this._des3 = p.createEncryptor(o.create(y));
          },
          encryptBlock: function(T, _) {
            this._des1.encryptBlock(T, _), this._des2.decryptBlock(T, _), this._des3.encryptBlock(T, _);
          },
          decryptBlock: function(T, _) {
            this._des3.decryptBlock(T, _), this._des2.encryptBlock(T, _), this._des1.decryptBlock(T, _);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        n.TripleDES = a._createHelper(S);
      }(), r.TripleDES;
    });
  }(ya)), Xr;
}
var Qr = {}, _a = {
  get exports() {
    return Qr;
  },
  set exports(e) {
    Qr = e;
  }
}, ii;
function Sa() {
  return ii || (ii = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Et(), kt(), Ct(), Se());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.StreamCipher, a = n.algo, c = a.RC4 = o.extend({
          _doReset: function() {
            for (var u = this._key, h = u.words, l = u.sigBytes, p = this._S = [], b = 0; b < 256; b++)
              p[b] = b;
            for (var b = 0, g = 0; b < 256; b++) {
              var S = b % l, T = h[S >>> 2] >>> 24 - S % 4 * 8 & 255;
              g = (g + p[b] + T) % 256;
              var _ = p[b];
              p[b] = p[g], p[g] = _;
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
        var s = a.RC4Drop = c.extend({
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
        n.RC4Drop = o._createHelper(s);
      }(), r.RC4;
    });
  }(_a)), Qr;
}
var Jr = {}, Ea = {
  get exports() {
    return Jr;
  },
  set exports(e) {
    Jr = e;
  }
}, oi;
function ka() {
  return oi || (oi = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Et(), kt(), Ct(), Se());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.StreamCipher, a = n.algo, c = [], f = [], s = [], u = a.Rabbit = o.extend({
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
            ], S = this._C = [
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
              S[b] ^= g[b + 4 & 7];
            if (p) {
              var T = p.words, _ = T[0], d = T[1], x = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360, y = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, w = x >>> 16 | y & 4294901760, k = y << 16 | x & 65535;
              S[0] ^= x, S[1] ^= w, S[2] ^= y, S[3] ^= k, S[4] ^= x, S[5] ^= w, S[6] ^= y, S[7] ^= k;
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
            var g = l[b] + p[b], S = g & 65535, T = g >>> 16, _ = ((S * S >>> 17) + S * T >>> 15) + T * T, d = ((g & 4294901760) * g | 0) + ((g & 65535) * g | 0);
            s[b] = _ ^ d;
          }
          l[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, l[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, l[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, l[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, l[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, l[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, l[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, l[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0;
        }
        n.Rabbit = o._createHelper(u);
      }(), r.Rabbit;
    });
  }(Ea)), Jr;
}
var en = {}, Ca = {
  get exports() {
    return en;
  },
  set exports(e) {
    en = e;
  }
}, si;
function Ba() {
  return si || (si = 1, function(e, t) {
    (function(r, n, i) {
      e.exports = n(ce(), Et(), kt(), Ct(), Se());
    })(re, function(r) {
      return function() {
        var n = r, i = n.lib, o = i.StreamCipher, a = n.algo, c = [], f = [], s = [], u = a.RabbitLegacy = o.extend({
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
            for (var S = 0; S < 4; S++)
              h.call(this);
            for (var S = 0; S < 8; S++)
              g[S] ^= b[S + 4 & 7];
            if (p) {
              var T = p.words, _ = T[0], d = T[1], x = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360, y = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, w = x >>> 16 | y & 4294901760, k = y << 16 | x & 65535;
              g[0] ^= x, g[1] ^= w, g[2] ^= y, g[3] ^= k, g[4] ^= x, g[5] ^= w, g[6] ^= y, g[7] ^= k;
              for (var S = 0; S < 4; S++)
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
            var g = l[b] + p[b], S = g & 65535, T = g >>> 16, _ = ((S * S >>> 17) + S * T >>> 15) + T * T, d = ((g & 4294901760) * g | 0) + ((g & 65535) * g | 0);
            s[b] = _ ^ d;
          }
          l[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, l[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, l[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, l[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, l[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, l[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, l[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, l[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0;
        }
        n.RabbitLegacy = o._createHelper(u);
      }(), r.RabbitLegacy;
    });
  }(Ca)), en;
}
(function(e, t) {
  (function(r, n, i) {
    e.exports = n(ce(), fn(), Rs(), Ns(), Et(), Ds(), kt(), s0(), qi(), Fs(), Wi(), qs(), Us(), Ys(), a0(), Gs(), Ct(), Se(), Js(), ta(), na(), oa(), Ui(), ca(), ua(), ha(), pa(), xa(), ga(), Vi(), wa(), Sa(), ka(), Ba());
  })(re, function(r) {
    return r;
  });
})(_s);
var ai = {}, Aa = {
  get exports() {
    return ai;
  },
  set exports(e) {
    ai = e;
  }
};
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(re, function() {
    var r = 1e3, n = 6e4, i = 36e5, o = "millisecond", a = "second", c = "minute", f = "hour", s = "day", u = "week", h = "month", l = "quarter", p = "year", b = "date", g = "Invalid Date", S = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, T = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, _ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(O) {
      var $ = ["th", "st", "nd", "rd"], P = O % 100;
      return "[" + O + ($[(P - 20) % 10] || $[P] || $[0]) + "]";
    } }, d = function(O, $, P) {
      var z = String(O);
      return !z || z.length >= $ ? O : "" + Array($ + 1 - z.length).join(P) + O;
    }, x = { s: d, z: function(O) {
      var $ = -O.utcOffset(), P = Math.abs($), z = Math.floor(P / 60), V = P % 60;
      return ($ <= 0 ? "+" : "-") + d(z, 2, "0") + ":" + d(V, 2, "0");
    }, m: function O($, P) {
      if ($.date() < P.date())
        return -O(P, $);
      var z = 12 * (P.year() - $.year()) + (P.month() - $.month()), V = $.clone().add(z, h), Z = P - V < 0, X = $.clone().add(z + (Z ? -1 : 1), h);
      return +(-(z + (P - V) / (Z ? V - X : X - V)) || 0);
    }, a: function(O) {
      return O < 0 ? Math.ceil(O) || 0 : Math.floor(O);
    }, p: function(O) {
      return { M: h, y: p, w: u, d: s, D: b, h: f, m: c, s: a, ms: o, Q: l }[O] || String(O || "").toLowerCase().replace(/s$/, "");
    }, u: function(O) {
      return O === void 0;
    } }, y = "en", w = {};
    w[y] = _;
    var k = function(O) {
      return O instanceof A;
    }, B = function O($, P, z) {
      var V;
      if (!$)
        return y;
      if (typeof $ == "string") {
        var Z = $.toLowerCase();
        w[Z] && (V = Z), P && (w[Z] = P, V = Z);
        var X = $.split("-");
        if (!V && X.length > 1)
          return O(X[0]);
      } else {
        var J = $.name;
        w[J] = $, V = J;
      }
      return !z && V && (y = V), V || !z && y;
    }, I = function(O, $) {
      if (k(O))
        return O.clone();
      var P = typeof $ == "object" ? $ : {};
      return P.date = O, P.args = arguments, new A(P);
    }, E = x;
    E.l = B, E.i = k, E.w = function(O, $) {
      return I(O, { locale: $.$L, utc: $.$u, x: $.$x, $offset: $.$offset });
    };
    var A = function() {
      function O(P) {
        this.$L = B(P.locale, null, !0), this.parse(P);
      }
      var $ = O.prototype;
      return $.parse = function(P) {
        this.$d = function(z) {
          var V = z.date, Z = z.utc;
          if (V === null)
            return /* @__PURE__ */ new Date(NaN);
          if (E.u(V))
            return /* @__PURE__ */ new Date();
          if (V instanceof Date)
            return new Date(V);
          if (typeof V == "string" && !/Z$/i.test(V)) {
            var X = V.match(S);
            if (X) {
              var J = X[2] - 1 || 0, M = (X[7] || "0").substring(0, 3);
              return Z ? new Date(Date.UTC(X[1], J, X[3] || 1, X[4] || 0, X[5] || 0, X[6] || 0, M)) : new Date(X[1], J, X[3] || 1, X[4] || 0, X[5] || 0, X[6] || 0, M);
            }
          }
          return new Date(V);
        }(P), this.$x = P.x || {}, this.init();
      }, $.init = function() {
        var P = this.$d;
        this.$y = P.getFullYear(), this.$M = P.getMonth(), this.$D = P.getDate(), this.$W = P.getDay(), this.$H = P.getHours(), this.$m = P.getMinutes(), this.$s = P.getSeconds(), this.$ms = P.getMilliseconds();
      }, $.$utils = function() {
        return E;
      }, $.isValid = function() {
        return this.$d.toString() !== g;
      }, $.isSame = function(P, z) {
        var V = I(P);
        return this.startOf(z) <= V && V <= this.endOf(z);
      }, $.isAfter = function(P, z) {
        return I(P) < this.startOf(z);
      }, $.isBefore = function(P, z) {
        return this.endOf(z) < I(P);
      }, $.$g = function(P, z, V) {
        return E.u(P) ? this[z] : this.set(V, P);
      }, $.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, $.valueOf = function() {
        return this.$d.getTime();
      }, $.startOf = function(P, z) {
        var V = this, Z = !!E.u(z) || z, X = E.p(P), J = function(ne, be) {
          var Ee = E.w(V.$u ? Date.UTC(V.$y, be, ne) : new Date(V.$y, be, ne), V);
          return Z ? Ee : Ee.endOf(s);
        }, M = function(ne, be) {
          return E.w(V.toDate()[ne].apply(V.toDate("s"), (Z ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(be)), V);
        }, F = this.$W, q = this.$M, W = this.$D, ae = "set" + (this.$u ? "UTC" : "");
        switch (X) {
          case p:
            return Z ? J(1, 0) : J(31, 11);
          case h:
            return Z ? J(1, q) : J(0, q + 1);
          case u:
            var ue = this.$locale().weekStart || 0, xe = (F < ue ? F + 7 : F) - ue;
            return J(Z ? W - xe : W + (6 - xe), q);
          case s:
          case b:
            return M(ae + "Hours", 0);
          case f:
            return M(ae + "Minutes", 1);
          case c:
            return M(ae + "Seconds", 2);
          case a:
            return M(ae + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, $.endOf = function(P) {
        return this.startOf(P, !1);
      }, $.$set = function(P, z) {
        var V, Z = E.p(P), X = "set" + (this.$u ? "UTC" : ""), J = (V = {}, V[s] = X + "Date", V[b] = X + "Date", V[h] = X + "Month", V[p] = X + "FullYear", V[f] = X + "Hours", V[c] = X + "Minutes", V[a] = X + "Seconds", V[o] = X + "Milliseconds", V)[Z], M = Z === s ? this.$D + (z - this.$W) : z;
        if (Z === h || Z === p) {
          var F = this.clone().set(b, 1);
          F.$d[J](M), F.init(), this.$d = F.set(b, Math.min(this.$D, F.daysInMonth())).$d;
        } else
          J && this.$d[J](M);
        return this.init(), this;
      }, $.set = function(P, z) {
        return this.clone().$set(P, z);
      }, $.get = function(P) {
        return this[E.p(P)]();
      }, $.add = function(P, z) {
        var V, Z = this;
        P = Number(P);
        var X = E.p(z), J = function(q) {
          var W = I(Z);
          return E.w(W.date(W.date() + Math.round(q * P)), Z);
        };
        if (X === h)
          return this.set(h, this.$M + P);
        if (X === p)
          return this.set(p, this.$y + P);
        if (X === s)
          return J(1);
        if (X === u)
          return J(7);
        var M = (V = {}, V[c] = n, V[f] = i, V[a] = r, V)[X] || 1, F = this.$d.getTime() + P * M;
        return E.w(F, this);
      }, $.subtract = function(P, z) {
        return this.add(-1 * P, z);
      }, $.format = function(P) {
        var z = this, V = this.$locale();
        if (!this.isValid())
          return V.invalidDate || g;
        var Z = P || "YYYY-MM-DDTHH:mm:ssZ", X = E.z(this), J = this.$H, M = this.$m, F = this.$M, q = V.weekdays, W = V.months, ae = function(be, Ee, Je, Me) {
          return be && (be[Ee] || be(z, Z)) || Je[Ee].slice(0, Me);
        }, ue = function(be) {
          return E.s(J % 12 || 12, be, "0");
        }, xe = V.meridiem || function(be, Ee, Je) {
          var Me = be < 12 ? "AM" : "PM";
          return Je ? Me.toLowerCase() : Me;
        }, ne = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: F + 1, MM: E.s(F + 1, 2, "0"), MMM: ae(V.monthsShort, F, W, 3), MMMM: ae(W, F), D: this.$D, DD: E.s(this.$D, 2, "0"), d: String(this.$W), dd: ae(V.weekdaysMin, this.$W, q, 2), ddd: ae(V.weekdaysShort, this.$W, q, 3), dddd: q[this.$W], H: String(J), HH: E.s(J, 2, "0"), h: ue(1), hh: ue(2), a: xe(J, M, !0), A: xe(J, M, !1), m: String(M), mm: E.s(M, 2, "0"), s: String(this.$s), ss: E.s(this.$s, 2, "0"), SSS: E.s(this.$ms, 3, "0"), Z: X };
        return Z.replace(T, function(be, Ee) {
          return Ee || ne[be] || X.replace(":", "");
        });
      }, $.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, $.diff = function(P, z, V) {
        var Z, X = E.p(z), J = I(P), M = (J.utcOffset() - this.utcOffset()) * n, F = this - J, q = E.m(this, J);
        return q = (Z = {}, Z[p] = q / 12, Z[h] = q, Z[l] = q / 3, Z[u] = (F - M) / 6048e5, Z[s] = (F - M) / 864e5, Z[f] = F / i, Z[c] = F / n, Z[a] = F / r, Z)[X] || F, V ? q : E.a(q);
      }, $.daysInMonth = function() {
        return this.endOf(h).$D;
      }, $.$locale = function() {
        return w[this.$L];
      }, $.locale = function(P, z) {
        if (!P)
          return this.$L;
        var V = this.clone(), Z = B(P, z, !0);
        return Z && (V.$L = Z), V;
      }, $.clone = function() {
        return E.w(this.$d, this);
      }, $.toDate = function() {
        return new Date(this.valueOf());
      }, $.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, $.toISOString = function() {
        return this.$d.toISOString();
      }, $.toString = function() {
        return this.$d.toUTCString();
      }, O;
    }(), L = A.prototype;
    return I.prototype = L, [["$ms", o], ["$s", a], ["$m", c], ["$H", f], ["$W", s], ["$M", h], ["$y", p], ["$D", b]].forEach(function(O) {
      L[O[1]] = function($) {
        return this.$g($, O[0], O[1]);
      };
    }), I.extend = function(O, $) {
      return O.$i || (O($, A, I), O.$i = !0), I;
    }, I.locale = B, I.isDayjs = k, I.unix = function(O) {
      return I(1e3 * O);
    }, I.en = w[y], I.Ls = w, I.p = {}, I;
  });
})(Aa);
var Yi = function() {
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
          var a = o[i];
          r.call(n, a[1], a[0]);
        }
      }, t;
    }()
  );
}(), Fn = typeof window < "u" && typeof document < "u" && window.document === document, tn = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Ra = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(tn) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Ta = 2;
function Na(e, t) {
  var r = !1, n = !1, i = 0;
  function o() {
    r && (r = !1, e()), n && c();
  }
  function a() {
    Ra(o);
  }
  function c() {
    var f = Date.now();
    if (r) {
      if (f - i < Ta)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(a, t);
    i = f;
  }
  return c;
}
var Ia = 20, Oa = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Da = typeof MutationObserver < "u", La = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Na(this.refresh.bind(this), Ia);
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
      !Fn || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Da ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Fn || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, i = Oa.some(function(o) {
        return !!~n.indexOf(o);
      });
      i && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), ji = function(e, t) {
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
}, It = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || tn;
}, Ki = un(0, 0, 0, 0);
function rn(e) {
  return parseFloat(e) || 0;
}
function ci(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, i) {
    var o = e["border-" + i + "-width"];
    return n + rn(o);
  }, 0);
}
function Pa(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, i = t; n < i.length; n++) {
    var o = i[n], a = e["padding-" + o];
    r[o] = rn(a);
  }
  return r;
}
function Ma(e) {
  var t = e.getBBox();
  return un(0, 0, t.width, t.height);
}
function $a(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return Ki;
  var n = It(e).getComputedStyle(e), i = Pa(n), o = i.left + i.right, a = i.top + i.bottom, c = rn(n.width), f = rn(n.height);
  if (n.boxSizing === "border-box" && (Math.round(c + o) !== t && (c -= ci(n, "left", "right") + o), Math.round(f + a) !== r && (f -= ci(n, "top", "bottom") + a)), !Ha(e)) {
    var s = Math.round(c + o) - t, u = Math.round(f + a) - r;
    Math.abs(s) !== 1 && (c -= s), Math.abs(u) !== 1 && (f -= u);
  }
  return un(i.left, i.top, c, f);
}
var Fa = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof It(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof It(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Ha(e) {
  return e === It(e).document.documentElement;
}
function za(e) {
  return Fn ? Fa(e) ? Ma(e) : $a(e) : Ki;
}
function qa(e) {
  var t = e.x, r = e.y, n = e.width, i = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(o.prototype);
  return ji(a, {
    x: t,
    y: r,
    width: n,
    height: i,
    top: r,
    right: t + n,
    bottom: i + r,
    left: t
  }), a;
}
function un(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var Wa = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = un(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = za(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Ua = (
  /** @class */
  function() {
    function e(t, r) {
      var n = qa(r);
      ji(this, { target: t, contentRect: n });
    }
    return e;
  }()
), Va = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new Yi(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof It(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new Wa(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof It(t).Element))
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
          return new Ua(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Gi = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Yi(), Zi = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = La.getInstance(), n = new Va(t, r, this);
      Gi.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Zi.prototype[e] = function() {
    var t;
    return (t = Gi.get(this))[e].apply(t, arguments);
  };
});
(function() {
  return typeof tn.ResizeObserver < "u" ? tn.ResizeObserver : Zi;
})();
Vi();
Et();
var fi = {}, Ya = {
  get exports() {
    return fi;
  },
  set exports(e) {
    fi = e;
  }
};
(function(e, t) {
  (function(r, n) {
    e.exports = n(ce());
  })(re, function(r) {
    return r.enc.Utf8;
  });
})(Ya);
kt();
Ui();
var ui = {}, ja = {
  get exports() {
    return ui;
  },
  set exports(e) {
    ui = e;
  }
};
(function(e, t) {
  (function(r, n, i) {
    e.exports = n(ce(), Se());
  })(re, function(r) {
    return r.pad.Pkcs7;
  });
})(ja);
function Ka(e) {
  var t = [], r = "";
  for (r in e)
    t.push(r);
  return t;
}
function Hn(e) {
  return e = JSON.stringify(e), !(typeof e != "string" || !/^\{[\s\S]*\}$/.test(e));
}
function Ga(e) {
  return e instanceof Array;
}
function Za(e) {
  return Array.prototype.slice.call(e);
}
function Ot() {
  if (!(this instanceof Ot))
    return new Ot();
}
Ot.prototype = {
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
    if (Hn(e))
      for (const n in e)
        this.set(n, e[n], t, r);
    else if (typeof e == "string") {
      const n = Hn(r) ? r : { expires: r }, i = n.path !== void 0 ? `;path=${n.path};path=/` : ";path=/", o = n.domain ? `;domain=${n.domain}` : "", a = n.secure ? ";secure" : "";
      let c = n.expires !== void 0 ? n.expires : "";
      typeof c == "string" && c !== "" ? c = new Date(c) : typeof c == "number" && (c = new Date(+/* @__PURE__ */ new Date() + 1e3 * 60 * 60 * 24 * c)), c !== "" && "toGMTString" in c && (c = `;expires=${c.toGMTString()}`);
      const f = n.sameSite ? `;SameSite=${n.sameSite}` : "";
      document.cookie = `${e}=${encodeURI(t) + c + i + o + a + f}`;
    }
  },
  remove: function(e) {
    e = Ga(e) ? e : Za(arguments);
    for (var t = 0, r = e.length; t < r; t++)
      this.set(e[t], "", -1);
    return e;
  },
  clear: function(e) {
    return e ? this.remove(e) : this.remove(Ka(this.all()));
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
let yt = null;
const Xi = function(e, t, r) {
  const n = arguments;
  if (yt || (yt = Ot()), n.length === 0)
    return yt.all();
  if (n.length === 1 && e === null)
    return yt.clear();
  if (n.length === 2 && !t)
    return yt.clear(e);
  if (typeof e == "string" && !t)
    return yt.get(e);
  if (typeof e == "string" && t || Hn(e))
    return yt.set(e, t, r);
};
for (const e in Ot.prototype)
  Xi[e] = Ot.prototype[e];
var zn = {}, Xa = {
  get exports() {
    return zn;
  },
  set exports(e) {
    zn = e;
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
      function a(s, u) {
        if (!i[s]) {
          if (!n[s]) {
            var h = typeof Yt == "function" && Yt;
            if (!u && h)
              return h(s, !0);
            if (c)
              return c(s, !0);
            var l = new Error("Cannot find module '" + s + "'");
            throw l.code = "MODULE_NOT_FOUND", l;
          }
          var p = i[s] = { exports: {} };
          n[s][0].call(p.exports, function(b) {
            var g = n[s][1][b];
            return a(g || b);
          }, p, p.exports, r, n, i, o);
        }
        return i[s].exports;
      }
      for (var c = typeof Yt == "function" && Yt, f = 0; f < o.length; f++)
        a(o[f]);
      return a;
    }({ 1: [function(r, n, i) {
      (function(o) {
        var a = o.MutationObserver || o.WebKitMutationObserver, c;
        if (a) {
          var f = 0, s = new a(b), u = o.document.createTextNode("");
          s.observe(u, {
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
            var S = o.document.createElement("script");
            S.onreadystatechange = function() {
              b(), S.onreadystatechange = null, S.parentNode.removeChild(S), S = null;
            }, o.document.documentElement.appendChild(S);
          } : c = function() {
            setTimeout(b, 0);
          };
        var l, p = [];
        function b() {
          l = !0;
          for (var S, T, _ = p.length; _; ) {
            for (T = p, p = [], S = -1; ++S < _; )
              T[S]();
            _ = p.length;
          }
          l = !1;
        }
        n.exports = g;
        function g(S) {
          p.push(S) === 1 && !l && c();
        }
      }).call(this, typeof re < "u" ? re : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(r, n, i) {
      var o = r(1);
      function a() {
      }
      var c = {}, f = ["REJECTED"], s = ["FULFILLED"], u = ["PENDING"];
      n.exports = h;
      function h(y) {
        if (typeof y != "function")
          throw new TypeError("resolver must be a function");
        this.state = u, this.queue = [], this.outcome = void 0, y !== a && g(this, y);
      }
      h.prototype.catch = function(y) {
        return this.then(null, y);
      }, h.prototype.then = function(y, w) {
        if (typeof y != "function" && this.state === s || typeof w != "function" && this.state === f)
          return this;
        var k = new this.constructor(a);
        if (this.state !== u) {
          var B = this.state === s ? y : w;
          p(k, B, this.outcome);
        } else
          this.queue.push(new l(k, y, w));
        return k;
      };
      function l(y, w, k) {
        this.promise = y, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof k == "function" && (this.onRejected = k, this.callRejected = this.otherCallRejected);
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
      function p(y, w, k) {
        o(function() {
          var B;
          try {
            B = w(k);
          } catch (I) {
            return c.reject(y, I);
          }
          B === y ? c.reject(y, new TypeError("Cannot resolve promise with itself")) : c.resolve(y, B);
        });
      }
      c.resolve = function(y, w) {
        var k = S(b, w);
        if (k.status === "error")
          return c.reject(y, k.value);
        var B = k.value;
        if (B)
          g(y, B);
        else {
          y.state = s, y.outcome = w;
          for (var I = -1, E = y.queue.length; ++I < E; )
            y.queue[I].callFulfilled(w);
        }
        return y;
      }, c.reject = function(y, w) {
        y.state = f, y.outcome = w;
        for (var k = -1, B = y.queue.length; ++k < B; )
          y.queue[k].callRejected(w);
        return y;
      };
      function b(y) {
        var w = y && y.then;
        if (y && (typeof y == "object" || typeof y == "function") && typeof w == "function")
          return function() {
            w.apply(y, arguments);
          };
      }
      function g(y, w) {
        var k = !1;
        function B(L) {
          k || (k = !0, c.reject(y, L));
        }
        function I(L) {
          k || (k = !0, c.resolve(y, L));
        }
        function E() {
          w(I, B);
        }
        var A = S(E);
        A.status === "error" && B(A.value);
      }
      function S(y, w) {
        var k = {};
        try {
          k.value = y(w), k.status = "success";
        } catch (B) {
          k.status = "error", k.value = B;
        }
        return k;
      }
      h.resolve = T;
      function T(y) {
        return y instanceof this ? y : c.resolve(new this(a), y);
      }
      h.reject = _;
      function _(y) {
        var w = new this(a);
        return c.reject(w, y);
      }
      h.all = d;
      function d(y) {
        var w = this;
        if (Object.prototype.toString.call(y) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var k = y.length, B = !1;
        if (!k)
          return this.resolve([]);
        for (var I = new Array(k), E = 0, A = -1, L = new this(a); ++A < k; )
          O(y[A], A);
        return L;
        function O($, P) {
          w.resolve($).then(z, function(V) {
            B || (B = !0, c.reject(L, V));
          });
          function z(V) {
            I[P] = V, ++E === k && !B && (B = !0, c.resolve(L, I));
          }
        }
      }
      h.race = x;
      function x(y) {
        var w = this;
        if (Object.prototype.toString.call(y) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var k = y.length, B = !1;
        if (!k)
          return this.resolve([]);
        for (var I = -1, E = new this(a); ++I < k; )
          A(y[I]);
        return E;
        function A(L) {
          w.resolve(L).then(function(O) {
            B || (B = !0, c.resolve(E, O));
          }, function(O) {
            B || (B = !0, c.reject(E, O));
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
      function a(v, C) {
        if (!(v instanceof C))
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
      function s() {
        try {
          if (!f || !f.open)
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
      function u(v, C) {
        v = v || [], C = C || {};
        try {
          return new Blob(v, C);
        } catch (R) {
          if (R.name !== "TypeError")
            throw R;
          for (var m = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, N = new m(), D = 0; D < v.length; D += 1)
            N.append(v[D]);
          return N.getBlob(C.type);
        }
      }
      typeof Promise > "u" && r(3);
      var h = Promise;
      function l(v, C) {
        C && v.then(function(m) {
          C(null, m);
        }, function(m) {
          C(m);
        });
      }
      function p(v, C, m) {
        typeof C == "function" && v.then(C), typeof m == "function" && v.catch(m);
      }
      function b(v) {
        return typeof v != "string" && (console.warn(v + " used as a key, but it is not a string."), v = String(v)), v;
      }
      function g() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var S = "local-forage-detect-blob-support", T = void 0, _ = {}, d = Object.prototype.toString, x = "readonly", y = "readwrite";
      function w(v) {
        for (var C = v.length, m = new ArrayBuffer(C), N = new Uint8Array(m), D = 0; D < C; D++)
          N[D] = v.charCodeAt(D);
        return m;
      }
      function k(v) {
        return new h(function(C) {
          var m = v.transaction(S, y), N = u([""]);
          m.objectStore(S).put(N, "key"), m.onabort = function(D) {
            D.preventDefault(), D.stopPropagation(), C(!1);
          }, m.oncomplete = function() {
            var D = navigator.userAgent.match(/Chrome\/(\d+)/), R = navigator.userAgent.match(/Edge\//);
            C(R || !D || parseInt(D[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function B(v) {
        return typeof T == "boolean" ? h.resolve(T) : k(v).then(function(C) {
          return T = C, T;
        });
      }
      function I(v) {
        var C = _[v.name], m = {};
        m.promise = new h(function(N, D) {
          m.resolve = N, m.reject = D;
        }), C.deferredOperations.push(m), C.dbReady ? C.dbReady = C.dbReady.then(function() {
          return m.promise;
        }) : C.dbReady = m.promise;
      }
      function E(v) {
        var C = _[v.name], m = C.deferredOperations.pop();
        if (m)
          return m.resolve(), m.promise;
      }
      function A(v, C) {
        var m = _[v.name], N = m.deferredOperations.pop();
        if (N)
          return N.reject(C), N.promise;
      }
      function L(v, C) {
        return new h(function(m, N) {
          if (_[v.name] = _[v.name] || F(), v.db)
            if (C)
              I(v), v.db.close();
            else
              return m(v.db);
          var D = [v.name];
          C && D.push(v.version);
          var R = f.open.apply(f, D);
          C && (R.onupgradeneeded = function(H) {
            var Y = R.result;
            try {
              Y.createObjectStore(v.storeName), H.oldVersion <= 1 && Y.createObjectStore(S);
            } catch (j) {
              if (j.name === "ConstraintError")
                console.warn('The database "' + v.name + '" has been upgraded from version ' + H.oldVersion + " to version " + H.newVersion + ', but the storage "' + v.storeName + '" already exists.');
              else
                throw j;
            }
          }), R.onerror = function(H) {
            H.preventDefault(), N(R.error);
          }, R.onsuccess = function() {
            var H = R.result;
            H.onversionchange = function(Y) {
              Y.target.close();
            }, m(H), E(v);
          };
        });
      }
      function O(v) {
        return L(v, !1);
      }
      function $(v) {
        return L(v, !0);
      }
      function P(v, C) {
        if (!v.db)
          return !0;
        var m = !v.db.objectStoreNames.contains(v.storeName), N = v.version < v.db.version, D = v.version > v.db.version;
        if (N && (v.version !== C && console.warn('The database "' + v.name + `" can't be downgraded from version ` + v.db.version + " to version " + v.version + "."), v.version = v.db.version), D || m) {
          if (m) {
            var R = v.db.version + 1;
            R > v.version && (v.version = R);
          }
          return !0;
        }
        return !1;
      }
      function z(v) {
        return new h(function(C, m) {
          var N = new FileReader();
          N.onerror = m, N.onloadend = function(D) {
            var R = btoa(D.target.result || "");
            C({
              __local_forage_encoded_blob: !0,
              data: R,
              type: v.type
            });
          }, N.readAsBinaryString(v);
        });
      }
      function V(v) {
        var C = w(atob(v.data));
        return u([C], { type: v.type });
      }
      function Z(v) {
        return v && v.__local_forage_encoded_blob;
      }
      function X(v) {
        var C = this, m = C._initReady().then(function() {
          var N = _[C._dbInfo.name];
          if (N && N.dbReady)
            return N.dbReady;
        });
        return p(m, v, v), m;
      }
      function J(v) {
        I(v);
        for (var C = _[v.name], m = C.forages, N = 0; N < m.length; N++) {
          var D = m[N];
          D._dbInfo.db && (D._dbInfo.db.close(), D._dbInfo.db = null);
        }
        return v.db = null, O(v).then(function(R) {
          return v.db = R, P(v) ? $(v) : R;
        }).then(function(R) {
          v.db = C.db = R;
          for (var H = 0; H < m.length; H++)
            m[H]._dbInfo.db = R;
        }).catch(function(R) {
          throw A(v, R), R;
        });
      }
      function M(v, C, m, N) {
        N === void 0 && (N = 1);
        try {
          var D = v.db.transaction(v.storeName, C);
          m(null, D);
        } catch (R) {
          if (N > 0 && (!v.db || R.name === "InvalidStateError" || R.name === "NotFoundError"))
            return h.resolve().then(function() {
              if (!v.db || R.name === "NotFoundError" && !v.db.objectStoreNames.contains(v.storeName) && v.version <= v.db.version)
                return v.db && (v.version = v.db.version + 1), $(v);
            }).then(function() {
              return J(v).then(function() {
                M(v, C, m, N - 1);
              });
            }).catch(m);
          m(R);
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
      function q(v) {
        var C = this, m = {
          db: null
        };
        if (v)
          for (var N in v)
            m[N] = v[N];
        var D = _[m.name];
        D || (D = F(), _[m.name] = D), D.forages.push(C), C._initReady || (C._initReady = C.ready, C.ready = X);
        var R = [];
        function H() {
          return h.resolve();
        }
        for (var Y = 0; Y < D.forages.length; Y++) {
          var j = D.forages[Y];
          j !== C && R.push(j._initReady().catch(H));
        }
        var K = D.forages.slice(0);
        return h.all(R).then(function() {
          return m.db = D.db, O(m);
        }).then(function(G) {
          return m.db = G, P(m, C._defaultConfig.version) ? $(m) : G;
        }).then(function(G) {
          m.db = D.db = G, C._dbInfo = m;
          for (var Q = 0; Q < K.length; Q++) {
            var se = K[Q];
            se !== C && (se._dbInfo.db = m.db, se._dbInfo.version = m.version);
          }
        });
      }
      function W(v, C) {
        var m = this;
        v = b(v);
        var N = new h(function(D, R) {
          m.ready().then(function() {
            M(m._dbInfo, x, function(H, Y) {
              if (H)
                return R(H);
              try {
                var j = Y.objectStore(m._dbInfo.storeName), K = j.get(v);
                K.onsuccess = function() {
                  var G = K.result;
                  G === void 0 && (G = null), Z(G) && (G = V(G)), D(G);
                }, K.onerror = function() {
                  R(K.error);
                };
              } catch (G) {
                R(G);
              }
            });
          }).catch(R);
        });
        return l(N, C), N;
      }
      function ae(v, C) {
        var m = this, N = new h(function(D, R) {
          m.ready().then(function() {
            M(m._dbInfo, x, function(H, Y) {
              if (H)
                return R(H);
              try {
                var j = Y.objectStore(m._dbInfo.storeName), K = j.openCursor(), G = 1;
                K.onsuccess = function() {
                  var Q = K.result;
                  if (Q) {
                    var se = Q.value;
                    Z(se) && (se = V(se));
                    var he = v(se, Q.key, G++);
                    he !== void 0 ? D(he) : Q.continue();
                  } else
                    D();
                }, K.onerror = function() {
                  R(K.error);
                };
              } catch (Q) {
                R(Q);
              }
            });
          }).catch(R);
        });
        return l(N, C), N;
      }
      function ue(v, C, m) {
        var N = this;
        v = b(v);
        var D = new h(function(R, H) {
          var Y;
          N.ready().then(function() {
            return Y = N._dbInfo, d.call(C) === "[object Blob]" ? B(Y.db).then(function(j) {
              return j ? C : z(C);
            }) : C;
          }).then(function(j) {
            M(N._dbInfo, y, function(K, G) {
              if (K)
                return H(K);
              try {
                var Q = G.objectStore(N._dbInfo.storeName);
                j === null && (j = void 0);
                var se = Q.put(j, v);
                G.oncomplete = function() {
                  j === void 0 && (j = null), R(j);
                }, G.onabort = G.onerror = function() {
                  var he = se.error ? se.error : se.transaction.error;
                  H(he);
                };
              } catch (he) {
                H(he);
              }
            });
          }).catch(H);
        });
        return l(D, m), D;
      }
      function xe(v, C) {
        var m = this;
        v = b(v);
        var N = new h(function(D, R) {
          m.ready().then(function() {
            M(m._dbInfo, y, function(H, Y) {
              if (H)
                return R(H);
              try {
                var j = Y.objectStore(m._dbInfo.storeName), K = j.delete(v);
                Y.oncomplete = function() {
                  D();
                }, Y.onerror = function() {
                  R(K.error);
                }, Y.onabort = function() {
                  var G = K.error ? K.error : K.transaction.error;
                  R(G);
                };
              } catch (G) {
                R(G);
              }
            });
          }).catch(R);
        });
        return l(N, C), N;
      }
      function ne(v) {
        var C = this, m = new h(function(N, D) {
          C.ready().then(function() {
            M(C._dbInfo, y, function(R, H) {
              if (R)
                return D(R);
              try {
                var Y = H.objectStore(C._dbInfo.storeName), j = Y.clear();
                H.oncomplete = function() {
                  N();
                }, H.onabort = H.onerror = function() {
                  var K = j.error ? j.error : j.transaction.error;
                  D(K);
                };
              } catch (K) {
                D(K);
              }
            });
          }).catch(D);
        });
        return l(m, v), m;
      }
      function be(v) {
        var C = this, m = new h(function(N, D) {
          C.ready().then(function() {
            M(C._dbInfo, x, function(R, H) {
              if (R)
                return D(R);
              try {
                var Y = H.objectStore(C._dbInfo.storeName), j = Y.count();
                j.onsuccess = function() {
                  N(j.result);
                }, j.onerror = function() {
                  D(j.error);
                };
              } catch (K) {
                D(K);
              }
            });
          }).catch(D);
        });
        return l(m, v), m;
      }
      function Ee(v, C) {
        var m = this, N = new h(function(D, R) {
          if (v < 0) {
            D(null);
            return;
          }
          m.ready().then(function() {
            M(m._dbInfo, x, function(H, Y) {
              if (H)
                return R(H);
              try {
                var j = Y.objectStore(m._dbInfo.storeName), K = !1, G = j.openKeyCursor();
                G.onsuccess = function() {
                  var Q = G.result;
                  if (!Q) {
                    D(null);
                    return;
                  }
                  v === 0 || K ? D(Q.key) : (K = !0, Q.advance(v));
                }, G.onerror = function() {
                  R(G.error);
                };
              } catch (Q) {
                R(Q);
              }
            });
          }).catch(R);
        });
        return l(N, C), N;
      }
      function Je(v) {
        var C = this, m = new h(function(N, D) {
          C.ready().then(function() {
            M(C._dbInfo, x, function(R, H) {
              if (R)
                return D(R);
              try {
                var Y = H.objectStore(C._dbInfo.storeName), j = Y.openKeyCursor(), K = [];
                j.onsuccess = function() {
                  var G = j.result;
                  if (!G) {
                    N(K);
                    return;
                  }
                  K.push(G.key), G.continue();
                }, j.onerror = function() {
                  D(j.error);
                };
              } catch (G) {
                D(G);
              }
            });
          }).catch(D);
        });
        return l(m, v), m;
      }
      function Me(v, C) {
        C = g.apply(this, arguments);
        var m = this.config();
        v = typeof v != "function" && v || {}, v.name || (v.name = v.name || m.name, v.storeName = v.storeName || m.storeName);
        var N = this, D;
        if (!v.name)
          D = h.reject("Invalid arguments");
        else {
          var R = v.name === m.name && N._dbInfo.db, H = R ? h.resolve(N._dbInfo.db) : O(v).then(function(Y) {
            var j = _[v.name], K = j.forages;
            j.db = Y;
            for (var G = 0; G < K.length; G++)
              K[G]._dbInfo.db = Y;
            return Y;
          });
          v.storeName ? D = H.then(function(Y) {
            if (Y.objectStoreNames.contains(v.storeName)) {
              var j = Y.version + 1;
              I(v);
              var K = _[v.name], G = K.forages;
              Y.close();
              for (var Q = 0; Q < G.length; Q++) {
                var se = G[Q];
                se._dbInfo.db = null, se._dbInfo.version = j;
              }
              var he = new h(function(de, me) {
                var ge = f.open(v.name, j);
                ge.onerror = function($e) {
                  var Wt = ge.result;
                  Wt.close(), me($e);
                }, ge.onupgradeneeded = function() {
                  var $e = ge.result;
                  $e.deleteObjectStore(v.storeName);
                }, ge.onsuccess = function() {
                  var $e = ge.result;
                  $e.close(), de($e);
                };
              });
              return he.then(function(de) {
                K.db = de;
                for (var me = 0; me < G.length; me++) {
                  var ge = G[me];
                  ge._dbInfo.db = de, E(ge._dbInfo);
                }
              }).catch(function(de) {
                throw (A(v, de) || h.resolve()).catch(function() {
                }), de;
              });
            }
          }) : D = H.then(function(Y) {
            I(v);
            var j = _[v.name], K = j.forages;
            Y.close();
            for (var G = 0; G < K.length; G++) {
              var Q = K[G];
              Q._dbInfo.db = null;
            }
            var se = new h(function(he, de) {
              var me = f.deleteDatabase(v.name);
              me.onerror = function() {
                var ge = me.result;
                ge && ge.close(), de(me.error);
              }, me.onblocked = function() {
                console.warn('dropInstance blocked for database "' + v.name + '" until all open connections are closed');
              }, me.onsuccess = function() {
                var ge = me.result;
                ge && ge.close(), he(ge);
              };
            });
            return se.then(function(he) {
              j.db = he;
              for (var de = 0; de < K.length; de++) {
                var me = K[de];
                E(me._dbInfo);
              }
            }).catch(function(he) {
              throw (A(v, he) || h.resolve()).catch(function() {
              }), he;
            });
          });
        }
        return l(D, C), D;
      }
      var Le = {
        _driver: "asyncStorage",
        _initStorage: q,
        _support: s(),
        iterate: ae,
        getItem: W,
        setItem: ue,
        removeItem: xe,
        clear: ne,
        length: be,
        key: Ee,
        keys: Je,
        dropInstance: Me
      };
      function Te() {
        return typeof openDatabase == "function";
      }
      var Pe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", xt = "~~local_forage_type~", bt = /^~~local_forage_type~([^~]+)~/, Ve = "__lfsc__:", gt = Ve.length, et = "arbf", Ne = "blob", Ie = "si08", He = "ui08", mt = "uic8", Pt = "si16", tt = "si32", ct = "ur16", er = "ui32", Mt = "fl32", $t = "fl64", rt = gt + et.length, ft = Object.prototype.toString;
      function tr(v) {
        var C = v.length * 0.75, m = v.length, N, D = 0, R, H, Y, j;
        v[v.length - 1] === "=" && (C--, v[v.length - 2] === "=" && C--);
        var K = new ArrayBuffer(C), G = new Uint8Array(K);
        for (N = 0; N < m; N += 4)
          R = Pe.indexOf(v[N]), H = Pe.indexOf(v[N + 1]), Y = Pe.indexOf(v[N + 2]), j = Pe.indexOf(v[N + 3]), G[D++] = R << 2 | H >> 4, G[D++] = (H & 15) << 4 | Y >> 2, G[D++] = (Y & 3) << 6 | j & 63;
        return K;
      }
      function Bt(v) {
        var C = new Uint8Array(v), m = "", N;
        for (N = 0; N < C.length; N += 3)
          m += Pe[C[N] >> 2], m += Pe[(C[N] & 3) << 4 | C[N + 1] >> 4], m += Pe[(C[N + 1] & 15) << 2 | C[N + 2] >> 6], m += Pe[C[N + 2] & 63];
        return C.length % 3 === 2 ? m = m.substring(0, m.length - 1) + "=" : C.length % 3 === 1 && (m = m.substring(0, m.length - 2) + "=="), m;
      }
      function rr(v, C) {
        var m = "";
        if (v && (m = ft.call(v)), v && (m === "[object ArrayBuffer]" || v.buffer && ft.call(v.buffer) === "[object ArrayBuffer]")) {
          var N, D = Ve;
          v instanceof ArrayBuffer ? (N = v, D += et) : (N = v.buffer, m === "[object Int8Array]" ? D += Ie : m === "[object Uint8Array]" ? D += He : m === "[object Uint8ClampedArray]" ? D += mt : m === "[object Int16Array]" ? D += Pt : m === "[object Uint16Array]" ? D += ct : m === "[object Int32Array]" ? D += tt : m === "[object Uint32Array]" ? D += er : m === "[object Float32Array]" ? D += Mt : m === "[object Float64Array]" ? D += $t : C(new Error("Failed to get type for BinaryArray"))), C(D + Bt(N));
        } else if (m === "[object Blob]") {
          var R = new FileReader();
          R.onload = function() {
            var H = xt + v.type + "~" + Bt(this.result);
            C(Ve + Ne + H);
          }, R.readAsArrayBuffer(v);
        } else
          try {
            C(JSON.stringify(v));
          } catch (H) {
            console.error("Couldn't convert value into a JSON string: ", v), C(null, H);
          }
      }
      function gn(v) {
        if (v.substring(0, gt) !== Ve)
          return JSON.parse(v);
        var C = v.substring(rt), m = v.substring(gt, rt), N;
        if (m === Ne && bt.test(C)) {
          var D = C.match(bt);
          N = D[1], C = C.substring(D[0].length);
        }
        var R = tr(C);
        switch (m) {
          case et:
            return R;
          case Ne:
            return u([R], { type: N });
          case Ie:
            return new Int8Array(R);
          case He:
            return new Uint8Array(R);
          case mt:
            return new Uint8ClampedArray(R);
          case Pt:
            return new Int16Array(R);
          case ct:
            return new Uint16Array(R);
          case tt:
            return new Int32Array(R);
          case er:
            return new Uint32Array(R);
          case Mt:
            return new Float32Array(R);
          case $t:
            return new Float64Array(R);
          default:
            throw new Error("Unkown type: " + m);
        }
      }
      var Ft = {
        serialize: rr,
        deserialize: gn,
        stringToBuffer: tr,
        bufferToString: Bt
      };
      function Ht(v, C, m, N) {
        v.executeSql("CREATE TABLE IF NOT EXISTS " + C.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], m, N);
      }
      function mn(v) {
        var C = this, m = {
          db: null
        };
        if (v)
          for (var N in v)
            m[N] = typeof v[N] != "string" ? v[N].toString() : v[N];
        var D = new h(function(R, H) {
          try {
            m.db = openDatabase(m.name, String(m.version), m.description, m.size);
          } catch (Y) {
            return H(Y);
          }
          m.db.transaction(function(Y) {
            Ht(Y, m, function() {
              C._dbInfo = m, R();
            }, function(j, K) {
              H(K);
            });
          }, H);
        });
        return m.serializer = Ft, D;
      }
      function ze(v, C, m, N, D, R) {
        v.executeSql(m, N, D, function(H, Y) {
          Y.code === Y.SYNTAX_ERR ? H.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [C.storeName], function(j, K) {
            K.rows.length ? R(j, Y) : Ht(j, C, function() {
              j.executeSql(m, N, D, R);
            }, R);
          }, R) : R(H, Y);
        }, R);
      }
      function yn(v, C) {
        var m = this;
        v = b(v);
        var N = new h(function(D, R) {
          m.ready().then(function() {
            var H = m._dbInfo;
            H.db.transaction(function(Y) {
              ze(Y, H, "SELECT * FROM " + H.storeName + " WHERE key = ? LIMIT 1", [v], function(j, K) {
                var G = K.rows.length ? K.rows.item(0).value : null;
                G && (G = H.serializer.deserialize(G)), D(G);
              }, function(j, K) {
                R(K);
              });
            });
          }).catch(R);
        });
        return l(N, C), N;
      }
      function nr(v, C) {
        var m = this, N = new h(function(D, R) {
          m.ready().then(function() {
            var H = m._dbInfo;
            H.db.transaction(function(Y) {
              ze(Y, H, "SELECT * FROM " + H.storeName, [], function(j, K) {
                for (var G = K.rows, Q = G.length, se = 0; se < Q; se++) {
                  var he = G.item(se), de = he.value;
                  if (de && (de = H.serializer.deserialize(de)), de = v(de, he.key, se + 1), de !== void 0) {
                    D(de);
                    return;
                  }
                }
                D();
              }, function(j, K) {
                R(K);
              });
            });
          }).catch(R);
        });
        return l(N, C), N;
      }
      function ir(v, C, m, N) {
        var D = this;
        v = b(v);
        var R = new h(function(H, Y) {
          D.ready().then(function() {
            C === void 0 && (C = null);
            var j = C, K = D._dbInfo;
            K.serializer.serialize(C, function(G, Q) {
              Q ? Y(Q) : K.db.transaction(function(se) {
                ze(se, K, "INSERT OR REPLACE INTO " + K.storeName + " (key, value) VALUES (?, ?)", [v, G], function() {
                  H(j);
                }, function(he, de) {
                  Y(de);
                });
              }, function(se) {
                if (se.code === se.QUOTA_ERR) {
                  if (N > 0) {
                    H(ir.apply(D, [v, j, m, N - 1]));
                    return;
                  }
                  Y(se);
                }
              });
            });
          }).catch(Y);
        });
        return l(R, m), R;
      }
      function wn(v, C, m) {
        return ir.apply(this, [v, C, m, 1]);
      }
      function _n(v, C) {
        var m = this;
        v = b(v);
        var N = new h(function(D, R) {
          m.ready().then(function() {
            var H = m._dbInfo;
            H.db.transaction(function(Y) {
              ze(Y, H, "DELETE FROM " + H.storeName + " WHERE key = ?", [v], function() {
                D();
              }, function(j, K) {
                R(K);
              });
            });
          }).catch(R);
        });
        return l(N, C), N;
      }
      function or(v) {
        var C = this, m = new h(function(N, D) {
          C.ready().then(function() {
            var R = C._dbInfo;
            R.db.transaction(function(H) {
              ze(H, R, "DELETE FROM " + R.storeName, [], function() {
                N();
              }, function(Y, j) {
                D(j);
              });
            });
          }).catch(D);
        });
        return l(m, v), m;
      }
      function Sn(v) {
        var C = this, m = new h(function(N, D) {
          C.ready().then(function() {
            var R = C._dbInfo;
            R.db.transaction(function(H) {
              ze(H, R, "SELECT COUNT(key) as c FROM " + R.storeName, [], function(Y, j) {
                var K = j.rows.item(0).c;
                N(K);
              }, function(Y, j) {
                D(j);
              });
            });
          }).catch(D);
        });
        return l(m, v), m;
      }
      function En(v, C) {
        var m = this, N = new h(function(D, R) {
          m.ready().then(function() {
            var H = m._dbInfo;
            H.db.transaction(function(Y) {
              ze(Y, H, "SELECT key FROM " + H.storeName + " WHERE id = ? LIMIT 1", [v + 1], function(j, K) {
                var G = K.rows.length ? K.rows.item(0).key : null;
                D(G);
              }, function(j, K) {
                R(K);
              });
            });
          }).catch(R);
        });
        return l(N, C), N;
      }
      function sr(v) {
        var C = this, m = new h(function(N, D) {
          C.ready().then(function() {
            var R = C._dbInfo;
            R.db.transaction(function(H) {
              ze(H, R, "SELECT key FROM " + R.storeName, [], function(Y, j) {
                for (var K = [], G = 0; G < j.rows.length; G++)
                  K.push(j.rows.item(G).key);
                N(K);
              }, function(Y, j) {
                D(j);
              });
            });
          }).catch(D);
        });
        return l(m, v), m;
      }
      function kn(v) {
        return new h(function(C, m) {
          v.transaction(function(N) {
            N.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(D, R) {
              for (var H = [], Y = 0; Y < R.rows.length; Y++)
                H.push(R.rows.item(Y).name);
              C({
                db: v,
                storeNames: H
              });
            }, function(D, R) {
              m(R);
            });
          }, function(N) {
            m(N);
          });
        });
      }
      function ar(v, C) {
        C = g.apply(this, arguments);
        var m = this.config();
        v = typeof v != "function" && v || {}, v.name || (v.name = v.name || m.name, v.storeName = v.storeName || m.storeName);
        var N = this, D;
        return v.name ? D = new h(function(R) {
          var H;
          v.name === m.name ? H = N._dbInfo.db : H = openDatabase(v.name, "", "", 0), v.storeName ? R({
            db: H,
            storeNames: [v.storeName]
          }) : R(kn(H));
        }).then(function(R) {
          return new h(function(H, Y) {
            R.db.transaction(function(j) {
              function K(he) {
                return new h(function(de, me) {
                  j.executeSql("DROP TABLE IF EXISTS " + he, [], function() {
                    de();
                  }, function(ge, $e) {
                    me($e);
                  });
                });
              }
              for (var G = [], Q = 0, se = R.storeNames.length; Q < se; Q++)
                G.push(K(R.storeNames[Q]));
              h.all(G).then(function() {
                H();
              }).catch(function(he) {
                Y(he);
              });
            }, function(j) {
              Y(j);
            });
          });
        }) : D = h.reject("Invalid arguments"), l(D, C), D;
      }
      var Oe = {
        _driver: "webSQLStorage",
        _initStorage: mn,
        _support: Te(),
        iterate: nr,
        getItem: yn,
        setItem: wn,
        removeItem: _n,
        clear: or,
        length: Sn,
        key: En,
        keys: sr,
        dropInstance: ar
      };
      function Ye() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function zt(v, C) {
        var m = v.name + "/";
        return v.storeName !== C.storeName && (m += v.storeName + "/"), m;
      }
      function Cn() {
        var v = "_localforage_support_test";
        try {
          return localStorage.setItem(v, !0), localStorage.removeItem(v), !1;
        } catch {
          return !0;
        }
      }
      function zo() {
        return !Cn() || localStorage.length > 0;
      }
      function qo(v) {
        var C = this, m = {};
        if (v)
          for (var N in v)
            m[N] = v[N];
        return m.keyPrefix = zt(v, C._defaultConfig), zo() ? (C._dbInfo = m, m.serializer = Ft, h.resolve()) : h.reject();
      }
      function Wo(v) {
        var C = this, m = C.ready().then(function() {
          for (var N = C._dbInfo.keyPrefix, D = localStorage.length - 1; D >= 0; D--) {
            var R = localStorage.key(D);
            R.indexOf(N) === 0 && localStorage.removeItem(R);
          }
        });
        return l(m, v), m;
      }
      function Uo(v, C) {
        var m = this;
        v = b(v);
        var N = m.ready().then(function() {
          var D = m._dbInfo, R = localStorage.getItem(D.keyPrefix + v);
          return R && (R = D.serializer.deserialize(R)), R;
        });
        return l(N, C), N;
      }
      function Vo(v, C) {
        var m = this, N = m.ready().then(function() {
          for (var D = m._dbInfo, R = D.keyPrefix, H = R.length, Y = localStorage.length, j = 1, K = 0; K < Y; K++) {
            var G = localStorage.key(K);
            if (G.indexOf(R) === 0) {
              var Q = localStorage.getItem(G);
              if (Q && (Q = D.serializer.deserialize(Q)), Q = v(Q, G.substring(H), j++), Q !== void 0)
                return Q;
            }
          }
        });
        return l(N, C), N;
      }
      function Yo(v, C) {
        var m = this, N = m.ready().then(function() {
          var D = m._dbInfo, R;
          try {
            R = localStorage.key(v);
          } catch {
            R = null;
          }
          return R && (R = R.substring(D.keyPrefix.length)), R;
        });
        return l(N, C), N;
      }
      function jo(v) {
        var C = this, m = C.ready().then(function() {
          for (var N = C._dbInfo, D = localStorage.length, R = [], H = 0; H < D; H++) {
            var Y = localStorage.key(H);
            Y.indexOf(N.keyPrefix) === 0 && R.push(Y.substring(N.keyPrefix.length));
          }
          return R;
        });
        return l(m, v), m;
      }
      function Ko(v) {
        var C = this, m = C.keys().then(function(N) {
          return N.length;
        });
        return l(m, v), m;
      }
      function Go(v, C) {
        var m = this;
        v = b(v);
        var N = m.ready().then(function() {
          var D = m._dbInfo;
          localStorage.removeItem(D.keyPrefix + v);
        });
        return l(N, C), N;
      }
      function Zo(v, C, m) {
        var N = this;
        v = b(v);
        var D = N.ready().then(function() {
          C === void 0 && (C = null);
          var R = C;
          return new h(function(H, Y) {
            var j = N._dbInfo;
            j.serializer.serialize(C, function(K, G) {
              if (G)
                Y(G);
              else
                try {
                  localStorage.setItem(j.keyPrefix + v, K), H(R);
                } catch (Q) {
                  (Q.name === "QuotaExceededError" || Q.name === "NS_ERROR_DOM_QUOTA_REACHED") && Y(Q), Y(Q);
                }
            });
          });
        });
        return l(D, m), D;
      }
      function Xo(v, C) {
        if (C = g.apply(this, arguments), v = typeof v != "function" && v || {}, !v.name) {
          var m = this.config();
          v.name = v.name || m.name, v.storeName = v.storeName || m.storeName;
        }
        var N = this, D;
        return v.name ? D = new h(function(R) {
          v.storeName ? R(zt(v, N._defaultConfig)) : R(v.name + "/");
        }).then(function(R) {
          for (var H = localStorage.length - 1; H >= 0; H--) {
            var Y = localStorage.key(H);
            Y.indexOf(R) === 0 && localStorage.removeItem(Y);
          }
        }) : D = h.reject("Invalid arguments"), l(D, C), D;
      }
      var Qo = {
        _driver: "localStorageWrapper",
        _initStorage: qo,
        _support: Ye(),
        iterate: Vo,
        getItem: Uo,
        setItem: Zo,
        removeItem: Go,
        clear: Wo,
        length: Ko,
        key: Yo,
        keys: jo,
        dropInstance: Xo
      }, Jo = function(C, m) {
        return C === m || typeof C == "number" && typeof m == "number" && isNaN(C) && isNaN(m);
      }, es = function(C, m) {
        for (var N = C.length, D = 0; D < N; ) {
          if (Jo(C[D], m))
            return !0;
          D++;
        }
        return !1;
      }, m0 = Array.isArray || function(v) {
        return Object.prototype.toString.call(v) === "[object Array]";
      }, qt = {}, y0 = {}, At = {
        INDEXEDDB: Le,
        WEBSQL: Oe,
        LOCALSTORAGE: Qo
      }, ts = [At.INDEXEDDB._driver, At.WEBSQL._driver, At.LOCALSTORAGE._driver], cr = ["dropInstance"], Bn = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(cr), rs = {
        description: "",
        driver: ts.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function ns(v, C) {
        v[C] = function() {
          var m = arguments;
          return v.ready().then(function() {
            return v[C].apply(v, m);
          });
        };
      }
      function An() {
        for (var v = 1; v < arguments.length; v++) {
          var C = arguments[v];
          if (C)
            for (var m in C)
              C.hasOwnProperty(m) && (m0(C[m]) ? arguments[0][m] = C[m].slice() : arguments[0][m] = C[m]);
        }
        return arguments[0];
      }
      var is = function() {
        function v(C) {
          a(this, v);
          for (var m in At)
            if (At.hasOwnProperty(m)) {
              var N = At[m], D = N._driver;
              this[m] = D, qt[D] || this.defineDriver(N);
            }
          this._defaultConfig = An({}, rs), this._config = An({}, this._defaultConfig, C), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return v.prototype.config = function(m) {
          if ((typeof m > "u" ? "undefined" : o(m)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var N in m) {
              if (N === "storeName" && (m[N] = m[N].replace(/\W/g, "_")), N === "version" && typeof m[N] != "number")
                return new Error("Database version must be a number.");
              this._config[N] = m[N];
            }
            return "driver" in m && m.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof m == "string" ? this._config[m] : this._config;
        }, v.prototype.defineDriver = function(m, N, D) {
          var R = new h(function(H, Y) {
            try {
              var j = m._driver, K = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!m._driver) {
                Y(K);
                return;
              }
              for (var G = Bn.concat("_initStorage"), Q = 0, se = G.length; Q < se; Q++) {
                var he = G[Q], de = !es(cr, he);
                if ((de || m[he]) && typeof m[he] != "function") {
                  Y(K);
                  return;
                }
              }
              var me = function() {
                for (var Wt = function(as) {
                  return function() {
                    var cs = new Error("Method " + as + " is not implemented by the current driver"), w0 = h.reject(cs);
                    return l(w0, arguments[arguments.length - 1]), w0;
                  };
                }, Rn = 0, ss = cr.length; Rn < ss; Rn++) {
                  var Tn = cr[Rn];
                  m[Tn] || (m[Tn] = Wt(Tn));
                }
              };
              me();
              var ge = function(Wt) {
                qt[j] && console.info("Redefining LocalForage driver: " + j), qt[j] = m, y0[j] = Wt, H();
              };
              "_support" in m ? m._support && typeof m._support == "function" ? m._support().then(ge, Y) : ge(!!m._support) : ge(!0);
            } catch ($e) {
              Y($e);
            }
          });
          return p(R, N, D), R;
        }, v.prototype.driver = function() {
          return this._driver || null;
        }, v.prototype.getDriver = function(m, N, D) {
          var R = qt[m] ? h.resolve(qt[m]) : h.reject(new Error("Driver not found."));
          return p(R, N, D), R;
        }, v.prototype.getSerializer = function(m) {
          var N = h.resolve(Ft);
          return p(N, m), N;
        }, v.prototype.ready = function(m) {
          var N = this, D = N._driverSet.then(function() {
            return N._ready === null && (N._ready = N._initDriver()), N._ready;
          });
          return p(D, m, m), D;
        }, v.prototype.setDriver = function(m, N, D) {
          var R = this;
          m0(m) || (m = [m]);
          var H = this._getSupportedDrivers(m);
          function Y() {
            R._config.driver = R.driver();
          }
          function j(Q) {
            return R._extend(Q), Y(), R._ready = R._initStorage(R._config), R._ready;
          }
          function K(Q) {
            return function() {
              var se = 0;
              function he() {
                for (; se < Q.length; ) {
                  var de = Q[se];
                  return se++, R._dbInfo = null, R._ready = null, R.getDriver(de).then(j).catch(he);
                }
                Y();
                var me = new Error("No available storage method found.");
                return R._driverSet = h.reject(me), R._driverSet;
              }
              return he();
            };
          }
          var G = this._driverSet !== null ? this._driverSet.catch(function() {
            return h.resolve();
          }) : h.resolve();
          return this._driverSet = G.then(function() {
            var Q = H[0];
            return R._dbInfo = null, R._ready = null, R.getDriver(Q).then(function(se) {
              R._driver = se._driver, Y(), R._wrapLibraryMethodsWithReady(), R._initDriver = K(H);
            });
          }).catch(function() {
            Y();
            var Q = new Error("No available storage method found.");
            return R._driverSet = h.reject(Q), R._driverSet;
          }), p(this._driverSet, N, D), this._driverSet;
        }, v.prototype.supports = function(m) {
          return !!y0[m];
        }, v.prototype._extend = function(m) {
          An(this, m);
        }, v.prototype._getSupportedDrivers = function(m) {
          for (var N = [], D = 0, R = m.length; D < R; D++) {
            var H = m[D];
            this.supports(H) && N.push(H);
          }
          return N;
        }, v.prototype._wrapLibraryMethodsWithReady = function() {
          for (var m = 0, N = Bn.length; m < N; m++)
            ns(this, Bn[m]);
        }, v.prototype.createInstance = function(m) {
          return new v(m);
        }, v;
      }(), os = new is();
      n.exports = os;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(Xa);
const Qa = zn, Xe = /* @__PURE__ */ Object.create(null);
Xe.open = "0";
Xe.close = "1";
Xe.ping = "2";
Xe.pong = "3";
Xe.message = "4";
Xe.upgrade = "5";
Xe.noop = "6";
const dr = /* @__PURE__ */ Object.create(null);
Object.keys(Xe).forEach((e) => {
  dr[Xe[e]] = e;
});
const Ja = { type: "error", data: "parser error" }, ec = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", tc = typeof ArrayBuffer == "function", rc = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Qi = ({ type: e, data: t }, r, n) => ec && t instanceof Blob ? r ? n(t) : li(t, n) : tc && (t instanceof ArrayBuffer || rc(t)) ? r ? n(t) : li(new Blob([t]), n) : n(Xe[e] + (t || "")), li = (e, t) => {
  const r = new FileReader();
  return r.onload = function() {
    const n = r.result.split(",")[1];
    t("b" + (n || ""));
  }, r.readAsDataURL(e);
}, hi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", jt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < hi.length; e++)
  jt[hi.charCodeAt(e)] = e;
const nc = (e) => {
  let t = e.length * 0.75, r = e.length, n, i = 0, o, a, c, f;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const s = new ArrayBuffer(t), u = new Uint8Array(s);
  for (n = 0; n < r; n += 4)
    o = jt[e.charCodeAt(n)], a = jt[e.charCodeAt(n + 1)], c = jt[e.charCodeAt(n + 2)], f = jt[e.charCodeAt(n + 3)], u[i++] = o << 2 | a >> 4, u[i++] = (a & 15) << 4 | c >> 2, u[i++] = (c & 3) << 6 | f & 63;
  return s;
}, ic = typeof ArrayBuffer == "function", Ji = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: eo(e, t)
    };
  const r = e.charAt(0);
  return r === "b" ? {
    type: "message",
    data: oc(e.substring(1), t)
  } : dr[r] ? e.length > 1 ? {
    type: dr[r],
    data: e.substring(1)
  } : {
    type: dr[r]
  } : Ja;
}, oc = (e, t) => {
  if (ic) {
    const r = nc(e);
    return eo(r, t);
  } else
    return { base64: !0, data: e };
}, eo = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof ArrayBuffer ? new Blob([e]) : e;
    case "arraybuffer":
    default:
      return e;
  }
}, to = String.fromCharCode(30), sc = (e, t) => {
  const r = e.length, n = new Array(r);
  let i = 0;
  e.forEach((o, a) => {
    Qi(o, !1, (c) => {
      n[a] = c, ++i === r && t(n.join(to));
    });
  });
}, ac = (e, t) => {
  const r = e.split(to), n = [];
  for (let i = 0; i < r.length; i++) {
    const o = Ji(r[i], t);
    if (n.push(o), o.type === "error")
      break;
  }
  return n;
}, ro = 4;
function ye(e) {
  if (e)
    return cc(e);
}
function cc(e) {
  for (var t in ye.prototype)
    e[t] = ye.prototype[t];
  return e;
}
ye.prototype.on = ye.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
ye.prototype.once = function(e, t) {
  function r() {
    this.off(e, r), t.apply(this, arguments);
  }
  return r.fn = t, this.on(e, r), this;
};
ye.prototype.off = ye.prototype.removeListener = ye.prototype.removeAllListeners = ye.prototype.removeEventListener = function(e, t) {
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
ye.prototype.emit = function(e) {
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
ye.prototype.emitReserved = ye.prototype.emit;
ye.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
ye.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const Fe = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();
function no(e, ...t) {
  return t.reduce((r, n) => (e.hasOwnProperty(n) && (r[n] = e[n]), r), {});
}
const fc = Fe.setTimeout, uc = Fe.clearTimeout;
function ln(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = fc.bind(Fe), e.clearTimeoutFn = uc.bind(Fe)) : (e.setTimeoutFn = Fe.setTimeout.bind(Fe), e.clearTimeoutFn = Fe.clearTimeout.bind(Fe));
}
const lc = 1.33;
function hc(e) {
  return typeof e == "string" ? dc(e) : Math.ceil((e.byteLength || e.size) * lc);
}
function dc(e) {
  let t = 0, r = 0;
  for (let n = 0, i = e.length; n < i; n++)
    t = e.charCodeAt(n), t < 128 ? r += 1 : t < 2048 ? r += 2 : t < 55296 || t >= 57344 ? r += 3 : (n++, r += 4);
  return r;
}
class pc extends Error {
  constructor(t, r, n) {
    super(t), this.description = r, this.context = n, this.type = "TransportError";
  }
}
class io extends ye {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, ln(this, t), this.opts = t, this.query = t.query, this.socket = t.socket;
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
    return super.emitReserved("error", new pc(t, r, n)), this;
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
    const r = Ji(t, this.socket.binaryType);
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
const oo = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), qn = 64, vc = {};
let di = 0, fr = 0, pi;
function vi(e) {
  let t = "";
  do
    t = oo[e % qn] + t, e = Math.floor(e / qn);
  while (e > 0);
  return t;
}
function so() {
  const e = vi(+/* @__PURE__ */ new Date());
  return e !== pi ? (di = 0, pi = e) : e + "." + vi(di++);
}
for (; fr < qn; fr++)
  vc[oo[fr]] = fr;
function ao(e) {
  let t = "";
  for (let r in e)
    e.hasOwnProperty(r) && (t.length && (t += "&"), t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
  return t;
}
function xc(e) {
  let t = {}, r = e.split("&");
  for (let n = 0, i = r.length; n < i; n++) {
    let o = r[n].split("=");
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return t;
}
let co = !1;
try {
  co = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const bc = co;
function fo(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || bc))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new Fe[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function gc() {
}
const mc = function() {
  return new fo({
    xdomain: !1
  }).responseType != null;
}();
class yc extends io {
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
    this.supportsBinary = mc && !r;
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
    ac(t, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
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
    this.writable = !1, sc(t, (r) => {
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
    this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = so()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.opts.port && (r === "https" && Number(this.opts.port) !== 443 || r === "http" && Number(this.opts.port) !== 80) && (n = ":" + this.opts.port);
    const i = ao(t), o = this.opts.hostname.indexOf(":") !== -1;
    return r + "://" + (o ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(t = {}) {
    return Object.assign(t, { xd: this.xd, xs: this.xs }, this.opts), new Ze(this.uri(), t);
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
class Ze extends ye {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, r) {
    super(), ln(this, r), this.opts = r, this.method = r.method || "GET", this.uri = t, this.async = r.async !== !1, this.data = r.data !== void 0 ? r.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    const t = no(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    t.xdomain = !!this.opts.xd, t.xscheme = !!this.opts.xs;
    const r = this.xhr = new fo(t);
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
    typeof document < "u" && (this.index = Ze.requestsCount++, Ze.requests[this.index] = this);
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
      if (this.xhr.onreadystatechange = gc, t)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Ze.requests[this.index], this.xhr = null;
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
Ze.requestsCount = 0;
Ze.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", xi);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in Fe ? "pagehide" : "unload";
    addEventListener(e, xi, !1);
  }
}
function xi() {
  for (let e in Ze.requests)
    Ze.requests.hasOwnProperty(e) && Ze.requests[e].abort();
}
const uo = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, r) => r(t, 0))(), ur = Fe.WebSocket || Fe.MozWebSocket, bi = !0, wc = "arraybuffer", gi = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class _c extends io {
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
    const t = this.uri(), r = this.opts.protocols, n = gi ? {} : no(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = bi && !gi ? r ? new ur(t, r) : new ur(t) : new ur(t, r, n);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this.ws.binaryType = this.socket.binaryType || wc, this.addEventListeners();
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
      Qi(n, this.supportsBinary, (o) => {
        const a = {};
        try {
          bi && this.ws.send(o);
        } catch {
        }
        i && uo(() => {
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
    this.opts.port && (r === "wss" && Number(this.opts.port) !== 443 || r === "ws" && Number(this.opts.port) !== 80) && (n = ":" + this.opts.port), this.opts.timestampRequests && (t[this.opts.timestampParam] = so()), this.supportsBinary || (t.b64 = 1);
    const i = ao(t), o = this.opts.hostname.indexOf(":") !== -1;
    return r + "://" + (o ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!ur;
  }
}
const Sc = {
  websocket: _c,
  polling: yc
}, Ec = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, kc = [
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
function Wn(e) {
  const t = e, r = e.indexOf("["), n = e.indexOf("]");
  r != -1 && n != -1 && (e = e.substring(0, r) + e.substring(r, n).replace(/:/g, ";") + e.substring(n, e.length));
  let i = Ec.exec(e || ""), o = {}, a = 14;
  for (; a--; )
    o[kc[a]] = i[a] || "";
  return r != -1 && n != -1 && (o.source = t, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"), o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o.ipv6uri = !0), o.pathNames = Cc(o, o.path), o.queryKey = Bc(o, o.query), o;
}
function Cc(e, t) {
  const r = /\/{2,9}/g, n = t.replace(r, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && n.splice(0, 1), t.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function Bc(e, t) {
  const r = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, i, o) {
    i && (r[i] = o);
  }), r;
}
let lo = class Rt extends ye {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, r = {}) {
    super(), this.writeBuffer = [], t && typeof t == "object" && (r = t, t = null), t ? (t = Wn(t), r.hostname = t.host, r.secure = t.protocol === "https" || t.protocol === "wss", r.port = t.port, t.query && (r.query = t.query)) : r.host && (r.hostname = Wn(r.host).host), ln(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = r.transports || ["polling", "websocket"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
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
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = xc(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
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
    r.EIO = ro, r.transport = t, this.id && (r.sid = this.id);
    const n = Object.assign({}, this.opts.transportOptions[t], this.opts, {
      query: r,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new Sc[t](n);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let t;
    if (this.opts.rememberUpgrade && Rt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
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
    Rt.priorWebsocketSuccess = !1;
    const i = () => {
      n || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (h) => {
        if (!n)
          if (h.type === "pong" && h.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            Rt.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
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
    const a = (h) => {
      const l = new Error("probe error: " + h);
      l.transport = r.name, o(), this.emitReserved("upgradeError", l);
    };
    function c() {
      a("transport closed");
    }
    function f() {
      a("socket closed");
    }
    function s(h) {
      r && h.name !== r.name && o();
    }
    const u = () => {
      r.removeListener("open", i), r.removeListener("error", a), r.removeListener("close", c), this.off("close", f), this.off("upgrading", s);
    };
    r.once("open", i), r.once("error", a), r.once("close", c), this.once("close", f), this.once("upgrading", s), r.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", Rt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
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
      if (i && (r += hc(i)), n > 0 && r > this.maxPayload)
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
    Rt.priorWebsocketSuccess = !1, this.emitReserved("error", t), this.onClose("transport error", t);
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
lo.protocol = ro;
function Ac(e, t = "", r) {
  let n = e;
  r = r || typeof location < "u" && location, e == null && (e = r.protocol + "//" + r.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = r.protocol + e : e = r.host + e), /^(https?|wss?):\/\//.test(e) || (typeof r < "u" ? e = r.protocol + "//" + e : e = "https://" + e), n = Wn(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const o = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + o + ":" + n.port + t, n.href = n.protocol + "://" + o + (r && r.port === n.port ? "" : ":" + n.port), n;
}
const Rc = typeof ArrayBuffer == "function", Tc = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, ho = Object.prototype.toString, Nc = typeof Blob == "function" || typeof Blob < "u" && ho.call(Blob) === "[object BlobConstructor]", Ic = typeof File == "function" || typeof File < "u" && ho.call(File) === "[object FileConstructor]";
function c0(e) {
  return Rc && (e instanceof ArrayBuffer || Tc(e)) || Nc && e instanceof Blob || Ic && e instanceof File;
}
function pr(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let r = 0, n = e.length; r < n; r++)
      if (pr(e[r]))
        return !0;
    return !1;
  }
  if (c0(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return pr(e.toJSON(), !0);
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && pr(e[r]))
      return !0;
  return !1;
}
function Oc(e) {
  const t = [], r = e.data, n = e;
  return n.data = Un(r, t), n.attachments = t.length, { packet: n, buffers: t };
}
function Un(e, t) {
  if (!e)
    return e;
  if (c0(e)) {
    const r = { _placeholder: !0, num: t.length };
    return t.push(e), r;
  } else if (Array.isArray(e)) {
    const r = new Array(e.length);
    for (let n = 0; n < e.length; n++)
      r[n] = Un(e[n], t);
    return r;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const r = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (r[n] = Un(e[n], t));
    return r;
  }
  return e;
}
function Dc(e, t) {
  return e.data = Vn(e.data, t), delete e.attachments, e;
}
function Vn(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let r = 0; r < e.length; r++)
      e[r] = Vn(e[r], t);
  else if (typeof e == "object")
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (e[r] = Vn(e[r], t));
  return e;
}
const Lc = 5;
var fe;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(fe || (fe = {}));
class Pc {
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
    return (t.type === fe.EVENT || t.type === fe.ACK) && pr(t) ? this.encodeAsBinary({
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
    const r = Oc(t), n = this.encodeAsString(r.packet), i = r.buffers;
    return i.unshift(n), i;
  }
}
class f0 extends ye {
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
      n || r.type === fe.BINARY_ACK ? (r.type = n ? fe.EVENT : fe.ACK, this.reconstructor = new Mc(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (c0(t) || t.base64)
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
      const a = t.substring(o, r);
      if (a != Number(a) || t.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(a);
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
        const a = t.charAt(r);
        if (a == null || Number(a) != a) {
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
      if (f0.isPayloadValid(n.type, o))
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
class Mc {
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
      const r = Dc(this.reconPack, this.buffers);
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
const $c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: f0,
  Encoder: Pc,
  get PacketType() {
    return fe;
  },
  protocol: Lc
}, Symbol.toStringTag, { value: "Module" }));
function qe(e, t, r) {
  return e.on(t, r), function() {
    e.off(t, r);
  };
}
const Fc = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class po extends ye {
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
      qe(t, "open", this.onopen.bind(this)),
      qe(t, "packet", this.onpacket.bind(this)),
      qe(t, "error", this.onerror.bind(this)),
      qe(t, "close", this.onclose.bind(this))
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
    if (Fc.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (r.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(r), this;
    const n = {
      type: fe.EVENT,
      data: r
    };
    if (n.options = {}, n.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
      const a = this.ids++, c = r.pop();
      this._registerAckCallback(a, c), n.id = a;
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
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === t && this.sendBuffer.splice(a, 1);
      r.call(this, new Error("operation has timed out"));
    }, i);
    this.acks[t] = (...a) => {
      this.io.clearTimeoutFn(o), r.apply(this, [null, ...a]);
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
      r.push((a, c) => n ? a ? o(a) : i(c) : i(a)), this.emit(t, ...r);
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
function Lt(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
Lt.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), r = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + r : e - r;
  }
  return Math.min(e, this.max) | 0;
};
Lt.prototype.reset = function() {
  this.attempts = 0;
};
Lt.prototype.setMin = function(e) {
  this.ms = e;
};
Lt.prototype.setMax = function(e) {
  this.max = e;
};
Lt.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Yn extends ye {
  constructor(t, r) {
    var n;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (r = t, t = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, ln(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((n = r.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new Lt({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = t;
    const i = r.parser || $c;
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
    this.engine = new lo(this.uri, this.opts);
    const r = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = qe(r, "open", function() {
      n.onopen(), t && t();
    }), o = qe(r, "error", (a) => {
      n.cleanup(), n._readyState = "closed", this.emitReserved("error", a), t ? t(a) : n.maybeReconnectOnOpen();
    });
    if (this._timeout !== !1) {
      const a = this._timeout;
      a === 0 && i();
      const c = this.setTimeoutFn(() => {
        i(), r.close(), r.emit("error", new Error("timeout"));
      }, a);
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
    this.subs.push(qe(t, "ping", this.onping.bind(this)), qe(t, "data", this.ondata.bind(this)), qe(t, "error", this.onerror.bind(this)), qe(t, "close", this.onclose.bind(this)), qe(this.decoder, "decoded", this.ondecoded.bind(this)));
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
    uo(() => {
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
    return n ? this._autoConnect && !n.active && n.connect() : (n = new po(this, t, r), this.nsps[t] = n), n;
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
const Ut = {};
function In(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const r = Ac(e, t.path || "/socket.io"), n = r.source, i = r.id, o = r.path, a = Ut[i] && o in Ut[i].nsps, c = t.forceNew || t["force new connection"] || t.multiplex === !1 || a;
  let f;
  return c ? f = new Yn(n, t) : (Ut[i] || (Ut[i] = new Yn(n, t)), f = Ut[i]), r.query && !t.query && (t.query = r.queryKey), f.socket(r.path, t);
}
Object.assign(In, {
  Manager: Yn,
  Socket: po,
  io: In,
  connect: In
});
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Tt = 9e15, vt = 1e9, jn = "0123456789abcdef", nn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", on = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Kn = {
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
  minE: -Tt,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Tt,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, vo, at, oe = !0, hn = "[DecimalError] ", pt = hn + "Invalid argument: ", xo = hn + "Precision limit exceeded", bo = hn + "crypto unavailable", go = "[object Decimal]", Re = Math.floor, we = Math.pow, Hc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, zc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, qc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, mo = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Ue = 1e7, te = 7, Wc = 9007199254740991, Uc = nn.length - 1, Gn = on.length - 1, U = { toStringTag: go };
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
    throw Error(pt + t);
  return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
};
U.comparedTo = U.cmp = function(e) {
  var t, r, n, i, o = this, a = o.d, c = (e = new o.constructor(e)).d, f = o.s, s = e.s;
  if (!a || !c)
    return !f || !s ? NaN : f !== s ? f : a === c ? 0 : !a ^ f < 0 ? 1 : -1;
  if (!a[0] || !c[0])
    return a[0] ? f : c[0] ? -s : 0;
  if (f !== s)
    return f;
  if (o.e !== e.e)
    return o.e > e.e ^ f < 0 ? 1 : -1;
  for (n = a.length, i = c.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a[t] !== c[t])
      return a[t] > c[t] ^ f < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ f < 0 ? 1 : -1;
};
U.cosine = U.cos = function() {
  var e, t, r = this, n = r.constructor;
  return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + te, n.rounding = 1, r = Vc(n, Eo(n, r)), n.precision = e, n.rounding = t, ee(at == 2 || at == 3 ? r.neg() : r, e, t, !0)) : new n(1) : new n(NaN);
};
U.cubeRoot = U.cbrt = function() {
  var e, t, r, n, i, o, a, c, f, s, u = this, h = u.constructor;
  if (!u.isFinite() || u.isZero())
    return new h(u);
  for (oe = !1, o = u.s * we(u.s * u, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Be(u.d), e = u.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = we(r, 1 / 3), e = Re((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new h(r), n.s = u.s) : n = new h(o.toString()), a = (e = h.precision) + 3; ; )
    if (c = n, f = c.times(c).times(c), s = f.plus(u), n = pe(s.plus(u).times(c), s.plus(f), a + 2, 1), Be(c.d).slice(0, a) === (r = Be(n.d)).slice(0, a))
      if (r = r.slice(a - 3, a + 1), r == "9999" || !i && r == "4999") {
        if (!i && (ee(c, e + 1, 0), c.times(c).times(c).eq(u))) {
          n = c;
          break;
        }
        a += 4, i = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (ee(n, e + 1, 1), t = !n.times(n).times(n).eq(u));
        break;
      }
  return oe = !0, ee(n, e, h.rounding, t);
};
U.decimalPlaces = U.dp = function() {
  var e, t = this.d, r = NaN;
  if (t) {
    if (e = t.length - 1, r = (e - Re(this.e / te)) * te, e = t[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
U.dividedBy = U.div = function(e) {
  return pe(this, new this.constructor(e));
};
U.dividedToIntegerBy = U.divToInt = function(e) {
  var t = this, r = t.constructor;
  return ee(pe(t, new r(e), 0, 1, 1), r.precision, r.rounding);
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
  var e, t, r, n, i, o = this, a = o.constructor, c = new a(1);
  if (!o.isFinite())
    return new a(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return c;
  r = a.precision, n = a.rounding, a.precision = r + Math.max(o.e, o.sd()) + 4, a.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / pn(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = Dt(a, 1, o.times(t), new a(1), !0);
  for (var f, s = e, u = new a(8); s--; )
    f = o.times(o), o = c.minus(f.times(u.minus(f.times(u))));
  return ee(o, a.precision = r, a.rounding = n, !0);
};
U.hyperbolicSine = U.sinh = function() {
  var e, t, r, n, i = this, o = i.constructor;
  if (!i.isFinite() || i.isZero())
    return new o(i);
  if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
    i = Dt(o, 2, i, i, !0);
  else {
    e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / pn(5, e)), i = Dt(o, 2, i, i, !0);
    for (var a, c = new o(5), f = new o(16), s = new o(20); e--; )
      a = i.times(i), i = i.times(c.plus(a.times(f.times(a).plus(s))));
  }
  return o.precision = t, o.rounding = r, ee(i, t, r, !0);
};
U.hyperbolicTangent = U.tanh = function() {
  var e, t, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, pe(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
};
U.inverseCosine = U.acos = function() {
  var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, o = r.rounding;
  return n !== -1 ? n === 0 ? t.isNeg() ? We(r, i, o) : new r(0) : new r(NaN) : t.isZero() ? We(r, i + 4, o).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = We(r, i + 4, o).times(0.5), r.precision = i, r.rounding = o, e.minus(t));
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
  return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? ee(new o(i), e, t, !0) : (o.precision = r = n - i.e, i = pe(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
};
U.inverseSine = U.asin = function() {
  var e, t, r, n, i = this, o = i.constructor;
  return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = We(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
};
U.inverseTangent = U.atan = function() {
  var e, t, r, n, i, o, a, c, f, s = this, u = s.constructor, h = u.precision, l = u.rounding;
  if (s.isFinite()) {
    if (s.isZero())
      return new u(s);
    if (s.abs().eq(1) && h + 4 <= Gn)
      return a = We(u, h + 4, l).times(0.25), a.s = s.s, a;
  } else {
    if (!s.s)
      return new u(NaN);
    if (h + 4 <= Gn)
      return a = We(u, h + 4, l).times(0.5), a.s = s.s, a;
  }
  for (u.precision = c = h + 10, u.rounding = 1, r = Math.min(28, c / te + 2 | 0), e = r; e; --e)
    s = s.div(s.times(s).plus(1).sqrt().plus(1));
  for (oe = !1, t = Math.ceil(c / te), n = 1, f = s.times(s), a = new u(s), i = s; e !== -1; )
    if (i = i.times(f), o = a.minus(i.div(n += 2)), i = i.times(f), a = o.plus(i.div(n += 2)), a.d[t] !== void 0)
      for (e = t; a.d[e] === o.d[e] && e--; )
        ;
  return r && (a = a.times(2 << r - 1)), oe = !0, ee(a, u.precision = h, u.rounding = l, !0);
};
U.isFinite = function() {
  return !!this.d;
};
U.isInteger = U.isInt = function() {
  return !!this.d && Re(this.e / te) > this.d.length - 2;
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
  var t, r, n, i, o, a, c, f, s = this, u = s.constructor, h = u.precision, l = u.rounding, p = 5;
  if (e == null)
    e = new u(10), t = !0;
  else {
    if (e = new u(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
      return new u(NaN);
    t = e.eq(10);
  }
  if (r = s.d, s.s < 0 || !r || !r[0] || s.eq(1))
    return new u(r && !r[0] ? -1 / 0 : s.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (t)
    if (r.length > 1)
      o = !0;
    else {
      for (i = r[0]; i % 10 === 0; )
        i /= 10;
      o = i !== 1;
    }
  if (oe = !1, c = h + p, a = dt(s, c), n = t ? sn(u, c + 10) : dt(e, c), f = pe(a, n, c, 1), Zt(f.d, i = h, l))
    do
      if (c += 10, a = dt(s, c), n = t ? sn(u, c + 10) : dt(e, c), f = pe(a, n, c, 1), !o) {
        +Be(f.d).slice(i + 1, i + 15) + 1 == 1e14 && (f = ee(f, h + 1, 0));
        break;
      }
    while (Zt(f.d, i += 10, l));
  return oe = !0, ee(f, h, l);
};
U.minus = U.sub = function(e) {
  var t, r, n, i, o, a, c, f, s, u, h, l, p = this, b = p.constructor;
  if (e = new b(e), !p.d || !e.d)
    return !p.s || !e.s ? e = new b(NaN) : p.d ? e.s = -e.s : e = new b(e.d || p.s !== e.s ? p : NaN), e;
  if (p.s != e.s)
    return e.s = -e.s, p.plus(e);
  if (s = p.d, l = e.d, c = b.precision, f = b.rounding, !s[0] || !l[0]) {
    if (l[0])
      e.s = -e.s;
    else if (s[0])
      e = new b(p);
    else
      return new b(f === 3 ? -0 : 0);
    return oe ? ee(e, c, f) : e;
  }
  if (r = Re(e.e / te), u = Re(p.e / te), s = s.slice(), o = u - r, o) {
    for (h = o < 0, h ? (t = s, o = -o, a = l.length) : (t = l, r = u, a = s.length), n = Math.max(Math.ceil(c / te), a) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o; n--; )
      t.push(0);
    t.reverse();
  } else {
    for (n = s.length, a = l.length, h = n < a, h && (a = n), n = 0; n < a; n++)
      if (s[n] != l[n]) {
        h = s[n] < l[n];
        break;
      }
    o = 0;
  }
  for (h && (t = s, s = l, l = t, e.s = -e.s), a = s.length, n = l.length - a; n > 0; --n)
    s[a++] = 0;
  for (n = l.length; n > o; ) {
    if (s[--n] < l[n]) {
      for (i = n; i && s[--i] === 0; )
        s[i] = Ue - 1;
      --s[i], s[n] += Ue;
    }
    s[n] -= l[n];
  }
  for (; s[--a] === 0; )
    s.pop();
  for (; s[0] === 0; s.shift())
    --r;
  return s[0] ? (e.d = s, e.e = dn(s, r), oe ? ee(e, c, f) : e) : new b(f === 3 ? -0 : 0);
};
U.modulo = U.mod = function(e) {
  var t, r = this, n = r.constructor;
  return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? ee(new n(r), n.precision, n.rounding) : (oe = !1, n.modulo == 9 ? (t = pe(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = pe(r, e, 0, n.modulo, 1), t = t.times(e), oe = !0, r.minus(t));
};
U.naturalExponential = U.exp = function() {
  return Zn(this);
};
U.naturalLogarithm = U.ln = function() {
  return dt(this);
};
U.negated = U.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ee(e);
};
U.plus = U.add = function(e) {
  var t, r, n, i, o, a, c, f, s, u, h = this, l = h.constructor;
  if (e = new l(e), !h.d || !e.d)
    return !h.s || !e.s ? e = new l(NaN) : h.d || (e = new l(e.d || h.s === e.s ? h : NaN)), e;
  if (h.s != e.s)
    return e.s = -e.s, h.minus(e);
  if (s = h.d, u = e.d, c = l.precision, f = l.rounding, !s[0] || !u[0])
    return u[0] || (e = new l(h)), oe ? ee(e, c, f) : e;
  if (o = Re(h.e / te), n = Re(e.e / te), s = s.slice(), i = o - n, i) {
    for (i < 0 ? (r = s, i = -i, a = u.length) : (r = u, n = o, a = s.length), o = Math.ceil(c / te), a = o > a ? o + 1 : a + 1, i > a && (i = a, r.length = 1), r.reverse(); i--; )
      r.push(0);
    r.reverse();
  }
  for (a = s.length, i = u.length, a - i < 0 && (i = a, r = u, u = s, s = r), t = 0; i; )
    t = (s[--i] = s[i] + u[i] + t) / Ue | 0, s[i] %= Ue;
  for (t && (s.unshift(t), ++n), a = s.length; s[--a] == 0; )
    s.pop();
  return e.d = s, e.e = dn(s, n), oe ? ee(e, c, f) : e;
};
U.precision = U.sd = function(e) {
  var t, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(pt + e);
  return r.d ? (t = yo(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
};
U.round = function() {
  var e = this, t = e.constructor;
  return ee(new t(e), e.e + 1, t.rounding);
};
U.sine = U.sin = function() {
  var e, t, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + te, n.rounding = 1, r = jc(n, Eo(n, r)), n.precision = e, n.rounding = t, ee(at > 2 ? r.neg() : r, e, t, !0)) : new n(NaN);
};
U.squareRoot = U.sqrt = function() {
  var e, t, r, n, i, o, a = this, c = a.d, f = a.e, s = a.s, u = a.constructor;
  if (s !== 1 || !c || !c[0])
    return new u(!s || s < 0 && (!c || c[0]) ? NaN : c ? a : 1 / 0);
  for (oe = !1, s = Math.sqrt(+a), s == 0 || s == 1 / 0 ? (t = Be(c), (t.length + f) % 2 == 0 && (t += "0"), s = Math.sqrt(t), f = Re((f + 1) / 2) - (f < 0 || f % 2), s == 1 / 0 ? t = "5e" + f : (t = s.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + f), n = new u(t)) : n = new u(s.toString()), r = (f = u.precision) + 3; ; )
    if (o = n, n = o.plus(pe(a, o, r + 2, 1)).times(0.5), Be(o.d).slice(0, r) === (t = Be(n.d)).slice(0, r))
      if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
        if (!i && (ee(o, f + 1, 0), o.times(o).eq(a))) {
          n = o;
          break;
        }
        r += 4, i = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (ee(n, f + 1, 1), e = !n.times(n).eq(a));
        break;
      }
  return oe = !0, ee(n, f, u.rounding, e);
};
U.tangent = U.tan = function() {
  var e, t, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = pe(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, ee(at == 2 || at == 4 ? r.neg() : r, e, t, !0)) : new n(NaN);
};
U.times = U.mul = function(e) {
  var t, r, n, i, o, a, c, f, s, u = this, h = u.constructor, l = u.d, p = (e = new h(e)).d;
  if (e.s *= u.s, !l || !l[0] || !p || !p[0])
    return new h(!e.s || l && !l[0] && !p || p && !p[0] && !l ? NaN : !l || !p ? e.s / 0 : e.s * 0);
  for (r = Re(u.e / te) + Re(e.e / te), f = l.length, s = p.length, f < s && (o = l, l = p, p = o, a = f, f = s, s = a), o = [], a = f + s, n = a; n--; )
    o.push(0);
  for (n = s; --n >= 0; ) {
    for (t = 0, i = f + n; i > n; )
      c = o[i] + p[n] * l[i - n - 1] + t, o[i--] = c % Ue | 0, t = c / Ue | 0;
    o[i] = (o[i] + t) % Ue | 0;
  }
  for (; !o[--a]; )
    o.pop();
  return t ? ++r : o.shift(), e.d = o, e.e = dn(o, r), oe ? ee(e, h.precision, h.rounding) : e;
};
U.toBinary = function(e, t) {
  return u0(this, 2, e, t);
};
U.toDecimalPlaces = U.toDP = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (De(e, 0, vt), t === void 0 ? t = n.rounding : De(t, 0, 8), ee(r, e + r.e + 1, t));
};
U.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = Qe(n, !0) : (De(e, 0, vt), t === void 0 ? t = i.rounding : De(t, 0, 8), n = ee(new i(n), e + 1, t), r = Qe(n, !0, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
};
U.toFixed = function(e, t) {
  var r, n, i = this, o = i.constructor;
  return e === void 0 ? r = Qe(i) : (De(e, 0, vt), t === void 0 ? t = o.rounding : De(t, 0, 8), n = ee(new o(i), e + i.e + 1, t), r = Qe(n, !1, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
};
U.toFraction = function(e) {
  var t, r, n, i, o, a, c, f, s, u, h, l, p = this, b = p.d, g = p.constructor;
  if (!b)
    return new g(p);
  if (s = r = new g(1), n = f = new g(0), t = new g(n), o = t.e = yo(b) - p.e - 1, a = o % te, t.d[0] = we(10, a < 0 ? te + a : a), e == null)
    e = o > 0 ? t : s;
  else {
    if (c = new g(e), !c.isInt() || c.lt(s))
      throw Error(pt + c);
    e = c.gt(t) ? o > 0 ? t : s : c;
  }
  for (oe = !1, c = new g(Be(b)), u = g.precision, g.precision = o = b.length * te * 2; h = pe(c, t, 0, 1, 1), i = r.plus(h.times(n)), i.cmp(e) != 1; )
    r = n, n = i, i = s, s = f.plus(h.times(i)), f = i, i = t, t = c.minus(h.times(i)), c = i;
  return i = pe(e.minus(r), n, 0, 1, 1), f = f.plus(i.times(s)), r = r.plus(i.times(n)), f.s = s.s = p.s, l = pe(s, n, o, 1).minus(p).abs().cmp(pe(f, r, o, 1).minus(p).abs()) < 1 ? [s, n] : [f, r], g.precision = u, oe = !0, l;
};
U.toHexadecimal = U.toHex = function(e, t) {
  return u0(this, 16, e, t);
};
U.toNearest = function(e, t) {
  var r = this, n = r.constructor;
  if (r = new n(r), e == null) {
    if (!r.d)
      return r;
    e = new n(1), t = n.rounding;
  } else {
    if (e = new n(e), t === void 0 ? t = n.rounding : De(t, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (oe = !1, r = pe(r, e, 0, t, 1).times(e), oe = !0, ee(r)) : (e.s = r.s, r = e), r;
};
U.toNumber = function() {
  return +this;
};
U.toOctal = function(e, t) {
  return u0(this, 8, e, t);
};
U.toPower = U.pow = function(e) {
  var t, r, n, i, o, a, c = this, f = c.constructor, s = +(e = new f(e));
  if (!c.d || !e.d || !c.d[0] || !e.d[0])
    return new f(we(+c, s));
  if (c = new f(c), c.eq(1))
    return c;
  if (n = f.precision, o = f.rounding, e.eq(1))
    return ee(c, n, o);
  if (t = Re(e.e / te), t >= e.d.length - 1 && (r = s < 0 ? -s : s) <= Wc)
    return i = wo(f, c, r, n), e.s < 0 ? new f(1).div(i) : ee(i, n, o);
  if (a = c.s, a < 0) {
    if (t < e.d.length - 1)
      return new f(NaN);
    if (e.d[t] & 1 || (a = 1), c.e == 0 && c.d[0] == 1 && c.d.length == 1)
      return c.s = a, c;
  }
  return r = we(+c, s), t = r == 0 || !isFinite(r) ? Re(s * (Math.log("0." + Be(c.d)) / Math.LN10 + c.e + 1)) : new f(r + "").e, t > f.maxE + 1 || t < f.minE - 1 ? new f(t > 0 ? a / 0 : 0) : (oe = !1, f.rounding = c.s = 1, r = Math.min(12, (t + "").length), i = Zn(e.times(dt(c, n + r)), n), i.d && (i = ee(i, n + 5, 1), Zt(i.d, n, o) && (t = n + 10, i = ee(Zn(e.times(dt(c, t + r)), t), t + 5, 1), +Be(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = ee(i, n + 1, 0)))), i.s = a, oe = !0, f.rounding = o, ee(i, n, o));
};
U.toPrecision = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = Qe(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (De(e, 1, vt), t === void 0 ? t = i.rounding : De(t, 0, 8), n = ee(new i(n), e, t), r = Qe(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
};
U.toSignificantDigits = U.toSD = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (De(e, 1, vt), t === void 0 ? t = n.rounding : De(t, 0, 8)), ee(new n(r), e, t);
};
U.toString = function() {
  var e = this, t = e.constructor, r = Qe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
U.truncated = U.trunc = function() {
  return ee(new this.constructor(this), this.e + 1, 1);
};
U.valueOf = U.toJSON = function() {
  var e = this, t = e.constructor, r = Qe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Be(e) {
  var t, r, n, i = e.length - 1, o = "", a = e[0];
  if (i > 0) {
    for (o += a, t = 1; t < i; t++)
      n = e[t] + "", r = te - n.length, r && (o += ht(r)), o += n;
    a = e[t], n = a + "", r = te - n.length, r && (o += ht(r));
  } else if (a === 0)
    return "0";
  for (; a % 10 === 0; )
    a /= 10;
  return o + a;
}
function De(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(pt + e);
}
function Zt(e, t, r, n) {
  var i, o, a, c;
  for (o = e[0]; o >= 10; o /= 10)
    --t;
  return --t < 0 ? (t += te, i = 0) : (i = Math.ceil((t + 1) / te), t %= te), o = we(10, te - t), c = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? c = c / 100 | 0 : t == 1 && (c = c / 10 | 0), a = r < 4 && c == 99999 || r > 3 && c == 49999 || c == 5e4 || c == 0) : a = (r < 4 && c + 1 == o || r > 3 && c + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == we(10, t - 2) - 1 || (c == o / 2 || c == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? c = c / 1e3 | 0 : t == 1 ? c = c / 100 | 0 : t == 2 && (c = c / 10 | 0), a = (n || r < 4) && c == 9999 || !n && r > 3 && c == 4999) : a = ((n || r < 4) && c + 1 == o || !n && r > 3 && c + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == we(10, t - 3) - 1, a;
}
function vr(e, t, r) {
  for (var n, i = [0], o, a = 0, c = e.length; a < c; ) {
    for (o = i.length; o--; )
      i[o] *= t;
    for (i[0] += jn.indexOf(e.charAt(a++)), n = 0; n < i.length; n++)
      i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
  }
  return i.reverse();
}
function Vc(e, t) {
  var r, n, i;
  if (t.isZero())
    return t;
  n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / pn(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = Dt(e, 1, t.times(i), new e(1));
  for (var o = r; o--; ) {
    var a = t.times(t);
    t = a.times(a).minus(a).times(8).plus(1);
  }
  return e.precision -= r, t;
}
var pe = function() {
  function e(n, i, o) {
    var a, c = 0, f = n.length;
    for (n = n.slice(); f--; )
      a = n[f] * i + c, n[f] = a % o | 0, c = a / o | 0;
    return c && n.unshift(c), n;
  }
  function t(n, i, o, a) {
    var c, f;
    if (o != a)
      f = o > a ? 1 : -1;
    else
      for (c = f = 0; c < o; c++)
        if (n[c] != i[c]) {
          f = n[c] > i[c] ? 1 : -1;
          break;
        }
    return f;
  }
  function r(n, i, o, a) {
    for (var c = 0; o--; )
      n[o] -= c, c = n[o] < i[o] ? 1 : 0, n[o] = c * a + n[o] - i[o];
    for (; !n[0] && n.length > 1; )
      n.shift();
  }
  return function(n, i, o, a, c, f) {
    var s, u, h, l, p, b, g, S, T, _, d, x, y, w, k, B, I, E, A, L, O = n.constructor, $ = n.s == i.s ? 1 : -1, P = n.d, z = i.d;
    if (!P || !P[0] || !z || !z[0])
      return new O(
        // Return NaN if either NaN, or both Infinity or 0.
        !n.s || !i.s || (P ? z && P[0] == z[0] : !z) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          P && P[0] == 0 || !z ? $ * 0 : $ / 0
        )
      );
    for (f ? (p = 1, u = n.e - i.e) : (f = Ue, p = te, u = Re(n.e / p) - Re(i.e / p)), A = z.length, I = P.length, T = new O($), _ = T.d = [], h = 0; z[h] == (P[h] || 0); h++)
      ;
    if (z[h] > (P[h] || 0) && u--, o == null ? (w = o = O.precision, a = O.rounding) : c ? w = o + (n.e - i.e) + 1 : w = o, w < 0)
      _.push(1), b = !0;
    else {
      if (w = w / p + 2 | 0, h = 0, A == 1) {
        for (l = 0, z = z[0], w++; (h < I || l) && w--; h++)
          k = l * f + (P[h] || 0), _[h] = k / z | 0, l = k % z | 0;
        b = l || h < I;
      } else {
        for (l = f / (z[0] + 1) | 0, l > 1 && (z = e(z, l, f), P = e(P, l, f), A = z.length, I = P.length), B = A, d = P.slice(0, A), x = d.length; x < A; )
          d[x++] = 0;
        L = z.slice(), L.unshift(0), E = z[0], z[1] >= f / 2 && ++E;
        do
          l = 0, s = t(z, d, A, x), s < 0 ? (y = d[0], A != x && (y = y * f + (d[1] || 0)), l = y / E | 0, l > 1 ? (l >= f && (l = f - 1), g = e(z, l, f), S = g.length, x = d.length, s = t(g, d, S, x), s == 1 && (l--, r(g, A < S ? L : z, S, f))) : (l == 0 && (s = l = 1), g = z.slice()), S = g.length, S < x && g.unshift(0), r(d, g, x, f), s == -1 && (x = d.length, s = t(z, d, A, x), s < 1 && (l++, r(d, A < x ? L : z, x, f))), x = d.length) : s === 0 && (l++, d = [0]), _[h++] = l, s && d[0] ? d[x++] = P[B] || 0 : (d = [P[B]], x = 1);
        while ((B++ < I || d[0] !== void 0) && w--);
        b = d[0] !== void 0;
      }
      _[0] || _.shift();
    }
    if (p == 1)
      T.e = u, vo = b;
    else {
      for (h = 1, l = _[0]; l >= 10; l /= 10)
        h++;
      T.e = h + u * p - 1, ee(T, c ? o + T.e + 1 : o, a, b);
    }
    return T;
  };
}();
function ee(e, t, r, n) {
  var i, o, a, c, f, s, u, h, l, p = e.constructor;
  e:
    if (t != null) {
      if (h = e.d, !h)
        return e;
      for (i = 1, c = h[0]; c >= 10; c /= 10)
        i++;
      if (o = t - i, o < 0)
        o += te, a = t, u = h[l = 0], f = u / we(10, i - a - 1) % 10 | 0;
      else if (l = Math.ceil((o + 1) / te), c = h.length, l >= c)
        if (n) {
          for (; c++ <= l; )
            h.push(0);
          u = f = 0, i = 1, o %= te, a = o - te + 1;
        } else
          break e;
      else {
        for (u = c = h[l], i = 1; c >= 10; c /= 10)
          i++;
        o %= te, a = o - te + i, f = a < 0 ? 0 : u / we(10, i - a - 1) % 10 | 0;
      }
      if (n = n || t < 0 || h[l + 1] !== void 0 || (a < 0 ? u : u % we(10, i - a - 1)), s = r < 4 ? (f || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : f > 5 || f == 5 && (r == 4 || n || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? a > 0 ? u / we(10, i - a) : 0 : h[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !h[0])
        return h.length = 0, s ? (t -= e.e + 1, h[0] = we(10, (te - t % te) % te), e.e = -t || 0) : h[0] = e.e = 0, e;
      if (o == 0 ? (h.length = l, c = 1, l--) : (h.length = l + 1, c = we(10, te - o), h[l] = a > 0 ? (u / we(10, i - a) % we(10, a) | 0) * c : 0), s)
        for (; ; )
          if (l == 0) {
            for (o = 1, a = h[0]; a >= 10; a /= 10)
              o++;
            for (a = h[0] += c, c = 1; a >= 10; a /= 10)
              c++;
            o != c && (e.e++, h[0] == Ue && (h[0] = 1));
            break;
          } else {
            if (h[l] += c, h[l] != Ue)
              break;
            h[l--] = 0, c = 1;
          }
      for (o = h.length; h[--o] === 0; )
        h.pop();
    }
  return oe && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e;
}
function Qe(e, t, r) {
  if (!e.isFinite())
    return So(e);
  var n, i = e.e, o = Be(e.d), a = o.length;
  return t ? (r && (n = r - a) > 0 ? o = o.charAt(0) + "." + o.slice(1) + ht(n) : a > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + ht(-i - 1) + o, r && (n = r - a) > 0 && (o += ht(n))) : i >= a ? (o += ht(i + 1 - a), r && (n = r - i - 1) > 0 && (o = o + "." + ht(n))) : ((n = i + 1) < a && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - a) > 0 && (i + 1 === a && (o += "."), o += ht(n))), o;
}
function dn(e, t) {
  var r = e[0];
  for (t *= te; r >= 10; r /= 10)
    t++;
  return t;
}
function sn(e, t, r) {
  if (t > Uc)
    throw oe = !0, r && (e.precision = r), Error(xo);
  return ee(new e(nn), t, 1, !0);
}
function We(e, t, r) {
  if (t > Gn)
    throw Error(xo);
  return ee(new e(on), t, r, !0);
}
function yo(e) {
  var t = e.length - 1, r = t * te + 1;
  if (t = e[t], t) {
    for (; t % 10 == 0; t /= 10)
      r--;
    for (t = e[0]; t >= 10; t /= 10)
      r++;
  }
  return r;
}
function ht(e) {
  for (var t = ""; e--; )
    t += "0";
  return t;
}
function wo(e, t, r, n) {
  var i, o = new e(1), a = Math.ceil(n / te + 4);
  for (oe = !1; ; ) {
    if (r % 2 && (o = o.times(t), yi(o.d, a) && (i = !0)), r = Re(r / 2), r === 0) {
      r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
      break;
    }
    t = t.times(t), yi(t.d, a);
  }
  return oe = !0, o;
}
function mi(e) {
  return e.d[e.d.length - 1] & 1;
}
function _o(e, t, r) {
  for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
    if (n = new e(t[o]), n.s)
      i[r](n) && (i = n);
    else {
      i = n;
      break;
    }
  return i;
}
function Zn(e, t) {
  var r, n, i, o, a, c, f, s = 0, u = 0, h = 0, l = e.constructor, p = l.rounding, b = l.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new l(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (t == null ? (oe = !1, f = b) : f = t, c = new l(0.03125); e.e > -2; )
    e = e.times(c), h += 5;
  for (n = Math.log(we(2, h)) / Math.LN10 * 2 + 5 | 0, f += n, r = o = a = new l(1), l.precision = f; ; ) {
    if (o = ee(o.times(e), f, 1), r = r.times(++u), c = a.plus(pe(o, r, f, 1)), Be(c.d).slice(0, f) === Be(a.d).slice(0, f)) {
      for (i = h; i--; )
        a = ee(a.times(a), f, 1);
      if (t == null)
        if (s < 3 && Zt(a.d, f - n, p, s))
          l.precision = f += 10, r = o = c = new l(1), u = 0, s++;
        else
          return ee(a, l.precision = b, p, oe = !0);
      else
        return l.precision = b, a;
    }
    a = c;
  }
}
function dt(e, t) {
  var r, n, i, o, a, c, f, s, u, h, l, p = 1, b = 10, g = e, S = g.d, T = g.constructor, _ = T.rounding, d = T.precision;
  if (g.s < 0 || !S || !S[0] || !g.e && S[0] == 1 && S.length == 1)
    return new T(S && !S[0] ? -1 / 0 : g.s != 1 ? NaN : S ? 0 : g);
  if (t == null ? (oe = !1, u = d) : u = t, T.precision = u += b, r = Be(S), n = r.charAt(0), Math.abs(o = g.e) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      g = g.times(e), r = Be(g.d), n = r.charAt(0), p++;
    o = g.e, n > 1 ? (g = new T("0." + r), o++) : g = new T(n + "." + r.slice(1));
  } else
    return s = sn(T, u + 2, d).times(o + ""), g = dt(new T(n + "." + r.slice(1)), u - b).plus(s), T.precision = d, t == null ? ee(g, d, _, oe = !0) : g;
  for (h = g, f = a = g = pe(g.minus(1), g.plus(1), u, 1), l = ee(g.times(g), u, 1), i = 3; ; ) {
    if (a = ee(a.times(l), u, 1), s = f.plus(pe(a, new T(i), u, 1)), Be(s.d).slice(0, u) === Be(f.d).slice(0, u))
      if (f = f.times(2), o !== 0 && (f = f.plus(sn(T, u + 2, d).times(o + ""))), f = pe(f, new T(p), u, 1), t == null)
        if (Zt(f.d, u - b, _, c))
          T.precision = u += b, s = a = g = pe(h.minus(1), h.plus(1), u, 1), l = ee(g.times(g), u, 1), i = c = 1;
        else
          return ee(f, T.precision = d, _, oe = !0);
      else
        return T.precision = d, f;
    f = s, i += 2;
  }
}
function So(e) {
  return String(e.s * e.s / 0);
}
function Xn(e, t) {
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
function Yc(e, t) {
  var r, n, i, o, a, c, f, s, u;
  if (t.indexOf("_") > -1) {
    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), mo.test(t))
      return Xn(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (zc.test(t))
    r = 16, t = t.toLowerCase();
  else if (Hc.test(t))
    r = 2;
  else if (qc.test(t))
    r = 8;
  else
    throw Error(pt + t);
  for (o = t.search(/p/i), o > 0 ? (f = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), a = o >= 0, n = e.constructor, a && (t = t.replace(".", ""), c = t.length, o = c - o, i = wo(n, new n(r), o, o * 2)), s = vr(t, r, Ue), u = s.length - 1, o = u; s[o] === 0; --o)
    s.pop();
  return o < 0 ? new n(e.s * 0) : (e.e = dn(s, u), e.d = s, oe = !1, a && (e = pe(e, i, c * 4)), f && (e = e.times(Math.abs(f) < 54 ? we(2, f) : Jt.pow(2, f))), oe = !0, e);
}
function jc(e, t) {
  var r, n = t.d.length;
  if (n < 3)
    return t.isZero() ? t : Dt(e, 2, t, t);
  r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / pn(5, r)), t = Dt(e, 2, t, t);
  for (var i, o = new e(5), a = new e(16), c = new e(20); r--; )
    i = t.times(t), t = t.times(o.plus(i.times(a.times(i).minus(c))));
  return t;
}
function Dt(e, t, r, n, i) {
  var o, a, c, f, s = e.precision, u = Math.ceil(s / te);
  for (oe = !1, f = r.times(r), c = new e(n); ; ) {
    if (a = pe(c.times(f), new e(t++ * t++), s, 1), c = i ? n.plus(a) : n.minus(a), n = pe(a.times(f), new e(t++ * t++), s, 1), a = c.plus(n), a.d[u] !== void 0) {
      for (o = u; a.d[o] === c.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = c, c = n, n = a, a = o;
  }
  return oe = !0, a.d.length = u + 1, a;
}
function pn(e, t) {
  for (var r = e; --t; )
    r *= e;
  return r;
}
function Eo(e, t) {
  var r, n = t.s < 0, i = We(e, e.precision, 1), o = i.times(0.5);
  if (t = t.abs(), t.lte(o))
    return at = n ? 4 : 1, t;
  if (r = t.divToInt(i), r.isZero())
    at = n ? 3 : 2;
  else {
    if (t = t.minus(r.times(i)), t.lte(o))
      return at = mi(r) ? n ? 2 : 3 : n ? 4 : 1, t;
    at = mi(r) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return t.minus(i).abs();
}
function u0(e, t, r, n) {
  var i, o, a, c, f, s, u, h, l, p = e.constructor, b = r !== void 0;
  if (b ? (De(r, 1, vt), n === void 0 ? n = p.rounding : De(n, 0, 8)) : (r = p.precision, n = p.rounding), !e.isFinite())
    u = So(e);
  else {
    for (u = Qe(e), a = u.indexOf("."), b ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, a >= 0 && (u = u.replace(".", ""), l = new p(1), l.e = u.length - a, l.d = vr(Qe(l), 10, i), l.e = l.d.length), h = vr(u, 10, i), o = f = h.length; h[--f] == 0; )
      h.pop();
    if (!h[0])
      u = b ? "0p+0" : "0";
    else {
      if (a < 0 ? o-- : (e = new p(e), e.d = h, e.e = o, e = pe(e, l, r, n, 0, i), h = e.d, o = e.e, s = vo), a = h[r], c = i / 2, s = s || h[r + 1] !== void 0, s = n < 4 ? (a !== void 0 || s) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : a > c || a === c && (n === 4 || s || n === 6 && h[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), h.length = r, s)
        for (; ++h[--r] > i - 1; )
          h[r] = 0, r || (++o, h.unshift(1));
      for (f = h.length; !h[f - 1]; --f)
        ;
      for (a = 0, u = ""; a < f; a++)
        u += jn.charAt(h[a]);
      if (b) {
        if (f > 1)
          if (t == 16 || t == 8) {
            for (a = t == 16 ? 4 : 3, --f; f % a; f++)
              u += "0";
            for (h = vr(u, i, t), f = h.length; !h[f - 1]; --f)
              ;
            for (a = 1, u = "1."; a < f; a++)
              u += jn.charAt(h[a]);
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
function yi(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function Kc(e) {
  return new this(e).abs();
}
function Gc(e) {
  return new this(e).acos();
}
function Zc(e) {
  return new this(e).acosh();
}
function Xc(e, t) {
  return new this(e).plus(t);
}
function Qc(e) {
  return new this(e).asin();
}
function Jc(e) {
  return new this(e).asinh();
}
function ef(e) {
  return new this(e).atan();
}
function tf(e) {
  return new this(e).atanh();
}
function rf(e, t) {
  e = new this(e), t = new this(t);
  var r, n = this.precision, i = this.rounding, o = n + 4;
  return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = We(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? We(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = We(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(pe(e, t, o, 1)), t = We(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(pe(e, t, o, 1)), r;
}
function nf(e) {
  return new this(e).cbrt();
}
function of(e) {
  return ee(e = new this(e), e.e + 1, 2);
}
function sf(e, t, r) {
  return new this(e).clamp(t, r);
}
function af(e) {
  if (!e || typeof e != "object")
    throw Error(hn + "Object expected");
  var t, r, n, i = e.defaults === !0, o = [
    "precision",
    1,
    vt,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Tt,
    0,
    "toExpPos",
    0,
    Tt,
    "maxE",
    0,
    Tt,
    "minE",
    -Tt,
    0,
    "modulo",
    0,
    9
  ];
  for (t = 0; t < o.length; t += 3)
    if (r = o[t], i && (this[r] = Kn[r]), (n = e[r]) !== void 0)
      if (Re(n) === n && n >= o[t + 1] && n <= o[t + 2])
        this[r] = n;
      else
        throw Error(pt + r + ": " + n);
  if (r = "crypto", i && (this[r] = Kn[r]), (n = e[r]) !== void 0)
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(bo);
      else
        this[r] = !1;
    else
      throw Error(pt + r + ": " + n);
  return this;
}
function cf(e) {
  return new this(e).cos();
}
function ff(e) {
  return new this(e).cosh();
}
function ko(e) {
  var t, r, n;
  function i(o) {
    var a, c, f, s = this;
    if (!(s instanceof i))
      return new i(o);
    if (s.constructor = i, wi(o)) {
      s.s = o.s, oe ? !o.d || o.e > i.maxE ? (s.e = NaN, s.d = null) : o.e < i.minE ? (s.e = 0, s.d = [0]) : (s.e = o.e, s.d = o.d.slice()) : (s.e = o.e, s.d = o.d ? o.d.slice() : o.d);
      return;
    }
    if (f = typeof o, f === "number") {
      if (o === 0) {
        s.s = 1 / o < 0 ? -1 : 1, s.e = 0, s.d = [0];
        return;
      }
      if (o < 0 ? (o = -o, s.s = -1) : s.s = 1, o === ~~o && o < 1e7) {
        for (a = 0, c = o; c >= 10; c /= 10)
          a++;
        oe ? a > i.maxE ? (s.e = NaN, s.d = null) : a < i.minE ? (s.e = 0, s.d = [0]) : (s.e = a, s.d = [o]) : (s.e = a, s.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (s.s = NaN), s.e = NaN, s.d = null;
        return;
      }
      return Xn(s, o.toString());
    } else if (f !== "string")
      throw Error(pt + o);
    return (c = o.charCodeAt(0)) === 45 ? (o = o.slice(1), s.s = -1) : (c === 43 && (o = o.slice(1)), s.s = 1), mo.test(o) ? Xn(s, o) : Yc(s, o);
  }
  if (i.prototype = U, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = af, i.clone = ko, i.isDecimal = wi, i.abs = Kc, i.acos = Gc, i.acosh = Zc, i.add = Xc, i.asin = Qc, i.asinh = Jc, i.atan = ef, i.atanh = tf, i.atan2 = rf, i.cbrt = nf, i.ceil = of, i.clamp = sf, i.cos = cf, i.cosh = ff, i.div = uf, i.exp = lf, i.floor = hf, i.hypot = df, i.ln = pf, i.log = vf, i.log10 = bf, i.log2 = xf, i.max = gf, i.min = mf, i.mod = yf, i.mul = wf, i.pow = _f, i.random = Sf, i.round = Ef, i.sign = kf, i.sin = Cf, i.sinh = Bf, i.sqrt = Af, i.sub = Rf, i.sum = Tf, i.tan = Nf, i.tanh = If, i.trunc = Of, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; )
      e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function uf(e, t) {
  return new this(e).div(t);
}
function lf(e) {
  return new this(e).exp();
}
function hf(e) {
  return ee(e = new this(e), e.e + 1, 3);
}
function df() {
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
function wi(e) {
  return e instanceof Jt || e && e.toStringTag === go || !1;
}
function pf(e) {
  return new this(e).ln();
}
function vf(e, t) {
  return new this(e).log(t);
}
function xf(e) {
  return new this(e).log(2);
}
function bf(e) {
  return new this(e).log(10);
}
function gf() {
  return _o(this, arguments, "lt");
}
function mf() {
  return _o(this, arguments, "gt");
}
function yf(e, t) {
  return new this(e).mod(t);
}
function wf(e, t) {
  return new this(e).mul(t);
}
function _f(e, t) {
  return new this(e).pow(t);
}
function Sf(e) {
  var t, r, n, i, o = 0, a = new this(1), c = [];
  if (e === void 0 ? e = this.precision : De(e, 1, vt), n = Math.ceil(e / te), this.crypto)
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
        i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : c[o++] = i % 1e7;
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes(n *= 4); o < n; )
        i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (c.push(i % 1e7), o += 4);
      o = n / 4;
    } else
      throw Error(bo);
  else
    for (; o < n; )
      c[o++] = Math.random() * 1e7 | 0;
  for (n = c[--o], e %= te, n && e && (i = we(10, te - e), c[o] = (n / i | 0) * i); c[o] === 0; o--)
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
  return a.e = r, a.d = c, a;
}
function Ef(e) {
  return ee(e = new this(e), e.e + 1, this.rounding);
}
function kf(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Cf(e) {
  return new this(e).sin();
}
function Bf(e) {
  return new this(e).sinh();
}
function Af(e) {
  return new this(e).sqrt();
}
function Rf(e, t) {
  return new this(e).sub(t);
}
function Tf() {
  var e = 0, t = arguments, r = new this(t[e]);
  for (oe = !1; r.s && ++e < t.length; )
    r = r.plus(t[e]);
  return oe = !0, ee(r, this.precision, this.rounding);
}
function Nf(e) {
  return new this(e).tan();
}
function If(e) {
  return new this(e).tanh();
}
function Of(e) {
  return ee(e = new this(e), e.e + 1, 1);
}
U[Symbol.for("nodejs.util.inspect.custom")] = U.toString;
U[Symbol.toStringTag] = "Decimal";
var Jt = U.constructor = ko(Kn);
nn = new Jt(nn);
on = new Jt(on);
var _i = {}, Df = {
  get exports() {
    return _i;
  },
  set exports(e) {
    _i = e;
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
    function a(d) {
      return d !== null && d === d.window;
    }
    function c(d) {
      return a(d) ? d : d.nodeType === 9 && d.defaultView;
    }
    function f(d) {
      var x = typeof d;
      return x === "function" || x === "object" && !!d;
    }
    function s(d) {
      return f(d) && d.nodeType > 0;
    }
    function u(d) {
      var x = i.call(d);
      return x === "[object String]" ? n(d) : f(d) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(x) && d.hasOwnProperty("length") ? d : s(d) ? [d] : [];
    }
    function h(d) {
      var x, y, w = { top: 0, left: 0 }, k = d && d.ownerDocument;
      return x = k.documentElement, typeof d.getBoundingClientRect < "u" && (w = d.getBoundingClientRect()), y = c(k), {
        top: w.top + y.pageYOffset - x.clientTop,
        left: w.left + y.pageXOffset - x.clientLeft
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
        var w = document.createElement("div");
        w.className = "waves-ripple waves-rippling", x.appendChild(w);
        var k = h(x), B = 0, I = 0;
        "touches" in d && d.touches.length ? (B = d.touches[0].pageY - k.top, I = d.touches[0].pageX - k.left) : (B = d.pageY - k.top, I = d.pageX - k.left), I = I >= 0 ? I : 0, B = B >= 0 ? B : 0;
        var E = "scale(" + x.clientWidth / 100 * 3 + ")", A = "translate(0,0)";
        y && (A = "translate(" + y.x + "px, " + y.y + "px)"), w.setAttribute("data-hold", Date.now()), w.setAttribute("data-x", I), w.setAttribute("data-y", B), w.setAttribute("data-scale", E), w.setAttribute("data-translate", A);
        var L = {
          top: B + "px",
          left: I + "px"
        };
        w.classList.add("waves-notransition"), w.setAttribute("style", l(L)), w.classList.remove("waves-notransition"), L["-webkit-transform"] = E + " " + A, L["-moz-transform"] = E + " " + A, L["-ms-transform"] = E + " " + A, L["-o-transform"] = E + " " + A, L.transform = E + " " + A, L.opacity = "1";
        var O = d.type === "mousemove" ? 2500 : p.duration;
        L["-webkit-transition-duration"] = O + "ms", L["-moz-transition-duration"] = O + "ms", L["-o-transition-duration"] = O + "ms", L["transition-duration"] = O + "ms", w.setAttribute("style", l(L));
      },
      hide: function(d, x) {
        x = x || this;
        for (var y = x.getElementsByClassName("waves-rippling"), w = 0, k = y.length; w < k; w++)
          g(d, x, y[w]);
        o && (x.removeEventListener("touchend", p.hide), x.removeEventListener("touchcancel", p.hide)), x.removeEventListener("mouseup", p.hide), x.removeEventListener("mouseleave", p.hide);
      }
    }, b = {
      // Wrap <input> tag so it can perform the effect
      input: function(d) {
        var x = d.parentNode;
        if (!(x.tagName.toLowerCase() === "i" && x.classList.contains("waves-effect"))) {
          var y = document.createElement("i");
          y.className = d.className + " waves-input-wrapper", d.className = "waves-button-input", x.replaceChild(y, d), y.appendChild(d);
          var w = window.getComputedStyle(d, null), k = w.color, B = w.backgroundColor;
          y.setAttribute("style", "color:" + k + ";background:" + B), d.setAttribute("style", "background-color:rgba(0,0,0,0);");
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
        var w = y.getAttribute("data-x"), k = y.getAttribute("data-y"), B = y.getAttribute("data-scale"), I = y.getAttribute("data-translate"), E = Date.now() - Number(y.getAttribute("data-hold")), A = 350 - E;
        A < 0 && (A = 0), d.type === "mousemove" && (A = 150);
        var L = d.type === "mousemove" ? 2500 : p.duration;
        setTimeout(function() {
          var O = {
            top: k + "px",
            left: w + "px",
            opacity: "0",
            // Duration
            "-webkit-transition-duration": L + "ms",
            "-moz-transition-duration": L + "ms",
            "-o-transition-duration": L + "ms",
            "transition-duration": L + "ms",
            "-webkit-transform": B + " " + I,
            "-moz-transform": B + " " + I,
            "-ms-transform": B + " " + I,
            "-o-transform": B + " " + I,
            transform: B + " " + I
          };
          y.setAttribute("style", l(O)), setTimeout(function() {
            try {
              x.removeChild(y);
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
      for (var x = null, y = d.target || d.srcElement; y.parentElement; ) {
        if (!(y instanceof SVGElement) && y.classList.contains("waves-effect")) {
          x = y;
          break;
        }
        y = y.parentElement;
      }
      return x;
    }
    function _(d) {
      var x = T(d);
      if (x !== null) {
        if (x.disabled || x.getAttribute("disabled") || x.classList.contains("disabled"))
          return;
        if (S.registerEvent(d), d.type === "touchstart" && p.delay) {
          var y = !1, w = setTimeout(function() {
            w = null, p.show(d, x);
          }, p.delay), k = function(E) {
            w && (clearTimeout(w), w = null, p.show(d, x)), y || (y = !0, p.hide(E, x)), I();
          }, B = function(E) {
            w && (clearTimeout(w), w = null), k(E), I();
          };
          x.addEventListener("touchmove", B, !1), x.addEventListener("touchend", k, !1), x.addEventListener("touchcancel", k, !1);
          var I = function() {
            x.removeEventListener("touchmove", B), x.removeEventListener("touchend", k), x.removeEventListener("touchcancel", k);
          };
        } else
          p.show(d, x), o && (x.addEventListener("touchend", p.hide, !1), x.addEventListener("touchcancel", p.hide, !1)), x.addEventListener("mouseup", p.hide, !1), x.addEventListener("mouseleave", p.hide, !1);
      }
    }
    return r.init = function(d) {
      var x = document.body;
      d = d || {}, "duration" in d && (p.duration = d.duration), "delay" in d && (p.delay = d.delay), o && (x.addEventListener("touchstart", _, !1), x.addEventListener("touchcancel", S.registerEvent, !1), x.addEventListener("touchend", S.registerEvent, !1)), x.addEventListener("mousedown", _, !1);
    }, r.attach = function(d, x) {
      d = u(d), i.call(x) === "[object Array]" && (x = x.join(" ")), x = x ? " " + x : "";
      for (var y, w, k = 0, B = d.length; k < B; k++)
        y = d[k], w = y.tagName.toLowerCase(), ["input", "img"].indexOf(w) !== -1 && (b[w](y), y = y.parentElement), y.className.indexOf("waves-effect") === -1 && (y.className += " waves-effect" + x);
    }, r.ripple = function(d, x) {
      d = u(d);
      var y = d.length;
      if (x = x || {}, x.wait = x.wait || 0, x.position = x.position || null, y) {
        for (var w, k, B, I = {}, E = 0, A = {
          type: "mousedown",
          button: 1
        }, L = function($, P) {
          return function() {
            p.hide($, P);
          };
        }; E < y; E++)
          if (w = d[E], k = x.position || {
            x: w.clientWidth / 2,
            y: w.clientHeight / 2
          }, B = h(w), I.x = B.left + k.x, I.y = B.top + k.y, A.pageX = I.x, A.pageY = I.y, p.show(A, w), x.wait >= 0 && x.wait !== null) {
            var O = {
              type: "mouseup",
              button: 1
            };
            setTimeout(L(O, w), x.wait);
          }
      }
    }, r.calm = function(d) {
      d = u(d);
      for (var x = {
        type: "mouseup",
        button: 1
      }, y = 0, w = d.length; y < w; y++)
        p.hide(x, d[y]);
    }, r.displayEffect = function(d) {
      console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), r.init(d);
    }, r;
  });
})(Df);
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
  return i = o ? ie.solarFestival.find((a) => a.month === o && a.day == t) : ie.lunarFestival.find((a) => `${a.month}月` === e && a.day === t), i;
}, solar2lunar: function(e, t, r) {
  if (e < 1900 || e > 2100 || e == 1900 && t == 1 && r < 31)
    return -1;
  if (e)
    n = new Date(e, parseInt(t + "") - 1, r);
  else
    var n = /* @__PURE__ */ new Date();
  var i, o = 0, a = (e = n.getFullYear(), t = n.getMonth() + 1, r = n.getDate(), (Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()) - Date.UTC(1900, 0, 31)) / 864e5);
  for (i = 1900; i < 2101 && a > 0; i++)
    a -= o = ie.lYearDays(i);
  a < 0 && (a += o, i--);
  var c = /* @__PURE__ */ new Date(), f = !1;
  c.getFullYear() == e && c.getMonth() + 1 == t && c.getDate() == r && (f = !0);
  var s = n.getDay(), u = ie.nStr1[s];
  s == 0 && (s = 7);
  var h = i, l = ie.leapMonth(i), p = !1;
  for (i = 1; i < 13 && a > 0; i++)
    l > 0 && i == l + 1 && p == 0 ? (--i, p = !0, o = ie.leapDays(h)) : o = ie.monthDays(h, i), p == 1 && i == l + 1 && (p = !1), a -= o;
  a == 0 && l > 0 && i == l + 1 && (p ? p = !1 : (p = !0, --i)), a < 0 && (a += o, --i);
  var b = i, g = a + 1, S = t - 1, T = ie.toGanZhiYear(h), _ = ie.getTerm(h, 2 * t - 1), d = ie.getTerm(h, 2 * t), x = ie.toGanZhi(12 * (e - 1900) + t + 11);
  r >= _ && (x = ie.toGanZhi(12 * (e - 1900) + t + 12));
  var y = !1, w = null;
  _ == r && (y = !0, w = ie.solarTerm[2 * t - 2]), d == r && (y = !0, w = ie.solarTerm[2 * t - 1]);
  var k = Date.UTC(e, S, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, B = ie.toGanZhi(k + r - 1), I = ie.toAstro(t, r);
  const E = ie.toChinaMonth(b), A = ie.toChinaDay(g);
  return { lYear: h, lMonth: b, lDay: g, Animal: ie.getAnimal(h), IMonthCn: (p ? "闰" : "") + E, IDayCn: A, cYear: e, cMonth: t, cDay: r, gzYear: T, gzMonth: x, gzDay: B, isToday: f, isLeap: p, nWeek: s, ncWeek: "星期" + u, isTerm: y, Term: w, astro: I, festcn: ie.getFestival(E, A, e, t), fest: ie.getFestival(t, r, e) };
}, lunar2solar: function(e, t, r, n = !0) {
  n = !!n;
  var i = ie.leapMonth(e);
  if (ie.leapDays(e), n && i != t || e == 2100 && t == 12 && r > 1 || e == 1900 && t == 1 && r < 31)
    return -1;
  var o = ie.monthDays(e, t), a = o;
  if (n && (a = ie.leapDays(e)), e < 1900 || e > 2100 || r > a)
    return -1;
  for (var c = 0, f = 1900; f < e; f++)
    c += ie.lYearDays(f);
  var s = 0, u = !1;
  for (f = 1; f < t; f++)
    s = ie.leapMonth(e), u || s <= f && s > 0 && (c += ie.leapDays(e), u = !0), c += ie.monthDays(e, f);
  n && (c += o);
  var h = Date.UTC(1900, 1, 30, 0, 0, 0), l = new Date(864e5 * (c + r - 31) + h), p = l.getUTCFullYear(), b = l.getUTCMonth() + 1, g = l.getUTCDate();
  return ie.solar2lunar(p, b, g);
} };
ie.lunar2solar;
function nt(e, t) {
  return Object.prototype.toString.call(e) === `[object ${t}]`;
}
function Si(e) {
  return Object.prototype.toString.call(e);
}
const g0 = class {
  static getTypeLong(t) {
    return Si(t);
  }
  static getType(t) {
    const r = Si(t);
    return r.substring(8, r.length - 1).toLocaleLowerCase();
  }
  static isDef(t) {
    return t !== void 0;
  }
  static isUnDef(t) {
    return !this.isDef(t);
  }
  static isObject(t) {
    return t !== null && nt(t, "Object");
  }
  static isEmpty(t) {
    return this.isArray(t) || this.isString(t) ? t.length === 0 : t instanceof Map || t instanceof Set ? t.size === 0 : !!this.isObject(t) && Object.keys(t).length === 0;
  }
  static isDate(t) {
    return nt(t, "Date");
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
    return nt(t, "Number");
  }
  static isPromise(t) {
    return nt(t, "Promise") && this.isObject(t) && this.isFunction(t.then) && this.isFunction(t.catch);
  }
  static isString(t) {
    return nt(t, "String");
  }
  static isFunction(t) {
    return typeof t == "function";
  }
  static isBoolean(t) {
    return nt(t, "Boolean");
  }
  static isRegExp(t) {
    return nt(t, "RegExp");
  }
  static isArray(t) {
    return t && Array.isArray(t);
  }
  static isWindow(t) {
    return typeof window < "u" && nt(t, "Window");
  }
  static isElement(t) {
    return this.isObject(t) && !!t.tagName;
  }
  static isMap(t) {
    return nt(t, "Map");
  }
  static isUrl(t) {
    return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(t);
  }
};
let Kt = g0;
Nn(Kt, "isServer", typeof window > "u"), Nn(Kt, "isClient", !g0.isServer);
function xr(e) {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-f]{6})$/.test(e);
}
function On(e) {
  let t = e.toLowerCase();
  if (xr(e)) {
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
function Dn(e, t) {
  const r = parseInt(e, 16) + t, n = r > 255 ? 255 : r;
  return n.toString(16).length > 1 ? n.toString(16) : `0${n.toString(16)}`;
}
function Ei(e, t, r) {
  const n = [e, t, r].map((i) => (i /= 255) <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
  return 0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2];
}
function Ln(e, t) {
  const r = parseInt(e, 16) - t, n = r < 0 ? 0 : r;
  return n.toString(16).length > 1 ? n.toString(16) : `0${n.toString(16)}`;
}
var ki = Object.freeze({ __proto__: null, isHexColor: xr, rgbToHex: function(e, t, r) {
  const n = (e << 16 | t << 8 | r).toString(16);
  return "#" + new Array(Math.abs(n.length - 7)).join("0") + n;
}, hexToRGB: On, hexToRGBA: function(e, t) {
  let r = e.toLowerCase();
  if (xr(e)) {
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
  if (!xr(e))
    return;
  const [t, r, n] = On(e).replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",").map((i) => Number(i));
  return 0.299 * t + 0.578 * r + 0.114 * n < 192;
}, darken: function(e, t) {
  return e = e.indexOf("#") >= 0 ? e.substring(1, e.length) : e, t = Math.trunc(255 * t / 100), `#${Ln(e.substring(0, 2), t)}${Ln(e.substring(2, 4), t)}${Ln(e.substring(4, 6), t)}`;
}, lighten: function(e, t) {
  return e = e.indexOf("#") >= 0 ? e.substring(1, e.length) : e, t = Math.trunc(255 * t / 100), `#${Dn(e.substring(0, 2), t)}${Dn(e.substring(2, 4), t)}${Dn(e.substring(4, 6), t)}`;
}, calculateBestTextColor: function(e) {
  const t = On(e.substring(1));
  var r, n;
  return r = t.split(","), n = [0, 0, 0], (Ei(~~r[0], ~~r[1], ~~r[2]) + 0.05) / (Ei(n[0], n[1], n[2]) + 0.05) >= 12 ? "#000000" : "#FFFFFF";
} });
for (let e = 0; e <= 15; e++)
  e.toString(16);
let Lf = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof globalThis == "object" && globalThis.globalThis === globalThis ? globalThis : void 0;
Lf.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && /Safari/.test(navigator.userAgent);
var Nt = { local: { has: (e) => Object.prototype.hasOwnProperty.call(localStorage, e), setItem: (e, t, r = 0) => {
  const n = (/* @__PURE__ */ new Date()).getTime(), i = Kt.isDate(r) ? n + 1e3 * r : 0;
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
} }, forage: Qa, cookie: Xi };
window.socketMap = /* @__PURE__ */ new Map();
Jt.set({ precision: 14 });
const ut = gs, l0 = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, Gt = /^[a-z0-9]+(-[a-z0-9]+)*$/, vn = (e, t, r, n = "") => {
  const i = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (i.length < 2 || i.length > 3)
      return null;
    n = i.shift().slice(1);
  }
  if (i.length > 3 || !i.length)
    return null;
  if (i.length > 1) {
    const c = i.pop(), f = i.pop(), s = {
      // Allow provider without '@': "provider:prefix:name"
      provider: i.length > 0 ? i[0] : n,
      prefix: f,
      name: c
    };
    return t && !br(s) ? null : s;
  }
  const o = i[0], a = o.split("-");
  if (a.length > 1) {
    const c = {
      provider: n,
      prefix: a.shift(),
      name: a.join("-")
    };
    return t && !br(c) ? null : c;
  }
  if (r && n === "") {
    const c = {
      provider: n,
      prefix: "",
      name: o
    };
    return t && !br(c, r) ? null : c;
  }
  return null;
}, br = (e, t) => e ? !!((e.provider === "" || e.provider.match(Gt)) && (t && e.prefix === "" || e.prefix.match(Gt)) && e.name.match(Gt)) : !1, Co = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), an = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), xn = Object.freeze({
  ...Co,
  ...an
}), Qn = Object.freeze({
  ...xn,
  body: "",
  hidden: !1
});
function Pf(e, t) {
  const r = {};
  !e.hFlip != !t.hFlip && (r.hFlip = !0), !e.vFlip != !t.vFlip && (r.vFlip = !0);
  const n = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return n && (r.rotate = n), r;
}
function Ci(e, t) {
  const r = Pf(e, t);
  for (const n in Qn)
    n in an ? n in e && !(n in r) && (r[n] = an[n]) : n in t ? r[n] = t[n] : n in e && (r[n] = e[n]);
  return r;
}
function Mf(e, t) {
  const r = e.icons, n = e.aliases || /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  function o(a) {
    if (r[a])
      return i[a] = [];
    if (!(a in i)) {
      i[a] = null;
      const c = n[a] && n[a].parent, f = c && o(c);
      f && (i[a] = [c].concat(f));
    }
    return i[a];
  }
  return (t || Object.keys(r).concat(Object.keys(n))).forEach(o), i;
}
function $f(e, t, r) {
  const n = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function a(c) {
    o = Ci(
      n[c] || i[c],
      o
    );
  }
  return a(t), r.forEach(a), Ci(e, o);
}
function Bo(e, t) {
  const r = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return r;
  e.not_found instanceof Array && e.not_found.forEach((i) => {
    t(i, null), r.push(i);
  });
  const n = Mf(e);
  for (const i in n) {
    const o = n[i];
    o && (t(i, $f(e, i, o)), r.push(i));
  }
  return r;
}
const Ff = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Co
};
function Pn(e, t) {
  for (const r in t)
    if (r in e && typeof e[r] != typeof t[r])
      return !1;
  return !0;
}
function Ao(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Pn(e, Ff))
    return null;
  const r = t.icons;
  for (const i in r) {
    const o = r[i];
    if (!i.match(Gt) || typeof o.body != "string" || !Pn(
      o,
      Qn
    ))
      return null;
  }
  const n = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const i in n) {
    const o = n[i], a = o.parent;
    if (!i.match(Gt) || typeof a != "string" || !r[a] && !n[a] || !Pn(
      o,
      Qn
    ))
      return null;
  }
  return t;
}
const Bi = /* @__PURE__ */ Object.create(null);
function Hf(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function St(e, t) {
  const r = Bi[e] || (Bi[e] = /* @__PURE__ */ Object.create(null));
  return r[t] || (r[t] = Hf(e, t));
}
function h0(e, t) {
  return Ao(t) ? Bo(t, (r, n) => {
    n ? e.icons[r] = n : e.missing.add(r);
  }) : [];
}
function zf(e, t, r) {
  try {
    if (typeof r.body == "string")
      return e.icons[t] = { ...r }, !0;
  } catch {
  }
  return !1;
}
let Xt = !1;
function Ro(e) {
  return typeof e == "boolean" && (Xt = e), Xt;
}
function qf(e) {
  const t = typeof e == "string" ? vn(e, !0, Xt) : e;
  if (t) {
    const r = St(t.provider, t.prefix), n = t.name;
    return r.icons[n] || (r.missing.has(n) ? null : void 0);
  }
}
function Wf(e, t) {
  const r = vn(e, !0, Xt);
  if (!r)
    return !1;
  const n = St(r.provider, r.prefix);
  return zf(n, r.name, t);
}
function Uf(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), Xt && !t && !e.prefix) {
    let i = !1;
    return Ao(e) && (e.prefix = "", Bo(e, (o, a) => {
      a && Wf(o, a) && (i = !0);
    })), i;
  }
  const r = e.prefix;
  if (!br({
    provider: t,
    prefix: r,
    name: "a"
  }))
    return !1;
  const n = St(t, r);
  return !!h0(n, e);
}
const To = Object.freeze({
  width: null,
  height: null
}), No = Object.freeze({
  // Dimensions
  ...To,
  // Transformations
  ...an
}), Vf = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Yf = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Ai(e, t, r) {
  if (t === 1)
    return e;
  if (r = r || 100, typeof e == "number")
    return Math.ceil(e * t * r) / r;
  if (typeof e != "string")
    return e;
  const n = e.split(Vf);
  if (n === null || !n.length)
    return e;
  const i = [];
  let o = n.shift(), a = Yf.test(o);
  for (; ; ) {
    if (a) {
      const c = parseFloat(o);
      isNaN(c) ? i.push(o) : i.push(Math.ceil(c * t * r) / r);
    } else
      i.push(o);
    if (o = n.shift(), o === void 0)
      return i.join("");
    a = !a;
  }
}
const jf = (e) => e === "unset" || e === "undefined" || e === "none";
function Kf(e, t) {
  const r = {
    ...xn,
    ...e
  }, n = {
    ...No,
    ...t
  }, i = {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height
  };
  let o = r.body;
  [r, n].forEach((b) => {
    const g = [], S = b.hFlip, T = b.vFlip;
    let _ = b.rotate;
    S ? T ? _ += 2 : (g.push(
      "translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"
    ), g.push("scale(-1 1)"), i.top = i.left = 0) : T && (g.push(
      "translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"
    ), g.push("scale(1 -1)"), i.top = i.left = 0);
    let d;
    switch (_ < 0 && (_ -= Math.floor(_ / 4) * 4), _ = _ % 4, _) {
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
    _ % 2 === 1 && (i.left !== i.top && (d = i.left, i.left = i.top, i.top = d), i.width !== i.height && (d = i.width, i.width = i.height, i.height = d)), g.length && (o = '<g transform="' + g.join(" ") + '">' + o + "</g>");
  });
  const a = n.width, c = n.height, f = i.width, s = i.height;
  let u, h;
  a === null ? (h = c === null ? "1em" : c === "auto" ? s : c, u = Ai(h, f / s)) : (u = a === "auto" ? f : a, h = c === null ? Ai(u, s / f) : c === "auto" ? s : c);
  const l = {}, p = (b, g) => {
    jf(g) || (l[b] = g.toString());
  };
  return p("width", u), p("height", h), l.viewBox = i.left.toString() + " " + i.top.toString() + " " + f.toString() + " " + s.toString(), {
    attributes: l,
    body: o
  };
}
const Gf = /\sid="(\S+)"/g, Zf = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Xf = 0;
function Qf(e, t = Zf) {
  const r = [];
  let n;
  for (; n = Gf.exec(e); )
    r.push(n[1]);
  if (!r.length)
    return e;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return r.forEach((o) => {
    const a = typeof t == "function" ? t(o) : t + (Xf++).toString(), c = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"),
      "$1" + a + i + "$3"
    );
  }), e = e.replace(new RegExp(i, "g"), ""), e;
}
const Jn = /* @__PURE__ */ Object.create(null);
function Jf(e, t) {
  Jn[e] = t;
}
function e0(e) {
  return Jn[e] || Jn[""];
}
function d0(e) {
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
const p0 = /* @__PURE__ */ Object.create(null), Vt = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], gr = [];
for (; Vt.length > 0; )
  Vt.length === 1 || Math.random() > 0.5 ? gr.push(Vt.shift()) : gr.push(Vt.pop());
p0[""] = d0({
  resources: ["https://api.iconify.design"].concat(gr)
});
function eu(e, t) {
  const r = d0(t);
  return r === null ? !1 : (p0[e] = r, !0);
}
function v0(e) {
  return p0[e];
}
const tu = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Ri = tu();
function ru(e, t) {
  const r = v0(e);
  if (!r)
    return 0;
  let n;
  if (!r.maxURL)
    n = 0;
  else {
    let i = 0;
    r.resources.forEach((a) => {
      i = Math.max(i, a.length);
    });
    const o = t + ".json?icons=";
    n = r.maxURL - i - r.path.length - o.length;
  }
  return n;
}
function nu(e) {
  return e === 404;
}
const iu = (e, t, r) => {
  const n = [], i = ru(e, t), o = "icons";
  let a = {
    type: o,
    provider: e,
    prefix: t,
    icons: []
  }, c = 0;
  return r.forEach((f, s) => {
    c += f.length + 1, c >= i && s > 0 && (n.push(a), a = {
      type: o,
      provider: e,
      prefix: t,
      icons: []
    }, c = f.length), a.icons.push(f);
  }), n.push(a), n;
};
function ou(e) {
  if (typeof e == "string") {
    const t = v0(e);
    if (t)
      return t.path;
  }
  return "/";
}
const su = (e, t, r) => {
  if (!Ri) {
    r("abort", 424);
    return;
  }
  let n = ou(t.provider);
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
  Ri(e + n).then((o) => {
    const a = o.status;
    if (a !== 200) {
      setTimeout(() => {
        r(nu(a) ? "abort" : "next", a);
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
}, au = {
  prepare: iu,
  send: su
};
function cu(e) {
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
    const o = i.provider, a = i.prefix, c = i.name, f = r[o] || (r[o] = /* @__PURE__ */ Object.create(null)), s = f[a] || (f[a] = St(o, a));
    let u;
    c in s.icons ? u = t.loaded : a === "" || s.missing.has(c) ? u = t.missing : u = t.pending;
    const h = {
      provider: o,
      prefix: a,
      name: c
    };
    u.push(h);
  }), t;
}
function Io(e, t) {
  e.forEach((r) => {
    const n = r.loaderCallbacks;
    n && (r.loaderCallbacks = n.filter((i) => i.id !== t));
  });
}
function fu(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let r = !1;
    const n = e.provider, i = e.prefix;
    t.forEach((o) => {
      const a = o.icons, c = a.pending.length;
      a.pending = a.pending.filter((f) => {
        if (f.prefix !== i)
          return !0;
        const s = f.name;
        if (e.icons[s])
          a.loaded.push({
            provider: n,
            prefix: i,
            name: s
          });
        else if (e.missing.has(s))
          a.missing.push({
            provider: n,
            prefix: i,
            name: s
          });
        else
          return r = !0, !0;
        return !1;
      }), a.pending.length !== c && (r || Io([e], o.id), o.callback(
        a.loaded.slice(0),
        a.missing.slice(0),
        a.pending.slice(0),
        o.abort
      ));
    });
  }));
}
let uu = 0;
function lu(e, t, r) {
  const n = uu++, i = Io.bind(null, r, n);
  if (!t.pending.length)
    return i;
  const o = {
    id: n,
    icons: t,
    callback: e,
    abort: i
  };
  return r.forEach((a) => {
    (a.loaderCallbacks || (a.loaderCallbacks = [])).push(o);
  }), i;
}
function hu(e, t = !0, r = !1) {
  const n = [];
  return e.forEach((i) => {
    const o = typeof i == "string" ? vn(i, t, r) : i;
    o && n.push(o);
  }), n;
}
var du = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function pu(e, t, r, n) {
  const i = e.resources.length, o = e.random ? Math.floor(Math.random() * i) : e.index;
  let a;
  if (e.random) {
    let w = e.resources.slice(0);
    for (a = []; w.length > 1; ) {
      const k = Math.floor(Math.random() * w.length);
      a.push(w[k]), w = w.slice(0, k).concat(w.slice(k + 1));
    }
    a = a.concat(w);
  } else
    a = e.resources.slice(o).concat(e.resources.slice(0, o));
  const c = Date.now();
  let f = "pending", s = 0, u, h = null, l = [], p = [];
  typeof n == "function" && p.push(n);
  function b() {
    h && (clearTimeout(h), h = null);
  }
  function g() {
    f === "pending" && (f = "aborted"), b(), l.forEach((w) => {
      w.status === "pending" && (w.status = "aborted");
    }), l = [];
  }
  function S(w, k) {
    k && (p = []), typeof w == "function" && p.push(w);
  }
  function T() {
    return {
      startTime: c,
      payload: t,
      status: f,
      queriesSent: s,
      queriesPending: l.length,
      subscribe: S,
      abort: g
    };
  }
  function _() {
    f = "failed", p.forEach((w) => {
      w(void 0, u);
    });
  }
  function d() {
    l.forEach((w) => {
      w.status === "pending" && (w.status = "aborted");
    }), l = [];
  }
  function x(w, k, B) {
    const I = k !== "success";
    switch (l = l.filter((E) => E !== w), f) {
      case "pending":
        break;
      case "failed":
        if (I || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (k === "abort") {
      u = B, _();
      return;
    }
    if (I) {
      u = B, l.length || (a.length ? y() : _());
      return;
    }
    if (b(), d(), !e.random) {
      const E = e.resources.indexOf(w.resource);
      E !== -1 && E !== e.index && (e.index = E);
    }
    f = "completed", p.forEach((E) => {
      E(B);
    });
  }
  function y() {
    if (f !== "pending")
      return;
    b();
    const w = a.shift();
    if (w === void 0) {
      if (l.length) {
        h = setTimeout(() => {
          b(), f === "pending" && (d(), _());
        }, e.timeout);
        return;
      }
      _();
      return;
    }
    const k = {
      status: "pending",
      resource: w,
      callback: (B, I) => {
        x(k, B, I);
      }
    };
    l.push(k), s++, h = setTimeout(y, e.rotate), r(w, t, k.callback);
  }
  return setTimeout(y), T;
}
function Oo(e) {
  const t = {
    ...du,
    ...e
  };
  let r = [];
  function n() {
    r = r.filter((c) => c().status === "pending");
  }
  function i(c, f, s) {
    const u = pu(
      t,
      c,
      f,
      (h, l) => {
        n(), s && s(h, l);
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
function Ti() {
}
const Mn = /* @__PURE__ */ Object.create(null);
function vu(e) {
  if (!Mn[e]) {
    const t = v0(e);
    if (!t)
      return;
    const r = Oo(t), n = {
      config: t,
      redundancy: r
    };
    Mn[e] = n;
  }
  return Mn[e];
}
function xu(e, t, r) {
  let n, i;
  if (typeof e == "string") {
    const o = e0(e);
    if (!o)
      return r(void 0, 424), Ti;
    i = o.send;
    const a = vu(e);
    a && (n = a.redundancy);
  } else {
    const o = d0(e);
    if (o) {
      n = Oo(o);
      const a = e.resources ? e.resources[0] : "", c = e0(a);
      c && (i = c.send);
    }
  }
  return !n || !i ? (r(void 0, 424), Ti) : n.query(t, i, r)().abort;
}
const Ni = "iconify2", Qt = "iconify", Do = Qt + "-count", Ii = Qt + "-version", Lo = 36e5, bu = 168;
function t0(e, t) {
  try {
    return e.getItem(t);
  } catch {
  }
}
function x0(e, t, r) {
  try {
    return e.setItem(t, r), !0;
  } catch {
  }
}
function Oi(e, t) {
  try {
    e.removeItem(t);
  } catch {
  }
}
function r0(e, t) {
  return x0(e, Do, t.toString());
}
function n0(e) {
  return parseInt(t0(e, Do)) || 0;
}
const bn = {
  local: !0,
  session: !0
}, Po = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let b0 = !1;
function gu(e) {
  b0 = e;
}
let lr = typeof window > "u" ? {} : window;
function Mo(e) {
  const t = e + "Storage";
  try {
    if (lr && lr[t] && typeof lr[t].length == "number")
      return lr[t];
  } catch {
  }
  bn[e] = !1;
}
function $o(e, t) {
  const r = Mo(e);
  if (!r)
    return;
  const n = t0(r, Ii);
  if (n !== Ni) {
    if (n) {
      const c = n0(r);
      for (let f = 0; f < c; f++)
        Oi(r, Qt + f.toString());
    }
    x0(r, Ii, Ni), r0(r, 0);
    return;
  }
  const i = Math.floor(Date.now() / Lo) - bu, o = (c) => {
    const f = Qt + c.toString(), s = t0(r, f);
    if (typeof s == "string") {
      try {
        const u = JSON.parse(s);
        if (typeof u == "object" && typeof u.cached == "number" && u.cached > i && typeof u.provider == "string" && typeof u.data == "object" && typeof u.data.prefix == "string" && // Valid item: run callback
        t(u, c))
          return !0;
      } catch {
      }
      Oi(r, f);
    }
  };
  let a = n0(r);
  for (let c = a - 1; c >= 0; c--)
    o(c) || (c === a - 1 ? (a--, r0(r, a)) : Po[e].add(c));
}
function Fo() {
  if (!b0) {
    gu(!0);
    for (const e in bn)
      $o(e, (t) => {
        const r = t.data, n = t.provider, i = r.prefix, o = St(
          n,
          i
        );
        if (!h0(o, r).length)
          return !1;
        const a = r.lastModified || -1;
        return o.lastModifiedCached = o.lastModifiedCached ? Math.min(o.lastModifiedCached, a) : a, !0;
      });
  }
}
function mu(e, t) {
  const r = e.lastModifiedCached;
  if (
    // Matches or newer
    r && r >= t
  )
    return r === t;
  if (e.lastModifiedCached = t, r)
    for (const n in bn)
      $o(n, (i) => {
        const o = i.data;
        return i.provider !== e.provider || o.prefix !== e.prefix || o.lastModified === t;
      });
  return !0;
}
function yu(e, t) {
  b0 || Fo();
  function r(n) {
    let i;
    if (!bn[n] || !(i = Mo(n)))
      return;
    const o = Po[n];
    let a;
    if (o.size)
      o.delete(a = Array.from(o).shift());
    else if (a = n0(i), !r0(i, a + 1))
      return;
    const c = {
      cached: Math.floor(Date.now() / Lo),
      provider: e.provider,
      data: t
    };
    return x0(
      i,
      Qt + a.toString(),
      JSON.stringify(c)
    );
  }
  t.lastModified && !mu(e, t.lastModified) || Object.keys(t.icons).length && (t.not_found && (t = Object.assign({}, t), delete t.not_found), r("local") || r("session"));
}
function Di() {
}
function wu(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, fu(e);
  }));
}
function _u(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: r, prefix: n } = e, i = e.iconsToLoad;
    delete e.iconsToLoad;
    let o;
    if (!i || !(o = e0(r)))
      return;
    o.prepare(r, n, i).forEach((c) => {
      xu(r, c, (f) => {
        if (typeof f != "object")
          c.icons.forEach((s) => {
            e.missing.add(s);
          });
        else
          try {
            const s = h0(
              e,
              f
            );
            if (!s.length)
              return;
            const u = e.pendingIcons;
            u && s.forEach((h) => {
              u.delete(h);
            }), yu(e, f);
          } catch (s) {
            console.error(s);
          }
        wu(e);
      });
    });
  }));
}
const Su = (e, t) => {
  const r = hu(e, !0, Ro()), n = cu(r);
  if (!n.pending.length) {
    let f = !0;
    return t && setTimeout(() => {
      f && t(
        n.loaded,
        n.missing,
        n.pending,
        Di
      );
    }), () => {
      f = !1;
    };
  }
  const i = /* @__PURE__ */ Object.create(null), o = [];
  let a, c;
  return n.pending.forEach((f) => {
    const { provider: s, prefix: u } = f;
    if (u === c && s === a)
      return;
    a = s, c = u, o.push(St(s, u));
    const h = i[s] || (i[s] = /* @__PURE__ */ Object.create(null));
    h[u] || (h[u] = []);
  }), n.pending.forEach((f) => {
    const { provider: s, prefix: u, name: h } = f, l = St(s, u), p = l.pendingIcons || (l.pendingIcons = /* @__PURE__ */ new Set());
    p.has(h) || (p.add(h), i[s][u].push(h));
  }), o.forEach((f) => {
    const { provider: s, prefix: u } = f;
    i[s][u].length && _u(f, i[s][u]);
  }), t ? lu(t, n, o) : Di;
};
function Eu(e, t) {
  const r = {
    ...e
  };
  for (const n in t) {
    const i = t[n], o = typeof i;
    n in To ? (i === null || i && (o === "string" || o === "number")) && (r[n] = i) : o === typeof r[n] && (r[n] = n === "rotate" ? i % 4 : i);
  }
  return r;
}
const ku = /[\s,]+/;
function Cu(e, t) {
  t.split(ku).forEach((r) => {
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
function Bu(e, t = 0) {
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
function Au(e, t) {
  let r = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const n in t)
    r += " " + n + '="' + t[n] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e + "</svg>";
}
function Ru(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Tu(e) {
  return "data:image/svg+xml," + Ru(e);
}
function Nu(e) {
  return 'url("' + Tu(e) + '")';
}
const Li = {
  ...No,
  inline: !1
}, Iu = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Ou = {
  display: "inline-block"
}, i0 = {
  backgroundColor: "currentColor"
}, Ho = {
  backgroundColor: "transparent"
}, Pi = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, Mi = {
  webkitMask: i0,
  mask: i0,
  background: Ho
};
for (const e in Mi) {
  const t = Mi[e];
  for (const r in Pi)
    t[e + r] = Pi[r];
}
const mr = {};
["horizontal", "vertical"].forEach((e) => {
  const t = e.slice(0, 1) + "Flip";
  mr[e + "-flip"] = t, mr[e.slice(0, 1) + "-flip"] = t, mr[e + "Flip"] = t;
});
function $i(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const Fi = (e, t) => {
  const r = Eu(Li, t), n = { ...Iu }, i = t.mode || "svg", o = {}, a = t.style, c = typeof a == "object" && !(a instanceof Array) ? a : {};
  for (let g in t) {
    const S = t[g];
    if (S !== void 0)
      switch (g) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          r[g] = S === !0 || S === "true" || S === 1;
          break;
        case "flip":
          typeof S == "string" && Cu(r, S);
          break;
        case "color":
          o.color = S;
          break;
        case "rotate":
          typeof S == "string" ? r[g] = Bu(S) : typeof S == "number" && (r[g] = S);
          break;
        case "ariaHidden":
        case "aria-hidden":
          S !== !0 && S !== "true" && delete n["aria-hidden"];
          break;
        default: {
          const T = mr[g];
          T ? (S === !0 || S === "true" || S === 1) && (r[T] = !0) : Li[g] === void 0 && (n[g] = S);
        }
      }
  }
  const f = Kf(e, r), s = f.attributes;
  if (r.inline && (o.verticalAlign = "-0.125em"), i === "svg") {
    n.style = {
      ...o,
      ...c
    }, Object.assign(n, s);
    let g = 0, S = t.id;
    return typeof S == "string" && (S = S.replace(/-/g, "_")), n.innerHTML = Qf(f.body, S ? () => S + "ID" + g++ : "iconifyVue"), _0("svg", n);
  }
  const { body: u, width: h, height: l } = e, p = i === "mask" || (i === "bg" ? !1 : u.indexOf("currentColor") !== -1), b = Au(u, {
    ...s,
    width: h + "",
    height: l + ""
  });
  return n.style = {
    ...o,
    "--svg": Nu(b),
    width: $i(s.width),
    height: $i(s.height),
    ...Ou,
    ...p ? i0 : Ho,
    ...c
  }, _0("span", n);
};
Ro(!0);
Jf("", au);
if (typeof document < "u" && typeof window < "u") {
  Fo();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, r = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((n) => {
      try {
        // Check if item is an object and not null/array
        (typeof n != "object" || n === null || n instanceof Array || // Check for 'icons' and 'prefix'
        typeof n.icons != "object" || typeof n.prefix != "string" || // Add icon set
        !Uf(n)) && console.error(r);
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
          eu(r, i) || console.error(n);
        } catch {
          console.error(n);
        }
      }
  }
}
const Du = {
  ...xn,
  body: ""
}, hr = cn({
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
      if (typeof e != "string" || (r = vn(e, !1, !0)) === null)
        return this.abortLoading(), null;
      const n = qf(r);
      if (!n)
        return (!this._loadingIcon || this._loadingIcon.name !== e) && (this.abortLoading(), this._name = "", n !== null && (this._loadingIcon = {
          name: e,
          abort: Su([r], () => {
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
      return Fi(Du, e);
    let r = e;
    return t.classes && (r = {
      ...e,
      class: (typeof e.class == "string" ? e.class + " " : "") + t.classes.join(" ")
    }), Fi({
      ...xn,
      ...t.data
    }, r);
  }
}), Lu = (e) => {
  const t = "--ik-main-icon-deep-color", r = "--ik-main-icon-color", n = /fill="([^"]*)"/g;
  let i, o = 0, a = e;
  for (a = a.replaceAll('fill="#71778D"', `fill="var(${t})"`), a = a.replaceAll('fill="#A1A5B7"', `fill="var(${t})"`), a = a.replaceAll('fill="#E3E4E9"', `fill="var(${r})"`), a = a.replaceAll('fill="#B9BAC5"', `fill="var(${r})"`); (i = n.exec(e)) !== null; ) {
    const c = i[1];
    o === 0 ? a = a.replace(`fill="${c}"`, `fill="var(${ki.colorIsDark(c) ? t : r})"`) : a = a.replace(`fill="${c}"`, `fill="var(${ki.colorIsDark(c) ? t : r})"`), o++;
  }
  return a;
}, Pu = (e) => {
  const t = /<symbol(.|\n)*?<\/symbol>/g, r = e == null ? void 0 : e.match(t);
  if (!r)
    return {};
  const n = {}, i = new DOMParser();
  for (const o of r) {
    const a = i.parseFromString(o, "text/xml").firstChild;
    if (!a || a.nodeName !== "symbol")
      continue;
    const c = a.getAttribute("id");
    if (!c)
      continue;
    const f = o.replace(/<symbol[^>]*>|<\/symbol>/gi, ""), s = Lu(f);
    n[c] = s;
  }
  return n;
}, Mu = Pu, $u = ["innerHTML"], Fu = ["xlink:href"], Hu = ["innerHTML"], zu = ["xlink:href"], qu = ["innerHTML"], Wu = ["xlink:href"], Uu = ["innerHTML"], Vu = ["xlink:href"], Yu = /* @__PURE__ */ cn({
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
    const r = e, n = Nt.local.has("ik-svg"), i = n ? Nt.local.getItem("ik-svg") : Mu(window._iconfont_svg_string);
    n || Nt.local.setItem("ik-svg", i);
    const o = {}.VITE_ICON_SUFFIX, a = je(() => {
      var p, b, g, S;
      return (p = r.name) != null && p.includes("iksvg") ? "svg" : ((b = r == null ? void 0 : r.name) == null ? void 0 : b.indexOf("-")) > 0 || ((g = r == null ? void 0 : r.name) == null ? void 0 : g.indexOf(o)) === 0 ? r.runtime ? "svg" : "css" : (S = r.name) != null && S.includes(":") ? "svg" : "custom";
    }), c = je(() => {
      var p;
      if (((p = r.name) == null ? void 0 : p.indexOf("i-")) === 0) {
        let b = r.name;
        return r.runtime && (b = b.replace("i-", "")), b;
      } else
        return r.name;
    }), f = je(() => {
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
    }), s = je(
      () => r.showBg ? `width: ${r.width}px; height: ${r.width}px;background-color: ${r.type === "primary" ? r.background : ""};` : ""
    ), u = je(() => {
      var p;
      if (i[c.value])
        return i[c.value];
      {
        const b = (p = r.name) == null ? void 0 : p.replace("icon-", "iksvg_");
        return i[b] ? i[b] : "";
      }
    }), h = je(() => ["all", "label"].includes(r.showType)), l = je(
      () => ["big", "default", "small"].includes(r.size) ? r.size === "big" ? 20 : r.size === "default" ? 16 : 14 : r.size
    );
    return (p, b) => {
      const g = it("el-icon"), S = it("el-button"), T = it("el-tooltip"), _ = it("iksvg");
      return le(), ke(_, { class: "inline-flex" }, {
        default: ve(() => [
          r.pop && !h.value ? (le(), ke(T, {
            key: 0,
            placement: "top",
            title: "",
            "popper-class": "ik-svg-icon-popover",
            trigger: "hover",
            enterable: !1,
            content: e.title
          }, {
            default: ve(() => [
              e.showType === "icon" ? (le(), ke(g, lt({
                key: 0,
                style: s.value,
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
                default: ve(() => {
                  var d, x;
                  return [
                    u.value ? (le(), Ae("svg", {
                      key: 0,
                      style: _e(f.value),
                      viewBox: "0 0 1024 1024",
                      innerHTML: u.value
                    }, null, 12, $u)) : a.value === "css" ? (le(), Ae("i", {
                      key: 1,
                      class: _t(`${Ce(o)} ${c.value} ${(d = e.name) == null ? void 0 : d.split("-")[0]} ${(x = e.name) != null && x.startsWith("ik") ? "ik iksvg" : "iconfont"}`),
                      style: _e(`${f.value};fontSize:${l.value}px;`)
                    }, null, 6)) : a.value === "svg" ? (le(), ke(Ce(hr), {
                      key: 2,
                      icon: c.value,
                      style: _e(f.value)
                    }, null, 8, ["icon", "style"])) : (le(), Ae("svg", {
                      key: 3,
                      style: _e(f.value),
                      "aria-hidden": "true"
                    }, [
                      ot("use", {
                        "xlink:href": `#icon-${c.value}`
                      }, null, 8, Fu)
                    ], 4))
                  ];
                }),
                _: 1
              }, 16, ["style", "size", "class"])) : e.showType === "label" ? (le(), ke(S, {
                key: 1,
                text: ""
              }, {
                default: ve(() => [
                  Ge(st(e.label), 1)
                ]),
                _: 1
              })) : e.showType === "all" ? (le(), ke(S, { key: 2 }, {
                icon: ve(() => [
                  Ke(g, lt({
                    style: s.value,
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
                    default: ve(() => {
                      var d, x;
                      return [
                        u.value ? (le(), Ae("svg", {
                          key: 0,
                          style: _e(f.value),
                          viewBox: "0 0 1024 1024",
                          innerHTML: u.value
                        }, null, 12, Hu)) : a.value === "css" ? (le(), Ae("i", {
                          key: 1,
                          class: _t(`${Ce(o)} ${c.value} ${(d = e.name) == null ? void 0 : d.split("-")[0]} ${(x = e.name) != null && x.startsWith("ik") ? "ik iksvg" : "iconfont"}`),
                          style: _e(`${f.value};fontSize:${l.value}px;`)
                        }, null, 6)) : a.value === "svg" ? (le(), ke(Ce(hr), {
                          key: 2,
                          icon: c.value,
                          style: _e(f.value)
                        }, null, 8, ["icon", "style"])) : (le(), Ae("svg", {
                          key: 3,
                          style: _e(f.value),
                          "aria-hidden": "true"
                        }, [
                          ot("use", {
                            "xlink:href": `#icon-${c.value}`
                          }, null, 8, zu)
                        ], 4))
                      ];
                    }),
                    _: 1
                  }, 16, ["style", "size", "class"])
                ]),
                default: ve(() => [
                  Ge(" " + st(e.label), 1)
                ]),
                _: 1
              })) : yr("", !0)
            ]),
            _: 1
          }, 8, ["content"])) : (le(), Ae($n, { key: 1 }, [
            e.showType === "icon" ? (le(), ke(g, lt({
              key: 0,
              style: s.value,
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
              default: ve(() => {
                var d, x;
                return [
                  u.value ? (le(), Ae("svg", {
                    key: 0,
                    style: _e(f.value),
                    viewBox: "0 0 1024 1024",
                    innerHTML: u.value
                  }, null, 12, qu)) : a.value === "css" ? (le(), Ae("i", {
                    key: 1,
                    class: _t(`${Ce(o)} ${c.value} ${(d = e.name) == null ? void 0 : d.split("-")[0]} ${(x = e.name) != null && x.startsWith("ik") ? "ik iksvg" : "iconfont"}`),
                    style: _e(`${f.value};fontSize:${l.value}px;`)
                  }, null, 6)) : a.value === "svg" ? (le(), ke(Ce(hr), {
                    key: 2,
                    icon: c.value,
                    style: _e(f.value)
                  }, null, 8, ["icon", "style"])) : (le(), Ae("svg", {
                    key: 3,
                    style: _e(f.value),
                    "aria-hidden": "true"
                  }, [
                    ot("use", {
                      "xlink:href": `#icon-${c.value}`
                    }, null, 8, Wu)
                  ], 4))
                ];
              }),
              _: 1
            }, 16, ["style", "size", "class"])) : e.showType === "label" ? (le(), ke(S, lt({
              key: 1,
              text: ""
            }, p.$attrs), {
              default: ve(() => [
                Ge(st(e.label), 1)
              ]),
              _: 1
            }, 16)) : e.showType === "all" ? (le(), ke(S, lt({
              key: 2,
              text: "",
              type: "primary"
            }, p.$attrs), {
              icon: ve(() => [
                Ke(g, lt({
                  style: s.value,
                  class: ["ik-icon-btn hover", [e.type, `ik-${c.value}`]]
                }, p.$attrs, {
                  onClick: b[3] || (b[3] = (d) => t("click", d))
                }), {
                  default: ve(() => {
                    var d, x;
                    return [
                      u.value ? (le(), Ae("svg", {
                        key: 0,
                        style: _e(f.value),
                        viewBox: "0 0 1024 1024",
                        innerHTML: u.value
                      }, null, 12, Uu)) : a.value === "css" ? (le(), Ae("i", {
                        key: 1,
                        class: _t(`${Ce(o)} ${c.value} ${(d = e.name) == null ? void 0 : d.split("-")[0]} ${(x = e.name) != null && x.startsWith("ik") ? "ik iksvg" : "iconfont"}`),
                        style: _e(`${f.value};fontSize:${l.value}px;`)
                      }, null, 6)) : a.value === "svg" ? (le(), ke(Ce(hr), {
                        key: 2,
                        icon: c.value,
                        style: _e(f.value)
                      }, null, 8, ["icon", "style"])) : (le(), Ae("svg", {
                        key: 3,
                        style: _e(f.value),
                        "aria-hidden": "true"
                      }, [
                        ot("use", {
                          "xlink:href": `#icon-${c.value}`
                        }, null, 8, Vu)
                      ], 4))
                    ];
                  }),
                  _: 1
                }, 16, ["style", "class"])
              ]),
              default: ve(() => [
                Ge(" " + st(e.label), 1)
              ]),
              _: 1
            }, 16)) : yr("", !0)
          ], 64))
        ]),
        _: 1
      });
    };
  }
});
const ju = /* @__PURE__ */ l0(Yu, [["__scopeId", "data-v-3d0fc4c6"]]), Ku = o0(ju), Hi = {
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
}, Gu = {
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
}, Zu = /* @__PURE__ */ cn({
  __name: "IkDragList",
  props: Gu,
  emits: ["change"],
  setup(e, { emit: t }) {
    const r = e, n = wt([]);
    zi(
      () => r.list,
      (f) => {
        n.value = ut.cloneDeep(f);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    const i = je(() => ({
      ...Hi,
      ...r,
      itemStyle: {
        ...Hi.itemStyle,
        ...r.itemStyle
      }
    })), o = wt(!1), a = () => {
      o.value = !0;
    }, c = (f) => {
      o.value = !1;
      const s = r.list[f.oldIndex];
      t("change", n.value, {
        ...s,
        oldIndex: f.oldIndex,
        newIndex: f.newIndex
      });
    };
    return (f, s) => {
      const u = it("el-icon");
      return le(), ke(Ce(ys), {
        modelValue: n.value,
        "onUpdate:modelValue": s[0] || (s[0] = (h) => n.value = h),
        class: _t(["list-group", [i.value.groupClass]]),
        tag: "ul",
        attrs: i.value,
        animation: i.value.animation,
        group: i.value.group,
        disabled: i.value.disabled,
        "ghost-class": i.value.ghostClass,
        "force-fallback": i.value.ghostClass,
        "item-key": "order",
        onStart: a,
        onEnd: c
      }, {
        item: ve(({ element: h }) => [
          Ke(ls, {
            type: "transition",
            name: "flip-list"
          }, {
            default: ve(() => [
              f.$slots.item ? S0(f.$slots, "item", {
                key: 0,
                item: h
              }, void 0, !0) : (le(), Ae("li", {
                key: 1,
                class: _t(["list-group-item", [i.value.itemClass]]),
                style: _e({
                  borderRadius: `${i.value.itemStyle.radius}px`,
                  marginBottom: `${i.value.itemStyle.bottom}px`,
                  backgroundColor: `${i.value.itemStyle.background}`
                })
              }, [
                i.value.showIcon && !f.$slots.icon ? (le(), ke(u, { key: 0 }, {
                  default: ve(() => [
                    Ke(Ce(ms))
                  ]),
                  _: 1
                })) : S0(f.$slots, "icon", { key: 1 }, void 0, !0),
                Ge(" " + st(h.label), 1)
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
const Xu = /* @__PURE__ */ l0(Zu, [["__scopeId", "data-v-d2a34939"]]), Qu = o0(Xu), Ju = (e) => (xs("data-v-d488f4ef"), e = e(), bs(), e), el = /* @__PURE__ */ Ju(() => /* @__PURE__ */ ot("i", { class: "ik ik-shezhi" }, null, -1)), tl = { class: "check-right" }, rl = { class: "dialog-footer" }, nl = /* @__PURE__ */ cn({
  __name: "IkBtnSetting",
  props: E0({
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
  emits: E0(["sort"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = e, n = hs(e, "modelValue"), { t: i, dialog: o, path: a, user: c } = r.config, f = je(() => `${c == null ? void 0 : c.id}_${a}${r.tab !== "" ? `_${r.tab}` : ""}`), s = wt([]), u = wt([]), h = wt([]), l = /* @__PURE__ */ new Map(), p = wt(!1), b = je(() => {
      const w = u.value.length && u.value.length !== r.list.length;
      return !w && u.value.length && (p.value = !0), !!w;
    }), g = (w) => {
      var B;
      const k = ut.cloneDeep(h.value);
      k == null || k.forEach((I) => {
        var E;
        if (!u.value.length)
          h.value = [];
        else if (!u.value.includes(I == null ? void 0 : I.key)) {
          const A = (E = h.value) == null ? void 0 : E.findIndex((L) => L.key === I.key);
          A !== -1 && h.value.splice(A, 1), I.show = !1, l.set(I.key, I);
        }
      }), u.value.forEach((I) => {
        var A;
        if (((A = h.value) == null ? void 0 : A.findIndex((L) => (L == null ? void 0 : L.key) === I)) === -1) {
          const L = l.get(I);
          L && (L.show = !0, h.value.push(L));
        }
      }), (B = h.value) != null && B.length || (h.value = ut.cloneDeep(r.list)), w === !0 && (t("sort", ut.cloneDeep(h.value)), n.value = ut.cloneDeep(h.value));
    }, S = (w) => {
      if (w)
        u.value = r.list.map((k) => k.key);
      else {
        const k = r.list.find((B) => !B.key || B.label === "操作");
        u.value = k ? [k.key] : [];
      }
      g();
    }, T = () => {
      const w = Nt.local.getItem(f.value);
      try {
        const k = ut.cloneDeep(r == null ? void 0 : r.list);
        if ((!w || !(w != null && w.length)) && Nt.local.setItem(
          f.value,
          k.map(({ show: B, type: I, key: E, label: A, width: L, minWidth: O, align: $ }) => ({
            show: B,
            key: E,
            type: I,
            label: A,
            width: L,
            minWidth: O,
            align: $
          }))
        ), s.value = [
          ...(k == null ? void 0 : k.map((B) => (l.set(B.key, B), {
            ...B,
            show: B.show || !1
          }))) || []
        ], w) {
          const B = w.filter((I) => I.show).map((I) => I.key);
          u.value = [...B];
        } else {
          const B = s.value.filter((I) => I.show);
          u.value = B.map((I) => I.key);
        }
        g(!0);
      } catch (k) {
        console.info("error: ", k);
      }
    };
    T(), zi(() => r.list, () => {
      T();
    }, { deep: !0 });
    const _ = wt(!1), d = () => {
      _.value = !0;
    }, x = (w) => {
      h.value = w;
    }, y = () => {
      _.value = !1, Nt.local.setItem(
        f.value,
        h.value.map(({ show: w, key: k, label: B, value: I, width: E, minWidth: A, align: L }) => ({
          show: w,
          key: k,
          label: B,
          value: I,
          width: E,
          minWidth: A,
          align: L
        }))
      ), console.log("sortList ", h), t("sort", ut.cloneDeep(h.value)), n.value = ut.cloneDeep(h.value);
    };
    return (w, k) => {
      const B = it("el-button"), I = it("el-checkbox"), E = it("el-checkbox-group"), A = it("el-dialog"), L = ds("role");
      return le(), Ae($n, null, [
        e.btnType === "button" ? k0((le(), ke(B, lt({ key: 0 }, w.$attrs, {
          circle: e.circle,
          type: e.type,
          style: { minWidth: e.circle ? "40px" : "", minHeight: e.circle ? "40px" : "" },
          onClick: d
        }), ps({
          icon: ve(() => [
            el
          ]),
          _: 2
        }, [
          e.circle ? void 0 : {
            name: "default",
            fn: ve(() => [
              Ge(st(Ce(i)("设置")), 1)
            ]),
            key: "0"
          }
        ]), 1040, ["circle", "type", "style"])), [
          [L, w.$props.role]
        ]) : yr("", !0),
        e.btnType === "icon" ? k0((le(), ke(Ce(Ku), lt({
          key: 1,
          name: "iksvg_shezhi2",
          "show-bg": "",
          pop: "",
          width: 40,
          size: "big"
        }, w.$attrs, { onClick: d }), null, 16)), [
          [L, w.$props.role]
        ]) : yr("", !0),
        Ke(A, {
          modelValue: _.value,
          "onUpdate:modelValue": k[3] || (k[3] = (O) => _.value = O),
          draggable: "",
          width: e.inline ? Ce(o).l : Ce(o).sl,
          "close-on-click-modal": !1,
          "close-on-press-escape": !1,
          title: "显示字段",
          "append-to-body": "",
          onOpen: T
        }, {
          footer: ve(() => [
            ot("div", rl, [
              Ke(B, {
                onClick: k[2] || (k[2] = (O) => _.value = !1)
              }, {
                default: ve(() => [
                  Ge(st(Ce(i)("关闭")) + " ", 1)
                ]),
                _: 1
              }),
              Ke(B, {
                type: "primary",
                disabled: h.value.length < 2,
                onClick: y
              }, {
                default: ve(() => [
                  Ge(st(h.value.length < 2 ? "至少选择一个字段" : Ce(i)("确定")), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          default: ve(() => [
            ot("div", {
              class: _t(["view-fields", [e.inline ? null : "un-inline"]])
            }, [
              ot("div", {
                style: _e({ flex: e.inline ? 2 : 1 })
              }, [
                Ke(I, {
                  modelValue: p.value,
                  "onUpdate:modelValue": k[0] || (k[0] = (O) => p.value = O),
                  class: "single-line",
                  indeterminate: b.value,
                  onChange: S
                }, {
                  default: ve(() => [
                    Ge(" 全选 ")
                  ]),
                  _: 1
                }, 8, ["modelValue", "indeterminate"]),
                Ke(E, {
                  modelValue: u.value,
                  "onUpdate:modelValue": k[1] || (k[1] = (O) => u.value = O),
                  onChange: g
                }, {
                  default: ve(() => [
                    (le(!0), Ae($n, null, vs(s.value, (O) => (le(), ke(I, {
                      key: O.key,
                      disabled: !O.key,
                      label: O.key
                    }, {
                      default: ve(() => [
                        Ge(st(O.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["disabled", "label"]))), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ], 4),
              ot("div", tl, [
                Ke(Ce(Qu), {
                  list: h.value,
                  "item-style": { bottom: 4 },
                  onChange: x
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
const il = /* @__PURE__ */ l0(nl, [["__scopeId", "data-v-d488f4ef"]]), ul = o0(il);
export {
  ul as IkBtnSetting,
  ul as default
};
